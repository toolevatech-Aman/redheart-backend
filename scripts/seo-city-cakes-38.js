// Cakes Batch 38 — 15 cities:
// Rajasthan: Karauli, Barmer (done) — Alwar (done?) check — Bhilwara, Sirohi, Pratapgarh-Raj
// UP: Balrampur, Etawah (done), Etah, Mainpuri, Sambhal
// Bihar: Arwal, Jamui, Sheohar (done), Supaul (done)
// Odisha: Koraput, Rayagada
// Telangana: Wanaparthy, Suryapet

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bhilwara": {
    cityName: "Bhilwara",
    metaTitle: "Cake Delivery in Bhilwara | Textile City Mewar Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Bhilwara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bhilwara",
    metaKeyword: "cake delivery bhilwara, order cake online bhilwara, birthday cake bhilwara, custom cake bhilwara, same day cake delivery bhilwara Textile City synthetic fabric Mewar Banas River Harni Mahadev Rajasthan",
    footerContent: `
<h2>Cake Delivery in Bhilwara — Rajasthan's Textile City, Mewar Heritage, and Banas River Plains</h2>
<p>Bhilwara — the headquarters of Bhilwara district in Rajasthan, known as the "Textile City of India" and "Manchester of Rajasthan" — the country's largest hub of synthetic textile (suiting fabric) manufacturing (Bhilwara's textile industry produces approximately 40% of India's synthetic suiting fabric — polyester-viscose, polyester-wool blends used in formal menswear suits; the city has over 500 textile mills and weaving units employing hundreds of thousands of workers; the Bhilwara textile cluster is one of the largest organised textile manufacturing clusters in India; major companies like Rajasthan Spinning & Weaving Mills (RSWM), BSL Limited (Bhilwara Synthetic Limited), and Syntex have their plants in Bhilwara; the Rajsamand-Bhilwara area is also significant for marble mining and zinc production; the Hindustan Zinc Limited's Rampura-Agucha mine (Bhilwara district) is one of the world's largest zinc-lead mines — contributing significantly to India's zinc production; the Banas River originates in the Aravalli hills and flows through Bhilwara district providing water for the textile industry; Bhilwara district has the Harni Mahadev temple (local Shiva pilgrimage on the Banas); the Badoli temples (8th-10th century CE Pratihara-Paramara era) — 70 km from Bhilwara — are excellent medieval Rajasthani sculptural temples including a Shiva temple with fine carvings), and a city of loom-driven prosperity and Mewar cultural depth — is Rajasthan's most industrially textile-dominated city. From birthday parties in Bhilwara to celebration cakes — RedHeart covers all Bhilwara zones: Bhilwara town, Shahpura, Mandal, Asind, Hurda, Gangapur, Kotri.</p>
<p>Our Bhilwara cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Textile Loom / Badoli Temples / Rampura-Agucha Mine-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhilwara ("Textile City"), Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhilwara town, Shahpura, Mandal, Asind, Hurda, Gangapur, Kotri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Butterscotch, Textile Fondant, Badoli Temple Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhilwara?", answer: "Yes, same-day cake delivery is available across all Bhilwara areas — Bhilwara town, Shahpura, Mandal, Asind, and Hurda — for orders placed before 3 PM." },
      { question: "Do you have Textile City and Badoli Temples-themed cakes?", answer: "Yes! Bhilwara's textile industry (40% of India's synthetic suiting fabric — the 'Manchester of Rajasthan') and the Badoli temple group (8th-10th century Pratihara-Paramara era Shiva and Vishnu temples with exceptional stone sculpture) inspire our most industrially vibrant and artistically carved Bhilwara fondant cakes." },
      { question: "Are eggless cakes available in Bhilwara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhilwara delivery." }
    ]
  },

  "sirohi": {
    cityName: "Sirohi",
    metaTitle: "Cake Delivery in Sirohi | Mount Abu Dilwara Jain Temple Gujarat Border Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Sirohi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sirohi",
    metaKeyword: "cake delivery sirohi, order cake online sirohi, birthday cake sirohi, custom cake sirohi, same day cake delivery sirohi Mount Abu Dilwara Jain temple Arbuda Devi Aravalli Rajasthan only hill station Gujarat border",
    footerContent: `
