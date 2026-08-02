import Order from '../models/order.js';
import User from '../models/User.js';
import { getRazorpayInstance } from '../services/razorpay.js';
import { sendOrderAlertEmail } from '../utils/orderAlertMail.js';
import { recordVendorOutcome, recordItemVendorOutcomes } from './vendorController.js';

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

    // Never trust the discount amount the client computed — recompute it
    // server-side from the user's actual coupon record (incl. maxDiscount
    // cap), or a tampered request could apply any discount it wants.
    if (orderData.coupanApplied) {
      const user = await User.findOne({ userId }).select("coupons").lean();
      const coupon = user?.coupons?.find(
        (c) => c.code?.toUpperCase() === orderData.coupanApplied.toUpperCase() && !c.isUsed
      );
      const subtotal = Number(orderData.totalProductPrice) || 0;

      let discount = 0;
      if (coupon && subtotal >= Number(coupon.minOrderValue || 0)) {
        discount = coupon.discountType === "percentage"
          ? (subtotal * Number(coupon.discountValue)) / 100
          : Number(coupon.discountValue);
        if (coupon.maxDiscount) discount = Math.min(discount, Number(coupon.maxDiscount));
      }

      orderData.coupanDiscount = discount;
      orderData.totalPrice = (Number(orderData.totalProductPrice) || 0)
        + (Number(orderData.totalShipmentPrice) || 0)
        - discount;
    }

    let razorpayOrder = null; // declare variable for response

    if (orderData.paymentMode === "PREPAID") {
      const razorpay = await getRazorpayInstance();

      razorpayOrder = await razorpay.orders.create({
        amount: Number(orderData.totalPrice) * 100, 
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
  await User.updateOne(
    { userId, 'coupons.code': orderData.coupanApplied.toUpperCase() },
    { $set: { 'coupons.$.isUsed': true } }
  );
}

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: order
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
      await User.updateOne(
        {
          userId: order.userId,
          'coupons.code': order.coupanApplied.toUpperCase()
        },
        {
          $set: { 'coupons.$.isUsed': true }
        }
      );
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
// Get all orders (admin) — enriched with customer details and product links
const PRODUCT_CATEGORY_SLUG = { Flowers: "flowers", Cakes: "cakes", Plants: "plants" };

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      paymentStatus: { $in: ["COD", "PAID"] } // filter
    })
      .sort({ createdAt: -1 })
      .lean();

    // ── Join customer details (User.userId is the same UUID as Order.userId) ──
    const userIds = [...new Set(orders.map((o) => o.userId).filter(Boolean))];
    const users = await User.find({ userId: { $in: userIds } })
      .select("userId name email phone avatar")
      .lean();
    const userMap = Object.fromEntries(users.map((u) => [u.userId, u]));

    // ── Join product URLs (cartItems.productId may be product._id, product_id, or a variant._id) ──
    const pidSet = new Set();
    orders.forEach((o) =>
      (o.cartItems || []).forEach((ci) => ci.productId && pidSet.add(String(ci.productId)))
    );
    const pids = [...pidSet];
    const objectIds = pids.filter((id) => /^[0-9a-fA-F]{24}$/.test(id));

    const Product = (await import("../models/Product.js")).default;
    const products = await Product.find({
      $or: [
        { _id: { $in: objectIds } },
        { product_id: { $in: pids } },
        { "variants._id": { $in: objectIds } },
      ],
    })
      .select("product_id slug sku categorization.category_name variants._id")
      .lean();

    const productUrlMap = {};
    for (const p of products) {
      const catName = p.categorization?.category_name || "";
      const catSlug = PRODUCT_CATEGORY_SLUG[catName] || catName.toLowerCase();
      const skuPart = p.sku ? `-${String(p.sku).toLowerCase()}` : "";
      const url = `https://www.redheart.in/p/${catSlug}/${p.slug}${skuPart}`;
      productUrlMap[String(p._id)] = url;
      if (p.product_id) productUrlMap[p.product_id] = url;
      (p.variants || []).forEach((v) => { productUrlMap[String(v._id)] = url; });
    }

    const data = orders.map((o) => ({
      ...o,
      user: userMap[o.userId] || null,
      cartItems: (o.cartItems || []).map((ci) => ({
        ...ci,
        product_url: productUrlMap[String(ci.productId)] || null,
      })),
    }));

    res.status(200).json({ success: true, data });
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
