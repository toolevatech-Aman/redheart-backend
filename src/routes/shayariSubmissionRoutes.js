import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { checkAccess } from "../middlewares/checkAccess.js";
import {
  getAllSubmissions,
  getPublishedSubmissions,
  createSubmission,
  updateSubmissionStatus,
} from "../controllers/shayariSubmissionController.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

// Static routes before /:id
router.get("/published", getPublishedSubmissions); // public — approved-only feed for live pages
router.get("/",     auth, isOverallAdmin, getAllSubmissions);
router.post("/",    createSubmission); // public — anyone can submit
router.patch("/:id", auth, isOverallAdmin, updateSubmissionStatus);

export default router;
