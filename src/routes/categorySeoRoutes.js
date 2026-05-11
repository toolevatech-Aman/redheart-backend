import express from "express";
import {
  getAllPages,
  getPageByKey,
  updatePage,
  seedPages,
} from "../controllers/categorySeoController.js";

const router = express.Router();

router.get("/",           getAllPages);
router.post("/seed",      seedPages);
router.put("/:id",        updatePage);
router.get("/page/*",     getPageByKey);  // /category-seo/page/flowers/roses

export default router;
