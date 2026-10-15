// Admin "Product Hub" endpoints: search every product, open one, edit it safely.
// Mounted in routes/productRoutes.js behind auth + the "category" access level.
import Product from "../models/Product.js";
import User from "../models/User.js";
import { invalidateCache } from "../middlewares/cacheMiddleware.js";
import { revalidateTags } from "../utils/revalidate.js";
import { buildProductUpdate, ProductEditError, HISTORY_LIMIT } from "../utils/productAdminLogic.js";

const LOW_STOCK = 5;
const esc = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// GET /products/admin/list?q=&category_name=&subcategory_name=&status=&sort=&page=&limit=
// Unlike the public listing this includes inactive products and is never cached.
export const adminListProducts = async (req, res) => {
  try {
    const { q = "", category_name = "", subcategory_name = "", status = "all", sort = "updated" } = req.query;
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 25));

    const filter = {};
    const term = String(q).trim().slice(0, 100);
    if (term) {
      const rx = new RegExp(esc(term), "i");
      filter.$or = [{ name: rx }, { product_id: rx }, { sku: rx }, { slug: rx }, { "variations.variant_sku": rx }];
    }
    if (category_name) filter["categorization.category_name"] = String(category_name);
    if (subcategory_name) filter["categorization.subcategory_name"] = String(subcategory_name);
    if (status === "active") filter["availability.is_active"] = { $ne: false };
    else if (status === "inactive") filter["availability.is_active"] = false;
    else if (status === "out_of_stock") filter.quantity = { $lte: 0 };
    else if (status === "low_stock") filter.quantity = { $gt: 0, $lte: LOW_STOCK };
    else if (status === "featured") filter["availability.is_featured"] = true;

    const sorts = {
      updated: { updatedAt: -1 }, name: { name: 1 }, price_asc: { selling_price: 1 }, price_desc: { selling_price: -1 },
      stock_asc: { quantity: 1 }, created: { createdAt: -1 },
    };
    const [rows, total, facetRows] = await Promise.all([
      Product.find(filter).sort(sorts[sort] || sorts.updated).skip((page - 1) * limit).limit(limit)
        .select("product_id name slug sku quantity costing_price original_price selling_price categorization.category_name categorization.subcategory_name media.primary_image_url availability variations._id updatedAt")
        .lean(),
      Product.countDocuments(filter),
      Product.aggregate([{ $group: { _id: { c: "$categorization.category_name", s: "$categorization.subcategory_name" }, n: { $sum: 1 } } }]),
    ]);

    const facets = {};
    for (const f of facetRows) {
      const c = f._id.c || "(none)"; const s = (f._id.s || "").trim();
      facets[c] = facets[c] || { count: 0, subcategories: {} };
      facets[c].count += f.n; if (s) facets[c].subcategories[s] = (facets[c].subcategories[s] || 0) + f.n;
    }
    res.json({
      success: true, total, page, pages: Math.max(1, Math.ceil(total / limit)), limit, lowStockThreshold: LOW_STOCK, facets,
      products: rows.map((p) => ({
        product_id: p.product_id, name: p.name, slug: p.slug, sku: p.sku, stock: p.quantity,
        costing_price: p.costing_price, original_price: p.original_price, selling_price: p.selling_price,
        category_name: p.categorization?.category_name || "", subcategory_name: (p.categorization?.subcategory_name || "").trim(),
        image: p.media?.primary_image_url || "", is_active: p.availability?.is_active !== false, is_featured: !!p.availability?.is_featured,
        variations_count: (p.variations || []).length, updatedAt: p.updatedAt,
      })),
    });
  } catch (err) {
    console.error("adminListProducts:", err.message);
    res.status(500).json({ success: false, message: "Could not load products" });
  }
};

// GET /products/admin/:product_id  — the full, uncached product for the editor.
export const adminGetProduct = async (req, res) => {
  try {
    const p = await Product.findOne({ product_id: req.params.product_id }).select("-customer_reviews").lean();
    if (!p) return res.status(404).json({ success: false, message: "Product not found" });
    p.edit_history = (p.edit_history || []).slice(-10).reverse();
    res.json({ success: true, product: p });
  } catch (err) {
    console.error("adminGetProduct:", err.message);
    res.status(500).json({ success: false, message: "Could not load the product" });
  }
};

async function editorName(req) {
  try {
    const u = await User.findOne({ userId: req.user?.userId }).select("name email phone").lean();
    return u?.name || u?.email || u?.phone || String(req.user?.userId || "admin");
  } catch { return String(req.user?.userId || "admin"); }
}

// PATCH /products/admin/:product_id   body: any subset of the editable sections (see productAdminLogic.js)
//   extra flag: confirmUrlChange=true is required when the slug or SKU changes (they form the product's web address).
export const adminUpdateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ product_id: req.params.product_id });
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    const before = product.toObject();

    let built;
    try { built = buildProductUpdate(before, req.body); }
    catch (e) { if (e instanceof ProductEditError) return res.status(e.status).json({ success: false, message: e.message }); throw e; }
    const { set, changes, warnings } = built;

    if (!changes.length) return res.json({ success: true, unchanged: true, message: "Nothing changed", changes: [], warnings, product: await fresh(product.product_id) });

    const urlChanges = (set.slug !== undefined && set.slug !== before.slug) || (set.sku !== undefined && set.sku !== before.sku);
    if (urlChanges && req.body.confirmUrlChange !== true) {
      return res.status(409).json({ success: false, needsConfirm: "url", message: "Changing the slug or SKU changes this product's web address. Old links and Google results will stop working. Confirm to continue." });
    }
    if (set.slug !== undefined && set.slug !== before.slug) {
      const clash = await Product.exists({ slug: set.slug, _id: { $ne: product._id } });
      if (clash) return res.status(409).json({ success: false, message: "Another product already uses that slug" });
    }

    for (const [path, value] of Object.entries(set)) product.set(path, value);
    const by = await editorName(req);
    product.edit_history = [...(product.edit_history || []).map((h) => h.toObject?.() ?? h), { at: new Date(), by, changes }].slice(-HISTORY_LIMIT);
    await product.save();

    const slugs = [...new Set([before.slug, product.slug])];
    invalidateCache(`/api/products/${product.product_id}`, ...slugs.map((s) => `/api/products/slug/${s}`), "/api/products?", "/api/products/all-slugs");
    revalidateTags(slugs.map((s) => `product-${s}`));
    console.log(`[product-hub] ${product.product_id} edited by ${by}: ${changes.map((c) => c.field).join(", ")}`);
    res.json({ success: true, message: "Saved", changes, warnings, product: await fresh(product.product_id) });
  } catch (err) {
    if (err?.name === "ValidationError") return res.status(400).json({ success: false, message: Object.values(err.errors).map((e) => e.message).join("; ") });
    if (err?.code === 11000) return res.status(409).json({ success: false, message: "That slug is already used by another product" });
    console.error("adminUpdateProduct:", err);
    res.status(500).json({ success: false, message: "Could not save the product" });
  }
};

async function fresh(product_id) {
  const p = await Product.findOne({ product_id }).select("-customer_reviews").lean();
  if (p) p.edit_history = (p.edit_history || []).slice(-10).reverse();
  return p;
}
