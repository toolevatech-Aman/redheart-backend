// controllers/productController.js
import Product from "../models/Product.js";
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
      relationship,        // ✅ NEW
      page = 1,             // ✅ pagination
      limit = 10            // ✅ pagination
    } = req.query;

    let query = {};

    // ---------- Search ----------
    if (searchField) {
      query.$or = [
        { name: { $regex: searchField, $options: "i" } },
        { description: { $regex: searchField, $options: "i" } },
        { slug: { $regex: searchField, $options: "i" } },
        { "product_attributes.color": { $regex: searchField, $options: "i" } },
      ];
    }

    // ---------- Filters ----------
    if (color) query["product_attributes.color"] = color;
    if (subcategory_name) query["categorization.subcategory_name"] = subcategory_name;
    if (category_name) query["categorization.category_name"] = category_name;
    if (type) query["categorization.type"] = type;

    if (festival_tags)
      query["categorization.festival_tags"] = { $in: festival_tags.split(",") };

    if (occasion_tags)
      query["categorization.occasion_tags"] = { $in: occasion_tags.split(",") };

    if (relationship)
      query["categorization.relationship"] = { $in: relationship.split(",") }; // ✅ NEW

    // ---------- Pagination ----------
    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // ---------- Query ----------
    const products = await Product.find(query)
      .select(
        "product_id name slug sku quantity original_price selling_price short_summary media categorization"
      )
      .skip(skip)
      .limit(limitNumber);

    const total = await Product.countDocuments(query);

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
export const getProductById = async (req, res) => {
  try {
    const { product_id } = req.params;
    const product = await Product.findOne({ product_id }).select(
  "-costing_price -care_and_logistics.add_ons.costing_price -variations.costing_price"
);

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