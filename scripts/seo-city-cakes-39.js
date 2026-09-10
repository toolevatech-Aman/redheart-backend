// Cakes Batch 39 — 15 cities:
// UP: Lakhimpur (done), Bijnor, Amroha, Hapur, Bulandshahr (done?) — Hathras, Firozabad (done), Kasganj, Pilibhit
// Bihar: Sheohar (done), Araria (done), Sitamarhi (done) — Nawada, Sheikhpura, Munger
// Odisha: Kalahandi, Nuapada
// Karnataka: Bagalkot, Chitradurga

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bijnor": {
    cityName: "Bijnor",
    metaTitle: "Cake Delivery in Bijnor | Ganga Headwaters Sugar Najibabad UP | RedHeart",
    metaDescription: "Order cakes online in Bijnor. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bijnor",
    metaKeyword: "cake delivery bijnor, order cake online bijnor, birthday cake bijnor, custom cake bijnor, same day cake delivery bijnor Ganga headwaters Najibabad Kotdwar sugarcane paper mills Awangarh Rohilkhand UP",
    footerContent: `
<h2>Cake Delivery in Bijnor — Ganga Canal Headworks, Najibabad's Rohilla Heritage, and Uttarakhand Foothills Gateway</h2>
<p>Bijnor — the headquarters of Bijnor district in Uttar Pradesh, on the eastern bank of the Ganga (the river's exit from Uttarakhand at Haridwar creates the Upper Ganga Canal whose headworks are at Bijnor, controlling irrigation across western UP); a district of canal history, Rohilla heritage, and Shivalik foothills transition (the Upper Ganga Canal (opened 1854 CE, one of the first major colonial irrigation canals in UP) has its main headworks at the Bijnor Barrage on the Ganga — controlling irrigation water distribution across the Doab; the Najibabad town (Bijnor district) was founded by the Rohilla Afghan chief Najib Khan (Najib-ud-Daula) in the 18th century — a significant Mughal-era military commander who controlled large areas of Rohilkhand; the Nawab of Najibabad's fort still partially stands; the Kotdwar-Lansdowne area (Garhwal, Uttarakhand) is accessible through Bijnor district making it a Shivalik foothills gateway; the Ganga River here carries significant Himalayan sand and gravel — the Bijnor Ganga ghats are significant bathing and Chhath Puja sites; Bijnor district produces sugarcane, wheat, and rice in the fertile western UP canal-irrigated plains; several sugar mills and paper mills operate in the district; the Mandawar, Chandpur, Dhampur areas are significant towns; the Dhampur Sugar Mill is one of the most significant in UP), and a city of canal headwaters and Rohilla legacy — is western UP's most hydraulically historic Himalayan-foothills city. From birthday parties in Bijnor to celebration cakes — RedHeart covers all Bijnor zones: Bijnor town, Najibabad, Nagina, Dhampur, Chandpur, Mandawar, Kiratpur.</p>
<p>Our Bijnor cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Ganga Canal Headworks / Najibabad Rohilla / Upper Ganga-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bijnor, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bijnor town, Najibabad, Nagina, Dhampur, Chandpur, Mandawar, Kiratpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Ganga Canal Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bijnor?", answer: "Yes, same-day cake delivery is available across all Bijnor areas — Bijnor town, Najibabad, Nagina, Dhampur, and Chandpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bijnor?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bijnor delivery." },
      { question: "Do you deliver midnight cakes in Bijnor?", answer: "Yes, midnight birthday cake delivery is available across Bijnor town, Najibabad, and Nagina zones." }
    ]
  },

  "amroha": {
    cityName: "Amroha",
    metaTitle: "Cake Delivery in Amroha | Jyotiba Phule Nagar Ghee Nawab UP | RedHeart",
    metaDescription: "Order cakes online in Amroha. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Amroha",
    metaKeyword: "cake delivery amroha, order cake online amroha, birthday cake amroha, custom cake amroha, same day cake delivery amroha Jyotiba Phule Nagar Amroha ghee Gajraula paper mill Kali Nadi JP Nagar Rohilkhand UP",
    footerContent: `
