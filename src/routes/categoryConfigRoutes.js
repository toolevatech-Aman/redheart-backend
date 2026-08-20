// categoryConfigRoutes.js
import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { cacheResponse } from "../middlewares/cacheMiddleware.js";
import {
  listConfigs,
  getConfig,
  createConfig,
  updateConfig,
  deleteConfig,
  generateCityPages,
  downloadTemplate,
} from "../controllers/categoryConfigController.js";

const router = express.Router();
const auth   = [authMiddleware, checkAccess("category")];

// Public
router.get("/",     cacheResponse(3600), listConfigs);
router.get("/:name", cacheResponse(3600), getConfig);

// Admin-protected
router.post("/",                      ...auth, createConfig);
router.put("/:name",                  ...auth, updateConfig);
router.delete("/:name",               ...auth, deleteConfig);
router.post("/:name/generate-cities", ...auth, generateCityPages);
router.get("/:name/template",         ...auth, downloadTemplate);

export default router;
