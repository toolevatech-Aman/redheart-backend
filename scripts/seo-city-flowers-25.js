// Batch 25 — 14 cities:
// West Bengal: Bardhaman, Krishnanagar, Malda, Jalpaiguri, Cooch Behar, Midnapore, Purulia, Bankura, Bolpur
// Odisha: Koraput, Sundargarh, Keonjhar, Angul, Dhenkanal, Jharsuguda

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bardhaman": {
    cityName: "Bardhaman",
    metaTitle: "Flower Delivery in Bardhaman | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Bardhaman (Burdwan), West Bengal. Same-day delivery of roses, bouquets & seasonal flowers across Bardhaman. From ₹399.",
    h1: "Online Flower Delivery in Bardhaman",
    metaKeyword: "flower delivery bardhaman, online flowers bardhaman west bengal, florist burdwan, flowers bardhaman rice city",
    footerContent: `
<h2>Flower Delivery in Bardhaman — The Rice Bowl of Bengal</h2>
<p>Bardhaman (Burdwan), in central West Bengal on the Damodar River plain, is one of Bengal's most historically and culturally significant cities. Known as the "Rice Bowl of Bengal" for its extraordinarily fertile Damodar alluvial plains that produce much of West Bengal's rice, the city was also the seat of the powerful Maharajas of Burdwan — one of British India's wealthiest zamindari estates whose Curzon Gate, royal palaces, and the grand Sarbamangala temple complex still stand. The Bardhaman University, Burdwan Raj (palace), and the Lal Bagh area give the city an aristocratic cultural layering. Durga Puja in Bardhaman's old town mohallas is celebrated with traditional Bengali grandeur.</p>
<p>RedHeart delivers flowers across Bardhaman — Kalna Road, GT Road, Ushagram, and Kartick Road. Our range includes roses, marigold garlands, Durga Puja flowers, and tropical seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bardhaman, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalna Road, GT Road, Ushagram, Kartick Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, Durga Puja marigolds, tuberose, seasonal Bengali bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Durga Puja in Bardhaman?",
        answer: "Yes, Durga Puja is Bardhaman's grandest festival. Marigold garlands, hibiscus, and puja flower sets are available. For large pandal orders, please contact us 2–3 days in advance."
      },
      {
        question: "Do you deliver flowers near Sarbamangala temple in Bardhaman?",
        answer: "Yes, the Sarbamangala temple area and the old city are within our delivery coverage. Devotional flower arrangements for the temple are available."
      },
      {
        question: "Are tuberose (rajanigandha) flowers available in Bardhaman?",
        answer: "Yes, tuberose (rajanigandha) is extremely popular in Bengali flower culture and is available in Bardhaman. It's used for puja, weddings, and as a fragrant personal gift."
      }
    ]
  },

  "krishnanagar": {
    cityName: "Krishnanagar",
    metaTitle: "Flower Delivery in Krishnanagar | Same Day | RedHeart",
    metaDescription: "Order flowers in Krishnanagar, Nadia, West Bengal. Same-day delivery of roses, bouquets & seasonal flowers across Krishnanagar. From ₹399.",
    h1: "Online Flower Delivery in Krishnanagar",
    metaKeyword: "flower delivery krishnanagar, online flowers krishnanagar nadia, florist krishnanagar, flowers krishnanagar clay dolls",
    footerContent: `
