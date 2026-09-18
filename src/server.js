import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import addOnRoutes from "./routes/addOnRoutes.js"; 
import userRoutes from "./routes/userRoutes.js";
import pageContentRoutes from "./routes/pageContentRoutes.js";
import orderRoutes from './routes/orderRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import bulkRoutes from './routes/bulkRoutes.js';
import cityPageRoutes from './routes/cityPageRoutes.js';
import categorySeoRoutes from './routes/categorySeoRoutes.js';
import categoryConfigRoutes from './routes/categoryConfigRoutes.js';
import valentineRoutes from './routes/valentineRoutes.js';
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import shayariSubmissionRoutes from './routes/shayariSubmissionRoutes.js';
import subscriberRoutes from './routes/subscriberRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import vendorRoutes from './routes/vendorRoutes.js';
import couponRoutes from './routes/couponRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import { razorpayWebhook, runAbandonmentEmails } from './controllers/valentineController.js';
import { razorpayOrderWebhook } from './controllers/orderController.js';
import { razorpaySubscriptionWebhook } from './controllers/subscriptionController.js';
import { citiesSitemap } from './controllers/sitemapController.js';
import { openaiProductFeed } from './controllers/openaiFeedController.js';
import { refreshOpenAIProductFeedCache } from './utils/openaiProductFeed.js';
import { runDailyIndexNowSubmit } from './utils/dailyIndexNowSubmit.js';
import { runDailyContentDrop } from './utils/dailyContentDrop.js';
import { runDailyBlogPublish } from './utils/dailyBlogPublish.js';
import { runVendorReconciliation } from './utils/reconcileVendorStats.js';
const app = express();

// Razorpay webhooks — must receive raw body BEFORE express.json parses it
app.post(
  "/api/valentine/webhook",
  express.raw({ type: "application/json" }),
  (req, res, next) => { req.rawBody = req.body.toString("utf8"); next(); },
  razorpayWebhook
);
app.post(
  "/api/orders/webhook",
  express.raw({ type: "application/json" }),
  (req, res, next) => { req.rawBody = req.body.toString("utf8"); next(); },
  razorpayOrderWebhook
);
app.post(
  "/api/subscriptions/webhook",
  express.raw({ type: "application/json" }),
  (req, res, next) => { req.rawBody = req.body.toString("utf8"); next(); },
  razorpaySubscriptionWebhook
);

// Middlewares
app.use(cors());
app.use(compression());
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

// Block search engines from indexing the backend API
app.get("/robots.txt", (req, res) => {
  // Blanket-disallow for the backend generally (this is an API, not a site
  // meant for search indexing) — with an explicit exception for the OpenAI
  // Commerce feed, since its "Hosted URL" fetcher respects robots.txt and
  // was refusing to connect ("Connection failed") while the blanket
  // Disallow: / covered it too.
  res.type("text/plain").send(
    "User-agent: *\nDisallow: /\nAllow: /openai-product-feed.jsonl"
  );
});

