// Batch 46 — 15 cities:
// Bihar: East Champaran (Motihari), Gopalganj, Saran (Chhapra), Kaimur (Bhabua)
// UP: Sambhal, Amroha, Mainpuri, Auraiya
// Telangana: Yadadri Bhuvanagiri, Sangareddy, Siddipet
// Karnataka: Gadag, Chikkaballapur
// Jharkhand: Simdega, Pakur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "east-champaran": {
    cityName: "East Champaran",
    metaTitle: "Flower Delivery in East Champaran | Motihari Bihar | RedHeart",
    metaDescription: "Order flowers in East Champaran (Motihari), Bihar. Same-day delivery near Mahatma Gandhi's Champaran satyagraha site. From ₹399.",
    h1: "Online Flower Delivery in East Champaran",
    metaKeyword: "flower delivery east champaran, online flowers motihari bihar, florist east champaran, flowers motihari gandhi champaran satyagraha valmiki tiger reserve gandak",
    footerContent: `
<h2>Flower Delivery in East Champaran — Gandhi's First Indian Satyagraha on the Nepal Terai</h2>
<p>East Champaran (headquartered at Motihari), in the north Bihar Terai at the Nepal border, is one of India's most historically significant districts — it was here that Mahatma Gandhi launched the Champaran Satyagraha in 1917, his first civil disobedience campaign on Indian soil, against the indigo planters' forced cultivation system (tinkathia system) imposed on peasant farmers. The campaign, which Gandhi won entirely by non-violent resistance, is considered the proving ground of his political philosophy and the beginning of his transformation into the Mahatma. A Gandhi Memorial and ashram at Bhitiharwa marks the site. Motihari, the district headquarters, was George Orwell's birthplace (1903). The Valmiki Tiger Reserve (Valmiki National Park) in the Gandak-Ghaghara forest belt is one of India's important tiger habitats.</p>
<p>RedHeart delivers flowers across East Champaran — Main Market, Motihari Station Road, Bettiah Road, Raxaul area (Nepal border town), and Areraj area. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">East Champaran (Motihari), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Motihari, Station Road, Bettiah Road, Raxaul, Areraj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in East Champaran (Motihari)?", answer: "Yes, Chhath Puja is celebrated with extraordinary fervour on the Gandak river ghats in East Champaran. Lotus, marigold, and arghya flower sets for the celebrations are available." },
      { question: "Can I get flowers for a Gandhi memorial visit from East Champaran?", answer: "Yes, the Bhitiharwa Gandhi Ashram and Memorial (Champaran Satyagraha site) is in East Champaran. Flower tributes for heritage visits can be delivered across the district." },
      { question: "Do you deliver flowers same day in East Champaran?", answer: "Yes, same-day delivery is available across East Champaran for orders placed before 3 PM." }
    ]
  },

  "gopalganj": {
    cityName: "Gopalganj",
    metaTitle: "Flower Delivery in Gopalganj | Bihar | RedHeart",
    metaDescription: "Order flowers in Gopalganj, Bihar. Same-day delivery near Chhapra & across Gopalganj. From ₹399.",
    h1: "Online Flower Delivery in Gopalganj",
    metaKeyword: "flower delivery gopalganj, online flowers gopalganj bihar, florist gopalganj, flowers gopalganj gandak saran bhojpuri tharu nepal border",
    footerContent: `
