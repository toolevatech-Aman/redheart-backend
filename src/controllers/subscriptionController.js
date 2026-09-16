import { createHmac } from "crypto";
import ConfidentialKey from "../models/confidentialKeys.js";
import Subscriber from "../models/Subscriber.js";
import { sendGA4Subscription } from "../utils/ga4.js";

async function getRazorpayKeys() {
  const rows = await ConfidentialKey.find({
    key: { $in: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"] },
  });
  const m = {};
  rows.forEach(r => (m[r.key] = r.value));
  if (!m.RAZORPAY_KEY_ID || !m.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys not configured in DB");
  }
  return { keyId: m.RAZORPAY_KEY_ID, keySecret: m.RAZORPAY_KEY_SECRET };
}

export async function createSubscription(req, res) {
  try {
    const { phone, type, planId } = req.body;

    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({ error: "Invalid phone number" });
    }

    const { keyId, keySecret } = await getRazorpayKeys();
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    // Create or find Razorpay customer
    let customerId = null;
    try {
      const custRes = await fetch("https://api.razorpay.com/v1/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Basic ${auth}` },
        body: JSON.stringify({ contact: `+91${phone}`, fail_existing: "0" }),
      });
      const cust = await custRes.json();
      customerId = cust.id || null;
    } catch {}

    // First charge after 3-day trial
    const startAt = Math.floor(Date.now() / 1000) + 3 * 24 * 60 * 60;

    const subBody = {
      plan_id: planId,
      total_count: 12,
      quantity: 1,
      customer_notify: 1,
      start_at: startAt,
      notes: { phone, type, trial: "3days" },
    };
    if (customerId) subBody.customer_id = customerId;

    const subRes = await fetch("https://api.razorpay.com/v1/subscriptions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Basic ${auth}` },
      body: JSON.stringify(subBody),
    });
    const sub = await subRes.json();

    if (sub.id) {
      await Subscriber.findOneAndUpdate(
        { phone },
        {
          $set: {
            phone, type, plan: "premium_trial",
            razorpayCustomerId: customerId || "",
            razorpaySubscriptionId: sub.id,
            subscriptionStatus: sub.status || "",
          },
          $setOnInsert: { subscribedAt: new Date() },
        },
        { upsert: true }
      ).catch(() => {});
      return res.json({ subscription_id: sub.id, key: keyId });
    }
    if (sub.short_url) {
      return res.json({ short_url: sub.short_url, key: keyId });
    }
    return res.status(500).json({ error: sub.error?.description || "Failed to create subscription" });
  } catch (err) {
    console.error("createSubscription error:", err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
}

// ─── POST /api/subscriptions/webhook — Razorpay subscription events ─────────
// The shayari/quotes trial signup had zero server-side confirmation before
// this: subscriptionStatus was set once, at creation, and never updated —
// not on activation, not on any of the up-to-12 monthly renewal charges, not
// on cancellation. GA4 tracking (purchase_shayari/purchase_quote) depended
// entirely on the browser staying open through Razorpay's checkout, same
// closed-browser risk as regular orders, but for a UPI AutoPay mandate flow
// that's proportionally more likely to hand off away from the tab.
//
// subscription.activated: the first payment confirmed. Only reports GA4 here
// if the client hasn't already (see SubscribeModal.jsx's handler, which marks
// firstChargeReported:true right after firing its own client-side event) —
// this is purely the recovery path for a signup whose browser never returned.
//
// subscription.charged: every charge, including renewals. No client-side
// equivalent exists for a renewal (no browser is open weeks/months later),
// so this always reports fresh, keyed by that charge's own payment id.
export const razorpaySubscriptionWebhook = async (req, res) => {
  try {
    const webhookSecret =
      process.env.RAZORPAY_SUBSCRIPTION_WEBHOOK_SECRET ||
      process.env.RAZORPAY_ORDER_WEBHOOK_SECRET ||
      process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("RAZORPAY_WEBHOOK_SECRET not set — subscription webhook disabled");
      return res.status(200).json({ ok: true }); // 200 so Razorpay doesn't retry
    }

    const signature = req.headers["x-razorpay-signature"];
    const body = req.rawBody;
    if (!signature || !body) return res.status(400).json({ error: "missing signature or body" });

    const expected = createHmac("sha256", webhookSecret).update(body).digest("hex");
    if (expected !== signature) return res.status(400).json({ error: "invalid webhook signature" });

    const event = JSON.parse(body);
    const subEntity = event.payload?.subscription?.entity;
    const paymentEntity = event.payload?.payment?.entity;
    const razorpaySubscriptionId = subEntity?.id || paymentEntity?.subscription_id;
    if (!razorpaySubscriptionId) return res.status(200).json({ ok: true });

    const subscriber = await Subscriber.findOne({ razorpaySubscriptionId });
    if (!subscriber) return res.status(200).json({ ok: true });

    const gaEventName = subscriber.type === "shayari" ? "purchase_shayari" : "purchase_quote";

    if (event.event === "subscription.activated") {
      if (!subscriber.firstChargeReported) {
        await Subscriber.updateOne(
          { _id: subscriber._id },
          { $set: { subscriptionStatus: "active", firstChargeReported: true } }
        );
        sendGA4Subscription(subscriber, {
          name: gaEventName,
          transactionId: paymentEntity?.id || razorpaySubscriptionId,
        }).catch((err) => console.error("sendGA4Subscription failed:", err.message));
        console.log(`[webhook] Recovered subscription ${razorpaySubscriptionId} via subscription.activated`);
      } else {
        await Subscriber.updateOne({ _id: subscriber._id }, { $set: { subscriptionStatus: "active" } });
      }
    } else if (event.event === "subscription.charged") {
      await Subscriber.updateOne(
        { _id: subscriber._id },
        { $set: { subscriptionStatus: "active", firstChargeReported: true } }
      );
      sendGA4Subscription(subscriber, {
        name: gaEventName,
        transactionId: paymentEntity?.id || `${razorpaySubscriptionId}_${Date.now()}`,
        value: paymentEntity?.amount ? paymentEntity.amount / 100 : 49,
      }).catch((err) => console.error("sendGA4Subscription failed:", err.message));
    } else if (event.event === "subscription.cancelled" || event.event === "subscription.halted") {
      await Subscriber.updateOne(
        { _id: subscriber._id },
        { $set: { subscriptionStatus: event.event === "subscription.cancelled" ? "cancelled" : "halted" } }
      );
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("razorpaySubscriptionWebhook error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
