// Batch 35 — 15 cities:
// Northeast: Aizawl, Kohima, Tura, Dharmanagar, Churachandpur
// Madhya Pradesh: Sagar, Satna, Chhindwara, Hoshangabad (Narmadapuram), Betul
// Chhattisgarh: Jagdalpur, Ambikapur, Rajnandgaon, Dhamtari, Kanker

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "aizawl": {
    cityName: "Aizawl",
    metaTitle: "Flower Delivery in Aizawl | Mizoram Capital | RedHeart",
    metaDescription: "Order flowers in Aizawl, Mizoram. Same-day delivery of roses, bouquets & seasonal flowers across Aizawl. From ₹399.",
    h1: "Online Flower Delivery in Aizawl",
    metaKeyword: "flower delivery aizawl, online flowers aizawl mizoram, florist aizawl, flowers aizawl mizo hills northeast india",
    footerContent: `
<h2>Flower Delivery in Aizawl — The Ridgeline Capital of Mizoram's Hill Country</h2>
<p>Aizawl, the capital of Mizoram, clings dramatically to a long ridge in the Mizo Hills at over 1,100 metres elevation — its steep streets and tiered buildings stacked against near-vertical hillsides make it one of India's most dramatically sited cities. The Mizo people, a predominantly Christian community (nearly 87% Baptist and Presbyterian), have one of India's highest literacy rates and a unique cultural ethos shaped by the Mizo traditional values of Tlawmngaihna (selfless service and neighbourly care). The city's Bara Bazaar and the Luangmual Handicrafts Centre showcase Mizo traditional weavings (puan fabrics) and bamboo crafts. The Durtlang Hills viewpoint, Mizoram State Museum, and the Solomon's Temple (a striking local church) are Aizawl landmarks.</p>
<p>RedHeart delivers flowers across Aizawl — Bara Bazaar, Zarkawt, Bawngkawn, Ramhlun, and Tuivamit area. Our range includes roses, anthuriums, seasonal Northeast bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aizawl, Mizoram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bara Bazaar, Zarkawt, Bawngkawn, Ramhlun, Tuivamit</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, anthuriums, seasonal Northeast bouquets, orchids</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are orchids and tropical flowers available in Aizawl?",
        answer: "Yes, Mizoram's humid hills support orchid cultivation. Anthuriums, orchids, and tropical bouquets are available in Aizawl alongside roses and marigolds."
      },
      {
        question: "Can I order flowers for Chapchar Kut festival in Aizawl?",
        answer: "Yes, Chapchar Kut (the Mizo spring festival of jhum cultivation clearing) is Mizoram's biggest traditional festival. Seasonal spring bouquets are available for the celebration in Aizawl."
      },
      {
        question: "Do you deliver flowers same day in Aizawl?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Aizawl for orders placed before 3 PM."
      }
    ]
  },

  "kohima": {
    cityName: "Kohima",
    metaTitle: "Flower Delivery in Kohima | Nagaland Capital | RedHeart",
    metaDescription: "Order flowers in Kohima, Nagaland. Same-day delivery near Hornbill Festival & across Kohima. From ₹399.",
    h1: "Online Flower Delivery in Kohima",
    metaKeyword: "flower delivery kohima, online flowers kohima nagaland, florist kohima, flowers kohima hornbill festival war cemetery",
    footerContent: `
<h2>Flower Delivery in Kohima — Where the Second World War Turned and the Hornbill Sings</h2>
<p>Kohima, the capital of Nagaland in Northeast India, is at 1,444 metres elevation in the Naga Hills — and is one of WWII's most significant sites. The Battle of Kohima (April-June 1944) on the Garrison Hill tennis court was described as the "Stalingrad of the East" — the tide-turning battle that stopped the Japanese advance into India (and potentially the British Empire). The Kohima War Cemetery with its famous inscription ("When You Go Home, Tell Them Of Us And Say, For Your Tomorrow, We Gave Our Today") is a powerful memorial. Kohima is also known for the Hornbill Festival (December 1-10) — a showcase of all 17 Naga tribes' cultures, crafts, music, and traditional sports that has become one of India's most celebrated cultural festivals.</p>
<p>RedHeart delivers flowers across Kohima — Town area, Dimapur Road, Ruzazo Colony, Midland, and Bayavü area. We offer roses, anthuriums, seasonal Naga bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kohima, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Town area, Dimapur Road, Ruzazo Colony, Midland, Bayavü</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, anthuriums, tropical bouquets, seasonal Naga blooms</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for the Hornbill Festival in Kohima?",
        answer: "Yes, the Hornbill Festival brings Nagaland's cultural richness to Kohima every December. Festive bouquets and flower arrangements for the cultural celebration are available in Kohima."
      },
      {
        question: "Are flowers for Christmas available in Kohima?",
        answer: "Yes, Kohima has a predominantly Christian population and Christmas is the biggest festival. Roses, poinsettias, and festive Christmas bouquets are available for the season."
      },
      {
        question: "Do you deliver flowers same day in Kohima?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Kohima for orders placed before 3 PM."
      }
    ]
  },

  "tura": {
    cityName: "Tura",
    metaTitle: "Flower Delivery in Tura | Meghalaya Garo Hills | RedHeart",
    metaDescription: "Order flowers in Tura, Meghalaya. Same-day delivery near Nokrek biosphere & across Tura. From ₹399.",
    h1: "Online Flower Delivery in Tura",
    metaKeyword: "flower delivery tura, online flowers tura meghalaya, florist tura, flowers tura garo hills nokrek biosphere west garo",
    footerContent: `
<h2>Flower Delivery in Tura — Capital of the Garo Hills and Gateway to Nokrek's Biosphere</h2>
<p>Tura, the headquarters of West Garo Hills district in Meghalaya, is the largest town in the Garo Hills region and the commercial hub for the Garo tribal community. The Garos are a Tibeto-Burman matrilineal society — one of the few remaining matrilineal and matrilocal cultures in the world, where property and clan membership pass through the mother's line. The Nokrek Biosphere Reserve near Tura is a UNESCO-recognised biodiversity hotspot and the natural home of the wild citrus species (Citrus indica) believed to be the ancestor of all cultivated citrus. The Tura Peak (872 metres) and the Balpakram National Park in South Garo Hills (with significant biodiversity) are nature attractions. The Wangala harvest festival (the "100 Drums Festival") of the Garos is one of Northeast India's most spectacular traditional celebrations.</p>
<p>RedHeart delivers flowers across Tura — Main Market, Mission Road, Jail Road, Netaji Road, and Hawakhana area. Our range includes roses, anthuriums, seasonal Meghalaya bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tura, Meghalaya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mission Road, Jail Road, Netaji Road, Hawakhana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, anthuriums, tropical bouquets, seasonal Garo blooms</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Wangala (Garo harvest festival) available in Tura?",
        answer: "Yes, Wangala is the Garo community's most important festival — a harvest thanksgiving with the famous 100-drum dance. Seasonal flowers and festive bouquets for Wangala are available in Tura."
      },
      {
        question: "Can I get Christmas flowers in Tura?",
        answer: "Yes, Tura's majority Christian Garo community celebrates Christmas with great festivity. Roses, poinsettias, and Christmas bouquets are available in December."
      },
      {
        question: "Do you deliver flowers same day in Tura?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Tura for orders placed before 3 PM."
      }
    ]
  },

  "dharmanagar": {
    cityName: "Dharmanagar",
    metaTitle: "Flower Delivery in Dharmanagar | North Tripura | RedHeart",
    metaDescription: "Order flowers in Dharmanagar, Tripura. Same-day delivery near Unakoti & across Dharmanagar. From ₹399.",
    h1: "Online Flower Delivery in Dharmanagar",
    metaKeyword: "flower delivery dharmanagar, online flowers dharmanagar tripura, florist dharmanagar, flowers dharmanagar north tripura unakoti",
    footerContent: `
<h2>Flower Delivery in Dharmanagar — North Tripura's Gateway Near the Ancient Rock Sculptures of Unakoti</h2>
<p>Dharmanagar, the headquarters of North Tripura district, is the main commercial centre of northern Tripura near the Bangladesh border. The town lies on the Manu River and is the railhead for the North Tripura area. The region's greatest attraction is Unakoti — an 8th-9th century CE rock-cut Shaivite shrine complex carved into a hillside, with one crore minus one (99,99,999) figures including a massive 30-foot Shiva head (the Unakotiswara Kal Bhairava) and numerous Vishnu, Ganesha, and Nandi carvings. The name "Unakoti" means "one less than one crore." The area also has the Jampui Hills (one of India's most beautiful orange-growing hill regions) accessible from Dharmanagar area.</p>
<p>RedHeart delivers flowers across Dharmanagar — Station Road, Court Road, Churaibari area, and Panisagar Road. Our range includes roses, marigolds, seasonal Tripura bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharmanagar, Tripura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Court Road, Churaibari area, Panisagar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Tripura bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Durga Puja available in Dharmanagar?",
        answer: "Yes, Durga Puja is the biggest festival for Tripura's Bengali Hindu community, celebrated with elaborate pandals. Marigold garlands and decorative bouquets are available in Dharmanagar."
      },
      {
        question: "Can I order flowers for Ker Puja (Tripura tribal festival) in Dharmanagar?",
        answer: "Yes, Ker Puja is an important Tripuri tribal festival. Seasonal flowers and traditional arrangements for the occasion are available in Dharmanagar."
      },
      {
        question: "Do you deliver flowers same day in Dharmanagar?",
        answer: "Yes, same-day delivery is available across Dharmanagar for orders placed before 3 PM."
      }
    ]
  },

  "churachandpur": {
    cityName: "Churachandpur",
    metaTitle: "Flower Delivery in Churachandpur | Manipur | RedHeart",
    metaDescription: "Order flowers in Churachandpur, Manipur. Same-day delivery near Loktak lake & across Churachandpur. From ₹399.",
    h1: "Online Flower Delivery in Churachandpur",
    metaKeyword: "flower delivery churachandpur, online flowers churachandpur manipur, florist churachandpur, flowers churachandpur zomi kuki chin hills",
    footerContent: `
<h2>Flower Delivery in Churachandpur — The Zomi and Kuki Cultural Hub of Manipur's Hills</h2>
<p>Churachandpur, in the hill district of the same name in southern Manipur, is the largest hill district headquarters in Manipur and the cultural centre for the Zo (Zomi/Mizo/Kuki-Chin) people of the Manipur hills. The district has a predominantly Christian tribal population — Hmar, Paite, Thadou, Vaiphei, and other Zo tribes. The Tipaimukh (confluence of the Barak and Tuivai rivers) in the district is a scenic and ecologically significant area. The Churachandpur hills have been an area of significant ethnic assertion and community organization — the Zo tribal communities have deep cross-border cultural ties with Mizoram and Myanmar's Chin state. The district produces quality ginger and turmeric, and bamboo crafts are an important cottage industry.</p>
<p>RedHeart delivers flowers across Churachandpur — Main Bazaar, Lamka area, Tuibuong Road, Mission Road, and Tuibong. Our range includes roses, anthuriums, seasonal hill bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churachandpur, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Bazaar, Lamka area, Tuibuong Road, Mission Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, anthuriums, tropical hill bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Christmas flowers available in Churachandpur?",
        answer: "Yes, Christmas is the most important festival for Churachandpur's predominantly Christian Zo tribal community. Roses, seasonal blooms, and Christmas bouquets are available."
      },
      {
        question: "Can I order flowers for Chapchar Kut or Thalfavang Kut in Churachandpur?",
        answer: "Yes, the Zo tribal harvest festivals (Thalfavang Kut and Chapchar Kut) are celebrated in Churachandpur. Seasonal bouquets for the cultural festivals are available."
      },
      {
        question: "Do you deliver flowers same day in Churachandpur?",
        answer: "Yes, same-day delivery is available across Churachandpur for orders placed before 3 PM."
      }
    ]
  },

  "sagar": {
    cityName: "Sagar",
    metaTitle: "Flower Delivery in Sagar | Madhya Pradesh | RedHeart",
    metaDescription: "Order flowers in Sagar, Madhya Pradesh. Same-day delivery near Sagar Lake & across Sagar city. From ₹399.",
    h1: "Online Flower Delivery in Sagar",
    metaKeyword: "flower delivery sagar, online flowers sagar madhya pradesh, florist sagar, flowers sagar mp lake bundelkhand",
    footerContent: `
<h2>Flower Delivery in Sagar — Bundelkhand's Lake City on the Vindhya Plateau</h2>
<p>Sagar, in the Bundelkhand plateau of Madhya Pradesh, is a historic city whose name comes from the Sagar Lake (Lakhya Sagar) — a large man-made tank created by the Bundela Rajput rulers in the 17th century. The city is home to Dr. Harisingh Gour Central University (established 1946), which is one of Madhya Pradesh's oldest universities. Sagar was a major centre of Chandela and Bundela political power in central India's medieval period. The Rani Lakshmibai Fort at Jhansi is closely linked to Sagar's regional history. The Bundeli cultural tradition — famous for its distinctive folk music (Alha-Udal ballads), rai folk dance, and the Diwali-adjacent Gobardhan puja — defines local festival life in Sagar.</p>
<p>RedHeart delivers flowers across Sagar — Gandhi Chowk, Makronia Road, Jabalpur Road, Bina Road, and Motipur area. Our range includes roses, marigolds, seasonal Madhya Pradesh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sagar, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Chowk, Makronia Road, Jabalpur Road, Bina Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Sagar?",
        answer: "Yes, Diwali is the grandest festival in Sagar's Bundelkhand community, celebrated with marigold rangoli and flower decorations. Festive bouquets are available."
      },
      {
        question: "Can I send flowers to Sagar University students?",
        answer: "Yes, Dr. Harisingh Gour University is in Sagar. Birthday and celebration bouquets for university students can be delivered to campus and nearby accommodations."
      },
      {
        question: "Do you deliver flowers same day in Sagar?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Sagar for orders placed before 3 PM."
      }
    ]
  },

  "satna": {
    cityName: "Satna",
    metaTitle: "Flower Delivery in Satna | Vindhya MP | RedHeart",
    metaDescription: "Order flowers in Satna, Madhya Pradesh. Same-day delivery near Maihar & across Satna. From ₹399.",
    h1: "Online Flower Delivery in Satna",
    metaKeyword: "flower delivery satna, online flowers satna madhya pradesh, florist satna, flowers satna maihar vindhya mp",
    footerContent: `
<h2>Flower Delivery in Satna — Vindhya's Cement City and Maihar Devi's Gateway</h2>
<p>Satna, in the Vindhya Range foothills of Madhya Pradesh near Uttar Pradesh's Rewa border, is one of India's major cement-producing districts — the Vindhya limestone belt supports the JP (Jayprakash Industries) and Prism cement plants that power the regional construction industry. Satna's more sacred identity is as the gateway to the Maihar Devi temple — the Sharda Mata (Goddess of Learning) temple atop Trikuta Hill that draws millions of pilgrims, especially on Navratri. The great classical musician Ustad Allauddin Khan (guru of Ravi Shankar and Ali Akbar Khan) hailed from the Maihar area and established the Maihar gharana of Hindustani music — the Maihar Band (a unique orchestra) continues his legacy. The Bharhut Stupa ruins (3rd century BCE Buddhist sculpture fragments) are 75 km from Satna.</p>
<p>RedHeart delivers flowers across Satna — Station Road, Maihar Road, Rewa Road, and Civil Lines area. We offer roses, marigolds, red hibiscus (for Sharda Devi), and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Satna, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Maihar Road, Rewa Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigold garlands, Sharda puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Maihar Devi temple puja available near Satna?",
        answer: "Yes, red hibiscus and marigold garlands for the Sharda Mata temple at Maihar are available from Satna. Maihar is about 50 km from Satna. We deliver to your accommodation before the temple visit."
      },
      {
        question: "Can I order flowers for Navratri in Satna?",
        answer: "Yes, Navratri at Maihar Devi draws lakhs of devotees from the Satna region. Devi puja flowers including red hibiscus and marigold are available."
      },
      {
        question: "Do you deliver flowers same day in Satna?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Satna for orders placed before 3 PM."
      }
    ]
  },

  "chhindwara": {
    cityName: "Chhindwara",
    metaTitle: "Flower Delivery in Chhindwara | Satpura MP | RedHeart",
    metaDescription: "Order flowers in Chhindwara, Madhya Pradesh. Same-day delivery near Pench national park & across Chhindwara. From ₹399.",
    h1: "Online Flower Delivery in Chhindwara",
    metaKeyword: "flower delivery chhindwara, online flowers chhindwara madhya pradesh, florist chhindwara, flowers chhindwara satpura pench orange",
    footerContent: `
<h2>Flower Delivery in Chhindwara — The Orange City on the Satpura Plateau</h2>
<p>Chhindwara, in the Satpura plateau of Madhya Pradesh, is one of India's most distinctive district headquarters — known as the "Orange City" for the extensive Nagpur orange cultivation that extends from Maharashtra's Nagpur region into Chhindwara district. The Satpura hills provide a scenic backdrop for the city. Chhindwara's proximity to the Pench Tiger Reserve (straddling MP and Maharashtra), one of India's best tiger-viewing destinations and the inspiration for Rudyard Kipling's "The Jungle Book," gives it a significant eco-tourism identity. The Patalkot valley — a remote tribal valley inhabited by the Bharia and Gond tribes — is an ethnographic wonder in Tamia tehsil of Chhindwara district.</p>
<p>RedHeart delivers flowers across Chhindwara — Main Road, Nagpur Road, Sausar Road, Parasia area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhindwara, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Nagpur Road, Sausar Road, Parasia, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Satpura bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered to a Pench Tiger Reserve resort from Chhindwara?",
        answer: "Yes, the Pench Tiger Reserve eco-resorts are reachable from Chhindwara. A welcome bouquet or anniversary arrangement for your jungle lodge stay is available."
      },
      {
        question: "Are flowers for Diwali available in Chhindwara?",
        answer: "Yes, Diwali is widely celebrated in Chhindwara with marigold rangoli and flower decorations. Festive bouquets and Lakshmi puja flowers are available."
      },
      {
        question: "Do you deliver flowers same day in Chhindwara?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Chhindwara for orders placed before 3 PM."
      }
    ]
  },

  "hoshangabad": {
    cityName: "Hoshangabad",
    metaTitle: "Flower Delivery in Hoshangabad (Narmadapuram) | RedHeart",
    metaDescription: "Order flowers in Hoshangabad, Madhya Pradesh. Same-day delivery near Narmada river & across Hoshangabad. From ₹399.",
    h1: "Online Flower Delivery in Hoshangabad",
    metaKeyword: "flower delivery hoshangabad, online flowers hoshangabad madhya pradesh, florist hoshangabad narmadapuram, flowers hoshangabad narmada river satpura",
    footerContent: `
<h2>Flower Delivery in Hoshangabad (Narmadapuram) — On the Sacred Narmada's Most Scenic Stretch</h2>
<p>Hoshangabad (officially renamed Narmadapuram in 2022 to reclaim its historical Sanskrit name), in central Madhya Pradesh on the southern bank of the Narmada River, is one of the most scenically located district headquarters in India. The Narmada here flows against the backdrop of the Satpura hills, and the Setghat (main river ghat) at Hoshangabad is celebrated for its Narmada Jayanti (the river goddess's birthday) festival in which thousands of diyas (oil lamps) are floated on the river. The Panchmarhi hill station (MP's only hill station) is 90 km from Hoshangabad. The Tawa Reservoir (on the Tawa-Narmada confluence) is a major irrigation project that transformed the Narmada valley's agriculture.</p>
<p>RedHeart delivers flowers across Hoshangabad — Main Road, Panchmarhi Road, Pipariya Road, Itarsi area, and Setghat area. We offer roses, lotus, marigolds (for Narmada puja), and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hoshangabad (Narmadapuram), Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Panchmarhi Road, Pipariya Road, Setghat area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, Narmada puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Narmada Jayanti available in Hoshangabad?",
        answer: "Yes, Narmada Jayanti at Setghat is one of Hoshangabad's most important celebrations. Lotus, marigold, and river worship flower sets are available for the festival."
      },
      {
        question: "Can I get flowers for the Panchmarhi hill station area from Hoshangabad?",
        answer: "Yes, Panchmarhi is about 90 km from Hoshangabad. Flower arrangements for Panchmarhi resort deliveries can be arranged from Hoshangabad."
      },
      {
        question: "Do you deliver flowers same day in Hoshangabad?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Hoshangabad for orders placed before 3 PM."
      }
    ]
  },

  "betul": {
    cityName: "Betul",
    metaTitle: "Flower Delivery in Betul | Satpura MP | RedHeart",
    metaDescription: "Order flowers in Betul, Madhya Pradesh. Same-day delivery across Betul town & Satpura region. From ₹399.",
    h1: "Online Flower Delivery in Betul",
    metaKeyword: "flower delivery betul, online flowers betul madhya pradesh, florist betul, flowers betul satpura tapti river tribal",
    footerContent: `
<h2>Flower Delivery in Betul — Where the Satpura Range Meets the Tapti River Headwaters</h2>
<p>Betul, in the southern Madhya Pradesh Satpura plateau, is the headquarters of Betul district — a hilly, forested area where the Tapti River originates in the Multai hills (Multai, a pilgrimage site for the Tapti source, is in Betul district). The district has a significant Gond tribal population in the forested hills. Betul's economy is diversified — coal mining (Pathakheda and Sarni coal-fired power plants), teak forests, and agriculture all contribute. The Aam Kho and Satpura National Park zone (contiguous to Pench, Kanha, and Melghat) near Betul's eastern forests is an important biodiversity corridor. The Multai Tapti origin pilgrimage is an important local festival during Tapti Jayanti.</p>
<p>RedHeart delivers flowers across Betul — Main Road, Nagpur Road, Amla Road, Multai Road, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Betul, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Nagpur Road, Amla Road, Multai Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Satpura bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Tapti Jayanti pilgrimage available in Betul?",
        answer: "Yes, Multai (the origin of Tapti River) is in Betul district. Flowers for the Tapti Jayanti river puja are available, and we deliver to Multai and Betul town."
      },
      {
        question: "Can I get flowers for Diwali in Betul?",
        answer: "Yes, Diwali is widely celebrated in Betul's mixed Hindu community with marigold decorations and festive bouquets — all available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Betul?",
        answer: "Yes, same-day delivery is available across Betul for orders placed before 3 PM."
      }
    ]
  },

  "jagdalpur": {
    cityName: "Jagdalpur",
    metaTitle: "Flower Delivery in Jagdalpur | Bastar Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Jagdalpur, Chhattisgarh. Same-day delivery near Chitrakote falls & across Jagdalpur. From ₹399.",
    h1: "Online Flower Delivery in Jagdalpur",
    metaKeyword: "flower delivery jagdalpur, online flowers jagdalpur chhattisgarh, florist jagdalpur, flowers jagdalpur bastar danteshwari chitrakote",
    footerContent: `
<h2>Flower Delivery in Jagdalpur — Royal Capital of Bastar and India's Amazon Heartland</h2>
<p>Jagdalpur, the headquarters of Bastar district in southern Chhattisgarh, is the historical capital of the Bastar princely state — a kingdom of extraordinary tribal heritage ruled by the Kakatiya-descendant Bastar royal family until 1947. The Bastar Dussehra (held over 75 days — the world's longest Dussehra) is a unique tribal celebration centred on the Danteshwari Mata chariot procession, fundamentally different from the mainstream Ramleela Dussehra. The Chitrakote Falls on the Indravati River (often called the "Niagara of India" for its horseshoe shape) are 40 km from Jagdalpur and India's widest waterfall. The Kanger Valley National Park (with stalactite-stalagmite caves at Kutumsar and Kailash) is another Bastar wonder.</p>
<p>RedHeart delivers flowers across Jagdalpur — Main Market, Danteshwari Road, Narayanpal Road, Dimrapal area, and Lalbagh. We offer marigolds, red hibiscus (for Danteshwari puja), roses, and seasonal Bastar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagdalpur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Danteshwari Road, Narayanpal Road, Dimrapal, Lalbagh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigold garlands, Danteshwari puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Danteshwari Mata puja available in Jagdalpur?",
        answer: "Yes, red hibiscus (the preferred flower of Danteshwari Mata) and marigold garlands for the Danteshwari temple are widely available in Jagdalpur, especially during Bastar Dussehra."
      },
      {
        question: "Can I get flowers for Bastar Dussehra in Jagdalpur?",
        answer: "Yes, Bastar Dussehra's 75-day festival involves Danteshwari processions and large community gatherings. Marigold arrangements and ritual flowers are available throughout the festival period."
      },
      {
        question: "Do you deliver flowers same day in Jagdalpur?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Jagdalpur for orders placed before 3 PM."
      }
    ]
  },

  "ambikapur": {
    cityName: "Ambikapur",
    metaTitle: "Flower Delivery in Ambikapur | Surguja Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Ambikapur, Chhattisgarh. Same-day delivery near Maihar Devi hills & across Ambikapur. From ₹399.",
    h1: "Online Flower Delivery in Ambikapur",
    metaKeyword: "flower delivery ambikapur, online flowers ambikapur chhattisgarh, florist ambikapur, flowers ambikapur surguja sarguja north chhattisgarh",
    footerContent: `
<h2>Flower Delivery in Ambikapur — Surguja's Cool Highland Capital in North Chhattisgarh</h2>
<p>Ambikapur, the headquarters of Surguja (Sarguja) district in northern Chhattisgarh, sits at around 600 metres altitude in the Chota Nagpur Plateau extension — making it one of Chhattisgarh's coolest cities and distinct from the hot plains of the Mahanadi basin. The Surguja region has a rich tribal heritage: the Oraon, Gond, Korwa, and Paharia tribal communities have distinct traditions, and the Karma festival (a collective harvest celebration involving bamboo Karma trees decorated with leaves and flowers) is widely celebrated. Ambikapur is also known as a hub of environmental activism — it was one of the first Indian cities to ban single-use plastic in 2019.</p>
<p>RedHeart delivers flowers across Ambikapur — Main Road, Bilaspur Road, Balrampur Road, Circuit House area, and Shastri Nagar. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambikapur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Bilaspur Road, Balrampur Road, Shastri Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Karma tribal festival available in Ambikapur?",
        answer: "Yes, the Karma festival (where bamboo Karma tree branches are worshipped with flowers and garlands) is celebrated by tribal communities around Ambikapur. Seasonal bouquets for the harvest festival are available."
      },
      {
        question: "Can I send flowers for birthday in Ambikapur?",
        answer: "Yes, birthday roses and bouquets are available for same-day delivery in Ambikapur for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Ambikapur?",
        answer: "Yes, same-day delivery is available across Ambikapur for orders placed before 3 PM."
      }
    ]
  },

  "rajnandgaon": {
    cityName: "Rajnandgaon",
    metaTitle: "Flower Delivery in Rajnandgaon | Same Day | RedHeart",
    metaDescription: "Order flowers in Rajnandgaon, Chhattisgarh. Same-day delivery near Dongargarh hills & across Rajnandgaon. From ₹399.",
    h1: "Online Flower Delivery in Rajnandgaon",
    metaKeyword: "flower delivery rajnandgaon, online flowers rajnandgaon chhattisgarh, florist rajnandgaon, flowers rajnandgaon dongargarh bambleshwari",
    footerContent: `
<h2>Flower Delivery in Rajnandgaon — Gateway to Dongargarh's Bambleshwari Devi Hilltop</h2>
<p>Rajnandgaon, in western Chhattisgarh on the railway line between Nagpur and Raipur, is the headquarters of Rajnandgaon district and the seat of the historic Rajnandgaon princely state. The district is best known as the gateway to Dongargarh — a hilltop town where the Maa Bambleshwari Devi temple (at the summit of a 1,600-step staircase) is one of Chhattisgarh's most visited Shakti pilgrimage sites. The Rajnandgaon area has significant beedi industry (country cigarette manufacturing) and rice and wheat cultivation. The Nobel laureate poet Mukutdhar Pandey hailed from Rajnandgaon — his literary legacy gives the district a place in Hindi literary history.</p>
<p>RedHeart delivers flowers across Rajnandgaon — Main Market, Dongargarh Road, Durg Road, Station Road, and Kharora area. We offer marigold garlands, red hibiscus (for Bambleshwari puja), roses, and seasonal Chhattisgarh bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajnandgaon, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dongargarh Road, Durg Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigold garlands, Bambleshwari puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Maa Bambleshwari Devi puja available in Rajnandgaon?",
        answer: "Yes, red hibiscus and marigold garlands for the Bambleshwari Devi hilltop temple at Dongargarh are available from Rajnandgaon. Dongargarh is about 60 km from Rajnandgaon."
      },
      {
        question: "Can I order flowers for Navratri in Rajnandgaon?",
        answer: "Yes, Navratri at the Bambleshwari temple in Dongargarh is one of Chhattisgarh's biggest pilgrimages, with millions visiting. Devi puja flowers are available in Rajnandgaon for the festival."
      },
      {
        question: "Do you deliver flowers same day in Rajnandgaon?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Rajnandgaon for orders placed before 3 PM."
      }
    ]
  },

  "dhamtari": {
    cityName: "Dhamtari",
    metaTitle: "Flower Delivery in Dhamtari | Same Day | RedHeart",
    metaDescription: "Order flowers in Dhamtari, Chhattisgarh. Same-day delivery near Gangrel dam & across Dhamtari. From ₹399.",
    h1: "Online Flower Delivery in Dhamtari",
    metaKeyword: "flower delivery dhamtari, online flowers dhamtari chhattisgarh, florist dhamtari, flowers dhamtari gangrel dam mahanadi",
    footerContent: `
<h2>Flower Delivery in Dhamtari — Mahanadi's Gangrel Dam and South Chhattisgarh's Rice Bowl</h2>
<p>Dhamtari, in southern Chhattisgarh on the upper Mahanadi River, is the headquarters of Dhamtari district — a significant agricultural district in the Mahanadi basin where irrigated rice cultivation (supported by the Gangrel dam reservoir, also known as Gandhi Sagar) produces some of the best rice in the state. The Gangrel reservoir is a tourist spot with water sports and boating facilities and is a popular day trip from Raipur. Dhamtari district has a mixed population of Chhattisgarhi Hindu communities and Gond tribal people in the forested eastern part. Sitanadi Wildlife Sanctuary (adjacent to Udanti Sanctuary) in Dhamtari district is an important tiger corridor.</p>
<p>RedHeart delivers flowers across Dhamtari — Main Market, Raipur Road, Kanker Road, Station Road, and Kurud area. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhamtari, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Raipur Road, Kanker Road, Station Road, Kurud</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Hareli (Chhattisgarh agricultural festival) available in Dhamtari?",
        answer: "Yes, Hareli — Chhattisgarh's first major festival of the year (celebrated by the farming community for good harvests) — is observed in Dhamtari. Seasonal bouquets and marigold arrangements are available."
      },
      {
        question: "Can I get flowers delivered to Gangrel dam resort area from Dhamtari?",
        answer: "Yes, Gangrel reservoir is about 15 km from Dhamtari. Flower arrangements for picnic venues and anniversary outings at Gangrel can be delivered same day."
      },
      {
        question: "Do you deliver flowers same day in Dhamtari?",
        answer: "Yes, same-day delivery is available across Dhamtari for orders placed before 3 PM."
      }
    ]
  },

  "kanker": {
    cityName: "Kanker",
    metaTitle: "Flower Delivery in Kanker | Bastar Corridor | RedHeart",
    metaDescription: "Order flowers in Kanker, Chhattisgarh. Same-day delivery near Kanker Palace & across Kanker. From ₹399.",
    h1: "Online Flower Delivery in Kanker",
    metaKeyword: "flower delivery kanker, online flowers kanker chhattisgarh, florist kanker, flowers kanker north bastar mahanadi",
    footerContent: `
<h2>Flower Delivery in Kanker — North Bastar's Royal Heritage on the Mahanadi Tributary</h2>
<p>Kanker, the headquarters of Kanker (North Bastar) district in Chhattisgarh, is the centre of the former Kanker princely state — a small Rajput kingdom that controlled the strategic corridor between the Bastar plateau and the Mahanadi plains. The Kanker Palace (now a heritage hotel) reflects the royal history, and the town's fort, temples, and stepwells speak to centuries of continuous settlement. Kanker district has significant Gond and Halba tribal communities. The Bhoramdeo temple complex (in Kabirdham district near Kanker's northern border) with its Khajuraho-style carvings is one of Chhattisgarh's finest medieval monuments. The Indravati-Sheonath river system drains the district's forested hills.</p>
<p>RedHeart delivers flowers across Kanker — Main Market, Jagdalpur Road, Raipur Road, Palace area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanker, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jagdalpur Road, Raipur Road, Palace area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bastar-corridor bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered to the Kanker Palace heritage hotel?",
        answer: "Yes, the Kanker Palace heritage hotel is a landmark of the district. Flower arrangements for anniversary stays and special occasions at the palace hotel are available."
      },
      {
        question: "Are flowers for Gondi tribal festivals available in Kanker?",
        answer: "Yes, Kanker has a significant Gond tribal community with their own festival traditions. Seasonal and ceremonial flowers for Gond festivals are available in Kanker."
      },
      {
        question: "Do you deliver flowers same day in Kanker?",
        answer: "Yes, same-day delivery is available across Kanker for orders placed before 3 PM."
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
