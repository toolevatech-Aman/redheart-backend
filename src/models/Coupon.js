import mongoose from "mongoose";

// A shared, admin-managed coupon — distinct from the older per-user
// User.coupons array (still supported for backward compatibility at
// checkout). One Coupon doc = one code many customers can redeem, with
// global + per-customer usage limits, matching how a real marketing team
// runs a promotion rather than seeding the same code onto every user.
const couponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true, trim: true },
    description: { type: String, default: "" }, // internal note for the marketing team, not shown to customers

    discountType: { type: String, enum: ["percentage", "flat", "free_shipping"], required: true },
    discountValue: { type: Number, default: 0 }, // ignored for free_shipping
    maxDiscount: { type: Number, default: null }, // caps discount for percentage coupons

    minOrderValue: { type: Number, default: 0 },

    // ── Usage limits ───────────────────────────────────────────────────────
    usageLimitGlobal: { type: Number, default: null },     // null = unlimited
    usageLimitPerCustomer: { type: Number, default: 1 },   // null = unlimited
    timesUsed: { type: Number, default: 0 },

    // ── Scheduling ─────────────────────────────────────────────────────────
    validFrom: { type: Date, default: null },
    validUntil: { type: Date, default: null },

    // ── Targeting (optional — empty = applies to everything) ────────────────
    applicableCategories: [{ type: String }], // e.g. "Flowers", "Cakes", "Plants", "Gifts", "Hampers"

    status: { type: String, enum: ["active", "inactive"], default: "active" },

    createdBy: { type: String, default: "" }, // admin email/name, for the audit trail
  },
  { timestamps: true }
);

couponSchema.index({ status: 1 });
couponSchema.index({ validUntil: 1 });

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