<h2>Flower Delivery in Gopalganj — Gandak River District in the Bhojpuri-Tharu Terai Belt</h2>
<p>Gopalganj, in the western Saran division of Bihar on the Nepal border, is a district on the Gandak River plains — the transition zone between the Gangetic alluvial belt and the Nepal Terai. The district has a significant Tharu community (a Terai indigenous group found across the Nepal-UP-Bihar border belt) alongside the dominant Bhojpuri-speaking agricultural community. Gopalganj is known politically as the home of the Lalu Prasad Yadav family — former Chief Minister of Bihar and a major figure in Mandal politics and social justice movements. The Daudnagar Ghat on the Gandak and Chhapra's connection (30 km away) mark the cultural neighbourhood. Chhath Puja on the Gandak's banks is the district's defining annual religious event.</p>
<p>RedHeart delivers flowers across Gopalganj — Main Market, Gandhi Chowk, Siwan Road, Chhapra Road, Station Road, and Bhore area. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopalganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gandhi Chowk, Siwan Road, Chhapra Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Gopalganj?", answer: "Yes, Chhath Puja on the Gandak ghats is the biggest celebration in Gopalganj. Lotus, marigold, and arghya flower sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Gopalganj?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Gopalganj for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Gopalganj?", answer: "Yes, same-day delivery is available across Gopalganj for orders placed before 3 PM." }
    ]
  },

  "saran": {
    cityName: "Saran",
    metaTitle: "Flower Delivery in Saran | Chhapra Bihar | RedHeart",
    metaDescription: "Order flowers in Saran (Chhapra), Bihar. Same-day delivery near Ganga-Ghaghra confluence & across Saran. From ₹399.",
    h1: "Online Flower Delivery in Saran",
    metaKeyword: "flower delivery saran, online flowers chhapra bihar, florist saran chhapra, flowers saran chhapra ganga ghaghra triveni doab bhojpuri",
    footerContent: `
<h2>Flower Delivery in Saran — Chhapra at the Sacred Triveni Confluence of the Bhojpuri Heartland</h2>
<p>Saran district, headquartered at Chhapra, is in the Bhojpuri heartland of western Bihar at the confluence (Triveni) of the Ganga, Ghaghra (Sarayu), and Gandak rivers — a site of great religious significance in the Hindu tradition. Chhapra is the largest city in this fertile doab (inter-river land), with a history as a major mart on the Ganga trade route. The district is an important centre of Bhojpuri cultural identity — Bhojpuri cinema, music, and literature have roots in the Saran-Siwan-Chapra belt. The Amnaur Durga temple and the Chhapra Ganga ghats (particularly during Chhath Puja) are major pilgrimage draws. Saran was the birthplace of Shri Krishna Sinha (Bihar's first Chief Minister), one of the founding figures of independent Bihar's administration.</p>
<p>RedHeart delivers flowers across Saran — Chhapra Main Market, Ganga Ghat area, Siwan Road, Patna Road, Civil Lines, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saran (Chhapra), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhapra Main Market, Ganga Ghat, Siwan Road, Patna Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, lotus, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Chhapra (Saran)?", answer: "Yes, Chhath Puja on the Ganga-Ghaghra ghats of Chhapra is the district's biggest religious event. Lotus, marigold, and arghya flower sets for the sunrise and sunset rituals are available." },
      { question: "Can I get flowers for a wedding in Chhapra?", answer: "Yes, rose garlands, marigold arrangements, and wedding bouquets are available for same-day delivery across Chhapra (Saran)." },
      { question: "Do you deliver flowers same day in Saran (Chhapra)?", answer: "Yes, same-day delivery is available across Saran and Chhapra for orders placed before 3 PM." }
    ]
  },

  "kaimur": {
    cityName: "Kaimur",
    metaTitle: "Flower Delivery in Kaimur | Bhabua Bihar | RedHeart",
    metaDescription: "Order flowers in Kaimur (Bhabua), Bihar. Same-day delivery near Mundeshwari temple & across Kaimur. From ₹399.",
    h1: "Online Flower Delivery in Kaimur",
    metaKeyword: "flower delivery kaimur, online flowers bhabua bihar, florist kaimur bhabua, flowers kaimur mundeshwari temple karmanasa kaimur range vindhya",
    footerContent: `
<h2>Flower Delivery in Kaimur — Mundeshwari Temple on India's Oldest Active Temple Hill</h2>
<p>Kaimur district, headquartered at Bhabua in the southern fringe of Bihar along the Vindhya-Kaimur Range, is home to one of India's most extraordinary archaeological and religious sites: the Mundeshwari Devi temple on Mundeshwari Hill near Bhabua — widely believed to be the oldest continuously worshipped temple in India, with inscriptions dated to 108 CE (which are among the earliest-known dated stone inscriptions in the subcontinent). The temple, built in the Panchayatana (five-shrine) plan on a rocky hilltop of the Kaimur Range, is dedicated to a form of Shakti and Shiva. The Kaimur Hill range (part of the Vindhyan plateau) has scenic forests and the Karamnasa River (associated with Puranic legend as a "curse river" — its water is considered inauspicious). The area borders UP (Mirzapur) and Jharkhand.</p>
<p>RedHeart delivers flowers across Kaimur — Bhabua Main Market, Mundeshwari Temple Road, Chainpur area, Mohania area, and Station Road. Our range includes roses, marigolds, Shakti puja flowers, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaimur (Bhabua), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhabua Main Market, Mundeshwari Temple Road, Chainpur, Mohania, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, red hibiscus, roses, Shakti puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Mundeshwari Devi temple puja available from Kaimur?", answer: "Yes, the Mundeshwari Devi temple (one of India's oldest active temples on the Kaimur Hill, dated 108 CE) is a major pilgrimage site. Marigold, red hibiscus, and Shakti puja flowers for the temple are available from Bhabua." },
      { question: "Can I get flowers for Navratri in Kaimur?", answer: "Yes, Navratri is celebrated with great devotion in Kaimur — the Mundeshwari temple draws large pilgrimages. Seasonal Shakti flower arrangements are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Kaimur?", answer: "Yes, same-day delivery is available across Kaimur and Bhabua for orders placed before 3 PM." }
    ]
  },

  "sambhal": {
    cityName: "Sambhal",
    metaTitle: "Flower Delivery in Sambhal | Chandausi UP | RedHeart",
    metaDescription: "Order flowers in Sambhal (Chandausi), UP. Same-day delivery near Kalki Vishnu temple & across Sambhal. From ₹399.",
    h1: "Online Flower Delivery in Sambhal",
    metaKeyword: "flower delivery sambhal, online flowers sambhal uttar pradesh, florist sambhal chandausi, flowers sambhal kalki vishnu jama masjid brass brassware rohilkhand",
    footerContent: `
<h2>Flower Delivery in Sambhal — Kalki Vishnu's Prophesied City and the Brass-Ware Capital of the Doab</h2>
<p>Sambhal, in the Rampur-Moradabad doab of western Uttar Pradesh, is historically one of the most layered cities of the western Gangetic plains. According to the Puranas, Sambhal (or Shambhala) is the city where Kalki — the tenth and future avatar of Vishnu — will be born at the end of the Kali Yuga. The Kalki Vishnu temple in Sambhal is a significant Hindu pilgrimage site for this reason. The city also has the famous Jama Masjid of Sambhal (Shahi Jama Masjid) — a mosque built in the Mughal period on the site of a disputed Hindu temple (the subject of legal controversy in recent years). Sambhal is also renowned for its traditional brassware, horn-crafts, and wooden handicrafts — GI-tagged crafts with centuries of heritage. The district was created in 2011 by carving it from Moradabad.</p>
<p>RedHeart delivers flowers across Sambhal — Main Market, Chandausi area, Moradabad Road, Badaun Road, Asmoli area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sambhal, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Chandausi, Moradabad Road, Badaun Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kalki Vishnu temple puja available in Sambhal?", answer: "Yes, the Kalki Vishnu temple in Sambhal (the city mentioned in Puranas as the future birthplace of Kalki avatar) is a significant pilgrimage site. Marigold and Vishnu puja sets are available." },
      { question: "Can I get birthday flowers in Sambhal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sambhal for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sambhal?", answer: "Yes, same-day delivery is available across Sambhal for orders placed before 3 PM." }
    ]
  },

  "amroha": {
    cityName: "Amroha",
    metaTitle: "Flower Delivery in Amroha | JP Nagar UP | RedHeart",
    metaDescription: "Order flowers in Amroha (JP Nagar), UP. Same-day delivery near Amroha's Urdu literary heritage & across Amroha. From ₹399.",
    h1: "Online Flower Delivery in Amroha",
    metaKeyword: "flower delivery amroha, online flowers amroha uttar pradesh, florist amroha jp nagar, flowers amroha urdu poetry drums rohilkhand doab",
    footerContent: `
<h2>Flower Delivery in Amroha — Nawab Sahib's Taluqdari Town and the Urdu Poets' Crossroads</h2>
<p>Amroha (officially Jyotiba Phule Nagar, or JP Nagar), in the Rohilkhand division of western Uttar Pradesh between Moradabad and Ghaziabad, is a town of deep cultural, literary, and mercantile heritage. Amroha is known for its centuries-old association with the Shia Muslim nawab (taluqdari) tradition and has produced remarkable Urdu poets — the most famous being the lyricist and shayar Kaifi Azmi (born in nearby Mijwan, Azamgarh, but associated with the Amroha Shia milieu). The town is also renowned for its drums (dhol) and drumming tradition — the Amroha drum-makers (dhol-wallahs) have supplied ceremonial drums for generations. The Taluqdari Imambara and the Jama Masjid are historic landmarks. Amroha's sugarcane and potato cultivation define the rural economy.</p>
<p>RedHeart delivers flowers across Amroha — Main Market, Gandhi Road, Moradabad Road, Hapur Road, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amroha (JP Nagar), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gandhi Road, Moradabad Road, Hapur Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are roses available for Eid celebrations in Amroha?", answer: "Yes, Amroha has a significant Muslim community with a rich Shia tradition. Rose garlands and festive bouquets for Eid, Muharram, and Milad are available in Amroha." },
      { question: "Can I get birthday flowers in Amroha?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Amroha for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Amroha?", answer: "Yes, same-day delivery is available across Amroha for orders placed before 3 PM." }
    ]
  },

  "mainpuri": {
    cityName: "Mainpuri",
    metaTitle: "Flower Delivery in Mainpuri | UP | RedHeart",
    metaDescription: "Order flowers in Mainpuri, UP. Same-day delivery near Etawah & across Mainpuri. From ₹399.",
    h1: "Online Flower Delivery in Mainpuri",
    metaKeyword: "flower delivery mainpuri, online flowers mainpuri uttar pradesh, florist mainpuri, flowers mainpuri etawah doab yamuna chambal yadav belt",
    footerContent: `
<h2>Flower Delivery in Mainpuri — Yadav Political Heartland in the Yamuna-Chambal Doab</h2>
<p>Mainpuri, in the central Yamuna-Chambal doab of Uttar Pradesh, is a district with a strong Yadav community and political identity — it has been the traditional stronghold of the Mulayam Singh Yadav family (the Samajwadi Party patriarch was born in nearby Saifai) and thus one of the most electorally significant constituencies in UP's OBC politics. The ancient Sheetal Devi temple and the Mainpuri Fort ruins (a mediaeval taluqdari fortification) are historical landmarks. The district is known for fine Mainpuri tarkashi (silver-inlay work on wood) — a traditional handicraft. The Isan River (a Yamuna tributary) and the Doab plains support wheat and mustard cultivation. Mainpuri is also notable as one of the talismanic constituencies in Samajwadi Party history.</p>
<p>RedHeart delivers flowers across Mainpuri — Main Market, Agra Road, Etawah Road, Shikohabad area, Kishni area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mainpuri, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Agra Road, Etawah Road, Shikohabad, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a wedding in Mainpuri?", answer: "Yes, rose garlands, marigold arrangements, and wedding bouquets are available for same-day delivery across Mainpuri." },
      { question: "Are flowers for Holi available in Mainpuri?", answer: "Yes, Holi is celebrated with great festivity in Mainpuri. Seasonal marigold and rose arrangements for the festival of colours are available." },
      { question: "Do you deliver flowers same day in Mainpuri?", answer: "Yes, same-day delivery is available across Mainpuri for orders placed before 3 PM." }
    ]
  },

  "auraiya": {
    cityName: "Auraiya",
    metaTitle: "Flower Delivery in Auraiya | UP | RedHeart",
    metaDescription: "Order flowers in Auraiya, UP. Same-day delivery near Etawah & across Auraiya district. From ₹399.",
    h1: "Online Flower Delivery in Auraiya",
    metaKeyword: "flower delivery auraiya, online flowers auraiya uttar pradesh, florist auraiya, flowers auraiya yamuna kanpur doab industrial petrochemicals",
    footerContent: `
<h2>Flower Delivery in Auraiya — Yamuna Petrochemical Hub in the Heart of the Kanpur Doab</h2>
<p>Auraiya, in the Kanpur doab of southern Uttar Pradesh on the Yamuna's bank, is the headquarters of Auraiya district (carved from Etawah in 1997). The district is marked by a significant industrial presence — the Indian Oil Corporation's massive Bibipur LPG bottling plant and the IFFCO fertilizer complex at Phulpur (Auraiya) are among the key petrochemical and agro-industrial facilities in the Gangetic belt. The Yamuna's broad floodplain supports mustard, wheat, and potato farming. The Auraiya district hosts the ancient Siddha Mata temple and the Brahmavarta (Bithoor-Kanpur) cultural belt nearby. The Chambal River joins the Yamuna on the Etawah-Auraiya border, creating a biodiversity-rich ravine landscape.</p>
<p>RedHeart delivers flowers across Auraiya — Main Market, Kanpur Road, Etawah Road, Dibiyapur area, Achalda area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Auraiya, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kanpur Road, Etawah Road, Dibiyapur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Auraiya?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Auraiya for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Auraiya?", answer: "Yes, Diwali marigold and rose arrangements are available for same-day delivery in Auraiya." },
      { question: "Do you deliver flowers same day in Auraiya?", answer: "Yes, same-day delivery is available across Auraiya for orders placed before 3 PM." }
    ]
  },

  "yadadri-bhuvanagiri": {
    cityName: "Yadadri Bhuvanagiri",
    metaTitle: "Flower Delivery in Yadadri Bhuvanagiri | Telangana | RedHeart",
    metaDescription: "Order flowers in Yadadri Bhuvanagiri, Telangana. Same-day delivery near Yadadri Lakshmi Narasimha temple. From ₹399.",
    h1: "Online Flower Delivery in Yadadri Bhuvanagiri",
    metaKeyword: "flower delivery yadadri bhuvanagiri, online flowers yadadri telangana, florist yadadri, flowers yadadri lakshmi narasimha temple bhuvanagiri coal mines",
    footerContent: `
<h2>Flower Delivery in Yadadri Bhuvanagiri — The Sacred Hill of Lakshmi Narasimha and the Coal Mines District</h2>
<p>Yadadri Bhuvanagiri, a newly created district in Telangana east of Hyderabad, has two distinct faces. Yadadri (Yadagirigutta) — the spectacular hilltop temple of Sri Lakshmi Narasimha Swamy — is one of Telangana's most sacred Vaishnava shrines, traditionally known as Yadava Giri (the hill associated with Yadavas and thus with Lord Krishna's lineage). The temple, dramatically sited on a 600-foot granite hill, was massively redeveloped under the Telangana Rashtra Samithi government into one of South India's most elaborate new temple complexes (completed ~2022), drawing thousands of pilgrims daily from Hyderabad and beyond. Bhuvanagiri (Bhongir), a twin administrative centre, has a spectacular medieval rock fortress (Bhongir Fort) perched on a single massive granite monolith — a unique geological and heritage feature. The district also has the Ramagundam (Peddapalli) coal belt nearby.</p>
<p>RedHeart delivers flowers across Yadadri Bhuvanagiri — Yadagirigutta temple area, Bhuvanagiri (Bhongir), Nalgonda Road, Hyderabad Road, and Ramannapeta area. Our range includes lotus, marigolds, roses, and Vaishnava puja sets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadadri Bhuvanagiri, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadagirigutta, Bhuvanagiri (Bhongir), Nalgonda Road, Hyderabad Road, Ramannapeta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, Narasimha puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Yadadri Sri Lakshmi Narasimha Swamy temple puja available?", answer: "Yes, lotus, marigold, and Vaishnava puja sets for the Yadadri Lakshmi Narasimha Swamy hilltop temple (one of Telangana's most important new temple complexes) are available for same-day delivery." },
      { question: "Can I get flowers for Vaikunta Ekadasi in Yadadri?", answer: "Yes, Vaikunta Ekadasi at the Yadadri Narasimha Swamy temple is one of the biggest pilgrimages in Telangana. Marigold garlands and Vaishnava festival arrangements are available." },
      { question: "Do you deliver flowers same day in Yadadri Bhuvanagiri?", answer: "Yes, same-day delivery is available across Yadadri Bhuvanagiri for orders placed before 3 PM." }
    ]
  },

  "sangareddy": {
    cityName: "Sangareddy",
    metaTitle: "Flower Delivery in Sangareddy | Telangana | RedHeart",
    metaDescription: "Order flowers in Sangareddy, Telangana. Same-day delivery near Hyderabad suburbs & across Sangareddy. From ₹399.",
    h1: "Online Flower Delivery in Sangareddy",
    metaKeyword: "flower delivery sangareddy, online flowers sangareddy telangana, florist sangareddy, flowers sangareddy manair medak pharma industrial hyderabad",
    footerContent: `
<h2>Flower Delivery in Sangareddy — Hyderabad's Pharmaceutical-Industrial Western Corridor</h2>
<p>Sangareddy, northwest of Hyderabad in the Medak-Sangareddy corridor, is the headquarters of Sangareddy district — one of Telangana's fastest-growing peri-urban districts due to its proximity to Hyderabad and its location in the booming Patancheru-Bollaram-Zaheerabad industrial belt (the Patancheru MIDC industrial estate has one of the highest concentrations of pharmaceutical manufacturing plants in Asia). The Manair River and the Manjira River are the key waterways of the district. The Sangareddy Fort (a Qutb Shahi-era fortification with a significant water tank) is a heritage feature. The Aliyabad Pichkunta lake and the Singur Dam reservoir (Hyderabad's water supply) are major landmarks. With the new Outer Ring Road and highway access, Sangareddy has become a significant residential and industrial suburb of Hyderabad.</p>
<p>RedHeart delivers flowers across Sangareddy — Main Market, Hyderabad Road, Zaheerabad Road, Patancheru area, Gummadidala area, and Station Road. Our range includes roses, marigolds, seasonal Telangana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangareddy, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hyderabad Road, Zaheerabad Road, Patancheru, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Telangana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for office gifting available in Sangareddy?", answer: "Yes, the Sangareddy-Patancheru-Bollaram pharma and industrial belt has many corporate offices. Flower arrangements for office gifting, employee recognition, and corporate events are available." },
      { question: "Can I get birthday flowers in Sangareddy?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sangareddy for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sangareddy?", answer: "Yes, same-day delivery is available across Sangareddy for orders placed before 3 PM." }
    ]
  },

  "siddipet": {
    cityName: "Siddipet",
    metaTitle: "Flower Delivery in Siddipet | Telangana | RedHeart",
    metaDescription: "Order flowers in Siddipet, Telangana. Same-day delivery near Kondapochamma Sagar & across Siddipet. From ₹399.",
    h1: "Online Flower Delivery in Siddipet",
    metaKeyword: "flower delivery siddipet, online flowers siddipet telangana, florist siddipet, flowers siddipet kondapochamma sagar irrigation telangana mission",
    footerContent: `
<h2>Flower Delivery in Siddipet — Kondapochamma Sagar and the Kaleshwaram Irrigation Miracle District</h2>
<p>Siddipet, in north-central Telangana, is the headquarters of Siddipet district — a district that gained significant stature as the home constituency of K. T. Rama Rao (KTR), Telangana's powerful IT minister and Bharat Rashtra Samithi leader. The district is directly served by the Kondapochamma Sagar reservoir — a major storage reservoir in the Kaleshwaram Lift Irrigation Scheme (the world's largest multi-stage lift irrigation project, completed 2019, which pumps water from the Godavari River across five reservoirs and 150+ km of tunnels and canals to irrigate Telangana's dry Deccan plateau). The Siddipet-Medak belt has historically been a stronghold of Gond and Lambada (Banjara) tribal communities. The local handloom sector (Pochampally/Ikat sarees from nearby Pochampally, Bhoodan district) has cultural significance.</p>
<p>RedHeart delivers flowers across Siddipet — Main Market, Hyderabad Road, Medak Road, Husnabad area, Gajwel area, and Station Road. Our range includes roses, marigolds, seasonal Telangana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siddipet, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hyderabad Road, Medak Road, Husnabad, Gajwel, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Telangana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Bonalu festival available in Siddipet?", answer: "Yes, Bonalu (the Telangana Shakti festival) is celebrated widely in Siddipet. Marigold garlands and red flower arrangements for the goddess offerings are available." },
      { question: "Can I get birthday flowers in Siddipet?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Siddipet for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Siddipet?", answer: "Yes, same-day delivery is available across Siddipet for orders placed before 3 PM." }
    ]
  },

  "gadag": {
    cityName: "Gadag",
    metaTitle: "Flower Delivery in Gadag | Trikuteshwara Karnataka | RedHeart",
    metaDescription: "Order flowers in Gadag-Betageri, Karnataka. Same-day delivery near Trikuteshwara temples & across Gadag. From ₹399.",
    h1: "Online Flower Delivery in Gadag",
    metaKeyword: "flower delivery gadag, online flowers gadag karnataka, florist gadag, flowers gadag trikuteshwara chalukya temple betageri cotton dharwad",
    footerContent: `
<h2>Flower Delivery in Gadag — Chalukya Temple Clusters and North Karnataka's Cotton Economy</h2>
<p>Gadag-Betageri (twin cities forming the district headquarters of Gadag district), in the north Karnataka Maidan, is one of Karnataka's most extraordinary heritage districts. Gadag has a remarkable concentration of 11th-12th century Western Chalukya (Kalyani Chalukya) temples that represent the apex of the Deccan's Chalukyan architectural tradition — the Trikuteshwara temple complex (dedicated to Shiva with three shrines), the Veeranarayan temple, and the Brahmadeva pillar are among the finest examples of the intricate "Gadag style" or "Chalukyan style" of stone carving (the distinctive honeycomb-like ceilings, sculptural panels, and star-shaped platforms). The district is in north Karnataka's cotton-growing belt (dryland cotton on black cotton soil) and has a traditional handloom sector (Gadag sarees are a distinct variety). Gadag is also known as the birthplace of the Kannada Vachana tradition (12th century Basavanna's Lingayat reform movement had strong roots in this region).</p>
<p>RedHeart delivers flowers across Gadag — Main Market, Temple Road, Dharwad Road, Hubli Road, Betageri area, and Station Road. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gadag, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Temple Road, Dharwad Road, Hubli Road, Betageri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Trikuteshwara temple puja available in Gadag?", answer: "Yes, marigold, bilva (Shiva puja leaves and flowers), and seasonal Karnataka puja sets for the Chalukyan-era Trikuteshwara temple complex in Gadag are available for same-day delivery." },
      { question: "Can I get flowers for Ugadi in Gadag?", answer: "Yes, Ugadi (Karnataka New Year) is celebrated in Gadag. Seasonal bouquets and marigold arrangements for the festival are available." },
      { question: "Do you deliver flowers same day in Gadag?", answer: "Yes, same-day delivery is available across Gadag for orders placed before 3 PM." }
    ]
  },

  "chikkaballapur": {
    cityName: "Chikkaballapur",
    metaTitle: "Flower Delivery in Chikkaballapur | Nandi Hills Karnataka | RedHeart",
    metaDescription: "Order flowers in Chikkaballapur, Karnataka. Same-day delivery near Nandi Hills & across Chikkaballapur. From ₹399.",
    h1: "Online Flower Delivery in Chikkaballapur",
    metaKeyword: "flower delivery chikkaballapur, online flowers chikkaballapur karnataka, florist chikkaballapur, flowers chikkaballapur nandi hills bangalore rural horticulture floriculture",
    footerContent: `
<h2>Flower Delivery in Chikkaballapur — Nandi Hills Floriculture District and Bengaluru's Green Hinterland</h2>
<p>Chikkaballapur, in the Deccan plateau of southern Karnataka northeast of Bengaluru, is the headquarters of Chikkaballapur district — one of Karnataka's most important floriculture districts. The district's mild climate (Deccan semi-arid with cool nights) makes it ideal for growing rose, carnation, gerbera, and chrysanthemum for the commercial flower market — Chikkaballapur's flowers supply a large portion of Bengaluru's flower markets and are exported. The district is also known for its silk saree weaving at Muddenahalli (birthplace of Sir M. Visvesvaraya, the legendary engineer and Bharat Ratna) and at Sidlaghatta (a major sericulture centre). Nandi Hills (Nandidurga), the region's crown jewel, is a dramatic 1,478-metre hilltop (the site of Tipu Sultan's summer fortress) with extraordinary cool-season mist and sunrise views, just 60 km from Bengaluru.</p>
<p>RedHeart delivers flowers across Chikkaballapur — Main Market, Bengaluru Road, Nandi Hills area, Sidlaghatta area, Gudibanda area, and Station Road. Our range includes roses, gerberas, carnations, seasonal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chikkaballapur, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bengaluru Road, Nandi Hills area, Sidlaghatta, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, gerberas, carnations, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Nandi Hills resort anniversary from Chikkaballapur?", answer: "Yes, Nandi Hills is in Chikkaballapur district. Romantic rose bouquets and anniversary arrangements for the hilltop resorts and homestays can be delivered from Chikkaballapur." },
      { question: "Are exotic flowers like gerbera and carnation available in Chikkaballapur?", answer: "Yes, Chikkaballapur is a major floriculture district. Gerbera, carnation, chrysanthemum, and exotic roses grown locally are available in Chikkaballapur." },
      { question: "Do you deliver flowers same day in Chikkaballapur?", answer: "Yes, same-day delivery is available across Chikkaballapur for orders placed before 3 PM." }
    ]
  },

  "simdega": {
    cityName: "Simdega",
    metaTitle: "Flower Delivery in Simdega | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Simdega, Jharkhand. Same-day delivery near Odisha border & across Simdega. From ₹399.",
    h1: "Online Flower Delivery in Simdega",
    metaKeyword: "flower delivery simdega, online flowers simdega jharkhand, florist simdega, flowers simdega oraon tribal christianity ranchi south odisha chhattisgarh",
    footerContent: `
<h2>Flower Delivery in Simdega — Tribal Christian Oraon Country at Jharkhand's Odisha-Chhattisgarh Triple Junction</h2>
<p>Simdega, in the southern fringe of Jharkhand near the Odisha-Chhattisgarh border, is the headquarters of Simdega district — one of Jharkhand's smallest, most forested, and most tribal districts in the Chota Nagpur Plateau's southern extension. The district has a predominantly Oraon (Kurukh-speaking) tribal population alongside Ho and Munda communities, with a very high proportion of Christian converts (a result of Catholic and Protestant missionary activity in the 19th-20th centuries — Simdega is one of Jharkhand's most heavily Christianised districts). The Karo River and dense sal-bamboo forests define the landscape. The district is connected to the Ranchi-Rourkela National Highway. The Anjanwali waterfall (Simdega) is a scenic forest tourism spot.</p>
<p>RedHeart delivers flowers across Simdega — Main Market, Ranchi Road, Gumla Road, Rourkela Road, Station Road, and Thethaitangar area. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Simdega, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranchi Road, Gumla Road, Rourkela Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Christmas available in Simdega?", answer: "Yes, Simdega has one of Jharkhand's highest Christian tribal populations. Christmas roses, white lilies, and festive flower arrangements are available for the season." },
      { question: "Can I get flowers for Sarhul in Simdega?", answer: "Yes, Sarhul (the Oraon-Munda-Ho tribal spring festival welcoming the Sal flowers) is celebrated in Simdega. Seasonal flower sets for the forest festival are available." },
      { question: "Do you deliver flowers same day in Simdega?", answer: "Yes, same-day delivery is available across Simdega for orders placed before 3 PM." }
    ]
  },

  "pakur": {
    cityName: "Pakur",
    metaTitle: "Flower Delivery in Pakur | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Pakur, Jharkhand. Same-day delivery near Rajmahal Hills & across Pakur. From ₹399.",
    h1: "Online Flower Delivery in Pakur",
    metaKeyword: "flower delivery pakur, online flowers pakur jharkhand, florist pakur, flowers pakur rajmahal hills santhali santhal parganas stone quarry ganga",
    footerContent: `
<h2>Flower Delivery in Pakur — Rajmahal Hills Santhali Belt at the Ganga's Northern Bend</h2>
<p>Pakur, in the extreme northeast of Jharkhand on the Ganga's bend near the West Bengal border, is the headquarters of Pakur district — a district in the Santhal Parganas region characterised by the dramatic Rajmahal Hills (a Cretaceous basalt trap formation) and significant Santhali, Paharia, and Mal Paharia tribal populations. The Rajmahal Hills are of immense geological interest (they contain some of India's earliest known continental basalt flows, Mesozoic flora-bearing coal and carbonaceous shales, and the famous Rajmahal fossils of Jurassic plants). The district has extensive stone quarrying (Rajmahal trap is used in construction). Pakur is one of the most flood-prone districts of Jharkhand due to the Brahmani (not Odisha's Brahmani but a local Bihar-Jharkhand tributary) and the Ganga influence. The Moti Jharna waterfall is a local scenic attraction.</p>
<p>RedHeart delivers flowers across Pakur — Main Market, Dumka Road, Sahibganj Road, Amrapara area, Maheshpur area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pakur, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dumka Road, Sahibganj Road, Amrapara, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sohrai and Karma festival flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sohrai (Santhal harvest festival) available in Pakur?", answer: "Yes, Sohrai and Karma (the Santhali tribal harvest festivals) are celebrated in Pakur. Seasonal flower sets for these Jharkhand tribal celebrations are available." },
      { question: "Can I get birthday flowers in Pakur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Pakur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Pakur?", answer: "Yes, same-day delivery is available across Pakur for orders placed before 3 PM." }
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
