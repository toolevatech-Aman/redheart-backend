// Plants Batch 1 — 8 cities (new rich format, 1500+ words, natural prose, tables, controlled h2)
// Abohar, Agartala, Agra, Ahmedabad, Aizawl, Ajmer, Akola, Alappuzha

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "abohar": {
    cityName: "Abohar",
    metaTitle: "Buy Plants Online in Abohar | Indoor Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Abohar with same-day delivery. Indoor plants, succulents, flowering plants, lucky bamboo & more. Starting ₹299. Free care guide.",
    h1: "Buy Plants Online in Abohar — Same-Day Home Delivery",
    metaKeyword: "plants online abohar, buy plants abohar, indoor plants abohar, plant delivery abohar, online plant nursery abohar, plants home delivery abohar punjab",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online Delivery in Abohar — Fresh from Nursery to Your Doorstep</h2>

<p>Abohar, the kinnow capital of Punjab, sits in Fazilka district at India's western edge, just kilometres from the Pakistan border. If you've lived here long enough, you know that Abohar's residents have always had a green thumb — this is, after all, the same region that grows some of India's finest sweet citrus on thousands of acres of farmland. That love for growth extends naturally into homes, offices, and gifting traditions. Whether you're sprucing up a rooftop terrace on the busy Sarhind Road, brightening up a flat near the old Gandhi Chowk area, or sending a plant as a housewarming gift to family in the Jalalabad area, RedHeart delivers the right plant, fresh and healthy, right to the door.</p>

<p>Abohar's climate is semi-arid — hot, dry summers push temperatures past 45°C, while winters dip to near-zero on clear nights. That means the plants we recommend for Abohar homes aren't just pretty; they're chosen to survive and thrive in this specific weather. We source our plants from quality nurseries and ship them with roots intact, wrapped carefully so they arrive as healthy as the day they were potted. Same-day delivery is available across Abohar city and nearby localities when you order before 3 PM. Midnight and next-day delivery slots are open too.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Our Plant Collection for Abohar</h3>

<p>We carry a wide range of plants suited for Punjabi homes — from low-maintenance indoor plants that can handle Abohar's dry winters to bold outdoor species that love the summer sun. Here's a snapshot of what's popular with Abohar customers:</p>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best For</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Light Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant (Pothos)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Home, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low to medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kitchen, balcony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Balcony, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Holy Basil)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gift, new home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low to medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low to medium</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Gifting Plants in Abohar — Occasions and Ideas</h3>

<p>In Punjab, gifting has always been generous and thoughtful. In Abohar, where agriculture runs in the blood, a plant as a gift carries a deeper meaning — it says "grow, flourish, prosper." Abohar families love gifting plants at housewarmings (griha pravesh), Diwali, Lohri, and during wedding shagun rituals. A potted money plant or a tall areca palm wrapped in a decorative pot makes an excellent wedding gift for a newly moved-in couple. Lucky bamboo — especially the 7-layer tower — is a perennial favourite for new office openings and business inaugurations in the city.</p>

<p>For Diwali, our combo plant sets — such as a money plant paired with a white peace lily — are snapped up quickly. Lohri is another big occasion; marigolds and seasonal flowering plants add colour to the celebrations. If you're sending a get-well-soon gift to someone recovering at home, a peace lily or a low-maintenance pothos is always a kind choice — plants are proven mood lifters.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Abohar's Climate and What Grows Best Here</h3>

<p>The Abohar-Fazilka belt has a continental climate — extreme in summer, cold in winter, and mostly dry year-round. If you're picking a plant for your Abohar home, there are a few things worth keeping in mind. During May and June, afternoon temperatures regularly cross 45°C; any plant on a south-facing balcony will need protection during these months. Drought-tolerant species like snake plant, aloe vera, jade, and ZZ plant handle Abohar summers without drama. They store water efficiently and don't demand daily attention.</p>

<p>Winters in Abohar can drop to 3-4°C, and frost is possible in January. Tropical plants like peace lily and areca palm should be moved indoors or to a sheltered spot during the coldest weeks. The spring season (February–April) is Abohar's best gardening window — this is when bougainvillea and seasonal flowers burst with colour on terraces and courtyards. We'd recommend planting outdoor species in February for maximum bloom by Holi and the wheat harvest season.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Zones Across Abohar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area / Locality</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery Time</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Abohar City Centre</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Fazilka</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jalalabad (West)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Arniwala</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Why RedHeart for Plants in Abohar</h3>

<p>Most plant deliveries in smaller cities are an afterthought — plants arrive wilted, roots exposed, or in cracked pots. RedHeart treats plant delivery seriously. Every plant leaves our nursery partner with roots well-watered, soil firmly packed, and wrapped in breathable material so the roots don't cook in transit. Each order comes with a care card specific to that plant species and Abohar's climate. If a plant arrives in poor condition for any reason, we replace it, no questions asked.</p>

<p>Our plant range for Abohar includes everything from ₹299 beginner-friendly pothos to premium ₹2,500 fiddle leaf fig trees for living rooms. You can also request custom combos — a plant with a decorative pot, a personalised message card, and a care kit — perfect for gifting. We process orders seven days a week, including festivals and public holidays, so you're never stuck without a last-minute plant gift option.</p>`,
    faqs: [
      { question: "Which indoor plants are best for Abohar's hot climate?", answer: "Snake plant, ZZ plant, aloe vera, and money plant are the most reliable choices for Abohar. They tolerate high heat, require minimal watering, and can survive the dry summers without daily attention. Keep them away from direct afternoon sun in May and June." },
      { question: "Can I get same-day plant delivery in Abohar?", answer: "Yes. Same-day plant delivery is available across Abohar city, Fazilka, and Jalalabad (West) for orders placed before 3 PM. We also offer midnight delivery for special occasions like birthdays and housewarmings." },
      { question: "What's a good housewarming plant gift for an Abohar family?", answer: "Lucky bamboo and money plant are the most popular housewarming plant gifts in Punjab. An areca palm in a ceramic pot is a premium option for close family. Peace lily is ideal if the new home has limited light — it flowers indoors and is considered auspicious." },
      { question: "Do your plants come with soil and pots?", answer: "Yes, all our plants are delivered in nursery pots with fresh potting soil. We also offer decorative ceramic and terracotta pots as add-ons at checkout. A care guide specific to the plant and local conditions is included with every order." },
      { question: "Is plant delivery available on festivals and Sundays in Abohar?", answer: "Yes. We deliver plants seven days a week including Diwali, Lohri, Holi, and all public holidays. For festival days, we recommend ordering at least 24 hours in advance to guarantee your preferred delivery slot." }
    ]
  },

  "agartala": {
    cityName: "Agartala",
    metaTitle: "Buy Plants Online in Agartala | Orchids, Tropical & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Agartala. Orchids, bamboo, tropical foliage, indoor plants with same-day delivery. Starting ₹299. Freshly sourced, carefully packed.",
    h1: "Buy Plants Online in Agartala — Orchids, Tropical & Indoor Plants",
    metaKeyword: "plants online agartala, buy plants agartala, orchids agartala, indoor plants agartala, plant delivery agartala tripura, tropical plants agartala",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plant Delivery in Agartala — Orchids, Bamboo & Tropical Greens at Your Door</h2>

<p>Agartala is surrounded by green. Tripura's capital city sits in a bowl of hills, bamboo forests, and rivers, with Bangladesh to the west and Mizoram to the east. The Ujjayanta Palace — gleaming white against the Howrah River — gives Agartala its most iconic image, but it's the city's extraordinary plant biodiversity that makes it quietly special. Tripura records over 191 species of orchids, and bamboo is so woven into everyday life that the state is often called India's "bamboo state." When you live in a place like this, bringing plants into your home doesn't feel like a trend — it feels natural.</p>

<p>RedHeart delivers plants across Agartala, Battala, Badharghat, Barjala, and Majlishpur, with same-day delivery available for orders placed before 3 PM. We stock orchids, tropical foliage, indoor air purifiers, and traditional lucky plants — all freshly sourced and packed carefully so they arrive without leaf damage or root stress, which matters a great deal in Agartala's high-humidity environment.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Agartala Homes and Gifting</h3>

<p>Agartala's humid subtropical climate means tropical and semi-tropical plants are at home here year-round. Our most popular plants with Agartala customers include:</p>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Agartala Loves It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Orchid (Dendrobium)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Native to northeast, loves humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, home decor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant (Pothos)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every home, thrives in shade</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low light, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tropical, long-lasting flowers</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rubber Plant (Ficus)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement plant for living rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹549</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Spider Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hanging baskets, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Philodendron</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tropical foliage, fast-growing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹449</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Orchids in Agartala — A Special Connection</h3>

<p>Tripura's relationship with orchids is unlike any other Indian state. The state's forests shelter species like Dendrobium, Vanda, Cymbidium, and Rhynchostylis gigantea — some found nowhere else in India. The Tripura government actively promotes orchid cultivation, and local growers have turned orchid growing into both a hobby and a livelihood. When you gift an orchid to someone in Agartala, there's a cultural resonance that a rose or marigold simply doesn't carry. Our Dendrobium orchid pots are particularly popular as birthday gifts, anniversary tokens, and gifts for teachers and seniors.</p>

<p>Agartala's humid, warm climate (with average humidity often crossing 80%) is genuinely ideal for most orchid species. Unlike drier Indian cities where orchids demand constant misting and special care, Agartala's natural humidity does that work for you. A well-placed orchid near a bright window here can rebloom multiple times a year.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Climate Notes — What Thrives in Agartala</h3>

<p>Agartala averages about 2,000 mm of annual rainfall, mostly between May and September. The city is warm year-round — even in December-January, temperatures rarely drop below 12°C. This means almost no plants need to be moved indoors for "winter." The challenge here is the opposite: during monsoon, overwatering is easy because the humidity itself keeps soil moist. Choose pots with drainage holes, and avoid over-watering from June to September. Use well-draining potting mix — coconut coir-based soil works especially well in Agartala's conditions.</p>

<p>For outdoor plants, Agartala's monsoon can batter delicate species. Place bougainvillea and flowering plants in partially sheltered spots during heavy rain months. For indoor tropical plants — money plant, philodendron, peace lily — Agartala's climate is close to paradise. These plants thrive without humidifiers or special equipment here, needing only regular watering and occasional fertilizing.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Agartala</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Agartala City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Battala / Badharghat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Barjala / Majlishpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Chaltlang / Rangvamual</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Gifting Plants in Agartala — Occasions Guide</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Occasion</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Recommended Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Works</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Birthday</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Orchid / Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Colourful, long-lasting, unique</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Housewarming</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo / Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Auspicious, easy to maintain</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Office Opening</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm / Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Prosperity symbol, air purifier</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Teacher's Day</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thoughtful, lasting gift</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Get Well Soon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Spider Plant / Pothos</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air-purifying, low-maintenance</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do orchids grow well in Agartala homes?", answer: "Yes — Agartala's natural humidity and warm temperatures make it one of the best cities in India for growing orchids at home. Dendrobium and Phalaenopsis varieties placed near a bright window (not direct afternoon sun) will rebloom regularly without any special equipment. We deliver orchid plants freshly potted and ready for your windowsill." },
      { question: "Can I get same-day plant delivery in Agartala?", answer: "Yes. Same-day plant delivery is available across Agartala city, Battala, Badharghat, and Barjala for orders placed before 3 PM. Midnight delivery is also available for Agartala city and Battala. Order by 10 PM for midnight delivery." },
      { question: "Which plant is best as a birthday gift in Agartala?", answer: "An orchid pot or anthurium is the most impressive birthday gift — colourful, long-lasting, and something you can't pick up at a regular local shop. Lucky bamboo and money plant are popular for more traditional or auspicious gifting. We can add a personalised card and gift wrapping to any plant order." },
      { question: "How do I care for a money plant in Agartala's humid weather?", answer: "In Agartala, money plant (pothos) grows vigorously. During monsoon, reduce watering frequency because the high humidity keeps the soil moist. Water only when the top inch of soil is dry. Wipe leaves with a damp cloth monthly to remove dust, which can block light absorption. Trim trailing vines to encourage bushier growth." },
      { question: "Do you deliver plants to Barjala and Majlishpur areas?", answer: "Yes, we deliver plants to Barjala, Majlishpur, Chaltlang, and other areas around Agartala. Delivery to these areas typically takes 4–6 hours. Same-day delivery is available; midnight delivery is available for central Agartala and Battala areas." }
    ]
  },

  "agra": {
    cityName: "Agra",
    metaTitle: "Buy Plants Online in Agra | Indoor, Outdoor & Gift Plants | RedHeart",
    metaDescription: "Order plants online in Agra with same-day delivery. Rose, jasmine, indoor plants, bonsai & more. Starting ₹299. Delivered fresh with care guide.",
    h1: "Buy Plants Online in Agra — Same-Day Delivery Across the City",
    metaKeyword: "plants online agra, buy plants agra, indoor plants agra, plant delivery agra, online nursery agra, rose plant agra, jasmine plant agra",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Agra — From Mughal Garden Traditions to Modern Indoor Greens</h2>

<p>Few cities in India carry as much horticultural history as Agra. The Mughal emperors were passionate gardeners — Babur introduced the formal charbagh (four-garden) design to India, and Agra's Mehtab Bagh, Ram Bagh (Asia's oldest Mughal garden), and the gardens within the Taj Mahal complex are all expressions of that obsession with symmetry, fragrance, and greenery. Roses, jasmine, and cypress were the Mughal garden staples, and even today these plants feel at home in Agra's atmosphere. When you send a rose plant or a mogra (jasmine) pot to someone in Agra, you're participating in a 500-year-old gifting tradition without even realising it.</p>

