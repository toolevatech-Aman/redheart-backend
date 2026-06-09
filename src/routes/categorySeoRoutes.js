import express from "express";
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
router.get("/all-slugs",  getAllCategorySeoPaths);  // Lightweight list for sitemap
router.post("/seed",      seedPages);
router.post("/upsert",    upsertPage);              // Always upserts all SEO fields
router.put("/:id",        updatePage);
router.get(/^\/page\/(.+)$/, getPageByKey);  // /category-seo/page/flowers/roses

export default router;
