// Batch 31 — 15 cities:
// Kerala: Alappuzha, Kasaragod, Pathanamthitta, Idukki, Wayanad
// Himachal Pradesh: Kullu, Mandi, Solan, Una, Chamba
// Uttarakhand: Kashipur, Rudrapur, Kotdwar
// HP extra: Kangra, Bilaspur (HP)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "alappuzha": {
    cityName: "Alappuzha",
    metaTitle: "Flower Delivery in Alappuzha (Alleppey) | Backwaters | RedHeart",
    metaDescription: "Order flowers in Alappuzha (Alleppey), Kerala. Same-day delivery near backwaters & across Alappuzha town. Roses from ₹399.",
    h1: "Online Flower Delivery in Alappuzha",
    metaKeyword: "flower delivery alappuzha, online flowers alleppey kerala, florist alappuzha, flowers alappuzha backwaters snake boat",
    footerContent: `
<h2>Flower Delivery in Alappuzha — Venice of the East's Backwater Blooms</h2>
<p>Alappuzha (Alleppey), on Kerala's coastline at the edge of the Vembanad Lake and the Kuttanad backwaters, is one of India's most beloved tourist destinations — the "Venice of the East." The Vembanad Lake (India's longest lake and a Ramsar Wetland), the Punnamada Lake (home to the famous Nehru Trophy Boat Race every August), and the network of palm-lined canals connecting the villages of the backwaters create a landscape unlike anywhere else in India. Alappuzha's Kuttanad region is the only place in India where farming happens below sea level — paddy fields carved out of the backwaters. The Ambalapuzha Sri Krishna temple and the Champakulam White Church are important religious landmarks drawing pilgrims.</p>
<p>RedHeart delivers flowers across Alappuzha — KSRTC area, Mullackal temple road, Nehru Trophy race track area, and Thanneermukkom. Tropical bouquets, jasmine, roses, and Kerala puja flowers are available. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alappuzha (Alleppey), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">KSRTC area, Mullackal temple road, Nehru Trophy area, Thanneermukkom</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine strings, tropical bouquets, Kerala puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a houseboat or backwater resort stay in Alappuzha?",
        answer: "Yes, floral room decorations and bouquets for houseboats on the Vembanad backwaters are a popular request. We deliver to the jetty area and can coordinate with your houseboat operator."
      },
      {
        question: "Are flowers for Onam celebrations available in Alappuzha?",
        answer: "Yes, Onam's pookkalam (flower carpet) tradition is at its grandest in the backwater region. Marigold, gomphrena, and seasonal Kerala flowers for pookkalam are available during the August-September festival."
      },
      {
        question: "Are jasmine strings available in Alappuzha?",
        answer: "Yes, jasmine (thumba and regular mallige) strings are a daily purchase for many women in Alappuzha. Fresh jasmine is available throughout the year."
      }
    ]
  },

  "kasaragod": {
    cityName: "Kasaragod",
    metaTitle: "Flower Delivery in Kasaragod | Land of Gods | RedHeart",
    metaDescription: "Order flowers in Kasaragod, Kerala. Same-day delivery near Bekal Fort & across Kasaragod town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Kasaragod",
    metaKeyword: "flower delivery kasaragod, online flowers kasaragod kerala, florist kasaragod, flowers kasaragod bekal fort teyyam",
    footerContent: `
