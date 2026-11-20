import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../src/models/Product.js";
import { listProductReviews } from "../src/controllers/productController.js";

dotenv.config();
try {
  await mongoose.connect(process.env.MONGO_URI);
  const base = [{ $unwind: "$customer_reviews" }, { $match: { "customer_reviews.status": "pending" } }];
  const projection = { _id: 0, id: { $toString: "$customer_reviews._id" }, name: "$customer_reviews.name", rating: "$customer_reviews.rating", comment: "$customer_reviews.comment", verified: { $or: [{ $eq: [{ $ifNull: ["$customer_reviews.verified", false] }, true] }, { $eq: [{ $ifNull: ["$customer_reviews.verifiedPurchase", false] }, true] }] }, status: { $ifNull: ["$customer_reviews.status", "approved"] }, product: { productId: "$product_id", name: "$name", sku: "$sku", slug: "$slug", category: "$categorization.category_name" } };
  const [total, rows, counts] = await Promise.all([
    Product.aggregate([...base, { $count: "total" }]),
    Product.aggregate([
    { $unwind: "$customer_reviews" },
    { $match: { "customer_reviews.status": "pending" } },
    { $sort: { "customer_reviews.review_date": -1 } },
    { $limit: 5 },
    { $project: projection },
    ]),
    Product.aggregate([{ $unwind: "$customer_reviews" }, { $project: { status: { $ifNull: ["$customer_reviews.status", "approved"] } } }, { $group: { _id: "$status", count: { $sum: 1 } } }]),
  ]);
  console.log(JSON.stringify({ success: true, count: rows.length, total: total[0]?.total, counts, sample: rows[0] }));
  const response = { statusCode: 200, body: null, status(code) { this.statusCode = code; return this; }, json(body) { this.body = body; } };
  await listProductReviews({ query: { status: "pending", q: "", page: "1", limit: "50" } }, response);
  console.log(JSON.stringify({ controllerStatus: response.statusCode, controllerTotal: response.body?.total, controllerError: response.body?.message }));
} catch (error) { console.error(error.stack || error.message); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
