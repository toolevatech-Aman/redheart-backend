import crypto      from "crypto";
import nodemailer   from "nodemailer";
import Razorpay     from "razorpay";
import ValentinePage from "../models/ValentinePage.js";
import ConfidentialKey from "../models/confidentialKeys.js";

// ─── Tier + gift pricing (server-side source of truth) ───────────────────────
const TIER_PRICES = { free: 99, popular: 179, lifetime: 249 };
const GIFT_PRICES = {
  "red-roses": 499, bouquet: 699, "money-plant": 399,
  succulent: 349, chocolates: 299, none: 0,
};

async function getRazorpayKeys() {
  const rows = await ConfidentialKey.find({
    key: { $in: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"] },
  });
  const m = {};
  rows.forEach(r => (m[r.key] = r.value));
  if (!m.RAZORPAY_KEY_ID || !m.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys not configured");
  }
  return { keyId: m.RAZORPAY_KEY_ID, keySecret: m.RAZORPAY_KEY_SECRET };
}

// ─── Email transporter ────────────────────────────────────────────────────────
function getTransporter() {
  if (process.env.GMAIL_USER) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASS },
    });
  }
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return null;
}

async function sendYesNotification(page) {
  const transporter = getTransporter();
  if (!transporter || !page.email) return;
  try {
    await transporter.sendMail({
      from:    `"RedHeart 💗" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
      to:      page.email,
      subject: `${page.partnerName || "She"} said YES! 💗`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#fff7f7;border-radius:16px;">
          <h1 style="color:#c0392b;font-size:28px;margin-bottom:8px;">She said YES! 🎉</h1>
          <p style="color:#555;font-size:16px;margin-bottom:24px;">
            <strong>${page.partnerName || "She"}</strong> just tapped Yes on your surprise page.
            ${page.giftId && page.giftId !== "none" ? "Your gift order is being processed and will be delivered soon. 🌹" : ""}
          </p>
          <a href="https://redheart.in/valentine-surprise/${page.slug}"
            style="display:inline-block;background:#c0392b;color:#fff;padding:14px 28px;border-radius:50px;text-decoration:none;font-weight:bold;font-size:15px;">
            View your page →
          </a>
          <p style="color:#aaa;font-size:12px;margin-top:24px;">
            This notification is because you created a surprise page on RedHeart.<br/>
            Page views so far: <strong>${page.viewCount || 1}</strong>
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Valentine email error:", err.message);
  }
}

// ─── POST /api/valentine — save draft (payment fields are stripped) ───────────
export const createValentinePage = async (req, res) => {
  try {
    const { slug, ...rest } = req.body;
    if (!slug) return res.status(400).json({ error: "slug is required" });

    // Strip all payment-related fields — only verifyPayment may set these
    delete rest.isPaid;
    delete rest.razorpayOrderId;
    delete rest.razorpayPaymentId;
    delete rest.amountPaid;

    const page = await ValentinePage.findOneAndUpdate(
      { slug },
      { $set: { slug, ...rest } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return res.status(200).json({ ok: true, slug: page.slug, id: page._id });
  } catch (err) {
    console.error("createValentinePage error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── GET /api/valentine/:slug — fetch page (paid-only) ───────────────────────
export const getValentinePage = async (req, res) => {
  try {
    const { slug } = req.params;
    const page = await ValentinePage.findOne({ slug });
    if (!page) return res.status(404).json({ error: "Page not found" });
    if (!page.isPaid) return res.status(402).json({ error: "Page not active yet" });
    return res.status(200).json(page);
  } catch (err) {
    console.error("getValentinePage error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── PATCH /api/valentine/:slug/view ─────────────────────────────────────────
export const trackView = async (req, res) => {
  try {
    const { slug } = req.params;
    await ValentinePage.updateOne(
      { slug },
      { $inc: { viewCount: 1 }, $set: { lastViewedAt: new Date() } }
    );
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── POST /api/valentine/:slug/respond ───────────────────────────────────────
export const recordResponse = async (req, res) => {
  try {
    const { slug } = req.params;
    const { address, recipientName, answers } = req.body || {};
    const addrObj = typeof address === "object" ? address : {};
    const addrStr = addrObj.line1
      ? `${addrObj.name}, ${addrObj.line1}, ${addrObj.city} - ${addrObj.pincode}`
      : (address || "");

    const page = await ValentinePage.findOneAndUpdate(
      { slug },
      {
        $set: {
          responded:       true,
          respondedAt:     new Date(),
          deliveryAddress: addrStr,
          deliveryPhone:   addrObj.phone || "",
          recipientName:   recipientName || "",
          followUpAnswers: answers || [],
        },
      },
      { new: true }
    );

    if (!page) return res.status(404).json({ error: "Page not found" });

    sendYesNotification(page);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("recordResponse error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── POST /api/valentine/create-order ────────────────────────────────────────
export const createOrder = async (req, res) => {
  try {
    const { slug, tierId, giftId, upgradeFromTierId } = req.body;
    if (!slug || !tierId) return res.status(400).json({ error: "slug and tierId required" });

    const tierPrice = TIER_PRICES[tierId];
    if (tierPrice === undefined) return res.status(400).json({ error: "invalid tier" });

    let amount;
    if (upgradeFromTierId) {
      const fromPrice = TIER_PRICES[upgradeFromTierId] ?? 0;
      amount = Math.max(1, TIER_PRICES["lifetime"] - fromPrice);
    } else {
      const giftPrice = (giftId && giftId !== "none") ? (GIFT_PRICES[giftId] || 0) : 0;
      amount = tierPrice + giftPrice;
    }

    const { keyId, keySecret } = await getRazorpayKeys();
    const rzp = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const order = await rzp.orders.create({
      amount:   amount * 100,
      currency: "INR",
      receipt:  `rh_${slug}_${Date.now()}`,
    });

    await ValentinePage.findOneAndUpdate(
      { slug },
      { $set: { razorpayOrderId: order.id } },
      { upsert: true, setDefaultsOnInsert: true }
    );

    return res.status(200).json({ orderId: order.id, amount, keyId });
  } catch (err) {
    console.error("createOrder error:", err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
};

// ─── POST /api/valentine/verify-payment ──────────────────────────────────────
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      slug,
      tierId,
      giftDetails = {},
      isUpgrade = false,
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !slug || !tierId) {
      return res.status(400).json({ error: "missing required fields" });
    }

    const { keySecret } = await getRazorpayKeys();

    const expected = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expected !== razorpay_signature) {
      return res.status(400).json({ error: "invalid payment signature" });
    }

    // Compute amount server-side (cannot trust client)
    const tierPrice = TIER_PRICES[tierId] ?? 99;
    const giftId    = giftDetails.giftId;
    const giftPrice = (!isUpgrade && giftId && giftId !== "none") ? (GIFT_PRICES[giftId] || 0) : 0;
    const amountPaid = tierPrice + giftPrice;

    const addrObj = giftDetails.address || {};
    const deliveryAddress = addrObj.line1
      ? `${addrObj.name}, ${addrObj.line1}, ${addrObj.city} - ${addrObj.pincode}`
      : "";

    const update = {
      tier:              tierId,
      isPaid:            true,
      razorpayOrderId:   razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      amountPaid,
    };

    if (!isUpgrade) {
      update.giftId        = giftId || "";
      update.deliveryDate  = giftDetails.deliveryDate || "";
      update.deliverySlot  = giftDetails.deliverySlot || "";
      update.deliveryAddress = deliveryAddress;
      update.deliveryPhone = addrObj.phone || "";
    }

    await ValentinePage.findOneAndUpdate(
      { slug },
      { $set: update },
      { new: true }
    );

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("verifyPayment error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
