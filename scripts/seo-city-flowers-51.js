// Batch 51 — 15 cities:
// Odisha: Mayurbhanj, Keonjhar, Bargarh, Kalahandi, Rayagada
// West Bengal: South Dinajpur, Cooch Behar, Jalpaiguri
// AP: Prakasam (Ongole), Nellore
// Northeast: Churachandpur (Manipur), Mokokchung (Nagaland), Lunglei (Mizoram)
// Maharashtra: Hingoli, Osmanabad (Dharashiv)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "mayurbhanj": {
    cityName: "Mayurbhanj",
    metaTitle: "Flower Delivery in Mayurbhanj | Simlipal Odisha | RedHeart",
    metaDescription: "Order flowers in Mayurbhanj (Baripada), Odisha. Same-day delivery near Simlipal Tiger Reserve & across Mayurbhanj. From ₹399.",
    h1: "Online Flower Delivery in Mayurbhanj",
    metaKeyword: "flower delivery mayurbhanj, online flowers baripada odisha, florist mayurbhanj baripada, flowers mayurbhanj simlipal tiger reserve ho tribal santhali",
    footerContent: `
<h2>Flower Delivery in Mayurbhanj — Simlipal's Royal Tiger Forest and the Ho Tribal Heartland</h2>
<p>Mayurbhanj, in northern Odisha at the West Bengal-Jharkhand border, is the headquarters of Mayurbhanj district — Odisha's largest district by area and one of India's most forested and tribal districts. The Simlipal Tiger Reserve (part of the Mayurbhanj Elephant Reserve) — a UNESCO Biosphere Reserve and one of India's 50 tiger reserves — is a vast sal forest in the Eastern Ghats foothills with resident tigers, leopards, elephants, gharials, and the only wild melanistic (black) tigers known to exist in India (the Simlipal black tigers have unusual stripe-fusing due to a genetic mutation). Mayurbhanj was a major Princely State — the Bhanja dynasty of Baripada (the district headquarters) ruled for centuries, and the maharajas built palaces and roads. The Ho tribe (the Kolhans, an ancient Austro-Asiatic community) are the dominant tribal group here alongside Santhals.</p>
<p>RedHeart delivers flowers across Mayurbhanj — Baripada Main Market, Simlipal area, Jamshedpur Road, Rairangpur area, Karanjia area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mayurbhanj (Baripada), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baripada Main Market, Simlipal area, Rairangpur, Karanjia, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Simlipal Tiger Reserve safari stay from Mayurbhanj?", answer: "Yes, Simlipal Tiger Reserve is in Mayurbhanj district. Rose bouquets and forest-themed arrangements for jungle safari lodge stays can be delivered in Baripada (Mayurbhanj)." },
      { question: "Are flowers for the Mayurbhanj Chhau dance festival available?", answer: "Yes, Mayurbhanj Chhau (the most vigorous of the three Chhau forms, performed without masks) has festival seasons. Seasonal marigold arrangements for Chhau celebrations are available." },
      { question: "Do you deliver flowers same day in Mayurbhanj?", answer: "Yes, same-day delivery is available across Mayurbhanj (Baripada) for orders placed before 3 PM." }
    ]
  },

  "keonjhar": {
    cityName: "Keonjhar",
    metaTitle: "Flower Delivery in Keonjhar | Iron Ore Odisha | RedHeart",
    metaDescription: "Order flowers in Keonjhar, Odisha. Same-day delivery near Baripada & across Keonjhar. From ₹399.",
    h1: "Online Flower Delivery in Keonjhar",
    metaKeyword: "flower delivery keonjhar, online flowers keonjhar odisha, florist keonjhar, flowers keonjhar iron ore mining jharkhand tribal kendujhar baula baitarani",
    footerContent: `
