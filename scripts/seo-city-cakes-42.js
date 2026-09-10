// Cakes Batch 42 — 15 cities
// Rajasthan: Alwar, Bharatpur, Dholpur (check - done batch 35)
// UP: Mahoba, Banda, Chitrakoot, Lalitpur
// Bihar: Sitamarhi, Madhubani
// Odisha: Sundargarh, Jharsuguda
// Telangana: Nagarkurnool, Mulugu, Jayashankar Bhupalpally (check - long name)
// NE: Tezpur (Assam), Dibrugarh (Assam)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "alwar": {
    cityName: "Alwar",
    metaTitle: "Cake Delivery in Alwar | Sariska Tiger Reserve Bhangarh Fort Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Alwar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Alwar",
    metaKeyword: "cake delivery alwar, order cake online alwar, birthday cake alwar, custom cake alwar, same day cake delivery alwar Sariska Tiger Reserve Bhangarh Fort haunted Alwar Milk Rajasthan Delhi proximity Aravalli",
    footerContent: `
<h2>Cake Delivery in Alwar — Sariska Tiger Reserve, Bhangarh Fort's Haunted Legend, and Rajasthan's Most Delhi-Proximate City</h2>
<p>Alwar — the headquarters of Alwar district in Rajasthan, the "Gateway to Rajasthan" from Delhi — known for its tigers, its famously "haunted" fort, and its extraordinarily rich Aravalli heritage (the Sariska Tiger Reserve and National Park (Sariska — 866 sq km, established 1955 as wildlife sanctuary, upgraded to Tiger Reserve under Project Tiger 1978; in 2004-2005, all tigers were poached — a national scandal; restocked via historic translocation from Ranthambore 2008 onward — India's first inter-state tiger translocation; Sariska now has a recovering tiger population); the Bhangarh Fort (Bhangarh, Alwar district) — a 17th century CE Rajput fort in the Aravalli foothills — is India's most famous "haunted" fort; the Archaeological Survey of India's sign prohibiting entry after dark has made Bhangarh synonymous with supernatural legend in Indian popular culture; the Alwar Fort (Bala Quila, 16th century CE) above the city is one of the oldest pre-Mughal forts in Rajasthan; the Alwar Mandi (Alwar Milk and dairy products) — the Alwar mawa (reduced whole milk solid) and milk cake (Alwar ka milk cake) is one of India's most famous milk sweets — Alwar's milk products are celebrated across Rajasthan and Delhi; the Siliserh Lake Palace (now a heritage hotel) and the Vijai Mandir Palace are outstanding examples of 19th-20th century Alwar royal architecture; the Alwar district borders Haryana and is only 160 km from Delhi — making it part of the NCR hinterland; the Aravalli range runs through the district), and a city of tigers and milk sweets and haunted Rajput forts — is Rajasthan's most spectacularly NCR-accessible district. From birthday parties in Alwar to celebration cakes — RedHeart covers all Alwar zones: Alwar city, Behror, Rajgarh, Laxmangarh, Kishangarh Bas, Mundawar, Tijara, Neemrana, Shahjahanpur, Kherli.</p>
<p>Our Alwar cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Milk Cake-flavoured (tribute to Alwar Milk Cake!), Photo Cakes, Fondant Sariska Tiger / Bhangarh Haunted Fort / Alwar Fort Bala Quila-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alwar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alwar city, Behror, Rajgarh, Laxmangarh, Kishangarh Bas, Tijara, Neemrana, Shahjahanpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sariska Tiger Fondant, Bhangarh Haunted Fort Fondant, Milk Cake flavour, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Alwar?", answer: "Yes, same-day cake delivery is available across all Alwar areas — Alwar city, Behror, Rajgarh, Laxmangarh, Kishangarh Bas, Tijara, and Neemrana — for orders placed before 3 PM." },
      { question: "Do you have Sariska Tiger and Bhangarh Haunted Fort-themed cakes?", answer: "Yes! The Sariska Tiger Reserve (Project Tiger reserve that lost all tigers to poaching by 2004-05, then made India's historic first inter-state tiger translocation from Ranthambore in 2008 — now recovering) and the Bhangarh Fort (India's most famous 'haunted' fort with the ASI's prohibition-after-dark sign) inspire our most tigerly supernatural Alwar fondant cakes." },
      { question: "Are eggless cakes available in Alwar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Alwar delivery." }
    ]
  },

  "bharatpur": {
    cityName: "Bharatpur",
    metaTitle: "Cake Delivery in Bharatpur | Keoladeo Crane UNESCO Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Bharatpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bharatpur",
    metaKeyword: "cake delivery bharatpur, order cake online bharatpur, birthday cake bharatpur, custom cake bharatpur, same day cake delivery bharatpur Keoladeo Ghana UNESCO Siberian crane Deeg Palace Lohagarh Fort Braj Rajasthan",
    footerContent: `
