import ConfidentialKey from "../models/confidentialKeys.js";

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
