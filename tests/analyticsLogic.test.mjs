import * as A from "../src/utils/analyticsLogic.js";
let pass = 0, fail = 0;
const ok = (n, c, extra = "") => { c ? pass++ : fail++; console.log((c ? "PASS " : "FAIL ") + n + (c ? "" : "  " + extra)); };

// ── ranges ──
const now = new Date("2026-10-31T10:00:00+05:30");
const p30 = A.resolveRange({ range: "30d" }, now);
ok("30d preset starts 29 days back, open end", p30.range === "30d" && p30.to === null && p30.from <= now && (now - p30.from) / 864e5 < 30);
ok("7d / 90d presets", A.resolveRange({ range: "7d" }, now).range === "7d" && A.resolveRange({ range: "90d" }, now).range === "90d");
ok("all time still works for old callers", A.resolveRange({ range: "all" }).from === null);
ok("unknown range falls back to 30d", A.resolveRange({ range: "weird" }, now).range === "30d" && A.resolveRange({}, now).range === "30d");
const c = A.resolveRange({ range: "custom", from: "2026-10-01", to: "2026-10-15" });
ok("custom: from 00:00 IST to 23:59:59.999 IST", c.range === "custom" && c.from.toISOString() === "2026-09-30T18:30:00.000Z" && c.to.toISOString() === "2026-10-15T18:29:59.999Z");
ok("custom: includes the last day, excludes the next", A.inRange("2026-10-15T18:00:00Z", c) && !A.inRange("2026-10-15T18:30:00Z", c) && !A.inRange("2026-09-30T18:29:00Z", c) && A.inRange("2026-09-30T18:30:00Z", c));
const rev = A.resolveRange({ range: "custom", from: "2026-10-15", to: "2026-10-01" });
ok("custom: reversed dates are swapped", rev.fromDay === "2026-10-01" && rev.toDay === "2026-10-15");
ok("custom: one day range works", (() => { const d = A.resolveRange({ range: "custom", from: "2026-10-05", to: "2026-10-05" }); return d.to - d.from === 864e5 - 1; })());
ok("custom: bad / missing dates fall back to 30 days", A.resolveRange({ range: "custom", from: "x", to: "2026-10-01" }, now).range === "30d" && A.resolveRange({ range: "custom" }, now).range === "30d" && A.resolveRange({ range: "custom", from: "2026-13-45", to: "2026-10-01" }, now).range === "30d");

// ── names ──
const known = new Map([["madhya pradesh", "Madhya Pradesh"], ["uttar pradesh", "Uttar Pradesh"]]);
ok("state case/space normalised", A.normalizeState("  madhya   PRADESH ", known) === "Madhya Pradesh" && A.normalizeState("UTTAR PRADESH") === "Uttar Pradesh");
ok("state aliases", A.normalizeState("Orissa") === "Odisha" && A.normalizeState("New Delhi") === "Delhi" && A.normalizeState("Uttaranchal") === "Uttarakhand");
ok("spelling variants merge into one state", ["Tamilnadu", "Tamil Nadu", "tamil-nadu", "TAMIL NADU"].every((x) => A.normalizeState(x) === "Tamil Nadu") && A.normalizeState("West bengal") === "West Bengal" && A.normalizeState("Jammu and Kashmir") === "Jammu & Kashmir");
ok("typos and short forms are fixed", A.normalizeState("Himacha Pradesh") === "Himachal Pradesh" && A.normalizeState("Mp") === "Madhya Pradesh" && A.normalizeState("UP") === "Uttar Pradesh" && A.normalizeState("Chattisgarh") === "Chhattisgarh" && A.normalizeState("Maharashtre") === "Maharashtra");
ok("Uttar Pradesh and Uttarakhand are never mixed up", A.normalizeState("Uttarakhand") === "Uttarakhand" && A.normalizeState("Uttar Pradesh") === "Uttar Pradesh" && A.normalizeState("Arunachal Pradesh") === "Arunachal Pradesh" && A.normalizeState("Andhra Pradesh") === "Andhra Pradesh");
ok("something that is not a state is kept, tidied", A.normalizeState("  some   place ") === "Some Place");
ok("blank state stays blank", A.normalizeState("", known) === "" && A.normalizeState(null) === "");
ok("city label / key", A.cityLabel(" bhopal ") === "Bhopal" && A.cityKey("BHOPAL") === "bhopal" && A.cityLabel("") === "Unknown" && A.cityLabel("navi mumbai") === "Navi Mumbai");
const c2s = new Map([["bhopal", "Madhya Pradesh"], ["indore", "Madhya Pradesh"]]);
ok("locate: state on the order wins", A.locate({ city: "Bhopal", state: "Delhi" }, c2s, known).state === "Delhi");
ok("locate: blank state comes from the city", A.locate({ city: "BHOPAL", state: "" }, c2s, known).state === "Madhya Pradesh");
ok("locate: junk in the state box is ignored, city decides", A.locate({ city: "Bhopal", state: "Frf" }, c2s, known).state === "Madhya Pradesh" && A.locate({ city: "Atlantis", state: "Fd" }, c2s, known).state === "Unknown" && A.locate({ city: "X", state: "Kashmir" }, c2s, known).state === "Jammu & Kashmir");
ok("locate: unknown city + no state = Unknown", A.locate({ city: "Atlantis" }, c2s, known).state === "Unknown");

