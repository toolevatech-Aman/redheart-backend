// Batch 59 — 15 cities:
// MP: Balaghat, Mandla, Umaria, Damoh, Sehore
// Maharashtra: Yavatmal, Gadchiroli, Gondia, Bhandara
// UP: Ambedkar Nagar, Bhadohi (Sant Ravidas Nagar), Sultanpur
// Uttarakhand: Bageshwar, Champawat
// HP: Lahaul-Spiti (Keylong)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "balaghat": {
    cityName: "Balaghat",
    metaTitle: "Flower Delivery in Balaghat | Copper Mines MP | RedHeart",
    metaDescription: "Order flowers in Balaghat, MP. Same-day delivery near Kanha Tiger Reserve & across Balaghat. From ₹399.",
    h1: "Online Flower Delivery in Balaghat",
    metaKeyword: "flower delivery balaghat, online flowers balaghat madhya pradesh, florist balaghat, flowers balaghat copper mines kanha tiger reserve wainganga malanjkhand baiga tribe",
    footerContent: `
<h2>Flower Delivery in Balaghat — Malanjkhand Copper and Kanha's Tiger Forests of the Maikal Hills</h2>
<p>Balaghat, in the Maikal Hills bordering Maharashtra and Chhattisgarh in Madhya Pradesh, is the headquarters of Balaghat district — a district of exceptional mineral wealth and wildlife. The Malanjkhand Copper Mine (in Balaghat district) is one of Asia's largest open-cast copper mines, operated by Hindustan Copper Limited, and is India's most significant copper ore producer. The Wainganga River (the river of Rudyard Kipling's Jungle Book, as the "Waingunga") originates in the Satpura hills near Balaghat and flows into Chhattisgarh and Maharashtra. The Kanha Tiger Reserve — one of India's finest and most visited tiger reserves (Kipling's inspiration for The Jungle Book, where Mowgli's story is set) — is in adjacent Mandla/Balaghat district. The district has a significant Baiga tribal community (the Baiga are a Particularly Vulnerable Tribal Group living in the sal forests, known for intricate body tattooing and forest knowledge).</p>
<p>RedHeart delivers flowers across Balaghat — Main Market, Malanjkhand area, Waraseoni area, Baihar area, Lanjhi area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balaghat, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Malanjkhand, Waraseoni, Baihar, Lanjhi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal forest-inspired bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Kanha Tiger Reserve jungle resort stay from Balaghat?", answer: "Yes, Kanha Tiger Reserve (Jungle Book inspiration) is in the Balaghat-Mandla belt. Seasonal bouquets for Kanha jungle lodge gifting are available from Balaghat." },
      { question: "Can I get birthday flowers in Balaghat?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Balaghat for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Balaghat?", answer: "Yes, same-day delivery is available across Balaghat for orders placed before 3 PM." }
    ]
  },

  "mandla": {
    cityName: "Mandla",
    metaTitle: "Flower Delivery in Mandla | Kanha Tiger Reserve MP | RedHeart",
    metaDescription: "Order flowers in Mandla, MP. Same-day delivery near Kanha National Park & across Mandla. From ₹399.",
    h1: "Online Flower Delivery in Mandla",
    metaKeyword: "flower delivery mandla, online flowers mandla madhya pradesh, florist mandla, flowers mandla kanha national park narmada nag raja gond baiga jungle book wainganga",
    footerContent: `
