import mongoose from "mongoose";
const couponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    discountType: {
      type: String,
      enum: ["percentage", "flat"],
      required: true
    },
    discountValue: { type: Number, required: true },
    expiresAt: { type: Date },
    isUsed: { type: Boolean, default: false },
    usedAt: { type: Date }
  },
  { _id: false }
);
const addressSchema = new mongoose.Schema(
  {
    label: { type: String, default: "home" }, // home, office, etc.
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String, default: "India" },
    phone: { type: String },
    isDefault: { type: Boolean, default: false }
  }
 
);


const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      default: null
    },
    email: {
      type: String,
      default: null
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    },
    dateOfBirth: {
      type: Date,
      default: null
    },
    addresses: [addressSchema],
    coupons: [couponSchema],
    tokens: [
      {
        token: { type: String },
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true } // adds createdAt and updatedAt
);

export default mongoose.model("User", userSchema);
