import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import {
  createVendor, updateVendor, deactivateVendor, listVendors,
  getVendorProfile, recommendVendors, assignVendorToOrder, assignVendorToOrderItem, getPinCodeStat,
  updateOrderVendorCost, updateOrderItemVendorCost,
} from "../controllers/vendorController.js";

const router = express.Router();
const auth = [authMiddleware, checkAccess("overall")];

router.get("/recommend", ...auth, recommendVendors); // before /:id so "recommend" isn't parsed as an id
router.get("/pincode-stats", ...auth, getPinCodeStat); // before /:id, same reason
router.get("/", ...auth, listVendors);
router.post("/", ...auth, createVendor);
router.get("/:id", ...auth, getVendorProfile);
router.put("/:id", ...auth, updateVendor);
router.delete("/:id", ...auth, deactivateVendor);
router.post("/orders/:orderId/assign", ...auth, assignVendorToOrder);
router.post("/orders/:orderId/assign-item", ...auth, assignVendorToOrderItem);
router.put("/orders/:orderId/vendor-cost", ...auth, updateOrderVendorCost);
router.put("/orders/:orderId/vendor-cost-item", ...auth, updateOrderItemVendorCost);

export default router;
