import * as T from "../src/utils/orderTracking.js";
let pass = 0, fail = 0;
const ok = (n, c, extra = "") => { c ? pass++ : fail++; console.log((c ? "PASS " : "FAIL ") + n + (c ? "" : "  " + extra)); };

// every option in the admin's status dropdown (order.js STATUS_OPTIONS) + the two legacy values the backend accepts
const ADMIN = ["Pending", "Accepted", "InTransit", "Out Of Delivery", "Delivered", "Cancelled"];
ok("every admin status has customer wording", ADMIN.every((s) => T.STATUS_INFO[s] && T.STATUS_INFO[s].label && T.STATUS_INFO[s].detail));
ok("legacy statuses map too", T.statusInfo("Processing").label === "Order accepted" && T.statusInfo("Shipped").label === "In transit");
ok("unknown status falls back to order placed", T.statusInfo("???").step === 0 && T.statusInfo(undefined).label === "Order placed");
ok("journey steps move forward with the status", ADMIN.filter((s) => s !== "Cancelled").map((s) => T.statusInfo(s).step).join() === "0,1,2,3,4");
ok("journey has 5 labelled steps matching the max step", T.JOURNEY.length === 5 && T.statusInfo("Delivered").step === T.JOURNEY.length - 1);
ok("cancelled is off the journey", T.statusInfo("Cancelled").step === -1);

ok("phone: last 10 digits, any format", T.last10("+91 98765-43210") === "9876543210" && T.last10("09876543210") === "9876543210" && T.last10("(98765) 43210") === "9876543210");
const order = { billingAddress: { phone: "9876543210" }, shippingAddress: { phone: "+91 91234 56789" } };
ok("sender phone matches", T.phoneMatches(order, "98765 43210") && T.phoneMatches(order, "+919876543210"));
ok("recipient phone matches", T.phoneMatches(order, "9123456789"));
ok("wrong / short / empty phone does not", !T.phoneMatches(order, "9000000000") && !T.phoneMatches(order, "12345") && !T.phoneMatches(order, "") && !T.phoneMatches(order, undefined));
ok("order with no phones never matches", !T.phoneMatches({}, "9876543210") && !T.phoneMatches({ billingAddress: {}, shippingAddress: {} }, "9876543210"));

ok("lookup: order number any case/spaces", JSON.stringify(T.parseLookup(" ordrh1792910750358 3449 ")) === JSON.stringify({ orderId: "ORDRH17929107503583449" }));
ok("lookup: 24-hex id", JSON.stringify(T.parseLookup("65f0c0ffee0000000000abcd")) === JSON.stringify({ _id: "65f0c0ffee0000000000abcd" }));
ok("lookup rejects junk and operators", T.parseLookup("") === null && T.parseLookup("a") === null && T.parseLookup("$ne") === null && T.parseLookup({ $ne: 1 }) === null && T.parseLookup("x".repeat(60)) === null && T.parseLookup("a b;drop") === null);

const full = { orderId: "ORDRH1", orderStatus: "Out Of Delivery", createdAt: "2026-10-20T10:00:00Z", updatedAt: "2026-10-21T08:00:00Z", deliveryDate: "2026-10-21T00:00:00Z", deliverySlot: "9:00 - 13:00",
  shippingAddress: { street: "1 Secret Road", phone: "9123456789", firstName: "Asha" }, billingAddress: { phone: "9876543210" }, userId: "u1", adminNote: "internal", paymentStatus: "PAID", razorpayPaymentId: "pay_1", totalPrice: 999, orderNote: "gift note",
  cartItems: [{ name: "Black Forest", variant_name: "1 Kg", quantity: 2, image_url: "https://x/i.jpg", cake_message: "Hi", selling_price: 1149, productId: "p" }] };
const v = T.publicOrderView(full);
ok("view shows number, status, label, step, slot", v.orderNumber === "ORDRH1" && v.status === "Out Of Delivery" && v.label === "Out for delivery" && v.step === 3 && v.deliverySlot === "9:00 - 13:00" && v.cancelled === false);
ok("view items", v.items.length === 1 && v.items[0].name === "Black Forest" && v.items[0].variant === "1 Kg" && v.items[0].quantity === 2 && v.items[0].cakeMessage === "Hi");
const json = JSON.stringify(v);
ok("view leaks no address, phone, payment, note or user data", !/Secret Road|Asha|9123456789|9876543210|pay_1|internal|gift note|u1|999|1149/.test(json), json);
ok("cancelled view", T.publicOrderView({ ...full, orderStatus: "Cancelled" }).cancelled === true);
ok("view survives a bare order", T.publicOrderView({ orderId: "X" }).items.length === 0 && T.publicOrderView({ orderId: "X" }).label === "Order placed");

// lock after 5 wrong phones, resets after 30 min or on success
const k = "ORDRHLOCK"; let t0 = 1_000_000;
for (let i = 0; i < 4; i++) T.recordFail(k, t0 + i);
ok("4 misses: not locked", !T.isLocked(k, t0 + 10));
T.recordFail(k, t0 + 5);
ok("5 misses: locked", T.isLocked(k, t0 + 10));
ok("lock expires after 30 min", !T.isLocked(k, t0 + 31 * 60 * 1000));
T.recordFail("K2", t0); T.clearFails("K2");
ok("success clears the counter", !T.isLocked("K2", t0 + 1) && (() => { for (let i = 0; i < 4; i++) T.recordFail("K2", t0); return !T.isLocked("K2", t0); })());
ok("another order is unaffected by a lock", !T.isLocked("OTHER", t0 + 10));
console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
