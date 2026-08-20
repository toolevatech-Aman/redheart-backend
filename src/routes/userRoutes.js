import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { updateProfile, me, updateAddress, deleteAddress, getAllUsersAdmin, updateUserAccess } from "../controllers/userController.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

// Admin
router.get("/admin/all", auth, isOverallAdmin, getAllUsersAdmin);
// Overall admins only — grants/restricts other admins' access levels.
router.patch("/admin/:id/access", auth, isOverallAdmin, updateUserAccess);

// Protected
router.get("/me", auth, me);
router.put("/profile", auth, updateProfile);
router.put("/address/:addressId", auth, updateAddress);
router.delete("/address/:addressId", auth, deleteAddress);
export default router;
