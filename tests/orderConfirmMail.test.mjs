import test from "node:test";
import assert from "node:assert/strict";
import { buildConfirmationEmail } from "../src/utils/orderConfirmMail.js";

const base = {
  orderId: "ORDRH17929107503583449", paymentMode: "PREPAID", paymentStatus: "PAID", totalPrice: 1348, coupanDiscount: 100, coupanApplied: "SOMI",
  deliveryDate: new Date("2026-11-02T00:00:00Z"), deliverySlot: "Midnight 11 PM - 12 AM",
  billingAddress: { firstName: "Aman" },
  shippingAddress: { firstName: "Ananya", lastName: "S", street: "12 MG Road", city: "Indore", state: "MP", postalCode: "452001", phone: "9876543210" },
  cartItems: [{ name: "Red Roses <b>", variant_name: "½ kg", quantity: 2, selling_price: 599, cake_message: 'Happy "B-day"' }],
};

test("contains order number, track link, date, total", () => {
  const m = buildConfirmationEmail(base);
  assert.match(m.subject, /ORDRH17929107503583449/);
  assert.match(m.html, /track-order\?order=ORDRH17929107503583449/);
  assert.match(m.html, /Monday, 2 November 2026/);
  assert.match(m.html, /₹1,348/);
  assert.match(m.html, /Paid online/);
  assert.match(m.text, /Track it: https:\/\/www\.redheart\.in\/track-order/);
});
test("escapes customer-supplied text", () => {
  const m = buildConfirmationEmail(base);
  assert.ok(!m.html.includes("<b>"));
  assert.match(m.html, /Red Roses &lt;b&gt;/);
  assert.match(m.html, /&ldquo;Happy &quot;B-day&quot;&rdquo;/);
});
test("COD wording and no coupon row without a discount", () => {
  const m = buildConfirmationEmail({ ...base, paymentMode: "COD", paymentStatus: "COD", coupanDiscount: 0 });
  assert.match(m.html, /Pay on delivery/);
  assert.ok(!m.html.includes("Coupon"));
});
test("no delivery date still renders", () => {
  const m = buildConfirmationEmail({ ...base, deliveryDate: null, deliverySlot: null });
  assert.match(m.html, /As chosen for each item/);
});

test("includes the next-order coupon", () => {
  const m = buildConfirmationEmail(base);
  assert.match(m.html, /HAPPY100/);
  assert.match(m.html, /Flat ₹100 off on your next order/);
  assert.match(m.text, /code HAPPY100/);
});
