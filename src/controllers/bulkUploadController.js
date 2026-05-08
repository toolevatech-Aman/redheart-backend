// bulkUploadController.js
import fs from "fs";
import path from "path";
import XLSX from "xlsx";
import csv from "csv-parser";
import slugify from "slugify";
import { v4 as uuidv4 } from "uuid";
import Product from "../models/Product.js";
import ImportJob from "../models/ImportJob.js";
import { ValidationEngine } from "../validators/validationEngine.js";
import { CATEGORY_SCHEMAS } from "../validators/categorySchemaEngine.js";

// ── Helpers ──────────────────────────────────────────────────────────────────

const parseBoolean = (val) => {
  if (val === undefined || val === null || String(val).trim() === "") return undefined;
  return ["true", "1", "yes"].includes(String(val).trim().toLowerCase());
};

const parseArray = (val, separator = "|") => {
  if (!val) return [];
  return String(val).split(separator).map(v => v.trim()).filter(Boolean);
};

const parseNumber = (val) => {
  const n = Number(val);
  return isNaN(n) ? undefined : n;
};

// Parse uploaded file (CSV or XLSX) → array of plain row objects
const parseUploadedFile = (filePath, originalName) => {
  return new Promise((resolve, reject) => {
    const ext = path.extname(originalName).toLowerCase();

    if (ext === ".xlsx" || ext === ".xls") {
      try {
        const wb   = XLSX.readFile(filePath);
        const ws   = wb.Sheets[wb.SheetNames[0]];
        // Start from row 1 (skip legend row), headers at row 2
        // SheetJS uses range; detect header row by reading first non-empty row
        const raw  = XLSX.utils.sheet_to_json(ws, { defval: "", raw: false });
        resolve(raw);
      } catch (e) {
        reject(new Error("Failed to parse XLSX: " + e.message));
      }
    } else if (ext === ".csv") {
      const rows = [];
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", row => rows.push(row))
        .on("end",  () => resolve(rows))
        .on("error", reject);
    } else {
      reject(new Error("Unsupported file type. Upload .csv or .xlsx"));
    }
  });
};

// Map a flat validated row → nested Product document
const mapRowToProduct = (row, category) => {
  const get = (key) => row[key.toLowerCase()] ?? row[key] ?? "";

  const product = {
    product_id:    get("product_id") || `BULK-${uuidv4().slice(0,8).toUpperCase()}`,
    name:          get("name"),
    sku:           String(get("sku")).trim().toUpperCase(),
    quantity:      parseNumber(get("quantity"))      ?? 0,
    costing_price: parseNumber(get("costing_price")) ?? 0,
    original_price:parseNumber(get("original_price"))?? 0,
    selling_price: parseNumber(get("selling_price")) ?? 0,
    description:   get("description"),
    short_summary: get("short_summary") || "",

    categorization: {
      category_name:    category,
      subcategory_name: get("categorization.subcategory_name"),
      type:             get("categorization.type"),
      occasion_tags:    parseArray(get("categorization.occasion_tags")),
      festival_tags:    parseArray(get("categorization.festival_tags")),
      relationship:     parseArray(get("categorization.relationship")),
    },

    product_attributes: {
      color:           get("product_attributes.color")           || undefined,
      product_content: parseArray(get("product_attributes.product_content")),
      stem_length_cm:  parseNumber(get("product_attributes.stem_length_cm")),
      fragrance_level: get("product_attributes.fragrance_level") || undefined,
      vase_life_days_min: parseNumber(get("product_attributes.vase_life_days_min")),
      origin:          get("product_attributes.origin")          || undefined,
    },

    media: {
      primary_image_url: get("media.primary_image_url"),
      gallery_images:    parseArray(get("media.gallery_images")),
    },

    care_and_logistics: {
      care_instructions: parseArray(get("care_and_logistics.care_instructions")),
      shipping_constraints: {
        requires_cold_chain:    parseBoolean(get("care_and_logistics.requires_cold_chain")) ?? false,
        max_delivery_days:      parseNumber(get("care_and_logistics.max_delivery_days")),
        regional_availability:  parseArray(get("care_and_logistics.regional_availability")),
      },
    },

    availability: {
      is_active:   parseBoolean(get("availability.is_active"))   ?? true,
      is_featured: parseBoolean(get("availability.is_featured")) ?? false,
    },
  };

  // Auto-generate slug
  product.slug = slugify(product.name, { lower: true, strict: true }) + "-" + product.sku.toLowerCase();

  // Variations (Cakes)
  const varName = get("variations.variant_name");
  if (varName) {
    product.variations = [{
      variant_id:    uuidv4().slice(0,8),
      variant_name:  varName,
      variant_sku:   get("variations.variant_sku") || product.sku + "-V1",
      quantity_in_bunch: parseNumber(get("variations.weight_kg")),
      original_price:    parseNumber(get("variations.original_price")) ?? product.original_price,
      selling_price:     parseNumber(get("variations.selling_price"))  ?? product.selling_price,
      inventory: { quantity_available: parseNumber(get("variations.quantity_available")) ?? product.quantity },
    }];
  }

  return product;
};

