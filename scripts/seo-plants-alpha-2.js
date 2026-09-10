// Plants Alphabetical Pass Batch 2 — 8 cities
// Bharuch, Anand, Mehsana, Dhule, Yamunanagar, Hanumangarh, Barmer, Osmanabad

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bharuch": {
    cityName: "Bharuch",
    metaTitle: "Buy Plants Online in Bharuch | Narmada Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Bharuch. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Gujarat's ancient Narmada port city gets plant delivery.",
    h1: "Buy Plants Online in Bharuch — Same-Day Plant Delivery Near Narmada and Golden Bridge",
    metaKeyword: "plants online bharuch, buy plants bharuch, indoor plants bharuch, plant delivery bharuch gujarat, marigold bharuch, tulsi bharuch, online nursery bharuch narmada golden bridge",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bharuch — Gujarat's Ancient Narmada Port Gets Doorstep Greens</h2>
<p>Bharuch (also known as Broach) is one of India's oldest continuously inhabited cities — an ancient port on the Narmada river that appears in texts as Bharukachha, traded with ancient Greeks, Romans, and Arabs for over 2,000 years. The Golden Bridge across the Narmada at Bharuch is one of India's most iconic river crossings and one of the oldest British-era bridges still in use. Today, Bharuch is Gujarat's largest industrial zone outside Ahmedabad and Surat — the PCPIR (Petroleum, Chemicals, and Petrochemicals Investment Region) covering Ankleshwar and Dahej makes Bharuch district one of India's highest concentration of chemical and pharmaceutical manufacturing clusters. The city's Narmada riverside setting gives Bharuch a greener character than most industrial Gujarat cities.</p>
<p>Bharuch's climate is coastal Gujarat: hot summers (42°C), good monsoon (900 mm from the Arabian Sea), and pleasant winters (12–26°C). The good rainfall supports strong plant growth. Marigold, tulsi, money plant, and indoor plants are popular. RedHeart delivers across Bharuch, Ankleshwar, Dahej, Vagra, and Jambusar with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Bharuch</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Narmada-belt Gujarati homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, Narmada Jayanti</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Industrial office, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Gujarat heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chemical industry Diwali gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air quality, PCPIR industrial zone</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bharuch</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bharuch City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Station Road, Narmada Bridge area, Zadeshwar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ankleshwar / Dahej</td><td style="border:1px solid #d1d5db;padding:8px 12px;">GIDC Ankleshwar, Dahej port industrial zone</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most significant for Narmada Jayanti celebrations in Bharuch?", answer: "Tulsi (as the most sacred plant in Vaishnavism and river worship) and marigold (for garlands floated on the Narmada) are the most meaningful plants for Narmada Jayanti. The Narmada river is considered the most sacred river in Gujarat (Narmada Maiya) — offering marigold garlands and tulsi leaves at the river ghats is a Bharuch tradition deeply connected to the river's living spiritual identity." },
      { question: "Is same-day plant delivery available in Bharuch?", answer: "Yes. Same-day delivery across Bharuch including Station Road, Narmada Bridge area, and Zadeshwar. Order before 3 PM. Ankleshwar and Dahej are within 3–5 hours." },
      { question: "What plants grow best near Bharuch's coastal Gujarat climate?", answer: "The 900 mm monsoon and coastal humidity make Bharuch excellent for most plants. Tulsi, marigold, hibiscus, aloe vera, money plant, and indoor tropical plants all thrive. October–February is the peak outdoor planting season with comfortable temperatures." },
      { question: "What plant is most appropriate for Ankleshwar's GIDC industrial zone offices?", answer: "Snake plant (air purifying, tolerates industrial area air quality) and lucky bamboo are the most practical plants for Ankleshwar GIDC industrial offices. Peace lily is appropriate for office lobbies and conference rooms in the chemical manufacturing cluster. Money plant hanging baskets add low-maintenance greenery to any factory office." },
      { question: "Do you deliver plants to Ankleshwar and Dahej from Bharuch?", answer: "Yes. Ankleshwar (20 km from Bharuch, India's largest GIDC chemical manufacturing industrial estate) and Dahej (India's premier petrochemical port complex) are within our 3–5 hour same-day delivery zone. The large industrial workforce community in these areas has strong demand for gifting plants during Diwali and other occasions." }
    ]
  },

  "anand": {
    cityName: "Anand",
    metaTitle: "Buy Plants Online in Anand | Amul Milk Capital Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Anand. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. The milk capital of India (Amul) gets fresh plant delivery.",
    h1: "Buy Plants Online in Anand — Same-Day Plant Delivery in India's Milk Capital",
    metaKeyword: "plants online anand, buy plants anand, indoor plants anand, plant delivery anand gujarat, marigold anand, tulsi anand, online nursery anand amul milk capital vallabh vidyanagar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Anand — The Milk Capital of India Gets Doorstep Greens</h2>
<p>Anand is one of Gujarat's most inspiring cities — the birthplace of the cooperative dairy revolution in India and the headquarters of Amul (Anand Milk Union Limited), which under Verghese Kurien's White Revolution transformed India from a milk-deficient country into the world's largest milk producer. The National Dairy Development Board (NDDB) and the Institute of Rural Management Anand (IRMA) are headquartered here, making Anand the intellectual and institutional centre of India's dairy and rural development ecosystem. Adjacent Vallabh Vidyanagar, one of India's most intensively planted university towns, adds a green, academic character to the greater Anand urban area. Anand Agricultural University (AAU) is a premier institution that has shaped Gujarat's agricultural innovation landscape for decades.</p>
<p>Anand's climate is central Gujarat: hot summers (42°C), good monsoon (800 mm), and pleasant winters (12–26°C). Tulsi, marigold, money plant, rose, and indoor plants are most popular. RedHeart delivers across Anand, Vallabh Vidyanagar, Karamsad, Petlad, and Khambhat with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Anand</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Gujarati home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, university fest</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vallabh Vidyanagar hostel, indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IRMA/NDDB corporate gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Gujarat summer heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Anand winter garden season</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Anand</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anand / Vallabh Vidyanagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Amul Dairy Road, VV Nagar, Karamsad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Petlad / Khambhat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Petlad, Borsad, Khambhat town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most meaningful for gifting at Amul/NDDB in Anand?", answer: "Lucky bamboo (representing cooperative growth — rising together) and money plant (representing shared prosperity) are the most appropriate gifts for colleagues in India's dairy cooperative movement headquartered in Anand. Peace lily for senior management gifting at NDDB, IRMA, or Amul Dairy is elegant and professional. Tulsi in a small pot is the most appropriate traditional Diwali gift for any Gujarati colleague." },
      { question: "Is same-day plant delivery available in Anand?", answer: "Yes. Same-day delivery across Anand including Amul Dairy Road, Vallabh Vidyanagar, and Karamsad. Order before 3 PM. Petlad and Khambhat are within 3–5 hours." },
      { question: "What plants grow best in Anand's central Gujarat climate?", answer: "The 800 mm monsoon and relatively moderate central Gujarat temperatures make tulsi, marigold, rose, money plant, aloe vera, and hibiscus all thrive in Anand. October–February is the peak outdoor garden season. The university town character of Vallabh Vidyanagar (with tree-lined avenues planned by its founders) means the green ambiance is excellent." },
      { question: "What plant is best for a student hostel room at Charotar University or VV Nagar?", answer: "Money plant in a small water vase on a study table is perfect — no soil mess, low maintenance, and extremely hardy. Snake plant (air purifying, requires watering once a week) is excellent for a shared hostel room. Lucky bamboo in a small glass vase needs only water and indirect light. All three can survive student neglect and look beautiful." },
      { question: "Do you deliver plants to Vallabh Vidyanagar from Anand?", answer: "Yes. Vallabh Vidyanagar (2 km from Anand, home to Charotar University, CVM institutions, and multiple engineering and medical colleges) is within our core 2–4 hour same-day delivery zone. The area's large student population is a significant plant gifting community." }
    ]
  },

  "mehsana": {
    cityName: "Mehsana",
    metaTitle: "Buy Plants Online in Mehsana | North Gujarat Dairy Hub Plants | RedHeart",
    metaDescription: "Order plants online in Mehsana. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. North Gujarat's oil and dairy city gets fresh plant delivery.",
    h1: "Buy Plants Online in Mehsana — Same-Day Plant Delivery in North Gujarat's Commercial Hub",
    metaKeyword: "plants online mehsana, buy plants mehsana, indoor plants mehsana, plant delivery mehsana gujarat, marigold mehsana, tulsi mehsana, online nursery mehsana north gujarat ongc",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Mehsana — North Gujarat's Commercial Capital Gets Doorstep Greens</h2>
<p>Mehsana is one of north Gujarat's most important commercial and industrial cities — the headquarters of the Dudhsagar Dairy (one of Asia's largest dairy cooperatives and a key component of the Gujarat cooperative dairy model), the site of ONGC's major gas and oil exploration operations in north Gujarat (the Mehsana ONGC fields have been one of India's primary onshore oil-producing zones since the 1960s), and the main commercial hub for north Gujarat's agricultural belt. The Mehsana Tobacco Exchange was historically important — tobacco from north Gujarat's black-soil belt was once traded at the Mehsana Mandi. The city connects the Saurashtra highway with Gandhinagar, making it a key logistics and trade junction.</p>
<p>Mehsana's climate is north Gujarat dry: very hot summers (44°C), below-average monsoon (500–600 mm), and cool winters (8–24°C). Drought-tolerant plants are preferred. Tulsi, aloe vera, marigold, money plant, and indoor plants are most popular. RedHeart delivers across Mehsana, Unjha, Visnagar, Kadi, and Patan with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Mehsana</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Gujarati home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles north Gujarat extreme heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, Uttarayan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">ONGC/Dudhsagar office, indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, dairy cooperative gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC, tolerates heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Mehsana</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Mehsana City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Station Road, Dudhsagar Dairy area, Kadi Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Unjha / Patan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Unjha seed market, Patan (Rani ki Vav)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plants survive Mehsana's extreme north Gujarat summer heat?", answer: "Aloe vera, snake plant (indoor AC), money plant in a water vase, cactus, and lucky bamboo in a water vase are the most heat and drought-adapted choices for Mehsana's challenging summers (44°C, 500 mm monsoon). October–February is the best outdoor planting window." },
      { question: "Is same-day plant delivery available in Mehsana?", answer: "Yes. Same-day delivery across Mehsana including Station Road, Dudhsagar Dairy area, and Kadi Road. Order before 3 PM. Unjha and Patan are within 3–5 hours." },
      { question: "What plant is best for Unjha's seed market gifting (Mehsana district)?", answer: "Unjha is Asia's largest seed market for herbs and spices (cumin, fennel, coriander). For Unjha's agricultural trading community, tulsi (a sacred herb they deeply understand), and growing herb pots (holy basil, curry leaf, ajwain) are meaningful gifts that connect to their seed-trade identity. Lucky bamboo is appropriate for inter-firm Diwali gifting." },
      { question: "What plant connects to Mehsana's dairy heritage?", answer: "Tulsi (whose leaves are mixed into Gujarati chai and buttermilk — deeply connected to dairy culture) is the most appropriate plant for Mehsana's Dudhsagar Dairy and dairy-farming community. Growing tulsi at home bridges the sacred and culinary traditions of Gujarat's cooperative dairying culture." },
      { question: "Do you deliver plants to Patan (Rani ki Vav) from Mehsana?", answer: "Yes. Patan (45 km from Mehsana, home to the UNESCO World Heritage Rani ki Vav stepwell — one of India's most extraordinary examples of ancient water architecture, and the ruined medieval Patan city that was the Solanki dynasty capital) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "dhule": {
    cityName: "Dhule",
    metaTitle: "Buy Plants Online in Dhule | Khandesh Maharashtra Plants | RedHeart",
    metaDescription: "Order plants online in Dhule. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Khandesh's commercial hub in north Maharashtra gets plant delivery.",
    h1: "Buy Plants Online in Dhule — Same-Day Plant Delivery in Khandesh's Commercial Capital",
    metaKeyword: "plants online dhule, buy plants dhule, indoor plants dhule, plant delivery dhule maharashtra, marigold dhule, tulsi dhule, online nursery dhule khandesh north maharashtra",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Dhule — Khandesh's Commercial Hub Gets Doorstep Greens</h2>
<p>Dhule is north Maharashtra's most important commercial city — the gateway to the Khandesh region (the Tapi river valley zone of Maharashtra, historically famous for cotton, timber, and onion cultivation). Dhule district produces large quantities of onion, cotton, bajra, and sesame (til) — Khandesh was historically called the "Cotton Kingdom of Maharashtra," and the region's agricultural output defines Dhule's economy. The city is positioned at the junction of the Mumbai-Delhi National Highway 3 and the Nashik-Indore route, making it a significant road transport hub. Dhule is also known for its cotton textile industry and for being a major collection point for onions destined for export.</p>
<p>Dhule's climate is north Maharashtra semi-arid: hot summers (44°C), moderate monsoon (550 mm), and pleasant winters (10–28°C). Aloe vera, marigold, tulsi, money plant, and indoor plants are most practical. RedHeart delivers across Dhule, Shirpur, Sakri, Nandurbar, and Malegaon with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Dhule</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Maratha-Khandesh homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganesh Chaturthi, Diwali, Navratri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Khandesh summer heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, office, Dhule trading gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cotton trade, Diwali gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor air purifier, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Dhule</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Dhule City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Azad Chowk, Shahada Road, Market Area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Shirpur / Nandurbar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shirpur industrial area, Nandurbar town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plants survive Dhule's semi-arid Khandesh climate?", answer: "Aloe vera, tulsi, money plant in water, snake plant in AC, and lucky bamboo in water vase are the most reliable choices for Dhule's challenging summers (44°C, 550 mm monsoon). October–March is the best outdoor planting window for marigold and rose." },
      { question: "Is same-day plant delivery available in Dhule?", answer: "Yes. Same-day delivery across Dhule including Azad Chowk, Shahada Road, and Market Area. Order before 3 PM. Shirpur and Nandurbar are within 3–5 hours." },
      { question: "What plant is most meaningful for Ganesh Chaturthi in Dhule?", answer: "Marigold (shendri) is the defining Ganesh Chaturthi plant for Dhule's Khandesh community — marigold garlands draped on the Ganesh idol, marigold petals for aarti, and marigold in pots on the entrance are the botanical centerpieces of Ganapati celebrations. Tulsi leaves and dhruva grass (a sacred grass used in Ganapati puja) are also important traditional offerings." },
      { question: "What plants grow best for Dhule's cotton farming community homes?", answer: "Tulsi (the most sacred home plant for any Hindu agricultural family), aloe vera (practical and drought-adapted), marigold (for Diwali — the post-cotton-harvest celebration), and money plant (auspicious, indoor) are the most practical plants for Dhule's cotton farming community. These four plants cover sacred, practical, festive, and indoor needs without requiring excessive water." },
      { question: "Do you deliver plants to Nandurbar from Dhule?", answer: "Yes. Nandurbar (75 km from Dhule, a tribal-belt district headquarters near Madhya Pradesh and Gujarat borders, and an important Bhil-Adivasi cultural zone) is within our 3–5 hour same-day delivery zone. Shirpur, an industrial town (Shirpur Gold Refinery) on the Tapi river bank, is similarly covered." }
    ]
  },

  "yamunanagar": {
    cityName: "Yamunanagar",
    metaTitle: "Buy Plants Online in Yamunanagar | Timber City Haryana Plants | RedHeart",
    metaDescription: "Order plants online in Yamunanagar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Haryana's paper and plywood city gets fresh plant delivery.",
    h1: "Buy Plants Online in Yamunanagar — Same-Day Plant Delivery in Haryana's Timber and Paper City",
    metaKeyword: "plants online yamunanagar, buy plants yamunanagar, indoor plants yamunanagar, plant delivery yamunanagar haryana, marigold yamunanagar, tulsi yamunanagar, online nursery yamunanagar jagadhri paper plywood",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Yamunanagar — Haryana's Timber Capital Gets Doorstep Greens</h2>
<p>Yamunanagar is Haryana's industrial powerhouse city for timber, plywood, and paper manufacturing — the twin city of Jagadhri (famous for copper and brass utensil making) forms the greater Yamunanagar urban area. The city's plywood and paper industry (including Ballarpur Industries/BILT, India's largest paper manufacturer) has been Haryana's industrial heartbeat for decades. Yamunanagar is located on the Yamuna river, and the Hathni Kund Barrage (25 km upstream) is the starting point of the Western Yamuna Canal, which feeds agriculture across the Haryana-UP plains. The city's proximity to the Shivalik Hills and Kalesar National Park (Haryana's only national park) gives it a greener hinterland than most Haryana cities.</p>
<p>Yamunanagar's climate is north Indian sub-Himalayan: hot summers (42°C), good monsoon (900 mm from the Shivalik influence), and cold winters (4–18°C). Rose, marigold, tulsi, money plant, and indoor plants are all popular. RedHeart delivers across Yamunanagar, Jagadhri, Bilaspur (Yamunanagar), Chhachhrauli, and Radaur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Yamunanagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent north Indian winter blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Lohri, Baisakhi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Plywood/paper industry offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Industrial Diwali gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low-maintenance, heat-adapted</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Yamunanagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Yamunanagar / Jagadhri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">BILT Colony, Model Town, Jagadhri Workshop</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bilaspur / Radaur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bilaspur town, Radaur, Chhachhrauli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most appropriate for Lohri gifting in Yamunanagar's Punjabi community?", answer: "Marigold in terracotta pots around the Lohri bonfire is quintessentially Punjabi. Lucky bamboo in a wooden box (made in Yamunanagar!) is a perfect Lohri gift for the plywood-industry community. Rose planted in October to bloom in December makes a beautiful winter garden for any Haryana home." },
      { question: "Is same-day plant delivery available in Yamunanagar?", answer: "Yes. Same-day delivery across Yamunanagar including BILT Colony, Model Town, and Jagadhri Workshop area. Order before 3 PM. Bilaspur and Radaur are within 3–5 hours." },
      { question: "What plants grow best near Yamunanagar's Shivalik Hills and Yamuna river?", answer: "The 900 mm monsoon (enhanced by the Shivalik Hills proximity) and cold winters make rose, marigold, tulsi, jasmine, hibiscus, and areca palm all thrive in Yamunanagar. October–February is the standout garden season." },
      { question: "What plant connects to Yamunanagar's timber and plywood industry identity?", answer: "Bamboo — both lucky bamboo (Dracaena) and real bamboo — is the most identity-connected plant for Yamunanagar's plywood and paper manufacturing community. The irony of a plywood city growing bamboo (a fast-growing alternative to timber) adds a meaningful dimension. Areca palm is another appropriate statement plant for sustainable forestry identity." },
      { question: "Do you deliver plants to Jagadhri from Yamunanagar?", answer: "Yes. Jagadhri (the twin city of Yamunanagar, famous for its copper and brass utensil-making industry — Jagadhri Workshop area is the centre of North India's brassware craftsmanship) is within our core 2–4 hour same-day delivery zone. The combined Yamunanagar-Jagadhri urban agglomeration is our service area." }
    ]
  },

  "hanumangarh": {
    cityName: "Hanumangarh",
    metaTitle: "Buy Plants Online in Hanumangarh | Ghaggar River Rajasthan Plants | RedHeart",
    metaDescription: "Order plants online in Hanumangarh. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Rajasthan's Ghaggar river agricultural district gets plant delivery.",
    h1: "Buy Plants Online in Hanumangarh — Same-Day Plant Delivery in Rajasthan's Northern Agricultural Heartland",
    metaKeyword: "plants online hanumangarh, buy plants hanumangarh, indoor plants hanumangarh, plant delivery hanumangarh rajasthan, marigold hanumangarh, tulsi hanumangarh, online nursery hanumangarh ghaggar cotton wheat",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Hanumangarh — Rajasthan's Ghaggar Belt Gets Doorstep Greens</h2>
<p>Hanumangarh is one of Rajasthan's most productive agricultural districts — positioned in the Ghaggar river basin (the ancient Saraswati river's descendant, flowing seasonally from Haryana into Rajasthan's sandy terrain), the Hanumangarh region's canal-irrigated fields produce wheat, cotton, and mustard that make it far more productive than the desert districts to its south. The city was known as Bhatner Fort historically — the fort was taken and retaken multiple times between Timur (1398), Firuz Shah Tughlaq, and the Mughal era. The Anupgarh-Hanumangarh belt is Rajasthan's cotton-growing hub, earning the region the nickname "Rajasthan's Mini Punjab."</p>
<p>Hanumangarh's climate is northwest extreme: very hot summers (47°C), very low monsoon (250 mm), and cold winters (1–16°C). Drought-adapted plants are essential. Marigold, rose (winter), tulsi, money plant, and aloe vera are most popular. RedHeart delivers across Hanumangarh, Sangaria, Nohar, Pilibanga, and Sri Ganganagar with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Hanumangarh Homes</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lohri, Diwali, Navratri, Gurpurab</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Rajasthani/Punjabi homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Outstanding cold-clear winter blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Extreme heat, very low water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor water vase, no desert heat risk</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, cotton trade gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Hanumangarh</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hanumangarh City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Town, Junction, Bhatner area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sangaria / Nohar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sangaria, Nohar, Pilibanga</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Hanumangarh's extreme northwest climate (47°C, 250 mm rain)?", answer: "Aloe vera, cactus, money plant in water vase, snake plant (indoor AC), and lucky bamboo in water are the most extreme heat and drought-adapted choices for Hanumangarh's summer months. October–February is the outdoor planting window — rose and marigold produce spectacular blooms in Hanumangarh's cold, clear winter nights (1–16°C)." },
      { question: "Is same-day plant delivery available in Hanumangarh?", answer: "Yes. Same-day delivery across Hanumangarh Town, Junction, and Bhatner area. Order before 3 PM. Sangaria, Nohar, and Pilibanga are within 3–5 hours." },
      { question: "What plant is best for Lohri in Hanumangarh's large Punjabi-Sikh farming community?", answer: "Marigold for Lohri bonfire decoration and home entrance is the most popular choice for Hanumangarh's Punjabi farming community. Rose planted in October blooms spectacularly for the January Lohri season. Lucky bamboo in a wooden box is an appropriate inter-community Lohri gifting option." },
      { question: "What plants grow well with canal irrigation in Hanumangarh's cotton belt?", answer: "Canal-irrigated garden plots in Hanumangarh can support rose, marigold, tulsi, hibiscus, and even small banana plants during the cooler months. The key is water availability during summer — canal water makes any plant possible in this otherwise desert-adjacent zone." },
      { question: "Do you deliver plants to Nohar and Sangaria from Hanumangarh?", answer: "Yes. Nohar (70 km from Hanumangarh) and Sangaria (40 km) are within our 3–5 hour same-day delivery zone. Pilibanga (home to one of the archaeological sites of the ancient Indus Valley Civilization — Kalibangan — 35 km from Hanumangarh) is similarly within our coverage area." }
    ]
  },

  "barmer": {
    cityName: "Barmer",
    metaTitle: "Buy Plants Online in Barmer | Thar Desert Rajasthan Plants | RedHeart",
    metaDescription: "Order plants online in Barmer. Desert-adapted plants & gifting. Same-day delivery. Starting ₹299. India's hottest Thar Desert city gets drought-ready plant delivery.",
    h1: "Buy Plants Online in Barmer — Same-Day Plant Delivery in the Heart of Thar Desert",
    metaKeyword: "plants online barmer, buy plants barmer, indoor plants barmer, plant delivery barmer rajasthan, desert plants barmer, tulsi barmer, online nursery barmer thar desert oil gas",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Barmer — The Thar Desert's Fossil Fuel City Gets Doorstep Greens</h2>
<p>Barmer is one of India's most extreme cities in terms of climate — located in the heart of the Thar Desert, it consistently records some of India's highest summer temperatures (50°C+) and receives only 150–200 mm of monsoon rainfall annually. Yet Barmer has become economically vital as the centre of Rajasthan's oil and gas industry: the Barmer-Sanchor basin (Mangala oil field, operated by Cairn India/Vedanta) is India's largest onshore oil field, and the massive Rajasthan refinery at Pachpadra (Asia's largest refinery by some measures, when completed) positions Barmer as Rajasthan's petroleum capital. Barmer is also famous for its exquisite wooden furniture (Barmer's intricately carved wooden beds and chests), printed fabrics (Barmer block printing), and embroidery traditions.</p>
<p>Barmer's extreme Thar climate requires the most drought-adapted plants. Money plant in water vase, aloe vera, cactus, snake plant (indoor AC), and lucky bamboo in water vase are the most suitable choices. Marigold and rose can be grown during the winter season (October–February). RedHeart delivers across Barmer, Balotra, Siwana, Jaisalmer Road, and Dhorimanna with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Desert-Adapted Plants for Barmer</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Works in Barmer</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Native Thar desert succulent — survives 50°C</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant (water vase)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC, no soil = no dust</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC, purifies desert dust air</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Water vase, no soil, oil-industry gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, survives if watered daily in shade</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold (winter only)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb only, Diwali-Lohri season</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Barmer</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Barmer City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Station Road, Sindhari, Sadar Bazar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Balotra / Siwana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Balotra textile, Siwana fort town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What are the most drought-adapted plants for Barmer's extreme Thar Desert climate?", answer: "Aloe vera (native desert succulent — stores water in its leaves, can survive months without watering, and handles 50°C), snake plant (the champion air-purifying desert succulent), and cactus are the top three Barmer-climate plants. Money plant and lucky bamboo in water vases (no soil, no dust, no heat stress) are excellent for indoor AC environments. These plants genuinely thrive in the Thar Desert's extreme conditions." },
      { question: "Is same-day plant delivery available in Barmer?", answer: "Yes. Same-day delivery across Barmer including Station Road, Sindhari, and Sadar Bazar. Order before 3 PM. Balotra and Siwana are within 4–6 hours." },
      { question: "What plant is most appropriate for the Cairn India/Vedanta oil field offices in Barmer?", answer: "Snake plant (air purifying, extremely hardy) and lucky bamboo in a ceramic vase are the most appropriate plants for the Mangala oil field and Barmer Petroleum Complex office environments. Peace lily for meeting rooms in the air-conditioned office blocks. Money plant in a glass vase on a desk is practically zero-maintenance and adds green energy to any drilling site office." },
      { question: "Can I grow a garden in Barmer despite the extreme climate?", answer: "A limited Thar Desert garden is possible during October–February when temperatures are 18–32°C and nights are cold. Rose and marigold planted in shaded outdoor pots in October will bloom beautifully through January. The rest of the year, indoor gardening in AC environments with snake plant, aloe vera, and cacti is the practical approach for Barmer's households." },
      { question: "Do you deliver plants to Balotra from Barmer?", answer: "Yes. Balotra (80 km from Barmer, recently separated as Rajasthan's newest district, famous for its textile printing and dyeing industry on the Luni river) is within our 4–6 hour same-day delivery zone. The Balotra textile community, like Barmer's crafts community, has strong plant gifting traditions for Diwali and other occasions." }
    ]
  },

  "osmanabad": {
    cityName: "Osmanabad",
    metaTitle: "Buy Plants Online in Osmanabad | Dharashiv Marathwada Plants | RedHeart",
    metaDescription: "Order plants online in Osmanabad (Dharashiv). Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Marathwada's resilient city gets plant delivery.",
    h1: "Buy Plants Online in Osmanabad (Dharashiv) — Same-Day Plant Delivery in Marathwada",
    metaKeyword: "plants online osmanabad, buy plants osmanabad, indoor plants osmanabad, plant delivery osmanabad dharashiv maharashtra, marigold osmanabad, tulsi osmanabad, online nursery osmanabad marathwada",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Osmanabad (Dharashiv) — Marathwada's Resilient City Gets Doorstep Greens</h2>
<p>Osmanabad (officially renamed Dharashiv in 2023, in reference to the ancient Dharashiv caves nearby) is one of Marathwada's most historically layered cities — home to the Tuljapur temple (Tuljabhavani, the patron goddess of the Maratha royal family; Chhatrapati Shivaji Maharaj's kul devi), the Naldurg Fort (a massive Bidar Sultanate-era fortress on the Bori river), and the ancient Dharashiv Buddhist cave complex (predating the major Ajanta caves in historical sequence). The city was part of the Nizam's Hyderabad state until 1948's Operation Polo (Hyderabad Police Action) and carries a distinctive blend of Nizam-era architectural and administrative legacy alongside its Maratha identity. Osmanabad district's Marathwada setting makes water-smart gardening a necessity.</p>
<p>Osmanabad's climate is Marathwada semi-arid: hot summers (42°C), moderate monsoon (700 mm), and cool winters (12–26°C). Tulsi, marigold, aloe vera, money plant, and indoor plants are most practical. RedHeart delivers across Osmanabad, Tuljapur, Latur, Naldurg, and Solapur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Osmanabad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Tuljabhavani-connected Maratha homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganesh Chaturthi, Diwali, Navratri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Marathwada drought-resilient gardening</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, low water gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gifting, water vase indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor air purifier, low maintenance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Osmanabad</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Osmanabad / Dharashiv</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Naldurg Road, Station Road, Kavthal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tuljapur / Latur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tuljapur temple town, Latur district</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Tuljabhavani devotees in Osmanabad?", answer: "Tulsi is the most sacred plant for Osmanabad's Tuljabhavani temple community — Tuljabhavani is a Shakti goddess (Devi), and tulsi is offered at the sacred altar for all Maratha devotional occasions. Marigold garlands for the Tuljabhavani yatra (annual pilgrimage) are essential. Since Tuljabhavani is the kul devi of the Chhatrapati Maratha royal lineage, the devotional plant traditions here carry extraordinary historical weight." },
      { question: "Is same-day plant delivery available in Osmanabad (Dharashiv)?", answer: "Yes. Same-day delivery across Osmanabad/Dharashiv including Naldurg Road, Station Road, and Kavthal area. Order before 3 PM. Tuljapur and Latur are within 3–5 hours." },
      { question: "What plants grow well in Osmanabad's Marathwada semi-arid climate?", answer: "The 700 mm monsoon and moderate temperatures make tulsi, marigold, aloe vera, money plant, and indoor plants all viable. The Marathwada region's intermittent drought (water scarcity years) makes drought-adapted plants (aloe vera, snake plant, cactus, money plant in water vase) the most resilient home garden choices." },
      { question: "What plant is best for Osmanabad's new Dharashiv identity and cave heritage?", answer: "Ficus (sacred fig, Bodhi tree connection) and tulsi connect beautifully to the ancient Dharashiv Buddhist cave traditions. For home gardens, money plant and jasmine are the most appropriate choices for a city with both Buddhist archaeological heritage and Maratha Shakti temple identity." },
      { question: "Do you deliver plants to Tuljapur (Tuljabhavani temple) from Osmanabad?", answer: "Yes. Tuljapur (25 km from Osmanabad, home to the revered Tuljabhavani Shakti temple — one of Maharashtra's most important pilgrimage sites, drawing devotees from Maharashtra, Karnataka, and Andhra Pradesh) is within our 3–5 hour same-day delivery zone." }
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
