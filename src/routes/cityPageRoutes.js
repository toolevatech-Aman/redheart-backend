import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import {
  getCities,
  getCitiesPublic,
  getAllCitySlugs,
  addCity,
  addCitiesBulk,
  updateCity,
  deleteCity,
  getCityPage,
  regenerateCities,
} from "../controllers/cityPageController.js";

const router = express.Router();
const auth   = [authMiddleware, isAdmin];

// ── Admin routes (auth + isAdmin) ─────────────────────────────────────────────
router.get("/cities/:category",              ...auth, getCities);
router.post("/cities",                       ...auth, addCity);
router.post("/cities/bulk",                  ...auth, addCitiesBulk);
router.post("/cities/regenerate/:category",  ...auth, regenerateCities);
router.put("/cities/:id",                    ...auth, updateCity);
router.delete("/cities/:id",                 ...auth, deleteCity);

// ── Public routes ─────────────────────────────────────────────────────────────
router.get("/all-slugs",              getAllCitySlugs);
router.get("/page/:category/:slug",   getCityPage);
router.get("/public/:category",       getCitiesPublic);

export default router;
