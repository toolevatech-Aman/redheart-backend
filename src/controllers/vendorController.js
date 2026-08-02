import mongoose from "mongoose";
import Vendor from "../models/Vendor.js";
import Order from "../models/order.js";

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

    const orders = await Order.find({ "vendor.vendorId": vendor._id })
      .sort({ createdAt: -1 })
      .select("orderId cartItems totalPrice vendor orderStatus createdAt shippingAddress");

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
    const { vendorId, cost, deliveryNotes } = req.body;
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
          assignedAt: new Date(),
          deliveryNotes: deliveryNotes || "",
          internalRating: null,
          statCounted: false,
        },
      },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Called from orderController.updateOrderStatus when status settles into
// Delivered/Cancelled — rolls the outcome into the vendor's running stats.
export async function recordVendorOutcome(order) {
  if (!order?.vendor?.vendorId || order.vendor.statCounted) return;
  const isDelivered = order.orderStatus === "Delivered";
  const isCancelled = order.orderStatus === "Cancelled";
  if (!isDelivered && !isCancelled) return;

  const vendor = await Vendor.findById(order.vendor.vendorId);
  if (!vendor) return;

  vendor.stats.totalOrders += 1;
  if (isDelivered) vendor.stats.deliveredOrders += 1;
  if (isCancelled) vendor.stats.cancelledOrders += 1;
  if (order.vendor.cost) vendor.stats.totalCost += Number(order.vendor.cost);
  vendor.stats.avgCost = vendor.stats.deliveredOrders > 0
    ? Math.round(vendor.stats.totalCost / vendor.stats.deliveredOrders)
    : vendor.stats.avgCost;
  vendor.stats.successRate = vendor.stats.totalOrders > 0
    ? Math.round((vendor.stats.deliveredOrders / vendor.stats.totalOrders) * 100)
    : 0;
  vendor.stats.lastOrderAt = new Date();
  await vendor.save();

  await Order.updateOne({ _id: order._id }, { "vendor.statCounted": true });
}
