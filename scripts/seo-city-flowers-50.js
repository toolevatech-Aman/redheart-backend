// Batch 50 — 15 cities:
// Bihar: Jamui, Sheikhpura, Katihar
// AP: Alluri Sitharama Raju (Rampachodavaram), Sri Sathya Sai (Puttaparthi)
// Odisha: Sambalpur, Sundargarh, Koraput, Bolangir, Jharsuguda
// West Bengal: Purulia, Bankura, Birbhum, Malda, North Dinajpur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "jamui": {
    cityName: "Jamui",
    metaTitle: "Flower Delivery in Jamui | Jharkhand Border Bihar | RedHeart",
    metaDescription: "Order flowers in Jamui, Bihar. Same-day delivery near Gidhour Kiriburu border & across Jamui. From ₹399.",
    h1: "Online Flower Delivery in Jamui",
    metaKeyword: "flower delivery jamui, online flowers jamui bihar, florist jamui, flowers jamui gidhour malhar jain temple jharkhand mining bengal",
    footerContent: `
<h2>Flower Delivery in Jamui — Jain Heritage, Mahavira's Birthplace and the Jharkhand Border Hills</h2>
<p>Jamui, in eastern Bihar at the Jharkhand-West Bengal border, is the headquarters of Jamui district — a hilly district at the edge of the Chota Nagpur Plateau where Bihar meets Jharkhand. The district has extraordinary religious significance: Kundalpur (also called Kundalgram), in the Jamui district, is identified in the Jain tradition as the birthplace of Vardhamana Mahavira — the 24th and last Tirthankara of Jainism and the reformer of Jain philosophy (c. 599-527 BCE). The Kshatriyakund site and the Kundalpur pilgrimage complex draw Jain devotees year-round. The district also has the Gidhour Rajput fort heritage and rich mineral deposits (mica, copper). Jamui's hilly terrain is scenic with Jharkhand-style forested plateaus.</p>
<p>RedHeart delivers flowers across Jamui — Main Market, Kundalpur area, Bhagalpur Road, Jhajha area, Khaira area, and Station Road. Our range includes roses, marigolds, white Jain puja flowers, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamui, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kundalpur area, Bhagalpur Road, Jhajha, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">White marigolds, roses, Jain puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kundalpur Mahavira birthplace pilgrimage available in Jamui?", answer: "Yes, Kundalpur (Vardhamana Mahavira's birthplace) in Jamui district is a major Jain pilgrimage site. White flowers and marigolds for the Jain pilgrimage are available from Jamui." },
      { question: "Can I get birthday flowers in Jamui?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jamui for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Jamui?", answer: "Yes, same-day delivery is available across Jamui for orders placed before 3 PM." }
    ]
  },

  "sheikhpura": {
    cityName: "Sheikhpura",
    metaTitle: "Flower Delivery in Sheikhpura | Bihar | RedHeart",
    metaDescription: "Order flowers in Sheikhpura, Bihar. Same-day delivery across Sheikhpura district. From ₹399.",
    h1: "Online Flower Delivery in Sheikhpura",
    metaKeyword: "flower delivery sheikhpura, online flowers sheikhpura bihar, florist sheikhpura, flowers sheikhpura nalanda patna belt gaya nawada small district",
    footerContent: `
