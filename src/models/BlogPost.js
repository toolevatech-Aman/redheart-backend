import mongoose from "mongoose";

// City tag is a (category, citySlug) pair since city pages are scoped by
// product category (e.g. Flowers/mumbai vs Cakes/mumbai are different pages).
const cityTagSchema = new mongoose.Schema(
  { category: { type: String, required: true }, citySlug: { type: String, required: true } },
  { _id: false }
);

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug:  { type: String, required: true, unique: true }, // URL: /blog/:categorySlug/:slug

    // Primary category — drives this post's one canonical URL:
    // /blog/:category.slug/:slug. Required, singular by design (a post has
    // exactly one address for SEO), even though it can also be listed under
    // additionalCategories below.
    category:    { type: mongoose.Schema.Types.ObjectId, ref: "BlogCategory", required: true },
    // Extra categories this post should ALSO appear under on the /blog hub —
    // does not change the URL, which always uses the primary category above.
    additionalCategories: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogCategory" }], default: [] },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "BlogSubcategory", default: null }, // hub/filtering only

    coverImage: { type: String, default: "" },
    excerpt:    { type: String, default: "" }, // shown in Related Blog cards + listing
    content:    { type: String, default: "" }, // rich HTML; H1 is the title, body restricted to H2-H4

    authorName: { type: String, required: true },

    status:      { type: String, enum: ["draft", "published"], default: "draft" },
    publishedAt: { type: Date, default: null },

    metaTitle:       { type: String, default: "" },
    metaDescription: { type: String, default: "" },

    // ── Cross-page placement tags — where this post surfaces as a
    // "Related Blog" card elsewhere on the site. Independent of
    // category/subcategory above, which only control this post's own URL
    // and its position in the /blog hub. ──────────────────────────────────
    tags: {
      pages:          { type: [String], default: [] }, // e.g. "home", "surprise-for-her"
      categories:     { type: [String], default: [] }, // product categories: Flowers/Cakes/Plants
      subcategories:  { type: [String], default: [] }, // product subcategory names
      occasions:      { type: [String], default: [] },
      relationships:  { type: [String], default: [] },
      cities:         { type: [cityTagSchema], default: [] },
    },
  },
  { timestamps: true }
);

blogPostSchema.index({ slug: 1 }, { unique: true });
blogPostSchema.index({ status: 1, publishedAt: -1 });
blogPostSchema.index({ "tags.categories": 1 });
blogPostSchema.index({ additionalCategories: 1 });
blogPostSchema.index({ "tags.pages": 1 });
blogPostSchema.index({ "tags.cities.category": 1, "tags.cities.citySlug": 1 });

export default mongoose.model("BlogPost", blogPostSchema);
