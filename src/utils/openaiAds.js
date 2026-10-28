// OpenAI (ChatGPT) Ads Conversions API: server-side "order_created" (purchase) event.
// The browser pixel sends the same event from /order-success with event_id = the order's _id; the API
// de-duplicates on (pixel id, event name, id), so a purchase is counted once even though both paths report it.
// Inert until OPENAI_CONVERSIONS_API_KEY is set (Ads Manager -> Conversions), like src/utils/ga4.js.
//   OPENAI_CONVERSIONS_API_KEY  server-only key
//   OPENAI_ADS_PIXEL_ID         defaults to the site's pixel
//   OPENAI_ADS_VALIDATE_ONLY=1  send with validate_only:true (checks the payload, saves nothing)
import { createHash } from "crypto";

const PIXEL_ID = process.env.OPENAI_ADS_PIXEL_ID || "XsTAf3u89hjGmAHq9puKCa";
const ENDPOINT = "https://bzr.openai.com/v1/events";
const SOURCE_URL = "https://www.redheart.in/order-success";

const sha256 = (v) => createHash("sha256").update(v, "utf8").digest("hex");

// Email: trim + lowercase. Phone: digits only with country code (a bare 10-digit Indian number gets 91),
// no leading zeros, 8-15 digits. Returns "" when it can't be used.
export const hashEmail = (e) => {
  const v = String(e || "").trim().toLowerCase();
  return v.includes("@") ? sha256(v) : "";
};
export const hashPhone = (p) => {
  let d = String(p || "").replace(/\D/g, "").replace(/^0+/, "");
  if (d.length === 10) d = "91" + d;
  return d.length >= 8 && d.length <= 15 ? sha256(d) : "";
};
export const hashExternalId = (id) => {
  const v = String(id || "").trim();
  return v ? sha256(v) : "";
};

const paise = (rupees) => Math.max(0, Math.round(Number(rupees) * 100) || 0);
const clean = (s, max = 200) => String(s || "").slice(0, max);

// The stored ad attribution (captured at checkout from the __oppref / __obref cookies) is plain strings.
export function cleanAttribution(a) {
  if (!a || typeof a !== "object") return undefined;
  const out = {};
  for (const k of ["oppref", "obref", "userAgent"]) {
    const v = clean(a[k], k === "userAgent" ? 400 : 200).trim();
    if (v && !/[\u0000-\u001f]/.test(v)) out[k] = v;
  }
  return Object.keys(out).length ? out : undefined;
}

export function buildOrderCreatedEvent(order, user, nowMs = Date.now()) {
  const contents = (order.cartItems || [])
    .map((ci) => ({
      id: clean(ci.product_ref || ci.productId, 100),
      name: clean(ci.name, 200),
      content_type: "product",
      quantity: Math.max(1, Math.round(Number(ci.quantity) || 1)),
      amount: paise(ci.selling_price),
      currency: "INR",
    }))
    .filter((c) => c.id && c.name);

  const attr = order.adAttribution || {};
  const u = {};
  const em = hashEmail(user?.email); if (em) u.emails_sha256 = [em];
  const ph = hashPhone(user?.phone || order.billingAddress?.phone); if (ph) u.phone_numbers_sha256 = [ph];
  const ex = hashExternalId(order.userId); if (ex) u.external_ids_sha256 = [ex];
  u.countries = ["IN"];
  if (attr.obref) u.obref = attr.obref;
  if (attr.userAgent) u.user_agent = attr.userAgent;

  return {
    id: String(order._id),
    type: "order_created",
    timestamp_ms: nowMs,
    source_url: SOURCE_URL,
    action_source: "web",
    ...(attr.oppref ? { oppref: attr.oppref } : {}),
    user: u,
    data: {
      type: "contents",
      amount: paise(order.totalPrice),
      currency: "INR",
      ...(contents.length ? { contents } : {}),
    },
  };
}

export async function sendOpenAIPurchase(order, user) {
  const key = process.env.OPENAI_CONVERSIONS_API_KEY;
  if (!key || !order?._id) return;
  const body = {
    ...(process.env.OPENAI_ADS_VALIDATE_ONLY === "1" ? { validate_only: true } : {}),
    integration_source: "redheart_server",
    events: [buildOrderCreatedEvent(order, user)],
  };
  try {
    const res = await fetch(`${ENDPOINT}?pid=${encodeURIComponent(PIXEL_ID)}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) console.error(`OpenAI Conversions API ${res.status} for order ${order._id}: ${(await res.text()).slice(0, 300)}`);
  } catch (err) {
    console.error("OpenAI Conversions API send failed:", err.message);
  }
}
