// Plants Tier 1 Batch 3 — 8 major cities
// Delhi, Visakhapatnam, Vadodara, Rajkot, Mysuru, Mangaluru, Thiruvananthapuram, Nashik

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "delhi": {
    cityName: "Delhi",
    metaTitle: "Buy Plants Online in Delhi | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Delhi with same-day delivery. Indoor plants, rose, seasonal flowers & gifting combos. Starting ₹299. Fresh plants for the Capital of India.",
    h1: "Buy Plants Online in Delhi — Same-Day Plant Delivery Across the National Capital",
    metaKeyword: "plants online delhi, buy plants delhi, indoor plants delhi, plant delivery delhi, online nursery delhi, rose plant delhi, seasonal plants delhi",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Delhi — India's Capital Gets Doorstep Green Delivery</h2>

<p>Delhi — the National Capital Territory — is a city of extraordinary contrasts. The crowded lanes of Chandni Chowk brush up against the sleek glass towers of Connaught Place; the Lodhi Garden's ancient trees canopy over morning walkers; the Ridge Forest runs through the heart of the metropolis. Delhi's relationship with plants and nature is complicated by its notoriously poor air quality — and this is exactly what makes plants so valued here. For millions of Delhiites, indoor air-purifying plants are not decor but necessity. The city's air quality index regularly ranks among the world's worst in winter, and plants like peace lily, snake plant, and areca palm are standard fixtures in Delhi homes and offices.</p>

<p>Delhi's climate is harsh North India: burning summers (42–46°C from May–June), dense fog and cold winters (2–8°C in January), a violent pre-monsoon dust season, and a monsoon (July–September) that delivers 750 mm of rain. This extreme range means plant selection matters enormously. Plants that survive Delhi's summer sun and Delhi's fog-bound winters require good choosing — and we'll guide you through exactly what works. RedHeart delivers across all Delhi districts — South Delhi, North Delhi, West Delhi, East Delhi, Noida, Gurgaon, and Faridabad — with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Delhi Homes and Offices</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Delhi Needs It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, tolerates extremes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor air purifier, filters VOCs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Humidifier plant, living room</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Auspicious, every Delhi home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden glory, winter bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Apr</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, very low care, winter-hardy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Hindu household, courtyard</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, desk plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delhi's Plant Seasons — When to Plant What</h3>

<p>Delhi's gardening calendar divides neatly into three productive windows and one brutal shutdown. October to February is Delhi's golden gardening season: rose, marigold, chrysanthemum, dahlia, and seasonal flowers fill every nursery and balcony. This is when Delhi's famous gardens — Lodi Garden, Nehru Park, Sunder Nursery — are at their most splendid. The Rose Festival at Buddha Jayanti Park in February draws thousands. Plant new outdoor species in October, fertilise in November, and enjoy peak blooms in January–February.</p>

<p>March and April are brief but beautiful — summer annuals, bougainvillea, and hibiscus do well before the heat sets in. May–June is the shutdown: 45°C+ temperatures bake outdoor plants. Water twice daily, mulch heavily, and move potted plants to morning-sun-only positions. July–September brings monsoon relief; this is a good time to establish new outdoor plants before the winter growing season. Indoor plants year-round: snake plant, peace lily, ZZ plant, and areca palm are Delhi's reliable indoor companions regardless of season.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Delhi NCR</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South Delhi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hauz Khas, Saket, Malviya Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Delhi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Connaught Place, Karol Bagh, Rajouri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">West / North Delhi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rohini, Dwarka, Pitampura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Noida / Gurgaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sector 18, 62, 77, Cyber City, Golf Course Rd</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for purifying Delhi's indoor air?", answer: "Peace lily, snake plant, areca palm, and spider plant are NASA-recommended air purifiers that actively reduce VOCs, benzene, and formaldehyde — pollutants that accumulate in Delhi's sealed, AC-heavy interiors during winter. Peace lily also increases indoor humidity, which combats Delhi's dry winter air. Keep 2-3 different species for broad-spectrum air improvement." },
      { question: "Is same-day plant delivery available in South Delhi and Gurgaon?", answer: "Yes. Same-day delivery is available across South Delhi, Central Delhi, Noida, and Gurgaon. Order before 3 PM. Midnight delivery is also available for South Delhi, Central Delhi, and select Gurgaon areas. We deliver seven days a week including festivals." },
      { question: "When is the best time to buy and plant roses in Delhi?", answer: "October is the perfect time to buy rose plants in Delhi — plant them just as the monsoon ends and winter begins. They'll establish roots through October, begin blooming in December, and reach peak bloom in January–February when Delhi's rose festivals celebrate them. Water every 3 days in winter; fertilise monthly with rose-specific fertiliser. Prune after each flush." },
      { question: "What plant is best as a Diwali gift in Delhi?", answer: "Money plant in a terracotta pot with a Diwali message card is Delhi's most popular plant gift. Lucky bamboo (3 or 7 stalks) is close behind. For a premium Diwali gift, a tall areca palm in a ceramic planter is a statement choice. Tulsi plants in decorated pots are meaningful for traditional Delhi households." },
      { question: "Which plants survive Delhi's summer heat indoors?", answer: "ZZ plant and snake plant are the most heat-tolerant indoor plants for Delhi's May–June months when interiors get hot even with AC. Both tolerate low water frequency and indirect light. Ensure AC units aren't blowing directly on tropical plants like peace lily or areca palm — the cold drafts damage them. Keep plants away from windows during peak afternoon hours." }
    ]
  },

  "visakhapatnam": {
    cityName: "Visakhapatnam",
    metaTitle: "Buy Plants Online in Visakhapatnam | Coastal & Tropical Plants | RedHeart",
    metaDescription: "Order plants online in Visakhapatnam. Tropical, indoor & coastal plants. Same-day delivery across Vizag. Starting ₹299. Fresh plants for AP's port city.",
    h1: "Buy Plants Online in Visakhapatnam — Same-Day Delivery Across Vizag",
    metaKeyword: "plants online visakhapatnam, buy plants vizag, indoor plants visakhapatnam, plant delivery vizag, tropical plants visakhapatnam AP, online nursery vizag",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Visakhapatnam — The Jewel of the East Coast Gets Doorstep Greens</h2>

<p>Visakhapatnam — universally called Vizag — is Andhra Pradesh's largest city and one of India's finest natural harbours, where the Eastern Ghats meet the Bay of Bengal in a dramatic landscape of hills, beaches, and port infrastructure. The city is growing rapidly: with the HPCL refinery, the Naval base, the steel plant, and a booming IT sector in Rushikonda and Madhurawada, Vizag combines industrial heft with natural beauty. Ramakrishna Beach, the submarine museum at Kursura, the Araku Valley coffee plantations — Vizag has a quality of life that keeps its population invested in their home environment, including plants.</p>

<p>Vizag's climate is coastal tropical: hot and humid from March through September (32–40°C), with monsoon rain from the Bay of Bengal (July–October, 1,000 mm total), and very pleasant winters (16–28°C). The proximity to the sea keeps humidity high year-round, which is ideal for tropical foliage plants. RedHeart delivers across Visakhapatnam, Bheemunipatnam, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Perfect for Vizag's Coastal Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Works Here</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Wind Tolerance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in coastal humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, handles heat and humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves Vizag's sea air and warmth</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja, coastal sun loves it</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pooja, courtyard, every Telugu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement plant, IT offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Coastal Gardening in Vizag</h3>

<p>Vizag's coastal location brings unique gardening conditions. Sea breeze (often gusty) can desiccate leaves of tender plants near the waterfront; salt air from the Bay of Bengal affects plants close to the coast more than those in inland areas like Madhurawada or Gajuwaka. For balconies near the beach: hardy, succulent, or thick-leaved plants (snake plant, jade, agave) handle salt spray better than tender tropicals. Shelter plants from direct strong sea winds. In more inland areas of Vizag, the full range of tropical plants grows beautifully.</p>

<p>Vizag's Ugadi (Telugu New Year) and Sankranti are major festivals when plant gifting is traditional. Tulsi, marigold pots, and auspicious money plant combos are popular festive choices. The growing IT community in Rushikonda and Madhurawada is increasingly interested in premium indoor plants and corporate gifting.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Visakhapatnam</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Vizag</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dwaraka Nagar, Siripuram, MVP Colony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North Vizag</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rushikonda, Madhurawada, Bheemunipatnam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South Vizag</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gajuwaka, Kommadi, Bheemili</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Port Area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Waltair, Lawson's Bay, Port area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for a sea-facing balcony in Vizag?", answer: "For sea-facing balconies in Visakhapatnam, choose salt-tolerant plants: snake plant, agave, jade plant, and beach morning glory handle salt air well. Avoid tender tropicals like anthurium near the waterfront. Use heavier pots or secure with wind anchors during cyclone season (October–November). Inland balconies in areas like Madhurawada can grow a wider range of tropical plants." },
      { question: "Is same-day plant delivery available across Visakhapatnam?", answer: "Yes. Same-day delivery is available across Visakhapatnam including MVP Colony, Rushikonda, Madhurawada, and Gajuwaka. Order before 3 PM for same-day delivery. Midnight delivery is also available for central Vizag areas. We deliver across Bheemunipatnam and surrounding suburbs as well." },
      { question: "What plant is best for Ugadi gifting in Vizag?", answer: "For Ugadi (Telugu New Year), tulsi plant is the most auspicious choice — it's sacred in every Telugu household. Marigold pots (tagetes) symbolise the festival's festive colours. Money plant in a ceramic pot is a popular prosperity gift. For a modern Ugadi gift, a lucky bamboo arrangement or an anthurium in a decorative planter is impressive and meaningful." },
      { question: "Which plants thrive in Vizag's Bay of Bengal humidity?", answer: "Anthurium, peace lily, monstera, philodendron, and pothos (money plant) all grow vigorously in Vizag's high coastal humidity. These tropical plants love warm, moist air and push out new leaves rapidly here. Water moderately — the ambient humidity reduces watering needs. Ensure pots drain freely to prevent waterlogging during monsoon." },
      { question: "Do you deliver plants to Rushikonda IT park offices?", answer: "Yes. Rushikonda is within our Visakhapatnam delivery zone. We deliver areca palms, ZZ plants, and snake plants to IT offices in Rushikonda and Madhurawada regularly. Corporate bulk orders can be scheduled with advance notice. Contact us for pricing on large office plant installations." }
    ]
  },

  "vadodara": {
    cityName: "Vadodara",
    metaTitle: "Buy Plants Online in Vadodara | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Vadodara (Baroda). Indoor plants, rose, bougainvillea & gifting combos. Same-day delivery. Starting ₹299. Fresh plants for the Cultural Capital of Gujarat.",
    h1: "Buy Plants Online in Vadodara — Same-Day Plant Delivery in Baroda",
    metaKeyword: "plants online vadodara, buy plants vadodara baroda, indoor plants vadodara, plant delivery vadodara gujarat, bougainvillea vadodara, online nursery vadodara",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Vadodara — Cultural Capital of Gujarat Gets Doorstep Greens</h2>

<p>Vadodara — also lovingly called Baroda — is Gujarat's cultural gem, a city where the Maharaja Sayajirao Gaekwad's legacy of art, education, and town planning is still visible in the Baroda Museum, the Sayaji Baug (Kamati Baug) botanical garden, the Maharaja Fateh Singh Museum, and the grand Faculty of Fine Arts at M.S. University. The Sayaji Baug — a 113-acre garden at the city's heart — is a beloved public space where Vadodara residents walk, gather, and connect with nature daily. This proximity to one of India's finest civic gardens creates a natural gardening culture among Vadodara residents.</p>

<p>Vadodara's climate is Gujarat inland: hot summers (42–44°C), a monsoon from July–September (900 mm), and mild, dry winters (10–26°C). The drier interior Gujarat climate (compared to coastal Surat) makes Vadodara excellent for succulents and desert-tolerant plants, while tropical plants thrive during the monsoon window. RedHeart delivers across Vadodara, Anand, and surrounding districts with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Vadodara Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jade Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gift, drought-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Compound wall, terrace, summer bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, desk</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, MSU office lobbies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Vadodara's Cultural Identity and Plants</h3>

<p>Vadodara has a strong fine arts and cultural scene — the MS University's Faculty of Fine Arts produces nationally known artists; the Navratri celebrations here are among Gujarat's most elaborately presented. This artistic culture extends to home decor and gardening aesthetics. Vadodara homes tend to have thoughtful, curated garden spaces. The Sayaji Baug's horticultural department organises seasonal flower shows that inspire local gardening enthusiasts. Bougainvillea and roses are particular favourites, and the city's art community has embraced indoor plant decor aesthetics enthusiastically.</p>

<p>Diwali gifting in Vadodara follows the Gujarati tradition strongly — jade plant (money tree) and money plant in terracotta pots are the plant gifts most associated with Laxmi puja and the new business year. Lucky bamboo is popular in Vadodara's commercial and trading community for office new-year gifting.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Vadodara</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Vadodara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Alkapuri, Fatehgunj, Sayajigunj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North Vadodara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gorwa, Harni, Makarpura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Waghodia / Anand</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Waghodia, Anand, Vallabh Vidyanagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Padra / Karjan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Padra, Karjan, Dabhoi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is best for a Diwali gift in Vadodara?", answer: "Money plant and jade plant are the most auspicious Diwali gifts in Vadodara's Gujarati culture. Jade (the 'friendship tree') symbolises prosperity and longevity — perfect for Laxmi puja and the Gujarati New Year. Lucky bamboo in 3, 5, or 7 stalks is popular for office and business gifting. A premium money plant in a ceramic planter with a Diwali message is an elegant personal gift." },
      { question: "Is same-day plant delivery available in Alkapuri and Sayajigunj?", answer: "Yes. Same-day delivery is available across Alkapuri, Sayajigunj, Fatehgunj, and all major Vadodara areas. Order before 3 PM. Midnight delivery is available for central Vadodara. We deliver across Anand and Vallabh Vidyanagar areas as well with advance notice." },
      { question: "Which plants grow best at Vadodara's Sayaji Baug (for home inspiration)?", answer: "Sayaji Baug's botanical collection includes mature bougainvillea, jasmine, hibiscus, and a wide range of tropical trees. For your home, bougainvillea trained on a compound wall or terrace is a classic Vadodara choice. Rose plants bloom beautifully in Vadodara's winter season (November–February). Jasmine (mogra) is fragrant from spring through monsoon." },
      { question: "When is the best time to plant bougainvillea in Vadodara?", answer: "February through April is the best time to plant bougainvillea in Vadodara — just before the summer heat drives it into vigorous bloom. Plant in full sun, water weekly (bougainvillea actually blooms better when slightly water-stressed), and prune lightly after each flowering flush to promote branching. Within 2-3 growing seasons, a well-placed bougainvillea can cover an entire wall with vivid colour." },
      { question: "Do you deliver plants to Anand and Vallabh Vidyanagar?", answer: "Yes. Anand and Vallabh Vidyanagar are within our Vadodara delivery zone. Delivery takes 3–5 hours. Same-day delivery is available for orders placed before 1 PM for these areas. Anand's large dairy cooperative community has strong interest in outdoor and kitchen garden plants." }
    ]
  },

  "rajkot": {
    cityName: "Rajkot",
    metaTitle: "Buy Plants Online in Rajkot | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Rajkot. Money plant, jade, bougainvillea & gifting combos. Same-day delivery across Rajkot. Starting ₹299. Saurashtra's largest city gets plant delivery.",
    h1: "Buy Plants Online in Rajkot — Same-Day Plant Delivery in Saurashtra's Capital",
    metaKeyword: "plants online rajkot, buy plants rajkot, indoor plants rajkot, plant delivery rajkot gujarat, bougainvillea rajkot, online nursery rajkot saurashtra",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Rajkot — Gandhi's Hometown Grows Greener Every Day</h2>

<p>Rajkot is Saurashtra's largest city and one of Gujarat's fastest-growing urban centres. It has a special historical significance — Mahatma Gandhi spent his childhood here, attending the Alfred High School (now Mohandas Gandhi High School), and the Kaba Gandhi No Delo (Gandhi's ancestral home) draws visitors from across the world. Beyond its historical importance, today's Rajkot is an industrial powerhouse — India's largest manufacturer of precision engineering components, CNC machines, and diesel engines. The city's economy is driven by a prosperous business community with a strong Gujarati cultural identity and well-maintained homes and businesses.</p>

<p>Rajkot's climate is semi-arid Gujarat: very hot summers (43–46°C), a moderate monsoon (600 mm, less than coastal Gujarat), and warm, dry winters. This drier climate makes Rajkot excellent for drought-tolerant plants, succulents, and plants that prefer good drainage. Tropical plants do well if given shade during afternoon hours in summer. RedHeart delivers across Rajkot with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants That Work in Rajkot's Semi-Arid Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Drought Tolerance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jade Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gift, very drought-hardy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kitchen, medicinal, desert-tough</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office, very low water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, compound, thrives in dryness</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pooja, courtyard, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, office desk</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low care, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Rajkot's Business Community</h3>

<p>Rajkot's Gujarati and Jain business community has a strong gifting culture — particularly around Diwali, Labh Pancham, and business anniversaries. Jade plant (money tree) is the most significant plant gift: deeply associated with prosperity, easy to grow even in Rajkot's dry climate, and long-lived (jade plants can live for decades if cared for). A well-established jade plant in a ceramic or terracotta pot makes an impressive, lasting Diwali gift. Lucky bamboo in 5 or 7 stalks is a popular office gifting choice. Money plant is affordable enough for bulk festive gifting.</p>

<p>Rajkot also has a significant Navratri celebration — the Rajkot Navratri is one of Gujarat's most celebrated. During Navratri, potted marigold, chrysanthemum, and decorative flowering plants are in demand for home and venue decoration. We stock seasonal flowering plants around Navratri and can supply bulk orders for event decoration with advance notice.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Rajkot</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Rajkot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kalawad Road, University Road, Gondal Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East Rajkot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mavdi, Kothariya, Kuvadva Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North Rajkot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Aji Industrial Area, 150 Feet Ring Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Morbi / Gondal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Morbi, Gondal, Wankaner</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants need the least water in Rajkot's dry climate?", answer: "Jade plant, snake plant, ZZ plant, aloe vera, and bougainvillea are Rajkot's best drought-tolerant plants. Jade and ZZ can go 2-3 weeks without water and thrive in Rajkot's dry indoor conditions. Bougainvillea blooms most prolifically when slightly water-stressed — a perfect match for Saurashtra's naturally dry climate." },
      { question: "Is same-day plant delivery available in Rajkot?", answer: "Yes. Same-day delivery is available across Rajkot including Kalawad Road, University Road, Gondal Road, and all major residential areas. Order before 3 PM for same-day delivery. Midnight delivery is also available for central Rajkot areas." },
      { question: "What plant is the best Diwali gift for a business partner in Rajkot?", answer: "Jade plant (money tree) is Rajkot's top Diwali business gift — it symbolises prosperity, grows easily in Gujarat's dry climate, and is culturally associated with financial well-being in Jain and Gujarati communities. A mature jade plant in a premium ceramic pot is an impressive Labh Pancham gift. For larger corporate orders, lucky bamboo towers or areca palm arrangements work well." },
      { question: "Which indoor plant is best for Rajkot's engineering factories and offices?", answer: "ZZ plant and snake plant are ideal for Rajkot's manufacturing offices — they handle low light, AC environments, and infrequent watering without complaint. Both are nearly indestructible, which suits busy factory offices where plant care is secondary to operations. Lucky bamboo on a reception desk is a popular prosperity symbol for Rajkot's engineering businesses." },
      { question: "When is the best time to plant bougainvillea in Rajkot?", answer: "February through March is the best time to plant bougainvillea in Rajkot — just before the summer heat stimulates its first major flowering. Plant in full sun (6+ hours), use well-draining soil, water once a week (or less), and prune after each bloom cycle. Bougainvillea thrives in Rajkot's dry, hot climate better than almost any other flowering plant." }
    ]
  },

  "mysuru": {
    cityName: "Mysuru",
    metaTitle: "Buy Plants Online in Mysuru | Roses, Jasmine & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Mysuru (Mysore). Rose, jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Fresh plants for Karnataka's City of Palaces.",
    h1: "Buy Plants Online in Mysuru — Same-Day Plant Delivery in the City of Palaces",
    metaKeyword: "plants online mysuru, buy plants mysore, indoor plants mysuru, plant delivery mysuru karnataka, rose plant mysore, jasmine mysuru, online nursery mysore",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Mysuru — Karnataka's Royal City Gets Doorstep Greens</h2>

<p>Mysuru — India's "City of Palaces" — is one of South India's most elegant and culturally rich cities. The Mysore Palace, ablaze with 100,000 light bulbs during Dasara, is one of India's most visited tourist destinations. The Brindavan Gardens (Krishnarajasagar Dam), with their terraced lawns, fountain illuminations, and carefully maintained flowering beds, draw millions of visitors each year and set a very high standard for horticultural aesthetics in the city's public imagination. Mysuru is also home to India's largest sandalwood oil production, the Central Food Technological Research Institute, and a growing IT sector in the Infosys and BEML campuses. It's a city where tradition and modernity coexist gracefully.</p>

<p>Mysuru's climate is one of the most pleasant in Karnataka — sitting at 770 metres elevation, it enjoys warm days (30–35°C in summer) and genuinely cool winter nights (12–18°C). This temperate climate makes Mysuru excellent for roses, chrysanthemum, and a wide range of plants that struggle in hotter Indian cities. RedHeart delivers across Mysuru, Mandya, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants That Flourish in Mysuru</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Mysuru Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mysore Mallige)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">World-famous Mysore jasmine, GI-tagged</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Oct</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Palace gardens, winter display</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Chrysanthemum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dasara decoration, season flowers</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Dec</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every home, trailing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, pooja, very common in Mysuru</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, IT campus offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Mysore Mallige and the Jasmine Legacy</h3>

<p>The Mysore Mallige (Jasminum sambac) is one of India's most celebrated flowers — GI-tagged and internationally recognised for its exceptional fragrance. Grown in the districts around Mysuru, particularly in Nanjanagud, Piriyapatna, and Gundlupet, the Mysore jasmine is used in perfumery, garland-making, and religious offerings across South India. Growing a mallige plant at home is a deeply rooted cultural act in Mysuru households. Placed in morning sun near the courtyard or south-facing window, it blooms from April through October with small, intensely fragrant white flowers that are picked early in the morning before they open fully.</p>

<p>Dasara (Vijayadashami) is Mysuru's defining festival — the royal procession through the city is one of India's most spectacular, and the entire city decorates with marigold, chrysanthemum, and fresh flowers during the 10-day celebrations. Potted chrysanthemum, marigold, and flowering seasonal plants are in peak demand in September–October. We stock seasonal flowers in the run-up to Dasara and Diwali.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Mysuru</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Mysuru</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Palace area, Devaraja Market, Vontikoppal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North / East Mysuru</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vijayanagar, Hebbal, Bannimantap</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South Mysuru</td><td style="border:1px solid #d1d5db;padding:8px 12px;">JP Nagar, Dattagalli, Kuvempunagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mandya / Nanjanagud</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mandya, Nanjanagud, Srirangapatna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Where can I buy Mysore Mallige (jasmine) plants online?", answer: "RedHeart delivers Mysore Mallige plants across Mysuru. The Jasminum sambac variety grows best in warm, sunny positions with good drainage. Plant in the morning sun side of your courtyard or balcony, water regularly, and fertilise monthly during summer. Mysuru's pleasant climate is ideal for mallige, and a well-established plant blooms prolifically from April through October." },
      { question: "Is same-day plant delivery available across Mysuru?", answer: "Yes. Same-day delivery is available across Mysuru including Palace area, Vijayanagar, Hebbal, JP Nagar, and all major residential areas. Order before 3 PM. Midnight delivery is also available for central Mysuru." },
      { question: "Which plant is best for Dasara gifting in Mysuru?", answer: "Chrysanthemum (shevanti) in full bloom is the most festive Dasara plant gift — it matches the marigold and flower decoration aesthetic of the celebrations. A jasmine (mallige) plant is deeply meaningful and culturally significant for Mysuru households. For a modern Dasara gift, a peace lily or areca palm in a premium planter is elegant and lasting." },
      { question: "Which roses grow well in Mysuru's climate?", answer: "Hybrid tea roses, floribunda roses, and miniature roses all grow exceptionally well in Mysuru's pleasant 12–32°C range. Plant in October for peak winter bloom (December–March). Water every 2-3 days, fertilise monthly with rose fertiliser, and prune to one-third after each flowering cycle. Mysuru's Brindavan Gardens-style rose display is achievable in a well-maintained garden." },
      { question: "What plant is good for gifting at Infosys or BEML offices in Mysuru?", answer: "Areca palm, ZZ plant, and peace lily are the most popular corporate plant gifts for Mysuru's IT campuses. Snake plant handles the AC-heavy office environment well. For personalised executive gifting, a monstera in a design planter or a lucky bamboo tower is impressive. We handle bulk corporate plant orders for Mysuru's tech and manufacturing companies." }
    ]
  },

  "mangaluru": {
    cityName: "Mangaluru",
    metaTitle: "Buy Plants Online in Mangaluru | Tropical & Coastal Plants | RedHeart",
    metaDescription: "Order plants online in Mangaluru (Mangalore). Tropical plants, anthurium, areca palm & gifting combos. Same-day delivery across Mangaluru. Starting ₹299.",
    h1: "Buy Plants Online in Mangaluru — Same-Day Plant Delivery in Karnataka's Coastal City",
    metaKeyword: "plants online mangaluru, buy plants mangalore, indoor plants mangaluru, plant delivery mangalore karnataka, tropical plants mangaluru, areca palm mangaluru, online nursery mangalore",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Mangaluru — The Coastal Tiger Gets Doorstep Plant Delivery</h2>

<p>Mangaluru (formerly Mangalore) sits between the Western Ghats and the Arabian Sea — one of India's most dramatic geographic settings. The city has the Netravathi and Gurupura rivers flanking it, the Panambur beach to the north, and the rain-soaked Ghats beginning just 30 km east. Mangaluru is a prosperous port city — home to fishing communities, a strong Tulu, Kannada, Beary, and Christian cultural mix, and the headquarters of some of India's major banks (Canara Bank, Corporation Bank were both founded here). The city is also one of India's fastest-growing in terms of real estate, with the Infosys campus and large hospital networks drawing a young, educated workforce.</p>

<p>Mangaluru's climate is intensely tropical and wet — one of India's highest rainfall cities (3,800 mm annually), with a monsoon so reliable and heavy that the Western Ghats behind the city create some of India's most lush tropical vegetation. This extraordinary rainfall and high humidity makes Mangaluru exceptional for growing tropical plants. Even plants that require careful humidity management in dry Indian cities grow effortlessly here. RedHeart delivers across Mangaluru, Udupi, and Kundapur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Tropical Plants for Mangaluru's Exceptional Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It's Perfect Here</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Humidity Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves Mangaluru's year-round humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Natural tropical habitat here</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Native to wet coastal tropics</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, very low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Mangaluru home, trailing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja, coastal sun</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bird of Paradise</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, statement tropical</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹899</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Mangaluru's Monsoon and Plant Life</h3>

<p>Mangaluru's June–September monsoon is one of India's most dramatic. The city receives 300–400 mm of rain in a single monsoon month — windows of relentless heavy rain that can last days. This monsoon is not just weather but an identity; Mangaluru's famous Tulu Yakshagana performances pause, coastal fishing communities rest their boats, and the entire landscape turns vivid green as Western Ghats vegetation explodes with growth. Indoor plants during monsoon need essentially no additional watering — the ambient humidity (90%+) and indirect light through grey skies are sufficient. Outdoor pots need excellent drainage to prevent waterlogging — raise pots slightly off flat surfaces and check drainage holes before the monsoon begins.</p>

<p>For the Gokulashtami (Janmashtami) and Navratri celebrations that are significant in Mangaluru's Tulu Hindu community, flowering plants, tulsi, and marigold garlands are traditional. The Mangaladevi Temple and numerous other temples here maintain elaborate garden spaces, and the city has deep horticultural tradition embedded in its temple culture.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Mangaluru</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Mangaluru</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hampankatta, Lalbagh, Balmatta</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North Mangaluru</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Panambur, Surathkal, Kuloor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South Mangaluru</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kadri, Kavoor, Bajpe, Bantwal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Udupi / Kundapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Udupi town, Manipal, Kundapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Mangaluru's intense monsoon climate?", answer: "Anthurium, monstera, areca palm, peace lily, and bird of paradise all love Mangaluru's year-round humidity and warm temperatures. These plants require almost no special humidity care here — the Western Ghats climate provides naturally ideal tropical conditions. Ensure good drainage during monsoon; the only risk is waterlogging, not drought." },
      { question: "Is same-day plant delivery available in Mangaluru?", answer: "Yes. Same-day delivery is available across Mangaluru including Hampankatta, Panambur, Surathkal, Kadri, and all major residential areas. Order before 3 PM. Midnight delivery is also available for central Mangaluru. We deliver to Udupi and Manipal with advance notice." },
      { question: "Which plant is best for Janmashtami gifting in Mangaluru?", answer: "Tulsi plant is the most sacred Janmashtami gift in Mangaluru's Tulu Hindu households — tulsi is offered to Vishnu/Krishna during the festival. A tulsi in a decorated clay pot is a deeply meaningful gift. For a modern alternative, a money plant or peace lily in a ceramic planter is thoughtful and lasting." },
      { question: "How do I prevent overwatering during Mangaluru's monsoon?", answer: "During Mangaluru's June–September monsoon (some of India's heaviest rainfall), indoor plants need watering once a week or less — ambient humidity is so high that soil stays moist. Outdoor pots must have large, unobstructed drainage holes. Raise pots slightly off flat surfaces with pot feet or small stones to allow water to flow out freely. Root rot from waterlogging is the primary plant killer during Mangaluru's monsoon." },
      { question: "Do you deliver plants to Udupi and Manipal?", answer: "Yes. Udupi and Manipal (including the Manipal University area) are within our delivery zone. Delivery takes 4–6 hours from Mangaluru. Manipal's large student population has growing demand for compact desk plants — succulents, money plants, and snake plants are popular choices there." }
    ]
  },

  "thiruvananthapuram": {
    cityName: "Thiruvananthapuram",
    metaTitle: "Buy Plants Online in Thiruvananthapuram | Tropical & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Thiruvananthapuram (Trivandrum). Tropical, indoor & gifting plants. Same-day delivery across TVM. Starting ₹299. Kerala's capital gets doorstep greens.",
    h1: "Buy Plants Online in Thiruvananthapuram — Same-Day Delivery Across Kerala's Capital",
    metaKeyword: "plants online thiruvananthapuram, buy plants trivandrum, indoor plants thiruvananthapuram, plant delivery trivandrum kerala, tropical plants thiruvananthapuram, online nursery trivandrum",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Thiruvananthapuram — God's Own Capital Gets Doorstep Greens</h2>

<p>Thiruvananthapuram — "the city of the sacred serpent" — is Kerala's capital and a city of extraordinary beauty. The Sri Padmanabhaswamy Temple, one of the world's wealthiest temples, sits at the city's spiritual heart. The Kovalam beach (just 16 km south) draws tourists from across the globe. The city's skyline is defined by gentle hills, dense coconut groves, and the backdrop of the Western Ghats. Thiruvananthapuram is also a significant government and technology city — the Kerala IT corridor at Technopark is home to hundreds of IT companies, and the city has one of India's highest literacy rates and best quality-of-life indicators.</p>

<p>Thiruvananthapuram's climate is coastal Kerala tropical: warm and humid year-round (26–33°C), with two monsoons (southwest June–September and northeast October–November) delivering combined rainfall of over 1,700 mm. This extraordinary moisture-richness makes the city exceptional for growing tropical plants. RedHeart delivers across Thiruvananthapuram, Kollam, Neyyattinkara, and Attingal with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants That Thrive in Thiruvananthapuram's Tropical Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Works Here</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves TVM's humidity, blooms long</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Kerala home, trailing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus (Chembaruthi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pooja, daily offering, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement indoor, Technopark offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, government offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, Technopark IT desks</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Kerala's Plant Traditions in Thiruvananthapuram</h3>

<p>Thiruvananthapuram's plant culture is shaped by both the ancient Kerala horticultural tradition and its modern cosmopolitan identity. The thulasi maadam — a raised tulsi-growing platform in the courtyard — is present in almost every traditional Kerala home in Thiruvananthapuram. Chembaruthi (red hibiscus) is offered to Devi daily in the city's numerous temples. For Onam — the state's biggest festival — the pookalam (flower carpet) is created at home with fresh flowers from the garden. Families with mature garden spaces plant chrysanthemum, marigold, and seasonal flowers specifically for the Onam pookalam tradition in September.</p>

<p>The Technopark community (30,000+ IT professionals) has a growing interest in indoor plants for both home and workspace. Monstera, snake plant, and anthurium are popular among the young professional population in Technopark's surrounding neighbourhoods — Kazhakkoottam, Kowdiar, and Kesavadasapuram. We supply plants to both individual homes and corporate offices across Technopark and the civil station area.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Thiruvananthapuram</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central TVM</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Palayam, Kowdiar, Vazhuthacaud</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North TVM (Technopark)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kazhakkoottam, Technopark, Peroorkada</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South TVM</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kovalam, Neyyattinkara, Attingal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kollam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kollam town, Kottarakkara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for a Thiruvananthapuram home in Kerala's climate?", answer: "Anthurium, peace lily, money plant, monstera, and hibiscus all grow beautifully in Thiruvananthapuram's warm, humid climate with minimal care. These plants love the natural warmth and moisture. Water moderately — the humidity means soil stays moist longer than in drier cities. Avoid overwatering, especially during the monsoon." },
      { question: "Is same-day plant delivery available in Kazhakkoottam and Technopark?", answer: "Yes. Same-day delivery is available across Kazhakkoottam, Technopark, Kowdiar, Palayam, and all major Thiruvananthapuram areas. Order before 3 PM. Midnight delivery is also available for central TVM and Technopark areas. We deliver to corporate offices in Technopark with advance scheduling." },
      { question: "What plant is best for Onam pookalam in Thiruvananthapuram?", answer: "For Onam, pot a chrysanthemum (shevanti), marigold, or kanakambaram — these are the most common pookalam flowers. A full pot of mixed seasonal flowers for pookalam creation is available from us during the Onam season (August–September). Tulsi in a decorated maadam is the traditional plant for Kerala homes and is a meaningful alternative to cut-flower arrangements." },
      { question: "Which indoor plant is best for a Technopark IT office?", answer: "Monstera, areca palm, and ZZ plant are the top choices for Technopark offices in Thiruvananthapuram. Monstera looks spectacular in biophilic-designed open-plan offices. Areca palm purifies air and looks premium in reception areas. ZZ plant handles offices where watering is irregular. We supply bulk plant orders for Technopark offices with advance notice." },
      { question: "How often should I water plants in Thiruvananthapuram's humidity?", answer: "In Thiruvananthapuram's high humidity (70–90% year-round), most indoor plants need watering only once a week or less. Always check soil with your finger before watering — only water when the top 2 inches feel dry. During the monsoon, indoor plants in well-lit rooms may go 10-14 days without watering. Overwatering is the most common plant care mistake in Kerala's naturally moist climate." }
    ]
  },

  "nashik": {
    cityName: "Nashik",
    metaTitle: "Buy Plants Online in Nashik | Grapes, Rose & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Nashik. Rose, indoor plants, succulents & gifting combos. Same-day delivery across Nashik. Starting ₹299. Maharashtra's Wine Capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Nashik — Same-Day Plant Delivery in the City of Vines",
    metaKeyword: "plants online nashik, buy plants nashik, indoor plants nashik, plant delivery nashik maharashtra, rose plant nashik, online nursery nashik wine capital",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Nashik — Maharashtra's Wine Capital Gets Doorstep Greens</h2>

<p>Nashik is one of Maharashtra's most multi-faceted cities: the wine capital of India (Sula, Grover, and Chateau d'Ori vineyards all operate from here), the city of the Kumbh Mela (held every 12 years on the Godavari's banks), and a major centre for India's grape and onion farming. The city sits at 565 metres elevation on the Deccan plateau, giving it a climate that's perceptibly cooler and more pleasant than Pune and far cooler than Mumbai. Nashik's large manufacturing base (BOSCH, ABB, Mahindra, Crompton) and proximity to Mumbai (170 km) have made it a growing satellite city with significant residential development in areas like Gangapur Road and College Road.</p>

<p>Nashik's climate is Deccan elevated — summers peak at 38–40°C (cooler than Nagpur), monsoon delivers 690 mm, and winters are genuinely cool (8–14°C at night). This moderate climate, with the vineyards' need for skilled horticulture nearby, means Nashik has a cultivated horticultural sensibility. Rose plants, bougainvillea, and seasonal annuals grow beautifully here in winter. RedHeart delivers across Nashik city, Malegaon, and Igatpuri with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Popular in Nashik Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter bloom, wine country aesthetic</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Apr</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, all year</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, handles cool winters</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, compound, summer bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mar–Jun</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pooja, courtyard, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Chrysanthemum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganesh Chaturthi decoration, seasonal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Dec</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, Nashik manufacturing offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Nashik's Horticultural Identity</h3>

<p>Nashik's identity as India's wine capital and a major grape-growing region gives it a unique horticultural depth. The vineyards that produce India's award-winning wines — Sula's Sauvignon Blanc, Chateau d'Ori's reds — are worked by skilled horticulturalists who understand soil, drainage, and micro-climate management at an expert level. This viticultural tradition has given Nashik a broader appreciation for plant cultivation and garden design. The city's wine tourism circuit (Sula's annual SulaFest, vineyard tours) has also created demand for decorative plants and garden aesthetics among Nashik's hospitality sector.</p>

