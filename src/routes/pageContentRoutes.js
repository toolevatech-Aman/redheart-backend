import express from "express";
import {
    getAllPageContents,
  getContentByPage,
  upsertPageContent,
} from "../controllers/pageContentController.js";

import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// USER (Public)
router.get("/", getContentByPage);

// ADMIN (Protected)
router.post("/admin", auth, isAdmin, upsertPageContent);
router.get("/admin/all", auth, isAdmin, getAllPageContents);
export default router;
