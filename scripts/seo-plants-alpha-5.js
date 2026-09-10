// Plants Alphabetical Pass Batch 5 — 8 cities
// Haldwani, Rudrapur, Silchar, Jorhat, Mandya, Kalaburagi, Bidar, Hospet

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "haldwani": {
    cityName: "Haldwani",
    metaTitle: "Buy Plants Online in Haldwani | Kumaon Gateway Uttarakhand Plants | RedHeart",
    metaDescription: "Order plants online in Haldwani. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Uttarakhand's Kumaon gateway city gets plant delivery.",
    h1: "Buy Plants Online in Haldwani — Same-Day Plant Delivery at the Gateway to Kumaon Hills",
    metaKeyword: "plants online haldwani, buy plants haldwani, indoor plants haldwani, plant delivery haldwani uttarakhand, marigold haldwani, rose plant haldwani, online nursery haldwani kumaon nainital gateway",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Haldwani — The Gateway to Kumaon Hills Gets Doorstep Greens</h2>
<p>Haldwani is Uttarakhand's largest city in the Kumaon division and the commercial gateway to the Kumaon Himalaya — the base city from which travellers depart for Nainital, Ranikhet, Almora, Corbett Tiger Reserve, and the Pindari/Milam glaciers. The city is positioned at the boundary of the Terai belt (the fertile Himalayan foothills plain), where the Shivalik Hills descend to the Gangetic plains. Haldwani is one of the most important sugar and paper manufacturing towns in Uttarakhand, and the Haldwani-Kathgodam twin urban area serves as the railway terminus for the Kumaon hills region (Kathgodam station is the last railway station before the hills begin). The Gaula river running through Haldwani connects the city to the broader Kumaon watershed.</p>
<p>Haldwani's climate is Terai-Kumaon foothills: hot summers (38°C), excellent monsoon (1,200 mm), and cold winters (4–20°C). Rose, marigold, tulsi, money plant, and all hill-adjacent plants thrive. RedHeart delivers across Haldwani, Kathgodam, Rudrapur, Lalkuan, and Ramnagar with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Haldwani</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kumaon winter, outstanding blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Kumaoni festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Kumaoni home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Haldwani apartments</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Terai humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, hill-town business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Haldwani</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Haldwani / Kathgodam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nainital Road, Indira Nagar, Kathgodam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lalkuan / Ramnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lalkuan, Ramnagar (Corbett), Rudrapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most meaningful for Haldwani's Kumaon hill-gateway identity?", answer: "Rhododendron (Buransh) — Uttarakhand's state tree, famous for its red flowers in the Kumaon hills (April–May) — is the most culturally resonant hill plant for Haldwani families. At lower elevations, rose (excellent winter blooms), marigold for Kumaoni festivals (Harela, Ghee Sankranti, Basant Panchami), and jasmine are the most popular practical choices." },
      { question: "Is same-day plant delivery available in Haldwani?", answer: "Yes. Same-day delivery across Haldwani including Nainital Road, Indira Nagar, and Kathgodam area. Order before 3 PM. Lalkuan and Ramnagar are within 3–5 hours." },
      { question: "What plants grow best in Haldwani's Terai foothills climate?", answer: "The 1,200 mm monsoon, Gaula river humidity, and cold-but-not-harsh winters make rose, marigold, tulsi, jasmine, money plant, hibiscus, and tropical indoor plants all thrive in Haldwani. October–March is the peak outdoor garden season, with cold Kumaon nights producing beautiful blooms." },
      { question: "What plant is best for visitors transiting through Haldwani to Corbett Tiger Reserve?", answer: "For Corbett National Park eco-lodges and nature resorts near Ramnagar (45 km from Haldwani), areca palm, money plant, and peace lily create an appropriate jungle-adjacent indoor ambiance. Marigold planted at Corbett-area homestays creates warm, welcoming entrances for wildlife tourists." },
      { question: "Do you deliver plants to Ramnagar (Corbett) from Haldwani?", answer: "Yes. Ramnagar (45 km from Haldwani, the main gateway town for Jim Corbett National Park — India's oldest tiger reserve and the park that inspired Corbett's famous 'Man-Eaters of Kumaon' stories) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "rudrapur": {
    cityName: "Rudrapur",
    metaTitle: "Buy Plants Online in Rudrapur | SIDCUL Uttarakhand Industrial Plants | RedHeart",
    metaDescription: "Order plants online in Rudrapur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Uttarakhand's largest industrial city gets fresh plant delivery.",
    h1: "Buy Plants Online in Rudrapur — Same-Day Plant Delivery in Uttarakhand's Industrial Capital",
    metaKeyword: "plants online rudrapur, buy plants rudrapur, indoor plants rudrapur, plant delivery rudrapur uttarakhand, marigold rudrapur, tulsi rudrapur, online nursery rudrapur SIDCUL Pantnagar industrial",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Rudrapur — Uttarakhand's Industrial Powerhouse Gets Doorstep Greens</h2>
<p>Rudrapur is Uttarakhand's most important industrial city — the headquarters of SIDCUL (State Infrastructure and Industrial Development Corporation of Uttarakhand Ltd), which manages the Pantnagar Industrial Estate — the largest integrated industrial estate in the Himalayas, housing manufacturing plants for Tata Motors, Hero MotoCorp, Ashok Leyland, Bajaj, Patanjali, Britannia, Parle, and hundreds of other companies. The city's transformation from a small Kumaon division town to an industrial hub of national significance since Uttarakhand's formation in 2000 has been one of India's fastest industrial development stories. Rudrapur is adjacent to Pantnagar (the site of G.B. Pant University of Agriculture and Technology — Pantnagar University — India's first agricultural university, established 1960).</p>
<p>Rudrapur's climate is Terai: hot summers (38°C), excellent monsoon (1,200 mm), and cold winters (4–22°C). All plants thrive. Marigold, tulsi, money plant, rose, and indoor plants are popular. RedHeart delivers across Rudrapur, Pantnagar, Gadarpur, Sitarganj, and Khatima with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Rudrapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, factory inauguration, Navratri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">SIDCUL factory office, industrial gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Uttarakhand Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate Diwali, Tata Motors gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter Terai garden, excellent blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Industrial office air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Rudrapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rudrapur / Pantnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">SIDCUL Industrial Estate, Pantnagar University</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Gadarpur / Sitarganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gadarpur, Sitarganj, Khatima</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for SIDCUL industrial Diwali gifting in Rudrapur?", answer: "Lucky bamboo in a corporate wooden or ceramic planter is the most universally appropriate Diwali gifting plant for SIDCUL's multi-company industrial community. Money plant (for prosperity) and snake plant (practical, air-purifying) are excellent corporate gifts for industrial offices at Tata Motors, Hero MotoCorp, and other SIDCUL Pantnagar companies. Marigold in terracotta pots at factory gates creates a warm Diwali welcome." },
      { question: "Is same-day plant delivery available in Rudrapur?", answer: "Yes. Same-day delivery across Rudrapur including SIDCUL Industrial Estate and Pantnagar University area. Order before 3 PM. Gadarpur and Sitarganj are within 3–5 hours." },
      { question: "What plants grow well in Rudrapur's Terai foothills climate?", answer: "Rudrapur's 1,200 mm monsoon (Terai rainfall enhanced by Shivalik orography) and cold-but-not-harsh winters make virtually all plants thrive. Rose (November–March), marigold, tulsi, money plant, jasmine, and indoor tropical plants all grow well. The fertile Terai soil is excellent for outdoor gardening." },
      { question: "What plant is most appropriate for Pantnagar University (India's first agricultural university)?", answer: "Growing a tulsi or neem tree (both Ayurvedic medicinal plants studied at Pantnagar's agronomy and plant science departments) makes a meaningful connection to India's first agricultural university. For academic gifting in GBPUA&T, money plant and lucky bamboo are the most practical indoor options for faculty residences and student hostels." },
      { question: "Do you deliver plants to Pantnagar University from Rudrapur?", answer: "Yes. Pantnagar (5 km from Rudrapur, the campus of Govind Ballabh Pant University of Agriculture and Technology — India's first agricultural university and the institution that pioneered the Green Revolution research in India) is within our core 2–4 hour same-day delivery zone." }
    ]
  },

  "silchar": {
    cityName: "Silchar",
    metaTitle: "Buy Plants Online in Silchar | Barak Valley Assam Plants | RedHeart",
    metaDescription: "Order plants online in Silchar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Assam's Barak Valley capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Silchar — Same-Day Plant Delivery in Assam's Barak Valley",
    metaKeyword: "plants online silchar, buy plants silchar, indoor plants silchar, plant delivery silchar assam, marigold silchar, tulsi silchar, online nursery silchar barak valley cachar bengali",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Silchar — Assam's Barak Valley Capital Gets Doorstep Greens</h2>
<p>Silchar is the largest city in the Barak Valley — the southernmost part of Assam, culturally and linguistically distinct from the Brahmaputra Valley, with a predominantly Bengali-speaking population (both Bengali Hindus and Bengali Muslims). The city is the cultural and commercial capital of the Cachar district and the broader Barak Valley (comprising Cachar, Hailakandi, and Karimganj districts). Silchar was the site of the remarkable Barak Valley language movement (May 19, 1961 — when Bengali speakers agitated to have Bengali recognized as an official language of Assam and 11 martyrs were killed at Silchar railway station; May 19 is observed as Language Martyrs' Day in the valley). The National Institute of Technology Silchar is the region's premier technical institution.</p>
<p>Silchar's climate is Barak Valley: hot-humid summers (35°C), very heavy monsoon (2,500 mm), and mild winters (8–22°C). The extraordinary rainfall makes all tropical plants thrive effortlessly. Marigold, tulsi, money plant, anthurium, and indoor plants are popular. RedHeart delivers across Silchar, Sonai, Lakhipur, Jiribam, and Hailakandi with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Silchar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Bengali Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durga Puja, Diwali, Saraswati Puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Barak Valley monsoon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, NIT Silchar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durga Puja offering, grows in monsoon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Durgapur gifting Silchar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Silchar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Silchar City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tarapur, Rangirkhari, NIT campus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sonai / Hailakandi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sonai, Lakhipur, Hailakandi town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Durga Puja in Silchar's Bengali Hindu community?", answer: "Hibiscus (joba phool — red Chinese hibiscus) is the most sacred offering flower for Durga Puja in Bengal and the Barak Valley — Maa Durga's favourite flower is the joba, and no Puja is complete without a hibiscus garland on the goddess's idol. Tulsi (aparajita variety) and marigold are also essential. Growing hibiscus in Silchar's monsoon climate is effortless — it thrives in the 2,500 mm annual rainfall." },
      { question: "Is same-day plant delivery available in Silchar?", answer: "Yes. Same-day delivery across Silchar including Tarapur, Rangirkhari, and NIT campus area. Order before 3 PM. Sonai and Hailakandi are within 3–5 hours." },
      { question: "What plants grow best in Silchar's very heavy Barak Valley monsoon?", answer: "Silchar's 2,500 mm annual rainfall (one of northeast India's highest) makes tropical plants grow with extraordinary vigour. Anthurium, hibiscus, jasmine, money plant, banana, areca palm, and ferns all thrive without irrigation concerns. The key gardening challenge in Silchar is drainage management during peak monsoon — raised beds and well-drained containers." },
      { question: "What plant connects to the Barak Valley language movement heritage in Silchar?", answer: "Aparajita (Clitoria ternatea — blue butterfly pea flower, used as blue dye and as a sacred offering in Bengali Hindu ritual) is the most culturally connected plant to Silchar's Bengali identity. Tulsi planted at the railway station in memory of the 11 language martyrs is a gesture of profound respect. The aparajita also makes beautiful tea (butterfly pea flower tea) — a living connection to Silchar's Bengali culture." },
      { question: "Do you deliver plants to Hailakandi from Silchar?", answer: "Yes. Hailakandi (55 km from Silchar, a separate Barak Valley district) is within our 3–5 hour same-day delivery zone. Karimganj and Jiribam (border point to Manipur) are also accessible." }
    ]
  },

  "jorhat": {
    cityName: "Jorhat",
    metaTitle: "Buy Plants Online in Jorhat | Tea Capital Assam Plants | RedHeart",
    metaDescription: "Order plants online in Jorhat. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Assam's tea capital in Upper Assam gets fresh plant delivery.",
    h1: "Buy Plants Online in Jorhat — Same-Day Plant Delivery in Assam's Tea Capital",
    metaKeyword: "plants online jorhat, buy plants jorhat, indoor plants jorhat, plant delivery jorhat assam, marigold jorhat, tulsi jorhat, online nursery jorhat tea capital bihu majuli",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jorhat — Assam's Tea Capital Gets Doorstep Greens</h2>
<p>Jorhat is the cultural and commercial heart of Upper Assam — the "Tea Capital of the World" (Assam's most concentrated tea garden cluster surrounds Jorhat, which has been central to the global Assam tea industry since the 1860s), the site of the Assam Agricultural University (a pioneer in tea research and agriculture education in northeast India), and the administrative hub of the region. The city's most extraordinary distinction is its proximity to Majuli Island — the world's largest river island (in the Brahmaputra), the centre of Vaishnavism's Sattriya culture in Assam (the Satraas/monasteries that preserve the Vaishnavite art forms established by Srimanta Shankardev in the 15th–16th centuries). Jorhat's tea garden bungalows (the distinctive colonial-era plantation homes) are among Assam's most photographed architectural heritage elements.</p>
<p>Jorhat's climate is Upper Assam: hot-humid summers (34°C), very heavy monsoon (1,800 mm), and cool winters (8–22°C). The extraordinary monsoon makes tropical plants grow effortlessly. Tulsi, marigold, money plant, anthurium, and indoor plants are popular. RedHeart delivers across Jorhat, Mariani, Titabor, Teok, and Sibsagar with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Jorhat</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Vaishnav Satra tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bihu, Durga Puja, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Assam monsoon humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, tea garden bungalow, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tea bungalow, plantation ambiance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bihu gifting, tea company offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jorhat</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jorhat City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">AT Road, Tarajan, AAU campus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mariani / Sibsagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mariani, Titabor, Sibsagar Ahom capital</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to Jorhat's Assam tea garden heritage?", answer: "The Assam tea plant (Camellia sinensis var. assamica) is the defining agricultural plant of Jorhat — growing a potted tea plant at home is a deeply meaningful connection to the city's heritage as the world's most productive tea zone. At home, tulsi (a close relative in spirit to tea as a herbal infusion plant), lemongrass (for the masala chai companion), and areca palm (echoing tea bungalow colonial garden aesthetics) are the most identity-connected choices." },
      { question: "Is same-day plant delivery available in Jorhat?", answer: "Yes. Same-day delivery across Jorhat including AT Road, Tarajan, and AAU campus area. Order before 3 PM. Mariani and Sibsagar are within 3–5 hours." },
      { question: "What plant is most sacred for Bihu in Jorhat's Assamese community?", answer: "For Bihu (Assam's three-season festival — Rongali Bihu in April/spring, Kongali Bihu in October/autumn, Bhogali Bihu in January/harvest), marigold during Bhogali Bihu's festive bonfire season is the primary plant. Tulsi is ceremonially planted and worshipped during Kongali Bihu. The Bihu ritual of women dancing with traditional plants (foliage and flowers) is a living botanical tradition in Jorhat's Assamese community." },
      { question: "What plants grow best in Jorhat's exceptionally heavy Assam monsoon?", answer: "Jorhat's 1,800 mm monsoon (and the surrounding tea garden landscape's even heavier rainfall of 2,500+ mm) means all tropical plants grow effortlessly. Anthurium, areca palm, money plant, hibiscus, jasmine, banana, and ferns all thrive without any watering effort during monsoon months. Drainage management is more important than irrigation in Jorhat's gardens." },
      { question: "Do you deliver plants to Majuli Island from Jorhat?", answer: "Yes. Majuli Island (connected to Jorhat by ferry across the Brahmaputra — the world's largest river island, the living centre of Vaishnavite Sattriya culture with its traditional monasteries, and a UNESCO World Heritage tentative site) is accessible from Jorhat. Delivery coordination for Majuli is available — please contact our team for ferry-crossing delivery arrangements." }
    ]
  },

  "mandya": {
    cityName: "Mandya",
    metaTitle: "Buy Plants Online in Mandya | Sugar City Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Mandya. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Karnataka's sugar city near Mysuru gets fresh plant delivery.",
    h1: "Buy Plants Online in Mandya — Same-Day Plant Delivery in Karnataka's Sugar Belt",
    metaKeyword: "plants online mandya, buy plants mandya, indoor plants mandya, plant delivery mandya karnataka, marigold mandya, tulsi mandya, online nursery mandya sugar krishnarajasagara cauvery",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Mandya — Karnataka's Sugar City Gets Doorstep Greens</h2>
<p>Mandya is Karnataka's most productive sugarcane-growing district — the KRS Dam (Krishnarajasagara Dam) on the Cauvery river, built in 1932 under the Mysore Divan Sir Mirza Ismail, is the largest reservoir in south India at the time of its completion and transformed Mandya's black-soil plains into one of Karnataka's most irrigated and productive agricultural zones. The Cauvery river, around which Mandya's agriculture and identity revolve, is the subject of one of India's most contested inter-state water disputes (Karnataka vs Tamil Nadu). The Brindavan Gardens (illuminated fountains at KRS Dam) is one of Karnataka's most popular tourism destinations, drawing millions of visitors annually. Mandya is connected by expressway to both Mysuru (25 km) and Bengaluru (100 km).</p>
<p>Mandya's climate is south Karnataka dry-irrigated: hot summers (35°C), moderate monsoon (700 mm), and pleasant winters (15–28°C). Marigold, tulsi, money plant, rose, and indoor plants are popular. RedHeart delivers across Mandya, Srirangapatna, Pandavapura, Nagamangala, and Mysuru with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Mandya</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dasara, Ugadi, Cauvery Sankramana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Kannada Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, KRS Dam tourism</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mandya wedding, Cauvery belt fragrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Karnataka winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, sugar factory gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Mandya</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Mandya City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">KR Pet Road, Shivaji Road, KRS area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Srirangapatna / Pandavapura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Srirangapatna (Tipu Sultan fort), Pandavapura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most associated with the Cauvery river and Mandya's identity?", answer: "Lotus (growing in the Cauvery river's backwaters and the KRS reservoir's shores) is the most beautiful botanical symbol of Mandya's Cauvery heritage. Tulsi planted beside the Cauvery is a Mandya farming family tradition — offering tulsi leaves to the river during Cauvery Sankramana is a sacred practice. Jasmine from Mandya's Cauvery belt is famous for its fragrance and is used in the iconic mallige (jasmine) garlands worn by Mysuru women." },
      { question: "Is same-day plant delivery available in Mandya?", answer: "Yes. Same-day delivery across Mandya including KR Pet Road, Shivaji Road, and KRS area. Order before 3 PM. Srirangapatna and Pandavapura are within 3–5 hours." },
      { question: "What plants grow well in Mandya's canal-irrigated Cauvery belt?", answer: "Mandya's KRS canal irrigation system makes outdoor gardening very reliable. Marigold, tulsi, jasmine, hibiscus, money plant, and rose all thrive. The mild climate (35°C max, pleasant winters) is ideal for year-round gardening. October–February is the peak flower garden season." },
      { question: "What plant is best for the Brindavan Gardens / KRS Dam hospitality?", answer: "Lotus in a water feature replicates the KRS Dam's famous fountain garden ambiance. Peace lily and areca palm for the indoor areas of Karnataka Tourism Department's KRS hotels. Marigold for the festive Dasara decoration of hotels near the illuminated Brindavan Gardens — Karnataka's most visited tourist attraction outside Bengaluru." },
      { question: "Do you deliver plants to Srirangapatna from Mandya?", answer: "Yes. Srirangapatna (14 km from Mandya, the island fortress capital of Hyder Ali and Tipu Sultan — one of Karnataka's most significant historical sites, with the Ranganathaswamy temple, Tipu Sultan's summer palace Daria Daulat, and Gumbaz mausoleum) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "kalaburagi": {
    cityName: "Kalaburagi",
    metaTitle: "Buy Plants Online in Kalaburagi | Gulbarga Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Kalaburagi (Gulbarga). Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. North Karnataka's largest city gets plant delivery.",
    h1: "Buy Plants Online in Kalaburagi (Gulbarga) — Same-Day Plant Delivery in North Karnataka",
    metaKeyword: "plants online kalaburagi, buy plants kalaburagi, indoor plants kalaburagi, plant delivery kalaburagi gulbarga karnataka, marigold kalaburagi, tulsi kalaburagi, online nursery kalaburagi gulbarga sharanas",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kalaburagi — North Karnataka's Ancient City Gets Doorstep Greens</h2>
<p>Kalaburagi (formerly Gulbarga) is the largest city in north Karnataka — the historical seat of the Bahmani Sultanate (1347–1518), whose Gulbarga Fort, the Jama Masjid (one of the earliest Indian mosques with a fully enclosed courtyard, modelled on the Cordoba Mosque in Spain), and the impressive Bahmani tombs (Haft Gumbad — the seven domes complex) are UNESCO-recognized heritage monuments. The city is also the major centre of Lingayat Veerashaiva philosophy in Karnataka — Basaveshwara (the 12th-century social reformer and Lingayat movement founder) is deeply venerated here, and the Basaveshwara temple and Sharanas' tradition make Kalaburagi a pilgrimage site for Lingayat communities. Kalaburagi University and the Central University of Karnataka are the region's educational pillars.</p>
<p>Kalaburagi's climate is North Karnataka dry Deccan: hot summers (42°C), low monsoon (600 mm), and cool winters (12–28°C). Drought-adapted plants are important. Tulsi, marigold, aloe vera, money plant, and indoor plants are most popular. RedHeart delivers across Kalaburagi, Yadgir, Chincholi, Afzalpur, and Sedam with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Kalaburagi</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Lingayat Veerashaiva homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dasara, Ugadi, Basaveshwara festival</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles dry North Karnataka climate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, university offices, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor air purifier, low water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kalaburagi</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kalaburagi City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gulbarga Fort area, Sharana Basaveshwara, University road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Yadgir / Sedam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yadgir, Sedam, Chincholi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for the Lingayat Veerashaiva community in Kalaburagi?", answer: "Bel (bilva) leaves are the most sacred offering for Basaveshwara (Shiva devotion is central to Lingayat faith) — a bel tree in the home garden is a deeply meaningful connection to Kalaburagi's Sharana tradition. Tulsi for daily puja and marigold for the Basaveshwara Jayanti celebrations are the other essential botanical elements of Kalaburagi's Veerashaiva devotional life." },
      { question: "Is same-day plant delivery available in Kalaburagi?", answer: "Yes. Same-day delivery across Kalaburagi including Gulbarga Fort area, Sharana Basaveshwara road, and University road. Order before 3 PM. Yadgir and Sedam are within 3–5 hours." },
      { question: "What plants survive Kalaburagi's dry North Karnataka Deccan climate?", answer: "Aloe vera, tulsi (requires daily watering in summer), snake plant, money plant in water vase, cactus, and lucky bamboo in water vase are the most drought-adapted choices for Kalaburagi's 42°C summers and 600 mm monsoon. October–February is the best outdoor planting window." },
      { question: "What plant connects to Kalaburagi's Bahmani Sultanate heritage?", answer: "Rose (the Persian garden tradition introduced by the Bahmani Sultanate — the Persianate Islamic horticultural style that created formal char bagh gardens and rose gardens across the Deccan) is the most historically connected plant for Kalaburagi's Islamic heritage. Growing roses in winter honours the Bahmani tradition of Persian garden culture that the Gulbarga Sultanate brought to the Deccan." },
      { question: "Do you deliver plants to Yadgir from Kalaburagi?", answer: "Yes. Yadgir (70 km from Kalaburagi, the seat of the newest Karnataka district, carved from Kalaburagi district, and an important agricultural zone near the Krishna river) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "bidar": {
    cityName: "Bidar",
    metaTitle: "Buy Plants Online in Bidar | Bidriware Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Bidar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Karnataka's Bidriware heritage city gets plant delivery.",
    h1: "Buy Plants Online in Bidar — Same-Day Plant Delivery in the Bidriware Capital",
    metaKeyword: "plants online bidar, buy plants bidar, indoor plants bidar, plant delivery bidar karnataka, marigold bidar, tulsi bidar, online nursery bidar bidriware bahmani sultanate",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bidar — Karnataka's Craft Heritage City Gets Doorstep Greens</h2>
<p>Bidar is one of Karnataka's most historically significant cities — the capital of the Bahmani Sultanate from 1422 onwards (the splendid Bidar Fort with its massive fortifications, the Madrasa of Mahmud Gawan — one of the finest examples of Persian architectural style in India — and the ornate Bahmani royal tombs at Ashtur are all UNESCO-recognized heritage structures), and the original home of Bidriware — the extraordinary craft of inlaying silver into a black zinc-copper alloy, which takes its name from Bidar and which has been produced here for 600+ years (Bidriware received GI tag recognition as Karnataka's heritage craft). Bidar is now part of Karnataka but historically shares deep cultural connections with Hyderabad's Nizam state.</p>
<p>Bidar's climate is North Karnataka Deccan plateau: moderate summers (38°C — cooler than Kalaburagi due to elevation), low monsoon (650 mm), and cool winters (10–26°C). Tulsi, marigold, aloe vera, money plant, and indoor plants are most popular. RedHeart delivers across Bidar, Basavakalyan, Humnabad, Aurad, and Bhalki with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Bidar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Lingayat and Hindu Bidar homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ugadi, Dasara, Diwali, Basavanna Jayanti</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bidar winter, Persianate garden heritage</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles dry Deccan conditions</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Bidriware artisan workshops</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gifting, craft heritage city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bidar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bidar City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bidar Fort area, Mahmud Gawan area, Old Town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Basavakalyan / Humnabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Basavakalyan (Basavanna's holy city), Humnabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most resonant with Bidar's Bidriware craft heritage?", answer: "Silver-white flowering plants — white rose, white jasmine, white anthurium, and peace lily — are the most artistically connected plants for Bidar's Bidriware tradition (the characteristic silver inlay on matte black metal is one of India's most distinctive craft aesthetics). Growing white flowering plants creates a visual dialogue with Bidar's iconic black-and-silver craft tradition." },
      { question: "Is same-day plant delivery available in Bidar?", answer: "Yes. Same-day delivery across Bidar including Bidar Fort area, Mahmud Gawan area, and Old Town. Order before 3 PM. Basavakalyan and Humnabad are within 3–5 hours." },
      { question: "What plant connects to Basavakalyan near Bidar (Basavanna's sacred city)?", answer: "Basavakalyan (35 km from Bidar) is the city where Basaveshwara (Basavanna) served the Kalachuri king Bijjala and began the Lingayat social reform movement. Bel (bilva leaves — Shiva's sacred plant), tulsi, and marigold are the most sacred plants for Basavakalyan's Lingayat pilgrimage community." },
      { question: "What plants survive Bidar's dry Deccan plateau climate?", answer: "Aloe vera, tulsi, snake plant (indoor AC), money plant in water vase, and lucky bamboo in water vase are the most drought-adapted choices. October–February is the best outdoor planting window. Rose in November produces beautiful blooms in Bidar's cool winter evenings." },
      { question: "Do you deliver plants to Basavakalyan from Bidar?", answer: "Yes. Basavakalyan (35 km from Bidar, the sacred birth and work city of Basaveshwara — the 12th-century Kannada poet-philosopher who founded the Lingayat-Veerashaiva reform movement and abolished caste discrimination) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "hospet": {
    cityName: "Hospet",
    metaTitle: "Buy Plants Online in Hospet | Hampi Karnataka Heritage Plants | RedHeart",
    metaDescription: "Order plants online in Hospet. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Gateway to Hampi UNESCO site in Karnataka gets plant delivery.",
    h1: "Buy Plants Online in Hospet — Same-Day Plant Delivery Near Hampi's World Heritage",
    metaKeyword: "plants online hospet, buy plants hospet, indoor plants hospet, plant delivery hospet karnataka, marigold hospet, tulsi hospet, online nursery hospet hampi vijayanagara tungabhadra",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Hospet — Gateway to Hampi's World Heritage Gets Doorstep Greens</h2>
<p>Hospet (now officially Hosapete) is the commercial hub and gateway city for Hampi — the extraordinary UNESCO World Heritage Site on the Tungabhadra river that was the capital of the Vijayanagara Empire (14th–16th centuries), one of India's greatest empires that at its peak covered most of south India and was one of the world's largest cities (with a population estimated at 500,000 in 1500 CE). The Tungabhadra Dam (12 km from Hospet) is one of Karnataka's most important irrigation projects, making Hospet and the Bellary-Koppal belt a major cotton and paddy agricultural zone. The iron ore mines of the Bellary-Hospet-Sandur belt made the city one of India's most important iron ore export zones before mining regulations tightened post-2011.</p>
<p>Hospet's climate is north Karnataka dry: very hot summers (43°C), moderate monsoon (600 mm), and pleasant winters (12–28°C). Tulsi, marigold, aloe vera, money plant, and indoor plants are most popular. RedHeart delivers across Hospet, Bellary, Sandur, Hampi, Gadag, and Koppal with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Hospet</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vijayanagara Vaishnava tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dasara (major in Hospet region), Ugadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Hospet extreme summer heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, Hampi tourism hotel, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC, mining industry offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, steel/iron industry gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Hospet</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hospet / Hampi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tungabhadra Dam, Hampi road, Station area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bellary / Sandur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bellary city, Sandur iron ore belt, Koppal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant most resonates with Hampi's Vijayanagara Empire heritage near Hospet?", answer: "Tulsi is the most sacred plant of the Vijayanagara Empire's Vaishnava tradition — the empire's ruling family were devout Vaishnavas who built the Vitthala temple and Virupaksha temple complexes at Hampi. Growing tulsi in the home connects to the same devotion that animated the greatest south Indian empire. Banana plants and lotus (featured in Hampi's stone carvings) are the most aesthetically connected plants to the Vijayanagara architectural heritage." },
      { question: "Is same-day plant delivery available in Hospet?", answer: "Yes. Same-day delivery across Hospet including Tungabhadra Dam area, Hampi road, and Station area. Order before 3 PM. Bellary and Sandur are within 3–5 hours." },
      { question: "What plants survive Hospet's extreme summer heat near the Deccan plateau?", answer: "Aloe vera (handles 43°C without watering for weeks), snake plant, cactus, and money plant in water vase are the most drought-adapted choices. October–February is the best outdoor planting window. The Tungabhadra Dam's irrigation water makes outdoor garden irrigation possible for those near the canal system." },
      { question: "What plant is best for Hampi's heritage tourism lodges and eco-resorts?", answer: "For Hampi's unique boulder-landscape eco-resorts and heritage guesthouses, succulent gardens (aloe vera, cactus, agave) are the most site-appropriate — they complement the rocky Deccan landscape without seeming incongruous. For indoor spaces, peace lily and money plant are the most low-maintenance tourism-property choices." },
      { question: "Do you deliver plants to Hampi from Hospet?", answer: "Yes. Hampi (13 km from Hospet, the UNESCO World Heritage Site of the Vijayanagara Empire — one of India's most extraordinary archaeological landscapes, with 500+ monuments scattered across a 26 sq km boulder-strewn landscape on the Tungabhadra river) is within our 2–4 hour same-day delivery zone." }
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
