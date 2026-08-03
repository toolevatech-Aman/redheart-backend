// Rewrites FAQs on all CategorySeoPage docs (257 total — hub pages like
// /flowers plus subcategory pages like /flowers/roses) with the same natural-
// phrasing approach used on city pages, parameterized by the actual product
// name (h1) rather than a generic "Roses Delivery" template variable dropped
// into an awkward sentence.
import "dotenv/config";
import mongoose from "mongoose";

// productName: human-readable singular/plural product noun for natural sentences
// e.g. h1 "Roses Delivery" -> productName "roses"
function productNameFromH1(h1, fallback) {
  if (!h1) return fallback;
  return h1
    .replace(/\bDelivery\b/gi, "")
    .replace(/\bOnline\b/gi, "")
    .trim()
    .toLowerCase() || fallback;
}

function flowerFaqs(productName) {
  const p = productName || "flowers";
  return [
    { question: `How fast can I get ${p} delivered?`,
      answer: `Same-day delivery is available if you order before the evening cutoff — arrangements are put together the same day rather than shipped in advance. A midnight delivery slot (11 PM–12 AM) is also available for birthday or anniversary surprises timed to the exact moment the day changes.` },
    { question: `What's the price range for ${p}?`,
      answer: `Starts from ₹399 for smaller arrangements, with premium and larger options priced higher depending on flower type, quantity, and packaging — there's no fixed minimum order value.` },
    { question: `Can I send ${p} as a surprise without the recipient knowing beforehand?`,
      answer: `Yes — delivery is discreet by default, with an optional personalised message card. The recipient only finds out when the delivery actually arrives at their door.` },
    { question: `How fresh are ${p} when they arrive?`,
      answer: `Flowers are sourced and arranged close to the delivery date rather than held in storage for days, since same-day orders require fresh stock on hand — that's also why availability can vary slightly by season and city.` },
  ];
}

function cakeFaqs(productName) {
  const p = productName || "cakes";
  return [
    { question: `Can ${p} be delivered the same day?`,
      answer: `Yes, if ordered before the same-day cutoff — cakes are baked to order rather than pre-made and stored, so same-day requests are baked and delivered within hours.` },
    { question: `What sizes and flavours are available for ${p}?`,
      answer: `Common flavours include chocolate truffle, black forest, red velvet, and butterscotch, in egg and eggless versions, from half a kilo up to multi-kilo tiered cakes for larger celebrations.` },
    { question: `Can I get a photo or custom message printed on ${p}?`,
      answer: `Yes — photo cakes and custom-message cakes are both available, usually with a slightly longer lead time than a standard order since they're prepared individually per order.` },
    { question: `Is midnight delivery available for ${p}?`,
      answer: `Yes, provided the order is placed a few hours ahead of the midnight cutoff — it's a common request for birthday surprises timed to arrive right as the day changes.` },
  ];
}

function plantFaqs(productName) {
  const p = productName || "plants";
  return [
    { question: `Are ${p} a good gift, or do they need too much care to survive?`,
      answer: `The varieties typically offered for gifting (money plant, snake plant, peace lily, succulents) are chosen specifically for being low-maintenance and tolerant of a few missed waterings, which matters more for a gift than a rare or high-care variety.` },
    { question: `Will ${p} survive the delivery/shipping process?`,
      answer: `They're shipped in their pot with soil secured and foliage protected for transit. Keeping the plant out of direct AC or heat blast for the first day after arrival helps it recover from the trip.` },
    { question: `What's the price range for ${p}?`,
      answer: `Smaller potted plants typically start under ₹500, with larger sizes or decorative pots priced higher — cost depends more on plant size and pot style than on any other factor.` },
    { question: `Can ${p} be delivered the same day?`,
      answer: `Yes — plants don't need baking or arranging time the way cakes and some flower arrangements do, so same-day availability tends to be more consistent throughout the day.` },
  ];
}

function occasionFaqs(occasion, productHint) {
  return [
    { question: `What's a good ${occasion} gift if I only have a few hours to arrange something?`,
      answer: `${productHint} with same-day delivery is the most reliable option on short notice — order before the same-day cutoff and it's arranged and delivered within hours, no advance planning required.` },
    { question: `Can I send a ${occasion} gift to someone in another city?`,
      answer: `Yes — delivery is available across 830+ cities in India, so you can send something to a different city than your own without needing anyone local to arrange it.` },
    { question: `What's the typical price range for a ${occasion} gift?`,
      answer: `Starts from ₹399 for simpler options, with combo hampers and premium arrangements priced higher depending on what's included — flowers, cakes, and add-ons like chocolates or soft toys can all be combined into one delivery.` },
    { question: `Can I add a personal message to a ${occasion} gift?`,
      answer: `Yes, every order includes the option to add a free personalised message card, and photo or custom-message cakes are available if you want something more specific than a printed card.` },
  ];
}

const FAMILY_BUILDERS = {
  flowers: flowerFaqs,
  "florist-near-me": flowerFaqs,
  cakes: cakeFaqs,
  "order-cake-online": cakeFaqs,
  plants: plantFaqs,
  "plants-online": plantFaqs,
};

const OCCASION_BUILDERS = {
  birthday: () => occasionFaqs("birthday", "A cake, flowers, or a flower-and-cake combo"),
  "birthday-gifts-delivery": () => occasionFaqs("birthday", "A cake, flowers, or a flower-and-cake combo"),
  anniversary: () => occasionFaqs("anniversary", "Red roses or a roses-and-cake combo"),
  "anniversary-gifts-delivery": () => occasionFaqs("anniversary", "Red roses or a roses-and-cake combo"),
  wedding: () => occasionFaqs("wedding", "A flower arrangement or gift hamper"),
  "wedding-gifts-online": () => occasionFaqs("wedding", "A flower arrangement or gift hamper"),
  "gift-hampers": () => occasionFaqs("gifting", "A curated hamper combining flowers, cakes, and chocolates"),
  hampers: () => occasionFaqs("gifting", "A curated hamper combining flowers, cakes, and chocolates"),
};

await mongoose.connect(process.env.MONGO_URI);
const CategorySeoPage = mongoose.connection.collection("categoryseopages");

const docs = await CategorySeoPage.find({}).project({ categorySlug: 1, subcategorySlug: 1, h1: 1, url: 1 }).toArray();
console.log(`Found ${docs.length} category pages.`);

let updated = 0;
let skipped = [];
const bulkOps = [];

for (const doc of docs) {
  const familyBuilder = FAMILY_BUILDERS[doc.categorySlug];
  const occasionBuilder = OCCASION_BUILDERS[doc.categorySlug];
  let faqs;

  if (familyBuilder) {
    const productName = productNameFromH1(doc.h1, doc.categorySlug);
    faqs = familyBuilder(productName);
  } else if (occasionBuilder) {
    faqs = occasionBuilder();
  } else {
    skipped.push(doc.url);
    continue;
  }

  bulkOps.push({ updateOne: { filter: { _id: doc._id }, update: { $set: { faqs } } } });
}

if (bulkOps.length) {
  const res = await CategorySeoPage.bulkWrite(bulkOps);
  updated = res.modifiedCount;
}

console.log(`Updated ${updated} pages.`);
if (skipped.length) console.log(`Skipped ${skipped.length} (unrecognised categorySlug):`, JSON.stringify(skipped));
process.exit(0);