<h2>Cake Delivery in Bharatpur — Keoladeo Ghana UNESCO Bird Sanctuary, Lohagarh Fort's Unconquered Walls, and Braj's Mathura Proximity</h2>
<p>Bharatpur — the headquarters of Bharatpur district in Rajasthan, the "Eastern Gateway to Rajasthan" from UP/Delhi — famous for its UNESCO birding paradise, its historically unconquered fort, and its deep Braj Krishna heritage (the Keoladeo National Park (Keoladeo Ghana Bird Sanctuary — UNESCO World Heritage Site, inscribed 1985) — 29 sq km of wetland in Bharatpur — is one of India's most celebrated bird sanctuaries; the park is a winter home for migratory waterbirds including the critically endangered Siberian Crane (though Siberian cranes have not been seen since 2002 — the park hosted them through most of the 20th century; they now winter only in Iran and China); the park receives approximately 366 species of birds and is one of the world's most important migratory bird sites; the Lohagarh Fort (Iron Fort — Bharatpur) — built by the Jat ruler Suraj Mal in 1733 CE — is one of India's strongest and most unconquered forts; the Lohagarh Fort withstood multiple British sieges (the Battle of Bharatpur — British failed to take Lohagarh Fort in 1805 despite massive forces), earning it the sobriquet "Iron Fort" (Loha = Iron); the Jat rulers of Bharatpur (the Sinsinwar Jats — successors of Suraj Mal) were among the most powerful non-Rajput rulers of 18th century India; the Deeg Palace (Bharatpur district) is a superb example of Jat palatial architecture with musical fountains; the Bharatpur district is in the heart of the Braj cultural zone — adjacent to Mathura (the birthplace of Krishna), Vrindavan (where Krishna spent his youth), and Agra (15 km from Bharatpur)), and a city of UNESCO cranes and unconquered Jat iron — is Rajasthan's most historically impregnable and ornithologically celebrated city. From birthday parties in Bharatpur to celebration cakes — RedHeart covers all Bharatpur zones: Bharatpur city, Deeg, Nadbai, Weir, Rupbas, Kumher, Kaman, Dig, Nagar, Bayana.</p>
<p>Our Bharatpur cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Keoladeo UNESCO Crane / Lohagarh Iron Fort / Deeg Palace Fountain / Braj Mathura-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharatpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharatpur city, Deeg, Nadbai, Weir, Rupbas, Kumher, Kaman, Bayana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Keoladeo Ghana Crane Fondant, Lohagarh Fort Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bharatpur?", answer: "Yes, same-day cake delivery is available across all Bharatpur areas — Bharatpur city, Deeg, Nadbai, Weir, Rupbas, and Kumher — for orders placed before 3 PM." },
      { question: "Do you have Keoladeo UNESCO Bird Sanctuary and Lohagarh Fort-themed cakes?", answer: "Yes! The Keoladeo Ghana National Park (UNESCO World Heritage — one of the world's most important migratory bird wetlands, home to 366 species including the Siberian Crane) and the Lohagarh (Iron Fort — built 1733 CE by Suraj Mal, the unconquered fort that repelled the British in 1805) inspire our most ornithologically and impermeably ironclad Bharatpur fondant cakes." },
      { question: "Are eggless cakes available in Bharatpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bharatpur delivery." }
    ]
  },

  "mahoba": {
    cityName: "Mahoba",
    metaTitle: "Cake Delivery in Mahoba | Chandela Dynasty Madan Sagar Bundelkhand UP | RedHeart",
    metaDescription: "Order cakes online in Mahoba. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mahoba",
    metaKeyword: "cake delivery mahoba, order cake online mahoba, birthday cake mahoba, custom cake mahoba, same day cake delivery mahoba Chandela dynasty Madan Sagar lake Alha Udal folk epic gems precious stones Bundelkhand UP",
    footerContent: `
<h2>Cake Delivery in Mahoba — Chandela Kingdom Capital, Madan Sagar's Ancient Tank, and Alha-Udal's Bundelkhand Folk Epic</h2>
<p>Mahoba — the headquarters of Mahoba district in Uttar Pradesh, a city of extraordinary medieval heritage in the heart of Bundelkhand (Mahoba was the capital of the Chandela Rajput dynasty — one of medieval India's most significant kingdoms, renowned for building the Khajuraho temples (UNESCO World Heritage, Madhya Pradesh) in the 10th-11th century CE; the Chandela rulers (Dhanga, Yasovarman, Yashovarman) built some of India's most extraordinary temples and tank complexes; the Madan Sagar (Mahoba) — a large medieval tank (reservoir) built by the Chandelas — is one of the finest examples of Chandela hydraulic engineering; the Vijay Sagar, Kirat Sagar, and Rahahya Sagar tanks near Mahoba are other Chandela-era water conservation tanks; the Alha-Udal folk epic (Alha and Udal — the two warrior heroes of the Chandela court) is one of North India's most celebrated oral ballad traditions; the Alha-Udal narrative (sung in a distinct ballad metre called Alha-chhanda) chronicles the deeds of these two Bundela warrior heroes; the Mahoba area is a major producer of precious and semi-precious stones (particularly pyrite and other gemstones found in the Bundelkhand plateau rocks); the Gorakhpur town near Mahoba has historical connections; Mahoba borders Banda, Hamirpur, Chhatarpur (MP) and Jhansi), and a city of Chandela kings and Alha-Udal ballads — is Bundelkhand's most historically medieval UP district. From birthday parties in Mahoba to celebration cakes — RedHeart covers all Mahoba zones: Mahoba town, Charkhari, Kulpahar, Panwari, Kabrai, Jaitpur, Srinagar Mahoba.</p>
<p>Our Mahoba cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chandela Dynasty / Madan Sagar Tank / Alha-Udal Bundelkhand Epic-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahoba, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahoba town, Charkhari, Kulpahar, Panwari, Kabrai, Jaitpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Chandela Dynasty Fondant, Madan Sagar Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mahoba?", answer: "Yes, same-day cake delivery is available across all Mahoba areas — Mahoba town, Charkhari, Kulpahar, Panwari, and Kabrai — for orders placed before 3 PM." },
      { question: "Do you have Chandela Dynasty and Alha-Udal Epic-themed cakes?", answer: "Yes! The Chandela dynasty capital (builders of the Khajuraho temples, the Madan Sagar tank, and the Vijay Sagar hydraulic complex) and the Alha-Udal folk ballad (Bundelkhand's most celebrated oral epic of the Chandela warrior heroes, sung in Alha-chhanda metre) inspire our most medievally magnificent and folkloric Mahoba fondant cakes." },
      { question: "Are eggless cakes available in Mahoba?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mahoba delivery." }
    ]
  },

  "banda": {
    cityName: "Banda",
    metaTitle: "Cake Delivery in Banda | Ken River Panna Tiger Bundelkhand UP | RedHeart",
    metaDescription: "Order cakes online in Banda. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Banda",
    metaKeyword: "cake delivery banda, order cake online banda, birthday cake banda, custom cake banda, custom cake delivery banda Ken River Panna Tiger Reserve vulture Bundelkhand plateau Chitrakoot Ken-Betwa link UP",
    footerContent: `
<h2>Cake Delivery in Banda — Ken River Gorge, Panna Tiger Reserve Gateway, and Bundelkhand's Ken-Betwa River Link Project</h2>
<p>Banda — the headquarters of Banda district in Uttar Pradesh, a significant Bundelkhand district on the Ken River — the gateway to Panna's diamond and tiger country (the Ken River (Karnavati — a Yamuna tributary) flows through Banda district creating scenic gorges in the hard Vindhyan sandstone; the Ken flows from the Panna hills (MP) northward into Banda district, joining the Yamuna near Fatehpur; the Ken Gharial Sanctuary (Ken River corridor) protects endangered Gharial, Mugger crocodile, and is part of the wider Panna-Ken corridor; the Ken-Betwa River Interlinking Project (the world's first large inter-river linking project actually being built) will transfer water from the Ken (MP) to the Betwa (UP) through a canal — the project has been controversial due to Panna Tiger Reserve submergence concerns; the Panna National Park and Tiger Reserve (Panna, MP — adjacent to Banda on the MP side) is famous for its diamonds (Panna is India's main diamond mining centre) and tigers; the Banda area is known for its mustard oil production, dal (pulses), and wheat; the Rajpur area has Chandela-era tanks; the historical significance of Banda as a Bundela Rajput stronghold; the Chitrakoot pilgrim town (Sati Anusuya, Rama-Sita-Lakshmana vanavas in Chitrakoot) is accessible from Banda), and a city of Ken gorges and diamond proximity — is UP's most Bundelkhand-riparian district. From birthday parties in Banda to celebration cakes — RedHeart covers all Banda zones: Banda town, Atarra, Naraini, Tindwari, Bisanda, Pailani, Baberu.</p>
<p>Our Banda cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Ken River / Panna Diamond Tiger / Bundelkhand Plateau-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banda, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banda town, Atarra, Naraini, Tindwari, Bisanda, Pailani, Baberu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Ken River Fondant, Panna Diamond Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Banda?", answer: "Yes, same-day cake delivery is available across all Banda areas — Banda town, Atarra, Naraini, Tindwari, Bisanda, and Pailani — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Banda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Banda delivery." },
      { question: "Do you deliver midnight cakes in Banda?", answer: "Yes, midnight birthday cake delivery is available across Banda town and Atarra zones." }
    ]
  },

  "chitrakoot": {
    cityName: "Chitrakoot",
    metaTitle: "Cake Delivery in Chitrakoot | Ram Sita Vanavas Kamadgiri UP Pilgrim | RedHeart",
    metaDescription: "Order cakes online in Chitrakoot. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chitrakoot",
    metaKeyword: "cake delivery chitrakoot, order cake online chitrakoot, birthday cake chitrakoot, custom cake chitrakoot, same day cake delivery chitrakoot Ram Sita Lakshmana vanavas 11 years Mandakini River Kamadgiri hill UP Bundelkhand pilgrimage",
    footerContent: `
<h2>Cake Delivery in Chitrakoot — Rama's 11-Year Vanavas, Kamadgiri Hill's Sacred Parikrama, and Mandakini River's Pilgrimage Ghats</h2>
<p>Chitrakoot — the headquarters of Chitrakoot district in Uttar Pradesh (one of UP's newest districts, formed in 1998 from Banda), one of India's most sacred pilgrimage towns — the place where Rama, Sita, and Lakshmana spent the majority of their 14-year forest exile (the Chitrakoot Dham — the sacred forest region where Rama, Sita, and Lakshmana lived for 11 years and 5 months of their 14-year vanavas (forest exile) after Dasharatha's death and Bharata's visit pleading for Rama's return; the Kamadgiri Hill (the sacred hill at the centre of Chitrakoot — covered with temples and circumambulated by millions of pilgrims on the Parikrama marg; "Kamadgiri" means "wish-granting mountain"; the parikrama takes approximately 5 km) is the most sacred spot; the Mandakini River (a Yamuna tributary flowing through Chitrakoot) has pilgrimage ghats including Ramghat (where Bharata pleaded with Rama), Janaki Kund (where Sita bathed), and multiple important temples; the Sati Anusuya Ashram (where the sage Atri and his wife Anusuya lived — Anusuya's tapasya forced the Trimurti to be born as her sons); the Sphatik Shila (crystal rock where Rama and Sita rested; the indentation of Sita's foot is visible); Hanuman Dhara (a waterfall from the mountain); the Bharat Milap (the site where Bharata met Rama and Rama refused to return, giving Bharata his padukas to rule); the Gupt Godavari (twin caves with a stream); the Tughlaq-era Chitrakoot fort — the district borders MP's Satna and Panna districts), and a city of Ram vanvas and Mandakini pilgrim ghats — is UP's most Ramayana-sacred Bundelkhand district. From birthday parties in Chitrakoot to celebration cakes — RedHeart covers all zones: Chitrakoot town (Karvi), Ramghat, Kamadgiri, Sitapur, Manikpur, Rajapur.</p>
<p>Our Chitrakoot cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kamadgiri Parikrama / Mandakini Ramghat / Bharat Milap / Chitrakoot Vanavas Rama-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitrakoot, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitrakoot (Karvi), Ramghat, Kamadgiri, Sitapur, Manikpur, Rajapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Kamadgiri Parikrama Fondant, Mandakini Ramghat Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chitrakoot?", answer: "Yes, same-day cake delivery is available across all Chitrakoot areas — Chitrakoot (Karvi), Ramghat, Kamadgiri, Sitapur, and Manikpur — for orders placed before 3 PM." },
      { question: "Do you have Kamadgiri Parikrama and Rama Vanavas-themed cakes for Chitrakoot?", answer: "Yes! The Kamadgiri Hill (the wish-granting mountain at the centre of Chitrakoot — the most sacred spot of Rama's 11-year-5-month forest exile — circumambulated by millions on the parikrama marg) and the Mandakini Ramghat (where Bharata pleaded for Rama's return) inspire our most divinely forested and Ramayana-sacred Chitrakoot fondant cakes." },
      { question: "Are eggless cakes available in Chitrakoot?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chitrakoot delivery." }
    ]
  },

  "lalitpur": {
    cityName: "Lalitpur",
    metaTitle: "Cake Delivery in Lalitpur | Devgarh Jain Temples Betwa Bundelkhand UP | RedHeart",
    metaDescription: "Order cakes online in Lalitpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lalitpur",
    metaKeyword: "cake delivery lalitpur, order cake online lalitpur, birthday cake lalitpur, custom cake lalitpur, same day cake delivery lalitpur Devgarh Jain temples Gupta Chandela Betwa River granite Bundelkhand Madhya Pradesh border UP",
    footerContent: `
<h2>Cake Delivery in Lalitpur — Devgarh's Gupta-Era Jain Temples, Betwa River Gorges, and Bundelkhand's Southern UP Outpost</h2>
<p>Lalitpur — the headquarters of Lalitpur district in Uttar Pradesh, the southernmost district of UP in the Bundelkhand region on the MP border (the Devgarh (also spelled Deogarh) — in Lalitpur district — is one of India's most significant Gupta-era temple sites; the Dashavatar temple at Devgarh (5th-6th century CE, Gupta period) is one of the finest surviving examples of early Gupta Hindu temple architecture (earlier than Khajuraho); the temple's three doorway panels (Shayanamurthy Vishnu, Gajendramoksha, Nara-Narayana) are magnificent high-relief Gupta sculptural masterpieces; the site also has a large concentration of early Jain sculptures (Digambara Jain) from the 8th-17th century CE; the Betwa River (flowing south-north through Lalitpur-Jhansi toward the Yamuna) creates scenic gorges in the hard Bundelkhand granite at Lalitpur; Lalitpur district borders MP's Sagar, Tikamgarh, and Chhatarpur districts; the district is part of the Bundelkhand agricultural zone growing wheat, jowar, and gram in the rocky plateau pockets; the district headquarters Lalitpur town has the Lakshmi Taal lake), and a city of Gupta masterpieces and Bundelkhand granite — is UP's most archaeologically early-medieval southern district. From birthday parties in Lalitpur to celebration cakes — RedHeart covers all Lalitpur zones: Lalitpur town, Mehrauni, Madawara, Talbehat, Jakhaura, Bar.</p>
<p>Our Lalitpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Devgarh Gupta Temple / Dashavatar Vishnu / Betwa Gorge-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur town, Mehrauni, Madawara, Talbehat, Jakhaura, Bar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Devgarh Gupta Temple Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lalitpur?", answer: "Yes, same-day cake delivery is available across all Lalitpur areas — Lalitpur town, Mehrauni, Madawara, Talbehat, and Jakhaura — for orders placed before 3 PM." },
      { question: "Do you have Devgarh Gupta Temple-themed cakes?", answer: "Yes! The Devgarh Dashavatar temple (5th-6th century CE Gupta period — one of India's finest early Hindu temples with magnificent relief panels of Shayanamurthy Vishnu, Gajendramoksha, and Nara-Narayana) inspires our most archaeologically Gupta-era Lalitpur fondant cakes." },
      { question: "Are eggless cakes available in Lalitpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Lalitpur delivery." }
    ]
  },

  "sitamarhi": {
    cityName: "Sitamarhi",
    metaTitle: "Cake Delivery in Sitamarhi | Sita Janakpur Nepal Border Bihar | RedHeart",
    metaDescription: "Order cakes online in Sitamarhi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sitamarhi",
    metaKeyword: "cake delivery sitamarhi, order cake online sitamarhi, birthday cake sitamarhi, custom cake sitamarhi, same day cake delivery sitamarhi Sita birthplace Janakpur temple Bagmati River Nepal border Mithila Bihar",
    footerContent: `
<h2>Cake Delivery in Sitamarhi — Sita's Sacred Birthplace, Janakpur Nepal Pilgrimage Corridor, and Mithila's Sacred Territory</h2>
<p>Sitamarhi — the headquarters of Sitamarhi district in Bihar, one of the most significant pilgrimage districts of Bihar — identified as the birthplace of Sita (Janaki — wife of Ram) in the Valmiki Ramayana tradition (the Janaki Mandir (Sitamarhi) — a major temple dedicated to Sita — is located at the site traditionally identified as Sita's birthplace (Sita Kund or Punaura Dham, near Sitamarhi town); the site is one of the most sacred pilgrimage spots in Bihar for Ramayana devotees; Sitamarhi is directly adjacent to (and culturally integrated with) Janakpur in Nepal — the city traditionally identified as the actual birthplace of Sita (King Janaka's capital); the Janakpur-Sitamarhi pilgrimage corridor is a cross-border devotional circuit for pilgrims of the Ramayana tradition; the Bagmati River (flowing from the Nepal hills — the river on which Kathmandu sits — enters India and flows through Bihar's northern plains before joining the Ganga-Kosi system) flows through or near Sitamarhi district; the district is in the Mithila cultural zone — the ancient kingdom of King Janaka (Sita's father) and the land of Mithila paintings (Madhubani art); the Mithilanchal region (Darbhanga, Madhubani, Sitamarhi) is one of Bihar's most culturally distinct zones; the district borders Nepal's Dhanusha district (where Janakpur town is located)), and a city of Sita's sacred birth and Mithila heritage — is Bihar's most Ramayana-sacred and Nepal-border devotional district. From birthday parties in Sitamarhi to celebration cakes — RedHeart covers all zones: Sitamarhi town, Dumra, Pupri, Belsand, Riga, Sonbarsa, Majorganj, Parihar.</p>
<p>Our Sitamarhi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sita Birthplace / Janakpur Nepal Pilgrimage / Mithila Madhubani-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi town, Dumra, Pupri, Belsand, Riga, Sonbarsa, Parihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Sita Janaki Fondant, Madhubani Mithila Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sitamarhi?", answer: "Yes, same-day cake delivery is available across all Sitamarhi areas — Sitamarhi town, Dumra, Pupri, Belsand, Riga, and Sonbarsa — for orders placed before 3 PM." },
      { question: "Do you have Sita Birthplace and Mithila Madhubani-themed cakes?", answer: "Yes! The Janaki Mandir (at the Punaura Dham site identified as Sita's birthplace — the sacred cross-border pilgrimage corridor connecting Sitamarhi to Janakpur Nepal) and the Mithila Madhubani painting tradition (the vibrant fish-tree-lotus-peacock folk art of the Mithilanchal) inspire our most devotionally and artistically Ramayana-Mithila Sitamarhi fondant cakes." },
      { question: "Are eggless cakes available in Sitamarhi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sitamarhi delivery." }
    ]
  },

  "madhubani": {
    cityName: "Madhubani",
    metaTitle: "Cake Delivery in Madhubani | GI Madhubani Mithila Painting Bihar | RedHeart",
    metaDescription: "Order cakes online in Madhubani. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Madhubani",
    metaKeyword: "cake delivery madhubani, order cake online madhubani, birthday cake madhubani, custom cake madhubani, same day cake delivery madhubani GI Madhubani Mithila painting Kamla Balan River Saurath Sabha Brahmin Bihar Nepal border",
    footerContent: `
<h2>Cake Delivery in Madhubani — GI Madhubani Mithila Painting, Kamla River's Nepal Border, and Saurath's Ancient Brahmin Assembly</h2>
<p>Madhubani — the headquarters of Madhubani district in Bihar, the cultural capital of the Mithilanchal region — the birthplace and headquarters of one of India's most celebrated and globally recognised folk art traditions (the Madhubani Painting (Mithila Painting) — awarded GI (Geographical Indication) tag — is one of India's most internationally recognised and exported folk art forms; the tradition originated in the women of Mithilanchal who painted the walls and floors of their homes for religious ceremonies (Vivah, Chhath, Navratri) with natural pigments from plants and minerals; the distinctive Madhubani style features: strong black outlines (using soot mixed with gum), flat 2D figures with no shading, intricate geometric borders and fillers, vibrant natural colours (from turmeric, saffron, sindur, indigo), and subject matter drawn from Hindu mythology (Krishna-Radha, Ramayana, Mahabharata), nature (fish, birds, lotus, bamboo, trees), and life cycle ceremonies; the art was discovered by a British Officer W.G. Archer in 1934 after the Bihar earthquake (he saw the paintings on damaged house walls); the Mithila Art Institute and the works of artists like Mahasundari Devi (Padma Shri), Sita Devi (Padma Shri), and Yamuna Devi have brought international recognition; the Kamla Balan River (from Nepal) flows through Madhubani district; the Saurath Sabha — an ancient Brahmin matchmaking assembly held in Saurath village near Madhubani — is one of Bihar's most distinctive marriage traditions; the district borders Nepal's Dhanusha district), and a city of globally exhibited folk painting and Mithila culture — is Bihar's most artistically celebrated cultural district. From birthday parties in Madhubani to celebration cakes — RedHeart covers all zones: Madhubani town, Jainagar, Jhanjharpur, Benipatti, Pandaul, Phulparas, Laukaha, Ladania.</p>
<p>Our Madhubani cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant GI Madhubani Mithila Painting / Krishna-Radha Folk Art / Kamla River / Saurath Sabha-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhubani, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhubani town, Jainagar, Jhanjharpur, Benipatti, Pandaul, Phulparas, Laukaha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, GI Madhubani Art Fondant, Krishna-Radha Folk Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Madhubani?", answer: "Yes, same-day cake delivery is available across all Madhubani areas — Madhubani town, Jainagar, Jhanjharpur, Benipatti, and Pandaul — for orders placed before 3 PM." },
      { question: "Do you have GI Madhubani Mithila Painting-themed cakes?", answer: "Yes! The GI Madhubani Mithila Painting (vibrant folk art with strong black outlines, natural colours from turmeric-saffron-sindur-indigo, depicting Krishna-Radha, Ramayana, fish-lotus-bamboo — discovered by British officer W.G. Archer in 1934; masters like Mahasundari Devi and Sita Devi have exhibited internationally) inspires our most artistically hand-painted and world-renowned Madhubani fondant cakes." },
      { question: "Are eggless cakes available in Madhubani?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Madhubani delivery." }
    ]
  },

  "sundargarh": {
    cityName: "Sundargarh",
    metaTitle: "Cake Delivery in Sundargarh | Hockey Tribal Steel Odisha | RedHeart",
    metaDescription: "Order cakes online in Sundargarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sundargarh",
    metaKeyword: "cake delivery sundargarh, order cake online sundargarh, birthday cake sundargarh, custom cake sundargarh, same day cake delivery sundargarh hockey players India tribal Munda Ho Brahmani Rourkela Steel Jharkhand border Odisha",
    footerContent: `
<h2>Cake Delivery in Sundargarh — India's Hockey Nursery, Rourkela Steel Plant, and Tribal Ho-Munda Culture on the Jharkhand Border</h2>
<p>Sundargarh — the headquarters of Sundargarh district in Odisha, the most extraordinary sports-producing district in India — the nursery of Indian hockey and home to Rourkela's steel-and-sports legacy (Sundargarh district has produced more Indian national hockey team players than any other single district in India — including players who have won Olympic gold medals; the tribal (Ho, Munda, Bhuiyan, Oraon, Gond) communities of Sundargarh have an extraordinarily natural aptitude for field hockey; the Sundergarh district has sent dozens of players to represent India in the Olympics, Asian Games, and World Cup across multiple generations; names like Ignace Tirkey, Dilip Tirkey, Birendra Lakra, Nilam Sanjeep Xess are famous in Indian hockey; the Rourkela Steel Plant (RSP — a SAIL (Steel Authority of India) integrated steel plant established 1955-59 in Rourkela) is one of India's first public sector steel plants and has been the anchor of Rourkela's urban development; Rourkela is Odisha's second-largest city; the FIFA World Cup 2023 Hockey was hosted at Birsa Munda Hockey Stadium, Rourkela — India's largest hockey stadium; the Brahmani River and Ib River confluence is near Rourkela; the district borders Jharkhand and has significant tribal (Ho, Munda) forest communities; the Bonai division of Sundargarh has iron ore and manganese deposits), and a city of Olympic hockey glory and steel heritage — is Odisha's most athletically and industrially celebrated tribal district. From birthday parties in Sundargarh to celebration cakes — RedHeart covers all zones: Rourkela (major city), Sundargarh town, Bondamunda, Talsara, Kutra, Bisra, Lephripara, Rajgangpur.</p>
<p>Our Sundargarh cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Indian Hockey Tribal Pride / Rourkela Steel Plant / Birsa Munda Hockey Stadium-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sundargarh (Rourkela), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rourkela, Sundargarh town, Bondamunda, Talsara, Kutra, Bisra, Rajgangpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hockey Player Fondant, Rourkela Steel Fondant, Coconut, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sundargarh (Rourkela)?", answer: "Yes, same-day cake delivery is available across all Sundargarh areas — Rourkela, Sundargarh town, Bondamunda, Talsara, and Bisra — for orders placed before 3 PM." },
      { question: "Do you have Indian Hockey Tribal Pride and Rourkela Steel-themed cakes?", answer: "Yes! Sundargarh's tribal (Ho-Munda) hockey legacy (India's most hockey-player-producing district — Olympic gold medallists, Asian Games champions across generations) and the Rourkela Steel Plant (one of India's first 1955 public sector steel plants, and home to the Birsa Munda Hockey Stadium hosting the 2023 Hockey World Cup) inspire our most athletically tribal Sundargarh fondant cakes." },
      { question: "Are eggless cakes available in Sundargarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Sundargarh delivery." }
    ]
  },

  "jharsuguda": {
    cityName: "Jharsuguda",
    metaTitle: "Cake Delivery in Jharsuguda | Power Capital Odisha IB River Coal | RedHeart",
    metaDescription: "Order cakes online in Jharsuguda. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jharsuguda",
    metaKeyword: "cake delivery jharsuguda, order cake online jharsuguda, birthday cake jharsuguda, custom cake jharsuguda, same day cake delivery jharsuguda power capital Odisha IB River coal thermal power Vedanta Sesa Sterlite aluminium Odisha",
    footerContent: `
<h2>Cake Delivery in Jharsuguda — Odisha's Power Capital, IB River Coal Belt, and Vedanta Aluminium Smelter Hub</h2>
<p>Jharsuguda — the headquarters of Jharsuguda district in Odisha, one of India's most significant energy and metals-smelting industrial cities (Jharsuguda is called the "Power Capital of Odisha" — the Ib Valley coal field (IB River basin) in Jharsuguda and adjacent areas is one of Odisha's most important coal deposits; multiple large thermal power plants are operating in Jharsuguda: the Mahanadi Coal Fields Limited (MCL) has large coal mines in the IB Valley; the Vedanta Limited Jharsuguda (formerly Sesa Sterlite, formerly Balco) operates one of India's largest aluminium smelters in Jharsuguda — the BALCO/Vedanta smelter is one of the world's largest; aluminium smelting requires enormous amounts of electricity (from local coal power plants) and alumina from Odisha's bauxite plateaus; the Hirakud Dam (Sambalpur, adjacent) powers the industries; the Jharsuguda Airport (Veer Surendra Sai Airport) is an important regional airport connecting western Odisha; the IB River (a Mahanadi tributary) flows through Jharsuguda district; the district borders Chhattisgarh and Jharkhand — a key location on the mineral-industrial corridor; the Vedanta group's operations at Jharsuguda have been one of India's most significant industrial investments), and a city of coal power and aluminium smelting — is Odisha's most industrially energy-intensive western city. From birthday parties in Jharsuguda to celebration cakes — RedHeart covers all Jharsuguda zones: Jharsuguda town, Brajarajnagar, Belpahar, Brajrajnagar, Lakhanpur, Kolabira.</p>
<p>Our Jharsuguda cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jharsuguda, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jharsuguda town, Brajarajnagar, Belpahar, Brajrajnagar, Lakhanpur, Kolabira</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Photo Cake, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jharsuguda?", answer: "Yes, same-day cake delivery is available across all Jharsuguda areas — Jharsuguda town, Brajarajnagar, Belpahar, Brajrajnagar, and Lakhanpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jharsuguda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Jharsuguda delivery." },
      { question: "Do you deliver midnight cakes in Jharsuguda?", answer: "Yes, midnight birthday cake delivery is available across Jharsuguda town and Brajarajnagar zones." }
    ]
  },

  "nagarkurnool": {
    cityName: "Nagarkurnool",
    metaTitle: "Cake Delivery in Nagarkurnool | Srisailam Dam Krishna Mallikarjuna Telangana | RedHeart",
    metaDescription: "Order cakes online in Nagarkurnool. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nagarkurnool",
    metaKeyword: "cake delivery nagarkurnool, order cake online nagarkurnool, birthday cake nagarkurnool, custom cake nagarkurnool, same day cake delivery nagarkurnool Srisailam Dam Krishna Mallikarjuna Jyotirlinga Nallamala Tiger Reserve Telangana",
    footerContent: `
<h2>Cake Delivery in Nagarkurnool — Srisailam's Mallikarjuna Jyotirlinga, Nallamala Tiger Reserve, and Krishna's Hydropower Gorge</h2>
<p>Nagarkurnool — the headquarters of Nagarkurnool district in Telangana (formed 2016 from Mahbubnagar), home to one of India's twelve Jyotirlinga (sacred Shiva) temples and the country's second-largest reservoir by capacity (the Srisailam (in Nagarkurnool district on the Krishna River) is one of India's most powerful spiritual sites — the Bhramaramba Mallikarjuna Temple at Srisailam is one of the 12 Jyotirlinga (the most sacred Shiva shrines — Shiva's own chosen manifestation) and simultaneously one of the 18 Shakti Peethas (Bhramaramba Devi — Sati's neck fell here in the Daksha Yajna mythology); millions of pilgrims visit annually, especially on Mahashivaratri; the Srisailam Dam (on the Krishna River — constructed 1960-1981) — the second-largest reservoir by capacity in India (only Indira Sagar is larger) — is a 145-metre high masonry dam; the Srisailam reservoir's deep gorges (in the Nallamala Hills) create one of India's most scenic dam sites; the Nagarjunasagar-Srisailam Tiger Reserve (the largest tiger reserve in India by area — covering parts of Telangana, AP, and portions of Nallamala Hills) protects tigers, leopards, sloth bears, and diverse wildlife in the Nallamala forest; the Nagarkurnool district has significant cotton, oilseed, and pulses cultivation on the Deccan plateau), and a city of Jyotirlinga pilgrimage and the Krishna gorge — is Telangana's most sacred and hydroelectrically powerful southern district. From birthday parties in Nagarkurnool to celebration cakes — RedHeart covers all zones: Nagarkurnool town, Achampet, Kalwakurthy, Kollapur, Wanaparthy adjacent, Srisailam, Bijinapally.</p>
<p>Our Nagarkurnool cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Srisailam Mallikarjuna Jyotirlinga / Nallamala Tiger / Krishna Dam Gorge-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagarkurnool, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagarkurnool town, Achampet, Kalwakurthy, Kollapur, Srisailam, Bijinapally</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Srisailam Jyotirlinga Fondant, Nallamala Tiger Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nagarkurnool?", answer: "Yes, same-day cake delivery is available across all Nagarkurnool areas — Nagarkurnool town, Achampet, Kalwakurthy, Kollapur, and Srisailam — for orders placed before 3 PM." },
      { question: "Do you have Srisailam Mallikarjuna Jyotirlinga-themed cakes?", answer: "Yes! The Bhramaramba Mallikarjuna Temple at Srisailam (one of India's 12 Jyotirlinga AND one of the 18 Shakti Peethas — a unique dual-sacred site drawing millions of pilgrims especially on Mahashivaratri) and the Srisailam Dam (India's second-largest reservoir by capacity, with scenic Krishna River gorges in the Nallamala hills) inspire our most divinely and hydraulically powerful Nagarkurnool fondant cakes." },
      { question: "Are eggless cakes available in Nagarkurnool?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nagarkurnool delivery." }
    ]
  },

  "tezpur": {
    cityName: "Tezpur",
    metaTitle: "Cake Delivery in Tezpur | Agnigarh Hill Bhairavi Bamuni Hills Assam | RedHeart",
    metaDescription: "Order cakes online in Tezpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tezpur",
    metaKeyword: "cake delivery tezpur, order cake online tezpur, birthday cake tezpur, custom cake tezpur, same day cake delivery tezpur Agnigarh Usha Anirudha Bamuni Hills temples Brahmaputra tea Assam military cantonment",
    footerContent: `
<h2>Cake Delivery in Tezpur — Agnigarh's Usha-Anirudha Legend, Bamuni Hills' Ancient Temples, and Brahmaputra's Scenic Frontier Town</h2>
<p>Tezpur — the headquarters of Sonitpur district in Assam, a beautiful Brahmaputra Valley town known for its antiquity, scenic landscape, and military significance (the Agnigarh Hill (Tezpur) — a scenic hill with gardens on the Brahmaputra banks — is associated with the ancient legend of Usha-Anirudha: Usha was the daughter of the demon king Banasura who ruled Shonitpur (ancient Tezpur means "City of Blood" — Tezpur from "Tezpur" = blood+city, from the battle between Krishna and Banasura when Anirudha (Krishna's grandson) was imprisoned in Banasura's fort for his love of Usha; a bloody battle followed; the Agnigarh hill has the ruins associated with this mythological fortress; the Bamuni Hills (near Tezpur) has archaeological ruins of 9th-10th century temples in the Nagara style — demonstrating the expansion of Hindu temple architecture into Assam; the Brahmaputra flows along the Tezpur side offering extraordinary scenic views of the river and the hills across; the Kaziranga National Park (UNESCO World Heritage — one-horned rhinoceros — about 70 km from Tezpur) is the most famous wildlife site accessible from Tezpur; the Tezpur area has significant tea gardens in the Sonitpur belt; the Tezpur Military Cantonment (the closest Indian Army garrison to the China border in Arunachal Pradesh — strategic importance during the 1962 Indo-China War) is in Tezpur; the Nameri National Park (Jia Bhoreli River) is also near Tezpur; the Bhalukpong (Arunachal Pradesh border) is accessible from Tezpur), and a city of blood-legend antiquity and Kaziranga proximity — is Assam's most mythologically named and strategically positioned Brahmaputra Valley city. From birthday parties in Tezpur to celebration cakes — RedHeart covers all Tezpur zones: Tezpur town, Dhekiajuli, Biswanath Chariali, Bihaguri, Sootea, Kaliabor, Missamari, Borgang.</p>
<p>Our Tezpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Agnigarh Usha-Anirudha / Kaziranga Rhino / Brahmaputra Brahmaputra River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezpur, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezpur town, Dhekiajuli, Biswanath Chariali, Bihaguri, Sootea, Missamari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Agnigarh Legend Fondant, Kaziranga Rhino Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tezpur?", answer: "Yes, same-day cake delivery is available across all Tezpur areas — Tezpur town, Dhekiajuli, Biswanath Chariali, Bihaguri, Sootea, and Missamari — for orders placed before 3 PM." },
      { question: "Do you have Agnigarh Legend and Kaziranga Rhino-themed cakes for Tezpur?", answer: "Yes! The Agnigarh Hill (the 'City of Blood' fort of demon-king Banasura — site of the Usha-Anirudha love story and Krishna's battle with Banasura) and the nearby Kaziranga National Park (UNESCO World Heritage — home of the one-horned Indian rhinoceros) inspire our most mythologically bloodied and prehistorically horned Tezpur fondant cakes." },
      { question: "Are eggless cakes available in Tezpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tezpur delivery." }
    ]
  },

  "dibrugarh": {
    cityName: "Dibrugarh",
    metaTitle: "Cake Delivery in Dibrugarh | Tea City Brahmaputra Assam Oil Fields | RedHeart",
    metaDescription: "Order cakes online in Dibrugarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dibrugarh",
    metaKeyword: "cake delivery dibrugarh, order cake online dibrugarh, birthday cake dibrugarh, custom cake dibrugarh, same day cake delivery dibrugarh Tea City Assam Brahmaputra oil fields ONGC Dibru Saikhowa elephant Assam gateway Arunachal Pradesh",
    footerContent: `
<h2>Cake Delivery in Dibrugarh — Assam's Tea City, Dibru-Saikhowa Wild Horse Sanctuary, and India's Easternmost Oil Fields Gateway</h2>
<p>Dibrugarh — the headquarters of Dibrugarh district in Assam, the "Tea City of India" and the eastern gateway to Arunachal Pradesh — a city of tea, oil, and extraordinary wildlife on the banks of the Brahmaputra (Dibrugarh is one of the world's most important tea-producing cities — surrounded by the tea gardens of the Dibrugarh-Tinsukia belt; the CTC Assam black tea from Dibrugarh gardens (particularly premium orthodox tea) is exported globally; the Brahmaputra at Dibrugarh is one of its widest points — the Bogibeel Bridge (4.94 km — India's longest rail-road bridge, opened December 2018) crosses the Brahmaputra at Dibrugarh connecting the south bank to the north bank and Arunachal Pradesh; the Dibru-Saikhowa National Park and Biosphere Reserve (Dibrugarh-Tinsukia district border) is one of Assam's most unique wildlife sanctuaries — protecting a population of feral (semi-wild) horses (the Mishing community's horses gone wild in the floodplain islands); Dibru-Saikhowa also protects tigers, elephants, dolphins, and rare birds; the ONGC Digboi (near Dibrugarh) — the Digboi Oil Field (discovered 1889) was Asia's first commercial oil well — the Digboi Refinery (established 1901) is the world's oldest operating oil refinery still in production; Dibrugarh is the starting point for the Brahmaputra cruise (river cruises from Dibrugarh to Dhubri); the Dibrugarh University is Assam's major eastern Assam university; the Kaliabar-Karbi Anglong tiger landscape is accessible from Dibrugarh), and a city of tea exports and Asia's oldest oil fields — is Assam's most commercially eastern and historically petroleum-significant city. From birthday parties in Dibrugarh to celebration cakes — RedHeart covers all zones: Dibrugarh town, Digboi, Naharkatia, Chabua, Moran, Barbaruah, Khowang, Duliajan.</p>
<p>Our Dibrugarh cake range: Chocolate, Assam Tea-flavoured (signature!), Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Dibru-Saikhowa Wild Horse / Bogibeel Brahmaputra Bridge / Digboi Asia Oldest Oil Well-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dibrugarh, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dibrugarh town, Digboi, Naharkatia, Chabua, Moran, Barbaruah, Khowang, Duliajan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Assam Tea (signature), Chocolate, Dibru-Saikhowa Wild Horse Fondant, Bogibeel Bridge Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dibrugarh?", answer: "Yes, same-day cake delivery is available across all Dibrugarh areas — Dibrugarh town, Digboi, Naharkatia, Chabua, Moran, Barbaruah, and Duliajan — for orders placed before 3 PM." },
      { question: "Do you have Assam Tea-flavoured and Dibru-Saikhowa Wild Horse-themed cakes for Dibrugarh?", answer: "Yes! Dibrugarh is the 'Tea City of India' — surrounded by globally exported premium CTC and orthodox Assam tea gardens. Our signature Assam Tea-flavoured cake and the Dibru-Saikhowa Wild Horse fondant (feral semi-wild horses in the Brahmaputra floodplain biosphere — unique to Dibrugarh's biosphere) are the city's most distinctively aromatic and wildly-feral signature cakes." },
      { question: "Are eggless cakes available in Dibrugarh?", answer: "Yes, all flavours — Assam Tea, Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dibrugarh delivery." }
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
