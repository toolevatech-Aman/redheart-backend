// Batch 64 — 13 cities (FINAL BATCH ~778 total):
// Kerala: Thrissur, Alappuzha
// TN: Ramanathapuram, Virudhunagar, Thoothukudi (Tuticorin), Kanyakumari
// Gujarat: Narmada (Rajpipla), Aravalli (Modasa)
// Odisha: Nuapada, Boudh
// MP: Chhatarpur, Burhanpur
// WB: Purba Bardhaman

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "thrissur": {
    cityName: "Thrissur",
    metaTitle: "Flower Delivery in Thrissur | Pooram Kerala | RedHeart",
    metaDescription: "Order flowers in Thrissur, Kerala. Same-day delivery near Vadakkunnathan temple & across Thrissur. From ₹399.",
    h1: "Online Flower Delivery in Thrissur",
    metaKeyword: "flower delivery thrissur, online flowers thrissur kerala, florist thrissur, flowers thrissur pooram elephant festival vadakkunnathan temple cultural capital kerala palghat pass",
    footerContent: `
<h2>Flower Delivery in Thrissur — Kerala's Cultural Capital and the World-Famous Thrissur Pooram</h2>
<p>Thrissur (Trichur), at the geographic and cultural heart of Kerala, is the headquarters of Thrissur district — considered the "Cultural Capital of Kerala" for its unique concentration of Kerala's performing arts traditions, festivals, and temple heritage. The Thrissur Pooram — held annually in April/May at the Vadakkunnathan temple ground — is universally regarded as the most spectacular temple festival in Kerala and one of the grandest in the world: two teams of caparisoned elephants (30 elephants each from the Thiruvambady and Paramekkavu temples), spectacular parasol competitions (kudamattam, where parasols are switched and displayed at speed to the crowd's delight), and powerful percussion ensembles (Panchavadyam, Panchari Melam) that can be heard kilometres away. The Vadakkunnathan temple (a Siva temple in the ancient Kerala architectural style) is the festival's epicentre. Thrissur is home to Kerala Kalamandalam (the state's premier institution for Kathakali, Mohiniyattam, Koodiyattam, and Theyyam — a UNESCO-recognised arts hub) and the Kerala Sahitya Akademi.</p>
<p>RedHeart delivers flowers across Thrissur — Main Market, Round South/North, MG Road, Ollur area, Chalakudy area, Irinjalakuda area, and Guruvayur area. Our range includes roses, marigolds, jasmine, and Kerala puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thrissur, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Round South/North, MG Road, Ollur, Chalakudy, Irinjalakuda, Guruvayur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Kerala puja flowers, orchids</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Guruvayur Krishna temple puja available in Thrissur?", answer: "Yes, the Guruvayur Sri Krishna temple (one of Kerala's most sacred Vishnu temples, drawing over 10 million pilgrims annually) is in Thrissur district. Lotus flowers, marigold garlands, and Vishnu puja sets are available for same-day delivery." },
      { question: "Can I get Thrissur Pooram themed flower arrangements?", answer: "Yes, the Thrissur Pooram (April/May at Vadakkunnathan temple — the world's most spectacular elephant-and-percussion festival) is celebrated with garlands and festive arrangements. Marigold garlands and Kerala festive sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Thrissur?", answer: "Yes, same-day delivery is available across Thrissur for orders placed before 3 PM." }
    ]
  },

  "alappuzha": {
    cityName: "Alappuzha",
    metaTitle: "Flower Delivery in Alappuzha | Backwaters Kerala | RedHeart",
    metaDescription: "Order flowers in Alappuzha (Alleppey), Kerala. Same-day delivery near backwaters & across Alappuzha. From ₹399.",
    h1: "Online Flower Delivery in Alappuzha",
    metaTitle: "Flower Delivery in Alappuzha | Backwaters Kerala | RedHeart",
    metaKeyword: "flower delivery alappuzha alleppey, online flowers alappuzha kerala, florist alappuzha, flowers alappuzha backwaters houseboat nehru trophy boat race venice of east vembanad",
    footerContent: `
<h2>Flower Delivery in Alappuzha — Venice of the East, Kerala Backwaters, and the Nehru Trophy Boat Race</h2>
<p>Alappuzha (Alleppey), on the Kerala coast between the Arabian Sea and the Vembanad Lake, is the headquarters of Alappuzha district — the gateway to Kerala's celebrated backwater ecosystem and one of the most photographed destinations in India. The "Venice of the East" moniker comes from Alappuzha's remarkable canal network — hundreds of kilometres of backwater canals connect the town to the Vembanad Lake, Kuttanad (the "Rice Bowl of Kerala," the only place in India where farming is done below sea level), and the Arabian Sea coast. The Nehru Trophy Boat Race — held on Punnamada Lake (Alappuzha) every second Saturday of August — is India's most famous water sport event: massive snake boats (chundan vallams, up to 100 rowers each, traditionally assembled for war) compete in a spectacular race watched by over a million spectators. Alappuzha's houseboat (kettuvallam) industry draws tourists globally for overnight backwater cruises. The Arthunkal Church (Alappuzha) is a famous St. Sebastian pilgrimage site drawing Catholics annually.</p>
<p>RedHeart delivers flowers across Alappuzha — Main Market, Punnamada Lake area, Cherthala area, Kuttanad area, Kayamkulam area, and Ambalappuzha area. Our range includes roses, marigolds, jasmine, and Kerala puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alappuzha (Alleppey), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Punnamada Lake, Cherthala, Kuttanad, Kayamkulam, Ambalappuzha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, tropical Kerala flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a houseboat stay in Alappuzha backwaters?", answer: "Yes, the Alappuzha backwaters houseboat (kettuvallam) experience is one of Kerala's most iconic. Tropical bouquets for romantic houseboat gifting or Onam pookalam flowers are available for same-day delivery." },
      { question: "Are flowers for Onam available in Alappuzha?", answer: "Yes, Onam pookalam (floral carpet) flowers are available for same-day delivery in Alappuzha. The Nehru Trophy Boat Race area and the Ambalappuzha temple also see Onam celebrations." },
      { question: "Do you deliver flowers same day in Alappuzha?", answer: "Yes, same-day delivery is available across Alappuzha for orders placed before 3 PM." }
    ]
  },

  "ramanathapuram": {
    cityName: "Ramanathapuram",
    metaTitle: "Flower Delivery in Ramanathapuram | Rameshwaram Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Ramanathapuram, Tamil Nadu. Same-day delivery near Rameshwaram & across Ramanathapuram. From ₹399.",
    h1: "Online Flower Delivery in Ramanathapuram",
    metaKeyword: "flower delivery ramanathapuram, online flowers ramanathapuram tamil nadu, florist ramanathapuram, flowers ramanathapuram rameshwaram kalam dhanushkodi pamban bridge gulf mannar",
    footerContent: `
<h2>Flower Delivery in Ramanathapuram — Rameshwaram's Char Dham and APJ Abdul Kalam's Homeland</h2>
<p>Ramanathapuram, on the southeastern tip of Tamil Nadu at the Gulf of Mannar facing Sri Lanka, is the headquarters of Ramanathapuram district — the district of Rameshwaram, one of India's four sacred Char Dham pilgrimage sites. The Ramanathaswamy temple at Rameshwaram (in Ramanathapuram district) — with its legendary 1,212-metre corridor (the world's longest temple corridor), the 22 sacred teerthams (wells of holy water), and its location on Pamban Island where Rama is said to have built the mythological Ram Setu to Lanka — draws millions of pilgrims annually. Dhanushkodi (the "Land's End" of India, destroyed by the 1964 cyclone) is an eerily beautiful ghost town at the tip of Pamban Island, 30 km from Rameshwaram. APJ Abdul Kalam — India's beloved 11th President and "Missile Man of India" (ISRO's ballistic missile programme, Agni, Prithvi, Pokhran II nuclear tests) — was born in Rameswaram (1931) in a fishing community. The Pamban Bridge (1914), India's first sea bridge, connects Pamban Island to the mainland.</p>
<p>RedHeart delivers flowers across Ramanathapuram — Main Market, Rameshwaram area, Pamban area, Mandapam area, Keelakarai area, and Station Road. Our range includes roses, marigolds, jasmine, and Shiva puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramanathapuram, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Rameshwaram, Pamban, Mandapam, Keelakarai, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, bilva, lotus, Shiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Ramanathaswamy temple (Rameshwaram) available?", answer: "Yes, the Ramanathaswamy temple at Rameshwaram — one of India's four Char Dham — is in Ramanathapuram district. Bilva leaves, lotus, marigold garlands, and Shiva puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Ramanathapuram?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ramanathapuram for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Ramanathapuram?", answer: "Yes, same-day delivery is available across Ramanathapuram for orders placed before 3 PM." }
    ]
  },

  "virudhunagar": {
    cityName: "Virudhunagar",
    metaTitle: "Flower Delivery in Virudhunagar | Sivakasi Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Virudhunagar, Tamil Nadu. Same-day delivery near Sivakasi & across Virudhunagar. From ₹399.",
    h1: "Online Flower Delivery in Virudhunagar",
    metaKeyword: "flower delivery virudhunagar, online flowers virudhunagar tamil nadu, florist virudhunagar, flowers virudhunagar sivakasi firecrackers matches printing india diwali",
    footerContent: `
<h2>Flower Delivery in Virudhunagar — Sivakasi's Firecrackers Capital and India's Match-Box Industry</h2>
<p>Virudhunagar, in the Madurai belt of southern Tamil Nadu, is the headquarters of Virudhunagar district — home to Sivakasi, India's undisputed fireworks and safety matches capital. The Sivakasi industrial town (in Virudhunagar district) accounts for approximately 90% of India's firecracker production and 70% of India's safety matches — making it the reason every Diwali celebration in India has Sivakasi-made rockets, flower pots, and sparklers. The district's offset printing industry (in Virudhunagar and Sivakasi) makes it India's largest hub for packaging, calendar, and greeting card printing. The Sankarankovil area (partly in Virudhunagar) has a significant Shiva temple heritage. The district's economy runs on the small-scale industrial tradition of the Nadar community (the dominant business and social community here), who transformed from toddy-tapping to trade and industrial enterprise through education and ambition over the 19th–20th centuries. Aruppukottai (in Virudhunagar district) is historically connected to the Nayakkar-era Virupaksha identity.</p>
<p>RedHeart delivers flowers across Virudhunagar — Main Market, Sivakasi area, Aruppukottai area, Rajapalayam area, Srivilliputtur area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Virudhunagar, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sivakasi, Aruppukottai, Rajapalayam, Srivilliputtur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get Diwali flowers in Virudhunagar (Sivakasi)?", answer: "Yes, Diwali is a major celebration in Virudhunagar's Sivakasi — which also makes much of India's Diwali firecrackers! Marigold garlands and festive Diwali flower sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Virudhunagar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Virudhunagar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Virudhunagar?", answer: "Yes, same-day delivery is available across Virudhunagar for orders placed before 3 PM." }
    ]
  },

  "thoothukudi": {
    cityName: "Thoothukudi",
    metaTitle: "Flower Delivery in Thoothukudi | Tuticorin Port Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Thoothukudi (Tuticorin), Tamil Nadu. Same-day delivery near VOC Port & across Thoothukudi. From ₹399.",
    h1: "Online Flower Delivery in Thoothukudi",
    metaKeyword: "flower delivery thoothukudi tuticorin, online flowers thoothukudi tamil nadu, florist thoothukudi, flowers thoothukudi voc port pearl fishery gulf mannar coral reef sterlite",
    footerContent: `
<h2>Flower Delivery in Thoothukudi — VOC Port, Gulf of Mannar Coral Reefs, and the Pearl Fishery Legacy</h2>
<p>Thoothukudi (Tuticorin), on the southeastern coast of Tamil Nadu at the Gulf of Mannar facing Sri Lanka, is the headquarters of Thoothukudi district — home to one of India's busiest ports and a historically significant maritime trade city. The V.O. Chidambaram (VOC) Port — named after the Tamil nationalist lawyer-turned-steamship-entrepreneur Vallinayagam Ollandai Chidambaram Pillai (1872–1936), who challenged the British shipping monopoly by founding the first Indian-owned steamship company — is southern India's largest container port. The Gulf of Mannar Marine National Park (in Thoothukudi and Ramanathapuram) is India's first marine biosphere reserve, with 21 islands, coral reefs, seagrasses, dugong (sea cow), and sea turtles. The traditional pearl fishery (Thoothukudi was historically called the "Pearl City" for the Gulf of Mannar's legendary pearl oyster beds, now largely depleted) gave the city its Portuguese-era name "Tuticorin." Thoothukudi is also nationally known for the 2018 anti-Sterlite protest in which 13 unarmed civilians were killed by police during an environmental demonstration against the Sterlite copper smelter.</p>
<p>RedHeart delivers flowers across Thoothukudi — Main Market, VOC Port area, Beach Road, Kovilpatti area, Tiruchendur area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thoothukudi (Tuticorin), Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, VOC Port area, Beach Road, Kovilpatti, Tiruchendur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Murugan puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Tiruchendur Murugan temple puja available in Thoothukudi?", answer: "Yes, the Tiruchendur Arulmigu Subramaniaswamy (Murugan) temple — one of the six abodes of Murugan, on the Thoothukudi coastline — draws millions of pilgrims. Marigold garlands and Murugan puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Thoothukudi?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Thoothukudi for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Thoothukudi?", answer: "Yes, same-day delivery is available across Thoothukudi for orders placed before 3 PM." }
    ]
  },

  "kanyakumari": {
    cityName: "Kanyakumari",
    metaTitle: "Flower Delivery in Kanyakumari | Land's End Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Kanyakumari, Tamil Nadu. Same-day delivery near Cape Comorin & across Kanyakumari. From ₹399.",
    h1: "Online Flower Delivery in Kanyakumari",
    metaKeyword: "flower delivery kanyakumari, online flowers kanyakumari tamil nadu, florist kanyakumari, flowers kanyakumari cape comorin vivekananda rock swami vivekananda thiruvalluvar statue sunrise sunset three oceans",
    footerContent: `
<h2>Flower Delivery in Kanyakumari — India's Three-Ocean Tip, Vivekananda's Rock, and the Tamil Saint Thiruvalluvar</h2>
<p>Kanyakumari, at the southernmost tip of peninsular India where the Arabian Sea, the Bay of Bengal, and the Indian Ocean meet, is the headquarters of Kanyakumari district — India's most unique geographical confluence point and a site of extraordinary spiritual, cultural, and natural significance. Cape Comorin (the tip) is where Swami Vivekananda meditated on a rock offshore in 1892 before giving his famous Chicago Parliament of World Religions speech — the Vivekananda Rock Memorial (built 1970) and the 41-metre Thiruvalluvar Statue (honouring the 1st century BCE Tamil philosopher-poet of the Tirukkural) stand side by side on two rocky islets 500 metres from the shore. The Kanyakumari Bhagavati Amman (Devi Kanya Kumari) temple — where the Goddess is worshipped as a virgin waiting to marry Shiva, her nose ring visible at sunrise reflected in the sea — is an ancient Shakti temple. The Kanyakumari sunrise and sunset (with the sun and moon simultaneously visible on equinox days from the same point) are among India's most famous natural phenomena.</p>
<p>RedHeart delivers flowers across Kanyakumari — Main Market, Cape Comorin area, Nagercoil area, Padmanabhapuram area, Colachel area, and Station Road. Our range includes roses, marigolds, jasmine, and Devi puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanyakumari, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Cape Comorin, Nagercoil, Padmanabhapuram, Colachel, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Devi puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kanyakumari Devi Amman temple puja available?", answer: "Yes, the Bhagavati Amman (Kanya Kumari Devi) temple at Cape Comorin is the heart of Kanyakumari pilgrimage. Marigold garlands and Devi puja flower sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Kanyakumari?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kanyakumari for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Kanyakumari?", answer: "Yes, same-day delivery is available across Kanyakumari for orders placed before 3 PM." }
    ]
  },

  "narmada": {
    cityName: "Narmada",
    metaTitle: "Flower Delivery in Narmada | Statue of Unity Gujarat | RedHeart",
    metaDescription: "Order flowers in Narmada (Rajpipla), Gujarat. Same-day delivery near Statue of Unity & across Narmada. From ₹399.",
    h1: "Online Flower Delivery in Narmada",
    metaKeyword: "flower delivery narmada rajpipla, online flowers narmada gujarat, florist narmada, flowers narmada statue of unity sardar patel kevadia narmada river dam tribal adivasi",
    footerContent: `
<h2>Flower Delivery in Narmada — Statue of Unity, Sardar Sarovar Dam, and Tribal Gujarat's River Valley</h2>
<p>Narmada (headquartered at Rajpipla), in the lower Narmada River valley of southern Gujarat near the Maharashtra and Madhya Pradesh borders, is the headquarters of Narmada district — a district of extraordinary recent transformation centred around the Sardar Sarovar Dam and the Statue of Unity. The Statue of Unity — completed in 2018 on Sadhu Island in the Narmada River at Kevadia (Narmada district) — is at 182 metres (597 feet) the world's tallest statue, a gigantic depiction of Sardar Vallabhbhai Patel (India's "Iron Man" who unified 562 princely states post-Independence). The Sardar Sarovar Dam (on the Narmada River at the district's edge) — India's second-largest dam by volume — provides irrigation to millions of hectares and was also the catalyst for the famous Narmada Bachao Andolan (NBA) movement led by Medha Patkar, which fought for the rights of displaced tribal communities. The district has a predominantly Adivasi (Tadvi Bhil, Vasava, Gamit) tribal population in its forested hills.</p>
<p>RedHeart delivers flowers across Narmada — Rajpipla (district HQ), Kevadia (Statue of Unity area), Dediapada area, Garudeshwar area, Nandod area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narmada (Rajpipla), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajpipla, Kevadia, Dediapada, Garudeshwar, Nandod, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers near the Statue of Unity in Narmada district?", answer: "Yes, the Statue of Unity (world's tallest statue, 182 m, dedicated to Sardar Vallabhbhai Patel) at Kevadia in Narmada district is a major tourism site. Flowers for Kevadia resort stays or patriotic tributes are available for same-day delivery from Rajpipla." },
      { question: "Can I get birthday flowers in Narmada (Rajpipla)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Narmada district for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Narmada, Gujarat?", answer: "Yes, same-day delivery is available across Narmada district (Rajpipla, Kevadia area) for orders placed before 3 PM." }
    ]
  },

  "aravalli": {
    cityName: "Aravalli",
    metaTitle: "Flower Delivery in Aravalli | Modasa Gujarat | RedHeart",
    metaDescription: "Order flowers in Aravalli (Modasa), Gujarat. Same-day delivery near Sabarmati & across Aravalli. From ₹399.",
    h1: "Online Flower Delivery in Aravalli",
    metaKeyword: "flower delivery aravalli modasa, online flowers aravalli gujarat, florist aravalli modasa, flowers aravalli modasa sabarmati river banas river shamlaji rajasthan border",
    footerContent: `
<h2>Flower Delivery in Aravalli — Shamlaji's Ancient Vishnu Temple and the Sabarmati-Banas Confluence</h2>
<p>Aravalli (headquartered at Modasa), in the northern Gujarat hills at the Rajasthan border, is the headquarters of Aravalli district — one of Gujarat's newer districts (carved from Sabarkantha in 2013), situated where the Aravalli Range meets the Gujarat plains. The Shamlaji temple (in Aravalli district, on the Meshwo River) — dedicated to Ghelo or Velo (a folk form of Vishnu/Krishna worshipped by tribal Bhil and Adivasi communities as their ancestor deity) — is one of Gujarat's most important tribal pilgrimage sites, drawing hundreds of thousands of devotees, especially from the Adivasi communities of Gujarat, Rajasthan, and Madhya Pradesh during the Kartiki Purnima fair (Dev Diwali). The Sabarmati River and Banas River both originate or flow through the Aravalli hill complex. Modasa town is a cotton and tobacco trade centre. The district has a significant tribal (Bhil, Barela) presence in its hill ranges.</p>
<p>RedHeart delivers flowers across Aravalli — Modasa (district HQ), Shamlaji area, Bayad area, Dhansura area, Malpur area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aravalli (Modasa), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Modasa, Shamlaji, Bayad, Dhansura, Malpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Shamlaji temple fair available in Aravalli?", answer: "Yes, the Shamlaji (Ghelo Vishnu/Velo) temple in Aravalli district hosts a massive tribal pilgrimage fair at Kartiki Purnima. Marigold garlands and Vishnu puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Aravalli (Modasa)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Aravalli for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Aravalli, Gujarat?", answer: "Yes, same-day delivery is available across Aravalli district (Modasa and surrounding areas) for orders placed before 3 PM." }
    ]
  },

  "nuapada": {
    cityName: "Nuapada",
    metaTitle: "Flower Delivery in Nuapada | Tribal Odisha | RedHeart",
    metaDescription: "Order flowers in Nuapada, Odisha. Same-day delivery near Komna & across Nuapada. From ₹399.",
    h1: "Online Flower Delivery in Nuapada",
    metaKeyword: "flower delivery nuapada, online flowers nuapada odisha, florist nuapada, flowers nuapada tribal adivasi chhattisgarh border mahanadi tel river drought prone western odisha",
    footerContent: `
<h2>Flower Delivery in Nuapada — Tel River Headwaters and Western Odisha's Drought-Prone Tribal Uplands</h2>
<p>Nuapada, in the western plateau of Odisha at the Chhattisgarh border, is the headquarters of Nuapada district — a district in the Kalahandi-Nuapada plateau region (historically called the KBK region — Kalahandi-Balangir-Koraput — notorious for drought, poverty, and distress migration). The Tel River (a major Mahanadi tributary) originates in the hills of Nuapada district, flowing eastward to join the Mahanadi near Sonepur. The district is heavily tribal (Gond, Bhunjia, Kondh communities) with forest and minor forest produce (tendu leaves, mahua, bamboo) forming the primary livelihood alongside rain-fed agriculture. The Nuapada area was historically part of the feudatory state of Patna under Bastar-linked rulers. Komna (in Nuapada district) has an ancient tribal deity (Samaleswar Mata) worship tradition. The district's connectivity and infrastructure have been improving via the Western Odisha highway network.</p>
<p>RedHeart delivers flowers across Nuapada — Main Market, Komna area, Khariar area, Boden area, Sinapali area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nuapada, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Komna, Khariar, Boden, Sinapali, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Nuapada?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nuapada for orders placed before 3 PM." },
      { question: "Are flowers for Durga Puja available in Nuapada?", answer: "Yes, Durga Puja is enthusiastically celebrated in Nuapada. Marigold garlands and Devi puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Nuapada?", answer: "Yes, same-day delivery is available across Nuapada for orders placed before 3 PM." }
    ]
  },

  "boudh": {
    cityName: "Boudh",
    metaTitle: "Flower Delivery in Boudh | Odisha | RedHeart",
    metaDescription: "Order flowers in Boudh, Odisha. Same-day delivery near Mahanadi & across Boudh. From ₹399.",
    h1: "Online Flower Delivery in Boudh",
    metaKeyword: "flower delivery boudh, online flowers boudh odisha, florist boudh, flowers boudh mahanadi river tribal forest baudh medieval kingdom buddhist heritage",
    footerContent: `
<h2>Flower Delivery in Boudh — Mahanadi's Ancient Buddhist Kingdom and Central Odisha's Forest Heartland</h2>
<p>Boudh, on the Mahanadi River in central Odisha, is the headquarters of Boudh district — Odisha's smallest district by area, with a history stretching back to the ancient Buddhist Kingdom of Baudha (from which the district takes its name — "Baudha/Boudh" means "Buddhist"). The ancient Baudha kingdom was one of the princely states of eastern India with Buddhist heritage in its name, though the region's population is now predominantly Hindu tribal (Kondh, Kandha). The Mahanadi River flows through the Boudh district, providing fertile alluvial land in the river valley. Boudh district's tribal communities have distinctive cultural traditions — the Kandha (Kondh) people with their fertility worship of the earth goddess (Dharni Penu) and the famous historical practice of human sacrifice (Meriah, abolished by British in the 19th century). The Phulbani area (old name for Kandhamal) is nearby. Boudh has significant forest cover with sal, teak, and bamboo.</p>
<p>RedHeart delivers flowers across Boudh — Main Market, Kantamal area, Harabhanga area, Purunakatak area, Boudh Town area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Boudh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kantamal, Harabhanga, Purunakatak, Boudh Town, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Boudh?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Boudh for orders placed before 3 PM." },
      { question: "Are flowers for Durga Puja available in Boudh?", answer: "Yes, Durga Puja is the biggest festival in Boudh. Marigold garlands and Devi puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Boudh?", answer: "Yes, same-day delivery is available across Boudh for orders placed before 3 PM." }
    ]
  },

  "chhatarpur": {
    cityName: "Chhatarpur",
    metaTitle: "Flower Delivery in Chhatarpur | Khajuraho Bundelkhand MP | RedHeart",
    metaDescription: "Order flowers in Chhatarpur, MP. Same-day delivery near Khajuraho & across Chhatarpur. From ₹399.",
    h1: "Online Flower Delivery in Chhatarpur",
    metaKeyword: "flower delivery chhatarpur, online flowers chhatarpur madhya pradesh, florist chhatarpur, flowers chhatarpur khajuraho chandela temple world heritage bundelkhand ken river",
    footerContent: `
<h2>Flower Delivery in Chhatarpur — Khajuraho's UNESCO Chandela Temple Complex and Bundelkhand's Diamond Heritage</h2>
<p>Chhatarpur, in the Bundelkhand plateau of Madhya Pradesh, is the headquarters of Chhatarpur district — most famous for housing the Khajuraho Group of Monuments, one of India's most celebrated UNESCO World Heritage Sites. The Khajuraho temples (built by the Chandela dynasty, 950–1050 CE) are a group of 85 original temples (of which 25 remain) known worldwide for their erotic and sensual sculptures — but equally remarkable for their extraordinary artistry, metaphysical symbolism (tantra and the integration of sensual and spiritual life), and sheer scale of surviving medieval Nagara architecture. The Western Group of temples (including Kandariya Mahadeva — the largest, dedicated to Shiva) is the most photographed. The Ken River (flowing through Chhatarpur) and the Panna Tiger Reserve (nearby Panna district) form an ecological corridor. Panna district borders Chhatarpur and is famous for diamond mines (the Panna diamond mines are India's only gem-diamond producing area).</p>
<p>RedHeart delivers flowers across Chhatarpur — Main Market, Khajuraho area, Nowgong area, Buxwaha area, Rajnagar area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhatarpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Khajuraho, Nowgong, Buxwaha, Rajnagar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for a Khajuraho temple visit from Chhatarpur available?", answer: "Yes, the Khajuraho UNESCO World Heritage temples (Chandela dynasty, 950–1050 CE) are in Chhatarpur district. Marigold garlands for temple puja and bouquets for Khajuraho resort stays are available for same-day delivery." },
      { question: "Can I get birthday flowers in Chhatarpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Chhatarpur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Chhatarpur?", answer: "Yes, same-day delivery is available across Chhatarpur for orders placed before 3 PM." }
    ]
  },

  "burhanpur": {
    cityName: "Burhanpur",
    metaTitle: "Flower Delivery in Burhanpur | Tapti River Mughal MP | RedHeart",
    metaDescription: "Order flowers in Burhanpur, MP. Same-day delivery near Tapti River & across Burhanpur. From ₹399.",
    h1: "Online Flower Delivery in Burhanpur",
    metaKeyword: "flower delivery burhanpur, online flowers burhanpur madhya pradesh, florist burhanpur, flowers burhanpur tapti river mughal deccan gateway mumtaz mahal shahajahan akbar",
    footerContent: `
<h2>Flower Delivery in Burhanpur — Where Mumtaz Mahal Died and the Mughal Gateway to the Deccan</h2>
<p>Burhanpur, on the Tapti River in the southwestern corner of Madhya Pradesh at the Maharashtra border, is the headquarters of Burhanpur district — one of India's most historically resonant medieval cities, and the place where Mumtaz Mahal (wife of Mughal Emperor Shah Jahan) died in 1631 during childbirth, inspiring Shah Jahan to build the Taj Mahal at Agra. Mumtaz Mahal was initially buried in Burhanpur's Ahukhana garden before her body was moved to Agra — the Ahukhana (now a garden tomb) marks this extraordinary historical connection. Burhanpur was a major Mughal fortified city — capital of the Mughal Deccan Subah (province) and the staging ground for Akbar, Jahangir, and Shah Jahan's Deccan campaigns. The Shahi Qila (Royal Fort, 16th century), the Jama Masjid (Shah Jahan's first Jama Masjid, 1588), and the stepwells (kund) are important heritage monuments. Burhanpur's famous brocade textile tradition (Kinkhab brocade — gold and silver woven silk) supplied the Mughal courts.</p>
<p>RedHeart delivers flowers across Burhanpur — Main Market, Tapti River Ghats, Nepanagar area, Khaknar area, Shahpur area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Burhanpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tapti River Ghats, Nepanagar, Khaknar, Shahpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Ahukhana (Mumtaz Mahal memorial) in Burhanpur available?", answer: "Yes, the Ahukhana garden in Burhanpur marks where Mumtaz Mahal (Shah Jahan's queen, whose death inspired the Taj Mahal) was first buried in 1631. Rose bouquets — the flowers most associated with Taj Mahal romance — are available for same-day delivery." },
      { question: "Can I get birthday flowers in Burhanpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Burhanpur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Burhanpur?", answer: "Yes, same-day delivery is available across Burhanpur for orders placed before 3 PM." }
    ]
  },

  "purba-bardhaman": {
    cityName: "Purba Bardhaman",
    metaTitle: "Flower Delivery in Purba Bardhaman | Burdwan West Bengal | RedHeart",
    metaDescription: "Order flowers in Purba Bardhaman (Burdwan), West Bengal. Same-day delivery across Burdwan. From ₹399.",
    h1: "Online Flower Delivery in Purba Bardhaman",
    metaKeyword: "flower delivery purba bardhaman burdwan, online flowers purba bardhaman west bengal, florist burdwan, flowers burdwan sitai mishti doi damodar coalfields kalna temple bardhaman raj",
    footerContent: `
<h2>Flower Delivery in Purba Bardhaman — Burdwan's Sitabhog-Mihidana and the 108 Shiva Temples of Kalna</h2>
<p>Purba Bardhaman (East Burdwan), in the central plains of West Bengal, is the headquarters of Purba Bardhaman district — one of West Bengal's richest agricultural districts (Bengal's rice bowl, producing the famous Gobindobhog rice — GI-tagged short-grain aromatic rice used for puja and Bengali sweets) and home to Burdwan town, historically the seat of the powerful Burdwan Maharaja (Bardhaman Raj). Burdwan is famous for Sitabhog and Mihidana — two Bengali sweets uniquely identified with the city (Sitabhog — a dry, rice-based sweet, and Mihidana — tiny golden fried beads of sugar and beg flour, invented for Curzon's visit in 1904) — both GI-tagged. Kalna (in Purba Bardhaman district) has the Rajbari temple complex — a remarkable 18th-century royal temple campus with the 108 Shiva Temples of Kalna (108 identical Shiva temples in a circular mandala layout, built by Bardhaman Maharaj Tej Chandra Bahadur in 1809), one of Bengal's most extraordinary architectural achievements. The Damodar River flows through the district.</p>
<p>RedHeart delivers flowers across Purba Bardhaman — Main Market, Kalna area, Katwa area, Memari area, Ausgram area, and Station Road. Our range includes roses, marigolds, seasonal Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purba Bardhaman (Burdwan), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kalna, Katwa, Memari, Ausgram, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, shiuli, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Durga Puja available in Purba Bardhaman?", answer: "Yes, Durga Puja is the grandest festival in Purba Bardhaman. Marigold garlands, shiuli (night jasmine), and Devi puja sets are available for same-day delivery throughout the district." },
      { question: "Can I get flowers for the 108 Shiva Temples of Kalna in Purba Bardhaman?", answer: "Yes, the 108 Shiva Temples complex at Kalna (built 1809 by Bardhaman Maharaja in a circular mandala layout) is one of West Bengal's most extraordinary temples. Bilva leaves and Shiva puja flowers are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Purba Bardhaman?", answer: "Yes, same-day delivery is available across Purba Bardhaman for orders placed before 3 PM." }
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
