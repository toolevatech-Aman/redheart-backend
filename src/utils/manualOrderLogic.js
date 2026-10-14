// Pure rules for admin-created ("manual") orders. No database access here, so the
// maths and validation can be tested on their own. The controller fetches products,
// the customer and the surcharge/coupon results, then calls these.

export class ManualOrderError extends Error {
  constructor(message) { super(message); this.name = "ManualOrderError"; this.status = 400; }
}
const bad = (m) => { throw new ManualOrderError(m); };

export const round2 = (n) => Math.round((Number(n) + Number.EPSILON) * 100) / 100;
const clamp = (n, lo, hi) => Math.min(Math.max(n, lo), hi);

export const PAYMENT_MODES = ["COD", "PAID_OFFLINE", "PAYMENT_LINK"];
export const PAYMENT_CHANNELS = ["UPI", "Bank transfer", "Cash", "Card machine", "Other"];
export const ORDER_CHANNELS = ["Phone call", "WhatsApp", "Instagram", "Walk-in", "Other"];
export const MAX_LINES = 30;

// Same phone format the site stores for logins: +91XXXXXXXXXX
export function normPhone(p) {
  const d = String(p ?? "").replace(/\D/g, "");
  if (/^[6-9]\d{9}$/.test(d)) return "+91" + d;
  if (/^91[6-9]\d{9}$/.test(d)) return "+" + d;
  return null;
}
export const tenDigits = (p) => { const n = normPhone(p); return n ? n.slice(-10) : null; };

export function cleanAddress(a) {
  a = a || {};
  const out = {
    firstName: String(a.firstName ?? "").trim().slice(0, 60),
    lastName: String(a.lastName ?? "").trim().slice(0, 60),
    street: String(a.street ?? "").trim().slice(0, 240),
    city: String(a.city ?? "").trim().slice(0, 80),
    state: String(a.state ?? "").trim().slice(0, 80),
    postalCode: String(a.postalCode ?? "").trim(),
    country: "India",
    phone: tenDigits(a.phone),
  };
  if (!out.firstName) bad("Enter the receiver's name");
  if (!out.phone) bad("Enter a valid 10-digit receiver phone number");
  if (out.street.length < 5) bad("Enter the delivery address");
  if (!out.city) bad("Enter the city");
  if (!/^\d{6}$/.test(out.postalCode)) bad("Enter a valid 6-digit pin code");
  return out;
}

export function parseDeliveryDate(v, now = new Date()) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(v ?? ""));
  if (!m) bad("Choose the delivery date");
  const d = new Date(`${m[1]}-${m[2]}-${m[3]}T00:00:00+05:30`);   // dates are IST calendar days
  if (Number.isNaN(d.getTime())) bad("Choose a valid delivery date");
  const todayIst = new Date(now.getTime() + 330 * 60000).toISOString().slice(0, 10);
  if (`${m[1]}-${m[2]}-${m[3]}` < todayIst) bad("The delivery date can't be in the past");
  return d;
}

// One cart line: price comes from the database unless the admin typed an override.
export function resolveLine(product, item) {
  const pid = String(item.productId ?? "");
  const variant = (product.variations || []).find((v) => String(v._id) === pid) || null;
  const qty = Math.floor(Number(item.quantity));
  if (!(qty >= 1 && qty <= 100)) bad(`Enter a quantity (1-100) for ${product.name}`);

  let unit = variant?.selling_price ?? product.selling_price;
  let edited = false;
  if (item.price !== undefined && item.price !== null && `${item.price}`.trim() !== "") {
    const p = Number(item.price);
    if (!Number.isFinite(p) || p < 0 || p > 1000000) bad(`Invalid price for ${product.name}`);
    if (round2(p) !== round2(unit)) edited = true;
    unit = p;
  }
  unit = round2(unit);
  if (!Number.isFinite(unit) || unit < 0) bad(`${product.name} has no price`);

  const catalogue = product.care_and_logistics?.add_ons || [];
  const addOns = (item.addOns || []).map((a) => {
    const hit = catalogue.find((c) => String(c._id) === String(a._id) || (a.name && c.name === a.name));
    if (!hit) bad(`An add-on for ${product.name} no longer exists`);
    const aq = Math.floor(Number(a.quantity ?? 1));
    if (!(aq >= 1 && aq <= 20)) bad(`Enter a quantity for the add-on ${hit.name}`);
    return { name: hit.name, selling_price: round2(hit.selling_price), quantity: aq, image_url: hit.image_url };
  });

  const addOnTotal = round2(addOns.reduce((s, a) => s + a.selling_price * a.quantity, 0));
  return {
    cartItem: {
      productId: pid,
      name: product.name,
      variant_name: variant?.variant_name || "",
      image_url: product.media?.primary_image_url || "",
      selling_price: unit,
      original_price: round2(variant?.original_price ?? product.original_price ?? unit),
      quantity: qty,
      add_ons: addOns,
    },
    lineTotal: round2(unit * qty + addOnTotal),
    edited,
    category: product.categorization?.category_name || null,
  };
}

// Totals. Mirrors checkout: surcharges are computed on the product subtotal and a coupon
// only ever discounts the product subtotal; the admin discount comes off after that.
export function priceOrder({ lineTotals, shipping, couponDiscount = 0, adminDiscount = 0, discountReason = "",
  pincodeSurcharge = 0, deliverySurcharge = 0, waiveSurcharges = false }) {
  const subtotal = round2(lineTotals.reduce((s, n) => s + n, 0));
  const ship = round2(clamp(Number(shipping) || 0, 0, 5000));
  const coupon = round2(clamp(Number(couponDiscount) || 0, 0, subtotal));
  const afterCoupon = round2(subtotal - coupon);
  const disc = round2(clamp(Number(adminDiscount) || 0, 0, afterCoupon));
  const reason = String(discountReason || "").trim().slice(0, 200);
  if ((disc > 0 || waiveSurcharges) && reason.length < 3) bad("Add a reason for the discount or the waived surcharge");
  const pin = waiveSurcharges ? 0 : round2(pincodeSurcharge);
  const del = waiveSurcharges ? 0 : round2(deliverySurcharge);
  const total = round2(subtotal + ship - coupon - disc + pin + del);
  if (!(total > 0)) bad("The order total must be more than zero");
  return { subtotal, shipping: ship, couponDiscount: coupon, adminDiscount: disc, discountReason: reason,
    pincodeSurcharge: pin, deliverySurcharge: del, total };
}

export function checkPayment(body) {
  const mode = body.paymentMode;
  if (!PAYMENT_MODES.includes(mode)) bad("Choose how the customer is paying");
  if (mode === "PAID_OFFLINE") {
    if (!PAYMENT_CHANNELS.includes(body.paymentChannel)) bad("Choose how the payment was received");
    return { mode, channel: body.paymentChannel, reference: String(body.paymentReference ?? "").trim().slice(0, 100) };
  }
  return { mode, channel: null, reference: "" };
}
