// Batch 40 — 15 cities:
// Tamil Nadu: Kallakurichi, Chengalpattu
// Gujarat: Botad, Amreli, Dahod
// Andhra Pradesh: Vizianagaram, Nandyal, Anakapalle
// Chhattisgarh: Korba, Janjgir-Champa, Mungeli, Gariaband, Bemetara
// Rajasthan: Jhunjhunu, Sawai Madhopur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "kallakurichi": {
    cityName: "Kallakurichi",
    metaTitle: "Flower Delivery in Kallakurichi | Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Kallakurichi, Tamil Nadu. Same-day delivery near Kollidam river & across Kallakurichi. From ₹399.",
    h1: "Online Flower Delivery in Kallakurichi",
    metaKeyword: "flower delivery kallakurichi, online flowers kallakurichi tamil nadu, florist kallakurichi, flowers kallakurichi kollidam cauvery delta",
    footerContent: `
<h2>Flower Delivery in Kallakurichi — New Delta District at the Kollidam River's Edge</h2>
<p>Kallakurichi, a newly carved district in Tamil Nadu (2019, bifurcated from Villupuram), is on the south bank of the Kollidam River (the northern distributary of the Cauvery delta) in the agriculturally rich delta transition zone. The region historically produced sugarcane, paddy, and mangoes (the Kallakurichi area's alphonso-variant mango orchards are locally famous). The district has strong Dravidian movement roots — the Periyarist Self-Respect movement's influence is visible in the high proportion of registered civil marriages and rationalist culture. The Tirukkoilur area (famous for the Veeratteswarar and Trivikrama temples) and the Ulundurpet market town (known for its textile trade) are key centres. Kallakurichi's liquor controversy (2024 hooch tragedy) brought national attention to the district.</p>
<p>RedHeart delivers flowers across Kallakurichi — Main Road, Villupuram Road, Ulundurpet area, Sankarapuram area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kallakurichi, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Villupuram Road, Ulundurpet, Sankarapuram, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Tamil Nadu bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Pongal available in Kallakurichi?",
        answer: "Yes, Pongal is the most important celebration in Kallakurichi's agricultural community. Marigold kolam flowers and seasonal bouquets are available for same-day delivery."
      },
      {
        question: "Can I get jasmine for daily puja in Kallakurichi?",
        answer: "Yes, fresh jasmine (malligai) for daily home and temple puja is available in Kallakurichi throughout the year."
      },
      {
        question: "Do you deliver flowers same day in Kallakurichi?",
        answer: "Yes, same-day delivery is available across Kallakurichi for orders placed before 3 PM."
      }
    ]
  },

  "chengalpattu": {
    cityName: "Chengalpattu",
    metaTitle: "Flower Delivery in Chengalpattu | Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Chengalpattu, Tamil Nadu. Same-day delivery near ECR & across Chengalpattu. From ₹399.",
    h1: "Online Flower Delivery in Chengalpattu",
    metaKeyword: "flower delivery chengalpattu, online flowers chengalpattu tamil nadu, florist chengalpattu, flowers chengalpattu ecr it corridor chennai satellite",
    footerContent: `
