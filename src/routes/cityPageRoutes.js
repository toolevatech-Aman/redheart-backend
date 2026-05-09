import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import {
  getCities,
  addCity,
  addCitiesBulk,
  updateCity,
  deleteCity,
  getCityPage,
} from "../controllers/cityPageController.js";

const router = express.Router();
const auth   = [authMiddleware, isAdmin];

// ── Admin routes (auth + isAdmin) ─────────────────────────────────────────────
router.get("/cities/:category",  ...auth, getCities);
router.post("/cities",           ...auth, addCity);
router.post("/cities/bulk",      ...auth, addCitiesBulk);
router.put("/cities/:id",        ...auth, updateCity);
router.delete("/cities/:id",     ...auth, deleteCity);

// ── Public route ──────────────────────────────────────────────────────────────
router.get("/page/:category/:slug", getCityPage);

export default router;
