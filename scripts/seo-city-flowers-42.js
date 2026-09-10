// Batch 42 — 15 cities:
// Madhya Pradesh: Neemuch, Agar Malwa, Burhanpur, Umaria, Katni
// Uttar Pradesh: Shravasti, Bahraich, Deoria, Mau
// Bihar: Nawada, Arwal, Jehanabad
// Kerala: Palakkad, Malappuram, Kannur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "neemuch": {
    cityName: "Neemuch",
    metaTitle: "Flower Delivery in Neemuch | Opium City MP | RedHeart",
    metaDescription: "Order flowers in Neemuch, Madhya Pradesh. Same-day delivery near Nimach & across Neemuch. From ₹399.",
    h1: "Online Flower Delivery in Neemuch",
    metaKeyword: "flower delivery neemuch, online flowers neemuch madhya pradesh, florist neemuch, flowers neemuch nimach opium malwa rajasthan border",
    footerContent: `
<h2>Flower Delivery in Neemuch — India's Licensed Opium Depot at the Malwa-Rajasthan Border</h2>
<p>Neemuch (Nimach), in the northwestern corner of Madhya Pradesh where it meets Rajasthan, is a unique city with two distinctive identities: it is home to the Government Opium and Alkaloid Works (one of two government opium processing facilities in India — the other is in Ghazipur, UP) that processes licensed poppy cultivation into pharmaceutical morphine and other opiates for global medical use, making Neemuch a key node in India's legitimate opium economy. Neemuch is also historically associated with the First War of Indian Independence (1857) — the Neemuch Cantonment saw one of the early uprisings of sepoys against the British. The city straddles the Mandsaur River, and its red sandstone architecture reflects the Rajasthan-Malwa cultural crossover. Garrad cement and pharmaceutical companies have industrial presence here.</p>
<p>RedHeart delivers flowers across Neemuch — Main Market, Mandsaur Road, Ratlam Road, Jawad area, and Cantonment area. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Neemuch, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mandsaur Road, Ratlam Road, Jawad, Cantonment</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Navratri available in Neemuch?",
        answer: "Yes, Navratri Devi puja marigold and rose arrangements for the 9-night festival are available in Neemuch for same-day delivery."
      },
      {
        question: "Can I get birthday flowers in Neemuch?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Neemuch for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Neemuch?",
        answer: "Yes, same-day delivery is available across Neemuch for orders placed before 3 PM."
      }
    ]
  },

  "agar-malwa": {
    cityName: "Agar Malwa",
    metaTitle: "Flower Delivery in Agar Malwa | MP | RedHeart",
    metaDescription: "Order flowers in Agar Malwa, Madhya Pradesh. Same-day delivery near Nalkheda & across Agar Malwa. From ₹399.",
    h1: "Online Flower Delivery in Agar Malwa",
    metaKeyword: "flower delivery agar malwa, online flowers agar malwa madhya pradesh, florist agar malwa, flowers agar malwa nalkheda soybean malwa mp",
    footerContent: `
