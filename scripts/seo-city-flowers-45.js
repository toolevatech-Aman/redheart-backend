// Batch 45 — 15 cities:
// Bihar: Madhubani, Sheohar
// Telangana: Adilabad, Nirmal, Bhadradri Kothagudem, Mulugu
// Jharkhand: Dumka, Ramgarh, Lohardaga, Khunti, Gumla
// Karnataka: Bidar, Vijayapura
// Rajasthan: Pali
// Uttar Pradesh: Amethi

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "madhubani": {
    cityName: "Madhubani",
    metaTitle: "Flower Delivery in Madhubani | Mithila Painting Bihar | RedHeart",
    metaDescription: "Order flowers in Madhubani, Bihar. Same-day delivery near Mithila art villages & across Madhubani. From ₹399.",
    h1: "Online Flower Delivery in Madhubani",
    metaKeyword: "flower delivery madhubani, online flowers madhubani bihar, florist madhubani, flowers madhubani mithila painting art nepal kamla kosi",
    footerContent: `
<h2>Flower Delivery in Madhubani — The Living Canvas of Mithila Art at the Nepal Border</h2>
<p>Madhubani, in the Mithila region of northern Bihar near the Nepal border, gives its name to the world-famous Madhubani painting tradition — the brightly coloured, intricately geometric folk art practised by women of the Maithili Brahmin and Kayastha communities on walls and floors, now on paper and cloth, depicting deities, festivals, nature, and mythology. The art form's origins are traced to the time of the Ramayana (Sita was from Mithila — the ancient Videha kingdom centred on the Nepal-Bihar Terai), and it received global recognition from the 1960s when drought relief programmes documented and commercialised the tradition. The Kamla Balan River and the Kosi basin define the district's agricultural landscape. The Saurath Sabhasad (the largest Brahmin matchmaking fair in the world) is held annually in the district.</p>
<p>RedHeart delivers flowers across Madhubani — Main Market, Darbhanga Road, Jhanjharpur area, Benipatti area, and Station Road. Our range includes roses, marigolds, lotus, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhubani, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Darbhanga Road, Jhanjharpur, Benipatti, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, Chhath puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Madhubani?", answer: "Yes, Chhath Puja is celebrated with enormous fervour in Madhubani's Mithila community. Lotus, marigold, and arghya flower sets for the ghat celebrations are available." },
      { question: "Can I get flowers for a Madhubani art workshop visit?", answer: "Yes, bouquets for art heritage tourism stays and cultural workshop hosts in Madhubani are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Madhubani?", answer: "Yes, same-day delivery is available across Madhubani for orders placed before 3 PM." }
    ]
  },

  "sheohar": {
    cityName: "Sheohar",
    metaTitle: "Flower Delivery in Sheohar | Bihar | RedHeart",
    metaDescription: "Order flowers in Sheohar, Bihar. Same-day delivery across Sheohar district. From ₹399.",
    h1: "Online Flower Delivery in Sheohar",
    metaKeyword: "flower delivery sheohar, online flowers sheohar bihar, florist sheohar, flowers sheohar mithila bagmati terai nepal flood",
    footerContent: `
<h2>Flower Delivery in Sheohar — Bihar's Smallest District in the Bagmati-Trishula Flood Zone</h2>
<p>Sheohar, in the Mithila region of northern Bihar near Nepal, is the headquarters of Sheohar district — Bihar's smallest district by area and one of the most densely populated districts in India. The district sits in the Bagmati-Trishula River flood zone between the Sitamarhi and East Champaran districts; it is extremely flood-prone and experiences inundation almost every monsoon season. Despite its small size, Sheohar has significant historical and cultural presence as part of the Mithila cultural heartland — the Maithili language, Mithila art, and Chhath Puja traditions are deeply embedded here. The nearby Sitamarhi district (Sita's birthplace) and the Nepal border (25 km away) shape the cultural landscape. The district's sugarcane and paddy farmers depend on Terai irrigation channels.</p>
<p>RedHeart delivers flowers across Sheohar — Main Market, Muzaffarpur Road, Sitamarhi Road, Piprahi area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheohar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Muzaffarpur Road, Sitamarhi Road, Piprahi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Sheohar?", answer: "Yes, Chhath Puja is the biggest festival in Sheohar's Mithila community. Lotus, marigold, and banana flower arrangements for the ghat celebrations are available." },
      { question: "Can I get birthday flowers in Sheohar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sheohar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sheohar?", answer: "Yes, same-day delivery is available across Sheohar for orders placed before 3 PM." }
    ]
  },

  "adilabad": {
    cityName: "Adilabad",
    metaTitle: "Flower Delivery in Adilabad | North Telangana | RedHeart",
    metaDescription: "Order flowers in Adilabad, Telangana. Same-day delivery near Kawal Tiger Reserve & across Adilabad. From ₹399.",
    h1: "Online Flower Delivery in Adilabad",
    metaKeyword: "flower delivery adilabad, online flowers adilabad telangana, florist adilabad, flowers adilabad kawal tiger reserve gond tribal godavari",
    footerContent: `
<h2>Flower Delivery in Adilabad — Gond Tribal Country at the Godavari's Source on the Maharashtra-MP Border</h2>
<p>Adilabad, in the extreme north of Telangana bordering Maharashtra and Madhya Pradesh, is one of the most distinctive districts of the Deccan. The district has a significant Gond tribal population (including the Raj Gonds and Pardhan Gonds, who are the bardic storytellers of Gond mythology). The Kawal Wildlife Sanctuary and Tiger Reserve — one of Telangana's largest forest areas in the Godavari upper basin — protects tigers, leopards, and wild dogs in the teak forests of the Adilabad-Nirmal forested belt. The Godavari River (one of India's longest rivers) originates near the Maharashtra-Adilabad border. The Gond king Ballala Shah founded the walled town of Adilabad. The Sarsilla Sai temple and the Basara Saraswati temple (in adjacent Nirmal) are major pilgrimage points.</p>
<p>RedHeart delivers flowers across Adilabad — Main Road, Nirmal Road, Mancherial Road, Utnoor area, and Station Road. Our range includes roses, marigolds, seasonal Telangana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Adilabad, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Nirmal Road, Mancherial Road, Utnoor, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Telangana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Ugadi available in Adilabad?", answer: "Yes, Ugadi bouquets and seasonal arrangements for Telugu New Year are available in Adilabad for same-day delivery." },
      { question: "Can I get flowers for Sammakka-Saralamma Jatara from Adilabad?", answer: "Yes, marigold garlands and festive flower arrangements for the Medaram Jatara season (Telangana's biggest tribal festival) can be supplied from Adilabad." },
      { question: "Do you deliver flowers same day in Adilabad?", answer: "Yes, same-day delivery is available across Adilabad for orders placed before 3 PM." }
    ]
  },

  "nirmal": {
    cityName: "Nirmal",
    metaTitle: "Flower Delivery in Nirmal | Basara Saraswati Telangana | RedHeart",
    metaDescription: "Order flowers in Nirmal, Telangana. Same-day delivery near Basara temple & across Nirmal. From ₹399.",
    h1: "Online Flower Delivery in Nirmal",
    metaKeyword: "flower delivery nirmal, online flowers nirmal telangana, florist nirmal, flowers nirmal basara saraswati godavari nirmal toys",
    footerContent: `
<h2>Flower Delivery in Nirmal — Basara's Saraswati on the Godavari and the GI-Tagged Toy Tradition</h2>
<p>Nirmal, the headquarters of newly created Nirmal district in northern Telangana, is a city of two great cultural identities. The Basara Gnana Saraswati temple (on the Godavari River's bank at Basara, 10 km from Nirmal) — dedicated to the goddess of knowledge and wisdom — is one of India's most important Saraswati shrines, drawing enormous numbers of students and families on Vijayadasami (Dasara) when new academic beginnings are traditionally celebrated with Vidyarambha (initiation into learning). The Nirmal paintings and Nirmal toys (both GI-tagged) are a 500-year-old craft tradition of the Naqash artisan community — the wooden toys painted in bold colours with natural dyes and now sold globally. The city is on the Godavari's upper catchment in the Deccan plateau.</p>
<p>RedHeart delivers flowers across Nirmal — Main Road, Basara Road, Adilabad Road, Armoor area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Telangana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nirmal, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Basara Road, Adilabad Road, Armoor, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, Saraswati puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Basara Saraswati puja and Vidyarambha available from Nirmal?", answer: "Yes, jasmine, marigold, and Saraswati puja sets for the Basara Gnana Saraswati temple (10 km from Nirmal) on Vijayadasami are available from Nirmal." },
      { question: "Can I get flowers for Dasara in Nirmal?", answer: "Yes, Dasara is a very important festival in Nirmal because of the nearby Basara Saraswati temple. Marigold garlands and seasonal bouquets are available." },
      { question: "Do you deliver flowers same day in Nirmal?", answer: "Yes, same-day delivery is available across Nirmal for orders placed before 3 PM." }
    ]
  },

  "bhadradri-kothagudem": {
    cityName: "Bhadradri Kothagudem",
    metaTitle: "Flower Delivery in Bhadradri Kothagudem | Telangana | RedHeart",
    metaDescription: "Order flowers in Bhadradri Kothagudem, Telangana. Same-day delivery near Bhadrachalam & across Kothagudem. From ₹399.",
    h1: "Online Flower Delivery in Bhadradri Kothagudem",
    metaKeyword: "flower delivery bhadradri kothagudem, online flowers kothagudem telangana, florist kothagudem, flowers bhadrachalam rama godavari coal mines tribal",
    footerContent: `
<h2>Flower Delivery in Bhadradri Kothagudem — Bhadrachalam's Rama Temple and the Godavari's Forest Heartland</h2>
<p>Bhadradri Kothagudem, the headquarters of Bhadradri Kothagudem district in eastern Telangana, is centred on two distinct identities. Bhadrachalam town (on the Godavari's banks) is home to the Sita Ramachandra Swamy temple — one of the most significant Vaishnava temples in South India, considered among the 108 Divya Desams (sacred Vishnu shrines), and the site of the "Mutyala Pallaki" (pearl palanquin) festival on Vaikunta Ekadasi. The Kothagudem area has major coal mines operated by the Singareni Collieries Company Limited (SCCL) — Telangana's public sector coal enterprise. The Kinnerasani Wildlife Sanctuary protects the Godavari forest belt. The district has large Koya and Konda Reddy tribal populations in the Bhadrachalam agency (scheduled tribal area).</p>
<p>RedHeart delivers flowers across Bhadradri Kothagudem — Bhadrachalam temple area, Kothagudem town, Manuguru area, Yellandu, and Station Road. Our range includes roses, marigolds, Vaishnava puja flowers, and seasonal Telangana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhadradri Kothagudem, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhadrachalam, Kothagudem, Manuguru, Yellandu, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, lotus, roses, Bhadrachalam temple puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Bhadrachalam Sita Ramachandra Swamy temple puja available?", answer: "Yes, lotus, marigold, and Vaishnava puja sets for the Bhadrachalam Divya Desam temple on the Godavari are available from Kothagudem for same-day delivery." },
      { question: "Can I get flowers for Sri Rama Navami at Bhadrachalam?", answer: "Yes, Rama Navami at Bhadrachalam is one of Telangana's biggest pilgrimages. Festive marigold and rose arrangements are available during the season." },
      { question: "Do you deliver flowers same day in Bhadradri Kothagudem?", answer: "Yes, same-day delivery is available across Bhadradri Kothagudem for orders placed before 3 PM." }
    ]
  },

  "mulugu": {
    cityName: "Mulugu",
    metaTitle: "Flower Delivery in Mulugu | Medaram Jatara Telangana | RedHeart",
    metaDescription: "Order flowers in Mulugu, Telangana. Same-day delivery near Medaram Jatara & across Mulugu. From ₹399.",
    h1: "Online Flower Delivery in Mulugu",
    metaKeyword: "flower delivery mulugu, online flowers mulugu telangana, florist mulugu, flowers mulugu medaram jatara sammakka saralamma gond tribal",
    footerContent: `
<h2>Flower Delivery in Mulugu — Medaram's Sacred Forest and India's Largest Tribal Festival</h2>
<p>Mulugu, in eastern Telangana, is the headquarters of Mulugu district — a forested district at the heart of the Gond tribal belt in the Eastern Ghats where the Godavari and its tributaries carve through dense sal and teak forests. Mulugu district is home to Medaram — the site of the Sammakka-Saralamma Jatara (held every two years in the month of Magha/February), which is recognised as the largest tribal religious gathering in the world, drawing over 1 crore pilgrims (10 million) to the forest shrine of Sammakka and Saralamma (a mother-daughter pair of Gond chieftains from the 13th century CE who became deified for dying in resistance to the Kakatiyas). The Eturunagaram Wildlife Sanctuary and the Laknavaram Lake are scenic landscapes in the district.</p>
<p>RedHeart delivers flowers across Mulugu — Main Market, Medaram Road, Warangal Road, Tadvai area, and Station Road. Our range includes roses, marigolds, seasonal Telangana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mulugu, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Medaram Road, Warangal Road, Tadvai, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Telangana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Sammakka-Saralamma Medaram Jatara available from Mulugu?", answer: "Yes, the Medaram Jatara (world's largest tribal festival, biennial in February) draws 1 crore+ pilgrims. Marigold garlands and flower offerings for the Sammakka-Saralamma shrine are available from Mulugu." },
      { question: "Can I get flowers for Ugadi in Mulugu?", answer: "Yes, Ugadi bouquets and seasonal arrangements for Telugu New Year are available in Mulugu for same-day delivery." },
      { question: "Do you deliver flowers same day in Mulugu?", answer: "Yes, same-day delivery is available across Mulugu for orders placed before 3 PM." }
    ]
  },

  "dumka": {
    cityName: "Dumka",
    metaTitle: "Flower Delivery in Dumka | Santhal Parganas Jharkhand | RedHeart",
    metaDescription: "Order flowers in Dumka, Jharkhand. Same-day delivery near Massanjore Dam & across Dumka. From ₹399.",
    h1: "Online Flower Delivery in Dumka",
    metaKeyword: "flower delivery dumka, online flowers dumka jharkhand, florist dumka, flowers dumka santhal parganas santhali tribal mayurakshi",
    footerContent: `
<h2>Flower Delivery in Dumka — Capital of the Santhal Parganas and Jharkhand's Cultural Sub-Trunk</h2>
<p>Dumka, in the Santhal Parganas region of eastern Jharkhand near the West Bengal border, is the headquarters of Dumka district and the divisional headquarters of the Santhal Parganas — a historically distinct administrative zone created after the Santhal Hul (Santhal Rebellion of 1855-56, led by Sidhu-Kanhu Murmu brothers), which was one of the largest tribal uprisings against British rule. The Santhali people are the third-largest tribal group in India, with their own script (Ol Chiki) and language. The Massanjore Dam (on the Mayurakshi River, built with German reparations money post-WWII) is a scenic reservoir in Dumka. The Maluti village (220 terracotta temples, a heritage cluster near Dumka) is extraordinary. Baidyanath Dham (one of the 12 Jyotirlingas) is about 60 km from Dumka.</p>
<p>RedHeart delivers flowers across Dumka — Main Market, Deoghar Road, Jamtara Road, Shikaripara area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dumka, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Deoghar Road, Jamtara Road, Shikaripara, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Jharkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sohrai (Santhal harvest festival) available in Dumka?", answer: "Yes, Sohrai and Karma (the Santhali and Adivasi tribal festivals of Jharkhand) are celebrated in Dumka. Seasonal marigold and forest flower arrangements for the occasions are available." },
      { question: "Can I get flowers for Diwali in Dumka?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Dumka for same-day delivery." },
      { question: "Do you deliver flowers same day in Dumka?", answer: "Yes, same-day delivery is available across Dumka for orders placed before 3 PM." }
    ]
  },

  "ramgarh": {
    cityName: "Ramgarh",
    metaTitle: "Flower Delivery in Ramgarh | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Ramgarh, Jharkhand. Same-day delivery near Patratu & across Ramgarh. From ₹399.",
    h1: "Online Flower Delivery in Ramgarh",
    metaKeyword: "flower delivery ramgarh, online flowers ramgarh jharkhand, florist ramgarh, flowers ramgarh patratu coal damodar ranchi belt",
    footerContent: `
<h2>Flower Delivery in Ramgarh — Patratu Valley Coal District in the Damodar River Belt</h2>
<p>Ramgarh, in central Jharkhand in the Damodar River basin between Ranchi and Dhanbad, is the headquarters of Ramgarh district (created 2007, carved from Hazaribagh). The district is in the Jharia-Raniganj coalfield belt — Jharkhand's coal mining heartland, where the Damodar Valley Corporation and BCCL (Bharat Coking Coal Limited) operations create a dense industrial landscape. The Patratu Valley (a scenic lake and dam formed by the Patratu Reservoir on the Damodar River) is a popular tourism destination from Ranchi, known for its misty hills and water sports. The Rajrappa temple (on the confluence of the Damodar and Bhairavi rivers, near Ramgarh) is one of Jharkhand's most important pilgrimage sites — dedicated to the goddess Chhinnamasta.</p>
<p>RedHeart delivers flowers across Ramgarh — Main Market, Ranchi Road, Hazaribagh Road, Patratu area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramgarh, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranchi Road, Hazaribagh Road, Patratu, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Jharkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Rajrappa Chhinnamasta temple puja available from Ramgarh?", answer: "Yes, marigold and red hibiscus for the Chhinnamasta Devi temple at Rajrappa (at the Damodar-Bhairavi confluence) near Ramgarh are available for same-day delivery." },
      { question: "Can I get flowers for a Patratu Valley resort stay from Ramgarh?", answer: "Yes, Patratu Valley's scenic lake resorts are in Ramgarh district. Flower bouquets for romantic or anniversary stays can be delivered in Ramgarh." },
      { question: "Do you deliver flowers same day in Ramgarh?", answer: "Yes, same-day delivery is available across Ramgarh for orders placed before 3 PM." }
    ]
  },

  "lohardaga": {
    cityName: "Lohardaga",
    metaTitle: "Flower Delivery in Lohardaga | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Lohardaga, Jharkhand. Same-day delivery near Ranchi & across Lohardaga. From ₹399.",
    h1: "Online Flower Delivery in Lohardaga",
    metaKeyword: "flower delivery lohardaga, online flowers lohardaga jharkhand, florist lohardaga, flowers lohardaga ranchi oraon tribal bauxite",
    footerContent: `
<h2>Flower Delivery in Lohardaga — Oraon Tribal Heartland and Bauxite District Near Ranchi</h2>
<p>Lohardaga, west of Ranchi in the Chota Nagpur Plateau of Jharkhand, is the headquarters of Lohardaga district — a small but resource-rich district with one of India's largest bauxite deposits (the Lohardaga-Gumla bauxite belt is a major reserve). The district has a predominantly Oraon tribal population — the Oraon (also called Kurukh) are one of the largest tribal groups of the Chota Nagpur region, with a distinct Dravidian language (Kurukh) and agricultural and forest traditions. The Sarna religion (Sarnaism, the indigenous tribal faith centred on the sacred grove "jaher") is widely practised alongside Christianity (Jharkhand has significant Christian missionary history since the 19th century). The annual Sarhul festival (welcoming the flowering of the Sal tree) is the most important Oraon celebration.</p>
<p>RedHeart delivers flowers across Lohardaga — Main Market, Ranchi Road, Gumla Road, Station Road, and Civil Lines area. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lohardaga, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranchi Road, Gumla Road, Station Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul festival flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sarhul (Sal flower festival) available in Lohardaga?", answer: "Yes, Sarhul (the Oraon-Munda tribal festival welcoming the Sal flower) is celebrated with great joy in Lohardaga. Sal flowers and seasonal marigold arrangements for the spring festival are available." },
      { question: "Can I get Christmas flowers in Lohardaga?", answer: "Yes, Lohardaga has a significant Christian tribal community. Christmas roses, white flowers, and poinsettias are available for the festive season." },
      { question: "Do you deliver flowers same day in Lohardaga?", answer: "Yes, same-day delivery is available across Lohardaga for orders placed before 3 PM." }
    ]
  },

  "khunti": {
    cityName: "Khunti",
    metaTitle: "Flower Delivery in Khunti | Birsa Munda Country | RedHeart",
    metaDescription: "Order flowers in Khunti, Jharkhand. Same-day delivery near Birsa Munda birthplace & across Khunti. From ₹399.",
    h1: "Online Flower Delivery in Khunti",
    metaKeyword: "flower delivery khunti, online flowers khunti jharkhand, florist khunti, flowers khunti birsa munda munda tribal ranchi south",
    footerContent: `
<h2>Flower Delivery in Khunti — Birsa Munda's Sacred Homeland in the Munda Heartland</h2>
<p>Khunti, south of Ranchi in the Chota Nagpur Plateau of Jharkhand, is the headquarters of Khunti district — one of the most historically and spiritually significant districts for the Munda tribal community. Khunti is the birthplace of Birsa Munda (1875-1900) — one of India's greatest tribal heroes, who led the Ulgulan ("Great Tumult") rebellion of 1899-1900 against the British and the exploitative zamindari system, and is venerated as "Dhartaba" (Father of the Earth) in Munda tradition. Birsa Munda is now a national symbol of tribal resistance (his face appears on Jharkhand's coat of arms and he is credited with inspiring the creation of the separate Jharkhand state). The Ulihatu village (his exact birthplace) and the Birsa Munda Memorial Museum are key heritage sites.</p>
<p>RedHeart delivers flowers across Khunti — Main Market, Ranchi Road, Torpa area, Murhu area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khunti, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranchi Road, Torpa, Murhu, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sarhul available in Khunti?", answer: "Yes, Sarhul (the tribal sal flower spring festival) is celebrated joyfully in Khunti's Munda community. Sal and seasonal flower arrangements for the festival are available." },
      { question: "Can I get flowers for Christmas in Khunti?", answer: "Yes, Khunti has a significant Christian Munda community. Christmas bouquets and white flower arrangements are available for the season." },
      { question: "Do you deliver flowers same day in Khunti?", answer: "Yes, same-day delivery is available across Khunti for orders placed before 3 PM." }
    ]
  },

  "gumla": {
    cityName: "Gumla",
    metaTitle: "Flower Delivery in Gumla | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Gumla, Jharkhand. Same-day delivery near Netarhat & across Gumla. From ₹399.",
    h1: "Online Flower Delivery in Gumla",
    metaKeyword: "flower delivery gumla, online flowers gumla jharkhand, florist gumla, flowers gumla netarhat south ranchi oraon plateau",
    footerContent: `
<h2>Flower Delivery in Gumla — Netarhat's Plateau District in the Oraon-Munda Highlands</h2>
<p>Gumla, in the Chota Nagpur Plateau of central Jharkhand, is the headquarters of Gumla district — a forested, hilly district in the tribal heartland between Ranchi and the Chhattisgarh border. The district is the administrative parent of Netarhat — Jharkhand's most famous hill station, at 1,100+ metres in the Betla-Netarhat plateau, known for its extraordinary sunrises over the Chota Nagpur plateau and the scenic Lodh Falls (the highest waterfall in Jharkhand, at 143 m). Gumla district has a significant Oraon and Munda tribal population, with a high proportion of Christian converts (the Basel Mission and Lutheran missions from the 19th century). The Ango river systems and the Kechki wildlife range are ecological features.</p>
<p>RedHeart delivers flowers across Gumla — Main Market, Ranchi Road, Netarhat Road, Simdega Road, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gumla, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranchi Road, Netarhat Road, Simdega Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Netarhat Hill resort anniversary from Gumla?", answer: "Yes, Netarhat hill station is in Gumla district. Flower arrangements for romantic plateau resort stays and sunrise-view anniversary nights can be delivered from Gumla." },
      { question: "Are flowers for Christmas available in Gumla?", answer: "Yes, Gumla has a large Christian tribal community. Christmas roses, white lilies, and festive flower arrangements are available for the season." },
      { question: "Do you deliver flowers same day in Gumla?", answer: "Yes, same-day delivery is available across Gumla for orders placed before 3 PM." }
    ]
  },

  "bidar": {
    cityName: "Bidar",
    metaTitle: "Flower Delivery in Bidar | Bahmani Capital Karnataka | RedHeart",
    metaDescription: "Order flowers in Bidar, Karnataka. Same-day delivery near Bidar Fort & across Bidar. From ₹399.",
    h1: "Online Flower Delivery in Bidar",
    metaKeyword: "flower delivery bidar, online flowers bidar karnataka, florist bidar, flowers bidar bahmani sultanate fort bidriware deccan",
    footerContent: `
<h2>Flower Delivery in Bidar — Bahmani Sultanate's Capital and the Home of Bidriware</h2>
<p>Bidar, in the extreme north of Karnataka bordering Telangana and Maharashtra (the northernmost district of Karnataka), is a city of extraordinary medieval Deccan heritage. Bidar was the capital of the Bahmani Sultanate (14th-15th century CE) and later the independent Bidar Sultanate — and its monuments (the massive Bidar Fort, the Madrasa of Mahmud Gawan, and the Ashtur royal necropolis with its stunning Indo-Islamic tombs) represent the finest of medieval Deccan architecture. Bidar is the origin of Bidriware — the inlaid metalwork (zinc alloy with silver inlay) named after the city, a GI-tagged craft and one of India's most distinctive art traditions. The Papnash Shiva temple and the Guru Nanak Jhira Sahib Gurudwara (one of the most important Sikh shrines in South India) are key pilgrimage sites.</p>
<p>RedHeart delivers flowers across Bidar — Main Market, Fort area, Gulbarga Road, Bhalki area, and Station Road. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bidar, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Fort area, Gulbarga Road, Bhalki, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Guru Nanak Jayanti at Bidar Gurudwara available?", answer: "Yes, the Guru Nanak Jhira Sahib Gurudwara is one of South India's most important Sikh shrines. Marigold garlands for Gurpurab celebrations are available in Bidar." },
      { question: "Can I get flowers for Ugadi in Bidar?", answer: "Yes, Ugadi is celebrated in Bidar's Kannada community. Seasonal bouquets and marigold arrangements for the Kannada New Year are available." },
      { question: "Do you deliver flowers same day in Bidar?", answer: "Yes, same-day delivery is available across Bidar for orders placed before 3 PM." }
    ]
  },

  "vijayapura": {
    cityName: "Vijayapura",
    metaTitle: "Flower Delivery in Vijayapura | Bijapur Karnataka | RedHeart",
    metaDescription: "Order flowers in Vijayapura (Bijapur), Karnataka. Same-day delivery near Gol Gumbaz & across Vijayapura. From ₹399.",
    h1: "Online Flower Delivery in Vijayapura",
    metaKeyword: "flower delivery vijayapura, online flowers vijayapura karnataka, florist vijayapura bijapur, flowers vijayapura gol gumbaz adil shahi deccan",
    footerContent: `
<h2>Flower Delivery in Vijayapura — Gol Gumbaz's Whispering Gallery and the Adil Shahi City of Splendour</h2>
<p>Vijayapura (formerly Bijapur), in the Krishna River uplands of northern Karnataka, is one of the Deccan's greatest medieval cities — the capital of the Adil Shahi Sultanate (1489-1686 CE), whose patronage produced a remarkable flowering of Indo-Islamic architecture. The Gol Gumbaz (completed 1656) — the mausoleum of Muhammad Adil Shah — has the second-largest dome in the world (after St. Peter's Basilica in Rome) and its famous "Whispering Gallery" where sounds travel with extraordinary clarity along the gallery's 37-metre circumference. The Ibrahim Rauza (a twin-domed tomb and mosque complex of such exquisite proportion that it reportedly inspired parts of the Taj Mahal) is equally magnificent. Vijayapura's pomegranate orchards are among India's finest.</p>
<p>RedHeart delivers flowers across Vijayapura — Main Market, Gol Gumbaz area, Solapur Road, Gulbarga Road, and Station Road. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijayapura, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gol Gumbaz area, Solapur Road, Gulbarga Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Gol Gumbaz heritage hotel stay in Vijayapura?", answer: "Yes, Vijayapura's heritage guesthouses near the Gol Gumbaz and Ibrahim Rauza are popular for history lovers. Rose bouquets for anniversary stays at these heritage hotels can be delivered." },
      { question: "Are flowers for Ugadi available in Vijayapura?", answer: "Yes, Ugadi is a major festival in Vijayapura's Kannada community. Seasonal bouquets and marigold arrangements for the Kannada New Year are available." },
      { question: "Do you deliver flowers same day in Vijayapura?", answer: "Yes, same-day delivery is available across Vijayapura for orders placed before 3 PM." }
    ]
  },

  "pali": {
    cityName: "Pali",
    metaTitle: "Flower Delivery in Pali | Luni River Rajasthan | RedHeart",
    metaDescription: "Order flowers in Pali, Rajasthan. Same-day delivery near Ranakpur & across Pali. From ₹399.",
    h1: "Online Flower Delivery in Pali",
    metaKeyword: "flower delivery pali, online flowers pali rajasthan, florist pali, flowers pali ranakpur jain temple luni river textile",
    footerContent: `
<h2>Flower Delivery in Pali — Ranakpur's Jain Marble Temple District on the Luni River</h2>
<p>Pali, on the Luni River in western Rajasthan between Jodhpur and Udaipur, is the headquarters of Pali district — a significant textile and commercial hub in the Marwar region. The district is home to Ranakpur — one of the five major pilgrimage sites of Jainism, where the Chaturmukha Dharana Vihara (a multi-spired Jain temple complex of almost supernatural geometric complexity, with 1,444 carved marble pillars — all different) was built in the 15th century by Dharna Shah, a Jain minister of the Mewar Rana. Pali town itself has a major polyester textile industry (the Pali Industrial Area is one of Rajasthan's largest), and the Parashnath Jain temple in the town centre is an important local Jain shrine. The Bisalpur Dam on the Banas River is the main water source for this arid area.</p>
<p>RedHeart delivers flowers across Pali — Main Market, Ranakpur Road, Jodhpur Road, Sojat area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pali, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranakpur Road, Jodhpur Road, Sojat, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for a Ranakpur Jain temple pilgrimage available from Pali?", answer: "Yes, white marigold, mango blossoms, and Jain puja flowers for the Ranakpur Chaturmukha temple (about 90 km from Pali) can be arranged from Pali." },
      { question: "Can I get flowers for Paryushana (Jain festival) in Pali?", answer: "Yes, Pali has a significant Jain community. White and yellow marigold arrangements for Paryushana celebrations are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Pali?", answer: "Yes, same-day delivery is available across Pali for orders placed before 3 PM." }
    ]
  },

  "amethi": {
    cityName: "Amethi",
    metaTitle: "Flower Delivery in Amethi | Gauriganj UP | RedHeart",
    metaDescription: "Order flowers in Amethi (Gauriganj), Uttar Pradesh. Same-day delivery across Amethi district. From ₹399.",
    h1: "Online Flower Delivery in Amethi",
    metaKeyword: "flower delivery amethi, online flowers amethi uttar pradesh, florist amethi gauriganj, flowers amethi gandhi family lucknow belt awadh",
    footerContent: `
<h2>Flower Delivery in Amethi — The Constituency of Rajivs and the Awadh Plains Between Lucknow and Varanasi</h2>
<p>Amethi (Gauriganj), in central Uttar Pradesh between Lucknow and Sultanpur, is the headquarters of Amethi district — a name that became politically synonymous with the Gandhi family of the Indian National Congress (Rajiv Gandhi, then Sonia Gandhi, and then Rahul Gandhi all contested and won from the Amethi Lok Sabha constituency for decades). The district is in the fertile Awadhi plains (the agricultural heartland between the Gomti and Sai rivers) where sugarcane and paddy cultivation dominate. The area has a strong Awadhi cultural identity — Avadhi language (closely related to the dialect of the Ramcharitmanas) is spoken here. The IOCL refinery at Jagdishpur (Amethi district) and the Hindustan Aeronautics Limited (HAL) Korwa facility (AK-47 production) are major industrial landmarks in the district.</p>
<p>RedHeart delivers flowers across Amethi — Main Market, Lucknow Road, Sultanpur Road, Jagdishpur area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amethi, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Lucknow Road, Sultanpur Road, Jagdishpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Diwali available in Amethi?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Amethi for same-day delivery." },
      { question: "Can I get birthday flowers in Amethi?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Amethi for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Amethi?", answer: "Yes, same-day delivery is available across Amethi for orders placed before 3 PM." }
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
