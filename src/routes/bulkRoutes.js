// bulkRoutes.js
import express from "express";
import { upload } from "../middlewares/upload.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import {
  uploadAndValidate,
  confirmImport,
  getImportHistory,
  downloadErrorReport,
  downloadTemplate,
} from "../controllers/bulkUploadController.js";
import {
  exportProducts,
  exportForEdit,
  getCategoryStats,
} from "../controllers/exportController.js";

const router = express.Router();
const auth   = [authMiddleware, isAdmin];

// ── Templates ──────────────────────────────────────────────────────────────
// GET /api/bulk/template/:category   → download blank upload template
router.get("/template/:category", downloadTemplate);

// ── Upload ─────────────────────────────────────────────────────────────────
// POST /api/bulk/upload/:category    → parse + validate → return preview
router.post("/upload/:category", ...auth, upload.single("file"), uploadAndValidate);

// POST /api/bulk/confirm/:jobId      → commit valid rows to DB
router.post("/confirm/:jobId",   ...auth, confirmImport);

// ── Import history & error report ─────────────────────────────────────────
// GET  /api/bulk/history/:category   → paginated import history
router.get("/history/:category", ...auth, getImportHistory);

// GET  /api/bulk/history/all         → all categories history
router.get("/history",           ...auth, getImportHistory);

// GET  /api/bulk/errors/:jobId       → download error XLSX
router.get("/errors/:jobId",     ...auth, downloadErrorReport);

// ── Export ─────────────────────────────────────────────────────────────────
// GET  /api/bulk/export/:category    → export products as XLSX or CSV
// Query params: format, subcategory_name, type, is_active, is_featured, search
router.get("/export/:category",  ...auth, exportProducts);

// GET  /api/bulk/edit-export/:category → same but for edit workflow
router.get("/edit-export/:category", ...auth, exportForEdit);

// GET  /api/bulk/stats               → product counts per category
router.get("/stats",             ...auth, getCategoryStats);

export default router;
