import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
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
const auth   = [authMiddleware, checkAccess("seo", "category")];

// ── Admin routes (auth + seo/category access) ─────────────────────────────────
router.get("/cities/:category",              ...auth, getCities);
router.post("/cities",                       ...auth, addCity);
router.post("/cities/bulk",                  ...auth, addCitiesBulk);
router.post("/cities/regenerate/:category",  ...auth, regenerateCities);
router.put("/cities/:id",                    ...auth, updateCity);
router.delete("/cities/:id",                 ...auth, deleteCity);

// ── Public routes ─────────────────────────────────────────────────────────────
router.get("/all-slugs",              cacheResponse(3600), getAllCitySlugs);
router.get("/page/:category/:slug",   cacheResponse(3600), getCityPage);
router.get("/public/:category",       cacheResponse(3600), getCitiesPublic);
router.post("/upsert",                ...auth, upsertCityContent);

export default router;
