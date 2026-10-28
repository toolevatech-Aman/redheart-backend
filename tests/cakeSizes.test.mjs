import * as C from "../src/utils/cakeSizes.js";
import { checkCakeItems, resolveItem } from "../src/utils/cakeOrderCheck.js";
let pass = 0, fail = 0;
const ok = (n, c, extra = "") => { c ? pass++ : fail++; console.log((c ? "PASS " : "FAIL ") + n + (c ? "" : "  " + extra)); };

// ── prices
ok("rounds to x49/x99", C.roundCakePrice(1385.65) === 1399 && C.roundCakePrice(2621.5) === 2599 && C.roundCakePrice(6142) === 6149);
const sz = Object.fromEntries(C.CAKE_SIZES.map((s) => [s.label, C.sizePrice(749, s)]));
ok("749 cake sizes", sz["1 Kg"] === 1399 && sz["2 Kg"] === 2599 && sz["3 Kg"] === 3799 && sz["5 Kg"] === 6149, JSON.stringify(sz));
ok("every size costs more than the one before, for every price 299..3999",
  Array.from({ length: 3700 }, (_, i) => 299 + i).every((b) => {
    const p = C.CAKE_SIZES.map((s) => C.sizePrice(b, s));
    return p.every((v, i) => v > (i ? p[i - 1] : b)) && p[0] < b * 2 && p[1] < b * 4 && p[2] < b * 6 && p[3] < b * 10;
  }));
ok("per-kg price falls as the cake gets bigger", C.sizePrice(749, C.CAKE_SIZES[3]) / 5 < C.sizePrice(749, C.CAKE_SIZES[0]));

// ── build variations
const cake = { sku: "100001CA", product_id: "P1", selling_price: 749, original_price: 999, costing_price: 400, categorization: { category_name: "Cakes" } };
const b = C.buildSizeVariations(cake);
ok("four variations", b.variations?.length === 4 && b.variations.map((v) => v.variant_name).join() === "1 Kg,2 Kg,3 Kg,5 Kg");
ok("variation has _id, sku, prices, discount", b.variations.every((v) => v._id && v.variant_sku.startsWith("100001CA-") && v.original_price >= v.selling_price && v.discount_percentage >= 0));
ok("sku and id are unique", new Set(b.variations.map((v) => v.variant_sku)).size === 4);
ok("original price scales too", b.variations[0].original_price > 1399 && b.variations[0].original_price <= C.roundCakePrice(999 * 1.85));
ok("cost scales", b.variations[0].costing_price === C.roundCakePrice(400 * 1.85));
ok("no original price -> no fake discount", C.buildSizeVariations({ ...cake, original_price: undefined }).variations.every((v) => v.discount_percentage === 0));
ok("not a cake skipped", C.buildSizeVariations({ ...cake, categorization: { category_name: "Flowers" } }).skip === "not a cake");
ok("existing sizes skipped", C.buildSizeVariations({ ...cake, variations: b.variations }).skip === "already has sizes");
ok("other variations skipped", C.buildSizeVariations({ ...cake, variations: [{ variant_name: "With candles" }] }).skip === "has other variations");
ok("no price skipped", !!C.buildSizeVariations({ ...cake, selling_price: 0 }).skip);

// ── message
ok("message trimmed + capped", C.cleanCakeMessage("  Happy   Birthday   Riya  ") === "Happy Birthday Riya" && C.cleanCakeMessage("x".repeat(80)).length === 30);
ok("tags removed whole", C.cleanCakeMessage("Hi <b>Riya</b>") === "Hi Riya" && C.cleanCakeMessage("a < b") === "a b");
ok("message strips tags and control chars", !/[<>]/.test(C.cleanCakeMessage("<script>alert(1)</script>")) && C.cleanCakeMessage("a\u0000b\nc") === "a b c");
ok("message non-string safe", C.cleanCakeMessage(null) === "" && C.cleanCakeMessage(12345) === "12345" && C.cleanCakeMessage({}) !== undefined);
ok("emoji and Hindi kept", C.cleanCakeMessage("जन्मदिन मुबारक 🎂") === "जन्मदिन मुबारक 🎂");

// ── slots / notice
ok("slot starts", C.slotStartMinutes("9:00 - 13:00") === 540 && C.slotStartMinutes("7:00 AM - 9:00 AM") === 420 && C.slotStartMinutes("23:00 - 00:00") === 1380 && C.slotStartMinutes("1:00 PM - 3:00 PM") === 780 && C.slotStartMinutes("12:00 AM - 1:00 AM") === 0);
ok("express / garbage have no start", C.slotStartMinutes("30-60 Minutes from order") === null && C.slotStartMinutes("soon") === null && C.slotStartMinutes(undefined) === null);
ok("size names", C.leadHoursForVariantName("5 Kg") === 24 && C.leadHoursForVariantName("5kg") === 24 && C.leadHoursForVariantName(" 5  KG ") === 24 && C.leadHoursForVariantName("3 Kg") === 0 && C.leadHoursForVariantName("") === 0);
// now = Mon 14 Dec 2026 15:00 IST = 09:30Z
const now = new Date("2026-12-14T09:30:00Z");
const chk = (date, slot, lead = 24) => C.checkLeadTime({ leadHours: lead, deliveryDate: new Date(date), deliverySlot: slot, now });
ok("same day refused", !!chk("2026-12-14", "18:00 - 21:00"));
ok("tomorrow before 3pm refused", !!chk("2026-12-15", "9:00 - 13:00") && !!chk("2026-12-15", "12:00 - 15:00") && !!chk("2026-12-15", "7:00 AM - 9:00 AM"));
ok("tomorrow from 3pm ok", chk("2026-12-15", "15:00 - 18:00") === null && chk("2026-12-15", "18:00 - 21:00") === null);
ok("day after ok", chk("2026-12-16", "9:00 - 13:00") === null);
ok("express refused", !!chk("2026-12-16", "30-60 Minutes from order"));
ok("missing slot or date refused", !!chk("2026-12-16", null) && !!C.checkLeadTime({ leadHours: 24, deliveryDate: null, deliverySlot: "9:00 - 13:00", now }));
ok("no lead -> no check", C.checkLeadTime({ leadHours: 0, deliveryDate: null, deliverySlot: null, now }) === null);
ok("midnight slot day before is refused", !!chk("2026-12-14", "23:00 - 00:00"));
ok("requiredLeadHours", C.requiredLeadHours([{ variant_name: "1 Kg" }, { variant_name: "5 Kg" }]) === 24 && C.requiredLeadHours([{ variant_name: "2 Kg" }]) === 0);

