import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { getDashboard, getMarginAnalytics } from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/dashboard", auth, isAdmin, getDashboard);
router.get("/margin", auth, isAdmin, getMarginAnalytics);

export default router;
