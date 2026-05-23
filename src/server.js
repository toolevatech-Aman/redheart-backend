import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

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
import { citiesSitemap } from './controllers/sitemapController.js';
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

// Block search engines from indexing the backend API
app.get("/robots.txt", (req, res) => {
  res.type("text/plain").send("User-agent: *\nDisallow: /");
});

// Tell crawlers to never index any backend response
app.use((req, res, next) => {
  res.setHeader("X-Robots-Tag", "noindex, nofollow");
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/addOn", addOnRoutes);
app.use("/api/user", userRoutes);
app.use("/api/page-content", pageContentRoutes);
app.use('/api/orders', orderRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/bulk",     bulkRoutes);
app.use("/api/city",         cityPageRoutes);
app.use("/api/category-seo", categorySeoRoutes);
app.use("/api/category-config", categoryConfigRoutes);

// ── Sitemaps (public, no /api prefix) ────────────────────────────────────────
app.get("/sitemap_cities.xml", citiesSitemap);


// Connect DB
connectDB();

// AWS Elastic Beanstalk / local — start listening
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Vercel serverless export
export default app;
