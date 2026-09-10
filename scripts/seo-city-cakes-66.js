// Cakes Batch 66 — 12 cities
// Assam: Baksa, Chirang, Golaghat, Nalbari
// Odisha: Sundargarh, Nuapada (check — done in 63 already), Gajapati, Boudh
// Gujarat: Porbandar, Gir Somnath, Botad, Morbi

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "baksa": {
    cityName: "Baksa",
    metaTitle: "Cake Delivery in Baksa | Assam BTAD Bodo Manas UNESCO Mushalpur | RedHeart",
    metaDescription: "Order cakes online in Baksa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Baksa",
    metaKeyword: "cake delivery baksa, order cake online baksa, birthday cake baksa, custom cake baksa, same day cake delivery Baksa Assam BTAD Bodo Manas UNESCO Mushalpur Baska Rangia Pathsala Bhutan border",
    footerContent: `
<h2>Cake Delivery in Baksa — Manas UNESCO Gateway, Bodoland Territorial Council, and Assam-Bhutan Foothills</h2>
<p>Baksa — the district headquarters of Baksa district in Assam (northwestern Assam; foothills of Bhutan; Bodoland Territorial Area Districts / BTAD), one of the four BTAD districts, adjoining the UNESCO Manas biosphere (the Manas National Park / UNESCO Connection (Manas National Park — primarily in Baksa and Baska-adjacent Chirang districts; Manas UNESCO World Heritage Site (inscribed 1985); Manas Biosphere Reserve; Manas Tiger Reserve; the Manas-Barnadi area flows through the national park; Manas is named after the Manas River which flows from Bhutan into Assam; Manas was delisted from UNESCO's World Heritage in Danger list in 2011 after being restored from damage during the Bodo insurgency years 1988-2003; Manas is known for the golden langur — a highly endangered primate endemic to Assam and Bhutan's foothills; the pygmy hog — world's smallest wild pig — was declared locally extinct but was rediscovered in Manas); the BTAD (Bodoland Territorial Area Districts — Baksa, Udalguri, Chirang, Kokrajhar — created under the Bodo Accord 2003; the Bodoland Territorial Council (BTC) governs these four districts; the Bodo Accord 2020 further consolidated peace in the region); the Mushalpur and Pathsala towns (significant market and educational towns in Baksa district; Bajali — a sub-district adjacent); the Rangia junction (Rangia — in Kamrup district adjacent; a key railway junction for western Assam), and a city of Manas UNESCO biosphere gateway and BTAD Bodo Bodoland Council — is Assam's most Manas-UNESCO-golden-langur-pygmy-hog and BTAD-Bodo-Baksa Baksa. From birthday parties in Baksa to celebration cakes — RedHeart covers all areas: Mushalpur (Baksa HQ), Pathsala, Tamulpur, Tihu, Borigumba, Goreswar.</p>
<p>Our Baksa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baksa (Mushalpur), Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mushalpur, Pathsala, Tamulpur, Tihu, Borigumba, Goreswar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Baksa?", answer: "Yes, same-day cake delivery is available across Mushalpur, Pathsala, Tamulpur, Tihu, and Goreswar for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Baksa?", answer: "Yes, all flavours are available in eggless variants for Baksa delivery." },
      { question: "Do you deliver midnight cakes in Baksa?", answer: "Yes, midnight birthday cake delivery is available across Mushalpur and Pathsala zones." }
    ]
  },

  "chirang": {
    cityName: "Chirang",
    metaTitle: "Cake Delivery in Chirang | Assam BTAD Kajalgaon Manas Buffer Bodo Bagurumba | RedHeart",
    metaDescription: "Order cakes online in Chirang. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chirang",
    metaKeyword: "cake delivery chirang, order cake online chirang, birthday cake chirang, custom cake chirang, same day cake delivery Chirang Assam BTAD Kajalgaon Manas buffer Bodo Bagurumba dance Ripu Reserve Forest",
    footerContent: `
<h2>Cake Delivery in Chirang — Manas Buffer Zone, Ripu Reserve Forest, and Bodo Bagurumba Dance Heritage</h2>
<p>Chirang — the district headquarters of Chirang district in Assam (western Assam; Bodoland Territorial Area Districts / BTAD; adjacent to Manas National Park), a forested district in the Bodoland region (the Manas Buffer Zone and Ripu Reserve Forest (the southern buffer zone of Manas National Park extends into Chirang district; the Ripu Reserve Forest and Chirang Reserve Forest — in Chirang district — form part of the wildlife corridor connecting Manas to the Bhutan hills; the elephants, tigers, and gaur of Manas use these forest corridors; the Ripu-Chirang elephant reserve is a designated elephant reserve; the forests of Chirang are also habitat for golden langur); the Kajalgaon town (Kajalgaon — the district headquarters of Chirang; a commercial town on the Bongaigaon-Guwahati highway; the NH27 passes near Chirang); the Bodo Bagurumba dance (the Bagurumba — a traditional folk dance of the Bodo community — is a graceful group dance performed by Bodo women; the dance mimics the movements of birds, insects, and nature; it is performed during Bwisagu (Bodo New Year) and other festivals; the Bagurumba is one of Assam's most recognized folk dances; the Bodo textiles — Dokhna and Gamsa — are woven locally; the BTAD connection — Chirang is one of the four BTAD districts under the Bodoland Territorial Council)), and a city of Manas buffer Ripu Reserve Forest elephant corridor and Bodo Bagurumba dance — is Assam's most Chirang-Manas-buffer-Ripu-Reserve and Bodo-Bagurumba-Bwisagu Chirang. From birthday parties in Chirang to celebration cakes — RedHeart covers all areas: Kajalgaon (Chirang HQ), Sidli, Bijni, Borobazar, Bengtol, Amguri (Chirang).</p>
<p>Our Chirang cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chirang (Kajalgaon), Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kajalgaon, Sidli, Bijni, Borobazar, Bengtol, Amguri (Chirang)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chirang?", answer: "Yes, same-day cake delivery is available across Kajalgaon, Sidli, Bijni, Borobazar, and Bengtol for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chirang?", answer: "Yes, all flavours are available in eggless variants for Chirang delivery." },
      { question: "Do you deliver midnight cakes in Chirang?", answer: "Yes, midnight birthday cake delivery is available across Kajalgaon city zones." }
    ]
  },

  "golaghat": {
    cityName: "Golaghat",
    metaTitle: "Cake Delivery in Golaghat | Assam Kaziranga UNESCO Numaligarh Refinery Tea | RedHeart",
    metaDescription: "Order cakes online in Golaghat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Golaghat",
    metaKeyword: "cake delivery golaghat, order cake online golaghat, birthday cake golaghat, custom cake golaghat, same day cake delivery Golaghat Assam Kaziranga UNESCO one-horned rhino Numaligarh Refinery tea gardens Dhansiri",
    footerContent: `
<h2>Cake Delivery in Golaghat — Kaziranga UNESCO World Heritage, Numaligarh Refinery, and Assam Tea Gardens</h2>
<p>Golaghat — the district headquarters of Golaghat district in Assam (central-eastern Assam; Brahmaputra south bank; Dhansiri River), a district sharing the world-famous Kaziranga National Park and hosting a major petroleum refinery (the Kaziranga National Park (Kaziranga National Park — partly in Golaghat district, partly in Nagaon district; UNESCO World Heritage Site inscribed 1985; Project Tiger reserve since 1974; home to the world's largest population of the Indian one-horned rhinoceros (Rhinoceros unicornis) — approximately 2,600 rhinos (over two-thirds of the world's total); also habitat for tigers (one of the highest tiger densities in the world), elephants, wild water buffalo, and swamp deer (barasingha); the Brahmaputra floods the park annually providing nutrient-rich grasslands; the park is a biodiversity hotspot; the annual Kaziranga Elephant Festival); the Numaligarh Refinery (Numaligarh Refinery Limited (NRL) — in Golaghat district; established 1999; a 3 MMTPA (million metric tonnes per annum) petroleum refinery; a joint venture of BPCL, GoI, and Government of Assam; the refinery is being expanded; NRL is the major industrial employer in Golaghat); the Assam Tea (Golaghat district has numerous tea gardens — the Golaghat-Jorhat-Sivasagar tea belt is one of the world's most productive tea growing areas; Assam CTC tea; the tea gardens with their colonial bungalows are part of Golaghat's heritage), and a city of Kaziranga UNESCO one-horned rhino world's largest population and Numaligarh Refinery — is Assam's most Kaziranga-UNESCO-2600-rhinos-world-largest and Numaligarh-Refinery Golaghat. From birthday parties in Golaghat to celebration cakes — RedHeart covers all areas: Golaghat city, Sarupathar, Bokakhat (Kaziranga gate), Dergaon, Khumtai, Tsokha.</p>
<p>Our Golaghat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Golaghat, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Golaghat city, Sarupathar, Bokakhat, Dergaon, Khumtai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Tea Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Golaghat?", answer: "Yes, same-day cake delivery is available across Golaghat city, Sarupathar, Bokakhat, Dergaon, and Khumtai for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Golaghat?", answer: "Yes, all flavours are available in eggless variants for Golaghat delivery." },
      { question: "Do you deliver midnight cakes in Golaghat?", answer: "Yes, midnight birthday cake delivery is available across Golaghat city zones." }
    ]
  },

  "nalbari": {
    cityName: "Nalbari",
    metaTitle: "Cake Delivery in Nalbari | Assam Bhumuraguri Manas Adjacent Brahmaputra Plains | RedHeart",
    metaDescription: "Order cakes online in Nalbari. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nalbari",
    metaKeyword: "cake delivery nalbari, order cake online nalbari, birthday cake nalbari, custom cake nalbari, same day cake delivery Nalbari Assam Brahmaputra plains Bhumuraguri Tihu educational hub agricultural Kamrup adjacent",
    footerContent: `
<h2>Cake Delivery in Nalbari — Brahmaputra Plains, Educational Hub, and Assam's North Bank Agricultural Heartland</h2>
<p>Nalbari — the district headquarters of Nalbari district in Assam (northwestern Assam; Brahmaputra north bank; flanked by Barpeta and Baksa districts), a compact district known for education and agriculture in Assam's north bank (the Nalbari district profile (Nalbari is one of Assam's smaller districts by area; carved from Kamrup district in 1983; the district lies in the alluvial Brahmaputra plains between the Beki and Puthimari rivers; primarily agricultural — paddy, mustard, and vegetables; Nalbari town is a commercial and educational hub for the surrounding rural areas; several colleges and high schools make it a minor education centre for the western Brahmaputra valley); the Tihu town (Tihu — in the Nalbari district area / or adjacent Baksa; a market town); the Nalbari cultural traditions (the Bihu dance and music; the Sattriya tradition from Assam's Vaishnavite monasteries — several small Sattras in the Nalbari area; women's handloom weaving in Nalbari — mekhela-chador tradition); the Beki River and Puthimari River (flowing through or near Nalbari; tributaries of the Brahmaputra; flood-prone during monsoon); the Nalbari-Guwahati connectivity (approximately 70 km from Guwahati; the NH27 connects Nalbari to the Guwahati-Bongaigaon highway), and a city of Brahmaputra north-bank agricultural-educational and Bihu-Sattriya tradition — is Assam's most Nalbari-Kamrup-1983-carved and Brahmaputra-north-bank-paddy Nalbari. From birthday parties in Nalbari to celebration cakes — RedHeart covers all areas: Nalbari city, Tihu, Barkhetri, Mukalmua, Paschim Nalbari, Pub Nalbari.</p>
<p>Our Nalbari cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalbari, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalbari city, Tihu, Barkhetri, Mukalmua, Paschim Nalbari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nalbari?", answer: "Yes, same-day cake delivery is available across Nalbari city, Tihu, Barkhetri, and Mukalmua for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nalbari?", answer: "Yes, all flavours are available in eggless variants for Nalbari delivery." },
      { question: "Do you deliver midnight cakes in Nalbari?", answer: "Yes, midnight birthday cake delivery is available across Nalbari city zones." }
    ]
  },

  "sundargarh": {
    cityName: "Sundargarh",
    metaTitle: "Cake Delivery in Sundargarh | Odisha Steel Tribal Rourkela Bonai Sundergarh | RedHeart",
    metaDescription: "Order cakes online in Sundargarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sundargarh",
    metaKeyword: "cake delivery sundargarh, order cake online sundargarh, birthday cake sundargarh, custom cake sundargarh, same day cake delivery Sundargarh Odisha steel Rourkela tribal Bonai Jharkhand border Brahmani River hockey",
    footerContent: `
<h2>Cake Delivery in Sundargarh — Rourkela Steel Capital, Hockey Capital of India, and Tribal Jharkhand Border</h2>
<p>Sundargarh — the district headquarters of Sundargarh district in Odisha (northwestern Odisha; Jharkhand-CG border; Brahmani River), the district containing Rourkela — Odisha's steel city — and India's hockey heritage (the Rourkela Steel Plant and Sundargarh Hockey (Rourkela Steel Plant (RSP) — established 1959; one of India's first major public sector steel plants; a joint project with West Germany; located in Rourkela city (part of Sundargarh district); the RSP transformed Rourkela into an industrial city; Birsa Munda Hockey Stadium in Rourkela — the world's largest hockey stadium (capacity 20,000+) inaugurated for the 2023 FIH Men's Hockey World Cup; Sundargarh district produces more national hockey players per capita than anywhere else in India — hundreds of international players have come from this district including Michael Kindo, Sylvanus Dung Dung, and numerous others; the hockey culture in Sundargarh is inseparable from the tribal Oraon-Munda identity; the Sundargarh Hockey Academy); the Brahmani River (the Brahmani — a major Odisha river — flows through Sundargarh; Brahmani feeds the RSP and Rourkela's industry); the tribal demography (Sundargarh has a high tribal population — Oraon, Munda, Kharia; it borders Jharkhand's Ranchi district; the tribal languages and traditions are strong in the rural areas); the Bonai area (Bonai — a sub-division in Sundargarh; the Bonai forest area), and a city of Rourkela Steel Plant 1959 and Birsa Munda Hockey Stadium world's largest hockey-capital — is Odisha's most Rourkela-Steel-1959 and Sundargarh-hockey-capital-Birsa-Munda-Stadium Sundargarh. From birthday parties in Sundargarh to celebration cakes — RedHeart covers all areas: Sundargarh city, Rourkela, Rajgangpur, Bonai, Talsara, Hemgiri.</p>
<p>Our Sundargarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sundargarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sundargarh city, Rourkela, Rajgangpur, Bonai, Talsara, Hemgiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sundargarh?", answer: "Yes, same-day cake delivery is available across Sundargarh city, Rourkela, Rajgangpur, Bonai, Talsara, and Hemgiri for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sundargarh?", answer: "Yes, all flavours are available in eggless variants for Sundargarh delivery." },
      { question: "Do you deliver midnight cakes in Sundargarh?", answer: "Yes, midnight birthday cake delivery is available across Sundargarh city and Rourkela zones." }
    ]
  },

  "paralakhemundi": {
    cityName: "Paralakhemundi",
    metaTitle: "Cake Delivery in Paralakhemundi | Gajapati Odisha Mahendragiri Hills Eastern Ghats | RedHeart",
    metaDescription: "Order cakes online in Paralakhemundi (Gajapati). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Paralakhemundi (Gajapati)",
    metaKeyword: "cake delivery paralakhemundi gajapati, order cake online paralakhemundi, birthday cake paralakhemundi, custom cake paralakhemundi, same day cake delivery Paralakhemundi Gajapati Odisha Mahendragiri Hills Eastern Ghats tribal Sonepur Vizag border",
    footerContent: `
<h2>Cake Delivery in Paralakhemundi (Gajapati) — Mahendragiri Hills, Eastern Ghats Tribal Heartland, and Andhra Pradesh Border</h2>
<p>Paralakhemundi — the district headquarters of Gajapati district in Odisha (southern Odisha; Eastern Ghats; Andhra Pradesh border), a hilly district in one of Odisha's most forested and tribal zones (the Mahendragiri Hills (Mahendragiri — in the Eastern Ghats in Gajapati district; Mahendragiri peak (approximately 1,501 m) — one of Odisha's highest peaks; the Mahendragiri temple on the summit is dedicated to Lord Shiva and Parashurama; the Mahendragiri Biodiversity Heritage Site has been declared by the Odisha government; rich biodiversity with endemic plants and wildlife); the Gajapati tribal culture (Gajapati district has a high tribal population — Saura (Savara), Kondh, Gadaba; the Saura tribe is famous for their Ikons wall paintings — a tradition of painted religious murals on house walls similar to the Warli paintings; the Saura Ikons are a UNESCO-recognized traditional art form); the Paralakhemundi Raj (Paralakhemundi or Parlakimidi was the headquarters of a major estate in the colonial era; the Paralakhemundi Raja's estate; the Parlakimidi area was notable in Odisha's regional history); the Mahendra Tanaya River (the Mahendra Tanaya rises from the Mahendragiri hills and flows to the Bay of Bengal near Gopalpur); the border with Andhra Pradesh (the southern Gajapati border adjoins Vizianagaram district in AP)), and a city of Mahendragiri Odisha's highest peak Saura Ikons tribal art and Eastern Ghats — is Odisha's most Mahendragiri-1501m-Parashurama and Saura-Ikons-wall-paintings Paralakhemundi. From birthday parties in Paralakhemundi to celebration cakes — RedHeart covers all areas: Paralakhemundi city, Mohana, Rayagada (Gajapati), Kashinagar, Gunupur adjacent, R.Udayagiri.</p>
<p>Our Paralakhemundi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Paralakhemundi (Gajapati), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Paralakhemundi city, Mohana, Kashinagar, R.Udayagiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Paralakhemundi (Gajapati)?", answer: "Yes, same-day cake delivery is available across Paralakhemundi city, Mohana, Kashinagar, and R.Udayagiri for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Paralakhemundi?", answer: "Yes, all flavours are available in eggless variants for Paralakhemundi delivery." },
      { question: "Do you deliver midnight cakes in Paralakhemundi?", answer: "Yes, midnight birthday cake delivery is available across Paralakhemundi city zones." }
    ]
  },

  "boudh": {
    cityName: "Boudh",
    metaTitle: "Cake Delivery in Boudh | Odisha Mahanadi Kantamal Tikarapada Satkosia Tribal | RedHeart",
    metaDescription: "Order cakes online in Boudh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Boudh",
    metaKeyword: "cake delivery boudh, order cake online boudh, birthday cake boudh, custom cake boudh, same day cake delivery Boudh Odisha Mahanadi Kantamal Satkosia adjacent Tikarapada tribal Kondh Mahanadi Valley",
    footerContent: `
<h2>Cake Delivery in Boudh — Mahanadi Valley, Satkosia Adjacent, and Odisha's Compact Tribal District</h2>
<p>Boudh — the district headquarters of Boudh district in Odisha (central Odisha; Mahanadi River; one of Odisha's smaller districts), a quiet but strategically placed district on the Mahanadi corridor (the Mahanadi River (the Mahanadi — Odisha's lifeline — flows through Boudh district; the Mahanadi here is in its middle course after descending from the Satpura-Eastern Ghats watershed; the river provides irrigation and is a focus for fish cultivation in the Boudh region); the Satkosia Tiger Reserve proximity (the Satkosia Gorge and Satkosia Tiger Reserve borders Boudh district on the northeast — from Boudh one can access the Tikarpada wilderness camp on the Mahanadi inside the Satkosia; Satkosia is famous for gharial conservation; the gharial (Gavialis gangeticus) — India's most critically endangered crocodilian — is bred and released in the Satkosia stretch of the Mahanadi); the Kantamal (Kantamal — a town in Boudh on the Mahanadi; the Kantamal area is a trade point and rice processing zone; the Kantamal road-rail crossing is important for connectivity); the Boudh tribal composition (Boudh has a significant Kondh and other tribal population; Boudh borders Kandhamal district — the Kandhamal Haldi region — and tribal culture overlaps; the Boudh Phulbani area is a cultural zone of the Kondh people); the Sonepur adjacent (Sonepur / Subarnapur district adjoins Boudh on the north; the Sonepur cattle fair region), and a city of Mahanadi Valley Satkosia-adjacent gharial conservation and Kondh-Kantamal — is Odisha's most Boudh-Mahanadi-Satkosia-adjacent and Kantamal-Kondh-tribal Boudh. From birthday parties in Boudh to celebration cakes — RedHeart covers all areas: Boudh city, Kantamal, Harbhanga, Purunakatak, Manamunda.</p>
<p>Our Boudh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Boudh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Boudh city, Kantamal, Harbhanga, Purunakatak, Manamunda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Boudh?", answer: "Yes, same-day cake delivery is available across Boudh city, Kantamal, Harbhanga, and Manamunda for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Boudh?", answer: "Yes, all flavours are available in eggless variants for Boudh delivery." },
      { question: "Do you deliver midnight cakes in Boudh?", answer: "Yes, midnight birthday cake delivery is available across Boudh city zones." }
    ]
  },

  "porbandar": {
    cityName: "Porbandar",
    metaTitle: "Cake Delivery in Porbandar | Gujarat Mahatma Gandhi Birthplace Sudama Arabian Sea | RedHeart",
    metaDescription: "Order cakes online in Porbandar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Porbandar",
    metaKeyword: "cake delivery porbandar, order cake online porbandar, birthday cake porbandar, custom cake porbandar, same day cake delivery Porbandar Gujarat Mahatma Gandhi birthplace Sudama temple Kirti Mandir Arabian Sea fishing port Saurashtra",
    footerContent: `
<h2>Cake Delivery in Porbandar — Mahatma Gandhi's Birthplace, Sudama Temple, and Arabian Sea Port City</h2>
<p>Porbandar — the district headquarters of Porbandar district in Gujarat (Saurashtra; Arabian Sea coast), one of India's most historically significant birthplaces (the Kirti Mandir / Gandhi Birthplace (Kirti Mandir — in Porbandar town; the birthplace of Mahatma Gandhi (Mohandas Karamchand Gandhi; born October 2, 1869 CE); the Kirti Mandir (Temple of Fame) was built as a memorial at Gandhi's birthplace; the three-storey building marks the exact room where Gandhi was born; the house (Kaba Gandhi no Delo) has been preserved; the Porbandar Heritage Museum; Gandhi's birthday (October 2) is India's national holiday — Gandhi Jayanti; Porbandar is a major Gandhian pilgrimage destination); the Sudama Temple (Sudama Temple — in Porbandar; dedicated to Lord Krishna's childhood friend Sudama (Sudhama) — the poor Brahmin boy who visited Krishna in Dwarka with a handful of beaten rice (poha) and received immense wealth; the Sudama Chowk and Sudama Temple is a significant pilgrimage site in Porbandar; Porbandar is traditionally identified as Sudamapur — Sudama's hometown); the Porbandar Fishing Port (Porbandar is Gujarat's largest fishing port; the fishing harbour handles thousands of boats; the fish trade is central to Porbandar's economy; the Porbandar Cement — white cement produced in Porbandar), and a city of Mahatma Gandhi October-2-1869 birthplace Kirti-Mandir and Sudama-temple Sudamapur — is Gujarat's most Porbandar-Gandhi-birthplace-Kirti-Mandir and Sudama-temple-Sudamapur Porbandar. From birthday parties in Porbandar to celebration cakes — RedHeart covers all areas: Porbandar city, Chhaya, Kutiyana, Ranavav, Madhavpur, Bileshwar.</p>
<p>Our Porbandar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Porbandar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Porbandar city, Chhaya, Kutiyana, Ranavav, Madhavpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Porbandar?", answer: "Yes, same-day cake delivery is available across Porbandar city, Chhaya, Kutiyana, Ranavav, and Madhavpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Porbandar?", answer: "Yes, all flavours are available in eggless variants for Porbandar delivery." },
      { question: "Do you deliver midnight cakes in Porbandar?", answer: "Yes, midnight birthday cake delivery is available across Porbandar city zones." }
    ]
  },

  "gir-somnath": {
    cityName: "Gir Somnath",
    metaTitle: "Cake Delivery in Gir Somnath | Gujarat Somnath Jyotirlinga Gir Lion Veraval | RedHeart",
    metaDescription: "Order cakes online in Gir Somnath. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gir Somnath",
    metaKeyword: "cake delivery gir somnath veraval, order cake online gir somnath, birthday cake veraval somnath, custom cake gir somnath, same day cake delivery Gir Somnath Gujarat Somnath Jyotirlinga Gir National Park Asiatic lion Veraval fishing",
    footerContent: `
<h2>Cake Delivery in Gir Somnath — Somnath Jyotirlinga (First Among 12), Gir Asiatic Lion, and Saurashtra Coast</h2>
<p>Gir Somnath — the district headquarters is Veraval in Gir Somnath district in Gujarat (Saurashtra; Arabian Sea coast; Junagadh adjacent), a district containing India's holiest Shiva shrine and the world's last Asiatic lion habitat (the Somnath Temple / First Jyotirlinga (Somnath — in Gir Somnath district; on the Arabian Sea coast; the Somnath Temple is the first among the 12 Jyotirlingas — the holiest Shiva shrines in India; the Somnath temple has been built and rebuilt 17 times after multiple invasions — the most famous being Mahmud of Ghazni's raid in 1025 CE; the current temple (Chalukya / Sompura architecture) was rebuilt and consecrated in 1951 by Sardar Vallabhbhai Patel; the Somnath Jyotirlinga is one of India's most visited pilgrimage sites; it is built on the Arabian Sea coast at the confluence of three rivers — Kapila, Hiran, and Saraswati — known as the Triveni Sangam; the temple opens to the sea for 5,000 km without land — a famous fact); the Gir National Park / Asiatic Lion (Gir National Park and Wildlife Sanctuary — in Junagadh and Gir Somnath districts; the only wild habitat of the Asiatic lion (Panthera leo persica) in the world; approximately 700+ Asiatic lions (as of recent census); the Asiatic lion is India's national pride; GIR was designated a sanctuary in 1965 and a national park in 1975); the Veraval Fishing Port (Veraval — the district HQ — is Gujarat's largest fishing port; the Veraval fishing harbour), and a city of Somnath First-Jyotirlinga 17-times-rebuilt Mahmud-Ghazni and Gir-Asiatic-lion-world's-only-700 — is Gujarat's most Somnath-Jyotirlinga-first-12 and Gir-Asiatic-lion-world-only Gir Somnath. From birthday parties in Gir Somnath to celebration cakes — RedHeart covers all areas: Veraval city, Somnath, Talala, Una (GS), Kodinar, Sutrapada.</p>
<p>Our Gir Somnath cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gir Somnath (Veraval), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Veraval city, Somnath, Talala, Una (GS), Kodinar, Sutrapada</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gir Somnath (Veraval)?", answer: "Yes, same-day cake delivery is available across Veraval, Somnath, Talala, Una, and Kodinar for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gir Somnath?", answer: "Yes, all flavours are available in eggless variants for Gir Somnath delivery." },
      { question: "Do you deliver midnight cakes in Somnath / Veraval?", answer: "Yes, midnight birthday cake delivery is available across Veraval and Somnath city zones." }
    ]
  },

  "botad": {
    cityName: "Botad",
    metaTitle: "Cake Delivery in Botad | Gujarat Saurashtra Ghelo River Dairy Cotton | RedHeart",
    metaDescription: "Order cakes online in Botad. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Botad",
    metaKeyword: "cake delivery botad, order cake online botad, birthday cake botad, custom cake botad, same day cake delivery Botad Gujarat Saurashtra Ghelo River dairy cotton agriculture Bhavnagar adjacent Ranpur",
    footerContent: `
<h2>Cake Delivery in Botad — Ghelo River, Saurashtra Dairy Belt, and Gujarat's Agricultural Heartland</h2>
<p>Botad — the district headquarters of Botad district in Gujarat (central Saurashtra; Ghelo River; carved from Bhavnagar and Ahmedabad districts in 2013), one of Gujarat's newest districts in the fertile Saurashtra heartland (the Botad district profile (Botad was carved out as a district in 2013 from parts of Bhavnagar and Ahmedabad districts; the Botad area lies in the central Saurashtra plains — a semi-arid zone where cotton and groundnut are main crops; the Ghelo River flows through Botad — a tributary of the Sabarmati system; Botad town has a weekly cattle market that is significant for the Saurashtra livestock trade); the dairy industry (Botad is in Gujarat's dairy belt — the Saurashtra cooperative dairies contribute to the Amul / GCMMF network; the milk cooperative movement is strong in Botad taluka; the dairy income supplements farm income for Botad's farming families); the cotton and groundnut agriculture (Botad district is known for cotton cultivation — the Bt cotton variety is widely grown; groundnut (peanuts) are another major Saurashtra crop; the Botad ginning and pressing factories process raw cotton); the religious sites (the Kaliyabid area near Botad has a famous temple; the Botad area has several Swaminarayan mandirs — the Swaminarayan Sampraday has a strong presence in Saurashtra), and a city of Ghelo River Saurashtra dairy-belt and cotton-groundnut-agriculture — is Gujarat's most Botad-Ghelo-River-Saurashtra and dairy-cotton Botad. From birthday parties in Botad to celebration cakes — RedHeart covers all areas: Botad city, Gadhada, Barwala (Botad), Ranpur, Valabhipur adjacent.</p>
<p>Our Botad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Botad, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Botad city, Gadhada, Barwala (Botad), Ranpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Botad?", answer: "Yes, same-day cake delivery is available across Botad city, Gadhada, Barwala, and Ranpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Botad?", answer: "Yes, all flavours are available in eggless variants for Botad delivery." },
      { question: "Do you deliver midnight cakes in Botad?", answer: "Yes, midnight birthday cake delivery is available across Botad city zones." }
    ]
  },

  "morbi": {
    cityName: "Morbi",
    metaTitle: "Cake Delivery in Morbi | Gujarat Ceramic Tile Capital Machchhu River Wall Clock | RedHeart",
    metaDescription: "Order cakes online in Morbi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Morbi",
    metaKeyword: "cake delivery morbi, order cake online morbi, birthday cake morbi, custom cake morbi, same day cake delivery Morbi Gujarat ceramic tile capital Machchhu River wall clock vitrified tiles Wankaner",
    footerContent: `
<h2>Cake Delivery in Morbi — Ceramic Tile Capital of India, Machchhu River, and Gujarat's Industrial Powerhouse</h2>
<p>Morbi — the district headquarters of Morbi district in Gujarat (northern Saurashtra; Machchhu River; carved from Rajkot district in 2013), known worldwide as India's ceramic tile capital (the Ceramic and Tile Industry (Morbi — India's Ceramic Tile Capital; the Morbi-Wankaner ceramic cluster produces over 60% of India's total ceramic tile production and approximately 40% of Asia's vitrified tile production; there are 700+ ceramic manufacturing units in and around Morbi; exports to 100+ countries; the ceramic cluster employs 8-10 lakh people (directly and indirectly); Morbi produces wall tiles, floor tiles, vitrified tiles, sanitaryware, and roof tiles; the Morbi ceramic industry had a turnover of over ₹40,000 crore; the Morbi tile industry is one of India's largest industrial clusters in a single town); the Wall Clock Industry (Morbi is also known as India's Wall Clock hub — a significant cluster of clock manufacturers operates in Morbi); the Machchhu River and the 1979 Morbi Flood Disaster (the Machchhu-2 Dam near Morbi failed catastrophically on August 11, 1979 — the Morbi dam disaster; the flood wave destroyed much of Morbi town; estimated 5,000-15,000 deaths making it one of India's deadliest dam failures; the Morbi town was rebuilt; the Morbi suspension bridge (Jhulto Pul) collapse in October 2022 killed 135 people — another tragedy on the Machchhu River); the Wankaner area (Wankaner — in Morbi district; the Wankaner Palace — a heritage palace of the Wankaner royal estate), and a city of India's Ceramic Tile Capital 60%-production and Machchhu River — is Gujarat's most Morbi-ceramic-tile-capital-60%-India and Machchhu-River Morbi. From birthday parties in Morbi to celebration cakes — RedHeart covers all areas: Morbi city, Wankaner, Halvad, Maliya Miyana, Tankara, Lilapur.</p>
<p>Our Morbi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morbi, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morbi city, Wankaner, Halvad, Maliya Miyana, Tankara, Lilapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Morbi?", answer: "Yes, same-day cake delivery is available across Morbi city, Wankaner, Halvad, Maliya Miyana, and Tankara for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Morbi?", answer: "Yes, all flavours are available in eggless variants for Morbi delivery." },
      { question: "Do you deliver midnight cakes in Morbi?", answer: "Yes, midnight birthday cake delivery is available across Morbi city zones." }
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
