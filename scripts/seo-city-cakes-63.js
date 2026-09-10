// Cakes Batch 63 — 11 cities
// Chhattisgarh: Janjgir-Champa, Jashpur, Ambikapur (Surguja), Koriya
// Odisha: Khordha (Bhubaneswar), Bolangir, Kalahandi, Nuapada
// HP: Sirmaur (Nahan), Lahaul-Spiti (Keylong)
// Punjab: Fazilka

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "janjgir-champa": {
    cityName: "Janjgir-Champa",
    metaTitle: "Cake Delivery in Janjgir-Champa | Mahamaya Temple Ratanpur Chhattisgarh Coal Belt | RedHeart",
    metaDescription: "Order cakes online in Janjgir-Champa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Janjgir-Champa",
    metaKeyword: "cake delivery janjgir champa, order cake online janjgir, birthday cake janjgir champa, custom cake janjgir, same day cake delivery Janjgir Champa Chhattisgarh Mahamaya Temple Ratanpur Hasdeo River coal NTPC Korba adjacent",
    footerContent: `
<h2>Cake Delivery in Janjgir-Champa — Mahamaya Temple Ratanpur, Hasdeo Coal Belt, and Chhattisgarh Heritage</h2>
<p>Janjgir-Champa — the district headquarters of Janjgir-Champa district in Chhattisgarh (central Chhattisgarh; Mahanadi and Hasdeo rivers; coal belt), a district at the heart of Chhattisgarh's cultural and energy landscape (the Ratanpur and Mahamaya Temple (Ratanpur — in Bilaspur adjacent/Janjgir-Champa area; the Mahamaya Temple at Ratanpur is one of Chhattisgarh's most sacred temples; Ratanpur was the historical capital of the Haihaiya (Chhattisgarhi Rajput) kingdom and the Haihaya dynasty; the Mahishmati kingdom; the Mahamaya Devi (Shakti) temple at Ratanpur draws lakhs of pilgrims; Ratanpur was the premier city of medieval Chhattisgarh before Raipur); the Hasdeo River and Coal (the Hasdeo-Arand coalfields — in Korba-Janjgir area — are a major coal mining zone; the Hasdeo Arand forest is India's richest dense forest remaining over a continuous coalfield; tribal communities (Gond, Oraon) live in the Hasdeo forests; the controversy over coal block allocation in Hasdeo Arand forests has been a major environmental and tribal rights issue; the Korba NTPC Super Thermal Power Station is in adjacent Korba district); the Champa town (one of the twin headquarters towns; on the Hasdeo River; a commercial center); the Akaltara area (in Janjgir-Champa — has some historical Chhattisgarhi temple heritage; the Devarani-Jethani temples at Amarkantak-Tala — the famous Shiva temples with the extraordinary Rudra Shiva (Tala) sculpture)), and a city of Ratanpur Mahamaya heritage and Hasdeo coal forest controversy — is Chhattisgarh's most Ratanpur-Mahamaya-Haihaiya-capital and Hasdeo-coal-forest-tribal Janjgir-Champa. From birthday parties in Janjgir-Champa to celebration cakes — RedHeart covers all areas: Janjgir city, Champa, Akaltara, Naila, Jaijaipur, Baloda, Pamgarh.</p>
<p>Our Janjgir-Champa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Janjgir-Champa, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Janjgir city, Champa, Akaltara, Naila, Jaijaipur, Baloda, Pamgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Janjgir-Champa?", answer: "Yes, same-day cake delivery is available across all Janjgir-Champa areas — Janjgir city, Champa, Akaltara, Naila, Jaijaipur, and Baloda — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Janjgir-Champa?", answer: "Yes, all flavours are available in eggless variants for Janjgir-Champa delivery." },
      { question: "Do you deliver midnight cakes in Janjgir-Champa?", answer: "Yes, midnight birthday cake delivery is available across Janjgir and Champa city zones." }
    ]
  },

  "jashpur": {
    cityName: "Jashpur",
    metaTitle: "Cake Delivery in Jashpur | Chhattisgarh Jharkhand Border Tribal Kailash Gufa Danteshwari | RedHeart",
    metaDescription: "Order cakes online in Jashpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jashpur",
    metaKeyword: "cake delivery jashpur, order cake online jashpur, birthday cake jashpur, custom cake jashpur, same day cake delivery Jashpur Chhattisgarh Jharkhand border Oraon Uraon tribal Kunkuri Cathedral Kailash Gufa waterfalls",
    footerContent: `
<h2>Cake Delivery in Jashpur — Asia's Largest Church (Kunkuri), Oraon Tribal Heritage, and Chhattisgarh-Jharkhand Forests</h2>
<p>Jashpur — the district headquarters of Jashpur district in Chhattisgarh (northeastern Chhattisgarh; Jharkhand-Odisha border; forested hills), a district of extraordinary tribal culture and a surprising claim to an architectural record (the Kunkuri Cathedral / Church of the Nativity (Kunkuri — in Jashpur district; the Catholic Church of the Nativity at Kunkuri is often described as Asia's largest church by seating capacity — it was built by Jesuit missionaries in 1962 and can seat 10,000+ worshippers at once; the church serves the large Catholic Oraon tribal community of Jashpur; the Kunkuri church is a remarkable landmark in the tribal heartland; Christmas at Kunkuri is an extraordinary spectacle with thousands of tribal Catholics gathering); the Oraon/Uraon Tribe (the Oraon are one of Jharkhand-Chhattisgarh's major tribal communities; Jashpur has a large Oraon population; the Oraon Sarhul festival (spring festival worshipping Sal trees and the earth goddess); the Oraon traditional music — the mandar drum; the Oraon karmic-social structure); the Jashpur's waterfalls (the district's hilly terrain generates numerous waterfalls — Raninfall, Kailash Gufa (limestone cave with stalactites/stalagmites), Dantewada waterfalls; the Ib River origin (the Ib River originates in Jashpur district; flows into Odisha)); the Badajamda area (iron ore mines in Jashpur-Jharkhand border), and a city of Kunkuri Asia's largest church and Oraon tribal Christmas — is Chhattisgarh's most Kunkuri-Asia's-largest-church-10000-seats and Oraon-Sarhul-tribal Jashpur. From birthday parties in Jashpur to celebration cakes — RedHeart covers all areas: Jashpur city (Jashpurnagar), Kunkuri, Pathalgaon, Bagicha, Duldul, Pharsabahar, Manora.</p>
<p>Our Jashpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jashpur (Jashpurnagar), Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jashpurnagar, Kunkuri, Pathalgaon, Bagicha, Duldul, Pharsabahar, Manora</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jashpur?", answer: "Yes, same-day cake delivery is available across all Jashpur areas — Jashpurnagar, Kunkuri, Pathalgaon, Bagicha, Duldul, and Pharsabahar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jashpur?", answer: "Yes, all flavours are available in eggless variants for Jashpur delivery." },
      { question: "Do you deliver midnight cakes in Jashpur?", answer: "Yes, midnight birthday cake delivery is available across Jashpurnagar and Kunkuri zones." }
    ]
  },

  "ambikapur": {
    cityName: "Ambikapur",
    metaTitle: "Cake Delivery in Ambikapur | Surguja Chhattisgarh Mainpat Tibet Settlement Rihand | RedHeart",
    metaDescription: "Order cakes online in Ambikapur (Surguja). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ambikapur (Surguja)",
    metaKeyword: "cake delivery ambikapur surguja, order cake online ambikapur, birthday cake ambikapur, custom cake ambikapur, same day cake delivery Ambikapur Surguja Chhattisgarh Mainpat Tibet settlement Rihand River Son origin",
    footerContent: `
<h2>Cake Delivery in Ambikapur (Surguja) — Mainpat "Mini Tibet," Rihand River, and Chhattisgarh's Northern Highlands</h2>
<p>Ambikapur — the district headquarters of Surguja district in Chhattisgarh (northern Chhattisgarh; Jharkhand-MP border; high plateau), the highland capital of Chhattisgarh with a remarkable Tibetan settlement (the Mainpat "Mini Tibet" (Mainpat — in Surguja district; a high plateau at approximately 1,100m altitude; sometimes called "Mini Tibet" or "Shimla of Chhattisgarh"; in the 1960s, a settlement of Tibetan refugees was established at Mainpat following the 1959 Tibetan uprising; the Tibetan settlers at Mainpat maintain their Buddhist tradition, monastery (gompa), and Tibetan cultural practices; Mainpat has a Tibetan refugee camp that has been there for 60+ years; a Buddha statue and monastery; the scenic high plateau with grasslands and streams; the Mainpat waterfalls; the Eco-tourism circuit); the Rihand River (the Rihand originates in Surguja district — it flows through Surguja-Koriya and then into Sonbhadra (UP) where the Rihand Dam creates the Govind Ballabh Pant Sagar reservoir (one of India's largest man-made lakes)); the Son River origin area (the Son River also originates from the Surguja-Amarkantak region; the Surguja highlands are a watershed for multiple major rivers); the Ambikapur Smart City (Ambikapur city has received national recognition for waste management — the Ambikapur solid waste management model has become a national case study); the Koriya and Sarguja coal fields), and a city of Mainpat Mini-Tibet Tibetan refugee 1960s and Rihand River origin — is Chhattisgarh's most Mainpat-Mini-Tibet-Tibetan-refugees-60-years and Rihand-origin-Surguja-highlands Ambikapur. From birthday parties in Ambikapur to celebration cakes — RedHeart covers all areas: Ambikapur city, Sitapur, Lundra, Balrampur adjacent, Surajpur adjacent, Premnagar, Bhaiyathan.</p>
<p>Our Ambikapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mainpat Mini-Tibet / Tibetan Monastery-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambikapur (Surguja), Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambikapur city, Sitapur, Lundra, Mainpat, Premnagar, Bhaiyathan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mainpat Tibet Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ambikapur (Surguja)?", answer: "Yes, same-day cake delivery is available across all Ambikapur areas — Ambikapur city, Sitapur, Lundra, Mainpat, and Premnagar — for orders placed before 3 PM." },
      { question: "Do you have Mainpat Mini-Tibet-themed cakes?", answer: "Yes! Mainpat (Surguja's high plateau at 1,100m — the 'Mini Tibet' of Chhattisgarh; Tibetan refugee settlement established in the 1960s after the 1959 uprising; Buddhist monastery and gompa; Tibetan cultural practices maintained for 60+ years; scenic grasslands and waterfalls) inspires our most Mainpat-Mini-Tibet-Tibetan-monastery fondant cakes." },
      { question: "Are eggless cakes available in Ambikapur?", answer: "Yes, all flavours are available in eggless variants for Ambikapur delivery." }
    ]
  },

  "koriya": {
    cityName: "Koriya",
    metaTitle: "Cake Delivery in Koriya | Baikunthpur Chhattisgarh Hasdeo Son Tribal Gurughasi Dam | RedHeart",
    metaDescription: "Order cakes online in Koriya (Baikunthpur). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Koriya (Baikunthpur)",
    metaKeyword: "cake delivery koriya baikunthpur, order cake online koriya, birthday cake koriya, custom cake koriya, same day cake delivery Koriya Baikunthpur Chhattisgarh Hasdeo Arand coal tribal Son origin Gurughasi Chirimiri",
    footerContent: `
<h2>Cake Delivery in Koriya (Baikunthpur) — Hasdeo-Arand Coalfields, Son River Origin, and Chhattisgarh-Jharkhand Highlands</h2>
<p>Koriya — the district headquarters of Koriya district in Chhattisgarh (Baikunthpur is the district HQ; northeastern Chhattisgarh; MP-Jharkhand border), a forested highland district in the Hasdeo River system (the Hasdeo-Arand Coalfields (Koriya district is part of the Hasdeo-Arand coalfield area — one of India's most contested coal regions; significant coal reserves under some of India's last remaining old-growth forests; the Hasdeo Arand forest controversy has involved Gond and Oraon tribal communities resisting coal mining; the region was declared a "No-Go" zone for coal mining by the MoEFCC but was subsequently opened; a major environmental and tribal rights battleground); the Son River origin (the Son River — a major Ganga tributary flowing through MP-Bihar — has tributaries originating in the Koriya district highlands; the Koriya plateau is part of the watershed for the Son and Hasdeo systems); the Chirimiri (Koriya district — the Chirimiri coal town is a significant settlement in Koriya; a planned coal township; one of Chhattisgarh's coal industry centers); the Gurughasi Dam (a dam in Koriya district on the Hasdeo system; provides irrigation and power); the Gond and Korwa tribal communities (the Korwa are a Particularly Vulnerable Tribal Group (PVTG) present in Koriya district)), and a city of Hasdeo-Arand coal-forest controversy and Gond-Korwa tribal highlands — is Chhattisgarh's most Hasdeo-Arand-coal-forest-controversy and Korwa-PVTG-tribal Koriya. From birthday parties in Koriya to celebration cakes — RedHeart covers all areas: Baikunthpur city, Chirimiri, Manendragarh, Bhadrpur, Bharatpur, Sonhat, Pendra Road adjacent.</p>
<p>Our Koriya cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koriya (Baikunthpur), Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baikunthpur city, Chirimiri, Manendragarh, Bharatpur, Sonhat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Koriya (Baikunthpur)?", answer: "Yes, same-day cake delivery is available across all Koriya areas — Baikunthpur city, Chirimiri, Manendragarh, Bharatpur, and Sonhat — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Koriya?", answer: "Yes, all flavours are available in eggless variants for Koriya delivery." },
      { question: "Do you deliver midnight cakes in Baikunthpur?", answer: "Yes, midnight birthday cake delivery is available across Baikunthpur city and Chirimiri zones." }
    ]
  },

  "khordha": {
    cityName: "Khordha",
    metaTitle: "Cake Delivery in Khordha | Bhubaneswar Adjacent Odisha Lingaraj Dhauli Nandankanan | RedHeart",
    metaDescription: "Order cakes online in Khordha. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Khordha",
    metaKeyword: "cake delivery khordha, order cake online khordha, birthday cake khordha, custom cake khordha, same day cake delivery Khordha Bhubaneswar Odisha Lingaraj Dhauli Nandankanan Chilika adjacent Prachi Valley",
    footerContent: `
<h2>Cake Delivery in Khordha — Bhubaneswar Capital Adjacent, Lingaraj Temple, Dhauli Shanti Stupa, and Chilika Gateway</h2>
<p>Khordha — the district headquarters of Khordha district in Odisha (the district containing Bhubaneswar — the state capital of Odisha; Mahanadi delta zone), the administrative district that encompasses Odisha's capital city (Bhubaneswar is within Khordha district — the Bhubaneswar city (the "Temple City of India" — Bhubaneswar; the old Bhubaneswar temple complex has over 700 temples; the Lingaraj Temple (11th century CE Somavanshi dynasty; the largest and most important temple in Bhubaneswar; 55m tall; the Bindu Sagar sacred tank at the center of old Bhubaneswar; the Mukteswara Temple — "gem of Odishan architecture" (10th CE; the intricate torana gateway); the Rajarani Temple (11th CE; no deity; extraordinary erotic and decorative sculpture panels)); the Dhauli Shanti Stupa (Dhauli hill — 8km from Bhubaneswar; the site of the Kalinga War (261 BCE) — the battle that transformed Emperor Ashoka from a conqueror into a Buddhist-convert peace-promoter; Ashoka's rock edicts are carved here; the Japanese-built Shanti Stupa stands on Dhauli hill; the Dhauli elephants (Ashoka-era rock-cut elephants)); the Nandankanan Zoological Park (Bhubaneswar — the first zoo in India to breed white tigers in captivity; also famous for the Indian Gharial and the White Peacock); the Chilika Lake adjacency (Chilika Lake — Asia's largest brackish water lagoon — is in Khordha-Puri-Ganjam districts; the Mangalajodi wetlands and Irrawaddy dolphins)), and a city of Bhubaneswar Temple City and Dhauli Kalinga War Ashoka — is Odisha's most Bhubaneswar-700-temples-Lingaraj and Dhauli-Kalinga-War-Ashoka-transformation Khordha. From birthday parties in Khordha to celebration cakes — RedHeart covers all areas: Bhubaneswar city, Khordha town, Bhubaneswar New Town, Jatni, Balipatna, Tangi, Chilika gateway.</p>
<p>Our Khordha cake range: Chocolate, Black Forest, Red Velvet, Mango, Rasabali Cake (Odisha special!), Butterscotch, Photo Cakes, Fondant Lingaraj Temple / Dhauli Stupa-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khordha (Bhubaneswar), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhubaneswar city, Khordha town, Jatni, Balipatna, Tangi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Lingaraj Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Khordha (Bhubaneswar)?", answer: "Yes, same-day cake delivery is available across all Khordha areas — Bhubaneswar city, Khordha town, Jatni, Balipatna, and Tangi — for orders placed before 3 PM." },
      { question: "Do you have Lingaraj Temple and Dhauli-themed cakes?", answer: "Yes! The Lingaraj Temple (11th century CE; 55m tall; Bhubaneswar's greatest temple; Bindu Sagar sacred tank), the Dhauli Shanti Stupa (site of the Kalinga War 261 BCE; Ashoka's rock edicts; the battle that transformed Ashoka into a Buddhist peace-promoter; Japanese-built stupa), and Nandankanan (first Indian zoo to breed white tigers) inspire our most Lingaraj-Dhauli fondant cakes." },
      { question: "Are eggless cakes available in Khordha?", answer: "Yes, all flavours are available in eggless variants for Khordha delivery." }
    ]
  },

  "bolangir": {
    cityName: "Bolangir",
    metaTitle: "Cake Delivery in Bolangir | Patnagarh Odisha Hauma Bonai Sonepur Cattle Fair Mahanadi | RedHeart",
    metaDescription: "Order cakes online in Bolangir. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bolangir",
    metaKeyword: "cake delivery bolangir, order cake online bolangir, birthday cake bolangir, custom cake bolangir, same day cake delivery Bolangir Odisha Sonepur Cattle Fair Mahanadi Gandahati waterfall Patnagarh Titlagarh",
    footerContent: `
<h2>Cake Delivery in Bolangir — Sonepur Cattle Fair (Asia's Largest), Gandahati Waterfall, and Western Odisha Culture</h2>
<p>Bolangir — the district headquarters of Bolangir district in Odisha (western Odisha; Mahanadi upper basin; Chhattisgarh border), a district in the heart of western Odisha with cultural and historical significance (the Sonepur Cattle Fair (Sonepur — in Subarnapur district adjacent to Bolangir; the Sonepur Mela / Balunkeswar Cattle Fair — held every November at Sonepur on the confluence of the Mahanadi and Tel rivers on Kartik Purnima; traditionally called Asia's largest cattle fair; lakhs of animals including horses, elephants, cattle, camels, and exotic birds are traded; a carnival atmosphere with rides, performers, and traditional crafts; the Subarnapur/Bolangir zone serves as the gateway to the Sonepur Mela); the Gandahati Waterfall (Bolangir district — the Gandahati Waterfall in Bolangir is a scenic waterfall; western Odisha's natural beauty includes several such falls); the Patnagarh (a significant town in Bolangir district; historically the seat of the Patna princely state; the Patna princely state was one of the significant princely states of Odisha); the Titlagarh (Bolangir district — on the Nagpur-Howrah railway line; a significant junction town; known as one of Odisha's hottest places — summer temperatures frequently exceed 45°C); the Hauma (the Hauma area in Bolangir); western Odisha migration (the Bolangir district has historically had significant labour migration to brick kilns and construction sites in other states), and a city of Sonepur Cattle Fair gateway and Titlagarh extreme heat Odisha — is Odisha's most Sonepur-Mela-Asia's-largest-cattle-fair and Titlagarh-45-degree-hottest Bolangir. From birthday parties in Bolangir to celebration cakes — RedHeart covers all areas: Bolangir city, Titlagarh, Patnagarh, Kantabanji, Sonepur area, Tureikela, Belpada.</p>
<p>Our Bolangir cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bolangir, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bolangir city, Titlagarh, Patnagarh, Kantabanji, Tureikela, Belpada</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bolangir?", answer: "Yes, same-day cake delivery is available across all Bolangir areas — Bolangir city, Titlagarh, Patnagarh, Kantabanji, and Tureikela — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bolangir?", answer: "Yes, all flavours are available in eggless variants for Bolangir delivery." },
      { question: "Do you deliver midnight cakes in Bolangir?", answer: "Yes, midnight birthday cake delivery is available across Bolangir city zones." }
    ]
  },

  "kalahandi": {
    cityName: "Kalahandi",
    metaTitle: "Cake Delivery in Kalahandi | Bhawanipatna Odisha Harishankar Temple Phurlijharan | RedHeart",
    metaDescription: "Order cakes online in Kalahandi (Bhawanipatna). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kalahandi (Bhawanipatna)",
    metaKeyword: "cake delivery kalahandi bhawanipatna, order cake online kalahandi, birthday cake kalahandi, custom cake kalahandi, same day cake delivery Kalahandi Bhawanipatna Odisha Harishankar Temple Tel River Phurlijharan drought famine",
    footerContent: `
<h2>Cake Delivery in Kalahandi (Bhawanipatna) — Harishankar Temple, Tel River Valley, and Kalahandi's Resilient People</h2>
<p>Kalahandi — the district headquarters of Kalahandi district in Odisha (Bhawanipatna is the HQ; southwestern Odisha; Chhattisgarh border), a district of extraordinary natural beauty and a community that has overcome historical hardship (the Harishankar Temple (Harishankar — in Kalahandi district; the Harishankar Temple dedicated to Lord Shiva is a major pilgrimage site set in a scenic gorge with waterfalls; the temple complex is set amidst forested hills; the Phurlijharan waterfall cascade near Harishankar; accessible from Bhawanipatna; a beautiful natural setting draws pilgrims and nature lovers); the Tel River (the Tel River — a major Mahanadi tributary — originates in Kalahandi district; flows through Kalahandi and Nuapada into the Mahanadi; the Upper Tel Dam (Mukhiguda Dam) in Kalahandi is a major irrigation dam); the Kalahandi historical context (the Kalahandi region was historically known for devastating famines — the Kalahandi famine of 1984-85 brought national attention when starvation deaths and child sales were reported; the event triggered political controversy; the district has since improved significantly through development programs; the resilience of the Kalahandi people is remarkable); the GI Kendu Leaves (Kendu leaves — used to make bidis (Indian cigarettes); Odisha including Kalahandi is a major kendu leaf production area; the Odisha state government holds monopoly rights over kendu leaf collection and trading); the Kondh tribal community (Kalahandi has significant Kondh tribal population)), and a city of Harishankar Temple scenic gorge and resilient Tel River valley Kalahandi — is Odisha's most Harishankar-gorge-Phurlijharan-waterfall and Tel-River-origin-Upper-Tel-Dam Kalahandi. From birthday parties in Kalahandi to celebration cakes — RedHeart covers all areas: Bhawanipatna city, Junagarh, Dharamgarh, Koksara, Narla, Madanpur Rampur, Kesinga.</p>
<p>Our Kalahandi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalahandi (Bhawanipatna), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhawanipatna city, Junagarh, Dharamgarh, Koksara, Narla, Kesinga</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kalahandi (Bhawanipatna)?", answer: "Yes, same-day cake delivery is available across all Kalahandi areas — Bhawanipatna city, Junagarh, Dharamgarh, Koksara, Narla, and Kesinga — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kalahandi?", answer: "Yes, all flavours are available in eggless variants for Kalahandi delivery." },
      { question: "Do you deliver midnight cakes in Bhawanipatna?", answer: "Yes, midnight birthday cake delivery is available across Bhawanipatna city zones." }
    ]
  },

  "nuapada": {
    cityName: "Nuapada",
    metaTitle: "Cake Delivery in Nuapada | Odisha Chhattisgarh Border Siarmal Patora Komna Boden | RedHeart",
    metaDescription: "Order cakes online in Nuapada. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nuapada",
    metaKeyword: "cake delivery nuapada, order cake online nuapada, birthday cake nuapada, custom cake nuapada, same day cake delivery Nuapada Odisha Chhattisgarh border tribal Tel River Komna Boden Siarmal Patora",
    footerContent: `
<h2>Cake Delivery in Nuapada — Odisha-Chhattisgarh Border, Tel River Basin, and Western Odisha Tribal Heartland</h2>
<p>Nuapada — the district headquarters of Nuapada district in Odisha (western Odisha; carved from Kalahandi in 1993; Chhattisgarh border), a small tribal-dominated district at the Odisha-Chhattisgarh border (the Nuapada district — one of Odisha's smallest and most remote districts; bordering Chhattisgarh (Mahasamund and Balod districts); the district was carved from Kalahandi; the Tel River (the Tel — a major Mahanadi tributary — flows through Nuapada district; the Tel River rises from the Chhattisgarh border area and drains Kalahandi-Nuapada before joining the Mahanadi; the Upper Tel Dam system provides irrigation to this region); the Komna area (Nuapada district — the Komna block; a significant market town for the district); the Boden block (Nuapada); the Patora block; the Siarmal area (border area with Chhattisgarh); the tribal communities (Gond, Kondh, and other tribal groups are significant in Nuapada; the scheduled tribe population is high; forest-based livelihoods; collection of minor forest produce including tendu/kendu leaves, mahua flowers, and sal seeds); the Paikmal and Titilagarh areas connecting to Bolangir), and a city of Tel River basin and Odisha-Chhattisgarh border tribal community — is Odisha's most Nuapada-Tel-River-border and tribal-forest-Gond-Kondh Nuapada. From birthday parties in Nuapada to celebration cakes — RedHeart covers all areas: Nuapada city, Komna, Boden, Khariar, Siarmal, Patora.</p>
<p>Our Nuapada cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nuapada, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nuapada city, Komna, Boden, Khariar, Siarmal, Patora</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nuapada?", answer: "Yes, same-day cake delivery is available across all Nuapada areas — Nuapada city, Komna, Boden, Khariar, and Siarmal — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nuapada?", answer: "Yes, all flavours are available in eggless variants for Nuapada delivery." },
      { question: "Do you deliver midnight cakes in Nuapada?", answer: "Yes, midnight birthday cake delivery is available across Nuapada city zones." }
    ]
  },

  "nahan": {
    cityName: "Nahan",
    metaTitle: "Cake Delivery in Nahan | Sirmaur HP Renuka Lake Paonta Sahib Yamuna Shivalik Hills | RedHeart",
    metaDescription: "Order cakes online in Nahan (Sirmaur). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nahan (Sirmaur)",
    metaKeyword: "cake delivery nahan sirmaur, order cake online nahan, birthday cake nahan, custom cake nahan sirmaur, same day cake delivery Nahan Sirmaur HP Renuka Lake Paonta Sahib Yamuna Shivalik Hills Giri River",
    footerContent: `
<h2>Cake Delivery in Nahan (Sirmaur) — Renuka Lake (Himachal's Largest Natural Lake), Paonta Sahib, and Shivalik Hills</h2>
<p>Nahan — the district headquarters of Sirmaur district in Himachal Pradesh (southern HP; Shivalik Hills; Yamuna River basin; Uttarakhand border), a scenic hill town known for its natural lake and Sikh heritage site (the Renuka Lake / Renuka Ji (Renuka Lake — in Sirmaur district; the largest natural lake in Himachal Pradesh; at approximately 672m altitude; named after the goddess Renuka (mother of Sage Parashurama); the lake's outline resembles the profile of a sleeping woman; the Renuka Ji temple; the Renuka Fair — one of HP's most important fairs held annually at Renuka on the occasion of Kartik Ekadashi; the adjacent wildlife sanctuary with crocodiles and other fauna; the Parashurama Tal — a smaller lake adjacent to Renuka Lake); the Paonta Sahib (Paonta Sahib — in Sirmaur district; on the Yamuna River; one of the most significant Sikh historical gurdwaras; Guru Gobind Singh spent approximately 4 years at Paonta Sahib (1685-1689 CE); here Guru Gobind Singh composed a significant portion of his literary works; the Yamuna's banks at Paonta Sahib are serene; the Paonta Sahib Gurdwara is one of the most visited in Himachal Pradesh); the Giri River (the Giri — a Yamuna tributary — flows through Sirmaur district; the Giri-Bata hydel projects); the Nahan old town (the Nahan town itself has colonial-era structures and was the capital of the Sirmaur princely state)), and a city of Renuka Lake HP's largest and Paonta Sahib Guru Gobind Singh 4-years literary — is HP's most Renuka-Lake-largest-HP and Paonta-Sahib-Guru-Gobind-Singh-4-years Nahan. From birthday parties in Nahan to celebration cakes — RedHeart covers all areas: Nahan city, Paonta Sahib, Renuka Ji, Rajgarh, Shillai, Sangrah, Pachhad.</p>
<p>Our Nahan cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nahan (Sirmaur), Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nahan city, Paonta Sahib, Renuka Ji, Rajgarh, Shillai, Sangrah, Pachhad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nahan (Sirmaur)?", answer: "Yes, same-day cake delivery is available across all Sirmaur areas — Nahan city, Paonta Sahib, Renuka Ji, Rajgarh, Shillai, and Sangrah — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nahan?", answer: "Yes, all flavours are available in eggless variants for Nahan delivery." },
      { question: "Do you deliver midnight cakes in Nahan?", answer: "Yes, midnight birthday cake delivery is available across Nahan city and Paonta Sahib zones." }
    ]
  },

  "keylong": {
    cityName: "Keylong",
    metaTitle: "Cake Delivery in Keylong | Lahaul Spiti HP Highest District Chandrabhaga Spiti River Rohtang | RedHeart",
    metaDescription: "Order cakes online in Keylong (Lahaul-Spiti). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Keylong (Lahaul-Spiti)",
    metaKeyword: "cake delivery keylong lahaul spiti, order cake online keylong, birthday cake keylong lahaul, custom cake keylong, same day cake delivery Keylong Lahaul Spiti HP highest district Chandrabhaga Spiti Rohtang Pass Atal Tunnel",
    footerContent: `
<h2>Cake Delivery in Keylong (Lahaul-Spiti) — India's Highest District HQ, Atal Tunnel (Rohtang), and Chandrabhaga Confluence</h2>
<p>Keylong — the district headquarters of Lahaul-Spiti district in Himachal Pradesh (the highest district headquarters in India at approximately 3,100m; the largest district of HP by area; cold desert; Tibet border), a remote and extraordinarily beautiful district accessible year-round only since the Atal Tunnel opened (the Lahaul-Spiti district — India's largest district by area in Himachal Pradesh; the district combines two valleys: the Lahaul Valley (Chandrabhaga/Chenab river system) and the Spiti Valley (Spiti River); the district HQ Keylong is in Lahaul at approximately 3,100m; the district was once cut off from the rest of HP for 6 months each winter (Rohtang Pass closes in snow); the Atal Tunnel (Rohtang Tunnel) — the world's longest highway tunnel above 10,000 feet (3,000m); completed in 2020; 9.02km long under the Rohtang Pass; connects Manali (Kullu) with Lahaul year-round; a massive infrastructure achievement named after former PM Atal Bihari Vajpayee); the Chandrabhaga confluence (at Tandi in Lahaul — the Chandra and Bhaga rivers meet to form the Chenab River; the Chenab then flows into Jammu-Kashmir and Pakistan); the Spiti Valley (connected to the district; Kaza is the Spiti HQ; the Spiti River flows to the Sutlej in HP; monasteries — Ki Gompa, Tabo Gompa (UNESCO-nominated; over 1,000 years old); the Pin Valley National Park; snow leopard habitat); the Keylong old town (the Kardang Monastery above Keylong), and a city of Atal Tunnel year-round connectivity and Chandrabhaga confluence cold desert — is HP's most Atal-Tunnel-world's-longest-above-10000-feet and Lahaul-Spiti-India's-largest-HP-district Keylong. From birthday parties in Keylong to celebration cakes — RedHeart covers all areas: Keylong, Kaza (Spiti), Udaipur (Lahaul), Tandi, Gemur, Kardang.</p>
<p>Our Keylong cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Keylong (Lahaul-Spiti), Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Keylong, Kaza (Spiti), Udaipur (Lahaul), Tandi, Gemur, Kardang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Keylong (Lahaul-Spiti)?", answer: "Yes, same-day cake delivery is available across all Lahaul-Spiti areas — Keylong, Kaza (Spiti), Udaipur Lahaul, Tandi, and Gemur — for orders placed before 3 PM." },
      { question: "Do you have Atal Tunnel and Lahaul-Spiti-themed cakes?", answer: "Yes! The Atal Tunnel / Rohtang Tunnel (world's longest highway tunnel above 10,000 feet — 9.02km; completed 2020; connects Manali to Lahaul year-round; named after PM Atal Bihari Vajpayee; ended the 6-month winter isolation of Lahaul), the Chandrabhaga confluence at Tandi, and the Spiti Valley monasteries (Tabo Gompa 1,000+ years; Ki Gompa; snow leopard habitat) inspire our most Lahaul-Spiti fondant cakes." },
      { question: "Are eggless cakes available in Keylong (Lahaul-Spiti)?", answer: "Yes, all flavours are available in eggless variants for Keylong and Kaza delivery." }
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
