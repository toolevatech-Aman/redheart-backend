import express from "express";
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

router.get("/",           getAllPages);
router.get("/all-slugs",  cacheResponse(3600), getAllCategorySeoPaths);  // Lightweight list for sitemap
router.post("/seed",      seedPages);
router.post("/upsert",    upsertPage);              // Always upserts all SEO fields
router.put("/:id",        updatePage);
router.get(/^\/page\/(.+)$/, cacheResponse(3600), getPageByKey);  // /category-seo/page/flowers/roses

export default router;
