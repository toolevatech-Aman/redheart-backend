// Cakes Batch 45 — 13 cities
// Arunachal: Itanagar
// Assam: Goalpara, Nalbari, Sivsagar/Sibasagar
// Bihar: Siwan, Vaishali (Hajipur)
// Kerala: Thiruvananthapuram, Kozhikode, Thrissur, Kollam, Alappuzha
// Tamil Nadu: Coimbatore (check), Madurai (check) -- skipping confirmed done; fresh: Vellore, Salem

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "itanagar": {
    cityName: "Itanagar",
    metaTitle: "Cake Delivery in Itanagar | Arunachal Pradesh Capital Tribes Brahmaputra | RedHeart",
    metaDescription: "Order cakes online in Itanagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Itanagar",
    metaKeyword: "cake delivery itanagar, order cake online itanagar, birthday cake itanagar, custom cake itanagar, same day cake delivery itanagar Arunachal Pradesh capital Ita Fort Ganga Lake 26 major tribes Brahmaputra China border McMahon Line",
    footerContent: `
<h2>Cake Delivery in Itanagar — Arunachal Pradesh Capital, 26 Major Tribes, Ita Fort, and India's McMahon Line Frontier</h2>
<p>Itanagar — the capital of Arunachal Pradesh, the largest of the eight Northeast states by area (83,743 sq km) and the state with the highest density of tribal communities — a frontier city bordering China (the Arunachal Pradesh state shares an international border with Bhutan, China (Tibet), and Myanmar; the McMahon Line (drawn at the 1914 Simla Accord between British India and Tibet) is the de facto boundary between Arunachal Pradesh and Tibet (China), but China claims most of Arunachal Pradesh as "South Tibet" (Zangnan in Chinese) — making it one of the world's most contested territorial claims; Arunachal Pradesh has 26 major tribes and 100+ sub-tribes, each with distinct language, dress, and festivals — including the Adi, Nyishi, Galo, Apatani, Monpa, Wancho, Nocte, Tangsa, and Singpho communities; Itanagar (Ita = brick) gets its name from the 14th-15th century Ita Fort (brick fort) — the largest pre-modern fortification in the Northeast; the Ganga Lake (Ganga = local word for "dark lake") — also called Gyekar Sinyi — is a sacred lake near Itanagar with Buddhist significance; the Jawaharlal Nehru State Museum (Itanagar) documents Arunachal's tribal diversity; the Apatani tribe (Ziro Valley, Lower Subansiri) practices traditional paddy-cum-fish cultivation (a UNESCO-nominated traditional agricultural system) and is known for the Apatani women's nose plugs (Yapiung) and facial tattoos — once a beauty practice now being discontinued by young women; the Tawang Monastery (Tawang district, 3,048m — 6th century CE, the second largest Buddhist monastery in Asia after Lhasa's Drepung) is Arunachal's most iconic landmark; the state has the most per capita forest cover in India), and a city of 26-tribe diversity and China-disputed frontier — is Arunachal Pradesh's most tribally rich and China-border-contested capital. From birthday parties in Itanagar to celebration cakes — RedHeart covers all Itanagar zones: Itanagar, Naharlagun, Nirjuli, Banderdewa, Ziro, Pasighat, Along, Tawang.</p>
<p>Our Itanagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Ita Fort 14th Century / Apatani Tribe Ziro / Tawang Monastery Buddhist / 26 Tribes Arunachal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Itanagar, Arunachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Itanagar, Naharlagun, Nirjuli, Banderdewa, Ziro, Pasighat, Along</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ita Fort Fondant, Apatani Tribe Fondant, Tawang Monastery Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Itanagar?", answer: "Yes, same-day cake delivery is available across all Itanagar areas — Itanagar, Naharlagun, Nirjuli, Banderdewa, and Ziro — for orders placed before 3 PM." },
      { question: "Do you have Arunachal Tribes and Tawang Monastery-themed cakes?", answer: "Yes! Arunachal Pradesh's 26 major tribes (Adi, Nyishi, Galo, Apatani, Monpa, Wancho and more — each with distinct language and tradition), the Ita Fort (14th-15th century brick fortification — largest pre-modern fort in the Northeast, namesake of Itanagar), and Tawang Monastery (Asia's second-largest Buddhist monastery after Drepung, at 3,048m) inspire our most tribally diverse and frontierially Himalayan Itanagar fondant cakes." },
      { question: "Are eggless cakes available in Itanagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Itanagar delivery." }
    ]
  },

  "goalpara": {
    cityName: "Goalpara",
    metaTitle: "Cake Delivery in Goalpara | Brahmaputra Bhairabkunda Assam Meghalaya | RedHeart",
    metaDescription: "Order cakes online in Goalpara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Goalpara",
    metaKeyword: "cake delivery goalpara, order cake online goalpara, birthday cake goalpara, custom cake goalpara, same day cake delivery goalpara Brahmaputra Bhairabkunda Tura gateway Assam Meghalaya border Dudhnoi River",
    footerContent: `
<h2>Cake Delivery in Goalpara — Brahmaputra Gateway, Bhairabkunda Forest, and Meghalaya's Garo Hills Access</h2>
<p>Goalpara — the headquarters of Goalpara district in Assam, one of the oldest and historically richest districts in lower Assam — on the Brahmaputra and bordering Meghalaya (the Goalpara district (formerly "Goalpariya" — meaning "cowshed area") is historically significant as one of the oldest districts in Assam's administrative history (created 1874); the Brahmaputra River borders the district on the north; the Dudhnoi River (a significant Brahmaputra tributary from the Meghalaya Garo Hills) enters the Brahmaputra at Goalpara; the Bhairabkunda (at the Arunachal-Assam-Bhutan tri-junction near Udalguri) — though not directly in Goalpara, the river corridor connects; the Goalpara district borders Meghalaya's Garo Hills directly to the south — the Tura (Garo Hills capital) gateway runs through Goalpara; the Hayagriva Madhav Temple (near Hajo, Kamrup — accessible from Goalpara) is a significant Vaishnava shrine on a hillock believed to be where Vishnu meditated as Hayagriva; the Goalpariya folk music (a distinct genre of Assamese folk music from lower Assam, with its own dialect — Goalpariya — which blends Assamese, Bengali, and Koch-Rajbongshi linguistic elements) is a UNESCO-recognized cultural tradition; the Koch-Rajbongshi community is significant in Goalpara; the Manas National Park-Chakrashila Wildlife Sanctuary corridor is in the district), and a city of Goalpariya folk music and Garo Hills gateway — is Assam's most culturally Koch-Rajbongshi and Meghalaya-adjacent western district. From birthday parties in Goalpara to celebration cakes — RedHeart covers all Goalpara zones: Goalpara town, Dudhnoi, Lakhipur, Matia, Rangjuli, Krishnai.</p>
<p>Our Goalpara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Goalpara, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Goalpara town, Dudhnoi, Lakhipur, Matia, Rangjuli, Krishnai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Goalpara?", answer: "Yes, same-day cake delivery is available across all Goalpara areas — Goalpara town, Dudhnoi, Lakhipur, Matia, and Rangjuli — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Goalpara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Goalpara delivery." },
      { question: "Do you deliver midnight cakes in Goalpara?", answer: "Yes, midnight birthday cake delivery is available across Goalpara town and Dudhnoi zones." }
    ]
  },

  "sivasagar": {
    cityName: "Sivasagar",
    metaTitle: "Cake Delivery in Sivasagar | Ahom Kingdom Rang Ghar Assam | RedHeart",
    metaDescription: "Order cakes online in Sivasagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sivasagar",
    metaKeyword: "cake delivery sivasagar, order cake online sivasagar, birthday cake sivasagar, custom cake sivasagar, same day cake delivery sivasagar Ahom Kingdom capital Rang Ghar royal amphitheatre Kareng Ghar palace Sivasagar Tank Shiv Dol Assam",
    footerContent: `
<h2>Cake Delivery in Sivasagar — Ahom Kingdom's Ancient Capital, Rang Ghar Royal Amphitheatre, and Asia's Largest Earthen Dam</h2>
<p>Sivasagar (Sibsagar — formerly Rangpur, the Ahom capital) — the headquarters of Sivasagar district in Assam, one of India's most historically extraordinary cities — the ancient capital of the Ahom Kingdom (the Ahom Kingdom ruled Assam for nearly 600 years (1228-1826 CE) — the longest ruling dynasty in Indian history without losing control; the Ahoms (Tai-Ahom people from Yunnan, China) arrived in 1228 under Sukaphaa and established a sophisticated kingdom that resisted 17 Mughal invasions between 1615-1682 CE, defeating all 17 invasions — the only kingdom in India to successfully repel the Mughal Empire consistently; the Rang Ghar (Rangpur-Sivasagar — the royal arena for Ahom royal sports and elephant fights, 1745-1750 CE) is a two-storeyed oval pavilion considered the oldest surviving amphitheatre in Asia; the Kareng Ghar (Talatal Ghar — the Ahom royal palace of Sibasagar, 7 storeys of which 3 are underground — one of Asia's largest palace complexes by underground extent, with tunnels) is a remarkable Ahom architectural achievement; the Sivasagar Tank (Borpukhuri — the largest human-made tank in Asia when built; 1.28 km x 0.89 km) was built by Ahom Queen Madambika Phuleswari around 1734 CE; on its three banks stand the Shiv Dol (tallest Shiva temple in India and tallest Shiva temple in Assam — 105 feet), Devi Dol (Durga), and Vishnu Dol (Vishnu); the Charaideo Maidam (burial mounds of the Ahom kings — UNESCO tentative list) are the sacred burial memorials of Ahom royalty; the Ahom language (Tai-Ahom, a Tai-Kadai language, now endangered) is being revived; the Sivasagar district has significant oil and tea production), and a city of 600-year Ahom Kingdom capital and oldest Asian amphitheatre — is Assam's most royally Ahom-ancient and amphitheatrically triumphant district. From birthday parties in Sivasagar to celebration cakes — RedHeart covers all Sivasagar zones: Sivasagar town, Nazira, Sonari, Amguri, Demow, Gaurisagar.</p>
<p>Our Sivasagar cake range: Chocolate, Assam Tea-flavoured, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Rang Ghar Asia Oldest Amphitheatre / Ahom 600-year Kingdom / Sivasagar Borpukhuri Shiv Dol / Kareng Ghar Underground Palace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sivasagar, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sivasagar town, Nazira, Sonari, Amguri, Demow, Gaurisagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Assam Tea, Rang Ghar Fondant, Ahom Kingdom Fondant, Shiv Dol Fondant, Chocolate</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sivasagar?", answer: "Yes, same-day cake delivery is available across all Sivasagar areas — Sivasagar town, Nazira, Sonari, Amguri, and Demow — for orders placed before 3 PM." },
      { question: "Do you have Rang Ghar Asia Oldest Amphitheatre and Ahom Kingdom-themed cakes?", answer: "Yes! The Rang Ghar (1745-1750 CE — the oldest surviving amphitheatre in Asia, built for Ahom royal elephant sports), the Ahom Kingdom (600-year dynasty that resisted all 17 Mughal invasions — unique in Indian history), and the Sivasagar Borpukhuri Tank (1.28km x 0.89km — with Shiv Dol, Devi Dol, Vishnu Dol temples on its three banks) inspire our most royally amphitheatrical and Mughal-defying Sivasagar fondant cakes." },
      { question: "Are eggless cakes available in Sivasagar?", answer: "Yes, all flavours — Assam Tea, Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sivasagar delivery." }
    ]
  },

  "hajipur": {
    cityName: "Hajipur",
    metaTitle: "Cake Delivery in Hajipur | Vaishali Buddha Banana GI Mahatma Gandhi Bridge Bihar | RedHeart",
    metaDescription: "Order cakes online in Hajipur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hajipur (Vaishali)",
    metaKeyword: "cake delivery hajipur, order cake online hajipur, birthday cake hajipur, custom cake hajipur, same day cake delivery hajipur Vaishali Licchavi Republic Buddha Mahavira GI Banana Mahatma Gandhi Setu Bihar",
    footerContent: `
<h2>Cake Delivery in Hajipur — Vaishali's Ancient Republic, Buddha's Last Sermon Site, Licchavi Democracy, and GI Banana</h2>
<p>Hajipur — the headquarters of Vaishali district in Bihar, one of the most historically significant cities on Earth — the site of the world's first republic and the place where both Mahavira and Buddha had pivotal life events (Vaishali (ancient Visali) was the capital of the Vajjian Confederacy — historians consider this the world's first republic (6th century BCE), governed by a council of elected representatives (the Gana-Sangha system — a proto-democratic federal republic), predating Athens by a century; the Licchavis (one of the Vajjian clans) ruled Vaishali and invented this system; Mahavira (the 24th Tirthankara of Jainism) was born in Vaishali (at Kundagrama, now Basokund) around 599 BCE — making Vaishali the birthplace of the founder of modern Jainism; the Buddha gave his last sermon at Vaishali (before his Mahaparinirvana at Kushinagar) and announced his imminent death to the Licchavis here; the Relic Stupa of Vaishali (containing one-eighth of the Buddha's relics, distributed to 8 kingdoms after his death) is one of the world's oldest stupas; the Ashoka Pillar at Vaishali (one of Ashoka's edicts pillars, 3rd century BCE — with the iconic lion capital) stands in Vaishali; the Vaishali district produces the famous GI Hajipur Banana (Champa variety — a distinctive aromatic banana grown specifically in the Hajipur-Vaishali alluvial soil, nationally acclaimed for its aroma and sweetness); the Mahatma Gandhi Setu (Patna-Hajipur bridge on the Ganga) was when built in 1982, the world's longest river bridge (5.75 km); the Sonpur Cattle Fair (held in Hajipur area on the Gandak-Ganga confluence at Sonpur — one of the largest cattle/elephant fairs in Asia, held on Kartik Purnima), and a city of world's first republic and world's most aromatic banana — is Bihar's most democratically ancient and aromatically GI-banana'd district. From birthday parties in Hajipur to celebration cakes — RedHeart covers all Hajipur zones: Hajipur town, Vaishali, Lalganj, Mahua, Raghopur, Patepur, Bidupur, Sonpur.</p>
<p>Our Hajipur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Vaishali First Republic Licchavi / Mahavira Birthplace / Buddha Last Sermon Stupa / GI Hajipur Banana-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hajipur (Vaishali), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hajipur town, Vaishali, Lalganj, Mahua, Raghopur, Patepur, Bidupur, Sonpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Vaishali Republic Fondant, Hajipur Banana Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hajipur?", answer: "Yes, same-day cake delivery is available across all Hajipur areas — Hajipur town, Vaishali, Lalganj, Mahua, Raghopur, and Sonpur — for orders placed before 3 PM." },
      { question: "Do you have Vaishali First Republic and GI Hajipur Banana-themed cakes?", answer: "Yes! Vaishali (site of the world's first republic — the Licchavi Gana-Sangha, predating Athens by a century; birthplace of Mahavira; site of Buddha's last sermon; Ashoka Pillar; Relic Stupa with Buddha's relics) and the GI Hajipur Banana (Champa variety — India's most aromatic banana from the Hajipur alluvial soil) inspire our most democratically ancient and aromatically banana'd Hajipur fondant cakes." },
      { question: "Are eggless cakes available in Hajipur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hajipur delivery." }
    ]
  },

  "thiruvananthapuram": {
    cityName: "Thiruvananthapuram",
    metaTitle: "Cake Delivery in Thiruvananthapuram | Padmanabhaswamy Temple Kerala Capital | RedHeart",
    metaDescription: "Order cakes online in Thiruvananthapuram. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Thiruvananthapuram",
    metaKeyword: "cake delivery thiruvananthapuram, order cake online thiruvananthapuram, birthday cake thiruvananthapuram, custom cake thiruvananthapuram, same day cake delivery thiruvananthapuram Padmanabhaswamy Temple world richest Kovalam beach Kerala capital ISRO",
    footerContent: `
<h2>Cake Delivery in Thiruvananthapuram — Padmanabhaswamy Temple's Trillion-Rupee Wealth, ISRO's Space Hub, and Kovalam Beach</h2>
<p>Thiruvananthapuram (Trivandrum) — the capital of Kerala, one of India's most intellectually vibrant and historically royal cities — home to the world's wealthiest Hindu temple (the Padmanabhaswamy Temple (Thiruvananthapuram) — dedicated to Lord Vishnu reclining on the serpent Anantha — has six sub-terranean vaults; in 2011, when the Supreme Court ordered an inventory of Vault B (partially opened), the treasure found included gold coins, gold idols, diamond necklaces, emerald garlands, and jewellery valued at over ₹1,00,000 crore (more than 1 trillion rupees) — making it potentially the wealthiest religious institution on Earth; Vault A remains sealed (its opening is prohibited by a Naga Bandham — a serpent curse); the temple's wealth is believed to be the accumulated offerings of the Travancore royal dynasty over centuries; the Travancore maharajas considered themselves "Padmanabha Dasa" (servants of Lord Padmanabha) and dedicated the kingdom to the deity; ISRO (Indian Space Research Organisation) has its headquarters at Thiruvananthapuram (VSSC — Vikram Sarabhai Space Centre, named after the father of India's space program, who set it up in Thumba, Thiruvananthapuram) — India's first rocket launch was from Thumba, Thiruvananthapuram in 1963; the Kovalam Beach (Lighthouse Beach, Hawa Beach, Samudra Beach — 16 km from Thiruvananthapuram) is one of India's most internationally famous crescent beaches; Kerala's first public beach tourism; the Napier Museum (1880 CE) houses one of India's finest collections of natural history, archaeology, and bronze sculptures; the Kerala University Library has significant manuscript collections; the Thiruvananthapuram-Kanyakumari coastline is one of India's most scenic coastal drives), and a city of trillion-rupee temple wealth and India's space launch center — is Kerala's most royally wealthy and cosmically space-significant capital. From birthday parties in Thiruvananthapuram to celebration cakes — RedHeart covers all zones: Thiruvananthapuram city, Kovalam, Varkala, Neyyattinkara, Attingal, Nedumangad, Kazhakoottam, Technopark, Kazhakuttam.</p>
<p>Our Thiruvananthapuram cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Padmanabhaswamy Trillion Vault / ISRO Space / Kovalam Beach / Travancore Kingdom-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thiruvananthapuram, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thiruvananthapuram city, Kovalam, Varkala, Neyyattinkara, Attingal, Nedumangad, Technopark</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Padmanabhaswamy Fondant, ISRO Space Fondant, Mango, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Thiruvananthapuram?", answer: "Yes, same-day cake delivery is available across all Thiruvananthapuram areas — the city, Kovalam, Varkala, Neyyattinkara, Attingal, Nedumangad, and Technopark — for orders placed before 3 PM." },
      { question: "Do you have Padmanabhaswamy Trillion-Rupee Temple and ISRO Space-themed cakes?", answer: "Yes! The Padmanabhaswamy Temple (whose 2011 vault inventory revealed over ₹1,00,000 crore worth of gold, jewels, and ancient treasures — making it potentially the world's wealthiest religious institution; Vault A still sealed by Naga Bandham) and ISRO (Vikram Sarabhai Space Centre — India's first rocket launch at Thumba, Thiruvananthapuram, 1963) inspire our most divinely wealthy and cosmically space-launching Thiruvananthapuram fondant cakes." },
      { question: "Are eggless cakes available in Thiruvananthapuram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Thiruvananthapuram delivery." }
    ]
  },

  "kozhikode": {
    cityName: "Kozhikode",
    metaTitle: "Cake Delivery in Kozhikode | Vasco da Gama Zamorin Calicut Kerala | RedHeart",
    metaDescription: "Order cakes online in Kozhikode. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kozhikode (Calicut)",
    metaKeyword: "cake delivery kozhikode, order cake online kozhikode, birthday cake kozhikode, custom cake kozhikode, same day cake delivery kozhikode Vasco da Gama Calicut landing Zamorin Arab spice trade Malabar Kerala Halwa Beypore",
    footerContent: `
<h2>Cake Delivery in Kozhikode — Vasco da Gama's Spice Route Landing, Zamorin Kingdom, and Halwa City</h2>
<p>Kozhikode (Calicut) — the district headquarters of Kozhikode district in Kerala, one of India's most historically world-altering cities — the place where Vasco da Gama landed in 1498 and changed the course of global history (Vasco da Gama landed at Kappad (Kappakadavu — 16 km north of Kozhikode) on May 27, 1498, after rounding the Cape of Good Hope — completing Europe's first sea route to India; his arrival at the court of the Zamorin (Samuthiri — "Lord of the Sea") of Calicut opened the Age of Discovery for Europe and began the spice trade era that shaped the modern world; Kozhikode was then the most important trading city in Asia (along with Alexandria, Hormuz, and Malacca) — Arab, Persian, Chinese, and Italian merchants all traded here; the Calicut Zamorins (Samuthiri dynasty) were the most powerful rulers of medieval Kerala; the Beypore (part of Kozhikode district) Arab boat-building tradition (Uru — the massive traditional Arab dhow built by Beypore craftsmen for over 1,500 years, exported to Gulf countries; a Beypore Uru takes 2-4 years to hand-build without nails, using teak) is a living traditional craft; the Kozhikode Halwa (Calicut Halwa — the famous GI sweet made from maida, coconut oil, and jaggery with cashews, a legacy of the Arab-Malabar trading connection) is one of Kerala's most famous sweets; the Malabar region's distinctive cuisine (Thalassery Biryani, Kozhikode Chicken Biryani, Pathiri, Karimeen, Malabar parotta) reflects its Arab-influenced culture; the Sweet Street (Mittayi Theruvu) of Kozhikode is a famous confectionery lane; the Mananchira Square (historic city centre) and the GEC beach are city landmarks), and a city of global spice trade and Halwa confectionery — is Kerala's most historically world-altering and sweetly Halwa-famous port city. From birthday parties in Kozhikode to celebration cakes — RedHeart covers all zones: Kozhikode city, Calicut, Beypore, Feroke, Ramanattukara, Koyilandy, Vatakara, Thalassery adjacent, Malappuram adjacent.</p>
<p>Our Kozhikode cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Halwa-inspired cake, Photo Cakes, Fondant Vasco da Gama Kappad Landing / Zamorin Calicut / Beypore Uru Dhow / Kozhikode Halwa-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kozhikode (Calicut), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kozhikode city, Beypore, Feroke, Ramanattukara, Koyilandy, Vatakara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Vasco da Gama Fondant, Beypore Uru Fondant, Kozhikode Halwa, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kozhikode?", answer: "Yes, same-day cake delivery is available across all Kozhikode areas — Kozhikode city, Beypore, Feroke, Ramanattukara, and Koyilandy — for orders placed before 3 PM." },
      { question: "Do you have Vasco da Gama Calicut Landing and Beypore Uru Dhow-themed cakes?", answer: "Yes! Vasco da Gama's landing at Kappad, Kozhikode (May 27, 1498 — the sea route that reshaped global trade; the Zamorin's court was then the world's spice capital) and the Beypore Uru (the hand-built 1,500-year-old Arab dhow tradition — massive teak vessels built without nails, exported to Gulf countries) inspire our most globally trade-reshaping and maritimely hand-crafted Kozhikode fondant cakes." },
      { question: "Are eggless cakes available in Kozhikode?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kozhikode delivery." }
    ]
  },

  "thrissur": {
    cityName: "Thrissur",
    metaTitle: "Cake Delivery in Thrissur | Pooram Elephant Festival Cultural Capital Kerala | RedHeart",
    metaDescription: "Order cakes online in Thrissur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Thrissur",
    metaKeyword: "cake delivery thrissur, order cake online thrissur, birthday cake thrissur, custom cake thrissur, same day cake delivery thrissur Thrissur Pooram elephant procession percussion Vadakkumnathan Temple Kerala gold jewellery",
    footerContent: `
<h2>Cake Delivery in Thrissur — Thrissur Pooram's World-Famous Elephant Procession, Kerala's Cultural Capital, and Gold Jewellery Hub</h2>
<p>Thrissur (Trichur — from "Thiru-Shiva-Perur" — the holy city of Shiva) — the district headquarters of Thrissur district in Kerala, the "Cultural Capital of Kerala" — home to India's most spectacular temple festival (the Thrissur Pooram (held in April-May at Vadakkumnathan Ekadashi — the greatest temple festival in Kerala and one of the most spectacular festivals in India) features two competing temple groups (Thiruvambady temple's team and Paramekkavu temple's team) each with 15 caparisoned elephants (adorned with golden nettipattam — the traditional golden headgear of Kerala's festival elephants) in a face-to-face procession around the Vadakkumnathan Kshetram (Shiva temple at the centre of Thrissur town); the highlight is the Kudamattam (the exchange of parasols — a competition of changing coloured parasols, whisks, and fans above the elephants in a spectacular choreographed display) and the grand fireworks finale (Vedikkettu); the Thrissur Pooram has been called India's most spectacular festival by international travel media; the Vadakkumnathan Temple (Thrissur) is a 9th-10th century CE Shiva temple in the classical Kerala architecture style (Thachu Shastra); Thrissur is one of India's major gold jewellery centres — the GJ (Gold Jewellery) market of Thrissur; the Kerala Kalamandalam (Cheruthuruthy, Thrissur — the foremost institution for Kathakali, Mohiniyattam, Thullal, and other classical Kerala arts — deemed university), and a city of Kerala elephants and gold jewellery capital — is Thrissur's most grandiose-elephantinely Pooram and golden culturally Kerala district. From birthday parties in Thrissur to celebration cakes — RedHeart covers all Thrissur zones: Thrissur city, Irinjalakuda, Chalakudy, Kodungallur, Guruvayur, Kunnamkulam, Ponnani adjacent, Chavakkad.</p>
<p>Our Thrissur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Thrissur Pooram 15 Elephants / Vadakkumnathan Temple / Kudamattam Parasol / Kerala Kalamandalam Kathakali-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thrissur, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thrissur city, Irinjalakuda, Chalakudy, Kodungallur, Guruvayur, Kunnamkulam, Chavakkad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Thrissur Pooram Elephant Fondant, Kudamattam Parasol Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Thrissur?", answer: "Yes, same-day cake delivery is available across all Thrissur areas — Thrissur city, Irinjalakuda, Chalakudy, Kodungallur, Guruvayur, and Kunnamkulam — for orders placed before 3 PM." },
      { question: "Do you have Thrissur Pooram Elephant Procession and Kudamattam Parasol-themed cakes?", answer: "Yes! The Thrissur Pooram (the most spectacular temple festival in India — 15 caparisoned elephants with golden nettipattam on each side, the mesmerizing Kudamattam parasol-exchange competition, and the grand Vedikkettu fireworks finale at the Vadakkumnathan Shiva temple) inspires our most elephantinely golden and parasol-choreographed Thrissur fondant cakes." },
      { question: "Are eggless cakes available in Thrissur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Thrissur delivery." }
    ]
  },

  "kollam": {
    cityName: "Kollam",
    metaTitle: "Cake Delivery in Kollam | Cashew Capital Ashtamudi Lake Quilon Kerala | RedHeart",
    metaDescription: "Order cakes online in Kollam. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kollam",
    metaKeyword: "cake delivery kollam, order cake online kollam, birthday cake kollam, custom cake kollam, same day cake delivery kollam cashew capital Ashtamudi Lake backwaters Quilon Marco Polo Kerala Arab trade port Laccadive",
    footerContent: `
<h2>Cake Delivery in Kollam — Cashew Capital of India, Ashtamudi Lake Backwaters, and Ancient Arab-Chinese Trade Port</h2>
<p>Kollam (Quilon) — the district headquarters of Kollam district in Kerala, one of the oldest continuously inhabited port cities in the world — the "Cashew Capital of India" (Kollam is one of the world's most important cashew processing and export centres — the cashew nut industry in Kollam processes and exports lakhs of metric tons of cashews annually; the cashew tree was introduced to India from Brazil by the Portuguese (16th century), and Kerala (especially Kollam) became the global cashew processing hub; Kollam cashew processing factories are legendary for their scale; the Quilon (Kollam) trading port is historically documented in the records of Marco Polo (1293 CE), Ibn Battuta (1342 CE), and Zheng He (Chinese Admiral's voyages 1405-1433); Kollam was a major international Arab-Chinese-European trading port even before Vasco da Gama's arrival; the Ashtamudi Lake (Ashtamudi = eight-branched, like an octopus) is Kerala's second-largest lake and the southern gateway to the Kerala Backwaters (connected to the backwater boat route from Kollam to Alleppey — the famous backwater cruise); the Ramsar Wetland designation covers the Ashtamudi Lake; the Palaruvi Waterfalls (75 metres, in the Kollam-Pathanamthitta forest) is one of Kerala's most visited waterfalls; the Thangassery Lighthouse and Fort (Dutch-British remnants) is at the Kollam coast; the Janardanaswamy Temple (Varkala Cliff Temple — in Thiruvananthapuram district but Kollam highway adjacent) is a significant Vaishnava temple on the dramatic Varkala cliffs above the Arabian Sea; the Chavara (Kollam district) area has India's largest mineral sand (titanium, thorium) deposits — the IRE (Indian Rare Earths) operations), and a city of cashew exports and eight-branched backwater lake — is Kerala's most cashew-industrially processed and backwater-octopusly branched port city. From birthday parties in Kollam to celebration cakes — RedHeart covers all Kollam zones: Kollam city, Karunagappally, Kottarakkara, Paravur, Punalur, Kundara, Chavara.</p>
<p>Our Kollam cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Ashtamudi Lake Backwaters / Cashew Capital / Thangassery Fort / Marco Polo Quilon Port-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kollam, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kollam city, Karunagappally, Kottarakkara, Paravur, Punalur, Kundara, Chavara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ashtamudi Backwater Fondant, Cashew Crunchy, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kollam?", answer: "Yes, same-day cake delivery is available across all Kollam areas — Kollam city, Karunagappally, Kottarakkara, Paravur, Punalur, and Kundara — for orders placed before 3 PM." },
      { question: "Do you have Ashtamudi Lake Backwaters and Cashew Capital-themed cakes?", answer: "Yes! The Ashtamudi Lake (the eight-branched backwater lake — gateway to Kerala's backwater network, Ramsar Wetland) and Kollam's Cashew Capital identity (India's global cashew processing hub — documented by Marco Polo 1293 CE, Ibn Battuta 1342 CE, Zheng He's Chinese fleet) inspire our most eight-branchedly backwatered and globally cashew-processed Kollam fondant cakes." },
      { question: "Are eggless cakes available in Kollam?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kollam delivery." }
    ]
  },

  "alappuzha": {
    cityName: "Alappuzha",
    metaTitle: "Cake Delivery in Alappuzha | Venice of East Nehru Trophy Boat Race Kerala | RedHeart",
    metaDescription: "Order cakes online in Alappuzha. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Alappuzha (Alleppey)",
    metaKeyword: "cake delivery alappuzha, order cake online alappuzha, birthday cake alappuzha, custom cake alappuzha, same day cake delivery alappuzha Alleppey Venice of East Nehru Trophy Boat Race Vembanad Lake Houseboat Kerala backwaters coir",
    footerContent: `
<h2>Cake Delivery in Alappuzha — Venice of the East, Nehru Trophy Snake Boat Race, and Kerala's Houseboat Backwaters</h2>
<p>Alappuzha (Alleppey) — the district headquarters of Alappuzha district in Kerala, called the "Venice of the East" — the undisputed capital of Kerala's famous backwaters and houseboat tourism (the Vembanad Lake (the largest lake in Kerala — 2,033 sq km, India's longest lake at ~96 km) forms the heart of the Alappuzha backwater network; the famous Nehru Trophy Boat Race (held on the Punnamada Lake, Alappuzha every second Saturday of August) — the most spectacular rowing event in India — features snake boats (Chundan Vallam — narrow, 100+ feet long racing boats rowed by 100 men to the rhythm of traditional songs like "Vanchippattu"; 70-80 snake boats compete) — inaugurated 1952 in honour of Jawaharlal Nehru's visit; the Alappuzha houseboats (Kettuvallam — "boat tied together with ropes" — traditional rice boats converted to floating resort suites) are Kerala's most iconic tourism product; the coir industry (coconut fibre rope, mats, mattresses) is concentrated in the Alappuzha-Cherthala belt — one of the world's largest coir-producing areas; the Krishnapuram Palace (near Kayamkulam) has the famous Gajendra Moksha mural; the Champakulam Church (one of India's oldest Christian churches — believed founded by St. Thomas the Apostle or early Christian missionaries, Kuttanad region); the Kuttanad (the "Rice Bowl of Kerala") — farming below sea level (3-4 feet below sea level in the paddy fields — one of the world's few places where farming occurs below sea level), and a city of snake-boat racing and houseboat backwaters — is Kerala's most spectacularly backwatered and Vanchippattu-chanted Venice of the East. From birthday parties in Alappuzha to celebration cakes — RedHeart covers all zones: Alappuzha city, Cherthala, Kuttanad, Kayamkulam, Mavelikkara, Changanacherry adjacent, Haripad, Ambalappuzha.</p>
<p>Our Alappuzha cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Nehru Trophy Snake Boat / Vembanad Houseboat / Kuttanad Below Sea Level Paddy / Coir Industry-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alappuzha (Alleppey), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alappuzha city, Cherthala, Kuttanad, Kayamkulam, Mavelikkara, Haripad, Ambalappuzha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nehru Trophy Boat Race Fondant, Houseboat Backwater Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Alappuzha?", answer: "Yes, same-day cake delivery is available across all Alappuzha areas — Alappuzha city, Cherthala, Kuttanad, Kayamkulam, Mavelikkara, and Haripad — for orders placed before 3 PM." },
      { question: "Do you have Nehru Trophy Snake Boat Race and Vembanad Houseboat-themed cakes?", answer: "Yes! The Nehru Trophy Boat Race (the most spectacular rowing event in India — 70-80 Chundan Vallam snake boats, each 100+ feet long, rowed by 100 men to Vanchippattu songs, on Punnamada Lake every second Saturday of August since 1952) and the Kerala Houseboat (Kettuvallam — traditional rice boats converted to floating resorts on the Vembanad Lake backwaters) inspire our most spectacularly Vanchippattu-chanted and houseboatedly backwatered Alappuzha fondant cakes." },
      { question: "Are eggless cakes available in Alappuzha?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Alappuzha delivery." }
    ]
  },

  "vellore": {
    cityName: "Vellore",
    metaTitle: "Cake Delivery in Vellore | Vellore Fort CMC Hospital Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Vellore. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vellore",
    metaKeyword: "cake delivery vellore, order cake online vellore, birthday cake vellore, custom cake vellore, same day cake delivery vellore Vellore Fort CMC Christian Medical College Palar River Golden Temple Sripuram Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Vellore — Vellore Fort's Vijayanagara Legacy, CMC Hospital, Golden Temple Sripuram, and Palar River</h2>
<p>Vellore — the district headquarters of Vellore district in Tamil Nadu, a city of medical excellence, medieval fort grandeur, and golden spiritual architecture (the Vellore Fort (16th century CE — built by the Vijayanagara Empire, later used by the Bijapur Sultans, Marathas, and finally by the British — one of the finest examples of medieval military architecture in South India; the fort's moat, massive granite walls, and inner temple (Jalakandeswarar Temple — a 16th century Vijayanagara-style Shiva temple within the fort compound) make it unique; the Sepoy Mutiny of 1806 (the Vellore Mutiny — the first large-scale Indian mutiny against the British — predating 1857 by 50 years; Indian sepoys revolted over the new uniform regulations (requiring certain headgear and forbidding caste marks); the revolt was suppressed within hours, but it alarmed the British East India Company; the Christian Medical College (CMC Vellore) — founded by Dr. Ida S. Scudder (1900) — is one of India's most prestigious medical institutions (consistently ranked among India's best hospitals — all-India rank 2-5 consistently; renowned for neurology, cardiology, and community health); the Golden Temple of Vellore (Sripuram — the Sri Lakshmi Narayani Golden Temple, built 2007, in Thirumalaikodi on the outskirts of Vellore) is covered with 1500 kg of pure gold on the outside of its structures — one of the world's largest gold-plated temples; the Palar River flows near Vellore; the Vellore leather industry is significant in the Pernambut area), and a city of CMC medical excellence and golden temple — is Tamil Nadu's most medically prestigious and spiritually gold-plated district. From birthday parties in Vellore to celebration cakes — RedHeart covers all Vellore zones: Vellore city, Ambur, Vaniyambadi, Arakkonam, Ranipet, Walajapet, Gudiyatham.</p>
<p>Our Vellore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Vellore Fort Vijayanagara / CMC Hospital / Golden Temple Sripuram / Vellore Mutiny 1806-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vellore, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vellore city, Ambur, Vaniyambadi, Arakkonam, Ranipet, Walajapet, Gudiyatham</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Vellore Fort Fondant, Golden Temple Fondant, CMC Hospital Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vellore?", answer: "Yes, same-day cake delivery is available across all Vellore areas — Vellore city, Ambur, Vaniyambadi, Arakkonam, Ranipet, and Walajapet — for orders placed before 3 PM." },
      { question: "Do you have Vellore Fort and Golden Temple Sripuram-themed cakes?", answer: "Yes! The Vellore Fort (16th century Vijayanagara military architecture with the Jalakandeswarar Temple inside — site of the 1806 Vellore Mutiny, the first large-scale Indian sepoy revolt predating 1857 by 50 years) and the Sripuram Golden Temple (covered with 1,500 kg of pure gold on the outside — one of the world's largest gold-covered temples) inspire our most historically fortified and spiritually gold-plated Vellore fondant cakes." },
      { question: "Are eggless cakes available in Vellore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Vellore delivery." }
    ]
  },

  "salem": {
    cityName: "Salem",
    metaTitle: "Cake Delivery in Salem | Steel City Yercaud Hills Mettur Dam Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Salem. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Salem",
    metaKeyword: "cake delivery salem, order cake online salem, birthday cake salem, custom cake salem, same day cake delivery salem Steel City Yercaud Shevaroy Hills Mettur Dam Cauvery turmeric mango Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Salem — Steel City, Yercaud's Coffee-Tea Shevaroy Hills, Mettur Dam, and Mango-Turmeric Belt</h2>
<p>Salem — the district headquarters of Salem district in Tamil Nadu, Tamil Nadu's fifth-largest city and a major industrial hub — the "Steel City" of Tamil Nadu with Yercaud's coffee hills (the Salem Steel Plant (SAIL — Steel Authority of India Ltd, Salem) is one of India's premier special steels plants — producing high-carbon spring steel and electrical steel; Salem is also known for its textile (silk and cotton) and small-scale metal industries; the Yercaud (Yercaud = Nilgiri Hills branch; from "Yeri" = lake, "Kaadu" = forest — forest with lake) is a hill station in the Shevaroy Hills (part of the Eastern Ghats) at 1515m elevation — famous for coffee, orange, pepper, jackfruit, and tea plantations; the Yercaud Lake (artificial lake at 1515m), Bear's Cave, Lady's Seat viewpoint, and the annual Yercaud Summer Festival (flower show) are tourist draws; the Mettur Dam (Stanley Reservoir — built 1934 on the Cauvery River at the Hogenakal gorge entry; when built one of Asia's largest dams; 60 km from Salem) is a major water source for Tamil Nadu; the Salem Mango (GI — Banganapalli variety grown in Salem's hot climate, prized for its sweetness); the Salem turmeric (Salem district is a major turmeric producer in Tamil Nadu); the Attur area (Salem district) is a significant cotton-weaving belt; the Namagiripettai (Namakkal adjacent from Salem) Namagiri Lakshmi temple (associated with Ramanujan — the mathematical genius who received mathematical inspiration through dreams of the Goddess Namagiri according to his own account)), and a city of steel mills and coffee hills — is Tamil Nadu's most steelily industrialized and Yercaud-aromatically coffee-terraced district. From birthday parties in Salem to celebration cakes — RedHeart covers all Salem zones: Salem city, Attur, Omalur, Mettur, Yercaud, Vazhapadi, Gangavalli, Thalaivasal.</p>
<p>Our Salem cake range: Chocolate, Black Forest, Red Velvet, Mango (Salem GI!), Butterscotch, Photo Cakes, Fondant Yercaud Coffee Hills / Mettur Dam Cauvery / Salem Steel Plant / Salem Mango GI-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Salem, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Salem city, Attur, Omalur, Mettur, Yercaud, Vazhapadi, Gangavalli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango Salem GI, Chocolate, Yercaud Coffee Fondant, Mettur Dam Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Salem?", answer: "Yes, same-day cake delivery is available across all Salem areas — Salem city, Attur, Omalur, Mettur, Yercaud, and Vazhapadi — for orders placed before 3 PM." },
      { question: "Do you have Yercaud Coffee Hills and Salem Mango GI-themed cakes?", answer: "Yes! Yercaud (the Shevaroy Hills hill station at 1515m with coffee, orange, pepper plantations — 'forest with lake') and the Salem GI Mango (Banganapalli variety grown in Salem's hot climate, prized for sweetness — a mango-festival season treat) inspire our most aromatically coffee-terraced and mangoly GI-celebrated Salem fondant cakes." },
      { question: "Are eggless cakes available in Salem?", answer: "Yes, all flavours — Mango, Chocolate, Black Forest, Red Velvet — are available in eggless variants for Salem delivery." }
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
