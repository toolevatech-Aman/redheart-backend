// One-off: replaces the "Which is the best X in {city}" SEO-snippet-style
// FAQs on the top 30 metro city pages with natural, specific phrasing closer
// to how someone actually asks ChatGPT/Gemini — answers lead with the fact,
// not "RedHeart is the best/trusted...", and don't repeat the city name in
// every sentence. Scoped to 90 pages (30 cities x 3 categories) by design —
// a deliberately smaller, hand-quality set rather than a full 3,050-page
// bulk rewrite.
import "dotenv/config";
import mongoose from "mongoose";

const MAJOR_CITIES = [
  "Delhi","Mumbai","Bangalore","Hyderabad","Chennai","Kolkata","Pune","Ahmedabad",
  "Jaipur","Patna","Surat","Lucknow","Kanpur","Nagpur","Indore","Bhopal",
  "Visakhapatnam","Vadodara","Chandigarh","Kochi","Coimbatore","Guwahati","Dehradun",
  "Gurugram","Noida","Ghaziabad","Faridabad","Thane","Navi Mumbai","Nashik",
];

function flowerFaqs(city) {
  return [
    { question: `How fast can I get flowers delivered in ${city}?`,
      answer: `Same-day delivery is available if you order before the evening cutoff — flowers are sourced and arranged the same day, not shipped in from elsewhere. A midnight delivery slot (arriving between 11 PM and 12 AM) is also available if you order it a few hours ahead, for birthday or anniversary surprises timed to the stroke of midnight.` },
    { question: `What's the cheapest flower bouquet I can send in ${city}?`,
      answer: `Single-stem roses and small bouquets start from ₹399. Mixed bouquets and premium arrangements (orchids, imported flowers, larger bunches) run higher depending on size and flower type — there's no minimum order value to place an order.` },
    { question: `Can I send flowers to someone in ${city} as a surprise, without them knowing in advance?`,
      answer: `Yes — delivery is discreet by default. You can add a personalised message card, choose the delivery window, and the recipient only finds out when the delivery arrives. There's no requirement to notify them beforehand.` },
    { question: `Do I need to be home to receive a flower delivery in ${city}?`,
      answer: `The recipient (whoever you're sending to) needs to be reachable at the delivery address during the chosen window — the delivery partner calls ahead before arriving. If no one's available, they'll typically attempt redelivery or hold it briefly rather than cancelling outright.` },
    { question: `Is midnight flower delivery actually available in ${city}, or is that just marketing?`,
      answer: `It's a real delivery slot, not just a listed option — orders placed before the midnight-delivery cutoff (typically a few hours ahead) are dispatched to arrive between 11 PM and 12 AM. It's commonly used for birthdays where the sender wants the gift to arrive right as the day changes.` },
  ];
}

function cakeFaqs(city) {
  return [
    { question: `Can I get a cake delivered the same day in ${city}?`,
      answer: `Yes, if the order is placed before the same-day cutoff time — cakes are baked to order, not pre-made and stored, so same-day orders are baked and delivered within hours rather than shipped from a central kitchen.` },
    { question: `What cake flavours and sizes can I order online for ${city}?`,
      answer: `Common options include chocolate truffle, black forest, red velvet, and butterscotch, in both egg and eggless versions, starting around half a kilo up to multi-kilo tiered cakes for larger celebrations. Photo cakes and custom-message cakes are also available.` },
    { question: `Can I add a personalised photo or message on a cake delivered in ${city}?`,
      answer: `Yes — photo cakes (an edible print of an uploaded photo) and custom text/message cakes can both be ordered, usually with a slightly longer lead time than a standard cake since they're prepared individually.` },
    { question: `Is midnight cake delivery available in ${city} for birthdays?`,
      answer: `Yes, midnight delivery (11 PM–12 AM) is available for cakes as well as flowers, provided the order is placed a few hours ahead of the cutoff — it's one of the more common requests for birthday surprises.` },
    { question: `Will the cake actually look like the photo when it arrives in ${city}?`,
      answer: `Cakes are handled with insulated, spill-resistant packaging designed for transit, and photo/message cakes are prepared close to the delivery time rather than in advance, so the print and decoration stay accurate. Minor variation in exact icing detail is normal for any handmade cake.` },
  ];
}

function plantFaqs(city) {
  return [
    { question: `What indoor plants can I send as a gift to someone in ${city}?`,
      answer: `Popular gifting options include money plant, snake plant, peace lily, jade plant, and succulents — all chosen for being low-maintenance and easy to keep alive indoors, which matters more for a gift than a rare or high-care variety.` },
    { question: `Will a gifted plant survive delivery, or does it usually arrive damaged?`,
      answer: `Plants are shipped in their pot with soil secured and the foliage protected for transit, and the varieties typically offered (snake plant, money plant, succulents) are naturally hardy, so they tolerate a short delivery window well. Watering it once settled in and keeping it out of direct blasting AC/heat for the first day helps it recover from transit stress.` },
    { question: `How much does a gift plant cost for delivery in ${city}?`,
      answer: `Small potted plants (succulents, money plant) typically start under ₹500, with larger or decorative-pot options running higher — pricing depends more on plant size and pot style than on the delivery city.` },
    { question: `Is a plant a good housewarming gift, or is it better to send flowers?`,
      answer: `Plants are generally the more popular housewarming choice specifically because they last — flowers fade within a week, while a low-maintenance plant like a money plant or peace lily continues to be part of the home. Combining a plant with a smaller bouquet is also common if you want both the immediate visual impact and the lasting gift.` },
    { question: `Do you deliver plants same-day in ${city}?`,
      answer: `Yes, same-day delivery applies to plants as well as flowers and cakes, subject to the same daily order cutoff — plants don't need baking or arranging time, so availability is generally consistent throughout the day.` },
  ];
}

const BUILDERS = { Flowers: flowerFaqs, Cakes: cakeFaqs, Plants: plantFaqs };

await mongoose.connect(process.env.MONGO_URI);
const CityPage = mongoose.connection.collection("citypages");

let updated = 0;
const missing = [];

for (const city of MAJOR_CITIES) {
  for (const category of Object.keys(BUILDERS)) {
    const faqs = BUILDERS[category](city);
    const res = await CityPage.updateOne(
      { cityName: city, category },
      { $set: { faqs } }
    );
    if (res.matchedCount === 0) missing.push(`${city} / ${category}`);
    else updated += 1;
  }
}

console.log(`Updated ${updated} pages.`);
if (missing.length) console.log("No matching doc for:", JSON.stringify(missing));
process.exit(0);
