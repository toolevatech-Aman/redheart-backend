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
import { isAdmin } from "../middlewares/isAdmin.js";
import { importProductsFromCSV } from "../controllers/productController.js";
import { upload } from "../middlewares/upload.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

// Public APIs
router.get("/", getProducts);                        // Search/filter products
router.get("/all-slugs", getAllProductSlugs);        // Lightweight list for sitemap
router.post("/by-ids", getProductsByIds);            // Fetch multiple products by _id array
router.get("/for-page", getProductsForPage);        // Fetch all products for a page (admin sequencer)
router.get("/slug/:slug", getProductBySlug);         // Full product details by slug (SEO)
router.get("/:product_id", getProductById);          // Full product details by product_id
router.post("/:product_id/review", updateReview);    // Add review

// Admin APIs
router.post("/", auth, isAdmin, addProduct);
router.put("/:product_id", auth, isAdmin, editProduct);
router.patch("/:product_id/delivery-type", auth, isAdmin, updateDeliveryType);
router.delete("/:product_id", auth, isAdmin, deleteProduct);
router.post(
  "/import",
  authMiddleware,      // Must be logged in
  isAdmin,             // Must be admin
  upload.single("file"),
  importProductsFromCSV
);

router.post(
  "/update",             
  authMiddleware,         
  isAdmin,                
  upload.single("file"),
  updateProductsFromCSV   
);

export default router;
