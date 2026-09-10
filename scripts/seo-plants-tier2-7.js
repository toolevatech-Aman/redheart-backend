// Plants Tier 2 Batch 7 — 8 cities
// Panipat, Saharanpur, Belagavi, Kurnool, Rajahmundry, Kakinada, Shimla, Agartala

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "panipat": {
    cityName: "Panipat",
    metaTitle: "Buy Plants Online in Panipat | Historic Battleground City Plants | RedHeart",
    metaDescription: "Order plants online in Panipat. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Panipat, city of decisive battles, gets plant delivery.",
    h1: "Buy Plants Online in Panipat — Same-Day Plant Delivery in the City of Decisive Battles",
    metaKeyword: "plants online panipat, buy plants panipat, indoor plants panipat, plant delivery panipat haryana, marigold panipat, tulsi panipat, online nursery panipat textile city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Panipat — Where Indian History Was Decided, Plants Flourish</h2>

<p>Panipat is one of the most historically significant cities in India — three of Indian history's most decisive battles were fought here, reshaping the subcontinent's political order each time (First Battle of Panipat, 1526: Babur defeated Ibrahim Lodi to found the Mughal Empire; Second Battle of Panipat, 1556: Akbar's regent Bairam Khan defeated Hemu; Third Battle of Panipat, 1761: Ahmad Shah Durrani defeated the Maratha Confederacy). Today, Panipat is known as the "Cast-Off Capital of India" — its textile recycling industry processes enormous quantities of discarded clothing from across the world, feeding a major industrial economy. The city is also a significant textile manufacturing hub and part of the Delhi NCR economic corridor.</p>

<p>Panipat's climate is Haryana: very hot summers (43°C), moderate monsoon (750 mm), and cold winters (4–18°C). Indoor plants, marigold, tulsi, and rose are the most popular plant categories. Diwali is the biggest plant occasion in Panipat's Haryanvi Hindu community. RedHeart delivers across Panipat, Karnal, Kurukshetra, and Sonipat with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Panipat Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Haryana Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, textile factory offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, textile businesses</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, NCR corridor offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Haryana heat, skincare</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Panipat's Textile Industry and Plant Culture</h3>

<p>Panipat's textile recycling industry makes the city unusually aware of sustainability and material cycles — and plants fit naturally into this consciousness. The city's growing middle class of textile business owners and NCR-corridor workers have embraced indoor plants for both aesthetic and environmental reasons. Diwali is the dominant occasion for plant gifting — marigold in full bloom decorating the courtyard, tulsi in a new maadam, and lucky bamboo in a gift box are the most popular choices. Panipat's proximity to Kurukshetra (the sacred site of the Mahabharata war, 40 km away) gives the city an additional layer of religious significance.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Panipat</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Panipat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Model Town, Panipat City, GT Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Samalkha / Israna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Samalkha, Israna, Bapoli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Karnal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Karnal city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sonipat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sonipat city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Panipat's Haryana climate?", answer: "Marigold, rose, tulsi, money plant, snake plant, and aloe vera all do well in Panipat. The cool October–March season is excellent for outdoor flowering plants. Rose planted in October produces spectacular December–February blooms. The monsoon (750 mm) is adequate but summer requires daily watering for outdoor plants in Panipat's hot, dry conditions." },
      { question: "Is same-day plant delivery available in Panipat?", answer: "Yes. Same-day delivery is available across Panipat including Model Town, GT Road, and the old city. Order before 3 PM. We also deliver to Karnal within 3–5 hours and Sonipat within 4–6 hours." },
      { question: "What plant is best for a Diwali gift in Panipat?", answer: "Marigold in full golden bloom is the most festive Diwali plant for any Panipat home. Money plant in a terracotta pot is auspicious and universally appreciated. Lucky bamboo in a gift box is the standard textile business Diwali gift in Panipat's commercial community. Rose plant gifted in October is a thoughtful, seasonally timed Diwali gift that blooms beautifully through the winter." },
      { question: "What plants do textile business owners in Panipat prefer?", answer: "Panipat's textile recycling and manufacturing business owners tend to prefer practical, low-maintenance indoor plants. Snake plant in a large floor planter is popular for showrooms and offices. Areca palm creates a premium reception area impression. Lucky bamboo in a 9-stalk arrangement is standard for inter-business Diwali gifting. Peace lily adds elegance to office conference rooms without demanding attention." },
      { question: "Do you deliver plants to Karnal from Panipat?", answer: "Yes. Karnal (45 km from Panipat) is within our same-day delivery zone with 3–5 hour delivery. Karnal is an important Haryana agricultural and commercial hub known for dairy industry and agriculture — its growing middle class has increasing demand for indoor and outdoor plants. Same-day delivery for Karnal orders placed before noon." }
    ]
  },

  "saharanpur": {
    cityName: "Saharanpur",
    metaTitle: "Buy Plants Online in Saharanpur | Wood Carving City UP Plants | RedHeart",
    metaDescription: "Order plants online in Saharanpur. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Saharanpur's wood carving city gets plant delivery.",
    h1: "Buy Plants Online in Saharanpur — Same-Day Plant Delivery in the Wood Carving Capital of India",
    metaKeyword: "plants online saharanpur, buy plants saharanpur, indoor plants saharanpur, plant delivery saharanpur uttar pradesh, marigold saharanpur, tulsi saharanpur, online nursery saharanpur wood carving",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Saharanpur — The Wood Carving Capital Gets Doorstep Greens</h2>

<p>Saharanpur is one of Uttar Pradesh's northernmost cities — at the foothills of the Shivalik range, close to the Uttarakhand border, and historically significant as a major city on the ancient Saharanpur-Yamuna Doab corridor. The city is celebrated as the "Wood Carving Capital of India" — Saharanpur's intricate woodwork, particularly its carved shisham (rosewood) and sheesham furniture, is famous across India and exported internationally. The botanical heritage is unusually significant here: the Saharanpur Botanical Garden, established by the British East India Company in 1750 (one of the oldest botanical gardens in India), conducted pioneering research into Himalayan flora and maintains a remarkable living collection of trees and plants. Nearby Deoband (30 km) is home to the Darul Uloom Deoband — one of the world's most influential Islamic seminary institutions.</p>

<p>Saharanpur's climate benefits from Shivalik proximity: hot but less extreme summers (40°C), a very good monsoon (1,100 mm), and cool winters (4–14°C). The rich soil and good rainfall create excellent conditions for most plants. Saharanpur has a large Muslim population (Deoband influence) alongside its Hindu community — marigold, tulsi, rose, and fragrant plants like mogra and chameli are popular across communities. RedHeart delivers across Saharanpur, Muzaffarnagar, Haridwar, and Roorkee with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Saharanpur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Community Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, Islamic garden tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrant, popular across both communities</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Sep</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Furniture business gifting, Diwali and Eid</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Wood workshop offices, showrooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Botanical Garden adjacent</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Saharanpur Botanical Garden — A Living Plant Heritage</h3>

<p>The Saharanpur Botanical Garden (Company Bagh) — established in 1750, making it one of India's oldest scientific botanical gardens — is a living testament to the city's deep plant heritage. It played a critical role in introducing crops from other continents to Indian agriculture (cinchona for quinine, tea, and many others were researched here before being introduced to the subcontinent's hills and plains). Saharanpur's population, living adjacent to this remarkable horticultural heritage, has an unusually sophisticated awareness of plant diversity — and the city's wood carving tradition, which uses sheesham, walnut, and teak as raw materials, gives its craftsmen an intimate knowledge of trees and plant growth.</p>

<p>The combination of Saharanpur's significant Muslim population (with the Deoband connection), a strong Hindu community, and a cool-climate Shivalik setting makes the city's plant culture remarkably diverse. Rose, mogra, and chameli are loved across both communities for their fragrance. The Saharanpur–Haridwar corridor is one of north India's most spiritually significant travel routes.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Saharanpur</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Saharanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Company Bagh, Dhampur Road, Ambala Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Deoband</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Deoband town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Muzaffarnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Muzaffarnagar city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Haridwar / Roorkee</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Haridwar, Roorkee towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plants thrive in Saharanpur's Shivalik foothill climate?", answer: "Saharanpur's 1,100 mm monsoon and cooler Shivalik setting creates excellent conditions for a wide range of plants. Rose, marigold, mogra, tulsi, money plant, peace lily, and snake plant all do very well. October–March is the prime gardening season — rose produces exceptional blooms in Saharanpur's pleasant cool winters. The good monsoon recharges soil richly for outdoor planting." },
      { question: "Is same-day plant delivery available in Saharanpur?", answer: "Yes. Same-day delivery is available across Saharanpur including the Company Bagh area, Dhampur Road, and Ambala Road. Order before 3 PM. We also deliver to Deoband within 3–5 hours and Muzaffarnagar within 3–5 hours." },
      { question: "Which plant is best for gifting to a wood carving artisan in Saharanpur?", answer: "A money plant in a wooden planter (complementing Saharanpur's craft identity) is a uniquely apt gift for the city's woodworking community. Lucky bamboo in a carved wooden bowl makes a beautiful, locally resonant presentation. Peace lily in a simple ceramic pot is elegant for showroom and workshop offices. Rose plant gifted in October is a timeless, fragrant gift for any Saharanpur home." },
      { question: "Which plants are popular for Eid gifting in Saharanpur?", answer: "Mogra (jasmine) for its fragrant white blooms associated with Islamic garden aesthetics, rose plant (the gulab is central to Islamic poetry and spiritual tradition), and lucky bamboo in a decorative planter are the most popular Eid plant gifts in Saharanpur's Muslim community. A money plant in a decorative pot is universally appreciated as a green, living Eid gift." },
      { question: "Do you deliver plants near the Saharanpur Botanical Garden?", answer: "Yes. We deliver across all Saharanpur city areas including the Company Bagh (Botanical Garden) vicinity. The Botanical Garden area has several residential localities with plant-enthusiast households who value unusual indoor plants. We can also deliver rare or specific plant varieties — contact us for special plant orders. Same-day delivery across central Saharanpur." }
    ]
  },

  "belagavi": {
    cityName: "Belagavi",
    metaTitle: "Buy Plants Online in Belagavi | Belgaum Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Belagavi (Belgaum). Indoor plants & gifting combos. Same-day delivery. Starting ₹299. North Karnataka border city gets plant delivery.",
    h1: "Buy Plants Online in Belagavi — Same-Day Plant Delivery in North Karnataka's Gateway City",
    metaKeyword: "plants online belagavi, buy plants belagavi belgaum, indoor plants belagavi, plant delivery belagavi karnataka, marigold belagavi, tulsi belagavi, online nursery belagavi belgaum",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Belagavi — North Karnataka's Strategic Border City Gets Doorstep Greens</h2>

<p>Belagavi (formerly known as Belgaum) is a significant city at the intersection of Karnataka, Maharashtra, and Goa — a strategic crossroads that has shaped the city's multilingual, multi-cultural character. The city is home to a large Marathi-speaking population alongside Kannada and Urdu speakers, making it politically contentious (Maharashtra has long claimed Belagavi and surrounding Marathi-majority areas). Belagavi is Karnataka's second most industrially significant city after Bangalore, with defence manufacturing (Hindustan Aeronautics Limited's helicopter division), sugar industry, and emerging IT/technology sector development. The 2005 winter session of the Karnataka Legislature was historically held in Belagavi — the first time outside Bangalore — in a statement about decentralisation.</p>

<p>Belagavi's climate is pleasant — at 747 m elevation in the northern Deccan, it has milder summers than the southern plains (max 32–34°C), a good monsoon (1,000 mm), and cool winters (10–20°C). The pleasant climate supports excellent plant growth year-round. Jasmine, marigold, tulsi, and indoor tropical plants thrive in Belagavi's conditions. RedHeart delivers across Belagavi, Hubli (separate), Dharwad, and Gokak with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Belagavi Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Regional Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mallige/Chameli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily puja garlands, Karnataka tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganesh Chaturthi, Navratri, Ugadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">HAL and defence offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, KLE University</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, HAL companies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cool-season garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Belagavi's Multi-Cultural Festival Calendar and Plant Traditions</h3>

<p>Belagavi's cultural diversity — Kannada, Marathi, and Urdu-speaking communities — creates a rich multi-festival calendar. Ganesh Chaturthi (celebrated enthusiastically by the Marathi community), Navratri and Dasara (Karnataka tradition), Ugadi (Kannada New Year), and Eid (significant Muslim community) all drive seasonal plant demand at different times of year. Marigold is universal across all these occasions. Jasmine (mallige) is the daily puja flower for Belagavi's Kannada households, while mogra/chameli is preferred in the Urdu-speaking community. The Marathi community brings the Maharashtra tradition of tulsi maadam and Ganesh Chaturthi decoration.</p>

<p>KLE University (one of Karnataka's most important private university complexes, based in Belagavi) and its medical, dental, and engineering colleges create a large student and faculty population with demand for desk plants and gifting. HAL (Hindustan Aeronautics Limited) Belagavi produces helicopters and has a large defence workforce community — a significant market for corporate plant gifting.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Belagavi</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Belagavi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tilakwadi, Camp area, KLE campus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">HAL / Cantt</td><td style="border:1px solid #d1d5db;padding:8px 12px;">HAL township, Cantt area, Shahapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Gokak / Nippani</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gokak, Nippani towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Chikodi / Athani</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chikodi, Athani towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Belagavi's mild Deccan plateau climate?", answer: "Belagavi's 747 m elevation gives it a pleasant, cooler climate than most Deccan cities — perfect for jasmine, rose, marigold, tulsi, money plant, and peace lily. Rose blooms exceptionally well in Belagavi's mild, cool winters. Jasmine (mallige) grows vigorously in the warm-but-not-extreme temperatures. The 1,000 mm monsoon provides adequate annual rainfall for most outdoor plants." },
      { question: "Is same-day plant delivery available in Belagavi?", answer: "Yes. Same-day delivery is available across Belagavi including Tilakwadi, Camp area, KLE campus, and HAL township. Order before 3 PM. We also deliver to Gokak and Nippani within 3–5 hours." },
      { question: "What plant is best for Ganesh Chaturthi gifting in Belagavi's Marathi community?", answer: "Marigold in full golden bloom for pandal decoration is the most festive Ganesh Chaturthi plant in Belagavi's Marathi community. Tulsi is essential for the festival's puja rituals. For a lasting gift, a money plant in a new terracotta pot with a Ganesh motif is auspicious. Jasmine plant produces fragrant white flowers perfect for the festival garlands." },
      { question: "What plants are best for KLE University or HAL employees in Belagavi?", answer: "Peace lily in a ceramic planter is the standard gifting choice for academic and professional occasions (promotions, transfers, retirements) at KLE University and HAL. Lucky bamboo in a 9-stalk arrangement is appropriate for inter-departmental and business gifting. Snake plant in a floor planter is excellent for office reception areas. Areca palm creates a premium ambience in larger offices and faculty rooms." },
      { question: "Do you deliver plants to Dharwad and Hubli from Belagavi?", answer: "Yes. Hubli-Dharwad (the twin cities, Karnataka's largest urban area after Bangalore-Mysore) is within our delivery network from Belagavi. We deliver across north Karnataka comprehensively. Same-day delivery to Hubli for orders placed before noon. Dharwad is served simultaneously as it is the administrative centre of the twin-city urban area." }
    ]
  },

  "kurnool": {
    cityName: "Kurnool",
    metaTitle: "Buy Plants Online in Kurnool | Gateway of Andhra Plants | RedHeart",
    metaDescription: "Order plants online in Kurnool. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Andhra's gateway city gets fresh plant delivery.",
    h1: "Buy Plants Online in Kurnool — Same-Day Plant Delivery in the Former Capital of Andhra",
    metaKeyword: "plants online kurnool, buy plants kurnool, indoor plants kurnool, plant delivery kurnool andhra pradesh, marigold kurnool, tulsi kurnool, online nursery kurnool srisailam",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kurnool — Gateway to the Deccan Gets Doorstep Greens</h2>

<p>Kurnool is one of Andhra Pradesh's most historically significant cities — the first capital of Andhra State (1953–1956) before the capital was shifted to Hyderabad, giving it a unique post-independence administrative identity. The Tungabhadra river (whose dam project was a landmark infrastructure achievement) and the Krishna river corridor define the Kurnool region's agricultural geography. The city is also the gateway to the Nallamala forest and the Srisailam temple complex — home to the Mallikarjuna Jyotirlinga (one of the 12 Jyotirlingas of Shiva), which is one of Andhra Pradesh's most significant pilgrimage destinations and attracts millions of devotees annually along the scenic Kurnool–Srisailam route.</p>

<p>Kurnool's climate is hot Rayalaseema Andhra: very hot summers (44°C), moderate monsoon (600 mm, one of Andhra's drier districts), and warm winters (16–26°C). Drought-adapted plants perform well in Kurnool. Tulsi, marigold, jasmine, aloe vera, and heat-hardy flowering plants are the most popular choices. RedHeart delivers across Kurnool, Nandyal, Adoni, and Ongole with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Kurnool Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Regional Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Telugu Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Srisailam puja, Dasara, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, Shiva temple offering</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rayalaseema drought-adapted</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles Kurnool extreme heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Kurnool business</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low (water vase)</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, former capital offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low-moderate</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Srisailam, the Nallamala, and Sacred Plant Culture in Kurnool</h3>

<p>The Srisailam corridor from Kurnool — winding through the extraordinary Nallamala forest on the banks of the Krishna gorge — is one of south India's most sacred pilgrimage routes. The Mallikarjuna Jyotirlinga and Bhramaramba Shakti Peetha at Srisailam attract millions of devotees from across Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu. The pilgrimage culture shapes Kurnool's plant consciousness — bel (bilva) for Shiva puja, jasmine for Mallikarjuna temple offerings, and tulsi for home worship are deeply ingrained practices. The word "Mallikarjuna" itself connects to malli (jasmine) — Lord Shiva as the jasmine-lord — giving jasmine particular sacred significance in the Kurnool region.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kurnool</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Kurnool</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fort area, Old Town, Budhavara Pete</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">New Town / Adoni Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nandyal Road, Adoni Road, Bellary Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Nandyal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nandyal town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Adoni</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Adoni town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Kurnool's intense Rayalaseema heat?", answer: "Aloe vera (very low water, handles 44°C), snake plant (indoor AC), money plant (indoor water vase), cactus and succulent collections, tulsi (with daily morning water in deep shade during peak summer), and bougainvillea (drought-hardy once established) all handle Kurnool's extreme heat. Deep watering every 3–4 days is better than daily light watering for Kurnool's outdoor plants." },
      { question: "Is same-day plant delivery available in Kurnool?", answer: "Yes. Same-day delivery is available across Kurnool including Fort area, Old Town, Budhavara Pete, Nandyal Road, and Bellary Road. Order before 3 PM. We also deliver to Nandyal within 3–5 hours." },
      { question: "What plant is most sacred for Srisailam pilgrims from Kurnool?", answer: "Jasmine (malli) holds the highest sacred significance in the Kurnool–Srisailam corridor — 'Mallikarjuna' means Shiva who is like jasmine. Jasmine flowers offered at Mallikarjuna Jyotirlinga are considered supremely sacred. Bel (bilva patra) is essential for Shiva puja — every Shiva devotee in Kurnool grows or procures bilva leaves for worship. Tulsi is universal in every home's maadam." },
      { question: "What plant is best for Ugadi or Dasara gifting in Kurnool?", answer: "Marigold in full bloom is the most festive Telugu Dasara and Ugadi plant gift. Jasmine plant blooms fragrantly and is culturally resonant. For a lasting gift, money plant in a terracotta planter or lucky bamboo in a glass vase is appropriate for any Kurnool home. Corporate Ugadi gifts among Kurnool's businesses typically favour lucky bamboo or peace lily in ceramic planters." },
      { question: "Do you deliver plants to Nandyal from Kurnool?", answer: "Yes. Nandyal (now a separate district headquarters, 80 km from Kurnool) is within our delivery network with 3–5 hour same-day service for orders placed before noon. Nandyal is an important commercial centre in the Kurnool region with growing plant demand. We serve the full Rayalaseema–Kurnool belt from our network." }
    ]
  },

  "rajahmundry": {
    cityName: "Rajahmundry",
    metaTitle: "Buy Plants Online in Rajahmundry | Godavari City Andhra Plants | RedHeart",
    metaDescription: "Order plants online in Rajahmundry. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Godavari delta's cultural city gets plant delivery.",
    h1: "Buy Plants Online in Rajahmundry — Same-Day Plant Delivery in the Cultural Capital of Andhra",
    metaKeyword: "plants online rajahmundry, buy plants rajahmundry, indoor plants rajahmundry, plant delivery rajahmundry andhra pradesh, marigold rajahmundry, jasmine rajahmundry, online nursery rajahmundry godavari",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Rajahmundry — The Cradle of Telugu Culture Gets Doorstep Greens</h2>

<p>Rajahmundry is celebrated as the "Cradle of Telugu Culture" — the birthplace of Telugu literature through the great poet Nannaya (11th century, who produced the first Telugu literary work, the Mahabharata in Telugu) and the cultural capital of the Godavari delta. The city sits at the most sacred point of the Godavari river in Andhra Pradesh — the site of Pushkaram (the 12-yearly sacred bath festival, one of the largest pilgrimage gatherings in south India), where the Godavari is at its widest, most sacred, and most magnificent. The historic Rajahmundry railway bridge over the Godavari (the longest railway bridge in India when built in 1900 by British engineers) marks the city's connection to modern infrastructure.</p>

<p>Rajahmundry's climate is lush Godavari delta: hot summers (40°C), an excellent double monsoon (1,200 mm), and mild winters (18–26°C). The delta's fertility extends to extraordinary plant-growing conditions. Jasmine, marigold, hibiscus, tulsi, and tropical indoor plants all thrive in the Godavari delta's warmth and humidity. RedHeart delivers across Rajahmundry, Kakinada, Peddapuram, and Bhimavaram with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Rajahmundry Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Godavari Culture Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli/Bela)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, Godavari Pushkara, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Telugu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dasara, Pushkaram, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, riverfront garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Godavari delta humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Godavari banks offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ugadi, corporate gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Pushkaram and the Godavari's Sacred Plant Traditions</h3>

<p>The Godavari Pushkaram — held every 12 years when Jupiter enters the sign of Leo — is the most spectacular pilgrimage event in Andhra Pradesh, drawing millions of devotees to bathe in the sacred Godavari at Rajahmundry. The festival is associated with flowers, sacred plants, and offerings at the river ghats. Jasmine garlands are offered into the Godavari, tulsi leaves are floated as offerings, and marigold flowers decorate the ghats. Growing your own jasmine and tulsi for Pushkaram participation has deep religious significance for Rajahmundry families.</p>

<p>Rajahmundry's rich Telugu cultural heritage — as the city that produced Telugu's first literary genius, Nannaya, and where the Telugu literary tradition was born — gives it an intellectual and cultured identity that values aesthetics, including the aesthetics of plants and gardens. The delta's lush, tropical vegetation creates an atmosphere where plants are simply part of the natural abundance of Godavari life.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Rajahmundry</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Rajahmundry</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Godavari Ghat, Innespeta, Morampudi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kakinada Road area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kakinada Road, Rajanagaram, Biccavolu</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kakinada</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kakinada city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peddapuram / Amalapuram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Peddapuram, Amalapuram towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant has the most significance for Godavari Pushkaram in Rajahmundry?", answer: "Jasmine (malli) is the most sacred Pushkaram plant in Rajahmundry — jasmine garlands are offered into the Godavari, and the river ghats during Pushkaram are fragrant with jasmine. Tulsi leaves are floated as Godavari offerings. Marigold decorates the ghats and puja mandaps. Growing your own jasmine and tulsi plants for Pushkaram season participation is deeply meaningful for Rajahmundry families." },
      { question: "Is same-day plant delivery available in Rajahmundry?", answer: "Yes. Same-day delivery is available across Rajahmundry including Godavari Ghat area, Innespeta, and Morampudi. Order before 3 PM. We also deliver to Kakinada within 3–5 hours." },
      { question: "Which plants grow best in Rajahmundry's fertile Godavari delta climate?", answer: "The Godavari delta's 1,200 mm double monsoon and warm tropical climate create excellent conditions for a vast range of plants. Jasmine, hibiscus, tulsi, marigold, anthurium, money plant, peace lily, and areca palm all grow with exceptional vigour. Anthurium needs virtually no care in Rajahmundry's natural humidity. The delta's fertile soil supports outdoor plants year-round." },
      { question: "What is the best plant gift for a Rajahmundry family for Ugadi?", answer: "Jasmine plant (malli) blooming in the warm April season of Ugadi is the most culturally resonant Ugadi gift. Money plant in a new ceramic pot is auspicious for the new year. Lucky bamboo in a 9-stalk arrangement is popular for corporate Ugadi gifting in Rajahmundry's business community. Anthurium in a colourful ceramic planter makes an impressive, lasting festival gift." },
      { question: "Do you deliver plants to Kakinada from Rajahmundry?", answer: "Yes. Kakinada (the major port and industrial city of East Godavari district) is 60 km from Rajahmundry and within our 3–5 hour same-day delivery zone. Kakinada also has its own dedicated seeded page on RedHeart. Same-day delivery for Kakinada orders placed before noon from our Rajahmundry network." }
    ]
  },

  "kakinada": {
    cityName: "Kakinada",
    metaTitle: "Buy Plants Online in Kakinada | Port City Andhra Plants | RedHeart",
    metaDescription: "Order plants online in Kakinada. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. East Godavari's port city gets plant delivery.",
    h1: "Buy Plants Online in Kakinada — Same-Day Plant Delivery in East Godavari's Port City",
    metaKeyword: "plants online kakinada, buy plants kakinada, indoor plants kakinada, plant delivery kakinada andhra pradesh, marigold kakinada, jasmine kakinada, online nursery kakinada east godavari",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kakinada — East Godavari's Offshore Capital Gets Doorstep Greens</h2>

<p>Kakinada is East Godavari district's commercial capital and Andhra Pradesh's second most important port city after Visakhapatnam. The city has emerged as the "Petroleum Capital" of Andhra Pradesh — ONGC's offshore operations in the Bay of Bengal's Krishna-Godavari (KG) Basin are headquartered near Kakinada, making the city home to a large petroleum industry workforce of engineers, executives, and technicians. The Kakinada Port handles significant cargo, and the city's industrial character is defined by ONGC, HPCL, and Reliance's offshore energy sector. The fertile coastal delta setting, the Coringa Wildlife Sanctuary (one of India's second-largest mangrove forests), and the beach tourism potential give Kakinada a diverse economic base beyond the petroleum sector.</p>

<p>Kakinada's climate is humid coastal Andhra: hot summers (38–40°C), excellent northeast monsoon plus southwest (1,300 mm total), and mild winters (18–26°C). The coastal humidity creates excellent tropical plant conditions. Jasmine, hibiscus, tulsi, money plant, and anthurium thrive in Kakinada. RedHeart delivers across Kakinada, Peddapuram, Amalapuram, and Rajahmundry with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Kakinada Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">ONGC / Coastal Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, Telugu puja tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Telugu Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in salt-air coastal humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, ONGC office, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, petroleum companies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Coastal garden, salt-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">ONGC corporate gifting, Ugadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">ONGC offices, handles coastal conditions</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">ONGC Culture and Coastal Plant Life in Kakinada</h3>

<p>Kakinada's ONGC and petroleum industry workforce — engineers, geologists, offshore rig workers, and executives from across India — creates a cosmopolitan corporate community with strong indoor plant demand for offices, township homes, and corporate gifting. The ONGC township at Kakinada and the HPCL facilities maintain gardens and green spaces in the humid coastal setting. Peace lily and areca palm are the most popular corporate indoor plants for Kakinada's energy industry offices. Lucky bamboo and money plant are standard Ugadi and Diwali corporate gifts across the petroleum community.</p>

<p>The Coringa Wildlife Sanctuary's mangrove ecosystem, adjacent to Kakinada, creates a nature-aware population. The coastal salt air and humidity make outdoor plant selection important — hibiscus and bougainvillea handle salt spray well, while fragile plants should be kept sheltered. The sea breeze cools Kakinada's summers to more manageable levels than inland Andhra, making plant care more forgiving than comparable cities.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kakinada</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Kakinada</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Town centre, Jawaharlal Street, Bhanugudi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ONGC / Port area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">ONGC campus, Suryaraopet, port vicinity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peddapuram / Samarlakota</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Peddapuram, Samarlakota towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Amalapuram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Amalapuram, Ramachandrapuram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants handle Kakinada's salty coastal Andhra environment?", answer: "Hibiscus, bougainvillea, snake plant, and tulsi handle Kakinada's sea breeze and occasional salt spray well. Anthurium thrives in the coastal humidity without salt exposure (keep it sheltered from direct sea wind). Money plant, peace lily, and lucky bamboo are ideal indoor plants in Kakinada's AC homes and offices where the coastal conditions are fully managed." },
      { question: "Is same-day plant delivery available in Kakinada?", answer: "Yes. Same-day delivery is available across Kakinada including the town centre, ONGC campus, Bhanugudi, and Suryaraopet. Order before 3 PM. We also deliver to Peddapuram and Samarlakota within 3–5 hours." },
      { question: "What plant is best for gifting to an ONGC engineer in Kakinada?", answer: "Peace lily in a ceramic planter is elegant for ONGC professional gifting — it purifies indoor air and thrives in AC office environments. Lucky bamboo in a 9-stalk glass vase is the standard corporate gift across the petroleum industry. For a departing colleague, areca palm in a large decorative pot makes an impressive farewell gift for a Kakinada executive." },
      { question: "Which plants grow best in Kakinada's humid delta climate?", answer: "Anthurium is the standout choice for Kakinada — the East Godavari delta's year-round humidity and warmth is almost perfectly matched to anthurium's requirements. Jasmine, hibiscus, tulsi, money plant, and peace lily all grow vigorously. The 1,300 mm double monsoon provides abundant water for outdoor plants. Virtually any tropical plant does well in Kakinada's climate with minimal care." },
      { question: "Do you deliver plants to Peddapuram and Amalapuram from Kakinada?", answer: "Yes. Peddapuram (30 km from Kakinada) is within 3–5 hours with same-day service for orders placed before noon. Amalapuram (the administrative capital of West Godavari district, 65 km away) is accessible within 4–6 hours. We serve the full East and West Godavari delta belt from our Kakinada network." }
    ]
  },

  "shimla": {
    cityName: "Shimla",
    metaTitle: "Buy Plants Online in Shimla | Hill Station Himachal Plants | RedHeart",
    metaDescription: "Order plants online in Shimla. Seasonal flowers, indoor plants & gifting combos. Delivery available. Starting ₹299. Himachal Pradesh's capital gets plant delivery.",
    h1: "Buy Plants Online in Shimla — Plant Delivery in the Former Summer Capital of British India",
    metaKeyword: "plants online shimla, buy plants shimla, indoor plants shimla, plant delivery shimla himachal pradesh, rose shimla, rhododendron shimla, online nursery shimla hill station",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Shimla — India's Most Storied Hill Station Gets Doorstep Greens</h2>

<p>Shimla is India's most legendary hill station — the former summer capital of British India (1864–1947), perched at 2,206 metres in the lower Himalayas with extraordinary views of the Himalayan ranges. The Mall Road, Viceregal Lodge (now the Indian Institute of Advanced Study), the Christ Church (second oldest in north India), and the colonial-era buildings of Shimla's Ridge still speak to the city's remarkable role as the centre of the British Empire in India during the summer months, when the entire Viceroy's office moved here to escape the Delhi heat. Today Shimla is Himachal Pradesh's state capital and north India's most popular hill tourism destination, drawing visitors year-round for its Himalayan scenery, snow, and pleasant summer escape.</p>

<p>Shimla's climate is Himalayan cool-temperate: summers are genuinely pleasant (15–28°C), the monsoon (1,500 mm, July–September) brings heavy rainfall and lush green growth, and winters are cold with significant snowfall (December–February). The temperate climate supports an extraordinary range of plants including species impossible in the plains. Rhododendron, rose, dahlia, chrysanthemum, apple blossoms, pine, deodar, and many temperate plants thrive here. RedHeart delivers across Shimla, Solan, Mandi, and Kullu with same-day or next-day service as appropriate.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Shimla Homes and Gardens</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Shimla Best Season</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Spring and autumn bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shimla's climate is ideal for roses</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dahlia</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Nov, spectacular in hills</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Best hill flowering plant</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Chrysanthemum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Dec, rich Himalayan blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Shimla's cool fall</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Summer only (Apr–Oct in hills)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Keep indoors in winter</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor year-round</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Perfect for heated indoor spaces</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor year-round gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Popular for govt officer homes</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor year-round</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IAS/IIAS gifting</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali season, outdoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">October–November best</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Shimla's Temperate Plant Heritage and Colonial Garden Tradition</h3>

<p>Shimla's hill station history created one of India's most distinctive garden traditions — the colonial-era gardens of Viceregal Lodge, Annandale, and private hill estates established a horticultural aesthetic of rose beds, dahlia borders, and flowering terraces that is still reflected in Shimla's residential gardens today. The Himalayan Garden and Arboretum (Chharabra, near Shimla) maintains a world-class collection of Himalayan flora. Shimla's government residential areas (officer bungalows, secretariat staff quarters) continue the tradition of maintained gardens with roses, chrysanthemums, and dahlias.</p>

<p>Winter plant care in Shimla requires attention — temperatures drop to 0°C or below in January, and snow can damage tender plants. Tropical plants should be moved indoors. Hardy perennials, rose (dormant in winter, prune in February), and dahlia (lifted before frost, replanted in April) follow a Himalayan gardening calendar quite different from the plains. RedHeart provides Shimla-specific planting advice with each purchase.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Shimla</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Schedule</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Shimla</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mall Road, Ridge, Lakkar Bazaar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Same-day</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Order before 2 PM</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sanjauli / Dhalli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sanjauli, Dhalli, Chhota Shimla</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Same-day</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Order before 2 PM</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Solan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Solan city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Same or next-day</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Order before noon</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kasauli / Chail</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kasauli, Chail, Kandaghat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Next-day available</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Book in advance</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Shimla's cool Himalayan climate?", answer: "Rose is exceptional in Shimla — the cool nights produce the most fragrant, large-bloomed roses possible in India. Dahlia, chrysanthemum, and pansy are spectacular autumn hill plants. Money plant, peace lily, and lucky bamboo are perfect for indoor heated spaces year-round. Tulsi can be grown in summer (April–October) and brought indoors before the first frost in November." },
      { question: "How do I protect plants from Shimla's winter snow and cold?", answer: "Move all tropical plants indoors before November. Rose should be pruned hard in February and will regrow. Dahlia tubers should be lifted after the first autumn frost (October–November), stored dry, and replanted in April. Hardy perennials survive Shimla winters if mulched. During January–February snowfall, brush snow off branch-bearing plants to prevent breakage. Evergreen plants in pots should be kept near south-facing walls." },
      { question: "Is plant delivery available in Shimla?", answer: "Yes. We deliver across Shimla including Mall Road, Ridge, Lakkar Bazaar, Sanjauli, Dhalli, and Chhota Shimla with same-day service for orders before 2 PM. Solan is accessible same or next-day. Advance booking is recommended during Shimla's peak tourist season (May–June, October) as demand spikes significantly." },
      { question: "What plant is best for gifting to an IAS or Himachal Government officer in Shimla?", answer: "Peace lily in a ceramic planter is the most appropriate gift for senior government officials — it's elegant, low-maintenance, and suitable for an office setting. Lucky bamboo in a glass vase is the standard choice for administrative officer gifting across Himachal Pradesh's secretariat. Rose plant (gifted in spring for summer blooms) is a thoughtful seasonal gift for an officer's bungalow garden." },
      { question: "What is the best plant for Diwali decoration in Shimla?", answer: "Marigold in full golden bloom is perfect for Shimla's October–November Diwali season — the cool hill nights intensify the orange-gold of marigold blooms. Chrysanthemum in full autumn bloom adds hill character to Diwali decoration. For a lasting Diwali gift, money plant in a decorative planter suits both the occasion and Shimla's cool indoor setting where it thrives year-round." }
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
