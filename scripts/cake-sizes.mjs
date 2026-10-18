// Adds the 1 / 2 / 3 / 5 kg size options to every cake (see src/utils/cakeSizes.js
// for the price rule). The product's own price stays the half-kg price.
//
//   node scripts/cake-sizes.mjs                     dry run: prints a report, writes nothing
//   node scripts/cake-sizes.mjs --apply             backs up, then writes
//   node scripts/cake-sizes.mjs --rollback <file>   restores the variations saved by --apply
//
// Cakes that already have any variations are skipped and listed.
import "dotenv/config";
import fs from "node:fs";
import mongoose from "mongoose";
import Product from "../src/models/Product.js";
import { buildSizeVariations, CAKE_CATEGORY, CAKE_SIZES } from "../src/utils/cakeSizes.js";

const args = process.argv.slice(2);
const apply = args.includes("--apply");
const rollbackIdx = args.indexOf("--rollback");

await mongoose.connect(process.env.MONGO_URI);

if (rollbackIdx > -1) {
  const file = args[rollbackIdx + 1];
  const saved = JSON.parse(fs.readFileSync(file, "utf8"));
  const ops = saved.map((s) => ({ updateOne: { filter: { _id: s._id }, update: { $set: { variations: s.variations } } } }));
  const r = await Product.bulkWrite(ops, { timestamps: false });
  console.log(`rolled back ${r.modifiedCount} of ${saved.length} cakes from ${file}`);
  process.exit(0);
}

const cakes = await Product.find({ "categorization.category_name": CAKE_CATEGORY }).lean();
const todo = [], skipped = [], flags = [];
for (const c of cakes) {
  const r = buildSizeVariations(c);
  if (r.skip) { skipped.push({ name: c.name, sku: c.sku, why: r.skip }); continue; }
  todo.push({ c, variations: r.variations });
  if (/\b(1|1\.5|2|3|5)\s*-?\s*(kg|kilo)/i.test(c.name || "")) flags.push({ name: c.name, sku: c.sku, price: c.selling_price, why: "name mentions a weight" });
  if (c.selling_price > 2000) flags.push({ name: c.name, sku: c.sku, price: c.selling_price, why: "premium (>₹2000): 5 kg would be ₹" + r.variations[3].selling_price });
  if (c.availability?.is_active === false) flags.push({ name: c.name, sku: c.sku, price: c.selling_price, why: "inactive" });
}

const fmt = (n) => String(n).padStart(6);
console.log(`cakes: ${cakes.length}   to update: ${todo.length}   skipped: ${skipped.length}`);
console.log(`\nSample (every ~${Math.max(1, Math.floor(todo.length / 12))}th cake):`);
console.log("  ½ Kg    1 Kg    2 Kg    3 Kg    5 Kg   name");
todo.filter((_, i) => i % Math.max(1, Math.floor(todo.length / 12)) === 0).forEach(({ c, variations }) =>
  console.log(`${fmt(c.selling_price)}${variations.map((v) => fmt(v.selling_price)).join("")}  ${c.name}`));
const prices = todo.map((t) => t.c.selling_price).sort((a, b) => a - b);
console.log(`\nhalf-kg price range: ₹${prices[0]} - ₹${prices.at(-1)}`);
if (skipped.length) { console.log("\nSkipped:"); skipped.forEach((s) => console.log(`  ${s.sku || ""} ${s.name} — ${s.why}`)); }
if (flags.length) { console.log("\nLook at these:"); flags.forEach((f) => console.log(`  ${f.sku || ""} ₹${f.price} ${f.name} — ${f.why}`)); }

fs.writeFileSync("/tmp/cake-sizes-report.json", JSON.stringify(todo.map(({ c, variations }) => ({
  sku: c.sku, name: c.name, half: c.selling_price, sizes: Object.fromEntries(variations.map((v) => [v.variant_name, v.selling_price])),
})), null, 1));

if (!apply) { console.log("\nDry run: nothing written. Full list in /tmp/cake-sizes-report.json. Re-run with --apply."); process.exit(0); }

const backupFile = `/tmp/cake-sizes-backup-${Date.now()}.json`;
fs.writeFileSync(backupFile, JSON.stringify(todo.map(({ c }) => ({ _id: c._id, variations: c.variations || [] }))));
const ops = todo.map(({ c, variations }) => ({ updateOne: { filter: { _id: c._id, "variations.0": { $exists: false } }, update: { $set: { variations } } } }));
const res = await Product.bulkWrite(ops, { timestamps: false });
console.log(`\nbackup: ${backupFile}\nupdated ${res.modifiedCount} of ${todo.length} cakes (${CAKE_SIZES.length} sizes each)`);
process.exit(0);
