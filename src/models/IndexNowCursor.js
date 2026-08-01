import mongoose from "mongoose";

// Singleton doc — tracks rotation position through the sitemap for daily IndexNow batches.
const indexNowCursorSchema = new mongoose.Schema({
  position: { type: Number, default: 0 },
  lastRunAt: Date,
  lastBatchCount: Number,
});

const IndexNowCursor = mongoose.model("IndexNowCursor", indexNowCursorSchema);

export default IndexNowCursor;
