import mongoose from "mongoose";

const addOnSchema = new mongoose.Schema(
  {
    image: { type: String, required: true }, // store image URL or filename
    category: { type: String, required: true },
    name: { type: String, required: true },
    costPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    softDelete: { type: Boolean, default: false },
    addOn: { type: Boolean, default: true },
    productId: { type: String, unique: true, default: () => `ADDON-${Date.now()}` },
  },
  { timestamps: true }
);

export default mongoose.model("AddOn", addOnSchema);
