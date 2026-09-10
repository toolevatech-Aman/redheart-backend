// Cakes Batch 22 — 15 cities:
// Gujarat: Dahod (100% Eggless/Pure Veg)
// Odisha: Bargarh, Jagatsinghpur
// Karnataka: Chikkaballapur
// Telangana: Jagtial, Mancherial, Suryapet
// UP: Maharajganj, Siddharthnagar, Shravasti
// Bihar: Banka, Nalanda
// Manipur: Churachandpur
// Arunachal Pradesh: Pasighat
// Rajasthan: Bundi

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "dahod": {
    cityName: "Dahod",
    metaTitle: "Cake Delivery in Dahod | 100% Eggless Pure Veg Tribal Gujarat | RedHeart",
    metaDescription: "Order 100% eggless cakes in Dahod. Same-day delivery across Dahod. Pure Veg birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dahod",
    metaKeyword: "cake delivery dahod, order cake online dahod, birthday cake dahod, eggless cake dahod, same day cake delivery dahod tribal bhil panchal madhya pradesh border godhra road vadodara road pure veg gujarat",
    footerContent: `
<h2>100% Eggless Cake Delivery in Dahod — Gujarat's Easternmost Tribal District, Bhil Cultural Heritage, and MP-Rajasthan Border Gateway</h2>
<p>Dahod — the headquarters of Dahod district in Gujarat's easternmost tribal belt, a city of tribal culture and railway heritage (Dahod is one of Gujarat's most tribal-populated districts — the Bhil and Bhilala communities are the predominant indigenous groups, known for their archery traditions, Gol Gadhedo marriage customs, Holi festivals with distinctive tribal rituals, and the Garba dance; the Bhil community's Bhagoria festival (celebrated just before Holi) involves young men and women meeting at weekly markets to find life partners — a tradition unique to the Bhil people of the Dahod-Madhya Pradesh-Rajasthan tri-state tribal belt; Dahod is historically significant as the birthplace of Emperor Aurangzeb — the last of the great Mughal emperors — who was born in Dahod in 1618 while his father Shah Jahan was governor of Gujarat; a memorial marks his birthplace), an important railway junction (Dahod Junction is on the Vadodara-Indore railway line, which passes through the Vindhya and Satpura hills; Dahod's railway workshops employ thousands), and on the border of MP's Jhabua-Alirajpur tribal belt and Rajasthan's Dungarpur-Banswara tribal zone — is a city of tribal cultural significance. As with all Gujarat cities, all our cakes are <strong>100% Eggless and Pure Vegetarian</strong>. From birthday parties in the Civil Lines area to corporate cakes at the railway workshops, from anniversary surprises near the Godhra Road to student cakes at Dahod's colleges — RedHeart covers all Dahod zones: Central (Civil Lines, Station Road, Godhra Road), North (Rajasthan border, Limkheda, Devgadh Baria), South (MP border, Fatehpura, Dohad), East (MP-Jhabua border, Zalod), West (Godhra-Vadodara Road, Lunawada).</p>
<p>Our Dahod cake range (all 100% Eggless/Pure Veg): Chocolate, Black Forest, Red Velvet, Mango (Gujarat Kesar!), Butterscotch, Photo Cakes, Fondant Bhil tribal / Aurangzeb birthplace-theme cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dahod, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Godhra Road, Devgadh Baria, Limkheda, Zalod</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% Eggless & Pure Veg (all Gujarat orders)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kesar Mango, Bhil Tribal Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Dahod 100% Eggless?", answer: "Yes! All cakes delivered in Dahod are 100% Eggless and Pure Vegetarian — honouring Gujarat's culinary tradition. Every flavour from Chocolate to Kesar Mango is egg-free." },
      { question: "Can I get same-day cake delivery in Dahod?", answer: "Yes, same-day cake delivery is available across all Dahod areas — Civil Lines, Station Road, Godhra Road, and Devgadh Baria — for orders placed before 3 PM." },
      { question: "Do you deliver midnight cakes in Dahod?", answer: "Yes, midnight birthday cake delivery is available across Dahod's central and residential zones." }
    ]
  },

  "bargarh": {
    cityName: "Bargarh",
    metaTitle: "Cake Delivery in Bargarh | Dhanu Jatra Odisha | RedHeart",
    metaDescription: "Order cakes online in Bargarh. Same-day delivery across Bargarh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bargarh",
    metaKeyword: "cake delivery bargarh, order cake online bargarh, birthday cake bargarh, custom cake bargarh, same day cake delivery bargarh dhanu jatra hirakud reservoir sambalpur road nuapada road mahanadi",
    footerContent: `
<h2>Cake Delivery in Bargarh — Dhanu Jatra's Guinness World Record Festival, Hirakud's Mahanadi Belt, and Western Odisha's Cultural Capital</h2>
<p>Bargarh — the headquarters of Bargarh district in Odisha, a city of unique cultural distinction (Bargarh hosts the Dhanu Jatra — recognised by the Guinness World Records as the world's largest open-air theatrical performance; the Dhanu Jatra is an 11-day annual festival held in December-January that dramatises the events of Lord Krishna's life in Mathura — the entire town of Bargarh transforms into "Mathura", with citizens playing the roles of Kansa, Devaki, Vasudeva, Nanda, and Yashoda; the king who plays "Kansa" is given real administrative powers for the duration of the festival; thousands of people participate as actors and millions watch; the festival has been held uninterrupted since 1948 and is Odisha's most distinctive cultural event), close to the Hirakud Reservoir (the Hirakud Dam on the Mahanadi River — the world's longest earthen dam at 25.8 km — creates the Hirakud reservoir near Sambalpur, 60 km from Bargarh; the reservoir's backwaters and the Hirakud bird sanctuary attract winter migratory birds), and a district of rice cultivation (the Hirakud canal system irrigates Bargarh's paddy fields; Bargarh is known as Odisha's "Rice Bowl") — is a city of theatrical grandeur and agricultural wealth. From birthday parties near the Dhanu Jatra arena to corporate cakes at the large rice mills, from anniversary surprises in the Civil Lines area to student cakes at Bargarh's colleges — RedHeart covers all Bargarh zones: Central (Civil Lines, Station Road, Sambalpur Road), North (Nuapada Road, Paikmal, Bhatli), South (Bolangir Road, Sohela, Padmapur), East (Sambalpur border, Barpali, Attabira), West (Nuapada border, Gaisilet, Bijepur).</p>
<p>Our Bargarh cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Dhanu Jatra / Krishna Mathura-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bargarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Sambalpur Road, Nuapada Road, Barpali, Bijepur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dhanu Jatra Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bargarh?", answer: "Yes, same-day cake delivery is available across all Bargarh areas — Civil Lines, Station Road, Sambalpur Road, and Barpali — for orders placed before 3 PM." },
      { question: "Do you have Dhanu Jatra-themed cakes in Bargarh?", answer: "Yes! Bargarh's Dhanu Jatra — the Guinness World Record holder for the world's largest open-air theatrical performance, transforming the entire town into Mathura for 11 days to re-enact Krishna's life — inspires our Dhanu Jatra fondant cakes." },
      { question: "Are eggless cakes available in Bargarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bargarh delivery." }
    ]
  },

  "jagatsinghpur": {
    cityName: "Jagatsinghpur",
    metaTitle: "Cake Delivery in Jagatsinghpur | Paradeep Port Odisha | RedHeart",
    metaDescription: "Order cakes online in Jagatsinghpur. Same-day delivery across Jagatsinghpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jagatsinghpur",
    metaKeyword: "cake delivery jagatsinghpur, order cake online jagatsinghpur, birthday cake jagatsinghpur, custom cake jagatsinghpur, same day cake delivery jagatsinghpur paradeep port mahanadi delta cuttack road bhubaneswar",
    footerContent: `
<h2>Cake Delivery in Jagatsinghpur — Paradeep Port's Industrial City, Mahanadi-Bay of Bengal Delta, and Odisha's Coastal Industrial District</h2>
<p>Jagatsinghpur — the headquarters of Jagatsinghpur district in Odisha, a district whose claim to national importance rests on Paradeep (Paradip Port — one of India's 13 major ports, located in Jagatsinghpur district at the confluence of the Mahanadi River and the Bay of Bengal — is Odisha's only major port and one of India's largest ports; Paradeep handles coal, iron ore, fertilisers, and petroleum products; the Paradeep Port Trust manages the port infrastructure; the IFFCO (Indian Farmers Fertiliser Cooperative) fertiliser plant at Paradeep is one of India's largest urea and phosphatic fertiliser plants; Paradeep Phosphates Limited is also located here; the port area has a large industrial township; the Paradeep Beach is a popular picnic spot; and tragically, Paradeep was one of the worst-affected areas in the 1999 Odisha Super Cyclone, which killed 10,000+ people; modern storm shelters and cyclone warning systems built after 1999 have significantly reduced casualties in subsequent storms), and a district in the fertile Mahanadi delta (with significant rice, jute, and betel cultivation; Jagatsinghpur's prawn and fish farming is significant) — is a city of port industry and delta fertility. From birthday parties near the Paradeep port township to corporate cakes at the large fertiliser plants, from anniversary surprises in the Civil Lines area to student cakes at Jagatsinghpur's colleges — RedHeart covers all Jagatsinghpur zones: Jagatsinghpur town, Paradeep, Ersama, Kujang, Tirtol, Balikuda.</p>
<p>Our Jagatsinghpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Paradeep Port / Mahanadi Delta-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagatsinghpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagatsinghpur town, Paradeep, Ersama, Kujang, Tirtol, Balikuda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Paradeep Port Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jagatsinghpur?", answer: "Yes, same-day cake delivery is available across all Jagatsinghpur areas — Jagatsinghpur town, Paradeep, Ersama, and Kujang — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the Paradeep port and IFFCO/Paradeep Phosphates townships?", answer: "Yes, the Paradeep port township, IFFCO colony, and all industrial residential zones in Paradeep are covered under our Jagatsinghpur delivery zone." },
      { question: "Are eggless cakes available in Jagatsinghpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jagatsinghpur delivery." }
    ]
  },

  "chikkaballapur": {
    cityName: "Chikkaballapur",
    metaTitle: "Cake Delivery in Chikkaballapur | Nandi Hills Karnataka | RedHeart",
    metaDescription: "Order cakes online in Chikkaballapur. Same-day delivery across Chikkaballapur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chikkaballapur",
    metaKeyword: "cake delivery chikkaballapur, order cake online chikkaballapur, birthday cake chikkaballapur, custom cake chikkaballapur, same day cake delivery chikkaballapur nandi hills silk tomato grapes bangalore district",
    footerContent: `
<h2>Cake Delivery in Chikkaballapur — Nandi Hills' Sunrise Viewpoint, Bangalore's Silk-Tomato Hinterland, and Karnataka's Grapes District</h2>
<p>Chikkaballapur — the headquarters of Chikkaballapur district in Karnataka (part of the Bangalore Rural zone), a city whose identity is defined by proximity to Bangalore and by three distinct agricultural and geographical claims (the Nandi Hills — located 30 km from Chikkaballapur at an elevation of 1,478 metres — is one of Karnataka's most popular weekend destinations; the Tipu Sultan summer palace at Nandi Hills (Nandi Durg fort), the Bhoga Nandeeshwara temple at the foot of the hills, and the spectacular sunrise viewpoint at the hilltop draw thousands of Bangaloreans every weekend; the hills form the source of the Arkavathi and Palar rivers; a cycle rally to Nandi Hills has become a Bangalore tradition; Nandi Hills is one of South India's most popular sunrise viewpoints); the tomato capital of Karnataka (Chikkaballapur and Kolar districts together produce the majority of Karnataka's tomatoes; price crashes in the tomato market are national news because of how much Chikkaballapur produces; tomato is the district's most important cash crop); and Chikkaballapur's growing grapes cultivation (inspired by Kolar's success, Chikkaballapur has expanded its grapes acreage in the Bagepalli and Gudibande taluks) — is a district of hill tourism and agricultural importance. From birthday parties near the Nandi Hills tourist area to corporate cakes at the large tomato processing units, from anniversary surprises in the Civil Lines area to student cakes at Chikkaballapur's colleges — RedHeart covers all Chikkaballapur zones: Central (Civil Lines, Station Road, Bangalore Road), North (Nandi Hills Road, Bagepalli, Gauribidanur), South (Bangalore border, Devanahalli, Doddaballapur), East (Andhra border, Gudibande, Kamasamudram), West (Tumkur Road, Sira border).</p>
<p>Our Chikkaballapur cake range: Chocolate, Black Forest, Red Velvet, Grape (Chikkaballapur fresh grapes!), Tomato-Cream (local fun hook!), Photo Cakes, Fondant Nandi Hills / Sunrise-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chikkaballapur, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Bangalore Road, Nandi Hills Road, Bagepalli, Gauribidanur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nandi Hills Fondant, Grape, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chikkaballapur?", answer: "Yes, same-day cake delivery is available across all Chikkaballapur areas — Civil Lines, Station Road, Bangalore Road, and Bagepalli — for orders placed before 3 PM." },
      { question: "Do you have Nandi Hills-themed cakes in Chikkaballapur?", answer: "Yes! Nandi Hills — Karnataka's most iconic sunrise viewpoint, Tipu Sultan's summer fortress at 1,478 metres, drawing thousands of cyclists and trekkers from Bangalore every weekend — inspires our Nandi Hills fondant cakes." },
      { question: "Are eggless cakes available in Chikkaballapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Grape — are available in eggless variants for Chikkaballapur delivery." }
    ]
  },

  "jagtial": {
    cityName: "Jagtial",
    metaTitle: "Cake Delivery in Jagtial | Kondagattu Hanuman Telangana | RedHeart",
    metaDescription: "Order cakes online in Jagtial. Same-day delivery across Jagtial. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jagtial",
    metaKeyword: "cake delivery jagtial, order cake online jagtial, birthday cake jagtial, custom cake jagtial, same day cake delivery jagtial kondagattu hanuman temple karimnagar road nizamabad road godavari",
    footerContent: `
<h2>Cake Delivery in Jagtial — Kondagattu Hanuman's Sacred Hill, Godavari Canal District, and Telangana's Northern Agricultural Belt</h2>
<p>Jagtial — the headquarters of Jagtial district in Telangana (carved out of Karimnagar in 2016), a city of religious and agricultural significance (Jagtial district is home to the Kondagattu Anjaneya Swami temple — one of Telangana's most visited Hanuman temples; the Kondagattu Hanuman temple, perched on a hilltop in the forest, is said to fulfil the wishes of devotees; the temple draws hundreds of thousands of pilgrims, especially on Saturdays and during Hanuman Jayanti; the hill is covered with ancient trees and the journey up the hill on foot is itself a spiritual experience for many devotees), located in the Godavari canal belt (Jagtial benefits from the Sriram Sagar Project's (Pochampad dam) canal network — the Sriram Sagar canals irrigate lakhs of acres of paddy, cotton, and redgram fields in Jagtial; the Godavari river basin agriculture of Jagtial makes it one of Telangana's important paddy-producing districts), known for the Jagtial Qila (a 16th-century fort in the town centre built by the Qutb Shahi dynasty, with remains of bastions and a gateway), and a district with significant paddy and cotton cultivation — is a city of sacred hills and agricultural richness. From birthday parties near the Kondagattu route to corporate cakes at the large paddy mills, from anniversary surprises in the Civil Lines area to student cakes at Jagtial's colleges — RedHeart covers all Jagtial zones: Central (Civil Lines, Station Road, Karimnagar Road), North (Nizamabad Road, Metpally, Koratla), South (Karimnagar border, Mallapur, Raikal), East (Mancherial border, Kataram, Dharmapuri Telangana), West (Nizamabad border, Dharmapuri, Bheemgal).</p>
<p>Our Jagtial cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Kondagattu Hanuman / Qutb Shahi Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagtial, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Karimnagar Road, Nizamabad Road, Metpally, Koratla</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kondagattu Hanuman Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jagtial?", answer: "Yes, same-day cake delivery is available across all Jagtial areas — Civil Lines, Station Road, Karimnagar Road, Metpally, and Koratla — for orders placed before 3 PM." },
      { question: "Do you have Kondagattu Hanuman temple-themed cakes in Jagtial?", answer: "Yes! The Kondagattu Anjaneya Swami temple — Telangana's most beloved Hanuman hilltop shrine, drawing lakhs of pilgrims with its wish-fulfilling reputation — inspires our Kondagattu Hanuman fondant cakes." },
      { question: "Are eggless cakes available in Jagtial?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jagtial delivery." }
    ]
  },

  "mancherial": {
    cityName: "Mancherial",
    metaTitle: "Cake Delivery in Mancherial | Godavari Coal Mining Telangana | RedHeart",
    metaDescription: "Order cakes online in Mancherial. Same-day delivery across Mancherial. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mancherial",
    metaKeyword: "cake delivery mancherial, order cake online mancherial, birthday cake mancherial, custom cake mancherial, same day cake delivery mancherial godavari coal sirpur kagaznagar paper mill dandeli",
    footerContent: `
<h2>Cake Delivery in Mancherial — Godavari River Valley, Sirpur-Kagaznagar Paper Mill, and Telangana's Northeastern Mining District</h2>
<p>Mancherial — the headquarters of Mancherial district in Telangana (carved out of Adilabad and Karimnagar in 2016), a city of industrial and natural significance (Mancherial district has significant coal mining activity — the Singareni Collieries Company Limited (SCCL) operates coal mines in the Mancherial-Bellampalli belt; the Godavari River flows through Mancherial district, and the coal-bearing rock formations of the Godavari Valley Coalfield are among India's most important; the Mancherial-Bellampalli coal belt has been producing coal since the 1870s and is a critical fuel source for Telangana's power plants; additionally, Mancherial district is home to the ITC Ltd paper mill at Sirpur-Kagaznagar (Kagaznagar means "Paper Town" — the town was named after the paper factory; the ITC paper mill uses bamboo from the surrounding forests as raw material and is one of India's largest paper mills)), known for the Godavari's scenic beauty in this stretch (the river passes through forested gorges in Mancherial's Asifabad area, and the Kawal Tiger Reserve borders Mancherial's north), and a district at Telangana's border with Maharashtra's Chandrapur and Gadchiroli districts — is a city of coal, paper, and forest wilderness. From birthday parties in the Civil Lines area to corporate cakes at the SCCL townships, from anniversary surprises near the Sirpur-Kagaznagar area to student cakes at Mancherial's colleges — RedHeart covers all Mancherial zones: Central (Civil Lines, Station Road, Karimnagar Road), North (Asifabad Road, Bellampalli, Kagaznagar), South (Karimnagar border, Luxettipet, Jaipur), East (Nirmal border, Hajipur, Lokeswaram), West (Maharashtra border, Asifabad, Khanapur).</p>
<p>Our Mancherial cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Godavari Valley / Kawal Tiger-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mancherial, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Karimnagar Road, Bellampalli, Kagaznagar, Luxettipet</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Godavari Valley Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mancherial?", answer: "Yes, same-day cake delivery is available across all Mancherial areas — Civil Lines, Station Road, Bellampalli, and Kagaznagar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mancherial?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mancherial delivery." },
      { question: "Do you deliver midnight cakes in Mancherial?", answer: "Yes, midnight birthday cake delivery is available across Mancherial's central and residential zones." }
    ]
  },

  "suryapet": {
    cityName: "Suryapet",
    metaTitle: "Cake Delivery in Suryapet | Krishna River Telangana | RedHeart",
    metaDescription: "Order cakes online in Suryapet. Same-day delivery across Suryapet. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Suryapet",
    metaKeyword: "cake delivery suryapet, order cake online suryapet, birthday cake suryapet, custom cake suryapet, same day cake delivery suryapet krishna river nalgonda road hyderabad road huzurnagar kodad",
    footerContent: `
<h2>Cake Delivery in Suryapet — Krishna River Valley, Paleru Reservoir, and Telangana's Emerging New District Capital</h2>
<p>Suryapet — the headquarters of Suryapet district in Telangana (a new district created in 2016 from Nalgonda), a city gaining significance as a newly elevated district headquarters (Suryapet was formerly part of Nalgonda district; gaining district status in 2016 has brought new government offices, infrastructure development, and commercial activity to the city; Suryapet is on the Hyderabad-Vijayawada National Highway 65, a key transport artery between the two Telugu-speaking states' major cities; the Suryapet town is growing rapidly as a commercial centre for the surrounding agricultural hinterland), the gateway to the Krishna River belt (the Suryapet district borders the Krishna River; the Nagarjunasagar Dam's backwaters extend into parts of the Suryapet area; the Huzurnagar segment of the district has significant Krishna River frontage; the Paleru reservoir supplies irrigation to parts of the Suryapet district), known for cotton, chilli, and rice cultivation (the Krishna and Musi river basins in Suryapet support significant agriculture), and a city with steady industrial growth (several medium industries including rice mills, cotton gins, and food processing units operate in the Suryapet-Kodad industrial area) — is a city of highway connectivity and new administrative importance. From birthday parties in the Civil Lines area to corporate cakes at the large rice mills, from anniversary surprises near the Hyderabad Road to student cakes at Suryapet's colleges — RedHeart covers all Suryapet zones: Central (Civil Lines, Hyderabad Road, Nalgonda Road), North (Hyderabad border, Huzurnagar, Nereducherla), South (Vijayawada Road, Kodad, Mothkur), East (Miryalaguda border, Tirumalgiri), West (Nalgonda border, Thirumalagiri).</p>
<p>Our Suryapet cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Krishna River / Nagarjunasagar-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Suryapet, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Hyderabad Road, Nalgonda Road, Huzurnagar, Kodad, Mothkur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Suryapet?", answer: "Yes, same-day cake delivery is available across all Suryapet areas — Civil Lines, Hyderabad Road, Nalgonda Road, Huzurnagar, and Kodad — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Suryapet?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Suryapet delivery." },
      { question: "Do you deliver midnight cakes in Suryapet?", answer: "Yes, midnight birthday cake delivery is available across Suryapet's central and residential zones." }
    ]
  },

  "maharajganj": {
    cityName: "Maharajganj",
    metaTitle: "Cake Delivery in Maharajganj | Nepal Border Buddha Circuit UP | RedHeart",
    metaDescription: "Order cakes online in Maharajganj. Same-day delivery across Maharajganj. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Maharajganj",
    metaKeyword: "cake delivery maharajganj, order cake online maharajganj, birthday cake maharajganj, custom cake maharajganj, same day cake delivery maharajganj nepal border lumbini kushinagar gorakhpur road shravasti",
    footerContent: `
<h2>Cake Delivery in Maharajganj — Nepal Border District, Lumbini Gateway, and Buddha Circuit's Northern Frontier</h2>
<p>Maharajganj — the headquarters of Maharajganj district in Uttar Pradesh's eastern Terai (bordering Nepal's Rupandehi district), a district of profound Buddhist significance and Nepal connectivity (Lumbini — the birthplace of Lord Gautama Buddha — is located just 30 km across the Nepal border in Rupandehi district; the Sonauli-Belahiya border crossing between Maharajganj and Nepal is one of the most important India-Nepal border crossings for Buddhist pilgrims; thousands of Buddhist pilgrims from India's Bihar, UP, and other states cross into Nepal via Maharajganj's Sonauli border to visit Lumbini, the most sacred Buddhist site in the world; the Maharajganj district thus occupies a crucial position on India's Buddha Circuit; Valmiki Tiger Reserve is accessible from the Maharajganj-West Champaran border area), a district of Terai forests and agricultural land (the Terai's fertile soil supports rice, wheat, sugarcane, and banana cultivation; the Rapti River flows through Maharajganj), and historically connected to the Gorakhpur-Kushinagar Buddhist tourism corridor — is a city of Nepal border significance and Buddha Circuit connection. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from anniversary surprises near the Sonauli Road area to student cakes at Maharajganj's colleges — RedHeart covers all Maharajganj zones: Central (Civil Lines, Station Road, Gorakhpur Road), North (Sonauli border, Nepal crossing, Nautanwa), South (Gorakhpur border, Siswa, Pharenda), East (Kushinagar border, Nichlaul), West (Siddharthnagar border, Anpara, Ghughuli).</p>
<p>Our Maharajganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Lumbini Buddha / Nepal border-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Maharajganj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gorakhpur Road, Sonauli (Nepal border), Nautanwa, Siswa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Lumbini Buddha Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Maharajganj?", answer: "Yes, same-day cake delivery is available across all Maharajganj areas — Civil Lines, Station Road, Gorakhpur Road, and Nautanwa — for orders placed before 3 PM." },
      { question: "Do you have Lumbini / Buddha Circuit-themed cakes in Maharajganj?", answer: "Yes! Lumbini — Lord Buddha's birthplace, just 30 km across Nepal's border from Maharajganj — and the sacred Buddha Circuit inspire our Lumbini fondant cakes. The world's most sacred Buddhist site reflected on your birthday cake." },
      { question: "Are eggless cakes available in Maharajganj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Maharajganj delivery." }
    ]
  },

  "siddharthnagar": {
    cityName: "Siddharthnagar",
    metaTitle: "Cake Delivery in Siddharthnagar | Kapilvastu Buddha UP | RedHeart",
    metaDescription: "Order cakes online in Siddharthnagar. Same-day delivery across Siddharthnagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Siddharthnagar",
    metaKeyword: "cake delivery siddharthnagar naugarh, order cake online siddharthnagar, birthday cake siddharthnagar, custom cake siddharthnagar, same day cake delivery siddharthnagar kapilvastu gautam buddha naugarh gorakhpur road",
    footerContent: `
<h2>Cake Delivery in Siddharthnagar — Kapilvastu's Royal Capital, Siddharth's Birthplace District, and Buddha Circuit's Heart</h2>
<p>Siddharthnagar — the headquarters of Siddharthnagar district in Uttar Pradesh (the district HQ is Naugarh, though the district is named for Siddharth — the birth name of Lord Buddha), a district whose very name honours the world's most important figure in Buddhist history (Siddharthnagar is named for Siddhartha Gautama — the historical Buddha — who was born as Prince Siddhartha in the ancient Kapilavastu kingdom; the ancient Kapilavastu — the royal capital of the Shakya clan where Siddhartha grew up before renouncing the world — is located in Siddharthnagar district; the Piprahwa excavation site in Siddharthnagar has yielded some of the most important Buddhist relics ever discovered in India — the Piprahwa stupa, excavated in 1898, contained an inscribed casket that many scholars believe held the actual cremated remains of Lord Buddha; the casket is now in the Indian Museum in Kolkata; Siddharthnagar is thus one of the most important Buddhist heritage districts in India), close to Nepal's Kapilvastu district (just across the border — the Nepal-side Kapilvastu has the Tilaurakot archaeological site, believed by many to be the ancient Kapilavastu palace), and a district in the Ghaghara plains with rice and sugarcane agriculture — is a district of supreme Buddhist heritage. From birthday parties in the Naugarh Civil Lines area to corporate cakes at the large sugar mills, from Buddha Purnima celebration cakes to anniversary surprises near the Gorakhpur Road — RedHeart covers all Siddharthnagar zones: Naugarh (HQ), Domariyaganj, Shohratgarh, Bansi, Itwa, Birdpur.</p>
<p>Our Siddharthnagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kapilavastu / Prince Siddhartha-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siddharthnagar (Naugarh), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Naugarh, Domariyaganj, Shohratgarh, Bansi, Itwa, Birdpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kapilavastu Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Siddharthnagar / Naugarh?", answer: "Yes, same-day cake delivery is available across all Siddharthnagar areas — Naugarh, Domariyaganj, Shohratgarh, and Bansi — for orders placed before 3 PM." },
      { question: "Do you have Kapilavastu / Lord Buddha-themed cakes in Siddharthnagar?", answer: "Yes! Siddharthnagar is the ancient Kapilavastu district — where Prince Siddhartha Gautama grew up before renouncing the world and becoming the Buddha; the Piprahwa Buddhist relics and stupa are here — inspiring our Kapilavastu fondant cakes." },
      { question: "Are eggless cakes available in Siddharthnagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Siddharthnagar delivery." }
    ]
  },

  "shravasti": {
    cityName: "Shravasti",
    metaTitle: "Cake Delivery in Shravasti | Jetavana Ananda Bodhi UP | RedHeart",
    metaDescription: "Order cakes online in Shravasti. Same-day delivery across Shravasti. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Shravasti",
    metaKeyword: "cake delivery shravasti, order cake online shravasti, birthday cake shravasti, custom cake shravasti, same day cake delivery shravasti jetavana ananda bodhi tree buddha balrampur road nepali border lucknow road",
    footerContent: `
<h2>Cake Delivery in Shravasti — Lord Buddha's Jetavana Monastery, Ananda Bodhi Tree, and India's Oldest Buddhist Pilgrimage City</h2>
<p>Shravasti — the headquarters of Shravasti district in Uttar Pradesh's Terai (also spelled Sravasti), one of India's oldest cities and one of Buddhism's most sacred places (ancient Shravasti was one of the six largest cities of ancient India — a major capital of the Kosala Kingdom; it is where Lord Buddha spent the largest part of his teaching career — 25 out of the 45 years of his monastic life were spent at the Jetavana Monastery in Shravasti, making Shravasti second only to Bodh Gaya in Buddhist significance; the Jetavana Monastery ruins — where the Buddha resided and taught — are among Buddhist archaeology's most important sites; the Ananda Bodhi Tree at the Jetavana site is said to be a direct offspring of the Bodhi Tree at Bodh Gaya under which the Buddha attained enlightenment; the Mahet/Shravasti archaeological site has extensive ruins of the ancient city including the Sahet site (Jetavana) and the Mahet site (the city itself); the Buddha performed the famous "Twin Miracle" at Shravasti; Japanese, Chinese, Thai, Sri Lankan, and Burmese Buddhist temples/monasteries have been built in Shravasti), a district bordering Nepal (the Nepal border is 30 km north), and a district named after the ancient city — is a city of supreme Buddhist pilgrimage significance. From birthday parties near the Jetavana pilgrimage zone to corporate cakes at the monasteries, from Buddha Purnima celebration cakes to anniversary surprises near the Balrampur Road — RedHeart covers all Shravasti zones: Shravasti/Bhinga town (HQ), Ikauna, Sirsiya, Hariharpur Rani, Nepal border area.</p>
<p>Our Shravasti cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Jetavana / Ananda Bodhi Tree-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shravasti (Bhinga), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shravasti town (Jetavana), Bhinga, Ikauna, Sirsiya, Hariharpur Rani</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jetavana Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Shravasti?", answer: "Yes, same-day cake delivery is available across all Shravasti areas — Shravasti town, Bhinga, Ikauna, and Sirsiya — for orders placed before 3 PM." },
      { question: "Do you have Jetavana Monastery / Ananda Bodhi Tree-themed cakes in Shravasti?", answer: "Yes! The Jetavana Monastery — where Lord Buddha spent 25 years of teaching, the site of the sacred Ananda Bodhi Tree, and one of Buddhism's most significant archaeological sites — inspires our Jetavana fondant cakes." },
      { question: "Are eggless cakes available in Shravasti?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Shravasti delivery." }
    ]
  },

  "banka": {
    cityName: "Banka",
    metaTitle: "Cake Delivery in Banka | Mandara Hill Bihar | RedHeart",
    metaDescription: "Order cakes online in Banka. Same-day delivery across Banka. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Banka",
    metaKeyword: "cake delivery banka, order cake online banka, birthday cake banka, custom cake banka, same day cake delivery banka mandara hill samudra manthan silk weaving bhagalpur road jharkhand border",
    footerContent: `
<h2>Cake Delivery in Banka — Mandara Hill's Samudra Manthan Legend, Bhagalpur Silk Belt, and Jharkhand Border District</h2>
<p>Banka — the headquarters of Banka district in Bihar (close to Bhagalpur, on the Jharkhand border), a district of mythological and cultural significance (Mandara Hill — located in Banka district — is one of Hinduism's most mythologically significant hills: according to the Puranas, Mandara was the mountain that was used as a churning rod during the Samudra Manthan (the mythological churning of the cosmic ocean by the Devas and Asuras) — the mountain was placed on the back of the tortoise (Kurma avatar of Vishnu) and wrapped with the serpent Vasuki to churn the ocean; the Mandara hill has a natural imprint shaped like a tortoise (Kurma) on its surface, which devotees consider evidence of this mythological event; the Madheswarnath temple (a Shiva temple) at the base of Mandara Hill is a major pilgrimage centre drawing large crowds during Shivratri; the hill also has Jain temples with ancient carvings; the Mandara fair is held annually); part of the Bhagalpur silk belt (the famous Bhagalpuri Tussar silk, woven on handlooms from Antheraea silk moth cocoons, is produced in the Banka-Bhagalpur belt; Banka district has significant Tussar silk weaving artisan communities), and bordering Jharkhand's Giridih and Deoghar districts (Deoghar's Baidyanath Jyotirlinga is accessible via Banka) — is a city of mythological mountains and silk artistry. From birthday parties in the Civil Lines area to corporate cakes at the large silk weaving cooperatives, from Shivratri celebration cakes to anniversary surprises near the Bhagalpur Road — RedHeart covers all Banka zones: Central (Civil Lines, Station Road, Bhagalpur Road), North (Munger border, Katoria, Rajoun), South (Jharkhand border, Amarpur, Bounsi), East (Bhagalpur border, Belhar, Chandan), West (Jamui border, Barahat, Dhoraiya).</p>
<p>Our Banka cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Mandara Hill / Samudra Manthan-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banka, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Bhagalpur Road, Katoria, Amarpur, Belhar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mandara Hill Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Banka?", answer: "Yes, same-day cake delivery is available across all Banka areas — Civil Lines, Station Road, Bhagalpur Road, Katoria, and Amarpur — for orders placed before 3 PM." },
      { question: "Do you have Mandara Hill / Samudra Manthan-themed cakes in Banka?", answer: "Yes! Banka's Mandara Hill — the legendary mountain used as a churning rod in the Samudra Manthan (the cosmic ocean churning by gods and demons) in Hindu mythology, with a natural tortoise-shaped rock proving the Kurma avatar legend — inspires our Mandara Hill fondant cakes." },
      { question: "Are eggless cakes available in Banka?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Banka delivery." }
    ]
  },

  "nalanda": {
    cityName: "Nalanda",
    metaTitle: "Cake Delivery in Nalanda | Ancient University UNESCO Bihar | RedHeart",
    metaDescription: "Order cakes online in Nalanda. Same-day delivery across Nalanda. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nalanda",
    metaKeyword: "cake delivery nalanda, order cake online nalanda, birthday cake nalanda, custom cake nalanda, same day cake delivery nalanda ancient university UNESCO Biharsharif Rajgir Pawapuri Bihar Sharif",
    footerContent: `
<h2>Cake Delivery in Nalanda — World's First Residential University, Rajgir's Hot Springs, and Bihar's UNESCO Heritage District</h2>
<p>Nalanda — the headquarters of Nalanda district in Bihar (the district HQ is Bihar Sharif, while the famous archaeological site is Nalanda village), one of the world's most historically significant educational sites (the Nalanda Mahavihara — a UNESCO World Heritage Site — was the world's first residential university, operating from the 5th to the 12th century CE; at its peak, Nalanda had 10,000 students, 2,000 teachers, a 9-storey library (destroyed by Bakhtiyar Khilji's troops in 1193 CE), and scholars from China, Japan, Korea, Tibet, Indonesia, Persia, and Greece studying Buddhism, philosophy, grammar, medicine, logic, and mathematics; the Chinese monk Xuanzang (Hiuen Tsang) studied at Nalanda for 5 years in the 7th century CE and wrote a detailed account of its glory; the Nalanda ruins and its museum draw thousands of scholars and tourists; the new Nalanda University (re-established in 2014) has been built nearby), home to Rajgir (Lord Buddha and Lord Mahavira both spent significant time at Rajgir; the Griddhakuta hill has the Buddha's Vulture Peak; the hot springs of Rajgir are sacred; the Japanese Peace Pagoda is a prominent landmark; the New Nalanda International Convention Centre is here; Rajgir's forest hills — Ratnagiri, Vaibhargiri, Saptaparni cave — are all Buddhist and Jain heritage sites), and the location of Pawapuri (where Lord Mahavira attained nirvana; the Jal Mandir — a beautiful Jain temple on a lotus pond — is one of Jainism's most sacred sites) — is a district of unparalleled ancient educational and spiritual heritage. From birthday parties in the Bihar Sharif Civil Lines to corporate cakes at the new Nalanda University, from anniversary surprises near the Rajgir area to student cakes at Nalanda's colleges — RedHeart covers all Nalanda zones: Bihar Sharif, Nalanda archaeological site, Rajgir, Pawapuri, Hilsa, Islampur.</p>
<p>Our Nalanda cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Nalanda University / Rajgir Hot Springs-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalanda (Bihar Sharif), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bihar Sharif, Nalanda site, Rajgir, Pawapuri, Hilsa, Islampur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nalanda University Fondant, Rajgir Springs, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nalanda / Bihar Sharif?", answer: "Yes, same-day cake delivery is available across Nalanda district — Bihar Sharif, Nalanda site, Rajgir, Pawapuri, and Hilsa — for orders placed before 3 PM." },
      { question: "Do you have Nalanda University / Rajgir-themed cakes in Nalanda?", answer: "Yes! The Nalanda Mahavihara — the UNESCO-listed world's first residential university (5th–12th century CE), where 10,000 scholars once studied — and Rajgir's sacred Buddhist hills inspire our Nalanda University fondant cakes." },
      { question: "Are eggless cakes available in Nalanda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nalanda delivery." }
    ]
  },

  "churachandpur": {
    cityName: "Churachandpur",
    metaTitle: "Cake Delivery in Churachandpur | Kuki-Chin Tribal Manipur | RedHeart",
    metaDescription: "Order cakes online in Churachandpur. Same-day delivery across Churachandpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Churachandpur",
    metaKeyword: "cake delivery churachandpur, order cake online churachandpur, birthday cake churachandpur, custom cake churachandpur, same day cake delivery churachandpur kuki chin zo tribal manipur imphal road myanmar border",
    footerContent: `
<h2>Cake Delivery in Churachandpur — Manipur's Largest Hill District, Kuki-Zo-Chin Tribal Heartland, and Myanmar Border City</h2>
<p>Churachandpur — the headquarters of Churachandpur district in Manipur (commonly called "CCpur" by locals), Manipur's largest district by area and one of Northeast India's most important tribal cultural centres (Churachandpur is the heartland of the Kuki, Zomi, and Chin-Kuki tribal communities — collectively known as the Zo people, who straddle the India-Myanmar-Bangladesh border; the Zo people speak Tibeto-Burman languages, are predominantly Christian (the majority Catholic/Protestant), and have distinctive folk music, weaving, and dance traditions; the Zo Reunification Organization (ZRO) is a significant cultural body in Churachandpur; Churachandpur's ethnic composition is predominantly tribal — Hmar, Kom, Mizo (Mara), Paite, Thadou-Kuki, Vaiphei, and other tribal communities; the district has a significant number of Presbyterian and Baptist churches; the Churachandpur-Champhai road is part of the India-Myanmar Trilateral Highway; traditional Kuki shawls, the Puan cloth worn by Mizo women, and the festival of Christmas are especially vibrant in CCpur), and a city that tragically experienced significant conflict in the 2023 Manipur ethnic clashes — requiring communal healing and economic recovery — is a city of tribal cultural richness and community resilience. From birthday parties in the Civil Lines area to corporate cakes at the government offices, from Christmas celebration cakes to anniversary surprises in the Mission Road area — RedHeart covers all Churachandpur zones: Central (Civil Lines, Mission Road, Imphal Road), North (Imphal border, Bishnupur Road, Saikot), South (Myanmar border, Singhat, Tipaimukh), East (Chandel border, Henglep), West (Mizoram border, Thanlon, Tuibong).</p>
<p>Our Churachandpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Zo/Kuki tribal weave / Christmas celebration-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churachandpur, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Mission Road, Imphal Road, Singhat, Thanlon, Tuibong</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Christmas Fondant, Zo Tribal Weave, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Churachandpur?", answer: "Yes, same-day cake delivery is available across all Churachandpur areas — Civil Lines, Mission Road, and Imphal Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Churachandpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Churachandpur delivery." },
      { question: "Do you deliver midnight cakes in Churachandpur?", answer: "Yes, midnight birthday cake delivery is available across Churachandpur's central and residential zones." }
    ]
  },

  "pasighat": {
    cityName: "Pasighat",
    metaTitle: "Cake Delivery in Pasighat | Siang River Arunachal Pradesh | RedHeart",
    metaDescription: "Order cakes online in Pasighat. Same-day delivery across Pasighat. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pasighat",
    metaKeyword: "cake delivery pasighat, order cake online pasighat, birthday cake pasighat, custom cake pasighat, same day cake delivery pasighat siang brahmaputra adi tribal arunachal east siang dibrugarh",
    footerContent: `
<h2>Cake Delivery in Pasighat — Arunachal's Oldest Town, Siang River's Entry Point, and Adi Tribal Culture Capital</h2>
<p>Pasighat — the headquarters of East Siang district in Arunachal Pradesh, the oldest town in Arunachal Pradesh (established by the British administration in 1911, Pasighat is the oldest planned settlement in Arunachal Pradesh; it served as the entry point for British colonial administration into the Northeast Frontier Agency (NEFA), which later became Arunachal Pradesh), a city of extraordinary natural drama (Pasighat is located where the mighty Tsangpo-Brahmaputra — called Siang in Arunachal, having emerged from the Tsangpo gorge in Tibet and broken through the Himalayan ranges — enters the plains; the Siang River flows through spectacular gorges above Pasighat and becomes the Brahmaputra as it reaches the Assam plains; Pasighat's location on the east bank of the Siang, with the forested hills of Arunachal rising steeply behind it and Assam's plains visible across the river, creates one of Northeast India's most dramatic natural landscapes; Pasighat is a base for river rafting on the Siang — one of India's premier white-water rafting destinations), the heartland of the Adi tribal community (the Adi/Adivasi people of East Siang are the majority community; the Adi language, the Ponung dance of Adi women, the Mithun (Bos frontalis) cattle that are sacred in Adi culture and used in festivals, and the bamboo and cane craft are characteristic of Adi culture; the Adi community was involved in the famous Payeng-Paillot affair with the British in the early 20th century), and a city with Assam railway connectivity (Simaluguri and Dibrugarh are the nearest railway stations, 100 km away) — is a city of Himalayan river drama and tribal heritage. From birthday parties in the Civil Lines area to corporate cakes at the government offices, from anniversary surprises near the Siang riverfront to student cakes at Pasighat's colleges — RedHeart covers all Pasighat zones: Civil Lines, Siang River Road, Dibrugarh Road, Namsai Road, Mebo, Ruksin.</p>
<p>Our Pasighat cake range: Chocolate, Black Forest, Red Velvet, Mango (Arunachal hill varieties!), Butterscotch, Photo Cakes, Fondant Siang River / Adi tribal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pasighat, Arunachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Siang River Road, Dibrugarh Road, Namsai Road, Mebo, Ruksin</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Siang River Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pasighat?", answer: "Yes, same-day cake delivery is available across all Pasighat areas — Civil Lines, Siang River Road, Dibrugarh Road, and Mebo — for orders placed before 3 PM." },
      { question: "Do you have Siang River / Adi tribal-themed cakes in Pasighat?", answer: "Yes! The mighty Siang River — the Tsangpo-Brahmaputra emerging from the Himalayan gorges in a spectacular entry into the plains at Pasighat — and the rich Adi tribal culture of East Siang inspire our Siang River fondant cakes." },
      { question: "Are eggless cakes available in Pasighat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pasighat delivery." }
    ]
  },

  "bundi": {
    cityName: "Bundi",
    metaTitle: "Cake Delivery in Bundi | Taragarh Fort Step Wells Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Bundi. Same-day delivery across Bundi. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bundi",
    metaKeyword: "cake delivery bundi, order cake online bundi, birthday cake bundi, custom cake bundi, same day cake delivery bundi taragarh fort step wells baoris kota road chittorgarh road hadoti painting blue city",
    footerContent: `
<h2>Cake Delivery in Bundi — Taragarh's Starfort, India's Most Beautiful Step Wells, and Rajasthan's Hidden Blue City</h2>
<p>Bundi — the headquarters of Bundi district in Rajasthan's Hadoti region, one of Rajasthan's most atmospheric and underrated heritage cities (Bundi is often called the "Hidden Gem of Rajasthan" — less crowded than Jaipur or Udaipur but arguably more atmospheric and authentic; the Taragarh Fort — "Star Fort" — perched dramatically on a steep hill above the city, with its 5-km circumference wall, ancient tanks, and monkey-inhabited ruins, is one of Rajasthan's most dramatic medieval forts; Kipling called Bundi one of the world's most romantic places; the Garh Palace inside Taragarh contains extraordinary Bundi-school miniature paintings (Bundi Painting is a distinct Rajput miniature painting school noted for its blue-green palette, hunting scenes, and landscape backgrounds — it is one of Rajasthani painting's most distinctive regional schools); Bundi's step wells (Baoris) are among India's most beautiful — the Raniji ki Baori (Queen's Step Well) is a 46-metre-deep 17th-century step well with hundreds of carved panels; there are 60 step wells in the district making it India's "Step Well City"; the city's blue-painted houses in the old town give it an atmosphere similar to Jodhpur's Blue City; Bundi Bazar is known for its silver jewellery, hand-painted furniture, and traditional Rajput crafts) — is a city of hidden heritage magnificence. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Taragarh Fort area to student cakes at Bundi's colleges — RedHeart covers all Bundi zones: Central (Civil Lines, Station Road, Kota Road), North (Kota Road, Keshoraipatan, Bundi Bazar), South (Kota border, Hindoli, Talera), East (Kota border, Indergarh, Lakheri), West (Chittorgarh Road, Nainwa, Bonli).</p>
<p>Our Bundi cake range: Chocolate, Black Forest, Red Velvet, Mango (Rajasthan Kesar!), Butterscotch, Photo Cakes, Fondant Taragarh Fort / Raniji ki Baori Step Well-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bundi, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Kota Road, Bundi Bazar, Nainwa, Keshoraipatan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Taragarh Fort Fondant, Step Well Baori Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bundi?", answer: "Yes, same-day cake delivery is available across all Bundi areas — Civil Lines, Station Road, Kota Road, and Bundi Bazar — for orders placed before 3 PM." },
      { question: "Do you have Taragarh Fort / Step Wells-themed cakes in Bundi?", answer: "Yes! Bundi's atmospheric Taragarh Star Fort — Kipling's 'most romantic place' — and the stunning Raniji ki Baori step well (one of India's most beautiful ancient step wells among Bundi's 60 baoris) inspire our Taragarh fondant cakes." },
      { question: "Are eggless cakes available in Bundi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bundi delivery." }
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
