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
import {
  getSurchargeForPin, listSurcharges, upsertSurcharge, deleteSurcharge,
} from '../controllers/pincodeSurchargeController.js';
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

// Surcharge (if any) for a delivery pin code — before /:orderId so it isn't parsed as an id
router.get('/pincode-surcharge', auth, getSurchargeForPin);

// Get single order by orderId (only user who owns it or admin can access inside controller if needed)
router.get('/:orderId', auth, getOrderById);

// --------------------
// Admin Routes
// --------------------

// Get all orders
router.get('/', auth, isOverallAdmin, getAllOrders);

// Pin-code surcharges (admin-managed)
router.get('/admin/pincode-surcharges', auth, isOverallAdmin, listSurcharges);
router.put('/admin/pincode-surcharges/:pinCode', auth, isOverallAdmin, upsertSurcharge);
router.delete('/admin/pincode-surcharges/:pinCode', auth, isOverallAdmin, deleteSurcharge);

// Update order status
router.patch('/admin/:orderId/status', auth, isOverallAdmin, updateOrderStatus);

export default router;
