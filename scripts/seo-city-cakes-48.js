// Cakes Batch 48 — 13 cities
// Gujarat: Gandhinagar, Bhuj/Kutch, Morbi, Navsari, Mehsana
// WB: Midnapore, Bankura, Birbhum (Suri), Murshidabad, Malda
// Haryana: Ambala, Panipat, Rohtak, Karnal (done batch 20s?), Sirsa
// Telangana: Mulugu (Sammakka Sarakka), Jayashankar Bhupalpally

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "gandhinagar": {
    cityName: "Gandhinagar",
    metaTitle: "Cake Delivery in Gandhinagar | Akshardham Sabarmati Gujarat Capital | RedHeart",
    metaDescription: "Order cakes online in Gandhinagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gandhinagar",
    metaKeyword: "cake delivery gandhinagar, order cake online gandhinagar, birthday cake gandhinagar, custom cake gandhinagar, same day cake delivery gandhinagar Akshardham Temple GIFT City Sabarmati Gujarat Capital planned city Swaminarayan",
    footerContent: `
<h2>Cake Delivery in Gandhinagar — Akshardham's Swaminarayan Grandeur, GIFT City's Financial Hub, and Gujarat's Planned Capital</h2>
<p>Gandhinagar — the capital of Gujarat, a planned capital city modelled on Chandigarh (both designed in the 1960s as planned state capitals) — home to one of India's most spectacular modern temples and India's first International Financial Service Centre (the Akshardham Temple (Gandhinagar Akshardham — built 1992 by BAPS Swaminarayan Sanstha; not to be confused with the larger Delhi Akshardham built in 2005) — the original Akshardham, made of pink sandstone from Rajasthan, with hand-carved sculptures of the life of Swaminarayan (1781-1830 CE — the founder of the Swaminarayan tradition of Vaishnava Bhakti) and 97 carved pillars and 10 carved domes; the Gandhinagar Akshardham was the inspiration for the Delhi version; the Swaminarayan Akshardham at Gandhinagar is one of India's most exquisitely carved modern temple complexes; the GIFT City (Gujarat International Finance Tec-City) — India's first operational Smart City and IFSC (International Financial Services Centre) — set up in Gandhinagar to compete with Singapore, Dubai, and London as a global financial services hub; the GIFT City houses SEBI International Financial Services Centre Authority (IFSCA), India INX (international stock exchange), NSE IFSC, and global financial institutions; the Dandi Kutir Museum (Gandhinagar — the world's largest museum dedicated to Mahatma Gandhi, covering his 150-year life and the Salt Satyagraha); the Indroda Nature Park (Dinosaur Museum — one of India's few dinosaur fossil parks, with actual dinosaur eggs and bones found in Gujarat); the Gandhinagar-Ahmedabad Metro now connects the two cities), and a city of Swaminarayan temple grandeur and global financial hub — is Gujarat's most spiritually Bhakti-sculptured and financially IFSC-smart-city capital. From birthday parties in Gandhinagar to celebration cakes — RedHeart covers all Gandhinagar zones: Gandhinagar city, Sectors, Adalaj, Kalol, Mansa, Kadi, Dehgam.</p>
<p>Our Gandhinagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Akshardham BAPS Swaminarayan / GIFT City IFSC / Dandi Kutir Gandhi Museum / Indroda Dinosaur-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhinagar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhinagar city, Adalaj, Kalol, Mansa, Kadi, Dehgam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Akshardham Fondant, GIFT City Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gandhinagar?", answer: "Yes, same-day cake delivery is available across all Gandhinagar areas — Gandhinagar city, Adalaj, Kalol, Mansa, and Kadi — for orders placed before 3 PM." },
      { question: "Do you have Akshardham Swaminarayan Temple and GIFT City-themed cakes?", answer: "Yes! The Akshardham, Gandhinagar (built 1992 BAPS Swaminarayan — the original Akshardham, with 97 hand-carved pillars and 10 carved domes in Rajasthan pink sandstone — the inspiration for the Delhi Akshardham) and the GIFT City (India's first Smart City and IFSC — competing with Singapore, Dubai, and London as a global financial hub) inspire our most Bhakti-sculpturally Swaminarayan and financially IFSC-globally smart Gandhinagar fondant cakes." },
      { question: "Are eggless cakes available in Gandhinagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gandhinagar delivery." }
    ]
  },

  "bhuj": {
    cityName: "Bhuj",
    metaTitle: "Cake Delivery in Bhuj | Kutch White Desert Rann Utsav Earthquake Gujarat | RedHeart",
    metaDescription: "Order cakes online in Bhuj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bhuj (Kutch)",
    metaKeyword: "cake delivery bhuj, order cake online bhuj, birthday cake bhuj, custom cake bhuj, same day cake delivery bhuj Rann of Kutch White Desert Rann Utsav 2001 Earthquake Bhuj Kutchi embroidery Pakistan border Gujarat",
    footerContent: `
<h2>Cake Delivery in Bhuj — Rann of Kutch's White Desert, Rann Utsav, 2001 Earthquake Rebirth, and Kutchi Craft Heritage</h2>
<p>Bhuj — the district headquarters of Kutch district in Gujarat (Kutch is India's largest district by area — 45,674 sq km — larger than several Indian states), the gateway to the Great Rann of Kutch — one of the world's most extraordinary natural landscapes (the Great Rann of Kutch (Rann = salt marsh) is the world's largest salt desert — a vast flat expanse of white salt crystals that extends for thousands of square kilometres on the border of India and Pakistan; in summer it is a shimmering white crystalline plain; in monsoon it fills with shallow water; the Rann of Kutch is also a significant flamingo breeding ground (the Little Rann has the Indian Wild Ass Sanctuary); the Rann Utsav (October-February) — the Gujarat government's annual tourism festival in the Rann — with full-moon nights on the white salt desert, cultural performances, Kutchi craft markets, folk music (Langa, Manganiyar), camel rides, and luxury tent accommodations — has become one of India's most popular winter tourism events; the 2001 Bhuj Earthquake (January 26, 2001 — Republic Day — Mw 7.7, one of India's deadliest earthquakes; killed ~20,000 people, injured 167,000, made 600,000 homeless; the Bhuj city was almost completely destroyed) and the subsequent extraordinary rebuilding of Bhuj (now one of India's most-cited post-disaster urban rebuilding success stories); the Kutchi embroidery, bandhani tie-dye, ajrakh block printing, and Rogan Art (GI — a unique 400-year-old art using castor oil paint on cloth; the Khatri family of Nirona, Kutch, are the only remaining practitioners) are Kutch's extraordinary craft traditions; the Aina Mahal (Hall of Mirrors — 18th century CE Kutchi palace with Dutch glass mirror-work) and Prag Mahal are Bhuj's heritage palaces), and a city of salt desert and Rogan Art craft — is Gujarat's most desertly salt-crystalline and crafts-GI-Rogan-exclusively surviving district. From birthday parties in Bhuj to celebration cakes — RedHeart covers all Bhuj zones: Bhuj city, Gandhidham, Anjar, Mandvi, Nakhtrana, Mundra, Abdasa, Rapar.</p>
<p>Our Bhuj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Rann of Kutch White Desert / Rann Utsav Full Moon / Kutchi Embroidery-Ajrakh / Rogan Art GI / Aina Mahal Mirror-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhuj (Kutch), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhuj city, Gandhidham, Anjar, Mandvi, Nakhtrana, Mundra, Abdasa, Rapar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Rann of Kutch Fondant, Rogan Art GI Fondant, Kutchi Embroidery Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhuj?", answer: "Yes, same-day cake delivery is available across all Bhuj areas — Bhuj city, Gandhidham, Anjar, Mandvi, Nakhtrana, and Mundra — for orders placed before 3 PM." },
      { question: "Do you have Rann of Kutch White Desert and Rogan Art GI-themed cakes?", answer: "Yes! The Great Rann of Kutch (world's largest salt desert — white crystalline expanse; Rann Utsav full-moon nights; flamingo breeding ground) and the GI Rogan Art (a unique 400-year-old castor-oil-paint art on cloth; only the Khatri family of Nirona, Kutch, practices it — on the verge of extinction) inspire our most desertly crystalline-white and artistically castor-oil-unique Bhuj fondant cakes." },
      { question: "Are eggless cakes available in Bhuj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhuj delivery." }
    ]
  },

  "morbi": {
    cityName: "Morbi",
    metaTitle: "Cake Delivery in Morbi | Ceramics Tiles Capital Machchhu Dam Gujarat | RedHeart",
    metaDescription: "Order cakes online in Morbi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Morbi",
    metaKeyword: "cake delivery morbi, order cake online morbi, birthday cake morbi, custom cake morbi, same day cake delivery morbi ceramic tiles capital India clock Machchhu Dam 1979 collapse Morbi bridge suspension Gujarat Saurashtra",
    footerContent: `
<h2>Cake Delivery in Morbi — Ceramic Tiles Capital of India, Machchhu Dam Tragedy, and Morbi Suspension Bridge</h2>
<p>Morbi — the district headquarters of Morbi district in Gujarat (created from Rajkot in 2013), one of India's most remarkable industrial small cities — the "Ceramic Tile Capital of India" (the Morbi district produces approximately 70-80% of India's total ceramic and vitrified tile output; Morbi's tile cluster is the world's second-largest ceramic manufacturing cluster (after Sassuolo, Italy); hundreds of tile manufacturing factories operate in the Morbi-Wankaner area, producing wall tiles, floor tiles, vitrified tiles, sanitaryware, and glazed tiles; Morbi ceramic tiles are exported to 150+ countries; the industry employs hundreds of thousands of workers; Morbi also produces clocks and is a significant clock/watch manufacturing hub; the Machchhu Dam Disaster (August 11, 1979) — when the Machchhu II Dam on the Machchhu River upstream of Morbi city burst during extreme monsoon floods; the flood wave swept through Morbi city in minutes; casualty estimates range from 1,000 to 25,000 people (official vs. unofficial estimates — one of independent India's worst dam-failure disasters; the disaster was suppressed in Indian media for years); the Morbi Suspension Bridge Collapse (October 30, 2022 — the colonial-era cable suspension bridge over the Machchhu River, recently renovated, collapsed killing 135 people in one of India's worst bridge disasters in recent memory; opened to tourists just days before), and a city of ceramic tile empire and tragic river history — is Gujarat's most ceramically tile-dominant and Machchhu-river-tragically remembered district. From birthday parties in Morbi to celebration cakes — RedHeart covers all Morbi zones: Morbi city, Wankaner, Maliya Miyana, Halvad, Tankara, Vankaner, Rajkot adjacent.</p>
<p>Our Morbi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morbi, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morbi city, Wankaner, Maliya Miyana, Halvad, Tankara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Morbi?", answer: "Yes, same-day cake delivery is available across all Morbi areas — Morbi city, Wankaner, Maliya Miyana, Halvad, and Tankara — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Morbi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Morbi delivery." },
      { question: "Do you deliver midnight cakes in Morbi?", answer: "Yes, midnight birthday cake delivery is available across Morbi city and Wankaner zones." }
    ]
  },

  "midnapore": {
    cityName: "Midnapore",
    metaTitle: "Cake Delivery in Midnapore | Freedom Fighter Uprising Subarnarekha West Bengal | RedHeart",
    metaDescription: "Order cakes online in Midnapore. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Midnapore (Medinipur)",
    metaKeyword: "cake delivery midnapore, order cake online midnapore, birthday cake midnapore, custom cake midnapore, same day cake delivery midnapore Medinipur freedom movement Chittagong Armoury Raid Subarnarekha Silai River West Bengal",
    footerContent: `
<h2>Cake Delivery in Midnapore — Bengal's Freedom Fighter Heartland, Subarnarekha River, and Contai Coast</h2>
<p>Midnapore (Medinipur) — the district headquarters of Paschim Medinipur district in West Bengal (the former Midnapore district was India's largest district by area; in 2002 it was divided into East Midnapore/Purba Medinipur and West Midnapore/Paschim Medinipur), one of Bengal's most freedom-movement-significant districts (the Midnapore district had one of the most intense freedom movement histories in Bengal; the Salt Satyagraha in Midnapore and the subsequent No-Tax campaign of the 1930s led to Midnapore being one of the first areas where the British lost civil administration control; three Collectors of Midnapore were assassinated by revolutionary nationalists (1931, 1932, 1933) — the only such series of revolutionary assassinations targeting administrators in British India; Khudiram Bose (one of India's youngest martyrs — executed at 18 years old in 1908 for the Muzaffarpur bomb conspiracy) was from Midnapore; Sucheta Kriplani (the first woman Chief Minister of any Indian state — UP, 1963-67) had Midnapore connections; the Tamluk (Tamralipta — an ancient port city in East Midnapore) was the port city documented in Ptolemy's Geography and in the Periplus of the Erythraean Sea as one of the most important ports in ancient Bengal; the Subarnarekha River (flowing from Jharkhand through Paschim Medinipur) and the Kangsabati (Kasai) River; the Bishnupur adjacent area has the famous Bishnupur Terracotta Temples), and a city of Bengal's freedom-fighter heartland and three-Collector revolution — is West Bengal's most nationally revolutionarily defiant and freedom-sacrifice-dense district. From birthday parties in Midnapore to celebration cakes — RedHeart covers all Midnapore zones: Midnapore town, Kharagpur, Jhargram, Ghatal, Salbani, Chandrakona, Narayan Garh.</p>
<p>Our Midnapore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnapore (Medinipur), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnapore town, Kharagpur, Jhargram, Ghatal, Salbani, Chandrakona</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Midnapore?", answer: "Yes, same-day cake delivery is available across all Midnapore areas — Midnapore town, Kharagpur, Jhargram, Ghatal, and Salbani — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Midnapore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Midnapore delivery." },
      { question: "Do you deliver midnight cakes in Midnapore?", answer: "Yes, midnight birthday cake delivery is available across Midnapore town and Kharagpur zones." }
    ]
  },

  "bankura": {
    cityName: "Bankura",
    metaTitle: "Cake Delivery in Bankura | Bishnupur Terracotta Temples Bankura Horse West Bengal | RedHeart",
    metaDescription: "Order cakes online in Bankura. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bankura",
    metaKeyword: "cake delivery bankura, order cake online bankura, birthday cake bankura, custom cake bankura, same day cake delivery bankura Bishnupur Terracotta Temples Malla Kingdom Bankura Horse GI Damodar River West Bengal Santhal tribal",
    footerContent: `
<h2>Cake Delivery in Bankura — Bishnupur's UNESCO Terracotta Temples, GI Bankura Horse, and Malla Kingdom Glory</h2>
<p>Bankura — the district headquarters of Bankura district in West Bengal, one of the most culturally and artistically extraordinary districts in India — home to Bishnupur's extraordinary terracotta temple cluster and the iconic Bankura Horse (the Bishnupur (55 km from Bankura town) is home to one of India's finest concentrations of terracotta architecture — the medieval Malla kingdom of Bengal (15th-18th century CE) built stunning terracotta temples (Rasmancha — 1600 CE, the oldest; Jorbangla Temple — 1655 CE; Shyamrai Temple — 1643 CE, with 5 hut-shaped sikhara towers; Madan Mohan Temple — 1694 CE, flat-roofed Bangla style; all with extraordinary terracotta panels depicting the Ramayana, Mahabharata, Puranas, and the Radha-Krishna lilas in miniature-style terracotta tiles and friezes — unique brick architecture that absorbed Mughal influences while remaining fundamentally Bengali; submitted for UNESCO inscription; Bishnupur's terracotta art tradition is alive — the terracotta craftsmen continue today); the Bankura Horse (GI — the stylized, long-necked abstract terracotta horse of Bankura, used as a votive offering to the god Dharmaraj and as a decorative folk art icon; the Bankura Horse is one of India's most recognizable folk art objects — used on logos, branding, and as a symbol of West Bengal's crafts tradition; the horse comes in multiple sizes from 4 inches to 4 feet); the Malla kingdom's Bishnupur was a significant centre of Hindustani classical music (the Bishnupur Gharana of classical music); the Susunia Hill (near Bankura) has an early Gupta inscription; the Jhilimili and Mukutmanipur areas are scenic), and a city of terracotta temple legacy and iconic horse folk art — is West Bengal's most terracotta-architecturally Malla-built and folk-art GI-horse-symbolic district. From birthday parties in Bankura to celebration cakes — RedHeart covers all Bankura zones: Bankura town, Bishnupur, Sonamukhi, Khatra, Barjora, Onda, Raipur, Kotulpur.</p>
<p>Our Bankura cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bishnupur Terracotta Temples Malla / Bankura Horse GI Folk Art / Rasmancha Bengal / Bishnupur Gharana Music-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bankura, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bankura town, Bishnupur, Sonamukhi, Khatra, Barjora, Onda, Raipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bishnupur Terracotta Fondant, Bankura Horse GI Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bankura?", answer: "Yes, same-day cake delivery is available across all Bankura areas — Bankura town, Bishnupur, Sonamukhi, Khatra, and Barjora — for orders placed before 3 PM." },
      { question: "Do you have Bishnupur Terracotta Temples and Bankura Horse GI-themed cakes?", answer: "Yes! The Bishnupur Terracotta Temples (Malla kingdom 15th-18th CE — Rasmancha 1600, Jorbangla, Shyamrai, Madan Mohan — extraordinary terracotta friezes of Ramayana-Mahabharata-Krishna in unique Bengali brick-Mughal fusion; UNESCO submission) and the GI Bankura Horse (the iconic long-necked terracotta votive horse — one of India's most recognized folk art symbols, from 4 inches to 4 feet) inspire our most terracotta-architecturally Malla-built and folk-art horse-galloping Bankura fondant cakes." },
      { question: "Are eggless cakes available in Bankura?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bankura delivery." }
    ]
  },

  "murshidabad": {
    cityName: "Murshidabad",
    metaTitle: "Cake Delivery in Murshidabad | Nawab Siraj ud Daulah Plassey Silk Bengal | RedHeart",
    metaDescription: "Order cakes online in Murshidabad. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Murshidabad",
    metaKeyword: "cake delivery murshidabad, order cake online murshidabad, birthday cake murshidabad, custom cake murshidabad, same day cake delivery murshidabad Nawab Siraj ud Daulah Plassey Battle Hazarduari Palace Silk Bagghi Bhagirathi West Bengal",
    footerContent: `
<h2>Cake Delivery in Murshidabad — Nawab Siraj-ud-Daulah's Bengal Capital, Battle of Plassey Legacy, and Hazarduari Palace</h2>
<p>Murshidabad — the district headquarters of Murshidabad district in West Bengal, one of the most historically pivotal cities in India — the city where the modern history of India was decisively changed (the Battle of Plassey (June 23, 1757) — where Robert Clive of the British East India Company defeated the Nawab of Bengal Siraj-ud-Daulah through treachery (the betrayal of Mir Jafar, the Nawab's commander, who switched sides during the battle) — is the decisive event that gave the British control of Bengal and eventually all of India; the Battle of Plassey is effectively the beginning of British India (the Raj); Murshidabad was the capital of the Nawabs of Bengal (the Nazims); Siraj-ud-Daulah (1733-1757 — the last independent Nawab of Bengal) was 23 years old when he died after Plassey; his story (including the Black Hole of Calcutta — a disputed event) has been at the centre of Bengal's historical consciousness; the Hazarduari Palace (1829-1837 CE — "Palace of Thousand Doors" — built by Nawab Nazim Nazir Ali; an Italian Palladian baroque palace with 1,000 real doors (including false ones); now a museum with one of the finest collections of Mughal and Nawabi artefacts — arms, paintings, manuscripts, clocks, Nawabi dress); the Imambara (Kathra Mosque) and the Siraj-ud-Daulah's tomb/shrine at Khushbagh; the Murshidabad Silk (GI — the famous Murshidabad Korial silk, woven on the banks of the Bhagirathi — historically supplied to Nawabs and royalty; now a niche high-luxury product); the Bagghi ghats and Bhagirathi River are scenic), and a city of the battle that changed Indian history and Hazarduari thousand doors — is West Bengal's most historically fateful and Nawabi-palatially thousand-doored city. From birthday parties in Murshidabad to celebration cakes — RedHeart covers all Murshidabad zones: Murshidabad town, Berhampore, Dhulian, Jangipur, Kandi, Lalbagh, Plassey.</p>
<p>Our Murshidabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Hazarduari Thousand Doors Palace / Battle of Plassey 1757 / Siraj-ud-Daulah Nawab / Murshidabad GI Silk-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Murshidabad, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Murshidabad town, Berhampore, Dhulian, Jangipur, Kandi, Lalbagh, Plassey</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hazarduari Palace Fondant, Plassey Battle Fondant, Murshidabad Silk Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Murshidabad?", answer: "Yes, same-day cake delivery is available across all Murshidabad areas — Murshidabad town, Berhampore, Dhulian, Jangipur, and Kandi — for orders placed before 3 PM." },
      { question: "Do you have Hazarduari Palace and Battle of Plassey 1757-themed cakes?", answer: "Yes! The Hazarduari Palace ('Palace of Thousand Doors' — 1829-1837 Italian Palladian baroque with 1000 real doors; now a museum of Nawabi-Mughal artefacts) and the Battle of Plassey (June 23, 1757 — the battle of treachery where Clive defeated Siraj-ud-Daulah through Mir Jafar's betrayal; effectively the beginning of British India and one of history's most consequential battles) inspire our most historically fateful and thousand-dooredly palatial Murshidabad fondant cakes." },
      { question: "Are eggless cakes available in Murshidabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Murshidabad delivery." }
    ]
  },

  "malda": {
    cityName: "Malda",
    metaTitle: "Cake Delivery in Malda | Farakka GI Mango Pandua Gaur Bengal | RedHeart",
    metaDescription: "Order cakes online in Malda. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Malda (English Bazar)",
    metaKeyword: "cake delivery malda, order cake online malda, birthday cake malda, custom cake malda, same day cake delivery malda GI Malda Mango Himsagar Fazli Gaur Pandua medieval capital Farakka Barrage Ganga West Bengal",
    footerContent: `
<h2>Cake Delivery in Malda — GI Malda Mango (Himsagar-Fazli), Gaur-Pandua Medieval Capital, and Farakka Barrage</h2>
<p>Malda (English Bazar) — the district headquarters of Malda district in West Bengal, one of West Bengal's most historically rich and mango-famous districts — the ancient capital of Bengal and home to GI mangoes (the Malda district (formerly Old Malda and English Bazar merged as the district HQ) is on the border of West Bengal and Bihar; the ancient city of Gaur (or Lakhnauti — the capital of the Bengal Sultanate from 1203-1575 CE and briefly of the Ilyas Shahi and Hussain Shahi dynasties) is 16 km from Malda; Gaur was once one of the most populous and magnificent cities in Asia; the Choto Sona Masjid (Golden Mosque — late 15th century CE — built of brick covered in terracotta with a golden finish, one of the finest mosques in medieval Bengal), Firoz Minar (a minaret), and the Dakhil Darwaza (a massive 15th-century CE fortified gateway) are the surviving monuments; the Pandua (Adina — 20 km from Malda) — the earlier capital before Gaur, has the Adina Mosque (built by Sikandar Shah 1364-75 CE — the largest mosque in the Indian subcontinent when built; now ruined but still magnificent) and the Eklakhi Mausoleum; the Malda GI Mangoes — Malda district is India's largest mango-producing district by quantity; the Himsagar (sweetest variety, green-skinned, extremely fragrant), Fazli (large, late-season, yellow), Lakshmanbhog (locally prized) and Khirsapat (a unique variety) are the famous Malda mango varieties; Malda mangoes are exported across India and internationally; the Farakka Barrage (52 km from Malda) — the controversial 2.2 km barrage on the Ganga (built 1975) to divert Ganga water to Calcutta Port's Hooghly — was a major India-Bangladesh water dispute trigger), and a city of Bengal Sultanate medieval capital ruins and India's largest mango district — is West Bengal's most historically sultanate-magnificent and GI mango-extensively producing district. From birthday parties in Malda to celebration cakes — RedHeart covers all Malda zones: Malda (English Bazar), Old Malda, Habibpur, Bamangola, Kaliachak, Manikchak, Ratua, Gajol.</p>
<p>Our Malda cake range: Chocolate, Mango (GI Himsagar!), Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Gaur Choto Sona Masjid Golden / Adina Mosque Pandua / Malda GI Himsagar Fazli Mango / Farakka Barrage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malda (English Bazar), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malda (English Bazar), Old Malda, Habibpur, Bamangola, Kaliachak, Manikchak, Gajol</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Himsagar Mango GI, Chocolate, Gaur Mosque Fondant, Pandua Adina Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Malda?", answer: "Yes, same-day cake delivery is available across all Malda areas — Malda (English Bazar), Old Malda, Habibpur, Bamangola, Kaliachak, and Manikchak — for orders placed before 3 PM." },
      { question: "Do you have GI Malda Himsagar Mango and Gaur-Pandua Medieval Bengal-themed cakes?", answer: "Yes! The GI Malda Mango (India's largest mango-producing district — Himsagar (sweetest, green-skinned, extremely fragrant), Fazli (large late-season), Lakshmanbhog, Khirsapat) and the Gaur-Pandua medieval Bengal Sultanate capitals (Choto Sona Masjid, Adina Mosque — once the largest in the Indian subcontinent, Dakhil Darwaza gate) inspire our most GI mango-fragrant and Bengal sultanate-ruinously magnificent Malda fondant cakes." },
      { question: "Are eggless cakes available in Malda?", answer: "Yes, all flavours — Himsagar Mango, Chocolate, Black Forest, Red Velvet — are available in eggless variants for Malda delivery." }
    ]
  },

  "ambala": {
    cityName: "Ambala",
    metaTitle: "Cake Delivery in Ambala | Cantonment Scientific Instruments Haryana Punjab Border | RedHeart",
    metaDescription: "Order cakes online in Ambala. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ambala",
    metaKeyword: "cake delivery ambala, order cake online ambala, birthday cake ambala, custom cake ambala, same day cake delivery ambala Cantonment scientific instruments Haryana Punjab border 1857 Mutiny air force station Tangri River",
    footerContent: `
<h2>Cake Delivery in Ambala — Scientific Instruments Capital, 1857 Mutiny Flashpoint, and India's Key Punjab-Haryana Crossroads</h2>
<p>Ambala — the district headquarters of Ambala district in Haryana, one of India's most strategically significant cities on the Delhi-Amritsar highway — known for its military cantonment and scientific instrument manufacturing (Ambala Cantonment (established 1843 by the British) is one of India's largest and oldest military cantonments — home to a significant Air Force Station and army base; the Ambala Cantonment played a critical role in the 1857 First War of Indian Independence: on May 10, 1857 — the Ambala cantonment sepoys were among the first to receive the greased cartridge orders that precipitated the mutiny; the 60th Bengal Native Infantry at Ambala refused the cartridges; the 1857 revolt began at Meerut on May 10; Ambala is one of the flashpoints; the Ambala Cantonment-City twin structure (British cantonment + Indian town) is a classic example of colonial spatial segregation; Ambala is the "Scientific Instruments Capital of India" — Ambala city has hundreds of manufacturers and traders of scientific instruments (microscopes, surgical instruments, laboratory equipment) that supply schools, colleges, hospitals, and labs across India; the Tangri River (a seasonal stream) flows near Ambala; the GT Road (Grand Trunk Road — one of Asia's oldest and longest roads, running from Chittagong to Kabul, passing through Delhi-Ambala-Amritsar-Lahore-Kabul) passes through Ambala — making it one of GT Road's most strategically significant towns), and a city of GT Road crossroads and scientific instrument manufacturing — is Haryana's most militarily cantonment-historic and scientifically instrument-producing district. From birthday parties in Ambala to celebration cakes — RedHeart covers all Ambala zones: Ambala City, Ambala Cantt, Naraingarh, Mullanpur, Barara, Sahzadpur, Pinjore adjacent.</p>
<p>Our Ambala cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambala, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambala City, Ambala Cantt, Naraingarh, Mullanpur, Barara, Sahzadpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ambala?", answer: "Yes, same-day cake delivery is available across all Ambala areas — Ambala City, Ambala Cantt, Naraingarh, Mullanpur, and Barara — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ambala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ambala delivery." },
      { question: "Do you deliver midnight cakes in Ambala?", answer: "Yes, midnight birthday cake delivery is available across Ambala City and Ambala Cantt zones." }
    ]
  },

  "panipat": {
    cityName: "Panipat",
    metaTitle: "Cake Delivery in Panipat | Three Battles of Panipat City of Weavers Haryana | RedHeart",
    metaDescription: "Order cakes online in Panipat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Panipat",
    metaKeyword: "cake delivery panipat, order cake online panipat, birthday cake panipat, custom cake panipat, same day cake delivery panipat Three Battles Babur Ibrahim Lodi Akbar Hemu Maratha 1761 City of Weavers handloom blanket Haryana",
    footerContent: `
<h2>Cake Delivery in Panipat — Three Battles That Changed Indian History, City of Weavers, and Haryana's Textile Legacy</h2>
<p>Panipat — the district headquarters of Panipat district in Haryana, one of the most historically significant cities in India — the site of three decisive battles that reshaped Indian history (the First Battle of Panipat (April 21, 1526) — Babur of Kabul defeated Ibrahim Lodi of the Delhi Sultanate using field artillery for the first time in Indian battlefield history; this battle established the Mughal Empire; the Second Battle of Panipat (November 5, 1556) — Akbar's forces (led by Bairam Khan) defeated Hemu (the Hindu general of the Suri dynasty, who had briefly captured Delhi) — consolidating the Mughal Empire; the Third Battle of Panipat (January 14, 1761) — Ahmad Shah Abdali (Durrani of Afghanistan) defeated the Marathas (the largest cavalry force India had ever assembled — 45,000 cavalry under the Bhau Sahib Vishwasrao and Viswasrao Peshwa) in one of South Asia's largest battles; the Maratha defeat at Panipat permanently checked their northward expansion and accelerated the decline of the Maratha Empire; Panipat is the "battlefield where Indian empires were made and broken"; the Kala Amb Memorial (Third Battle of Panipat memorial); the Devi Mandir (Ibrahim Lodi's tomb) are local monuments; Panipat is also called the "City of Weavers" — the handloom and powerloom industry of Panipat is significant; the Panipat woolen blanket and tafeta weaving; the Panipat district also has the Baholi area (near Kurukshetra)), and a city of three empire-changing battles and handloom weavers — is Haryana's most battlefieldedly decisive and textilely blanket-weaving historic city. From birthday parties in Panipat to celebration cakes — RedHeart covers all Panipat zones: Panipat city, Samalkha, Israna, Madlauda, Bapoli, Sanoli, Khatkar.</p>
<p>Our Panipat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Three Battles of Panipat / First Battle Babur Artillery / Third Battle 1761 Maratha / Kala Amb Memorial-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panipat, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panipat city, Samalkha, Israna, Madlauda, Bapoli, Sanoli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Three Battles Fondant, Babur First Battle Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Panipat?", answer: "Yes, same-day cake delivery is available across all Panipat areas — Panipat city, Samalkha, Israna, Madlauda, and Bapoli — for orders placed before 3 PM." },
      { question: "Do you have Three Battles of Panipat-themed cakes?", answer: "Yes! Three battles that remade India: First Battle (1526 — Babur's field artillery ended the Delhi Sultanate and founded the Mughal Empire), Second Battle (1556 — Akbar's forces consolidated Mughal power), Third Battle (1761 — Abdali crushed the Maratha Empire's northern ambitions) — all fought on this plain. These inspire our most empires-made-and-broken Panipat fondant cakes." },
      { question: "Are eggless cakes available in Panipat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Panipat delivery." }
    ]
  },

  "mulugu": {
    cityName: "Mulugu",
    metaTitle: "Cake Delivery in Mulugu | Sammakka Sarakka Medaram Tribal Festival Telangana | RedHeart",
    metaDescription: "Order cakes online in Mulugu. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mulugu",
    metaKeyword: "cake delivery mulugu, order cake online mulugu, birthday cake mulugu, custom cake mulugu, same day cake delivery mulugu Sammakka Sarakka Medaram Jatara world largest tribal festival Pranahita Godavari Telangana Koya tribal",
    footerContent: `
<h2>Cake Delivery in Mulugu — Medaram Sammakka-Sarakka Jatara, World's Largest Tribal Festival, and Pranahita River Gorge</h2>
<p>Mulugu — the district headquarters of Mulugu district in Telangana (one of the newly created districts in 2016 reorganisation), home to one of the world's most extraordinary religious festivals (the Medaram Sammakka Sarakka Jatara (Sammakka Saralamma Jatara) — held in the deep forest at Medaram village in Eturnagaram in Mulugu district, this is the world's largest tribal festival and one of India's largest festivals overall; held every two years (Magha Shudha Pournami — full moon of February), it draws 1-2 crore (10-20 million) pilgrims — a predominantly Koya and Lambada tribal community festival but attended by people from across Telangana, Andhra Pradesh, Chhattisgarh, Odisha, and Maharashtra; the festival commemorates Sammakka and Sarakka (Saralamma — mother and daughter) — Koya tribal warrior goddesses who fought against the Kakatiya rulers of Warangal in the 13th century and died in battle (their story is that they fought for their people's rights against forced tribute; Sammakka's body disappeared but in her place was a beehive — she is believed to have become divine; the pilgrims offer bangaram (jaggery) in exchange for vows fulfilled and to seek blessings, with each pilgrim offering a weight in jaggery equal to their own body weight if wishes come true); the Eturnagaram Wildlife Sanctuary (part of the Perur-Medaram forest in Mulugu district) is a significant wildlife sanctuary; the Pranahita River (joining the Godavari at Kaleshwaram) flows through the district; the Ramappa Temple (Palampet — one of Telangana's greatest temples, UNESCO 2021) is in the adjacent Mulugu/Warangal region), and a city of world-largest tribal jatara and Koya goddess worship — is Telangana's most tribally Sammakka-Koya festival and Godavari-forest-sacred district. From birthday parties in Mulugu to celebration cakes — RedHeart covers all Mulugu zones: Mulugu town, Venkatapuram, Eturnagaram, Wazeedu, Tadvai, Medaram village access.</p>
<p>Our Mulugu cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sammakka Sarakka Jatara World Largest Tribal / Medaram Forest Festival / Koya Tribal Goddess / Pranahita Godavari-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mulugu, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mulugu town, Venkatapuram, Eturnagaram, Wazeedu, Tadvai, Medaram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sammakka Sarakka Jatara Fondant, Koya Tribal Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mulugu?", answer: "Yes, same-day cake delivery is available across all Mulugu areas — Mulugu town, Venkatapuram, Eturnagaram, Wazeedu, and Tadvai — for orders placed before 3 PM." },
      { question: "Do you have Sammakka Sarakka Jatara World Largest Tribal Festival-themed cakes?", answer: "Yes! The Medaram Sammakka Sarakka Jatara (held every two years in Mulugu's deep Eturnagaram forest — 1-2 crore pilgrims; Koya-Lambada tribal festival commemorating mother-daughter warrior goddesses Sammakka and Sarakka who fought the Kakatiyas; pilgrims offer body-weight in jaggery for wishes granted — arguably the world's largest tribal religious gathering) inspires our most tribally Koya-jaggery-vow-fulfilling Mulugu fondant cakes." },
      { question: "Are eggless cakes available in Mulugu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mulugu delivery." }
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
