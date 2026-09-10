// Cakes Batch 18 — 15 cities:
// Maharashtra: Yavatmal, Washim, Hingoli, Buldhana, Parbhani
// Karnataka: Haveri, Chitradurga, Bagalkot
// Tamil Nadu: Krishnagiri, Ariyalur
// Telangana: Mahbubnagar (Nalgonda)
// Assam: Tezpur
// UP: Mirzapur, Lakhimpur Kheri
// Bihar: Madhubani

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "yavatmal": {
    cityName: "Yavatmal",
    metaTitle: "Cake Delivery in Yavatmal | Cotton City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Yavatmal. Same-day delivery across Yavatmal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Yavatmal",
    metaKeyword: "cake delivery yavatmal, order cake online yavatmal, birthday cake yavatmal, custom cake yavatmal, same day cake delivery yavatmal civil lines pandharpur road wardha road cotton farmers vidarbha",
    footerContent: `
<h2>Cake Delivery in Yavatmal — Vidarbha's Cotton Heartland and India's Agrarian Crisis Symbol</h2>
<p>Yavatmal — the headquarters of Yavatmal district in Maharashtra's Vidarbha region, a city of profound agricultural significance and poignant historical importance (Yavatmal district is one of India's most cotton-intensive farming areas — the Vidarbha cotton belt, known for growing Bt cotton, has seen some of India's most devastating agrarian distress; Yavatmal has been at the centre of India's farmer suicide crisis, as cotton farmers burdened by loans and crop failures have faced immense pressures; the Maharashtra and central governments have repeatedly implemented special farm packages for Vidarbha; activists, journalists, and policymakers have spent decades documenting Yavatmal's farming crisis; conversely, the cotton prosperity years produce enormous agricultural wealth here), the headquarters of one of Maharashtra's largest cotton markets, located in the Wainganga River basin, and close to Tipeshwar Wildlife Sanctuary (a tiger reserve with a significant tiger population in the Vidarbha forest corridor) — is a city of agricultural complexity and natural richness. From birthday parties in the Civil Lines area to corporate cakes at the cotton marketing offices, from anniversary surprises near the Station Road belt to student cakes at Yavatmal's colleges — RedHeart covers all Yavatmal zones: Central (Civil Lines, Station Road, Pandharpur Road), North (Wardha Road, Morshi, Amravati border), South (Pusad Road, Wani, Mahur), East (Chandrapur Road, Wani, Kelapur), West (Daryapur Road, Buldana border).</p>
<p>Our Yavatmal cake range: Chocolate, Black Forest, Red Velvet, Mango (Vidarbha Kesar!), Butterscotch, Photo Cakes, Fondant Tipeshwar Tiger / Vidarbha cotton-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yavatmal, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Pandharpur Road, Wardha Road, Pusad Road, Wani</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Yavatmal?", answer: "Yes, same-day cake delivery is available across all Yavatmal areas — Civil Lines, Station Road, Pandharpur Road, and Wardha Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Yavatmal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Yavatmal delivery." },
      { question: "Do you deliver midnight cakes in Yavatmal?", answer: "Yes, midnight birthday cake delivery is available across Yavatmal's central and residential zones." }
    ]
  },

  "washim": {
    cityName: "Washim",
    metaTitle: "Cake Delivery in Washim | Vidarbha Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Washim. Same-day delivery across Washim. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Washim",
    metaKeyword: "cake delivery washim, order cake online washim, birthday cake washim, custom cake washim, same day cake delivery washim civil lines akola road mangrulpir shegaon cotton soya",
    footerContent: `
<h2>Cake Delivery in Washim — Vidarbha's Soybean-Cotton Belt and Shegaon's Pilgrimage Gateway</h2>
<p>Washim — the headquarters of Washim district in Maharashtra's Vidarbha region, a city of agricultural significance (Washim district is one of Maharashtra's leading soybean-growing districts — the Vidarbha soybean crop, grown on the black cotton soil Deccan plateau, is exported extensively; cotton, jowar, tur dal, and wheat are also significant crops; the Washim Mandi is a major agricultural commodity trading centre), the gateway to Shegaon (70 km from Washim — one of Maharashtra's most revered pilgrimage centres: the Shri Gajanan Maharaj temple at Shegaon, where the 19th-century saint Gajanan Maharaj is said to have performed miracles; the Anand Sagar garden at Shegaon is one of the state's most visited tourist sites, drawing 1 crore visitors annually), located on the Akola-Nanded highway, and a district that has been part of Vidarbha's development-focused governance push — is a city of pilgrimage gateway and agricultural importance. From birthday parties in the Civil Lines area to corporate cakes at the large soybean processing plants, from anniversary surprises near the Akola Road belt to student cakes at Washim's colleges — RedHeart covers all Washim zones: Central (Civil Lines, Station Road, Akola Road), North (Amravati Road, Mangrulpir, Risod), South (Nanded Road, Malegaon, Yavatmal Road), East (Yavatmal Road, Manora), West (Buldhana Road, Akola border).</p>
<p>Our Washim cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Gajanan Maharaj Shegaon-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Washim, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Akola Road, Mangrulpir, Nanded Road, Amravati Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Washim?", answer: "Yes, same-day cake delivery is available across all Washim areas — Civil Lines, Station Road, Akola Road, and Mangrulpir — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Washim?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Washim delivery." },
      { question: "Do you deliver midnight cakes in Washim?", answer: "Yes, midnight birthday cake delivery is available across Washim's central and residential zones." }
    ]
  },

  "hingoli": {
    cityName: "Hingoli",
    metaTitle: "Cake Delivery in Hingoli | Aundha Nagnath Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Hingoli. Same-day delivery across Hingoli. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hingoli",
    metaKeyword: "cake delivery hingoli, order cake online hingoli, birthday cake hingoli, custom cake hingoli, same day cake delivery hingoli aundha nagnath jyotirlinga purna river nanded road soya cotton",
    footerContent: `
<h2>Cake Delivery in Hingoli — Aundha Nagnath Jyotirlinga's City and Marathwada-Vidarbha Border's Gateway</h2>
<p>Hingoli — the headquarters of Hingoli district in Maharashtra, a city of significant religious importance (Aundha Nagnath Temple — one of India's 12 Jyotirlingas (Shiva's divine light manifestations) — is located at Aundha, 30 km from Hingoli town; the Aundha Nagnath temple is one of the oldest and most beautifully carved Hemadpanthi-style temples in Maharashtra, dating to the Yadava dynasty (12th century CE); Nagnath — Nageshwar Shiva — is one of the most important Shivalingas in Hinduism; Hingoli's proximity to Aundha makes it a pilgrimage gateway city; the temple draws lakhs of devotees on Mahashivratri and Shravan Somvar), located in the Purna River basin (the Purna River — a Godavari tributary — flows through Hingoli district providing irrigation for cotton, soybean, and jowar cultivation), and a border district between Marathwada and Vidarbha — is a city of divine Jyotirlinga significance. From birthday parties in the Civil Lines area to corporate cakes at the large agricultural commodity firms, from Mahashivratri celebration cakes to anniversary surprises near the Nanded Road belt — RedHeart covers all Hingoli zones: Central (Civil Lines, Station Road, Nanded Road), North (Aundha Road, Purna, Basmath), South (Parbhani Road, Sengaon, Kalamnuri), East (Yavatmal Road, Washim Road, Manora), West (Buldana Road, Nanded border).</p>
<p>Our Hingoli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Aundha Nagnath Jyotirlinga-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hingoli, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Nanded Road, Aundha Road, Basmath, Parbhani Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nagnath Jyotirlinga Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hingoli?", answer: "Yes, same-day cake delivery is available across all Hingoli areas — Civil Lines, Station Road, Nanded Road, and Aundha Road — for orders placed before 3 PM." },
      { question: "Do you have Aundha Nagnath Jyotirlinga-themed cakes in Hingoli?", answer: "Yes! The Aundha Nagnath Temple — one of India's 12 sacred Jyotirlingas, 30 km from Hingoli — inspires our Nagnath Jyotirlinga fondant cakes. A deeply meaningful local design for Hingoli celebrations." },
      { question: "Are eggless cakes available in Hingoli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hingoli delivery." }
    ]
  },

  "buldhana": {
    cityName: "Buldhana",
    metaTitle: "Cake Delivery in Buldhana | Lonar Lake Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Buldhana. Same-day delivery across Buldhana. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Buldhana",
    metaKeyword: "cake delivery buldhana, order cake online buldhana, birthday cake buldhana, custom cake buldhana, same day cake delivery buldhana lonar lake meteorite crater chikhli akola road jalgaon road",
    footerContent: `
<h2>Cake Delivery in Buldhana — Lonar Crater Lake's District, Khamgaon Silk City, and Vidarbha's Ancient Meteorite Wonder</h2>
<p>Buldhana — the headquarters of Buldhana district in Maharashtra's Vidarbha region, one of India's most scientifically extraordinary cities (the Lonar Crater Lake — 80 km from Buldhana — is the world's 4th-largest and India's only meteorite impact crater lake; formed 52,000 years ago when a 2 million-tonne meteorite struck the Deccan Plateau at 90,000 km/hr, creating a 1.8 km diameter, 150 m deep crater now filled with a hyper-saline, alkaline lake of unique chemistry; the lake is a biodiversity hotspot with rare bacteria, birds, and ancient temples including the Daitya Sudan Temple on the lake shore; ISRO scientists study Lonar as an analogue for Mars craters; Lonar is a UNESCO-recommended Geoheritage site), famous for Khamgaon Silk (the Khamgaon subdivision of Buldhana district produces traditional silk sarees and is known as Vidarbha's silk town), and a major cotton-soybean growing district — is a city of cosmic scientific wonder. From birthday parties in the Civil Lines area to corporate cakes at the large cotton firms, from anniversary surprises near the Akola Road to student cakes at Buldhana's colleges — RedHeart covers all Buldhana zones: Central (Civil Lines, Station Road, Akola Road), North (Jalgaon Road, Shegaon Road, Khamgaon), South (Aurangabad Road, Balapur, Majalgaon Road), East (Washim Road, Khamgaon Road), West (Akola border, Motala, Sindkhedraja).</p>
<p>Our Buldhana cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Lonar Crater Lake / meteorite-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Buldhana, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Akola Road, Jalgaon Road, Khamgaon, Aurangabad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Lonar Meteorite Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Buldhana?", answer: "Yes, same-day cake delivery is available across all Buldhana areas — Civil Lines, Station Road, Akola Road, and Khamgaon — for orders placed before 3 PM." },
      { question: "Do you have Lonar Crater Lake-themed cakes in Buldhana?", answer: "Yes! The Lonar Crater Lake — the world's only hyper-saline meteorite impact crater lake, formed 52,000 years ago in Buldhana district — inspires our Lonar Meteorite fondant cakes. A truly cosmic local design." },
      { question: "Are eggless cakes available in Buldhana?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Buldhana delivery." }
    ]
  },

  "parbhani": {
    cityName: "Parbhani",
    metaTitle: "Cake Delivery in Parbhani | Marathwada Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Parbhani. Same-day delivery across Parbhani. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Parbhani",
    metaKeyword: "cake delivery parbhani, order cake online parbhani, birthday cake parbhani, custom cake parbhani, same day cake delivery parbhani civil lines nanded road aurangabad road purna river cotton soya",
    footerContent: `
<h2>Cake Delivery in Parbhani — Marathwada's Agricultural Hub, Purna River Valley, and Soybean-Cotton Belt City</h2>
<p>Parbhani — the headquarters of Parbhani district in Maharashtra's Marathwada region, a city of agricultural importance (Parbhani district is one of Marathwada's leading cotton and soybean-growing areas; the district has multiple cooperative sugar factories and cotton processing units; the Purna River — a Godavari tributary that flows through the district — irrigates the cotton-soybean-jowar farmlands; the Parbhani Mandi is one of Marathwada's most active commodity markets), home to Vasantrao Naik Marathwada Krishi Vidyapeeth (VNMKV — a major agricultural university established in 1972 that serves Marathwada's farming community with research and extension services; it is one of Maharashtra's four agricultural universities), and a regional service city for the central Marathwada plateau — is a city of agricultural education and commodity trade importance. From birthday parties in the Civil Lines area to corporate cakes at the large cotton ginning factories, from anniversary surprises near the Nanded Road belt to student cakes at VNMKV and Parbhani's colleges — RedHeart covers all Parbhani zones: Central (Civil Lines, Station Road, Nanded Road), North (Aurangabad Road, Jintur, Selu), South (Latur Road, Purna, Gangakhed), East (Hingoli Road, Sonpeth, Pathri), West (Jalna Road, Ambad border).</p>
<p>Our Parbhani cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Parbhani, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Nanded Road, Aurangabad Road, Latur Road, Jintur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Parbhani?", answer: "Yes, same-day cake delivery is available across all Parbhani areas — Civil Lines, Station Road, Nanded Road, and Aurangabad Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Parbhani?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Parbhani delivery." },
      { question: "Do you deliver midnight cakes in Parbhani?", answer: "Yes, midnight birthday cake delivery is available across Parbhani's central and residential zones." }
    ]
  },

  "haveri": {
    cityName: "Haveri",
    metaTitle: "Cake Delivery in Haveri | Tobacco-Cotton Karnataka | RedHeart",
    metaDescription: "Order cakes online in Haveri. Same-day delivery across Haveri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Haveri",
    metaKeyword: "cake delivery haveri, order cake online haveri, birthday cake haveri, custom cake haveri, same day cake delivery haveri civil lines dharwad road ranebennur hangal shiggaon tobacco cotton",
    footerContent: `
<h2>Cake Delivery in Haveri — Karnataka's Tobacco Capital, Ranebennur Blackbuck Sanctuary, and Tungabhadra Zone's Gateway</h2>
<p>Haveri — the headquarters of Haveri district in northern Karnataka, a city of agricultural and wildlife significance (Haveri district is one of Karnataka's leading tobacco-growing areas — the Karnataka-Andhra flue-cured tobacco belt produces high-quality FCV tobacco; the Ranebennur area of Haveri district is particularly famous for tobacco cultivation; additionally, the district produces significant cotton, groundnut, and sunflower), home to the Ranebennur Blackbuck Sanctuary (one of Karnataka's important wildlife reserves, protecting a significant population of Indian blackbuck — the state animal of Andhra Pradesh — in the scrub plains of Haveri district; the sanctuary also hosts the Great Indian Bustard corridor area and wolf packs), and located on the Dharwad-Hubli belt of northern Karnataka — is a city of tobacco agriculture and wildlife conservation. From birthday parties in the Civil Lines area to corporate cakes at the large tobacco processing firms, from anniversary surprises near the Dharwad Road market to student cakes at Haveri's colleges — RedHeart covers all Haveri zones: Central (Civil Lines, Station Road, Dharwad Road), North (Gadag Road, Hangal, Shiggaon), South (Ranebennur Road, Byadgi), East (Koppal Road, Hirekerur), West (Sirsi Road, Savanur).</p>
<p>Our Haveri cake range: Chocolate, Black Forest, Red Velvet, Mango (Karnataka Safeda!), Butterscotch, Photo Cakes, Fondant Ranebennur Blackbuck-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haveri, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Dharwad Road, Gadag Road, Hangal, Ranebennur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ranebennur Blackbuck Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Haveri?", answer: "Yes, same-day cake delivery is available across all Haveri areas — Civil Lines, Station Road, Dharwad Road, and Gadag Road — for orders placed before 3 PM." },
      { question: "Do you have Ranebennur Blackbuck-themed cakes in Haveri?", answer: "Yes! The Ranebennur Blackbuck Sanctuary — protecting one of Karnataka's largest blackbuck herds in Haveri district's scrub plains — inspires our Blackbuck fondant cakes. A proud local wildlife design." },
      { question: "Are eggless cakes available in Haveri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Haveri delivery." }
    ]
  },

  "chitradurga": {
    cityName: "Chitradurga",
    metaTitle: "Cake Delivery in Chitradurga | Fort City Karnataka | RedHeart",
    metaDescription: "Order cakes online in Chitradurga. Same-day delivery across Chitradurga. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chitradurga",
    metaKeyword: "cake delivery chitradurga, order cake online chitradurga, birthday cake chitradurga, custom cake chitradurga, same day cake delivery chitradurga fort hill station road davangere road onake obavva",
    footerContent: `
<h2>Cake Delivery in Chitradurga — Onake Obavva's Fort City, Karnataka's Stone Fortress, and Tungabhadra Zone's Commercial Hub</h2>
<p>Chitradurga — the headquarters of Chitradurga district in central Karnataka, one of Karnataka's most historically dramatic cities (the Chitradurga Fort — the "Stone Fort" — is a remarkable 18th-century hill fort built across seven concentric stone enclosures on a rocky granite hill by the Nayaka rulers (later captured by Hyder Ali in 1779); the fort's unique architecture — with 19 gates, 4 secret entrances, 38 smaller gates, 3 lakes, 15 temples — is one of Karnataka's finest historical monuments; the fort is famous for Onake Obavva — the legendary Kannada heroine who single-handedly fought Hyder Ali's soldiers with a pestle (onake) through a small breach in the fort wall while her husband was away, killing dozens of enemy soldiers and alerting the garrison; Onake Obavva is celebrated as a symbol of Kannada courage and womanhood; statues and memorial halls honour her across Karnataka), a major wind energy corridor (Chitradurga's granite plateau is one of India's windiest zones — hundreds of wind turbines line the Chitradurga plateau), and an important highway city on the Bangalore-Hubli NH-48 — is a city of historical martial heroism and renewable energy. From birthday parties in the Civil Lines area to corporate cakes at the wind energy companies, from anniversary surprises near the legendary Chitradurga Fort area to student cakes at the colleges — RedHeart covers all Chitradurga zones: Central (Civil Lines, Fort Road, Station Road), North (Davangere Road, Holalkere), South (Tumkur Road, Bangalore Road, Hiriyur), East (Bellary Road, Challakere), West (Shimoga Road, Hosadurga).</p>
<p>Our Chitradurga cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Onake Obavva / Chitradurga Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitradurga, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Fort Road, Station Road, Davangere Road, Tumkur Road, Challakere</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Onake Obavva Fort Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chitradurga?", answer: "Yes, same-day cake delivery is available across all Chitradurga areas — Civil Lines, Fort Road, Station Road, and Davangere Road — for orders placed before 3 PM." },
      { question: "Do you have Onake Obavva / Chitradurga Fort-themed cakes?", answer: "Yes! The legendary Onake Obavva — the Kannada heroine who defended Chitradurga Fort single-handedly with a pestle against Hyder Ali's army — inspires our Chitradurga Fort fondant cakes. A tribute to Kannada martial heritage." },
      { question: "Are eggless cakes available in Chitradurga?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chitradurga delivery." }
    ]
  },

  "bagalkot": {
    cityName: "Bagalkot",
    metaTitle: "Cake Delivery in Bagalkot | Pattadakal Heritage Karnataka | RedHeart",
    metaDescription: "Order cakes online in Bagalkot. Same-day delivery across Bagalkot. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bagalkot",
    metaKeyword: "cake delivery bagalkot, order cake online bagalkot, birthday cake bagalkot, custom cake bagalkot, same day cake delivery bagalkot pattadakal badami aihole chalukya malaprabha cement",
    footerContent: `
<h2>Cake Delivery in Bagalkot — Chalukya Heritage Triangle, Pattadakal World Heritage, and Karnataka's Cement-Limestone Belt</h2>
<p>Bagalkot — the headquarters of Bagalkot district in northern Karnataka, a city at the heart of the great Chalukya civilization's architectural legacy (the Bagalkot district contains one of India's most important UNESCO World Heritage Sites — the Pattadakal Group of Monuments (8th century Chalukya temples that represent the culmination of early Chalukya temple architecture, blending North Indian Nagara and South Indian Dravida styles; the Virupaksha, Sangameshwara, Mallikarjuna, and Papanatha temples are masterpieces of Indian temple art); additionally, the Badami Cave Temples (6th century Chalukya rock-cut architecture in Badami, 35 km from Bagalkot — the Chalukya capital — with stunning sculptural panels of Vishnu in Trivikrama, Nataraja Shiva, and Harihara) and Aihole (the earliest Chalukya temples, called the "cradle of Indian temple architecture") form the "Badami-Aihole-Pattadakal" Chalukya triangle, one of India's greatest heritage zones), a major limestone and cement district (the Malaprabha limestone formations in Bagalkot power several cement plants), and home to the Bagalkot Cement & Industries Ltd — is a city of extraordinary archaeological and industrial significance. From birthday parties in the Civil Lines area to corporate cakes at the large cement factories, from anniversary surprises near the Pattadakal corridor to student cakes at Bagalkot's colleges — RedHeart covers all Bagalkot zones: Central (Civil Lines, Station Road, Badami Road), North (Bijapur Road, Malaprabha belt, Mudhol), South (Dharwad Road, Gadag Road, Nargund), East (Koppal Road, Bellary border, Gudur), West (Hubli Road, Dharwad border).</p>
<p>Our Bagalkot cake range: Chocolate, Black Forest, Red Velvet, Mango (North Karnataka Safeda!), Butterscotch, Photo Cakes, Fondant Chalukya / Pattadakal heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bagalkot, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Badami Road, Bijapur Road, Gadag Road, Mudhol</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chalukya Heritage Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bagalkot?", answer: "Yes, same-day cake delivery is available across all Bagalkot areas — Civil Lines, Station Road, Badami Road, and Bijapur Road — for orders placed before 3 PM." },
      { question: "Do you have Chalukya / Pattadakal heritage-themed cakes in Bagalkot?", answer: "Yes! Bagalkot's magnificent Chalukya heritage — the UNESCO World Heritage Pattadakal temples, Badami cave temples, and Aihole 'cradle of Indian temple architecture' — inspires our Chalukya heritage fondant cakes." },
      { question: "Are eggless cakes available in Bagalkot?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bagalkot delivery." }
    ]
  },

  "krishnagiri": {
    cityName: "Krishnagiri",
    metaTitle: "Cake Delivery in Krishnagiri | Mango Belt Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Krishnagiri. Same-day delivery across Krishnagiri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Krishnagiri",
    metaKeyword: "cake delivery krishnagiri, order cake online krishnagiri, birthday cake krishnagiri, custom cake krishnagiri, same day cake delivery krishnagiri hosur road bangalore border mango belt granite SIPCOT",
    footerContent: `
<h2>Cake Delivery in Krishnagiri — Tamil Nadu's Mango Capital, Hosur's Satellite City, and Bangalore's Southern Industrial Corridor</h2>
<p>Krishnagiri — the headquarters of Krishnagiri district in northwestern Tamil Nadu, a city of dual agricultural and industrial fame (Krishnagiri district is Tamil Nadu's leading mango-growing district — the Krishnagiri Banganapalli, Neelam, Dashehari, and Alphonso mangoes from the Krishnagiri-Dharmapuri belt are among the finest; Krishnagiri's mango export volumes are the highest in Tamil Nadu, going to the Gulf countries, Europe, and Singapore; the district also produces significant tamarind, jasmine, and turmeric), the industrial gateway to Bangalore's tech/manufacturing spillover (Hosur — 35 km from Krishnagiri and part of Krishnagiri district — is one of India's fastest-growing industrial cities: home to Tata Motors, Titan Company, Infosys, Delphi, Bosch, BHEL, and Samsung manufacturing plants; the Hosur-Electronic City corridor is essentially Bangalore's eastern industrial arm), and a major granite quarrying area (Krishnagiri's black-galaxy granite is exported globally) — is a city of mango wealth and industrial prominence. From birthday parties near the Station Road to corporate cakes at the large industrial plants, from anniversary surprises near the Bangalore border corridor to student cakes at Krishnagiri's colleges — RedHeart covers all Krishnagiri zones: Central (Station Road, Hosur Road, Bangalore Road), North (Hosur Road, SIPCOT Industrial Area, Karnataka border), South (Salem Road, Bargur, Dharmapuri Road), East (Vellore Road, Tiruvannamalai Road), West (Bagalur, Shoolagiri, Kaveripattanam).</p>
<p>Our Krishnagiri cake range: Chocolate, Black Forest, Red Velvet, Mango (Krishnagiri Banganapalli — the famous TN mango!), Butterscotch, Photo Cakes, Fondant Mango orchard / Hosur industry-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnagiri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Hosur Road, Bangalore Road, SIPCOT Area, Salem Road, Shoolagiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango (Banganapalli), Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Krishnagiri?", answer: "Yes, same-day cake delivery is available across all Krishnagiri areas — Station Road, Hosur Road, Bangalore Road, and SIPCOT industrial area — for orders placed before 3 PM." },
      { question: "Do you have Krishnagiri mango cakes?", answer: "Yes! Krishnagiri's famous Banganapalli and Neelam mangoes — the district produces Tamil Nadu's highest mango volumes — inspire our Mango cake. The finest local fruit in every slice." },
      { question: "Are eggless cakes available in Krishnagiri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Krishnagiri delivery." }
    ]
  },

  "ariyalur": {
    cityName: "Ariyalur",
    metaTitle: "Cake Delivery in Ariyalur | Cement District Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Ariyalur. Same-day delivery across Ariyalur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ariyalur",
    metaKeyword: "cake delivery ariyalur, order cake online ariyalur, birthday cake ariyalur, custom cake ariyalur, same day cake delivery ariyalur cement limestone jayankondam perambalur trichy road",
    footerContent: `
<h2>Cake Delivery in Ariyalur — Tamil Nadu's Cement Capital, Jayankondam Lignite City, and Cauvery Delta's Gateway</h2>
<p>Ariyalur — the headquarters of Ariyalur district in Tamil Nadu, one of India's most important districts for cement production (the Ariyalur limestone belt — one of Tamil Nadu's richest limestone reserves — has made the district a major cement manufacturing hub; multiple large cement plants operate in Ariyalur and the adjoining Perambalur district; Ariyalur cement goes to construction projects across Tamil Nadu and South India; the district's economy is significantly driven by quarrying and cement manufacturing), home to Jayankondam's lignite fields (the Jayankondam area has significant lignite coal deposits mined for power generation in Tamil Nadu), close to the famous Ariyalur trilobite and dinosaur fossil sites (Ariyalur's Cretaceous geological formations have yielded ancient trilobite fossils, shark teeth, and sauropod dinosaur vertebrae — of global palaeontological interest), and a district in the transition zone between Tamil Nadu's Cauvery delta and the Deccan plateau. From birthday parties in the Civil Lines area to corporate cakes at the large cement factories, from anniversary surprises near the Trichy Road belt to student cakes at Ariyalur's colleges — RedHeart covers all Ariyalur zones: Central (Civil Lines, Station Road, Trichy Road), North (Perambalur Road, Jayankondam, Sendurai), South (Trichy Road, Manapparai, Srirangam Road), East (Cuddalore Road, Andimadam), West (Salem Road, Perambalur border).</p>
<p>Our Ariyalur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ariyalur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Trichy Road, Perambalur Road, Jayankondam, Cuddalore Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ariyalur?", answer: "Yes, same-day cake delivery is available across all Ariyalur areas — Civil Lines, Station Road, Trichy Road, and Perambalur Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ariyalur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ariyalur delivery." },
      { question: "Do you deliver midnight cakes in Ariyalur?", answer: "Yes, midnight birthday cake delivery is available across Ariyalur's central and residential zones." }
    ]
  },

  "mahbubnagar": {
    cityName: "Mahbubnagar",
    metaTitle: "Cake Delivery in Mahbubnagar | Palamuru Telangana | RedHeart",
    metaDescription: "Order cakes online in Mahbubnagar. Same-day delivery across Mahbubnagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mahbubnagar",
    metaKeyword: "cake delivery mahbubnagar, order cake online mahbubnagar, birthday cake mahbubnagar, custom cake mahbubnagar, same day cake delivery mahbubnagar palamuru nalgonda road hyderabad road krishna river pillalamarri",
    footerContent: `
<h2>Cake Delivery in Mahbubnagar — Palamuru's Capital, Pillalamarri's Ancient Banyan Tree, and Krishna River's Southern Telangana Gateway</h2>
<p>Mahbubnagar — the headquarters of Mahbubnagar district in Telangana (the district has recently been bifurcated into Mahbubnagar, Narayanpet, Nagar Kurnool, and Wanaparthy; the main city retains the original name), also called "Palamuru" (its historical name, widely used by the region's people and the large migrant labour community from Mahbubnagar — the "Palamuru migrants" who work in construction across India and abroad are famous for their industry and willingness to migrate for work; Mahbubnagar sends the highest number of migrant construction workers in Telangana), home to Pillalamarri (60 km from Mahbubnagar — a centuries-old Banyan tree with a canopy spread of 3 acres, under which 1,000+ people can shelter; it is one of India's widest Banyan trees), and located on the Krishna River (the Jurala and Srisailam projects on the Krishna supply irrigation to Mahbubnagar's parched plateau; the district has some of Telangana's lowest rainfall) — is a city of labour migration heritage and river water significance. From birthday parties in the Civil Lines area to corporate cakes at the large offices, from anniversary surprises near the Hyderabad Road belt to student cakes at Mahbubnagar's colleges — RedHeart covers all Mahbubnagar zones: Central (Civil Lines, Station Road, Nalgonda Road), North (Hyderabad Road, Jadcherla, Shadnagar), South (Kurnool Road, Kollapur, Nagarkurnool), East (Nalgonda Road, Maddur), West (Raichur Road, Narayanpet Road, Wanaparthy).</p>
<p>Our Mahbubnagar cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Pillalamarri Banyan / Palamuru-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahbubnagar, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Nalgonda Road, Hyderabad Road, Kurnool Road, Jadcherla</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Pillalamarri Banyan Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mahbubnagar?", answer: "Yes, same-day cake delivery is available across all Mahbubnagar areas — Civil Lines, Station Road, Nalgonda Road, and Hyderabad Road — for orders placed before 3 PM." },
      { question: "Do you have Pillalamarri Banyan Tree-themed cakes in Mahbubnagar?", answer: "Yes! The Pillalamarri — a centuries-old Banyan tree with a 3-acre canopy spread, 60 km from Mahbubnagar, where 1,000 people can shelter beneath it — inspires our Pillalamarri fondant cakes." },
      { question: "Are eggless cakes available in Mahbubnagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mahbubnagar delivery." }
    ]
  },

  "tezpur": {
    cityName: "Tezpur",
    metaTitle: "Cake Delivery in Tezpur | City of Blood Assam | RedHeart",
    metaDescription: "Order cakes online in Tezpur. Same-day delivery across Tezpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tezpur",
    metaKeyword: "cake delivery tezpur, order cake online tezpur, birthday cake tezpur, custom cake tezpur, same day cake delivery tezpur brahmaputra river agnegarh chitralekha udyan koliabar bamuni hills",
    footerContent: `
<h2>Cake Delivery in Tezpur — City of Blood, Brahmaputra River's Heritage City, and Assam's Cultural Capital</h2>
<p>Tezpur — the headquarters of Sonitpur district in Assam, Assam's most romantically storied city (Tezpur means "City of Blood" in Assamese — derived from the legend of Usha and Aniruddha from the Mahabharata: Princess Usha of Tezpur (daughter of the demon king Banasura) fell in love with Aniruddha (Lord Krishna's grandson); when Banasura discovered the couple, a battle ensued between Banasura's army and Lord Krishna's forces on the banks of the Brahmaputra; the river turned red with blood — hence "Tezpur" (te = blood, pur = city)), home to the Agnegarh (the legendary hill fort of Banasura — now a well-maintained garden called Chitralekha Udyan with a prominent image of Aniruddha and Usha), one of Assam's most beautiful cities on the Brahmaputra's north bank (the Brahmaputra is at its most majestic at Tezpur — 3–5 km wide, flanked by tea gardens and forest hills), a gateway to Kaziranga National Park (90 km from Tezpur — the UNESCO World Heritage one-horned rhino reserve), and home to Tezpur University (one of India's 16 central universities) — is a city of mythology, natural beauty, and education. From birthday parties in the Chitralekha Udyan area to corporate cakes at the Tezpur University campus, from anniversary surprises near the Brahmaputra riverfront to student cakes at the university — RedHeart covers all Tezpur zones: Central (Agnegarh, Station Road, Kaziranga Road), North (Guwahati Road, Tejpur Cantonment), South (Brahmaputra belt, Koliabar, Bamuni Hills), East (Kaziranga Road, Kohora, Nagaon), West (Guwahati Road, Bihali, Biswanath).</p>
<p>Our Tezpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Tea-Caramel (Assam CTC tea!), Photo Cakes, Fondant Aniruddha-Usha Tezpur legend / Kaziranga Rhino-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezpur, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agnegarh, Station Road, Kaziranga Road, Guwahati Road, Koliabar, Tezpur University area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tea-Caramel Assam, Kaziranga Rhino Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tezpur?", answer: "Yes, same-day cake delivery is available across all Tezpur areas — Agnegarh, Station Road, Kaziranga Road, and Tezpur University area — for orders placed before 3 PM." },
      { question: "Do you have Tezpur legend / Kaziranga Rhino-themed cakes?", answer: "Yes! Tezpur's mythological Aniruddha-Usha love story and the nearby Kaziranga National Park — home of the one-horned Indian rhino — inspire our Tezpur legend fondant cakes and Kaziranga Rhino theme cakes." },
      { question: "Are eggless cakes available in Tezpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tezpur delivery." }
    ]
  },

  "mirzapur": {
    cityName: "Mirzapur",
    metaTitle: "Cake Delivery in Mirzapur | Carpet City Uttar Pradesh | RedHeart",
    metaDescription: "Order cakes online in Mirzapur. Same-day delivery across Mirzapur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mirzapur",
    metaKeyword: "cake delivery mirzapur, order cake online mirzapur, birthday cake mirzapur, custom cake mirzapur, same day cake delivery mirzapur civil lines vindhyachal ganga ghat carpet chunar fort bhadohi",
    footerContent: `
<h2>Cake Delivery in Mirzapur — Carpet City, Vindhyachal Shakti Peetha, and Ganga's Vindhyan Stone City</h2>
<p>Mirzapur — the headquarters of Mirzapur district in Uttar Pradesh, one of India's most iconic cities for handicrafts and religious significance (Mirzapur is famous worldwide as the "Carpet City" of India — along with Bhadohi (Sant Ravidas Nagar) adjacent to it, this carpet belt produces 90% of India's handwoven woollen and silk carpets exported globally; the Mirzapur-Bhadohi carpet industry employs hundreds of thousands of weavers, and Indian handmade carpets go to USA, UK, UAE, Germany, Italy, Japan — making this the world's largest handwoven carpet cluster), home to the Vindhyachal Temple (one of India's 108 Shakti Peethas — the Vindhyavasini Devi temple at Vindhyachal is one of Hinduism's most revered goddess shrines, drawing 2 crore pilgrims annually; the temple is believed to be the site where the Goddess appeared to destroy the demon Shumbha-Nishumbha), famous for Chunar Fort (the ancient fort on the Ganga's bank where many historical battles were fought — controlled by the Mughals, Marathas, Nawabs of Awadh, and finally the British), and a Ganga River city with spectacular sandstone cliffs — is a city of craft wealth and pilgrimage significance. From birthday parties in the Civil Lines area to corporate cakes at the large carpet export houses, from Navratri celebration cakes (for Vindhyachal Navratri) to anniversary surprises near the Ganga ghats — RedHeart covers all Mirzapur zones: Central (Civil Lines, Station Road, Vindhyachal Road), North (Allahabad Road, Varanasi Road), South (Ganga Ghats, Vindhyachal Mandal), East (Varanasi Road, Chunar Road, Sonbhadra), West (Allahabad Road, Banda Road, Prayagraj belt).</p>
<p>Our Mirzapur cake range: Chocolate, Black Forest, Red Velvet, Mango (Ganga belt Langra!), Butterscotch, Photo Cakes, Fondant Vindhyachal Devi / Carpet City-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mirzapur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Vindhyachal Road, Varanasi Road, Chunar Road, Ganga Ghats</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Vindhyachal Devi Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mirzapur?", answer: "Yes, same-day cake delivery is available across all Mirzapur areas — Civil Lines, Station Road, Vindhyachal Road, and Ganga Ghats — for orders placed before 3 PM." },
      { question: "Do you have Vindhyachal Devi-themed cakes in Mirzapur?", answer: "Yes! The Vindhyavasini Devi temple at Vindhyachal — one of India's 108 Shakti Peethas, drawing 2 crore pilgrims annually — inspires our Vindhyachal Navratri fondant cakes. A devotional design for Mirzapur celebrations." },
      { question: "Are eggless cakes available in Mirzapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mirzapur delivery." }
    ]
  },

  "lakhimpur-kheri": {
    cityName: "Lakhimpur Kheri",
    metaTitle: "Cake Delivery in Lakhimpur Kheri | Dudhwa Tiger UP | RedHeart",
    metaDescription: "Order cakes online in Lakhimpur Kheri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lakhimpur Kheri",
    metaKeyword: "cake delivery lakhimpur kheri, order cake online lakhimpur kheri, birthday cake lakhimpur kheri, custom cake lakhimpur kheri, same day cake delivery lakhimpur kheri dudhwa tiger reserve terai sugar",
    footerContent: `
<h2>Cake Delivery in Lakhimpur Kheri — Dudhwa Tiger Reserve's City, India's Largest District, and Terai's Sugar Heartland</h2>
<p>Lakhimpur Kheri — the headquarters of Lakhimpur Kheri district in northern Uttar Pradesh, India's largest district by area in UP (Lakhimpur Kheri covers 7,680 sq km — larger than several Indian states in geographic area — and contains massive terai forests, wetlands, agricultural plains, and the Nepal border), home to Dudhwa National Park and Tiger Reserve (one of India's finest tiger reserves, in the sub-Himalayan terai forest belt near the Nepal border; Dudhwa protects tigers, one-horned Indian rhinos (reintroduced in 1984 from Assam), swamp deer (Barasingha), hispid hare, Bengal florican, and giant squirrels in its 500+ sq km of sal, teak, and grassland habitat; Dudhwa is one of few places in India where tigers, elephants, one-horned rhinos, and crocodiles coexist), a major sugar-producing district (Lakhimpur Kheri's terai sugarcane is among UP's finest; the district has 3–4 large sugar mills), and a city of biodiversity wealth. From birthday parties in the Civil Lines area to corporate cakes at the sugar mills, from conservation park anniversary cakes to student cakes at Lakhimpur's colleges — RedHeart covers all Lakhimpur Kheri zones: Central (Civil Lines, Kheri, Station Road), North (Dudhwa Road, Nepal border, Pallia), South (Lucknow Road, Sitapur Road, Gola), East (Bahraich Road, Gonda Road, Pilibhit), West (Shahjahanpur Road, Pilibhit Road, Nighasan).</p>
<p>Our Lakhimpur Kheri cake range: Chocolate, Black Forest, Red Velvet, Mango (Terai Dussehri!), Butterscotch, Photo Cakes, Fondant Dudhwa Tiger / Barasingha-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhimpur Kheri, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Kheri, Station Road, Dudhwa Road, Lucknow Road, Pallia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dudhwa Tiger Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lakhimpur Kheri?", answer: "Yes, same-day cake delivery is available across all Lakhimpur Kheri areas — Civil Lines, Kheri, Station Road, and Dudhwa Road — for orders placed before 3 PM." },
      { question: "Do you have Dudhwa Tiger / Barasingha-themed cakes in Lakhimpur Kheri?", answer: "Yes! The Dudhwa National Park — one of India's most biodiverse tiger reserves with tigers, rhinos, barasingha, and rare birds — inspires our Dudhwa Tiger fondant cakes. A proud local wildlife design." },
      { question: "Are eggless cakes available in Lakhimpur Kheri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Lakhimpur Kheri delivery." }
    ]
  },

  "madhubani": {
    cityName: "Madhubani",
    metaTitle: "Cake Delivery in Madhubani | Mithila Painting Bihar | RedHeart",
    metaDescription: "Order cakes online in Madhubani. Same-day delivery across Madhubani. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Madhubani",
    metaKeyword: "cake delivery madhubani, order cake online madhubani, birthday cake madhubani, custom cake madhubani, same day cake delivery madhubani civil lines mithila painting GI tag darbhanga road janakpur nepal",
    footerContent: `
<h2>Cake Delivery in Madhubani — Mithila Painting's Birthplace, Janakpur's Indian Gateway, and Bihar's Folk Art Capital</h2>
<p>Madhubani — the headquarters of Madhubani district in Bihar's Mithila region, one of India's most culturally celebrated cities for traditional art (Madhubani Painting — a GI-tagged art form of the Mithila region — originated in the villages around Madhubani town; the paintings, made on walls, cloth, and paper using natural and now commercial colours, depict deities, nature, love stories, and social customs in intricate geometric patterns; Madhubani has a distinctive visual vocabulary: the paintings are bold, colourful, with dual-sided faces, fish, sun and moon, lotus, and nature symbols; Madhubani artists have exhibited globally, and the art has been applied to Indian Railways trains, airport walls, fashion fabric, and luxury goods; the GI tag has empowered thousands of women artists from Madhubani district), the gateway to Janakpur (65 km from Madhubani — the sacred city of Goddess Sita in Nepal's Madhes Province; Janakpur's Janaki Mandir is one of South Asia's finest temples, drawing pilgrims from across India and Nepal; Madhubani town is the closest Indian rail terminal for Janakpur pilgrims, making it a pilgrimage transit city), located in the Bagmati-Kamla-Balan river basin — is a city of extraordinary artistic heritage. From birthday parties in the Civil Lines area to corporate cakes at the large art cooperative offices, from anniversary surprises near the Darbhanga Road to student cakes at Madhubani's colleges — RedHeart covers all Madhubani zones: Central (Civil Lines, Station Road, Darbhanga Road), North (Janakpur Road, Nepal border, Jainagar), South (Sitamarhi Road, Darbhanga border), East (Supaul Road, Jhanjharpur, Phulparas), West (Sitamarhi Road, Sonbarsa).</p>
<p>Our Madhubani cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Madhubani Mithila Painting-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhubani, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Darbhanga Road, Janakpur Road, Supaul Road, Jhanjharpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mithila Painting Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Madhubani?", answer: "Yes, same-day cake delivery is available across all Madhubani areas — Civil Lines, Station Road, Darbhanga Road, and Janakpur Road — for orders placed before 3 PM." },
      { question: "Do you have Madhubani Mithila Painting-themed cakes?", answer: "Yes! Madhubani's world-famous GI-tagged Mithila Painting — with its bold geometric patterns, fish, lotus, and deity motifs — inspires our Mithila Painting fondant cakes. The folk art of Madhubani on your birthday cake!" },
      { question: "Are eggless cakes available in Madhubani?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Madhubani delivery." }
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
