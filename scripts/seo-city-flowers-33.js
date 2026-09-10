// Batch 33 — 15 cities:
// Karnataka: Koppal, Haveri, Chikmagalur, Yadgir
// Tamil Nadu: Krishnagiri, Ramanathapuram, Virudhunagar, Perambalur, Tenkasi
// Maharashtra: Yavatmal, Parbhani, Osmanabad, Hingoli, Nandurbar, Wardha

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "koppal": {
    cityName: "Koppal",
    metaTitle: "Flower Delivery in Koppal | Same Day | RedHeart",
    metaDescription: "Order flowers in Koppal, Karnataka. Same-day delivery near Hampi & across Koppal town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Koppal",
    metaKeyword: "flower delivery koppal, online flowers koppal karnataka, florist koppal, flowers koppal hampi tungabhadra",
    footerContent: `
<h2>Flower Delivery in Koppal — North Karnataka Vijayanagara Country</h2>
<p>Koppal, in North Karnataka on the northern bank of the Tungabhadra River, is a district headquartered close to the historic Vijayanagara Empire heartland. The Hampi ruins (UNESCO World Heritage Site) are just 70 km from Koppal across the Tungabhadra River, and the Kuknoor and Kudalasangama temple complexes within Koppal district itself reflect the deep Shaivite heritage of the region. The Tungabhadra river valley supports significant cotton and sunflower cultivation in the semi-arid Deccan landscape. Koppal's Veerashaiva (Lingayat) tradition — the philosophical and social reforming tradition of Basavanna — is dominant in the local community. The Anjanadri Hill (believed to be Hanuman's birthplace) nearby adds further spiritual significance.</p>
<p>RedHeart delivers flowers across Koppal — Main Market, Gangavathi Road, Bellary Road, and Ginigera area. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koppal, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gangavathi Road, Bellary Road, Ginigera area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Ugadi festival available in Koppal?",
        answer: "Yes, Ugadi (Karnataka New Year) is a major festival in Koppal's Veerashaiva community. Marigold garlands and seasonal bouquets are available."
      },
      {
        question: "Can I get flowers near Hampi from Koppal?",
        answer: "Hampi is about 70 km from Koppal. For heritage resort deliveries near Hampi, please contact our support for the extended zone arrangement."
      },
      {
        question: "Do you deliver flowers same day in Koppal?",
        answer: "Yes, same-day delivery is available across Koppal for orders placed before 3 PM."
      }
    ]
  },

  "haveri": {
    cityName: "Haveri",
    metaTitle: "Flower Delivery in Haveri | Same Day | RedHeart",
    metaDescription: "Order flowers in Haveri, Karnataka. Same-day delivery of roses, bouquets & seasonal flowers across Haveri town. From ₹399.",
    h1: "Online Flower Delivery in Haveri",
    metaKeyword: "flower delivery haveri, online flowers haveri karnataka, florist haveri, flowers haveri north karnataka cotton",
    footerContent: `
<h2>Flower Delivery in Haveri — North Karnataka's Cotton and Sunflower Country</h2>
<p>Haveri, in North Karnataka between Dharwad and Davangere on the Dharwad plateau, is the headquarters of Haveri district — an agriculturally rich area where cotton, sunflower, and jowar (sorghum) dominate the landscape. The district lies in the transition zone between the Malaprabha and Tungabhadra basins and has the distinctive red laterite soil of the Deccan plateau. Haveri is in the Veerashaiva (Lingayat) cultural heartland of Karnataka, and the local festivals — Ugadi, Basavanna Jayanti, and the various Jatra (temple fair) seasons — are celebrated with great community participation. The Hangal Tarakeshwar temple and the Binkadakatti (a unique fort on the Tungabhadra) are local heritage landmarks.</p>
<p>RedHeart delivers flowers across Haveri — Station Road, Shiggaon Road, Savanur Road, and Main Market area. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haveri, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Shiggaon Road, Savanur Road, Main Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Ugadi in Haveri?",
        answer: "Yes, Ugadi is celebrated with great community spirit in Haveri. Marigold garlands and seasonal Karnataka bouquets are available for the festival."
      },
      {
        question: "Are flowers for Basavanna Jayanti available in Haveri?",
        answer: "Yes, Basavanna Jayanti is an important Lingayat community celebration in Haveri. Marigold and flower tributes are available for the occasion."
      },
      {
        question: "Do you deliver flowers same day in Haveri?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Haveri for orders placed before 3 PM."
      }
    ]
  },

  "chikmagalur": {
    cityName: "Chikmagalur",
    metaTitle: "Flower Delivery in Chikmagalur | Coffee Country | RedHeart",
    metaDescription: "Order flowers in Chikmagalur, Karnataka. Same-day delivery near Baba Budan Hills & across Chikmagalur. From ₹399.",
    h1: "Online Flower Delivery in Chikmagalur",
    metaKeyword: "flower delivery chikmagalur, online flowers chikmagalur karnataka, florist chikmagalur, flowers chikmagalur coffee western ghats",
    footerContent: `
<h2>Flower Delivery in Chikmagalur — Where Indian Coffee Was Born in the Baba Budan Hills</h2>
<p>Chikmagalur, in the Western Ghats of Karnataka at the foot of the Baba Budan mountain range, is the birthplace of Indian coffee — the 17th-century Sufi saint Baba Budan smuggled seven coffee beans from Mocha, Yemen, and planted them in the hills above Chikmagalur, where coffee has been grown ever since. Today Chikmagalur produces the finest Arabica and Robusta coffee estates in India, and the district's forest-coffee landscape — misty hills, waterfalls, and Bison reserve forests — is one of Karnataka's most beautiful. The Mullayanagiri peak (1930 metres, Karnataka's highest) and the Hoysala temples at Belur and Halebidu (accessible from Chikmagalur) make the region extraordinarily rich in both nature and heritage.</p>
<p>RedHeart delivers flowers across Chikmagalur — Coffee Board Road, Hassan Road, Kadur Road, and Mudigere area. We offer roses, seasonal Western Ghats bouquets, jasmine, and marigolds. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chikmagalur, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coffee Board Road, Hassan Road, Kadur Road, Mudigere area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, Western Ghats wildflowers, jasmine, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered to a coffee estate resort near Chikmagalur?",
        answer: "Yes, Chikmagalur's coffee estate homestays and hill resorts are within our delivery area. A flower arrangement for a coffee country stay or anniversary is a romantic gesture."
      },
      {
        question: "Are Western Ghats wildflowers available in Chikmagalur?",
        answer: "Yes, Chikmagalur's altitude and forest proximity mean we carry seasonal wildflowers including Strobilanthes and mountain blooms alongside standard roses and marigolds."
      },
      {
        question: "Are flowers available for Ugadi in Chikmagalur?",
        answer: "Yes, Ugadi is an important Karnataka festival. Marigold and seasonal bouquets for the New Year celebration are available in Chikmagalur."
      }
    ]
  },

  "yadgir": {
    cityName: "Yadgir",
    metaTitle: "Flower Delivery in Yadgir | Same Day | RedHeart",
    metaDescription: "Order flowers in Yadgir, Karnataka. Same-day delivery of roses, bouquets & seasonal flowers across Yadgir town. From ₹399.",
    h1: "Online Flower Delivery in Yadgir",
    metaKeyword: "flower delivery yadgir, online flowers yadgir karnataka, florist yadgir, flowers yadgir bhima river north karnataka",
    footerContent: `
<h2>Flower Delivery in Yadgir — Karnataka's Youngest District on the Bhima River</h2>
<p>Yadgir, in northeastern Karnataka at the border with Telangana and Andhra Pradesh, is one of Karnataka's newest districts (carved from Gulbarga/Kalaburagi in 2010). The district sits in the Bhima River basin — an area of black cotton soil extremely fertile for cotton, jowar, and sunflower cultivation. Yadgir is in the Kannada-Telugu linguistic overlap zone (similar to Kalaburagi), and the culture blends North Karnataka Veerashaiva traditions with Telangana Telugu influences. The Shahabad mines (the main limestone reserve for the cement corridor between Gulbarga and Yadgir), the Gurmitkal Kali temple, and the Sannati Chandrala Parameshwari temple are heritage and religious sites in the district.</p>
<p>RedHeart delivers flowers across Yadgir — Main Road, Gulbarga Road, Shahabad Road, and Railway Station area. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadgir, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Gulbarga Road, Shahabad Road, Railway Station</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Ugadi in Yadgir?",
        answer: "Yes, Ugadi is celebrated in Yadgir's Kannada-Telugu community. Marigold garlands and seasonal bouquets are available for the festival."
      },
      {
        question: "Are flowers for Bathukamma (Telangana festival) available in Yadgir?",
        answer: "Yes, given Yadgir's proximity to Telangana, Bathukamma flowers (tangedu and seasonal blooms) are available in the district's Telugu-speaking areas."
      },
      {
        question: "Do you deliver flowers same day in Yadgir?",
        answer: "Yes, same-day delivery is available across Yadgir for orders placed before 3 PM."
      }
    ]
  },

  "krishnagiri": {
    cityName: "Krishnagiri",
    metaTitle: "Flower Delivery in Krishnagiri | Same Day | RedHeart",
    metaDescription: "Order flowers in Krishnagiri, Tamil Nadu. Same-day delivery of roses, bouquets & seasonal flowers across Krishnagiri. From ₹399.",
    h1: "Online Flower Delivery in Krishnagiri",
    metaKeyword: "flower delivery krishnagiri, online flowers krishnagiri tamil nadu, florist krishnagiri, flowers krishnagiri mango tamil border",
    footerContent: `
<h2>Flower Delivery in Krishnagiri — Tamil Nadu's Mango Capital at the Karnataka Border</h2>
<p>Krishnagiri, in northwestern Tamil Nadu bordering Karnataka and Andhra Pradesh, is the headquarters of Krishnagiri district — a region known as one of India's premier mango-producing zones. The Bargur hills and the rocky upland plateau of the Krishnagiri area produce the famous Totapuri, Neelam, and Banganapalle mango varieties that are exported across India and internationally. Krishnagiri is also in a significant sericulture belt (silk cocoon production) and has a large textile printing industry. The Krishnagiri Dam (on the Ponnaiyar River) and the Krishnagiri Fort are local heritage landmarks. The district has significant Tamil, Kannada, and Telugu-speaking communities owing to its tri-state border position.</p>
<p>RedHeart delivers flowers across Krishnagiri — Hosur Road, Dharmapuri Road, Veppanahalli Road, and Civil Lines area. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnagiri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hosur Road, Dharmapuri Road, Veppanahalli Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Tamil Nadu bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Pongal available in Krishnagiri?",
        answer: "Yes, Pongal is one of the major festivals in Krishnagiri. Marigold kolam flowers and seasonal arrangements for the harvest festival are available."
      },
      {
        question: "Can I get jasmine in Krishnagiri for daily use?",
        answer: "Yes, jasmine (malligai) is one of the most popular flowers in Krishnagiri for daily puja and personal gifting. Fresh jasmine bunches are available throughout the year."
      },
      {
        question: "Do you deliver same day in Krishnagiri?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Krishnagiri for orders placed before 3 PM."
      }
    ]
  },

  "ramanathapuram": {
    cityName: "Ramanathapuram",
    metaTitle: "Flower Delivery in Ramanathapuram | Rameshwaram | RedHeart",
    metaDescription: "Order flowers in Ramanathapuram, Tamil Nadu. Same-day delivery near Rameshwaram & across Ramanathapuram. From ₹399.",
    h1: "Online Flower Delivery in Ramanathapuram",
    metaKeyword: "flower delivery ramanathapuram, online flowers ramanathapuram tamil nadu, florist ramanathapuram, flowers ramanathapuram rameshwaram pearl",
    footerContent: `
<h2>Flower Delivery in Ramanathapuram — Rameswaram's Gateway on the Palk Strait</h2>
<p>Ramanathapuram (Ramnad), the headquarters of Ramanathapuram district in southeastern Tamil Nadu, is the gateway to the Rameswaram island — one of the holiest pilgrimage sites in Hindu India and one of the four Dhams (sacred corners of India). The district's coast along the Gulf of Mannar and Palk Bay was historically India's premier pearl-diving region before the oyster beds declined. The Sethupathy rulers of Ramanathapuram were famous patrons of Tamil literature and dance, and the Ramnad palace (now a heritage building) reflects this artistic legacy. The Keezhadi archaeological site in the district has unearthed evidence of an advanced urban civilization from 600 BCE — one of Tamil Nadu's most significant archaeological discoveries.</p>
<p>RedHeart delivers flowers across Ramanathapuram — Main Road, Rameswaram Road, Paramakudi Road, and Manamadurai Road. We offer lotus, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramanathapuram, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Rameswaram Road, Paramakudi Road, Manamadurai Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigold garlands, jasmine, Ramaswamy puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Rameswaram Shiva temple puja available in Ramanathapuram?",
        answer: "Yes, lotus, bilva, and marigold for the Rameswaram Ramanathaswamy temple are popular offerings. We deliver to Ramanathapuram from where pilgrims complete their Rameswaram journey."
      },
      {
        question: "Can I get flowers for Thai Pongal in Ramanathapuram?",
        answer: "Yes, Pongal is widely celebrated in Ramanathapuram. Marigold kolam flowers and festive bouquets are available for the harvest festival."
      },
      {
        question: "Do you deliver flowers same day in Ramanathapuram?",
        answer: "Yes, same-day delivery is available across Ramanathapuram for orders placed before 3 PM."
      }
    ]
  },

  "virudhunagar": {
    cityName: "Virudhunagar",
    metaTitle: "Flower Delivery in Virudhunagar | Same Day | RedHeart",
    metaDescription: "Order flowers in Virudhunagar, Tamil Nadu. Same-day delivery of roses, bouquets & seasonal flowers across Virudhunagar. From ₹399.",
    h1: "Online Flower Delivery in Virudhunagar",
    metaKeyword: "flower delivery virudhunagar, online flowers virudhunagar tamil nadu, florist virudhunagar, flowers virudhunagar matchbox crackers nadar",
    footerContent: `
<h2>Flower Delivery in Virudhunagar — Home of the Nadar Community's Commercial Legacy</h2>
<p>Virudhunagar, in southern Tamil Nadu between Madurai and Tirunelveli, is the headquarters of Virudhunagar district — an area that is the historic homeland of the Nadar (Shanar) community, whose remarkable social and commercial transformation from palm-tree climbers (toddy tappers) to one of Tamil Nadu's most prosperous business communities is one of India's great social mobility stories. The Virudhunagar area's matchbox, safety pin, and fireworks industry (a precursor to the Sivakasi cluster) gave the district its industrial identity. The Arulmigu Ramasamy Periyakulam temple at Rajapalayam and the Srivilliputhur Andal temple (one of the 108 Divya Desams) in the district are important pilgrimage sites.</p>
<p>RedHeart delivers flowers across Virudhunagar — Gandhi Nagar, Sivakasi Road, Rajapalayam Road, and Sattur Road. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Virudhunagar, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Nagar, Sivakasi Road, Rajapalayam Road, Sattur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine strings, seasonal Tamil bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Srivilliputhur Andal temple available near Virudhunagar?",
        answer: "Yes, Srivilliputhur is about 30 km from Virudhunagar. Flowers for the Andal (Godadevi) temple including tulsi, marigold, and jasmine are available for pilgrims from Virudhunagar."
      },
      {
        question: "Can I order flowers for Diwali in Virudhunagar?",
        answer: "Yes, Diwali is an important festival in Virudhunagar given the fireworks industry connection. Marigold arrangements and festive bouquets are available."
      },
      {
        question: "Do you deliver same day in Virudhunagar?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Virudhunagar for orders placed before 3 PM."
      }
    ]
  },

  "perambalur": {
    cityName: "Perambalur",
    metaTitle: "Flower Delivery in Perambalur | Same Day | RedHeart",
    metaDescription: "Order flowers in Perambalur, Tamil Nadu. Same-day delivery of roses, bouquets & seasonal flowers across Perambalur. From ₹399.",
    h1: "Online Flower Delivery in Perambalur",
    metaKeyword: "flower delivery perambalur, online flowers perambalur tamil nadu, florist perambalur, flowers perambalur cement vellar",
    footerContent: `
<h2>Flower Delivery in Perambalur — Cement City on the Vellar River Plain</h2>
<p>Perambalur, in central Tamil Nadu on the Vellar River between Trichy and Vellore, is a small but industrially significant district headquarters. The district is one of India's major cement-producing zones — the Perambalur limestone belt supports the large Dalmia and India Cements plants that supply Tamil Nadu and the surrounding region. The Vellar River valley supports significant paddy and sugarcane cultivation. The Kunnam Senaikupathar tank and the famous Padalathri Subramaniya Swamy temple attract devotees. Perambalur's cultural life is deeply rooted in Tamil Saivite traditions, and the Karthigai Deepam and Vinayaka Chaturthi festivals are celebrated with elaborateness.</p>
<p>RedHeart delivers flowers across Perambalur — Trichy Road, Ariyalur Road, Kunnam area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Perambalur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Trichy Road, Ariyalur Road, Kunnam area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Tamil bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Karthigai Deepam available in Perambalur?",
        answer: "Yes, Karthigai Deepam (the Tamil lamp festival) is an important celebration in Perambalur. Marigold and jasmine arrangements for the lamp festival are available."
      },
      {
        question: "Can I send a birthday bouquet same day in Perambalur?",
        answer: "Yes, birthday and anniversary roses are available for same-day delivery in Perambalur for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Perambalur?",
        answer: "Yes, same-day delivery is available across Perambalur for orders placed before 3 PM."
      }
    ]
  },

  "tenkasi": {
    cityName: "Tenkasi",
    metaTitle: "Flower Delivery in Tenkasi | Courtallam Falls | RedHeart",
    metaDescription: "Order flowers in Tenkasi, Tamil Nadu. Same-day delivery near Courtallam falls & across Tenkasi town. From ₹399.",
    h1: "Online Flower Delivery in Tenkasi",
    metaKeyword: "flower delivery tenkasi, online flowers tenkasi tamil nadu, florist tenkasi, flowers tenkasi courtallam falls western ghats",
    footerContent: `
<h2>Flower Delivery in Tenkasi — Gateway to Courtallam, the Spa of South India</h2>
<p>Tenkasi, in the Tirunelveli district's western belt at the foot of the Western Ghats, is the gateway to Courtallam (Kutralam) — India's "Spa of South India," famous for its nine waterfalls that flow with medicated water (the Western Ghats flora enriches the water with therapeutic properties) and draw thousands of visitors during the monsoon bathing season (June-September). The Kasi Viswanathar temple in Tenkasi town is modelled on the Kashi (Varanasi) Vishwanath, and the town has a tradition of being an equivalent sacred city for devotees who cannot travel to Varanasi. The surrounding Western Ghats forests in the Tenkasi-Courtallam area support an extraordinary biodiversity including endemic bird species and medicinal plants.</p>
<p>RedHeart delivers flowers across Tenkasi — Courtallam Road, Tirunelveli Road, Station Road, and Sankarankoil Road. We offer roses, jasmine, tropical bouquets, and seasonal Tamil Nadu flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tenkasi, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Courtallam Road, Tirunelveli Road, Station Road, Sankarankoil Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine strings, tropical bouquets, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers near Courtallam waterfalls from Tenkasi?",
        answer: "Yes, Courtallam is just 6 km from Tenkasi. Flower deliveries to Courtallam guesthouse and spa hotel areas are available for same-day delivery."
      },
      {
        question: "Are tropical and monsoon flowers available in Tenkasi?",
        answer: "Yes, Tenkasi's Western Ghats proximity means we carry tropical flowers including anthuriums and hibiscus alongside standard roses and jasmine."
      },
      {
        question: "Are jasmine strings available in Tenkasi?",
        answer: "Yes, jasmine is extremely popular in the Tenkasi area for daily puja and personal use. Fresh jasmine strings are available throughout the year."
      }
    ]
  },

  "yavatmal": {
    cityName: "Yavatmal",
    metaTitle: "Flower Delivery in Yavatmal | Cotton Belt | RedHeart",
    metaDescription: "Order flowers in Yavatmal, Maharashtra. Same-day delivery of roses, bouquets & seasonal flowers across Yavatmal. From ₹399.",
    h1: "Online Flower Delivery in Yavatmal",
    metaKeyword: "flower delivery yavatmal, online flowers yavatmal maharashtra, florist yavatmal, flowers yavatmal cotton belt vidarbha",
    footerContent: `
<h2>Flower Delivery in Yavatmal — Vidarbha's Cotton-White Heartland</h2>
<p>Yavatmal, in eastern Maharashtra's Vidarbha region near Andhra Pradesh and Telangana borders, is the headquarters of Yavatmal district — one of India's most prominent cotton-producing districts and tragically known in recent decades for the farmer suicides crisis that has highlighted the acute distress of cotton farmers caught between rising input costs, unpredictable monsoons, and low market prices. The Vidarbha farmer's struggle has been documented extensively in journalism and literature, with Yavatmal as its symbolic centre. The Panchakki (water mill) and the ancient Markanda temple complex in the district are heritage sites. The Wun Wildlife Sanctuary and the Tipeshwar Tiger Reserve (shared with Telangana) add natural heritage to the region.</p>
<p>RedHeart delivers flowers across Yavatmal — Station Road, Pusad Road, Wardha Road, and Civil Lines. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yavatmal, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Pusad Road, Wardha Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Vidarbha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for Ganesh Chaturthi in Yavatmal?",
        answer: "Yes, Ganesh Chaturthi is one of the grandest festivals in Yavatmal's Vidarbha community. Marigold garlands, red hibiscus, and Ganesh puja flower sets are available."
      },
      {
        question: "Can I order flowers for Diwali in Yavatmal?",
        answer: "Yes, Diwali is widely celebrated in Yavatmal with rangoli and flower decorations. Marigold arrangements and festive bouquets are available."
      },
      {
        question: "Do you deliver flowers same day in Yavatmal?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Yavatmal for orders placed before 3 PM."
      }
    ]
  },

  "parbhani": {
    cityName: "Parbhani",
    metaTitle: "Flower Delivery in Parbhani | Marathwada | RedHeart",
    metaDescription: "Order flowers in Parbhani, Maharashtra. Same-day delivery of roses, bouquets & seasonal flowers across Parbhani. From ₹399.",
    h1: "Online Flower Delivery in Parbhani",
    metaKeyword: "flower delivery parbhani, online flowers parbhani maharashtra, florist parbhani, flowers parbhani marathwada godavari",
    footerContent: `
<h2>Flower Delivery in Parbhani — Marathwada's Railway Junction and Agricultural Hub</h2>
<p>Parbhani, in the Marathwada region of Maharashtra on the Godavari River's Purna tributary, is an important railway junction town that connects the Central Railway line to the South Central Railway network. The district is in the Marathwada plateau — the semi-arid region that was part of the Hyderabad Nizam's territory until 1956 and has a distinctive Hyderabadi-Maharashtrian cultural blend. Marathwada's cotton, soybean, and jowar cultivation is central to the district's agricultural identity. The Anjaneri Hill (associated with Hanuman's birthplace, different from the Nashik tradition), the Jintur Parmeshwar temple, and the Saundana Fort are heritage sites. Parbhani has a significant Ambedkarite Buddhist community.</p>
<p>RedHeart delivers flowers across Parbhani — Station Road, Nanded Road, Manwat Road, and Selu Road. Our range includes roses, marigolds, seasonal Marathwada bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Parbhani, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Nanded Road, Manwat Road, Selu Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Marathwada bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Ganesh Chaturthi available in Parbhani?",
        answer: "Yes, Ganesh Chaturthi is one of the biggest festivals in Parbhani's Marathi community. Marigold garlands and Ganesh puja flower sets are available."
      },
      {
        question: "Can I order flowers for Buddha Purnima in Parbhani?",
        answer: "Yes, Parbhani has a significant Buddhist Ambedkarite community. Lotus and white flowers for Buddha Purnima are available in Parbhani."
      },
      {
        question: "Do you deliver flowers same day in Parbhani?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Parbhani for orders placed before 3 PM."
      }
    ]
  },

  "osmanabad": {
    cityName: "Osmanabad",
    metaTitle: "Flower Delivery in Osmanabad (Dharashiv) | RedHeart",
    metaDescription: "Order flowers in Osmanabad (Dharashiv), Maharashtra. Same-day delivery near Tuljapur & across Osmanabad. From ₹399.",
    h1: "Online Flower Delivery in Osmanabad",
    metaKeyword: "flower delivery osmanabad, online flowers osmanabad maharashtra, florist osmanabad dharashiv, flowers osmanabad tuljapur tulja bhavani",
    footerContent: `
<h2>Flower Delivery in Osmanabad — Marathwada's Fortress Town Near Tulja Bhavani</h2>
<p>Osmanabad (officially renamed Dharashiv in 2023), in the Marathwada plateau of Maharashtra near Karnataka border, is a district historically known for the Osmanabad Fort (a 17th-century Adil Shahi construction later held by the Mughals and Hyderabad Nizam) and for being the gateway to the Tuljapur Tulja Bhavani temple — the presiding deity of the Marathas and Chhatrapati Shivaji's ishta devata (personal deity). The Tulja Bhavani is one of Maharashtra's three and a half Shakti peethas (Sava Shakti Peethas), drawing millions of pilgrims during Navratri. Osmanabad district's agricultural produce includes soybean and jowar; the Terna and Bhogavati rivers support its irrigation.</p>
<p>RedHeart delivers flowers across Osmanabad — Station Road, Tuljapur Road, Latur Road, and Civil Lines area. We offer roses, marigolds, red hibiscus (for Tulja Bhavani puja), and seasonal Marathwada bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Osmanabad (Dharashiv), Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Tuljapur Road, Latur Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigold garlands, Tulja Bhavani puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Tulja Bhavani temple puja available in Osmanabad?",
        answer: "Yes, red hibiscus (the preferred flower of Tulja Bhavani), marigold garlands, and Devi puja sets are our most popular offerings in Osmanabad, especially during Navratri."
      },
      {
        question: "Can I get flowers for Navratri in Osmanabad?",
        answer: "Yes, Navratri at Tuljapur draws lakhs of devotees from Osmanabad. Marigold and red hibiscus flower garlands for the nine-day festival are available — order in advance."
      },
      {
        question: "Do you deliver flowers same day in Osmanabad?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Osmanabad for orders placed before 3 PM."
      }
    ]
  },

  "hingoli": {
    cityName: "Hingoli",
    metaTitle: "Flower Delivery in Hingoli | Same Day | RedHeart",
    metaDescription: "Order flowers in Hingoli, Maharashtra. Same-day delivery near Aundha Nagnath & across Hingoli town. From ₹399.",
    h1: "Online Flower Delivery in Hingoli",
    metaKeyword: "flower delivery hingoli, online flowers hingoli maharashtra, florist hingoli, flowers hingoli aundha nagnath jyotirlinga",
    footerContent: `
<h2>Flower Delivery in Hingoli — Jyotirlinga Heartland of the Purna River Valley</h2>
<p>Hingoli, in the Marathwada plateau of Maharashtra, is the headquarters of Hingoli district — a region whose most important claim to spiritual distinction is the Aundha Nagnath temple, believed to be one of the twelve Jyotirlingas (the holiest forms of Lord Shiva in India). The Aundha Nagnath temple dates to the Hemadpanthi architectural tradition of the 13th-14th centuries and is one of Maharashtra's most architecturally significant Shiva temples. The Purna River flows through the district, and the agricultural landscape produces soybean, jowar, and cotton. Hingoli district was carved out of Nanded district in 1999.</p>
<p>RedHeart delivers flowers across Hingoli — Main Road, Nanded Road, Washim Road, and Basmat area. We offer roses, marigolds, bilva (for Shiva puja), and seasonal Marathwada bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hingoli, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Nanded Road, Washim Road, Basmat area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilva, marigold garlands, roses, Aundha Nagnath Shiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Aundha Nagnath Jyotirlinga puja available in Hingoli?",
        answer: "Yes, bilva leaves, dhatura (thorn apple), marigold, and lotus for the Aundha Nagnath Jyotirlinga are available in Hingoli. Delivered fresh to your accommodation before the temple visit."
      },
      {
        question: "Can I get flowers for Maha Shivratri in Hingoli?",
        answer: "Yes, Maha Shivratri sees a massive crowd at the Aundha Nagnath temple. Bilva and marigold puja offerings are available — order 2-3 days in advance for the festival period."
      },
      {
        question: "Do you deliver flowers same day in Hingoli?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Hingoli for orders placed before 3 PM."
      }
    ]
  },

  "wardha": {
    cityName: "Wardha",
    metaTitle: "Flower Delivery in Wardha | Gandhi's Sevagram | RedHeart",
    metaDescription: "Order flowers in Wardha, Maharashtra. Same-day delivery near Sevagram Ashram & across Wardha town. From ₹399.",
    h1: "Online Flower Delivery in Wardha",
    metaKeyword: "flower delivery wardha, online flowers wardha maharashtra, florist wardha, flowers wardha sevagram gandhi ashram cotton",
    footerContent: `
<h2>Flower Delivery in Wardha — Gandhi's Sevagram and the Heart of Vidarbha's Cotton Belt</h2>
<p>Wardha, in the Vidarbha region of Maharashtra, is where Mahatma Gandhi established the Sevagram Ashram in 1936 — making it the nerve centre of India's independence movement during the crucial 1936-1948 period. From Sevagram, Gandhi directed the Quit India Movement (1942) and the crucial negotiations of India's independence. The Magan Sangrahalaya (Gandhi's own cottage and the adjoining museums) and the Vinoba Bhave Ashram at Paunar (where Acharya Vinoba Bhave established his Bhoodan movement) are important pilgrimage sites for Gandhians worldwide. Wardha district is also a major cotton and orange-producing area, and the Wardha River (a Wainganga tributary) supports its agricultural landscape.</p>
<p>RedHeart delivers flowers across Wardha — Gandhi Road, Sevagram Road, Nagpur Road, and Civil Lines area. Our range includes roses, marigolds, seasonal Vidarbha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wardha, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Road, Sevagram Road, Nagpur Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Vidarbha bouquets, potted plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Gandhi Jayanti tribute at Sevagram Ashram in Wardha?",
        answer: "Yes, simple, respectful floral tributes for Gandhi Jayanti at the Sevagram Ashram are available. Marigold and white flower arrangements are appropriate for the occasion."
      },
      {
        question: "Are flowers for Ganesh Chaturthi available in Wardha?",
        answer: "Yes, Ganesh Chaturthi is one of Wardha's biggest community festivals. Marigold garlands and Ganesh puja flower sets are available for the festival."
      },
      {
        question: "Do you deliver flowers same day in Wardha?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Wardha for orders placed before 3 PM."
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
