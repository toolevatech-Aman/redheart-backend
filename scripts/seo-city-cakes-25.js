// Cakes Batch 25 — 15 cities:
// UP: Barabanki, Amroha (J.P. Nagar), Kannauj
// Bihar: Sheikhpura, Lakhisarai, Arwal
// Odisha: Koraput, Boudh
// Punjab: Sangrur, Nawanshahr (SBS Nagar)
// Gujarat: Kutch / Bhuj [100% eggless Pure Veg]
// Telangana: Nagarkurnool
// Nagaland: Mokokchung
// Arunachal: Bomdila
// HP: Kangra

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "barabanki": {
    cityName: "Barabanki",
    metaTitle: "Cake Delivery in Barabanki | Mentha Capital Lucknow Road UP | RedHeart",
    metaDescription: "Order cakes online in Barabanki. Same-day delivery across Barabanki. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barabanki",
    metaKeyword: "cake delivery barabanki, order cake online barabanki, birthday cake barabanki, custom cake barabanki, same day cake delivery barabanki mentha peppermint Lucknow Faizabad road Ghaghra river Awadh border",
    footerContent: `
<h2>Cake Delivery in Barabanki — India's Mentha Capital, Awadh's Eastern Gateway, and Ghaghra River's Fertile Belt</h2>
<p>Barabanki — the headquarters of Barabanki district in Uttar Pradesh, a city known as India's largest mentha (peppermint) producing district (Barabanki district is the world's largest mentha (Japanese mint / Mentha arvensis) producing region; the mentha fields of Barabanki, Lucknow, Sitapur, and Hardoi districts produce approximately 80% of the world's mentha oil; the mentha oil distillation industry — where farmers grow mint, harvest it, and steam-distill to produce mentha oil — is the backbone of Barabanki's rural economy; the mint oil is used in toothpastes, medicines, chewing gum, confectionery, cosmetics, and pan masala; Barabanki's Haidergarh, Fatehpur, Ram Sanehi Ghat, and Sirauli blocks are the most intensive mentha-growing areas; Barabanki also produces paddy, wheat, and significant quantities of guava (Barabanki Allahabad Safeda guavas are traded in the Lucknow market); the Ram Janam Bhoomi of Hanuman — the Sri Ram temple at Sultanpur Road — and the Daeva Dham (Devkali) Devi temple are significant religious sites in the district), adjacent to Lucknow (Barabanki's western border touches Lucknow city — the district is functionally part of the Lucknow urban agglomeration), and a district with historical significance in Awadhi culture (Barabanki was historically part of Awadh and the culture, language, and cuisine are deeply Awadhi) — is a city of mint fields and Lucknow adjacency. From birthday parties in the Civil Lines area to corporate cakes at the large mentha distillation units, from anniversary surprises near the Lucknow Road to student cakes at Barabanki's colleges — RedHeart covers all Barabanki zones: Civil Lines, Station Road, Lucknow Road, Faizabad Road, Haidergarh, Fatehpur, Ram Sanehi Ghat, Ramsanehighat, Zaidpur, Nawabganj.</p>
<p>Our Barabanki cake range: Chocolate, Black Forest, Red Velvet, Guava (Barabanki Safeda!), Butterscotch, Peppermint-Choco (Barabanki mentha special!), Photo Cakes, Fondant Awadhi heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barabanki, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Lucknow Road, Faizabad Road, Haidergarh, Nawabganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Peppermint-Choco, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barabanki?", answer: "Yes, same-day cake delivery is available across all Barabanki areas — Civil Lines, Station Road, Lucknow Road, Haidergarh, and Nawabganj — for orders placed before 3 PM." },
      { question: "Do you have a peppermint cake in Barabanki?", answer: "Yes! Barabanki is India's largest mentha (peppermint) producing district — the world's mint capital — so our special Peppermint-Choco cake is the most local flavour you can get for your Barabanki birthday celebration." },
      { question: "Are eggless cakes available in Barabanki?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Peppermint-Choco — are available in eggless variants for Barabanki delivery." }
    ]
  },

  "amroha": {
    cityName: "Amroha",
    metaTitle: "Cake Delivery in Amroha | JP Nagar Mango Belt UP | RedHeart",
    metaDescription: "Order cakes online in Amroha. Same-day delivery across Amroha. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Amroha",
    metaKeyword: "cake delivery amroha, order cake online amroha, birthday cake amroha, custom cake amroha, same day cake delivery amroha JP Nagar mango Dusheri Chausa Gajraula paper mill Moradabad road UP",
    footerContent: `
<h2>Cake Delivery in Amroha — Doab Mango Belt, Amroha's Rogan Josh Weavers, and UP's Paper Mill Heritage</h2>
<p>Amroha — officially Jyotiba Phule Nagar (J.P. Nagar), the headquarters of Amroha district in Uttar Pradesh (renamed in 1997 after Jyotiba Phule; the older name Amroha is widely used), a city of orchard abundance and historic craft (Amroha is situated in the Ganga-Ramganga doab — a fertile stretch that produces some of the finest Dusheri and Chausa mangoes of UP; the mango orchards of Amroha, Hasanpur, and Gajraula areas are among the most productive in the Moradabad division; the Amroha mango market during the May-July season is one of the liveliest in western UP; additionally, Amroha is historically known for its weaving of Amroha silk — the brocade weaving community (Ansari weavers) of Amroha produces a distinctive silk fabric with floral and geometric patterns that has been a part of the town's textile heritage for centuries; the Gajraula paper mill (Orient Paper Mills) — established in 1952 on the Ramganga River in Amroha district — is one of India's oldest and largest newsprint paper mills and a major employer; Amroha also has significant pottery and earthenware production; the Darga Hazrat Syed Shah Qutbuddin (Ghaus-e-Amroha) is an important Sufi shrine that draws pilgrims), a district bordering Moradabad and Bijnor, with Ramganga River running through it — is a city of mango orchards and Sufi heritage. From birthday parties in the Civil Lines area to corporate cakes at the paper mills, from anniversary surprises near the Moradabad Road to student cakes at Amroha's colleges — RedHeart covers all Amroha zones: Civil Lines, Station Road, Moradabad Road, Gajraula, Hasanpur, Dhanaura, Naugawan Sadat.</p>
<p>Our Amroha cake range: Chocolate, Black Forest, Red Velvet, Mango (Amroha Dusheri/Chausa — the king of mangoes!), Butterscotch, Photo Cakes, Fondant Doab Mango-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amroha (J.P. Nagar), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Moradabad Road, Gajraula, Hasanpur, Naugawan Sadat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango (Dusheri), Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Amroha?", answer: "Yes, same-day cake delivery is available across all Amroha areas — Civil Lines, Station Road, Moradabad Road, Gajraula, and Hasanpur — for orders placed before 3 PM." },
      { question: "Do you have Dusheri / Chausa mango cake in Amroha?", answer: "Absolutely! Amroha's Ganga-Ramganga doab orchards produce some of UP's finest Dusheri and Chausa mangoes. Our mango cake uses the Dusheri variety — the sweet, fragrant king of mangoes that makes Amroha famous every summer." },
      { question: "Are eggless cakes available in Amroha?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Amroha delivery." }
    ]
  },

  "kannauj": {
    cityName: "Kannauj",
    metaTitle: "Cake Delivery in Kannauj | Perfume Capital of India UP | RedHeart",
    metaDescription: "Order cakes online in Kannauj. Same-day delivery across Kannauj. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kannauj",
    metaKeyword: "cake delivery kannauj, order cake online kannauj, birthday cake kannauj, custom cake kannauj, same day cake delivery kannauj attar perfume GI Kannauj ittar distillation ancient capital Harshavardhana Farrukhabad road",
    footerContent: `
<h2>Cake Delivery in Kannauj — India's Perfume Capital, Ancient Mahajanapada Capital, and GI-Tagged Attar's World Hub</h2>
<p>Kannauj — the headquarters of Kannauj district in Uttar Pradesh, the undisputed fragrance capital of India and one of UP's most historically significant cities (Kannauj — known in ancient times as Kanyakubja, Mahodaya, or Gadhipuri — was one of the most powerful capitals in ancient and medieval India; the city was the capital of the Gurjara-Pratihara dynasty (8th-10th century CE) at its peak, when Kannauj was the most prosperous city in northern India; the Tripartite Struggle — between the Gurjara-Pratiharas, the Palas, and the Rashtrakutas — for control of Kannauj lasted nearly 200 years and shaped Indian political history; King Harsha's capital at Kanauj in the 7th century CE was described by the Chinese pilgrim Hiuen Tsang as a magnificent city; today Kannauj is India's and one of the world's premier centres for attar (ittar) — traditional Indian perfume made by hydro-distillation of flowers, resins, and botanicals into sandalwood oil; the Kannauj attar GI tag protects the traditional Indian perfume of Kannauj; the most famous Kannauj attars are Gulab (rose), Kewda (pandanus), Motia (jasmine), and Hina (a compound attar); the deg-bhapka (copper still and receiver) distillation system is the traditional method used for Kannauj attar; there are hundreds of attar manufacturers and distillers in Kannauj; additionally, Kannauj is known for tobacco processing and the town has significant numbers of tobacco merchants; the Kali Maa temple and the ancient ghats of Kannauj on the Ganga are sacred sites) — is a city where fragrance defines identity. From birthday parties in the Civil Lines area to corporate cakes at the large attar export firms, from anniversary surprises near the Farrukhabad Road to student cakes at Kannauj's colleges — RedHeart covers all Kannauj zones: Civil Lines, Station Road, Farrukhabad Road, Agra Road, Tirwa, Gursahaiganj, Umarda.</p>
<p>Our Kannauj cake range: Chocolate, Black Forest, Red Velvet, Rose Attar (Kannauj Gulab Attar!), Kewda-Butterscotch (Pandanus attar!), Jasmine (Motia), Photo Cakes, Fondant Kannauj Attar / Ancient Capital-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kannauj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Farrukhabad Road, Agra Road, Tirwa, Gursahaiganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rose Attar Cake, Kewda-Butterscotch, Chocolate, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kannauj?", answer: "Yes, same-day cake delivery is available across all Kannauj areas — Civil Lines, Station Road, Farrukhabad Road, and Tirwa — for orders placed before 3 PM." },
      { question: "Do you have rose attar / Kannauj ittar-flavoured cake?", answer: "Yes! Kannauj — India's perfume capital with GI-tagged attar distillation tradition stretching back centuries — inspires our Rose Attar cake and Kewda-Butterscotch cake. The city's legendary fragrance heritage in every bite." },
      { question: "Are eggless cakes available in Kannauj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Rose Attar — are available in eggless variants for Kannauj delivery." }
    ]
  },

  "sheikhpura": {
    cityName: "Sheikhpura",
    metaTitle: "Cake Delivery in Sheikhpura | Bihar Small District | RedHeart",
    metaDescription: "Order cakes online in Sheikhpura. Same-day delivery across Sheikhpura. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sheikhpura",
    metaKeyword: "cake delivery sheikhpura, order cake online sheikhpura, birthday cake sheikhpura, custom cake sheikhpura, same day cake delivery sheikhpura Patna road Nawada border Gaya road paddy wheat mandi Bihar",
    footerContent: `
<h2>Cake Delivery in Sheikhpura — Bihar's Smallest District, Patna-Nawada Highway's Commercial Node, and Magadha's Northern Belt</h2>
<p>Sheikhpura — the headquarters of Sheikhpura district in Bihar, one of Bihar's smallest and most recently created districts (Sheikhpura was carved out of Munger district in 1994; it is one of the smallest districts in Bihar by area; despite its small size, Sheikhpura has a distinctly agricultural identity — the district produces paddy, wheat, maize, and vegetables in the fertile Ganga plain belt between Patna and Nawada; the Sheikhpura mandi is a significant local trading centre; the district is surrounded by Munger, Lakhisarai, Nalanda, and Nawada districts and is on the National Highway connecting Patna to Nawada-Hazaribagh; the Kiul River — a Ganga tributary — flows near Sheikhpura's eastern boundary; the district has a significant population of Kurmi and Rajput farming communities; the Sheikhpura town has a functioning BRLPS (Bihar Rural Livelihoods Promotion Society) cluster and agricultural cooperative activity), part of Bihar's historic Magadha zone (Sheikhpura lies in the ancient Magadha mahajanapada's northern agricultural belt, the region that has been continuously farmed since the Maurya period), and a district known for traditional pottery (kumhaar clay pottery) and sericulture (silk weaving at village level) — is a city of quiet agricultural productivity. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Patna Road to student cakes at Sheikhpura's colleges — RedHeart covers all Sheikhpura zones: Civil Lines, Station Road, Patna Road, Nawada Road, Ariari, Barbigha, Chewara.</p>
<p>Our Sheikhpura cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Magadha landscape-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheikhpura, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Patna Road, Nawada Road, Barbigha, Chewara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sheikhpura?", answer: "Yes, same-day cake delivery is available across all Sheikhpura areas — Civil Lines, Station Road, Patna Road, and Barbigha — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sheikhpura?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sheikhpura delivery." },
      { question: "Do you deliver midnight cakes in Sheikhpura?", answer: "Yes, midnight birthday cake delivery is available across Sheikhpura's central and residential zones." }
    ]
  },

  "lakhisarai": {
    cityName: "Lakhisarai",
    metaTitle: "Cake Delivery in Lakhisarai | Kiul Junction Bihar | RedHeart",
    metaDescription: "Order cakes online in Lakhisarai. Same-day delivery across Lakhisarai. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lakhisarai",
    metaKeyword: "cake delivery lakhisarai, order cake online lakhisarai, birthday cake lakhisarai, custom cake lakhisarai, same day cake delivery lakhisarai Kiul junction Ganga Kiu river ashram Halesia Bihar Munger road",
    footerContent: `
<h2>Cake Delivery in Lakhisarai — Kiul Railway Junction, Halvasia Ganga Ghats, and Bihar's Riverside District</h2>
<p>Lakhisarai — the headquarters of Lakhisarai district in Bihar (carved out of Munger in 1994), a district known for its strategic railway junction and Ganga riverbank heritage (Kiul — in Lakhisarai district — is one of Bihar's most important railway junctions; the Kiul Junction connects the main Howrah-Delhi Grand Chord Line with the Kiul-Jajpur branch line going into Jharkhand and the Kiul-Jamui line; for this reason Lakhisarai/Kiul is a significant junction town for rail movement in eastern Bihar; the Kiul River — which gives the junction its name — is a small Ganga tributary; the Lakhisarai district touches the Ganga bank and the Halvasia-Satsang Ashram at Lakhisarai on the Ganga bank is a significant spiritual centre founded by Sri Sri Thakur Anukulchandra's Satsang mission; the ashram draws many followers from across Bengal, Bihar, and Jharkhand; the Lakhisarai district also contains Harihar Nath temple and various Ganga ghats important for Chhath Puja; the district produces paddy, wheat, maize, and vegetables; cottage silk weaving (from the Tasar silk worm) is practised in some parts of the district) — is a city of railway connectivity and Ganga spirituality. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Munger Road to student cakes at Lakhisarai's colleges — RedHeart covers all Lakhisarai zones: Civil Lines, Kiul Junction area, Munger Road, Patna Road, Halsi, Surajgarha, Ramgarh Chowk, Barahiya.</p>
<p>Our Lakhisarai cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Ganga Ghat / Bihar landscape-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhisarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Kiul Junction, Munger Road, Patna Road, Halsi, Barahiya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lakhisarai?", answer: "Yes, same-day cake delivery is available across all Lakhisarai areas — Civil Lines, Kiul Junction, Munger Road, and Barahiya — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Lakhisarai?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Lakhisarai delivery." },
      { question: "Do you deliver midnight cakes in Lakhisarai?", answer: "Yes, midnight birthday cake delivery is available across Lakhisarai's central and residential zones." }
    ]
  },

  "arwal": {
    cityName: "Arwal",
    metaTitle: "Cake Delivery in Arwal | Bihar's Newest District | RedHeart",
    metaDescription: "Order cakes online in Arwal. Same-day delivery across Arwal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Arwal",
    metaKeyword: "cake delivery arwal, order cake online arwal, birthday cake arwal, custom cake arwal, same day cake delivery arwal Jehanabad Gaya road Patna road Son river Magadha agricultural Bihar",
    footerContent: `
<h2>Cake Delivery in Arwal — Bihar's Youngest District, Son River's Agricultural Bend, and Magadha's Central Heartland</h2>
<p>Arwal — the headquarters of Arwal district in Bihar (Bihar's youngest and smallest district, carved out of Jehanabad in 2009), a district at the heart of the ancient Magadha mahajanapada (Arwal district sits between Gaya, Jehanabad, Patna, and Rohtas districts — the very centre of ancient Magadha, the cradle of Buddhism and Jainism; the Son River — one of the Ganga's major right-bank tributaries — runs along the western edge of Arwal district, providing fertile alluvial soil for paddy, wheat, and vegetable cultivation; the region is historically associated with the Pala and Gupta empire's agricultural heartland; the Arwal massacre of 1987 — in which landless labourers were killed in a caste-based violence incident near Arwal town — is a significant historical event in Bihar's agrarian conflict history; the district has a predominantly agrarian economy with high poverty levels and ongoing efforts at rural development through BRLPS and NREGs; the Arwal Mahotsav (district cultural festival) is a recent effort to highlight the cultural identity of this new district), a district with production of paddy, wheat, maize, and pulses in the Son-Phalgu river doab — is Bihar's youngest and most agriculturally important small district. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Gaya Road to student cakes at Arwal's colleges — RedHeart covers all Arwal zones: Civil Lines, Station Road, Gaya Road, Patna Road, Kaler, Kurtha, Sonbhadra Banshi Suryapur.</p>
<p>Our Arwal cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Magadha heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arwal, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gaya Road, Patna Road, Kaler, Kurtha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Arwal?", answer: "Yes, same-day cake delivery is available across all Arwal areas — Civil Lines, Station Road, Gaya Road, and Kaler — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Arwal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Arwal delivery." },
      { question: "Do you deliver midnight cakes in Arwal?", answer: "Yes, midnight birthday cake delivery is available across Arwal's central and residential zones." }
    ]
  },

  "koraput": {
    cityName: "Koraput",
    metaTitle: "Cake Delivery in Koraput | Tribal Odisha Jeypore Coffee | RedHeart",
    metaDescription: "Order cakes online in Koraput. Same-day delivery across Koraput. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Koraput",
    metaKeyword: "cake delivery koraput, order cake online koraput, birthday cake koraput, custom cake koraput, same day cake delivery koraput Jeypore tribal coffee Kondh Bonda Andhra border Jagdalpur road Deomali",
    footerContent: `
<h2>Cake Delivery in Koraput — Koraput Black Rice & Coffee Belt, Bonda Tribal Highland, and India's Tribal Heartland</h2>
<p>Koraput — the headquarters of Koraput district in Odisha, a district of extraordinary tribal diversity, coffee cultivation, and GI agricultural produce (Koraput district is home to multiple Particularly Vulnerable Tribal Groups (PVTGs) including the Bonda (one of the most isolated and distinctive tribes in India — the Bonda women are known for their distinctive bead jewellery, short hair with multiple bead strands, and traditional attire; the Bonda Highlands in Koraput's Malkangiri-Koraput border area are one of Odisha's most ethnographically significant regions), the Kondh, the Gadaba, the Paraja, and the Didayi tribes; the Koraput-Kondhamal hill belt is one of India's most important tribal anthropology zones; Koraput is also notable for GI-tagged agricultural produce: Koraput Kalajeera Rice (a black short-grain aromatic rice with GI protection, used in tribal rituals and praised for its nutritional value), Koraput Kala Jeera Dhana (a local coriander variety), and Koraput Arabica Coffee — the high-altitude hills of Koraput (1,000-1,500 metres, including Deomali, the highest peak in Odisha at 1,672 m) produce distinctive Arabica coffee beans; the Koraput Coffee (under the Jeypore label) is being developed for specialty coffee markets; Jeypore — the commercial capital of Koraput (larger than Koraput town) — is a significant market for tribal produce), and a district where the Eastern Ghats rise to their highest altitudes (the Koraput Plateau and Deomali Hill are the headwaters of the Kolab River, the Godavari's major tributary) — is a city of tribal richness and highland coffee culture. From birthday parties in Koraput town to corporate cakes at Jeypore's trading firms, from anniversary surprises at the Deomali area to student cakes at Koraput's colleges — RedHeart covers all Koraput zones: Koraput town, Jeypore (commercial hub), Sunabeda industrial area, Damanjodi (NALCO township), Narayanpatna, Laxmipur.</p>
<p>Our Koraput cake range: Chocolate, Black Forest, Red Velvet, Coffee (Koraput Arabica!), Butterscotch, Photo Cakes, Fondant Bonda Tribal / Kalajeera Rice / Deomali Peak-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koraput, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koraput town, Jeypore, Sunabeda, Damanjodi (NALCO), Narayanpatna, Laxmipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coffee Cake, Chocolate, Bonda Tribal Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Koraput and Jeypore?", answer: "Yes, same-day cake delivery is available across all Koraput areas — Koraput town, Jeypore, Sunabeda, Damanjodi, and Narayanpatna — for orders placed before 3 PM." },
      { question: "Do you have Koraput Arabica Coffee cake?", answer: "Yes! Koraput's high-altitude hills produce distinctive Arabica coffee under the Jeypore label — our Coffee cake celebrates this highland brew that is making Koraput a specialty coffee destination." },
      { question: "Are eggless cakes available in Koraput?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coffee — are available in eggless variants for Koraput delivery." }
    ]
  },

  "boudh": {
    cityName: "Boudh",
    metaTitle: "Cake Delivery in Boudh | Mahanadi Tribal Odisha | RedHeart",
    metaDescription: "Order cakes online in Boudh. Same-day delivery across Boudh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Boudh",
    metaKeyword: "cake delivery boudh, order cake online boudh, birthday cake boudh, custom cake boudh, same day cake delivery boudh Mahanadi Kantamal Phulbani road Bolangir road tribal Khond weaving Odisha",
    footerContent: `
<h2>Cake Delivery in Boudh — Mahanadi's Scenic Meanders, Kantamal Dam, and Odisha's Tribal Weaving District</h2>
<p>Boudh — the headquarters of Boudh district in Odisha (one of the smaller districts, carved out of Phulbani/Kandhamal), a district of remarkable natural beauty and heritage along the Mahanadi (the Mahanadi River — Odisha's longest river — curves through Boudh district in scenic horseshoe meanders; the Kantamal Barrage on the Mahanadi in Boudh district controls water flow and provides irrigation; the river here is used for boat crossings in the absence of bridges; the Boudh district has some of the most scenic Mahanadi River viewpoints in Odisha; the district is covered in sal and mixed deciduous forests; the Khond and Sora tribal communities of Boudh district are known for their traditional ikat weaving — the Boudh Sambalpuri ikat sarees (though Sambalpur is more famous, Boudh district's weavers contribute to the broader western Odisha ikat tradition); the Boudh fort and the ancient Boudh zamindari estate ruins are historical landmarks; the Boudh Mahashraman Stupa in the town commemorates the Buddha's influence in the region; additionally, the Boudh-Phulbani hill country has significant bamboo and tussar silk forests), and bordering Sonepur, Bolangir, Kandhamal, and Nayagarh districts — is a city of river beauty and forest heritage. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Phulbani Road to student cakes at Boudh's colleges — RedHeart covers all Boudh zones: Civil Lines, Mahanadi Road, Phulbani Road, Bolangir Road, Kantamal, Harabhanga, Boudh town.</p>
<p>Our Boudh cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Mahanadi River / Kantamal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Boudh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Mahanadi Road, Phulbani Road, Bolangir Road, Kantamal, Harabhanga</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Boudh?", answer: "Yes, same-day cake delivery is available across all Boudh areas — Civil Lines, Mahanadi Road, Phulbani Road, and Kantamal — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Boudh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Boudh delivery." },
      { question: "Do you deliver midnight cakes in Boudh?", answer: "Yes, midnight birthday cake delivery is available across Boudh's central and residential zones." }
    ]
  },

  "sangrur": {
    cityName: "Sangrur",
    metaTitle: "Cake Delivery in Sangrur | Barnala Punjab Mandi Wheat | RedHeart",
    metaDescription: "Order cakes online in Sangrur. Same-day delivery across Sangrur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sangrur",
    metaKeyword: "cake delivery sangrur, order cake online sangrur, birthday cake sangrur, custom cake sangrur, same day cake delivery sangrur Punjab wheat paddy Malwa Lehragaga Sunam Moonak Patiala road Ludhiana road",
    footerContent: `
<h2>Cake Delivery in Sangrur — Punjab's Malwa Agricultural Belt, Sangrur Princely State Heritage, and Wheat-Paddy Mandi District</h2>
<p>Sangrur — the headquarters of Sangrur district in Punjab's Malwa region, a city of agricultural importance and princely heritage (Sangrur was the capital of the former Jind princely state — the Jind State, one of the Phulkian dynasty's states (along with Patiala and Nabha), covered parts of what is now Sangrur district; the Sangrur Fort and the Phulkian dynasty's heritage (the Phulkians were Sikh rulers descended from Phul, a 17th-century ancestor) are part of Sangrur's royal legacy; the district has Punjab's most fertile Malwa plain farmlands — Sangrur district is one of Punjab's largest wheat and paddy producing districts, with a significant concentration of grain mandis (Sunam, Lehragaga, Moonak, Malerkotla mandis are major grain trading centres); Malerkotla — a town in Sangrur district — is Punjab's only Muslim-majority town (the historic Malerkotla State, whose Nawab protested against the execution of Guru Gobind Singh's sons, was remembered by Guru Gobind Singh; Malerkotla has historically been a model of communal harmony in Punjab); Malerkotla is also known for Sharara and Farshi Pyjama cotton textile production and the Phulkari embroidery tradition; the Dhuri and Barnala (now a separate district) areas of Sangrur are important cotton and paddy markets) — is a city of Sikh heritage and Malwa farming wealth. From birthday parties in the Civil Lines area to corporate cakes at the large grain commission agents, from Lohri and Baisakhi celebration cakes to anniversary surprises near the Patiala Road — RedHeart covers all Sangrur zones: Sangrur town (Civil Lines, Station Road, Patiala Road), Sunam, Lehragaga, Moonak, Malerkotla, Dhuri, Longowal.</p>
<p>Our Sangrur cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Makki (Corn/Maize Punjab seasonal!), Photo Cakes, Fondant Malwa Wheat Fields / Phulkian Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangrur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangrur town, Civil Lines, Patiala Road, Sunam, Lehragaga, Malerkotla, Dhuri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Malwa Phulkari Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sangrur?", answer: "Yes, same-day cake delivery is available across all Sangrur areas — Sangrur town, Civil Lines, Patiala Road, Sunam, Lehragaga, and Malerkotla — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sangrur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Sangrur delivery." },
      { question: "Do you deliver midnight cakes in Sangrur?", answer: "Yes, midnight birthday cake delivery is available across Sangrur's central and residential zones." }
    ]
  },

  "nawanshahr": {
    cityName: "Nawanshahr",
    metaTitle: "Cake Delivery in Nawanshahr | SBS Nagar Punjab | RedHeart",
    metaDescription: "Order cakes online in Nawanshahr (SBS Nagar). Same-day delivery across Nawanshahr. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nawanshahr",
    metaKeyword: "cake delivery nawanshahr SBS nagar, order cake online nawanshahr, birthday cake nawanshahr, custom cake SBS nagar, same day cake delivery nawanshahr shaheed bhagat singh nagar Banga Ropar road Hoshiarpur border Doaba Punjab",
    footerContent: `
<h2>Cake Delivery in Nawanshahr — Shaheed Bhagat Singh's Doaba Homeland, Banga's Canal Colony, and Punjab's Doaba Sub-Mountain District</h2>
<p>Nawanshahr — officially Shaheed Bhagat Singh Nagar (SBS Nagar), the headquarters of SBS Nagar district in Punjab's Doaba region, a district named in honour of India's most iconic revolutionary (Shaheed Bhagat Singh was born on 28 September 1907 at Banga (now in SBS Nagar district); Bhagat Singh — the young revolutionary freedom fighter who was hanged by the British at age 23 in 1931 — is one of independent India's most beloved national heroes; the Bhagat Singh Memorial Foundation and museum at Khatkar Kalan (Bhagat Singh's ancestral village, approximately 25 km from Nawanshahr) are major patriotic pilgrimage sites; the Khatkar Kalan complex has the Bhagat Singh Ancestral House, the Bhagat Singh Memorial Museum, and the site of his well; the district was renamed from Nawanshahr to Shaheed Bhagat Singh Nagar in 2008 in his honour; the Doaba region — the land between the Beas and the Sutlej rivers — is the most Punjab-diaspora-connected region; a very high proportion of Doaba's population has relatives in UK, Canada, USA, and Italy; Nawanshahr district's fertile canal-irrigated plains produce wheat, paddy, and significant amounts of sugarcane; Banga town is the district's commercial centre; the Ropar-Nawanshahr-Hoshiarpur road corridor is an important Himalayan foothills route), and a district at the transition from Punjab's plains to the Shiwalik foothills — is a city of revolutionary heritage and Doaba community pride. From birthday parties in the Civil Lines area to corporate cakes at Banga's markets, from Lohri celebration cakes to anniversary surprises near the Ropar Road — RedHeart covers all Nawanshahr zones: Civil Lines, Station Road, Ropar Road, Banga, Khatkar Kalan, Rahon, Aur, Balacchore, Balachaur.</p>
<p>Our Nawanshahr cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Bhagat Singh / Khatkar Kalan-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawanshahr (SBS Nagar), Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Ropar Road, Banga, Khatkar Kalan, Rahon, Balachaur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bhagat Singh Tribute Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nawanshahr / SBS Nagar?", answer: "Yes, same-day cake delivery is available across all Nawanshahr areas — Civil Lines, Ropar Road, Banga, Khatkar Kalan, and Balachaur — for orders placed before 3 PM." },
      { question: "Do you have a Bhagat Singh tribute cake in Nawanshahr?", answer: "Yes! Nawanshahr (Shaheed Bhagat Singh Nagar) is named after the iconic freedom fighter who was born at Khatkar Kalan in this very district. Our Bhagat Singh Tribute fondant cake is our most patriotic design — perfect for this historically significant city." },
      { question: "Are eggless cakes available in Nawanshahr?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Nawanshahr delivery." }
    ]
  },

  "kutch": {
    cityName: "Kutch",
    metaTitle: "Cake Delivery in Kutch | Bhuj Rann Festival Gujarat | RedHeart",
    metaDescription: "Order cakes online in Kutch (Bhuj). 100% eggless pure veg cakes. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kutch",
    metaKeyword: "cake delivery kutch bhuj, order cake online kutch, birthday cake bhuj, custom cake kutch, same day cake delivery kutch bhuj Rann of Kutch Rann Utsav Prag Mahal Aina Mahal white salt desert Sindhi",
    footerContent: `
<h2>Cake Delivery in Kutch (Bhuj) — Rann of Kutch's White Salt Desert, Prag Mahal Palace, and Gujarat's Largest District — 100% Eggless, Pure Veg</h2>
<p>Kutch — India's largest district by area, with Bhuj as its headquarters, a land of extraordinary natural beauty, craft heritage, and resilient community spirit (the Rann of Kutch — the great white salt desert — is one of the world's largest salt flats and one of India's most surreal landscapes; the Rann Utsav (held annually November-February) is one of Gujarat's most celebrated tourism events, with cultural performances, craft bazaars, and the unearthly experience of a full moon night on the white salt flat; the Rann of Kutch is divided into the Great Rann and the Little Rann; the Indian Wild Ass Sanctuary in the Little Rann protects the endangered Khur (Indian Wild Ass) — one of India's rarest wildlife species; Bhuj — the district headquarters — has the Aina Mahal (Hall of Mirrors, 18th century), the Prag Mahal (Indo-Gothic palace, 19th century), and the Bhuj earthquake museum (the devastating 2001 Bhuj earthquake killed 20,000 people; Bhuj and Kutch rebuilt themselves and the reconstruction is considered one of India's most impressive post-disaster recovery stories); Kutch is renowned for its craft traditions: Kutchi embroidery (rogan art, mirror work, threadwork in intricate geometric and floral patterns), Ajrakh block printing, Bandhani tie-dye, copper bell making, pottery (Kutchi terracotta), and silver jewelry — the artisan communities of Kutch (Rabari, Ahir, Meghwal, Mutwa, Sodha Rajput) practice crafts that have been recognized internationally and many have GI protection; the Kutchi people — influenced by proximity to Sindh, Rajasthan, and the Arabian Sea trade — have a unique Kutchi language and food culture), home to the Mandvi Beach, the Narayan Sarovar pilgrimage lake, and India's only Flamingo City (the largest flamingo breeding ground in Asia is in the Rann of Kutch). All cakes in Kutch are 100% eggless and pure vegetarian — served with deep respect for the Kutchi community's vegetarian values.</p>
<p>Our Kutch cake range: Pure Veg Chocolate, Black Forest, Red Velvet, Mango (Kesar!), Chikoo, Butterscotch, Photo Cakes, Fondant Rann of Kutch / Prag Mahal / Kutchi Embroidery-theme cakes. 100% Eggless. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kutch (Bhuj), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhuj city, Rann area, Mandvi, Anjar, Bhachau, Gandhidham, Adipur, Rapar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cake type</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% Eggless, Pure Veg (all cakes)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar Mango, Chocolate, Rann of Kutch Fondant, Chikoo, Black Forest, Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Kutch / Bhuj 100% eggless?", answer: "Yes! All cakes delivered in Kutch (Bhuj) are 100% eggless and pure vegetarian, in keeping with the deeply vegetarian values of the Kutchi community. No eggs, no compromise on taste." },
      { question: "Can I get same-day cake delivery in Kutch / Bhuj?", answer: "Yes, same-day cake delivery is available across all Kutch areas — Bhuj city, Gandhidham, Adipur, Mandvi, Anjar, and Bhachau — for orders placed before 3 PM." },
      { question: "Do you have Rann of Kutch / Kutchi Embroidery-themed cakes?", answer: "Yes! The Rann of Kutch's ethereal white salt desert (and the Rann Utsav festival) and Kutch's world-famous mirror embroidery and Ajrakh block print craft inspire our Rann of Kutch and Kutchi Embroidery fondant cakes — a true celebration of this extraordinary district." }
    ]
  },

  "nagarkurnool": {
    cityName: "Nagarkurnool",
    metaTitle: "Cake Delivery in Nagarkurnool | Srisailam Buffer Telangana | RedHeart",
    metaDescription: "Order cakes online in Nagarkurnool. Same-day delivery across Nagarkurnool. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nagarkurnool",
    metaKeyword: "cake delivery nagarkurnool, order cake online nagarkurnool, birthday cake nagarkurnool, custom cake nagarkurnool, same day cake delivery nagarkurnool Srisailam Tiger Reserve buffer zone Mahabubnagar road Krishna river",
    footerContent: `
<h2>Cake Delivery in Nagarkurnool — Srisailam Tiger Reserve's Buffer Zone, Nagarjunasagar-Srisailam Wilderness, and Telangana's New Southern District</h2>
<p>Nagarkurnool — the headquarters of Nagarkurnool district in Telangana (a new district carved out of Mahbubnagar in 2016), a district bordering one of India's largest wildlife reserves (the Nagarjunasagar-Srisailam Tiger Reserve — spanning approximately 3,568 sq km across Telangana and Andhra Pradesh — is one of India's largest tiger reserves; the Nagarkurnool district contains the buffer zone of this reserve; the Srisailam Dam — one of the largest hydroelectric dams in India — is just across the Krishna River from Nagarkurnool district, in the Kurnool side; the Srisailam Jyotirlinga temple (one of India's 12 Jyotirlingas and a major Shaivite pilgrimage site) is accessible from Nagarkurnool; the Krishna River gorge at the Srisailam reservoir is one of Telangana-Andhra's most scenic landscapes; the forests of Nagarkurnool district are home to tigers, leopards, wild boar, sambar, and the endangered Indian pangolin; the Amrabad Plateau in Nagarkurnool is the highest plateau in Telangana at 900 metres and has a cold microclimate unique in this region), an agricultural district producing cotton, turmeric, and red sorghum (jowar) in the Deccan's deep black soil, and a district with the Somasila-Nalgonda road corridor — is a city of tiger reserve proximity and Krishna River dam pilgrimage. From birthday parties in the Civil Lines area to corporate cakes at government offices, from Shivaratri celebration cakes (for Srisailam) to anniversary surprises near the Mahbubnagar Road — RedHeart covers all Nagarkurnool zones: Civil Lines, Station Road, Mahbubnagar Road, Hyderabad Road, Kollapur, Achampet, Alampur, Wanaparthy border.</p>
<p>Our Nagarkurnool cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Srisailam Dam / Tiger Reserve-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagarkurnool, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Mahbubnagar Road, Kollapur, Achampet, Alampur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Srisailam Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nagarkurnool?", answer: "Yes, same-day cake delivery is available across all Nagarkurnool areas — Civil Lines, Station Road, Mahbubnagar Road, and Kollapur — for orders placed before 3 PM." },
      { question: "Do you have Srisailam / Tiger Reserve-themed cakes in Nagarkurnool?", answer: "Yes! The Nagarjunasagar-Srisailam Tiger Reserve (one of India's largest) and the Srisailam Jyotirlinga — one of India's 12 most sacred Shiva temples — inspire our Srisailam Dam and Tiger Reserve fondant cakes." },
      { question: "Are eggless cakes available in Nagarkurnool?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nagarkurnool delivery." }
    ]
  },

  "mokokchung": {
    cityName: "Mokokchung",
    metaTitle: "Cake Delivery in Mokokchung | Ao Naga Nagaland | RedHeart",
    metaDescription: "Order cakes online in Mokokchung. Same-day delivery across Mokokchung. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mokokchung",
    metaKeyword: "cake delivery mokokchung, order cake online mokokchung, birthday cake mokokchung, custom cake mokokchung, same day cake delivery mokokchung Ao Naga tribe Moatsu festival Nagaland hill station Kohima road Assam border",
    footerContent: `
<h2>Cake Delivery in Mokokchung — Ao Naga Heartland, Moatsu Mong Festival Capital, and Nagaland's Educational and Cultural Hub</h2>
<p>Mokokchung — the headquarters of Mokokchung district in Nagaland, widely considered Nagaland's most socially advanced and educationally progressive town (Mokokchung is the historical and cultural centre of the Ao Naga people — one of Nagaland's largest and most prominent tribes; the Ao Nagas were among the first Naga communities to adopt Christianity (through American Baptist missionaries in the late 19th century) and education; the Baptist Church of the Ao Nagas is one of the most important institutions in this region; Mokokchung has the highest literacy rate in Nagaland and some of the state's best schools and colleges; the city is sometimes called the "cultural capital" of Nagaland; the Moatsu Mong — the Ao Naga's most important festival, held in May after the sowing season — is celebrated with traditional songs, Naga rice beer (Zu), warrior dances, and community feasting at Ungma (one of the oldest and largest Ao Naga villages, 3 km from Mokokchung town, with traditional morung (bachelor's dormitory) architecture and a heritage village feel); the Longkhum village viewpoint offers panoramic views of the Nagaland hills; Mokokchung's traditional Ao cuisine includes smoked pork, bamboo shoot dishes, anishi (fermented yam leaves), galho (rice-vegetable-pork soup), and fresh river fish from the Dikhu River), and a hill town at 1,325 metres with pleasant climate — is Nagaland's most culturally proud small city. From birthday parties in Mokokchung town to celebration cakes for Moatsu Mong, from anniversary surprises to student cakes at the many local colleges — RedHeart covers all Mokokchung zones: Mokokchung town, Ungma village, Longkhum, Changtia, Tuli, Chuchuyimlang.</p>
<p>Our Mokokchung cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Ao Naga / Moatsu Festival / Ungma Village-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mokokchung, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">1,325 metres</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mokokchung town, Ungma village, Longkhum, Changtia, Tuli, Chuchuyimlang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ao Naga Moatsu Fondant, Black Forest, Photo Cake, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mokokchung?", answer: "Yes, same-day cake delivery is available across all Mokokchung areas — Mokokchung town, Ungma village, Longkhum, and Tuli — for orders placed before 3 PM." },
      { question: "Do you have Ao Naga / Moatsu Festival-themed cakes in Mokokchung?", answer: "Yes! The Moatsu Mong — the Ao Naga people's most beloved post-sowing festival with warrior dances, traditional songs, and community feasting at Ungma village — and the Ao Naga tribal heritage inspire our Moatsu fondant cakes." },
      { question: "Are eggless cakes available in Mokokchung?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Mokokchung delivery." }
    ]
  },

  "bomdila": {
    cityName: "Bomdila",
    metaTitle: "Cake Delivery in Bomdila | Tawang Gateway Arunachal | RedHeart",
    metaDescription: "Order cakes online in Bomdila. Same-day delivery across Bomdila. Birthday capes from ₹499.",
    h1: "Online Cake Delivery in Bomdila",
    metaKeyword: "cake delivery bomdila, order cake online bomdila, birthday cake bomdila, custom cake bomdila, same day cake delivery bomdila Tawang gateway West Kameng Arunachal Pradesh apple orchards Sela pass Monpa Sherdukpen Buddhist",
    footerContent: `
<h2>Cake Delivery in Bomdila — Gateway to Tawang, Apple Orchards of Arunachal, and West Kameng's Tibetan Buddhist Hill Town</h2>
<p>Bomdila — the headquarters of West Kameng district in Arunachal Pradesh, a hill town at 2,415 metres that is the primary gateway town on the road to Tawang (Bomdila is the last significant town on the Tewang Highway (NH-13) before the road climbs through Sela Pass (4,170 metres) to reach Tawang; almost all travellers to Tawang stop at Bomdila for acclimatisation, permits, and rest; the town has a pleasant hill station character with apple orchards, pine forests, and crisp mountain air; Bomdila itself has the Bomdila Gompa (Tibetan Buddhist monastery) of the Gelugpa sect — the same tradition as the Tawang Monastery; the Monpa and Sherdukpen tribes are the indigenous communities of West Kameng district; the Monpa practice Tibetan Buddhism and their cultural life — Losar (Tibetan New Year), Torgya festival, Chockling festival — is similar to Tawang's Monpa community; the Sherdukpen people of the Rupa area (near Bomdila) are unique in practising a syncretic religion blending Buddhism with animism and are known for their distinctive masks used in Popi dance festivals; the Tipi Orchid Research and Development Centre, 31 km from Bomdila on the Assam border, is India's largest orchid research centre with 10,000+ species), famous for apple orchards (the West Kameng hills — 1,500-2,500 metres — are ideal for apple cultivation; Bomdila apples, Arunachal kiwi, and cardamom are the hill district's prized produces), and a town where Arunachal's diverse tribal cultures meet the Tibetan cultural zone — is a scenic Himalayan gateway town. From birthday parties in Bomdila to army officers' celebration cakes, from Losar celebration cakes to anniversary surprises near the Monastery Road — RedHeart covers all Bomdila zones: Bomdila town (Upper Market, Lower Market, Monastery Road), Rupa, Tenga, Dirang (en route Sela), Tipi, Bhalukpong.</p>
<p>Our Bomdila cake range: Chocolate, Black Forest, Red Velvet, Apple (Bomdila Hill Apple!), Butterscotch, Photo Cakes, Fondant Bomdila Gompa / Sela Pass-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bomdila, Arunachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">2,415 metres</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bomdila town, Upper/Lower Market, Monastery Road, Rupa, Tenga, Dirang, Tipi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple Cake, Chocolate, Bomdila Gompa Fondant, Black Forest, Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bomdila?", answer: "Yes, same-day cake delivery is available across all Bomdila areas — Bomdila town, Upper and Lower Market, Monastery Road, Rupa, Tenga, and Dirang — for orders placed before 3 PM." },
      { question: "Do you have Bomdila Hill Apple cake?", answer: "Yes! Bomdila's high-altitude orchards at 2,415 metres produce crisp, sweet Arunachal hill apples. Our Apple cake is the most local flavour we can offer for a Bomdila birthday." },
      { question: "Are eggless cakes available in Bomdila?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple — are available in eggless variants for Bomdila delivery." }
    ]
  },

  "kangra": {
    cityName: "Kangra",
    metaTitle: "Cake Delivery in Kangra | Dharamsala Dhauladhar HP | RedHeart",
    metaDescription: "Order cakes online in Kangra. Same-day delivery across Kangra and Dharamsala. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kangra",
    metaKeyword: "cake delivery kangra, order cake online kangra, birthday cake kangra dharamsala, custom cake kangra, same day cake delivery kangra Dharamsala Dalai Lama McLeod Ganj Kangra Fort Brajeshwari Devi temple Dhauladhar",
    footerContent: `
<h2>Cake Delivery in Kangra — Dalai Lama's Dharamsala, Kangra Fort's Medieval Grandeur, and Dhauladhar's Tea and Himalayan Heritage</h2>
<p>Kangra — the headquarters of Kangra district in Himachal Pradesh (though Dharamsala is the district's most famous city), a district of extraordinary cultural and natural wealth (Kangra district is one of India's most culturally layered districts: Dharamsala — the seat of the Tibetan government-in-exile and the residence of the 14th Dalai Lama since 1960 — is Kangra district's most famous town; McLeodGanj (upper Dharamsala) is a global Tibetan Buddhism centre drawing spiritual seekers, tourists, trekkers, and researchers from around the world; the Namgyal Monastery, Tsuglagkhang Complex, and the Library of Tibetan Works and Archives are globally significant Tibetan cultural institutions; Kangra town itself has the Kangra Fort — one of the oldest and largest forts in the Himalayas, dating back at least 1,500 years and mentioned in the Mahabharata; the fort was raided by Mahmud of Ghazni (1009 CE) and later held by the Katoch dynasty (one of India's oldest royal lineages, with 500+ generations); the Brajeshwari Devi Temple at Kangra town (Vajreshwari) is one of the 51 Shakti Peethas and one of the most important goddess temples in the western Himalaya; the Kangra miniature painting tradition — characterised by lyrical depictions of Krishna Leela and the Baramasa cycle — is one of India's great classical painting schools with a GI tag; additionally, Kangra district produces Kangra Tea — a high-altitude green and black tea grown in the Dhauladhar foothills (900-1,400 metres) with GI protection and a distinctive flavour; the district is also close to the Dhauladhar Wildlife Sanctuary and is the base for Triund, Indrahar Pass, and Chamba treks) — is a district of Himalayan heritage, Tibetan culture, and mountain wellness. From birthday parties near McLeodGanj cafes to corporate cakes at Dharamsala's hotels, from Losar cakes to anniversary surprises near the Kangra Fort — RedHeart covers all Kangra zones: Dharamsala, McLeodGanj, Kangra town, Palampur, Nurpur, Baijnath, Jogindernagar, Nagrota Bagwan, Shahpur.</p>
<p>Our Kangra cake range: Chocolate, Black Forest, Red Velvet, Kangra Tea (high-altitude green tea!), Apple (HP apple!), Butterscotch, Photo Cakes, Fondant Kangra Fort / Dalai Lama Dharamsala-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kangra, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharamsala, McLeodGanj, Kangra town, Palampur, Nurpur, Baijnath, Jogindernagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kangra Tea Cake, Apple, Chocolate, Kangra Fort Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kangra / Dharamsala / McLeodGanj?", answer: "Yes, same-day cake delivery is available across all Kangra areas — Dharamsala, McLeodGanj, Kangra town, Palampur, and Baijnath — for orders placed before 3 PM." },
      { question: "Do you have Kangra Tea cake and Kangra Fort-themed cakes?", answer: "Yes! Kangra's GI-tagged high-altitude tea (one of India's finest green teas) and the majestic 1,500-year-old Kangra Fort inspire our Kangra Tea cake and Kangra Fort fondant cakes — the most distinctively local flavours and designs for this incredible district." },
      { question: "Are eggless cakes available in Kangra?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Kangra Tea, Apple — are available in eggless variants for Kangra delivery." }
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
