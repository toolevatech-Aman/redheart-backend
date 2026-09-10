// Cakes Batch 65 — 12 cities
// CG: Mungeli, Balod, Bemetara, Narayanpur, Bijapur
// Odisha: Bargarh, Kandhamal, Nayagarh, Bolangir (check — done in 63), Sundargarh
// HP: Sirmaur (Nahan)
// Assam: Bongaigaon, Udalguri

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "mungeli": {
    cityName: "Mungeli",
    metaTitle: "Cake Delivery in Mungeli | CG Achanakmar Tiger Reserve Hasdeo River Lahar | RedHeart",
    metaDescription: "Order cakes online in Mungeli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mungeli",
    metaKeyword: "cake delivery mungeli, order cake online mungeli, birthday cake mungeli, custom cake mungeli, same day cake delivery Mungeli Chhattisgarh Achanakmar Tiger Reserve Hasdeo Lahar agricultural tribal",
    footerContent: `
<h2>Cake Delivery in Mungeli — Achanakmar Tiger Reserve, Hasdeo River, and Chhattisgarh's Quiet Agricultural Heart</h2>
<p>Mungeli — the district headquarters of Mungeli district in Chhattisgarh (central-north Chhattisgarh; Hasdeo River; carved from Bilaspur district in 2012), a district adjacent to one of Chhattisgarh's finest tiger habitats (the Achanakmar Tiger Reserve (Achanakmar Tiger Reserve — partly in Mungeli district, partly in Bilaspur district; established 1975 as wildlife sanctuary; declared Tiger Reserve in 2009; area approximately 914 sq km; the reserve is part of the Kanha-Achanakmar corridor — a critical wildlife corridor connecting Kanha Tiger Reserve in MP to Achanakmar in CG; habitat for tigers, leopards, wild dogs, sloth bears, barasingha / swamp deer, and four-horned antelope; the reserve has a diverse Sal and teak forest ecosystem; the Achanakmar-Amarkantak Biosphere Reserve includes the connected areas); the Hasdeo River (the Hasdeo — a major Mahanadi tributary — flows through Mungeli; the Hasdeo-Bango Dam is upstream in Korea district; the Hasdeo river system is critical for Chhattisgarh's irrigation and power); the Mungeli agricultural zone (Mungeli is a primarily agricultural district — paddy, wheat, pulses; a quieter agricultural heartland of CG), and a city of Achanakmar Tiger Reserve Kanha-corridor and Hasdeo River agricultural heartland — is Chhattisgarh's most Achanakmar-Tiger-Kanha-corridor and Hasdeo-Mungeli-agricultural Mungeli. From birthday parties in Mungeli to celebration cakes — RedHeart covers all areas: Mungeli city, Lormi, Patharia, Seepat adjacent, Achanak area.</p>
<p>Our Mungeli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mungeli, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mungeli city, Lormi, Patharia, Achanakmar area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mungeli?", answer: "Yes, same-day cake delivery is available across Mungeli city, Lormi, and Patharia for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mungeli?", answer: "Yes, all flavours are available in eggless variants for Mungeli delivery." },
      { question: "Do you deliver midnight cakes in Mungeli?", answer: "Yes, midnight birthday cake delivery is available across Mungeli city zones." }
    ]
  },

  "balod": {
    cityName: "Balod",
    metaTitle: "Cake Delivery in Balod | CG Gondli Dam Tandula Reservoir Dongargarh Adjacent | RedHeart",
    metaDescription: "Order cakes online in Balod. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Balod",
    metaKeyword: "cake delivery balod, order cake online balod, birthday cake balod, custom cake balod, same day cake delivery Balod Chhattisgarh Tandula Reservoir Gondli Dam Sheonath River Gunderdehi agricultural",
    footerContent: `
<h2>Cake Delivery in Balod — Tandula Reservoir, Sheonath River, and Chhattisgarh's Agricultural Heartland</h2>
<p>Balod — the district headquarters of Balod district in Chhattisgarh (southern central CG; carved from Durg district in 2012; Sheonath River), a quiet agricultural district notable for its water bodies and rural character (the Tandula Reservoir / Tandula Dam (the Tandula Reservoir — on the Tandula River (a tributary of the Sheonath) — is a major irrigation reservoir in the Balod-Durg region; the reservoir supplies water to irrigation canals and is a water source for the Durg-Bhilai industrial belt; the Tandula reservoir is a scenic destination; it was one of the earliest dams in the pre-independence Central Provinces area); the Sheonath River (the Sheonath — a major Mahanadi tributary — flows through Balod district; the Sheonath provides water for irrigation and has cultural significance in rural CG); the Gunderdehi area (Gunderdehi is a market town in Balod district); the Balod agricultural zone (Balod is primarily agricultural — paddy is the main crop; the Balod area is a "paddy bowl" of Chhattisgarh), and a city of Tandula Reservoir Sheonath River and paddy-bowl Chhattisgarh — is Chhattisgarh's most Tandula-Reservoir-Sheonath and paddy-agricultural Balod. From birthday parties in Balod to celebration cakes — RedHeart covers all areas: Balod city, Gunderdehi, Gurur, Dondi Lohara, Dongargaon.</p>
<p>Our Balod cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balod, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balod city, Gunderdehi, Gurur, Dondi Lohara, Dongargaon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Balod?", answer: "Yes, same-day cake delivery is available across Balod city, Gunderdehi, Gurur, and Dondi Lohara for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Balod?", answer: "Yes, all flavours are available in eggless variants for Balod delivery." },
      { question: "Do you deliver midnight cakes in Balod?", answer: "Yes, midnight birthday cake delivery is available across Balod city zones." }
    ]
  },

  "bemetara": {
    cityName: "Bemetara",
    metaTitle: "Cake Delivery in Bemetara | CG Sheonath River Durg Adjacent Sugar Industry | RedHeart",
    metaDescription: "Order cakes online in Bemetara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bemetara",
    metaKeyword: "cake delivery bemetara, order cake online bemetara, birthday cake bemetara, custom cake bemetara, same day cake delivery Bemetara Chhattisgarh Sheonath River Durg adjacent sugar industry paddy agricultural",
    footerContent: `
<h2>Cake Delivery in Bemetara — Sheonath River, Durg-Adjacent Fertile Plains, and Chhattisgarh's Sugar Country</h2>
<p>Bemetara — the district headquarters of Bemetara district in Chhattisgarh (northern Durg region; carved from Durg district in 2012; Sheonath River plains), a district in the fertile agricultural belt north of Durg (the Sheonath River (the Sheonath — a major Mahanadi tributary — flows through Bemetara; the Sheonath plains are highly fertile black-cotton and red-laterite soils; good for paddy and sugarcane); the sugar industry (Bemetara district has sugarcane cultivation and a sugar mill; the sugar industry is part of the local economy); the proximity to Durg-Bhilai (Bemetara borders the Durg district which contains Bhilai Steel Plant — India's first and largest integrated steel plant; the influence of Bhilai's economy extends into Bemetara's market zones); the Nawagarh and Berla area (key market towns in Bemetara district); the Saja, Thakurtola areas; the Bemetara agricultural economy (paddy, wheat, chickpea / chana, sugarcane)), and a city of Sheonath River plains and Durg-Bhilai adjacent sugar-paddy agricultural Bemetara — is Chhattisgarh's most Sheonath-fertile-plains and Durg-Bhilai-adjacent-sugar-industry Bemetara. From birthday parties in Bemetara to celebration cakes — RedHeart covers all areas: Bemetara city, Nawagarh, Berla, Saja, Thakurtola, Nandini.</p>
<p>Our Bemetara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bemetara, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bemetara city, Nawagarh, Berla, Saja, Thakurtola, Nandini</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bemetara?", answer: "Yes, same-day cake delivery is available across Bemetara city, Nawagarh, Berla, and Saja for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bemetara?", answer: "Yes, all flavours are available in eggless variants for Bemetara delivery." },
      { question: "Do you deliver midnight cakes in Bemetara?", answer: "Yes, midnight birthday cake delivery is available across Bemetara city zones." }
    ]
  },

  "narayanpur": {
    cityName: "Narayanpur",
    metaTitle: "Cake Delivery in Narayanpur | CG Abujhmarh Bastar Tribal Naxal Zone Abujhmar Hills | RedHeart",
    metaDescription: "Order cakes online in Narayanpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Narayanpur",
    metaKeyword: "cake delivery narayanpur, order cake online narayanpur, birthday cake narayanpur, custom cake narayanpur, same day cake delivery Narayanpur Chhattisgarh Abujhmarh Bastar tribal Abujhmar Hills Indravati River Gond",
    footerContent: `
<h2>Cake Delivery in Narayanpur — Abujhmarh ("Unknown Hills"), Indravati River, and Bastar's Gond Tribal Heartland</h2>
<p>Narayanpur — the district headquarters of Narayanpur district in Chhattisgarh (southern Bastar division; Abujhmar Hills; Indravati River), a remote district containing India's most isolated tribal region (the Abujhmarh (Abujhmar) (Abujhmarh — literally "Unknown Hills" in the local Gondi dialect; a vast, densely forested highland covering approximately 4,000 sq km in Narayanpur district; one of the most remote and least-administered areas in India; the Abujhmarh was historically almost entirely cut off from the outside world — British administrators rarely penetrated the area; the Gond and Maria tribes of Abujhmarh have a distinct lifestyle, customs, and governance (the "ghotul" — mixed dormitory youth institution unique to the Maria Gond); the Abujhmarh was declared a restricted area and census operations here were conducted with great difficulty; the hill range is a watershed between the Indravati and Mahanadi systems); the Indravati River (the Indravati — a major Godavari tributary — forms the Chhattisgarh-Odisha-Telangana boundary; the Indravati flows through the southern edge of Narayanpur; the Indravati is associated with the Chitrakot Waterfall in Bastar); the Maria Gond tribal culture (the Hill Maria / Bison Horn Maria Gond — a sub-tribe of Gonds in Narayanpur-Bijapur area famous for their Bison Horn headdresses in their Ghotul dance tradition)), and a city of Abujhmarh Unknown Hills Maria Gond Ghotul and Indravati River remote tribal Narayanpur — is Chhattisgarh's most Abujhmarh-Unknown-Hills-Gond-Maria-Ghotul and Indravati-River Narayanpur. From birthday parties in Narayanpur to celebration cakes — RedHeart covers all areas: Narayanpur city, Orchha (CG), Koleng, Kutru, Raipur road areas.</p>
<p>Our Narayanpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narayanpur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narayanpur city, Orchha (CG), Koleng, Kutru</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Narayanpur?", answer: "Yes, same-day cake delivery is available across Narayanpur city and surrounding areas for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Narayanpur?", answer: "Yes, all flavours are available in eggless variants for Narayanpur delivery." },
      { question: "Do you deliver midnight cakes in Narayanpur?", answer: "Yes, midnight birthday cake delivery is available across Narayanpur city zones." }
    ]
  },

  "bijapur-cg": {
    cityName: "Bijapur",
    metaTitle: "Cake Delivery in Bijapur CG | Indravati Tiger Reserve Bison Horn Maria Gond Bastar | RedHeart",
    metaDescription: "Order cakes online in Bijapur, Chhattisgarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bijapur (Chhattisgarh)",
    metaKeyword: "cake delivery bijapur chhattisgarh, order cake online bijapur cg, birthday cake bijapur bastar, custom cake bijapur, same day cake delivery Bijapur CG Indravati Tiger Reserve Bison Horn Maria Gond Usoor Bhairamgarh",
    footerContent: `
<h2>Cake Delivery in Bijapur (CG) — Indravati Tiger Reserve, Bison Horn Maria Gond Tribe, and Southern Bastar Wilderness</h2>
<p>Bijapur — the district headquarters of Bijapur district in Chhattisgarh (southernmost Chhattisgarh; Bastar division; Telangana-Maharashtra border), the most remote district of Chhattisgarh and home to the Indravati Tiger Reserve (the Indravati Tiger Reserve (Indravati Tiger Reserve — established 1981 as wildlife sanctuary; declared Tiger Reserve in 1982; area approximately 2,799 sq km (core + buffer); one of India's Project Tiger reserves; situated in the Bijapur district and named for the Indravati River which forms its northern boundary; the reserve is habitat for tigers, wild dogs (dholes), gaur (Indian bison), wild buffalo, leopards, wolves, and rich avifauna; the Indravati-Papikonda corridor; the Papikonda National Park in Telangana is connected); the Bison Horn Maria Gond tribe (the Bison Horn Maria — a sub-tribe of Gonds in the Bijapur-Narayanpur-Dantewada area — are famous for their Bison Horn dance performed during festivals; the male dancers wear elaborate headdresses made of bison horns; the dance is a celebrated folk tradition of Bastar; the ghotul institution — a mixed youth dormitory unique to the Maria Gond — is centered in this region); the Usoor and Bhairamgarh (Bhairamgarh — a key town in Bijapur at the confluence of the Indravati and Morder rivers — the Bhairamgarh area is considered a strategic point); the Bijapur district's position as one of India's most challenged governance areas, and a city of Indravati Tiger Reserve and Bison Horn Maria Gond — is Chhattisgarh's most Indravati-Tiger-Reserve-1982 and Bison-Horn-Maria-Gond Bijapur. From birthday parties in Bijapur to celebration cakes — RedHeart covers all areas: Bijapur city, Bhairamgarh, Usoor, Bhopalpatnam, Gangalur.</p>
<p>Our Bijapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bijapur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bijapur city, Bhairamgarh, Usoor, Bhopalpatnam, Gangalur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bijapur (CG)?", answer: "Yes, same-day cake delivery is available across Bijapur city, Bhairamgarh, Usoor, and Bhopalpatnam for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bijapur CG?", answer: "Yes, all flavours are available in eggless variants for Bijapur delivery." },
      { question: "Do you deliver midnight cakes in Bijapur Chhattisgarh?", answer: "Yes, midnight birthday cake delivery is available across Bijapur city zones." }
    ]
  },

  "bargarh": {
    cityName: "Bargarh",
    metaTitle: "Cake Delivery in Bargarh | Odisha Hirakud Dam Sambalpur Adjacent Dhanu Yatra | RedHeart",
    metaDescription: "Order cakes online in Bargarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bargarh",
    metaKeyword: "cake delivery bargarh, order cake online bargarh, birthday cake bargarh, custom cake bargarh, same day cake delivery Bargarh Odisha Hirakud Dam Mahanadi Dhanu Yatra world's largest open-air theatre Padmavati",
    footerContent: `
<h2>Cake Delivery in Bargarh — Dhanu Yatra (World's Largest Open-Air Theatre), Hirakud Dam Gateway, and Mahanadi Plains</h2>
<p>Bargarh — the district headquarters of Bargarh district in Odisha (western Odisha; Mahanadi River; Hirakud Dam adjacent; Sambalpur district adjacent), a district famous for hosting one of the world's largest open-air theatrical festivals (the Dhanu Yatra (Dhanu Yatra — held annually in Bargarh town (usually January); Dhanu Yatra is recognized as the world's largest open-air theatre festival; the festival enacts the story of Kamsa (the demon king) and Krishna's childhood; the entire city of Bargarh becomes the stage; citizens play roles — the "Kamsa" character rules the "capital" of Mathura (Bargarh), while the surrounding villages represent Gopapura (Gokul); even government officials, police, and citizens interact in-character with the performer playing Kamsa as if he is the real king; the festival lasts around 11 days; it was entered in Guinness World Records as the world's largest open-air theatre; it attracts lakhs of visitors); the Hirakud Dam (Hirakud Dam — on the Mahanadi; in Sambalpur district adjacent to Bargarh; the Hirakud Dam is one of Asia's longest dams — at 25.8 km including earthen embankments; it was India's first major multi-purpose river valley project post-independence, completed in 1957; the Bargarh district lies in the Hirakud command area — dependent on Hirakud irrigation for paddy cultivation); the Sambalpuri weaving (Bargarh district is part of the Sambalpuri saree / Sambalpuri weaving cluster; the GI-protected Sambalpuri textiles including Bomkai and Pasapalli sarees)), and a city of Dhanu Yatra world's largest open-air theatre Guinness and Hirakud-adjacent Mahanadi-command paddy — is Odisha's most Dhanu-Yatra-Guinness-largest-open-air-theatre and Hirakud-command-paddy Bargarh. From birthday parties in Bargarh to celebration cakes — RedHeart covers all areas: Bargarh city, Bhatli, Padmapur, Bijepur, Sohela, Attabira.</p>
<p>Our Bargarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bargarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bargarh city, Bhatli, Padmapur, Bijepur, Sohela, Attabira</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bargarh?", answer: "Yes, same-day cake delivery is available across Bargarh city, Bhatli, Padmapur, Bijepur, Sohela, and Attabira for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bargarh?", answer: "Yes, all flavours are available in eggless variants for Bargarh delivery." },
      { question: "Do you deliver midnight cakes in Bargarh?", answer: "Yes, midnight birthday cake delivery is available across Bargarh city zones." }
    ]
  },

  "phulbani": {
    cityName: "Phulbani",
    metaTitle: "Cake Delivery in Phulbani | Kandhamal Odisha Turmeric GI Kondh Tribe Baliguda | RedHeart",
    metaDescription: "Order cakes online in Phulbani (Kandhamal). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Phulbani (Kandhamal)",
    metaKeyword: "cake delivery phulbani kandhamal, order cake online phulbani, birthday cake phulbani, custom cake phulbani, same day cake delivery Phulbani Kandhamal Odisha Turmeric GI Kondh tribe Baliguda Daringbadi Kashmir Odisha",
    footerContent: `
<h2>Cake Delivery in Phulbani (Kandhamal) — GI Kandhamal Turmeric, Daringbadi ("Kashmir of Odisha"), and Kondh Tribal Culture</h2>
<p>Phulbani — the district headquarters of Kandhamal district in Odisha (central Odisha; Eastern Ghats; Phulbani on the Kandhamal plateau), a district with an exceptional agricultural GI product and a hill resort called "Kashmir of Odisha" (the Kandhamal Haldi / GI Turmeric (Kandhamal Haldi (turmeric) is among Odisha's most celebrated GI (Geographical Indication) products; the turmeric grown in Kandhamal district — by the Kondh tribal community — has exceptionally high curcumin content (6-7% vs the national average of 3-4%); it is an organic, forest-sourced product; the Kandhamal turmeric GI tag was granted; the turmeric is central to the Kondh tribal identity — offered at festivals, used in rituals, and a primary cash crop; the annual Kandhamal Turmeric Festival promotes the product); the Daringbadi Hill Station ("Kashmir of Odisha") (Daringbadi — in Kandhamal district; a hill station at approximately 915 m above sea level; the coolest place in Odisha; it sometimes snows in December-January — a rarity in peninsular India; coffee, pepper, and orange orchards; pine forests; called "Kashmir of Odisha" for its cool temperatures; a popular Odia tourist destination); the Kondh (Khond) tribe (the Kondh / Khond are one of India's largest tribal groups; Kandhamal is their traditional homeland; Kondh traditions include the Meriah sacrifice (historical) and the Dhemsa dance; the Kutia Kondh — a PVTG sub-group in Kandhamal), and a city of GI Kandhamal Turmeric high-curcumin and Daringbadi Kashmir-of-Odisha — is Odisha's most Kandhamal-Haldi-GI-high-curcumin and Daringbadi-Kashmir-of-Odisha-snow Phulbani. From birthday parties in Phulbani to celebration cakes — RedHeart covers all areas: Phulbani city, Daringbadi, Baliguda, G.Udayagiri, Tumudibandha, Raikia.</p>
<p>Our Phulbani cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Phulbani (Kandhamal), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Phulbani city, Daringbadi, Baliguda, G.Udayagiri, Tumudibandha, Raikia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Phulbani (Kandhamal)?", answer: "Yes, same-day cake delivery is available across Phulbani city, Daringbadi, Baliguda, G.Udayagiri, and Tumudibandha for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Phulbani?", answer: "Yes, all flavours are available in eggless variants for Phulbani delivery." },
      { question: "Do you deliver midnight cakes in Phulbani?", answer: "Yes, midnight birthday cake delivery is available across Phulbani city zones." }
    ]
  },

  "nayagarh": {
    cityName: "Nayagarh",
    metaTitle: "Cake Delivery in Nayagarh | Odisha Satkosia Gorge Mahanadi Boudh Adjacent | RedHeart",
    metaDescription: "Order cakes online in Nayagarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nayagarh",
    metaKeyword: "cake delivery nayagarh, order cake online nayagarh, birthday cake nayagarh, custom cake nayagarh, same day cake delivery Nayagarh Odisha Satkosia Gorge Mahanadi Boudh Daspalla Baliguda adjacent forests",
    footerContent: `
<h2>Cake Delivery in Nayagarh — Satkosia Gorge (India's Grand Canyon of Odisha), Mahanadi Valley, and Eastern Ghats Forests</h2>
<p>Nayagarh — the district headquarters of Nayagarh district in Odisha (central Odisha; Eastern Ghats foothills; Mahanadi River), a district bordering the remarkable Satkosia Tiger Reserve (the Satkosia Gorge / Satkosia Tiger Reserve (Satkosia Gorge — on the Mahanadi River; where the Mahanadi exits the Eastern Ghats and enters the plains; the gorge stretches approximately 22 km; surrounded by Satkosia Wildlife Sanctuary and Baisipalli Wildlife Sanctuary; the gorge is habitat for gharial (Gavialis gangeticus) — critically endangered; mugger crocodile; tigers; elephants; the Satkosia Gorge is sometimes called "India's Grand Canyon of Odisha" for its dramatic rocky gorge; the Tikarpada wildlife camp is a popular ecotourism point; Satkosia Tiger Reserve was established in 2007 combining Satkosia and Baisipalli sanctuaries); the Nayagarh forests and Eastern Ghats (Nayagarh district is heavily forested — the Eastern Ghats hills cover much of the district; the forests support timber, mahua, and kendu leaf; the Baisipalli Sanctuary is partly in Nayagarh); the Daspalla area (a market town in Nayagarh; the Daspalla area is known for forested landscapes), and a city of Satkosia Gorge gharial habitat and Eastern Ghats forested Nayagarh — is Odisha's most Satkosia-Gorge-gharial-Mahanadi-Canyon and Eastern-Ghats-forest Nayagarh. From birthday parties in Nayagarh to celebration cakes — RedHeart covers all areas: Nayagarh city, Daspalla, Odagaon, Khandapada, Nuagaon, Ranpur.</p>
<p>Our Nayagarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nayagarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nayagarh city, Daspalla, Odagaon, Khandapada, Nuagaon, Ranpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nayagarh?", answer: "Yes, same-day cake delivery is available across Nayagarh city, Daspalla, Odagaon, Khandapada, and Ranpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nayagarh?", answer: "Yes, all flavours are available in eggless variants for Nayagarh delivery." },
      { question: "Do you deliver midnight cakes in Nayagarh?", answer: "Yes, midnight birthday cake delivery is available across Nayagarh city zones." }
    ]
  },

  "nahan": {
    cityName: "Nahan",
    metaTitle: "Cake Delivery in Nahan | Sirmaur HP Renuka Lake Shivalik Paonta Sahib Gurdwara | RedHeart",
    metaDescription: "Order cakes online in Nahan (Sirmaur). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nahan (Sirmaur)",
    metaKeyword: "cake delivery nahan sirmaur, order cake online nahan, birthday cake nahan, custom cake nahan, same day cake delivery Nahan Sirmaur Himachal Pradesh Renuka Lake Paonta Sahib Gurdwara Shivalik Hills Yamuna Bata",
    footerContent: `
<h2>Cake Delivery in Nahan (Sirmaur) — Renuka Lake (HP's Largest Natural Lake), Paonta Sahib Gurdwara, and Shivalik Foothills</h2>
<p>Nahan — the district headquarters of Sirmaur district in Himachal Pradesh (southeastern HP; Shivalik Hills; Yamuna River; Haryana-Uttarakhand border), a colonial-era hill town with a scenic lake and one of Sikhism's significant Gurdwaras (Renuka Lake and Wildlife Sanctuary (Renuka Lake — in Sirmaur district; HP's largest natural lake; named after the goddess Renuka (mother of Parashurama — the sixth avatar of Vishnu); the lake is shaped like a reclining woman; the Renuka Ji Fair — one of HP's largest fairs — held annually at the lake; the Renuka Wildlife Sanctuary surrounds the lake; the lake is a sacred pilgrimage site; mirror-still reflections of the surrounding hills make it scenic; a lion safari park is adjacent); the Paonta Sahib Gurdwara (Paonta Sahib — in Sirmaur district on the Yamuna River; a significant Sikh Gurdwara; Guru Gobind Singh spent approximately 4 years (1685-1688 CE) at Paonta Sahib; the Guru composed many of his poetic works at Paonta Sahib including the Nitnem banis; the Gurdwara Paonta Sahib on the Yamuna bank is a major pilgrimage destination; the Paonta Sahib Fair is held annually; the Bata shoe factory is established in Paonta Sahib — one of the older Bata facilities in India); the Nahan town (a charming hill town with colonial architecture; the Nahan Bazaar; Nahan was the capital of the former princely state of Sirmur/Sirmaur), and a city of Renuka Lake HP's-largest-natural-lake and Paonta Sahib Guru-Gobind-Singh-4-years-1685 Nahan — is HP's most Renuka-Lake-Parashurama-goddess and Paonta-Sahib-Guru-Gobind-Singh Nahan. From birthday parties in Nahan to celebration cakes — RedHeart covers all areas: Nahan city, Paonta Sahib, Renuka Ji, Rajgarh (HP), Shillai, Sangrah.</p>
<p>Our Nahan cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nahan (Sirmaur), Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nahan city, Paonta Sahib, Renuka Ji, Rajgarh (HP), Shillai, Sangrah</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nahan (Sirmaur)?", answer: "Yes, same-day cake delivery is available across Nahan city, Paonta Sahib, Renuka Ji, Rajgarh, and Shillai for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nahan?", answer: "Yes, all flavours are available in eggless variants for Nahan delivery." },
      { question: "Do you deliver midnight cakes in Nahan?", answer: "Yes, midnight birthday cake delivery is available across Nahan city zones." }
    ]
  },

  "bongaigaon": {
    cityName: "Bongaigaon",
    metaTitle: "Cake Delivery in Bongaigaon | Assam IOC Refinery Jogighopa Brahmaputra Railway Junction | RedHeart",
    metaDescription: "Order cakes online in Bongaigaon. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bongaigaon",
    metaKeyword: "cake delivery bongaigaon, order cake online bongaigaon, birthday cake bongaigaon, custom cake bongaigaon, same day cake delivery Bongaigaon Assam IOC refinery Jogighopa Brahmaputra railway junction Aie River",
    footerContent: `
<h2>Cake Delivery in Bongaigaon — IOC Bongaigaon Refinery, Brahmaputra Crossing, and Assam's Western Industrial Hub</h2>
<p>Bongaigaon — the district headquarters of Bongaigaon district in Assam (western Assam; Brahmaputra plains; Aie River), one of Assam's most industrially significant cities (the Bongaigaon Refinery (Bongaigaon Refinery and Petrochemicals Limited (BRPL) — a subsidiary of Indian Oil Corporation (IOC); established 1974; one of Assam's major petroleum refineries; the refinery processes crude oil from Assam's oilfields; the refinery also had a petrochemicals complex producing PFY (polyester filament yarn); the Bongaigaon Refinery is a landmark employer in western Assam); the Railway Junction (Bongaigaon is a major railway junction — the NF Railway (Northeast Frontier Railway) has a significant junction at Bongaigaon connecting Assam to West Bengal via Alipurduar; the Bongaigaon Railway Workshop / division is an important railway centre); the Jogighopa Brahmaputra Crossing (Jogighopa — near Bongaigaon; on the Brahmaputra River; the Jogighopa road-cum-rail bridge / Naranarayan Setu is at Jogighopa; this bridge is critical for connectivity between northern and southern banks of the Brahmaputra in western Assam); the Aie River (the Aie — a Brahmaputra tributary — flows through Bongaigaon)); the Bongaigaon district also includes Koch Bihar-adjacent areas and borders Bhutan-facing hill zones, and a city of IOC Bongaigaon Refinery and Jogighopa Brahmaputra Naranarayan Setu railway junction — is Assam's most Bongaigaon-IOC-Refinery-1974 and Jogighopa-Brahmaputra-Naranarayan-Setu Bongaigaon. From birthday parties in Bongaigaon to celebration cakes — RedHeart covers all areas: Bongaigaon city, Jogighopa, Manikpur, Bijni, Salmara, Sidli.</p>
<p>Our Bongaigaon cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bongaigaon, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bongaigaon city, Jogighopa, Manikpur, Bijni, Salmara, Sidli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bongaigaon?", answer: "Yes, same-day cake delivery is available across Bongaigaon city, Jogighopa, Manikpur, Bijni, and Salmara for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bongaigaon?", answer: "Yes, all flavours are available in eggless variants for Bongaigaon delivery." },
      { question: "Do you deliver midnight cakes in Bongaigaon?", answer: "Yes, midnight birthday cake delivery is available across Bongaigaon city zones." }
    ]
  },

  "udalguri": {
    cityName: "Udalguri",
    metaTitle: "Cake Delivery in Udalguri | Assam Bhutan Border BTAD Bodo Nameri Tiger Reserve | RedHeart",
    metaDescription: "Order cakes online in Udalguri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Udalguri",
    metaKeyword: "cake delivery udalguri, order cake online udalguri, birthday cake udalguri, custom cake udalguri, same day cake delivery Udalguri Assam Bhutan border BTAD Bodo Nameri Tiger Reserve Dhansiri River Tangla",
    footerContent: `
<h2>Cake Delivery in Udalguri — Bhutan Border Gateway, Nameri Tiger Reserve, and Bodoland Territorial Council</h2>
<p>Udalguri — the district headquarters of Udalguri district in Assam (northern Assam; Bhutan border; part of Bodoland Territorial Council / BTAD), a border district with forest reserves and Bhutan frontier access (the Bhutan Border (Udalguri district shares a border with Bhutan — one of the northernmost Assam districts; the Bhutanese frontier villages and forests of the Himalayan foothills are accessible from Udalguri; the area is a biodiversity transition zone between the Brahmaputra plains and the Bhutan Himalayas); the Nameri Tiger Reserve (Nameri Tiger Reserve and National Park — in Sonitpur district but bordering the Udalguri zone; the Nameri National Park area and Jia Bharali River are in the extended ecosystem; the Pakke Tiger Reserve in Arunachal is connected; Nameri-Pakke form a critical conservation corridor); the Dhansiri River and Borgang River (the Dhansiri flows through Udalguri; the Borgang River is another tributary; these rivers flow south from the Bhutan hills into the Brahmaputra plains; flooding is periodic); the Bodoland Territorial Council (Udalguri is one of the four BTAD districts — Kokrajhar, Chirang, Baksa, Udalguri; the Bodo Accord 2020 — signed by the Government of India and NDFB factions — brought peace to the BTAD region; the Bodu Bagurumba dance and Bwisagu festival are celebrated in Udalguri); the Tangla town (Tangla — in Udalguri district; a commercial hub with connections to Darrang and Sonitpur), and a city of Bhutan border and BTAD Bodo Bwisagu Bagurumba Nameri adjacent — is Assam's most Udalguri-Bhutan-border and BTAD-Bodo-2020-Accord Udalguri. From birthday parties in Udalguri to celebration cakes — RedHeart covers all areas: Udalguri city, Tangla, Kalaigaon, Harisinga, Mazbat, Bhergaon.</p>
<p>Our Udalguri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udalguri, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udalguri city, Tangla, Kalaigaon, Harisinga, Mazbat, Bhergaon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Udalguri?", answer: "Yes, same-day cake delivery is available across Udalguri city, Tangla, Kalaigaon, Harisinga, and Mazbat for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Udalguri?", answer: "Yes, all flavours are available in eggless variants for Udalguri delivery." },
      { question: "Do you deliver midnight cakes in Udalguri?", answer: "Yes, midnight birthday cake delivery is available across Udalguri city zones." }
    ]
  },

  "tezpur": {
    cityName: "Tezpur",
    metaTitle: "Cake Delivery in Tezpur | Assam Sonitpur Cultural Capital Agnigarh Brahmaputra Kaziranga Gateway | RedHeart",
    metaDescription: "Order cakes online in Tezpur (Sonitpur). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tezpur (Sonitpur)",
    metaKeyword: "cake delivery tezpur sonitpur, order cake online tezpur, birthday cake tezpur, custom cake tezpur, same day cake delivery Tezpur Sonitpur Assam Agnigarh Brahmaputra Kaziranga gateway Bana Usha Nameri cultural capital",
    footerContent: `
<h2>Cake Delivery in Tezpur (Sonitpur) — Agnigarh (Usha-Aniruddha Legend), Brahmaputra Sunset City, and Kaziranga Gateway</h2>
<p>Tezpur — the district headquarters of Sonitpur district in Assam (northern Assam; Brahmaputra River; gateway to Arunachal Pradesh), Assam's celebrated "cultural capital" and one of India's most scenic riverside cities (the Agnigarh Hill (Agnigarh — in Tezpur; a small hillock near the Brahmaputra; the name means "Fort of Fire"; according to Hindu mythology (Bhagavata Purana and local tradition), Agnigarh was the fortress of Banasura (Bana) — the demon king of Sonitpur (Sanskrit for "City of Blood"/Tezpur); Banasura imprisoned his daughter Usha (Oosha) here to protect her from suitors; Usha fell in love with Aniruddha (grandson of Krishna) whom she saw in a dream; her friend Chitralekha drew a portrait of her dream-lover, identified him as Aniruddha, and magically brought him to Usha; Banasura imprisoned Aniruddha; Krishna and Shiva fought in the resulting battle at Sonitpur; the myth is celebrated in the "Usha Harana" dance drama unique to Assam; Agnigarh has a garden park and viewpoint over the Brahmaputra); the Brahmaputra riverside beauty (Tezpur on the Brahmaputra is known for its sunsets over the river; the Chitralekha Udyan / Cole Park on the Brahmaputra bank has ancient terracotta sculptures; the Mahabhairab Temple in Tezpur; the Da Parbatia pillar capital — 6th century CE; the Bamuni Hills ruins — 9th-10th CE; Tezpur is a gazetted heritage town); the Kaziranga gateway (Tezpur is approximately 80 km from Kaziranga National Park — UNESCO World Heritage; the NH37 Tezpur-Kaziranga route; the Nameri National Park / Tiger Reserve is 35 km from Tezpur), and a city of Agnigarh Usha-Aniruddha Banasura legend and Brahmaputra cultural-capital Kaziranga-gateway — is Assam's most Agnigarh-Usha-Aniruddha-Bhagavata-Purana and Brahmaputra-sunset-cultural-capital Tezpur. From birthday parties in Tezpur to celebration cakes — RedHeart covers all areas: Tezpur city, Napaam, Sootea, Dhekiajuli, Biswanath Chariali, Gohpur.</p>
<p>Our Tezpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezpur (Sonitpur), Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezpur city, Napaam, Sootea, Dhekiajuli, Biswanath Chariali, Gohpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tezpur?", answer: "Yes, same-day cake delivery is available across Tezpur city, Napaam, Sootea, Dhekiajuli, Biswanath Chariali, and Gohpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tezpur?", answer: "Yes, all flavours are available in eggless variants for Tezpur delivery." },
      { question: "Do you deliver midnight cakes in Tezpur?", answer: "Yes, midnight birthday cake delivery is available across Tezpur city zones." }
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
