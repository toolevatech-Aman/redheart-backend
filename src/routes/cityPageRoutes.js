import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { cacheResponse } from "../middlewares/cacheMiddleware.js";
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
  upsertCityContent,
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
router.get("/all-slugs",              cacheResponse(300), getAllCitySlugs);
router.get("/page/:category/:slug",   cacheResponse(300), getCityPage);
router.get("/public/:category",       cacheResponse(300), getCitiesPublic);
router.post("/upsert",                upsertCityContent); // open — content seeding scripts

export default router;
