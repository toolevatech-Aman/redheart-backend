// Batch 62 — 15 cities:
// Bihar: Jehanabad, Arwal, Lakhisarai, Sheikhpura
// Assam: Goalpara, Bongaigaon, Dhubri, Dibrugarh
// Odisha: Kandhamal, Nayagarh, Kendrapara
// Gujarat: Sabarkantha, Banaskantha
// AP: Eluru (West Godavari)
// TN: Tiruppur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "jehanabad": {
    cityName: "Jehanabad",
    metaTitle: "Flower Delivery in Jehanabad | Bihar | RedHeart",
    metaDescription: "Order flowers in Jehanabad, Bihar. Same-day delivery near Patna & across Jehanabad. From ₹399.",
    h1: "Online Flower Delivery in Jehanabad",
    metaKeyword: "flower delivery jehanabad, online flowers jehanabad bihar, florist jehanabad, flowers jehanabad patna naxal barabar caves ashoka maurya son river barbar hills",
    footerContent: `
<h2>Flower Delivery in Jehanabad — Ashoka's Barabar Caves and the Son River's Magadha Heartland</h2>
<p>Jehanabad, in the Magadha region of south-central Bihar near Patna, is the headquarters of Jehanabad district — a district in the ancient heartland of the Mauryan Empire and one of Bihar's most historically layered districts. The Barabar Hills (in Jehanabad district) contain the Barabar Caves — the oldest surviving rock-cut caves in India, commissioned by Emperor Ashoka (circa 250 BCE) for the Ajivika ascetic sect, and later serving as an inspiration for E.M. Forster's famous Marabar Caves in "A Passage to India." The cave inscriptions include some of the earliest examples of Brahmi script referring to Ashoka by name. Jehanabad was also the epicentre of the Naxalite (Maoist) movement's most dramatic moment in Bihar — the 2005 Jehanabad jail break, where the People's Liberation Army (PLA) stormed the district jail and freed 341 convicted Naxalite prisoners. The district lies on the Son River's fertile plains.</p>
<p>RedHeart delivers flowers across Jehanabad — Main Market, Arwal area, Makhdumpur area, Ghoshi area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jehanabad, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Arwal, Makhdumpur, Ghoshi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Jehanabad?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jehanabad for orders placed before 3 PM." },
      { question: "Are flowers for Chhath Puja available in Jehanabad?", answer: "Yes, Chhath Puja is the biggest festival in Jehanabad. Lotus flowers and Chhath Puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Jehanabad?", answer: "Yes, same-day delivery is available across Jehanabad for orders placed before 3 PM." }
    ]
  },

  "arwal": {
    cityName: "Arwal",
    metaTitle: "Flower Delivery in Arwal | Magadha Bihar | RedHeart",
    metaDescription: "Order flowers in Arwal, Bihar. Same-day delivery across Arwal district. From ₹399.",
    h1: "Online Flower Delivery in Arwal",
    metaKeyword: "flower delivery arwal, online flowers arwal bihar, florist arwal, flowers arwal magadha patna son river jehanabad youngest district 2009 ganga",
    footerContent: `
