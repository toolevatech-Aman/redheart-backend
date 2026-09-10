// Plants Tier 2 Batch 9 — 8 cities
// Dhanbad, Davangere, Ballari, Shivamogga, Latur, Akola, Nanded, Ambala

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "dhanbad": {
    cityName: "Dhanbad",
    metaTitle: "Buy Plants Online in Dhanbad | Coal Capital Jharkhand Plants | RedHeart",
    metaDescription: "Order plants online in Dhanbad. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Jharkhand's coal city gets fresh plant delivery.",
    h1: "Buy Plants Online in Dhanbad — Same-Day Plant Delivery in the Coal Capital of India",
    metaKeyword: "plants online dhanbad, buy plants dhanbad, indoor plants dhanbad, plant delivery dhanbad jharkhand, money plant dhanbad, online nursery dhanbad coal city ISM",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Dhanbad — The Coal Capital of India Gets Doorstep Greens</h2>

<p>Dhanbad is Jharkhand's most populous city and the undisputed "Coal Capital of India" — home to Coal India Limited's Bharat Coking Coal Limited (BCCL), the Jharia coalfields (one of the world's largest coking coal deposits), and the Indian Institute of Technology (Indian School of Mines, ISM Dhanbad) — one of India's most prestigious technical institutions, producing engineers who lead India's mining, energy, and technology sectors. The Damodar river valley and the coal-rich Jharia basin define Dhanbad's geography and economy. The city has a rich cultural diversity — workers from across India (particularly Bihar and Odisha) have made Dhanbad's population one of eastern India's most cosmopolitan.</p>

<p>Dhanbad's climate is continental Jharkhand: hot summers (42°C), a very good monsoon (1,300 mm), and cool winters (8–18°C). The good rainfall creates decent plant-growing conditions despite the coal city's industrial character. Money plant, tulsi, marigold, indoor plants, and Chhath Puja plants are the primary plant categories for Dhanbad. RedHeart delivers across Dhanbad, Jharia, Sindri, and Bokaro with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Dhanbad Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Bihari Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Durga Puja, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, ISM/coal company offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, coal city indoor use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, coal offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, ISM faculty homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Premium gifting, Jharkhand humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">ISM Culture, Chhath Puja, and Air-Purifying Plants in Dhanbad</h3>

<p>Dhanbad's two defining communities — the coal mining workforce and the ISM Dhanbad academic community — have distinct but complementary plant cultures. The ISM campus (now IIT ISM Dhanbad) maintains well-kept faculty residential areas where rose, marigold, and indoor plants are popular. The diverse coal mining workforce, largely originating from Bihar and Odisha, brings the Chhath Puja tradition (Bihar's most significant festival) — Chhath in Dhanbad is celebrated at the Damodar river ghats with particular devotion, with marigold, banana plant, and tulsi at the centre of the ritual. Snake plant and peace lily are particularly valuable in Dhanbad as air purifiers for homes in a city where coal dust is a background environmental reality.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Dhanbad</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Dhanbad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Saraidhela, Shastri Nagar, Bank More</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ISM Campus / Hirapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IIT ISM, Hirapur, Jorapokhar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jharia / Sindri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jharia coalfields, Sindri, Gomoh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bokaro</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bokaro Steel City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants help with air quality in Dhanbad's coal city environment?", answer: "Snake plant (Sansevieria) is the most effective air purifier for Dhanbad's coal dust-influenced indoor air — it filters formaldehyde, nitrogen oxides, and benzene. Peace lily adds benzene and toluene filtration. Areca palm provides natural air humidification. Having 4–6 air-purifying plants in a Dhanbad apartment is a meaningful health investment, particularly during the December–February coal loading season when dust is highest." },
      { question: "Is same-day plant delivery available in Dhanbad?", answer: "Yes. Same-day delivery is available across Dhanbad including Bank More, Saraidhela, Shastri Nagar, and IIT ISM campus area. Order before 3 PM. We also deliver to Jharia and Sindri within 3–5 hours, and to Bokaro Steel City within 3–5 hours." },
      { question: "What plants are needed for Chhath Puja in Dhanbad?", answer: "Banana plant (kela) is the most essential Chhath plant — its stems and leaves form the thali platform for offerings at the Damodar river ghat. Marigold flowers are offered in abundance during the evening and morning arghya. Tulsi is sacred for the Chhath prayer context. Sugarcane stalks are part of the traditional offering arrangement. Growing your own banana plant and marigold for Chhath is deeply meaningful for Dhanbad's large Bihari workforce." },
      { question: "What plant is best for an IIT ISM professor's home in Dhanbad?", answer: "Peace lily in a ceramic planter is elegant and appropriate for ISM faculty homes — it purifies air in AC spaces. Rose plant (planted October) is perfect for ISM's well-maintained faculty residential colony gardens. Lucky bamboo in a glass vase is the standard for academic gifting occasions. For a welcome gift to a new faculty member, areca palm in a floor planter creates a premium impression for larger faculty quarters." },
      { question: "Do you deliver plants to the Jharia coalfield area from Dhanbad?", answer: "Yes. Jharia (the historic coalfield area, 10 km from Dhanbad) and Sindri (the former fertiliser plant town, 25 km) are within our same-day delivery zone with 3–5 hour service. Gomoh, Katras, and other BCCL mining township areas are also accessible. Same-day delivery to these areas for orders placed before noon." }
    ]
  },

  "davangere": {
    cityName: "Davangere",
    metaTitle: "Buy Plants Online in Davangere | Cotton City Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Davangere. Jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Karnataka's cotton city gets fresh plant delivery.",
    h1: "Buy Plants Online in Davangere — Same-Day Plant Delivery in Karnataka's Cotton City",
    metaKeyword: "plants online davangere, buy plants davangere, indoor plants davangere, plant delivery davangere karnataka, jasmine davangere, marigold davangere, online nursery davangere cotton city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Davangere — Central Karnataka's Commercial Hub Gets Doorstep Greens</h2>

<p>Davangere (officially Davanagere) is central Karnataka's most important commercial city — the cotton and textile trading hub of the Chitradurga-Davangere belt, and one of Karnataka's fastest-growing secondary cities. The city is known for its benne dosa (butter dosa) — among the most celebrated and distinctive regional breakfast dishes in Karnataka — and for its significant cotton trade. Davangere University and several engineering and medical colleges make it an educational centre for central Karnataka. The city lies between Bangalore (260 km south) and Hubli (100 km north), making it a strategic midpoint on Karnataka's main north-south highway corridor.</p>

<p>Davangere's climate is semi-arid central Karnataka: hot summers (38°C), moderate monsoon (700 mm from southwest monsoon), and pleasant winters (14–24°C). Jasmine, hibiscus, marigold, tulsi, and indoor plants all do well in Davangere's warm conditions. Ugadi and Dasara are the biggest plant occasions for the predominantly Lingayat and Vokkaliga Hindu community of Davangere. RedHeart delivers across Davangere, Harihara, Chitradurga, and Harihar with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Davangere Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Karnataka Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mallige)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, Karnataka tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Kannada Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ugadi, Dasara, Ganesh Chaturthi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Karnataka garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, cotton business</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Davangere University</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, cotton trade</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Davangere's Commercial Identity and Karnataka Festival Plant Culture</h3>

