// Plants Tier 1 Batch 1 — 8 major cities (highest traffic priority)
// Bangalore, Bhubaneswar, Chandigarh, Chennai, Coimbatore, Hyderabad, Indore, Jaipur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bangalore": {
    cityName: "Bangalore",
    metaTitle: "Buy Plants Online in Bangalore | Indoor, Outdoor & Gift Plants | RedHeart",
    metaDescription: "Order plants online in Bangalore with same-day delivery. Indoor plants, succulents, air-purifying plants, flowering plants & gifting combos. Starting ₹299.",
    h1: "Buy Plants Online in Bangalore — Same-Day Delivery Across the City",
    metaKeyword: "plants online bangalore, buy plants bangalore, indoor plants bangalore, plant delivery bangalore, online nursery bangalore, air purifying plants bangalore, succulents bangalore bengaluru",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bangalore — India's Garden City Still Has Room for More Green</h2>

<p>Bangalore was once called the "Garden City of India" — a reputation earned by the open parks, tree-lined roads, and abundance of flowering trees like the gulmohar, jacaranda, and Indian laburnum that bloom across the city every spring. Today's Bangalore is denser and more concrete than its colonial-era self, but the love of green runs deep in the city's residents. Tech professionals decorating their Whitefield apartments, families in Jayanagar's older bungalows, cafes in Indiranagar looking for statement indoor plants — all of them share a culture of plant appreciation that is arguably stronger in Bangalore than in any other Indian metro.</p>

<p>Bangalore's climate is its greatest plant-growing asset. Sitting at 920 metres above sea level, the city maintains year-round temperatures between 15°C and 33°C — never truly hot, never very cold. This temperate Deccan plateau climate means a vast range of plants can be grown here without special equipment. Succulents don't get waterlogged, tropical plants don't get heat-stressed, and temperate favourites like roses and lavender thrive without the killing frosts of northern winters. RedHeart delivers plants across Bangalore — from Whitefield to Jayanagar, Koramangala to Hebbal — with same-day delivery for orders placed before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Our Most Popular Plants in Bangalore</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Bangalore Loves It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Light Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera Deliciosa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement plant, thrives in mild climate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indirect</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, bedroom essential</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low-light indoors</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Fiddle Leaf Fig</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Premium statement for living rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹1,299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Succulents</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting, Bangalore's favourite</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pothos (Money Plant)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every home, hanging basket</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, office lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Philodendron</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Trailing or upright, fast-growing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹449</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indirect</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tech office, very low maintenance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, garden — thrives in Bangalore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Bangalore's Climate — Why Almost Everything Grows Here</h3>

<p>Bangalore's elevation at 920m makes it one of the most plant-friendly metros in India. The temperature range (15–33°C year-round) is close to ideal for an enormous variety of species. Succulents don't rot in Bangalore's relatively dry air the way they do in Mumbai or Kolkata. Tropical plants don't get heat-killed in May the way they do in Delhi or Chennai. Roses bloom spectacularly from November through February. Lavender — barely possible in most Indian cities — can be grown in Bangalore with some care.</p>

<p>The two main challenges for Bangalore plant growers: the monsoon (June–September) brings heavy rain that can waterlog outdoor pots if drainage is poor, and the dry winter months (November–January) can be surprisingly dry and cold at night (12–15°C). For outdoor pots, use well-draining soil and raise pots off the ground during monsoon. For indoor plants in North Bangalore apartments that can be cooler in winter, move heat-loving tropicals away from windowsills in December and January.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Bangalore — For Every Occasion</h3>

