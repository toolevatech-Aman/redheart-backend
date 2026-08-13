import mongoose from "mongoose";

const blogCategorySchema = new mongoose.Schema(
  {
    name:        { type: String, required: true, unique: true },
    slug:        { type: String, required: true, unique: true }, // used in /blog/:categorySlug/:postSlug
    description: { type: String, default: "" },
    sortOrder:   { type: Number, default: 0 },
  },
  { timestamps: true }
);

const blogSubcategorySchema = new mongoose.Schema(
  {
    category:    { type: mongoose.Schema.Types.ObjectId, ref: "BlogCategory", required: true },
    name:        { type: String, required: true },
    slug:        { type: String, required: true }, // hub/filtering only — not part of the post URL
    sortOrder:   { type: Number, default: 0 },
  },
  { timestamps: true }
);
blogSubcategorySchema.index({ category: 1, slug: 1 }, { unique: true });

export const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);
export const BlogSubcategory = mongoose.model("BlogSubcategory", blogSubcategorySchema);
