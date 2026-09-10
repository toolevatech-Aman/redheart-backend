// Plants Tier 2 Batch 8 — 8 cities
// Agartala, Imphal, Shillong, Muzaffarnagar, Firozabad, Bokaro, Dhanbad, Tumkur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "agartala": {
    cityName: "Agartala",
    metaTitle: "Buy Plants Online in Agartala | Tripura Capital Plants | RedHeart",
    metaDescription: "Order plants online in Agartala. Orchids, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Tripura's capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Agartala — Same-Day Plant Delivery in the Capital of Tripura",
    metaKeyword: "plants online agartala, buy plants agartala, indoor plants agartala, plant delivery agartala tripura, orchid agartala, money plant agartala, online nursery agartala northeast india",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Agartala — Tripura's Capital Gets Doorstep Greens</h2>

<p>Agartala is the capital of Tripura — India's third-smallest state and one of the most geographically unique, being 98% surrounded by Bangladesh with just a narrow corridor connecting it to the rest of India through Assam. The city is home to the Ujjayanta Palace (the former royal palace of the Tripuri kings, now a museum), the Chaturdash Devata temple complex, and the Pilak archaeological sites that speak to the region's ancient Buddhist-Hindu heritage. Agartala is also notable for being one of India's cities closest to Bangladesh's Dhaka — connected by road through the Akhaura-Agartala integrated check post, with rail connectivity being developed. The Royal Bengal Tiger reserve and vast bamboo forests of Tripura's hilly interior surround the city.</p>

<p>Agartala's climate is subtropical northeast India: hot humid summers (35°C), an extraordinary monsoon (2,000 mm), and cool mild winters (10–20°C). The exceptional rainfall creates lush, tropical conditions excellent for plants. Orchids (Tripura is one of India's major orchid-growing states), money plant, anthurium, jasmine, hibiscus, and tropical flowering plants thrive in Agartala's warm, moist climate. RedHeart delivers across Agartala, Udaipur (Tripura), Sabroom, and Dharmanagar with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Agartala Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Northeast Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care in Tripura</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Orchid</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tripura specialty, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy in NE humidity</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in northeast humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Hindu Bengali-Tripuri homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Tripura garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durga Puja, Diwali, Bengali tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Tripura govt offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Agartala offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Tripura's Orchid Heritage and Bengali Plant Culture</h3>

