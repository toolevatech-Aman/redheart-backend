// Cakes Batch 29 — 15 cities:
// Arunachal Pradesh: Ziro, Tezu, Roing
// Rajasthan: Pratapgarh (RJ) [slug: pratapgarh-rajasthan]
// UP: Ambedkar Nagar
// Maharashtra: Ratnagiri, Satara, Sangli, Wardha, Gondia
// Karnataka: Ballari, Hospet (Vijayanagara), Kolar
// Gujarat: Patan [100% eggless], Veraval/Gir Somnath [100% eggless]

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "ziro": {
    cityName: "Ziro",
    metaTitle: "Cake Delivery in Ziro | Apatani Tribe UNESCO Arunachal | RedHeart",
    metaDescription: "Order cakes online in Ziro. Same-day delivery across Ziro. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ziro",
    metaKeyword: "cake delivery ziro, order cake online ziro, birthday cake ziro, custom cake ziro, same day cake delivery ziro Apatani tribe Lower Subansiri Arunachal Pradesh UNESCO tentative Ziro Music Festival nose plug kiwi rice beer",
    footerContent: `
<h2>Cake Delivery in Ziro — Apatani Tribe's UNESCO Heritage Valley, Ziro Music Festival, and Arunachal's Pristine Plateau</h2>
<p>Ziro — the headquarters of Lower Subansiri district in Arunachal Pradesh, the beautiful plateau valley home of the Apatani tribal people and a UNESCO World Heritage tentative-list site (the Ziro Valley — at 1,524 metres, a wide, flat plateau in the Eastern Himalayas — is one of India's most remarkable and intact tribal landscapes; the Apatani people, who have inhabited the Ziro Valley for centuries, are renowned for two extraordinary cultural practices: the traditional nose plugs (yaping hullo — brass/cane nose plugs that were worn by Apatani women as a beauty standard and to deter raids from neighbouring tribes; the practice, while discontinued by younger generations, is still visible among older Apatani women) and their uniquely productive wet rice cultivation system (the Apatani have developed one of the most sophisticated traditional wet paddy cultivation systems in Northeast India, combined with fish cultivation in the paddy fields — a zero-waste integrated agriculture); the Apatani agricultural practices were submitted by India to UNESCO for inscription on the Intangible Cultural Heritage list; the Ziro Music Festival (September) — held in the open paddy fields of the Ziro Valley — is one of India's most celebrated independent music festivals, drawing artists and music lovers from across India; the festival is known for combining international indie music with traditional Apatani cultural showcases against the backdrop of the extraordinary landscape; the kiwi fruit cultivation is emerging as a significant horticulture crop in the Ziro area; traditional rice beer (apong) is central to Apatani ceremonial life; pine forests surround the valley), and a valley of extraordinary beauty and cultural uniqueness — is India's most stunning tribal plateau. From birthday parties in Ziro town (Hapoli) to Ziro Music Festival celebration cakes, from anniversary surprises near the Dolo Mando hill to student cakes — RedHeart covers all Ziro zones: Ziro (Hapoli), Hong, Bamin-Potin road, Duta, Mudang Tage, Tajang, Hija, Hari.</p>
<p>Our Ziro cake range: Chocolate, Black Forest, Red Velvet, Kiwi (Ziro highland!), Butterscotch, Photo Cakes, Fondant Apatani Valley / Ziro Music Festival / Nose Plug Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ziro, Arunachal Pradesh (Lower Subansiri)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">1,524 metres — Apatani plateau valley</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ziro town (Hapoli), Hong, Duta, Mudang Tage, Tajang, Hija, Hari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kiwi Cake, Chocolate, Ziro Music Festival Fondant, Apatani Valley Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ziro, Arunachal Pradesh?", answer: "Yes, same-day cake delivery is available across all Ziro areas — Hapoli town, Hong, Duta, Mudang Tage, and Tajang — for orders placed before 3 PM." },
      { question: "Do you have Ziro Music Festival and Apatani Valley-themed cakes?", answer: "Yes! The Ziro Music Festival (held in the open paddy fields of the Apatani plateau — India's most beautiful indie music event) and the Apatani people's UNESCO-nominated rice cultivation traditions and distinctive nose-plug heritage inspire our most extraordinary Ziro fondant cakes." },
      { question: "Are eggless cakes available in Ziro?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Kiwi — are available in eggless variants for Ziro delivery." }
    ]
  },

  "tezu": {
    cityName: "Tezu",
    metaTitle: "Cake Delivery in Tezu | Lohit River Arunachal Pradesh | RedHeart",
    metaDescription: "Order cakes online in Tezu. Same-day delivery across Tezu. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tezu",
    metaKeyword: "cake delivery tezu, order cake online tezu, birthday cake tezu, custom cake tezu, same day cake delivery tezu Lohit district Arunachal Pradesh Myanmar China border Mishmi tribe Dibang Parsuram Kund pilgrimage orange",
    footerContent: `
<h2>Cake Delivery in Tezu — Lohit District's Sunrise Capital, Parshuram Kund's Sacred Pilgrimage, and Mishmi Hills' Eastern Frontier</h2>
<p>Tezu — the headquarters of Lohit district in Arunachal Pradesh, the administrative centre of India's easternmost frontier district (Lohit district is named after the Lohit River — one of the major tributaries of the Brahmaputra — which flows from Tibet (where it is called Zayu Qu) through Arunachal Pradesh to the Assam plains; the Lohit district borders China (Tibet Autonomous Region) to the north, Myanmar to the east, and Assam to the south; the Parshuram Kund — a sacred pilgrimage site on the banks of the Lohit River in Lohit district — is one of the most important Hindu pilgrimage sites in Northeast India; according to legend, the great warrior-sage Parshuram washed his axe (after slaying his mother Renuka) at this kund, and the stone into which the axe struck still exists; thousands of pilgrims (particularly from Assam and beyond) descend on Parshuram Kund for the Makar Sankranti dip (January) — one of the most spectacular winter pilgrimages in the Northeast; the Mishmi people (particularly the Idu Mishmi and Miju Mishmi) are the major tribal inhabitants of Lohit district; the Mishmi are known for their distinctive crafts (particularly the idu-mishmi beaded jewellery and handwoven textiles); the Kamlang Wildlife Sanctuary in Lohit district protects tigers and Asiatic elephants; orange and pineapple are significant horticulture crops in Tezu), and a city at the confluence of pilgrimage, frontier, and tribal heritage — is Arunachal's easternmost major town. From birthday parties in Tezu town to Parshuram Kund pilgrimage celebration cakes, from anniversary surprises near the Lohit River to student cakes — RedHeart covers all Tezu zones: Tezu town, Wakro, Sunpura, Chowkham, Namsai area, Kamlang, Hawai, Hayuliang.</p>
<p>Our Tezu cake range: Chocolate, Black Forest, Red Velvet, Orange (Lohit hills!), Pineapple, Butterscotch, Photo Cakes, Fondant Parshuram Kund / Lohit River / Mishmi Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezu, Arunachal Pradesh (Lohit)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezu town, Wakro, Sunpura, Chowkham, Kamlang, Hawai, Hayuliang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orange, Chocolate, Parshuram Kund Fondant, Lohit River Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tezu, Arunachal Pradesh?", answer: "Yes, same-day cake delivery is available across all Tezu areas — Tezu town, Wakro, Sunpura, Chowkham, and Kamlang — for orders placed before 3 PM." },
      { question: "Do you have Parshuram Kund-themed cakes in Tezu?", answer: "Yes! The Parshuram Kund — the sacred Lohit River pilgrimage site where Parshuram is said to have cleansed his axe, drawing thousands of pilgrims each Makar Sankranti — inspires our most spiritually significant Tezu fondant cake designs." },
      { question: "Are eggless cakes available in Tezu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Orange, Pineapple — are available in eggless variants for Tezu delivery." }
    ]
  },

  "roing": {
    cityName: "Roing",
    metaTitle: "Cake Delivery in Roing | Idu Mishmi Lower Dibang Arunachal | RedHeart",
    metaDescription: "Order cakes online in Roing. Same-day delivery across Roing. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Roing",
    metaKeyword: "cake delivery roing, order cake online roing, birthday cake roing, custom cake roing, same day cake delivery roing Lower Dibang Valley Arunachal Pradesh Idu Mishmi tribe Mayudia pass Mehao lake wildlife sanctuary Dibang river",
    footerContent: `
<h2>Cake Delivery in Roing — Idu Mishmi Heartland, Mehao Lake Wildlife Sanctuary, and Mayudia Pass's High Himalayan Gateway</h2>
<p>Roing — the headquarters of Lower Dibang Valley district in Arunachal Pradesh, the cultural capital of the Idu Mishmi people and gateway to some of Arunachal's most pristine wilderness (the Idu Mishmi — one of Arunachal's most fascinating tribal groups — are indigenous to the Dibang Valley and Lower Dibang Valley; the Idu Mishmi have a rich oral tradition, distinctive music (the Ajile or ritual singing), and a unique worldview in which tigers are considered spiritual kin (ancestors) — reflected in their art and ritual practice; the Mehao Wildlife Sanctuary in Lower Dibang Valley is one of Arunachal's most biodiverse protected areas, home to tigers, clouded leopards, snow leopards, gibbons, and rare birds (the wildlife sanctuary is part of the Dibang-Mehao-Dihang corridor); the Mayudia Pass (2,655 metres) between Roing and Anini (Dibang Valley district) is one of Arunachal's most scenic high-altitude passes with birding opportunities; the Dibang River — one of the major tributaries of the Brahmaputra — originates in the Dibang Valley and provides extraordinary white-water rafting opportunities; the Bhismaknagar Fort ruins (near Roing) are one of Arunachal's few medieval-period archaeological sites — a 9th-century Ahom/Chutiyas kingdom fort complex; kiwi fruit cultivation has been successfully introduced in the hills around Roing), and a city of wilderness, archaeology, and Mishmi culture — is one of Arunachal's most rewarding off-the-beaten-path destinations. From birthday parties in Roing town to wildlife celebration cakes near Mehao, from anniversary surprises to student cakes — RedHeart covers all Roing zones: Roing town, Hunli, Dambuk, Meka, Bomjir, Bhismaknagar Road, Paglam, Etalin.</p>
<p>Our Roing cake range: Chocolate, Black Forest, Red Velvet, Kiwi (Dibang Valley!), Butterscotch, Photo Cakes, Fondant Mehao Wildlife / Dibang River / Idu Mishmi Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roing, Arunachal Pradesh (Lower Dibang Valley)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roing town, Hunli, Dambuk, Meka, Bomjir, Bhismaknagar Road, Etalin</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kiwi, Chocolate, Mehao Wildlife Fondant, Idu Mishmi Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Roing, Arunachal Pradesh?", answer: "Yes, same-day cake delivery is available across all Roing areas — Roing town, Hunli, Dambuk, Meka, and Bomjir — for orders placed before 3 PM." },
      { question: "Do you have Mehao Wildlife and Idu Mishmi-themed cakes in Roing?", answer: "Yes! The Mehao Wildlife Sanctuary (tiger, clouded leopard, gibbon habitat in the Dibang valley wilderness) and the Idu Mishmi tribal tradition of honouring tigers as spiritual kin inspire our most evocative Roing fondant cake designs." },
      { question: "Are eggless cakes available in Roing?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Kiwi — are available in eggless variants for Roing delivery." }
    ]
  },

  "pratapgarh-rajasthan": {
    cityName: "Pratapgarh",
    metaTitle: "Cake Delivery in Pratapgarh Rajasthan | Thewa Art | RedHeart",
    metaDescription: "Order cakes online in Pratapgarh Rajasthan. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pratapgarh Rajasthan",
    metaKeyword: "cake delivery pratapgarh rajasthan, order cake online pratapgarh rajasthan, birthday cake pratapgarh, custom cake pratapgarh rajasthan, same day cake delivery pratapgarh Thewa gold art GI Banswara Chittorgarh Udaipur tribal Bhil Mahi river",
    footerContent: `
<h2>Cake Delivery in Pratapgarh Rajasthan — Thewa Gold Art's UNESCO Journey, Mahi River's Tribal Highlands, and Rajasthan's Newest Tribal District</h2>
<p>Pratapgarh — the headquarters of Pratapgarh district in Rajasthan, one of Rajasthan's newest districts (created in 2008 from parts of Chittorgarh, Banswara, and Udaipur districts), and home to one of India's most extraordinary traditional arts (Pratapgarh is world-renowned for the "Thewa" art form — a uniquely Rajasthani craft of intricately fusing 23-karat gold sheets onto coloured glass (typically emerald-green, royal blue, or wine-red) to create detailed miniature artworks depicting scenes from royal courts, mythology (particularly Radha-Krishna, the Ramayana), and hunting scenes; the Thewa art is practised exclusively by the Raj Soni family of Pratapgarh — a single artisan clan that has maintained the tradition for over 400 years; each Thewa piece requires individually cut 23-karat gold foil hammered and heat-fused onto glass using a special combination of fire and pressure; Thewa has received GI (Geographical Indication) tag protection; Pratapgarh Thewa jewellery (pendants, bangles, brooches) are collected internationally; the Pratapgarh district has a large Bhil tribal population — the Bhil (also called Adivasi) are one of India's largest scheduled tribe groups; the Mahi River flows through Pratapgarh district — the Mahi and its tributaries (Jakham, Som) create the fertile valleys of this hill district; the district also produces maize (corn), wheat, and soybean; the Arnod, Chhoti Sadri, and Dhariyawad areas have distinctive Rajasthani rural culture), and a city of golden art and tribal heritage — is Rajasthan's tribal highland treasure. From birthday parties in Pratapgarh town to corporate cakes at the Thewa art studios, from anniversary surprises near the Mahi River to tribal celebration cakes — RedHeart covers all Pratapgarh RJ zones: Pratapgarh town, Arnod, Chhoti Sadri, Dhariyawad, Pipalkhunt, Mandesar, Suhagpur.</p>
<p>Our Pratapgarh Rajasthan cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Thewa Gold Art / Mahi River / Bhil Tribal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh town, Arnod, Chhoti Sadri, Dhariyawad, Pipalkhunt, Mandesar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Thewa Gold Art Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pratapgarh, Rajasthan?", answer: "Yes, same-day cake delivery is available across all Pratapgarh Rajasthan areas — Pratapgarh town, Arnod, Chhoti Sadri, Dhariyawad, and Pipalkhunt — for orders placed before 3 PM." },
      { question: "Do you have Thewa Gold Art-themed cakes in Pratapgarh Rajasthan?", answer: "Yes! Pratapgarh's extraordinary Thewa art — 23-karat gold intricately fused onto coloured glass by a single Raj Soni artisan clan for 400 years, with GI tag protection — inspires our most unique Pratapgarh Rajasthan fondant cake designs." },
      { question: "Are eggless cakes available in Pratapgarh Rajasthan?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pratapgarh Rajasthan delivery." }
    ]
  },

  "ambedkar-nagar": {
    cityName: "Ambedkar Nagar",
    metaTitle: "Cake Delivery in Ambedkar Nagar | Akbarpur UP | RedHeart",
    metaDescription: "Order cakes online in Ambedkar Nagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ambedkar Nagar",
    metaKeyword: "cake delivery ambedkar nagar, order cake online ambedkar nagar akbarpur, birthday cake ambedkar nagar, custom cake ambedkar nagar, same day cake delivery ambedkar nagar akbarpur UP Tanda Mahu Saryu river sugar mill Faizabad Barabanki",
    footerContent: `
<h2>Cake Delivery in Ambedkar Nagar — Akbarpur's District Capital, Saryu River Agriculture, and UP's Dr. Ambedkar Heritage District</h2>
<p>Ambedkar Nagar — the headquarters of Ambedkar Nagar district in Uttar Pradesh (Ambedkar Nagar district — named after Dr. B.R. Ambedkar, India's constitution architect and leader of the Dalit liberation movement — was created in 1995 when it was carved out of Faizabad district; the district's headquarters is at Akbarpur, a historically significant town on the banks of the Tamsa (Tons) River; the district is named to honour Dr. Ambedkar's memory and his mission of social equity — a large portion of the district's population belongs to Scheduled Caste communities; Tanda — the largest commercial town in Ambedkar Nagar district (and formerly the district's twin centre) — is known for its silk and power-loom textile industry; the Tanda textile industry (cotton and synthetic fabric, including the popular "Tanda ka kapraa" for affordable clothing) is a significant manufacturing base; the Saryu River (a major right-bank tributary of the Ghaghara, passing through the Faizabad-Ambedkar Nagar area) provides irrigation for sugarcane and paddy cultivation; the Ambedkar Nagar district is a sugarcane-growing belt with cooperative sugar mills at Shahganj and Tanda; the Gola Gokaran Nath temple and several Devi temples are important pilgrimage sites in the area; the district also has significant paddy and wheat production), and a district of social justice heritage and agricultural prosperity — is a city of UP's eastern heartland. From birthday parties in Akbarpur to corporate cakes at the district offices, from anniversary surprises near the Saryu to student cakes at the colleges — RedHeart covers all Ambedkar Nagar zones: Akbarpur, Tanda, Jalalpur, Bhiti, Bhikhapura, Ramnagar, Baskhari, Katehari.</p>
<p>Our Ambedkar Nagar cake range: Chocolate, Black Forest, Red Velvet, Mango (UP Dusheri!), Butterscotch, Photo Cakes, Fondant Dr. Ambedkar / Saryu River / Tanda Textile-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambedkar Nagar (Akbarpur), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Akbarpur, Tanda, Jalalpur, Bhiti, Bhikhapura, Ramnagar, Baskhari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ambedkar Nagar / Akbarpur UP?", answer: "Yes, same-day cake delivery is available across all Ambedkar Nagar areas — Akbarpur, Tanda, Jalalpur, Bhiti, and Ramnagar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ambedkar Nagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ambedkar Nagar delivery." },
      { question: "Do you deliver midnight cakes in Ambedkar Nagar?", answer: "Yes, midnight birthday cake delivery is available across Akbarpur, Tanda, and residential zones of Ambedkar Nagar district." }
    ]
  },

  "ratnagiri": {
    cityName: "Ratnagiri",
    metaTitle: "Cake Delivery in Ratnagiri | Alphonso Mango Konkan Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Ratnagiri. Same-day delivery across Ratnagiri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ratnagiri",
    metaKeyword: "cake delivery ratnagiri, order cake online ratnagiri, birthday cake ratnagiri, custom cake ratnagiri, same day cake delivery ratnagiri Alphonso hapus mango Konkan coast Bal Gangadhar Tilak birthplace GI cashew Ratnadurg fort Maharashtra",
    footerContent: `
<h2>Cake Delivery in Ratnagiri — Alphonso Mango's GI Capital, Bal Gangadhar Tilak's Birthplace, and Konkan's Most Beautiful Coastal District</h2>
<p>Ratnagiri — the headquarters of Ratnagiri district in Maharashtra's Konkan coast, the city that gave the world the Alphonso (Hapus) mango and the great freedom fighter Bal Gangadhar Tilak (the Alphonso mango (Mangifera indica 'Alphonso') — called Hapus in Marathi — is universally recognized as India's finest mango variety; Ratnagiri's GI-tagged Alphonso is the most expensive mango traded in India and internationally (prized in Japan, UK, UAE markets); the Alphonso's extraordinary fragrance, bright saffron colour, low-fibre flesh, and honey-sweet taste with slight tartness are maximised by the Konkan's laterite soil, sea breeze, and specific climate; the peak Alphonso season (March-May) transforms Ratnagiri into a pilgrimage for mango lovers; Bal Gangadhar Tilak (1856-1920) — one of India's greatest freedom fighters, called "Lokmanya" — was born in Ratnagiri (in the village of Chikhalgaon, Ratnagiri district); Tilak, who famously said "Swaraj is my birthright, and I shall have it," organized the Ganesh Chaturthi festival as a mass movement and the Shivaji Jayanti celebrations; the Tilak Ali Museum in Ratnagiri town is significant; the Ratnadurg Fort (15th century) is a magnificent coastal fort at the Ratnagiri headland overlooking the Arabian Sea; the Bhatye Beach, Ganpatipule Beach, and numerous Konkan coves are scenic attractions; cashew (kaju) is another major crop of Ratnagiri district), and a city of India's most beloved mango — is Maharashtra's Konkan crown jewel. From birthday parties near the Mango Research Station to corporate cakes at the Alphonso export facilities, from Ganesh Chaturthi cakes to anniversary surprises by the Arabian Sea — RedHeart covers all Ratnagiri zones: Ratnagiri town, Ganpatipule, Chiplun, Guhagar, Dapoli, Rajapur, Lanja, Sangameshwar.</p>
<p>Our Ratnagiri cake range: Chocolate, Black Forest, Red Velvet, Alphonso Hapus (Ratnagiri GI!), Cashew (Konkan!), Coconut, Butterscotch, Photo Cakes, Fondant Hapus Mango / Ratnadurg Fort / Lokmanya Tilak-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ratnagiri, Maharashtra (Konkan)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ratnagiri town, Ganpatipule, Chiplun, Guhagar, Dapoli, Rajapur, Lanja</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alphonso Hapus, Cashew, Coconut, Chocolate, Ratnadurg Fondant, Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ratnagiri?", answer: "Yes, same-day cake delivery is available across all Ratnagiri areas — Ratnagiri town, Ganpatipule, Chiplun, Guhagar, Dapoli, and Rajapur — for orders placed before 3 PM." },
      { question: "Do you have Alphonso Hapus Mango cake in Ratnagiri?", answer: "Yes! The GI-tagged Ratnagiri Alphonso (Hapus) — India's most prized mango, grown in Ratnagiri's laterite-enriched Konkan soil — is the centrepiece of our Ratnagiri Alphonso cake. This is the mango traded at premium prices in Japan, UK, and UAE — now in cake form for Ratnagiri celebrations." },
      { question: "Are eggless cakes available in Ratnagiri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Alphonso Hapus, Cashew, Coconut — are available in eggless variants for Ratnagiri delivery." }
    ]
  },

  "satara": {
    cityName: "Satara",
    metaTitle: "Cake Delivery in Satara | Chhatrapati Shivaji Birthplace Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Satara. Same-day delivery across Satara. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Satara",
    metaKeyword: "cake delivery satara, order cake online satara, birthday cake satara, custom cake satara, same day cake delivery satara Chhatrapati Shivaji Maharaj Pratapgad fort Wai Krishna river Kaas plateau UNESCO strawberry Maharashtra",
    footerContent: `
<h2>Cake Delivery in Satara — Chhatrapati Shivaji's Pratapgad Fort, Kaas Plateau's UNESCO Wildflower Valley, and Krishna River's Birthplace</h2>
<p>Satara — the headquarters of Satara district in Maharashtra, a city of extraordinary Maratha history and exceptional natural beauty (Satara was the seat of the Chhatrapati (ruler) after the Maratha Empire's rise — the Satara branch of the Bhonsle dynasty (Shivaji Maharaj's descendants) ruled from Satara for over a century before the British deposed the last Chhatrapati in 1848; the Ajinkyatara Fort that overlooks Satara town was one of the most important Maratha military positions; the Pratapgad Fort — 24 km from Satara in the Sahyadri mountains — is one of Maharashtra's most legendary forts; it was at Pratapgad that Chhatrapati Shivaji Maharaj killed Afzal Khan (the powerful Bijapur general who came to neutralize Shivaji in 1659) in a famous encounter that became the turning point of Maratha power; the Kaas Plateau (Kas Pathar) — 22 km from Satara — is a UNESCO World Natural Heritage Site: a basalt plateau that transforms into a spectacular carpet of wildflowers (Senecio grahamii, Ceropegia, Impatiens spp.) during the monsoon season (August-September); the Kaas is called the "Valley of Flowers of Maharashtra"; the Krishna River originates near Mahabaleshwar (Satara district) at Mahabaleshwar; the Mahabaleshwar-Panchgani plateau in Satara district is Maharashtra's premier hill station area and is famous for strawberry cultivation (Mahabaleshwar strawberries are India's most popular fresh strawberries)), and a city of Maratha glory and UNESCO natural wonder — is Maharashtra's most historically and naturally endowed district capital. From birthday parties in Satara town to Pratapgad celebration cakes, from Kaas Plateau-themed anniversary cakes to student cakes near Satara's colleges — RedHeart covers all Satara zones: Satara town, Karad, Koregaon, Mahabaleshwar, Panchgani, Wai, Patan, Medha.</p>
<p>Our Satara cake range: Chocolate, Black Forest, Red Velvet, Strawberry (Mahabaleshwar!), Butterscotch, Photo Cakes, Fondant Pratapgad Fort / Kaas Plateau Wildflowers / Shivaji Maharaj-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Satara, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Satara town, Karad, Koregaon, Mahabaleshwar, Panchgani, Wai, Patan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Strawberry, Chocolate, Pratapgad Fondant, Kaas Plateau Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Satara?", answer: "Yes, same-day cake delivery is available across all Satara areas — Satara town, Karad, Koregaon, Mahabaleshwar, Panchgani, and Wai — for orders placed before 3 PM." },
      { question: "Do you have Mahabaleshwar Strawberry cake and Pratapgad Fort-themed cakes in Satara?", answer: "Yes! Mahabaleshwar's strawberries (India's most popular fresh strawberries, grown in Satara district's highland climate) and the legendary Pratapgad Fort (where Shivaji Maharaj changed Maratha history in 1659) and the UNESCO Kaas Plateau wildflower valley inspire our most spectacular Satara cakes." },
      { question: "Are eggless cakes available in Satara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Strawberry — are available in eggless variants for Satara delivery." }
    ]
  },

  "sangli": {
    cityName: "Sangli",
    metaTitle: "Cake Delivery in Sangli | Turmeric Capital Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Sangli. Same-day delivery across Sangli. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sangli",
    metaKeyword: "cake delivery sangli, order cake online sangli, birthday cake sangli, custom cake sangli, same day cake delivery sangli turmeric haldi capital GI Maharashtra Krishna river Miraj Kirloskarwadi sugar grapes",
    footerContent: `
<h2>Cake Delivery in Sangli — India's Turmeric Capital, Krishna River's Agricultural Bounty, and Maharashtra's Wine & Sugar Heartland</h2>
<p>Sangli — the headquarters of Sangli district in Maharashtra, the city that is the undisputed turmeric (haldi) capital of India (Sangli hosts Asia's largest turmeric trading market — the Sangli turmeric mandi; approximately 40% of all turmeric traded in India passes through the Sangli market; the Sangli turmeric (particularly the Rajapuri variety) is prized for its high curcumin content (curcumin is the active anti-inflammatory compound in turmeric); the Sangli turmeric has GI (Geographical Indication) tag recognition; farmers from Sangli district — particularly from the Krishna River irrigated areas — grow over 1 lakh acres of turmeric annually; the turmeric-stained hands and warehouses of Sangli's mandi are a distinctive sight; the Krishna River flows through Sangli district, and the Krishna backwaters and canal networks provide irrigation for sugarcane, turmeric, grapes, and bananas; the Sangli-Miraj region (Miraj is a twin city of Sangli, known for its musical instrument manufacturing — particularly the Miraj sitars and tanpuras used by classical musicians across India) is a cultural hub; Miraj sitars have been used by Pandit Ravi Shankar and other greats; Sangli district also has significant vineyards — the Nira-Deoghar area has wine grape cultivation; Kirloskarwadi industrial township near Sangli is home to Kirloskar engineering), and a city of agricultural trading and cultural instrument-making — is Maharashtra's turmeric throne. From birthday parties near the turmeric mandi to corporate cakes at the Kirloskar factories, from anniversary surprises near the Krishna ghats to student cakes — RedHeart covers all Sangli zones: Sangli town, Miraj, Kupwad, Islampur, Shirala, Atpadi, Palus, Tasgaon, Vita.</p>
<p>Our Sangli cake range: Chocolate, Black Forest, Red Velvet, Mango (Maharashtra!), Butterscotch, Photo Cakes, Fondant Sangli Turmeric Market / Miraj Sitar / Krishna River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangli, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sangli town, Miraj, Kupwad, Islampur, Shirala, Atpadi, Palus, Tasgaon, Vita</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Turmeric Market Fondant, Miraj Sitar Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sangli?", answer: "Yes, same-day cake delivery is available across all Sangli areas — Sangli town, Miraj, Kupwad, Islampur, Shirala, Tasgaon, and Vita — for orders placed before 3 PM." },
      { question: "Do you have Sangli Turmeric Market and Miraj Sitar-themed cakes?", answer: "Yes! Sangli's Asia's largest turmeric (haldi) trading market — where 40% of India's turmeric is traded and the Rajapuri turmeric has GI protection — and Miraj's famous sitars (used by Pandit Ravi Shankar) inspire our most distinctive Sangli fondant cake designs." },
      { question: "Are eggless cakes available in Sangli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sangli delivery." }
    ]
  },

  "wardha": {
    cityName: "Wardha",
    metaTitle: "Cake Delivery in Wardha | Sevagram Gandhi Ashram Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Wardha. Same-day delivery across Wardha. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Wardha",
    metaKeyword: "cake delivery wardha, order cake online wardha, birthday cake wardha, custom cake wardha, same day cake delivery wardha Sevagram Gandhi ashram Mahatma cotton oranges Paunar Vinoba Bhave Maharashtra Nagpur road",
    footerContent: `
<h2>Cake Delivery in Wardha — Sevagram Gandhi Ashram, Vinoba Bhave's Paunar, and Vidarbha's Gandhi Heritage District</h2>
<p>Wardha — the headquarters of Wardha district in Maharashtra's Vidarbha region, the district forever associated with Mahatma Gandhi's Sevagram Ashram and India's independence movement (the Sevagram Ashram — established by Mahatma Gandhi in 1936 in the village of Sevagram (12 km from Wardha) — was Gandhi's primary residence and the operational headquarters of the Indian National Congress during the last phase of the freedom struggle (1936-1946); from Sevagram, Gandhi directed major campaigns including the Quit India Movement (1942) and the Wardha resolution; the Mahatma Gandhi's original hut, the prayer grounds, the spinning wheel area, and the living quarters of Gandhi and Kasturba Gandhi are preserved at Sevagram as a living museum; the Magan Sangrahalaya (Museum of Rural Technology) at Sewagram documents Gandhi's vision of village self-sufficiency; the Paunar Ashram (Brahma Vidya Mandir) — 8 km from Wardha — was the ashram of Acharya Vinoba Bhave (Gandhi's spiritual heir), who launched the Bhoodan movement (land-gift movement) in 1951; Vinoba Bhave conducted his extraordinary walking padayatra across India from Paunar, receiving land donations from landlords for distribution to landless peasants; the Wardha River flows through the district; Wardha district is in the heart of the Vidarbha cotton-growing belt; Vidarbha's Akola Nagpur area also produces significant oranges), and a district of Gandhian heritage and Vidarbha cotton — is a city of profound national significance. From birthday parties near the Sevagram to corporate cakes at Wardha's educational institutions, from Gandhi Jayanti celebration cakes to anniversary surprises near the Wardha River — RedHeart covers all Wardha zones: Wardha town, Sevagram, Arvi, Pulgaon, Hinganghat, Deoli, Seloo, Samudrapur.</p>
<p>Our Wardha cake range: Chocolate, Black Forest, Red Velvet, Orange (Vidarbha!), Butterscotch, Photo Cakes, Fondant Sevagram Gandhi Ashram / Spinning Wheel (Charkha) / Vinoba Bhave Paunar-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wardha, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wardha town, Sevagram, Arvi, Pulgaon, Hinganghat, Deoli, Seloo, Samudrapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sevagram Fondant, Charkha Fondant, Orange, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Wardha?", answer: "Yes, same-day cake delivery is available across all Wardha areas — Wardha town, Sevagram, Arvi, Pulgaon, Hinganghat, and Deoli — for orders placed before 3 PM." },
      { question: "Do you have Sevagram Gandhi Ashram-themed cakes in Wardha?", answer: "Yes! The Sevagram Ashram — Mahatma Gandhi's living headquarters during the Quit India Movement (1942), where his original hut and spinning wheel (charkha) are preserved — and Vinoba Bhave's Paunar Bhoodan movement inspire our most patriotically meaningful Wardha fondant cakes." },
      { question: "Are eggless cakes available in Wardha?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Orange — are available in eggless variants for Wardha delivery." }
    ]
  },

  "gondia": {
    cityName: "Gondia",
    metaTitle: "Cake Delivery in Gondia | Rice City Wainganga Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Gondia. Same-day delivery across Gondia. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gondia",
    metaKeyword: "cake delivery gondia, order cake online gondia, birthday cake gondia, custom cake gondia, same day cake delivery gondia rice city Wainganga river Maharashtra Balaghat road Chhattisgarh border Navegaon lake Pench Tiger Reserve",
    footerContent: `
<h2>Cake Delivery in Gondia — Maharashtra's Rice City, Navegaon Lake's Migratory Birds, and Wainganga River's Jungle Corridor</h2>
<p>Gondia — the headquarters of Gondia district in Maharashtra's Vidarbha region, known as Maharashtra's "Rice Bowl" and "Rice City" (Gondia district is one of Maharashtra's leading paddy (rice) producing districts — the region's black cotton soil and the network of rivers (Wainganga, Bagh, Chulband) support extensive wet paddy cultivation; the Gondia region (along with neighbouring Bhandara) is nicknamed the "Rice Bowl of Vidarbha"; the Gondia rice market (mandi) is one of the largest rice trading hubs in central India; the Bhandara-Gondia area is known for its "Ambemohar" variety of rice — a fragrant scented rice with a mango-blossom aroma; the Navegaon Lake — 30 km from Gondia — is one of Maharashtra's largest natural lakes and a Ramsar-recognised wetland; the Navegaon-Nagzira Tiger Reserve (straddling Gondia and Bhandara districts) is one of Maharashtra's important tiger habitats and has significant leopard, wild dog, and bison populations; Gondia district borders Chhattisgarh and Madhya Pradesh — the district is at the junction of the Central Indian forest belt; the Wainganga River originates in Madhya Pradesh's Satpuda hills and flows through Gondia before meeting the Pranhita-Godavari system; the Gondia area is famous for its extensive bamboo forests and the lac (shellac) industry; the town of Tirora in Gondia has Warli tribe communities), and a district of rice paddies and tiger forests — is Maharashtra's jungle heartland. From birthday parties in Gondia town to corporate cakes at the rice mills, from anniversary surprises near Navegaon Lake to student cakes — RedHeart covers all Gondia zones: Gondia town, Tirora, Salekasa, Amgaon, Deori, Sadak Arjuni, Goregaon, Arjuni Morgaon.</p>
<p>Our Gondia cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Navegaon Lake / Gondia Rice Bowl / Wainganga Tiger Corridor-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gondia, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gondia town, Tirora, Salekasa, Amgaon, Deori, Sadak Arjuni, Goregaon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Navegaon Lake Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gondia?", answer: "Yes, same-day cake delivery is available across all Gondia areas — Gondia town, Tirora, Salekasa, Amgaon, and Deori — for orders placed before 3 PM." },
      { question: "Do you have Navegaon Lake / Gondia Rice Bowl-themed cakes?", answer: "Yes! The Navegaon Lake (Ramsar wetland, Maharashtra's largest natural lake) and the Gondia rice bowl identity (Ambemohar fragrant rice, one of Maharashtra's finest scented varieties) inspire our most authentic Gondia fondant cakes." },
      { question: "Are eggless cakes available in Gondia?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Gondia delivery." }
    ]
  },

  "ballari": {
    cityName: "Ballari",
    metaTitle: "Cake Delivery in Ballari | Iron Ore Steel Karnataka | RedHeart",
    metaDescription: "Order cakes online in Ballari. Same-day delivery across Ballari. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ballari",
    metaKeyword: "cake delivery ballari bellary, order cake online ballari, birthday cake ballari, custom cake ballari, same day cake delivery ballari Bellary iron ore steel Karnataka NMDC Sandur Hospet Hampi adjacent industrial",
    footerContent: `
<h2>Cake Delivery in Ballari — India's Iron Ore Capital, Sandur's Steel Legacy, and Karnataka's Industrial Powerhouse</h2>
<p>Ballari (also spelled Bellary) — the headquarters of Ballari district in Karnataka, one of India's largest iron ore mining and processing cities (Ballari district sits atop one of India's richest iron ore deposits; the Bellary-Hospet iron ore belt is one of the most significant iron ore mining areas in Asia, producing high-grade haematite and magnetite ore used in Indian and international steel manufacturing; the NMDC (National Mineral Development Corporation), SAIL, and private mining companies operate extensively in the Ballari and Sandur areas; the Sandur Manganese & Iron Ores Ltd (SMIORE) and numerous other companies have operations here; the iron ore mining boom in Bellary in the 2000s created significant wealth (and also significant controversy regarding illegal mining — the Reddy brothers' mining empire and its eventual CBI investigation became a national political story); Ballari has significant steel plant capacity through Arcelor Mittal, JSW Steel (Bellary), and other manufacturers; the Ballari fort (a British-era fort) and the Kantheerava stadium are local landmarks; the Ballari area produces peanuts (groundnut) as a major agricultural crop — Ballari groundnuts are traded across Karnataka and Andhra Pradesh; the Hampi UNESCO World Heritage Site (ruins of Vijayanagara Empire) is 13 km from Hospet, which is 50 km from Ballari), and a city of mineral wealth and groundnut farming — is Karnataka's industrial engine. From birthday parties in Ballari town to corporate cakes at the steel and mining offices, from anniversary surprises near the Tungabhadra to student cakes — RedHeart covers all Ballari zones: Ballari town, Sandur, Kudligi, Siruguppa, Hagaribommanahalli, Kampli, Hadagali, Hosapete Road.</p>
<p>Our Ballari cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Iron Ore Mine / Vijayanagara / Sandur Hills-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballari (Bellary), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballari town, Sandur, Kudligi, Siruguppa, Hagaribommanahalli, Kampli, Hosapete Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Iron Ore Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ballari / Bellary?", answer: "Yes, same-day cake delivery is available across all Ballari areas — Ballari town, Sandur, Kudligi, Siruguppa, and Hosapete Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ballari?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ballari delivery." },
      { question: "Do you deliver midnight cakes in Ballari?", answer: "Yes, midnight birthday cake delivery is available across Ballari's residential and industrial township zones." }
    ]
  },

  "hospet": {
    cityName: "Hospet",
    metaTitle: "Cake Delivery in Hospet | Hampi UNESCO Vijayanagara Karnataka | RedHeart",
    metaDescription: "Order cakes online in Hospet. Same-day delivery across Hospet. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hospet",
    metaKeyword: "cake delivery hospet vijayanagara, order cake online hospet, birthday cake hospet, custom cake hospet, same day cake delivery hospet Hampi UNESCO World Heritage Vijayanagara Empire Tungabhadra reservoir Kishkindha Karnataka",
    footerContent: `
<h2>Cake Delivery in Hospet — Gateway to Hampi's UNESCO Vijayanagara Ruins, Tungabhadra Dam's Reservoir, and Karnataka's Ancient Empire City</h2>
<p>Hospet (Hosapete) — the headquarters of Vijayanagara district in Karnataka, the gateway city to Hampi — one of India's most magnificent UNESCO World Heritage Sites (the Hampi ruins — 13 km from Hospet — are the remains of Vijayanagara, the capital of the Vijayanagara Empire (1336-1646 CE) — one of the greatest Hindu empires in Indian history; at its peak, Vijayanagara was one of the largest and wealthiest cities in the world, with a population of 500,000-1,000,000 — rivalling contemporaneous London and Paris; the empire's capital was described by Persian, Portuguese, and Chinese travellers as a city of extraordinary splendour; the Vittala Temple (with the magnificent Stone Chariot and the Musical Pillars), the Virupaksha Temple (still active, 7th century), the Royal Enclosure, the Queen's Bath, the Elephant Stables, and Matanga Hill are among Hampi's greatest monuments; the Tungabhadra River flows through the Hampi gorge; the Tungabhadra Dam (28 km from Hospet) is one of Karnataka's major irrigation and hydropower projects; the Kishkinda of the Ramayana — where Rama met Sugriva and Hanuman was born (Anegundi and Kishkindha are near Hampi) — adds mythological significance; Hospet itself is a commercial and transport hub for the area; the Karnataka Samskrit University is at Shivamogga but the Hampi University is at the ruins; sugarcane is grown extensively in the Tungabhadra irrigation command area around Hospet), and a city at the doorstep of one of history's greatest empires — is the gateway to Karnataka's most epic heritage. From birthday parties in Hospet to corporate cakes at the dam and heritage tourism offices, from anniversary surprises near Hampi to student cakes — RedHeart covers all Hospet zones: Hospet town, Hampi, Munirabad, Toranagallu, Anegundi, Kamalapuram, Kampli.</p>
<p>Our Hospet cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Hampi Stone Chariot / Vittala Temple / Vijayanagara Empire-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hospet (Vijayanagara district), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hospet town, Hampi, Munirabad, Toranagallu, Anegundi, Kamalapuram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hampi Stone Chariot Fondant, Vittala Temple Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hospet near Hampi?", answer: "Yes, same-day cake delivery is available across all Hospet areas — Hospet town, Hampi, Munirabad, Anegundi, and Kamalapuram — for orders placed before 3 PM." },
      { question: "Do you have Hampi Stone Chariot / Vijayanagara Empire-themed cakes in Hospet?", answer: "Yes! The Hampi Stone Chariot (the most iconic symbol of the Vijayanagara Empire, at the Vittala Temple) and the extraordinary ruins of what was once one of the world's largest cities (500,000+ population, 1336-1646 CE) inspire our most historically majestic Hospet fondant cake designs." },
      { question: "Are eggless cakes available in Hospet?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hospet delivery." }
    ]
  },

  "kolar": {
    cityName: "Kolar",
    metaTitle: "Cake Delivery in Kolar | KGF Gold Fields Karnataka | RedHeart",
    metaDescription: "Order cakes online in Kolar. Same-day delivery across Kolar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kolar",
    metaKeyword: "cake delivery kolar, order cake online kolar, birthday cake kolar, custom cake kolar, same day cake delivery kolar KGF Kolar Gold Fields deepest mine silk tomato Karnataka Bangarpet Mulbagal Srinivasapura",
    footerContent: `
<h2>Cake Delivery in Kolar — Kolar Gold Fields' Deep Mine Legacy, India's Tomato Capital, and Karnataka's Silk District</h2>
<p>Kolar — the headquarters of Kolar district in Karnataka, a city synonymous with the legendary Kolar Gold Fields (KGF) (the Kolar Gold Fields (KGF) — located at Kolar Gold Fields town (Robertsonpet), 30 km from Kolar — was India's largest gold mining operation and for over a century produced most of India's gold; the Bharat Gold Mines (BGM) operated the deepest gold mines in Asia — the Champion Reef mine and Taylor Shaft at KGF reached depths of 3.2 km below the surface, making them some of the deepest gold mines in the world; the KGF mines were operational from the 1880s (under British Mysore Mines Limited, later Indian operations) to 2001, when they were closed due to non-viability; the KGF area has a unique multicultural township culture — with Tamil, Telugu, Kannada, Urdu, and Anglo-Indian communities all coexisting in mining-era bungalows; the Bollywood film "KGF: Chapter 1 & 2" (2018, 2022) — shot in Kannada and dubbed in all major languages — brought massive national and international attention to KGF's story; the real KGF mines, the Robertsonpet township, and the machinery relics are significant heritage tourism sites; Kolar district is India's leading tomato-producing district (the Srinivasapura area's tomatoes are traded in wholesale mandis across South India — the tomato price crash/surge cycles from Kolar make national news); the Kolar district also produces significant silk and is known for silk saree weaving), and a city of gold mine glory and agricultural produce — is Karnataka's most legendarily famous industrial district. From birthday parties near the KGF mines to corporate cakes at agricultural mandis, from anniversary surprises to student cakes — RedHeart covers all Kolar zones: Kolar town, KGF/Robertsonpet, Bangarpet, Mulbagal, Srinivasapura, Malur, Chintamani, Sidlaghatta.</p>
<p>Our Kolar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant KGF Gold Mine / Kolar Tomato / Deep Mine-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolar, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolar town, KGF/Robertsonpet, Bangarpet, Mulbagal, Srinivasapura, Malur, Chintamani</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, KGF Gold Mine Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kolar?", answer: "Yes, same-day cake delivery is available across all Kolar areas — Kolar town, KGF/Robertsonpet, Bangarpet, Mulbagal, Srinivasapura, and Malur — for orders placed before 3 PM." },
      { question: "Do you have KGF (Kolar Gold Fields) Mine-themed cakes?", answer: "Yes! The KGF mines — Asia's deepest gold mines (3.2 km below surface), the legendary Bollywood franchise KGF: Chapter 1 & 2, and the multicultural Anglo-Indian mining township heritage — inspire our most dramatic Kolar KGF fondant cake designs." },
      { question: "Are eggless cakes available in Kolar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kolar delivery." }
    ]
  },

  "patan": {
    cityName: "Patan",
    metaTitle: "Cake Delivery in Patan | Rani ki Vav UNESCO Gujarat | RedHeart",
    metaDescription: "Order cakes online in Patan Gujarat. 100% eggless pure veg. Same-day delivery. Cakes from ₹499.",
    h1: "Online Cake Delivery in Patan Gujarat",
    metaKeyword: "cake delivery patan gujarat, order cake online patan, birthday cake patan gujarat, custom cake patan, same day cake delivery patan Rani ki Vav UNESCO stepwell Patola silk GI Saraswati river Solanki dynasty pure veg eggless",
    footerContent: `
<h2>Cake Delivery in Patan Gujarat — Rani ki Vav's UNESCO Stepwell, Patola Silk's Royal Weave, and Gujarat's Medieval Solanki Capital — 100% Eggless, Pure Veg</h2>
<p>Patan — a historic city in north Gujarat, the ancient capital of the Solanki dynasty (Chaulukya kingdom) and home to two of Gujarat's most treasured cultural heritages (the Rani ki Vav (Queen's Stepwell) — built in the 11th century CE by Queen Udayamati in memory of her husband Bhimdev I of the Solanki dynasty — was declared a UNESCO World Heritage Site in 2014; Rani ki Vav is considered the finest and most ornately decorated stepwell in India; its seven levels of stairs are adorned with over 500 principal sculptures and more than 1,000 minor sculptures depicting scenes from the Dashavatara (10 avatars of Vishnu), Brahma, Shiva, and various apsaras and nāyikās; the stepwell extends 64 metres into the earth; the Rani ki Vav image appears on the back of India's ₹100 currency note; the Patola silk — woven in Patan — is India's most complex and expensive traditional silk fabric; the Patola is a double-ikat woven silk: both the warp and weft threads are resist-dyed before weaving, and the final pattern must align perfectly; a single Patan Patola saree can take 6 months to 2 years to complete and costs ₹50,000 to ₹10 lakh; the Salvi family community of weavers in Patan are the primary custodians of the Patola tradition; the Patola has GI tag protection; the ancient Saraswati River (now mostly underground) flowed through Patan; the Hemachandrya Jain Knowledge Academy was established in Patan by the great Jain scholar Hemachandra (1089-1173), who created the famous Apabhramsha language literary tradition and advised King Kumarapala). All Patan cakes are 100% eggless and pure vegetarian. From birthday parties near the Rani ki Vav to corporate cakes at the Patola saree studios, from anniversary surprises near the Saraswati to celebration cakes for Patan's Jain community — RedHeart covers all Patan zones: Patan town, Sidhpur, Chanasma, Harij, Radhanpur, Sami, Visnagar, Kankrej.</p>
<p>Our Patan Gujarat cake range: Pure Veg Chocolate, Black Forest, Red Velvet, Mango (Kesar!), Butterscotch, Photo Cakes, Fondant Rani ki Vav UNESCO / Patola Silk / Solanki Dynasty-theme cakes. 100% Eggless. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patan, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cake type</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% Eggless, Pure Veg (all cakes)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patan town, Sidhpur, Chanasma, Harij, Radhanpur, Sami, Visnagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar Mango, Chocolate, Rani ki Vav UNESCO Fondant, Patola Silk Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Patan, Gujarat 100% eggless?", answer: "Yes! All cakes delivered in Patan are 100% eggless and pure vegetarian, honouring Gujarat's deeply Jain and Vaishnavite vegetarian food culture. Every flavour available eggless." },
      { question: "Do you have Rani ki Vav UNESCO Stepwell and Patola Silk-themed cakes in Patan?", answer: "Yes! Patan's Rani ki Vav — India's finest stepwell (UNESCO World Heritage Site, featured on the ₹100 note) — and the Patola double-ikat silk (the world's most complex handwoven fabric, one saree taking up to 2 years) inspire our most artistic Patan fondant cakes." },
      { question: "Can I get same-day cake delivery in Patan Gujarat?", answer: "Yes, same-day cake delivery is available across all Patan areas — Patan town, Sidhpur, Chanasma, Harij, and Radhanpur — for orders placed before 3 PM." }
    ]
  },

  "veraval": {
    cityName: "Veraval",
    metaTitle: "Cake Delivery in Veraval | Somnath Jyotirlinga Gir Gujarat | RedHeart",
    metaDescription: "Order cakes online in Veraval. 100% eggless pure veg. Same-day delivery. Cakes from ₹499.",
    h1: "Online Cake Delivery in Veraval (Gir Somnath)",
    metaKeyword: "cake delivery veraval somnath, order cake online veraval, birthday cake veraval, custom cake veraval somnath, same day cake delivery veraval Somnath Jyotirlinga Gir lion Gujarat pure veg eggless fishing port Saurashtra",
    footerContent: `
<h2>Cake Delivery in Veraval — Somnath's First Jyotirlinga, Gir National Park's Asiatic Lions, and Gujarat's Fishing Port City — 100% Eggless, Pure Veg</h2>
<p>Veraval — the headquarters of Gir Somnath district in Gujarat, a city at the confluence of the sacred Somnath Jyotirlinga temple and India's last Asiatic Lion sanctuary (the Somnath Temple — 5 km from Veraval — is the first and most sacred of India's 12 Jyotirlingas (shrines of Shiva where the divine lingam was self-manifest); the original Somnath temple was repeatedly attacked and looted by Mahmud of Ghazni (1024 CE), Allauddin Khilji, and Aurangzeb over the centuries — the temple's gold and diamond wealth was legendary; after independence, Sardar Vallabhbhai Patel's championing of the temple's reconstruction (inaugurated by President Rajendra Prasad in 1951) was a landmark moment of post-independence Hindu cultural revival; the current Somnath temple — rebuilt in Chalukya (Sompura) style — stands on the original site at the Triveni Sangam where the Kapil, Hiran, and Saraswati rivers meet the Arabian Sea; the Prabhasa Patan Museum near Somnath has artefacts from the temple's history; the Gir National Park and Wildlife Sanctuary — 65 km from Veraval — is the last remaining natural habitat of the Asiatic Lion (Panthera leo persica) in the world; Gir is the world's only wild Asiatic lion reserve, and the Gujarat government's conservation success in growing the Gir lion population from ~177 (1972) to ~700+ (2020) is a landmark wildlife recovery story; Veraval itself is one of Gujarat's major fishing ports — the Arabian Sea fishermen of Kharwa community are based here). All Veraval cakes are 100% eggless and pure vegetarian. From birthday parties near Somnath Temple to Gir safari celebration cakes, from Shravan Maas religious cakes to anniversary surprises — RedHeart covers all Veraval/Gir Somnath zones: Veraval town, Somnath, Una, Kodinar, Sutrapada, Talala (Gir), Visavadar, Dhari.</p>
<p>Our Veraval cake range: Pure Veg Chocolate, Black Forest, Red Velvet, Mango (Kesar!), Butterscotch, Photo Cakes, Fondant Somnath Temple Jyotirlinga / Gir Asiatic Lion / Sardar Patel Tribute-theme cakes. 100% Eggless. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Veraval (Gir Somnath), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cake type</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% Eggless, Pure Veg (all cakes)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Veraval town, Somnath, Una, Kodinar, Sutrapada, Talala (Gir), Visavadar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar Mango, Chocolate, Somnath Temple Fondant, Gir Lion Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Veraval / Somnath 100% eggless?", answer: "Yes! All cakes delivered in Veraval and the Gir Somnath district are 100% eggless and pure vegetarian, honouring the area's deeply sacred character (Somnath is India's first Jyotirlinga) and Gujarat's vegetarian culture. Every flavour available eggless." },
      { question: "Do you have Somnath Temple Jyotirlinga and Gir Asiatic Lion-themed cakes in Veraval?", answer: "Yes! The Somnath Temple (India's first Jyotirlinga, rebuilt by Sardar Patel after centuries of desecration — one of India's most emotionally significant pilgrimage sites) and the Gir National Park's Asiatic Lions (the world's only wild Asiatic lion population, recovered from near-extinction to 700+) inspire our most majestic Veraval/Somnath fondant cake designs." },
      { question: "Can I get same-day cake delivery in Veraval and Somnath?", answer: "Yes, same-day cake delivery is available across all Veraval/Gir Somnath areas — Veraval town, Somnath, Una, Kodinar, Sutrapada, and Talala (Gir) — for orders placed before 3 PM." }
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