<h2>Cake Delivery in Sirohi — Mount Abu's Dilwara Jain Marble Masterpiece, Arbuda Devi Shakti Peetha, and Rajasthan's Only Hill Station</h2>
<p>Sirohi — the headquarters of Sirohi district in Rajasthan, bordering Gujarat — a district whose most famous destination, Mount Abu, is Rajasthan's only hill station and one of India's most magnificent Jain temple sites (the Dilwara Jain Temples (Delvada) at Mount Abu (Sirohi district) — built between 11th-13th century CE — are universally regarded as among the finest examples of marble temple architecture in the world; the five Dilwara temples (Vimal Vasahi, Luna Vasahi, Pittalhar, Parshvnath, Mahavir Swami) are famous for their extraordinary intricate marble carving — the ceilings, pillars, archways, and figures are carved with an almost impossibly delicate lace-like precision; the marble used is so thin that it becomes translucent in certain lights; the Vimal Vasahi temple (1031 CE, dedicated to Adinath, built by minister Vimal Shah of the Solanki king) has a torana (gateway) and a mandapa whose ceiling is considered the finest marble carving in India; the Dilwara temples are a UNESCO tentative World Heritage Site; the Arbuda Devi temple (Adhar Devi — the cave Shakti Peetha on a rocky cliff) at Mount Abu is one of Rajasthan's 51 Shakti Peethas; the Guru Shikhar (1,722 metres) on Mount Abu is the highest peak of the Aravalli range; the Nakki Lake (Mount Abu) is a sacred lake surrounded by colourful bazaars; Sirohi district borders Gujarat (Banaskantha); the Jawai Dam and leopard territory (in adjacent Pali) connects to Sirohi area), and a city adjacent to Rajasthan's only hill station — is Rajasthan's most marbledly divine district. From birthday parties in Sirohi to celebration cakes — RedHeart covers all Sirohi zones: Sirohi town, Abu Road, Mount Abu, Pindwara, Sheoganj, Reodar, Revdar.</p>
<p>Our Sirohi cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Dilwara Marble Temple / Nakki Lake / Arbuda Devi Shakti Peetha-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirohi, Rajasthan (Mount Abu district)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirohi town, Abu Road, Mount Abu, Pindwara, Sheoganj, Reodar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dilwara Marble Fondant, Nakki Lake Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sirohi and Mount Abu?", answer: "Yes, same-day cake delivery is available across all Sirohi areas — Sirohi town, Abu Road, Mount Abu, Pindwara, and Sheoganj — for orders placed before 3 PM." },
      { question: "Do you have Dilwara Jain Temple and Nakki Lake-themed cakes?", answer: "Yes! The Dilwara Jain Temples at Mount Abu (11th-13th century CE — five marble temples with lace-like marble carving so intricate the ceilings become translucent — among the finest stone carvings in the world) and the Nakki Lake inspire our most ethereally beautiful Sirohi fondant cakes." },
      { question: "Are eggless cakes available in Sirohi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sirohi delivery." }
    ]
  },

  "pratapgarh-rajasthan": {
    cityName: "Pratapgarh",
    metaTitle: "Cake Delivery in Pratapgarh Rajasthan | Thewa Art GI Tribal Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Pratapgarh Rajasthan. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pratapgarh (Rajasthan)",
    metaKeyword: "cake delivery pratapgarh rajasthan, order cake online pratapgarh rajasthan, birthday cake pratapgarh rajasthan, custom cake pratapgarh, same day cake delivery pratapgarh Thewa art GI 23-carat gold work glass tribal Bhil Garasia Kagdi Rajasthan",
    footerContent: `
<h2>Cake Delivery in Pratapgarh (Rajasthan) — GI Thewa Jewellery Art, Tribal Bhil-Garasia Heartland, and Kagdi River Heritage</h2>
<p>Pratapgarh — the headquarters of Pratapgarh district in Rajasthan (the southernmost and youngest district of Rajasthan, carved in 2008 from Chittorgarh, Udaipur, and Banswara) — a district of extraordinary GI craft heritage and tribal cultural depth (the Thewa art is Pratapgarh's most celebrated contribution to Indian craft — it is a GI-tagged jewellery art form unique to Pratapgarh; Thewa involves fusing 23-carat gold work (intricate patterns cut from gold foil) onto molten coloured glass (in vivid reds, greens, blues, purples) and framing it in gold — creating jewel-like panels depicting scenes from Hindu mythology (Ramayana, Krishna stories), Mughal court scenes, hunting scenes, and florals; the Raj Soni family of Pratapgarh has preserved the Thewa art exclusively for over 400 years — they are the traditional practitioners of this unique craft; the art was patronised by the Mughal Emperor Akbar, the Rajput courts, and Queen Victoria (Thewa pieces were given as royal gifts); today Thewa is one of Rajasthan's most internationally collected GI crafts; Pratapgarh district is extremely tribal-dominated — the Bhil, Garasia, Bhil Mina, and Damor communities form the majority of the rural population; the Kagdi River and its tributaries flow through Pratapgarh; the Gaytri Mata temple and the Sitamata Wildlife Sanctuary (shared with Chittorgarh) are ecological highlights), and a city of glass-gold art and tribal pride — is Rajasthan's youngest and most craftically unique district. From birthday parties in Pratapgarh to celebration cakes — RedHeart covers all Pratapgarh zones: Pratapgarh town, Arnod, Chhoti Sadri, Dhariyawad, Peepalkhunt, Manpur.</p>
<p>Our Pratapgarh cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant GI Thewa Jewellery Art / Sitamata Wildlife / Kagdi River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Rajasthan (youngest district)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh town, Arnod, Chhoti Sadri, Dhariyawad, Peepalkhunt, Manpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Thewa Jewellery Fondant, Sitamata Wildlife Fondant, Butterscotch, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pratapgarh Rajasthan?", answer: "Yes, same-day cake delivery is available across Pratapgarh town, Arnod, Chhoti Sadri, Dhariyawad, and Peepalkhunt for orders placed before 3 PM." },
      { question: "Do you have GI Thewa Jewellery Art-themed cakes in Pratapgarh?", answer: "Yes! The GI-tagged Thewa art (23-carat gold work fused onto coloured glass — a 400-year-old craft exclusive to the Raj Soni family of Pratapgarh, patronised by Akbar, Rajput courts, and Queen Victoria) inspires our most goldenly luminous Pratapgarh fondant cakes." },
      { question: "Are eggless cakes available in Pratapgarh Rajasthan?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pratapgarh (Rajasthan) delivery." }
    ]
  },

  "balrampur": {
    cityName: "Balrampur",
    metaTitle: "Cake Delivery in Balrampur | Shravasti Adjacent Sugar Nepal Border UP | RedHeart",
    metaDescription: "Order cakes online in Balrampur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Balrampur",
    metaKeyword: "cake delivery balrampur, order cake online balrampur, birthday cake balrampur, custom cake balrampur, same day cake delivery balrampur Shravasti adjacent Rapti River Nepal border sugarcane Tulsi Das birthplace Terai Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Balrampur — Nepal Terai Frontier, Rapti River's Sacred Ghats, and Shravasti's Buddhist Circuit Gateway</h2>
<p>Balrampur — the headquarters of Balrampur district in Uttar Pradesh (carved from Gonda in 1997), one of the Terai districts bordering Nepal and adjacent to the Buddhist pilgrim circuit (Balrampur district borders Nepal's Banke Province (Nepalganj area) across the Rapti River; the Nepal border crossing at Naugarh-Sohrauna is an important Indo-Nepal trade route; Shravasti district (the Buddhist pilgrimage site where the Buddha spent 25 monsoon retreat seasons) is immediately adjacent to Balrampur; the Rapti River (Achiravati of ancient texts) flows through Balrampur district — the same river associated with the Shravasti Buddhist texts; the district is part of the Terai Arc Landscape — India's most significant tiger-elephant-rhinoceros corridor; the sugarcane belt of eastern UP's Terai (Balrampur-Gonda-Maharajganj) is one of India's most productive sugarcane zones; Balrampur Sugar Company is a significant economic entity; the Tulsi Das birthplace (Rajapur, adjacent Gonda area) is associated with the author of the Ramcharitmanas — near the Balrampur area; the Balrampur district has the Chardham temple at Tulsipur; the Tulsipur town in Balrampur has a significant textile market; the Tharu tribal community of the Nepal border region is indigenous to this Terai belt; the district has significant rice and wheat production in the fertile Terai alluvial land), and a city of Terai frontier and Buddhist circuit proximity — is UP's most Nepal-adjacent Shravasti district. From birthday parties in Balrampur to celebration cakes — RedHeart covers all Balrampur zones: Balrampur town, Utraula, Tulsipur, Gaisdi, Shravasti border, Harraiya, Pachperwa.</p>
<p>Our Balrampur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balrampur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balrampur town, Utraula, Tulsipur, Gaisdi, Harraiya, Pachperwa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Balrampur?", answer: "Yes, same-day cake delivery is available across all Balrampur areas — Balrampur town, Utraula, Tulsipur, Gaisdi, and Harraiya — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Balrampur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Balrampur delivery." },
      { question: "Do you deliver midnight cakes in Balrampur?", answer: "Yes, midnight birthday cake delivery is available across Balrampur town, Utraula, and Tulsipur zones." }
    ]
  },

  "etah": {
    cityName: "Etah",
    metaTitle: "Cake Delivery in Etah | Kali Nadi Agra Canal Ghee Braj UP | RedHeart",
    metaDescription: "Order cakes online in Etah. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Etah",
    metaKeyword: "cake delivery etah, order cake online etah, birthday cake etah, custom cake etah, same day cake delivery etah Kali Nadi Agra canal Ghee Braj Mathura adjacent butter milk Doab Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Etah — Kali Nadi's Doab Fertility, Braj Cultural Belt, and Famous GI Ghee of Western UP</h2>
<p>Etah — the headquarters of Etah district in Uttar Pradesh, one of the most agriculturally fertile districts of the Ganga-Yamuna Doab (the area between the Ganga and Yamuna rivers) — a district of dairy abundance and Braj cultural proximity (Etah district is in the western UP Doab belt — the area that includes Agra, Mathura, Firozabad, and Etah, all connected by the Braj cultural tradition associated with Lord Krishna; the Agra Canal — the 19th century British irrigation canal that transformed western UP's agricultural productivity — passes through Etah district; the Kali Nadi (Black River — a significant Ganga tributary) flows through Etah district; Etah district is part of the western UP dairy belt — this region produces extremely high-quality ghee (clarified butter) using indigenous Bhadawari buffalo and local cow breeds; the Bhadawari buffalo (a distinctive breed native to the Etah-Agra-Bhind area) produces milk with one of the highest butterfat percentages of any buffalo breed; Etah ghee is sold in markets across UP and Delhi; the district also produces sugarcane, wheat, and potato extensively; the Kasganj (now a separate district carved from Etah) was historically part of Etah; the Badaun Road area has historical Mughal-era architecture; the Etah district has significant pottery tradition in some villages), and a city of golden ghee and Doab fertility — is western UP's most dairy-rich agricultural district. From birthday parties in Etah to celebration cakes — RedHeart covers all Etah zones: Etah town, Aliganj, Jalesar, Shikohabad, Awagarh, Soron, Marhera.</p>
<p>Our Etah cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Braj Heritage / Kali Nadi / Bhadawari Buffalo Ghee-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Etah, Uttar Pradesh (Doab)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Etah town, Aliganj, Jalesar, Shikohabad, Awagarh, Soron, Marhera</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Butterscotch, Mango, Braj Heritage Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Etah?", answer: "Yes, same-day cake delivery is available across all Etah areas — Etah town, Aliganj, Jalesar, Shikohabad, and Awagarh — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Etah?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Etah delivery." },
      { question: "Do you deliver midnight cakes in Etah?", answer: "Yes, midnight birthday cake delivery is available across Etah town, Aliganj, and Jalesar zones." }
    ]
  },

  "mainpuri": {
    cityName: "Mainpuri",
    metaTitle: "Cake Delivery in Mainpuri | Tarkeshwar Mahadev Iari Rath Uttar Pradesh | RedHeart",
    metaDescription: "Order cakes online in Mainpuri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mainpuri",
    metaKeyword: "cake delivery mainpuri, order cake online mainpuri, birthday cake mainpuri, custom cake mainpuri, same day cake delivery mainpuri Tarkeshwar Mahadev iari garlic SP stronghold Shivpal Mulayam Yadav Isan Kali Nadi Doab UP",
    footerContent: `
<h2>Cake Delivery in Mainpuri — Samajwadi Stronghold, Iari Garlic Capital, and Tarkeshwar Mahadev's Ancient Shiva Temple</h2>
<p>Mainpuri — the headquarters of Mainpuri district in Uttar Pradesh (the Ganga-Yamuna Doab), a politically significant city and an agricultural district of Western UP with distinctive culinary fame (Mainpuri is the political home of the Mulayam Singh Yadav family — the Samajwadi Party patriarch, former Chief Minister of UP and Defence Minister of India, represented Mainpuri Lok Sabha constituency multiple times; Mainpuri has been an SP stronghold for decades; Shivpal Singh Yadav (Mulayam's brother) has also been a prominent figure from Mainpuri; the political identity of Mainpuri is deeply embedded in Yadav-OBC politics and SP history; the Mainpuri district has a unique agricultural specialisation — the Mainpuri area (particularly Kishni tehsil) is famous for garlic (lahsun/Allium sativum) cultivation; the Mainpuri garlic is known for its pungency and quality and is sold across UP and Delhi markets; the Isan River (a tributary of the Kali Nadi) flows through the district; the Mainpuri district has the Tarkeshwar Mahadev Shiva temple — a significant local Shiva pilgrimage; the Befam village in Mainpuri has ancient Nanda-era coins found in archaeological surveys; the district is adjacent to Agra, Kannauj, and Etawah; Mainpuri is in the heart of the Braj-Awadh cultural transition zone), and a city of political legacy and garlic fields — is western UP's most politically iconic small district. From birthday parties in Mainpuri to celebration cakes — RedHeart covers all Mainpuri zones: Mainpuri town, Bhongaon, Karhal, Kishni, Kurawan, Shikohabad, Ghiror.</p>
<p>Our Mainpuri cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mainpuri, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mainpuri town, Bhongaon, Karhal, Kishni, Kurawan, Ghiror</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mainpuri?", answer: "Yes, same-day cake delivery is available across all Mainpuri areas — Mainpuri town, Bhongaon, Karhal, Kishni, and Kurawan — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mainpuri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mainpuri delivery." },
      { question: "Do you deliver midnight cakes in Mainpuri?", answer: "Yes, midnight birthday cake delivery is available across Mainpuri town, Bhongaon, and Karhal zones." }
    ]
  },

  "sambhal": {
    cityName: "Sambhal",
    metaTitle: "Cake Delivery in Sambhal | Horn Craft Budh Stupa Kali Nadi UP | RedHeart",
    metaDescription: "Order cakes online in Sambhal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sambhal",
    metaKeyword: "cake delivery sambhal, order cake online sambhal, birthday cake sambhal, custom cake sambhal, same day cake delivery sambhal Horn craft GI antler wood Jama Masjid Shahi mosque Kalki avatar Doab Moradabad UP",
    footerContent: `
<h2>Cake Delivery in Sambhal — GI Horn Craft Capital, Shahi Jama Masjid's Babur Legacy, and Kalki Avatar's Prophesied City</h2>
<p>Sambhal — the headquarters of Sambhal district in Uttar Pradesh (carved from Moradabad in 2011), a district with unique craft heritage, Mughal architectural legacy, and extraordinary religious prophetic significance (the Sambhal Horn Craft — GI-tagged — is one of India's most distinctive traditional crafts; the artisans of Sambhal work with stag/deer antler (now substituted with imported African horn, bone, and synthetic materials) to make decorative items, combs, buttons, jewellery, and artefacts; Sambhal is one of the largest producers of horn and antler craft items in India and exports to global markets; the Shahi Jama Masjid of Sambhal (also called the Babri Masjid of Sambhal — separate from Ayodhya) — built by Babur in 1526 CE (the first year of the Mughal Empire in India) — is one of the oldest Mughal mosques in India; the mosque was reportedly built on the site of a Hari Vishnu temple (a significant legal-historical dispute); the Shahi Jama Masjid's 2024 court survey has made Sambhal a politically sensitive city; the Kalki Vishnu temple and the Kalki avatar prophesy: Sambhal is identified in Puranic texts (Kalki Purana, Bhagavata Purana) as the birthplace of Kalki — the 10th and final avatar of Lord Vishnu who will appear at the end of the Kali Yuga to destroy evil and restore dharma; a Kalki temple is now proposed in Sambhal; the Ram Ganga River (a Ganga tributary) and the Kali Nadi flow through the district), and a city of horn craft, Mughal legacy, and cosmic prophesy — is UP's most multi-layered small district. From birthday parties in Sambhal to celebration cakes — RedHeart covers all Sambhal zones: Sambhal town, Chandausi, Gunnaur, Asmoli, Narora, Rajpura, Bahajoi.</p>
<p>Our Sambhal cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant GI Horn Craft / Shahi Jama Masjid Babur / Kalki Avatar-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sambhal, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sambhal town, Chandausi, Gunnaur, Asmoli, Narora, Bahajoi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Butterscotch, GI Horn Craft Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sambhal?", answer: "Yes, same-day cake delivery is available across all Sambhal areas — Sambhal town, Chandausi, Gunnaur, Asmoli, and Narora — for orders placed before 3 PM." },
      { question: "Do you have GI Horn Craft and Shahi Jama Masjid-themed cakes?", answer: "Yes! The GI Sambhal Horn Craft (antler and bone craft exported globally — one of India's most distinctive artisan traditions) and the Shahi Jama Masjid of Sambhal (built by Babur in 1526 CE — one of the first Mughal mosques in India) inspire our most historically and artisanally distinctive Sambhal fondant cakes." },
      { question: "Are eggless cakes available in Sambhal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sambhal delivery." }
    ]
  },

  "arwal": {
    cityName: "Arwal",
    metaTitle: "Cake Delivery in Arwal | Bihar's Smallest Falgu River Gaya Adjacent | RedHeart",
    metaDescription: "Order cakes online in Arwal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Arwal",
    metaKeyword: "cake delivery arwal, order cake online arwal, birthday cake arwal, custom cake arwal, same day cake delivery arwal Bihar smallest district Falgu River Gaya adjacent Naxalbari history Sone River Bihar",
    footerContent: `
<h2>Cake Delivery in Arwal — Bihar's Second-Smallest District, Sacred Falgu River Proximity, and Gaya's Agricultural Hinterland</h2>
<p>Arwal — the headquarters of Arwal district in Bihar (carved from Jehanabad in 2009), one of Bihar's newest and smallest districts — a primarily agricultural district on the southern Bihar plateau between the Falgu and Sone rivers (Arwal district is a compact and densely agricultural district — primarily producing rice, wheat, maize, and pulses on the fertile Son-Falgu interfluve soils; the Falgu River (sacred river of Gaya — the river where Sita cursed the river to flow underground — associated with the Pitrupaksha ancestor rituals of Gaya) flows along the eastern boundary of Arwal district; the Gaya city (one of India's holiest cities — the Vishnupad Temple and Buddhist Bodh Gaya) is immediately adjacent to Arwal district's eastern boundary; the Sone River forms the western boundary of Arwal; the Arwal massacre (1986) — when Bihar Military Police killed 23 landless labourers of the Naxalite-aligned MCC (Maoist Communist Centre) — was one of the most significant incidents of the Naxalite-landlord conflict in Bihar's history and brought national attention to the district; the district has Kurtha, Kaler, Sonbhadra-Banshi-Suryapur, and Arwal town itself; the Shahabad-Aurangabad cultural zone is significant in this area), and a city between two sacred rivers and a capital's hinterland — is Bihar's most compactly positioned new district. From birthday parties in Arwal to celebration cakes — RedHeart covers Arwal town, Kurtha, Kaler, Karpi, Sonbhadra-Banshi-Suryapur.</p>
<p>Our Arwal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arwal, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arwal town, Kurtha, Kaler, Karpi, Sonbhadra-Banshi-Suryapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Arwal?", answer: "Yes, same-day cake delivery is available across all Arwal areas — Arwal town, Kurtha, Kaler, and Karpi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Arwal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Arwal delivery." },
      { question: "Do you deliver midnight cakes in Arwal?", answer: "Yes, midnight birthday cake delivery is available across Arwal town and Kurtha zones." }
    ]
  },

  "jamui": {
    cityName: "Jamui",
    metaTitle: "Cake Delivery in Jamui | Mahavira Enlightenment Jainism Jharkhand Border Bihar | RedHeart",
    metaDescription: "Order cakes online in Jamui. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jamui",
    metaKeyword: "cake delivery jamui, order cake online jamui, birthday cake jamui, custom cake jamui, same day cake delivery jamui Mahavira enlightenment Jainism Vaishali Pava Jrimbhikagrama Kiul River Bihar Jharkhand",
    footerContent: `
<h2>Cake Delivery in Jamui — Mahavira's Jain Enlightenment Site, Kiul River's Jharkhand Plateau Gateway, and Bihar's Mining Frontier</h2>
<p>Jamui — the headquarters of Jamui district in Bihar (bordering Jharkhand), one of Bihar's most geologically and spiritually significant districts — the district associated with Lord Mahavira's attainment of Jain enlightenment (Lord Mahavira — the 24th and last Tirthankara of Jainism, a contemporary of the Buddha (599-527 BCE) — attained Kevalajnana (Jain enlightenment / omniscience) at Jrimbhikagrama (ancient village, near Pawa Puri / Pawapuri area of Nalanda-Jamui boundary) after 12.5 years of extreme asceticism; while the precise location of Jrimbhikagrama is debated between Nalanda and Jamui districts, the Jamui area is associated with Mahavira's 12-year wandering and his enlightenment; Mahavira was born in Vaishali and spent much of his ascetic life in Bihar; the Jain pilgrimage circuit of Bihar (Vaishali-Pawapuri-Kundalpur-Rajgir) connects through this area; Jamui district borders Jharkhand — the Kiul River (a significant Ganga tributary draining the Chota Nagpur plateau) flows through Jamui; the Chota Nagpur plateau geology enters through Jamui — the district has significant copper, mica, and mineral deposits; the Simultala hill station (Jamui district) is sometimes called the "Shimla of Bihar" — a forested hill area with cooler temperatures; Mallikarjuna Jyotirlinga proximity (Srisailam) is far — but local Shiva shrines are significant; the district has Santhal and other tribal communities in the forested areas), and a city of Jain enlightenment and Jharkhand plateau frontier — is Bihar's most spiritually Jain and geologically metallic eastern district. From birthday parties in Jamui to celebration cakes — RedHeart covers all Jamui zones: Jamui town, Jhajha, Sikandra, Chakai, Sono, Khaira, Laxmipur.</p>
<p>Our Jamui cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mahavira Kevalajnana / Simultala Hills / Kiul River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamui, Bihar (Jharkhand border)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamui town, Jhajha, Sikandra, Chakai, Sono, Khaira, Laxmipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Mahavira Kevalajnana Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jamui?", answer: "Yes, same-day cake delivery is available across all Jamui areas — Jamui town, Jhajha, Sikandra, Chakai, and Sono — for orders placed before 3 PM." },
      { question: "Do you have Mahavira Kevalajnana Jain Enlightenment-themed cakes?", answer: "Yes! Lord Mahavira's attainment of Jain Kevalajnana (omniscience/enlightenment) at Jrimbhikagrama (associated with the Jamui area — after 12.5 years of extreme asceticism by the 24th Tirthankara, contemporary of the Buddha) inspires our most spiritually Jain-inspired Jamui fondant cakes." },
      { question: "Are eggless cakes available in Jamui?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jamui delivery." }
    ]
  },

  "koraput": {
    cityName: "Koraput",
    metaTitle: "Cake Delivery in Koraput | Tribal Konda Reddi Malyagiri Odisha | RedHeart",
    metaDescription: "Order cakes online in Koraput. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Koraput",
    metaKeyword: "cake delivery koraput, order cake online koraput, birthday cake koraput, custom cake koraput, same day cake delivery koraput Tribal Konda Reddi Koraput Zilla Bonda Gadaba Machkund River Eastern Ghats Odisha",
    footerContent: `
<h2>Cake Delivery in Koraput — Bonda and Konda Reddi Tribal Heritage, Machkund River Gorges, and Eastern Ghats' Biodiversity</h2>
<p>Koraput — the headquarters of Koraput district in Odisha, one of India's most tribally diverse and ecologically magnificent districts in the southern Eastern Ghats (Koraput district is home to an extraordinary diversity of tribal communities — including the Bonda (Bondo Highlanders — one of India's most isolated Particularly Vulnerable Tribal Groups, living in the Bonda Hills in Malkangiri-Koraput and known for their minimal clothing, beaded jewellery, and ancient-looking pre-agricultural practices), the Kondh (Kondha), Koya, Gadaba, Bondas, Didayi, and Soura — making it one of the tribal anthropological heartlands of India; the Koraput Tribal Museum and craft traditions (particularly the Koraput saree and Dhokra metal casting) represent exceptional cultural heritage; the Machkund River (and the Machkund Hydroelectric Project — one of Odisha's earliest hydropower projects, developed jointly by Odisha and AP) flows through the dramatic gorges of the Eastern Ghats in Koraput; the Koraput district borders Andhra Pradesh and Chhattisgarh; the Jagannath Sagar reservoir (near Koraput) is a significant water body; the Koraput area is the Mahanadi headwaters zone; the Deomali peak (1,672 metres) in Koraput is the highest peak in Odisha; the Duduma Waterfall (on the Machkund — 157 metres high) is one of Odisha's most spectacular waterfalls; the Lamtaput-Pottangi area has significant bauxite and chromite mineral deposits; the Koraput district has multiple significant biodiversity reserves including Karlapat Wildlife Sanctuary), and a city of tribal heritage and Eastern Ghats biodiversity — is Odisha's most tribally vibrant and geologically dramatic southern district. From birthday parties in Koraput to celebration cakes — RedHeart covers all Koraput zones: Koraput town, Jeypore, Sunabeda, Narayanpatna, Boipariguda, Borigumma, Laxmipur.</p>
<p>Our Koraput cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Bonda Tribe / Duduma Waterfall / Machkund Gorge-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koraput, Odisha (Eastern Ghats)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koraput town, Jeypore, Sunabeda, Narayanpatna, Boipariguda, Borigumma, Laxmipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Bonda Tribe Fondant, Duduma Waterfall Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Koraput?", answer: "Yes, same-day cake delivery is available across all Koraput areas — Koraput town, Jeypore, Sunabeda, Narayanpatna, and Boipariguda — for orders placed before 3 PM." },
      { question: "Do you have Bonda Tribe and Duduma Waterfall-themed cakes?", answer: "Yes! The Bonda (Bondo Highlanders — one of India's most ancient and isolated tribal communities in the Bonda Hills, with pre-agricultural practices) and the Duduma Waterfall (157 metres on the Machkund River — one of Odisha's most spectacular cascades in the Eastern Ghats gorges) inspire our most tribally authentic and naturally dramatic Koraput fondant cakes." },
      { question: "Are eggless cakes available in Koraput?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Koraput delivery." }
    ]
  },

  "rayagada": {
    cityName: "Rayagada",
    metaTitle: "Cake Delivery in Rayagada | Kondh Tribe Bauxite Vedanta Odisha | RedHeart",
    metaDescription: "Order cakes online in Rayagada. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rayagada",
    metaKeyword: "cake delivery rayagada, order cake online rayagada, birthday cake rayagada, custom cake rayagada, same day cake delivery rayagada Kondh tribe Niyamgiri Bauxite Vedanta Vamsadhara River Eastern Ghats Odisha tribal",
    footerContent: `
<h2>Cake Delivery in Rayagada — Niyamgiri's Kondh Tribal Victory, Bauxite Mountain Conservation, and Vamsadhara River's Eastern Ghats</h2>
<p>Rayagada — the headquarters of Rayagada district in Odisha, one of India's most environmentally and tribally significant districts — the site of the landmark Niyamgiri Hills dispute (the Niyamgiri Hills (also spelled Niyamgiri) — in Kalahandi-Rayagada area — are a sacred mountain range inhabited by the Dongria Kondh and Kutia Kondh tribal communities who worship the mountain as their supreme deity Niyam Raja (the Lord of Law / Ruler of the Mountain); the Niyamgiri Hills have one of the largest untapped bauxite deposits in India — the Vedanta Resources (through its subsidiary Sterlite Industries/Vedanta Aluminium) proposed to mine the bauxite for their aluminium refinery at Lanjigarh; the Niyamgiri bauxite mining case became one of India's most landmark cases in tribal rights vs. development — in 2013, the Supreme Court of India ordered a village-level gram sabha (public hearing) of the Kondh tribal villages; in 2013-14, all 12 gram sabhas of the Niyamgiri area voted unanimously to reject the mining — making it a historic victory for tribal rights and environmental protection; the case established that gram sabha consent is mandatory for projects in forest-dwelling tribal areas; the Vamsadhara River (flowing through Rayagada into Andhra Pradesh) is an important Eastern Ghats river; the Rayagada district has significant bauxite and iron ore deposits; the Jeypore area (adjacent, in Koraput district) and Rayagada share tribal cultural traditions; the district has significant railway connectivity through Rayagada station on the Visakhapatnam-Kirandul NMDC line), and a city of tribal sovereignty and Eastern Ghats mineral wealth — is Odisha's most globally significant tribal rights landmark district. From birthday parties in Rayagada to celebration cakes — RedHeart covers all Rayagada zones: Rayagada town, Gunupur, Bissamcuttack, Padmapur, Gudari, Kashipur, Kolnara.</p>
<p>Our Rayagada cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Niyamgiri Kondh Tribe / Vamsadhara River / Tribal Sovereignty-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rayagada, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rayagada town, Gunupur, Bissamcuttack, Padmapur, Gudari, Kashipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Niyamgiri Kondh Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rayagada?", answer: "Yes, same-day cake delivery is available across all Rayagada areas — Rayagada town, Gunupur, Bissamcuttack, Padmapur, and Gudari — for orders placed before 3 PM." },
      { question: "Do you have Niyamgiri Kondh Tribal Victory-themed cakes?", answer: "Yes! The Niyamgiri Kondh tribal victory (where all 12 gram sabhas of the Dongria-Kutia Kondh communities voted unanimously in 2013-14 to reject Vedanta's bauxite mining of their sacred Niyam Raja mountain — a Supreme Court-mandated historic landmark in tribal rights) inspires our most sovereignty-celebrating Rayagada fondant cakes." },
      { question: "Are eggless cakes available in Rayagada?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Rayagada delivery." }
    ]
  },

  "wanaparthy": {
    cityName: "Wanaparthy",
    metaTitle: "Cake Delivery in Wanaparthy | Krishna River Somasila Dam Telangana | RedHeart",
    metaDescription: "Order cakes online in Wanaparthy. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Wanaparthy",
    metaKeyword: "cake delivery wanaparthy, order cake online wanaparthy, birthday cake wanaparthy, custom cake wanaparthy, same day cake delivery wanaparthy Krishna River Somasila Palamuru Ranga Reddy Lift Irrigation cotton Telangana",
    footerContent: `
<h2>Cake Delivery in Wanaparthy — Palamuru-Ranga Reddy Lift Irrigation's Water Revolution and Krishna River's Southern Telangana Gateway</h2>
<p>Wanaparthy — the headquarters of Wanaparthy district in Telangana (carved from Mahabubnagar in 2016), one of Telangana's newly formed districts in the Palamuru-Mahabubnagar region — a district of water-driven agricultural transformation (Wanaparthy district is part of the Palamuru region — historically one of Telangana's most drought-prone and water-stressed areas; the Palamuru-Ranga Reddy Lift Irrigation Scheme (PRLIS) — one of the most ambitious irrigation projects launched by the Telangana government post-2014 statehood — aims to lift water from the Krishna River at Srisailam reservoir and distribute it across the dry Palamuru (Mahabubnagar) and Ranga Reddy districts; the scheme involves lifting water over 500 metres in altitude and distributing through 900+ km of pipeline — one of the world's most ambitious lift irrigation projects; the Krishna River forms the northern boundary of Wanaparthy district (Srisailam reservoir, Nallamala forest border); the Wanaparthy Fort (Wanaparthy Samsthanam Fort) was the palace of the Wanaparthy princely state — a feudal state under the Nizam of Hyderabad; the fort is now a heritage site; the Wanaparthy area has significant cotton, sunflower, and groundnut cultivation; the district has Ghanpur and Srirangapur as significant towns; the Maddur area (Wanaparthy) has a significant local weekly market tradition), and a city of water engineering and historic Nizam-era princely legacy — is Telangana's most hydraulically ambitious new district. From birthday parties in Wanaparthy to celebration cakes — RedHeart covers all Wanaparthy zones: Wanaparthy town, Kothakota, Atmakur, Ghanpur, Pebbair, Srirangapur, Gopalpet.</p>
<p>Our Wanaparthy cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Palamuru Lift Irrigation / Wanaparthy Fort / Krishna River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wanaparthy, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wanaparthy town, Kothakota, Atmakur, Ghanpur, Pebbair, Srirangapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Wanaparthy Fort Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Wanaparthy?", answer: "Yes, same-day cake delivery is available across all Wanaparthy areas — Wanaparthy town, Kothakota, Atmakur, Ghanpur, and Pebbair — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Wanaparthy?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Wanaparthy delivery." },
      { question: "Do you deliver midnight cakes in Wanaparthy?", answer: "Yes, midnight birthday cake delivery is available across Wanaparthy town, Kothakota, and Ghanpur zones." }
    ]
  },

  "suryapet": {
    cityName: "Suryapet",
    metaTitle: "Cake Delivery in Suryapet | Krishna Nagarjunasagar Telangana | RedHeart",
    metaDescription: "Order cakes online in Suryapet. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Suryapet",
    metaKeyword: "cake delivery suryapet, order cake online suryapet, birthday cake suryapet, custom cake suryapet, same day cake delivery suryapet Nagarjunasagar Dam Krishna Munneru Aler coal power Telangana",
    footerContent: `
<h2>Cake Delivery in Suryapet — Nagarjunasagar Gateway, Munneru River's Cotton Belt, and Coal Power's Industrial Corridor</h2>
<p>Suryapet — the headquarters of Suryapet district in Telangana (carved from Nalgonda in 2016), one of Telangana's most strategically located districts on the Krishna River corridor (the Nagarjunasagar Dam — one of the world's largest masonry dams (built 1955-1967 on the Krishna River) — is at the boundary of Suryapet, Nalgonda, and Guntur districts; the Nagarjunasagar reservoir is the key water source for irrigation in Nalgonda, Suryapet, and Krishna (AP) districts; the Nagarjunasagar-Srisailam Tiger Reserve (the largest tiger reserve in India at 3,728 sq km — spanning the Nallamala forest between Telangana and Andhra Pradesh) includes the Nagarjunasagar zone; the Nagarjunakonda Buddhist island — with 3rd-4th century CE Buddhist ruins (excavated and relocated before reservoir submergence in 1960) — is a UNESCO-listed heritage island in the Nagarjunasagar reservoir; the Munneru River (a Krishna tributary) flows through Suryapet district; the Suryapet district has significant cotton cultivation (the black cotton soil — regur — of the Telangana Deccan is ideal); Aler (Suryapet district) has the Aler Thermal Power Plant (TSGENCO); the district has significant tobacco and chilli cultivation; the Suryapet town has the Huzurnagar and Kodad as significant commercial centres), and a city of dam gateway and cotton-tobacco abundance — is Telangana's most agriculturally productive Krishna-corridor district. From birthday parties in Suryapet to celebration cakes — RedHeart covers all Suryapet zones: Suryapet town, Kodad, Huzurnagar, Mothkur, Chintapalli, Nereducharla, Aler.</p>
<p>Our Suryapet cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Nagarjunasagar Dam / Nagarjunakonda Buddhist Island / Krishna River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Suryapet, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Suryapet town, Kodad, Huzurnagar, Mothkur, Chintapalli, Nereducharla, Aler</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Nagarjunasagar Fondant, Nagarjunakonda Buddhist Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Suryapet?", answer: "Yes, same-day cake delivery is available across all Suryapet areas — Suryapet town, Kodad, Huzurnagar, Mothkur, and Chintapalli — for orders placed before 3 PM." },
      { question: "Do you have Nagarjunasagar and Nagarjunakonda Buddhist Island-themed cakes?", answer: "Yes! The Nagarjunasagar Dam (one of the world's largest masonry dams — 1955-1967 on the Krishna) and the Nagarjunakonda Buddhist island (3rd-4th century CE Buddhist ruins relocated before reservoir submergence — a remarkable rescue archaeology story) inspire our most monumentally waterfront Suryapet fondant cakes." },
      { question: "Are eggless cakes available in Suryapet?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Suryapet delivery." }
    ]
  },

  "karauli": {
    cityName: "Karauli",
    metaTitle: "Cake Delivery in Karauli | Kaila Devi Temple Chambal Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Karauli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karauli",
    metaKeyword: "cake delivery karauli, order cake online karauli, birthday cake karauli, custom cake karauli, same day cake delivery karauli Kaila Devi temple Navratri Chambal Sanctuary Laharpur Yadav Rajasthan",
    footerContent: `
<h2>Cake Delivery in Karauli — Kaila Devi's Navratri Millions, Chambal Sanctuary's Wildlife, and Ancient Yadav Kingdom Heritage</h2>
<p>Karauli — the headquarters of Karauli district in Rajasthan (bordering Madhya Pradesh and UP), a city of extraordinary Shakti pilgrimage and Chambal wildlife heritage (the Kaila Devi Temple — 23 km from Karauli town — is one of Rajasthan's most important Shakti shrines; the temple is dedicated to Kaila Devi (a form of Goddess Durga / Chamunda), set dramatically in a gorge of the Trikut Hills on the Kalisil River; the Kaila Devi Navratri fair (held twice a year — Chaitra and Ashwin Navratri) is one of Rajasthan's largest religious fairs, drawing 2-3 million devotees especially from Rajasthan, MP, and Uttar Pradesh; the Languriya songs — a unique folk genre devoted to Bhairon (the male guardian deity of Kaila Devi) — are sung by pilgrims walking to the temple in a distinctive call-and-response style; the Chambal River flows through the Karauli area — the National Chambal Sanctuary (protecting Gharial, Mugger, Gangetic dolphin, Indian skimmer birds) enters the Karauli region from Sawai Madhopur; the Karauli city was the capital of the Yadav (Jadaun) Rajput princely state — one of the few princely states claiming descent from the Yadava lineage (Lord Krishna's clan); the Karauli City Palace (still occupied by the royal family) is a heritage hotel; the Madan Mohanji temple in Karauli has significant Vaishnava traditions; the Timangarh Fort (on the Chambal, Karauli) is a ruined but significant medieval fortification), and a city of Shakti pilgrimage and Chambal's ancient gharials — is Rajasthan's most powerfully matriarchal and wildly riverine southeastern city. From birthday parties in Karauli to celebration cakes — RedHeart covers all Karauli zones: Karauli town, Hindaun City, Nadoti, Sapotra, Mandrail, Todabhim, Shri Mahaveerji.</p>
<p>Our Karauli cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Kaila Devi Navratri / Chambal Gharial / Karauli City Palace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karauli, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karauli town, Hindaun City, Nadoti, Sapotra, Mandrail, Todabhim, Shri Mahaveerji</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kaila Devi Fondant, Chambal Gharial Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karauli?", answer: "Yes, same-day cake delivery is available across all Karauli areas — Karauli town, Hindaun City, Nadoti, Sapotra, and Mandrail — for orders placed before 3 PM." },
      { question: "Do you have Kaila Devi Navratri and Chambal Wildlife-themed cakes?", answer: "Yes! The Kaila Devi Temple (drawing 2-3 million Navratri pilgrims singing the unique Languriya folk songs) and the National Chambal Sanctuary's Gharial-Dolphin-Skimmer bird waterway inspire our most devotionally vibrant and wildly riverine Karauli fondant cakes." },
      { question: "Are eggless cakes available in Karauli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Karauli delivery." }
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
