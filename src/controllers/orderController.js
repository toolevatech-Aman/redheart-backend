import Order from '../models/order.js';
import User from '../models/User.js';
import { getRazorpayInstance } from '../services/razorpay.js';

import { createHmac } from "crypto";

// Create order (user)
export const createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const orderData = req.body;
    if (orderData.deliveryDate) {
      const parts = orderData.deliveryDate.split('-');
      if (parts[0].length === 2) {
        parts[0] = '20' + parts[0];
      }
      orderData.deliveryDate = new Date(parts.join('-'));
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
// Get all orders (admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      paymentStatus: { $in: ["COD", "PAID"] } // filter
    });
    res.status(200).json({ success: true, data: orders });
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

    const validStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value' });
    }

    const order = await Order.findOneAndUpdate(
      { orderId },
      { orderStatus: status },
      { new: true }
    );

    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });

    res.status(200).json({ success: true, message: 'Order status updated', data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
