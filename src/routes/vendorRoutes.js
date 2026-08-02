import express from "express";
import {
  createVendor, updateVendor, deactivateVendor, listVendors,
  getVendorProfile, recommendVendors, assignVendorToOrder,
} from "../controllers/vendorController.js";

const router = express.Router();

router.get("/recommend", recommendVendors); // before /:id so "recommend" isn't parsed as an id
router.get("/", listVendors);
router.post("/", createVendor);
router.get("/:id", getVendorProfile);
router.put("/:id", updateVendor);
router.delete("/:id", deactivateVendor);
router.post("/orders/:orderId/assign", assignVendorToOrder);

export default router;
