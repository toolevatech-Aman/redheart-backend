// Replaces the SEO footer, FAQs, meta title and meta description of the Bhopal / Indore / Jabalpur city pages
// (Cakes, Flowers, Plants) with the reviewed content in payload.json. Everything else on the page (H1, URL,
// canonical, breadcrumb, pinned products) is left alone. Backs up the old values first.
//   node scripts/update-mp-footers.mjs payload.json            dry run (prints what would change)
//   node scripts/update-mp-footers.mjs payload.json --apply
//   node scripts/update-mp-footers.mjs --rollback <backup.json>
import "dotenv/config";
import fs from "node:fs";
import mongoose from "mongoose";
import CityPage from "../src/models/CityPage.js";
import { revalidateTags } from "../src/utils/revalidate.js";

const args = process.argv.slice(2);
await mongoose.connect(process.env.MONGO_URI);
const FIELDS = ["metaTitle", "metaDescription", "footerContent", "faqs"];

if (args[0] === "--rollback") {
  const saved = JSON.parse(fs.readFileSync(args[1], "utf8"));
  for (const s of saved) {
    await CityPage.updateOne({ category: s.category, slug: s.slug }, { $set: Object.fromEntries(FIELDS.map((f) => [f, s[f]])) });
    revalidateTags([`city-${s.category}-${s.slug}`]);
  }
  console.log(`rolled back ${saved.length} pages`);
  await new Promise((r) => setTimeout(r, 4000));
  process.exit(0);
}

const payload = JSON.parse(fs.readFileSync(args[0], "utf8"));
const apply = args.includes("--apply");
const backup = [];
for (const p of payload) {
  const cur = await CityPage.findOne({ category: p.category, slug: p.slug }).lean();
  if (!cur) { console.log("MISSING", p.category, p.slug); continue; }
  backup.push({ category: cur.category, slug: cur.slug, ...Object.fromEntries(FIELDS.map((f) => [f, cur[f]])) });
  console.log(`${p.category}/${p.slug}: footer ${cur.footerContent.length} -> ${p.footerContent.length} chars, faqs ${cur.faqs.length} -> ${p.faqs.length}, title "${p.metaTitle}"`);
}
if (!apply) { console.log("\nDry run: nothing written."); process.exit(0); }

const file = `/home/ubuntu/mp-footers-backup-${Date.now()}.json`;
fs.writeFileSync(file, JSON.stringify(backup));
for (const p of payload) {
  const r = await CityPage.updateOne(
    { category: p.category, slug: p.slug },
    { $set: { metaTitle: p.metaTitle, metaDescription: p.metaDescription, footerContent: p.footerContent, faqs: p.faqs } }
  );
  revalidateTags([`city-${p.category}-${p.slug}`]);
  console.log("updated", p.category, p.slug, r.modifiedCount);
}
console.log("backup:", file);
await new Promise((r) => setTimeout(r, 6000)); // let the revalidate requests finish
process.exit(0);
