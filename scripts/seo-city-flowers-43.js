// Batch 43 — 15 cities:
// Madhya Pradesh: Morena, Bhind, Sheopur, Dindori, Anuppur
// Rajasthan: Rajsamand, Sirohi, Jaisalmer, Pratapgarh (RJ)
// Uttar Pradesh: Basti, Sonbhadra, Lalitpur
// Bihar: Araria, Kishanganj, Aurangabad

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "morena": {
    cityName: "Morena",
    metaTitle: "Flower Delivery in Morena | Chambal MP | RedHeart",
    metaDescription: "Order flowers in Morena, Madhya Pradesh. Same-day delivery near Chambal valley & across Morena. From ₹399.",
    h1: "Online Flower Delivery in Morena",
    metaKeyword: "flower delivery morena, online flowers morena madhya pradesh, florist morena, flowers morena chambal ravines dacoit country gwalior",
    footerContent: `
<h2>Flower Delivery in Morena — Chambal's Ravine Country Between Gwalior and Agra</h2>
<p>Morena, in the Chambal River valley of northern Madhya Pradesh near the UP border, is the headquarters of Morena district — a region historically notorious as the heartland of the Chambal ravines and dacoity culture (the badlands, where deep ravines carved by the Chambal River provided hiding grounds for outlaws and dacoit gangs for centuries). The district is also the site of Padavli (an ancient Gurjara-Pratihara temple complex with a spectacular stepped tank and Shiva shrine) and the Bateshwar temple group (an extraordinary collection of 200+ Gupta and Pratihara era temples recently painstakingly reassembled by the Archaeological Survey of India). Morena is also known for gajak — the sesame and jaggery sweet that is the region's most famous food product, exported across North India during winter.</p>
<p>RedHeart delivers flowers across Morena — Main Market, Gwalior Road, Ambah area, Joura area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morena, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gwalior Road, Ambah, Joura, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Diwali available in Morena?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Morena for same-day delivery." },
      { question: "Can I get birthday roses in Morena?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Morena for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Morena?", answer: "Yes, same-day delivery is available across Morena for orders placed before 3 PM." }
    ]
  },

  "bhind": {
    cityName: "Bhind",
    metaTitle: "Flower Delivery in Bhind | Chambal MP | RedHeart",
    metaDescription: "Order flowers in Bhind, Madhya Pradesh. Same-day delivery near Chambal ravines & across Bhind. From ₹399.",
    h1: "Online Flower Delivery in Bhind",
    metaKeyword: "flower delivery bhind, online flowers bhind madhya pradesh, florist bhind, flowers bhind chambal yamuna ravines mp up border",
    footerContent: `
<h2>Flower Delivery in Bhind — The Yamuna-Chambal Doab at the Edge of Chambal's Ravines</h2>
<p>Bhind, in the extreme north of Madhya Pradesh at the confluence zone of the Yamuna and Chambal rivers, is the headquarters of Bhind district — a district in the deeply entrenched Chambal ravine belt, where the Yamuna's southern bank and the Chambal's eastern bank create a labyrinthine landscape of gullies (beehads) that historically sheltered dacoit gangs. The Bhind-Morena corridor was the most notorious dacoit territory in 20th-century India (the gangs of Phoolan Devi, Man Singh, and Gabbar Singh of folklore fame operated in adjacent districts). Today the district's irrigation from the Chambal River Command has transformed agriculture. The ancient Gurdwara Sahib at Ater and the Ater Fort (a Bundela Rajput fort on the Chambal) are heritage landmarks.</p>
<p>RedHeart delivers flowers across Bhind — Main Market, Morena Road, Lahar area, Ater area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhind, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Morena Road, Lahar, Ater, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Navratri available in Bhind?", answer: "Yes, Navratri marigold and rose arrangements for the 9-night festival are available in Bhind for same-day delivery." },
      { question: "Can I get birthday flowers in Bhind?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Bhind for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Bhind?", answer: "Yes, same-day delivery is available across Bhind for orders placed before 3 PM." }
    ]
  },

  "sheopur": {
    cityName: "Sheopur",
    metaTitle: "Flower Delivery in Sheopur | Kuno MP | RedHeart",
    metaDescription: "Order flowers in Sheopur, Madhya Pradesh. Same-day delivery near Kuno National Park & across Sheopur. From ₹399.",
    h1: "Online Flower Delivery in Sheopur",
    metaKeyword: "flower delivery sheopur, online flowers sheopur madhya pradesh, florist sheopur, flowers sheopur kuno national park cheetah chambal",
    footerContent: `
<h2>Flower Delivery in Sheopur — Kuno National Park's District, Home of India's Reintroduced Cheetahs</h2>
<p>Sheopur, in the Chambal-Kuno river confluence area of northwestern Madhya Pradesh near Rajasthan, is the headquarters of Sheopur district — a remote, forested district that became globally famous in September 2022 when India reintroduced cheetahs from Namibia into the Kuno National Park within the district. The Kuno National Park (named for the Kuno River, a Chambal tributary) was originally developed to receive Asiatic lions from Gir as a second population, but the lions never came; instead it became the site of the landmark cheetah reintroduction — the first large carnivore reintroduction in India and the first in the world for cheetahs. The Sabalgarh Fort (a Maratha-era fort) and the Kuno's wildlife corridors connecting to the Ranthambore and Chambal systems are key features.</p>
<p>RedHeart delivers flowers across Sheopur — Main Market, Gwalior Road, Sabalgarh area, Kuno Safari Zone, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheopur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gwalior Road, Sabalgarh, Kuno Safari Zone, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, safari resort bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Kuno cheetah safari resort anniversary in Sheopur?", answer: "Yes, the Kuno National Park's eco-lodges are in Sheopur district. Rose bouquets for wildlife resort anniversary stays — now with cheetahs — can be delivered in Sheopur." },
      { question: "Are flowers for Diwali available in Sheopur?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Sheopur for same-day delivery." },
      { question: "Do you deliver flowers same day in Sheopur?", answer: "Yes, same-day delivery is available across Sheopur for orders placed before 3 PM." }
    ]
  },

  "dindori": {
    cityName: "Dindori",
    metaTitle: "Flower Delivery in Dindori | Maikal Hills MP | RedHeart",
    metaDescription: "Order flowers in Dindori, Madhya Pradesh. Same-day delivery near Maikal Hills & across Dindori. From ₹399.",
    h1: "Online Flower Delivery in Dindori",
    metaKeyword: "flower delivery dindori, online flowers dindori madhya pradesh, florist dindori, flowers dindori maikal hills baiga tribal narmada",
    footerContent: `
<h2>Flower Delivery in Dindori — Narmada's Birthplace District in the Maikal Hills</h2>
<p>Dindori, in the Maikal Range of eastern Madhya Pradesh, is the headquarters of Dindori district — a forested, hilly district in the Narmada River's upper basin. The Narmada River originates at Amarkantak (in the adjacent Anuppur district), and the upper Narmada valley flows through Dindori. The district has the highest proportion of Baiga tribal population in Madhya Pradesh — the Baiga are a "particularly vulnerable tribal group" (PVTG) known for their slash-and-burn (bewar) agriculture tradition, distinctive beadwork, elaborate tattoo art, and deep forest knowledge. The Shahpura area of Dindori has ancient rock paintings in caves. The Kabra Pahad rock shelters and the Ramnath temple in Dindori town are local attractions.</p>
<p>RedHeart delivers flowers across Dindori — Main Market, Jabalpur Road, Mandla Road, Shahpura area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dindori, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jabalpur Road, Mandla Road, Shahpura, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maikal Hills bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Narmada Jayanti available from Dindori?", answer: "Yes, Narmada Jayanti (the river goddess's birthday) is celebrated at Amarkantak near Dindori. Marigold and floral offerings for the river puja are available from Dindori." },
      { question: "Can I get birthday flowers in Dindori?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Dindori for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Dindori?", answer: "Yes, same-day delivery is available across Dindori for orders placed before 3 PM." }
    ]
  },

  "anuppur": {
    cityName: "Anuppur",
    metaTitle: "Flower Delivery in Anuppur | Amarkantak MP | RedHeart",
    metaDescription: "Order flowers in Anuppur, Madhya Pradesh. Same-day delivery near Amarkantak & across Anuppur. From ₹399.",
    h1: "Online Flower Delivery in Anuppur",
    metaKeyword: "flower delivery anuppur, online flowers anuppur madhya pradesh, florist anuppur, flowers anuppur amarkantak narmada son johilla origin",
    footerContent: `
<h2>Flower Delivery in Anuppur — Amarkantak's Home District Where Three Sacred Rivers Are Born</h2>
<p>Anuppur, in the Maikal Range of eastern Madhya Pradesh, is the headquarters of Anuppur district — a district of supreme religious significance because it is home to Amarkantak, the mountain plateau where the Narmada River, the Son River, and the Johilla River all originate. Amarkantak ("immortal pillar") is a Shaiva pilgrimage centre of extraordinary importance — the Narmada Udgam (Narmada's source) with its ancient temple complex, the Kapildhara and Dudh Dhara waterfalls, and the Shri Yantra at the Narmada Kund draw lakhs of pilgrims annually. The Amarkantak Forest Reserve is a biodiversity hotspot in the Satpura-Vindhya-Maikal ecological junction. The Anuppur district's coal mines (Johilla Coalfield) are also a major industrial presence.</p>
<p>RedHeart delivers flowers across Anuppur — Main Market, Amarkantak Road, Shahdol Road, Kotma area, and Station Road. Our range includes roses, marigolds, lotus, and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anuppur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Amarkantak Road, Shahdol Road, Kotma, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, Narmada puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Narmada Udgam puja at Amarkantak available from Anuppur?", answer: "Yes, lotus, marigold, and river puja sets for the Narmada Udgam temple complex at Amarkantak are available from Anuppur. Amarkantak is about 45 km from Anuppur town." },
      { question: "Can I get flowers for Shivaratri near Amarkantak?", answer: "Yes, Shivaratri at the ancient Amarkantak temples draws large numbers of pilgrims. Bilva, marigold, and Shiva puja sets are available from Anuppur." },
      { question: "Do you deliver flowers same day in Anuppur?", answer: "Yes, same-day delivery is available across Anuppur for orders placed before 3 PM." }
    ]
  },

  "rajsamand": {
    cityName: "Rajsamand",
    metaTitle: "Flower Delivery in Rajsamand | Lake City Rajasthan | RedHeart",
    metaDescription: "Order flowers in Rajsamand, Rajasthan. Same-day delivery near Rajsamand Lake & across Rajsamand. From ₹399.",
    h1: "Online Flower Delivery in Rajsamand",
    metaKeyword: "flower delivery rajsamand, online flowers rajsamand rajasthan, florist rajsamand, flowers rajsamand lake kumbhalgarh marble udaipur",
    footerContent: `
<h2>Flower Delivery in Rajsamand — Marble Country and the Lake of Emperor Raj Singh</h2>
<p>Rajsamand, in south-central Rajasthan between Udaipur and Ajmer, is the headquarters of Rajsamand district — a region of marble quarries, lake palaces, and Mewar Rajput heritage. The Rajsamand Lake (Raj Samand) is an extraordinary 17th-century artificial lake built by Maharana Raj Singh I of Mewar in 1662 — the largest man-made lake built in a single reign in India at that time, with a magnificent marble embankment lined with pavilions and the "Raj Prashasti" (one of the longest Sanskrit inscriptions in the world, covering the history of the Sisodia dynasty). The Kumbhalgarh Fort — the second-longest wall in the world (after China's Great Wall) and a UNESCO World Heritage Site — is in Rajsamand district. The Nathdwara Shrinathji temple (the most prominent Vaishnava shrine in Rajasthan) is also here.</p>
<p>RedHeart delivers flowers across Rajsamand — Main Market, Nathdwara Road, Kumbhalgarh Road, Railmagra area, and Station Road. Our range includes roses, marigolds, Vaishnava puja flowers, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajsamand, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Nathdwara Road, Kumbhalgarh Road, Railmagra, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Nathdwara puja sets, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Nathdwara Shrinathji temple puja available from Rajsamand?", answer: "Yes, Vaishnava puja flowers — marigold, lotus, Tulsi — for the Shrinathji temple at Nathdwara (about 18 km from Rajsamand) are available for same-day delivery." },
      { question: "Can I get flowers for a Kumbhalgarh Fort heritage stay from Rajsamand?", answer: "Yes, Kumbhalgarh's heritage resorts are about 45 km from Rajsamand. Anniversary rose bouquets for fort-view stays can be coordinated." },
      { question: "Do you deliver flowers same day in Rajsamand?", answer: "Yes, same-day delivery is available across Rajsamand for orders placed before 3 PM." }
    ]
  },

  "sirohi": {
    cityName: "Sirohi",
    metaTitle: "Flower Delivery in Sirohi | Mount Abu Rajasthan | RedHeart",
    metaDescription: "Order flowers in Sirohi, Rajasthan. Same-day delivery near Mount Abu & across Sirohi. From ₹399.",
    h1: "Online Flower Delivery in Sirohi",
    metaKeyword: "flower delivery sirohi, online flowers sirohi rajasthan, florist sirohi, flowers sirohi mount abu dilwara jain aravalli",
    footerContent: `
<h2>Flower Delivery in Sirohi — Gateway to Mount Abu and the Dilwara Jain Temples</h2>
<p>Sirohi, in the southern Aravalli Range of Rajasthan near the Gujarat border, is the headquarters of Sirohi district — the district that contains Mount Abu, Rajasthan's only hill station (and one of India's coolest spots in summer). The Dilwara Jain temples at Mount Abu (11th-13th century CE) are among the finest examples of Jain marble architecture in the world — their impossibly intricate carved marble ceilings and columns (the Vimala Vasahi and Tejpal temples) are compared to the finest lace-work in stone. The Gurushikhar (the highest peak in the Aravalli Range at 1,722 m) is also in Sirohi district. The Achalgarh Fort and the Toad Rock at Mt Abu are popular stops. Sirohi town has the ancient Chandravati temples (Paramara dynasty ruins).</p>
<p>RedHeart delivers flowers across Sirohi — Main Market, Mount Abu Road, Pindwara area, Reodar area, and Station Road. Our range includes roses, marigolds, orchids, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirohi, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mount Abu Road, Pindwara, Reodar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, Mount Abu resort bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Mount Abu honeymoon or anniversary from Sirohi?", answer: "Yes, Mount Abu is about 65 km from Sirohi and is Rajasthan's most popular hill station honeymoon destination. Rose and orchid bouquets for mountain resort anniversaries can be coordinated from Sirohi." },
      { question: "Are flowers for Paryushana (Jain festival) available in Sirohi?", answer: "Yes, the Jain community is significant in Sirohi (near the Dilwara temples). Paryushana festival flowers and white/yellow marigold arrangements are available." },
      { question: "Do you deliver flowers same day in Sirohi?", answer: "Yes, same-day delivery is available across Sirohi for orders placed before 3 PM." }
    ]
  },

  "jaisalmer": {
    cityName: "Jaisalmer",
    metaTitle: "Flower Delivery in Jaisalmer | Golden City Rajasthan | RedHeart",
    metaDescription: "Order flowers in Jaisalmer, Rajasthan. Same-day delivery near Thar desert forts & across Jaisalmer. From ₹399.",
    h1: "Online Flower Delivery in Jaisalmer",
    metaKeyword: "flower delivery jaisalmer, online flowers jaisalmer rajasthan, florist jaisalmer, flowers jaisalmer golden city fort thar desert camel",
    footerContent: `
<h2>Flower Delivery in Jaisalmer — The Golden City Rising from the Thar Desert</h2>
<p>Jaisalmer, in the heart of the Thar Desert of western Rajasthan near the Pakistan border, is one of India's most breathtaking cities — the massive Jaisalmer Fort (Sonar Quila, "Golden Fort"), built in 1156 CE by Rawal Jaisal, rises from the desert like a mirage of honey-gold sandstone. Unusually among Indian forts, Jaisalmer Fort is a living city — thousands of residents, hotels, restaurants, and temples are inside its ancient walls. The Patwon ki Haveli (a complex of five mansions with the finest merchant house façades in Rajasthan), Sam Sand Dunes (the classic Thar desert landscape with camel rides and sunset views), and the Kuldhara ghost village (abandoned overnight by the Paliwal Brahmin community in the 19th century) are iconic attractions. The Desert National Park (home to the Great Indian Bustard, India's most critically endangered bird) is here.</p>
<p>RedHeart delivers flowers across Jaisalmer — Fort area, Main Market, Sam Road, Barmer Road, and Hotel Zone. Our range includes roses, marigolds, orchids, and seasonal desert Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jaisalmer, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fort area, Main Market, Sam Road, Barmer Road, Hotel Zone</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, desert camp anniversary bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a desert camp anniversary at Sam Sand Dunes?", answer: "Yes, Jaisalmer's luxury desert camps at Sam Dunes are one of India's most romantic settings. Rose and orchid bouquets for sunset camel ride anniversaries and desert camp specials can be delivered same-day." },
      { question: "Are flowers for the Jaisalmer Desert Festival available?", answer: "Yes, the Jaisalmer Desert Festival (February) draws thousands. Seasonal Rajasthan bouquets for hotel stays and cultural events during the festival are available." },
      { question: "Do you deliver flowers same day in Jaisalmer?", answer: "Yes, same-day delivery is available across Jaisalmer for orders placed before 3 PM." }
    ]
  },

  "pratapgarh-rj": {
    cityName: "Pratapgarh",
    metaTitle: "Flower Delivery in Pratapgarh | Rajasthan | RedHeart",
    metaDescription: "Order flowers in Pratapgarh, Rajasthan. Same-day delivery near Chittorgarh & across Pratapgarh. From ₹399.",
    h1: "Online Flower Delivery in Pratapgarh",
    metaKeyword: "flower delivery pratapgarh rajasthan, online flowers pratapgarh rajasthan, florist pratapgarh rj, flowers pratapgarh rajasthan thakur tribal mp border",
    footerContent: `
<h2>Flower Delivery in Pratapgarh — Rajasthan's Youngest District at the MP Border's Tribal Edge</h2>
<p>Pratapgarh, in southern Rajasthan near the Madhya Pradesh border, is the headquarters of Pratapgarh district — Rajasthan's newest district (created 2008, carved from Chittorgarh, Banswara, and Udaipur). The district is in a forested, hilly transitional zone between the Aravalli-Vindhya ranges where Rajasthan's tribal belt (Bhil, Meena, and Garasia communities) meets the Malwa plateau. The Pratapgarh area is known for its distinctive Thakur Rajput culture and the thickly wooded Jakhna and Sitamata sanctuaries (Sitamata Wildlife Sanctuary, in Pratapgarh, protects flying squirrels, sloth bears, and leopards in one of Rajasthan's greenest landscapes). The Kagdiwala region (known for its Gond-style art tradition on stone) is a cultural highlight.</p>
<p>RedHeart delivers flowers across Pratapgarh — Main Market, Chittorgarh Road, Banswara Road, Chhoti Sadri area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Chittorgarh Road, Banswara Road, Chhoti Sadri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Teej available in Pratapgarh Rajasthan?", answer: "Yes, Teej is a major festival in Pratapgarh's Rajasthani community. Marigold garlands and seasonal bouquets for the monsoon festival are available." },
      { question: "Can I get flowers for a Sitamata Wildlife Sanctuary resort from Pratapgarh?", answer: "Yes, the Sitamata Wildlife Sanctuary eco-lodges are in Pratapgarh district. Seasonal flower arrangements for nature resort stays can be delivered in Pratapgarh." },
      { question: "Do you deliver flowers same day in Pratapgarh Rajasthan?", answer: "Yes, same-day delivery is available across Pratapgarh, Rajasthan for orders placed before 3 PM." }
    ]
  },

  "basti": {
    cityName: "Basti",
    metaTitle: "Flower Delivery in Basti | Awadh UP | RedHeart",
    metaDescription: "Order flowers in Basti, Uttar Pradesh. Same-day delivery near Gorakhpur & across Basti. From ₹399.",
    h1: "Online Flower Delivery in Basti",
    metaKeyword: "flower delivery basti, online flowers basti uttar pradesh, florist basti, flowers basti awadh gorakhpur ayodhya sugar belt",
    footerContent: `
<h2>Flower Delivery in Basti — Awadh's Eastern Agricultural Hub Between Gorakhpur and Ayodhya</h2>
<p>Basti, in eastern Uttar Pradesh, is the headquarters of Basti district — a fertile agricultural district in the Rapti River basin between the great pilgrimage cities of Ayodhya and Gorakhpur. The district is in the heartland of the Awadhi cultural belt, where the Awadhi language and cuisine traditions are strongest (Basti's cuisine is known for its bherwa biryani and slow-cooked Awadhi meats). Basti has the ancient Mahadevia Ghat (a Shiva pilgrimage site on the Kuano River) and the Kamasin temple complex. The district is a major sugarcane producer — the sugar mills at Harraiya and Walterganj are important rural industries. Basti is on the railway corridor between Lucknow and Gorakhpur, making it a key transit hub for the pilgrimage belt.</p>
<p>RedHeart delivers flowers across Basti — Main Market, Gorakhpur Road, Lucknow Road, Harraiya area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Basti, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gorakhpur Road, Lucknow Road, Harraiya, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Diwali available in Basti?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Basti for same-day delivery." },
      { question: "Can I get birthday flowers in Basti?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Basti for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Basti?", answer: "Yes, same-day delivery is available across Basti for orders placed before 3 PM." }
    ]
  },

  "sonbhadra": {
    cityName: "Sonbhadra",
    metaTitle: "Flower Delivery in Sonbhadra | Energy District UP | RedHeart",
    metaDescription: "Order flowers in Sonbhadra, Uttar Pradesh. Same-day delivery near Rihand Dam & across Sonbhadra. From ₹399.",
    h1: "Online Flower Delivery in Sonbhadra",
    metaKeyword: "flower delivery sonbhadra, online flowers sonbhadra uttar pradesh, florist sonbhadra, flowers sonbhadra rihand power plants vindhya tribal",
    footerContent: `
<h2>Flower Delivery in Sonbhadra — Vindhya's Power Industrial Belt at the UP-MP-Jharkhand-CG Junction</h2>
<p>Sonbhadra, in the extreme southeastern corner of Uttar Pradesh, is the headquarters of Sonbhadra district — a district unique in India for bordering four states simultaneously (UP, Madhya Pradesh, Jharkhand, and Chhattisgarh). The Son River gives the district its name, and the Rihand River's dam (Govind Ballabh Pant Sagar — India's largest man-made lake) creates a massive reservoir between Sonbhadra (UP) and Singrauli (MP). The district hosts one of India's most concentrated power generation clusters: Anpara and Obra thermal power stations are here. The Kaimur Wildlife Sanctuary's Renukoot-Amaiya forests cover the district's southern hills. The Agori and Dudhi tribal areas have significant Kol, Gond, and Oraon populations in the forest belt.</p>
<p>RedHeart delivers flowers across Sonbhadra — Main Market, Robertsganj area, Renukoot area, Obra area, and Chopan area. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonbhadra, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Robertsganj, Renukoot, Obra, Chopan, Anpara area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, corporate gifting bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are corporate gifting flowers for Anpara and Obra power plant offices available in Sonbhadra?", answer: "Yes, corporate flower arrangements for industrial offices at the Anpara and Obra thermal power stations in Sonbhadra are available for same-day delivery." },
      { question: "Can I get flowers for Diwali in Sonbhadra?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Sonbhadra for same-day delivery." },
      { question: "Do you deliver flowers same day in Sonbhadra?", answer: "Yes, same-day delivery is available across Sonbhadra for orders placed before 3 PM." }
    ]
  },

  "lalitpur": {
    cityName: "Lalitpur",
    metaTitle: "Flower Delivery in Lalitpur | Bundelkhand UP | RedHeart",
    metaDescription: "Order flowers in Lalitpur, Uttar Pradesh. Same-day delivery near Betwa river & across Lalitpur. From ₹399.",
    h1: "Online Flower Delivery in Lalitpur",
    metaKeyword: "flower delivery lalitpur, online flowers lalitpur uttar pradesh, florist lalitpur, flowers lalitpur bundelkhand betwa chanderi border",
    footerContent: `
<h2>Flower Delivery in Lalitpur — Bundelkhand's Southern Doorstep on the Betwa-Dhasan Plateau</h2>
<p>Lalitpur, in the southernmost UP at the border with Madhya Pradesh, is the headquarters of Lalitpur district — a dry, rocky Bundelkhand district on the Betwa River's upper catchment plateau. The district borders the Chanderi area (famous for its silk), Tikamgarh (Madhya Pradesh), and the Orchha heritage zone. The town of Devgarh (in Lalitpur district) has one of India's most important Gupta-period Vishnu temples — the Dashavtara Temple (5th century CE), which features an exquisite Anantashayana Vishnu relief panel (one of the earliest iconic representations of Vishnu reclining on the serpent Ananta). The Rajghati and Madan Sagar reservoirs on the Betwa provide irrigation water for this drought-prone region.</p>
<p>RedHeart delivers flowers across Lalitpur — Main Market, Jhansi Road, Sagar Road, Devgarh area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jhansi Road, Sagar Road, Devgarh, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Diwali available in Lalitpur?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Lalitpur for same-day delivery." },
      { question: "Can I get flowers for Navratri in Lalitpur?", answer: "Yes, Navratri Devi puja marigold and rose arrangements are available in Lalitpur for same-day delivery." },
      { question: "Do you deliver flowers same day in Lalitpur?", answer: "Yes, same-day delivery is available across Lalitpur for orders placed before 3 PM." }
    ]
  },

  "araria": {
    cityName: "Araria",
    metaTitle: "Flower Delivery in Araria | Kosi Belt Bihar | RedHeart",
    metaDescription: "Order flowers in Araria, Bihar. Same-day delivery near Kosi river & across Araria. From ₹399.",
    h1: "Online Flower Delivery in Araria",
    metaKeyword: "flower delivery araria, online flowers araria bihar, florist araria, flowers araria kosi river nepal border terai flood plain",
    footerContent: `
<h2>Flower Delivery in Araria — Kosi's Flood-Prone Terai District at the Nepal Border</h2>
<p>Araria, in the Kosi River basin of northeastern Bihar near the Nepal border, is the headquarters of Araria district — one of Bihar's most flood-vulnerable districts, in the path of the Kosi River (known as the "Sorrow of Bihar" for its devastating annual floods that shift course unpredictably across the floodplain). The Kosi River's silt-rich floods, while destructive, also deposit highly fertile soil — making the Araria region's agricultural land among the most productive in North Bihar when not flooded. The district has a diverse population with significant Hindu and Muslim communities and borders Nepal's Jhapa district. The Araria district was at the epicentre of the 2008 Kosi flood — one of the worst humanitarian disasters in post-independence India, displacing over 3 million people.</p>
<p>RedHeart delivers flowers across Araria — Main Market, Purnia Road, Forbesganj area, Narpatganj area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Araria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Purnia Road, Forbesganj, Narpatganj, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Araria?", answer: "Yes, Chhath Puja is the biggest festival in Araria. Lotus, marigold, and banana flower arrangements for the ghat celebrations are available for same-day delivery." },
      { question: "Can I get birthday flowers in Araria?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Araria for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Araria?", answer: "Yes, same-day delivery is available across Araria for orders placed before 3 PM." }
    ]
  },

  "kishanganj": {
    cityName: "Kishanganj",
    metaTitle: "Flower Delivery in Kishanganj | Tea Garden Bihar | RedHeart",
    metaDescription: "Order flowers in Kishanganj, Bihar. Same-day delivery near Darjeeling foothills & across Kishanganj. From ₹399.",
    h1: "Online Flower Delivery in Kishanganj",
    metaKeyword: "flower delivery kishanganj, online flowers kishanganj bihar, florist kishanganj, flowers kishanganj tea garden darjeeling foothills mahananda bengal",
    footerContent: `
<h2>Flower Delivery in Kishanganj — Bihar's Tea Garden District at the Darjeeling Foothills</h2>
<p>Kishanganj, in the extreme northeastern corner of Bihar where it meets West Bengal, Sikkim, and Nepal, is the headquarters of Kishanganj district — the only district in Bihar with commercial tea gardens. The hills and foothills around Kishanganj (part of the Darjeeling-Dooars foothills zone) receive the highest rainfall of any Bihar district (over 2,000 mm annually), enabling tea cultivation. The district has a predominantly Muslim population and a significant Bengali and Nepalese community. The Mahananda River flows through Kishanganj. The district is in the North Bengal cultural zone — the tea garden bungalows, the misty Teesta-Mahananda river confluence, and the proximity to Darjeeling and Sikkim give Kishanganj a character entirely different from the rest of Bihar.</p>
<p>RedHeart delivers flowers across Kishanganj — Main Market, Tea Garden area, Purnia Road, Bahadurganj area, and Station Road. Our range includes roses, anthuriums, orchids, and seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kishanganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tea Garden area, Purnia Road, Bahadurganj, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, anthuriums, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a tea garden bungalow anniversary in Kishanganj?", answer: "Yes, Kishanganj's tea garden bungalows are a unique romantic setting. Rose and orchid bouquets for tea estate anniversary stays can be delivered same-day in Kishanganj." },
      { question: "Are flowers for Eid available in Kishanganj?", answer: "Yes, Kishanganj has a significant Muslim community. Rose bouquets and festive arrangements for Eid celebrations are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Kishanganj?", answer: "Yes, same-day delivery is available across Kishanganj for orders placed before 3 PM." }
    ]
  },

  "aurangabad-bihar": {
    cityName: "Aurangabad",
    metaTitle: "Flower Delivery in Aurangabad | Bihar | RedHeart",
    metaDescription: "Order flowers in Aurangabad, Bihar. Same-day delivery near Son River & across Aurangabad Bihar. From ₹399.",
    h1: "Online Flower Delivery in Aurangabad",
    metaKeyword: "flower delivery aurangabad bihar, online flowers aurangabad bihar, florist aurangabad bihar, flowers aurangabad bihar son river deo temple",
    footerContent: `
<h2>Flower Delivery in Aurangabad — Bihar's Southern District and the Ancient Deo Sun Temple</h2>
<p>Aurangabad, in the Son River basin of southern Bihar, is the headquarters of Aurangabad district — a district at the edge of the Deccan Plateau's northernmost extension, where the Bihar plains meet the Chhota Nagpur Plateau. The district is notable for the Deo Sun Temple at Deo town (in Aurangabad district) — an ancient Surya (Sun) temple whose exact construction date is disputed (between 8th-12th century CE) but which is considered one of the most important Surya temples in India and draws enormous crowds for Chhath Puja, when thousands of devotees perform the ritual of standing in water at sunrise to offer arghya (water offering) to the sun. The district's proximity to Gaya (Buddhist pilgrimage) and the Son River's fertile banks make it agriculturally productive.</p>
<p>RedHeart delivers flowers across Aurangabad — Main Market, Patna Road, Gaya Road, Deo Temple Road, and Station Road. Our range includes roses, marigolds, lotus, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aurangabad, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Patna Road, Gaya Road, Deo Temple Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, Chhath puja flowers, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja at the Deo Sun Temple available from Aurangabad Bihar?", answer: "Yes, the Deo Surya temple in Aurangabad is one of Bihar's most important Chhath Puja sites. Lotus, marigold, and arghya flower sets for Chhath at Deo are available from Aurangabad." },
      { question: "Can I get birthday flowers in Aurangabad Bihar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Aurangabad, Bihar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Aurangabad Bihar?", answer: "Yes, same-day delivery is available across Aurangabad, Bihar for orders placed before 3 PM." }
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
