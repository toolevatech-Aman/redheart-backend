import express from "express";
import {
    getAllPageContents,
  getContentByPage,
  upsertPageContent,
} from "../controllers/pageContentController.js";

import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

// USER (Public)
router.get("/", getContentByPage);

// ADMIN (Protected)
router.post("/admin", auth, isOverallAdmin, upsertPageContent);
router.get("/admin/all", auth, isOverallAdmin, getAllPageContents);
export default router;
