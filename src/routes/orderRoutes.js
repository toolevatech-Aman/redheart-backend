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
  getSurchargeForPin, listSurcharges, upsertSurcharge, bulkUpsertSurcharges, deleteSurcharge,
} from '../controllers/pincodeSurchargeController.js';
import {
  getDeliverySurchargeForPin, listDeliverySurcharges, bulkUpsertDeliverySurcharges,
  upsertDeliverySurcharge, deleteDeliverySurcharge, deliveryCostInsights,
} from '../controllers/deliverySurchargeController.js';
import {
  searchCustomers, getCustomer, createCustomer, searchProducts, previewManualOrder, createManualOrder,
} from '../controllers/manualOrderController.js';
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
router.get('/delivery-surcharge', auth, getDeliverySurchargeForPin);

// Get single order by orderId (only user who owns it or admin can access inside controller if needed)
router.get('/:orderId', auth, getOrderById);

// --------------------
// Admin Routes
// --------------------

// Get all orders
router.get('/', auth, isOverallAdmin, getAllOrders);

// Pin-code surcharges (admin-managed)
router.get('/admin/pincode-surcharges', auth, isOverallAdmin, listSurcharges);
router.post('/admin/pincode-surcharges', auth, isOverallAdmin, bulkUpsertSurcharges);
router.put('/admin/pincode-surcharges/:pinCode', auth, isOverallAdmin, upsertSurcharge);
router.delete('/admin/pincode-surcharges/:pinCode', auth, isOverallAdmin, deleteSurcharge);

// Delivery surcharges (admin-managed) + vendor delivery-cost reference data
router.get('/admin/delivery-surcharges', auth, isOverallAdmin, listDeliverySurcharges);
router.get('/admin/delivery-cost-insights', auth, isOverallAdmin, deliveryCostInsights);
router.post('/admin/delivery-surcharges', auth, isOverallAdmin, bulkUpsertDeliverySurcharges);
router.put('/admin/delivery-surcharges/:pinCode', auth, isOverallAdmin, upsertDeliverySurcharge);
router.delete('/admin/delivery-surcharges/:pinCode', auth, isOverallAdmin, deleteDeliverySurcharge);

// Update order status
// Admin: create an order on a customer's behalf
router.get('/admin/customers', auth, isOverallAdmin, searchCustomers);
router.get('/admin/customers/:userId', auth, isOverallAdmin, getCustomer);
router.post('/admin/customers', auth, isOverallAdmin, createCustomer);
router.get('/admin/products', auth, isOverallAdmin, searchProducts);
router.post('/admin/manual/preview', auth, isOverallAdmin, previewManualOrder);
router.post('/admin/manual', auth, isOverallAdmin, createManualOrder);

router.patch('/admin/:orderId/status', auth, isOverallAdmin, updateOrderStatus);

export default router;