<h2>Cake Delivery in Amroha (J.P. Nagar) — Jyotiba Phule Legacy, Kali Nadi Paper Mills, and Western UP's Ghee-Jaggery Belt</h2>
<p>Amroha — the headquarters of Amroha district (officially Jyotiba Phule Nagar district) in Uttar Pradesh, named after the great 19th-century social reformer Jyotirao Phule — a district of literary Urdu heritage and industrial paper production (Amroha town has one of western UP's most significant Urdu literary traditions — the city has produced notable Urdu poets and is known for its literary mushairas; the Amroha area has a significant Muslim tehbazari (bazaar) and traditional crafts in handwoven textiles; the Gajraula town (Amroha district) is one of India's most significant paper and industrial manufacturing centres — the Gajraula area on the Kali Nadi has large pulp and paper mills and industrial estates; J.K. Paper and other companies have manufacturing units in Gajraula; the Kali Nadi (a Ganga tributary) flows through the district providing water for industrial units; the Amroha-Sambhal-Moradabad belt is a significant brass and metal ware manufacturing corridor; Amroha itself has significant ghee and dairy product markets (western UP ghee tradition); Hasanpur town (Amroha district) has traditional handloom and carpet weaving; the district borders Moradabad (the Brass City of India) making it part of the greater Moradabad manufacturing corridor; the district was renamed Jyotiba Phule Nagar in 1997 in honour of the reformer Jyotirao Phule (1827-1890) — a great Maharashtra social reformer and pioneer of women's education and anti-caste movement), and a city of Urdu verse and industrial paper — is western UP's most literarily and industrially hybrid district. From birthday parties in Amroha to celebration cakes — RedHeart covers all Amroha zones: Amroha town, Gajraula, Hasanpur, Dhanaura, Naugawan Sadat, Thakurdwara.</p>
<p>Our Amroha cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amroha (J.P. Nagar), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amroha town, Gajraula, Hasanpur, Dhanaura, Naugawan Sadat, Thakurdwara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Amroha?", answer: "Yes, same-day cake delivery is available across all Amroha areas — Amroha town, Gajraula, Hasanpur, Dhanaura, and Naugawan Sadat — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Amroha?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Amroha delivery." },
      { question: "Do you deliver midnight cakes in Amroha?", answer: "Yes, midnight birthday cake delivery is available across Amroha town, Gajraula, and Hasanpur zones." }
    ]
  },

  "hapur": {
    cityName: "Hapur",
    metaTitle: "Cake Delivery in Hapur | Delhi NCR Corridor Ghaziabad Adjacent UP | RedHeart",
    metaDescription: "Order cakes online in Hapur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hapur",
    metaKeyword: "cake delivery hapur, order cake online hapur, birthday cake hapur, custom cake hapur, same day cake delivery hapur Delhi NCR Ghaziabad Meerut adjacent Pilkhuwa textiles Garhmukteshwar Ganga Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Hapur — Delhi NCR's Eastern Edge, Pilkhuwa's Textile Hub, and Garhmukteshwar's Sacred Ganga</h2>
<p>Hapur — the headquarters of Hapur district in Uttar Pradesh (carved from Ghaziabad in 2011), one of the newest districts of UP and a city on the immediate eastern fringe of the Delhi NCR (Hapur is located approximately 60 km east of Delhi on the NH-34 (Delhi-Hapur highway) and is directly adjacent to Ghaziabad — making it effectively part of the Greater Delhi urban-industrial sprawl; Hapur has significant brick kiln, textile, and light manufacturing industries serving the NCR; the Pilkhuwa town (Hapur district) is one of India's most significant cotton textile (printed dhoti, saree, and cotton cloth) manufacturing and trading centres — the Pilkhuwa printers use traditional block printing and modern screen printing for cotton textiles; Pilkhuwa cloth markets are major wholesale hubs serving UP, Bihar, and North India markets; the Garhmukteshwar (Garhmukteshwar Ghat on the Ganga — 50 km from Hapur) is one of western UP's most sacred Ganga bathing ghats; the Garhmukteshwar fair (Kartik Purnima) is one of UP's most significant river fairs drawing hundreds of thousands of pilgrims; the Ganga at Garhmukteshwar (where the river broadens after the foothills) is considered particularly sacred; the Hapur-Bulandshahr belt has significant glass and electronic goods manufacturing; the Dasna area (Hapur district's border with Ghaziabad) is an industrial township), and a city of NCR proximity and sacred river — is UP's most Delhi-adjacent new district. From birthday parties in Hapur to celebration cakes — RedHeart covers all Hapur zones: Hapur town, Pilkhuwa, Dhaulana, Garh Mukteshwar, Dasna, Simbhawali.</p>
<p>Our Hapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Garhmukteshwar Ganga / Pilkhuwa Textile-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hapur, Uttar Pradesh (Delhi NCR fringe)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hapur town, Pilkhuwa, Dhaulana, Garh Mukteshwar, Dasna, Simbhawali</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Ganga Ghat Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hapur?", answer: "Yes, same-day cake delivery is available across all Hapur areas — Hapur town, Pilkhuwa, Dhaulana, Garh Mukteshwar, and Dasna — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hapur delivery." },
      { question: "Do you deliver midnight cakes in Hapur?", answer: "Yes, midnight birthday cake delivery is available across Hapur town and Pilkhuwa zones." }
    ]
  },

  "hathras": {
    cityName: "Hathras",
    metaTitle: "Cake Delivery in Hathras | Hing Asafoetida Trade Braj Doab UP | RedHeart",
    metaDescription: "Order cakes online in Hathras. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hathras",
    metaKeyword: "cake delivery hathras, order cake online hathras, birthday cake hathras, custom cake hathras, same day cake delivery hathras Hing asafoetida trading hub Braj Yamuna Doab Mahamaya Nagar sugarcane UP",
    footerContent: `
<h2>Cake Delivery in Hathras — India's Hing Trading Capital, Yamuna-Doab Braj Culture, and Mahamaya Shakti Heritage</h2>
<p>Hathras — the headquarters of Hathras district in Uttar Pradesh (officially named Mahamaya Nagar from 2010-2012, then renamed Hathras), one of the most commercially significant small cities of the western UP Doab (Hathras is India's largest trading hub for hing (asafoetida) — the pungent resin derived from Ferula plants, one of Indian cooking's most essential spices; despite being produced primarily in Afghanistan and Iran, Hathras is where the largest volume of raw asafoetida resin is imported, processed, compounded (mixed with flour, edible gum), and redistributed to spice markets across India; the Hathras hing compounders have been trading in asafoetida for generations and supply hing to most of North India's wholesale spice markets; Hathras is located in the Braj cultural zone — the region associated with Lord Krishna's childhood and youth in the Mathura-Vrindavan-Braj belt; the Yamuna River is 30 km west of Hathras and the Ganga is to the east — the Doab fertility makes the district agriculturally rich (sugarcane, wheat, mustard); the Mahamaya (Devi) temple in Hathras is a significant local Shakti shrine; the Sasni area (Hathras district) has the Sasni Fort (ruins); the Hathras district was carved from Aligarh), and a city of spice trade and Braj devotion — is western UP's most aromatically commercial city. From birthday parties in Hathras to celebration cakes — RedHeart covers all Hathras zones: Hathras town, Sasni, Sikandrarao, Mursan, Sadabad, Sahpau.</p>
<p>Our Hathras cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hathras, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hathras town, Sasni, Sikandrarao, Mursan, Sadabad, Sahpau</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hathras?", answer: "Yes, same-day cake delivery is available across all Hathras areas — Hathras town, Sasni, Sikandrarao, Mursan, and Sadabad — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hathras?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hathras delivery." },
      { question: "Do you deliver midnight cakes in Hathras?", answer: "Yes, midnight birthday cake delivery is available across Hathras town, Sasni, and Sikandrarao zones." }
    ]
  },

  "kasganj": {
    cityName: "Kasganj",
    metaTitle: "Cake Delivery in Kasganj | Ganga Soron Pilgrimage Kali Nadi UP | RedHeart",
    metaDescription: "Order cakes online in Kasganj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kasganj",
    metaKeyword: "cake delivery kasganj, order cake online kasganj, birthday cake kasganj, custom cake kasganj, same day cake delivery kasganj Soron Ganga pilgrimage Shukarkshetra Kali Nadi Etah Doab UP",
    footerContent: `
<h2>Cake Delivery in Kasganj — Soron's Sacred Ganga Pilgrimage, Kali Nadi Doab Fertility, and Western UP's Newest District</h2>
<p>Kasganj — the headquarters of Kasganj district in Uttar Pradesh (carved from Etah district in 2008), one of UP's newest districts on the Ganga-Kali Nadi Doab (the Soron town (Shukrakshetra) in Kasganj district is one of the most significant Ganga pilgrimage towns in western UP — it is located on the Ganga and is associated with the legend that Shukracharya (the guru of the asuras in Hindu mythology) meditated here; the Soron Ganga mela (fair) attracts enormous numbers of pilgrims; the Ganga at Soron is a particularly sacred bathing site; the Kali Nadi (a major Ganga tributary from the Himalayan foothills) flows through Kasganj district; the district is in the fertile Doab (between the Ganga and Kali Nadi) producing rice, wheat, mustard, and sugarcane; Kasganj town itself has significant sugar and molasses industries; the Sahawar and Amanpur areas of Kasganj are significant towns; the district borders Mathura, Aligarh, and Etah; the district has a significant Sufi heritage — the Kasganj dargah (shrine) tradition is part of the broader western UP Sufi network), and a city of sacred Ganga and fertile Doab — is western UP's most pilgrim-accessible new district. From birthday parties in Kasganj to celebration cakes — RedHeart covers all Kasganj zones: Kasganj town, Soron, Sahawar, Amanpur, Patiyali, Ganjdundwara.</p>
<p>Our Kasganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasganj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasganj town, Soron, Sahawar, Amanpur, Patiyali, Ganjdundwara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kasganj?", answer: "Yes, same-day cake delivery is available across all Kasganj areas — Kasganj town, Soron, Sahawar, Amanpur, and Patiyali — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kasganj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kasganj delivery." },
      { question: "Do you deliver midnight cakes in Kasganj?", answer: "Yes, midnight birthday cake delivery is available across Kasganj town and Soron zones." }
    ]
  },

  "pilibhit": {
    cityName: "Pilibhit",
    metaTitle: "Cake Delivery in Pilibhit | Tiger Reserve Bamboo Nepal Border UP | RedHeart",
    metaDescription: "Order cakes online in Pilibhit. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pilibhit",
    metaKeyword: "cake delivery pilibhit, order cake online pilibhit, birthday cake pilibhit, custom cake pilibhit, same day cake delivery pilibhit Tiger Reserve bamboo bansuri flute Gola Ramganga Nepal border Terai UP",
    footerContent: `
<h2>Cake Delivery in Pilibhit — Pilibhit Tiger Reserve's Bamboo Terai, Bansuri Flute Craft, and Nepal's Sharda River Border</h2>
<p>Pilibhit — the headquarters of Pilibhit district in Uttar Pradesh, one of the most ecologically rich Terai districts bordering Nepal — famous for both wildlife conservation and a unique musical instrument craft (the Pilibhit Tiger Reserve (PTR) — notified as a Project Tiger reserve in 2008 — covers the Terai forests of Pilibhit-Bahraich-Shahjahanpur; the reserve has one of India's highest tiger densities for its area; the reserve has excellent grassland and bamboo-Sal mixed forest habitat; the Sharda River (Kali Ganga — the sacred river flowing from Sarda in Nepal) forms the northern boundary of Pilibhit district with Nepal; the Pilibhit district is one of India's most famous centres for bamboo bansuri (bamboo flute) making — particularly the professional-grade transverse flute used in Hindustani classical music; the Pilibhit bansuri makers supply bamboo flutes to classical musicians across India (the instrument associated with Lord Krishna and Hindustani classical tradition); the craft uses Bambusa bamboo from the Terai forests; the Ramganga River originates near Pilibhit's border with Uttarakhand and flows through the district; the Oel (Pilibhit) area has a significant sugar mill and agricultural market; sugarcane, wheat, and rice are the major crops in the fertile Terai soils), and a city of tiger bamboo forests and Krishna's flute — is UP's most melodically wild Terai district. From birthday parties in Pilibhit to celebration cakes — RedHeart covers all Pilibhit zones: Pilibhit town, Bisalpur, Puranpur, Barkhera, Amariya, Gola, Marori.</p>
<p>Our Pilibhit cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Pilibhit Tiger Reserve / Bansuri Flute / Sharda Nepal Border-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pilibhit, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pilibhit town, Bisalpur, Puranpur, Barkhera, Amariya, Gola, Marori</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Tiger Reserve Fondant, Bansuri Flute Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pilibhit?", answer: "Yes, same-day cake delivery is available across all Pilibhit areas — Pilibhit town, Bisalpur, Puranpur, Barkhera, and Amariya — for orders placed before 3 PM." },
      { question: "Do you have Pilibhit Tiger Reserve and Bansuri Flute-themed cakes?", answer: "Yes! The Pilibhit Tiger Reserve (one of India's highest tiger-density reserves in bamboo-Sal Terai forest) and the Pilibhit bamboo bansuri craft (the transverse bamboo flute used in Hindustani classical music — Krishna's instrument — made from Terai bamboo by master craftsmen) inspire our most melodically wild Pilibhit fondant cakes." },
      { question: "Are eggless cakes available in Pilibhit?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pilibhit delivery." }
    ]
  },

  "nawada": {
    cityName: "Nawada",
    metaTitle: "Cake Delivery in Nawada | Kakolat Waterfall Rajgir Adjacent Bihar | RedHeart",
    metaDescription: "Order cakes online in Nawada. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nawada",
    metaKeyword: "cake delivery nawada, order cake online nawada, birthday cake nawada, custom cake nawada, same day cake delivery nawada Kakolat Waterfall natural pool Bihar Panna hills Rajgir adjacent Chota Nagpur plateau",
    footerContent: `
<h2>Cake Delivery in Nawada — Kakolat Waterfall's Natural Pool, Rajgir's Buddhist Proximity, and Panna Hills Heritage</h2>
<p>Nawada — the headquarters of Nawada district in Bihar, a district between the Bihar plains and the Chota Nagpur plateau transition zone — known for its spectacular waterfall and Buddhist heritage proximity (the Kakolat Waterfall (Kakolat, Nawada district) is one of Bihar's most magnificent natural sites — a multi-tiered waterfall falling 160 feet (45-55 metres) into a natural pool surrounded by rocky forest; the Kakolat pool is a rare natural swimming pool of clear water in Bihar, fed by the waterfall; the site is extremely popular for picnics, especially during monsoon; local legend holds that bathing at Kakolat delivers one from the cycle of rebirth (moksha); the Nawada district is adjacent to Nalanda district (with the Nalanda University ruins — UNESCO World Heritage Site and one of the world's greatest ancient universities) and Rajgir (Buddhist pilgrimage city — where Buddha delivered many important discourses and the first Buddhist council was held); the Nawada area has the Panna Hills (a range of the Chota Nagpur plateau's western extensions) — a significant forested ridge; the district has significant maize and rice cultivation; the Nawada town has a historical connection to the Magadha Empire (the region was part of the core Magadha heartland); the Rajauli and Gobindpur areas are significant towns in Nawada district), and a city of waterfalls and ancient Magadha empire territory — is Bihar's most naturally beautiful southern Bihar plains district. From birthday parties in Nawada to celebration cakes — RedHeart covers all Nawada zones: Nawada town, Rajauli, Nardiganj, Warsaliganj, Gobindpur, Sirdala, Hisua.</p>
<p>Our Nawada cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kakolat Waterfall / Nalanda-Rajgir Buddhist Proximity-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawada, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawada town, Rajauli, Nardiganj, Warsaliganj, Gobindpur, Sirdala, Hisua</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Kakolat Waterfall Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nawada?", answer: "Yes, same-day cake delivery is available across all Nawada areas — Nawada town, Rajauli, Nardiganj, Warsaliganj, and Gobindpur — for orders placed before 3 PM." },
      { question: "Do you have Kakolat Waterfall-themed cakes in Nawada?", answer: "Yes! The Kakolat Waterfall (160 feet, with a natural pool of clear water — Bihar's most magnificent natural waterfall, where bathing is said to grant moksha) inspires our most naturally refreshing Nawada fondant cakes." },
      { question: "Are eggless cakes available in Nawada?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nawada delivery." }
    ]
  },

  "sheikhpura": {
    cityName: "Sheikhpura",
    metaTitle: "Cake Delivery in Sheikhpura | Bihar Smallest District Patna Adjacent | RedHeart",
    metaDescription: "Order cakes online in Sheikhpura. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sheikhpura",
    metaKeyword: "cake delivery sheikhpura, order cake online sheikhpura, birthday cake sheikhpura, custom cake sheikhpura, same day cake delivery sheikhpura Bihar smallest Patna adjacent Phalgu River Magadha Rajgir proximity Bihar",
    footerContent: `
<h2>Cake Delivery in Sheikhpura — Bihar's Smallest District, Patna's Agricultural Hinterland, and Ancient Magadha Territory</h2>
<p>Sheikhpura — the headquarters of Sheikhpura district in Bihar (carved from Lakhisarai in 1994), one of Bihar's smallest districts by area and population — a compact agricultural district between Patna, Nalanda, and Lakhisarai (Sheikhpura district is one of the most densely agricultural small districts of Bihar — primarily producing wheat, rice, maize, and mustard in the fertile Magadha plains; the district is part of ancient Magadha — the heartland of the Magadha Empire (Bimbisara, Ajatashatru, Nanda, Maurya dynasties) that dominated Indian history from the 6th century BCE to the Gupta period; Sheikhpura borders Patna (Bihar's capital) district to the west and Nalanda district (Nalanda University UNESCO site) to the south; the Rajgir pilgrimage (Buddhist, Jain, Hindu — Buddha delivered discourses here, the first Buddhist Council was held here, Mahavira also lived here) is accessible via Sheikhpura; the Phalgu River (Falgu — the sacred river of Gaya) system is in this region; the Barbigha town (Sheikhpura district) has a significant local market; the district has the Mahua (a tribal tree — Madhuca longifolia — whose flowers are used for folk alcohol and food) tree tradition; the Chewara area is a significant town in the district; the district experiences Bihar floods through the Phalgu-Kiul river system), and a city of ancient Magadha territory and Patna's quiet hinterland — is Bihar's most compact plains district. From birthday parties in Sheikhpura to celebration cakes — RedHeart covers all Sheikhpura zones: Sheikhpura town, Barbigha, Chewara, Ariari, Shekhopur Sarai.</p>
<p>Our Sheikhpura cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheikhpura, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheikhpura town, Barbigha, Chewara, Ariari, Shekhopur Sarai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sheikhpura?", answer: "Yes, same-day cake delivery is available across Sheikhpura town, Barbigha, Chewara, and Ariari for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sheikhpura?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sheikhpura delivery." },
      { question: "Do you deliver midnight cakes in Sheikhpura?", answer: "Yes, midnight birthday cake delivery is available across Sheikhpura town and Barbigha zones." }
    ]
  },

  "munger": {
    cityName: "Munger",
    metaTitle: "Cake Delivery in Munger | Bihar Yoga School Mir Kasim Ganga Bihar | RedHeart",
    metaDescription: "Order cakes online in Munger. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Munger",
    metaKeyword: "cake delivery munger, order cake online munger, birthday cake munger, custom cake munger, same day cake delivery munger Bihar School of Yoga Swami Satyananda Saraswati Mir Kasim Ganga Bihar Arms factory",
    footerContent: `
<h2>Cake Delivery in Munger — Bihar School of Yoga's Global Ashram, Mir Kasim's Last Stand, and Historic Arms Factory on the Ganga</h2>
<p>Munger — the headquarters of Munger district in Bihar, one of Bihar's most historically significant and internationally famous cities — known globally for yoga and for its colonial-era arms manufacturing (the Bihar School of Yoga (BSY) — founded by Swami Satyananda Saraswati (1923-2009) in 1963 at Munger — is one of the world's most important and influential yoga institutions; the Ganga Darshan ashram of the Bihar School of Yoga in Munger has trained thousands of yoga teachers, sadhaks, and students from across India and internationally since the 1960s; the BSY's systematic presentation of Yoga using the metaphor of "Yoga University" and the publication of the "Satyananda Yoga" style have made the institution globally influential; the BSY publishes Yoga Magazine and its textbook "Asana Pranayama Mudra Bandha" (published 1969) remains one of the most used yoga textbooks in the world; the Munger Fort (Mir Kasim's fort) is a historical fort on a rocky hill above the Ganga; Munger was the last capital of Mir Qasim (Nawab of Bengal) — who retreated to Munger after being defeated by the British East India Company (1760); Mir Kasim lost the critical Battle of Buxar (1764) after allying with the Nawab of Awadh and Mughal Emperor Shah Alam II against the British; the Government Arms Factory, Munger (established 1904) — later Ishapore Rifle Factory (connected) — is one of India's oldest arms manufacturing units producing hunting rifles and sporting arms; the Sita Kund (hot springs associated with Sita's Agni Pariksha) and Karna Chaura (associated with Karna of the Mahabharata) are mythological sites in Munger; the Ganga at Munger is wide and scenic), and a city of global yoga and colonial arms — is Bihar's most internationally renowned spiritual and industrial city. From birthday parties in Munger to celebration cakes — RedHeart covers all Munger zones: Munger town, Jamalpur, Kharagpur, Surajgarha, Dharhara, Teghra, Asarganj.</p>
<p>Our Munger cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bihar School of Yoga / Munger Fort Mir Kasim / Ganga Sita Kund-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Munger, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Munger town, Jamalpur, Kharagpur, Surajgarha, Dharhara, Teghra, Asarganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Bihar School of Yoga Fondant, Ganga Ghat Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Munger?", answer: "Yes, same-day cake delivery is available across all Munger areas — Munger town, Jamalpur, Kharagpur, Surajgarha, and Dharhara — for orders placed before 3 PM." },
      { question: "Do you have Bihar School of Yoga and Munger Fort-themed cakes?", answer: "Yes! The Bihar School of Yoga (founded by Swami Satyananda Saraswati in 1963 — one of the world's most influential yoga institutions, whose textbook 'Asana Pranayama Mudra Bandha' has trained yoga teachers globally) and the Munger Fort (Mir Qasim's last capital before the Battle of Buxar) inspire our most serenely powerful and historically charged Munger fondant cakes." },
      { question: "Are eggless cakes available in Munger?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Munger delivery." }
    ]
  },

  "kalahandi": {
    cityName: "Kalahandi",
    metaTitle: "Cake Delivery in Kalahandi | Junagarh Fort Harishankar Temple Odisha | RedHeart",
    metaDescription: "Order cakes online in Kalahandi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kalahandi",
    metaKeyword: "cake delivery kalahandi, order cake online kalahandi, birthday cake kalahandi, custom cake kalahandi, same day cake delivery kalahandi Junagarh Fort Harishankar waterfall temple Tel River cotton Odisha tribal poverty crisis",
    footerContent: `
<h2>Cake Delivery in Kalahandi — Junagarh Fort's Kingdom Legacy, Harishankar's Sacred Waterfall Temple, and Odisha's Tribal Heartland</h2>
<p>Kalahandi — the headquarters of Kalahandi district in Odisha, a district historically associated with India's severe poverty discussions and now undergoing significant transformation through irrigation and tribal development (the Kalahandi-Bolangir-Koraput (KBK) region was identified in the 1980s-90s as one of India's most poverty-stricken and drought-prone areas; the Kalahandi district in particular received intense media coverage for severe drought-related famines, starvation deaths, and the practice of child selling — brought to national attention primarily by journalist P. Sainath through his "Everybody Loves a Good Drought" (1996); post-2000, significant irrigation projects (the Indravati and Tel River systems), MGNREGA employment, and government programmes have substantially changed conditions; the Junagarh Fort (Kalahandi Fort) — in Junagarh town, the historical capital of the Kalahandi Kingdom — is the palace-fort of the Kalahandi Maharajas; the Kalahandi royal family ruled a significant tribal kingdom; the Harishankar temple complex (Bolangir district border with Kalahandi) — a sacred Shiva temple at the base of a forest waterfall in the Gandhamardhan hills — is one of Odisha's most beautiful pilgrimage sites; the Tel River (a major Mahanadi tributary) flows through Kalahandi; the district now has significant paddy and cotton cultivation in the irrigated Bhawanipatna and Dharmagarh areas; the Lanjigarh area (Vedanta bauxite refinery location — adjacent to the Niyamgiri Hills controversy in Rayagada-Kalahandi)), and a city of tribal kingdom history and extraordinary transformation — is Odisha's most resilience-defining western district. From birthday parties in Kalahandi to celebration cakes — RedHeart covers all Kalahandi zones: Bhawanipatna (Kalahandi HQ), Junagarh, Dharmagarh, Kesinga, Narla, Madanpur Rampur, Lanjigarh.</p>
<p>Our Kalahandi cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Junagarh Fort / Harishankar Waterfall / Tel River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalahandi (Bhawanipatna), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhawanipatna, Junagarh, Dharmagarh, Kesinga, Narla, Madanpur Rampur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Junagarh Fort Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kalahandi (Bhawanipatna)?", answer: "Yes, same-day cake delivery is available across all Kalahandi areas — Bhawanipatna, Junagarh, Dharmagarh, Kesinga, and Narla — for orders placed before 3 PM." },
      { question: "Do you have Junagarh Fort and Harishankar Waterfall-themed cakes?", answer: "Yes! The Junagarh Fort (palace of the Kalahandi Maharajas in the historical kingdom capital) and the Harishankar temple complex (a sacred Shiva shrine at a forest waterfall in the Gandhamardhan hills — one of Odisha's most beautiful pilgrimage sites) inspire our most royally forested Kalahandi fondant cakes." },
      { question: "Are eggless cakes available in Kalahandi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Kalahandi delivery." }
    ]
  },

  "nuapada": {
    cityName: "Nuapada",
    metaTitle: "Cake Delivery in Nuapada | Sunabeda Plateau Jhia Dhara Odisha | RedHeart",
    metaDescription: "Order cakes online in Nuapada. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nuapada",
    metaKeyword: "cake delivery nuapada, order cake online nuapada, birthday cake nuapada, custom cake nuapada, same day cake delivery nuapada Sunabeda Wildlife Sanctuary plateau Khairabad Jhia Dhara waterfall Chhattisgarh border Odisha",
    footerContent: `
<h2>Cake Delivery in Nuapada — Sunabeda Wildlife Plateau, Jhia Dhara Waterfall, and Chhattisgarh Border Forest</h2>
<p>Nuapada — the headquarters of Nuapada district in Odisha (carved from Kalahandi in 1993), one of Odisha's most forested and wildlife-rich western districts on the Chhattisgarh border (the Sunabeda Wildlife Sanctuary — Odisha's largest wildlife sanctuary by area (600+ sq km) in the Sunabeda Plateau (high-altitude plateau of the Mahanadi headwaters zone) — protects tigers, leopards, wild elephants, wild boar, and diverse wildlife; the Sunabeda Plateau (at ~900-1,000 metres) is a remote, forested highland with spectacular views; the Jhia Dhara waterfall (near Nuapada) is a significant local natural attraction; the Mahanadi River originates in the adjacent area (Sihawa, Chhattisgarh, near the border with Nuapada); the district is the westernmost extension of Odisha's tribal landscape into the Chhattisgarh plateau; Nuapada district has significant Gond and Kondh tribal communities; the district economy is primarily forest-based and agricultural (rice, pulses, minor forest produce — tendu patta, mahua flower, amla); the Khairabad area is a significant town; the Sinapali tehsil borders Chhattisgarh's Jashpur and Raipur areas), and a city of forested plateau and Mahanadi headwaters — is Odisha's most westerly high-plateau wildlife district. From birthday parties in Nuapada to celebration cakes — RedHeart covers all Nuapada zones: Nuapada town, Khariar Road, Sinapali, Boden, Komna, Tureikela.</p>
<p>Our Nuapada cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nuapada, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nuapada town, Khariar Road, Sinapali, Boden, Komna, Tureikela</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Sunabeda Plateau Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nuapada?", answer: "Yes, same-day cake delivery is available across all Nuapada areas — Nuapada town, Khariar Road, Sinapali, Boden, and Komna — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nuapada?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Nuapada delivery." },
      { question: "Do you deliver midnight cakes in Nuapada?", answer: "Yes, midnight birthday cake delivery is available across Nuapada town and Khariar Road zones." }
    ]
  },

  "bagalkot": {
    cityName: "Bagalkot",
    metaTitle: "Cake Delivery in Bagalkot | Pattadakal UNESCO Aihole Badami Karnataka | RedHeart",
    metaDescription: "Order cakes online in Bagalkot. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bagalkot",
    metaKeyword: "cake delivery bagalkot, order cake online bagalkot, birthday cake bagalkot, custom cake bagalkot, same day cake delivery bagalkot Pattadakal UNESCO Aihole Badami Chalukya temples Karnataka Malaprabha River",
    footerContent: `
<h2>Cake Delivery in Bagalkot — Pattadakal's UNESCO Chalukya Temples, Aihole's Temple Laboratory, and Badami Cave Frescoes</h2>
<p>Bagalkot — the headquarters of Bagalkot district in Karnataka, home to three of India's most extraordinary and historically pivotal temple complexes — together representing the birth of Deccan temple architecture (the Pattadakal (Pattadakal Group of Monuments — UNESCO World Heritage Site, inscribed 1987) — 22 km from Badami — is a UNESCO Heritage complex of 10 temples built in the 7th-8th century CE by the Chalukya dynasty of Badami; Pattadakal is the point where North Indian (Nagara/Indo-Aryan) and South Indian (Dravida/Vesara) temple architecture styles were synthesized for the first time in Indian history; the Virupaksha temple at Pattadakal (728 CE) — one of the finest complete Dravida temples in South India — was the model for the Kailasanatha temple at Ellora (the world's largest monolithic rock-cut structure); the Aihole (Aivalli — 30 km from Badami) is called the "Cradle of Indian Architecture" — over 125 temples from the 4th-12th century CE (Guptas through Rashtrakutas) representing the experimental laboratory of Indian temple architecture; the Durga temple and Ladkhan temple at Aihole are among the oldest surviving Hindu temples; the Badami Cave temples (6th century CE Chalukya) are rock-cut cave temples with exceptional Vaishnavism (Trivikrama, Vishnu's cosmic forms) and Shaivism frescoes; the Malaprabha River backwater (from Almatti Dam — one of Karnataka's largest dams) has submerged parts of old Bagalkot town; the old Bagalkot town was partially submerged by the Almatti reservoir, and the new Bagalkot was built on higher ground), and a city of UNESCO temples and submerged heritage — is Karnataka's most architecturally consequential district. From birthday parties in Bagalkot to celebration cakes — RedHeart covers all Bagalkot zones: Bagalkot town, Badami, Guledagudda, Ilkal, Mudhol, Hungund, Jamkhandi.</p>
<p>Our Bagalkot cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Pattadakal UNESCO / Aihole Cradle of Architecture / Badami Cave-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bagalkot, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bagalkot town, Badami, Guledagudda, Ilkal, Mudhol, Hungund, Jamkhandi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Pattadakal UNESCO Fondant, Badami Cave Fondant, Coconut, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bagalkot?", answer: "Yes, same-day cake delivery is available across all Bagalkot areas — Bagalkot town, Badami, Guledagudda, Ilkal, Mudhol, and Hungund — for orders placed before 3 PM." },
      { question: "Do you have Pattadakal UNESCO and Aihole Cradle of Architecture-themed cakes?", answer: "Yes! Pattadakal (UNESCO World Heritage — where North and South Indian temple architecture were synthesized for the first time, with the Virupaksha temple 728 CE that modelled Ellora's Kailasanatha) and Aihole (125 temples — the 4th-12th century experimental 'laboratory' of Indian temple architecture) inspire our most architecturally epoch-making Bagalkot fondant cakes." },
      { question: "Are eggless cakes available in Bagalkot?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Bagalkot delivery." }
    ]
  },

  "chitradurga": {
    cityName: "Chitradurga",
    metaTitle: "Cake Delivery in Chitradurga | Seven-Round Fort Obavva Karnataka | RedHeart",
    metaDescription: "Order cakes online in Chitradurga. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chitradurga",
    metaKeyword: "cake delivery chitradurga, order cake online chitradurga, birthday cake chitradurga, custom cake chitradurga, same day cake delivery chitradurga Chitradurga Fort seven rounds Onake Obavva Murugha Math Tungabhadra Karnataka",
    footerContent: `
<h2>Cake Delivery in Chitradurga — Chitradurga Fort's Seven Walls, Onake Obavva's Heroic Pestle Fight, and Murugha Math's Sacred Heritage</h2>
<p>Chitradurga — the headquarters of Chitradurga district in Karnataka, home to one of India's most dramatic hillforts and one of Karnataka's most celebrated heroic folk legends (the Chitradurga Fort (Elusuttina Kote — "Fort of Seven Rounds") — built on a complex of granite outcrops over multiple centuries (14th-18th century CE, under Nayaka rulers, then Hyder Ali and Tipu Sultan fortified it further) — is one of Karnataka's most spectacular forts; the fort's remarkable natural-granite-boulder walls (18 km perimeter, 38 gates — including the famous Kathale Onakalave, the dark inner gate) integrate the natural rocky landscape with man-made walls creating an almost impregnable fortress; the legend of Onake Obavva (Obavva of the pestle — Obavva was a washerwoman/soldier's wife who single-handedly defended a gap (Obavvana Kindi — Obavva's hole) in the fort wall against the Hyder Ali soldiers using a rice pestle (onake) when her husband was away; her story is celebrated as one of Karnataka's greatest acts of individual heroism; she is commemorated in Karnataka schools and history); the Murugha Mutt of Chitradurga (one of Karnataka's most important Lingayat religious institutions — the Jagadguru of the Murugha Math has significant spiritual authority in Karnataka; the recent controversy around the 2022 POCSO case involving the pontiff drew national attention); the Vedavati River (a Tungabhadra tributary) flows through the district; Chitradurga has significant wind energy development on the rocky plateau), and a city of granite heroism and Lingayat faith — is Karnataka's most fortress-dramatic central district. From birthday parties in Chitradurga to celebration cakes — RedHeart covers all Chitradurga zones: Chitradurga town, Davangere (adjacent), Holalkere, Hosadurga, Molakalmuru, Challakere, Hiriyur.</p>
<p>Our Chitradurga cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Chitradurga Fort Seven Rounds / Onake Obavva Pestle / Elusuttina Kote-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitradurga, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitradurga town, Holalkere, Hosadurga, Molakalmuru, Challakere, Hiriyur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chitradurga Fort Fondant, Onake Obavva Fondant, Coconut, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chitradurga?", answer: "Yes, same-day cake delivery is available across all Chitradurga areas — Chitradurga town, Holalkere, Hosadurga, Molakalmuru, Challakere, and Hiriyur — for orders placed before 3 PM." },
      { question: "Do you have Chitradurga Fort and Onake Obavva-themed cakes?", answer: "Yes! The Chitradurga Fort (Elusuttina Kote — seven-round granite fort with 38 gates, 18 km perimeter, integrating natural boulders into the walls) and Onake Obavva (the heroic washerwoman who single-handedly defended a gap in the fort using a rice pestle against Hyder Ali's soldiers) inspire our most heroically granite Chitradurga fondant cakes." },
      { question: "Are eggless cakes available in Chitradurga?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Chitradurga delivery." }
    ]
  },

  "nellore": {
    cityName: "Nellore",
    metaTitle: "Cake Delivery in Nellore | Pulicat Lake Shrimp Capital Sri Ranganathaswamy Andhra | RedHeart",
    metaDescription: "Order cakes online in Nellore. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nellore",
    metaKeyword: "cake delivery nellore, order cake online nellore, birthday cake nellore, custom cake nellore, same day cake delivery nellore Pulicat Lake flamingo Nellore sheep breed Udayagiri Fort Sangam Chennakesava temple Andhra Pradesh",
    footerContent: `
<h2>Cake Delivery in Nellore — Pulicat Lake's Flamingo Flamingos, Nellore Sheep Breed, and Sri Ranganathaswamy's Sacred Pennar</h2>
<p>Nellore — the headquarters of Sri Potti Sri Ramulu Nellore district in Andhra Pradesh, the largest city in South AP between Hyderabad and Chennai — a city of ecological magnificence and agricultural distinction (Pulicat Lake (Pulicat Lake Bird Sanctuary) — on the coast of Nellore district, 60 km from Nellore city — is India's second-largest brackish water lagoon (after Chilika) and one of India's most important migratory bird habitats; Pulicat Lake receives spectacular flamingo (both Greater and Lesser flamingo), pelican, painted stork, and shorebird migrations; the Nellore sheep (Jodipi/Nellore breed) — a large, long-legged, white sheep breed native to the Nellore-Prakasam area — is one of India's most significant meat sheep breeds, adapted to the hot semi-arid Andhra conditions; the breed is exported internationally; the Pennar River (Uttara Pinakini) flows into the Bay of Bengal near Nellore — the Sangam where the Pennar meets the sea at Nellore town is a significant pilgrim bathing spot; the Sri Ranganathaswamy temple at Somasila (Nellore district) on the Pennar River gorge has a Vishnu deity; the Udayagiri Fort (Udayagiri — Nellore district) is a significant medieval fort; the Nellore-Gudur belt is one of AP's most important chilli and rice production zones; the Sarvepalli Radhakrishnan (India's second President and great philosopher-statesman) was born in Thiruttani, Tamil Nadu but associated with Andhra educational traditions; SPSR Nellore district is named after the AP political leader Sri Potti Sri Ramulu), and a city of flamingo lakes and Nellore sheep exports — is South Andhra's most ecologically and agriculturally distinguished coastal city. From birthday parties in Nellore to celebration cakes — RedHeart covers all Nellore zones: Nellore town, Gudur, Kavali, Sullurpeta, Atmakur, Narasaraopet adjacent, Venkatagiri.</p>
<p>Our Nellore cake range: Chocolate, Black Forest, Red Velvet, Coconut (Bay of Bengal!), Mango, Butterscotch, Photo Cakes, Fondant Pulicat Flamingo Lake / Pennar River Sangam / Nellore Sheep-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nellore, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nellore town, Gudur, Kavali, Sullurpeta, Atmakur, Venkatagiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Pulicat Flamingo Fondant, Pennar Sangam Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nellore?", answer: "Yes, same-day cake delivery is available across all Nellore areas — Nellore town, Gudur, Kavali, Sullurpeta, Atmakur, and Venkatagiri — for orders placed before 3 PM." },
      { question: "Do you have Pulicat Lake Flamingo and Nellore Sheep-themed cakes?", answer: "Yes! The Pulicat Lake Bird Sanctuary (India's second-largest brackish lagoon — spectacular flamingo, pelican, and shorebird migrations) and the Nellore sheep breed (a large, internationally exported meat sheep adapted to Andhra heat) inspire our most ecologically and agriculturally distinguished Nellore fondant cakes." },
      { question: "Are eggless cakes available in Nellore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Nellore delivery." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/order-cake-online/${slug}`;
    const payload = {
      category: "Cakes",
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
        { label: "Cakes", url: "/order-cake-online" },
        { label: `Online Cake Delivery in ${data.cityName}`, url: cityUrl },
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
