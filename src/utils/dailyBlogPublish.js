// Publishes the next 3 draft posts per product vertical (9/day total) —
// the automated half of the blog pipeline seeded by
// scripts/import-blog-source.mjs. Each vertical has a fixed author, so this
// also fixes which author gets which 3 posts each day:
//   Flowers → Trishna, Cakes → Pallavi, Plants → Maya
// Drains oldest-draft-first per vertical (see the import script's file
// ordering — topic guides before city guides), so posts go out in a
// deliberate, deterministic sequence rather than randomly.
import BlogPost from "../models/BlogPost.js";
import { BlogCategory } from "../models/BlogCategory.js";
import { invalidateCache } from "../middlewares/cacheMiddleware.js";

const VERTICALS = [
  { categorySlug: "flower", author: "Trishna" },
  { categorySlug: "cakes",  author: "Pallavi" },
  { categorySlug: "plants", author: "Maya" },
];
const PER_VERTICAL_PER_DAY = 3;

export async function runDailyBlogPublish() {
  const results = [];

  for (const v of VERTICALS) {
    const cat = await BlogCategory.findOne({ slug: v.categorySlug }).lean();
    if (!cat) { results.push({ vertical: v.categorySlug, published: 0, note: "category not found" }); continue; }

    const drafts = await BlogPost.find({ category: cat._id, status: "draft" })
      .sort({ createdAt: 1 })
      .limit(PER_VERTICAL_PER_DAY);

    for (const post of drafts) {
      post.status = "published";
      post.publishedAt = new Date();
      // authorName is already set correctly at import time to match the
      // vertical, but set it again here in case a post was ever manually
      // reassigned to a different category post-import.
      post.authorName = v.author;
      await post.save();
    }

    const remaining = await BlogPost.countDocuments({ category: cat._id, status: "draft" });
    results.push({ vertical: v.categorySlug, author: v.author, published: drafts.length, remainingInQueue: remaining });
  }

  invalidateCache("/api/blogs");
  return { publishedTotal: results.reduce((s, r) => s + r.published, 0), results };
}
