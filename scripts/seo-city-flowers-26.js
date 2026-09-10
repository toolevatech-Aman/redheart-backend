// Batch 26 — 15 cities:
// AP: Anantapur, Srikakulam, Eluru, Chittoor, Bhimavaram
// Karnataka: Hassan, Vijayapura, Dharwad, Gadag, Bagalkot
// Tamil Nadu: Tiruvannamalai, Dharmapuri, Namakkal, Thoothukudi, Sivakasi

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "anantapur": {
    cityName: "Anantapur",
    metaTitle: "Flower Delivery in Anantapur | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Anantapur, Andhra Pradesh. Same-day roses, bouquets & seasonal flowers delivered across Anantapur. From ₹399.",
    h1: "Online Flower Delivery in Anantapur",
    metaKeyword: "flower delivery anantapur, online flowers anantapur ap, florist anantapur, flowers anantapur groundnut",
    footerContent: `
<h2>Flower Delivery in Anantapur — Groundnut Capital in Full Colour</h2>
<p>Anantapur, in the Rayalaseema region of southwestern Andhra Pradesh, is one of India's driest districts — lying in a rain-shadow zone that receives just 500 mm of rainfall annually. Yet from this parched red laterite soil, Anantapur produces a remarkable 30% of India's groundnut output, making it the "Peanut Capital of India." The city lies in historic Vijayanagara territory — the capital Hampi is just 75 km away — and Anantapur's culture retains the Kannada-Telugu linguistic blend of this ancient borderland. The Lepakshi temple nearby (with its famous hanging pillar and the world's largest monolithic Nandi) and the Puttaparthi (Sri Sathya Sai Baba's birthplace) attract visitors from across the world.</p>
<p>RedHeart delivers flowers across Anantapur — Subhash Road, Civil Lines, Hindupur Road, and Bellary Road. Our range includes roses, marigolds, seasonal AP bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anantapur, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Subhash Road, Civil Lines, Hindupur Road, Bellary Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal AP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to Puttaparthi area from Anantapur?",
        answer: "Puttaparthi (about 70 km from Anantapur) is in our extended zone. For devotional flower arrangements for Sri Sathya Sai Baba's ashram, please check availability and book in advance."
      },
      {
        question: "Are flowers for Ugadi available in Anantapur?",
        answer: "Yes, Ugadi (Telugu New Year) is a major celebration in Anantapur. Marigold and neem flower arrangements, and seasonal bouquets are popular around Ugadi."
      },
      {
        question: "Do you deliver flowers to Civil Lines in Anantapur same day?",
        answer: "Yes, Civil Lines is within our primary delivery zone. Same-day delivery is available for orders placed before 3 PM."
      }
    ]
  },

  "srikakulam": {
    cityName: "Srikakulam",
    metaTitle: "Flower Delivery in Srikakulam | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Srikakulam, Andhra Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Srikakulam. From ₹399.",
    h1: "Online Flower Delivery in Srikakulam",
    metaKeyword: "flower delivery srikakulam, online flowers srikakulam ap, florist srikakulam, flowers srikakulam north andhra",
    footerContent: `
<h2>Flower Delivery in Srikakulam — North Andhra's Coastal Cultural Hub</h2>
<p>Srikakulam, the headquarters of Srikakulam district on the northeastern coast of Andhra Pradesh near Odisha, is an ancient city with a deep history. Known historically as "Srikakula," it was a prominent Buddhist and Jain centre during the Ikshvaku and Pallava periods — the Salihundam Buddhist ruins nearby date to the 3rd century BCE. Srikakulam is the northernmost coastal district of Andhra Pradesh, sharing language and culture with both Odia and Kalinga traditions. The city's economy is primarily agricultural with rice, coconut, and cashew being major crops. The Arasavalli sun temple (one of only three sun temples in India) and the Srikurmam Vishnu temple are major religious landmarks that draw pilgrims from both AP and Odisha.</p>
<p>RedHeart delivers flowers across Srikakulam — Collectorate area, Ichapuram Road, Palasa Road, and Vizianagaram Road. We offer roses, marigolds, tropical coastal bouquets, and seasonal arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Srikakulam, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Collectorate area, Ichapuram Road, Palasa Road, Vizianagaram Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tropical coastal bouquets, puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for the Arasavalli Sun Temple puja in Srikakulam?",
        answer: "Yes, lotus flowers, marigold garlands, and sun temple-appropriate offerings are available in Srikakulam for Arasavalli temple visits. Delivered fresh to your accommodation."
      },
      {
        question: "Are flowers available in Srikakulam for Sankranti?",
        answer: "Yes, Sankranti is a major festival in Srikakulam district. Marigold and seasonal flower arrangements for Sankranti home decorations and puja are available."
      },
      {
        question: "Do you deliver to Palasa area near Srikakulam?",
        answer: "Palasa (about 50 km from Srikakulam) may be accessible in our extended zone. Please check at checkout or call for Palasa delivery confirmation."
      }
    ]
  },

  "eluru": {
    cityName: "Eluru",
    metaTitle: "Flower Delivery in Eluru | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Eluru, Andhra Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Eluru town. From ₹399.",
    h1: "Online Flower Delivery in Eluru",
    metaKeyword: "flower delivery eluru, online flowers eluru ap, florist eluru west godavari, flowers eluru handloom",
    footerContent: `
<h2>Flower Delivery in Eluru — Handloom City on the West Godavari Delta</h2>
<p>Eluru, the headquarters of Eluru district (formerly West Godavari district) in Andhra Pradesh, is a prosperous city at the edge of the fertile Godavari delta. Known as an important centre for the Pochampally ikat and Dharmavaram silk handloom weaving industries, Eluru has deep craft traditions that are celebrated by the Telugu people across India. The city lies between the dense palm-tree landscapes of the Godavari and Krishna delta — a landscape so lush and fertile that the "rice bowl of Andhra Pradesh" designation applies to this entire region. The Kondapalli fort and the Kolleru Lake Bird Sanctuary nearby make the Eluru district particularly scenic.</p>
<p>RedHeart delivers flowers across Eluru — K.L. Rao Road, Powerpet, Civil Lines, and Gudivada Road. We offer roses, marigolds, jasmine, seasonal Telugu bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">K.L. Rao Road, Powerpet, Civil Lines, Gudivada Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine strings, seasonal delta flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order jasmine flowers in Eluru?",
        answer: "Yes, jasmine (mallige in Telugu) is particularly popular in the Godavari delta region for both personal and puja use. Fresh jasmine bunches and jasmine-mixed bouquets are available in Eluru."
      },
      {
        question: "Are flowers available for Telugu festivals like Ugadi in Eluru?",
        answer: "Yes, Ugadi and other Telugu festivals are well-supported in Eluru. Marigold arrangements and seasonal floral décor are popular for the Telugu New Year."
      },
      {
        question: "Do you deliver to Powerpet area in Eluru?",
        answer: "Yes, Powerpet is within our primary delivery zone in Eluru. Same-day delivery is available for orders placed before 3 PM."
      }
    ]
  },

  "chittoor": {
    cityName: "Chittoor",
    metaTitle: "Flower Delivery in Chittoor | Same Day | RedHeart",
    metaDescription: "Order flowers in Chittoor, Andhra Pradesh. Same-day delivery near Tirumala, Tirupati & across Chittoor town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Chittoor",
    metaKeyword: "flower delivery chittoor, online flowers chittoor ap, florist chittoor, flowers chittoor mango city tirupati",
    footerContent: `
<h2>Flower Delivery in Chittoor — Mango Country Between Tirupati and Bangalore</h2>
<p>Chittoor, the headquarters of Chittoor district in southeastern Andhra Pradesh at the border with Tamil Nadu and Karnataka, is the mango capital of Andhra Pradesh — the district produces Banganapalle, Himayat, and Totapuri mangoes among India's most prized varieties. Situated between the Eastern Ghats and the Deccan Plateau, Chittoor's hilly terrain is ideal for mango orchards and the district's agricultural prosperity shows. The district shares its eastern boundary with the Tirumala-Tirupati hills — the world's most visited Hindu pilgrimage site — making Chittoor a pilgrim transit city. The city itself has a Telugu-Kannada cultural blend owing to its borderland position.</p>
<p>RedHeart delivers flowers across Chittoor — Tirupati Road, Madanapalle Road, Civil Lines, and Kuppam Road. Our catalogue includes roses, marigolds, jasmine (very popular in this region), and puja flower sets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chittoor, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupati Road, Madanapalle Road, Civil Lines, Kuppam Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, jasmine, roses, Tirupati puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers in Chittoor for Tirupati temple offerings?",
        answer: "Yes, marigold garlands, lotus, and jasmine for Tirumala Venkateswara temple visits are available in Chittoor. We deliver puja-ready flower sets to your accommodation before your hill journey."
      },
      {
        question: "Is jasmine available in Chittoor for delivery?",
        answer: "Yes, jasmine (mallige/jaaji) is especially popular in the Chittoor-Tirupati belt. Fresh jasmine bunches and jasmine garlands are available for personal use and puja."
      },
      {
        question: "Do you deliver to Madanapalle area near Chittoor?",
        answer: "Madanapalle (about 60 km from Chittoor town) is in our extended zone. Please check at checkout or call for Madanapalle delivery availability."
      }
    ]
  },

  "bhimavaram": {
    cityName: "Bhimavaram",
    metaTitle: "Flower Delivery in Bhimavaram | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Bhimavaram, Andhra Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Bhimavaram. From ₹399.",
    h1: "Online Flower Delivery in Bhimavaram",
    metaKeyword: "flower delivery bhimavaram, online flowers bhimavaram ap, florist bhimavaram west godavari, flowers bhimavaram",
    footerContent: `
<h2>Flower Delivery in Bhimavaram — The Godavari Delta's Commercial Heart</h2>
<p>Bhimavaram, in West Godavari district of Andhra Pradesh in the Krishna-Godavari delta, is one of the most prosperous towns in this rice-rich agricultural region. The city is named after the Bhimeshwara Swamy (Shiva) temple, and is an important commercial hub for the surrounding agricultural areas. The aquaculture industry — particularly prawn and fish farming in the backwaters and delta channels — has made Bhimavaram a city of growing economic clout. The nearby Mogalrajapuram caves and Mogalrajapuram Buddhist remains (near Vijayawada) speak to the region's ancient Buddhist heritage. The coastal Telugu culture here is among the most festival-oriented in Andhra, with Sankranti, Ugadi, and Sri Rama Navami all celebrated with elaborate flowers and decorations.</p>
<p>RedHeart delivers flowers across Bhimavaram — Eluru Road, Tanuku Road, Narsapur Road, and Old Town area. Our range includes roses, jasmine, marigolds, and seasonal Godavari delta bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhimavaram, West Godavari, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru Road, Tanuku Road, Narsapur Road, Old Town area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigold garlands, Sankranti flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are jasmine (mallige) flowers available in Bhimavaram?",
        answer: "Yes, jasmine is one of the most popular flowers in the Godavari delta region and is available in Bhimavaram for both personal and puja purposes."
      },
      {
        question: "Can I order flowers for Sankranti in Bhimavaram?",
        answer: "Yes, Sankranti is one of the grandest festivals in Bhimavaram. Marigold decorations, rangoli flower offerings, and festive bouquets are available. Order in advance during the peak festival season."
      },
      {
        question: "Do you deliver flowers to Tanuku area near Bhimavaram?",
        answer: "Tanuku (about 25 km from Bhimavaram) is in our extended delivery zone. Please place orders before 12 PM for same-day delivery to Tanuku."
      }
    ]
  },

  "hassan": {
    cityName: "Hassan",
    metaTitle: "Flower Delivery in Hassan | Hoysala Country | RedHeart",
    metaDescription: "Fresh flower delivery in Hassan, Karnataka. Same-day delivery near Belur, Halebidu & across Hassan town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Hassan",
    metaKeyword: "flower delivery hassan, online flowers hassan karnataka, florist hassan, flowers hassan hoysala belur halebidu",
    footerContent: `
<h2>Flower Delivery in Hassan — Gateway to the Hoysala Kingdom</h2>
<p>Hassan, in the foothills of the Western Ghats in Karnataka, is the gateway to the magnificent Hoysala temple complexes of Belur and Halebidu — two of India's most exquisitely carved medieval temples, known for their star-shaped platforms and densely detailed friezes of gods, elephants, and celestial dancers. Hassan district is also home to Shravanabelagola — one of the most important Jain pilgrimage sites in India, where the 18-metre monolithic statue of Gomateshwara (Bahubali) stands on a rocky hilltop and is anointed with milk, flowers, and saffron in the grand Mahamastakabhisheka festival held every 12 years. The Hassan district's coffee and spice plantations in the Sakleshpur Hills add an agricultural dimension to this culturally rich region.</p>
<p>RedHeart delivers flowers across Hassan — BM Road, Hoysala Road, Arsikere Road, and Sakleshpur Road. We offer roses, marigolds, jasmine, and seasonal Karnataka bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hassan, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">BM Road, Hoysala Road, Arsikere Road, Sakleshpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Hoysala heritage bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for the Mahamastakabhisheka at Shravanabelagola near Hassan?",
        answer: "Yes, flowers for the grand Bahubali Mahamastakabhisheka are available from Hassan. Marigolds, roses, and sacred flowers are used in the abhisheka ritual — we deliver to Hassan town from where devotees carry them to Shravanabelagola."
      },
      {
        question: "Are Jain Paryushan flowers available in Hassan?",
        answer: "Yes, white roses, mogra (jasmine), and vegetarian-appropriate flowers for Jain Paryushan are available in Hassan. We are sensitive to Jain floral traditions."
      },
      {
        question: "Do you deliver flowers to the Belur or Halebidu temple areas near Hassan?",
        answer: "Belur is 35 km and Halebidu is 30 km from Hassan town. Extended delivery to these towns can be arranged — please order before 12 PM and mention the destination."
      }
    ]
  },

  "vijayapura": {
    cityName: "Vijayapura",
    metaTitle: "Flower Delivery in Vijayapura (Bijapur) | RedHeart",
    metaDescription: "Order fresh flowers in Vijayapura (Bijapur), Karnataka. Same-day delivery near Gol Gumbaz & across Vijayapura town. Roses from ₹399.",
    h1: "Online Flower Delivery in Vijayapura",
    metaKeyword: "flower delivery vijayapura, online flowers bijapur karnataka, florist vijayapura, flowers vijayapura gol gumbaz",
    footerContent: `
<h2>Flower Delivery in Vijayapura — Adil Shahi Splendour in Full Bloom</h2>
<p>Vijayapura (formerly Bijapur), in northern Karnataka, is one of India's most underrated architectural gems — the former capital of the Adil Shahi Sultanate (1490–1686) whose legacy includes the magnificent Gol Gumbaz (one of the world's largest domes), the Ibrahim Roza (Taj Mahal's architectural precursor), and numerous mosques, tombs, and palaces that give the city a distinctly Persian-influenced grandeur. The Gol Gumbaz's "Whispering Gallery" — where the faintest sound whispered at one corner of the dome can be heard across the vast chamber — is one of India's most extraordinary architectural experiences. Vijayapura's culture blends Kannada and Urdu traditions, and its thriving pomegranate orchards make it one of Karnataka's most distinctive agricultural cities.</p>
<p>RedHeart delivers flowers across Vijayapura — Gol Gumbaz Road, Station Road, Civil Lines, and Ittagi Road. We offer roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijayapura (Bijapur), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gol Gumbaz Road, Station Road, Civil Lines, Ittagi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, heritage-inspired seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to a heritage hotel near Gol Gumbaz in Vijayapura?",
        answer: "Yes, hotels and heritage properties near Gol Gumbaz are within our delivery zone. A bouquet for a heritage stay anniversary or romantic trip can be arranged."
      },
      {
        question: "Are flowers available for Eid celebrations in Vijayapura?",
        answer: "Yes, Vijayapura has a significant Muslim community and Eid celebrations here are elaborate. Rose bouquets and jasmine garlands are popular Eid gifts."
      },
      {
        question: "Do you deliver flowers in Vijayapura for Ugadi festival?",
        answer: "Yes, Ugadi (Karnataka and Telugu New Year) is celebrated in Vijayapura. Marigold and seasonal flower arrangements for Ugadi are available."
      }
    ]
  },

  "dharwad": {
    cityName: "Dharwad",
    metaTitle: "Flower Delivery in Dharwad | Same Day | RedHeart",
    metaDescription: "Order flowers in Dharwad, Karnataka. Same-day delivery near Hubli & across Dharwad town. Famous for Dharwad peda. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Dharwad",
    metaKeyword: "flower delivery dharwad, online flowers dharwad karnataka, florist dharwad, flowers dharwad peda music",
    footerContent: `
<h2>Flower Delivery in Dharwad — City of Music, Learning, and Pedas</h2>
<p>Dharwad, the cultural twin of Hubli in North Karnataka, is one of Karnataka's most intellectually distinguished cities. The Karnataka University (established 1949), the Karnatak College (one of the oldest in Karnataka), and the remarkable Dharwad tradition of Hindustani classical music — which gave India maestros like Pandit Mallikarjun Mansur, Gangubai Hangal, and Basavaraj Rajguru — make Dharwad a city of exceptional cultural depth. The famous Dharwad peda (a milk-based sweet made with a unique strain of Dharwad khoya) is a GI-tagged product beloved across India. The Siddheshwar Shiva temple and the Nrupatunga hill park are beloved local landmarks.</p>
<p>RedHeart delivers flowers across Dharwad — PB Road, Railway Colony, Jubilee Circle, and Kengunte. Our range includes roses, marigolds, jasmine, and seasonal North Karnataka bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharwad, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">PB Road, Railway Colony, Jubilee Circle, Kengunte</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, North Karnataka seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Karnataka music concerts or events in Dharwad?",
        answer: "Yes, floral tributes and stage bouquets for Hindustani classical music concerts are a beautiful tradition in Dharwad. We offer large and premium arrangements for stage gifting."
      },
      {
        question: "Do you deliver flowers to Karnataka University campus in Dharwad?",
        answer: "Yes, the Karnataka University campus area is within our delivery zone. Convocation bouquets, farewell flowers, and celebration arrangements are all available."
      },
      {
        question: "Are flowers available in Dharwad for Ugadi celebrations?",
        answer: "Yes, Ugadi is one of Karnataka's biggest festivals. Marigold garlands, seasonal arrangements, and traditional flower offerings are available in Dharwad."
      }
    ]
  },

  "gadag": {
    cityName: "Gadag",
    metaTitle: "Flower Delivery in Gadag | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Gadag-Betageri, Karnataka. Same-day delivery of roses, bouquets & seasonal flowers across Gadag. Starting ₹399.",
    h1: "Online Flower Delivery in Gadag",
    metaKeyword: "flower delivery gadag, online flowers gadag karnataka, florist gadag betageri, flowers gadag north karnataka",
    footerContent: `
<h2>Flower Delivery in Gadag — Ancient Chalukya Country in Bloom</h2>
<p>Gadag-Betageri, a twin-city in North Karnataka in the heart of the Tungabhadra river basin, sits in the historic Chalukya-Kalyani cultural zone. The area's medieval heritage is extraordinary: the Trikuteshwara temple complex in Gadag dates to the 11th-12th century Kalyani Chalukya period and features some of the finest stone sculptures in Deccan India. The region's dry landscape yields cotton, sunflower, and chilies, and Gadag is known for its cotton textile market. The Gadag Khadi Gramodyog (handloom industry) continues the Gandhian tradition of cottage industry. The city's cultural life is defined by Veerashaiva (Lingayat) traditions, and the Basavanna Jayanti is a major annual celebration.</p>
<p>RedHeart delivers flowers across Gadag — Station Road, Betageri, Shirahatti Road, and Mundaragi Road. Our catalogue includes roses, marigolds, seasonal Karnataka bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gadag, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Betageri, Shirahatti Road, Mundaragi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Basavanna Jayanti in Gadag?",
        answer: "Yes, Basavanna Jayanti (birthday of the Lingayat saint-philosopher) is an important celebration in Gadag's Veerashaiva community. Floral tributes and arrangements are available."
      },
      {
        question: "Do you deliver to Betageri area in Gadag?",
        answer: "Yes, Betageri is the twin city of Gadag and is within our delivery zone. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Are flowers available for weddings in Gadag?",
        answer: "Yes, wedding garlands, varmala sets, and Karnataka-style floral decorations are available in Gadag. For large wedding orders, we recommend booking 2–3 days in advance."
      }
    ]
  },

  "bagalkot": {
    cityName: "Bagalkot",
    metaTitle: "Flower Delivery in Bagalkot | Same Day | RedHeart",
    metaDescription: "Order flowers in Bagalkot, Karnataka. Same-day delivery near Pattadakal, Aihole & across Bagalkot town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Bagalkot",
    metaKeyword: "flower delivery bagalkot, online flowers bagalkot karnataka, florist bagalkot, flowers bagalkot pattadakal aihole",
    footerContent: `
<h2>Flower Delivery in Bagalkot — Cradle of Chalukya Architecture</h2>
<p>Bagalkot, in northern Karnataka on the Ghataprabha River, is the district headquarters of one of India's most extraordinary archaeological regions. The Pattadakal group of temples — a UNESCO World Heritage Site featuring early Chalukya and Rashtrakuta temples of the 7th–8th centuries — and the Aihole temple complex (over 100 temples in a single village, often called the "cradle of Indian temple architecture") are just 30–45 km from Bagalkot. The nearby Mahakuta temple and the Badami cave temples (30 km away) complete a circuit of ancient Hindu and Jain heritage unparalleled in this region. Bagalkot's sugarcane and cotton economy reflects the fertile Ghataprabha-Malaprabha interfluve landscape.</p>
<p>RedHeart delivers flowers across Bagalkot — Navanagar area, Station Road, Civil Lines, and Badami Road. We offer roses, marigolds, seasonal Karnataka bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bagalkot, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navanagar area, Station Road, Civil Lines, Badami Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered to heritage hotels near Pattadakal?",
        answer: "Yes, heritage hotel deliveries near Pattadakal (about 45 km from Bagalkot) can be arranged with advance notice. Please call our support for bookings to Pattadakal or Aihole."
      },
      {
        question: "Are flowers available in Bagalkot near Badami cave temples?",
        answer: "Badami is about 30 km from Bagalkot. We deliver to Bagalkot town and may extend to Badami on request. Call our team for Badami cave temple area delivery."
      },
      {
        question: "Do you deliver flowers to Navanagar area in Bagalkot?",
        answer: "Yes, Navanagar is one of the primary residential areas in Bagalkot and is well within our delivery zone. Same-day delivery for orders placed before 3 PM."
      }
    ]
  },

  "tiruvannamalai": {
    cityName: "Tiruvannamalai",
    metaTitle: "Flower Delivery in Tiruvannamalai | Annamalai Temple | RedHeart",
    metaDescription: "Order fresh flowers in Tiruvannamalai, Tamil Nadu. Same-day delivery for Annamalai Shiva temple, Ramana Ashram & all areas. From ₹399.",
    h1: "Online Flower Delivery in Tiruvannamalai",
    metaKeyword: "flower delivery tiruvannamalai, online flowers tiruvannamalai tamil nadu, florist tiruvannamalai, flowers annamalai temple ramana ashram",
    footerContent: `
<h2>Flower Delivery in Tiruvannamalai — Sacred Fire Hill of the Shiva Devotees</h2>
<p>Tiruvannamalai, at the foot of the sacred Annamalai Hill in Tamil Nadu, is one of the holiest Shaivite cities in India — home to the Annamalaiyar temple (dedicated to Lord Shiva as the element of Fire) which is one of the Pancha Bhuta Stalas. The Karthigai Deepam festival held here every year (when a flame is lit atop Annamalai Hill visible for miles around) draws hundreds of thousands of devotees from across the world. Tiruvannamalai is also the seat of Sri Ramana Maharshi's ashram (Sri Ramanasramam) — the 20th-century Advaita sage whose teachings on self-inquiry attracted a global spiritual community that continues to this day. The Girivalam (circumambulation of the Annamalai Hill) along a 14-km path is performed by thousands of devotees every full moon night.</p>
<p>RedHeart delivers flowers across Tiruvannamalai — Ramana Nagar, Polur Road, Arani Road, and Temple Street area. Marigold garlands, bilva patra, and puja flowers are our most popular offerings. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruvannamalai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramana Nagar, Polur Road, Arani Road, Temple Street</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, bilva, lotus, puja sets, jasmine strings</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order marigold garlands for Annamalaiyar temple darshan in Tiruvannamalai?",
        answer: "Yes, marigold garlands, bilva leaves, and fresh lotus for the Annamalaiyar Shiva temple are our most popular offerings in Tiruvannamalai. Delivered fresh to your accommodation before darshan."
      },
      {
        question: "Are flowers available at Ramana Ashram (Sri Ramanasramam) in Tiruvannamalai?",
        answer: "Yes, devotional flowers for Ramana Maharshi's ashram are available including jasmine strings and marigold garlands. We deliver to the Ramanasramam area."
      },
      {
        question: "What flowers are offered during Karthigai Deepam in Tiruvannamalai?",
        answer: "During Karthigai Deepam, marigolds, lotus, and jasmine are offered in enormous quantities at the temple. Demand is very high — order 2–3 days in advance for the festival delivery."
      }
    ]
  },

  "dharmapuri": {
    cityName: "Dharmapuri",
    metaTitle: "Flower Delivery in Dharmapuri | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Dharmapuri, Tamil Nadu. Same-day delivery of roses, bouquets & seasonal flowers across Dharmapuri town. From ₹399.",
    h1: "Online Flower Delivery in Dharmapuri",
    metaKeyword: "flower delivery dharmapuri, online flowers dharmapuri tamil nadu, florist dharmapuri, flowers dharmapuri hosur",
    footerContent: `
<h2>Flower Delivery in Dharmapuri — Tamil Nadu's Northern District Centre</h2>
<p>Dharmapuri, in northwestern Tamil Nadu near the borders of Karnataka and Andhra Pradesh, is a district known primarily for its mango orchards — the Banganapalle and Alphonso varieties grow in large numbers in the rocky, boulder-studded landscape of the Dharmapuri plateau. The city has a strong industrial base with steel and textile mills, and is an important road junction linking Salem, Krishnagiri, and Bangalore. The Hogenakkal Falls on the Kaveri River — just 45 km from Dharmapuri town — is one of Tamil Nadu's most visited waterfalls, famous for its medicinal bathing (coracle boat rides in the mineral-rich water). The Kaveri River valley near Dharmapuri supports rich agricultural land where jasmine and marigold are cultivated alongside mangoes.</p>
<p>RedHeart delivers flowers across Dharmapuri — Pennagaram Road, Salem Road, Krishnagiri Road, and Civil Lines area. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharmapuri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pennagaram Road, Salem Road, Krishnagiri Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Tamil Nadu bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers in Dharmapuri for Tamil festivals like Pongal?",
        answer: "Yes, Pongal is one of the most important festivals in Dharmapuri. Marigold kolam flowers, sugarcane arrangements, and seasonal Pongal bouquets are available."
      },
      {
        question: "Do you deliver flowers near Hogenakkal Falls area from Dharmapuri?",
        answer: "Hogenakkal (45 km away) may be accessible in our extended zone. Please contact our support for delivery confirmation to the Hogenakkal area."
      },
      {
        question: "Are flowers available in Dharmapuri throughout the year?",
        answer: "Yes, we maintain fresh flower stock throughout the year in Dharmapuri. Roses, marigolds, and jasmine are always available; seasonal varieties change monthly."
      }
    ]
  },

  "namakkal": {
    cityName: "Namakkal",
    metaTitle: "Flower Delivery in Namakkal | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Namakkal, Tamil Nadu. Same-day delivery of roses, bouquets & seasonal flowers across Namakkal. Starting ₹399.",
    h1: "Online Flower Delivery in Namakkal",
    metaKeyword: "flower delivery namakkal, online flowers namakkal tamil nadu, florist namakkal, flowers namakkal eggs poultry",
    footerContent: `
<h2>Flower Delivery in Namakkal — Poultry Capital and the Rock Fort City</h2>
<p>Namakkal, in central Tamil Nadu on the banks of the Kaveri tributary, is a city of surprising superlatives. It is India's largest egg-producing district — Namakkal's poultry industry produces over 3 crore eggs daily, supplying much of Tamil Nadu, Kerala, and neighbouring states. The district is also the nation's leading producer of transport vehicles (trucks and buses), home to a cluster of TATA and Ashok Leyland body-building workshops. Namakkal's cultural landmark is the Namakkal Fort — a steep rock formation rising 200 metres from the plains with the Anjaneyar (Hanuman) temple at its base, where the deity is depicted in a unique "Narasimha pressing on Hiranyakashyap" tableau that is one of Tamil Nadu's more unusual iconographic forms.</p>
<p>RedHeart delivers flowers across Namakkal — Fort area, Salem Road, Tiruchengode Road, and Senthamarai Nagar. Our catalogue includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Namakkal, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fort area, Salem Road, Tiruchengode Road, Senthamarai Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Anjaneyar (Hanuman) temple puja available in Namakkal?",
        answer: "Yes, flowers for the Namakkal Anjaneyar temple are among our popular offerings. Marigold garlands and jasmine strings for Hanuman puja are available for delivery to your doorstep."
      },
      {
        question: "Can I send a bouquet to someone in Namakkal same day?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Namakkal. Orders placed before 3 PM are delivered the same evening."
      },
      {
        question: "Do you deliver to Tiruchengode area near Namakkal?",
        answer: "Tiruchengode (about 20 km from Namakkal) is in our extended delivery zone. Please order before 12 PM for same-day delivery to Tiruchengode."
      }
    ]
  },

  "thoothukudi": {
    cityName: "Thoothukudi",
    metaTitle: "Flower Delivery in Thoothukudi (Tuticorin) | RedHeart",
    metaDescription: "Order flowers in Thoothukudi (Tuticorin), Tamil Nadu. Same-day delivery near Pearl City port & across Thoothukudi. Starting ₹399.",
    h1: "Online Flower Delivery in Thoothukudi",
    metaKeyword: "flower delivery thoothukudi, online flowers tuticorin tamil nadu, florist thoothukudi, flowers thoothukudi pearl city",
    footerContent: `
<h2>Flower Delivery in Thoothukudi — Pearl City on the Gulf of Mannar</h2>
<p>Thoothukudi (Tuticorin), on the southeastern coast of Tamil Nadu facing the Gulf of Mannar, was historically one of India's premier pearl-diving ports — hence its name "Pearl City." The port's now-protected pearl oyster beds in the Mannar Marine National Park (which includes the chain of islands stretching to Sri Lanka) support extraordinary biodiversity including dugongs and sea turtles. The Thoothukudi port (V.O. Chidambaranar Port) is one of India's major deep-water ports handling cargo to Sri Lanka, the Gulf, and Southeast Asia. The Panchalankurichi fort nearby commemorates Kattabomman — the Polygar chief who led an early armed revolt against British rule in 1799 and is celebrated as a hero of Tamil history.</p>
<p>RedHeart delivers flowers across Thoothukudi — VE Road, Millerpuram, Kovilpatti Road, and Ovari area. Our range includes roses, tropical coastal bouquets, marigolds, and jasmine. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thoothukudi (Tuticorin), Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">VE Road, Millerpuram, Kovilpatti Road, Ovari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tropical coastal bouquets, jasmine, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are tropical flowers available in Thoothukudi?",
        answer: "Yes, Thoothukudi's coastal tropical environment means we carry anthuriums, heliconia, and other coastal flowers alongside roses and marigolds. Tropical arrangements are a popular choice here."
      },
      {
        question: "Can I send flowers to someone near the Thoothukudi port area?",
        answer: "Yes, the VE Road and port area are within our delivery zone. Corporate and personal flower deliveries to the port township area are available."
      },
      {
        question: "Are flowers available for Tamil festivals like Pongal and Karthigai in Thoothukudi?",
        answer: "Yes, marigold kolam flowers for Pongal and lamp-festival arrangements for Karthigai Deepam are available in Thoothukudi. Order in advance during peak festival times."
      }
    ]
  },

  "sivakasi": {
    cityName: "Sivakasi",
    metaTitle: "Flower Delivery in Sivakasi | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Sivakasi, Tamil Nadu. Same-day delivery of roses, bouquets & seasonal flowers across Sivakasi. Starting ₹399.",
    h1: "Online Flower Delivery in Sivakasi",
    metaKeyword: "flower delivery sivakasi, online flowers sivakasi tamil nadu, florist sivakasi, flowers sivakasi fireworks printing",
    footerContent: `
<h2>Flower Delivery in Sivakasi — Fireworks Capital Where Flowers Also Light Up</h2>
<p>Sivakasi, in Virudhunagar district of Tamil Nadu, is one of India's most unique industrial towns — accounting for 90% of India's safety match production, 80% of its fireworks, and a significant share of its offset printing industry. This unlikely combination makes Sivakasi the "Little Japan of India" as it is often called — a reference to Japan's post-war industrial specialisation. The fireworks industry (which produces the crackers for Diwali and other festivals across India) employs thousands of workers in hundreds of small factories. The Pillayarpatty Ganesh temple (housing a large monolithic Vinayaka carved from natural rock) is a major pilgrimage site nearby, and Sivakasi's Tamil culture around Pongal and Diwali is particularly vibrant.</p>
<p>RedHeart delivers flowers across Sivakasi — South Car Street, Aruppukottai Road, Sattur Road, and Virudhunagar Road. Our catalogue includes roses, jasmine, marigolds, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sivakasi, Virudhunagar, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">South Car Street, Aruppukottai Road, Sattur Road, Virudhunagar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, Diwali floral arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available in Sivakasi for Diwali gifting?",
        answer: "Yes, Sivakasi celebrates Diwali as one of the most important festivals given the fireworks industry connection. Marigold arrangements, rose gift boxes, and Diwali flower sets are popular."
      },
      {
        question: "Can I order jasmine flowers in Sivakasi?",
        answer: "Yes, jasmine (malligai) is one of the most popular flowers in Sivakasi for both daily puja and gifting. Fresh jasmine bunches are available throughout the year."
      },
      {
        question: "Are flowers available near Pillayarpatty temple area near Sivakasi?",
        answer: "Pillayarpatty (about 15 km from Sivakasi) is in our extended zone. Ganesh puja flowers including marigolds and red flowers are available for delivery. Please order before 12 PM."
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
