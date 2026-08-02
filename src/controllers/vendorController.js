import mongoose from "mongoose";
import Vendor from "../models/Vendor.js";
import Order from "../models/order.js";
import PinCodeStat from "../models/PinCodeStat.js";
import { itemRevenue } from "../utils/itemRevenue.js";

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

// A vendor's coverage grows from actual usage — every order they're assigned
// to teaches the recommendation engine one more place they deliver, so a
// generic vendor (a local courier, an aggregator like Blinkit) doesn't need
// its whole service area entered by hand up front.
async function expandVendorCoverage(vendor, order) {
  const pinCode = order.shippingAddress?.postalCode ? String(order.shippingAddress.postalCode).trim() : null;
  const region = order.shippingAddress?.state ? norm(order.shippingAddress.state) : null;
  const update = {};
  if (pinCode && !vendor.pinCodes.includes(pinCode)) update.$addToSet = { ...(update.$addToSet || {}), pinCodes: pinCode };
  if (region && !vendor.regions.includes(region)) update.$addToSet = { ...(update.$addToSet || {}), regions: region };
  if (Object.keys(update).length) await Vendor.updateOne({ _id: vendor._id }, update);
}

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
          revenueCounted: false,
        },
      },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });

    await expandVendorCoverage(vendor, order);

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
      revenueCounted: false,
    };
    const idx = order.itemVendors.findIndex((iv) => iv.cartItemId === cartItemId);
    if (idx >= 0) order.itemVendors[idx] = entry;
    else order.itemVendors.push(entry);
    await order.save();

    await expandVendorCoverage(vendor, order);

    if (["Delivered", "Cancelled"].includes(order.orderStatus)) {
      await recordItemVendorOutcomes(order);
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add/edit the cost on an ALREADY-assigned vendor without touching who's
// assigned — for orders where the vendor was attached before a cost was
// known (e.g. backfilled history), or where the quoted cost needs revising.
// Order-count stats (statCounted) are untouched; only cost/revenue move,
// gated by their own revenueCounted flag so this is safe to call repeatedly.
export const updateOrderVendorCost = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { cost, deliveryCost } = req.body;

    const order = await Order.findOne({ orderId });
    if (!order) return res.status(404).json({ message: "Order not found" });
    if (!order.vendor?.vendorId) return res.status(400).json({ message: "No vendor assigned to this order yet" });

    const vendor = await Vendor.findById(order.vendor.vendorId);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const oldCost = Number(order.vendor.cost || 0);
    const oldDeliveryCost = Number(order.vendor.deliveryCost || 0);
    const newCost = cost !== undefined ? Number(cost) : oldCost;
    const newDeliveryCost = deliveryCost !== undefined ? Number(deliveryCost) : oldDeliveryCost;
    const wasRevenueCounted = !!order.vendor.revenueCounted;

    if (order.orderStatus === "Delivered") {
      vendor.stats.totalCost += newCost - oldCost;
      if (!wasRevenueCounted) {
        vendor.stats.totalRevenue += Number(order.totalPrice || 0);
        order.vendor.revenueCounted = true;
      }
      vendor.stats.avgCost = vendor.stats.deliveredOrders > 0
        ? Math.round(vendor.stats.totalCost / vendor.stats.deliveredOrders)
        : vendor.stats.avgCost;
      vendor.stats.margin = vendor.stats.totalRevenue - vendor.stats.totalCost;
      await vendor.save();

      // First contribution → count it as a new pin-code data point; a later
      // edit to an already-counted cost only shifts the totals.
      await applyPinCodeStat(order.shippingAddress?.postalCode, {
        cost: newCost - oldCost,
        deliveryCost: newDeliveryCost - oldDeliveryCost,
      }, !wasRevenueCounted);
    }

    order.vendor.cost = newCost;
    order.vendor.deliveryCost = newDeliveryCost;
    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Same as updateOrderVendorCost, for one item in a split (itemVendors) order.
export const updateOrderItemVendorCost = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { cartItemId, cost, deliveryCost } = req.body;
    if (!cartItemId) return res.status(400).json({ message: "cartItemId is required" });

    const order = await Order.findOne({ orderId });
    if (!order) return res.status(404).json({ message: "Order not found" });

    const iv = order.itemVendors.find((x) => x.cartItemId === cartItemId);
    if (!iv?.vendorId) return res.status(400).json({ message: "No vendor assigned to this item yet" });

    const vendor = await Vendor.findById(iv.vendorId);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const oldCost = Number(iv.cost || 0);
    const oldDeliveryCost = Number(iv.deliveryCost || 0);
    const newCost = cost !== undefined ? Number(cost) : oldCost;
    const newDeliveryCost = deliveryCost !== undefined ? Number(deliveryCost) : oldDeliveryCost;

    const wasRevenueCounted = !!iv.revenueCounted;

    if (order.orderStatus === "Delivered") {
      const item = (order.cartItems || []).find((ci) => String(ci._id) === cartItemId);
      const revenue = itemRevenue(item);

      vendor.stats.totalCost += newCost - oldCost;
      if (!wasRevenueCounted) {
        vendor.stats.totalRevenue += revenue;
        iv.revenueCounted = true;
      }
      vendor.stats.avgCost = vendor.stats.deliveredOrders > 0
        ? Math.round(vendor.stats.totalCost / vendor.stats.deliveredOrders)
        : vendor.stats.avgCost;
      vendor.stats.margin = vendor.stats.totalRevenue - vendor.stats.totalCost;
      await vendor.save();

      await applyPinCodeStat(order.shippingAddress?.postalCode, {
        cost: newCost - oldCost,
        deliveryCost: newDeliveryCost - oldDeliveryCost,
      }, !wasRevenueCounted);
    }

    iv.cost = newCost;
    iv.deliveryCost = newDeliveryCost;
    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Standard flat shipping fee customers already pay — anything a vendor
// charges above this, on average for a pin code, is flagged as an
// under-recovered delivery cost so checkout can surcharge future orders there.
const BASELINE_SHIPPING_FEE = 49;
const MIN_SAMPLE_SIZE = 1; // minimum delivered orders from a pin code before its avg can surcharge checkout

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

// isNewDataPoint=true (the normal delivery-time path) increments orderCount;
// false (editing a cost that was already contributed once) only shifts the
// totals — otherwise every cost edit would inflate the pin code's sample size.
async function applyPinCodeStat(pinCode, { cost, deliveryCost }, isNewDataPoint = true) {
  if (!pinCode) return;
  const inc = {};
  if (cost) { inc.totalCost = Number(cost); if (isNewDataPoint) inc.orderCount = 1; }
  if (deliveryCost) { inc.totalDeliveryCost = Number(deliveryCost); if (isNewDataPoint) inc.deliveryOrderCount = 1; }
  if (!Object.keys(inc).length) return;

  const stat = await PinCodeStat.findOneAndUpdate(
    { pinCode: String(pinCode).trim() },
    { $inc: inc },
    { upsert: true, new: true }
  );
  if (stat.orderCount > 0) stat.avgCost = Math.round(stat.totalCost / stat.orderCount);
  if (stat.deliveryOrderCount > 0) {
    stat.avgDeliveryCost = Math.round(stat.totalDeliveryCost / stat.deliveryOrderCount);
    // Require a few data points before trusting the average enough to surcharge
    // real customers — one unusually expensive delivery shouldn't set the price.
    stat.extraDeliveryFee = stat.deliveryOrderCount >= MIN_SAMPLE_SIZE
      ? Math.max(0, stat.avgDeliveryCost - BASELINE_SHIPPING_FEE)
      : 0;
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

  const revenueCounted = isDelivered && !!order.vendor.cost;
  await Order.updateOne({ _id: order._id }, { "vendor.statCounted": true, "vendor.revenueCounted": revenueCounted });

  if (revenueCounted) {
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
    const revenue = itemRevenue(item);

    await applyVendorStats(vendor, {
      isDelivered, isCancelled,
      cost: iv.cost, deliveryCost: iv.deliveryCost,
      revenue,
    });

    const revenueCounted = isDelivered && !!iv.cost;
    if (revenueCounted) {
      await applyPinCodeStat(order.shippingAddress?.postalCode, { cost: iv.cost, deliveryCost: iv.deliveryCost });
    }

    iv.statCounted = true;
    iv.revenueCounted = revenueCounted;
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
