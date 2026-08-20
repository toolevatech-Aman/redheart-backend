import express from "express";
import {
  createAddOn,
  editAddOn,
  softDeleteAddOn,
  getAllAddOns,
  getAddOnByName,
  getAddOnsByCategory,
  getAddOnsExceptCategory
} from "../controllers/addOnController.js";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
const router = express.Router();
const isCategoryAdmin = checkAccess("category");

// Create AddOn (admin only)
router.post("/create", auth, isCategoryAdmin, createAddOn);

// Edit AddOn (admin only)
router.put("/edit/:id", auth, isCategoryAdmin, editAddOn);

// Soft delete AddOn (admin only)
router.put("/softDelete/:id", auth, isCategoryAdmin, softDeleteAddOn);

// Get all AddOns (admin only)
router.get("/all", auth, isCategoryAdmin, getAllAddOns);

// Get AddOn by name (public)
router.get("/name/:name", getAddOnByName);

router.get("/category/:category", getAddOnsByCategory);

router.get("/exclude/:category", getAddOnsExceptCategory);

export default router;