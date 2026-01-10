import mongoose from "mongoose";

const pageContentSchema = new mongoose.Schema(
  {
    page: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    htmlCode: {
      type: String,
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const PageContent = mongoose.model("PageContent", pageContentSchema);

export default PageContent;
