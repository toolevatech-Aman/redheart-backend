import Coupon from "../models/Coupon.js";
import Order from "../models/order.js";
import { validateAndComputeCoupon } from "../utils/couponEngine.js";

// ── Admin CRUD ────────────────────────────────────────────────────────────

export const createCoupon = async (req, res) => {
  try {
    const { code, discountType, discountValue, minOrderValue, maxDiscount,
      usageLimitGlobal, usageLimitPerCustomer, validFrom, validUntil,
      applicableCategories, description, createdBy } = req.body;

    if (!code || !discountType) return res.status(400).json({ message: "code and discountType are required" });

    const coupon = await Coupon.create({
      code: code.trim().toUpperCase(),
      discountType, discountValue, minOrderValue, maxDiscount,
      usageLimitGlobal: usageLimitGlobal === "" ? null : usageLimitGlobal,
      usageLimitPerCustomer: usageLimitPerCustomer === "" ? null : usageLimitPerCustomer,
      validFrom: validFrom || null, validUntil: validUntil || null,
      applicableCategories: applicableCategories || [],
      description: description || "", createdBy: createdBy || "",
    });
    res.status(201).json(coupon);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ message: "A coupon with this code already exists" });
    res.status(500).json({ message: err.message });
  }
};

export const updateCoupon = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.code) updates.code = updates.code.trim().toUpperCase();
    delete updates.timesUsed; // system-managed, never client-writable

    const coupon = await Coupon.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });
    res.json(coupon);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ message: "A coupon with this code already exists" });
    res.status(500).json({ message: err.message });
  }
};

export const deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleCouponStatus = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });
    coupon.status = coupon.status === "active" ? "inactive" : "active";
    await coupon.save();
    res.json(coupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listCoupons = async (req, res) => {
  try {
    const { q, status } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (q) filter.code = new RegExp(q, "i");

    const coupons = await Coupon.find(filter).sort({ createdAt: -1 }).lean();

    // Revenue/orders generated per coupon — joined from Order, not stored
    // redundantly on the Coupon doc (avoids yet another place that can drift).
    const codes = coupons.map((c) => c.code);
    const orderStats = await Order.aggregate([
      { $match: { coupanApplied: { $in: codes }, paymentStatus: { $in: ["COD", "PAID"] } } },
      { $group: { _id: "$coupanApplied", orders: { $sum: 1 }, revenue: { $sum: "$totalPrice" }, discountGiven: { $sum: "$coupanDiscount" } } },
    ]);
    const statsByCode = Object.fromEntries(orderStats.map((s) => [s._id, s]));

    const enriched = coupons.map((c) => ({
      ...c,
      orders: statsByCode[c.code]?.orders || 0,
      revenue: statsByCode[c.code]?.revenue || 0,
      discountGiven: statsByCode[c.code]?.discountGiven || 0,
    }));

    res.json(enriched);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id).lean();
    if (!coupon) return res.status(404).json({ message: "Coupon not found" });

    const orders = await Order.find({ coupanApplied: coupon.code, paymentStatus: { $in: ["COD", "PAID"] } })
      .sort({ createdAt: -1 })
      .select("orderId userId totalPrice coupanDiscount orderStatus createdAt")
      .lean();

    res.json({ coupon, orders });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── Dashboard summary ────────────────────────────────────────────────────

export const getCouponDashboard = async (req, res) => {
  try {
    const now = new Date();
    const [total, active, expired, upcoming] = await Promise.all([
      Coupon.countDocuments({}),
      Coupon.countDocuments({ status: "active", $or: [{ validUntil: null }, { validUntil: { $gte: now } }] }),
      Coupon.countDocuments({ validUntil: { $lt: now } }),
      Coupon.countDocuments({ validFrom: { $gt: now } }),
    ]);

    const orderAgg = await Order.aggregate([
      { $match: { coupanApplied: { $ne: null }, paymentStatus: { $in: ["COD", "PAID"] } } },
      { $group: { _id: null, orders: { $sum: 1 }, revenue: { $sum: "$totalPrice" }, discountGiven: { $sum: "$coupanDiscount" } } },
    ]);
    const totals = orderAgg[0] || { orders: 0, revenue: 0, discountGiven: 0 };

    const topCoupons = await Order.aggregate([
      { $match: { coupanApplied: { $ne: null }, paymentStatus: { $in: ["COD", "PAID"] } } },
      { $group: { _id: "$coupanApplied", orders: { $sum: 1 }, revenue: { $sum: "$totalPrice" }, discountGiven: { $sum: "$coupanDiscount" } } },
      { $sort: { orders: -1 } },
      { $limit: 10 },
    ]);

    res.json({
      success: true,
      summary: { total, active, expired, upcoming, ...totals },
      topCoupons: topCoupons.map((c) => ({ code: c._id, orders: c.orders, revenue: c.revenue, discountGiven: c.discountGiven })),
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ── Public: validate a code at checkout (pre-order preview, optional use) ──

export const validateCoupon = async (req, res) => {
  try {
    const { code, subtotal, shippingCharges } = req.query;
    const userId = req.user?.userId;
    if (!code || !userId) return res.status(400).json({ message: "code is required" });

    const result = await validateAndComputeCoupon({
      code, userId, subtotal: Number(subtotal) || 0, shippingCharges: Number(shippingCharges) || 0,
    });
    if (!result.source) return res.status(400).json({ valid: false, message: result.error || "Invalid coupon code" });
    res.json({ valid: true, discount: result.discount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
