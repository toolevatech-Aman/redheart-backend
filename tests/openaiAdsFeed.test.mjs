import { toAdsCsv, ADS_FEED_COLUMNS } from "../src/utils/openaiProductFeed.js";
let pass = 0, fail = 0;
const ok = (n, c, extra = "") => { c ? pass++ : fail++; console.log((c ? "PASS " : "FAIL ") + n + (c ? "" : "  " + extra)); };
// minimal CSV parser (RFC 4180)
const parse = (t) => { const rows = []; let r = [], c = "", q = false; for (let i = 0; i < t.length; i++) { const ch = t[i]; if (q) { if (ch === '"') { if (t[i + 1] === '"') { c += '"'; i++; } else q = false; } else c += ch; } else if (ch === '"') q = true; else if (ch === ",") { r.push(c); c = ""; } else if (ch === "\n") { r.push(c); rows.push(r); r = []; c = ""; } else c += ch; } return rows; };

const cake = { product_id: "P1", sku: "100001CA", slug: "white-cake", name: 'White "Rosette" Cake, 3 layers', description: "<p>Soft&nbsp;cake <b>fresh</b></p>", selling_price: 629, original_price: 754.8, quantity: 5,
  categorization: { category_name: "Cakes", subcategory_name: "Black Forest Cakes" }, media: { primary_image_url: "https://x/y/a%20b.webp?alt=media", gallery_images: ["https://x/y/b.jpg?alt=media", "https://x/y/c.png?alt=media", "https://x/y/d.webp"] },
  variations: [{ variant_id: "100001CA-1KG", variant_sku: "100001CA-1KG", variant_name: "1 Kg", selling_price: 1149, original_price: 1380 }, { variant_id: "100001CA-2KG", variant_sku: "100001CA-2KG", variant_name: "2 Kg", selling_price: 2199, original_price: 2199 }] };
const plant = { product_id: "P2", slug: "money-plant", name: "Money Plant", description: "Green", selling_price: 300, quantity: 0, categorization: { category_name: "Plants" }, media: { primary_image_url: "https://x/m.jpg" }, variations: [] };
const off = { product_id: "P3", name: "Off", selling_price: 100, quantity: 5, availability: { is_active: false }, categorization: { category_name: "Plants" }, media: { primary_image_url: "https://x/o.jpg" } };
const flowerVar = { product_id: "P4", slug: "f", name: "Lily Vase", selling_price: 2999, quantity: 3, categorization: { category_name: "Flowers" }, media: { primary_image_url: "https://x/l.jpg" }, variations: [{ variant_id: "a", variant_sku: "F-A", variant_name: "4 Stem", selling_price: 2999, inventory: {} }, { variant_id: "b", variant_sku: "F-B", variant_name: "6 Stem", selling_price: 5899, inventory: { quantity_available: 0 } }] };
const { csv, adsRowCount } = toAdsCsv([cake, plant, off, flowerVar]);
const rows = parse(csv); const head = rows[0]; const recs = rows.slice(1).filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
ok("header is the column list", head.join() === ADS_FEED_COLUMNS.join());
ok("inactive product left out; rows = cake(1+2) + plant + flower(2)", recs.length === 6 && adsRowCount === 6, String(recs.length));
const base = recs.find((r) => r.item_id === "P1" || r.title.includes("½"));
ok("half-kg row exists with its own title", recs.some((r) => r.title === 'White "Rosette" Cake, 3 layers - ½ Kg'));
ok("quotes and commas in a title survive CSV round trip", recs.some((r) => r.title.startsWith('White "Rosette" Cake, 3 layers')));
const half = recs.find((r) => r.title.endsWith("½ Kg"));
ok("list price + sale price when discounted", half.price === "754.80 INR" && half.sale_price === "629.00 INR");
const two = recs.find((r) => r.title.endsWith("2 Kg"));
ok("no sale_price when original equals selling", two.price === "2199.00 INR" && two.sale_price === "");
ok("JPEG preferred over WebP primary", half.image_url === "https://x/y/b.jpg?alt=media" && !half.additional_image_urls.includes("webp"));
ok("description is plain text", half.description === "Soft cake fresh");
const dupP = { product_id: "P5", slug: "d", name: "Dup Roses", selling_price: 100, quantity: 4, categorization: { category_name: "Flowers" }, media: { primary_image_url: "https://x/d.jpg" }, variations: [{ variant_id: "a", variant_sku: "D-A", variant_name: "15 Roses", selling_price: 100 }, { variant_id: "b", variant_sku: "D-B", variant_name: "15 Roses", selling_price: 120 }] };
const dr = parse(toAdsCsv([dupP]).csv).slice(1).filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
ok("duplicate option names are numbered", dr[0].variant_dict === '{"variant":"15 Roses"}' && dr[1].variant_dict === '{"variant":"15 Roses (2)"}');
ok("half-kg item id differs from its group id", half.item_id === "100001CA-HALFKG" && half.group_id === "P1" && recs.every((r) => !r.group_id || r.group_id !== r.item_id));
ok("variant_dict is JSON", half.variant_dict === '{"variant":"½ Kg"}' && half.listing_has_variations === "true" && half.group_id === "P1");
ok("size variants inherit the cake's stock", recs.filter((r) => r.group_id === "P1").every((r) => r.availability === "in_stock"));
ok("plant out of stock when quantity 0", recs.find((r) => r.title === "Money Plant").availability === "out_of_stock");
ok("variant with no stock figure sells with the product, explicit 0 is sold out", recs.find((r) => r.item_id === "F-A").availability === "in_stock" && recs.find((r) => r.item_id === "F-B").availability === "out_of_stock");
ok("ads flags + return policy on every row", recs.every((r) => r.is_ads_eligible === "true" && r.return_policy.endsWith("/refund-policy")));
ok("required fields present on every row", recs.every((r) => ["item_id", "title", "description", "url", "brand", "seller_name", "image_url", "availability", "price"].every((k) => r[k])));
ok("titles within 150 chars", recs.every((r) => r.title.length <= 150));
console.log(`\n${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