<h2>Flower Delivery in Agar Malwa — Malwa's Youngest District in the Soybean Heartland</h2>
<p>Agar Malwa, the headquarters of Agar Malwa district in Madhya Pradesh (created 2013, carved from Shajapur — making it one of MP's newest districts), is in the central Malwa plateau — a gently undulating, fertile agricultural region where soybean, wheat, and mustard cultivation dominate. The Agar Malwa area is part of the Malwa region's deep cultural identity: the Malwa dialect of Hindi, the Malwa folk music (especially the seasonal Suggi and Phag traditions), and the region's connection to the Avanti kingdom of classical antiquity. The Nalkheda area (a town in the district) is known for its weekly cattle and grain markets. The Kshipra River's upper tributaries flow through parts of the district toward Ujjain.</p>
<p>RedHeart delivers flowers across Agar Malwa — Main Market, Shajapur Road, Nalkheda area, Susner area, and Station Road. Our range includes roses, marigolds, seasonal Malwa bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agar Malwa, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Shajapur Road, Nalkheda, Susner, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Malwa bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Agar Malwa?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Agar Malwa for same-day delivery."
      },
      {
        question: "Can I get flowers for anniversaries in Agar Malwa?",
        answer: "Yes, anniversary roses and celebration bouquets are available for same-day delivery in Agar Malwa for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Agar Malwa?",
        answer: "Yes, same-day delivery is available across Agar Malwa for orders placed before 3 PM."
      }
    ]
  },

  "burhanpur": {
    cityName: "Burhanpur",
    metaTitle: "Flower Delivery in Burhanpur | Mughal MP | RedHeart",
    metaDescription: "Order flowers in Burhanpur, Madhya Pradesh. Same-day delivery near Tapti river & across Burhanpur. From ₹399.",
    h1: "Online Flower Delivery in Burhanpur",
    metaKeyword: "flower delivery burhanpur, online flowers burhanpur madhya pradesh, florist burhanpur, flowers burhanpur tapti mughal mumtaz mahal power loom",
    footerContent: `
<h2>Flower Delivery in Burhanpur — Mughal Deccan Capital on the Tapti Where Mumtaz Mahal Died</h2>
<p>Burhanpur, on the Tapti River in southwestern Madhya Pradesh where it borders Maharashtra, is one of India's most historically resonant cities — it was the Mughal Deccan capital through which the imperial armies campaigned into the south, and it is the city where Mumtaz Mahal (wife of Emperor Shah Jahan) died in childbirth in 1631. The first temporary burial place of Mumtaz was in Burhanpur before her body was moved to Agra and the Taj Mahal was built. The Shahi Qila (Burhanpur Fort) and the Ahukhana pleasure garden (where she was initially buried) are preserved heritage sites. Burhanpur today is a significant textile centre — the power loom industry (producing cotton and silk fabrics) employs thousands of weavers, and the city's zardozi embroidery tradition is a living craft heritage.</p>
<p>RedHeart delivers flowers across Burhanpur — Main Market, Khandwa Road, Station Road, Nepanagar area, and Tapti River ghats. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Burhanpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Khandwa Road, Station Road, Nepanagar, Tapti ghats</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Tapti valley bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for an anniversary near the Mumtaz Mahal heritage sites available in Burhanpur?",
        answer: "Yes, rose bouquets for heritage site visits and romantic stays near the Shahi Qila and Ahukhana garden — where Mumtaz Mahal first rested — are available in Burhanpur."
      },
      {
        question: "Can I get flowers for Eid in Burhanpur?",
        answer: "Yes, Burhanpur has a significant Muslim weaving community. Rose bouquets and festive flower arrangements for Eid are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Burhanpur?",
        answer: "Yes, same-day delivery is available across Burhanpur for orders placed before 3 PM."
      }
    ]
  },

  "umaria": {
    cityName: "Umaria",
    metaTitle: "Flower Delivery in Umaria | Bandhavgarh MP | RedHeart",
    metaDescription: "Order flowers in Umaria, Madhya Pradesh. Same-day delivery near Bandhavgarh tiger reserve & across Umaria. From ₹399.",
    h1: "Online Flower Delivery in Umaria",
    metaKeyword: "flower delivery umaria, online flowers umaria madhya pradesh, florist umaria, flowers umaria bandhavgarh tiger reserve son valley",
    footerContent: `
<h2>Flower Delivery in Umaria — Bandhavgarh Tiger Reserve's Closest Town in the Son Valley</h2>
<p>Umaria, in the Son River valley of eastern Madhya Pradesh, is the headquarters of Umaria district — a forested, hilly district in the Vindhya-Satpura transition zone. Umaria is the closest district headquarters to Bandhavgarh National Park and Tiger Reserve — arguably India's most visited tiger reserve (with the highest tiger density of any in the country), known for the iconic Tala Zone entry gate and the ancient Bandhavgarh Fort perched on a sheer cliff above the forest. The Sone River's upper valley flows through Umaria, and the district has rich coal reserves (Johilla Coalfield). The Sanjay-Dubri Tiger Reserve in the adjacent Sidhi-Shahdol belt completes one of central India's most important wildlife corridors.</p>
<p>RedHeart delivers flowers across Umaria — Main Market, Bandhavgarh Road, Shahdol Road, Nowrozabad area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Umaria, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bandhavgarh Road, Shahdol Road, Nowrozabad, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, safari resort anniversary bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Bandhavgarh tiger safari resort anniversary from Umaria?",
        answer: "Yes, Bandhavgarh's jungle resorts are just 30-35 km from Umaria. Rose bouquets and special arrangements for anniversary or wildlife stay celebrations can be delivered in Umaria."
      },
      {
        question: "Are flowers for Diwali available in Umaria?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Umaria for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Umaria?",
        answer: "Yes, same-day delivery is available across Umaria for orders placed before 3 PM."
      }
    ]
  },

  "katni": {
    cityName: "Katni",
    metaTitle: "Flower Delivery in Katni | Limestone City MP | RedHeart",
    metaDescription: "Order flowers in Katni, Madhya Pradesh. Same-day delivery near Jabalpur & across Katni. From ₹399.",
    h1: "Online Flower Delivery in Katni",
    metaKeyword: "flower delivery katni, online flowers katni madhya pradesh, florist katni, flowers katni limestone railways junction jabalpur",
    footerContent: `
<h2>Flower Delivery in Katni — Central India's Railway Junction City on the Katni River</h2>
<p>Katni (formerly Murwara), in central Madhya Pradesh on the Katni River (a Ken tributary), is one of the most important railway junction cities in central India — trains from Jabalpur split here for Delhi, Mumbai, Kolkata, and Bilaspur, making Katni Junction one of the busiest in MP. The city is built on top of one of the world's richest limestone deposits (the Katni District produces high-grade white limestone that supplies India's cement industry, and the distinctive Katni marble — actually a calcite limestone — is used in flooring and construction). The Kymore Plateau (a Vindhyan sandstone and limestone plateau) forms the district's topography. The ancient Vijay Raghavgarh fort and the Bargi Dam (on the Narmada) are accessible from Katni.</p>
<p>RedHeart delivers flowers across Katni — Main Market, Station Road, Jabalpur Road, Satna Road, and Murwara area. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katni, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Station Road, Jabalpur Road, Satna Road, Murwara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Katni?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Katni for same-day delivery."
      },
      {
        question: "Can I get corporate gifting flowers for Katni's cement industry offices?",
        answer: "Yes, corporate flower arrangements for limestone and cement company offices in Katni are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Katni?",
        answer: "Yes, same-day delivery is available across Katni for orders placed before 3 PM."
      }
    ]
  },

  "shravasti": {
    cityName: "Shravasti",
    metaTitle: "Flower Delivery in Shravasti | Buddhist Circuit UP | RedHeart",
    metaDescription: "Order flowers in Shravasti, Uttar Pradesh. Same-day delivery near Jetavana monastery & across Shravasti. From ₹399.",
    h1: "Online Flower Delivery in Shravasti",
    metaKeyword: "flower delivery shravasti, online flowers shravasti uttar pradesh, florist shravasti, flowers shravasti jetavana buddha buddhist circuit",
    footerContent: `
<h2>Flower Delivery in Shravasti — The Jetavana Monastery Where the Buddha Spent 25 Rainy Seasons</h2>
<p>Shravasti (Sravasti), in the Terai of Uttar Pradesh near the Nepal border, is one of the most sacred cities in Buddhism — it was the city where the Buddha delivered more discourses than anywhere else, spending 25 monsoon retreats (vassa) at the Jetavana monastery (donated by the merchant Anathapindika). The twin miracle performed here (producing fire and water simultaneously from his body) is one of the most celebrated events in Buddhist tradition. The Saheth-Maheth archaeological complex preserves the ruins of the ancient city walls, monastery foundations, and the Ananda Bodhi Tree (the fig tree planted from a cutting of the Bodhi Tree at Bodh Gaya). International Buddhist communities — Japanese, Taiwanese, Korean, Thai — have built temples and monasteries here.</p>
<p>RedHeart delivers flowers across Shravasti — Saheth area, Maheth archaeological zone, Buddhist temple corridor, Bhinga area, and Balrampur Road. Our range includes white flowers, lotus, roses, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shravasti, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saheth, Buddhist temple zone, Bhinga, Balrampur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">White lotus, roses, marigolds, Buddhist circuit flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are lotus and white flowers for Jetavana monastery puja available in Shravasti?",
        answer: "Yes, white lotus, white roses, and Buddhist circuit puja flowers for the Jetavana monastery and international temples at Shravasti are available for same-day delivery."
      },
      {
        question: "Can I get flowers for Buddha Purnima in Shravasti?",
        answer: "Yes, Buddha Purnima is the most important celebration in Shravasti. Lotus and white flower arrangements for the Jetavana monastery and Buddhist pilgrimage circuit are available."
      },
      {
        question: "Do you deliver flowers same day in Shravasti?",
        answer: "Yes, same-day delivery is available across Shravasti for orders placed before 3 PM."
      }
    ]
  },

  "bahraich": {
    cityName: "Bahraich",
    metaTitle: "Flower Delivery in Bahraich | Terai UP | RedHeart",
    metaDescription: "Order flowers in Bahraich, Uttar Pradesh. Same-day delivery near Katarniaghat & across Bahraich. From ₹399.",
    h1: "Online Flower Delivery in Bahraich",
    metaKeyword: "flower delivery bahraich, online flowers bahraich uttar pradesh, florist bahraich, flowers bahraich katarniaghat ghaghra terai",
    footerContent: `
<h2>Flower Delivery in Bahraich — Ghaghra's Terai Town and the Salar Masud Dargah</h2>
<p>Bahraich, on the Ghaghra (Sarayu) River in the Terai of Uttar Pradesh near the Nepal border, is a significant commercial and pilgrimage town. The Dargah of Ghazi Syed Salar Masud (an 11th-century Muslim martyr who died fighting a battle in the region) is one of North India's most unusual pilgrimage sites — it draws millions of Hindu and Muslim devotees together in what is described as a uniquely syncretic tradition, with both communities offering flowers and nazar. The Katarniaghat Wildlife Sanctuary (home to tigers, gharials, freshwater dolphins, and rare birds in the Ghaghra floodplain) is in Bahraich district. The district has a significant Muslim and Hindu Awadhi population and borders Nepal's Shuklaphanta National Park.</p>
<p>RedHeart delivers flowers across Bahraich — Main Market, Dargah area, Gonda Road, Lucknow Road, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bahraich, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dargah area, Gonda Road, Lucknow Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, dargah chadar flowers, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Salar Masud Dargah urs available in Bahraich?",
        answer: "Yes, the Salar Masud Dargah draws both Hindu and Muslim pilgrims. Rose petal and chadar flower arrangements for the dargah are available in Bahraich."
      },
      {
        question: "Can I get flowers for Eid in Bahraich?",
        answer: "Yes, rose bouquets and festive arrangements for Eid celebrations are available in Bahraich for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Bahraich?",
        answer: "Yes, same-day delivery is available across Bahraich for orders placed before 3 PM."
      }
    ]
  },

  "deoria": {
    cityName: "Deoria",
    metaTitle: "Flower Delivery in Deoria | East UP | RedHeart",
    metaDescription: "Order flowers in Deoria, Uttar Pradesh. Same-day delivery near Gorakhpur & across Deoria. From ₹399.",
    h1: "Online Flower Delivery in Deoria",
    metaKeyword: "flower delivery deoria, online flowers deoria uttar pradesh, florist deoria, flowers deoria gorakhpur belt sugarcane ghaghara bhojpuri",
    footerContent: `
<h2>Flower Delivery in Deoria — Bhojpuri Heartland in the Sugarcane Belt East of Gorakhpur</h2>
<p>Deoria, in the fertile Terai-Doab zone of eastern Uttar Pradesh east of Gorakhpur, is the headquarters of Deoria district — a densely populated agricultural district in the Ghaghra-Rapti river system. The district is part of the Bhojpuri cultural belt that stretches from eastern UP into western Bihar — one of the most culturally dynamic regions in India (source of Bhojpuri cinema, music, and the Chhath Puja tradition that has spread globally through the Bhojpuri diaspora). Deoria's sugarcane cultivation and cooperative sugar mills have been the backbone of the rural economy. The district borders Nepal's Lumbini zone and has significant cross-border cultural ties with the Terai communities. The Tharu tribal communities in the Deoria-Kushinagar Terai belt have distinctive cultural practices.</p>
<p>RedHeart delivers flowers across Deoria — Main Market, Gorakhpur Road, Bhatpar Rani area, Salempur, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoria, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gorakhpur Road, Bhatpar Rani, Salempur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Chhath Puja available in Deoria?",
        answer: "Yes, Chhath Puja is the biggest festival in Deoria's Bhojpuri community. Lotus, marigold, and banana flower arrangements for the Chhath ghats are available for same-day delivery."
      },
      {
        question: "Can I get birthday flowers in Deoria?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Deoria for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Deoria?",
        answer: "Yes, same-day delivery is available across Deoria for orders placed before 3 PM."
      }
    ]
  },

  "mau": {
    cityName: "Mau",
    metaTitle: "Flower Delivery in Mau | Ghaghra Corridor UP | RedHeart",
    metaDescription: "Order flowers in Mau, Uttar Pradesh. Same-day delivery near Ghazipur & across Mau. From ₹399.",
    h1: "Online Flower Delivery in Mau",
    metaKeyword: "flower delivery mau, online flowers mau uttar pradesh, florist mau, flowers mau ghaghra azamgarh textile power loom bhojpuri",
    footerContent: `
<h2>Flower Delivery in Mau — Power Loom Capital of Eastern UP on the Ghaghra</h2>
<p>Mau (Maunath Bhanjan), in the eastern Ghaghra corridor of Uttar Pradesh, is the headquarters of Mau district — a densely populated, commercially active city on the south bank of the Ghaghra River. Mau is widely known as eastern UP's most important power loom and sari weaving centre — the Mau saree tradition (producing affordable cotton and synthetic saris in bold colours) and the power loom cluster rival Varanasi and Surat in production volume. The district has the highest power-loom density in UP outside Varanasi. Mau is in the Bhojpuri cultural heartland — the Chhath Puja ghats on the Ghaghra are major community gathering points. The district borders Azamgarh (the homeland of the famous UP-Bhojpuri poet Ramdhari Singh Dinkar).</p>
<p>RedHeart delivers flowers across Mau — Main Market, Azamgarh Road, Ghazipur Road, Station Road, and Ghaghra ghat area. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mau, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Azamgarh Road, Ghazipur Road, Station Road, Ghaghra ghat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Chhath Puja available in Mau?",
        answer: "Yes, Chhath Puja is the most important festival in Mau's Bhojpuri community. Lotus, marigold, and banana flower arrangements for the Ghaghra ghat celebrations are available."
      },
      {
        question: "Can I get corporate gifting flowers for Mau's textile industry in Mau?",
        answer: "Yes, corporate flower arrangements for power loom businesses and textile company offices in Mau are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Mau?",
        answer: "Yes, same-day delivery is available across Mau for orders placed before 3 PM."
      }
    ]
  },

  "nawada": {
    cityName: "Nawada",
    metaTitle: "Flower Delivery in Nawada | Bihar | RedHeart",
    metaDescription: "Order flowers in Nawada, Bihar. Same-day delivery near Rajgir & across Nawada. From ₹399.",
    h1: "Online Flower Delivery in Nawada",
    metaKeyword: "flower delivery nawada, online flowers nawada bihar, florist nawada, flowers nawada rajgir nalanda hills gaya",
    footerContent: `
<h2>Flower Delivery in Nawada — The Hills District Between Rajgir and Gaya in the Buddhist Corridor</h2>
<p>Nawada, in central Bihar, is the headquarters of Nawada district — a district of scattered hills and plateaus between the major Buddhist pilgrimage sites of Rajgir (in Nalanda district) and Gaya. The Nawada district's Pahari area (a hilly forested zone) is one of the few elevated landscapes in the otherwise flat Gangetic Bihar. The district has historically been a Maoist-affected zone (part of the "red corridor" linking Jharkhand, Bihar, and UP). The Kaveri river and its tributaries drain the district. Nawada's Kakand area has the Parvati temple (an important local Shakti shrine). The district is also home to significant Paswan and Musahar communities — the agrarian caste groups associated with the Dalit political awakening in Bihar under Jagannath Mishra and Ram Vilas Paswan's eras.</p>
<p>RedHeart delivers flowers across Nawada — Main Market, Patna Road, Gaya Road, Warsaliganj area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawada, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Patna Road, Gaya Road, Warsaliganj, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Chhath Puja available in Nawada?",
        answer: "Yes, Chhath Puja is the biggest festival in Nawada's Bihari community. Lotus, marigold, and banana flower arrangements for the ghat celebrations are available."
      },
      {
        question: "Can I get birthday flowers in Nawada?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nawada for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Nawada?",
        answer: "Yes, same-day delivery is available across Nawada for orders placed before 3 PM."
      }
    ]
  },

  "arwal": {
    cityName: "Arwal",
    metaTitle: "Flower Delivery in Arwal | Bihar | RedHeart",
    metaDescription: "Order flowers in Arwal, Bihar. Same-day delivery near Jehanabad & across Arwal. From ₹399.",
    h1: "Online Flower Delivery in Arwal",
    metaKeyword: "flower delivery arwal, online flowers arwal bihar, florist arwal, flowers arwal jehanabad sonabhadra son river patna belt",
    footerContent: `
<h2>Flower Delivery in Arwal — Bihar's Youngest District on the Son River Plains</h2>
<p>Arwal, on the southern bank of the Son River in Bihar, is the headquarters of Arwal district — Bihar's newest district (created 2009, carved from Jehanabad). The Son River's fertile floodplain makes this one of Bihar's most agriculturally productive sub-regions, with rice, wheat, and maize cultivation as the mainstay. Arwal historically suffered from severe caste violence during the 1980s-1990s when Bihar was gripped by upper-caste militia violence against Dalits (the Senari massacre and Bathani Tola massacre affected this belt). The district has seen significant post-conflict social and political transformation. Arwal town's proximity to the Patna-Gaya highway and rail corridor makes it a transit point for the Buddhist circuit pilgrimage route.</p>
<p>RedHeart delivers flowers across Arwal — Main Market, Patna Road, Jahanabad Road, Son River area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arwal, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Patna Road, Jehanabad Road, Son River area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Chhath Puja available in Arwal?",
        answer: "Yes, Chhath Puja is celebrated on the Son River ghats in Arwal. Lotus, marigold, and banana flower arrangements for the festival are available for same-day delivery."
      },
      {
        question: "Can I get birthday flowers in Arwal?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Arwal for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Arwal?",
        answer: "Yes, same-day delivery is available across Arwal for orders placed before 3 PM."
      }
    ]
  },

  "jehanabad": {
    cityName: "Jehanabad",
    metaTitle: "Flower Delivery in Jehanabad | Bihar | RedHeart",
    metaDescription: "Order flowers in Jehanabad, Bihar. Same-day delivery near Arval & across Jehanabad. From ₹399.",
    h1: "Online Flower Delivery in Jehanabad",
    metaKeyword: "flower delivery jehanabad, online flowers jehanabad bihar, florist jehanabad, flowers jehanabad barbar caves patna belt son",
    footerContent: `
<h2>Flower Delivery in Jehanabad — Barbar Caves' District on the Patna-Gaya Corridor</h2>
<p>Jehanabad, in the southern Bihar plains between Patna and Gaya, is the headquarters of Jehanabad district — a district historically significant in Bihar's caste conflict history and now undergoing agricultural transformation. The most remarkable heritage site in the district is the Barbar Hills cave complex — a group of four rock-cut caves dating to the Maurya period (3rd century BCE, carved under Emperor Ashoka's patronage), making them among the oldest surviving rock-cut caves in India, predating the famous Ajanta and Ellora caves by over 400 years. These caves (Lomas Rishi, Sudama, Karna Chopar, and Visvakarma) were donated to the Ajivika sect monks. The district's Makhdumpur area has historical connections with the Sufi tradition in Bihar.</p>
<p>RedHeart delivers flowers across Jehanabad — Main Market, Patna Road, Gaya Road, Makhdumpur area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jehanabad, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Patna Road, Gaya Road, Makhdumpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Chhath Puja available in Jehanabad?",
        answer: "Yes, Chhath Puja is the biggest festival in Jehanabad. Lotus, marigold, and banana flower arrangements for the ghat celebrations are available for same-day delivery."
      },
      {
        question: "Can I get birthday flowers in Jehanabad?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jehanabad for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Jehanabad?",
        answer: "Yes, same-day delivery is available across Jehanabad for orders placed before 3 PM."
      }
    ]
  },

  "palakkad": {
    cityName: "Palakkad",
    metaTitle: "Flower Delivery in Palakkad | Kerala Gap City | RedHeart",
    metaDescription: "Order flowers in Palakkad, Kerala. Same-day delivery near Palakkad Gap & across Palakkad. From ₹399.",
    h1: "Online Flower Delivery in Palakkad",
    metaKeyword: "flower delivery palakkad, online flowers palakkad kerala, florist palakkad, flowers palakkad gap pass tamilian heritage nila river rice",
    footerContent: `
<h2>Flower Delivery in Palakkad — Gateway Between Kerala and Tamil Nadu Through the Famous Gap</h2>
<p>Palakkad (Palghat), in northern Kerala, is unique among Kerala's cities — it is the only major city on the flat plains (not the coast or hills) because of the Palakkad Gap, a low natural pass through the Western Ghats that connects the Malabar Coast with the Tamil Nadu plateau. This gap has made Palakkad a historical entry point for Tamilians into Kerala — the Palakkad Brahmin community (Palghat Iyers, a Tam-Bram community known for their classical Carnatic music heritage, producing legends like M.S. Subbulakshmi's family connections and musicians like Palghat Mani Iyer) is culturally distinct. The Nila (Bharatapuzha) River — Kerala's second-longest river — flows through Palakkad. The Malampuzha Dam and gardens and the Palakkad Fort (built by Hyder Ali of Mysore) are major attractions.</p>
<p>RedHeart delivers flowers across Palakkad — Main Road, Coimbatore Road, Thrissur Road, Malampuzha area, and Station Road. Our range includes roses, anthuriums, jasmine, and seasonal Kerala bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palakkad, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Coimbatore Road, Thrissur Road, Malampuzha, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, anthuriums, jasmine, seasonal Kerala bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Vishu available in Palakkad?",
        answer: "Yes, Vishu (Kerala New Year) is a major festival in Palakkad. Kani flowers (especially konna/cassia fistula, the golden shower tree) and seasonal Kerala bouquets for the occasion are available."
      },
      {
        question: "Can I get anthuriums for weddings in Palakkad?",
        answer: "Yes, Kerala anthuriums, roses, and wedding flower arrangements are available in Palakkad for same-day delivery and advance wedding orders."
      },
      {
        question: "Do you deliver flowers same day in Palakkad?",
        answer: "Yes, same-day delivery is available across Palakkad for orders placed before 3 PM."
      }
    ]
  },

  "malappuram": {
    cityName: "Malappuram",
    metaTitle: "Flower Delivery in Malappuram | Kerala | RedHeart",
    metaDescription: "Order flowers in Malappuram, Kerala. Same-day delivery near Tirur & across Malappuram. From ₹399.",
    h1: "Online Flower Delivery in Malappuram",
    metaKeyword: "flower delivery malappuram, online flowers malappuram kerala, florist malappuram, flowers malappuram malabar muslim nila bharatapuzha",
    footerContent: `
<h2>Flower Delivery in Malappuram — Malabar's Largest Muslim-Majority District on the Nila River</h2>
<p>Malappuram, in central Kerala's Malabar region, is the headquarters of Malappuram district — Kerala's largest district by Muslim population percentage (around 70% Muslim, the highest in Kerala). The district is named for the hill (mala = hill, puram = city) overlooking the town. The Malabar rebellion of 1921 (Mapilla Uprising), in which Muslim Mapilla farmers fought against the Nizam of Hyderabad's ally landlords and British authority, was concentrated in this region — the Khilafat movement's most intense and violent phase played out here. Malappuram is also known for its deep connection to football — the Malappuram district has one of the highest densities of football clubs in India (fuelled by the Gulf diaspora), and produces top Indian football players. The Tirur-Ponnani belt along the Nila River was the historical seat of the Zamorin's Malabar power.</p>
<p>RedHeart delivers flowers across Malappuram — Main Road, Tirur area, Manjeri area, Perinthalmanna, and Station Road. Our range includes roses, anthuriums, jasmine, and seasonal Kerala bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malappuram, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Tirur, Manjeri, Perinthalmanna, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, anthuriums, seasonal Kerala bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Eid available in Malappuram?",
        answer: "Yes, Eid is the biggest celebration in Malappuram. Rose bouquets, jasmine, and festive flower arrangements for Eid-ul-Fitr and Eid-ul-Adha are available for same-day delivery."
      },
      {
        question: "Can I get flowers for a wedding in Malappuram?",
        answer: "Yes, Kerala-style rose and jasmine wedding arrangements, as well as Gulf-diaspora reunion flowers, are available in Malappuram for advance and same-day orders."
      },
      {
        question: "Do you deliver flowers same day in Malappuram?",
        answer: "Yes, same-day delivery is available across Malappuram for orders placed before 3 PM."
      }
    ]
  },

  "kannur": {
    cityName: "Kannur",
    metaTitle: "Flower Delivery in Kannur | Theyyam Country Kerala | RedHeart",
    metaDescription: "Order flowers in Kannur, Kerala. Same-day delivery near Theyyam grounds & across Kannur. From ₹399.",
    h1: "Online Flower Delivery in Kannur",
    metaKeyword: "flower delivery kannur, online flowers kannur kerala, florist kannur, flowers kannur theyyam malabar cannanore loom weaving",
    footerContent: `
<h2>Flower Delivery in Kannur — Theyyam's Sacred Country and Kerala's Handloom Weaving Heartland</h2>
<p>Kannur (Cannanore), on the Malabar Coast of northern Kerala, is one of Kerala's most culturally distinctive cities. Kannur is the heartland of Theyyam — a spectacular ritual art form in which performers embody deities through elaborate costumes, face-paint, and fire rituals over all-night ceremonies in tharavad (ancestral home) compounds; over 400 Theyyam forms exist and over 850 Theyyam performances occur across Kannur and Kasaragod districts each year from November to May. The Kannur Loom (the handloom weaving tradition, with cooperative societies producing the famous Kannur cotton fabric) supplies fabric internationally. The Portuguese-built St. Angelo Fort overlooks the Arabian Sea. The Arakkal Mosque (the seat of the only Muslim royal family in Kerala) is in Kannur town.</p>
<p>RedHeart delivers flowers across Kannur — Main Road, Fort area, Thalassery Road, Payyanur area, and Station Road. Our range includes roses, anthuriums, jasmine, marigolds, and seasonal Kerala bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kannur, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Fort area, Thalassery Road, Payyanur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, anthuriums, seasonal Malabar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Theyyam season available in Kannur?",
        answer: "Yes, the Theyyam season (November to May) in Kannur's tharavad performances uses specific floral arrangements. Seasonal marigold and forest flower sets for Theyyam rituals and viewing visits are available."
      },
      {
        question: "Can I get flowers for Onam in Kannur?",
        answer: "Yes, Onam pookalam (flower rangoli) flowers — marigolds, chrysanthemums, and seasonal blooms — for the Onam floral carpet are available in Kannur."
      },
      {
        question: "Do you deliver flowers same day in Kannur?",
        answer: "Yes, same-day delivery is available across Kannur for orders placed before 3 PM."
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
