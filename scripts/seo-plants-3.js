// Plants Batch 3 — 8 cities
// Alipore, Alipurduar, Almora, Aluva, Alwar, Ambala, Amritsar, Ayodhya

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "alipore": {
    cityName: "Alipore",
    metaTitle: "Buy Plants Online in Alipore | Indoor & Tropical Plants | RedHeart",
    metaDescription: "Order plants online in Alipore, Kolkata. Indoor plants, tropical foliage & gifting combos. Same-day delivery. Starting ₹299. Fresh with care guide.",
    h1: "Buy Plants Online in Alipore — Same-Day Plant Delivery in South Kolkata",
    metaKeyword: "plants online alipore, buy plants alipore kolkata, indoor plants alipore, plant delivery alipore, online nursery alipore south kolkata",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Alipore — Kolkata's Heritage Neighbourhood Gets Doorstep Green</h2>

<p>Alipore is one of Kolkata's most distinguished residential areas — home to the National Library (India's largest), the Alipore Zoo (one of India's oldest), the Alipore Meteorological Office, and some of the city's finest colonial-era bungalows and apartment complexes. The neighbourhood sits in South Kolkata, where tree-lined streets and heritage architecture blend with a quieter pace of life compared to central Kolkata. Residents here — a mix of long-established Bengali families, professionals, and embassy staff — have an appreciation for aesthetics and quality that extends naturally to plant choices for their homes and balconies.</p>

<p>Kolkata's climate is tropical — hot and humid, with temperatures reaching 40°C in May, and generous monsoon rains from June to September. This climate suits a vast range of tropical plants, and Alipore's relatively leafier environment (compared to north Kolkata) already provides natural shade. RedHeart delivers plants across Alipore, Bhowanipore, Tollygunge, and nearby areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Alipore Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Spot</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Light</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indirect</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shaded room, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Any indoor spot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, verandah</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indirect</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rubber Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room statement</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹549</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright indirect</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Alipore's Bengali Culture</h3>

<p>In Bengal, flowers and plants have always carried deep cultural meaning — from the marigold garlands at Durga Puja to the shiuli (night jasmine) flowers that signal autumn mornings. Plant gifting is natural here. During Durga Puja, Kali Puja, and Poila Baishakh (Bengali New Year), potted flowering plants and auspicious species like tulsi and money plant are widely exchanged. For Alipore's more cosmopolitan, aesthetics-conscious residents, a monstera or fiddle leaf fig in a statement pot is an increasingly popular housewarming or anniversary gift. Lucky bamboo and peace lily remain universally popular across all Kolkata demographics for their versatility and auspicious associations.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Kolkata's Climate and Plant Care for Alipore</h3>

<p>Kolkata's humidity rarely drops below 70% even in winter, which means tropical plants flourish here year-round. The challenge during monsoon (June–September) is the opposite of dry cities — overwatering is easy when the environment is already humid. Water indoor plants only when the top inch of soil feels dry. For balcony plants, be aware that Alipore's older buildings sometimes have narrow balconies — compact but statement plants like rubber plant or snake plant in tall pots work well. Anthurium and peace lily love Kolkata's natural humidity and will bloom freely without any extra effort.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Alipore</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Alipore / Bhowanipore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tollygunge / Ballygunge</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kalighat / Rashbehari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">New Alipore / Behala</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which indoor plants are best for Alipore's humid climate?", answer: "Anthurium, peace lily, monstera, and philodendron thrive in Kolkata's high humidity and are ideal for Alipore homes. They grow vigorously without any extra care in this climate. Money plant and lucky bamboo are universally easy and popular. Avoid succulents outdoors — the monsoon rains are too much for them." },
      { question: "Can I get same-day plant delivery in Alipore?", answer: "Yes. Same-day plant delivery is available across Alipore, Bhowanipore, Tollygunge, Ballygunge, and nearby south Kolkata areas. Order before 3 PM for same-day delivery. Midnight delivery is also available." },
      { question: "What plant is a good Durga Puja gift in Alipore?", answer: "Shiuli (Nyctanthes arbor-tristis) is culturally the most Bengali choice — it blooms in autumn during Durga Puja and carries deep emotional significance. A tulsi plant is sacred and always meaningful. For a more modern gift, a monstera or anthurium in a decorative ceramic pot is elegant and long-lasting." },
      { question: "Do you deliver to the National Library area and older bungalows in Alipore?", answer: "Yes. We deliver to all parts of Alipore including the National Library / Belvedere area, older residential bungalows, and apartment complexes. Our team knows Alipore's winding lanes. Please mention landmarks or gate numbers for large bungalow properties." },
      { question: "How do I care for my peace lily in Kolkata's summer heat?", answer: "Peace lily handles Kolkata's humid heat well but needs protection from direct afternoon sun. Keep it in a bright room with indirect light. Water when the top inch of soil dries out — roughly twice a week in summer, once a week in winter. Wipe the leaves monthly to remove dust. It will droop when thirsty — water it immediately and it recovers within an hour." }
    ]
  },

  "alipurduar": {
    cityName: "Alipurduar",
    metaTitle: "Buy Plants Online in Alipurduar | Tropical & Himalayan Plants | RedHeart",
    metaDescription: "Order plants online in Alipurduar. Tropical plants, ferns, indoor greens for North Bengal's gateway to Bhutan. Same-day delivery. Starting ₹299.",
    h1: "Buy Plants Online in Alipurduar — Plants for North Bengal's Tea Garden Country",
    metaKeyword: "plants online alipurduar, buy plants alipurduar, indoor plants alipurduar, plant delivery alipurduar west bengal, tropical plants alipurduar north bengal",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plant Delivery in Alipurduar — North Bengal's Gateway to Bhutan Gets Doorstep Greens</h2>

<p>Alipurduar is North Bengal at its most diverse — tea gardens stretching to the horizon, the Buxa Tiger Reserve on one side and the Bhutan border on the other, and the Jaldapara Wildlife Sanctuary that shelters the greater one-horned rhinoceros. The district connects Bengal's plains with the Eastern Himalayan foothills, giving it an extraordinary range of vegetation — everything from tropical riverine forest along the Torsa and Raidak to subtropical hill forest near the Bhutan border. In a landscape this naturally rich, bringing plants home feels like an extension of the world outside.</p>

<p>Alipurduar's climate is humid subtropical — warm (32°C peak) and very wet, with annual rainfall exceeding 3,500 mm. This makes the area one of the wettest in India during monsoon. For plant lovers, this is paradise: tropical plants grow explosively here. Same-day plant delivery is available across Alipurduar city, Birpara, Madarihat, Falakata, and Hasimara.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Alipurduar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Thrives Here</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves humidity, grows fast</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Fern (Boston)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in misty, wet conditions</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low light, humid environment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Philodendron</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fast-growing tropical foliage</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹449</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, desk plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tropical blooms, loves humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Spider Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hanging, balcony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, verandah</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Growing Plants in North Bengal's Wet Climate</h3>

<p>Alipurduar receives some of the highest rainfall in India — over 3,500 mm a year, with monsoon months (June–September) seeing relentless rain. This extreme humidity is wonderful for tropical plants but requires thoughtful drainage. All outdoor pots must have good drainage holes, and the soil mix should include coarse material (perlite or coarse sand) to prevent waterlogging. Tea garden estates in the area have long-established knowledge of which plants tolerate the wet conditions — ferns, peace lily, philodendron, anthurium, and colocasia all flourish here with minimal care.</p>

<p>Winters in Alipurduar are cool and misty — December lows reach 8–10°C, and morning fog is common near the forest edges. Most indoor tropical plants do fine at these temperatures, though move them away from cold windowsills in January. The spring months (March–May) see rapid growth in almost every plant variety — this is the best time to repot and fertilise.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Alipurduar City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Birpara / Hasimara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Madarihat / Falakata</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kumargram / Kalchini</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Alipurduar's heavy monsoon climate?", answer: "Ferns, peace lily, philodendron, anthurium, and money plant all grow exceptionally well in Alipurduar's wet, humid climate. They love the moisture and push out new leaves rapidly during monsoon. Avoid succulents and cacti outdoors — they can't handle the constant rain. Ensure all pots have drainage holes to prevent root rot." },
      { question: "Is same-day plant delivery available in Alipurduar?", answer: "Yes. Same-day delivery is available across Alipurduar city, Birpara, and Hasimara for orders placed before 3 PM. Midnight delivery is available for central Alipurduar and Birpara." },
      { question: "What plant makes a good gift for someone in a tea garden estate in Alipurduar?", answer: "An anthurium or orchid plant is an excellent, thoughtful gift for someone living in or managing a tea garden estate — they're beautiful, low-maintenance, and thrive in the naturally humid environment. Lucky bamboo and money plant are more traditional choices for auspicious gifting at any occasion." },
      { question: "How do I prevent root rot in plants during Alipurduar's monsoon?", answer: "Use pots with drainage holes and a well-draining soil mix — add 20-30% perlite or coarse sand to regular potting soil. During June–September, water indoor plants only when the top inch of soil is dry (once a week or less). Outdoor plants get natural watering from rain — rarely need additional watering during monsoon." },
      { question: "Do you deliver plants during the rainy season in Alipurduar?", answer: "Yes. We deliver year-round including monsoon months. During heavy rain periods, we use extra waterproof packaging to protect plants in transit. For particularly wet days, we may contact you to confirm a delivery slot that avoids peak downpours." }
    ]
  },

  "almora": {
    cityName: "Almora",
    metaTitle: "Buy Plants Online in Almora | Himalayan & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Almora, Uttarakhand. Hill-friendly plants, ferns, indoor greens & gifting plants. Same-day delivery in Almora. Starting ₹299.",
    h1: "Buy Plants Online in Almora — Hill Plants for Kumaon's Cultural Capital",
    metaKeyword: "plants online almora, buy plants almora, indoor plants almora, plant delivery almora uttarakhand, himalayan plants almora kumaon, ferns almora",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Almora — Greenery for the Crown of Kumaon</h2>

<p>Almora sits at 1,638 metres in the Kumaon Himalayas, a town of stone-paved bazaars, old temples, and sweeping Himalayan views. It's a city with deep cultural roots — the Katyuri and Chand dynasties built here, and Swami Vivekananda once described Almora as the place where he found the answer to his spiritual questions. The surrounding forests of oak, rhododendron, and pine are legendary, and the region's Kumaon hills flora is among India's most diverse. Against this backdrop, plants aren't just decoration in Almora — they're part of the landscape, the culture, and the mountain way of life.</p>

<p>Almora's climate is temperate mountain — summers are pleasantly cool (20–25°C), monsoon is wet, and winters bring cold temperatures that can fall below freezing on clear January nights. This climate dramatically changes which plants work here compared to the plains. Tropical species need winter protection; temperate, cold-hardy, and highland plants flourish. Same-day delivery is available across Almora city, Bageshwar road, Ranikhet, and surrounding areas.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Suited to Almora's Himalayan Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Works in Almora</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Cold Hardy</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Fern (Boston / Maidenhair)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves cool, moist mountain air</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor in winter, no issues</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tolerates cool rooms in winter</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bright rooms in summer</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold (Seasonal)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Spring–autumn blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting year-round</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Dahlia (Seasonal)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves cool hill weather</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jade Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, survives cool winters</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Hill Plant Care — What Changes at 1,600 Metres</h3>

<p>Growing plants in Almora is genuinely different from the plains. The bright, clear mountain sun is stronger than it feels — plants that prefer "full sun" in the plains can get bleached in Almora's intense high-altitude light. A little afternoon shade is beneficial even for sun-loving plants. Winters are the main challenge: January nights can drop to -1°C to 2°C, which will damage or kill most tropical plants if left outdoors. Snake plant can handle cool temperatures down to about 7–8°C but not frost; peace lily and money plant need to be kept in heated indoor rooms through winter.</p>

<p>The good news is that Almora's spring and summer (March–October) is one of the most pleasant growing windows in India. Temperatures in the 18–25°C range, moderate humidity, and clean mountain air create near-ideal conditions. Ferns, dahlias, marigolds, and geraniums grow splendidly in Almora's spring. If you have a south-facing wall or terrace that catches morning sun, bougainvillea can even do well in Almora's summer — just bring it under cover in October.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Almora</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Almora City / Mall Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ranikhet</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bageshwar / Kausani</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Someshwar / Dwarahat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Almora's cold winter nights?", answer: "Ferns, marigolds, dahlias, jade plant, and money plant (kept indoors) do well through Almora's winters. Snake plant tolerates temperatures down to 7–8°C. Peace lily and areca palm need to be in heated rooms when temperatures drop below 10°C. Avoid keeping tropical plants outdoors after October in Almora." },
      { question: "Is same-day plant delivery available in Almora?", answer: "Yes. Same-day plant delivery is available across Almora city and the Mall Road area for orders placed before 3 PM. We also deliver to Ranikhet, Bageshwar, and Kausani, though these take longer and may need next-day scheduling depending on order time." },
      { question: "What plant is a good gift for someone in Almora's hill environment?", answer: "Ferns are genuinely beautiful gifts for Almora homes — they love the cool, misty mountain air and will grow luxuriantly on shaded verandahs. A dahlia tuber kit or seasonal flower plant is also popular in spring. For year-round indoor gifting, lucky bamboo and money plant work well and don't require hill-specific care knowledge." },
      { question: "Can outdoor plants survive Almora's monsoon?", answer: "Yes — Almora's monsoon (July–September) is wet but not as extreme as northeast India. Outdoor plants do well if pots have drainage holes. Avoid overwatering during monsoon. Marigold, hibiscus, and bougainvillea handle monsoon well. After monsoon, the post-rain autumn is Almora's most beautiful time for outdoor plants." },
      { question: "Which flowering plants bloom best in Almora's spring season?", answer: "Dahlia, marigold, pansy, geranium, and petunia are spectacular in Almora's cool spring (March–May). These temperate flowering plants that struggle in the heat of Delhi or Mumbai bloom gloriously at Almora's altitude. We stock seasonal flowering plants in spring that are ideal for Almora's climate." }
    ]
  },

  "aluva": {
    cityName: "Aluva",
    metaTitle: "Buy Plants Online in Aluva | Tropical & Indoor Plants | RedHeart",
    metaDescription: "Buy plants online in Aluva, Kerala. Tropical plants, indoor greens, anthurium & gifting combos with same-day delivery. Starting ₹299. Fresh plants, care guide included.",
    h1: "Buy Plants Online in Aluva — Tropical Plants for Ernakulam's River Town",
    metaKeyword: "plants online aluva, buy plants aluva, indoor plants aluva kerala, plant delivery aluva ernakulam, tropical plants aluva periyar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plant Delivery in Aluva — Kerala Humidity Meets Doorstep Convenience</h2>

<p>Aluva sits on the banks of the Periyar river in Ernakulam district — it's essentially the northern gateway to Kochi, just 14 km from Ernakulam city. The famous Aluva Sivarathri festival, held on the sandbanks of the Periyar, draws lakhs of devotees every year. Beyond its spiritual significance, Aluva is a rapidly growing urban area — a mix of older Kerala-style homes with large courtyards and newer apartment complexes near the Aluva railway station and CUSAT areas. Both kinds of residents love plants, and the natural climate makes almost everything thrive.</p>

<p>Aluva's climate is pure tropical Kerala — hot, humid, and wet. Annual rainfall exceeds 3,000 mm, humidity stays high throughout the year, and temperatures hover between 25°C and 34°C. This is an extraordinarily plant-friendly environment. RedHeart delivers plants across Aluva, Kalamassery, Kalady, Perumbavoor, and nearby Ernakulam areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Collection for Aluva</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best For</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, tropical blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Any indoor or semi-outdoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja flower</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, statement</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, desk</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bird of Paradise</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, large courtyards</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹899</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting Around Aluva's Festival Calendar</h3>

<p>The Aluva Sivarathri festival, held annually in February or March on the Periyar sandbanks, is one of Kerala's most attended events — Shiva devotees camp on the river's white sand for a full night. During this period and the broader season of Kumbhom (the Malayalam month), hibiscus, tulsi, and bilva leaves are sacred. A hibiscus plant gifted during this time carries particular meaning for Shiva devotees. For Onam and Vishu — Kerala's two biggest harvest and new-year festivals — potted chrysanthemum, marigold, and any flowering plant are popular gifts. Lucky bamboo and money plant are go-to gifts for housewarmings and office openings throughout the year.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage from Aluva</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aluva Town / Kalamassery</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kalady / Perumbavoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Angamaly / Chalakudy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ernakulam / Kochi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Aluva's tropical climate?", answer: "Anthurium, money plant, hibiscus, peace lily, and monstera all thrive in Aluva's natural humidity and warmth. Hibiscus and tulsi are traditional garden staples in Kerala homes. For indoor spaces, anthurium and peace lily need very little care in Aluva's climate — the ambient humidity does most of the work." },
      { question: "Can I get same-day plant delivery in Aluva?", answer: "Yes. Same-day plant delivery is available across Aluva town, Kalamassery, Kalady, and Perumbavoor for orders before 3 PM. We also deliver to Ernakulam and Kochi on same-day basis. Midnight delivery is available for Aluva and Kalamassery." },
      { question: "What plant is best for a Vishu gift in Aluva?", answer: "For Vishu (Kerala's New Year), a chrysanthemum or any golden/yellow flowering plant is traditional — yellow represents prosperity for the new year. Marigold plants are also popular. For a lasting gift, a money plant or lucky bamboo in a ceramic pot combines auspiciousness with practicality." },
      { question: "How do I water plants in Aluva during monsoon?", answer: "During Kerala's heavy monsoon (June–September), indoor plants rarely need watering more than once a week — the ambient humidity keeps soil moist. Always check soil moisture before watering. Outdoor plants get natural rain and typically don't need supplemental watering at all during peak monsoon. Ensure pots have drainage holes." },
      { question: "Do you deliver plants to Ernakulam and Kochi areas from Aluva?", answer: "Yes. Ernakulam and Kochi are within our delivery range. Same-day and midnight plant delivery is available across Ernakulam including Kakkanad, Edapally, and Mattanchery areas. Delivery from our Aluva dispatch point takes 3–5 hours to central Kochi." }
    ]
  },

  "alwar": {
    cityName: "Alwar",
    metaTitle: "Buy Plants Online in Alwar | Indoor & Desert Plants | RedHeart",
    metaDescription: "Order plants online in Alwar, Rajasthan. Succulents, indoor plants, rose & bougainvillea with same-day delivery. Starting ₹299. Fresh plants with care guide.",
    h1: "Buy Plants Online in Alwar — Plants That Thrive in Rajasthan's Green District",
    metaKeyword: "plants online alwar, buy plants alwar, indoor plants alwar, plant delivery alwar rajasthan, succulents alwar, drought tolerant plants alwar sariska",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Alwar — Rajasthan's Greenest District Gets Doorstep Plant Delivery</h2>

<p>Alwar is often called the gateway to Rajasthan from Delhi — just 160 km away, it sits in the Aravalli foothills and has a greener, more temperate character than Jaipur or Jodhpur. The Sariska Tiger Reserve lies 35 km from the city, the Siliserh Lake adds to its scenic reputation, and the Alwar city palace and Bala Quila fort make it a historical draw. Alwar district's eastern areas, bordering Haryana, receive more rainfall (650–700 mm) than most of Rajasthan, which means a wider range of plants can be grown here than in drier Rajasthan cities.</p>

<p>Alwar's climate is semi-arid — summers are hot (45°C in peak), winters are cool and sometimes cold (5–8°C minimum), and monsoon is moderate. Plant choices should account for both extremes. RedHeart delivers plants across Alwar city, Bhiwadi, Tijara, and nearby areas with same-day delivery for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Collection for Alwar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Placement</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Heat Tolerance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, any room</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kitchen, sunny balcony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, garden wall</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low-light corner</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very good</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Care in Alwar's Semi-Arid Climate</h3>

<p>Alwar's greenest months are after the monsoon — September through November brings pleasant temperatures and good soil moisture for establishing new outdoor plants. This is the ideal time to plant rose, bougainvillea, and other garden species in Alwar. Summers (April–June) are intense — outdoor plants need daily deep watering, and mulching around plant bases significantly reduces water loss. The Bhiwadi industrial zone on the outskirts has many workers and residents who prefer low-maintenance indoor plants — snake plant and ZZ plant are perfect for this demographic.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Alwar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Alwar City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhiwadi / Neemrana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tijara / Kishangarh Bas</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajgarh / Laxmangarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Alwar's hot summers and cold winters?", answer: "Snake plant and ZZ plant handle both extremes — they tolerate 45°C summers indoors and cool 5°C winters without issue. Bougainvillea and tulsi handle Alwar's outdoor conditions well. For the garden, rose plants bloom beautifully in Alwar's spring season (February–April) before summer peaks." },
      { question: "Is same-day plant delivery available in Alwar and Bhiwadi?", answer: "Yes. Same-day delivery is available in Alwar city and Bhiwadi for orders before 3 PM. Midnight delivery is also available for both areas. Bhiwadi's industrial township has significant demand for corporate plant gifting, which we handle with advance orders." },
      { question: "What plant gift works for Alwar's Rajasthani gifting traditions?", answer: "Tulsi and rose plants are the most traditional and meaningful plant gifts for Alwar's primarily Rajasthani Hindu families. Lucky bamboo and money plant are popular modern choices. For Teej and Gangaur festivals (important for Rajasthani women), flowering plants like marigold and rose are deeply appropriate." },
      { question: "When is the best time to plant roses in Alwar?", answer: "October through February is Alwar's rose season. Plant rose saplings in October for bloom from December through March. Water deeply every 3-4 days in winter (daily in summer), and add compost or fertiliser every 6-8 weeks during growing season. Prune dead flowers to encourage continuous blooming." },
      { question: "Which plants are best for Bhiwadi industrial area workers and offices?", answer: "Snake plant, ZZ plant, and lucky bamboo are ideal for Bhiwadi offices — they're low-maintenance, don't need natural light, and survive the AC-heavy office environment well. For corporate gifts at industrial events, a snake plant or areca palm in a branded pot is a practical and lasting choice." }
    ]
  },

  "ambala": {
    cityName: "Ambala",
    metaTitle: "Buy Plants Online in Ambala | Indoor & Flowering Plants | RedHeart",
    metaDescription: "Order plants online in Ambala. Indoor plants, succulents, rose, tulsi & gifting combos. Same-day delivery across Ambala Cantonment and Ambala City. Starting ₹299.",
    h1: "Buy Plants Online in Ambala — Same-Day Plant Delivery in Haryana's Military City",
    metaKeyword: "plants online ambala, buy plants ambala, indoor plants ambala, plant delivery ambala haryana, online nursery ambala cantonment, plants ambala city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ambala — From the City of Crossroads to Your Home</h2>

<p>Ambala is Haryana's northernmost major city, positioned at the geographic crossroads of North India — where the road splits towards Delhi to the south, Chandigarh to the northwest, and Shimla through Kalka to the north. The city is famously divided into Ambala Cantonment (a major Indian Air Force and Army station) and Ambala City (the older commercial centre). Cantonment areas in India have traditionally maintained some of the most orderly, well-gardened residential layouts — the IAF and Army quarters in Ambala Cantonment are no exception, with regulation gardens, flowering beds, and tree-lined avenues. It's a city where plant culture is embedded in the orderly military aesthetic as much as the local Punjabi-Haryanvi tradition.</p>

<p>Ambala's climate is semi-arid — summers reach 45°C in June, winters bring cold fog with lows of 3–5°C in January, and monsoon delivers 800–900 mm of rain from July to September. This is a four-season climate that rewards choosing the right plants for each period. RedHeart delivers across Ambala Cantonment, Ambala City, Naraingarh, and Barara with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Range for Ambala</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best For</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor year-round</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter–spring bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Apr</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold (Seasonal)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cantonment gardens</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Feb–May</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Ambala — Military and Civilian Traditions</h3>

<p>Ambala Cantonment's posting culture creates a specific gifting dynamic — military families move frequently, and farewell gifts need to be either portable or something that the recipient will treasure. A small succulent kit, a compact lucky bamboo, or a money plant in a ceramic pot are perfect farewell gifts. For family homes in Ambala City, plant gifting follows the broader Haryanvi-Punjabi tradition: tulsi for new homes, rose for weddings, marigold for festivals. Rose plants are particularly popular in Ambala in winter — the cool October-February period is when roses bloom best here, and gifting a rose plant means the recipient enjoys flowers for months.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ambala</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambala Cantonment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ambala City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Naraingarh / Barara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Shahabad / Mullana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Ambala Cantonment quarters?", answer: "Lucky bamboo, money plant, and snake plant are ideal for cantonment quarter interiors — they're compact, low-maintenance, and don't need outdoor space. For garden patches in cantonment quarters, rose plants and marigolds are classic choices that align well with the orderly cantonment garden aesthetic." },
      { question: "Is same-day plant delivery available in Ambala Cantonment?", answer: "Yes. Same-day delivery is available across Ambala Cantonment, Ambala City, and Naraingarh for orders placed before 3 PM. Midnight delivery is also available. We handle cantonment entry and security check requirements for delivery — include the quarter number and sector in your address." },
      { question: "What plant is a good farewell gift for a military colleague in Ambala?", answer: "A compact lucky bamboo in a gift box or a small succulent set is an ideal farewell gift for military colleagues who transfer frequently — they're portable, durable, and won't die if the move takes a few days. For permanent residents, a rose plant or an areca palm makes a lasting impression." },
      { question: "When do roses bloom best in Ambala?", answer: "Roses in Ambala bloom best from December through April. The cool winter conditions (3–15°C nights) are ideal for rose flowering. Plant rose saplings in October for the best bloom season. During Ambala's intense summer (May–June), roses need daily deep watering and partial shade." },
      { question: "Which indoor plant is best for Ambala's cold January nights?", answer: "Snake plant handles Ambala's 3–5°C January nights well, especially kept indoors. Money plant and ZZ plant are also fine indoors during winter. Keep tropical plants like peace lily and areca palm well away from cold drafts and north-facing windows during December–January." }
    ]
  },

  "amritsar": {
    cityName: "Amritsar",
    metaTitle: "Buy Plants Online in Amritsar | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Amritsar. Indoor plants, rose, tulsi, lucky bamboo & gifting combos. Same-day delivery across Amritsar. Starting ₹299. Fresh with care guide.",
    h1: "Buy Plants Online in Amritsar — Plants for the Holy City of the Golden Temple",
    metaKeyword: "plants online amritsar, buy plants amritsar, indoor plants amritsar, plant delivery amritsar punjab, online nursery amritsar, rose plant amritsar golden temple",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plant Delivery in Amritsar — From Wagah Border to Golden Temple, Green at Every Door</h2>

<p>Amritsar is Punjab's cultural and spiritual heart. The Harmandir Sahib — the Golden Temple — draws pilgrims and visitors from around the world every single day. The Jallianwala Bagh, the Wagah border ceremony, the Partition Museum, the walled city's bustling Katra bazaars — all of it adds up to one of India's most layered, emotionally resonant cities. And in between the heritage and the devotion, Amritsar is also a city of warm, generous hospitality. Gifting plants — whether at a housewarming, a wedding, or a Diwali celebration — is a natural extension of that Punjabi spirit of giving.</p>

<p>Amritsar's climate is extreme by most measures: summers reach 46°C in June (making it one of Punjab's hottest cities due to its northern position near the Pakistan border), winters bring dense fog and lows of 2–3°C in January, and the monsoon adds 600–700 mm of rain in July-September. This full-spectrum climate means plant choices matter significantly. RedHeart delivers plants across Amritsar city, Lawrence Road, Ranjit Avenue, Civil Lines, and nearby areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Collection for Amritsar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Year-Round</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter–spring</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, terrace</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Feb–May peak</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yes</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Gifting Plants in Amritsar — The Punjabi Way</h3>

