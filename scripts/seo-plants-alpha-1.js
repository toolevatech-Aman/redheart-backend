// Plants Alphabetical Pass Batch 1 — 8 cities
// Bharatpur, Gandhinagar, Satara, Ghaziabad, Ayodhya, Junagadh, Sri Ganganagar, Pali

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bharatpur": {
    cityName: "Bharatpur",
    metaTitle: "Buy Plants Online in Bharatpur | Keoladeo Bird Sanctuary Rajasthan | RedHeart",
    metaDescription: "Order plants online in Bharatpur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Home of Keoladeo Bird Sanctuary gets plant delivery.",
    h1: "Buy Plants Online in Bharatpur — Same-Day Plant Delivery Near Keoladeo Bird Sanctuary",
    metaKeyword: "plants online bharatpur, buy plants bharatpur, indoor plants bharatpur, plant delivery bharatpur rajasthan, marigold bharatpur, rose plant bharatpur, online nursery bharatpur keoladeo birds",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bharatpur — The City of Birds Gets Doorstep Greens</h2>
<p>Bharatpur is one of Rajasthan's most ecologically significant cities — the gateway to Keoladeo Ghana National Park (UNESCO World Heritage Site), one of the world's most important bird sanctuaries, attracting tens of thousands of migratory birds including the globally threatened Siberian Crane. The city's Jat rulers built the famous Bharatpur Fort (Lohagarh — "Iron Fort") in the 18th century, famously repelling British attacks in 1805. Bharatpur is a major commercial hub in the Braj cultural region, bordering Uttar Pradesh and connecting to Mathura, Vrindavan, Agra, and Fatehpur Sikri.</p>
<p>Bharatpur's climate is north Indian: hot summers (43°C), moderate monsoon (600 mm), and cold clear winters (4–18°C). Rose (winter), marigold, tulsi, money plant, and indoor plants are the main categories. RedHeart delivers across Bharatpur, Deeg, Weir, Nagar, and Mathura (UP) with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Bharatpur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Braj region winter gardens</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Holi, Mathura festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Braj Vaishnava tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Drought-adapted, handles heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, Diwali gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bharatpur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bharatpur City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lohagarh area, Kumher Gate, Mathura Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Deeg / Keoladeo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Deeg Palace area, bird sanctuary zone</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Bharatpur's Braj Vaishnava tradition?", answer: "Tulsi is the most sacred plant for Bharatpur's Vaishnava community — the city's proximity to Mathura, Vrindavan, and the Braj region makes Krishna devotion central to daily life, and tulsi is Krishna's most sacred plant. Marigold for festival decorations, rose petals for temple offerings at Janmashtami and Holi, and basil plants in every home are the botanical essentials of Braj culture." },
      { question: "Is same-day plant delivery available in Bharatpur?", answer: "Yes. Same-day delivery available across Bharatpur including Lohagarh area and Mathura Road. Order before 3 PM. We also deliver to Deeg within 3–5 hours." },
      { question: "What plants grow best in Bharatpur's north Indian climate?", answer: "Rose (November–March), marigold (October–February), tulsi, money plant, and aloe vera all do well. Bharatpur's cold winters (4–18°C) produce outstanding rose blooms. The 600 mm monsoon provides adequate summer watering for established plants." },
      { question: "What plant is best for Keoladeo National Park bird sanctuary hospitality in Bharatpur?", answer: "Peace lily and areca palm create elegant indoor greenery for Keoladeo's nature tourism lodges. Native flowering plants (marigold, hibiscus) support pollinators that attract birds. Lotus in a water feature is perfect near the wetland sanctuary's atmosphere." },
      { question: "Do you deliver plants to Deeg Palace from Bharatpur?", answer: "Yes. Deeg (30 km from Bharatpur, home to the extraordinary Deeg Palace with its famous Monsoon Pavilion — one of Rajasthan's most underrated heritage palaces) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "gandhinagar": {
    cityName: "Gandhinagar",
    metaTitle: "Buy Plants Online in Gandhinagar | Gujarat Capital Plants | RedHeart",
    metaDescription: "Order plants online in Gandhinagar. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Gujarat's planned capital city gets fresh plant delivery.",
    h1: "Buy Plants Online in Gandhinagar — Same-Day Plant Delivery in Gujarat's Green Capital",
    metaKeyword: "plants online gandhinagar, buy plants gandhinagar, indoor plants gandhinagar, plant delivery gandhinagar gujarat, marigold gandhinagar, money plant gandhinagar, online nursery gandhinagar planned city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Gandhinagar — Gujarat's Planned Green Capital Gets Doorstep Greens</h2>
<p>Gandhinagar is Gujarat's state capital — a planned city built in the 1960s-70s on the model of Chandigarh, designed with wide tree-lined roads, extensive green spaces, and sectored residential layouts. Named after Mahatma Gandhi, Gandhinagar has a notably green character unusual for an Indian city of its scale: the city's planning mandate required extensive tree planting along all major roads, and decades of growth have filled the sectors with mature trees. Gandhinagar is home to the Akshardham Temple — one of the most visited and beautifully landscaped Hindu temple complexes in India. The Infocity IT park (one of Gujarat's premier technology zones) and GIFT City (Gujarat International Finance Tec-City) are transforming Gandhinagar into a modern financial and technology hub.</p>
<p>Gandhinagar's climate is Gujarat semi-arid: hot summers (42°C), moderate monsoon (750 mm), and pleasant winters (10–24°C). Money plant, jasmine, marigold, tulsi, and indoor plants are popular. RedHeart delivers across Gandhinagar and Ahmedabad with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Gandhinagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">GIFT City offices, apartment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Gujarati Vaishnava home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, Uttarayan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, government offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, Infocity IT park gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IT office, apartment air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Gandhinagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Gandhinagar Sectors</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sectors 1–30, Akshardham area, GIFT City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Infocity / Kudasan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Infocity IT park, Kudasan, Koba</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant complements Gandhinagar's Akshardham Temple aesthetic?", answer: "Lotus (in a water pot) is the most appropriate Akshardham-inspired plant — the temple's garden features elaborate lotus water features. Tulsi at home connects to the temple's Vaishnava tradition. Marigold adds Navratri festive colour. For the GIFT City office, lucky bamboo or peace lily in a ceramic planter is appropriate for India's premier financial technology zone." },
      { question: "Is same-day plant delivery available in Gandhinagar?", answer: "Yes. Same-day delivery across all Gandhinagar sectors including GIFT City and Infocity area. Order before 3 PM." },
      { question: "What plants grow best in Gandhinagar's planned green city environment?", answer: "Gandhinagar's tree-lined roads moderate temperatures slightly, making money plant, tulsi, jasmine, marigold, and indoor plants all easy to grow. The city's sector gardens are well-maintained, inspiring residents to maintain home gardens. The 750 mm monsoon and pleasant winters create two strong outdoor planting windows." },
      { question: "What plant is most appropriate for an IAS officer's Gandhinagar government quarters?", answer: "Rose planted in October produces beautiful winter blooms ideal for Gandhinagar's government residential sectors. Peace lily in a ceramic planter is appropriate for senior officers' drawing rooms. Tulsi in the courtyard is traditional. Lucky bamboo is standard gifting for government occasion transfers and promotions." },
      { question: "Do you deliver plants to GIFT City (Gujarat International Finance Tec-City) in Gandhinagar?", answer: "Yes. GIFT City — India's first international financial services centre with a growing financial district — is within our Gandhinagar same-day delivery zone, 2–4 hours from our dispatch point. The GIFT City office community has consistent demand for corporate indoor plants and gifting occasions." }
    ]
  },

  "satara": {
    cityName: "Satara",
    metaTitle: "Buy Plants Online in Satara | Sahyadri Maharashtra Plants | RedHeart",
    metaDescription: "Order plants online in Satara. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Maharashtra's Sahyadri heritage city gets plant delivery.",
    h1: "Buy Plants Online in Satara — Same-Day Plant Delivery in Shivaji's Sahyadri Heartland",
    metaKeyword: "plants online satara, buy plants satara, indoor plants satara, plant delivery satara maharashtra, marigold satara, rose plant satara, online nursery satara shivaji panchgani",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Satara — Shivaji's Sahyadri Heartland Gets Doorstep Greens</h2>
<p>Satara is one of Maharashtra's most historically resonant cities — the heart of the Chhatrapati Shivaji Maharaj's Maratha Empire legacy (Satara was the formal Maratha capital after Chhatrapati Rajaram's relocation from Raigad, and the Satara Raja remained a Maratha royal figurehead until 1848). The city is surrounded by the extraordinary Sahyadri Western Ghats landscape — Ajinkyatara Fort (guarding Satara), Pratapgad (where Shivaji defeated Afzal Khan), and the hill stations of Panchgani and Mahabaleshwar (40 km) are all within Satara's orbit. The Krishna river flows through Satara, and the Koyna Dam (50 km) is one of Maharashtra's most significant hydroelectric projects.</p>
<p>Satara's climate is elevated Deccan: moderate temperatures (35°C), excellent monsoon (1,200 mm from the Sahyadri), and cool winters (12–24°C). The good rainfall creates excellent plant conditions. Rose, marigold, tulsi, jasmine, and indoor plants all thrive. RedHeart delivers across Satara, Karad, Wai, Panchgani, and Koregaon with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Satara</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganesh Chaturthi, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Maratha Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Satara winter, Panchgani influence</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Sahyadri homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, Diwali gifting Satara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Satara's good humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Satara</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Satara City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shivaji Road, Powai Naka, Station Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Karad / Panchgani</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Karad, Panchgani hill station</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant best represents Satara's Shivaji Maharaj heritage?", answer: "Tulsi is the plant most associated with the Maratha warrior tradition — Shivaji himself was a devout Vaishnava who maintained tulsi in every fort and camp. Marigold for Pratapgad and Ajinkyatara Fort's annual festival remembrances. For Satara's garden homes, marigold, rose, and anthurium all flourish in the Sahyadri's good monsoon." },
      { question: "Is same-day plant delivery available in Satara?", answer: "Yes. Same-day delivery across Satara including Shivaji Road, Powai Naka, and Station Road. Order before 3 PM. We also deliver to Karad and Panchgani within 3–5 hours." },
      { question: "What plants grow best in Satara's elevated Sahyadri climate?", answer: "The 1,200 mm monsoon and moderate temperatures (35°C max) create excellent conditions for rose (winter), marigold, tulsi, anthurium, money plant, and jasmine. October–March is Satara's best outdoor gardening season." },
      { question: "What plant is best for Panchgani or Mahabaleshwar hillside homestay gifting?", answer: "Rose is the definitive Panchgani/Mahabaleshwar hill station plant — both hill stations are famous for rose gardens. Peace lily for indoor spaces. Anthurium and money plant in hanging basket for authentic Western Ghats eco-resort ambience." },
      { question: "Do you deliver plants to Panchgani from Satara?", answer: "Yes. Panchgani (40 km from Satara, one of Maharashtra's most popular hill stations with its famous Table Land plateau and strawberry farms) is within our 3–5 hour same-day delivery zone. Mahabaleshwar, Wai, and Karad are similarly covered." }
    ]
  },

  "ghaziabad": {
    cityName: "Ghaziabad",
    metaTitle: "Buy Plants Online in Ghaziabad | NCR Gateway Uttar Pradesh Plants | RedHeart",
    metaDescription: "Order plants online in Ghaziabad. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. NCR's Uttar Pradesh gateway city gets fresh plant delivery.",
    h1: "Buy Plants Online in Ghaziabad — Same-Day Plant Delivery in NCR's UP Gateway",
    metaKeyword: "plants online ghaziabad, buy plants ghaziabad, indoor plants ghaziabad, plant delivery ghaziabad uttar pradesh, marigold ghaziabad, money plant ghaziabad, online nursery ghaziabad NCR raj nagar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ghaziabad — Delhi's Eastern Gateway Gets Doorstep Greens</h2>
<p>Ghaziabad is the most important city on Delhi's eastern edge — the first major city of Uttar Pradesh when crossing the UP border from Delhi, and one of India's largest industrial cities by manufacturing output. Known as the "Gateway to Uttar Pradesh," Ghaziabad's Raj Nagar Extension, Indirapuram, Vaishali, Crossing Republik, and Sanjay Nagar residential areas have become some of the most populous Delhi NCR middle-class communities. The city's massive residential apartment complex clusters (housing hundreds of thousands of Delhi NCR working families) create one of the largest urban plant markets in north India.</p>
<p>Ghaziabad's climate is NCR north Indian: very hot summers (44°C), moderate monsoon (700 mm), and cold winters (4–16°C). Money plant, marigold, tulsi, rose, and indoor plants are the most popular. RedHeart delivers across Ghaziabad, Noida, Hapur, Meerut, and Modi Nagar with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Ghaziabad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">NCR Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NCR apartment balcony, indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Chhath Puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every UP/NCR Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, NCR apartment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NCR winter garden season</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, industrial NCR Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Indirapuram offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Raj Nagar apartment reception</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ghaziabad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Indirapuram / Raj Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indirapuram, Raj Nagar Extension, Vaishali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Crossing Republik / Sanjay Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Crossing Republik, Sanjay Nagar, Kaushambi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur / Modi Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur, Modi Nagar, Murad Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What is the most popular balcony plant for Ghaziabad NCR apartments?", answer: "Money plant is the most popular balcony plant for Ghaziabad's high-density residential apartments — it thrives in semi-shade balcony conditions, is available in trailing (wall-hanging) and potted forms, and requires minimal care. Snake plant is the top air-purifying choice for closed apartments in Ghaziabad's urban air quality conditions. Marigold in terracotta pots on balconies transforms any apartment entrance during Diwali." },
      { question: "Is same-day plant delivery available in Ghaziabad?", answer: "Yes. Same-day delivery across Ghaziabad including Indirapuram, Raj Nagar Extension, Vaishali, Kaushambi, Crossing Republik, and Sanjay Nagar. Order before 3 PM." },
      { question: "What plant is best for Chhath Puja in Ghaziabad's large eastern UP community?", answer: "Marigold and banana plant are the most important Chhath Puja plants — Ghaziabad has a large Bihari and eastern UP population for whom Chhath (celebrated at the Hindon river ghats) is the most significant festival. Growing banana plant for the Chhath thala (offering platform) and marigold for the garlands is deeply meaningful for this community." },
      { question: "What plants grow best in Ghaziabad's NCR climate?", answer: "Rose (November–March), marigold (October–February), tulsi, money plant, snake plant, and aloe vera all do well. NCR winters are cold and clear — rose blooms are spectacular in December–February. Indoor plants in AC apartments need no seasonal adaptation." },
      { question: "Do you deliver plants to Hapur and Crossing Republik from Ghaziabad?", answer: "Yes. Hapur (30 km from Ghaziabad, a growing industrial town in western UP) and Crossing Republik (within Ghaziabad's urban area) are both served same-day. Crossing Republik, Raj Nagar Extension, and Indirapuram are all within our core 2–4 hour zone." }
    ]
  },

  "ayodhya": {
    cityName: "Ayodhya",
    metaTitle: "Buy Plants Online in Ayodhya | Ram Mandir Sacred City Plants | RedHeart",
    metaDescription: "Order plants online in Ayodhya. Marigold, tulsi & indoor plants. Same-day delivery. Starting ₹299. The sacred Ram Janmabhoomi city gets fresh plant delivery.",
    h1: "Buy Plants Online in Ayodhya — Same-Day Plant Delivery in the Sacred City of Lord Ram",
    metaKeyword: "plants online ayodhya, buy plants ayodhya, indoor plants ayodhya, plant delivery ayodhya uttar pradesh, marigold ayodhya, tulsi ayodhya, online nursery ayodhya ram mandir sacred",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ayodhya — The Sacred City of Ram Gets Doorstep Greens</h2>
<p>Ayodhya is one of India's most sacred cities — the birthplace of Lord Ram (Ram Janmabhoomi), one of Hinduism's most revered deities, and the site of the newly consecrated Ram Mandir (January 2024, one of India's most significant religious events). Ayodhya's religious significance draws pilgrims from across the world, and the city has undergone extraordinary transformation in recent years as tourism and pilgrimage infrastructure has expanded dramatically. The Saryu river's ghats, the hundreds of ancient temples (84 Kosi Parikrama, Kanak Bhawan, Hanumangadhi), and Ram Lila celebrations make Ayodhya a living centre of Vaishnava devotion. Faizabad (adjacent township) is Ayodhya's administrative twin.</p>
<p>Ayodhya's climate is eastern UP: hot summers (43°C), good monsoon (900 mm), and cold winters (5–18°C). Tulsi, marigold, rose, and jasmine are the most sacred and popular plant categories. RedHeart delivers across Ayodhya, Faizabad, Gonda, Ambedkar Nagar, and Sultanpur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sacred Plants for Ayodhya Homes</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sacred Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ram's most sacred plant, daily puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ram Mandir offerings, Ram Navami</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple rose petal offerings, Saryu ghat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple fragrant offerings, devotion</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, new Ayodhya homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hospitality gifting, pilgrim hotels</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ayodhya</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ayodhya / Ram Mandir zone</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ram Mandir, Hanumangadhi, Saryu ghats</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Faizabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Faizabad city, Awadh region</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Gonda</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gonda district</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is the most sacred offering in Ayodhya's Ram Mandir tradition?", answer: "Tulsi is unquestionably the most sacred plant for Ayodhya's Ram devotion — tulsi leaves are the primary offering at Ram Mandir, and every devotee's home maintains a tulsi maadam. Tulsi (especially Ram Tulsi) is considered the most pleasing offering to Vishnu-Ram. Growing your own tulsi at home means always having fresh, sacred leaves for puja — in Ayodhya, this is not an optional spiritual practice but a daily devotional necessity." },
      { question: "Is same-day plant delivery available in Ayodhya?", answer: "Yes. Same-day delivery across Ayodhya including Ram Mandir area, Hanumangadhi, Saryu ghats, and Faizabad. Order before 3 PM. Gonda is within 4–6 hours." },
      { question: "What plants are used for Ram Navami and Diwali in Ayodhya?", answer: "Ram Navami (Ram's birthday, celebrated with the grandest procession in Ayodhya) centres on marigold garlands, jasmine, and rose petal offerings at the Ram Mandir. Diwali (Deepotsav — Ayodhya's signature Diwali celebration on the Saryu ghats with thousands of diyas) uses marigold, tulsi, and rose as the primary sacred plant decorations. After the Ram Mandir consecration, Ayodhya's Deepotsav has become one of India's most spectacular Diwali events." },
      { question: "What plant is best for the new Ayodhya tourism hotels and pilgrim rest houses?", answer: "Areca palm in large floor pots creates elegant lobby and corridor greenery appropriate for Ayodhya's scale of pilgrimage hospitality. Peace lily is appropriate for meeting rooms and reception areas. Tulsi in the lobby entrance is mandatory for any Hindu pilgrim rest house — its sacred presence anchors the hospitality space in devotional tradition. Money plant in hanging baskets adds auspicious green energy to all indoor spaces." },
      { question: "Do you deliver plants to the 84 Kosi Parikrama pilgrimage route in Ayodhya?", answer: "Yes. We deliver throughout Ayodhya district including the main Ram Janmabhoomi circuit, the 84 Kosi Parikrama path, and to ashrams along the Saryu river. Same-day delivery for orders placed before 3 PM. Faizabad (adjacent to Ayodhya) is covered simultaneously." }
    ]
  },

  "junagadh": {
    cityName: "Junagadh",
    metaTitle: "Buy Plants Online in Junagadh | Girnar Somnath Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Junagadh. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Gujarat's Girnar sacred city gets fresh plant delivery.",
    h1: "Buy Plants Online in Junagadh — Same-Day Plant Delivery Near Girnar and Somnath",
    metaKeyword: "plants online junagadh, buy plants junagadh, indoor plants junagadh, plant delivery junagadh gujarat, marigold junagadh, tulsi junagadh, online nursery junagadh girnar somnath kesar mango",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Junagadh — Gateway to Girnar Gets Doorstep Greens</h2>
<p>Junagadh is one of Gujarat's most historically and spiritually significant cities — the gateway to Girnar (the sacred Jain and Hindu pilgrimage mountain with 10,000 steps ascending to the Neminath Jain temple and the Ambaji and Gorakhnath shrines at its peak), the home of the famous Asiatic Lion (the Gir Forest National Park, 65 km from Junagadh, is the world's only habitat of the endangered Asiatic Lion), the Kesar mango belt (Junagadh district produces the most prized Kesar variety mango, with GI tag recognition), and the extraordinary Ashokan rock edicts (Ashoka the Great's inscriptions carved into a rock near Junagadh — among the most ancient political texts in India).</p>
<p>Junagadh's climate is Saurashtra coastal: hot summers (40°C), moderate monsoon (700 mm from the southwest monsoon and Girnar rainfall), and pleasant winters (12–26°C). Marigold, tulsi, money plant, rose, and indoor plants are popular. RedHeart delivers across Junagadh, Keshod, Vanthali, Mangrol, and Diu with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Junagadh</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Girnar Vaishnava homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, Girnar Yatra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Saurashtra heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, Kesar mango belt</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, Navratri gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Junagadh</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Junagadh City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dhal Road, Kalwa Chowk, Girnar Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Veraval / Somnath</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Veraval port, Somnath temple town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant connects to Junagadh's Girnar sacred mountain tradition?", answer: "Tulsi planted on the path to Girnar has been a sacred tradition for centuries — every Vaishnava pilgrim's home in Junagadh maintains a tulsi maadam as a daily devotional anchor. Marigold garlands are carried by pilgrims ascending Girnar's 10,000 steps. For Jain households in Junagadh, the Neminath tradition values plants that support non-violence — tulsi, jasmine, and indoor money plant are appropriate." },
      { question: "Is same-day plant delivery available in Junagadh?", answer: "Yes. Same-day delivery across Junagadh including Dhal Road, Kalwa Chowk, and Girnar Road. Order before 3 PM. We also deliver to Veraval and Somnath within 4–6 hours." },
      { question: "What plants complement the Kesar mango belt around Junagadh?", answer: "Kesar mango trees (already grown in orchards) are the pride of Junagadh's agricultural identity. Home garden plants that complement this mango-belt setting are tulsi, jasmine, marigold, and aloe vera. Kesar mango in a large pot (dwarf variety) is a unique botanical gift for any Junagadh family that connects to the district's most celebrated agricultural product." },
      { question: "What plant is best for wildlife hospitality near Gir National Park?", answer: "Native Saurashtra flowering plants (marigold, flame-of-the-forest, Cassia) are most appropriate for eco-lodges near Gir Lion Sanctuary. Areca palm creates a safari-appropriate indoor ambience. Peace lily for lodge interior gifting is elegant and practical in Gir's forest climate." },
      { question: "Do you deliver plants to Somnath (Jyotirlinga) from Junagadh?", answer: "Yes. Somnath (one of the twelve Jyotirlingas — the most sacred Shiva shrines — destroyed and rebuilt twelve times throughout Indian history, now magnificently reconstructed on the Gujarat coast) is within our 4–6 hour same-day delivery zone from Junagadh. The Somnath temple's hospitality and ashram community regularly needs plants for ceremony and decoration." }
    ]
  },

  "sri-ganganagar": {
    cityName: "Sri Ganganagar",
    metaTitle: "Buy Plants Online in Sri Ganganagar | Granary of Rajasthan Plants | RedHeart",
    metaDescription: "Order plants online in Sri Ganganagar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Rajasthan's wheat granary city gets plant delivery.",
    h1: "Buy Plants Online in Sri Ganganagar — Same-Day Plant Delivery in Rajasthan's Agricultural Capital",
    metaKeyword: "plants online sri ganganagar, buy plants sri ganganagar, indoor plants sri ganganagar, plant delivery sri ganganagar rajasthan, marigold ganganagar, rose plant ganganagar, online nursery ganganagar gang canal",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Sri Ganganagar — The Granary of Rajasthan Gets Doorstep Greens</h2>
<p>Sri Ganganagar is Rajasthan's northernmost and most agriculturally productive city — the "Granary of Rajasthan" made possible by the Gang Canal (built in 1927 under Maharaja Ganga Singh of Bikaner, one of India's most ambitious pre-independence irrigation projects), which brought Indus water from the Sutlej river through the Thar Desert, transforming arid land into one of India's most productive agricultural zones. The city's Sikh, Jat, and Punjabi farming communities grow wheat, cotton, mustard, and sugarcane in quantities that make Sri Ganganagar district one of Rajasthan's most prosperous agricultural regions. The city is also known as "Mini Punjab" for its predominantly Punjabi-Sikh cultural character.</p>
<p>Sri Ganganagar's climate is extreme northwest: very hot summers (48°C — among India's highest), extremely low monsoon (200–250 mm), and cold winters (1–15°C). Drought-extreme plants are essential. Rose (winter), marigold (winter), tulsi, money plant (indoor), and aloe vera are the core plant categories. RedHeart delivers across Sri Ganganagar, Suratgarh, Hanumangarh, and Anupgarh with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Sri Ganganagar Homes</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lohri, Diwali, Gurpurab (Sikh)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu Punjabi households</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Spectacular winter blooms (Nov–Feb)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC, auspicious all year</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Extreme heat and drought adapted</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, inter-farm business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low (vase)</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Sri Ganganagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sri Ganganagar City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Station Road, 5 F Block, Purani Abadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Suratgarh / Hanumangarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Suratgarh, Hanumangarh towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Sri Ganganagar's extreme 48°C summer heat and 200 mm rainfall?", answer: "Aloe vera (water once a month in summer), cactus, snake plant (indoor AC), money plant in water vase, and lucky bamboo in water vase are the most extreme heat-adapted plants. October–March is Sri Ganganagar's ideal outdoor plant season — rose and marigold planted in October produce excellent winter blooms in the cold, clear Rajasthan winters." },
      { question: "Is same-day plant delivery available in Sri Ganganagar?", answer: "Yes. Same-day delivery across Sri Ganganagar including Station Road, 5 F Block, and Purani Abadi. Order before 3 PM. We also deliver to Suratgarh and Hanumangarh within 4–6 hours." },
      { question: "What plant is most appropriate for Lohri celebrations in Sri Ganganagar's Sikh-Punjabi community?", answer: "Marigold in terracotta pots is the most festive Lohri plant for any Punjab-origin household in Sri Ganganagar. Rose in December bloom brings winter garden colour. Tulsi is sacred for Hindu Lohri morning puja. Lucky bamboo in a gift box is appropriate for Lohri inter-family gifting — Punjabi business communities have fully adopted the lucky bamboo gifting tradition." },
      { question: "What plants grow well with Gang Canal irrigation water in Sri Ganganagar?", answer: "Canal-irrigated gardens in Sri Ganganagar allow marigold, rose, tulsi, hibiscus, and vegetable gardens to flourish. The canal water, while calcareous, supports established outdoor plants well. October–March is the planting window — the cold nights (1–15°C) produce exceptional rose blooms." },
      { question: "Do you deliver plants to Suratgarh from Sri Ganganagar?", answer: "Yes. Suratgarh (60 km from Sri Ganganagar, home to the Suratgarh Thermal Power Station and a growing agricultural market town on the Gang Canal) is within our 4–6 hour same-day delivery zone. Hanumangarh (another major agricultural market town) is similarly covered." }
    ]
  },

  "pali": {
    cityName: "Pali",
    metaTitle: "Buy Plants Online in Pali | Textile City Rajasthan Plants | RedHeart",
    metaDescription: "Order plants online in Pali. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Rajasthan's textile dyeing city gets fresh plant delivery.",
    h1: "Buy Plants Online in Pali — Same-Day Plant Delivery in Rajasthan's Textile City",
    metaKeyword: "plants online pali, buy plants pali, indoor plants pali, plant delivery pali rajasthan, marigold pali, tulsi pali, online nursery pali textile dyeing marwar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Pali — Rajasthan's Textile City Gets Doorstep Greens</h2>
<p>Pali is one of Rajasthan's most important industrial and commercial cities — a major textile dyeing and bleaching hub (Pali is Rajasthan's largest textile processing centre, with hundreds of textile dyeing units along the Bandi river, which unfortunately has suffered severe industrial pollution challenges), a significant trading centre for the Marwar region, and a city with deep Jain cultural traditions (the ancient Ranakpur Jain Temples, 100 km from Pali, are among the most intricate examples of Jain temple architecture in India). Pali district is also part of the Marwar-Jodhpur cultural belt, sharing the distinctive Rajput-Rajasthani cultural identity.</p>
<p>Pali's climate is Marwar semi-arid: hot summers (43°C), moderate monsoon (400 mm), and pleasant winters (8–24°C). Aloe vera, marigold, tulsi, money plant, and indoor plants are the core plant categories. RedHeart delivers across Pali, Sojat, Marwar Junction, Bali, and Jodhpur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Pali Homes</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Marwar Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, Teej</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Marwar heat, drought</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Pali textile offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter Rajasthan garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Marwari textile gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Pali</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Pali City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Industrial Area, Ganj, Sojat Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sojat / Bali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sojat (henna/mehendi capital), Bali town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plants survive Pali's semi-arid Marwar climate?", answer: "Aloe vera, tulsi, money plant in water vase, and lucky bamboo in water vase are the most reliable choices for Pali's hot, low-rainfall conditions. October–February is the best outdoor planting window. Rose and marigold planted in October produce excellent winter blooms in Pali's cold, dry evenings. Indoor plants in AC environments require no seasonal adaptation." },
      { question: "Is same-day plant delivery available in Pali?", answer: "Yes. Same-day delivery across Pali including Industrial Area, Ganj, and Sojat Road. Order before 3 PM. Sojat and Bali are within 3–5 hours." },
      { question: "What is the significance of Sojat (near Pali) for henna plants?", answer: "Sojat (25 km from Pali) is India's largest henna/mehendi trading market — the Lawsonia inermis (henna plant) is grown across Pali and Sojat districts in vast quantities and traded at the Sojat APMC. Henna as a home garden plant is popular in Pali's Muslim households (mehendi is culturally important for Eid celebrations). Growing henna at home in a pot is meaningful both as a garden plant and as a connection to Sojat's famous trade." },
      { question: "What plant is best for Ranakpur Jain Temple hospitality near Pali?", answer: "For the Ranakpur Jain Temple complex (one of India's most intricate Jain temples, made entirely of white marble with 1,444 uniquely carved pillars), nature-compatible plants are most appropriate: lotus in a stone basin at hotel entrances, peace lily for guest rooms, and areca palm for open-air restaurant spaces in the surrounding hills." },
      { question: "Do you deliver plants to Sojat and Marwar Junction from Pali?", answer: "Yes. Sojat (India's henna capital, 25 km from Pali) is within our 3–5 hour same-day delivery zone. Marwar Junction (45 km from Pali, an important railway junction) is similarly covered. Same-day delivery for orders placed before noon." }
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
