import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { updateProfile, me, updateAddress, deleteAddress } from "../controllers/userController.js";

const router = express.Router();

// Protected

router.get("/me", auth, me);
router.put("/profile", auth, updateProfile);
router.put("/address/:addressId", auth, updateAddress);
router.delete("/address/:addressId", auth, deleteAddress);
export default router;
