// Plants Tier 2 Batch 4 — 8 cities
// Tiruppur, Tirunelveli, Puducherry, Mysore(already done) → replace with:
// Tiruppur, Tirunelveli, Puducherry, Noida, Durgapur, Asansol, Erode, Vellore

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "tiruppur": {
    cityName: "Tiruppur",
    metaTitle: "Buy Plants Online in Tiruppur | Knitwear Capital Plants | RedHeart",
    metaDescription: "Order plants online in Tiruppur. Jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Tamil Nadu's knitwear capital gets plant delivery.",
    h1: "Buy Plants Online in Tiruppur — Same-Day Plant Delivery in the Knitwear Capital",
    metaKeyword: "plants online tiruppur, buy plants tiruppur, indoor plants tiruppur, plant delivery tiruppur tamil nadu, jasmine tiruppur, online nursery tiruppur knitwear",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Tiruppur — Knitwear Capital's Homes Go Green</h2>

<p>Tiruppur is Tamil Nadu's knitwear and hosiery capital — one of India's most important export manufacturing cities, responsible for over 50% of India's knitwear exports to Europe and the USA. The city's GDP per capita is among the highest in South India outside of metros, driven by the tens of thousands of knitting units, dyeing factories, and garment export companies. Tiruppur's prosperity is real and widely distributed — the Gounder community that dominates the knitwear industry has produced multi-generational export entrepreneurs whose wealth is visible in the city's bungalows, schools, and hospitals.</p>

<p>Tiruppur's climate is hot and semi-arid: summers reach 40°C, rainfall is moderate (750 mm) from both monsoon seasons, and winters are warm (18–26°C). Jasmine, tulsi, hibiscus, and indoor plants are the mainstays of Tiruppur homes. The export business community drives demand for corporate gifting plants — lucky bamboo, peace lily, and areca palm are consistently ordered for business relationships within the knitwear industry. RedHeart delivers across Tiruppur, Avinashi, Dharapuram, and Erode (adjacent) with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Tiruppur Homes and Knitwear Offices</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hair garlands, temple, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pooja, every Tamil home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Knitwear exporter corporate gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Export office reception, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, temple</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles heat, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Factory offices, bungalow reception</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Export Prosperity, Tamil Culture, and Plant Gifting in Tiruppur</h3>

<p>Tiruppur's knitwear export boom has created a prosperous, aspirational business community. The export bungalows of Tiruppur's Gounder business families — large, well-appointed homes in the city's residential neighbourhoods — have gardens featuring roses in winter, marigold for festivals, and areca palms in reception areas. Corporate gifting within Tiruppur's export industry is significant: European and American buying agents visiting Tiruppur's factories are received with well-maintained office plants. Lucky bamboo, peace lily, and areca palm are the standard corporate plant gifts exchanged between knitwear export businesses during Diwali and Pongal.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Tiruppur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Tiruppur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kumaran Road, Old Bus Stand, Palladam Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">SIDCO / Kongu Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">SIDCO Industrial Estate, Kongu Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Avinashi / Dharapuram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Avinashi, Dharapuram towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Erode</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Erode city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for a Tiruppur knitwear exporter's office?", answer: "Areca palm in a large decorative planter creates a professional, premium ambience for export meeting rooms. Peace lily on the reception desk is elegant and self-maintaining. Lucky bamboo in glass vases is popular as a desk plant and a standard corporate gift within Tiruppur's knitwear export community. Snake plant is the most practical office plant for spaces with variable maintenance schedules." },
      { question: "Is same-day plant delivery available in Tiruppur?", answer: "Yes. Same-day delivery is available across Tiruppur including Kumaran Road, Old Bus Stand, SIDCO Industrial Estate, and Kongu Nagar. Order before 3 PM. We deliver to Erode and Avinashi within 3–5 hours." },
      { question: "Which plant is best for Pongal gifting in Tiruppur?", answer: "Marigold plant in full golden bloom is the most traditional Pongal gift in Tiruppur. Tulsi in a decorated maadam is sacred for Tamil Hindu homes. A lucky bamboo or money plant arrangement in a ceramic pot is widely given as a modern Pongal gift among Tiruppur's business community. The January Pongal season is one of the largest plant gifting occasions in Tamil Nadu." },
      { question: "Which plants handle Tiruppur's hot semi-arid climate?", answer: "Jasmine, hibiscus, tulsi, snake plant, and aloe vera handle Tiruppur's warm, dry climate well. The dual monsoon (southwest June–September, northeast October–December) provides reasonable total rainfall for outdoor plants. Indoor plants need adequate watering in the dry January–May period. Lucky bamboo in water vases is ideal in Tiruppur's dry-air interior environments." },
      { question: "Do you deliver plants to Erode from Tiruppur?", answer: "Yes. Erode is accessible from our Tiruppur network within 3–5 hours. Erode's turmeric and textile trading community has consistent demand for jasmine, tulsi, and corporate gifting plants. Same-day delivery available for Erode with orders placed before noon." }
    ]
  },

  "tirunelveli": {
    cityName: "Tirunelveli",
    metaTitle: "Buy Plants Online in Tirunelveli | Halwa City Plants | RedHeart",
    metaDescription: "Order plants online in Tirunelveli. Jasmine, tulsi, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Tamil Nadu's southern city gets fresh plant delivery.",
    h1: "Buy Plants Online in Tirunelveli — Same-Day Plant Delivery in South Tamil Nadu",
    metaKeyword: "plants online tirunelveli, buy plants tirunelveli, indoor plants tirunelveli, plant delivery tirunelveli tamil nadu, jasmine tirunelveli, online nursery tirunelveli halwa city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Tirunelveli — South Tamil Nadu's Gateway City Goes Green</h2>

<p>Tirunelveli — the "Halwa City" of Tamil Nadu, famous for its irresistibly rich wheat halwa made with Thamirabarani river water — is one of Tamil Nadu's southernmost major cities and an important gateway to the Kanyakumari district and Cape Comorin (India's southernmost tip). The city sits on the Thamirabarani river, one of South India's most sacred rivers, and is known for its magnificent temple architecture — the Nellaiappar Temple (one of the most beautiful Shaiva temples in Tamil Nadu, with its 500-year-old musical pillars) and the Krishnapuram Palace are among the most significant cultural monuments in South Tamil Nadu.</p>