<p>Davangere's Lingayat community (the dominant community in northern Karnataka, followers of Basavanna's 12th-century social reform tradition) has a deep relationship with tulsi — the tulsi is particularly sacred in Lingayat worship, and the annual Tulsi Vivah (the ritual marriage of Vishnu and Tulsi on the 11th day of Kartika month) is an important tradition. Ugadi (Kannada New Year) is the most important festival occasion for plant gifting in Davangere — jasmine and marigold are the botanical heart of the new year celebration. The cotton trading community's inter-business gifting at Ugadi and Dasara drives demand for premium indoor plants like lucky bamboo and peace lily.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Davangere</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Davangere</td><td style="border:1px solid #d1d5db;padding:8px 12px;">PJ Extension, Nittuvalli, MCC Block</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Harihara / Harihar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Harihara town, paper mills area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Chitradurga</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chitradurga town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Channagiri / Jagalur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Channagiri, Jagalur taluks</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Davangere's central Karnataka climate?", answer: "Jasmine, hibiscus, tulsi, marigold, money plant, snake plant, and aloe vera all thrive in Davangere's warm, moderately dry conditions. Jasmine grows vigorously in Davangere's warm, sunny climate — daily watering and full morning sun are all it needs. The moderate 700 mm monsoon means outdoor plants need supplemental summer watering." },
      { question: "Is same-day plant delivery available in Davangere?", answer: "Yes. Same-day delivery is available across Davangere including PJ Extension, Nittuvalli, and MCC Block area. Order before 3 PM. We also deliver to Harihara within 3–5 hours and Chitradurga within 4–6 hours." },
      { question: "What plant is most auspicious for Ugadi in Davangere's Lingayat community?", answer: "Tulsi is the most sacred Ugadi plant for Davangere's Lingayat households — Tulsi Vivah (the Kartika month ritual) is central to Lingayat worship. For Ugadi gifting, jasmine plant (for its fragrant garland use) and money plant in a new ceramic pot are the most popular contemporary choices. Marigold in full bloom adds festive colour to any Ugadi celebration." },
      { question: "What are the best plants for Davangere's cotton trade business gifting?", answer: "Lucky bamboo in a 9-stalk arrangement (symbolising growth, appropriate for the cotton trade) is the most popular inter-business Ugadi gift in Davangere's commercial community. Peace lily in a ceramic planter is elegant for senior business relationship gifting. Money plant in a terracotta pot is widely appropriate. Areca palm in a large floor planter makes an impressive statement for major business occasion gifting." },
      { question: "Do you deliver plants to Chitradurga from Davangere?", answer: "Yes. Chitradurga (famous for its dramatically sited fortress city, one of Karnataka's most impressive historical monuments) is within our 4–6 hour delivery zone from Davangere. Same-day delivery for Chitradurga orders placed before noon. Harihara (15 km from Davangere, home to the Harihar paper mills) is within 3–5 hours with guaranteed same-day service." }
    ]
  },

  "ballari": {
    cityName: "Ballari",
    metaTitle: "Buy Plants Online in Ballari | Iron City Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Ballari (Bellary). Indoor plants & gifting combos. Same-day delivery. Starting ₹299. North Karnataka's iron city gets plant delivery.",
    h1: "Buy Plants Online in Ballari — Same-Day Plant Delivery in Karnataka's Iron Ore Capital",
    metaKeyword: "plants online ballari, buy plants ballari bellary, indoor plants ballari, plant delivery ballari karnataka, marigold ballari, tulsi ballari, online nursery ballari iron ore",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ballari — Iron Ore Capital of Karnataka Gets Doorstep Greens</h2>

<p>Ballari (formerly Bellary) is one of the most strategically significant cities in northern Karnataka — the headquarters of Ballari district, a major iron ore mining centre (the Bellary iron ore mines supplied raw material to some of Asia's largest steel plants during the 2000s mining boom), and an important city on the border zone between Karnataka, Andhra Pradesh, and Telangana. The Tungabhadra river, the ruins of the Vijayanagara Empire capital at Hampi (60 km from Ballari, a UNESCO World Heritage Site), and the historically significant Bellary Fort give the region an extraordinary historical depth. Sandur, within the Ballari district, is home to some of India's richest iron ore deposits.</p>

<p>Ballari's climate is hot and dry northern Deccan: summers reach 42°C and are among the hottest in Karnataka, the monsoon is limited (500–600 mm — one of Karnataka's driest regions), and winters are pleasant (14–24°C). Drought-adapted plants are essential for Ballari's outdoor gardening. Tulsi, aloe vera, marigold, hibiscus, and indoor plants are popular. RedHeart delivers across Ballari, Hospet, Sandur, and Koppal with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Ballari Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, daily morning water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles extreme Ballari heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, iron ore company settings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ugadi, Dasara, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, compound</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, mining companies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low (water vase)</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Hampi tourism offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low-moderate</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Hampi, the Vijayanagara Heritage, and Ballari's Plant Culture</h3>

<p>The Vijayanagara Empire (14th–17th centuries), whose capital at Hampi was the world's second-largest city in the early 16th century, maintained extraordinary royal gardens, the Lotus Mahal, and elaborate water systems in the semi-arid Deccan setting. The empire's royal gardens demonstrate that even in Ballari's hot, dry climate, sophisticated plant cultivation was possible with proper water management. The Tungabhadra's waters enabled Hampi's gardens — today, the Tungabhadra Dam reservoir continues to irrigate Ballari district's fields. Ballari's plant culture is shaped by this historical backdrop of civilization-in-aridity: finding ways to grow despite the heat, using tulsi, hibiscus, and aloe vera as the drought warriors of the home garden.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ballari</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Ballari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines, Santhepet, Fort area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hospet / Hampi area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hospet, Hampi, Kampli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sandur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sandur, Kudligi towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Koppal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Koppal town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Ballari's extreme heat (42°C and limited rainfall)?", answer: "Aloe vera (very low water, handles 42°C), snake plant (indoor AC), cactus and succulent collections, tulsi (with daily morning water and afternoon shade), and bougainvillea (drought-hardy once established) are the core Ballari outdoor plants. Indoors, money plant in water, peace lily, and lucky bamboo all thrive in AC environments regardless of Ballari's outdoor heat." },
      { question: "Is same-day plant delivery available in Ballari?", answer: "Yes. Same-day delivery is available across Ballari including Civil Lines, Santhepet, and Fort area. Order before 3 PM. We also deliver to Hospet (gateway to Hampi) within 3–5 hours." },
      { question: "What plant is the best Ugadi gift for Ballari's Lingayat and Vokkaliga community?", answer: "Tulsi is the most sacred Ugadi plant gift for Ballari's Lingayat households. Jasmine plant (mallige) is fragrant and culturally resonant for the new year. Money plant in a new terracotta pot is auspicious. Lucky bamboo in a glass vase is the standard corporate Ugadi inter-business gift in Ballari's iron ore and steel trading community." },
      { question: "What plants are popular for hospitality and tourism in the Hampi area?", answer: "Peace lily, anthurium, and areca palm are popular for Hospet and Hampi's growing hotel and hospitality sector. Bougainvillea in terracotta wall planters creates a picturesque compound wall display. Jasmine in pots perfumes evening dining spaces. Money plant is popular for eco-resorts and heritage stays near Hampi for its low-care, thriving character." },
      { question: "Do you deliver plants to Hospet (Hampi gateway) from Ballari?", answer: "Yes. Hospet (the main service town for Hampi UNESCO World Heritage Site, 12 km from Hampi) is within our 3–5 hour delivery zone from Ballari. Hospet's growing hospitality sector (Hampi attracts 4–5 lakh tourists annually) is a significant plant market. Same-day delivery for Hospet orders placed before noon." }
    ]
  },

  "shivamogga": {
    cityName: "Shivamogga",
    metaTitle: "Buy Plants Online in Shivamogga | Shimoga Gateway to Malnad | RedHeart",
    metaDescription: "Order plants online in Shivamogga (Shimoga). Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Malnad's gateway city gets plant delivery.",
    h1: "Buy Plants Online in Shivamogga — Same-Day Plant Delivery in the Gateway to Malnad Karnataka",
    metaKeyword: "plants online shivamogga, buy plants shivamogga shimoga, indoor plants shivamogga, plant delivery shivamogga karnataka, jasmine shivamogga, marigold shivamogga, online nursery shivamogga",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Shivamogga — Gateway to Malnad Gets Doorstep Greens</h2>

<p>Shivamogga (officially Shivamogga; formerly known as Shimoga) is the commercial hub of Karnataka's Malnad region — the lush, hilly, forest-rich Western Ghats belt that receives extraordinary rainfall and produces cardamom, pepper, areca nut, coffee, and teak. The Tunga river flows through Shivamogga, and the city is famous for its proximity to the stunning Jog Falls (85 km, India's second-highest waterfall), the Sharavathi river's magnificent backwater lake (Linganamakki Dam), and the wildlife-rich Bhadra Tiger Reserve. Shivamogga is Karnataka's fastest-growing medium-sized city, benefiting from its strategic position as the gateway between the dry Deccan plateau and the wet Malnad hills.</p>

