import mongoose from "mongoose";

const addOnSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    category: { type: String, required: true },   // used for hamper customization
    categories: { type: [String], default: [] },  // used for add-on page tabs
    name: { type: String, required: true },
    costPrice: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    originalPrice: { type: Number, default: 0 },
    softDelete: { type: Boolean, default: false },
    addOn: { type: Boolean, default: true },
    isBestSeller: { type: Boolean, default: false },
    productId: { type: String, unique: true, default: () => `ADDON-${Date.now()}` },
  },
  { timestamps: true }
);

export default mongoose.model("AddOn", addOnSchema);
