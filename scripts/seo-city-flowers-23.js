// Batch 23 — 15 UP cities: Etawah, Kannauj, Shahjahanpur, Sitapur, Raebareli,
// Fatehpur, Banda, Jaunpur, Azamgarh, Mirzapur, Jalaun (Orai), Farrukhabad,
// Mainpuri, Unnao, Bahraich

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "etawah": {
    cityName: "Etawah",
    metaTitle: "Flower Delivery in Etawah | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Etawah, UP. Same-day delivery of roses, bouquets & seasonal flowers across Etawah. Starting from ₹399.",
    h1: "Online Flower Delivery in Etawah",
    metaKeyword: "flower delivery etawah, online flowers etawah up, florist etawah, flowers etawah chambal",
    footerContent: `
<h2>Flower Delivery in Etawah — The Lion Safari City on the Yamuna</h2>
<p>Etawah, a district town in western Uttar Pradesh on the Yamuna River, is known as the homeland of former Chief Minister Mulayam Singh Yadav and the Samajwadi Party's political heartland. But beyond politics, Etawah has a quietly distinctive identity: it hosts the Etawah Lion Safari — a conservation project that brought Asiatic lions to UP for the first time — and lies in the Chambal ravines belt where the river's deep gorges have historically sheltered both wildlife and legend. The city's bazaars, particularly around Sadar and Bela Road, are lively with the commerce of a typical Yamuna-belt market town. Ram Navami, Holi, and local melas are celebrated with great community spirit.</p>
<p>RedHeart delivers flowers across Etawah — Civil Lines, Sadar Bazar, Bela Road, and Aliganj. Our catalogue includes roses, marigolds, seasonal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Etawah, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Sadar Bazar, Bela Road, Aliganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Etawah for Ram Navami puja?",
        answer: "Yes, marigold garlands and puja flower arrangements are available in Etawah for Ram Navami and other festivals. Same-day delivery is available for orders before 3 PM."
      },
      {
        question: "Can I send a bouquet to someone in Civil Lines area in Etawah?",
        answer: "Civil Lines is one of our primary delivery zones in Etawah. Birthday and anniversary bouquets can be delivered same day for orders placed before 3 PM."
      },
      {
        question: "What types of flowers are popular in Etawah for gifting?",
        answer: "Roses are universally popular in Etawah for gifting. Marigold garlands are favoured for festivals and pujas. Mixed seasonal bouquets with gerberas and carnations are popular for birthdays."
      }
    ]
  },

  "kannauj": {
    cityName: "Kannauj",
    metaTitle: "Flower Delivery in Kannauj | Perfume City | RedHeart",
    metaDescription: "Order flowers in Kannauj, UP — the Perfume Capital of India. Fresh roses, bouquets & fragrant flowers delivered same day. Starting ₹399.",
    h1: "Online Flower Delivery in Kannauj",
    metaKeyword: "flower delivery kannauj, online flowers kannauj up, florist kannauj, flowers kannauj ittar perfume",
    footerContent: `
<h2>Flower Delivery in Kannauj — India's Perfume Capital Where Every Petal Matters</h2>
<p>Kannauj, a historic city on the Ganga plain in Uttar Pradesh, is unique in all of India as the "Perfume Capital" — more than 95% of India's traditional attar (natural perfume) is produced here using a centuries-old technique called deg-bhapka distillation. Rose, jasmine, and other flower essences are collected from across India and processed in Kannauj's hundreds of small distilleries. The city's connection to flowers is therefore not merely aesthetic but deeply industrial and artisanal: Kannauj ittar (made from roses, kewra, hina, and other flowers) is exported to the Gulf countries, used in Indian festivals and weddings, and treasured as an ancient craft. Kannauj was also the capital of Harsha's empire in the 7th century CE — making it one of India's most historically layered cities.</p>
<p>RedHeart delivers fresh flowers across Kannauj — Tiwaripur Road, Collectorate area, Tirwa Road, and the main bazaar. Our selection includes roses (especially varieties suited for attar production), jasmine, and seasonal mixed bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kannauj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiwaripur Road, Collectorate area, Tirwa Road, Main Bazar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, fragrant bouquets, attar-inspired arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Why is Kannauj famous and how does that connect to flower delivery?",
        answer: "Kannauj is India's perfume capital where rose and jasmine flowers are distilled into precious attar. When you order fresh roses or jasmine here, you're ordering from a city that has centuries of deep connection with these very flowers."
      },
      {
        question: "Can I get jasmine flowers delivered in Kannauj?",
        answer: "Yes, jasmine (mogra) is particularly significant in Kannauj given its use in ittar production. Fresh jasmine bunches and jasmine-mixed bouquets are available for delivery."
      },
      {
        question: "Are rose bouquets popular in Kannauj despite it being a rose attar production centre?",
        answer: "Yes, fresh cut roses as gifts are very popular in Kannauj. While industrial roses are processed for attar, the bouquet roses we deliver are premium fresh varieties perfect for personal gifting."
      }
    ]
  },

  "shahjahanpur": {
    cityName: "Shahjahanpur",
    metaTitle: "Flower Delivery in Shahjahanpur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Shahjahanpur, UP. Same-day delivery of roses, bouquets & seasonal flowers across Shahjahanpur. Starting ₹399.",
    h1: "Online Flower Delivery in Shahjahanpur",
    metaKeyword: "flower delivery shahjahanpur, online flowers shahjahanpur up, florist shahjahanpur, flowers shahjahanpur garhi",
    footerContent: `
<h2>Flower Delivery in Shahjahanpur — City of the Martyr and Fresh Blooms</h2>
<p>Shahjahanpur, in northern Uttar Pradesh on the Garhi River, holds a special place in Indian freedom struggle history. Ram Prasad Bismil — the revolutionary poet-freedom fighter who co-organised the Kakori train robbery of 1925 and authored the patriotic anthem "Sarfaroshi ki tamanna" — was born here. The city carries his memory with pride, and the Bismil memorial is an important local landmark. Shahjahanpur is also known for its thriving sugarcane industry, cotton textile trade, and the Zari (embroidery) craft that employs many of its artisan families. Festivals like Eid, Diwali, and Janmashtami are celebrated across the city's diverse communities with customary flower decorations.</p>
<p>RedHeart delivers flowers across Shahjahanpur — Katra, Collectorate area, Civil Lines, and Tilhar Road. Our range includes roses, marigolds, seasonal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shahjahanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katra, Collectorate area, Civil Lines, Tilhar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, carnations, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Shahjahanpur for Eid or other festivals?",
        answer: "Yes, we deliver year-round including during Eid, Diwali, and Janmashtami. Festival flower arrangements are available on request in Shahjahanpur."
      },
      {
        question: "Can I send a birthday flower bouquet in Shahjahanpur same day?",
        answer: "Yes, birthday bouquets with roses or mixed seasonal flowers are available for same-day delivery in Shahjahanpur for orders placed before 3 PM."
      },
      {
        question: "Are marigold garlands available for wedding toran in Shahjahanpur?",
        answer: "Yes, marigold and rose torans for wedding doors and mandaps are available in Shahjahanpur. For bulk wedding orders, we recommend booking 2–3 days in advance."
      }
    ]
  },

  "sitapur": {
    cityName: "Sitapur",
    metaTitle: "Flower Delivery in Sitapur | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Sitapur, UP. Same-day roses, bouquets & seasonal flowers delivered across Sitapur town. Starting ₹399.",
    h1: "Online Flower Delivery in Sitapur",
    metaKeyword: "flower delivery sitapur, online flowers sitapur up, florist sitapur, flowers sitapur uttar pradesh",
    footerContent: `
<h2>Flower Delivery in Sitapur — Awadhi Culture in the Terai Belt</h2>
<p>Sitapur, in northern Uttar Pradesh at the edge of the Terai (subtropical moist forest belt near Nepal), is a culturally rich district with deep roots in Awadhi language and folk traditions. The city has historically been a seat of Taluqdars (large landowners) during the Nawabi period, and many of its older families carry a refined cultural sensibility — love of poetry, music, and garden aesthetics. The nearby Dudhwa National Park (shared with Lakhimpur Kheri) and the Naimisharanya — one of Hinduism's most sacred forest pilgrimage sites, believed to be the navel of the universe — are Sitapur's significant landmarks. Naimisharanya draws lakhs of pilgrims for parikramas during Kartik month.</p>
<p>RedHeart delivers flowers across Sitapur — Civil Lines, Lahar Tara, Khairabad Road, and Biswan Road. We offer roses, marigolds, seasonal mixed bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitapur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Lahar Tara, Khairabad Road, Biswan Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed Awadhi bouquets, seasonal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get puja flowers for Naimisharanya pilgrimage delivered from Sitapur?",
        answer: "Yes, puja flower sets including marigold garlands and rose offerings can be delivered to Sitapur town for pilgrims heading to Naimisharanya. The pilgrimage site is about 25 km from Sitapur."
      },
      {
        question: "Do you deliver flowers to Civil Lines area in Sitapur?",
        answer: "Yes, Civil Lines is one of our primary delivery zones in Sitapur. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "What flowers are popular for gifting in Sitapur?",
        answer: "Red and pink roses are most popular for personal occasions in Sitapur. Marigold garlands and mixed seasonal arrangements are favoured for festivals and puja occasions."
      }
    ]
  },

  "raebareli": {
    cityName: "Raebareli",
    metaTitle: "Flower Delivery in Raebareli | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Raebareli, UP. Same-day delivery of roses, bouquets & seasonal flowers across Raebareli town. Starting ₹399.",
    h1: "Online Flower Delivery in Raebareli",
    metaKeyword: "flower delivery raebareli, online flowers raebareli up, florist raebareli, flowers raebareli gandhi stronghold",
    footerContent: `
<h2>Flower Delivery in Raebareli — The Amethi-Raebareli Heartland in Bloom</h2>
<p>Raebareli, in central Uttar Pradesh on the Sai River, has been among India's most politically significant constituencies — the Gandhi family stronghold for decades, represented by both Indira Gandhi and Sonia Gandhi. The city is known for the Modern Coach Factory (MCF Raebareli) — a premier railway coach manufacturing facility — which makes it a significant industrial employer in the region. Beyond its political and industrial identity, Raebareli is a traditional Awadhi city with deep roots in Hindi literature: the poet Sumitranandan Pant (Chayavad school) was associated with this region. Diwali, Holi, and Ram Navami are celebrated with characteristic central UP fervour.</p>
<p>RedHeart delivers flowers across Raebareli — Collectorate Road, Civil Lines, Salon Road, and Lalganj Road. We offer roses, seasonal mixed bouquets, marigolds, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raebareli, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Collectorate Road, Civil Lines, Salon Road, Lalganj Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal mixed bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to someone in the MCF (Modern Coach Factory) area in Raebareli?",
        answer: "Yes, the MCF township and surrounding residential colonies are within our delivery zone. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers to Civil Lines in Raebareli?",
        answer: "Yes, Civil Lines is one of our key delivery areas in Raebareli. Orders accepted till 3 PM for same-day delivery."
      },
      {
        question: "Are flowers available for delivery in Raebareli for anniversaries?",
        answer: "Yes, anniversary bouquets including red roses and mixed floral arrangements are available same day in Raebareli. Add a personalised message card when placing your order."
      }
    ]
  },

  "fatehpur": {
    cityName: "Fatehpur",
    metaTitle: "Flower Delivery in Fatehpur UP | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Fatehpur, UP. Same-day delivery of roses, bouquets & seasonal flowers across Fatehpur town. Starting ₹399.",
    h1: "Online Flower Delivery in Fatehpur",
    metaKeyword: "flower delivery fatehpur up, online flowers fatehpur uttar pradesh, florist fatehpur, flowers fatehpur sikri road",
    footerContent: `
<h2>Flower Delivery in Fatehpur — Connecting the Gangetic Plains</h2>
<p>Fatehpur, in central Uttar Pradesh on the Yamuna-Ganga doab (the fertile interfluve between the two great rivers), is a district town along the Grand Trunk Road and on the Howrah-Mumbai rail line — making it a significant connectivity hub for the UP plains. The city's economy is primarily agricultural (sugarcane, wheat) with some small industries. Fatehpur is known for its role in the 1857 Rebellion when local rulers aided the sepoy mutiny. The district's cultural life is centred on Awadhi and Bundelkhand traditions that meet in this transitional zone, and festivals like Diwali, Holi, and Sheetla Mata melas are observed widely.</p>
<p>RedHeart delivers flowers across Fatehpur — Civil Lines, Khaga Road, Bindki Road, and Sadar area. We offer roses, marigold garlands, seasonal mixed bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Khaga Road, Bindki Road, Sadar area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Fatehpur UP on the same day?",
        answer: "Yes, same-day delivery is available across Fatehpur for orders placed before 3 PM. Delivery typically takes 3–5 hours after confirmation."
      },
      {
        question: "Can I order flowers for Diwali in Fatehpur?",
        answer: "Yes, marigold door torans, rose arrangements, and festive gift boxes are available for Diwali in Fatehpur. Order a day ahead for the best selection."
      },
      {
        question: "What is the starting price for flower bouquets in Fatehpur?",
        answer: "Flower bouquets in Fatehpur start from ₹399. This includes same-day delivery. Premium arrangements with orchids and imported roses are also available at higher price points."
      }
    ]
  },

  "banda": {
    cityName: "Banda",
    metaTitle: "Flower Delivery in Banda UP | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Banda, UP. Same-day delivery of roses, bouquets & seasonal flowers across Banda town. Starting from ₹399.",
    h1: "Online Flower Delivery in Banda",
    metaKeyword: "flower delivery banda up, online flowers banda uttar pradesh, florist banda, flowers banda ken river",
    footerContent: `
<h2>Flower Delivery in Banda — Bundelkhand's River Town</h2>
<p>Banda, the headquarters of Banda district in Bundelkhand, Uttar Pradesh, sits at the confluence of the Paisuni and Ken rivers before the Ken meets the Yamuna. This is deep Bundelkhand country — a region of red laterite soil, rocky scrubland, sparse forests, and a tough but proud cultural identity. The Bundelkhand landscape inspired the folk ballads of Alha and Udal, legendary warrior heroes whose oral epics are still sung at local fairs. Banda is known for its Gulal (coloured powder for Holi) production and for the Ken-Betwa river linking project which is among India's most ambitious river linking schemes. The district's festivals, particularly Devi pujas and Ramlila, are marked by abundant floral use.</p>
<p>RedHeart delivers flowers across Banda — Civil Lines, Atarra Road, Naraini Road, and Kamasin area. We offer roses, marigolds, seasonal bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banda, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Atarra Road, Naraini Road, Kamasin area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Bundelkhand festival bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for a Devi puja in Banda, UP?",
        answer: "Yes, marigold garlands and rose offerings for Devi puja are popular in Banda. Puja-specific flower sets can be ordered for home or temple use."
      },
      {
        question: "Do you deliver flowers in Civil Lines area in Banda?",
        answer: "Yes, Civil Lines is one of our primary delivery areas in Banda. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "What is the best flower gift for someone in Banda UP?",
        answer: "Red roses are the most popular choice in Banda for romantic gifting. Mixed seasonal bouquets and marigold arrangements are popular for festival and family occasions."
      }
    ]
  },

  "jaunpur": {
    cityName: "Jaunpur",
    metaTitle: "Flower Delivery in Jaunpur | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Jaunpur, UP. Same-day delivery of roses, bouquets & seasonal flowers across Jaunpur town. Starting ₹399.",
    h1: "Online Flower Delivery in Jaunpur",
    metaKeyword: "flower delivery jaunpur, online flowers jaunpur up, florist jaunpur, flowers jaunpur sharqi sultanate",
    footerContent: `
<h2>Flower Delivery in Jaunpur — The Shiraz of the East</h2>
<p>Jaunpur, on the Gomti River in eastern Uttar Pradesh, was once called "Shiraz-i-Hind" (the Shiraz of India) during the Sharqi Sultanate era of the 14th–15th centuries — a golden period of Islamic architecture, Persian poetry, and classical music in this region. The Atala Masjid, Lal Darwaza Masjid, and the Jaunpur Fort's Shahi Pul (Royal Bridge) are remarkable architectural legacies of the Sharqi rulers. The city is also famous for the Imli (tamarind) jharna near the fort, and for its diamond and saree weaving industries. Jaunpur's unique cultural blend of Hindu-Muslim coexistence, its rich Bhojpuri-Awadhi folk music, and its vibrant melas make it a city of great character.</p>
<p>RedHeart delivers flowers across Jaunpur — Line Bazar, Shahganj, Mariahu Road, and Collectorate area. Our range includes roses, marigolds, seasonal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jaunpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Line Bazar, Shahganj, Mariahu Road, Collectorate area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers in Jaunpur for Eid celebrations?",
        answer: "Yes, rose bouquets and fragrant jasmine arrangements for Eid gifting are available in Jaunpur. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers to Line Bazar area in Jaunpur?",
        answer: "Yes, Line Bazar is within our delivery zone in Jaunpur. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "Are flowers available for Jaunpur weddings with Bhojpuri traditions?",
        answer: "Yes, traditional wedding flowers including marigold varmala, rose door torans, and jasmine garlands are available in Jaunpur for both Hindu and Muslim weddings."
      }
    ]
  },

  "azamgarh": {
    cityName: "Azamgarh",
    metaTitle: "Flower Delivery in Azamgarh | Same Day | RedHeart",
    metaDescription: "Order flowers in Azamgarh, UP. Same-day delivery of roses, bouquets & seasonal flowers across Azamgarh town. Starting ₹399.",
    h1: "Online Flower Delivery in Azamgarh",
    metaKeyword: "flower delivery azamgarh, online flowers azamgarh up, florist azamgarh, flowers azamgarh eastern up",
    footerContent: `
<h2>Flower Delivery in Azamgarh — Land of Scholars and Fresh Blooms</h2>
<p>Azamgarh, in eastern Uttar Pradesh, has produced an extraordinary number of scholars, writers, and intellectuals — giving it the informal title of "City of Scholars." Kaifi Azmi (the famous Urdu poet and lyricist), Rahi Masoom Raza (author of Aadha Gaon, the great partition novel set in UP), and many other prominent Hindi-Urdu literary figures trace their origins to Azamgarh and the surrounding Purvanchal region. The city is known for its famous local black pottery (Azamgarh pottery), terracotta tradition, and the Dudhilaur fair. Eastern UP's Bhojpuri culture, Chhath puja by the Tamsa River, and Ram Lila make Azamgarh's cultural calendar lively year-round.</p>
<p>RedHeart delivers flowers across Azamgarh — Civil Lines, Lal Diggi area, Shahganj Road, and Phulpur Road. Our catalogue includes roses, marigolds, seasonal bouquets, and Chhath-appropriate flower offerings. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Azamgarh, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Lal Diggi, Shahganj Road, Phulpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for Chhath Puja in Azamgarh?",
        answer: "Yes, Chhath Puja is one of the biggest festivals in Azamgarh's Purvanchal community. Marigolds, lotuses, and seasonal Chhath flowers are available. Order early during the Chhath season for guaranteed availability."
      },
      {
        question: "Can I get flowers delivered to Civil Lines in Azamgarh same day?",
        answer: "Yes, Civil Lines is within our delivery zone in Azamgarh. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers for Ram Lila events in Azamgarh?",
        answer: "Yes, decorative and offering flowers for Ram Lila performances and pujas are available. Marigold garlands and rose arrangements are popular for stage and pandal decorations."
      }
    ]
  },

  "mirzapur": {
    cityName: "Mirzapur",
    metaTitle: "Flower Delivery in Mirzapur | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Mirzapur, UP. Same-day delivery near Vindhyavasini temple & across Mirzapur town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Mirzapur",
    metaKeyword: "flower delivery mirzapur, online flowers mirzapur up, florist mirzapur, flowers vindhyavasini temple mirzapur",
    footerContent: `
<h2>Flower Delivery in Mirzapur — Carpet City on the Ganga</h2>
<p>Mirzapur, on the right bank of the Ganga in eastern Uttar Pradesh, is one of India's most important carpet-producing cities. The Mirzapur carpet industry, along with nearby Bhadohi ("The Carpet City"), produces hand-knotted rugs exported globally — a craft that employs tens of thousands of weavers in the region. But Mirzapur is perhaps most revered for its Vindhyavasini Devi temple at Vindhyachal, just 8 km from the city — one of the most powerful Shakti peethas (sacred goddess shrines) in India, drawing millions of pilgrims especially during Navratri and throughout the year. The Chamunda Devi and Ashtabhuja Devi temples complete the Vindhyachal sacred triangle, making this one of the most spiritually significant locations in Uttar Pradesh.</p>
<p>RedHeart delivers flowers across Mirzapur — Kashi Road, Civil Lines, Lal Diggi, and Vindhyachal Road. Puja flowers, marigold garlands, and rose offerings are our most popular items here. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mirzapur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kashi Road, Civil Lines, Lal Diggi, Vindhyachal Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, red roses for Devi, seasonal puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Vindhyavasini Devi puja in Mirzapur?",
        answer: "Yes, marigold garlands, red roses, and hibiscus flowers for Vindhyavasini Devi are among our most popular offerings in Mirzapur. They can be delivered to your lodging before your temple visit."
      },
      {
        question: "Are flowers available during Navratri at Vindhyachal?",
        answer: "Yes, we stock extra puja flowers during Navratri when demand surges near Vindhyachal. It's strongly recommended to order at least a day ahead during the nine-day festival."
      },
      {
        question: "Can I send a birthday bouquet in Mirzapur same day?",
        answer: "Yes, birthday roses and mixed bouquets are available for same-day delivery in Mirzapur. Orders placed before 3 PM are delivered the same evening."
      }
    ]
  },

  "orai": {
    cityName: "Orai",
    metaTitle: "Flower Delivery in Orai (Jalaun) | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Orai, Jalaun UP. Same-day delivery of roses, bouquets & seasonal flowers across Orai town. Starting ₹399.",
    h1: "Online Flower Delivery in Orai",
    metaKeyword: "flower delivery orai, online flowers orai jalaun up, florist orai, flowers orai uttar pradesh",
    footerContent: `
<h2>Flower Delivery in Orai — Jalaun's Cultural Capital</h2>
<p>Orai, the headquarters of Jalaun district in Bundelkhand, Uttar Pradesh, is the region's commercial and educational hub. Located between the Betwa and Yamuna rivers, Orai has a strong agricultural base and is known for its milk cooperative networks and small-scale industries. The city's cultural identity is shaped by the Bundelkhand heritage — folk songs of Alha-Udal, Rai dance, and regional festivals that blend Rajput bravery narratives with agricultural rhythms. The Jalaun district has historical significance as a region that fought actively in the 1857 Revolt, and the sacrifices of local warriors are commemorated in local tradition.</p>
<p>RedHeart delivers flowers across Orai — Civil Lines, Jhansi Road, Konch Road, and Bazar area. Our range includes roses, marigolds, seasonal bouquets, and flowering indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orai, Jalaun, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Jhansi Road, Konch Road, Bazar area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Orai Jalaun for festivals?",
        answer: "Yes, we deliver year-round in Orai. Marigold garlands for pujas and rose bouquets for personal celebrations are available with same-day delivery."
      },
      {
        question: "Can I send flowers to a friend in Civil Lines, Orai?",
        answer: "Civil Lines is one of our primary delivery areas in Orai. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "What flowers are popular in the Bundelkhand region like Orai?",
        answer: "Roses and marigolds are universally popular. Seasonal blooms like genda (marigold), gulmohar, and jasmine are particularly loved in the Bundelkhand region."
      }
    ]
  },

  "farrukhabad": {
    cityName: "Farrukhabad",
    metaTitle: "Flower Delivery in Farrukhabad | Same Day | RedHeart",
    metaDescription: "Order flowers in Farrukhabad, UP. Same-day delivery of roses, bouquets & seasonal flowers across Farrukhabad and Fatehgarh. Starting ₹399.",
    h1: "Online Flower Delivery in Farrukhabad",
    metaKeyword: "flower delivery farrukhabad, online flowers farrukhabad up, florist farrukhabad, flowers farrukhabad fatehgarh",
    footerContent: `
<h2>Flower Delivery in Farrukhabad — Potato Capital and Perfume Town</h2>
<p>Farrukhabad, a twin-city with its district headquarters Fatehgarh on the Ganga in central Uttar Pradesh, has two distinct economic identities. First, it is one of India's largest producers of potatoes — the alluvial Ganga plains of Farrukhabad yield potatoes that supply chips factories and vegetable markets across North India. Second, Farrukhabad is an important centre for attar (natural perfume) production, particularly kewra (pandanus) and mogra (jasmine) — placing it alongside Kannauj in the perfume belt of the Ganga region. The city's Mughal-era heritage is visible in its mosques and havelis, and its cultural life blends Awadhi with Braj traditions.</p>
<p>RedHeart delivers flowers across Farrukhabad — Civil Lines, Fatehgarh Cantonment, Kaimganj Road, and Shamshabad Road. Our catalogue includes roses, jasmine, seasonal bouquets, and marigold arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Farrukhabad, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Fatehgarh, Kaimganj Road, Shamshabad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, mixed seasonal bouquets, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order jasmine or kewra flower arrangements in Farrukhabad?",
        answer: "Yes, jasmine (mogra) arrangements are a speciality in Farrukhabad given the city's deep perfume heritage. Fresh jasmine bunches and mixed bouquets with jasmine are available."
      },
      {
        question: "Do you deliver to Fatehgarh area near Farrukhabad?",
        answer: "Yes, Fatehgarh is the district headquarters and is covered as part of our Farrukhabad delivery zone. Same-day delivery is available for orders before 3 PM."
      },
      {
        question: "Are flowers available in Farrukhabad for anniversary surprises?",
        answer: "Yes, anniversary roses and premium bouquets are available for same-day delivery in Farrukhabad. Add a personalised greeting card to make the occasion extra special."
      }
    ]
  },

  "mainpuri": {
    cityName: "Mainpuri",
    metaTitle: "Flower Delivery in Mainpuri | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Mainpuri, UP. Same-day delivery of roses, bouquets & seasonal flowers across Mainpuri town. Starting ₹399.",
    h1: "Online Flower Delivery in Mainpuri",
    metaKeyword: "flower delivery mainpuri, online flowers mainpuri up, florist mainpuri, flowers mainpuri uttar pradesh",
    footerContent: `
<h2>Flower Delivery in Mainpuri — Yadav Heartland Between the Yamuna and Chambal</h2>
<p>Mainpuri, in western Uttar Pradesh between Agra and Etawah, is closely associated with the Yadav political community and is the traditional bastion of the Mulayam Singh Yadav family. The city lies in the Braj cultural zone — the mythological land of Krishna — and shares the religious and festive sensibility of this deeply devotional belt. Holi, Janmashtami, and Ram Navami are celebrated with the passionate intensity typical of Braj. The Mainpuri district is known for its mustard oil production and dairy economy, and the city's weekly bazaar serves a large rural catchment. The Chhoti Devi Mandir and local temples are important religious centres.</p>
<p>RedHeart delivers flowers across Mainpuri — Civil Lines, Karhal Road, Bhongaon Road, and Sadar Bazar. We offer roses, marigolds, seasonal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mainpuri, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Karhal Road, Bhongaon Road, Sadar Bazar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Janmashtami flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for Janmashtami puja in Mainpuri?",
        answer: "Yes, Mainpuri is in the Braj zone and Janmashtami is a major celebration. Yellow marigolds, white jasmine, and lotus flowers are particularly popular for Krishna puja arrangements."
      },
      {
        question: "Can I order flowers for Holi in Mainpuri?",
        answer: "Colourful flower bouquets are popular as Holi gifts in Mainpuri. Roses and seasonal spring flowers make cheerful pre-Holi gifts for friends and family."
      },
      {
        question: "Do you deliver flowers to Karhal area near Mainpuri?",
        answer: "Karhal is about 30 km from Mainpuri town. It may be accessible in our extended zone — please check at checkout or call our support for Karhal delivery availability."
      }
    ]
  },

  "unnao": {
    cityName: "Unnao",
    metaTitle: "Flower Delivery in Unnao | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Unnao, UP. Same-day delivery of roses, bouquets & seasonal flowers across Unnao town. Starting from ₹399.",
    h1: "Online Flower Delivery in Unnao",
    metaKeyword: "flower delivery unnao, online flowers unnao up, florist unnao, flowers unnao uttar pradesh",
    footerContent: `
<h2>Flower Delivery in Unnao — Industrial Corridor Gateway</h2>
<p>Unnao, on the western bank of the Ganga just south of Lucknow in central Uttar Pradesh, is a city with growing industrial significance. Its location on the Agra-Lucknow Expressway and the main Kanpur-Lucknow highway makes it a strategic industrial corridor city, and a number of manufacturing plants have set up operations here. The city is also known for its leather industry and for the traditional jari (metallic thread) embroidery work on fabric. Culturally, Unnao shares the Awadhi sensibility of the Lucknow-Kanpur belt — Urdu poetry, Nawabi cuisine, and festivals observed with dignity and community warmth.</p>
<p>RedHeart delivers flowers across Unnao — Civil Lines, Purwa Road, Fatehpur Road, and Bangarmau area. Our catalogue includes roses, marigolds, seasonal mixed bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Unnao, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Purwa Road, Fatehpur Road, Bangarmau area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Unnao near Lucknow?",
        answer: "Yes, Unnao is fully covered. Its proximity to Lucknow means we can deliver high-quality flowers sourced from premium Lucknow suppliers with same-day delivery."
      },
      {
        question: "Can I send flowers to an industrial area or factory in Unnao?",
        answer: "Yes, corporate and industrial delivery is available in Unnao. Office bouquets, employee birthday flowers, and event arrangements are all handled."
      },
      {
        question: "Are flowers available in Unnao for anniversary celebrations?",
        answer: "Yes, anniversary roses and premium bouquets are available for same-day delivery in Unnao. Orders placed before 3 PM are delivered the same evening."
      }
    ]
  },

  "bahraich": {
    cityName: "Bahraich",
    metaTitle: "Flower Delivery in Bahraich | Same Day | RedHeart",
    metaDescription: "Order flowers in Bahraich, UP. Same-day delivery of roses, bouquets & seasonal flowers across Bahraich town. Starting ₹399.",
    h1: "Online Flower Delivery in Bahraich",
    metaKeyword: "flower delivery bahraich, online flowers bahraich up, florist bahraich, flowers bahraich terai",
    footerContent: `
<h2>Flower Delivery in Bahraich — Gateway to the Terai and Katarniaghat</h2>
<p>Bahraich, in the Terai zone of northern Uttar Pradesh near the Nepal border, is a district town surrounded by the lush subtropical forests of the Dudhwa-Katarniaghat wildlife corridor — one of the last refuges of the Gangetic dolphin, swamp deer, and Bengal tiger in UP. The city is historically associated with the 1033 CE Battle of Bahraich where Mahmud of Ghazni's general Salar Masud Ghazi was defeated — and the Ghazi Mian dargah here draws enormous Sawa Lakh ka Mela fair attendance from both Hindu and Muslim communities in a unique syncretic tradition. This peaceful coexistence of communities gives Bahraich a distinctive social harmony that is expressed in its shared festivals and traditions.</p>
<p>RedHeart delivers flowers across Bahraich — Civil Lines, Nanpara Road, Gonda Road, and Bahraich Bazar. Our range includes roses, marigolds, seasonal mixed bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bahraich, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Nanpara Road, Gonda Road, Bahraich Bazar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Terai blooms, mixed bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered in Bahraich for Eid or Hindu festivals?",
        answer: "Yes, we deliver year-round in Bahraich for all festivals. Rose and jasmine arrangements for Eid, and marigold garlands for Hindu pujas are both available."
      },
      {
        question: "Are flowers available in Bahraich for the Ghazi Mian mela?",
        answer: "Yes, during the Sawa Lakh Mela, demand for flowers and floral offerings is high in Bahraich. Order in advance for the best availability during this major festival."
      },
      {
        question: "Do you deliver to Civil Lines area in Bahraich?",
        answer: "Yes, Civil Lines is one of our primary delivery zones in Bahraich. Same-day delivery is available for orders placed before 3 PM."
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
