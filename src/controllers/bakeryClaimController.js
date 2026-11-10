import { createHmac } from "crypto";
import BakeryClaim from "../models/BakeryClaim.js";
import ConfidentialKey from "../models/confidentialKeys.js";

const PLANS = ["", "free", "basic", "pro"];
const ROLES = ["owner", "manager", "staff", "other"];

// POST /api/bakery-claims — public: a bakery owner claims a listing
export const createClaim = async (req, res) => {
  try {
    const b = req.body || {};
    if (b.website) return res.status(201).json({ success: true }); // honeypot: bots fill this, pretend success

    const ownerName = String(b.ownerName || "").trim().slice(0, 100);
    const phone = String(b.phone || "").replace(/[^\d+]/g, "").replace(/^(\+?91)(?=\d{10}$)/, "");
    const email = String(b.email || "").trim().slice(0, 120);
    const shopCity = String(b.shopCity || "").trim().slice(0, 60);
    const shopSlug = String(b.shopSlug || "").trim().slice(0, 160);
    if (!ownerName) return res.status(400).json({ success: false, message: "Please enter your name." });
    if (!/^\d{10}$/.test(phone)) return res.status(400).json({ success: false, message: "Please enter a valid 10-digit mobile number." });
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ success: false, message: "Please enter a valid email." });
    if (!shopCity || !shopSlug) return res.status(400).json({ success: false, message: "Missing shop details." });

    const claim = await BakeryClaim.create({
      shopCity, shopSlug,
      shopName: String(b.shopName || "").trim().slice(0, 160),
      ownerName, phone, email,
      role: ROLES.includes(b.role) ? b.role : "owner",
      message: String(b.message || "").trim().slice(0, 1000),
      plan: PLANS.includes(b.plan) ? b.plan : "",
      sourceUrl: String(b.sourceUrl || "").slice(0, 300),
    });
    res.status(201).json({ success: true, data: { id: claim._id } });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong. Please try again." });
  }
};

