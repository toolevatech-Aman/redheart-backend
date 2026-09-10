// Batch 61 — 15 cities:
// Tamil Nadu: Kallakurichi, Krishnagiri, Tirupathur, Perambalur, Nilgiris (Ooty), Pudukkottai, Nagapattinam
// Kerala: Wayanad, Idukki, Pathanamthitta, Kasaragod
// Bihar: Khagaria, Jehanabad
// Gujarat: Bharuch
// Rajasthan: Pratapgarh (RJ — need special slug)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "kallakurichi": {
    cityName: "Kallakurichi",
    metaTitle: "Flower Delivery in Kallakurichi | Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Kallakurichi, Tamil Nadu. Same-day delivery near Sankarapuram & across Kallakurichi. From ₹399.",
    h1: "Online Flower Delivery in Kallakurichi",
    metaKeyword: "flower delivery kallakurichi, online flowers kallakurichi tamil nadu, florist kallakurichi, flowers kallakurichi south arcot sankarapuram paddy rice ulundurpet gangaikondacholapuram",
    footerContent: `
<h2>Flower Delivery in Kallakurichi — South Arcot's Paddy Plains and the Ancient Chola Temple Belt</h2>
<p>Kallakurichi, in the South Arcot region of Tamil Nadu between Salem and Villupuram, is the headquarters of Kallakurichi district — one of Tamil Nadu's newest districts, carved from Villupuram in 2019. The district is in the fertile alluvial plains of the Pennaiyar and Gomukhi rivers, with paddy (rice) cultivation as the agricultural base. Kallakurichi is proximate to the extraordinary Gangaikonda Cholapuram (in nearby Ariyalur/Perambalur), the Chola Emperor Rajendra I's (1012–1044 CE) capital — where the Brihadeeswarar Temple of Gangaikonda Cholapuram stands as a twin to the Tanjavur Brihadeeswarar (both are UNESCO World Heritage Sites as "Great Living Chola Temples"). The Salem-Villupuram highway corridor passes through the district, bringing agricultural trade and logistics. Ulundurpet (in Kallakurichi) is a significant commercial town. The district has a large agricultural community growing paddy, groundnut, and sugarcane.</p>
<p>RedHeart delivers flowers across Kallakurichi — Main Market, Sankarapuram area, Ulundurpet area, Chinnasal area, Tirukoilur area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kallakurichi, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sankarapuram, Ulundurpet, Chinnasal, Tirukoilur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Kallakurichi?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kallakurichi for orders placed before 3 PM." },
      { question: "Are flowers for Tamil festivals available in Kallakurichi?", answer: "Yes, Pongal, Karthigai Deepam, and Deepavali marigold garlands and jasmine sets are available for same-day delivery in Kallakurichi." },
      { question: "Do you deliver flowers same day in Kallakurichi?", answer: "Yes, same-day delivery is available across Kallakurichi for orders placed before 3 PM." }
    ]
  },

  "krishnagiri": {
    cityName: "Krishnagiri",
    metaTitle: "Flower Delivery in Krishnagiri | Mango Belt TN | RedHeart",
    metaDescription: "Order flowers in Krishnagiri, Tamil Nadu. Same-day delivery near Hosur & across Krishnagiri. From ₹399.",
    h1: "Online Flower Delivery in Krishnagiri",
    metaKeyword: "flower delivery krishnagiri, online flowers krishnagiri tamil nadu, florist krishnagiri, flowers krishnagiri mango hosur electronic manufacturing denim bangalore border",
    footerContent: `
