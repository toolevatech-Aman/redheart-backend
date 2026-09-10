// Batch 41 — 15 cities:
// Madhya Pradesh: Ashok Nagar, Rajgarh, Shajapur, Mandsaur
// Chhattisgarh: Narayanpur, Bijapur (CG), Surajpur, Gaurela-Pendra-Marwahi
// Andhra Pradesh: Bapatla, Palnadu, Eluru
// Rajasthan: Sikar, Barmer, Bharatpur
// Uttar Pradesh: Balrampur (UP)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "ashok-nagar": {
    cityName: "Ashok Nagar",
    metaTitle: "Flower Delivery in Ashok Nagar | MP | RedHeart",
    metaDescription: "Order flowers in Ashok Nagar, Madhya Pradesh. Same-day delivery near Chanderi & across Ashok Nagar. From ₹399.",
    h1: "Online Flower Delivery in Ashok Nagar",
    metaKeyword: "flower delivery ashok nagar, online flowers ashok nagar madhya pradesh, florist ashok nagar, flowers ashok nagar chanderi silk guna mp",
    footerContent: `
<h2>Flower Delivery in Ashok Nagar — Chanderi Silk's Hinterland in the Chambal-Betwa Plains</h2>
<p>Ashok Nagar, in north-central Madhya Pradesh, is the headquarters of Ashok Nagar district (created 2003, carved from Guna) — a plains district in the Chambal-Betwa watershed belt. The district is the administrative parent of Chanderi town — one of India's most celebrated textile heritage centres, where the legendary Chanderi silk and cotton saris (characterised by their gossamer-thin weave and silver-gold zari borders, produced by the Ansari Muslim weaver community) have been made since at least the 15th century. Chanderi's Koshak Mahal (a five-storey Bundela Rajput palace) and the Badal Mahal (fortress gateway) are remarkable heritage structures. The Betwa River's Barua Sagar dam creates an important lake near Ashoknagar.</p>
<p>RedHeart delivers flowers across Ashok Nagar — Main Market, Guna Road, Chanderi Road, Mungaoli area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ashok Nagar, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Guna Road, Chanderi Road, Mungaoli, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Ashok Nagar?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Ashok Nagar for same-day delivery."
      },
      {
        question: "Can I get birthday flowers in Ashok Nagar?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ashok Nagar for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Ashok Nagar?",
        answer: "Yes, same-day delivery is available across Ashok Nagar for orders placed before 3 PM."
      }
    ]
  },

  "rajgarh": {
    cityName: "Rajgarh",
    metaTitle: "Flower Delivery in Rajgarh | MP | RedHeart",
    metaDescription: "Order flowers in Rajgarh, Madhya Pradesh. Same-day delivery near Pachore & across Rajgarh. From ₹399.",
    h1: "Online Flower Delivery in Rajgarh",
    metaKeyword: "flower delivery rajgarh, online flowers rajgarh madhya pradesh, florist rajgarh, flowers rajgarh biaora malwa chambal mp",
    footerContent: `