<h2>Flower Delivery in Kasaragod — Kerala's Northern Gateway: Land of Rivers and Theyyam</h2>
<p>Kasaragod, the northernmost district of Kerala bordering Karnataka, is sometimes called the "Land of Gods and Rivers" — the district has 7 languages (Malayalam, Tulu, Kannada, Konkani, Urdu, Marathi, and Beary Arabic dialect), 7 rivers, and perhaps India's most dense concentration of Theyyam (ritual spirit possession) performances at local Kavu shrines. The Bekal Fort — Kerala's largest fort, built by the Keladi Nayakas in the 17th century on a promontory overlooking the Arabian Sea — is one of India's most scenic heritage monuments and a major Kerala tourist destination. The Madhur Temple and the Ananthapura Lake Temple (the only floating temple in Kerala) are important pilgrimage sites. Kasaragod's coastal economy blends coconut, arecanut, and cashew cultivation.</p>
<p>RedHeart delivers flowers across Kasaragod — Bekal Road, Bus Stand area, Kanhangad Road, and Vidyanagar. We offer roses, seasonal Kerala bouquets, jasmine, and Theyyam ritual flower arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasaragod, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bekal Road, Bus Stand area, Kanhangad Road, Vidyanagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine strings, tropical bouquets, Theyyam ritual flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Theyyam ritual ceremonies available in Kasaragod?",
        answer: "Yes, Theyyam is one of the most important traditions in Kasaragod's culture. Ritual flowers for Theyyam performances at local Kavu shrines include red ixora, marigold, and white jasmine."
      },
      {
        question: "Can I get flowers near Bekal Fort in Kasaragod?",
        answer: "Yes, heritage resort deliveries near Bekal Fort area are within our coverage. A romantic floral arrangement for a Bekal beachfront stay is a popular gift."
      },
      {
        question: "Are Onam pookkalam flowers available in Kasaragod?",
        answer: "Yes, Onam is celebrated with beautiful flower carpets in Kasaragod. Marigold and seasonal Kerala flowers for pookkalam design are available during the August-September Onam season."
      }
    ]
  },

  "pathanamthitta": {
    cityName: "Pathanamthitta",
    metaTitle: "Flower Delivery in Pathanamthitta | Pilgrim's City | RedHeart",
    metaDescription: "Order flowers in Pathanamthitta, Kerala. Same-day delivery near Sabarimala & across Pathanamthitta town. From ₹399.",
    h1: "Online Flower Delivery in Pathanamthitta",
    metaKeyword: "flower delivery pathanamthitta, online flowers pathanamthitta kerala, florist pathanamthitta, flowers pathanamthitta sabarimala ayyappa",
    footerContent: `
<h2>Flower Delivery in Pathanamthitta — Kerala's Pilgrim Capital and Gateway to Sabarimala</h2>
<p>Pathanamthitta, in central-southern Kerala on the banks of the Pampa River, is called the "Pilgrim's Capital of Kerala" — it is the gateway district to the Sabarimala Ayyappa temple, one of the world's most visited pilgrimage sites (with 40–50 million pilgrims during the Mandala-Makaravilakku season from November to January). The Pampa River at Triveni Sangam near Ranni is a major bathing ghat for the Sabarimala pilgrims. Pathanamthitta also has significant Christian heritage — the Maramon Convention on the Pampa River banks (the world's largest annual Christian convention, organized by the Mar Thoma Syrian Church) draws hundreds of thousands. The rubber and cardamom plantations in the Seethathode hills give the district its distinctive green landscape.</p>
<p>RedHeart delivers flowers across Pathanamthitta — Kottayam Road, Tiruvalla Road, Bus Stand area, and Ranny Road. We offer lotus, marigold garlands, and puja flower sets for Ayyappa pilgrims, plus seasonal Kerala bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pathanamthitta, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kottayam Road, Tiruvalla Road, Bus Stand area, Ranny Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigold garlands, jasmine, Sabarimala puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Sabarimala Ayyappa pilgrimage available in Pathanamthitta?",
        answer: "Yes, lotus, tulsi, and marigold garlands for the Sabarimala Ayyappa temple are among our most popular offerings. Delivered fresh to your Pathanamthitta stay before the pilgrimage."
      },
      {
        question: "Can I get flowers in Pathanamthitta for Christmas and Onam?",
        answer: "Yes, both Onam's pookkalam flowers and Christmas floral arrangements are available in Pathanamthitta, reflecting its diverse Hindu and Christian community."
      },
      {
        question: "Are jasmine strings available in Pathanamthitta for daily puja?",
        answer: "Yes, fresh jasmine strings and bunches for daily puja and personal use are available for delivery across Pathanamthitta."
      }
    ]
  },

  "idukki": {
    cityName: "Idukki",
    metaTitle: "Flower Delivery in Idukki | Spice Hills | RedHeart",
    metaDescription: "Order flowers in Idukki, Kerala. Same-day delivery near Munnar, Thekkady & across Idukki district. Exotic hill flowers from ₹399.",
    h1: "Online Flower Delivery in Idukki",
    metaKeyword: "flower delivery idukki, online flowers idukki kerala, florist idukki, flowers idukki munnar cardamom spice hills",
    footerContent: `
<h2>Flower Delivery in Idukki — Kerala's High Range Spice and Wildflower Paradise</h2>
<p>Idukki district, in the High Range hills of Kerala at elevations from 600 to 2695 metres (including Anamudi, South India's highest peak), is one of India's most stunning mountainscapes. The district encompasses the Periyar Tiger Reserve (Thekkady), the Munnar tea gardens, the Eravikulam National Park (home to the Neelakurinji flowers that bloom once every 12 years and turn the hills violet-blue), and the Idukki Arch Dam (one of the largest arch dams in Asia). Cardamom, tea, pepper, and rubber are the primary crops in this spice-rich highland. The Marayoor sandalwood forests and the Chinnar Wildlife Sanctuary at the Rajasthan-Kerala interface are unique biodiversity hotspots.</p>
<p>RedHeart delivers flowers across Idukki — Painavu area (district HQ), Thodupuzha Road, Kattappana Road, and Munnar area resorts. Exotic hill flowers, roses, and seasonal Kerala bouquets are available. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Idukki, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Painavu, Thodupuzha Road, Kattappana Road, Munnar area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, exotic hill flowers, jasmine, orchids, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to a Munnar tea estate resort in Idukki?",
        answer: "Yes, Munnar's hill resorts and tea bungalows are within our Idukki delivery zone. A romantic flower arrangement for a Munnar highland stay is unforgettable."
      },
      {
        question: "Are exotic flowers and orchids available in Idukki?",
        answer: "Yes, Idukki's High Range climate supports anthuriums, orchids, and exotic hill flowers. These are among our most popular offerings for the resort and homestay gifting market."
      },
      {
        question: "Are flowers available for Onam in Idukki?",
        answer: "Yes, Onam pookkalam flowers and celebration bouquets are available in Idukki during the August-September festival season."
      }
    ]
  },

  "wayanad": {
    cityName: "Wayanad",
    metaTitle: "Flower Delivery in Wayanad | Kalpetta Hill Station | RedHeart",
    metaDescription: "Order flowers in Wayanad (Kalpetta), Kerala. Same-day delivery to tribal hills resorts & across Wayanad. Exotic flowers from ₹399.",
    h1: "Online Flower Delivery in Wayanad",
    metaKeyword: "flower delivery wayanad, online flowers wayanad kerala, florist wayanad kalpetta, flowers wayanad tribal hill station",
    footerContent: `
<h2>Flower Delivery in Wayanad — The Green Plateau's Tribal Heritage and Coffee Country</h2>
<p>Wayanad, in the Deccan Plateau highlands of Kerala bordering Karnataka and Tamil Nadu, is one of South India's most spectacular hill districts. The Western Ghats rise to over 2000 metres in Wayanad, and the landscape of coffee, tea, and pepper plantations intercut with dense sholaforest and bamboo groves creates a visual tapestry unique in Kerala. Wayanad's tribal communities — Kurumba, Paniya, Adiyar, and Kurichiya — are among Kerala's most significant indigenous groups, and the Wayanad Heritage Museum at Ambalavayal preserves rare tribal artefacts. The Edakkal Caves (with Neolithic rock engravings dating to 3000 BCE) and the Banasura Sagar Dam (India's largest earthen dam) are distinctive natural and heritage destinations.</p>
<p>RedHeart delivers flowers across Wayanad — Kalpetta town, Mananthavady Road, Sulthan Bathery area, and Vythiri Road. Exotic highland flowers, roses, jasmine, and seasonal bouquets are available. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wayanad (Kalpetta), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalpetta town, Mananthavady Road, Sulthan Bathery area, Vythiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, exotic highland flowers, jasmine strings, orchids</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered to a Wayanad hill resort or coffee estate?",
        answer: "Yes, resort and plantation bungalow deliveries in Wayanad are popular. A romantic bouquet for a coffee estate stay or honeymoon resort in Wayanad is a beautiful gesture."
      },
      {
        question: "Are orchids or exotic highland flowers available in Wayanad?",
        answer: "Yes, Wayanad's altitude and forests support orchids and exotic floral varieties. We carry orchid plants and cut arrangements alongside standard roses and jasmine."
      },
      {
        question: "Are flowers for Onam available in Wayanad?",
        answer: "Yes, Onam's pookkalam (flower carpet) tradition is cherished in Wayanad's tribal and settler communities. Marigold, gomphrena, and seasonal flowers for pookkalam are available."
      }
    ]
  },

  "kullu": {
    cityName: "Kullu",
    metaTitle: "Flower Delivery in Kullu | Valley of Gods | RedHeart",
    metaDescription: "Order flowers in Kullu, Himachal Pradesh. Same-day delivery near Beas River & across Kullu town. Mountain bouquets from ₹399.",
    h1: "Online Flower Delivery in Kullu",
    metaKeyword: "flower delivery kullu, online flowers kullu himachal, florist kullu, flowers kullu dussehra beas valley manali",
    footerContent: `
<h2>Flower Delivery in Kullu — Valley of Gods Where the Beas River Blooms</h2>
<p>Kullu, in the Beas River valley in Himachal Pradesh, is part of the famous Kullu-Manali tourist corridor and is known as the "Valley of Gods" — hosting over 360 deities (devtas) in the form of beautifully decorated silver palanquins (raths) that are brought out for the annual Kullu Dussehra, one of India's most spectacular week-long festivals. Unlike the rest of India where Dussehra is observed on Vijayadashami, Kullu Dussehra begins on that day and continues for seven days with all the local deities converging on the Dhalpur Maidan. The Kullu valley's apple orchards, cannabis cultivation (a traditional crop), and Kullu shawl weaving (the famous Kullu patti shawls) define its cultural and economic landscape.</p>
<p>RedHeart delivers flowers across Kullu — Akhara Bazaar, Dhalpur Maidan area, Dobhi Road, and Bhuntar Road. Mountain wildflowers, roses, marigolds, and seasonal Himalayan bouquets are available. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kullu, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Akhara Bazaar, Dhalpur area, Dobhi Road, Bhuntar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, mountain wildflowers, rhododendrons, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for the Kullu Dussehra festival?",
        answer: "Yes, Kullu Dussehra is one of India's most spectacular festivals. Marigold garlands, floral offerings for the devtas' raths, and celebratory bouquets are available during the seven-day festival."
      },
      {
        question: "Can I send flowers to a resort near Kullu or Manali?",
        answer: "Yes, hotels and resorts in the Kullu valley and extended Manali areas can receive our deliveries. A mountain flower arrangement for a Himalayan honeymoon is unforgettable."
      },
      {
        question: "Are rhododendrons or mountain wildflowers available in Kullu?",
        answer: "Yes, during spring (March-April), Himalayan wildflowers including rhododendrons, primula, and alpine flowers are available in Kullu. Seasonal availability varies."
      }
    ]
  },

  "mandi": {
    cityName: "Mandi",
    metaTitle: "Flower Delivery in Mandi | Chotti Kashi | RedHeart",
    metaDescription: "Order flowers in Mandi, Himachal Pradesh. Same-day delivery near Beas River & across Mandi town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Mandi",
    metaKeyword: "flower delivery mandi, online flowers mandi himachal, florist mandi, flowers mandi chotti kashi shivratri",
    footerContent: `
<h2>Flower Delivery in Mandi — Himachal's "Chotti Kashi" on the Beas River</h2>
<p>Mandi, on the Beas River at the junction where the plains meet the inner Himalayan valleys, is nicknamed "Chotti Kashi" (Little Varanasi) because of its extraordinary concentration of over 81 ancient temples in and around the town, many dating to the 8th–16th centuries. The Trilokinath, Bhootnath, and Panchvaktra temples are particularly beautiful examples of carved stone Himalayan temple architecture. Mandi is the administrative headquarters of Mandi district and serves as the gateway to the Kullu-Manali valley, the Uhl River hydro projects, and the Prashar Lake (at 2730 metres, with a floating island). The International Shivratri Mela — where deities from 300 surrounding temples converge in the town — is one of Himachal's grandest festivals.</p>
<p>RedHeart delivers flowers across Mandi — Indira Market, Paddal Ground area, Nerchowk Road, and Sundernagar Road. We offer roses, marigolds, seasonal Himalayan bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandi, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indira Market, Paddal Ground area, Nerchowk Road, Sundernagar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, mountain wildflowers, seasonal HP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Shivratri Mela in Mandi available?",
        answer: "Yes, the International Shivratri Mela in Mandi sees 300+ temple deities converge. Bilva leaves, marigold garlands, and Shiva puja flowers are available — order in advance for the fair period."
      },
      {
        question: "Can I get rhododendrons or alpine flowers in Mandi?",
        answer: "Yes, during spring (March-April), Himalayan wildflowers and rhododendrons are available in Mandi alongside year-round roses and marigolds."
      },
      {
        question: "Do you deliver flowers same day in Mandi?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Mandi for orders placed before 3 PM."
      }
    ]
  },

  "solan": {
    cityName: "Solan",
    metaTitle: "Flower Delivery in Solan | Mushroom Capital | RedHeart",
    metaDescription: "Order flowers in Solan, Himachal Pradesh. Same-day delivery near Kasauli & across Solan town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Solan",
    metaTitle: "Flower Delivery in Solan | Mushroom Capital | RedHeart",
    metaKeyword: "flower delivery solan, online flowers solan himachal, florist solan, flowers solan mushroom city kasauli brewery",
    footerContent: `
<h2>Flower Delivery in Solan — Himachal's Mushroom Capital Between Shimla and Chandigarh</h2>
<p>Solan, in southern Himachal Pradesh at 1370 metres on the Shimla-Chandigarh highway, is known as the "Mushroom City of India" — the Central Institute of Temperate Horticulture here and the surrounding farming cooperatives make Solan the hub of India's button mushroom industry. The famous Mohan Meakin Brewery (established 1820 in Kasauli, later expanded to Solan) — one of India's oldest and most historic breweries, producing Old Monk Rum and other well-known beverages — is a Solan landmark. The Kasauli hill station (just 25 km away) and the Shoolini Mata temple (Solan's presiding deity) are important local attractions. Solan's horticultural climate supports tomatoes, ginger, and diverse flowering plants.</p>
<p>RedHeart delivers flowers across Solan — Rajgarh Road, Shimla Road, Chandigarh Road, and Subathu Road. Our range includes roses, seasonal Himalayan bouquets, marigolds, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Solan, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajgarh Road, Shimla Road, Chandigarh Road, Subathu Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal hill flowers, potted plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Shoolini Mata festival in Solan?",
        answer: "Yes, the Shoolini Mata temple fair is Solan's most important festival. Marigold garlands and Devi puja flowers are available during the June fair period."
      },
      {
        question: "Are flowering plants available in Solan for gifting?",
        answer: "Yes, Solan's horticultural climate supports a rich variety of potted flowering plants. Primulas, pansies, and seasonal hill flowering plants are available for gifting."
      },
      {
        question: "Do you deliver flowers to Kasauli area from Solan?",
        answer: "Kasauli is about 25 km from Solan. Extended delivery to Kasauli heritage areas and hill resorts can be arranged — please contact our support."
      }
    ]
  },

  "una-hp": {
    cityName: "Una",
    metaTitle: "Flower Delivery in Una HP | Same Day | RedHeart",
    metaDescription: "Order flowers in Una, Himachal Pradesh. Same-day delivery near Swan River & across Una town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Una HP",
    metaKeyword: "flower delivery una himachal, online flowers una hp, florist una, flowers una himachal industrial punjab border",
    footerContent: `
<h2>Flower Delivery in Una — Himachal's Punjab Borderland</h2>
<p>Una, the headquarters of Una district at the southwestern edge of Himachal Pradesh bordering Punjab, is the most accessible part of HP from the plains. The Swan River (Swarn Rekha) flows through Una, and the district includes parts of the Shivalik Hills. Una has developed rapidly as a satellite industrial zone for the Punjab cities of Hoshiarpur and Anandpur Sahib (which is just 30 km away, across the Punjab border). The Chintpurni Devi temple (one of the 51 shakti peethas) in the Una district's hills and the Naina Devi temple (just across the border in Punjab hills) are major pilgrimage destinations drawing millions of devotees annually. Una's economy blends agricultural (wheat, maize, and sugarcane in the plains) with a growing pharmaceutical and light manufacturing sector.</p>
<p>RedHeart delivers flowers across Una — Bus Stand area, Amb Road, Hoshiarpur Road, and Mehatpur Road. Our range includes roses, marigolds, seasonal HP bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Una, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bus Stand area, Amb Road, Hoshiarpur Road, Mehatpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Navratri available in Una for the Chintpurni temple?",
        answer: "Yes, Chintpurni Devi temple in the Una hills is a major shakti peetha that draws thousands during Navratri. Marigold garlands and Devi puja flowers are available for pilgrims staying in Una."
      },
      {
        question: "Can I send flowers to industrial complexes in Una HP?",
        answer: "Yes, pharmaceutical and manufacturing units in Una's industrial areas receive flower deliveries for corporate events and personal gifting."
      },
      {
        question: "Do you deliver flowers same day in Una HP?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Una HP for orders placed before 3 PM."
      }
    ]
  },

  "chamba": {
    cityName: "Chamba",
    metaTitle: "Flower Delivery in Chamba | Ancient Hill Kingdom | RedHeart",
    metaDescription: "Order flowers in Chamba, Himachal Pradesh. Same-day delivery near Ravi River & across Chamba town. Mountain flowers from ₹399.",
    h1: "Online Flower Delivery in Chamba",
    metaKeyword: "flower delivery chamba, online flowers chamba himachal, florist chamba, flowers chamba ravi river minjar mela",
    footerContent: `
<h2>Flower Delivery in Chamba — Ancient Hill Kingdom of a Thousand Year Continuous Dynasty</h2>
<p>Chamba, on the Ravi River in the high mountains of northern Himachal Pradesh near Jammu, is one of the most historically remarkable small hill kingdoms in India — the Chamba dynasty ruled continuously for approximately 1000 years (from 920 CE until the kingdom's accession to India in 1948) making it one of the world's longest-reigning uninterrupted royal lines. The Chamba town preserves an extraordinary heritage: the Lakshmi Narayan temple complex (6 temples in a row, some dating to the 10th century), the Akhand Chandi Palace, the Bhuri Singh Museum, and the famous Chamba Rumal embroidery (fine silk-on-muslin embroidery of hunting and court scenes). The Minjar Mela (celebrated on the 2nd Sunday of Sawan) is Chamba's most spectacular festival.</p>
<p>RedHeart delivers flowers across Chamba — Chaugan area, Court Road, Bharmour Road, and Dalhousie Road. Mountain wildflowers, roses, marigolds, and seasonal Himalayan bouquets are available. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamba, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chaugan area, Court Road, Bharmour Road, Dalhousie Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, mountain wildflowers, marigolds, seasonal Himalayan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Minjar Mela available in Chamba?",
        answer: "Yes, Minjar Mela (Chamba's grand festival celebrating the onset of the corn harvest) is a week-long event. Marigold and seasonal flowers for the festival decorations are available."
      },
      {
        question: "Can I get flowers for Lakshmi Narayan temple puja in Chamba?",
        answer: "Yes, marigold garlands and Vishnu-Lakshmi puja flower sets for the ancient Lakshmi Narayan temple complex in Chamba are available for delivery."
      },
      {
        question: "Are flowers available for a Dalhousie area stay near Chamba?",
        answer: "Dalhousie is about 55 km from Chamba. We deliver to Chamba town and can arrange extended delivery to Dalhousie — please contact our support team."
      }
    ]
  },

  "kashipur": {
    cityName: "Kashipur",
    metaTitle: "Flower Delivery in Kashipur | Same Day | RedHeart",
    metaDescription: "Order flowers in Kashipur, Uttarakhand. Same-day delivery near Udham Singh Nagar & across Kashipur town. From ₹399.",
    h1: "Online Flower Delivery in Kashipur",
    metaKeyword: "flower delivery kashipur, online flowers kashipur uttarakhand, florist kashipur, flowers kashipur udham singh nagar industrial",
    footerContent: `
<h2>Flower Delivery in Kashipur — Gateway to Terai Uttarakhand's Industrial Belt</h2>
<p>Kashipur, in Udham Singh Nagar district at the foothills of the Kumaon Himalayas in Uttarakhand, is an important industrial town on the edge of the Terai — the fertile plains that transition from the Himalayan foothills to the Gangetic plain. The city has the ancient Moteshwar Mahadev (Shiva) temple and the historic Drona Sagar lake associated with Guru Dronacharya of the Mahabharata. The Kashipur industrial estate hosts sugar mills, flour mills, and light manufacturing units. The town's proximity to Jim Corbett National Park (about 60 km), the Girija Devi Shakti Peetha temple (an important pilgrimage site at Girija Devi), and the Nanak Matta Gurudwara (a revered Sikh shrine where Guru Nanak is said to have performed miracles) makes Kashipur a multi-faith pilgrimage gateway.</p>
<p>RedHeart delivers flowers across Kashipur — Bajpur Road, Ramnagar Road, Station Road, and Jaspur Road. Our range includes roses, marigolds, seasonal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kashipur, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bajpur Road, Ramnagar Road, Station Road, Jaspur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, puja flowers, seasonal Kumaon bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Nanda Devi Raj Jat pilgrimage available in Kashipur?",
        answer: "Yes, marigold and seasonal Himalayan flowers for Kumaoni festivals including the Nanda Devi puja tradition are available in Kashipur."
      },
      {
        question: "Can I send flowers to Jim Corbett area resorts from Kashipur?",
        answer: "Jim Corbett National Park (Ramnagar) is about 60 km from Kashipur. Extended delivery to Corbett-area resorts can be arranged with advance notice."
      },
      {
        question: "Do you deliver flowers same day in Kashipur?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Kashipur for orders placed before 3 PM."
      }
    ]
  },

  "rudrapur": {
    cityName: "Rudrapur",
    metaTitle: "Flower Delivery in Rudrapur | Industrial City | RedHeart",
    metaDescription: "Order flowers in Rudrapur, Uttarakhand. Same-day delivery near SIDCUL & across Rudrapur city. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Rudrapur",
    metaKeyword: "flower delivery rudrapur, online flowers rudrapur uttarakhand, florist rudrapur, flowers rudrapur sidcul industrial pantnagar",
    footerContent: `
<h2>Flower Delivery in Rudrapur — Uttarakhand's Industrial Gateway City</h2>
<p>Rudrapur, in Udham Singh Nagar at the foot of the Kumaon Himalayas, is Uttarakhand's fastest-growing industrial city — home to the SIDCUL (State Infrastructure and Industrial Development Corporation of Uttarakhand) industrial estate that houses over 700 units including Tata Motors, Ashok Leyland, Hero Honda, Bajaj Auto, and numerous multinational manufacturers. Pantnagar (just 10 km away) hosts the Govind Ballabh Pant University of Agriculture and Technology — one of India's foremost agricultural universities — and the Pantnagar Airport, Uttarakhand's only commercial airport. Rudrapur's rapid growth from a small town to a major industrial city over the past 20 years mirrors Uttarakhand's post-statehood industrial development story.</p>
<p>RedHeart delivers flowers across Rudrapur — SIDCUL area, Pantnagar Road, Haldwani Road, and Transport Nagar. Our range includes roses, marigolds, seasonal bouquets, and corporate gifting arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rudrapur, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">SIDCUL area, Pantnagar Road, Haldwani Road, Transport Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, corporate gifting arrangements, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to SIDCUL industrial offices in Rudrapur?",
        answer: "Yes, corporate flower deliveries to SIDCUL manufacturing plants, executive offices, and company guest houses are available. We offer office bouquets and fresh arrangement packages."
      },
      {
        question: "Are flowers for Kumaoni festivals available in Rudrapur?",
        answer: "Yes, Harela (Uttarakhand's harvest festival where saplings are planted), Phool Dei (spring flowers festival for girls), and other Kumaoni celebrations are supported with seasonal flower arrangements."
      },
      {
        question: "Do you deliver flowers same day in Rudrapur?",
        answer: "Yes, same-day delivery is available across Rudrapur for orders placed before 3 PM. We cover SIDCUL, Pantnagar, and all Rudrapur city areas."
      }
    ]
  },

  "kotdwar": {
    cityName: "Kotdwar",
    metaTitle: "Flower Delivery in Kotdwar | Gateway to Garhwal | RedHeart",
    metaDescription: "Order flowers in Kotdwar, Uttarakhand. Same-day delivery near Lansdowne & across Kotdwar town. Roses from ₹399.",
    h1: "Online Flower Delivery in Kotdwar",
    metaKeyword: "flower delivery kotdwar, online flowers kotdwar uttarakhand, florist kotdwar, flowers kotdwar gateway garhwal lansdowne",
    footerContent: `
<h2>Flower Delivery in Kotdwar — Gateway to the Garhwal Himalayas</h2>
<p>Kotdwar, in Pauri Garhwal district at the base of the Garhwal Himalayas in Uttarakhand, is the "Gateway to Garhwal" — the last major plains town before the road begins its climb into the mountains toward Pauri, Lansdowne, and eventually Srinagar (Garhwal). The town sits on the banks of the Khoh River, and the surrounding hills are the beginning of the outer Shivalik ranges. The Lansdowne hill station (1706 metres, established 1886 by the British as a Garhwal Rifles cantonment) is just 40 km from Kotdwar and is famous for its oak and rhododendron forests and its colonial-era buildings. Kotdwar's economy includes paper mills, granite quarries, and agricultural processing.</p>
<p>RedHeart delivers flowers across Kotdwar — Bijnor Road, Pauri Road, Lansdowne Road, and Station area. Our range includes roses, marigolds, seasonal Himalayan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kotdwar, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bijnor Road, Pauri Road, Lansdowne Road, Station area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal hill flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to Lansdowne hill station from Kotdwar?",
        answer: "Yes, Lansdowne (40 km from Kotdwar) is in our extended delivery zone. A flower arrangement for a Lansdowne forest stay or cantonment visit is a lovely gift — order before 12 PM."
      },
      {
        question: "Are flowers available for Phool Dei (spring flower festival) in Kotdwar?",
        answer: "Yes, Phool Dei is a traditional Garhwali spring festival where girls bring flowers to neighbours' doors. Seasonal wildflowers and marigolds for this Garhwali tradition are available."
      },
      {
        question: "Do you deliver same day in Kotdwar?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Kotdwar for orders placed before 3 PM."
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