// ── customer type ──
ok("customer type", A.customerType(0) === "none" && A.customerType(1) === "new" && A.customerType(2) === "repeat" && A.customerType(7) === "repeat");
const paid = new Map([["u1", [{ orderId: "A", createdAt: "2026-10-01" }, { orderId: "B", createdAt: "2026-10-10" }, { orderId: "C", createdAt: "2026-10-20" }]], ["u2", [{ orderId: "D", createdAt: "2026-10-05" }]]]);
const tags = A.orderCustomerTags([
  { orderId: "A", userId: "u1", createdAt: "2026-10-01" }, { orderId: "B", userId: "u1", createdAt: "2026-10-10" },
  { orderId: "C", userId: "u1", createdAt: "2026-10-20" }, { orderId: "D", userId: "u2", createdAt: "2026-10-05" },
  { orderId: "E", userId: "u2", createdAt: "2026-10-25" },   // unpaid manual order after a paid one
  { orderId: "F", userId: "u3", createdAt: "2026-10-25" },   // first order, still unpaid
], paid);
ok("first order is new", tags.get("A").customerType === "new" && tags.get("A").orderSeq === 1 && tags.get("D").customerType === "new");
ok("later orders are repeat with the right number", tags.get("B").customerType === "repeat" && tags.get("B").orderSeq === 2 && tags.get("C").orderSeq === 3);
ok("unpaid order counts after paid ones / alone", tags.get("E").customerType === "repeat" && tags.get("E").orderSeq === 2 && tags.get("F").customerType === "new");

// ── location tables ──
const orders = [
  { userId: "u1", totalPrice: 1000, _seq: 1, shippingAddress: { city: "bhopal", state: "" } },
  { userId: "u1", totalPrice: 500, _seq: 2, shippingAddress: { city: "Bhopal", state: "Madhya Pradesh" } },
  { userId: "u2", totalPrice: 2000, _seq: 3, shippingAddress: { city: "Indore", state: "madhya pradesh" } },
  { userId: "u3", totalPrice: 700, _seq: 1, shippingAddress: { city: "Lucknow", state: "Uttar Pradesh" } },
  { userId: "u4", totalPrice: 300, _seq: 1, shippingAddress: { city: "Atlantis", state: "" } },
];
const t = A.buildLocationTables({
  orders, firstOrderInRange: new Set(["u1", "u3"]), cityToState: c2s, knownStates: known,
  signups: [{ city: "Bhopal", state: "" }, { city: "bhopal", state: "Madhya Pradesh" }, { city: "Lucknow", state: "" }, { city: "", state: "" }],
});
const bhopal = t.byCity.find((r) => r.city === "Bhopal");
ok("city rows merge spellings and add up", bhopal.orders === 2 && bhopal.revenue === 1500 && bhopal.buyers === 1 && bhopal.aov === 750);
ok("city: new vs repeat orders", bhopal.newOrders === 1 && bhopal.repeatOrders === 1);
ok("city: new vs returning buyers", bhopal.newBuyers === 1 && bhopal.returningBuyers === 0 && t.byCity.find((r) => r.city === "Indore").returningBuyers === 1);
ok("city signups (saved-address users) counted", bhopal.signups === 2 && t.byCity.find((r) => r.city === "Lucknow").signups === 1);
const mp = t.byState.find((r) => r.state === "Madhya Pradesh");
ok("state rows roll cities up", mp.orders === 3 && mp.revenue === 3500 && mp.buyers === 2 && mp.signups === 2);
ok("state: buyer split", mp.newBuyers === 1 && mp.returningBuyers === 1);
ok("unlocatable order lands in Unknown", t.byState.find((r) => r.state === "Unknown").orders === 1);
ok("sorted by orders, biggest first", t.byState[0].state === "Madhya Pradesh" && t.byCity[0].orders >= t.byCity[1].orders);
ok("signup with no address is not placed anywhere", t.byState.reduce((s, r) => s + r.signups, 0) === 3);
ok("same city name in two states stays apart", A.buildLocationTables({ orders: [
  { userId: "a", totalPrice: 1, _seq: 1, shippingAddress: { city: "Aurangabad", state: "Maharashtra" } },
  { userId: "b", totalPrice: 1, _seq: 1, shippingAddress: { city: "Aurangabad", state: "Bihar" } }], cityToState: c2s, knownStates: known }).byCity.length === 2);
const empty = A.buildLocationTables({ orders: [], cityToState: c2s, knownStates: known });
ok("empty period gives empty tables", empty.byCity.length === 0 && empty.byState.length === 0);

console.log(`\n${pass} pass, ${fail} fail`);
process.exit(fail ? 1 : 0);
