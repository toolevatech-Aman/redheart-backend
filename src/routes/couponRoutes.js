import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import {
  createCoupon, updateCoupon, deleteCoupon, toggleCouponStatus,
  listCoupons, getCoupon, getCouponDashboard, validateCoupon,
} from "../controllers/couponController.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

// Customer-facing — just needs a logged-in user, not admin
router.get("/validate", auth, validateCoupon);

// Admin-only
router.get("/dashboard", auth, isOverallAdmin, getCouponDashboard);
router.get("/", auth, isOverallAdmin, listCoupons);
router.post("/", auth, isOverallAdmin, createCoupon);
router.get("/:id", auth, isOverallAdmin, getCoupon);
router.put("/:id", auth, isOverallAdmin, updateCoupon);
router.delete("/:id", auth, isOverallAdmin, deleteCoupon);
router.patch("/:id/toggle-status", auth, isOverallAdmin, toggleCouponStatus);

export default router;