// GET /api/bakery-claims — admin: all claims, newest first
export const getAllClaims = async (req, res) => {
  try {
    const claims = await BakeryClaim.find({}).sort({ createdAt: -1 }).limit(2000).lean();
    res.json({ success: true, data: claims.map((c) => ({ ...c, id: c._id })) });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PATCH /api/bakery-claims/:id — admin: change status and/or notes
export const updateClaim = async (req, res) => {
  try {
    const update = {};
    if (req.body.status !== undefined) {
      if (!["new", "contacted", "verified", "active", "rejected"].includes(req.body.status)) return res.status(400).json({ success: false, message: "Invalid status" });
      update.status = req.body.status;
    }
    if (req.body.notes !== undefined) update.notes = String(req.body.notes).slice(0, 2000);
    const claim = await BakeryClaim.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!claim) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: claim });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Paid plans (Razorpay subscriptions, monthly) ───────────────────────────
// Amounts live ONLY here, so a browser can never change what is charged. Prices are GST-inclusive.
export const PAID_PLANS = {
  basic: { amount: 9900,  name: "RedHeart Bakery Profile – Basic (monthly)" },
  pro:   { amount: 19900, name: "RedHeart Bakery Profile – Pro (monthly)" },
};
const CYCLES = 12; // monthly charges; the owner can cancel any time

async function getRazorpayKeys() {
  const rows = await ConfidentialKey.find({ key: { $in: ["RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"] } });
  const m = {};
  rows.forEach((r) => (m[r.key] = r.value));
  if (!m.RAZORPAY_KEY_ID || !m.RAZORPAY_KEY_SECRET) throw new Error("Razorpay keys not configured");
  return { keyId: m.RAZORPAY_KEY_ID, keySecret: m.RAZORPAY_KEY_SECRET };
}

const rzp = async (auth, path, body) => {
  const r = await fetch(`https://api.razorpay.com/v1${path}`, {
    method: "POST", headers: { "Content-Type": "application/json", Authorization: `Basic ${auth}` }, body: JSON.stringify(body),
  });
  return r.json();
};

// The Razorpay plan for an amount is created once, then its id is remembered in confidentialKeys.
async function ensurePlan(auth, planKey) {
  const def = PAID_PLANS[planKey];
  const storeKey = `RZP_PLAN_BAKERY_${planKey.toUpperCase()}_${def.amount}`;
  const found = await ConfidentialKey.findOne({ key: storeKey });
  if (found?.value) return found.value;
  const plan = await rzp(auth, "/plans", { period: "monthly", interval: 1, item: { name: def.name, amount: def.amount, currency: "INR" }, notes: { purpose: "bakery-claim", plan: planKey } });
  if (!plan.id) throw new Error(plan.error?.description || "Could not create plan");
  await ConfidentialKey.updateOne({ key: storeKey }, { $set: { value: plan.id } }, { upsert: true });
  return plan.id;
}

// POST /api/bakery-claims/:id/subscribe { plan } — public: start the subscription checkout for a claim
export const subscribeClaim = async (req, res) => {
  try {
    const plan = String(req.body?.plan || "");
    if (!PAID_PLANS[plan]) return res.status(400).json({ success: false, message: "Choose the Basic or Pro plan." });
    const claim = await BakeryClaim.findById(req.params.id);
    if (!claim) return res.status(404).json({ success: false, message: "Claim not found." });
    if (claim.paymentStatus === "paid") return res.status(409).json({ success: false, message: "This claim is already paid." });

    const { keyId, keySecret } = await getRazorpayKeys();
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const planId = await ensurePlan(auth, plan);

    let customerId = claim.razorpayCustomerId || "";
    if (!customerId) {
      const cust = await rzp(auth, "/customers", { name: claim.ownerName, contact: `+91${claim.phone}`, ...(claim.email ? { email: claim.email } : {}), fail_existing: "0", notes: { bakeryClaimId: String(claim._id) } });
      customerId = cust.id || "";
    }
    const sub = await rzp(auth, "/subscriptions", {
      plan_id: planId, total_count: CYCLES, quantity: 1, customer_notify: 1,
      ...(customerId ? { customer_id: customerId } : {}),
      notes: { bakeryClaimId: String(claim._id), plan, shop: claim.shopSlug },
    });
    if (!sub.id) return res.status(502).json({ success: false, message: sub.error?.description || "Could not start the payment." });

    claim.plan = plan; claim.paidPlan = plan; claim.razorpayCustomerId = customerId; claim.razorpaySubscriptionId = sub.id; claim.paymentStatus = "pending";
    await claim.save();
    res.json({ success: true, data: { subscription_id: sub.id, key: keyId, amount: PAID_PLANS[plan].amount / 100, name: claim.ownerName, contact: claim.phone, email: claim.email } });
  } catch (err) {
    console.error("subscribeClaim error:", err.message);
    res.status(500).json({ success: false, message: "Could not start the payment. Please try again." });
  }
};

// POST /api/bakery-claims/:id/verify { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } — public: confirm the first payment
export const verifyClaimPayment = async (req, res) => {
  try {
    const { razorpay_payment_id: pay, razorpay_subscription_id: sub, razorpay_signature: sig } = req.body || {};
    if (!pay || !sub || !sig) return res.status(400).json({ success: false, message: "Missing payment details." });
    const claim = await BakeryClaim.findById(req.params.id);
    if (!claim || claim.razorpaySubscriptionId !== sub) return res.status(404).json({ success: false, message: "Claim not found." });
    const { keySecret } = await getRazorpayKeys();
    const expected = createHmac("sha256", keySecret).update(`${pay}|${sub}`).digest("hex");
    if (expected !== sig) return res.status(400).json({ success: false, message: "Payment could not be verified." });
    claim.paymentStatus = "paid"; claim.paidAt = claim.paidAt || new Date();
    await claim.save();
    res.json({ success: true });
  } catch (err) {
    console.error("verifyClaimPayment error:", err.message);
    res.status(500).json({ success: false, message: "Could not verify the payment." });
  }
};

// Called by the Razorpay subscription webhook for subscriptions that belong to a bakery claim. Returns true if handled.
export async function handleClaimSubscriptionEvent(event, subEntity) {
  const claimId = subEntity?.notes?.bakeryClaimId;
  if (!claimId) return false;
  const map = { "subscription.activated": "paid", "subscription.charged": "paid", "subscription.cancelled": "cancelled", "subscription.halted": "halted" };
  const status = map[event];
  if (status) {
    const set = { paymentStatus: status };
    if (status === "paid") set.paidAt = new Date();
    await BakeryClaim.updateOne({ _id: claimId, razorpaySubscriptionId: subEntity.id }, { $set: set });
  }
  return true;
}
