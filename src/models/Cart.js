import mongoose from "mongoose";

const addOnSchema = new mongoose.Schema({
  _id:           { type: String },
  name:          String,
  selling_price: Number,
  quantity:      Number,
  image_url:     String,
}, { _id: false });

const cartItemSchema = new mongoose.Schema({
  _id:            { type: String },
  productId:      String,
  name:           String,
  variant_name:   String,
  image_url:      String,
  selling_price:  Number,
  original_price: Number,
  quantity:       Number,
  add_ons:        [addOnSchema],
}, { _id: false });

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    items:  { type: [cartItemSchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
