// Batch 57 — 15 cities:
// HP: Kullu
// Punjab: Gurdaspur, Hoshiarpur, Sangrur, Ferozepur
// Haryana: Rewari, Palwal, Jhajjar
// MP: Betul, Khandwa, Chhindwara
// UP: Chandauli, Maharajganj
// Gujarat: Amreli
// Maharashtra: Nandurbar

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "kullu": {
    cityName: "Kullu",
    metaTitle: "Flower Delivery in Kullu | Dussehra Valley Himachal Pradesh | RedHeart",
    metaDescription: "Order flowers in Kullu, Himachal Pradesh. Same-day delivery near Beas River & across Kullu. From ₹399.",
    h1: "Online Flower Delivery in Kullu",
    metaKeyword: "flower delivery kullu, online flowers kullu himachal pradesh, florist kullu, flowers kullu dussehra festival beas river apple orchard kullu shawl raghunath",
    footerContent: `
<h2>Flower Delivery in Kullu — Valley of Gods, Raghunath's Dussehra, and the Apple Blossom Himalayas</h2>
<p>Kullu (Kulu), in the Kullu Valley of the Beas River in Himachal Pradesh, is the headquarters of Kullu district — one of India's most celebrated mountain valleys and the home of the International Kullu Dussehra festival. The Kullu Dussehra — where over 300 local deities (devtas) are brought on palanquins from their villages across the valley to Dhalpur Maidan in Kullu to participate in a week-long celebration honoring Lord Raghunath (Ram) — is one of India's most spectacular religious festivals (declared an International Festival by the Government of India). Kullu is renowned for its distinctive Kullu shawls (the hand-woven woollen shawls with geometric patterns and vivid colours, GI-tagged as Kullu Handloom Products) and its apple orchards (Kullu-Manali apple belt is one of India's most important apple-growing regions). The Great Himalayan National Park (UNESCO World Heritage Site) is in Kullu district.</p>
<p>RedHeart delivers flowers across Kullu — Akhara Bazaar, Dhalpur area, Bhuntar area, Parvati Valley area, Banjar area, and Bus Stand. Our range includes roses, seasonal Himalayan flowers, marigolds, and Kullu puja bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kullu, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Akhara Bazaar, Dhalpur, Bhuntar, Parvati Valley, Banjar, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, seasonal Himalayan flowers, marigolds, apple blossom bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kullu Dussehra international festival available?", answer: "Yes, the Kullu Dussehra (300+ deities' procession, one of India's declared International Festivals) is Kullu's biggest event. Marigold garlands and puja flowers for the week-long celebration are available." },
      { question: "Can I get flowers for a Kullu Valley resort honeymoon or anniversary?", answer: "Yes, Kullu's apple orchard valley resorts are romantic destinations. Anniversary rose bouquets and hill-flower arrangements for Kullu stays can be delivered same day." },
      { question: "Do you deliver flowers same day in Kullu?", answer: "Yes, same-day delivery is available across Kullu for orders placed before 3 PM." }
    ]
  },

  "gurdaspur": {
    cityName: "Gurdaspur",
    metaTitle: "Flower Delivery in Gurdaspur | Dalhousie Gateway Punjab | RedHeart",
    metaDescription: "Order flowers in Gurdaspur, Punjab. Same-day delivery near Pathankot & across Gurdaspur. From ₹399.",
    h1: "Online Flower Delivery in Gurdaspur",
    metaKeyword: "flower delivery gurdaspur, online flowers gurdaspur punjab, florist gurdaspur, flowers gurdaspur dalhousie pathankot ravi river shaheed bhagat singh sikh martial",
    footerContent: `
<h2>Flower Delivery in Gurdaspur — Gateway to Dalhousie and the Ravi River's Fertile Punjab North</h2>
<p>Gurdaspur, in the northernmost corner of Punjab at the Himachal Pradesh and Jammu & Kashmir borders, is the headquarters of Gurdaspur district — a strategically important border district that serves as Punjab's gateway to the Himalayan foothills and the hill stations of Dalhousie and Chamba. The Ravi River (one of Punjab's five rivers, originating in the Chamba mountains) forms the border with Pakistan in the district. Gurdaspur was a district of great historical significance during the 1947 partition — the Radcliffe Commission's assignment of Gurdaspur district (predominantly Muslim at partition) to India enabled the only road link to Jammu and Kashmir, which proved critical for the accession of J&K to India. Shaheed Bhagat Singh was tried and executed at Lahore (from Gurdaspur's colonial division), and Urdu poet Sahir Ludhianvi's family had connections here.</p>
<p>RedHeart delivers flowers across Gurdaspur — Main Market, Dalhousie Road, Batala area, Dhariwal area, Dinanagar area, and Station Road. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gurdaspur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dalhousie Road, Batala, Dhariwal, Dinanagar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Dalhousie hill resort stay from Gurdaspur?", answer: "Yes, Gurdaspur is the gateway to Dalhousie (HP's colonial hill station). Bouquets for Dalhousie hotel stays and Chamba Valley resorts can be delivered from Gurdaspur." },
      { question: "Are flowers for Gurpurab available in Gurdaspur?", answer: "Yes, Gurpurab (Sikh religious occasions) is widely celebrated in Gurdaspur. Marigold garlands and Sikh puja flowers for Gurpurab are available." },
      { question: "Do you deliver flowers same day in Gurdaspur?", answer: "Yes, same-day delivery is available across Gurdaspur for orders placed before 3 PM." }
    ]
  },

  "hoshiarpur": {
    cityName: "Hoshiarpur",
    metaTitle: "Flower Delivery in Hoshiarpur | Shivalik Punjab | RedHeart",
    metaDescription: "Order flowers in Hoshiarpur, Punjab. Same-day delivery near Shivalik hills & across Hoshiarpur. From ₹399.",
    h1: "Online Flower Delivery in Hoshiarpur",
    metaKeyword: "flower delivery hoshiarpur, online flowers hoshiarpur punjab, florist hoshiarpur, flowers hoshiarpur shivalik hills bein river furniture industry doab",
    footerContent: `
<h2>Flower Delivery in Hoshiarpur — Shivalik Foothills and the Punjab Furniture Manufacturing Hub</h2>
<p>Hoshiarpur, in the sub-Himalayan Shivalik hills of Punjab at the Himachal Pradesh border, is the headquarters of Hoshiarpur district — a district of fertile Doab plains, scenic Shivalik forests, and an important industrial tradition in furniture and wood manufacturing. Hoshiarpur town has a significant furniture manufacturing industry (it produces a substantial share of Punjab's wooden furniture for domestic use and export). The Bein River — a seasonal Shivalik stream famous in Sikh history as the site where Guru Nanak Dev Ji (the first Sikh Guru) disappeared into the water for three days in meditation and emerged enlightened (the Bein Nadi near Sultanpur Lodhi, Hoshiarpur) — is a sacred pilgrimage site. Hoshiarpur district has the Mukerian area (on the Beas River) and the Harike Pattan wetland (Ramsar Site, India's largest wetland).</p>
<p>RedHeart delivers flowers across Hoshiarpur — Main Market, Dasuya area, Mukerian area, Garhshankar area, Tanda area, and Station Road. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hoshiarpur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dasuya, Mukerian, Garhshankar, Tanda, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Gurpurab available in Hoshiarpur?", answer: "Yes, Gurpurab is one of the biggest celebrations in Hoshiarpur. Marigold garlands and Sikh puja flowers for Gurpurab are available for same-day delivery." },
      { question: "Can I get birthday flowers in Hoshiarpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Hoshiarpur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Hoshiarpur?", answer: "Yes, same-day delivery is available across Hoshiarpur for orders placed before 3 PM." }
    ]
  },

  "sangrur": {
    cityName: "Sangrur",
    metaTitle: "Flower Delivery in Sangrur | Malwa Punjab | RedHeart",
    metaDescription: "Order flowers in Sangrur, Punjab. Same-day delivery near Ghaggar River & across Sangrur. From ₹399.",
    h1: "Online Flower Delivery in Sangrur",
    metaKeyword: "flower delivery sangrur, online flowers sangrur punjab, florist sangrur, flowers sangrur malwa ghaggar river sunam cotton wheat jind haryana border",
    footerContent: `
<h2>Flower Delivery in Sangrur — Malwa's Cotton Fields and the Ghaggar River's Ancient Saraswati Channel</h2>
<p>Sangrur, in the Malwa region of southern Punjab near the Haryana border, is the headquarters of Sangrur district — a district at the heart of Punjab's cotton-wheat agricultural belt and the Malwa cultural zone (Malwai Punjabi — the dialect of central-south Punjab — has its heartland here). The Ghaggar River (identified by many scholars as the remnant of the ancient Saraswati River) flows through Sangrur district, connecting it to Haryana's Sirsa and Bhiwani. Sangrur is associated with the Sikh Jat community's agricultural dominance and the tradition of Giddha (women's folk dance) and Bhangra that characterises Malwa's village culture. Sunam (birthplace of activist Bhagat Singh's father, Kishan Singh) and Barnala (in Sangrur's cultural sphere) are associated with Punjab's freedom movement heritage.</p>
<p>RedHeart delivers flowers across Sangrur — Main Market, Sunam area, Barnala Road, Dhuri area, Malerkotla area, and Station Road. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangrur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sunam, Barnala Road, Dhuri, Malerkotla, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Gurpurab available in Sangrur?", answer: "Yes, Gurpurab is widely celebrated in Sangrur. Marigold garlands and Gurdwara puja flowers for Gurpurab are available for same-day delivery." },
      { question: "Can I get birthday flowers in Sangrur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sangrur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sangrur?", answer: "Yes, same-day delivery is available across Sangrur for orders placed before 3 PM." }
    ]
  },

  "ferozepur": {
    cityName: "Ferozepur",
    metaTitle: "Flower Delivery in Ferozepur | Pakistan Border Punjab | RedHeart",
    metaDescription: "Order flowers in Ferozepur, Punjab. Same-day delivery near Wagah Border area & across Ferozepur. From ₹399.",
    h1: "Online Flower Delivery in Ferozepur",
    metaKeyword: "flower delivery ferozepur, online flowers ferozepur punjab, florist ferozepur, flowers ferozepur pakistan border sutlej hussainiwala bhagat singh 1857 cantonment",
    footerContent: `
<h2>Flower Delivery in Ferozepur — Hussainiwala's Martyr Memorial and the Sutlej's Pakistan Border Cantonment</h2>
<p>Ferozepur (Firozpur), on the Sutlej River at the Pakistan border in Punjab, is the headquarters of Ferozepur district — one of Punjab's most historically charged border districts and an important British Raj military cantonment city. Hussainiwala (in Ferozepur district, on the Pakistan border at the Sutlej) is the site of the National Martyrs Memorial — where the ashes of Bhagat Singh, Sukhdev Thapar, and Shivaram Rajguru were scattered in the Sutlej after their execution in Lahore (1931), and where an annual flag-lowering ceremony (similar to Wagah) takes place. Ferozepur was the site of major battles during the Anglo-Sikh Wars — the Battle of Ferozeshah (1845) and Battle of Mudki — and has a major British Raj-era military cantonment. The Ferozepur Sadar area retains colonial-era architecture.</p>
<p>RedHeart delivers flowers across Ferozepur — Main Market, Hussainiwala area, Guru Nanak Dev Marg, Zira area, Jalalabad area, and Station Road. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ferozepur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hussainiwala, Guru Nanak Dev Marg, Zira, Jalalabad, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Shaheed Diwas (Martyrs Day for Bhagat Singh) available in Ferozepur?", answer: "Yes, the Hussainiwala National Martyrs Memorial (Bhagat Singh's memorial on the Sutlej) holds Shaheed Diwas observances. White flowers and tribute arrangements for the martyrs are available." },
      { question: "Are flowers for Gurpurab available in Ferozepur?", answer: "Yes, Gurpurab is one of the biggest celebrations in Ferozepur. Marigold garlands and Sikh puja flowers are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Ferozepur?", answer: "Yes, same-day delivery is available across Ferozepur for orders placed before 3 PM." }
    ]
  },

  "rewari": {
    cityName: "Rewari",
    metaTitle: "Flower Delivery in Rewari | Haryana | RedHeart",
    metaDescription: "Order flowers in Rewari, Haryana. Same-day delivery near Delhi NCR & across Rewari. From ₹399.",
    h1: "Online Flower Delivery in Rewari",
    metaKeyword: "flower delivery rewari, online flowers rewari haryana, florist rewari, flowers rewari delhi ncr ahirwal cotton industrial haryana rail junction jat ahir",
    footerContent: `
<h2>Flower Delivery in Rewari — Ahirwal's Industrial Gateway and Delhi NCR's Southwestern Rail Hub</h2>
<p>Rewari, in the Ahirwal region of southern Haryana near Delhi and Rajasthan, is the headquarters of Rewari district — a rapidly industrialising district in the Delhi NCR orbit with a strong heritage identity. Rewari is in the Ahirwal region (the homeland of the Ahir/Yadav community, famous for their Haryanvi martial tradition) — a region whose name means "land of the Ahirs." Rewari's Copper Smelting Industries, railway workshops (the Rewari Railway Junction is one of North India's important railway junctions — where the Delhi-Ahmedabad and Delhi-Jaipur broad-gauge routes converge), and growing industrial estates are building the district's economic base. The Rewari area was the site of the 1857 uprising's Haryana front — Rao Tula Ram of the Rewari royal family led the resistance against the British and is celebrated as Haryana's greatest 1857 martyr.</p>
<p>RedHeart delivers flowers across Rewari — Main Market, Dharuhera area, Bawal area, Kosli area, Jatusana area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewari, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dharuhera, Bawal, Kosli, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Rewari?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Rewari for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Rewari?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Rewari." },
      { question: "Do you deliver flowers same day in Rewari?", answer: "Yes, same-day delivery is available across Rewari for orders placed before 3 PM." }
    ]
  },

  "palwal": {
    cityName: "Palwal",
    metaTitle: "Flower Delivery in Palwal | Delhi NCR Haryana | RedHeart",
    metaDescription: "Order flowers in Palwal, Haryana. Same-day delivery near Yamuna & across Palwal. From ₹399.",
    h1: "Online Flower Delivery in Palwal",
    metaKeyword: "flower delivery palwal, online flowers palwal haryana, florist palwal, flowers palwal yamuna ncr faridabad industrial feeder nuh mewat agra highway",
    footerContent: `
<h2>Flower Delivery in Palwal — Yamuna Industrial Corridor and Delhi NCR's Southeastern Gateway</h2>
<p>Palwal, on the Yamuna River in southern Haryana near the Delhi and Uttar Pradesh borders, is the headquarters of Palwal district — a district at the southeastern edge of Delhi NCR with a rapidly growing industrial base along the Delhi-Agra National Highway (NH-19). Palwal district was carved out of Faridabad district in 2008. The Yamuna industrial corridor and the Kundli-Manesar-Palwal (KMP) Expressway have made Palwal a logistics and manufacturing hub. The district has significant Meo Muslim community presence — the Meos of southern Haryana (also present in Nuh/Mewat district) are a historically interesting syncretic community combining Islamic practice with Hindu folk traditions. The ancient Bata Dhera fair and the Sati Mata temple are local religious landmarks.</p>
<p>RedHeart delivers flowers across Palwal — Main Market, Delhi Road, Hodal area, Hathin area, Ballabgarh area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palwal, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Delhi Road, Hodal, Hathin, Ballabgarh area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Palwal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Palwal for orders placed before 3 PM." },
      { question: "Are flowers for Eid available in Palwal?", answer: "Yes, Eid is an important celebration in Palwal. Fragrant rose and jasmine arrangements for Eid gifting are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Palwal?", answer: "Yes, same-day delivery is available across Palwal for orders placed before 3 PM." }
    ]
  },

  "jhajjar": {
    cityName: "Jhajjar",
    metaTitle: "Flower Delivery in Jhajjar | Haryana | RedHeart",
    metaDescription: "Order flowers in Jhajjar, Haryana. Same-day delivery across Jhajjar district. From ₹399.",
    h1: "Online Flower Delivery in Jhajjar",
    metaKeyword: "flower delivery jhajjar, online flowers jhajjar haryana, florist jhajjar, flowers jhajjar IMT manesar delhi ncr jat community aiims bahadurgarh industrial",
    footerContent: `
<h2>Flower Delivery in Jhajjar — AIIMS Jhajjar Campus and Haryana's Delhi NCR Western Industrial Belt</h2>
<p>Jhajjar, in the western Delhi NCR belt of Haryana near Rohtak and Gurugram, is the headquarters of Jhajjar district — a rapidly developing industrial and institutional district. Jhajjar hosts the National Cancer Institute (NCI) and the All India Institute of Medical Sciences (AIIMS) Jhajjar campus — a major expansion of India's premier medical education and research institution, part of the Jhajjar biomedical campus complex that has become one of the largest medical campuses in Asia. The IMT (Industrial Model Township) Manesar (which straddles Gurugram and Jhajjar districts) has Maruti Suzuki, Hero MotoCorp, and hundreds of auto-component industries. Bahadurgarh (in Jhajjar district) is a major industrial and residential satellite of Delhi. The district has a predominantly Jat agricultural community.</p>
<p>RedHeart delivers flowers across Jhajjar — Main Market, AIIMS area, Bahadurgarh area, Beri area, Machhrauli area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhajjar, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, AIIMS area, Bahadurgarh, Beri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for AIIMS Jhajjar gifting?", answer: "Yes, AIIMS Jhajjar campus is in the district. Get-well-soon bouquets and cheerful flower arrangements for AIIMS Jhajjar patients and staff are available for same-day delivery." },
      { question: "Can I get birthday flowers in Jhajjar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jhajjar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Jhajjar?", answer: "Yes, same-day delivery is available across Jhajjar for orders placed before 3 PM." }
    ]
  },

  "betul": {
    cityName: "Betul",
    metaTitle: "Flower Delivery in Betul | Satpura MP | RedHeart",
    metaDescription: "Order flowers in Betul, Madhya Pradesh. Same-day delivery near Satpura Tiger Reserve & across Betul. From ₹399.",
    h1: "Online Flower Delivery in Betul",
    metaKeyword: "flower delivery betul, online flowers betul madhya pradesh, florist betul, flowers betul satpura tiger reserve tapti river vindhya deccan tropic cancer gond",
    footerContent: `
<h2>Flower Delivery in Betul — Tropic of Cancer Crossroads and the Satpura Tiger's Teak Forests</h2>
<p>Betul, on the Satpura Plateau of Madhya Pradesh near the Maharashtra border, is the headquarters of Betul district — a district of extraordinary ecological and geographical significance. The Tropic of Cancer (23.5°N latitude) passes through Betul district, making it one of the few districts in India where the sun is directly overhead on the summer solstice (June 21). The Satpura Tiger Reserve (covering the Satpura Range's dense teak-bamboo forests) is in Betul's neighbourhood and has been one of MP's success stories for tiger conservation. The Tapti (Tapi) River — one of peninsular India's major rivers flowing west to the Arabian Sea — originates at Multai in Betul district (the Tap Tai Mata temple at Multai is an important pilgrimage site). The district has significant Gond tribal communities in its forested hills.</p>
<p>RedHeart delivers flowers across Betul — Main Market, Multai area, Amla area, Athner area, Shahpur area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Betul, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Multai, Amla, Athner, Shahpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Betul?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Betul for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Betul?", answer: "Yes, marigold garlands and puja sets for Navratri, Diwali, and other festivals are available for same-day delivery in Betul." },
      { question: "Do you deliver flowers same day in Betul?", answer: "Yes, same-day delivery is available across Betul for orders placed before 3 PM." }
    ]
  },

  "khandwa": {
    cityName: "Khandwa",
    metaTitle: "Flower Delivery in Khandwa | Kishore Kumar MP | RedHeart",
    metaDescription: "Order flowers in Khandwa, MP. Same-day delivery near Indira Sagar Dam & across Khandwa. From ₹399.",
    h1: "Online Flower Delivery in Khandwa",
    metaKeyword: "flower delivery khandwa, online flowers khandwa madhya pradesh, florist khandwa, flowers khandwa kishore kumar birthplace indira sagar dam narmada tapi nimad",
    footerContent: `
<h2>Flower Delivery in Khandwa — Kishore Kumar's Hometown and the Narmada's Indira Sagar Reservoir</h2>
<p>Khandwa (East Nimar), on the banks of the Tapi River in the Nimar region of Madhya Pradesh, is the headquarters of Khandwa district — and the birthplace of Kishore Kumar (Abhas Kumar Ganguly, born 1929), arguably India's greatest and most versatile playback singer. The city has a Kishore Kumar Museum and cultural events celebrating the legendary singer. The Indira Sagar Dam — built on the Narmada River (a few km from Khandwa) — is one of India's largest hydroelectric and multipurpose dams (3,000 MW installed capacity), creating India's largest man-made reservoir (Indira Sagar Lake / Punasa Lake) that submerged dozens of villages. Omkareshwar (one of India's 12 Jyotirlingas, on an OM-shaped island in the Narmada near Khandwa) is a critical nearby pilgrimage site. The Nimad region's cotton-growing and sweet potato cultivation are agricultural mainstays.</p>
<p>RedHeart delivers flowers across Khandwa — Main Market, Omkareshwar area, Indira Sagar area, Pandhana area, Harsud area, and Station Road. Our range includes roses, marigolds, Shiva puja flowers, and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khandwa, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Omkareshwar area, Pandhana, Harsud, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, bilva, roses, Omkareshwar puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Omkareshwar Jyotirlinga puja available from Khandwa?", answer: "Yes, Omkareshwar (one of India's 12 Jyotirlingas, near Khandwa) is a major Shiva pilgrimage. Bilva, marigold garlands, and Shiva puja sets for Omkareshwar are available from Khandwa." },
      { question: "Can I get birthday flowers in Khandwa?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Khandwa for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Khandwa?", answer: "Yes, same-day delivery is available across Khandwa for orders placed before 3 PM." }
    ]
  },

  "chhindwara": {
    cityName: "Chhindwara",
    metaTitle: "Flower Delivery in Chhindwara | Satpura MP | RedHeart",
    metaDescription: "Order flowers in Chhindwara, MP. Same-day delivery near Pench Tiger Reserve & across Chhindwara. From ₹399.",
    h1: "Online Flower Delivery in Chhindwara",
    metaKeyword: "flower delivery chhindwara, online flowers chhindwara madhya pradesh, florist chhindwara, flowers chhindwara pench tiger reserve kamal nath satpura gond orange",
    footerContent: `
<h2>Flower Delivery in Chhindwara — Pench Tiger's Mowgli Land and MP's Orange-Growing Satpura District</h2>
<p>Chhindwara, in the Satpura Plateau of Madhya Pradesh near Maharashtra, is the headquarters of Chhindwara district — a district of wildlife heritage, orange horticulture, and political significance as the stronghold of Congress leader Kamal Nath. The Pench Tiger Reserve (straddling the MP-Maharashtra border, from Chhindwara into Nagpur district) was the inspiration for Rudyard Kipling's "The Jungle Book" (the Seoni-Pench forests are the setting for Mowgli's adventures, and the Pench River is the "Waingunga" of the book). Chhindwara district is one of MP's largest orange-growing areas — the Satpura hills' red laterite soil and cool climate produce sweet oranges in the Tamia, Jamai, and Chhindwara areas. The district is also known for coal and manganese mining.</p>
<p>RedHeart delivers flowers across Chhindwara — Main Market, Pench area, Sausar area, Pandhurna area, Amarwara area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhindwara, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Pench area, Sausar, Pandhurna, Amarwara, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Pench Tiger Reserve jungle resort stay from Chhindwara?", answer: "Yes, Pench Tiger Reserve's jungle lodges (MP and Maharashtra side) are accessible from Chhindwara. Seasonal bouquets for wildlife resort gifting can be delivered." },
      { question: "Can I get birthday flowers in Chhindwara?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Chhindwara for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Chhindwara?", answer: "Yes, same-day delivery is available across Chhindwara for orders placed before 3 PM." }
    ]
  },

  "chandauli": {
    cityName: "Chandauli",
    metaTitle: "Flower Delivery in Chandauli | Varanasi Rice UP | RedHeart",
    metaDescription: "Order flowers in Chandauli, UP. Same-day delivery near Chandauli & across Chandauli. From ₹399.",
    h1: "Online Flower Delivery in Chandauli",
    metaKeyword: "flower delivery chandauli, online flowers chandauli uttar pradesh, florist chandauli, flowers chandauli varanasi rice district chandauli zameen ganga son junction",
    footerContent: `
<h2>Flower Delivery in Chandauli — Ganga-Son Junction and the Kashi-Varanasi Cultural Outskirts</h2>
<p>Chandauli, on the Ganga east of Varanasi in eastern Uttar Pradesh, is the headquarters of Chandauli district — a district in the immediate cultural sphere of Varanasi (Kashi), carved from Varanasi district in 1997. The Ganga River and the Son River confluence are near Chandauli (the Son joins the Ganga near Karamnasa/Vindhya border). Chandauli is UP's most important rice-growing district — the "Chandauli Black Rice" (Kala Namak paddy and other heritage varieties) is grown in the district and has GI recognition. The district has significant limestone and sandstone quarries in the Kaimur hills. Chandauli's Naugarh area has the Rajdari and Devdari waterfalls — among UP's most scenic natural destinations, set in sal and teak forest gorges.</p>
<p>RedHeart delivers flowers across Chandauli — Main Market, Varanasi Road, Mughal Sarai area, Naugarh area, Sakaldiha area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandauli, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Varanasi Road, Mughal Sarai, Naugarh, Sakaldiha, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Chandauli?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Chandauli for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Chandauli?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Chandauli." },
      { question: "Do you deliver flowers same day in Chandauli?", answer: "Yes, same-day delivery is available across Chandauli for orders placed before 3 PM." }
    ]
  },

  "amreli": {
    cityName: "Amreli",
    metaTitle: "Flower Delivery in Amreli | Asiatic Lion Gujarat | RedHeart",
    metaDescription: "Order flowers in Amreli, Gujarat. Same-day delivery near Gir National Park & across Amreli. From ₹399.",
    h1: "Online Flower Delivery in Amreli",
    metaKeyword: "flower delivery amreli, online flowers amreli gujarat, florist amreli, flowers amreli gir national park asiatic lion sasan gir groundnut cotton kathiawar",
    footerContent: `
<h2>Flower Delivery in Amreli — Asiatic Lion's Second Home and the Kathiawar Groundnut Belt</h2>
<p>Amreli, in the Saurashtra (Kathiawar) peninsula of Gujarat, is the headquarters of Amreli district — a district at the edge of the Gir Forest and one of the principal Asiatic lion habitats in India. The Gir National Park (the world's only habitat of the wild Asiatic lion — Panthera leo persica, the only surviving population outside Africa, now numbering 600+) is in Amreli's neighbouring area (primarily Junagadh district), and lion sightings in Amreli district are increasingly common as the population expands. The Amreli district is part of the Saurashtra groundnut belt — the region grows a substantial proportion of India's groundnut (peanut) crop on the red and black cotton soils. The district has significant pastoral communities (Bharwad, Maldhari) who traditionally grazed cattle in the Gir forests.</p>
<p>RedHeart delivers flowers across Amreli — Main Market, Gir area, Rajula area, Savarkundla area, Dhari area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amreli, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gir area, Rajula, Savarkundla, Dhari, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Gir National Park safari stay from Amreli?", answer: "Yes, Gir National Park (the world's only Asiatic lion habitat) is accessible from Amreli. Bouquets for Gir jungle lodge stays can be delivered from Amreli." },
      { question: "Are flowers for Navratri available in Amreli?", answer: "Yes, Navratri Garba is enthusiastically celebrated in Amreli. Marigold garlands and festive flower sets for the 9-night Garba are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Amreli?", answer: "Yes, same-day delivery is available across Amreli for orders placed before 3 PM." }
    ]
  },

  "nandurbar": {
    cityName: "Nandurbar",
    metaTitle: "Flower Delivery in Nandurbar | Tribal Satpura Maharashtra | RedHeart",
    metaDescription: "Order flowers in Nandurbar, Maharashtra. Same-day delivery near Toranmal & across Nandurbar. From ₹399.",
    h1: "Online Flower Delivery in Nandurbar",
    metaKeyword: "flower delivery nandurbar, online flowers nandurbar maharashtra, florist nandurbar, flowers nandurbar tribal satpura bhil pavagadh toranmal hill tapi narmada mp gujarat",
    footerContent: `
<h2>Flower Delivery in Nandurbar — Bhil Tribal Heartland at the Maharashtra-Gujarat-MP Tri-Border</h2>
<p>Nandurbar, in the northern Satpura hills of Maharashtra at the Gujarat and Madhya Pradesh borders, is the headquarters of Nandurbar district — carved from Dhule district in 1998 and one of Maharashtra's most tribal and geographically remote districts. The district has a substantial Bhil tribal community (the Bhils, among India's largest tribal groups, traditionally practised archery and hill-farming across the Satpura-Vindhya-Aravalli belt). The Toranmal hill station (in Nandurbar district, at the MP border) — a cool, forested plateau with the Yashwant Lake — is a scenic destination. The Narmada River forms part of the district's northern boundary (the Sardar Sarovar Dam's canal system enters Gujarat through the Nandurbar corridor). The Tapi River also flows through the district. Nandurbar has a significant Mahua tree (used for tribal liquor and nutrition) and bamboo forest economy.</p>
<p>RedHeart delivers flowers across Nandurbar — Main Market, Toranmal area, Shahada area, Taloda area, Akkalkuwa area, and Station Road. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nandurbar, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Toranmal area, Shahada, Taloda, Akkalkuwa, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maharashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Nandurbar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nandurbar for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Nandurbar?", answer: "Yes, marigold garlands and puja sets for Navratri, Diwali, and other festivals are available for same-day delivery in Nandurbar." },
      { question: "Do you deliver flowers same day in Nandurbar?", answer: "Yes, same-day delivery is available across Nandurbar for orders placed before 3 PM." }
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
