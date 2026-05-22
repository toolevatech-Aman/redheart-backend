// categoryConfigController.js
import XLSX from "xlsx";
import CategoryConfig from "../models/CategoryConfig.js";
import CityPage from "../models/CityPage.js";

// ── Default cities list ───────────────────────────────────────────────────────
const DEFAULT_CITIES = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
  "Lucknow", "Kanpur", "Nagpur", "Patna", "Indore",
  "Thane", "Bhopal", "Visakhapatnam", "Vadodara", "Firozabad",
  "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut",
  "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad",
];

// ── Slug helper ───────────────────────────────────────────────────────────────
function toSlug(city) {
  return city
    .toLowerCase()
    .replace(/[^\x00-\x7F]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/ +/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toProperCase(city) {
  return city
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

// ── Replace template placeholders ────────────────────────────────────────────
function applyTemplate(template = "", vars = {}) {
  let result = template;
  for (const [key, val] of Object.entries(vars)) {
    result = result.replaceAll(`{${key}}`, val);
  }
  return result;
}

// ── Controllers ───────────────────────────────────────────────────────────────

/**
 * GET /api/category-config
 * Public — list all category configs.
 */
export async function listConfigs(req, res) {
  try {
    const configs = await CategoryConfig.find().sort({ createdAt: -1 });
    return res.json(configs);
  } catch (err) {
    console.error("listConfigs error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * GET /api/category-config/:name
 * Public — get one config by name.
 */
export async function getConfig(req, res) {
  try {
    const config = await CategoryConfig.findOne({ name: req.params.name });
    if (!config) return res.status(404).json({ message: "Config not found" });
    return res.json(config);
  } catch (err) {
    console.error("getConfig error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * POST /api/category-config
 * Admin — create a new category config.
 */
export async function createConfig(req, res) {
  try {
    const config = await CategoryConfig.create(req.body);
    return res.status(201).json(config);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "A config with this name or slug already exists." });
    }
    console.error("createConfig error:", err);
    return res.status(400).json({ message: err.message });
  }
}

/**
 * PUT /api/category-config/:name
 * Admin — update a config by name.
 */
export async function updateConfig(req, res) {
  try {
    const config = await CategoryConfig.findOneAndUpdate(
      { name: req.params.name },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!config) return res.status(404).json({ message: "Config not found" });
    return res.json(config);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Slug or name conflict with another config." });
    }
    console.error("updateConfig error:", err);
    return res.status(400).json({ message: err.message });
  }
}

/**
 * DELETE /api/category-config/:name
 * Admin — delete a config by name.
 */
export async function deleteConfig(req, res) {
  try {
    const config = await CategoryConfig.findOneAndDelete({ name: req.params.name });
    if (!config) return res.status(404).json({ message: "Config not found" });
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("deleteConfig error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}

/**
 * POST /api/category-config/:name/generate-cities
 * Admin — generate city pages using the config's SEO templates.
 * Body (optional): { cityNames: ["Delhi", "Mumbai", ...] }
 */
export async function generateCityPages(req, res) {
  try {
    const config = await CategoryConfig.findOne({ name: req.params.name });
    if (!config) return res.status(404).json({ message: "Config not found" });

    const cityNames = Array.isArray(req.body?.cityNames) && req.body.cityNames.length > 0
      ? req.body.cityNames
      : DEFAULT_CITIES;

    const cityPage  = config.seo?.city_page || {};
    const cityFaqs  = config.seo?.city_faqs || [];
    const serviceLabel = config.seo?.service_label || config.name;

    const ops = cityNames.map((rawCity) => {
      const proper = toProperCase(String(rawCity).trim());
      const slug   = toSlug(proper);
      const vars   = {
        city:          proper,
        category:      config.name,
        service_label: serviceLabel,
      };

      const doc = {
        category:        config.name,
        cityName:        proper,
        slug,
        url:             `/${config.slug}/${slug}`,
        metaTitle:       applyTemplate(cityPage.title_template, vars),
        metaDescription: applyTemplate(cityPage.description_template, vars),
        h1:              applyTemplate(cityPage.h1_template, vars),
        canonicalUrl:    `https://www.redheart.in/${config.slug}/${slug}`,
        metaKeyword:     applyTemplate(cityPage.keywords_template, vars),
        breadcrumb: [
          { label: "Home",       url: "/" },
          { label: config.name,  url: `/${config.slug}` },
          { label: applyTemplate(cityPage.breadcrumb_last_template || proper, vars), url: `/${config.slug}/${slug}` },
        ],
        footerContent: applyTemplate(cityPage.footer_content_template, vars),
        faqs: cityFaqs.map((f) => ({
          question: applyTemplate(f.question_template, vars),
          answer:   applyTemplate(f.answer_template, vars),
        })),
        isActive: true,
      };

      return {
        updateOne: {
          filter: { category: config.name, slug },
          update: { $set: doc },
          upsert: true,
        },
      };
    });

    const result = await CityPage.bulkWrite(ops, { ordered: false });

    const generated = (result.upsertedCount || 0) + (result.modifiedCount || 0);
    const skipped   = cityNames.length - generated;

    return res.json({
      generated,
      skipped,
      total: cityNames.length,
    });
  } catch (err) {
    console.error("generateCityPages error:", err);
    return res.status(500).json({ message: err.message });
  }
}

/**
 * GET /api/category-config/:name/template
 * Admin — download an XLSX upload template for the category.
 */
export async function downloadTemplate(req, res) {
  try {
    const config = await CategoryConfig.findOne({ name: req.params.name });
    if (!config) return res.status(404).json({ message: "Config not found" });

    const columns = config.columns || [];

    // Header row = column keys
    const headers = columns.map((c) => c.key);
    // Example row = example values
    const examples = columns.map((c) => c.example || "");

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([headers, examples]);
    XLSX.utils.book_append_sheet(wb, ws, "Template");

    const buffer   = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
    const filename = `${config.name.toLowerCase().replace(/\s+/g, "_")}_upload_template.xlsx`;

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    return res.send(buffer);
  } catch (err) {
    console.error("downloadTemplate error:", err);
    return res.status(500).json({ message: err.message });
  }
}