// Tell crawlers to never index any backend response — except the OpenAI
// product feed, which needs to be fetchable by their Hosted URL connector;
// "noindex, nofollow" is a search-indexing signal, not a fetch-permission
// one, but a strict robots-respecting fetcher could plausibly treat it as
// one, so it's excluded here the same way robots.txt already carves an
// Allow for this one path.
app.use((req, res, next) => {
  if (req.path !== "/openai-product-feed.jsonl") {
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
  }
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/addOn", addOnRoutes);
app.use("/api/user", userRoutes);
app.use("/api/page-content", pageContentRoutes);
app.use('/api/orders', orderRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/bulk",     bulkRoutes);
app.use("/api/city",         cityPageRoutes);
app.use("/api/category-seo", categorySeoRoutes);
app.use("/api/category-config", categoryConfigRoutes);
app.use("/api/valentine",       valentineRoutes);
app.use("/api/subscriptions",   subscriptionRoutes);
app.use("/api/cart",            cartRoutes);
app.use("/api/shayari-submissions", shayariSubmissionRoutes);
app.use("/api/subscribers",     subscriberRoutes);
app.use("/api/analytics",       analyticsRoutes);
app.use("/api/vendors",         vendorRoutes);
app.use("/api/coupons",         couponRoutes);

// ── Sitemaps (public, no /api prefix) ────────────────────────────────────────
app.get("/sitemap_cities.xml", citiesSitemap);
app.get("/openai-product-feed.jsonl", openaiProductFeed);


// Connect DB
connectDB();

// Port for Beanstalk
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Hourly abandonment recovery — fire once on startup (offset by 5 min) then every hour
setTimeout(() => {
  runAbandonmentEmails().then(r => console.log("[abandonment]", r)).catch(() => {});
  setInterval(() => {
    runAbandonmentEmails().then(r => console.log("[abandonment]", r)).catch(() => {});
  }, 60 * 60 * 1000);
}, 5 * 60 * 1000);

// Daily IndexNow rotation — pushes the next 100 sitemap URLs to Bing each day,
// cycling through the full sitemap so every page gets periodically re-submitted.
setTimeout(() => {
  runDailyIndexNowSubmit().then(r => console.log("[indexnow-daily]", r)).catch(err => console.error("[indexnow-daily]", err.message));
  setInterval(() => {
    runDailyIndexNowSubmit().then(r => console.log("[indexnow-daily]", r)).catch(err => console.error("[indexnow-daily]", err.message));
  }, 24 * 60 * 60 * 1000);
}, 10 * 60 * 1000);

// Warm the OpenAI product-feed cache immediately (no startup delay, unlike
// the other jobs below) — the live route serves from this cache rather than
// querying the full catalog per-request, and it needs to already be warm
// the moment anything (a fetcher, a person testing the URL) hits it.
refreshOpenAIProductFeedCache()
  .then(r => console.log("[openai-feed] cache warmed:", r.rowCount, "rows"))
  .catch(err => console.error("[openai-feed] initial warm-up failed:", err.message));
setInterval(() => {
  refreshOpenAIProductFeedCache()
    .then(r => console.log("[openai-feed] cache refreshed:", r.rowCount, "rows"))
    .catch(err => console.error("[openai-feed] refresh failed:", err.message));
}, 60 * 60 * 1000);

// Daily content drop — 2 new AI-written shayari/quotes per category (20
// categories), inserted as pre-approved submissions so they appear via the
// same path as approved user submissions. See utils/dailyContentDrop.js.
setTimeout(() => {
  runDailyContentDrop().then(r => console.log("[content-drop]", r)).catch(err => console.error("[content-drop]", err.message));
  setInterval(() => {
    runDailyContentDrop().then(r => console.log("[content-drop]", r)).catch(err => console.error("[content-drop]", err.message));
  }, 24 * 60 * 60 * 1000);
}, 12 * 60 * 1000);

// Daily blog publish — releases the next 3 draft posts per product vertical
// (9/day total: Flowers→Trishna, Cakes→Pallavi, Plants→Maya), seeded ahead
// of time by scripts/import-blog-source.mjs. See utils/dailyBlogPublish.js.
setTimeout(() => {
  runDailyBlogPublish().then(r => console.log("[blog-publish]", r)).catch(err => console.error("[blog-publish]", err.message));
  setInterval(() => {
    runDailyBlogPublish().then(r => console.log("[blog-publish]", r)).catch(err => console.error("[blog-publish]", err.message));
  }, 24 * 60 * 60 * 1000);
}, 20 * 60 * 1000);

// Daily vendor stats reconciliation — rebuilds Vendor.stats/PinCodeStat from
// actual Order data so drift from reassigning vendors (the old vendor's
// stats never auto-decrement) gets corrected automatically instead of
// needing a manual script run.
setTimeout(() => {
  runVendorReconciliation().then(r => console.log("[vendor-reconcile]", r)).catch(err => console.error("[vendor-reconcile]", err.message));
  setInterval(() => {
    runVendorReconciliation().then(r => console.log("[vendor-reconcile]", r)).catch(err => console.error("[vendor-reconcile]", err.message));
  }, 24 * 60 * 60 * 1000);
}, 15 * 60 * 1000);
