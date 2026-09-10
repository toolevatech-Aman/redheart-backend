/**
 * Batch 18 — Bellary (Ballari), Bidar, Raichur, Chitradurga, Kalaburagi (Gulbarga),
 *             Karimnagar (check - done?), Kadapa, Ongole, Vizianagaram,
 *             Kumbakonam, Tiruvallur, Hosur, Dindigul, Karur, Cuddalore
 * NOTE: Karimnagar was done in batch 7 (skip it), add Vizianagaram instead
 * node scripts/seo-city-flowers-18.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "ballari": {
    cityName: "Ballari",
    metaTitle: "Flower Delivery in Ballari | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ballari with same-day delivery. Roses, marigolds & bouquets to Gandhi Nagar, Cantonment, Hospet Road & all areas. From ₹399.",
    h1: "Flower Delivery in Ballari",
    metaKeyword: "flower delivery in Ballari Bellary, online flower delivery Ballari, same day flower delivery Ballari, florist Ballari Karnataka",
    footerContent: `<h2>Flower Delivery in Ballari — The Iron Ore City Near Hampi</h2>
<p>Ballari (historically Bellary) is Karnataka's major city in the northern Deccan plateau — the iron ore capital of South India, where the Bellary-Hospet iron ore belt has been one of India's most productive mineral regions. The city is also the closest major urban centre to Hampi — the UNESCO World Heritage Site that contains the ruins of Vijayanagara, the last great Hindu empire of South India, spread across a surreal boulder landscape on the Tungabhadra. The Sandur Manganese & Iron Ores (SMIORE) company, one of India's oldest mining companies, is based in the nearby Sandur region. The Ballari Cantonment has a significant military presence. RedHeart delivers fresh flowers across Ballari with same-day and midnight delivery, starting at ₹399.</p>
<p>Gandhi Nagar and the Cantonment areas are the main residential zones. Hospet Road connects Ballari to the Hampi belt. Ugadi and Dasara (Karnataka's state festival) are the main flower occasions, with marigolds and chrysanthemums used for decoration.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballari, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Nagar, Cantonment, Hospet Road, Kurugodu, Toranagallu, Kudligi Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Ballari?", answer: "Yes, RedHeart delivers same-day to Gandhi Nagar, Cantonment, Hospet Road, and all major Ballari areas." },
      { question: "Does RedHeart deliver Ugadi flowers in Ballari?", answer: "Yes! RedHeart delivers marigolds, roses, and neem flowers for Ugadi celebrations across Ballari." },
      { question: "Is midnight delivery available in Ballari?", answer: "Yes, midnight delivery is available across Ballari." }
    ]
  },
  "bidar": {
    cityName: "Bidar",
    metaTitle: "Flower Delivery in Bidar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bidar with same-day delivery. Roses, marigolds & bouquets to Old Town, New Town, Udgir Road & all areas. From ₹399.",
    h1: "Flower Delivery in Bidar",
    metaKeyword: "flower delivery in Bidar, online flower delivery Bidar, same day flower delivery Bidar, florist Bidar Karnataka",
    footerContent: `<h2>Flower Delivery in Bidar — The Bidriware Capital on the Deccan Plateau</h2>
<p>Bidar is one of Karnataka's northern cities, sitting on the Deccan plateau's edge close to the Telangana and Maharashtra borders. The city was the capital of the Bahmani Sultanate in the 15th century, and then of the Barid Shahi dynasty — and the Bidar Fort, the Madrasa of Mahmud Gawan (the 15th-century scholar-administrator whose magnificent three-storey madrasa stands partly intact in the city), and the numerous Bahmani tombs in the Ashtur necropolis make it one of the most historically rich cities in the Deccan. Bidar is also the home of Bidriware — the unique art of inlaying silver thread in blackened zinc alloy to create intricate designs, a craft tradition dating to the Bahmani period that is now a GI-tagged product. RedHeart delivers fresh flowers across Bidar with same-day and midnight delivery, starting at ₹399.</p>
<p>Old Town (around the fort) and New Town are the main zones. Udgir Road connects Bidar to Maharashtra. The mixed Hindu-Muslim heritage of the Deccan Sultanate cities gives Bidar a diverse festival calendar.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bidar, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Old Town, New Town, Udgir Road, Basavakalyan Road, Bidar Fort area, Chidri Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Bidar?", answer: "Yes, RedHeart delivers same-day to Old Town, New Town, and all major Bidar areas." },
      { question: "Does RedHeart deliver Eid and Ugadi flowers in Bidar?", answer: "Yes! Bidar's mixed heritage means both Eid and Ugadi are celebrated. RedHeart delivers flowers for all occasions." },
      { question: "Is midnight delivery available in Bidar?", answer: "Yes, midnight delivery is available across Bidar." }
    ]
  },
  "raichur": {
    cityName: "Raichur",
    metaTitle: "Flower Delivery in Raichur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Raichur with same-day delivery. Roses, marigolds & bouquets to Gandhi Nagar, Station Road, Civil Lines & all areas. From ₹399.",
    h1: "Flower Delivery in Raichur",
    metaKeyword: "flower delivery in Raichur, online flower delivery Raichur, same day flower delivery Raichur, florist Raichur Karnataka",
    footerContent: `<h2>Flower Delivery in Raichur — Karnataka's Cotton City Between Two Rivers</h2>
<p>Raichur is Karnataka's northernmost major city — sitting in the Doab between the Krishna and Tungabhadra rivers, one of the most contested territories in Deccan history. The Raichur Fort, held alternately by the Bahmani Sultans, the Vijayanagara Empire, the Bijapur Sultanate, and finally the Nizams of Hyderabad before merging with Karnataka in 1956 during the States Reorganisation, is one of the Deccan's most historically layered fortresses. The city is the commercial centre of one of Karnataka's most important cotton and paddy growing districts. The RTPS (Raichur Thermal Power Station) is one of Karnataka's major power generation facilities. RedHeart delivers fresh flowers across Raichur with same-day and midnight delivery, starting at ₹399.</p>
<p>Gandhi Nagar and Station Road are the main commercial zones. Civil Lines is the administrative area. The Telugu and Kannada-speaking communities of Raichur celebrate Ugadi, Bonalu, and Diwali with flowers.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raichur, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Nagar, Station Road, Civil Lines, RTPS Township, Sindhanur Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Raichur?", answer: "Yes, RedHeart delivers same-day to Gandhi Nagar, Station Road, RTPS Township, and all major Raichur areas." },
      { question: "Does RedHeart deliver Ugadi flowers in Raichur?", answer: "Yes! RedHeart delivers marigolds, neem, and rose arrangements for Ugadi celebrations across Raichur." },
      { question: "Is midnight delivery available in Raichur?", answer: "Yes, midnight delivery is available across Raichur." }
    ]
  },
  "chitradurga": {
    cityName: "Chitradurga",
    metaTitle: "Flower Delivery in Chitradurga | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Chitradurga with same-day delivery. Roses, marigolds & bouquets to Fort Road, Holalkere Road, New Extension & all areas. From ₹399.",
    h1: "Flower Delivery in Chitradurga",
    metaKeyword: "flower delivery in Chitradurga, online flower delivery Chitradurga, same day flower delivery Chitradurga, florist Chitradurga Karnataka",
    footerContent: `<h2>Flower Delivery in Chitradurga — The Fort City in Karnataka's Drylands</h2>
<p>Chitradurga is known for its remarkable hill fort — the Chitradurga Fort (Kallina Kote, or Fort of Stones) built over seventeen rocky hillocks in a concentric arrangement with massive stone walls that blend into the natural boulders so perfectly that enemy armies could barely tell where nature ended and the fort began. The Nayaka chiefs (Palegars) who built this fort resisted the Mysore Kingdom for decades before Hyder Ali finally captured it in 1779. The Hidimbeshwara temple inside the fort complex is the spiritual heart of the city. Chitradurga district grows sunflowers on a large scale — the sunflower oil produced here is significant for Karnataka's agriculture. RedHeart delivers fresh flowers across Chitradurga with same-day and midnight delivery, starting at ₹399.</p>
<p>Fort Road and Holalkere Road are the main zones. New Extension is the residential area. Karnataka festivals including Ugadi and Karnataka Rajyotsava drive flower demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitradurga, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fort Road, Holalkere Road, New Extension, Davangere Road, Turuvanur area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Chitradurga?", answer: "Yes, RedHeart delivers same-day to Fort Road, Holalkere Road, and all major Chitradurga areas." },
      { question: "Does RedHeart deliver Karnataka Rajyotsava flowers in Chitradurga?", answer: "Yes! RedHeart delivers sunflowers, marigolds, and Kannada colours arrangements for Karnataka Rajyotsava on November 1." },
      { question: "Is midnight delivery available in Chitradurga?", answer: "Yes, midnight delivery is available across Chitradurga." }
    ]
  },
  "kadapa": {
    cityName: "Kadapa",
    metaTitle: "Flower Delivery in Kadapa | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kadapa with same-day delivery. Roses, marigolds & bouquets to Jaganmohan Colony, Old Town, Srinivasa Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Kadapa",
    metaKeyword: "flower delivery in Kadapa, online flower delivery Kadapa, same day flower delivery Kadapa, florist Kadapa Andhra Pradesh",
    footerContent: `<h2>Flower Delivery in Kadapa — YSRCP's Hometown and the Limestone Country</h2>
<p>Kadapa (officially Y.S.R. Kadapa, renamed in honour of Y.S. Rajasekhara Reddy, the beloved Chief Minister of Andhra Pradesh who died in a helicopter crash in 2009) is the headquarters of a district that is the political heartland of the YSRCP (YSR Congress Party). The city sits in the Cuddapah basin — one of India's most important geological formations, where some of the world's oldest sedimentary rocks are found, and where the limestone, baryte, and uranium deposits have shaped the regional economy. Tirumala-Tirupati is just 90 km from Kadapa, making it a staging base for pilgrims. The Sri Venkateswara University is an important academic institution in the city. RedHeart delivers fresh flowers across Kadapa with same-day and midnight delivery, starting at ₹399.</p>
<p>Jaganmohan Colony and Old Town are established areas. Srinivasa Nagar is residential. Ugadi, Vinayaka Chavithi, and Sri Rama Navami are the major flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kadapa, Andhra Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jaganmohan Colony, Old Town, Srinivasa Nagar, Mydukur Road, Proddatur Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kadapa?", answer: "Yes, RedHeart delivers same-day to Jaganmohan Colony, Old Town, Srinivasa Nagar, and all Kadapa areas." },
      { question: "Does RedHeart deliver Ugadi flowers in Kadapa?", answer: "Yes! RedHeart delivers marigolds, roses, and neem flowers for Ugadi across Kadapa." },
      { question: "Is midnight delivery available in Kadapa?", answer: "Yes, midnight delivery is available across Kadapa." }
    ]
  },
  "ongole": {
    cityName: "Ongole",
    metaTitle: "Flower Delivery in Ongole | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ongole with same-day delivery. Roses, marigolds & bouquets to Kurnool Road, Trunk Road, Santhanuthalapadu & all areas. From ₹399.",
    h1: "Flower Delivery in Ongole",
    metaKeyword: "flower delivery in Ongole, online flower delivery Ongole, same day flower delivery Ongole, florist Ongole Andhra Pradesh Prakasam",
    footerContent: `<h2>Flower Delivery in Ongole — The Ongole Cattle City and Tobaco Coast</h2>
<p>Ongole is the headquarters of Prakasam district in Andhra Pradesh — a city known for the Ongole cattle breed (one of the world's most important Zebu breeds, exported to Brazil in the early 20th century where they formed the basis of the Brazilian Nelore breed, the world's dominant beef cattle), for tobacco cultivation (the Krishna-Godavari delta region's tobacco is world-class), and for its position on the Bay of Bengal coast where the Gundlakamma river meets the sea. The Kothapatnam fishing harbour nearby is one of the most important fishing ports in Andhra Pradesh. RedHeart delivers fresh flowers across Ongole with same-day and midnight delivery, starting at ₹399.</p>
<p>Kurnool Road and Trunk Road are the main commercial zones. Santhanuthalapadu is an established residential area. Telugu festivals including Ugadi and Sankranti are major flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ongole, Andhra Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kurnool Road, Trunk Road, Santhanuthalapadu, Naidupeta Road, Markapur Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Ongole?", answer: "Yes, RedHeart delivers same-day to Kurnool Road, Trunk Road, and all major Ongole areas." },
      { question: "Does RedHeart deliver Sankranti flowers in Ongole?", answer: "Yes! RedHeart delivers marigolds, lotus, and seasonal flowers for Sankranti celebrations across Ongole." },
      { question: "Is midnight delivery available in Ongole?", answer: "Yes, midnight delivery is available across Ongole." }
    ]
  },
  "vizianagaram": {
    cityName: "Vizianagaram",
    metaTitle: "Flower Delivery in Vizianagaram | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Vizianagaram with same-day delivery. Roses, marigolds & bouquets to Jagannaikpur, Dwarakanagar, Old Town & all areas. From ₹399.",
    h1: "Flower Delivery in Vizianagaram",
    metaKeyword: "flower delivery in Vizianagaram, online flower delivery Vizianagaram, same day flower delivery Vizianagaram, florist Vizianagaram Andhra Pradesh",
    footerContent: `<h2>Flower Delivery in Vizianagaram — The City of Victory and the Gajapati Kings</h2>
<p>Vizianagaram (meaning "city of victory" in Telugu) was the capital of the princely state of Vizianagaram, ruled by the Pusapati Gajapatis — a prominent Telugu royal family who were major patrons of Telugu literature and music. The Maharajah's College of Music (now part of Maharajah's College) here was one of the most important music institutions in Andhra Pradesh. The city is in northern Andhra Pradesh's tribal region and serves as a base for exploring the Araku Valley and the Eastern Ghats tribal areas. Bobbili — the town of the famous Battle of Bobbili (1757) — is nearby. RedHeart delivers fresh flowers across Vizianagaram with same-day and midnight delivery, starting at ₹399.</p>
<p>Jagannaikpur and Dwarakanagar are residential areas. Old Town is the heritage commercial zone near the fort. Telugu festivals drive regular flower demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vizianagaram, Andhra Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagannaikpur, Dwarakanagar, Old Town, Bobbili Road, Srikakulam Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Vizianagaram?", answer: "Yes, RedHeart delivers same-day to Jagannaikpur, Dwarakanagar, and all major Vizianagaram areas." },
      { question: "Does RedHeart deliver Ugadi flowers in Vizianagaram?", answer: "Yes! RedHeart delivers marigolds and roses for Ugadi and all Telugu festivals in Vizianagaram." },
      { question: "Is midnight delivery available in Vizianagaram?", answer: "Yes, midnight delivery is available across Vizianagaram." }
    ]
  },
  "kumbakonam": {
    cityName: "Kumbakonam",
    metaTitle: "Flower Delivery in Kumbakonam | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kumbakonam with same-day delivery. Roses, marigolds & jasmine for Adi Kumbeswarar, Sarangapani temples & all areas. From ₹399.",
    h1: "Flower Delivery in Kumbakonam",
    metaKeyword: "flower delivery in Kumbakonam, online flower delivery Kumbakonam, same day flower delivery Kumbakonam, florist Kumbakonam Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Kumbakonam — The Temple City of the Cauvery Delta</h2>
<p>Kumbakonam is Tamil Nadu's most temple-dense small city — a city of extraordinary religious heritage in the Cauvery delta, where the river's fertile flood plains have sustained civilisation and temple-building for over 2000 years. The city has over 180 Hindu temples within a 3 km radius, including the Adi Kumbeswarar (Shiva), Sarangapani (Vishnu), Brahmaswadeswarar, and dozens of smaller shrines. The Mahamaham festival — held once every 12 years at the Mahamaham tank (the sacred tank fed by sacred rivers including the Ganga, Yamuna, Cauvery, Saraswati, and others) — is one of the largest religious gatherings in South India. Kumbakonam is also famous for its traditional arts and crafts and for its filter coffee — the "Kumbakonam degree coffee" is considered among the best in Tamil Nadu. RedHeart delivers fresh flowers across Kumbakonam with same-day and midnight delivery, starting at ₹399.</p>
<p>TSR Big Street and Head Post Office Road are the commercial zones. The temple corridors see daily jasmine, marigold, and lotus offerings. The Mahamaham tank area and Papanasam Ghat are the spiritual hubs.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kumbakonam, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">TSR Big Street, Head Post Office Road, Mahamaham Tank area, Papanasam Ghat, Swamimalai Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kumbakonam?", answer: "Yes, RedHeart delivers same-day to TSR Big Street, Mahamaham Tank area, and all Kumbakonam areas." },
      { question: "Does RedHeart deliver jasmine for Kumbakonam temple puja?", answer: "Yes! RedHeart delivers fresh jasmine garlands, marigolds, and lotus for Adi Kumbeswarar, Sarangapani, and all Kumbakonam temples." },
      { question: "Is midnight delivery available in Kumbakonam?", answer: "Yes, midnight delivery is available across Kumbakonam." }
    ]
  },
  "hosur": {
    cityName: "Hosur",
    metaTitle: "Flower Delivery in Hosur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Hosur with same-day delivery. Roses, marigolds & bouquets to SIPCOT, Mathigiri, Rayakottai Road & all areas. From ₹399.",
    h1: "Flower Delivery in Hosur",
    metaKeyword: "flower delivery in Hosur, online flower delivery Hosur, same day flower delivery Hosur, florist Hosur Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Hosur — The Silicon Valley of Tamil Nadu and Ola Electric's Base</h2>
<p>Hosur is Tamil Nadu's fastest-growing industrial city — just 40 km from Bengaluru, it is the industrial satellite city that captures the overflow of Bengaluru's manufacturing economy. The SIPCOT (State Industries Promotion Corporation of Tamil Nadu) industrial estate in Hosur is home to over 150 companies including Hero MotoCorp, TVS Motor, Titan, Hindustan Unilever, and — most recently — Ola Electric, whose electric scooter factory and cell manufacturing "Gigafactory" here are among the largest in Asia. Despite being in Tamil Nadu, Hosur's workforce is heavily Kannada-speaking due to its proximity to Bengaluru. The Rayakottai fort above the city offers panoramic views of the Cauvery basin. RedHeart delivers fresh flowers across Hosur with same-day and midnight delivery, starting at ₹399.</p>
<p>SIPCOT and the industrial zone employ thousands of workers in company townships. Mathigiri is the residential area. The Bengaluru-proximity means Hosur's young, working-class population has strong gifting culture for birthdays and anniversaries.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hosur, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">SIPCOT, Mathigiri, Rayakottai Road, Shoolagiri Road, Denkanikottai Road, Ola campus area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Hosur?", answer: "Yes, RedHeart delivers same-day to SIPCOT, Mathigiri, Rayakottai Road, and all major Hosur areas." },
      { question: "Does RedHeart deliver to industrial townships in Hosur?", answer: "Yes! RedHeart delivers to all company townships and residential areas in the Hosur SIPCOT zone." },
      { question: "Is midnight delivery available in Hosur?", answer: "Yes, midnight delivery is available across Hosur." }
    ]
  },
  "dindigul": {
    cityName: "Dindigul",
    metaTitle: "Flower Delivery in Dindigul | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Dindigul with same-day delivery. Roses, marigolds & bouquets to Palani Road, Old Bus Stand, VN Road & all areas. From ₹399.",
    h1: "Flower Delivery in Dindigul",
    metaKeyword: "flower delivery in Dindigul, online flower delivery Dindigul, same day flower delivery Dindigul, florist Dindigul Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Dindigul — The Lock City and Gateway to Kodaikanal</h2>
<p>Dindigul is Tamil Nadu's Kodaikanal gateway city — the plains town at the foot of the Palani Hills, from where the road to Kodaikanal (the famous hill station) begins its climb. The city is also known for its metal locks (Dindigul locks are among the best traditional padlocks made in Tamil Nadu) and its biryani — Dindigul Thalapakatti Biryani, made with the small-grained Seeraga Samba rice and Kodi (chicken), has become one of Tamil Nadu's most beloved biryani styles, with restaurants carrying the name in almost every Tamil Nadu city. The Rock Fort (Dindigul Malai) — a rocky hill with a fort — overlooks the city. The nearby Palani Murugan temple (one of Tamil Nadu's six major Murugan temples) draws enormous pilgrim traffic through Dindigul. RedHeart delivers fresh flowers across Dindigul with same-day and midnight delivery, starting at ₹399.</p>
<p>Palani Road and Old Bus Stand area are the main commercial zones. VN Road (V.N. Pudupalayam Road) is residential. Thaipusam — the festival of the Palani Murugan temple — is the region's biggest flower occasion.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dindigul, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palani Road, Old Bus Stand, VN Road, Kodaikanal Road, Batlagundu Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Dindigul?", answer: "Yes, RedHeart delivers same-day to Palani Road, Old Bus Stand, VN Road, and all major Dindigul areas." },
      { question: "Does RedHeart deliver Thaipusam flowers in Dindigul?", answer: "Yes! RedHeart delivers marigolds, jasmine, and lotus for Thaipusam puja preparations in Dindigul and the Palani temple area." },
      { question: "Is midnight delivery available in Dindigul?", answer: "Yes, midnight delivery is available across Dindigul." }
    ]
  },
  "karur": {
    cityName: "Karur",
    metaTitle: "Flower Delivery in Karur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Karur with same-day delivery. Roses, jasmine & bouquets to Jayamkondam Road, Ponnamapet, Coimbatore Road & all areas. From ₹399.",
    h1: "Flower Delivery in Karur",
    metaKeyword: "flower delivery in Karur, online flower delivery Karur, same day flower delivery Karur, florist Karur Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Karur — The Textile and Bus Body Hub of the Cauvery</h2>
<p>Karur has two distinct industrial identities — it is one of Tamil Nadu's most important home textile export hubs (Karur produces kitchen linen, bath linen, and home furnishing textiles exported to Europe, the US, and Australia, making it a city far wealthier than its size suggests) and India's largest bus body building centre (more buses bodies are assembled in Karur than anywhere else, with VRL, KPN, and dozens of other operators sourcing their custom buses from Karur's fabrication workshops). The city sits on the Cauvery river, and its agricultural hinterland produces turmeric and vegetables. Karur's ancient heritage includes the Thanthonreeswara temple and the Kalyana Kumaran rock inscription. RedHeart delivers fresh flowers across Karur with same-day and midnight delivery, starting at ₹399.</p>
<p>Jayamkondam Road and Ponnamapet are the main zones. Coimbatore Road handles the industrial traffic. Pongal and Karthigai Deepam are the main flower occasions for Karur's Tamil community.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karur, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jayamkondam Road, Ponnamapet, Coimbatore Road, Kulithalai Road, Kattur, Krishnarayapuram</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Karur?", answer: "Yes, RedHeart delivers same-day to Jayamkondam Road, Ponnamapet, and all major Karur areas." },
      { question: "Does RedHeart deliver Pongal flowers in Karur?", answer: "Yes! RedHeart delivers marigolds and seasonal flowers for Pongal and Karthigai Deepam in Karur." },
      { question: "Is midnight delivery available in Karur?", answer: "Yes, midnight delivery is available across Karur." }
    ]
  },
  "cuddalore": {
    cityName: "Cuddalore",
    metaTitle: "Flower Delivery in Cuddalore | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Cuddalore with same-day delivery. Roses, jasmine & bouquets to Old Town, Thiruvandar Road, Panruti Road & all areas. From ₹399.",
    h1: "Flower Delivery in Cuddalore",
    metaKeyword: "flower delivery in Cuddalore, online flower delivery Cuddalore, same day flower delivery Cuddalore, florist Cuddalore Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Cuddalore — The Ancient Port City and SIPCOT Industrial Hub</h2>
<p>Cuddalore is one of Tamil Nadu's most ancient coastal cities — it was a significant port even in the Sangam age, and the Fort St. David (built by the British East India Company in 1690) was one of the earliest British fortifications in India. The city has a complex colonial history — it changed hands multiple times between the British, French, Dutch, and Maratha forces in the 17th-18th centuries. The SIPCOT industrial estate in Cuddalore has attracted petrochemical companies (SPIC, Cuddalore Powergen) making it an important industrial zone. The nearby Pillayarpatti Vinayagar temple and the Manakula Vinayagar temple at Cuddalore attract devotees continuously. RedHeart delivers fresh flowers across Cuddalore with same-day and midnight delivery, starting at ₹399.</p>
<p>Old Town and Thiruvandar Road are the main zones. Panruti Road connects to the interior. Tamil calendar festivals drive consistent flower demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuddalore, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Old Town, Thiruvandar Road, Panruti Road, SIPCOT area, Cuddalore Port area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Cuddalore?", answer: "Yes, RedHeart delivers same-day to Old Town, SIPCOT area, and all major Cuddalore areas." },
      { question: "Does RedHeart deliver Karthigai Deepam flowers in Cuddalore?", answer: "Yes! RedHeart delivers marigolds and lamp flower arrangements for Karthigai Deepam in Cuddalore." },
      { question: "Is midnight delivery available in Cuddalore?", answer: "Yes, midnight delivery is available across Cuddalore." }
    ]
  },
  "kalaburagi": {
    cityName: "Kalaburagi",
    metaTitle: "Flower Delivery in Kalaburagi | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kalaburagi with same-day delivery. Roses, marigolds & bouquets to Super Market, Station Road, New Town & all areas. From ₹399.",
    h1: "Flower Delivery in Kalaburagi",
    metaKeyword: "flower delivery in Kalaburagi Gulbarga, online flower delivery Kalaburagi, same day flower delivery Kalaburagi, florist Kalaburagi Karnataka",
    footerContent: `<h2>Flower Delivery in Kalaburagi — The Historical City of the Deccan Bidar Sultanate</h2>
<p>Kalaburagi (officially renamed from Gulbarga in 2014) is the largest city in North Karnataka and the headquarters of the Kalaburagi Division. The Gulbarga Sharif dargah — the tomb of the Sufi saint Hazrat Banda Nawaz Gesudaraz (1321–1422), one of the most revered Sufi saints in the Deccan — is Kalaburagi's most visited site and draws Muslim pilgrims from across South India. The Gulbarga Fort (built in the 14th century by Alauddin Hasan Bahmani, the founder of the Bahmani Sultanate) and the Jama Masjid inside it (modelled on the Great Mosque of Cordoba, Spain, and unique in India for its dome-covered courtyard) are architectural masterpieces. Kalaburagi is the commercial hub for a significant agricultural region producing pulses, jowar, and cotton. RedHeart delivers fresh flowers across Kalaburagi with same-day and midnight delivery, starting at ₹399.</p>
<p>Super Market and Station Road are the commercial hubs. New Town is the modern residential area. The Urs of Hazrat Banda Nawaz is Kalaburagi's most significant spiritual occasion, drawing enormous rose petal offerings.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalaburagi, Karnataka</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Super Market, Station Road, New Town, Dargah area, Sedam Road, Bhalki Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kalaburagi?", answer: "Yes, RedHeart delivers same-day to Super Market, Station Road, Dargah area, and all major Kalaburagi areas." },
      { question: "Does RedHeart deliver Banda Nawaz Dargah rose petals in Kalaburagi?", answer: "Yes! RedHeart delivers fresh rose petals and garlands for Banda Nawaz Dargah offerings across Kalaburagi." },
      { question: "Is midnight delivery available in Kalaburagi?", answer: "Yes, midnight delivery is available across Kalaburagi." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers", cityName: data.cityName, slug, url: cityUrl,
      metaTitle: data.metaTitle, metaDescription: data.metaDescription,
      h1: data.h1, canonicalUrl: `${BASE_URL}${cityUrl}`,
      metaKeyword: data.metaKeyword,
      breadcrumb: [
        { label: "Home", url: "/" }, { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
      ],
      footerContent: data.footerContent.trim(), faqs: data.faqs, isActive: true,
    };
    const res = await fetch(`${API_BASE}/city/upsert`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) console.error(`❌  ${data.cityName} — ${res.status}`, json);
    else console.log(`✅  ${data.cityName} — ${json._id}`);
  }
  console.log("\nDone — batch 18 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
