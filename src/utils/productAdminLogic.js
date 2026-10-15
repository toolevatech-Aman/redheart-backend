// Rules for editing a product from the admin "Product Hub". Pure functions, no database access,
// so the validation and the change log can be tested on their own.
//
// Why this exists instead of the old PUT /products/:id (Object.assign of the whole body):
//  - it only accepts fields an admin is meant to change (never reviews, ratings or order counts),
//  - it merges nested sections instead of replacing them (sending one image must not wipe the gallery),
//  - it keeps the _id of existing variants and add-ons (carts, orders and pins refer to them),
//  - it validates numbers and text, and reports exactly what changed.

export class ProductEditError extends Error {
  constructor(message, status = 400) { super(message); this.name = "ProductEditError"; this.status = status; }
}
const bad = (m) => { throw new ProductEditError(m); };

const has = (o, k) => o && Object.prototype.hasOwnProperty.call(o, k);
const clip = (v, max) => String(v ?? "").trim().slice(0, max);

function text(v, label, { max = 200, required = false } = {}) {
  const s = clip(v, max);
  if (required && !s) bad(`${label} can't be empty`);
  return s;
}
function money(v, label, { required = true, allowZero = true } = {}) {
  if (v === "" || v === null || v === undefined) { if (required) bad(`${label} is required`); return undefined; }
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0 || n > 10000000) bad(`${label} must be a number between 0 and 1,00,00,000`);
  if (!allowZero && n === 0) bad(`${label} must be more than zero`);
  return Math.round(n * 100) / 100;
}
function whole(v, label, { min = 0, max = 100000, required = false } = {}) {
  if (v === "" || v === null || v === undefined) { if (required) bad(`${label} is required`); return undefined; }
  const n = Number(v);
  if (!Number.isInteger(n) || n < min || n > max) bad(`${label} must be a whole number between ${min} and ${max}`);
  return n;
}
function list(v, label, { max = 40, each = 200 } = {}) {
  if (!Array.isArray(v)) bad(`${label} must be a list`);
  const out = [...new Set(v.map((x) => clip(x, each)).filter(Boolean))];
  if (out.length > max) bad(`${label} can have at most ${max} entries`);
  return out;
}
function url(v, label, { required = false } = {}) {
  const s = clip(v, 2000);
  if (!s) { if (required) bad(`${label} is required`); return ""; }
  if (!/^https?:\/\//i.test(s)) bad(`${label} must be a full web address starting with http:// or https://`);
  return s;
}

export const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export const DELIVERY_TYPES = ["same_day", "courier"];

// Variations / add-ons: keep the _id of rows that already exist (matched by _id) so nothing that
// points at them (cart lines, orders, manual orders) breaks. New rows get a fresh _id from mongoose.
function rows(input, existing, label, max, build) {
  if (!Array.isArray(input)) bad(`${label} must be a list`);
  if (input.length > max) bad(`${label} can have at most ${max} rows`);
  const known = new Map((existing || []).map((r) => [String(r._id), r]));
  return input.map((r, i) => {
    if (r && r._id && !known.has(String(r._id))) bad(`${label} row ${i + 1} refers to a row that no longer exists. Reload the product and try again.`);
    const out = build(r || {}, `${label} row ${i + 1}`);
    if (r && r._id) out._id = known.get(String(r._id))._id;
    return out;
  });
}

const buildVariation = (r, where) => {
  const original = money(r.original_price, `${where}: original price`);
  const selling = money(r.selling_price, `${where}: selling price`, { allowZero: false });
  const out = {
    variant_id: text(r.variant_id, `${where}: variant id`, { max: 80 }),
    variant_sku: text(r.variant_sku, `${where}: SKU`, { max: 80 }),
    variant_name: text(r.variant_name, `${where}: name`, { max: 120, required: true }),
    quantity_in_bunch: whole(r.quantity_in_bunch, `${where}: quantity in bunch`),
    currency: text(r.currency || "INR", `${where}: currency`, { max: 6 }) || "INR",
    costing_price: money(r.costing_price, `${where}: costing price`),
    original_price: original,
    selling_price: selling,
    discount_percentage: original > 0 && selling < original ? Math.round(((original - selling) / original) * 100) : 0,
    inventory: {
      quantity_available: whole(r.inventory?.quantity_available ?? r.quantity_available, `${where}: stock`, { required: false }) ?? 0,
      reorder_point: whole(r.inventory?.reorder_point ?? r.reorder_point, `${where}: reorder point`) ?? 0,
    },
    image_url: url(r.image_url, `${where}: image`),
  };
  return out;
};

const buildAddOn = (r, where) => ({
  name: text(r.name, `${where}: name`, { max: 120, required: true }),
  product_id: text(r.product_id, `${where}: product id`, { max: 80 }),
  quantity: whole(r.quantity, `${where}: quantity`) ?? 1,
  costing_price: money(r.costing_price, `${where}: costing price`),
  original_price: money(r.original_price, `${where}: original price`),
  selling_price: money(r.selling_price, `${where}: selling price`),
  image_url: url(r.image_url, `${where}: image`),
});

// Builds the `$set` for a partial edit. `product` is the current plain object, `input` the request body.
// Returns { set, changes, warnings }. Throws ProductEditError for anything invalid.
export function buildProductUpdate(product, input) {
  if (!input || typeof input !== "object") bad("Nothing to update");
  const set = {};
  const warnings = [];

  // ---- basics
  if (has(input, "name")) set.name = text(input.name, "Product name", { max: 200, required: true });
  if (has(input, "slug")) {
    const s = clip(input.slug, 200).toLowerCase();
    if (!SLUG_RE.test(s)) bad("The page address (slug) can only use lowercase letters, numbers and single hyphens");
    set.slug = s;
  }
  if (has(input, "sku")) set.sku = text(input.sku, "SKU", { max: 80, required: true });
  if (has(input, "quantity")) set.quantity = whole(input.quantity, "Stock quantity", { required: true });
  if (has(input, "costing_price")) set.costing_price = money(input.costing_price, "Costing price");
  if (has(input, "original_price")) set.original_price = money(input.original_price, "Original (MRP) price");
  if (has(input, "selling_price")) set.selling_price = money(input.selling_price, "Selling price", { allowZero: false });
  if (has(input, "description")) set.description = text(input.description, "Description", { max: 20000, required: true });
  if (has(input, "short_summary")) set.short_summary = text(input.short_summary, "Short summary", { max: 600 });

  // ---- categorisation (the category itself is not editable here: moving a product between
  // categories changes its URLs and page pins, so it stays a deliberate, separate job)
  const c = input.categorization;
  if (c) {
    if (has(c, "subcategory_name")) set["categorization.subcategory_name"] = text(c.subcategory_name, "Subcategory", { max: 80 });
    if (has(c, "type")) set["categorization.type"] = text(c.type, "Type", { max: 80 });
    if (has(c, "festival_tags")) set["categorization.festival_tags"] = list(c.festival_tags, "Festival tags", { max: 30, each: 60 });
    if (has(c, "occasion_tags")) set["categorization.occasion_tags"] = list(c.occasion_tags, "Occasion tags", { max: 30, each: 60 });
    if (has(c, "relationship")) set["categorization.relationship"] = list(c.relationship, "Relationship tags", { max: 30, each: 60 });
  }

  // ---- attributes
  const a = input.product_attributes;
  if (a) {
    if (has(a, "color")) set["product_attributes.color"] = text(a.color, "Colour", { max: 80 });
    if (has(a, "product_content")) set["product_attributes.product_content"] = list(a.product_content, "What's included", { max: 40, each: 200 });
    if (has(a, "stem_length_cm")) set["product_attributes.stem_length_cm"] = whole(a.stem_length_cm, "Stem length", { max: 500 });
    if (has(a, "fragrance_level")) set["product_attributes.fragrance_level"] = text(a.fragrance_level, "Fragrance level", { max: 60 });
    if (has(a, "vase_life_days_min")) set["product_attributes.vase_life_days_min"] = whole(a.vase_life_days_min, "Vase life", { max: 365 });
    if (has(a, "origin")) set["product_attributes.origin"] = text(a.origin, "Origin", { max: 80 });
    if (has(a, "available_cities")) set["product_attributes.available_cities"] = text(a.available_cities, "Available cities", { max: 400, required: true });
    if (has(a, "delivery_type")) {
      if (!DELIVERY_TYPES.includes(a.delivery_type)) bad("Delivery type must be same-day or courier");
      set["product_attributes.delivery_type"] = a.delivery_type;
    }
  }

  // ---- images (each part merged on its own, never replaced as a whole object)
  const m = input.media;
  if (m) {
    if (has(m, "primary_image_url")) set["media.primary_image_url"] = url(m.primary_image_url, "Main image");
    if (has(m, "gallery_images")) {
      if (!Array.isArray(m.gallery_images)) bad("Gallery images must be a list");
      const g = [...new Set(m.gallery_images.map((u) => url(u, "Gallery image")).filter(Boolean))];
      if (g.length > 20) bad("A product can have at most 20 gallery images");
      set["media.gallery_images"] = g;
    }
  }

  // ---- care & delivery
  const l = input.care_and_logistics;
  if (l) {
    if (has(l, "care_instructions")) set["care_and_logistics.care_instructions"] = list(l.care_instructions, "Care instructions", { max: 30, each: 400 });
    const sc = l.shipping_constraints;
    if (sc) {
      if (has(sc, "requires_cold_chain")) set["care_and_logistics.shipping_constraints.requires_cold_chain"] = !!sc.requires_cold_chain;
      if (has(sc, "max_delivery_days")) set["care_and_logistics.shipping_constraints.max_delivery_days"] = whole(sc.max_delivery_days, "Max delivery days", { max: 60 });
      if (has(sc, "regional_availability")) set["care_and_logistics.shipping_constraints.regional_availability"] = list(sc.regional_availability, "Regional availability", { max: 60, each: 80 });
    }
    if (has(l, "add_ons")) set["care_and_logistics.add_ons"] = rows(l.add_ons, product.care_and_logistics?.add_ons, "Add-ons", 30, buildAddOn);
  }

  // ---- variations
  if (has(input, "variations")) set.variations = rows(input.variations, product.variations, "Variations", 40, buildVariation);

  // ---- availability
  const v = input.availability;
  if (v) {
    if (has(v, "is_active")) set["availability.is_active"] = !!v.is_active;
    if (has(v, "is_featured")) set["availability.is_featured"] = !!v.is_featured;
    if (has(v, "last_restock_date")) {
      if (v.last_restock_date === "" || v.last_restock_date === null) set["availability.last_restock_date"] = null;
      else { const d = new Date(v.last_restock_date); if (Number.isNaN(d.getTime())) bad("Restock date isn't a valid date"); set["availability.last_restock_date"] = d; }
    }
  }

  // ---- cross-field sense checks (warnings, not errors: the admin knows their business)
  const sell = set.selling_price ?? product.selling_price;
  const mrp = set.original_price ?? product.original_price;
  const cost = set.costing_price ?? product.costing_price;
  if (mrp !== undefined && sell > mrp) warnings.push("Selling price is higher than the original (MRP) price, so no discount will show.");
  if (cost !== undefined && sell < cost) warnings.push("Selling price is below the costing price, so each sale loses money.");
  for (const vr of set.variations || []) {
    if (vr.selling_price < (vr.costing_price ?? 0)) warnings.push(`Variation "${vr.variant_name}" sells below its costing price.`);
  }
  if (set["media.primary_image_url"] === "") warnings.push("The product has no main image.");

  return { set, changes: diffSet(product, set), warnings };
}

const dig = (obj, path) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
const brief = (v) => {
  if (Array.isArray(v)) return v.length > 6 || JSON.stringify(v).length > 300 ? `${v.length} item${v.length === 1 ? "" : "s"}` : v.map((x) => (typeof x === "object" ? JSON.stringify(x).slice(0, 80) : String(x).slice(0, 80)));
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "string") return v.length > 200 ? `${v.slice(0, 200)}…` : v;
  return v ?? null;
};
// Order-independent comparison: the same fields in a different order are the same value.
const stable = (v) => (Array.isArray(v) ? v.map(stable) : v && typeof v === "object" && !(v instanceof Date)
  ? Object.fromEntries(Object.keys(v).sort().map((k) => [k, stable(v[k])])) : v);
