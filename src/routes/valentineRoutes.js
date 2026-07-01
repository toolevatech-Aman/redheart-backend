import express from "express";
import {
  createValentinePage,
  getValentinePage,
  trackView,
  recordResponse,
  createOrder,
  verifyPayment,
} from "../controllers/valentineController.js";

const router = express.Router();

// Static routes must come before /:slug
router.post("/",                   createValentinePage);
router.post("/create-order",       createOrder);
router.post("/verify-payment",     verifyPayment);
router.get("/:slug",               getValentinePage);
router.patch("/:slug/view",        trackView);
router.post("/:slug/respond",      recordResponse);

export default router;
