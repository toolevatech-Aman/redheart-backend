// Batch 36 — 15 cities:
// Madhya Pradesh: Rewa, Vidisha, Khandwa, Khargone, Mandla
// Chhattisgarh: Mahasamund, Kabirdham (Kawardha), Kondagaon, Balod, Sukma
// Maharashtra: Gondia, Gadchiroli, Washim
// Punjab: Mansa, Barnala

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "rewa": {
    cityName: "Rewa",
    metaTitle: "Flower Delivery in Rewa | White Tiger Land MP | RedHeart",
    metaDescription: "Order flowers in Rewa, Madhya Pradesh. Same-day delivery near Govindgarh palace & across Rewa. From ₹399.",
    h1: "Online Flower Delivery in Rewa",
    metaKeyword: "flower delivery rewa, online flowers rewa madhya pradesh, florist rewa, flowers rewa white tiger vindhya",
    footerContent: `
<h2>Flower Delivery in Rewa — Birthplace of the White Tiger and Capital of Vindhya Pradesh</h2>
<p>Rewa, in the Vindhya plateau of eastern Madhya Pradesh, is historically famous as the place where the world's first white tiger was captured in 1951 — the Maharaja Martand Singh of Rewa captured Mohan (the white tiger) in the forests near Rewa, and all white tigers in captivity worldwide today are descendants of Mohan. Rewa was the capital of the Rewa princely state (part of the Baghel Rajput dynasty) and later of Vindhya Pradesh (a state that merged into MP in 1956). The Bansagar Dam on the Son River (serving UP, MP, and Bihar) is one of the largest river valley projects in central India. The Govindgarh Palace, Shardadevi temple, and the Chitrakoot falls (on the MP-UP border, associated with Lord Rama's exile) are heritage landmarks.</p>
<p>RedHeart delivers flowers across Rewa — Civil Lines, Satna Road, Allahabad Road, Station Road, and Indira Market. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewa, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Satna Road, Allahabad Road, Station Road, Indira Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Vindhya bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for the Shardadevi temple in Rewa?",
        answer: "Yes, marigold garlands and Devi puja flowers for the Shardadevi temple in Rewa are available. Same-day delivery is available across Rewa town."
      },
      {
        question: "Are flowers for Diwali available in Rewa?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Rewa. Order before 3 PM for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Rewa?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Rewa for orders placed before 3 PM."
      }
    ]
  },

  "vidisha": {
    cityName: "Vidisha",
    metaTitle: "Flower Delivery in Vidisha | Sanchi MP | RedHeart",
    metaDescription: "Order flowers in Vidisha, Madhya Pradesh. Same-day delivery near Sanchi stupa & across Vidisha. From ₹399.",
    h1: "Online Flower Delivery in Vidisha",
    metaKeyword: "flower delivery vidisha, online flowers vidisha madhya pradesh, florist vidisha, flowers vidisha sanchi stupa betwa",
    footerContent: `
<h2>Flower Delivery in Vidisha — Ancient Besnagar on the Betwa Where the Sanchi Stupa Watches</h2>
<p>Vidisha (ancient Besnagar/Bhilsa), in the Betwa River valley of central Madhya Pradesh, is one of India's great ancient cities — a major commercial centre of the Shunga (2nd century BCE) and Naga dynasties, and the hometown of King Ashoka's wife Devi (giving the Sanchi connection). The Sanchi UNESCO World Heritage Site — with its magnificent 3rd century BCE Great Stupa built by Emperor Ashoka — is just 10 km from Vidisha. The Udayagiri caves (5th century Gupta-era rock carvings including the famous Varaha avatar sculpture) are 6 km away. The Heliodoros Pillar (erected c. 110 BCE by the Greek ambassador Heliodoros, who worshipped Vishnu — among the earliest evidence of Vaishnavism) is in Vidisha.</p>
<p>RedHeart delivers flowers across Vidisha — Station Road, Bhopal Road, Sanchi Road, Ganj Basoda Road, and Civil Lines. We offer lotus, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vidisha, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Bhopal Road, Sanchi Road, Ganj Basoda Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, white chrysanthemums, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Buddhist puja flowers available for Sanchi stupa visits from Vidisha?",
        answer: "Yes, lotus and white flowers for Buddhist stupa offerings at Sanchi are available from Vidisha. We deliver to your Sanchi guesthouse before your stupa visit."
      },
      {
        question: "Can I get flowers for the Udayagiri heritage area near Vidisha?",
        answer: "Yes, Udayagiri is 6 km from Vidisha. Seasonal bouquets for the heritage site area visits or nearby accommodations are available."
      },
      {
        question: "Do you deliver flowers same day in Vidisha?",
        answer: "Yes, same-day delivery is available across Vidisha for orders placed before 3 PM."
      }
    ]
  },

  "khandwa": {
    cityName: "Khandwa",
    metaTitle: "Flower Delivery in Khandwa | Kishore Kumar's City | RedHeart",
    metaDescription: "Order flowers in Khandwa, Madhya Pradesh. Same-day delivery near Omkareshwar & across Khandwa. From ₹399.",
    h1: "Online Flower Delivery in Khandwa",
    metaKeyword: "flower delivery khandwa, online flowers khandwa madhya pradesh, florist khandwa, flowers khandwa kishore kumar omkareshwar narmada",
    footerContent: `
<h2>Flower Delivery in Khandwa — Kishore Kumar's Hometown Near the Jyotirlinga of Omkareshwar</h2>
<p>Khandwa (East Nimar), in the Narmada valley of southwestern Madhya Pradesh, is famous as the birthplace and resting place of Kishore Kumar — the legendary Bollywood playback singer, actor, director, and entertainer who remains one of India's most beloved musical personalities. Kishore Kumar's samadhi at his Ganguly Villa in Khandwa is a pilgrimage site for music lovers. Khandwa is also the gateway to Omkareshwar — one of the twelve Jyotirlingas, located on an island shaped like the Om symbol in the Narmada River, just 60 km from Khandwa. The Narmada valley irrigation (Bargi and Sardar Sarovar canals) has transformed Khandwa's cotton and soybean agriculture.</p>
<p>RedHeart delivers flowers across Khandwa — Main Market, Omkareshwar Road, Burhanpur Road, Station Road, and Civil Lines. We offer bilva, marigold garlands, roses, and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khandwa, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Omkareshwar Road, Burhanpur Road, Station Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilva, marigold garlands, roses, Omkareshwar puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Omkareshwar Jyotirlinga puja available from Khandwa?",
        answer: "Yes, bilva and marigold garlands for the Omkareshwar Shiva Jyotirlinga are available from Khandwa. We deliver to your Omkareshwar accommodation or Khandwa address before the pilgrimage."
      },
      {
        question: "Can I get a tribute bouquet for Kishore Kumar's memorial in Khandwa?",
        answer: "Yes, a tasteful floral tribute for the Kishore Kumar Smarak in Khandwa can be arranged. A simple, respectful rose or seasonal bouquet is appropriate for the occasion."
      },
      {
        question: "Do you deliver flowers same day in Khandwa?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Khandwa for orders placed before 3 PM."
      }
    ]
  },

  "khargone": {
    cityName: "Khargone",
    metaTitle: "Flower Delivery in Khargone | West Nimar MP | RedHeart",
    metaDescription: "Order flowers in Khargone, Madhya Pradesh. Same-day delivery near Maheshwar ghats & across Khargone. From ₹399.",
    h1: "Online Flower Delivery in Khargone",
    metaKeyword: "flower delivery khargone, online flowers khargone madhya pradesh, florist khargone, flowers khargone maheshwar narmada ahilya cotton",
    footerContent: `
<h2>Flower Delivery in Khargone — West Nimar's Cotton Capital Near Ahilyabai's Maheshwar</h2>
<p>Khargone (West Nimar), in southwestern Madhya Pradesh's Narmada valley, is a major cotton and soybean producing district known as the "Cotton Bowl of MP." The city is the gateway to Maheshwar — the magnificent riverside heritage town on the Narmada built by the philosopher-queen Ahilyabai Holkar of Indore, whose Maheshwar Fort, Rajwada, and the Narmada ghats with their lamp-lit evenings are one of central India's most atmospheric heritage destinations. The Maheshwari sari (a handwoven silk cotton fabric developed under Ahilyabai's patronage) is one of India's most celebrated textiles. The Narmada river valley between Khargone and Maheshwar is a landscape of gorges, riverside temples, and mandua (sorghum) fields.</p>
<p>RedHeart delivers flowers across Khargone — Main Market, Maheshwar Road, Barwani Road, Burhanpur Road, and Station Road. We offer roses, marigolds, lotus (for Narmada puja), and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khargone, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Maheshwar Road, Barwani Road, Burhanpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, lotus, marigolds, Narmada ghat flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Maheshwar Narmada ghat ceremony near Khargone?",
        answer: "Yes, lotus and marigold for Narmada aarti and riverside rituals at Maheshwar are available from Khargone. We coordinate deliveries for the heritage town area."
      },
      {
        question: "Are flowers for Ahilyabai Holkar Jayanti available in Khargone?",
        answer: "Yes, Ahilyabai Holkar Jayanti is observed as a state holiday in MP. Marigold and seasonal flowers for the commemoration are available in Khargone."
      },
      {
        question: "Do you deliver flowers same day in Khargone?",
        answer: "Yes, same-day delivery is available across Khargone for orders placed before 3 PM."
      }
    ]
  },

  "mandla": {
    cityName: "Mandla",
    metaTitle: "Flower Delivery in Mandla | Kanha Corridor MP | RedHeart",
    metaDescription: "Order flowers in Mandla, Madhya Pradesh. Same-day delivery near Kanha national park & across Mandla. From ₹399.",
    h1: "Online Flower Delivery in Mandla",
    metaKeyword: "flower delivery mandla, online flowers mandla madhya pradesh, florist mandla, flowers mandla kanha tiger reserve narmada gond",
    footerContent: `
<h2>Flower Delivery in Mandla — Gateway to Kanha and the Narmada's Curve Through Gondwana</h2>
<p>Mandla, in the eastern Satpura region of Madhya Pradesh where the Narmada River makes a remarkable U-turn (the necklace-shaped Narmada curve at Mandla), is the headquarters of Mandla district — the heart of Gondwana, the ancient land of the Gond tribal kingdom. The Garha Mandla kingdom of the Gonds was one of central India's largest pre-colonial polities, and the heroic queen Rani Durgavati (who fought the Mughal army of Akbar in 1564 and chose death over surrender) is the district's patron figure. The Kanha Tiger Reserve — one of India's best wildlife sanctuaries and the primary inspiration for Kipling's "The Jungle Book" — borders Mandla district. The Baiga tribal community in Dindori and Mandla districts has India's last practitioners of birch-bark art.</p>
<p>RedHeart delivers flowers across Mandla — Main Market, Jabalpur Road, Nainpur Road, Ghugri area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandla, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jabalpur Road, Nainpur Road, Ghugri area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, forest flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered to a Kanha Tiger Reserve resort from Mandla?",
        answer: "Yes, Kanha's safari lodges are accessible from Mandla. A welcome bouquet or anniversary flower arrangement for your wildlife lodge stay can be delivered from Mandla."
      },
      {
        question: "Are flowers for Gond tribal festivals available in Mandla?",
        answer: "Yes, Mandla is the Gond heartland. Seasonal flowers for Gond festivals including Danteshwari and Hareli puja are available."
      },
      {
        question: "Do you deliver flowers same day in Mandla?",
        answer: "Yes, same-day delivery is available across Mandla for orders placed before 3 PM."
      }
    ]
  },

  "mahasamund": {
    cityName: "Mahasamund",
    metaTitle: "Flower Delivery in Mahasamund | Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Mahasamund, Chhattisgarh. Same-day delivery near Sirpur heritage & across Mahasamund. From ₹399.",
    h1: "Online Flower Delivery in Mahasamund",
    metaKeyword: "flower delivery mahasamund, online flowers mahasamund chhattisgarh, florist mahasamund, flowers mahasamund sirpur buddhist heritage",
    footerContent: `
<h2>Flower Delivery in Mahasamund — Gateway to Sirpur's 6th-Century Buddhist Heritage City</h2>
<p>Mahasamund, in the Mahanadi River valley of central Chhattisgarh, is the gateway to Sirpur (ancient Sripur) — one of India's most underrated archaeological sites, a 5th-6th century CE Buddhist and Hindu heritage city. Sirpur's Surang Tila (main excavation site) has revealed a 20-room Buddhist monastery, multiple temples, and thousands of artefacts confirming it was a significant city of early medieval India visited by Chinese pilgrim Xuanzang in 639 CE. Mahasamund district itself produces quality paddy rice and is part of Chhattisgarh's "Rice Bowl." The district has a significant Satnami community (followers of Guru Ghasidas's Bhakti tradition).</p>
<p>RedHeart delivers flowers across Mahasamund — Main Market, Raipur Road, Bagbahra Road, Sirpur Road, and Station area. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahasamund, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Raipur Road, Bagbahra Road, Sirpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, lotus, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Buddhist puja flowers for Sirpur heritage available near Mahasamund?",
        answer: "Yes, lotus and white flowers for Buddhist monument reverence at Sirpur are available from Mahasamund. Sirpur is about 50 km from Mahasamund town."
      },
      {
        question: "Can I send a birthday bouquet to Mahasamund?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Mahasamund for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Mahasamund?",
        answer: "Yes, same-day delivery is available across Mahasamund for orders placed before 3 PM."
      }
    ]
  },

  "kabirdham": {
    cityName: "Kabirdham",
    metaTitle: "Flower Delivery in Kabirdham (Kawardha) | RedHeart",
    metaDescription: "Order flowers in Kabirdham (Kawardha), Chhattisgarh. Same-day delivery near Bhoramdeo temple & across Kabirdham. From ₹399.",
    h1: "Online Flower Delivery in Kabirdham",
    metaKeyword: "flower delivery kabirdham, online flowers kabirdham chhattisgarh, florist kawardha, flowers kabirdham bhoramdeo khajuraho chhattisgarh",
    footerContent: `
<h2>Flower Delivery in Kabirdham (Kawardha) — Chhattisgarh's Khajuraho and the Satpura Foothill Forests</h2>
<p>Kabirdham (headquartered at Kawardha), in the Satpura foothills of western Chhattisgarh near the Madhya Pradesh border, is often called "the Khajuraho of Chhattisgarh" for the Bhoramdeo temple complex (11th-12th century CE) on its outskirts — Nagara-style temples with Khajuraho-like sculptural programmes depicting sensuous and devotional imagery. The district's Achanakmar Wildlife Sanctuary (part of the Achanakmar-Amarkantak Biosphere Reserve) is an important tiger and leopard habitat. The Baiga tribal community of Kabirdham district has unique tattooing traditions and a special relationship with the forest. The Kawardha Palace (a heritage hotel) is one of Chhattisgarh's finest royal accommodation properties.</p>
<p>RedHeart delivers flowers across Kabirdham — Main Market, Bhoramdeo Road, Bilaspur Road, Palace area, and Pandariya. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kabirdham (Kawardha), Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bhoramdeo Road, Bilaspur Road, Palace area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Bhoramdeo temple in Kabirdham available?",
        answer: "Yes, marigold garlands and Shiva puja flowers for the Bhoramdeo Nagara temples are available from Kabirdham town. We deliver to Bhoramdeo area accommodations."
      },
      {
        question: "Can I get flowers for the Kawardha Palace heritage stay?",
        answer: "Yes, the Kawardha Palace is one of Chhattisgarh's finest heritage hotels. Anniversary and welcome flower arrangements for guests can be delivered to the palace."
      },
      {
        question: "Do you deliver flowers same day in Kabirdham?",
        answer: "Yes, same-day delivery is available across Kabirdham for orders placed before 3 PM."
      }
    ]
  },

  "kondagaon": {
    cityName: "Kondagaon",
    metaTitle: "Flower Delivery in Kondagaon | Bastar CG | RedHeart",
    metaDescription: "Order flowers in Kondagaon, Chhattisgarh. Same-day delivery near Jagdalpur & across Kondagaon. From ₹399.",
    h1: "Online Flower Delivery in Kondagaon",
    metaKeyword: "flower delivery kondagaon, online flowers kondagaon chhattisgarh, florist kondagaon, flowers kondagaon bastar gond tribal",
    footerContent: `
<h2>Flower Delivery in Kondagaon — Bastar's Craft Village and Gond Tribal Heritage Centre</h2>
<p>Kondagaon, in the Bastar plateau of Chhattisgarh between Kanker and Jagdalpur, is emerging as a significant centre of Bastar tribal arts and crafts. The district, carved from Bastar district in 2012, has the highest concentration of Gond tribal communities and is a hub of Dhokra (lost-wax bronze casting), Wrought Iron, and terracotta craft traditions unique to Bastar. The Mardum-Mukhdum art movement (featuring contemporary tribal artists) has gained international recognition. The Kondagaon area's dense sal and teak forests support significant biodiversity. The district lies on the National Highway between Raipur and Jagdalpur, giving it growing connectivity.</p>
<p>RedHeart delivers flowers across Kondagaon — Main Market, Jagdalpur Road, Kanker Road, Keshkal area, and Station Road. Our range includes roses, marigolds, seasonal Bastar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kondagaon, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jagdalpur Road, Kanker Road, Keshkal area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bastar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Gond tribal festivals available in Kondagaon?",
        answer: "Yes, Kondagaon has a large Gond tribal community with distinctive festival traditions. Seasonal flowers and marigold arrangements for tribal festivals are available."
      },
      {
        question: "Can I send a birthday bouquet to Kondagaon?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kondagaon for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Kondagaon?",
        answer: "Yes, same-day delivery is available across Kondagaon for orders placed before 3 PM."
      }
    ]
  },

  "balod": {
    cityName: "Balod",
    metaTitle: "Flower Delivery in Balod | Same Day | RedHeart",
    metaDescription: "Order flowers in Balod, Chhattisgarh. Same-day delivery near Tandula dam & across Balod. From ₹399.",
    h1: "Online Flower Delivery in Balod",
    metaKeyword: "flower delivery balod, online flowers balod chhattisgarh, florist balod, flowers balod tandula dam sheonath",
    footerContent: `
<h2>Flower Delivery in Balod — Sheonath River Country and Tandula Dam's Green Valley</h2>
<p>Balod, in south-central Chhattisgarh, is the headquarters of Balod district — an area in the Sheonath River basin known for Tandula Reservoir (one of Chhattisgarh's older irrigation projects, built in 1924 on the Tandula tributary of the Sheonath). The reservoir area around Balod has eco-tourism potential with boating and nature walks. The district is predominantly agricultural with rice and vegetables grown in the black soil plains. Balod district was carved from Durg district in 2012. The Gondwana tribal communities in the district's forested eastern portion maintain traditional fishing and forest produce collection traditions on the Sheonath's banks.</p>
<p>RedHeart delivers flowers across Balod — Main Market, Durg Road, Rajnandgaon Road, Tandula area, and Gunderdehi. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balod, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Durg Road, Rajnandgaon Road, Tandula area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Hareli festival available in Balod?",
        answer: "Yes, Hareli — Chhattisgarh's major agricultural festival — is celebrated in Balod's farming communities. Seasonal flowers and festive arrangements are available."
      },
      {
        question: "Can I send a birthday bouquet to Balod?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Balod for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Balod?",
        answer: "Yes, same-day delivery is available across Balod for orders placed before 3 PM."
      }
    ]
  },

  "sukma": {
    cityName: "Sukma",
    metaTitle: "Flower Delivery in Sukma | South Bastar CG | RedHeart",
    metaDescription: "Order flowers in Sukma, Chhattisgarh. Same-day delivery near Bailadila hills & across Sukma. From ₹399.",
    h1: "Online Flower Delivery in Sukma",
    metaKeyword: "flower delivery sukma, online flowers sukma chhattisgarh, florist sukma, flowers sukma south bastar dornapal koiya tribal",
    footerContent: `
<h2>Flower Delivery in Sukma — South Bastar's Koiya Tribal Country on the Sabari River</h2>
<p>Sukma, in extreme southern Chhattisgarh bordering Telangana and Odisha, is the headquarters of Sukma district — one of Chhattisgarh's most tribal and forested districts, dominated by the Koiya (Koya) Gond community. The Sabari River (an important Mahabharata river, where the devotee Shabari offered fruit to Lord Rama) flows through Sukma district. The Bailadila iron ore deposits (in neighbouring Dantewada) transformed the economic and infrastructure landscape of south Bastar, with the Kirandul-Visakhapatnam mineral railway passing through Sukma. The dense sal forests of Sukma district are among the finest remaining forests in central India.</p>
<p>RedHeart delivers flowers across Sukma — Main Market, Jagdalpur Road, Dornapal area, Chintalnar Road, and Station area. Our range includes roses, marigolds, seasonal Bastar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sukma, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jagdalpur Road, Dornapal area, Chintalnar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal South Bastar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Dussehra (Bastar Dussehra) in Sukma?",
        answer: "Yes, the Bastar Dussehra tradition extends to Sukma's Koiya Gond communities. Marigold and seasonal flowers for the tribal harvest celebration are available."
      },
      {
        question: "Are flowers available for government offices and hospitals in Sukma?",
        answer: "Yes, we deliver flowers to government offices, hospitals, and residential areas across Sukma for birthdays, farewells, and special occasions."
      },
      {
        question: "Do you deliver flowers same day in Sukma?",
        answer: "Yes, same-day delivery is available across Sukma for orders placed before 3 PM."
      }
    ]
  },

  "gondia": {
    cityName: "Gondia",
    metaTitle: "Flower Delivery in Gondia | Rice City Maharashtra | RedHeart",
    metaDescription: "Order flowers in Gondia, Maharashtra. Same-day delivery near Navegaon lake & across Gondia. From ₹399.",
    h1: "Online Flower Delivery in Gondia",
    metaKeyword: "flower delivery gondia, online flowers gondia maharashtra, florist gondia, flowers gondia rice city vidarbha navegaon",
    footerContent: `
<h2>Flower Delivery in Gondia — Maharashtra's Rice City on the Chhattisgarh Border</h2>
<p>Gondia, in the far eastern corner of Maharashtra bordering Chhattisgarh and Madhya Pradesh, is known as the "Rice City" or "City of Rice Mills" — the district is Maharashtra's principal rice-growing area and has hundreds of rice processing mills. The Wainganga River basin in Gondia district supports extensive paddy cultivation. The Navegaon National Park and the Nawegaon-Nagzira Tiger Reserve corridor (adjacent to Chhattisgarh's forest system) provide significant wildlife habitat for tigers, leopards, and gaur (Indian bison). Gondia's location at the railway junction connecting Nagpur, Jabalpur, and Raipur makes it a significant transit hub for eastern Maharashtra.</p>
<p>RedHeart delivers flowers across Gondia — Main Road, Nagpur Road, Amgaon Road, Arjuni Morgaon area, and Station Road. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gondia, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Nagpur Road, Amgaon Road, Arjuni Morgaon, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Vidarbha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Ganesh Chaturthi available in Gondia?",
        answer: "Yes, Ganesh Chaturthi is one of the biggest festivals in Gondia's Marathi community. Marigold garlands and Ganesh puja flower sets are available."
      },
      {
        question: "Can I get flowers delivered to Navegaon lake resort area from Gondia?",
        answer: "Yes, Navegaon is about 50 km from Gondia. Flower arrangements for eco-resort stays near the Navegaon National Park lake can be coordinated from Gondia."
      },
      {
        question: "Do you deliver flowers same day in Gondia?",
        answer: "Yes, same-day delivery is available across Gondia for orders placed before 3 PM."
      }
    ]
  },

  "gadchiroli": {
    cityName: "Gadchiroli",
    metaTitle: "Flower Delivery in Gadchiroli | Same Day | RedHeart",
    metaDescription: "Order flowers in Gadchiroli, Maharashtra. Same-day delivery near Pranhita river & across Gadchiroli. From ₹399.",
    h1: "Online Flower Delivery in Gadchiroli",
    metaKeyword: "flower delivery gadchiroli, online flowers gadchiroli maharashtra, florist gadchiroli, flowers gadchiroli gond tribal wainganga forest",
    footerContent: `
<h2>Flower Delivery in Gadchiroli — Maharashtra's Deepest Forest District in the Gond Tribal Belt</h2>
<p>Gadchiroli, in the far eastern corner of Maharashtra bordering Telangana and Chhattisgarh, is one of India's most heavily forested districts — a landscape of dense teak, sal, and bamboo forests drained by the Wainganga and Pranhita rivers. The district has a majority Gond tribal population, and the Gondi language and culture are central to community life. Gadchiroli is also known for the remarkable social work of Drs. Abhay and Rani Bang — their SEARCH organisation's community health work in Gadchiroli's remote villages has been internationally recognized. The Allapalli and Sironcha forest reserves are biologically rich. The district is also home to Maharashtra's best remaining wildlife habitat for the wild tiger corridor connecting Tadoba with Chhattisgarh's forests.</p>
<p>RedHeart delivers flowers across Gadchiroli — Main Market, Nagpur Road, Armori area, Desaiganj area, and Bhamragad Road. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gadchiroli, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Nagpur Road, Armori area, Desaiganj, Bhamragad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maharashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Gondi tribal festivals available in Gadchiroli?",
        answer: "Yes, Gadchiroli's Gond community has distinctive seasonal festivals. Marigold and seasonal flowers for Gondi ritual occasions are available in Gadchiroli."
      },
      {
        question: "Can I get flowers for Ganesh Chaturthi in Gadchiroli?",
        answer: "Yes, Ganesh Chaturthi is celebrated across Gadchiroli. Marigold garlands and Ganesh puja flower sets are available for the festival."
      },
      {
        question: "Do you deliver flowers same day in Gadchiroli?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Gadchiroli for orders placed before 3 PM."
      }
    ]
  },

  "washim": {
    cityName: "Washim",
    metaTitle: "Flower Delivery in Washim | Vidarbha Maharashtra | RedHeart",
    metaDescription: "Order flowers in Washim, Maharashtra. Same-day delivery near Pohra Devi & across Washim. From ₹399.",
    h1: "Online Flower Delivery in Washim",
    metaKeyword: "flower delivery washim, online flowers washim maharashtra, florist washim, flowers washim vidarbha pohra devi cotton",
    footerContent: `
<h2>Flower Delivery in Washim — Vidarbha's Pohra Devi Pilgrimage Town in the Cotton Heartland</h2>
<p>Washim, in the Vidarbha plateau of northeastern Maharashtra, is the headquarters of Washim district — an agricultural district known for cotton and soybean cultivation and for the Pohra Devi temple. Pohra Devi is a significant Devi temple (associated with Gond and Banjara communities as their kuldevi/clan deity) about 50 km from Washim town. The Banjara community — the nomadic traders who are now largely settled in Maharashtra and Telangana — has deep roots in the Washim area, and the Banjara language (Lambadi), dress, and embroidery tradition are important cultural markers. The Pedhi lake and the ancient Vidyanagari are heritage points in Washim town.</p>
<p>RedHeart delivers flowers across Washim — Main Market, Akola Road, Hingoli Road, Pohra Devi Road, and Station area. We offer roses, marigolds, red hibiscus, and seasonal Vidarbha bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Washim, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Akola Road, Hingoli Road, Pohra Devi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigold garlands, Pohra Devi puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Pohra Devi puja available in Washim?",
        answer: "Yes, red hibiscus and marigold for the Pohra Devi temple (the Banjara and Gond kuldevi) are available from Washim. Pohra Devi is about 50 km from Washim town."
      },
      {
        question: "Can I get flowers for Ganesh Chaturthi in Washim?",
        answer: "Yes, Ganesh Chaturthi is one of the grandest festivals in Washim's Marathi community. Marigold garlands and Ganesh puja flower sets are available."
      },
      {
        question: "Do you deliver flowers same day in Washim?",
        answer: "Yes, same-day delivery is available across Washim for orders placed before 3 PM."
      }
    ]
  },

  "mansa": {
    cityName: "Mansa",
    metaTitle: "Flower Delivery in Mansa | Punjab | RedHeart",
    metaDescription: "Order flowers in Mansa, Punjab. Same-day delivery of roses, bouquets & seasonal flowers across Mansa town. From ₹399.",
    h1: "Online Flower Delivery in Mansa",
    metaKeyword: "flower delivery mansa, online flowers mansa punjab, florist mansa, flowers mansa cotton punjab malwa",
    footerContent: `
<h2>Flower Delivery in Mansa — Punjab's Cotton Triangle Headquarters in the Malwa Plains</h2>
<p>Mansa, in the Malwa region of Punjab near the Haryana border, is the headquarters of Mansa district — a district at the heart of Punjab's "Cotton Triangle" (Mansa, Bathinda, Barnala) where Bt cotton cultivation transformed the agricultural landscape in the 1990s and early 2000s, but also became the epicentre of Punjab's farmers' distress and debt crisis. The Bhagat Singh Freedom Fighter Yudh Sthal near Mansa (connected to the Jallianwala Bagh massacre legacy) reflects the region's deep freedom-movement history. The Mansa region has historically produced a large number of Punjabi folk musicians, and the bhangra and malwai giddha folk dance traditions are strong here.</p>
<p>RedHeart delivers flowers across Mansa — Bathinda Road, Barnala Road, Main Market, and Sardulgarh area. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mansa, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bathinda Road, Barnala Road, Main Market, Sardulgarh area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, gerberas, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Baisakhi available in Mansa?",
        answer: "Yes, Baisakhi is the biggest Punjabi harvest festival in Mansa. Marigold garlands and seasonal bouquets for the bhangra festival celebration are available."
      },
      {
        question: "Can I get flowers for a wedding in Mansa?",
        answer: "Yes, wedding bouquets, bridal arrangements, and event flowers for Punjabi shaadi celebrations in Mansa are available. Contact us for bulk wedding orders."
      },
      {
        question: "Do you deliver flowers same day in Mansa?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Mansa for orders placed before 3 PM."
      }
    ]
  },

  "barnala": {
    cityName: "Barnala",
    metaTitle: "Flower Delivery in Barnala | Punjab | RedHeart",
    metaDescription: "Order flowers in Barnala, Punjab. Same-day delivery of roses, bouquets & seasonal flowers across Barnala. From ₹399.",
    h1: "Online Flower Delivery in Barnala",
    metaKeyword: "flower delivery barnala, online flowers barnala punjab, florist barnala, flowers barnala cotton punjab ghaggar",
    footerContent: `
<h2>Flower Delivery in Barnala — Malwa Punjab's Cotton and Milk Town on the Ghaggar Plains</h2>
<p>Barnala, in the Malwa region of Punjab on the banks of the seasonal Ghaggar River, is the headquarters of Barnala district — a compact district carved out of Sangrur district in 2006. The district is in Punjab's cotton-growing Malwa belt, and the town has a significant dairy cooperative sector (similar to Sangrur-Ludhiana). Barnala's Punjabi cultural identity is rooted in the Malwa's distinctive folk tradition — the melancholic Malwai tunes (slower and more introspective than the Majha bhangra) and the Sikhism traditions of the Malwa desh. The Jogga Shahid Gurudwara in Barnala is a prominent Sikh heritage site.</p>
<p>RedHeart delivers flowers across Barnala — Main Market, Sangrur Road, Bathinda Road, Dhuri Road, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barnala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sangrur Road, Bathinda Road, Dhuri Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, gerberas, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Guru Granth Sahib akhand path available in Barnala?",
        answer: "Yes, Barnala's Sikh community frequently observes akhand paths for family occasions. Marigold garlands and floral arrangements for gurudwara decorations are available."
      },
      {
        question: "Can I get flowers for Baisakhi in Barnala?",
        answer: "Yes, Baisakhi is the biggest harvest festival in Barnala's Punjabi community. Marigold garlands and seasonal bouquets are available for the festival."
      },
      {
        question: "Do you deliver flowers same day in Barnala?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Barnala for orders placed before 3 PM."
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
