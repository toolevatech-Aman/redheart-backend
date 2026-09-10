// Cakes Batch 62 — 12 cities
// Uttarakhand: Rudraprayag, Champawat, Bageshwar
// Rajasthan: Ganganagar, Baran, Jhalawar
// MP: Alirajpur, Barwani
// West Bengal: Uttar Dinajpur, Dakshin Dinajpur
// Chhattisgarh: Rajnandgaon, Janjgir-Champa

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "rudraprayag": {
    cityName: "Rudraprayag",
    metaTitle: "Cake Delivery in Rudraprayag | Kedarnath Gateway Mandakini Alaknanda Confluence | RedHeart",
    metaDescription: "Order cakes online in Rudraprayag. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rudraprayag",
    metaKeyword: "cake delivery rudraprayag, order cake online rudraprayag, birthday cake rudraprayag, custom cake rudraprayag, same day cake delivery Kedarnath gateway Mandakini Alaknanda confluence Jim Corbett man-eater Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Rudraprayag — Kedarnath Gateway, Mandakini-Alaknanda Confluence, and Jim Corbett's Man-Eater</h2>
<p>Rudraprayag — the district headquarters of Rudraprayag district in Uttarakhand, the sacred confluence town and gateway to Kedarnath (one of the twelve Jyotirlingas), and the setting of Jim Corbett's most famous hunting story (the Rudraprayag Sangam — Rudraprayag is where the Mandakini River (coming from Kedarnath) meets the Alaknanda River (coming from Badrinath); the confluence is one of the Panch Prayags — the five holy river confluences along the Alaknanda in Uttarakhand (Vishnu Prayag, Nanda Prayag, Karna Prayag, Rudra Prayag, Dev Prayag); the Kedarnath route (Rudraprayag is the main gateway to Kedarnath — the highest of the 12 Jyotirlingas at 3,583m; the route from Rudraprayag goes via Guptkashi and Gaurikund to the Kedarnath temple; the 2013 Kedarnath cloudburst disaster — one of India's worst flash flood disasters — the Mandakini River was the main channel of destruction — devastated Rudraprayag district); the Jim Corbett "The Man-Eating Leopard of Rudraprayag" (Jim Corbett's 1947 book describes the hunting of the Rudraprayag man-eating leopard — the leopard terrorized the Garhwal Himalayan villages along the Kedarnath pilgrimage route for 8 years (1918-1926); killed over 125 people; the leopard was finally shot by Corbett near Rudraprayag in 1926; the book is considered one of the finest hunting narratives ever written; the Rudraprayag leopard is one of the most famous man-eating big cats in history)), and a city of Kedarnath gateway and Jim Corbett man-eating leopard — is Uttarakhand's most Kedarnath-Jyotirlinga-gateway and Jim-Corbett-man-eating-leopard-8-years-125-killed Rudraprayag. From birthday parties in Rudraprayag to celebration cakes — RedHeart covers all areas: Rudraprayag city, Agastmuni, Ukhimath, Tilwara, Guptkashi, Chandrapuri.</p>
<p>Our Rudraprayag cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kedarnath Jyotirlinga / Mandakini-Alaknanda Confluence-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rudraprayag, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rudraprayag city, Agastmuni, Ukhimath, Tilwara, Guptkashi, Chandrapuri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kedarnath Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rudraprayag?", answer: "Yes, same-day cake delivery is available across all Rudraprayag areas — Rudraprayag city, Agastmuni, Ukhimath, Tilwara, and Guptkashi — for orders placed before 3 PM." },
      { question: "Do you have Kedarnath and Rudraprayag-themed cakes?", answer: "Yes! Rudraprayag (the Mandakini-Alaknanda confluence — one of the Panch Prayags; gateway to Kedarnath Jyotirlinga at 3,583m; setting of Jim Corbett's 'The Man-Eating Leopard of Rudraprayag' — the leopard killed 125+ people over 8 years before Corbett shot it in 1926) inspires our most Kedarnath-gateway and Panch-Prayag-confluence fondant cakes." },
      { question: "Are eggless cakes available in Rudraprayag?", answer: "Yes, all flavours are available in eggless variants for Rudraprayag delivery." }
    ]
  },

  "champawat": {
    cityName: "Champawat",
    metaTitle: "Cake Delivery in Champawat | Jim Corbett Man-Eater Nepal Border Uttarakhand Baleshwar | RedHeart",
    metaDescription: "Order cakes online in Champawat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Champawat",
    metaKeyword: "cake delivery champawat, order cake online champawat, birthday cake champawat, custom cake champawat, same day cake delivery champawat Jim Corbett man-eater tigress Nepal border Uttarakhand Baleshwar Purnagiri Sharda River Kumaon",
    footerContent: `
<h2>Cake Delivery in Champawat — Jim Corbett's Most Famous Man-Eater Tigress, Nepal Border, and Purnagiri Temple</h2>
<p>Champawat — the district headquarters of Champawat district in Uttarakhand (Kumaon division; Nepal border; the smallest Uttarakhand district), a district immortalized by Jim Corbett's most celebrated hunting story (the Champawat Man-Eating Tigress (the Champawat tiger — a Bengal tigress who became the most prolific man-eater in recorded history; she killed an officially verified 436 people over 8 years (1900-1907) — first in Nepal (killing approximately 200 people) and then in the Champawat and Nainital areas of Kumaon; the British Indian authorities were unable to stop her; Jim Corbett (then a young hunter) was officially requested to shoot her; he tracked and shot the tigress in April 1907 near the village of Champawat; she had a broken upper-right canine (from a gunshot wound probably from her Nepal days) which prevented her from hunting her natural prey (deer, gaur) and forced her to prey on humans; the Champawat tiger holds the Guinness World Record for the most human kills by a wild animal; Jim Corbett described the hunt in "Man-Eaters of Kumaon" (1944) — one of the most celebrated hunting memoirs ever written); the Purnagiri Temple (in Champawat — one of the 108 Shakti Peethas; on a cliff-face overlooking the Sharda River; lakhs of pilgrims annually; the Purnagiri Mela); the Baleshwar Temple (Champawat — an ancient 11th-12th century Chand dynasty temple complex); the Nepal border (Champawat borders Nepal — the Sharda River is the boundary), and a city of Champawat Man-Eater 436 kills world record and Purnagiri Shakti Peetha — is Uttarakhand's most Champawat-Man-Eater-436-kills-Guinness-World-Record and Purnagiri-Shakti-Peetha-Sharda-River Champawat. From birthday parties in Champawat to celebration cakes — RedHeart covers all areas: Champawat city, Tanakpur, Lohaghat, Banbasa, Purnagiri area, Pithoragarh adjacent.</p>
<p>Our Champawat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Champawat Man-Eater / Purnagiri Temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champawat, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champawat city, Tanakpur, Lohaghat, Banbasa, Purnagiri area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Purnagiri Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Champawat?", answer: "Yes, same-day cake delivery is available across all Champawat areas — Champawat city, Tanakpur, Lohaghat, Banbasa, and Purnagiri area — for orders placed before 3 PM." },
      { question: "Do you have Champawat Man-Eater-themed cakes?", answer: "Yes! The Champawat Man-Eating Tigress (the most prolific man-eater in recorded history — 436 verified kills over 8 years 1900-1907; holds the Guinness World Record; Jim Corbett shot her in April 1907; described in his celebrated 'Man-Eaters of Kumaon' 1944; her broken canine from a prior gunshot forced her to prey on humans) and the Purnagiri Shakti Peetha inspire our most Champawat-Man-Eater-world-record fondant cakes." },
      { question: "Are eggless cakes available in Champawat?", answer: "Yes, all flavours are available in eggless variants for Champawat delivery." }
    ]
  },

  "bageshwar": {
    cityName: "Bageshwar",
    metaTitle: "Cake Delivery in Bageshwar | Baghnath Temple Uttarakhand Saryu Gomti Confluence Kumaon | RedHeart",
    metaDescription: "Order cakes online in Bageshwar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bageshwar",
    metaKeyword: "cake delivery bageshwar, order cake online bageshwar, birthday cake bageshwar, custom cake bageshwar, same day cake delivery bageshwar Baghnath Temple Saryu Gomti confluence Uttarakhand Shivratri Uttarayani Kumaon copper",
    footerContent: `
<h2>Cake Delivery in Bageshwar — Baghnath Temple, Saryu-Gomti Confluence, and Uttarayani Mela</h2>
<p>Bageshwar — the district headquarters of Bageshwar district in Uttarakhand (Kumaon; Saryu River valley; high Himalayas; gateway to Pindari Glacier and Sundardhunga), a deeply sacred and historically significant Kumaon town (the Baghnath Temple (Bageshwar — the town itself is named after Baghnath — "Lord of the Tigers" — an aspect of Shiva; the Baghnath Temple at the confluence of the Saryu and Gomti rivers is one of the most important Shiva temples in Kumaon; the temple has ancient roots; the Shivratri Mela at Bageshwar (the Shivratri fair at Bageshwar is one of the most important fairs in Kumaon — historically it was also the site of a major commercial fair where the hill people traded with the plains; one of the largest Shivratri celebrations in Uttarakhand); the Uttarayani Mela (Uttarayani — the Makar Sankranti festival at Bageshwar — the Uttarayani Mela is one of the most famous fairs of Kumaon; the Saryu River is believed to be the holiest bathing site in Kumaon on Uttarayani day; Bageshwar's Uttarayani Mela draws pilgrims from across Kumaon and beyond)); the Pindari Glacier trek (Bageshwar is the base for the famous Pindari Glacier trek in the Kumaon Himalayas; the Pindari Glacier feeds the Pindar River; the trek passes through ancient oak and rhododendron forests); the Baijnath Temple area (adjacent to Bageshwar — a complex of ancient Kushan-Katyuri dynasty temples at the Gomti River; 12th century CE; dedicated to Shiva-Vaidyanath), and a city of Baghnath Shiva temple Uttarayani Mela and Pindari Glacier trek base — is Uttarakhand's most Baghnath-Saryu-Gomti-Shivratri and Uttarayani-Mela-Kumaon Bageshwar. From birthday parties in Bageshwar to celebration cakes — RedHeart covers all areas: Bageshwar city, Kanda, Garur, Kapkot, Baijnath, Durgapipal.</p>
<p>Our Bageshwar cake range: Chocolate, Black Forest, Red Velvet, Himalayan Apple Cake, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bageshwar, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bageshwar city, Kanda, Garur, Kapkot, Baijnath, Durgapipal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Himalayan Apple Cake, Chocolate, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bageshwar?", answer: "Yes, same-day cake delivery is available across all Bageshwar areas — Bageshwar city, Kanda, Garur, Kapkot, and Baijnath — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bageshwar?", answer: "Yes, all flavours including Himalayan Apple Cake are available in eggless variants for Bageshwar delivery." },
      { question: "Do you deliver midnight cakes in Bageshwar?", answer: "Yes, midnight birthday cake delivery is available across Bageshwar city zones." }
    ]
  },

  "ganganagar": {
    cityName: "Ganganagar",
    metaTitle: "Cake Delivery in Ganganagar | Sri Ganganagar Rajasthan Wheat Belt Punjab Border Bhakra | RedHeart",
    metaDescription: "Order cakes online in Ganganagar (Sri Ganganagar). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ganganagar (Sri Ganganagar)",
    metaKeyword: "cake delivery ganganagar sri ganganagar, order cake online sri ganganagar, birthday cake ganganagar, custom cake ganganagar, same day cake delivery Rajasthan wheat Punjab border Bhakra canal Suratgarh Anupgarh",
    footerContent: `
<h2>Cake Delivery in Ganganagar — Rajasthan's Wheat Bowl, Gang Canal Heritage, and Punjab-Pakistan Border</h2>
<p>Sri Ganganagar — the district headquarters of Sri Ganganagar district in Rajasthan (northwestern Rajasthan; Punjab-Haryana border; Pakistan border), named after Maharaja Ganga Singh who transformed the Thar Desert into fertile farmland (the Maharaja Ganga Singh and the Gang Canal (Maharaja Ganga Singh of Bikaner (1880-1943 CE) — one of Rajasthan's greatest rulers; he had the Gang Canal constructed (completed 1927) to bring the waters of the Sutlej River from Punjab into the Bikaner desert; the canal transformed barren Thar Desert land into fertile agricultural land; the area was renamed "Ganganagar" (Ganga Singh's city) after the Maharaja; the Gang Canal brought settlement and agriculture where only sand dunes had existed; Ganga Singh also represented India at the Versailles Peace Conference 1919 and was a signatory to the Treaty of Versailles on behalf of India); the Wheat Bowl of Rajasthan (Sri Ganganagar and Hanumangarh districts form Rajasthan's most productive agricultural zone — the Punjab-Rajasthan border belt; significant wheat, cotton, citrus fruit, and mustard cultivation; the Indira Gandhi Canal (linked to the Bhakra system) provides irrigation; Sri Ganganagar is sometimes called the "Punjab of Rajasthan"); the Pakistan Border (Sri Ganganagar district borders Pakistan — the Anupgarh border area; the India-Pakistan fence), and a city of Gang Canal Maharaja Ganga Singh desert-to-farmland and Rajasthan wheat bowl — is Rajasthan's most Maharaja-Ganga-Singh-Gang-Canal-desert-to-fertile and Wheat-Bowl-Punjab-of-Rajasthan Ganganagar. From birthday parties in Ganganagar to celebration cakes — RedHeart covers all areas: Sri Ganganagar city, Suratgarh, Anupgarh, Padampur, Raisinghnagar, Gharsana, Sadulshahar.</p>
<p>Our Ganganagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sri Ganganagar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sri Ganganagar city, Suratgarh, Anupgarh, Padampur, Raisinghnagar, Gharsana, Sadulshahar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sri Ganganagar?", answer: "Yes, same-day cake delivery is available across all Sri Ganganagar areas — Ganganagar city, Suratgarh, Anupgarh, Padampur, Raisinghnagar, and Gharsana — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ganganagar?", answer: "Yes, all flavours are available in eggless variants for Sri Ganganagar delivery." },
      { question: "Do you deliver midnight cakes in Sri Ganganagar?", answer: "Yes, midnight birthday cake delivery is available across Sri Ganganagar city and Suratgarh zones." }
    ]
  },

  "baran": {
    cityName: "Baran",
    metaTitle: "Cake Delivery in Baran | Shahabad Hadoti Rajasthan Chambal Sehore Wildlife Sorsan | RedHeart",
    metaDescription: "Order cakes online in Baran. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Baran",
    metaKeyword: "cake delivery baran, order cake online baran, birthday cake baran, custom cake baran, same day cake delivery baran Shahabad Hadoti Rajasthan Chambal Parvan River Sorsan Great Indian Bustard wildlife",
    footerContent: `
<h2>Cake Delivery in Baran — Hadoti's Hidden Gem, Sorsan Grasslands (Great Indian Bustard), and Shahabad Fort</h2>
<p>Baran — the district headquarters of Baran district in Rajasthan (eastern Rajasthan; Hadoti region; Chambal River basin; carved from Kota in 1991), a district with archaeological treasures and one of India's last Great Indian Bustard habitats (the Shahabad Fort and Area (Shahabad — in Baran district; a historic fort of the medieval period; the Shahabad sandstone quarries provide quality stone used in construction across Rajasthan); the Sorsan Grasslands (Sorsan — a grassland area in Baran district which is one of the few remaining habitats of the Great Indian Bustard (Ardeotis nigriceps) — India's heaviest flying bird and a critically endangered species; the Great Indian Bustard is the State Bird of Rajasthan; fewer than 200 remain in the wild; the bird is critically endangered due to habitat loss (grassland conversion) and powerline collision; Sorsan-Baran is one of the last refugia; conservation efforts underway); the Brahmani Mata Temple (Sorsan area — an important temple in the Baran district); the Parvan River and Chambal tributaries in Baran district; the Atru and Kishanganj sub-divisions of Baran; the Hadoti cultural tradition (the Baran-Kota-Bundi-Jhalawar Hadoti region has a distinct cultural identity within Rajasthan — the Hadoti language/dialect, the Hadoti school of miniature painting)), and a city of Sorsan Great Indian Bustard last habitat and Hadoti Rajasthan — is Rajasthan's most Sorsan-Great-Indian-Bustard-critically-endangered-fewer-200 and Hadoti-region Baran. From birthday parties in Baran to celebration cakes — RedHeart covers all areas: Baran city, Shahabad, Atru, Chhabra, Kishanganj, Mangrol, Anta.</p>
<p>Our Baran cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baran, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baran city, Shahabad, Atru, Chhabra, Kishanganj, Mangrol, Anta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Baran?", answer: "Yes, same-day cake delivery is available across all Baran areas — Baran city, Shahabad, Atru, Chhabra, Kishanganj, and Mangrol — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Baran?", answer: "Yes, all flavours are available in eggless variants for Baran delivery." },
      { question: "Do you deliver midnight cakes in Baran?", answer: "Yes, midnight birthday cake delivery is available across Baran city zones." }
    ]
  },

  "jhalawar": {
    cityName: "Jhalawar",
    metaTitle: "Cake Delivery in Jhalawar | Rajasthan Opium Hadoti Gagron Fort UNESCO Chandrabhaga | RedHeart",
    metaDescription: "Order cakes online in Jhalawar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jhalawar",
    metaKeyword: "cake delivery jhalawar, order cake online jhalawar, birthday cake jhalawar, custom cake jhalawar, same day cake delivery jhalawar Gagron Fort UNESCO Rajasthan opium Hadoti Chandrabhaga River Kali Sindh",
    footerContent: `
<h2>Cake Delivery in Jhalawar — Gagron Fort (UNESCO), Jhalawar Citrus Capital, and Hadoti Rajasthan Heritage</h2>
<p>Jhalawar — the district headquarters of Jhalawar district in Rajasthan (southeastern Rajasthan; Hadoti region; Kali Sindh and Chandrabhaga rivers), the "orange city" of Rajasthan and home to a UNESCO-listed fort (the Gagron Fort (UNESCO World Heritage Site 2013 — listed as part of the "Hill Forts of Rajasthan" along with Chittorgarh, Kumbhalgarh, Ranthambore, Amber, and Jaisalmer; the Gagron Fort is unique among the six — it is a water fort (jal durg) built at the confluence of the Ahu and Kali Sindh rivers; surrounded by water and steep cliffs on three sides; the fort has been the site of two Jauhar (self-immolation) events; the fort was held by the Khinchi Chauhan Rajputs; Sufi saint Hamiduddin Chishti's dargah is inside the fort — a remarkable example of Hindu-Muslim coexistence); the Jhalawar Citrus (orange and kinnow) production (Jhalawar district is known as the "Rajasthan of oranges/citrus" — the Chandrabhaga-Kali Sindh belt is suitable for orange and kinnow cultivation; a significant citrus-producing belt in Rajasthan); the Chandrabhaga Fair (Jhalawar — an ancient cattle and folk fair on the Chandrabhaga River; the Jhalawar Archaeological Museum (one of Rajasthan's important archaeological museums; Hadoti art and sculpture)); the Jhalrapatan Town (within Jhalawar — "City of Bells"; the Sheetalmata Temple and Surya Temple at Jhalrapatan; 10th-11th century temples), and a city of Gagron UNESCO Water Fort and Jhalawar citrus orange — is Rajasthan's most Gagron-UNESCO-Water-Fort-jal-durg and Jhalawar-citrus-orange-Hadoti Jhalawar. From birthday parties in Jhalawar to celebration cakes — RedHeart covers all areas: Jhalawar city, Jhalrapatan, Aklera, Khanpur, Manoharthana, Pirawa, Bhawanimandi.</p>
<p>Our Jhalawar cake range: Chocolate, Black Forest, Red Velvet, Mango (Orange-inspired!), Butterscotch, Photo Cakes, Fondant Gagron Water Fort / UNESCO Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhalawar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhalawar city, Jhalrapatan, Aklera, Khanpur, Manoharthana, Pirawa, Bhawanimandi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gagron Fort Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jhalawar?", answer: "Yes, same-day cake delivery is available across all Jhalawar areas — Jhalawar city, Jhalrapatan, Aklera, Khanpur, Manoharthana, Pirawa, and Bhawanimandi — for orders placed before 3 PM." },
      { question: "Do you have Gagron Fort UNESCO-themed cakes?", answer: "Yes! The Gagron Fort (UNESCO World Heritage 2013 — one of the Hill Forts of Rajasthan; unique as a jal durg water fort built at the Ahu-Kali Sindh river confluence; surrounded by water and cliffs on three sides; site of two Jauhar events; also home to Sufi saint Hamiduddin Chishti's dargah — a rare Hindu-Muslim heritage coexistence) inspires our most Gagron-Water-Fort-UNESCO fondant cakes." },
      { question: "Are eggless cakes available in Jhalawar?", answer: "Yes, all flavours are available in eggless variants for Jhalawar delivery." }
    ]
  },

  "alirajpur": {
    cityName: "Alirajpur",
    metaTitle: "Cake Delivery in Alirajpur | Bhil Tribe MP Narmada Gujarat Border Jhabua Adjacent | RedHeart",
    metaDescription: "Order cakes online in Alirajpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Alirajpur",
    metaKeyword: "cake delivery alirajpur, order cake online alirajpur, birthday cake alirajpur, custom cake alirajpur, same day cake delivery alirajpur Bhil tribe MP Narmada Gujarat border Jhabua adjacent Haat Bazaar tribal",
    footerContent: `
<h2>Cake Delivery in Alirajpur — Bhil Tribal Heartland, Narmada Valley, and MP-Gujarat-Rajasthan Tri-Junction</h2>
<p>Alirajpur — the district headquarters of Alirajpur district in Madhya Pradesh (southwestern MP; carved from Jhabua in 2008; MP-Gujarat-Rajasthan tri-junction; Narmada Valley), one of India's most tribal districts — predominantly Bhil community (the Alirajpur district — one of India's most tribal districts; the Bhil tribal community makes up approximately 80-90% of the Alirajpur population; the Bhil are one of India's largest tribal groups; the Alirajpur district is a Scheduled Tribe-dominated district; the Haat Bazaar (weekly tribal markets) — the tribal weekly markets (haats) at Alirajpur are vibrant cultural events where Bhil community members from villages across the district gather to trade; traditional items, handicrafts, and agricultural produce; the haat bazaar is the social hub of Bhil tribal life; the traditional Bhil pithora art (colorful mural paintings on walls depicting hunting, agriculture, festivals, animals; painted on house walls during special occasions; a living tribal art tradition of the Bhil-Rathwa people); the Narmada River (Alirajpur district is in the Narmada valley edge; the river flows as the MP-Gujarat border nearby; the Narmada project and displacement of Bhil communities from Alirajpur was a significant issue in the Narmada Bachao Andolan (led by Medha Patkar)); the Gujarat-Rajasthan borders; the Dudhi and Chadohar rivers in the district), and a city of Bhil tribal Pithora art and Narmada displacement-affected Alirajpur — is MP's most Bhil-tribal-80percent and Narmada-Bachao-Andolan-displacement Alirajpur. From birthday parties in Alirajpur to celebration cakes — RedHeart covers all areas: Alirajpur city, Jobat, Katthiwara, Sondwa, Bhabra, Udaigarh, Chhaktalav.</p>
<p>Our Alirajpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alirajpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alirajpur city, Jobat, Katthiwara, Sondwa, Bhabra, Udaigarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Alirajpur?", answer: "Yes, same-day cake delivery is available across all Alirajpur areas — Alirajpur city, Jobat, Katthiwara, Sondwa, and Bhabra — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Alirajpur?", answer: "Yes, all flavours are available in eggless variants for Alirajpur delivery." },
      { question: "Do you deliver midnight cakes in Alirajpur?", answer: "Yes, midnight birthday cake delivery is available across Alirajpur city zones." }
    ]
  },

  "barwani": {
    cityName: "Barwani",
    metaTitle: "Cake Delivery in Barwani | Narmada MP Bhil Tribe Rajghat Rani Kajal Gujarat Border | RedHeart",
    metaDescription: "Order cakes online in Barwani. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barwani",
    metaKeyword: "cake delivery barwani, order cake online barwani, birthday cake barwani, custom cake barwani, same day cake delivery barwani Narmada River MP Bhil Silawad Rajghat Rani Kajal Gujarat border Omkareshwar adjacent",
    footerContent: `
<h2>Cake Delivery in Barwani — Narmada Valley, Bhil Tribal District, and MP-Gujarat Border</h2>
<p>Barwani — the district headquarters of Barwani district in Madhya Pradesh (southwestern MP; Narmada Valley; carved from West Nimar; MP-Gujarat border), a Narmada-side tribal district adjacent to the Omkareshwar Jyotirlinga (the Barwani district — situated in the Narmada Valley along the MP-Gujarat border; the Narmada River forms part of the MP-Maharashtra border in this region; the district is predominantly inhabited by Bhil and Barela tribal communities; one of MP's more tribal districts; the Omkareshwar adjacency (Omkareshwar Jyotirlinga — one of the 12 Jyotirlingas on the Narmada at Mandhata Island — is in Khandwa district but is accessible from Barwani; the entire Narmada belt through Barwani is considered sacred); the Rajghat (Barwani — the Rajghat on the Narmada is a sacred bathing ghat; pilgrims walking the Narmada Parikrama pass through); the Silawad (Barwani district — a significant town); the Rani Kajal Waugh / Rani Kajal story (there is local historical folklore about Rani Kajal of Barwani — a historical queen associated with the region); the Satra festival and tribal cultural events of the Bhil and Barela communities; the Anjanvara and Pati areas (forests with tribal settlements); the MP-Gujarat border trade)), and a city of Narmada Valley and Bhil-Barela tribal Barwani — is MP's most Narmada-Barwani-tribal-Bhil and MP-Gujarat-border-Narmada-Parikrama Barwani. From birthday parties in Barwani to celebration cakes — RedHeart covers all areas: Barwani city, Sendhwa, Rajpur, Pansemal, Pati, Niwali, Anjad.</p>
<p>Our Barwani cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barwani, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barwani city, Sendhwa, Rajpur, Pansemal, Pati, Niwali, Anjad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barwani?", answer: "Yes, same-day cake delivery is available across all Barwani areas — Barwani city, Sendhwa, Rajpur, Pansemal, Pati, Niwali, and Anjad — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Barwani?", answer: "Yes, all flavours are available in eggless variants for Barwani delivery." },
      { question: "Do you deliver midnight cakes in Barwani?", answer: "Yes, midnight birthday cake delivery is available across Barwani city and Sendhwa zones." }
    ]
  },

  "uttar-dinajpur": {
    cityName: "Uttar Dinajpur",
    metaTitle: "Cake Delivery in Uttar Dinajpur | Raiganj Wildlife Sanctuary WB Bangladesh Purnea | RedHeart",
    metaDescription: "Order cakes online in Uttar Dinajpur (Raiganj). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Uttar Dinajpur (Raiganj)",
    metaKeyword: "cake delivery uttar dinajpur raiganj, order cake online raiganj, birthday cake raiganj, custom cake uttar dinajpur, same day cake delivery Raiganj Wildlife Sanctuary birds WB Bangladesh Nepal border Kulik Bird Sanctuary",
    footerContent: `
<h2>Cake Delivery in Uttar Dinajpur (Raiganj) — Kulik Bird Sanctuary, Asia's Largest Heron Colony, and Bangladesh Border</h2>
<p>Uttar Dinajpur — the district headquarters of Uttar Dinajpur (North Dinajpur) district in West Bengal (northern West Bengal; Bangladesh border; Raipur division), home to one of Asia's most remarkable bird sanctuaries (the Raiganj Wildlife Sanctuary / Kulik Bird Sanctuary (the Kulik Bird Sanctuary — in Raiganj city itself; a forest area within the urban limits of Raiganj; considered one of Asia's largest heron colonies; the sanctuary hosts the largest gathering of open-bill storks, night herons, little cormorants, and other waterbirds in the monsoon-to-winter season; thousands of birds nest here simultaneously; the cacophony of bird calls is extraordinary; the Kulik River runs through the sanctuary; accessible by rickshaw from Raiganj town center); the Bangladesh border (Uttar Dinajpur borders Bangladesh — the district shares a border with Rajshahi division of Bangladesh; significant cultural and historical connections); the Itahar and Raiganj areas (major towns); the Goalpokhar area (a significant border market town in Uttar Dinajpur); the Kaliyaganj town (also known for the Kaliyaganj block); the historical Dinajpur district (before partition, the entire Dinajpur was a single large district; the partition split it between West Bengal (North+South Dinajpur) and Bangladesh (Dinajpur district Bangladesh))), and a city of Kulik Bird Sanctuary Asia's largest heron colony and Dinajpur Bangladesh partition heritage — is WB's most Kulik-Bird-Sanctuary-Asia's-largest-open-bill-storks and Bangladesh-Dinajpur-partition Raiganj. From birthday parties in Raiganj to celebration cakes — RedHeart covers all areas: Raiganj city, Itahar, Hemtabad, Karandighi, Islampur, Goalpokhar, Kaliyaganj.</p>
<p>Our Uttar Dinajpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Uttar Dinajpur (Raiganj), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raiganj city, Itahar, Hemtabad, Karandighi, Islampur, Goalpokhar, Kaliyaganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Uttar Dinajpur (Raiganj)?", answer: "Yes, same-day cake delivery is available across all Uttar Dinajpur areas — Raiganj city, Itahar, Hemtabad, Karandighi, Islampur, and Goalpokhar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Raiganj (Uttar Dinajpur)?", answer: "Yes, all flavours are available in eggless variants for Uttar Dinajpur delivery." },
      { question: "Do you deliver midnight cakes in Raiganj?", answer: "Yes, midnight birthday cake delivery is available across Raiganj city zones." }
    ]
  },

  "dakshin-dinajpur": {
    cityName: "Dakshin Dinajpur",
    metaTitle: "Cake Delivery in Dakshin Dinajpur | Balurghat WB Bangladesh Border Tapan Kumarganj | RedHeart",
    metaDescription: "Order cakes online in Dakshin Dinajpur (Balurghat). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dakshin Dinajpur (Balurghat)",
    metaKeyword: "cake delivery dakshin dinajpur balurghat, order cake online balurghat, birthday cake balurghat, custom cake dakshin dinajpur, same day cake delivery Balurghat WB Bangladesh border Atrai River Tapan Kumarganj",
    footerContent: `
<h2>Cake Delivery in Dakshin Dinajpur (Balurghat) — Bangladesh Border District, Atrai River, and Partition Heritage</h2>
<p>Dakshin Dinajpur — the district headquarters of Dakshin Dinajpur (South Dinajpur) district in West Bengal (southern part of the old Dinajpur district; Bangladesh border; carved from West Dinajpur in 1992), the second half of the partitioned Dinajpur district (the Dakshin Dinajpur district — the southern portion of the old West Dinajpur district, which itself was the Indian portion of undivided Dinajpur; the partition of 1947 split undivided Dinajpur into three: the Indian portions became West Dinajpur (now split into North and South Dinajpur) and Bangladesh got the main Dinajpur district); the Balurghat town (the district headquarters; a significant commercial center of South Dinajpur); the Bangladesh border (Dakshin Dinajpur borders Bangladesh — the Hili border crossing (Hili-Mahipur International Trade Center — a significant India-Bangladesh trade crossing; bilateral trade in agricultural produce)); the Atrai River (the Atrai flows through Dakshin Dinajpur into Bangladesh; a Ganga tributary that flows south into Bengal and Bangladesh); the Tapan area (Dakshin Dinajpur — an important block; Tapan is known for its agricultural markets); the Kushmandi area (ancient archaeological significance in Dakshin Dinajpur — the Kushmandi area has terracotta temple heritage); the Kumarganj subdivision), and a city of Balurghat Bangladesh Hili border trade and partitioned Dinajpur heritage — is WB's most Bangladesh-Hili-trade-crossing and Dinajpur-partition-Atrai-River Balurghat. From birthday parties in Balurghat to celebration cakes — RedHeart covers all areas: Balurghat city, Hili, Tapan, Kumarganj, Gangarampur, Kushmandi, Bansihari.</p>
<p>Our Dakshin Dinajpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dakshin Dinajpur (Balurghat), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balurghat city, Hili, Tapan, Kumarganj, Gangarampur, Kushmandi, Bansihari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dakshin Dinajpur (Balurghat)?", answer: "Yes, same-day cake delivery is available across all Dakshin Dinajpur areas — Balurghat city, Hili, Tapan, Kumarganj, Gangarampur, and Kushmandi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Balurghat (Dakshin Dinajpur)?", answer: "Yes, all flavours are available in eggless variants for Dakshin Dinajpur delivery." },
      { question: "Do you deliver midnight cakes in Balurghat?", answer: "Yes, midnight birthday cake delivery is available across Balurghat city zones." }
    ]
  },

  "rajnandgaon": {
    cityName: "Rajnandgaon",
    metaTitle: "Cake Delivery in Rajnandgaon | Chhattisgarh Tandula Dam Dongargarh Mata Bamleshwari | RedHeart",
    metaDescription: "Order cakes online in Rajnandgaon. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rajnandgaon",
    metaKeyword: "cake delivery rajnandgaon, order cake online rajnandgaon, birthday cake rajnandgaon, custom cake rajnandgaon, same day cake delivery Rajnandgaon Chhattisgarh Dongargarh Mata Bamleshwari Tandula River Tropic of Cancer",
    footerContent: `
<h2>Cake Delivery in Rajnandgaon — Dongargarh Mata Bamleshwari Temple, Tropic of Cancer, and Chhattisgarh's Cultural City</h2>
<p>Rajnandgaon — the district headquarters of Rajnandgaon district in Chhattisgarh (northwestern Chhattisgarh; close to MP border; on the main Mumbai-Howrah railway line), a district known for the Dongargarh pilgimage and the Tropic of Cancer passing through it (the Dongargarh Mata Bamleshwari Temple (Dongargarh — in Rajnandgaon district; the Mata Bamleshwari Devi Temple at Dongargarh is one of Chhattisgarh's most important pilgrimage sites; the temple sits atop a 1,600-step hill (Badi Bamleshwari at hilltop; Choti Bamleshwari at the base); two distinct shrines of Goddess Bamleshwari; lakhs of devotees during Navratri; the Dongargarh hill is a scenic landmark visible from the railway line; a ropeway cable car has been built for elderly pilgrims); the Tropic of Cancer (the Tropic of Cancer passes through Rajnandgaon district — marking the northern boundary of the tropics; Rajnandgaon is one of the few districts in India where the Tropic of Cancer can be specifically located); the Rajnandgaon textile industry (the district has a traditional handloom weaving industry; Chhattisgarhi sarees and textiles; the Rajnandgaon area is known for cotton textile production); the Tandula River and Tandula Dam (the Tandula Dam near Balod — on the Tandula River; the irrigation infrastructure of western Chhattisgarh); the Gond tribal communities in the forested areas of Rajnandgaon), and a city of Dongargarh Mata Bamleshwari lakhs-of-pilgrims and Tropic-of-Cancer-passes-through Rajnandgaon. From birthday parties in Rajnandgaon to celebration cakes — RedHeart covers all areas: Rajnandgaon city, Dongargarh, Khairagarh, Chhuikhadan, Dongargaon, Ambagarh Chauki, Mohla.</p>
<p>Our Rajnandgaon cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mata Bamleshwari / Dongargarh Temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajnandgaon, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajnandgaon city, Dongargarh, Khairagarh, Chhuikhadan, Dongargaon, Ambagarh Chauki</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bamleshwari Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rajnandgaon?", answer: "Yes, same-day cake delivery is available across all Rajnandgaon areas — Rajnandgaon city, Dongargarh, Khairagarh, Chhuikhadan, and Dongargaon — for orders placed before 3 PM." },
      { question: "Do you have Mata Bamleshwari Dongargarh-themed cakes?", answer: "Yes! The Dongargarh Mata Bamleshwari Temple (Badi Bamleshwari atop a 1,600-step hill; Choti Bamleshwari at base; lakhs of devotees during Navratri; ropeway cable car; one of Chhattisgarh's most important pilgrimage sites) and the Tropic of Cancer passing through Rajnandgaon inspire our most Bamleshwari-Dongargarh fondant cakes." },
      { question: "Are eggless cakes available in Rajnandgaon?", answer: "Yes, all flavours are available in eggless variants for Rajnandgaon delivery." }
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