<p>Shivamogga's climate benefits from Malnad proximity: not as wet as the hills but receiving a very good monsoon (1,500–2,000 mm), warm but not extreme summers (35°C), and pleasant winters (14–24°C). The excellent rainfall creates outstanding conditions for most plants. Jasmine, marigold, tulsi, hibiscus, and tropical indoor plants all thrive. RedHeart delivers across Shivamogga, Sagara, Tirthahalli, and Bhadravathi with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Shivamogga Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Malnad Karnataka Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mallige)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, Karnataka tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Kannada Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ugadi, Dasara, Ganesh Chaturthi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Malnad humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy here</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Malnad compound garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, university offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, areca/coffee</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Malnad's Rich Plant Culture and Shivamogga's Botanical Heritage</h3>

<p>Shivamogga's position at the edge of the Western Ghats' biodiversity hotspot gives it access to an extraordinary range of plants that grow nowhere else in India. The Malnad household is typically surrounded by a compound garden with areca nut, coconut, banana, jackfruit, pepper vine, and cardamom — creating a productive home agroforestry system deeply embedded in Malnad culture. This agricultural wealth translates into sophisticated plant knowledge and appreciation among Shivamogga's population. The city's rapid urbanisation is bringing in apartment residents who can't maintain the traditional Malnad compound garden but want to maintain their plant connection through indoor plants and balcony gardens. Anthurium, money plant, and jasmine are the most popular transitional plants for Malnad families moving to urban apartment living.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Shivamogga</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Shivamogga</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vinoba Nagar, Shettyhalli Road, Kuvempu Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhadravathi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhadravathi, Visvesvaraya Iron and Steel</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sagara / Soraba</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sagara, Soraba towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tirthahalli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tirthahalli (heart of Malnad)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Shivamogga's lush Western Ghats edge climate?", answer: "The 1,500–2,000 mm monsoon and warm-humid Malnad climate make Shivamogga superb for plant growth. Anthurium, jasmine, hibiscus, tulsi, money plant, fern, and most tropical plants grow with exceptional vigour. Anthurium needs virtually no care in Shivamogga's natural humidity. Even shade-loving plants do well under Shivamogga's frequently overcast Malnad skies during the June–September monsoon." },
      { question: "Is same-day plant delivery available in Shivamogga?", answer: "Yes. Same-day delivery is available across Shivamogga including Vinoba Nagar, Shettyhalli Road, and Kuvempu Nagar. Order before 3 PM. We also deliver to Bhadravathi and Sagara within 3–5 hours." },
      { question: "What plant best represents the Malnad cultural identity for gifting?", answer: "Tulsi plant in a new maadam is the most sacred and culturally resonant gift for any Malnad Kannada household. A jasmine plant (mallige) represents the fragrant feminine grace of Malnad culture. For a contemporary gift that connects to Malnad's botanical richness, anthurium in a handmade pottery planter or a curated selection of indoor tropical plants references the Malnad's extraordinary plant diversity." },
      { question: "What plant is best for a Jog Falls or Linganamakki lake resort?", answer: "Anthurium and peace lily are perfect for eco-resorts and nature lodges near Jog Falls and Linganamakki — they thrive in the area's moist forest air without special care. Hanging money plant baskets, bamboo in natural pots, and ferns in terracotta pots create an organic Malnad forest ambience for hospitality spaces." },
      { question: "Do you deliver plants to Tirthahalli from Shivamogga?", answer: "Yes. Tirthahalli (the heart of Malnad, on the banks of the Tunga river, home to the Malnad's most traditional areca-coffee-pepper landscape) is within our 4–6 hour delivery zone. Sagara and Soraba are within 3–5 hours. Same-day delivery for orders placed before noon. We serve the full Shivamogga district and the Malnad belt extensively." }
    ]
  },

  "latur": {
    cityName: "Latur",
    metaTitle: "Buy Plants Online in Latur | Maharashtra Earthquake City Plants | RedHeart",
    metaDescription: "Order plants online in Latur. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Maharashtra's Marathwada city gets fresh plant delivery.",
    h1: "Buy Plants Online in Latur — Same-Day Plant Delivery in Marathwada's Resilient City",
    metaKeyword: "plants online latur, buy plants latur, indoor plants latur, plant delivery latur maharashtra, marigold latur, tulsi latur, online nursery latur marathwada",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Latur — Marathwada's Resilient City Gets Doorstep Greens</h2>

<p>Latur is the most significant city in Maharashtra's Marathwada division — a region of semi-arid black cotton soil, significant agriculture (soybean, tur dal, and cotton), and a cultural identity shaped by the ancient Rashtrakuta and Chalukya kingdoms whose capital at Manyakheta (Malkhed, near Latur) was one of the Deccan's greatest medieval cities. Latur's name is etched in Indian memory by the catastrophic 1993 earthquake (the Killari earthquake, 6.2 magnitude) that killed nearly 10,000 people in the region — the city's remarkable reconstruction and the resilience of its people in the decades since define its character. Today, Latur is home to important educational institutions, a growing commercial centre, and a city that has rebuilt itself with purpose.</p>

<p>Latur's climate is semi-arid Marathwada: very hot summers (42°C), moderate monsoon (700 mm), and pleasant cool winters (10–22°C). Drought-adapted plants are essential for Latur's outdoor gardening. Marigold, tulsi, rose, snake plant, and indoor plants are the core plant categories. RedHeart delivers across Latur, Nanded, Osmanabad, and Gulbarga (Karnataka) with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Latur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Marathwada Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Marathwada Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dussehra, Diwali, Ganesh Chaturthi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Marathwada heat and drought</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low water, handles heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Latur businesses</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low (water vase)</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, educational offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low-moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Drought-Smart Gardening in Latur's Marathwada Setting</h3>

<p>Latur's recurring water scarcity — Marathwada is one of Maharashtra's most drought-prone regions — has made drought-smart gardening an essential skill for its residents. Aloe vera, snake plant, cactus, and succulents are the most practical outdoor and semi-outdoor plants for Latur's dry conditions. Lucky bamboo in a water vase requires no soil and minimal water — ideal for Marathwada's water-scarce summers. Indoor plants in AC environments (money plant, peace lily) are completely protected from Latur's outdoor heat and water scarcity, making them ideal choices for apartment living. The moderate 700 mm monsoon provides good soil recharge for seasonal outdoor planting — October–March is Latur's best plant season.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Latur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Latur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hatti, Udgir Road, Ausa Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ausa / Nilanga</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ausa, Nilanga, Chakur towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Nanded</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nanded city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Osmanabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Osmanabad (Dharashiv) town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are most drought-smart for Latur's water-scarce Marathwada climate?", answer: "Aloe vera (water once in 2–3 weeks), snake plant (once a week), cactus and succulent collection (minimal water), lucky bamboo in a water vase (change water weekly), and money plant in water vase (minimal care) are the most appropriate drought-smart plants for Latur. Outdoor plants should be planted in October after the monsoon soil recharge and mulched to retain moisture." },
      { question: "Is same-day plant delivery available in Latur?", answer: "Yes. Same-day delivery is available across Latur including Hatti area, Udgir Road, and Ausa Road. Order before 3 PM. We also deliver to Nanded and Osmanabad within 4–6 hours." },
      { question: "What plant is best for Ganesh Chaturthi gifting in Latur?", answer: "Marigold in full golden bloom is essential for Ganesh Chaturthi decoration in Latur — Maharashtra's most celebrated festival. Tulsi is sacred and appropriate. For a lasting Chaturthi gift, money plant in a terracotta pot is auspicious and easy to maintain. Lucky bamboo in a decorated glass vase is the corporate standard for inter-business Chaturthi gifting across Marathwada's business community." },
      { question: "Which plants were used in the earthquake memorial gardens in Latur?", answer: "The memorial sites near Killari and in Latur district have been planted with tulsi, marigold, and seasonal flowering plants in the memorial gardens and rebuilt community spaces. Tulsi is the most sacred memorial plant in Hindu tradition — it is planted in temple compounds and memorial spaces across the earthquake-affected area as a living symbol of renewal and continuity. Marigold plants add festive colour to memorial spaces during the annual anniversary observances." },
      { question: "Do you deliver plants to Nanded from Latur?", answer: "Yes. Nanded (home to the Hazur Sahib Gurudwara — one of the five Takhts of Sikhism and a major Sikh pilgrimage centre — and also separately seeded in our next batch) is within 4–6 hours from our Latur delivery network. Same-day delivery for Nanded orders placed before noon. Osmanabad (now officially renamed Dharashiv) is similarly accessible within 4–6 hours." }
    ]
  },

  "akola": {
    cityName: "Akola",
    metaTitle: "Buy Plants Online in Akola | Cotton City Maharashtra Plants | RedHeart",
    metaDescription: "Order plants online in Akola. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Vidarbha's cotton capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Akola — Same-Day Plant Delivery in the Cotton Capital of Vidarbha",
    metaKeyword: "plants online akola, buy plants akola, indoor plants akola, plant delivery akola maharashtra, marigold akola, tulsi akola, online nursery akola vidarbha cotton",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Akola — Vidarbha's Cotton Capital Gets Doorstep Greens</h2>

<p>Akola is one of Maharashtra's most important cities in the Vidarbha region — the commercial hub of Akola district, a major cotton and tur dal (pigeon pea) trading centre, and the seat of Dr. Panjabrao Deshmukh Krishi Vidyapeeth (agricultural university) — one of India's most significant agricultural universities focused on dryland farming research critical to Vidarbha's farmer community. The city is notable in modern Indian agricultural discourse as part of the cotton farmer belt where agrarian distress and farmer suicides have been documented — making plant and farming awareness deeply meaningful for Akola's population. The Morna and Akola rivers define the city's geography.</p>

<p>Akola's climate is extreme Vidarbha: very hot summers (46–48°C, among Maharashtra's highest), moderate monsoon (800 mm), and cool pleasant winters (10–22°C). Drought-adapted plants are essential for Akola's outdoor gardening. Snake plant, money plant (indoor), aloe vera, tulsi, and marigold (winter season) are the most practical plant choices. RedHeart delivers across Akola, Amravati, Washim, and Buldhana with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Akola Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Vidarbha Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, essential for Vidarbha farms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dussehra, Diwali, winter season</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles extreme Vidarbha heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, cotton company air quality</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, cotton traders</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low (water vase)</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, agricultural university</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden (Oct–Mar only)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate in winter</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Cotton Farming, Agrarian Identity, and Plant Culture in Akola</h3>

