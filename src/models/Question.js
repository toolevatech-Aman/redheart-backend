import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: ["Checkbox", "Radio", "Input", "Textarea", "Dropdown"],
      default: "Input",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Question", questionSchema);