<h2>Flower Delivery in Rajgarh — Malwa's Eastern Edge on the Parbati River Plains</h2>
<p>Rajgarh, in western Madhya Pradesh, is the headquarters of Rajgarh district — a transitional zone between the Malwa plateau and the Chambal basin. The district's Biaora town (a major commercial centre in Rajgarh) is on the Mumbai-Delhi railway and highway corridor, making it one of the busiest transit points in central India. Rajgarh has the Machan fort ruins and the Pachore area's ancient stepwells and temples. The Parbati River (a Chambal tributary) flows through the district, and the region's opium poppy cultivation (licensed to the government for medical use) is a distinctive agricultural feature — part of the Malwa opium heritage, which once supplied the British East India Company's China trade. The Mahi River originates from the eastern edge of Rajgarh district.</p>
<p>RedHeart delivers flowers across Rajgarh — Main Market, Biaora area, Pachore Road, Narsingarh area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajgarh, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Biaora area, Pachore Road, Narsingarh, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Navratri in Rajgarh?",
        answer: "Yes, Navratri marigold and rose arrangements for the 9-night festival are available in Rajgarh for same-day delivery."
      },
      {
        question: "Are birthday flowers available same day in Rajgarh?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Rajgarh for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Rajgarh?",
        answer: "Yes, same-day delivery is available across Rajgarh for orders placed before 3 PM."
      }
    ]
  },

  "shajapur": {
    cityName: "Shajapur",
    metaTitle: "Flower Delivery in Shajapur | Malwa MP | RedHeart",
    metaDescription: "Order flowers in Shajapur, Madhya Pradesh. Same-day delivery near Shujalpur & across Shajapur. From ₹399.",
    h1: "Online Flower Delivery in Shajapur",
    metaKeyword: "flower delivery shajapur, online flowers shajapur madhya pradesh, florist shajapur, flowers shajapur malwa shujalpur kalisindh river",
    footerContent: `
<h2>Flower Delivery in Shajapur — Kalisindh's Malwa District Between Ujjain and Sehore</h2>
<p>Shajapur, in the Malwa plateau of Madhya Pradesh, is the headquarters of Shajapur district — a predominantly agricultural district between the religious capital of Ujjain and the Bhopal belt. The Kalisindh River (a Chambal tributary) flows through the district, and the Kalisindh Thermal Power Station near Jhalawar (Rajasthan border) is a significant landmark. Shajapur has the Maksi Shrinathji Dham — an important Vaishnava pilgrimage centre dedicated to Shrinathji (the swaroop of Lord Krishna at Nathdwara tradition), drawing pilgrims from across the Malwa region. The Shujalpur area (a major commercial town in the district) is known for its grain markets. The district's soybean and wheat production makes it part of the Malwa agricultural heartland.</p>
<p>RedHeart delivers flowers across Shajapur — Main Market, Ujjain Road, Shujalpur area, Agar Road, and Station Road. Our range includes roses, marigolds, seasonal Malwa bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shajapur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ujjain Road, Shujalpur, Agar Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Malwa bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Maksi Shrinathji Dham puja available from Shajapur?",
        answer: "Yes, Vaishnava puja flowers — lotus, marigold, and Tulsi — for the Shrinathji Dham at Maksi are available from Shajapur."
      },
      {
        question: "Can I get Navratri flowers in Shajapur?",
        answer: "Yes, Navratri Devi puja flowers and marigold garlands are available in Shajapur for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Shajapur?",
        answer: "Yes, same-day delivery is available across Shajapur for orders placed before 3 PM."
      }
    ]
  },

  "mandsaur": {
    cityName: "Mandsaur",
    metaTitle: "Flower Delivery in Mandsaur | Opium & Pashupatinath MP | RedHeart",
    metaDescription: "Order flowers in Mandsaur, Madhya Pradesh. Same-day delivery near Pashupatinath temple & across Mandsaur. From ₹399.",
    h1: "Online Flower Delivery in Mandsaur",
    metaKeyword: "flower delivery mandsaur, online flowers mandsaur madhya pradesh, florist mandsaur, flowers mandsaur pashupatinath opium malwa chambal",
    footerContent: `
<h2>Flower Delivery in Mandsaur — Pashupatinath's Twin City and the Opium Capital of Malwa</h2>
<p>Mandsaur, on the Shivna River in northwestern Madhya Pradesh near the Rajasthan border, is one of India's most historically layered cities. The Pashupatinath temple here (a Shiva shrine with a remarkably large 8-faced Pashupatinath lingam — one of the largest Shiva lingams in India, carved in the Paramara period) is considered the Indian twin of the Pashupatinath temple in Kathmandu, Nepal, and draws large numbers of devotees. The ancient Dashpur inscription (the Mandsaur stone inscription of the Malwa Gupta dynasty, dated CE 532) mentions the Sun temple and silk weaving guilds — placing Mandsaur in the silk trade history. The district is India's largest single producer of licensed opium (for medical use) — the NDPS-registered poppy cultivation in Mandsaur and Neemuch districts supplies pharmaceutical companies worldwide.</p>
<p>RedHeart delivers flowers across Mandsaur — Main Market, Pashupatinath Road, Neemuch Road, Ratlam Road, and Station Road. Our range includes roses, marigolds, bilva for Shiva puja, and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandsaur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Pashupatinath Road, Neemuch Road, Ratlam Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilva, roses, marigolds, Pashupatinath puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are bilva and Shivaratri flowers for the Pashupatinath temple available in Mandsaur?",
        answer: "Yes, bilva leaves, marigold, and Shivaratri puja sets for the Pashupatinath temple on the Shivna River are available in Mandsaur for same-day delivery."
      },
      {
        question: "Can I get roses for anniversaries in Mandsaur?",
        answer: "Yes, red and pink roses for anniversaries and special occasions are available for same-day delivery in Mandsaur."
      },
      {
        question: "Do you deliver flowers same day in Mandsaur?",
        answer: "Yes, same-day delivery is available across Mandsaur for orders placed before 3 PM."
      }
    ]
  },

  "narayanpur": {
    cityName: "Narayanpur",
    metaTitle: "Flower Delivery in Narayanpur | Abujhmarh CG | RedHeart",
    metaDescription: "Order flowers in Narayanpur, Chhattisgarh. Same-day delivery near Abujhmarh & across Narayanpur. From ₹399.",
    h1: "Online Flower Delivery in Narayanpur",
    metaKeyword: "flower delivery narayanpur, online flowers narayanpur chhattisgarh, florist narayanpur, flowers narayanpur abujhmarh gond bastar",
    footerContent: `
<h2>Flower Delivery in Narayanpur — Abujhmarh's Gateway in the Heart of Bastar's Forest</h2>
<p>Narayanpur, the headquarters of Narayanpur district in Chhattisgarh, is at the edge of Abujhmarh — arguably India's most remote inhabited forest landscape, a vast plateau in southern Bastar covered in dense sal forests and largely inaccessible by road for decades. The Abujhmarh region is home to Abujhmaria Gond tribal communities who maintained a near-isolated existence deep in the forest, and the area became part of the complex conflict zone of the Maoist-affected Bastar region. Narayanpur district also has the Kanger Valley National Park at its western boundary. The town is slowly developing connectivity, and the district's tribal crafts (iron work, terracotta, bamboo weaving) are distinctive art traditions supported by the Bastar art ecosystem.</p>
<p>RedHeart delivers flowers across Narayanpur — Main Market, Kondagaon Road, Jagdalpur Road, Civil Lines, and surrounding settlements. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narayanpur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kondagaon Road, Jagdalpur Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bastar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Bastar Dussehra available from Narayanpur?",
        answer: "Yes, the Bastar Dussehra (75-day festival unique to Bastar, featuring the Danteshwari Devi tradition) involves marigold and flower arrangements. Flowers from Narayanpur are available for the season."
      },
      {
        question: "Can I get flowers for Diwali in Narayanpur?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Narayanpur for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Narayanpur?",
        answer: "Yes, same-day delivery is available across Narayanpur for orders placed before 3 PM."
      }
    ]
  },

  "bijapur-cg": {
    cityName: "Bijapur",
    metaTitle: "Flower Delivery in Bijapur | Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Bijapur, Chhattisgarh. Same-day delivery near Indravati & across Bijapur. From ₹399.",
    h1: "Online Flower Delivery in Bijapur",
    metaKeyword: "flower delivery bijapur chhattisgarh, online flowers bijapur cg, florist bijapur chhattisgarh, flowers bijapur indravati bastar gond",
    footerContent: `
<h2>Flower Delivery in Bijapur — Indravati's Wild Interior in the Southernmost Bastar</h2>
<p>Bijapur, the headquarters of Bijapur district in Chhattisgarh (not to be confused with Bijapur in Karnataka), is in the extreme south of Chhattisgarh on the Maharashtra and Telangana borders — one of the most remote district headquarters in peninsular India. The Indravati River (a Godavari tributary and one of central India's most scenic wild rivers) defines the district's northern boundary; the Indravati National Park (part of the Biosphere Reserve, though now largely inaccessible) formerly had the last wild buffalo herds in India. The district is dominated by Gond and Dorla tribal communities and has been heavily affected by the Maoist insurgency in southern Bastar. Despite this, the district has extraordinary natural diversity and tribal cultural traditions.</p>
<p>RedHeart delivers flowers across Bijapur — Main Market, Jagdalpur Road, Bhopalpatnam area, Civil Lines, and surrounding areas. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bijapur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jagdalpur Road, Bhopalpatnam, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bastar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Bijapur Chhattisgarh?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Bijapur, Chhattisgarh for same-day delivery."
      },
      {
        question: "Can I get flowers for tribal festival occasions in Bijapur?",
        answer: "Yes, seasonal flower arrangements for Gondi festivals and traditional occasions are available in Bijapur."
      },
      {
        question: "Do you deliver flowers same day in Bijapur Chhattisgarh?",
        answer: "Yes, same-day delivery is available across Bijapur district for orders placed before 3 PM."
      }
    ]
  },

  "surajpur": {
    cityName: "Surajpur",
    metaTitle: "Flower Delivery in Surajpur | North CG | RedHeart",
    metaDescription: "Order flowers in Surajpur, Chhattisgarh. Same-day delivery near Surguja & across Surajpur. From ₹399.",
    h1: "Online Flower Delivery in Surajpur",
    metaKeyword: "flower delivery surajpur, online flowers surajpur chhattisgarh, florist surajpur, flowers surajpur surguja north chhattisgarh coal",
    footerContent: `
<h2>Flower Delivery in Surajpur — Surguja's Coalfield District in Northern Chhattisgarh</h2>
<p>Surajpur, in the Surguja region of northern Chhattisgarh (carved from Surguja district in 2012), is in the northern Chhattisgarh coalfields — an area where the SECL (South Eastern Coalfields Limited) mines and power plant development have accelerated industrial activity. The district has significant Gond, Oraon, and Kanwar tribal communities in the forested northern slopes of the Mainpat plateau. The Mainpat area (a Tibetan settlement on the high plateau above Surajpur, where Dalai Lama-era Tibetan refugees have lived since the 1960s) is an unusual cultural landscape in the middle of Chhattisgarh's tribal belt. The Deorani-Jethani temple ruins at Tala (near Bilaspur) and the Surajpur district's own temples are important heritage sites.</p>
<p>RedHeart delivers flowers across Surajpur — Main Market, Ambikapur Road, Baikunthpur area, Premnagar area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Surajpur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ambikapur Road, Baikunthpur, Premnagar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Surajpur?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Surajpur for same-day delivery."
      },
      {
        question: "Can I get corporate gifting flowers for mining company offices in Surajpur?",
        answer: "Yes, corporate flower arrangements for SECL and other mining offices in the Surajpur area are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Surajpur?",
        answer: "Yes, same-day delivery is available across Surajpur for orders placed before 3 PM."
      }
    ]
  },

  "gaurela": {
    cityName: "Gaurela",
    metaTitle: "Flower Delivery in Gaurela | GPM District CG | RedHeart",
    metaDescription: "Order flowers in Gaurela (GPM district), Chhattisgarh. Same-day delivery across Gaurela-Pendra-Marwahi. From ₹399.",
    h1: "Online Flower Delivery in Gaurela",
    metaKeyword: "flower delivery gaurela, online flowers gaurela chhattisgarh, florist gaurela pendra marwahi, flowers gaurela gpm district achanakmar",
    footerContent: `
<h2>Flower Delivery in Gaurela — Pendra-Marwahi Hill Station Belt in the Maikal Range</h2>
<p>Gaurela, the headquarters of Gaurela-Pendra-Marwahi (GPM) district in Chhattisgarh (created 2020, carved from Bilaspur), is in the Maikal Range hills — the distinctive forested uplands that form the watershed between the Son and Mahanadi river systems. The GPM district is remarkable for having Pendra — a small hill town at about 1,000 metres altitude, referred to as the "Mini Shimla of Chhattisgarh" because of its pleasant climate and pine forests. The Achanakmar Tiger Reserve (a critical tiger corridor linking Kanha in MP with the Barnawapara Reserve in Chhattisgarh) lies partly within GPM district. The area has significant Baiga tribal communities — one of the "particularly vulnerable tribal groups" of India.</p>
<p>RedHeart delivers flowers across Gaurela — Main Market, Pendra area, Marwahi area, Bilaspur Road, and Civil Lines. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gaurela, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Pendra, Marwahi, Bilaspur Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Pendra hill resort stay from Gaurela?",
        answer: "Yes, Pendra is the 'Mini Shimla of Chhattisgarh' and is in GPM district. Flower arrangements for romantic stays at Pendra hill resorts can be delivered from Gaurela."
      },
      {
        question: "Are flowers for Diwali available in Gaurela?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Gaurela for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Gaurela?",
        answer: "Yes, same-day delivery is available across the Gaurela-Pendra-Marwahi district for orders placed before 3 PM."
      }
    ]
  },

  "bapatla": {
    cityName: "Bapatla",
    metaTitle: "Flower Delivery in Bapatla | Andhra Pradesh | RedHeart",
    metaDescription: "Order flowers in Bapatla, Andhra Pradesh. Same-day delivery near Chirala & across Bapatla. From ₹399.",
    h1: "Online Flower Delivery in Bapatla",
    metaKeyword: "flower delivery bapatla, online flowers bapatla andhra pradesh, florist bapatla, flowers bapatla chirala krishna delta guntur",
    footerContent: `
<h2>Flower Delivery in Bapatla — The New Krishna Delta District at the Bay of Bengal</h2>
<p>Bapatla, on the Bay of Bengal coast in Andhra Pradesh, is the headquarters of the newly created Bapatla district (2022, carved from Guntur) — one of the most fertile coastal districts in South India. The Bapatla district sits in the Krishna River delta's coastal fringe, where paddy, aquaculture, and chilli cultivation define the economy. Chirala (a major urban centre in the district) is one of the world's largest producers of nylon and polyester yarn (the Chirala Power Loom Cluster supplies fabric to North India's garment industry). The Suryalanka beach and the mangrove-lined creeks of the Krishna delta are ecological features. Bapatla's agricultural research (the Acharya N.G. Ranga Agricultural University has roots in this coastal belt) has contributed to Andhra's Green Revolution yields.</p>
<p>RedHeart delivers flowers across Bapatla — Main Road, Chirala area, Guntur Road, Repalle area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Andhra Pradesh bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bapatla, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Chirala, Guntur Road, Repalle, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Andhra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Ugadi available in Bapatla?",
        answer: "Yes, Ugadi (Telugu New Year) is the biggest festival in Bapatla. Seasonal bouquets and marigold arrangements for the festival are available for same-day delivery."
      },
      {
        question: "Can I get flowers for Sankranti in Bapatla?",
        answer: "Yes, Makar Sankranti is a major harvest festival in the Krishna delta region. Seasonal flowers and marigold kolam arrangements for Sankranti are available in Bapatla."
      },
      {
        question: "Do you deliver flowers same day in Bapatla?",
        answer: "Yes, same-day delivery is available across Bapatla for orders placed before 3 PM."
      }
    ]
  },

  "palnadu": {
    cityName: "Palnadu",
    metaTitle: "Flower Delivery in Palnadu | Andhra Pradesh | RedHeart",
    metaDescription: "Order flowers in Palnadu, Andhra Pradesh. Same-day delivery near Narasaraopet & across Palnadu. From ₹399.",
    h1: "Online Flower Delivery in Palnadu",
    metaKeyword: "flower delivery palnadu, online flowers palnadu andhra pradesh, florist palnadu, flowers palnadu narasaraopet macherla guntur",
    footerContent: `
<h2>Flower Delivery in Palnadu — The Historically Contested Plains Carved by the Krishna</h2>
<p>Palnadu, the headquarters of newly created Palnadu district in Andhra Pradesh (2022, carved from Guntur), covers the Palnadu sub-region — the dry limestone upland plateau between the Krishna River's downstream bend and the Nallamalai Hills. The Battle of Palnadu (1182 CE) — one of the most celebrated conflicts in Telugu history, dramatised in the Telugu epic poem "Palnati Vira Charitra" — was fought in this region. Narasaraopet is the largest city in the district, an important commercial hub. The Macherla area (a small town in Palnadu) has the famous Akkanna-Madanna caves (Buddhist caves) and the nearby Ethipothala Falls (on the Chandravanka River). The Srisailam Hydroelectric Project supplies power through the Krishna basin nearby.</p>
<p>RedHeart delivers flowers across Palnadu — Main Road, Narasaraopet area, Macherla area, Sattenapalle area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Andhra Pradesh bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palnadu, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Narasaraopet, Macherla, Sattenapalle, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Andhra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Ugadi available in Palnadu?",
        answer: "Yes, Ugadi bouquets and seasonal arrangements for the Telugu New Year are available in Palnadu for same-day delivery."
      },
      {
        question: "Can I get flowers for Dasara in Palnadu?",
        answer: "Yes, marigold garlands and seasonal bouquets for Dasara celebrations are available in Palnadu."
      },
      {
        question: "Do you deliver flowers same day in Palnadu?",
        answer: "Yes, same-day delivery is available across Palnadu for orders placed before 3 PM."
      }
    ]
  },

  "eluru": {
    cityName: "Eluru",
    metaTitle: "Flower Delivery in Eluru | West Godavari AP | RedHeart",
    metaDescription: "Order flowers in Eluru, Andhra Pradesh. Same-day delivery near Godavari delta & across Eluru. From ₹399.",
    h1: "Online Flower Delivery in Eluru",
    metaKeyword: "flower delivery eluru, online flowers eluru andhra pradesh, florist eluru, flowers eluru west godavari godavari delta silver filigree",
    footerContent: `
<h2>Flower Delivery in Eluru — Silver Filigree Capital and the Godavari Delta's Western Gateway</h2>
<p>Eluru, on the west bank of the Godavari delta in Andhra Pradesh, is the headquarters of the newly renamed Eluru district (formerly West Godavari). The city is uniquely known for its silver filigree craft (Eluru's Kondapalli toys and silver filigree work are GI-tagged crafts) — the Kondapalli wooden toy tradition produces brightly painted, lacquered toys depicting deities and village scenes that are exported globally. Eluru is also the medical hub for the West Godavari region — the KIMS hospital and Konaseema Medical College serve the delta population. The Godavari River's canals (the historic Arthur Cotton Barrage irrigation system) pass near Eluru, making the delta the most productive agricultural zone in AP. The Kolleru Lake (India's largest freshwater lake, a Ramsar wetland) is in Eluru district.</p>
<p>RedHeart delivers flowers across Eluru — Main Road, Vijayawada Road, Bhimavaram Road, Kaikaluru area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Andhra Pradesh bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Vijayawada Road, Bhimavaram Road, Kaikaluru, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Godavari delta bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Karthika Masam available in Eluru?",
        answer: "Yes, Karthika Masam (the Telugu month of Kartik, dedicated to Shiva and Vishnu) is an important pilgrimage season in Eluru's Godavari belt. Bilva and marigold arrangements for the season are available."
      },
      {
        question: "Can I get flowers for Ugadi in Eluru?",
        answer: "Yes, Ugadi bouquets and seasonal arrangements for the Telugu New Year are available in Eluru for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Eluru?",
        answer: "Yes, same-day delivery is available across Eluru for orders placed before 3 PM."
      }
    ]
  },

  "sikar": {
    cityName: "Sikar",
    metaTitle: "Flower Delivery in Sikar | Shekhawati Rajasthan | RedHeart",
    metaDescription: "Order flowers in Sikar, Rajasthan. Same-day delivery near painted havelis & across Sikar. From ₹399.",
    h1: "Online Flower Delivery in Sikar",
    metaKeyword: "flower delivery sikar, online flowers sikar rajasthan, florist sikar, flowers sikar shekhawati haveli nawalgarh fatehpur",
    footerContent: `
<h2>Flower Delivery in Sikar — Shekhawati's Largest City and the Haveli Fresco Heartland</h2>
<p>Sikar, in the northern Shekhawati region of Rajasthan, is the headquarters of Sikar district — the most populous district in the Shekhawati triangle and a major commercial and educational hub. Sikar town is a large market city with an active trading community; the district is the home of countless Marwari merchant families who became India's wealthiest industrialists (the Birla group's Ghanshyam Das Birla, the Bajaj family, and others all trace their roots to Shekhawati). Nawalgarh, Fatehpur, and Lachhmangad (all in Sikar district) have the most concentrated and best-preserved painted havelis in Rajasthan — UNESCO is involved in their preservation. The Harshnath temple ruins (on the hill above Sikar) and the Jeenmata Devi temple (one of Rajasthan's most visited goddess shrines) are important pilgrimage sites in the district.</p>
<p>RedHeart delivers flowers across Sikar — Main Market, Jaipur Road, Jhunjhunu Road, Nawalgarh area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sikar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jaipur Road, Jhunjhunu Road, Nawalgarh, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Jeenmata Devi temple puja available from Sikar?",
        answer: "Yes, marigold garlands and puja flowers for the Jeenmata Devi temple near Sikar (one of Rajasthan's most visited goddess shrines) are available for same-day delivery."
      },
      {
        question: "Can I get flowers for a heritage haveli stay in Nawalgarh from Sikar?",
        answer: "Yes, Nawalgarh's painted haveli guesthouses are about 40 km from Sikar. Rose bouquets for heritage stays can be coordinated."
      },
      {
        question: "Do you deliver flowers same day in Sikar?",
        answer: "Yes, same-day delivery is available across Sikar for orders placed before 3 PM."
      }
    ]
  },

  "barmer": {
    cityName: "Barmer",
    metaTitle: "Flower Delivery in Barmer | Thar Desert Rajasthan | RedHeart",
    metaDescription: "Order flowers in Barmer, Rajasthan. Same-day delivery in Thar Desert & across Barmer. From ₹399.",
    h1: "Online Flower Delivery in Barmer",
    metaKeyword: "flower delivery barmer, online flowers barmer rajasthan, florist barmer, flowers barmer thar desert luni river oil refinery",
    footerContent: `
<h2>Flower Delivery in Barmer — The Desert District Where Oil Wealth Meets Thar Heritage</h2>
<p>Barmer, in the Thar Desert of western Rajasthan near the Pakistan border, is the headquarters of Barmer district — a vast, sparsely populated desert district that became economically transformed by the Mangala oilfields discovery (the Barmer Basin produces the majority of Rajasthan's crude oil, operated by Cairn Energy/Vedanta at the Mangala field). This oil wealth has brought infrastructure investment to what was historically one of Rajasthan's most remote districts. The Luni River originates near Barmer before flowing south through the desert. Barmer's wood-carved furniture (the distinctive Barmer carving tradition using sheesham wood), appliqué embroidery, and Kalbelia dance traditions are nationally recognized. The Kiradu temples (5th-6th century CE, similar to Khajuraho in their sculptural programme) are an extraordinary but little-known heritage site in the district.</p>
<p>RedHeart delivers flowers across Barmer — Main Market, Jaisalmer Road, Jodhpur Road, Balotra area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barmer, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jaisalmer Road, Jodhpur Road, Balotra, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal desert Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Teej and Gangaur available in Barmer?",
        answer: "Yes, Teej and Gangaur are major festivals in Barmer's Rajasthani community. Marigold garlands and seasonal bouquets for the monsoon festivals are available."
      },
      {
        question: "Can I get flowers for corporate gifting at oil field camps near Barmer?",
        answer: "Yes, corporate flower arrangements for Cairn/Vedanta and other oil industry offices and residential camps in the Barmer area are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Barmer?",
        answer: "Yes, same-day delivery is available across Barmer for orders placed before 3 PM."
      }
    ]
  },

  "bharatpur": {
    cityName: "Bharatpur",
    metaTitle: "Flower Delivery in Bharatpur | Keoladeo Rajasthan | RedHeart",
    metaDescription: "Order flowers in Bharatpur, Rajasthan. Same-day delivery near Keoladeo bird sanctuary & across Bharatpur. From ₹399.",
    h1: "Online Flower Delivery in Bharatpur",
    metaKeyword: "flower delivery bharatpur, online flowers bharatpur rajasthan, florist bharatpur, flowers bharatpur keoladeo birds lohagarh jat",
    footerContent: `
<h2>Flower Delivery in Bharatpur — Lohagarh Fort and the Keoladeo Bird Sanctuary's Wetland City</h2>
<p>Bharatpur, in eastern Rajasthan near the UP border, is one of Rajasthan's most historically distinctive cities — it was founded and ruled by the Jat rulers (the Jat dynasty of the Bharatpur kingdom, considered commoners who defeated the Mughals and later resisted the British). The Lohagarh Fort ("Iron Fort") was the only Rajput-adjacent fort that the British failed to capture despite multiple sieges. The Keoladeo Ghana National Park — a UNESCO World Heritage Site and one of the world's most important bird sanctuaries — is within Bharatpur city limits, with over 230 bird species (the Siberian crane once wintered here before its local extinction). Bharatpur is also a major pilgrimage point — the Vrindavan and Mathura sacred zone is just 40 km away on the Yamuna.</p>
<p>RedHeart delivers flowers across Bharatpur — Main Market, Keoladeo Gate area, Agra Road, Mathura Road, and Station Road. Our range includes roses, marigolds, lotus, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharatpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Keoladeo Gate, Agra Road, Mathura Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, lotus, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for a Keoladeo bird sanctuary resort stay available in Bharatpur?",
        answer: "Yes, Bharatpur's Keoladeo has many heritage and eco-resorts. Rose and lotus bouquets for romantic stays or anniversary wildlife weekends can be delivered same-day in Bharatpur."
      },
      {
        question: "Can I get Janmashtami flowers in Bharatpur?",
        answer: "Yes, Janmashtami is a major festival in Bharatpur's Krishna belt (Mathura-Vrindavan 40 km away). Marigold, Tulsi, and yellow flower puja sets for the occasion are available."
      },
      {
        question: "Do you deliver flowers same day in Bharatpur?",
        answer: "Yes, same-day delivery is available across Bharatpur for orders placed before 3 PM."
      }
    ]
  },

  "balrampur-up": {
    cityName: "Balrampur",
    metaTitle: "Flower Delivery in Balrampur | UP | RedHeart",
    metaDescription: "Order flowers in Balrampur, Uttar Pradesh. Same-day delivery near Sravasti & across Balrampur. From ₹399.",
    h1: "Online Flower Delivery in Balrampur",
    metaKeyword: "flower delivery balrampur, online flowers balrampur uttar pradesh, florist balrampur, flowers balrampur sravasti buddha terai up",
    footerContent: `
<h2>Flower Delivery in Balrampur — Gateway to Sravasti and the Buddha's Teaching Forests</h2>
<p>Balrampur, in the Terai (sub-Himalayan foothills plain) of eastern Uttar Pradesh near the Nepal border, is the headquarters of Balrampur district — a forested, historically significant district in the Gandak-Rapti river system. The most important heritage site connected to Balrampur is Sravasti (Shravasti) — one of the six great cities of ancient India, where the Buddha spent 25 rainy seasons (vassa) and performed the "twin miracle" (the most significant miracle attributed to him). The Sravasti Archaeological Site (Maheth and Saheth) has the ruins of the Jetavana monastery (where the Buddha most famously taught) and the Shobhanath temple. The Balrampur royal family (a erstwhile princely state) had significant influence in the Awadh region. The Terai forest belt near Balrampur-Shravasti is now the Sohagi Barwa Wildlife Sanctuary.</p>
<p>RedHeart delivers flowers across Balrampur — Main Market, Sravasti Road, Gonda Road, Tulsipur area, and Station Road. Our range includes roses, marigolds, lotus, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balrampur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sravasti Road, Gonda Road, Tulsipur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, lotus, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Sravasti Buddhist pilgrimage available from Balrampur?",
        answer: "Yes, lotus and white flower arrangements for the Jetavana monastery and Buddhist circuit pilgrimage at Sravasti (about 18 km from Balrampur) are available."
      },
      {
        question: "Can I get flowers for Eid in Balrampur?",
        answer: "Yes, Balrampur has a significant Muslim community. Rose bouquets and festive arrangements for Eid celebrations are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Balrampur?",
        answer: "Yes, same-day delivery is available across Balrampur for orders placed before 3 PM."
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
