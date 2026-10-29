import "dotenv/config";
import mongoose from "mongoose";
import CityPage from "../src/models/CityPage.js";
await mongoose.connect(process.env.MONGO_URI);
const hits = await CityPage.find({ metaTitle: /redheart/i }).select("category slug metaTitle").lean();
hits.forEach((h) => console.log(`${h.category}|${h.slug}|${h.metaTitle}`));
process.exit(0);
