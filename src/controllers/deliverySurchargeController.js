import DeliverySurcharge from "../models/DeliverySurcharge.js";
import PinCodeStat from "../models/PinCodeStat.js";

export const DEFAULT_DELIVERY_NOTE =
  "Delivery to this location costs more, so an extra delivery charge applies.";
const ALL_PINS = "ALL";
const BASELINE_DELIVERY = 49; // standard delivery fee — same baseline vendorController uses

// A pin code's own rule and the sitewide ALL rule both apply, and the
// amounts add up.
async function findRules(pinCode) {
  const pin = String(pinCode || "").trim();
  const rules = await DeliverySurcharge.find({ pinCode: { $in: [pin, ALL_PINS] }, isActive: true }).lean();
  return rules.filter((r) => r.amount > 0);
}

export async function computeDeliverySurcharge(pinCode) {
  const rules = await findRules(pinCode);
  if (!rules.length) return { amount: 0 };
  const noteRule = rules.find((r) => r.pinCode !== ALL_PINS && r.note) || rules.find((r) => r.note);
  return {
    amount: Math.round(rules.reduce((sum, r) => sum + r.amount, 0)),
    note: noteRule?.note || DEFAULT_DELIVERY_NOTE,
  };
}

export const getDeliverySurchargeForPin = async (req, res) => {
  try {
    const pin = String(req.query.pinCode || "").trim();
    if (!pin) return res.status(400).json({ message: "pinCode is required" });
    const r = await computeDeliverySurcharge(pin);
    if (!r.amount) return res.json({ applies: false });
    res.json({ applies: true, amount: r.amount, note: r.note });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listDeliverySurcharges = async (req, res) => {
  try {
    const rows = await DeliverySurcharge.find({}).sort({ updatedAt: -1 }).lean();
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

function normalizePin(raw) {
  const p = String(raw || "").trim().toUpperCase();
  return p === ALL_PINS || /^\d{6}$/.test(p) ? p : null;
}

function validateRule(body) {
  const { amount, note = "", isActive = true } = body;
  const num = Number(amount);
  if (!Number.isFinite(num) || num < 0) return { error: "amount must be a number, 0 or more" };
  if (num > 5000) return { error: "Delivery surcharge can't exceed ₹5,000" };
  return { rule: { amount: num, note: String(note).trim(), isActive: !!isActive } };
}

export const bulkUpsertDeliverySurcharges = async (req, res) => {
  try {
    const raw = Array.isArray(req.body.pinCodes) ? req.body.pinCodes : [];
    const pins = [...new Set(raw.map(normalizePin))];
    if (!pins.length || pins.includes(null)) {
      return res.status(400).json({ success: false, message: "Every entry must be a 6-digit pin code or ALL" });
    }
    const { rule, error } = validateRule(req.body);
    if (error) return res.status(400).json({ success: false, message: error });
    await DeliverySurcharge.bulkWrite(pins.map((pinCode) => ({
      updateOne: { filter: { pinCode }, update: { $set: { pinCode, ...rule } }, upsert: true },
    })));
    res.json({ success: true, count: pins.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const upsertDeliverySurcharge = async (req, res) => {
  try {
    const pinCode = normalizePin(req.params.pinCode);
    if (!pinCode) return res.status(400).json({ success: false, message: "Pin code must be 6 digits or ALL" });
    const { rule, error } = validateRule(req.body);
    if (error) return res.status(400).json({ success: false, message: error });
    const row = await DeliverySurcharge.findOneAndUpdate(
      { pinCode },
      { $set: { pinCode, ...rule } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, data: row });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteDeliverySurcharge = async (req, res) => {
  try {
    const out = await DeliverySurcharge.deleteOne({ pinCode: String(req.params.pinCode || "").trim().toUpperCase() });
    res.json({ success: true, deleted: out.deletedCount });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Reference data for the admin: what vendors have actually charged to
// deliver to each pin code (from vendor assignments on delivered orders),
// and what that would suggest as a surcharge over the standard fee.
export const deliveryCostInsights = async (req, res) => {
  try {
    const stats = await PinCodeStat.find({ deliveryOrderCount: { $gt: 0 } })
      .sort({ avgDeliveryCost: -1 })
      .limit(300)
      .lean();
    res.json({
      success: true,
      baseline: BASELINE_DELIVERY,
      data: stats.map((s) => ({
        pinCode: s.pinCode,
        deliveredOrders: s.deliveryOrderCount,
        avgVendorDeliveryCost: s.avgDeliveryCost,
        suggestedSurcharge: Math.max(0, Math.round(s.avgDeliveryCost - BASELINE_DELIVERY)),
      })),
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
