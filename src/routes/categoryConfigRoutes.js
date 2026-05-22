// categoryConfigRoutes.js
import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
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
const auth   = [authMiddleware, isAdmin];

// Public
router.get("/",     listConfigs);
router.get("/:name", getConfig);

// Admin-protected
router.post("/",                      ...auth, createConfig);
router.put("/:name",                  ...auth, updateConfig);
router.delete("/:name",               ...auth, deleteConfig);
router.post("/:name/generate-cities", ...auth, generateCityPages);
router.get("/:name/template",         ...auth, downloadTemplate);

export default router;
