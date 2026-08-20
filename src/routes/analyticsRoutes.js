import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { getDashboard, getMarginAnalytics } from "../controllers/analyticsController.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

router.get("/dashboard", auth, isOverallAdmin, getDashboard);
router.get("/margin", auth, isOverallAdmin, getMarginAnalytics);

export default router;
