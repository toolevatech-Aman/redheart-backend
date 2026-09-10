// Cakes Batch 72 — 12 cities
// JH: Ramgarh, Koderma, Giridih, Deoghar, Dumka, Sahibganj, Godda, Jamtara
// Bihar: Katihar, Sitamarhi, Gopalganj, Buxar

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "ramgarh": {
    cityName: "Ramgarh",
    metaTitle: "Cake Delivery in Ramgarh | Jharkhand Coal Mines Damodar River Rabindranath Tagore | RedHeart",
    metaDescription: "Order cakes online in Ramgarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ramgarh",
    metaKeyword: "cake delivery ramgarh, order cake online ramgarh, birthday cake ramgarh, custom cake ramgarh, same day cake delivery Ramgarh Jharkhand coal Damodar River Rabindranath Tagore Chittarpur Bokaro adjacent",
    footerContent: `
<h2>Cake Delivery in Ramgarh — Damodar River Coal Belt, Tagore's Inspiration, and Jharkhand's Industrial District</h2>
<p>Ramgarh — the district headquarters of Ramgarh district in Jharkhand (south Jharkhand; Damodar River; carved from Hazaribagh district in 2007; Bokaro-adjacent), a district in the heart of Jharkhand's coal belt with a famous literary connection (the Damodar River Coal Belt (Ramgarh district sits atop one of India's richest Gondwana coal seams; the Jharia-Ramgarh-Bokaro coal belt is part of India's main thermal coal zone; BCCL (Bharat Coking Coal Ltd) and CCL (Central Coalfields Ltd) mines operate in the area; the Damodar River valley coal deposits have been mined since the 19th century; Ramgarh's coal feeds the Bokaro and DVC power plants); Rabindranath Tagore's Inspiration (Ramgarh — particularly the Ranikhet area near the Nainital hills — has a connection to Tagore; the scenic Ramgarh hills of Uttarakhand (different from JH Ramgarh) inspired Tagore; however Jharkhand's Ramgarh has its own literary tradition through the Hazaribagh-Ramgarh natural landscape; the Tagore connection is primarily the Uttarakhand Ramgarh); the Patratu Valley (the Patratu Valley — in Ramgarh district — is one of Jharkhand's most scenic spots; the Patratu Dam and reservoir; the Patratu Thermal Power Station (PTPS); the Damodar River winding through the valley creates picturesque landscapes; Patratu Valley is popular among tourists from Ranchi)), and a city of Damodar-coal-belt and Patratu-Valley-scenic and CCL-coal-mines — is JH's most Ramgarh-Damodar-coal and Patratu-Valley Ramgarh. From birthday parties in Ramgarh to celebration cakes — RedHeart covers all areas: Ramgarh city, Patratu, Gola (Ramgarh), Mandu, Chitarpur, Kuju.</p>
<p>Our Ramgarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramgarh, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramgarh city, Patratu, Gola, Mandu, Chitarpur, Kuju</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ramgarh?", answer: "Yes, same-day cake delivery is available across Ramgarh city, Patratu, Gola, Mandu, and Chitarpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ramgarh?", answer: "Yes, all flavours are available in eggless variants for Ramgarh delivery." },
      { question: "Do you deliver midnight cakes in Ramgarh?", answer: "Yes, midnight birthday cake delivery is available across Ramgarh city zones." }
    ]
  },

  "koderma": {
    cityName: "Koderma",
    metaTitle: "Cake Delivery in Koderma | Jharkhand Mica Mining Capital Hazaribagh Adjacent | RedHeart",
    metaDescription: "Order cakes online in Koderma. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Koderma",
    metaKeyword: "cake delivery koderma, order cake online koderma, birthday cake koderma, custom cake koderma, same day cake delivery Koderma Jharkhand mica mining capital Tilaiya Dam Barakar River NH2 highway",
    footerContent: `
<h2>Cake Delivery in Koderma — India's Mica Capital, Tilaiya Dam, and NH-2 Highway District</h2>
<p>Koderma — the district headquarters of Koderma district in Jharkhand (northern Jharkhand; Barakar River; NH-2 Delhi-Kolkata highway; carved from Hazaribagh in 1994), historically India's leading mica mining district (the Mica Mining Heritage (Koderma was once India's premier mica-producing district — Jharkhand's Koderma-Giridih-Hazaribagh belt produced the bulk of the world's sheet mica in the mid-20th century; mica from Koderma was used in electrical insulation, capacitors, and cosmetics worldwide; the mica industry employed thousands of tribal and rural workers; environmental and labour concerns have reduced mica mining significantly; the legacy of mica mining is deeply embedded in Koderma's economy and social history); the Tilaiya Dam (the Tilaiya Dam — on the Barakar River in Koderma district — was one of the first projects of the Damodar Valley Corporation (DVC), completed in 1953; it is one of DVC's four dams; the Tilaiya reservoir is a scenic water body; the DVC Tilaiya power station); the NH-2 / NH-19 (the Grand Trunk Road / NH-2 (now NH-19) passes through Koderma district; Koderma is a highway town on one of India's oldest and busiest national highways connecting Delhi-Kolkata)), and a city of India's-Mica-Capital and Tilaiya-DVC-Dam-1953 and Grand-Trunk-Road — is JH's most Koderma-mica-capital and Tilaiya-Dam Koderma. From birthday parties in Koderma to celebration cakes — RedHeart covers all areas: Koderma city, Jhumri Tilaiya, Satgawan, Chandwara, Domchanch.</p>
<p>Our Koderma cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koderma, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koderma city, Jhumri Tilaiya, Satgawan, Chandwara, Domchanch</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Koderma?", answer: "Yes, same-day cake delivery is available across Koderma city, Jhumri Tilaiya, Satgawan, and Chandwara for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Koderma?", answer: "Yes, all flavours are available in eggless variants for Koderma delivery." },
      { question: "Do you deliver midnight cakes in Koderma?", answer: "Yes, midnight birthday cake delivery is available across Koderma city zones." }
    ]
  },

  "giridih": {
    cityName: "Giridih",
    metaTitle: "Cake Delivery in Giridih | Jharkhand Parasnath Hill Jain Pilgrimage Mica Coal | RedHeart",
    metaDescription: "Order cakes online in Giridih. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Giridih",
    metaKeyword: "cake delivery giridih, order cake online giridih, birthday cake giridih, custom cake giridih, same day cake delivery Giridih Jharkhand Parasnath Hill Jain pilgrimage Sammed Shikharji mica Barakar",
    footerContent: `
<h2>Cake Delivery in Giridih — Parasnath Hill (Sammed Shikharji — Jainism's Holiest Site), Mica Mining, and Barakar River</h2>
<p>Giridih — the district headquarters of Giridih district in Jharkhand (north-central JH; Barakar River; mica and coal belt), home to Parasnath Hill — the holiest pilgrimage site in Jainism (the Parasnath Hill / Sammed Shikharji (Parasnath Hill (1,350m) — the highest peak in Jharkhand and the most sacred pilgrimage site in Jainism; Sammed Shikharji (meaning "Supreme Place of Liberation") is believed to be the place where 20 of the 24 Jain Tirthankaras (including Parshvanatha, the 23rd Tirthankara) attained moksha (liberation); millions of Jain pilgrims from across India and the world visit Sammed Shikharji; the hill has numerous Tirth (shrines) at the summit representing each Tirthankara; the Jain community successfully opposed a government plan to develop the area as an eco-tourism site — the agitation in 2022-23 became one of India's largest peaceful Jain protests; the Shikharji temple complex is managed by the Jain community); the Mica Belt (Giridih was part of the historic Jharkhand mica belt — the Giridih-Koderma mica zone produced high-quality sheet mica used in electrical equipment; the Tata family had early industrial interests in Giridih; TISCO had a coal washery at Giridih)); and a city of Parasnath-Hill-Sammed-Shikharji-20-Tirthankaras-moksha and Jainism's-holiest-pilgrimage — is JH's most Parasnath-Sammed-Shikharji and Jain-pilgrimage Giridih. From birthday parties in Giridih to celebration cakes — RedHeart covers all areas: Giridih city, Parasnath, Deoghar-road, Tisri, Bengabad, Gandey.</p>
<p>Our Giridih cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Giridih, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Giridih city, Parasnath, Tisri, Bengabad, Gandey</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Giridih?", answer: "Yes, same-day cake delivery is available across Giridih city, Parasnath, Tisri, and Bengabad for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Giridih?", answer: "Yes, all flavours are available in eggless variants for Giridih delivery." },
      { question: "Do you deliver midnight cakes in Giridih?", answer: "Yes, midnight birthday cake delivery is available across Giridih city zones." }
    ]
  },

  "deoghar": {
    cityName: "Deoghar",
    metaTitle: "Cake Delivery in Deoghar | Jharkhand Baidyanath Jyotirlinga Savan Mela Shravan | RedHeart",
    metaDescription: "Order cakes online in Deoghar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Deoghar",
    metaKeyword: "cake delivery deoghar, order cake online deoghar, birthday cake deoghar, custom cake deoghar, same day cake delivery Deoghar Jharkhand Baidyanath Jyotirlinga Savan Mela pilgrimage Santhal Parganas",
    footerContent: `
<h2>Cake Delivery in Deoghar — Baidyanath Jyotirlinga (One of 12 Sacred Jyotirlingas), Sawan Mela, and Santhal Parganas</h2>
<p>Deoghar — the district headquarters of Deoghar district in Jharkhand (Santhal Parganas division; Mayurakshi River), one of India's most sacred pilgrimage cities — home to the Baidyanath Jyotirlinga (the Baidyanath Jyotirlinga (the Baidyanath Temple at Deoghar — one of the 12 Jyotirlingas of Shiva — is one of India's most visited religious sites; the Baidyanath Jyotirlinga is also one of the 51 Shakti Peethas (the sati's heart is said to have fallen here); the temple is dedicated to Lord Shiva as Baidyanath (the physician lord); the Deoghar Jyotirlinga is in the main Baidyanath temple complex which also has 21 other temples; millions of pilgrims visit annually); the Sawan Mela / Shrawan Mela (the Deoghar Sawan Mela — held every year during the month of Shravan (July-August) — is one of India's largest religious fairs; Kanwariyas (devotees) walk from Sultanganj (Bihar) on the banks of the Ganga (approximately 105 km) carrying Gangajal (Ganga water) in pots to offer to the Baidyanath Jyotirlinga; during Shravan, several million Kanwariyas make this journey; the Sultanganj-Deoghar Kanwar Yatra is one of India's largest annual human pilgrimages); the Santhal Parganas (Deoghar is in Jharkhand's Santhal Parganas division — historically the region of the Santhal tribe; the area was part of the ancient Magadha and later the Santhal Parganas regulation zone)), and a city of Baidyanath-Jyotirlinga-12-sacred and Sawan-Mela-Kanwar-Yatra-millions — is JH's most Baidyanath-Jyotirlinga and Sawan-Kanwar-Yatra Deoghar. From birthday parties in Deoghar to celebration cakes — RedHeart covers all areas: Deoghar city, Madhupur, Sarwan, Mohanpur, Saro, Margomunda.</p>
<p>Our Deoghar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoghar, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoghar city, Madhupur, Sarwan, Mohanpur, Saro</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Deoghar?", answer: "Yes, same-day cake delivery is available across Deoghar city, Madhupur, Sarwan, and Mohanpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Deoghar?", answer: "Yes, all flavours are available in eggless variants for Deoghar delivery." },
      { question: "Do you deliver midnight cakes in Deoghar?", answer: "Yes, midnight birthday cake delivery is available across Deoghar city zones." }
    ]
  },

  "dumka": {
    cityName: "Dumka",
    metaTitle: "Cake Delivery in Dumka | Jharkhand Santhal Parganas Capital Mayurakshi River | RedHeart",
    metaDescription: "Order cakes online in Dumka. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dumka",
    metaKeyword: "cake delivery dumka, order cake online dumka, birthday cake dumka, custom cake dumka, same day cake delivery Dumka Jharkhand Santhal Parganas divisional HQ Mayurakshi River Sidhu Kanhu Murmu Hul",
    footerContent: `
<h2>Cake Delivery in Dumka — Santhal Parganas Divisional HQ, Sidhu-Kanhu Hul (1855), and Mayurakshi River</h2>
<p>Dumka — the district headquarters of Dumka district and the divisional headquarters of Santhal Parganas division in Jharkhand (eastern JH; Mayurakshi River; West Bengal border), the administrative and cultural capital of the Santhal homeland (the Santhal Parganas and Sidhu-Kanhu Hul (the Santhal Hul (Hul = uprising/revolution) of 1855 — led by Sidhu Murmu and Kanhu Murmu — two brothers from Bhagandihi village in Santhal Parganas; they raised an army of approximately 50,000 Santhal tribespeople against the British East India Company and the zamindars (landlords) who were exploiting the Santhal; the Hul was one of the largest tribal uprisings in Indian history; the British suppressed it with military force killing thousands; Sidhu and Kanhu were hanged; June 30 is celebrated as Hul Diwas in Jharkhand in memory of the uprising; Dumka is the heartland of the Santhal Parganas where the Hul began); the Masanjore Dam / Mayurakshi River (the Masanjore Dam (also called Canada Dam) — on the Mayurakshi River in Dumka district — was built with Canadian technical assistance in 1955; it forms a large reservoir; the dam provides irrigation and power to the Santhal Parganas; the Massanjore lake is a popular tourist destination near Dumka); the Dumka's role as Jharkhand's second capital (Dumka has historically been considered Jharkhand's "second capital" — the Sub-capital — serving as the administrative centre for eastern Jharkhand)), and a city of Santhal-Hul-1855-Sidhu-Kanhu and Masanjore-Dam-Canadian and Santhal-Parganas-capital — is JH's most Dumka-Santhal-Hul and Masanjore-Dam Dumka. From birthday parties in Dumka to celebration cakes — RedHeart covers all areas: Dumka city, Masanjore, Shikaripara, Jarmundi, Gopikandar, Raneshwar.</p>
<p>Our Dumka cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dumka, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dumka city, Masanjore, Shikaripara, Jarmundi, Gopikandar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dumka?", answer: "Yes, same-day cake delivery is available across Dumka city, Masanjore, Shikaripara, and Jarmundi for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dumka?", answer: "Yes, all flavours are available in eggless variants for Dumka delivery." },
      { question: "Do you deliver midnight cakes in Dumka?", answer: "Yes, midnight birthday cake delivery is available across Dumka city zones." }
    ]
  },

  "sahibganj": {
    cityName: "Sahibganj",
    metaTitle: "Cake Delivery in Sahibganj | Jharkhand Ganga River Rajmahal Hills Inland Port | RedHeart",
    metaDescription: "Order cakes online in Sahibganj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sahibganj",
    metaKeyword: "cake delivery sahibganj, order cake online sahibganj, birthday cake sahibganj, custom cake sahibganj, same day cake delivery Sahibganj Jharkhand Ganga River Rajmahal Hills inland port NW-1 Paharia",
    footerContent: `
<h2>Cake Delivery in Sahibganj — Ganga Inland Waterway Port, Rajmahal Hills, and Paharia Tribal Heritage</h2>
<p>Sahibganj — the district headquarters of Sahibganj district in Jharkhand (eastern JH; Ganga River; Bangladesh-West Bengal corridor; Rajmahal Hills), a strategic riverine district on the Ganga with an emerging inland port (the Sahibganj Multi-Modal Terminal / Inland Port (the Sahibganj Multi-Modal Terminal — on National Waterway-1 (Ganga) — was developed under India's Jal Marg Vikas Project (JMVP) with World Bank support; inaugurated in 2019 by PM Modi; the terminal enables bulk cargo transport by river; it connects Jharkhand's mineral exports (stone, coal) to Bangladesh and downstream ports via the Ganga; the terminal reduces road-based freight for Jharkhand); the Rajmahal Hills (the Rajmahal Hills — in Sahibganj and Pakur districts — are geologically unique; formed by Gondwana-era Rajmahal Trap lava flows; the hills contain Jurassic plant fossils of international importance — including some of the earliest flowering plant fossils; the Rajmahal Hills are home to the Paharia (Mal Paharia and Sauriya Paharia) — PVTGs — among the most ancient hill-forest dwellers of the Chhota Nagpur Plateau); the Ganga Waterway and Historic Rajmahal (Rajmahal town in Sahibganj — one of Mughal Bengal's early capitals; the Mughals used Rajmahal as a base before Dacca; the Ganga here is broad and navigable year-round)), and a city of Sahibganj-Inland-Port-NW1-Ganga and Rajmahal-Hills-Jurassic-fossils and Paharia-PVTG — is JH's most Sahibganj-Inland-Port and Rajmahal-Hills Sahibganj. From birthday parties in Sahibganj to celebration cakes — RedHeart covers all areas: Sahibganj city, Rajmahal, Borio, Barharwa, Taljhari, Pathna.</p>
<p>Our Sahibganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sahibganj, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sahibganj city, Rajmahal, Borio, Barharwa, Taljhari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sahibganj?", answer: "Yes, same-day cake delivery is available across Sahibganj city, Rajmahal, Borio, and Barharwa for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sahibganj?", answer: "Yes, all flavours are available in eggless variants for Sahibganj delivery." },
      { question: "Do you deliver midnight cakes in Sahibganj?", answer: "Yes, midnight birthday cake delivery is available across Sahibganj city zones." }
    ]
  },

  "godda": {
    cityName: "Godda",
    metaTitle: "Cake Delivery in Godda | Jharkhand Bangladesh Power Plant Santhal Sunil Adda | RedHeart",
    metaDescription: "Order cakes online in Godda. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Godda",
    metaKeyword: "cake delivery godda, order cake online godda, birthday cake godda, custom cake godda, same day cake delivery Godda Jharkhand Adani power plant Bangladesh export Santhal Parganas coal thermal",
    footerContent: `
<h2>Cake Delivery in Godda — Adani Power Plant (India's First Cross-Border Electricity Export to Bangladesh), Santhal Parganas</h2>
<p>Godda — the district headquarters of Godda district in Jharkhand (eastern JH; Santhal Parganas; West Bengal border; Gumani River), site of a landmark cross-border power infrastructure project (the Adani Godda Power Plant / Bangladesh Power Export (the Godda Thermal Power Plant (1,600 MW) — developed by Adani Power — in Godda district is India's first dedicated power plant for export to a foreign country; the plant exports electricity to Bangladesh under a 25-year Power Purchase Agreement (PPA); the plant uses imported coal from Adani's Australian mines; it is one of India's largest private thermal power projects; the Godda project is a flagship under India's "Neighbourhood First" foreign policy for energy diplomacy with Bangladesh; the plant became operational in stages from 2023); the Santhal Heritage (Godda district is in Jharkhand's Santhal Parganas — the historic homeland of the Santhal tribe; the Santhal (Austro-Asiatic Munda group) are one of India's largest tribal communities; Godda has significant Santhal cultural traditions); the Gumani River (the Gumani River flows through Godda district; the Gumani's valley is an agricultural zone of paddy and vegetables)), and a city of Adani-Power-1600MW-Bangladesh-export and Santhal-Parganas — is JH's most Godda-Adani-power-Bangladesh and Santhal-Parganas Godda. From birthday parties in Godda to celebration cakes — RedHeart covers all areas: Godda city, Mahagama, Boarijor, Thakurgangti, Sundarpahari, Poreyahat.</p>
<p>Our Godda cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Godda, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Godda city, Mahagama, Boarijor, Thakurgangti, Poreyahat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Godda?", answer: "Yes, same-day cake delivery is available across Godda city, Mahagama, Boarijor, and Thakurgangti for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Godda?", answer: "Yes, all flavours are available in eggless variants for Godda delivery." },
      { question: "Do you deliver midnight cakes in Godda?", answer: "Yes, midnight birthday cake delivery is available across Godda city zones." }
    ]
  },

  "jamtara": {
    cityName: "Jamtara",
    metaTitle: "Cake Delivery in Jamtara | Jharkhand Cyber Crime Capital Barakar River Santhal | RedHeart",
    metaDescription: "Order cakes online in Jamtara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jamtara",
    metaKeyword: "cake delivery jamtara, order cake online jamtara, birthday cake jamtara, custom cake jamtara, same day cake delivery Jamtara Jharkhand Barakar River Santhal cyber crime Netflix Dumka adjacent",
    footerContent: `
<h2>Cake Delivery in Jamtara — Barakar River, Santhal Cultural Heritage, and Eastern Jharkhand District</h2>
<p>Jamtara — the district headquarters of Jamtara district in Jharkhand (eastern JH; Barakar River; Santhal Parganas; carved from Dumka in 2001), a district known for the Barakar River and its Santhal heritage (the Barakar River (the Barakar River — a major tributary of the Damodar — flows through Jamtara district; the Barakar watershed is part of the DVC (Damodar Valley Corporation) irrigation and power system; the Barakar flows through the coal-bearing Gondwana formations; the Jamtara section of the Barakar valley has agricultural land and tribal settlements); the Santhal Heritage (Jamtara district is in the Santhal Parganas division — the heartland of the Santhal tribal people; the Santhal (Austro-Asiatic) are one of India's most numerous tribes; the Jamtara area has traditions of Sohrai painting, Baha Puja (spring festival), and Karma dance; the Santhal community's oral history, music, and folk traditions are vibrant); the Digital Connectivity (Jamtara gained national and international attention for online financial fraud activities centred in certain villages; the Indian government and police have taken extensive action to curb this; the Netflix series "Jamtara: Sabka Number Ayega" (2020) dramatised this issue; the Jamtara district administration has since focused on digital literacy and youth employment)), and a city of Barakar-River-Santhal-Parganas and Jamtara-district — is JH's most Jamtara-Barakar-River and Santhal-Parganas Jamtara. From birthday parties in Jamtara to celebration cakes — RedHeart covers all areas: Jamtara city, Nala, Kundhit, Fatehpur (Jamtara), Narayanpur (Jamtara), Mihijam.</p>
<p>Our Jamtara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamtara, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamtara city, Nala, Kundhit, Fatehpur (Jamtara), Mihijam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jamtara?", answer: "Yes, same-day cake delivery is available across Jamtara city, Nala, Kundhit, and Mihijam for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jamtara?", answer: "Yes, all flavours are available in eggless variants for Jamtara delivery." },
      { question: "Do you deliver midnight cakes in Jamtara?", answer: "Yes, midnight birthday cake delivery is available across Jamtara city zones." }
    ]
  },

  "katihar": {
    cityName: "Katihar",
    metaTitle: "Cake Delivery in Katihar | Bihar Ganga Mahananda Kosi Junction Railway Hub Seemanchal | RedHeart",
    metaDescription: "Order cakes online in Katihar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Katihar",
    metaKeyword: "cake delivery katihar, order cake online katihar, birthday cake katihar, custom cake katihar, same day cake delivery Katihar Bihar railway junction Ganga Mahananda Kosi Seemanchal jute tea Bengal border",
    footerContent: `
<h2>Cake Delivery in Katihar — Major Railway Junction, Ganga-Mahananda-Kosi Confluence, and Seemanchal's Commercial Hub</h2>
<p>Katihar — the district headquarters of Katihar district in Bihar (northeastern Bihar; Ganga-Mahananda-Kosi confluence area; West Bengal border; Seemanchal region), a major railway junction and commercial hub of northeast Bihar (the Katihar Railway Junction (Katihar is one of Bihar's most important railway junctions — the Katihar Junction (KIR) is a key node where the Northeast Frontier Railway and the Eastern Railway meet; the rail lines from Kolkata, Patna, Guwahati, and North Bihar all pass through Katihar; the Katihar-Guwahati route (for northeast India connectivity) runs through here; the jute and tea transport from Bihar-Bengal-Assam uses Katihar as a key relay station; the Katihar Railway Workshop employs thousands); the Ganga-Mahananda-Kosi Confluence (Katihar district sits at the meeting point of three major river systems — the Ganga, the Mahananda, and the Kosi — creating a vast floodplain; the Farakka Barrage upstream affects river flow through this zone; the alluvial plains are fertile for paddy and jute); the Jute Production (Katihar district is one of Bihar's major jute-producing areas; the Katihar Jute Mill area; jute was historically Bihar's most important cash crop in the northeast; the jute trade made Katihar a commercial centre); the Seemanchal Identity (Katihar is part of the Seemanchal zone — a region with a distinct cultural identity in Bihar)), and a city of Katihar-Railway-Junction and Ganga-Mahananda-Kosi-confluence and jute-Seemanchal — is Bihar's most Katihar-Railway-Junction and Seemanchal-jute Katihar. From birthday parties in Katihar to celebration cakes — RedHeart covers all areas: Katihar city, Manihari, Barari, Kadwa, Pranpur, Azamnagar.</p>
<p>Our Katihar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katihar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katihar city, Manihari, Barari, Kadwa, Pranpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Katihar?", answer: "Yes, same-day cake delivery is available across Katihar city, Manihari, Barari, and Kadwa for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Katihar?", answer: "Yes, all flavours are available in eggless variants for Katihar delivery." },
      { question: "Do you deliver midnight cakes in Katihar?", answer: "Yes, midnight birthday cake delivery is available across Katihar city zones." }
    ]
  },

  "sitamarhi": {
    cityName: "Sitamarhi",
    metaTitle: "Cake Delivery in Sitamarhi | Bihar Sita Birthplace Punaura Dham Nepal Border | RedHeart",
    metaDescription: "Order cakes online in Sitamarhi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sitamarhi",
    metaKeyword: "cake delivery sitamarhi, order cake online sitamarhi, birthday cake sitamarhi, custom cake sitamarhi, same day cake delivery Sitamarhi Bihar Sita birthplace Punaura Dham Nepal border Bagmati River Mithila",
    footerContent: `
<h2>Cake Delivery in Sitamarhi — Sita's Birthplace (Punaura Dham), Bagmati River, and Mithila Cultural Heritage</h2>
<p>Sitamarhi — the district headquarters of Sitamarhi district in Bihar (north Bihar; Nepal border; Bagmati River; Mithila region), the sacred birthplace of Goddess Sita according to the Ramayana tradition (the Punaura Dham / Sita's Birthplace (Sitamarhi — literally "the place where Sita was found" — is traditionally believed to be the birthplace of Sita (Janaki), the consort of Lord Rama; the Punaura Dham (also Sitamarhi Dham) is the main pilgrimage site in Sitamarhi city; the legend states that King Janaka of Mithila (Videha) was plowing a field in Sitamarhi when he found an infant (Sita) in a furrow — and adopted her as his daughter; the temple complex at Punaura Dham has the Janki Temple, Ram-Sita Temple, and the holy kund (pond); Vivah Panchami (Ram-Sita's marriage anniversary) draws thousands of pilgrims annually to Sitamarhi; the Ram Janaki Yatra route from Janakpur (Nepal) passes through Sitamarhi); the Bagmati River (the Bagmati — which flows through Kathmandu and into Bihar — forms part of the Sitamarhi-Sheohar boundary; it is sacred in both Nepal and Bihar; the Bagmati floods frequently in the monsoon); the Mithila Cultural Zone (Sitamarhi is in the Mithila cultural zone — known for the Maithili language and the Madhubani painting tradition; the Madhubani-Sitamarhi area is one of India's richest folk art zones)), and a city of Punaura-Dham-Sita-birthplace-Ramayana and Mithila-Madhubani — is Bihar's most Sitamarhi-Sita-birthplace and Punaura-Dham-Janaki Sitamarhi. From birthday parties in Sitamarhi to celebration cakes — RedHeart covers all areas: Sitamarhi city, Belsand, Dumra, Pupri, Riga, Bajpatti.</p>
<p>Our Sitamarhi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi city, Belsand, Dumra, Pupri, Riga, Bajpatti</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sitamarhi?", answer: "Yes, same-day cake delivery is available across Sitamarhi city, Belsand, Dumra, Pupri, and Riga for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sitamarhi?", answer: "Yes, all flavours are available in eggless variants for Sitamarhi delivery." },
      { question: "Do you deliver midnight cakes in Sitamarhi?", answer: "Yes, midnight birthday cake delivery is available across Sitamarhi city zones." }
    ]
  },

  "gopalganj": {
    cityName: "Gopalganj",
    metaTitle: "Cake Delivery in Gopalganj | Bihar Gandak River Thawai Mata Nepal Border Sugarcane | RedHeart",
    metaDescription: "Order cakes online in Gopalganj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gopalganj",
    metaKeyword: "cake delivery gopalganj, order cake online gopalganj, birthday cake gopalganj, custom cake gopalganj, same day cake delivery Gopalganj Bihar Gandak River Thawai Mata Nepal border sugarcane UP border",
    footerContent: `
<h2>Cake Delivery in Gopalganj — Gandak River, Thawai Mata Temple, and Bihar's Sugarcane Heartland</h2>
<p>Gopalganj — the district headquarters of Gopalganj district in Bihar (northwestern Bihar; UP border; Gandak River; Nepal border corridor), a fertile district in Bihar's sugarcane and paddy belt (the Gandak River (the Gandak — rising in Nepal as the Narayani — is one of the Ganga's major tributaries; the Gandak flows along the UP-Bihar border near Gopalganj; the Gandak Canal system (Gandak Project, 1970) provides irrigation to Gopalganj, Saran, and Champaran; the Gandak waterway and its sandy banks are characteristic of northwestern Bihar); the Thawai Mata Temple (the Thawai Mata Temple in Gopalganj is a significant local pilgrimage site; Thawai Mata is a manifestation of the goddess Durga; the annual Navratri mela at Thawai Mata draws lakhs of devotees from Gopalganj and adjacent UP districts; the temple is on the banks of the Thawai River); the Sugarcane and Sugar Industry (Gopalganj is in Bihar's sugarcane belt; several sugar mills and khandsari units operate in the district; paddy, wheat, and sugarcane form the agricultural backbone; the Gopalganj-Siwan area is known for banana cultivation as well); the UP Border and Vaishali Era (Gopalganj's proximity to the UP border makes it an important trade node between Bihar and eastern UP — connecting Gorakhpur, Deoria, and Maharajganj)), and a city of Gandak-River-irrigation and Thawai-Mata-Navratri-mela and sugarcane-belt — is Bihar's most Gopalganj-Gandak and Thawai-Mata Gopalganj. From birthday parties in Gopalganj to celebration cakes — RedHeart covers all areas: Gopalganj city, Sidhwalia, Uchkagaon, Phulwaria, Thawe, Kuchaikote.</p>
<p>Our Gopalganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopalganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopalganj city, Sidhwalia, Uchkagaon, Phulwaria, Thawe</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gopalganj?", answer: "Yes, same-day cake delivery is available across Gopalganj city, Sidhwalia, Phulwaria, and Thawe for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gopalganj?", answer: "Yes, all flavours are available in eggless variants for Gopalganj delivery." },
      { question: "Do you deliver midnight cakes in Gopalganj?", answer: "Yes, midnight birthday cake delivery is available across Gopalganj city zones." }
    ]
  },

  "buxar": {
    cityName: "Buxar",
    metaTitle: "Cake Delivery in Buxar | Bihar Battle of Buxar 1764 Ganga River UP Border | RedHeart",
    metaDescription: "Order cakes online in Buxar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Buxar",
    metaKeyword: "cake delivery buxar, order cake online buxar, birthday cake buxar, custom cake buxar, same day cake delivery Buxar Bihar Battle of Buxar 1764 Ganga River Ramrekha Ghat Sone River UP border",
    footerContent: `
<h2>Cake Delivery in Buxar — Battle of Buxar (1764 CE), Ramrekha Ghat, and Ganga-Sone Confluence</h2>
<p>Buxar — the district headquarters of Buxar district in Bihar (western Bihar; UP border; Ganga River), the site of one of the most decisive battles in Indian history (the Battle of Buxar (1764 CE) (the Battle of Buxar — fought on October 22, 1764 CE — was a decisive engagement between the British East India Company (under Hector Munro) and a combined force of the Nawab of Awadh (Shuja-ud-Daula), the Mughal Emperor Shah Alam II, and the deposed Nawab of Bengal (Mir Qasim); the British victory at Buxar was more significant than Plassey (1757) — it effectively established British political supremacy over all of northern India; the Treaty of Allahabad (1765) after Buxar gave the East India Company the Diwani (revenue collection rights) of Bengal, Bihar, and Odisha; Buxar is thus the site where the foundations of the British Raj were truly cemented; the Battle of Buxar memorial is a protected site in Buxar); the Ramrekha Ghat (the Ramrekha Ghat on the Ganga at Buxar is a sacred bathing ghat; the legend connects Ram's exile route to Buxar — the ghat is associated with the point where Ram crossed the Ganga; the sage Vishwamitra's hermitage is said to have been near Buxar; Buxar has deep Ramayana connections); the Ganga-Sone Confluence (the Sone River — a major right-bank tributary of the Ganga — meets the Ganga near the Buxar-Arrah area of Bihar; the Sone-Ganga confluence is a sacred point)), and a city of Battle-of-Buxar-1764-British-Raj and Ramrekha-Ghat-Ram-exile — is Bihar's most Buxar-Battle-1764 and Ganga-Ramrekha-Ghat Buxar. From birthday parties in Buxar to celebration cakes — RedHeart covers all areas: Buxar city, Dumraon, Rajpur (Buxar), Brahmpur, Chausa, Itarhi.</p>
<p>Our Buxar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Buxar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Buxar city, Dumraon, Rajpur (Buxar), Brahmpur, Chausa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Buxar?", answer: "Yes, same-day cake delivery is available across Buxar city, Dumraon, Rajpur, Brahmpur, and Chausa for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Buxar?", answer: "Yes, all flavours are available in eggless variants for Buxar delivery." },
      { question: "Do you deliver midnight cakes in Buxar?", answer: "Yes, midnight birthday cake delivery is available across Buxar city zones." }
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
