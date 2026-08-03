import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import {
  createCoupon, updateCoupon, deleteCoupon, toggleCouponStatus,
  listCoupons, getCoupon, getCouponDashboard, validateCoupon,
} from "../controllers/couponController.js";

const router = express.Router();

// Customer-facing — just needs a logged-in user, not admin
router.get("/validate", auth, validateCoupon);

// Admin-only
router.get("/dashboard", auth, isAdmin, getCouponDashboard);
router.get("/", auth, isAdmin, listCoupons);
router.post("/", auth, isAdmin, createCoupon);
router.get("/:id", auth, isAdmin, getCoupon);
router.put("/:id", auth, isAdmin, updateCoupon);
router.delete("/:id", auth, isAdmin, deleteCoupon);
router.patch("/:id/toggle-status", auth, isAdmin, toggleCouponStatus);

export default router;
