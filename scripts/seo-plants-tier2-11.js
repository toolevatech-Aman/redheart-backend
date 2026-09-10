// Plants Tier 2 Batch 11 — 8 cities
// Korba, Hassan, Hisar, Ajmer, Alwar, Kottayam, Kozhikode, Kannur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "korba": {
    cityName: "Korba",
    metaTitle: "Buy Plants Online in Korba | Power City Chhattisgarh Plants | RedHeart",
    metaDescription: "Order plants online in Korba. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Chhattisgarh's power capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Korba — Same-Day Plant Delivery in Chhattisgarh's Power City",
    metaKeyword: "plants online korba, buy plants korba, indoor plants korba, plant delivery korba chhattisgarh, money plant korba, tulsi korba, online nursery korba NTPC CSEB",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Korba — Chhattisgarh's Power Capital Gets Doorstep Greens</h2>

<p>Korba is the energy capital of Chhattisgarh — home to NTPC Korba (one of India's largest coal-based power stations, with 2,600 MW capacity), the Chhattisgarh State Electricity Board, multiple thermal power plants, and the Korba East coalfields. The city is sometimes called the "Energy Capital of India" given its extraordinary concentration of power generation infrastructure. Korba's population is diverse and heavily urbanised — NTPC, SECL (South Eastern Coalfields Ltd), BALCO (Bharat Aluminium Company), and numerous private power companies have brought workers from across India, creating one of Chhattisgarh's most cosmopolitan industrial cities. The Hasdeo river and Minimaata (Deendayal Upadhyay) reservoir provide water to the city and the surrounding region.</p>

<p>Korba's climate is Chhattisgarh monsoon: very hot summers (44°C), excellent monsoon (1,300 mm), and pleasant winters (12–22°C). The outstanding rainfall creates good plant conditions. Snake plant, tulsi, money plant, marigold, and indoor plants are popular for Korba's diverse industrial workforce. RedHeart delivers across Korba, Champa, Baloda Bazar, and Bilaspur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Korba's Industrial Worker Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Korba / Industrial Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, power plant offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Chhattisgarhi Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, NTPC township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Chhattisgarhi festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, BALCO, NTPC offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, power company officers</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, compound garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles summer heat, practical home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">NTPC Township Green Culture and Korba's Botanical Resilience</h3>

<p>NTPC Korba's township — a self-contained company town with residential colonies, schools, hospitals, markets, and parks — maintains a well-groomed garden culture that is a legacy of the public sector township planning tradition. NTPC's residential colonies have designated garden spaces, and the company's annual gardening competitions among employee families have historically encouraged significant horticultural investment in the township's green spaces. Snake plant and peace lily are valued in Korba's industrial office context as low-maintenance air-purifying plants that improve the indoor environment in coal-heavy surroundings. BALCO's (now Vedanta) aluminium smelter township at Korba also maintains garden areas that have created a strong secondary market for indoor and outdoor plants.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Korba</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">NTPC Township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NTPC Korba colony, BALCO township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Korba City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Urga, Transport Nagar, City Kotwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Champa / Janjgir</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Champa, Janjgir towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bilaspur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bilaspur judicial capital</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for an NTPC Korba township apartment?", answer: "Snake plant (top air purifier, handles the coal-area environment), money plant in water (low maintenance, AC room), peace lily (elegant, air-purifying), and lucky bamboo in a glass vase are the best choices for NTPC Korba township homes. Tulsi planted in a large terracotta maadam is sacred and grows well in Korba's monsoon climate. For balcony gardens, marigold and hibiscus grow vigorously in Chhattisgarh's excellent 1,300 mm annual rainfall." },
      { question: "Is same-day plant delivery available in Korba?", answer: "Yes. Same-day delivery is available across Korba including NTPC township, BALCO colony, Urga, and Transport Nagar. Order before 3 PM. We also deliver to Champa and Janjgir within 3–5 hours." },
      { question: "What plant is the best Diwali gift for a BALCO or NTPC officer in Korba?", answer: "Peace lily in a ceramic planter is the most appropriate gift for a senior NTPC or BALCO officer — it's elegant, low-maintenance, and works perfectly in AC officer bungalow environments. Lucky bamboo in a decorative glass vase is the standard Diwali inter-colleague corporate gift. Anthurium in a terracotta pot is a premium Diwali choice for significant gifting occasions." },
      { question: "What plants work best for the SECL coal company residential areas in Korba?", answer: "SECL (South Eastern Coalfields Ltd) residential townships share the NTPC township garden culture — well-maintained colony gardens with seasonal plants are a PSU tradition. Rose (planted October), marigold, tulsi, and money plant are the most popular township plants. Snake plant in every indoor space is especially appropriate in coal-area townships as a practical air quality measure." },
      { question: "Do you deliver plants to the Hasdo Bango dam area near Korba?", answer: "Yes. The Hasdo Bango (Minimaata Reservoir) area near Korba and the Korba East and West coalfield residential areas are all within our same-day delivery zone. The dam's reservoir and surrounding area is popular for weekend recreation among Korba's industrial families, and we can deliver to residential areas in this zone within 2–5 hours." }
    ]
  },

  "hassan": {
    cityName: "Hassan",
    metaTitle: "Buy Plants Online in Hassan | Hoysala Heritage Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Hassan. Jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Karnataka's Hoysala heritage city gets plant delivery.",
    h1: "Buy Plants Online in Hassan — Same-Day Plant Delivery in the Gateway to Hoysala Heritage Karnataka",
    metaKeyword: "plants online hassan, buy plants hassan, indoor plants hassan, plant delivery hassan karnataka, jasmine hassan, marigold hassan, online nursery hassan belur halebidu",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Hassan — Hoysala Heritage City Gets Doorstep Greens</h2>

<p>Hassan is the administrative headquarters of Hassan district in Karnataka and the gateway to two of the world's most extraordinary medieval temples — the Hoysaleswara Temple at Halebidu (30 km) and the Chennakaishava Temple at Belur (40 km), both UNESCO World Heritage sites and among the finest examples of Hoysala architecture (11th–14th centuries) in the world. Hassan sits at the junction of several important Karnataka routes: from Bangalore (180 km) to Mangaluru, and from Mysuru to the Chikmagalur coffee hills. The city is surrounded by Karnataka's richest agricultural belt — areca nut, coconut, paddy, and coffee are the primary crops of Hassan district.</p>

<p>Hassan's climate is elevated southern Karnataka: warm but not extreme summers (33°C), excellent monsoon (900–1,200 mm from the Western Ghats' rain shadow effect), and pleasant cool winters (14–22°C). The good rainfall and elevated terrain create excellent plant-growing conditions. Jasmine, tulsi, marigold, hibiscus, and indoor plants all thrive. RedHeart delivers across Hassan, Belur, Halebidu, Sakleshpur, and Arkalgud with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Hassan Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Hassan / Karnataka Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mallige)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple offerings, Karnataka daily garlands</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Kannada Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ugadi, Dasara, Hoysala temple visits</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Hassan garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Hassan college offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, areca nut traders</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Hassan's good humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Hoysala Heritage, Areca Nut Farming, and Hassan's Plant Culture</h3>

