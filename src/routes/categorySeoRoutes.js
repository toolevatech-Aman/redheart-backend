import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { cacheResponse } from "../middlewares/cacheMiddleware.js";
import {
  getAllPages,
  getAllCategorySeoPaths,
  getPageByKey,
  updatePage,
  upsertPage,
  seedPages,
} from "../controllers/categorySeoController.js";

const router = express.Router();
const auth = [authMiddleware, checkAccess("seo")];

router.get("/",           getAllPages);
router.get("/all-slugs",  cacheResponse(3600), getAllCategorySeoPaths);  // Lightweight list for sitemap
router.post("/seed",      ...auth, seedPages);
router.post("/upsert",    ...auth, upsertPage);              // Always upserts all SEO fields
router.put("/:id",        ...auth, updatePage);
router.get(/^\/page\/(.+)$/, cacheResponse(3600), getPageByKey);  // /category-seo/page/flowers/roses

export default router;
