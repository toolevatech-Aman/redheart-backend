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
import { isAdmin } from "../middlewares/isAdmin.js";
const router = express.Router();

// Create AddOn (admin only)
router.post("/create", auth,isAdmin, createAddOn);

// Edit AddOn (admin only)
router.put("/edit/:id",auth, isAdmin, editAddOn);

// Soft delete AddOn (admin only)
router.put("/softDelete/:id",auth, isAdmin, softDeleteAddOn);

// Get all AddOns (admin only)
router.get("/all", auth,isAdmin, getAllAddOns);

// Get AddOn by name (public)
router.get("/name/:name", getAddOnByName);

router.get("/category/:category", getAddOnsByCategory);
export default router;

router.get("/addons/exclude/:category", getAddOnsExceptCategory);
