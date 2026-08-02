import mongoose from "mongoose";

// Cross-vendor delivery-cost benchmark per pin code — helps ops sanity-check
// a vendor's quoted cost against what's typically been paid in that area.
const pinCodeStatSchema = new mongoose.Schema(
  {
    pinCode: { type: String, required: true, unique: true, trim: true },
    totalCost: { type: Number, default: 0 },     // total vendor cost (product + delivery) seen for this pin code
    orderCount: { type: Number, default: 0 },
    avgCost: { type: Number, default: 0 },

    // ── Delivery-only tracking — feeds the checkout extra-delivery-fee flag ──
    totalDeliveryCost: { type: Number, default: 0 },
    deliveryOrderCount: { type: Number, default: 0 },
    avgDeliveryCost: { type: Number, default: 0 },
    extraDeliveryFee: { type: Number, default: 0 }, // max(0, avgDeliveryCost - standard shipping charge)
  },
  { timestamps: true }
);

const PinCodeStat = mongoose.model("PinCodeStat", pinCodeStatSchema);

export default PinCodeStat;
