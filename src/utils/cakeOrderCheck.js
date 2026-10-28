// Order-time rules for cakes, kept pure so they can be unit tested:
//   - the text for "message on cake" is cleaned, and dropped for non-cakes
//   - a cake is never sold below its current price (size prices included)
//   - sizes that need notice (5 kg) can't be booked for a sooner slot
import {
  isCakeProduct, cleanCakeMessage, leadHoursForVariantName, checkLeadTime, normalizeSizeLabel,
} from "./cakeSizes.js";

const isObjId = (s) => /^[0-9a-fA-F]{24}$/.test(String(s || ""));

// Finds the product (and the size/variation, if any) a cart item points at.
// productId is product._id, product_id, or a variation's _id depending on the page that built it.
export function resolveItem(ci, products) {
  const pid = String(ci.productId || "");
  for (const p of products) {
    const v = (p.variations || []).find((x) => String(x._id) === pid);
    if (v) return { product: p, variant: v };
  }
  const product = products.find((p) => String(p._id) === pid || String(p.product_id) === pid)
    || (ci._id ? products.find((p) => String(p._id) === String(ci._id)) : null);
  return { product: product || null, variant: null };
}

export function productIdsOf(items) {
  const ids = new Set();
  for (const ci of items || []) {
    if (ci.productId) ids.add(String(ci.productId));
    if (ci._id) ids.add(String(ci._id));
  }
  const all = [...ids];
  return { all, objectIds: all.filter(isObjId) };
}

const toDate = (s) => {
  if (!s) return null;
  if (s instanceof Date) return s;
  const [d, m, y] = String(s).split("-");
  if (!y) return new Date(s);
  return new Date(`${y.length === 2 ? `20${y}` : y}-${m}-${d}`);
};

/**
 * @returns {{ error?: {status:number, message:string}, items: object[] }}
 */
export function checkCakeItems({ items, products, deliveryDate, deliverySlot, separate = [], now = new Date() }) {
  const out = [];
  let lead = 0;
  const leadItems = [];

  for (const ci of items || []) {
    const { product, variant } = resolveItem(ci, products);
    const isCake = !!product && isCakeProduct(product);
    const next = { ...ci, cake_message: isCake ? cleanCakeMessage(ci.cake_message) : "" };
    // Remember the real product even when productId is a size/variation id, so the admin can link to it.
    if (product) next.product_ref = String(product._id);

    if (isCake) {
      const expected = Number(variant ? variant.selling_price : product.selling_price);
      if (expected > 0 && Number(ci.selling_price) < expected - 1) {
        return {
          items: out,
          error: {
            status: 409,
            message: `The price of ${ci.name || "a cake"}${ci.variant_name ? ` (${ci.variant_name})` : ""} has changed to ₹${expected}. Please remove it from your cart and add it again.`,
          },
        };
      }
      if (variant?.variant_name) next.variant_name = variant.variant_name; // canonical name, not what the browser sent
      const h = leadHoursForVariantName(next.variant_name);
      if (h) { lead = Math.max(lead, h); leadItems.push(next); }
    }
    out.push(next);
  }

  if (lead) {
    for (const it of leadItems) {
      const sep = (separate || []).find((s) => String(s.productId) === String(it.productId));
      const date = sep ? toDate(sep.deliveryDate) : deliveryDate;
      const slot = sep ? sep.deliverySlot : deliverySlot;
      const msg = checkLeadTime({ leadHours: leadHoursForVariantName(it.variant_name), deliveryDate: date, deliverySlot: slot, now });
      if (msg) return { items: out, error: { status: 400, message: msg } };
    }
  }
  return { items: out };
}

export { normalizeSizeLabel };
