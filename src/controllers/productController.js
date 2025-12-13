// controllers/productController.js
import Product from "../models/Product.js";
import fs from "fs";
import csv from "csv-parser";
// ---------------- PUBLIC ----------------

// Get all products with search and filters
export const getProducts = async (req, res) => {
  try {
    const { searchField, color, subcategory_name, category_name, festival_tags, occasion_tags, type } = req.query;

    let query = {};

    if (searchField) {
      query.$or = [
        { name: { $regex: searchField, $options: "i" } },
        { description: { $regex: searchField, $options: "i" } },
        { slug: { $regex: searchField, $options: "i" } },
        { "product_attributes.color": { $regex: searchField, $options: "i" } }
      ];
    }

    if (color) query["product_attributes.color"] = color;
    if (subcategory_name) query["categorization.subcategory_name"] = subcategory_name;
    if (category_name) query["categorization.category_name"] = category_name;
    if (type) query["categorization.type"] = type;
    if (festival_tags) query["categorization.festival_tags"] = { $in: festival_tags.split(",") };
    if (occasion_tags) query["categorization.occasion_tags"] = { $in: occasion_tags.split(",") };

    const products = await Product.find(query).select("product_id name slug sku quantity original_price selling_price description short_summary media");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single product by product_id
export const getProductById = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findOne({ product_id });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update review for a product
export const updateReview = async (req, res) => {
  try {
    const { product_id } = req.params;
    const { rating, comment } = req.body;

    const product = await Product.findOne({ product_id });
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.customer_reviews.push({
      rating,
      comment,
      review_date: new Date()
    });

    // Recalculate metrics
    const totalRating = product.customer_reviews.reduce((acc, r) => acc + r.rating, 0);
    product.metrics.review_count = product.customer_reviews.length;
    product.metrics.average_rating = totalRating / product.customer_reviews.length;

    await product.save();

    res.json({ message: "Review added", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
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

    res.json({ message: "Product updated", product });
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

// ---------- controller ----------
export const importProductsFromCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "CSV file is required" });
    }

    const filePath = req.file.path;
    const rows = [];

    fs.createReadStream(filePath)
      .pipe(csv())
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

            // ---------- build product ----------
            const product = {
              product_id: row.product_id.trim(),
              slug: row.slug.trim().toLowerCase(),
              name: row.name,
              sku: row.sku,
              quantity: toNumber(row.quantity),
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
              },

              product_attributes: {
                color: row["product_attributes.color"],
                stem_length_cm: toNumber(row["product_attributes.stem_length_cm"]),
                fragrance_level: row["product_attributes.fragrance_level"],
                vase_life_days_min: toNumber(row["product_attributes.vase_life_days_min"]),
                origin: row["product_attributes.origin"],
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
                add_ons: row["care_and_logistics.add_ons.name"]
                  ? [{
                      name: row["care_and_logistics.add_ons.name"],
                      product_id: row["care_and_logistics.add_ons.product_id"],
                      quantity: toNumber(row["care_and_logistics.add_ons.quantity"]),
                      original_price: toNumber(row["care_and_logistics.add_ons.original_price"]),
                      selling_price: toNumber(row["care_and_logistics.add_ons.selling_price"]),
                      image_url: row["care_and_logistics.add_ons.image_url"],
                    }]
                  : [],
              },

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