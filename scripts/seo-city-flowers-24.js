// Batch 24 — 15 cities: Bihar: Sasaram, Arrah, Chapra, Hajipur, Motihari, Bettiah,
// Madhubani, Purnia, Katihar, Sitamarhi
// Odisha: Berhampur, Balasore, Baripada, Koraput, Bhadrak

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "sasaram": {
    cityName: "Sasaram",
    metaTitle: "Flower Delivery in Sasaram | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Sasaram, Bihar. Same-day delivery near Sher Shah Suri's tomb & across Sasaram town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Sasaram",
    metaKeyword: "flower delivery sasaram, online flowers sasaram bihar, florist sasaram, flowers sher shah suri tomb sasaram",
    footerContent: `
<h2>Flower Delivery in Sasaram — City of the Grand Trunk Road's Architect</h2>
<p>Sasaram, the headquarters of Rohtas district in southern Bihar, holds a unique place in India's history as the birthplace and mausoleum city of Sher Shah Suri — the Afghan ruler who briefly displaced the Mughal empire and built the Grand Trunk Road (GT Road) that still connects Kabul to Chittagong. His octagonal mausoleum rising from an artificial lake in Sasaram is considered one of India's finest examples of Afghan architecture — predating and influencing the Mughal architectural style. Sasaram is also near the Kaimur hill range with its dense forests and the Telhar waterfall. The city's local culture is defined by the Bhojpuri and Magahi languages, with Chhath Puja being the most important annual festival.</p>
<p>RedHeart delivers flowers across Sasaram — Civil Lines, Station Road, Arwal Road, and Dehri-on-Sone Road. We offer roses, marigolds, seasonal bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sasaram, Rohtas, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Arwal Road, Dehri-on-Sone Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds for Chhath, roses, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Sasaram?",
        answer: "Yes, lotus flowers, marigolds, and seasonal Chhath offerings are available in Sasaram. Demand is highest during Chhath — order 1–2 days in advance during this festival."
      },
      {
        question: "Can I visit Sher Shah Suri's tomb and get flowers delivered nearby in Sasaram?",
        answer: "Yes, we deliver to hotels and lodges in Sasaram town. Flowers for historic site visits or personal occasions are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers to Dehri-on-Sone area near Sasaram?",
        answer: "Dehri-on-Sone is about 15 km from Sasaram and is covered under our extended delivery zone. Please place orders by 12 PM for same-day delivery to Dehri."
      }
    ]
  },

  "arrah": {
    cityName: "Arrah",
    metaTitle: "Flower Delivery in Arrah | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Arrah, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Arrah town. Starting ₹399.",
    h1: "Online Flower Delivery in Arrah",
    metaKeyword: "flower delivery arrah, online flowers arrah bihar, florist arrah, flowers arrah bhojpur",
    footerContent: `
<h2>Flower Delivery in Arrah — Bhojpur's District Capital on the Ganga Plain</h2>
<p>Arrah (Ara), the headquarters of Bhojpur district in western Bihar, is a city of quiet historical distinction. The Arrah House (also called the Little House at Arrah) was the site of a famous 1857 Rebellion siege where a small group of British officials held out against thousands of sepoy rebels for days — a story that became legendary in colonial accounts. Arrah lies in the heart of the Bhojpuri-speaking belt where the great folk music and dance tradition originated. The city's economy is agricultural, with the Ganga plain yielding rice, wheat, and vegetables. Chhath Puja here is a deeply communal event with the Sone River providing a sacred bathing ghat for thousands of devotees.</p>
<p>RedHeart delivers flowers across Arrah — Collectorate Road, Civil Lines, Jagdishpur Road, and Buxar Road. Our range includes roses, marigolds, seasonal mixed bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arrah, Bhojpur, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Collectorate Road, Civil Lines, Jagdishpur Road, Buxar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds for Chhath, roses, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Arrah for Chhath Puja at Sone ghat?",
        answer: "Yes, Chhath flowers including lotus, marigolds, and seasonal offerings are available in Arrah. Given the high demand during Chhath, we recommend ordering 1–2 days in advance."
      },
      {
        question: "Can I send roses to a loved one in Arrah, Bihar same day?",
        answer: "Yes, same-day delivery is available in Arrah for orders placed before 3 PM. Red and pink roses are the most popular choices for personal gifting."
      },
      {
        question: "Are flowers available in Arrah for Diwali or Holi?",
        answer: "Yes, marigold torans for Diwali and colourful flower bouquets for Holi gifts are available in Arrah. Festival arrangements can be ordered with seasonal themes."
      }
    ]
  },

  "chapra": {
    cityName: "Chapra",
    metaTitle: "Flower Delivery in Chapra | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Chapra (Chhapra), Bihar. Same-day delivery of roses, bouquets & Chhath puja flowers across Chapra. From ₹399.",
    h1: "Online Flower Delivery in Chapra",
    metaKeyword: "flower delivery chapra, online flowers chapra bihar, florist chhapra, flowers chapra saran",
    footerContent: `
<h2>Flower Delivery in Chapra — Saran's Heart on the Ganga-Ghaghra Confluence</h2>
<p>Chapra (Chhapra), the headquarters of Saran district in northern Bihar, stands at the strategic confluence of the Ganga and Ghaghra rivers. The city's river geography has shaped its economy — fishing, river trade, and agriculture in the fertile alluvial plains. Saran district is the Bhojpuri heartland — the region from which millions of Bihari labourers migrated across India and the world (Fiji, Trinidad, Mauritius, Suriname) in the colonial era, taking their folk traditions with them. Today, Bhojpuri cinema and music are nationally popular, and Chapra is at the cultural centre of this movement. Chhath Puja at the ghats of Chapra is one of Bihar's grandest, with the Ghaghra and Ganga ghats lined with thousands of devotees.</p>
<p>RedHeart delivers flowers across Chapra — Gandhi Chowk, Marhowra Road, Civil Lines, and Revelganj area. Our catalogue includes marigolds for Chhath, roses, seasonal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chapra, Saran, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Chowk, Marhowra Road, Civil Lines, Revelganj area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus and marigolds for Chhath, roses, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are lotus flowers available in Chapra for Chhath Puja?",
        answer: "Lotus flowers are available in Chapra during Chhath season (Kartik month). Given the very high demand during Chhath in this region, we strongly recommend ordering 2–3 days in advance."
      },
      {
        question: "Can I send a birthday bouquet in Chapra Bihar same day?",
        answer: "Yes, birthday bouquets with roses or mixed seasonal flowers are available for same-day delivery in Chapra. Orders placed before 3 PM are delivered the same evening."
      },
      {
        question: "Do you deliver flowers to Revelganj area near Chapra?",
        answer: "Revelganj (on the Ghaghra River banks) is about 25 km from Chapra and may be accessible in our extended zone. Please check at checkout for delivery to Revelganj."
      }
    ]
  },

  "hajipur": {
    cityName: "Hajipur",
    metaTitle: "Flower Delivery in Hajipur | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Hajipur, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Hajipur. Famous for bananas! From ₹399.",
    h1: "Online Flower Delivery in Hajipur",
    metaKeyword: "flower delivery hajipur, online flowers hajipur bihar, florist hajipur vaishali, flowers hajipur banana city",
    footerContent: `
<h2>Flower Delivery in Hajipur — Banana Capital Blossoms with Colour</h2>
<p>Hajipur, the headquarters of Vaishali district in northern Bihar just across the Ganga from Patna, is India's most significant banana-producing city — the Hajipur banana (a particular variety of the Elaichi banana) is prized across India for its sweetness and has a GI (Geographical Indication) tag. The city is also historically significant: Vaishali district is the birthplace of Lord Mahavira and was the site of the world's first democratic republic in the Licchavi period (6th century BCE). Hajipur is now a developing urban centre boosted by the construction of the Mahatma Gandhi Setu (Hajipur-Patna bridge) and its growing role as a satellite city of the state capital Patna.</p>
<p>RedHeart delivers flowers across Hajipur — Ram Chandra Nagar, Station Road, Sonpur Road, and Civil Lines. Our range includes roses, marigolds, seasonal bouquets, and Chhath flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hajipur, Vaishali, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ram Chandra Nagar, Station Road, Sonpur Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds for Chhath, roses, mixed bouquets, Sonpur Mela flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for the Sonpur Mela (Harihar Kshetra fair) near Hajipur?",
        answer: "Yes, the Sonpur Mela is one of Asia's largest fairs and Hajipur is the nearest city. We deliver puja flowers and decorative arrangements during the mela season (Kartik Purnima)."
      },
      {
        question: "Can I order Chhath Puja flowers in Hajipur for the Ganga ghat?",
        answer: "Yes, Chhath flowers including lotus, marigolds, and seasonal offerings are available in Hajipur. Order 1–2 days in advance during Chhath for guaranteed availability."
      },
      {
        question: "Do you deliver flowers from Hajipur to Patna or vice versa?",
        answer: "Hajipur and Patna are separate delivery zones. For Patna deliveries, please use our Patna city page. Hajipur orders are served within Hajipur municipality."
      }
    ]
  },

  "motihari": {
    cityName: "Motihari",
    metaTitle: "Flower Delivery in Motihari | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Motihari, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Motihari town. Starting ₹399.",
    h1: "Online Flower Delivery in Motihari",
    metaKeyword: "flower delivery motihari, online flowers motihari bihar, florist motihari east champaran, flowers motihari george orwell",
    footerContent: `
<h2>Flower Delivery in Motihari — Birthplace of George Orwell, Land of Champaran</h2>
<p>Motihari, the headquarters of East Champaran district in northern Bihar near Nepal, carries two distinguished historical associations. First, it is the birthplace of George Orwell (born Eric Arthur Blair in 1903) — the author of "Animal Farm" and "1984." A commemorative plaque marks the house where Orwell was born. Second and more powerfully for Indians, Motihari was the site of the Champaran Satyagraha of 1917 — Mahatma Gandhi's first major civil disobedience campaign in India, where he challenged the indigo plantation system imposed on farmers. The Champaran Satyagraha launched Gandhi's political career in India. The Motihari district is also known for its sugarcane production and the lush, humid Terai forests bordering Nepal.</p>
<p>RedHeart delivers flowers across Motihari — Civil Lines, Station Road, Areraj Road, and Bettiah Road. Our catalogue includes roses, marigolds, seasonal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Motihari, East Champaran, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Areraj Road, Bettiah Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, mixed bouquets, Chhath puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers in Motihari Bihar same day?",
        answer: "Yes, same-day delivery is available in Motihari for orders placed before 3 PM. Roses, marigolds, and mixed bouquets are available throughout the year."
      },
      {
        question: "Are Chhath Puja flowers available in Motihari?",
        answer: "Yes, Chhath Puja is hugely important in Motihari. Lotus, marigolds, and seasonal Chhath flower sets are available. Order 1–2 days in advance during the festival."
      },
      {
        question: "Do you deliver flowers to Areraj area near Motihari?",
        answer: "Areraj (about 28 km from Motihari) may be accessible in our extended zone. Please check availability at checkout or call our support team for Areraj delivery."
      }
    ]
  },

  "bettiah": {
    cityName: "Bettiah",
    metaTitle: "Flower Delivery in Bettiah | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Bettiah, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Bettiah town. Starting ₹399.",
    h1: "Online Flower Delivery in Bettiah",
    metaKeyword: "flower delivery bettiah, online flowers bettiah bihar, florist bettiah west champaran, flowers bettiah valmiki nagar",
    footerContent: `
<h2>Flower Delivery in Bettiah — Gateway to Valmiki Tiger Reserve</h2>
<p>Bettiah, the headquarters of West Champaran district in northwestern Bihar, is the gateway to Valmiki National Park — Bihar's only tiger reserve, nestled in the Terai forests at the border with Nepal. The park, part of the Valmiki-Chitwan tiger corridor, protects Bengal tigers, rhinoceroses, wild elephants, and hundreds of bird species. Bettiah was the capital of the Champaran estate of the Betia Raj — one of Bihar's most wealthy Rajput princely families. Today, Bettiah is a prosperous agricultural and market town with a strong sugarcane economy. The Champaran Satyagraha's spirit lives strong here as West Champaran was the epicentre of Gandhi's movement.</p>
<p>RedHeart delivers flowers across Bettiah — Civil Lines, Motihari Road, Bagaha Road, and Lauria area. We offer roses, marigolds, seasonal bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bettiah, West Champaran, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Motihari Road, Bagaha Road, Lauria area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, mixed seasonal bouquets, Chhath flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Chhath in Bettiah?",
        answer: "Yes, Chhath flowers including lotus, marigold, and seasonal offerings are available in Bettiah. Order at least 2 days in advance during Chhath season for guaranteed delivery."
      },
      {
        question: "Do you deliver to Bagaha near Bettiah for Valmiki Tiger Reserve visitors?",
        answer: "Bagaha (near Valmiki National Park) is covered in our extended zone from Bettiah. Romantic or celebratory bouquets for forest resort stays can be arranged."
      },
      {
        question: "Are fresh flowers available in Bettiah throughout the year?",
        answer: "Yes, we maintain fresh flower availability throughout the year in Bettiah. Seasonal varieties change but roses, marigolds, and carnations are always available."
      }
    ]
  },

  "madhubani": {
    cityName: "Madhubani",
    metaTitle: "Flower Delivery in Madhubani | Same Day | RedHeart",
    metaDescription: "Order flowers in Madhubani, Bihar. Same-day delivery near Madhubani painting art district. Roses, bouquets & seasonal flowers from ₹399.",
    h1: "Online Flower Delivery in Madhubani",
    metaKeyword: "flower delivery madhubani, online flowers madhubani bihar, florist madhubani, flowers madhubani painting mithila",
    footerContent: `
<h2>Flower Delivery in Madhubani — Art Capital of the Mithila Region</h2>
<p>Madhubani, in the Mithila region of northern Bihar, is world-famous for the Madhubani (Mithila) painting tradition — a 2,500-year-old folk art form using natural dyes, floral motifs, and intricate geometric patterns to tell stories from the Ramayana, Mahabharata, and everyday life. The women of Madhubani originally painted the walls of their homes for festivals and ceremonies, and the tradition has now gained global recognition with Madhubani paintings displayed in museums and galleries worldwide. The Mithila region is also the cultural birthplace of Sita (Janakpur, just across the Nepal border) — making this area deeply significant in Ramayana tradition and among the most devout regions in India for Ram Navami and Vivah Panchami celebrations.</p>
<p>RedHeart delivers flowers across Madhubani — Civil Lines, Pandaul Road, Jayanagar Road, and Bazar area. Our catalogue includes roses, marigolds, seasonal mixed bouquets, and Mithila festival flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhubani, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Pandaul Road, Jayanagar Road, Bazar area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, Mithila festival flowers, roses, Chhath puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Vivah Panchami (Ram-Sita wedding ceremony) in Madhubani?",
        answer: "Yes, Vivah Panchami is a major festival in the Mithila region. Marigold garlands, jasmine, and rose offerings are popular for this ceremony which celebrates the divine wedding of Ram and Sita."
      },
      {
        question: "Are flowers available for Chhath Puja in Madhubani?",
        answer: "Yes, Chhath Puja is the biggest annual festival in Madhubani. Lotus, marigold, and seasonal offerings are available — order 2 days ahead during Chhath for guaranteed stock."
      },
      {
        question: "What flowers are used in Mithila art and can I order them in Madhubani?",
        answer: "Lotus, marigold, and jasmine are among the most commonly depicted flowers in Mithila painting — and yes, all are available fresh for delivery in Madhubani."
      }
    ]
  },

  "purnia": {
    cityName: "Purnia",
    metaTitle: "Flower Delivery in Purnia | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Purnia, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Purnia town. Starting ₹399.",
    h1: "Online Flower Delivery in Purnia",
    metaKeyword: "flower delivery purnia, online flowers purnia bihar, florist purnia, flowers purnia north bihar",
    footerContent: `
<h2>Flower Delivery in Purnia — Northeast Bihar's Commercial Hub</h2>
<p>Purnia (Purnea), in the Kosi-Mahananda interfluve of northeastern Bihar, is the commercial and administrative hub for a large region encompassing parts of Bihar, Jharkhand, and the border areas of West Bengal. The city's economy is driven by jute cultivation, paddy, corn (Purnia is one of Bihar's major corn-producing districts), and a growing service sector. The Mahananda and Kosi rivers give the district a landscape of extraordinary fertility — and occasional devastating floods. Purnia is also a significant educational centre for the northeast Bihar-Seemanchal region. The city's cultural life reflects a mix of Maithil, Angika, Bengali, and Santali communities, making it one of eastern India's most linguistically diverse cities.</p>
<p>RedHeart delivers flowers across Purnia — Civil Lines, Kasba area, Purnea Court area, and Barhara Road. We offer roses, marigolds, seasonal mixed bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purnia, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Kasba area, Court area, Barhara Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Durga Puja flowers, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Durga Puja in Purnia?",
        answer: "Yes, Purnia's Bengali community celebrates Durga Puja with great fervour. Marigold garlands, red hibiscus, and decorative flower arrangements for puja pandals are available."
      },
      {
        question: "Do you deliver flowers to Kasba area in Purnia?",
        answer: "Yes, Kasba and Civil Lines are our primary delivery zones in Purnia. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Are fresh flowers available in Purnia during monsoon season?",
        answer: "Yes, we deliver year-round in Purnia. While the Kosi floods occasionally affect logistics, we maintain delivery operations and will notify you of any disruptions in advance."
      }
    ]
  },

  "katihar": {
    cityName: "Katihar",
    metaTitle: "Flower Delivery in Katihar | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Katihar, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Katihar town. Starting ₹399.",
    h1: "Online Flower Delivery in Katihar",
    metaKeyword: "flower delivery katihar, online flowers katihar bihar, florist katihar, flowers katihar junction",
    footerContent: `
<h2>Flower Delivery in Katihar — Bihar's Jute Town on the Ganga-Kosi Belt</h2>
<p>Katihar, in northeastern Bihar at the confluence of the Kosi and Ganga rivers, is a significant railway junction city — connecting Bihar to Northeast India through the Northeast Frontier Railway. The city is an important jute trading centre: the Katihar region produces large quantities of jute which are processed in mills and exported. Katihar's cultural life reflects the diversity of its gateway-city status — communities from Bengal, Bihar, and Nepal all intermingle here, and festivals like Durga Puja (celebrated with Bengali community fervour), Chhath, and Eid all mark the city's calendar. The Katihar district's wetlands along the Mahananda and Ganga rivers are rich in migratory bird populations, attracting nature enthusiasts.</p>
<p>RedHeart delivers flowers across Katihar — Station Road, Civil Lines, Barari area, and Manihari Road. Our catalogue includes roses, marigolds, Durga Puja flowers, and seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katihar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Civil Lines, Barari area, Manihari Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Durga Puja flowers, Chhath marigolds, roses, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for Durga Puja pandals in Katihar?",
        answer: "Yes, Katihar's Bengali community organises elaborate Durga Puja pandals. Marigold garlands, hibiscus, and puja flower arrangements are available in large quantities. Pre-order recommended."
      },
      {
        question: "Can I get flowers delivered in Katihar for Chhath Puja?",
        answer: "Yes, Chhath flowers including lotus and marigolds are available in Katihar. Given the high demand, order 2 days in advance during the Chhath season."
      },
      {
        question: "Do you deliver flowers to Station Road area in Katihar?",
        answer: "Yes, Station Road is one of our primary delivery areas in Katihar. Same-day delivery is available for orders placed before 3 PM."
      }
    ]
  },

  "sitamarhi": {
    cityName: "Sitamarhi",
    metaTitle: "Flower Delivery in Sitamarhi | Same Day | RedHeart",
    metaDescription: "Order flowers in Sitamarhi, Bihar — birthplace of Sita. Same-day delivery of roses, puja bouquets & seasonal flowers. Starting ₹399.",
    h1: "Online Flower Delivery in Sitamarhi",
    metaKeyword: "flower delivery sitamarhi, online flowers sitamarhi bihar, florist sitamarhi, flowers sita birthplace sitamarhi",
    footerContent: `
<h2>Flower Delivery in Sitamarhi — Birthplace of Goddess Sita</h2>
<p>Sitamarhi, in northern Bihar near the Nepal border, is revered across the Hindu world as the birthplace of Goddess Sita — the divine daughter of King Janak of Mithila, born from the earth in a field being ploughed near modern Sitamarhi. The Janaki Mandir (Janakpur Dham) just across the border in Nepal is the more famous Sita birthplace site, but Sitamarhi in Bihar holds the Indian side of this sacred geography. The Haleshwar Sthan temple and the Bagahi Mani temple are important local religious sites. Vivah Panchami (commemorating the wedding of Ram and Sita) is celebrated with extraordinary devotion in Sitamarhi every year. The district is also known for its paddy and litchi orchards in the Terai belt.</p>
<p>RedHeart delivers flowers across Sitamarhi — Bairgania Road, Dumra Road, Civil Lines, and Riga area. Our range includes marigolds for Sita puja, roses, seasonal bouquets, and puja flower sets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bairgania Road, Dumra Road, Civil Lines, Riga area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds for Sita puja, jasmine, roses, Vivah Panchami flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get puja flowers for Goddess Sita's birthplace temple in Sitamarhi?",
        answer: "Yes, marigold garlands, lotus, and jasmine offerings for the Janaki and Haleshwar temples in Sitamarhi are available. They can be delivered fresh to your accommodation before your visit."
      },
      {
        question: "Are flowers available for Vivah Panchami in Sitamarhi?",
        answer: "Yes, Vivah Panchami (the sacred wedding of Ram and Sita) is celebrated with immense devotion in Sitamarhi. Floral arrangements, marigold torans, and jasmine garlands are in high demand — order 2–3 days ahead."
      },
      {
        question: "Do you deliver flowers to Bairgania area near Sitamarhi?",
        answer: "Bairgania (near the Nepal border) is in our extended zone from Sitamarhi. Please check availability at checkout or call us for Bairgania delivery confirmation."
      }
    ]
  },

  "berhampur": {
    cityName: "Berhampur",
    metaTitle: "Flower Delivery in Berhampur Odisha | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Berhampur (Brahmapur), Odisha. Same-day delivery of roses, bouquets & seasonal flowers across Berhampur. From ₹399.",
    h1: "Online Flower Delivery in Berhampur",
    metaKeyword: "flower delivery berhampur, online flowers berhampur odisha, florist brahmapur, flowers berhampur silk city ganjam",
    footerContent: `
<h2>Flower Delivery in Berhampur — The Silk City of South Odisha</h2>
<p>Berhampur (Brahmapur), in the Ganjam district of coastal south Odisha, is the largest city in southern Odisha and one of the state's most important commercial centres. Famous as the "Silk City" for its traditional Berhampur patta silk — a distinctive double-ikat woven sari with vibrant geometric patterns that is worn by Odia women on special occasions — Berhampur has a thriving textile industry alongside its fishing economy. The city's proximity to Chilika Lake (Asia's largest brackish water lake and a Ramsar Wetland), Gopalpur beach, and the Maa Tara Tarini temple at Brundamal (one of Odisha's most important Shakti peethas) makes it a hub of both commerce and pilgrimage.</p>
<p>RedHeart delivers flowers across Berhampur — Ambapua, Bada Bazar, Town Hall area, and Digapahandi Road. We offer roses, marigolds, tropical coastal bouquets, and seasonal Odia festival flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Berhampur, Ganjam, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambapua, Bada Bazar, Town Hall area, Digapahandi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tropical bouquets, Odia festival flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Maa Tara Tarini puja in Berhampur?",
        answer: "Yes, puja flowers for Maa Tara Tarini temple are among our popular offerings in Berhampur. Marigold garlands and red hibiscus are traditional Shakti offerings here."
      },
      {
        question: "Are flowers available in Berhampur for the Raja festival?",
        answer: "Yes, Raja (the Odia swing festival celebrating womanhood) is a major celebration in Berhampur. Seasonal flowers and festive arrangements are available during this three-day festival in June."
      },
      {
        question: "Do you deliver flowers to Gopalpur beach area near Berhampur?",
        answer: "Gopalpur-on-Sea (about 16 km from Berhampur) is in our extended zone. Resort and hotel deliveries at Gopalpur can be arranged — please order before 12 PM for same-day delivery."
      }
    ]
  },

  "balasore": {
    cityName: "Balasore",
    metaTitle: "Flower Delivery in Balasore Odisha | Same Day | RedHeart",
    metaDescription: "Order flowers in Balasore, Odisha. Same-day delivery near Chandipur beach & across Balasore town. Roses, bouquets from ₹399.",
    h1: "Online Flower Delivery in Balasore",
    metaKeyword: "flower delivery balasore, online flowers balasore odisha, florist balasore, flowers balasore chandipur",
    footerContent: `
<h2>Flower Delivery in Balasore — Missile Coast and Ancient Traditions</h2>
<p>Balasore (Baleswar), in northern coastal Odisha, is a city of striking contrasts — it is home to the Integrated Test Range (ITR) at Chandipur-on-Sea, India's premier missile testing facility where Agni, Prithvi, and BrahMos missiles have been test-fired over the Bay of Bengal. Yet the same coastline has the sleepy, beautiful Chandipur beach known for the extraordinary phenomenon of the sea receding up to 5 km during low tide. Balasore is also significant as the birthplace of Sri Sri Thakur Anukulchandra — founder of the Satsang movement — and the region's spiritual culture runs deep alongside its scientific identity. The Panchalingeshwar temple on a hillock with natural springs is a major local pilgrimage site.</p>
<p>RedHeart delivers flowers across Balasore — Sahadevkhunta, Station Road, Civil Lines, and Nilagiri Road. Our catalogue includes roses, marigolds, tropical coastal bouquets, and seasonal arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balasore, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sahadevkhunta, Station Road, Civil Lines, Nilagiri Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tropical bouquets, Odia puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for delivery to Chandipur beach area near Balasore?",
        answer: "Chandipur is about 16 km from Balasore. Beach resort and hotel deliveries can be arranged — please order before 12 PM and mention the property name for smooth delivery."
      },
      {
        question: "Are flowers available for Odia festivals like Nuakhai in Balasore?",
        answer: "Yes, Nuakhai (the harvest festival of Odisha) and other Odia festivals are served with marigold garlands, seasonal blooms, and traditional offering arrangements."
      },
      {
        question: "Do you deliver flowers in Balasore on all days?",
        answer: "Yes, we deliver 7 days a week in Balasore including Sundays and public holidays. Same-day orders are accepted until 3 PM."
      }
    ]
  },

  "baripada": {
    cityName: "Baripada",
    metaTitle: "Flower Delivery in Baripada | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Baripada, Odisha. Same-day delivery near Simlipal National Park & across Baripada town. From ₹399.",
    h1: "Online Flower Delivery in Baripada",
    metaKeyword: "flower delivery baripada, online flowers baripada odisha, florist baripada mayurbhanj, flowers baripada simlipal",
    footerContent: `
<h2>Flower Delivery in Baripada — Gateway to Simlipal and Santali Culture</h2>
<p>Baripada, the headquarters of Mayurbhanj district in northern Odisha, serves as the gateway city to Simlipal National Park — a UNESCO World Heritage biosphere reserve and one of India's oldest tiger reserves, renowned for its dense sal forests, waterfalls, and biodiversity. Mayurbhanj is one of India's largest tribal districts, with the Santali and Ho communities forming a significant part of the population. Baripada is particularly famous for its Chariots festival — the Baripada Rath Yatra — where uniquely local chariots distinct from the Puri tradition are pulled through the city streets. The Bhanjpur palace of the former Maharaja of Mayurbhanj and the Khiching temple are important heritage landmarks nearby.</p>
<p>RedHeart delivers flowers across Baripada — Panposh Road, Station Road, Civil Lines, and Bhanjpur area. Our range includes roses, marigolds, tropical Odisha bouquets, and seasonal arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baripada, Mayurbhanj, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panposh Road, Station Road, Civil Lines, Bhanjpur area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds for Rath Yatra, roses, tropical bouquets, tribal festival flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for the Baripada Rath Yatra?",
        answer: "Yes, Baripada's Rath Yatra is a grand local festival. Marigold garlands and decorative flowers for the chariot procession and home celebrations are available. Pre-order recommended during Rath Yatra season."
      },
      {
        question: "Are flowers available for Santali tribal festivals in Baripada?",
        answer: "Yes, seasonal tribal festival flowers including forest blooms and marigolds for Sohrai, Karma, and other Santali festivals are available in Baripada."
      },
      {
        question: "Can I send flowers to Simlipal forest resort area from Baripada?",
        answer: "We deliver in Baripada town. For Simlipal resort deliveries, please contact our support — extended delivery to forest resorts can be arranged with advance notice."
      }
    ]
  },

  "bhadrak": {
    cityName: "Bhadrak",
    metaTitle: "Flower Delivery in Bhadrak | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Bhadrak, Odisha. Same-day delivery of roses, bouquets & seasonal flowers across Bhadrak town. Starting ₹399.",
    h1: "Online Flower Delivery in Bhadrak",
    metaKeyword: "flower delivery bhadrak, online flowers bhadrak odisha, florist bhadrak, flowers bhadrak aradi",
    footerContent: `
<h2>Flower Delivery in Bhadrak — Odia Heartland on the Salandi</h2>
<p>Bhadrak, on the Salandi River in northern coastal Odisha, is a pleasant district town known for the Bhadrak Bhadrakali temple — one of Odisha's revered Shakti shrines where the goddess is worshipped in a uniquely local tradition. The Aradi beach and the Dhamara port development in the district have made Bhadrak an emerging economic zone. The city has strong textile traditions — particularly saree weaving — and the surrounding Jajpur and Bhadrak belt is known for its silver filigree jewellery craftsmanship. Durga Puja, Diwali, and Odia festivals like Raja and Nuakhai are celebrated here with the distinctive Odia cultural character.</p>
<p>RedHeart delivers flowers across Bhadrak — Aradi Road, Basudevpur Road, Civil Lines, and Chandbali Road. Our catalogue includes roses, marigolds, coastal tropical bouquets, and seasonal arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhadrak, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aradi Road, Basudevpur Road, Civil Lines, Chandbali Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Bhadrakali puja flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get puja flowers for Bhadrakali temple in Bhadrak?",
        answer: "Yes, marigold garlands, red hibiscus, and devotional flower sets for Bhadrakali puja are available in Bhadrak. They can be delivered fresh for your temple visit."
      },
      {
        question: "Are flowers available for Durga Puja in Bhadrak?",
        answer: "Yes, Durga Puja flower arrangements including marigold torans, puja sets, and decorative bouquets are available in Bhadrak. For pandal decoration orders, please contact us in advance."
      },
      {
        question: "Do you deliver flowers to Chandbali area near Bhadrak?",
        answer: "Chandbali (near the Dhamara port area) is in our extended delivery zone from Bhadrak. Please check availability at checkout for Chandbali delivery."
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
