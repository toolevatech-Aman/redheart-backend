// Builds the OpenAI Commerce product feed (JSONL, one product/variant per
// line) per https://developers.openai.com/commerce/specs/file-upload/products
//
// Used by both the CLI script (scripts/generate-openai-product-feed.mjs, for
// a one-off downloadable file) and the live GET /api/openai-feed route (for
// OpenAI's "Hosted URL" feed source, which re-fetches this URL periodically
// to pick up price/stock/catalog changes automatically).
//
// URL-building logic (category slug map, toSlug) is copied from
// redheart-nextjs/lib/seoUtils.js's getProductUrl() rather than imported,
// since this is a separate repo — keep the two in sync if that function's
// slugging rules ever change.
import Product from "../models/Product.js";

const SITE_URL = "https://www.redheart.in";
const CURRENCY = "INR";
const BRAND = "RedHeart";
const SELLER_NAME = "RedHeart";

const PRODUCT_CATEGORY_SLUG_MAP = { Flowers: "flowers", Cakes: "cakes", Plants: "plants" };

const toSlug = (str) =>
  !str
    ? ""
    : str
        .toLowerCase()
        .replace(/[^\x00-\x7F]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-{2,}/g, "-")
        .replace(/^-+|-+$/g, "");

function getProductUrl(category, productSlug, sku) {
  const categorySlug = PRODUCT_CATEGORY_SLUG_MAP[category] || toSlug(category);
  const slug = toSlug(productSlug);
  const skuSlug = sku ? toSlug(String(sku)) : "";
  const skuPart = skuSlug && !slug.endsWith(`-${skuSlug}`) ? `-${skuSlug}` : "";
  return `${SITE_URL}/p/${categorySlug}/${slug}${skuPart}`;
}

const money = (amount) => `${Number(amount).toFixed(2)} ${CURRENCY}`;