const same = (a, b) => JSON.stringify(stable(a ?? null)) === JSON.stringify(stable(b ?? null));

// For each field being set, compare with what is stored now. Variations/add-ons are compared on
// their editable values only (so a re-saved, untouched row is not reported as a change).
export function diffSet(product, set) {
  const changes = [];
  // Compare rows on what an admin actually edits: ignore ids, the derived discount %, default values and
  // empty fields, so re-saving an untouched row (which gets defaults filled in) is not reported as a change.
  const strip = (arr) => (arr || []).map((r) => {
    const { _id, id, discount_percentage, ...rest } = r && r.toObject ? r.toObject() : (r || {});
    if (!rest.currency || rest.currency === "INR") delete rest.currency;
    if (rest.quantity === 1) delete rest.quantity;
    if (rest.inventory) { const q = rest.inventory.quantity_available || 0, p = rest.inventory.reorder_point || 0; if (!q && !p) delete rest.inventory; else rest.inventory = { quantity_available: q, reorder_point: p }; }
    for (const k of Object.keys(rest)) if (rest[k] === undefined || rest[k] === null || rest[k] === "") delete rest[k];
    return rest;
  });
  for (const [path, next] of Object.entries(set)) {
    const prev = dig(product, path);
    if (path === "variations" || path === "care_and_logistics.add_ons") {
      const a = strip(prev), b = strip(next);
      if (!same(a, b)) changes.push({ field: path, from: `${a.length} row${a.length === 1 ? "" : "s"}`, to: `${b.length} row${b.length === 1 ? "" : "s"}`, detail: variantChanges(a, b) });
      continue;
    }
    const norm = (x) => (x instanceof Date ? x.toISOString() : x);
    if (!same(norm(prev), norm(next))) changes.push({ field: path, from: brief(prev), to: brief(next) });
  }
  return changes;
}

// A short human summary of what changed inside variations / add-ons (price edits are the ones that matter).
function variantChanges(before, after) {
  const out = [];
  const key = (r) => r.variant_name || r.name || "";
  const old = new Map(before.map((r) => [key(r), r]));
  for (const r of after) {
    const o = old.get(key(r));
    if (!o) { out.push(`added "${key(r)}"`); continue; }
    for (const f of ["selling_price", "original_price", "costing_price"]) if (!same(o[f], r[f])) out.push(`"${key(r)}" ${f.replace("_", " ")}: ${o[f]} -> ${r[f]}`);
    if (!same(o.inventory, r.inventory)) out.push(`"${key(r)}" stock changed`);
  }
  for (const [k] of old) if (!after.some((r) => key(r) === k)) out.push(`removed "${k}"`);
  return out.slice(0, 12);
}

export const HISTORY_LIMIT = 25;
