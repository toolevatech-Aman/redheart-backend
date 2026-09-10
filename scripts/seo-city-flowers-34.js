// Batch 34 — 15 cities:
// Gujarat: Bilimora, Veraval
// Rajasthan: Dungarpur
// Odisha: Boudh, Jeypore
// West Bengal: Balurghat, Contai, Diamond Harbour
// Bihar: Supaul, Saharsa, Munger
// Maharashtra: Nandurbar, Beed, Jalna
// Manipur: Imphal

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bilimora": {
    cityName: "Bilimora",
    metaTitle: "Flower Delivery in Bilimora | Same Day | RedHeart",
    metaDescription: "Order flowers in Bilimora, Gujarat. Same-day delivery of roses, bouquets & seasonal flowers across Bilimora town. From ₹399.",
    h1: "Online Flower Delivery in Bilimora",
    metaKeyword: "flower delivery bilimora, online flowers bilimora gujarat, florist bilimora, flowers bilimora navsari ambika river",
    footerContent: `
<h2>Flower Delivery in Bilimora — South Gujarat's Railway Junction on the Ambika River</h2>
<p>Bilimora, in South Gujarat's Navsari district on the Ambika River, is a busy railway junction town where the Western Railway main line meets the Bilimora-Wagad narrow-gauge hill railway (the Kaprada tribal belt line). The town is in the heart of Halpati (Dubla) tribal territory in the South Gujarat plains, and the surrounding talukas have significant adivasi (tribal) communities. The Ambika River valley supports mango, chiku (sapota), and banana cultivation — South Gujarat is India's largest chiku-producing region, and Bilimora's mango and chiku export network extends to domestic and international markets. The Parsi community has a historic presence in nearby Navsari, and the Zoroastrian cultural landscape extends to Bilimora's business life.</p>
<p>RedHeart delivers flowers across Bilimora — Railway Station Road, Navsari Road, Gandevi Road, and Market area. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilimora, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Railway Station Road, Navsari Road, Gandevi Road, Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for Navratri in Bilimora?",
        answer: "Yes, Navratri Garba is one of the biggest celebrations in Bilimora's Gujarat community. Marigold garlands and seasonal bouquets are available for the festival."
      },
      {
        question: "Can I get flowers for Diwali in Bilimora?",
        answer: "Yes, Diwali flower decorations and marigold arrangements are available in Bilimora. Order in advance for the festive period."
      },
      {
        question: "Do you deliver flowers same day in Bilimora?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Bilimora for orders placed before 3 PM."
      }
    ]
  },

  "veraval": {
    cityName: "Veraval",
    metaTitle: "Flower Delivery in Veraval | Somnath | RedHeart",
    metaDescription: "Order flowers in Veraval, Gujarat. Same-day delivery near Somnath Jyotirlinga & across Veraval. From ₹399.",
    h1: "Online Flower Delivery in Veraval",
    metaKeyword: "flower delivery veraval, online flowers veraval gujarat, florist veraval, flowers veraval somnath jyotirlinga saurashtra",
    footerContent: `