<h2>Flower Delivery in Krishnanagar — The City of Clay Dolls and Cultural Pride</h2>
<p>Krishnanagar, the headquarters of Nadia district on the Jalangi River in West Bengal, is celebrated for two extraordinary traditions. First, its clay doll (matir putul) artisans from the Ghurni locality have produced some of Bengal's finest realistic clay figurines for centuries — Krishnanagar dolls are displayed in museums globally. Second, Nadia district is sacred ground for Gaudiya Vaishnavism: Navadvip (just 16 km from Krishnanagar) is the birthplace of Chaitanya Mahaprabhu, the great saint who founded the Hare Krishna movement in the 16th century. Krishnanagar and Navadvip are thus among the most important pilgrimage sites for Vaishnavas worldwide. Nabadwip Dham Parikrama (a 5-day pilgrimage) during Gaura Purnima draws hundreds of thousands of devotees.</p>
<p>RedHeart delivers flowers across Krishnanagar — Station Road, Kalna Road, Nadia Court area, and Nabadwip ferry road. Our range includes roses, tulsi and devotional flowers, and seasonal Bengal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnanagar, Nadia, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Kalna Road, Nadia Court area, Nabadwip area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, devotional Vaishnava flowers, marigolds, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get Vaishnava devotional flowers delivered in Krishnanagar for Navadvip pilgrimage?",
        answer: "Yes, tulsi garlands, jasmine, marigold, and lotus flowers for Vaishnava puja are available in Krishnanagar. We deliver to both Krishnanagar town and the Nabadwip area."
      },
      {
        question: "Are flowers available for Gaura Purnima (Chaitanya Jayanti) in Krishnanagar?",
        answer: "Gaura Purnima is a major festival in Krishnanagar-Nabadwip area. Devotional flower arrangements are in high demand — order 2–3 days in advance during this period."
      },
      {
        question: "Do you deliver flowers to Nabadwip area from Krishnanagar?",
        answer: "Yes, Nabadwip (16 km from Krishnanagar) is covered under our extended delivery zone. Please place orders before 12 PM for same-day delivery to Nabadwip."
      }
    ]
  },

  "malda": {
    cityName: "Malda",
    metaTitle: "Flower Delivery in Malda | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Malda, West Bengal. Same-day delivery of roses, bouquets & seasonal flowers across Malda town. Starting ₹399.",
    h1: "Online Flower Delivery in Malda",
    metaKeyword: "flower delivery malda, online flowers malda west bengal, florist malda, flowers malda mango city gour",
    footerContent: `
<h2>Flower Delivery in Malda — Mango Capital Near the Ruins of Gour</h2>
<p>Malda, in northern West Bengal near the Bangladesh border, is nationally famous for its Fazli and Himsagar mangoes — among the finest varieties in India and exported to markets across the country and abroad. But Malda has another, more austere claim to fame: the ruins of Gour and Pandua nearby are among the most significant medieval Islamic archaeological sites in Bengal, with massive mosques and mausoleums from the Sultanate period (13th–16th centuries) standing in silent grandeur. Malda is a rapidly developing district town where Eid and Muharram are celebrated as prominently as Durga Puja and Kali Puja, and the city's cosmopolitan Muslim-Hindu community maintains its traditions with pride.</p>
<p>RedHeart delivers flowers across Malda — English Bazar, Malda town, Mangalbari area, and Chanchal Road. Our catalogue includes roses, seasonal bouquets, marigolds, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malda, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">English Bazar, Malda town, Mangalbari, Chanchal Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Eid flower gifts, Durga Puja arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers for Eid in Malda?",
        answer: "Yes, rose bouquets and fragrant jasmine arrangements are popular Eid gifts in Malda. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Are flowers available for Durga Puja in Malda?",
        answer: "Yes, marigold garlands, hibiscus, and puja arrangements are available for Durga Puja in Malda. For pandal decoration orders, please book 2–3 days in advance."
      },
      {
        question: "Do you deliver flowers to English Bazar area in Malda?",
        answer: "English Bazar is within our primary delivery zone in Malda. Same-day delivery is available for orders placed before 3 PM."
      }
    ]
  },

  "jalpaiguri": {
    cityName: "Jalpaiguri",
    metaTitle: "Flower Delivery in Jalpaiguri | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Jalpaiguri, West Bengal. Same-day delivery of roses, bouquets & tea garden flowers across Jalpaiguri. From ₹399.",
    h1: "Online Flower Delivery in Jalpaiguri",
    metaKeyword: "flower delivery jalpaiguri, online flowers jalpaiguri west bengal, florist jalpaiguri, flowers jalpaiguri tea garden dooars",
    footerContent: `
<h2>Flower Delivery in Jalpaiguri — Gateway to the Dooars Tea Country</h2>
<p>Jalpaiguri, in the Terai and Dooars foothills of northern West Bengal, is the administrative hub for one of the world's most productive tea-growing regions. The Dooars (meaning "doors" or gateways to the Eastern Himalayas) is a landscape of tea gardens, sal forests, and rivers flowing from Bhutan and Sikkim — home to elephants, leopards, and one-horned rhinos in the Gorumara and Jaldapara national parks. Jalpaiguri's culture is a blend of Bengali, Rajbanshi (indigenous community), Nepali, and tea garden labourer communities from Jharkhand and Odisha. The city is known for its magnificent Teesta River and the beautiful light filtering through the tea garden rows — an atmosphere that makes flowers feel especially fitting for the lush green surroundings.</p>
<p>RedHeart delivers flowers across Jalpaiguri — Kadamtala, Dinbazar, Circuit House area, and Siliguri Road. We offer roses, tropical and Dooars-inspired bouquets, marigolds, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalpaiguri, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kadamtala, Dinbazar, Circuit House, Siliguri Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, Dooars tropical bouquets, seasonal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are orchids available for delivery in Jalpaiguri?",
        answer: "Yes, orchids are available in Jalpaiguri — the Dooars region's Himalayan proximity and humid climate mean orchids grow naturally here. We stock orchid bouquets and potted orchid plants."
      },
      {
        question: "Can I send flowers to a tea garden estate in Jalpaiguri?",
        answer: "Yes, we deliver to tea garden estates and bungalows in the Jalpaiguri-Dooars belt. Please provide the estate name and manager's contact for smooth delivery."
      },
      {
        question: "Are flowers available for Bengali New Year (Poila Boisakh) in Jalpaiguri?",
        answer: "Yes, Poila Boisakh celebrations with fresh flowers are very popular in Jalpaiguri. Seasonal spring bouquets and marigold arrangements are available for the Bengali New Year."
      }
    ]
  },

  "cooch-behar": {
    cityName: "Cooch Behar",
    metaTitle: "Flower Delivery in Cooch Behar | Same Day | RedHeart",
    metaDescription: "Order flowers in Cooch Behar, West Bengal. Same-day delivery near Rajbari palace & across town. Roses, bouquets from ₹399.",
    h1: "Online Flower Delivery in Cooch Behar",
    metaKeyword: "flower delivery cooch behar, online flowers cooch behar west bengal, florist cooch behar, flowers cooch behar palace rajbari",
    footerContent: `
<h2>Flower Delivery in Cooch Behar — Palace Town on the Bengal-Assam Frontier</h2>
<p>Cooch Behar, in northwestern West Bengal near the Assam and Bangladesh borders, was the capital of the princely Cooch Behar state — a progressive kingdom known for its British-influenced architecture, including the magnificent Cooch Behar Palace (Rajbari) built in 1887 and modelled on Buckingham Palace. The Koch Rajbongshi community, indigenous to this region, have their own distinct language, culture, and festivals. Cooch Behar is also the birthplace of Maharani Sunity Devi and the famous Maharaja Nripendra Narayan, who were influential figures in 19th-century Bengal's social reform. The Madan Mohan temple and the palace grounds are the city's most cherished landmarks, while the Rashmela fair is one of the region's grandest religious gatherings.</p>
<p>RedHeart delivers flowers across Cooch Behar — Palace area, Suniti Road, Rajarhat Road, and Madhupur. Our range includes roses, marigolds, seasonal Bengal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cooch Behar, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palace area, Suniti Road, Rajarhat Road, Madhupur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Durga Puja flowers, Rashmela season bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Rashmela festival in Cooch Behar?",
        answer: "Yes, Rashmela (Ras Purnima) is among Cooch Behar's biggest festivals. Floral offerings for Madan Mohan temple and celebratory bouquets are available — order in advance during the festival period."
      },
      {
        question: "Are flowers available near the Cooch Behar Rajbari (palace)?",
        answer: "Yes, the palace area is within our delivery zone. Bouquets for heritage site visits, hotel stays, or personal celebrations near the Rajbari can be delivered same day."
      },
      {
        question: "Do you deliver flowers for Durga Puja in Cooch Behar?",
        answer: "Yes, Durga Puja is celebrated enthusiastically in Cooch Behar. Marigold garlands, hibiscus, and puja flower sets are available. Pre-order during the festival season."
      }
    ]
  },

  "midnapore": {
    cityName: "Midnapore",
    metaTitle: "Flower Delivery in Midnapore | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Midnapore (Medinipur), West Bengal. Same-day roses, bouquets & seasonal flowers delivered across Midnapore. From ₹399.",
    h1: "Online Flower Delivery in Midnapore",
    metaKeyword: "flower delivery midnapore, online flowers midnapore west bengal, florist medinipur, flowers midnapore paschim",
    footerContent: `
<h2>Flower Delivery in Midnapore — Land of Freedom Fighters and Terracotta Temples</h2>
<p>Midnapore (Medinipur), in southwestern West Bengal, is a city of extraordinary historical significance in the independence movement — the district produced more freedom fighters per capita than almost any other in India. Khudiram Bose, one of the youngest martyrs of the revolution, was from Midnapore. The Bishnupur terracotta temples (although formally in Bankura district, closely associated with the Midnapore belt) and the Jhargram forested subregion give the broader area a rich cultural and artistic identity. The city lies between the red laterite soil of Jhalda and the green delta of Contai — a landscape that shapes its agricultural produce and aesthetic sensibility. Durga Puja and Kali Puja are celebrated with particular devotion in Midnapore's rural-urban continuum.</p>
<p>RedHeart delivers flowers across Midnapore — Collectorate area, Station Road, Midnapore College Road, and Contai Road. Our catalogue includes roses, marigolds, seasonal Bengal bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnapore (Medinipur), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Collectorate area, Station Road, College Road, Contai Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Kali Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for Kali Puja in Midnapore?",
        answer: "Yes, Kali Puja is widely celebrated in Midnapore district. Red hibiscus, marigold garlands, and Kali Puja flower sets are available. Pre-order during Diwali-Kali Puja season."
      },
      {
        question: "Can I send a birthday bouquet in Midnapore same day?",
        answer: "Yes, birthday bouquets with roses and mixed seasonal flowers are available for same-day delivery in Midnapore. Orders placed before 3 PM are delivered the same evening."
      },
      {
        question: "Do you deliver flowers to Jhargram area near Midnapore?",
        answer: "Jhargram (about 48 km from Midnapore) has limited coverage in our extended zone. Please check availability or call our support for Jhargram delivery."
      }
    ]
  },

  "purulia": {
    cityName: "Purulia",
    metaTitle: "Flower Delivery in Purulia | Same Day | RedHeart",
    metaDescription: "Order flowers in Purulia, West Bengal. Same-day delivery of roses, bouquets & seasonal flowers across Purulia. Near Ayodhya Hills. From ₹399.",
    h1: "Online Flower Delivery in Purulia",
    metaKeyword: "flower delivery purulia, online flowers purulia west bengal, florist purulia, flowers purulia ayodhya hills chhau",
    footerContent: `
<h2>Flower Delivery in Purulia — Land of Chhau Dance and Red Laterite</h2>
<p>Purulia, in the westernmost part of West Bengal on the Chota Nagpur Plateau's edge, is a district of striking natural beauty — rolling red laterite hills, dry deciduous forests, and the dramatic Ayodhya Hills where the Murguma and Bamni Falls cascade through forested gorges. The district is the traditional home of the Chhau dance — a martial art-inspired masked dance form classified as a UNESCO Intangible Cultural Heritage. The Manbhum Chhau, unique to Purulia, involves elaborate hand-crafted masks representing characters from the Ramayana and Mahabharata. Purulia's Santali, Munda, and Bhumij tribal communities celebrate their own festivals alongside Bengali Durga Puja and Tusu Puja — a harvest festival unique to the Purulia-Bankura belt where young girls float flower lamps on rivers.</p>
<p>RedHeart delivers flowers across Purulia — Town area, Jhalda Road, Raghunathpur Road, and Santuri area. Our range includes roses, marigolds, seasonal bouquets, and festival flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purulia, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purulia town, Jhalda Road, Raghunathpur Road, Santuri area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Tusu Puja flowers, seasonal laterite-country blooms</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for the Tusu Puja in Purulia?",
        answer: "Yes, Tusu Puja (the harvest goddess festival unique to Purulia-Bankura) is one of the region's most charming traditions. Seasonal flowers for the Tusu float offerings are available in Purulia."
      },
      {
        question: "Are flowers available in Purulia near the Ayodhya Hills area?",
        answer: "We deliver in Purulia town. For resorts and stays near Ayodhya Hills (about 30 km away), please contact us — extended delivery can be arranged with advance notice."
      },
      {
        question: "Do you deliver flowers for Durga Puja in Purulia?",
        answer: "Yes, Durga Puja is a major festival in Purulia. Marigold garlands, hibiscus, and puja flower sets are available. Pre-order during the festival season for best availability."
      }
    ]
  },

  "bankura": {
    cityName: "Bankura",
    metaTitle: "Flower Delivery in Bankura | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Bankura, West Bengal. Same-day delivery near Bishnupur temple & across Bankura town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Bankura",
    metaKeyword: "flower delivery bankura, online flowers bankura west bengal, florist bankura, flowers bankura bishnupur terracotta",
    footerContent: `
<h2>Flower Delivery in Bankura — Terracotta Temple Country of Bengal</h2>
<p>Bankura, in western West Bengal on the Damodar River's upper reaches, is the home of the famous Bishnupur terracotta temples — a cluster of exquisite 17th-century brick temples built by the Malla kings of Bishnupur, covered in intricate terracotta panels depicting scenes from the Ramayana, Mahabharata, and Krishna's life. These temples are UNESCO-listed and draw art historians, archaeologists, and travellers from across the world. Bankura is also famous for the Bankura horse — a stylised terracotta horse that has become one of Bengal's most iconic folk art symbols, now distributed internationally. The Bankura district's forested tracts are home to tribal communities whose Tusu Puja, Bandana (Kali Puja for cattle), and Bhaduria festivals have beautiful floral rituals.</p>
<p>RedHeart delivers flowers across Bankura — Bankura town, Bishnupur Road, Sonamukhi Road, and Onda Road. Our catalogue includes roses, marigolds, seasonal Bengal bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bankura, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bankura town, Bishnupur Road, Sonamukhi Road, Onda Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Tusu Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for delivery near the Bishnupur terracotta temples?",
        answer: "Yes, Bishnupur (about 25 km from Bankura town) is in our extended delivery zone. Heritage hotel or homestay deliveries can be arranged — please order before 12 PM."
      },
      {
        question: "Are flowers available for Durga Puja and Kali Puja in Bankura?",
        answer: "Yes, both Durga Puja and Kali Puja are major festivals in Bankura. Marigold garlands, hibiscus, and puja flower sets are available. Pre-order for pandal decoration orders."
      },
      {
        question: "Do you deliver flowers to Bankura town and surrounding areas?",
        answer: "Yes, Bankura town and nearby residential areas are fully covered. Same-day delivery is available for orders placed before 3 PM."
      }
    ]
  },

  "bolpur": {
    cityName: "Bolpur",
    metaTitle: "Flower Delivery in Bolpur Shantiniketan | Same Day | RedHeart",
    metaDescription: "Order flowers in Bolpur near Shantiniketan, West Bengal. Fresh roses, bouquets & seasonal flowers delivered same day. Starting ₹399.",
    h1: "Online Flower Delivery in Bolpur, Shantiniketan",
    metaKeyword: "flower delivery bolpur, online flowers bolpur shantiniketan, florist bolpur birbhum, flowers shantiniketan tagore",
    footerContent: `
<h2>Flower Delivery in Bolpur — Where Tagore's Visva-Bharati Blooms</h2>
<p>Bolpur, in Birbhum district of West Bengal, is synonymous with Shantiniketan — the ashram-university founded by Rabindranath Tagore in 1921 that gave birth to Visva-Bharati University and became one of India's most philosophically significant educational institutions. The open-air classrooms under trees, the arts faculty's distinctive Kala Bhavana, and the seasonal festival celebrations — Basanta Utsav (spring festival with songs and flowers), Poush Mela (December festival with Baul music), and Briksha Ropan (tree-planting ceremony) — make Bolpur a city where nature, art, and culture are inseparable. The Baul folk music tradition originated in the Birbhum belt, and the red soil of Bolpur is the quintessential Santiniketan colour immortalised in Tagore's writing.</p>
<p>RedHeart delivers flowers across Bolpur — Shantiniketan Ashram area, Station Road, Prantik area, and Sriniketan. Our range includes roses, seasonal Bengal blooms, marigolds, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bolpur, Birbhum, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shantiniketan Ashram, Station Road, Prantik, Sriniketan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Spring seasonal bouquets, roses, Basanta Utsav flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Basanta Utsav at Shantiniketan?",
        answer: "Yes, Basanta Utsav (Tagore's spring festival) is one of Bolpur's most joyous events. Seasonal spring flowers — yellow marigolds, white flowers, and mixed spring bouquets — are very popular around this time."
      },
      {
        question: "Are flowers available near the Visva-Bharati University campus in Bolpur?",
        answer: "Yes, the Shantiniketan Ashram and Visva-Bharati campus area are within our delivery coverage. Bouquets for personal occasions and academic celebrations are delivered here."
      },
      {
        question: "Do you deliver flowers to the Poush Mela fair grounds in Bolpur?",
        answer: "During the December Poush Mela, we maintain delivery operations in Bolpur. Festival bouquets and floral gifts are available for visitors and residents during the mela period."
      }
    ]
  },

  "koraput": {
    cityName: "Koraput",
    metaTitle: "Flower Delivery in Koraput | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Koraput, Odisha. Same-day delivery of roses, bouquets & tribal festival flowers across Koraput. Starting ₹399.",
    h1: "Online Flower Delivery in Koraput",
    metaKeyword: "flower delivery koraput, online flowers koraput odisha, florist koraput, flowers koraput tribal odisha",
    footerContent: `
<h2>Flower Delivery in Koraput — Tribal Highlands of Southern Odisha</h2>
<p>Koraput, in the highland plateaus of southern Odisha, is a district of extraordinary tribal cultural richness. Home to the Kondh, Bondh, Koya, and Gadaba tribes — some of India's most distinctive indigenous communities — Koraput's tribal weekly haats (markets) are social and commercial events of rare vibrancy. The Koraput district's Jeypore town (its commercial capital) and the Koraput headquarters sit amid lush hills with cascading waterfalls. The district is part of the "tribal heartland of India" along with the adjacent Bastar region of Chhattisgarh. The Jagannath temple at Koraput (a regional version of the Puri tradition) and local tribal festivals like Pus Parab and Chaita Parab use flowers and natural leaves in their sacred rituals.</p>
<p>RedHeart delivers flowers across Koraput — Collectorate area, Jeypore Road, BHU area, and Sunabeda. Our catalogue includes roses, marigolds, seasonal tribal festival flowers, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koraput, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Collectorate area, Jeypore Road, BHU area, Sunabeda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tribal puja flowers, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for tribal festival occasions in Koraput?",
        answer: "Yes, flowers for Kondh and Koya tribal festivals like Pus Parab and Chaita Parab are available. We stock seasonal blooms appropriate to local traditions."
      },
      {
        question: "Do you deliver to Jeypore near Koraput?",
        answer: "Jeypore (about 55 km from Koraput town) is our extended zone — it is the commercial hub of the Koraput region. Please check at checkout for Jeypore delivery availability."
      },
      {
        question: "Are orchids or exotic flowers available in Koraput?",
        answer: "Koraput's highland forest environment supports some natural orchid varieties. We stock orchid bouquets in Koraput subject to availability. Please check when placing your order."
      }
    ]
  },

  "sundargarh": {
    cityName: "Sundargarh",
    metaTitle: "Flower Delivery in Sundargarh | Same Day | RedHeart",
    metaDescription: "Order flowers in Sundargarh, Odisha. Same-day delivery near Rourkela & across Sundargarh district. Roses, bouquets from ₹399.",
    h1: "Online Flower Delivery in Sundargarh",
    metaKeyword: "flower delivery sundargarh, online flowers sundargarh odisha, florist sundargarh, flowers sundargarh bonai",
    footerContent: `
<h2>Flower Delivery in Sundargarh — Steel Country's Natural Heart</h2>
<p>Sundargarh, in northern Odisha bordering Jharkhand and Chhattisgarh, is a district of industrial and natural contrasts. While the Rourkela Steel Plant dominates the district's economy and skyline, the Sundargarh district proper — beyond Rourkela — is a landscape of dense sal forests, tribal villages, and the Brahmani River's upper reaches. The Bonai Sundergarh region has significant adivasi (Oraon, Munda, Ho) communities whose Karam, Sarhul, and Sohrai festivals are rich in natural flower and leaf traditions. The Ushakoithi and Debrigarh wildlife sanctuaries nearby protect elephants and leopards in forested reserves that form part of the Simlipal ecological corridor.</p>
<p>RedHeart delivers flowers across Sundargarh — Sundargarh town, Bonai Road, Panposh area, and Jhinkpani Road. We offer roses, marigolds, seasonal bouquets, and tribal festival flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sundargarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sundargarh town, Bonai Road, Panposh, Jhinkpani Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul festival flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for the Sarhul or Karma festival in Sundargarh?",
        answer: "Yes, Sarhul (the sal flower festival of the Oraon and Munda communities) and Karma festival flowers are available in Sundargarh. Seasonal tribal ceremonial flowers are stocked during these periods."
      },
      {
        question: "Can I order flowers in Sundargarh near Rourkela?",
        answer: "Sundargarh town is about 35 km from Rourkela. For Rourkela deliveries, please use our separate Rourkela city page. Sundargarh orders are served within the town limits."
      },
      {
        question: "Are fresh flowers available in Sundargarh year-round?",
        answer: "Yes, we maintain fresh flower stock throughout the year in Sundargarh. Roses, marigolds, and carnations are always available. Seasonal flowers vary by month."
      }
    ]
  },

  "angul": {
    cityName: "Angul",
    metaTitle: "Flower Delivery in Angul | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Angul, Odisha. Same-day delivery of roses, bouquets & seasonal flowers across Angul town. Starting ₹399.",
    h1: "Online Flower Delivery in Angul",
    metaKeyword: "flower delivery angul, online flowers angul odisha, florist angul, flowers angul nalco odisha",
    footerContent: `
<h2>Flower Delivery in Angul — Aluminium City in the Forest Belt</h2>
<p>Angul, in central Odisha on the Brahmani River, is the home of NALCO (National Aluminium Company Limited) — one of India's largest aluminium producers — and the Talcher Thermal Power Station, making it a critical energy and industry city for Odisha. Despite its industrial identity, Angul sits surrounded by forested hills and the Satkosia Tiger Reserve — a spectacular gorge on the Mahanadi River where marsh crocodiles bask and migratory birds roost. The Angul district has significant tribal communities (Juang, Bhuiyan) alongside mainstream Odia culture, and festivals like Nuakhai, Kartik Purnima, and Durga Puja are celebrated with great communal spirit.</p>
<p>RedHeart delivers flowers across Angul — NALCO Township, Civil Lines, Talcher Road, and Chhendipada Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Angul, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">NALCO Township, Civil Lines, Talcher Road, Chhendipada Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Nuakhai festival flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to NALCO Township in Angul?",
        answer: "Yes, NALCO Township is one of our primary delivery areas in Angul. Corporate and personal flower orders are both accepted. Same-day delivery for orders before 3 PM."
      },
      {
        question: "Are flowers available for Nuakhai in Angul?",
        answer: "Yes, Nuakhai (the new rice harvest festival of Odisha) is widely celebrated in Angul. Seasonal flowers and puja arrangements for the festival are available."
      },
      {
        question: "Can I send a birthday bouquet in Angul?",
        answer: "Yes, birthday roses and mixed seasonal bouquets are available for same-day delivery in Angul. Add a personalised message card to make it special."
      }
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

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
