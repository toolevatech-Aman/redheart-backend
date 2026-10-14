// Pure helpers for Razorpay payment links on staff-created orders (no network or database here).

export const LINK_EXPIRY_DAYS = 3;
export const CALLBACK_URL = "https://www.redheart.in/";

export const amountPaise = (total) => Math.round(Number(total) * 100);

// The request body for razorpay.paymentLink.create. Staff share the link themselves,
// so Razorpay's own SMS/email and reminders are off.
export function buildLinkRequest({ order, user, now = new Date(), callbackUrl = CALLBACK_URL }) {
  const paise = amountPaise(order.totalPrice);
  if (!(paise >= 100)) throw new Error("The order total is too small for a payment link");
  const suffix = now.getTime().toString(36);
  const req = {
    amount: paise,
    currency: "INR",
    accept_partial: false,
    reference_id: `${order.orderId}-${suffix}`.slice(0, 40),   // unique per link, so a re-issued link never clashes
    description: `RedHeart order ${order.orderId}`.slice(0, 2000),
    notify: { sms: false, email: false },
    reminder_enable: false,
    notes: { orderId: String(order.orderId), orderRef: String(order._id || "") },
    callback_url: callbackUrl,
    callback_method: "get",
    expire_by: Math.floor(now.getTime() / 1000) + LINK_EXPIRY_DAYS * 24 * 3600,
  };
  const customer = {};
  const name = (user?.name || order.shippingAddress?.firstName || "").trim();
  if (name) customer.name = name.slice(0, 60);
  if (user?.phone) customer.contact = user.phone;
  if (user?.email) customer.email = user.email;
  if (Object.keys(customer).length) req.customer = customer;
  return req;
}

// Razorpay link entity -> our status word
export function linkStatus(link) {
  const s = String(link?.status || "").toLowerCase();
  if (s === "paid") return "paid";
  if (s === "partially_paid") return "partially_paid";
  if (s === "expired") return "expired";
  if (s === "cancelled") return "cancelled";
  return "created";
}

// The paid payment inside a link entity (present on fetch and in the webhook)
export function paidPayment(link, payment) {
  if (payment?.id) return payment;
  const p = (link?.payments || []).find((x) => String(x.status).toLowerCase() === "captured") || (link?.payments || [])[0];
  return p ? { id: p.payment_id || p.id, amount: p.amount, currency: p.currency || "INR" } : null;
}

// Never mark an order paid for a different amount than the order total.
export function amountMatches(order, paymentOrLink) {
  const got = Number(paymentOrLink?.amount_paid ?? paymentOrLink?.amount);
  return Number.isFinite(got) && got === amountPaise(order.totalPrice);
}
