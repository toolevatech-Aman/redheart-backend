// Cakes Batch 64 — 11 cities
// Punjab: Fazilka, Ferozpur, Muktsar, Sangrur
// Tamil Nadu: Ariyalur, Perambalur, Pudukkottai
// Bihar: Sheohar
// CG: Kabirdham (Kawardha), Gariaband, Mahasamund

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "fazilka": {
    cityName: "Fazilka",
    metaTitle: "Cake Delivery in Fazilka | Punjab Pakistan Border Hussainiwala CRPF Indira Gandhi Canal | RedHeart",
    metaDescription: "Order cakes online in Fazilka. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fazilka",
    metaKeyword: "cake delivery fazilka, order cake online fazilka, birthday cake fazilka, custom cake fazilka, same day cake delivery Fazilka Punjab Pakistan border Hussainiwala CRPF Indira Gandhi Canal Sutlej cotton wheat",
    footerContent: `
<h2>Cake Delivery in Fazilka — Hussainiwala National Martyrs Memorial, Pakistan Border, and Punjab's Cotton Belt</h2>
<p>Fazilka — the district headquarters of Fazilka district in Punjab (southwestern Punjab; Pakistan border; Sutlej River), a border district famous for the Hussainiwala martyrs memorial and India's western frontier (the Hussainiwala National Martyrs Memorial (Hussainiwala — in Fazilka district; on the Sutlej River bank; the memorial is dedicated to Bhagat Singh, Rajguru, and Sukhdev who were executed on March 23, 1931, in Lahore (then British India); the British threw their bodies into the Sutlej near Hussainiwala; a memorial was established at this site; the flag-lowering ceremony at the Indo-Pakistan border at Hussainiwala is a solemn daily event similar to the Wagah ceremony; Bhagat Singh's family village (Khatkar Kalan) is in nearby Nawanshahr, but Hussainiwala is the martyrdom memorial site; the Hussainiwala border gate is one of Punjab's border crossings with Pakistan); the Pakistan border (Fazilka district shares a long border with Pakistan; the Suleimanki headworks — a shared irrigation headworks on the Sutlej used by both India and Pakistan for the canal systems); the Indira Gandhi Canal (the Indira Gandhi Canal / Rajasthan Canal originates from the Harike Barrage (junction of Sutlej and Beas rivers) — not far from Fazilka; this canal transformed the Thar Desert into farmland); the cotton and wheat cultivation (Fazilka district is one of Punjab's major cotton-producing areas; Fazilka cotton is a significant agricultural commodity)), and a city of Hussainiwala Bhagat Singh Rajguru Sukhdev martyrdom memorial and Pakistan border flag ceremony — is Punjab's most Hussainiwala-Bhagat-Singh-martyrdom-memorial and Pakistan-border-Sutlej Fazilka. From birthday parties in Fazilka to celebration cakes — RedHeart covers all areas: Fazilka city, Abohar, Jalalabad, Arniwala, Fazilka tehsil, Khuian Sarwar.</p>
<p>Our Fazilka cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fazilka, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fazilka city, Abohar, Jalalabad, Arniwala, Khuian Sarwar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fazilka?", answer: "Yes, same-day cake delivery is available across all Fazilka areas — Fazilka city, Abohar, Jalalabad, Arniwala, and Khuian Sarwar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Fazilka?", answer: "Yes, all flavours are available in eggless variants for Fazilka delivery." },
      { question: "Do you deliver midnight cakes in Fazilka?", answer: "Yes, midnight birthday cake delivery is available across Fazilka city and Abohar zones." }
    ]
  },

  "ferozpur": {
    cityName: "Ferozpur",
    metaTitle: "Cake Delivery in Ferozpur | Punjab Pakistan Border Hussainiwala Saragarhi Battle Sutlej | RedHeart",
    metaDescription: "Order cakes online in Ferozpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ferozpur",
    metaKeyword: "cake delivery ferozpur, order cake online ferozpur, birthday cake ferozpur, custom cake ferozpur, same day cake delivery Ferozpur Punjab Pakistan border Saragarhi Battle Gurdwara Sutlej cantonment",
    footerContent: `
<h2>Cake Delivery in Ferozpur — Battle of Saragarhi Gurdwara, Sutlej River, and Punjab's Historic Cantonment City</h2>
<p>Ferozpur — the district headquarters of Ferozpur district in Punjab (southwestern Punjab; Pakistan border; Sutlej River), a city with deep military heritage and the Sikh martial tradition (the Battle of Saragarhi / Saragarhi Gurdwara (the Battle of Saragarhi (September 12, 1897) — 21 soldiers of the 36th Sikh Regiment of the British Indian Army held a signal post at Saragarhi (NWFP, now Pakistan) against approximately 8,000-10,000 Orakzai-Afridi tribesman; all 21 soldiers fought to the last man and were killed; the British Parliament gave them standing ovation; Saragarhi Day (September 12) is commemorated by the Sikh Regiment; the Saragarhi Memorial Gurdwara in Ferozpur was built to honour the 21 martyrs; the Saragarhi battle inspired several Bollywood films including "Kesari" (2019)); the Ferozpur Cantonment (one of Punjab's oldest cantonments; established during British period; on the Pakistan border); the Sutlej River (the Sutlej forms part of the Pakistan border near Ferozpur); the Ferozeshah Battle site (Battle of Ferozeshah — December 1845; during the First Anglo-Sikh War; one of the bloodiest battles of the Sikh Wars); the Ganda Singh Wala border area), and a city of Saragarhi 21 Sikh Regiment martyrs memorial and Ferozeshah Anglo-Sikh War — is Punjab's most Saragarhi-21-soldiers-Parliament-ovation and Ferozeshah-Anglo-Sikh-War Ferozpur. From birthday parties in Ferozpur to celebration cakes — RedHeart covers all areas: Ferozpur city, Ferozpur Cantonment, Guru Har Sahai, Zira, Mamdot, Fazilka adjacent.</p>
<p>Our Ferozpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ferozpur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ferozpur city, Ferozpur Cantonment, Guru Har Sahai, Zira, Mamdot</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ferozpur?", answer: "Yes, same-day cake delivery is available across all Ferozpur areas — Ferozpur city, Ferozpur Cantonment, Guru Har Sahai, Zira, and Mamdot — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ferozpur?", answer: "Yes, all flavours are available in eggless variants for Ferozpur delivery." },
      { question: "Do you deliver midnight cakes in Ferozpur?", answer: "Yes, midnight birthday cake delivery is available across Ferozpur city and Cantonment zones." }
    ]
  },

  "muktsar": {
    cityName: "Muktsar",
    metaTitle: "Cake Delivery in Muktsar | Sri Muktsar Sahib Punjab Sikh Battle Khidrana Guru Gobind Singh | RedHeart",
    metaDescription: "Order cakes online in Muktsar (Sri Muktsar Sahib). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Muktsar (Sri Muktsar Sahib)",
    metaKeyword: "cake delivery muktsar sri muktsar sahib, order cake online muktsar, birthday cake muktsar, custom cake muktsar, same day cake delivery Muktsar Sri Muktsar Sahib Punjab Sikh Battle Khidrana Guru Gobind Singh 40 Muktas Mela Maghi",
    footerContent: `
<h2>Cake Delivery in Muktsar (Sri Muktsar Sahib) — Battle of Muktsar (Khidrana), 40 Muktas, and Maghi Mela</h2>
<p>Muktsar — the district headquarters of Sri Muktsar Sahib district in Punjab (southwestern Punjab; Rajasthan border; canal-fed fertile plains), a city of immense Sikh religious significance named after a sacred battle (the Battle of Muktsar / Khidrana (the Battle of Khidrana (December 29, 1705 CE) — one of the last battles fought by Guru Gobind Singh; 40 Sikh soldiers who had earlier signed a bedava (disclaimer document, renouncing Guru Gobind Singh) due to hardships in the Siege of Anandpur returned to fight alongside the Guru at Khidrana; they fought fiercely and all 40 were martyred; Guru Gobind Singh tore up the bedava and called them muktas (liberated souls), giving the place the name Muktsar (Pool of Liberation); the Gurdwara Shaheed Ganj Sahib marks the battle site; the Maghi Mela — the annual fair at Muktsar on Makar Sankranti (January 14) — is one of Punjab's largest fairs; lakhs of Sikhs visit Muktsar on Maghi to commemorate the 40 Muktas; the Harike Barrage and wetland is in the broader region); the Mal Akhara (traditional Punjabi wrestling wrestling pits / Akhara tradition in Muktsar)); the district's agriculture (wheat and cotton); the Maghi festival origin), and a city of 40 Muktas Battle of Khidrana liberation souls and Maghi Mela lakhs pilgrims — is Punjab's most Muktsar-40-Muktas-bedava-torn-liberation-souls and Maghi-Mela-lakhs-pilgrims Sri Muktsar Sahib. From birthday parties in Muktsar to celebration cakes — RedHeart covers all areas: Muktsar city (Sri Muktsar Sahib), Malout, Gidderbaha, Bareta, Kotbhai, Bariwala.</p>
<p>Our Muktsar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Muktsar (Sri Muktsar Sahib), Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Muktsar city, Malout, Gidderbaha, Bareta, Kotbhai, Bariwala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Muktsar (Sri Muktsar Sahib)?", answer: "Yes, same-day cake delivery is available across all Muktsar areas — Muktsar city, Malout, Gidderbaha, Bareta, and Kotbhai — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Muktsar?", answer: "Yes, all flavours are available in eggless variants for Muktsar delivery." },
      { question: "Do you deliver midnight cakes in Sri Muktsar Sahib?", answer: "Yes, midnight birthday cake delivery is available across Muktsar city and Malout zones." }
    ]
  },

  "sangrur": {
    cityName: "Sangrur",
    metaTitle: "Cake Delivery in Sangrur | Punjab Malwa Phulkian Dynasty Lehragaga Moonak Budhlada | RedHeart",
    metaDescription: "Order cakes online in Sangrur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sangrur",
    metaKeyword: "cake delivery sangrur, order cake online sangrur, birthday cake sangrur, custom cake sangrur, same day cake delivery Sangrur Punjab Malwa Phulkian dynasty Lehragaga Moonak Budhlada wheat cotton agriculture",
    footerContent: `
<h2>Cake Delivery in Sangrur — Phulkian Dynasty Heritage, Malwa Heartland, and Punjab's Agricultural Core</h2>
<p>Sangrur — the district headquarters of Sangrur district in Punjab (central Punjab; Malwa region; agricultural heartland), a city rooted in the Phulkian royal dynasty tradition (the Phulkian Dynasty (the Phulkian dynasty was one of the major Sikh misl (confederacy) dynasties of the Sikh period; they ruled the Phulkian state which included territories in the present Sangrur-Malwa region; the Phulkian dynasty later evolved into the princely states of Patiala, Nabha, and Jind — the three main Phulkian successor states; the Sangrur-Malwa region was part of the Nabha and Jind princely states; the Sangrur region has several heritage structures from the princely era); the Sangrur's industrial and agricultural role (Sangrur district is a major producer of wheat, paddy, and cotton in Punjab; the district is the agricultural heartland of Malwa Punjab; the Sangrur industries include rice shellers, cotton gins, and agro-processing; the Moonak textile/hosiery industry (Moonak in Sangrur is an important centre for hosiery and knitwear — an important part of Punjab's knitwear cluster including Ludhiana)); the Lehragaga area (Lehragaga — a significant town in Sangrur district); the Longowal — famous for the Rajiv-Longowal Accord (July 1985) signed between PM Rajiv Gandhi and Harchand Singh Longowal at Longowal village (Sangrur district), and a city of Phulkian dynasty Malwa heritage and Longowal Accord historic significance — is Punjab's most Phulkian-dynasty-Malwa-heritage and Moonak-knitwear-industry Sangrur. From birthday parties in Sangrur to celebration cakes — RedHeart covers all areas: Sangrur city, Sunam, Lehragaga, Moonak, Longowal, Dhuri, Malerkotla adjacent.</p>
<p>Our Sangrur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangrur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangrur city, Sunam, Lehragaga, Moonak, Longowal, Dhuri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sangrur?", answer: "Yes, same-day cake delivery is available across all Sangrur areas — Sangrur city, Sunam, Lehragaga, Moonak, Longowal, and Dhuri — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sangrur?", answer: "Yes, all flavours are available in eggless variants for Sangrur delivery." },
      { question: "Do you deliver midnight cakes in Sangrur?", answer: "Yes, midnight birthday cake delivery is available across Sangrur city and Sunam zones." }
    ]
  },

  "ariyalur": {
    cityName: "Ariyalur",
    metaTitle: "Cake Delivery in Ariyalur | Tamil Nadu Limestone Cement Gangaikondacholapuram Chola | RedHeart",
    metaDescription: "Order cakes online in Ariyalur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ariyalur",
    metaKeyword: "cake delivery ariyalur, order cake online ariyalur, birthday cake ariyalur, custom cake ariyalur, same day cake delivery Ariyalur Tamil Nadu limestone cement Gangaikondacholapuram Chola Rajendra UNESCO Kollidam",
    footerContent: `
<h2>Cake Delivery in Ariyalur — Gangaikondacholapuram (UNESCO Chola), Limestone Cement Industry, and Kollidam River</h2>
<p>Ariyalur — the district headquarters of Ariyalur district in Tamil Nadu (central Tamil Nadu; Kollidam River basin; limestone-rich zone), a district housing one of UNESCO's greatest Chola monuments (the Gangaikondacholapuram (Gangaikondacholapuram — in Ariyalur district; the name means "the city of the Chola who conquered the Ganges"; the Brihadeeswarar Temple at Gangaikondacholapuram was built by Rajendra Chola I (c. 1025 CE) to commemorate his military campaigns that reached the banks of the Ganges; the temple is a UNESCO World Heritage Site (inscribed as part of the "Great Living Chola Temples" group in 1987); the vimana (tower) of Gangaikondacholapuram rises 55 meters; the temple is less famous but architecturally comparable to the more visited Brihadeeswarar at Thanjavur; the sculptures and bronzes at Gangaikondacholapuram are masterpieces of Chola art; the site is often called the "forgotten Chola capital"); the limestone and cement industry (Ariyalur district sits on one of Tamil Nadu's richest limestone deposits; several major cement plants operate in Ariyalur including Dalmia Bharat Cement, India Cements, and Chettinad Cement; Ariyalur is a significant cement-producing zone in South India); the Kollidam River (the Kollidam — a distributary of the Kaveri — flows through Ariyalur district)), and a city of Gangaikondacholapuram UNESCO Chola Rajendra-I 1025 CE and limestone cement industry — is Tamil Nadu's most Gangaikondacholapuram-UNESCO-Rajendra-Chola and limestone-cement-Dalmia-India-Chettinad Ariyalur. From birthday parties in Ariyalur to celebration cakes — RedHeart covers all areas: Ariyalur city, Gangaikondacholapuram, Jayankondam, Andimadam, Sendurai, T. Palur.</p>
<p>Our Ariyalur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ariyalur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ariyalur city, Gangaikondacholapuram, Jayankondam, Andimadam, Sendurai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ariyalur?", answer: "Yes, same-day cake delivery is available across all Ariyalur areas — Ariyalur city, Gangaikondacholapuram, Jayankondam, Andimadam, and Sendurai — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ariyalur?", answer: "Yes, all flavours are available in eggless variants for Ariyalur delivery." },
      { question: "Do you deliver midnight cakes in Ariyalur?", answer: "Yes, midnight birthday cake delivery is available across Ariyalur city zones." }
    ]
  },

  "perambalur": {
    cityName: "Perambalur",
    metaTitle: "Cake Delivery in Perambalur | Tamil Nadu Limestone Vayalur Murugan Temple Kollidam | RedHeart",
    metaDescription: "Order cakes online in Perambalur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Perambalur",
    metaKeyword: "cake delivery perambalur, order cake online perambalur, birthday cake perambalur, custom cake perambalur, same day cake delivery Perambalur Tamil Nadu limestone Vayalur Murugan Temple Kollidam Kaveri agricultural",
    footerContent: `
<h2>Cake Delivery in Perambalur — Vayalur Murugan Temple, Limestone Belt, and Kaveri-Kollidam Fertile Plains</h2>
<p>Perambalur — the district headquarters of Perambalur district in Tamil Nadu (central Tamil Nadu; between Trichy and Ariyalur; Kollidam River basin), one of Tamil Nadu's smaller districts with an important Murugan pilgrimage site (the Vayalur Murugan Temple (Vayalur — near Perambalur; the Vayalur Murugan Temple (Sri Murugan / Subramanya Swami) is a significant pilgrimage temple; it is one of the "Arupadaiveedu" — though the main six Murugan abodes are at specific other locations; the Vayalur temple attracts thousands of pilgrims especially during Thai Poosam and Panguni Uthiram; the Vayalur temple has a distinctive architecture; the area around Vayalur is known as "Kozhi Nadu"); the limestone mining (Perambalur district, like its neighbour Ariyalur, has limestone deposits and quarrying is an economic activity); the Kollidam River (the Kollidam — a branch of the Kaveri — flows through the region; the Kollidam distributary provides irrigation to Perambalur's paddy fields); the agricultural character (Perambalur district is mainly agricultural — paddy, groundnut, and pulses are main crops; the district is one of Tamil Nadu's less industrialized); the Perambalur SIPCOT industrial estate (a State Industries Promotion Corporation of Tamil Nadu industrial zone in Perambalur)), and a city of Vayalur Murugan pilgrimage and Kollidam Kaveri-fed paddy Perambalur — is Tamil Nadu's most Vayalur-Murugan-Thai-Poosam-pilgrimage and Kollidam-paddy-agricultural Perambalur. From birthday parties in Perambalur to celebration cakes — RedHeart covers all areas: Perambalur city, Vayalur, Alathur, Kunnam, Veppanthattai, Eraiyur.</p>
<p>Our Perambalur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Perambalur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Perambalur city, Vayalur, Alathur, Kunnam, Veppanthattai, Eraiyur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Perambalur?", answer: "Yes, same-day cake delivery is available across all Perambalur areas — Perambalur city, Vayalur, Alathur, Kunnam, and Veppanthattai — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Perambalur?", answer: "Yes, all flavours are available in eggless variants for Perambalur delivery." },
      { question: "Do you deliver midnight cakes in Perambalur?", answer: "Yes, midnight birthday cake delivery is available across Perambalur city zones." }
    ]
  },

  "pudukkottai": {
    cityName: "Pudukkottai",
    metaTitle: "Cake Delivery in Pudukkottai | Tamil Nadu Sittannavasal Jain Cave Last Princely State | RedHeart",
    metaDescription: "Order cakes online in Pudukkottai. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pudukkottai",
    metaKeyword: "cake delivery pudukkottai, order cake online pudukkottai, birthday cake pudukkottai, custom cake pudukkottai, same day cake delivery Pudukkottai Tamil Nadu Sittannavasal Jain cave paintings last princely state 1948 Velayudha Thevar Waterfalls",
    footerContent: `
<h2>Cake Delivery in Pudukkottai — Sittannavasal Jain Cave Frescoes (7th CE), Last Princely State Accession, and Ponnamaravathi</h2>
<p>Pudukkottai — the district headquarters of Pudukkottai district in Tamil Nadu (central Tamil Nadu; between Trichy and Ramnad; Vellar River basin), a district known for India's best-preserved Jain cave frescoes and a late independence story (the Sittannavasal Jain Cave (Sittannavasal — in Pudukkottai district; the Sittannavasal cave complex contains some of India's finest and rarest Jain cave paintings; the Arivar Koil (Jain rock-cut cave temple) at Sittannavasal dates to the 7th-9th century CE; the cave has exquisite frescoes — paintings of monks, lotus ponds, animals, and figures — considered equal in quality to Ajanta; the paintings use natural pigments; the Sittannavasal inscriptions; protected monument of Archaeological Survey of India; a UNESCO Tentative List site); the Pudukkottai Princely State — Last Accession (Pudukkottai was the last princely state of Tamil Nadu to accede to independent India; the Raja of Pudukkottai signed the Instrument of Accession in 1948 — some accounts say Pudukkottai was one of the last holdouts; the Pudukkottai Palace is a heritage structure in the town); the Velayudha Thevar (the warrior chieftain Velayudha Thevar of the Maravar community who resisted the British in the 17th century; a significant folk hero of Tamil Nadu); the Ponnamaravathi and Karambakudi areas; the granite quarrying), and a city of Sittannavasal Jain cave 7th-CE Ajanta-quality frescoes and last-princely-state accession — is Tamil Nadu's most Sittannavasal-Jain-frescoes-7th-CE-Ajanta and Pudukkottai-last-princely-state-1948 Pudukkottai. From birthday parties in Pudukkottai to celebration cakes — RedHeart covers all areas: Pudukkottai city, Alangudi, Karambakudi, Ponnamaravathi, Thirumayam, Aranthangi.</p>
<p>Our Pudukkottai cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pudukkottai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pudukkottai city, Alangudi, Karambakudi, Ponnamaravathi, Thirumayam, Aranthangi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pudukkottai?", answer: "Yes, same-day cake delivery is available across all Pudukkottai areas — Pudukkottai city, Alangudi, Karambakudi, Ponnamaravathi, Thirumayam, and Aranthangi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Pudukkottai?", answer: "Yes, all flavours are available in eggless variants for Pudukkottai delivery." },
      { question: "Do you deliver midnight cakes in Pudukkottai?", answer: "Yes, midnight birthday cake delivery is available across Pudukkottai city zones." }
    ]
  },

  "sheohar": {
    cityName: "Sheohar",
    metaTitle: "Cake Delivery in Sheohar | Bihar's Smallest District Bagmati River Gandak Plains | RedHeart",
    metaDescription: "Order cakes online in Sheohar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sheohar",
    metaKeyword: "cake delivery sheohar, order cake online sheohar, birthday cake sheohar, custom cake sheohar, same day cake delivery Sheohar Bihar smallest district Bagmati Gandak alluvial flood plains Nepal border",
    footerContent: `
<h2>Cake Delivery in Sheohar — Bihar's Smallest District, Bagmati River Plains, and Nepal Border Agricultural Heartland</h2>
<p>Sheohar — the district headquarters of Sheohar district in Bihar (northern Bihar; Nepal border; Bagmati-Gandak river system), Bihar's smallest district by area — a compact but fertile floodplain district (Sheohar district — one of Bihar's least populous and smallest-area districts; carved from Sitamarhi district in 1994; situated in the Terai-adjacent North Bihar plains near the Nepal border; the district is in the alluvial plains of the Bagmati and Gandak rivers; these rivers flood regularly providing fertile silt but also causing periodic flood damage; the area depends primarily on agriculture — paddy, wheat, and maize; the Sheohar area historically saw various population movements from the Nepal hills into the Terai; the Bagmati River (the Bagmati — sacred to Nepalese Hindus as the river on which Pashupatinath temple sits in Kathmandu — flows from Nepal into Bihar through the Madhubani-Sitamarhi-Sheohar zone before joining the Kamla and eventually the Kosi river system); the Sheohar's significance as a market town for a dense rural agricultural area; the Naulahi Ghat area; despite being small in area, Sheohar has a significant population density), and a city of Bihar's smallest district Bagmati River Nepal-border alluvial plains — is Bihar's most Sheohar-smallest-district-1994-carved and Bagmati-Nepal-border-floodplain Sheohar. From birthday parties in Sheohar to celebration cakes — RedHeart covers all areas: Sheohar town, Tariani, Piprahi, Purnahia, Sheohar block.</p>
<p>Our Sheohar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheohar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheohar town, Tariani, Piprahi, Purnahia, Sheohar block</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sheohar?", answer: "Yes, same-day cake delivery is available across all Sheohar areas — Sheohar town, Tariani, Piprahi, and Purnahia — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sheohar?", answer: "Yes, all flavours are available in eggless variants for Sheohar delivery." },
      { question: "Do you deliver midnight cakes in Sheohar?", answer: "Yes, midnight birthday cake delivery is available across Sheohar town zones." }
    ]
  },

  "kawardha": {
    cityName: "Kawardha",
    metaTitle: "Cake Delivery in Kawardha | Kabirdham CG Bhoremdeo Temple Maikal Hills Kabeerdham | RedHeart",
    metaDescription: "Order cakes online in Kawardha (Kabirdham). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kawardha (Kabirdham)",
    metaKeyword: "cake delivery kawardha kabirdham, order cake online kawardha, birthday cake kawardha, custom cake kawardha, same day cake delivery Kawardha Kabirdham Chhattisgarh Bhoremdeo Temple Khajuraho Maikal Hills Gondwana",
    footerContent: `
<h2>Cake Delivery in Kawardha (Kabirdham) — Bhoremdeo Temple ("Chhattisgarh's Khajuraho"), Maikal Hills, and Gondwana Tribal Heritage</h2>
<p>Kawardha — the district headquarters of Kabirdham district in Chhattisgarh (northwestern Chhattisgarh; Maikal Hills; MP border), a district with Chhattisgarh's most celebrated lesser-known temple complex (the Bhoremdeo Temple (Bhoremdeo — in Kabirdham district; the Bhoremdeo Temple complex in the Maikal hills is often called "Chhattisgarh's Khajuraho" due to its exquisite erotic and decorative stone carvings; the Bhoremdeo temple is dedicated to Shiva; it was built around the 7th-11th century CE during the Nagvanshi period; the temple has beautiful sculpted panels including apsaras, gods, mithunas (erotic couples), and hunting scenes; the temple complex also includes the Chherta Mahal and Madua Mahal; the Bhoremdeo Fair is held annually; the ASI (Archaeological Survey of India) protects the site; the name "Bhoremdeo" is believed to be a name for Lord Shiva used by the Gond tribe); the Maikal Hills (the Maikal Range — the northern extension of the Satpura mountains; forms the Chhattisgarh-MP-Jharkhand watershed; the Bhoremdeo temple is set in a forested valley of the Maikal Hills; the Maikal range is the source of the Narmada, Son, and other rivers); the Baiga PVTG community (the Baiga — a Particularly Vulnerable Tribal Group — is present in this region; Baiga tattoo traditions); the Kawardha Palace (the Kawardha Palace — a heritage palace-hotel in Kawardha town)), and a city of Bhoremdeo Chhattisgarh's Khajuraho 7th-CE temple and Maikal Hills tribal Baiga heritage — is Chhattisgarh's most Bhoremdeo-Khajuraho-erotic-sculpture-Nagvanshi and Maikal-Hills-Baiga-PVTG Kawardha. From birthday parties in Kawardha to celebration cakes — RedHeart covers all areas: Kawardha city, Bodla, Pandariya, Sahaspur-Lohara, Rampur, Kunda.</p>
<p>Our Kawardha cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kawardha (Kabirdham), Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kawardha city, Bodla, Pandariya, Sahaspur-Lohara, Rampur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kawardha (Kabirdham)?", answer: "Yes, same-day cake delivery is available across all Kawardha areas — Kawardha city, Bodla, Pandariya, Sahaspur-Lohara, and Rampur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kawardha?", answer: "Yes, all flavours are available in eggless variants for Kawardha delivery." },
      { question: "Do you deliver midnight cakes in Kawardha?", answer: "Yes, midnight birthday cake delivery is available across Kawardha city zones." }
    ]
  },

  "gariaband": {
    cityName: "Gariaband",
    metaTitle: "Cake Delivery in Gariaband | Chhattisgarh Diamond Mine Udanti Sitanadi Tiger Reserve | RedHeart",
    metaDescription: "Order cakes online in Gariaband. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gariaband",
    metaKeyword: "cake delivery gariaband, order cake online gariaband, birthday cake gariaband, custom cake gariaband, same day cake delivery Gariaband Chhattisgarh diamond mine Panna Bahubali waterfall Udanti Sitanadi Tiger Reserve",
    footerContent: `
<h2>Cake Delivery in Gariaband — India's Diamond Mines, Udanti-Sitanadi Tiger Reserve, and Chhattisgarh Waterfalls</h2>
<p>Gariaband — the district headquarters of Gariaband district in Chhattisgarh (eastern Chhattisgarh; Mahanadi River; Odisha border), a district with a remarkable natural claim — one of India's diamond-bearing zones (the Diamond-Bearing Area (Gariaband district is one of the few areas in India known to have diamond deposits; the Behradih area in Gariaband district has been identified as having diamond-bearing kimberlite pipes; the National Mineral Development Corporation (NMDC) and the Chhattisgarh government have surveyed the area for diamond mining potential; the presence of diamonds in Gariaband is geologically significant; Panna in MP is India's primary diamond mine — Gariaband represents an emerging potential); the Udanti-Sitanadi Tiger Reserve (Udanti-Sitanadi Tiger Reserve — in Gariaband and adjacent Raipur district; established as a Tiger Reserve; the Udanti and Sitanadi rivers flow through the reserve; the reserve is habitat for tigers, elephants, wild dogs, and the endangered Wild Buffalo (Bubalus arnee/Wild Buffalo) — the Udanti-Sitanadi Tiger Reserve is known for the wild buffalo / Arni; the reserve adjoins Odisha's Satkosia reserve); the Ghatarani Waterfall (in Gariaband district; a scenic natural waterfall; Jatmai-Ghatarani as a tourist circuit); the Jatmai Mata Temple (popular pilgrimage near Gariaband)), and a city of diamond-mine potential and Wild Buffalo Udanti-Sitanadi Tiger Reserve — is Chhattisgarh's most Gariaband-diamond-kimberlite-NMDC and Udanti-Sitanadi-Wild-Buffalo Gariaband. From birthday parties in Gariaband to celebration cakes — RedHeart covers all areas: Gariaband city, Deobhog, Mainpur, Chhura, Fingeshwar, Rajim adjacent.</p>
<p>Our Gariaband cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gariaband, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gariaband city, Deobhog, Mainpur, Chhura, Fingeshwar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gariaband?", answer: "Yes, same-day cake delivery is available across all Gariaband areas — Gariaband city, Deobhog, Mainpur, Chhura, and Fingeshwar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gariaband?", answer: "Yes, all flavours are available in eggless variants for Gariaband delivery." },
      { question: "Do you deliver midnight cakes in Gariaband?", answer: "Yes, midnight birthday cake delivery is available across Gariaband city zones." }
    ]
  },

  "mahasamund": {
    cityName: "Mahasamund",
    metaTitle: "Cake Delivery in Mahasamund | CG Sirpur Archaeological Mahanadi Odisha Border | RedHeart",
    metaDescription: "Order cakes online in Mahasamund. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mahasamund",
    metaKeyword: "cake delivery mahasamund, order cake online mahasamund, birthday cake mahasamund, custom cake mahasamund, same day cake delivery Mahasamund Chhattisgarh Sirpur 6th CE Buddhist Mahanadi Odisha border Sarnath connection",
    footerContent: `
<h2>Cake Delivery in Mahasamund — Sirpur (Ancient Buddhist Capital 6th CE), Mahanadi River, and Chhattisgarh-Odisha Gateway</h2>
<p>Mahasamund — the district headquarters of Mahasamund district in Chhattisgarh (eastern Chhattisgarh; Mahanadi River; Odisha border), a district containing one of Chhattisgarh's most significant ancient sites (the Sirpur Archaeological Site (Sirpur — in Mahasamund district; on the Mahanadi River; the ancient city of Sirpur / Shripur (Sripura) was a major Buddhist and Hindu center of 5th-9th century CE; Sirpur was a significant city during the Somavanshi (Panduvamshi) dynasty; the Lakshmana Temple at Sirpur (6th century CE) — a brick temple dedicated to Vishnu; considered one of India's finest brick temples; the Anand Prabha Kuti Vihara — a Buddhist monastery at Sirpur; the Buddhapada (Buddha's footprint) temple; Hiuen Tsang (Xuanzang) — the 7th century CE Chinese Buddhist pilgrim — visited Sirpur during his India journey and described it as a flourishing Buddhist city with multiple monasteries; significant gold and silver artifacts have been excavated; the Sirpur Mahotsav festival); the Mahanadi River (the Mahanadi flows through Mahasamund and into Odisha; one of peninsular India's major rivers; eventually reaches the Bay of Bengal through the Odisha delta); the Odisha border (Mahasamund borders Odisha — Balangir, Bolangir districts; the area is a Chhattisgarhi-Odia cultural confluence zone)), and a city of Sirpur 6th-CE brick temple Hiuen-Tsang visit and Mahanadi Odisha gateway — is Chhattisgarh's most Sirpur-6th-CE-Lakshmana-brick-temple-Hiuen-Tsang and Mahanadi-Odisha-border Mahasamund. From birthday parties in Mahasamund to celebration cakes — RedHeart covers all areas: Mahasamund city, Sirpur, Bagbahra, Saraipali, Pithaura, Basna.</p>
<p>Our Mahasamund cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahasamund, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahasamund city, Sirpur, Bagbahra, Saraipali, Pithaura, Basna</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mahasamund?", answer: "Yes, same-day cake delivery is available across all Mahasamund areas — Mahasamund city, Sirpur, Bagbahra, Saraipali, Pithaura, and Basna — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mahasamund?", answer: "Yes, all flavours are available in eggless variants for Mahasamund delivery." },
      { question: "Do you deliver midnight cakes in Mahasamund?", answer: "Yes, midnight birthday cake delivery is available across Mahasamund city zones." }
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
