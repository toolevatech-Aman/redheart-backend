import "dotenv/config";
import mongoose from "mongoose";
import CityPage from "../src/models/CityPage.js";
await mongoose.connect(process.env.MONGO_URI);
for (const category of ["Cakes", "Flowers", "Plants"]) for (const slug of ["bhopal", "indore", "jabalpur"]) {
  const d = await CityPage.findOne({ category, slug });
  const t = d.metaTitle.replace(/ \| RedHeart$/, "");
  await CityPage.updateOne({ category, slug }, { $set: { metaTitle: t } });
  console.log(category, slug, `"${t}"`, t.length + 11);
}
process.exit(0);