<p>Gangapur Road and College Road — Nashik's most desirable residential corridors — have large villa-style homes with garden spaces where rose, bougainvillea, and seasonal annuals are cultivated with care. Kumbh Mela, held every 12 years on the Godavari's banks, brings millions of visitors and creates significant demand for floral and plant decoration in the city during its period.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Nashik</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Nashik</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gangapur Road, College Road, Panchavati</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East Nashik</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Satpur, Ambad, MIDC</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Vineyard Belt</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sula area, Ozar, Dindori Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Malegaon / Igatpuri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Malegaon, Igatpuri, Sinnar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Nashik's cooler Deccan climate?", answer: "Rose, bougainvillea, chrysanthemum, and seasonal annuals like petunia and pansy grow exceptionally well in Nashik's cool winters (8–14°C nights). October to February is Nashik's best gardening window. Indoor plants — snake plant, peace lily, ZZ plant, and areca palm — thrive year-round. Nashik's elevation makes it one of Maharashtra's best rose-growing cities." },
      { question: "Is same-day plant delivery available in Nashik?", answer: "Yes. Same-day delivery is available across Nashik including Gangapur Road, College Road, Satpur, Ambad, and all major residential areas. Order before 3 PM. Midnight delivery is also available for central Nashik. We deliver to the Sula vineyard belt and Ozar area with advance notice." },
      { question: "What plant is best for Ganesh Chaturthi gifting in Nashik?", answer: "Chrysanthemum (shevanti) is a popular Ganesh Chaturthi plant gift in Nashik — its season aligns perfectly with the festival. Tulsi in a decorated clay pot is the most sacred choice. For a modern gifting option, a money plant or lucky bamboo in a premium planter with a Ganpati message card is thoughtful and appropriate for Nashik's large festival-celebrating population." },
      { question: "When is the best time to plant roses in Nashik?", answer: "October is the ideal time to plant roses in Nashik. The cool October planting allows root establishment before peak blooming season (December–March). Nashik's 8–14°C winter nights are ideal for hybrid tea and floribunda roses, which bloom prolifically in cool conditions. Water every 3 days, fertilise monthly, and prune lightly after each flowering flush." },
      { question: "Do you deliver plants to the Sula Vineyards area?", answer: "Yes. The Sula area and Dindori Road vineyard belt are within our Nashik delivery zone. Delivery takes 3–5 hours. Wine tourism properties in the Nashik vineyard belt have growing demand for decorative plants and garden plants — we can supply and schedule garden plant orders for hospitality properties in this area." }
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
