// Plants Alphabetical Pass Batch 3 — 8 cities
// Nadiad, Navsari, Chandrapur, Yavatmal, Bhagalpur, Darbhanga, Gaya, Ratlam

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "nadiad": {
    cityName: "Nadiad",
    metaTitle: "Buy Plants Online in Nadiad | Kheda Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Nadiad. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Kheda district's historic city in Gujarat gets plant delivery.",
    h1: "Buy Plants Online in Nadiad — Same-Day Plant Delivery in Gujarat's Kheda District",
    metaKeyword: "plants online nadiad, buy plants nadiad, indoor plants nadiad, plant delivery nadiad gujarat, marigold nadiad, tulsi nadiad, online nursery nadiad kheda charotar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Nadiad — Charotar's Commercial Centre Gets Doorstep Greens</h2>
<p>Nadiad is the administrative headquarters of Kheda district — one of Gujarat's most prosperous agricultural and socially progressive regions, historically known as the Charotar tract (the fertile alluvial zone between the Mahi and Sabarmati rivers). The Kheda Satyagraha of 1918, Gandhi's third major campaign in India (preceding the Non-Cooperation Movement), was centred in this region — making Nadiad and Kheda synonymous with India's early independence movement. The Charotar Patidar community from Kheda and Anand districts has produced a disproportionate number of India's prominent diaspora figures (including many in the USA, UK, and Africa). Nadiad is also known for its diamond cutting and polishing industry contribution to the Surat-Charotar belt.</p>
<p>Nadiad's climate is central Gujarat: hot summers (42°C), moderate monsoon (750 mm), and pleasant winters (12–24°C). Tulsi, marigold, money plant, rose, and indoor plants are most popular. RedHeart delivers across Nadiad, Anand, Kheda, Balasinor, and Kapadvanj with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Nadiad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Patidar household</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, Uttarayan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, all occasions</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NRI family Diwali, shagun gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Gujarat heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nadiad winter garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Nadiad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Nadiad City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Station Road, Collector Office area, NRI Colony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kheda / Kapadvanj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kheda town, Balasinor, Kapadvanj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most meaningful for Nadiad's Kheda Satyagraha heritage?", answer: "Tulsi — Gandhi's most revered plant — is the most appropriate connection to the Kheda Satyagraha spirit. Gandhi's Satyagraha campaigns were always accompanied by ashram gardening as a form of self-sufficiency. Tulsi in the home courtyard represents the same values of simplicity, self-reliance, and sacred duty that defined Charotar's independence movement identity." },
      { question: "Is same-day plant delivery available in Nadiad?", answer: "Yes. Same-day delivery across Nadiad including Station Road, Collector Office area, and NRI Colony. Order before 3 PM. Kheda town and Kapadvanj are within 3–5 hours." },
      { question: "What plant is most popular for Nadiad's Patidar NRI community sending gifts home?", answer: "Lucky bamboo (ordered online and delivered same-day to family in Nadiad), money plant, and tulsi in a decorative planter are the most common NRI-family gifting plants. RedHeart's online ordering makes gifting to family in Nadiad during Diwali, navratri, or housewarming occasions easy from anywhere in the world." },
      { question: "What plants grow best in Nadiad's fertile Charotar region climate?", answer: "The 750 mm monsoon and fertile Mahi-Sabarmati alluvial soil make virtually any plant possible in Nadiad's outdoor gardens. Rose, marigold, tulsi, jasmine, hibiscus, and curry leaf plants all thrive. October–February is the best outdoor planting season." },
      { question: "Do you deliver plants to Balasinor (dinosaur fossil site) from Nadiad?", answer: "Yes. Balasinor (70 km from Nadiad, the site of India's most significant dinosaur fossil discoveries — the Balasinor dinosaur fossil site is one of the world's largest sauropod nesting sites, earning it the name 'India's Jurassic Park') is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "navsari": {
    cityName: "Navsari",
    metaTitle: "Buy Plants Online in Navsari | Parsi Heritage Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Navsari. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Gujarat's Parsi heritage capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Navsari — Same-Day Plant Delivery in the Parsi Heritage City",
    metaKeyword: "plants online navsari, buy plants navsari, indoor plants navsari, plant delivery navsari gujarat, marigold navsari, tulsi navsari, online nursery navsari parsi zoroastrian south gujarat",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Navsari — Gujarat's Parsi Heritage City Gets Doorstep Greens</h2>
<p>Navsari is one of Gujarat's oldest and most historically significant cities — the ancient home of the Parsi (Zoroastrian) community in India (the Parsis first settled in Sanjan, then Navsari, after fleeing Persia in the 8th century CE), the birthplace of India's most respected Parsi leader Dadabhai Naoroji (the "Grand Old Man of India," the first Indian elected to the British Parliament), and an important centre of early Indian nationalism. The Navsari Atash Behram (fire temple) is one of India's most sacred Zoroastrian fire temples. Navsari is in south Gujarat's coastal belt, near the agricultural district that produces large quantities of sugar cane, mango, and chikoo (sapodilla), making it a naturally lush and green region.</p>
<p>Navsari's climate is south Gujarat coastal: hot-humid summers (38°C), excellent monsoon (1,200 mm), and pleasant winters (14–28°C). The good rainfall makes virtually all plants easy to grow. Marigold, tulsi, money plant, jasmine, and flowering plants are all popular. RedHeart delivers across Navsari, Jalalpore, Bilimora, Gandevi, and Valsad with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Navsari</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Parsi tradition, south Gujarat fragrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, Parsi New Year</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu-majority Navsari homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, coastal humidity OK</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">South Gujarat humid climate thrives</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Parsi wedding, Navjote gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Navsari</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Navsari City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dudhiya Talav, Lunsikui, Fata Faliya</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bilimora / Gandevi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bilimora, Gandevi, Vansda mango belt</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred or meaningful for the Parsi Zoroastrian community in Navsari?", answer: "Navsari's Parsi community has a unique plant tradition centred on white flowers — white tuberose (rajnigandha) and white jasmine are used in Zoroastrian fire temple ceremonies. The Parsi New Year (Navroz) is celebrated with fresh flowers including marigold, rose, and jasmine. Sandalwood (chandan) is the most sacred material used in Agiary (fire temple) rituals, but at home, white jasmine and fresh flowers are the Parsi botanical tradition." },
      { question: "Is same-day plant delivery available in Navsari?", answer: "Yes. Same-day delivery across Navsari including Dudhiya Talav, Lunsikui, and Fata Faliya areas. Order before 3 PM. Bilimora and Gandevi are within 3–5 hours." },
      { question: "What plants grow best in Navsari's south Gujarat coastal climate?", answer: "The 1,200 mm monsoon and humid coastal climate make anthurium, jasmine, hibiscus, money plant, tulsi, marigold, and areca palm all thrive in Navsari. Most tropical plants grow effortlessly here — the challenge is providing adequate drainage rather than irrigation. October–March is the most comfortable outdoor gardening season." },
      { question: "What plant is best for Navsari's chikoo (sapodilla) and mango belt heritage?", answer: "Chikoo (sapodilla) in a large terracotta pot is a unique and meaningful home garden plant for any Navsari family connected to south Gujarat's chikoo farming tradition. Mango (dwarf variety) is similarly appropriate. For most households, jasmine (growing in south Gujarat's humidity with no special care) is the most beautiful and practical flowering plant." },
      { question: "Do you deliver plants to Bilimora and Gandevi from Navsari?", answer: "Yes. Bilimora (25 km from Navsari, the commercial junction for the Navsari district's agricultural belt) and Gandevi (30 km, famous for mango and chikoo orchards in the Vansda area) are within our 3–5 hour same-day delivery zone." }
    ]
  },

  "chandrapur": {
    cityName: "Chandrapur",
    metaTitle: "Buy Plants Online in Chandrapur | Vidarbha Coal City Maharashtra Plants | RedHeart",
    metaDescription: "Order plants online in Chandrapur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Vidarbha's coal and steel city gets fresh plant delivery.",
    h1: "Buy Plants Online in Chandrapur — Same-Day Plant Delivery Near Tadoba Tiger Reserve",
    metaKeyword: "plants online chandrapur, buy plants chandrapur, indoor plants chandrapur, plant delivery chandrapur maharashtra, marigold chandrapur, tulsi chandrapur, online nursery chandrapur tadoba vidarbha coal",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Chandrapur — India's Tiger City Gets Doorstep Greens</h2>
<p>Chandrapur is Vidarbha's most important industrial city outside Nagpur — the home of the Maharashtra Super Thermal Power Station (MSPG Chandrapur — one of India's largest coal-fired power plants), major coal mining operations (Western Coalfields Limited collieries), and SAIL's Chandrapur steel plant. But Chandrapur's most extraordinary identity is as the gateway to Tadoba-Andhari Tiger Reserve — Maharashtra's oldest and largest tiger reserve, and one of India's most tiger-dense protected forests. The contrast of industrial production and wild tiger habitat makes Chandrapur uniquely compelling. The Chandrapur Fort (Gond kingdom era) and the twin temples of Ambikadevi make the city historically significant as well.</p>
<p>Chandrapur's climate is inland Vidarbha: very hot summers (46°C — among Maharashtra's highest), excellent monsoon (1,000 mm), and cool winters (10–26°C). Snake plant and indoor plants are popular for air quality in this industrial city. Marigold, tulsi, money plant, and aloe vera also thrive. RedHeart delivers across Chandrapur, Ballarpur, Warora, Mul, and Gadchiroli with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Chandrapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, coal city home essential</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganesh Chaturthi, Diwali, Ambikadevi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Vidarbha Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, MSPC township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office gifting, Tadoba lodge</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Vidarbha extreme heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Chandrapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Chandrapur City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lohara, Civil Lines, MSPGCL Colony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ballarpur / Warora</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ballarpur paper mill, Warora, Mul</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most important for air quality in Chandrapur's industrial coal city?", answer: "Snake plant is the single most important indoor plant for Chandrapur's coal and power plant industrial environment — NASA's Clean Air Study found it among the top air-purifying plants, effective against airborne pollutants including those generated in thermal power and industrial areas. Money plant (also air-purifying) and peace lily round out the top three indoor air quality plants for Chandrapur's WCL and MSPC township community." },
      { question: "Is same-day plant delivery available in Chandrapur?", answer: "Yes. Same-day delivery across Chandrapur including Lohara, Civil Lines, and MSPGCL Colony. Order before 3 PM. Ballarpur and Warora are within 3–5 hours." },
      { question: "What plant best represents Chandrapur's Tadoba Tiger Reserve identity?", answer: "For Tadoba-inspired home décor, areca palm (the lush tropical tree of the Tadoba forest) creates an authentic jungle ambiance. Peace lily and money plant in hanging baskets evoke the forest floor's lush understory. For Tadoba safari lodges and eco-resorts, these native-looking tropical plants are the most appropriate indoor greenery." },
      { question: "What plants grow well during Chandrapur's excellent monsoon season?", answer: "Chandrapur's 1,000 mm monsoon (from the Vidarbha plateau's interaction with the monsoon system) makes outdoor planting from June–September highly productive. Marigold, tulsi, hibiscus, banana, money plant in outdoor pots, and jasmine all grow vigorously. October–March is the comfortable outdoor season." },
      { question: "Do you deliver plants to Ballarpur Paper Mill township from Chandrapur?", answer: "Yes. Ballarpur (18 km from Chandrapur, the home of Ballarpur Paper Mills — once India's largest paper manufacturer, now part of the BILT/Thapar Group legacy) is within our 3–5 hour same-day delivery zone. The Ballarpur township community has consistent demand for indoor plants and gifting occasions." }
    ]
  },

  "yavatmal": {
    cityName: "Yavatmal",
    metaTitle: "Buy Plants Online in Yavatmal | Cotton City Vidarbha Plants | RedHeart",
    metaDescription: "Order plants online in Yavatmal. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Vidarbha's cotton-belt city in Maharashtra gets plant delivery.",
    h1: "Buy Plants Online in Yavatmal — Same-Day Plant Delivery in Vidarbha's Cotton Belt",
    metaKeyword: "plants online yavatmal, buy plants yavatmal, indoor plants yavatmal, plant delivery yavatmal maharashtra, marigold yavatmal, tulsi yavatmal, online nursery yavatmal cotton vidarbha wardha river",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Yavatmal — Vidarbha's Cotton Heartland Gets Doorstep Greens</h2>
<p>Yavatmal is the administrative and commercial centre of Vidarbha's cotton belt — the region's black-soil cotton farming has shaped Yavatmal's economic and social character for over a century. The Wardha river forms part of the district's boundary, connecting Yavatmal to Wardha (Gandhi's Sevagram Ashram) and the broader Gandhian legacy of Vidarbha's agriculture. Yavatmal district has been at the centre of the Vidarbha farmer distress narrative — cotton prices, input costs, and drought cycles have created significant agricultural crisis here, making sustainable, low-water gardening philosophically resonant in this context. The city's agriculture college and government research stations make it an important educational hub.</p>
<p>Yavatmal's climate is inland Vidarbha: very hot summers (45°C), moderate monsoon (900 mm), and cool winters (10–26°C). Aloe vera, tulsi, marigold, money plant, and indoor plants are most practical. RedHeart delivers across Yavatmal, Pusad, Wani, Digras, and Wardha with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Yavatmal</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Vidarbha farming families</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganesh Chaturthi, Diwali, Nagpanchami</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vidarbha heat, low water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, APMC cotton trade gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor air quality, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Yavatmal</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Yavatmal City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gandhi Chowk, Cotton Market, College Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pusad / Wani</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pusad, Wani, Digras town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most meaningful for Yavatmal's farming community during Diwali?", answer: "Marigold and tulsi are the most meaningful Diwali plants for Yavatmal's cotton farming families — the post-harvest celebration (Diwali typically coincides with cotton harvest time) traditionally features marigold decoration at the entrance and tulsi puja at the courtyard. Lucky bamboo as a Diwali gift acknowledges the farming community's aspirations for prosperity in the coming season." },
      { question: "Is same-day plant delivery available in Yavatmal?", answer: "Yes. Same-day delivery across Yavatmal including Gandhi Chowk, Cotton Market, and College Road. Order before 3 PM. Pusad and Wani are within 3–5 hours." },
      { question: "What plants are most water-efficient for Yavatmal's drought-sensitive region?", answer: "Aloe vera (watered once a month in summer), snake plant (once a week), money plant in water vase (refill water weekly), and cactus are the most drought-resilient choices. In Yavatmal's farming community context, growing water-efficient plants at home is an extension of the water-conscious mindset that has become essential in the Vidarbha agricultural belt." },
      { question: "What plant connects to the Sevagram Ashram spirit near Yavatmal?", answer: "Tulsi and neem (both Gandhian plants representing simplicity, healing, and self-reliance) are the most appropriate Sevagram-connected plants for Yavatmal's households. Wardha's Sevagram Ashram maintained organic gardens as part of Gandhi's self-sufficient village economy vision. Aloe vera (Ayurvedic medicinal plant) and curry leaf (essential home cooking plant) similarly reflect the ashram philosophy of useful plants over ornamental ones." },
      { question: "Do you deliver plants to Pusad from Yavatmal?", answer: "Yes. Pusad (65 km from Yavatmal, an important commercial town in the southern part of the district near the Telangana border) is within our 3–5 hour same-day delivery zone. Wani, Digras, and Mahagaon are similarly covered." }
    ]
  },

  "bhagalpur": {
    cityName: "Bhagalpur",
    metaTitle: "Buy Plants Online in Bhagalpur | Silk City Bihar Plants | RedHeart",
    metaDescription: "Order plants online in Bhagalpur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Bihar's silk city on the Ganges gets fresh plant delivery.",
    h1: "Buy Plants Online in Bhagalpur — Same-Day Plant Delivery in Bihar's Silk City",
    metaKeyword: "plants online bhagalpur, buy plants bhagalpur, indoor plants bhagalpur, plant delivery bhagalpur bihar, marigold bhagalpur, tulsi bhagalpur, online nursery bhagalpur silk tassar ganga",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bhagalpur — Bihar's Silk City on the Ganga Gets Doorstep Greens</h2>
<p>Bhagalpur is one of Bihar's most historically significant and commercially important cities — known as the "Silk City" for its famous Tussar (Tassar) silk weaving tradition, one of India's finest silk varieties, produced from the cocoons of Antheraea mylitta silkworms that feed on Arjun and Asan trees in the surrounding forests. The city is beautifully positioned on the south bank of the Ganges river (the Ganga here is wide, majestic, and seasonally dramatic), with the Vikramshila Gangetic Dolphin Sanctuary upstream (the Ganga river dolphin, India's national aquatic animal, is still sighted in this stretch). Bhagalpur's Tilkamanjhi Bhagalpur University is the region's premier educational institution, named after Tilka Manjhi — the first Adivasi freedom fighter in India.</p>
<p>Bhagalpur's climate is Bihar Gangetic plain: hot summers (43°C), good monsoon (1,000 mm), and cold winters (5–18°C). Marigold, tulsi, rose, money plant, and indoor plants are all popular. RedHeart delivers across Bhagalpur, Banka, Sultanganj, Kahalgaon, and Naugachia with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Bhagalpur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Diwali, Durga Puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Bihar Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bihar cold winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Bhagalpur apartments</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Silk industry Diwali gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Banana Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja offering platform</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bhagalpur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhagalpur City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Adampur, Tilkamanjhi Chowk, Nathnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sultanganj / Kahalgaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sultanganj Ganga ghat, Kahalgaon NTPC</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most important for Chhath Puja in Bhagalpur?", answer: "Marigold (for garlands and the Chhath thala), banana plant (the entire banana plant — leaves, fruit, and stem — is the sacred offering platform for Chhath Puja at the Ganga ghat), and sugarcane stalks are the three essential botanical elements of Chhath in Bhagalpur. The Bhagalpur Ganga ghat during Chhath Puja is one of Bihar's most spectacular religious gatherings." },
      { question: "Is same-day plant delivery available in Bhagalpur?", answer: "Yes. Same-day delivery across Bhagalpur including Adampur, Tilkamanjhi Chowk, and Nathnagar. Order before 3 PM. Sultanganj and Kahalgaon are within 3–5 hours." },
      { question: "What plants grow best in Bhagalpur's Ganga belt climate?", answer: "The 1,000 mm monsoon, Ganga river humidity, and cold winters make rose (November–March), marigold (October–February), tulsi, jasmine, banana, money plant, and indoor tropical plants all thrive in Bhagalpur. Bihar's cold winters produce beautiful rose blooms — rose is one of the most rewarding winter garden plants in the Ganga belt." },
      { question: "What plant is most connected to Bhagalpur's Tussar silk identity?", answer: "Arjun tree (Terminalia arjuna) and Asan tree (Terminalia elliptica) are the two trees whose leaves feed the Tussar silkworm Antheraea mylitta — Bhagalpur's silk economy is directly dependent on these forest trees. At home, growing a young Arjun tree in a large pot is a meaningful connection to Bhagalpur's silk heritage. Jasmine and rose are the most popular practical home garden plants." },
      { question: "Do you deliver plants to Sultanganj from Bhagalpur?", answer: "Yes. Sultanganj (25 km from Bhagalpur, the starting point of the Shravani Mela — the largest annual Shiva pilgrimage in India, where millions of Kanwariyas carry Ganga water on foot to Deoghar's Baidyanath Jyotirlinga) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "darbhanga": {
    cityName: "Darbhanga",
    metaTitle: "Buy Plants Online in Darbhanga | Mithila Art Bihar Plants | RedHeart",
    metaDescription: "Order plants online in Darbhanga. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. The Mithila cultural capital of Bihar gets fresh plant delivery.",
    h1: "Buy Plants Online in Darbhanga — Same-Day Plant Delivery in Mithila's Cultural Heart",
    metaKeyword: "plants online darbhanga, buy plants darbhanga, indoor plants darbhanga, plant delivery darbhanga bihar, marigold darbhanga, tulsi darbhanga, online nursery darbhanga mithila madhubani painting",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Darbhanga — Mithila's Cultural Capital Gets Doorstep Greens</h2>
<p>Darbhanga is one of Bihar's most culturally significant cities — the historical capital of the Mithila region and the seat of the Darbhanga Raj (the Maharaja of Darbhanga was among the wealthiest zamindars in British India). Mithila culture, centred on Darbhanga, is famous for Madhubani (Mithila) painting — a tradition of elaborate wall and floor paintings using natural pigments and geometric/floral motifs that originated in Sita's birthplace Janakpur (Nepal) and the Darbhanga area. The Lalit Narayan Mithila University (LNMU) and Darbhanga Medical College are the region's major institutions. Darbhanga has produced several significant figures in Indian classical music (Dhrupad: the Darbhanga gharana is one of the four primary Dhrupad gharanas).</p>
<p>Darbhanga's climate is north Bihar Terai-adjacent: hot summers (42°C), good monsoon (1,100 mm), and cold winters (4–18°C). Marigold, tulsi, rose, money plant, and indoor plants are popular. RedHeart delivers across Darbhanga, Laheriasarai, Samastipur, Madhubani, and Sitamarhi with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Darbhanga</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath, Durga Puja, Vivah puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Maithil Brahmin homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bihar cold winter blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Mithila homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lotus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mithila pond culture, Durga worship</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Monsoon–winter</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">LNMU gifting, occasion present</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Darbhanga</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Darbhanga City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Laheriasarai, Darbhanga Fort area, LNMU</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Madhubani / Samastipur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Madhubani art district, Samastipur town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plants feature prominently in Madhubani (Mithila) painting tradition from Darbhanga?", answer: "Lotus, banana, mango (aam twig), and tulsi are the plants most commonly depicted in Madhubani paintings from Darbhanga's Mithila tradition. The lotus symbolizes divine birth (connected to the Gita and the Devi tradition). Growing lotus in a water pot at home is both a practical tribute to this artistic tradition and an ancient Mithila garden practice. Tulsi in the courtyard is central to every Maithil Brahmin household's identity." },
      { question: "Is same-day plant delivery available in Darbhanga?", answer: "Yes. Same-day delivery across Darbhanga including Laheriasarai, Darbhanga Fort area, and LNMU campus area. Order before 3 PM. Madhubani and Samastipur are within 3–5 hours." },
      { question: "What plants grow best in Darbhanga's north Bihar Terai climate?", answer: "The 1,100 mm monsoon, Bagmati river proximity, and cold winters make rose, marigold, tulsi, lotus (in ponds and pots), banana, money plant, and jasmine all thrive in Darbhanga. Bihar's winters are cold enough for spectacular rose blooms (5–18°C) in the December–February season." },
      { question: "What plant is most appropriate for the Vivah panchami (Sita-Ram wedding) tradition in Mithila?", answer: "Marigold garlands, banana plants, and mango leaf torana (door hangings) are the three essential plants for Vivah Panchami in Darbhanga — the celebration of the divine wedding of Sita (born in Janakpur/Mithila) and Ram is the most sacred occasion in the Maithil cultural calendar. Tulsi is also offered during this ceremony. Growing a tulsi plant specifically connected to this occasion is a meaningful act for any Mithila family." },
      { question: "Do you deliver plants to Madhubani from Darbhanga?", answer: "Yes. Madhubani (45 km from Darbhanga, the artistic heart of Mithila painting — the Madhubani district's villages produce the famous Madhubani paintings now recognized worldwide and exported internationally) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "gaya": {
    cityName: "Gaya",
    metaTitle: "Buy Plants Online in Gaya | Bodh Gaya Pitra Paksha Bihar Plants | RedHeart",
    metaDescription: "Order plants online in Gaya. Marigold, tulsi & sacred plants. Same-day delivery. Starting ₹299. Bihar's most sacred Pitra Paksha city gets fresh plant delivery.",
    h1: "Buy Plants Online in Gaya — Same-Day Plant Delivery in the City of Pitra Paksha and Bodh Gaya",
    metaKeyword: "plants online gaya, buy plants gaya, indoor plants gaya, plant delivery gaya bihar, marigold gaya, tulsi gaya, online nursery gaya bodh gaya buddha pitra paksha pind daan",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Gaya — Bihar's Sacred Pilgrimage Capital Gets Doorstep Greens</h2>
<p>Gaya is one of India's most significant sacred cities — the centre of the annual Pitra Paksha (Shraddh) pilgrimage, during which hundreds of thousands of Hindus come to perform pind daan (ancestral offerings) at the Falgu river ghats, a ritual that delivers liberation (moksha) to deceased ancestors. The Vishnupad Temple (housing Lord Vishnu's footprint on a stone slab) is the spiritual heart of Gaya's Hindu pilgrimage tradition. Just 13 km away, Bodh Gaya is Buddhism's most sacred site — the location of the Bodhi tree under which Siddhartha Gautama attained enlightenment, now marked by the Mahabodhi Temple (UNESCO World Heritage Site, one of the most visited Buddhist pilgrimage destinations in the world). Gaya is thus simultaneously sacred for Hinduism's ancestral rites and Buddhism's birth as a world religion.</p>
<p>Gaya's climate is south Bihar: hot summers (44°C), moderate monsoon (1,000 mm), and cold winters (5–20°C). Tulsi, marigold, rose, money plant, and sacred plants are most popular. RedHeart delivers across Gaya, Bodh Gaya, Aurangabad (Bihar), Nawada, and Jehanabad with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sacred Plants for Gaya's Pilgrimage Community</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sacred Significance</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pitra Paksha puja, Vishnu puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chhath Puja, Pitra Paksha, Vishnupad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ficus (Sacred Fig)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bodhi tree connection, Buddhist dharma</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple offerings, winter Bihar garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Bodh Gaya hotels</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lotus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Buddhist offering, Falgu river connection</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Monsoon</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Gaya</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Gaya City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vishnupad area, Mahavir Colony, Akhara Street</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bodh Gaya</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahabodhi Temple area, Buddhist circuit</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aurangabad (Bihar)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Aurangabad district, Deo Sun Temple</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Pitra Paksha pind daan offerings in Gaya?", answer: "Tulsi is the most sacred plant in Gaya's Pitra Paksha tradition — tulsi leaves are an essential component of every pind daan offering, as they are believed to purify the offerings and ensure they reach deceased ancestors. Kush grass (Desmostachya bipinnata) is the other essential ritual plant for Shraddh ceremonies. Growing tulsi at home allows Gaya's pilgrimage community to always have sacred leaves available for daily puja and Pitra Paksha preparation." },
      { question: "Is same-day plant delivery available in Gaya and Bodh Gaya?", answer: "Yes. Same-day delivery across both Gaya city (Vishnupad area, Mahavir Colony) and Bodh Gaya (Mahabodhi Temple area). Order before 3 PM." },
      { question: "What plant is most appropriate for Bodh Gaya's Buddhist monastery gardens?", answer: "Ficus religiosa (Peepal tree — the Bodhi tree species under which Buddha attained enlightenment) is the most sacred plant for any Buddhist monastery or home in Bodh Gaya. Lotus in a water container represents enlightenment in Buddhist iconography — the Mahabodhi Temple is surrounded by lotus ponds. Peace lily for monastery interior spaces is elegant and dharma-appropriate." },
      { question: "What plants grow best in Gaya's south Bihar climate?", answer: "Gaya's 1,000 mm monsoon and cold winters (5–20°C) create ideal conditions for rose (spectacular December–February blooms), marigold, tulsi, jasmine, and money plant. The Bodh Gaya monastery gardens, with their carefully maintained lawns and flower beds, demonstrate what is possible in this climate with proper care." },
      { question: "Do you deliver plants to the Mahabodhi Temple area in Bodh Gaya?", answer: "Yes. Bodh Gaya (13 km from Gaya city, the UNESCO World Heritage Mahabodhi Temple complex — one of the most sacred sites in world Buddhism) is within our 2–4 hour same-day delivery zone. The large international Buddhist monastery community (Tibetan, Japanese, Thai, Sri Lankan, Myanmar monasteries are all located around the Mahabodhi Temple) is a significant plant customer community." }
    ]
  },

  "ratlam": {
    cityName: "Ratlam",
    metaTitle: "Buy Plants Online in Ratlam | Madhya Pradesh Sev City Plants | RedHeart",
    metaDescription: "Order plants online in Ratlam. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Madhya Pradesh's sev and opium city gets plant delivery.",
    h1: "Buy Plants Online in Ratlam — Same-Day Plant Delivery in MP's Famous Sev City",
    metaKeyword: "plants online ratlam, buy plants ratlam, indoor plants ratlam, plant delivery ratlam madhya pradesh, marigold ratlam, tulsi ratlam, online nursery ratlam sev malwa opium",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ratlam — Malwa's Sev Capital Gets Doorstep Greens</h2>
<p>Ratlam is one of Madhya Pradesh's most commercially important cities — famous across India for Ratlam Sev (the distinctive, extra-spicy, crispy chickpea flour snack with its unique black-pepper-asafoetida flavour that has earned protected Geographical Indication status), historically significant as the former state of the Ratlam princely state, and importantly the junction of two major railway lines (Delhi-Mumbai Central Railway and the Western Railway — Ratlam Junction is one of MP's busiest railway stations). Ratlam district's Malwa plateau setting makes it a hub for opium poppy cultivation (licensed medicinal opium production from Neemuch-Mandsaur-Ratlam belt is India's primary contribution to global medical morphine supply) and garlic (the garlic mandi in Ratlam processes garlic from Madhya Pradesh's famous garlic belt).</p>
<p>Ratlam's climate is Malwa plateau: hot summers (43°C), good monsoon (850 mm), and cool winters (8–26°C). Marigold, tulsi, money plant, aloe vera, and indoor plants are most popular. RedHeart delivers across Ratlam, Mandsaur, Sailana, Jaora, and Neemuch with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Ratlam</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Malwa household</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, MP festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Malwa winter, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, railway junction offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, sev business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Malwa summer heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ratlam</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ratlam City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Railway Station Road, Sailana Road, Ringnod</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jaora / Mandsaur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jaora, Mandsaur garlic belt</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant goes best with the famous Ratlam Sev food identity?", answer: "Curry leaf plant (kadi patta) is the most meaningful culinary-connected plant for Ratlam's food culture — curry leaf enhances the flavours in Ratlam's sev and other snacks. Tulsi (sweet basil variant) and ajwain (carom) in kitchen herb pots are also appropriate for any Ratlam household that values its food tradition. The connection between home herb garden and Ratlam's famous snack culture is natural and meaningful." },
      { question: "Is same-day plant delivery available in Ratlam?", answer: "Yes. Same-day delivery across Ratlam including Railway Station Road, Sailana Road, and Ringnod area. Order before 3 PM. Jaora and Mandsaur are within 3–5 hours." },
      { question: "What plants grow well in Ratlam's Malwa plateau climate?", answer: "The 850 mm monsoon and Malwa plateau's relatively moderate temperatures (compared to the plains below) make rose, marigold, tulsi, aloe vera, money plant, and jasmine all thrive in Ratlam. The cool Malwa nights make October–February an outstanding outdoor garden season." },
      { question: "What is the most appropriate Diwali gifting plant for Ratlam's business community?", answer: "Lucky bamboo in a decorative ceramic planter is the most popular Diwali gifting plant for Ratlam's trading and manufacturing community. Money plant in a golden-coloured pot symbolizes business prosperity. Rose plant for home gardens and tulsi in a terracotta planter are the most traditional Diwali gifting options for family and household gifting occasions." },
      { question: "Do you deliver plants to Mandsaur from Ratlam?", answer: "Yes. Mandsaur (45 km from Ratlam, famous for the ancient Dashavatar temple/Pashupatinath Shiva temple, significant opium cultivation, and garlic production) is within our 3–5 hour same-day delivery zone. Neemuch (the famous Neemuch Cantonment opium processing centre, 90 km from Ratlam) is available with advance booking." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/plants-online/${slug}`;
    const payload = {
      category: "Plants",
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
        { label: "Plants", url: "/plants-online" },
        { label: `Buy Plants Online in ${data.cityName}`, url: cityUrl },
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
