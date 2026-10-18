// Cake sizes, size pricing and the cake-message / 24-hour-notice rules.
//
// Every cake on the site is priced for half a kilo. Customers can also pick
// 1, 2, 3 or 5 kg. Cake prices do not scale in a straight line (box, labour,
// decoration and delivery barely change with weight), so each size is the
// half-kg price times a multiplier below 2x/4x/6x/10x, rounded to a "x49/x99"
// ending.

import mongoose from "mongoose";

export const CAKE_CATEGORY = "Cakes";

// label is what the customer / admin sees and what is stored as variant_name.
export const CAKE_SIZES = [
  { label: "1 Kg", code: "1KG", kg: 1, mult: 1.85, serves: "8-10" },
  { label: "2 Kg", code: "2KG", kg: 2, mult: 3.5, serves: "16-20" },
  { label: "3 Kg", code: "3KG", kg: 3, mult: 5.1, serves: "25-30" },
  { label: "5 Kg", code: "5KG", kg: 5, mult: 8.2, serves: "40-50" },
];

export const BASE_SIZE_LABEL = "½ Kg";

// Sizes that need advance notice, in hours.
export const SIZE_LEAD_HOURS = { "5 kg": 24 };

export const CAKE_MESSAGE_MAX = 30;

export const isCakeProduct = (p) => p?.categorization?.category_name === CAKE_CATEGORY;

// 1385.65 -> 1399, 2621.5 -> 2599. Nearest 50, minus 1.
export function roundCakePrice(n) {
  const v = Math.round(Number(n) / 50) * 50 - 1;
  return Math.max(v, 0);
}

export function sizePrice(basePrice, size) {
  return roundCakePrice(Number(basePrice) * size.mult);
}

// "1 Kg", "1kg", "1 KG " -> "1 kg"
export const normalizeSizeLabel = (s) =>
  String(s || "").trim().toLowerCase().replace(/\s+/g, " ").replace(/(\d)kg$/, "$1 kg");

export function leadHoursForVariantName(variantName) {
  return SIZE_LEAD_HOURS[normalizeSizeLabel(variantName)] || 0;
}

// Plain text only: no tags, no control characters, collapsed spaces, capped.
export function cleanCakeMessage(raw) {
  if (raw == null) return "";
  return String(raw)
    .replace(/<[^>]*>/g, " ")
    .replace(/[<>\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, CAKE_MESSAGE_MAX);
}

const scale = (v, mult) => (v == null ? undefined : roundCakePrice(Number(v) * mult));

// The four size variations for a cake, built from its half-kg price.
// Returns { variations } or { skip: reason }.
export function buildSizeVariations(product) {
  if (!isCakeProduct(product)) return { skip: "not a cake" };
  const base = Number(product.selling_price);
  if (!(base > 0)) return { skip: "no selling price" };
  const existing = product.variations || [];
  if (existing.length) {
    const names = existing.map((v) => normalizeSizeLabel(v.variant_name));
    const allSizes = CAKE_SIZES.every((s) => names.includes(normalizeSizeLabel(s.label)));
    return { skip: allSizes ? "already has sizes" : "has other variations" };
  }
  const sku = product.sku || product.product_id || "CAKE";
  const original = Number(product.original_price) > 0 ? Number(product.original_price) : base;
  const variations = CAKE_SIZES.map((size) => {
    const selling = sizePrice(base, size);
    const orig = Math.max(scale(original, size.mult), selling);
    const v = {
      _id: new mongoose.Types.ObjectId(),
      variant_id: `${sku}-${size.code}`,
      variant_sku: `${sku}-${size.code}`,
      variant_name: size.label,
      currency: "INR",
      selling_price: selling,
      original_price: orig,
      discount_percentage: orig > selling ? Math.round((1 - selling / orig) * 100) : 0,
    };
    const cost = scale(product.costing_price, size.mult);
    if (cost !== undefined) v.costing_price = cost;
    return v;
  });
  return { variations };
}

// ── Notice period ───────────────────────────────────────────────────────────

// Start time of a delivery slot as minutes after midnight, or null.
//   "9:00 - 13:00" -> 540   "7:00 AM - 9:00 AM" -> 420   "23:00 - 00:00" -> 1380
// Express ("30-60 Minutes from order") and anything unreadable -> null.
export function slotStartMinutes(slot) {
  if (!slot || /minutes from order/i.test(slot)) return null;
  const first = String(slot).split(/\s+-\s+/)[0].trim();
  const m = first.match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
  if (!m) return null;
  let h = Number(m[1]);
  const min = Number(m[2]);
  const period = m[3]?.toUpperCase();
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  if (h > 24 || min > 59) return null;
  return h * 60 + min;
}

const IST_OFFSET_MIN = 330;

// deliveryDate is an ISO date (or a Date) and slot a slot string. Returns the
// instant the slot starts, in IST, or null if the slot can't be read.
export function slotStartInstant(dateLike, slot) {
  const start = slotStartMinutes(slot);
  if (start == null || !dateLike) return null;
  const d = new Date(dateLike);
  if (Number.isNaN(d.getTime())) return null;
  const y = d.getUTCFullYear(), mo = d.getUTCMonth(), day = d.getUTCDate();
  // The date was parsed from "YYYY-MM-DD" (UTC midnight), so its UTC date is the calendar date.
  return new Date(Date.UTC(y, mo, day, 0, 0, 0) + (start - IST_OFFSET_MIN) * 60000);
}

// Longest notice (hours) any item in the order needs.
export function requiredLeadHours(items) {
  let h = 0;
  for (const it of items || []) h = Math.max(h, leadHoursForVariantName(it?.variant_name));
  return h;
}

// null if fine, else a message for the customer.
export function checkLeadTime({ leadHours, deliveryDate, deliverySlot, now = new Date() }) {
  if (!leadHours) return null;
  const startAt = slotStartInstant(deliveryDate, deliverySlot);
  const label = `${leadHours} hours`;
  if (!startAt) return `Your order has a cake that needs ${label}' notice. Please choose a delivery date and a time slot at least ${label} from now.`;
  if (startAt.getTime() < now.getTime() + leadHours * 3600000) {
    return `5 kg cakes need ${label}' notice. Please choose a delivery slot that starts at least ${label} from now.`;
  }
  return null;
}