<p>Tirunelveli's climate is tropical with some variation: the southwestern tip location means it receives both southwest monsoon (from June–September, 700 mm) and northeast monsoon (October–December, 600 mm) — one of Tamil Nadu's most rain-generous cities. Winters are warm and dry (22–28°C). Jasmine, tulsi, hibiscus, and indoor tropical plants thrive in Tirunelveli's warm, reliably moist climate. RedHeart delivers across Tirunelveli, Thoothukudi, Nagercoil, and Kanyakumari with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Tirunelveli Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">South Tamil Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hair garlands, temple, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Thulasi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nellaiappar Temple culture, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles southern heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, corporate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Business gifting, Pongal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, function halls</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Thamirabarani Valley's Rich Plant Culture</h3>

<p>The Thamirabarani river — one of Tamil Nadu's few perennial rivers — creates a lush, well-watered corridor through Tirunelveli district that supports extraordinary biodiversity. The Western Ghats' southern extremity at Kalakad Mundanthurai Tiger Reserve (60 km from Tirunelveli) contains some of India's richest montane forest biodiversity. This natural abundance permeates the region's plant culture: Tirunelveli residents are knowledgeable about native plants, have strong traditions of tulsi and jasmine cultivation, and the warm, humid river valley climate makes growing plants relatively easy.</p>