<p>Punjab's gifting culture is generous and thoughtful. At weddings, Diwali, Lohri, and housewarmings, plants are increasingly finding their place alongside more traditional gifts. The money plant and lucky bamboo are the most universally popular — they're considered auspicious, easy to care for, and suitable for any home. At Baisakhi (Punjab's harvest festival), flowering plants and outdoor species reflect the connection to the land. For the many hotels, dhabas, and restaurants around the Golden Temple area, we supply lobby and seating-area plants on advance order.</p>

<p>For the Sikh community, the concept of seva (service) and connection to nature is central — the langar (community kitchen) tradition and the care taken with the Sarovar (holy pool) surroundings reflect a deep respect for living things. Gifting a plant — particularly a tulsi, a rose, or a flowering seasonal plant — is seen as a living, growing act of care in this context.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Amritsar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Golden Temple / Walled City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ranjit Avenue / Lawrence Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines / Majitha Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Batala / Tarn Taran</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Amritsar's extreme summer and foggy winter?", answer: "Snake plant, money plant, ZZ plant, and tulsi handle both ends of Amritsar's climate. For outdoors, bougainvillea and rose do well — bougainvillea is drought-tolerant in summer; rose shines in winter-spring. Keep tropical plants like peace lily indoors during January when frost fog is possible." },
      { question: "Can I get same-day plant delivery near the Golden Temple in Amritsar?", answer: "Yes. Same-day delivery is available across the walled city, Golden Temple area, Ranjit Avenue, Lawrence Road, and Civil Lines. Order before 3 PM. Midnight plant delivery is also available for central Amritsar." },
      { question: "What plant is a good Lohri gift in Amritsar?", answer: "Lohri is Punjab's bonfire festival celebrating harvest and winter's end. Marigold and seasonal flowering plants are ideal Lohri gifts — they're vibrant, festive, and connect to the agricultural theme. A tulsi plant is a meaningful spiritual gift. For a more contemporary touch, a lucky bamboo or money plant combo in a gift box is always well-received." },
      { question: "Do you deliver plants to Batala and Tarn Taran from Amritsar?", answer: "Yes. Batala and Tarn Taran are within our delivery range from Amritsar. Delivery takes approximately 4–6 hours. Same-day delivery is available for orders placed before 1 PM for these locations." },
      { question: "Which indoor plant is best for an Amritsar home during winter fog season?", answer: "Snake plant is the strongest performer in Amritsar's cold, foggy winter — it tolerates low light (important during dense fog days) and cool temperatures down to 5°C. Money plant and ZZ plant are also excellent choices. Keep them away from cold north-facing windows during December–January." }
    ]
  },

  "ayodhya": {
    cityName: "Ayodhya",
    metaTitle: "Buy Plants Online in Ayodhya | Tulsi, Rose & Sacred Plants | RedHeart",
    metaDescription: "Order plants online in Ayodhya. Tulsi, rose, marigold, indoor plants & gifting combos. Same-day delivery in Ayodhya. Starting ₹299. Sacred and ornamental plants delivered fresh.",
    h1: "Buy Plants Online in Ayodhya — Sacred and Ornamental Plants for Ram Nagari",
    metaKeyword: "plants online ayodhya, buy plants ayodhya, tulsi plant ayodhya, indoor plants ayodhya, plant delivery ayodhya up, marigold ayodhya ram mandir",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ayodhya — Living Greens for India's Most Sacred City</h2>

<p>Ayodhya, on the banks of the sacred Sarayu river, is one of Hinduism's seven most sacred cities (Sapta Puri). The Ram Mandir — consecrated in January 2024 — has given Ayodhya a new chapter as a centre of faith and pilgrimage, drawing millions of devotees from across India and the world. The city's cultural identity is inseparable from devotion, and in that context, plants carry deep meaning. Tulsi (holy basil) is found in the courtyard of every devout Hindu home in Ayodhya. Marigold and rose petals are offered at temple ghats. Bilva (bel) leaves are used in Shiva worship at the many temples along the Sarayu ghat. Lotus flowers float in temple tanks.</p>

<p>In this sacred landscape, plants aren't just décor — they're part of spiritual practice. RedHeart delivers plants across Ayodhya, Faizabad, and surrounding areas with same-day service for orders before 3 PM. We carry a wide range from sacred species to indoor air-purifying plants for the growing number of new guesthouses, hotels, and residences being built as Ayodhya expands into a major pilgrimage city.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sacred and Ornamental Plants for Ayodhya</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Significance / Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Light</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Holy Basil)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, daily pooja, courtyard</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple offerings, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ram Navami, Diwali decor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lotus (Water Lily)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple tanks, home ponds</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ashoka Tree Sapling</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, auspicious in Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Full sun</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, housewarming</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hotel / guesthouse indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Ayodhya's Spiritual Plant Culture</h3>

