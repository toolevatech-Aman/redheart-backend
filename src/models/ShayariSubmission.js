import mongoose from "mongoose";

const shayariSubmissionSchema = new mongoose.Schema(
  {
    shayari:  { type: String, required: true },        // the submitted text (shayari or quote)
    category: { type: String, default: "" },
    name:     { type: String, default: "" },
    phone:    { type: String, default: "" },
    type:     { type: String, enum: ["shayari", "quote"], default: "shayari" },
    status:   { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  },
  { timestamps: { createdAt: "submittedAt", updatedAt: true } }
);

export default mongoose.model("ShayariSubmission", shayariSubmissionSchema);