<h2>Flower Delivery in Keonjhar — Iron Ore Hills and the Baitarani River at Odisha's Tribal Northern Gateway</h2>
<p>Keonjhar (Kendujhar), in northern Odisha at the Jharkhand border, is the headquarters of Keonjhar district — one of Odisha's most mineral-rich districts and a cornerstone of India's iron ore export economy. The Keonjhar-Sundargarh belt contains India's largest iron ore deposits (the Barbil-Joda mining area is one of the most productive in Asia), and the mines supply SAIL, Tata Steel, JSW, and export jetties at Paradip. The Baitarani River originates in the Keonjhar forests (a sacred river — the Baitarani is the river of the dead in Hindu tradition, which must be crossed to reach the afterlife, and it flows to Jajpur's Dhamra). The Keonjhar Fort and the Ghatagaon Bada Thakurani (Durga) temple are important cultural sites. The Saptasajya eco-tourism site is a scenic hilltop destination.</p>
<p>RedHeart delivers flowers across Keonjhar — Main Market, Barbil area, Joda area, Jharkhand Road, Anandapur area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Keonjhar, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Barbil, Joda, Anandapur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Ghatagaon Durga puja available in Keonjhar?", answer: "Yes, the Ghatagaon Bada Thakurani (Durga) temple is Keonjhar's most important pilgrimage site. Marigold garlands and Durga puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Keonjhar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Keonjhar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Keonjhar?", answer: "Yes, same-day delivery is available across Keonjhar for orders placed before 3 PM." }
    ]
  },

  "bargarh": {
    cityName: "Bargarh",
    metaTitle: "Flower Delivery in Bargarh | Dhanuyatra Odisha | RedHeart",
    metaDescription: "Order flowers in Bargarh, Odisha. Same-day delivery near Hirakud Dam & across Bargarh. From ₹399.",
    h1: "Online Flower Delivery in Bargarh",
    metaKeyword: "flower delivery bargarh, online flowers bargarh odisha, florist bargarh, flowers bargarh dhanuyatra krishna janamashtami mahanadi hirakud cotton paddy",
    footerContent: `
<h2>Flower Delivery in Bargarh — Dhanuyatra Festival Capital and the Mahanadi's Paddy Granary</h2>
<p>Bargarh, on the Mahanadi River in western Odisha near Sambalpur, is the headquarters of Bargarh district — a district famous for the Dhanuyatra (or Srikhetra Dhanuyatra), one of the world's largest open-air theatre festivals. The Dhanuyatra — a 10-day outdoor theatrical re-enactment of Krishna's childhood in Mathura (with the entire Bargarh town as the stage, local residents as characters, and spontaneous performances across an 8 sq km area) — is held annually in the Pausa month (December-January) and draws hundreds of thousands of visitors. The entire town becomes Mathura for 11 days, with specific streets, ponds, and areas designated as parts of the Dwapara Yuga mythology. Bargarh is also a major paddy and cotton cultivation district in the Hirakud irrigation command area.</p>
<p>RedHeart delivers flowers across Bargarh — Main Market, Sambalpur Road, Sonepur area, Padampur area, Attabira area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bargarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sambalpur Road, Sonepur, Padampur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Krishna puja flowers, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Bargarh Dhanuyatra festival available?", answer: "Yes, the Dhanuyatra (one of the world's largest open-air Krishna theatres, held in December-January) is Bargarh's defining festival. Marigold, lotus, and Krishna puja flowers for the 10-day celebration are available." },
      { question: "Are flowers for Janmashtami available in Bargarh?", answer: "Yes, Janmashtami (Krishna's birthday) is one of the most important celebrations in Bargarh. Marigold and lotus puja sets for the occasion are available." },
      { question: "Do you deliver flowers same day in Bargarh?", answer: "Yes, same-day delivery is available across Bargarh for orders placed before 3 PM." }
    ]
  },

  "kalahandi": {
    cityName: "Kalahandi",
    metaTitle: "Flower Delivery in Kalahandi | Bhawanipatna Odisha | RedHeart",
    metaDescription: "Order flowers in Kalahandi (Bhawanipatna), Odisha. Same-day delivery near Indravati River & across Kalahandi. From ₹399.",
    h1: "Online Flower Delivery in Kalahandi",
    metaKeyword: "flower delivery kalahandi, online flowers bhawanipatna odisha, florist kalahandi, flowers kalahandi bhawanipatna drought hunger starvation kondh tribal indravati",
    footerContent: `
<h2>Flower Delivery in Kalahandi — Kondh Tribal Land Transformed from Hunger to Horticultural Hope</h2>
<p>Kalahandi (headquartered at Bhawanipatna), in southern Odisha near Chhattisgarh, is one of India's most historically significant districts for social justice policy — the "KBK (Kalahandi-Bolangir-Koraput) region" became a symbol of extreme poverty, drought, and hunger in the 1980s-1990s, with the "Kalahandi starvation deaths" (widely reported but contested) becoming a national political issue that led to massive government intervention in tribal welfare and food security. The district has significant Kondh tribal communities in the forested hills. The Indravati River (Chhattisgarh's great river that flows through Bastar before joining the Godavari) originates near the Kalahandi-Bastar border hills. The Bhawanipatna area has historical palace heritage (the Kalahandi princely state). Today, the district has improved considerably through irrigation, MGNREGA, and welfare programmes.</p>
<p>RedHeart delivers flowers across Kalahandi — Bhawanipatna Main Market, Junagarh area, Dharmagarh area, Khariar area, Kesinga area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalahandi (Bhawanipatna), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhawanipatna, Junagarh, Dharmagarh, Khariar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Kalahandi?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kalahandi (Bhawanipatna) for orders placed before 3 PM." },
      { question: "Are flowers for Durga Puja available in Kalahandi?", answer: "Yes, Durga Puja is widely celebrated in Kalahandi. Marigold garlands, hibiscus, and Durga puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Kalahandi?", answer: "Yes, same-day delivery is available across Kalahandi for orders placed before 3 PM." }
    ]
  },

  "rayagada": {
    cityName: "Rayagada",
    metaTitle: "Flower Delivery in Rayagada | Tribal Odisha | RedHeart",
    metaDescription: "Order flowers in Rayagada, Odisha. Same-day delivery near Niyamgiri hills & across Rayagada. From ₹399.",
    h1: "Online Flower Delivery in Rayagada",
    metaKeyword: "flower delivery rayagada, online flowers rayagada odisha, florist rayagada, flowers rayagada niyamgiri kondh tribal koraput vedanta aluminium vamsadhara",
    footerContent: `
<h2>Flower Delivery in Rayagada — Niyamgiri Hills, Kondh Resistance, and the Vamsadhara River Valley</h2>
<p>Rayagada, in southern Odisha at the Andhra Pradesh border, is the headquarters of Rayagada district — a district in the Eastern Ghats forested hills where the Vamsadhara and Nagavali rivers rise. The district borders the Niyamgiri Hills (the Dongria Kondh's sacred mountain, which the Kondh people successfully protected from Vedanta's bauxite mining in a landmark Supreme Court case of 2013, considered a milestone in tribal rights jurisprudence in India). Rayagada is in a region of extraordinary biodiversity — bamboo, sal, and hardwood forests with tribal communities practising shifting cultivation (podu cultivation) alongside settled agriculture. The Rayagada town has an industrial presence (Utkal Alumina International, RINL) on the Vamsadhara banks.</p>
<p>RedHeart delivers flowers across Rayagada — Main Market, Koraput Road, Vizianagaram Road, Gudari area, Bisam Cuttack area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rayagada, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Koraput Road, Vizianagaram Road, Gudari, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Rayagada?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Rayagada for orders placed before 3 PM." },
      { question: "Are flowers for Durga Puja available in Rayagada?", answer: "Yes, Durga Puja is celebrated in Rayagada. Marigold and Durga puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Rayagada?", answer: "Yes, same-day delivery is available across Rayagada for orders placed before 3 PM." }
    ]
  },

  "south-dinajpur": {
    cityName: "South Dinajpur",
    metaTitle: "Flower Delivery in South Dinajpur | Balurghat West Bengal | RedHeart",
    metaDescription: "Order flowers in South Dinajpur (Balurghat), West Bengal. Same-day delivery near Atreyee River & across South Dinajpur. From ₹399.",
    h1: "Online Flower Delivery in South Dinajpur",
    metaKeyword: "flower delivery south dinajpur, online flowers balurghat west bengal, florist south dinajpur balurghat, flowers south dinajpur atreyee bangladesh border tetulia",
    footerContent: `
<h2>Flower Delivery in South Dinajpur — Atreyee River's Bangladesh Border District in Bengal's North</h2>
<p>South Dinajpur (headquartered at Balurghat), in northern West Bengal near the Bangladesh border, is one of Bengal's smaller and more pastoral districts. The Atreyee River (which flows from West Bengal into Bangladesh as the Atrai River) and the Tangon River form the district's drainage network. The Tetulia-Balurghat corridor (the narrow strip between Bangladesh's Dinajpur district and West Bengal) is a sensitive international border zone. Balurghat town has a modest trade and service economy. The district's cultural character is shaped by the Bengali Hindu and Muslim farming communities who maintain jute, paddy, and mustard cultivation. The historical Sri Sri Banabihari Thakur temple at Balurghat is the most important pilgrimage site.</p>
<p>RedHeart delivers flowers across South Dinajpur — Balurghat Main Market, Bangladesh Road, Raiganj Road, Gangarampur area, Hili area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">South Dinajpur (Balurghat), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balurghat, Bangladesh Road, Raiganj Road, Gangarampur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Durga Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Durga Puja available in South Dinajpur?", answer: "Yes, Durga Puja is the biggest celebration in South Dinajpur. Marigold garlands, hibiscus, and Durga puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Balurghat?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Balurghat (South Dinajpur) for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in South Dinajpur?", answer: "Yes, same-day delivery is available across South Dinajpur for orders placed before 3 PM." }
    ]
  },

  "cooch-behar": {
    cityName: "Cooch Behar",
    metaTitle: "Flower Delivery in Cooch Behar | Royal Palace West Bengal | RedHeart",
    metaDescription: "Order flowers in Cooch Behar, West Bengal. Same-day delivery near Koch Raj Palace & across Cooch Behar. From ₹399.",
    h1: "Online Flower Delivery in Cooch Behar",
    metaKeyword: "flower delivery cooch behar, online flowers cooch behar west bengal, florist cooch behar, flowers cooch behar koch raj palace torsa bhutan nepal rasaraj",
    footerContent: `
<h2>Flower Delivery in Cooch Behar — Koch Raja's Palace and the Bhutan-Bangladesh Corridor</h2>
<p>Cooch Behar, in the north Bengal plains near the Bhutan and Bangladesh borders, is the headquarters of Cooch Behar district — one of the most distinctive princely state-heritage districts of West Bengal. The Cooch Behar Palace (Rajbari), built by Maharaja Nripendra Narayan in 1887 (modelled partly on the Buckingham Palace and designed by the same architect), is one of eastern India's finest Victorian-era royal palaces, now a state museum. The Koch Raj dynasty, which built the Cooch Behar princely state, was one of the most powerful medieval kingdoms of northeastern Bengal and produced remarkable art and culture. The Madan Mohan Temple (Cooch Behar's most important pilgrimage site) and the Rash Mela (one of Bengal's biggest Vaishnava festivals, unique to Cooch Behar, celebrated on the full moon of Kartik) are celebrated landmarks. The Torsa River flows through the district. Bangladesh's "chitmahals" (enclaves within Indian territory) were exchanged in the historic 2015 Enclave Agreement.</p>
<p>RedHeart delivers flowers across Cooch Behar — Main Market, Palace area, Dinhata area, Mathabhanga area, Mekhliganj area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cooch Behar, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Palace area, Dinhata, Mathabhanga, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Rash Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Cooch Behar Rash Mela (Kartik Purnima) available?", answer: "Yes, the Cooch Behar Rash Mela (one of Bengal's largest Vaishnava festivals, unique to this region, on Kartik Purnima) draws lakhs of pilgrims. Marigold and Vaishnava puja sets for Rash Mela are available." },
      { question: "Can I get flowers for a Cooch Behar Palace heritage event?", answer: "Yes, the Cooch Behar Palace (Koch Raj museum) hosts cultural events. Rose bouquets and heritage gifting arrangements are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Cooch Behar?", answer: "Yes, same-day delivery is available across Cooch Behar for orders placed before 3 PM." }
    ]
  },

  "jalpaiguri": {
    cityName: "Jalpaiguri",
    metaTitle: "Flower Delivery in Jalpaiguri | Dooars Tea West Bengal | RedHeart",
    metaDescription: "Order flowers in Jalpaiguri, West Bengal. Same-day delivery near Gorumara & across Jalpaiguri. From ₹399.",
    h1: "Online Flower Delivery in Jalpaiguri",
    metaKeyword: "flower delivery jalpaiguri, online flowers jalpaiguri west bengal, florist jalpaiguri, flowers jalpaiguri dooars tea garden gorumara tista terai bhutan",
    footerContent: `
<h2>Flower Delivery in Jalpaiguri — Dooars Tea Estates, Gorumara Rhinos, and the Tista Valley</h2>
<p>Jalpaiguri, in the Dooars region of north Bengal at the Bhutan border, is the headquarters of Jalpaiguri district — one of the most scenically magnificent and ecologically rich districts of India. The Dooars ("doors" to the passes into Bhutan) is a landscape of dense tea estates, elephant grass (boro fen), tropical forests, and river channels — the Tista, Jaldhaka, Torsa, Mujnai, and Sankosh rivers flow through the district in the sub-Himalayan Terai. Gorumara National Park (home to Indian one-horned rhinos, Asian elephants, gaurs, and leopards in the dense sub-Himalayan jungle) is Jalpaiguri's most celebrated wildlife destination. Jalpaiguri's tea gardens (the Jalpaiguri-Dooars belt second only to Darjeeling in Bengal's tea output) produce the Dooars "second flush" teas. Binaguri, Nagrakata, and Malbazaar are important tea garden towns.</p>
<p>RedHeart delivers flowers across Jalpaiguri — Main Market, Gorumara area, Siliguri Road, Darjeeling Road, Malbazaar area, and Station Road. Our range includes roses, marigolds, orchids, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalpaiguri, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gorumara area, Siliguri Road, Malbazaar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Gorumara jungle resort anniversary from Jalpaiguri?", answer: "Yes, Gorumara National Park's jungle lodges and the Dooars tea estate resorts are in Jalpaiguri district. Romantic rose bouquets and anniversary arrangements for forest stays can be delivered." },
      { question: "Are orchids available in Jalpaiguri?", answer: "Yes, the sub-Himalayan Dooars microclimate supports orchid cultivation. Orchid bouquets and seasonal exotic flowers are available in Jalpaiguri." },
      { question: "Do you deliver flowers same day in Jalpaiguri?", answer: "Yes, same-day delivery is available across Jalpaiguri for orders placed before 3 PM." }
    ]
  },

  "prakasam": {
    cityName: "Prakasam",
    metaTitle: "Flower Delivery in Prakasam | Ongole Andhra Pradesh | RedHeart",
    metaDescription: "Order flowers in Prakasam (Ongole), AP. Same-day delivery near Bay of Bengal coast & across Prakasam. From ₹399.",
    h1: "Online Flower Delivery in Prakasam",
    metaKeyword: "flower delivery prakasam, online flowers ongole andhra pradesh, florist prakasam ongole, flowers ongole ongole cattle krishna godavari coast tobacco chilli",
    footerContent: `
<h2>Flower Delivery in Prakasam — Ongole Cattle Country and the Bay of Bengal Tobacco Coast</h2>
<p>Prakasam (headquartered at Ongole), on the Bay of Bengal coast of Andhra Pradesh between Guntur and Nellore, is one of Andhra's most agricultural and commercially significant coastal districts. Ongole is the home of the Ongole cattle breed — one of India's most prized and internationally exported cattle breeds (used for draught and dairy), now sought-after in Brazil, Australia, and Africa for their heat tolerance. Prakasam district is one of Andhra's major tobacco and chilli growing areas in the Krishna-Guntur-Ongole red soil belt. The district's Bay of Bengal coastline (including the Nizampatnam harbour area) supports major fishing communities and prawn aquaculture. The Sri Ranganatha Swamy temple at Rekulakunta (a Vaishnava temple on the Krishna-Guntur border) and the Buddhist sites of the Krishna-Guntur coastal belt mark the cultural heritage.</p>
<p>RedHeart delivers flowers across Prakasam — Ongole Main Market, Beach Road, Giddalur area, Kandukur area, Markapur area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Andhra bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Prakasam (Ongole), Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ongole, Beach Road, Giddalur, Kandukur, Markapur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, roses, marigolds, seasonal Andhra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are jasmine gajras available in Ongole (Prakasam)?", answer: "Yes, fresh jasmine gajras for daily wear and festivals are popular in Ongole. Jasmine from local cultivation is available for same-day delivery." },
      { question: "Are flowers for Ugadi available in Prakasam?", answer: "Yes, Ugadi (Telugu New Year) bouquets and marigold arrangements are available in Prakasam (Ongole) for same-day delivery." },
      { question: "Do you deliver flowers same day in Prakasam?", answer: "Yes, same-day delivery is available across Prakasam for orders placed before 3 PM." }
    ]
  },

  "nellore": {
    cityName: "Nellore",
    metaTitle: "Flower Delivery in Nellore | Sri Potti Sriramulu Andhra Pradesh | RedHeart",
    metaDescription: "Order flowers in Nellore (Sri Potti Sriramulu Nellore), AP. Same-day delivery near Pulicat Lake & across Nellore. From ₹399.",
    h1: "Online Flower Delivery in Nellore",
    metaKeyword: "flower delivery nellore, online flowers nellore andhra pradesh, florist nellore, flowers nellore pulicat lake bay of bengal shrimp aquaculture pothi sriramulu",
    footerContent: `
<h2>Flower Delivery in Nellore — Pulicat Lake's Flamingos and India's Shrimp Aquaculture Capital</h2>
<p>Nellore (Sri Potti Sriramulu Nellore district), on the Pennar River near the Bay of Bengal in southern Andhra Pradesh near Tamil Nadu, is one of Andhra's most historically important and economically dynamic districts. The district is named after Potti Sriramulu — the Telugu martyr who undertook a fast-unto-death in 1952 to demand the creation of a separate Telugu-speaking state, and whose death after 58 days of fasting prompted Nehru to create Andhra Pradesh (the first state in India carved on linguistic lines). The Pulicat Lake (Pulicat Lagoon) — a Ramsar Wetland and India's second-largest brackish water lagoon — is famous for its flamingo colony (10,000+ greater flamingos) and pelicans in winter. Nellore district is India's largest shrimp and fish exporter — the coastal aquaculture (vannamei shrimp) industry dominates the coastline.</p>
<p>RedHeart delivers flowers across Nellore — Main Market, Pulicat area, Chennai Road, Kavali area, Gudur area, and Station Road. Our range includes roses, jasmine, marigolds, and seasonal Andhra bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nellore, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Pulicat area, Chennai Road, Kavali, Gudur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, roses, marigolds, seasonal Andhra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are jasmine gajras available in Nellore?", answer: "Yes, jasmine gajras are extremely popular in Nellore. Fresh jasmine bouquets and gajras are available for same-day delivery." },
      { question: "Are flowers for Ugadi available in Nellore?", answer: "Yes, Ugadi (Telugu New Year) seasonal bouquets and marigold arrangements are available in Nellore for same-day delivery." },
      { question: "Do you deliver flowers same day in Nellore?", answer: "Yes, same-day delivery is available across Nellore for orders placed before 3 PM." }
    ]
  },

  "churachandpur": {
    cityName: "Churachandpur",
    metaTitle: "Flower Delivery in Churachandpur | Manipur | RedHeart",
    metaDescription: "Order flowers in Churachandpur, Manipur. Same-day delivery across Churachandpur district. From ₹399.",
    h1: "Online Flower Delivery in Churachandpur",
    metaKeyword: "flower delivery churachandpur, online flowers churachandpur manipur, florist churachandpur, flowers churachandpur kuki chin mizo tribal zomi sakura imphal valley hill district",
    footerContent: `
<h2>Flower Delivery in Churachandpur — Kuki-Zo Tribal Hill District at the Myanmar-Mizoram Border</h2>
<p>Churachandpur, in the southern hill districts of Manipur near the Myanmar and Mizoram borders, is the headquarters of Churachandpur district — one of Manipur's largest hill districts and the population centre of the Kuki-Zo tribal community (the Kukis, Hmars, Zoumis, Paite, Simte, and related communities who trace their ancestral connection to the Zo/Chin highlands of the India-Myanmar-Bangladesh border). The district has a predominantly Christian population (Baptist and Presbyterian denominations from 19th century Welsh, British, and American missionaries). The Tipaimukh hydroelectric dam project site on the Barak River (controversial for its impact on Manipur-Mizoram and Assam downstream) is in the district. The Tuibong area has traditional Hmar weaving. The district has remarkable biodiversity in its forested hills.</p>
<p>RedHeart delivers flowers across Churachandpur — Main Market, Imphal Road, Saikot area, Thanlon area, Singngat area, and Station Road. Our range includes roses, marigolds, seasonal Manipur bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churachandpur, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Imphal Road, Saikot, Thanlon, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Manipur bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Christmas available in Churachandpur?", answer: "Yes, Churachandpur has a predominantly Christian Kuki-Zo community. Christmas roses, white lilies, and festive arrangements are available for the season." },
      { question: "Are orchids available in Churachandpur?", answer: "Yes, Manipur is India's orchid state and Churachandpur's hill forests are rich in orchids. Local orchid varieties and exotic flower bouquets are available." },
      { question: "Do you deliver flowers same day in Churachandpur?", answer: "Yes, same-day delivery is available across Churachandpur for orders placed before 3 PM." }
    ]
  },

  "mokokchung": {
    cityName: "Mokokchung",
    metaTitle: "Flower Delivery in Mokokchung | Ao Naga Nagaland | RedHeart",
    metaDescription: "Order flowers in Mokokchung, Nagaland. Same-day delivery across Mokokchung district. From ₹399.",
    h1: "Online Flower Delivery in Mokokchung",
    metaKeyword: "flower delivery mokokchung, online flowers mokokchung nagaland, florist mokokchung, flowers mokokchung ao naga tribe hornbill festival christian north east",
    footerContent: `
<h2>Flower Delivery in Mokokchung — Ao Naga Homeland at the Heart of Nagaland's Cultural Identity</h2>
<p>Mokokchung, in northern Nagaland, is the headquarters of Mokokchung district — the homeland of the Ao Naga tribe, one of Nagaland's most culturally influential and historically significant tribal communities. The Ao Nagas were among the first Naga tribes to be contacted by American Baptist missionaries (from the 1870s), and today are almost entirely Christian with a distinct blend of Ao traditional culture (including the Ao warrior-weaving-farming society) and a strong literary and educational tradition (Mokokchung has several reputable mission schools and the Ao Language Institute). The Ao Naga traditional village of Ungma (one of the oldest Naga villages, with traditional stone platforms and warrior monuments) is nearby. The Mokokchung district also contributes richly to the Nagaland Hornbill Festival celebrations.</p>
<p>RedHeart delivers flowers across Mokokchung — Main Market, Kohima Road, Dimapur Road, Ungma area, Longchem area, and Station Road. Our range includes roses, orchids, marigolds, and seasonal Nagaland bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mokokchung, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kohima Road, Dimapur Road, Ungma, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Nagaland bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Christmas available in Mokokchung?", answer: "Yes, the Ao Naga community of Mokokchung is predominantly Christian. Christmas roses, white lilies, and festive arrangements are available for same-day delivery." },
      { question: "Are orchids available in Mokokchung?", answer: "Yes, Nagaland's hills host many native orchid species. Orchid bouquets and exotic flower arrangements are available in Mokokchung." },
      { question: "Do you deliver flowers same day in Mokokchung?", answer: "Yes, same-day delivery is available across Mokokchung for orders placed before 3 PM." }
    ]
  },

  "lunglei": {
    cityName: "Lunglei",
    metaTitle: "Flower Delivery in Lunglei | South Mizoram | RedHeart",
    metaDescription: "Order flowers in Lunglei, Mizoram. Same-day delivery across Lunglei district. From ₹399.",
    h1: "Online Flower Delivery in Lunglei",
    metaKeyword: "flower delivery lunglei, online flowers lunglei mizoram, florist lunglei, flowers lunglei mizo tribe south mizoram bangladesh myanmar border orchid bamboo flowering",
    footerContent: `
<h2>Flower Delivery in Lunglei — Mizo Hills' Southern Capital at the Myanmar-Bangladesh Tri-Border</h2>
<p>Lunglei, in the southern Mizo Hills of Mizoram, is the headquarters of Lunglei district — Mizoram's largest district by area and a major administrative and commercial centre in the south. Lunglei is at the southern gateway to the tri-border area where Mizoram meets Myanmar's Chin State and Bangladesh's Chittagong Hill Tracts — one of the most culturally diverse frontier zones in Southeast Asia. The Lunglei-Aizawl corridor is the main road axis of Mizoram. The district has spectacular bamboo forests — the Mautam bamboo flowering cycle (every ~48-50 years, the giant bamboo flowers and seeds, triggering a rat population explosion and subsequent famine) was a devastating phenomenon that periodically devastated Mizoram (the last major Mautam was in 1958-59, contributing to the Mizo insurgency). Orchids are native to Lunglei's hill forests.</p>
<p>RedHeart delivers flowers across Lunglei — Main Market, Aizawl Road, Myanmar Road, Thingsai area, Hnahthial area, and Station Road. Our range includes roses, orchids, marigolds, and seasonal Mizoram bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lunglei, Mizoram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Aizawl Road, Myanmar Road, Thingsai, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Mizoram bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Christmas available in Lunglei?", answer: "Yes, the Mizo community of Lunglei is predominantly Christian. Christmas roses, white lilies, and festive floral arrangements are available for same-day delivery." },
      { question: "Are orchids available in Lunglei?", answer: "Yes, Mizoram's forested hills are rich in native orchids. Orchid bouquets and tropical flower arrangements are available in Lunglei." },
      { question: "Do you deliver flowers same day in Lunglei?", answer: "Yes, same-day delivery is available across Lunglei for orders placed before 3 PM." }
    ]
  },

  "hingoli": {
    cityName: "Hingoli",
    metaTitle: "Flower Delivery in Hingoli | Maharashtra | RedHeart",
    metaDescription: "Order flowers in Hingoli, Maharashtra. Same-day delivery near Aundha Nagnath temple & across Hingoli. From ₹399.",
    h1: "Online Flower Delivery in Hingoli",
    metaKeyword: "flower delivery hingoli, online flowers hingoli maharashtra, florist hingoli, flowers hingoli aundha nagnath jyotirlinga nanded marathwada kandhar cotton",
    footerContent: `
<h2>Flower Delivery in Hingoli — Aundha Nagnath Jyotirlinga and the Marathwada Cotton Heartland</h2>
<p>Hingoli, in the Marathwada region of Maharashtra between Nanded and Washim, is the headquarters of Hingoli district — a district of historical and religious significance at the eastern edge of the Deccan Plateau's cotton-growing Marathwada. The Aundha Nagnath temple (at Aundha, in Hingoli district) is one of India's 12 Jyotirlingas — the sacred Shiva temples (or "pillars of fire light") mentioned in the Puranas as the most sacred manifestations of Lord Shiva. The Aundha Nagnath Jyotirlinga is one of the most ancient and historically documented Jyotirlingas, with inscriptional evidence going back to the 13th century CE. Hingoli district lies in the cotton belt — the black cotton soil (regur) of Marathwada grows the finest Bt cotton for Maharashtra's textile industry. Hingoli also has the Sawangi Mata temple (a local Devi pilgrimage).</p>
<p>RedHeart delivers flowers across Hingoli — Main Market, Aundha Nagnath area, Nanded Road, Basmath area, Kalamnuri area, and Station Road. Our range includes roses, marigolds, Shiva puja flowers, and seasonal Maharashtra bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hingoli, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Aundha Nagnath area, Nanded Road, Basmath, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, bilva, roses, Shiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Aundha Nagnath Jyotirlinga puja available in Hingoli?", answer: "Yes, the Aundha Nagnath Jyotirlinga (one of India's 12 most sacred Shiva temples) is in Hingoli district. Marigold garlands, bilva, and Shiva puja sets for the Jyotirlinga are available from Hingoli." },
      { question: "Are flowers for Mahashivratri available in Hingoli?", answer: "Yes, Mahashivratri at the Aundha Nagnath Jyotirlinga draws massive pilgrimages. Bilva, white flowers, and Shiva puja sets for the festival are available." },
      { question: "Do you deliver flowers same day in Hingoli?", answer: "Yes, same-day delivery is available across Hingoli for orders placed before 3 PM." }
    ]
  },

  "dharashiv": {
    cityName: "Dharashiv",
    metaTitle: "Flower Delivery in Dharashiv | Osmanabad Maharashtra | RedHeart",
    metaDescription: "Order flowers in Dharashiv (Osmanabad), Maharashtra. Same-day delivery near Tuljapur Bhavani & across Dharashiv. From ₹399.",
    h1: "Online Flower Delivery in Dharashiv",
    metaKeyword: "flower delivery dharashiv, online flowers osmanabad maharashtra, florist dharashiv osmanabad, flowers osmanabad tuljapur bhavani shivaji marathwada rock caves",
    footerContent: `
<h2>Flower Delivery in Dharashiv — Tuljapur Bhavani's Sacred Goddess and Shivaji's Kuldevi at the Deccan Plateau</h2>
<p>Dharashiv (formerly Osmanabad), in the Marathwada region of Maharashtra, is the headquarters of Dharashiv district — renamed in 2023 from Osmanabad (its Nizam-era name) to the ancient name Dharashiv, which derives from the remarkable Dharashiv Caves (early medieval rock-cut Buddhist and Jain cave temples). The district's defining pilgrimage site is the Tuljapur Bhavani temple — one of Maharashtra's Shakti peethas (and considered the Kuldevi, or clan goddess, of the Bhonsle dynasty, including Chhatrapati Shivaji Maharaj, who reportedly received the divine sword from Bhavani before establishing the Maratha Empire). Tuljapur draws enormous pilgrimages during Navratri. The district is in the rain-shadow Marathwada belt (dryland cotton, soybean, sunflower cultivation). The Uma-Rameshwar temple and the rock-cut shrines are additional heritage treasures.</p>
<p>RedHeart delivers flowers across Dharashiv — Main Market, Tuljapur area, Solapur Road, Latur Road, Paranda area, and Station Road. Our range includes roses, marigolds, Shakti puja flowers, and seasonal Maharashtra bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharashiv (Osmanabad), Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tuljapur area, Solapur Road, Latur Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, red hibiscus, roses, Bhavani puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Tuljapur Bhavani Navratri puja available from Dharashiv?", answer: "Yes, the Tuljapur Bhavani temple (Shivaji's Kuldevi and one of Maharashtra's Shakti peethas) draws enormous Navratri pilgrimages. Marigold garlands, red hibiscus, and Devi puja sets are available from Dharashiv." },
      { question: "Can I get flowers for a Gudipadwa celebration in Dharashiv?", answer: "Yes, Gudipadwa (Maharashtra's New Year) marigold and mango blossom arrangements are available in Dharashiv for same-day delivery." },
      { question: "Do you deliver flowers same day in Dharashiv?", answer: "Yes, same-day delivery is available across Dharashiv (Osmanabad) for orders placed before 3 PM." }
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