<h2>Flower Delivery in Arwal — Bihar's Youngest District and the Magadha Agricultural Plain</h2>
<p>Arwal, in the Magadha region of south Bihar near Patna and Jehanabad, is the headquarters of Arwal district — one of Bihar's newest and smallest districts, carved from Jehanabad district in 2009. Arwal district sits in the fertile plains of the Son River and the Ganga-Son confluence zone, with agriculture (paddy, wheat, and maize) as the primary livelihood. The district is in the political and cultural heartland of Bihar's Yadav community — the area has significant historical associations with the Yadava power dynamics that shape Bihar's caste politics. Despite its small size, Arwal occupies an important administrative niche in the dense district-level administration of south Bihar. The Son River — one of the Ganga's major right-bank tributaries — flows near the district, providing both irrigation and a traditional fishing economy. Arwal was part of the ancient Magadha Kingdom's agricultural surplus zone that funded the Mauryan and Gupta empires.</p>
<p>RedHeart delivers flowers across Arwal — Main Market, Kaler area, Karpi area, Sonbhadra-Bansi area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arwal, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kaler, Karpi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Arwal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Arwal for orders placed before 3 PM." },
      { question: "Are flowers for Chhath Puja available in Arwal?", answer: "Yes, Chhath Puja is the biggest festival in Arwal. Lotus flowers and Chhath Puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Arwal?", answer: "Yes, same-day delivery is available across Arwal for orders placed before 3 PM." }
    ]
  },

  "lakhisarai": {
    cityName: "Lakhisarai",
    metaTitle: "Flower Delivery in Lakhisarai | Bihar | RedHeart",
    metaDescription: "Order flowers in Lakhisarai, Bihar. Same-day delivery near Patna belt & across Lakhisarai. From ₹399.",
    h1: "Online Flower Delivery in Lakhisarai",
    metaKeyword: "flower delivery lakhisarai, online flowers lakhisarai bihar, florist lakhisarai, flowers lakhisarai ganga ashoka pillar ancient maurya ashokadhamm ancient sites",
    footerContent: `
<h2>Flower Delivery in Lakhisarai — Ashoka's Ancient Dharma Sites and the Ganga Alluvial Plains of Anga</h2>
<p>Lakhisarai, on the south bank of the Ganga in eastern Bihar, is the headquarters of Lakhisarai district — a district in the ancient Anga Kingdom's territory (one of the mahajanapadas described in Buddhist texts, whose king was Karna of the Mahabharata) and containing significant Mauryan-era Buddhist heritage. The Asokan sites in Lakhisarai's Pawapuri-Rajgir archaeological orbit have yielded Buddhist inscriptions and stupas. Lakhisarai district has the Kali Pahari and Saptarshi Ashram heritage sites. The district's agricultural economy is based on paddy, vegetables, and maize on the Ganga alluvial flood plains. Lakhisarai is a relatively small district (carved from Munger) but occupies an important position in the Bihar road and rail network connecting Patna to Jharkhand. The Lakhisarai town has a busy grain market and agricultural trade.</p>
<p>RedHeart delivers flowers across Lakhisarai — Main Market, Surajgarha area, Ramgarh Chowk area, Halsi area, Barahiya area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhisarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Surajgarha, Ramgarh Chowk, Halsi, Barahiya, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Lakhisarai?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Lakhisarai for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Lakhisarai?", answer: "Yes, marigold garlands and puja sets for Chhath Puja, Diwali, and other festivals are available for same-day delivery in Lakhisarai." },
      { question: "Do you deliver flowers same day in Lakhisarai?", answer: "Yes, same-day delivery is available across Lakhisarai for orders placed before 3 PM." }
    ]
  },

  "sheikhpura": {
    cityName: "Sheikhpura",
    metaTitle: "Flower Delivery in Sheikhpura | Bihar | RedHeart",
    metaDescription: "Order flowers in Sheikhpura, Bihar. Same-day delivery across Sheikhpura district. From ₹399.",
    h1: "Online Flower Delivery in Sheikhpura",
    metaKeyword: "flower delivery sheikhpura, online flowers sheikhpura bihar, florist sheikhpura, flowers sheikhpura nalanda patna gaya ancient mauryan pottery handloom munger",
    footerContent: `
<h2>Flower Delivery in Sheikhpura — Ancient Nalanda's Agricultural Hinterland and Bihar's Pottery District</h2>
<p>Sheikhpura, in the Magadha region of central Bihar between Nalanda and Munger, is the headquarters of Sheikhpura district — one of Bihar's smallest districts (carved from Nalanda district in 1994) and a district of ancient heritage and traditional crafts. The district is in the immediate agricultural and cultural orbit of the ancient Nalanda University site — the medieval world's greatest university (5th–12th century BCE, attracting scholars from across Asia), whose ruins are a UNESCO World Heritage Site and nearby pilgrimage destination. Sheikhpura district has a tradition of pottery (earthenware pot-making using the centuries-old technique of Bhagalpur and Munger styles) and handloom weaving. The district's paddy and vegetable cultivation on the alluvial Son River plains supports the local economy. The Sheikhpura area was historically associated with the local zamindar (landowner) class and agrarian social structure of Magadha.</p>
<p>RedHeart delivers flowers across Sheikhpura — Main Market, Barbigha area, Ariari area, Ghato area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheikhpura, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Barbigha, Ariari, Ghato, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Sheikhpura?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sheikhpura for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Sheikhpura?", answer: "Yes, marigold garlands and puja sets for Chhath Puja and other festivals are available for same-day delivery in Sheikhpura." },
      { question: "Do you deliver flowers same day in Sheikhpura?", answer: "Yes, same-day delivery is available across Sheikhpura for orders placed before 3 PM." }
    ]
  },

  "goalpara": {
    cityName: "Goalpara",
    metaTitle: "Flower Delivery in Goalpara | Brahmaputra Assam | RedHeart",
    metaDescription: "Order flowers in Goalpara, Assam. Same-day delivery near Dhupdhara & across Goalpara. From ₹399.",
    h1: "Online Flower Delivery in Goalpara",
    metaKeyword: "flower delivery goalpara, online flowers goalpara assam, florist goalpara, flowers goalpara brahmaputra river bodo rabha garo hills meghalaya sufi kamakhya ancient",
    footerContent: `
<h2>Flower Delivery in Goalpara — Brahmaputra's Ancient Crossing Point and the Garo Hills Border</h2>
<p>Goalpara, on the southern bank of the Brahmaputra near the Meghalaya border in western Assam, is the headquarters of Goalpara district — one of Assam's oldest district headquarters and a district of rich diversity. The name "Goalpara" derives from "Gwal-para" — the settlement of Gwals (cattle herders), reflecting the ancient pastoral economy. Goalpara was the seat of the Koch-Kamata kingdom's western administration and a crossing point on the Brahmaputra for traders and armies. The district has a significant Bodo tribal population (the Bodos are Assam's largest plains tribal group, concentrated in the Bodoland Territorial Region to the east), as well as Rabha tribal communities on the Meghalaya border hills. The Urpod Dol Sufi dargah and the Pancharatna temple in Goalpara reflect the district's religious pluralism. The Brahmaputra's spectacular flooding and the fertile chars (river islands) are key ecological features.</p>
<p>RedHeart delivers flowers across Goalpara — Main Market, Dudhnoi area, Lakhipur area, Krishnai area, Rongjuli area, and Station Road. Our range includes roses, marigolds, seasonal Assam bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Goalpara, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dudhnoi, Lakhipur, Krishnai, Rongjuli, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Goalpara?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Goalpara for orders placed before 3 PM." },
      { question: "Are flowers for Bihu available in Goalpara?", answer: "Yes, Bihu (Assam's harvest festival) is enthusiastically celebrated in Goalpara. Marigold garlands and Bihu festive flower sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Goalpara?", answer: "Yes, same-day delivery is available across Goalpara for orders placed before 3 PM." }
    ]
  },

  "bongaigaon": {
    cityName: "Bongaigaon",
    metaTitle: "Flower Delivery in Bongaigaon | Assam | RedHeart",
    metaDescription: "Order flowers in Bongaigaon, Assam. Same-day delivery near Jogighopa & across Bongaigaon. From ₹399.",
    h1: "Online Flower Delivery in Bongaigaon",
    metaKeyword: "flower delivery bongaigaon, online flowers bongaigaon assam, florist bongaigaon, flowers bongaigaon bpcl refinery oil railway junction jogighopa brahmaputra bodo",
    footerContent: `
<h2>Flower Delivery in Bongaigaon — BPCL Refinery Railway Junction and Western Assam's Industrial Town</h2>
<p>Bongaigaon, in western Assam near the Meghalaya and Bhutan borders, is the headquarters of Bongaigaon district — a district dominated by the Bongaigaon Refinery (Numaligarh Refinery's parent: the original Bongaigaon Refinery and Petrochemicals Limited — BRPL, now merged with Numaligarh Refinery Limited) and railway infrastructure. Bongaigaon is one of Northeast India's most important railway junctions, where the main Assam rail line (Guwahati-Dibrugarh) connects to the Bhutan border's Alipurduar Junction route. The Bongaigaon Refinery (established 1974) was one of Assam's two major public-sector refineries, processing Assam crude from the Digboi and Naharkatia oilfields. The district has a significant Bodo tribal community and is in the Bodoland Territorial Region's administrative orbit. The Aie River and the Champavati River (tributaries of the Brahmaputra) flow through the district's tea and rice fields.</p>
<p>RedHeart delivers flowers across Bongaigaon — Main Market, Abhayapuri area, Bijni area, Sidli area, Jogighopa area, and Station Road. Our range includes roses, marigolds, seasonal Assam bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bongaigaon, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Abhayapuri, Bijni, Sidli, Jogighopa, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Bongaigaon?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Bongaigaon for orders placed before 3 PM." },
      { question: "Are flowers for Bihu available in Bongaigaon?", answer: "Yes, Bihu is the biggest festival in Bongaigaon. Marigold garlands and Bihu festive flower sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Bongaigaon?", answer: "Yes, same-day delivery is available across Bongaigaon for orders placed before 3 PM." }
    ]
  },

  "dhubri": {
    cityName: "Dhubri",
    metaTitle: "Flower Delivery in Dhubri | Bangladesh Border Assam | RedHeart",
    metaDescription: "Order flowers in Dhubri, Assam. Same-day delivery near Brahmaputra border & across Dhubri. From ₹399.",
    h1: "Online Flower Delivery in Dhubri",
    metaKeyword: "flower delivery dhubri, online flowers dhubri assam, florist dhubri, flowers dhubri bangladesh border brahmaputra sikh historical guru nanak musafirkhana gauripur",
    footerContent: `
<h2>Flower Delivery in Dhubri — Brahmaputra's Bangladesh Border Confluence and Guru Nanak's Assam Visit</h2>
<p>Dhubri, on the Brahmaputra River at the Bangladesh and Meghalaya borders in western Assam, is the headquarters of Dhubri district — one of Assam's most diverse and geographically unique districts, where the mighty Brahmaputra enters Bangladesh as the Jamuna. The Brahmaputra at Dhubri is at its widest in Assam — a sweeping expanse of river islands (chars) where Bangladeshi char communities have settled on the shifting sands. Guru Nanak Dev Ji (the founder of Sikhism) is believed to have visited Dhubri during his eastern tour (Udasi) in the early 16th century — the Gurudwara Dhubri Sahib on the Brahmaputra bank marks this site and is one of the holiest Sikh shrines in Northeast India. The Gauripur Koch-Rajbongshi princely palace is a heritage landmark. Dhubri district has a significant Muslim-majority population (many of char-dweller origin, a contentious demographic phenomenon in Assam).</p>
<p>RedHeart delivers flowers across Dhubri — Main Market, Gauripur area, Golakganj area, Bilasipara area, Chapar area, and Station Road. Our range includes roses, marigolds, seasonal Assam bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhubri, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gauripur, Golakganj, Bilasipara, Chapar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Gurpurab available in Dhubri?", answer: "Yes, the Gurudwara Dhubri Sahib (marking Guru Nanak's visit to Dhubri) is one of Northeast India's holiest Sikh shrines. Marigold garlands and Sikh puja flowers for Gurpurab are available." },
      { question: "Can I get birthday flowers in Dhubri?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Dhubri for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Dhubri?", answer: "Yes, same-day delivery is available across Dhubri for orders placed before 3 PM." }
    ]
  },

  "dibrugarh": {
    cityName: "Dibrugarh",
    metaTitle: "Flower Delivery in Dibrugarh | Tea City Assam | RedHeart",
    metaDescription: "Order flowers in Dibrugarh, Assam. Same-day delivery near Brahmaputra & across Dibrugarh. From ₹399.",
    h1: "Online Flower Delivery in Dibrugarh",
    metaKeyword: "flower delivery dibrugarh, online flowers dibrugarh assam, florist dibrugarh, flowers dibrugarh tea city upper assam oil tinsukia brahmaputra medical college",
    footerContent: `
<h2>Flower Delivery in Dibrugarh — Assam's Tea City and Upper Assam's Commercial Capital</h2>
<p>Dibrugarh, on the south bank of the Brahmaputra in Upper Assam, is one of the most important commercial and medical centres in Northeast India — nicknamed the "Tea City of India" (Cha Nagaree) for the dense concentration of premium tea gardens surrounding it and the Tea Exchange that transacts much of Assam's tea trade. Dibrugarh has one of the largest concentrations of tea gardens in Assam's Upper Assam belt (neighbouring Tinsukia, Jorhat, Sibsagar), producing the robust, bright Assam tea that forms the base of most Indian and British "morning cup" blends. The Assam Medical College (Dibrugarh) is Northeast India's oldest and most important medical institution (established 1947). Dibrugarh University is a premier institution serving Upper Assam and Arunachal Pradesh. The Bogibeel Bridge (India's longest rail-road bridge, 4.94 km, connecting Dibrugarh to Dhemaji across the Brahmaputra) was inaugurated in 2018.</p>
<p>RedHeart delivers flowers across Dibrugarh — Main Market, Lahoal area, Barbaruah area, Khowang area, Duliajan area, and Station Road. Our range includes roses, seasonal Assam flowers, marigolds, and tropical bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dibrugarh, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Lahoal, Barbaruah, Khowang, Duliajan, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, seasonal Assam flowers, marigolds, tropical bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Dibrugarh?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Dibrugarh for orders placed before 3 PM." },
      { question: "Are flowers for Bihu available in Dibrugarh?", answer: "Yes, Bihu is one of the biggest celebrations in Dibrugarh. Marigold garlands and Bihu festive flower sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Dibrugarh?", answer: "Yes, same-day delivery is available across Dibrugarh for orders placed before 3 PM." }
    ]
  },

  "kandhamal": {
    cityName: "Kandhamal",
    metaTitle: "Flower Delivery in Kandhamal | Kondh Tribal Odisha | RedHeart",
    metaDescription: "Order flowers in Kandhamal (Phulbani), Odisha. Same-day delivery near Phulbani & across Kandhamal. From ₹399.",
    h1: "Online Flower Delivery in Kandhamal",
    metaKeyword: "flower delivery kandhamal, online flowers kandhamal phulbani odisha, florist kandhamal, flowers kandhamal kondh tribal kurkuma phulbani daringbadi turmeric hill station",
    footerContent: `
<h2>Flower Delivery in Kandhamal — Kondh Tribal Heartland, Turmeric Capital, and Daringbadi's Kashmir of Odisha</h2>
<p>Kandhamal, in the Eastern Ghats of Odisha, is the headquarters of Kandhamal district — a predominantly tribal district where the Kondh (Khond) are the largest community, occupying the hills and forests of the Eastern Ghats. Kandhamal is the largest producer of turmeric in Odisha (the "Kandhamal Haldi" — a unique curcumin-rich hill turmeric variety grown by Kondh farmers — has received GI status and is prized nationally for its medicinal quality). Daringbadi (in Kandhamal district) — called the "Kashmir of Odisha" — is a cool hill station at 900m with pine forests, coffee plantations, and waterfalls that draws tourists particularly in winter when frost covers the hills. The Kondh community's religious practices include the famous Meriah (human sacrifice, now abolished) ritual heritage and the Bissamcuttack craft tradition. The Phulbani town (district HQ) is named after "Phula" (flower) — fitting for a region of extraordinary forest flora.</p>
<p>RedHeart delivers flowers across Kandhamal — Phulbani (district HQ), Daringbadi area, Baliguda area, Raikia area, Tumudibandha area, and G. Udayagiri. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kandhamal (Phulbani), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Phulbani, Daringbadi, Baliguda, Raikia, Tumudibandha, G. Udayagiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha hill bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Daringbadi (Kashmir of Odisha) hill resort stay from Kandhamal?", answer: "Yes, Daringbadi (in Kandhamal district) is a scenic hill station with pine forests and cool climate. Seasonal hill bouquets for Daringbadi resort stays are available from Phulbani." },
      { question: "Can I get birthday flowers in Kandhamal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kandhamal (Phulbani) for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Kandhamal?", answer: "Yes, same-day delivery is available across Kandhamal for orders placed before 3 PM." }
    ]
  },

  "nayagarh": {
    cityName: "Nayagarh",
    metaTitle: "Flower Delivery in Nayagarh | Mahanadi Odisha | RedHeart",
    metaDescription: "Order flowers in Nayagarh, Odisha. Same-day delivery near Bhubaneswar belt & across Nayagarh. From ₹399.",
    h1: "Online Flower Delivery in Nayagarh",
    metaKeyword: "flower delivery nayagarh, online flowers nayagarh odisha, florist nayagarh, flowers nayagarh mahanadi satkosia tiger reserve bhubaneswar odisha temples puri heritage",
    footerContent: `
<h2>Flower Delivery in Nayagarh — Satkosia Gorge and the Mahanadi's Ancient Tigers of Odisha</h2>
<p>Nayagarh, on the Mahanadi River in central Odisha near Bhubaneswar, is the headquarters of Nayagarh district — a district of forests, the Satkosia Tiger Reserve, and ancient heritage. The Satkosia Tiger Reserve (named for the "Satkosia Gorge" — a spectacular 22 km river gorge where the Mahanadi cuts through the Eastern Ghats, with sheer 300-metre cliffs and a rare nesting site for the critically endangered gharial crocodile) is in Nayagarh and Angul districts. Satkosia is one of Odisha's finest wildlife reserves, with tigers, elephants, leopards, and the Mugger crocodile. The Nayagarh fort and the ancient Ugratara temple are heritage landmarks. Nayagarh district's forests produce significant bamboo and kendu leaf (used for bidi cigarettes) that are harvested by tribal communities. The district's paddy cultivation in the Mahanadi alluvial zone is the agricultural base.</p>
<p>RedHeart delivers flowers across Nayagarh — Main Market, Satkosia area, Odagaon area, Khandapara area, Daspalla area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nayagarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Satkosia, Odagaon, Khandapara, Daspalla, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Satkosia Tiger Reserve stay from Nayagarh?", answer: "Yes, the Satkosia Tiger Reserve (spectacular Mahanadi gorge, tigers, gharials) is in Nayagarh district. Seasonal bouquets for Satkosia resort gifting are available from Nayagarh." },
      { question: "Can I get birthday flowers in Nayagarh?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nayagarh for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Nayagarh?", answer: "Yes, same-day delivery is available across Nayagarh for orders placed before 3 PM." }
    ]
  },

  "kendrapara": {
    cityName: "Kendrapara",
    metaTitle: "Flower Delivery in Kendrapara | Bhitarkanika Odisha | RedHeart",
    metaDescription: "Order flowers in Kendrapara, Odisha. Same-day delivery near Bhitarkanika & across Kendrapara. From ₹399.",
    h1: "Online Flower Delivery in Kendrapara",
    metaKeyword: "flower delivery kendrapara, online flowers kendrapara odisha, florist kendrapara, flowers kendrapara bhitarkanika mangrove saltwater crocodile olive ridley turtle gahirmatha",
    footerContent: `
<h2>Flower Delivery in Kendrapara — Bhitarkanika Mangroves and Gahirmatha's Olive Ridley Turtle Beach</h2>
<p>Kendrapara, in the Mahanadi delta of coastal Odisha, is the headquarters of Kendrapara district — a district of extraordinary ecological importance at the Bay of Bengal coast. The Bhitarkanika National Park (in Kendrapara district) is India's second-largest mangrove ecosystem (after the Sundarbans) and one of Asia's most biodiverse coastal habitats — home to the largest concentration of saltwater crocodiles in India (India's largest estuarine crocodile population), the rare Irrawaddy dolphin, fishing cats, water monitor lizards, and hundreds of bird species. The Gahirmatha Marine Sanctuary (on the Kendrapara coast) is the world's largest known olive ridley sea turtle nesting site — where hundreds of thousands of olive ridley turtles come ashore in a spectacular mass nesting event (Arribada) each winter, one of nature's most extraordinary spectacles. The Mahanadi and Brahmani rivers meet in the district's delta.</p>
<p>RedHeart delivers flowers across Kendrapara — Main Market, Bhitarkanika area, Rajnagar area, Pattamundai area, Aul area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kendrapara, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bhitarkanika, Rajnagar, Pattamundai, Aul, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Bhitarkanika mangrove park visit from Kendrapara?", answer: "Yes, Bhitarkanika National Park (India's second-largest mangrove, saltwater crocodiles, Gahirmatha olive ridley turtle beach) is in Kendrapara. Seasonal bouquets for Bhitarkanika eco-resort stays are available." },
      { question: "Can I get birthday flowers in Kendrapara?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kendrapara for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Kendrapara?", answer: "Yes, same-day delivery is available across Kendrapara for orders placed before 3 PM." }
    ]
  },

  "sabarkantha": {
    cityName: "Sabarkantha",
    metaTitle: "Flower Delivery in Sabarkantha | Himmatnagar Gujarat | RedHeart",
    metaDescription: "Order flowers in Sabarkantha (Himmatnagar), Gujarat. Same-day delivery near Himmatnagar & across Sabarkantha. From ₹399.",
    h1: "Online Flower Delivery in Sabarkantha",
    metaKeyword: "flower delivery sabarkantha, online flowers sabarkantha himmatnagar gujarat, florist sabarkantha, flowers sabarkantha rajasthan border aravalli ider idar princely state granite",
    footerContent: `
<h2>Flower Delivery in Sabarkantha — Idar's Pink Stone Fortresses and the Aravalli's Gujarat-Rajasthan Foothills</h2>
<p>Sabarkantha (headquartered at Himmatnagar), in the Aravalli foothills of northeastern Gujarat at the Rajasthan border, is the headquarters of Sabarkantha district — a district of forested hills, ancient forts, and granite quarrying at the Gujarat-Rajasthan interface. The Idar area (in Sabarkantha district) was a significant princely state (Idar State) historically associated with the Rathore Rajputs and later the Maratha Gaekwad family, and the Idar Fort (a massive hilltop fort overlooking the Sabarmati's upper reaches) is one of Gujarat's most dramatic heritage structures. Sabarkantha district is Gujarat's major granite quarrying zone — the pink and grey granites quarried in the Aravalli hills here are exported across India and internationally. The district's tribal (Bhil, Garasia) communities live in the forest hills near the Rajasthan border. The upper Sabarmati River originates in the district's Aravalli ranges.</p>
<p>RedHeart delivers flowers across Sabarkantha — Himmatnagar (district HQ), Idar area, Vijaynagar area, Prantij area, Modasa area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sabarkantha (Himmatnagar), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Himmatnagar, Idar, Vijaynagar, Prantij, Modasa, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Navratri available in Sabarkantha?", answer: "Yes, Navratri Garba is enthusiastically celebrated in Sabarkantha. Marigold garlands and festive flower sets for the 9-night Garba are available for same-day delivery." },
      { question: "Can I get birthday flowers in Sabarkantha (Himmatnagar)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sabarkantha for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sabarkantha?", answer: "Yes, same-day delivery is available across Sabarkantha (Himmatnagar, Idar, Modasa) for orders placed before 3 PM." }
    ]
  },

  "banaskantha": {
    cityName: "Banaskantha",
    metaTitle: "Flower Delivery in Banaskantha | Palanpur Gujarat | RedHeart",
    metaDescription: "Order flowers in Banaskantha (Palanpur), Gujarat. Same-day delivery near Ambaji temple & across Banaskantha. From ₹399.",
    h1: "Online Flower Delivery in Banaskantha",
    metaKeyword: "flower delivery banaskantha, online flowers banaskantha palanpur gujarat, florist banaskantha, flowers banaskantha palanpur ambaji temple banas river aravalli diamond polishing",
    footerContent: `
<h2>Flower Delivery in Banaskantha — Palanpur's Diamond Trade, Ambaji's Sacred Peak, and the Banas River Headwaters</h2>
<p>Banaskantha (headquartered at Palanpur), in the Aravalli hills of northern Gujarat at the Rajasthan border, is the headquarters of Banaskantha district — and Palanpur is one of the world's most important diamond polishing and trading centres. The Palanpur diamond trade (exported to Antwerp, New York, Tel Aviv, and Hong Kong) has made the small Gujarat town's Jain community of diamond traders globally prominent — the Palanpuri Jains are estimated to control a significant share of the global rough diamond polishing business. The Ambaji Mata temple (at Ambaji, in Banaskantha district's Arasur Hills) is one of Gujarat's most sacred Shakti Pithas — the spot where Sati's navel is believed to have fallen — and draws millions of pilgrims for Navratri and Bhadrapada Purnima. The Banas River (not the same as Rajasthan's Banas) originates in the Aravalli range in the district. The Palanpur rose gardens (roses are a traditional horticultural crop) are noted locally.</p>
<p>RedHeart delivers flowers across Banaskantha — Palanpur (district HQ), Ambaji area, Deodar area, Tharad area, Vadgam area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banaskantha (Palanpur), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palanpur, Ambaji, Deodar, Tharad, Vadgam, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Ambaji temple Navratri available in Banaskantha?", answer: "Yes, the Ambaji Mata temple (one of Gujarat's most sacred Shakti Pithas, drawing millions for Navratri) is in Banaskantha. Marigold garlands and Devi puja flower sets for the Ambaji pilgrimage are available." },
      { question: "Can I get birthday flowers in Banaskantha (Palanpur)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Banaskantha for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Banaskantha?", answer: "Yes, same-day delivery is available across Banaskantha (Palanpur, Ambaji, Deodar) for orders placed before 3 PM." }
    ]
  },

  "eluru": {
    cityName: "Eluru",
    metaTitle: "Flower Delivery in Eluru | West Godavari AP | RedHeart",
    metaDescription: "Order flowers in Eluru, Andhra Pradesh. Same-day delivery near Godavari & across Eluru. From ₹399.",
    h1: "Online Flower Delivery in Eluru",
    metaKeyword: "flower delivery eluru, online flowers eluru andhra pradesh, florist eluru, flowers eluru west godavari kolleru lake sita matha puttaparthi carpet industry godavari",
    footerContent: `
<h2>Flower Delivery in Eluru — Kolleru Lake's Biodiversity and West Godavari's Coconut-Rice Delta</h2>
<p>Eluru (formerly the headquarters of West Godavari district, now headquarters of Eluru district), in the Godavari-Krishna delta of Andhra Pradesh, is a city of delta agriculture, freshwater biodiversity, and traditional crafts. Kolleru Lake (in Eluru district) — one of India's largest freshwater lakes and a Ramsar Wetland Site — is a world-class bird habitat supporting over 200 bird species and forming a critical breeding ground for painted storks, pelicans, and rare ducks. The lake is shared between the Krishna and Godavari delta systems and has been endangered by encroachment for aquaculture and agriculture. Eluru is known for traditional carpet-weaving (Eluru's hand-woven durries, or Eluru carpets, are prized across Andhra Pradesh and sold at state emporia) and for the ancient Sita Matha temple (a rare temple where Sita's descent into the earth is commemorated, near Sitanagaram village in Eluru district). The delta's coconut-rice-palm sugar economy is a cultural mainstay.</p>
<p>RedHeart delivers flowers across Eluru — Main Market, Kolleru area, Bhimavaram area, Tadepalligudem area, Kaikaluru area, and Station Road. Our range includes roses, marigolds, jasmine, and AP temple puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kolleru area, Bhimavaram, Tadepalligudem, Kaikaluru, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, AP temple puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Eluru?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Eluru for orders placed before 3 PM." },
      { question: "Are flowers for Telugu festivals available in Eluru?", answer: "Yes, Ugadi, Sankranti, and temple festivals have marigold garlands and jasmine sets available for same-day delivery in Eluru." },
      { question: "Do you deliver flowers same day in Eluru?", answer: "Yes, same-day delivery is available across Eluru for orders placed before 3 PM." }
    ]
  },

  "tiruppur": {
    cityName: "Tiruppur",
    metaTitle: "Flower Delivery in Tiruppur | Knitwear Capital Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Tiruppur, Tamil Nadu. Same-day delivery near Dharapuram & across Tiruppur. From ₹399.",
    h1: "Online Flower Delivery in Tiruppur",
    metaKeyword: "flower delivery tiruppur, online flowers tiruppur tamil nadu, florist tiruppur, flowers tiruppur knitwear garment capital india noyyal noyal river coimbatore export cotton",
    footerContent: `
<h2>Flower Delivery in Tiruppur — India's Knitwear Capital and the Noyyal River's Export Powerhouse</h2>
<p>Tiruppur, on the Noyyal River in the Coimbatore belt of Tamil Nadu, is the headquarters of Tiruppur district — and the undisputed knitwear capital of India. The Tiruppur cluster (Tiruppur and surrounding Coimbatore belt) produces over 90% of India's cotton knitwear exports — T-shirts, vests, socks, and undergarments for global brands including H&M, Gap, Marks & Spencer, Nike, and Adidas, with annual exports worth over ₹20,000 crore. The Noyyal River (a Cauvery tributary) once supported the cotton-dyeing industry but has faced severe pollution from the knitwear discharge; cleanup efforts are ongoing. Tiruppur is a gritty, fast-growing industrial city with a distinct entrepreneur culture (the "Tiruppur model" of small and medium enterprise clustering has been studied by industrial economists). The Kumaran Kundru hill and the Noyyal River ghats are local recreational spots.</p>
<p>RedHeart delivers flowers across Tiruppur — Main Market, Dharapuram area, Kangeyam area, Palladam area, Avinashi area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruppur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dharapuram, Kangeyam, Palladam, Avinashi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Tiruppur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Tiruppur for orders placed before 3 PM." },
      { question: "Are flowers for Tamil festivals available in Tiruppur?", answer: "Yes, Pongal, Deepavali, and temple festival flowers including marigold garlands and jasmine are available for same-day delivery in Tiruppur." },
      { question: "Do you deliver flowers same day in Tiruppur?", answer: "Yes, same-day delivery is available across Tiruppur for orders placed before 3 PM." }
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
