import PincodeSurcharge from "../models/PincodeSurcharge.js";

export const DEFAULT_SURCHARGE_NOTE =
  "Products cost more for this delivery location because they are not readily available there, so a surcharge applies.";

export const ALL_PINS = "ALL";

// Every active rule that applies to this pin code — its own rule and the
// sitewide "ALL" rule — and they STACK: each percentage is taken on the
// original product value and the amounts are added (e.g. 1000 with 100% on
// the pin + 30% ALL = 1000 + 1000 + 300 = 2300).
async function findRules(pinCode) {
  const pin = String(pinCode || "").trim();
  const rules = await PincodeSurcharge.find({ pinCode: { $in: [pin, ALL_PINS] }, isActive: true }).lean();
  return rules.filter((r) => r.value > 0);
}

function combine(rules) {
  const percent = rules.filter((r) => r.type !== "flat").reduce((sum, r) => sum + r.value, 0);
  const flat = rules.filter((r) => r.type === "flat").reduce((sum, r) => sum + r.value, 0);
  const noteRule = rules.find((r) => r.pinCode !== ALL_PINS && r.note) || rules.find((r) => r.note);
  return { percent, flat, note: noteRule?.note || DEFAULT_SURCHARGE_NOTE };
}

// Single source of truth for the amount — used both by the customer preview
// endpoint and by createOrder (which never trusts a client-supplied figure).
export async function computePincodeSurcharge(pinCode, productTotal) {
  const rules = await findRules(pinCode);
  if (!rules.length) return { amount: 0 };
  const { percent, flat, note } = combine(rules);
  const amount = Math.round((Number(productTotal) || 0) * percent / 100 + flat);
  return { amount, percent, flat, note };
}

// Customer-facing: what surcharge (if any) applies to this pin code.
export const getSurchargeForPin = async (req, res) => {
  try {
    const pin = String(req.query.pinCode || "").trim();
    if (!pin) return res.status(400).json({ message: "pinCode is required" });
    const rules = await findRules(pin);
    if (!rules.length) return res.json({ applies: false });
    const { percent, flat, note } = combine(rules);
    // type/value kept for the checkout build that predates stacking.
    res.json({ applies: true, percent, flat, note, type: flat > 0 && percent === 0 ? "flat" : "percent", value: percent > 0 ? percent : flat });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listSurcharges = async (req, res) => {
  try {
    const rows = await PincodeSurcharge.find({}).sort({ updatedAt: -1 }).lean();
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
  const { type = "percent", value, note = "", isActive = true } = body;
  if (!["percent", "flat"].includes(type)) return { error: "type must be percent or flat" };
  const num = Number(value);
  if (!Number.isFinite(num) || num < 0) return { error: "value must be a number, 0 or more" };
  if (type === "percent" && num > 500) return { error: "Percent surcharge can't exceed 500%" };
  return { rule: { type, value: num, note: String(note).trim(), isActive: !!isActive } };
}

// Add or update one or many pin codes (or "ALL") in a single call.
export const bulkUpsertSurcharges = async (req, res) => {
  try {
    const raw = Array.isArray(req.body.pinCodes) ? req.body.pinCodes : [];
    const pins = [...new Set(raw.map(normalizePin))];
    if (!pins.length || pins.includes(null)) {
      return res.status(400).json({ success: false, message: "Every entry must be a 6-digit pin code or ALL" });
    }
    const { rule, error } = validateRule(req.body);
    if (error) return res.status(400).json({ success: false, message: error });
    await PincodeSurcharge.bulkWrite(pins.map((pinCode) => ({
      updateOne: { filter: { pinCode }, update: { $set: { pinCode, ...rule } }, upsert: true },
    })));
    res.json({ success: true, count: pins.length });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const upsertSurcharge = async (req, res) => {
  try {
    const pinCode = normalizePin(req.params.pinCode);
    if (!pinCode) return res.status(400).json({ success: false, message: "Pin code must be 6 digits or ALL" });
    const { rule, error } = validateRule(req.body);
    if (error) return res.status(400).json({ success: false, message: error });
    const row = await PincodeSurcharge.findOneAndUpdate(
      { pinCode },
      { $set: { pinCode, ...rule } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, data: row });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteSurcharge = async (req, res) => {
  try {
    const out = await PincodeSurcharge.deleteOne({ pinCode: String(req.params.pinCode || "").trim().toUpperCase() });
    res.json({ success: true, deleted: out.deletedCount });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
