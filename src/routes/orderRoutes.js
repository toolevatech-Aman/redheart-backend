import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrdersByUser,
  getOrderById,
  updateOrderStatus,
  verifyPayment
} from '../controllers/orderController.js';
import auth from '../middlewares/authMiddleware.js';
import { checkAccess } from '../middlewares/checkAccess.js';
const isOverallAdmin = checkAccess("overall");

const router = express.Router();

// --------------------
// User Routes (Authenticated)
// --------------------

// Create order (logged-in user)
router.post('/', auth, createOrder);
router.post("/verify-payment", auth, verifyPayment);
// Get orders for logged-in user
// Old route: router.get('/user/:userId', auth, getOrdersByUser);
router.get('/user', auth, getOrdersByUser); // no need for :userId anymore

// Get single order by orderId (only user who owns it or admin can access inside controller if needed)
router.get('/:orderId', auth, getOrderById);

// --------------------
// Admin Routes
// --------------------

// Get all orders
router.get('/', auth, isOverallAdmin, getAllOrders);

// Update order status
router.patch('/admin/:orderId/status', auth, isOverallAdmin, updateOrderStatus);

export default router;
