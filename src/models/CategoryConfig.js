import mongoose from "mongoose";

const columnSchema = new mongoose.Schema(
  {
    key:           { type: String, required: true },
    label:         { type: String, required: true },
    mandatory:     { type: Boolean, default: false },
    type:          { type: String, enum: ["string", "number", "boolean", "array", "enum", "url"], default: "string" },
    allowedValues: { type: [String], default: [] },
    separator:     { type: String, default: "|" },
    min:           { type: Number },
    maxLength:     { type: Number },
    pattern:       { type: String },
    example:       { type: String },
    note:          { type: String },
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

const cityFaqSchema = new mongoose.Schema(
  {
    question_template: { type: String, default: "" },
    answer_template:   { type: String, default: "" },
  },
  { _id: false }
);

const categoryPageSeoSchema = new mongoose.Schema(
  {
    meta_title:       { type: String, default: "" },
    meta_description: { type: String, default: "" },
    h1:               { type: String, default: "" },
    canonical_url:    { type: String, default: "" },
    meta_keywords:    { type: String, default: "" },
    footer_content:   { type: String, default: "" },
    og_image:         { type: String, default: "" },
  },
  { _id: false }
);

const subcategoryPageSeoSchema = new mongoose.Schema(
  {
    title_template:       { type: String, default: "" },
    description_template: { type: String, default: "" },
    h1_template:          { type: String, default: "" },
    keywords_template:    { type: String, default: "" },
  },
  { _id: false }
);

const cityPageSeoSchema = new mongoose.Schema(
  {
    title_template:             { type: String, default: "" },
    description_template:       { type: String, default: "" },
    h1_template:                { type: String, default: "" },
    keywords_template:          { type: String, default: "" },
    breadcrumb_last_template:   { type: String, default: "" },
    footer_content_template:    { type: String, default: "" },
  },
  { _id: false }
);

const seoSchema = new mongoose.Schema(
  {
    service_label:     { type: String, default: "" },
    biz_type:          { type: String, default: "Store" },
    category_page:     { type: categoryPageSeoSchema, default: () => ({}) },
    subcategory_page:  { type: subcategoryPageSeoSchema, default: () => ({}) },
    city_page:         { type: cityPageSeoSchema, default: () => ({}) },
    category_faqs:     { type: [faqSchema], default: [] },
    city_faqs:         { type: [cityFaqSchema], default: [] },
  },
  { _id: false }
);

const schemaConfigSchema = new mongoose.Schema(
  {
    category_page_type: { type: String, default: "CollectionPage" },
    city_page_type:     { type: String, default: "LocalBusiness" },
  },
  { _id: false }
);

const categoryConfigSchema = new mongoose.Schema(
  {
    name:         { type: String, required: true, unique: true },
    slug:         { type: String, required: true, unique: true },
    short_slug:   { type: String },
    sku_suffix:   { type: String, required: true },
    accent_color: { type: String, default: "#e11d48" },
    is_active:    { type: Boolean, default: true },

    subcategories: { type: [String], default: [] },

    columns: { type: [columnSchema], default: [] },

    seo:    { type: seoSchema, default: () => ({}) },
    schema: { type: schemaConfigSchema, default: () => ({}) },
  },
  { timestamps: true }
);

const CategoryConfig = mongoose.model("CategoryConfig", categoryConfigSchema);
export default CategoryConfig;
