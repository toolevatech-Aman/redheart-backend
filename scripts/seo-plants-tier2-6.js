// Plants Tier 2 Batch 6 — 8 cities
// Jhansi, Ujjain, Thrissur, Guntur, Cuttack, Mathura, Aligarh, Panipat

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "jhansi": {
    cityName: "Jhansi",
    metaTitle: "Buy Plants Online in Jhansi | Bundelkhand City Plants | RedHeart",
    metaDescription: "Order plants online in Jhansi. Marigold, tulsi, indoor plants. Same-day delivery. Starting ₹299. Rani Lakshmibai's city gets fresh plant delivery.",
    h1: "Buy Plants Online in Jhansi — Same-Day Plant Delivery in the City of Rani Lakshmibai",
    metaKeyword: "plants online jhansi, buy plants jhansi, indoor plants jhansi, plant delivery jhansi uttar pradesh, marigold jhansi, tulsi jhansi, online nursery jhansi bundelkhand",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jhansi — Bundelkhand's Historic City Goes Green</h2>

<p>Jhansi is the gateway city of Bundelkhand — the rugged, historically rich plateau region spanning southern Uttar Pradesh and northern Madhya Pradesh. Famous as the kingdom of Rani Lakshmibai, the warrior queen who led the 1857 uprising against the British East India Company, Jhansi carries a fierce, proud cultural identity. The Jhansi Fort (standing since the 17th century, its current form built by the Maratha chief Bir Singh Deo in 1613) dominates the city's skyline and attracts significant tourism. The city is also an important railway junction on the Delhi–Chennai main line and a regional commercial and educational hub for Bundelkhand.</p>

<p>Jhansi's climate is classic Bundelkhand — hot and dry. Summers are intense (44–46°C), one of the hottest in Uttar Pradesh. The monsoon is moderate (850 mm), and winters are pleasantly cool (6–18°C). Drought-adapted plants perform best in Jhansi's conditions. Tulsi, marigold (winter season), rose (November–March), aloe vera, and heat-hardy flowering plants are the most popular choices for Jhansi homes. RedHeart delivers across Jhansi, Orchha, Lalitpur, and Datia with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Jhansi Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Bundelkhand home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, cool season</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Bundelkhand heat, skincare</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles extreme heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fort-city compound, drought-hardy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–May</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Bundelkhand's Plant Culture and Jhansi's Heritage</h3>

<p>Bundelkhand's plant culture is deeply shaped by water scarcity and a fierce relationship with the land. The region's traditional sacred groves (devi sthals) and village water bodies were managed with reverence for nature — a culture that modern gardening connects back to. In Jhansi, the Rani Lakshmibai cultural heritage drives tourism, and the fort's surrounding precincts are gardens of history. The city's growing educated middle class (with IIT BHU graduates, medical professionals, and government employees) increasingly values indoor plants for homes and offices.</p>

<p>Diwali is Jhansi's biggest plant occasion — marigold plants in full bloom decorate every home across the city. Navratri and the local Ram Navami celebrations (Bundelkhand is deeply Rambhakt) drive significant marigold and tulsi demand. Orchha (30 km from Jhansi) — the medieval Bundela capital with extraordinary temples — draws tourists who often bring plant gifts for hosts.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jhansi</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Jhansi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sipri Bazar, Sadar, Fort area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Cantt / New Jhansi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Army Cantt, Gole Ka Mandir area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Orchha</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Orchha town, temple complex</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lalitpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lalitpur town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Jhansi's intense Bundelkhand summer heat?", answer: "Tulsi (with daily morning water), aloe vera, snake plant, money plant (indoor AC), bougainvillea (drought-hardy once rooted), and cactus/succulent collections survive Jhansi's 44–46°C peak. Keep moisture-loving plants in shaded indoor spaces during May–June. Deep watering every 2–3 days is better than daily light watering for outdoor plants in Bundelkhand's dry soil." },
      { question: "Is same-day plant delivery available in Jhansi?", answer: "Yes. Same-day delivery is available across Jhansi including Sipri Bazar, Sadar area, Cantt, and Fort vicinity. Order before 3 PM. We also deliver to Orchha (30 km) within 3–5 hours — ideal for gifting to Orchha's tourism and hospitality community." },
      { question: "What plant is most auspicious for a Bundelkhand home in Jhansi?", answer: "Tulsi (grown in a maadam) is the most sacred and auspicious plant for any Hindu home in Bundelkhand. Bundelkhand's deep Rambhakt (Ram devotion) tradition makes tulsi particularly significant — it is considered the most blessed plant in Vaishnava-Hindu homes. Marigold planted in the courtyard brings festival colour for Diwali and Navratri." },
      { question: "What plant should I gift a friend in Jhansi for Diwali?", answer: "Marigold in full golden bloom is the most festive Diwali gift for any Jhansi home. Money plant in a terracotta pot is auspicious and practical. Lucky bamboo in a glass vase is the standard choice for a corporate Diwali gift in Jhansi's business community. Rose plant (gifted in October to be planted immediately for the November–March bloom) is a thoughtful seasonal gift." },
      { question: "Do you deliver plants to Orchha from Jhansi?", answer: "Yes. Orchha (the medieval Bundela capital) is 30 km from Jhansi and within our same-day delivery zone with 3–5 hour delivery. Orchha's hospitality and homestay economy has demand for terrace and balcony plants — bougainvillea, jasmine, and tulsi are popular in Orchha's heritage properties. Order before noon for same-day Orchha delivery." }
    ]
  },

  "ujjain": {
    cityName: "Ujjain",
    metaTitle: "Buy Plants Online in Ujjain | Mahakal City Madhya Pradesh Plants | RedHeart",
    metaDescription: "Order plants online in Ujjain. Tulsi, marigold, indoor plants. Same-day delivery. Starting ₹299. City of Mahakal gets fresh plant delivery.",
    h1: "Buy Plants Online in Ujjain — Same-Day Plant Delivery in the City of Mahakaleshwar",
    metaKeyword: "plants online ujjain, buy plants ujjain, indoor plants ujjain, plant delivery ujjain madhya pradesh, tulsi ujjain, marigold ujjain, online nursery ujjain mahakal kumbh",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ujjain — One of India's Seven Sacred Cities Gets Doorstep Greens</h2>

<p>Ujjain is one of Hinduism's seven sacred cities (Saptapuri), the home of the Mahakaleshwar Jyotirlinga (one of the twelve Jyotirlingas of Shiva, attracting millions of devotees annually), and the site of the Simhastha (Kumbh) Mela — one of the world's largest religious gatherings held every twelve years on the banks of the Shipra river. The city was once the ancient Avantika, capital of the powerful Avanti kingdom, and the meridian of the ancient Indian world — ancient Indian astronomers used Ujjain as the Prime Meridian for their calculations. Maharaja Vikramaditya, the legendary golden-age emperor, ruled from Ujjain. The Vedic clock tower at Jantar Mantar Ujjain still marks the ancient meridian.</p>

<p>Ujjain's climate is Malwa plateau Madhya Pradesh: hot summers (42°C), a good monsoon (900 mm), and pleasant cool winters (8–18°C). Tulsi is the single most important plant in Ujjain given its deep spiritual culture. Marigold, bel (bilva), and dhatura are sacred plants associated with Shiva worship at Mahakaleshwar. Indoor plants for apartments and offices have growing demand. RedHeart delivers across Ujjain, Dewas, Nagda, and Agar Malwa with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Ujjain Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Mahakaleshwar tradition, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahakal abhishek garlands, Diwali, Navratri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, prasad offerings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, Malwa gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles Malwa heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Kumbh year souvenirs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Vikram University</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple offering fragrance, summer blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Sep</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sacred Plants of Ujjain — The City of Mahakaleshwar</h3>

<p>Ujjain's plant culture is inseparable from its religious identity. Bel (bilva patra, aegle marmelos) is the most sacred plant to Shiva — its trifoliate leaves are used in every Shiva puja and are particularly significant at the Mahakaleshwar temple where devotees offer bel leaves with the main abhishek. Tulsi is universally present in every home's courtyard. Marigold garlands are offered at the temple daily. Jasmine (chameli, mogra) is used for temple offerings and home fragrance. The Simhastha Kumbh Mela, held every 12 years on the Shipra river, creates the single largest temporary gathering of people in the world — in those years, Ujjain's plant and flower demand spikes enormously for the festival.</p>

<p>Ujjain's Vikram University (named after Maharaja Vikramaditya) and the city's Sanskrit pathshalas bring a learned, traditionally aware population that values plants deeply. The growing contemporary middle class in Ujjain's residential areas (Freeganj, Madhav Nagar, Nanakheda) is an increasingly strong indoor plant market.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ujjain</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahakal / Old Ujjain</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahakal Mandir, Freeganj, Topkhana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">New Ujjain</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Madhav Nagar, Nanakheda, Vikram Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Dewas</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dewas city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Nagda / Agar Malwa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nagda, Agar towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is most sacred for worship at Mahakaleshwar in Ujjain?", answer: "Bel (bilva patra) is the most sacred plant for Shiva worship in Ujjain — its three-lobed leaf is offered at every Mahakaleshwar puja. Tulsi is universally sacred across all Hindu traditions. Marigold garlands are used for abhishek and temple decoration daily. Jasmine flowers are offered for their fragrance in Shiva worship. Growing bel, tulsi, and jasmine at home is deeply spiritually significant for an Ujjain Hindu family." },
      { question: "Is same-day plant delivery available in Ujjain?", answer: "Yes. Same-day delivery is available across Ujjain including Mahakal temple area, Freeganj, Madhav Nagar, and Nanakheda. Order before 3 PM. We also deliver to Dewas within 3–5 hours." },
      { question: "What plant is appropriate for the Simhastha Kumbh Mela at Ujjain?", answer: "During Simhastha (held every 12 years on the Shipra), tulsi plants, marigold in full bloom, and jasmine are the most spiritually appropriate plants for Kumbh season. Rudraksha plants (sacred to Shiva) are meaningful and lasting gifts for the holy occasion. Money plant and lucky bamboo are popular souvenir-style plant gifts for visitors attending the Kumbh from across India." },
      { question: "What plants grow best in Ujjain's Malwa plateau climate?", answer: "Marigold, rose, tulsi, snake plant, and money plant all thrive in Ujjain's 900 mm monsoon and mild Malwa climate. October–March is the prime flowering season. Rose planted in October produces spectacular December–January blooms. The Malwa plateau's black cotton soil (with added organic matter and sand for drainage) is excellent for most flowering plants." },
      { question: "Do you deliver plants to Dewas from Ujjain?", answer: "Yes. Dewas (a major industrial and pharmaceutical hub in Madhya Pradesh, 35 km from Ujjain) is within 3–5 hours from our Ujjain network. Same-day delivery to Dewas for orders placed before noon. Dewas's industrial workforce community is a significant market for indoor plants and corporate gifting." }
    ]
  },

  "thrissur": {
    cityName: "Thrissur",
    metaTitle: "Buy Plants Online in Thrissur | Cultural Capital Kerala Plants | RedHeart",
    metaDescription: "Order plants online in Thrissur. Jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Kerala's cultural capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Thrissur — Same-Day Plant Delivery in the Cultural Capital of Kerala",
    metaKeyword: "plants online thrissur, buy plants thrissur, indoor plants thrissur, plant delivery thrissur kerala, jasmine thrissur, thrissur pooram plants, online nursery thrissur",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Thrissur — The Cultural Capital of Kerala Gets Doorstep Greens</h2>

<p>Thrissur (historically "Trichur") is celebrated as the cultural capital of Kerala — home to Thrissur Pooram (the world's most spectacular temple festival, held annually at Vadakkumnathan Temple in April–May, featuring caparisoned elephants, thakil and timila percussion orchestras, and fireworks), the Kerala Sahitya Akademi, the Kerala Lalithakala Akademi, and some of the finest Kathakali, Kuchipudi, and Carnatic music traditions in south India. The Vadakkumnathan Temple — ancient Shiva temple in the city centre — forms the cultural and spiritual heart of Thrissur. The Kerala gold market is centred in Thrissur, making it the gold trading hub of one of India's most gold-conscious cultures.</p>

<p>Thrissur's climate is Kerala: warm, very humid year-round, with two monsoons providing 3,000+ mm annual rainfall. The lush tropical environment creates extraordinary plant-growing conditions. Jasmine, hibiscus, banana, coconut palm, anthuriums, and tropical houseplants thrive in Thrissur's perennially warm, humid air. RedHeart delivers across Thrissur, Irinjalakuda, Kodungallur, Palakkad, and Guruvayur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Thrissur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Kerala Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mulla/Chameli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, Onam, temple use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus (Chembarathi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kerala State Flower, Devi worship</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, thrives in Kerala humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy in Kerala</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, gold-business offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Kerala Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Vishu</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kerala living room, gold shop décor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Thrissur Pooram and Vishu — Kerala's Greatest Plant Moments</h3>

<p>Thrissur Pooram (April–May) is the event that defines the city to the world — but for plant lovers, Vishu (Kerala New Year, April 14) is the most significant plant occasion. The Vishukkani — the auspicious arrangement of symbolic items that Keralites see on waking on Vishu morning — includes fresh konna flowers (golden shower tree flowers, Cassia fistula), golden cucumber, and other seasonal produce. Onam (August–September) brings Pookalam — the intricate floral carpet created from fresh flower petals — which is Kerala's most botanical festival tradition. Hibiscus, jasmine, chrysanthemum, and marigold petals are the main Pookalam flowers used across Kerala.</p>

<p>Guruvayur — 30 km from Thrissur — is home to the Guruvayurappan Temple, one of Kerala's most sacred Vishnu temples. Tulsi is particularly sacred here, as Guruvayurappan is a Vishnu deity. The Guruvayur Devaswom maintains extraordinary sacred garden traditions, and the devotee community values tulsi above all other plants.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Thrissur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Thrissur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Round (Vadakkumnathan), MG Road, Shoranur Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Guruvayur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Guruvayur temple town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Irinjalakuda / Kodungallur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Irinjalakuda, Kodungallur towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Palakkad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Palakkad city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What flowers are best for Onam Pookalam in Thrissur?", answer: "Traditional Thrissur Pookalam uses thumpa (white Leucas aspera), mukkutti (little tree plant), chethi (ixora), thumba, and marigold. For home Pookalam, hibiscus petals (chembarathi), marigold, chrysanthemum, and any colourful garden flowers work beautifully. Growing your own hibiscus, jasmine, and marigold gives you a harvest of Onam flowers from your own garden — deeply meaningful for Kerala's festival culture." },
      { question: "Is same-day plant delivery available in Thrissur?", answer: "Yes. Same-day delivery is available across Thrissur including the Round, MG Road, Shoranur Road area. We also serve Guruvayur within 2–4 hours — same-day delivery for orders before 3 PM. Guruvayur is frequently requested for tulsi and jasmine plants by devotees of the Guruvayurappan Temple." },
      { question: "Which plants thrive in Thrissur's Kerala humidity?", answer: "Virtually all tropical plants excel in Thrissur — anthurium, money plant, peace lily, areca palm, hibiscus, jasmine, philodendron, and bird of paradise all grow with exceptional vigour in Kerala's 3,000 mm rainfall and warm humid climate. Anthurium in particular is exceptionally well-suited to Thrissur — it thrives with minimal care and blooms brilliantly in Kerala's humidity." },
      { question: "What plant is best for Vishu gifting in Thrissur?", answer: "Lucky bamboo or money plant in a golden-toned ceramic planter echoes the golden prosperity symbolism of Vishu and is an appropriate contemporary Vishu gift. Anthurium with its bright red spathes is festive and tropical. For a traditional gift, a jasmine plant (mulla) in a terracotta pot is fragrant and culturally resonant for any Kerala home. A tulsi maadam is the most sacred Vishu gift for a devout Hindu family." },
      { question: "Do you deliver plants to Guruvayur from Thrissur?", answer: "Yes. Guruvayur is 28 km from Thrissur and within our same-day delivery zone. Guruvayur's temple town has strong demand for tulsi (sacred to Vishnu-Guruvayurappan), jasmine, and marigold — all appropriate for temple devotee gifting. We deliver to the Guruvayur township and surrounding pilgrim areas regularly. Order before noon for guaranteed same-day Guruvayur delivery." }
    ]
  },

  "guntur": {
    cityName: "Guntur",
    metaTitle: "Buy Plants Online in Guntur | Chilli City Andhra Plants | RedHeart",
    metaDescription: "Order plants online in Guntur. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Andhra's chilli capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Guntur — Same-Day Plant Delivery in Andhra Pradesh's Chilli Capital",
    metaKeyword: "plants online guntur, buy plants guntur, indoor plants guntur, plant delivery guntur andhra pradesh, marigold guntur, tulsi guntur, online nursery guntur chilli city krishna",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Guntur — The Chilli Capital of India Gets Doorstep Greens</h2>

<p>Guntur is one of Andhra Pradesh's most important cities — the agricultural trading hub of the fertile Krishna-Guntur delta region and the "Chilli Capital of India" (Guntur's red chilli is traded globally, and the Guntur chilli yard handles the highest volumes of chilli in Asia). The city is also significant for cotton, tobacco, and pulses trading, and is home to Acharya Nagarjuna University. The Krishna river delta's rich black soil and the excellent double monsoon create one of India's most productive agricultural regions, and Guntur is its commercial heart. The city is witnessing rapid growth as part of the Amaravati capital region project of Andhra Pradesh.</p>

<p>Guntur's climate is hot coastal Andhra: summers reach 42°C, the northeast monsoon (October–December) and southwest monsoon together provide good rainfall (900 mm), and winters are mild (18–26°C). Indoor plants, jasmine, hibiscus, and tulsi are the most popular plant choices for Guntur's Krishna delta cultural population. RedHeart delivers across Guntur, Vijayawada, Tenali, and Narasaraopet with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Guntur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Andhra Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, temple, Ugadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Telugu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dussehra, Dasara, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles Guntur heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, university offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chilli trader gifting, Ugadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Guntur's Agricultural Identity and Plant Culture</h3>

<p>Guntur's plant culture is rooted in its agricultural economy — the city's chilli, tobacco, and cotton trading community is deeply connected to growing things. The Krishna-Guntur delta's fertile soil means most Guntur residents have some connection to farming or cultivation. Home gardens are common, particularly in older residential areas where tulsi maadam, jasmine vines, and hibiscus in the courtyard are standard. The Dasara and Navratri seasons (October) drive the biggest plant demand surge in Guntur — marigold, chrysanthemum, and jasmine are the festival botanical essentials.</p>

<p>Ugadi (Telugu-Kannada New Year, March–April) is another important plant occasion in Guntur — the Ugadi pachadi (a symbolic dish mixing all six tastes) traditionally includes neem flowers and raw mango. A jasmine plant or money plant gifted at Ugadi is a meaningful contemporary expression of the new year's botanical connections. Guntur's role as a potential part of Amaravati (the new capital of Andhra Pradesh) is bringing in IT and government professionals who are significant indoor plant customers.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Guntur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Guntur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Brodipet, Kothapet, Arundelpet</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Nagarampalem / Old Town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nagarampalem, Lalapet, Chuttugunta</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tenali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tenali, Mangalagiri towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Narasaraopet</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Narasaraopet town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Guntur's hot coastal Andhra climate?", answer: "Jasmine, hibiscus, tulsi, money plant, snake plant, and marigold all thrive in Guntur's warm, moderately humid climate. The double monsoon (southwest + northeast) provides adequate rainfall. Jasmine blooms vigorously in Guntur's warm conditions — plant in full sun and water daily for thick, fragrant blooms. Indoor plants handle Guntur's heat well when kept in shaded rooms." },
      { question: "Is same-day plant delivery available in Guntur?", answer: "Yes. Same-day delivery is available across Guntur including Brodipet, Kothapet, Arundelpet, Nagarampalem, and Lalapet. Order before 3 PM. We also deliver to Tenali and Mangalagiri within 3–5 hours." },
      { question: "What plant is most appropriate for Ugadi gifting in Guntur?", answer: "Jasmine plant (malli) is the most culturally resonant Ugadi gift in Guntur — it connects to the Telugu tradition of fresh flower garlands and the new year's regenerative spirit. Money plant or lucky bamboo in a decorative planter is the standard Ugadi corporate gift for Guntur's business community. A tulsi plant in a new maadam is the most sacred new year gift for a devout Telugu household." },
      { question: "What plants are popular for Dasara decoration in Guntur?", answer: "Marigold (banti) in full golden or orange bloom is the most festive Dasara plant for Guntur homes — it is the defining festival flower of Telugu Dasara celebrations. Chrysanthemum, crossandra, and hibiscus are also used for Dasara decoration. Growing your own marigold (planted in August for October bloom) is a rewarding gardening tradition in Guntur's warm climate." },
      { question: "Do you deliver plants to Vijayawada from Guntur?", answer: "Yes. Vijayawada (which we already serve with a dedicated landing page) is 35 km from Guntur and within our Guntur delivery network. Amaravati (the proposed capital under construction between the two cities) is also within our delivery zone. Same-day delivery for orders from central Vijayawada placed before 2 PM." }
    ]
  },

  "cuttack": {
    cityName: "Cuttack",
    metaTitle: "Buy Plants Online in Cuttack | Silver City Odisha Plants | RedHeart",
    metaDescription: "Order plants online in Cuttack. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Odisha's silver city gets fresh plant delivery.",
    h1: "Buy Plants Online in Cuttack — Same-Day Plant Delivery in the Silver City of Odisha",
    metaKeyword: "plants online cuttack, buy plants cuttack, indoor plants cuttack, plant delivery cuttack odisha, marigold cuttack, durga puja cuttack plants, online nursery cuttack silver city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Cuttack — Odisha's Ancient Commercial Capital Gets Doorstep Greens</h2>

<p>Cuttack is Odisha's second-largest city and its historical heart — the "Silver City" (for its extraordinary filigree silver jewellery tradition, among the most refined metalwork in India), the former capital of Odisha for over a millennium (until Bhubaneswar became the capital post-independence), and still the largest commercial and judicial hub in the state. The Mahanadi river wraps around Cuttack, making it an island city — the Barabati Fort (14th-century Ganga dynasty fort), the Cuttack Chandi temple, and the streets of Chandan Nagar filled with silver artisans give the city an atmosphere of ancient commerce and craftsmanship. Netaji Subhas Chandra Bose was born in Cuttack — his ancestral home is a national memorial.</p>

<p>Cuttack's climate is coastal Odisha: very hot summers (42°C), a very good monsoon (1,500 mm from both monsoon systems), and pleasant cool winters (10–18°C). The excellent rainfall creates excellent outdoor plant conditions. Marigold, tulsi, shiuli, and indoor plants are most popular. Durga Puja (Cuttack's most significant festival, with some of the most elaborate pandals in eastern India outside Kolkata) drives the biggest plant demand. RedHeart delivers across Cuttack, Bhubaneswar, Puri, and Jagatsinghpur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Cuttack Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Odia Festival Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durga Puja pandal, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Odia Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, thrives in Odisha humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, court offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, silver business</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Odia garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Durga Puja in Cuttack — A Tradition of Elaborate Pandals</h3>

