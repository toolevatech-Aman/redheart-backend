// exportController.js
import XLSX from "xlsx";
import Product from "../models/Product.js";
import { CATEGORY_SCHEMAS } from "../validators/categorySchemaEngine.js";

// Flatten a nested product document back to a flat row object (mirrors upload template headers)
const flattenProduct = (product, columns) => {
  const row = {};

  const get = (obj, path) => {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : ""), obj);
  };

  for (const col of columns) {
    const raw = get(product, col.key);
    if (Array.isArray(raw)) {
      row[col.label] = raw.join(" | ");
    } else if (raw === true || raw === false) {
      row[col.label] = raw ? "TRUE" : "FALSE";
    } else {
      row[col.label] = raw ?? "";
    }
  }

  // Always include these root fields even if not in columns
  row["_id"]        = String(product._id || "");
  row["product_id"] = product.product_id || "";
  row["slug"]       = product.slug       || "";

  return row;
};

// ── Export products (all / filtered) ─────────────────────────────────────────
export const exportProducts = async (req, res) => {
  const { category } = req.params;
  const schema = CATEGORY_SCHEMAS[category];
  if (!schema) return res.status(400).json({ error: `Unknown category: ${category}` });

  const {
    format = "xlsx",        // "xlsx" | "csv"
    subcategory_name,
    type,
    is_active,
    is_featured,
    search,
  } = req.query;

  // Build DB query
  const query = { "categorization.category_name": category };
  if (subcategory_name) query["categorization.subcategory_name"] = subcategory_name;
  if (type)             query["categorization.type"]             = type;
  if (is_active  !== undefined) query["availability.is_active"]   = is_active  === "true";
  if (is_featured !== undefined) query["availability.is_featured"] = is_featured === "true";
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { sku:  { $regex: search, $options: "i" } },
    ];
  }

  const products = await Product.find(query).lean();
  if (!products.length) return res.status(404).json({ error: "No products found for the given filters." });

  const columns = schema.columns;
  const rows    = products.map(p => flattenProduct(p, columns));

  const filename = `${category.toLowerCase()}-export-${Date.now()}`;

  if (format === "csv") {
    const headers  = Object.keys(rows[0]);
    const csvLines = [
      headers.join(","),
      ...rows.map(r => headers.map(h => `"${String(r[h] || "").replace(/"/g, '""')}"`).join(",")),
    ];
    res.setHeader("Content-Disposition", `attachment; filename="${filename}.csv"`);
    res.setHeader("Content-Type", "text/csv");
    return res.send(csvLines.join("\n"));
  }

  // XLSX export
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows);

  // Style header row (column widths)
  const colWidths = Object.keys(rows[0]).map(k => ({ wch: Math.max(k.length + 4, 18) }));
  ws["!cols"] = colWidths;

  XLSX.utils.book_append_sheet(wb, ws, `${category} Products`);
  const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

  res.setHeader("Content-Disposition", `attachment; filename="${filename}.xlsx"`);
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  return res.send(buffer);
};

// ── Export for Edit: same as export but labelled separately ──────────────────
export const exportForEdit = async (req, res) => {
  req.query.format = req.query.format || "xlsx";
  return exportProducts(req, res);
};

// ── Summary stats per category ────────────────────────────────────────────────
export const getCategoryStats = async (req, res) => {
  const categories = ["Flowers", "Cakes", "Plants"];
  const stats = await Promise.all(
    categories.map(async (cat) => {
      const total    = await Product.countDocuments({ "categorization.category_name": cat });
      const active   = await Product.countDocuments({ "categorization.category_name": cat, "availability.is_active": true });
      const featured = await Product.countDocuments({ "categorization.category_name": cat, "availability.is_featured": true });
      return { category: cat, total, active, featured };
    })
  );
  return res.json(stats);
};