// ── STEP 1: Upload + Validate (returns preview, does NOT write to DB) ────────
export const uploadAndValidate = async (req, res) => {
  const { category } = req.params;
  const file = req.file;

  if (!file) return res.status(400).json({ error: "No file uploaded." });
  if (!CATEGORY_SCHEMAS[category]) return res.status(400).json({ error: `Unknown category: ${category}` });

  try {
    const rows = await parseUploadedFile(file.path, file.originalname);
    if (!rows.length) return res.status(422).json({ error: "File is empty or has no data rows." });

    // Header check
    const validator   = new ValidationEngine(category);
    const fileHeaders = Object.keys(rows[0]);
    const headerCheck = validator.validateHeaders(fileHeaders);

    if (!headerCheck.valid) {
      fs.unlinkSync(file.path);
      return res.status(422).json({
        error:   "Missing mandatory columns.",
        missing: headerCheck.missing,
        unknown: headerCheck.unknown,
      });
    }

    // Row validation
    const result = validator.validateRows(rows);

    // Persist job (valid rows stored for confirm step)
    const job = await ImportJob.create({
      category,
      uploadedBy:  req.user?._id,
      filename:    file.originalname,
      mode:        "upload",
      status:      "pending",
      totalRows:   result.summary.total,
      validCount:  result.summary.valid,
      invalidCount:result.summary.invalid,
      validRows:   result.valid.map(r => r.data),
      invalidRows: result.invalid,
    });

    // Clean up temp file
    fs.unlinkSync(file.path);

    return res.json({
      jobId:       job._id,
      summary:     result.summary,
      errors:      result.invalid.slice(0, 100), // first 100 errors for preview
      canProceed:  result.valid.length > 0,
    });
  } catch (err) {
    if (file?.path && fs.existsSync(file.path)) fs.unlinkSync(file.path);
    return res.status(500).json({ error: err.message });
  }
};

// ── STEP 2: Confirm → write valid rows to DB ─────────────────────────────────
export const confirmImport = async (req, res) => {
  const { jobId } = req.params;

  const job = await ImportJob.findById(jobId);
  if (!job)                      return res.status(404).json({ error: "Job not found." });
  if (job.status !== "pending")  return res.status(400).json({ error: `Job already ${job.status}.` });

  job.status = "processing";
  await job.save();

  try {
    const BATCH = 50;
    let inserted = 0, updated = 0, failed = 0;
    const failedRows = [];

    for (let i = 0; i < job.validRows.length; i += BATCH) {
      const batch = job.validRows.slice(i, i + BATCH);

      const ops = batch.map(row => {
        try {
          const doc = mapRowToProduct(row, job.category);
          return {
            updateOne: {
              filter: { sku: doc.sku },
              update: { $set: doc },
              upsert: true,
            },
          };
        } catch (e) {
          failed++;
          failedRows.push({ sku: row.sku, error: e.message });
          return null;
        }
      }).filter(Boolean);

      if (ops.length) {
        const bulkResult = await Product.bulkWrite(ops, { ordered: false });
        inserted += bulkResult.upsertedCount  || 0;
        updated  += bulkResult.modifiedCount  || 0;
      }
    }

    job.status         = "completed";
    job.insertedCount  = inserted;
    job.updatedCount   = updated;
    job.failedCount    = failed;
    job.processedCount = job.validRows.length;
    job.completedAt    = new Date();
    // Clear stored rows to save space
    job.validRows      = [];
    await job.save();

    return res.json({
      message:  "Import completed.",
      inserted, updated, failed,
      total:    job.processedCount,
    });
  } catch (err) {
    job.status       = "failed";
    job.errorMessage = err.message;
    await job.save();
    return res.status(500).json({ error: err.message });
  }
};

// ── GET import history for a category ────────────────────────────────────────
export const getImportHistory = async (req, res) => {
  const { category } = req.params;
  const page  = parseInt(req.query.page  || "1");
  const limit = parseInt(req.query.limit || "20");

  const query = category && category !== "all" ? { category } : {};
  const total = await ImportJob.countDocuments(query);
  const jobs  = await ImportJob.find(query)
    .select("-validRows -invalidRows")   // don't send large arrays
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  return res.json({ total, page, limit, jobs });
};

// ── Download error report for a job as XLSX ──────────────────────────────────
export const downloadErrorReport = async (req, res) => {
  const job = await ImportJob.findById(req.params.jobId).select("invalidRows filename category");
  if (!job) return res.status(404).json({ error: "Job not found." });

  const rows = (job.invalidRows || []).map(r => ({
    row_number: r.rowNum,
    sku:        r.data?.sku || "",
    name:       r.data?.name || "",
    errors:     r.errors.map(e => e.message).join(" | "),
  }));

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.book_append_sheet(wb, ws, "Errors");

  const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
  const filename = `error-report-${job.category}-${job._id}.xlsx`;

  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  return res.send(buffer);
};

// ── Download sample template ──────────────────────────────────────────────────
export const downloadTemplate = async (req, res) => {
  const { category } = req.params;
  const templatePath = path.resolve(`src/templates/${category.toLowerCase()}_upload_template.xlsx`);

  if (!fs.existsSync(templatePath)) {
    return res.status(404).json({ error: `Template for ${category} not found.` });
  }

  res.setHeader("Content-Disposition", `attachment; filename="${category.toLowerCase()}_upload_template.xlsx"`);
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  return res.sendFile(templatePath);
};
