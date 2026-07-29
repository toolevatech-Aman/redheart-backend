// Adds 2-4 contextual internal links inside existing footerContent HTML,
// by detecting place/product names the content ALREADY mentions (nearby
// same-state cities, flower/cake/plant types, occasions) and wrapping the
// first safe occurrence in <a href>. Falls back to a short appended
// sentence only when fewer than 2 organic matches exist in the text.
//
// Usage: node add-footer-links.mjs --dry-run [--limit N]
//        node add-footer-links.mjs --apply [--limit N] [--category Flowers]
import dotenv from "dotenv"; dotenv.config();
import mongoose from "mongoose";
import fs from "fs";
import CityPage from "../src/models/CityPage.js";
import CategorySeoPage from "../src/models/CategorySeoPage.js";

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const APPLY = args.includes("--apply");
const limitArg = args.find(a => a.startsWith("--limit"));
const LIMIT = limitArg ? parseInt(args[args.indexOf(limitArg) + 1] || limitArg.split("=")[1], 10) : 0;
const catArg = args.find(a => a.startsWith("--category"));
const ONLY_CATEGORY = catArg ? (args[args.indexOf(catArg) + 1] || catArg.split("=")[1]) : null;

if (!DRY_RUN && !APPLY) {
  console.log("Pass --dry-run or --apply");
  process.exit(1);
}

const CITY_STATE_MAP = JSON.parse(fs.readFileSync(new URL("../city_state_map.json", import.meta.url)));

const CATEGORY_BASE = { Flowers: "/florist-near-me", Cakes: "/order-cake-online", Plants: "/plants-online" };

// phrase -> url, ordered longest-phrase-first is enforced at use time
const PRODUCT_TERMS = {
  Flowers: {
    "red roses": "/flowers/red-roses", "pink roses": "/flowers/pink-roses",
    "white lilies": "/flowers/white-lilies", "anniversary roses": "/flowers/anniversary-roses",
    "birthday roses": "/flowers/birthday-roses", roses: "/flowers/roses", lilies: "/flowers/lilies",
    carnations: "/flowers/carnations", bouquets: "/flowers/bouquets", marigolds: "/flowers/mixed",
    tuberose: "/flowers/mixed", gerberas: "/flowers/mixed",
  },
  Cakes: {
    "black forest": "/cakes/black-forest", "red velvet": "/cakes/red-velvet",
    "ferrero rocher": "/cakes/ferrero-rocher", "photo cake": "/cakes/photo-cake",
    chocolate: "/cakes/chocolate", butterscotch: "/cakes/butterscotch", eggless: "/cakes/eggless",
    pineapple: "/cakes/pineapple", strawberry: "/cakes/strawberry", truffle: "/cakes/truffle",
    vanilla: "/cakes/vanilla", kitkat: "/cakes/kitkat", mango: "/cakes/mango",
  },
  Plants: {
    "money plant": "/plants/money", "peace lily": "/plants/peace-lily",
    "snake plant": "/plants/snake", bonsai: "/plants/bonsai", jade: "/plants/jade",
    syngonium: "/plants/syngonium",
  },
};

// Only top-level occasion hub pages that actually exist (verified against
// /api/category-seo/all-slugs) — mothers-day/fathers-day/valentines-day/
// diwali/holi only exist as subcategory pages, not standalone hubs.
const OCCASION_TERMS = {
  birthday: "/birthday", anniversary: "/anniversary", wedding: "/wedding",
};

const CROSS_VERTICAL_WORD = { Flowers: null, Cakes: null, Plants: null }; // filled below
CROSS_VERTICAL_WORD.Flowers = [["cakes", "Cakes"], ["plants", "Plants"]];
CROSS_VERTICAL_WORD.Cakes = [["flowers", "Flowers"], ["plants", "Plants"]];
CROSS_VERTICAL_WORD.Plants = [["flowers", "Flowers"], ["cakes", "Cakes"]];

function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

// Splits HTML into [tag, text, tag, text, ...] segments so matching only
// ever touches real text, never tag markup or attributes.
function splitHtml(html) {
  return html.split(/(<[^>]+>)/g);
}

