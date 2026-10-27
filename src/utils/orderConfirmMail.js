import nodemailer from "nodemailer";
import Order from "../models/order.js";
import User from "../models/User.js";

// Customer order confirmation. Goes to the email on the placing account (checkout does not store a separate
// email on the order). Sent once an order is real: COD at placement, prepaid when payment is confirmed.
// Never throws and never blocks the order; `confirmationEmailSentAt` is claimed atomically so the browser
// verify call and the Razorpay webhook (which can both see the same order) cannot send it twice.

const SITE = "https://www.redheart.in";

function getTransporter() {
  if (process.env.GMAIL_USER) {
    return nodemailer.createTransport({ service: "gmail", auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASS } });
  }
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT) || 587, secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return null;
}

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;
// delivery dates are stored as the calendar date at midnight UTC
const fmtDate = (d) => {
  try { return new Date(d).toLocaleDateString("en-IN", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long", year: "numeric" }); } catch { return ""; }
};

export function buildConfirmationEmail(order) {
  const ship = order.shippingAddress || {};
  const bill = order.billingAddress || {};
  const who = [bill.firstName || ship.firstName].filter(Boolean)[0] || "there";
  const recipient = [ship.firstName, ship.lastName].filter(Boolean).join(" ");
  const cod = order.paymentStatus === "COD" || String(order.paymentMode).toUpperCase() === "COD";
  const trackUrl = `${SITE}/track-order?order=${encodeURIComponent(order.orderId)}`;

  const rows = (order.cartItems || []).map((i) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;color:#222">
        ${esc(i.name)}${i.variant_name ? ` <span style="color:#777">(${esc(i.variant_name)})</span>` : ""}
        ${i.cake_message ? `<br/><span style="color:#777;font-size:12px">Message on cake: &ldquo;${esc(i.cake_message)}&rdquo;</span>` : ""}
        <br/><span style="color:#777;font-size:12px">Qty ${esc(i.quantity)}</span>
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px;color:#222;text-align:right;white-space:nowrap">${inr(Number(i.selling_price) * Number(i.quantity || 1))}</td>
    </tr>`).join("");

  const when = order.deliveryDate
    ? `${esc(fmtDate(order.deliveryDate))}${order.deliverySlot ? ` &middot; ${esc(order.deliverySlot)}` : ""}`
    : "As chosen for each item at checkout";
  const addrLine = [ship.street, ship.city, ship.state, ship.postalCode].filter(Boolean).join(", ");

  const html = `<!doctype html><html><body style="margin:0;background:#faf6f5;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:24px 16px">
    <div style="background:#fff;border:1px solid #eee;padding:28px 24px">
      <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#be123c">RedHeart</p>
      <h1 style="margin:0 0 8px;font-size:22px;font-weight:600;color:#111">Thank you, ${esc(who)}. Your order is placed.</h1>
      <p style="margin:0 0 20px;font-size:14px;color:#555;line-height:1.5">We have your order and our team is confirming it. Keep this email: the order number below is how you track it.</p>

      <div style="background:#fff1f2;border:1px solid #fecdd3;padding:14px 16px;margin-bottom:20px">
        <div style="font-size:12px;color:#777">Order number</div>
        <div style="font-size:17px;font-weight:700;color:#111;letter-spacing:.02em">${esc(order.orderId)}</div>
      </div>

      <p style="margin:0 0 4px;font-size:13px;color:#777">Delivery</p>
      <p style="margin:0 0 4px;font-size:14px;color:#222">${when}</p>
      <p style="margin:0 0 20px;font-size:14px;color:#222">${recipient ? `${esc(recipient)}, ` : ""}${esc(addrLine)}${ship.phone ? `<br/>Phone: ${esc(ship.phone)}` : ""}</p>

      <table style="width:100%;border-collapse:collapse;margin-bottom:8px">${rows}</table>
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#222;margin-bottom:20px">
        ${Number(order.coupanDiscount) > 0 ? `<tr><td style="padding:4px 0;color:#15803d">Coupon ${esc(order.coupanApplied || "")}</td><td style="text-align:right;color:#15803d">-${inr(order.coupanDiscount)}</td></tr>` : ""}
        <tr><td style="padding:6px 0;font-weight:700">Total</td><td style="text-align:right;font-weight:700">${inr(order.totalPrice)}</td></tr>
        <tr><td colspan="2" style="padding:0;color:#777;font-size:12px">${cod ? "Pay on delivery (cash on delivery)" : "Paid online"}</td></tr>
      </table>

      <a href="${trackUrl}" style="display:inline-block;background:#e11d48;color:#fff;text-decoration:none;padding:13px 26px;font-size:14px">Track your order</a>
      <p style="margin:14px 0 0;font-size:12px;color:#777;line-height:1.5">You will need your order number and the phone number on the order. Questions? Reply to this email or write to us from <a href="${SITE}/contact" style="color:#be123c">${SITE.replace("https://", "")}/contact</a>.</p>
    </div>
    <p style="text-align:center;font-size:11px;color:#999;margin:14px 0 0">RedHeart &middot; gifts that say it for you</p>
  </div></body></html>`;

  const text = [
    `Thank you, ${who}. Your RedHeart order is placed.`,
    `Order number: ${order.orderId}`,
    order.deliveryDate ? `Delivery: ${fmtDate(order.deliveryDate)}${order.deliverySlot ? `, ${order.deliverySlot}` : ""}` : "",
    ...(order.cartItems || []).map((i) => `- ${i.name}${i.variant_name ? ` (${i.variant_name})` : ""} x ${i.quantity}`),
    `Total: ${inr(order.totalPrice)} (${cod ? "pay on delivery" : "paid online"})`,
    `Track it: ${trackUrl} (order number + the phone number on the order)`,
  ].filter(Boolean).join("\n");

  return { subject: `Your RedHeart order ${order.orderId} is placed`, html, text };
}

export async function sendOrderConfirmationEmail(orderOrId) {
  try {
    const transporter = getTransporter();
    if (!transporter) return;
    const id = orderOrId?._id || orderOrId;
    // claim first: whoever flips the flag sends, everyone else stops here
    const order = await Order.findOneAndUpdate(
      { _id: id, confirmationEmailSentAt: null },
      { $set: { confirmationEmailSentAt: new Date() } },
      { new: true }
    ).lean();
    if (!order) return;
    const user = await User.findOne({ userId: order.userId }).select("email").lean();
    const to = String(user?.email || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) return; // phone-only account: nothing to send to
    const { subject, html, text } = buildConfirmationEmail(order);
    await transporter.sendMail({
      from: `"RedHeart" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
      to, subject, html, text,
    });
  } catch (err) {
    console.error("sendOrderConfirmationEmail failed:", err.message);
  }
}
