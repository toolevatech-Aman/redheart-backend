// Plants Tier 2 Batch 5 — 8 cities
// Asansol, Erode, Jamnagar, Bhilai, Rourkela, Guntur, Muzaffarpur, Gorakhpur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "asansol": {
    cityName: "Asansol",
    metaTitle: "Buy Plants Online in Asansol | Coal City Bengal Plants | RedHeart",
    metaDescription: "Order plants online in Asansol. Money plant, indoor plants & gifting combos. Same-day delivery. Starting ₹299. West Bengal's coal city gets plant delivery.",
    h1: "Buy Plants Online in Asansol — Same-Day Plant Delivery in West Bengal's Coal City",
    metaKeyword: "plants online asansol, buy plants asansol, indoor plants asansol, plant delivery asansol west bengal, money plant asansol, durga puja plants asansol, online nursery asansol",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Asansol — Damodar Valley's Industrial Heart Turns Green</h2>

<p>Asansol is West Bengal's second-largest city and one of eastern India's most important industrial centres — home to coal mining, steel, and engineering industries that define the Damodar Valley's industrial corridor. Located adjacent to Durgapur and close to Dhanbad (Jharkhand's coal capital), Asansol is the commercial hub of the Asansol-Durgapur urban agglomeration, West Bengal's fastest-growing urban region. The city has a diverse cultural population — Bengali, Bihari, Hindi-speaking workers from across India who came for the industries — creating a rich, cosmopolitan character.</p>

<p>Asansol's climate matches continental Bengal: very hot summers (42–44°C), an excellent monsoon (1,300 mm), and cool winters (8–18°C). The monsoon recharges the Damodar valley's soil richly. Durga Puja is Asansol's most significant festival — marigold, chrysanthemum, and shiuli drive plant demand. Indoor plants for the city's growing middle-class residential apartments are increasingly popular. RedHeart delivers across Asansol, Durgapur, Kulti, and Raniganj with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Asansol Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durga Puja, Diwali, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, coal company offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, industrial city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bengal gifting, thrives in humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Durga Puja and Air Quality in Asansol</h3>

<p>Asansol's Durga Puja celebrations rival Kolkata in enthusiasm — the city's diverse cultural population brings a rich mix of Bengali pandal traditions, Hindi devotional practice, and the vibrant energy of an industrial city that knows how to celebrate. Marigold garlands, chrysanthemum decorations, and shiuli (night jasmine) are the botanical heart of the Puja season. Diwali, celebrated widely by Asansol's Hindi-speaking industrial workforce, drives the second wave of plant demand in October–November.</p>

