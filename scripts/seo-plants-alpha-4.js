// Plants Alphabetical Pass Batch 4 — 8 cities
// Sagar, Satna, Rewa, Ambikapur, Jagdalpur, Bathinda, Pathankot, Haridwar

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "sagar": {
    cityName: "Sagar",
    metaTitle: "Buy Plants Online in Sagar | Lake City Madhya Pradesh Plants | RedHeart",
    metaDescription: "Order plants online in Sagar. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Madhya Pradesh's lake city gets fresh plant delivery.",
    h1: "Buy Plants Online in Sagar — Same-Day Plant Delivery in the Lake City of Madhya Pradesh",
    metaKeyword: "plants online sagar, buy plants sagar, indoor plants sagar, plant delivery sagar madhya pradesh, marigold sagar mp, tulsi sagar, online nursery sagar lake city dr harisingh gour university",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Sagar — Madhya Pradesh's Lake City Gets Doorstep Greens</h2>
<p>Sagar is one of Madhya Pradesh's most liveable and academically distinguished cities — the home of Dr. Harisingh Gour University (established 1946, named after the jurist-educationalist who donated his personal fortune to found it, one of India's earliest central universities), the Sagar Lake (a natural lake at the city's centre that gives the city its name and a beautiful waterfront character), and a significant cantonment area (Sagar Cantonment, established in 1818, was important in British India's central Indian administrative network). The city is in the Bundelkhand plateau zone and serves as a gateway to the Vindhya Range and the Bijawar limestone plateau. The Sagar lake's lotus blooms in July–August are one of the city's natural highlights.</p>
<p>Sagar's climate is Bundelkhand semi-arid plateau: hot summers (44°C), moderate monsoon (1,000 mm), and cool winters (8–24°C). Marigold, tulsi, rose, money plant, and indoor plants are all popular. RedHeart delivers across Sagar, Rahatgarh, Khurai, Banda, and Damoh with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Sagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lotus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sagar Lake connection, Saraswati Puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Monsoon</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Saraswati Puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every MP Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sagar winter garden, university gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dr. HSG University hostel, indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, cantonment gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Sagar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sagar City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sagar Lake Road, Cantonment, University area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rahatgarh / Khurai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rahatgarh, Khurai, Banda town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant best represents Sagar's famous lake?", answer: "Lotus is the quintessential Sagar plant — the Sagar Lake blooms with wild lotus in the monsoon season (July–August), one of the city's most beautiful natural events. Growing lotus in a water pot at home is a meaningful tribute to Sagar's lake identity. Water hyacinth, water lily, and lotus bowl gardens all connect to Sagar's aquatic natural heritage." },
      { question: "Is same-day plant delivery available in Sagar?", answer: "Yes. Same-day delivery across Sagar including Sagar Lake Road, Cantonment, and Dr. Harisingh Gour University area. Order before 3 PM. Rahatgarh and Khurai are within 3–5 hours." },
      { question: "What plant is best for Dr. Harisingh Gour University hostel rooms?", answer: "Money plant in a small water vase on a study shelf is perfect for Dr. HSG University hostels — low maintenance, thriving in the indirect light of a hostel room, auspicious, and long-lasting. Snake plant for a shared room is the air-purifying alternative. Lucky bamboo in a small glass vase requires only weekly water changes." },
      { question: "What plants grow well in Sagar's Bundelkhand plateau climate?", answer: "Sagar's 1,000 mm monsoon and cool winters make rose, marigold, tulsi, aloe vera, money plant, and jasmine all thrive. The lake's proximity moderates temperatures slightly, making Sagar's climate more plant-friendly than drier Bundelkhand cities. October–February is the best outdoor planting season." },
      { question: "Do you deliver plants to Damoh from Sagar?", answer: "Yes. Damoh (90 km from Sagar, famous for the Singorgarh Fort and the Singaji folk music tradition) is within our 3–5 hour delivery window. Rahatgarh, Khurai, and Banda are all within our same-day coverage area." }
    ]
  },

  "satna": {
    cityName: "Satna",
    metaTitle: "Buy Plants Online in Satna | Cement City Vindhya Pradesh Plants | RedHeart",
    metaDescription: "Order plants online in Satna. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Madhya Pradesh's cement capital near Khajuraho gets plant delivery.",
    h1: "Buy Plants Online in Satna — Same-Day Plant Delivery in MP's Cement Capital",
    metaKeyword: "plants online satna, buy plants satna, indoor plants satna, plant delivery satna madhya pradesh, marigold satna, tulsi satna, online nursery satna cement vindhya khajuraho",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Satna — MP's Cement Capital Gets Doorstep Greens</h2>
<p>Satna is Madhya Pradesh's cement manufacturing capital — the city's location in the Vindhya Range limestone belt makes it one of India's most important cement producing regions, with major plants operated by Birla, JP Cement, UltraTech, and others. The city serves as the commercial and transport hub for the Vindhya region and as the gateway to Khajuraho (UNESCO World Heritage Site, 117 km away) and Chitrakoot (the sacred pilgrimage site on the Mandakini river where Ram, Sita, and Laxman spent significant time during their exile). Satna's rivers — the Tamasa (Tons), Sone, and Ken — connect to some of Madhya Pradesh's most beautiful natural landscapes.</p>
<p>Satna's climate is Vindhya plateau: hot summers (44°C), good monsoon (1,000 mm), and cool winters (7–24°C). Marigold, tulsi, rose, money plant, and indoor plants all grow well. RedHeart delivers across Satna, Maihar, Rewa, Chitrakoot, and Panna with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Satna</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Vindhya Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri (Maihar Mata), Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Satna winter garden, Khajuraho tourism</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cement industry offices, indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier in cement dust area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cement factory Diwali gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Satna</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Satna City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Birla Colony, Maihar Road, Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Maihar / Chitrakoot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Maihar Sharda Devi temple, Chitrakoot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Maihar Sharda Mata devotees near Satna?", answer: "Marigold and hibiscus (red hibiscus is the most sacred offering flower for Shakti goddesses including Sharda Mata) are the most important plants for Satna's Maihar Sharda Devi devotees. The Maihar temple (atop the Trikuta hill, reached by 1,063 steps) draws pilgrims from across Madhya Pradesh, UP, and Bihar — marigold garland offerings at the temple are the botanical centerpiece of Navratri celebrations." },
      { question: "Is same-day plant delivery available in Satna?", answer: "Yes. Same-day delivery across Satna including Birla Colony, Maihar Road, and Civil Lines. Order before 3 PM. Maihar and Chitrakoot are within 3–5 hours." },
      { question: "What plant is best for air quality in Satna's cement industry environment?", answer: "Snake plant is the most effective indoor air-purifying plant for Satna's cement industry residential areas — it filters airborne particulates and produces oxygen at night. Money plant in a hanging basket is the most popular indoor choice for Birla Colony and cement township homes. Both require minimal care and handle the dust conditions found near cement manufacturing clusters." },
      { question: "What plants connect to Chitrakoot's Ram Vanvasa sacred heritage near Satna?", answer: "Tulsi (Ram's most sacred plant) and kadamba (the tree under which Radha and Krishna played, also connected to Ram's forest exile) are the most spiritually resonant plants for Satna's Chitrakoot pilgrimage connection. Growing a tulsi plant inspired by Ram's vanvasa in the Chitrakoot jungle is a meaningful devotional act for any Satna family." },
      { question: "Do you deliver plants to Chitrakoot from Satna?", answer: "Yes. Chitrakoot (80 km from Satna, the sacred Mandakini river pilgrimage site where Ram, Sita, and Lakshmana spent 11 of the 14 years of exile — one of Hinduism's most sacred forest pilgrimage sites) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "rewa": {
    cityName: "Rewa",
    metaTitle: "Buy Plants Online in Rewa | White Tiger City Madhya Pradesh Plants | RedHeart",
    metaDescription: "Order plants online in Rewa. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Birthplace of the white tiger in MP gets fresh plant delivery.",
    h1: "Buy Plants Online in Rewa — Same-Day Plant Delivery in the White Tiger's City",
    metaKeyword: "plants online rewa, buy plants rewa, indoor plants rewa, plant delivery rewa madhya pradesh, marigold rewa, tulsi rewa, online nursery rewa white tiger vindhya solar power",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Rewa — The White Tiger's City Gets Doorstep Greens</h2>
<p>Rewa is one of Madhya Pradesh's most distinctive cities — historically famous as the princely state where the world's first white tiger was discovered and bred (Mohan the white tiger, captured in 1951 by the Maharaja of Rewa, became the ancestor of virtually every white tiger in captivity worldwide), and today home to one of the world's largest solar power plants (the Rewa Ultra Mega Solar Power Plant, 750 MW, commissioned in 2020 and supplying electricity to the Delhi Metro Rail Corporation). The city is the cultural capital of the Vindhya region (formerly Vindhya Pradesh before merger with Madhya Pradesh) and the Rewa Gharana of classical music is one of its cultural contributions.</p>
<p>Rewa's climate is Vindhya plateau: hot summers (44°C), good monsoon (1,100 mm), and cool winters (6–24°C). Rose, marigold, tulsi, money plant, and indoor plants all thrive. RedHeart delivers across Rewa, Sidhi, Mauganj, Teonthar, and Satna with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Rewa</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Vindhya Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri (Mahamaya Devi), Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rewa Maharaja palace garden tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Solar park township offices, indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, government sector gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low maintenance, handles summer</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Rewa</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rewa City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chorhata, Civil Lines, Banskutthi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mauganj / Sidhi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mauganj, Sidhi, Teonthar town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant honors Rewa's iconic white tiger heritage?", answer: "White flowering plants — white tulsi (Ram tulsi), white peace lily, and white anthurium — are the most appropriate tribute to Rewa's white tiger identity. Peace lily with its pristine white spathe bloom is particularly beautiful and meaningful for any Rewa home. The white tulsi (Ram tulsi) planted by the Maharaja of Rewa connects the royal garden tradition to the sacred." },
      { question: "Is same-day plant delivery available in Rewa?", answer: "Yes. Same-day delivery across Rewa including Chorhata, Civil Lines, and Banskutthi area. Order before 3 PM. Mauganj and Sidhi are within 3–5 hours." },
      { question: "What plant connects to the Rewa Solar Power Plant's sustainable identity?", answer: "For the Rewa Ultra Mega Solar Park's township community and employees, snake plant and money plant are the most sustainable indoor choices — both naturally air-purifying, minimal water requirements, long-lived. The Rewa solar park ethos of renewable energy and sustainability resonates with growing indoor plants that clean air naturally rather than relying on AC air purifiers." },
      { question: "What plants grow well in Rewa's Vindhya plateau climate?", answer: "The 1,100 mm monsoon and cool winters make rose, marigold, tulsi, jasmine, aloe vera, and money plant all thrive in Rewa. The monsoon is strong enough for outdoor tropical plants. October–March is the best garden season with cool nights producing spectacular rose blooms." },
      { question: "Do you deliver plants to Sidhi from Rewa?", answer: "Yes. Sidhi (90 km from Rewa, a Vindhya district headquarters near the famous Son river crocodile sanctuary) is within our 3–5 hour same-day delivery zone. Mauganj (a newly carved district from Rewa, 45 km away) and Teonthar are also covered." }
    ]
  },

  "ambikapur": {
    cityName: "Ambikapur",
    metaTitle: "Buy Plants Online in Ambikapur | Chhattisgarh Clean City Plants | RedHeart",
    metaDescription: "Order plants online in Ambikapur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. India's cleanest city in Chhattisgarh gets fresh plant delivery.",
    h1: "Buy Plants Online in Ambikapur — Same-Day Plant Delivery in India's Cleanest City",
    metaKeyword: "plants online ambikapur, buy plants ambikapur, indoor plants ambikapur, plant delivery ambikapur chhattisgarh, marigold ambikapur, tulsi ambikapur, online nursery ambikapur surguja clean city tribal",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ambikapur — India's Cleanest City Gets Doorstep Greens</h2>
<p>Ambikapur is one of India's most inspiring small cities — the headquarters of Chhattisgarh's Surguja district, it gained national recognition as one of India's cleanest cities (ranked consistently in the Swachh Bharat Mission surveys and winning the cleanest smaller city award) through a remarkable community-led waste management and urban cleanliness initiative. The city is the gateway to Chhattisgarh's Surguja forest zone — one of the most biodiversity-rich areas of central India, home to elephant corridors, Sal forests, and tribal communities (Gond, Korwa, Paharia Adivasi groups). The Maa Maha Maya Devi temple at Ratneshwar attracts pilgrims from across the region.</p>
<p>Ambikapur's climate is Surguja plateau: comfortable summers (36°C — cooler than most of Chhattisgarh due to elevation), excellent monsoon (1,200 mm), and cool winters (6–22°C). The excellent climate makes plant-growing especially easy. Rose, marigold, tulsi, money plant, and all tropical plants thrive. RedHeart delivers across Ambikapur, Surajpur, Baikunthpur, Pratapur, and Balrampur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Ambikapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri (Maha Maya), Diwali, Karma</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every home courtyard</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Clean city gardens, cool elevation</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, all occasions</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Ambikapur's good humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gifting, Surguja offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ambikapur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambikapur City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Darri, Ganesh Nagar, Collector Office area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Surajpur / Balrampur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Surajpur, Balrampur, Pratapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant best represents Ambikapur's 'cleanest city' identity?", answer: "Snake plant (a champion air-purifying plant) planted near the entrance of Ambikapur's homes symbolizes the city's commitment to cleanliness. Bamboo (the sustainable, fast-growing, zero-waste plant) and money plant in water vases (no soil, no mess) are the most eco-appropriate plants for India's cleanest city. Growing plants at home is the most natural extension of Ambikapur's remarkable urban cleanliness culture." },
      { question: "Is same-day plant delivery available in Ambikapur?", answer: "Yes. Same-day delivery across Ambikapur including Darri, Ganesh Nagar, and Collector Office area. Order before 3 PM. Surajpur and Balrampur are within 3–5 hours." },
      { question: "What plants grow best in Ambikapur's elevated, cool Surguja climate?", answer: "Ambikapur's elevated plateau climate (36°C max, 1,200 mm monsoon, 6–22°C winters) is one of the best growing environments in central India. Rose (outstanding November–February blooms), marigold, tulsi, anthurium, jasmine, money plant, and virtually any plant thrive here. The cooler temperatures compared to the Chhattisgarh plains make gardening more rewarding and the growing season longer." },
      { question: "What plant connects to the Karma Puja and tribal festivals in Surguja?", answer: "The Karma tree (Neolamarckia cadamba — also called Kadamba) is the most sacred plant in the Karma Puja festival celebrated by the Gond, Korwa, and Paharia tribal communities of Surguja. A young Kadamba tree in a pot is the most culturally resonant plant for any Ambikapur household participating in or honouring the tribal festival tradition." },
      { question: "Do you deliver plants to Balrampur from Ambikapur?", answer: "Yes. Balrampur (60 km from Ambikapur, home to the Tatapani hot springs — one of Chhattisgarh's natural wonders, and a newly carved district) is within our 3–5 hour same-day delivery zone. Surajpur and Pratapur are also covered." }
    ]
  },

  "jagdalpur": {
    cityName: "Jagdalpur",
    metaTitle: "Buy Plants Online in Jagdalpur | Bastar Chhattisgarh Tribal Plants | RedHeart",
    metaDescription: "Order plants online in Jagdalpur. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Bastar's tribal cultural capital in Chhattisgarh gets plant delivery.",
    h1: "Buy Plants Online in Jagdalpur — Same-Day Plant Delivery in Bastar's Tribal Capital",
    metaKeyword: "plants online jagdalpur, buy plants jagdalpur, indoor plants jagdalpur, plant delivery jagdalpur chhattisgarh, marigold jagdalpur, tulsi jagdalpur, online nursery jagdalpur bastar chitrakote waterfall tribal",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jagdalpur — Bastar's Cultural Capital Gets Doorstep Greens</h2>
<p>Jagdalpur is the administrative and cultural capital of Bastar division — one of India's most extraordinary tribal culture zones, home to Gond, Halba, Dhurwa, and Maria tribal communities whose art, crafts, and festivals have attracted anthropologists and artists from around the world. The famous Bastar Dussehra (a 75-day festival — the world's longest Dussehra — celebrated on unique tribal traditions very different from mainstream Dussehra, centred on the Maa Danteshwari goddess) is held in Jagdalpur. The city is also the gateway to Chitrakote Waterfall (Chhattisgarh's "Niagara Falls" — the widest waterfall in India), Kanger Valley National Park (with the famous Kutumsar and Kailash limestone caves), and the Bastar plateau's extraordinary biodiversity.</p>
<p>Jagdalpur's climate is elevated Bastar plateau: comfortable summers (38°C), heavy monsoon (1,400 mm), and cool winters (10–26°C). The heavy monsoon makes virtually all tropical plants thrive. Marigold, tulsi, money plant, anthurium, and indoor plants are popular. RedHeart delivers across Jagdalpur, Kondagaon, Kanker, Narayanpur, and Dantewada with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Jagdalpur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bastar Dussehra, Diwali, Danteshwari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Bastar household</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Bastar's heavy monsoon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Jagdalpur homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tourism lodges near Chitrakote</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bastar Dussehra, government gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jagdalpur</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jagdalpur City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dharampura, Dimrapal, Court Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kondagaon / Kanker</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kondagaon, Kanker, Narayanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for Bastar Dussehra celebrations in Jagdalpur?", answer: "The Jawa plant (sacred grass sprouted specifically for Bastar Dussehra) and marigold garlands for Maa Danteshwari are the two most culturally significant botanical elements of Jagdalpur's 75-day Dussehra. The sprouting of Jawa seeds (dhan — paddy, chana, and other seeds) in clay pots as an offering to Danteshwari marks the beginning of the world's longest Dussehra. Marigold and tulsi are the universal sacred plants for all Dussehra ceremonies." },
      { question: "Is same-day plant delivery available in Jagdalpur?", answer: "Yes. Same-day delivery across Jagdalpur including Dharampura, Dimrapal, and Court Road. Order before 3 PM. Kondagaon and Kanker are within 4–6 hours." },
      { question: "What plants thrive in Jagdalpur's heavy Bastar monsoon?", answer: "Jagdalpur's exceptional 1,400 mm monsoon (Bastar's orographic rainfall from the Eastern Ghats is among the heaviest in central India) means tropical plants grow effortlessly during June–September. Anthurium, money plant, areca palm, jasmine, hibiscus, and ferns all flourish in the monsoon humidity. The challenge in Bastar is ensuring adequate drainage, not irrigation." },
      { question: "What plant is best for eco-tourism lodges near Chitrakote Waterfall?", answer: "Areca palm (the most elegant tropical indoor-outdoor statement plant), anthurium (blooms in Bastar's humidity without special care), and ferns (thriving in the waterfall mist zone) are the most appropriate plants for Chitrakote and Kanger Valley eco-tourism properties. Money plant in driftwood-style hanging planters creates a jungle-lodge ambiance." },
      { question: "Do you deliver plants to Dantewada from Jagdalpur?", answer: "Yes. Dantewada (80 km from Jagdalpur, the district housing Danteshwari temple — Maa Danteshwari is one of Chhattisgarh's most sacred goddesses and the patron deity of the Bastar royal family) is within our 4–6 hour delivery zone. Kondagaon and Narayanpur are similarly covered." }
    ]
  },

  "bathinda": {
    cityName: "Bathinda",
    metaTitle: "Buy Plants Online in Bathinda | Punjab Thermal City Plants | RedHeart",
    metaDescription: "Order plants online in Bathinda. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Punjab's cancer train city gets fresh plant delivery.",
    h1: "Buy Plants Online in Bathinda — Same-Day Plant Delivery in Punjab's Malwa Commercial Capital",
    metaKeyword: "plants online bathinda, buy plants bathinda, indoor plants bathinda, plant delivery bathinda punjab, marigold bathinda, tulsi bathinda, online nursery bathinda malwa punjab thermal rose",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bathinda — Punjab's Malwa Capital Gets Doorstep Greens</h2>
<p>Bathinda is the commercial capital of Punjab's Malwa region — the most populous and agriculturally dominant part of the Punjab heartland. Historically, the Qila Mubarak (Fort of Bathinda) is one of India's oldest surviving forts (over 1,800 years old, and where Razia Sultana was imprisoned by the Turkish governor of Bathinda in 1240). Today, Bathinda is an important regional hub for petrochemicals (HPCL Guru Gobind Singh Refinery — one of India's largest refineries), thermal power (GGSSTP — Guru Gobind Singh Super Thermal Power Plant), agriculture (the Malwa cotton and wheat belt), and education (Central University of Punjab). The city also has a significant Sikh Gurdwara heritage including the historic Takht Sri Damdama Sahib (one of the five Takhts of Sikhism) at Talwandi Sabo, 28 km away.</p>
<p>Bathinda's climate is Punjab Malwa: hot summers (45°C), moderate monsoon (450 mm), and cold winters (2–18°C). Rose, marigold, tulsi, money plant, and indoor plants are popular. RedHeart delivers across Bathinda, Mansa, Muktsar, Faridkot, and Talwandi Sabo with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Bathinda</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Punjab winter garden, outstanding blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lohri, Diwali, Gurpurab</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu-Sikh Punjab homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, apartment, refinery township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lohri, Gurpurab, refinery gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor air purifier, HPCL township</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bathinda</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bathinda City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thermal Colony, Power House Road, Model Town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mansa / Muktsar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mansa, Sri Muktsar Sahib, Faridkot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most meaningful for Lohri in Bathinda's Punjabi Malwa community?", answer: "Marigold in terracotta pots around the Lohri bonfire is quintessentially Punjabi Malwa. Rose planted in October blooms spectacularly for the January Lohri season — the cold, clear Punjab Malwa winters (2–18°C) are ideal rose-growing conditions. Lucky bamboo in a decorative box is the most popular inter-community Lohri gifting plant for Bathinda's business community." },
      { question: "Is same-day plant delivery available in Bathinda?", answer: "Yes. Same-day delivery across Bathinda including Thermal Colony, Power House Road, and Model Town. Order before 3 PM. Mansa and Sri Muktsar Sahib are within 3–5 hours." },
      { question: "What plants grow best in Bathinda's Punjab Malwa climate?", answer: "Punjab's cold winters (2–18°C) produce spectacular rose blooms — rose is the most rewarding Bathinda garden plant, planted in October and blooming through February. Marigold, tulsi, money plant, and aloe vera are the year-round practical choices. Indoor plants in AC apartments need no seasonal adjustment." },
      { question: "What plant is appropriate for Damdama Sahib Takht near Bathinda?", answer: "For the Takht Sri Damdama Sahib (Talwandi Sabo, 28 km from Bathinda — one of the five highest temporal seats of Sikhism, where Guru Gobind Singh Ji completed the final version of the Guru Granth Sahib), the Neem tree (Guru Gobind Singh's sacred tree, used for his seat — the Neem tree at the original Damdama Sahib is venerated) is the most spiritually significant. Growing a Neem tree at home is deeply connected to Sikh sacred tradition in this region." },
      { question: "Do you deliver plants to Muktsar and Faridkot from Bathinda?", answer: "Yes. Sri Muktsar Sahib (55 km from Bathinda, the sacred site of the Battle of Muktsar where the 40 Muktay — the forty liberated Sikhs — sacrificed their lives for Guru Gobind Singh) and Faridkot (historical princely state city) are within our 3–5 hour same-day delivery zone." }
    ]
  },

  "pathankot": {
    cityName: "Pathankot",
    metaTitle: "Buy Plants Online in Pathankot | Punjab Gateway Himachal Plants | RedHeart",
    metaDescription: "Order plants online in Pathankot. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Punjab's gateway to Himachal and Jammu gets plant delivery.",
    h1: "Buy Plants Online in Pathankot — Same-Day Plant Delivery Near the Himachal Hills",
    metaKeyword: "plants online pathankot, buy plants pathankot, indoor plants pathankot, plant delivery pathankot punjab, marigold pathankot, tulsi pathankot, online nursery pathankot himachal gateway army cantonment",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Pathankot — Punjab's Gateway to the Hills Gets Doorstep Greens</h2>
<p>Pathankot is the northernmost city of Punjab — the gateway city for travel to Himachal Pradesh (Dharamsala, McLeod Ganj, Dalhousie, Chamba) and Jammu & Kashmir (Jammu, Katra for Vaishno Devi). The city has a major military presence (Pathankot Air Force Base — the site of the 2016 Pathankot terror attack — is one of India's most strategic airbases, and large Army cantonments are present in the area). The Ranjit Sagar Dam (Thein Dam on the Ravi river, 25 km from Pathankot) is one of Punjab's major hydroelectric projects and creates a large reservoir that has become a regional ecotourism destination. Pathankot district's foothills setting (Shivalik Hills) gives it more greenery than the Malwa plains below.</p>
<p>Pathankot's climate is sub-Himalayan foothills: hot summers (40°C), excellent monsoon (1,100 mm), and cold winters (4–20°C). Rose, marigold, tulsi, and all hill-climate plants thrive. RedHeart delivers across Pathankot, Chakki Bank, Dhar Kalan, Mirthal, and Gurdaspur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Pathankot</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Foothills winter, army quarter garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lohri, Diwali, Navratri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Punjab home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, Army cantonment gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pathankot foothills humidity thrives</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Army transfer gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Pathankot</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Pathankot City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mamun Cantonment, Chakki Bank, Dhar Kalan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Gurdaspur / Mirthal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gurdaspur, Mirthal, Sujanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most meaningful for Pathankot's large Army cantonment community?", answer: "Lucky bamboo in a wooden or ceramic gift box is the most practical and universally appropriate Army gifting plant — it survives transfers (in a water vase, easily packed), is auspicious for new postings, and requires no garden or balcony. Money plant in a hanging planter is ideal for rented Army quarter balconies. Rose planted in October produces beautiful blooms in Pathankot's cold winter evenings." },
      { question: "Is same-day plant delivery available in Pathankot?", answer: "Yes. Same-day delivery across Pathankot including Mamun Cantonment, Chakki Bank, and Dhar Kalan. Order before 3 PM. Gurdaspur and Mirthal are within 3–5 hours." },
      { question: "What plants grow best in Pathankot's sub-Himalayan foothills climate?", answer: "The 1,100 mm monsoon and cold-but-not-harsh winters make rose, marigold, jasmine, tulsi, money plant, and ferns all thrive in Pathankot. The Shivalik Hills' proximity moderates the extreme Punjab heat, giving Pathankot a gentler growing environment than Ludhiana or Amritsar." },
      { question: "What plant is best for Pathankot travelers going to Dalhousie or Dharamsala?", answer: "For those heading to the hills, carrying a potted plant as a gift is not practical — but ordering a peace lily or money plant for delivery to a Dharamsala homestay or Dalhousie resort as a welcome gift is an option via RedHeart's same-day delivery in those hill stations. For Pathankot homes, rose (winter) and jasmine (summer) are the most rewarding local plants." },
      { question: "Do you deliver plants to Gurdaspur from Pathankot?", answer: "Yes. Gurdaspur (40 km from Pathankot, the district where Pathankot was recently carved as a separate district, home to the Beas river and the Guru Nanak Dev University Gurdaspur Campus) is within our 3–5 hour same-day delivery zone." }
    ]
  },

  "haridwar": {
    cityName: "Haridwar",
    metaTitle: "Buy Plants Online in Haridwar | Ganga Sacred City Uttarakhand Plants | RedHeart",
    metaDescription: "Order plants online in Haridwar. Marigold, tulsi & sacred plants. Same-day delivery. Starting ₹299. India's sacred Ganga gateway city gets fresh plant delivery.",
    h1: "Buy Plants Online in Haridwar — Same-Day Plant Delivery at the Gateway of the Gods",
    metaKeyword: "plants online haridwar, buy plants haridwar, indoor plants haridwar, plant delivery haridwar uttarakhand, marigold haridwar, tulsi haridwar, online nursery haridwar ganga har ki pauri kumbh",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Haridwar — Gateway of the Gods Gets Doorstep Greens</h2>
<p>Haridwar (literally "Gateway to Hari/Vishnu" or "Gateway to Shiva") is one of the seven sacred cities (Sapta Puri) of Hinduism — the point where the Ganges river descends from the Himalayas into the Gangetic plains, making Har ki Pauri ("Steps of Shiva") one of the holiest bathing ghats in India. The Kumbh Mela held in Haridwar every 12 years (and Ardh Kumbh every 6 years) is the world's largest religious gathering — tens of millions of pilgrims attending a single Kumbh Mela. The Chandi Devi Temple (Shivalik Hills) and Mansa Devi Temple are reached by ropeway and draw year-round pilgrims. Patanjali Yogpeeth (Baba Ramdev's Ayurvedic and wellness empire) and BHEL's heavy engineering plant are major modern institutions headquartered here.</p>
<p>Haridwar's climate is sub-Himalayan foothill: hot summers (40°C), excellent monsoon (1,100 mm), and cold winters (4–20°C). Tulsi, marigold, rose, and sacred plants are most popular. RedHeart delivers across Haridwar, Rishikesh, Roorkee, Laksar, and Jwalapur with same-day service for orders before 3 PM.</p>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sacred Plants for Haridwar's Devotional Community</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sacred Use</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Most sacred plant, Ganga worship</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Har ki Pauri aarti, Kumbh Mela</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple rose petal offerings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shiva temple offerings, ashram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rudraksha plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shiva devotion, Haridwar identity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ashram indoor, pilgrimage hotel</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>
<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Haridwar</h3>
<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead><tr style="background:#f3f4f6;"><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Areas</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th><th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Haridwar City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Har ki Pauri, Jwalapur, SIDCUL</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rishikesh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rishikesh ashram belt, Tapovan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Roorkee</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IIT Roorkee campus area, Roorkee city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What is the most sacred plant for Haridwar's Ganga worship tradition?", answer: "Tulsi is universally the most sacred plant for Haridwar's devotional community — tulsi leaves and flowers floated on the Ganga at Har ki Pauri during the evening Ganga Aarti create the most sacred act of devotion. Growing your own tulsi ensures fresh, sacred leaves available for daily Ganga worship. Marigold garlands are the other essential botanical element of Haridwar's aarti ceremony — the sight of thousands of marigold diyas floating on the Ganga at dusk is one of India's most extraordinary visual experiences." },
      { question: "Is same-day plant delivery available in Haridwar and Rishikesh?", answer: "Yes. Same-day delivery across Haridwar (Har ki Pauri, Jwalapur, SIDCUL) and Rishikesh (ashram belt, Tapovan area). Order before 3 PM. Roorkee is within 3–5 hours." },
      { question: "What plant is most appropriate for yoga ashrams and wellness centres in Haridwar-Rishikesh?", answer: "Tulsi (sacred and Ayurvedic), peace lily (purifying, beautiful white bloom), money plant (auspicious, no-soil option), and areca palm (creating the serene ashram lobby atmosphere) are the four most appropriate plants for Haridwar-Rishikesh's yoga and wellness ashrams. Patanjali-brand product users will appreciate growing tulsi and neem at home as Ayurvedic kitchen medicinal plants." },
      { question: "What plants grow best in Haridwar's sub-Himalayan climate?", answer: "The 1,100 mm monsoon, Ganga river humidity, and cold winters make rose (spectacular November–February blooms in Haridwar's cold nights), marigold, tulsi, jasmine, and all sub-Himalayan plants thrive. Haridwar's climate is one of the best in north India for gardening." },
      { question: "Do you deliver plants to Rishikesh and IIT Roorkee from Haridwar?", answer: "Yes. Rishikesh (25 km from Haridwar — the 'Yoga Capital of the World' and a major international wellness tourism destination) is within our core 2–4 hour same-day delivery zone. IIT Roorkee (50 km from Haridwar, India's oldest technical institution, established 1847) and Roorkee city are within 3–5 hours." }
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
