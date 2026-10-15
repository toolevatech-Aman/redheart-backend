import * as L from "../src/utils/productAdminLogic.js";
let pass = 0, fail = 0;
const ok = (n, c, extra = "") => { c ? pass++ : fail++; console.log((c ? "PASS " : "FAIL ") + n + (c ? "" : "  " + JSON.stringify(extra))); };
const throws = (fn) => { try { fn(); return null; } catch (e) { return e; } };
const bad = (n, fn, rx) => { const e = throws(fn); ok(n, e instanceof L.ProductEditError && e.status === 400 && (!rx || rx.test(e.message)), e && e.message); };

const product = {
  product_id: "P1", name: "Red Roses", slug: "red-roses", sku: "RR1", quantity: 10, costing_price: 300, original_price: 900, selling_price: 700,
  description: "Fresh roses", short_summary: "x",
  categorization: { category_name: "Flowers", subcategory_name: "Roses", occasion_tags: ["birthday"] },
  product_attributes: { color: "red", product_content: ["12 roses"], available_cities: "India", delivery_type: "same_day" },
  media: { primary_image_url: "https://x/a.jpg", gallery_images: ["https://x/b.jpg", "https://x/c.jpg"] },
  metrics: { average_rating: 4.5, review_count: 3, times_ordered: 9 }, customer_reviews: [{ comment: "nice" }],
  care_and_logistics: { care_instructions: ["water daily"], add_ons: [{ _id: "ao1", name: "Vase", selling_price: 200, costing_price: 100, original_price: 250, quantity: 1 }] },
  variations: [{ _id: "v1", variant_name: "Medium", original_price: 900, selling_price: 700, costing_price: 300, inventory: { quantity_available: 5, reorder_point: 2 } },
               { _id: "v2", variant_name: "Large", original_price: 1500, selling_price: 1200, costing_price: 500, inventory: { quantity_available: 3, reorder_point: 1 } }],
  availability: { is_active: true, is_featured: false },
};

// whitelist: things an admin must not edit are ignored, not applied
let r = L.buildProductUpdate(product, { name: "Red Roses Bouquet", metrics: { times_ordered: 999 }, customer_reviews: [], product_id: "HACK", categorization: { category_name: "Cakes" }, _id: "x" });
ok("name updated", r.set.name === "Red Roses Bouquet");
ok("metrics / reviews / product_id / category are never set", !("metrics" in r.set) && !("customer_reviews" in r.set) && !("product_id" in r.set) && !Object.keys(r.set).some((k) => k.includes("category_name")) && !("_id" in r.set), Object.keys(r.set));

// nested sections merge: one field edit must not carry the rest of the section
r = L.buildProductUpdate(product, { media: { primary_image_url: "https://x/new.jpg" } });
ok("only the main image path is set, gallery untouched", Object.keys(r.set).join() === "media.primary_image_url", r.set);
r = L.buildProductUpdate(product, { product_attributes: { color: "deep red" } });
ok("only the colour path is set", Object.keys(r.set).join() === "product_attributes.color");

// prices
r = L.buildProductUpdate(product, { selling_price: "649.5", original_price: 999, costing_price: 310 });
ok("prices parsed from strings and rounded to 2dp", r.set.selling_price === 649.5 && r.set.original_price === 999 && r.set.costing_price === 310);
bad("negative price rejected", () => L.buildProductUpdate(product, { selling_price: -5 }), /Selling price/);
bad("zero selling price rejected", () => L.buildProductUpdate(product, { selling_price: 0 }), /more than zero/);
bad("non-numeric price rejected", () => L.buildProductUpdate(product, { original_price: "abc" }), /Original/);
bad("absurd price rejected", () => L.buildProductUpdate(product, { selling_price: 1e9 }));
r = L.buildProductUpdate(product, { selling_price: 1000, original_price: 800 });
ok("selling above MRP is a warning, not an error", r.warnings.some((w) => /higher than the original/.test(w)), r.warnings);
r = L.buildProductUpdate(product, { selling_price: 250 });
ok("selling below cost is a warning", r.warnings.some((w) => /below the costing/.test(w)), r.warnings);

