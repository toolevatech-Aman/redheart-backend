// One-time (but safely re-runnable) seed: reads every .md file under
// content/blog-source/{flowers,cakes,plants}/ and inserts it as a draft
// BlogPost — ready for the daily publish job (src/utils/dailyBlogPublish.js)
// to release 3 per vertical per day. Skips any file whose slug already
// exists, so re-running after adding new source files only imports the new
// ones.
//
// Run by hand: `node scripts/import-blog-source.mjs`
import "dotenv/config";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import mongoose from "mongoose";
import BlogPost from "../src/models/BlogPost.js";
import { BlogCategory, BlogSubcategory } from "../src/models/BlogCategory.js";
import {
  markdownToBlogHtml, extractExcerpt, extractTitle, makeSlug,
  classifySubcategory, extractOccasionTag, extractRelationshipTag, extractCitySlug,
} from "../src/utils/blogImportHelpers.js";

const SOURCE_DIR = new URL("../content/blog-source", import.meta.url).pathname;

const VERTICALS = [
  { dir: "flowers", categoryName: "Flowers", categorySlug: "flower", author: "Trishna" },
  { dir: "cakes",   categoryName: "Cakes",   categorySlug: "cakes",  author: "Pallavi" },
  { dir: "plants",  categoryName: "Plants",  categorySlug: "plants", author: "Maya" },
];

const SUBCATS = [
  { slug: "occasion-guides",      label: "Occasion Guides" },
  { slug: "recipient-guides",     label: "Recipient Guides" },
  { slug: "comparisons",          label: "Comparisons" },
  { slug: "variety-deep-dives",   label: "Variety Deep-Dives" },
  { slug: "care-maintenance",     label: "Care & Maintenance" },
  { slug: "logistics-pricing",    label: "Delivery & Pricing" },
  { slug: "trust-education",      label: "Facts, History & Myths" },
  { slug: "etiquette-corporate",  label: "Etiquette & Corporate Gifting" },
  { slug: "city-guides",          label: "City Guides" },
];

// Files sorted numerically by their leading "<n>-" prefix, topic guides
// before city-guides, so insertion order (and therefore createdAt order,
// which the daily publish job drains oldest-first) puts the higher-value
// unique topic content out before the more template-driven city guides.
function listMdFilesSorted(dir) {
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort((a, b) => (parseInt(a) || 0) - (parseInt(b) || 0));
}

await mongoose.connect(process.env.MONGO_URI);

// ─── Ensure categories + subcategories exist ───────────────────────────────
const categoryIds = {};
for (const v of VERTICALS) {
  let cat = await BlogCategory.findOne({ slug: v.categorySlug });
  if (!cat) cat = await BlogCategory.create({ name: v.categoryName, slug: v.categorySlug });
  categoryIds[v.dir] = cat._id;
}

const subcategoryIds = {}; // `${dir}:${subSlug}` -> _id
for (const v of VERTICALS) {
  for (const s of SUBCATS) {
    let sub = await BlogSubcategory.findOne({ category: categoryIds[v.dir], slug: s.slug });
    if (!sub) sub = await BlogSubcategory.create({ category: categoryIds[v.dir], name: s.label, slug: s.slug });
    subcategoryIds[`${v.dir}:${s.slug}`] = sub._id;
  }
}

// ─── Import ─────────────────────────────────────────────────────────────────
let created = 0, skipped = 0, failed = 0;

for (const v of VERTICALS) {
  const topDir = path.join(SOURCE_DIR, v.dir);
  const cityDir = path.join(topDir, "city-guides");

  const files = [
    ...listMdFilesSorted(topDir).map((f) => ({ file: f, full: path.join(topDir, f), isCity: false })),
    ...listMdFilesSorted(cityDir).map((f) => ({ file: f, full: path.join(cityDir, f), isCity: true })),
  ];

  for (const { file, full, isCity } of files) {
    const raw = readFileSync(full, "utf-8");
    const title = extractTitle(raw);
    if (!title) { failed++; console.error(`[skip:no-title] ${v.dir}/${file}`); continue; }

    const slug = makeSlug(title, file.replace(/\.md$/, ""));
    if (await BlogPost.exists({ slug })) { skipped++; continue; }

    const { slug: subSlug } = classifySubcategory(file, isCity);
    const occasion = extractOccasionTag(file);
    const relationship = extractRelationshipTag(file);
    const citySlug = isCity ? extractCitySlug(file) : null;

    const doc = {
      title,
      slug,
      category: categoryIds[v.dir],
      subcategory: subcategoryIds[`${v.dir}:${subSlug}`],
      coverImage: "",
      excerpt: extractExcerpt(raw),
      content: markdownToBlogHtml(raw),
      authorName: v.author,
      status: "draft",
      publishedAt: null,
      metaTitle: title,
      metaDescription: extractExcerpt(raw, 155),
      tags: {
        pages: [],
        categories: [v.categoryName],
        subcategories: [],
        occasions: occasion ? [occasion] : [],
        relationships: relationship ? [relationship] : [],
        cities: citySlug ? [{ category: v.categoryName, citySlug }] : [],
      },
    };

    try {
      await BlogPost.create(doc);
      created++;
    } catch (err) {
      failed++;
      console.error(`[fail] ${v.dir}/${file}: ${err.message}`);
    }
  }
}

console.log(`Imported ${created} new drafts, skipped ${skipped} existing, ${failed} failed.`);
process.exit(0);