<p>Today, Agra is a busy city of three million people — a tourism economy layered over a manufacturing base of shoes, leather goods, and textiles. Homes here range from heritage havelis in the old city near Taj Ganj to modern apartment complexes in Fatehabad and Sikandra. Across all these contexts, indoor plants are growing in popularity, particularly air-purifying varieties that help against Agra's dust and pollution from highway traffic on the Delhi-Agra expressway corridor. RedHeart delivers plants across Agra with same-day service — from Taj Ganj to Shamsabad — for orders placed before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Our Plant Range for Agra</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sunlight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, balcony, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra (Jasmine)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Balcony, fragrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Home, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bonsai (Ficus)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, desk</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹899</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Agra's Climate and Plant Care</h3>

<p>Agra has a semi-arid climate with brutal summers — temperatures between May and June regularly breach 45°C near Yamuna bank areas. Winters are cool and foggy from December to January, with temperatures sometimes touching 4–5°C. Monsoon arrives in July and brings welcome relief. This climate means plant choice matters more in Agra than in more temperate cities.</p>

<p>For outdoor balconies and terraces: bougainvillea, rose, and marigold handle the heat well if watered regularly in summer. Move jasmine (mogra) to a cooler spot or provide shade netting in the peak summer weeks. For indoor spaces: snake plant and ZZ plant are nearly indestructible in Agra's conditions — they tolerate the dry indoor air from ACs running all summer and the dusty winters. Peace lily does well in Agra's indoor environment provided it's kept away from direct afternoon sun through west-facing windows.</p>