<h2>Flower Delivery in Mandla — Kanha's Jungle Book Forests and the Narmada's Sacred Source District</h2>
<p>Mandla, on a peninsula nearly encircled by the Narmada River in Madhya Pradesh, is the headquarters of Mandla district — a district of extraordinary natural and mythological significance. The Kanha National Park (India's first tiger reserve, established 1955, now Kanha Tiger Reserve, 940 km²) — the primary inspiration for Rudyard Kipling's The Jungle Book — has its core zone in Mandla district. Kanha's barasingha (hard-ground swamp deer) — saved from extinction here — is a global conservation success story. Mandla was the capital of the Gond Kingdom of the Garha-Mandla dynasty (1400s–1700s) — particularly under the legendary Queen Rani Durgavati of Garha-Katanga who resisted the Mughal general Asaf Khan in 1564 (sacrificing herself rather than surrendering). The Narmada river's broad, ancient gorge around Mandla is a sacred pilgrimage corridor.</p>
<p>RedHeart delivers flowers across Mandla — Main Market, Kanha area, Bichhiya area, Nainpur area, Mawai area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandla, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kanha area, Bichhiya, Nainpur, Mawai, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, forest flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Kanha Tiger Reserve stay from Mandla?", answer: "Yes, Kanha Tiger Reserve (Jungle Book inspiration, core zone in Mandla district) is one of India's finest parks. Seasonal bouquets for Kanha resort gifting are available from Mandla." },
      { question: "Can I get birthday flowers in Mandla?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Mandla for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Mandla?", answer: "Yes, same-day delivery is available across Mandla for orders placed before 3 PM." }
    ]
  },

  "umaria": {
    cityName: "Umaria",
    metaTitle: "Flower Delivery in Umaria | Bandhavgarh MP | RedHeart",
    metaDescription: "Order flowers in Umaria, MP. Same-day delivery near Bandhavgarh Tiger Reserve & across Umaria. From ₹399.",
    h1: "Online Flower Delivery in Umaria",
    metaKeyword: "flower delivery umaria, online flowers umaria madhya pradesh, florist umaria, flowers umaria bandhavgarh tiger reserve lord vishnu ancient vishnu gond white tiger",
    footerContent: `
<h2>Flower Delivery in Umaria — Bandhavgarh's Ancient Vishnu Fort and the Home of India's Last White Tiger</h2>
<p>Umaria, in the Vindhya highlands of Madhya Pradesh, is the headquarters of Umaria district — home to the Bandhavgarh National Park (now Bandhavgarh Tiger Reserve), one of India's most celebrated and wildlife-dense tiger reserves. Bandhavgarh has the highest density of Bengal tigers recorded in any Indian reserve. The Bandhavgarh Fort — perched on a cliff 800 m above the surrounding plains — is a 2,000-year-old fortress with an ancient Sheshsayi Vishnu idol (a massive 11-metre reclining Vishnu carved into the rock, believed to be one of the largest in India). The last recorded wild white tiger (a leucistic Bengal tiger, a rare genetic variant) was captured from Bandhavgarh in 1951 and was named Mohan — the ancestor of all white tigers in captivity globally. Umaria district also has significant coal deposits and tribal (Gond, Baiga) communities.</p>
<p>RedHeart delivers flowers across Umaria — Main Market, Bandhavgarh area, Chandia area, Pali area, Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Umaria, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bandhavgarh area, Chandia, Pali, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Bandhavgarh Tiger Reserve stay from Umaria?", answer: "Yes, Bandhavgarh Tiger Reserve (highest tiger density in India, ancient Vishnu fort) is in Umaria district. Seasonal bouquets for Bandhavgarh safari resort gifting are available." },
      { question: "Can I get birthday flowers in Umaria?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Umaria for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Umaria?", answer: "Yes, same-day delivery is available across Umaria for orders placed before 3 PM." }
    ]
  },

  "damoh": {
    cityName: "Damoh",
    metaTitle: "Flower Delivery in Damoh | Vindhya MP | RedHeart",
    metaDescription: "Order flowers in Damoh, MP. Same-day delivery near Nohta Dam & across Damoh. From ₹399.",
    h1: "Online Flower Delivery in Damoh",
    metaKeyword: "flower delivery damoh, online flowers damoh madhya pradesh, florist damoh, flowers damoh singrampur vindhya banda nohta dam singaji temple shivarinath saint",
    footerContent: `
<h2>Flower Delivery in Damoh — Singaji's Saint Heritage and the Vindhyan Limestone Plateau</h2>
<p>Damoh, on the Vindhyan plateau of Madhya Pradesh between the Narmada and Yamuna basins, is the headquarters of Damoh district — a district of religious heritage and limestone-rich geography. The district is associated with Singaji (also known as Sadhu Singaji), a 15th-century folk saint of the Kabir tradition who is revered across the Bundelkhand and Malwa belt — the Singaji temple at Pandharpur (Khategaon, near Damoh) and the Singaji memorial at Damoh are pilgrimage destinations for his large community of followers. The Nohta Dam (on the Byarma River) and the Damoh district's limestone quarries (the Vindhyan sandstone-limestone terrain) are geological features. The district has the Singrampur area's ancient Buddhist remains. Damoh's position between Sagar and Jabalpur places it in a fertile agricultural corridor.</p>
<p>RedHeart delivers flowers across Damoh — Main Market, Hatta area, Jabera area, Patharia area, Tendukhera area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Damoh, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hatta, Jabera, Patharia, Tendukhera, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Damoh?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Damoh for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Damoh?", answer: "Yes, marigold garlands and puja sets for Navratri, Diwali, and other festivals are available for same-day delivery in Damoh." },
      { question: "Do you deliver flowers same day in Damoh?", answer: "Yes, same-day delivery is available across Damoh for orders placed before 3 PM." }
    ]
  },

  "sehore": {
    cityName: "Sehore",
    metaTitle: "Flower Delivery in Sehore | Bhopal Belt MP | RedHeart",
    metaDescription: "Order flowers in Sehore, MP. Same-day delivery near Bhopal & across Sehore. From ₹399.",
    h1: "Online Flower Delivery in Sehore",
    metaKeyword: "flower delivery sehore, online flowers sehore madhya pradesh, florist sehore, flowers sehore bhopal seoni narmada soybean wheat ashapura mata reiti famous",
    footerContent: `
<h2>Flower Delivery in Sehore — Bhopal's Agricultural Hinterland and the Ashapura Mata Sacred Landscape</h2>
<p>Sehore, in central Madhya Pradesh near Bhopal, is the headquarters of Sehore district — a fertile agricultural district in the Narmada basin's upper catchment area. Sehore was once an important district capital under British India's Central Provinces and continues as an administrative and agricultural hub for the Bhopal-Indore corridor. The Ashapura Mata temple (a significant Shakti shrine near Sehore) draws pilgrims during Navratri. Sehore district is one of MP's major soybean and wheat-growing areas — the fertile black cotton soils of this region produce high yields, and Sehore's agricultural produce market (APMC) is one of the major grain trading centres for central MP. The district also has a growing industrial presence as part of Bhopal's expanding metro influence, and the Bhopal-Indore NH-46 corridor creates commercial activity.</p>
<p>RedHeart delivers flowers across Sehore — Main Market, Ashta area, Budhni area, Ichhawar area, Nasrullaganj area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sehore, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ashta, Budhni, Ichhawar, Nasrullaganj, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Sehore?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sehore for orders placed before 3 PM." },
      { question: "Are flowers for Navratri available in Sehore?", answer: "Yes, the Ashapura Mata temple and Navratri celebrations make Sehore a devotional centre. Marigold garlands and Devi puja flowers are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Sehore?", answer: "Yes, same-day delivery is available across Sehore for orders placed before 3 PM." }
    ]
  },

  "yavatmal": {
    cityName: "Yavatmal",
    metaTitle: "Flower Delivery in Yavatmal | Vidarbha Maharashtra | RedHeart",
    metaDescription: "Order flowers in Yavatmal, Maharashtra. Same-day delivery near Panbhoji & across Yavatmal. From ₹399.",
    h1: "Online Flower Delivery in Yavatmal",
    metaKeyword: "flower delivery yavatmal, online flowers yavatmal maharashtra, florist yavatmal, flowers yavatmal vidarbha cotton farmer wardha wardha valley saint gadge maharaj",
    footerContent: `
<h2>Flower Delivery in Yavatmal — Wardha Valley Cotton and Saint Gadge Maharaj's Social Reform Legacy</h2>
<p>Yavatmal, on the Wardha River plain in the Vidarbha region of Maharashtra, is the headquarters of Yavatmal district — a district that became a symbol of India's agrarian crisis in the 2000s, when the combination of cotton price crashes, Bt cotton adoption costs, and debt led to a wave of farmer suicides that drew national and global attention. The district has since seen government intervention programs, but the memory and ongoing challenge of smallholder cotton farmer distress remain defining features. Yavatmal is associated with the social reform saint Gadge Maharaj (Debuji Zhingraji Janorkar, 1876–1956) — a Vidarbha-born reformer who walked barefoot across Maharashtra cleaning streets and teaching social equality, and whose work is honoured across Vidarbha. The Painganga Wildlife Sanctuary (on the Painganga River, MP border) has wildlife including tigers and leopards.</p>
<p>RedHeart delivers flowers across Yavatmal — Main Market, Pusad area, Wani area, Digras area, Arni area, and Station Road. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yavatmal, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Pusad, Wani, Digras, Arni, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maharashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Yavatmal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Yavatmal for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Yavatmal?", answer: "Yes, marigold garlands and puja sets for Navratri, Diwali, and Ganesh Chaturthi are available for same-day delivery in Yavatmal." },
      { question: "Do you deliver flowers same day in Yavatmal?", answer: "Yes, same-day delivery is available across Yavatmal for orders placed before 3 PM." }
    ]
  },

  "gadchiroli": {
    cityName: "Gadchiroli",
    metaTitle: "Flower Delivery in Gadchiroli | Tribal Forest Maharashtra | RedHeart",
    metaDescription: "Order flowers in Gadchiroli, Maharashtra. Same-day delivery near Allapalli & across Gadchiroli. From ₹399.",
    h1: "Online Flower Delivery in Gadchiroli",
    metaKeyword: "flower delivery gadchiroli, online flowers gadchiroli maharashtra, florist gadchiroli, flowers gadchiroli gond tribal forest surjagad iron ore pranhita wardha maoist",
    footerContent: `
<h2>Flower Delivery in Gadchiroli — Gond Tribal Forests, Iron Ore Hills, and the Pranhita River Wilderness</h2>
<p>Gadchiroli, in the far east of Maharashtra at the Chhattisgarh and Telangana borders, is the headquarters of Gadchiroli district — Maharashtra's most forested and one of India's most tribal districts. The district is dominated by dense sal, teak, and bamboo forests, and has a population that is predominantly Gond, Madia, and Halba tribal communities. The Surjagad Hill in Gadchiroli contains one of India's largest iron ore deposits (estimated at over 1 billion tonnes of high-grade hematite), which has been a subject of intense debate between industrial development and tribal-forest rights. The Pranhita River (Godavari's major tributary) forms the Telangana border. The Nawegaon-Nagzira Tiger Reserve (partially in Gadchiroli) and the Tadoba-Andhari Tiger Reserve's buffer zone create a major wildlife corridor. The Allapalli teak forests are some of India's oldest managed teak plantations.</p>
<p>RedHeart delivers flowers across Gadchiroli — Main Market, Allapalli area, Chamorshi area, Kurkheda area, Aheri area, and Station Road. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gadchiroli, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Allapalli, Chamorshi, Kurkheda, Aheri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maharashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Gadchiroli?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Gadchiroli for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Gadchiroli?", answer: "Yes, marigold garlands and puja sets for tribal festivals, Diwali, and Navratri are available for same-day delivery in Gadchiroli." },
      { question: "Do you deliver flowers same day in Gadchiroli?", answer: "Yes, same-day delivery is available across Gadchiroli for orders placed before 3 PM." }
    ]
  },

  "gondia": {
    cityName: "Gondia",
    metaTitle: "Flower Delivery in Gondia | Rice City Maharashtra | RedHeart",
    metaDescription: "Order flowers in Gondia, Maharashtra. Same-day delivery near Navegaon & across Gondia. From ₹399.",
    h1: "Online Flower Delivery in Gondia",
    metaKeyword: "flower delivery gondia, online flowers gondia maharashtra, florist gondia, flowers gondia rice city nawegaon nagzira tiger reserve nagpur chhattisgarh border bamboo",
    footerContent: `
<h2>Flower Delivery in Gondia — Maharashtra's Rice Bowl and the Navegaon-Nagzira Wildlife Corridor</h2>
<p>Gondia, in the northeastern corner of Maharashtra at the Chhattisgarh and Madhya Pradesh borders, is the headquarters of Gondia district — known as the "Rice City" of Maharashtra for its extensive paddy cultivation on the fertile plains of the Bhandara-Gondia-Balaghat rice bowl. Gondia has significant rice processing industries (paddy mills and rice mills) and is a key agricultural trade centre for the region. The Navegaon-Nagzira Tiger Reserve (created by merging the Navegaon National Park and Nagzira Wildlife Sanctuary, both in Gondia district) protects a major tiger habitat and wildlife corridor linking Tadoba, Pench, and Kanha. The Navegaon Lake (man-made, in Navegaon National Park) is a scenic birdwatching destination. Gondia is also an important railway junction, with the South East Central Railway connecting to Raipur and Nagpur.</p>
<p>RedHeart delivers flowers across Gondia — Main Market, Navegaon area, Tirora area, Deori area, Salekasa area, and Station Road. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gondia, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Navegaon, Tirora, Deori, Salekasa, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maharashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Navegaon-Nagzira Tiger Reserve visit from Gondia?", answer: "Yes, Navegaon-Nagzira Tiger Reserve (in Gondia district, the major wildlife corridor of northeast Maharashtra) is accessible from Gondia. Seasonal bouquets for jungle resort stays are available." },
      { question: "Can I get birthday flowers in Gondia?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Gondia for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Gondia?", answer: "Yes, same-day delivery is available across Gondia for orders placed before 3 PM." }
    ]
  },

  "bhandara": {
    cityName: "Bhandara",
    metaTitle: "Flower Delivery in Bhandara | Nagpur Maharashtra | RedHeart",
    metaDescription: "Order flowers in Bhandara, Maharashtra. Same-day delivery near Navegaon & across Bhandara. From ₹399.",
    h1: "Online Flower Delivery in Bhandara",
    metaKeyword: "flower delivery bhandara, online flowers bhandara maharashtra, florist bhandara, flowers bhandara wainganga rice lake vidarbha nagpur district brass metal crafts",
    footerContent: `
<h2>Flower Delivery in Bhandara — Wainganga's Lake-Rich Plains and Vidarbha's Brass Craft Heritage</h2>
<p>Bhandara, on the Wainganga River plains in the Vidarbha region of Maharashtra near Nagpur, is the headquarters of Bhandara district — a district of lake-studded fertile plains and traditional craft heritage. Bhandara district has a remarkable network of irrigation tanks and small lakes (locally called "tanks" — this area has more man-made tanks per square kilometre than almost anywhere in India, a pre-modern water management legacy). Bhandara is the traditional centre of brassware and metal craft in Vidarbha — Bhandara's brass idols, utensils, and decorative items (made by the Mahakali and other artisan communities) have a regional reputation. The Wainganga River (Jungle Book's "Waingunga") flows through the district. Bhandara-Gondia together form the major rice-growing belt of eastern Maharashtra.</p>
<p>RedHeart delivers flowers across Bhandara — Main Market, Mohadi area, Lakhandur area, Tumsar area, Pauni area, and Station Road. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhandara, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mohadi, Lakhandur, Tumsar, Pauni, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maharashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Bhandara?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Bhandara for orders placed before 3 PM." },
      { question: "Are flowers for Ganesh Chaturthi available in Bhandara?", answer: "Yes, Ganesh Chaturthi is widely celebrated in Bhandara. Marigold garlands and Ganpati puja flower sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Bhandara?", answer: "Yes, same-day delivery is available across Bhandara for orders placed before 3 PM." }
    ]
  },

  "ambedkar-nagar": {
    cityName: "Ambedkar Nagar",
    metaTitle: "Flower Delivery in Ambedkar Nagar | Faizabad UP | RedHeart",
    metaDescription: "Order flowers in Ambedkar Nagar, UP. Same-day delivery near Ayodhya belt & across Ambedkar Nagar. From ₹399.",
    h1: "Online Flower Delivery in Ambedkar Nagar",
    metaKeyword: "flower delivery ambedkar nagar, online flowers ambedkar nagar uttar pradesh, florist ambedkar nagar, flowers ambedkar nagar akbarpur faizabad ayodhya ghaghra dalit bahujan",
    footerContent: `
<h2>Flower Delivery in Ambedkar Nagar — Bahujan Movement's Symbolic District and the Ghaghra Alluvial Plains</h2>
<p>Ambedkar Nagar, on the Ghaghra (Saryu) River plains of eastern Uttar Pradesh, is the headquarters of Ambedkar Nagar district — named in honour of Dr. B.R. Ambedkar (Bhimrao Ramji Ambedkar, the architect of the Indian Constitution, champion of Dalit rights, and one of India's most transformative leaders). The district, with headquarters at Akbarpur, was carved from Faizabad district in 1995 as part of the Bahujan Samaj Party's policy of creating districts named after Dalit and backward-caste icons. The district is in the cultural belt of the Faizabad-Ayodhya region (Ayodhya being just 30–40 km away) and has significant Hindu pilgrimage footfall. The Ghaghra (Saryu) River — the sacred river on the banks of which Ayodhya stands — flows through the district. The area is associated with the Bhakti tradition of the Awadh region.</p>
<p>RedHeart delivers flowers across Ambedkar Nagar — Main Market (Akbarpur), Tanda area, Jalalpur area, Bhiti area, Allapur area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambedkar Nagar (Akbarpur), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Akbarpur, Tanda, Jalalpur, Bhiti, Allapur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Ambedkar Nagar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ambedkar Nagar (Akbarpur) for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Ambedkar Nagar?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Ambedkar Nagar." },
      { question: "Do you deliver flowers same day in Ambedkar Nagar?", answer: "Yes, same-day delivery is available across Ambedkar Nagar for orders placed before 3 PM." }
    ]
  },

  "bhadohi": {
    cityName: "Bhadohi",
    metaTitle: "Flower Delivery in Bhadohi | Carpet City UP | RedHeart",
    metaDescription: "Order flowers in Bhadohi (Sant Ravidas Nagar), UP. Same-day delivery near Varanasi & across Bhadohi. From ₹399.",
    h1: "Online Flower Delivery in Bhadohi",
    metaKeyword: "flower delivery bhadohi, online flowers bhadohi sant ravidas nagar uttar pradesh, florist bhadohi, flowers bhadohi carpet city persian carpet mirzapur ganga varanasi",
    footerContent: `
<h2>Flower Delivery in Bhadohi — Carpet City of the World and Sant Ravidas's Sacred Ganga Banks</h2>
<p>Bhadohi (officially Sant Ravidas Nagar — renamed in 2008 to honour the 15th-century Bhakti saint Sant Ravidas, a revered figure in the Dalit community born near Varanasi), in eastern Uttar Pradesh between Varanasi and Allahabad, is the headquarters of Bhadohi district — and the undisputed carpet capital of India and one of the world's most important hand-knotted carpet manufacturing centres. The Bhadohi-Mirzapur carpet belt produces a substantial proportion of India's carpet exports (valued at several thousand crore rupees annually), with Persian-pattern hand-knotted carpets woven on pit looms by hundreds of thousands of weavers in the villages of the district. The Indian Carpet Expo (Varanasi) showcases Bhadohi and Mirzapur carpets to global buyers. The Ganga River flows north of Bhadohi, with Sant Ravidas's shrine at Seer Govardhanpur, Varanasi, being a major pilgrimage for Ravidas followers from across India.</p>
<p>RedHeart delivers flowers across Bhadohi — Main Market, Gopiganj area, Aurai area, Suriyawan area, Gyanpur area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhadohi (Sant Ravidas Nagar), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gopiganj, Aurai, Suriyawan, Gyanpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Bhadohi?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Bhadohi for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Bhadohi?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Bhadohi." },
      { question: "Do you deliver flowers same day in Bhadohi?", answer: "Yes, same-day delivery is available across Bhadohi (Sant Ravidas Nagar) for orders placed before 3 PM." }
    ]
  },

  "sultanpur": {
    cityName: "Sultanpur",
    metaTitle: "Flower Delivery in Sultanpur | Gomti UP | RedHeart",
    metaDescription: "Order flowers in Sultanpur, UP. Same-day delivery near Gomti River & across Sultanpur. From ₹399.",
    h1: "Online Flower Delivery in Sultanpur",
    metaKeyword: "flower delivery sultanpur, online flowers sultanpur uttar pradesh, florist sultanpur, flowers sultanpur gomti river awadh national bird sanctuary lucknow varanasi maneka gandhi",
    footerContent: `
<h2>Flower Delivery in Sultanpur — Gomti River Wetlands, National Bird Sanctuary, and the Awadh Interior</h2>
<p>Sultanpur, on the Gomti River in the heart of Uttar Pradesh's Awadh region, is the headquarters of Sultanpur district — known for the Sultanpur National Park (Sultanpur Bird Sanctuary / Sultanpur National Park), a significant wetland and grassland reserve in the Haryana-UP belt that hosts over 250 bird species, including migratory ducks, geese, cranes, raptors, and resident species like painted storks and black-necked storks. Sultanpur district has political significance as the constituency of the Gandhi family — Maneka Gandhi (Sanjay Gandhi's widow and animal rights activist) represented Sultanpur in Parliament for multiple terms. The Gomti River — a 960 km Ghaghra tributary flowing through Lucknow, Sultanpur, and Varanasi — is both a daily life resource and a sacred waterway. The Awadhi cultural belt's music, language, and religious traditions thrive here.</p>
<p>RedHeart delivers flowers across Sultanpur — Main Market, Musafirkhana area, Lambhua area, Kadipur area, Akhand Nagar area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sultanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Musafirkhana, Lambhua, Kadipur, Akhand Nagar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Sultanpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sultanpur for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Sultanpur?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Sultanpur." },
      { question: "Do you deliver flowers same day in Sultanpur?", answer: "Yes, same-day delivery is available across Sultanpur for orders placed before 3 PM." }
    ]
  },

  "bageshwar": {
    cityName: "Bageshwar",
    metaTitle: "Flower Delivery in Bageshwar | Kumaon Pilgrimage Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Bageshwar, Uttarakhand. Same-day delivery near Saryu River & across Bageshwar. From ₹399.",
    h1: "Online Flower Delivery in Bageshwar",
    metaKeyword: "flower delivery bageshwar, online flowers bageshwar uttarakhand, florist bageshwar, flowers bageshwar saryu gomti confluence bagnath shiva uttarayani mela kumaon",
    footerContent: `
<h2>Flower Delivery in Bageshwar — Bagnath Shiva Temple at the Sacred Confluence of Saryu and Gomati</h2>
<p>Bageshwar, at the confluence of the Saryu and Gomati rivers in the Kumaon Himalayas of Uttarakhand, is the headquarters of Bageshwar district — a deeply sacred pilgrimage town and the gateway to the Pindari, Kafni, and Sunderdhunga Glaciers. The Bagnath Shiva temple (believed to be the abode of Lord Shiva as "Vyaghreshwar" — the Lord of Tigers) is the oldest and most sacred temple in Bageshwar, visited by hundreds of thousands of pilgrims especially during Mahashivaratri and Uttarayani (Makar Sankranti). The Uttarayani Mela (Bageshwar's January fair at the Saryu-Gomati sangam) is one of Kumaon's largest traditional fairs. The Saryu River flows through Bageshwar's scenic valley flanked by the Kumaon ranges. The Chandika Mandir (Chandeshwar) above Bageshwar has panoramic Himalayan views. Bageshwar district was a centre of the Kumaon Chipko (tree-hugging) environmental movement of the 1970s.</p>
<p>RedHeart delivers flowers across Bageshwar — Main Market, Bagnath area, Kanda area, Kapkot area, Garud area, and Station Road. Our range includes roses, seasonal Himalayan flowers, marigolds, and Shiva puja bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bageshwar, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bagnath area, Kanda, Kapkot, Garud, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, bilva, Himalayan wildflowers, Shiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Bagnath Shiva temple puja available in Bageshwar?", answer: "Yes, the Bagnath Shiva temple (Lord Shiva as Vyaghreshwar) and the Mahashivaratri pilgrimage are central to Bageshwar. Bilva leaves, marigold garlands, and Shiva puja flower sets are available." },
      { question: "Are flowers for the Uttarayani Mela in Bageshwar available?", answer: "Yes, the Uttarayani Mela (January, at the Saryu-Gomati sangam) is one of Kumaon's biggest fairs. Seasonal flowers and puja sets for the Uttarayani pilgrimage are available." },
      { question: "Do you deliver flowers same day in Bageshwar?", answer: "Yes, same-day delivery is available across Bageshwar for orders placed before 3 PM." }
    ]
  },

  "lahaul-spiti": {
    cityName: "Lahaul-Spiti",
    metaTitle: "Flower Delivery in Lahaul-Spiti | Keylong HP | RedHeart",
    metaDescription: "Order flowers in Lahaul-Spiti (Keylong), HP. Same-day delivery near Rohtang & across Lahaul-Spiti. From ₹399.",
    h1: "Online Flower Delivery in Lahaul-Spiti",
    metaKeyword: "flower delivery lahaul spiti, online flowers lahaul-spiti keylong himachal pradesh, florist lahaul spiti, flowers lahaul spiti rohtang pass tibetan buddhism key monastery pin valley",
    footerContent: `
<h2>Flower Delivery in Lahaul-Spiti — Rohtang Pass, Tibetan Buddhist Monasteries, and India's High-Desert Wilderness</h2>
<p>Lahaul-Spiti, divided by the Rohtang Pass (3,978 m) in the high Himalayas of Himachal Pradesh bordering Tibet (China), is India's largest district (24,000+ km²) and one of its least densely populated — a stark, beautiful trans-Himalayan desert landscape of glaciers, ancient Buddhist gompa (monasteries), and a Tibetan-Lahuali cultural identity. The Spiti Valley (the "Middle Land" — Spiti meaning "middle" in Tibetan) is an isolated high-desert valley with monasteries including Key Monastery (Ki Gompa, 1000+ year old, at 4,166 m), Dhankar Gompa, and Tabo Monastery (founded 996 CE, UNESCO-nominated, the "Ajanta of the Himalayas" for its ancient murals). The Lahaul valley (greener, with potatoes, peas, and medicinal plants) is separated from Spiti by the Kunzum Pass. The Keylong is the district headquarters. The Atal Tunnel (world's longest highway tunnel above 10,000 ft, 9.02 km) provides year-round connectivity to Lahaul, a historic first.</p>
<p>RedHeart delivers flowers across Lahaul-Spiti — Keylong (district HQ), Kaza (Spiti), Udaipur (Lahaul), Sissu area, and Kye Monastery area. Our range includes seasonal mountain flowers, marigolds, and Buddhist puja bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lahaul-Spiti (Keylong), Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Keylong, Kaza, Udaipur, Sissu, Kye Monastery area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Seasonal mountain flowers, marigolds, Buddhist offering flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Tibetan Buddhist monastery offerings available in Lahaul-Spiti?", answer: "Yes, the ancient Buddhist monasteries of Spiti (Key Gompa, Tabo, Dhankar) hold regular puja and festivals. Marigolds, seasonal wildflowers, and Buddhist offering arrangements are available." },
      { question: "Can I get flowers for a Spiti Valley adventure trip stay?", answer: "Yes, Spiti Valley's remote guesthouses and campsites are increasingly popular with adventurous travellers. Seasonal mountain bouquets for valley resort gifting are available from Keylong/Lahaul-Spiti." },
      { question: "Do you deliver flowers same day in Lahaul-Spiti?", answer: "Yes, same-day delivery is available across Lahaul-Spiti (Keylong, Kaza and nearby areas) for orders placed before 3 PM." }
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
