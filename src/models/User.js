import mongoose from "mongoose";
const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    },

    discountType: {
      type: String,
      enum: ["percentage", "flat"],
      required: true
    },

    discountValue: {
      type: Number,
      required: true
    },

    minOrderValue: {
      type: Number,
      required: true
    },

    // Caps the discount amount for percentage coupons (e.g. NEW10 = 10% but
    // never more than ₹120). Null/undefined = uncapped.
    maxDiscount: {
      type: Number,
      default: null
    },

    isUsed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);
const addressSchema = new mongoose.Schema(
  {
    firstName:   { type: String, required: true },
    lastName:    { type: String, default: "" },          // optional
    street:      { type: String, required: true },
    city:        { type: String, required: true },
    state:       { type: String, default: "" },
    postalCode:  { type: String, default: "" },
    country:     { type: String, default: "India" },
    phone:       { type: String, default: "" },
    label:       { type: String, default: "home" },      // home | work | other
    isDefault:   { type: Boolean, default: false },
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
      default: null,
      sparse: true,
    },
    googleId: {
      type: String,
      default: null,
      sparse: true,
    },
    avatar: {
      type: String,
      default: null,
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
    // Only meaningful when role === "admin". "overall" is a superset that
    // passes every access-level check; "seo" and "category" restrict an
    // admin to their respective sections of the admin panel.
    accessLevel: {
      type: String,
      default: "overall",
      enum: ["overall", "seo", "category"]
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
