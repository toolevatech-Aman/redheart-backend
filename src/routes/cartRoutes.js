import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { syncCart, getMyCart } from "../controllers/cartController.js";

const router = express.Router();

router.put("/", auth, syncCart);
router.get("/", auth, getMyCart);

export default router;
