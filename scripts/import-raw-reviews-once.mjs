/** One-time import of the supplied Raw_Reviews Google Sheet. */
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Readable } from "node:stream";
import csv from "csv-parser";
import Product from "../src/models/Product.js";
import User from "../src/models/User.js";
import Order from "../src/models/order.js";

dotenv.config();
const SOURCE_URL = "https://docs.google.com/spreadsheets/d/1PDCrg9nrpMWEctRRnQwP76dGUXc55-0qDMNHpF2Lksc/export?format=csv&gid=1062173009";
const MARKER = "raw-review-file-1PDCrg9nrpMWEctRRnQwP76dGUXc55-0qDMNHpF2Lksc-v1";
const EMAIL = /^\S+@\S+\.\S+$/;

const csvRows = async () => {
  const response = await fetch(SOURCE_URL);
  if (!response.ok) throw new Error(`Sheet download failed (${response.status})`);
  const rows = [];
  await new Promise(async (resolve, reject) => {
    Readable.from([Buffer.from(await response.arrayBuffer())]).pipe(csv()).on("data", (row) => rows.push(row)).on("end", resolve).on("error", reject);
  });
  return rows;
};
const validDate = (value) => { const date = new Date(value); return Number.isNaN(date.getTime()) ? null : date; };
const refreshMetrics = (product) => {
  const approved = product.customer_reviews.filter((review) => (review.status || "approved") === "approved");
  product.metrics.review_count = approved.length;
  product.metrics.average_rating = approved.length ? approved.reduce((sum, review) => sum + Number(review.rating || 0), 0) / approved.length : 0;
};

try {
  await mongoose.connect(process.env.MONGO_URI);
  const markers = mongoose.connection.db.collection("migration_markers");
  if (await markers.findOne({ key: MARKER })) throw new Error("This one-time review import has already run");
  const rows = (await csvRows()).map((row, index) => ({ row: index + 2, sku: String(row.SKU || "").trim(), productId: String(row["Product ID"] || "").trim(), name: String(row["Reviewer Name"] || "").trim(), rating: Number(row.Rating), comment: String(row["Review Text"] || "").trim(), email: String(row["Email (verified)"] || "").trim().toLowerCase(), date: validDate(row["Timestamp (IST)"]) }));
  const products = await Product.find({ $or: [{ product_id: { $in: [...new Set(rows.map((row) => row.productId).filter(Boolean))] } }, { sku: { $in: [...new Set(rows.map((row) => row.sku).filter(Boolean))] } }] }).select("+customer_reviews.reviewerEmail");
  const byId = new Map(products.map((product) => [product.product_id, product]));
  const bySku = new Map(products.map((product) => [product.sku, product]));
  const users = await User.find({ email: { $in: [...new Set(rows.map((row) => row.email).filter(Boolean))] } }).select("userId email").lean();
  const userByEmail = new Map(users.map((user) => [String(user.email).toLowerCase(), user]));
  const refs = products.flatMap((product) => [product.product_id, product._id.toString()]);
  const orders = users.length && refs.length ? await Order.find({ userId: { $in: users.map((user) => user.userId) }, paymentStatus: { $in: ["COD", "PAID"] }, "cartItems.productId": { $in: refs } }).select("userId cartItems.productId").lean() : [];
  const refToId = new Map(products.flatMap((product) => [[product.product_id, product.product_id], [product._id.toString(), product.product_id]]));
  const verified = new Set();
  for (const order of orders) for (const item of order.cartItems || []) { const productId = refToId.get(String(item.productId)); if (productId) verified.add(`${order.userId}:${productId}`); }
  const changed = new Set(), errors = [];
  let created = 0, updated = 0, verifiedPurchases = 0;
  for (const row of rows) {
    const product = byId.get(row.productId), skuProduct = bySku.get(row.sku);
    if (!row.productId || !row.sku || !row.name || !row.comment || !EMAIL.test(row.email) || !Number.isInteger(row.rating) || row.rating < 1 || row.rating > 5 || !row.date) { errors.push({ row: row.row, reason: "Invalid required review data" }); continue; }
    if (!product || !skuProduct || !product._id.equals(skuProduct._id)) { errors.push({ row: row.row, reason: "Product ID and SKU do not match" }); continue; }
    const user = userByEmail.get(row.email), verifiedPurchase = Boolean(user && verified.has(`${user.userId}:${product.product_id}`));
    const payload = { userId: user?.userId, name: row.name.slice(0, 120), reviewerEmail: row.email, rating: row.rating, comment: row.comment.slice(0, 2500), review_date: row.date, verifiedPurchase, status: "pending", imported: true, moderatedBy: "", moderatedAt: null };
    const existing = product.customer_reviews.find((review) => String(review.reviewerEmail || "").toLowerCase() === row.email || (user && review.userId === user.userId));
    if (existing) { Object.assign(existing, payload); updated += 1; } else { product.customer_reviews.push(payload); created += 1; }
    if (verifiedPurchase) verifiedPurchases += 1;
    changed.add(product);
  }
  for (const product of changed) { refreshMetrics(product); await product.save(); }
  const summary = { key: MARKER, source: SOURCE_URL, rawRows: rows.length, created, updated, rejected: errors.length, verifiedPurchases, errors: errors.slice(0, 100), completedAt: new Date() };
  await markers.insertOne(summary);
  console.log(JSON.stringify(summary));
} catch (error) { console.error(error.stack || error.message); process.exitCode = 1; }
finally { await mongoose.disconnect(); }
