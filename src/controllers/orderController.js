import Order from '../models/order.js';
import User from '../models/User.js';

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

    const order = new Order({ ...orderData, userId });
    await order.save();
 if (orderData.coupanApplied) {
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

// Get all orders (admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
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
    console.log("userId:", userId);
    const orders = await Order.find({ userId });
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