<p>Hassan's identity is shaped by two powerful forces: the extraordinary stone-sculpted heritage of the Hoysala civilization (whose intricately carved temples at Belur and Halebidu depict thousands of botanical motifs — lotus, jasmine, and elephant lotus are recurring Hoysala symbols carved in stone), and the areca nut plantation economy that defines Hassan district's agricultural landscape. The areca palm (Areca catechu) — source of the betel nut chewed across South and Southeast Asia — is Hassan's most commercially significant plant, and generations of farming families have deep botanical expertise in areca cultivation. This agricultural heritage creates strong respect for plants in general, and the transition to urban apartment living in Hassan has created demand for potted versions of the plants familiar from childhood farm landscapes: jasmine, hibiscus, tulsi, and money plant are the most popular balcony garden choices.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Hassan</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hassan City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">BM Road, Renukamba Theatre area, Shanthigrama</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Belur / Halebidu</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Belur, Halebidu UNESCO temples</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sakleshpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sakleshpur coffee hill station</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Arsikere / Channarayapatna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Arsikere railway junction, Channarayapatna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant best represents the Hoysala temple heritage of Hassan?", answer: "Lotus (Nelumbo nucifera) is the most iconic Hoysala plant — the Hoysala frieze is famous for its intricate lotus carvings that appear on every temple at Belur and Halebidu. A lotus in a large water pot is the most culturally resonant Hassan plant gift. Jasmine is the temple flower tradition of Karnataka's Vaishnava temples. Tulsi in a traditional maadam connects the living home to the ancient temple tradition of sacred plant worship." },
      { question: "Is same-day plant delivery available in Hassan?", answer: "Yes. Same-day delivery is available across Hassan city including BM Road and Shanthigrama areas. Order before 3 PM. We also deliver to Belur and Halebidu within 3–5 hours." },
      { question: "Which plants thrive in Hassan's southern Karnataka hill climate?", answer: "Hassan's good monsoon (900–1,200 mm) and pleasant temperatures (33°C max) make it excellent for plant growth. Jasmine, hibiscus, marigold, anthurium, tulsi, and money plant all grow well. Anthurium grows almost without care in Hassan's natural humidity. Coffee and cardamom plants (from the nearby Sakleshpur hills) also adapt to Hassan's garden conditions for botanically adventurous growers." },
      { question: "What plant is best for gifting to Hoysala tourism hospitality businesses near Hassan?", answer: "Peace lily in a ceramic planter creates an elegant reception for heritage hotels near Belur and Halebidu. Anthurium in a terracotta pot is culturally appropriate — its sculptural, jewel-like quality references the intricate Hoysala stone carvings. Areca palm in a large floor planter is the standard hospitality industry plant for heritage property lobbies and heritage homestays around Hassan's temple circuit." },
      { question: "Do you deliver plants to Belur and Halebidu from Hassan?", answer: "Yes. Belur (30 km from Hassan, home to the Chennakeshava Temple — among the most intricately carved temples ever built, a UNESCO World Heritage Site) and Halebidu (35 km, the former Hoysala capital, with the Hoysaleswara Temple) are both within our 3–5 hour same-day delivery zone. Same-day delivery for orders placed before noon." }
    ]
  },

  "hisar": {
    cityName: "Hisar",
    metaTitle: "Buy Plants Online in Hisar | Steel City Haryana Plants | RedHeart",
    metaDescription: "Order plants online in Hisar. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Haryana's steel and cattle city gets plant delivery.",
    h1: "Buy Plants Online in Hisar — Same-Day Plant Delivery in Haryana's Steel and Agricultural Hub",
    metaKeyword: "plants online hisar, buy plants hisar, indoor plants hisar, plant delivery hisar haryana, marigold hisar, rose plant hisar, online nursery hisar HSVP SAIL",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Hisar — Haryana's Steel City Gets Doorstep Greens</h2>

<p>Hisar is one of Haryana's most important industrial and agricultural cities — the site of the SAIL's Hisar steel plant (part of the Steel Authority of India complex), a major cotton and grain trading hub, and the home of several significant educational institutions including the Lala Lajpat Rai University of Veterinary and Animal Sciences (LLR UVAS) — one of India's leading veterinary universities — and Guru Jambheshwar University of Science and Technology. Hisar was originally founded by the Firuz Shah Tughlaq, the 14th century Delhi Sultanate ruler who built the Firuz Shah Kotla canal, and several of the sultan's structures still stand in Hisar. The city is also known as a major cattle market — the Hisar cattle fair is one of the largest in north India.</p>

<p>Hisar's climate is extreme north Indian semi-arid: very hot summers (45°C — among Haryana's highest), low rainfall (350–450 mm — one of the driest parts of Haryana), and cold winters (2–15°C). Drought-adapted plants are essential. Money plant (indoor), tulsi, snake plant, aloe vera, and rose (winter) are the core plant categories for Hisar. RedHeart delivers across Hisar, Bhiwani, Fatehabad, and Sirsa with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Hisar Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Hisar / Haryana Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Haryana Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC, auspicious gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Extreme Hisar heat, very low water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">SAIL office, indoor air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Lohri (winter only)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter blooms (Nov–Feb) in Hisar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate in winter</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali corporate, steel company</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low (vase)</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, GJUS&T university</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Hisar's Extreme Semi-Arid Setting and Drought-Smart Plant Culture</h3>

