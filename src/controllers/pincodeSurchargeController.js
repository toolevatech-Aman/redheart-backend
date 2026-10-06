import PincodeSurcharge from "../models/PincodeSurcharge.js";

export const DEFAULT_SURCHARGE_NOTE =
  "Products cost more for this delivery location because they are not readily available there, so a surcharge applies.";

// Single source of truth for the amount — used both by the customer preview
// endpoint and by createOrder (which never trusts a client-supplied figure).
export async function computePincodeSurcharge(pinCode, productTotal) {
  const pin = String(pinCode || "").trim();
  if (!pin) return { amount: 0 };
  const rule = await PincodeSurcharge.findOne({ pinCode: pin, isActive: true }).lean();
  if (!rule || !(rule.value > 0)) return { amount: 0 };
  const raw = rule.type === "flat" ? rule.value : (Number(productTotal) || 0) * rule.value / 100;
  return {
    amount: Math.round(raw),
    type: rule.type,
    value: rule.value,
    note: rule.note || DEFAULT_SURCHARGE_NOTE,
  };
}

// Customer-facing: what surcharge (if any) applies to this pin code.
export const getSurchargeForPin = async (req, res) => {
  try {
    const pin = String(req.query.pinCode || "").trim();
    if (!pin) return res.status(400).json({ message: "pinCode is required" });
    const rule = await PincodeSurcharge.findOne({ pinCode: pin, isActive: true }).lean();
    if (!rule || !(rule.value > 0)) return res.json({ applies: false });
    res.json({ applies: true, type: rule.type, value: rule.value, note: rule.note || DEFAULT_SURCHARGE_NOTE });
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

export const upsertSurcharge = async (req, res) => {
  try {
    const pinCode = String(req.params.pinCode || "").trim();
    if (!/^\d{6}$/.test(pinCode)) {
      return res.status(400).json({ success: false, message: "Pin code must be 6 digits" });
    }
    const { type = "percent", value, note = "", isActive = true } = req.body;
    if (!["percent", "flat"].includes(type)) {
      return res.status(400).json({ success: false, message: "type must be percent or flat" });
    }
    const num = Number(value);
    if (!Number.isFinite(num) || num < 0) {
      return res.status(400).json({ success: false, message: "value must be a number, 0 or more" });
    }
    if (type === "percent" && num > 500) {
      return res.status(400).json({ success: false, message: "Percent surcharge can't exceed 500%" });
    }
    const row = await PincodeSurcharge.findOneAndUpdate(
      { pinCode },
      { $set: { pinCode, type, value: num, note: String(note).trim(), isActive: !!isActive } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ success: true, data: row });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteSurcharge = async (req, res) => {
  try {
    const out = await PincodeSurcharge.deleteOne({ pinCode: String(req.params.pinCode || "").trim() });
    res.json({ success: true, deleted: out.deletedCount });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
