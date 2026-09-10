// Cakes Batch 55 — 12 cities
// Rajasthan: Nagaur, Dausa, Bundi, Sawai Madhopur (check slug)
// MP: Neemuch, Mandsaur, Rajgarh
// HP: Hamirpur HP (different from Hamirpur UP — already done as hamirpur-up)
// Punjab: Rupnagar (Ropar), Barnala, Mansa, Fatehgarh Sahib

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "nagaur": {
    cityName: "Nagaur",
    metaTitle: "Cake Delivery in Nagaur | Nagaur Fort Cattle Fair Rajasthan GI Mangodi | RedHeart",
    metaDescription: "Order cakes online in Nagaur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nagaur",
    metaKeyword: "cake delivery nagaur, order cake online nagaur, birthday cake nagaur, custom cake nagaur, same day cake delivery nagaur Nagaur Fort Nagaur Cattle Fair GI Mangodi Haldi handicraft Rajasthan Jodhpur Bikaner",
    footerContent: `
<h2>Cake Delivery in Nagaur — Nagaur Fort, India's Largest Cattle Fair, and Rajasthan's Handi and Handicraft Heritage</h2>
<p>Nagaur — the district headquarters of Nagaur district in Rajasthan (centrally located between Jodhpur and Bikaner), a city with a significant Mughal-era fort and the famous Nagaur Cattle Fair (the Nagaur Fort (Ahichhatragarh Fort — "Fort of Hooded Cobra") — one of Rajasthan's most impressive forts; built-expanded by the Nagas (4th-5th CE), then Pratiharas, Chahamanas, Ghaznavids, and finally the Mughal emperors; Emperor Akbar strengthened the fort significantly; the fort has a complex of palaces, water systems, and mosques inside; after years of neglect it was restored by the Paul Getty Trust and WMF (World Monuments Fund) — a remarkable restoration achievement; the Nagaur Cattle Fair (Nagaur Pashudhan Mela — held in January-February; one of India's largest cattle fairs, second only to Pushkar; bulls, cows, and especially the famous Nagauri cattle breed (a recognized Indian cattle breed) are bought and sold; also a fairground for folk performances, camel races, agricultural equipment; up to 70,000 animals; GI Nagaur Mangodi (the Nagaur Mangodi/Moong Dal Mangodi — sun-dried moong lentil dumplings; a staple Rajasthani ingredient for preparations; GI-recognized; Nagaur is particularly known for these); the GI Nagauri cattle breed; the handicraft of Nagaur (Nagaur is known for wooden furniture and lacquerwork; the distinctive Nagauri khaat (bed frames)); the Meerta-Makrana area (Makrana marble — GI; used in the Taj Mahal — in Nagaur district borders)), and a city of Nagaur Fort Mughal restoration and India's second-largest cattle fair — is Rajasthan's most Ahichhatragarh-Mughal-Fort-Getty-restored and Nagaur-Cattle-Fair-70,000-animals Nagaur. From birthday parties in Nagaur to celebration cakes — RedHeart covers all Nagaur areas: Nagaur city, Merta, Makrana, Ladnun, Didwana, Khinwsar, Jayal, Parbatsar.</p>
<p>Our Nagaur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Nagaur Fort Ahichhatragarh / Nagaur Cattle Fair / Makrana Marble-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaur city, Merta, Makrana, Ladnun, Didwana, Khinwsar, Jayal, Parbatsar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nagaur Fort Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nagaur?", answer: "Yes, same-day cake delivery is available across all Nagaur areas — Nagaur city, Merta, Makrana, Ladnun, Didwana, and Parbatsar — for orders placed before 3 PM." },
      { question: "Do you have Nagaur Fort and Cattle Fair-themed cakes?", answer: "Yes! The Nagaur Fort (Ahichhatragarh — one of Rajasthan's most impressive Mughal-era forts; restored by the Paul Getty Trust and WMF) and the Nagaur Cattle Fair (India's second-largest cattle fair; 70,000+ animals in January-February; Nagauri cattle breed) inspire our most Ahichhatragarh-Getty-restored and cattle-fair fondant cakes." },
      { question: "Are eggless cakes available in Nagaur?", answer: "Yes, all flavours are available in eggless variants for Nagaur delivery." }
    ]
  },

  "dausa": {
    cityName: "Dausa",
    metaTitle: "Cake Delivery in Dausa | Abhaneri Chand Baori Stepwell Rajasthan Jaipur | RedHeart",
    metaDescription: "Order cakes online in Dausa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dausa",
    metaKeyword: "cake delivery dausa, order cake online dausa, birthday cake dausa, custom cake dausa, same day cake delivery dausa Abhaneri Chand Baori stepwell Bhandasar Maharishi Vyas Mehandipur Balaji Rajasthan Jaipur Agra",
    footerContent: `
<h2>Cake Delivery in Dausa — Abhaneri's Chand Baori Stepwell, Mehandipur Balaji, and Jaipur-Agra Corridor</h2>
<p>Dausa — the district headquarters of Dausa district in Rajasthan (on the Jaipur-Agra National Highway, 55 km from Jaipur), a district containing one of India's most photographed ancient stepwells and a major Hanuman temple (the Abhaneri Village and Chand Baori Stepwell — Abhaneri is a village in Dausa district; the Chand Baori (built 8th-9th CE during the Pratihara/Gurjara-Pratihara period; named after King Chanda of the Nikumbh dynasty; 13 stories deep; 3,500 steps in a perfectly symmetrical geometric pattern descending 20 metres to the waterline; one of the world's largest and deepest stepwells; the stepped wells of Rajasthan are extraordinary feats of medieval engineering — they were not just water storage but social gathering places, their cool underground chambers providing relief from the desert heat; the Chand Baori has appeared in major films including The Dark Knight Rises and The Fall; the Harshat Mata Temple opposite the Chand Baori (8th-9th CE; originally decorated with exquisite sculpted panels; damaged by Mahmud of Ghazni's raids; the scattered sculptures are now displayed nearby); the Mehandipur Balaji (Dausa district — one of North India's most visited Hanuman temples; famous for its exorcism rituals — the temple is particularly known for its role in treating people believed to be possessed by evil spirits or under black magic; devotees bind themselves with chains, roll on the ground, perform various rituals; one of the most intense religious sites in North India); the Bhandasar area, and the Agra-Jaipur tourism corridor), and a city of Chand Baori geometric stepwell and Mehandipur exorcism rituals — is Rajasthan's most Chand-Baori-13-storey-3500-steps-geometric and Mehandipur-Balaji-exorcism-North-India Dausa. From birthday parties in Dausa to celebration cakes — RedHeart covers all Dausa areas: Dausa city, Abhaneri, Mehandipur, Bandikui, Mahuwa, Lalsot, Sikrai.</p>
<p>Our Dausa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chand Baori Stepwell 13-storey / Mehandipur Balaji / Harshat Mata-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dausa, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dausa city, Abhaneri, Mehandipur, Bandikui, Mahuwa, Lalsot, Sikrai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chand Baori Stepwell Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dausa?", answer: "Yes, same-day cake delivery is available across all Dausa areas — Dausa city, Abhaneri, Mehandipur, Bandikui, and Mahuwa — for orders placed before 3 PM." },
      { question: "Do you have Chand Baori and Mehandipur Balaji-themed cakes?", answer: "Yes! The Chand Baori (8th-9th CE; 13 stories; 3,500 steps in perfect geometric symmetry; 20 m deep; one of the world's largest stepwells; featured in The Dark Knight Rises; cool underground chambers for desert relief) and Mehandipur Balaji (one of North India's most intense Hanuman temples; famous for exorcism rituals) inspire our most Chand-Baori-3500-steps-geometric fondant cakes." },
      { question: "Are eggless cakes available in Dausa?", answer: "Yes, all flavours are available in eggless variants for Dausa delivery." }
    ]
  },

  "bundi": {
    cityName: "Bundi",
    metaTitle: "Cake Delivery in Bundi | Taragarh Fort Rajput Miniature Painting Step Wells Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Bundi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bundi",
    metaKeyword: "cake delivery bundi, order cake online bundi, birthday cake bundi, custom cake bundi, same day cake delivery bundi Taragarh Fort Bundi miniature painting Kipling Rudyard baoli stepwells Chambal Rajasthan",
    footerContent: `
<h2>Cake Delivery in Bundi — Taragarh Fort, Bundi Miniature Painting School, Rudyard Kipling, and Stepwell Heritage</h2>
<p>Bundi — the district headquarters of Bundi district in Rajasthan, one of Rajasthan's most atmospheric and undervisited historic towns, celebrated for its distinctive school of miniature painting and extraordinary architecture (the Taragarh Fort (Star Fort) — perched high above the city; the fort dates to 1354 CE; it has the massive "Bhim Burj" (largest cannon tower in Rajasthan); the fort contains ancient water storage tanks; it has been UNESCO-listed on the tentative list; the Bundi Palace (Garh Palace — connected to the fort; decorated with an extraordinary collection of Bundi miniature paintings — perhaps the finest in-situ miniature painting collection in India; these paintings cover the walls and ceilings of the Chitrashala (Art Gallery); the distinctive Bundi/Kotah/Hadoti School of miniature painting (16th-18th century CE) features: lush vegetation, blue Krishna, long-necked women, hunting scenes, the monsoon seasons, rich jewel-like colours — distinct from the Mewar and Marwar schools; Bundi palaces contain some of the most extraordinary murals/paintings in India; the Bundi Stepwells (Bundi has over 50 ancient stepwells (baoli) — including the Raniji ki Baoli (Queen's Stepwell — 46 m deep, four-storey, 13th century CE; extraordinary carvings of Ganesha, Vishnu, step motifs); Rudyard Kipling (the author of The Jungle Book) spent time in Bundi and wrote: "Bundi is the place of perfect water," calling Bundi one of the most beautiful cities in the world; the Sukh Mahal where Kipling stayed is preserved)), and a city of Bundi miniature paintings and Kipling's "perfect water" stepwells — is Rajasthan's most Bundi-painting-school-Chitrashala-murals and Raniji-baoli-46m-Kipling-perfect-water Bundi. From birthday parties in Bundi to celebration cakes — RedHeart covers all Bundi areas: Bundi city, Lakheri, Nainwa, Hindoli, Keshoraipatan, Talera.</p>
<p>Our Bundi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Taragarh Fort / Bundi Miniature Painting Chitrashala / Raniji ki Baoli Stepwell / Kipling Sukh Mahal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bundi, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bundi city, Lakheri, Nainwa, Hindoli, Keshoraipatan, Talera</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bundi Miniature Painting Fondant, Taragarh Fort Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bundi?", answer: "Yes, same-day cake delivery is available across all Bundi areas — Bundi city, Lakheri, Nainwa, Hindoli, and Keshoraipatan — for orders placed before 3 PM." },
      { question: "Do you have Bundi Miniature Painting and Taragarh Fort-themed cakes?", answer: "Yes! The Bundi miniature painting school (16th-18th CE; Chitrashala murals; lush vegetation, blue Krishna, long-necked women, monsoon scenes; jewel-like colours; finest in-situ collection in India) and Taragarh Fort (1354 CE; Raniji ki Baoli 46m stepwell; Rudyard Kipling called Bundi 'the place of perfect water') inspire our most Bundi-painting-Chitrashala-murals and Taragarh-Kipling fondant cakes." },
      { question: "Are eggless cakes available in Bundi?", answer: "Yes, all flavours are available in eggless variants for Bundi delivery." }
    ]
  },

  "neemuch": {
    cityName: "Neemuch",
    metaTitle: "Cake Delivery in Neemuch | Opium Alkaloid Factory BSF Academy MP Border | RedHeart",
    metaDescription: "Order cakes online in Neemuch. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Neemuch",
    metaKeyword: "cake delivery neemuch, order cake online neemuch, birthday cake neemuch, custom cake neemuch, same day cake delivery neemuch Government Opium Alkaloid Factory BSF Training Academy Madhya Pradesh Rajasthan Mandsaur border",
    footerContent: `
<h2>Cake Delivery in Neemuch — Government Opium Alkaloid Factory, BSF Training Academy, and MP-Rajasthan Border</h2>
<p>Neemuch (Nimach) — the district headquarters of Neemuch district in Madhya Pradesh (on the MP-Rajasthan border), a city with two of India's most unique government institutions (the Government Opium and Alkaloid Works (GOAW) — the Neemuch Opium Factory (Government Opium and Alkaloid Works — a government-owned factory that processes legally grown opium poppy into morphine, codeine, and other pharmaceutical alkaloids; India is the world's largest licit opium producer for pharmaceutical purposes; the opium poppy is legally cultivated by licensed farmers in the Malwa region of MP (Mandsaur-Neemuch-Ratlam) and Rajasthan under government permit (Narcotics Commissioner); the processed alkaloids are exported to pharmaceutical companies worldwide for painkillers; the Neemuch factory is one of two such facilities in India (the other at Ghazipur, UP); this is a highly controlled and legitimate pharmaceutical industry — India's licensed opium production contributes significantly to global pharmaceutical supplies); the BSF Training Academy/STC Neemuch (the BSF (Border Security Force) has a significant training campus at Neemuch — the STC (Subsidiary Training Centre); Neemuch was also historically a significant British cantonment town (Neemuch Cantonment — the 1857 revolt saw the Neemuch garrison mutinying on June 3, 1857; it was one of the early mutinies before the main Sepoy Mutiny centres); the Neemuch-Mandsaur-Jawad corridor is one of India's most significant legal opium-poppy growing belts), and a city of legal pharmaceutical opium and BSF training — is Madhya Pradesh's most Government-Opium-Alkaloid-pharmaceutical and BSF-training-1857-cantonment Neemuch. From birthday parties in Neemuch to celebration cakes — RedHeart covers all Neemuch areas: Neemuch city, Manasa, Jawad, Singoli, Rampur.</p>
<p>Our Neemuch cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Neemuch, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Neemuch city, Manasa, Jawad, Singoli, Rampur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Neemuch?", answer: "Yes, same-day cake delivery is available across all Neemuch areas — Neemuch city, Manasa, Jawad, and Singoli — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Neemuch?", answer: "Yes, all flavours are available in eggless variants for Neemuch delivery." },
      { question: "Do you deliver midnight cakes in Neemuch?", answer: "Yes, midnight birthday cake delivery is available across Neemuch city zones." }
    ]
  },

  "mandsaur": {
    cityName: "Mandsaur",
    metaTitle: "Cake Delivery in Mandsaur | Pashupatinath Temple Shashanka GI Opium MP | RedHeart",
    metaDescription: "Order cakes online in Mandsaur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mandsaur",
    metaKeyword: "cake delivery mandsaur, order cake online mandsaur, birthday cake mandsaur, custom cake mandsaur, same day cake delivery mandsaur Pashupatinath Temple Dashpur Shashanka opium GI Madhya Pradesh Rajasthan border Chambal",
    footerContent: `
<h2>Cake Delivery in Mandsaur — Pashupatinath Temple, Ancient Dashpur, GI Opium, and 2017 Farmers' Protests</h2>
<p>Mandsaur — the district headquarters of Mandsaur district in Madhya Pradesh (on the Chambal River at the MP-Rajasthan border), a city with deep historical roots and a significant temple (the Pashupatinath Temple (Mandsaur) — the most significant Shiva temple in MP; the Mandsaur Pashupatinath is celebrated for housing an eight-faced (Ashtamukhi) Shivalingam — an extraordinary and rare form; the linga has 8 faces of Shiva carved on it; pilgrims consider it highly sacred; it is on the banks of the Shivna River; the ancient city of Dashpur/Dasapura — Mandsaur was known as Dashpur in ancient times; it was mentioned by the Chinese traveller Xuanzang (Huen Tsang) 7th century CE; the Yasodharman Pillar/Mandsor Inscription (513-533 CE — the Huna invader Mihirakula was defeated by the Aulikaras king Yasodharman of Mandsaur; the inscription is among the earliest to mention "Huna" invaders in India; significant for ancient Indian history); the GI Opium cultivation region (the Malwa opium-poppy belt — Mandsaur-Neemuch-Ratlam; the world's largest licit opium growing area; licensed farmers; government procurement); the Mandsaur farmers' protest (2017 — 6 farmers were killed in police firing during agitations for better crop prices in June 2017; a significant episode in India's farmer protest history)), and a city of Ashtamukhi Shiva and 2017 farmer protests — is Madhya Pradesh's most Pashupatinath-eight-faced-Ashtamukhi-rare and Mandsaur-6-farmers-2017-protest Mandsaur. From birthday parties in Mandsaur to celebration cakes — RedHeart covers all Mandsaur areas: Mandsaur city, Sitamau, Malhargarh, Suvasra, Garoth, Shamgarh, Dalauda.</p>
<p>Our Mandsaur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Pashupatinath Ashtamukhi Shiva / Dashpur Ancient Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandsaur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandsaur city, Sitamau, Malhargarh, Suvasra, Garoth, Shamgarh, Dalauda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Pashupatinath Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mandsaur?", answer: "Yes, same-day cake delivery is available across all Mandsaur areas — Mandsaur city, Sitamau, Malhargarh, Suvasra, and Garoth — for orders placed before 3 PM." },
      { question: "Do you have Pashupatinath Ashtamukhi-themed cakes?", answer: "Yes! The Mandsaur Pashupatinath Temple (with its rare eight-faced Ashtamukhi Shivalingam — one of India's most unique Shiva forms; on the Shivna River) inspires our most Pashupatinath-eight-faced-Ashtamukhi fondant cakes." },
      { question: "Are eggless cakes available in Mandsaur?", answer: "Yes, all flavours are available in eggless variants for Mandsaur delivery." }
    ]
  },

  "rajgarh": {
    cityName: "Rajgarh",
    metaTitle: "Cake Delivery in Rajgarh | Narsinghgarh Biaora Parvati River MP Holkar | RedHeart",
    metaDescription: "Order cakes online in Rajgarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rajgarh",
    metaKeyword: "cake delivery rajgarh, order cake online rajgarh, birthday cake rajgarh, custom cake rajgarh, same day cake delivery rajgarh Narsinghgarh Biaora Parvati River Sanjit Holkar Madhya Pradesh agriculture",
    footerContent: `
<h2>Cake Delivery in Rajgarh — Narsinghgarh Fort, Parvati River Valley, and Malwa's Agricultural Belt</h2>
<p>Rajgarh — the district headquarters of Rajgarh district in Madhya Pradesh (Malwa region, central MP), an agricultural district in the Parvati River valley (the Rajgarh district (Rajgarh-Biaora) — the district has its headquarters at Rajgarh, but the principal commercial city is Biaora; the Parvati River (Parwati River — a tributary of the Chambal River; originates in the Vindhya Range; flows through Rajgarh district northward into Madhya Pradesh-Rajasthan border before joining the Chambal; the Rajgarh district's agricultural productivity depends heavily on the Parvati and its tributaries for irrigation); the Narsinghgarh (in Rajgarh district) — an old princely state capital; the Narsinghgarh Fort (high on a hill above the Narsinghgarh town; the Narsinghgarh State was a former princely state of the Rajput-descended rulers; the area has wildlife significance — Narsinghgarh Wildlife Sanctuary (Surkhee Sanctuary area — home to the Indian sloth bear, leopard, wolf, hyena, chinkaras)); the Biaora (largest commercial town in Rajgarh district — market center for soybean, wheat, mustard; important railway junction on Mumbai-Delhi main line); the Rajgarh district is part of MP's extensive soybean-wheat agricultural belt; the Holkar connection (the Rajgarh area was influenced by the Maratha Holkar dynasty of Indore)), and a city of Parvati River valley and Narsinghgarh fort-wildlife — is Madhya Pradesh's most Parvati-valley-agricultural and Narsinghgarh-fort-sloth-bear-wildlife Rajgarh. From birthday parties in Rajgarh to celebration cakes — RedHeart covers all Rajgarh areas: Rajgarh city, Biaora, Narsinghgarh, Khilchipur, Sarangpur, Suthalia, Jirapur.</p>
<p>Our Rajgarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajgarh, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajgarh city, Biaora, Narsinghgarh, Khilchipur, Sarangpur, Suthalia, Jirapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rajgarh?", answer: "Yes, same-day cake delivery is available across all Rajgarh areas — Rajgarh city, Biaora, Narsinghgarh, Khilchipur, and Sarangpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Rajgarh?", answer: "Yes, all flavours are available in eggless variants for Rajgarh (MP) delivery." },
      { question: "Do you deliver midnight cakes in Rajgarh?", answer: "Yes, midnight birthday cake delivery is available across Rajgarh city and Biaora zones." }
    ]
  },

  "hamirpur-hp": {
    cityName: "Hamirpur",
    metaTitle: "Cake Delivery in Hamirpur HP | Army District Most Literate Himachal Pradesh | RedHeart",
    metaDescription: "Order cakes online in Hamirpur (HP). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hamirpur (Himachal Pradesh)",
    metaKeyword: "cake delivery hamirpur himachal pradesh, order cake online hamirpur hp, birthday cake hamirpur hp, custom cake hamirpur hp, same day cake delivery hamirpur hp army district most literate Beas Satluj Himachal Pradesh",
    footerContent: `
<h2>Cake Delivery in Hamirpur (Himachal Pradesh) — India's Most Literate District, Army District, and Beas-Satluj Valley</h2>
<p>Hamirpur (Himachal Pradesh) — the district headquarters of Hamirpur district in Himachal Pradesh (not to be confused with Hamirpur, Uttar Pradesh), one of India's most remarkable small districts by human development metrics (the Hamirpur district (HP) holds the distinction of being one of India's most literate districts — with literacy rates consistently above 95-98% (among the highest in India); this extraordinary literacy rate is attributed to the culture of military service and education in the district (army culture drives education value, as military service requires education); the Hamirpur district sends one of the highest numbers of personnel per capita to the Indian Army of any district in India — it has one of the highest concentrations of ex-servicemen and serving personnel in the country; the Beas River (the Beas flows along the northern boundary of Hamirpur district; it is one of the five rivers of Punjab that form the Indus system; the Pandoh Dam on the Beas (in adjacent Mandi district) diverts water into the Satluj); the Hamirpur district lies in the mid-hill zone of HP (800-1,200 m altitude); the Sujanpur Tira (in Hamirpur district) — a historic town on the Beas with the Sujanpur Fort complex; the seat of the Katoch kings of Kangra dynasty (Raja Sansar Chand of Kangra was one of the greatest patrons of Pahari miniature painting and had his court at Sujanpur Tira); the Bhoranj, Una-bordering area, Tuni Devi temple), and a city of highest-literacy army-driven culture — is Himachal Pradesh's most 98%-literacy-army-culture and Sujanpur-Tira-Katoch-Pahari-painting Hamirpur. From birthday parties in Hamirpur to celebration cakes — RedHeart covers all Hamirpur HP areas: Hamirpur city, Barsar, Nadaun, Sujanpur Tira, Bhoranj, Bhota, Tuni.</p>
<p>Our Hamirpur (HP) cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sujanpur Tira Katoch Fort / Beas River Valley / Army Heritage / Himachal Hills-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur city, Barsar, Nadaun, Sujanpur Tira, Bhoranj, Bhota, Tuni</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hamirpur (HP)?", answer: "Yes, same-day cake delivery is available across all Hamirpur HP areas — Hamirpur city, Barsar, Nadaun, Sujanpur Tira, and Bhoranj — for orders placed before 3 PM." },
      { question: "Is this Hamirpur HP different from Hamirpur UP?", answer: "Yes, this is Hamirpur in Himachal Pradesh — India's most literate district with 98%+ literacy driven by the army service culture (one of the highest per-capita army personnel in India). Our other Hamirpur coverage (Hamirpur UP) serves the Uttar Pradesh district separately." },
      { question: "Are eggless cakes available in Hamirpur HP?", answer: "Yes, all flavours are available in eggless variants for Hamirpur Himachal Pradesh delivery." }
    ]
  },

  "rupnagar": {
    cityName: "Rupnagar",
    metaTitle: "Cake Delivery in Rupnagar Ropar | Harappan Civilization First IIT Punjab | RedHeart",
    metaDescription: "Order cakes online in Rupnagar (Ropar). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rupnagar (Ropar)",
    metaKeyword: "cake delivery rupnagar ropar, order cake online rupnagar, birthday cake rupnagar, custom cake ropar, same day cake delivery rupnagar Harappan civilization Ropar excavation IIT Ropar Bhakra Nangal SSNNL Sutlej Punjab",
    footerContent: `
<h2>Cake Delivery in Rupnagar (Ropar) — Harappan Civilization Discovery Site, IIT Ropar, and Bhakra-Nangal Gateway</h2>
<p>Rupnagar (Ropar) — the district headquarters of Rupnagar district in Punjab (on the banks of the Satluj River), home to one of the most significant Harappan civilization excavation sites and India's newest IIT (the Ropar Harappan Site (the Ropar excavation site — discovered in 1950-52 by Y.D. Sharma of the ASI; Ropar was the first Harappan site excavated after the independence of India; it established that the Harappan civilization extended into Punjab and showed continuity from the Harappan to the post-Harappan period; a dog burial found with its human owner is one of the most poignant finds from the Indian subcontinent — only such dog burial found in a Harappan context; the Ropar site showed Harappan-Painted Grey Ware-Early Historic continuity in the same location; the Satluj River provides an explanation for the settlement here — similar to how Harappan sites cluster around rivers); the IIT Ropar (Indian Institute of Technology Ropar — established 2008 as part of the wave of new IITs; the campus is near Rupnagar; it is one of the newer IITs with engineering and research programs; rapidly growing in ranking); the Bhakra-Nangal Dam — Gateway (the Bhakra-Nangal Dam complex is in Bilaspur-Nangal, adjacent to Rupnagar; the Nangal is the downstream dam; the Anandpur Sahib-Nangal approach is through Rupnagar; the Sutlej River); the Morinda-Rupnagar belt (near Chamkaur Sahib — the site of the 1704 Battle of Chamkaur where Guru Gobind Singh's sons Ajit Singh and Jujhar Singh died fighting the Mughal army — a sacred Sikh site)), and a city of Harappan first post-independence excavation and IIT — is Punjab's most Harappan-first-post-independence-excavation and IIT-Ropar Rupnagar. From birthday parties in Rupnagar to celebration cakes — RedHeart covers all Rupnagar areas: Rupnagar (Ropar) city, Anandpur Sahib, Morinda, Chamkaur Sahib, Nurpur Bedi, Kiratpur Sahib.</p>
<p>Our Rupnagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Ropar Harappan Site / Anandpur Sahib Sikh Heritage / Bhakra Nangal Gateway-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rupnagar (Ropar), Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rupnagar, Anandpur Sahib, Morinda, Chamkaur Sahib, Nurpur Bedi, Kiratpur Sahib</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rupnagar (Ropar)?", answer: "Yes, same-day cake delivery is available across all Rupnagar areas — Rupnagar city, Anandpur Sahib, Morinda, Chamkaur Sahib, and Kiratpur Sahib — for orders placed before 3 PM." },
      { question: "Do you have Ropar Harappan Site-themed cakes?", answer: "Yes! The Ropar Harappan Site (first Harappan site excavated after Indian independence — 1950-52; the poignant dog-buried-with-owner find unique in Indian subcontinent; shows Harappan-Painted Grey Ware continuity; Y.D. Sharma ASI excavation) inspires our most Harappan-first-post-independence fondant cakes." },
      { question: "Are eggless cakes available in Rupnagar?", answer: "Yes, all flavours are available in eggless variants for Rupnagar (Ropar) delivery." }
    ]
  },

  "barnala": {
    cityName: "Barnala",
    metaTitle: "Cake Delivery in Barnala | Punjab Agriculture Grain Trade Sunam | RedHeart",
    metaDescription: "Order cakes online in Barnala. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barnala",
    metaKeyword: "cake delivery barnala, order cake online barnala, birthday cake barnala, custom cake barnala, same day cake delivery barnala Punjab grain wheat paddy agriculture Sunam Tapa Sehna Moonak",
    footerContent: `
<h2>Cake Delivery in Barnala — Punjab's Agricultural Heartland, Grain Markets, and Malwa Belt</h2>
<p>Barnala — the district headquarters of Barnala district in Punjab (Barnala district was created from Sangrur district in 2006), a district in Punjab's central Malwa agricultural belt (the Barnala district is a significant agricultural zone in Punjab — wheat-paddy double-crop system; the agricultural yield from the Barnala-Sangrur-Mansa belt is significant for Punjab's grain production; the Barnala grain market (mandi) — one of Punjab's key grain trading centers; the Sunam town (in Sangrur district adjacent to Barnala — historically significant as the birthplace and home of Sufi saint Bulleh Shah; Bulleh Shah (1680-1757 CE) — one of the greatest Punjabi Sufi poets; his kafis (songs) remain deeply popular; his verse "Bullah ki jaana maein kaun" is one of the most celebrated Punjabi poems; the Barnala area — cotton and kinnow orchards in the area; cotton cultivation in the Barnala-Bathinda-Mansa Malwa region; kinnow citrus cultivation; the Gurdwara Dhanaula Sahib in Barnala district; the Sukhchain Sahib Gurdwara area), and a city of Punjab's Malwa agricultural belt and grain markets — is Punjab's most Malwa-central-agricultural-wheat-paddy and grain-market-trading Barnala. From birthday parties in Barnala to celebration cakes — RedHeart covers all Barnala areas: Barnala city, Tapa, Sehna, Dhanaula, Moonak, Bhadour.</p>
<p>Our Barnala cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barnala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barnala city, Tapa, Sehna, Dhanaula, Moonak, Bhadour</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barnala?", answer: "Yes, same-day cake delivery is available across all Barnala areas — Barnala city, Tapa, Sehna, Dhanaula, and Moonak — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Barnala?", answer: "Yes, all flavours are available in eggless variants for Barnala delivery." },
      { question: "Do you deliver midnight cakes in Barnala?", answer: "Yes, midnight birthday cake delivery is available across Barnala city zones." }
    ]
  },

  "mansa": {
    cityName: "Mansa",
    metaTitle: "Cake Delivery in Mansa | Punjab Cotton Malwa Budhlada Sardulgarh Bhikhi | RedHeart",
    metaDescription: "Order cakes online in Mansa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mansa",
    metaKeyword: "cake delivery mansa, order cake online mansa, birthday cake mansa, custom cake mansa, same day cake delivery mansa Punjab cotton Malwa belt Budhlada Sardulgarh Bhikhi Boha agricultural Rajasthan border",
    footerContent: `
<h2>Cake Delivery in Mansa — Punjab's Cotton Belt, Malwa Farmers, and Rajasthan Border District</h2>
<p>Mansa — the district headquarters of Mansa district in Punjab (Mansa district was carved from Bathinda district in 1992), one of Punjab's most agrarian and cotton-growing districts on the Rajasthan border (the Mansa district — a cotton and wheat-growing district in Punjab's Malwa region; historically significant as one of Punjab's poorer districts (alongside Bathinda-Moga) with a high dependency on agriculture; the Mansa district borders Haryana and Rajasthan; the Sardulgarh, Budhlada, Bhikhi, Boha, and Jhunir towns are significant commercial centres; the district suffered from Punjab's drug epidemic more than most — Mansa was one of the districts with higher drug abuse prevalence among young people in rural Punjab; it also has a strong Jat Sikh agricultural community; the Baba Garibnath Mandir (Mansa — a sacred religious site for Hindus in Mansa); the Mansa cotton belt — the southern Punjab cotton-growing belt (Mansa-Bathinda-Fazilka) represents a distinctive crop from the wheat-paddy dominant Punjab; Mansa is the southernmost Punjab district close to Haryana-Rajasthan border), and a city of cotton belt agriculture and Malwa community — is Punjab's most cotton-Malwa-border and agricultural-Jat-Sikh Mansa. From birthday parties in Mansa to celebration cakes — RedHeart covers all Mansa areas: Mansa city, Sardulgarh, Budhlada, Bhikhi, Boha, Bareta, Jhunir.</p>
<p>Our Mansa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mansa, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mansa city, Sardulgarh, Budhlada, Bhikhi, Boha, Bareta, Jhunir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mansa?", answer: "Yes, same-day cake delivery is available across all Mansa areas — Mansa city, Sardulgarh, Budhlada, Bhikhi, and Boha — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mansa?", answer: "Yes, all flavours are available in eggless variants for Mansa (Punjab) delivery." },
      { question: "Do you deliver midnight cakes in Mansa?", answer: "Yes, midnight birthday cake delivery is available across Mansa city zones." }
    ]
  },

  "fatehgarh-sahib": {
    cityName: "Fatehgarh Sahib",
    metaTitle: "Cake Delivery in Fatehgarh Sahib | Sahibzade Sikh Martyrdom Punjab | RedHeart",
    metaDescription: "Order cakes online in Fatehgarh Sahib. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fatehgarh Sahib",
    metaKeyword: "cake delivery fatehgarh sahib, order cake online fatehgarh sahib, birthday cake fatehgarh sahib, custom cake fatehgarh sahib, same day cake delivery fatehgarh sahib Sahibzade martyrdom Zoravar Singh Fateh Singh Wazir Khan Punjab Sikh history",
    footerContent: `
<h2>Cake Delivery in Fatehgarh Sahib — Sahibzade Martyrdom Sacred Site, Chhote Sahibzade, and Punjab's Sikh Heritage</h2>
<p>Fatehgarh Sahib — the district headquarters of Fatehgarh Sahib district in Punjab, one of the most sacred sites in Sikh history — the place of martyrdom of Guru Gobind Singh's two youngest sons (the Martyrdom of the Chhote Sahibzade (the "Younger Sahibzade") — in December 1704-1705 CE, after the Battle of Chamkaur (in adjacent Rupnagar district) where Guru Gobind Singh's two elder sons Ajit Singh and Jujhar Singh died fighting Mughal forces, the two younger sons — Sahibzada Zoravar Singh (age 9) and Sahibzada Fateh Singh (age 7) — were captured along with their grandmother Mata Gujri ji (Guru Gobind Singh's mother); Wazir Khan (the Nawab of Sirhind, now Fatehgarh Sahib) imprisoned them in a cold tower (Thanda Burj); when pressed to convert to Islam and threatened, the young boys refused; Wazir Khan ordered them to be bricked alive (put into a wall) on December 26-27, 1704 CE — they were martyred at the ages of 9 and 7 years; Mata Gujri ji died in shock upon hearing the news; this episode is one of the most emotionally intense in Sikh history; "Shaheedi Jor Mela" — held in December (Poh month) commemorates this martyrdom annually with lakhs of pilgrims; the Fatehgarh Sahib Gurdwara complex — one of the most significant Sikh pilgrimage destinations; "Fateh" in the name literally commemorates Sahibzada Fateh Singh), and a city of Chhote Sahibzade 9-and-7-year martyrdom — is Punjab's most Sahibzade-younger-sons-9-7-years-martyr and Wazir-Khan-Sirhind-brick-wall-December Fatehgarh Sahib. From birthday parties in Fatehgarh Sahib to celebration cakes — RedHeart covers all Fatehgarh Sahib areas: Fatehgarh Sahib city, Amloh, Bassi Pathana, Morinda, Mandi Gobindgarh (Steel City of Punjab), Khamano, Sirhind.</p>
<p>Our Fatehgarh Sahib cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sahibzade Martyrdom Sacred Memorial / Fatehgarh Sahib Gurdwara / Shaheedi Jor Mela-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehgarh Sahib, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehgarh Sahib, Amloh, Bassi Pathana, Morinda, Mandi Gobindgarh, Sirhind</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fatehgarh Sahib?", answer: "Yes, same-day cake delivery is available across all Fatehgarh Sahib areas — Fatehgarh Sahib city, Amloh, Bassi Pathana, Morinda, Mandi Gobindgarh, and Sirhind — for orders placed before 3 PM." },
      { question: "Do you have Sahibzade Martyrdom-themed cakes?", answer: "Yes! The Sahibzade martyrdom (the two youngest sons of Guru Gobind Singh — Zoravar Singh age 9 and Fateh Singh age 7 — who refused to convert to Islam and were martyred by Wazir Khan of Sirhind in December 1704 CE; one of the most emotionally profound episodes in Sikh history; the annual Shaheedi Jor Mela) inspires our most Sahibzade-9-and-7-years-youngest-sons fondant cakes." },
      { question: "Are eggless cakes available in Fatehgarh Sahib?", answer: "Yes, all flavours are available in eggless variants for Fatehgarh Sahib delivery." }
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
