// One-off: applies coverImage URLs to specific live BlogPost documents from
// a JSON file of { id, coverImage } pairs (uploaded.json, produced by a
// local script that uploaded matching images to Firebase Storage — not
// committed here since it's a one-time batch, not a repeatable pipeline
// step). Pass the path to that file as the first CLI arg.
//
// Run by hand: `node scripts/set-blog-cover-images.mjs uploaded.json`
import "dotenv/config";
import { readFileSync } from "fs";
import mongoose from "mongoose";
import BlogPost from "../src/models/BlogPost.js";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/set-blog-cover-images.mjs <path-to-json>");
  process.exit(1);
}

const updates = JSON.parse(readFileSync(file, "utf-8"));

await mongoose.connect(process.env.MONGO_URI);

let updated = 0, missing = 0;
for (const u of updates) {
  const res = await BlogPost.updateOne({ _id: u.id }, { $set: { coverImage: u.coverImage } });
  if (res.matchedCount === 0) { missing++; console.error(`[missing] ${u.id} — ${u.title}`); }
  else updated++;
}

console.log(`Updated ${updated} posts, ${missing} not found.`);
process.exit(0);
