import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { cacheResponse } from "../middlewares/cacheMiddleware.js";
import {
  listBlogCategories, createBlogCategory, updateBlogCategory, deleteBlogCategory,
  listBlogSubcategories, createBlogSubcategory, updateBlogSubcategory, deleteBlogSubcategory,
} from "../controllers/blogCategoryController.js";
import {
  listBlogPosts, getBlogPostBySlug, listPublishedPosts,
  createBlogPost, updateBlogPost, deleteBlogPost, getBlogsForPage,
} from "../controllers/blogPostController.js";

const router = express.Router();
const auth = [authMiddleware, isAdmin];

// ── Categories (admin) ──────────────────────────────────────────────────────
router.get("/categories",             cacheResponse(3600), listBlogCategories);
router.post("/categories",            ...auth, createBlogCategory);
router.put("/categories/:id",         ...auth, updateBlogCategory);
router.delete("/categories/:id",      ...auth, deleteBlogCategory);

// ── Subcategories (admin) ───────────────────────────────────────────────────
router.get("/subcategories",          cacheResponse(3600), listBlogSubcategories);
router.post("/subcategories",         ...auth, createBlogSubcategory);
router.put("/subcategories/:id",      ...auth, updateBlogSubcategory);
router.delete("/subcategories/:id",   ...auth, deleteBlogSubcategory);

// ── Posts — public reads (static paths BEFORE the /:categorySlug/:slug
// catch-all below, or Express would match them as a category+post pair) ────
router.get("/for-page",               cacheResponse(1800), getBlogsForPage); // Related Blog strip
router.get("/admin/all",              ...auth, listBlogPosts);
router.get("/",                       cacheResponse(1800), listPublishedPosts); // /blog hub + /blog/:category
router.post("/",                      ...auth, createBlogPost);
router.put("/:id",                    ...auth, updateBlogPost);
router.delete("/:id",                 ...auth, deleteBlogPost);
router.get("/:categorySlug/:slug",    cacheResponse(1800), getBlogPostBySlug);

export default router;