<p>Akola's identity is inseparable from cotton — the city's fortunes rise and fall with cotton prices, and the awareness of plant life (at least in its agricultural form) is deeply embedded in the local consciousness. Dr. Panjabrao Deshmukh Krishi Vidyapeeth's research on dryland farming — developing cotton varieties and farming practices suited to Vidarbha's extreme heat and uncertain monsoon — has made agricultural plant science a point of local pride. The irony that the cotton farmers who grow the world's softest crop often struggle to afford basic amenities has generated profound social consciousness about farmer welfare and agricultural sustainability in Akola's educated community. Indoor plants — money plant, peace lily, snake plant — are seen as accessible botanical companions that bring the green of the fields into urban apartment life without the risk of the farm.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Akola</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Akola</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ramdas Peth, Gorakshan Road, Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Telhara / Balapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Telhara, Balapur, Murtizapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Washim</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Washim town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Buldhana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Buldhana, Lonar towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Akola's extreme Vidarbha heat (46–48°C)?", answer: "Aloe vera, cactus, snake plant (indoor AC only), and money plant (indoor water vase) are the most extreme-heat-adapted choices for Akola. Outdoor plants should ideally be planted in October–November for the cool season. Deep mulching and drip irrigation (or equivalent careful watering) are essential for outdoor plants during Akola's brutal April–June period. Lucky bamboo in a water vase handles any indoor AC environment regardless of outdoor temperature." },
      { question: "Is same-day plant delivery available in Akola?", answer: "Yes. Same-day delivery is available across Akola including Ramdas Peth, Gorakshan Road, and Civil Lines area. Order before 3 PM. We also deliver to Washim and Buldhana within 4–6 hours." },
      { question: "What plant is best for a cotton trader's office in Akola?", answer: "Lucky bamboo in a glass vase is the most popular corporate indoor plant for Akola's cotton trading offices — it's auspicious, low-maintenance, and universally appreciated. Peace lily in a ceramic pot adds elegance to office spaces and requires minimal care in AC environments. Areca palm in a large floor planter creates an impressive showroom or office reception ambience that speaks to prosperity and growth." },
      { question: "What plant is best for Diwali gifting in Akola?", answer: "Marigold in full golden bloom is the most festive Diwali plant for any Akola home — October is the perfect time for marigold in Akola's pleasant post-monsoon weather. Money plant in a terracotta pot is auspicious and universally appropriate. Lucky bamboo in a gift box is the standard Diwali corporate gift across Akola's business community. Rose plant gifted in October is a thoughtful gift for the excellent October–February blooming season." },
      { question: "Do you deliver plants to Lonar Crater (near Buldhana) from Akola?", answer: "Yes. Lonar (home to one of the world's rarest meteorite-impact saline lakes, a geological wonder of national significance in Buldhana district) is within our delivery zone with 4–6 hour service from Akola. Buldhana is served within 4–6 hours. Same-day delivery for orders placed before noon. The Lonar ecotourism community values native plant species for conservation gardening." }
    ]
  },

  "ambala": {
    cityName: "Ambala",
    metaTitle: "Buy Plants Online in Ambala | Haryana Cantt City Plants | RedHeart",
    metaDescription: "Order plants online in Ambala. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Haryana's scientific instruments city gets plant delivery.",
    h1: "Buy Plants Online in Ambala — Same-Day Plant Delivery in Haryana's Scientific Instruments City",
    metaKeyword: "plants online ambala, buy plants ambala, indoor plants ambala, plant delivery ambala haryana, marigold ambala, tulsi ambala, online nursery ambala cantt haryana",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ambala — Scientific Instruments Capital Gets Doorstep Greens</h2>

<p>Ambala is one of Haryana's most important cities — the "Scientific Instruments Capital of India" (Ambala produces the largest variety and volume of scientific, surgical, and optical instruments in India, from microscopes and surgical tools to temperature gauges), a major Indian Air Force and Army cantonment city, and a strategic junction on the main Delhi–Amritsar railway and road corridor. Ambala Cantonment (Ambala Cantt) — the military township — and Ambala City (the civilian commercial city) are two distinct urban entities that function together. The city sits at the crossroads of Haryana, Punjab, and Himachal Pradesh, giving it a cosmopolitan character unusual for its size.</p>

<p>Ambala's climate is north Indian: very hot summers (43°C), moderate monsoon (750 mm), cold winters (2–16°C). The good seasonal variation creates excellent gardening conditions for autumn-planted roses, winter marigold, and indoor plants year-round. RedHeart delivers across Ambala, Yamuna Nagar, Kurukshetra, and Panchkula with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Ambala Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Ambala Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Haryana Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Lohri, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cantt bungalow gardens, winter</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IAF/Army office, cantt homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Scientific instrument businesses, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, IAF station offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Haryana heat, practical</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Ambala Cantt's Garden Tradition and Scientific Precision in Plant Care</h3>

<p>Ambala Cantonment's officer bungalows and residential areas maintain an Indian Army garden tradition — well-tended lawns, rose beds, seasonal flower borders, and tulsi maadams are features of the military residential aesthetic. The IAF (Indian Air Force) Station at Ambala Cantt, one of India's most significant air bases, maintains similar high standards. Rose planted in October produces spectacular December–February blooms in Ambala's pleasant cold-weather season, and the Cantt's gardening tradition has created multigenerational expertise among military families in growing the north Indian garden's signature plants. The city's scientific instruments industry — with its workshops producing precision tools — brings an engineering mindset that extends naturally to the precision care of plants.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ambala</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambala City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sadar Bazaar, Nicholson Road, Subzi Mandi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambala Cantt</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IAF area, Army cantonment, Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Yamuna Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yamuna Nagar, Jagadhri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Panchkula</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Panchkula, Chandigarh adjacent</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most popular for Ambala Cantt army bungalow gardens?", answer: "Rose plant (planted October) is the defining army cantonment garden plant in Ambala — the Cantt's December–February rose bloom is one of north India's finest military garden displays. Marigold in terracotta pots adds Diwali colour to bungalow entrances. Tulsi in a central maadam is sacred for every Hindu officer's family home. Areca palm in a large pot creates a premium reception hall impression for senior officer bungalows." },
      { question: "Is same-day plant delivery available in Ambala?", answer: "Yes. Same-day delivery is available across Ambala City and Ambala Cantonment including the IAF area, Army cantonment, Civil Lines, Sadar Bazaar, and Nicholson Road. Order before 3 PM. We also deliver to Yamuna Nagar and Panchkula within 3–5 hours." },
      { question: "What plants grow best in Ambala's north Indian Haryana climate?", answer: "Rose (planted October), marigold (September–February), tulsi, money plant, snake plant, and aloe vera all do well in Ambala's north Indian climate. The cold clear winters (2–16°C) produce exceptional rose blooms. Diwali season marigold is spectacular in Ambala. Indoor plants thrive in heated rooms during winters. The moderate 750 mm monsoon provides adequate seasonal outdoor plant recharge." },
      { question: "What plant is best for gifting to an IAF officer in Ambala?", answer: "Peace lily in a ceramic planter is elegant and appropriate for IAF officers' gifting — it's low-maintenance and thrives in AC environments. Lucky bamboo in a glass vase is the standard gift for professional occasions. For a departure gift, areca palm in a large floor planter makes an impressive statement for a wing commander or above. Rose plant gifted in October for an officer's bungalow garden is a thoughtful seasonal gift." },
      { question: "Do you deliver plants to Yamuna Nagar from Ambala?", answer: "Yes. Yamuna Nagar (35 km from Ambala, known for plywood and paper industry, and the Hathni Kund Barrage on the Yamuna river) is within our 3–5 hour same-day delivery zone. Jagadhri (part of the Yamuna Nagar urban area) is simultaneously served. Same-day delivery for Yamuna Nagar orders placed before noon." }
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
