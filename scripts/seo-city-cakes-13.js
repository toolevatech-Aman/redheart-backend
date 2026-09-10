// Cakes Batch 13 — 15 cities:
// Rajasthan: Jaisalmer, Churu, Pali, Tonk
// UP: Hapur, Mainpuri
// Karnataka: Raichur, Hassan
// Kerala: Palakkad
// Bihar: Samastipur, Kishanganj
// West Bengal: Bankura, Bardhaman (Burdwan)
// Haryana: Sonipat, Bhiwani

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "jaisalmer": {
    cityName: "Jaisalmer",
    metaTitle: "Cake Delivery in Jaisalmer | Golden City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Jaisalmer. Same-day delivery across Jaisalmer. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jaisalmer",
    metaKeyword: "cake delivery jaisalmer, order cake online jaisalmer, birthday cake jaisalmer, custom cake jaisalmer, same day cake delivery jaisalmer golden fort amar sagar road hanuman chowk",
    footerContent: `
<h2>Cake Delivery in Jaisalmer — Golden City of India, Living Fort, and Thar Desert's Heart</h2>
<p>Jaisalmer — one of the world's most stunning desert cities, the "Golden City" (Jaisalmer Fort — Sonar Quila — is the world's only "living fort" where 3,000+ people still reside inside its 12th-century walls; built in 1156 CE by Rao Jaisal of the Bhati Rajput clan using honey-coloured Jaisalmer sandstone that glows gold at sunrise and sunset — making the entire city shimmer in golden light), home to the Sam Sand Dunes (the most dramatic sand dunes in the Thar Desert — the setting of the most spectacular desert camel safaris, sunset dune photography, and folk music performances in India), the havelis of Patwon ki Haveli and Salim Singh ki Haveli (among the finest examples of Rajasthani merchant architecture), and a city close to the Pokhran Nuclear Test Site (where India's Smiling Buddha and Shakti nuclear tests were conducted) — is India's most magical desert city. From birthday parties in the residential Amar Sagar Road area to tourist resort cakes, from anniversary surprises near Hanuman Chowk to army cantonment celebration cakes — RedHeart covers all Jaisalmer zones: Central (Hanuman Chowk, Sadar Bazar, Gadsisar Road), North (Amar Sagar Road, Lodurva Road, Barmer Road), South (Sam Road, Pokaran Road, Ramkunda), East (Jodhpur Road, Shiv Road), West (Pakistani Border belt, Tanot, Longewala).</p>
<p>Our Jaisalmer cake range: Chocolate, Black Forest, Red Velvet, Kesar-Malai (Marwari desert special!), Mango, Photo Cakes, Fondant Golden Fort / Camel Desert-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jaisalmer, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanuman Chowk, Sadar Bazar, Gadsisar Road, Amar Sagar Road, Sam Road, Fort area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Malai, Golden Fort Fondant, Chocolate, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jaisalmer?", answer: "Yes, same-day cake delivery is available across all Jaisalmer areas — Hanuman Chowk, Sadar Bazar, Gadsisar Road, and Amar Sagar Road — for orders placed before 3 PM." },
      { question: "Do you make Golden Fort / Sonar Quila-themed cakes in Jaisalmer?", answer: "Yes! Jaisalmer's iconic Golden Fort (Sonar Quila) — the only living fort in the world — is our most popular fondant cake theme here, with intricate golden sandstone detailing perfect for Jaisalmer birthdays." },
      { question: "Are eggless cakes available in Jaisalmer?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jaisalmer delivery." }
    ]
  },

  "churu": {
    cityName: "Churu",
    metaTitle: "Cake Delivery in Churu | Shekhawati Desert Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Churu. Same-day delivery across Churu. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Churu",
    metaKeyword: "cake delivery churu, order cake online churu, birthday cake churu, custom cake churu, same day cake delivery churu civil lines station road sujangarh rajgarh sethani",
    footerContent: `
<h2>Cake Delivery in Churu — Shekhawati's Painted Haveli City, Extreme Heat Record-Holder, and Rajasthan's NRI-Remittance Hub</h2>
<p>Churu — a major city in the Shekhawati region of northern Rajasthan, famous for the spectacular painted havelis of the Marwari merchant class (the Shekhawati region's havelis — with brilliant fresco murals covering every surface, depicting mythological scenes, polo games, trains, and even early European-influenced motifs — are called "the open-air art gallery of Rajasthan" and "the Rajasthan of an older world"), the city that holds the record for India's highest recorded temperature (50.8°C, recorded in May 2019 — among the hottest places in the inhabited world), and a city with a huge Marwari merchant diaspora (the Churu belt's Agarwal and Jain merchant communities have spread across India and globally, sending remittances that funded the spectacular havelis centuries ago) — is a city of extreme desert beauty and merchant heritage. From birthday parties in the Civil Lines residential area to corporate cakes at the large trading firms, from anniversary surprises near the painted havelis of Sujangarh to student cakes near the Churu government colleges — RedHeart covers all Churu zones: Central (Civil Lines, Station Road, Gandhinagar), North (Sujangarh Road, Bikaner Road, Rajgarh), South (Ratangarh Road, Taranagar, Fatehpur Road), East (Jhunjhunu Road, Pilani Road), West (Sri Ganganagar Road, Sardarshahr).</p>
<p>Our Churu cake range: Chocolate, Black Forest, Red Velvet, Mango, Kesar-Malai (Marwari), Photo Cakes, Fondant Shekhawati Haveli-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gandhinagar, Sujangarh Road, Bikaner Road, Ratangarh Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Malai, Shekhawati Haveli Fondant, Chocolate, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Churu?", answer: "Yes, same-day cake delivery is available across all Churu areas — Civil Lines, Station Road, Gandhinagar, and Sujangarh Road — for orders placed before 3 PM." },
      { question: "Do you have Shekhawati painted-haveli themed cakes in Churu?", answer: "Yes! The spectacular painted havelis of the Shekhawati region — with their brilliant fresco murals and architectural artistry — inspire our Shekhawati Haveli fondant cakes, a uniquely Rajasthani design." },
      { question: "Are eggless cakes available in Churu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Churu delivery." }
    ]
  },

  "pali": {
    cityName: "Pali",
    metaTitle: "Cake Delivery in Pali | Textile City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Pali. Same-day delivery across Pali. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Pali",
    metaKeyword: "cake delivery pali, order cake online pali, birthday cake pali, custom cake pali rajasthan, same day cake delivery pali ranakpur road sojati gate jodhpur road bandhi road",
    footerContent: `
<h2>Cake Delivery in Pali — Rajasthan's Textile City, Ranakpur Jain Temple's Gateway, and Marwar's Dyeing Hub</h2>
<p>Pali — Rajasthan's 8th-largest city in the Marwar region, the "Textile City of Rajasthan" (Pali has the largest concentration of textile dyeing and finishing units in Rajasthan — the Pali textile RIICO estate is one of India's most important but also most polluting textile clusters, recently subject to major cleanliness drives on the Bandi River), the gateway to Ranakpur Jain Temple (one of the five holiest temples in Jainism — the Chaumukha Temple built in 1437 CE has 1,444 individually carved marble pillars, none identical, making it one of the greatest achievements of medieval Indian architecture; Ranakpur is 100 km from Pali), and a major marble processing city (Rajasthan's marble from Udaipur belt is polished and finished in Pali's factories) — is a city of industrial significance and religious gateway importance. From birthday parties in the Sojati Gate residential belt to corporate cakes at the large textile units, from anniversary surprises in the Bandhi Road area to student cakes near the Pali engineering colleges — RedHeart covers all Pali zones: Central (Sojati Gate, Station Road, Bandhi Road), North (Jodhpur Road, Marwar Junction, Bali), South (Ranakpur Road, Sumerpur, Jalore Road), East (Beawar Road, Ajmer Road), West (Falna, Bali, Khimsar).</p>
<p>Our Pali cake range: Chocolate, Black Forest, Red Velvet, Mango, Kesar-Malai (Marwari), Photo Cakes, Fondant Ranakpur Temple-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pali, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sojati Gate, Station Road, Bandhi Road, Jodhpur Road, Ranakpur Road, Sumerpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Malai, Ranakpur Temple Fondant, Chocolate, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pali?", answer: "Yes, same-day cake delivery is available across all Pali areas — Sojati Gate, Station Road, Bandhi Road, and Jodhpur Road — for orders placed before 3 PM." },
      { question: "Do you have Ranakpur Jain Temple-themed cakes in Pali?", answer: "Yes! The Ranakpur Chaumukha Temple — with its 1,444 unique marble pillars, a masterpiece of Jain architecture — inspires our Ranakpur Temple fondant cake, a uniquely spiritual and artistic design for Pali's Jain community." },
      { question: "Are eggless cakes available in Pali?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pali delivery." }
    ]
  },

  "tonk": {
    cityName: "Tonk",
    metaTitle: "Cake Delivery in Tonk | Nawabs City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Tonk. Same-day delivery across Tonk. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Tonk",
    metaKeyword: "cake delivery tonk, order cake online tonk, birthday cake tonk, custom cake tonk rajasthan, same day cake delivery tonk civil lines jaipur road kota road sunehri kothi",
    footerContent: `
<h2>Cake Delivery in Tonk — Rajasthan's Only Muslim Nawab State, Sunehri Kothi's Golden Chambers, and Bisalpur Dam's City</h2>
<p>Tonk — a small city in eastern Rajasthan with a unique history: it was the only princely state in Rajasthan ruled by a Muslim Nawab (the Afghan Nawabs of Tonk — established by Amir Khan Pindari in 1806 — governed Tonk for 150 years, creating a sophisticated court culture with a large collection of rare Arabic, Persian, and Urdu manuscripts that now form the Maulana Abul Kalam Azad Arabic and Persian Research Institute), home to the Sunehri Kothi ("Golden Mansion" — a 19th-century palace decorated floor-to-ceiling with gold leaf, mirror mosaic, and elaborate stonework in the most exquisite Mughal-Rajput style — one of the least-known but most spectacular interiors in Rajasthan), close to the Bisalpur Dam (Rajasthan's largest freshwater reservoir, providing water to Jaipur — an engineering triumph that holds 1,100+ million cubic metres of water on the Banas River), and a city known for the Tonk-Sawai Madhopur belt's agricultural wealth — is a city of hidden magnificence. From birthday parties in the Civil Lines area to corporate cakes near the large water project offices, from anniversary surprises near the historic Nawab-era monuments to student cakes near the Tonk colleges — RedHeart covers all Tonk zones: Central (Civil Lines, Station Road, Jaipur Road), North (Bisalpur Dam Road, Devli Road), South (Kota Road, Bundi Road, Uniara), East (Sawai Madhopur Road, Malpura), West (Ajmer Road, Chaksu Road).</p>
<p>Our Tonk cake range: Chocolate, Black Forest, Red Velvet, Mango, Kesar-Malai (Nawabi Rajasthani), Photo Cakes, Fondant Sunehri Kothi / Nawab heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tonk, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Jaipur Road, Kota Road, Bisalpur Road, Devli Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Malai, Sunehri Kothi Fondant, Chocolate, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tonk?", answer: "Yes, same-day cake delivery is available across all Tonk areas — Civil Lines, Station Road, Jaipur Road, and Kota Road — for orders placed before 3 PM." },
      { question: "Do you make Sunehri Kothi-themed cakes in Tonk?", answer: "Yes! The Sunehri Kothi (Golden Mansion) — Tonk's spectacular gold-and-mirror palace — is one of Rajasthan's most unique heritage sites. Our Sunehri Kothi fondant cake replicates the golden chamber artistry in edible form." },
      { question: "Are eggless cakes available in Tonk?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tonk delivery." }
    ]
  },

  "hapur": {
    cityName: "Hapur",
    metaTitle: "Cake Delivery in Hapur | NCR Fringe UP | RedHeart",
    metaDescription: "Order cakes online in Hapur. Same-day delivery across Hapur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Hapur",
    metaKeyword: "cake delivery hapur, order cake online hapur, birthday cake hapur, custom cake hapur, same day cake delivery hapur civil lines garhmukteshwar road meerut road bulandshahr road",
    footerContent: `
<h2>Cake Delivery in Hapur — NCR's Eastern Fringe, Paper Mill City, and Garh Ganga Pilgrimage Gateway</h2>
<p>Hapur — an NCR-adjacent city in western Uttar Pradesh, the headquarters of Hapur district (one of UP's newest districts, carved out of Ghaziabad in 2011), known for its paper and printing industry (Hapur has a concentration of paper mills and small-scale printing and packaging units that supply the greater Delhi-NCR market), the gateway to Garh Mukteshwar (a major Hindu pilgrimage site on the Ganga, 25 km from Hapur, where the Kartik Purnima fair draws lakhs of pilgrims for the sacred Gangasnan), and a rapidly urbanising city as NCR expansion pushes eastward — is a city of growing residential importance. From birthday parties in the Civil Lines area to corporate cakes at the paper mills, from anniversary surprises in the Garhmukteshwar Road belt to student cakes near Hapur's expanding colleges — RedHeart covers all Hapur zones: Central (Civil Lines, Station Road, GT Road), North (Meerut Road, Pilkhua Road, Dhaulana), South (Bulandshahr Road, Simbhaoli), East (Garhmukteshwar Road, Kanker Khera), West (Ghaziabad Road, Dasna, Delhi Road).</p>
<p>Our Hapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hapur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, GT Road, Meerut Road, Bulandshahr Road, Garhmukteshwar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hapur?", answer: "Yes, same-day cake delivery is available across all Hapur areas — Civil Lines, Station Road, GT Road, Meerut Road, and Garhmukteshwar Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hapur delivery." },
      { question: "Do you deliver midnight cakes in Hapur?", answer: "Yes, midnight birthday cake delivery is available across Hapur's central and residential zones." }
    ]
  },

  "mainpuri": {
    cityName: "Mainpuri",
    metaTitle: "Cake Delivery in Mainpuri | Cycle City UP | RedHeart",
    metaDescription: "Order cakes online in Mainpuri. Same-day delivery across Mainpuri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mainpuri",
    metaKeyword: "cake delivery mainpuri, order cake online mainpuri, birthday cake mainpuri, custom cake mainpuri, same day cake delivery mainpuri civil lines agra road kanpur road etawah road",
    footerContent: `
<h2>Cake Delivery in Mainpuri — Cycle Manufacturing City, Yadav Belt's Heart, and Yamuna-Isan Doab Hub</h2>
<p>Mainpuri — a historically significant city in central Uttar Pradesh, one of India's most important cycle manufacturing centres (Mainpuri has a large cluster of cycle and cycle component manufacturers — bicycle frames, rims, handles, and accessories are produced in Mainpuri and supplied to cycle brands across India; Mainpuri is second only to Ludhiana in India's cycle manufacturing geography), the heart of the Yadav political belt in UP (Mainpuri is the parliamentary constituency of Mulayam Singh Yadav's family — his son Akhilesh Yadav has been MP from Mainpuri, making it one of the most politically sensitive seats in UP politics), and a city with a significant medieval heritage (the Sim Garh Fort and the old Mughal-era town structures) — is a city of political and industrial importance. From birthday parties in the Civil Lines area to corporate cakes at the large cycle factories, from anniversary surprises near the old Mainpuri palace ruins to student cakes near the Mainpuri colleges — RedHeart covers all Mainpuri zones: Central (Civil Lines, Station Road, Agra Road), North (Kanpur Road, Etah Road, Shikohabad Road), South (Etawah Road, Karhal, Jasrana), East (Firozabad Road, Shikohabad), West (Auraiya Road, Kishni).</p>
<p>Our Mainpuri cake range: Chocolate, Black Forest, Red Velvet, Mango (Yamuna belt Dussehri!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mainpuri, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Agra Road, Kanpur Road, Etawah Road, Shikohabad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mainpuri?", answer: "Yes, same-day cake delivery is available across all Mainpuri areas — Civil Lines, Station Road, Agra Road, and Etawah Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mainpuri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mainpuri delivery." },
      { question: "Do you deliver midnight cakes in Mainpuri?", answer: "Yes, midnight birthday cake delivery is available across Mainpuri's central and residential zones." }
    ]
  },

  "raichur": {
    cityName: "Raichur",
    metaTitle: "Cake Delivery in Raichur | Historic Fort City Karnataka | RedHeart",
    metaDescription: "Order cakes online in Raichur. Same-day delivery across Raichur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Raichur",
    metaKeyword: "cake delivery raichur, order cake online raichur, birthday cake raichur, custom cake raichur, same day cake delivery raichur civil station station road hyderabad road krishna river",
    footerContent: `
<h2>Cake Delivery in Raichur — Battleground of Vijayanagara and Bahmani, Krishna River Canal City, and North Karnataka's Cotton Hub</h2>
<p>Raichur — a historic city in North Karnataka on the Deccan Plateau, site of the famous Battle of Raichur (1520 CE — the decisive military engagement where the Vijayanagara Empire under Krishnadevaraya crushed the Bidar Sultanate to recapture Raichur, considered Krishnadevaraya's greatest military triumph and a turning point in Deccan history), home to the impressive Raichur Fort (a massive 15th-century fortress featuring Qutb Shahi, Bidar, and later Maratha architectural elements), a major city in India's thermal power generation landscape (the Raichur Thermal Power Station — RTPS — was Karnataka's largest coal-based power plant for decades), and the commercial hub of the Krishna-Tungabhadra doab region (one of Karnataka's richest cotton and sunflower-growing zones) — is a city of historical depth and agricultural significance. From birthday parties in the Civil Station area to corporate cakes at the large power plant township, from anniversary surprises near the historic Raichur Fort to student cakes near the Raichur University campus — RedHeart covers all Raichur zones: Central (Civil Station, Station Road, Hyderabad Road), North (Manvi Road, Sindhanur, Lingsugur), South (Bellary Road, Mudgal, Kavital), East (Hyderabad Road, Yeragera), West (Kushtagi Road, Devadurga).</p>
<p>Our Raichur cake range: Chocolate, Black Forest, Red Velvet, Mango (Raichur's local Banganapalli!), Butterscotch, Photo Cakes, Fondant Raichur Fort-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raichur, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Station, Station Road, Hyderabad Road, Manvi Road, Bellary Road, Fort area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Raichur Fort Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Raichur?", answer: "Yes, same-day cake delivery is available across all Raichur areas — Civil Station, Station Road, Hyderabad Road, Manvi Road, and Bellary Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Raichur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Raichur delivery." },
      { question: "Do you deliver midnight cakes in Raichur?", answer: "Yes, midnight birthday cake delivery is available across Raichur's central and residential zones." }
    ]
  },

  "hassan": {
    cityName: "Hassan",
    metaTitle: "Cake Delivery in Hassan | Hoysala Temple City Karnataka | RedHeart",
    metaDescription: "Order cakes online in Hassan. Same-day delivery across Hassan. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Hassan",
    metaKeyword: "cake delivery hassan, order cake online hassan, birthday cake hassan, custom cake hassan, same day cake delivery hassan BM road hoysala circuit belur halebid city centre",
    footerContent: `
<h2>Cake Delivery in Hassan — Gateway to Hoysala Temples, Hemavathi River, and Western Ghats' Coffee Country</h2>
<p>Hassan — the administrative headquarters of Hassan district in southern Karnataka, the gateway to the UNESCO World Heritage-listed Hoysala Temples (Belur and Halebid — the Chennakeshava Temple at Belur, 1117 CE, and the Hoysaleshwara Temple at Halebid, 1150 CE, are among the finest examples of medieval Hoysala architecture in the world; the intricate star-shaped platforms, the lathe-turned pillars, and the bands of sculpted friezes covering every centimetre of the temple walls represent a sculptural tradition without parallel in Asia; both sites are 40 km from Hassan), close to Shravanabelagola (the sacred Jain pilgrimage site where the 17-metre monolithic Gommateshwara statue — one of the world's largest free-standing monolithic statues — presides over the plains; Mahamastakabhisheka is held every 12 years), and centre of Hassan district's coffee-cardamom-pepper plantation economy — is a city of extraordinary cultural and natural surroundings. From birthday parties in the BM Road residential belt to corporate cakes at the large plantation offices, from anniversary surprises in the City Centre area to student cakes near Hassan's engineering colleges — RedHeart covers all Hassan zones: Central (BM Road, City Centre, Station Road), North (Belur Road, Sakleshpur Road, Channarayapatna), South (Mysore Road, Arkalgud, Arsikere Road), East (Holenarasipur Road, Mandya Road), West (Belur Road, Chikkamagaluru Road).</p>
<p>Our Hassan cake range: Chocolate, Black Forest, Red Velvet, Mango (Malnad Alphonso belt!), Coffee-Cream (Hassan's coffee country!), Photo Cakes, Fondant Hoysala Temple-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hassan, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">BM Road, City Centre, Station Road, Belur Road, Mysore Road, Sakleshpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coffee-Cream, Chocolate, Hoysala Temple Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Hoysala Temple-themed cakes in Hassan?", answer: "Yes! The UNESCO-listed Hoysala Temples at Belur and Halebid — among the world's greatest medieval sculpture sites — inspire our Hoysala Temple fondant cakes, with intricate temple tower designs celebrating Hassan's extraordinary cultural heritage." },
      { question: "Can I get same-day cake delivery in Hassan?", answer: "Yes, same-day cake delivery is available across all Hassan areas — BM Road, City Centre, Station Road, Belur Road, and Mysore Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hassan?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hassan delivery." }
    ]
  },

  "palakkad": {
    cityName: "Palakkad",
    metaTitle: "Cake Delivery in Palakkad | Silent Valley Kerala | RedHeart",
    metaDescription: "Order cakes online in Palakkad. Same-day delivery across Palakkad. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Palakkad",
    metaKeyword: "cake delivery palakkad, order cake online palakkad, birthday cake palakkad, custom cake palakkad, same day cake delivery palakkad fort maidan court road vittakattu road kalmandu",
    footerContent: `
<h2>Cake Delivery in Palakkad — Palakkad Gap's City, Silent Valley's Gateway, and Kerala-Tamil Nadu Bridge</h2>
<p>Palakkad — Kerala's 4th-largest city, geographically unique as the only major break in the Western Ghats mountain wall (the Palakkad Gap — a 32-km-wide natural passage through the Ghats — is the reason Palakkad has different climate, flora, and culture from the rest of Kerala; hot dry winds sweep through the gap, rice cultivation dominates rather than coconut palms, and the Palakkad-Tamil bridge creates a unique Tamil-Malayali cultural fusion), gateway to the Silent Valley National Park (one of India's last pristine tropical rainforests — the Silent Valley Conservation Campaign in 1973–85 was India's first successful mass environmental movement, which stopped a hydroelectric dam from flooding the valley, saving a rare ecological treasure), home to the Palakkad Fort (an 18th-century Hyder Ali-era fort — one of the best-preserved Mysorean fortifications in Kerala), and home to a large Tamil-speaking Palakkad Brahmin community (Palakkad Iyers — renowned for classical Carnatic music and a distinctive Tamil dialect) — is a city of unique ecological and cultural significance. From birthday parties in the Fort Maidan area to corporate cakes at the large agro-processing firms, from anniversary surprises in the Court Road belt to student cakes at the Palakkad NIT campus — RedHeart covers all Palakkad zones: Central (Fort Maidan, Court Road, MG Road), North (Shornur Road, Mannarkkad, Vittakattu Road), South (Coimbatore Road, Kanjikode, Walayar), East (Pollachi Road, Ottapalam Road), West (Malampuzha Road, Thrissur Road, Kalmandu).</p>
<p>Our Palakkad cake range: Chocolate, Black Forest, Red Velvet, Mango (Palakkad Alphonso!), Rice-Payasam Cream (local!), Photo Cakes, Fondant Silent Valley-theme / Palakkad Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palakkad, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fort Maidan, Court Road, MG Road, Shornur Road, Coimbatore Road, Kanjikode, NIT area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Silent Valley Fondant, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Palakkad?", answer: "Yes, same-day cake delivery is available across all Palakkad areas — Fort Maidan, Court Road, MG Road, Shornur Road, and Kanjikode — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Palakkad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Palakkad delivery." },
      { question: "Do you deliver cakes to NIT Palakkad campus?", answer: "Yes, the NIT Palakkad (National Institute of Technology Calicut's Palakkad campus) area and the Kanjikode residential zone are covered by our same-day delivery." }
    ]
  },

  "samastipur": {
    cityName: "Samastipur",
    metaTitle: "Cake Delivery in Samastipur | Railway Hub Bihar | RedHeart",
    metaDescription: "Order cakes online in Samastipur. Same-day delivery across Samastipur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Samastipur",
    metaKeyword: "cake delivery samastipur, order cake online samastipur, birthday cake samastipur, custom cake samastipur, same day cake delivery samastipur station road civil line darbhanga road begusarai road",
    footerContent: `
<h2>Cake Delivery in Samastipur — Bihar's Railway Junction, Litchi Belt's Commercial Centre, and Gandak Canal Town</h2>
<p>Samastipur — the headquarters of Samastipur district in North Bihar, an important railway junction (Samastipur Railway Junction is one of the busiest railway nodes in North Bihar, connecting Patna, Darbhanga, Muzaffarpur, Begusarai, and Barauni — thousands of trains pass through daily), located in Bihar's famous litchi and mango growing belt (Muzaffarpur and Samastipur districts together produce over 70% of India's litchi output — the Shahi litchi from this belt is GI-tagged and the sweetest in Asia), a commercial hub for the vast agricultural plains between the Ganga and Bagmati rivers, and home to a large sugar cane and jute processing industry — is a city of transit importance and agricultural wealth. From birthday parties in the Civil Line area to corporate cakes at the large sugar mills, from anniversary surprises in the Station Road belt to student cakes near the Samastipur colleges — RedHeart covers all Samastipur zones: Central (Civil Line, Station Road, Subhash Chowk), North (Darbhanga Road, Dalsinghsarai, Bibhutpur), South (Begusarai Road, Morwa, Ujiarpur), East (Barauni Road, Khagaria Road), West (Muzaffarpur Road, Pusa, Mohiuddinagar).</p>
<p>Our Samastipur cake range: Chocolate, Black Forest, Red Velvet, Litchi-Cream (North Bihar litchi!), Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Samastipur, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Line, Station Road, Subhash Chowk, Darbhanga Road, Begusarai Road, Muzaffarpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Litchi-Cream, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have litchi-flavoured cakes in Samastipur?", answer: "Yes! Samastipur district is part of North Bihar's GI-tagged Shahi litchi belt — the sweetest litchi in Asia. Our Litchi-Cream cake celebrates this local treasure with fresh litchi pulp and cream, available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Samastipur?", answer: "Yes, same-day cake delivery is available across all Samastipur areas — Civil Line, Station Road, Darbhanga Road, and Begusarai Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Samastipur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Samastipur delivery." }
    ]
  },

  "kishanganj": {
    cityName: "Kishanganj",
    metaTitle: "Cake Delivery in Kishanganj | Tea City Bihar | RedHeart",
    metaDescription: "Order cakes online in Kishanganj. Same-day delivery across Kishanganj. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kishanganj",
    metaKeyword: "cake delivery kishanganj, order cake online kishanganj, birthday cake kishanganj, custom cake kishanganj, same day cake delivery kishanganj station road thana chowk purnea road siliguri road",
    footerContent: `
<h2>Cake Delivery in Kishanganj — Bihar's Tea City, Northeast Gateway, and Mahananda River City</h2>
<p>Kishanganj — Bihar's northeasternmost district and city, bordering West Bengal, Nepal, and Sikkim, the "Tea City of Bihar" (Kishanganj is Bihar's only major tea-growing district — tea estates have been established here on the foothills of the Siliguri-Terai zone, and the "Bihar Tea" initiative is reviving a tea industry in the region), a major transit city on the NH-31 corridor connecting Bihar, West Bengal, and the Northeast states (thousands of trucks and travellers pass through Kishanganj daily en route to Siliguri, Sikkim, and Assam), and a city with a significant Muslim majority and Bengali-Maithili-Hindi multilingual character — is Bihar's easternmost commercial frontier. From birthday parties in the Station Road area to corporate cakes at the large trading firms, from Eid special cakes to anniversary surprises in the Thana Chowk area, from student cakes at Kishanganj Medical College to tea estate celebration cakes — RedHeart covers all Kishanganj zones: Central (Station Road, Thana Chowk, Main Market), North (Purnea Road, Araria Road), South (Siliguri Road, Dalkhola Road), East (West Bengal Border, Islampur Road), West (Purnea Road, Katihar Road).</p>
<p>Our Kishanganj cake range: Chocolate, Black Forest, Red Velvet, Assam-Bihar Tea Cream, Mango (Malda Alphonso proximity!), Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kishanganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Thana Chowk, Main Market, Purnea Road, Siliguri Road, Araria Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tea-Cream, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kishanganj?", answer: "Yes, same-day cake delivery is available across all Kishanganj areas — Station Road, Thana Chowk, Main Market, and Purnea Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kishanganj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kishanganj delivery." },
      { question: "Do you deliver midnight cakes in Kishanganj?", answer: "Yes, midnight birthday cake delivery is available across Kishanganj's central and residential zones." }
    ]
  },

  "bankura": {
    cityName: "Bankura",
    metaTitle: "Cake Delivery in Bankura | Bishnupur Heritage West Bengal | RedHeart",
    metaDescription: "Order cakes online in Bankura. Same-day delivery across Bankura. Birthday, cakes from ₹499.",
    h1: "Online Cake Delivery in Bankura",
    metaKeyword: "cake delivery bankura, order cake online bankura, birthday cake bankura, custom cake bankura, same day cake delivery bankura chhatna purandarpur bishnupur rs road hospital road",
    footerContent: `
<h2>Cake Delivery in Bankura — Bishnupur's Terracotta Temple Town, Bankura Horse's Homeland, and Rarh Bengal's Cultural Core</h2>
<p>Bankura — the headquarters of Bankura district in the Rarh region of West Bengal (the ancient laterite plateau between the Ganga delta and the Chhotanagpur Plateau), home to the Bishnupur temples (a cluster of magnificent 17th-century terracotta temples built by the Malla kings — including the Ras Mancha, Jor Bangla, and Shyam Rai temples — representing the most distinctive tradition of Bengali temple architecture, decorated with detailed terracotta panels of Ramayana, Mahabharata, and Krishnalila stories; Bishnupur is 35 km from Bankura city), birthplace of the Bankura Horse (a distinctive stylized terracotta horse — one of India's most recognisable folk art icons, with its characteristic arched neck and geometric patterning — used as a votive offering to Dharmaraj; the Bankura Horse's image has been used in everything from the Victoria Memorial to modern brand logos), and home to the Bishnupur Gharana of classical music — is a district of extraordinary cultural output per capita. From birthday parties in the RS Road area to corporate cakes at the large government offices, from anniversary surprises near Hospital Road to student cakes at Bankura Sammilani College — RedHeart covers all Bankura zones: Central (RS Road, Hospital Road, Station Road), North (Sonamukhi Road, Bishnupur Road, Onda), South (Purulia Road, Chhatna Road, Indpur), East (Barjora Road, Bankura-Masagram Rail area), West (Ranibandh, Jhargram Road).</p>
<p>Our Bankura cake range: Chocolate, Black Forest, Red Velvet, Mango (Malda Langra!), Butterscotch, Photo Cakes, Fondant Bankura Horse / Bishnupur Terracotta-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bankura, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">RS Road, Hospital Road, Station Road, Bishnupur Road, Sonamukhi Road, Purulia Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bankura Horse Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Bankura Horse-themed cakes in Bankura?", answer: "Yes! The iconic Bankura Horse — one of India's most recognised folk art symbols, the stylized terracotta horse from Rarh Bengal — is our signature fondant cake design in Bankura, celebrating the region's extraordinary artistic heritage." },
      { question: "Can I get same-day cake delivery in Bankura?", answer: "Yes, same-day cake delivery is available across all Bankura areas — RS Road, Hospital Road, Station Road, and Bishnupur Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bankura?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bankura delivery." }
    ]
  },

  "bardhaman": {
    cityName: "Bardhaman",
    metaTitle: "Cake Delivery in Bardhaman | Burdwan Rice City West Bengal | RedHeart",
    metaDescription: "Order cakes online in Bardhaman. Same-day delivery across Bardhaman. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bardhaman",
    metaKeyword: "cake delivery bardhaman, order cake online bardhaman burdwan, birthday cake bardhaman, custom cake bardhaman, same day cake delivery bardhaman curzon gate station road GCU sarbamangala",
    footerContent: `
<h2>Cake Delivery in Bardhaman — Bengal's Rice Bowl, Curzon Gate's City, and the University Town of East India</h2>
<p>Bardhaman (Burdwan) — West Bengal's 3rd-largest city, the headquarters of Purba Bardhaman district, the "Rice Bowl of Bengal" (Bardhaman district and the adjacent Hooghly, Birbhum, and Murshidabad districts form the most productive rice-growing region in India — the Boro, Aman, and Aus rice cultivation of Bardhaman feeds a significant portion of Bengal's population and has made the region prosperous), home to the University of Burdwan (one of West Bengal's large state universities, with 250+ affiliated colleges across five districts), the magnificent Curzon Gate (a triumphal arch built in 1903 to welcome Lord Curzon — a well-preserved colonial landmark), the Sarbamangala Temple (a major goddess temple attracting thousands daily), and an important coal and ceramic tile industrial hub (the Asansol-Durgapur-Bardhaman belt) — is a city of agricultural, educational, and industrial importance. From birthday parties in the GCU residential belt to corporate cakes at the large rice processing mills, from anniversary surprises near the Curzon Gate to student cakes near Bardhaman University — RedHeart covers all Bardhaman zones: Central (Curzon Gate, Station Road, Town Hall), North (GCU Colony, Burdwan University area, Kalna Road), South (Katwa Road, Ketugram Road, Memari Road), East (Asansol Road, Raniganj Road, Durgapur Road), West (Birbhum Road, Ausgram, Bhatar).</p>
<p>Our Bardhaman cake range: Chocolate, Black Forest, Red Velvet, Mango (Malda Himsagar!), Butterscotch, Photo Cakes, Fondant Curzon Gate / Bengal heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bardhaman, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Curzon Gate, Station Road, Town Hall, GCU Colony, Bardhaman University area, Kalna Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Curzon Gate Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bardhaman?", answer: "Yes, same-day cake delivery is available across all Bardhaman areas — Curzon Gate, Station Road, GCU Colony, Town Hall, and Bardhaman University area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bardhaman?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bardhaman delivery." },
      { question: "Do you deliver midnight cakes in Bardhaman?", answer: "Yes, midnight birthday cake delivery is available across Bardhaman's central and residential zones." }
    ]
  },

  "sonipat": {
    cityName: "Sonipat",
    metaTitle: "Cake Delivery in Sonipat | NCR Haryana | RedHeart",
    metaDescription: "Order cakes online in Sonipat. Same-day delivery across Sonipat. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Sonipat",
    metaKeyword: "cake delivery sonipat, order cake online sonipat, birthday cake sonipat, custom cake sonipat, same day cake delivery sonipat model town sector 14 kundli industrial area civil hospital",
    footerContent: `
<h2>Cake Delivery in Sonipat — Delhi's NCR Gateway, Kundli Industrial Park, and Haryana's Northern Commuter Hub</h2>
<p>Sonipat — one of the seven NCR districts of Haryana, a city directly bordering Delhi (Kundli, at Sonipat's southern tip, shares an invisible boundary with Narela in Delhi), home to the Kundli Industrial Estate (one of Haryana's largest and busiest industrial estates — auto components, FMCG packaging, textiles, steel fabrication, and pharmaceutical companies operate massive plants here), home to O.P. Jindal Global University (Sonipat has become one of India's top private university hubs — Ashoka University and O.P. Jindal Global University, both among India's highly ranked liberal arts universities, are located in Sonipat's outskirts), and a rapidly growing commuter city as Delhi expansion pushes northward — is a city of substantial NCR-driven growth. From birthday parties in the Model Town residential belt to corporate cakes at the large Kundli factories, from anniversary surprises in Sector 14 to campus cakes at the prestigious universities — RedHeart covers all Sonipat zones: Central (Civil Hospital Road, Model Town, Station Road), North (Sector 14, Rohtak Road, Ganaur), South (Kundli Industrial Area, Rai, Nathupur), East (Panipat Road, Kharkhoda), West (Gohana Road, Kharakpur, Murthal).</p>
<p>Our Sonipat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonipat, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, Sector 14, Kundli Industrial Area, Station Road, Rohtak Road, Rai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sonipat?", answer: "Yes, same-day cake delivery is available across all Sonipat areas — Model Town, Sector 14, Kundli Industrial Area, Station Road, and Rohtak Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to O.P. Jindal Global University and Ashoka University campus areas?", answer: "Yes, both O.P. Jindal Global University (JGLS) and Ashoka University campuses in the Sonipat area are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Sonipat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sonipat delivery." }
    ]
  },

  "bhiwani": {
    cityName: "Bhiwani",
    metaTitle: "Cake Delivery in Bhiwani | Boxing City Haryana | RedHeart",
    metaDescription: "Order cakes online in Bhiwani. Same-day delivery across Bhiwani. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bhiwani",
    metaKeyword: "cake delivery bhiwani, order cake online bhiwani, birthday cake bhiwani, custom cake bhiwani, same day cake delivery bhiwani civil lines model town tosham road loharu road boxing",
    footerContent: `
<h2>Cake Delivery in Bhiwani — India's Boxing Hub, Cotton Textile City, and Haryana's Wrestling-Boxing Heartland</h2>
<p>Bhiwani — Haryana's 5th-largest city, India's "Boxing Capital" (Bhiwani's Bhiwani Boxing Club — BBC — has produced a disproportionate number of India's Olympic and World Championship boxers including Vijender Singh (India's first Olympic boxing medal, Beijing 2008), Akhil Kumar, Jitender Kumar, and many more national champions; the boxing tradition here traces to the early 1980s when coach Jagdish Singh created a systematic training program in the small-town setting), a major cotton textile and synthetic fabric manufacturing city (Bhiwani's textile mills and power looms are among Haryana's largest employers), famous for the Bansilal Hill Fort and the ancient Shree Sheetla Mata temple, and home to the Chaudhary Bansi Lal University — is a city of sporting pride and textile industrial heritage. From birthday parties in the Civil Lines area to boxing champion celebration cakes at the Bhiwani Boxing Club, from anniversary surprises in the Model Town residential belt to student cakes at BLU University campus — RedHeart covers all Bhiwani zones: Central (Civil Lines, Model Town, Station Road), North (Loharu Road, Charkhi Dadri Road), South (Tosham Road, Mahendragarh Road, Tigrana), East (Rohtak Road, Jhajjar Road), West (Hisar Road, Kairu, Siwani).</p>
<p>Our Bhiwani cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Boxing Gloves / Championship-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhiwani, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Model Town, Station Road, Loharu Road, Tosham Road, Rohtak Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Boxing Championship Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhiwani?", answer: "Yes, same-day cake delivery is available across all Bhiwani areas — Civil Lines, Model Town, Station Road, Loharu Road, and Tosham Road — for orders placed before 3 PM." },
      { question: "Do you have Boxing Championship-themed cakes in Bhiwani?", answer: "Yes! Bhiwani's extraordinary boxing tradition — which produced Olympic medallist Vijender Singh and dozens of national champions — inspires our Boxing Champion fondant cake, a uniquely Bhiwani sports-themed design." },
      { question: "Are eggless cakes available in Bhiwani?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhiwani delivery." }
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
