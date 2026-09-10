// Plants Alphabetical Pass Batch 7 — 8 cities
// Purnea, Arrah, Buxar, Aurangabad (Bihar), Sitapur, Shahjahanpur, Rampur, Modinagar

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "purnea": {
    cityName: "Purnea",
    metaTitle: "Buy Plants Online in Purnea | Seemanchal Bihar Plants | RedHeart",
    metaDescription: "Order plants online in Purnea. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Seemanchal's commercial capital in Bihar gets plant delivery.",
    h1: "Buy Plants Online in Purnea — Same-Day Plant Delivery in Bihar's Seemanchal Region",
    metaKeyword: "plants online purnea, buy plants purnea, indoor plants purnea, plant delivery purnea bihar, marigold purnea, tulsi purnea, online nursery purnea seemanchal kosi river jute north bihar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Purnea — Bihar's Seemanchal Gateway Gets Doorstep Greens</h2>
<p>Purnea is the commercial and administrative capital of Seemanchal — the eastern Bihar subregion comprising Purnea, Katihar, Kishanganj, and Araria districts, which borders West Bengal, Nepal, and Bangladesh. The city is a major trading hub for jute (eastern Bihar's kosi belt produces significant jute), paddy, and maize — and the Purnea airport serves the region's commercial connectivity. The Kosi river (the "Sorrow of Bihar" — one of India's most flood-prone rivers, responsible for repeated devastation in north Bihar, which led to the India-Nepal Kosi agreement and the Kosi Barrage) dominates Purnea's geography. Purnea's cosmopolitan character (Hindu, Muslim, and the Santhal/Rajbhashi tribal communities of Seemanchal) makes it one of Bihar's most culturally diverse cities.</p>
<p>Purnea's climate is north Bihar eastern Terai: hot-humid summers (38°C), very heavy monsoon (1,500 mm — one of Bihar's highest), and cold winters (5–20°C). All plants thrive in the excellent rainfall. Marigold, tulsi, money plant, banana, and indoor plants are popular. RedHeart delivers across Purnea, Katihar, Kishanganj, Araria, and Forbesganj with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Purnea</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Bihar Hindu homes in Seemanchal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Durga Puja, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, Purnea market gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kosi belt winter, excellent blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Eastern Bihar wedding tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, jute/trade business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6km;">Delivery Coverage in Purnea</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Purnea City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Station Road, Marwari area, Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Katihar / Araria</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Katihar, Araria, Kishanganj, Forbesganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant grows best in Purnea's very heavy northeast Bihar monsoon?", answer: "Purnea's 1,500 mm monsoon (one of Bihar's highest — the Kosi belt's eastern Terai receives extended monsoon from Bay of Bengal moisture) makes all tropical plants grow with extraordinary vigour. Banana, jasmine, hibiscus, marigold, tulsi, and money plant all thrive without irrigation during monsoon months. Container-raised beds prevent waterlogging in the Kosi floodplain zone." },
      { question: "Is same-day plant delivery available in Purnea?", answer: "Yes. Same-day delivery across Purnea including Station Road, Marwari area, and Civil Lines. Order before 3 PM. Katihar and Araria are within 3–5 hours." },
      { question: "What plant is most important for Chhath Puja in Purnea's Seemanchal region?", answer: "Banana plant (kela) and marigold are the two most essential Chhath Puja plants in Seemanchal. Banana leaves and stalks form the ritual offering structures (daura and supa), and banana at the ghat is mandatory for the sunrise and sunset offerings. Marigold (genda) garlands and sugarcane stalks frame the puja offerings. Purnea's Bihar-Bengal-Nepal cultural confluence gives Chhath Puja here an especially vibrant multi-community character." },
      { question: "What plant connects to Purnea's jute agriculture heritage in the Kosi belt?", answer: "Jute (Corchorus olitorius/capsularis — the 'golden fibre' that made Bengal and Bihar's colonial economy) was historically grown extensively in Purnea's Kosi floodplain. Growing a potted jute plant as a heritage curiosity, alongside the more practical tulsi (healing), marigold (festive), and money plant (decorative) combination, honours Purnea's agricultural identity." },
      { question: "Do you deliver plants to Kishanganj from Purnea?", answer: "Yes. Kishanganj (60 km from Purnea, Bihar's most northeastern district bordering Nepal, West Bengal, and Sikkim's corridor — famous for its tea gardens in the Teesta sub-zone and for being India's most linguistically and ethnically diverse district in east Bihar) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "arrah": {
    cityName: "Arrah",
    metaTitle: "Buy Plants Online in Arrah | Bhojpur Bihar Ganga Plains Plants | RedHeart",
    metaDescription: "Order plants online in Arrah. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Bhojpur district's capital in Bihar gets doorstep plant delivery.",
    h1: "Buy Plants Online in Arrah — Same-Day Plant Delivery in Bihar's Bhojpur Heart",
    metaKeyword: "plants online arrah, buy plants arrah, indoor plants arrah, plant delivery arrah bihar, marigold arrah, tulsi arrah, online nursery arrah bhojpur ganga gandak shahabad bihar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Arrah — Bhojpur's Capital City Gets Doorstep Greens</h2>
<p>Arrah (officially Ara) is the administrative headquarters of Bhojpur district — the cultural heartland of Bhojpuri-speaking Bihar, which along with the adjacent Buxar, Saran, and Ballia (UP) districts forms the core zone of Bhojpuri language and culture. Bhojpuri — now India's most geographically widespread regional language (spoken from Bihar to Mauritius, Fiji, Suriname, and the Caribbean, by the descendants of indentured laborers) — has its roots in the Bhojpur belt around Arrah. The city is also famous for the Arrah House Siege of 1857 — during the Indian Rebellion, a small group of British civilians defended the Arrah House against thousands of sepoys for 8 days until relief arrived (a famous moment in the 1857 uprising history of Bihar).</p>
<p>Arrah's climate is Bhojpur Ganga plains: hot summers (42°C), heavy monsoon (1,100 mm), and cold winters (5–22°C). Marigold, tulsi, money plant, rose, and indoor plants thrive. RedHeart delivers across Arrah, Buxar, Dumraon, Jagdishpur, and Piro with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Arrah</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Bhojpuri Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Diwali, Bihar weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Bhojpur market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bihar winter, Ganga plains blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhojpuri wedding, Bihar fragrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gifting, Arrah market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Arrah</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Arrah / Jagdishpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Arrah main market, Station road, Jagdishpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Buxar / Dumraon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Buxar (Ganga ghats, Battle of Buxar site), Dumraon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Chhath Puja in the Bhojpuri heartland of Arrah?", answer: "Banana plant (kela) is the most essential Chhath Puja offering plant in the Bhojpur belt — the banana leaves, stalks, and fruit form the ritual supa (winnowing basket offering tray). Marigold (genda) garlands and sugarcane are equally essential. Arrah's location in the very heart of Bihar's most devout Chhath Puja belt (the Bhojpuri-Ganga confluence) makes October–November the most plant-intensive festival season." },
      { question: "Is same-day plant delivery available in Arrah?", answer: "Yes. Same-day delivery across Arrah including main market, Station road, and Jagdishpur. Order before 3 PM. Buxar and Dumraon are within 3–5 hours." },
      { question: "What plants grow best in Arrah's Bhojpur Ganga plains climate?", answer: "Arrah's Ganga alluvial plain soil and 1,100 mm monsoon make rose (November–March), marigold, tulsi, jasmine, banana, money plant, and indoor plants all grow vigorously. The cold winter nights (5°C) produce excellent rose and marigold blooms — winter is the best planting season in the Bhojpur belt." },
      { question: "What plant connects to Arrah's Bhojpuri cultural identity?", answer: "Mahua tree (Madhuca longifolia — from whose flowers the famous mahua liquor of Bhojpur is made) is the most culturally embedded plant in Bhojpuri folk culture — mahua flowers feature in Bhojpuri songs, festivals, and oral tradition. Kachnar (orchid tree — whose flowers are eaten as vegetables in Bhojpuri cuisine), bel (bilva), and tulsi are the sacred plants of every Bhojpuri home." },
      { question: "Do you deliver plants to Buxar from Arrah?", answer: "Yes. Buxar (45 km from Arrah, the site of the Battle of Buxar 1764 — the decisive battle that established British dominance over Bengal and Bihar, and the sacred Ganga ghats of Buxar where Ram, Sita, and Lakshmana are said to have crossed the Ganga in the Ramayan) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "buxar": {
    cityName: "Buxar",
    metaTitle: "Buy Plants Online in Buxar | Ganga Ghats Bihar Battle 1764 Plants | RedHeart",
    metaDescription: "Order plants online in Buxar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Sacred Ganga ghats city of Bihar gets doorstep plant delivery.",
    h1: "Buy Plants Online in Buxar — Same-Day Plant Delivery on Bihar's Sacred Ganga Ghats",
    metaKeyword: "plants online buxar, buy plants buxar, indoor plants buxar, plant delivery buxar bihar, marigold buxar, tulsi buxar, online nursery buxar ganga ghats battle 1764 bhojpur",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Buxar — Bihar's Sacred Ganga City Gets Doorstep Greens</h2>
<p>Buxar is one of Bihar's most historically significant Ganga cities — the site of the Battle of Buxar (October 22–23, 1764), which is arguably more consequential than Plassey for establishing British sovereignty over the Indian subcontinent (the Mughal Emperor, the Nawab of Oudh, and the Nawab of Bengal fought together against the East India Company — and lost, decisively ending Mughal and Nawabi independence in the Ganga plains). Sacred Buxar is equally significant in religious tradition: the city is identified with ancient Siddhasrama — where the sage Vishwamitra's ashram was located, and where the young prince Ram (accompanied by Lakshmana) killed the demoness Tadaka at Vishwamitra's request (an episode from the Balkanda of the Valmiki Ramayana). Buxar's Ganga ghats are a major pilgrimage site.</p>
<p>Buxar's climate is Bhojpur-Ganga zone: hot summers (43°C), heavy monsoon (1,000 mm), and cold winters (5–22°C). Marigold, tulsi, money plant, rose, and indoor plants are popular. RedHeart delivers across Buxar, Dumraon, Brahmpur, Koilwar, and Arrah with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Buxar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Ganga ghats puja offering</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Ganga puja, Kartik Purnima</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, Buxar market gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bel (Bilva)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vishwamitra's ashram, Shiv puja offering</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganga ghats winter garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Buxar business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Buxar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Buxar / Dumraon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganga ghat, Siddhasrama temple, Dumraon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Brahmpur / Koilwar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Brahmpur, Koilwar (Abdulbari bridge), Arrah</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Buxar's Vishwamitra ashram and Ganga pilgrimage tradition?", answer: "Bel (bilva — Aegle marmelos) is the most sacred Shiva offering plant for Buxar's Ganga pilgrimage tradition — the bel leaf (trifoliate, symbolizing the Trinity) is the most essential Shiva puja offering across India's Ganga ghats. Tulsi (for Vishnu worship at the Ganga) and kusha grass (darbha — used in all Vedic rituals, mentioned in the Ramayana as Siddhasrama's ritual grass) are the other sacred plants of Buxar's ancient ashram tradition." },
      { question: "Is same-day plant delivery available in Buxar?", answer: "Yes. Same-day delivery across Buxar including Ganga ghat area, Siddhasrama temple, and Dumraon. Order before 3 PM. Brahmpur and Koilwar are within 3–5 hours." },
      { question: "What plants grow well on Buxar's Ganga riverside?", answer: "Buxar's Ganga river bank creates an excellent micro-climate for rose (cold nights + alluvial soil = perfect blooms), marigold, tulsi, jasmine, and banana. The Ganga's annual flood deposits make riverside soil exceptionally fertile. October–March is the peak planting season when Buxar's Ganga ghats are most beautifully green with pilgrimage-season gardens." },
      { question: "What plant is best for decorating Buxar's Chhath Puja Ganga ghat?", answer: "Marigold (genda) in terracotta pots lines the Buxar Ganga ghat steps during Chhath Puja — the most visually distinctive element of the ghat decoration. Banana plants (both the fruit, leaves, and the decorative 'banana tree arch' — kela ka darwaza) frame the ghat entrance. Chhath in Buxar (one of Bihar's most sacred Ganga cities for the festival) draws pilgrims from across the Bhojpur district." },
      { question: "Do you deliver plants to Dumraon from Buxar?", answer: "Yes. Dumraon (25 km from Buxar, the former princely state of Dumraon Raj — historically the zamindari estate of the family of Bismillah Khan, the legendary shehnai maestro and Bharat Ratna recipient, who was born in Dumraon in 1916) is within our 2–4 hour same-day delivery zone." }
    ]
  },

  "aurangabad-bihar": {
    cityName: "Aurangabad",
    metaTitle: "Buy Plants Online in Aurangabad Bihar | Magadh District Plants | RedHeart",
    metaDescription: "Order plants online in Aurangabad (Bihar). Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Magadh region Bihar's historic city gets plant delivery.",
    h1: "Buy Plants Online in Aurangabad Bihar — Same-Day Plant Delivery in Magadh's Western Gateway",
    metaKeyword: "plants online aurangabad bihar, buy plants aurangabad bihar, indoor plants aurangabad bihar, plant delivery aurangabad bihar magadh, marigold aurangabad bihar, tulsi aurangabad bihar, dev surya temple",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Aurangabad Bihar — Magadh's Western District Gets Doorstep Greens</h2>
<p>Aurangabad (Bihar) is the administrative headquarters of Aurangabad district — part of the ancient Magadh region of Bihar (distinct from Aurangabad in Maharashtra), situated south of the Ganga in Bihar's southern upland zone (the Chota Nagpur plateau transition area). The city is most famous as the location of the Dev Sun Temple (Dev Surya Mandir) — one of India's most magnificent Surya (Sun God) temples, believed to be over 1,000 years old and constructed by Brahma (according to legend), making it an extraordinary pilgrimage site for Chhath Puja (the sun-worship festival). Hundreds of thousands of pilgrims visit the Dev Surya temple during Chhath Puja. The district is also famous for its coal mining areas (Nabinagar, Deo) and the Nabinagar Super Thermal Power Plant.</p>
<p>Aurangabad Bihar's climate is south Bihar upland: hot summers (43°C), moderate monsoon (900 mm), and cold winters (5–22°C). Marigold, tulsi, money plant, and indoor plants are popular. RedHeart delivers across Aurangabad, Daudnagar, Rafiganj, Nabinagar, and Goh with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Aurangabad (Bihar)</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Magadh Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja (Dev Surya), Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, Aurangabad market gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">South Bihar winter, excellent blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, coal mine industry gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Magadh region fragrance, wedding</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Aurangabad (Bihar)</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aurangabad / Daudnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Aurangabad main, Dev Surya road, Daudnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rafiganj / Nabinagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rafiganj, Nabinagar (power plant), Goh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Dev Surya temple's Chhath Puja in Aurangabad?", answer: "Marigold and banana are the two most essential Chhath Puja plants at Dev Surya temple — the most revered Chhath Puja pilgrimage site in all of Bihar. Marigold garlands (genda phool) decorate the temple steps and the water tank (surya kund) where pilgrims take the ritualistic arghya (sun offering). Banana plants frame the puja settings. Tulsi leaves offered to the sun (Surya Narayan) during Chhath's dawn prayer are sacred at Dev Surya." },
      { question: "Is same-day plant delivery available in Aurangabad Bihar?", answer: "Yes. Same-day delivery across Aurangabad Bihar including main market, Dev Surya road, and Daudnagar. Order before 3 PM. Rafiganj and Nabinagar are within 3–5 hours." },
      { question: "What plants grow well in Aurangabad Bihar's south Bihar upland climate?", answer: "South Bihar's upland climate (transitional between the Ganga plains and the Chota Nagpur plateau) with 900 mm monsoon supports rose, marigold, tulsi, jasmine, money plant, and indoor plants. Winter (October–February) is the best planting season. The lower rainfall than north Bihar means drought-tolerant choices like aloe vera and snake plant are practical additions." },
      { question: "What plant connects to Aurangabad Bihar's Magadh region heritage?", answer: "Peepal (Ficus religiosa — the Bodhi tree species, under which the Buddha attained enlightenment at Bodh Gaya, 60 km from Aurangabad) is the most spiritually resonant plant for Magadh. Ashoka tree (Saraca asoca — associated with Buddha's birth at Lumbini and with the Mauryan Emperor Ashoka who made Magadh the centre of his Buddhist-humanitarian empire) is equally profound. Growing a peepal sapling honours Magadh's Buddhist and Jain heritage." },
      { question: "Do you deliver plants to Rafiganj from Aurangabad Bihar?", answer: "Yes. Rafiganj (35 km from Aurangabad Bihar, on the Grand Trunk Road — the historic Sher Shah Suri-built road and one of India's oldest and most strategically significant highways — and the site of Shershah's famous step-well) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "sitapur": {
    cityName: "Sitapur",
    metaTitle: "Buy Plants Online in Sitapur | Awadh UP Plants | RedHeart",
    metaDescription: "Order plants online in Sitapur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Awadh region Uttar Pradesh's Sitapur gets plant delivery.",
    h1: "Buy Plants Online in Sitapur — Same-Day Plant Delivery in Awadh's Northern Gateway",
    metaKeyword: "plants online sitapur, buy plants sitapur, indoor plants sitapur, plant delivery sitapur uttar pradesh, marigold sitapur, tulsi sitapur, online nursery sitapur awadh lucknow gharghara",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Sitapur — Awadh's Northern Gateway Gets Doorstep Greens</h2>
<p>Sitapur is the administrative headquarters of Sitapur district — a significant city in the Awadh region of Uttar Pradesh, positioned on the Ghaghra (Saryu) river tributary network north of Lucknow. The city is the commercial hub for the agriculturally productive Ghaghra-Sharda basin in northern Awadh. Sitapur is also known for the Sitapur Eye Institute — one of north India's oldest and most respected ophthalmological institutions (established 1882, providing eye care to rural UP's farming communities). The Naimisharanya (Nimsar) sacred forest — one of Hinduism's most ancient pilgrimage forests (mentioned in the Mahabharata and Puranas as a site for Vedic recitation and yajna) is 30 km from Sitapur, making the city a gateway to this significant pilgrimage zone.</p>
<p>Sitapur's climate is Awadh: hot summers (43°C), good monsoon (900 mm), and cold winters (4–22°C). Marigold, tulsi, money plant, rose, and indoor plants thrive. RedHeart delivers across Sitapur, Shahabad, Biswan, Mahmudabad, and Laharpur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Sitapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Awadh Hindu homes, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Naimisharanya puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Sitapur market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Awadh winter, beautiful UP blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Awadhi wedding, UP fragrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gifting, Awadh trading</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Sitapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sitapur / Biswan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sitapur main, Eye Institute road, Biswan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahmudabad / Laharpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahmudabad, Laharpur, Naimisharanya</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Naimisharanya's ancient forest pilgrimage near Sitapur?", answer: "The naimisha forest (now Nimsar, 30 km from Sitapur) is one of Hinduism's most sacred pilgrimage forests — the Mahabharata describes it as the site where Shaunaka and the sages performed the 12-year Sattra yajna. Peepal, bel (bilva), ashoka, and amalaki (Indian gooseberry / amla) are the most sacred Vedic forest plants for Naimisharanya. Tulsi planted at home by Sitapur pilgrims who visit Nimsar connects their home to the sacred forest tradition." },
      { question: "Is same-day plant delivery available in Sitapur?", answer: "Yes. Same-day delivery across Sitapur including main market, Eye Institute road, and Biswan. Order before 3 PM. Mahmudabad and Laharpur (gateway to Naimisharanya) are within 3–5 hours." },
      { question: "What plants grow well in Sitapur's north Awadh Ghaghra basin climate?", answer: "Sitapur's Ghaghra basin alluvial soil and 900 mm monsoon make rose, marigold, tulsi, jasmine, money plant, and indoor plants all grow well. Cold winters (4°C night minimum) produce excellent rose and marigold winter blooms. October–March is the most rewarding outdoor garden season in the Awadh plains." },
      { question: "What plant connects to Sitapur's rural Awadh farming character?", answer: "Neem (Azadirachta indica — the village tree of all India, used for tooth cleaning, ayurvedic medicine, pesticide, and shade) is the most universally embedded tree in Sitapur's rural landscape. Every village in Sitapur district has a neem tree. Amla (Indian gooseberry — extremely high Vitamin C, deeply embedded in Awadhi dietary tradition) and drumstick (sahijan) are the most practical kitchen garden plants for Sitapur's farming communities." },
      { question: "Do you deliver plants to Lucknow from Sitapur?", answer: "Yes. Lucknow (70 km from Sitapur via NH-24, Uttar Pradesh's capital and the centre of Awadhi culture, cuisine, and architecture) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "shahjahanpur": {
    cityName: "Shahjahanpur",
    metaTitle: "Buy Plants Online in Shahjahanpur | Ram Prasad Bismil UP Plants | RedHeart",
    metaDescription: "Order plants online in Shahjahanpur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Awadh-Rohilkhand's martyr city in UP gets plant delivery.",
    h1: "Buy Plants Online in Shahjahanpur — Same-Day Plant Delivery in UP's Martyr City",
    metaKeyword: "plants online shahjahanpur, buy plants shahjahanpur, indoor plants shahjahanpur, plant delivery shahjahanpur uttar pradesh, marigold shahjahanpur, tulsi shahjahanpur, online nursery shahjahanpur ram prasad bismil rohilkhand",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Shahjahanpur — UP's Freedom Martyr City Gets Doorstep Greens</h2>
<p>Shahjahanpur is one of Uttar Pradesh's most historically significant cities from the Indian independence movement — the birthplace of Ram Prasad Bismil (1897–1927), one of India's greatest revolutionary martyrs and the author of the iconic poem "Sarfaroshi ki Tamanna" (the desire for revolution — which became the anthem of India's revolutionary independence movement). Bismil was hanged at Gorakhpur jail on December 19, 1927, for his role in the Kakori Train Robbery of 1925 (along with Ashfaqullah Khan, Roshan Singh, and Rajendra Nath Lahiri). Shahjahanpur's freedom heritage is celebrated with a major martyrs' memorial. The city is also the headquarters of Shahjahanpur district in the Rohilkhand-Awadh borderland.</p>
<p>Shahjahanpur's climate is western UP: hot summers (43°C), moderate monsoon (850 mm), and cold winters (4–22°C). Marigold, tulsi, money plant, rose, and indoor plants thrive. RedHeart delivers across Shahjahanpur, Tilhar, Jalalabad, Powayan, and Hardoi with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Shahjahanpur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Rohilkhand Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Shahid Diwas</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Shahjahanpur market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">UP winter, Rohilkhand garden blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rohilkhand wedding tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, UP business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Shahjahanpur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Shahjahanpur / Tilhar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bismil memorial, Station road, Tilhar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jalalabad / Powayan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jalalabad, Powayan, Katra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to Ram Prasad Bismil and Shahjahanpur's revolutionary heritage?", answer: "Bismil's poem 'Sarfaroshi ki Tamanna' mentions the 'chaman' (garden) and the 'phool' (flower) as metaphors for India's freedom struggle — the sacrificial red rose is the most potent symbol of the revolutionary martyrs. Planting a red rose in Shahjahanpur in memory of Bismil, Ashfaqullah Khan, and the Kakori martyrs (December 19 is Shahid Diwas in Shahjahanpur) is a living tribute to the city's greatest patriots." },
      { question: "Is same-day plant delivery available in Shahjahanpur?", answer: "Yes. Same-day delivery across Shahjahanpur including Bismil memorial, Station road, and Tilhar. Order before 3 PM. Jalalabad and Powayan are within 3–5 hours." },
      { question: "What plants grow well in Shahjahanpur's Rohilkhand-Awadh climate?", answer: "Shahjahanpur's 850 mm monsoon and cold winters (4°C night minimum) make rose, marigold, tulsi, jasmine, and money plant thrive. October–March is the best outdoor garden season. The Shahjahanpur-Rampur-Bareilly Rohilkhand belt is one of UP's most productive agricultural zones — the same fertile soil that produces sugarcane makes home gardening extremely rewarding." },
      { question: "What plant is best for Shahjahanpur's UP winter garden season?", answer: "Rose (producing its most spectacular blooms in November–February's cool Rohilkhand nights), marigold (peaking October–January), chrysanthemum (the cold-season flower par excellence), and sweet william (a traditional UP winter flower) are the most rewarding cold-season garden plants for Shahjahanpur. Planting in October for November flowering is the optimal window." },
      { question: "Do you deliver plants to Hardoi from Shahjahanpur?", answer: "Yes. Hardoi (70 km from Shahjahanpur, a significant Awadh district headquarters in central UP on the Ganga-Ghaghra doab, with the famous Sandila mango and the Hardoi Sugar Mill) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "rampur": {
    cityName: "Rampur",
    metaTitle: "Buy Plants Online in Rampur | Nawabi Raza Library UP Plants | RedHeart",
    metaDescription: "Order plants online in Rampur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. UP's Nawabi heritage city with Raza Library gets plant delivery.",
    h1: "Buy Plants Online in Rampur — Same-Day Plant Delivery in UP's Nawabi Heritage City",
    metaKeyword: "plants online rampur, buy plants rampur, indoor plants rampur, plant delivery rampur uttar pradesh, marigold rampur, tulsi rampur, online nursery rampur nawab raza library rohilkhand knife",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Rampur — The Nawabi City Gets Doorstep Greens</h2>
<p>Rampur is one of Uttar Pradesh's most culturally distinctive cities — the former seat of the Rampur Nawabi state, the last Rohilla princely state that maintained its independence from British rule until 1947 by a unique position as a Muslim-ruled, culturally sophisticated state where Persian and Urdu culture flourished under the patronage of the Nawabs of Rampur. The city's greatest legacy is the Raza Library — one of the world's most important Islamic manuscript collections (15,000 rare manuscripts in Arabic, Persian, and Urdu, including the extraordinary Quran in Aurangzeb's own handwriting, and illustrated manuscripts of the Masnavi and Hamzanama), now a National Library. Rampur is also famous for its Rampuri knife (the spring-action folding knife, a cultural artifact of UP's craftsmen) and its biryani (a distinctive style in the Awadhi tradition).</p>
<p>Rampur's climate is Rohilkhand: hot summers (44°C), moderate monsoon (800 mm), and cold winters (4–22°C). Rose, marigold, tulsi, jasmine, and indoor plants are popular. RedHeart delivers across Rampur, Moradabad, Bilaspur, Swar, and Milak with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Rampur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nawabi Persian garden tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu homes in Rampur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nawabi fragrance, Rampur wedding</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Eid decoration</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, Raza Library area gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, UP business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Rampur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rampur / Bilaspur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Raza Library, Nawab palace area, Bilaspur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Swar / Milak</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Swar, Milak, Shahabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to Rampur's Nawabi Persian garden heritage?", answer: "Rose (Persian: gul) is the most profound plant for Rampur's Nawabi tradition — Persian and Urdu poetry (the foundation of the Raza Library's manuscripts) is saturated with rose imagery (gul-o-bulbul, the rose and nightingale). The Nawabs of Rampur maintained formal Persian char bagh gardens where rose, jasmine (yasmin), and narcissus (nargis) were the primary fragrance plants. Growing Gulzar-e-Rampur (Rampur's rose garden) at home honours the Nawabi cultural legacy." },
      { question: "Is same-day plant delivery available in Rampur?", answer: "Yes. Same-day delivery across Rampur including Raza Library area, Nawab palace area, and Bilaspur. Order before 3 PM. Swar and Milak are within 3–5 hours." },
      { question: "What plants grow well in Rampur's Rohilkhand climate?", answer: "Rampur's 800 mm monsoon and cold winter nights (4°C) make rose (excellent November–March blooms), marigold, tulsi, jasmine, and money plant thrive. Jasmine (mogra and chameli) is particularly beautiful in Rampur's warm evenings (April–October) — the fragrance tradition of Rampur's former garden estates lives on in every home garden." },
      { question: "What plant is most appropriate for gifting to Rampur's Muslim community?", answer: "Rose (in Islamic tradition, the Prophet Muhammad is associated with the rose — the fragrance of roses is mentioned in hadith and Sufi poetry as the fragrance of paradise) is the most culturally resonant gifting plant for Rampur's Muslim community. White jasmine (eid ka phool) for Eid celebrations and green money plant (evergreen, signifying prosperity) are equally appropriate and universally welcomed across Rampur's communities." },
      { question: "Do you deliver plants to Moradabad from Rampur?", answer: "Yes. Moradabad (35 km from Rampur, the Brass City of India and the world's largest brassware exporting cluster, with UNESCO-recognized Moradabad bidriware and brassware crafts) is within our 3–5 hour same-day delivery zone." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/plants-online/${slug}`;
    const payload = {
      category: "Plants",
      cityName: data.cityName,
      slug,
      url: cityUrl,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      h1: data.h1,
      canonicalUrl: `${BASE_URL}${cityUrl}`,
      metaKeyword: data.metaKeyword,
      breadcrumb: [
        { label: "Home", url: "/" },
        { label: "Plants", url: "/plants-online" },
        { label: `Buy Plants Online in ${data.cityName}`, url: cityUrl },
      ],
      footerContent: data.footerContent.trim(),
      faqs: data.faqs,
      isActive: true,
    };
    const res = await fetch(`${API_BASE}/city/upsert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) console.error(`❌  ${data.cityName}`, json);
    else console.log(`✅  ${data.cityName} — ${json._id}`);
  }
}

run().catch((err) => { console.error(err); process.exit(1); });
