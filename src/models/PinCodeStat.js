import mongoose from "mongoose";

// Cross-vendor delivery-cost benchmark per pin code — helps ops sanity-check
// a vendor's quoted cost against what's typically been paid in that area.
const pinCodeStatSchema = new mongoose.Schema(
  {
    pinCode: { type: String, required: true, unique: true, trim: true },
    totalCost: { type: Number, default: 0 },
    orderCount: { type: Number, default: 0 },
    avgCost: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const PinCodeStat = mongoose.model("PinCodeStat", pinCodeStatSchema);

export default PinCodeStat;