<p>Bangalore's cosmopolitan, tech-first culture has made plant gifting mainstream. Farewell gifts, housewarming gifts, birthday gifts — the potted plant is Bangalore's most popular alternative to flowers. Startups and tech companies often give employee gifts that include a plant — a succulent kit or a monstera in a branded planter. For traditional Kannada and South Indian families, tulsi and jasmine (mallige) are sacred choices. The corporate belt around Whitefield, Electronic City, and Koramangala drives significant demand for premium indoor plants — fiddle leaf figs, rubber plants, and large areca palms for lobbies and open-plan offices.</p>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Occasion</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Plant Gift</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Works</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Housewarming / Griha Pravesh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera or Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement plant for new spaces</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Work Farewell</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Succulent Kit / Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Compact, travel-friendly, lasting</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Birthday</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily / Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Colourful, long-lasting, unique</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Office Opening</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fiddle Leaf Fig / ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Professional, impressive, low-care</td></tr>
    <Tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Raksha Bandhan / Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant / Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Auspicious, traditional meaning</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Zones in Bangalore</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone / Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Localities</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery Time</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Bangalore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">MG Road, Jayanagar, BTM Layout</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–3 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East Bangalore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indiranagar, Koramangala, Whitefield</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North Bangalore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hebbal, Yelahanka, Devanahalli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">South Bangalore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">JP Nagar, Bannerghatta, Electronic City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">West Bangalore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajajinagar, Yeshwanthpur, Vijayanagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Bangalore's weather?", answer: "Almost everything grows well in Bangalore's year-round mild climate. Succulents, monstera, snake plant, ZZ plant, peace lily, fiddle leaf fig, bougainvillea, and roses all thrive here. Bangalore is one of the few Indian cities where you can successfully grow both succulents (need dry air) and tropical plants (need warmth) side by side." },
      { question: "Can I get same-day plant delivery in Koramangala or Whitefield?", answer: "Yes. Same-day delivery is available across Bangalore including Koramangala, Whitefield, Indiranagar, Jayanagar, Hebbal, and Electronic City. Order before 3 PM for same-day delivery. Midnight delivery is also available across central and east Bangalore." },
      { question: "Which indoor plant is best for a tech office in Bangalore?", answer: "ZZ plant, snake plant, and peace lily are the top choices for tech offices — they survive in AC-heavy environments with indirect light, require minimal watering, and look professional. For statement pieces in lobbies, a fiddle leaf fig or large areca palm works beautifully. We supply bulk corporate plant orders across Bangalore's tech parks." },
      { question: "What plant gift works for a Bangalore startup farewell party?", answer: "A succulent trio in a modern ceramic planter is the most popular plant gift in Bangalore's startup culture — compact, stylish, and genuinely useful. Lucky bamboo and a small monstera in a concrete pot are close seconds. For senior colleagues, a fiddle leaf fig or a large monstera in a premium planter makes a lasting impression." },
      { question: "How do I care for plants during Bangalore's monsoon?", answer: "During Bangalore's monsoon (June–September), reduce indoor plant watering frequency — the ambient humidity keeps soil moist longer. For outdoor pots and balconies, ensure drainage holes are clear. Raise pots off the ground to prevent waterlogging. Most outdoor plants in Bangalore actually thrive during monsoon — just check for fungal issues on leaves and remove dead matter promptly." }
    ]
  },

  "bhubaneswar": {
    cityName: "Bhubaneswar",
    metaTitle: "Buy Plants Online in Bhubaneswar | Indoor & Tropical Plants | RedHeart",
    metaDescription: "Order plants online in Bhubaneswar. Indoor plants, tropical foliage, lotus & gifting combos with same-day delivery. Starting ₹299. Odisha's temple city goes green.",
    h1: "Buy Plants Online in Bhubaneswar — Same-Day Plant Delivery in Odisha's Capital",
    metaKeyword: "plants online bhubaneswar, buy plants bhubaneswar, indoor plants bhubaneswar, plant delivery bhubaneswar odisha, tropical plants bhubaneswar, online nursery bhubaneswar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bhubaneswar — The Temple City Embraces Doorstep Greens</h2>

<p>Bhubaneswar is Odisha's state capital and one of India's fastest-growing planned cities. Known as the "Temple City of India" for its over 700 ancient temples — including the magnificent Lingaraja Temple and the Mukteshwar Temple — Bhubaneswar has an ancient relationship with plants and nature. Sacred flowers like lotus, bilva, and hibiscus are woven into temple worship. The city's newer avatar as an IT and education hub (KIIT, IIT Bhubaneswar, NISER all call it home) has brought a younger, modern population that takes plant décor seriously — from terrace gardens in Patia to desk plants in the tech parks of Infocity.</p>

<p>Bhubaneswar's tropical climate is hot and humid — summers peak at 40–42°C, the monsoon (June–September) delivers generous 1,500 mm of rainfall, and winters are pleasant (10–27°C). This range suits a broad variety of tropical plants. RedHeart delivers across Bhubaneswar, Cuttack, Puri, and Khurda with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Bhubaneswar Homes and Offices</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lotus Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple pooja, garden ponds</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, Infocity offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple offering, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sacred Plants and Temple Traditions in Bhubaneswar</h3>

<p>In Bhubaneswar, plants and worship are inseparable. Hibiscus (jaba) is the most commonly offered flower at Shiva temples, and many Odia households grow their own hibiscus in the courtyard. The lotus — Odisha's state flower — is offered at Jagannath temples and kept in garden ponds at heritage homes near the old city. Tulsi is central to daily Vaishnava worship, and bilva leaves are important in Lingaraja Temple rituals. When you gift a hibiscus plant, a lotus pot, or a tulsi to someone in Bhubaneswar, you're giving something that integrates into their daily spiritual life.</p>

<p>The newer Bhubaneswar — Patia's student colonies, Infocity's tech offices, the university areas around KIIT and NISER — has a completely different plant aesthetic. Young professionals and students here lean towards succulents, monstera, philodendron, and desk plants like lucky bamboo and ZZ plant. It's a city with two parallel plant cultures, and RedHeart serves both.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bhubaneswar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Localities</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central BBS</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lingaraj, Saheed Nagar, Kalpana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North BBS</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Patia, Infocity, Nayapalli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Cuttack</td><td style="border:1px solid #d1d5db;padding:8px 12px;">College Square, Badambadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Puri / Khurda</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Puri town, Khurda town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which sacred plants can I order for temple pooja in Bhubaneswar?", answer: "We deliver hibiscus (jaba), tulsi, lotus plants, and bilva sapling for temple use in Bhubaneswar. Hibiscus and tulsi are available for same-day delivery. Lotus plants (rhizome + aquatic soil kit) are available for home garden ponds or temple tanks. These are among our most sought-after plants in Odisha." },
      { question: "Can I get same-day plant delivery in Patia and Infocity area?", answer: "Yes. Same-day delivery is available in Patia, Infocity, Nayapalli, Saheed Nagar, and across Bhubaneswar. Order before 3 PM. Midnight delivery is also available for central Bhubaneswar and Cuttack." },
      { question: "What plant works best as a gift for an Odia housewarming?", answer: "Tulsi in a decorated clay pot is the most traditional and meaningful housewarming gift in Odisha — it's placed at the entrance or courtyard for daily worship. Lucky bamboo and money plant are popular modern additions. A large areca palm or monstera is excellent for gifting to the newer apartment-dwelling generation in Bhubaneswar." },
      { question: "Which indoor plants are best for Bhubaneswar's summer heat?", answer: "Snake plant, ZZ plant, money plant, and peace lily handle Bhubaneswar's 40–42°C summers well indoors. Keep them away from direct afternoon sun through west-facing windows. Areca palm works beautifully in air-conditioned spaces. Avoid delicate ferns outdoors in summer — they need shelter from the hot, dry pre-monsoon winds." },
      { question: "Do you deliver plants to Puri from Bhubaneswar?", answer: "Yes. Puri is within our delivery coverage from Bhubaneswar. Delivery to Puri takes approximately 4–6 hours. Same-day delivery is available for Puri orders placed before 1 PM. We also deliver to the Jagannath Puri temple precinct area — please include full address and landmark." }
    ]
  },

  "chandigarh": {
    cityName: "Chandigarh",
    metaTitle: "Buy Plants Online in Chandigarh | Rose, Indoor & Seasonal Plants | RedHeart",
    metaDescription: "Order plants online in Chandigarh. Roses, indoor plants, seasonal flowers & gifting plants with same-day delivery. Starting ₹299. City Beautiful's best plant delivery.",
    h1: "Buy Plants Online in Chandigarh — Plants for the City Beautiful",
    metaKeyword: "plants online chandigarh, buy plants chandigarh, rose plant chandigarh, indoor plants chandigarh, plant delivery chandigarh, online nursery chandigarh punjab haryana",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Chandigarh — The City Beautiful Deserves the Most Beautiful Plants</h2>

<p>Chandigarh holds a unique place in Indian urban history — it was India's first planned city post-independence, designed by Le Corbusier and Pierre Jeanneret in the 1950s, with a grid of sectors, wide boulevards, and generous green spaces built into the city's DNA. The Zakir Hussain Rose Garden — Asia's largest rose garden — sits at the heart of Chandigarh's Sector 16, housing over 1,600 rose varieties. Sukhna Lake, the Rock Garden, Leisure Valley — Chandigarh has more green per square kilometre than almost any other Indian city its size. In a city designed around beautiful open spaces, bringing plants into the home is not an afterthought but a natural extension of the city's character.</p>

<p>Chandigarh's climate is semi-arid with four distinct seasons — hot summers (42–44°C in June), pleasant monsoon, cool autumn, and cold winters (2–5°C in January). This full four-season climate means different plants shine at different times of year. The winter (November–February) is when Chandigarh's gardens are at their best — roses bloom, seasonal flowers fill the parks, and the Bougainvillea Festival draws plant lovers from across the region. RedHeart delivers plants across Chandigarh, Mohali, Panchkula, and Zirakpur with same-day service.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Popular in Chandigarh</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Chandigarh Loves It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Garden city legacy, winter bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor year-round, easy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Seasonal winter blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Spring peak, terrace</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Feb–May</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, tolerates cold winters</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily pooja, courtyard</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, desk, offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pansy / Petunia (Seasonal)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter bedding plants</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Feb</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Chandigarh's Rose Culture — Growing Your Own</h3>

<p>Chandigarh's rose heritage from the Zakir Hussain Rose Garden makes rose cultivation a point of civic pride for many residents. Growing roses at home in Chandigarh is genuinely rewarding — the cool October to March weather is ideal, and with proper care, home rose plants can bloom as vigorously as the Rose Garden's showpieces. Plant rose saplings in October; water deeply every 3-4 days (daily in summer); fertilise with compost or rose-specific fertiliser every 4-6 weeks during growing season; prune dead flowers and weak branches in September before the new season starts. The Bougainvillea Festival (usually in February-March) is a good time to pick up new varieties and try different colours for your terrace.</p>

<p>Beyond roses, Chandigarh's residents have fully embraced indoor plants in recent years. Sectors 17, 22, and the newer residential sectors in Panchkula and Mohali have strong demand for areca palms, snake plants, monstera, and ZZ plants — particularly in the growing number of IT offices and co-working spaces across the Tricity.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Chandigarh Tricity</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Localities</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Chandigarh City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sectors 17, 22, 35, 43</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mohali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Phase 7, IT City, Aerocity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Panchkula</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sectors 5, 11, 20, Kalka</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Zirakpur / Derabassi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">VIP Road, Zirakpur town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I grow a rose garden at home in Chandigarh?", answer: "Absolutely. Chandigarh's climate is among the best in India for rose cultivation. Plant rose saplings in October for bloom from December through March. Use a sunny south or east-facing spot, deep-water every 3-4 days, and feed with compost monthly. Prune in September before the season. Miniature roses work well in balcony pots; full-size varieties thrive in ground beds or large planters." },
      { question: "Is same-day plant delivery available in Chandigarh sectors?", answer: "Yes. Same-day delivery is available across all Chandigarh sectors, Mohali, Panchkula, and Zirakpur for orders placed before 3 PM. Midnight delivery is also available for Chandigarh city and Mohali." },
      { question: "What plant gift works for a Chandigarh housewarming?", answer: "A money plant or lucky bamboo in a ceramic pot is the classic housewarming gift in Chandigarh. For a more upscale gift, a large areca palm or monstera deliciosa in a premium planter makes a statement. Rose plants are very popular between October and February when they'll bloom soon after being planted." },
      { question: "Which winter plants are best for Chandigarh's cold January?", answer: "Snake plant, money plant, and ZZ plant handle Chandigarh's cold winters (2–5°C nights) well when kept indoors. For outdoor seasonal colour in winter, pansy, petunia, alyssum, and marigold are excellent choices — they love the cool weather and will bloom prolifically from November through February." },
      { question: "Do you deliver plants to Mohali IT City and Aerocity?", answer: "Yes. Mohali's IT City, Phase 7, and Aerocity areas are well within our delivery zone. Same-day plant delivery is available. Many IT companies in Mohali order plants for office spaces — we supply areca palms, snake plants, and ZZ plants for corporate offices with advance notice and bulk pricing." }
    ]
  },

  "chennai": {
    cityName: "Chennai",
    metaTitle: "Buy Plants Online in Chennai | Indoor, Jasmine & Tropical Plants | RedHeart",
    metaDescription: "Order plants online in Chennai with same-day delivery. Indoor plants, jasmine, tropical foliage, air-purifying plants & gifting combos. Starting ₹299.",
    h1: "Buy Plants Online in Chennai — Same-Day Plant Delivery Across the City",
    metaKeyword: "plants online chennai, buy plants chennai, indoor plants chennai, plant delivery chennai, jasmine plant chennai, online nursery chennai tamil nadu, malligai plant chennai",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Chennai — Tamil Nadu's Coastal Capital Gets Doorstep Greens</h2>

<p>Chennai is a city of contrasts: the second-longest urban beach in the world (Marina Beach) beside dense residential areas; a deep classical Tamil heritage expressed through Carnatic music, Bharatanatyam, and Dravidian temple architecture; and a rapidly growing modern economy anchored in automotive manufacturing, IT, and healthcare. In this layered city, plants hold a special place in daily life. The jasmine — malligai (Jasminum sambac) — is Chennai's most iconic plant: sold by the meter at Flower Bazaar on Anna Salai, worn in women's hair, offered at temples, and strung at doorways. Growing a malligai at home is a deeply Tamil act.</p>

<p>Chennai's climate is hot and humid — summers reach 38–42°C with high humidity (this is coastal, not dry heat), the northeast monsoon (October–December) brings the city's heaviest rains, and winters are warm (20–30°C). This tropical coastal climate is excellent for a wide range of plants but demands heat-tolerant and humidity-adapted species. RedHeart delivers plants across Chennai — from Anna Nagar to Velachery, Adyar to Sholinganallur — with same-day delivery for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Loved by Chennai Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Chennai Loves It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Light</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malligai)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tamil culture, daily use, fragrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, heat-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–bright</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every home, indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves humidity, long blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indirect</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, living room statement</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low maintenance in AC offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Thulasi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily pooja, essential in Tamil homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, low-light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Chennai's Plant Culture — Jasmine, Thulasi, and the Tamil Home</h3>

