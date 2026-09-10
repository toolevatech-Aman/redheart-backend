// Batch 60 — 15 cities:
// Tamil Nadu: Tiruvannamalai, Namakkal, Dharmapuri, Ariyalur, Perambalur, Viluppuram, Cuddalore, Ranipet
// Uttarakhand: Champawat
// HP: Kinnaur (Reckong Peo)
// Bihar: Sitamarhi, Begusarai
// West Bengal: East Midnapore (Purba Medinipur)
// Karnataka: Koppal

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "tiruvannamalai": {
    cityName: "Tiruvannamalai",
    metaTitle: "Flower Delivery in Tiruvannamalai | Arunachala Temple TN | RedHeart",
    metaDescription: "Order flowers in Tiruvannamalai, Tamil Nadu. Same-day delivery near Annamalai temple & across Tiruvannamalai. From ₹399.",
    h1: "Online Flower Delivery in Tiruvannamalai",
    metaKeyword: "flower delivery tiruvannamalai, online flowers tiruvannamalai tamil nadu, florist tiruvannamalai, flowers tiruvannamalai arunachala annamalayar shiva ramana maharshi karthigai deepam",
    footerContent: `
<h2>Flower Delivery in Tiruvannamalai — Arunachala's Sacred Fire Mountain and Ramana Maharshi's Ashram</h2>
<p>Tiruvannamalai, at the base of the sacred Arunachala Hill (Annamalai) in Tamil Nadu's North Arcot region, is the headquarters of Tiruvannamalai district — one of the holiest pilgrimage towns in Tamil Shaivism and the spiritual home of the modern sage Ramana Maharshi. The Annamalayar Temple (Annamalaiyar-Unnamalai Amman complex) — one of Tamil Nadu's largest and most ancient Shiva temples, covering 10+ hectares with 9 gopurams including the 66-metre eastern tower, one of the tallest gopurams in India — embodies the Pancha Bhuta Stalagrams (five elements), representing fire (agni). The Karthigai Deepam (November/December) — when a massive fire is lit atop Arunachala visible for 30 km — draws millions of pilgrims and is one of Tamil Nadu's most spectacular festivals. Ramana Maharshi (1879–1950), the Advaita Vedanta sage who lived on Arunachala for 54 years, draws spiritual seekers from across the world to the Sri Ramanasramam.</p>
<p>RedHeart delivers flowers across Tiruvannamalai — Main Market, Annamalayar Temple area, Ramana Ashram, Polur area, Cheyyar area, and Vandavasi area. Our range includes roses, marigolds, bilva, vilvam, and Shaiva puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruvannamalai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Annamalayar Temple, Ramana Ashram, Polur, Cheyyar, Vandavasi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, bilva, jasmine, rose, Shaiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Annamalayar Temple puja available in Tiruvannamalai?", answer: "Yes, the Annamalayar Temple (one of Tamil Nadu's largest and most sacred Shiva temples, representing the fire element) has daily puja. Bilva garlands, marigolds, jasmine, and Shaiva puja flower sets are available for same-day delivery." },
      { question: "Are flowers for the Karthigai Deepam festival available in Tiruvannamalai?", answer: "Yes, the Karthigai Deepam (the massive fire lit atop Arunachala, drawing millions of pilgrims) is the year's biggest event. Marigold garlands and festive flower sets for the Karthigai Deepam pilgrimage are available." },
      { question: "Do you deliver flowers same day in Tiruvannamalai?", answer: "Yes, same-day delivery is available across Tiruvannamalai for orders placed before 3 PM." }
    ]
  },

  "namakkal": {
    cityName: "Namakkal",
    metaTitle: "Flower Delivery in Namakkal | Eggs Transport TN | RedHeart",
    metaDescription: "Order flowers in Namakkal, Tamil Nadu. Same-day delivery near Tiruchengode & across Namakkal. From ₹399.",
    h1: "Online Flower Delivery in Namakkal",
    metaKeyword: "flower delivery namakkal, online flowers namakkal tamil nadu, florist namakkal, flowers namakkal egg capital lorry transport nambi narayana poultry rock fort navaneethakrish",
    footerContent: `
<h2>Flower Delivery in Namakkal — Egg Capital of India and the Rock Fort Narasimha's Transport Hub</h2>
<p>Namakkal, in the Salem plateau of central Tamil Nadu, is the headquarters of Namakkal district — a district of remarkable economic identity with two national distinctions: India's egg capital and the lorry/transport capital. The Namakkal-Salem belt produces over 3 crore eggs per day (approximately 10 billion eggs per year) — making the region the largest egg-producing cluster in India, accounting for nearly 30% of India's total commercial egg production. Namakkal is also India's lorry-body manufacturing capital — hundreds of workshops in the district fabricate truck bodies, and the area accounts for a significant share of India's heavy commercial vehicle body-building. The Namakkal Rock Fort (a 40-metre natural rock formation with the Narasimha temple and Hanuman temple on top) is the town's iconic landmark. The Tiruchengode Arthanareeswarar temple (Shiva-Shakti combined deity) on a hill is a major pilgrimage site.</p>
<p>RedHeart delivers flowers across Namakkal — Main Market, Rock Fort area, Tiruchengode area, Rasipuram area, Paramathi-Velur area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Namakkal, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Rock Fort area, Tiruchengode, Rasipuram, Paramathi-Velur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Namakkal Rock Fort Narasimha temple puja available?", answer: "Yes, the Namakkal Rock Fort's Narasimha temple is the town's most important temple. Marigold garlands, lotus, and Vishnu puja flower sets for the temple are available for same-day delivery." },
      { question: "Can I get birthday flowers in Namakkal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Namakkal for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Namakkal?", answer: "Yes, same-day delivery is available across Namakkal for orders placed before 3 PM." }
    ]
  },

  "dharmapuri": {
    cityName: "Dharmapuri",
    metaTitle: "Flower Delivery in Dharmapuri | Cauvery TN | RedHeart",
    metaDescription: "Order flowers in Dharmapuri, Tamil Nadu. Same-day delivery near Hogenakkal & across Dharmapuri. From ₹399.",
    h1: "Online Flower Delivery in Dharmapuri",
    metaKeyword: "flower delivery dharmapuri, online flowers dharmapuri tamil nadu, florist dharmapuri, flowers dharmapuri hogenakkal falls cauvery banana mango karnataka border kollegal",
    footerContent: `
<h2>Flower Delivery in Dharmapuri — Hogenakkal Falls, Cauvery Banana Orchards, and Karnataka's Border</h2>
<p>Dharmapuri, in northwestern Tamil Nadu at the Karnataka border near Salem, is the headquarters of Dharmapuri district — a district of waterfalls, river valleys, and tropical fruit horticulture. The Hogenakkal Falls (on the Cauvery River, in Dharmapuri district near the Karnataka border) — often called the "Niagara of India" — is Tamil Nadu's most visited natural attraction, where the Cauvery River cascades through a rocky gorge in multiple channels and where traditional coracle (round basket boat) rides have been offered for generations. Dharmapuri district is a major banana and mango growing region — the varieties grown here (Nendran, Poovan, and others) are important in Tamil Nadu's horticulture economy. The district has significant Adi Dravidar (scheduled caste) and Scheduled Tribe communities (Irula, Kurumba) in its forest areas. The Morappur and Palacode areas have traditional silk weaving.</p>
<p>RedHeart delivers flowers across Dharmapuri — Main Market, Hogenakkal area, Palacode area, Pennagaram area, Morappur area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharmapuri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hogenakkal, Palacode, Pennagaram, Morappur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Hogenakkal Falls trip from Dharmapuri?", answer: "Yes, Hogenakkal Falls (the Niagara of India on the Cauvery River in Dharmapuri) is Tamil Nadu's most visited natural site. Seasonal bouquets for Hogenakkal resort stays are available from Dharmapuri." },
      { question: "Can I get birthday flowers in Dharmapuri?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Dharmapuri for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Dharmapuri?", answer: "Yes, same-day delivery is available across Dharmapuri for orders placed before 3 PM." }
    ]
  },

  "ariyalur": {
    cityName: "Ariyalur",
    metaTitle: "Flower Delivery in Ariyalur | Chola Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Ariyalur, Tamil Nadu. Same-day delivery near Perambalur & across Ariyalur. From ₹399.",
    h1: "Online Flower Delivery in Ariyalur",
    metaKeyword: "flower delivery ariyalur, online flowers ariyalur tamil nadu, florist ariyalur, flowers ariyalur chola limestone cement kollidam thanjavur coromandel ancient temple",
    footerContent: `
<h2>Flower Delivery in Ariyalur — Chola Heartland's Limestone Quarries and the Kollidam's Ancient Temple Belt</h2>
<p>Ariyalur, on the Kollidam (Coleroon) River plains of south-central Tamil Nadu, is the headquarters of Ariyalur district — carved from Perambalur district in 2007 and a district at the historical core of the Chola Empire's agricultural wealth. Ariyalur district sits on significant limestone deposits — the area is one of Tamil Nadu's major cement-producing zones, with several large cement plants (Ariyalur Cement Cluster) manufacturing ACC, Ultratech, and Lafarge brands from the local limestone. The district is in the Thanjavur-Trichy "Chola country" cultural belt, with ancient Chola-period Shaiva temples (7th–13th century) scattered across the Kollidam flood plain. The Kollidam (the Cauvery's distributary) flows north of Ariyalur. The district has a significant farming economy based on paddy, sugarcane, and groundnut in the river delta's fertile alluvium.</p>
<p>RedHeart delivers flowers across Ariyalur — Main Market, Andimadam area, Senthurai area, Jayankondam area, T. Edayar area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ariyalur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Andimadam, Senthurai, Jayankondam, T. Edayar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, jasmine, roses, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Ariyalur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ariyalur for orders placed before 3 PM." },
      { question: "Are flowers for Pongal available in Ariyalur?", answer: "Yes, Pongal (Tamil harvest festival) is enthusiastically celebrated in Ariyalur. Marigold garlands, sugarcane, and Pongal puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Ariyalur?", answer: "Yes, same-day delivery is available across Ariyalur for orders placed before 3 PM." }
    ]
  },

  "viluppuram": {
    cityName: "Viluppuram",
    metaTitle: "Flower Delivery in Viluppuram | South Arcot Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Viluppuram, Tamil Nadu. Same-day delivery near Pondicherry & across Viluppuram. From ₹399.",
    h1: "Online Flower Delivery in Viluppuram",
    metaKeyword: "flower delivery viluppuram, online flowers viluppuram tamil nadu, florist viluppuram, flowers viluppuram pondicherry gingee fort south arcot cuddalore highway corridor",
    footerContent: `
<h2>Flower Delivery in Viluppuram — Gingee Fort's Trojan Hills and the Gateway to Puducherry</h2>
<p>Viluppuram, in the South Arcot region of Tamil Nadu near the Puducherry (Pondicherry) border, is the headquarters of Viluppuram district — a district at the nexus of Tamil Nadu's East Coast Road and the NH-66 coastal highway corridor. The Gingee Fort (Senji, in Viluppuram district) — a spectacular 15th–17th century hill fortress complex built on three rocky hills, considered one of India's most impregnable natural fortresses, variously held by the Marathas, Mughals, Bijapur Sultans, French, and British — is one of Tamil Nadu's most dramatic heritage sites. Viluppuram is the key railway junction on the Chennai-Trichy mainline, with branch lines to Puducherry and Cuddalore. The Vikravandi and Kallakurichi areas (carved out as a new district from Viluppuram in 2019) have sugar cane cultivation and sugar mills. The Sathanur Dam on the Pennaiyar River in the district is a recreational site.</p>
<p>RedHeart delivers flowers across Viluppuram — Main Market, Gingee area, Tindivanam area, Villupuram Junction, Ulundurpet area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Viluppuram, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gingee, Tindivanam, Villupuram Junction, Ulundurpet, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Viluppuram?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Viluppuram for orders placed before 3 PM." },
      { question: "Are flowers for Tamil festivals available in Viluppuram?", answer: "Yes, Pongal, Deepavali, and temple festival flowers including marigold garlands and jasmine are available for same-day delivery in Viluppuram." },
      { question: "Do you deliver flowers same day in Viluppuram?", answer: "Yes, same-day delivery is available across Viluppuram for orders placed before 3 PM." }
    ]
  },

  "cuddalore": {
    cityName: "Cuddalore",
    metaTitle: "Flower Delivery in Cuddalore | East Coast Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Cuddalore, Tamil Nadu. Same-day delivery near Chidambaram & across Cuddalore. From ₹399.",
    h1: "Online Flower Delivery in Cuddalore",
    metaKeyword: "flower delivery cuddalore, online flowers cuddalore tamil nadu, florist cuddalore, flowers cuddalore chidambaram nataraja temple SIPCOT port bay of bengal cyclone",
    footerContent: `
<h2>Flower Delivery in Cuddalore — Chidambaram Nataraja's Cosmic Dance and the Bay of Bengal's Storm Coast</h2>
<p>Cuddalore, on the Bay of Bengal coast of Tamil Nadu, is the headquarters of Cuddalore district — a district of deep Shaiva temple heritage, industrial prominence, and cyclone vulnerability. The Chidambaram Nataraja Temple (in Chidambaram town, Cuddalore district) — one of India's most sacred Shiva temples, enshrining Shiva as Nataraja (the Lord of the Cosmic Dance), and a Paadal Petra Sthalams (sacred Shaiva pilgrimage site) — is one of the five Pancha Bhuta Stalagrams representing the sky/ether (akasha). The temple's annual Natyanjali Dance Festival (February/March) celebrates classical Bharatanatyam. Cuddalore has one of Tamil Nadu's largest industrial estates (SIPCOT Chemical Industrial Park at Cuddalore), with significant petrochemical, pharmaceutical, and chemical industries. The district is frequently affected by Bay of Bengal cyclones (including the 2004 tsunami that devastated its coast).</p>
<p>RedHeart delivers flowers across Cuddalore — Main Market, Chidambaram area, Panruti area, Kattumannarkoil area, Bhuvanagiri area, and Station Road. Our range includes roses, marigolds, jasmine, and Shaiva puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuddalore, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Chidambaram, Panruti, Kattumannarkoil, Bhuvanagiri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, jasmine, bilva, Nataraja puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Chidambaram Nataraja Temple puja available in Cuddalore?", answer: "Yes, the Chidambaram Nataraja Temple (one of India's most sacred Shiva temples, Pancha Bhuta Stalam for ether/akasha) is in Cuddalore district. Bilva garlands, marigolds, and Shaiva puja sets are available." },
      { question: "Can I get birthday flowers in Cuddalore?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Cuddalore for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Cuddalore?", answer: "Yes, same-day delivery is available across Cuddalore for orders placed before 3 PM." }
    ]
  },

  "ranipet": {
    cityName: "Ranipet",
    metaTitle: "Flower Delivery in Ranipet | Vellore Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Ranipet, Tamil Nadu. Same-day delivery near Walajah & across Ranipet. From ₹399.",
    h1: "Online Flower Delivery in Ranipet",
    metaKeyword: "flower delivery ranipet, online flowers ranipet tamil nadu, florist ranipet, flowers ranipet vellore walajah palar leather tannery manufacturing industry arcot nawab",
    footerContent: `
<h2>Flower Delivery in Ranipet — Palar River Leather Industries and the Arcot Nawab's Battle Legacy</h2>
<p>Ranipet, on the Palar River in northern Tamil Nadu near Vellore, is the headquarters of Ranipet district — carved from Vellore district in 2019 and centred on one of India's most significant industrial corridors for leather and tanning. The Ranipet-Ambur-Vaniyambadi leather cluster (in Ranipet and Vellore districts) is one of India's most important export-oriented leather manufacturing zones, producing shoes, leather goods, and auto upholstery for global brands. The tanneries on the Palar River were historically important but also a major source of water pollution that affected the river. The Arcot area (in Ranipet district) is historically significant as the site of the Battle of Arcot (1751) — where the young Robert Clive (with 200 British and Indian soldiers) captured and held the Nawab of Arcot's fort against a large siege, a turning point in British East India Company's rise to dominance in the Carnatic.</p>
<p>RedHeart delivers flowers across Ranipet — Main Market, Arcot area, Arani area, Walajah area, Sholinghur area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ranipet, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Arcot, Arani, Walajah, Sholinghur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Ranipet?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ranipet for orders placed before 3 PM." },
      { question: "Are flowers for Tamil festivals available in Ranipet?", answer: "Yes, Pongal, Deepavali, and temple festival flowers including marigold garlands and jasmine are available for same-day delivery in Ranipet." },
      { question: "Do you deliver flowers same day in Ranipet?", answer: "Yes, same-day delivery is available across Ranipet for orders placed before 3 PM." }
    ]
  },

  "champawat": {
    cityName: "Champawat",
    metaTitle: "Flower Delivery in Champawat | Kumaon Nepal Border Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Champawat, Uttarakhand. Same-day delivery near Tanakpur & across Champawat. From ₹399.",
    h1: "Online Flower Delivery in Champawat",
    metaKeyword: "flower delivery champawat, online flowers champawat uttarakhand, florist champawat, flowers champawat tanakpur purnagiri jim corbett kumaon nepal sharda baleshwar",
    footerContent: `
<h2>Flower Delivery in Champawat — Purnagiri Devi, Jim Corbett's Man-Eater Hills, and the Sharda River Nepal Border</h2>
<p>Champawat, in the Kumaon foothills of Uttarakhand at the Nepal border, is the headquarters of Champawat district — a district of ancient Chand dynasty history, pilgrimage significance, and wildlife legend. Champawat was the capital of the Chand kingdom of Kumaon from the 10th century until they shifted to Almora in the 16th century, and the Baleshwar temple complex (15th–16th century, with exquisite Chand-era stone carvings) is one of Uttarakhand's finest medieval temple ensembles. Jim Corbett's most famous man-eating tigress (the "Champawat Tiger" — a Bengal tigress responsible for 436 documented human deaths, the largest number of fatal attacks ever attributed to a single tiger) was shot in Champawat district in 1907, an event that launched Corbett's legendary career. The Purnagiri temple (on a hill near Tanakpur, Champawat district) is a major Shakti shrine drawing hundreds of thousands of pilgrims in the Navratri season. Tanakpur (on the Sharda River) is the last major Indian town before Nepal.</p>
<p>RedHeart delivers flowers across Champawat — Main Market, Tanakpur area, Purnagiri area, Lohaghat area, Banbasa area, and Station Road. Our range includes roses, marigolds, Himalayan flowers, and Devi puja bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champawat, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tanakpur, Purnagiri area, Lohaghat, Banbasa, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, Himalayan flowers, Devi puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Purnagiri temple Navratri pilgrimage available in Champawat?", answer: "Yes, the Purnagiri Devi temple (near Tanakpur, Champawat) draws hundreds of thousands of pilgrims during Navratri. Marigold garlands and Shakti puja flower sets for the Purnagiri pilgrimage are available." },
      { question: "Can I get birthday flowers in Champawat?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Champawat for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Champawat?", answer: "Yes, same-day delivery is available across Champawat for orders placed before 3 PM." }
    ]
  },

  "kinnaur": {
    cityName: "Kinnaur",
    metaTitle: "Flower Delivery in Kinnaur | Apple & Kinner Himachal | RedHeart",
    metaDescription: "Order flowers in Kinnaur (Reckong Peo), HP. Same-day delivery near Spiti & across Kinnaur. From ₹399.",
    h1: "Online Flower Delivery in Kinnaur",
    metaKeyword: "flower delivery kinnaur, online flowers kinnaur reckong peo himachal pradesh, florist kinnaur, flowers kinnaur kinner kailash apple orchards sangla valley tibetan sutlej",
    footerContent: `
<h2>Flower Delivery in Kinnaur — Kinner Kailash Pilgrimage, Apple Orchards, and the Sangla Valley's Ibex Peaks</h2>
<p>Kinnaur, in the remote trans-Himalayan valleys of Himachal Pradesh bordering Tibet (China), is the headquarters at Reckong Peo of Kinnaur district — a district of extraordinary natural beauty combining Himalayan trekking, Tibetan Buddhist culture, and the finest apple orchards in India. The Kinnaur district grows a significant share of India's premium apple crop — particularly the late-season "Kinnauri Apple" (harvested in September-October), grown at high altitudes (2,200–3,000 m) with exceptional sweetness. The Kinner Kailash (6,050 m) — a sacred peak for both Hindus and Buddhists, where a 79-ft natural shivaling rock formation is revered — draws pilgrims for a circumambulation trek (parikrama) at extreme altitude. The Sangla Valley (Baspa Valley), Chitkul (the last inhabited village before the Indo-China border), and the Hindustan-Tibet Road (the old route to Lhasa) are iconic features. Kinnaur's Tibetan-origin Kinnauri community maintains distinct traditions, dress, and festivals.</p>
<p>RedHeart delivers flowers across Kinnaur — Reckong Peo (district HQ), Sangla Valley, Kalpa area, Nichar area, and Bhawanagar. Our range includes seasonal mountain flowers, marigolds, Buddhist offering flowers, and apple blossom bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kinnaur (Reckong Peo), Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Reckong Peo, Sangla Valley, Kalpa, Nichar, Bhawanagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Seasonal mountain flowers, apple blossoms, Buddhist offering flowers, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Kinner Kailash pilgrimage available in Kinnaur?", answer: "Yes, the Kinner Kailash (6,050 m) pilgrimage parikrama trek is one of India's most challenging high-altitude pilgrimages. Marigolds, seasonal flowers, and Shiva-Buddha puja offerings for the journey are available from Reckong Peo." },
      { question: "Can I get apple blossom bouquets in Kinnaur?", answer: "During the apple blossom season (March-April), Kinnaur's orchards are spectacular. Seasonal mountain flower arrangements inspired by Kinnaur's apple orchards are available." },
      { question: "Do you deliver flowers same day in Kinnaur?", answer: "Yes, same-day delivery is available across Kinnaur (Reckong Peo and surrounding areas) for orders placed before 3 PM." }
    ]
  },

  "sitamarhi": {
    cityName: "Sitamarhi",
    metaTitle: "Flower Delivery in Sitamarhi | Sita Birthplace Bihar | RedHeart",
    metaDescription: "Order flowers in Sitamarhi, Bihar. Same-day delivery near Janakpur Nepal border & across Sitamarhi. From ₹399.",
    h1: "Online Flower Delivery in Sitamarhi",
    metaKeyword: "flower delivery sitamarhi, online flowers sitamarhi bihar, florist sitamarhi, flowers sitamarhi sita birthplace janakpur nepal border ramayana bagmati vivah panchami",
    footerContent: `
<h2>Flower Delivery in Sitamarhi — Sita's Birthplace and the Bagmati River's Ramayana Heritage</h2>
<p>Sitamarhi, on the Bagmati River in northern Bihar at the Nepal border, is the headquarters of Sitamarhi district — one of Hinduism's most sacred sites, believed to be the birthplace of Goddess Sita (the consort of Lord Ram and heroine of the Ramayana). The Janaki Sthaan temple (in Sitamarhi town, on the spot believed to be where King Janaka found baby Sita in a furrow while ploughing) is the central pilgrimage site and draws hundreds of thousands of devotees on Vivah Panchami (the festival celebrating Sita-Ram's wedding, coinciding with the Janakpur Vivah Panchami mela in Nepal, across the border). Sitamarhi is closely tied to Janakpur (Nepal) — the ancient Mithila Kingdom capital and Sita's other associated city. The district has a predominantly Maithili-speaking population, and the Madhubani painting tradition (with its intricate geometric depictions of Sita, Ram, and Ramayana scenes) is the dominant folk art.</p>
<p>RedHeart delivers flowers across Sitamarhi — Main Market, Janaki Sthan area, Pupri area, Bajpatti area, Riga area, and Station Road. Our range includes roses, marigolds, lotus, and Ramayana puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Janaki Sthan, Pupri, Bajpatti, Riga, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, rose, Janaki puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Vivah Panchami (Sita-Ram wedding celebration) available in Sitamarhi?", answer: "Yes, Vivah Panchami (celebrating Sita and Ram's divine wedding, tied to the Janakpur festival across the Nepal border) is the biggest celebration in Sitamarhi. Marigold garlands, lotus, and special Janaki puja flower sets are available." },
      { question: "Can I get birthday flowers in Sitamarhi?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sitamarhi for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sitamarhi?", answer: "Yes, same-day delivery is available across Sitamarhi for orders placed before 3 PM." }
    ]
  },

  "begusarai": {
    cityName: "Begusarai",
    metaTitle: "Flower Delivery in Begusarai | Leningrad of India Bihar | RedHeart",
    metaDescription: "Order flowers in Begusarai, Bihar. Same-day delivery near BPCL refinery & across Begusarai. From ₹399.",
    h1: "Online Flower Delivery in Begusarai",
    metaKeyword: "flower delivery begusarai, online flowers begusarai bihar, florist begusarai, flowers begusarai bpcl oil refinery leningrad india naxal ganga barauni kanwar lake",
    footerContent: `
<h2>Flower Delivery in Begusarai — Leningrad of India, BPCL Refinery, and the Kanwar Bird Lake</h2>
<p>Begusarai, on the Ganga River plains of north Bihar, is the headquarters of Begusarai district — nicknamed the "Leningrad of India" for its historically strong communist and socialist political culture (the Communist Party of India had strong labour union bases in the industrial township here from the 1960s–80s). The Barauni Oil Refinery (BPCL-HPCL Barauni Refinery, established 1964 under Indian-Soviet cooperation, one of India's earliest public-sector oil refineries) is the district's largest industrial establishment. The Kanwar Lake (Kanwar Jheel) in Begusarai is the largest freshwater oxbow lake in Asia and a Ramsar Wetland Site — one of India's most important wetland bird habitats, sheltering migratory ducks, pelicans, flamingos, and rare birds. The Ganga waterfront and ghats at Begusarai are active pilgrimage and cultural sites for Chhath Puja.</p>
<p>RedHeart delivers flowers across Begusarai — Main Market, Barauni area, Kanwar Lake area, Teghra area, Sahebpur Kamal area, and Station Road. Our range includes roses, marigolds, lotus, and Bihar puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Begusarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Barauni, Kanwar Lake area, Teghra, Sahebpur Kamal, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, Chhath Puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Begusarai?", answer: "Yes, Chhath Puja (the Ganga-side sun worship festival) is the biggest festival in Begusarai. Lotus flowers, sugarcane, and Chhath Puja flower sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Begusarai?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Begusarai for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Begusarai?", answer: "Yes, same-day delivery is available across Begusarai for orders placed before 3 PM." }
    ]
  },

  "purba-medinipur": {
    cityName: "Purba Medinipur",
    metaTitle: "Flower Delivery in Purba Medinipur | Digha Coast West Bengal | RedHeart",
    metaDescription: "Order flowers in Purba Medinipur (East Midnapore), WB. Same-day delivery near Digha beach & across Purba Medinipur. From ₹399.",
    h1: "Online Flower Delivery in Purba Medinipur",
    metaKeyword: "flower delivery purba medinipur east midnapore, online flowers purba medinipur west bengal, florist east midnapore, flowers purba medinipur digha beach rupnarayan haldia port tamluk",
    footerContent: `
<h2>Flower Delivery in Purba Medinipur — Digha's Sea Coast, Haldia Port, and the Rupnarayan's Ancient Tamralipta</h2>
<p>Purba Medinipur (East Midnapore), on the Bay of Bengal coast and the Rupnarayan River in West Bengal near Odisha, is the headquarters of Purba Medinipur district — a coastal district of beaches, port industries, and deep historical roots. Digha (in Purba Medinipur) is West Bengal's most popular sea-beach resort, a 7 km sandy beach that draws lakhs of Bengali tourists especially during Durga Puja breaks and summer. Haldia (in Purba Medinipur) is the Kolkata Port Trust's major deepwater container port (Haldia Dock Complex), handling bulk petroleum and cargo that Kolkata's shallow Hooghly cannot accommodate, and has a large petrochemical complex (Indian Oil Haldia Refinery). Tamluk (the district HQ) is the ancient Tamralipta — a major port city mentioned in Ptolemy, the Jataka tales, and Chinese traveller Xuanzang's accounts, from where King Ashoka's daughter Sanghamitra carried the sacred Bodhi tree to Sri Lanka.</p>
<p>RedHeart delivers flowers across Purba Medinipur — Tamluk (HQ), Digha area, Haldia area, Contai area, Nandigram area, and Egra area. Our range includes roses, marigolds, seasonal Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purba Medinipur, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tamluk, Digha, Haldia, Contai, Nandigram, Egra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Digha beach holiday in Purba Medinipur?", answer: "Yes, Digha (West Bengal's most popular beach resort) is in Purba Medinipur. Tropical beach bouquets and romantic rose arrangements for Digha hotel stays are available." },
      { question: "Are flowers for Durga Puja available in Purba Medinipur?", answer: "Yes, Durga Puja is the biggest festival in Purba Medinipur. Marigold garlands, lotus, and Durga puja flower sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Purba Medinipur?", answer: "Yes, same-day delivery is available across Purba Medinipur (Tamluk, Digha, Haldia, Contai and more) for orders placed before 3 PM." }
    ]
  },

  "koppal": {
    cityName: "Koppal",
    metaTitle: "Flower Delivery in Koppal | Hampi Belt Karnataka | RedHeart",
    metaDescription: "Order flowers in Koppal, Karnataka. Same-day delivery near Hampi & across Koppal. From ₹399.",
    h1: "Online Flower Delivery in Koppal",
    metaKeyword: "flower delivery koppal, online flowers koppal karnataka, florist koppal, flowers koppal hampi vijayanagara tungabhadra gadgala koppal fort north karnataka",
    footerContent: `
<h2>Flower Delivery in Koppal — Tungabhadra's Hampi Gateway and the Vijayanagara Boulder Landscape</h2>
<p>Koppal, on the Tungabhadra River plains of north Karnataka near the Hampi UNESCO World Heritage Site, is the headquarters of Koppal district — a district in the ancient Vijayanagara Empire's heartland with a dramatically rocky landscape of granite boulders, stepwells, and medieval-era temples. Koppal district is adjacent to Hampi (Virupapura Gadde and Hampi Bazaar, in Vijayanagara district) — the spectacular ruins of the Vijayanagara Empire's capital (1343–1565 CE), one of the world's largest medieval cities. The Tungabhadra River flows between Koppal and the Hampi ruins. The Koppal Fort (a medieval hill fort with Chalukya-Kalachuri-Vijayanagara era remains) stands above the town. The district's Gavimath area has the Gavisiddeshwara temple, an important pilgrimage destination. The north Karnataka landscape here — flat Deccan plain, wind-eroded granite boulders, and dry Bellary-type red soil — supports cotton and sugarcane.</p>
<p>RedHeart delivers flowers across Koppal — Main Market, Gangavathi area, Kushtagi area, Yalburga area, Yelburga area, and Station Road. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koppal, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gangavathi, Kushtagi, Yalburga, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Hampi heritage visit from Koppal?", answer: "Yes, Koppal is adjacent to the Hampi UNESCO World Heritage Site (Vijayanagara ruins, Tungabhadra River). Seasonal bouquets for Hampi resort and guesthouse gifting are available from Koppal." },
      { question: "Can I get birthday flowers in Koppal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Koppal for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Koppal?", answer: "Yes, same-day delivery is available across Koppal for orders placed before 3 PM." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers",
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
        { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
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
