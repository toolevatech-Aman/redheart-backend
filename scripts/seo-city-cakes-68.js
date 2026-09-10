// Cakes Batch 68 — 12 cities
// Rajasthan: Karauli, Sawai Madhopur, Tonk, Rajsamand
// MP: Mandla, Chhindwara, Seoni, Betul
// Gujarat: Chhota Udaipur, Narmada (Rajpipla), Tapi (Vyara), Dahod

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "karauli": {
    cityName: "Karauli",
    metaTitle: "Cake Delivery in Karauli | Rajasthan Karauli Temple Red Stone Chambal Madan Mohan | RedHeart",
    metaDescription: "Order cakes online in Karauli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karauli",
    metaKeyword: "cake delivery karauli, order cake online karauli, birthday cake karauli, custom cake karauli, same day cake delivery Karauli Rajasthan Karauli Temple Madan Mohan Chambal red stone Meena tribe Hindaun",
    footerContent: `
<h2>Cake Delivery in Karauli — Karauli Shri Madan Mohanji Temple, Red Stone Architecture, and Chambal River Heritage</h2>
<p>Karauli — the district headquarters of Karauli district in Rajasthan (eastern Rajasthan; Chambal River; MP border), a walled city famous for its distinctive red sandstone architecture and a famous Krishna temple (the Karauli Shri Madan Mohanji Temple (the Karauli Shri Madan Mohanji Temple — one of the important Vaishnava temples of Rajasthan; dedicated to Lord Krishna in the Madan Mohan form; the temple is in the old city of Karauli; the Karauli royal family (Yadav Rajputs) was the ruling dynasty of the Karauli princely state; the Karauli maharajas were devoted patrons of this Krishna temple; the Karauli darbar (palace complex) has fine red stone architecture; the Karauli City Palace with its carved red sandstone havelis and temples; Karauli's bazaars and architecture are renowned for their distinctive "Karauli red" sandstone); the Chambal River (the Chambal forms the Karauli-MP border; the Chambal River valley with its ravines — the chambal beehads — is a historic terrain; the Chambal flows east through Karauli); the Meena tribe (Karauli district has a significant Meena tribal population — the Meenas are one of Rajasthan's major tribes, historically forest-dwelling and agricultural; the Meena traditional festivals and customs); the Hindaun area (Hindaun City — in Karauli district; a commercial centre), and a city of Karauli Madan-Mohan-Krishna-temple and red-stone-Chambal — is Rajasthan's most Karauli-Madan-Mohan-Vaishnava-temple and red-sandstone-Chambal Karauli. From birthday parties in Karauli to celebration cakes — RedHeart covers all areas: Karauli city, Hindaun City, Sapotra, Shri Mahaveerji, Nadoti, Todabhim.</p>
<p>Our Karauli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karauli, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karauli city, Hindaun City, Sapotra, Shri Mahaveerji, Nadoti</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karauli?", answer: "Yes, same-day cake delivery is available across Karauli city, Hindaun City, Sapotra, and Shri Mahaveerji for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Karauli?", answer: "Yes, all flavours are available in eggless variants for Karauli delivery." },
      { question: "Do you deliver midnight cakes in Karauli?", answer: "Yes, midnight birthday cake delivery is available across Karauli city zones." }
    ]
  },

  "sawai-madhopur": {
    cityName: "Sawai Madhopur",
    metaTitle: "Cake Delivery in Sawai Madhopur | Ranthambore Tiger Reserve Rajasthan Chambal | RedHeart",
    metaDescription: "Order cakes online in Sawai Madhopur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sawai Madhopur",
    metaKeyword: "cake delivery sawai madhopur, order cake online sawai madhopur, birthday cake sawai madhopur, custom cake sawai madhopur, same day cake delivery Sawai Madhopur Rajasthan Ranthambore Tiger Reserve Ganesh temple Chambal Banas",
    footerContent: `
<h2>Cake Delivery in Sawai Madhopur — Ranthambore Tiger Reserve, Trinetra Ganesh Temple, and Chambal-Banas Confluence</h2>
<p>Sawai Madhopur — the district headquarters of Sawai Madhopur district in Rajasthan (eastern Rajasthan; Chambal-Banas rivers; Ranthambore Forest), the gateway to India's most famous tiger reserve (the Ranthambore National Park and Tiger Reserve (Ranthambore Tiger Reserve — one of India's most popular and photographed tiger habitats; established as Project Tiger Reserve in 1973; the reserve is notable for tigers that are often seen in the open, particularly near water bodies — unlike many other reserves; the Ranthambore tigers (especially females like Machhli / T-16 — called "Lady of the Lakes" — who was photographed more than any other wild tiger in the world) became iconic; the Ranthambore Fort (a UNESCO World Heritage Site as part of the Hill Forts of Rajasthan 2013) is inside the tiger reserve — making it one of the few places where a medieval fort coexists with tigers; the Jogi Mahal rest house on the lakeside; the Padam Talao, Raj Bagh Talao, Milak Talao inside the reserve); the Trinetra Ganesh Temple at Ranthambore (the Trinetra Ganesh Temple — inside the Ranthambore Fort within the Tiger Reserve; one of the few Ganesh temples with three eyes; the temple draws thousands of pilgrims who are allowed inside the reserve for this purpose; letters from across the world are addressed to "Shri Trinetra Ganesh"); the Chambal-Banas confluence (the Chambal and Banas rivers meet near Sawai Madhopur), and a city of Ranthambore Tiger Reserve-Machhli-most-photographed-tiger and Trinetra-Ganesh-inside-tiger-reserve — is Rajasthan's most Ranthambore-Tiger-Reserve-Machhli and Trinetra-Ganesh-Fort Sawai Madhopur. From birthday parties in Sawai Madhopur to celebration cakes — RedHeart covers all areas: Sawai Madhopur city, Gangapur City, Wazirpur, Bonli, Bamanwas, Khandar.</p>
<p>Our Sawai Madhopur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sawai Madhopur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sawai Madhopur city, Gangapur City, Wazirpur, Bonli, Bamanwas, Khandar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sawai Madhopur?", answer: "Yes, same-day cake delivery is available across Sawai Madhopur city, Gangapur City, Wazirpur, Bonli, and Khandar for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sawai Madhopur?", answer: "Yes, all flavours are available in eggless variants for Sawai Madhopur delivery." },
      { question: "Do you deliver midnight cakes in Sawai Madhopur?", answer: "Yes, midnight birthday cake delivery is available across Sawai Madhopur city zones." }
    ]
  },

  "tonk": {
    cityName: "Tonk",
    metaTitle: "Cake Delivery in Tonk | Rajasthan Nawabi Heritage Arabic Manuscripts Bisalpur Dam | RedHeart",
    metaDescription: "Order cakes online in Tonk. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tonk",
    metaKeyword: "cake delivery tonk, order cake online tonk, birthday cake tonk, custom cake tonk, same day cake delivery Tonk Rajasthan Nawabi Amir Khan Bisalpur Dam Banas River Arabic manuscript Arabic Sunheri Kothi",
    footerContent: `
<h2>Cake Delivery in Tonk — Nawabi Heritage (Sunheri Kothi), Bisalpur Dam, and India's Only Muslim Princely State in Rajputana</h2>
<p>Tonk — the district headquarters of Tonk district in Rajasthan (central Rajasthan; Banas River), the former seat of the only Muslim princely state in Rajputana — a unique composite heritage city (the Tonk Nawabi Heritage (Tonk — founded in 1817 CE by Amir Khan Pindari, a Pathan adventurer-commander who was granted the territory by the British as the Nawab of Tonk; Tonk was the only Muslim-ruled princely state in Rajputana; the Sunheri Kothi (Golden Mansion) — the most extravagant palace of Tonk; its interior is decorated with mirrors, glass tiles, and gold paint — one of Rajasthan's most ornate interiors; the Tonk Nawabs were great patrons of Islamic art, literature, and architecture; the Arabic and Persian Manuscripts Library (Maulana Abul Kalam Azad Arabic and Persian Research Institute — Tonk houses one of India's finest collections of Arabic and Persian manuscripts; the Institute has over 3 lakh manuscripts; Tonk is a centre of Islamic learning and manuscript tradition); the Bisalpur Dam (Bisalpur Dam — on the Banas River near Tonk; the Bisalpur Reservoir is one of Rajasthan's largest; it supplies water to Jaipur, Ajmer, and Tonk; the Bisalpur area is the water lifeline of central Rajasthan; the Bisalpur temple — a pilgrimage site near the dam)), and a city of Sunheri-Kothi Nawabi-Tonk and Bisalpur-Dam Banas-water-lifeline — is Rajasthan's most Tonk-Nawabi-Sunheri-Kothi and Bisalpur-Dam-Banas Tonk. From birthday parties in Tonk to celebration cakes — RedHeart covers all areas: Tonk city, Malpura, Uniara, Deoli, Niwai, Todaraisingh.</p>
<p>Our Tonk cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tonk, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tonk city, Malpura, Uniara, Deoli, Niwai, Todaraisingh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tonk?", answer: "Yes, same-day cake delivery is available across Tonk city, Malpura, Uniara, Deoli, Niwai, and Todaraisingh for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tonk?", answer: "Yes, all flavours are available in eggless variants for Tonk delivery." },
      { question: "Do you deliver midnight cakes in Tonk?", answer: "Yes, midnight birthday cake delivery is available across Tonk city zones." }
    ]
  },

  "rajsamand": {
    cityName: "Rajsamand",
    metaTitle: "Cake Delivery in Rajsamand | Rajasthan Rajsamand Lake Marble Nathdwara Srinathji | RedHeart",
    metaDescription: "Order cakes online in Rajsamand. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rajsamand",
    metaKeyword: "cake delivery rajsamand, order cake online rajsamand, birthday cake rajsamand, custom cake rajsamand, same day cake delivery Rajsamand Rajasthan Rajsamand Lake Nathdwara Srinathji Marble industry Pichwai Kankroli",
    footerContent: `
<h2>Cake Delivery in Rajsamand — Nathdwara Srinathji Temple, Rajsamand Lake (17th CE), and Marble Capital of India</h2>
<p>Rajsamand — the district headquarters of Rajsamand district in Rajasthan (southern Rajasthan; Udaipur adjacent; Aravalli range), a district containing India's most celebrated Pushti Marg Vaishnava temple and one of the world's largest artificial lakes (the Nathdwara Srinathji Temple (Nathdwara — in Rajsamand district; approximately 48 km from Udaipur; the Nathdwara Srinathji Temple is the most important temple of the Pushti Marg (Vallabhacharya sampraday) / Vaishnava tradition; the idol of Srinathji — a form of Lord Krishna — was brought from Mathura (Vrindavan) in 1669 CE to protect it from Aurangzeb's iconoclasm; the priests carrying the idol stopped at Nathdwara when the cart wheels sank into the earth — interpreted as a divine signal to install the idol here; the Srinathji idol has one arm raised holding a mountain — representing the Govardhan legend; the temple receives lakhs of pilgrims daily; the Pichwai paintings — created specifically for Nathdwara — are a famous school of temple art); the Rajsamand Lake (Rajsamand Lake — built by Maharana Raj Singh of Mewar (1662-1676 CE); one of the largest artificial lakes in Asia when built; the Nauchowki embankment has the Raj Prashasti — a 25-slab marble inscription recording the history of Mewar — the longest stone inscription in the world); the Marble Industry (Rajsamand district is the centre of India's marble industry; the Rajsamand-Nagaur belt produces most of India's marble; the Makrana marble — used in the Taj Mahal — comes from nearby Nagaur; the Rajsamand marble quarries and processing units are major employers), and a city of Nathdwara Srinathji Pushti-Marg-1669 and Rajsamand-Lake-Raj-Prashasti and Marble-Capital — is Rajasthan's most Nathdwara-Srinathji-Pushti-Marg and Raj-Prashasti-longest-stone-inscription Rajsamand. From birthday parties in Rajsamand to celebration cakes — RedHeart covers all areas: Rajsamand city, Nathdwara, Kankroli, Railmagra, Devgarh (Rajsamand), Bhim (Rajsamand).</p>
<p>Our Rajsamand cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajsamand, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajsamand city, Nathdwara, Kankroli, Railmagra, Devgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rajsamand?", answer: "Yes, same-day cake delivery is available across Rajsamand city, Nathdwara, Kankroli, Railmagra, and Devgarh for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Rajsamand?", answer: "Yes, all flavours are available in eggless variants for Rajsamand delivery." },
      { question: "Do you deliver midnight cakes in Rajsamand / Nathdwara?", answer: "Yes, midnight birthday cake delivery is available across Rajsamand city and Nathdwara zones." }
    ]
  },

  "mandla": {
    cityName: "Mandla",
    metaTitle: "Cake Delivery in Mandla | MP Kanha Tiger Narmada Gond Jabalpur Ramnagar | RedHeart",
    metaDescription: "Order cakes online in Mandla. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mandla",
    metaKeyword: "cake delivery mandla, order cake online mandla, birthday cake mandla, custom cake mandla, same day cake delivery Mandla MP Kanha Tiger Reserve Narmada loop Gond tribe Shankargarh Bichhiya Ramnagar",
    footerContent: `
<h2>Cake Delivery in Mandla — Kanha Tiger Reserve Gateway, Narmada River Loop, and Gond Tribal Heartland</h2>
<p>Mandla — the district headquarters of Mandla district in Madhya Pradesh (eastern MP; Narmada River; adjacent to Kanha Tiger Reserve), a scenic forest district where the Narmada makes a dramatic U-loop and tigers roam (the Kanha Tiger Reserve / National Park (Kanha National Park — in Mandla and Balaghat districts; one of India's finest tiger reserves; established as a national park in 1955; Project Tiger reserve since 1973; the Kanha meadows are famous for the largest populations of barasingha (swamp deer) — the state animal of MP; the swamp deer / hard-ground barasingha was brought back from the brink of extinction in Kanha; Kanha's tigers are among India's most photographed; the Banjar and Halon rivers flow through Kanha; Rudyard Kipling's "The Jungle Book" was partly inspired by the forests of this region; the Kipling Camp at Kanha; the Kanha Museum); the Narmada River Loop (the Narmada River makes a dramatic U-shaped loop near Mandla town; the town of Mandla sits in this bend of the Narmada; the Narmada's meander creates a natural moat-like feature around the old Gond fort of Mandla; the Narmada Parikrama begins/passes through this area); the Gond Kings of Mandla (Mandla was the capital of the Gond Rajas of Garha-Mandla (the Chandela-Gond kingdom) — the Gond queen Rani Durgavati fought the Mughals here; Rani Durgavati is celebrated as a Veerangana heroine of MP), and a city of Kanha Tiger barasingha-rescued and Narmada-U-loop Gond-Rani-Durgavati — is MP's most Kanha-Tiger-barasingha-rescued and Narmada-loop-Gond-Rani-Durgavati Mandla. From birthday parties in Mandla to celebration cakes — RedHeart covers all areas: Mandla city, Nainpur, Bichhiya, Ghugri, Mawai, Ramnagar (Kanha).</p>
<p>Our Mandla cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandla, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandla city, Nainpur, Bichhiya, Ghugri, Mawai, Ramnagar (Kanha)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mandla?", answer: "Yes, same-day cake delivery is available across Mandla city, Nainpur, Bichhiya, Ghugri, and Ramnagar for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mandla?", answer: "Yes, all flavours are available in eggless variants for Mandla delivery." },
      { question: "Do you deliver midnight cakes in Mandla?", answer: "Yes, midnight birthday cake delivery is available across Mandla city zones." }
    ]
  },

  "chhindwara": {
    cityName: "Chhindwara",
    metaTitle: "Cake Delivery in Chhindwara | MP Pench Tiger Reserve Kamal Nath Satpura Coal | RedHeart",
    metaDescription: "Order cakes online in Chhindwara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chhindwara",
    metaKeyword: "cake delivery chhindwara, order cake online chhindwara, birthday cake chhindwara, custom cake chhindwara, same day cake delivery Chhindwara MP Pench Tiger Reserve Satpura coal Kamal Nath Tamia Patalkot valley Gond",
    footerContent: `
<h2>Cake Delivery in Chhindwara — Pench Tiger Reserve, Patalkot Valley, and Satpura's Coal & Forest Belt</h2>
<p>Chhindwara — the district headquarters of Chhindwara district in Madhya Pradesh (central MP; Satpura ranges; Maharashtra border), MP's largest district by area and one of its most diverse — forests, coal, and wildlife (the Pench Tiger Reserve (Pench National Park — partly in Chhindwara district, partly in Seoni; the Pench National Park was the inspiration for Rudyard Kipling's "The Jungle Book" — the Pench River flows through the forest where Kipling's story is set; the Pench Tiger Reserve has tigers, leopards, wild dogs, gaur, and the wolf (Indian wolf); established as national park 1977; the Pench Tiger Reserve was where the famous "Collarwali" tigress (T-15) — most prolific tigress in India with 29 cubs over her lifetime — lived and was studied); the Patalkot Valley (Patalkot — a 79-meter-deep horseshoe-shaped valley in the Tamia area of Chhindwara district; the valley was almost inaccessible until recently; the Bharia tribe — a PVTG — live in Patalkot; the valley has unique medicinal plants and biodiversity; called "Patalkot" because it is so deep it seems to reach the underworld; a major ecotourism destination in MP); the Coal Industry (Chhindwara district has coal deposits — the Chhindwara coalfields are part of the Satpura-Gondwana coalfield; the Western Coalfields Limited operates mines here), and a city of Pench Tiger Reserve Jungle-Book-Collarwali and Patalkot-deep-valley-Bharia-PVTG — is MP's most Pench-Tiger-Jungle-Book-Collarwali and Patalkot-79m-deep-Bharia Chhindwara. From birthday parties in Chhindwara to celebration cakes — RedHeart covers all areas: Chhindwara city, Parasia, Sausar, Pandhurna, Amarwara, Tamia.</p>
<p>Our Chhindwara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhindwara, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhindwara city, Parasia, Sausar, Pandhurna, Amarwara, Tamia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chhindwara?", answer: "Yes, same-day cake delivery is available across Chhindwara city, Parasia, Sausar, Pandhurna, and Amarwara for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chhindwara?", answer: "Yes, all flavours are available in eggless variants for Chhindwara delivery." },
      { question: "Do you deliver midnight cakes in Chhindwara?", answer: "Yes, midnight birthday cake delivery is available across Chhindwara city zones." }
    ]
  },

  "seoni": {
    cityName: "Seoni",
    metaTitle: "Cake Delivery in Seoni | MP Pench Tiger Jungle Book Mowgli Wolf Pack Wainganga | RedHeart",
    metaDescription: "Order cakes online in Seoni. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Seoni",
    metaKeyword: "cake delivery seoni, order cake online seoni, birthday cake seoni, custom cake seoni, same day cake delivery Seoni MP Pench Tiger Reserve Jungle Book Mowgli wolf pack Wainganga River Gond tribe",
    footerContent: `
<h2>Cake Delivery in Seoni — Pench Tiger Reserve (The Real "Jungle Book"), Wainganga River, and Mowgli's Forest</h2>
<p>Seoni — the district headquarters of Seoni district in Madhya Pradesh (eastern-central MP; Wainganga River; Maharashtra border), the district most directly associated with Rudyard Kipling's "The Jungle Book" (the Pench Tiger Reserve and Jungle Book Connection (Pench National Park — partly in Seoni district, partly in Chhindwara; the Seoni forests — particularly the areas around Khurai and the Pench River valley — are the setting for Rudyard Kipling's "The Jungle Book" (1894); Kipling himself never visited Seoni but used the district's name in his stories — "the Seeonee wolf pack" and Mowgli's home; the hills, forests, and wolves (Indian wolf — Canis lupus pallipes) of Seoni match Kipling's descriptions; the Pench Tiger Reserve has tigers, leopards, wild dogs (dholes — Kipling's "Red Dog" / Tabaqui's enemies), sloth bears, sambar, gaur; the Kipling country in Seoni is marked; the "Collarwali" tigress lived in the Pench-Seoni area; the Pench Reservoir is an attraction); the Wainganga River (the Wainganga — a major Godavari tributary — flows through Seoni district; the Wainganga is a major river of MP-Maharashtra; Pench is a Wainganga tributary; the Seoni Wainganga valley is forested and scenic); the Gond tribal heritage (Seoni has a significant Gond tribal population — the historical Gond kingdoms of Gondwana covered this region), and a city of Pench Tiger Real-Jungle-Book Seoni-wolf-pack-Mowgli and Wainganga — is MP's most Seoni-Jungle-Book-Mowgli-wolf-pack and Pench-Tiger-Wainganga Seoni. From birthday parties in Seoni to celebration cakes — RedHeart covers all areas: Seoni city, Lakhnadon, Barrister Bhata, Chhapara, Keolari, Barghat.</p>
<p>Our Seoni cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Seoni, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Seoni city, Lakhnadon, Chhapara, Keolari, Barghat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Seoni?", answer: "Yes, same-day cake delivery is available across Seoni city, Lakhnadon, Chhapara, Keolari, and Barghat for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Seoni?", answer: "Yes, all flavours are available in eggless variants for Seoni delivery." },
      { question: "Do you deliver midnight cakes in Seoni?", answer: "Yes, midnight birthday cake delivery is available across Seoni city zones." }
    ]
  },

  "betul": {
    cityName: "Betul",
    metaTitle: "Cake Delivery in Betul | MP Satpura Mulताई Narmada Origin Tap Tapti Satpura | RedHeart",
    metaDescription: "Order cakes online in Betul. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Betul",
    metaKeyword: "cake delivery betul, order cake online betul, birthday cake betul, custom cake betul, same day cake delivery Betul MP Multai Tapti River origin Satpura hills Satpura Tiger Reserve Tawa River Korku tribal",
    footerContent: `
<h2>Cake Delivery in Betul — Multai (Tapti River Origin), Satpura Tiger Reserve, and Satpura Hills Gateway</h2>
<p>Betul — the district headquarters of Betul district in Madhya Pradesh (central MP; Satpura range; Maharashtra border), a plateau district sitting astride the Satpura hills with the unique distinction of the Tapti River's origin (the Multai — Origin of Tapti River (Multai (Multai = source of fire / holy source) — a town in Betul district; the Tapti River (Tapi — one of India's major westward-flowing rivers; originates from the Multai area near Betul; the Tapti-Tapi rises at a water body in Multai called the Tapti Kund; the Tapti River flows westward through Betul, Chhindwara, and into Maharashtra, through Jalgaon, Bhusawal, Surat, and joins the Arabian Sea at the Gulf of Khambhat; the Multai city celebrates the Tapti origin with religious significance; the Tapti River is considered sacred); the Satpura Tiger Reserve (Satpura National Park and Tiger Reserve — in Hoshangabad / Narmadapuram district but bordering the Betul zone; the Satpura forests extend into Betul; the Satpura range is one of India's finest wildlife habitats); the Betul district's agricultural character (Betul district grows wheat, soybean, jowar (sorghum), and maize; the Betul plateau climate supports wheat cultivation despite being tropical; the Betul area is one of MP's highest plateaux — approximately 700m elevation); the Korku tribal community (the Korku — a Munda-language tribal group — are present in Betul's forest areas; the Korku of the Satpura range), and a city of Multai Tapti-River-origin Betul-plateau and Satpura-Tiger-Reserve — is MP's most Multai-Tapti-River-origin-Kund and Satpura-Tiger-Reserve Betul. From birthday parties in Betul to celebration cakes — RedHeart covers all areas: Betul city, Multai, Amla, Sarni, Shahpur (MP), Atner.</p>
<p>Our Betul cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Betul, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Betul city, Multai, Amla, Sarni, Shahpur (MP), Atner</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Betul?", answer: "Yes, same-day cake delivery is available across Betul city, Multai, Amla, Sarni, and Shahpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Betul?", answer: "Yes, all flavours are available in eggless variants for Betul delivery." },
      { question: "Do you deliver midnight cakes in Betul?", answer: "Yes, midnight birthday cake delivery is available across Betul city zones." }
    ]
  },

  "chhota-udaipur": {
    cityName: "Chhota Udaipur",
    metaTitle: "Cake Delivery in Chhota Udaipur | Gujarat Rathwa Pithora Tribal Narmada | RedHeart",
    metaDescription: "Order cakes online in Chhota Udaipur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chhota Udaipur",
    metaKeyword: "cake delivery chhota udaipur, order cake online chhota udaipur, birthday cake chhota udaipur, custom cake chhota udaipur, same day cake delivery Chhota Udaipur Gujarat Rathwa tribal Pithora mural art Narmada Devgadh Baria hills",
    footerContent: `
<h2>Cake Delivery in Chhota Udaipur — Rathwa Tribe's Pithora Mural Art, Tribal Hills, and Gujarat-MP Border Zone</h2>
<p>Chhota Udaipur — the district headquarters of Chhota Udaipur district in Gujarat (eastern Gujarat; carved from Vadodara district in 2013; MP border; Rathwa tribal zone), the tribal heartland of eastern Gujarat famous for its remarkable Pithora mural art tradition (the Rathwa Pithora Mural Art (Pithora — the sacred mural painting tradition of the Rathwa tribe of Chhota Udaipur; the Rathwa are the dominant tribal community of Chhota Udaipur district; the Pithora painting is a ritual mural — painted on the inner walls of a tribal home by a specialist called a "lakhara" / "lakharo" (a painting priest); it depicts the world of Pithoro (a supernatural horse deity) and various tribal deities, animals, and ritual events; the Pithora paintings are painted during rituals called "Pithora Vrat" to fulfill wishes or ward off evil; the paintings are in bright reds, greens, yellows on white; the Rathwa Pithora is recognized as a traditional art form and an Intangible Cultural Heritage of India; the Chhota Udaipur tribal museum documents this art); the Chhota Udaipur Royal Palace (the Chhota Udaipur princely state — a former Rajput (Rathwa influenced) princely state; the Chhota Udaipur palace and heritage site); the tribal markets and haat bazaars (the weekly tribal haats in Chhota Udaipur draw tribal communities to sell forest produce, crafts, and agricultural goods; a vibrant cultural experience); the Narmada River proximity (the Narmada and its tributaries flow near the MP-Gujarat border in this region; the Sardar Sarovar command area), and a city of Rathwa-Pithora-mural-ritual-art and tribal-haat-bazaar — is Gujarat's most Chhota-Udaipur-Rathwa-Pithora-mural and tribal-haat Chhota Udaipur. From birthday parties in Chhota Udaipur to celebration cakes — RedHeart covers all areas: Chhota Udaipur city, Kawant, Nasvadi, Pavi Jetpur, Sankheda, Bodeli.</p>
<p>Our Chhota Udaipur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhota Udaipur, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhota Udaipur city, Kawant, Nasvadi, Pavi Jetpur, Sankheda, Bodeli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chhota Udaipur?", answer: "Yes, same-day cake delivery is available across Chhota Udaipur city, Kawant, Nasvadi, Pavi Jetpur, and Sankheda for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chhota Udaipur?", answer: "Yes, all flavours are available in eggless variants for Chhota Udaipur delivery." },
      { question: "Do you deliver midnight cakes in Chhota Udaipur?", answer: "Yes, midnight birthday cake delivery is available across Chhota Udaipur city zones." }
    ]
  },

  "rajpipla": {
    cityName: "Rajpipla",
    metaTitle: "Cake Delivery in Rajpipla | Narmada Gujarat Sardar Sarovar Shoolpaneshwar Tiger Reserve | RedHeart",
    metaDescription: "Order cakes online in Rajpipla (Narmada district). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rajpipla (Narmada District)",
    metaKeyword: "cake delivery rajpipla narmada, order cake online rajpipla, birthday cake rajpipla, custom cake rajpipla narmada, same day cake delivery Rajpipla Narmada Gujarat Sardar Sarovar Shoolpaneshwar Tiger Reserve tribal Dediapada",
    footerContent: `
<h2>Cake Delivery in Rajpipla (Narmada District) — Sardar Sarovar Dam, Shoolpaneshwar Tiger Reserve, and Tribal Gujarat</h2>
<p>Rajpipla — the district headquarters of Narmada district in Gujarat (eastern Gujarat; Narmada River; Satpura-Vindhya foothills), one of Gujarat's newest districts situated on the Narmada — India's most celebrated river (the Sardar Sarovar Dam (Sardar Sarovar Dam — on the Narmada River; in Narmada district Gujarat; one of the world's largest dams by volume of concrete; height 163m; the Sardar Sarovar was one of India's most controversial dams (Narmada Bachao Andolan led by Medha Patkar and Baba Amte opposed it for decades due to tribal displacement — 40,000+ families from 245 villages displaced); the dam's reservoir stretches into Gujarat, Maharashtra, and MP; the Sardar Sarovar Canal network irrigates nearly 1.8 million hectares in Gujarat; the dam provides drinking water to Kutch and Saurashtra through the Narmada canal; the Statue of Unity — the world's tallest statue (182m) of Sardar Vallabhbhai Patel — is on the banks of the Narmada near the dam; a major tourism destination); the Shoolpaneshwar Tiger Reserve (Shoolpaneshwar Wildlife Sanctuary / Tiger Reserve — in Narmada and Bharuch districts; the forests of the Shoolpaneshwar are in the Narmada Valley foothills; part of the Central India-Eastern Ghats tiger connectivity landscape); the Rajpipla Royal Palace (Rajpipla was the seat of the Rajpipla princely state of the Gohil Rajputs — the same clan as Bhavnagar; the Rajpipla Palace is a heritage site)), and a city of Sardar Sarovar Dam Statue-of-Unity and Shoolpaneshwar Tiger Reserve — is Gujarat's most Sardar-Sarovar-Dam-Statue-of-Unity and Shoolpaneshwar-Tiger-Reserve Rajpipla. From birthday parties in Rajpipla to celebration cakes — RedHeart covers all areas: Rajpipla city, Garudeshwar, Tilakwada, Dediapada, Nandod, Sagbara.</p>
<p>Our Rajpipla cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajpipla (Narmada), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajpipla city, Garudeshwar, Tilakwada, Dediapada, Nandod, Sagbara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rajpipla (Narmada)?", answer: "Yes, same-day cake delivery is available across Rajpipla city, Garudeshwar, Tilakwada, Dediapada, and Nandod for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Rajpipla?", answer: "Yes, all flavours are available in eggless variants for Rajpipla delivery." },
      { question: "Do you deliver midnight cakes in Rajpipla?", answer: "Yes, midnight birthday cake delivery is available across Rajpipla city zones." }
    ]
  },

  "vyara": {
    cityName: "Vyara",
    metaTitle: "Cake Delivery in Vyara | Tapi Gujarat Tribal Haldi Nana Pondicherry Surat Adjacent | RedHeart",
    metaDescription: "Order cakes online in Vyara (Tapi district). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vyara (Tapi District)",
    metaKeyword: "cake delivery vyara tapi, order cake online vyara, birthday cake vyara tapi, custom cake vyara, same day cake delivery Vyara Tapi Gujarat Tapti River tribal Halpati Dhodiya Surat adjacent Ukai Dam",
    footerContent: `
<h2>Cake Delivery in Vyara (Tapi) — Ukai Dam, Tapti River, and South Gujarat's Tribal Heartland</h2>
<p>Vyara — the district headquarters of Tapi district in Gujarat (south Gujarat; Tapti / Tapi River; carved from Surat district in 2007; Maharashtra border), a tribal district in the Tapti River valley (the Ukai Dam (Ukai Dam — on the Tapti River; in Tapi district Gujarat; one of Gujarat's largest dams; the Ukai Reservoir — also called Vallabh Sagar — is one of the largest reservoirs in western India; the dam provides water to the Surat-south Gujarat industrial region; the Ukai Hydroelectric Power Station; the Ukai reservoir is also used for fisheries — one of India's larger freshwater fisheries; the reservoir displaces tribal communities who live on its fringes); the Tapti / Tapi River (the Tapti — or Tapi — flows through the district; the Tapi River is one of the few Indian rivers that flows west; the river originates in MP (Multai / Betul) and flows through Maharashtra and Gujarat to the Arabian Sea at Surat; the Tapi gives the district its name); the tribal communities (Tapi district has a majority tribal population — Dhodiya, Gamit, Konkani Varli, Halpati; the tribal communities practice subsistence agriculture; weekly tribal haats; tribal dances including the Tarpa dance of the Varli); the south Gujarat timber trade (teak from the forests; Tapi district has forest cover), and a city of Ukai Dam Tapti River and south Gujarat tribal Dhodiya Gamit Halpati — is Gujarat's most Ukai-Dam-Vallabh-Sagar and Tapi-tribal-Dhodiya-Gamit Vyara. From birthday parties in Vyara to celebration cakes — RedHeart covers all areas: Vyara city, Songadh, Ukai, Dolvan, Valod, Nizar.</p>
<p>Our Vyara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vyara (Tapi), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vyara city, Songadh, Ukai, Dolvan, Valod, Nizar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vyara (Tapi)?", answer: "Yes, same-day cake delivery is available across Vyara city, Songadh, Ukai, Dolvan, and Valod for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Vyara?", answer: "Yes, all flavours are available in eggless variants for Vyara delivery." },
      { question: "Do you deliver midnight cakes in Vyara?", answer: "Yes, midnight birthday cake delivery is available across Vyara city zones." }
    ]
  },

  "dahod": {
    cityName: "Dahod",
    metaTitle: "Cake Delivery in Dahod | Gujarat Aurangzeb Birthplace Tribal Bhil Panch Mahal | RedHeart",
    metaDescription: "Order cakes online in Dahod. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dahod",
    metaKeyword: "cake delivery dahod, order cake online dahod, birthday cake dahod, custom cake dahod, same day cake delivery Dahod Gujarat Aurangzeb birthplace Bhil tribal Panch Mahal Limkheda Devgadh Baria hills MP border",
    footerContent: `
<h2>Cake Delivery in Dahod — Aurangzeb's Birthplace, Bhil Tribal Heartland, and Gujarat-Rajasthan-MP Tri-Junction</h2>
<p>Dahod — the district headquarters of Dahod district in Gujarat (northeastern Gujarat; MP and Rajasthan borders; Bhil tribal area), a historic district at the tri-junction of three states and the birthplace of a Mughal emperor (the Aurangzeb Birthplace (Dahod — Aurangzeb (Muhi-ud-Din Muhammad; born November 3, 1618 CE) was born in Dahod during his father Shah Jahan's governorship of Gujarat; the Mughal emperor who ruled for 49 years (1658-1707 CE) — the last of the great Mughals; Aurangzeb was born in the Dahod area when it was a Mughal camp; the birth is recorded in Mughal chronicles; Aurangzeb later rebuilt the Dahod Mahal area; Dahod is historically known as Daahod; Aurangzeb's birth at Dahod is one of the few Mughal emperors' birthplaces in western India); the Bhil Tribal Heartland (Dahod district has one of Gujarat's highest tribal concentrations — predominantly Bhil; the Bhil are one of India's largest tribal groups; the Dahod-Panchmahals-Chhota Udaipur tribal belt is Bhil country; the Bhil traditional governance (tad / panchayat), festivals (Holi celebration by Bhils is distinctive), and traditional forest-based lifestyle; the Dahod area has several tribal development programs; the weekly tribal haat bazaars); the Devgadh Baria (Devgadh Baria — a town and former princely state in Dahod district; the Devgadh Baria royal estate), and a city of Aurangzeb-birthplace-1618-Shah-Jahan and Bhil-tribal-heartland — is Gujarat's most Dahod-Aurangzeb-birthplace and Bhil-tribal-Dahod Dahod. From birthday parties in Dahod to celebration cakes — RedHeart covers all areas: Dahod city, Devgadh Baria, Limkheda, Garbada, Fatepura, Dhanpur.</p>
<p>Our Dahod cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dahod, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dahod city, Devgadh Baria, Limkheda, Garbada, Fatepura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dahod?", answer: "Yes, same-day cake delivery is available across Dahod city, Devgadh Baria, Limkheda, Garbada, and Fatepura for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dahod?", answer: "Yes, all flavours are available in eggless variants for Dahod delivery." },
      { question: "Do you deliver midnight cakes in Dahod?", answer: "Yes, midnight birthday cake delivery is available across Dahod city zones." }
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
