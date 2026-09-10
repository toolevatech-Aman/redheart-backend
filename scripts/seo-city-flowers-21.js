// Batch 21 — 15 cities: Raigarh, Korba, Durg, Bhilai, Rajnandgaon, Ambikapur, Jagdalpur (CG)
// + Anand, Nadiad, Navsari, Valsad, Morbi, Bharuch, Ankleshwar (Gujarat) + Bilimora

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "raigarh-cg": {
    cityName: "Raigarh",
    metaTitle: "Flower Delivery in Raigarh CG | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Raigarh, Chhattisgarh. Same-day delivery of roses, bouquets & seasonal flowers across Raigarh. Starting ₹399.",
    h1: "Online Flower Delivery in Raigarh, Chhattisgarh",
    metaKeyword: "flower delivery raigarh chhattisgarh, online flowers raigarh cg, florist raigarh, flowers raigarh steel city",
    footerContent: `
<h2>Flower Delivery in Raigarh — Cultural Capital of Chhattisgarh in Full Bloom</h2>
<p>Raigarh, in eastern Chhattisgarh on the banks of the Mahanadi tributary, is celebrated as the "Cultural Capital of Chhattisgarh" due to its extraordinary contribution to classical and folk arts. The royal family of Raigarh princely state was a great patron of Kathak dance — the Raigarh gharana of Kathak is one of the recognised lineages — and the tradition of classical music and theatre here is unmatched in the region. The city's Ramlila is amongst the grandest in Chhattisgarh, drawing artists from across central India. Industrially, Raigarh has steel plants and coal washeries, but its identity remains firmly rooted in culture and the arts.</p>
<p>RedHeart delivers flowers across Raigarh — Garha Road, Civil Lines, Dharamjaigarh Road, and Sadar Bazar. We offer roses, marigolds, seasonal bouquets, and decorative plant arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raigarh, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Garha Road, Civil Lines, Dharamjaigarh Road, Sadar Bazar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed bouquets, seasonal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Raigarh Chhattisgarh for cultural events?",
        answer: "Yes, floral arrangements for stage performances, Kathak shows, and cultural events are available in Raigarh. We can customise arrangements for performance halls and stages."
      },
      {
        question: "Can I send flowers to Civil Lines area in Raigarh?",
        answer: "Yes, Civil Lines is one of our primary delivery areas in Raigarh. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Are flower delivery services available in Raigarh during Ramlila season?",
        answer: "Yes, marigold garlands, puja flowers, and decorative bouquets are in high demand during Ramlila in Raigarh. We stock extra during festival seasons — early ordering is recommended."
      }
    ]
  },

  "korba": {
    cityName: "Korba",
    metaTitle: "Flower Delivery in Korba CG | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Korba, Chhattisgarh. Same-day delivery of roses, bouquets & seasonal flowers across Korba. Starting from ₹399.",
    h1: "Online Flower Delivery in Korba, Chhattisgarh",
    metaKeyword: "flower delivery korba, online flowers korba cg, florist korba, flowers korba power city",
    footerContent: `
<h2>Flower Delivery in Korba — Power City's Softer Side</h2>
<p>Korba, in central Chhattisgarh on the Hasdeo River, is one of India's most critical energy production hubs — earning it the title of "Power City of Chhattisgarh." The Korba Super Thermal Power Station, Hasdeo-Bango hydroelectric dam, and the dense coal belt of Gevra and Kusmunda make Korba the backbone of the state's electricity supply to multiple states. The city has a large workforce from across India, giving it a cosmopolitan character unusual for its size. Chhattisgarhi tribal festivals like Hareli, Teeja, and Karma are celebrated alongside North Indian Holi and Diwali with equal vigour in Korba's mixed-community neighbourhoods.</p>
<p>RedHeart delivers flowers across Korba — CSEB Colony, Urga, Sector areas, Darri, and Transport Nagar. Our catalogue includes roses, seasonal mixed bouquets, marigolds, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Korba, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">CSEB Colony, Urga, Sector areas, Darri, Transport Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed bouquets, indoor plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to CSEB Colony in Korba?",
        answer: "Yes, CSEB Colony and all major residential sectors in Korba are covered under our delivery network. Same-day orders are accepted till 3 PM."
      },
      {
        question: "Can I order flowers for Hareli or Teeja festival in Korba?",
        answer: "Yes, traditional Chhattisgarhi festival flower arrangements are available during Hareli and Teeja. Seasonal flowers relevant to the tribal traditions are stocked during these festivals."
      },
      {
        question: "Are corporate flower delivery services available in Korba for NTPC or CSEB offices?",
        answer: "Yes, corporate orders for office celebrations, employee milestones, and team events are available in Korba. Bulk orders and regular gifting schedules can also be arranged."
      }
    ]
  },

  "durg": {
    cityName: "Durg",
    metaTitle: "Flower Delivery in Durg CG | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Durg, Chhattisgarh. Same-day delivery of roses, bouquets & seasonal flowers across Durg and Bhilai area. From ₹399.",
    h1: "Online Flower Delivery in Durg",
    metaKeyword: "flower delivery durg, online flowers durg chhattisgarh, florist durg, flowers durg bhilai",
    footerContent: `
<h2>Flower Delivery in Durg — Twin City Charm on the Sheonath</h2>
<p>Durg, the administrative headquarters of Durg district in Chhattisgarh, sits on the Sheonath River opposite Bhilai — the two together forming one of central India's most significant urban agglomerations. While Bhilai is famous for the Bhilai Steel Plant (one of India's largest integrated steel plants, built with Soviet cooperation in 1955), Durg is the older town with the collectorate, courts, and the traditional bazaar culture. Durg's Navratri is legendary in Chhattisgarh — the Maa Mahamaya temple draws tens of thousands daily during the nine nights, and fresh marigolds and rose offerings are in extremely high demand. The Vaishno Devi temple on Mela Ground is another important religious landmark.</p>
<p>RedHeart delivers across Durg — Smriti Nagar, Padmanabhapur, Nehru Nagar, and Supela. We offer roses, marigold garlands, mixed bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Durg, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Smriti Nagar, Padmanabhapur, Nehru Nagar, Supela</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands for Navratri, roses, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get marigold garlands for Navratri puja at Maa Mahamaya temple in Durg?",
        answer: "Yes, marigold garlands and rose offerings are our most popular items during Navratri in Durg. Due to very high demand, we recommend placing orders a day in advance during the nine nights."
      },
      {
        question: "Do you deliver flowers in Bhilai area from the Durg zone?",
        answer: "Bhilai is covered separately — please visit our Bhilai city page for deliveries to Steel Plant township, Sector areas, and Bhilai town. Durg orders are specifically for Durg municipal limits."
      },
      {
        question: "Can I send a birthday flower bouquet to Smriti Nagar in Durg?",
        answer: "Yes, Smriti Nagar is within our Durg delivery coverage. Birthday bouquets can be delivered same day for orders placed before 3 PM."
      }
    ]
  },

  "bhilai": {
    cityName: "Bhilai",
    metaTitle: "Flower Delivery in Bhilai CG | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Bhilai, Chhattisgarh. Same-day delivery to BSP sectors, Supela, Nehru Nagar & all of Bhilai. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Bhilai",
    metaKeyword: "flower delivery bhilai, online flowers bhilai cg, florist bhilai steel plant, flowers bhilai sector",
    footerContent: `
<h2>Flower Delivery in Bhilai — Steel City Softened by Petals</h2>
<p>Bhilai, home to the iconic Bhilai Steel Plant (BSP) — a symbol of India's post-independence industrial ambition built with Soviet technical collaboration — is a city unlike most Indian urban centres. Planned entirely around the steel plant in the 1950s, Bhilai has numbered sectors, wide roads, and a cosmopolitan workforce drawn from every state of India. Engineers, managers, doctors, and workers from West Bengal, Maharashtra, Odisha, and Uttar Pradesh live side by side in BSP's sector townships. This diversity is reflected in the city's cultural life: Durga Puja pandals here rival Kolkata in ambition, while Ganesh Chaturthi, Chhath, and Holi are all celebrated with equal fervour. Flowers are in constant demand across Bhilai's multi-cultural community.</p>
<p>RedHeart delivers flowers across Bhilai — Sector 1–10, Civil Lines, Supela, Power House, Nehru Nagar, and Charoda. Our range covers roses, seasonal bouquets, marigolds, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhilai, Durg, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">BSP Sectors 1–10, Supela, Power House, Nehru Nagar, Charoda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets, Durga Puja arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to BSP sector townships in Bhilai?",
        answer: "Yes, all BSP sectors are within our delivery area. Same-day delivery is available for orders placed before 3 PM. We regularly deliver to sector townships for birthdays, anniversaries, and festivals."
      },
      {
        question: "Can I order flowers for Durga Puja pandals in Bhilai?",
        answer: "Yes, Bhilai's Durga Puja celebrations are grand, and we support pandal decorators with marigold garlands, rose petals, and festive arrangements. Large orders must be placed 2–3 days in advance."
      },
      {
        question: "What flower arrangements work for a retirement farewell in Bhilai's BSP?",
        answer: "A large mixed bouquet of roses, carnations, and lilies works beautifully for retirement farewells. We also offer gift-wrapped potted plants as long-lasting alternatives to cut flowers."
      }
    ]
  },

  "rajnandgaon": {
    cityName: "Rajnandgaon",
    metaTitle: "Flower Delivery in Rajnandgaon | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Rajnandgaon, Chhattisgarh. Same-day roses, bouquets & seasonal flowers delivered across Rajnandgaon. From ₹399.",
    h1: "Online Flower Delivery in Rajnandgaon",
    metaKeyword: "flower delivery rajnandgaon, online flowers rajnandgaon cg, florist rajnandgaon, flowers rajnandgaon chhattisgarh",
    footerContent: `
<h2>Flower Delivery in Rajnandgaon — The City of the Arts in Bloom</h2>
<p>Rajnandgaon, in western Chhattisgarh along the Seonath River, holds an important place in the state's literary and cultural history. It was the hometown of Padrasbhai — the pen name of famous Hindi poet Mukutdhar Pandey — and the city has produced numerous notable authors and artists. The Rajnandgaon princely state was known for its enlightened royal court, and the tradition of arts and letters continues today. The Rajnandgaon sugar factory is one of the region's important industries, while the city's Navdurga temple draws large crowds during Navratri. The lush Dongargarh hills nearby — home to the Bambleshwari Devi temple — is a major pilgrimage site for all of Chhattisgarh.</p>
<p>RedHeart delivers flowers across Rajnandgaon — Saragaon, Gandhi Chowk, Balaji Nagar, and Rajnandgaon station area. We offer roses, marigolds, seasonal mixed bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajnandgaon, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saragaon, Gandhi Chowk, Balaji Nagar, station area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get puja flowers delivered in Rajnandgaon for Navdurga temple offerings?",
        answer: "Yes, marigold garlands, rose offerings, and complete puja flower sets are available in Rajnandgaon for the Navdurga temple and home pujas. Delivered fresh each morning."
      },
      {
        question: "Do you deliver flowers to Dongargarh area near Rajnandgaon?",
        answer: "We serve Rajnandgaon town primarily. Dongargarh, 38 km away, may have limited coverage — please check our website or call for Dongargarh availability."
      },
      {
        question: "What is the latest time I can order flowers for same-day delivery in Rajnandgaon?",
        answer: "Same-day orders in Rajnandgaon are accepted until 3 PM. For orders placed after 3 PM, next-day delivery is scheduled."
      }
    ]
  },

  "ambikapur": {
    cityName: "Ambikapur",
    metaTitle: "Flower Delivery in Ambikapur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Ambikapur, Chhattisgarh. Same-day delivery of roses, bouquets & seasonal flowers across Ambikapur. From ₹399.",
    h1: "Online Flower Delivery in Ambikapur",
    metaKeyword: "flower delivery ambikapur, online flowers ambikapur cg, florist ambikapur, flowers surguja ambikapur",
    footerContent: `
<h2>Flower Delivery in Ambikapur — Surguja's Clean, Green Capital</h2>
<p>Ambikapur, the headquarters of Surguja district in northern Chhattisgarh, has gained national attention for being one of India's cleanest cities — a distinction it has earned multiple times in central government cleanliness surveys. Situated amidst the Chota Nagpur Plateau's forest-covered hills at an elevation that keeps it noticeably cooler than other CG cities, Ambikapur has a charm unusual for a small Indian city. The Maheshpur temples and Ramgarh hill (believed to be connected to Kalidasa's Meghaduta) are nearby attractions. The tribal communities of Surguja — Oraon, Gond, and Kanwar — celebrate their own distinct festivals where natural flowers and leaves play important ceremonial roles.</p>
<p>RedHeart delivers flowers across Ambikapur — Gandhi Chowk, Bypass Road, Nehru Nagar, and Civil Lines. We stock roses, marigolds, mixed seasonal bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambikapur, Surguja, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Chowk, Bypass Road, Nehru Nagar, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed bouquets, seasonal tribal blooms</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Ambikapur throughout the year?",
        answer: "Yes, we deliver year-round in Ambikapur. The city's cool climate is actually great for flower freshness — petals last longer here than in hotter Indian cities."
      },
      {
        question: "Are eco-friendly or natural flower arrangements available in Ambikapur?",
        answer: "Yes, we offer naturally grown seasonal flowers which are in line with Ambikapur's eco-conscious identity. Potted plants are also a great eco-friendly gifting option."
      },
      {
        question: "Can I order flowers for a tribal festival occasion in Ambikapur?",
        answer: "Yes, we stock seasonal blooms and can prepare arrangements inspired by Oraon and Gond festival traditions in Ambikapur. Tell us the occasion and we'll suggest appropriate flowers."
      }
    ]
  },

  "jagdalpur": {
    cityName: "Jagdalpur",
    metaTitle: "Flower Delivery in Jagdalpur | Bastar | RedHeart",
    metaDescription: "Fresh flower delivery in Jagdalpur, Bastar, Chhattisgarh. Same-day roses, bouquets & seasonal flowers delivered across Jagdalpur. From ₹399.",
    h1: "Online Flower Delivery in Jagdalpur",
    metaKeyword: "flower delivery jagdalpur, online flowers jagdalpur bastar, florist jagdalpur cg, flowers bastar jagdalpur",
    footerContent: `
<h2>Flower Delivery in Jagdalpur — Heart of Bastar, Land of Waterfalls</h2>
<p>Jagdalpur, the headquarters of Bastar district in southern Chhattisgarh, is one of the most culturally distinctive cities in India. The Bastar region is home to the Gond, Maria, Muria, and Dhurwa tribal communities whose art — from Dhokra metal casting to Bastar terracotta — has gained global recognition. Jagdalpur's weekly market (Laxmi Bazar on Sundays) is a cultural spectacle where tribal communities come from remote forest villages to trade. The Chitrakote waterfalls (India's widest waterfall) and Tirathgarh waterfalls nearby make Jagdalpur a growing tourism destination. The Bastar Dussehra — a 75-day festival completely distinct from the mainstream Ramlila tradition — is unique in the world and uses enormous quantities of fresh flowers in processions and rituals.</p>
<p>RedHeart delivers flowers across Jagdalpur — Indravati Nagar, Dharampura, Civil Lines, and Dhurwa Road. Our selection includes roses, marigolds, seasonal bouquets, and tribal festival arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagdalpur, Bastar, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indravati Nagar, Dharampura, Civil Lines, Dhurwa Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, seasonal Bastar bouquets, tropical flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers during Bastar Dussehra celebrations in Jagdalpur?",
        answer: "Yes, Bastar Dussehra is the most important festival in Jagdalpur and we stock high quantities of marigolds and ceremonial flowers during the 75-day festival. Early orders are strongly recommended."
      },
      {
        question: "Can I get flowers delivered near Chitrakote Falls in Jagdalpur?",
        answer: "We deliver to Jagdalpur town and nearby residential areas. For specific tourist locations like Chitrakote Falls, please contact us to check feasibility of delivery."
      },
      {
        question: "What are the popular flowers for gifting in Jagdalpur?",
        answer: "Roses and marigolds are universally popular in Jagdalpur. Given the region's tropical setting, exotic flowers like anthuriums and tropical lilies are also available and well-appreciated."
      }
    ]
  },

  "anand": {
    cityName: "Anand",
    metaTitle: "Flower Delivery in Anand Gujarat | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Anand, Gujarat. Same-day delivery of roses, bouquets & seasonal flowers across Anand, Vallabh Vidyanagar & Karamsad. From ₹399.",
    h1: "Online Flower Delivery in Anand",
    metaKeyword: "flower delivery anand gujarat, online flowers anand, florist anand, flowers vallabh vidyanagar anand",
    footerContent: `
<h2>Flower Delivery in Anand — Milk Capital Blossoms with Colour</h2>
<p>Anand, a city in central Gujarat on the Mahi River plains, is globally known as the birthplace of the cooperative dairy movement that transformed Indian agriculture — this is the home of Amul and NDDB (National Dairy Development Board). The Anand Agricultural University is one of India's premier agricultural institutions, and the city has a strong scientific-intellectual atmosphere. Anand's cultural identity is proud Gujarati — with Navratri Garba being a city-wide event, and festivals like Holi and Diwali bringing the community together in spectacular fashion. Vallabh Vidyanagar, effectively a twin town, is home to Sardar Patel University and a large student population.</p>
<p>RedHeart delivers flowers across Anand, Vallabh Vidyanagar, Karamsad, and Vidyanagar Road. We offer roses, seasonal Gujarati bouquets, marigolds, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anand, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anand, Vallabh Vidyanagar, Karamsad, Vidyanagar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarati bouquets, Navratri arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Vallabh Vidyanagar along with Anand?",
        answer: "Yes, Vallabh Vidyanagar is part of our Anand delivery zone. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Can I order Navratri flower arrangements in Anand?",
        answer: "Yes, Navratri is one of Anand's biggest festivals. We stock marigold garlands, rose arrangements, and traditional Garba-themed floral décor during the nine nights."
      },
      {
        question: "Are flowers available for Karamsad area near Anand?",
        answer: "Karamsad (the birthplace of Sardar Patel) is covered under our Anand delivery zone. Same-day delivery is available for orders placed before 3 PM."
      }
    ]
  },

  "nadiad": {
    cityName: "Nadiad",
    metaTitle: "Flower Delivery in Nadiad | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Nadiad, Gujarat. Same-day delivery of roses, bouquets & seasonal flowers across Nadiad and Kheda district. From ₹399.",
    h1: "Online Flower Delivery in Nadiad",
    metaKeyword: "flower delivery nadiad, online flowers nadiad gujarat, florist nadiad kheda, fresh flowers nadiad",
    footerContent: `
<h2>Flower Delivery in Nadiad — The Surgeons' City in Bloom</h2>
<p>Nadiad, the headquarters of Kheda district in central Gujarat, has earned a remarkable reputation in Indian healthcare — so many skilled surgeons have originated from this small city that it is sometimes called the "City of Surgeons." The Nadiad municipality is one of Gujarat's oldest, and the city's well-established Brahmin and Patidar communities have a tradition of philanthropy, education, and cultural life. The Swaminarayan temple in Nadiad is an architecturally significant religious landmark, while the Nadiad Hospital (NHL Municipal Medical College system affiliate) is known across Gujarat. Navratri celebrations in Nadiad are elaborate, with multiple Garba venues running simultaneously across the old and new parts of the city.</p>
<p>RedHeart delivers flowers across Nadiad — Station Road, Mahalaxmi Road, Civil Lines, and Sojitra Road. We offer roses, marigolds, seasonal bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nadiad, Kheda, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Mahalaxmi Road, Civil Lines, Sojitra Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarati bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to a hospital in Nadiad for a recovering patient?",
        answer: "Yes, get-well-soon flower arrangements are popular in Nadiad's medical community. Potted plants and cheerful mixed bouquets are ideal for hospital room gifting."
      },
      {
        question: "Do you deliver to the Swaminarayan temple area in Nadiad?",
        answer: "Yes, the Swaminarayan temple area is within our delivery coverage in Nadiad. Devotional flower arrangements are available for temple occasions."
      },
      {
        question: "What flowers are popular in Nadiad for Navratri?",
        answer: "Marigold torans, rose garlands, and yellow and orange floral arrangements are very popular in Nadiad during Navratri. We recommend ordering a day in advance during the nine-day festival."
      }
    ]
  },

  "navsari": {
    cityName: "Navsari",
    metaTitle: "Flower Delivery in Navsari | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Navsari, Gujarat. Same-day roses, bouquets & tropical flowers delivered across Navsari town. Starting ₹399.",
    h1: "Online Flower Delivery in Navsari",
    metaKeyword: "flower delivery navsari, online flowers navsari gujarat, florist navsari, flowers navsari parsi",
    footerContent: `
<h2>Flower Delivery in Navsari — Parsi Heritage Town in Full Colour</h2>
<p>Navsari, a small historic city in South Gujarat between Surat and Valsad, holds a uniquely important place in Indian cultural history. It was here that the Parsi (Zoroastrian) community first settled upon arriving from Persia over 1,000 years ago — and the Navsari Atash Behram, one of only five high-grade fire temples in the world, remains an important Zoroastrian pilgrimage site. Navsari produced one of India's greatest freedom fighters, Dadabhai Naoroji, the "Grand Old Man of India." The city's sugarcane and mango orchards make it quintessentially south Gujarati, and the local population is known for its love of good food, music, and community celebrations.</p>
<p>RedHeart delivers flowers across Navsari — Dudhia Talav, Station Road, Sayaji Road, and Bai Avabai Framji Petit Hospital Road area. Our catalogue covers roses, seasonal tropical flowers, marigolds, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navsari, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dudhia Talav, Station Road, Sayaji Road, Navsari town</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tropical bouquets, marigolds, seasonal south Gujarat flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for a Nowruz or Parsi festival celebration in Navsari?",
        answer: "Yes, fresh flowers for Nowruz (Parsi New Year) are very popular in Navsari. Fragrant white roses, tuberose (rajnigandha), and mixed seasonal arrangements are traditional favourites."
      },
      {
        question: "What tropical flowers are available for delivery in Navsari?",
        answer: "South Gujarat's climate supports a good range of tropical blooms. We carry anthuriums, bird of paradise, tropical lilies, and seasonal exotic arrangements in Navsari."
      },
      {
        question: "Do you deliver flowers to Bilimora area near Navsari?",
        answer: "Bilimora, about 17 km from Navsari, is covered in our extended delivery zone. For Bilimora deliveries, please place orders by 12 PM for same-day service."
      }
    ]
  },

  "valsad": {
    cityName: "Valsad",
    metaTitle: "Flower Delivery in Valsad | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Valsad, Gujarat. Same-day delivery of roses, bouquets & tropical flowers across Valsad and Tithal area. Starting ₹399.",
    h1: "Online Flower Delivery in Valsad",
    metaKeyword: "flower delivery valsad, online flowers valsad gujarat, florist valsad, flowers valsad tithal",
    footerContent: `
<h2>Flower Delivery in Valsad — Coastal Gujarat's Mango and Flower Country</h2>
<p>Valsad, the southernmost coastal district headquarters of Gujarat, is a verdant city famous for its Alphonso mangoes, chikoo (sapodilla) orchards, and the scenic Tithal Beach nearby on the Arabian Sea. The city is part of South Gujarat's prosperous agrarian belt and has a significant presence of Adivasi communities from the surrounding Dharampur hills. Valsad town itself has an old-world charm — colonial-era buildings from when it was part of the Bombay Presidency, a lively textile market, and a close-knit Parsi community make it distinctive. The city's flower markets are particularly vibrant during Holi, Navratri, and the wedding season that sees large Gujarati families gathering for celebrations.</p>
<p>RedHeart delivers flowers across Valsad — Tithal Road, Station Road, Udhna Magdalla area, and Dharampur Road. We offer roses, tropical arrangements, marigolds, and seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Valsad, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tithal Road, Station Road, Dharampur Road, Valsad town</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tropical bouquets, marigolds, seasonal coastal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to Tithal Beach resort area in Valsad?",
        answer: "Yes, we deliver to hotels and resorts near Tithal Beach. A romantic coastal bouquet can be delivered to your stay for anniversaries and special occasions."
      },
      {
        question: "Do you deliver flowers to Dharampur hills area near Valsad?",
        answer: "Dharampur town near Valsad is in our extended zone. Please order before 12 PM for same-day delivery to Dharampur. Hill resort areas may require prior confirmation."
      },
      {
        question: "What flowers work well in Valsad's coastal humid climate?",
        answer: "Tropical flowers like anthuriums, heliconia, and bird of paradise thrive naturally in Valsad's climate. Roses and carnations with good cold-chain handling also remain fresh during delivery."
      }
    ]
  },

  "morbi": {
    cityName: "Morbi",
    metaTitle: "Flower Delivery in Morbi | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Morbi, Gujarat. Same-day delivery of roses, bouquets & seasonal flowers across Morbi ceramic city. Starting ₹399.",
    h1: "Online Flower Delivery in Morbi",
    metaKeyword: "flower delivery morbi, online flowers morbi gujarat, florist morbi, flowers morbi ceramic city",
    footerContent: `
<h2>Flower Delivery in Morbi — The Ceramic Tile Capital of the World</h2>
<p>Morbi, a mid-sized city in the Saurashtra region of Gujarat on the Machhu River, holds the remarkable distinction of being the world's largest producer of ceramic tiles — the "Ceramic Capital of the World." Over 700 ceramic manufacturing units dot the city's industrial landscape, supplying tiles to markets across India and over 100 countries. The city rebuilds: it famously recovered after the catastrophic 1979 Machhu dam failure and again after the 2001 earthquake to emerge stronger. Morbi's business community is entrepreneurial and community-minded, with Gujarati business festivals like Diwali (new financial year) and Navratri being particularly important to its trading families.</p>
<p>RedHeart delivers flowers across Morbi — Wankaner Road, Industrial Area, Ravapar Road, and Jadeja Colony. Our catalogue includes roses, marigolds, seasonal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morbi, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wankaner Road, Industrial Area, Ravapar Road, Jadeja Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets, Diwali arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order corporate flower gifts for Morbi's ceramic industry offices?",
        answer: "Yes, corporate gifting is popular in Morbi's business community. We offer bulk bouquet packages and regular gifting arrangements for ceramic and manufacturing companies."
      },
      {
        question: "Are Diwali flower arrangements available in Morbi?",
        answer: "Yes, marigold door torans, rose arrangements, and festive gift boxes are popular during Diwali in Morbi — the most important festival for its business community."
      },
      {
        question: "What is the delivery range in Morbi?",
        answer: "We cover Morbi town and surrounding industrial areas including Wankaner Road, Industrial Area, and Ravapar Road. Remote villages outside Morbi municipality may have limited coverage."
      }
    ]
  },

  "bharuch": {
    cityName: "Bharuch",
    metaTitle: "Flower Delivery in Bharuch | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Bharuch (Broach), Gujarat. Same-day roses, bouquets & seasonal flowers delivered across Bharuch and GIDC area. From ₹399.",
    h1: "Online Flower Delivery in Bharuch",
    metaKeyword: "flower delivery bharuch, online flowers bharuch gujarat, florist bharuch broach, flowers bharuch ankleshwar",
    footerContent: `
<h2>Flower Delivery in Bharuch — Narmada's Gateway City in Bloom</h2>
<p>Bharuch (historically known as Broach), at the mouth of the Narmada River on the Gulf of Khambhat, is one of India's most ancient port cities — recorded by Greek geographers and Roman merchants as an important trading hub over 2,000 years ago. Today, Bharuch is a major petrochemical and chemical industrial centre, home to the GIDC (Gujarat Industrial Development Corporation) clusters at Dahej and Ankleshwar. The city's cultural heritage is rich: the Bharuch fort and the Jama Masjid date to medieval times, while the Golden Bridge over the Narmada is an engineering landmark. The city's mixed Hindu-Muslim-Jain community celebrates all festivals with characteristic Gujarati enthusiasm.</p>
<p>RedHeart delivers flowers across Bharuch — Station Road, Kasak, Zadeshwar, and Kanthariya Road. We offer roses, seasonal bouquets, marigolds, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharuch (Broach), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Kasak, Zadeshwar, Kanthariya Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets, industrial gifting sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Ankleshwar GIDC area near Bharuch?",
        answer: "Ankleshwar is covered under our Bharuch delivery zone. Corporate flower delivery for offices and plant inaugurations in the GIDC area is available with advance notice."
      },
      {
        question: "Can I order flowers for a Jain paryushan or Hindu festival in Bharuch?",
        answer: "Yes, both Jain and Hindu festival arrangements are available in Bharuch. White roses and mogra for Paryushan, marigold torans for Navratri, and rose arrangements for Diwali can all be ordered."
      },
      {
        question: "Are flowers available for delivery in Zadeshwar colony in Bharuch?",
        answer: "Yes, Zadeshwar is a key residential area within our Bharuch delivery zone. Same-day delivery is available for orders placed before 3 PM."
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
