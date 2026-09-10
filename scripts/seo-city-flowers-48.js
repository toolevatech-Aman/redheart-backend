// Batch 48 — 15 cities:
// Bihar: Munger, Begusarai, Bhojpur (Ara), Madhepura
// Jharkhand: West Singhbhum (Chaibasa), Koderma, Chatra, Latehar
// Karnataka: Koppal, Yadgir, Haveri
// UP: Hapur, Shamli, Etah, Kasganj

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "munger": {
    cityName: "Munger",
    metaTitle: "Flower Delivery in Munger | Bihar School of Yoga | RedHeart",
    metaDescription: "Order flowers in Munger, Bihar. Same-day delivery near Bihar School of Yoga & across Munger. From ₹399.",
    h1: "Online Flower Delivery in Munger",
    metaKeyword: "flower delivery munger, online flowers munger bihar, florist munger, flowers munger bihar school of yoga satyananda ganga mir qasim nawab",
    footerContent: `
<h2>Flower Delivery in Munger — Global Yoga Capital and the Nawab's Ganga Fortress Town</h2>
<p>Munger (Monghyr), on a dramatic rocky promontory on the Ganga's south bank in eastern Bihar, is a city of layered history and global spiritual significance. The Munger Fort (built on the Ganga cliffs in the 12th century CE, reinforced by the Nawabs of Bengal and the British) is one of Bihar's most imposing monuments. The city was the capital of the notorious Nawab Mir Qasim of Bengal in the 18th century — and the site of his decisive defeat by the British East India Company. Today, Munger is world-famous as the home of the Bihar School of Yoga (established 1963 by Swami Satyananda Saraswati) — one of the world's most respected yoga gurukuls, attracting yoga teachers and practitioners from across the globe. The "Yoga Capital of India" designation draws thousands of yoga enthusiasts annually. The Ganga Darshan Ashram and the Sitakund hot springs (natural hot water spring on the Ganga bank) are notable sites.</p>
<p>RedHeart delivers flowers across Munger — Main Market, Bihar School of Yoga area, Ganga Ghat, Jamalpur area, Kharik area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Munger, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bihar School of Yoga, Ganga Ghat, Jamalpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, yoga ashram meditation flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Bihar School of Yoga ashram available in Munger?", answer: "Yes, the Bihar School of Yoga (one of the world's leading yoga institutes) is in Munger. Lotus, white flowers, and meditation-themed arrangements for ashram stays and yoga retreats can be delivered." },
      { question: "Are flowers for Chhath Puja available in Munger?", answer: "Yes, Chhath Puja on the Ganga ghats of Munger is celebrated with great devotion. Lotus, marigold, and arghya sets for the sunrise and sunset rituals are available." },
      { question: "Do you deliver flowers same day in Munger?", answer: "Yes, same-day delivery is available across Munger for orders placed before 3 PM." }
    ]
  },

  "begusarai": {
    cityName: "Begusarai",
    metaTitle: "Flower Delivery in Begusarai | Bihar Lenin | RedHeart",
    metaDescription: "Order flowers in Begusarai, Bihar. Same-day delivery near Kanwar Lake & across Begusarai. From ₹399.",
    h1: "Online Flower Delivery in Begusarai",
    metaKeyword: "flower delivery begusarai, online flowers begusarai bihar, florist begusarai, flowers begusarai kanwar lake petrochemical oil refinery left politics",
    footerContent: `
<h2>Flower Delivery in Begusarai — Bihar's "Leningrad," the Petrochemical Hub and Kanwar Lake's Wetlands</h2>
<p>Begusarai, in central-eastern Bihar on the Ganga's north bank, is one of Bihar's most industrially and politically distinctive districts. Called "Leningrad of Bihar" for its historically strong Communist party (CPI) political culture — the district returned CPI legislators to the Bihar assembly for decades in India's post-independence era (a unique tradition in Hindi belt politics dominated by Congress and caste-based parties). Industrially, Begusarai hosts the Barauni Refinery (IOCL, one of Bihar's only major refineries) and a cluster of petrochemical and fertilizer plants that define the town's economy. The Kanwar Lake (or Kawar Jheel) near Begusarai is Asia's largest freshwater ox-bow lake — a Ramsar Wetland of International Importance that attracts hundreds of thousands of migratory birds in winter, including bar-headed geese, greylag geese, and rare Siberian cranes.</p>
<p>RedHeart delivers flowers across Begusarai — Main Market, Barauni area, Ganga Ghat, Teghra area, Balia area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Begusarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Barauni, Ganga Ghat, Teghra, Balia, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Begusarai?", answer: "Yes, Chhath Puja on the Ganga ghats of Begusarai is a major celebration. Lotus, marigold, and arghya sets for the dawn and dusk rituals are available for same-day delivery." },
      { question: "Can I get birthday flowers in Begusarai?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Begusarai for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Begusarai?", answer: "Yes, same-day delivery is available across Begusarai for orders placed before 3 PM." }
    ]
  },

  "bhojpur": {
    cityName: "Bhojpur",
    metaTitle: "Flower Delivery in Bhojpur | Ara Bihar | RedHeart",
    metaDescription: "Order flowers in Bhojpur (Ara), Bihar. Same-day delivery near Veer Kunwar Singh memorial & across Bhojpur. From ₹399.",
    h1: "Online Flower Delivery in Bhojpur",
    metaKeyword: "flower delivery bhojpur, online flowers ara bihar, florist bhojpur ara, flowers bhojpur ara veer kunwar singh 1857 ganga son confluence",
    footerContent: `
<h2>Flower Delivery in Bhojpur — Veer Kunwar Singh's 1857 Country at the Ganga-Son Confluence</h2>
<p>Bhojpur, headquartered at Ara, on the Ganga's south bank in western Bihar at the confluence of the Son River, is one of Bihar's historically richest districts. The district is the homeland of Veer Kunwar Singh — one of the most remarkable heroes of the 1857 Sepoy Mutiny and Indian rebellion. Kunwar Singh, the octogenarian Zamindar of Jagdishpur (Bhojpur), led his troops in guerrilla warfare against the British forces across Bihar and UP at the age of 80, and (legend says) cut off his own left arm with his sword when it was hit by a British bullet and threw it into the Ganga as an offering. He is remembered in Bihar as an extraordinary symbol of courage. Ara (the district town) has the Arrah House — the site of the famous siege of 1857 when a few British officers held out against thousands of rebels. The district is in the heart of the Bhojpuri cultural region.</p>
<p>RedHeart delivers flowers across Bhojpur — Ara Main Market, Ganga Ghat, Buxar Road, Patna Road, Jagdishpur area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhojpur (Ara), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ara Main Market, Ganga Ghat, Buxar Road, Jagdishpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Bhojpur?", answer: "Yes, Chhath Puja on the Ganga ghats of Ara (Bhojpur) is a massive celebration in the Bhojpuri heartland. Lotus, marigold, and arghya sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Ara (Bhojpur)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ara and across Bhojpur district for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Bhojpur?", answer: "Yes, same-day delivery is available across Bhojpur (Ara) for orders placed before 3 PM." }
    ]
  },

  "madhepura": {
    cityName: "Madhepura",
    metaTitle: "Flower Delivery in Madhepura | Bihar | RedHeart",
    metaDescription: "Order flowers in Madhepura, Bihar. Same-day delivery near Kosi plains & across Madhepura. From ₹399.",
    h1: "Online Flower Delivery in Madhepura",
    metaKeyword: "flower delivery madhepura, online flowers madhepura bihar, florist madhepura, flowers madhepura kosi mithila maithili purnea division sharad yadav",
    footerContent: `
<h2>Flower Delivery in Madhepura — Kosi Plains Mithila District and Sharad Yadav's Stronghold</h2>
<p>Madhepura, in the Kosi division of north-eastern Bihar, is the headquarters of Madhepura district — a district in the Kosi-Mahananda interfluves (the vast alluvial fan of the Kosi River's constantly shifting channels). The district was the long-time constituency of Sharad Yadav (Janata Dal, JD-U) — one of the major OBC political figures in Bihar and national politics who advocated for social justice alongside Lalu Prasad Yadav and V.P. Singh. The Mithila cultural identity (Maithili language, Mithila painting tradition) is strong in Madhepura. The area has fertile paddy and sugarcane cultivation in the post-monsoon Kosi plains. Chhath Puja on the Kosi tributaries and in local ponds is the most important communal celebration.</p>
<p>RedHeart delivers flowers across Madhepura — Main Market, Purnea Road, Saharsa Road, Ghailapur area, Alamnagar area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhepura, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Purnea Road, Saharsa Road, Ghailapur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, lotus, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Madhepura?", answer: "Yes, Chhath Puja is Madhepura's most important festival. Lotus, marigold, and arghya flower sets for the Chhath ghat celebrations are available for same-day delivery." },
      { question: "Can I get birthday flowers in Madhepura?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Madhepura for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Madhepura?", answer: "Yes, same-day delivery is available across Madhepura for orders placed before 3 PM." }
    ]
  },

  "west-singhbhum": {
    cityName: "West Singhbhum",
    metaTitle: "Flower Delivery in West Singhbhum | Chaibasa Jharkhand | RedHeart",
    metaDescription: "Order flowers in West Singhbhum (Chaibasa), Jharkhand. Same-day delivery near Saranda forest & across Chaibasa. From ₹399.",
    h1: "Online Flower Delivery in West Singhbhum",
    metaKeyword: "flower delivery west singhbhum, online flowers chaibasa jharkhand, florist chaibasa, flowers west singhbhum saranda ho tribal iron ore steel tata",
    footerContent: `
<h2>Flower Delivery in West Singhbhum — Saranda's Ho Tribal Iron Ore Forests at Tata's Doorstep</h2>
<p>West Singhbhum, headquartered at Chaibasa in southern Jharkhand near Odisha, is one of the most mineral-rich and ecologically significant districts in India. The district contains the Saranda Forest (literally "Land of Seven Hundred Hills") — a contiguous sal forest of about 820 sq km, the largest dense sal forest in Asia, and a critical tiger and elephant habitat. The Saranda forest sits atop one of the world's largest iron ore deposits — the Noamundi and Kiriburu mines (operated by Tata Steel) supply the iron ore for Tata's Jamshedpur steel plant. The Ho tribe (a major Austro-Asiatic tribal group) are the indigenous people of West Singhbhum, with their own Devanagari-based script and distinct culture. Chakradharpur (in the district) is an important Indian Railways divisional town.</p>
<p>RedHeart delivers flowers across West Singhbhum — Chaibasa Main Market, Jamshedpur Road, Rourkela Road, Chakradharpur area, Noamundi area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">West Singhbhum (Chaibasa), Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chaibasa Main Market, Jamshedpur Road, Rourkela Road, Chakradharpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sarhul (Ho tribal spring festival) available in West Singhbhum?", answer: "Yes, Sarhul (the tribal Sal flower spring festival) is celebrated by the Ho community of West Singhbhum. Sal and seasonal forest flower arrangements for the festival are available from Chaibasa." },
      { question: "Can I get birthday flowers in Chaibasa (West Singhbhum)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Chaibasa for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in West Singhbhum?", answer: "Yes, same-day delivery is available across West Singhbhum (Chaibasa) for orders placed before 3 PM." }
    ]
  },

  "koderma": {
    cityName: "Koderma",
    metaTitle: "Flower Delivery in Koderma | Mica Capital Jharkhand | RedHeart",
    metaDescription: "Order flowers in Koderma, Jharkhand. Same-day delivery near mica mining areas & across Koderma. From ₹399.",
    h1: "Online Flower Delivery in Koderma",
    metaKeyword: "flower delivery koderma, online flowers koderma jharkhand, florist koderma, flowers koderma mica mining hazaribagh ranchi barhi chota nagpur",
    footerContent: `
<h2>Flower Delivery in Koderma — India's Mica Capital in the Chota Nagpur Plateau</h2>
<p>Koderma, in the central Jharkhand plateau between Ranchi and Jharkhand-Bihar border, is the headquarters of Koderma district — renowned historically as India's largest mica-producing district. The Koderma-Hazaribagh-Giridih belt formed one of the world's most important mica mining regions in the 20th century — mica (used in electrical insulators, cosmetics, and construction) was mined here by hundreds of mines, including controversial child labour operations that drew international attention. The district's mica economy has declined, but the legacy remains. Koderma is situated on the Damodar River's headwaters in the Chota Nagpur Plateau. The Barhi area and the Jharkhand-Bihar National Highway are important commercial nodes. The Usri Falls (near Giridih, adjacent district) is a scenic waterfall.</p>
<p>RedHeart delivers flowers across Koderma — Main Market, Hazaribagh Road, Ranchi Road, Barhi area, Jhumri Telaiya area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koderma, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hazaribagh Road, Ranchi Road, Barhi, Jhumri Telaiya, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Jharkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Koderma?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Koderma for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Koderma?", answer: "Yes, Diwali marigold and rose arrangements are available for same-day delivery in Koderma." },
      { question: "Do you deliver flowers same day in Koderma?", answer: "Yes, same-day delivery is available across Koderma for orders placed before 3 PM." }
    ]
  },

  "chatra": {
    cityName: "Chatra",
    metaTitle: "Flower Delivery in Chatra | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Chatra, Jharkhand. Same-day delivery near Teliya Dam & across Chatra. From ₹399.",
    h1: "Online Flower Delivery in Chatra",
    metaKeyword: "flower delivery chatra, online flowers chatra jharkhand, florist chatra, flowers chatra teliya dam sone river oraon tribal plateau hazaribagh",
    footerContent: `
<h2>Flower Delivery in Chatra — Son River Headwaters and Dense Tribal Plateau District</h2>
<p>Chatra, in central Jharkhand between Ranchi and Hazaribagh, is the headquarters of Chatra district — one of Jharkhand's least-urbanised and most forested districts, in the upper Son River valley on the Chota Nagpur Plateau. The Son River (which flows westward and eventually joins the Ganga near Patna) has its headwaters in the Chatra-Palamu-Latehar area. The district has a predominantly Oraon tribal and Scheduled Caste population, with dense sal and mixed forest cover. The Teliya Dam (on the South Koel River tributary) is a key water source. The Chatra-Hazaribagh plateau is known for agates (semi-precious stones) found in the basalt formations. The Ranchi-Varanasi National Highway passes through Chatra.</p>
<p>RedHeart delivers flowers across Chatra — Main Market, Hazaribagh Road, Ranchi Road, Gidhaur area, Tandwa area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chatra, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hazaribagh Road, Ranchi Road, Gidhaur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sarhul available in Chatra?", answer: "Yes, Sarhul (the Oraon tribal Sal flower spring festival) is celebrated in Chatra. Seasonal flower arrangements for the forest festival are available." },
      { question: "Can I get flowers for Diwali in Chatra?", answer: "Yes, Diwali marigold and rose arrangements are available for same-day delivery in Chatra." },
      { question: "Do you deliver flowers same day in Chatra?", answer: "Yes, same-day delivery is available across Chatra for orders placed before 3 PM." }
    ]
  },

  "latehar": {
    cityName: "Latehar",
    metaTitle: "Flower Delivery in Latehar | Betla Tiger Reserve Jharkhand | RedHeart",
    metaDescription: "Order flowers in Latehar, Jharkhand. Same-day delivery near Betla National Park & across Latehar. From ₹399.",
    h1: "Online Flower Delivery in Latehar",
    metaKeyword: "flower delivery latehar, online flowers latehar jharkhand, florist latehar, flowers latehar betla national park tiger palamu north koel river",
    footerContent: `
<h2>Flower Delivery in Latehar — Betla Tiger Reserve's Forest District on the North Koel River</h2>
<p>Latehar, in western Jharkhand adjoining Palamu and Chatra, is the headquarters of Latehar district — a forested district on the North Koel River's plateau characterised by dense sal and bamboo forests and a significant tribal (Oraon and Munda) population. The district is contiguous with the Betla National Park and Palamu Tiger Reserve — one of India's first nine tiger reserves (established 1973 under Project Tiger), home to tigers, elephants, gaur, and wolf. The Mahuadanr Wolf Sanctuary in Latehar is one of the few specifically wolf-protected reserves in Asia. The North Koel and Auranga rivers carve through the district's forested plateau. The Latehar-Garhwa corridor is the entry point to the Chhattisgarh border's Chhota Nagpur edge.</p>
<p>RedHeart delivers flowers across Latehar — Main Market, Ranchi Road, Garhwa Road, Mahuadanr area, Chandwa area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Latehar, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranchi Road, Garhwa Road, Mahuadanr, Chandwa, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Betla Tiger Reserve safari stay from Latehar?", answer: "Yes, Betla National Park and Palamu Tiger Reserve are in the Latehar region. Flower bouquets for jungle lodge stays and safari anniversary gifts can be delivered in Latehar." },
      { question: "Are flowers for Sarhul available in Latehar?", answer: "Yes, Sarhul (the Oraon-Munda tribal Sal flower festival) is celebrated in Latehar. Seasonal flower sets for the forest festival are available." },
      { question: "Do you deliver flowers same day in Latehar?", answer: "Yes, same-day delivery is available across Latehar for orders placed before 3 PM." }
    ]
  },

  "koppal": {
    cityName: "Koppal",
    metaTitle: "Flower Delivery in Koppal | Hampi Belt Karnataka | RedHeart",
    metaDescription: "Order flowers in Koppal, Karnataka. Same-day delivery near Hampi & across Koppal. From ₹399.",
    h1: "Online Flower Delivery in Koppal",
    metaKeyword: "flower delivery koppal, online flowers koppal karnataka, florist koppal, flowers koppal hampi tungabhadra vijayanagara iron ore gangavathi",
    footerContent: `
<h2>Flower Delivery in Koppal — Hampi's Iron Ore Gateway and the Tungabhadra's Northern Banks</h2>
<p>Koppal, in the Tungabhadra plains of northern Karnataka, is the headquarters of Koppal district — a district geographically and culturally adjacent to the UNESCO World Heritage Site of Hampi (the ruins of the Vijayanagara Empire, just across the Tungabhadra River in Ballari district). Koppal's Gangavathi town is one of Karnataka's largest rice markets — the Tungabhadra basin's fertile black cotton soil and irrigation canals support extensive paddy cultivation. The district also has significant iron ore deposits (like Ballari-Koppal-Raichur iron ore belt). The Kuknoor and Kampli (historically part of the old Vijayanagara kingdom's political geography) areas have Vijayanagara-era remains. The Pampa Sarovar (associated with Pampa, goddess of the Tungabhadra, and linked to the Kishkindha-Ramayana geography) is near the Hampi-Koppal border.</p>
<p>RedHeart delivers flowers across Koppal — Main Market, Hampi Road, Gangavathi area, Kushtagi area, Yelburga area, and Station Road. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koppal, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hampi Road, Gangavathi, Kushtagi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Hampi heritage visit from Koppal?", answer: "Yes, Koppal is adjacent to Hampi (the Vijayanagara UNESCO World Heritage Site). Flower bouquets for heritage resort stays near Hampi can be delivered from Koppal." },
      { question: "Are flowers for Ugadi available in Koppal?", answer: "Yes, Ugadi (Karnataka New Year) seasonal bouquets and marigold arrangements are available in Koppal for same-day delivery." },
      { question: "Do you deliver flowers same day in Koppal?", answer: "Yes, same-day delivery is available across Koppal for orders placed before 3 PM." }
    ]
  },

  "yadgir": {
    cityName: "Yadgir",
    metaTitle: "Flower Delivery in Yadgir | Karnataka | RedHeart",
    metaDescription: "Order flowers in Yadgir, Karnataka. Same-day delivery near Shorapur & across Yadgir. From ₹399.",
    h1: "Online Flower Delivery in Yadgir",
    metaKeyword: "flower delivery yadgir, online flowers yadgir karnataka, florist yadgir, flowers yadgir shorapur krishna bhima nizam limestone deccan",
    footerContent: `
<h2>Flower Delivery in Yadgir — Krishna-Bhima Confluence District at the Telangana-Karnataka Border</h2>
<p>Yadgir, in the extreme northeastern tip of Karnataka near Telangana and Andhra Pradesh, is the headquarters of Yadgir district (one of Karnataka's newest, created in 2010 from Gulbarga). The district is at the confluence zone of the Krishna and Bhima rivers — the Bhima River (a Krishna tributary originating near Pune in Maharashtra) flows through the district before joining the Krishna. Yadgir is in the Deccan Plateau's dry zone (low annual rainfall, dryland agriculture of jowar, cotton, tur dal). The Shorapur region has significant historical interest — Shorapur Samsthan was an independent princely state under the Nayak dynasty, and the Battle of Shorapur (1858) saw the young Raj Venkatappa Nayak die resisting the British. The district has limestone deposits used by cement plants.</p>
<p>RedHeart delivers flowers across Yadgir — Main Market, Gulbarga Road, Shorapur area, Gurumitkal area, Wadagera area, and Station Road. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadgir, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gulbarga Road, Shorapur, Gurumitkal, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Ugadi available in Yadgir?", answer: "Yes, Ugadi (Karnataka New Year) bouquets and marigold arrangements are available in Yadgir for same-day delivery." },
      { question: "Can I get birthday flowers in Yadgir?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Yadgir for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Yadgir?", answer: "Yes, same-day delivery is available across Yadgir for orders placed before 3 PM." }
    ]
  },

  "haveri": {
    cityName: "Haveri",
    metaTitle: "Flower Delivery in Haveri | Karnataka | RedHeart",
    metaDescription: "Order flowers in Haveri, Karnataka. Same-day delivery near Dharwad & across Haveri. From ₹399.",
    h1: "Online Flower Delivery in Haveri",
    metaKeyword: "flower delivery haveri, online flowers haveri karnataka, florist haveri, flowers haveri tungabhadra dharwad cotton tobacco chikodi shiggaon",
    footerContent: `
<h2>Flower Delivery in Haveri — Cotton and Tobacco Land Between the Tungabhadra and the Malaprabha</h2>
<p>Haveri, in the Maidan region of north Karnataka between Dharwad and Davangere, is the headquarters of Haveri district — a primarily agricultural district in the fertile belt between the Tungabhadra (south) and the Malaprabha River. The district is Karnataka's major tobacco-growing area — the Virginia tobacco and "local" variety grown in Haveri's black cotton soil supply both domestic bidis (cigarettes) and export markets. Cotton, maize, and groundnut are also cultivated extensively. The Savanur and Shiggaon areas have historical Maratha and Nayak-period heritage. The Devaragudda Mallika Arjuna temple (a sacred Shiva and Parvati shrine on a prominent Deccan hilltop) is a major pilgrimage destination from the Haveri district. Haveri's textile weaving centres are known for Ilkal saree production (neighbouring Bagalkot).</p>
<p>RedHeart delivers flowers across Haveri — Main Market, Dharwad Road, Davangere Road, Savanur area, Shiggaon area, and Station Road. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haveri, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dharwad Road, Davangere Road, Savanur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Ugadi available in Haveri?", answer: "Yes, Ugadi (Karnataka New Year) seasonal bouquets and marigold arrangements are available in Haveri for same-day delivery." },
      { question: "Can I get birthday flowers in Haveri?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Haveri for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Haveri?", answer: "Yes, same-day delivery is available across Haveri for orders placed before 3 PM." }
    ]
  },

  "hapur": {
    cityName: "Hapur",
    metaTitle: "Flower Delivery in Hapur | UP | RedHeart",
    metaDescription: "Order flowers in Hapur, UP. Same-day delivery near Meerut & across Hapur. From ₹399.",
    h1: "Online Flower Delivery in Hapur",
    metaKeyword: "flower delivery hapur, online flowers hapur uttar pradesh, florist hapur, flowers hapur meerut ghaziabad garment iron hardware doab",
    footerContent: `
<h2>Flower Delivery in Hapur — NCR's Garment and Iron Town at the Meerut-Ghaziabad Doab Junction</h2>
<p>Hapur (Hapur), in the western Ganga-Yamuna doab of Uttar Pradesh between Meerut and Ghaziabad (and now part of the Delhi NCR influence zone), is the headquarters of Hapur district (created in 2011 from Ghaziabad). The town is one of India's major centres for iron and hardware wholesale trade — the Hapur hardware market supplies iron rods, sheets, and construction hardware to builders across UP and Delhi NCR. The Hapur garment and hosiery industry is also significant. The area is on the western edge of the sugarcane belt. Hapur's rapid urbanisation (it functions as a satellite town of the Meerut-Ghaziabad-Delhi conurbation) has driven residential and commercial growth. The Ganga (15 km east) and the NH-9 (Delhi-Moradabad) highway define the town's economic geography.</p>
<p>RedHeart delivers flowers across Hapur — Main Market, Meerut Road, Ghaziabad Road, Pilkhuwa area, Garh area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hapur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Meerut Road, Ghaziabad Road, Pilkhuwa, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get office flowers for corporate gifting in Hapur?", answer: "Yes, Hapur's growing industrial and trading sector has many businesses. Flower arrangements for office gifting and corporate events are available for same-day delivery in Hapur." },
      { question: "Are flowers for Diwali available in Hapur?", answer: "Yes, Diwali marigold and rose arrangements are available for same-day delivery in Hapur." },
      { question: "Do you deliver flowers same day in Hapur?", answer: "Yes, same-day delivery is available across Hapur for orders placed before 3 PM." }
    ]
  },

  "shamli": {
    cityName: "Shamli",
    metaTitle: "Flower Delivery in Shamli | UP | RedHeart",
    metaDescription: "Order flowers in Shamli, UP. Same-day delivery near Muzaffarnagar & across Shamli. From ₹399.",
    h1: "Online Flower Delivery in Shamli",
    metaKeyword: "flower delivery shamli, online flowers shamli uttar pradesh, florist shamli, flowers shamli muzaffarnagar sugarcane jaggery kand doab 1857",
    footerContent: `
<h2>Flower Delivery in Shamli — Sugarcane-Gur Belt and 1857's Western UP Frontier</h2>
<p>Shamli, in the Muzaffarnagar-Shamli doab of western Uttar Pradesh, is the headquarters of Shamli district (created in 2011 from Muzaffarnagar). The district is in the heart of the western UP sugarcane belt — the Yamuna-Ganga doab's rich alluvial soil supports sugarcane and gur (jaggery) production that has powered the region's sugar mills for a century. The town of Kairana (in Shamli district) is known for its wholesale mango market and the cross-community migration controversy of 2016 that attracted national attention. Shamli district lies near the 1857 Mutiny battlefields of Muzaffarnagar, and the Thanabhavan area has historic Sufi associations (the Dar-ul-Uloom Deoband is nearby). The Yamuna River lies to the west of the district.</p>
<p>RedHeart delivers flowers across Shamli — Main Market, Muzaffarnagar Road, Meerut Road, Kairana area, Thanabhavan area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shamli, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Muzaffarnagar Road, Meerut Road, Kairana, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Eid available in Shamli?", answer: "Yes, Shamli has a significant Muslim community. Rose garlands and festive bouquets for Eid and other occasions are available in Shamli for same-day delivery." },
      { question: "Can I get birthday flowers in Shamli?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Shamli for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Shamli?", answer: "Yes, same-day delivery is available across Shamli for orders placed before 3 PM." }
    ]
  },

  "etah": {
    cityName: "Etah",
    metaTitle: "Flower Delivery in Etah | UP | RedHeart",
    metaDescription: "Order flowers in Etah, UP. Same-day delivery near Aligarh & across Etah. From ₹399.",
    h1: "Online Flower Delivery in Etah",
    metaKeyword: "flower delivery etah, online flowers etah uttar pradesh, florist etah, flowers etah aligarh kali river agra belt doab mustard wheat",
    footerContent: `
<h2>Flower Delivery in Etah — Kali River Doab Between the Braj and the Rohilkhand Plains</h2>
<p>Etah, in the central Yamuna-Ganga doab of Uttar Pradesh between Aligarh and Mainpuri, is the headquarters of Etah district — a district in the western UP agricultural belt on the Kali (Kali Nadi) River. The district is known for its mustard and wheat cultivation and for its proximity to the Braj cultural zone (the mythological homeland of Lord Krishna centred on Mathura-Vrindavan). The Etah town has a significant traditional brassware and metalwork craft tradition. The area has seen historical significance as part of the Agra-Awadh road network. The Kasganj (Etah's former subdivision) was bifurcated into a separate district in 2008. Etah's sugar industry and cooperative mills are part of the western UP sugar economy.</p>
<p>RedHeart delivers flowers across Etah — Main Market, Aligarh Road, Agra Road, Aliganj area, Jalesar area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Etah, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Aligarh Road, Agra Road, Aliganj, Jalesar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for Holi in Etah?", answer: "Yes, Etah is close to the Braj cultural zone known for its Holi celebrations. Seasonal marigold and rose arrangements for the festival of colours are available." },
      { question: "Are flowers for birthday available in Etah?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Etah for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Etah?", answer: "Yes, same-day delivery is available across Etah for orders placed before 3 PM." }
    ]
  },

  "kasganj": {
    cityName: "Kasganj",
    metaTitle: "Flower Delivery in Kasganj | UP | RedHeart",
    metaDescription: "Order flowers in Kasganj (Kanshiram Nagar), UP. Same-day delivery near Kali River & across Kasganj. From ₹399.",
    h1: "Online Flower Delivery in Kasganj",
    metaKeyword: "flower delivery kasganj, online flowers kasganj uttar pradesh, florist kasganj kanshiram nagar, flowers kasganj kali river ganga doab aligarh district",
    footerContent: `
<h2>Flower Delivery in Kasganj — Kali River District Between the Doab's Braj and Rohilkhand Edges</h2>
<p>Kasganj (officially Kanshiram Nagar, though the city retains the name Kasganj), in the western Uttar Pradesh doab near Aligarh and Etah, was bifurcated from Etah district in 2008 and is the headquarters of Kasganj district. The district is on the Kali (Kali Nadi) River in the Ganga-Yamuna doab's agricultural heartland — wheat and mustard in winter, sugarcane as a cash crop. Kasganj has a diverse social composition — significant Hindu, Muslim, and Scheduled Caste communities reflecting the western UP doab's multi-community character. The Soron Shukarkshetra (on the Ganga's bank near Kasganj) is one of the most sacred Hindu sites in western UP — believed to be where Lord Vishnu as Varaha (the divine boar) defeated the demon Hiranyaksha and where Shukracharya taught.</p>
<p>RedHeart delivers flowers across Kasganj — Main Market, Etah Road, Aligarh Road, Soron area, Patiyali area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasganj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Etah Road, Aligarh Road, Soron, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Soron Shukarkshetra Ganga puja available from Kasganj?", answer: "Yes, the Soron Shukarkshetra (one of UP's most sacred Ganga pilgrimage sites, associated with Varaha and Shukracharya) is in Kasganj district. Marigold, lotus, and Ganga puja sets are available." },
      { question: "Can I get birthday flowers in Kasganj?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kasganj for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Kasganj?", answer: "Yes, same-day delivery is available across Kasganj for orders placed before 3 PM." }
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
