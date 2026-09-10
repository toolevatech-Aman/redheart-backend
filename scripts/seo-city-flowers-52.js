// Batch 52 — 15 cities:
// Karnataka: Tumkur, Chitradurga, Dharwad, Udupi, Chikkamagaluru
// Odisha: Dhenkanal, Angul, Bhadrak, Balasore, Jajpur
// West Bengal: Bardhaman, Hooghly
// Rajasthan: Bundi, Jhalawar
// Assam: Silchar (Cachar)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "tumkur": {
    cityName: "Tumkur",
    metaTitle: "Flower Delivery in Tumkur | Siddaganga Karnataka | RedHeart",
    metaDescription: "Order flowers in Tumkur, Karnataka. Same-day delivery near Siddaganga Math & across Tumkur. From ₹399.",
    h1: "Online Flower Delivery in Tumkur",
    metaKeyword: "flower delivery tumkur, online flowers tumkur karnataka, florist tumkur, flowers tumkur siddaganga math devarayanadurga coconut silk agriculture",
    footerContent: `
<h2>Flower Delivery in Tumkur — Siddaganga Math's Thousand-Bed and Devarayanadurga's Rocky Summit</h2>
<p>Tumkur (Tumakuru), about 70 km northwest of Bengaluru in Karnataka's Old Mysore region, is the headquarters of Tumkur district — one of Karnataka's most prominent educational, agricultural, and industrial districts. The Siddaganga Math (on the Tumkur-Bengaluru highway), home to the legendary saint Shivakumara Swamiji who ran a 1,000-bed annadana (free meals) programme for students for over 70 years, is one of Karnataka's most visited spiritual institutions. Devarayanadurga (a rocky hill fortress with ancient Bhoga Narasimha and Yoga Narasimha temples) is Tumkur's signature heritage hill. The district is the centre of Karnataka's coconut cultivation — one of India's largest coconut-growing regions — and has a significant sericulture (silk) belt near Koratagere and Pavagada. Tumkur is a fast-industrialising satellite city of Bengaluru with an Aerospace and Defence corridor and multiple IT SEZs.</p>
<p>RedHeart delivers flowers across Tumkur — B.H. Road, Kuvempu Nagara, Vidyanagara, Devarayanadurga area, Tiptur area, and Kunigal area. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tumkur, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">B.H. Road, Kuvempu Nagara, Vidyanagara, Tiptur, Kunigal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Siddaganga Math puja available in Tumkur?", answer: "Yes, the Siddaganga Math is Tumkur's most revered institution. Marigold garlands and Shiva puja sets for the Math's rituals are available for same-day delivery." },
      { question: "Can I get birthday flowers in Tumkur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Tumkur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Tumkur?", answer: "Yes, same-day delivery is available across Tumkur for orders placed before 3 PM." }
    ]
  },

  "chitradurga": {
    cityName: "Chitradurga",
    metaTitle: "Flower Delivery in Chitradurga | Rock Fort Karnataka | RedHeart",
    metaDescription: "Order flowers in Chitradurga, Karnataka. Same-day delivery near Rock Fort & across Chitradurga. From ₹399.",
    h1: "Online Flower Delivery in Chitradurga",
    metaKeyword: "flower delivery chitradurga, online flowers chitradurga karnataka, florist chitradurga, flowers chitradurga rock fort nayakas tungabhadra windmill energy",
    footerContent: `
