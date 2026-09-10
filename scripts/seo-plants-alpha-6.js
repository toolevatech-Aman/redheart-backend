// Plants Alphabetical Pass Batch 6 — 8 cities
// Valsad, Surendranagar, Ankleshwar, Morbi, Motihari, Munger, Samastipur, Chapra

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "valsad": {
    cityName: "Valsad",
    metaTitle: "Buy Plants Online in Valsad | South Gujarat Chikoo Belt Plants | RedHeart",
    metaDescription: "Order plants online in Valsad. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. South Gujarat's chikoo belt city gets fresh plant delivery.",
    h1: "Buy Plants Online in Valsad — Same-Day Plant Delivery in South Gujarat's Chikoo Country",
    metaKeyword: "plants online valsad, buy plants valsad, indoor plants valsad, plant delivery valsad gujarat, marigold valsad, tulsi valsad, online nursery valsad south gujarat chikoo sapota daman",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Valsad — South Gujarat's Chikoo Capital Gets Doorstep Greens</h2>
<p>Valsad is one of south Gujarat's most important commercial and agricultural cities — the headquarters of Valsad district, which forms part of Gujarat's prosperous coastal-agricultural southern belt. Valsad is best known nationally as the heartland of India's chikoo (sapodilla) cultivation — the Valsad-Navsari-Surat belt produces more than 90% of India's chikoo crop, and Valsad's chikoo is considered the sweetest in India. The city also lies in the ambi (mango) belt and is a significant producer of chickoo, mango, and coconut. The proximity to Daman (the Union Territory, 20 km from Valsad) gives the city access to both Gujarat's conservative culture and the more relaxed coastal culture of Daman. Valsad lies on the Mumbai-Ahmedabad railway and highway corridor.</p>
<p>Valsad's climate is coastal south Gujarat: hot-humid summers (36°C), good monsoon (1,500 mm enhanced by Arabian Sea proximity), and pleasant winters (14–30°C). All plants thrive. Marigold, tulsi, money plant, jasmine, and indoor plants are popular. RedHeart delivers across Valsad, Vapi, Navsari, Bilimora, and Pardi with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Valsad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Gujarati Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Uttarayan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, Vapi industrial gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">South Gujarat humidity, wedding</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gujarat winter, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Vapi GIDC factory gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Valsad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Valsad / Bilimora</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Valsad main, Bilimora, Udvada, Pardi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Vapi / Daman</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vapi (GIDC), Daman UT</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to Valsad's chikoo (sapodilla) farming heritage?", answer: "The chikoo (Manilkara zapota / sapodilla) plant itself is the most authentic and locally resonant plant for Valsad — growing a potted chikoo sapling connects to the region's most famous agricultural identity. Valsad's farmers introduced chikoo cultivation to India in the early 1900s (after the Sapodilla was brought from Mexico via the Philippines). Mango (amba), coconut, and curry leaf (kari patta) also connect to south Gujarat's agricultural heritage." },
      { question: "Is same-day plant delivery available in Valsad?", answer: "Yes. Same-day delivery across Valsad including Bilimora, Udvada, and Pardi area. Order before 3 PM. Vapi and Daman are within 3–5 hours." },
      { question: "What plants grow well in Valsad's coastal south Gujarat climate?", answer: "Valsad's 1,500 mm monsoon (excellent for plant growth), pleasant winters, and the Arabian Sea humidity make jasmine, hibiscus, rose, marigold, tulsi, money plant, and indoor tropical plants all thrive. Winter (November–February) is the peak outdoor garden season. Monsoon plants grow rapidly without irrigation." },
      { question: "What plant is best for Vapi's GIDC industrial corporate gifting?", answer: "For Vapi's large GIDC (Gujarat Industrial Development Corporation) industrial estate — one of Gujarat's largest, with chemical, pharmaceutical, and textile companies — lucky bamboo in sleek glass vases, money plant in ceramic planters, and snake plants for indoor air purification are the most professional corporate Diwali gifts. Marigold at factory gates for Diwali and Navratri is the traditional choice." },
      { question: "Do you deliver plants to Udvada from Valsad?", answer: "Yes. Udvada (15 km from Valsad, the home of the Iranshah fire — the holiest Zoroastrian Atash Behram fire temple, burning continuously since CE 721 and one of the most sacred pilgrimage sites for the global Parsi/Zoroastrian community) is within our 2–4 hour same-day delivery zone." }
    ]
  },

  "surendranagar": {
    cityName: "Surendranagar",
    metaTitle: "Buy Plants Online in Surendranagar | Saurashtra Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Surendranagar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Saurashtra's cotton city in Gujarat gets plant delivery.",
    h1: "Buy Plants Online in Surendranagar — Same-Day Plant Delivery in Saurashtra's Cotton Hub",
    metaKeyword: "plants online surendranagar, buy plants surendranagar, indoor plants surendranagar, plant delivery surendranagar gujarat, marigold surendranagar, tulsi surendranagar, online nursery surendranagar saurashtra cotton rann kutch",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Surendranagar — Saurashtra's Commercial Hub Gets Doorstep Greens</h2>
<p>Surendranagar (formerly Wadhwan/Dhrangadhra area) is one of Saurashtra's most important commercial cities — the administrative headquarters of Surendranagar district in Gujarat's Saurashtra peninsula, positioned at the junction of the Saurashtra, north Gujarat, and Rann of Kutch regions. The city is a major cotton trading hub — the Surendranagar cotton market handles a significant portion of Gujarat's cotton output — and the area is known for traditional Tanchoi silk sarees and bandhani (tie-dye) textile crafts. The Rann of Kutch (the extraordinary salt desert and flamingo habitat, one of India's most distinctive landscapes) is accessible from Surendranagar, and the famous Rann Utsav is within the travel circuit of this region.</p>
<p>Surendranagar's climate is dry Saurashtra: hot summers (40°C), moderate monsoon (500 mm), and cool winters (10–28°C). Drought-tolerant plants are essential. Tulsi, marigold, aloe vera, money plant, and cactus are most popular. RedHeart delivers across Surendranagar, Wadhwan, Dhrangadhra, Halvad, Limbdi, and Morbi with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Surendranagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Saurashtra Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Uttarayan (Jan)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Saurashtra dry climate, low water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, cotton trader office gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles dry indoor AC conditions</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Surendranagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Surendranagar / Wadhwan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Surendranagar main, Wadhwan, Limbdi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dhrangadhra / Halvad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dhrangadhra, Halvad, Morbi road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plants survive Surendranagar's dry Saurashtra summer?", answer: "Aloe vera, tulsi (daily watering in summer), snake plant (indoor AC), money plant in water vase, cactus, and lucky bamboo in water vase are the most drought-adapted choices for Surendranagar's 40°C summers and 500 mm low monsoon. October–February is the ideal outdoor planting season." },
      { question: "Is same-day plant delivery available in Surendranagar?", answer: "Yes. Same-day delivery across Surendranagar including main city, Wadhwan, and Limbdi area. Order before 3 PM. Dhrangadhra and Halvad are within 3–5 hours." },
      { question: "What plant is most meaningful for Surendranagar's cotton trading community?", answer: "The cotton plant (Gossypium hirsutum — a small ornamental shrub with beautiful cream-yellow flowers and the iconic white cotton bolls) is the most identity-connected plant for Surendranagar's cotton traders. A potted cotton plant in the shop or trading office symbolises the city's prosperity. Tulsi and marigold at the business premises on Diwali are the traditional Gujarat trading community ritual." },
      { question: "What plant connects to the Rann of Kutch flamingo landscape near Surendranagar?", answer: "Flamingos breed at the Rann of Kutch's Little Rann (Wild Ass Sanctuary, 80 km from Surendranagar) and Great Rann (Kutch, 120 km). Locally, growing coastal salt-tolerant plants like succulent aloe vera and mesembryanthemum (ice plant) connects to the Rann's unique halophytic ecosystem. Babul (Acacia nilotica) and prosopis trees are the native vegetation of the Rann borderlands." },
      { question: "Do you deliver plants to Dhrangadhra from Surendranagar?", answer: "Yes. Dhrangadhra (50 km from Surendranagar, the site of Dhrangadhra Chemical Works, one of India's oldest soda ash manufacturers, and the nearby Blackbuck National Park at Velavadar) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "ankleshwar": {
    cityName: "Ankleshwar",
    metaTitle: "Buy Plants Online in Ankleshwar | GIDC Gujarat Chemical City Plants | RedHeart",
    metaDescription: "Order plants online in Ankleshwar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. South Gujarat's industrial chemical city gets plant delivery.",
    h1: "Buy Plants Online in Ankleshwar — Same-Day Plant Delivery in Gujarat's Chemical Hub",
    metaKeyword: "plants online ankleshwar, buy plants ankleshwar, indoor plants ankleshwar, plant delivery ankleshwar gujarat, marigold ankleshwar, tulsi ankleshwar, online nursery ankleshwar GIDC bharuch narmada chemical",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ankleshwar — Gujarat's Chemical Industrial Hub Gets Doorstep Greens</h2>
<p>Ankleshwar is one of India's most important chemical and pharmaceutical manufacturing cities — the Ankleshwar GIDC industrial estate (part of the Bharuch district PCPIR — Petroleum, Chemicals, and Petrochemicals Investment Region) is home to hundreds of active pharmaceutical ingredient (API), chemical, and dye manufacturing companies. The city is often called Gujarat's chemical capital, alongside Vapi and Dahej. The Narmada river, which meets the Gulf of Khambhat near Bharuch (25 km from Ankleshwar), is the defining geographical feature of the region. ONGC's Ankleshwar oil field — discovered in 1960 — was among the earliest oil discoveries in independent India. The Ankleshwar-Dahej-Bharuch chemical belt has generated significant industrial wealth for Gujarat.</p>
<p>Ankleshwar's climate is South Gujarat: hot-humid summers (37°C), good monsoon (800 mm), and pleasant winters (14–30°C). Tulsi, marigold, money plant, and indoor air-purifying plants are popular. RedHeart delivers across Ankleshwar, Bharuch, Dahej, Jambusar, and Amod with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Ankleshwar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Gujarati Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifying, chemical industry offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, GIDC factory office gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, factory inaugurations</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifying, chemical-adjacent living</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹449</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, corporate industrial gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ankleshwar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ankleshwar / Bharuch</td><td style="border:1px solid #d1d5db;padding:8px 12px;">GIDC, Ankleshwar town, Bharuch (Golden Bridge)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dahej / Jambusar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dahej port/GIDC, Jambusar, Amod</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What air-purifying plants are best for Ankleshwar's industrial environment?", answer: "For homes near Ankleshwar's GIDC chemical estate, air-purifying plants are a health-conscious choice: snake plant (removes benzene, formaldehyde), peace lily (removes benzene, trichloroethylene), spider plant (CO and xylene), money plant (formaldehyde), and areca palm (natural humidifier). These NASA Clean Air Study-validated plants are the most practical choice for GIDC-adjacent residential areas." },
      { question: "Is same-day plant delivery available in Ankleshwar?", answer: "Yes. Same-day delivery across Ankleshwar including GIDC industrial estate and Ankleshwar town. Order before 3 PM. Dahej and Jambusar are within 3–5 hours." },
      { question: "What plants grow well near Ankleshwar's Narmada riverbank?", answer: "The Narmada river's floodplain near Bharuch (25 km from Ankleshwar) supports lush vegetation — growing jasmine, marigold, hibiscus, and tulsi in the fertile alluvial soil near the river produces exceptionally healthy plants. Money plant and ferns grow vigorously in the monsoon-humid south Gujarat environment." },
      { question: "What plant is best for Ankleshwar's pharma and chemical company office Diwali gifting?", answer: "Lucky bamboo in elegant glass vases is the most universally appropriate corporate Diwali gift for Ankleshwar's multi-company GIDC community. Money plant (symbolizing business prosperity) and snake plant (practical air purifier for office spaces) are excellent alternatives. These plants are low-maintenance, long-lasting, and suitable for both Hindu and Muslim employees in Ankleshwar's cosmopolitan industrial workforce." },
      { question: "Do you deliver plants to Dahej from Ankleshwar?", answer: "Yes. Dahej (35 km from Ankleshwar, home of Dahej Petrochemical Special Economic Zone and Dahej port — one of Gujarat's fastest-growing petrochemical infrastructure projects with multiple ONGC, GAIL, and BPCL facilities) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "morbi": {
    cityName: "Morbi",
    metaTitle: "Buy Plants Online in Morbi | Ceramic Tile Capital Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Morbi. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Gujarat's ceramic tile capital gets doorstep plant delivery.",
    h1: "Buy Plants Online in Morbi — Same-Day Plant Delivery in Gujarat's Ceramic Tile Capital",
    metaKeyword: "plants online morbi, buy plants morbi, indoor plants morbi, plant delivery morbi gujarat, marigold morbi, tulsi morbi, online nursery morbi ceramic tile clock saurashtra",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Morbi — Gujarat's Tile Capital Gets Doorstep Greens</h2>
<p>Morbi is one of India's most remarkable industrial cities — the undisputed global capital of ceramic tile manufacturing. Morbi accounts for approximately 70% of India's ceramic tile production and is the world's second-largest ceramic tile cluster (after China's Guangdong province), with over 800 manufacturing units that export to 160+ countries. The city's other famous product is wall clocks — Morbi is India's clock manufacturing capital and supplies 80% of India's wall clock market. Morbi's transformation from a small Saurashtra town to a global ceramic export powerhouse is one of independent India's most extraordinary industrial success stories — concentrated in a single city. The Macchu river runs through Morbi (the site of the tragic 1979 Morbi dam disaster and the 2022 Morbi suspension bridge collapse).</p>
<p>Morbi's climate is dry Saurashtra: hot summers (42°C), moderate monsoon (500 mm), and cool winters (10–28°C). Drought-tolerant plants are essential. Tulsi, marigold, money plant, aloe vera, and indoor plants are most popular. RedHeart delivers across Morbi, Wankaner, Halvad, Malia, and Tankara with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Morbi</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Saurashtra Gujarati home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Uttarayan ceramic-market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ceramic factory office, showroom gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles dry Morbi climate and kiln heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, ceramic tile industry gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor air quality near kiln industry</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Morbi</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Morbi / Wankaner</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Morbi main, Ceramic Zone, Wankaner</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Halvad / Tankara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Halvad, Malia, Tankara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most fitting for Morbi's ceramic tile and clock industry Diwali gifting?", answer: "A lucky bamboo arrangement in a beautiful ceramic planter (made in Morbi — combining the city's two industries) is the most uniquely appropriate Diwali gift for Morbi's business community. Money plant in a ceramic pot with a handcrafted planter is an even more locally resonant combination. Both plants symbolize prosperity, appropriate for Diwali gifting across Morbi's 800+ tile manufacturer community." },
      { question: "Is same-day plant delivery available in Morbi?", answer: "Yes. Same-day delivery across Morbi including the Ceramic Zone, main town, and Wankaner area. Order before 3 PM. Halvad and Tankara are within 3–5 hours." },
      { question: "What plants survive the extreme industrial heat in Morbi near ceramic kilns?", answer: "Aloe vera (tolerates 45°C and full sun), cactus (zero irrigation needed), snake plant (thrives in hot dry conditions), and tulsi (daily watering in summer) are the most resilient plants for Morbi's combination of hot summers and industrial kiln ambient heat. Indoor air-conditioned environments support money plant, lucky bamboo, and peace lily very well." },
      { question: "What plant connects to Morbi's resilience after the 1979 flood and 2022 bridge tragedies?", answer: "The banyan tree (Ficus benghalensis — known for its extraordinary resilience, ability to re-root, and virtually unlimited lifespan) is the most meaningful healing plant for a community that has rebuilt itself twice. Growing a banyan sapling or a peepal (both sacred to Shiva and symbolizing resilience in Hindu tradition) is a profound tribute to Morbi's spirit of reconstruction." },
      { question: "Do you deliver plants to Wankaner from Morbi?", answer: "Yes. Wankaner (25 km from Morbi, a former princely state town with the impressive Wankaner Palace and the Ranjit Vilas Palace — now a heritage hotel — and also part of the ceramic tile cluster) is within our 2–4 hour same-day delivery zone." }
    ]
  },

  "motihari": {
    cityName: "Motihari",
    metaTitle: "Buy Plants Online in Motihari | Champaran Bihar Plants | RedHeart",
    metaDescription: "Order plants online in Motihari. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Champaran's Satyagraha city in Bihar gets plant delivery.",
    h1: "Buy Plants Online in Motihari — Same-Day Plant Delivery in Champaran's Satyagraha City",
    metaKeyword: "plants online motihari, buy plants motihari, indoor plants motihari, plant delivery motihari bihar, marigold motihari, tulsi motihari, online nursery motihari champaran gandhi satyagraha east west",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Motihari — Champaran's Historic City Gets Doorstep Greens</h2>
<p>Motihari is the administrative headquarters of East Champaran district — a deeply historical city in Bihar. Motihari is most famous as the birthplace of George Orwell (Eric Arthur Blair, 1903 — the author of Animal Farm and 1984 was born at the Champaran cantonment where his father worked for the Indian Revenue Service). More centrally to Indian history, Motihari is the site of Gandhi's first Satyagraha (1917 — the Champaran Indigo Satyagraha, where Gandhi used non-violent civil disobedience for the first time to help indigo farmers against British planters; this landmark event directly inspired the entire Indian independence movement). The Champaran Satyagraha Centenary is celebrated here with national significance. Motihari's Moti Jheel (Pearl Lake) is the city's central landmark.</p>
<p>Motihari's climate is north Bihar Terai: hot summers (42°C), heavy monsoon (1,300 mm), and cold winters (5–20°C). All plants thrive. Marigold, tulsi, money plant, rose, and indoor plants are popular. RedHeart delivers across Motihari, Bettiah, Raxaul (Nepal border), Kesaria, and Sheohar with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Motihari</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Bihar Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Diwali, Durga Puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Moti Jheel area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Champaran winter, excellent blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Wedding, Bihar fragrance tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Motihari business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Motihari</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Motihari City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moti Jheel, Satyagraha Memorial, Station Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bettiah / Raxaul</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bettiah (West Champaran), Raxaul (Nepal border)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most meaningful for Motihari's Champaran Satyagraha heritage?", answer: "Neel (indigo plant — Indigofera tinctoria) is the most historically profound plant for Motihari — it was the forced indigo cultivation under British planters that drove Gandhi's Champaran Satyagraha in 1917. Growing a potted indigo plant in Motihari is a direct botanical connection to the event that gave birth to the Gandhian independence movement. Tulsi — which Gandhi wrote about in Hind Swaraj — is the most spiritually connected choice." },
      { question: "Is same-day plant delivery available in Motihari?", answer: "Yes. Same-day delivery across Motihari including Moti Jheel, Satyagraha Memorial, and Station Road. Order before 3 PM. Bettiah and Raxaul are within 3–5 hours." },
      { question: "What plants grow well in Motihari's north Bihar Terai climate?", answer: "Motihari's 1,300 mm monsoon, Terai soil fertility, and 5°C winter nights make rose (October–March), marigold, tulsi, jasmine, banana, and indoor plants all thrive. Chhath Puja (October–November) is the most important plant planting season — marigold and banana plants are essential for Chhath Puja ritual." },
      { question: "What is the best plant to grow for Chhath Puja in Motihari?", answer: "Banana (kela) plant is the most essential Chhath Puja plant in Bihar — banana leaves form the main offering stage (supli and dala), and banana plants at the puja ghats are a mandatory ritual requirement. Marigold garlands (genda phool) and sugarcane stalks frame the Chhath Puja thekua offerings. Growing banana, marigold, and sugarcane connects to Bihar's most sacred festival." },
      { question: "Do you deliver plants to Raxaul from Motihari?", answer: "Yes. Raxaul (50 km from Motihari, India's primary land border crossing with Nepal — the Raxaul-Birganj crossing is the Nepal-India border's most important trade gateway) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "munger": {
    cityName: "Munger",
    metaTitle: "Buy Plants Online in Munger | Yoga University Bihar Plants | RedHeart",
    metaDescription: "Order plants online in Munger. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Bihar's Ganga yoga city gets doorstep plant delivery.",
    h1: "Buy Plants Online in Munger — Same-Day Plant Delivery on the Ganga in Bihar's Yoga Capital",
    metaKeyword: "plants online munger, buy plants munger, indoor plants munger, plant delivery munger bihar, marigold munger, tulsi munger, online nursery munger bihar yoga swami satyananda ganga khagaria",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Munger — Bihar's Yoga City on the Ganga Gets Doorstep Greens</h2>
<p>Munger is one of Bihar's most ancient and historically significant cities on the Ganga river — a city that served as an important Mughal provincial capital (Mir Qasim made it his capital in the 18th century), a significant British garrison town, and home to the famous Munger Gun Factory (one of India's oldest firearms manufacturing establishments, operational since 1915). But Munger's contemporary global identity is defined by the Bihar School of Yoga — founded by Swami Satyananda Saraswati in 1963, it is one of the world's most respected yoga research and teaching institutions, attracting students from every continent to the Ganga-side ashram. The Bihar School of Yoga's publications (especially the "Complete Illustrated Book of Yoga") have been translated into 27 languages. Munger is also the site of the Kashyap hill, where the Ganga makes a dramatic turn.</p>
<p>Munger's climate is Bihar Ganga belt: hot summers (42°C), heavy monsoon (1,100 mm), and cold winters (6–22°C). All plants thrive. Tulsi, marigold, lotus, money plant, and indoor plants are popular. RedHeart delivers across Munger, Jamalpur, Khagaria, Begusarai, and Lakhisarai with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Munger</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yoga ashram, sacred Bihar homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Diwali, ashram puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, yoga centre Munger</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yoga studio, Bihar School of Yoga</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹449</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganga ghats winter, Munger garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Munger Ganga belt gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Munger</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Munger / Jamalpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bihar School of Yoga, Ganga ghat, Jamalpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Khagaria / Begusarai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Khagaria, Begusarai, Lakhisarai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for the Bihar School of Yoga in Munger?", answer: "Tulsi (sacred basil) is the most universally revered plant in the yoga and Vedic tradition — the Bihar School of Yoga's curriculum includes pranayama practices that reference tulsi's sattvic (pure) properties. Peace lily (for meditation spaces) and sandalwood (chandan for puja and meditation in the Satyananda tradition) are excellent yoga studio plants. Growing a tulsi garden at the Bihar School of Yoga campus or Ganga-side ashram is a living embodiment of yogic practice." },
      { question: "Is same-day plant delivery available in Munger?", answer: "Yes. Same-day delivery across Munger including Bihar School of Yoga, Ganga ghat, and Jamalpur. Order before 3 PM. Khagaria and Begusarai are within 3–5 hours." },
      { question: "What plants grow well on Munger's Ganga riverbank?", answer: "Munger's Ganga-side micro-climate (the river's moisture creates a slightly cooler, more humid microenvironment than inland Bihar) is excellent for lotus (in Ganga's calm backwaters), marigold, tulsi, jasmine, rose, and banana. The Kashyap hill's riverbank gardens are historically some of Bihar's most beautiful natural green spaces." },
      { question: "What plant connects to Munger's yoga tradition as a daily practice?", answer: "Brahmi (Bacopa monnieri — the memory and intelligence herb used in Ayurveda and mentioned in Swami Satyananda's teachings on yogic diet) is the most intellectually connected medicinal plant for Munger's yoga practitioners. Ashwagandha (for stress and stamina — the adaptogenic herb most recommended in yoga's Ayurvedic tradition) and tulsi are the three most meaningful healing plants for Munger's global yoga community." },
      { question: "Do you deliver plants to Begusarai from Munger?", answer: "Yes. Begusarai (35 km from Munger, the industrial city known as Bihar's Petrochemical hub with the BPCL Barauni Refinery — one of India's earliest oil refineries — and the Begusarai Marxist political tradition) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "samastipur": {
    cityName: "Samastipur",
    metaTitle: "Buy Plants Online in Samastipur | Bihar Railway Ganges Plains Plants | RedHeart",
    metaDescription: "Order plants online in Samastipur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. North Bihar's major railway town gets plant delivery.",
    h1: "Buy Plants Online in Samastipur — Same-Day Plant Delivery in North Bihar's Railway Hub",
    metaKeyword: "plants online samastipur, buy plants samastipur, indoor plants samastipur, plant delivery samastipur bihar, marigold samastipur, tulsi samastipur, online nursery samastipur north bihar railway darbhanga muzaffarpur",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Samastipur — North Bihar's Railway Hub Gets Doorstep Greens</h2>
<p>Samastipur is one of north Bihar's most important railway junction cities — a major divisional headquarters of the East Central Railway, the city's economy and identity have long been tied to the Indian Railways (Samastipur is a division headquarters and one of the busiest rail junctions in Bihar, connecting Darbhanga, Muzaffarpur, Katihar, Barauni, and Patna on multiple broad gauge routes). The city lies in the fertile Gangetic plains of north Bihar, surrounded by the Gandak, Budhi Gandak, and Bagmati rivers — a zone of extraordinary agricultural productivity (paddy, maize, wheat) but also vulnerability to annual floods from the Himalayan rivers. Samastipur is at the heart of Mithila — the cultural zone of north Bihar and southern Nepal that gave birth to Janakpur (King Janak's capital, birthplace of Sita) and Mithila painting.</p>
<p>Samastipur's climate is north Bihar: hot summers (42°C), heavy monsoon (1,200 mm), and cold winters (5–20°C). All plants thrive. Marigold, tulsi, money plant, banana, and indoor plants are popular. RedHeart delivers across Samastipur, Darbhanga, Rosera, Kalyanpur, and Ujiarpur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Samastipur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Mithila/Bihar Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Diwali, Durga Puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, railway quarter, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mithila winter, excellent Bihar blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">North Bihar fragrance, wedding</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, railway division gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Samastipur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Samastipur / Rosera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Railway Station, Chowk, Rosera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Darbhanga / Ujiarpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Darbhanga, Kalyanpur, Ujiarpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to Samastipur's Mithila cultural heritage?", answer: "The lotus (padma) is the most sacred plant for Mithila culture — Maa Lakshmi (Goddess of Prosperity, widely worshipped in Mithila) is depicted seated on a lotus, and lotus motifs dominate Madhubani painting (Mithila art) traditions. Tulsi — planted in the sacred aangan (courtyard) of every Mithila home and the central object of the Vivah Panchami ceremony — is the most essential daily plant. Kadamba (the tree under which Radha-Krishna meet in the monsoon) is deeply embedded in Mithila devotional verse." },
      { question: "Is same-day plant delivery available in Samastipur?", answer: "Yes. Same-day delivery across Samastipur including Railway Station area, Chowk, and Rosera. Order before 3 PM. Darbhanga and Ujiarpur are within 3–5 hours." },
      { question: "What plants grow best in Samastipur's north Bihar flood-plain climate?", answer: "Samastipur's 1,200 mm monsoon and rich Gangetic alluvial soil make virtually all plants grow vigorously. Rose (October–March), marigold, tulsi, jasmine, banana, and indoor money plant thrive. Marigold and banana are essential for Chhath Puja (Bihar's most important festival — celebrated with extraordinary devotion across north Bihar)." },
      { question: "What plant is best for railway colony housing in Samastipur?", answer: "For Samastipur's large East Central Railway divisional staff colony (railway quarters are green-intensive garden communities), rose bushes for the season, marigold borders, money plant for indoor rooms, and jasmine creepers on boundary walls are the most popular colony-appropriate choices. Lucky bamboo requires zero garden space — ideal for smaller railway quarter apartments." },
      { question: "Do you deliver plants to Darbhanga from Samastipur?", answer: "Yes. Darbhanga (25 km from Samastipur, the cultural capital of Mithila, the seat of the Darbhanga Raj — one of Bihar's largest feudal estates — and the home of Madhubani/Mithila painting, Dhrupad classical music, and the Maithili language) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "chapra": {
    cityName: "Chapra",
    metaTitle: "Buy Plants Online in Chapra | Saran District Bihar Saryu Plants | RedHeart",
    metaDescription: "Order plants online in Chapra. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Bihar's Chapra (Chhapra) on the Ganga-Ghaghra gets plant delivery.",
    h1: "Buy Plants Online in Chapra — Same-Day Plant Delivery on Bihar's Gandak-Ghaghra Confluence",
    metaKeyword: "plants online chapra, buy plants chapra, indoor plants chapra, plant delivery chapra bihar, marigold chapra, tulsi chapra, online nursery chapra chhapra saran district ghaghra gandak",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Chapra — Bihar's Saran District Capital Gets Doorstep Greens</h2>
<p>Chapra (officially Chhapra) is the administrative headquarters of Saran district — one of Bihar's most populous districts, positioned at the historic confluence of the Ganga, Ghaghra (Saryu), and Gandak rivers. This tri-river confluence zone (the Triveni Sangam at Revelganj near Chapra) is one of Bihar's most significant sacred and pilgrimage sites. Chapra is also known as the birthplace of Dr. Rajendra Prasad — the first President of India (born at Ziradei, Siwan, near Chapra), making the Saran belt a zone of deep political heritage in the Indian Republic's founding history. The Chapra-Sonepur area is famous for the Sonepur Mela (Harihar Kshetra Mela) — Asia's largest cattle fair, held annually at the Gandak-Ganga confluence on Kartik Purnima, drawing over a million visitors.</p>
<p>Chapra's climate is north Bihar Ganga-confluence zone: hot summers (42°C), heavy monsoon (1,200 mm), and cold winters (5–20°C). All plants thrive. Marigold, tulsi, banana, money plant, and indoor plants are popular. RedHeart delivers across Chapra, Sonepur, Hajipur, Revelganj, and Siwan with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Chapra</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Saran/Bihar Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Diwali, Kartik Purnima Sonepur Mela</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Chapra trade market</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Saryu winter, Bihar excellent blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">North Bihar wedding tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Sonepur Mela gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Chapra</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Chapra / Sonepur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chapra main, Revelganj, Sonepur Mela ground</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hajipur / Siwan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hajipur, Siwan (Dr. Rajendra Prasad's district)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for the Sonepur Mela (Asia's largest cattle fair) near Chapra?", answer: "Banana plant (kela) — used for both Chhath Puja ritual and for the Kartik Purnima festive markets at Sonepur Mela — is the most organically connected plant to Chapra's festive traditions. Marigold for Kartik Purnima ghat decoration (both Chhath Puja and Kartik Purnima fall in this season, making October–November Chapra's most flower-intensive festival period). Tulsi is the sacred plant worshipped at the Triveni Sangam at Revelganj." },
      { question: "Is same-day plant delivery available in Chapra?", answer: "Yes. Same-day delivery across Chapra including main market, Revelganj, and Sonepur Mela ground area. Order before 3 PM. Hajipur and Siwan are within 3–5 hours." },
      { question: "What plants grow well near Chapra's Ganga-Ghaghra confluence?", answer: "Chapra's extraordinary tri-river confluence environment (Ganga + Ghaghra + Gandak within 20 km) means rich alluvial soil and ample monsoon. Rose, marigold, tulsi, jasmine, banana, money plant, and indoor plants all grow vigorously. The seasonal flooding risk means container gardening (raised beds, pots on elevated platforms) is the most practical approach for Chapra's riverside areas." },
      { question: "What plant connects to Dr. Rajendra Prasad's legacy from the Siwan-Chapra region?", answer: "Neem (India's most culturally democratic tree — used by the poorest village household and the wealthiest family alike, shade-giving and healing) is the most Gandhian-nationalist plant associated with Dr. Rajendra Prasad's rural Bihar background. Dr. Prasad was a champion of rural India's self-sufficiency — growing a neem, tulsi, or papaya plant at home embodies the simple, productive life he celebrated." },
      { question: "Do you deliver plants to Sonepur from Chapra?", answer: "Yes. Sonepur (10 km from Chapra, the site of Harihar Kshetra Sonepur Mela — Asia's largest animal fair, held annually at the sacred Gandak-Ganga confluence on Kartik Purnima, attracting over one million visitors across a month-long festival) is within our 2–4 hour same-day delivery zone." }
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
