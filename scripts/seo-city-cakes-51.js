// Cakes Batch 51 — 13 cities
// Gujarat: Dwarka, Surendranagar, Amreli, Mehsana, Patan
// Odisha: Cuttack, Angul, Koraput
// Uttarakhand: Bageshwar, Chamoli (Gopeshwar), Uttarkashi
// HP: Chamba, Una

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "dwarka": {
    cityName: "Dwarka",
    metaTitle: "Cake Delivery in Dwarka | Krishna's Capital Dwarkadhish Somnath Lighthouse Gujarat | RedHeart",
    metaDescription: "Order cakes online in Dwarka. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dwarka (Devbhoomi Dwarka)",
    metaKeyword: "cake delivery dwarka, order cake online dwarka, birthday cake dwarka, custom cake dwarka, same day cake delivery dwarka Dwarkadhish Temple Krishna capital submerged city Bet Dwarka Gomti Ghat Nageshwar Somnath lighthouse Devbhoomi Gujarat",
    footerContent: `
<h2>Cake Delivery in Dwarka — Krishna's Legendary Capital, Dwarkadhish Temple, and the Submerged Ancient City</h2>
<p>Dwarka (Devbhoomi Dwarka) — the district headquarters of Devbhoomi Dwarka district in Gujarat, one of India's four sacred Char Dhams and one of the Sapta Puri (seven moksha cities) — the legendary capital of Lord Krishna (the Dwarkadhish Temple (Jagat Mandir) — built originally over 2,500 years ago (current structure 15th-16th century CE; 78.3-metre spire) over the spot where Lord Krishna's palace is said to have stood in the ancient city of Dwarka; the temple is one of the Char Dhams (Dwarka-Badrinath-Puri-Rameswaram — the four pilgrimage sites forming the corners of India); the flag on the Dwarkadhish spire changes 5 times daily (the flag has the sun and moon symbol — representing eternity as long as sun and moon exist); the underwater city of Dwarka — marine archaeological investigations (ASI 1983, 2001) in the Gulf of Kutch/Arabian Sea found ancient stone structures (walls, anchors, pillar bases) believed to be the submerged ancient city of Dwarka (Dwaraka) possibly dating to 3,500-5,000 BCE; the submerged Dwarka is one of India's most tantalizing archaeological mysteries; the Bet Dwarka (Shankhodhar) island — 30 km from Dwarka by boat; believed to be the actual residence island of Krishna during his lifetime; the Gomti Ghat (the Gomti River meets the Arabian Sea here); the Nageshwar Jyotirlinga (one of 12 Jyotirlingas — 15 km from Dwarka); the Rukmini Devi Temple (separate from main Dwarka temple — 2 km away; legend: Rukmini and Krishna had a marital argument so they live in separate temples)), and a city of Krishna's submerged legendary capital — is Gujarat's most Chardhamily Vaishnava sacred and archaeologically submerged-mysteriously Krishna-capital city. From birthday parties in Dwarka to celebration cakes — RedHeart covers all Dwarka zones: Dwarka city, Bet Dwarka, Okha, Salaya, Khambhalia, Kalyanpur, Jamkhambhalia.</p>
<p>Our Dwarka cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Dwarkadhish Temple Char Dham / Submerged Ancient City / Nageshwar Jyotirlinga / Bet Dwarka Krishna Island-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dwarka (Devbhoomi Dwarka), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dwarka city, Bet Dwarka, Okha, Salaya, Khambhalia, Kalyanpur, Jamkhambhalia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dwarkadhish Char Dham Fondant, Mango, Submerged City Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dwarka?", answer: "Yes, same-day cake delivery is available across all Dwarka areas — Dwarka city, Bet Dwarka, Okha, Salaya, Khambhalia, and Kalyanpur — for orders placed before 3 PM." },
      { question: "Do you have Dwarkadhish Char Dham and Submerged Ancient City-themed cakes?", answer: "Yes! The Dwarkadhish Temple (Jagat Mandir — one of India's four Char Dhams; 78.3 m spire; flag changed 5 times daily; built on Krishna's legendary palace site) and the Submerged Ancient Dwarka (ASI marine excavations 1983-2001 found ancient stone structures in the Arabian Sea, possibly 3,500-5,000 BCE — one of India's greatest archaeological mysteries) inspire our most Char-Dhamily Vaishnava-sacred and submerged-mysteriously ancient-city Dwarka fondant cakes." },
      { question: "Are eggless cakes available in Dwarka?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dwarka delivery." }
    ]
  },

  "surendranagar": {
    cityName: "Surendranagar",
    metaTitle: "Cake Delivery in Surendranagar | Tarnetar Fair Rann Cotton Gujarat | RedHeart",
    metaDescription: "Order cakes online in Surendranagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Surendranagar",
    metaKeyword: "cake delivery surendranagar, order cake online surendranagar, birthday cake surendranagar, custom cake surendranagar, same day cake delivery surendranagar Tarnetar Fair embroidery Rann cotton Wadhwan clock tower Halvad Dhrangadhra Gujarat Saurashtra",
    footerContent: `
<h2>Cake Delivery in Surendranagar — Tarnetar Fair, Rann Gateway, and Wadhwan Heritage</h2>
<p>Surendranagar — the district headquarters of Surendranagar district in Gujarat (Saurashtra region), a district notable for its cultural festivals, salt production, and position as the gateway to the Little Rann of Kutch (the Tarnetar Mela (Trinetreshwar Mahadev Fair) — held at Tarnetar village in Surendranagar district every year in August-September (Bhadrapad Shukla 4,5,6 — three days after Ganesh Chaturthi); one of Gujarat's most spectacular folk fairs; the Tarnetar Mela is famous for its embroidery culture — young unmarried men (Bharwad, Rabari and other pastoral communities) parade with elaborately embroidered chatris (parasols/umbrellas) as a way of attracting potential brides; the fair is a de facto marriage fair in addition to a religious occasion (Trinetreshwar Mahadev Shiva temple); the embroidery displayed at Tarnetar represents some of Gujarat's finest Saurashtra needlework traditions; the Little Rann of Kutch (LRK) — partially in Surendranagar district; the LRK is the only habitat of the Indian Wild Ass (Ghudkhur — Equus hemionus khur); the Wild Ass Sanctuary protects approximately 4,000+ wild asses; salt production is a major economic activity in the Little Rann; the Dhrangadhra/Halvad area has historic princely state architecture; the Wadhwan (historic walled city) — the Surendranagar twin city with a historic clock tower; the Rann salt pans are spectacular; cotton is a major crop), and a city of Tarnetar embroidery fair and Wild Ass sanctuary — is Gujarat's most tribally embroidery-chatri-parasol-fair and wild-ass-sanctuary salt-rann-panoramic Saurashtra district. From birthday parties in Surendranagar to celebration cakes — RedHeart covers all Surendranagar zones: Surendranagar city, Wadhwan, Dhrangadhra, Halvad, Limbdi, Chotila, Thangadh.</p>
<p>Our Surendranagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Tarnetar Fair Embroidery Chatri / Wild Ass Little Rann / Wadhwan Heritage / Salt Rann-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Surendranagar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Surendranagar city, Wadhwan, Dhrangadhra, Halvad, Limbdi, Chotila, Thangadh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tarnetar Fair Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Surendranagar?", answer: "Yes, same-day cake delivery is available across all Surendranagar areas — Surendranagar city, Wadhwan, Dhrangadhra, Halvad, Limbdi, and Chotila — for orders placed before 3 PM." },
      { question: "Do you have Tarnetar Fair embroidery-themed cakes?", answer: "Yes! The Tarnetar Mela (Trinetreshwar Mahadev Fair — August-September; young pastoral community men parade with elaborately embroidered chatris/parasols to attract brides; one of Gujarat's finest Saurashtra embroidery showcases) inspires our most embroidery-chatri-parasol-marriage-fair fondant cakes." },
      { question: "Are eggless cakes available in Surendranagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Surendranagar delivery." }
    ]
  },

  "amreli": {
    cityName: "Amreli",
    metaTitle: "Cake Delivery in Amreli | Gir Lion Sasan Gir Groundnut Gujarat | RedHeart",
    metaDescription: "Order cakes online in Amreli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Amreli",
    metaKeyword: "cake delivery amreli, order cake online amreli, birthday cake amreli, custom cake amreli, same day cake delivery amreli Gir National Park Asiatic Lion Sasan Gir groundnut Saurashtra cotton Rajula Jafrabad port Gujarat",
    footerContent: `
<h2>Cake Delivery in Amreli — Gateway to Gir National Park (Asiatic Lions), Groundnut Belt, and Saurashtra Agriculture</h2>
<p>Amreli — the district headquarters of Amreli district in Gujarat (Saurashtra), a district with direct access to one of India's most important wildlife sanctuaries — the last habitat of Asiatic lions (the Gir National Park and Wildlife Sanctuary (Sasan Gir) — the only place in the world outside Africa where lions exist in the wild; the Asiatic Lion (Panthera leo persica) was reduced to just 20 individuals in 1900 due to hunting; through sustained conservation efforts (protected since Nawab of Junagadh's era, then Wildlife Protection Act 1972), the population has recovered to 600+ lions; Gir's lions differ from African lions in that adult males have sparse manes and often live in smaller prides; the Gir National Park straddles Amreli-Junagadh-Gir Somnath districts; the Sasan Gir (Gir Forest National Park and Wildlife Sanctuary) is the main access point; tourism is strictly controlled to maintain lion habitat; the Amreli district is a significant groundnut-growing area (Saurashtra is India's largest groundnut-producing region; groundnut oil (Saurashtra brand "tel") is central to Kathiawadi cooking); cotton is another major crop; the Rajula and Jafrabad (on the Arabian Sea coast) are port towns in Amreli district; the Liliya fort; the Bagasara area), and a city of Asiatic Lion conservation success and groundnut Saurashtra agriculture — is Gujarat's most lion-GIR-conservationally successful and groundnut-Saurashtra-agriculturally productive district. From birthday parties in Amreli to celebration cakes — RedHeart covers all Amreli zones: Amreli city, Rajula, Saverkundla, Jafrabad, Lathi, Bagasara, Liliya, Dhari.</p>
<p>Our Amreli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Gir Asiatic Lion / Sasan Gir National Park / Gir Forest Lion Pride / Saurashtra Groundnut-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amreli, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amreli city, Rajula, Saverkundla, Jafrabad, Lathi, Bagasara, Liliya, Dhari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gir Lion Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Amreli?", answer: "Yes, same-day cake delivery is available across all Amreli areas — Amreli city, Rajula, Saverkundla, Jafrabad, Lathi, and Bagasara — for orders placed before 3 PM." },
      { question: "Do you have Gir Asiatic Lion-themed cakes?", answer: "Yes! The Gir National Park (the only wild Asiatic Lion habitat in the world outside Africa; down from 20 lions in 1900 to 600+ today — one of conservation's greatest success stories; Asiatic lions have sparse manes and live in smaller prides than African lions; Sasan Gir is the main access point) inspires our most lion-conservationally triumphant and Gir-forest-prowlingly Asiatic Amreli fondant cakes." },
      { question: "Are eggless cakes available in Amreli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Amreli delivery." }
    ]
  },

  "mehsana": {
    cityName: "Mehsana",
    metaTitle: "Cake Delivery in Mehsana | Modhera Sun Temple GI Tobacco Dudh Sagar Gujarat | RedHeart",
    metaDescription: "Order cakes online in Mehsana. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mehsana",
    metaKeyword: "cake delivery mehsana, order cake online mehsana, birthday cake mehsana, custom cake mehsana, same day cake delivery mehsana Modhera Sun Temple Solstice dance Dudh Sagar Dairy Gujarat Cooperative tobacco North Gujarat",
    footerContent: `
<h2>Cake Delivery in Mehsana — Modhera Sun Temple Solstice Festival, Dudh Sagar Dairy, and North Gujarat's Cooperative Hub</h2>
<p>Mehsana — the district headquarters of Mehsana district in Gujarat (North Gujarat region), a district of remarkable historical monuments and dairy cooperative legacy (the Modhera Sun Temple (22 km from Mehsana) — built by Bhimdev I of the Chaulukya (Solanki) dynasty, 1026-27 CE (shortly after Mahmud of Ghazni's raid); dedicated to Surya (Sun God); the temple is architecturally extraordinary: the Sabha Mandap (assembly hall) has 52 pillars (one for each week of the year); the kund (stepwell/tank — Surya Kund — the largest and most beautiful in Gujarat; 108 shrines on its stepped descending walls; descends 12 storeys in geometric steps); the temple is aligned such that the sun's rays fall directly on the sanctum deity at the equinoxes and solstices; the Modhera Dance Festival (Uttarardh Mahotsav — January) — held at night with the temple illuminated, one of Gujarat's most spectacular cultural events; no puja/worship is performed (the temple is not an active religious site — it is an ASI protected monument); the Dudh Sagar Dairy (Mehsana) — one of India's largest dairy cooperatives (part of the Gujarat Cooperative Milk Marketing Federation — the Amul umbrella); the Mehsana district has high buffalo milk production; the tobacco cultivation in North Gujarat; the Patan (adjacent — the capital of the Solanki/Chaulukya dynasty, home to the GI Patola silk and the Rani ki Vav UNESCO stepwell)), and a city of Sun Temple equinox alignment and Dudh Sagar dairy — is Gujarat's most solstice-architecturally aligned and cooperative-dairy-Dudh Sagar-producing North Gujarat district. From birthday parties in Mehsana to celebration cakes — RedHeart covers all Mehsana zones: Mehsana city, Visnagar, Unjha, Kheralu, Jotana, Becharaji, Kadi.</p>
<p>Our Mehsana cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Modhera Sun Temple Solstice / Surya Kund Stepwell / Modhera Dance Festival / Dudh Sagar Dairy-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mehsana, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mehsana city, Visnagar, Unjha, Kheralu, Jotana, Becharaji, Kadi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Modhera Sun Temple Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mehsana?", answer: "Yes, same-day cake delivery is available across all Mehsana areas — Mehsana city, Visnagar, Unjha, Kheralu, Jotana, Becharaji, and Kadi — for orders placed before 3 PM." },
      { question: "Do you have Modhera Sun Temple Solstice-themed cakes?", answer: "Yes! The Modhera Sun Temple (built 1026-27 CE by Chaulukya King Bhimdev I; astronomically aligned so sun rays illuminate the sanctum at equinoxes and solstices; Surya Kund stepwell with 108 shrines on geometric descending walls; the spectacular night Modhera Dance Festival in January) inspires our most solstice-astronomically aligned and Sun-God-illuminatingly Chaulukya Mehsana fondant cakes." },
      { question: "Are eggless cakes available in Mehsana?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mehsana delivery." }
    ]
  },

  "cuttack": {
    cityName: "Cuttack",
    metaTitle: "Cake Delivery in Cuttack | Silver City GI Tarakasi Mahanadi Odisha | RedHeart",
    metaDescription: "Order cakes online in Cuttack. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Cuttack",
    metaKeyword: "cake delivery cuttack, order cake online cuttack, birthday cake cuttack, custom cake cuttack, same day cake delivery cuttack Silver City Tarakasi silver filigree GI Mahanadi Kathajodi Millennium City Odisha Netaji birthplace",
    footerContent: `
<h2>Cake Delivery in Cuttack — Silver City of India, GI Tarakasi Silver Filigree, Mahanadi, and Netaji's Birthplace</h2>
<p>Cuttack — the historic capital and second-largest city of Odisha, one of India's most historically significant cities — the "Silver City of India" and the "Millennium City" (Cuttack was founded in 989 CE by Nripa Kesari — making it over 1,000 years old; the city was the capital of Odisha for 900 years under the Ganga dynasty, Gajapati dynasty, Mughals, Marathas, and British; the GI Tarakasi (Silver Filigree) — Cuttack's most famous craft; ultra-fine silver wire (as thin as a human hair) twisted into elaborate floral and geometric patterns to create jewellery, decorative items, and figures; Tarakasi silver filigree items are internationally exhibited and are one of India's most celebrated crafts; GI-protected; the Barabati Fort (13th century CE Ganga dynasty fort with a moat on the bank of the Mahanadi; the fort has a 9-storey tower documented in history but now only foundations remain; it was the seat of the Ganga kings and later Mughals); the Subhas Chandra Bose birthplace (Netaji Subhas Chandra Bose was born in Cuttack on January 23, 1897 — the Janakinath Bhawan where he was born; Cuttack considers itself Netaji's city); the Mahanadi-Kathajodi-Kuakhai river system (Cuttack sits on an island formed by these rivers); the Chandrasekhar Jagannath Temple; the Dhabaleswar island temple (Mahanadi); the Cuttack Durga Puja is famous for its gold and silver ornament pandals), and a city of silver filigree GI craft and Netaji — is Odisha's most silverily Tarakasi-GI-filigreed and Netaji-birthplace-historically 1000-year capital city. From birthday parties in Cuttack to celebration cakes — RedHeart covers all Cuttack zones: Cuttack city, Choudwar, Athagarh, Banki, Tigiria, Niali, Mahanga, Tangi.</p>
<p>Our Cuttack cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant GI Tarakasi Silver Filigree / Barabati Fort Mahanadi / Netaji Subhas Chandra Bose / Cuttack Durga Puja Gold Pandal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuttack, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuttack city, Choudwar, Athagarh, Banki, Tigiria, Niali, Mahanga, Tangi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tarakasi Silver GI Fondant, Netaji Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Cuttack?", answer: "Yes, same-day cake delivery is available across all Cuttack areas — Cuttack city, Choudwar, Athagarh, Banki, Tigiria, Niali, and Mahanga — for orders placed before 3 PM." },
      { question: "Do you have GI Tarakasi Silver Filigree and Netaji Birthplace-themed cakes?", answer: "Yes! The GI Tarakasi Silver Filigree (ultra-fine silver wire as thin as a human hair twisted into elaborate floral-geometric jewellery — one of India's most celebrated GI crafts; internationally exhibited from Cuttack) and Netaji Subhas Chandra Bose (born January 23, 1897 at Janakinath Bhawan, Cuttack) inspire our most silverily hair-fine-filigreed and Netaji-birthplace-honouringly Cuttack fondant cakes." },
      { question: "Are eggless cakes available in Cuttack?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Cuttack delivery." }
    ]
  },

  "angul": {
    cityName: "Angul",
    metaTitle: "Cake Delivery in Angul | NALCO Vedanta Coal Steel Industrial Odisha | RedHeart",
    metaDescription: "Order cakes online in Angul. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Angul",
    metaKeyword: "cake delivery angul, order cake online angul, birthday cake angul, custom cake angul, same day cake delivery angul NALCO aluminium Talcher coal Mahanadi coalfield NTPC Pradhan steel Odisha industrial Satkosia Tiger Reserve",
    footerContent: `
<h2>Cake Delivery in Angul — NALCO Aluminium, Talcher Coal Corridor, Satkosia Gorge Tiger Reserve</h2>
<p>Angul — the district headquarters of Angul district in Odisha, one of India's most significant industrial and energy-sector districts — home to the Talcher coalfields and NALCO aluminium complex (the Talcher Coalfield (in Angul district) — one of India's largest coalfields (the Talcher Coalfield is part of the larger Mahanadi Coalfield; it has the second-largest coal reserves in India after Jharia; multiple NTPC and Mahanadi Coalfields Ltd. mines and thermal power plants operate in Talcher-Angul; Talcher has been India's highest coal production area historically); the National Aluminium Company (NALCO) Smelter and Power Complex — one of Asia's largest integrated aluminium complexes, located at Angul; NALCO uses the Talcher coal for its captive power plant and smelts bauxite (from Koraput) into aluminium; NALCO is a Navratna PSU and one of India's largest aluminium producers; Vedanta Aluminium (Jharsuguda) also benefits from the Talcher coal corridor; the Satkosia Tiger Reserve (Mahanadi Gorge) — the Satkosia Gorge is one of Odisha's most spectacular natural features — a 22 km long gorge carved by the Mahanadi River through the Eastern Ghats; home to gharial crocodiles (critically endangered; one of their last natural habitats), tigers, leopards; the Satkosia Wildlife Sanctuary covers 795 sq km; the Ushakothi Wildlife Sanctuary (adjacent)), and a city of NALCO aluminium and Talcher coal energy — is Odisha's most industrially coal-NALCO-aluminium powerfully Mahanadi-gorge-Satkosia district. From birthday parties in Angul to celebration cakes — RedHeart covers all Angul zones: Angul city, Talcher, Athamallik, Chhendipada, Banarpal, Pallahara, Kaniha.</p>
<p>Our Angul cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Angul, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Angul city, Talcher, Athamallik, Chhendipada, Banarpal, Pallahara, Kaniha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Angul?", answer: "Yes, same-day cake delivery is available across all Angul areas — Angul city, Talcher, Athamallik, Chhendipada, Banarpal, and Pallahara — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Angul?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Angul delivery." },
      { question: "Do you deliver midnight cakes in Angul?", answer: "Yes, midnight birthday cake delivery is available across Angul city and Talcher zones." }
    ]
  },

  "koraput": {
    cityName: "Koraput",
    metaTitle: "Cake Delivery in Koraput | Tribal Heritage Jeypore GI Koraput Black Rice Odisha | RedHeart",
    metaDescription: "Order cakes online in Koraput. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Koraput",
    metaKeyword: "cake delivery koraput, order cake online koraput, birthday cake koraput, custom cake koraput, same day cake delivery koraput tribal Kondh Bondha GI Koraput Black Rice Jeypore Duduma Falls NALCO bauxite Eastern Ghats Odisha",
    footerContent: `
<h2>Cake Delivery in Koraput — GI Koraput Black Rice, Kondh-Bondha Tribal Heritage, and Eastern Ghats Biodiversity</h2>
<p>Koraput — the district headquarters of Koraput district in Odisha, one of India's most tribally rich and biodiversity-significant districts in the Eastern Ghats — home to unique tribal communities, GI rice, and spectacular waterfalls (the Koraput district has one of the highest tribal populations in Odisha — the Kondh (Kandha), Bondha (the "naked tribe" — one of the most photographed tribal communities in India; the Bondha women wear traditional brass jewellery rings around their necks; live in the Bondha Hills of Malkangiri-Koraput border), Gadaba, Bondo Poraja, Paroja, and Lanjia Saura (famous for Ittala/ittal mural paintings on house walls — geometric folk paintings in red-white-black) communities; the GI Koraput Black Rice (Kalajeera/Boirani rice — a short-grain, aromatic, black-hulled rice grown in the tribal areas of Koraput; rich in anthocyanins; unique nutty flavour; GI protected; Koraput black rice has attracted national and international attention as a health food and tribal agriculture product); the Duduma Waterfalls (Machkund River — 157 metres; one of Odisha's tallest waterfalls; the Machkund hydroelectric project); the Jeypore (Jaypur) (the headquarters of the former Jeypore Estate — a significant feudal kingdom; Jeypore town has an old palace; the NALCO bauxite mines in the area); the Deomali Peak (Odisha's highest peak at 1,672 m — in Koraput's Pottangi area)), and a city of GI Black Rice tribal agriculture and Eastern Ghats tribal art — is Odisha's most tribally Bondha-Kondh-richly diverse and GI Black Rice anthocyanin-health-foodly unique district. From birthday parties in Koraput to celebration cakes — RedHeart covers all Koraput zones: Koraput city, Jeypore, Sunabeda, Kotpad, Narayanpatna, Lamtaput, Boipariguda.</p>
<p>Our Koraput cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant GI Koraput Black Rice / Bondha Tribal Brass Jewellery / Duduma Waterfall Machkund / Lanjia Saura Ittala Mural-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koraput, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koraput city, Jeypore, Sunabeda, Kotpad, Narayanpatna, Lamtaput, Boipariguda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Koraput Black Rice Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Koraput?", answer: "Yes, same-day cake delivery is available across all Koraput areas — Koraput city, Jeypore, Sunabeda, Kotpad, Narayanpatna, and Lamtaput — for orders placed before 3 PM." },
      { question: "Do you have GI Koraput Black Rice-themed cakes?", answer: "Yes! The GI Koraput Black Rice (Kalajeera/Boirani black-hulled aromatic rice grown in tribal areas; rich in anthocyanins; unique nutty flavour; tribal agriculture product now gaining national health-food attention) inspires our most GI-black-rice-anthocyanin-health-foodly and tribally Eastern-Ghats-unique Koraput fondant cakes." },
      { question: "Are eggless cakes available in Koraput?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Koraput delivery." }
    ]
  },

  "bageshwar": {
    cityName: "Bageshwar",
    metaTitle: "Cake Delivery in Bageshwar | Bagnath Temple Kafni Glacier Kumaon Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Bageshwar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bageshwar",
    metaKeyword: "cake delivery bageshwar, order cake online bageshwar, birthday cake bageshwar, custom cake bageshwar, same day cake delivery bageshwar Bagnath Temple Gomti Saryu Pindari Glacier Kafni Glacier Uttarayan Fair Kumaon Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Bageshwar — Bagnath Temple, Pindari-Kafni Glacier Treks, and the Pilgrim Hub of Kumaon</h2>
<p>Bageshwar — the district headquarters of Bageshwar district in Uttarakhand (Kumaon division), a high-altitude pilgrimage town at the confluence of the Saryu and Gomti rivers — one of Uttarakhand's most sacred and scenic mountain districts (the Bagnath Temple (dedicated to Shiva as Bagnath — Lord of tigers; an ancient Shiva shrine at the Saryu-Gomti confluence; the town is built around this temple; the Uttarayan Fair (Makar Sankranti/January) — a major month-long fair at Bagnath temple; one of Kumaon's most significant religious gatherings; Bageshwar has historically been the commercial centre for the trans-Himalayan trade between Kumaon and Tibet (salt, wool, grain)); the Pindari Glacier Trek (80 km trek from Loharkhet through the Kafni-Pindari valley; one of India's most accessible glacier treks for non-technical trekkers; the Pindari Glacier is a significant source of the Pinder River; the glacier trek passes through the Pindari Glacier Wildlife Sanctuary / Nanda Devi Biosphere Reserve buffer); the Kafni Glacier (a more demanding branch of the Pindari trek); the Sundardhunga Glacier; the Kapkot, Dwarahat (near Bageshwar), the Baijnath temple (12th century CE Katyuri dynasty Shiva temple complex at Baijnath — 18 Shiva temples; one of Uttarakhand's finest groups of medieval temples; the Katyuri kings who built these temples are considered the predecessors of modern Kumaon rulers)), and a city of Bagnath Shiva pilgrimage and Pindari Glacier — is Uttarakhand's most sacredly Saryu-Gomti-confluently pilgrimage and Pindari-glacier-trekably accessible Kumaon district. From birthday parties in Bageshwar to celebration cakes — RedHeart covers all Bageshwar zones: Bageshwar town, Garur, Kapkot, Baijnath, Kanda, Gairal.</p>
<p>Our Bageshwar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bagnath Temple Shiva / Pindari Glacier Trek / Baijnath Katyuri Temple Complex / Uttarayan Fair-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bageshwar, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bageshwar town, Garur, Kapkot, Baijnath, Kanda, Gairal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bagnath Temple Fondant, Pindari Glacier Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bageshwar?", answer: "Yes, same-day cake delivery is available across all Bageshwar areas — Bageshwar town, Garur, Kapkot, Baijnath, and Kanda — for orders placed before 3 PM." },
      { question: "Do you have Bagnath Temple and Pindari Glacier-themed cakes?", answer: "Yes! The Bagnath Temple (an ancient Shiva shrine at Saryu-Gomti confluence — Shiva as Bagnath, Lord of tigers; the grand Uttarayan Fair in January draws Kumaon's largest pilgrimage crowds) and the Pindari Glacier Trek (80 km accessible glacier trek from Loharkhet through the Kafni-Pindari valley in Nanda Devi Biosphere buffer zone) inspire our most Shiva-Bagnath-sacredly confluent and glacier-trekably accessible Kumaon Bageshwar fondant cakes." },
      { question: "Are eggless cakes available in Bageshwar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bageshwar delivery." }
    ]
  },

  "chamoli": {
    cityName: "Chamoli",
    metaTitle: "Cake Delivery in Chamoli Gopeshwar | Badrinath Valley of Flowers Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Chamoli (Gopeshwar). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chamoli (Gopeshwar)",
    metaKeyword: "cake delivery chamoli gopeshwar, order cake online chamoli, birthday cake chamoli, custom cake gopeshwar chamoli, same day cake delivery chamoli Badrinath Char Dham Valley of Flowers UNESCO Hemkund Sahib Nanda Devi Biosphere Auli Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Chamoli (Gopeshwar) — Badrinath Char Dham, Valley of Flowers UNESCO, Auli Ski Resort, and Nanda Devi Biosphere</h2>
<p>Chamoli (Gopeshwar) — the district headquarters of Chamoli district in Uttarakhand (Garhwal division), one of the most pilgrimage-dense and ecologically extraordinary districts in India — home to Badrinath, Valley of Flowers, and Auli (the Badrinath Temple (Badrinarayan Temple) — one of India's four Char Dhams; situated at 3,133 m altitude on the Alaknanda River; dedicated to Lord Vishnu; one of the 108 Divya Desams; the main Badrinath temple (reconstructed multiple times; current structure renovated by Garhwal Kings; the medieval-period temple with its colourful facade) is open only from May to November (snows close it in winter — the deity is worshipped at Joshimath during winter); the Tapt Kund (a naturally warm sulphur spring near Badrinath — pilgrims bathe before entering the temple); the Valley of Flowers National Park (UNESCO World Heritage 2005 — as part of the Nanda Devi Biosphere Reserve; the Valley of Flowers (Pushpawati Valley) is a 87.5 sq km alpine valley at 3,658-6,675 m altitude; 500+ species of wildflowers bloom (July-September); meadows of Brahmakamal (Saussurea obvallata — the Himalayan lotus; the rarest and most sacred alpine flower); the Hemkund Sahib (Gurdwara Hemkund Sahib — 4,329 m altitude; a frozen glacial lake; the 10th Sikh Guru Gobind Singh meditated here in a previous life (per the Bachittar Natak); one of the world's highest Sikh gurdwaras; millions of pilgrims trek the steep 13 km path; open June-October only); the Auli (Auli — 2,519 m altitude; India's best ski resort; 4 km ski slope; aerial ropeway from Joshimath; the Auli skiing championships), the Nanda Devi National Park UNESCO 1988), and a city of Badrinath Char Dham and Valley of Flowers UNESCO — is Uttarakhand's most Char-Dhamily Vaishnava-sacred and Valley-of-Flowers-UNESCO-alpine-botanically extraordinary district. From birthday parties in Chamoli to celebration cakes — RedHeart covers all Chamoli zones: Gopeshwar (HQ), Joshimath, Badrinath, Auli, Karnaprayag, Pokhari, Tharali.</p>
<p>Our Chamoli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Badrinath Char Dham Temple / Valley of Flowers UNESCO Brahmakamal / Hemkund Sahib Glacial Lake / Auli Ski Resort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamoli (Gopeshwar), Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopeshwar, Joshimath, Badrinath, Auli, Karnaprayag, Pokhari, Tharali</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Badrinath Char Dham Fondant, Valley of Flowers UNESCO Fondant, Hemkund Sahib Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chamoli (Gopeshwar)?", answer: "Yes, same-day cake delivery is available across all Chamoli areas — Gopeshwar, Joshimath, Badrinath, Auli, Karnaprayag, Pokhari, and Tharali — for orders placed before 3 PM." },
      { question: "Do you have Badrinath Char Dham and Valley of Flowers UNESCO-themed cakes?", answer: "Yes! The Badrinath Temple (Char Dham; 3,133 m altitude; Alaknanda River; Tapt Kund warm spring; open May-November) and the Valley of Flowers (UNESCO 2005; 500+ wildflower species; Brahmakamal Himalayan lotus; 87.5 sq km alpine paradise at 3,658-6,675 m) inspire our most Char-Dhamily Vaishnava-sacred and UNESCO-alpine-botanically blooming Chamoli fondant cakes." },
      { question: "Are eggless cakes available in Chamoli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chamoli (Gopeshwar) delivery." }
    ]
  },

  "uttarkashi": {
    cityName: "Uttarkashi",
    metaTitle: "Cake Delivery in Uttarkashi | Gangotri Yamunotri Char Dham Nehru Institute Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Uttarkashi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Uttarkashi",
    metaKeyword: "cake delivery uttarkashi, order cake online uttarkashi, birthday cake uttarkashi, custom cake uttarkashi, same day cake delivery uttarkashi Gangotri Yamunotri Char Dham Ganga origin Nehru Institute Mountaineering NIM Bhagirathi Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Uttarkashi — Gangotri-Yamunotri Char Dhams, NIM Mountaineering Institute, and the Birthplace of Ganga</h2>
<p>Uttarkashi — the district headquarters of Uttarkashi district in Uttarakhand (Garhwal division), one of Uttarakhand's most sacred and adventure-rich districts — housing two of the four Char Dhams and the nation's premier mountaineering institute (the Gangotri Temple (Gangotri — the temple dedicated to Goddess Ganga at 3,100 m altitude; the Bhagirathi River (called Ganga from here) flows past the temple; the Gangotri Glacier (25 km further at 4,250 m) is the actual source of the Bhagirathi (and thus the Ganga); the Gaumukh snout (the 'cow's mouth' shape of the glacier's terminus — the actual Ganga origin) has receded significantly due to climate change and glacier retreat; the Kedar Tal Lake (4,750 m); the Yamunotri Temple (at 3,293 m in the far northwest of Uttarkashi district; dedicated to Goddess Yamuna; near the Champasar Glacier which is the source of the Yamuna; pilgrims cook rice/potatoes in the Surya Kund natural hot spring at the temple); the Nehru Institute of Mountaineering (NIM) — India's premier mountaineering institute, established 1965 at Uttarkashi; NIM trains mountaineers for Himalayan expeditions; most of India's significant Himalayan mountaineers (including those who climbed Everest) have trained at NIM; the Basic and Advanced Mountaineering Courses here are the gold standard; the Vishwanath Temple (Uttarkashi town — the main Shiva temple); the Dodital Lake (a pristine high-altitude lake); 2013 Kedarnath flood also affected areas in Uttarkashi), and a city of two Char Dhams and NIM mountaineering excellence — is Uttarakhand's most Char-Dham-doubly sacred and NIM-mountaineering-gold-standardly highest-altitude district. From birthday parties in Uttarkashi to celebration cakes — RedHeart covers all Uttarkashi zones: Uttarkashi town, Bhatwari, Gangotri, Chinyalisaur, Naugaon, Purola.</p>
<p>Our Uttarkashi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Gangotri Ganga Origin / Yamunotri Yamuna Source / NIM Mountaineering / Gaumukh Glacier-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Uttarkashi, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Uttarkashi town, Bhatwari, Gangotri, Chinyalisaur, Naugaon, Purola</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gangotri Ganga Origin Fondant, Yamunotri Fondant, NIM Mountaineering Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Uttarkashi?", answer: "Yes, same-day cake delivery is available across all Uttarkashi areas — Uttarkashi town, Bhatwari, Gangotri, Chinyalisaur, Naugaon, and Purola — for orders placed before 3 PM." },
      { question: "Do you have Gangotri Ganga Origin and NIM Mountaineering-themed cakes?", answer: "Yes! The Gangotri (3,100 m; Bhagirathi/Ganga source; the Gaumukh glacier snout 25 km further at 4,250 m — the actual Ganga birthplace now receding with climate change; one of the four Char Dhams) and the Nehru Institute of Mountaineering (NIM, 1965 — India's premier mountaineering training centre; all major Everest summiteers from India trained here) inspire our most Ganga-birthplace-glacier-source and NIM-Himalayan-training-gold-standard Uttarkashi fondant cakes." },
      { question: "Are eggless cakes available in Uttarkashi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Uttarkashi delivery." }
    ]
  },

  "chamba": {
    cityName: "Chamba",
    metaTitle: "Cake Delivery in Chamba | Chaugan Lakshmi Narayan Temples Ravi River HP | RedHeart",
    metaDescription: "Order cakes online in Chamba. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chamba",
    metaKeyword: "cake delivery chamba, order cake online chamba, birthday cake chamba, custom cake chamba, same day cake delivery chamba Chaugan Lakshmi Narayan Temple GI Chamba Rumal embroidery Ravi River Manimahesh Kailash HP Himachal Pradesh",
    footerContent: `
<h2>Cake Delivery in Chamba — GI Chamba Rumal Embroidery, Chaugan Meadow, Manimahesh Kailash, and Ravi River Valley</h2>
<p>Chamba — the district headquarters of Chamba district in Himachal Pradesh, one of the most culturally intact and historically significant hill towns in India — a remote mountain kingdom that preserved its traditions through geographical isolation (the Chamba town sits at 996 m in the Ravi River valley; the Chamba kingdom (established 6th century CE — one of the oldest surviving hill principalities) was notable for its unique pahari (hill) culture, miniature painting tradition, and remarkably well-preserved medieval temple architecture; the Lakshmi Narayan Temple Complex (6th-10th century CE; six temples in one complex — three dedicated to Vishnu, three to Shiva; the oldest is the Lakshmi Narayan Temple (550 CE approximately); unique North Indian shikhara style with carved stone; the Chamba sculptures are considered some of the finest early medieval stone sculptures in the Western Himalayas; the Chamba Chaugan (the large central meadow/ground of Chamba town — used for the Minjar Fair and other festivals; the Chamba Minjar Fair (July-August — a unique fair where silk and maize threads (Minjars) are offered to the Ravi River for agricultural prosperity); the GI Chamba Rumal (hand-embroidered Pahari paintings on cloth — usually silk or cotton; the embroidery reproduces Chamba miniature paintings with thread; GI-protected; extremely intricate; the needlework on both sides looks identical — double-faced embroidery); the Manimahesh Lake (4,080 m — sacred glacial lake at the base of the Manimahesh Kailash peak (5,656 m); annual Manimahesh Yatra (August-September) — one of Himachal Pradesh's holiest pilgrimages; pilgrims carry on foot from Hadsar to the glacial lake)), and a city of GI Rumal embroidery and Manimahesh pilgrimage — is Himachal Pradesh's most Pahari-culturally intact and GI-Rumal-double-faced-thread-painterly ancient hill kingdom. From birthday parties in Chamba to celebration cakes — RedHeart covers all Chamba zones: Chamba city, Dalhousie, Khajjiar, Churah, Bharmour, Pangi, Tissa.</p>
<p>Our Chamba cake range: Chocolate, Black Forest, Red Velvet, Mango, Apple (HP!), Butterscotch, Photo Cakes, Fondant GI Chamba Rumal Embroidery / Manimahesh Kailash Yatra / Lakshmi Narayan Temple / Chaugan Minjar Fair-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamba, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamba city, Dalhousie, Khajjiar, Churah, Bharmour, Pangi, Tissa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple (HP!), Chocolate, GI Chamba Rumal Fondant, Manimahesh Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chamba?", answer: "Yes, same-day cake delivery is available across all Chamba areas — Chamba city, Dalhousie, Khajjiar, Churah, Bharmour, and Pangi — for orders placed before 3 PM." },
      { question: "Do you have GI Chamba Rumal and Manimahesh Kailash-themed cakes?", answer: "Yes! The GI Chamba Rumal (hand-embroidered Pahari silk paintings — extremely intricate; the embroidery looks identical on both sides — a double-faced needlework art unique to Chamba) and the Manimahesh Kailash (5,656 m peak; the sacred 4,080 m glacial Manimahesh Lake at its base; annual pilgrimage one of HP's holiest) inspire our most GI-Rumal-double-faced-embroidery and Manimahesh-glacially-sacredly-pilgrimage Chamba fondant cakes." },
      { question: "Are eggless cakes available in Chamba?", answer: "Yes, all flavours — Apple, Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chamba delivery." }
    ]
  },

  "una": {
    cityName: "Una",
    metaTitle: "Cake Delivery in Una | Himachal Pradesh Industry Punjab Border Anandpur Sahib HP | RedHeart",
    metaDescription: "Order cakes online in Una. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Una",
    metaKeyword: "cake delivery una, order cake online una, birthday cake una, custom cake una, same day cake delivery una Himachal Pradesh Punjab border industrial hub Swan River Anandpur Sahib adjacent Chintpurni Mata temple Kangra valley adjacent HP",
    footerContent: `
<h2>Cake Delivery in Una — HP's Industrial Gateway, Chintpurni Mata Temple, and Punjab-HP Crossroads</h2>
<p>Una — the district headquarters of Una district in Himachal Pradesh (the youngest HP district, created from Kangra in 1972), the most industrially developed district in Himachal Pradesh and the gateway between Punjab and the Himalayas (the Una district is the flattest district of Himachal Pradesh — the Shivalik foothills give way to the plains of Punjab; the Una district has one of HP's largest industrial concentrations (the Gagret, Mehatpur, Amb industrial areas); Una's proximity to Punjab makes it an industrial spillover zone for pharmaceutical, footwear, and engineering industries; the Una city is a thriving commercial hub on the HP-Punjab border (NH-70 connecting Una to Anandpur Sahib); the Swan River (flows through the Una valley); the Chintpurni Mata (Shri Chintpurni Devi) — one of the most visited Shakti Peethas in HP; the temple at Chintpurni in Una district is one of the 51 Shakti Peethas (the feet of Sati fell here); it is among HP's highest-footfall temples; the Bangana (near Una — Bangana fort remains); the Amb town; the Una district produces maize, wheat, and sugarcane; the proximity to Anandpur Sahib (Punjab — birthplace of the Khalsa, 1699 CE, Guru Gobind Singh)), and a city of HP-Punjab industrial gateway and Chintpurni Shakti Peeth — is Himachal Pradesh's most industrially flatland-gateway and Chintpurni-Shakti-Peeth-feet-of-Sati pilgrimaged district. From birthday parties in Una to celebration cakes — RedHeart covers all Una zones: Una city, Amb, Bangana, Gagret, Mehatpur, Haroli, Chintpurni.</p>
<p>Our Una cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chintpurni Mata Shakti Peeth / Swan River / Industrial Gateway HP / Una-Punjab Border-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Una, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Una city, Amb, Bangana, Gagret, Mehatpur, Haroli, Chintpurni</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chintpurni Mata Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Una?", answer: "Yes, same-day cake delivery is available across all Una areas — Una city, Amb, Bangana, Gagret, Mehatpur, Haroli, and Chintpurni — for orders placed before 3 PM." },
      { question: "Do you have Chintpurni Mata Shakti Peeth-themed cakes?", answer: "Yes! The Shri Chintpurni Devi Temple (one of the 51 Shakti Peethas — the feet of Sati are said to have fallen here; one of Himachal Pradesh's highest-footfall pilgrimage temples) inspires our most Shakti-Peeth-feet-of-Sati-pilgrimage Una fondant cakes." },
      { question: "Are eggless cakes available in Una?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Una delivery." }
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