<p>Every home in Ayodhya's old city has a tulsi plant — it's not optional but central to daily ritual. The tulsi is watered every morning, a diya is lit beside it at dusk, and its leaves are used in everything from prasad to medicine. For families moving into new homes near the Ram Mandir development area, a large tulsi pot in a decorated stand is often the first plant acquired. As Ayodhya undergoes rapid urban development, the city's spiritual plant traditions are meeting new demand for indoor and decorative plants in its expanding guesthouses, dharamshalas, and hotels. We supply potted plants to hospitality venues with advance notice.</p>

<p>Ram Navami — the birthday of Lord Ram, celebrated in March-April — is Ayodhya's most significant festival, drawing enormous crowds. During this time, marigold and rose flowers are used in massive quantities for decoration and offering. Gifting a rose plant or a marigold pot to a devotee during Ram Navami season is a deeply meaningful gesture. The Diwali celebrations in Ayodhya are also nationally significant — the city lights up lakhs of diyas along the Sarayu ghat. Indoor plants and decorative plant arrangements are increasingly popular during the Diwali preparation period.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ayodhya</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Midnight</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ayodhya City / Ram Mandir area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Faizabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Gonda / Basti</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sultanpur / Ambedkar Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td><td style="border:1px solid #d1d5db;padding:8px 12px;">—</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which sacred plants are available for delivery in Ayodhya?", answer: "We deliver tulsi (holy basil), rose, marigold, lotus plants, and Ashoka tree saplings in Ayodhya — all commonly used in Hindu worship and ritual. Tulsi in a decorated clay or brass pot is our most popular sacred plant gift for Ayodhya. We also supply marigold and rose plants for temple gardens on advance order." },
      { question: "Can I get same-day plant delivery near the Ram Mandir in Ayodhya?", answer: "Yes. Same-day delivery is available across Ayodhya city including the Ram Mandir area, the Sarayu ghats, and Faizabad. Order before 3 PM for same-day delivery. Midnight delivery is also available in central Ayodhya and Faizabad." },
      { question: "What plant should I gift for Ram Navami in Ayodhya?", answer: "A rose plant or marigold pot is the most appropriate plant gift for Ram Navami in Ayodhya — both flowers are used in Ram pooja. A tulsi plant is the most sacred choice. For a more contemporary gift that blends tradition with modern taste, a money plant in a decorative terracotta pot works beautifully." },
      { question: "Do you supply plants for hotels and dharamshalas in Ayodhya?", answer: "Yes. With Ayodhya expanding rapidly as a pilgrimage destination, many new hotels, guesthouses, and dharamshalas are looking to add plants for ambiance. We supply indoor plants (areca palm, snake plant, peace lily, monstera) for lobbies and room decor on bulk orders. Contact us for bulk pricing and scheduled delivery." },
      { question: "How do I care for a tulsi plant in Ayodhya's climate?", answer: "Tulsi loves Ayodhya's warm, sunny weather. Place it in the courtyard or a sunny east/south-facing spot. Water daily in summer, every other day in winter. Remove flower stalks promptly to keep leaves productive. During monsoon, ensure the pot has drainage so roots don't sit in water. Tulsi appreciates regular pruning of the top growth." }
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
