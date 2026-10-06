import mongoose from "mongoose";

// Admin-managed surcharge for pin codes where products cost more to supply
// (remote areas, where stock isn't readily available). "percent" adds
// value% of the order's product total; "flat" adds a fixed rupee amount.
const pincodeSurchargeSchema = new mongoose.Schema(
  {
    pinCode: { type: String, required: true, unique: true, trim: true },
    type:    { type: String, enum: ["percent", "flat"], default: "percent" },
    value:   { type: Number, required: true, min: 0 },
    // Shown to the customer at checkout next to the surcharge line.
    note:    { type: String, default: "", trim: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("PincodeSurcharge", pincodeSurchargeSchema);
