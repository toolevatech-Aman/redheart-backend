// GA4 Measurement Protocol — server-side event reporting.
// Used only as a recovery path (see orderController.razorpayOrderWebhook)
// for orders whose browser never returned to fire the client-side
// `purchase` event itself. No-ops safely if either env var is unset, so
// this is inert until GA_MEASUREMENT_PROTOCOL_SECRET is configured.
//
// GA_MEASUREMENT_PROTOCOL_SECRET: GA4 Admin → Data Streams → (web stream)
// → Measurement Protocol API secrets → Create.
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || "G-6RGL4L2M3C";
const GA_API_SECRET = process.env.GA_MEASUREMENT_PROTOCOL_SECRET;

export async function sendGA4Purchase(order) {
  if (!GA_API_SECRET || !order?.gaClientId) return;

  const items = (order.cartItems || []).map((ci) => ({
    item_id: ci.productId || "",
    item_name: ci.name || "",
    price: Number(ci.selling_price) || 0,
    quantity: Number(ci.quantity) || 1,
  }));

  const body = {
    client_id: order.gaClientId,
    events: [
      {
        name: "purchase",
        params: {
          transaction_id: order.orderId,
          currency: "INR",
          value: Number(order.totalPrice) || 0,
          shipping: Number(order.totalShipmentPrice) || 0,
          ...(order.coupanApplied ? { coupon: order.coupanApplied } : {}),
          items,
        },
      },
    ],
  };

  try {
    const res = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
      { method: "POST", body: JSON.stringify(body) }
    );
    if (!res.ok) console.error(`GA4 Measurement Protocol responded ${res.status}`);
  } catch (err) {
    console.error("GA4 Measurement Protocol send failed:", err.message);
  }
}
