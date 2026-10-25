// Public order tracking: what a customer may see about an order, and the rules for looking it up.
// The status is read straight from the order, so whatever staff set in the admin (Orders -> status dropdown:
// Pending, Accepted, InTransit, Out Of Delivery, Delivered, Cancelled) is what the customer sees on /track-order.

// Customer wording per status. step = position on the 5-step journey; -1 = not on it (cancelled).
export const STATUS_INFO = {
  Pending:           { step: 0, label: "Order placed",      detail: "We have your order and are confirming it." },
  Accepted:          { step: 1, label: "Order accepted",    detail: "Your order is confirmed and is being prepared." },
  Processing:        { step: 1, label: "Order accepted",    detail: "Your order is confirmed and is being prepared." },
  InTransit:         { step: 2, label: "In transit",        detail: "Your order has left and is on its way to the delivery city." },
  Shipped:           { step: 2, label: "In transit",        detail: "Your order has left and is on its way to the delivery city." },
  "Out Of Delivery": { step: 3, label: "Out for delivery",  detail: "Your order is out for delivery and will reach the recipient soon." },
  Delivered:         { step: 4, label: "Delivered",         detail: "Your gift has been delivered." },
  Cancelled:         { step: -1, label: "Cancelled",        detail: "This order was cancelled. If you paid, the refund follows our refund policy. Contact support if you have questions." },
};
export const JOURNEY = ["Order placed", "Order accepted", "In transit", "Out for delivery", "Delivered"];

export const statusInfo = (s) => STATUS_INFO[s] || STATUS_INFO.Pending;

// Last 10 digits of an Indian mobile number (handles +91, 91, 0 prefixes, spaces and dashes).
export const last10 = (p) => String(p || "").replace(/\D/g, "").slice(-10);
export const phoneMatches = (order, phone) => {
  const want = last10(phone);
  if (want.length < 10) return false;
  return [order?.billingAddress?.phone, order?.shippingAddress?.phone].some((p) => last10(p) === want);
};

// "ORDRH17929…" in any case, or the 24-character id shown on the old confirmation page.
export const parseLookup = (raw) => {
  const v = String(raw || "").trim().replace(/\s+/g, "");
  if (/^[0-9a-f]{24}$/i.test(v)) return { _id: v };
  if (/^[A-Za-z0-9-]{6,40}$/.test(v)) return { orderId: v.toUpperCase() };
  return null;
};

// Only what the customer needs: no addresses, phone numbers, payment details or internal notes.
export function publicOrderView(order) {
  const info = statusInfo(order.orderStatus);
  return {
    orderNumber: order.orderId,
    status: order.orderStatus || "Pending",
    label: info.label,
    detail: info.detail,
    step: info.step,
    cancelled: order.orderStatus === "Cancelled",
    journey: JOURNEY,
    placedAt: order.createdAt || null,
    updatedAt: order.updatedAt || order.createdAt || null,
    deliveryDate: order.deliveryDate || null,
    deliverySlot: order.deliverySlot || "",
    items: (order.cartItems || []).map((i) => ({
      name: i.name,
      variant: i.variant_name || "",
      quantity: i.quantity || 1,
      image: i.image_url || "",
      cakeMessage: i.cake_message || "",
    })),
  };
}

// Wrong-phone guard: 5 failed tries on one order lock it for 30 minutes (so a phone number can't be guessed).
const fails = new Map(); // key -> { n, since }
const WINDOW_MS = 30 * 60 * 1000, MAX_FAILS = 5;
export const isLocked = (key, now = Date.now()) => {
  const f = fails.get(key);
  if (!f) return false;
  if (now - f.since > WINDOW_MS) { fails.delete(key); return false; }
  return f.n >= MAX_FAILS;
};
export const recordFail = (key, now = Date.now()) => {
  const f = fails.get(key);
  if (!f || now - f.since > WINDOW_MS) fails.set(key, { n: 1, since: now });
  else f.n++;
  if (fails.size > 5000) for (const [k, v] of fails) if (now - v.since > WINDOW_MS) fails.delete(k); // keep it small
};
export const clearFails = (key) => fails.delete(key);
