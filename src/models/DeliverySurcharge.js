import mongoose from "mongoose";

// Admin-managed extra DELIVERY charge (flat rupees) for pin codes that cost
// more to deliver to. pinCode "ALL" applies to every order. Separate from
// PincodeSurcharge, which is a % on the product value.
const deliverySurchargeSchema = new mongoose.Schema(
  {
    pinCode:  { type: String, required: true, unique: true, trim: true },
    amount:   { type: Number, required: true, min: 0 },
    note:     { type: String, default: "", trim: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("DeliverySurcharge", deliverySurchargeSchema);
