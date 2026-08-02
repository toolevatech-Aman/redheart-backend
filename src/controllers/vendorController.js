import mongoose from "mongoose";
import Vendor from "../models/Vendor.js";
import Order from "../models/order.js";
import PinCodeStat from "../models/PinCodeStat.js";

const norm = (s) => (s || "").toString().trim().toLowerCase();

// ── CRUD ──────────────────────────────────────────────────────────────────

export const createVendor = async (req, res) => {
  try {
    const { name, phone, whatsapp, address, city, regions, pinCodes, products, notes } = req.body;
    if (!name || !phone || !city) {
      return res.status(400).json({ message: "name, phone and city are required" });
    }
    const vendor = await Vendor.create({
      name, phone, whatsapp, address,
      city: norm(city),
      regions: (regions || []).map(norm),
      pinCodes: (pinCodes || []).map((p) => String(p).trim()),
      products: products || [],
      notes: notes || "",
    });
    res.status(201).json(vendor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateVendor = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.city) updates.city = norm(updates.city);
    if (updates.regions) updates.regions = updates.regions.map(norm);
    if (updates.pinCodes) updates.pinCodes = updates.pinCodes.map((p) => String(p).trim());
    delete updates.stats; // stats are system-managed, never client-writable

    const vendor = await Vendor.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Soft delete — deactivate rather than hard-delete, since past orders reference this vendor
export const deactivateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, { status: "inactive" }, { new: true });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.json(vendor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listVendors = async (req, res) => {
  try {
    const { q, city, region, pinCode, product, status } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (city) filter.city = norm(city);
    if (region) filter.regions = norm(region);
    if (pinCode) filter.pinCodes = String(pinCode).trim();
    if (product) filter.products = product;
    if (q) {
      const rx = new RegExp(q, "i");
      filter.$or = [{ name: rx }, { phone: rx }, { city: rx }];
    }
    const vendors = await Vendor.find(filter).sort({ "stats.lastOrderAt": -1, createdAt: -1 });
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getVendorProfile = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    // Match orders where this vendor has the whole order OR just some items in it
    const orders = await Order.find({
      $or: [{ "vendor.vendorId": vendor._id }, { "itemVendors.vendorId": vendor._id }],
    })
      .sort({ createdAt: -1 })
      .select("orderId cartItems totalPrice vendor itemVendors orderStatus createdAt shippingAddress");

    res.json({ vendor, orders });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── Recommendation engine ────────────────────────────────────────────────
// Priority: pin code > region > city. No geo/"nearby" tier yet (V2 — needs
// lat/lng on vendors, not worth it at current order volume).
const TIER_WEIGHT = { pinCode: 100, region: 70, city: 40 };

function scoreVendor(vendor, tier) {
  const { successRate = 0, totalOrders = 0, lastOrderAt } = vendor.stats || {};
  const recencyBonus = lastOrderAt && (Date.now() - new Date(lastOrderAt).getTime()) < 30 * 24 * 60 * 60 * 1000 ? 10 : 0;
  const score = TIER_WEIGHT[tier] + successRate * 0.3 + Math.min(totalOrders, 20) + recencyBonus;
  const confidence = score >= 130 ? "High" : score >= 90 ? "Medium" : "Low";
  return { score, confidence };
}

export const recommendVendors = async (req, res) => {
  try {
    const { city, region, pinCode, product } = req.query;
    if (!city) return res.status(400).json({ message: "city is required" });

    const baseFilter = { status: "active" };
    if (product) baseFilter.products = product;

    const [pinMatches, regionMatches, cityMatches] = await Promise.all([
      pinCode ? Vendor.find({ ...baseFilter, pinCodes: String(pinCode).trim() }) : [],
      region ? Vendor.find({ ...baseFilter, regions: norm(region) }) : [],
      Vendor.find({ ...baseFilter, city: norm(city) }),
    ]);

    const seen = new Map();
    const addAll = (list, tier) => {
      for (const v of list) {
        if (seen.has(String(v._id))) continue;
        const { score, confidence } = scoreVendor(v, tier);
        seen.set(String(v._id), {
          vendor: v,
          matchTier: tier,
          confidence,
          score,
          previousCost: v.stats.avgCost || null,
          lastDelivered: v.stats.lastOrderAt || null,
          successRate: v.stats.successRate || 0,
          totalOrders: v.stats.totalOrders || 0,
        });
      }
    };
    addAll(pinMatches, "pinCode");
    addAll(regionMatches, "region");
    addAll(cityMatches, "city");

    const recommendations = Array.from(seen.values()).sort((a, b) => b.score - a.score);

    res.json({
      recommendations,
      newVendorRequired: recommendations.length === 0,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ── Assignment ────────────────────────────────────────────────────────────

export const assignVendorToOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { vendorId, cost, deliveryCost, deliveryNotes } = req.body;
    if (!vendorId) return res.status(400).json({ message: "vendorId is required" });

    const vendor = await Vendor.findById(vendorId);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const order = await Order.findOneAndUpdate(
      { orderId },
      {
        vendor: {
          vendorId: vendor._id,
          name: vendor.name,
          phone: vendor.phone,
          cost: cost ?? null,
          deliveryCost: deliveryCost ?? null,
          assignedAt: new Date(),
          deliveryNotes: deliveryNotes || "",
          internalRating: null,
          statCounted: false,
        },
      },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });

    // Order was already Delivered/Cancelled before a vendor got attached (the
    // common case when backfilling vendors onto historical orders) — the
    // status-change hook that normally rolls up stats will never fire for it,
    // so count it right here instead.
    if (["Delivered", "Cancelled"].includes(order.orderStatus)) {
      await recordVendorOutcome(order);
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Per-product assignment — different items in the same order can go to
// different vendors. Upserts one entry in order.itemVendors by cartItemId.
export const assignVendorToOrderItem = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { cartItemId, vendorId, cost, deliveryCost, deliveryNotes } = req.body;
    if (!cartItemId || !vendorId) return res.status(400).json({ message: "cartItemId and vendorId are required" });

    const vendor = await Vendor.findById(vendorId);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const order = await Order.findOne({ orderId });
    if (!order) return res.status(404).json({ message: "Order not found" });

    const entry = {
      cartItemId,
      vendorId: vendor._id,
      name: vendor.name,
      phone: vendor.phone,
      cost: cost ?? null,
      deliveryCost: deliveryCost ?? null,
      assignedAt: new Date(),
      deliveryNotes: deliveryNotes || "",
      statCounted: false,
    };
    const idx = order.itemVendors.findIndex((iv) => iv.cartItemId === cartItemId);
    if (idx >= 0) order.itemVendors[idx] = entry;
    else order.itemVendors.push(entry);
    await order.save();

    if (["Delivered", "Cancelled"].includes(order.orderStatus)) {
      await recordItemVendorOutcomes(order);
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Standard flat shipping fee customers already pay — anything a vendor
// charges above this, on average for a pin code, is flagged as an
// under-recovered delivery cost so checkout can surcharge future orders there.
const BASELINE_SHIPPING_FEE = 49;

async function applyVendorStats(vendor, { isDelivered, isCancelled, cost, deliveryCost, revenue }) {
  vendor.stats.totalOrders += 1;
  if (isDelivered) vendor.stats.deliveredOrders += 1;
  if (isCancelled) vendor.stats.cancelledOrders += 1;
  if (isDelivered && cost) {
    vendor.stats.totalCost += Number(cost); // total settlement paid to vendor
    vendor.stats.totalRevenue += Number(revenue || 0); // what RedHeart earned
  }
  vendor.stats.avgCost = vendor.stats.deliveredOrders > 0
    ? Math.round(vendor.stats.totalCost / vendor.stats.deliveredOrders)
    : vendor.stats.avgCost;
  vendor.stats.margin = vendor.stats.totalRevenue - vendor.stats.totalCost;
  vendor.stats.successRate = vendor.stats.totalOrders > 0
    ? Math.round((vendor.stats.deliveredOrders / vendor.stats.totalOrders) * 100)
    : 0;
  vendor.stats.lastOrderAt = new Date();
  await vendor.save();
}

async function applyPinCodeStat(pinCode, { cost, deliveryCost }) {
  if (!pinCode) return;
  const inc = {};
  if (cost) { inc.totalCost = Number(cost); inc.orderCount = 1; }
  if (deliveryCost) { inc.totalDeliveryCost = Number(deliveryCost); inc.deliveryOrderCount = 1; }
  if (!Object.keys(inc).length) return;

  const stat = await PinCodeStat.findOneAndUpdate(
    { pinCode: String(pinCode).trim() },
    { $inc: inc },
    { upsert: true, new: true }
  );
  if (stat.orderCount > 0) stat.avgCost = Math.round(stat.totalCost / stat.orderCount);
  if (stat.deliveryOrderCount > 0) {
    stat.avgDeliveryCost = Math.round(stat.totalDeliveryCost / stat.deliveryOrderCount);
    stat.extraDeliveryFee = Math.max(0, stat.avgDeliveryCost - BASELINE_SHIPPING_FEE);
  }
  await stat.save();
}

// Called from orderController.updateOrderStatus when status settles into
// Delivered/Cancelled — rolls the outcome into the vendor's running stats.
export async function recordVendorOutcome(order) {
  if (!order?.vendor?.vendorId || order.vendor.statCounted) return;
  const isDelivered = order.orderStatus === "Delivered";
  const isCancelled = order.orderStatus === "Cancelled";
  if (!isDelivered && !isCancelled) return;

  const vendor = await Vendor.findById(order.vendor.vendorId);
  if (!vendor) return;

  await applyVendorStats(vendor, {
    isDelivered, isCancelled,
    cost: order.vendor.cost, deliveryCost: order.vendor.deliveryCost,
    revenue: order.totalPrice,
  });

  await Order.updateOne({ _id: order._id }, { "vendor.statCounted": true });

  if (isDelivered) {
    await applyPinCodeStat(order.shippingAddress?.postalCode, {
      cost: order.vendor.cost, deliveryCost: order.vendor.deliveryCost,
    });
  }
}

// Same as recordVendorOutcome but for per-product (itemVendors) assignment —
// each item's revenue is its own selling_price × quantity, not the whole order.
export async function recordItemVendorOutcomes(order) {
  if (!order?.itemVendors?.length) return;
  const isDelivered = order.orderStatus === "Delivered";
  const isCancelled = order.orderStatus === "Cancelled";
  if (!isDelivered && !isCancelled) return;

  let changed = false;
  for (const iv of order.itemVendors) {
    if (!iv.vendorId || iv.statCounted) continue;
    const vendor = await Vendor.findById(iv.vendorId);
    if (!vendor) continue;

    const item = (order.cartItems || []).find((ci) => String(ci._id) === iv.cartItemId);
    const revenue = item ? Number(item.selling_price || 0) * Number(item.quantity || 1) : 0;

    await applyVendorStats(vendor, {
      isDelivered, isCancelled,
      cost: iv.cost, deliveryCost: iv.deliveryCost,
      revenue,
    });

    if (isDelivered) {
      await applyPinCodeStat(order.shippingAddress?.postalCode, { cost: iv.cost, deliveryCost: iv.deliveryCost });
    }

    iv.statCounted = true;
    changed = true;
  }
  if (changed) await Order.updateOne({ _id: order._id }, { itemVendors: order.itemVendors });
}

export const getPinCodeStat = async (req, res) => {
  try {
    const { pinCode } = req.query;
    if (!pinCode) return res.status(400).json({ message: "pinCode is required" });
    const stat = await PinCodeStat.findOne({ pinCode: String(pinCode).trim() });
    res.json(stat || {
      pinCode, totalCost: 0, orderCount: 0, avgCost: 0,
      totalDeliveryCost: 0, deliveryOrderCount: 0, avgDeliveryCost: 0, extraDeliveryFee: 0,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
