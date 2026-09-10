// Plants Alphabetical Pass Batch 8 — 8 cities
// Modinagar, Hapur, Bulandshahr, Etawah, Mainpuri, Farrukhabad, Kannauj, Unnao

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "modinagar": {
    cityName: "Modinagar",
    metaTitle: "Buy Plants Online in Modinagar | NCR Industrial UP Plants | RedHeart",
    metaDescription: "Order plants online in Modinagar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Ghaziabad district industrial city near Delhi gets plants.",
    h1: "Buy Plants Online in Modinagar — Same-Day Plant Delivery in NCR's Industrial Town",
    metaKeyword: "plants online modinagar, buy plants modinagar, indoor plants modinagar, plant delivery modinagar ghaziabad uttar pradesh, marigold modinagar, tulsi modinagar, online nursery modinagar NCR modi industries",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Modinagar — NCR's Industrial Heartland Gets Doorstep Greens</h2>
<p>Modinagar is a planned industrial city in Ghaziabad district, Uttar Pradesh — located 45 km northeast of Delhi on the NH-58 (Delhi-Dehradun highway) and directly adjacent to the Hindon river. The city was planned and established by the Modi Group (Gujarwar Modi's industrial empire) in the 1930s as a model company town for their integrated textile and sugar manufacturing complex — making it one of India's earliest examples of corporate urbanism and planned industrial townships. The Modi Group's operations — textiles, chemicals, pharmaceuticals — gave the city its industrial character. Modinagar is now effectively part of the greater NCR urban continuum, with rapid residential growth driven by its proximity to Delhi-NCR job markets and its relatively lower property prices compared to Ghaziabad and Noida.</p>
<p>Modinagar's climate is NCR: hot summers (44°C with loo winds), moderate monsoon (750 mm), and cold-foggy winters (3–22°C). Rose, marigold, tulsi, money plant, and indoor plants are popular. RedHeart delivers across Modinagar, Muradnagar, Pilkhuwa, Hapur, and Ghaziabad with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Modinagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, NCR Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, NCR festive</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, industrial office gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NCR winter, beautiful cold blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NCR air pollution filter, indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Modi Group factory gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Modinagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Modinagar / Muradnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Modi township, NH-58, Muradnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur / Pilkhuwa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur, Pilkhuwa, Ghaziabad rural</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What air-purifying plants are best for Modinagar's industrial NCR zone?", answer: "NCR's air quality challenges make air-purifying plants a priority for Modinagar homes. Snake plant (removes benzene, NOx, CO), spider plant, peace lily, and areca palm are the most effective indoor options. For outdoors, neem trees (powerful air purifiers and allergen reducers) and tulsi are proven air-quality improvers in the WHO's evaluation of Indian traditional practices. RedHeart's snake plant and peace lily selections are the most practical indoor choices." },
      { question: "Is same-day plant delivery available in Modinagar?", answer: "Yes. Same-day delivery across Modinagar including Modi township, NH-58 area, and Muradnagar. Order before 3 PM. Hapur and Pilkhuwa are within 3–5 hours." },
      { question: "What plants grow best in Modinagar's NCR climate?", answer: "NCR winters produce beautiful rose and marigold blooms (October–February). Tulsi, money plant, jasmine, and indoor plants grow well all year. The 750 mm monsoon is adequate. October is the best planting month — plants establish before winter's peak bloom season." },
      { question: "What plant is best for Modinagar's corporate factory Diwali gifting?", answer: "Lucky bamboo in a glass vase is the most universally appropriate Diwali corporate gift for Modinagar's industrial township community. Money plant (signifying prosperity), snake plant (practical air purifier), and marigold at factory gates for the Diwali puja are the most popular industrial Diwali plant choices." },
      { question: "Do you deliver plants to Hapur from Modinagar?", answer: "Yes. Hapur (15 km from Modinagar, a significant UP industrial town with agarbatti/incense and paper manufacturing, and now elevated to district headquarters status) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "hapur": {
    cityName: "Hapur",
    metaTitle: "Buy Plants Online in Hapur | Panchsheel Nagar UP Plants | RedHeart",
    metaDescription: "Order plants online in Hapur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. UP's newest district city near Ghaziabad gets plant delivery.",
    h1: "Buy Plants Online in Hapur — Same-Day Plant Delivery in UP's Panchsheel Nagar District",
    metaKeyword: "plants online hapur, buy plants hapur, indoor plants hapur, plant delivery hapur uttar pradesh, marigold hapur, tulsi hapur, online nursery hapur panchsheel nagar ghaziabad garh mukteshwar ganga",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Hapur — Panchsheel Nagar District's Capital Gets Doorstep Greens</h2>
<p>Hapur (officially the headquarters of Hapur/Panchsheel Nagar district, formed in 2011 from Ghaziabad district) is a rapidly growing city in the Delhi-NCR region — positioned 55 km northeast of Delhi on the Moradabad highway. The city has been known for its paper and agarbatti (incense stick) manufacturing industries, and more recently for its position in the NCR's expanding residential belt. Hapur is adjacent to Pilkhuwa (famous for its handloom fabric market), and 30 km from Garh Mukteshwar — the most sacred Ganga pilgrimage site in western UP, famous for the Kartik Purnima mela at the Ganga ghat (one of UP's largest religious fairs, drawing over a million pilgrims annually).</p>
<p>Hapur's climate is NCR-western UP: hot summers (44°C), moderate monsoon (750 mm), and cold-foggy winters (3–22°C). Rose, marigold, tulsi, money plant, and indoor plants are popular. RedHeart delivers across Hapur, Pilkhuwa, Garh Mukteshwar, Bulandshahr, and Modinagar with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Hapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, western UP Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Kartik Purnima Garh Ganga</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, paper mill office gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Western UP winter blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NCR indoor air quality improvement</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gifting, Hapur market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Hapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur / Pilkhuwa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur main, Pilkhuwa textile market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Garh Mukteshwar / Bulandshahr</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garh Ganga ghats, Bulandshahr</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to Garh Mukteshwar's sacred Ganga near Hapur?", answer: "Tulsi and marigold are the most sacred Ganga puja plants at Garh Mukteshwar's Kartik Purnima Mela (one of UP's largest Ganga fairs, 30 km from Hapur). Bel (bilva) for Shiva devotion, lotuses (which grow in the Ganga's calmer stretches near Garh), and banana plants for the Kartik Purnima offering rituals are the most festival-connected plants for the Hapur-Garh pilgrimage zone." },
      { question: "Is same-day plant delivery available in Hapur?", answer: "Yes. Same-day delivery across Hapur including main market and Pilkhuwa textile area. Order before 3 PM. Garh Mukteshwar and Bulandshahr are within 3–5 hours." },
      { question: "What plants grow well in Hapur's NCR fringe climate?", answer: "Hapur's position on the NCR-UP border means Delhi's extreme summer heat (44°C), moderate monsoon (750 mm), and cold dense-fog winters all apply. Rose (October–February), marigold, tulsi, money plant, and indoor snake plant and peace lily thrive. October is the ideal planting month for winter flowering." },
      { question: "What plant is best for gifting in Hapur's agarbatti (incense) manufacturing community?", answer: "Incense-connected plants — jasmine (mogra, widely used in agarbatti), rose (rose agarbatti), and champa (champaka — the most important Indian incense flower) — are the most culturally resonant choices for Hapur's agarbatti manufacturing families. Growing jasmine at home in Hapur connects daily home fragrance to the city's industrial heritage." },
      { question: "Do you deliver plants to Pilkhuwa from Hapur?", answer: "Yes. Pilkhuwa (10 km from Hapur, famous across India for its handloom bedsheet and towel manufacturing — the Pilkhuwa handloom market is one of UP's largest textile wholesale markets) is within our 2–4 hour same-day delivery zone." }
    ]
  },

  "bulandshahr": {
    cityName: "Bulandshahr",
    metaTitle: "Buy Plants Online in Bulandshahr | Glass Industry Western UP Plants | RedHeart",
    metaDescription: "Order plants online in Bulandshahr. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Western UP's glass and sugar city gets plant delivery.",
    h1: "Buy Plants Online in Bulandshahr — Same-Day Plant Delivery in Western UP's Doab",
    metaKeyword: "plants online bulandshahr, buy plants bulandshahr, indoor plants bulandshahr, plant delivery bulandshahr uttar pradesh, marigold bulandshahr, tulsi bulandshahr, online nursery bulandshahr glass sugar NCR doab",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bulandshahr — Western UP's Doab Gateway Gets Doorstep Greens</h2>
<p>Bulandshahr is the administrative headquarters of Bulandshahr district — a significant city in the Ganga-Yamuna doab zone of western Uttar Pradesh, 65 km southeast of Delhi. The city is primarily known for its glass manufacturing industry (the Shikohabad-Bulandshahr glass cluster is one of UP's important industrial zones) and its position in the sugar cane belt (several large sugar mills operate in Bulandshahr district). The Bulandshahr district borders the NCR and has experienced significant real estate and population growth as Delhi's suburban expansion pushes eastward. The Ganga river runs along the district's eastern boundary, and the district contains Narora — the site of India's third nuclear power plant (Narora Atomic Power Station on the Ganga, the river's most sacred stretch in western UP).</p>
<p>Bulandshahr's climate is western UP doab: hot summers (44°C), moderate monsoon (750 mm), and cold-foggy winters (3–22°C). Rose, marigold, tulsi, money plant, and indoor plants are popular. RedHeart delivers across Bulandshahr, Khurja, Sikandrabad, Anupshahr, and Hapur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Bulandshahr</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, UP doab Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Narora Ganga puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, glass factory gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Western UP winter garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, business gifting Bulandshahr</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor NCR-fringe air quality</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bulandshahr</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bulandshahr / Khurja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bulandshahr main, Khurja pottery market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sikandrabad / Anupshahr</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sikandrabad, Narora (Ganga), Anupshahr</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for decorating Khurja's world-famous pottery and blue pottery home decor?", answer: "Tulsi in a Khurja blue pottery planter is the most locally resonant combination for Bulandshahr district — Khurja (25 km from Bulandshahr) produces India's most-exported blue pottery and ceramic tableware. A jasmine or money plant in a beautiful Khurja ceramic pot makes a uniquely local gift that celebrates the pottery capital's craft heritage." },
      { question: "Is same-day plant delivery available in Bulandshahr?", answer: "Yes. Same-day delivery across Bulandshahr including main market and Khurja pottery area. Order before 3 PM. Sikandrabad and Narora area are within 3–5 hours." },
      { question: "What plants grow well in Bulandshahr's Ganga-Yamuna doab soil?", answer: "The doab (Sanskrit: do-ab, two waters — the fertile land between the Ganga and Yamuna rivers) has some of India's most productive agricultural soil. Rose, marigold, tulsi, jasmine, hibiscus, and money plant all grow with exceptional vigour in the deep alluvial loam. The 750 mm monsoon combined with doab soil fertility makes winter planting in October extremely rewarding." },
      { question: "What plant connects to the Narora Ganga pilgrimage near Bulandshahr?", answer: "Tulsi (the most sacred Ganga puja offering plant — Vaikuntha Chaturdashi and Kartik Purnima at Narora's Ganga ghat are celebrated with floating diyas and tulsi offerings) and marigold (for ghat decoration) are the most sacred plants for Narora's Ganga pilgrimage community. Bel (for Shiva, present in every Ganga-side temple) is also essential." },
      { question: "Do you deliver plants to Khurja from Bulandshahr?", answer: "Yes. Khurja (25 km from Bulandshahr, India's pottery capital and the city that supplies 50%+ of India's restaurant crockery and exports ceramic products to 40+ countries — Khurja blue pottery has GI tag recognition) is within our 2–4 hour same-day delivery zone." }
    ]
  },

  "etawah": {
    cityName: "Etawah",
    metaTitle: "Buy Plants Online in Etawah | Chambal Lion Safari UP Plants | RedHeart",
    metaDescription: "Order plants online in Etawah. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Chambal valley's Etawah with lion safari gets plant delivery.",
    h1: "Buy Plants Online in Etawah — Same-Day Plant Delivery on the Chambal River",
    metaKeyword: "plants online etawah, buy plants etawah, indoor plants etawah, plant delivery etawah uttar pradesh, marigold etawah, tulsi etawah, online nursery etawah chambal lion safari yamuna doab",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Etawah — Chambal's Safari City Gets Doorstep Greens</h2>
<p>Etawah is one of Uttar Pradesh's most distinctive cities — positioned at the confluence of the Yamuna and Chambal rivers in the Yamuna-Chambal doab (a landscape of deeply eroded ravines — beehad — that historically sheltered the dacoits of the Chambal Valley). The city's contemporary landmark is the Etawah Safari Park — India's first (and only) lion safari park north of the Vindhyas, established by the Etawah District administration under Chief Minister Mulayam Singh Yadav (who was born at Saifai village, 20 km from Etawah), and which is developing into a major wildlife tourism destination with lions, tigers, and other wildlife. The Chambal river (one of India's cleanest rivers — unapproachable because of its ravine geography that made human settlement impossible) supports the critically endangered Gharial crocodile and the Gangetic river dolphin.</p>
<p>Etawah's climate is Yamuna-Chambal doab: hot summers (45°C), moderate monsoon (750 mm), and cold winters (4–22°C). Marigold, tulsi, money plant, rose, and indoor plants are popular. RedHeart delivers across Etawah, Saifai, Bharthana, Auraiya, and Mainpuri with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Etawah</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Yamuna-Chambal Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Yamuna Chhath</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Etawah safari hotel</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chambal winter, Yamuna doab blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Chambal summer heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, safari park area gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Etawah</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Etawah / Saifai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Etawah main, Safari Park, Saifai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bharthana / Auraiya</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bharthana, Auraiya, Chambal ravines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for Etawah's Lion Safari Park hospitality?", answer: "For Etawah Safari Park's eco-lodge and hospitality zones, native Indian plants are the most ecologically appropriate: babul (Acacia nilotica — the scrub tree of the ravine/jungle ecosystem), dhak (Flame of the Forest — Butea monosperma, with brilliant orange flowers), and arjuna tree (with white flowers, growing near Chambal riverbanks). Indoor spaces benefit from money plant, snake plant, and areca palm — all zero-maintenance, long-lived plants for safari park lodges." },
      { question: "Is same-day plant delivery available in Etawah?", answer: "Yes. Same-day delivery across Etawah including main market, Safari Park area, and Saifai. Order before 3 PM. Bharthana and Auraiya are within 3–5 hours." },
      { question: "What plants grow well near Etawah's Chambal-Yamuna confluence?", answer: "The Chambal-Yamuna doab soil (sandy-loam alluvium) and moderate monsoon (750 mm) suit rose, marigold, tulsi, jasmine, aloe vera, and money plant. The ravine beehad landscape around Etawah makes container gardening (on flat-terraced residential plots) more practical than open-ground planting on eroded areas." },
      { question: "What plant connects to Etawah's Saifai connection to UP politics?", answer: "Saifai (20 km from Etawah) is the home village of Mulayam Singh Yadav (founder of Samajwadi Party) and the site of the extraordinary Saifai Mahotsav cultural festival. Marigold (the most politically universal festival flower in UP), peepul (the village sacred tree of north India), and tulsi (grown in every home in Yadav-dominated Saifai) are the most community-connected plants for the Etawah-Saifai zone." },
      { question: "Do you deliver plants to Auraiya from Etawah?", answer: "Yes. Auraiya (35 km from Etawah, a recently created district with the major Dibiyapur thermal power plant and chemical industry, and the Auraiya Gas Power Station) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "mainpuri": {
    cityName: "Mainpuri",
    metaTitle: "Buy Plants Online in Mainpuri | Tarkashi Etawah Doab UP Plants | RedHeart",
    metaDescription: "Order plants online in Mainpuri. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. UP's Yamuna doab Mainpuri district gets plant delivery.",
    h1: "Buy Plants Online in Mainpuri — Same-Day Plant Delivery in UP's Yamuna Doab",
    metaKeyword: "plants online mainpuri, buy plants mainpuri, indoor plants mainpuri, plant delivery mainpuri uttar pradesh, marigold mainpuri, tulsi mainpuri, online nursery mainpuri tarkashi yamuna doab agra",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Mainpuri — Tarkashi Capital Gets Doorstep Greens</h2>
<p>Mainpuri is the administrative headquarters of Mainpuri district — a city in the Yamuna-Chambal doab of western UP, positioned between Agra (60 km) and Etawah (50 km). The city is best known as the home of Mainpuri Tarkashi — a traditional wire-inlay craft on wood (gold and silver wire inlaid into dark wood to create geometric and floral patterns — a technique similar to Bidriware's metalwork but applied to wood), which has received GI (Geographical Indication) tag recognition as a Mainpuri-specific craft. The city is the political bastion of the Yadav community in western UP and has deep connections to Samajwadi Party's founding political geography. Mainpuri's sugarcane belt and agricultural productivity make it a prosperous district.</p>
<p>Mainpuri's climate is western UP doab: hot summers (44°C), moderate monsoon (700 mm), and cold winters (4–22°C). Marigold, tulsi, money plant, rose, and indoor plants are popular. RedHeart delivers across Mainpuri, Bhongaon, Kuruwa, Kishni, and Karhal with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Mainpuri</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, western UP Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Mainpuri festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, Tarkashi workshop gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Western UP winter garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Mainpuri business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">UP wedding fragrance tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Mainpuri</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Mainpuri / Bhongaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mainpuri main, Tarkashi market, Bhongaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kishni / Karhal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kishni, Karhal, Kuruwa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to Mainpuri's Tarkashi craft heritage?", answer: "A plant displayed in a beautiful Mainpuri Tarkashi wooden box planter (a specially crafted planter made in the tradition of the GI-tagged craft) would be the most locally resonant gift from this UP city. Growing a white jasmine or money plant in a Tarkashi-decorated wooden vessel celebrates Mainpuri's craft tradition in a living, fragrant way." },
      { question: "Is same-day plant delivery available in Mainpuri?", answer: "Yes. Same-day delivery across Mainpuri including main market, Tarkashi craft market, and Bhongaon. Order before 3 PM. Kishni and Karhal are within 3–5 hours." },
      { question: "What plants grow well in Mainpuri's western UP sugarcane belt?", answer: "Mainpuri's sugarcane-rich agricultural belt (doab alluvial soil + 700 mm monsoon) makes outdoor gardening very productive. Rose, marigold, tulsi, jasmine, and money plant thrive. Winter (October–February) is the peak gardening season. The doab's deep alluvial soil — the same that makes Mainpuri's sugarcane so productive — makes home gardening exceptionally rewarding." },
      { question: "What plant is best for Mainpuri's UP winter wedding season?", answer: "For Mainpuri's winter wedding season (October–February — the most popular wedding season across north UP), roses (beautiful winter blooms), marigold (yellow-orange garlands for the baraat/wedding procession), and jasmine (for the bride's hair gajra) are the three essential wedding plants. Growing your own rose and jasmine means fresh, fragrant wedding flowers from the home garden." },
      { question: "Do you deliver plants to Karhal from Mainpuri?", answer: "Yes. Karhal (30 km from Mainpuri, the Samajwadi Party stronghold constituency historically held by members of the Yadav family and one of UP's most politically significant assembly seats) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "farrukhabad": {
    cityName: "Farrukhabad",
    metaTitle: "Buy Plants Online in Farrukhabad | Kannauj Perfume Ganga UP Plants | RedHeart",
    metaDescription: "Order plants online in Farrukhabad. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Ganga's UP city near Kannauj perfume capital gets plants.",
    h1: "Buy Plants Online in Farrukhabad — Same-Day Plant Delivery Near UP's Perfume Capital",
    metaKeyword: "plants online farrukhabad, buy plants farrukhabad, indoor plants farrukhabad, plant delivery farrukhabad uttar pradesh, marigold farrukhabad, tulsi farrukhabad, online nursery farrukhabad kannauj ganga potato starch",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Farrukhabad — Ganga's UP City Gets Doorstep Greens</h2>
<p>Farrukhabad is the administrative headquarters of Farrukhabad district — a city on the Ganga river in UP's western Awadh-Doab transition zone. The city is best known for its position adjacent to Kannauj — the ancient city and the world's perfume capital (Kannauj, 15 km from Farrukhabad, produces the world's largest output of attar/ittar — traditional steam-distilled Indian perfume — including the extraordinary petrichor of the earth-rain-and-khas-grass-based mitti attar). Farrukhabad is also India's largest producer of potato starch (the potato-growing belt around Farrukhabad produces thousands of tonnes of potato starch for the food processing industry) and is known for its brassware and saree weaving crafts.</p>
<p>Farrukhabad's climate is Ganga doab UP: hot summers (44°C), moderate monsoon (750 mm), and cold winters (4–22°C). Marigold, tulsi, money plant, rose, and fragrant plants (jasmine, champa) are popular. RedHeart delivers across Farrukhabad, Kannauj, Fatehgarh, Kamalganj, and Shamsabad with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Farrukhabad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kannauj attar source, fragrance belt</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Ganga-Awadh Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose attar source, UP winter</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Ganga puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, potato starch factory gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, attar industry gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Farrukhabad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Farrukhabad / Fatehgarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Farrukhabad main, Fatehgarh cantonment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kannauj / Shamsabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kannauj (perfume capital), Shamsabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects most deeply to Kannauj's world-famous attar perfume heritage near Farrukhabad?", answer: "Jasmine (mogra/chameli — the source of one of Kannauj's most prized attars), rose (the source of Gulab attar — India's most precious traditional perfume), champa (champaka/magnolia champaca — an important attar source), and khas grass (vetiver — the source of the extraordinary mitti attar of Kannauj, which captures the fragrance of rain on dry earth) are the most fragrance-heritage-connected plants for Farrukhabad-Kannauj. Growing jasmine and roses at home connects directly to Kannauj's 5,000-year-old perfume tradition." },
      { question: "Is same-day plant delivery available in Farrukhabad?", answer: "Yes. Same-day delivery across Farrukhabad including main market and Fatehgarh cantonment. Order before 3 PM. Kannauj and Shamsabad are within 3–5 hours." },
      { question: "What plants grow best in Farrukhabad's fertile Ganga alluvial zone?", answer: "The Ganga-Ramganga doab soil around Farrukhabad (the same soil that grows the famous UP potato for starch) is extraordinarily fertile for all plants. Rose (beautiful winter blooms), jasmine (summer fragrance), tulsi, marigold, money plant, and indoor plants all thrive with minimal care in Farrukhabad's deep alluvial soil." },
      { question: "What plant is most meaningful for Farrukhabad's Ganga riverfront?", answer: "Lotus (sacred to Ganga — the national flower grows in the Ganga's calm backwaters and the Ram Ganga's ox-bow lakes near Farrukhabad) is the most spiritually profound plant for this Ganga-side city. Tulsi (the most sacred Ganga puja offering), marigold (for the Kartik Purnima and Diwali Ganga diyas), and bel (for Shiva's puja at Fatehgarh's Ganga-side temples) complete the sacred plant repertoire." },
      { question: "Do you deliver plants to Kannauj from Farrukhabad?", answer: "Yes. Kannauj (15 km from Farrukhabad, the world's attar/ittar perfume capital — the ancient Kanyakubja where Harshavardhana held his capital and where the perfume industry has continued for millennia, now GI-tagged for Kannauj Attar) is within our 2–4 hour same-day delivery zone." }
    ]
  },

  "kannauj": {
    cityName: "Kannauj",
    metaTitle: "Buy Plants Online in Kannauj | Perfume Attar Capital UP Plants | RedHeart",
    metaDescription: "Order plants online in Kannauj. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. World's perfume capital in UP gets doorstep plant delivery.",
    h1: "Buy Plants Online in Kannauj — Same-Day Plant Delivery in the World's Perfume Capital",
    metaKeyword: "plants online kannauj, buy plants kannauj, indoor plants kannauj, plant delivery kannauj uttar pradesh, marigold kannauj, jasmine kannauj, rose kannauj, online nursery kannauj attar perfume ittar ganga harshavardhana",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kannauj — The World's Perfume Capital Gets Doorstep Greens</h2>
<p>Kannauj is one of India's most ancient and culturally significant cities — the site of ancient Kanyakubja, the seat of Emperor Harshavardhana (CE 606–647) whose reign marked the last great Buddhist imperial age in north India. The city is now globally recognized as the world's attar/ittar (natural perfume) capital — Kannauj produces over 80% of the world's traditional steam-distilled natural perfumes, including the celebrated Gulab (rose) attar, Kewra (screwpine) attar, Chameli (jasmine) attar, Mitti attar (the fragrance of rain on earth — petrichor — extracted from baked clay soil using Hydro-Distillation), and Hina (compound) attar. The GI tag for Kannauj Attar protects this 5,000-year-old craft. The city's deghas (copper stills) have been perfuming the world for millennia.</p>
<p>Kannauj's climate is UP Ganga doab: hot summers (44°C), moderate monsoon (750 mm), and cold winters (4–22°C). Jasmine, rose, tulsi, marigold, and fragrant plants are most popular. RedHeart delivers across Kannauj, Farrukhabad, Tirwa, Rasulabad, and Chhibramau with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Kannauj</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chameli attar source, world's best</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gulab attar raw material, winter</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, fragrant Kannauj homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Ganga attar puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, attar distillery gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, perfume trade gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kannauj</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kannauj / Tirwa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Attar market, Ganga ghat, Tirwa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rasulabad / Chhibramau</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rasulabad, Chhibramau, Kanpur road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Kannauj's world-famous attar perfume tradition?", answer: "Jasmine (mogra/chameli) is the most central attar source in Kannauj — thousands of kg of jasmine flowers are steam-distilled in Kannauj's copper deghas every day during jasmine season (April–November). Rose is the second most important — Kannauj Gulab attar is one of the world's finest natural rose perfumes. Growing jasmine and rose at home in Kannauj means you are growing the raw material of the world's most celebrated natural fragrance tradition." },
      { question: "Is same-day plant delivery available in Kannauj?", answer: "Yes. Same-day delivery across Kannauj including attar market, Ganga ghat, and Tirwa. Order before 3 PM. Rasulabad and Chhibramau are within 3–5 hours." },
      { question: "What fragrant plants grow best in Kannauj for home attar use?", answer: "Jasmine (mogra) thrives in Kannauj's warm monsoon months and produces flowers suitable for simple home steam distillation. Rose (Desi gulab — country rose, not hybrid tea) blooms vigorously from November–March. Kewra (Pandanus odoratissimus / screwpine) can be grown as a potted plant — its unique fragrance is used in Kannauj's kewra attar. Champa (champaka/magnolia) and harsingar (parijat/night jasmine) are also fragrant seasonal flowering plants." },
      { question: "What plant connects to Kannauj's Emperor Harshavardhana and ancient heritage?", answer: "Ashoka tree (Saraca asoca — mentioned in ancient Sanskrit literature and Buddhist texts, grown in Harshavardhana's capital garden), the champaka (mentioned in Kalidasa's poetry of the same era), and peepal (grown in every ancient city's sacred centre — Kannauj's Ganga-side peepal trees are among the oldest continuously venerated trees in north India) connect to Kannauj's 1,400-year-old imperial Buddhist heritage." },
      { question: "Do you deliver plants to Farrukhabad from Kannauj?", answer: "Yes. Farrukhabad (15 km from Kannauj, administratively merged as the Farrukhabad-Kannauj twin district zone and the headquarters of the larger Farrukhabad district) is within our 2–4 hour same-day delivery zone." }
    ]
  },

  "unnao": {
    cityName: "Unnao",
    metaTitle: "Buy Plants Online in Unnao | Ganga Lucknow Leather UP Plants | RedHeart",
    metaDescription: "Order plants online in Unnao. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. UP's leather tanning city near Lucknow gets plant delivery.",
    h1: "Buy Plants Online in Unnao — Same-Day Plant Delivery Near Lucknow on the Ganga",
    metaKeyword: "plants online unnao, buy plants unnao, indoor plants unnao, plant delivery unnao uttar pradesh, marigold unnao, tulsi unnao, online nursery unnao lucknow ganga awadh leather tanning",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Unnao — Ganga's Awadh City Gets Doorstep Greens</h2>
<p>Unnao is the administrative headquarters of Unnao district — a city on the left bank of the Ganga, 20 km north of Lucknow, positioned at the edge of the Awadh region. The city is an important manufacturing hub in Lucknow's industrial hinterland — particularly known for leather tanning (Unnao has one of UP's largest clusters of small-scale leather-tanning units). The proximity to Lucknow (20 km) makes Unnao increasingly part of the Lucknow Metropolitan Area's expanding suburbs. Unnao's Ganga ghats are important pilgrimage sites for the Awadh Hindu community. The city's Mohan Meakin brewery is one of India's oldest alcohol manufacturing companies. Unnao is also the site of the important Shuklaganj across the Ganga (a major commercial market connected to Unnao by bridge).</p>
<p>Unnao's climate is Ganga-Awadh: hot summers (43°C), moderate monsoon (850 mm), and cold winters (4–22°C). Marigold, tulsi, money plant, rose, and indoor plants are popular. RedHeart delivers across Unnao, Purwa, Bangarmau, Shuklaganj, and Lucknow with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Unnao</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Awadh Hindu homes, Ganga puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Unnao Ganga mela</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Unnao market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Awadh winter, Ganga-side garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Awadhi wedding, fragrance tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Lucknow metro gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Unnao</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Unnao / Shuklaganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Unnao main, Ganga ghats, Shuklaganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Purwa / Bangarmau</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Purwa, Bangarmau, Gauriganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for Unnao's Ganga ghats pilgrimage?", answer: "Tulsi and marigold are the two most essential Ganga puja plants at Unnao's Ganga ghats. Bel (bilva — for Shiva devotion at the Ganga-side shivalayas), lotus (the sacred Ganga flower), and banana plants (for Chhath Puja — which Unnao celebrates with great devotion at the Ganga) are the most festival-connected plants for this Awadh-Ganga pilgrimage city." },
      { question: "Is same-day plant delivery available in Unnao?", answer: "Yes. Same-day delivery across Unnao including main market, Ganga ghats, and Shuklaganj. Order before 3 PM. Purwa and Bangarmau are within 3–5 hours." },
      { question: "What plants grow well in Unnao's Ganga alluvial Awadh climate?", answer: "Unnao's fertile Ganga alluvial soil (deep black loam on the left Ganga bank) and 850 mm monsoon make rose, marigold, tulsi, jasmine, money plant, and indoor plants all thrive with minimal care. Winter (October–February) is the best planting season, producing Unnao's most beautiful rose and marigold blooms." },
      { question: "What plant is most appropriate for Unnao's proximity to Lucknow's Awadhi culture?", answer: "Champa (champaka/magnolia — the fragrant tropical flower most associated with Awadhi poetry, music, and wedding culture), jasmine (gajra — the jasmine hairpiece worn by Lucknowi women and celebrated in ghazals), and tuberose (rajnigandha — the most popular Indian bouquet flower in Awadhi weddings) are the most culturally resonant plants for Unnao's Lucknow-adjacent community." },
      { question: "Do you deliver plants to Lucknow from Unnao?", answer: "Yes. Lucknow (20 km from Unnao, the capital of Uttar Pradesh and the cultural centre of the Awadhi tradition — with its Chikankari embroidery, Lucknawi biryani, Nawabi architecture, and the Residency) is within our 2–4 hour same-day delivery zone." }
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
