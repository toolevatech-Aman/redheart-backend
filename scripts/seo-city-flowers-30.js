// Batch 30 — 15 UP cities:
// Sultanpur, Pratapgarh, Lakhimpur Kheri, Pilibhit, Rampur,
// Kushinagar, Basti, Deoria, Mau, Ghazipur,
// Ballia, Lalitpur, Hamirpur, Hathras, Etah

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "sultanpur": {
    cityName: "Sultanpur",
    metaTitle: "Flower Delivery in Sultanpur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Sultanpur, Uttar Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Sultanpur. From ₹399.",
    h1: "Online Flower Delivery in Sultanpur",
    metaKeyword: "flower delivery sultanpur, online flowers sultanpur up, florist sultanpur, flowers sultanpur awadh gomti river",
    footerContent: `
<h2>Flower Delivery in Sultanpur — Awadh's Gomti River Town</h2>
<p>Sultanpur, on the banks of the Gomti River in eastern Uttar Pradesh between Lucknow and Varanasi, is the headquarters of Sultanpur district in the Awadh region. The district is in the fertile Indo-Gangetic plain and has a rich literary heritage — the famous Urdu poet Firaq Gorakhpuri was from nearby Gorakhpur, and the broader Awadhi literary tradition has deep roots in the Sultanpur-Lucknow cultural zone. The Sultanpur Bird Sanctuary on the Gomti River is a significant wetland for migratory birds. The town's economy is agricultural with wheat, rice, and pulses grown on the Gomti plain. Chhath Puja at the Gomti ghats is a grand community celebration each October-November.</p>
<p>RedHeart delivers flowers across Sultanpur — Lucknow Road, Faizabad Road, Station Road, and Civil Lines area. Our range includes roses, marigolds, seasonal Awadhi bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sultanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lucknow Road, Faizabad Road, Station Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath Puja flowers, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Sultanpur?",
        answer: "Yes, Chhath Puja at the Gomti ghats in Sultanpur is a major festival. Lotus, sugarcane leaves, and marigold offerings for Chhath are available — order in advance during the festival."
      },
      {
        question: "Can I order a birthday bouquet same day in Sultanpur?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Sultanpur. Orders placed before 3 PM are delivered the same evening."
      },
      {
        question: "Are flowers for Eid available in Sultanpur?",
        answer: "Yes, Sultanpur has a significant Muslim community. Rose bouquets and jasmine garlands for Eid celebrations are available."
      }
    ]
  },

  "pratapgarh-up": {
    cityName: "Pratapgarh",
    metaTitle: "Flower Delivery in Pratapgarh UP | Same Day | RedHeart",
    metaDescription: "Order flowers in Pratapgarh, Uttar Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Pratapgarh UP. From ₹399.",
    h1: "Online Flower Delivery in Pratapgarh",
    metaKeyword: "flower delivery pratapgarh up, online flowers pratapgarh uttar pradesh, florist pratapgarh, flowers pratapgarh awadhi aonla",
    footerContent: `
<h2>Flower Delivery in Pratapgarh — Aonla Capital of Uttar Pradesh</h2>
<p>Pratapgarh, in southeastern Uttar Pradesh in the Awadh region between Lucknow and Allahabad (Prayagraj), is best known in India as the "Aonla (Indian gooseberry) capital" — the district produces 85% of India's aonla supply, making Pratapgarh aonla (Emblica officinalis) famous across Ayurvedic medicine and food industries. The Sai River flows through Pratapgarh, and the district's cultural life blends Awadhi and Purvanchal traditions. The town is the birthplace of the poet-saint Kabir (by some historical accounts), and the Ramayana belt influence on local culture is strong. The Kalakankar Palace (a 19th-century Rajput ruler's riverside estate on the Ganges upstream) is a notable heritage site.</p>
<p>RedHeart delivers flowers across Pratapgarh — Prayagraj Road, Lucknow Road, Civil Lines, and Station Road area. We offer roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Prayagraj Road, Lucknow Road, Civil Lines, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Ram Navami available in Pratapgarh?",
        answer: "Yes, Ram Navami is a major festival in the Awadhi belt. Marigold and floral decorations for Ram Navami puja are available in Pratapgarh."
      },
      {
        question: "Can I order flowers in Pratapgarh for Chhath Puja?",
        answer: "Yes, Chhath Puja is observed at the Sai River banks in Pratapgarh. Lotus and marigold for the Chhath ritual are available — order in advance during the festival."
      },
      {
        question: "Do you deliver flowers same day in Pratapgarh UP?",
        answer: "Yes, same-day delivery is available across Pratapgarh UP for orders placed before 3 PM."
      }
    ]
  },

  "lakhimpur-kheri": {
    cityName: "Lakhimpur Kheri",
    metaTitle: "Flower Delivery in Lakhimpur Kheri | Same Day | RedHeart",
    metaDescription: "Order flowers in Lakhimpur Kheri, UP. Same-day delivery near Dudhwa National Park & across Lakhimpur. From ₹399.",
    h1: "Online Flower Delivery in Lakhimpur Kheri",
    metaKeyword: "flower delivery lakhimpur kheri, online flowers lakhimpur kheri up, florist lakhimpur, flowers lakhimpur kheri dudhwa sugar",
    footerContent: `
<h2>Flower Delivery in Lakhimpur Kheri — Terai's Sugar Country and Dudhwa Tiger Land</h2>
<p>Lakhimpur Kheri, in the Terai (Himalayan foothills plain) of northern UP near the Nepal border, is UP's largest district by area and one of India's most important sugarcane-producing regions. The district's sugar mills process millions of tonnes of cane annually, and the sugarcane fields alternate with the semi-evergreen Terai forests that support the Dudhwa National Park — a tiger reserve where both tigers and the Swamp Deer (Barasingha) have been protected in what was India's last significant Terai forest habitat. The Sharda River and Ghaghra River flow through the district, and the wetland habitats support significant bird life including the endangered hispid hare found only in the Dudhwa grasslands.</p>
<p>RedHeart delivers flowers across Lakhimpur Kheri — Station Road, Lucknow Road, Mohammadi Road, and Palia Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhimpur Kheri, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Lucknow Road, Mohammadi Road, Palia Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets, Chhath flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to Dudhwa National Park forest rest house area?",
        answer: "Yes, the Palia (Dudhwa buffer zone) area and forest rest house deliveries can be arranged. Please contact our support for Palia Kalan and Dudhwa area delivery."
      },
      {
        question: "Are Chhath Puja flowers available in Lakhimpur Kheri?",
        answer: "Yes, Chhath Puja is observed at the Sharda River banks in Lakhimpur Kheri. Lotus, marigold, and Chhath offerings are available."
      },
      {
        question: "Do you deliver flowers same day in Lakhimpur town?",
        answer: "Yes, same-day delivery is available across Lakhimpur town for orders placed before 3 PM."
      }
    ]
  },

  "pilibhit": {
    cityName: "Pilibhit",
    metaTitle: "Flower Delivery in Pilibhit | Tiger Reserve Country | RedHeart",
    metaDescription: "Order flowers in Pilibhit, Uttar Pradesh. Same-day delivery near Pilibhit Tiger Reserve & across Pilibhit town. From ₹399.",
    h1: "Online Flower Delivery in Pilibhit",
    metaKeyword: "flower delivery pilibhit, online flowers pilibhit up, florist pilibhit, flowers pilibhit tiger reserve flute",
    footerContent: `
<h2>Flower Delivery in Pilibhit — Terai's Flute Town and Tiger Country</h2>
<p>Pilibhit, in the Terai belt of northern UP near the Nepal border, is known for two things: the Pilibhit Tiger Reserve (one of the most successful tiger conservation projects in the Terai, where tiger density has grown dramatically over the past decade) and the bansuri (bamboo flute) craftsmanship that makes Pilibhit the largest producer of Indian classical flutes in the world. The town's flute-making artisans supply sitarists and classical musicians across India, and the local variety of bamboo found in the Terai forests is prized for its acoustic qualities. The Gomti River originates from the Madhotanda forests at Pilibhit's edge — making the town significant in the spiritual geography of the Gomti pilgrimage.</p>
<p>RedHeart delivers flowers across Pilibhit — Station Road, Bareilly Road, Puranpur Road, and Civil Lines area. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pilibhit, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Bareilly Road, Puranpur Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Terai bouquets, puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to a tiger reserve stay near Pilibhit?",
        answer: "Yes, eco-resort and forest rest house areas near the Pilibhit Tiger Reserve buffer zone are accessible. Please contact our support for forest lodge delivery arrangements."
      },
      {
        question: "Are flowers available for Eid celebrations in Pilibhit?",
        answer: "Yes, Pilibhit has a significant Muslim population. Rose bouquets and seasonal floral arrangements for Eid are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Pilibhit?",
        answer: "Yes, same-day delivery is available across Pilibhit for orders placed before 3 PM."
      }
    ]
  },

  "rampur": {
    cityName: "Rampur",
    metaTitle: "Flower Delivery in Rampur | Raza Library City | RedHeart",
    metaDescription: "Order flowers in Rampur, UP. Same-day delivery near Raza Library & across Rampur town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Rampur",
    metaKeyword: "flower delivery rampur, online flowers rampur up, florist rampur, flowers rampur raza library nawab knives",
    footerContent: `
<h2>Flower Delivery in Rampur — Nawabi Culture, Raza Library, and Famous Rampur Knives</h2>
<p>Rampur, in western Uttar Pradesh near Bareilly in the Rohilkhand region, was the seat of the Rampur Nawabs — a Rohilla Pathan princely state that maintained extraordinary cultural institutions even as the Mughal empire declined. The Raza Library (also called the Hamid Manzil Library) is one of India's most important repositories of Islamic manuscripts, Persian and Arabic books, and Mughal miniature paintings — a UNESCO Memory of the World-listed collection. Rampur is also known for its Rampur knife (churra) — a distinctive curved knife or sickle produced by traditional craftsmen — and for Rampur cuisine, a branch of Mughal-influenced cooking. The Rampur-Raza School of miniature painting was a significant Mughal-period art tradition.</p>
<p>RedHeart delivers flowers across Rampur — Civil Lines, Azim Nagar, Milak Road, and Shahabad Road. Our range includes roses, marigolds, jasmine, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rampur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Azim Nagar, Milak Road, Shahabad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Eid celebrations available in Rampur?",
        answer: "Yes, Rampur's Muslim-majority culture means Eid is one of its grandest festivals. Rose bouquets, jasmine garlands, and festive floral arrangements for Eid are available."
      },
      {
        question: "Can I order jasmine for the Nawabi culture traditions of Rampur?",
        answer: "Yes, jasmine (chameli) is deeply associated with Nawabi culture. Fresh jasmine bunches and jasmine-based bouquets are available in Rampur for personal use and gifting."
      },
      {
        question: "Do you deliver flowers same day in Rampur?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Rampur for orders placed before 3 PM."
      }
    ]
  },

  "kushinagar": {
    cityName: "Kushinagar",
    metaTitle: "Flower Delivery in Kushinagar | Buddha Mahaparinirvana | RedHeart",
    metaDescription: "Order flowers in Kushinagar, UP. Same-day delivery near Mahaparinirvana temple & across Kushinagar. Buddhist flowers from ₹399.",
    h1: "Online Flower Delivery in Kushinagar",
    metaKeyword: "flower delivery kushinagar, online flowers kushinagar up, florist kushinagar, flowers kushinagar buddha mahaparinirvana",
    footerContent: `
<h2>Flower Delivery in Kushinagar — Where the Buddha Attained Mahaparinirvana</h2>
<p>Kushinagar, in eastern Uttar Pradesh near the Nepal border, is one of the four most sacred sites in world Buddhism — the site where Gautama Buddha attained Mahaparinirvana (died and passed into nirvana) in approximately 483 BCE. The Mahaparinirvana Temple (housing a 6-metre-long reclining Buddha from the 5th century CE in a pose of final rest) and the Ramabhar Stupa (the site of the cremation) draw Buddhist pilgrims from Japan, Korea, China, Thailand, Sri Lanka, and Myanmar. The town is part of the Buddhist Circuit linking Lumbini (Nepal, Buddha's birthplace), Bodhgaya, Sarnath, and Kushinagar. The town hosts a major Buddhist pilgrimage circuit with numerous monasteries built by different Asian countries.</p>
<p>RedHeart delivers flowers across Kushinagar — Mahaparinirvana Road, Temple Road, Gorakhpur Road, and Padrauna Road. We offer lotus, white chrysanthemums, marigolds, and Buddhist puja flower sets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kushinagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahaparinirvana Road, Temple Road, Gorakhpur Road, Padrauna Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, white chrysanthemums, marigolds, Buddhist puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Buddhist puja flowers available for the Mahaparinirvana Temple in Kushinagar?",
        answer: "Yes, lotus, white chrysanthemums, and marigold offerings appropriate for Buddhist reverence at the Mahaparinirvana Temple are among our most popular offerings. Delivered fresh to your hotel."
      },
      {
        question: "What flowers are traditionally offered at Buddhist temples in Kushinagar?",
        answer: "In the Buddhist tradition, lotus (symbol of enlightenment), white chrysanthemums, and marigolds are most commonly offered. We stock all of these fresh in Kushinagar."
      },
      {
        question: "Are flowers available for Buddhist Visakha Puja (Buddha Jayanti) in Kushinagar?",
        answer: "Yes, Buddha Jayanti / Visakha Puja is a major event in Kushinagar. Lotus and floral offerings for this international Buddhist festival are available — order in advance as demand is very high."
      }
    ]
  },

  "basti": {
    cityName: "Basti",
    metaTitle: "Flower Delivery in Basti | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Basti, Uttar Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Basti. From ₹399.",
    h1: "Online Flower Delivery in Basti",
    metaKeyword: "flower delivery basti, online flowers basti up, florist basti, flowers basti awadhi purvanchal",
    footerContent: `
<h2>Flower Delivery in Basti — Gateway to Eastern Uttar Pradesh's Kushan Heritage</h2>
<p>Basti, in eastern Uttar Pradesh between Gorakhpur and Ayodhya, is the headquarters of Basti district in the Purvanchal cultural zone. The district has significant Buddhist and Jain heritage — the Shravasti (one of Buddhism's most important cities, associated with the Buddha's long teaching residence) is about 80 km from Basti, and the entire eastern UP corridor from Basti to Gorakhpur is in the Kushan Empire's Buddhist heartland. Basti's economy is agricultural with rice, wheat, and sugarcane dominating the fertile Ghaghra and Rapti river plains. The Chhath Puja at Ghaghra River banks and the Ram Navami processions are important local festivals.</p>
<p>RedHeart delivers flowers across Basti — Station Road, Gorakhpur Road, Civil Lines, and Ayodhya Road. Our range includes roses, marigolds, lotus, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Basti, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Gorakhpur Road, Civil Lines, Ayodhya Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, lotus, Chhath Puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Basti?",
        answer: "Yes, Chhath Puja is one of the most important festivals in Basti. Lotus, marigold, and sugarcane offerings for the river bank ceremony are available."
      },
      {
        question: "Can I get flowers in Basti for Ram Navami puja?",
        answer: "Yes, Ram Navami is a major celebration in the Ayodhya-adjacent cultural zone of Basti. Marigold and floral decorations for Ram Navami are available."
      },
      {
        question: "Do you deliver flowers same day in Basti?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Basti for orders placed before 3 PM."
      }
    ]
  },

  "deoria": {
    cityName: "Deoria",
    metaTitle: "Flower Delivery in Deoria | Same Day | RedHeart",
    metaDescription: "Order flowers in Deoria, Uttar Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Deoria town. From ₹399.",
    h1: "Online Flower Delivery in Deoria",
    metaKeyword: "flower delivery deoria, online flowers deoria up, florist deoria, flowers deoria purvanchal sugar bhojpuri",
    footerContent: `
<h2>Flower Delivery in Deoria — Purvanchal's Sugarcane Belt at the Bihar Border</h2>
<p>Deoria, in eastern Uttar Pradesh near the Bihar border and Nepal, is an agricultural district in the Purvanchal region known for sugarcane cultivation, jute, and rice farming along the Ghaghra and Rapti river plains. The district borders Gorakhpur (north), Kushinagar (northwest), and Bihar's Siwan and Gopalganj districts — a cultural and geographic continuum of the Bhojpuri-speaking belt that extends across eastern UP and western Bihar. The Chhath Puja at the Rapti and Ghaghra River banks in Deoria is one of the most celebrated community events. The Dih Barwa Nath Mandir (a local Shiva temple) and the Mauri Devi temple are important religious sites.</p>
<p>RedHeart delivers flowers across Deoria — Station Road, Gorakhpur Road, Bhatpar Rani Road, and Civil Lines area. We offer roses, marigolds, lotus, and seasonal Purvanchal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoria, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Gorakhpur Road, Bhatpar Rani Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, lotus, Chhath Puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Deoria?",
        answer: "Yes, Chhath Puja is the grandest festival in Deoria's Bhojpuri-speaking community. Lotus, marigold, and Chhath ritual offerings are available — order in advance."
      },
      {
        question: "Can I send a birthday bouquet in Deoria same day?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Deoria. Orders placed before 3 PM are delivered the same evening."
      },
      {
        question: "Do you deliver flowers to Bhatpar Rani area near Deoria?",
        answer: "Bhatpar Rani (about 20 km from Deoria) is in our extended zone. Please order before 12 PM for same-day delivery to the Bhatpar Rani area."
      }
    ]
  },

  "mau": {
    cityName: "Mau",
    metaTitle: "Flower Delivery in Mau | Handloom City | RedHeart",
    metaDescription: "Order flowers in Mau, Uttar Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Mau town. From ₹399.",
    h1: "Online Flower Delivery in Mau",
    metaKeyword: "flower delivery mau, online flowers mau up, florist mau, flowers mau handloom saree tamsa river",
    footerContent: `
<h2>Flower Delivery in Mau — UP's Handloom Saree Capital on the Tamsa</h2>
<p>Mau (Maunath Bhanjan), on the Tamsa (Tons) River in eastern Uttar Pradesh, is one of India's most important centres for powerloom and handloom textile manufacturing — particularly the famous Mau silk-cotton sarees and dress materials that are sold across India, Bangladesh, and the Middle East. The textile industry here employs hundreds of thousands of weavers and is the backbone of the local economy. The Mau district's culture blends Bhojpuri and Awadhi traditions, and the Chhath Puja at the Tamsa River ghats, the Muharram processions, and the Id-ul-Fitr celebrations all reflect the district's Hindu-Muslim composite culture. The Dohrighat Siddha Peeth (a Shakti shrine) and the Karni Devi temple are important local religious sites.</p>
<p>RedHeart delivers flowers across Mau — Civil Lines, Station Road, Ghosi Road, and Azamgarh Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mau, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Ghosi Road, Azamgarh Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Eid celebrations available in Mau?",
        answer: "Yes, Mau has a significant Muslim population in the textile industry community. Rose bouquets and festive flower arrangements for Eid ul-Fitr are available."
      },
      {
        question: "Are Chhath Puja flowers available in Mau?",
        answer: "Yes, Chhath Puja is also celebrated at the Tamsa River banks in Mau. Lotus and marigold for the ritual offering are available."
      },
      {
        question: "Do you deliver same day in Mau town?",
        answer: "Yes, same-day delivery is available across Mau for orders placed before 3 PM."
      }
    ]
  },

  "ghazipur": {
    cityName: "Ghazipur",
    metaTitle: "Flower Delivery in Ghazipur | Opium Roses | RedHeart",
    metaDescription: "Order flowers in Ghazipur, UP. Same-day delivery near Ganga ghats & across Ghazipur town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Ghazipur",
    metaKeyword: "flower delivery ghazipur, online flowers ghazipur up, florist ghazipur, flowers ghazipur opium factory rose ganga",
    footerContent: `
<h2>Flower Delivery in Ghazipur — City of the Rose-Water Factory on the Holy Ganga</h2>
<p>Ghazipur, on the right bank of the Ganges in eastern Uttar Pradesh near Varanasi, has one of India's most remarkable industrial legacies: the Government Opium and Alkaloid Works — one of only two legal opium processing factories in the world (the other is in Neemuch, MP), established during the British colonial period and still operating today to supply pharmaceutical-grade morphine and codeine. The Ganga ghats in Ghazipur are sacred, and the Gaharmau Dham temple complex draws pilgrims. Ghazipur was also the headquarters of Lord Cornwallis (British Governor-General), who is buried here in a landmark mausoleum. The district is known for its fresh rose cultivation in winter — fields of rose bushes supplying the perfume and ittar industry.</p>
<p>RedHeart delivers flowers across Ghazipur — Station Road, Civil Lines, Varanasi Road, and Gazipur Ghat area. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghazipur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Civil Lines, Varanasi Road, Ganga Ghat area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Ganga puja flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Ganga puja flowers available in Ghazipur?",
        answer: "Yes, marigold garlands, rose petals, and lotus for Ganga aarti and puja at the Ghazipur ghats are available. Same-day delivery to ghat-adjacent locations is possible."
      },
      {
        question: "Are local Ghazipur roses available for gifting?",
        answer: "Yes, Ghazipur is known for its rose cultivation fields. Fresh local roses and rose-based bouquets are available in Ghazipur, especially beautiful in the winter season."
      },
      {
        question: "Are Chhath Puja flowers available in Ghazipur?",
        answer: "Yes, the Ganga ghats in Ghazipur are a major Chhath Puja congregation point. Lotus and marigold for Chhath offerings are available — order 2 days in advance during the festival."
      }
    ]
  },

  "ballia": {
    cityName: "Ballia",
    metaTitle: "Flower Delivery in Ballia | Baghi Ballia | RedHeart",
    metaDescription: "Order flowers in Ballia, Uttar Pradesh. Same-day delivery near Ganges-Ghaghra doab & across Ballia town. From ₹399.",
    h1: "Online Flower Delivery in Ballia",
    metaKeyword: "flower delivery ballia, online flowers ballia up, florist ballia, flowers ballia baghi ganga ghaghra chhath",
    footerContent: `
<h2>Flower Delivery in Ballia — "Baghi Ballia" — The Rebellious District on the Ganges</h2>
<p>Ballia, at the eastern extremity of Uttar Pradesh where it meets Bihar, at the confluence of the Ganga and Ghaghra (Saryu) rivers, is popularly known as "Baghi Ballia" (Rebellious Ballia) for its spirited independence-movement history — it was one of the first districts to see a popular armed uprising against British rule in August 1942 (the Ballia Revolt), and it produced many freedom fighters including Mangal Pandey (who fired the first shot of the 1857 uprising at Barrackpore). The Ganga-Ghaghra doab (river island) is extremely fertile, producing mustard, wheat, and vegetables. The Chhath Puja at the Ganga and Ghaghra ghats in Ballia brings enormous crowds of devotees from across eastern UP and Bihar.</p>
<p>RedHeart delivers flowers across Ballia — Civil Lines, Bansdih Road, Rasra Road, and Station Road area. Our range includes roses, marigolds, lotus, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballia, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Bansdih Road, Rasra Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, lotus, roses, Chhath Puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Ballia?",
        answer: "Yes, Chhath Puja at the Ganga-Ghaghra confluence ghats in Ballia is one of the grandest in eastern UP. Lotus, marigold, and sugarcane Chhath offerings are available — order 2 days in advance."
      },
      {
        question: "Can I send roses to someone in Ballia for a birthday same day?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Ballia. Orders placed before 3 PM are delivered the same evening."
      },
      {
        question: "Do you deliver flowers to Rasra area near Ballia?",
        answer: "Rasra (about 30 km from Ballia) is in our extended zone. Please order before 12 PM for same-day delivery to Rasra."
      }
    ]
  },

  "lalitpur": {
    cityName: "Lalitpur",
    metaTitle: "Flower Delivery in Lalitpur | Bundelkhand | RedHeart",
    metaDescription: "Order flowers in Lalitpur, UP. Same-day delivery near Chanderi area & across Lalitpur town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Lalitpur",
    metaKeyword: "flower delivery lalitpur, online flowers lalitpur up, florist lalitpur, flowers lalitpur bundelkhand betwa river",
    footerContent: `
<h2>Flower Delivery in Lalitpur — Bundelkhand's Southernmost UP Town by the Betwa</h2>
<p>Lalitpur, in the southernmost part of Uttar Pradesh in the Bundelkhand region near the Madhya Pradesh border, is the district headquarters of Lalitpur district — a historically significant area on the Betwa River with notable medieval heritage. The town is at the edge of the Ken-Betwa river confluence landscape that supports the Panna Tiger Reserve across the MP border. The historic Chanderi weaving town (famous for its fine Chanderi silk sarees) and the Shivpuri wildlife sanctuary are within 100 km. Lalitpur's Bundelkhandi culture — known for Alha-Udal folk epics, Rai dance, and a fierce warrior tradition — gives the region a distinctive cultural identity. Devi temples and Bundela fort ruins are scattered through the district's landscape.</p>
<p>RedHeart delivers flowers across Lalitpur — Jhansi Road, Sagar Road, Civil Lines, and Station Road area. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhansi Road, Sagar Road, Civil Lines, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available in Lalitpur for Navratri and Devi temple puja?",
        answer: "Yes, Navratri is a major festival in Lalitpur's Bundelkhand culture with elaborately decorated Devi temples. Marigold and red hibiscus for Shakti puja are available."
      },
      {
        question: "Can I order flowers in Lalitpur for same-day delivery?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Lalitpur for orders placed before 3 PM."
      },
      {
        question: "Do you deliver to Chanderi area near Lalitpur?",
        answer: "Chanderi (about 70 km from Lalitpur) is across the Madhya Pradesh border. Chanderi delivery can be explored with our support team for extended arrangements."
      }
    ]
  },

  "hamirpur-up": {
    cityName: "Hamirpur",
    metaTitle: "Flower Delivery in Hamirpur UP | Same Day | RedHeart",
    metaDescription: "Order flowers in Hamirpur, Uttar Pradesh. Same-day delivery of roses & seasonal flowers across Hamirpur UP. From ₹399.",
    h1: "Online Flower Delivery in Hamirpur UP",
    metaKeyword: "flower delivery hamirpur up, online flowers hamirpur uttar pradesh, florist hamirpur, flowers hamirpur bundelkhand yamuna",
    footerContent: `
<h2>Flower Delivery in Hamirpur UP — Betwa-Yamuna Confluence in Bundelkhand</h2>
<p>Hamirpur, in Bundelkhand (Uttar Pradesh) at the confluence of the Betwa and Yamuna rivers, is a small district headquarters town whose location at this sacred river junction makes it important in the pilgrimage geography of the Betwa-Yamuna corridor. The Hamirpur district's landscape features the distinctive Vindhyan plateau — rocky, seasonally dry, with scrub forests alternating with deep river gorges. The town has historical connections to the Bundela Rajput rulers and their resistance to Mughal sovereignty in the 17th century, a tradition celebrated in the Alha-Udal folk ballads performed at local festivals. The district borders the Ken River basin to the south, home to the Ken-Betwa river link project area.</p>
<p>RedHeart delivers flowers across Hamirpur UP — Kanpur Road, Banda Road, Civil Lines, and Station Road. Our range includes roses, marigolds, seasonal Bundelkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanpur Road, Banda Road, Civil Lines, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Yamuna puja available in Hamirpur UP?",
        answer: "Yes, flowers for the Betwa-Yamuna confluence ghats in Hamirpur — marigolds, rose petals, and lotus — are available for river puja and bathing rituals."
      },
      {
        question: "Can I order a birthday bouquet in Hamirpur UP same day?",
        answer: "Yes, birthday and anniversary roses are available for same-day delivery in Hamirpur UP. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "Do you deliver flowers to Banda area from Hamirpur UP?",
        answer: "Banda (about 45 km from Hamirpur) is in our extended zone. Please order before 12 PM and mention the Banda destination when checking out."
      }
    ]
  },

  "hathras": {
    cityName: "Hathras",
    metaTitle: "Flower Delivery in Hathras | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Hathras, Uttar Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Hathras. From ₹399.",
    h1: "Online Flower Delivery in Hathras",
    metaKeyword: "flower delivery hathras, online flowers hathras up, florist hathras, flowers hathras mathura agra braj",
    footerContent: `
<h2>Flower Delivery in Hathras — Braj's Eastern Gateway on the Mathura Road</h2>
<p>Hathras, in western Uttar Pradesh between Mathura and Agra, sits in the Braj cultural zone — the sacred geography associated with Lord Krishna's life and the Radha-Krishna devotional tradition. The district has historically been an important textile and refining area, and is part of the industrial corridor linking Mathura's oil refinery to Agra's manufacturing belt. Hathras district's asafoetida (hing) and spice trade, its cotton and wheat cultivation, and its proximity to the Yamuna River make it a prosperous UP district. The nearby Yamuna River ghats and the Mathura pilgrimage circuit (just 50 km away) are accessible for devotees passing through Hathras.</p>
<p>RedHeart delivers flowers across Hathras — Station Road, Agra Road, Mathura Road, and Civil Lines area. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hathras, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Agra Road, Mathura Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Radha-Krishna puja flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Janmashtami available in Hathras?",
        answer: "Yes, Janmashtami is one of the grandest festivals in the Braj-adjacent Hathras area. Marigold garlands, lotus, and Radha-Krishna puja flower arrangements are available during the festival."
      },
      {
        question: "Can I send a birthday bouquet in Hathras same day?",
        answer: "Yes, birthday and anniversary roses are available for same-day delivery in Hathras for orders placed before 3 PM."
      },
      {
        question: "Do you deliver to Sadabad area near Hathras?",
        answer: "Sadabad (about 25 km from Hathras) is in our extended zone. Please order before 12 PM for same-day delivery to Sadabad."
      }
    ]
  },

  "etah": {
    cityName: "Etah",
    metaTitle: "Flower Delivery in Etah | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Etah, Uttar Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Etah town. From ₹399.",
    h1: "Online Flower Delivery in Etah",
    metaKeyword: "flower delivery etah, online flowers etah up, florist etah, flowers etah braj kalindi river",
    footerContent: `
<h2>Flower Delivery in Etah — Braj's Agra-Aligarh Corridor Heartland</h2>
<p>Etah, in western Uttar Pradesh between Agra and Farrukhabad on the Kalindi (Yamuna tributary) plain, is a district in the cultural zone where Braj (the sacred Radha-Krishna geography) meets the Kanauj corridor of historic North India. Etah produces significant quantities of mustard oil and wheat and is known for the Etah Mela (the annual fair) and for its proximity to the Kasganj Sheetla Mata temple (a major pilgrimage). The Kali Nadi and Isan River flow through the district, supporting its fertile agricultural landscape. Etah has literary significance — several notable Hindi and Braj Bhasha poets have come from this region, enriching the Braj Bhasha literary heritage.</p>
<p>RedHeart delivers flowers across Etah — Station Road, Agra Road, Aligarh Road, and Civil Lines. Our range includes roses, marigolds, seasonal Braj-region bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Etah, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Agra Road, Aligarh Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, puja flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Janmashtami available in Etah?",
        answer: "Yes, Etah's Braj cultural heritage means Janmashtami is an important local festival. Marigold garlands and Radha-Krishna puja flowers are available."
      },
      {
        question: "Can I order a birthday bouquet same day in Etah?",
        answer: "Yes, birthday and anniversary roses are available for same-day delivery in Etah. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "Do you deliver to Kasganj area near Etah?",
        answer: "Kasganj (about 30 km from Etah) is in our extended zone. Please order before 12 PM for same-day delivery to Kasganj."
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
