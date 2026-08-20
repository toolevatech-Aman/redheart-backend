import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import {
  createValentinePage,
  getValentinePage,
  trackView,
  recordResponse,
  createOrder,
  verifyPayment,
  sendMagicLink,
  verifyMagicLink,
  getMyPages,
  sendAbandonmentEmails,
  getAllValentineOrders,
} from "../controllers/valentineController.js";

const router = express.Router();

// Static routes must come before /:slug
router.post("/",                   createValentinePage);
router.post("/create-order",       createOrder);
router.post("/verify-payment",     verifyPayment);
router.post("/magic-link",         sendMagicLink);
router.post("/verify-magic-link",  verifyMagicLink);
router.get("/my-pages",            getMyPages);
router.post("/send-abandonment",   sendAbandonmentEmails);
router.get("/admin/orders",        auth, checkAccess("overall"), getAllValentineOrders);
router.get("/:slug",               getValentinePage);
router.patch("/:slug/view",        trackView);
router.post("/:slug/respond",      recordResponse);

export default router;