<h2>Flower Delivery in Chengalpattu — Chennai's Smart City Neighbour on the IT and ECR Corridor</h2>
<p>Chengalpattu (Chengalpet), headquarters of Chengalpattu district (carved from Kancheepuram district in 2019), is one of Tamil Nadu's fastest-growing urban areas — it sits just 45 km south of Chennai on the IT corridor and East Coast Road (ECR). The district stretches from the industrial clusters of Mahindra World City and Ford Manufacturing Plant to the beach resorts of Mahabalipuram (the UNESCO World Heritage Site Shore Temple is in this district). The GST Road corridor through Chengalpattu is lined with automobile ancillary factories, IT parks, and logistics hubs. The historic Chengalpattu Fort (built by the Nawabs of the Carnatic) and the Vedanthangal Bird Sanctuary (India's oldest bird sanctuary, with painted storks and cormorants) are in the district.</p>
<p>RedHeart delivers flowers across Chengalpattu — Main Road, GST Road corridor, Mahabalipuram area, Tambaram area, and Station Road. Our range includes roses, marigolds, orchids, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chengalpattu, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, GST Road, Mahabalipuram area, Tambaram, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, corporate gifting bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are corporate gifting flowers for Mahindra World City and IT park offices in Chengalpattu available?",
        answer: "Yes, corporate flower arrangements for office events at Mahindra World City, Ford, and IT corridor companies near Chengalpattu are available for same-day delivery."
      },
      {
        question: "Can I get flowers for a Mahabalipuram beach resort anniversary from Chengalpattu?",
        answer: "Yes, Mahabalipuram is about 30 km from Chengalpattu. Rose and orchid arrangements for ECR beach resort anniversaries can be coordinated."
      },
      {
        question: "Do you deliver flowers same day in Chengalpattu?",
        answer: "Yes, same-day delivery is available across Chengalpattu for orders placed before 3 PM."
      }
    ]
  },

  "botad": {
    cityName: "Botad",
    metaTitle: "Flower Delivery in Botad | Gujarat | RedHeart",
    metaDescription: "Order flowers in Botad, Gujarat. Same-day delivery near Saurashtra Plains & across Botad. From ₹399.",
    h1: "Online Flower Delivery in Botad",
    metaKeyword: "flower delivery botad, online flowers botad gujarat, florist botad, flowers botad saurashtra bhavnagar cotton groundnut",
    footerContent: `
<h2>Flower Delivery in Botad — New Saurashtra District on the Cotton and Groundnut Plains</h2>
<p>Botad, the headquarters of newly created Botad district in Gujarat (2013, carved from Bhavnagar and Ahmedabad districts), is in the flat Saurashtra plains — a region where cotton and groundnut cultivation define the agricultural calendar. The Botad area is in the Bhal region (the seasonally flooded grassland between the Gulf of Khambhat and the Saurashtra uplands) — an important ecological zone for the lesser flamingo (the largest flamingo colony in Asia is at the Little Rann of Kutch, and significant populations also use the Bhal marshes seasonally). Botad town has a significant Jain community, and the district has several important Swaminarayan and Jain temples. The Botad taluka hosts the important Tarnetar Fair (actually in Surendranagar district), but regional connections link the two.</p>
<p>RedHeart delivers flowers across Botad — Main Market, Bhavnagar Road, Ahmedabad Road, Station Road, and Civil Lines area. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Botad, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bhavnagar Road, Ahmedabad Road, Station Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Navratri Garba available in Botad?",
        answer: "Yes, Navratri Garba is Gujarat's biggest celebration. Marigold garlands and festive bouquets for the 9-night festival are available in Botad."
      },
      {
        question: "Can I get flowers for a Swaminarayan temple event in Botad?",
        answer: "Yes, marigold and rose garlands for Swaminarayan mandal and temple events are available in Botad for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Botad?",
        answer: "Yes, same-day delivery is available across Botad for orders placed before 3 PM."
      }
    ]
  },

  "amreli": {
    cityName: "Amreli",
    metaTitle: "Flower Delivery in Amreli | Saurashtra Gujarat | RedHeart",
    metaDescription: "Order flowers in Amreli, Gujarat. Same-day delivery near Gir Forest & across Amreli. From ₹399.",
    h1: "Online Flower Delivery in Amreli",
    metaKeyword: "flower delivery amreli, online flowers amreli gujarat, florist amreli, flowers amreli saurashtra gir lion groundnut",
    footerContent: `
<h2>Flower Delivery in Amreli — Gateway to Gir Lion Country on the Saurashtra Plains</h2>
<p>Amreli, in the Saurashtra peninsula of Gujarat, is the headquarters of Amreli district — a region of limestone plateaus, groundnut fields, and the famous Gir Forest on its eastern border. Gir National Park and Sanctuary (the world's only home of the Asiatic lion, with a population now exceeding 600 animals) is partially in Amreli district (the Gir Somnath and Amreli districts share the lion's extended range). The Shetrunji River flows through the district. Amreli town has significant trading communities — the diamond polishing industry of Saurashtra (centred in Amreli, Bhavnagar, and Rajkot) employs large numbers of artisans who cut gems sourced from South Africa, Russia, and Australia.</p>
<p>RedHeart delivers flowers across Amreli — Main Market, Rajkot Road, Bhavnagar Road, Una Road, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amreli, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Rajkot Road, Bhavnagar Road, Una Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Gir lion safari lodge anniversary from Amreli?",
        answer: "Yes, the Gir National Park eco-lodges near Amreli are perfect for special anniversary stays. Rose and seasonal bouquets for jungle resort nights can be delivered in Amreli."
      },
      {
        question: "Are flowers for Navratri available in Amreli?",
        answer: "Yes, Navratri Garba is one of Amreli's biggest celebrations. Marigold garlands and festive bouquets are available for the festival."
      },
      {
        question: "Do you deliver flowers same day in Amreli?",
        answer: "Yes, same-day delivery is available across Amreli for orders placed before 3 PM."
      }
    ]
  },

  "dahod": {
    cityName: "Dahod",
    metaTitle: "Flower Delivery in Dahod | Tribal Gujarat | RedHeart",
    metaDescription: "Order flowers in Dahod, Gujarat. Same-day delivery near Panchmahals & across Dahod. From ₹399.",
    h1: "Online Flower Delivery in Dahod",
    metaKeyword: "flower delivery dahod, online flowers dahod gujarat, florist dahod, flowers dahod tribal panchmahals bhil eastern gujarat",
    footerContent: `
<h2>Flower Delivery in Dahod — Eastern Gujarat's Tribal Heartland on the MP Border</h2>
<p>Dahod, in the eastern extremity of Gujarat bordering Madhya Pradesh, is the headquarters of Dahod district — Gujarat's most tribal district, where the Bhil, Bhilala, and Rathwa tribal communities make up over 70% of the population. The district is part of the Panchmahals-Dahod-Chhota Udaipur tribal belt (one of the most concentrated Adivasi regions in western India). Dahod has historical significance as the birthplace of Mughal Emperor Aurangzeb (in 1618, at the Dahod fort) — an often-overlooked historical fact. The Holi festival (especially the Bhil community's distinctive week-long Holika Dahan traditions) and the tribal wall art traditions are cultural highlights. The Kadana Reservoir (on the Mahi River) and the Ratanmahal Sloth Bear Sanctuary are nearby.</p>
<p>RedHeart delivers flowers across Dahod — Main Market, Godhra Road, Jhalod area, Devgadh Baria area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dahod, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Godhra Road, Jhalod area, Devgadh Baria, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Holi available in Dahod?",
        answer: "Yes, Holi is one of the biggest celebrations in Dahod's tribal Bhil community. Colourful seasonal bouquets and marigold garlands for the festival are available."
      },
      {
        question: "Can I get flowers for Navratri in Dahod?",
        answer: "Yes, Navratri Garba celebrations are popular in Dahod. Marigold garlands and festive bouquets are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Dahod?",
        answer: "Yes, same-day delivery is available across Dahod for orders placed before 3 PM."
      }
    ]
  },

  "vizianagaram": {
    cityName: "Vizianagaram",
    metaTitle: "Flower Delivery in Vizianagaram | AP | RedHeart",
    metaDescription: "Order flowers in Vizianagaram, Andhra Pradesh. Same-day delivery near Srikakula & across Vizianagaram. From ₹399.",
    h1: "Online Flower Delivery in Vizianagaram",
    metaKeyword: "flower delivery vizianagaram, online flowers vizianagaram andhra pradesh, florist vizianagaram, flowers vizianagaram vizag north andhra",
    footerContent: `
<h2>Flower Delivery in Vizianagaram — The City of Victory and the Gajapati Kingdom's Legacy</h2>
<p>Vizianagaram (Vizianagram), in northern Andhra Pradesh, is named "City of Victory" and is historically one of north Andhra's most significant princely states. The Vizianagaram Maharajas (Gajapati Maharajas) were major cultural patrons — the Maharaja's Music College (established 1919) and the Vizianagaram palace complex are legacies of the kingdom's cultural investment. The town has a significant musical heritage: Carnatic violinist Dwaram Venkataswami Naidu (who pioneered the violin in Carnatic classical music) is from Vizianagaram. The Koraput-Bastar-Vizianagaram tribal corridor — with significant Kondh and Savara tribal populations — covers the district's interior. The Neelakanteswaraswamy temple and Srungavarapu Kota Sun temple are important pilgrimage sites.</p>
<p>RedHeart delivers flowers across Vizianagaram — Main Road, Vizag Road, Bobbili Road, Gajapathinagaram area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Andhra Pradesh bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vizianagaram, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Vizag Road, Bobbili Road, Gajapathinagaram, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Andhra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Ugadi available in Vizianagaram?",
        answer: "Yes, Ugadi (Telugu New Year) is the biggest festival in Vizianagaram. Seasonal bouquets and marigold arrangements for the festival are available for same-day delivery."
      },
      {
        question: "Can I get jasmine for daily puja in Vizianagaram?",
        answer: "Yes, fresh jasmine (mallepoovu) for daily temple and home puja is widely available in Vizianagaram throughout the year."
      },
      {
        question: "Do you deliver flowers same day in Vizianagaram?",
        answer: "Yes, same-day delivery is available across Vizianagaram for orders placed before 3 PM."
      }
    ]
  },

  "nandyal": {
    cityName: "Nandyal",
    metaTitle: "Flower Delivery in Nandyal | Rayalaseema AP | RedHeart",
    metaDescription: "Order flowers in Nandyal, Andhra Pradesh. Same-day delivery near Srisailam & across Nandyal. From ₹399.",
    h1: "Online Flower Delivery in Nandyal",
    metaKeyword: "flower delivery nandyal, online flowers nandyal andhra pradesh, florist nandyal, flowers nandyal srisailam rayalaseema kurnool",
    footerContent: `
<h2>Flower Delivery in Nandyal — Srisailam's Neighbour in Dry Rayalaseema</h2>
<p>Nandyal, the headquarters of newly created Nandyal district in Andhra Pradesh (2022, carved from Kurnool), is in the Rayalaseema region — the dry, rocky plateau of southern Andhra Pradesh where the Krishna and Tungabhadra rivers drain the Nallamalai Hills. The Srisailam Mallikarjuna Jyotirlinga temple (one of the 12 Jyotirlingas and also a Shakti Peetha — the Bhramaramba Devi) is about 100 km from Nandyal, making this region one of the most spiritually significant in South India. The Nagarjunasagar-Srisailam Tiger Reserve (the largest tiger reserve in India by area) covers the Nallamalai hills between Nandyal and the river. Nandyal is also known for its stainless steel vessel craft and the iconic "Nandyal Palli" (a style of traditional housing).</p>
<p>RedHeart delivers flowers across Nandyal — Main Road, Kurnool Road, Srisailam Road, Atmakur area, and Station Road. Our range includes roses, marigolds, bilva, and seasonal Andhra Pradesh bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nandyal, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Kurnool Road, Srisailam Road, Atmakur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, bilva, marigolds, seasonal Rayalaseema bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are bilva and puja flowers for Srisailam Jyotirlinga available from Nandyal?",
        answer: "Yes, bilva, marigold, and lotus for the Mallikarjuna Jyotirlinga and Bhramaramba Devi Shakti Peetha at Srisailam can be supplied from Nandyal."
      },
      {
        question: "Can I get flowers for Shivaratri near Nandyal?",
        answer: "Yes, Shivaratri at Srisailam is one of AP's biggest pilgrimages. Marigold and bilva arrangements for Shivaratri season are available from Nandyal."
      },
      {
        question: "Do you deliver flowers same day in Nandyal?",
        answer: "Yes, same-day delivery is available across Nandyal for orders placed before 3 PM."
      }
    ]
  },

  "anakapalle": {
    cityName: "Anakapalle",
    metaTitle: "Flower Delivery in Anakapalle | Vizag Belt AP | RedHeart",
    metaDescription: "Order flowers in Anakapalle, Andhra Pradesh. Same-day delivery near Vizag belt & across Anakapalle. From ₹399.",
    h1: "Online Flower Delivery in Anakapalle",
    metaKeyword: "flower delivery anakapalle, online flowers anakapalle andhra pradesh, florist anakapalle, flowers anakapalle vizag belt paper mill",
    footerContent: `
<h2>Flower Delivery in Anakapalle — Paper Mill Town on the Vizag Belt's Northern Fringe</h2>
<p>Anakapalle, newly elevated to district headquarters (Anakapalle district, 2022, carved from Visakhapatnam), is in the northern Vizag belt in Andhra Pradesh. The town is known for the APSRTC bus manufacturing and the historic Sirpur Paper Mills. Anakapalle is in the Eastern Ghat foothills belt, which transitions from Vizag's industrial coast to the tribal interior. The Bavikonda and Thotlakonda Buddhist archaeological sites (2nd century BCE Buddhist viharas near Visakhapatnam coast) are connected by history to this whole north coastal Andhra belt. The Anakapalle-Narsipatnam road leads into the tribal Araku valley, and the district has significant Kondh and Koya tribal populations in the interior hills.</p>
<p>RedHeart delivers flowers across Anakapalle — Main Road, Vizag Road, Narsipatnam Road, Yelamanchili area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Andhra Pradesh bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anakapalle, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Vizag Road, Narsipatnam Road, Yelamanchili, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Andhra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Ugadi available in Anakapalle?",
        answer: "Yes, Ugadi bouquets and seasonal arrangements for the Telugu New Year are available in Anakapalle for same-day delivery."
      },
      {
        question: "Can I get corporate gifting flowers for Anakapalle industrial companies?",
        answer: "Yes, corporate flower arrangements for offices and industrial units in Anakapalle are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Anakapalle?",
        answer: "Yes, same-day delivery is available across Anakapalle for orders placed before 3 PM."
      }
    ]
  },

  "korba": {
    cityName: "Korba",
    metaTitle: "Flower Delivery in Korba | Power City Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Korba, Chhattisgarh. Same-day delivery near NTPC Korba & across Korba. From ₹399.",
    h1: "Online Flower Delivery in Korba",
    metaKeyword: "flower delivery korba, online flowers korba chhattisgarh, florist korba, flowers korba power city coal mines ntpc hasdeo",
    footerContent: `
<h2>Flower Delivery in Korba — Chhattisgarh's Power Capital on the Hasdeo River</h2>
<p>Korba, on the Hasdeo River (a Mahanadi tributary) in central Chhattisgarh, is called the "Power Capital of Chhattisgarh" — the Korba coalfields (part of the South-Eastern Coalfields Limited operations) and the NTPC Korba Super Thermal Power Station (4,159 MW, among India's largest thermal plants) make this one of India's most power-dense industrial zones. The Hasdeo Arand forest (one of the densest biodiverse forests in Chhattisgarh, now heavily contested between tribal rights and coal mining expansion) is in the Korba district. The Korba area has significant Gond, Binjhwar, and Kanwar tribal communities. The Kendai waterfall on the Hasdeo River and the ancient Pali-Devalaya Shiva temple are tourist attractions in the district.</p>
<p>RedHeart delivers flowers across Korba — Main Market, NTPC Colony, Balco Township, Gedam Colony, and Station Road. Our range includes roses, marigolds, corporate gifting bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Korba, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, NTPC Colony, Balco Township, Gedam Colony, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, corporate gifting bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are corporate gifting flowers for NTPC and Balco offices available in Korba?",
        answer: "Yes, corporate flower arrangements for office events at NTPC Korba, Balco (aluminium plant), and coal company offices in Korba are available for same-day delivery."
      },
      {
        question: "Are flowers for Diwali available in Korba?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Korba for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Korba?",
        answer: "Yes, same-day delivery is available across Korba for orders placed before 3 PM."
      }
    ]
  },

  "janjgir": {
    cityName: "Janjgir",
    metaTitle: "Flower Delivery in Janjgir | Champa Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Janjgir (Champa), Chhattisgarh. Same-day delivery across Janjgir-Champa district. From ₹399.",
    h1: "Online Flower Delivery in Janjgir",
    metaKeyword: "flower delivery janjgir, online flowers janjgir chhattisgarh, florist janjgir champa, flowers janjgir champa mahanadi paddy belt",
    footerContent: `
<h2>Flower Delivery in Janjgir — The Paddy Bowl District on the Mahanadi Plains</h2>
<p>Janjgir-Champa district in Chhattisgarh is one of the state's most agriculturally productive regions — it sits in the fertile Mahanadi river plain (the Chhattisgarh dhaan ka katora or "rice bowl") where paddy cultivation is the backbone of the rural economy. Janjgir town is the district headquarters; Champa is the larger commercial centre in the district. The district has significant Satnami community populations (a Dalit religious reform movement founded by Guru Ghasidas in the early 19th century; the movement's Jaitkham flag poles in every Satnami village are a distinctive cultural marker). The ancient Narayana temple at Shivrinarayan (at the Mahanadi-Jonk river confluence) is an important Vaishnavite pilgrimage site in the district.</p>
<p>RedHeart delivers flowers across Janjgir — Main Market, Champa area, Akaltara, Sakti, and Station Road. Our range includes roses, marigolds, lotus, and seasonal Chhattisgarh bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Janjgir, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Champa, Akaltara, Sakti, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, lotus, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Shivrinarayan Magh Mela available from Janjgir?",
        answer: "Yes, the Magh Purnima Mela at Shivrinarayan (on the Mahanadi) draws huge crowds. Marigold and lotus for the pilgrimage fair are available from Janjgir."
      },
      {
        question: "Can I get flowers for Hareli (CG harvest festival) in Janjgir?",
        answer: "Yes, Hareli (first festival of the Chhattisgarhi agricultural calendar) is celebrated in Janjgir. Seasonal bouquets and flowers for the occasion are available."
      },
      {
        question: "Do you deliver flowers same day in Janjgir?",
        answer: "Yes, same-day delivery is available across Janjgir for orders placed before 3 PM."
      }
    ]
  },

  "mungeli": {
    cityName: "Mungeli",
    metaTitle: "Flower Delivery in Mungeli | Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Mungeli, Chhattisgarh. Same-day delivery near Lormi & across Mungeli. From ₹399.",
    h1: "Online Flower Delivery in Mungeli",
    metaKeyword: "flower delivery mungeli, online flowers mungeli chhattisgarh, florist mungeli, flowers mungeli lormi achanakmar bilaspur",
    footerContent: `
<h2>Flower Delivery in Mungeli — Achanakmar's Gateway in the Satpura Foothills</h2>
<p>Mungeli, the headquarters of Mungeli district in Chhattisgarh (created 2012, carved from Bilaspur), is at the southern edge of the Chhattisgarh plains as they transition into the Satpura-Maikal hill system. The Achanakmar Tiger Reserve (established 2009, covering the Maikal Hills in the Bilaspur-Anuppur corridor) is partially in Mungeli district. The district has significant Baiga tribal populations in the forested northern areas — the Baiga are one of the "particularly vulnerable tribal groups" (PVTG) of central India, known for their distinctive beadwork, tattoo art, and forest-based culture. The Lormi area (a town in Mungeli district near the Achanakmar buffer) is known as the largest producer of soybean and rice in the region.</p>
<p>RedHeart delivers flowers across Mungeli — Main Market, Bilaspur Road, Lormi area, Patharia area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mungeli, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bilaspur Road, Lormi, Patharia, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Mungeli?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Mungeli for same-day delivery."
      },
      {
        question: "Can I get flowers for safari stays near Achanakmar Tiger Reserve?",
        answer: "Yes, the Achanakmar Tiger Reserve eco-lodges are in Mungeli district. Seasonal flower arrangements for jungle resort stays can be delivered in Mungeli."
      },
      {
        question: "Do you deliver flowers same day in Mungeli?",
        answer: "Yes, same-day delivery is available across Mungeli for orders placed before 3 PM."
      }
    ]
  },

  "gariaband": {
    cityName: "Gariaband",
    metaTitle: "Flower Delivery in Gariaband | Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Gariaband, Chhattisgarh. Same-day delivery near Udanti Sitanadi & across Gariaband. From ₹399.",
    h1: "Online Flower Delivery in Gariaband",
    metaKeyword: "flower delivery gariaband, online flowers gariaband chhattisgarh, florist gariaband, flowers gariaband udanti sitanadi raipur",
    footerContent: `
<h2>Flower Delivery in Gariaband — Udanti's Wild Buffalo Country on Raipur's Southern Fringe</h2>
<p>Gariaband, the headquarters of Gariaband district in Chhattisgarh (2012, carved from Raipur), is at the southern edge of the Raipur plains where the terrain rises into the Satpura foothills. The Udanti-Sitanadi Tiger Reserve (famous as one of the last strongholds of the Barasinga — the South Indian swamp deer — and the Indian wild buffalo) covers much of Gariaband district. The Chandrahasini Devi temple at Chandrehi (on the Mahanadi) is an important Shakti pilgrimage in the region. Gariaband district has significant Gond and Halba tribal populations in the forested areas. The district is also known for its limestone deposits and the nearby Rajim (a Triveni Sangam pilgrimage town on the Mahanadi) in Gariaband district's orbit.</p>
<p>RedHeart delivers flowers across Gariaband — Main Market, Raipur Road, Rajim area, Mainpur area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gariaband, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Raipur Road, Rajim, Mainpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Rajim Magh Mela available from Gariaband?",
        answer: "Yes, the Rajim Triveni Sangam Mela (Mahanadi-Pairi-Sondur confluence) is in Gariaband district. Marigold and puja flowers for the Magh Mela are available from Gariaband."
      },
      {
        question: "Can I get flowers for Diwali in Gariaband?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Gariaband for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Gariaband?",
        answer: "Yes, same-day delivery is available across Gariaband for orders placed before 3 PM."
      }
    ]
  },

  "bemetara": {
    cityName: "Bemetara",
    metaTitle: "Flower Delivery in Bemetara | Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Bemetara, Chhattisgarh. Same-day delivery near Durg & across Bemetara. From ₹399.",
    h1: "Online Flower Delivery in Bemetara",
    metaKeyword: "flower delivery bemetara, online flowers bemetara chhattisgarh, florist bemetara, flowers bemetara durg bilaspur paddy belt",
    footerContent: `
<h2>Flower Delivery in Bemetara — The Paddy-Rich Plains District Between Raipur and Bilaspur</h2>
<p>Bemetara, the headquarters of Bemetara district in Chhattisgarh (2012, carved from Durg), is in the fertile plains between the Durg-Raipur belt and the Bilaspur plateau — part of the Chhattisgarh "rice bowl" where intensive paddy cultivation is possible due to the Tandula and Hasdeo reservoir irrigation networks. The district is predominantly agricultural and Satnami community demographics (like neighbouring Janjgir, Durg, and Raipur) — the Satnami reform tradition of Guru Ghasidas is a major cultural force. The Sheonath River (a Mahanadi tributary) passes through the district. Bemetara town has the important Navaratra fair at the Nag Deval shrine and the Dantewada Devi temple at Bemetara.</p>
<p>RedHeart delivers flowers across Bemetara — Main Market, Durg Road, Berla area, Saja area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bemetara, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Durg Road, Berla, Saja, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Navratri available in Bemetara?",
        answer: "Yes, Navratri celebrations are popular in Bemetara. Marigold garlands and seasonal bouquets for the 9-night festival are available."
      },
      {
        question: "Can I get flowers for Hareli (Chhattisgarh harvest festival) in Bemetara?",
        answer: "Yes, Hareli is the first festival of the Chhattisgarhi agricultural calendar. Seasonal flowers and marigold arrangements for the occasion are available in Bemetara."
      },
      {
        question: "Do you deliver flowers same day in Bemetara?",
        answer: "Yes, same-day delivery is available across Bemetara for orders placed before 3 PM."
      }
    ]
  },

  "jhunjhunu": {
    cityName: "Jhunjhunu",
    metaTitle: "Flower Delivery in Jhunjhunu | Shekhawati Rajasthan | RedHeart",
    metaDescription: "Order flowers in Jhunjhunu, Rajasthan. Same-day delivery near Shekhawati havelis & across Jhunjhunu. From ₹399.",
    h1: "Online Flower Delivery in Jhunjhunu",
    metaKeyword: "flower delivery jhunjhunu, online flowers jhunjhunu rajasthan, florist jhunjhunu, flowers jhunjhunu shekhawati frescoes haveli marwari",
    footerContent: `
<h2>Flower Delivery in Jhunjhunu — Shekhawati's Open-Air Fresco Museum and the Marwari Merchant Heartland</h2>
<p>Jhunjhunu, in the Shekhawati region of northern Rajasthan, is the headquarters of Jhunjhunu district — a region uniquely famous as an "open-air museum" of Rajasthani fresco painting. The Shekhawati region (covering Jhunjhunu, Sikar, and Churu districts) has the world's densest concentration of painted havelis — enormous merchant houses decorated inside and out with intricate frescoes depicting mythology, European themes (railways, cars, airplanes), and daily Rajput life, painted by prosperous Marwari merchants (Birla, Bajaj, Ruia, Dalmia families all have Shekhawati roots) who traded across India's ports. Jhunjhunu itself has Khetri (home of the giant Khetri Copper Complex) and several restored heritage havelis including the famous Tibrewala and Modi havelis.</p>
<p>RedHeart delivers flowers across Jhunjhunu — Main Market, Khetri Road, Nawalgarh area, Chirawa area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhunjhunu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Khetri Road, Nawalgarh, Chirawa, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for a heritage haveli stay available in Jhunjhunu?",
        answer: "Yes, Jhunjhunu and the Shekhawati region have many painted haveli guesthouses. Rose bouquets for anniversary or romantic stays in heritage havelis can be delivered in Jhunjhunu."
      },
      {
        question: "Can I get flowers for Teej in Jhunjhunu?",
        answer: "Yes, Teej is a major festival in Jhunjhunu's Rajasthani community. Marigold garlands and seasonal bouquets for the monsoon festival are available."
      },
      {
        question: "Do you deliver flowers same day in Jhunjhunu?",
        answer: "Yes, same-day delivery is available across Jhunjhunu for orders placed before 3 PM."
      }
    ]
  },

  "sawai-madhopur": {
    cityName: "Sawai Madhopur",
    metaTitle: "Flower Delivery in Sawai Madhopur | Ranthambore | RedHeart",
    metaDescription: "Order flowers in Sawai Madhopur, Rajasthan. Same-day delivery near Ranthambore & across Sawai Madhopur. From ₹399.",
    h1: "Online Flower Delivery in Sawai Madhopur",
    metaKeyword: "flower delivery sawai madhopur, online flowers sawai madhopur rajasthan, florist sawai madhopur, flowers sawai madhopur ranthambore tiger safari",
    footerContent: `
<h2>Flower Delivery in Sawai Madhopur — India's Tiger Safari Capital at Ranthambore</h2>
<p>Sawai Madhopur, in eastern Rajasthan, is best known globally as the gateway to Ranthambore National Park — one of India's most famous tiger reserves, where tigers are regularly sighted in relatively open terrain (making Ranthambore unique for tiger photography). The Ranthambore Fort (a UNESCO World Heritage Site, part of the Rajasthan Hill Forts series) sits dramatically inside the tiger reserve, rising above three lakes. The town was founded by Maharaja Sawai Madho Singh I of Jaipur in the 18th century. The Trinetra Ganesha temple (inside Ranthambore Fort, one of India's most visited Ganesha temples where pilgrims send the first wedding invitations by post to the god) attracts millions annually, particularly around Ganesh Chaturthi.</p>
<p>RedHeart delivers flowers across Sawai Madhopur — Main Market, Ranthambore Road, Hotel Zone, Tonk Road, and Station Road. Our range includes roses, marigolds, orchids, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sawai Madhopur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranthambore Road, Hotel Zone, Tonk Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, Ranthambore resort anniversary bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Ranthambore tiger safari resort anniversary?",
        answer: "Yes, Sawai Madhopur's Ranthambore hotel zone has many luxury safari resorts. Rose and orchid bouquets for anniversary or romantic safari nights can be delivered same-day."
      },
      {
        question: "Are flowers for Ganesh Chaturthi and Trinetra Ganesha temple puja available in Sawai Madhopur?",
        answer: "Yes, marigold, durva grass, and modak flower sets for the Trinetra Ganesha temple inside Ranthambore Fort are available during the Ganesh Chaturthi season."
      },
      {
        question: "Do you deliver flowers same day in Sawai Madhopur?",
        answer: "Yes, same-day delivery is available across Sawai Madhopur for orders placed before 3 PM."
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
