import BlogPost from "../models/BlogPost.js";
import { invalidateCache } from "../middlewares/cacheMiddleware.js";

// ── Admin: list all posts (any status), basic filtering ────────────────────
export async function listBlogPosts(req, res) {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.category) filter.category = req.query.category;
    const posts = await BlogPost.find(filter)
      .populate("category", "name slug")
      .populate("additionalCategories", "name slug")
      .populate("subcategory", "name slug")
      .sort({ createdAt: -1 })
      .lean();
    return res.json(posts);
  } catch (err) {
    console.error("listBlogPosts error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

// ── Admin: single post by ID (for the edit form) ────────────────────────────
export async function getBlogPostById(req, res) {
  try {
    const post = await BlogPost.findById(req.params.id)
      .populate("category", "name slug")
      .populate("additionalCategories", "name slug")
      .populate("subcategory", "name slug");
    if (!post) return res.status(404).json({ message: "Post not found" });
    return res.json(post);
  } catch (err) {
    console.error("getBlogPostById error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

// ── Public: single post by category slug + post slug ───────────────────────
export async function getBlogPostBySlug(req, res) {
  try {
    const { categorySlug, slug } = req.params;
    const post = await BlogPost.findOne({ slug, status: "published" })
      .populate("category", "name slug")
      .populate("additionalCategories", "name slug")
      .populate("subcategory", "name slug");
    if (!post || post.category?.slug !== categorySlug) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.json(post);
  } catch (err) {
    console.error("getBlogPostBySlug error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

// ── Public: listing for /blog and /blog/:categorySlug hubs ─────────────────
export async function listPublishedPosts(req, res) {
  try {
    const filter = { status: "published" };
    if (req.query.categorySlug) {
      const { BlogCategory } = await import("../models/BlogCategory.js");
      const cat = await BlogCategory.findOne({ slug: req.query.categorySlug }).lean();
      if (!cat) return res.json({ posts: [], total: 0 });
      // Match either the post's primary category or one of its additional ones.
      filter.$or = [{ category: cat._id }, { additionalCategories: cat._id }];
    }
    const page  = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 12);

    const [posts, total] = await Promise.all([
      BlogPost.find(filter)
        .populate("category", "name slug")
        .populate("subcategory", "name slug")
        .sort({ publishedAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      BlogPost.countDocuments(filter),
    ]);

    return res.json({ posts, total, page, totalPages: Math.ceil(total / limit) });
  } catch (err) {
    console.error("listPublishedPosts error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function createBlogPost(req, res) {
  try {
    const body = { ...req.body };
    if (body.status === "published" && !body.publishedAt) body.publishedAt = new Date();
    const post = await BlogPost.create(body);
    invalidateCache("/api/blogs");
    return res.status(201).json(post);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "A post with this slug already exists." });
    }
    console.error("createBlogPost error:", err);
    return res.status(400).json({ message: err.message });
  }
}

export async function updateBlogPost(req, res) {
  try {
    const body = { ...req.body };
    const existing = await BlogPost.findById(req.params.id);
    if (!existing) return res.status(404).json({ message: "Post not found" });
    if (body.status === "published" && existing.status !== "published" && !body.publishedAt) {
      body.publishedAt = new Date();
    }
    const post = await BlogPost.findByIdAndUpdate(req.params.id, { $set: body }, { new: true, runValidators: true });
    invalidateCache("/api/blogs");
    return res.json(post);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "A post with this slug already exists." });
    }
    console.error("updateBlogPost error:", err);
    return res.status(400).json({ message: err.message });
  }
}

export async function deleteBlogPost(req, res) {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    invalidateCache("/api/blogs");
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("deleteBlogPost error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

// ── Public: ranked "Related Blog" cards for a given page context ──────────
// Body/query: { page, category, subcategory, occasion, relationship, citySlug, limit }
// Scoring (higher wins): exact city+category match (100) > "India" wildcard
// city+category match — every city page under that category (90) > explicit
// page match (80) > subcategory/occasion/relationship match (60) >
// category-only match (20). A post's best-matching tag decides its score;
// ties broken by most recently published.
const isIndiaWildcard = (citySlug) => (citySlug || "").trim().toLowerCase() === "india";

function scorePost(post, ctx) {
  let score = 0;
  const t = post.tags || {};
  if (ctx.citySlug && ctx.category) {
    const cityTags = t.cities || [];
    if (cityTags.some((c) => c.category === ctx.category && c.citySlug === ctx.citySlug)) {
      score = Math.max(score, 100);
    } else if (cityTags.some((c) => c.category === ctx.category && isIndiaWildcard(c.citySlug))) {
      score = Math.max(score, 90); // tagged "India" under this category — matches every city page in it
    }
  }
  if (ctx.page && (t.pages || []).includes(ctx.page)) {
    score = Math.max(score, 80);
  }
  if (ctx.subcategory && (t.subcategories || []).includes(ctx.subcategory)) {
    score = Math.max(score, 60);
  }
  if (ctx.occasion && (t.occasions || []).includes(ctx.occasion)) {
    score = Math.max(score, 60);
  }
  if (ctx.relationship && (t.relationships || []).includes(ctx.relationship)) {
    score = Math.max(score, 60);
  }
  if (ctx.category && (t.categories || []).includes(ctx.category)) {
    score = Math.max(score, 20);
  }
  return score;
}

export async function getBlogsForPage(req, res) {
  try {
    const ctx = {
      page: req.query.page || undefined,
      category: req.query.category || undefined,
      subcategory: req.query.subcategory || undefined,
      occasion: req.query.occasion || undefined,
      relationship: req.query.relationship || undefined,
      citySlug: req.query.citySlug || undefined,
    };
    const limit = Math.min(12, parseInt(req.query.limit) || 3);

    if (!Object.values(ctx).some(Boolean)) return res.json([]);

    // Pre-filter to plausibly-relevant posts at the DB level before scoring
    // in memory — avoids scanning the whole collection as it grows.
    const or = [];
    if (ctx.page) or.push({ "tags.pages": ctx.page });
    if (ctx.category) or.push({ "tags.categories": ctx.category });
    if (ctx.subcategory) or.push({ "tags.subcategories": ctx.subcategory });
    if (ctx.occasion) or.push({ "tags.occasions": ctx.occasion });
    if (ctx.relationship) or.push({ "tags.relationships": ctx.relationship });
    if (ctx.citySlug && ctx.category) {
      or.push({ "tags.cities": { $elemMatch: { category: ctx.category, citySlug: ctx.citySlug } } });
      // Also catch "India" wildcard tags for this category, which won't
      // match the exact citySlug above but should still be candidates.
      or.push({ "tags.cities": { $elemMatch: { category: ctx.category, citySlug: { $regex: /^india$/i } } } });
    }
    if (or.length === 0) return res.json([]);

    const candidates = await BlogPost.find({ status: "published", $or: or })
      .populate("category", "name slug")
      .select("title slug excerpt coverImage authorName publishedAt category tags")
      .lean();

    const ranked = candidates
      .map((post) => ({ post, score: scorePost(post, ctx) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || new Date(b.post.publishedAt) - new Date(a.post.publishedAt))
      .slice(0, limit)
      .map((r) => r.post);

    return res.json(ranked);
  } catch (err) {
    console.error("getBlogsForPage error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
