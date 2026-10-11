import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { cacheResponse } from "../middlewares/cacheMiddleware.js";
import {
  getActiveTheme, listThemes, createTheme, updateTheme, deleteTheme, previewTheme,
} from "../controllers/themeController.js";

const router = express.Router();
const admin = [authMiddleware, checkAccess("overall")];

// Public: the live theme's stylesheet text. Short cache; admin saves bust it.
router.get("/active", cacheResponse(60), getActiveTheme);

router.get("/admin", ...admin, listThemes);
router.post("/admin", ...admin, createTheme);
router.post("/admin/preview", ...admin, previewTheme);
router.put("/admin/:id", ...admin, updateTheme);
router.delete("/admin/:id", ...admin, deleteTheme);

export default router;
