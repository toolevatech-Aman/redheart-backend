import express from "express";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import {
  getAllSubmissions,
  createSubmission,
  updateSubmissionStatus,
} from "../controllers/shayariSubmissionController.js";

const router = express.Router();

router.get("/",     auth, isAdmin, getAllSubmissions);
router.post("/",    createSubmission); // public — anyone can submit
router.patch("/:id", auth, isAdmin, updateSubmissionStatus);

export default router;
