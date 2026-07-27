import Order from "../models/order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

const PAID_STATUSES = ["COD", "PAID"];

// Internal team accounts used for testing — excluded so their test orders
// don't skew new/repeat customer counts, repeat rate, or M1 retention.
const TEST_ACCOUNT_EMAILS = [
  "toolseva727@gmail.com",
  "amansinha1799@gmail.com",
  "amansinha727@gmail.com",
  "roshini5114@gmail.com",
  "mrinalraj4u@gmail.com",
];

const RANGE_DAYS = { "7d": 7, "30d": 30, "90d": 90, all: null };

function rangeStart(range) {
  const days = RANGE_DAYS[range] ?? 30;
  if (days === null) return null;
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - (days - 1));
  return d;
}

function monthKey(date) {
  const d = new Date(date);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

function addMonths(monthStr, n) {
  const [y, m] = monthStr.split("-").map(Number);
  const d = new Date(Date.UTC(y, m - 1 + n, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

function dayKey(date) {
  return new Date(date).toISOString().slice(0, 10);
}

/**
 * GET /api/analytics/dashboard?range=7d|30d|90d|all
 *
 * Metric definitions (documented here since this is the single source of truth):
 *
 * - New Customer Order:    an order that is that customer's FIRST order ever (lifetime).
 * - Repeat Customer Order: any order after a customer's first (2nd, 3rd, ...).
 *   These two are computed from full lifetime order history, then the counts
 *   are filtered down to the selected range for reporting -- i.e. "how many
 *   of the orders placed in this window were someone's first vs a repeat."
 *
 * - Repeat Rate (customer-level, lifetime, NOT range-scoped):
 *   % of all customers who have ever ordered that have placed 2+ orders.
 *   This answers "of everyone who has ever bought from us, what fraction
 *   came back at least once" -- independent of the selected date range.
 *
 * - M1 Retention Rate (cohort-based, lifetime, NOT range-scoped):
 *   Customers are grouped into a cohort by the calendar month of their
 *   FIRST order. M1 retention for a cohort = % of that cohort who placed
 *   at least one more order in the very next calendar month.
 *   A cohort is only "eligible" for reporting once its M+1 month has fully
 *   elapsed (otherwise the rate would be artificially low mid-month).
 *   The blended M1 rate sums retained/total across all eligible cohorts.
 *
 * Category/City/Revenue-trend/Order-status/Top-products ARE range-scoped.
 */
export const getDashboard = async (req, res) => {
  try {
    const range = RANGE_DAYS[req.query.range] !== undefined ? req.query.range : "30d";
    const from = rangeStart(range);

    const testUsers = await User.find({ email: { $in: TEST_ACCOUNT_EMAILS } }).select("userId").lean();
    const testUserIds = testUsers.map((u) => u.userId);

    // Pull full lifetime order history once -- needed for new/repeat + cohort
    // classification, which can't be determined by looking at the range alone.
    const allOrders = await Order.find({
      paymentStatus: { $in: PAID_STATUSES },
      ...(testUserIds.length ? { userId: { $nin: testUserIds } } : {}),
    })
      .select("userId orderId totalPrice orderStatus createdAt shippingAddress.city cartItems")
      .sort({ createdAt: 1 })
      .lean();

    // ── Per-customer order sequence (1st, 2nd, 3rd order...) ─────────────────
    const seqByUser = new Map();       // userId -> orders seen so far (running count)
    const firstOrderMonth = new Map(); // userId -> "YYYY-MM" of their first order
    const orderedMonthsByUser = new Map(); // userId -> Set of "YYYY-MM" they ordered in

    for (const o of allOrders) {
      const count = (seqByUser.get(o.userId) || 0) + 1;
      seqByUser.set(o.userId, count);
      o._seq = count; // 1 = new customer order, 2+ = repeat

      const mk = monthKey(o.createdAt);
      if (count === 1) firstOrderMonth.set(o.userId, mk);
      if (!orderedMonthsByUser.has(o.userId)) orderedMonthsByUser.set(o.userId, new Set());
      orderedMonthsByUser.get(o.userId).add(mk);
    }

    // ── Repeat rate (lifetime, customer-level) ────────────────────────────────
    const totalCustomers = seqByUser.size;
    const repeatCustomers = [...seqByUser.values()].filter((c) => c >= 2).length;
    const repeatRate = totalCustomers ? (repeatCustomers / totalCustomers) * 100 : 0;

    // ── M1 cohort retention ────────────────────────────────────────────────────
    const currentMonth = monthKey(new Date());
    const cohortSizes = new Map();    // month -> # customers whose first order was this month
    for (const mk of firstOrderMonth.values()) {
      cohortSizes.set(mk, (cohortSizes.get(mk) || 0) + 1);
    }
    const cohortRetained = new Map(); // month -> # of that cohort who also ordered in month+1
    for (const [userId, cohortMonth] of firstOrderMonth.entries()) {
      const nextMonth = addMonths(cohortMonth, 1);
      if (orderedMonthsByUser.get(userId)?.has(nextMonth)) {
        cohortRetained.set(cohortMonth, (cohortRetained.get(cohortMonth) || 0) + 1);
      }
    }
    const cohortMonths = [...cohortSizes.keys()].sort();
    const cohortRetention = cohortMonths.map((cohortMonth) => {
      const nextMonth = addMonths(cohortMonth, 1);
      const eligible = nextMonth < currentMonth; // M+1 has fully elapsed
      const newCustomers = cohortSizes.get(cohortMonth) || 0;
      const retained = cohortRetained.get(cohortMonth) || 0;
      return {
        cohortMonth,
        newCustomers,
        retainedM1: retained,
        m1Rate: eligible && newCustomers ? (retained / newCustomers) * 100 : null,
        eligible,
      };
    });
    const eligibleCohorts = cohortRetention.filter((c) => c.eligible);
    const blendedNew = eligibleCohorts.reduce((s, c) => s + c.newCustomers, 0);
    const blendedRetained = eligibleCohorts.reduce((s, c) => s + c.retainedM1, 0);
    const m1RetentionRate = blendedNew ? (blendedRetained / blendedNew) * 100 : 0;

    // ── Range-scoped orders ────────────────────────────────────────────────────
    const inRange = from ? allOrders.filter((o) => new Date(o.createdAt) >= from) : allOrders;

    const totalOrders  = inRange.length;
    const totalRevenue = inRange.reduce((s, o) => s + (o.totalPrice || 0), 0);
    const aov = totalOrders ? totalRevenue / totalOrders : 0;

    const newOrders    = inRange.filter((o) => o._seq === 1);
    const repeatOrders = inRange.filter((o) => o._seq >= 2);
    const newOrdersRevenue    = newOrders.reduce((s, o) => s + (o.totalPrice || 0), 0);
    const repeatOrdersRevenue = repeatOrders.reduce((s, o) => s + (o.totalPrice || 0), 0);

    // ── Order status breakdown ─────────────────────────────────────────────────
    const statusMap = new Map();
    for (const o of inRange) {
      const st = o.orderStatus || "Pending";
      statusMap.set(st, (statusMap.get(st) || 0) + 1);
    }
    const orderStatusBreakdown = [...statusMap.entries()].map(([status, count]) => ({ status, count }));

    // ── City breakdown ─────────────────────────────────────────────────────────
    const cityMap = new Map();
    for (const o of inRange) {
      const city = (o.shippingAddress?.city || "Unknown").trim();
      const cur = cityMap.get(city) || { city, orders: 0, revenue: 0 };
      cur.orders += 1;
      cur.revenue += o.totalPrice || 0;
      cityMap.set(city, cur);
    }
    const ordersByCity = [...cityMap.values()].sort((a, b) => b.orders - a.orders).slice(0, 15);

    // ── Revenue trend (daily buckets) ──────────────────────────────────────────
    const trendMap = new Map();
    for (const o of inRange) {
      const dk = dayKey(o.createdAt);
      const cur = trendMap.get(dk) || { date: dk, orders: 0, revenue: 0 };
      cur.orders += 1;
      cur.revenue += o.totalPrice || 0;
      trendMap.set(dk, cur);
    }
    const revenueTrend = [...trendMap.values()].sort((a, b) => a.date.localeCompare(b.date));

    // ── Category + top products (needs a join against Product) ────────────────
    const pidSet = new Set();
    for (const o of inRange) (o.cartItems || []).forEach((ci) => ci.productId && pidSet.add(String(ci.productId)));
    const pids = [...pidSet];
    const objectIds = pids.filter((id) => /^[0-9a-fA-F]{24}$/.test(id));
    const products = await Product.find({
      $or: [
        { _id: { $in: objectIds } },
        { product_id: { $in: pids } },
        { "variants._id": { $in: objectIds } },
      ],
    }).select("product_id categorization.category_name variants._id").lean();

    const categoryByPid = {};
    for (const p of products) {
      const cat = p.categorization?.category_name || "Uncategorized";
      categoryByPid[String(p._id)] = cat;
      if (p.product_id) categoryByPid[p.product_id] = cat;
      (p.variants || []).forEach((v) => { categoryByPid[String(v._id)] = cat; });
    }

    const categoryMap = new Map(); // category -> { orders: Set(orderId), revenue }
    const productMap  = new Map(); // name -> { orders, revenue }
    for (const o of inRange) {
      const categoriesInOrder = new Set();
      for (const ci of o.cartItems || []) {
        const cat = categoryByPid[String(ci.productId)] || "Uncategorized";
        categoriesInOrder.add(cat);
        const lineRevenue = (ci.selling_price || 0) * (ci.quantity || 1);

        const pm = productMap.get(ci.name) || { name: ci.name, orders: 0, revenue: 0 };
        pm.orders += 1;
        pm.revenue += lineRevenue;
        productMap.set(ci.name, pm);
      }
      for (const cat of categoriesInOrder) {
        const cm = categoryMap.get(cat) || { category: cat, orders: 0, revenue: 0 };
        cm.orders += 1; // order touched this category (an order spanning 2 categories counts toward both)
        cm.revenue += (o.cartItems || [])
          .filter((ci) => (categoryByPid[String(ci.productId)] || "Uncategorized") === cat)
          .reduce((s, ci) => s + (ci.selling_price || 0) * (ci.quantity || 1), 0);
        categoryMap.set(cat, cm);
      }
    }
    const ordersByCategory = [...categoryMap.values()].sort((a, b) => b.revenue - a.revenue);
    const topProducts = [...productMap.values()].sort((a, b) => b.revenue - a.revenue).slice(0, 10);

    res.json({
      success: true,
      range,
      summary: {
        totalOrders, totalRevenue, aov,
        newCustomerOrders: newOrders.length,
        repeatCustomerOrders: repeatOrders.length,
        newCustomerRevenue: newOrdersRevenue,
        repeatCustomerRevenue: repeatOrdersRevenue,
        totalCustomers, repeatCustomers, repeatRate,
        m1RetentionRate,
      },
      ordersByCategory,
      ordersByCity,
      revenueTrend,
      orderStatusBreakdown,
      cohortRetention,
      topProducts,
    });
  } catch (err) {
    console.error("analytics dashboard error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};