// Truncate to the spec's max lengths without cutting a word in half.
function clamp(str, max) {
  if (!str || str.length <= max) return str || "";
  return str.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

// The feed spec wants a direct JPEG or PNG link; WebP is not accepted, so prefer those and skip WebP extras.
const isJpgPng = (u) => { try { return /\.(jpe?g|png)$/i.test(decodeURIComponent(String(u).split("?")[0])); } catch { return false; } };
const plainText = (t) => String(t || "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const SITE_RETURN_POLICY = `${SITE_URL}/refund-policy`;

function baseFields(p, ads = false) {
  const category = p.categorization?.category_name || "";
  const url = getProductUrl(category, p.slug, p.product_id);
  const all = [p.media?.primary_image_url, ...(p.media?.gallery_images || [])].filter(Boolean);
  const good = all.filter(isJpgPng);
  const images = good.length ? good : all;

  const fields = {
    item_id: p.product_id,
    title: clamp(p.name, 150),
    description: clamp(plainText(p.description || p.short_summary || p.name), 5000),
    url,
    brand: BRAND,
    seller_name: SELLER_NAME,
    seller_url: SITE_URL,
    image_url: images[0],
    condition: "new",
  };

  if (images.length > 1) fields.additional_image_urls = images.slice(1);
  if (category) {
    const path = [category, p.categorization?.subcategory_name].filter(Boolean).join(" > ");
    fields.product_category = path;
  }
  if (p.product_attributes?.color) fields.color = p.product_attributes.color;
  if (p.metrics?.review_count) fields.review_count = p.metrics.review_count;
  if (p.metrics?.average_rating) fields.star_rating = Number(p.metrics.average_rating.toFixed(2));
  if (ads) { fields.return_policy = SITE_RETURN_POLICY; fields.is_ads_eligible = true; }

  return fields;
}

// Ads shows the list price with the sale price beside it; the plain feed keeps the single selling price.
function priceFields(selling, original, ads) {
  const sell = Number(selling), orig = Number(original);
  if (ads && orig > sell) return { price: money(orig), sale_price: money(sell) };
  return { price: money(sell) };
}

function toRows(p, ads = false) {
  const active = p.availability?.is_active !== false;
  if (!active) return []; // delisted products don't belong in the feed at all

  const base = baseFields(p, ads);
  const variations = p.variations || [];
  // A variation with no stock figure of its own sells while the product does.
  const stockOf = (v) => (v.inventory?.quantity_available ?? p.quantity) > 0;

  if (variations.length === 0) {
    return [
      {
        ...base,
        ...priceFields(p.selling_price, p.original_price, ads),
        availability: p.quantity > 0 ? "in_stock" : "out_of_stock",
      },
    ];
  }

  // Cakes carry their half-kg price on the product itself and the 1/2/3/5 kg sizes as variations. Emit the
  // half-kg item too so the feed lists all five sizes.
  const sizeOnly = variations.every((v) => v.inventory?.quantity_available == null && /\bkg$/i.test(v.variant_name || ""));
  const titleFor = (label) => (ads && label ? clamp(`${p.name} - ${label}`, 150) : base.title);
  // Option values must be unique inside a group: if a product accidentally has two options with the same name,
  // number the later ones (the product data itself should still be fixed in the Product Hub).
  const seenLabels = new Map();
  const labelOf = (v) => {
    const raw = v.variant_name || v.variant_sku || String(v.variant_id);
    const n = (seenLabels.get(raw) || 0) + 1;
    seenLabels.set(raw, n);
    return n > 1 ? `${raw} (${n})` : raw;
  };
  const rows = variations.map((v) => {
    const label = labelOf(v);
    return {
    ...base,
    title: titleFor(label),
    item_id: v.variant_sku || `${p.product_id}-${v.variant_id}`,
    group_id: p.product_id,
    listing_has_variations: true,
    variant_dict: { variant: label },
    ...priceFields(v.selling_price ?? p.selling_price, v.selling_price != null ? v.original_price : p.original_price, ads),
    availability: stockOf(v) ? "in_stock" : "out_of_stock",
    image_url: v.image_url && isJpgPng(v.image_url) ? v.image_url : base.image_url,
    };
  });
  if (sizeOnly) {
    rows.unshift({
      ...base,
      title: titleFor("½ Kg"),
      // In the ads feed the group id must differ from every item id, or the sizes are not grouped.
      ...(ads ? { item_id: `${p.sku || p.product_id}-HALFKG` } : {}),
      group_id: p.product_id,
      listing_has_variations: true,
      variant_dict: { variant: "½ Kg" },
      ...priceFields(p.selling_price, p.original_price, ads),
      availability: p.quantity > 0 ? "in_stock" : "out_of_stock",
    });
  }
  return rows;
}

// ── Ads Manager feed (CSV) ──────────────────────────────────────────────────
// Ads Manager -> Tools -> Feeds -> Hosted URL takes a UTF-8 CSV. Same data as the JSONL feed, plus list/sale
// price, variant titles, return policy and ads eligibility. Columns follow
// https://developers.openai.com/commerce/specs/file-upload/products (arrays are comma-separated, objects JSON).
export const ADS_FEED_COLUMNS = [
  "item_id", "title", "description", "url", "brand", "seller_name", "seller_url", "image_url", "additional_image_urls",
  "availability", "price", "sale_price", "condition", "product_category", "group_id", "listing_has_variations",
  "variant_dict", "color", "return_policy", "review_count", "star_rating", "is_ads_eligible",
];
const csvCell = (v) => {
  if (v === undefined || v === null || v === "") return "";
  let t = Array.isArray(v) ? v.map((u) => String(u).replace(/,/g, "%2C")).join(",") : typeof v === "object" ? JSON.stringify(v) : String(v);
  return /[",\n\r]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
};
export function toAdsCsv(products) {
  const lines = [ADS_FEED_COLUMNS.join(",")];
  let rowCount = 0;
  for (const p of products) {
    for (const row of toRows(p, true)) {
      lines.push(ADS_FEED_COLUMNS.map((c) => csvCell(row[c])).join(","));
      rowCount++;
    }
  }
  return { csv: lines.join("\n") + "\n", adsRowCount: rowCount };
}

// Returns { jsonl, rowCount, productCount } — jsonl is the full file body
// (newline-delimited JSON, trailing newline included).
export async function buildOpenAIProductFeed() {
  const products = await Product.find({}).lean();
  const lines = [];
  for (const p of products) {
    for (const row of toRows(p)) lines.push(JSON.stringify(row));
  }
  return { jsonl: lines.join("\n") + "\n", ...toAdsCsv(products), rowCount: lines.length, productCount: products.length };
}

// The live route (GET /openai-product-feed.jsonl) must not run a full
// products query on every hit — a cold build takes 5-8s against the full
// catalog, and OpenAI's "Hosted URL" feed connector's own fetch times out
// well before that, failing with a generic "Connection failed" on their
// end. Keep an in-memory copy that's refreshed on a schedule (see
// server.js) instead, so every request — including the connector's very
// first one — is served from memory in milliseconds.
let cached = null; // { jsonl, rowCount, productCount, generatedAt }

export async function refreshOpenAIProductFeedCache() {
  const result = await buildOpenAIProductFeed();
  cached = { ...result, generatedAt: new Date() };
  return cached;
}

// Serves the cache; if nothing has been built yet (e.g. hit in the first
// moment after a fresh deploy, before the startup refresh completes),
// falls back to building it live just this once.
export async function getCachedOpenAIProductFeed() {
  if (!cached) await refreshOpenAIProductFeedCache();
  return cached;
}