<p>Snake plant and peace lily are particularly relevant for Asansol given the industrial city's air quality concerns — the coal and steel plants in the surrounding area mean indoor air purification is practically valuable. Having 4–6 air-purifying plants in an Asansol apartment is a meaningful home improvement investment that goes beyond aesthetics.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Asansol</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Asansol</td><td style="border:1px solid #d1d5db;padding:8px 12px;">GT Road, Rambandhu Talab, Burnpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kulti / Raniganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kulti, Raniganj, Jamuria</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Durgapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durgapur City Centre, Benachity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dhanbad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dhanbad city, Jharia</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Durga Puja gifting in Asansol?", answer: "Marigold in full golden bloom is essential for Asansol's Durga Puja pandal decoration. Shiuli (night jasmine) is the most evocatively Bengali autumn plant gift. Chrysanthemum in white or yellow adds festive pandal colour. For a post-Puja lasting gift, anthurium or peace lily in a ceramic planter is elegant and appropriate for any Bengali family." },
      { question: "Is same-day plant delivery available in Asansol?", answer: "Yes. Same-day delivery is available across Asansol including GT Road, Rambandhu Talab, Burnpur, Kulti, and Raniganj. Order before 3 PM. We also deliver to Durgapur and can reach Dhanbad within 3–5 hours." },
      { question: "Which indoor plants improve air quality in Asansol?", answer: "Snake plant and peace lily are particularly valuable in Asansol given the city's proximity to coal and steel plants. Snake plant filters nitrogen oxides and formaldehyde; peace lily absorbs benzene, toluene, and VOCs. Both are effective in closed indoor spaces during winter when Asansol's industrial air quality is at its worst." },
      { question: "What plant is the best Diwali gift in Asansol?", answer: "Money plant in a terracotta or ceramic pot is universally popular for Asansol's Diwali gifting across its Bengali and Hindi-speaking communities. Lucky bamboo is the standard for corporate gifting in the coal and steel industry. Marigold plants in full bloom add festive decoration. Areca palm is an impressive premium Diwali gift for senior industrial officials." },
      { question: "Do you deliver plants to Dhanbad from Asansol?", answer: "Yes. Dhanbad is within 3–5 hours from our Asansol delivery network. Dhanbad's coal industry community has strong demand for indoor corporate gifting plants — lucky bamboo, peace lily, and money plant are popular. Same-day delivery to Dhanbad for orders placed before noon." }
    ]
  },

  "erode": {
    cityName: "Erode",
    metaTitle: "Buy Plants Online in Erode | Turmeric City Plants | RedHeart",
    metaDescription: "Order plants online in Erode. Jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Tamil Nadu's textile city gets fresh plant delivery.",
    h1: "Buy Plants Online in Erode — Same-Day Plant Delivery in the Turmeric City of India",
    metaKeyword: "plants online erode, buy plants erode, indoor plants erode, plant delivery erode tamil nadu, jasmine erode, online nursery erode turmeric city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Erode — Turmeric and Textile Capital Gets Doorstep Greens</h2>

<p>Erode is Tamil Nadu's sixth-largest city and one of India's most significant agricultural trading and textile manufacturing centres. Known as the "Turmeric City" for the massive turmeric market that trades the highest volumes of turmeric in Asia, Erode is also a major textile weaving hub — particularly for power looms producing dress materials, sarees, and other fabrics. The Bhavani and Cauvery rivers confluence near the city at Bhavani (the Sangameshwara Temple marks the spot), giving Erode an important sacred geography.</p>

<p>Erode's climate is hot and semi-arid Tamil Nadu: summers reach 40°C, rainfall comes from both southwest (600 mm) and northeast (300 mm) monsoons, and winters are warm (18–26°C). Jasmine, tulsi, hibiscus, and drought-tolerant outdoor plants do well in Erode's sunny, moderately dry climate. The prosperous turmeric and textile trading community creates significant corporate gifting demand. RedHeart delivers across Erode, Gobichettipalayam, Bhavani, and Tiruppur (adjacent) with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Erode Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Local Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, temple use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily pooja, every Tamil home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Turmeric trader gifting, Pongal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles heat, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, textile offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Skincare, semi-arid outdoor plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Erode's Trading Heritage and Plant Culture</h3>

<p>Erode's identity is defined by trade — the turmeric market at Erode is Asia's largest, and the surrounding region's Gounder farmers and traders are known for their commercial acumen and prosperity. The city's Bhavani river confluences drive demand for puja flowers year-round, particularly at the Bhavani Sangameshwara temple. Tamil New Year (Pongal, Ugadi) drives the biggest plant gifting occasions. The city's Gounder business community is the backbone of local commerce — lucky bamboo and money plant in premium planters are the most popular corporate plant gifts for inter-business gifting during Pongal and Deepavali.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Erode</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Erode</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Erode Junction, Chithode, Perundurai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhavani / Gobichettipalayam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhavani, Gobichettipalayam towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tiruppur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tiruppur city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dharapuram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dharapuram, Palladam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Erode's semi-arid Tamil Nadu climate?", answer: "Jasmine, hibiscus, tulsi, aloe vera, and snake plant thrive in Erode's sunny, warm conditions. The dual monsoon (southwest and northeast) provides sufficient total rainfall for outdoor plants. Jasmine blooms strongly in Erode's warm, sunny climate — plant in full morning sun and water daily for best results." },
      { question: "Is same-day plant delivery available in Erode?", answer: "Yes. Same-day delivery is available across Erode including Erode Junction, Chithode, and Perundurai. Order before 3 PM. We also deliver to Bhavani and Gobichettipalayam within 3–5 hours." },
      { question: "What plant is best for Pongal gifting in Erode?", answer: "Marigold plant in full golden bloom is the most festive Pongal gift in Erode. Tulsi in a decorated maadam is sacred for Tamil homes. Lucky bamboo or money plant in a ceramic pot is popular for corporate Pongal gifting among Erode's trading community. A jasmine plant is the most culturally meaningful personal gift for any Tamil family." },
      { question: "Which plant is popular for inter-business gifting in Erode's turmeric market?", answer: "Lucky bamboo (especially 9-stalk arrangements symbolising growth) and money plant in premium ceramic pots are the standard inter-business gifts in Erode's turmeric and textile trading community. Peace lily in a large planter is appropriate for senior business relationship gifting. Areca palm in a decorative pot makes an impressive statement for major business occasions." },
      { question: "Do you deliver plants to Bhavani and Gobichettipalayam?", answer: "Yes. Bhavani (at the Cauvery-Bhavani confluence, an important pilgrimage and trading centre) and Gobichettipalayam are within 3–5 hours from our Erode network. Same-day delivery for these towns with orders placed before noon." }
    ]
  },

  "jamnagar": {
    cityName: "Jamnagar",
    metaTitle: "Buy Plants Online in Jamnagar | Brass City Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Jamnagar. Tulsi, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Gujarat's brass city gets fresh plant delivery.",
    h1: "Buy Plants Online in Jamnagar — Same-Day Plant Delivery in Gujarat's Brass City",
    metaKeyword: "plants online jamnagar, buy plants jamnagar, indoor plants jamnagar, plant delivery jamnagar gujarat, tulsi jamnagar, money plant jamnagar, online nursery jamnagar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jamnagar — Marine National Park City Gets Doorstep Greens</h2>

<p>Jamnagar is one of Gujarat's most culturally distinctive cities — the former capital of the Nawanagar princely state, made famous by the legendary cricketer Ranjitsinhji (who played for England and later ruled Nawanagar) and his even more legendary nephew Duleepsinhji. The city is known as the "Brass City" (though Moradabad also claims this title) for its traditional brass fitting manufacturing — Jamnagar produces 40% of India's brass components for plumbing, sanitary fittings, and electrical connectors. The Marine National Park in the Gulf of Kachchh, just offshore from Jamnagar, is India's first marine national park and protects extraordinary coral reefs, mangroves, and sea life. Reliance Industries' Jamnagar refinery complex (the world's largest oil refining complex) has transformed the city's economy and population in recent decades.</p>

<p>Jamnagar's climate is semi-arid coastal Gujarat: hot summers (40°C), limited monsoon (450 mm — one of Gujarat's drier cities), and warm dry winters (14–24°C). Despite the dry climate, Jamnagar residents maintain home gardens with drought-adapted plants — aloe vera, tulsi, succulent collections, and bougainvillea are popular. Indoor plants thrive in Jamnagar's homes and offices. RedHeart delivers across Jamnagar, Dwarka, Rajkot (adjacent), and Porbandar with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Jamnagar Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Vaishnava home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desert-suitable, skincare</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Reliance / brass offices, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low (water vase)</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, refinery offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low-moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Compound, drought-hardy coastal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low once established</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Jamnagar's Royal Heritage, Refinery Economy, and Plant Culture</h3>

<p>Jamnagar's identity spans from its royal past (Ranjitsinhji's Jamnagar had beautiful royal gardens at Lakhota Palace on the island in the centre of the city) to its industrial present (Reliance's refinery employs tens of thousands and has transformed the city's economy). The old city's Bedi port, the Khambhaliya Gate area, and the traditional brass fitting workshops of Dhuru Bazaar reflect centuries of Jamnagar's commercial identity. The Vaishnava and Jain communities that dominate Jamnagar's traditional business and commercial life maintain deep sacred plant traditions — tulsi maadam in every home, marigold for Navratri and Diwali.</p>

