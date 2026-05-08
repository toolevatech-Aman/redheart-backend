import mongoose from "mongoose";

const ImportJobSchema = new mongoose.Schema(
  {
    category:      { type: String, enum: ["Flowers", "Cakes", "Plants"], required: true },
    uploadedBy:    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    filename:      { type: String },
    mode:          { type: String, enum: ["upload", "edit"], default: "upload" },
    status:        { type: String, enum: ["pending", "confirmed", "processing", "completed", "failed"], default: "pending" },
    totalRows:     { type: Number, default: 0 },
    validCount:    { type: Number, default: 0 },
    invalidCount:  { type: Number, default: 0 },
    processedCount:{ type: Number, default: 0 },
    insertedCount: { type: Number, default: 0 },
    updatedCount:  { type: Number, default: 0 },
    failedCount:   { type: Number, default: 0 },
    // Store the full parsed+validated rows in memory for confirm step
    validRows:     { type: Array, default: [] },
    // Row-level errors for preview + error report download
    invalidRows:   { type: Array, default: [] },
    completedAt:   { type: Date },
    errorMessage:  { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("ImportJob", ImportJobSchema);
