import crypto      from "crypto";
import nodemailer   from "nodemailer";
import Razorpay     from "razorpay";
import ValentinePage from "../models/ValentinePage.js";
import ConfidentialKey from "../models/confidentialKeys.js";

// ─── Dashboard magic-link OTP store (in-memory, survives restarts poorly but fine for low volume) ──
const dashOtpStore = new Map(); // email → { otp, expiresAt }

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
            Page views so far: <strong>${page.viewCount || 1}</strong><br/>
            <a href="https://redheart.in/dashboard" style="color:#c0392b;">View all your pages →</a>
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

    // Store order context so webhook can activate the page if browser closes before verify-payment
    const addrObj = req.body.address || {};
    const pendingAddr = addrObj.line1
      ? `${addrObj.name}, ${addrObj.line1}, ${addrObj.city} - ${addrObj.pincode}`
      : "";

    await ValentinePage.findOneAndUpdate(
      { slug },
      {
        $set: {
          razorpayOrderId:      order.id,
          pendingTierId:        tierId,
          pendingGiftId:        req.body.giftId        || "",
          pendingDeliveryDate:  req.body.deliveryDate  || "",
          pendingDeliverySlot:  req.body.deliverySlot  || "",
          pendingDeliveryAddr:  pendingAddr,
          pendingDeliveryPhone: addrObj.phone || "",
        },
      },
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

// ─── Dashboard helpers ────────────────────────────────────────────────────────
function dashSecret() {
  return process.env.DASHBOARD_SECRET || "rh_dash_fallback_s3cr3t";
}

function signDashToken(email) {
  const expiry = Date.now() + 24 * 60 * 60 * 1000; // 24 h
  const sig    = crypto.createHmac("sha256", dashSecret()).update(`${email}:${expiry}`).digest("hex");
  return Buffer.from(JSON.stringify({ email, expiry, sig })).toString("base64url");
}

function verifyDashToken(token) {
  try {
    const { email, expiry, sig } = JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
    if (Date.now() > expiry) return null;
    const expected = crypto.createHmac("sha256", dashSecret()).update(`${email}:${expiry}`).digest("hex");
    if (sig !== expected) return null;
    return email;
  } catch {
    return null;
  }
}

// ─── POST /api/valentine/magic-link ──────────────────────────────────────────
export const sendMagicLink = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Valid email required" });
    }

    const otp       = String(Math.floor(100000 + Math.random() * 900000));
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 min
    dashOtpStore.set(email.toLowerCase(), { otp, expiresAt });

    const transporter = getTransporter();
    if (!transporter) return res.status(500).json({ error: "Email not configured" });

    await transporter.sendMail({
      from:    `"RedHeart 💗" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
      to:      email,
      subject: "Your RedHeart dashboard code",
      html: `
        <div style="font-family:sans-serif;max-width:420px;margin:auto;padding:32px;background:#fff7f7;border-radius:16px;">
          <h2 style="color:#c0392b;margin-bottom:8px;">Your login code</h2>
          <p style="color:#555;font-size:15px;margin-bottom:24px;">
            Enter this code on the dashboard to see your surprise pages.
          </p>
          <div style="font-size:40px;font-weight:900;letter-spacing:10px;color:#c0392b;text-align:center;margin:24px 0;">
            ${otp}
          </div>
          <p style="color:#aaa;font-size:12px;text-align:center;">Expires in 10 minutes. Do not share this code.</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("sendMagicLink error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── POST /api/valentine/verify-magic-link ────────────────────────────────────
export const verifyMagicLink = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: "email and otp required" });

    const key    = email.toLowerCase();
    const stored = dashOtpStore.get(key);
    if (!stored || stored.otp !== String(otp) || Date.now() > stored.expiresAt) {
      return res.status(401).json({ error: "Invalid or expired code" });
    }

    dashOtpStore.delete(key);
    const token = signDashToken(key);
    return res.status(200).json({ ok: true, token });
  } catch (err) {
    console.error("verifyMagicLink error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── GET /api/valentine/my-pages ─────────────────────────────────────────────
export const getMyPages = async (req, res) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token      = authHeader.replace("Bearer ", "").trim();
    const email      = verifyDashToken(token);
    if (!email) return res.status(401).json({ error: "Unauthorized" });

    const pages = await ValentinePage.find(
      { email },
      {
        slug: 1, partnerName: 1, occasionKey: 1, occasion: 1,
        isPaid: 1, tier: 1, amountPaid: 1, viewCount: 1,
        responded: 1, respondedAt: 1, recipientName: 1,
        followUpAnswers: 1, createdAt: 1,
      }
    ).sort({ createdAt: -1 }).limit(50);

    return res.status(200).json(pages);
  } catch (err) {
    console.error("getMyPages error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── Abandonment recovery (called internally by interval + HTTP endpoint) ─────
export async function runAbandonmentEmails() {
  const transporter = getTransporter();
  if (!transporter) return { sent: 0, skipped: "no transporter" };

  const now              = new Date();
  const fourHoursAgo    = new Date(now - 4  * 60 * 60 * 1000);
  const twentyFourAgo   = new Date(now - 24 * 60 * 60 * 1000);

  const pages = await ValentinePage.find({
    isPaid:               false,
    email:                { $ne: "" },
    partnerName:          { $ne: "" },
    abandonmentEmailSent: { $ne: true },
    createdAt:            { $gte: twentyFourAgo, $lte: fourHoursAgo },
  }).limit(100);

  let sent = 0;
  for (const page of pages) {
    try {
      await transporter.sendMail({
        from:    `"RedHeart 💗" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
        to:      page.email,
        subject: `Your page for ${page.partnerName || "them"} is still waiting 💌`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:auto;padding:32px;background:#fff7f7;border-radius:16px;">
            <h1 style="color:#c0392b;font-size:24px;margin-bottom:8px;">Almost there! 💗</h1>
            <p style="color:#555;font-size:15px;margin-bottom:20px;">
              You created a surprise page for <strong>${page.partnerName}</strong> but haven't activated it yet.
              Once you pay, your page goes live and ${page.partnerName} gets the experience!
            </p>
            <a href="https://redheart.in/valentine-surprise/create?slug=${page.slug}"
              style="display:inline-block;background:#c0392b;color:#fff;padding:14px 28px;border-radius:50px;text-decoration:none;font-weight:bold;font-size:15px;">
              Finish & Activate →
            </a>
            <p style="color:#aaa;font-size:12px;margin-top:24px;">
              Pages start at just ₹99. Gifts are optional.
            </p>
          </div>
        `,
      });
      await ValentinePage.updateOne({ _id: page._id }, { $set: { abandonmentEmailSent: true } });
      sent++;
    } catch (err) {
      console.error(`Abandonment email failed for ${page.slug}:`, err.message);
    }
  }
  return { sent, total: pages.length };
}

// ─── POST /api/valentine/send-abandonment ─────────────────────────────────────
export const sendAbandonmentEmails = async (req, res) => {
  const secret = req.headers["x-abandonment-secret"] || req.body?.secret;
  if (secret !== process.env.ABANDONMENT_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const result = await runAbandonmentEmails();
    return res.status(200).json({ ok: true, ...result });
  } catch (err) {
    console.error("sendAbandonmentEmails error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// ─── POST /api/valentine/webhook — Razorpay webhook (raw body required) ───────
export const razorpayWebhook = async (req, res) => {
  try {
    // Webhook secret is separate from API key secret — set RAZORPAY_WEBHOOK_SECRET in .env
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("RAZORPAY_WEBHOOK_SECRET not set — webhook disabled");
      return res.status(200).json({ ok: true }); // return 200 so Razorpay doesn't retry
    }

    const signature = req.headers["x-razorpay-signature"];
    const body      = req.rawBody;

    if (!signature || !body) return res.status(400).json({ error: "missing signature or body" });

    const expected = crypto
      .createHmac("sha256", webhookSecret)
      .update(body)
      .digest("hex");

    if (expected !== signature) {
      return res.status(400).json({ error: "invalid webhook signature" });
    }

    const event = JSON.parse(body);
    if (event.event !== "payment.captured") return res.status(200).json({ ok: true });

    const payment  = event.payload?.payment?.entity;
    const orderId  = payment?.order_id;
    if (!orderId) return res.status(200).json({ ok: true });

    // Find page by the order ID stored at create-order time
    const page = await ValentinePage.findOne({ razorpayOrderId: orderId });
    if (!page || page.isPaid) return res.status(200).json({ ok: true }); // already activated

    const tierId    = page.pendingTierId || "free";
    const tierPrice = TIER_PRICES[tierId] ?? 99;
    const giftId    = page.pendingGiftId || "";
    const giftPrice = (giftId && giftId !== "none") ? (GIFT_PRICES[giftId] || 0) : 0;

    await ValentinePage.findOneAndUpdate(
      { _id: page._id },
      {
        $set: {
          isPaid:            true,
          tier:              tierId,
          razorpayPaymentId: payment.id,
          amountPaid:        tierPrice + giftPrice,
          giftId:            giftId,
          deliveryDate:      page.pendingDeliveryDate  || "",
          deliverySlot:      page.pendingDeliverySlot  || "",
          deliveryAddress:   page.pendingDeliveryAddr  || "",
          deliveryPhone:     page.pendingDeliveryPhone || "",
        },
      }
    );

    console.log(`[webhook] Activated page ${page.slug} via payment.captured`);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("razorpayWebhook error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
