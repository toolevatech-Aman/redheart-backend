import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import {
  updateProfile, me, updateAddress, deleteAddress, getAllUsersAdmin, updateUserAccess,
  listAdmins, searchUsersForAccess,
} from "../controllers/userController.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

// Admin
router.get("/admin/all", auth, isOverallAdmin, getAllUsersAdmin);
// Access Control page — overall admins only.
router.get("/admin/admins", auth, isOverallAdmin, listAdmins);
router.get("/admin/search", auth, isOverallAdmin, searchUsersForAccess);
router.patch("/admin/:id/access", auth, isOverallAdmin, updateUserAccess);

// Protected
router.get("/me", auth, me);
router.put("/profile", auth, updateProfile);
router.put("/address/:addressId", auth, updateAddress);
router.delete("/address/:addressId", auth, deleteAddress);
export default router;
