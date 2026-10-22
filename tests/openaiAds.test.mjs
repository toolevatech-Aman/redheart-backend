import { createHash } from "crypto";
import * as A from "../src/utils/openaiAds.js";
let pass = 0, fail = 0;
const ok = (n, c, extra = "") => { c ? pass++ : fail++; console.log((c ? "PASS " : "FAIL ") + n + (c ? "" : "  " + extra)); };
const sha = (s) => createHash("sha256").update(s).digest("hex");

ok("email normalised then hashed", A.hashEmail("  Test@Example.COM ") === sha("test@example.com"));
ok("bad email -> empty", A.hashEmail("nope") === "" && A.hashEmail("") === "" && A.hashEmail(null) === "");
ok("10-digit Indian phone gets 91", A.hashPhone("98765 43210") === sha("919876543210"));
ok("+91 and 0 prefixes and separators", A.hashPhone("+91-98765-43210") === sha("919876543210") && A.hashPhone("(+91) 98765.43210") === sha("919876543210") && A.hashPhone("0919876543210") === sha("919876543210"));
ok("too short / empty phone -> empty", A.hashPhone("12345") === "" && A.hashPhone("") === "" && A.hashPhone(undefined) === "");
ok("external id hashed as-is, case kept", A.hashExternalId(" AbC-1 ") === sha("AbC-1") && A.hashExternalId("") === "");

const order = {
  _id: "65f0c0ffee0000000000abcd", userId: "u-123", totalPrice: 1499.5,
  billingAddress: { phone: "9876543210" },
  adAttribution: { oppref: "opp_1", obref: "123e4567-e89b-42d3-a456-426614174000", userAgent: "Mozilla/5.0" },
  cartItems: [
    { productId: "var1", product_ref: "prod1", name: "Black Forest Cake", selling_price: 1149, quantity: 1 },
    { productId: "p2", name: "Rose Bouquet", selling_price: 350.5, quantity: 2 },
    { productId: "", name: "no id" },
  ],
};
const e = A.buildOrderCreatedEvent(order, { email: "A@b.com", phone: "" }, 1760000000000);
ok("event id is the order _id", e.id === "65f0c0ffee0000000000abcd");
ok("type, source and timestamp", e.type === "order_created" && e.action_source === "web" && e.source_url.startsWith("https://") && e.timestamp_ms === 1760000000000);
ok("amount in paise, INR", e.data.type === "contents" && e.data.amount === 149950 && e.data.currency === "INR");
ok("contents: ids prefer product_ref, units in paise, no empty rows", e.data.contents.length === 2 && e.data.contents[0].id === "prod1" && e.data.contents[0].amount === 114900 && e.data.contents[1].amount === 35050 && e.data.contents[1].quantity === 2 && e.data.contents.every((c) => c.content_type === "product" && c.currency === "INR"));
ok("oppref + obref + user agent forwarded", e.oppref === "opp_1" && e.user.obref === order.adAttribution.obref && e.user.user_agent === "Mozilla/5.0");
ok("PII is hashed, phone falls back to billing phone", e.user.emails_sha256[0] === sha("a@b.com") && e.user.phone_numbers_sha256[0] === sha("919876543210") && e.user.external_ids_sha256[0] === sha("u-123"));
ok("no raw email, phone or user id anywhere", !JSON.stringify(e).includes("a@b.com") && !JSON.stringify(e).includes("9876543210") && !JSON.stringify(e).includes("u-123"));
ok("each user list has <= 3 values", Object.values(e.user).filter(Array.isArray).every((l) => l.length <= 3));
const bare = A.buildOrderCreatedEvent({ _id: "x1", totalPrice: 0, cartItems: [] }, null);
ok("order with nothing optional still valid", bare.id === "x1" && bare.data.amount === 0 && bare.data.contents === undefined && bare.user.countries[0] === "IN" && !("oppref" in bare));
ok("cleanAttribution keeps strings, drops junk", JSON.stringify(A.cleanAttribution({ oppref: "a", obref: "b", evil: "x", userAgent: "ua\nx" })) === JSON.stringify({ oppref: "a", obref: "b" }) && A.cleanAttribution(null) === undefined && A.cleanAttribution("str") === undefined && A.cleanAttribution({}) === undefined);
ok("cleanAttribution caps length", A.cleanAttribution({ oppref: "x".repeat(500) }).oppref.length === 200);
// without a key the sender does nothing and never throws
delete process.env.OPENAI_CONVERSIONS_API_KEY;
let threw = false; try { await A.sendOpenAIPurchase(order, null); } catch { threw = true; }
ok("no API key -> silent no-op", !threw);
console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
