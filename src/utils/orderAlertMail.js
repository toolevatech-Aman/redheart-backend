import nodemailer from "nodemailer";

const ALERT_RECIPIENTS = ["rishisinha727@gmail.com", "amansinha727@gmail.com"];

function getTransporter() {
  if (process.env.GMAIL_USER) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASS },
    });
  }
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return null;
}

const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

// Fire-and-forget order-received alert — never throws, never blocks order creation.
export async function sendOrderAlertEmail(order) {
  try {
    const transporter = getTransporter();
    if (!transporter) return;

    const itemsHtml = (order.cartItems || [])
      .map((i) => `<li>${i.name}${i.variant_name ? ` (${i.variant_name})` : ""} × ${i.quantity} — ${inr(i.selling_price)}</li>`)
      .join("");

    const addr = order.shippingAddress || {};
    const customerName = [addr.firstName, addr.lastName].filter(Boolean).join(" ") || "Unknown";

    const html = `
      <h2 style="margin:0 0 4px">🔔 New Order — ${order.orderId}</h2>
      <p style="color:#666;margin:0 0 16px">${(order.paymentMode || "").toUpperCase()} · ${inr(order.totalPrice)}</p>
      <p><strong>Customer:</strong> ${customerName}<br/>
         <strong>Phone:</strong> ${addr.phone || "—"}<br/>
         <strong>Address:</strong> ${addr.street || ""}, ${addr.city || ""}, ${addr.state || ""}</p>
      <p><strong>Delivery:</strong> ${order.deliveryDate ? new Date(order.deliveryDate).toLocaleDateString("en-IN") : "—"} ${order.deliverySlot || ""}</p>
      <p><strong>Items:</strong></p>
      <ul>${itemsHtml}</ul>
      <p><a href="https://redheart-admin.vercel.app/orders">Open in Admin Panel →</a></p>
    `;

    await transporter.sendMail({
      from: `"RedHeart Orders 🔔" <${process.env.GMAIL_USER || process.env.SMTP_USER}>`,
      to: ALERT_RECIPIENTS.join(","),
      subject: `New Order ${order.orderId} — ${inr(order.totalPrice)} (${(order.paymentMode || "").toUpperCase()})`,
      html,
    });
  } catch (err) {
    console.error("sendOrderAlertEmail failed:", err.message);
  }
}
