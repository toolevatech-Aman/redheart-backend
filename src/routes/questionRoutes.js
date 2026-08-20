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
import { checkAccess } from "../middlewares/checkAccess.js";

const router = express.Router();
const isOverallAdmin = checkAccess("overall");

// Add questions (admin) - body: [{ question, type }]
router.post("/", auth, isOverallAdmin, addQuestions);
// Delete one question (admin)
router.delete("/:id", auth, isOverallAdmin, deleteQuestion);
// Get all questions (public)
router.get("/", getQuestions);

// Get all submitted answers (admin)
router.get("/submissions", auth, isOverallAdmin, getSubmissions);
// Submit answers and create payment order for 499 (no auth)
// body: [{ question, answer }]
router.post("/submit", submitAnswers);

// Verify payment after Razorpay success (no auth)
router.post("/verify-payment", verifyQuestionPayment);

export default router;