<p>Hisar's position in Haryana's driest zone — the semi-arid belt bordering Rajasthan — has created a very practical plant culture focused on water efficiency and seasonal timing. The Western Yamuna Canal and Bhakra-Nangal irrigation system provide agricultural water, but domestic plant growing is constrained by water availability. Residents have developed smart strategies: aloe vera and cactus for the summer garden, tulsi with drip watering at the root, and indoor plants in AC environments during the brutal May–June period when temperatures cross 45°C. The SAIL Hisar Steel Plant's township — similar to PSU townships elsewhere in India — maintains a tradition of colony garden competitions that have created sustained horticultural interest among the steel plant's worker families.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Hisar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hisar City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Urban Estate, Model Town, GJUS&T</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">SAIL Township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">SAIL Hisar, LLR UVAS campus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhiwani</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhiwani town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Fatehabad / Sirsa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fatehabad, Sirsa towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Hisar's extreme 45°C summer heat and low 350 mm rainfall?", answer: "Aloe vera (water twice a month in summer), snake plant (indoor AC), cactus and succulent collection (minimal water), lucky bamboo in water vase, and money plant in water vase are the most appropriate drought-extreme plants for Hisar. Outdoor planting is best done October–November for cool season. Any plant in an outdoor pot during May–June needs twice-daily watering or will die in Hisar's extreme desiccating heat." },
      { question: "Is same-day plant delivery available in Hisar?", answer: "Yes. Same-day delivery is available across Hisar including Urban Estate, Model Town, GJUS&T area, and SAIL township. Order before 3 PM. We also deliver to Bhiwani within 3–5 hours." },
      { question: "What plant is best for the SAIL Hisar Steel Plant office gifting?", answer: "Snake plant in a terracotta pot is the most appropriate SAIL office plant — it purifies air in industrial settings and needs watering only weekly. Lucky bamboo in a glass vase is the standard corporate Diwali gift at SAIL. Peace lily is elegant for senior officer and management gifting. Areca palm in a large floor planter creates an impressive entrance statement for the SAIL Guest House or AGM's office." },
      { question: "What plants are popular for Lohri celebrations in Hisar?", answer: "Marigold in terracotta pots is the most festive Lohri plant for Hisar's Haryanvi families — the golden genda matches the winter harvest season's colours. Tulsi is sacred and central to the morning prayer that accompanies Lohri. Rose in full December bloom is a beautiful Lohri garden plant for Hisar's pleasant winter. Mustard (sarson) — though a field crop — is often grown in a pot as a symbolic connection to the Lohri harvest festival for urban families." },
      { question: "Do you deliver plants to Bhiwani (the Boxing City) from Hisar?", answer: "Yes. Bhiwani (40 km from Hisar, famous as the Boxing District of India — producing more national boxing champions than any other district, with SAI Boxing Academy Bhiwani being one of India's most celebrated sports institutions) is within our 3–5 hour same-day delivery zone from Hisar. Same-day delivery for Bhiwani orders placed before noon." }
    ]
  },

  "ajmer": {
    cityName: "Ajmer",
    metaTitle: "Buy Plants Online in Ajmer | Dargah City Rajasthan Plants | RedHeart",
    metaDescription: "Order plants online in Ajmer. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Rajasthan's Dargah Sharif city gets fresh plant delivery.",
    h1: "Buy Plants Online in Ajmer — Same-Day Plant Delivery in the City of Khwaja Moinuddin Chishti",
    metaKeyword: "plants online ajmer, buy plants ajmer, indoor plants ajmer, plant delivery ajmer rajasthan, rose plant ajmer, marigold ajmer, online nursery ajmer dargah sharif",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ajmer — The City of the Dargah Sharif Gets Doorstep Greens</h2>

<p>Ajmer is one of India's most sacred cities for both Islam and Hinduism — the home of the Dargah Sharif (the shrine of Khwaja Moinuddin Chishti, the 12th-century Sufi saint who brought the Chishti order of Sufism to South Asia), which attracts millions of pilgrims each year from across the world regardless of religion, and the nearby Pushkar (15 km) — one of Hinduism's most sacred pilgrimage sites and the site of the world's largest camel fair and the only Brahma temple in India. The city is also home to the famous Mayo College (one of India's most prestigious schools, founded 1875 for Indian princes), Sophia Girls' College, and a history shaped by Mughal imperial patronage — Akbar visited Ajmer repeatedly, and the Akbar Fort (now a museum) stands at the city's heart.</p>

