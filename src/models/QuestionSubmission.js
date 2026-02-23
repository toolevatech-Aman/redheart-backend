import mongoose from "mongoose";

const answerItemSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: mongoose.Schema.Types.Mixed, required: true }, // string or array for checkbox
}, { _id: false });

const questionSubmissionSchema = new mongoose.Schema(
  {
    userId: { type: String }, // from auth if logged in
    answers: [answerItemSchema],
    amount: { type: Number, default: 49900 }, // 499 INR in paise
    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED"],
      default: "PENDING",
    },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("QuestionSubmission", questionSubmissionSchema);
