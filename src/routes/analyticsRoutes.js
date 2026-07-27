import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { getDashboard } from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/dashboard", auth, isAdmin, getDashboard);

export default router;
