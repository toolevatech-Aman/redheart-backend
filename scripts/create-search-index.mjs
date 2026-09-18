// One-off / idempotent: creates a MongoDB text index on Product for ranked
// full-text search (replaces the old plain-substring $regex search, which
// had no relevance ranking at all — a query for "rose" and "rose bouquet
// deluxe premium edition" scored identically as long as both matched).
// Safe to re-run — createIndex is a no-op if an identical index exists.
// Run by hand: `node scripts/create-search-index.mjs`
import "dotenv/config";
import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URI);

const result = await mongoose.connection.collection("products").createIndex(
  {
    name: "text",
    "categorization.category_name": "text",
    "categorization.subcategory_name": "text",
    "categorization.occasion_tags": "text",
    "categorization.festival_tags": "text",
    description: "text",
    short_summary: "text",
  },
  {
    name: "product_search_text",
    weights: {
      name: 10,
      "categorization.category_name": 6,
      "categorization.subcategory_name": 6,
      "categorization.occasion_tags": 5,
      "categorization.festival_tags": 5,
      short_summary: 3,
      description: 1,
    },
    default_language: "english",
  }
);

console.log("Index ready:", result);
process.exit(0);