<p>Ajmer's climate is Rajasthan plateau: hot summers (41°C), moderate monsoon (450 mm), and pleasant cool winters (5–20°C). The Aravalli hills moderate temperatures slightly. Rose, jasmine, marigold, money plant, and indoor plants are popular. RedHeart delivers across Ajmer, Pushkar, Beawar, Kishangarh, and Tonk with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Ajmer Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sacred / Rajasthan Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dargah offerings, Rajasthan garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pushkar festival, Diwali, Navratri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu Rajasthan home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, Mayo College</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Rajasthan heat and low rainfall</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, indoor AC, Ajmer businesses</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Dargah pilgrim hotels</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Mayo College, hospitality</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sufism's Floral Tradition and Ajmer's Sacred Plant Culture</h3>

<p>The Dargah Sharif's floral tradition is one of India's most beautiful — rose petals (gulab), jasmine, and marigold are offered in enormous quantities by devotees at the tomb of Khwaja Sahib. The Chishti Sufi tradition places particular emphasis on sama (devotional music) and the perfume of flowers as a gateway to the divine — the Dargah's atmosphere of rose petals, qawwali music, and incense creates one of India's most uniquely fragrant sacred experiences. This Sufi rose tradition overlaps beautifully with Rajasthan's Hindu festivals: Pushkar's Brahma temple puja is accompanied by marigold, and the Ana Sagar lake's rose gardens (developed during the Mughal period) are Ajmer's botanical heritage. Growing rose at home connects Ajmer's residents to this multilayered sacred-botanical tradition.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ajmer</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Ajmer</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dargah area, Naya Bazaar, Adarsh Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pushkar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pushkar pilgrimage town, Brahma temple</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kishangarh / Beawar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kishangarh, Beawar towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tonk</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tonk town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to the Dargah Sharif's sacred rose tradition in Ajmer?", answer: "Rose plant is the most sacred and appropriate plant gift for any Ajmer household — the Dargah Sharif's tradition of rose petal offerings (chadar and phool) makes rose the city's deepest botanical symbol. A living rose plant in a terracotta pot offered as a gift carries the Chishti tradition's spirit of fragrant devotion. Marigold is the Hindu pilgrimage flower for Pushkar's Brahma temple. Lucky bamboo is neutral and appropriate for inter-community professional gifting in Ajmer's diverse community." },
      { question: "Is same-day plant delivery available in Ajmer?", answer: "Yes. Same-day delivery is available across Ajmer including Dargah area, Naya Bazaar, and Adarsh Nagar. Order before 3 PM. We also deliver to Pushkar within 3–5 hours." },
      { question: "What plants grow best in Ajmer's Aravalli plateau climate?", answer: "Rose (planted October for spectacular January–March bloom), marigold (September–February), tulsi, aloe vera, snake plant, and money plant are the best choices for Ajmer. The Aravalli hills moderate temperatures slightly, giving Ajmer better winters than open Rajasthan desert cities. October–March is Ajmer's outstanding gardening season. Indoor plants need supplemental care during the hot, low-humidity April–June period." },
      { question: "What plant is best for the Pushkar Camel Fair gifting season?", answer: "Marigold in full orange bloom is the most festive plant for the Pushkar Camel Fair period (November Kartika Purnima) — the fair's atmosphere of pilgrims, traders, and flowers creates one of India's most colourful seasonal events. Tulsi as a sacred Pushkar gift for pilgrims is meaningful. For hospitality businesses catering to international visitors at the Pushkar fair, areca palm in a large pot creates an appropriate desert hospitality aesthetic." },
      { question: "Do you deliver plants to Pushkar from Ajmer?", answer: "Yes. Pushkar (15 km from Ajmer, home to the Pushkar lake — one of India's most sacred lakes — the world's only Brahma temple, and the annual Pushkar Camel Fair, one of India's most spectacular cultural events) is within our 3–5 hour same-day delivery zone. Same-day delivery for Pushkar orders placed before noon." }
    ]
  },

  "kottayam": {
    cityName: "Kottayam",
    metaTitle: "Buy Plants Online in Kottayam | Land of Letters Latex Rubber Kerala | RedHeart",
    metaDescription: "Order plants online in Kottayam. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Kerala's rubber city gets fresh plant delivery.",
    h1: "Buy Plants Online in Kottayam — Same-Day Plant Delivery in the Land of Letters, Latex & Lakes",
    metaKeyword: "plants online kottayam, buy plants kottayam, indoor plants kottayam, plant delivery kottayam kerala, jasmine kottayam, anthurium kottayam, online nursery kottayam rubber vembanad",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kottayam — Land of Letters, Latex and Lakes Gets Doorstep Greens</h2>

<p>Kottayam is one of Kerala's most celebrated cities — the home of the "Land of Letters, Latex, and Lakes" identity: 100% literacy (achieved before the rest of India, making it India's first fully literate district), rubber plantation economy (the Kottayam-Pathanamthitta-Ernakulam belt is India's largest natural rubber-producing region), and the extraordinary backwater landscape of Vembanad Lake and the Kuttanad wetlands ("The Rice Bowl of Kerala"). Kottayam is a major hub of Christian culture in India — the city and its surroundings are home to Syrian Christian (Nasrani) communities with a tradition traceable to the Apostle Thomas (52 AD), with ancient Mar Thoma, Catholic, CSI, and Jacobite churches that are among Christianity's oldest institutions outside the Middle East. DC Books, one of India's largest Malayalam publishers, is based in Kottayam, reinforcing its literary identity.</p>

<p>Kottayam's climate is humid tropical Kerala: warm year-round (28–34°C), extraordinary rainfall (3,000+ mm from both monsoons), and high humidity. Plants grow with effortless abundance in Kottayam's natural conditions. Anthurium, jasmine, hibiscus, money plant, and tropical indoor plants are the most popular choices. RedHeart delivers across Kottayam, Kumarakom, Changanacherry, Ettumanur, and Pala with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Kottayam Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Kerala Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care in Kottayam</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives without care in Kerala humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vishu, Onam, daily puja garlands</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Kottayam apartment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kerala Devi worship, home compound</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Konna (Cassia fistula)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vishu konna, state flower of Kerala</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹449</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Syrian Christian homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, rubber company</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu Kerala homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Rubber, Vembanad, and Kottayam's Rich Botanical Heritage</h3>

<p>Kottayam's rubber plantations define its landscape — the Hevea brasiliensis (rubber tree), introduced by British planters in the late 19th century, has shaped the district's economy, ecology, and culture for over 130 years. Rubber tapping (slicing the bark to collect latex) is the daily morning ritual of millions of Kottayam families. This deep botanical relationship with commercial plant cultivation creates genuine respect for plants in general — Kottayam homes are famous for elaborate compound gardens with jackfruit, mango, coconut, pepper vine, and cardamom alongside ornamental plants. The Christian community's tradition of well-kept church gardens (roses, lilies, and tropical ornamentals) has also shaped Kottayam's ornamental plant culture. Kumarakom (on the shores of Vembanad Lake) is one of Kerala's most celebrated ecotourism destinations, and its resorts and homestays maintain spectacular tropical gardens.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kottayam</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kottayam City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Baker Jn, KK Road, Nagampadam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kumarakom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kumarakom backwaters, Vembanad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Changanacherry</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Changanacherry, Vaikom towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pala / Erattupetta</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pala, Erattupetta, Ettumanur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Kottayam's extraordinary Kerala monsoon humidity?", answer: "Kottayam's 3,000+ mm annual rainfall and year-round warmth make it one of India's best plant-growing locations. Anthurium, money plant, ferns, hibiscus, jasmine, peace lily, and essentially all tropical plants grow with effortless vigour. Anthurium needs virtually no care — Kottayam's natural humidity is its ideal native condition. Even normally difficult indoor plants like fiddle-leaf fig grow easily outdoors in Kottayam's sheltered, humid garden spaces." },
      { question: "Is same-day plant delivery available in Kottayam?", answer: "Yes. Same-day delivery is available across Kottayam including Baker Junction, KK Road, and Nagampadam. Order before 3 PM. We also deliver to Kumarakom and Changanacherry within 3–5 hours." },
      { question: "What is the most significant plant for Kottayam's Vishu celebration?", answer: "Konna (Cassia fistula, the Indian laburnum — also Kerala's state flower) is the most sacred and essential Vishu plant — the Vishu kani (auspicious first sight of the new year, seen on Vishu morning) must include fresh konna blossoms. Growing a konna tree in the compound is the botanical aspiration of every Kerala household. Jasmine is the fragrant garland flower for Vishu. Money plant and marigold add colour to the Vishu kani arrangement." },
      { question: "What plant is best for a Kumarakom backwater resort or houseboat gifting?", answer: "Anthurium in a terracotta pot — its jewel-like waxy flowers and sculptural leaves are the perfect embodiment of tropical Kerala aesthetics for luxury houseboat and backwater resort settings. Peace lily creates an elegant, fragrant indoor ambience. Money plant in a hanging woven coconut shell planter is rustic and authentically Kerala. Areca palm in a large pot is the standard hospitality industry floor plant for Kumarakom resort lobbies." },
      { question: "Do you deliver plants to Changanacherry and Pala from Kottayam?", answer: "Yes. Changanacherry (30 km from Kottayam, an important Syrian Christian cultural centre) and Pala (50 km, known for the Bishop Mar Mathew Kavukatt institutions and as a significant Syrian Catholic town) are both within our 3–5 hour same-day delivery zone from Kottayam." }
    ]
  },

  "kozhikode": {
    cityName: "Kozhikode",
    metaTitle: "Buy Plants Online in Kozhikode | Calicut City of Spices Kerala Plants | RedHeart",
    metaDescription: "Order plants online in Kozhikode (Calicut). Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Kerala's Zamorin city gets fresh plant delivery.",
    h1: "Buy Plants Online in Kozhikode — Same-Day Plant Delivery in the City of Spices and the Zamorins",
    metaKeyword: "plants online kozhikode, buy plants kozhikode calicut, indoor plants kozhikode, plant delivery kozhikode kerala, jasmine kozhikode, anthurium kozhikode, online nursery kozhikode calicut spices",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kozhikode — The City of the Zamorins Gets Doorstep Greens</h2>

<p>Kozhikode (Calicut) is one of Kerala's most historically significant cities — the capital of the Zamorin (Samoothiri) rulers who dominated the Malabar coast's spice trade for centuries before European arrival, the site where Vasco da Gama first landed in India in 1498 (marking the beginning of the European spice trade that would reshape the world economy), and a major centre of Islamic scholarship and commerce (the Mappila Muslim community's deep-rooted scholarly tradition is expressed in the city's many madrasas and the Darul Huda Islamic University). Kozhikode is also famous for its halwa (the sweet made from wheat, ghee, and cashew that is the city's most celebrated culinary product) and its distinctive Moplah (Mappila) culinary tradition.</p>

<p>Kozhikode's climate is coastal Kerala tropical: warm year-round (28–34°C), extraordinary southwest monsoon (2,500–3,000 mm), and constant sea breeze from the Arabian Sea. The exceptional rainfall and humidity create superb plant-growing conditions. Anthurium, jasmine, hibiscus, money plant, and tropical plants all thrive. RedHeart delivers across Kozhikode, Calicut, Feroke, Beypore, Koyilandy, and Vatakara with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Kozhikode Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Kozhikode Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Grows without care in Kozhikode humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily puja garlands, Onam, Vishu</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, apartment gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Malabar home garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu Malabar homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, spice trade gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, NIT Calicut faculty</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hotel lobby, spice export company</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Spice Heritage, Mappila Culture, and Kozhikode's Plant World</h3>

<p>Kozhikode's identity as the historic heart of India's spice trade creates a unique botanical consciousness — pepper, cardamom, ginger, turmeric, and nutmeg were the spices whose global demand brought Portuguese, Arab, Chinese, and eventually British traders to this coast. The Zamorin's spice gardens were among the medieval world's most valuable commercial properties. Today, this spice heritage lives on in Kozhikode's residential compound gardens: pepper vine climbing a coconut tree, cardamom in pots, curry leaf as the essential kitchen plant, and ginger in a back-garden bed. The Mappila Muslim community's compound gardens traditionally feature lime, mango, jackfruit, and coconut — a productive agroforestry tradition centuries old. NIT Calicut (National Institute of Technology Calicut), one of India's premier engineering colleges, adds an academic and internationally diverse population that brings contemporary plant preferences to the city.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kozhikode</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kozhikode City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Beach Road, SM Street, Mavoor Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Feroke / Beypore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Feroke, Beypore port area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Koyilandy / Vatakara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Koyilandy, Vatakara towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Malappuram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Malappuram city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants thrive in Kozhikode's coastal Kerala monsoon climate?", answer: "Kozhikode's 3,000 mm annual rainfall and coastal humidity make it exceptional for plant growth. Anthurium, jasmine, hibiscus, money plant, ferns, areca palm, peace lily, and all tropical plants grow with effortless vigour. Even spice plants — pepper vine, cardamom, ginger — grow well in Kozhikode's naturally warm, humid conditions. The monsoon (June–October) is the fastest plant establishment period — new plants root and spread remarkably quickly." },
      { question: "Is same-day plant delivery available in Kozhikode?", answer: "Yes. Same-day delivery is available across Kozhikode including Beach Road, SM Street, and Mavoor Road. Order before 3 PM. We also deliver to Feroke, Beypore, Koyilandy, and Vatakara with 2–5 hour service." },
      { question: "What is the most authentic Kozhikode Onam plant gift?", answer: "Konna (Cassia fistula) — Kerala's state flower — is the most culturally authentic Onam plant gift, essential for the Vishu kani arrangement. Jasmine plant for daily garlands is cherished by every Kozhikode household. Anthurium in a traditional terracotta pot is a contemporary premium Onam gift that honours Kerala's love of tropical abundance. Money plant in a woven basket is the most popular modern Onam gifting choice in Kozhikode." },
      { question: "What spice plants can be grown at home in Kozhikode?", answer: "Kozhikode's climate is ideal for home spice growing. Curry leaf plant (kadipatta) is essential for any Malabar kitchen. Ginger in a large pot (planted June, harvested November). Pepper vine trained up a coconut tree. Turmeric in a deep pot (planted June). Cardamom requires shade and consistent moisture — possible in a covered Kozhikode balcony. Lemongrass in a pot is fragrant and practical. All these grow with minimal effort in Kozhikode's natural conditions." },
      { question: "Do you deliver plants to Malappuram from Kozhikode?", answer: "Yes. Malappuram (40 km from Kozhikode, the centre of Muslim cultural and educational life in Kerala, home to the Darul Huda Islamic University and the SNDP Yogam's educational institutions) is within our 3–5 hour same-day delivery zone. Vatakara and Koyilandy (both important Malabar towns north of Kozhikode) are within 3–5 hours." }
    ]
  },

  "kannur": {
    cityName: "Kannur",
    metaTitle: "Buy Plants Online in Kannur | Looms and Lores Land Kerala Plants | RedHeart",
    metaDescription: "Order plants online in Kannur. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Kerala's Land of Looms and Lores gets fresh plant delivery.",
    h1: "Buy Plants Online in Kannur — Same-Day Plant Delivery in the Land of Looms and Lores",
    metaKeyword: "plants online kannur, buy plants kannur, indoor plants kannur, plant delivery kannur kerala, jasmine kannur, anthurium kannur, online nursery kannur theyyam handloom",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kannur — Land of Looms and Lores Gets Doorstep Greens</h2>

<p>Kannur (Cannanore) is the cultural heart of northern Kerala — the "Land of Looms and Lores" known for its unique handloom weaving tradition (Kannur handloom — the cotton and silk fabrics with traditional designs produced by the Marudar weaver community), the extraordinary Theyyam ritual art (the spectacular shamanic ritual performance tradition of north Kerala, where performers embody deities in elaborate costumes, performed in fields and forests), and St. Angelo Fort (1505, built by the Portuguese) — one of the most historically significant coastal fortifications of the Kerala coast. Kannur is also a major cashew processing and processing hub, and the headquarters of the Malabar coast's handloom industry.</p>

<p>Kannur's climate is northern Kerala coastal: warm year-round (28–34°C), extraordinary monsoon (3,000+ mm), constant sea breeze, and high humidity. Plants grow with exceptional vigour in Kannur's natural conditions — among the best plant-growing climates in India. Jasmine, anthurium, hibiscus, money plant, and tropical indoor plants all thrive effortlessly. RedHeart delivers across Kannur, Thalassery, Payyannur, Kuthuparamba, and Kasaragod with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Kannur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Kannur / Kerala Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care in Kannur</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, Theyyam season flowers</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Grows naturally in Kannur's humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, compound garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, cashew company offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu Malabar home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Kannur University</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, handloom company gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Heritage resort, fort area hospitality</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Theyyam's Sacred Plants and Kannur's Botanical Traditions</h3>

<p>Theyyam — the extraordinary ritual performance art of north Kerala — has a profound relationship with plants. The Theyyam performer's elaborate headdress (mudi) and costume use specific locally sourced plants: red Ixora flowers (chetthi), hibiscus, jasmine, coconut palms, and banana leaves are integral to the Theyyam ritual set-up. The kavus (sacred groves) where Theyyam is performed maintain ancient trees and sacred plant species that have been protected for generations as part of the ritual tradition. Kannur's cashew processing industry uses the cashew tree (Anacardium occidentale) — a plant that, with its relationship to Kerala's colonial and post-colonial economy, represents a complex botanical history. The combination of the Theyyam botanical ritual tradition and the handloom cotton industry's relationship to fibre plants creates a uniquely plant-aware culture in Kannur.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kannur</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kannur City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fort area, Thana Road, Civil Station</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Thalassery</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thalassery, Dharmadam island</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Payyannur / Kuthuparamba</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Payyannur, Kuthuparamba towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kasaragod</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kasaragod city, north Kerala</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plants are traditional to the Theyyam ritual art tradition of Kannur?", answer: "Theyyam's botanical requirements are highly specific: red Ixora (chetthi) flowers for the mudi (headdress), hibiscus for Devi manifestations, jasmine for fragrant garlands, and coconut palm leaves for the kavara (sacred ground decoration). Growing red Ixora and hibiscus in your compound garden connects you to Kannur's ancient ritual tradition. Hibiscus in particular is the Devi's sacred flower — it blooms year-round in Kannur's coastal climate with virtually no care." },
      { question: "Is same-day plant delivery available in Kannur?", answer: "Yes. Same-day delivery is available across Kannur including Fort area, Thana Road, and Civil Station. Order before 3 PM. We also deliver to Thalassery and Payyannur within 3–5 hours and Kasaragod within 4–6 hours." },
      { question: "Which plants grow best in Kannur's extraordinary northern Kerala coastal climate?", answer: "Kannur's 3,000+ mm monsoon and year-round warmth make virtually every tropical plant grow effortlessly. Jasmine flowers prolifically in Kannur's sea-breeze-cooled warm air. Anthurium, hibiscus, hibiscus rosa-sinensis, money plant, ferns, and areca palm all grow without special care. Ixora, bougainvillea, and flowering tropical shrubs are spectacular in the post-monsoon October–May period." },
      { question: "What plant is the most meaningful Onam gift for a Kannur family?", answer: "Konna (Cassia fistula — Kerala's state flower) is the most culturally significant Onam gift — the Vishu kani (first sight of the Kerala new year) must include konna blossoms. Jasmine plant for daily garland-making is cherished by every Kannur household — jasmine worn in the hair (chuttu poo) is an everyday cultural practice for women in Kannur's traditional community. Anthurium in a terracotta pot is the premium Onam gift that references the lush tropical abundance of Kannur's natural landscape." },
      { question: "Do you deliver plants to Kasaragod (northernmost Kerala district) from Kannur?", answer: "Yes. Kasaragod (the northernmost Kerala district, bordering Karnataka and home to Bekal Fort — Kerala's largest fort, and a popular backwater beach destination) is within our 4–6 hour same-day delivery zone from Kannur. Payyannur (north Kannur) is within 3–5 hours. Same-day delivery for Kasaragod orders placed before noon." }
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