<p>Nellaiappar Temple's cultural influence on Tirunelveli's plant traditions is significant — tulsi is offered daily, and the temple's garden traditions inspire home gardeners. The city's large Christian population (South Tamil Nadu has a historically significant Christian community) also maintains home gardens — the church flower garden tradition meets the Tamil jasmine culture to create Tirunelveli's uniquely layered plant aesthetic.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Tirunelveli</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Tirunelveli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Palayamkottai, South Main Street, Nellaiappar area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Thoothukudi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thoothukudi city, port area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Nagercoil</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nagercoil, Kanyakumari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambasamudram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambasamudram, Shencottah</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Tirunelveli's double-monsoon climate?", answer: "Jasmine, hibiscus, tulsi, areca palm, peace lily, and most tropical plants grow vigorously in Tirunelveli's generous rainfall (1,300 mm total from both monsoon seasons). The Thamirabarani river valley's humidity benefits moisture-loving tropical plants especially. Jasmine blooms almost year-round in Tirunelveli's warm, humid conditions." },
      { question: "Is same-day plant delivery available in Tirunelveli?", answer: "Yes. Same-day delivery is available across Tirunelveli including Palayamkottai, South Main Street, and Nellaiappar Temple area. Order before 3 PM. We also deliver to Thoothukudi within 3–5 hours and Nagercoil within 4–6 hours." },
      { question: "What plant is most meaningful for gifting near Nellaiappar Temple?", answer: "Tulsi is the most sacred gift for a Shaiva household near Nellaiappar Temple. White jasmine (malli) for daily temple offerings is equally meaningful. For a modern gift that still honours Tamil culture, a peace lily in a ceramic planter is elegant and appropriate. Hibiscus (chembaruthi) is suitable for Devi-worshipping households." },
      { question: "Do you deliver to Thoothukudi (Tuticorin) from Tirunelveli?", answer: "Yes. Thoothukudi is within 3–5 hours from our Tirunelveli network. Thoothukudi's port and chemical industry community has growing demand for indoor corporate gifting plants and home garden plants. Same-day delivery to Thoothukudi for orders placed before noon." },
      { question: "Which plants handle Tirunelveli's hot summer months?", answer: "Snake plant, ZZ plant, aloe vera, and jasmine handle Tirunelveli's summer heat well. Keep moisture-loving plants like peace lily in shaded, humid indoor positions. Outdoor plants benefit from early morning deep watering. The two monsoon seasons (June–September and October–December) provide sufficient water for outdoor plants to establish and grow strongly." }
    ]
  },

  "puducherry": {
    cityName: "Puducherry",
    metaTitle: "Buy Plants Online in Puducherry | French Quarter Garden Plants | RedHeart",
    metaDescription: "Order plants online in Puducherry. Bougainvillea, indoor plants & gifting combos. Delivery across Pondicherry. Starting ₹299. French Riviera of the East gets plant delivery.",
    h1: "Buy Plants Online in Puducherry — Plant Delivery in the French Riviera of the East",
    metaKeyword: "plants online puducherry pondicherry, buy plants puducherry, indoor plants puducherry, plant delivery puducherry, bougainvillea puducherry, french quarter plants puducherry, online nursery pondicherry",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Puducherry — Bougainvillea Walls and Auroville Greens at Your Door</h2>

<p>Puducherry (Pondicherry) is one of India's most unique urban environments — a Union Territory that was a French colony until 1954, its Ville Blanche (French Quarter) retains strikingly French urban character: tree-lined boulevards, pastel-walled villas with bougainvillea cascading over colonial facades, the Promenade Beach (Boulevard Dumas), the Alliance Française, French cafes, and a palpable Mediterranean atmosphere in a thoroughly South Indian city. Puducherry is also home to Auroville — the international intentional community founded by Sri Aurobindo's disciple the Mother in 1968, which hosts residents from 50+ countries and maintains extraordinary experimental gardens including the Botanical Garden and the innovative Auroville land restoration projects.</p>

<p>Puducherry's coastal climate is tropical monsoon with Bay of Bengal moderation: summers are hot (38°C), the northeast monsoon (October–December) delivers 1,350 mm, and winters are pleasantly warm (22–30°C). The city's French architectural heritage creates an unusual plant-conscious aesthetic — bougainvillea-draped compound walls in the French Quarter are as iconic as the red-and-white-striped road markings, and every restored colonial villa has a curated garden. RedHeart delivers across Puducherry, Auroville, and Villupuram with service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Puducherry's Unique Garden Aesthetic</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Puducherry Setting</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Style</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">French Quarter wall, villa façade</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mediterranean</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tamil home fragrance, colonial garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrant</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ashram reception, yoga studio</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Serene</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Boutique café, expat apartment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tropical modern</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tamil Quarter homes, spiritual use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Guesthouse rooms, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Modern</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tamil garden, Devi worship</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Traditional</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hotel lobby, heritage villa entrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tropical luxury</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">French Quarter Gardens and Auroville's Green Philosophy</h3>

<p>Puducherry's French Quarter (Ville Blanche) is one of India's most beautiful urban neighbourhoods — the pastel yellow, ochre, and white colonial villas with their bougainvillea-draped compound walls, the tree-shaded Rue Saint-Louis, Rue Dupleix, and the seafront Promenade Boulevard create a Mediterranean-tropical aesthetic that is unlike anywhere else in India. Bougainvillea in deep magenta, orange, and white cascades over the compound walls of restored heritage villas — it is Puducherry's visual signature.</p>

<p>Auroville's approach to gardening goes beyond aesthetics to ecological restoration — the community has transformed once-barren red laterite land into thriving tropical forest through decades of systematic tree planting and companion planting. The Sadhana Forest at Auroville is a model of tropical dry forest restoration. This ecological plant philosophy permeates Puducherry's overall attitude towards plants — the city's environmentally aware, internationally diverse population is more plant-conscious than almost any Indian city of its size.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Puducherry</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">French Quarter</td><td style="border:1px solid #d1d5db;padding:8px 12px;">White Town, Promenade Beach, Goubert Ave</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tamil Quarter / New City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Uppalam, Ariyankuppam, Muthialpet</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Auroville</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Auroville township, Kottakuppam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Villupuram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Villupuram town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which bougainvillea colour is best for a French Quarter wall in Puducherry?", answer: "Deep magenta (fuchsia pink) bougainvillea against a white or ochre colonial wall is Puducherry's most iconic look — it appears on thousands of Instagram travel photos and represents the city's visual identity. Orange-red bougainvillea works beautifully against pale yellow walls. For a more subtle look, white or cream bougainvillea against deep terracotta is elegant. Plant at the base of the compound wall and train upward." },
      { question: "Is plant delivery available in Puducherry and Auroville?", answer: "Yes. Delivery is available across Puducherry including the French Quarter (White Town), Promenade Beach area, Uppalam, and Ariyankuppam. Auroville township is also within our delivery zone. Order before 3 PM for same-day delivery. Villupuram is served within 3–5 hours." },
      { question: "Which plants are best for Puducherry's yoga studios and ashrams?", answer: "Peace lily is the most appropriate yoga studio plant — it creates calm, purifies air, and blooms with serene white flowers. Snake plant releases oxygen at night, making it excellent for meditation rooms. Bamboo creates a Zen-like atmosphere. Tulsi is sacred in Vaishnava and integral yoga traditions. Areca palm creates a lush, natural reception area for ashrams and wellness centres." },
      { question: "What indoor plant suits an Auroville or Puducherry expat's apartment?", answer: "Monstera, pothos, peace lily, snake plant, and areca palm reflect the international indoor plant aesthetic popular among Auroville's expat community. These are the plants found in European and North American apartments that Auroville residents bring to their homes in Puducherry's warm tropical setting. In Puducherry's climate, these tropical plants thrive with minimal care compared to their northern hemisphere equivalents." },
      { question: "Which plants handle Puducherry's northeast monsoon (October–December)?", answer: "Puducherry's 1,350 mm northeast monsoon requires outdoor plants that can handle sustained rainfall and waterlogged soil. Bougainvillea, jasmine, hibiscus, and areca palm all handle monsoon water well if planted in well-draining soil. Avoid succulents and cacti outdoors during the northeast monsoon — they rot in waterlogged conditions. Indoor plants need reduced watering during the monsoon months." }
    ]
  },

  "noida": {
    cityName: "Noida",
    metaTitle: "Buy Plants Online in Noida | NCR Tech City Plants | RedHeart",
    metaDescription: "Order plants online in Noida. Monstera, indoor plants, corporate gifting & terrace garden combos. Same-day delivery. Starting ₹299. UP's IT city gets plant delivery.",
    h1: "Buy Plants Online in Noida — Same-Day Plant Delivery in NCR's IT Hub",
    metaKeyword: "plants online noida, buy plants noida, indoor plants noida, plant delivery noida uttar pradesh, monstera noida, corporate plant gifting noida, online nursery noida sector 18",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Noida — India's Silicon Valley Gets Doorstep Greens</h2>

<p>Noida (New Okhla Industrial Development Authority) is Uttar Pradesh's most cosmopolitan city and one of the National Capital Region's most important IT and corporate hubs. Home to the headquarters and large campuses of TCS, HCL, Infosys, Wipro, Samsung, and dozens of other major corporations, Noida's planned sectors and wide boulevards host a young, educated, tech-savvy workforce from across India. The city is also known for its media presence (Noida has the highest concentration of Indian news television channels), film studios (Film City, Noida), and is linked to Delhi via the Delhi Metro's Blue Line.</p>

<p>Noida's climate matches Delhi's: hot summers (44–46°C), moderate monsoon (750 mm), and cold foggy winters (3–7°C in January). The large working population in apartments and high-rises creates strong demand for indoor plants that don't require garden space — balcony plants, desk plants, and air-purifying indoor plants are Noida's most popular plant categories. Corporate gifting for IT sector employees is also a major plant demand occasion. RedHeart delivers across Noida, Greater Noida, Ghaziabad, and NCR with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Indoor Plants for Noida's Tech City Apartments</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Noida Setting</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Trend</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tech apartment statement plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Night oxygen, NCR winter smog</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IT office gifting, desk plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Minimal care, busy techie</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every flat, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Always</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IT company Diwali gift standard</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Always</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate lobby, premium flats</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter balcony, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Seasonal</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Air Purification and Work-from-Home Plants in Noida</h3>

<p>Noida's work-from-home culture — significantly accelerated by the pandemic and now a permanent fixture for many IT employees — has driven a major increase in indoor plant purchases. Employees working from Noida apartments recognize that plants improve both air quality (particularly important given Noida's 300+ AQI winter days) and mental well-being during long work-from-home days. Snake plant, peace lily, and areca palm are particularly popular for home offices — they improve air quality, reduce stress, and create a more pleasing work environment than a blank wall.</p>

