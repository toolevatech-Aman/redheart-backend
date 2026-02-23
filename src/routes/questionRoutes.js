import express from "express";
import {
  addQuestions,
  getQuestions,
  getSubmissions,
  deleteQuestion,
  submitAnswers,
  verifyQuestionPayment,
} from "../controllers/questionController.js";
import auth from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = express.Router();

// Add questions (admin) - body: [{ question, type }]
router.post("/", auth, isAdmin, addQuestions);
// Delete one question (admin)
router.delete("/:id", auth, isAdmin, deleteQuestion);
// Get all questions (public)
router.get("/", getQuestions);

// Get all submitted answers (admin)
router.get("/submissions", auth, isAdmin, getSubmissions);
// Submit answers and create payment order for 499 (no auth)
// body: [{ question, answer }]
router.post("/submit", submitAnswers);

// Verify payment after Razorpay success (no auth)
router.post("/verify-payment", verifyQuestionPayment);

export default router;
