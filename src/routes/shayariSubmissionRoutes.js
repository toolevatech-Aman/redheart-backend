import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import {
  getAllSubmissions,
  getPublishedSubmissions,
  createSubmission,
  updateSubmissionStatus,
} from "../controllers/shayariSubmissionController.js";

const router = express.Router();

// Static routes before /:id
router.get("/published", getPublishedSubmissions); // public — approved-only feed for live pages
router.get("/",     auth, isAdmin, getAllSubmissions);
router.post("/",    createSubmission); // public — anyone can submit
router.patch("/:id", auth, isAdmin, updateSubmissionStatus);

export default router;