<p>The Tamil relationship with plants is ancient and intimate. Thulasi (tulsi) is considered the living embodiment of Lakshmi in Vaishnava tradition, and virtually every traditional Chennai home has a thulasi madam — an elevated clay pot stand — in the front courtyard or verandah. It's watered daily, a lamp is lit beside it at dusk, and its leaves are used in prasad, medicine, and prayer. No plant has a more central place in Chennai's domestic life. Alongside thulasi, malligai (jasmine) is woven into daily aesthetics — a strand of fresh jasmine flowers in the hair is part of everyday feminine adornment in traditional Chennai homes, and the plant is cultivated in kitchen gardens across the city.</p>

<p>Modern Chennai — the OMR tech corridor, Anna Nagar's residential blocks, Adyar's mixed neighbourhood — has embraced indoor plants as part of the biophilic design trend. Areca palms in lobbies of Sholinganallur offices, monstera in Velachery apartments, snake plant forests in the newer co-working spaces along OMR — plants have become a design language in Chennai's contemporary spaces.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Chennai</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Localities</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North Chennai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Anna Nagar, Perambur, Kolathur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Chennai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">T Nagar, Adyar, Mylapore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">OMR / South Chennai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sholinganallur, Velachery, Perungudi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">West Chennai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Porur, Ambattur, Avadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Where can I buy a malligai (jasmine) plant online in Chennai?", answer: "RedHeart delivers malligai (Jasminum sambac) plants to all Chennai areas. Jasmine is our most popular plant in Chennai — it grows vigorously in full sun, blooms from spring through monsoon, and fills the home with fragrance. Plant in a sunny spot, water daily, and trim lightly after blooming. Order before 3 PM for same-day delivery." },
      { question: "Which indoor plants are best for Chennai's hot, humid climate?", answer: "Anthurium, areca palm, snake plant, peace lily, and ZZ plant all do excellently in Chennai's indoor conditions. Chennai's natural humidity means tropical plants need almost no extra care. Keep them in bright indirect light, water moderately (humidity slows evaporation), and they'll thrive year-round." },
      { question: "Is same-day plant delivery available in Anna Nagar and T Nagar?", answer: "Yes. Same-day delivery is available across Anna Nagar, T Nagar, Adyar, Mylapore, and all central Chennai areas. Order before 3 PM for same-day delivery. Midnight delivery is also available across Chennai." },
      { question: "What is a good plant gift for a Pongal celebration in Chennai?", answer: "Marigold and sugarcane plants are traditionally associated with Pongal, but a thulasi (tulsi) plant in a decorated clay pot is the most meaningful plant gift for a Tamil family — it carries spiritual significance throughout the year. For a contemporary twist, an anthurium or peace lily in a ceramic planter is a beautiful modern gift." },
      { question: "Do you supply plants for offices on the OMR tech corridor in Chennai?", answer: "Yes. We supply indoor plants to offices along OMR (Sholinganallur, Perungudi, Navalur) and other Chennai tech corridors. Areca palms, snake plants, ZZ plants, and peace lilies are the most popular choices for Chennai tech offices. Bulk orders with advance notice are accommodated at corporate pricing." }
    ]
  },

  "hyderabad": {
    cityName: "Hyderabad",
    metaTitle: "Buy Plants Online in Hyderabad | Indoor, Air-Purifying & Gift Plants | RedHeart",
    metaDescription: "Order plants online in Hyderabad with same-day delivery. Indoor plants, succulents, air-purifying plants & gifting combos. Starting ₹299. Freshly sourced, healthy plants.",
    h1: "Buy Plants Online in Hyderabad — Same-Day Delivery Across Cyberabad and Old City",
    metaKeyword: "plants online hyderabad, buy plants hyderabad, indoor plants hyderabad, plant delivery hyderabad, air purifying plants hyderabad, online nursery hyderabad telangana",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Hyderabad — Where Biryani, Charminar, and Indoor Plants All Have a Home</h2>

<p>Hyderabad is a city of exceptional contrasts: the historic old city around Charminar and Laad Bazaar, the pearl and bangles bazaars of Nampally, the Golconda Fort on a rocky hill — and then, just across the Hussain Sagar, the gleaming towers of HITEC City, Gachibowli, and the Cyberabad tech district that houses some of the world's largest IT campuses. This duality makes Hyderabad one of India's most interesting cities for plant trends: traditional Telangana homes value sacred and flowering plants deeply, while the tech city's residents have fully embraced the indoor plant and biophilic design movement.</p>

<p>Hyderabad's climate is semi-arid to sub-humid — summers reach 40–44°C (the highest often in April, before the monsoon arrives), monsoon delivers 700–800 mm of rain from June to September, and winters are mild (12–28°C). The city's interior plateau position means lower humidity than Chennai or Mumbai, which is actually good for succulents and certain indoor plants. RedHeart delivers across Hyderabad — Banjara Hills to Secunderabad, Kukatpally to LB Nagar — with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Most Popular Plants in Hyderabad</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Hyderabad Chooses It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, handles heat & AC</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Auspicious, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tech offices, very low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">HITEC City lobbies, homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Desert Rose (Adenium)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Hyderabad's heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, drought-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Telugu households, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, offices, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Hyderabad — Across Two Cultures</h3>

<p>Hyderabad's unique cultural blend — Telugu-Hindu and Deccani-Muslim traditions coexisting for centuries — creates a diverse gifting landscape. For Telugu families, Ugadi (Telugu New Year) is the biggest occasion for new beginnings; gifting a money plant or a jasmine pot for Ugadi is popular and meaningful. For the city's Muslim community, Eid celebrations are occasions for fresh, living gifts — rose plants and flowering pots are particularly appreciated. The city's massive corporate workforce across HITEC City and Gachibowli drives consistent demand for professional plant gifts — farewell plants, client gifts, event plants. ZZ plants, areca palms, and snake plants are the corporate standard here.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Hyderabad</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">HITEC / West HYD</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gachibowli, Madhapur, Kondapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Central HYD</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Banjara Hills, Jubilee Hills, Somajiguda</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Old City / East HYD</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Secunderabad, LB Nagar, Dilsukhnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North HYD</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kukatpally, Miyapur, Bachupally</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Hyderabad's hot April–May temperatures?", answer: "Desert rose (adenium), snake plant, bougainvillea, aloe vera, and ZZ plant handle Hyderabad's 44°C pre-monsoon heat well. Keep indoor plants away from direct afternoon sun. Desert rose actually blooms most vigorously in Hyderabad's hot, dry pre-monsoon weeks — it loves the heat. Water outdoor plants daily from March through June." },
      { question: "Is same-day plant delivery available in Gachibowli and HITEC City?", answer: "Yes. Same-day delivery is available in Gachibowli, Madhapur, Kondapur, Banjara Hills, and all HITEC City-adjacent areas. Order before 3 PM. Midnight delivery is also available across Hyderabad. We regularly supply tech offices in this zone with areca palms and ZZ plants." },
      { question: "What plant gift works for a Hyderabad tech company employee event?", answer: "Snake plant, ZZ plant, and succulent kits are the most popular corporate plant gifts in Hyderabad's HITEC City. They're compact, modern-looking, and survive weeks in AC environments with minimal care. For senior leadership gifts, a premium monstera or fiddle leaf fig in a ceramic planter sends the right message." },
      { question: "Which plants are best for a Telugu family's Ugadi celebration?", answer: "Money plant and jasmine are the most meaningful Ugadi plant gifts in Hyderabad. Ugadi marks new beginnings, and these plants symbolise prosperity and fragrance-filled homes. Tulsi is also deeply appropriate. For a modern Ugadi gift, a money plant combo (with lucky bamboo) in a decorative pot is popular with younger generations." },
      { question: "How do I protect indoor plants from Hyderabad's dry summer air?", answer: "Hyderabad's pre-monsoon months (March–May) are hot and low in humidity. Tropical plants like peace lily and anthurium may show brown leaf tips in this period — mist them 2-3 times a week, or keep a tray of water near the plant. Snake plant and ZZ plant are naturally adapted to dry conditions and don't need special care. AC rooms help keep temperatures moderate." }
    ]
  },

  "indore": {
    cityName: "Indore",
    metaTitle: "Buy Plants Online in Indore | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Indore. Indoor plants, succulents, flowering plants & gifting combos. Same-day delivery across Indore. Starting ₹299. Fresh plants, care guide.",
    h1: "Buy Plants Online in Indore — Same-Day Plant Delivery in India's Cleanest City",
    metaKeyword: "plants online indore, buy plants indore, indoor plants indore, plant delivery indore madhya pradesh, online nursery indore, succulents indore clean city plants",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Indore — Where Clean City Spirit Meets Green Living</h2>

<p>Indore has won India's Swachh Survekshan award for the cleanest city multiple times — a record that reflects a genuine civic pride and orderliness that extends to its residents' approach to their homes and neighbourhoods. This clean-city culture has made Indore one of the most receptive cities in India for indoor plants and balcony gardening. Clean, well-organised interiors decorated with plants are increasingly the standard in Indore's growing middle-class and upper-middle-class residential areas. The city is also Madhya Pradesh's largest commercial centre — home to bustling markets like Rajwada and Sarafa Bazaar, modern malls, and a thriving food scene that has earned it a place among India's most interesting food cities.</p>

<p>Indore's climate is sub-humid — summers are hot (42–44°C in May), monsoon delivers 900–1,000 mm of rain from June to September, and winters are cool and dry (8–12°C minimum in January). Same-day plant delivery is available across Indore city, Ujjain, Dewas, and Pithampur with orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Indore Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best For</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care Level</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kitchen, medicinal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Indore — Festivals and Occasions</h3>

<p>Indore's predominantly Marwari-Jain business community and its large Hindi-speaking middle class both share a deep culture of auspicious gifting. Diwali is Indore's biggest plant gifting season — money plant, lucky bamboo, and tulsi are considered auspicious Lakshmi Puja plants. Indore's Sarafa Bazaar transforms into a Diwali fair, and plant gifting fits naturally into this festive commerce. For Navratri — celebrated with particular intensity in Indore's old city — marigold and other flowering plants are used extensively in decoration and gifting. Corporate gifting on New Year's Day (January 1) is also a strong tradition among Indore's business community, where a premium potted plant in a decorative planter makes an impressive send-off.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Indore</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Localities</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Indore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajwada, MG Road, Palasia</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">New Indore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vijay Nagar, AB Road, Super Corridor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ujjain / Dewas</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ujjain city, Dewas town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pithampur / Mhow</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pithampur industrial, Mhow town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Indore's climate?", answer: "Money plant, snake plant, aloe vera, bougainvillea, and tulsi all thrive in Indore. These plants handle the hot summers and cool winters well. For outdoor terrace gardens, bougainvillea is stunning from February through May. Indoor air-purifying plants like snake plant and areca palm are very popular in Indore's modern apartments." },
      { question: "Is same-day plant delivery available in Indore?", answer: "Yes. Same-day delivery is available across Indore city including Vijay Nagar, AB Road, Rajwada, MG Road, and Super Corridor areas. Order before 3 PM. Midnight delivery is also available for central Indore." },
      { question: "What plant gift is popular for Diwali in Indore?", answer: "Money plant and lucky bamboo are the most auspicious plant gifts for Diwali in Indore — both are associated with Lakshmi and prosperity. Tulsi in a decorative clay pot is deeply meaningful for religious households. For gifting to business contacts, a premium areca palm or peace lily in a ceramic planter is an impressive corporate Diwali gift." },
      { question: "Can I send a plant as a gift to someone in Ujjain from Indore?", answer: "Yes. Ujjain is within our delivery zone from Indore. Delivery to Ujjain takes 3–5 hours. Same-day delivery is available for Ujjain orders placed before 1 PM. A tulsi plant is a particularly meaningful gift for Ujjain, given its proximity to the Mahakaleshwar Jyotirlinga." },
      { question: "Which indoor plant needs the least care for an Indore busy professional?", answer: "ZZ plant and snake plant are the most forgiving plants for busy Indore professionals. Both survive 2–3 weeks without watering, tolerate low light and AC rooms, and grow steadily without fertiliser. Money plant is close behind — it can even be grown in a glass jar of water, needing only water changes every 2 weeks." }
    ]
  },

  "jaipur": {
    cityName: "Jaipur",
    metaTitle: "Buy Plants Online in Jaipur | Desert-Hardy & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Jaipur. Succulents, rose, desert plants, indoor plants & gifting combos. Same-day delivery across Jaipur. Starting ₹299. Pink City's best plants.",
    h1: "Buy Plants Online in Jaipur — Same-Day Delivery in the Pink City",
    metaKeyword: "plants online jaipur, buy plants jaipur, indoor plants jaipur, plant delivery jaipur rajasthan, succulents jaipur, rose plant jaipur, online nursery jaipur pink city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jaipur — The Pink City Goes Green</h2>

<p>Jaipur is Rajasthan's capital and one of India's most iconic cities — the Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar mark a landscape of pink sandstone and Mughal-Rajput grandeur. But look past the monuments and you'll find a deeply agricultural state capital where plants have always mattered: the Rose Garden in Central Park (a stunning 76-acre park in the city), the Sisodia Rani Garden, and the Vidyadhar Garden all reflect Jaipur's appreciation for designed green spaces. Rajasthani miniature painting traditions also feature garden scenes, flowering plants, and the beauty of nature in a desert context.</p>

<p>Jaipur's climate is the hardest test for plants in India's major cities — blazing summers (45–47°C in May-June), moderate monsoon (650 mm), cool winters (5–8°C minimum in January), and dry air year-round. Despite this, a surprising variety of plants flourish here when placed thoughtfully. Desert-adapted species like adenium (desert rose), cactus, jade, and bougainvillea absolutely thrive. Roses bloom magnificently from November to March. Indoor plants in cooled spaces do well year-round. RedHeart delivers across Jaipur — Malviya Nagar to Vaishali Nagar, Mansarovar to Civil Lines — with same-day service.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Jaipur's Desert Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Works in Jaipur</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Heat Tolerance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Desert Rose (Adenium)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves desert heat, spectacular blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, handles all extremes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter–spring bloom, garden pride</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good (winter only)</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Drought-tolerant, prolific bloomer</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desert native, medicinal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jade Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Drought-tolerant succulent</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very good</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, extremely low maintenance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very good</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Growing Plants in Jaipur — Climate Realities</h3>

<p>Jaipur's summer is genuinely extreme. In May, when temperatures touch 46–47°C and the hot Loo wind blows from the Thar Desert, most plants need protection. Outdoor plants should be moved under shade cloth or to a north-facing wall during peak afternoon hours from April to June. Water outdoor plants twice daily in summer — morning and early evening. Desert rose (adenium) is a spectacular exception — it actually blooms most vigorously in Jaipur's pre-monsoon heat, making it the most rewarding outdoor plant choice for the city.</p>

<p>Jaipur's winters (November–February) are when the city becomes a gardener's delight. Roses bloom from December to March in spectacular fashion — Jaipur's Central Park Rose Garden demonstrates what's achievable, and home gardens across Civil Lines, C-Scheme, and the bungalow belt near Amber can replicate this beauty. Marigold, pansy, petunia, alyssum, and sweet peas all bloom gorgeously in Jaipur's winter. This is also when bougainvillea puts on its most colourful show before summer's heat.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jaipur</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Localities</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Jaipur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">C-Scheme, Civil Lines, Sindhi Camp</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">South Jaipur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Malviya Nagar, Pratap Nagar, Sanganer</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">West Jaipur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vaishali Nagar, Mansarovar, Shyam Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North / Pink City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Walled City, Amber, Amer Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Jaipur's extreme summer heat?", answer: "Desert rose (adenium), bougainvillea, aloe vera, jade plant, and snake plant are the strongest performers in Jaipur's 46–47°C summers. Desert rose actually thrives and blooms in this heat. Keep money plant and ZZ plant indoors in AC rooms during peak summer. Water outdoor plants twice daily — morning and evening — from April through June." },
      { question: "Is same-day plant delivery available in Jaipur?", answer: "Yes. Same-day delivery is available across Jaipur including C-Scheme, Malviya Nagar, Vaishali Nagar, Civil Lines, and Mansarovar. Order before 3 PM. Midnight delivery is available for central Jaipur. We deliver seven days a week." },
      { question: "When is the best time to plant roses in Jaipur?", answer: "Plant rose saplings in October–November for best winter blooms. Jaipur's December–March period is among the finest rose-growing windows in India. Water deeply every 4-5 days in winter. During summer, roses go semi-dormant — reduce watering, give afternoon shade, and they'll recover in October for the next cycle." },
      { question: "What plant gift is most popular for Jaipur's festivals?", answer: "Money plant and tulsi are the most traditional auspicious plant gifts for Jaipur's primarily Rajasthani Hindu families. For Diwali, a money plant with a decorative brass pot is a classic gift. During Gangaur festival (important for Rajasthani women), flowering plants and marigold are especially meaningful. Lucky bamboo is a popular modern gifting choice for corporate events." },
      { question: "Which indoor plants are best for Jaipur during winter?", answer: "Most indoor tropical plants — money plant, areca palm, peace lily, ZZ plant — need to be kept in heated rooms during Jaipur's cold January nights (5–8°C). Snake plant can tolerate temperatures down to 5°C but should be kept away from cold windowsills. The good news: Jaipur's winters are short, and plants bounce back well in February's warming weather." }
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