<h2>Flower Delivery in Veraval — Gateway to Somnath, the First of Twelve Jyotirlingas</h2>
<p>Veraval, on the Saurashtra coast of Gujarat in Gir Somnath district, is the gateway to the Somnath temple — the first of twelve Jyotirlingas (the most sacred Shiva shrines in India) and a temple that was rebuilt twelve times after repeated destruction, embodying Hindu spiritual resilience. Veraval itself is a major fishing port — one of India's largest — and the town's economy revolves around the Arabian Sea fishing fleet and fish processing industry. The Bhalka Tirth (where Lord Krishna received the arrow that ended his earthly journey) is close to Veraval. Prabhas Patan, the ancient name for the Somnath area, has been one of India's most important pilgrimage centres since at least the 6th century CE.</p>
<p>RedHeart delivers flowers across Veraval — Station Road, Somnath Road, Port Area, and Market Circle. We offer lotus, marigold garlands, bilva, and seasonal Gujarat bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Veraval, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Somnath Road, Port Area, Market Circle</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, bilva, marigold garlands, Somnath puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Somnath Jyotirlinga puja available in Veraval?",
        answer: "Yes, bilva, lotus, white chrysanthemums, and marigold garlands for Somnath Shiva puja are our most popular products in Veraval. We deliver to your accommodation before your temple visit."
      },
      {
        question: "Can I get flowers for Maha Shivratri near Somnath?",
        answer: "Yes, Maha Shivratri sees lakhs of pilgrims at Somnath. Puja sets including bilva and marigold are available — order 2-3 days in advance for the festival period."
      },
      {
        question: "Do you deliver flowers same day in Veraval?",
        answer: "Yes, same-day delivery is available across Veraval for orders placed before 3 PM."
      }
    ]
  },

  "dungarpur": {
    cityName: "Dungarpur",
    metaTitle: "Flower Delivery in Dungarpur | Vagad Rajasthan | RedHeart",
    metaDescription: "Order flowers in Dungarpur, Rajasthan. Same-day delivery near Beneshwar Dham & across Dungarpur. From ₹399.",
    h1: "Online Flower Delivery in Dungarpur",
    metaKeyword: "flower delivery dungarpur, online flowers dungarpur rajasthan, florist dungarpur, flowers dungarpur vagad tribal beneshwar",
    footerContent: `
<h2>Flower Delivery in Dungarpur — Vagad's Lake Palace City on the Gujarat-Rajasthan Border</h2>
<p>Dungarpur, in far southern Rajasthan bordering Gujarat, is the headquarters of Dungarpur district — the heart of the Vagad region, a tribal-dominated area where the Bhil and Garasia communities form the majority. The Dungarpur state was a Rajput princely state of the Guhila dynasty (the same lineage as Mewar/Udaipur), and the Udai Bilas Palace (a heritage hotel on a lake) and the ancient Juna Mahal fort are architectural gems. The Beneshwar Dham — a sacred confluence (Triveni sangam) of the Mahi, Som, and Jakham rivers — hosts one of Rajasthan's largest tribal fairs during Magh Purnima, drawing hundreds of thousands of Bhil tribal devotees. Dungarpur's Pareva stone (a fine blue-grey flagstone) is used in traditional architecture across the region.</p>
<p>RedHeart delivers flowers across Dungarpur — Court Road, Udaipur Road, Station Road, and Banswara Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dungarpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Court Road, Udaipur Road, Station Road, Banswara Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for the Beneshwar Dham fair in Dungarpur?",
        answer: "Yes, the Beneshwar Dham Mela is one of Rajasthan's largest tribal gatherings. Marigold garlands and ritual flowers for the Vishnu-Shiva puja at the Triveni sangam are available in Dungarpur."
      },
      {
        question: "Can I get flowers for Teej or Gangaur in Dungarpur?",
        answer: "Yes, Gangaur and Teej are important Rajasthani women's festivals in Dungarpur. Seasonal Rajasthani bouquets for the festive occasion are available."
      },
      {
        question: "Do you deliver flowers same day in Dungarpur?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Dungarpur for orders placed before 3 PM."
      }
    ]
  },

  "boudh": {
    cityName: "Boudh",
    metaTitle: "Flower Delivery in Boudh | Same Day | RedHeart",
    metaDescription: "Order flowers in Boudh, Odisha. Same-day delivery of roses, bouquets & seasonal flowers across Boudh town. From ₹399.",
    h1: "Online Flower Delivery in Boudh",
    metaKeyword: "flower delivery boudh, online flowers boudh odisha, florist boudh, flowers boudh mahanadi odisha",
    footerContent: `
<h2>Flower Delivery in Boudh — Odisha's Mahanadi Diamond on the Eastern Ghats Edge</h2>
<p>Boudh (also spelled Baudh), in central Odisha on the Mahanadi River, is the headquarters of Boudh district — one of the smaller and more forested districts of Odisha, known for its tribal heritage and the ancient Buddhist association suggested by its name. The Sonepur-Titilagarh corridor through which the Mahanadi flows has been a cultural crossroads for central Odisha. The district is in the transitional zone between coastal Odisha's rice culture and the tribal highlands of Kandhamal and Kalahandi. The Suvarnapur (Sonepur) area nearby is famous for the Balunkeshwar temple and the Sonepur cattle and elephant fair (one of Asia's largest). Boudh's forests harbour significant biodiversity and the district has a significant Kandha tribal population.</p>
<p>RedHeart delivers flowers across Boudh — Main Road, Phulbani Road, Mahanadi Bridge area, and Market area. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Boudh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Phulbani Road, Mahanadi Bridge area, Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Raja Parba or Nuakhai available in Boudh?",
        answer: "Yes, Raja Parba (Odisha's womanhood festival) and Nuakhai (harvest festival in western Odisha) are celebrated in Boudh. Seasonal flower arrangements are available for these occasions."
      },
      {
        question: "Can I send a birthday bouquet to Boudh?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Boudh for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Boudh?",
        answer: "Yes, same-day delivery is available across Boudh for orders placed before 3 PM."
      }
    ]
  },

  "jeypore": {
    cityName: "Jeypore",
    metaTitle: "Flower Delivery in Jeypore | Koraput | RedHeart",
    metaDescription: "Order flowers in Jeypore, Odisha. Same-day delivery near Koraput tribal area & across Jeypore. From ₹399.",
    h1: "Online Flower Delivery in Jeypore",
    metaKeyword: "flower delivery jeypore, online flowers jeypore odisha, florist jeypore, flowers jeypore koraput tribal eastern ghats",
    footerContent: `
<h2>Flower Delivery in Jeypore — The Commercial Capital of Koraput's Tribal Eastern Ghats</h2>
<p>Jeypore, in the Koraput district of southern Odisha near the Chhattisgarh and Andhra Pradesh borders, is the commercial and educational centre of the Koraput tribal region — an area of exceptional anthropological richness. The Koraput district is home to numerous scheduled tribes including Kondhs, Bondas (often described as the "most primitive" tribe of India), Gadabas, and Koyas — each with their own distinct language, dress, and tradition. The Onkadeli tribal market near Koraput draws tribal communities every Thursday for one of Odisha's most colourful traditional weekly markets. Jeypore is also known for the Jeypore Palace (a landmark of the former Jeypore kingdom) and the Hirakud-Machkund cascade system. The Sabari River flowing through the region is associated with the Mahabharata and Ramayana mythology.</p>
<p>RedHeart delivers flowers across Jeypore — Main Road, Koraput Road, Jagdalpur Road, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jeypore, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Koraput Road, Jagdalpur Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Raja Parba or Dussehra in Jeypore?",
        answer: "Yes, Raja Parba and Dussehra (a major tribal celebration in Koraput's villages) are celebrated in Jeypore. Seasonal flower arrangements are available for these occasions."
      },
      {
        question: "Are flowers suitable for the Machkund area resorts near Jeypore?",
        answer: "Yes, the Machkund waterfall area has eco-resorts and guest houses. Flower arrangements for romantic stays or special occasions in the Jeypore-Machkund area are available."
      },
      {
        question: "Do you deliver flowers same day in Jeypore?",
        answer: "Yes, same-day delivery is available across Jeypore for orders placed before 3 PM."
      }
    ]
  },

  "balurghat": {
    cityName: "Balurghat",
    metaTitle: "Flower Delivery in Balurghat | South Dinajpur | RedHeart",
    metaDescription: "Order flowers in Balurghat, West Bengal. Same-day delivery near Atreyee river & across Balurghat. From ₹399.",
    h1: "Online Flower Delivery in Balurghat",
    metaKeyword: "flower delivery balurghat, online flowers balurghat west bengal, florist balurghat, flowers balurghat south dinajpur atreyee",
    footerContent: `
<h2>Flower Delivery in Balurghat — South Dinajpur's Riverside District Capital Near Bangladesh</h2>
<p>Balurghat, on the Atreyee River in South Dinajpur district of West Bengal, is the district headquarters of South Dinajpur — a district carved out of the larger Dinajpur district that was split between India and Bangladesh at Partition in 1947. The Atreyee (Atrai) River forms the India-Bangladesh boundary in many stretches, giving the border town a unique cross-cultural character. South Dinajpur is predominantly agricultural, with mustard, paddy, and jute grown in the vast alluvial plains. The Balurghat area has a mix of Bengali Hindu and Muslim communities, and the border geography has shaped its trade and culture. The Balurghat Airport (operating since 2018) has improved connectivity to Kolkata for this remote North Bengal district.</p>
<p>RedHeart delivers flowers across Balurghat — Main Road, Hospital Road, Station Road, and Tapan area. Our range includes roses, marigolds, seasonal Bengali bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balurghat, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Hospital Road, Station Road, Tapan area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bengali bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Durga Puja available in Balurghat?",
        answer: "Yes, Durga Puja is the biggest festival in Balurghat's Bengali community. Marigold garlands and decorative bouquets for the pandal and home puja are available."
      },
      {
        question: "Can I send flowers from Kolkata to Balurghat?",
        answer: "Yes, you can place an order from anywhere in India on our website and we'll deliver to Balurghat on the same day (for orders before 3 PM)."
      },
      {
        question: "Do you deliver flowers same day in Balurghat?",
        answer: "Yes, same-day delivery is available across Balurghat for orders placed before 3 PM."
      }
    ]
  },

  "contai": {
    cityName: "Contai",
    metaTitle: "Flower Delivery in Contai | Purba Medinipur | RedHeart",
    metaDescription: "Order flowers in Contai, West Bengal. Same-day delivery near Digha coast & across Contai. From ₹399.",
    h1: "Online Flower Delivery in Contai",
    metaKeyword: "flower delivery contai, online flowers contai west bengal, florist contai, flowers contai purba medinipur digha coast",
    footerContent: `
<h2>Flower Delivery in Contai — Purba Medinipur's Coastal Administrative Hub Near Digha</h2>
<p>Contai (Kanthi), in Purba (East) Medinipur district of West Bengal, is the district's major administrative and commercial centre on the Bengal coast near the popular beach town of Digha. Purba Medinipur, with its long Bay of Bengal coastline, has India's largest betel-leaf (pan) cultivation area — the Medinipur betel leaf (Bangla pan) is famous nationwide. The Contai area also has significant cashew nut production, and fishing is a major occupation for coastal communities. Contai was historically known as Kanthi, deriving from the Kanthi kings — and the area has strong associations with the Bengal Renaissance and Indian freedom movement (several freedom fighters hailed from Purba Medinipur).</p>
<p>RedHeart delivers flowers across Contai — Station Road, Digha Road, Haldia Road, and Market area. Our range includes roses, marigolds, seasonal Bengali bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Contai, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Digha Road, Haldia Road, Market area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tropical coastal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Durga Puja available in Contai?",
        answer: "Yes, Durga Puja is the grandest celebration in Contai's Bengali community. Marigold garlands and decorative flowers for puja pandals and home altars are available."
      },
      {
        question: "Can I get flowers delivered to a Digha beach hotel from Contai?",
        answer: "Yes, Digha is about 30 km from Contai. Beach resort flower deliveries for anniversaries and romantic stays near Digha can be arranged from Contai."
      },
      {
        question: "Do you deliver flowers same day in Contai?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Contai for orders placed before 3 PM."
      }
    ]
  },

  "diamond-harbour": {
    cityName: "Diamond Harbour",
    metaTitle: "Flower Delivery in Diamond Harbour | Same Day | RedHeart",
    metaDescription: "Order flowers in Diamond Harbour, West Bengal. Same-day delivery near Hooghly river & across Diamond Harbour. From ₹399.",
    h1: "Online Flower Delivery in Diamond Harbour",
    metaKeyword: "flower delivery diamond harbour, online flowers diamond harbour west bengal, florist diamond harbour, flowers diamond harbour hooghly river south 24 parganas",
    footerContent: `
<h2>Flower Delivery in Diamond Harbour — Where the Hooghly Widens Toward the Bay of Bengal</h2>
<p>Diamond Harbour, in South 24 Parganas district of West Bengal on the west bank of the Hooghly River, is named after the diamond-shaped harbour formed where the river sharply bends and widens before meeting the Bay of Bengal. This riverside town was historically an important trading post for the Portuguese and later the British East India Company. The Diamond Harbour fort ruins and the Canning-Diamond Harbour waterfront corridor reflect this colonial maritime past. Today Diamond Harbour is a popular day-trip destination from Kolkata for Bengalis seeking the wide river view and fresh hilsa fish; the town also has a large fishing community. The Sundarbans biosphere reserve begins just east of Diamond Harbour.</p>
<p>RedHeart delivers flowers across Diamond Harbour — Riverfront Road, Canning Road, Station Road, and Market area. Our range includes roses, marigolds, seasonal Bengali bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diamond Harbour, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Riverfront Road, Canning Road, Station Road, Market area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bengali bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Durga Puja available in Diamond Harbour?",
        answer: "Yes, Durga Puja is one of the grandest festivals in Diamond Harbour's Bengali community, celebrated with elaborate pandals. Marigold and decorative flower arrangements are available."
      },
      {
        question: "Can I order a riverside anniversary bouquet in Diamond Harbour?",
        answer: "Yes, Diamond Harbour's scenic Hooghly riverfront is a romantic destination. A special anniversary rose bouquet with same-day delivery to your riverside venue is available."
      },
      {
        question: "Do you deliver flowers same day in Diamond Harbour?",
        answer: "Yes, same-day delivery is available across Diamond Harbour for orders placed before 3 PM."
      }
    ]
  },

  "supaul": {
    cityName: "Supaul",
    metaTitle: "Flower Delivery in Supaul | Kosi Region | RedHeart",
    metaDescription: "Order flowers in Supaul, Bihar. Same-day delivery near Kosi river & across Supaul. From ₹399.",
    h1: "Online Flower Delivery in Supaul",
    metaKeyword: "flower delivery supaul, online flowers supaul bihar, florist supaul, flowers supaul kosi river mithila",
    footerContent: `
<h2>Flower Delivery in Supaul — On the Kosi River Plains of North Bihar's Mithila Belt</h2>
<p>Supaul, in North Bihar's Mithila region on the flood plains of the Kosi River, is the headquarters of Supaul district — an area profoundly shaped by the "Sorrow of Bihar," as the Kosi River was historically called for its devastating floods. The Kosi embankment project of the 1950s partially tamed the river, but floods remain a constant challenge in Supaul. The Mithila cultural tradition — birthplace of goddess Sita, with its distinctive Madhubani paintings, Sama-Chakeva (a winter bird-festival where sisters make clay birds for their brothers), and Jitiya (a maternal fasting festival) — defines everyday life in Supaul. The maithil poetry tradition of Vidyapati (14th century) is deeply revered in the local community.</p>
<p>RedHeart delivers flowers across Supaul — Main Road, Saharsa Road, Forbesganj Road, and Civil Lines area. Our range includes roses, marigolds, seasonal Mithila bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Supaul, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Saharsa Road, Forbesganj Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Mithila bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Chhath Puja available in Supaul?",
        answer: "Yes, Chhath Puja is the biggest festival in Supaul's Bihar community. Lotus, marigold, and seasonal flowers for the Chhath ghat worship are available."
      },
      {
        question: "Can I get flowers for Sama-Chakeva festival in Supaul?",
        answer: "Yes, Sama-Chakeva is a special Maithil winter festival in North Bihar. Seasonal winter flowers and bouquets for the bird-festival celebration are available in Supaul."
      },
      {
        question: "Do you deliver flowers same day in Supaul?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Supaul for orders placed before 3 PM."
      }
    ]
  },

  "saharsa": {
    cityName: "Saharsa",
    metaTitle: "Flower Delivery in Saharsa | Mithila Bihar | RedHeart",
    metaDescription: "Order flowers in Saharsa, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Saharsa. From ₹399.",
    h1: "Online Flower Delivery in Saharsa",
    metaKeyword: "flower delivery saharsa, online flowers saharsa bihar, florist saharsa, flowers saharsa kosi mithila north bihar",
    footerContent: `
<h2>Flower Delivery in Saharsa — Mithila's Kosi Division Hub in the Bihar Plains</h2>
<p>Saharsa, in the Kosi Division of North Bihar, is the headquarters of Saharsa district and the divisional headquarters of the Kosi region — the administrative unit covering the Supaul, Madhepura, and Saharsa districts along the Kosi River flood plains. The Kosi Division was created specifically to address the unique development needs of the flood-prone region. Saharsa is in the heart of Mithila cultural territory — where Maithili language, Madhubani art, and the Maithili literary tradition of Vidyapati create a distinctive cultural identity. The Mahishi Tarapith temple (a Shakti peetha — a Devi temple of national importance associated with the Mahavidya Tara) is in the district and draws large numbers of Tantric practitioners and devotees.</p>
<p>RedHeart delivers flowers across Saharsa — Main Road, Supaul Road, Madhepura Road, and Civil Lines area. Our range includes roses, marigolds, seasonal Mithila bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saharsa, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Supaul Road, Madhepura Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Mithila bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Mahishi Tarapith temple available in Saharsa?",
        answer: "Yes, red hibiscus and marigold for the Tara Devi puja at Mahishi are available in Saharsa. The temple is about 20 km from Saharsa town."
      },
      {
        question: "Can I order flowers for Chhath Puja in Saharsa?",
        answer: "Yes, Chhath Puja is the most important festival in Saharsa. Lotus, seasonal flowers, and marigold for the Chhath ghat ceremony are available."
      },
      {
        question: "Do you deliver flowers same day in Saharsa?",
        answer: "Yes, same-day delivery is available across Saharsa for orders placed before 3 PM."
      }
    ]
  },

  "munger": {
    cityName: "Munger",
    metaTitle: "Flower Delivery in Munger | Yoga Capital | RedHeart",
    metaDescription: "Order flowers in Munger, Bihar. Same-day delivery near Bihar School of Yoga & across Munger. From ₹399.",
    h1: "Online Flower Delivery in Munger",
    metaKeyword: "flower delivery munger, online flowers munger bihar, florist munger, flowers munger bihar school yoga ganga",
    footerContent: `
<h2>Flower Delivery in Munger — India's Yoga Capital on the Gangetic Plains</h2>
<p>Munger (Monghyr), in Bihar on the southern bank of the Ganges between Bhagalpur and Patna, is known as India's yoga capital — home to the Bihar School of Yoga founded by Swami Satyananda Saraswati in 1963. The Bihar School of Yoga (Ganga Darshan Ashram) has spread the Satyananda yoga tradition worldwide and draws thousands of yoga students and spiritual seekers from India and abroad every year. Munger has a strategic historical position: the Mughal emperor Mir Qasim made it his capital in 1763 and built the Munger Fort. The Fort's Lal Darwaza (Red Gate) and the ancient Sita Kund (a hot spring associated with Sita's agnipariksha) and Ram Kund are sacred sites. Munger's gun manufacturing tradition (continuing from Mughal times) is also historically significant.</p>
<p>RedHeart delivers flowers across Munger — Station Road, Bihar School of Yoga Road, Fort Area, and Civil Lines. Our range includes roses, lotus, seasonal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Munger, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Bihar Yoga Road, Fort Area, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, white lilies, marigolds, spiritual bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Bihar School of Yoga ashram available in Munger?",
        answer: "Yes, lotus, white flowers, and serene spiritual arrangements for the Ganga Darshan Ashram or yoga retreat guests are available in Munger. Peaceful, sattvic bouquets are our specialty."
      },
      {
        question: "Can I get flowers for Chhath Puja at the Ganga ghat in Munger?",
        answer: "Yes, Chhath Puja on the Ganga ghats in Munger is a major event. Lotus, marigold, and seasonal flowers for the sunrise-sunset ghat ceremony are available."
      },
      {
        question: "Do you deliver flowers same day in Munger?",
        answer: "Yes, same-day delivery is available across Munger for orders placed before 3 PM."
      }
    ]
  },

  "nandurbar": {
    cityName: "Nandurbar",
    metaTitle: "Flower Delivery in Nandurbar | Tribal Maharashtra | RedHeart",
    metaDescription: "Order flowers in Nandurbar, Maharashtra. Same-day delivery near Toranmal hills & across Nandurbar. From ₹399.",
    h1: "Online Flower Delivery in Nandurbar",
    metaKeyword: "flower delivery nandurbar, online flowers nandurbar maharashtra, florist nandurbar, flowers nandurbar toranmal bhil adivasi",
    footerContent: `
<h2>Flower Delivery in Nandurbar — Maharashtra's Tribal Heartland at the Satpura-Tapi Corridor</h2>
<p>Nandurbar, in the far northwest of Maharashtra at the junction of Madhya Pradesh and Gujarat, is the headquarters of Nandurbar district — one of Maharashtra's most tribal districts, where the Bhil, Bhilala, Konkana, Pawara, and Vasava communities form the majority. The district lies in the Satpura range foothills and the Tapi River valley, with the Toranmal plateau (1100+ metres) being Maharashtra's high altitude tribal resort area. The Prakasha Balaji temple (a major Vaishnava pilgrimage) on the banks of the Tapti River and the Sagbara fair (a major tribal gathering) are important cultural events. Nandurbar's tribal communities have distinctive woven fabrics, body tattoo traditions, and festival customs that draw ethnographers from across India.</p>
<p>RedHeart delivers flowers across Nandurbar — Main Road, Shahada Road, Toranmal Road, and Taloda area. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nandurbar, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Shahada Road, Toranmal Road, Taloda area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maharashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Ganesh Chaturthi in Nandurbar?",
        answer: "Yes, Ganesh Chaturthi is widely celebrated in Nandurbar across both tribal and non-tribal communities. Marigold garlands and Ganesh puja flower sets are available."
      },
      {
        question: "Are flowers for the Toranmal hill resort area available from Nandurbar?",
        answer: "Yes, Toranmal is the hill retreat of Nandurbar district. Flower arrangements for the Toranmal eco-resort and forest rest-houses can be coordinated from Nandurbar."
      },
      {
        question: "Do you deliver flowers same day in Nandurbar?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Nandurbar for orders placed before 3 PM."
      }
    ]
  },

  "beed": {
    cityName: "Beed",
    metaTitle: "Flower Delivery in Beed | Marathwada | RedHeart",
    metaDescription: "Order flowers in Beed, Maharashtra. Same-day delivery near Parli Vaijnath & across Beed. From ₹399.",
    h1: "Online Flower Delivery in Beed",
    metaKeyword: "flower delivery beed, online flowers beed maharashtra, florist beed, flowers beed marathwada parli vaijnath jyotirlinga",
    footerContent: `
<h2>Flower Delivery in Beed — Marathwada's Sugarcane Belt Near a Jyotirlinga</h2>
<p>Beed (Bir), in the Marathwada plateau of Maharashtra, is the headquarters of Beed district — an area known for two things: its sugarcane farming and seasonal labour migration, and the Parli Vaijnath temple, one of the twelve Jyotirlingas of Shiva, located in Parli taluka. Beed district's seasonal cane-cutter (oos-tod) migration — where hundreds of thousands of labourers travel to the sugar mills of Western Maharashtra each winter — is one of the largest seasonal labour migrations in India. The district's semi-arid landscape (with the Godavari catchment) produces cotton, jowar, and sugarcane. The Beed town itself has the historical Kankaleswari temple and was once part of the Nizamabad territory before merging with Maharashtra in 1956.</p>
<p>RedHeart delivers flowers across Beed — Main Road, Osmanabad Road, Parli Road, and Civil Lines area. We offer roses, marigolds, bilva (for Vaijnath puja), and seasonal Marathwada bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Beed, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Osmanabad Road, Parli Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilva, marigold garlands, Vaijnath puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Parli Vaijnath Jyotirlinga puja available near Beed?",
        answer: "Yes, bilva, marigold, and Shiva puja flower sets for the Parli Vaijnath temple are available from Beed. Parli is about 90 km from Beed headquarters."
      },
      {
        question: "Can I get flowers for Ganesh Chaturthi in Beed?",
        answer: "Yes, Ganesh Chaturthi is one of the biggest festivals in Beed's Marathi community. Marigold garlands and Ganesh puja flower sets are available."
      },
      {
        question: "Do you deliver flowers same day in Beed?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Beed for orders placed before 3 PM."
      }
    ]
  },

  "jalna": {
    cityName: "Jalna",
    metaTitle: "Flower Delivery in Jalna | Same Day | RedHeart",
    metaDescription: "Order flowers in Jalna, Maharashtra. Same-day delivery of roses, bouquets & seasonal flowers across Jalna. From ₹399.",
    h1: "Online Flower Delivery in Jalna",
    metaKeyword: "flower delivery jalna, online flowers jalna maharashtra, florist jalna, flowers jalna marathwada cotton pipes",
    footerContent: `
<h2>Flower Delivery in Jalna — Marathwada's Cotton Ginning and Seed Capital</h2>
<p>Jalna, in the Marathwada region of Maharashtra, is the headquarters of Jalna district — known as the "Seed Capital of India" for its concentration of seed companies (including Maharashtra Hybrid Seeds / Mahyco, which first commercialised Bt cotton seeds in India) and cotton ginning industries. The Godavari tributary irrigation network and black cotton soil make the district highly suitable for cotton, soybean, and jowar cultivation. Jalna town has an important Muslim minority community (descendants of the Hyderabad Nizam period), and the Dargah of Hazrat Shah Noor-ud-Din is a significant Islamic heritage site. The Jalna-Aurangabad corridor is part of the Marathwada industrial belt that has been a focus of agricultural distress narratives.</p>
<p>RedHeart delivers flowers across Jalna — Main Road, Aurangabad Road, Buldhana Road, and Ambad area. Our range includes roses, marigolds, seasonal Marathwada bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalna, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Aurangabad Road, Buldhana Road, Ambad area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Marathwada bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Eid available in Jalna?",
        answer: "Yes, Jalna has a significant Muslim community. Rose bouquets, seasonal flowers, and festive arrangements for Eid celebration are available in Jalna."
      },
      {
        question: "Can I order flowers for Ganesh Chaturthi in Jalna?",
        answer: "Yes, Ganesh Chaturthi is one of the biggest festivals in Jalna's Marathi community. Marigold garlands and Ganesh puja flower sets are available."
      },
      {
        question: "Do you deliver flowers same day in Jalna?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Jalna for orders placed before 3 PM."
      }
    ]
  },

  "imphal": {
    cityName: "Imphal",
    metaTitle: "Flower Delivery in Imphal | Manipur Capital | RedHeart",
    metaDescription: "Order flowers in Imphal, Manipur. Same-day delivery near Loktak lake & across Imphal. From ₹399.",
    h1: "Online Flower Delivery in Imphal",
    metaKeyword: "flower delivery imphal, online flowers imphal manipur, florist imphal, flowers imphal loktak lake polo birthplace",
    footerContent: `
<h2>Flower Delivery in Imphal — Polo's Birthplace and the Capital of the Land of Jewels</h2>
<p>Imphal, the capital of Manipur in Northeast India, is a city of remarkable distinctions: it is the birthplace of modern polo (the game originated in the Manipuri form Sagol Kangjei, played for centuries on the Imphal polo grounds), and it lies at the heart of a valley that was an ancient Meitei kingdom with a 2,000-year documented history. The Ima Keithel (Mother's Market) in Imphal — an enormous all-women market where thousands of women traders sell everything from vegetables to textiles — is one of the world's largest women-run markets. The Shree Shree Govindajee temple (a Vaishnavite Radha-Krishna temple), the Kangla Fort (the ancient palace of the Manipur kings), and the INA Memorial at Moirang (Indian National Army base in WWII) are heritage landmarks.</p>
<p>RedHeart delivers flowers across Imphal — Paona Bazaar, BT Road, Thangal Bazaar, Keishampat, Lamphelpat, and Porompat. We offer roses, lotus, yellow marigolds (for Radha-Krishna puja), and seasonal Manipuri bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Imphal, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Paona Bazaar, BT Road, Thangal Bazaar, Keishampat, Porompat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, lotus, yellow marigolds, Govindajee puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Yaoshang (Manipuri Holi) available in Imphal?",
        answer: "Yes, Yaoshang is Manipur's major spring festival — a 5-day Vaishnavite celebration incorporating Thabal Chongba (moonlight dance). Seasonal flowers and bouquets for the festival are available."
      },
      {
        question: "Can I get flowers for Govindajee temple puja in Imphal?",
        answer: "Yes, yellow marigolds, lotus, and tulsi for the Shree Govindajee temple (the presiding deity of Imphal) are available. We deliver fresh puja flowers to your accommodation."
      },
      {
        question: "Do you deliver flowers same day in Imphal?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery across Imphal for orders placed before 3 PM."
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