<p>Agra's tap water tends to be hard (high TDS) — if your indoor plants show yellowing or white deposits on the soil surface, switch to filtered water or let tap water sit overnight before watering. This makes a noticeable difference, particularly for sensitive species like peace lily and orchids.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Agra — Occasions and Ideas</h3>

<p>Agra is a city where tourists arrive from across India and the world every day, which means its residents have absorbed a wide variety of gifting sensibilities. Plants are gaining ground as gift choices, particularly for housewarmings, weddings, corporate events, and farewells. The trend of gifting a rose plant (rather than a bouquet of cut roses) is growing — a potted rose is a memory that lasts months or years, not just a week. During Diwali, our money plant and lucky bamboo combos sell particularly quickly in Agra. For hotel and hospitality businesses near the Taj Mahal belt, we also supply potted plants for lobby decor on request.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Agra</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area / Locality</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Taj Ganj / Sadar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Fatehabad / Sikandra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Shamsabad / Dayal Bagh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Firozabad / Mathura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Why Choose RedHeart for Plants in Agra</h3>
<p>We pick plants from nurseries that follow proper horticultural practices — not roadside vendors who let plants sit in waterlogged soil for days. Every plant we ship to Agra is freshly potted, well-watered the night before dispatch, and wrapped in newspaper and breathable packaging that protects roots during transit. Because Agra summers are extreme, we dispatch plants in early morning slots during May and June to avoid heat damage. If you're gifting to a tourist area hotel or resort near the Taj, we also accommodate bulk orders with advance notice.</p>`,
    faqs: [
      { question: "Which plant is the most popular gift in Agra?", answer: "Rose plants and mogra (jasmine) are Agra's most popular plant gifts — they connect to the Mughal garden heritage and smell wonderful on balconies. For indoor gifting, lucky bamboo and money plant are universally loved. A bonsai ficus is a premium option for office gifts and corporate farewells." },
      { question: "Can I get same-day plant delivery near Taj Ganj or Sadar Bazaar in Agra?", answer: "Yes, same-day plant delivery is available across Taj Ganj, Sadar, Fatehabad, Sikandra, Shamsabad, and Dayal Bagh areas for orders placed before 3 PM. Midnight delivery is also available for central Agra localities." },
      { question: "Which indoor plants work best in Agra's hot, dry summers?", answer: "Snake plant and ZZ plant are the most heat-tolerant indoor plants for Agra — they cope with dry AC air in summer and cooler conditions in winter. Money plant and pothos are also reliable year-round. Avoid plants that demand constant humidity like ferns during Agra's dry months." },
      { question: "Do you deliver plants to Mathura and Firozabad from Agra?", answer: "Yes, we deliver to Mathura and Firozabad as extended delivery zones from Agra. Delivery typically takes 4–6 hours. Please order before 1 PM for same-day delivery to these locations." },
      { question: "Can I order a plant with a pot and personalised message card?", answer: "Yes. At checkout you can add a decorative ceramic or terracotta pot, a personalised message card, and a care guide to your plant order. Custom combo gifts — plant plus pot plus ribbon wrapping — are available for housewarmings, birthdays, and anniversaries." }
    ]
  },

  "ahmedabad": {
    cityName: "Ahmedabad",
    metaTitle: "Buy Plants Online in Ahmedabad | Indoor, Air-Purifying & Gift Plants | RedHeart",
    metaDescription: "Order plants online in Ahmedabad. Indoor plants, succulents, desk plants & gifting combos. Same-day delivery. Starting ₹299. Freshly sourced, healthy plants.",
    h1: "Buy Plants Online in Ahmedabad — Same-Day Delivery Across All Areas",
    metaKeyword: "plants online ahmedabad, buy plants ahmedabad, indoor plants ahmedabad, plant delivery ahmedabad, online nursery ahmedabad gujarat, air purifying plants ahmedabad",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plant Delivery in Ahmedabad — Green Living in India's First UNESCO World Heritage City</h2>

<p>Ahmedabad's old city — the pols, the stepped wells, the carved wooden havelis — earned UNESCO World Heritage status in 2017, making it India's first city to receive the designation. Within those ancient streets, interior courtyards have always held a tulsi plant, a potted hibiscus, or a marigold near the doorstep. In the new Ahmedabad — the GIFT City corridor, Prahlad Nagar's corporate offices, Bopal's residential complexes — indoor plants have found their way into desks, lobbies, and living room corners. The reasons are clear: Ahmedabad's air quality suffers from industrial pollution and dust, and research consistently shows that indoor plants improve both air quality and mental wellbeing in dense urban environments.</p>

<p>RedHeart delivers plants across Ahmedabad — from Naroda to Bopal, Satellite to Maninagar — with same-day delivery available for orders placed before 3 PM. We carry over 200 plant varieties suited to Ahmedabad's hot, semi-arid climate. Our packaging is designed to protect plants during Ahmedabad's extreme summer transit conditions.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Ahmedabad Homes and Offices</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Ideal Spot</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Heat Tolerance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office desk</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low-light corner</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jade Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Window, sunny balcony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Desert Rose (Adenium)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, full sun</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, compound wall</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Any indoor spot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shaded indoor corner</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Ahmedabad's Heat and Plant Care</h3>

<p>Ahmedabad's summers are no joke — the city regularly records temperatures between 43°C and 46°C from April to June. This affects not just how you care for plants but which plants survive without constant attention. Succulents like jade plant, aloe vera, desert rose, and echeveria are natural fits for Ahmedabad's hot, low-humidity conditions. They store water in their leaves and can go several days without watering during winter — which suits busy lifestyles in the city's working population.</p>

<p>The GIFT City and Prahlad Nagar office belt has seen growing demand for large indoor plants — areca palms, rubber plants, and fiddle leaf figs — that create a "biophilic office" environment. These do well in air-conditioned spaces but need bright indirect light, which Ahmedabad's west-facing office windows provide abundantly in the afternoon. One important tip: air conditioners dramatically reduce indoor humidity, and tropical plants like peace lily and pothos may need occasional misting during peak summer. Keeping a small tray of water near these plants helps maintain local humidity levels.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Gifting Plants in Ahmedabad</h3>

<p>Gujarati culture places great value on auspiciousness in gifting. Tulsi, money plant, and lucky bamboo are considered auspicious gifts — they symbolise prosperity, good fortune, and health. At Diwali, which Ahmedabad celebrates with particular fervour, plant combos with decorative pots make thoughtful Lakshmi Puja gifts. Labh Pancham (the auspicious day for new business beginnings, unique to Gujarat) is the single biggest occasion for gifting plants and decorative items in Ahmedabad — offices and shops reopen on Labh Pancham, and a new money plant or lucky bamboo for the desk is considered a good omen. Our Labh Pancham special plant kits sell out early every year.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ahmedabad</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery Time</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Satellite / Navrangpura / CG Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Prahlad Nagar / Vastrapur / Bodakdev</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Naroda / Maninagar / Gota</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bopal / South Bopal / Shilaj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">GIFT City / Gandhinagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Ahmedabad's extreme summer heat?", answer: "Desert rose (adenium), bougainvillea, snake plant, ZZ plant, jade plant, and aloe vera are the strongest performers in Ahmedabad's heat. These plants are drought-tolerant and handle 45°C+ temperatures without wilting. Avoid delicate tropical plants like ferns or peace lily for outdoor balconies in May-June." },
      { question: "What plants are popular for Labh Pancham gifting in Ahmedabad?", answer: "Labh Pancham is Ahmedabad's most auspicious day for new business beginnings, and lucky bamboo, money plant, and jade plant (called the 'friendship tree' or 'money tree') are the top choices. We offer special Labh Pancham plant gift kits with decorative pots and message cards. Order a day in advance to secure your slot." },
      { question: "Can I get same-day plant delivery in Prahlad Nagar and Satellite?", answer: "Yes. Same-day plant delivery is available in Prahlad Nagar, Satellite, Vastrapur, Bodakdev, Navrangpura, and CG Road for orders before 3 PM. Midnight delivery is also available across these central and west Ahmedabad areas." },
      { question: "What indoor plant is best for a GIFT City or corporate office in Ahmedabad?", answer: "Areca palm and snake plant are the most popular corporate office choices in Ahmedabad. They look professional, are low-maintenance, and thrive in air-conditioned environments with indirect light. For desk plants, a ZZ plant or a lucky bamboo arrangement works well. We supply bulk orders for corporate clients with advance notice." },
      { question: "How do I keep indoor plants healthy during Ahmedabad's dry winter?", answer: "Ahmedabad winters (December-February) are dry with low humidity. Mist tropical plants like money plant and peace lily 2-3 times a week to prevent brown leaf tips. Reduce watering frequency in winter — most indoor plants need water every 7-10 days in the cooler months. Keep plants away from direct heater vents, which dry soil quickly." }
    ]
  },

  "ajmer": {
    cityName: "Ajmer",
    metaTitle: "Buy Plants Online in Ajmer | Indoor, Flowering & Rose Plants | RedHeart",
    metaDescription: "Order plants online in Ajmer. Rose, jasmine, succulents, indoor plants. Same-day delivery across Ajmer & Pushkar. Starting ₹299. Fresh plants with care guide.",
    h1: "Buy Plants Online in Ajmer — Roses, Indoor Plants & Same-Day Delivery",
    metaKeyword: "plants online ajmer, buy plants ajmer, rose plant ajmer, indoor plants ajmer, plant delivery ajmer rajasthan, online nursery ajmer pushkar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ajmer — From the Land of Roses and Dargah Offerings</h2>

<p>Ajmer occupies a unique place in India's spiritual map. The Dargah of Khwaja Moinuddin Chishti — one of the most visited shrines in all of South Asia — draws millions of pilgrims every year from across religions, and roses have always been at the centre of this devotion. Fresh rose petals are scattered at the Dargah as chadar offerings; the fragrance of rose and incense is as much a part of Ajmer's identity as the Ana Sagar Lake or the Taragarh Fort. In this city, giving someone a rose plant isn't just a gesture of affection — it carries centuries of cultural resonance.</p>

<p>Beyond the spiritual life, Ajmer is a working city — a railway hub, an educational centre (the Mayo College, one of India's finest boarding schools, is here), and a growing commercial node between Jaipur and Jodhpur on NH-48. Residents increasingly want plants that look good and survive the harsh semi-arid climate. RedHeart delivers across Ajmer, Pushkar, Kishangarh, and Beawar with same-day service for orders placed before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Collection for Ajmer</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Ajmer Loves It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sunlight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dargah offerings, gifting, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Cactus (Barrel / Opuntia)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desert-friendly, low maintenance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kitchen, medicinal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office, heat-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–bright</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, wall, drought-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, pooja, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mogra)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrance, balcony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Rajasthan's Climate — Growing Plants in Ajmer</h3>

<p>Ajmer sits at 486m altitude in a valley between the Aravalli ranges, giving it slightly more moderate temperatures than Jodhpur or Barmer, but it's still firmly Rajasthan. Summers (April–June) are hot and dry, with temperatures crossing 42–43°C. Winters are short and mild by North Indian standards — December lows average around 8–10°C. Rainfall of about 480 mm falls mostly in July-August.</p>

<p>For this climate, drought-tolerant plants are the smartest choice for outdoor spaces. Bougainvillea is almost made for Ajmer — it blooms most vigorously during the dry season before monsoon, needs minimal water once established, and thrives on neglect. Cactus and succulents like aloe vera, jade, and echeveria don't just survive here — they flourish. If you're growing roses (and many Ajmer residents do, given the Dargah connection), water them deeply but infrequently, and mulch around the base to retain moisture in the sandy soil.</p>

<p>For indoor spaces, the challenge is Ajmer's dry air — especially in winter. Peace lily and ferns need regular misting during January. Snake plant and money plant are far more forgiving. ZZ plant will sit in a corner of your house for months with almost no attention.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ajmer City / Ana Sagar area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pushkar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kishangarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Beawar / Nasirabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive best in Ajmer's hot, dry climate?", answer: "Bougainvillea, cactus, aloe vera, snake plant, and jade plant are the strongest performers in Ajmer's semi-arid conditions. These species need minimal water and can handle 42°C+ temperatures. Rose plants also do well if watered deeply and the soil is mulched to retain moisture in summer." },
      { question: "Can I get a rose plant delivered in Ajmer on same day?", answer: "Yes. Rose plants are available for same-day delivery across Ajmer city and Pushkar. Order before 3 PM for same-day delivery. We carry both miniature roses (for balcony pots) and full garden rose varieties." },
      { question: "Do you deliver plants to Pushkar?", answer: "Yes. Plant delivery is available in Pushkar, which is 11 km from Ajmer. Same-day delivery is available for orders placed before 3 PM. Pushkar's sacred environment makes tulsi, mogra, and rose plants particularly popular choices there." },
      { question: "What plant should I gift for Urs festival time in Ajmer?", answer: "Roses are the most meaningful plant gift during Urs season — they connect directly to the rose petal chadar tradition at the Dargah. A rose plant in a terracotta pot is a thoughtful, lasting gift. Mogra (jasmine) and tulsi are also auspicious choices well-received by Ajmer families." },
      { question: "How do I keep my rose plant healthy in Ajmer summers?", answer: "Water rose plants deeply every 2-3 days in summer (not daily surface watering). Mulch with dry leaves or coconut husk around the base to reduce evaporation. Prune any dead stems in March to encourage new blooms before the heat peaks. Keep the plant in morning sun and afternoon shade during May-June." }
    ]
  },

  "alappuzha": {
    cityName: "Alappuzha",
    metaTitle: "Buy Plants Online in Alappuzha | Tropical, Aquatic & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Alappuzha. Tropical plants, lotus, anthurium, indoor greens with same-day delivery. Starting ₹299. Perfect for Kerala's backwater homes.",
    h1: "Buy Plants Online in Alappuzha — Tropical Plants for Kerala's Backwater City",
    metaKeyword: "plants online alappuzha, buy plants alappuzha, tropical plants alappuzha, indoor plants alappuzha, plant delivery alappuzha kerala, lotus plant alappuzha",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plant Delivery in Alappuzha — Tropical Greens for the Venice of the East</h2>

<p>Alappuzha — called Alleppey in its colonial name — is a city built on water. The backwater canals wind through the city like veins, houseboats drift between coconut palms on the Vembanad Lake, and the rice paddies of Kuttanad lie just south, some of them below sea level. In a city this intimately connected to nature, plants aren't decorative extras — they're part of the environment itself. Alappuzha homes have always kept coconut palms in the courtyard, lotus in earthen pots, and hanging money plant near the kitchen window. RedHeart brings a wider selection of tropical, aquatic, and indoor plants to Alappuzha residents who want to take that green living further.</p>

<p>We deliver plants across Alappuzha city, Cherthala, Kayamkulam, Haripad, Ambalapuzha, and Kuttanad with same-day service for orders before 3 PM. Kerala's postal codes and addresses can be tricky — our delivery team knows Alappuzha's waterway geography well.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Perfect for Alappuzha's Tropical Environment</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Ideal For</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lotus Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden ponds, earthen pots</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Aquatic</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera Deliciosa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, shaded verandah</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Colocasia (Taro)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, water features</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bird of Paradise</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Balcony, garden statement</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹899</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Any indoor spot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Philodendron</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor trailing or upright</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹449</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Alappuzha's Climate — A Tropical Paradise for Plant Lovers</h3>

<p>Alappuzha has one of the most favourable climates in India for growing plants. Annual rainfall exceeds 2,700 mm; humidity stays high year-round; temperatures hover between 23°C and 33°C across seasons. There is no "too cold" or "too hot" extreme here. Almost any tropical plant will thrive outdoors in Alappuzha without special care — what you need to watch for is overwatering during the monsoon months of June–September, when the rains are heavy and soil drainage matters.</p>

<p>Use pots with good drainage holes and well-draining cocopeat-based soil mixes. During monsoon, some plants (especially succulents and cacti, which don't suit Alappuzha's humidity anyway) need to be moved under a covered area. For the rest — anthuriums, monstera, peace lily, colocasia, and lotus — Alappuzha's rain is a gift. These plants love high humidity and will push out new leaves rapidly during the monsoon season.</p>

<p>Alappuzha's proximity to water also makes aquatic plants genuinely viable at home. A large terracotta pot with water, a handful of aquatic soil, and a lotus rhizome is all you need to grow your own lotus flower in the courtyard — which is a beautiful tradition in Kerala homes. We sell lotus bulbs ready for planting from March onwards.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Alappuzha</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Alappuzha City / Beach Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Cherthala / Ambalapuzha</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kayamkulam / Haripad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kuttanad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I grow a lotus plant at home in Alappuzha?", answer: "Absolutely. Alappuzha's climate is ideal for lotus — you just need a large, waterproof terracotta or plastic pot (at least 18 inches wide and deep), some aquatic soil or heavy clay soil, and a lotus rhizome (bulb). Keep the pot in full sun, add 4-6 inches of water above the soil, and change the water weekly. Lotus will bloom beautifully within 2-3 months of planting." },
      { question: "Which indoor plants do best in Alappuzha's humidity?", answer: "Alappuzha's high humidity is ideal for anthurium, monstera, philodendron, peace lily, and colocasia. These tropical plants love the moist air and grow vigorously here with minimal care. Avoid cacti and succulents outdoors — they rot in Alappuzha's wet conditions. Keep succulents indoors under a covered area if you want them." },
      { question: "Can I get same-day plant delivery in Alappuzha?", answer: "Yes. Same-day plant delivery is available across Alappuzha city, Cherthala, Ambalapuzha, Kayamkulam, and Haripad for orders placed before 3 PM. Midnight delivery is available for central Alappuzha and Ambalapuzha." },
      { question: "What plant is a good gift for a houseboat stay gifting in Alappuzha?", answer: "A small anthurium or a desktop peace lily makes a wonderful gift for someone staying in a houseboat or a homestay in Alappuzha. These plants are compact, low-maintenance, and look beautiful in indoor humid settings. For a more unique choice, a miniature lotus in a ceramic bowl is a truly Alappuzha-specific gift." },
      { question: "How often should I water indoor plants in Alappuzha's monsoon?", answer: "During monsoon (June–September), indoor plants in Alappuzha rarely need watering more than once a week — the high humidity keeps the soil moist. Check the top 2 inches of soil with your finger before watering; if it's still damp, skip watering. Overwatering is the most common plant-killer in Kerala's monsoon. Ensure pots have drainage holes." }
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