<p>Dwarka — one of Hinduism's four sacred dhams (pilgrimage centres), just 130 km from Jamnagar — is deeply connected to Jamnagar's cultural identity. The pilgrimage route from Jamnagar to Dwarka makes this region one of Gujarat's most spiritually significant corridors. Plant gifting, particularly tulsi and marigold, is appropriate for any Jamnagar family with connections to the Dwarka pilgrimage tradition.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jamnagar</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Jamnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lakhota area, Indira Marg, Station Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Reliance Township / New Jamnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moti Khavdi, Digvijay Plot, Reliance area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Dwarka</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dwarka temple town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">On request</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Porbandar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Porbandar, Mahuva (Bhavnagar dist.)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">On request</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Jamnagar's dry coastal Gujarat climate?", answer: "Tulsi with daily watering, aloe vera (very low water), snake plant, money plant, bougainvillea (drought-hardy once established), and succulent collections all handle Jamnagar's 450 mm rainfall. Use well-draining soil, water deeply but infrequently for outdoor plants, and keep moisture-loving tropical plants in shaded, watered indoor spaces." },
      { question: "Is same-day plant delivery available in Jamnagar?", answer: "Yes. Same-day delivery is available across Jamnagar including Lakhota area, Station Road, Digvijay Plot, and Reliance township area. Order before 3 PM. We serve the Reliance Industries residential township regularly for indoor plant orders." },
      { question: "Which plant is most sacred for Jamnagar's Vaishnava and Jain community?", answer: "Tulsi (holy basil) is the most sacred plant for Jamnagar's Vaishnava community — tended daily and essential to Swaminarayan and Vaishnava worship. Jain tradition, which values non-violence and reverence for all living beings, particularly appreciates plants for their life-giving presence. Money plant and tulsi in premium planters are meaningful gifting choices for both communities." },
      { question: "What plant is best for a Reliance Industries employee's home in Jamnagar?", answer: "Peace lily in a ceramic planter is elegant and appropriate for Reliance employees' well-maintained township homes. Areca palm creates a premium tropical ambience in larger homes. Money plant in a hanging planter is popular for apartment balconies. Snake plant is the most practical for busy executives — it survives irregular watering and handles AC office environments." },
      { question: "Do you deliver plants to Dwarka from Jamnagar?", answer: "Dwarka deliveries require advance scheduling due to the 130 km distance. Contact us for Dwarka orders — we arrange special deliveries with 24 hours advance notice. Tulsi plants and marigold for Dwarkadhish Temple worship are the most commonly requested plants for Dwarka. Same-day coverage within central Jamnagar is fully available." }
    ]
  },

  "bhilai": {
    cityName: "Bhilai",
    metaTitle: "Buy Plants Online in Bhilai | Steel City Chhattisgarh Plants | RedHeart",
    metaDescription: "Order plants online in Bhilai. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Chhattisgarh's steel city gets fresh plant delivery.",
    h1: "Buy Plants Online in Bhilai — Same-Day Plant Delivery in Chhattisgarh's Steel City",
    metaKeyword: "plants online bhilai, buy plants bhilai, indoor plants bhilai, plant delivery bhilai chhattisgarh, money plant bhilai, online nursery bhilai steel city durg",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bhilai — Chhattisgarh's Planned Steel City Goes Green</h2>

<p>Bhilai is Chhattisgarh's most important industrial city — built around the Bhilai Steel Plant (BSP), one of India's largest integrated steel plants established in 1959 with Soviet assistance as part of Nehru's industrial vision for independent India. Like Jamshedpur and Durgapur, Bhilai is a planned company town with wide boulevards, sector-based residential organisation, parks, and institutional green spaces that give it a quality of urban planning rare in central India. The Bhilai-Durg-Raipur urban cluster is Chhattisgarh's most significant metropolitan area, and Bhilai is its industrial and corporate heart.</p>

<p>Bhilai's climate is hot Chhattisgarh: summers reach 44°C, the monsoon is good (1,200 mm), and winters are pleasantly cool (8–18°C). The good monsoon and BSP township's planned green spaces create a plant-friendly environment. Tulsi, marigold, rose, and indoor plants are popular across Bhilai's diverse SAIL employee and contractor community. RedHeart delivers across Bhilai, Durg, Rajnandgaon, and Raipur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Bhilai Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Hindu home, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Durga Puja, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">BSP township gardens, winter</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, BSP executive quarters</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, SAIL offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">BSP GM quarters, reception areas</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">BSP Township Garden Heritage and Plant Culture</h3>

<p>Bhilai Steel Plant's residential township — covering sectors 1 through 9 — maintains one of central India's finest planned residential environments. The BSP township's Parks and Gardens department has maintained rose gardens, seasonal flower beds, avenue trees, and institutional gardens since the plant's founding. This systematic horticultural management has created a population unusually aware of and interested in plants for a central Indian industrial city. BSP officers' quarters (Type-V, VI, and VII) have maintained private gardens with roses, marigold, and seasonal plants for decades — creating multigenerational gardening traditions within the township.</p>

<p>The diverse employee population of Bhilai's steel plant — drawn from across India, particularly Odisha, Jharkhand, Bengal, Maharashtra, and Chhattisgarh — brings multiple plant traditions together. Durga Puja (particularly significant for the Odia and Bengali workforce), Diwali (the dominant Hindi-belt festival), and Chhattisgarhi harvest festivals all drive seasonal plant demand.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bhilai</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">BSP Township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sectors 1–9, Steel Gate, Civic Centre</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Durg City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durg, Risali, Charoda</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajnandgaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajnandgaon town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Raipur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Raipur city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for a BSP officer's quarters in Bhilai?", answer: "Rose plant (planted October) is the traditional BSP township garden choice — Bhilai's cool October–March winter creates excellent rose-growing conditions, and the township's rose garden tradition is multi-generational. Areca palm in the reception area of larger Type-V or VI quarters creates a premium ambience. Peace lily and money plant are popular indoor choices for BSP executive homes." },
      { question: "Is same-day plant delivery available in Bhilai?", answer: "Yes. Same-day delivery is available across Bhilai including BSP Sectors 1–9, Civic Centre, Steel Gate, and Durg city. Order before 3 PM. We also deliver to Raipur within 3–5 hours." },
      { question: "Which plants grow well in Bhilai's Chhattisgarh climate?", answer: "Rose, marigold, tulsi, money plant, snake plant, and areca palm all do well in Bhilai. The 1,200 mm monsoon is excellent for outdoor plant establishment. October–March is the prime gardening window. Indoor plants thrive year-round in Bhilai's homes and offices. The BSP township's rich soil (maintained by the Parks department for decades) benefits garden plants significantly." },
      { question: "What plant is best for Durga Puja gifting in Bhilai's Bengali community?", answer: "Marigold for the puja pandal and shiuli (night jasmine) for the autumnal atmosphere are the most evocative Bengali Durga Puja plant gifts. Chrysanthemum in full bloom adds festive colour. For a post-Puja lasting gift for a Bengali BSP family, anthurium or peace lily in a ceramic planter is elegant and culturally appreciated." },
      { question: "Do you deliver plants to Raipur from Bhilai?", answer: "Yes. Raipur (Chhattisgarh's capital, already seeded separately in our Tier 1 batch) is within 3–5 hours from our Bhilai delivery network. Full same-day delivery coverage is also available directly in Raipur. The Bhilai–Durg–Raipur corridor is a key delivery zone for us in Chhattisgarh." }
    ]
  },

  "rourkela": {
    cityName: "Rourkela",
    metaTitle: "Buy Plants Online in Rourkela | Steel City Odisha Plants | RedHeart",
    metaDescription: "Order plants online in Rourkela. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Odisha's steel city gets fresh plant delivery.",
    h1: "Buy Plants Online in Rourkela — Same-Day Plant Delivery in Odisha's Steel City",
    metaKeyword: "plants online rourkela, buy plants rourkela, indoor plants rourkela, plant delivery rourkela odisha, money plant rourkela, online nursery rourkela NIT odisha",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Rourkela — Steel City of Odisha Goes Green</h2>

<p>Rourkela is Odisha's second-largest city and home to Rourkela Steel Plant (RSP), one of SAIL's four integrated steel plants, established in 1959 with West German technical assistance. Like Bhilai and Durgapur, Rourkela is a planned company town with well-maintained sector layouts, parks, and institutional green spaces. NIT Rourkela (National Institute of Technology) is one of the oldest NITs in India, producing engineers who have shaped India's technology landscape. The city sits at the confluence of the Koel and Sankh rivers in Sundargarh district, surrounded by the Chhota Nagpur plateau's forested hills.</p>

<p>Rourkela's climate benefits from its forested surroundings: summers reach 42°C, monsoon is very good (1,500 mm), and winters are pleasantly cool (8–18°C). The excellent rainfall and hilly setting create better plant-growing conditions than most steel cities. Money plant, tulsi, marigold, peace lily, and tropical indoor plants thrive in Rourkela. RedHeart delivers across Rourkela, Sundargarh, Jharsuguda, and Sambalpur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Rourkela Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Odia Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durga Puja, Nuakhai, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, RSP / NIT offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, NIT hostel rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, thrives in Rourkela humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Odia garden, Devi worship</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Nuakhai, Odia Culture, and Rourkela's Plant Traditions</h3>

<p>Rourkela's majority Odia cultural identity centres on Nuakhai — Odisha's rice harvest festival (particularly important in western Odisha where Rourkela is located) — and Durga Puja. Nuakhai (celebrated in August–September) is when new rice is offered to the goddess and families gather for celebrations with flowers and food — marigold, hibiscus, and white flowers are part of the Nuakhai offerings. Durga Puja is celebrated by both the Odia and Bengali populations in Rourkela's RSP township with great enthusiasm.</p>

<p>NIT Rourkela's campus, with its botanical features and student population from across India, creates a plant-aware community that values both traditional Indian plants and contemporary indoor plants. Student demand for desk plants — money plant, lucky bamboo, and snake plant — is consistent year-round around the NIT campus area.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Rourkela</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">RSP Township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">RSP Sectors, Ispat Nagar, NIT area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhend / Panposh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhend Colony, Panposh, Udit Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sundargarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sundargarh town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jharsuguda / Sambalpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jharsuguda, Sambalpur towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for Nuakhai gifting in Rourkela?", answer: "Marigold in full bloom for Nuakhai offerings is the most traditional choice for western Odisha. White hibiscus or a fragrant jasmine plant complements the harvest festival's natural theme. For a lasting Nuakhai gift, a money plant in a terracotta pot is auspicious and cheerful. Tulsi in a decorated maadam is sacred for any Hindu family celebrating Nuakhai." },
      { question: "Is same-day plant delivery available in Rourkela?", answer: "Yes. Same-day delivery is available across Rourkela including RSP Sectors, NIT Rourkela area, Chhend Colony, Panposh, and Udit Nagar. Order before 3 PM. We also deliver to Sundargarh and can reach Jharsuguda within 4–6 hours." },
      { question: "Which plants grow best in Rourkela's forested Chhota Nagpur setting?", answer: "Rourkela's 1,500 mm monsoon and forested surroundings create excellent conditions for a wide range of plants. Money plant, peace lily, anthurium, hibiscus, tulsi, marigold, and rose all grow with vigour. The cool October–February winter is perfect for outdoor flowering plants. Anthurium grows particularly well in Rourkela's humid forested climate." },
      { question: "Which plants are best for NIT Rourkela students?", answer: "Money plant in a small water vase, snake plant in a 4-inch pot, and lucky bamboo in a glass bowl are perfect for NIT hostel rooms — minimal care, low cost, and thrive in window-sill indirect light. These plants handle the irregular care of busy NIT students and make popular gifts during hostel freshers' events." },
      { question: "Do you deliver plants to Sambalpur from Rourkela?", answer: "Yes. Sambalpur is within 4–6 hours from our Rourkela delivery network. Jharsuguda (an important Odisha coal and industrial hub) is similarly accessible. Both towns have growing demand for indoor plants and corporate gifting. Same-day delivery to Sundargarh (the district headquarters) for orders placed before noon." }
    ]
  },

  "muzaffarpur": {
    cityName: "Muzaffarpur",
    metaTitle: "Buy Plants Online in Muzaffarpur | Litchi City Bihar Plants | RedHeart",
    metaDescription: "Order plants online in Muzaffarpur. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Bihar's litchi city gets fresh plant delivery.",
    h1: "Buy Plants Online in Muzaffarpur — Same-Day Plant Delivery in Bihar's Litchi City",
    metaKeyword: "plants online muzaffarpur, buy plants muzaffarpur, indoor plants muzaffarpur, plant delivery muzaffarpur bihar, marigold muzaffarpur, online nursery muzaffarpur litchi city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Muzaffarpur — Litchi Capital of India Gets Doorstep Greens</h2>

<p>Muzaffarpur is Bihar's second-largest city and the "Litchi City of India" — the Shahi litchi grown in the Muzaffarpur region is one of India's most prized fruits, famous across the country and internationally for its extraordinary sweetness and delicate flavour (it holds a Geographical Indication tag). The Gandak river and the terai's fertile soil make the Muzaffarpur belt one of north Bihar's most agriculturally productive regions. The city is also a significant educational centre with LNMU (Lalit Narayan Mithila University) and several engineering colleges.</p>

<p>Muzaffarpur's climate is north Bihar: very hot and humid summers (42°C), an excellent monsoon (1,100 mm), and cool winters (8–15°C). The excellent monsoon creates good soil conditions for outdoor plants. Tulsi, marigold, rose, and indoor plants are the primary plant categories for Muzaffarpur homes. Chhath Puja — Bihar's most significant festival — is a major plant demand occasion when fresh flowers and plants are offered at the river ghats. RedHeart delivers across Muzaffarpur, Sitamarhi, Darbhanga, and Hajipur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Muzaffarpur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Bihar Festival Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Diwali, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Bihari Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles Bihar extremes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, business</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, university offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Banana Plant (decorative)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, wedding mandap</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Chhath Puja and the Sacred Plant Traditions of North Bihar</h3>

<p>Chhath Puja — Bihar's most iconic festival, celebrated in October–November across the state — is the defining cultural event for Muzaffarpur's population. The four-day festival of sun worship involves standing in the Gandak river at sunrise and sunset, offering arghya to the sun, and presents an extraordinary spectacle of devotion. Plants are central to Chhath: banana plant stems (used to create the offering altar), sugarcane, turmeric plant, daura (bamboo), and marigold flowers are all part of the elaborate puja thali. Growing your own banana plant, tulsi, and marigold for Chhath Puja has deep religious significance in Bihar.</p>

<p>Muzaffarpur's fertile terai agricultural belt also gives the city's population an unusually close connection to growing things — litchi orchards, mango groves, and vegetable farms surround the city. This agricultural consciousness translates into enthusiastic home gardening culture, particularly in the pleasant October–February cool season when roses and marigold bloom beautifully.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Muzaffarpur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Muzaffarpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Budh Bazaar, Mithanpura, Juran Chapra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Saraiyaganj / Kanti</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Saraiyaganj, Kanti, Maniyari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sitamarhi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sitamarhi town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Darbhanga</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Darbhanga city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are used in Chhath Puja in Muzaffarpur?", answer: "Banana plant (kela) is the most essential Chhath Puja plant in Bihar — its stems and leaves form the offering platform and the puja thali display. Marigold (gainda) flowers are offered in large quantities. Sugarcane, turmeric plant, and daura bamboo are also traditional Chhath elements. Tulsi is sacred for the daily worship context. Growing your own banana plant and marigold for Chhath is deeply meaningful in Muzaffarpur." },
      { question: "Is same-day plant delivery available in Muzaffarpur?", answer: "Yes. Same-day delivery is available across Muzaffarpur including Budh Bazaar, Mithanpura, Juran Chapra, Saraiyaganj, and Kanti. Order before 3 PM. We also deliver to Sitamarhi within 3–5 hours and Darbhanga within 4–6 hours." },
      { question: "When is the best time to plant roses in Muzaffarpur?", answer: "October is the ideal rose planting time in Muzaffarpur. The cool October–February Bihar winter produces excellent rose blooms — December through February is peak season. The excellent 1,100 mm monsoon recharges soil richly. Muzaffarpur's fertile Gandak river alluvial soil is naturally good for roses with added compost and good drainage." },
      { question: "Which plants handle Muzaffarpur's hot humid Bihar summer?", answer: "Snake plant, ZZ plant, money plant (indoor water vase), and tulsi in deep shade all handle Muzaffarpur's hot humid May–June period. Keep moisture-loving indoor plants in AC rooms during the hottest weeks. The monsoon (July–September) provides relief for outdoor plants — many restart growth after the first rains." },
      { question: "Do you deliver plants to Darbhanga from Muzaffarpur?", answer: "Yes. Darbhanga (the cultural capital of Mithila region) is within 4–6 hours from our Muzaffarpur network. Darbhanga's Mithila painting tradition and its Sanskrit-educated community have strong plant traditions — tulsi and marigold are significant in Mithila's ritual culture. Same-day delivery to Sitamarhi (birthplace of Sita) for orders placed before noon." }
    ]
  },

  "gorakhpur": {
    cityName: "Gorakhpur",
    metaTitle: "Buy Plants Online in Gorakhpur | Gorakhpur Temple City Plants | RedHeart",
    metaDescription: "Order plants online in Gorakhpur. Marigold, tulsi, indoor plants & gifting combos. Same-day delivery. Starting ₹299. UP's temple city gets fresh plant delivery.",
    h1: "Buy Plants Online in Gorakhpur — Same-Day Plant Delivery in the City of Gorakhnath",
    metaKeyword: "plants online gorakhpur, buy plants gorakhpur, indoor plants gorakhpur, plant delivery gorakhpur uttar pradesh, marigold gorakhpur, tulsi gorakhpur, online nursery gorakhpur gorakhnath",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Gorakhpur — Gorakhnath's Sacred City Gets Doorstep Greens</h2>

<p>Gorakhpur is one of eastern Uttar Pradesh's most significant cities — the headquarters of Gorakhpur Division, home to the famous Gorakhnath Temple (seat of the Nath yoga tradition, the most revered temple in eastern UP, and closely associated with the current Chief Minister of Uttar Pradesh Yogi Adityanath), AIIMS Gorakhpur (one of India's newest All-India Institute of Medical Sciences), Gorakhpur University, and the Gorakhpur Railway Locomotive Works (one of India's largest railway workshops). The Rapti river flows through the city, and the surrounding Terai region's forests and fertile plains create a productive agricultural hinterland.</p>

<p>Gorakhpur's climate is eastern UP: very hot summers (42–44°C), an excellent monsoon (1,100 mm), and cool winters (6–14°C). The good monsoon creates excellent outdoor plant conditions. Tulsi, marigold, rose, mogra, and indoor plants are the core plant categories for Gorakhpur's devout Hindu population. The Gorakhnath Temple draws hundreds of thousands of devotees annually — plant gifting around the temple's cultural calendar is significant. RedHeart delivers across Gorakhpur, Deoria, Kushinagar, and Basti with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Gorakhpur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sacred / Festival Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Gorakhnath Temple tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Chhath, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, AIIMS and university offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Summer fragrance, puja offerings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Sep</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, railway loco works</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, AIIMS doctors</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Gorakhnath Temple and Sacred Plant Traditions</h3>

<p>The Gorakhnath Temple is one of eastern Uttar Pradesh's most important sacred sites — the seat of the Nath sampradaya, an ancient Shaiva yogic tradition that venerates Gorakhnath as its founding master. The temple's gardens are carefully maintained with tulsi, bel (aegle marmelos, sacred to Shiva), jasmine, marigold, and other sacred plants. Devotees bring fresh flowers — particularly marigold — for daily offerings at the temple. Tulsi is grown in nearly every Hindu home in Gorakhpur as part of the deeply ingrained Vaishnava-Shaiva devotional culture of eastern UP.</p>

<p>Gorakhpur's proximity to the Nepal border (50 km), to Kushinagar (where the Buddha attained parinirvana — a major Buddhist pilgrimage site), and to the Terai's forests creates a city with diverse cultural influences. Buddhist visitors and the Tibetan Buddhist community at Kushinagar have a distinct plant aesthetic. The excellent monsoon and fertile Terai soil make Gorakhpur's gardening conditions genuinely good for most plant varieties.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Gorakhpur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Gorakhpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gorakhnath, Golghar, Betiahata</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Railway Colony / AIIMS area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rly. Colony, AIIMS, Ramgarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Deoria / Kushinagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Deoria, Kushinagar towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Basti</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Basti town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are sacred at Gorakhnath Temple in Gorakhpur?", answer: "Tulsi is the most sacred plant associated with Gorakhpur's Nath yogic tradition. Bel (bilva patra, aegle marmelos) is sacred to Shiva and offered at Shiva temples — growing a bel tree at home is deeply auspicious. Marigold garlands are offered daily at the temple. Dhatura (Datura metel) is sacred to Shiva but is not a home plant — instead, jasmine and mogra are the most appropriate fragrant sacred plants for home gardens." },
      { question: "Is same-day plant delivery available in Gorakhpur?", answer: "Yes. Same-day delivery is available across Gorakhpur including Gorakhnath area, Golghar, Betiahata, Railway Colony, and AIIMS. Order before 3 PM. We also deliver to Deoria and Kushinagar within 3–5 hours." },
      { question: "What plant is best for gifting to an AIIMS Gorakhpur doctor?", answer: "Peace lily in a ceramic planter is the most appropriate gift for AIIMS medical professionals — it's elegant, air-purifying (relevant in a medical environment), and easy to maintain. Lucky bamboo in a glass vase is a standard desk gift. For a more significant occasion (retirement, farewell), an areca palm in a large decorative pot makes an impressive and lasting gift." },
      { question: "Which plants grow best in Gorakhpur's eastern UP Terai climate?", answer: "Rose, marigold, tulsi, mogra, snake plant, money plant, and peace lily all thrive in Gorakhpur's excellent 1,100 mm monsoon and warm-cool cycle. The Terai's fertile alluvial soil is rich and well-draining. October–March is the prime gardening window — rose and marigold bloom spectacularly in the pleasant cool season." },
      { question: "Do you deliver plants to Kushinagar (Buddhist pilgrimage site) from Gorakhpur?", answer: "Yes. Kushinagar (where the Buddha attained parinirvana) is within 3–5 hours from our Gorakhpur delivery network. The Buddhist pilgrimage community at Kushinagar values lotus plants (sacred to Buddhism), peace lily, and serene indoor plants for monastery and meditation hall settings. Same-day delivery to Deoria for orders placed before noon." }
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
