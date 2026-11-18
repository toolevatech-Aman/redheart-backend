// controllers/productController.js
import Product from "../models/Product.js";
import User from "../models/User.js";
import Order from "../models/order.js";
import { resolveFiltersFromPageKey } from "../utils/urlFilters.js";
import { invalidateCache } from "../middlewares/cacheMiddleware.js";
import fs from "fs";
import csv from "csv-parser";
// ---------------- PUBLIC ----------------

// Get all products with search and filters
// export const getProducts = async (req, res) => {
//   try {
//     const { searchField, color, subcategory_name, category_name, festival_tags, occasion_tags, type } = req.query;

//     let query = {};

//     if (searchField) {
//       query.$or = [
//         { name: { $regex: searchField, $options: "i" } },
//         { description: { $regex: searchField, $options: "i" } },
//         { slug: { $regex: searchField, $options: "i" } },
//         { "product_attributes.color": { $regex: searchField, $options: "i" } }
//       ];
//     }

//     if (color) query["product_attributes.color"] = color;
//     if (subcategory_name) query["categorization.subcategory_name"] = subcategory_name;
//     if (category_name) query["categorization.category_name"] = category_name;
//     if (type) query["categorization.type"] = type;
//     if (festival_tags) query["categorization.festival_tags"] = { $in: festival_tags.split(",") };
//     if (occasion_tags) query["categorization.occasion_tags"] = { $in: occasion_tags.split(",") };

//     const products = await Product.find(query).select("product_id name slug sku quantity original_price selling_price description short_summary media");
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
const SELECT_FIELDS =
  "product_id name slug sku quantity original_price selling_price short_summary media categorization";

// Plain-substring fallback used only when the ranked $text search finds
// nothing — e.g. a typo, or a query too short/odd for MongoDB's text index
// (which matches whole stemmed words, not substrings: "rosebouquet" as one
// word won't match a "name" of "Rose Bouquet"). Keeps the old permissive
// behavior as a safety net rather than a hard dead end.
function regexSearchOr(searchField) {
  return [
    { name: { $regex: searchField, $options: "i" } },
    { description: { $regex: searchField, $options: "i" } },
    { slug: { $regex: searchField, $options: "i" } },
    { "product_attributes.color": { $regex: searchField, $options: "i" } },
  ];
}