<h2>Flower Delivery in Sheikhpura — Bihar's Smallest District at the Ancient Nalanda-Gaya Corridor</h2>
<p>Sheikhpura, in central Bihar between Patna and Bhagalpur, is the headquarters of Sheikhpura district — one of Bihar's smallest districts (along with Sheohar), carved from Munger and Lakhisarai. The district is in the agricultural belt on the Ganga-Son interfluves connecting the ancient Nalanda (Buddhist university city) and Gaya (Buddhist and Hindu pilgrimage) corridor with Bhagalpur. The district name has historical associations with Sheikh communities (communities with Persian/Sufi connections) in the Mughal-era administrative settlements of central Bihar. The local economy is rice, maize, and vegetable farming. The district's proximity to Nalanda and Rajgir (Buddhist heritage sites about 40-60 km away) gives it tourism adjacency.</p>
<p>RedHeart delivers flowers across Sheikhpura — Main Market, Patna Road, Lakhisarai Road, Barbigha area, Ariari area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheikhpura, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Patna Road, Lakhisarai Road, Barbigha, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Sheikhpura?", answer: "Yes, Chhath Puja is celebrated in Sheikhpura's Bihar community. Lotus, marigold, and arghya sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Sheikhpura?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sheikhpura for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sheikhpura?", answer: "Yes, same-day delivery is available across Sheikhpura for orders placed before 3 PM." }
    ]
  },

  "katihar": {
    cityName: "Katihar",
    metaTitle: "Flower Delivery in Katihar | Bihar | RedHeart",
    metaDescription: "Order flowers in Katihar, Bihar. Same-day delivery near Mahananda River & across Katihar. From ₹399.",
    h1: "Online Flower Delivery in Katihar",
    metaKeyword: "flower delivery katihar, online flowers katihar bihar, florist katihar, flowers katihar mahananda ganga purnia jute tea belt northeast gateway",
    footerContent: `
<h2>Flower Delivery in Katihar — Mahananda River Junction and Bihar's Northeast Railway Hub</h2>
<p>Katihar, in the extreme northeast of Bihar near the West Bengal and Nepal borders, is the headquarters of Katihar district — a major railway junction and commercial town at the confluence of the Mahananda and Ganga rivers. Katihar railway junction is the gateway for trains from the Indian mainland to Northeast India (Assam, Meghalaya, etc.) via the Farakka Barrage route — a strategically important railway nexus. The district is in the fertile Ganga-Mahananda delta zone that produces jute, paddy, maize, and pineapple. The Katihar-Purnia-Kishanganj (Seemanchal) belt has a significant Muslim population and distinct Urdu-Maithili cultural identity. Tea cultivation begins in nearby Kishanganj district, and Katihar's Mahananda valley is the corridor to the tea gardens of Darjeeling and Assam.</p>
<p>RedHeart delivers flowers across Katihar — Main Market, Ganga Ghat, Purnia Road, Barari area, Manihari area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katihar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ganga Ghat, Purnia Road, Barari, Manihari, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Eid available in Katihar?", answer: "Yes, Katihar's Seemanchal region has a significant Muslim community. Rose garlands and festive bouquets for Eid celebrations are available in Katihar for same-day delivery." },
      { question: "Are flowers for Chhath Puja available in Katihar?", answer: "Yes, Chhath Puja on the Ganga and Mahananda ghats of Katihar is a major celebration. Lotus, marigold, and arghya sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Katihar?", answer: "Yes, same-day delivery is available across Katihar for orders placed before 3 PM." }
    ]
  },

  "alluri-sitharama-raju": {
    cityName: "Alluri Sitharama Raju",
    metaTitle: "Flower Delivery in Alluri Sitharama Raju | Tribal AP | RedHeart",
    metaDescription: "Order flowers in Alluri Sitharama Raju (Rampachodavaram), AP. Same-day delivery near Papikonda hills & across ASR. From ₹399.",
    h1: "Online Flower Delivery in Alluri Sitharama Raju",
    metaKeyword: "flower delivery alluri sitharama raju, online flowers rampachodavaram andhra pradesh, florist alluri district, flowers papikonda godavari tribal konda reddis agency",
    footerContent: `
<h2>Flower Delivery in Alluri Sitharama Raju — Papikonda Gorges and the Konda Reddi Tribal Heartland</h2>
<p>Alluri Sitharama Raju district (headquartered at Rampachodavaram), in the Eastern Ghats and Godavari hill country of Andhra Pradesh, is named after the legendary freedom fighter Alluri Sitarama Raju — the tribal revolutionary from the Manyam area who led the Rampa Rebellion (1922-24) against the British and the oppressive agency (the colonial reservation system restricting tribal lands), inspiring thousands of Konda Reddi and Koya tribal people to resist. The district encompasses the Papikonda National Park (the dramatic limestone gorges of the Godavari through which the river cuts through the Eastern Ghats in spectacular cliffs and waterfalls — a major eco-tourism site). The district also has extensive coffee, cashew, and piperine (pepper) cultivation by tribal communities.</p>
<p>RedHeart delivers flowers across Alluri Sitharama Raju — Rampachodavaram Main Market, Rajahmundry Road, Visakhapatnam Road, Chintapalli area, Paderu area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Andhra bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alluri Sitharama Raju (Rampachodavaram), AP</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rampachodavaram, Rajahmundry Road, Visakhapatnam Road, Paderu, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Andhra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for a Papikonda Godavari boat cruise from Alluri Sitharama Raju?", answer: "Yes, the Papikonda National Park's Godavari gorge boat trips are one of AP's top eco-tourism experiences. Flower bouquets for Godavari gorge stays and cruise gifts can be delivered in Rampachodavaram." },
      { question: "Are flowers for Ugadi available in Alluri Sitharama Raju?", answer: "Yes, Ugadi (Telugu New Year) bouquets and seasonal arrangements are available in Alluri Sitharama Raju district for same-day delivery." },
      { question: "Do you deliver flowers same day in Alluri Sitharama Raju?", answer: "Yes, same-day delivery is available across Alluri Sitharama Raju (Rampachodavaram) for orders placed before 3 PM." }
    ]
  },

  "sri-sathya-sai": {
    cityName: "Sri Sathya Sai",
    metaTitle: "Flower Delivery in Sri Sathya Sai | Puttaparthi AP | RedHeart",
    metaDescription: "Order flowers in Sri Sathya Sai (Puttaparthi), AP. Same-day delivery near Prasanthi Nilayam & across Sri Sathya Sai. From ₹399.",
    h1: "Online Flower Delivery in Sri Sathya Sai",
    metaKeyword: "flower delivery sri sathya sai, online flowers puttaparthi andhra pradesh, florist puttaparthi, flowers puttaparthi prasanthi nilayam sai baba pilgrimage anantapur",
    footerContent: `
<h2>Flower Delivery in Sri Sathya Sai — Prasanthi Nilayam's Global Pilgrimage in the Pennar Valley</h2>
<p>Sri Sathya Sai district (headquartered at Puttaparthi), in the Anantapur region of Andhra Pradesh on the Pennar River, is named after Sathya Sai Baba (1926-2011) — one of India's most globally recognised spiritual leaders of the 20th century, who was born in Puttaparthi and established the Prasanthi Nilayam ("Abode of Highest Peace") ashram there. The Prasanthi Nilayam ashram drew millions of followers from India and abroad during Sai Baba's lifetime and continues to receive thousands of pilgrims daily. The district (carved from Anantapur in 2022) has the Sri Sathya Sai Super Specialty Hospital (a massive charity hospital offering free treatment), the Sri Sathya Sai Institute of Higher Learning (a university), and sports and cultural facilities gifted by the Sai Trust. The area is in Andhra's arid Rayalaseema zone, where groundnut and cotton are cultivated.</p>
<p>RedHeart delivers flowers across Sri Sathya Sai — Puttaparthi Main Market, Prasanthi Nilayam area, Bengaluru Road, Kadiri area, Dharmavaram area, and Station Road. Our range includes roses, lotus, marigolds, and seasonal Andhra bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sri Sathya Sai (Puttaparthi), AP</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puttaparthi, Prasanthi Nilayam, Bengaluru Road, Kadiri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, roses, marigolds, spiritual puja flower sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Prasanthi Nilayam Sai Baba ashram available in Puttaparthi?", answer: "Yes, the Prasanthi Nilayam ashram (Sai Baba's ashram) is the spiritual heart of Puttaparthi. Lotus, marigold, and devotional flower sets for the ashram's puja and prayer spaces are available." },
      { question: "Are flowers for Sai Baba's birthday celebration (November 23) available in Sri Sathya Sai?", answer: "Yes, Sai Baba's birthday draws lakhs of devotees to Puttaparthi. Marigold garlands, rose bouquets, and festive arrangements for the celebration season are available." },
      { question: "Do you deliver flowers same day in Sri Sathya Sai?", answer: "Yes, same-day delivery is available across Sri Sathya Sai (Puttaparthi) for orders placed before 3 PM." }
    ]
  },

  "sambalpur": {
    cityName: "Sambalpur",
    metaTitle: "Flower Delivery in Sambalpur | Hirakud Dam Odisha | RedHeart",
    metaDescription: "Order flowers in Sambalpur, Odisha. Same-day delivery near Hirakud Dam & across Sambalpur. From ₹399.",
    h1: "Online Flower Delivery in Sambalpur",
    metaKeyword: "flower delivery sambalpur, online flowers sambalpur odisha, florist sambalpur, flowers sambalpur hirakud dam mahanadi sambalpuri saree folk dance odisha",
    footerContent: `
<h2>Flower Delivery in Sambalpur — Hirakud Dam's Reservoir City and the Sambalpuri Folk Heritage</h2>
<p>Sambalpur, on the Mahanadi River in western Odisha, is one of Odisha's most historically and culturally significant cities. The Hirakud Dam (completed 1957) — one of the world's longest earthen dams at 26 km, and India's first major post-independence multi-purpose river valley project — created the enormous Hirakud Reservoir (covering 744 sq km) that transformed western Odisha's irrigation, power, and flood control. Sambalpur is renowned as the home of Sambalpuri folk tradition — particularly the Sambalpuri saree (the ikkat-weave silk and cotton sarees with ikat tie-dye patterns, GI-tagged), the Sambalpuri folk song tradition (Jhumar dance), and the Dalkhai folk festival. The Samalai Devi temple (patroness of the Hirakud builders and the city's presiding deity) is the most important pilgrimage site.</p>
<p>RedHeart delivers flowers across Sambalpur — Main Market, Hirakud Dam area, Burla area, Temple area, Sundergarh Road, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sambalpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hirakud Dam area, Burla, Temple area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Nuakhai (Sambalpur harvest festival) available?", answer: "Yes, Nuakhai (the western Odisha harvest festival celebrating new rice, particular to the Sambalpur-Sundergarh belt) is celebrated in Sambalpur. Seasonal marigold and harvest flower arrangements are available." },
      { question: "Are flowers for Samalai Devi temple puja available in Sambalpur?", answer: "Yes, the Samalai Devi temple is Sambalpur's most important shrine. Marigold garlands and Devi puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Sambalpur?", answer: "Yes, same-day delivery is available across Sambalpur for orders placed before 3 PM." }
    ]
  },

  "sundargarh": {
    cityName: "Sundargarh",
    metaTitle: "Flower Delivery in Sundargarh | Tribal Steel Odisha | RedHeart",
    metaDescription: "Order flowers in Sundargarh, Odisha. Same-day delivery near Rourkela Steel Plant & across Sundargarh. From ₹399.",
    h1: "Online Flower Delivery in Sundargarh",
    metaKeyword: "flower delivery sundargarh, online flowers sundargarh odisha, florist sundargarh, flowers sundargarh rourkela steel plant tribal santhali ho jharkhand",
    footerContent: `
<h2>Flower Delivery in Sundargarh — Rourkela's Steel Valley and the Tribal-Industrial Transformation</h2>
<p>Sundargarh, in northern Odisha at the Jharkhand border, is the headquarters of Sundargarh district — a district transformed by the Rourkela Steel Plant (RSP), one of India's three original integrated steel plants set up in the 1950s with German collaboration under Nehru's first Five Year Plans. Rourkela (in Sundargarh) is Odisha's second city — a planned industrial township built around the steel plant with a cosmopolitan, multi-ethnic population that contrasts with the surrounding Munda, Ho, and Oraon tribal belt. The district has significant mineral deposits (iron ore, coal, limestone, chromite) in the northern hills. The Sundargarh-Keonjhar belt is one of Odisha's most mineral-rich zones. The NIT (National Institute of Technology) Rourkela is one of India's premier engineering institutes.</p>
<p>RedHeart delivers flowers across Sundargarh — Rourkela Main Market, Steel Township, Sambalpur Road, Jharkhand Road, Rajgangpur area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sundargarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rourkela, Steel Township, Sambalpur Road, Jharkhand Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Christmas available in Sundargarh?", answer: "Yes, the Sundargarh-Rourkela area has a significant Christian tribal community. Christmas roses, white lilies, and festive arrangements are available for same-day delivery." },
      { question: "Can I get birthday flowers in Rourkela (Sundargarh)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Rourkela for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sundargarh?", answer: "Yes, same-day delivery is available across Sundargarh (Rourkela) for orders placed before 3 PM." }
    ]
  },

  "koraput": {
    cityName: "Koraput",
    metaTitle: "Flower Delivery in Koraput | Tribal Odisha | RedHeart",
    metaDescription: "Order flowers in Koraput, Odisha. Same-day delivery near Jeypore & across Koraput. From ₹399.",
    h1: "Online Flower Delivery in Koraput",
    metaKeyword: "flower delivery koraput, online flowers koraput odisha, florist koraput, flowers koraput jeypore tribal kondh bonda apa khond odisha bauxite",
    footerContent: `
<h2>Flower Delivery in Koraput — Tribal Forest Heartland and the Kondh-Bonda Country of Southern Odisha</h2>
<p>Koraput, in the southern tip of Odisha near Andhra Pradesh and Chhattisgarh, is one of India's most spectacular tribal landscapes — a district of high Eastern Ghats forest, deep valleys, and ancient tribal communities. The district is home to many Particularly Vulnerable Tribal Groups (PVTGs), including the Bonda people (one of India's most isolated tribes, living in the Bonda Hills and maintaining a distinct way of life and body adornment culture), the Kondh (Khond) with their extraordinary traditions of face tattooing (Dongria Kondh in Niyamgiri Hills), the Gadaba, and the Koya. Niyamgiri Hills (site of the famous Vedanta bauxite mining controversy that the Kondh people successfully resisted) is in the Koraput-Kalahandi border area. Jeypore (the largest town in the district) was the capital of the Jeypore Estate princely state. The Saberi River and Machkund hydroelectric project are local landmarks.</p>
<p>RedHeart delivers flowers across Koraput — Main Market, Jeypore, Jagdalpur Road, Rayagada Road, Laxmipur area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koraput, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jeypore, Jagdalpur Road, Rayagada Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a tribal heritage tour stay from Koraput?", answer: "Yes, Koraput's Eastern Ghats tribal landscape draws ethno-cultural tourists and researchers. Flower bouquets for eco-lodge and heritage stay gifts can be delivered in Koraput." },
      { question: "Are flowers for Christmas available in Koraput?", answer: "Yes, Koraput has a significant Christian tribal community (evangelical churches are active in the Kondh areas). Christmas roses and white flower arrangements are available." },
      { question: "Do you deliver flowers same day in Koraput?", answer: "Yes, same-day delivery is available across Koraput for orders placed before 3 PM." }
    ]
  },

  "bolangir": {
    cityName: "Bolangir",
    metaTitle: "Flower Delivery in Bolangir | Odisha | RedHeart",
    metaDescription: "Order flowers in Bolangir, Odisha. Same-day delivery near Patnagarh & across Bolangir. From ₹399.",
    h1: "Online Flower Delivery in Bolangir",
    metaKeyword: "flower delivery bolangir, online flowers bolangir odisha, florist bolangir, flowers bolangir patnagarh kapilash tel river sambalpur southern odisha",
    footerContent: `
<h2>Flower Delivery in Bolangir — Tel River's Agricultural Plains at the Western Odisha Plateau</h2>
<p>Bolangir (also Balangir), in western Odisha, is the headquarters of Bolangir district — a district on the Tel River plains in the Mahanadi-Tel interfluve, known historically for its zamindari system (the Bolangir Sambalpur area was under Princely States rule under the Chauhan dynasty). The district is one of Odisha's most drought-prone regions (the Western Odisha drought belt) — the erratic rainfall and poor irrigation have led to large-scale seasonal migration of farm labourers (particularly brick kiln workers who migrate to brick kilns across Andhra Pradesh and Telangana). The Kapilash hill (with the ancient Kapilashnath Shiva temple, a major pilgrimage site), the Saintala and Titilagarh areas, and the Balangir-Patnagarh industrial area are important local centres. The Mahabir Mela (Hanuman Jayanti festival) is a major regional celebration.</p>
<p>RedHeart delivers flowers across Bolangir — Main Market, Patnagarh area, Sambalpur Road, Titilagarh area, Kantabanji area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bolangir, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Patnagarh, Sambalpur Road, Titilagarh, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Kapilashnath Shiva temple puja available in Bolangir?", answer: "Yes, the Kapilash hill Kapilashnath Shiva temple is the most important pilgrimage site in the Bolangir area. Marigold, bilva, and Shiva puja sets are available from Bolangir." },
      { question: "Can I get birthday flowers in Bolangir?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Bolangir for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Bolangir?", answer: "Yes, same-day delivery is available across Bolangir for orders placed before 3 PM." }
    ]
  },

  "jharsuguda": {
    cityName: "Jharsuguda",
    metaTitle: "Flower Delivery in Jharsuguda | Power City Odisha | RedHeart",
    metaDescription: "Order flowers in Jharsuguda, Odisha. Same-day delivery near Hirakud Dam & across Jharsuguda. From ₹399.",
    h1: "Online Flower Delivery in Jharsuguda",
    metaKeyword: "flower delivery jharsuguda, online flowers jharsuguda odisha, florist jharsuguda, flowers jharsuguda ib valley coal power plant mahanadi airport vedanta",
    footerContent: `
<h2>Flower Delivery in Jharsuguda — Odisha's Power Capital in the Ib Valley Coalfield</h2>
<p>Jharsuguda, in the Ib Valley of western Odisha, is the headquarters of Jharsuguda district — a small but industrially intensive district in the Mahanadi-Ib coalfield belt, often called "Odisha's Power Capital." The Ib Valley coalfield (one of India's most productive) fuels a cluster of massive thermal power plants, aluminium smelters, and metal industries: the Vedanta Aluminium smelter at Jharsuguda (one of India's largest aluminium plants), the NTPC Ib Valley thermal power station, and other major industries have made the district an industrial powerhouse despite its modest size. Jharsuguda also has one of Odisha's two airports (Veer Surendra Sai Airport, providing regional connectivity). The Ib River (a Mahanadi tributary) flows through the district's coal reserves.</p>
<p>RedHeart delivers flowers across Jharsuguda — Main Market, Airport area, Sambalpur Road, Vedanta area, Brajarajnagar area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jharsuguda, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Airport area, Sambalpur Road, Vedanta area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, corporate gifting bouquets, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for corporate gifting available in Jharsuguda's industrial zone?", answer: "Yes, Jharsuguda's Vedanta aluminium, NTPC thermal, and other industrial plants have many corporate offices. Flower arrangements for employee recognition and corporate gifting are available for same-day delivery." },
      { question: "Can I get birthday flowers in Jharsuguda?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jharsuguda for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Jharsuguda?", answer: "Yes, same-day delivery is available across Jharsuguda for orders placed before 3 PM." }
    ]
  },

  "purulia": {
    cityName: "Purulia",
    metaTitle: "Flower Delivery in Purulia | Chhau Dance West Bengal | RedHeart",
    metaDescription: "Order flowers in Purulia, West Bengal. Same-day delivery near Ajodhya Hills & across Purulia. From ₹399.",
    h1: "Online Flower Delivery in Purulia",
    metaKeyword: "flower delivery purulia, online flowers purulia west bengal, florist purulia, flowers purulia chhau dance ajodhya hills manbhum jharkhand border tribal",
    footerContent: `
<h2>Flower Delivery in Purulia — Purulia Chhau's Masked Dance Country in the Chota Nagpur Edge</h2>
<p>Purulia, in the westernmost corner of West Bengal at the Jharkhand border, is the headquarters of Purulia district — the most "tribal" and geographically Jharkhand-like district of Bengal, sitting on the Chota Nagpur Plateau's eastern edge where the Damodar and Kasai rivers rise. Purulia is the home of Purulia Chhau — one of the three classical forms of the Chhau mask dance tradition (UNESCO Intangible Cultural Heritage), distinctive for its elaborate papier-mâché masks depicting Hindu deities and demons, performed to the beat of dhol and shehnai during the Chaitra Parva (spring festival). The Ajodhya Hills (the highest point in West Bengal's Chhota Nagpur) offer scenic plateau landscapes. The district has significant Munda, Santhali, and Bhumij tribal communities. Purulia is known for its extremely hot and dry summer climate — one of the hottest in West Bengal.</p>
<p>RedHeart delivers flowers across Purulia — Main Market, Jhalda area, Raghunathpur area, Ajodhya Hills area, Adra area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purulia, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jhalda, Raghunathpur, Ajodhya Hills area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Durga Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Purulia Chhau festival available?", answer: "Yes, the Chhau dance festivals (Chaitra Parva in March-April) in Purulia are celebrated with marigolds and seasonal flowers. Arrangements for the Chhau festival season are available." },
      { question: "Are flowers for Durga Puja available in Purulia?", answer: "Yes, Durga Puja is celebrated with great enthusiasm in Purulia. Marigold garlands, hibiscus, and seasonal Durga puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Purulia?", answer: "Yes, same-day delivery is available across Purulia for orders placed before 3 PM." }
    ]
  },

  "bankura": {
    cityName: "Bankura",
    metaTitle: "Flower Delivery in Bankura | Bishnupur Terracotta West Bengal | RedHeart",
    metaDescription: "Order flowers in Bankura, West Bengal. Same-day delivery near Bishnupur temples & across Bankura. From ₹399.",
    h1: "Online Flower Delivery in Bankura",
    metaKeyword: "flower delivery bankura, online flowers bankura west bengal, florist bankura, flowers bankura bishnupur terracotta temple malla dynasty horse dokra craft",
    footerContent: `
<h2>Flower Delivery in Bankura — Bishnupur's Terracotta Temples and the Bankura Horse Folk Tradition</h2>
<p>Bankura, in the red-laterite Rarh region of western West Bengal, is one of Bengal's richest districts for folk art and heritage. Bishnupur (in Bankura district) was the capital of the Malla kings (a medieval Rajput dynasty) who built extraordinary terracotta temples in the 17th-18th centuries — the Rasmancha (the oldest brick temple in Bengal), the Jor Bangla temple, the Shyam Rai temple, and many others, all featuring exquisitely carved terracotta panels depicting the Ramayana, Mahabharata, and the life of Krishna. The Bishnupur gharana of classical music (a distinctive style of North Indian classical vocal music developed under Malla patronage) is one of India's rarest musical traditions. The Bankura horse (a stylised terracotta toy horse with distinctive geometric form, GI-tagged) is one of India's most recognisable folk crafts. The Dokra metal casting tradition is also associated with Bankura's tribal artisans.</p>
<p>RedHeart delivers flowers across Bankura — Main Market, Bishnupur area, Sonamukhi area, Khatra area, Ondal area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bankura, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bishnupur, Sonamukhi, Khatra, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Durga Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Bishnupur temple heritage visit from Bankura?", answer: "Yes, Bishnupur's Malla-dynasty terracotta temples are in Bankura district. Marigold and seasonal bouquets for heritage temple visits and cultural tourism stays can be delivered in Bankura." },
      { question: "Are flowers for Durga Puja available in Bankura?", answer: "Yes, Durga Puja is celebrated enthusiastically in Bankura. Marigold garlands, hibiscus, and Durga puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Bankura?", answer: "Yes, same-day delivery is available across Bankura for orders placed before 3 PM." }
    ]
  },

  "birbhum": {
    cityName: "Birbhum",
    metaTitle: "Flower Delivery in Birbhum | Shantiniketan West Bengal | RedHeart",
    metaDescription: "Order flowers in Birbhum (Suri), West Bengal. Same-day delivery near Shantiniketan & across Birbhum. From ₹399.",
    h1: "Online Flower Delivery in Birbhum",
    metaKeyword: "flower delivery birbhum, online flowers birbhum west bengal, florist birbhum suri, flowers birbhum shantiniketan tagore visva bharati baul music baulism",
    footerContent: `
<h2>Flower Delivery in Birbhum — Tagore's Shantiniketan and the Baul Mystic Singers' Homeland</h2>
<p>Birbhum, in the red-laterite Rarh region of northwestern West Bengal, is the headquarters of Birbhum district — one of India's most culturally extraordinary districts. Shantiniketan (in Birbhum) — the school and university founded by Rabindranath Tagore in 1901 — is now a UNESCO World Heritage Site (inscribed 2023), recognised for its unique educational philosophy (open-air classrooms, interdisciplinary arts education, Bengali cultural renaissance) and its role in inspiring creative generations across India. The Visva-Bharati University (Shantiniketan's university) is India's most internationally recognised centre for Bengali culture and arts. Birbhum is also the heartland of the Baul mystic singer tradition — the wandering minstrels who carry a syncretic Hindu-Sufi devotional philosophy in song (Bauls are UNESCO Intangible Cultural Heritage). The Tarapith Shakti temple (black stone goddess) is Birbhum's major pilgrimage site.</p>
<p>RedHeart delivers flowers across Birbhum — Suri Main Market, Shantiniketan area, Bolpur area, Tarapith area, Rampurhat area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Birbhum (Suri), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Suri Main Market, Shantiniketan, Bolpur, Tarapith, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Tarapith puja sets, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for a Shantiniketan Visva-Bharati cultural event available from Birbhum?", answer: "Yes, the Shantiniketan campus (Visva-Bharati University, UNESCO World Heritage Site) is in Birbhum. Seasonal bouquets for Basanta Utsav (Holi at Shantiniketan), cultural festivals, and anniversary gifts at Tagore's university are available." },
      { question: "Are flowers for Tarapith Kali Puja available in Birbhum?", answer: "Yes, the Tarapith Shakti temple is one of Bengal's most powerful pilgrimage sites. Marigold, red hibiscus, and Kali puja sets for Tarapith Tantric puja are available from Birbhum." },
      { question: "Do you deliver flowers same day in Birbhum?", answer: "Yes, same-day delivery is available across Birbhum for orders placed before 3 PM." }
    ]
  },

  "malda": {
    cityName: "Malda",
    metaTitle: "Flower Delivery in Malda | Mango English Bazaar West Bengal | RedHeart",
    metaDescription: "Order flowers in Malda (English Bazaar), West Bengal. Same-day delivery near Gaur ruins & across Malda. From ₹399.",
    h1: "Online Flower Delivery in Malda",
    metaKeyword: "flower delivery malda, online flowers malda west bengal, florist malda english bazaar, flowers malda gaur pandua sultans mango fazli silk north bengal",
    footerContent: `
<h2>Flower Delivery in Malda — Gaur's Sultans, Fazli Mangoes, and Bangladesh's Silk Gateway</h2>
<p>Malda (headquartered at English Bazaar), in northern West Bengal on the Bangladesh border, is a district of extraordinary historical, agricultural, and commercial significance. Gaur (10 km from English Bazaar) was the capital of the Bengal Sultanate (13th-16th century CE) — one of medieval India's most prosperous and powerful Islamic kingdoms, whose remarkable Qila (fortified complex), Eklakhi Mausoleum, Firuz Minar, and the Daakhil Darwaza are among eastern India's finest medieval monuments. The Hazrat Pandua area (nearby Adina Mosque — one of the largest mosques in South Asia in its time) is equally significant. Malda is India's largest Fazli mango-producing district — the Fazli (a very large, late-season mango variety) and Himsagar (a fragrant early-season mango) are Malda's most celebrated GI-tagged agricultural products. The district is also a major silk and mulberry cultivation zone.</p>
<p>RedHeart delivers flowers across Malda — English Bazaar Main Market, Gaur area, Harishchandrapur area, Chanchal area, Kaliachak area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malda (English Bazaar), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">English Bazaar, Gaur area, Harishchandrapur, Chanchal, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal West Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Eid available in Malda?", answer: "Yes, Malda has a significant Muslim community (legacy of the Bengal Sultanate's influence). Rose garlands and festive bouquets for Eid are available for same-day delivery in Malda." },
      { question: "Are flowers for Durga Puja available in Malda?", answer: "Yes, Durga Puja is celebrated widely in Malda. Marigold garlands, hibiscus, and Durga puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Malda?", answer: "Yes, same-day delivery is available across Malda for orders placed before 3 PM." }
    ]
  },

  "north-dinajpur": {
    cityName: "North Dinajpur",
    metaTitle: "Flower Delivery in North Dinajpur | Raiganj West Bengal | RedHeart",
    metaDescription: "Order flowers in North Dinajpur (Raiganj), West Bengal. Same-day delivery near Kulik Bird Sanctuary & across North Dinajpur. From ₹399.",
    h1: "Online Flower Delivery in North Dinajpur",
    metaKeyword: "flower delivery north dinajpur, online flowers raiganj west bengal, florist north dinajpur raiganj, flowers north dinajpur kulik bird sanctuary bangladesh nepal terai",
    footerContent: `
<h2>Flower Delivery in North Dinajpur — Kulik Bird Sanctuary and the Bangladesh-Nepal Corridor District</h2>
<p>North Dinajpur (headquartered at Raiganj), in the extreme north of West Bengal at the Bangladesh and Nepal border area, is one of the most geographically strategic but least-known districts of the state. The Raiganj Wildlife Sanctuary (Kulik Bird Sanctuary), on the Kulik River near Raiganj town, is Asia's second-largest heronry — every monsoon season (June-October) hundreds of thousands of open-billed storks, night herons, little egrets, cormorants, and other waterbirds nest in the dense wood groves by the river in a natural spectacle of extraordinary scale. North Dinajpur is in the "Chicken's Neck" (Siliguri Corridor) — the narrow strip of Indian territory connecting the northeastern states to mainland India, flanked by Bangladesh to the south and Nepal to the north. The district produces substantial rice, jute, and tobacco.</p>
<p>RedHeart delivers flowers across North Dinajpur — Raiganj Main Market, Kulik Road, Islampur area, Dalkhola area, Itahar area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">North Dinajpur (Raiganj), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raiganj, Kulik Road, Islampur, Dalkhola, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal West Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Durga Puja available in North Dinajpur?", answer: "Yes, Durga Puja is the most celebrated festival in North Dinajpur. Marigold garlands, hibiscus, and Durga puja sets are available for same-day delivery in Raiganj." },
      { question: "Can I get birthday flowers in Raiganj (North Dinajpur)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in North Dinajpur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in North Dinajpur?", answer: "Yes, same-day delivery is available across North Dinajpur for orders placed before 3 PM." }
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
