import { BlogCategory, BlogSubcategory } from "../models/BlogCategory.js";
import { invalidateCache } from "../middlewares/cacheMiddleware.js";

// ── Categories ────────────────────────────────────────────────────────────

export async function listBlogCategories(req, res) {
  try {
    const categories = await BlogCategory.find().sort({ sortOrder: 1, name: 1 }).lean();
    return res.json(categories);
  } catch (err) {
    console.error("listBlogCategories error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function createBlogCategory(req, res) {
  try {
    const category = await BlogCategory.create(req.body);
    invalidateCache("/api/blogs/categories", "/api/blogs/subcategories");
    return res.status(201).json(category);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "A category with this name or slug already exists." });
    }
    console.error("createBlogCategory error:", err);
    return res.status(400).json({ message: err.message });
  }
}

export async function updateBlogCategory(req, res) {
  try {
    const category = await BlogCategory.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true });
    if (!category) return res.status(404).json({ message: "Category not found" });
    invalidateCache("/api/blogs/categories", "/api/blogs/subcategories");
    return res.json(category);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Slug or name conflict with another category." });
    }
    console.error("updateBlogCategory error:", err);
    return res.status(400).json({ message: err.message });
  }
}

export async function deleteBlogCategory(req, res) {
  try {
    const inUse = await BlogSubcategory.exists({ category: req.params.id });
    if (inUse) return res.status(409).json({ message: "Delete or reassign its subcategories first." });
    const category = await BlogCategory.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    invalidateCache("/api/blogs/categories", "/api/blogs/subcategories");
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("deleteBlogCategory error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

// ── Subcategories ─────────────────────────────────────────────────────────

export async function listBlogSubcategories(req, res) {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const subcategories = await BlogSubcategory.find(filter).sort({ sortOrder: 1, name: 1 }).lean();
    return res.json(subcategories);
  } catch (err) {
    console.error("listBlogSubcategories error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function createBlogSubcategory(req, res) {
  try {
    const subcategory = await BlogSubcategory.create(req.body);
    invalidateCache("/api/blogs/categories", "/api/blogs/subcategories");
    return res.status(201).json(subcategory);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "A subcategory with this slug already exists under this category." });
    }
    console.error("createBlogSubcategory error:", err);
    return res.status(400).json({ message: err.message });
  }
}

export async function updateBlogSubcategory(req, res) {
  try {
    const subcategory = await BlogSubcategory.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true });
    if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });
    invalidateCache("/api/blogs/categories", "/api/blogs/subcategories");
    return res.json(subcategory);
  } catch (err) {
    console.error("updateBlogSubcategory error:", err);
    return res.status(400).json({ message: err.message });
  }
}

export async function deleteBlogSubcategory(req, res) {
  try {
    const subcategory = await BlogSubcategory.findByIdAndDelete(req.params.id);
    if (!subcategory) return res.status(404).json({ message: "Subcategory not found" });
    invalidateCache("/api/blogs/categories", "/api/blogs/subcategories");
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("deleteBlogSubcategory error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
