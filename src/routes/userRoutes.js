import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { updateProfile, me, updateAddress, deleteAddress, getAllUsersAdmin } from "../controllers/userController.js";

const router = express.Router();

// Admin
router.get("/admin/all", auth, isAdmin, getAllUsersAdmin);

// Protected
router.get("/me", auth, me);
router.put("/profile", auth, updateProfile);
router.put("/address/:addressId", auth, updateAddress);
router.delete("/address/:addressId", auth, deleteAddress);
export default router;
