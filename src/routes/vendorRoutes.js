import express from "express";
import {
  createVendor, updateVendor, deactivateVendor, listVendors,
  getVendorProfile, recommendVendors, assignVendorToOrder, assignVendorToOrderItem, getPinCodeStat,
  updateOrderVendorCost, updateOrderItemVendorCost,
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
router.put("/orders/:orderId/vendor-cost", updateOrderVendorCost);
router.put("/orders/:orderId/vendor-cost-item", updateOrderItemVendorCost);

export default router;
