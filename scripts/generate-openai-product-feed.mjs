// One-off CLI runner — writes a downloadable copy of the OpenAI Commerce
// feed to disk. The actual logic lives in src/utils/openaiProductFeed.js
// (also used by the live GET /api/openai-feed route). Run by hand:
// `node scripts/generate-openai-product-feed.mjs`
import "dotenv/config";
import { writeFileSync } from "fs";
import mongoose from "mongoose";
import { buildOpenAIProductFeed } from "../src/utils/openaiProductFeed.js";

await mongoose.connect(process.env.MONGO_URI);

const { jsonl, rowCount, productCount } = await buildOpenAIProductFeed();
const outFile = "redheart-openai-product-feed.jsonl";
writeFileSync(outFile, jsonl);

console.log(`Wrote ${rowCount} feed rows from ${productCount} products to ${outFile}`);
process.exit(0);
