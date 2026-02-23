import Question from "../models/Question.js";
import QuestionSubmission from "../models/QuestionSubmission.js";
import ConfidentialKey from "../models/confidentialKeys.js";
import { getRazorpayInstance } from "../services/razorpay.js";
import { createHmac } from "crypto";

const QUESTION_AMOUNT_PAISE = 49900; // 499 INR

// POST - Add questions (array of { question, type })
export const addQuestions = async (req, res) => {
  try {
    const items = req.body;
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Body must be an array of { question, type }",
      });
    }
    const validTypes = ["Checkbox", "Radio", "Input", "Textarea", "Dropdown"];
    const toInsert = items
      .map((item) => {
        if (!item.question || !item.type) return null;
        if (!validTypes.includes(item.type)) return null;
        return { question: item.question.trim(), type: item.type };
      })
      .filter(Boolean);
    if (toInsert.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Valid items must have question and type (Checkbox, Radio, Input, Textarea, Dropdown)",
      });
    }
    const created = await Question.insertMany(toInsert);
    res.status(201).json({
      success: true,
      message: "Questions added",
      data: created,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// GET - Fetch all questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().sort({ createdAt: 1 });
    res.status(200).json({ success: true, data: questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// GET - Fetch all question submissions (admin)
export const getSubmissions = async (req, res) => {
  try {
    const submissions = await QuestionSubmission.find()
      .sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: submissions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// DELETE - Delete one question by id
export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Question.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Question not found" });
    }
    res.status(200).json({ success: true, message: "Question deleted", data: deleted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// POST - Submit answers (array of { question, answer }) -> create payment order for 499
export const submitAnswers = async (req, res) => {
  try {
    const answers = req.body;
    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Body must be an array of { question, answer }",
      });
    }
    const normalized = answers
      .map((item) => {
        if (item.question == null || item.answer === undefined) return null;
        return {
          question: typeof item.question === "string" ? item.question.trim() : String(item.question),
          answer: item.answer,
        };
      })
      .filter(Boolean);
    if (normalized.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Each item must have question and answer",
      });
    }

    const userId = req.user?.userId || null;
    const submission = new QuestionSubmission({
      userId,
      answers: normalized,
      amount: QUESTION_AMOUNT_PAISE,
      paymentStatus: "PENDING",
    });

    const razorpay = await getRazorpayInstance();
    const razorpayOrder = await razorpay.orders.create({
      amount: QUESTION_AMOUNT_PAISE,
      currency: "INR",
      receipt: `qsub_${Date.now()}`,
    });

    submission.razorpayOrderId = razorpayOrder.id;
    await submission.save();

    const keyDoc = await ConfidentialKey.findOne({ key: "RAZORPAY_KEY_ID" });
    const key_id = keyDoc?.value || null;

    res.status(201).json({
      success: true,
      message: "Answers submitted. Complete payment to confirm.",
      data: {
        submissionId: submission._id,
        razorpayOrderId: razorpayOrder.id,
        amount: QUESTION_AMOUNT_PAISE,
        amountINR: 499,
        key_id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// POST - Verify payment and update submission to PAID
export const verifyQuestionPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Missing Razorpay payment details",
      });
    }

    const razorpay = await getRazorpayInstance();
    const keySecret = razorpay.key_secret;
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = createHmac("sha256", keySecret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    const submission = await QuestionSubmission.findOne({
      razorpayOrderId: razorpay_order_id,
    });

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: "Submission not found",
      });
    }

    if (submission.paymentStatus === "PAID") {
      return res.json({
        success: true,
        message: "Payment already verified",
        data: { submissionId: submission._id, paymentStatus: "PAID" },
      });
    }

    submission.paymentStatus = "PAID";
    submission.razorpayPaymentId = razorpay_payment_id;
    await submission.save();

    res.json({
      success: true,
      message: "Payment verified successfully",
      data: {
        submissionId: submission._id,
        paymentStatus: submission.paymentStatus,
      },
    });
  } catch (error) {
    console.error("Verify question payment error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while verifying payment",
      error: error.message,
    });
  }
};