export const getProducts = async (req, res) => {
  try {
    const {
      searchField,
      color,
      subcategory_name,
      category_name,
      festival_tags,
      occasion_tags,
      type,
      relationship,
      available_cities,   // city filter: shows "India" products + exact city products
      page  = 1,
      limit = 10
    } = req.query;

    // ---------- Base filters (everything except search) ----------
    // Built separately from the search clause so a search term and the
    // city filter's own $or can never collide/overwrite each other — that
    // was a real bug before (available_cities silently discarded searchField).
    const baseFilters = {};
    if (color) baseFilters["product_attributes.color"] = color;
    if (subcategory_name) baseFilters["categorization.subcategory_name"] = subcategory_name;
    if (category_name) baseFilters["categorization.category_name"] = category_name;
    if (type) baseFilters["categorization.type"] = type;
    if (festival_tags) baseFilters["categorization.festival_tags"] = { $in: festival_tags.split(",") };
    if (occasion_tags) baseFilters["categorization.occasion_tags"] = { $in: occasion_tags.split(",") };
    if (relationship) baseFilters["categorization.relationship"] = { $in: relationship.split(",") };

    if (available_cities) {
      const cityName = available_cities.trim();
      baseFilters.$or = [
        { "product_attributes.available_cities": "India" },
        { "product_attributes.available_cities": { $regex: new RegExp(`^${cityName}$`, "i") } },
      ];
    }

    // ---------- Pagination ----------
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    let products, total;

    if (searchField?.trim()) {
      // Ranked full-text search (see scripts/create-search-index.mjs for the
      // weighted text index this relies on) — a match in the product name
      // now outranks an incidental mention buried in the description,
      // instead of every $regex match being treated as equally relevant.
      const textQuery = { ...baseFilters, $text: { $search: searchField.trim() } };
      total = await Product.countDocuments(textQuery);

      if (total > 0) {
        products = await Product.find(textQuery, { score: { $meta: "textScore" } })
          .select(SELECT_FIELDS)
          .sort({ score: { $meta: "textScore" } })
          .skip(skip)
          .limit(limitNumber);
      } else {
        // No stemmed-word match — fall back to substring matching so a
        // typo or partial word ("rosebo") still returns something instead
        // of a hard "no results".
        const fallbackQuery = { ...baseFilters, $or: regexSearchOr(searchField.trim()) };
        total = await Product.countDocuments(fallbackQuery);
        products = await Product.find(fallbackQuery)
          .select(SELECT_FIELDS)
          .skip(skip)
          .limit(limitNumber);
      }
    } else {
      products = await Product.find(baseFilters).select(SELECT_FIELDS).skip(skip).limit(limitNumber);
      total = await Product.countDocuments(baseFilters);
    }

    // ---------- Response ----------
    res.json({
      total,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(total / limitNumber),
      products,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Get single product by product_id
// GET /products/all-slugs — lightweight list for sitemap generation
export const getAllProductSlugs = async (req, res) => {
  try {
    const products = await Product.find()
      .select("slug categorization.category_name sku product_id updatedAt")
      .lean();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findOne({ product_id }).select(
  "-costing_price -care_and_logistics.add_ons.costing_price -variations.costing_price"
);

    if (!product) return res.status(404).json({ message: "Product not found" });
    product.customer_reviews = product.customer_reviews.filter(
      (review) => (review.status || "approved") === "approved"
    );
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single product by URL slug (format: {productSlug}-{sku}, e.g. pure-ivory-calm-white-lily-glass-vase-200271fl)
// Extracts the SKU from the last hyphen-segment and does a case-insensitive lookup
export const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params; // e.g. "pure-ivory-calm-white-lily-glass-vase-200271fl"

    // The SKU is always the last hyphen-separated segment (SKUs have no hyphens)
    const parts = slug.split('-');
    const skuPart = parts[parts.length - 1]; // e.g. "200271fl"

    const product = await Product.findOne({ sku: new RegExp(`^${skuPart}$`, 'i') }).select(
      "-costing_price -care_and_logistics.add_ons.costing_price -variations.costing_price"
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    product.customer_reviews = product.customer_reviews.filter(
      (review) => (review.status || "approved") === "approved"
    );
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /products/for-page?pageKey=flowers/birthday
// GET /products/for-page?cityCategory=Flowers&cityName=Bangalore  (city page variant)
// Returns ALL products that appear on a given frontend page (used by admin sequencer)
export const getProductsForPage = async (req, res) => {
  try {
    const { pageKey, cityCategory, cityName } = req.query;

    // ── City page variant ────────────────────────────────────────────────────
    if (cityCategory && cityName) {
      const q = { "categorization.category_name": cityCategory };
      q.$or = [
        { "product_attributes.available_cities": "India" },
        { "product_attributes.available_cities": { $regex: new RegExp(`^${cityName.trim()}$`, "i") } },
      ];
      const products = await Product.find(q)
        .select("_id product_id name slug sku selling_price original_price media categorization variations")
        .lean();
      return res.json({ total: products.length, products });
    }

    if (!pageKey) return res.status(400).json({ error: "pageKey or cityCategory+cityName required" });

    const filters = resolveFiltersFromPageKey(pageKey);
    const query   = {};

    if (filters.category_name)
      query["categorization.category_name"] = filters.category_name;
    if (filters.subcategory_name?.length)
      query["categorization.subcategory_name"] = { $in: filters.subcategory_name };
    if (filters.occasion_tags?.length)
      query["categorization.occasion_tags"] = { $in: filters.occasion_tags };
    if (filters.festival_tags?.length)
      query["categorization.festival_tags"] = { $in: filters.festival_tags };
    if (filters.relationship?.length)
      query["categorization.relationship"] = { $in: filters.relationship };
    if (filters.type?.length)
      query["categorization.type"] = { $in: filters.type };
    if (filters.color?.length)
      query["product_attributes.color"] = { $in: filters.color };

    // Combo/mixed pages: fetch from all 3 categories
    let products;
    if (filters.isCombo || (filters.isMixed && !Object.keys(query).length)) {
      products = await Product.find({
        "categorization.category_name": { $in: ["Flowers", "Cakes", "Plants"] },
      })
        .select("_id product_id name slug sku selling_price original_price media categorization variations")
        .lean();
    } else {
      products = await Product.find(query)
        .select("_id product_id name slug sku selling_price original_price media categorization variations")
        .lean();
    }

    res.json({ total: products.length, products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /products/by-ids — fetch multiple products by their _id array (for pinned products)
export const getProductsByIds = async (req, res) => {
  try {
    const { ids } = req.body; // array of _id strings
    if (!Array.isArray(ids) || ids.length === 0) return res.json([]);
    const products = await Product.find({ _id: { $in: ids } }).select(
      "-costing_price -care_and_logistics.add_ons.costing_price -variations.costing_price"
    );
    // Return in the same order as requested ids
    const map = {};
    products.forEach(p => { map[p._id.toString()] = p; });
    const ordered = ids.map(id => map[id]).filter(Boolean);
    res.json(ordered);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update review for a product
// POST /products/:product_id/review — requires auth (see productRoutes.js).
// One review per user per product: a repeat submission edits their existing
// review in place rather than stacking duplicates.
export const updateReview = async (req, res) => {
  try {
    const { product_id } = req.params;
    const { rating, comment } = req.body;
    const userId = req.user.userId;

    const ratingNum = Number(rating);
    if (!ratingNum || ratingNum < 1 || ratingNum > 5) {
      return res.status(400).json({ message: "Rating must be between 1 and 5" });
    }
    const cleanComment = String(comment || "").trim();
    if (!cleanComment || cleanComment.length > 2500) {
      return res.status(400).json({ message: "Review text must be 1-2500 characters" });
    }

    const product = await Product.findOne({ product_id });
    if (!product) return res.status(404).json({ message: "Product not found" });

    const user = await User.findOne({ userId }).select("name").lean();

    // Verified purchase: any COD/PAID order by this user containing this product.
    const purchaseOrder = await Order.findOne({
      userId,
      paymentStatus: { $in: ["COD", "PAID"] },
      "cartItems.productId": { $in: [product_id, product._id.toString()] },
    }).select("_id").lean();

    const existing = product.customer_reviews.find((r) => r.userId === userId);
    if (existing) {
      existing.rating = ratingNum;
      existing.comment = cleanComment;
      existing.review_date = new Date();
      existing.verifiedPurchase = !!purchaseOrder;
      existing.status = "pending";
      existing.moderatedBy = "";
      existing.moderatedAt = null;
      if (user?.name) existing.name = user.name;
    } else {
      product.customer_reviews.push({
        userId,
        name: user?.name || "",
        rating: ratingNum,
        comment: cleanComment,
        review_date: new Date(),
        verifiedPurchase: !!purchaseOrder,
        status: "pending",
      });
    }

    recalculateReviewMetrics(product);

    await product.save();

    invalidateCache(`/api/products/${product_id}`, product.slug && `/api/products/slug/${product.slug}`);
    res.json({ message: "Thanks! Your review will appear once it is approved." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const approvedReviews = (product) => product.customer_reviews.filter(
  (review) => (review.status || "approved") === "approved"
);

const recalculateReviewMetrics = (product) => {
  const reviews = approvedReviews(product);
  const totalRating = reviews.reduce((sum, review) => sum + Number(review.rating || 0), 0);
  product.metrics.review_count = reviews.length;
  product.metrics.average_rating = reviews.length ? totalRating / reviews.length : 0;
};

const REVIEW_STATUSES = ["pending", "approved", "rejected"];
const REVIEW_ADMIN_LIMIT = 100;

const reviewProjection = {
  _id: 0,
  id: { $toString: "$customer_reviews._id" },
  name: "$customer_reviews.name",
  rating: "$customer_reviews.rating",
  comment: "$customer_reviews.comment",
  verifiedPurchase: "$customer_reviews.verifiedPurchase",
  verified: { $or: [
    { $eq: [{ $ifNull: ["$customer_reviews.verified", false] }, true] },
    { $eq: [{ $ifNull: ["$customer_reviews.verifiedPurchase", false] }, true] },
  ] },
  status: { $ifNull: ["$customer_reviews.status", "approved"] },
  imported: { $ifNull: ["$customer_reviews.imported", false] },
  date: "$customer_reviews.review_date",
  moderatedBy: "$customer_reviews.moderatedBy",
  moderatedAt: "$customer_reviews.moderatedAt",
  product: {
    productId: "$product_id",
    name: "$name",
    sku: "$sku",
    slug: "$slug",
    category: "$categorization.category_name",
  },
};

const reviewMetricSummary = async (product) => {
  recalculateReviewMetrics(product);
  await product.save({ validateBeforeSave: false });
  invalidateCache(`/api/products/${product.product_id}`, product.slug && `/api/products/slug/${product.slug}`);
};

// GET /products/admin/reviews — paginated moderation queue.
export const listProductReviews = async (req, res) => {
  try {
    const status = String(req.query.status || "pending").toLowerCase();
    const query = String(req.query.q || "").trim();
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(REVIEW_ADMIN_LIMIT, Math.max(1, Number(req.query.limit) || 25));
    if (status !== "all" && !REVIEW_STATUSES.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid review status" });
    }

    const filters = [];
    if (status !== "all") {
      filters.push(status === "approved"
        ? { $or: [{ "customer_reviews.status": "approved" }, { "customer_reviews.status": { $exists: false } }] }
        : { "customer_reviews.status": status });
    }
    if (query) {
      const search = { $regex: query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" };
      filters.push({ $or: [
        { "customer_reviews.name": search },
        { "customer_reviews.comment": search },
        { name: search },
        { sku: search },
        { product_id: search },
      ] });
    }
    const match = filters.length === 0 ? {} : filters.length === 1 ? filters[0] : { $and: filters };
    const basePipeline = [{ $unwind: "$customer_reviews" }, { $match: match }];
    const [totalResult, reviews, countRows] = await Promise.all([
      Product.aggregate([...basePipeline, { $count: "total" }]),
      Product.aggregate([
        ...basePipeline,
        { $sort: { "customer_reviews.review_date": -1 } },
        { $skip: (page - 1) * limit },
        { $limit: limit },
        { $project: reviewProjection },
      ]),
      Product.aggregate([
        { $unwind: "$customer_reviews" },
        { $project: { status: { $ifNull: ["$customer_reviews.status", "approved"] } } },
        { $group: { _id: "$status", count: { $sum: 1 } } },
      ]),
    ]);
    const counts = { pending: 0, approved: 0, rejected: 0 };
    countRows.forEach(({ _id, count }) => { if (REVIEW_STATUSES.includes(_id)) counts[_id] = count; });
    res.json({ success: true, reviews, counts, total: totalResult[0]?.total || 0, page, limit });
  } catch (err) {
    res.status(500).json({ success: false, message: "Could not load reviews" });
  }
};

const findReviewProduct = (reviewId) => Product.findOne({ "customer_reviews._id": reviewId }).select("product_id slug customer_reviews");
const adminLabel = (req) => req.user?.email || req.user?.userId || "Admin";

// PATCH /products/admin/reviews/:reviewId — edit wording or moderate one review.
export const moderateProductReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    if (!/^[a-f\d]{24}$/i.test(reviewId)) return res.status(400).json({ success: false, message: "Invalid review ID" });
    const product = await findReviewProduct(reviewId);
    if (!product) return res.status(404).json({ success: false, message: "Review not found" });
    const review = product.customer_reviews.id(reviewId);
    const { status, name, comment, verified } = req.body;
    if (status != null && !REVIEW_STATUSES.includes(status)) return res.status(400).json({ success: false, message: "Invalid review status" });
    if (name != null) review.name = String(name).trim().slice(0, 120);
    if (comment != null) {
      const cleanComment = String(comment).trim();
      if (!cleanComment || cleanComment.length > 2500) return res.status(400).json({ success: false, message: "Review text must be 1-2500 characters" });
      review.comment = cleanComment;
    }
    if (verified != null) {
      if (typeof verified !== "boolean") return res.status(400).json({ success: false, message: "Verified must be true or false" });
      review.verified = verified;
    }
    if (status != null) {
      review.status = status;
      review.moderatedBy = adminLabel(req);
      review.moderatedAt = new Date();
    }
    await reviewMetricSummary(product);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: "Could not update review" });
  }
};

const validateReviewIds = (ids) => Array.isArray(ids) && ids.length > 0 && ids.length <= REVIEW_ADMIN_LIMIT && ids.every((id) => /^[a-f\d]{24}$/i.test(String(id)));

// POST /products/admin/reviews/bulk — approve/reject a page selection.
export const bulkModerateProductReviews = async (req, res) => {
  try {
    const { ids, status } = req.body;
    if (!validateReviewIds(ids) || !REVIEW_STATUSES.includes(status)) return res.status(400).json({ success: false, message: "Invalid review selection or status" });
    const reviewIds = ids.map(String);
    const products = await Product.find({ "customer_reviews._id": { $in: reviewIds } }).select("product_id slug customer_reviews");
    let updated = 0;
    for (const product of products) {
      for (const review of product.customer_reviews) {
        if (reviewIds.includes(review._id.toString())) {
          review.status = status;
          review.moderatedBy = adminLabel(req);
          review.moderatedAt = new Date();
          updated += 1;
        }
      }
      await reviewMetricSummary(product);
    }
    res.json({ success: true, updated });
  } catch (err) {
    res.status(500).json({ success: false, message: "Could not update reviews" });
  }
};

// DELETE /products/admin/reviews/:reviewId — permanently remove one review.
export const deleteProductReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    if (!/^[a-f\d]{24}$/i.test(reviewId)) return res.status(400).json({ success: false, message: "Invalid review ID" });
    const product = await findReviewProduct(reviewId);
    if (!product) return res.status(404).json({ success: false, message: "Review not found" });
    product.customer_reviews.pull(reviewId);
    await reviewMetricSummary(product);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: "Could not delete review" });
  }
};

// POST /products/admin/reviews/bulk-delete — permanently remove a selection.
export const bulkDeleteProductReviews = async (req, res) => {
  try {
    const { ids } = req.body;
    if (!validateReviewIds(ids)) return res.status(400).json({ success: false, message: "Invalid review selection" });
    const reviewIds = ids.map(String);
    const products = await Product.find({ "customer_reviews._id": { $in: reviewIds } }).select("product_id slug customer_reviews");
    let deleted = 0;
    for (const product of products) {
      const before = product.customer_reviews.length;
      for (const reviewId of reviewIds) product.customer_reviews.pull(reviewId);
      deleted += before - product.customer_reviews.length;
      await reviewMetricSummary(product);
    }
    res.json({ success: true, deleted });
  } catch (err) {
    res.status(500).json({ success: false, message: "Could not delete reviews" });
  }
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REVIEW_IMPORT_LIMIT = 250;

// POST /products/admin/reviews/import
// Imports a bounded batch from a trusted admin-side spreadsheet export. The
// operation is idempotent per product + email, so retrying a failed request
// updates the same review instead of duplicating it.
export const importProductReviews = async (req, res) => {
  try {
    const { reviews } = req.body;
    if (!Array.isArray(reviews) || reviews.length === 0) {
      return res.status(400).json({ message: "Provide a non-empty reviews array" });
    }
    if (reviews.length > REVIEW_IMPORT_LIMIT) {
      return res.status(400).json({ message: `Import at most ${REVIEW_IMPORT_LIMIT} reviews per request` });
    }

    const normalized = reviews.map((row, index) => ({
      index,
      productId: String(row.productId || row.product_id || "").trim(),
      sku: String(row.sku || "").trim(),
      name: String(row.name || row.reviewerName || row.reviewer_name || "").trim(),
      email: String(row.email || row.reviewerEmail || row.reviewer_email || "").trim().toLowerCase(),
      rating: Number(row.rating),
      comment: String(row.comment || row.reviewText || row.review_text || "").trim(),
      reviewDate: row.reviewDate || row.review_date || row.timestamp,
    }));

    const productIds = [...new Set(normalized.map((row) => row.productId).filter(Boolean))];
    const skus = [...new Set(normalized.map((row) => row.sku).filter(Boolean))];
    const products = await Product.find({
      $or: [{ product_id: { $in: productIds } }, { sku: { $in: skus } }],
    }).select("+customer_reviews.reviewerEmail");
    const productById = new Map(products.map((product) => [product.product_id, product]));
    const productBySku = new Map(products.map((product) => [product.sku, product]));

    const emails = [...new Set(normalized.map((row) => row.email).filter(Boolean))];
    const users = await User.find({ email: { $in: emails } }).select("userId email").lean();
    const userByEmail = new Map(users.map((user) => [String(user.email).toLowerCase(), user]));

    const userIds = users.map((user) => user.userId);
    const productRefs = products.flatMap((product) => [product.product_id, product._id.toString()]);
    const verifiedPurchases = new Set();
    if (userIds.length && productRefs.length) {
      const orders = await Order.find({
        userId: { $in: userIds },
        paymentStatus: { $in: ["COD", "PAID"] },
        "cartItems.productId": { $in: productRefs },
      }).select("userId cartItems.productId").lean();
      const productIdByRef = new Map(products.flatMap((product) => [
        [product.product_id, product.product_id],
        [product._id.toString(), product.product_id],
      ]));
      for (const order of orders) {
        for (const item of order.cartItems || []) {
          const productId = productIdByRef.get(String(item.productId));
          if (productId) verifiedPurchases.add(`${order.userId}:${productId}`);
        }
      }
    }

    const changedProducts = new Set();
    const errors = [];
    let created = 0;
    let updated = 0;
    let verifiedPurchaseCount = 0;

    for (const row of normalized) {
      const productFromId = row.productId ? productById.get(row.productId) : null;
      const productFromSku = row.sku ? productBySku.get(row.sku) : null;
      if (!row.productId || !row.sku || !row.name || !row.comment || !EMAIL_PATTERN.test(row.email) || !Number.isInteger(row.rating) || row.rating < 1 || row.rating > 5) {
        errors.push({ row: row.index + 1, message: "Missing or invalid product ID, SKU, reviewer, email, rating, or review text" });
        continue;
      }
      if (!productFromId || !productFromSku || productFromId._id.toString() !== productFromSku._id.toString()) {
        errors.push({ row: row.index + 1, message: "Product ID and SKU do not identify the same product" });
        continue;
      }
      if (row.name.length > 120 || row.comment.length > 2500) {
        errors.push({ row: row.index + 1, message: "Reviewer name or review text exceeds the allowed length" });
        continue;
      }
      const reviewDate = row.reviewDate ? new Date(row.reviewDate) : new Date();
      if (Number.isNaN(reviewDate.getTime())) {
        errors.push({ row: row.index + 1, message: "Invalid review date" });
        continue;
      }

      const product = productFromId;
      const user = userByEmail.get(row.email);
      const isVerifiedPurchase = Boolean(user && verifiedPurchases.has(`${user.userId}:${product.product_id}`));
      const existing = product.customer_reviews.find((review) =>
        String(review.reviewerEmail || "").toLowerCase() === row.email || (user && review.userId === user.userId)
      );
      const payload = {
        userId: user?.userId,
        name: row.name,
        reviewerEmail: row.email,
        rating: row.rating,
        comment: row.comment,
        review_date: reviewDate,
        verifiedPurchase: isVerifiedPurchase,
        status: "pending",
        imported: true,
      };

      if (existing) {
        Object.assign(existing, payload);
        updated += 1;
      } else {
        product.customer_reviews.push(payload);
        created += 1;
      }
      if (isVerifiedPurchase) verifiedPurchaseCount += 1;
      changedProducts.add(product);
    }

    for (const product of changedProducts) {
      await reviewMetricSummary(product);
    }

    res.json({
      success: true,
      processed: normalized.length,
      created,
      updated,
      rejected: errors.length,
      verifiedPurchaseCount,
      errors: errors.slice(0, 100),
    });
  } catch (err) {
    res.status(500).json({ message: "Review import failed", error: err.message });
  }
};

// ---------------- ADMIN ----------------

// Add a product
export const addProduct = async (req, res) => {
  try {
    const { product_id } = req.body;

    // Ensure unique product_id
    const existing = await Product.findOne({ product_id });
    if (existing) return res.status(400).json({ message: "Product ID already exists" });

    const product = await Product.create(req.body);
    invalidateCache("/api/products/all-slugs");
    res.json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit product
export const editProduct = async (req, res) => {
  try {
    const { product_id } = req.params;

    const product = await Product.findOne({ product_id });
    if (!product) return res.status(404).json({ message: "Product not found" });

    Object.assign(product, req.body); // simple update
    await product.save();

    invalidateCache(`/api/products/${product_id}`, product.slug && `/api/products/slug/${product.slug}`, "/api/products/all-slugs");
    res.json({ message: "Product updated", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update delivery_type only
export const updateDeliveryType = async (req, res) => {
  try {
    const { product_id } = req.params;
    const { delivery_type } = req.body;
    if (!["same_day", "courier"].includes(delivery_type)) {
      return res.status(400).json({ message: "delivery_type must be 'same_day' or 'courier'" });
    }
    const product = await Product.findOneAndUpdate(
      { product_id },
      { $set: { "product_attributes.delivery_type": delivery_type } },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    invalidateCache(`/api/products/${product_id}`, product.slug && `/api/products/slug/${product.slug}`);
    res.json({ message: "Delivery type updated", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete product
export const deleteProduct = async (req, res) => {
  try {
    const { product_id } = req.params;

    const product = await Product.findOneAndDelete({ product_id });
    if (!product) return res.status(404).json({ message: "Product not found" });

    invalidateCache(`/api/products/${product_id}`, product.slug && `/api/products/slug/${product.slug}`, "/api/products/all-slugs");
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const toBoolean = (val) => {
  if (val === undefined || val === null || val === "") return undefined;
  if (typeof val === "boolean") return val;
  return String(val).trim().toLowerCase() === "true";
};

const toNumber = (val) => {
  if (val === undefined || val === null || val === "") return undefined;
  return Number(val);
};

const toArray = (val) => {
  if (!val) return [];
  return String(val).split(";").map(v => v.trim()).filter(Boolean);
};

const toDate = (val) => {
  if (!val) return undefined;
  if (val.includes("-")) {
    const p = val.split("-");
    if (p[0].length === 2) {
      return new Date(`${p[2]}-${p[1]}-${p[0]}`);
    }
  }
  return new Date(val);
};

export const importProductsFromCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CSV file is required" });
    }

    const filePath = req.file.path;
    const rows = [];

    fs.createReadStream(filePath)
      .pipe(csv({
        mapHeaders: ({ header }) => header.trim() 
      }))
      .on("data", (row) => rows.push(row))
      .on("end", async () => {
        const inserted = [];
        const failed = [];

        for (const row of rows) {
          try {
            // Required fields
            if (!row.product_id || !row.slug || !row.name) {
              failed.push({ row, reason: "Missing required fields" });
              continue;
            }

            // Uniqueness check
            if (await Product.exists({ product_id: row.product_id })) {
              failed.push({ row, reason: "product_id already exists" });
              continue;
            }

            if (await Product.exists({ slug: row.slug })) {
              failed.push({ row, reason: "slug already exists" });
              continue;
            }

            // ---------- Parse add_ons ----------
            const addOnNames = toArray(row["care_and_logistics.add_ons.name"]);
            const addOnIds = toArray(row["care_and_logistics.add_ons.product_id"]);
            const addOnQuantities = toArray(row["care_and_logistics.add_ons.quantity"]).map(toNumber);
            const addOnOriginalPrices = toArray(row["care_and_logistics.add_ons.original_price"]).map(toNumber);
            const addOnSellingPrices = toArray(row["care_and_logistics.add_ons.selling_price"]).map(toNumber);
            const addOnImages = toArray(row["care_and_logistics.add_ons.image_url"]);
            const addOnCostingPrices = toArray(
              row["care_and_logistics.add_ons.costing_price"]
            ).map(toNumber);
            const add_ons = addOnNames.map((name, index) => ({
              name,
              product_id: addOnIds[index],
              quantity: addOnQuantities[index],
              costing_price: addOnCostingPrices[index],
              original_price: addOnOriginalPrices[index],
              selling_price: addOnSellingPrices[index],
              image_url: addOnImages[index],
            }));

            // ---------- Parse variations ----------
            const variantIds = toArray(row["variations.variant_id"]);
            const variantSkus = toArray(row["variations.variant_sku"]);
            const variantNames = toArray(row["variations.variant_name"]);
            const quantities = toArray(row["variations.quantity_in_bunch"]).map(toNumber);
            const originalPrices = toArray(row["variations.original_price"]).map(toNumber);
            const sellingPrices = toArray(row["variations.selling_price"]).map(toNumber);
            const discounts = toArray(row["variations.discount_percentage"]).map(toNumber);
            const images = toArray(row["variations.image_url"]);
            const variantCostingPrices = toArray( // ✅ NEW
              row["variations.costing_price"]
            ).map(toNumber);

            const variations = variantIds.map((id, index) => ({
              variant_id: id,
              variant_sku: variantSkus[index],
              variant_name: variantNames[index],
              quantity_in_bunch: quantities[index],
              costing_price: variantCostingPrices[index],
              original_price: originalPrices[index],
              selling_price: sellingPrices[index],
              discount_percentage: discounts[index],
              image_url: images[index],
            }));

            // ---------- Build product ----------



            const product = {
              product_id: row.product_id.trim(),
              slug: row.slug.trim().toLowerCase(),
              name: row.name,
              sku: row.sku,
              quantity: toNumber(row.quantity),
              costing_price: toNumber(row.costing_price),
              original_price: toNumber(row.original_price),
              selling_price: toNumber(row.selling_price),
              description: row.description,
              short_summary: row.short_summary,

              categorization: {
                category_id: toNumber(row["categorization.category_id"]),
                category_name: row["categorization.category_name"],
                subcategory_id: toNumber(row["categorization.subcategory_id"]),
                subcategory_name: row["categorization.subcategory_name"],
                festival_tags: toArray(row["categorization.festival_tags"]),
                occasion_tags: toArray(row["categorization.occasion_tags"]),
                type: row["categorization.type"],
                relationship: toArray(row["categorization.relationship"]),
              },

              product_attributes: {
                color: row["product_attributes.color"],
                product_content: toArray(row["product_attributes.product_content"]),
                stem_length_cm: toNumber(row["product_attributes.stem_length_cm"]),
                fragrance_level: row["product_attributes.fragrance_level"],
                vase_life_days_min: toNumber(row["product_attributes.vase_life_days_min"]),
                origin: row["product_attributes.origin"],
                available_cities: row["product_attributes.available_cities"] || "India",
                delivery_type: ["same_day", "courier"].includes(row["product_attributes.delivery_type"])
                  ? row["product_attributes.delivery_type"]
                  : "same_day",
              },

              media: {
                primary_image_url: row["media.primary_image_url"],
                gallery_images: toArray(row["media.gallery_images"]),
              },

              metrics: {
                average_rating: toNumber(row["metrics.average_rating"]),
                review_count: toNumber(row["metrics.review_count"]),
                times_ordered: toNumber(row["metrics.times_ordered"]),
              },

              customer_reviews: row["customer_reviews.rating"]
                ? [{
                  rating: toNumber(row["customer_reviews.rating"]),
                  review_date: toDate(row["customer_reviews.review_date"]),
                  comment: row["customer_reviews.comment"],
                }]
                : [],

              care_and_logistics: {
                care_instructions: toArray(row["care_and_logistics.care_instructions"]),
                shipping_constraints: {
                  requires_cold_chain: toBoolean(
                    row["care_and_logistics.shipping_constraints.requires_cold_chain"]
                  ),
                  max_delivery_days: toNumber(
                    row["care_and_logistics.shipping_constraints.max_delivery_days"]
                  ),
                  regional_availability: toArray(
                    row["care_and_logistics.shipping_constraints.regional_availability"]
                  ),
                },
                add_ons,
              },

              variations,

              availability: {
                is_active: toBoolean(row["availability.is_active"]) ?? true,
                is_featured: toBoolean(row["availability.is_featured"]) ?? false,
                last_restock_date: toDate(row["availability.last_restock_date"]),
              },
            };

            const created = await Product.create(product);
            inserted.push(created);

          } catch (err) {
            failed.push({ row, reason: err.message });
          }
        }

        fs.unlinkSync(filePath);

        return res.json({
          message: "CSV import completed",
          inserted_count: inserted.length,
          failed_count: failed.length,
          inserted,
          failed,
        });
      });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const updateProductsFromCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CSV file is required" });
    }

    const filePath = req.file.path;
    const rows = [];

    fs.createReadStream(filePath)
      .pipe(csv({
    mapHeaders: ({ header }) => header.trim() 
  }))
      .on("data", (row) => rows.push(row))
      .on("end", async () => {
        const updated = [];
        const failed = [];

        for (const row of rows) {
          try {
            if (!row.product_id) {
              failed.push({ row, reason: "Missing product_id" });
              continue;
            }

            const existingProduct = await Product.findOne({ product_id: row.product_id });
            if (!existingProduct) {
              failed.push({ row, reason: "Product does not exist" });
              continue;
            }

            // ---------- Parse add_ons ----------
            const addOnNames = toArray(row["care_and_logistics.add_ons.name"]);
            const addOnIds = toArray(row["care_and_logistics.add_ons.product_id"]);
            const addOnQuantities = toArray(row["care_and_logistics.add_ons.quantity"]).map(toNumber);
            const addOnOriginalPrices = toArray(row["care_and_logistics.add_ons.original_price"]).map(toNumber);
            const addOnSellingPrices = toArray(row["care_and_logistics.add_ons.selling_price"]).map(toNumber);
            const addOnImages = toArray(row["care_and_logistics.add_ons.image_url"]);
            const addOnCostingPrices = toArray(row["care_and_logistics.add_ons.costing_price"]).map(toNumber);
            const add_ons = addOnNames.map((name, index) => ({
              name,
              product_id: addOnIds[index],
              quantity: addOnQuantities[index],
              costing_price: addOnCostingPrices[index],
              original_price: addOnOriginalPrices[index],
              selling_price: addOnSellingPrices[index],
              image_url: addOnImages[index],
            }));

            // ---------- Parse variations ----------
            const variantIds = toArray(row["variations.variant_id"]);
            const variantSkus = toArray(row["variations.variant_sku"]);
            const variantNames = toArray(row["variations.variant_name"]);
            const quantities = toArray(row["variations.quantity_in_bunch"]).map(toNumber);
            const originalPrices = toArray(row["variations.original_price"]).map(toNumber);
            const sellingPrices = toArray(row["variations.selling_price"]).map(toNumber);
            const discounts = toArray(row["variations.discount_percentage"]).map(toNumber);
            const images = toArray(row["variations.image_url"]);
            const variantCostingPrices = toArray(row["variations.costing_price"]).map(toNumber);

            const variations = variantIds.map((id, index) => ({
              variant_id: id,
              variant_sku: variantSkus[index],
              variant_name: variantNames[index],
              quantity_in_bunch: quantities[index],
              costing_price: variantCostingPrices[index],
              original_price: originalPrices[index],
              selling_price: sellingPrices[index],
              discount_percentage: discounts[index],
              image_url: images[index],
            }));

            // ---------- Build update object ----------
            const updateData = {
              slug: row.slug?.trim().toLowerCase() || existingProduct.slug,
              name: row.name || existingProduct.name,
              sku: row.sku || existingProduct.sku,
              quantity: row.quantity ? toNumber(row.quantity) : existingProduct.quantity,
              costing_price: row.costing_price ? toNumber(row.costing_price) : existingProduct.costing_price,
              original_price: row.original_price ? toNumber(row.original_price) : existingProduct.original_price,
              selling_price: row.selling_price ? toNumber(row.selling_price) : existingProduct.selling_price,
              description: row.description || existingProduct.description,
              short_summary: row.short_summary || existingProduct.short_summary,

              categorization: {
                category_id: row["categorization.category_id"] ? toNumber(row["categorization.category_id"]) : existingProduct.categorization.category_id,
                category_name: row["categorization.category_name"] || existingProduct.categorization.category_name,
                subcategory_id: row["categorization.subcategory_id"] ? toNumber(row["categorization.subcategory_id"]) : existingProduct.categorization.subcategory_id,
                subcategory_name: row["categorization.subcategory_name"] || existingProduct.categorization.subcategory_name,
                festival_tags: row["categorization.festival_tags"] ? toArray(row["categorization.festival_tags"]) : existingProduct.categorization.festival_tags,
                occasion_tags: row["categorization.occasion_tags"] ? toArray(row["categorization.occasion_tags"]) : existingProduct.categorization.occasion_tags,
                type: row["categorization.type"] || existingProduct.categorization.type,
                relationship: row["categorization.relationship"] ? toArray(row["categorization.relationship"]) : existingProduct.categorization.relationship,
              },

              product_attributes: {
                color: row["product_attributes.color"] || existingProduct.product_attributes.color,
                product_content: row["product_attributes.product_content"] ? toArray(row["product_attributes.product_content"]) : existingProduct.product_attributes.product_content,
                stem_length_cm: row["product_attributes.stem_length_cm"] ? toNumber(row["product_attributes.stem_length_cm"]) : existingProduct.product_attributes.stem_length_cm,
                fragrance_level: row["product_attributes.fragrance_level"] || existingProduct.product_attributes.fragrance_level,
                vase_life_days_min: row["product_attributes.vase_life_days_min"] ? toNumber(row["product_attributes.vase_life_days_min"]) : existingProduct.product_attributes.vase_life_days_min,
                origin: row["product_attributes.origin"] || existingProduct.product_attributes.origin,
                available_cities: row["product_attributes.available_cities"] || existingProduct.product_attributes.available_cities,
                delivery_type: ["same_day", "courier"].includes(row["product_attributes.delivery_type"])
                  ? row["product_attributes.delivery_type"]
                  : existingProduct.product_attributes.delivery_type || "same_day",
              },

              media: {
                primary_image_url: row["media.primary_image_url"] || existingProduct.media.primary_image_url,
                gallery_images: row["media.gallery_images"] ? toArray(row["media.gallery_images"]) : existingProduct.media.gallery_images,
              },

              metrics: {
                average_rating: row["metrics.average_rating"] ? toNumber(row["metrics.average_rating"]) : existingProduct.metrics.average_rating,
                review_count: row["metrics.review_count"] ? toNumber(row["metrics.review_count"]) : existingProduct.metrics.review_count,
                times_ordered: row["metrics.times_ordered"] ? toNumber(row["metrics.times_ordered"]) : existingProduct.metrics.times_ordered,
              },

              care_and_logistics: {
                care_instructions: row["care_and_logistics.care_instructions"] ? toArray(row["care_and_logistics.care_instructions"]) : existingProduct.care_and_logistics.care_instructions,
                shipping_constraints: {
                  requires_cold_chain: row["care_and_logistics.shipping_constraints.requires_cold_chain"] ? toBoolean(row["care_and_logistics.shipping_constraints.requires_cold_chain"]) : existingProduct.care_and_logistics.shipping_constraints.requires_cold_chain,
                  max_delivery_days: row["care_and_logistics.shipping_constraints.max_delivery_days"] ? toNumber(row["care_and_logistics.shipping_constraints.max_delivery_days"]) : existingProduct.care_and_logistics.shipping_constraints.max_delivery_days,
                  regional_availability: row["care_and_logistics.shipping_constraints.regional_availability"] ? toArray(row["care_and_logistics.shipping_constraints.regional_availability"]) : existingProduct.care_and_logistics.shipping_constraints.regional_availability,
                },
                add_ons: add_ons.length > 0 ? add_ons : existingProduct.care_and_logistics.add_ons,
              },

              variations: variations.length > 0 ? variations : existingProduct.variations,

              availability: {
                is_active: row["availability.is_active"] ? toBoolean(row["availability.is_active"]) : existingProduct.availability.is_active,
                is_featured: row["availability.is_featured"] ? toBoolean(row["availability.is_featured"]) : existingProduct.availability.is_featured,
                last_restock_date: row["availability.last_restock_date"] ? toDate(row["availability.last_restock_date"]) : existingProduct.availability.last_restock_date,
              },
            };

            const updatedProduct = await Product.findOneAndUpdate(
              { product_id: row.product_id },
              updateData,
              { new: true }
            );

            updated.push(updatedProduct);

          } catch (err) {
            failed.push({ row, reason: err.message });
          }
        }

        fs.unlinkSync(filePath);

        return res.json({
          message: "CSV update completed",
          updated_count: updated.length,
          failed_count: failed.length,
          updated,
          failed,
        });
      });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
// ---------- controller ----------
// export const importProductsFromCSV = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "CSV file is required" });
//     }

//     const filePath = req.file.path;
//     const rows = [];

//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on("data", (row) => rows.push(row))
//       .on("end", async () => {

//         const inserted = [];
//         const failed = [];

//         for (const row of rows) {
//           try {
//             // Required fields
//             if (!row.product_id || !row.slug || !row.name) {
//               failed.push({ row, reason: "Missing required fields" });
//               continue;
//             }

//             // Uniqueness check
//             if (await Product.exists({ product_id: row.product_id })) {
//               failed.push({ row, reason: "product_id already exists" });
//               continue;
//             }

//             if (await Product.exists({ slug: row.slug })) {
//               failed.push({ row, reason: "slug already exists" });
//               continue;
//             }

//             // ---------- build product ----------
//             const product = {
//               product_id: row.product_id.trim(),
//               slug: row.slug.trim().toLowerCase(),
//               name: row.name,
//               sku: row.sku,
//               quantity: toNumber(row.quantity),
//               original_price: toNumber(row.original_price),
//               selling_price: toNumber(row.selling_price),
//               description: row.description,
//               short_summary: row.short_summary,

//               categorization: {
//                 category_id: toNumber(row["categorization.category_id"]),
//                 category_name: row["categorization.category_name"],
//                 subcategory_id: toNumber(row["categorization.subcategory_id"]),
//                 subcategory_name: row["categorization.subcategory_name"],
//                 festival_tags: toArray(row["categorization.festival_tags"]),
//                 occasion_tags: toArray(row["categorization.occasion_tags"]),
//                 type: row["categorization.type"],
//               },

//               product_attributes: {
//                 color: row["product_attributes.color"],
//                 stem_length_cm: toNumber(row["product_attributes.stem_length_cm"]),
//                 fragrance_level: row["product_attributes.fragrance_level"],
//                 vase_life_days_min: toNumber(row["product_attributes.vase_life_days_min"]),
//                 origin: row["product_attributes.origin"],
//               },

//               media: {
//                 primary_image_url: row["media.primary_image_url"],
//                 gallery_images: toArray(row["media.gallery_images"]),
//               },

//               metrics: {
//                 average_rating: toNumber(row["metrics.average_rating"]),
//                 review_count: toNumber(row["metrics.review_count"]),
//                 times_ordered: toNumber(row["metrics.times_ordered"]),
//               },

//               customer_reviews: row["customer_reviews.rating"]
//                 ? [{
//                     rating: toNumber(row["customer_reviews.rating"]),
//                     review_date: toDate(row["customer_reviews.review_date"]),
//                     comment: row["customer_reviews.comment"],
//                   }]
//                 : [],

//               care_and_logistics: {
//                 care_instructions: toArray(row["care_and_logistics.care_instructions"]),
//                 shipping_constraints: {
//                   requires_cold_chain: toBoolean(
//                     row["care_and_logistics.shipping_constraints.requires_cold_chain"]
//                   ),
//                   max_delivery_days: toNumber(
//                     row["care_and_logistics.shipping_constraints.max_delivery_days"]
//                   ),
//                   regional_availability: toArray(
//                     row["care_and_logistics.shipping_constraints.regional_availability"]
//                   ),
//                 },
//                 add_ons: row["care_and_logistics.add_ons.name"]
//                   ? [{
//                       name: row["care_and_logistics.add_ons.name"],
//                       product_id: row["care_and_logistics.add_ons.product_id"],
//                       quantity: toNumber(row["care_and_logistics.add_ons.quantity"]),
//                       original_price: toNumber(row["care_and_logistics.add_ons.original_price"]),
//                       selling_price: toNumber(row["care_and_logistics.add_ons.selling_price"]),
//                       image_url: row["care_and_logistics.add_ons.image_url"],
//                     }]
//                   : [],
//               },

//               availability: {
//                 is_active: toBoolean(row["availability.is_active"]) ?? true,
//                 is_featured: toBoolean(row["availability.is_featured"]) ?? false,
//                 last_restock_date: toDate(row["availability.last_restock_date"]),
//               },
//             };

//             const created = await Product.create(product);
//             inserted.push(created);

//           } catch (err) {
//             failed.push({ row, reason: err.message });
//           }
//         }

//         fs.unlinkSync(filePath);

//         return res.json({
//           message: "CSV import completed",
//           inserted_count: inserted.length,
//           failed_count: failed.length,
//           inserted,
//           failed,
//         });
//       });

//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };
// export const importProductsFromCSV = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "CSV file is required" });
//     }

//     const filePath = req.file.path;
//     const rows = [];

//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on("data", (row) => rows.push(row))
//       .on("end", async () => {
//         const inserted = [];
//         const failed = [];

//         for (const row of rows) {
//           try {
//             if (!row.product_id || !row.slug || !row.name) {
//               failed.push({ row, reason: "Missing required fields" });
//               continue;
//             }

//             const existsId = await Product.findOne({ product_id: row.product_id });
//             if (existsId) {
//               failed.push({ row, reason: "product_id already exists" });
//               continue;
//             }

//             const existsSlug = await Product.findOne({ slug: row.slug });
//             if (existsSlug) {
//               failed.push({ row, reason: "slug already exists" });
//               continue;
//             }

//             const created = await Product.create(row);
//             inserted.push(created);

//           } catch (err) {
//             failed.push({ row, reason: err.message });
//           }
//         }

//         fs.unlinkSync(filePath);

//         return res.status(200).json({
//           message: "CSV import completed",
//           inserted_count: inserted.length,
//           failed_count: failed.length,
//           inserted,
//           failed,
//         });
//       });

//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: err.message });
//   }
// };
