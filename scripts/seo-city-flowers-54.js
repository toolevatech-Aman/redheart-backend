// Batch 54 — 15 cities:
// Gujarat: Kheda, Patan, Valsad, Navsari
// Rajasthan: Nagaur, Hanumangarh, Sawai Madhopur
// MP: Sagar, Rewa, Satna
// Chhattisgarh: Bhilai (Durg), Jagdalpur (Bastar)
// Uttarakhand: Haridwar, Roorkee, Rishikesh

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "kheda": {
    cityName: "Kheda",
    metaTitle: "Flower Delivery in Kheda | Sardar Patel Gujarat | RedHeart",
    metaDescription: "Order flowers in Kheda (Nadiad), Gujarat. Same-day delivery near Sardar Patel's Karamsad & across Kheda. From ₹399.",
    h1: "Online Flower Delivery in Kheda",
    metaKeyword: "flower delivery kheda, online flowers nadiad kheda gujarat, florist kheda, flowers kheda sardar patel nadiad karamsad charotar cooperative amul tobacco",
    footerContent: `
<h2>Flower Delivery in Kheda — Sardar Patel's Birthplace and the Charotar Cooperative Movement's Cradle</h2>
<p>Kheda (Kaira), in the Charotar region of central Gujarat, is the headquarters of Kheda district — one of India's most historically significant districts for both the independence movement and modern cooperative economics. Karamsad (in Kheda district) is the birthplace of Sardar Vallabhbhai Patel — India's "Iron Man," the Deputy Prime Minister and Home Minister who unified 562 princely states into the Indian Union through iron diplomacy (and whose tribute is the Statue of Unity in Narmada). The Kheda Satyagraha (1918) — led by Gandhi, in response to heavy taxation on plague-stricken farmers — was one of Gandhi's earliest successful non-cooperation campaigns and established the template for the subsequent Non-Cooperation Movement. Kheda district was also the birthplace of the cooperative milk movement — the Kaira District Cooperative Milk Producers Union (later AMUL) was founded at Anand (adjacent to Kheda).</p>
<p>RedHeart delivers flowers across Kheda — Nadiad Main Market, Karamsad area, Anand Road, Kathlal area, Mehmedabad area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kheda (Nadiad), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nadiad, Karamsad, Anand Road, Kathlal, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for Navratri in Kheda?", answer: "Yes, Navratri Garba is one of the biggest celebrations in Kheda (Charotar Gujarat). Marigold garlands and festive flower arrangements for the 9-night Garba are available." },
      { question: "Can I get birthday flowers in Kheda?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kheda (Nadiad) for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Kheda?", answer: "Yes, same-day delivery is available across Kheda for orders placed before 3 PM." }
    ]
  },

  "patan": {
    cityName: "Patan",
    metaTitle: "Flower Delivery in Patan | Rani-ki-Vav UNESCO Gujarat | RedHeart",
    metaDescription: "Order flowers in Patan, Gujarat. Same-day delivery near Rani-ki-Vav UNESCO stepwell & across Patan. From ₹399.",
    h1: "Online Flower Delivery in Patan",
    metaKeyword: "flower delivery patan, online flowers patan gujarat, florist patan, flowers patan rani ki vav unesco stepwell patola silk saraswati river solanki dynasty",
    footerContent: `
<h2>Flower Delivery in Patan — Rani-ki-Vav's UNESCO Glory and the Patola Silk Weaving Heritage</h2>
<p>Patan, in North Gujarat on the dry bed of the ancient Saraswati River, is the headquarters of Patan district — one of Gujarat's most historically and archaeologically significant cities, and the former medieval capital of the Solanki (Chaulukya) dynasty. The Rani-ki-Vav (Queen's Stepwell) — built by Queen Udayamati in memory of King Bhimdev I around 1063 CE — is a UNESCO World Heritage Site and one of India's finest and most elaborate stepwells, with thousands of sculptures of Vishnu, Parvati, apsaras, and mythological figures in seven descending levels. Patan is also the sole remaining centre of Patola silk weaving — the double ikat silk technique where both warp and weft threads are pre-dyed before weaving, creating mirror-perfect geometric and floral patterns. A single Patola sari can take 6 months to make and costs ₹1-5 lakh. The Sahastralinga Talav reservoir (1,000 Shiva lingams submerged in the tank) is another heritage treasure.</p>
<p>RedHeart delivers flowers across Patan — Main Market, Rani-ki-Vav area, Mehsana Road, Sidhpur area, Harij area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patan, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Rani-ki-Vav area, Mehsana Road, Sidhpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Rani-ki-Vav heritage visit in Patan?", answer: "Yes, the Rani-ki-Vav (UNESCO World Heritage stepwell, one of India's finest monuments) is Patan's crown jewel. Seasonal bouquets for heritage visits and cultural events are available." },
      { question: "Can I get birthday flowers in Patan?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Patan for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Patan?", answer: "Yes, same-day delivery is available across Patan for orders placed before 3 PM." }
    ]
  },

  "valsad": {
    cityName: "Valsad",
    metaTitle: "Flower Delivery in Valsad | Daman Ganga Coastal Gujarat | RedHeart",
    metaDescription: "Order flowers in Valsad, Gujarat. Same-day delivery near Daman & across Valsad. From ₹399.",
    h1: "Online Flower Delivery in Valsad",
    metaKeyword: "flower delivery valsad, online flowers valsad gujarat, florist valsad, flowers valsad daman ganga coastal south gujarat parsi bulsar mango chickoo alphonso",
    footerContent: `
<h2>Flower Delivery in Valsad — Chickoo Country, Parsi Heritage, and the Arabian Sea's Mango Coast</h2>
<p>Valsad (formerly Bulsar), on the Arabian Sea coast of south Gujarat near Daman and Maharashtra, is the headquarters of Valsad district — a coastal district of extraordinary cultural, horticultural, and heritage richness. Valsad is famous as the centre of India's chickoo (sapodilla) cultivation — the Valsad-Navsari belt grows India's finest chickoos, and the crop is so central to local identity that the airport nearest to Valsad (Surat airport) exports chickoos nationally. The district has a significant Parsi (Zoroastrian) community — the Parsis who fled Persia in the 8th-10th centuries landed first on the south Gujarat coast and settled across this region. Alphonso mangoes from the Valsad-Dahanu belt are prized for their coastal-influenced microclimate sweetness. The Tithal Beach (Valsad town's beach) and the Daman Ganga River are scenic assets.</p>
<p>RedHeart delivers flowers across Valsad — Main Market, Tithal Beach area, Daman Road, Umbergaon area, Dharampur area, and Station Road. Our range includes roses, marigolds, tropical flowers, and seasonal Gujarat coastal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Valsad, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tithal Beach, Daman Road, Umbergaon, Dharampur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tropical flowers, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get anniversary flowers for a Valsad coastal stay?", answer: "Yes, Valsad's Tithal Beach and Arabian Sea coastline make it a romantic getaway. Anniversary rose bouquets and tropical flower arrangements for Valsad's beaches are available." },
      { question: "Are tropical flowers available in Valsad?", answer: "Yes, Valsad's coastal humid microclimate supports tropical flowers. Exotic bouquets and seasonal tropical arrangements are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Valsad?", answer: "Yes, same-day delivery is available across Valsad for orders placed before 3 PM." }
    ]
  },

  "navsari": {
    cityName: "Navsari",
    metaTitle: "Flower Delivery in Navsari | Parsi Capital Gujarat | RedHeart",
    metaDescription: "Order flowers in Navsari, Gujarat. Same-day delivery near Parsi heritage & across Navsari. From ₹399.",
    h1: "Online Flower Delivery in Navsari",
    metaKeyword: "flower delivery navsari, online flowers navsari gujarat, florist navsari, flowers navsari parsi zoroastrian dadabhai naoroji dadiseth atash behram fire temple",
    footerContent: `
<h2>Flower Delivery in Navsari — The Parsi Capital of Gujarat and Dadabhai Naoroji's Ancestral Home</h2>
<p>Navsari, in south Gujarat near Surat, is the headquarters of Navsari district — the historic capital of Parsi (Zoroastrian) cultural life in India. The Parsis who fled Persia settled first in Sanjaan (near Navsari coast) in the 8th century, and Navsari became the seat of the head Dastur (high priest) of the Parsi community for over a millennium. The Dadiseth Atash Behram (one of only 8 Atash Behrams — the highest grade of sacred Zoroastrian fire temples — in the world) at Navsari contains a fire that has reportedly been burning continuously for 1,000+ years. Dadabhai Naoroji — India's Grand Old Man, the first Indian MP in the British Parliament, who coined the "Drain Theory" of British economic exploitation of India — was born in Navsari. The Navsari Agricultural University and the Navsari town's Desai Haveli are heritage landmarks.</p>
<p>RedHeart delivers flowers across Navsari — Main Market, Atash Behram area, Surat Road, Gandevi area, Chikhli area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navsari, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Atash Behram area, Surat Road, Gandevi, Chikhli, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Nowruz (Parsi New Year) available in Navsari?", answer: "Yes, Nowruz (Parsi New Year) is celebrated with great importance in Navsari, the Parsi cultural capital. White and pink rose bouquets and Nowruz floral arrangements are available for same-day delivery." },
      { question: "Can I get birthday flowers in Navsari?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Navsari for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Navsari?", answer: "Yes, same-day delivery is available across Navsari for orders placed before 3 PM." }
    ]
  },

  "nagaur": {
    cityName: "Nagaur",
    metaTitle: "Flower Delivery in Nagaur | Cattle Fair Rajasthan | RedHeart",
    metaDescription: "Order flowers in Nagaur, Rajasthan. Same-day delivery near Nagaur Fort & across Nagaur. From ₹399.",
    h1: "Online Flower Delivery in Nagaur",
    metaKeyword: "flower delivery nagaur, online flowers nagaur rajasthan, florist nagaur, flowers nagaur cattle fair fort akbar mertia rajput camel fair livestock lohia",
    footerContent: `
<h2>Flower Delivery in Nagaur — India's Second-Largest Cattle Fair and the Akbar-Era Nagaur Fort</h2>
<p>Nagaur, in central Rajasthan between Jodhpur and Bikaner, is the headquarters of Nagaur district — a district of ancient history, remarkable fairs, and the distinctive Marwar desert culture. The Nagaur Cattle Fair (held annually in January-February) is India's second-largest cattle, camel, and horse fair after Pushkar — drawing 100,000+ animals and traders from across Rajasthan, Haryana, and Sindh for a week of commerce, folk music, folk dance, and traditional livestock trading. The Nagaur Fort — one of Rajasthan's best-preserved desert fortresses — was a major Mughal seat (Akbar built a mosque inside the fort and held court there), and the fort now hosts the Nagaur Festival (a cultural event on the fort ramparts). The town is also associated with the Sufi saint Dargah of Taragarh (Ajmer's famous Hazrat Moinuddin Chishti's connection passes through Nagaur's Sufi network).</p>
<p>RedHeart delivers flowers across Nagaur — Main Market, Fort area, Merta area, Ladnun area, Jayal area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Fort area, Merta, Ladnun, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Nagaur Cattle Fair festival available?", answer: "Yes, the Nagaur Cattle Fair (India's second-largest, in January-February) is Nagaur's biggest event. Marigold garlands and festival flower sets for the fair season are available." },
      { question: "Can I get birthday flowers in Nagaur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nagaur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Nagaur?", answer: "Yes, same-day delivery is available across Nagaur for orders placed before 3 PM." }
    ]
  },

  "hanumangarh": {
    cityName: "Hanumangarh",
    metaTitle: "Flower Delivery in Hanumangarh | Kalibangan Indus Valley Rajasthan | RedHeart",
    metaDescription: "Order flowers in Hanumangarh, Rajasthan. Same-day delivery near Kalibangan & across Hanumangarh. From ₹399.",
    h1: "Online Flower Delivery in Hanumangarh",
    metaKeyword: "flower delivery hanumangarh, online flowers hanumangarh rajasthan, florist hanumangarh, flowers hanumangarh kalibangan indus valley ghaggar river wheat canal irrigation",
    footerContent: `
<h2>Flower Delivery in Hanumangarh — Kalibangan's Indus Valley Ploughed Fields and the Ghaggar's Lost Saraswati</h2>
<p>Hanumangarh, in northwestern Rajasthan near Punjab and Haryana borders on the Ghaggar River, is the headquarters of Hanumangarh district — a district of the ancient Vedic heartland where the lost Saraswati River is believed to have flowed. Kalibangan (in Hanumangarh district) is one of the most significant Indus Valley Civilization sites in India — it has the world's oldest known ploughed agricultural field (7th millennium BCE), which predates the mature Harappan civilization, and an important Harappan city (3rd millennium BCE) with dual mounds (citadel and lower city). The Ghaggar River (identified by many scholars as the remnant channel of the Vedic Saraswati River, which dried up around 1900 BCE due to tectonic events) runs through the district. Hanumangarh district is a major wheat and mustard growing district in the Indira Gandhi Canal irrigation zone.</p>
<p>RedHeart delivers flowers across Hanumangarh — Main Market, Junction area, Pilibanga area, Nohar area, Sangaria area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanumangarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Junction area, Pilibanga, Nohar, Sangaria, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Hanumangarh?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Hanumangarh for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Hanumangarh?", answer: "Yes, marigold garlands and Diwali puja flower sets are available for same-day delivery in Hanumangarh." },
      { question: "Do you deliver flowers same day in Hanumangarh?", answer: "Yes, same-day delivery is available across Hanumangarh for orders placed before 3 PM." }
    ]
  },

  "sawai-madhopur": {
    cityName: "Sawai Madhopur",
    metaTitle: "Flower Delivery in Sawai Madhopur | Ranthambore Rajasthan | RedHeart",
    metaDescription: "Order flowers in Sawai Madhopur, Rajasthan. Same-day delivery near Ranthambore Tiger Reserve & across Sawai Madhopur. From ₹399.",
    h1: "Online Flower Delivery in Sawai Madhopur",
    metaKeyword: "flower delivery sawai madhopur, online flowers sawai madhopur rajasthan, florist sawai madhopur, flowers sawai madhopur ranthambore tiger reserve fort ganesh temple",
    footerContent: `
<h2>Flower Delivery in Sawai Madhopur — Ranthambore's Bengal Tigers and the Trinetradhari Ganesh Temple</h2>
<p>Sawai Madhopur, in eastern Rajasthan on the Banas River, is the headquarters of Sawai Madhopur district — synonymous worldwide with the Ranthambore Tiger Reserve, one of India's most famous and most photogenic tiger reserves. Ranthambore (part of Project Tiger since 1973) is exceptional for daytime tiger sightings — tigers are frequently seen around Ranthambore Fort (a 10th century Chahamana dynasty fort that stands inside the tiger reserve, making it the world's only tiger reserve with an ancient fort inside — and containing the famous Trinetradhari Ganesh temple at the fort's base, which draws pilgrims even through tiger territory). The tigers of Ranthambore have been individually named and photographed for decades (the legendary tigress Machali was one of India's most documented tigers). The fort is a UNESCO World Heritage Site (part of Rajasthan's Hill Forts).</p>
<p>RedHeart delivers flowers across Sawai Madhopur — Main Market, Ranthambore Road, Fort area, Karauli Road, Gangapur City area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sawai Madhopur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranthambore Road, Fort area, Gangapur City, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Ganesh puja flowers, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Ranthambore tiger safari stay from Sawai Madhopur?", answer: "Yes, Ranthambore's luxury jungle lodges (Aman-i-Khas, Oberoi Vanyavilas, etc.) are near Sawai Madhopur. Rose bouquets and romantic jungle resort arrangements can be delivered." },
      { question: "Are Ganesh puja flowers for the Ranthambore Fort Trinetradhari temple available?", answer: "Yes, the Trinetradhari Ganesh temple at Ranthambore Fort draws pilgrims even through tiger country. Marigold and Ganesh puja sets for the temple are available from Sawai Madhopur." },
      { question: "Do you deliver flowers same day in Sawai Madhopur?", answer: "Yes, same-day delivery is available across Sawai Madhopur for orders placed before 3 PM." }
    ]
  },

  "sagar": {
    cityName: "Sagar",
    metaTitle: "Flower Delivery in Sagar | Bundelkhand Madhya Pradesh | RedHeart",
    metaDescription: "Order flowers in Sagar, MP. Same-day delivery near Dr. Hari Singh Gour University & across Sagar. From ₹399.",
    h1: "Online Flower Delivery in Sagar",
    metaKeyword: "flower delivery sagar, online flowers sagar madhya pradesh, florist sagar, flowers sagar dr hari singh gour university bundelkhand sagar lake paharia hill",
    footerContent: `
<h2>Flower Delivery in Sagar — Dr. Hari Singh Gour University and the Bundelkhand Plateau's Granite City</h2>
<p>Sagar, in central Madhya Pradesh on the Bundelkhand Plateau, is the headquarters of Sagar district — one of MP's most significant educational and administrative cities. Sagar is home to Dr. Hari Singh Gour University (formerly Sagar University) — named after Sir Hari Singh Gour, a prominent barrister, education reformer, and politician who donated his own wealth to found a university for Bundelkhand's development; it is one of MP's oldest central universities. The Sagar Lake (Lakhna Talaab) at the centre of the city, built by Umarrao Singh Bundela, gives the city its name and serves as both a reservoir and a social and cultural hub. The Paharia hills overlooking Sagar offer panoramic views. Sagar district grows wheat and soya in the black cotton soil belt.</p>
<p>RedHeart delivers flowers across Sagar — Main Market, University area, Sagar Lake area, Bhopal Road, Garhakota area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sagar, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, University area, Sagar Lake, Bhopal Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a convocation at Hari Singh Gour University in Sagar?", answer: "Yes, convocation and academic ceremonies at Dr. Hari Singh Gour University (Sagar University) are important events. Rose bouquets and congratulation arrangements are available for same-day delivery." },
      { question: "Can I get birthday flowers in Sagar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sagar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sagar?", answer: "Yes, same-day delivery is available across Sagar for orders placed before 3 PM." }
    ]
  },

  "rewa": {
    cityName: "Rewa",
    metaTitle: "Flower Delivery in Rewa | White Tiger Madhya Pradesh | RedHeart",
    metaDescription: "Order flowers in Rewa, MP. Same-day delivery near Govindgarh Palace & across Rewa. From ₹399.",
    h1: "Online Flower Delivery in Rewa",
    metaKeyword: "flower delivery rewa, online flowers rewa madhya pradesh, florist rewa, flowers rewa white tiger maharaja govindgarh palace baghelkhand vindhya son river hydro",
    footerContent: `
<h2>Flower Delivery in Rewa — Birthplace of the White Tiger and Baghelkhand's Royal Heritage</h2>
<p>Rewa, in northeastern Madhya Pradesh on the Vindhya Plateau near UP, is the headquarters of Rewa district — a district of royal heritage, remarkable wildlife history, and the Vindhya-Son River industrial belt. Rewa is the birthplace of the White Tiger — the first white Bengal tiger ever documented and captured alive was "Mohan," caught in 1951 from Rewa's Govindgarh forests by Maharaja Martand Singh. All white tigers in zoos worldwide today are descendants of Mohan. The Govindgarh Palace (and later Rewa Fort) was the seat of the Baghela (Baghelkhand) Rajput dynasty. Rewa is famous for the Bansagar Dam project on the Son River — one of MP's largest irrigation and hydroelectric projects. The district also has the Vatan Vindhya Corridor and multiple waterfalls (Bahuti, Pindra — among MP's most beautiful cascades).</p>
<p>RedHeart delivers flowers across Rewa — Main Market, Govindgarh area, Allahabad Road, Sidhi Road, Satna Road, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewa, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Govindgarh area, Allahabad Road, Sidhi Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Rewa?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Rewa for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Rewa?", answer: "Yes, Diwali marigold garlands and puja flower sets are available for same-day delivery in Rewa." },
      { question: "Do you deliver flowers same day in Rewa?", answer: "Yes, same-day delivery is available across Rewa for orders placed before 3 PM." }
    ]
  },

  "satna": {
    cityName: "Satna",
    metaTitle: "Flower Delivery in Satna | Cement City Madhya Pradesh | RedHeart",
    metaDescription: "Order flowers in Satna, MP. Same-day delivery near Maihar Devi & across Satna. From ₹399.",
    h1: "Online Flower Delivery in Satna",
    metaKeyword: "flower delivery satna, online flowers satna madhya pradesh, florist satna, flowers satna maihar sharda devi limestone cement mp bundelkhand khajuraho",
    footerContent: `
<h2>Flower Delivery in Satna — Maihar's Sharda Devi Blessing and India's Cement Capital</h2>
<p>Satna, in northeastern Madhya Pradesh near the Vindhya hills and UP border, is the headquarters of Satna district — India's most important district for cement production, and a significant religious and commercial hub of Bundelkhand. The Maihar Devi temple (on the Trikuta hill at Maihar, Satna district) — dedicated to Goddess Sharda (the goddess of learning and arts) — is one of MP's most visited Shakti shrines, famous as the inspiration for the legendary musician Alauddin Khan (Maihar Gharana founder, guru of Ravi Shankar) who played at the temple steps nightly for decades. The Maihar Gharana (school of classical Hindustani music) is one of India's most significant musical lineages. Satna's limestone-rich geology underlies the major ACC, Ultra, Birla White, and other cement plants. Khajuraho (UNESCO World Heritage temples) is close to Satna.</p>
<p>RedHeart delivers flowers across Satna — Main Market, Maihar area, Rewa Road, Panna Road, Chitrakoot area, and Station Road. Our range includes roses, marigolds, Devi puja flowers, and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Satna, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Maihar area, Rewa Road, Panna Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, Sharda Devi puja sets, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Maihar Sharda Devi Navratri available from Satna?", answer: "Yes, the Maihar Devi temple Navratri (in Satna district) is one of MP's biggest Shakti pilgrimages. Marigold garlands and Devi puja sets for Maihar are available from Satna." },
      { question: "Can I get birthday flowers in Satna?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Satna for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Satna?", answer: "Yes, same-day delivery is available across Satna for orders placed before 3 PM." }
    ]
  },

  "bhilai": {
    cityName: "Bhilai",
    metaTitle: "Flower Delivery in Bhilai | Steel City Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Bhilai, Chhattisgarh. Same-day delivery near Bhilai Steel Plant & across Bhilai. From ₹399.",
    h1: "Online Flower Delivery in Bhilai",
    metaKeyword: "flower delivery bhilai, online flowers bhilai chhattisgarh, florist bhilai, flowers bhilai steel plant durg sector townships utsav charoda raipur nehruvian",
    footerContent: `
<h2>Flower Delivery in Bhilai — India's Nehruvian Steel Dream and the Planned Township City</h2>
<p>Bhilai, in the Durg district of Chhattisgarh (closely associated with Durg city), is one of India's most iconic industrial cities — the site of the Bhilai Steel Plant (BSP), the first integrated steel plant of modern India, built with Soviet technical assistance in 1959 as a symbol of Nehruvian socialism, heavy industry, and Indo-Soviet friendship. The Bhilai-Durg urban agglomeration is Chhattisgarh's second-largest city. Bhilai's township character is distinctive — the plant was built along with fully planned residential sectors, social infrastructure (hospitals, schools, clubs), and green zones, creating a pioneering model of industrial town planning. The Maitri Bagh (Friendship Garden) — gifted by the Soviet Union as a gesture of Indo-Soviet cooperation — is Bhilai's most-loved public garden, with a zoo and lake. The city has a multicultural character from all over India who came to work in the steel plant.</p>
<p>RedHeart delivers flowers across Bhilai — Sector areas, Maitri Bagh, Supela area, Charoda area, Risali area, and Durg-Bhilai Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhilai, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector areas, Maitri Bagh, Supela, Charoda, Risali, Durg Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers delivered to Bhilai Steel Plant townships?", answer: "Yes, the Bhilai Steel Plant township sectors have residential areas. Birthday roses and celebration bouquets for all township sectors are available for same-day delivery." },
      { question: "Are flowers for Diwali available in Bhilai?", answer: "Yes, Diwali is widely celebrated across Bhilai's multicultural township communities. Marigold garlands and Diwali puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Bhilai?", answer: "Yes, same-day delivery is available across Bhilai for orders placed before 3 PM." }
    ]
  },

  "jagdalpur": {
    cityName: "Jagdalpur",
    metaTitle: "Flower Delivery in Jagdalpur | Bastar Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Jagdalpur (Bastar), Chhattisgarh. Same-day delivery near Chitrakote Falls & across Jagdalpur. From ₹399.",
    h1: "Online Flower Delivery in Jagdalpur",
    metaKeyword: "flower delivery jagdalpur, online flowers jagdalpur bastar chhattisgarh, florist jagdalpur, flowers jagdalpur chitrakote falls bastar dussehra tribal gond maria muria",
    footerContent: `
<h2>Flower Delivery in Jagdalpur — Bastar's Iconic Dussehra Festival and Chitrakote's Niagara of India</h2>
<p>Jagdalpur, the capital of the Bastar division in southern Chhattisgarh, is the headquarters of Bastar district — one of India's most culturally distinctive and ecologically rich tribal regions. The Bastar Dussehra (held over 75 days from Shravan to Diwali months) — India's longest and most unique Dussehra celebration — is not the conventional Rama-Ravana narrative but a tribal goddess (Danteshwari Mata) procession where the Bastar tribals (Gond, Maria, Muria communities) participate in ancient rituals predating Hinduism. The Chitrakote Falls on the Indravati River — a wide horseshoe waterfall, nicknamed the "Niagara of India" — is the widest waterfall in India. The Indravati Tiger Reserve and the Kanger Valley National Park (with Kotumsar Cave — India's deepest cave) are extraordinary natural heritage sites.</p>
<p>RedHeart delivers flowers across Jagdalpur — Main Market, Danteshwari temple area, Chitrakote Road, Narayanpal area, Tokapal area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagdalpur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Danteshwari area, Chitrakote Road, Narayanpal, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, Danteshwari Devi flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Bastar Dussehra (75-day festival) available in Jagdalpur?", answer: "Yes, the Bastar Dussehra (India's longest and most unique Dussehra, honoring Danteshwari Mata) spans 75 days in Jagdalpur. Marigold garlands and Devi puja flowers for the festival are available." },
      { question: "Can I get flowers for the Danteshwari temple Navratri available in Jagdalpur?", answer: "Yes, the Danteshwari Mata temple (Bastar's most sacred Shakti shrine, located at Dantewada near Jagdalpur) draws massive Navratri pilgrimages. Puja sets and marigold arrangements are available." },
      { question: "Do you deliver flowers same day in Jagdalpur?", answer: "Yes, same-day delivery is available across Jagdalpur for orders placed before 3 PM." }
    ]
  },

  "haridwar": {
    cityName: "Haridwar",
    metaTitle: "Flower Delivery in Haridwar | Ganga Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Haridwar, Uttarakhand. Same-day delivery near Har ki Pauri & across Haridwar. From ₹399.",
    h1: "Online Flower Delivery in Haridwar",
    metaKeyword: "flower delivery haridwar, online flowers haridwar uttarakhand, florist haridwar, flowers haridwar ganga har ki pauri kumbh mela rishikesh aarti marigold lotus",
    footerContent: `
<h2>Flower Delivery in Haridwar — Ganga's Sacred Portal and the Kumbh Mela's Divine City</h2>
<p>Haridwar ("Gateway to God"), where the Ganga exits the Shivalik Hills and enters the plains of Uttarakhand-UP, is one of the seven holiest cities of Hinduism and one of India's most visited pilgrimage destinations. The Har ki Pauri Ghat (the footstep of Vishnu, where the Ganga first touches the plain) — with its nightly Ganga Aarti (a mass prayer ceremony with floating diyas, incense, and the ringing of temple bells, conducted by priests in synchronised rituals) — is one of India's most transcendent ritual experiences. Haridwar hosts the Kumbh Mela every 12 years (and Ardh-Kumbh every 6 years) — the world's largest human gathering (the 2019 Ardh Kumbh drew 250 million people in 49 days). The Mansa Devi temple (atop Bilwa Parvat) and the Chandi Devi temple are important Shakti sites.</p>
<p>RedHeart delivers flowers across Haridwar — Har ki Pauri area, Upper Road, Rishikesh Road, Jwalapur area, Roorkee Road, and Station Road. Our range includes roses, marigolds, lotus, jasmine, Ganga puja flowers, and seasonal Uttarakhand bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haridwar, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Har ki Pauri, Upper Road, Rishikesh Road, Jwalapur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, jasmine, roses, Ganga aarti puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are lotus and Ganga aarti puja flowers available in Haridwar?", answer: "Yes, Haridwar's Ganga aarti (nightly at Har ki Pauri) is one of India's most sacred rituals. Lotus, marigold garlands, and Ganga aarti puja sets are available for same-day delivery." },
      { question: "Are marigold garlands and puja sets for Kumbh Mela available in Haridwar?", answer: "Yes, marigold garlands, flower baskets, and complete pilgrimage puja sets for the Kumbh Mela and Ardh Kumbh pilgrimages are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Haridwar?", answer: "Yes, same-day delivery is available across Haridwar for orders placed before 3 PM." }
    ]
  },

  "rishikesh": {
    cityName: "Rishikesh",
    metaTitle: "Flower Delivery in Rishikesh | Yoga Capital Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Rishikesh, Uttarakhand. Same-day delivery near Laxman Jhula & across Rishikesh. From ₹399.",
    h1: "Online Flower Delivery in Rishikesh",
    metaKeyword: "flower delivery rishikesh, online flowers rishikesh uttarakhand, florist rishikesh, flowers rishikesh yoga capital ganga laxman jhula parmarth niketan beatles ashram",
    footerContent: `
<h2>Flower Delivery in Rishikesh — Yoga Capital of the World and the Ganga's Himalayan Gateway</h2>
<p>Rishikesh, where the Ganga emerges from the Himalayan gorges into the foothills of Uttarakhand, is revered as the "Yoga Capital of the World" — the global headquarters of yoga, meditation, Ayurveda, and spiritual tourism. The International Yoga Festival (held every February at Parmarth Niketan, drawing teachers and practitioners from 100+ countries) and the city's hundreds of ashrams (including the Maharishi Mahesh Yogi Ashram where the Beatles stayed in 1968 — now the "Beatles Ashram" open to visitors) have made Rishikesh synonymous with spiritual transformation. The Laxman Jhula and Ram Jhula (suspension bridges across the Ganga) are iconic landmarks. Rishikesh is also the gateway to the Char Dham pilgrimage (Yamunotri, Gangotri, Kedarnath, Badrinath) and an adventure sports capital (white-water rafting on the Ganga).</p>
<p>RedHeart delivers flowers across Rishikesh — Laxman Jhula area, Ram Jhula area, Tapovan area, Muni ki Reti area, Haridwar Road, and Parmarth Niketan area. Our range includes roses, lotus, marigolds, jasmine, and seasonal Uttarakhand bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rishikesh, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Laxman Jhula, Ram Jhula, Tapovan, Muni ki Reti, Parmarth Niketan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, jasmine, roses, Ganga puja flower sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for yoga festival events at Parmarth Niketan available in Rishikesh?", answer: "Yes, the Parmarth Niketan International Yoga Festival (February) and other spiritual events in Rishikesh are important occasions. Marigold and spiritual puja flower arrangements for ashram events are available." },
      { question: "Are Ganga puja and aarti flowers available in Rishikesh?", answer: "Yes, the Ganga aarti at Triveni Ghat and Parmarth Niketan are Rishikesh's sacred daily rituals. Lotus, marigold garlands, and Ganga aarti sets for the ceremonies are available." },
      { question: "Do you deliver flowers same day in Rishikesh?", answer: "Yes, same-day delivery is available across Rishikesh for orders placed before 3 PM." }
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
