import mongoose from "mongoose";

const breadcrumbSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    url:   { type: String, required: true },
  },
  { _id: false }
);

const faqSchema = new mongoose.Schema(
  {
    question: { type: String, default: "" },
    answer:   { type: String, default: "" },
  },
  { _id: false }
);

const pinnedProductSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true }, // product _id from products collection
    position:  { type: Number, required: true }, // 1-based display position
    name:      { type: String, default: "" },    // cached name for admin display
    image:     { type: String, default: "" },    // cached image for admin display
  },
  { _id: false }
);

const categoryPageSchema = new mongoose.Schema(
  {
    pageKey:         { type: String, required: true, unique: true }, // e.g. "flowers/roses"
    categorySlug:    { type: String, required: true },               // e.g. "flowers"
    subcategorySlug: { type: String, default: "" },                  // e.g. "roses"
    url:             { type: String, required: true },               // e.g. "/flowers/roses"
    defaultH1:       { type: String, default: "" },                  // original static H1
    h1:              { type: String, default: "" },
    metaTitle:       { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    canonicalUrl:    { type: String, default: "" },
    metaKeyword:     { type: String, default: "" },
    footerContent:   { type: String, default: "" },
    faqs:            { type: [faqSchema],           default: [] },
    breadcrumb:      { type: [breadcrumbSchema],    default: [] },
    pinnedProducts:  { type: [pinnedProductSchema], default: [] },
  },
  { timestamps: true }
);

const CategorySeoPage = mongoose.model("CategorySeoPage", categoryPageSchema);
export default CategorySeoPage;