// ── order check
const oid = (n) => n.toString(16).padStart(24, "0");
const prod = { _id: oid(1), product_id: "P1", selling_price: 749, categorization: { category_name: "Cakes" }, variations: [{ _id: oid(11), variant_name: "1 Kg", selling_price: 1399 }, { _id: oid(15), variant_name: "5 Kg", selling_price: 6149 }] };
const flower = { _id: oid(2), product_id: "P2", selling_price: 599, categorization: { category_name: "Flowers" }, variations: [] };
const item = (o) => ({ productId: "P1", _id: oid(1), name: "Cake", variant_name: "", selling_price: 749, quantity: 1, add_ons: [], ...o });
const run = (items, extra = {}) => checkCakeItems({ items, products: [prod, flower], deliveryDate: new Date("2026-12-16"), deliverySlot: "9:00 - 13:00", now, ...extra });

ok("resolves by product_id, _id and variation _id", resolveItem({ productId: "P1" }, [prod]).product === prod && resolveItem({ productId: oid(1) }, [prod]).product === prod && resolveItem({ productId: oid(11) }, [prod]).variant.variant_name === "1 Kg");
ok("half-kg cake passes, message cleaned", run([item({ cake_message: " Happy <b>B'day</b> " })]).items[0].cake_message === "Happy B'day");
ok("message dropped for non-cakes", run([item({ productId: "P2", _id: oid(2), selling_price: 599, cake_message: "hi" })]).items[0].cake_message === "");
ok("1 kg at the right price passes", !run([item({ productId: oid(11), variant_name: "1 Kg", selling_price: 1399 })]).error);
ok("1 kg for a half-kg price is refused (409)", run([item({ productId: oid(11), variant_name: "1 Kg", selling_price: 749 })]).error?.status === 409);
ok("half-kg cake below price is refused", run([item({ selling_price: 400 })]).error?.status === 409);
ok("paying more than the price is allowed", !run([item({ selling_price: 800 })]).error);
ok("Rs 1 rounding tolerated", !run([item({ selling_price: 748.5 })]).error);
ok("tampered variant_name is replaced by the real one", run([item({ productId: oid(15), variant_name: "1 Kg", selling_price: 6149 })], { deliverySlot: "9:00 - 13:00", deliveryDate: new Date("2026-12-14") }).error?.status === 400);
ok("5 kg for tomorrow morning refused", run([item({ productId: oid(15), variant_name: "5 Kg", selling_price: 6149 })], { deliveryDate: new Date("2026-12-15"), deliverySlot: "9:00 - 13:00" }).error?.status === 400);
ok("5 kg with 24h notice passes", !run([item({ productId: oid(15), variant_name: "5 Kg", selling_price: 6149 })], { deliveryDate: new Date("2026-12-16"), deliverySlot: "9:00 - 13:00" }).error);
ok("5 kg with per-item slot is judged on its own slot",
  run([item({ productId: oid(15), variant_name: "5 Kg", selling_price: 6149 }), item({ productId: "P2", _id: oid(2), selling_price: 599 })], {
    deliveryDate: null, deliverySlot: null,
    separate: [{ productId: oid(15), deliveryDate: "16-12-26", deliverySlot: "9:00 - 13:00" }, { productId: "P2", deliveryDate: "14-12-26", deliverySlot: "18:00 - 21:00" }],
  }).error === undefined);
ok("5 kg per-item slot too soon refused",
  run([item({ productId: oid(15), variant_name: "5 Kg", selling_price: 6149 })], { deliveryDate: null, deliverySlot: null, separate: [{ productId: oid(15), deliveryDate: "15-12-26", deliverySlot: "9:00 - 13:00" }] }).error?.status === 400);
ok("non-cake and unknown items untouched", run([item({ productId: "ZZZ", _id: "ZZZ", selling_price: 1 }), item({ productId: "P2", _id: oid(2), selling_price: 599 })]).items.length === 2);
ok("empty and undefined carts", run([]).items.length === 0 && run(undefined).items.length === 0);

ok("product_ref is the real product even for a size id", run([item({ productId: oid(11), variant_name: "1 Kg", selling_price: 1399 })]).items[0].product_ref === oid(1) && run([item({})]).items[0].product_ref === oid(1));
ok("unknown product has no product_ref", run([item({ productId: "ZZZ", _id: "ZZZ" })]).items[0].product_ref === undefined);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
