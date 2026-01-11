import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrdersByUser,
  getOrderById,
  updateOrderStatus
} from '../controllers/orderController.js';
import auth from '../middlewares/authMiddleware.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const router = express.Router();

// --------------------
// User Routes (Authenticated)
// --------------------

// Create order (logged-in user)
router.post('/', auth, createOrder);

// Get orders for logged-in user
// Old route: router.get('/user/:userId', auth, getOrdersByUser);
router.get('/user', auth, getOrdersByUser); // no need for :userId anymore

// Get single order by orderId (only user who owns it or admin can access inside controller if needed)
router.get('/:orderId', auth, getOrderById);

// --------------------
// Admin Routes
// --------------------

// Get all orders
router.get('/', auth, isAdmin, getAllOrders);

// Update order status
router.patch('/admin/:orderId/status', auth, isAdmin, updateOrderStatus);

export default router;