<p>Cuttack's Durga Puja is one of eastern India's most celebrated — the city competes with Kolkata in the elaborateness of its pandals, the creativity of its Durga pratima (idol), and the silver filigree thakia (silver chandelier-crown) that adorns the Durga idol in Cuttack's most famous pandals. Marigold, shiuli (night jasmine — Nyctanthes arbor-tristis), and chrysanthemum are the botanical soul of Cuttack's Durga Puja. Shiuli's distinctive white-orange flowers are the most evocatively autumn (sharat) plant of eastern India — its small flowers carpet the ground under the tree each morning during Durga Puja season.</p>

<p>The Boita Bandana festival (the first day of Kartika month, November) sees Cuttackis launch miniature boats on the Mahanadi in memory of ancient Odia maritime trade — it's a uniquely Odia cultural occasion. Gambhiri Puja, Rath Yatra, and the annual cattle fair (Bali Jatra) round out Cuttack's rich festival calendar that drives plant gifting throughout the year.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Cuttack</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Cuttack</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Badambadi, Chandan Nagar, Buxi Bazar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dist. Court / Medical area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">SCB Medical area, Cuttack High Court</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhubaneswar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhubaneswar city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jagatsinghpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jagatsinghpur, Paradeep</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is the most evocative Durga Puja gift in Cuttack?", answer: "Shiuli (night jasmine, Nyctanthes arbor-tristis) is the most quintessentially Odia Durga Puja plant — its small white-orange flowers carpet the ground each autumn morning during Puja season, and their fragrance is the smell of sharat (autumn) in eastern India. Marigold in full golden bloom for pandal decoration is equally essential. Anthurium or peace lily in a ceramic planter is the modern premium Durga Puja gift for a Cuttack family." },
      { question: "Is same-day plant delivery available in Cuttack?", answer: "Yes. Same-day delivery is available across Cuttack including Badambadi, Chandan Nagar, Buxi Bazar, SCB Medical area, and the High Court area. Order before 3 PM. We also deliver to Bhubaneswar within 3–5 hours." },
      { question: "Which indoor plants are popular for offices and homes in Cuttack?", answer: "Money plant, snake plant, peace lily, anthurium, and lucky bamboo are the most popular indoor plants for Cuttack's homes and offices. Anthurium thrives in Cuttack's humid coastal Odisha climate with almost no care beyond watering. Peace lily is popular in the city's many legal offices (Cuttack High Court is the Odisha High Court) and SCB Medical College's administrative spaces." },
      { question: "What plant grows best in Cuttack's rainy Mahanadi delta climate?", answer: "Cuttack's extraordinary 1,500 mm rainfall and warm humid climate make it excellent for tropical plants. Anthurium, hibiscus, money plant, tulsi, jasmine, marigold, and peace lily all grow vigorously. The monsoon season (June–September) supercharges outdoor plant growth. Anthurium in particular needs no special care in Cuttack's natural humidity — it blooms year-round with minimal attention." },
      { question: "Do you deliver plants to Puri from Cuttack?", answer: "Puri (the dhama city of Lord Jagannath, 60 km from Cuttack) is within our delivery network with 4–6 hour same-day service for orders before noon. Puri's pilgrimage culture has strong tulsi, marigold, and lotus plant demand from devotees. The Rath Yatra (July) season drives significant plant gifting in the Puri–Cuttack corridor." }
    ]
  },

  "mathura": {
    cityName: "Mathura",
    metaTitle: "Buy Plants Online in Mathura | Krishna's City UP Plants | RedHeart",
    metaDescription: "Order plants online in Mathura. Tulsi, marigold, indoor plants. Same-day delivery. Starting ₹299. Lord Krishna's city gets fresh plant delivery.",
    h1: "Buy Plants Online in Mathura — Same-Day Plant Delivery in the Birthplace of Lord Krishna",
    metaKeyword: "plants online mathura, buy plants mathura, indoor plants mathura, plant delivery mathura uttar pradesh, tulsi mathura, marigold mathura, online nursery mathura vrindavan krishna",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Mathura — The Birthplace of Lord Krishna Gets Doorstep Greens</h2>

<p>Mathura is one of India's seven sacred cities and the birthplace of Lord Krishna — one of Hinduism's most beloved and widely worshipped deities. The Shri Krishna Janmabhoomi temple marks the exact location of Krishna's birth, and along with Vrindavan (just 15 km away) forms the Braj region — the sacred landscape of Krishna's childhood and youth that attracts tens of millions of pilgrims and devotees annually. The Yamuna river's ghats in Mathura are sites of continuous religious activity. The city is also a major industrial hub with one of India's largest oil refineries (Indian Oil Corporation's Mathura Refinery).</p>

<p>Mathura's climate is classic Western UP: very hot summers (44°C), moderate monsoon (700 mm), and cool winters (4–18°C). The Braj region's cultural and religious identity is deeply connected to plants — tulsi is the most sacred plant in the Vaishnava tradition that dominates Mathura and Vrindavan, and the kadamba tree is associated with Krishna's childhood dances (raas) on the banks of the Yamuna. RedHeart delivers across Mathura, Vrindavan, Agra, and Bharatpur (Rajasthan) with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sacred Plants of Mathura — Braj's Botanical Heritage</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Braj Sacred Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Most sacred Vaishnava plant, every Braj home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Janmashtami, Holi, temple garlands</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple offering, winter garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Chameli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple fragrance, Krishna devotion</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Oct</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Refinery gifting, pilgrim centre</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IOC refinery offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, ISKCON area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Janmashtami, Holi, and Braj's Most Sacred Plant Occasions</h3>

<p>Janmashtami (Lord Krishna's birthday, August) is the most significant festival in Mathura — celebrated with midnight puja, abhishek, and floral decoration at the Janmabhoomi temple, and thousands of devotees arriving from across India. Marigold, rose, and jasmine flowers are used in large quantities for Janmashtami decoration. Tulsi leaves are essential for every Krishna puja — devotees offer tulsi leaf with every bhog.</p>

<p>Holi in the Braj region (Mathura, Vrindavan, Barsana, Nandgaon) is globally celebrated — Barsana's Lathmar Holi and Vrindavan's flower Holi (phoolon ki Holi, where actual flowers are showered instead of synthetic colours) are events that attract international visitors. The Phoolon ki Holi at Vrindavan's Banke Bihari temple uses real flowers — creating extraordinary seasonal demand for marigold, rose, and seasonal flower plants in the weeks before Holi.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Mathura</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Mathura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Janmabhoomi area, Holi Gate, Krishna Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Vrindavan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vrindavan town, ISKCON, Banke Bihari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Govardhan / Barsana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Govardhan, Barsana, Nandgaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Agra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Agra city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is most sacred in Mathura's Vaishnava tradition?", answer: "Tulsi (holy basil) is the most sacred plant in all of Vaishnava Hinduism — and thus in Mathura's profoundly Krishnaite culture. Every Vaishnava home has a tulsi maadam where daily prayers are offered to Tulsi Devi herself. Tulsi leaves are offered with every bhog (food offering) to Krishna. A new tulsi plant in a fresh maadam is the most sacred and meaningful gift you can bring to any devout family in Mathura or Vrindavan." },
      { question: "Is same-day plant delivery available in Mathura and Vrindavan?", answer: "Yes. Same-day delivery is available across Mathura including Janmabhoomi area, Krishna Nagar, and Holi Gate. Vrindavan is within our 2–4 hour delivery zone — same-day for orders before 3 PM. We regularly deliver to the ISKCON Vrindavan campus and Banke Bihari temple area." },
      { question: "What plants are used for Phoolon ki Holi in Vrindavan?", answer: "Phoolon ki Holi (flower Holi) at Vrindavan's Banke Bihari temple uses marigold petals, rose petals, chrysanthemum petals, and seasonal colourful flowers. Growing your own marigold and rose in winter for the February–March Holi season gives you an abundant home harvest of festival flowers. Marigold planted in October blooms prolifically through March — timing perfectly for Braj's extended Holi season." },
      { question: "What plant is the best Janmashtami gift in Mathura?", answer: "Tulsi plant in a new maadam is the most sacred Janmashtami gift for any Mathura devotee. Marigold in full bloom for the midnight Janmashtami puja decoration is the most festive choice. Lucky bamboo in a Krishna-blue ceramic planter is a modern, auspicious Janmashtami gift for corporate and semi-religious gifting. Jasmine plant blooms in August — it's fragrant for the Janmashtami season and sacred in Krishna's tradition." },
      { question: "Do you deliver plants to Vrindavan from Mathura?", answer: "Yes. Vrindavan is 15 km from Mathura and within our same-day delivery zone with 2–4 hour delivery. We serve the ISKCON campus, Banke Bihari temple area, and Vrindavan's growing residential community. Same-day delivery for orders placed before 3 PM. We also deliver to Govardhan (the sacred hill of Lord Krishna's childhood legend) and Barsana within 3–5 hours." }
    ]
  },

  "aligarh": {
    cityName: "Aligarh",
    metaTitle: "Buy Plants Online in Aligarh | AMU City UP Plants | RedHeart",
    metaDescription: "Order plants online in Aligarh. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. AMU's city in Uttar Pradesh gets fresh plant delivery.",
    h1: "Buy Plants Online in Aligarh — Same-Day Plant Delivery in the City of AMU and Locks",
    metaKeyword: "plants online aligarh, buy plants aligarh, indoor plants aligarh, plant delivery aligarh uttar pradesh, money plant aligarh, marigold aligarh, online nursery aligarh AMU",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Aligarh — The Lock Capital of India Gets Doorstep Greens</h2>

<p>Aligarh is a city of two identities: the "Lock City of India" (Aligarh's brass lock manufacturing is a centuries-old tradition, producing 40% of India's locks) and the home of Aligarh Muslim University (AMU) — one of India's oldest and most prestigious central universities, founded in 1875 by Sir Syed Ahmad Khan as the Muhammadan Anglo-Oriental College, and a symbol of Muslim educational aspiration and modernisation. AMU's campus is one of India's most beautiful Victorian-era university campuses, with red sandstone buildings, a Victorian clock tower, and extensive landscaped gardens. The city lies in the Doab region between the Ganga and Yamuna rivers in western Uttar Pradesh.</p>

<p>Aligarh's climate is western UP: very hot summers (44°C), moderate monsoon (750 mm), and cool winters (4–16°C). The Doab's fertile alluvial soil is good for outdoor plants. Marigold, tulsi, rose, and indoor plants are popular across Aligarh's mixed Hindu and Muslim population. Eid and Diwali are the two biggest plant gifting occasions. RedHeart delivers across Aligarh, Hathras, Kasganj, and Mathura with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Aligarh Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Festival / Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious for both communities</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">AMU gardens, winter, Eid bouquets</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">AMU offices, lock factory offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Diwali and Eid</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, AMU departments</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrant for Eid, summer gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Sep</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">AMU's Garden Culture and Aligarh's Cosmopolitan Identity</h3>

<p>AMU's campus is one of north India's most beautifully landscaped university environments — its botanical garden, Strachey Hall garden, and Victoria Gate surroundings maintain a standard of horticultural excellence rare for Indian universities. AMU's garden culture has influenced Aligarh's broader appreciation for plants across generations of AMU families. The Islamic botanical tradition — the char bagh (four-garden) design, rose gardens (gulab bagh), and the use of fragrant plants in Islamic garden philosophy — is deeply reflected in Aligarh's Muslim residential areas where fragrant plants like mogra, rose, and chameli are especially valued.</p>

<p>Aligarh's Hindu community, concentrated particularly in old city areas and the Mohalla Telia neighbourhood, maintains traditional tulsi maadams and seasonal marigold cultivation for Diwali and temple use. The city's lock manufacturing districts have a practical, hardworking community where indoor plants for office environments are an increasingly popular choice for corporate gifting among Aligarh's brass and lock industry business community.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Aligarh</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">AMU area / Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">AMU campus, Civil Lines, Ramghat Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lock Industry / Quarsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Quarsi, Marris Road, Jamalpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hathras</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hathras town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kasganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kasganj town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most appropriate for an AMU professor's home in Aligarh?", answer: "Rose plant (planted October) is appropriate for AMU's well-maintained faculty quarters where the Victorian garden tradition encourages ornamental plant cultivation. Peace lily in a ceramic planter is an elegant indoor choice for a professor's study. Money plant in a hanging basket suits smaller apartments. Lucky bamboo in a glass vase is the standard faculty gifting choice for promotions and retirements at AMU." },
      { question: "Is same-day plant delivery available in Aligarh?", answer: "Yes. Same-day delivery is available across Aligarh including AMU campus area, Civil Lines, Ramghat Road, and Quarsi. Order before 3 PM. We deliver to AMU faculty quarters and student hostels regularly." },
      { question: "Which plants are popular for Eid gifting in Aligarh's Muslim community?", answer: "Mogra (chameli/jasmine) is the most culturally resonant fragrant plant gift for Eid in Aligarh's Muslim community — its white flowers are associated with Islamic garden aesthetics and their fragrance is prized for home and prayer space. Rose plant is traditionally associated with Islamic devotional poetry and garden culture. Money plant and lucky bamboo in decorative planters are modern Eid gifts appropriate for any Aligarh home." },
      { question: "What plants grow best in Aligarh's western UP Doab climate?", answer: "Rose (planted October for December–March bloom), marigold (planted September for Diwali blooms), tulsi, mogra (summer fragrance), snake plant, and money plant all do well in Aligarh. The Doab's fertile alluvial soil is excellent for most plants with adequate watering. The moderate 750 mm monsoon requires supplemental summer watering for outdoor plants." },
      { question: "Do you deliver plants to Hathras from Aligarh?", answer: "Yes. Hathras (40 km from Aligarh) is within our same-day delivery zone with 3–5 hour delivery. Kasganj is accessible within 4–6 hours. Same-day Hathras delivery for orders placed before noon. We serve the full Doab region from our Aligarh distribution point." }
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
