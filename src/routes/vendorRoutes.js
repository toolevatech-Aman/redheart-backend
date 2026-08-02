import express from "express";
import {
  createVendor, updateVendor, deactivateVendor, listVendors,
  getVendorProfile, recommendVendors, assignVendorToOrder, assignVendorToOrderItem, getPinCodeStat,
} from "../controllers/vendorController.js";

const router = express.Router();

router.get("/recommend", recommendVendors); // before /:id so "recommend" isn't parsed as an id
router.get("/pincode-stats", getPinCodeStat); // before /:id, same reason
router.get("/", listVendors);
router.post("/", createVendor);
router.get("/:id", getVendorProfile);
router.put("/:id", updateVendor);
router.delete("/:id", deactivateVendor);
router.post("/orders/:orderId/assign", assignVendorToOrder);
router.post("/orders/:orderId/assign-item", assignVendorToOrderItem);

export default router;
