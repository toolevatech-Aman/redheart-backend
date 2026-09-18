// One-off: the "Flowers" blog category was originally created (before this
// pipeline existed) as name:"flower" (lowercase singular) — inconsistent
// with "Cakes"/"Plants". Slug stays "flower" (preserves existing /blog/flower/...
// URLs); only the display name changes.
import "dotenv/config";
import mongoose from "mongoose";
import { BlogCategory } from "../src/models/BlogCategory.js";

await mongoose.connect(process.env.MONGO_URI);
const result = await BlogCategory.updateOne({ slug: "flower" }, { $set: { name: "Flowers" } });
console.log("matched:", result.matchedCount, "modified:", result.modifiedCount);
process.exit(0);
