import Coupon from "../models/Coupon.js";
import User from "../models/User.js";
import Order from "../models/order.js";

const PAID_LIKE = ["COD", "PAID"]; // counts as a real, completed redemption

// Checks the shared Coupon collection first (admin-managed, many customers
// can use one code); falls back to the legacy per-user User.coupons array
// (still seeded at signup — NEW10/HAPPY100) so old codes keep working.
// Never trusts client-supplied discount — always recomputed here.
export async function validateAndComputeCoupon({ code, userId, subtotal, shippingCharges }) {
  if (!code) return { discount: 0, source: null };
  const upper = code.toUpperCase();

  const coupon = await Coupon.findOne({ code: upper });
  if (coupon) {
    const now = new Date();
    if (coupon.status !== "active") return { discount: 0, source: null, error: "Coupon is not active" };
    if (coupon.validFrom && now < coupon.validFrom) return { discount: 0, source: null, error: "Coupon not yet valid" };
    if (coupon.validUntil && now > coupon.validUntil) return { discount: 0, source: null, error: "Coupon has expired" };
    if (subtotal < Number(coupon.minOrderValue || 0)) {
      return { discount: 0, source: null, error: `Minimum order value ₹${coupon.minOrderValue} required` };
    }
    if (coupon.usageLimitGlobal != null && coupon.timesUsed >= coupon.usageLimitGlobal) {
      return { discount: 0, source: null, error: "Coupon usage limit reached" };
    }
    if (coupon.usageLimitPerCustomer != null) {
      const customerUses = await Order.countDocuments({
        userId, coupanApplied: upper, paymentStatus: { $in: PAID_LIKE },
      });
      if (customerUses >= coupon.usageLimitPerCustomer) {
        return { discount: 0, source: null, error: "You've already used this coupon" };
      }
    }

    let discount = 0;
    if (coupon.discountType === "percentage") {
      discount = (subtotal * Number(coupon.discountValue)) / 100;
      if (coupon.maxDiscount) discount = Math.min(discount, Number(coupon.maxDiscount));
    } else if (coupon.discountType === "flat") {
      discount = Number(coupon.discountValue);
    } else if (coupon.discountType === "free_shipping") {
      discount = Number(shippingCharges || 0);
    }
    return { discount, source: "global", couponId: coupon._id };
  }

  // ── Legacy per-user coupon (signup-seeded) ────────────────────────────────
  const user = await User.findOne({ userId }).select("coupons").lean();
  const legacy = user?.coupons?.find((c) => c.code?.toUpperCase() === upper && !c.isUsed);
  if (!legacy) return { discount: 0, source: null, error: "Invalid coupon code" };
  if (subtotal < Number(legacy.minOrderValue || 0)) {
    return { discount: 0, source: null, error: `Minimum order value ₹${legacy.minOrderValue} required` };
  }
  let discount = legacy.discountType === "percentage"
    ? (subtotal * Number(legacy.discountValue)) / 100
    : Number(legacy.discountValue);
  if (legacy.maxDiscount) discount = Math.min(discount, Number(legacy.maxDiscount));
  return { discount, source: "legacy" };
}

// Called once a coupon's order is actually confirmed (COD immediately, or
// PREPAID after payment verification) — never on order creation alone.
export async function markCouponUsed({ code, source, userId }) {
  if (!code || !source) return;
  const upper = code.toUpperCase();
  if (source === "global") {
    await Coupon.updateOne({ code: upper }, { $inc: { timesUsed: 1 } });
  } else if (source === "legacy") {
    await User.updateOne(
      { userId, "coupons.code": upper },
      { $set: { "coupons.$.isUsed": true } }
    );
  }
}
