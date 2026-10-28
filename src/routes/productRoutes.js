// routes/productRoutes.js
import express from "express";
import {
  getProducts,
  getProductById,
  getProductBySlug,
  getAllProductSlugs,
  getProductsByIds,
  getProductsForPage,
  updateReview,
  addProduct,
  editProduct,
  deleteProduct,
  updateDeliveryType,
  updateProductsFromCSV
} from "../controllers/productController.js";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import { importProductsFromCSV } from "../controllers/productController.js";
import { upload } from "../middlewares/upload.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { adminListProducts, adminGetProduct, adminUpdateProduct } from "../controllers/productAdminController.js";
import { cacheResponse } from "../middlewares/cacheMiddleware.js";
const router = express.Router();
const isCategoryAdmin = checkAccess("category");

// Public APIs
router.get("/", cacheResponse(120), getProducts);     // Search/filter products (2min cache — matches search-result freshness expectations)
router.get("/all-slugs", cacheResponse(3600), getAllProductSlugs);        // Lightweight list for sitemap
router.post("/by-ids", getProductsByIds);            // Fetch multiple products by _id array
router.get("/for-page", getProductsForPage);        // Fetch all products for a page (admin sequencer)
router.get("/slug/:slug", cacheResponse(3600), getProductBySlug);         // Full product details by slug (SEO)
// Product Hub (admin): uncached, includes inactive products. Registered before "/:product_id" on purpose.
router.get("/admin/list", auth, isCategoryAdmin, adminListProducts);
router.get("/admin/:product_id", auth, isCategoryAdmin, adminGetProduct);
router.patch("/admin/:product_id", auth, isCategoryAdmin, adminUpdateProduct);

router.get("/:product_id", cacheResponse(3600), getProductById);          // Full product details by product_id
router.post("/:product_id/review", auth, updateReview); // Add/edit review — must be logged in

// Admin APIs
router.post("/", auth, isCategoryAdmin, addProduct);
router.put("/:product_id", auth, isCategoryAdmin, editProduct);
router.patch("/:product_id/delivery-type", auth, isCategoryAdmin, updateDeliveryType);
router.delete("/:product_id", auth, isCategoryAdmin, deleteProduct);
router.post(
  "/import",
  authMiddleware,      // Must be logged in
  isCategoryAdmin,
  upload.single("file"),
  importProductsFromCSV
);

router.post(
  "/update",
  authMiddleware,
  isCategoryAdmin,
  upload.single("file"),
  updateProductsFromCSV
);

export default router;
