import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { rateLimit } from "../middlewares/rateLimitMiddleware.js";
import {
  createValentinePage,
  getValentinePage,
  trackView,
  recordResponse,
  createOrder,
  verifyPayment,
  validateCoupon,
  sendMagicLink,
  verifyMagicLink,
  getMyPages,
  sendAbandonmentEmails,
  getAllValentineOrders,
} from "../controllers/valentineController.js";

const router = express.Router();

// Static routes must come before /:slug
router.post("/",                   createValentinePage);
// Payment-adjacent — real side effects (a live Razorpay order, or a probe
// surface for enumerating valid coupon codes), so rate-limited per IP on
// top of whatever the edge (Vercel Firewall) already does.
router.post("/create-order",       rateLimit({ windowMs: 60_000, max: 5,  message: "Too many order attempts. Please wait a minute and try again." }), createOrder);
router.post("/validate-coupon",    rateLimit({ windowMs: 60_000, max: 10, message: "Too many code checks. Please wait a minute and try again." }),   validateCoupon);
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
