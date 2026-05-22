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

const cityPageSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    cityName:         { type: String, required: true },
    slug:             { type: String, required: true },
    url:              { type: String, required: true },
    metaTitle:        { type: String, default: "" },
    metaDescription:  { type: String, default: "" },
    h1:               { type: String, default: "" },
    canonicalUrl:     { type: String, default: "" },
    metaKeyword:      { type: String, default: "" },
    breadcrumb:       { type: [breadcrumbSchema], default: [] },
    footerContent:    { type: String, default: "" },
    faqs:             { type: [faqSchema], default: [] },
    isActive:         { type: Boolean, default: true },
  },
  { timestamps: true }
);

cityPageSchema.index({ category: 1, slug: 1 }, { unique: true });

const CityPage = mongoose.model("CityPage", cityPageSchema);
export default CityPage;
