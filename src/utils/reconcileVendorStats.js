import Order from "../models/order.js";
import Vendor from "../models/Vendor.js";
import PinCodeStat from "../models/PinCodeStat.js";
import { itemRevenue } from "./itemRevenue.js";

const BASELINE_SHIPPING_FEE = 49;
const MIN_SAMPLE_SIZE = 1;

// Rebuilds Vendor.stats and PinCodeStat entirely from the current state of
// Orders, instead of trusting the incrementally-accumulated numbers — those
// drift when an order is reassigned from one vendor to another (the old
// vendor's stats are never decremented on reassignment). Safe to call
// repeatedly; it's a full rebuild each time, not an increment. Uses whatever
// mongoose connection is already open — callers own connect/disconnect.
export async function runVendorReconciliation() {
  await Vendor.updateMany({}, {
    $set: {
      "stats.totalOrders": 0, "stats.deliveredOrders": 0, "stats.cancelledOrders": 0,
      "stats.totalCost": 0, "stats.avgCost": 0, "stats.totalRevenue": 0, "stats.margin": 0,
      "stats.successRate": 0, "stats.lastOrderAt": null,
    },
  });
  await PinCodeStat.deleteMany({});

  const vendorAgg = new Map();
  const pinAgg = new Map();
  const bump = (map, key, init) => {
    if (!map.has(key)) map.set(key, init());
    return map.get(key);
  };

  const orders = await Order.find({}).lean();
  const orderUpdates = [];

  for (const o of orders) {
    const isDelivered = o.orderStatus === "Delivered";
    const isCancelled = o.orderStatus === "Cancelled";
    const countable = isDelivered || isCancelled;
    const setFields = {};
    let orderChanged = false;

    if (o.vendor?.vendorId) {
      if (countable) {
        const v = bump(vendorAgg, String(o.vendor.vendorId), () => ({ totalOrders: 0, deliveredOrders: 0, cancelledOrders: 0, totalCost: 0, totalRevenue: 0, lastOrderAt: null }));
        v.totalOrders += 1;
        if (isDelivered) v.deliveredOrders += 1;
        if (isCancelled) v.cancelledOrders += 1;
        const hasCost = isDelivered && !!o.vendor.cost;
        if (hasCost) {
          v.totalCost += Number(o.vendor.cost);
          v.totalRevenue += Number(o.totalPrice || 0);
          if (o.shippingAddress?.postalCode) {
            const p = bump(pinAgg, String(o.shippingAddress.postalCode).trim(), () => ({ totalCost: 0, orderCount: 0, totalDeliveryCost: 0, deliveryOrderCount: 0 }));
            p.totalCost += Number(o.vendor.cost); p.orderCount += 1;
            if (o.vendor.deliveryCost) { p.totalDeliveryCost += Number(o.vendor.deliveryCost); p.deliveryOrderCount += 1; }
          }
        }
        if (!v.lastOrderAt || new Date(o.createdAt) > new Date(v.lastOrderAt)) v.lastOrderAt = o.createdAt;
        setFields["vendor.statCounted"] = true;
        setFields["vendor.revenueCounted"] = hasCost;
        orderChanged = true;
      } else if (o.vendor.statCounted || o.vendor.revenueCounted) {
        setFields["vendor.statCounted"] = false;
        setFields["vendor.revenueCounted"] = false;
        orderChanged = true;
      }
    }

    if (o.itemVendors?.length) {
      const newItemVendors = o.itemVendors.map((iv) => {
        if (!iv.vendorId) return iv;
        if (countable) {
          const v = bump(vendorAgg, String(iv.vendorId), () => ({ totalOrders: 0, deliveredOrders: 0, cancelledOrders: 0, totalCost: 0, totalRevenue: 0, lastOrderAt: null }));
          v.totalOrders += 1;
          if (isDelivered) v.deliveredOrders += 1;
          if (isCancelled) v.cancelledOrders += 1;
          const hasCost = isDelivered && !!iv.cost;
          if (hasCost) {
            const item = (o.cartItems || []).find((ci) => String(ci._id) === iv.cartItemId);
            const revenue = itemRevenue(item);
            v.totalCost += Number(iv.cost);
            v.totalRevenue += revenue;
            if (o.shippingAddress?.postalCode) {
              const p = bump(pinAgg, String(o.shippingAddress.postalCode).trim(), () => ({ totalCost: 0, orderCount: 0, totalDeliveryCost: 0, deliveryOrderCount: 0 }));
              p.totalCost += Number(iv.cost); p.orderCount += 1;
              if (iv.deliveryCost) { p.totalDeliveryCost += Number(iv.deliveryCost); p.deliveryOrderCount += 1; }
            }
          }
          if (!v.lastOrderAt || new Date(o.createdAt) > new Date(v.lastOrderAt)) v.lastOrderAt = o.createdAt;
          return { ...iv, statCounted: true, revenueCounted: hasCost };
        }
        return iv.statCounted || iv.revenueCounted ? { ...iv, statCounted: false, revenueCounted: false } : iv;
      });
      setFields["itemVendors"] = newItemVendors;
      orderChanged = true;
    }

    if (orderChanged) orderUpdates.push({ updateOne: { filter: { _id: o._id }, update: { $set: setFields } } });
  }

  if (orderUpdates.length) await Order.bulkWrite(orderUpdates);

  for (const [vendorId, v] of vendorAgg.entries()) {
    const avgCost = v.deliveredOrders > 0 ? Math.round(v.totalCost / v.deliveredOrders) : 0;
    const margin = v.totalRevenue - v.totalCost;
    const successRate = v.totalOrders > 0 ? Math.round((v.deliveredOrders / v.totalOrders) * 100) : 0;
    await Vendor.updateOne({ _id: vendorId }, {
      $set: {
        "stats.totalOrders": v.totalOrders, "stats.deliveredOrders": v.deliveredOrders, "stats.cancelledOrders": v.cancelledOrders,
        "stats.totalCost": v.totalCost, "stats.avgCost": avgCost, "stats.totalRevenue": v.totalRevenue, "stats.margin": margin,
        "stats.successRate": successRate, "stats.lastOrderAt": v.lastOrderAt,
      },
    });
  }

  for (const [pinCode, p] of pinAgg.entries()) {
    const avgCost = p.orderCount > 0 ? Math.round(p.totalCost / p.orderCount) : 0;
    const avgDeliveryCost = p.deliveryOrderCount > 0 ? Math.round(p.totalDeliveryCost / p.deliveryOrderCount) : 0;
    const extraDeliveryFee = p.deliveryOrderCount >= MIN_SAMPLE_SIZE ? Math.max(0, avgDeliveryCost - BASELINE_SHIPPING_FEE) : 0;
    await PinCodeStat.create({
      pinCode, totalCost: p.totalCost, orderCount: p.orderCount, avgCost,
      totalDeliveryCost: p.totalDeliveryCost, deliveryOrderCount: p.deliveryOrderCount, avgDeliveryCost, extraDeliveryFee,
    });
  }

  return { vendorsReconciled: vendorAgg.size, pinCodesReconciled: pinAgg.size, ordersScanned: orders.length };
}