// Finds the first *safe* occurrence of `phrase` in `text` — safe meaning it
// isn't actually part of a different, longer known city name (e.g. matching
// "Mumbai" inside "Navi Mumbai", or "Kanpur" inside "Kanpur Dehat").
function findSafeMatch(text, phrase, cityNameSet) {
  const re = new RegExp(`\\b${escapeRegex(phrase)}\\b`, "gi");
  let m;
  while ((m = re.exec(text))) {
    const before = text.slice(0, m.index);
    const after = text.slice(m.index + m[0].length);
    const prevWord = (before.match(/([A-Za-z']+)\s*$/) || [])[1];
    const nextWord = (after.match(/^\s*([A-Za-z']+)/) || [])[1];
    const collidesBefore = prevWord && cityNameSet.has(`${prevWord} ${m[0]}`.toLowerCase()) && `${prevWord} ${m[0]}`.toLowerCase() !== phrase.toLowerCase();
    const collidesAfter = nextWord && cityNameSet.has(`${m[0]} ${nextWord}`.toLowerCase()) && `${m[0]} ${nextWord}`.toLowerCase() !== phrase.toLowerCase();
    if (collidesBefore || collidesAfter) continue;
    return m;
  }
  return null;
}

function linkFirstOccurrence(html, phrase, url, cityNameSet) {
  const parts = splitHtml(html);
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith("<")) continue;
    const m = findSafeMatch(parts[i], phrase, cityNameSet);
    if (m) {
      parts[i] = parts[i].slice(0, m.index) + `<a href="${url}">${m[0]}</a>` + parts[i].slice(m.index + m[0].length);
      return { html: parts.join(""), found: true, phrase, url };
    }
  }
  return { html, found: false };
}

function wordCount(html) {
  return html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
}

function targetLinks(wc) {
  if (wc < 120) return 2;
  if (wc < 250) return 3;
  return 4;
}

async function processCityDoc(doc, cityNameSet, siblingCategories) {
  const selfName = doc.cityName;
  const candidates = [];

  // 1) other same-state cities mentioned in the prose
  const sameStateCities = Object.entries(CITY_STATE_MAP)
    .filter(([slug, state]) => state === doc.state && slug !== doc.slug);
  // need name per slug — build reverse lookup lazily via global map (set below)
  for (const [slug] of sameStateCities) {
    const name = global.__slugToName[slug];
    if (!name || name === selfName) continue;
    candidates.push({ phrase: name, url: `${CATEGORY_BASE[doc.category]}/${slug}` });
  }

  // 2) product terms for this category
  for (const [phrase, url] of Object.entries(PRODUCT_TERMS[doc.category] || {})) {
    candidates.push({ phrase, url });
  }

  // 3) cross-vertical (same city, other category) — only if that page exists
  for (const [word, cat] of CROSS_VERTICAL_WORD[doc.category] || []) {
    if (siblingCategories.has(`${cat}|${doc.slug}`)) {
      candidates.push({ phrase: word, url: `${CATEGORY_BASE[cat]}/${doc.slug}` });
    }
  }

  // 4) occasion words
  for (const [phrase, url] of Object.entries(OCCASION_TERMS)) {
    candidates.push({ phrase, url });
  }

  return runCandidates(doc.footerContent, candidates, cityNameSet, {
    fallbackHtml: sameStateCities.length
      ? `<p>Same-day delivery is also available in nearby <a href="${CATEGORY_BASE[doc.category]}/${sameStateCities[0][0]}">${global.__slugToName[sameStateCities[0][0]] || sameStateCities[0][0]}</a>, or make it extra special with a <a href="/surprise-for-her">personalized digital surprise page</a>.</p>`
      : `<p>Explore more gifting ideas with a <a href="/surprise-for-her">personalized digital surprise page</a> or pair your order with heartfelt <a href="/shayari">Shayari</a>.</p>`,
  });
}

async function processCategoryDoc(doc, cityNameSet) {
  const topCat = doc.categorySlug;
  const topCatCap = topCat.charAt(0).toUpperCase() + topCat.slice(1);
  const productMapKey = ["flowers", "cakes", "plants"].includes(topCat)
    ? topCatCap : null;

  const candidates = [];
  if (productMapKey && PRODUCT_TERMS[productMapKey]) {
    for (const [phrase, url] of Object.entries(PRODUCT_TERMS[productMapKey])) {
      candidates.push({ phrase, url });
    }
  }
  // cross-category product terms (mentions of other verticals)
  for (const cat of ["Flowers", "Cakes", "Plants"]) {
    if (cat === productMapKey) continue;
    for (const [phrase, url] of Object.entries(PRODUCT_TERMS[cat])) {
      candidates.push({ phrase, url });
    }
  }
  for (const [phrase, url] of Object.entries(OCCASION_TERMS)) {
    candidates.push({ phrase, url });
  }

  return runCandidates(doc.footerContent, candidates, cityNameSet, {
    fallbackHtml: `<p>Make it more meaningful with a <a href="/surprise-for-her">personalized digital surprise page</a> or a heartfelt <a href="/shayari">Shayari</a>.</p>`,
  });
}

function runCandidates(html, candidates, cityNameSet, { fallbackHtml }) {
  const wc = wordCount(html);
  const max = targetLinks(wc);
  let out = html;
  let added = 0;
  const usedUrls = new Set();
  const log = [];
  // longer phrases first so "black forest" wins over a generic overlap, etc.
  candidates.sort((a, b) => b.phrase.length - a.phrase.length);
  for (const { phrase, url } of candidates) {
    if (added >= max) break;
    if (usedUrls.has(url)) continue;
    const res = linkFirstOccurrence(out, phrase, url, cityNameSet);
    if (res.found) {
      out = res.html;
      usedUrls.add(url);
      added++;
      log.push(`${phrase} -> ${url}`);
    }
  }
  if (added < 2) {
    out = out + fallbackHtml;
    added = Math.max(added, 2);
    log.push("(fallback sentence appended)");
  }
  return { html: out, linksAdded: added, wordCount: wc, log };
}

async function main() {
  await mongoose.connect(process.env.MONGO_URI);

  // slug -> name lookup + full city-name collision set
  const allCities = await CityPage.find({}).select("slug cityName").lean();
  global.__slugToName = {};
  const cityNameSet = new Set();
  for (const c of allCities) {
    global.__slugToName[c.slug] = c.cityName;
    cityNameSet.add(c.cityName.toLowerCase());
  }

  const allCityDocsFull = await CityPage.find({}).select("category slug").lean();
  const siblingCategories = new Set(allCityDocsFull.map(d => `${d.category}|${d.slug}`));

  let cityQuery = { footerContent: { $exists: true, $ne: "" } };
  if (ONLY_CATEGORY) cityQuery.category = ONLY_CATEGORY;
  let cityDocs = await CityPage.find(cityQuery).select("category slug cityName state footerContent").lean();
  if (LIMIT) cityDocs = cityDocs.slice(0, LIMIT);

  console.log(`Processing ${cityDocs.length} CityPage docs...`);
  let updated = 0;
  for (const doc of cityDocs) {
    // skip if already has links (idempotency across re-runs)
    if (/<a\s+[^>]*href/i.test(doc.footerContent)) continue;
    const result = await processCityDoc(doc, cityNameSet, siblingCategories);
    if (DRY_RUN && updated < 8) {
      console.log(`\n=== ${doc.category} / ${doc.cityName} (${doc.slug}) — ${result.wordCount} words, ${result.linksAdded} links ===`);
      console.log(result.log.join(" | "));
    }
    if (APPLY) {
      await CityPage.updateOne({ _id: doc._id }, { $set: { footerContent: result.html } });
    }
    updated++;
  }
  console.log(`CityPage: ${updated} docs ${APPLY ? "updated" : "would be updated"}`);

  let catQuery = { footerContent: { $exists: true, $ne: "" } };
  let catDocs = await CategorySeoPage.find(catQuery).select("pageKey categorySlug footerContent").lean();
  if (LIMIT) catDocs = catDocs.slice(0, LIMIT);

  console.log(`\nProcessing ${catDocs.length} CategorySeoPage docs...`);
  let catUpdated = 0;
  for (const doc of catDocs) {
    if (/<a\s+[^>]*href/i.test(doc.footerContent)) continue;
    const result = await processCategoryDoc(doc, cityNameSet);
    if (DRY_RUN && catUpdated < 8) {
      console.log(`\n=== ${doc.pageKey} — ${result.wordCount} words, ${result.linksAdded} links ===`);
      console.log(result.log.join(" | "));
    }
    if (APPLY) {
      await CategorySeoPage.updateOne({ _id: doc._id }, { $set: { footerContent: result.html } });
    }
    catUpdated++;
  }
  console.log(`CategorySeoPage: ${catUpdated} docs ${APPLY ? "updated" : "would be updated"}`);

  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