<p>Noida's young, educated IT workforce has India's highest per-capita exposure to international interior design content through Instagram, Pinterest, and YouTube. This drives demand for aesthetically interesting plants — monstera, fiddle leaf fig, pothos, rubber plant — that reflect global interior design trends rather than traditional Indian plant choices. RedHeart's curated plant selection for Noida reflects this contemporary, design-conscious customer profile.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Noida</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Noida Sectors 1–50</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sector 18, 62, 63, 15, 18, 41, 50</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Noida Extension / Greater Noida</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Greater Noida West, Gaur City, Supertech</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ghaziabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indirapuram, Vaishali, Kaushambi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Greater Noida City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Greater Noida, Jewar, Knowledge Park</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which indoor plants are best for Noida work-from-home setups?", answer: "Snake plant and peace lily are best for WFH air quality in Noida — snake plant releases oxygen at night and filters benzene, peace lily absorbs formaldehyde and VOCs from furniture and electronics. ZZ plant handles irregular care when you're busy. Monstera adds a visually appealing statement behind your desk for video calls. Money plant in a hanging pot is space-efficient for small Noida flats." },
      { question: "Is same-day plant delivery available across Noida?", answer: "Yes. Same-day delivery is available across all Noida sectors (1–100), Greater Noida West, Gaur City, and Ghaziabad (Indirapuram, Vaishali). Order before 3 PM. Midnight delivery is also available for Noida sectors near Sector 18 and 62. We handle bulk IT corporate orders with advance scheduling." },
      { question: "What plant is the best Diwali corporate gift for an IT company in Noida?", answer: "Peace lily in a ceramic planter is the most widely given corporate Diwali plant gift for IT companies in Noida — it's professional, elegant, and easy to care for. Lucky bamboo (3, 5, or 9 stalks) in glass vases is the desk gift standard. For a premium executive gift, areca palm in a large decorative pot makes an impressive statement. Money plant combo sets are popular for budget gifting." },
      { question: "Which plants purify Noida's winter smog air indoors?", answer: "Peace lily (removes benzene, formaldehyde, and trichloroethylene), snake plant (removes nitrogen oxides and formaldehyde), and areca palm (humidifies and filters particles) are the best indoor air purifiers for Noida's severe November–January smog. Having 5+ air-purifying plants per 1,000 sq ft measurably improves indoor air quality. Noida's AQI regularly crosses 400 in peak winter — indoor purifying plants are practical investments." },
      { question: "Can I get plants delivered to Greater Noida and Indirapuram?", answer: "Yes. Greater Noida West (Gaur City, Supertech Eco Village), Greater Noida Knowledge Park, and Ghaziabad's Indirapuram and Vaishali areas are within our delivery zone. Delivery takes 2–4 hours. These areas have large residential complexes with strong demand for indoor plant delivery." }
    ]
  },

  "durgapur": {
    cityName: "Durgapur",
    metaTitle: "Buy Plants Online in Durgapur | Steel City Bengal Plants | RedHeart",
    metaDescription: "Order plants online in Durgapur. Tropical plants, Durga Puja gifting & indoor combos. Same-day delivery. Starting ₹299. West Bengal's steel city gets plant delivery.",
    h1: "Buy Plants Online in Durgapur — Same-Day Plant Delivery in Bengal's Steel City",
    metaKeyword: "plants online durgapur, buy plants durgapur, indoor plants durgapur, plant delivery durgapur west bengal, money plant durgapur, durga puja plants durgapur, online nursery durgapur",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Durgapur — Bengal's Planned Steel City Goes Green</h2>

<p>Durgapur is West Bengal's most significant planned industrial city — built from scratch in the 1950s around the Durgapur Steel Plant (DSP), one of India's first integrated public sector steel plants established under the Nehru industrialisation plan, with Soviet technical assistance. The city was designed with wide boulevards, residential sectors, parks, and greenery that gives it a much more spacious, liveable feel than most organic Indian cities. The Durgapur Barrage on the Damodar river provides the city's water, and the steel plant remains one of SAIL's largest. Durgapur is also home to NIT Durgapur (National Institute of Technology), BIT Mesra campuses, and several engineering colleges that make it an important educational hub in West Bengal.</p>

<p>Durgapur's climate is continental West Bengal: very hot summers (42–44°C), a good monsoon (1,400 mm — excellent for plants), and cool winters (8–16°C). The planned city's large parks and green spaces create a plant-conscious population. Durga Puja is the defining cultural occasion — marigold, chrysanthemum, and shiuli (night jasmine) drive huge plant demand. RedHeart delivers across Durgapur, Asansol, and Burdwan with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Durgapur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Bengal Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durga Puja, Diwali, puja offerings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Bengali Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, DSP / NIT offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bengal gifting, humidity thrives</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, NIT campus rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, steel industry</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bengal garden, Devi worship</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Durga Puja, Steel City Pride, and Durgapur's Plant Traditions</h3>

<p>Durga Puja in Durgapur is celebrated with the scale and devotion of a full Bengali city — Durgapur Steel Plant's township, the NIT campus, and residential City Centre sectors all have major pandals and elaborate Puja celebrations. The marigold (gaada phool) and chrysanthemum are core to Durga Puja floral decoration; shiuli (Nyctanthes arbor-tristis), which blooms in October with fragrant white flowers with orange stems, is the most evocatively Bengali flower — its early morning carpet under the shiuli tree is one of the most poignant Bengali autumn experiences. Growing a shiuli plant for Durga Puja is deeply meaningful for any Durgapur Bengali family.</p>

<p>Durgapur Steel Plant's employee township culture — which has maintained parks, community gardens, and residential green spaces since the 1950s — creates a gardening heritage rare in industrial Indian cities. The NIT Durgapur campus similarly has tree-lined avenues and botanical features that contribute to an educated, plant-aware population.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Durgapur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">City Centre / Steel Township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">City Centre, Steel Township, Nachan Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Benachity / Bidhannagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Benachity, Bidhannagar, Bidhan Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Asansol</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Asansol city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Burdwan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Burdwan town, Bardhaman</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for Durga Puja gifting in Durgapur?", answer: "Shiuli (Nyctanthes arbor-tristis, night jasmine) is the most evocatively Bengali Durga Puja plant — its October blooming with fragrant white and orange flowers captures the essence of Bengali autumn. Marigold in full golden bloom is essential for pandal decoration. Chrysanthemum in pots adds festive colour. After Puja, an anthurium or peace lily is a lasting, elegant gift for close family." },
      { question: "Is same-day plant delivery available in Durgapur?", answer: "Yes. Same-day delivery is available across Durgapur including City Centre, Steel Township, Nachan Road, Benachity, and Bidhannagar. Order before 3 PM. We also deliver to Asansol within 3–5 hours." },
      { question: "Which plants grow best in Durgapur's hot continental climate?", answer: "The excellent 1,400 mm monsoon means outdoor plants establish vigorously in Durgapur. Marigold, hibiscus, tulsi, money plant, peace lily, and anthurium all thrive. The cool October–February winter allows rose and chrysanthemum to bloom beautifully. Indoor tropical plants like peace lily and anthurium grow with exceptional vigour in Durgapur's summer humidity." },
      { question: "Which plant is best for NIT Durgapur hostel rooms?", answer: "Money plant, snake plant, and ZZ plant are perfect for NIT hostel rooms — minimal care, forgiving of irregular watering, and thrive in the indirect light of hostel windows. Lucky bamboo in a water vase is popular as a desk plant needing only weekly water changes. These plants also make great gifting options for seniors during NIT Durgapur's fresher orientation events." },
      { question: "Do you deliver plants to Asansol and Burdwan from Durgapur?", answer: "Yes. Asansol is within 3–5 hours from our Durgapur network; Burdwan (Bardhaman) is within 4–6 hours. Both are significant West Bengal cities with plant delivery demand. Same-day delivery to Asansol for orders placed before noon." }
    ]
  },

  "vellore": {
    cityName: "Vellore",
    metaTitle: "Buy Plants Online in Vellore | CMC City Plants | RedHeart",
    metaDescription: "Order plants online in Vellore. Jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Tamil Nadu's fort city gets fresh plant delivery.",
    h1: "Buy Plants Online in Vellore — Same-Day Plant Delivery in the Fort City of Tamil Nadu",
    metaKeyword: "plants online vellore, buy plants vellore, indoor plants vellore, plant delivery vellore tamil nadu, jasmine vellore, CMC vellore plants, online nursery vellore fort",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Vellore — Medical Capital and Fort City Gets Doorstep Greens</h2>

<p>Vellore is one of Tamil Nadu's most important regional cities — internationally known for the Christian Medical College (CMC Vellore), one of India's finest and most respected medical institutions, which attracts patients and medical students from across South Asia and beyond. The Vellore Fort, one of South India's finest examples of military architecture (built in the 16th century with massive granite walls and a moat), is a major heritage landmark. The city is also a centre for leather goods manufacturing and Tamil Nadu Theological Seminary. Vellore's medical tourism — primarily driven by CMC's reputation — makes it one of Tamil Nadu's most visited cities.</p>

<p>Vellore's climate is hot semi-arid Tamil Nadu: summers reach 40°C, the northeast monsoon (October–December) provides 900 mm, and winters are warm (18–26°C). Jasmine, tulsi, hibiscus, and indoor plants are the cornerstones of Vellore's home garden culture. The large patient and student population at CMC creates demand for gifting plants — anthurium, peace lily, and money plant are popular choices for patients and their families. RedHeart delivers across Vellore, Arcot, Ambur, and Ranipet with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Vellore Homes and CMC Community</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Vellore Context</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, home fragrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Tamil Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">CMC patient gifting, recovery</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, student gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, hostel rooms, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tamil garden, temple use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">CMC staff gifting, corporate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Patient gifting, recovery rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">CMC Vellore, Patient Care, and Healing Plants</h3>

<p>CMC (Christian Medical College) Vellore is one of India's most revered hospitals — patients come here from across South Asia for complex cardiac, neurological, and oncological care. The hospital's campus, with its gardens and green spaces designed by its missionary founders, reflects a therapeutic philosophy that includes plants and natural environments in the healing process. Peace lily, anthurium, and money plant are the most popular plants gifted to patients at CMC Vellore — they are non-fragrant (important in hospital contexts), air-purifying, and create a positive, lively presence in recovery rooms.</p>

<p>Vellore's Fort (built by the Nayak kings in the 16th century and later used as a Mughal and British garrison) is now a central historical landmark with a moat garden and carefully maintained grounds. The fort's moat lily pond and surrounding greenery inspire the city's appreciation for aquatic and ornamental plants. Vellore's Christian community — both local Tamil Christians and the large CMC-connected Christian population from Kerala, Goa, and other states — maintains a distinct tradition of church garden flowers: roses, anthuriums, and seasonal blooms for church decoration.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Vellore</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">CMC / Central Vellore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">CMC Hospital, Vellore Fort, Katpadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sathuvachari / Sainathapuram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sathuvachari, Sainathapuram, VIT campus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ranipet / Arcot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ranipet, Arcot towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambur / Vaniyambadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambur, Vaniyambadi towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant can I gift to a patient at CMC Vellore?", answer: "Peace lily is the best plant to gift a CMC patient — it's air-purifying, non-fragrant (important in hospital rooms), has long-lasting white blooms, and requires minimal care from a recovering patient. Anthurium in a ceramic pot is similarly appropriate — non-fragrant, elegant, and long-blooming. Avoid strongly fragrant plants like jasmine or mogra in hospital rooms. Money plant in a small pot is a practical, cheerful get-well gift." },
      { question: "Is same-day plant delivery available near CMC Vellore?", answer: "Yes. Same-day delivery is available across Vellore including CMC Hospital area, Vellore Fort, Katpadi, Sathuvachari, and VIT campus. Order before 3 PM. We also deliver to Ranipet and Arcot within 3–5 hours." },
      { question: "Which plants are best for VIT Vellore campus hostel rooms?", answer: "Money plant, snake plant, and ZZ plant are perfect for VIT Vellore hostel rooms — they handle the irregular care of busy engineering students, survive in the indirect window light of hostel rooms, and are compact enough for desk or windowsill placement. Lucky bamboo in a small glass vase needs only weekly water changes — ideal for a student's minimal-maintenance desk plant." },
      { question: "What plant is appropriate for a Tamil Christian home in Vellore?", answer: "Anthurium in red or white is a popular church flower in Vellore's Christian community — white anthurium is especially beautiful as a church altar decoration. Rose plant is universal for Christian home gardens and church surroundings. Peace lily with its white hood-like flowers has a naturally ecclesiastical elegance. Jasmine is also widely used for church floral arrangements." },
      { question: "Do you deliver plants to Ranipet and Ambur from Vellore?", answer: "Yes. Ranipet (the leather industry hub, recently separated from Vellore district) is within 3–5 hours. Ambur and Vaniyambadi (the biriyani and leather belt) are within 4–6 hours. Both towns have growing demand for home garden plants and corporate gifting. Same-day delivery to Ranipet for orders placed before noon." }
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
