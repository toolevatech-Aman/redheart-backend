const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

async function run() {
  const slug = "karauli";
  const cityName = "Karauli";
  const cityUrl = `/order-cake-online/${slug}`;
  const payload = {
    category: "Cakes", cityName, slug, url: cityUrl,
    metaTitle: "Cake Delivery in Karauli | Kaila Devi Temple Chambal Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Karauli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karauli",
    canonicalUrl: `${BASE_URL}${cityUrl}`,
    metaKeyword: "cake delivery karauli, order cake online karauli, birthday cake karauli, custom cake karauli, same day cake delivery karauli Kaila Devi temple Navratri Chambal Sanctuary Languriya Yadav Jadaun Rajasthan",
    breadcrumb: [
      { label: "Home", url: "/" },
      { label: "Cakes", url: "/order-cake-online" },
      { label: "Online Cake Delivery in Karauli", url: cityUrl },
    ],
    footerContent: `<h2>Cake Delivery in Karauli — Kaila Devi's Navratri Millions, Chambal Sanctuary's Wildlife, and Ancient Yadav Kingdom Heritage</h2>
<p>Karauli is home to the Kaila Devi Temple — one of Rajasthan's most powerful Shakti shrines, set in the Trikut Hills gorge on the Kalisil River — drawing 2-3 million Navratri pilgrims who sing the distinctive Languriya folk songs in honour of Bhairon. The National Chambal Sanctuary (protecting Gharial, Gangetic dolphin, and Indian skimmer birds) runs through the district. The Yadav (Jadaun) Rajput City Palace is a heritage hotel. RedHeart delivers birthday, anniversary, and custom cakes across Karauli town, Hindaun City, Nadoti, Sapotra, Mandrail, Todabhim, and Shri Mahaveerji. Starting from ₹499. Same-day delivery before 3 PM.</p>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karauli?", answer: "Yes, same-day cake delivery is available across all Karauli areas — Karauli town, Hindaun City, Nadoti, Sapotra, and Mandrail — for orders placed before 3 PM." },
      { question: "Do you have Kaila Devi Navratri and Chambal-themed cakes?", answer: "Yes! The Kaila Devi Temple (2-3 million Navratri pilgrims, Languriya folk songs) and the National Chambal Sanctuary's Gharial-Dolphin waterway inspire our most devotionally vibrant Karauli fondant cakes." },
      { question: "Are eggless cakes available in Karauli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Karauli delivery." }
    ],
    isActive: true,
  };
  const res = await fetch(`${API_BASE}/city/upsert`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok) console.error("❌  Karauli", json);
  else console.log("✅  Karauli —", json._id);
}
run().catch(e => { console.error(e); process.exit(1); });
