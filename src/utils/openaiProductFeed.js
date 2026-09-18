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

function baseFields(p) {
  const category = p.categorization?.category_name || "";
  const url = getProductUrl(category, p.slug, p.product_id);
  const images = [p.media?.primary_image_url, ...(p.media?.gallery_images || [])].filter(Boolean);

  const fields = {
    item_id: p.product_id,
    title: clamp(p.name, 150),
    description: clamp(p.description || p.short_summary || p.name, 5000),
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

  return fields;
}

function toRows(p) {
  const active = p.availability?.is_active !== false;
  if (!active) return []; // delisted products don't belong in the feed at all

  const base = baseFields(p);
  const variations = p.variations || [];

  if (variations.length === 0) {
    return [
      {
        ...base,
        price: money(p.selling_price),
        availability: p.quantity > 0 ? "in_stock" : "out_of_stock",
      },
    ];
  }

  // Each variation is a separate purchasable item sharing the parent's group_id.
  return variations.map((v) => ({
    ...base,
    item_id: v.variant_sku || `${p.product_id}-${v.variant_id}`,
    group_id: p.product_id,
    listing_has_variations: true,
    variant_dict: { variant: v.variant_name || v.variant_sku || String(v.variant_id) },
    price: money(v.selling_price ?? p.selling_price),
    availability: (v.inventory?.quantity_available ?? 0) > 0 ? "in_stock" : "out_of_stock",
    image_url: v.image_url || base.image_url,
  }));
}

// Returns { jsonl, rowCount, productCount } — jsonl is the full file body
// (newline-delimited JSON, trailing newline included).
export async function buildOpenAIProductFeed() {
  const products = await Product.find({}).lean();
  const lines = [];
  for (const p of products) {
    for (const row of toRows(p)) lines.push(JSON.stringify(row));
  }
  return { jsonl: lines.join("\n") + "\n", rowCount: lines.length, productCount: products.length };
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