<h2>Flower Delivery in Chitradurga — Seven-Walled Rock Fort and the Wind Energy Capital of Karnataka</h2>
<p>Chitradurga, in the semi-arid Deccan Plateau belt of Karnataka, is the headquarters of Chitradurga district — a district of dramatic granite landscapes, ancient military architecture, and Karnataka's most important wind and solar energy installations. The Chitradurga Fort (or Kallina Kote — "Stone Fort") — a spectacular seven-concentric-walled fortress built on 18 irregular rocky hills, with 18 gates, multiple temples, a mosque, and cisterns — was the capital of the Nayakas of Chitradurga (the Poligars, who successfully resisted Hyder Ali and Tipu Sultan until 1779). The Obavva's Kindi story (Obavva, a woman who single-handedly fought off Hyder Ali's soldiers through a hole in the fort wall using a pestle) is one of Karnataka's most celebrated folk heroines. Chitradurga has the largest wind energy park in Karnataka (Chikkajajur area). The Vani Vilasa Sagara reservoir and the Vedavathi River are important water sources.</p>
<p>RedHeart delivers flowers across Chitradurga — Fort Road, Gandhi Nagar, B.D. Road, Holalkere area, Hosadurga area, and Challakere area. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitradurga, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fort Road, Gandhi Nagar, B.D. Road, Holalkere, Hosadurga</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Chitradurga Fort heritage visit?", answer: "Yes, the Chitradurga Rock Fort (Kallina Kote) is one of Karnataka's most dramatic historical sites. Seasonal bouquets for fort heritage visits and cultural events are available." },
      { question: "Can I get anniversary flowers in Chitradurga?", answer: "Yes, anniversary rose bouquets and romantic arrangements are available for same-day delivery in Chitradurga for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Chitradurga?", answer: "Yes, same-day delivery is available across Chitradurga for orders placed before 3 PM." }
    ]
  },

  "dharwad": {
    cityName: "Dharwad",
    metaTitle: "Flower Delivery in Dharwad | Hubli-Dharwad Karnataka | RedHeart",
    metaDescription: "Order flowers in Dharwad, Karnataka. Same-day delivery near Karnataka University & across Dharwad. From ₹399.",
    h1: "Online Flower Delivery in Dharwad",
    metaKeyword: "flower delivery dharwad, online flowers dharwad karnataka, florist dharwad, flowers dharwad hubli karnataka university belagavi north karnataka pedha cuisine",
    footerContent: `
<h2>Flower Delivery in Dharwad — Karnataka University's Cultural Hub and the Home of Dharwad Pedha</h2>
<p>Dharwad, the twin city of Hubli in North Karnataka, is the headquarters of Dharwad district — one of Karnataka's most prestigious educational, cultural, and literary districts. Karnataka University (established 1949) — the oldest university of the Lingayat community's North Karnataka heartland — has produced some of Karnataka's most significant scholars, writers, and scientists. Dharwad is the birthplace of the Dharwad Pedha (the soft, milky milk-solid sweet that is Dharwad's most famous culinary export and a GI-tagged product). The city is a major centre of Kannada literature and music — the Dharwad Sangeet (North Karnataka's classical music tradition, influenced by Hindustani music and Veerashaiva poetry) has produced composers like Gangubai Hangal and Basavaraj Rajguru. The Murugha Math (a major Lingayat spiritual institution) and the old temple architecture of the pre-colonial town centre are important landmarks.</p>
<p>RedHeart delivers flowers across Dharwad — P.B. Road, Karnataka University area, Station Road, Hubli Road, Navalur area, and Kundagol area. Our range includes roses, marigolds, jasmine, and seasonal Karnataka bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharwad, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">P.B. Road, Karnataka University area, Station Road, Hubli Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal North Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for a Karnataka University convocation available in Dharwad?", answer: "Yes, Karnataka University convocations and academic ceremonies in Dharwad are well catered to. Rose bouquets and congratulation arrangements are available for same-day delivery." },
      { question: "Are jasmine gajras available in Dharwad?", answer: "Yes, jasmine gajras are popular in Dharwad for daily wear and festivals. Fresh jasmine is available for same-day delivery." },
      { question: "Do you deliver flowers same day in Dharwad?", answer: "Yes, same-day delivery is available across Dharwad for orders placed before 3 PM." }
    ]
  },

  "udupi": {
    cityName: "Udupi",
    metaTitle: "Flower Delivery in Udupi | Krishna Temple Coastal Karnataka | RedHeart",
    metaDescription: "Order flowers in Udupi, Karnataka. Same-day delivery near Krishna Math & across Udupi. From ₹399.",
    h1: "Online Flower Delivery in Udupi",
    metaKeyword: "flower delivery udupi, online flowers udupi karnataka, florist udupi, flowers udupi krishna math madhvacharya malpe beach cuisine coconut coastal",
    footerContent: `
<h2>Flower Delivery in Udupi — Krishna Math's Divine Cuisine and Malpe Beach's Arabian Sea Coastline</h2>
<p>Udupi, on the Karnataka coast (Tulu Nadu) between Mangaluru and Goa, is the headquarters of Udupi district — one of India's most globally recognised small cities, famous for the Udupi cuisine (the vegetarian Brahmin saatvik food of the Madhva Brahmin community — idli, dosa, sambar, coconut chutney — that spawned thousands of "Udupi restaurants" across India) and as the birthplace of Sri Madhvacharya (founder of the Dvaita Vedanta philosophy). The Sri Krishna Math at Udupi (established by Madhvacharya in the 13th century, housing the Krishna idol he carved himself, and said to be worshipped through a "Kanakana Kindi" window in reverence to saint Kanakadasa) is one of South India's most important Vaishnava institutions and draws pilgrims year-round. Malpe Beach (with its offshore St. Mary's Island — basalt columnar rock formations) is a unique natural heritage site. Udupi is also famous for its distinctive Tulu language and culture.</p>
<p>RedHeart delivers flowers across Udupi — Krishna Math area, Car Street, Manipal area, Malpe Beach Road, Karkala area, and Kundapura area. Our range includes roses, marigolds, lotus, jasmine, and seasonal Karnataka coastal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udupi, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishna Math area, Car Street, Manipal, Malpe, Karkala, Kundapura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, jasmine, Vishnu puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are lotus and puja flowers for the Udupi Krishna Math available?", answer: "Yes, the Udupi Sri Krishna Math is one of South India's most sacred Vaishnava temples. Lotus, marigold garlands, and Vishnu puja sets for the Krishna Math are available for same-day delivery." },
      { question: "Can I get flowers for a Manipal (Udupi) hospital gifting?", answer: "Yes, Manipal (in Udupi district) is a major hospital-university town. Cheerful bouquets and get-well-soon arrangements for Manipal Academy of Higher Education and Kasturba Medical College are available." },
      { question: "Do you deliver flowers same day in Udupi?", answer: "Yes, same-day delivery is available across Udupi for orders placed before 3 PM." }
    ]
  },

  "chikkamagaluru": {
    cityName: "Chikkamagaluru",
    metaTitle: "Flower Delivery in Chikkamagaluru | Coffee Hills Karnataka | RedHeart",
    metaDescription: "Order flowers in Chikkamagaluru, Karnataka. Same-day delivery near Mullayanagiri & across Chikkamagaluru. From ₹399.",
    h1: "Online Flower Delivery in Chikkamagaluru",
    metaKeyword: "flower delivery chikkamagaluru, online flowers chikkamagaluru karnataka, florist chikkamagaluru, flowers chikkamagaluru coffee hills mullayanagiri baba budangiri dattatreya",
    footerContent: `
<h2>Flower Delivery in Chikkamagaluru — India's Coffee Cradle and the Sacred Heights of Mullayanagiri</h2>
<p>Chikkamagaluru (or Chikmagalur, meaning "the younger daughter's town"), in the Western Ghats of Karnataka, is the headquarters of Chikkamagaluru district — India's most celebrated coffee-growing region and a destination of extraordinary natural beauty. Coffee was introduced to India in the 17th century by Baba Budan (a Muslim saint) at Baba Budangiri hills (now in Chikkamagaluru) — he brought seven coffee seeds from Yemen, which gave rise to India's entire coffee cultivation. Mullayanagiri (1,930 m) — Karnataka's highest peak — is in the Chikkamagaluru hills. The Baba Budan Dargah (Dattatreya Peetha) at Dattapeeta is a unique Hindu-Muslim shared pilgrimage site. The Western Ghats forests of Chikkamagaluru (Bhadra Tiger Reserve, Kudremukh National Park) are UNESCO World Heritage area and support exceptional biodiversity.</p>
<p>RedHeart delivers flowers across Chikkamagaluru — Coffee Board area, Birur Road, Kadur area, Tarikere area, Mudigere area, and Koppa area. Our range includes roses, marigolds, seasonal exotic flowers, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chikkamagaluru, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coffee Board area, Birur Road, Kadur, Tarikere, Mudigere</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, exotic hill flowers, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Chikkamagaluru coffee estate resort stay?", answer: "Yes, the Chikkamagaluru coffee hills have many boutique estate resorts. Romantic rose bouquets and anniversary arrangements for coffee estate stays can be delivered to Chikkamagaluru." },
      { question: "Are exotic hill flowers available in Chikkamagaluru?", answer: "Yes, the Western Ghats microclimate supports varieties of exotic flowers. Seasonal exotic bouquets and aromatic flowers from the hills are available in Chikkamagaluru." },
      { question: "Do you deliver flowers same day in Chikkamagaluru?", answer: "Yes, same-day delivery is available across Chikkamagaluru for orders placed before 3 PM." }
    ]
  },

  "dhenkanal": {
    cityName: "Dhenkanal",
    metaTitle: "Flower Delivery in Dhenkanal | Kapilash Temple Odisha | RedHeart",
    metaDescription: "Order flowers in Dhenkanal, Odisha. Same-day delivery near Kapilash temple & across Dhenkanal. From ₹399.",
    h1: "Online Flower Delivery in Dhenkanal",
    metaKeyword: "flower delivery dhenkanal, online flowers dhenkanal odisha, florist dhenkanal, flowers dhenkanal kapilash temple shiva mahanadi brahmani river ferroalloy tiger",
    footerContent: `
<h2>Flower Delivery in Dhenkanal — Kapilash's Sacred Shiva Summit and the Brahmani River's Industrial Heartland</h2>
<p>Dhenkanal, in central Odisha on the Brahmani River, is the headquarters of Dhenkanal district — a district of sacred hills, industrial enterprise, and traditional Odisha culture. The Kapilash temple (on Kapilash hill, 900 m above Dhenkanal town) — dedicated to Lord Chandrasekhar (Shiva) and housing a lingam said to be self-manifested (swayambhu) — is one of Odisha's most important Shiva pilgrimage sites, with a famous Shivratri fair drawing lakhs of pilgrims. The hill also has the Goddess Chandrasekhar temple in a cave (the Gudha Chandrasekhar). The Dhenkanal district is also home to Ferro-Alloy Corporation Limited (FACOR) at Therubali — one of India's oldest ferroalloy plants. The Brahmani River (which joins the Mahanadi to form the Mahanadi-Brahmani delta) flows through the district.</p>
<p>RedHeart delivers flowers across Dhenkanal — Main Market, Kapilash area, Kankadahad area, Kamakhyanagar area, Parjang area, and Station Road. Our range includes roses, marigolds, Shiva puja flowers, and seasonal Odisha bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhenkanal, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kapilash area, Kankadahad, Kamakhyanagar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, bilva, roses, Shiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kapilash Shiva temple Mahashivratri available?", answer: "Yes, the Kapilash temple Mahashivratri (one of Odisha's biggest Shiva fairs) draws lakhs of pilgrims to Dhenkanal. Bilva, marigold garlands, and Shiva puja sets for Kapilash are available." },
      { question: "Can I get birthday flowers in Dhenkanal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Dhenkanal for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Dhenkanal?", answer: "Yes, same-day delivery is available across Dhenkanal for orders placed before 3 PM." }
    ]
  },

  "angul": {
    cityName: "Angul",
    metaTitle: "Flower Delivery in Angul | NALCO Coal Odisha | RedHeart",
    metaDescription: "Order flowers in Angul, Odisha. Same-day delivery near Nalco/Ib Thermal Power & across Angul. From ₹399.",
    h1: "Online Flower Delivery in Angul",
    metaKeyword: "flower delivery angul, online flowers angul odisha, florist angul, flowers angul nalco aluminium ib coal brahmani river saptasajya wildlife shire",
    footerContent: `
<h2>Flower Delivery in Angul — NALCO's Aluminium Empire and the Brahmani River's Industrial Corridor</h2>
<p>Angul, in central Odisha on the Brahmani River, is the headquarters of Angul district — one of India's most industrialised districts and the powerhouse of Odisha's energy and metals economy. Angul hosts NALCO (National Aluminium Company Limited) — one of India's largest aluminium producers — as well as multiple thermal power plants (MCL's Ib Valley coalfield and IB Thermal Power Station), the Talcher coalfields (India's largest coal reserves, operated by MCL), and major ferroalloy and steel facilities. Despite its industrial character, Angul district has the Satkosia Gorge Wildlife Sanctuary — a spectacular gorge on the Mahanadi (the narrowest section of the Mahanadi) — a Ramsar Wetland famous for its mugger and gharial crocodile population. The Pradhanpat waterfall and the Belgaon reservoir are additional natural attractions.</p>
<p>RedHeart delivers flowers across Angul — Main Market, NALCO Township, Talcher area, Athamallik area, Chhendipada area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Angul, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, NALCO Township, Talcher, Athamallik, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers delivered to a NALCO township in Angul?", answer: "Yes, birthday roses and celebration bouquets can be delivered to NALCO Township and all residential areas in Angul for same-day delivery." },
      { question: "Are flowers for Durga Puja available in Angul?", answer: "Yes, Durga Puja is widely celebrated in Angul. Marigold garlands, hibiscus, and Durga puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Angul?", answer: "Yes, same-day delivery is available across Angul for orders placed before 3 PM." }
    ]
  },

  "bhadrak": {
    cityName: "Bhadrak",
    metaTitle: "Flower Delivery in Bhadrak | Akhandalamani Temple Odisha | RedHeart",
    metaDescription: "Order flowers in Bhadrak, Odisha. Same-day delivery near Akhandalamani temple & across Bhadrak. From ₹399.",
    h1: "Online Flower Delivery in Bhadrak",
    metaKeyword: "flower delivery bhadrak, online flowers bhadrak odisha, florist bhadrak, flowers bhadrak akhandalamani shiva baitarani river baladev jajpur coastal odisha",
    footerContent: `
<h2>Flower Delivery in Bhadrak — Akhandalamani's Sacred Shiva and the Baitarani's Holy Coastal Zone</h2>
<p>Bhadrak, in coastal northern Odisha on the Baitarani River, is the headquarters of Bhadrak district — a district of ancient temple heritage, rice cultivation, and coastal commerce on the Bengal-Odisha axis. The Akhandalamani temple at Aradi (near Bhadrak) — housing a self-manifested (swayambhu) Shiva lingam said to be so ancient that its age cannot be determined — is one of Odisha's most revered Shiva pilgrimage sites (the name "Akhandalamani" means "the ever-radiant jewel"). The Baitarani River (considered a sacred river for ancestral rites — shraddha — with the Baitarini Ghat at Jajpur being especially holy) flows through the district. Bhadrak has a significant Muslim weaving community that produces silk and cotton textiles. The Panchalingeswar temple at Nilgiri hill is another important Shiva pilgrimage nearby.</p>
<p>RedHeart delivers flowers across Bhadrak — Main Market, Aradi area, Chandbali area, Basudevpur area, Nilgiri area, and Station Road. Our range includes roses, marigolds, Shiva puja flowers, and seasonal Odisha bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhadrak, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Aradi, Chandbali, Basudevpur, Nilgiri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, bilva, roses, Shiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Akhandalamani Shiva temple available in Bhadrak?", answer: "Yes, the Akhandalamani temple (one of Odisha's most revered swayambhu Shiva shrines) is near Bhadrak. Bilva, marigold garlands, and Shiva puja sets for the temple are available for same-day delivery." },
      { question: "Can I get birthday flowers in Bhadrak?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Bhadrak for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Bhadrak?", answer: "Yes, same-day delivery is available across Bhadrak for orders placed before 3 PM." }
    ]
  },

  "balasore": {
    cityName: "Balasore",
    metaTitle: "Flower Delivery in Balasore | ISRO Chandipur Odisha | RedHeart",
    metaDescription: "Order flowers in Balasore, Odisha. Same-day delivery near Chandipur missile test range & across Balasore. From ₹399.",
    h1: "Online Flower Delivery in Balasore",
    metaKeyword: "flower delivery balasore, online flowers balasore odisha, florist balasore, flowers balasore chandipur isro missile test ballistic panchalingeswar fakir mohan senapati",
    footerContent: `
<h2>Flower Delivery in Balasore — DRDO's Missile Test Coast and Fakir Mohan Senapati's Literary Homeland</h2>
<p>Balasore (Baleshwar), on the Bay of Bengal coast of northern Odisha near West Bengal, is the headquarters of Balasore district — a district of national strategic importance, remarkable literary heritage, and an ancient maritime tradition. The Chandipur Integrated Test Range (ITR) on the Balasore coast — India's premier ballistic missile testing facility operated by DRDO — has been the launch site for Agni, Prithvi, BrahMos, and other critical strategic missiles. Balasore is the birthplace of Fakir Mohan Senapati (1843-1918) — Odisha's greatest prose writer, called the "father of modern Odia literature," whose novel "Chha Mana Atha Guntha" (Six Acres and a Third, about landlord oppression) is one of Indian literature's landmark social realist works. The Panchalingeswar temple (on a hill in the Nilgiri area with five naturally formed Shiva lingams in a stream) is Balasore's most important pilgrimage site.</p>
<p>RedHeart delivers flowers across Balasore — Main Market, Chandipur area, Station Road, Nilgiri area, Jaleswar area, and Soro area. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balasore, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Chandipur area, Station Road, Nilgiri, Jaleswar, Soro</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Panchalingeswar Shiva temple available from Balasore?", answer: "Yes, the Panchalingeswar temple (with five naturally formed lingams in a hillstream near Nilgiri) is Balasore district's most sacred site. Bilva and Shiva puja sets for the temple are available." },
      { question: "Are flowers for Durga Puja available in Balasore?", answer: "Yes, Durga Puja is widely celebrated in Balasore. Marigold garlands and Durga puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Balasore?", answer: "Yes, same-day delivery is available across Balasore for orders placed before 3 PM." }
    ]
  },

  "jajpur": {
    cityName: "Jajpur",
    metaTitle: "Flower Delivery in Jajpur | Biraja Shakti Peetha Odisha | RedHeart",
    metaDescription: "Order flowers in Jajpur, Odisha. Same-day delivery near Biraja temple & across Jajpur. From ₹399.",
    h1: "Online Flower Delivery in Jajpur",
    metaKeyword: "flower delivery jajpur, online flowers jajpur odisha, florist jajpur, flowers jajpur biraja shakti peetha baitarani vyasanagar stainless steel chrome ore",
    footerContent: `
<h2>Flower Delivery in Jajpur — Biraja Shakti Peetha and the Baitarani's Sacred Shraddha Banks</h2>
<p>Jajpur, on the Baitarani River in coastal Odisha, is the headquarters of Jajpur district — one of Odisha's most sacred and historically rich districts. The Biraja temple at Jajpur (at the Baitarani-Vamsadhara confluence) is one of the 51 Shakti Peethas in Hindu tradition — where the navel of Goddess Sati is said to have fallen — and is one of Odisha's most important pilgrimage sites. The Baitarani River Ghat at Jajpur is one of the holiest sites for Hindu ancestral rites (shraddha) — tradition holds that a dip in the Baitarani at Jajpur frees one's ancestors from suffering in the afterlife. Jajpur is also Odisha's stainless steel district — the Kalinganagar Industrial Complex (near Duburi, Jajpur) is one of India's largest steel and metallurgy hubs (TATA Steel, NINL). The Vyasanagar industrial area and the ancient Ratnagiri Buddhist monuments are also in the district.</p>
<p>RedHeart delivers flowers across Jajpur — Main Market, Biraja area, Baitarani Ghat, Kalinganagar area, Vyasanagar area, and Station Road. Our range includes roses, marigolds, Devi puja flowers, and seasonal Odisha bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jajpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Biraja area, Baitarani Ghat, Kalinganagar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigolds, roses, Devi puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Biraja Shakti Peetha Navratri available in Jajpur?", answer: "Yes, the Biraja temple (one of the 51 Shakti Peethas) holds major Navratri celebrations. Red hibiscus, marigold garlands, and Devi puja sets for Biraja are available for same-day delivery." },
      { question: "Are shraddha flowers for the Baitarani Ghat available in Jajpur?", answer: "Yes, the Baitarani Ghat at Jajpur is one of Odisha's holiest shraddha (ancestral rites) sites. White flowers and ancestral puja arrangements for the Ghat are available." },
      { question: "Do you deliver flowers same day in Jajpur?", answer: "Yes, same-day delivery is available across Jajpur for orders placed before 3 PM." }
    ]
  },

  "bardhaman": {
    cityName: "Bardhaman",
    metaTitle: "Flower Delivery in Bardhaman | Curzon Gate West Bengal | RedHeart",
    metaDescription: "Order flowers in Bardhaman, West Bengal. Same-day delivery near Curzon Gate & across Bardhaman. From ₹399.",
    h1: "Online Flower Delivery in Bardhaman",
    metaKeyword: "flower delivery bardhaman, online flowers bardhaman west bengal, florist bardhaman, flowers bardhaman curzon gate burdwan maharaja sitabhog mihidana sites coal damodar",
    footerContent: `
<h2>Flower Delivery in Bardhaman — Curzon Gate's Royalty and the Sitabhog-Mihidana Sweet City</h2>
<p>Bardhaman (Burdwan), in the Gangetic plain of West Bengal, is the headquarters of Paschim (West) Bardhaman district — one of Bengal's most historically important and densely populated districts. The Curzon Gate (Golap Bagh Gate) — built in 1904 by the Maharaja of Burdwan to welcome Lord Curzon — is Bardhaman's most iconic landmark and a symbol of the opulent Burdwan Raj (one of Bengal's wealthiest zamindari estates, which built the Krishnasayar lake and extensive public works). Bardhaman is famous for the Sitabhog and Mihidana sweets — two GI-tagged milk-based sweets of Burdwan with a history going back to the zamindari era. The Damodar River and the Durgapur industrial belt (steel plants, chemicals, and Durgapur Barrage) form the district's western boundary.</p>
<p>RedHeart delivers flowers across Bardhaman — Curzon Gate area, Golap Bagh, G.T. Road, Durgapur area, Asansol area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bardhaman, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Curzon Gate, Golap Bagh, G.T. Road, Durgapur area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Durga Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Durga Puja available in Bardhaman?", answer: "Yes, Durga Puja is the biggest festival in Bardhaman. Marigold garlands, hibiscus, and elaborate Durga puja flower sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Bardhaman?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Bardhaman for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Bardhaman?", answer: "Yes, same-day delivery is available across Bardhaman for orders placed before 3 PM." }
    ]
  },

  "hooghly": {
    cityName: "Hooghly",
    metaTitle: "Flower Delivery in Hooghly | Chinsurah Bandel West Bengal | RedHeart",
    metaDescription: "Order flowers in Hooghly (Chinsurah), West Bengal. Same-day delivery near Bandel Church & across Hooghly. From ₹399.",
    h1: "Online Flower Delivery in Hooghly",
    metaKeyword: "flower delivery hooghly, online flowers chinsurah bandel west bengal, florist hooghly, flowers hooghly bandel church chinsurah dutch portuguese imambara serampore",
    footerContent: `
<h2>Flower Delivery in Hooghly — Portuguese Bandel, Dutch Chinsurah, and Bengal's Colonial Riverside Heritage</h2>
<p>Hooghly (headquartered at Chinsurah), along the Hooghly River upstream from Kolkata in West Bengal, is the headquarters of Hooghly district — one of Bengal's most historically layered districts and a corridor of extraordinary colonial and Mughal heritage along the river. The district has the Bandel Church (Basilica of the Holy Rosary, built 1599 by the Portuguese — one of India's oldest Roman Catholic churches), the Dutch Cemetery and administrative buildings at Chinsurah, the Danish and British presence at Serampore (Srirampur, where the Baptist missionary William Carey translated the Bible into Bengali), and the Hooghly Imambara (a grand Shia Muslim imambara built by Haji Muhammad Mohsin in the 18th century). Tarakeswar (Hooghly district) — with the Tarakeswar Shiva temple — is one of Bengal's most important Shiva pilgrimage sites, drawing millions on Shivaratri.</p>
<p>RedHeart delivers flowers across Hooghly — Chinsurah Main Market, Bandel area, Serampore area, Chandannagore area, Tarakeswar area, and Arambag area. Our range includes roses, marigolds, bilva, and seasonal West Bengal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hooghly (Chinsurah), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chinsurah, Bandel, Serampore, Chandannagore, Tarakeswar, Arambag</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, bilva, marigolds, Durga Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Tarakeswar Shiva Shivaratri available in Hooghly?", answer: "Yes, Tarakeswar (in Hooghly district) is one of Bengal's most important Shiva pilgrimage sites. Bilva, marigold garlands, and Shiva puja sets for Tarakeswar Shivaratri are available." },
      { question: "Are Christmas flowers for the Bandel Church available from Hooghly?", answer: "Yes, the Bandel Church (Basilica of the Holy Rosary, one of India's oldest churches) is in Hooghly district. Christmas roses, white lilies, and festive arrangements for Bandel Church are available." },
      { question: "Do you deliver flowers same day in Hooghly?", answer: "Yes, same-day delivery is available across Hooghly for orders placed before 3 PM." }
    ]
  },

  "bundi": {
    cityName: "Bundi",
    metaTitle: "Flower Delivery in Bundi | Step Wells Rajasthan | RedHeart",
    metaDescription: "Order flowers in Bundi, Rajasthan. Same-day delivery near Taragarh Fort & across Bundi. From ₹399.",
    h1: "Online Flower Delivery in Bundi",
    metaKeyword: "flower delivery bundi, online flowers bundi rajasthan, florist bundi, flowers bundi taragarh fort stepwells baolis rudyard kipling hadoti painting miniature",
    footerContent: `
<h2>Flower Delivery in Bundi — Kipling's Stepwells, Miniature Paintings, and the Hadoti Kingdom</h2>
<p>Bundi, in the Hadoti region of Rajasthan at the edge of the Vindhya range, is the headquarters of Bundi district — one of Rajasthan's most romantically preserved heritage towns and the inspiration for Rudyard Kipling's writing. The Taragarh Fort (1354 CE), the Garh Palace (with the "Chitrashala" — one of India's finest collections of Rajput miniature paintings, depicting the life of Krishna, court scenes, and hunting with exquisite detail and natural pigments), and Bundi's extraordinary stepwells (baolis) — particularly the Raniji ki Baori (Queen's Stepwell, 1699 CE, with its intricate carvings) — form an incomparable heritage landscape. Rudyard Kipling wrote admiringly of Bundi's architecture in "Letters of Marque." The Nawal Sagar Lake (in the centre of the town) reflects the palace and fort in its surface, creating one of Rajasthan's most photographed vistas.</p>
<p>RedHeart delivers flowers across Bundi — Main Market, Nainwa Road, Kota Road, Nawal Sagar area, Indergarh area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bundi, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Nainwa Road, Kota Road, Nawal Sagar area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Bundi heritage haveli stay?", answer: "Yes, Bundi has exquisite heritage havelis and guesthouses. Romantic rose bouquets and curated floral arrangements for Bundi heritage stays can be delivered same day." },
      { question: "Are flowers for Teej festival available in Bundi?", answer: "Yes, Teej (the women's monsoon festival) is celebrated beautifully in Bundi. Marigold garlands and seasonal Teej puja flowers are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Bundi?", answer: "Yes, same-day delivery is available across Bundi for orders placed before 3 PM." }
    ]
  },

  "jhalawar": {
    cityName: "Jhalawar",
    metaTitle: "Flower Delivery in Jhalawar | Chandrabhaga Rajasthan | RedHeart",
    metaDescription: "Order flowers in Jhalawar, Rajasthan. Same-day delivery near Chandrabhaga fair & across Jhalawar. From ₹399.",
    h1: "Online Flower Delivery in Jhalawar",
    metaKeyword: "flower delivery jhalawar, online flowers jhalawar rajasthan, florist jhalawar, flowers jhalawar chandrabhaga mela jhalarapatan sun temple hadoti kota",
    footerContent: `
<h2>Flower Delivery in Jhalawar — Jhalarapatan's Sun Temple and the Chandrabhaga's Cattle Fair</h2>
<p>Jhalawar, in the Hadoti region of southeastern Rajasthan near Madhya Pradesh, is the headquarters of Jhalawar district — a district of ancient temples, tribal art, and the historic Jhala Rajput princedom. Jhalawar's twin town Jhalarapatan ("City of Temple Bells") has the Shantinath Jain temple (11th century) and the Chandrabagha (Sun Temple) — a spectacular 10th century Gurjara-Pratihara Sun temple with extremely well-preserved Surya and Shakti sculptures (considered one of the finest examples of post-Gupta temple architecture in Rajasthan). The Chandrabhaga river (a tributary of the Chambal) hosts the Chandrabhaga Cattle Fair — one of Rajasthan's largest livestock fairs (also a cultural mela with Kalbeliya dances and Rajasthani folk music). Jhalawar is notable for its opium cultivation history under British colonial administration.</p>
<p>RedHeart delivers flowers across Jhalawar — Main Market, Jhalarapatan area, Kota Road, Gangdhar area, Dag area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhalawar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jhalarapatan area, Kota Road, Gangdhar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for the Chandrabhaga Mela in Jhalawar?", answer: "Yes, the Chandrabhaga Mela (Jhalawar's famous cattle and cultural fair) is a major annual event. Marigold garlands and festival flowers for the mela season are available for same-day delivery." },
      { question: "Can I get flowers for a Jhalawar heritage event?", answer: "Yes, Jhalawar's palaces and the Jhalarapatan Sun Temple are heritage attractions. Seasonal bouquets and event floral arrangements are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Jhalawar?", answer: "Yes, same-day delivery is available across Jhalawar for orders placed before 3 PM." }
    ]
  },

  "silchar": {
    cityName: "Silchar",
    metaTitle: "Flower Delivery in Silchar | Barak Valley Assam | RedHeart",
    metaDescription: "Order flowers in Silchar, Assam. Same-day delivery near Khaspur Fort & across Silchar. From ₹399.",
    h1: "Online Flower Delivery in Silchar",
    metaKeyword: "flower delivery silchar, online flowers silchar assam, florist silchar, flowers silchar barak valley cachar bengali language movement manipur mizoram tripura hub",
    footerContent: `
<h2>Flower Delivery in Silchar — Barak Valley's Bengali Heart and the Language Martyrs' Sacred Memory</h2>
<p>Silchar, on the Barak River in the Barak Valley of southern Assam, is the headquarters of Cachar district — the commercial and cultural capital of the Bengali-speaking Barak Valley and one of the most important cities of northeastern India. Silchar is the gateway to Manipur, Mizoram, and Tripura. The city is revered in the Bengali consciousness for the Barak Valley Language Movement of 1961 — when 11 people were martyred on 19 May 1961 at Silchar Railway Station while agitating for official recognition of Bengali language in Assam alongside Assamese (the date is commemorated as "Bhasha Shahid Diwas" in Barak Valley). The ancient Khaspur Fort (capital of the Cachar Kingdom, destroyed by Burmese invasion in 1821) and the Maniharan Tunnel (a medieval palace complex) are key historical sites. Silchar is also known for the distinctive "Sylheti" Bengali dialect.</p>
<p>RedHeart delivers flowers across Silchar — Main Market, Rangirkhari area, Meherpur area, Sonai area, Link Road, and Station Road. Our range includes roses, marigolds, seasonal Assam bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Silchar, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Rangirkhari, Meherpur, Sonai, Link Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Durga Puja flowers, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Durga Puja available in Silchar?", answer: "Yes, Durga Puja is the most important festival in Silchar (Barak Valley's Bengali community). Marigold garlands, hibiscus, and elaborate Durga puja flower sets are available for same-day delivery." },
      { question: "Are flowers for the Barak Valley Bhasha Shahid Diwas (Language Martyrs Day, May 19) available in Silchar?", answer: "Yes, Bhasha Shahid Diwas (commemorating the 1961 Barak Valley Language Movement martyrs) is a major civic occasion. Commemorative white flower arrangements for the tribute are available." },
      { question: "Do you deliver flowers same day in Silchar?", answer: "Yes, same-day delivery is available across Silchar for orders placed before 3 PM." }
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