<h2>Flower Delivery in Krishnagiri — Mango Capital, Hosur Electronics Belt, and Bangalore's Industrial Suburb</h2>
<p>Krishnagiri, in northwestern Tamil Nadu at the Karnataka border near Bangalore, is the headquarters of Krishnagiri district — a district at the nexus of Tamil Nadu's horticultural belt and Bangalore's expanding industrial orbit. Krishnagiri is one of India's most important mango-growing districts — particularly the Banganapalle and Alphonso varieties grown in the district's laterite-black cotton soil zone, and the Krishnagiri mango festival is a celebrated annual event. Hosur (in Krishnagiri district, 35 km from Bengaluru) is one of India's fastest-growing industrial towns — the Hosur Industrial Area hosts Hyundai, Texas Instruments, Titan (watches), Ola Electric (two-wheeler EV factory), Foxconn, and scores of electronics and manufacturing companies. The Kaveri-Palar watershed boundary runs through the district. The Krishnagiri Dam (on the Thenpennai River) provides irrigation water.</p>
<p>RedHeart delivers flowers across Krishnagiri — Main Market, Hosur area, Denkanikottai area, Uthangarai area, Bargur area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnagiri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hosur, Denkanikottai, Uthangarai, Bargur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Krishnagiri?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Krishnagiri for orders placed before 3 PM." },
      { question: "Are flowers for office gifting in Hosur (Krishnagiri) available?", answer: "Yes, Hosur (in Krishnagiri district) hosts major MNC offices (Hyundai, Titan, Ola Electric). Office gifting roses and corporate bouquets are available for same-day delivery in the Hosur industrial belt." },
      { question: "Do you deliver flowers same day in Krishnagiri?", answer: "Yes, same-day delivery is available across Krishnagiri (including Hosur) for orders placed before 3 PM." }
    ]
  },

  "tirupathur": {
    cityName: "Tirupathur",
    metaTitle: "Flower Delivery in Tirupathur | Vellore Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Tirupathur, Tamil Nadu. Same-day delivery near Ambur leather & across Tirupathur. From ₹399.",
    h1: "Online Flower Delivery in Tirupathur",
    metaKeyword: "flower delivery tirupathur, online flowers tirupathur tamil nadu, florist tirupathur, flowers tirupathur ambur vaniyambadi leather tannery vellore north arcot palar",
    footerContent: `
<h2>Flower Delivery in Tirupathur — Ambur-Vaniyambadi's Leather Capital and the Palar's Tannery Towns</h2>
<p>Tirupathur, in the North Arcot region of Tamil Nadu near the Andhra Pradesh border, is the headquarters of Tirupathur district — carved from Vellore district in 2019 and encompassing the internationally known leather manufacturing towns of Ambur and Vaniyambadi. The Ambur-Vaniyambadi-Tirupathur belt is one of India's largest and most export-oriented leather tanning and footwear manufacturing clusters — producing a significant share of India's finished leather goods, particularly shoe uppers, garments, and industrial leather, exported primarily to Italy, Germany, the UK, and the USA. Ambur is particularly famous for the "Ambur biryani" — a distinct fragrant biryani style (made with seeraga samba rice and Ambur's traditional spice mix) that is now famous nationally among biryani aficionados. The Palar River flows through the leather belt.</p>
<p>RedHeart delivers flowers across Tirupathur — Main Market, Ambur area, Vaniyambadi area, Gudiyatham area, Natrampalli area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupathur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ambur, Vaniyambadi, Gudiyatham, Natrampalli, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Eid available in Tirupathur (Ambur)?", answer: "Yes, Eid is a major celebration in the Muslim-majority Ambur and Vaniyambadi areas of Tirupathur. Fragrant rose and jasmine arrangements for Eid gifting are available for same-day delivery." },
      { question: "Can I get birthday flowers in Tirupathur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Tirupathur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Tirupathur?", answer: "Yes, same-day delivery is available across Tirupathur (including Ambur and Vaniyambadi) for orders placed before 3 PM." }
    ]
  },

  "perambalur": {
    cityName: "Perambalur",
    metaTitle: "Flower Delivery in Perambalur | Chola TN | RedHeart",
    metaDescription: "Order flowers in Perambalur, Tamil Nadu. Same-day delivery near Tiruchi & across Perambalur. From ₹399.",
    h1: "Online Flower Delivery in Perambalur",
    metaKeyword: "flower delivery perambalur, online flowers perambalur tamil nadu, florist perambalur, flowers perambalur gangaikondacholapuram chola cement trichy kollidam limestone",
    footerContent: `
<h2>Flower Delivery in Perambalur — Gangaikondacholapuram's UNESCO Chola Temple and the Limestone Plateau</h2>
<p>Perambalur, in the Kollidam (Coleroon) River plains of Tamil Nadu near Tiruchirappalli, is the headquarters of Perambalur district — a small but historically magnificent district. The Gangaikondacholapuram Brihadeeswarar Temple (in Perambalur/Ariyalur district boundary) — built by the Chola Emperor Rajendra I (1010–44 CE) to commemorate his victory march to the Ganga River, where he brought Ganga water in pots back to Tamil Nadu — is a UNESCO World Heritage Site (one of the "Great Living Chola Temples") and considered by many art historians to be even more refined than its celebrated twin in Tanjavur. The district has limestone deposits supporting cement industries. The Kollidam River (the Cauvery's northern distributary) provides irrigation for the district's paddy and sugarcane fields. Perambalur is also known for silk handloom weaving in Kolathur.</p>
<p>RedHeart delivers flowers across Perambalur — Main Market, Gangaikondacholapuram area, Ariyalur area, Kunnam area, Veppanthattai area, and Station Road. Our range includes roses, marigolds, jasmine, and Chola-era temple puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Perambalur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gangaikondacholapuram, Kunnam, Veppanthattai, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, jasmine, bilva, Shaiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Gangaikondacholapuram temple puja available in Perambalur?", answer: "Yes, the Gangaikondacholapuram Brihadeeswarar Temple (UNESCO World Heritage, Rajendra Chola's masterpiece) is in Perambalur district. Marigold garlands, bilva, and Shaiva puja sets are available." },
      { question: "Can I get birthday flowers in Perambalur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Perambalur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Perambalur?", answer: "Yes, same-day delivery is available across Perambalur for orders placed before 3 PM." }
    ]
  },

  "nilgiris": {
    cityName: "The Nilgiris",
    metaTitle: "Flower Delivery in Nilgiris | Ooty Hill Station Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in The Nilgiris (Ooty), Tamil Nadu. Same-day delivery near Ooty & across Nilgiris. From ₹399.",
    h1: "Online Flower Delivery in The Nilgiris",
    metaKeyword: "flower delivery nilgiris ooty, online flowers nilgiris ooty tamil nadu, florist ooty nilgiris, flowers ooty nilgiris toda toda tribe tea nilgiri tahr blue mountain",
    footerContent: `
<h2>Flower Delivery in The Nilgiris — Ooty's Blue Mountain Railway, Toda Tribal Heritage, and Nilgiri Tea</h2>
<p>The Nilgiris district, centred on Ooty (Udhagamandalam) in the Western Ghats mountain plateau at the junction of Tamil Nadu, Kerala, and Karnataka, is one of India's most celebrated hill station districts. The Nilgiri Mountain Railway (the "Toy Train" from Mettupalayam to Ooty via Coonoor, a UNESCO World Heritage Site) is one of three mountain railways in India recognised for their engineering heritage. The Nilgiri Biosphere Reserve (UNESCO) protects a globally unique shola-grassland ecosystem and some of India's rarest wildlife (Nilgiri tahr, lion-tailed macaque, shola flycatcher). Ooty was the British Raj's summer capital for the Madras Presidency. The Toda people — an ancient pastoral tribal community of the Nilgiri plateau with distinctive barrel-vaulted temples (tarvali), embroidery (pokhur), and sacred buffalo culture — are unique to the Nilgiris. Nilgiri tea (the third-largest tea-growing region in India, known for its brisk, bright teas) is an agricultural trademark.</p>
<p>RedHeart delivers flowers across The Nilgiris — Ooty Main Market, Coonoor area, Kotagiri area, Gudalur area, Kundah area, and Wellington. Our range includes roses, Nilgiri wildflowers, marigolds, and seasonal mountain bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">The Nilgiris (Ooty), Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ooty Main Market, Coonoor, Kotagiri, Gudalur, Kundah, Wellington</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, Nilgiri wildflowers, marigolds, romantic honeymoon bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get romantic flowers for an Ooty honeymoon or anniversary?", answer: "Yes, Ooty (the Queen of Hill Stations) is one of India's most romantic destinations. Honeymoon rose bouquets, jasmine garlands, and seasonal Nilgiri wildflower arrangements for Ooty resort stays are available." },
      { question: "Can I get birthday flowers in Ooty (Nilgiris)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ooty and across the Nilgiris for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in The Nilgiris?", answer: "Yes, same-day delivery is available across The Nilgiris (Ooty, Coonoor, Kotagiri, Gudalur) for orders placed before 3 PM." }
    ]
  },

  "pudukkottai": {
    cityName: "Pudukkottai",
    metaTitle: "Flower Delivery in Pudukkottai | Princely State Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Pudukkottai, Tamil Nadu. Same-day delivery near Trichy & across Pudukkottai. From ₹399.",
    h1: "Online Flower Delivery in Pudukkottai",
    metaKeyword: "flower delivery pudukkottai, online flowers pudukkottai tamil nadu, florist pudukkottai, flowers pudukkottai princely state vellai arts rock caves thirumayam fort granite",
    footerContent: `
<h2>Flower Delivery in Pudukkottai — Tamil Nadu's Last Princely State and the Granite-Rich Cauvery Hinterland</h2>
<p>Pudukkottai, in the Cauvery delta hinterland of central Tamil Nadu, is the headquarters of Pudukkottai district — notable as the only princely state in Tamil Nadu that remained nominally independent until 1948 (the Pudukkottai Tondaiman royal family, who maintained a distinctive court culture and were among the most progressive princely rulers). The district has a remarkable concentration of rock-cut cave temples (the Sittannavasal cave with spectacular Jain murals from the 7th–9th centuries is one of India's finest examples of early Pandya-period art), ancient hill forts (Thirumayam Fort), and prehistoric megalithic sites. Pudukkottai district sits on significant granite deposits — granite quarrying and processing is one of the district's major industries. The district's Alangudi (Jupiter's kshetra among the 9 Navagraha temples) is a major pilgrimage site for Guru (Jupiter) puja.</p>
<p>RedHeart delivers flowers across Pudukkottai — Main Market, Alangudi area, Thirumayam area, Aranthangi area, Kiranur area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pudukkottai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Alangudi, Thirumayam, Aranthangi, Kiranur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, jasmine, roses, Navagraha puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Alangudi Guru (Jupiter) Navagraha temple puja available in Pudukkottai?", answer: "Yes, the Alangudi Guru Bhagavan temple (the Guru/Jupiter Navagraha kshetra) is in Pudukkottai district. Yellow flowers, marigold garlands, and Guru puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Pudukkottai?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Pudukkottai for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Pudukkottai?", answer: "Yes, same-day delivery is available across Pudukkottai for orders placed before 3 PM." }
    ]
  },

  "nagapattinam": {
    cityName: "Nagapattinam",
    metaTitle: "Flower Delivery in Nagapattinam | Velankanni Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Nagapattinam, Tamil Nadu. Same-day delivery near Velankanni shrine & across Nagapattinam. From ₹399.",
    h1: "Online Flower Delivery in Nagapattinam",
    metaKeyword: "flower delivery nagapattinam, online flowers nagapattinam tamil nadu, florist nagapattinam, flowers nagapattinam velankanni our lady church cauvery delta tsunami 2004 bay of bengal",
    footerContent: `
<h2>Flower Delivery in Nagapattinam — Velankanni's Basilica of Our Lady and the Cauvery Delta's Bay of Bengal Coast</h2>
<p>Nagapattinam, on the Cauvery delta coast of Tamil Nadu, is the headquarters of Nagapattinam district — a district of extraordinary religious pluralism and maritime heritage. Nagapattinam is home to the Basilica of Our Lady of Good Health at Velankanni — one of India's most visited Catholic shrines (drawing over 2 million pilgrims annually, particularly for the September Nativity Festival), a Portuguese-period apparition shrine revered equally by Christians, Hindus, and Muslims. Nagapattinam was also devastated by the 2004 Indian Ocean tsunami, where over 5,000 people were killed (the largest toll in Tamil Nadu), and rebuilding transformed the coastal landscape. The ancient Chola-era Nagapattinam port (the starting point of South Indian maritime trade with Southeast Asia) and the Sikkil-Sirkazhi classical music tradition (birthplace of the Maharajapuram tradition of Carnatic vocal music) are cultural heritage features. The district has significant fishing and shrimping industries on the Bay of Bengal coast.</p>
<p>RedHeart delivers flowers across Nagapattinam — Main Market, Velankanni area, Sirkazhi area, Mayiladuthurai area, Vedaranyam area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagapattinam, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Velankanni, Sirkazhi, Mayiladuthurai, Vedaranyam, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Velankanni Basilica pilgrimage available in Nagapattinam?", answer: "Yes, the Velankanni Basilica of Our Lady of Good Health (one of India's most visited shrines, 2 million+ pilgrims annually) is in Nagapattinam. Rose garlands and white lily bouquets for the Velankanni pilgrimage are available." },
      { question: "Can I get birthday flowers in Nagapattinam?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nagapattinam for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Nagapattinam?", answer: "Yes, same-day delivery is available across Nagapattinam for orders placed before 3 PM." }
    ]
  },

  "wayanad": {
    cityName: "Wayanad",
    metaTitle: "Flower Delivery in Wayanad | Coffee Hills Kerala | RedHeart",
    metaDescription: "Order flowers in Wayanad, Kerala. Same-day delivery near Kalpetta & across Wayanad. From ₹399.",
    h1: "Online Flower Delivery in Wayanad",
    metaKeyword: "flower delivery wayanad, online flowers wayanad kerala, florist wayanad, flowers wayanad kalpetta coffee tea cardamom tribal chembra edakkal caves kabani river",
    footerContent: `
<h2>Flower Delivery in Wayanad — Edakkal Cave Petroglyphs, Chembra Peak, and the Coffee-Cardamom Hills</h2>
<p>Wayanad, in the high-altitude forests and hills of northern Kerala at the Karnataka and Tamil Nadu borders, is one of India's most scenically beautiful districts — a verdant plateau of coffee, tea, cardamom, and pepper estates, ancient tribal heritage, and wildlife sanctuaries. The Edakkal Caves (near Ambalavayal, Wayanad) contain neolithic-era rock engravings (petroglyphs) from over 3,000 years ago — including a rare human figure with an animal body that archaeologists believe represents one of the earliest depictions of the Indus Valley Civilisation's influence in South India. The Wayanad Wildlife Sanctuary and Muthanga Elephant Reserve protect elephants, tigers, leopards, and gaur in dense deciduous forests. Chembra Peak (2,100 m) has a heart-shaped lake (Hridaya Thadakam) near the summit — one of Kerala's most sought-after treks. The Kabani River (a Krishna tributary) flows through the Wayanad plateau. Wayanad has a large Adivasi (tribal) population including the Paniyas, Kurichias, and Kattunaickans.</p>
<p>RedHeart delivers flowers across Wayanad — Kalpetta (district HQ), Mananthavady area, Sulthan Bathery area, Ambalavayal area, Vythiri area, and Panamaram. Our range includes roses, seasonal Kerala flowers, marigolds, and tropical bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wayanad (Kalpetta), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalpetta, Mananthavady, Sulthan Bathery, Ambalavayal, Vythiri, Panamaram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, seasonal Kerala flowers, marigolds, tropical jungle bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Wayanad resort stay or plantation homestay?", answer: "Yes, Wayanad's coffee and cardamom plantation homestays are a major draw. Tropical flower arrangements and Kerala wildflower bouquets for Wayanad resort gifting are available for same-day delivery." },
      { question: "Can I get birthday flowers in Wayanad (Kalpetta)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Wayanad for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Wayanad?", answer: "Yes, same-day delivery is available across Wayanad (Kalpetta, Mananthavady, Sulthan Bathery) for orders placed before 3 PM." }
    ]
  },

  "idukki": {
    cityName: "Idukki",
    metaTitle: "Flower Delivery in Idukki | Munnar Kerala | RedHeart",
    metaDescription: "Order flowers in Idukki, Kerala. Same-day delivery near Munnar & across Idukki. From ₹399.",
    h1: "Online Flower Delivery in Idukki",
    metaKeyword: "flower delivery idukki, online flowers idukki kerala, florist idukki, flowers idukki munnar tea neelakurinji eravikulam nilgiri tahr idukki arch dam periyar",
    footerContent: `
<h2>Flower Delivery in Idukki — Munnar's Tea Gardens, Neelakurinji Blooms, and the Eravikulam Ridge</h2>
<p>Idukki, in the high Western Ghats of Kerala, is the headquarters of Idukki district — Kerala's largest district (4,358 km²) and a landscape of dramatic mountains, vast tea estates, wildlife reserves, and India's highest peaks south of the Himalayas. Munnar (in Idukki district) — the "Kashmir of South India" — is one of India's most visited hill stations, famous for its rolling tea gardens (Tata Tea/Tetley's plantation base), the Eravikulam National Park (protecting the endangered Nilgiri Tahr, the mountain goat of South India), and the breathtaking Anamudi (2,695 m, South India's highest peak). The Neelakurinji (Strobilanthes kunthiana) — a flowering shrub that blooms once every 12 years in October and carpets the Munnar hills in indigo-blue flowers — is one of the world's most spectacular rare floral events. The Idukki Arch Dam (one of Asia's largest arch dams) and the Periyar Tiger Reserve (also partly in Idukki) are additional landmarks.</p>
<p>RedHeart delivers flowers across Idukki — Painavu (district HQ), Munnar area, Thodupuzha area, Adimali area, Kattappana area, and Devikulam. Our range includes roses, seasonal Kerala flowers, marigolds, and tropical bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Idukki (Munnar), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Painavu, Munnar, Thodupuzha, Adimali, Kattappana, Devikulam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tropical flowers, marigolds, Munnar honeymoon bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Munnar honeymoon or anniversary in Idukki?", answer: "Yes, Munnar (in Idukki district) is one of India's most romantic destinations. Rose bouquets, tropical flower arrangements, and romantic anniversary sets for Munnar tea estate stays are available for same-day delivery." },
      { question: "Can I get flowers inspired by the Neelakurinji bloom in Idukki?", answer: "While the Neelakurinji blooms only every 12 years, we offer beautiful blue and indigo flower arrangements in tribute to Munnar's legendary blooms." },
      { question: "Do you deliver flowers same day in Idukki?", answer: "Yes, same-day delivery is available across Idukki (Munnar, Thodupuzha, Kattappana areas) for orders placed before 3 PM." }
    ]
  },

  "pathanamthitta": {
    cityName: "Pathanamthitta",
    metaTitle: "Flower Delivery in Pathanamthitta | Sabarimala Kerala | RedHeart",
    metaDescription: "Order flowers in Pathanamthitta, Kerala. Same-day delivery near Sabarimala & across Pathanamthitta. From ₹399.",
    h1: "Online Flower Delivery in Pathanamthitta",
    metaKeyword: "flower delivery pathanamthitta, online flowers pathanamthitta kerala, florist pathanamthitta, flowers pathanamthitta sabarimala ayyappa pampa river rubber pamba pilgrim",
    footerContent: `
<h2>Flower Delivery in Pathanamthitta — Sabarimala's Ayyappa Pilgrimage and the Pampa River's Rubber Heartland</h2>
<p>Pathanamthitta, in central Kerala on the Pampa River, is the headquarters of Pathanamthitta district — and the district containing the Sabarimala temple, one of the world's largest pilgrimage destinations. The Sabarimala Sree Dharmasastha temple (dedicated to Lord Ayyappa, a fusion deity combining Shiva and Vishnu elements) atop a 914-metre forest hill in the Western Ghats draws an estimated 30–50 million pilgrims annually during the Mandalam-Makaravilakku season (November to January) — making it one of the world's largest annual human gatherings (second only to the Hajj). The Pampa River (the holy river where Sabarimala pilgrims bathe before the ascent, identified with the Mahabharata's Pamba, where Draupadi bathed) flows through Pathanamthitta. The district is also one of Kerala's major rubber-growing areas, with vast rubber estates on the Western Ghats' red laterite slopes.</p>
<p>RedHeart delivers flowers across Pathanamthitta — Main Market, Adoor area, Thiruvalla area, Konni area, Ranni area, and Pandalam. Our range includes roses, marigolds, jasmine, and Sabarimala puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pathanamthitta, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Adoor, Thiruvalla, Konni, Ranni, Pandalam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Ayyappa puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Sabarimala Ayyappa pilgrimage available in Pathanamthitta?", answer: "Yes, the Sabarimala Ayyappa temple (one of the world's largest pilgrimage sites, 30–50 million pilgrims annually) is in Pathanamthitta district. Marigold garlands, Ayyappa puja sets, and Pampa-bath flowers are available for same-day delivery." },
      { question: "Can I get birthday flowers in Pathanamthitta?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Pathanamthitta for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Pathanamthitta?", answer: "Yes, same-day delivery is available across Pathanamthitta for orders placed before 3 PM." }
    ]
  },

  "kasaragod": {
    cityName: "Kasaragod",
    metaTitle: "Flower Delivery in Kasaragod | Seven Languages Kerala | RedHeart",
    metaDescription: "Order flowers in Kasaragod, Kerala. Same-day delivery near Bekal Fort & across Kasaragod. From ₹399.",
    h1: "Online Flower Delivery in Kasaragod",
    metaKeyword: "flower delivery kasaragod, online flowers kasaragod kerala, florist kasaragod, flowers kasaragod bekal fort seven languages tulu kannada konkani kodagu cashew coconut",
    footerContent: `
<h2>Flower Delivery in Kasaragod — Bekal Fort's Arabian Sea Clifftop and India's Most Multilingual District</h2>
<p>Kasaragod, at the northernmost tip of Kerala bordering Karnataka, is the headquarters of Kasaragod district — one of India's most linguistically diverse districts, where Malayalam, Tulu, Kannada, Konkani, Beary Arabic, Urdu, and Marathi are all spoken in different pockets, earning it the nickname the "Land of Seven Languages" (or Sapta Bhasha Bharumi). The Bekal Fort — the largest and best-preserved fort in Kerala (a Portuguese-era circular fort built in the 17th century on a headland jutting into the Arabian Sea) — is one of India's most dramatically situated seaside forts. The fort is surrounded on three sides by the Arabian Sea and has been used in several Malayalam and Hindi films. Kasaragod district has significant Tulu-speaking communities (the Tulu Brahmins and other communities who culturally identify with Mangalore/Tulunadu). The district grows cashew nuts, coconuts, and arecanut in its laterite-red soil belt.</p>
<p>RedHeart delivers flowers across Kasaragod — Main Market, Bekal area, Kanhangad area, Hosdurg area, Uppala area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Kerala bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasaragod, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bekal, Kanhangad, Hosdurg, Uppala, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, tropical Kerala flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Bekal Fort beach or resort stay in Kasaragod?", answer: "Yes, the Bekal Fort (largest fort in Kerala, dramatic Arabian Sea clifftop) area has beautiful beach resorts. Tropical floral bouquets and rose arrangements for Bekal resort gifting are available from Kasaragod." },
      { question: "Are flowers for Onam available in Kasaragod?", answer: "Yes, Onam (the Kerala harvest festival) is enthusiastically celebrated in Kasaragod. Pookalam (floral carpet) flowers and Onam festive sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Kasaragod?", answer: "Yes, same-day delivery is available across Kasaragod for orders placed before 3 PM." }
    ]
  },

  "khagaria": {
    cityName: "Khagaria",
    metaTitle: "Flower Delivery in Khagaria | Flood Plains Bihar | RedHeart",
    metaDescription: "Order flowers in Khagaria, Bihar. Same-day delivery near Kosi River & across Khagaria. From ₹399.",
    h1: "Online Flower Delivery in Khagaria",
    metaKeyword: "flower delivery khagaria, online flowers khagaria bihar, florist khagaria, flowers khagaria kosi river flood plains kosi embankment north bihar irrigation ganga",
    footerContent: `
<h2>Flower Delivery in Khagaria — Kosi River's Flood-Shaped Plains and North Bihar's Agricultural Struggle</h2>
<p>Khagaria, on the Kosi River flood plains of north Bihar, is the headquarters of Khagaria district — a district shaped more than almost any other in India by the annual rhythm of river floods. The Kosi River (called "Bihar's Sorrow" — Biha ka Shok — for its catastrophic annual floods that have shifted its course over hundreds of kilometers in the last 250 years) dominates the district's geography. The Kosi embankment system (constructed in the 1950s–70s to contain the river) provides limited protection but has paradoxically trapped water inside the embankments, waterlogging vast areas. The 2008 Kosi floods (when the river breached the embankment at Kusaha in Nepal and changed course by 120 km) affected 2.5 million people in Khagaria and neighbouring districts. Despite this, Khagaria's agricultural communities grow rice, maize, and vegetables in the fertile silt deposits left by the floods.</p>
<p>RedHeart delivers flowers across Khagaria — Main Market, Mansi area, Chautham area, Alauli area, Parbalpur area, and Station Road. Our range includes roses, marigolds, lotus, and Bihar puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khagaria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mansi, Chautham, Alauli, Parbalpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, Chhath Puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Khagaria?", answer: "Yes, Chhath Puja (the Sun god worship festival at river ghats) is one of Bihar's biggest events. Lotus flowers and Chhath Puja sets are available for same-day delivery in Khagaria." },
      { question: "Can I get birthday flowers in Khagaria?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Khagaria for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Khagaria?", answer: "Yes, same-day delivery is available across Khagaria for orders placed before 3 PM." }
    ]
  },

  "bharuch": {
    cityName: "Bharuch",
    metaTitle: "Flower Delivery in Bharuch | Narmada Gujarat | RedHeart",
    metaDescription: "Order flowers in Bharuch, Gujarat. Same-day delivery near Narmada estuary & across Bharuch. From ₹399.",
    h1: "Online Flower Delivery in Bharuch",
    metaKeyword: "flower delivery bharuch, online flowers bharuch gujarat, florist bharuch, flowers bharuch narmada river broach petrochemical industrial reliance gcci ancient port",
    footerContent: `
<h2>Flower Delivery in Bharuch — Ancient Broach Port on the Narmada and India's Petrochemical Capital</h2>
<p>Bharuch (historically known as Broach), on the Narmada River estuary near the Gulf of Khambhat in Gujarat, is the headquarters of Bharuch district — one of India's oldest continuously inhabited cities (documented as a port since at least the 1st century BCE in the Periplus of the Erythraean Sea) and now one of Gujarat's most industrially significant districts. The ancient port of Barygaza (Bharuch) was described by Greek and Roman merchants as a major Indian Ocean trade hub exporting cotton, spices, indigo, and precious stones to Rome and Egypt. Today, Bharuch is India's chemical and petrochemical capital — the Dahej Special Economic Zone (SEZ) and the Ankleshwar-Panoli industrial estates in Bharuch district host the densest concentration of chemical industries in India (pharmaceuticals, petrochemicals, polymers), contributing enormously to Gujarat's industrial GDP. The Narmada estuary near Bharuch is one of Gujarat's most important wetland and mangrove ecosystems.</p>
<p>RedHeart delivers flowers across Bharuch — Main Market, Dahej area, Ankleshwar area, Jambusar area, Vagra area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharuch, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dahej, Ankleshwar, Jambusar, Vagra, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Navratri available in Bharuch?", answer: "Yes, Navratri Garba is enthusiastically celebrated in Bharuch. Marigold garlands and festive flower sets for the 9-night Garba are available for same-day delivery." },
      { question: "Can I get birthday flowers in Bharuch?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Bharuch for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Bharuch?", answer: "Yes, same-day delivery is available across Bharuch for orders placed before 3 PM." }
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