<p>Tripura is one of India's most significant orchid-producing states — the state's subtropical forests harbour hundreds of orchid species, and commercial orchid cultivation has been promoted extensively by the state government. Agartala's plant markets have a wider selection of orchids than most Indian cities of comparable size. The city's predominantly Bengali population (80% of Tripura's population speaks Bengali as their first language) brings the rich Bengali cultural plant tradition — Durga Puja with shiuli and marigold, the mango flowering season, and the bamboo-rich local culture all connect Agartala's plant life to its Bengali identity.</p>

<p>The indigenous Tripuri communities' traditional relationship with bamboo, forest plants, and natural materials adds another botanical dimension to Agartala's plant culture. The Kokborok language and Tripuri festivals (Kharchi Puja — a major Tripuri festival, Ker Puja, Garia Puja) all involve flower and plant offerings. The city's deep green setting (Tripura is one of India's most forested states by percentage area) makes plants feel at home in every sense.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Agartala</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Agartala</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ujjayanta Palace area, Battala, Sakuntala Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Banamalipur / Barjala</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Banamalipur, Barjala, Krishnanagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Udaipur (Tripura)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Udaipur, Tripura's second city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sabroom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sabroom, near Bangladesh border</td><td style="border:1px solid #d1d5db;padding:8px 12px;">5–7 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">On request</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which orchids grow best in Agartala's tropical Tripura climate?", answer: "Dendrobium, Cymbidium, Rhynchostylis (fox tail orchid — Tripura's state flower), and Vanda orchids all grow exceptionally well in Agartala's warm, humid conditions. The state's natural orchid habitat in its subtropical forests means these plants are entirely at home in Agartala. Hanging orchid pots in a ventilated, bright but not direct-sun location give excellent results year-round." },
      { question: "Is same-day plant delivery available in Agartala?", answer: "Yes. Same-day delivery is available across Agartala including Ujjayanta Palace area, Battala, Banamalipur, Barjala, and Krishnanagar. Order before 3 PM. We also deliver to Udaipur (Tripura's second city) within 4–6 hours." },
      { question: "What plant is best for Durga Puja gifting in Agartala's Bengali community?", answer: "Marigold in full golden bloom for pandal decoration is essential for Agartala's vibrant Bengali Durga Puja celebrations. Shiuli (night jasmine, Nyctanthes arbor-tristis) is the most evocatively Bengali autumn plant — its fragrant white-orange flowers are the smell of Puja season. For a lasting post-Puja gift, anthurium or orchid in a ceramic planter is elegant and appropriate for any Bengali family." },
      { question: "What plants thrive in Agartala's extraordinary 2,000 mm rainfall?", answer: "The 2,000 mm annual rainfall and tropical temperatures make Agartala one of India's best cities for growing tropical plants. Orchids, anthurium, money plant, hibiscus, heliconia, ginger lily, and all ferns grow with exceptional vigour. Even typically demanding plants like orchids need minimal care in Agartala's naturally orchid-friendly humidity and warmth." },
      { question: "Do you deliver plants to Udaipur (Tripura) from Agartala?", answer: "Yes. Udaipur (Tripura's second-largest city, not to be confused with Udaipur in Rajasthan) is accessible from our Agartala network within 4–6 hours. Udaipur is home to the Tripura Sundari temple (Matabari) — one of the 51 Shakti Peethas — creating significant sacred plant demand including hibiscus, marigold, and tulsi for temple offerings." }
    ]
  },

  "imphal": {
    cityName: "Imphal",
    metaTitle: "Buy Plants Online in Imphal | Manipur Capital Plants | RedHeart",
    metaDescription: "Order plants online in Imphal. Lotus, indoor plants & gifting combos. Delivery available. Starting ₹299. Manipur's valley city gets fresh plant delivery.",
    h1: "Buy Plants Online in Imphal — Plant Delivery in the City of Polo and Loktak Lake",
    metaKeyword: "plants online imphal, buy plants imphal, indoor plants imphal, plant delivery imphal manipur, lotus imphal, indoor plants manipur, online nursery imphal northeast india",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Imphal — The Jewel of India's Northeast Gets Doorstep Greens</h2>

<p>Imphal is the capital of Manipur — one of India's most culturally distinctive northeastern states, famous for its Meitei culture, Manipuri classical dance (one of the eight classical dance forms of India), the sport of polo (which originated here — the modern game of polo was codified by British officers in Imphal in the 1860s), and the extraordinary Loktak Lake (south Asia's largest freshwater lake, famous for its floating phumdis — islands of organic matter that float on the lake and support unique ecosystems and entire communities). The Ima Keithel (Mother's Market) in central Imphal is Asia's largest market run entirely by women — thousands of Manipuri women vendors have maintained this tradition for centuries. The Kangla Fort (ancient seat of Manipuri kings) and the nearby Shree Shree Govindajee temple are central to Imphal's cultural identity.</p>

<p>Imphal's climate is subtropical northeast: pleasant summers (max 30–32°C in the valley), good monsoon (1,400 mm), and cool winters (4–15°C). The Imphal valley's fertile agricultural land and pleasant climate create good conditions for most plants. Lotus (sacred in the Loktak Lake context), money plant, tulsi, marigold, and indoor plants are popular in Imphal. RedHeart delivers across Imphal, Bishnupur, Churachandpur, and Thoubal with available service.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Imphal Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Manipur Cultural Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, universal gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Meitei Vaishnavite homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yaosang (Holi), Ningol Chakouba, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, thrives in NE valley</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Manipur govt offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office gifting, university campuses</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low-care, handles NE humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, Meitei festival flower</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Meitei Vaishnavism and Manipuri Festival Plant Culture</h3>

<p>Manipur's dominant Meitei community adopted Vaishnavism in the 18th century under King Pamheiba, creating a deeply Krishna-devotional culture that places tulsi at the centre of every devout Meitei home. The Govindajee temple in Imphal — the state's principal Vaishnava temple — is the heart of this devotional tradition. Tulsi, marigold, and lotus are the core sacred plants of Meitei Vaishnavism. Yaosang (Manipuri Holi, one of the most enthusiastically celebrated in India) and Ningol Chakouba (the Meitei festival of women visiting their parental homes, accompanied by gift-giving) are the biggest occasions for plant gifting in Imphal's Meitei community. Ningol Chakouba in November is when money plant, lucky bamboo, and indoor plants in decorative pots are popular gifts from men to sisters visiting the parental home.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Imphal</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Available</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Imphal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ima Keithel, Kangla Fort area, Paona Bazar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Imphal East / West residential</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Singjamei, Lamphel, Porompat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bishnupur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bishnupur town, Loktak area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Thoubal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thoubal town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most appropriate for Ningol Chakouba gifting in Imphal?", answer: "Money plant in a decorative ceramic planter is the most popular contemporary Ningol Chakouba gift — it's auspicious, lasting, and appropriate for a woman bringing it to her parental home. Lucky bamboo in an elegant glass vase is a modern standard for the festival. Anthurium in a bright-coloured pot is festive and thrives in Imphal's climate. Tulsi in a new maadam is the most sacred Meitei Vaishnavite gift for any devout home." },
      { question: "Is plant delivery available in Imphal?", answer: "Yes. We deliver across Imphal including Ima Keithel area, Paona Bazar, Singjamei, Lamphel, and Porompat. Order before 3 PM for same-day delivery. We also deliver to Bishnupur and Thoubal with 4–6 hour scheduling." },
      { question: "Which plants grow best in Imphal's pleasant Manipur valley climate?", answer: "Imphal's pleasant 30°C maximum summer, 1,400 mm monsoon, and cool winters (not extreme) make it excellent for a wide range of plants. Money plant, anthurium, tulsi, marigold, hibiscus, and snake plant all thrive. The valley's agricultural richness extends to excellent soil for outdoor planting. Anthurium and money plant are particularly vigorous in Imphal's warm, humid conditions." },
      { question: "What plants are traditional for Meitei Vaishnavite homes in Manipur?", answer: "Tulsi (holy basil) is the most sacred plant for Meitei Vaishnavite households — every Meitei Hindu home has a tulsi maadam where daily worship is performed. Lotus (available seasonally, and sacred in Loktak Lake's ecological context) is the most revered flowering plant in Vaishnavite tradition. Marigold is used for all festival offerings at the Govindajee temple and home shrines." },
      { question: "Do you deliver plants near Loktak Lake from Imphal?", answer: "Yes. Bishnupur (the entry point to the Loktak Lake area, home to the Keibul Lamjao National Park with the endangered Sangai deer) is within our 4–6 hour delivery zone from Imphal. Loktak-adjacent communities have a unique ecological relationship with plants given the phumdi (floating island) ecosystem." }
    ]
  },

  "shillong": {
    cityName: "Shillong",
    metaTitle: "Buy Plants Online in Shillong | Scotland of East Plants | RedHeart",
    metaDescription: "Order plants online in Shillong. Orchids, roses, indoor plants. Delivery available. Starting ₹299. Meghalaya's Scotland of the East gets plant delivery.",
    h1: "Buy Plants Online in Shillong — Plant Delivery in the Scotland of the East",
    metaKeyword: "plants online shillong, buy plants shillong, indoor plants shillong, plant delivery shillong meghalaya, orchid shillong, rose shillong, online nursery shillong cherrapunji",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Shillong — India's Wettest Region Grows Plants Like Nowhere Else</h2>

<p>Shillong is the capital of Meghalaya — the "Abode of Clouds" — and one of India's most atmospheric hill cities. Known as the "Scotland of the East" for its rolling hills, pine forests, misty weather, and colonial-era architecture, Shillong sits at 1,496 metres in the Khasi hills and commands sweeping views of the Brahmaputra plains below. The city was the former capital of undivided Assam before Meghalaya became a separate state in 1972. Meghalaya is home to some of the world's highest rainfall — Mawsynram (50 km from Shillong) and Cherrapunji (60 km) compete for the title of world's wettest place, receiving 11,000–12,000 mm of annual rain. Shillong itself receives 2,500 mm. The Khasi, Jaintia, and Garo matrilineal societies of Meghalaya give the state a unique social structure.</p>

<p>Shillong's climate is cool temperate northeast: pleasant cool summers (15–22°C), extraordinary monsoon (2,500 mm), and cold winters (5–10°C). The cool, moist Himalayan foothills climate creates spectacular conditions for temperate plants. Rose, orchid, rhododendron, chrysanthemum, fern, and cool-season plants thrive here. Tropical indoor plants can be grown in heated rooms. RedHeart delivers across Shillong, Jowai, Nongpoh, and Tura with available service.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Shillong Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Shillong Season</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Spring (Mar–May) and Sept–Nov</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Exceptional in Khasi hills</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Orchid</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Year-round, Meghalaya specialty</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NE India's natural habitat</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Chrysanthemum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">October–December, spectacular</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Perfect cool-season bloom</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor year-round</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Heated indoor rooms</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Fern</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Year-round in natural Shillong humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives effortlessly here</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, govt offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy indoor plant</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Year-round indoor gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Popular in Shillong offices</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">October–December, autumn colour</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Festival and outdoor colour</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Shillong's Extraordinary Plant Environment</h3>

<p>Shillong's position at the meeting point of subtropical and temperate climate zones creates one of the most diverse plant environments in India. The living root bridges of Meghalaya's Jaintia and Khasi hills — where ancient Ficus elastica trees are trained over centuries to grow their roots across streams and form living bridges — are the most extraordinary example of the region's intimate relationship with plants. The Ward's Lake botanical garden in central Shillong maintains a collection of temperate flowering plants including roses, dahlias, and seasonal bedding plants. Meghalaya's forests harbour hundreds of orchid species — Shillong has more orchid variety available than almost any other Indian city.</p>

<p>Shillong's unique cultural mix — Khasi and Jaintia indigenous populations, Bengali migrants, a significant Christian population (Meghalaya is predominantly Christian, with Scottish Presbyterian missionary influence visible in the cityscape) — creates a plant culture that blends local indigenous plant knowledge with British colonial garden traditions (roses, chrysanthemums, herbaceous borders) and northeast India's tropical plant richness.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Shillong</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Available</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Shillong</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Police Bazaar, Ward's Lake, Laitumkhrah</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mawkhar / Jaiaw</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mawkhar, Jaiaw, Nongthymmai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Nongpoh / Ri Bhoi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nongpoh, on Guwahati highway</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jowai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jowai, Jaintia Hills</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants thrive in Shillong's cool, wet Scotland-of-the-East climate?", answer: "Rose, orchid, fern, chrysanthemum, dahlia, and rhododendron are spectacular in Shillong's cool, wet conditions. Ferns need no special care in Shillong's perennial humidity. Rose blooms twice a year (March–May and September–November) in the Khasi hills. Orchids grow as easily in Shillong as houseplants do elsewhere. Tropical plants like money plant and anthurium should be kept in heated indoor spaces in winter." },
      { question: "Is plant delivery available in Shillong?", answer: "Yes. We deliver across Shillong including Police Bazaar, Ward's Lake, Laitumkhrah, Mawkhar, and Jaiaw. Order before 3 PM for same-day service. Shillong's hilly terrain requires some additional logistics management, particularly during heavy monsoon. We also deliver to Nongpoh on the Guwahati highway within 3–5 hours." },
      { question: "How do I care for plants during Shillong's cold winter?", answer: "Tropical plants (anthurium, money plant, peace lily) should be kept in heated rooms during December–February when temperatures drop to 5°C. Rose is dormant in winter — do not water heavily, prune in February. Ferns survive Shillong's winter if protected from frost. Orchids in warmer indoor spaces with morning indirect light perform well year-round. The monsoon (June–September) is when outdoor plants grow most vigorously." },
      { question: "What plant is best for Christmas gifting in Shillong's Christian community?", answer: "Poinsettia (the Christmas flower) is the most appropriate Christmas plant gift for Shillong's predominantly Christian population — it's the classic Christmas season plant with bright red bracts. Chrysanthemum in white or cream tones is elegant for Christmas. Peace lily with its white spathe blooms is peaceful and appropriate. Lucky bamboo in a glass vase or money plant in a ceramic pot are universally appreciated regardless of religion." },
      { question: "Do you deliver orchids to Shillong from Meghalaya's orchid belt?", answer: "Yes. Our Shillong delivery network includes orchid varieties grown in Meghalaya's extraordinary orchid belt — the state's humid subtropical forests naturally produce some of the most diverse orchid populations in India. Dendrobium, Cymbidium, and Vanda orchids are available. Delivery across central Shillong with 2–4 hour service for orders placed before 3 PM." }
    ]
  },

  "muzaffarnagar": {
    cityName: "Muzaffarnagar",
    metaTitle: "Buy Plants Online in Muzaffarnagar | Sugarcane City UP Plants | RedHeart",
    metaDescription: "Order plants online in Muzaffarnagar. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. UP's sugarcane city gets fresh plant delivery.",
    h1: "Buy Plants Online in Muzaffarnagar — Same-Day Plant Delivery in the Sugarcane Capital of India",
    metaKeyword: "plants online muzaffarnagar, buy plants muzaffarnagar, indoor plants muzaffarnagar, plant delivery muzaffarnagar uttar pradesh, marigold muzaffarnagar, tulsi muzaffarnagar, online nursery muzaffarnagar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Muzaffarnagar — Sugar Capital of India Gets Doorstep Greens</h2>

<p>Muzaffarnagar is western Uttar Pradesh's major agricultural and industrial city — the "Sugar Capital of India" and one of India's most important sugarcane and sugar processing centres. The Muzaffarnagar–Shamli belt's deep alluvial Doab soil and the Ganga-Yamuna river system's fertility create one of India's most productive sugarcane growing regions. The city is also known for its sugar mills, jaggery (gur) manufacturing, and the rich Jat agricultural community that dominates its rural economy. Muzaffarnagar is an important commercial hub connecting Delhi NCR with western Uttar Pradesh and Uttarakhand's Himalayan foothills.</p>

<p>Muzaffarnagar's climate is western UP Doab: very hot summers (44°C), moderate monsoon (800 mm), and cold winters (3–18°C). The Doab's fertile alluvial soil supports excellent plant growth. Marigold, tulsi, rose, and indoor plants are most popular across the Jat-dominated Hindu community. Diwali and Navratri are the biggest plant occasions. RedHeart delivers across Muzaffarnagar, Shamli, Meerut, and Saharanpur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Muzaffarnagar Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Western UP Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Jat Hindu homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, sugar mills</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, sugar business</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, NCR commuter homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles western UP heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Muzaffarnagar's Agricultural Heritage and Plant Culture</h3>

<p>Muzaffarnagar's Jat farming community has a deep connection to the land and to seasonal rhythms that translates naturally into plant culture. The gur (jaggery) making season (October–December, when freshly crushed sugarcane is processed into jaggery in traditional bhattis) overlaps with the Diwali plant season — a time when Muzaffarnagar's homes and markets are fragrant with jaggery and marigold. Rose planted in October produces spectacular December–February blooms in the Doab's cold, clear winters. Tulsi in every home's courtyard, marigold on the roof terrace, and money plant in the living room define the standard Muzaffarnagar home's plant identity.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Muzaffarnagar</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Muzaffarnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jansath Road, Budhana Road, Ghanta Ghar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Shamli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shamli town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur / Meerut</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur, Meerut towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Saharanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Saharanpur city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Is same-day plant delivery available in Muzaffarnagar?", answer: "Yes. Same-day delivery is available across Muzaffarnagar including Jansath Road, Budhana Road, and the Ghanta Ghar area. Order before 3 PM. We also deliver to Shamli within 3–5 hours and can reach Meerut within 4–6 hours." },
      { question: "What plant is best for Diwali decoration in Muzaffarnagar?", answer: "Marigold in full golden bloom is the most festive Diwali plant for any Muzaffarnagar home. Money plant in a terracotta pot is auspicious for the new year. Lucky bamboo in a gift box is popular for sugar mill business Diwali gifting. Rose plant gifted in October is a thoughtful, seasonally timed Diwali gift for the Doab's excellent rose-growing winter." },
      { question: "Which plants grow best in Muzaffarnagar's western UP Doab soil?", answer: "The Doab's deep, fertile alluvial soil is naturally excellent for most plants. Rose, marigold, tulsi, and seasonal flowering plants all grow vigorously in the rich Ganga-Yamuna plain soil. October–March is the prime gardening season. Rose planted in October produces spectacular December–February blooms in the Doab's cold, clear winter air." },
      { question: "What indoor plants are popular for the sugar mill executive community in Muzaffarnagar?", answer: "Money plant, snake plant, lucky bamboo, and peace lily are the most popular indoor plants for Muzaffarnagar's sugar mill executive community. Areca palm in a large floor planter creates a premium reception ambience in larger executive homes. Peace lily adds elegance to office and home study spaces. Lucky bamboo in a 9-stalk arrangement is the standard corporate gift in the sugarcane industry." },
      { question: "Do you deliver plants to Shamli from Muzaffarnagar?", answer: "Yes. Shamli (a rapidly growing district town 40 km from Muzaffarnagar, part of the Delhi NCR extended area) is within our 3–5 hour same-day delivery zone. Shamli's growing NCR commuter population is an emerging plant market. Same-day delivery for Shamli orders placed before noon from our Muzaffarnagar network." }
    ]
  },

  "firozabad": {
    cityName: "Firozabad",
    metaTitle: "Buy Plants Online in Firozabad | Glass City UP Plants | RedHeart",
    metaDescription: "Order plants online in Firozabad. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. UP's glass city gets fresh plant delivery.",
    h1: "Buy Plants Online in Firozabad — Same-Day Plant Delivery in the Glass City of India",
    metaKeyword: "plants online firozabad, buy plants firozabad, indoor plants firozabad, plant delivery firozabad uttar pradesh, marigold firozabad, tulsi firozabad, online nursery firozabad glass city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Firozabad — India's Glass Capital Gets Doorstep Greens</h2>

<p>Firozabad is the undisputed "Glass City of India" — producing 70% of India's glass bangles and significant quantities of glass beads, bowls, bottles, and scientific glass. The city's glassmaking industry, concentrated in its furnace districts, employs hundreds of thousands of workers and artisans in a tradition that has defined Firozabad for centuries. The brilliant coloured glass bangles of Firozabad are worn by women across India and are exported globally — making the city a global centre for glass craft. Firozabad is located in the Agra division of western Uttar Pradesh, just 40 km from Agra and the Taj Mahal.</p>

<p>Firozabad's climate is western UP: very hot summers (44°C), moderate monsoon (750 mm), and cold winters (4–18°C). The Doab's rich alluvial soil supports good outdoor plant growth. Marigold, tulsi, rose, and indoor plants are the core plant categories for Firozabad's glass-worker and trading community. Diwali is the biggest plant gifting occasion in the city's Hindu working community. RedHeart delivers across Firozabad, Etah, Mainpuri, and Agra with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Firozabad Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Glass City Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu glass-worker home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">In glass vase — local product harmony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, water vase in glass bowl</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, glass factory settings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, glass company offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles UP heat, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">The Glass-Plant Connection in Firozabad</h3>

<p>Firozabad has a unique plant presentation opportunity — lucky bamboo in a glass vase is a locally resonant gift, combining Firozabad's global identity in glassware with the universal appeal of lucky bamboo. Money plant grown in a clear glass bowl (water propagation) is similarly aligned with the city's glass heritage. The glass bangle workers and small furnace owners who form Firozabad's economic backbone are a hardworking, festival-observant community where Diwali plant decoration and gifting are important social traditions. The Doab's rich soil makes the winter flowering season (October–March) excellent for roses and marigold.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Firozabad</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Firozabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Glass Bangle Market, Court Road, Nai Mandi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tundla / Shikohabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tundla, Shikohabad towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Agra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Agra city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Etah / Mainpuri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Etah, Mainpuri towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What is the most unique plant gift idea for Firozabad's glass city identity?", answer: "Lucky bamboo grown in a Firozabad glass vase is the perfect local gift — combining the city's signature glass craft with the universal indoor plant. Money plant in a glass bowl (water propagation) similarly connects glass and greenery. Peace lily in a glass planter, or anthurium in a glass pot — all play on Firozabad's identity while delivering a beautiful, lasting plant gift." },
      { question: "Is same-day plant delivery available in Firozabad?", answer: "Yes. Same-day delivery is available across Firozabad including the Glass Bangle Market area, Court Road, and Nai Mandi. Order before 3 PM. We also deliver to Agra within 3–5 hours." },
      { question: "Which plants grow best in Firozabad's western UP climate?", answer: "Marigold, rose, tulsi, money plant, snake plant, and aloe vera all do well in Firozabad's Doab climate. October–March is the prime plant season — the cold clear winters produce excellent rose and marigold blooms. The monsoon (750 mm) recharges soil for autumn planting. Deep alluvial soil gives most plants a strong nutritional foundation." },
      { question: "What plant is best for a glass factory owner as a Diwali gift?", answer: "Lucky bamboo in a tall cylindrical glass vase is the most thematically appropriate Diwali gift for a glass factory owner — the vase itself is an advertisement of the city's craft. Money plant in a large glass bowl is similarly resonant. Peace lily in a premium ceramic planter is an elegant corporate Diwali choice. Areca palm in a floor planter makes an impressive gift for larger glass manufacturing offices." },
      { question: "Do you deliver plants to Agra from Firozabad?", answer: "Yes. Agra (40 km from Firozabad) is within our same-day delivery zone with 3–5 hour delivery. Agra is also separately seeded in our Tier 1 batch on RedHeart. The Agra–Firozabad corridor is a key delivery route in the Agra division. Same-day delivery for Agra orders placed before 2 PM from our Firozabad network." }
    ]
  },

  "bokaro": {
    cityName: "Bokaro",
    metaTitle: "Buy Plants Online in Bokaro | Steel City Jharkhand Plants | RedHeart",
    metaDescription: "Order plants online in Bokaro. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Jharkhand's steel city gets fresh plant delivery.",
    h1: "Buy Plants Online in Bokaro — Same-Day Plant Delivery in Jharkhand's Soviet-Built Steel City",
    metaKeyword: "plants online bokaro, buy plants bokaro, indoor plants bokaro, plant delivery bokaro jharkhand, money plant bokaro, online nursery bokaro steel city BSL",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bokaro — The Planned Steel City of Jharkhand Gets Doorstep Greens</h2>

<p>Bokaro Steel City is one of India's most iconic planned industrial cities — built in the 1960s with Soviet assistance as part of Nehru's vision for India's heavy industrial development, the Bokaro Steel Plant (BSL) was the fourth integrated steel plant to come up under SAIL (Steel Authority of India Limited). Like Bhilai and Durgapur, Bokaro is a sector-organized planned township with wide avenues, well-maintained parks, and institutional green spaces that reflect the socialistic urban planning of the Nehruvian era. The city is located in the Damodar Valley of Jharkhand, near Dhanbad and adjacent to the Chotta Nagpur plateau's coal and mineral belt. Javitri Lake (now a popular recreational park) and the Tenughat Dam reservoir add natural beauty to the planned city's landscape.</p>

<p>Bokaro's climate is Jharkhand continental: hot summers (42°C), a very good monsoon (1,300 mm), and cool winters (6–18°C). The good monsoon and forested Chotta Nagpur plateau setting create good plant-growing conditions. Money plant, tulsi, marigold, and indoor plants are popular across Bokaro's diverse SAIL employee and contractor community. Durga Puja and Diwali drive the biggest plant demand. RedHeart delivers across Bokaro, Dhanbad, Ramgarh, and Hazaribagh with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Bokaro Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, BSL homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu steel city home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Durga Puja, Diwali, Chhath Puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, BSL executive homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">BSL offices, sector quarter homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter BSL township gardens</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, SAIL offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Premium gifting, thrives in Jharkhand</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">BSL Township's Garden Heritage and Chhath Puja Plant Culture</h3>

<p>Bokaro Steel Plant's township — organised in sectors (1A, 1B, 2, 3, etc.) around the main plant — maintains one of Jharkhand's finest planned residential environments, with sector parks, avenue trees, and institutional garden spaces. BSL's horticultural department has maintained rose gardens, seasonal flower beds, and institutional gardens since the plant's establishment in the 1960s. Chhath Puja — Bihar's (and Jharkhand's) most significant festival of sun worship — is celebrated with particular enthusiasm by Bokaro's large Bihari-origin workforce. Banana plant (for the Chhath thali), marigold flowers, and tulsi are the botanical heart of Chhath in Bokaro.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bokaro</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">BSL Sectors</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sector 1–12, City Centre, Chas</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bokaro Thermal / Chandankiyari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bokaro Thermal, Chandankiyari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Dhanbad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dhanbad city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hazaribagh / Ramgarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hazaribagh, Ramgarh towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for a BSL sector quarter garden in Bokaro?", answer: "Rose plant (planted October) is the traditional BSL township garden choice — Bokaro's October–March cool season produces excellent roses, and the township's rose garden tradition is decades old. Marigold for Diwali and Chhath Puja decoration is essential. Money plant in a hanging basket suits sector quarter balconies. Anthurium and peace lily are popular indoor choices for larger Type-IV and Type-V BSL quarters." },
      { question: "Is same-day plant delivery available in Bokaro?", answer: "Yes. Same-day delivery is available across Bokaro BSL Sectors 1–12, City Centre, and Chas. Order before 3 PM. We also deliver to Dhanbad within 3–5 hours and can serve Hazaribagh within 4–6 hours." },
      { question: "Which plants are used in Chhath Puja in Bokaro?", answer: "Banana plant (kela) stems and leaves form the Chhath puja thali platform. Marigold flowers are offered at the river ghat during the evening and morning arghya. Tulsi is sacred for the daily puja context. Sugarcane stalks are used as offering stands. Growing your own banana plant and marigold for Chhath is deeply meaningful for Bokaro's large Bihari-origin steel plant workforce." },
      { question: "Which indoor plants thrive in Bokaro's Jharkhand setting?", answer: "Money plant, peace lily, anthurium, snake plant, and lucky bamboo all grow vigorously in Bokaro's warm, humid conditions. The 1,300 mm monsoon creates excellent soil conditions for outdoor planting. Anthurium in particular is exceptionally well-suited to Bokaro's warm, humid Jharkhand climate — it blooms year-round with minimal care." },
      { question: "Do you deliver plants to Dhanbad from Bokaro?", answer: "Yes. Dhanbad (Jharkhand's coal capital, 48 km from Bokaro) is within our 3–5 hour same-day delivery zone. Dhanbad's coal mining executive and management community has significant demand for indoor plants and corporate gifting. Same-day Dhanbad delivery for orders placed before noon. We serve the full Bokaro–Dhanbad industrial corridor comprehensively." }
    ]
  },

  "tumkur": {
    cityName: "Tumkur",
    metaTitle: "Buy Plants Online in Tumkur | Coconut City Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Tumkur. Jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Karnataka's coconut city gets fresh plant delivery.",
    h1: "Buy Plants Online in Tumkur — Same-Day Plant Delivery in Karnataka's Coconut City",
    metaKeyword: "plants online tumkur, buy plants tumkur, indoor plants tumkur, plant delivery tumkur karnataka, jasmine tumkur, marigold tumkur, online nursery tumkur coconut city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Tumkur — The Coconut City of Karnataka Gets Doorstep Greens</h2>

<p>Tumkur (officially Tumakuru) is one of Karnataka's most significant cities — the headquarters of Tumkur district, one of Karnataka's largest agricultural districts, and the commercial hub of the semi-arid southern Deccan plateau between Bangalore and Chitradurga. The city is known as the "Coconut City" or "The Land of Coconuts" for the vast coconut plantations in the Tumkur belt that supply a significant fraction of India's coconut. Tumkur University, a growing set of engineering and medical colleges, and proximity to Bangalore (70 km) have given the city an educated, cosmopolitan character. The region's sericulture (silk production) tradition is also significant — Tumkur is Karnataka's second most important silk district after Ramanagara.</p>

<p>Tumkur's climate is semi-arid southern Deccan: summers reach 38°C, the monsoon is moderate (700–900 mm), and winters are pleasant (14–24°C). Jasmine, hibiscus, tulsi, and drought-adapted plants perform well in Tumkur's conditions. The city's Bangalore commuter population creates significant indoor plant demand for home and office use. RedHeart delivers across Tumkur, Tiptur, Sira, and Kunigal with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Tumkur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Karnataka Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mallige)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, Dasara, Ugadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Karnataka Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dasara, Ganesh Chaturthi, Ugadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, Bangalore commuter homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Tumkur University</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Ugadi, Dasara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Tumkur's Agricultural Heritage and Karnataka Plant Culture</h3>

<p>Tumkur's coconut belt — stretching through Tiptur, Kunigal, Sira, and surrounding taluks — is one of India's most productive coconut-growing regions. The region's agricultural identity gives its people a deep, practical connection to growing things. Karnataka's plant culture is centred around jasmine (mallige) — Bangalore's famous Mysore Mallige jasmine, grown in and around the Bangalore-Tumkur-Mysuru triangle, is the most fragrant and commercially significant jasmine in south India. Tumkur's position in this jasmine belt means local families have a strong culture of growing jasmine for daily garlands, temple use, and festive occasions.</p>

<p>Dasara (Mysuru Dasara, celebrated with extraordinary pomp across Karnataka) is Tumkur's most significant festival occasion for plant gifting — marigold, chrysanthemum, and jasmine are the festival botanical essentials. Ugadi (Kannada-Telugu New Year) in March–April is the second major occasion. Tumkur's growing Bangalore commuter community — working in Bangalore's IT sector but living in Tumkur's more affordable residential areas — increasingly demands trending indoor plants: monstera, pothos, ZZ plant, and air-purifying plants seen on Bangalore's plant café culture.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Tumkur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Tumkur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">BH Road, Sira Road, Tumkur University area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tiptur / Gubbi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tiptur, Gubbi towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kunigal / Sira</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kunigal, Sira towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Madhugiri / Pavagada</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Madhugiri, Pavagada towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Tumkur's semi-arid southern Deccan climate?", answer: "Jasmine (mallige), hibiscus, tulsi, marigold, money plant, snake plant, and aloe vera all thrive in Tumkur's warm, moderately dry conditions. Jasmine is particularly well-suited to Tumkur's position in Karnataka's mallige belt — plant in full morning sun, water daily, and it will bloom prolifically. Aloe vera handles the drier summers with very little water." },
      { question: "Is same-day plant delivery available in Tumkur?", answer: "Yes. Same-day delivery is available across Tumkur including BH Road, Sira Road, and Tumkur University area. Order before 3 PM. We also deliver to Tiptur and Gubbi within 3–5 hours." },
      { question: "What plant is best for Ugadi gifting in Tumkur?", answer: "Jasmine plant (mallige) is the most Karnataka-rooted Ugadi gift — its fragrant blooms are the smell of Karnataka's festival mornings. Money plant in a new ceramic pot is auspicious for the Kannada new year. Lucky bamboo in a decorated glass vase is the standard corporate Ugadi gift across Tumkur's business community. Tulsi in a new maadam is the most sacred Ugadi gift for any devout Kannada household." },
      { question: "What indoor plants are trending for Tumkur's Bangalore commuter community?", answer: "Monstera deliciosa, pothos (money plant varieties), ZZ plant, snake plant, and peace lily are the trending indoor plants for Tumkur's young Bangalore-commuting tech workforce — the same plants popular in Bangalore's plant café and workspace culture. These plants handle the commuter's irregular care schedule and thrive in typical apartment settings." },
      { question: "Do you deliver plants to Tiptur and Kunigal from Tumkur?", answer: "Yes. Tiptur (the coconut and copra trade capital of the Tumkur belt) and Kunigal are within our 3–5 hour same-day delivery zone. Same-day delivery for orders placed before noon. Sira is similarly accessible. We serve the full Tumkur district belt from our city distribution point." }
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
