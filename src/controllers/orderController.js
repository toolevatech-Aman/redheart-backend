import Order from '../models/order.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import { getRazorpayInstance } from '../services/razorpay.js';
import ConfidentialKey from '../models/confidentialKeys.js';
import { sendOrderAlertEmail } from '../utils/orderAlertMail.js';
import { recordVendorOutcome, recordItemVendorOutcomes } from './vendorController.js';
import { validateAndComputeCoupon, markCouponUsed } from '../utils/couponEngine.js';
import { sendGA4Purchase } from '../utils/ga4.js';
import { computePincodeSurcharge } from './pincodeSurchargeController.js';
import { computeDeliverySurcharge } from './deliverySurchargeController.js';

import { createHmac } from "crypto";

// Create order (user)
export const createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const orderData = req.body;
    // Frontend sends deliveryDate as "DD-MM-YY" (see checkout/page.jsx). Reorder to
    // an ISO "YYYY-MM-DD" string before parsing — never treat the leading DD as a year.
    if (orderData.deliveryDate) {
      const [day, month, yearRaw] = orderData.deliveryDate.split('-');
      const year = yearRaw.length === 2 ? `20${yearRaw}` : yearRaw;
      orderData.deliveryDate = new Date(`${year}-${month}-${day}`);
    }

    // Never trust totalPrice from the client — always recompute it
    // server-side from its parts (subtotal, shipping, coupon discount,
    // tip), or a tampered request could set any final price it wants.
    const subtotal = Number(orderData.totalProductPrice) || 0;
    const shippingTotal = Number(orderData.totalShipmentPrice) || 0;

    // Tip is discretionary money the customer is choosing to add — not an
    // exploit vector the way a discount is — but still sanity-capped
    // against a UI glitch producing an absurd charge.
    const rawTip = Number(orderData.tipAmount) || 0;
    const tipAmount = Math.max(0, Math.min(rawTip, Math.round(subtotal * 0.5), 2000));
    orderData.tipAmount = tipAmount;

    let discount = 0;
    if (orderData.coupanApplied) {
      // Look up each cart item's category so a coupon scoped via
      // applicableCategories (e.g. a Surprise-only code) can't be used to
      // discount an unrelated regular product order — see couponEngine.js.
      // cartItems.productId may be product._id or product_id (see the same
      // ambiguity handled in getAllOrders below), so match on both.
      const cartPids = [...new Set((orderData.cartItems || []).map((ci) => ci.productId).filter(Boolean).map(String))];
      const cartObjectIds = cartPids.filter((id) => /^[0-9a-fA-F]{24}$/.test(id));
      const cartProducts = cartPids.length
        ? await Product.find({
            $or: [{ _id: { $in: cartObjectIds } }, { product_id: { $in: cartPids } }],
          }).select("categorization.category_name").lean()
        : [];
      const cartCategories = [...new Set(cartProducts.map((p) => p.categorization?.category_name).filter(Boolean))];

      const result = await validateAndComputeCoupon({
        code: orderData.coupanApplied, userId, subtotal,
        shippingCharges: shippingTotal, cartCategories,
      });
      discount = result.discount;
      orderData.coupanDiscount = discount;
      orderData.coupanSource = result.source;
      if (!result.source) orderData.coupanApplied = null; // invalid/expired — don't record a code that didn't actually apply
    }

    // Remote-area surcharge — computed here from the admin-managed rule for
    // the delivery pin code, never taken from the client. Coupons apply to
    // the product subtotal only, not to this charge.
    const surcharge = await computePincodeSurcharge(orderData.shippingAddress?.postalCode, subtotal);
    orderData.pincodeSurcharge = surcharge.amount || 0;
    orderData.pincodeSurchargeNote = surcharge.amount ? surcharge.note : "";

    // Extra delivery charge for pin codes that cost more to deliver to —
    // also set here, from the admin's rules, never taken from the client.
    const deliveryExtra = await computeDeliverySurcharge(orderData.shippingAddress?.postalCode);
    orderData.deliverySurcharge = deliveryExtra.amount || 0;
    orderData.deliverySurchargeNote = deliveryExtra.amount ? deliveryExtra.note : "";

    orderData.totalPrice = subtotal + shippingTotal - discount + tipAmount + orderData.pincodeSurcharge + orderData.deliverySurcharge;

    let razorpayOrder = null; // declare variable for response

    if (orderData.paymentMode === "PREPAID") {
      const razorpay = await getRazorpayInstance();

      razorpayOrder = await razorpay.orders.create({
        // Razorpay requires an integer paise amount — totalPrice can carry
        // fractional rupees after a percentage-based coupon discount, so
        // round rather than truncate via a raw *100 (was causing "The
        // amount must be an integer" 500s on checkout).
        amount: Math.round(Number(orderData.totalPrice) * 100),
        currency: "INR",
        receipt: `rcpt_${Date.now()}`
      });

      orderData.razorpayOrderId = razorpayOrder.id;
      orderData.paymentStatus = "PENDING";
    }

    // ✅ COD FLOW
    if (orderData.paymentMode === "COD") {
      orderData.paymentStatus = "COD";
    }
    const order = new Order({ ...orderData, userId });
    await order.save();
    sendOrderAlertEmail(order); // fire-and-forget, never blocks the response
    if (orderData.paymentMode === 'COD' && orderData.coupanApplied) {
      await markCouponUsed({ code: orderData.coupanApplied, source: orderData.coupanSource, userId });
    }

    // Frontend needs the live key_id to open the Razorpay checkout widget —
    // it was previously hardcoded there and went stale the moment the key
    // was rotated (order created fine under the new key, but the widget
    // opened with the old one → instant "Payment Failed"). Always hand back
    // whatever key is currently active instead.
    let key_id = null;
    if (orderData.paymentMode === "PREPAID") {
      const keyDoc = await ConfidentialKey.findOne({ key: "RAZORPAY_KEY_ID" });
      key_id = keyDoc?.value || null;
    }

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: order,
      key_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;

    // 1️⃣ Basic validation
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Missing Razorpay payment details'
      });
    }
  const razorpay = await getRazorpayInstance();
    const keySecret = razorpay.key_secret;
    // 2️⃣ Create expected signature
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = createHmac('sha256',keySecret)
      .update(body)
      .digest('hex');

    // 3️⃣ Verify signature
    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment signature'
      });
    }

    // 4️⃣ Find order
    const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // 5️⃣ Prevent double updates
    if (order.paymentStatus === 'PAID') {
      return res.json({
        success: true,
        message: 'Payment already verified'
      });
    }

    // 6️⃣ Update order payment info
    order.paymentStatus = 'PAID';
    order.razorpayPaymentId = razorpay_payment_id;
    order.orderStatus = 'Processing';

    await order.save();

    // 7️⃣ Mark coupon as used (AFTER payment success)
    if (order.coupanApplied) {
      await markCouponUsed({ code: order.coupanApplied, source: order.coupanSource, userId: order.userId });
    }

    // 8️⃣ Respond success
    res.json({
      success: true,
      message: 'Payment verified successfully',
      data: {
        orderId: order.orderId,
        paymentStatus: order.paymentStatus
      }
    });

  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while verifying payment',
      error: error.message
    });
  }
};
// ─── POST /api/orders/webhook — Razorpay "payment.captured" ─────────────────
// Recovery path for prepaid orders whose browser never came back to call
// verify-payment (closed tab, killed UPI-app redirect, etc.). Without this,
// such an order stays paymentStatus "PENDING" forever — invisible in
// getAllOrders (which only returns COD/PAID) even though the customer's
// money went through — and its GA4 `purchase` event never fires either,
// since that only fires client-side on /order-success.
//
// If the client already confirmed by the time this arrives (the normal,
// common case), the order is already "PAID" and this is a no-op — GA4
// reporting stays with the client-side event on /order-success, so a
// normal order is never double-counted. Only the recovery case (still
// "PENDING" here) reports GA4 itself, since the client-side event will
// never fire for it.
export const razorpayOrderWebhook = async (req, res) => {
  try {
    const webhookSecret = process.env.RAZORPAY_ORDER_WEBHOOK_SECRET || process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("RAZORPAY_WEBHOOK_SECRET not set — order webhook disabled");
      return res.status(200).json({ ok: true }); // 200 so Razorpay doesn't retry
    }

    const signature = req.headers["x-razorpay-signature"];
    const body = req.rawBody;
    if (!signature || !body) return res.status(400).json({ error: "missing signature or body" });

    const expected = createHmac("sha256", webhookSecret).update(body).digest("hex");
    if (expected !== signature) return res.status(400).json({ error: "invalid webhook signature" });

    const event = JSON.parse(body);
    if (event.event !== "payment.captured") return res.status(200).json({ ok: true });

    const payment = event.payload?.payment?.entity;
    const razorpayOrderId = payment?.order_id;
    if (!razorpayOrderId) return res.status(200).json({ ok: true });

    const order = await Order.findOne({ razorpayOrderId });
    if (!order) return res.status(200).json({ ok: true });

    if (order.paymentStatus !== "PAID") {
      order.paymentStatus = "PAID";
      order.razorpayPaymentId = payment.id;
      order.orderStatus = "Processing";
      await order.save();

      if (order.coupanApplied) {
        markCouponUsed({ code: order.coupanApplied, source: order.coupanSource, userId: order.userId })
          .catch((err) => console.error("markCouponUsed (webhook) failed:", err.message));
      }
      sendGA4Purchase(order).catch((err) => console.error("sendGA4Purchase failed:", err.message));

      console.log(`[webhook] Recovered order ${order.orderId} via payment.captured (client never confirmed)`);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("razorpayOrderWebhook error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};

// Get all orders (admin) — enriched with customer details and product links
const PRODUCT_CATEGORY_SLUG = { Flowers: "flowers", Cakes: "cakes", Plants: "plants" };

export const getAllOrders = async (req, res) => {
  try {
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
    const { search = "", status, paymentMode } = req.query;

    const baseFilter = { paymentStatus: { $in: ["COD", "PAID"] } };
    const filter = { ...baseFilter };
    if (status) filter.orderStatus = status;
    if (paymentMode) filter.paymentMode = new RegExp(`^${paymentMode}$`, "i");

    if (search.trim()) {
      const q = search.trim();
      const rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      // Matches either directly on the order (id, shipping details, item
      // names) or via the customer who placed it (name/email/phone) — the
      // customer match needs a separate lookup since Order only stores a
      // plain userId string, not an embedded/ref'd User document.
      const matchingUsers = await User.find({
        $or: [{ name: rx }, { email: rx }, { phone: rx }],
      }).select("userId").lean();
      const matchingUserIds = matchingUsers.map((u) => u.userId);

      filter.$or = [
        { orderId: rx },
        { "shippingAddress.firstName": rx },
        { "shippingAddress.lastName": rx },
        { "shippingAddress.phone": rx },
        { "shippingAddress.city": rx },
        { "cartItems.name": rx },
        ...(matchingUserIds.length ? [{ userId: { $in: matchingUserIds } }] : []),
      ];
    }

    // Stats reflect the full COD/PAID order set regardless of the current
    // search/status/paymentMode filter or page — the admin's stat cards are
    // meant to read as sitewide totals, not "totals for what's on screen".
    // A single $facet aggregation keeps this to one query instead of five.
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today); tomorrow.setDate(tomorrow.getDate() + 1);
    const [statsAgg, total, orders] = await Promise.all([
      Order.aggregate([
        { $match: baseFilter },
        {
          $facet: {
            total: [{ $count: "count" }],
            revenue: [
              { $match: { orderStatus: { $ne: "Cancelled" } } },
              { $group: { _id: null, sum: { $sum: "$totalPrice" } } },
            ],
            pending: [{ $match: { orderStatus: "Pending" } }, { $count: "count" }],
            deliverToday: [
              { $match: { deliveryDate: { $gte: today, $lt: tomorrow }, orderStatus: { $nin: ["Delivered", "Cancelled"] } } },
              { $count: "count" },
            ],
            overdue: [
              { $match: { deliveryDate: { $lt: today }, orderStatus: { $nin: ["Delivered", "Cancelled"] } } },
              { $count: "count" },
            ],
          },
        },
      ]),
      Order.countDocuments(filter),
      Order.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
    ]);

    const s = statsAgg[0] || {};
    const stats = {
      total: s.total?.[0]?.count || 0,
      revenue: s.revenue?.[0]?.sum || 0,
      pending: s.pending?.[0]?.count || 0,
      deliverToday: s.deliverToday?.[0]?.count || 0,
      overdue: s.overdue?.[0]?.count || 0,
    };

    // ── Join customer details (User.userId is the same UUID as Order.userId) ──
    const userIds = [...new Set(orders.map((o) => o.userId).filter(Boolean))];
    const users = await User.find({ userId: { $in: userIds } })
      .select("userId name email phone avatar")
      .lean();
    const userMap = Object.fromEntries(users.map((u) => [u.userId, u]));

    // ── Join product URLs (cartItems.productId may be product._id or product_id) ──
    // A third $or branch here used to match against "variants._id" — but
    // Product's actual schema calls that array `variations`, not `variants`,
    // so that clause could never match anything. Being both unindexed and
    // referencing a nonexistent field meant Mongo had to full-scan the
    // entire product catalog on every single call to this endpoint just to
    // rule it out — this admin list is polled frequently, and that scan was
    // the real driver behind this endpoint's chronic multi-second response
    // times (and a contributor to a production CPU-exhaustion incident).
    const pidSet = new Set();
    orders.forEach((o) =>
      (o.cartItems || []).forEach((ci) => ci.productId && pidSet.add(String(ci.productId)))
    );
    const pids = [...pidSet];
    const objectIds = pids.filter((id) => /^[0-9a-fA-F]{24}$/.test(id));

    const products = await Product.find({
      $or: [
        { _id: { $in: objectIds } },
        { product_id: { $in: pids } },
      ],
    })
      .select("product_id slug sku categorization.category_name")
      .lean();

    const productUrlMap = {};
    for (const p of products) {
      const catName = p.categorization?.category_name || "";
      const catSlug = PRODUCT_CATEGORY_SLUG[catName] || catName.toLowerCase();
      const skuPart = p.sku ? `-${String(p.sku).toLowerCase()}` : "";
      const url = `https://www.redheart.in/p/${catSlug}/${p.slug}${skuPart}`;
      productUrlMap[String(p._id)] = url;
      if (p.product_id) productUrlMap[p.product_id] = url;
    }

    const data = orders.map((o) => ({
      ...o,
      user: userMap[o.userId] || null,
      cartItems: (o.cartItems || []).map((ci) => ({
        ...ci,
        product_url: productUrlMap[String(ci.productId)] || null,
      })),
    }));

    res.status(200).json({
      success: true,
      data,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
      stats,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get orders for a specific user
export const getOrdersByUser = async (req, res) => {
  try {
    const userId = req.user.userId; // get userId from auth middleware
   
     const orders = await Order.find({
      userId,
      paymentStatus: { $in: ["COD", "PAID"] } // filter
    });
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get single order by orderId
export const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ orderId });
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    res.status(200).json({ success: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Update order status (admin)
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled','InTransit' ,'Out Of Delivery','Accepted'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value' });
    }

    const order = await Order.findOneAndUpdate(
      { orderId },
      { orderStatus: status },
      { new: true }
    );

    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });

    recordVendorOutcome(order).catch((err) => console.error("recordVendorOutcome failed:", err.message));
    recordItemVendorOutcomes(order).catch((err) => console.error("recordItemVendorOutcomes failed:", err.message));

    res.status(200).json({ success: true, message: 'Order status updated', data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