// text
bad("empty name rejected", () => L.buildProductUpdate(product, { name: "   " }), /Product name/);
bad("empty description rejected", () => L.buildProductUpdate(product, { description: "" }), /Description/);
bad("bad slug rejected (spaces)", () => L.buildProductUpdate(product, { slug: "Red Roses" }), /slug/);
bad("bad slug rejected (double hyphen)", () => L.buildProductUpdate(product, { slug: "red--roses" }));
ok("good slug accepted and lower-cased", L.buildProductUpdate(product, { slug: "Red-Roses-12" }).set.slug === "red-roses-12");
ok("long name is clipped, not stored in full", L.buildProductUpdate(product, { name: "a".repeat(500) }).set.name.length === 200);

// lists / media
r = L.buildProductUpdate(product, { product_attributes: { product_content: ["12 roses", "  ", "12 roses", "greens"] } });
ok("lists are trimmed and de-duplicated", JSON.stringify(r.set["product_attributes.product_content"]) === '["12 roses","greens"]', r.set);
bad("image must be a web address", () => L.buildProductUpdate(product, { media: { primary_image_url: "javascript:alert(1)" } }), /http/);
bad("gallery entries must be web addresses", () => L.buildProductUpdate(product, { media: { gallery_images: ["ftp://x"] } }));
bad("delivery type validated", () => L.buildProductUpdate(product, { product_attributes: { delivery_type: "drone" } }), /Delivery type/);
r = L.buildProductUpdate(product, { media: { primary_image_url: "" } });
ok("clearing the main image warns", r.warnings.some((w) => /no main image/.test(w)));

// variations keep their _id; new rows get none (mongoose adds one); stale ids are refused
r = L.buildProductUpdate(product, { variations: [
  { _id: "v1", variant_name: "Medium", original_price: 900, selling_price: 650, costing_price: 300, inventory: { quantity_available: 5, reorder_point: 2 } },
  { variant_name: "Jumbo", original_price: 2000, selling_price: 1800, costing_price: 800, inventory: { quantity_available: 2 } } ] });
ok("existing variation keeps its _id", r.set.variations[0]._id === "v1");
ok("new variation has no _id yet", r.set.variations[1]._id === undefined);
ok("discount % computed from MRP and selling price", r.set.variations[0].discount_percentage === 28 && r.set.variations[1].discount_percentage === 10, r.set.variations.map((v) => v.discount_percentage));
ok("history names the price change, the added row and the removed row", r.changes[0].detail.some((d) => /Medium.*selling price: 700 -> 650/.test(d)) && r.changes[0].detail.some((d) => /added "Jumbo"/.test(d)) && r.changes[0].detail.some((d) => /removed "Large"/.test(d)), r.changes[0].detail);
bad("stale variation id refused", () => L.buildProductUpdate(product, { variations: [{ _id: "gone", variant_name: "X", original_price: 1, selling_price: 1 }] }), /no longer exists/);
bad("variation needs a name", () => L.buildProductUpdate(product, { variations: [{ variant_name: "", original_price: 1, selling_price: 1 }] }), /name/);
r = L.buildProductUpdate(product, { variations: product.variations.map((v) => ({ ...v })) });
ok("re-saving untouched variations is not reported as a change", r.changes.length === 0, r.changes);
r = L.buildProductUpdate(product, { care_and_logistics: { add_ons: [{ _id: "ao1", name: "Vase", selling_price: 220, costing_price: 100, original_price: 250, quantity: 1 }] } });
ok("add-on keeps _id and price change is logged", r.set["care_and_logistics.add_ons"][0]._id === "ao1" && r.changes.length === 1, r.changes);

// availability
r = L.buildProductUpdate(product, { availability: { is_active: false, is_featured: true } });
ok("active/featured toggles", r.set["availability.is_active"] === false && r.set["availability.is_featured"] === true);
bad("invalid restock date refused", () => L.buildProductUpdate(product, { availability: { last_restock_date: "not a date" } }));

// diff
r = L.buildProductUpdate(product, { name: "Red Roses", selling_price: 700, quantity: 25 });
ok("only genuinely changed fields appear in the change log", r.changes.length === 1 && r.changes[0].field === "quantity" && r.changes[0].from === 10 && r.changes[0].to === 25, r.changes);
ok("empty body is refused", !!throws(() => L.buildProductUpdate(product, null)));
console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
