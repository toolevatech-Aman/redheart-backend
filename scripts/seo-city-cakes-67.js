// Cakes Batch 67 — 12 cities
// Gujarat: Devbhumi Dwarka, Gir Forest (Junagadh adjacent), Aravalli, Mahisagar
// UP: Mirzapur, Chandauli, Sant Kabir Nagar, Kushinagar (check)
// Bihar: Supaul, Madhepura
// Rajasthan: Pratapgarh (RJ), Chittorgarh (check)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "devbhumi-dwarka": {
    cityName: "Devbhumi Dwarka",
    metaTitle: "Cake Delivery in Devbhumi Dwarka | Gujarat Dwarkadhish Okha Beyt Dwarka Krishna | RedHeart",
    metaDescription: "Order cakes online in Devbhumi Dwarka. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Devbhumi Dwarka",
    metaKeyword: "cake delivery devbhumi dwarka, order cake online dwarka, birthday cake dwarka, custom cake devbhumi dwarka, same day cake delivery Devbhumi Dwarka Gujarat Dwarkadhish temple Okha Beyt Dwarka Krishna pilgrimage Char Dham",
    footerContent: `
<h2>Cake Delivery in Devbhumi Dwarka — Dwarkadhish Char Dham Temple, Beyt Dwarka, and Lord Krishna's Kingdom</h2>
<p>Devbhumi Dwarka — the district headquarters of Devbhumi Dwarka district in Gujarat (Saurashtra; Arabian Sea coast; one of India's four Char Dhams), one of India's holiest pilgrimage destinations and the legendary kingdom of Lord Krishna (the Dwarkadhish Temple / Char Dham (Dwarka — one of the four Char Dhams (the four most sacred Hindu pilgrimage sites — Badrinath, Puri, Rameshwaram, Dwarka); the Dwarkadhish Temple (also called the Jagat Mandir) is a 5-storey Chalukya-style temple dedicated to Lord Krishna / Dwarkadhish (King of Dwarka); it is said to stand on the original site of Krishna's palace; the temple has a 78.3 m high spire (shikhara) with a large flag; the temple is administered by the Shankaracharya of Dwaraka Sharada Peetha; Dwarka is called Mokshapuri — one of the seven sacred cities of India (Sapta Puri) where dying brings liberation); the Beyt Dwarka (Beyt Dwarka / Bet Dwarka — an island accessible by ferry from Okha; believed to be the actual residence of Krishna; the Beyt Dwarka temple and Shankhodhar; one of Dwarka's most sacred spots); the Okha Port (Okha — on the northern tip of the Saurashtra peninsula; an important port; near Okha is the ONGC offshore platform); the Nageshwar Jyotirlinga (Nageshwar — one of the 12 Jyotirlingas — near Dwarka / Gopi Talav area; a significant Shiva pilgrimage site near Devbhumi Dwarka), and a city of Dwarkadhish Char-Dham Krishna-kingdom and Nageshwar-Jyotirlinga — is Gujarat's most Dwarkadhish-Char-Dham-Sapta-Puri and Nageshwar-Jyotirlinga Devbhumi Dwarka. From birthday parties in Dwarka to celebration cakes — RedHeart covers all areas: Dwarka city, Okha, Beyt Dwarka, Khambhalia, Bhanvad, Kalyanpur.</p>
<p>Our Devbhumi Dwarka cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Devbhumi Dwarka, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dwarka city, Okha, Beyt Dwarka, Khambhalia, Bhanvad, Kalyanpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Devbhumi Dwarka?", answer: "Yes, same-day cake delivery is available across Dwarka city, Okha, Khambhalia, and Bhanvad for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dwarka?", answer: "Yes, all flavours are available in eggless variants for Devbhumi Dwarka delivery." },
      { question: "Do you deliver midnight cakes in Dwarka?", answer: "Yes, midnight birthday cake delivery is available across Dwarka city zones." }
    ]
  },

  "aravalli": {
    cityName: "Aravalli",
    metaTitle: "Cake Delivery in Aravalli | Gujarat Modasa Sabarkantha Shamlaji Temple Meshwo River | RedHeart",
    metaDescription: "Order cakes online in Aravalli (Modasa). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Aravalli (Modasa)",
    metaKeyword: "cake delivery aravalli modasa, order cake online aravalli, birthday cake aravalli modasa, custom cake aravalli, same day cake delivery Aravalli Modasa Gujarat Shamlaji Mandir Meshwo River Sabarkantha tribal hills",
    footerContent: `
<h2>Cake Delivery in Aravalli (Modasa) — Shamlaji Temple (Vishnu on Meshwo), Aravalli Hills, and North Gujarat Tribal Zone</h2>
<p>Aravalli — the district headquarters of Aravalli district in Gujarat (northeastern Gujarat; Aravalli Hills; carved from Sabarkantha district in 2013; Meshwo River), a district named after the Aravalli mountain range and notable for its major Hindu pilgrimage temple (the Shamlaji Temple / Gabhana (Shamlaji — in Aravalli district on the Meshwo River; the Shamlaji Temple is dedicated to Lord Shamlaji — a form of Lord Vishnu; it is one of Gujarat's most visited pilgrimage sites; the Shamlaji Mela — held during Kartik Purnima — draws lakhs of pilgrims from across Gujarat and Rajasthan; the temple is in the Aravalli foothill zone; the Meshwo River flows past the temple; the ancient site has terracotta figures and artifacts from the early medieval period; the Gabhana area near Shamlaji has a significant tribal Bhil community); the Aravalli Hill range (the Aravalli Range — the world's oldest fold mountain range (approximately 2.5 billion years old) — passes through this district; the Aravalli hills in Gujarat are a tribal area home to the Bhil community; the hills have forests of teak and bamboo); the Modasa town (Modasa — the district headquarters; a market town for northern Gujarat's agricultural zone; cotton and castor are key crops); the Sabarkantha proximity (Aravalli was carved from Sabarkantha; the Sabarkantha-Aravalli region has significant tribal presence), and a city of Shamlaji-Vishnu Kartik-Purnima lakhs-pilgrims and Aravalli-world's-oldest-mountain — is Gujarat's most Shamlaji-Vishnu-Kartik-Purnima and Aravalli-world's-oldest-fold-mountain Aravalli. From birthday parties in Aravalli to celebration cakes — RedHeart covers all areas: Modasa city, Shamlaji, Dhansura, Meghraj, Bayad, Malpur.</p>
<p>Our Aravalli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aravalli (Modasa), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Modasa city, Shamlaji, Dhansura, Meghraj, Bayad, Malpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Aravalli (Modasa)?", answer: "Yes, same-day cake delivery is available across Modasa, Shamlaji, Dhansura, Meghraj, Bayad, and Malpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Aravalli?", answer: "Yes, all flavours are available in eggless variants for Aravalli delivery." },
      { question: "Do you deliver midnight cakes in Modasa?", answer: "Yes, midnight birthday cake delivery is available across Modasa city zones." }
    ]
  },

  "mahisagar": {
    cityName: "Mahisagar",
    metaTitle: "Cake Delivery in Mahisagar | Gujarat Lunawada Kadana Dam Mahisagar River Tribal | RedHeart",
    metaDescription: "Order cakes online in Mahisagar (Lunawada). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mahisagar (Lunawada)",
    metaKeyword: "cake delivery mahisagar lunawada, order cake online mahisagar, birthday cake lunawada, custom cake mahisagar, same day cake delivery Mahisagar Lunawada Gujarat Kadana Dam Mahisagar River tribal Bhil Santhal",
    footerContent: `
<h2>Cake Delivery in Mahisagar (Lunawada) — Kadana Dam, Mahisagar River, and Gujarat's Tribal Heartland</h2>
<p>Mahisagar — the district headquarters of Mahisagar district in Gujarat (central Gujarat; carved from Panchmahals and Kheda districts in 2013; Mahisagar River; tribal zone), a newly created district centred on the Mahisagar River and Kadana Dam (the Kadana Dam (Kadana Dam — on the Mahisagar River; in Mahisagar district; one of Gujarat's major dams; the Kadana reservoir provides irrigation water to a large area of central Gujarat; the dam and reservoir are key water sources; the Kadana hydroelectric project generates power; the Kadana area is in the Aravalli-foothills tribal zone; the reservoir submerged some tribal villages displacing the communities); the Mahisagar River (the Mahisagar — a westward-flowing river; joins the Gulf of Khambhat; the Mahisagar River basin is the boundary between Panchmahals, Kheda, and Mahisagar districts); the tribal population (Mahisagar has a significant Bhil and Rathwa tribal population; the tribal communities are farmers and forest workers; traditional Pithora paintings — a traditional mural form of the Rathwa tribe (similar to the Baiga Pithora of CG) — are found in tribal villages of Mahisagar-Panchmahals; the Rathwa Pithora art is an Intangible Cultural Heritage of India); the Lunawada town (Lunawada — the district headquarters of Mahisagar; the Lunawada royal palace; a market town for the Mahisagar basin), and a city of Kadana Dam Mahisagar River and Rathwa Pithora tribal art — is Gujarat's most Kadana-Dam-Mahisagar-irrigation and Rathwa-Pithora-tribal Mahisagar. From birthday parties in Mahisagar to celebration cakes — RedHeart covers all areas: Lunawada city, Kadana, Santrampur, Khanpur (GJ), Virpur, Balasinor.</p>
<p>Our Mahisagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahisagar (Lunawada), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lunawada city, Kadana, Santrampur, Khanpur (GJ), Balasinor</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mahisagar (Lunawada)?", answer: "Yes, same-day cake delivery is available across Lunawada, Kadana, Santrampur, and Khanpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mahisagar?", answer: "Yes, all flavours are available in eggless variants for Mahisagar delivery." },
      { question: "Do you deliver midnight cakes in Lunawada?", answer: "Yes, midnight birthday cake delivery is available across Lunawada city zones." }
    ]
  },

  "mirzapur": {
    cityName: "Mirzapur",
    metaTitle: "Cake Delivery in Mirzapur | UP Vindhyachal Carpet Ganga Chunar Fort | RedHeart",
    metaDescription: "Order cakes online in Mirzapur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mirzapur",
    metaKeyword: "cake delivery mirzapur, order cake online mirzapur, birthday cake mirzapur, custom cake mirzapur, same day cake delivery Mirzapur UP Vindhyachal Shaktipeetha Ganga carpet industry Chunar Fort sandstone Kashi adjacent",
    footerContent: `
<h2>Cake Delivery in Mirzapur — Vindhyachal Shaktipeetha, Ganga Ghats, Carpet Industry, and Chunar Sandstone Fort</h2>
<p>Mirzapur — the district headquarters of Mirzapur district in Uttar Pradesh (eastern UP; Vindhya Ranges; Ganga River), a city where the Vindhya hills meet the Ganga, creating a sacred and commercially significant zone (the Vindhyachal Shaktipeetha (Vindhyachal — 8 km from Mirzapur; one of India's 51 Shakti Peethas; the Vindhyavasini Devi temple; the goddess Vindhyavasini (form of Durga) is believed to be self-manifested (Swayambhu); Navratri at Vindhyachal draws crores of devotees; the Vindhyachal temple is on the Vindhya hill near the Ganga — the Prachya Khanda (Vindhyachal Kshetra) is one of the most important pilgrimage zones of UP; the Kali Khoh temple and Ashtabhuja temple complete the Vindhyachal Trikona Yatra); the Ganga Ghats and Chunar Fort (the Ganga flows along Mirzapur; the Mirzapur Ganga ghats have religious significance; the Chunar Fort — on the Ganga near Mirzapur — is a historic fort on a sandstone bluff; the Chunar red sandstone was used in the construction of Red Fort, Agra Fort, Fatehpur Sikri, and Akbar's tomb; the Chunar fort was held by Sher Shah Suri who imprisoned Humayun here); the Carpet Industry (Mirzapur-Bhadohi carpet cluster — one of the world's largest carpet manufacturing zones; hand-knotted wool and silk carpets; the GI-protected Bhadohi carpet; Mirzapur is part of this carpet belt producing rugs for global export), and a city of Vindhyachal Shaktipeetha crores-pilgrims and Chunar-sandstone-Red-Fort-Agra-Fort carpet-industry — is UP's most Vindhyachal-Shaktipeetha-51-Peethas and Chunar-sandstone-Red-Fort Mirzapur. From birthday parties in Mirzapur to celebration cakes — RedHeart covers all areas: Mirzapur city, Vindhyachal, Chunar, Lalganj (Mirzapur), Marihan, Ahraura.</p>
<p>Our Mirzapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mirzapur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mirzapur city, Vindhyachal, Chunar, Lalganj, Marihan, Ahraura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mirzapur?", answer: "Yes, same-day cake delivery is available across Mirzapur city, Vindhyachal, Chunar, Lalganj, and Marihan for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mirzapur?", answer: "Yes, all flavours are available in eggless variants for Mirzapur delivery." },
      { question: "Do you deliver midnight cakes in Mirzapur?", answer: "Yes, midnight birthday cake delivery is available across Mirzapur city zones." }
    ]
  },

  "chandauli": {
    cityName: "Chandauli",
    metaTitle: "Cake Delivery in Chandauli | UP Chauri Chaura Ganga Shaktipeetha Varanasi Border | RedHeart",
    metaDescription: "Order cakes online in Chandauli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chandauli",
    metaKeyword: "cake delivery chandauli, order cake online chandauli, birthday cake chandauli, custom cake chandauli, same day cake delivery Chandauli UP Chauri Chaura Ganga Varanasi border Rajdari Devdari waterfalls Mughal Sarai Pandit Deendayal Upadhyaya Junction",
    footerContent: `
<h2>Cake Delivery in Chandauli — Rajdari-Devdari Waterfalls, Mughal Sarai / DDU Junction, and Varanasi Adjacent</h2>
<p>Chandauli — the district headquarters of Chandauli district in Uttar Pradesh (eastern UP; Ganga River; Varanasi-adjacent; Vindhya Hills), a district combining natural beauty with railway history and Varanasi's cultural shadow (the Rajdari-Devdari Waterfalls (Rajdari Waterfall and Devdari Waterfall — in the Chandauli forest area (Chandauli district's Vindhya forest zone); the waterfalls are set in a forested gorge; Rajdari Falls drops approximately 28 metres; the area is a popular day-trip from Varanasi; the Chandrapesha Wildlife Sanctuary area); the Pandit Deendayal Upadhyaya Junction (DDU Junction) / Mughal Sarai (Pandit Deendayal Upadhyaya Junction (formerly Mughal Sarai Junction) — in Chandauli district; one of India's busiest railway junctions; the junction handles thousands of trains per day; renamed from Mughal Sarai to Pandit Deendayal Upadhyaya in 2018; the DDU Junction is the gateway to Varanasi and connects eastern UP to the rest of India; the DDU railway workshop is one of India's major loco workshops); the Varanasi Adjacency (Chandauli district borders Varanasi on the east; the Chandauli Ganga ghats are extensions of the Varanasi pilgrimage zone; the Chandauli area is part of the Kashi-Chunar cultural corridor), and a city of DDU Junction railway-hub Mughal-Sarai and Rajdari-Devdari waterfalls — is UP's most DDU-Junction-Mughal-Sarai-railway-hub and Rajdari-Devdari-waterfalls Chandauli. From birthday parties in Chandauli to celebration cakes — RedHeart covers all areas: Chandauli city, Mughal Sarai / DDU Junction, Chahaniya, Sakaldiha, Naubatpur, Chakia.</p>
<p>Our Chandauli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandauli, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandauli city, DDU Junction (Mughal Sarai), Chahaniya, Sakaldiha, Chakia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chandauli?", answer: "Yes, same-day cake delivery is available across Chandauli city, DDU Junction (Mughal Sarai), Chahaniya, Sakaldiha, and Chakia for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chandauli?", answer: "Yes, all flavours are available in eggless variants for Chandauli delivery." },
      { question: "Do you deliver midnight cakes in Chandauli / Mughal Sarai?", answer: "Yes, midnight birthday cake delivery is available across Chandauli city and DDU Junction zones." }
    ]
  },

  "sant-kabir-nagar": {
    cityName: "Sant Kabir Nagar",
    metaTitle: "Cake Delivery in Sant Kabir Nagar | UP Kabir Maghar Swami Ramanand Saryu | RedHeart",
    metaDescription: "Order cakes online in Sant Kabir Nagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sant Kabir Nagar",
    metaKeyword: "cake delivery sant kabir nagar, order cake online sant kabir nagar, birthday cake sant kabir nagar, custom cake sant kabir nagar, same day cake delivery Sant Kabir Nagar UP Kabir Das Maghar death place Saryu River Khalilabad",
    footerContent: `
<h2>Cake Delivery in Sant Kabir Nagar — Maghar (Kabir Das's Samadhi), Saryu River, and Eastern UP's Spiritual Heritage</h2>
<p>Sant Kabir Nagar — the district headquarters of Sant Kabir Nagar district in Uttar Pradesh (eastern UP; Saryu River; Gorakhpur adjacent), a district named in honour of the great medieval saint-poet Kabir Das, who spent his final years and attained samadhi here (the Kabir Das Samadhi at Maghar (Maghar — in Sant Kabir Nagar district; approximately 20 km from Khalilabad; the place where Kabir Das (c. 1398-1518 CE) died; Kabir Das — one of India's greatest saint-poets and mystics — is revered by both Hindus and Muslims; he died at Maghar rather than Varanasi — deliberately challenging the Brahminic belief that dying at Varanasi (Kashi) grants liberation while dying at Maghar leads to a donkey's rebirth; Kabir said truth and devotion matter more than place of death; after Kabir's death, a legend says his body transformed into flowers — which were divided between Hindus (who built a samadhi) and Muslims (who built a dargah); both the Kabir Samadhi (Hindu) and Kabir Mazar (Muslim) exist at Maghar — a unique example of composite devotion; the Maghar Kabir Mela; the Sant Kabir Academy); the Khalilabad town (Khalilabad — the district headquarters of Sant Kabir Nagar; a commercial town); the Saryu River (the Saryu / Ghaghra flows near the district; the sacred Saryu on whose banks Ayodhya stands), and a city of Kabir Das Maghar samadhi-dargah both-Hindu-Muslim and Saryu — is UP's most Maghar-Kabir-Das-Hindu-Muslim-composite and Saryu-River Sant Kabir Nagar. From birthday parties in Sant Kabir Nagar to celebration cakes — RedHeart covers all areas: Khalilabad (district HQ), Maghar, Mehdawal, Hainsar Bazar, Baghauli, Santha.</p>
<p>Our Sant Kabir Nagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sant Kabir Nagar (Khalilabad), UP</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khalilabad, Maghar, Mehdawal, Hainsar Bazar, Baghauli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sant Kabir Nagar?", answer: "Yes, same-day cake delivery is available across Khalilabad, Maghar, Mehdawal, and Hainsar Bazar for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sant Kabir Nagar?", answer: "Yes, all flavours are available in eggless variants for Sant Kabir Nagar delivery." },
      { question: "Do you deliver midnight cakes in Sant Kabir Nagar?", answer: "Yes, midnight birthday cake delivery is available across Khalilabad and Maghar zones." }
    ]
  },

  "kushinagar": {
    cityName: "Kushinagar",
    metaTitle: "Cake Delivery in Kushinagar | UP Buddha's Parinirvana Buddhist Pilgrimage Padrauna | RedHeart",
    metaDescription: "Order cakes online in Kushinagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kushinagar",
    metaKeyword: "cake delivery kushinagar, order cake online kushinagar, birthday cake kushinagar, custom cake kushinagar, same day cake delivery Kushinagar UP Buddha Parinirvana Mahaparinirvana Temple Buddhist circuit Padrauna Gandak",
    footerContent: `
<h2>Cake Delivery in Kushinagar — Buddha's Parinirvana (Mahaparinirvana Temple), Buddhist Circuit, and Gandak Plains</h2>
<p>Kushinagar — the district headquarters of Kushinagar district in Uttar Pradesh (eastern UP; Gandak River; Nepal border-adjacent), one of Buddhism's most sacred sites — where the Buddha attained Parinirvana (the Mahaparinirvana Temple / Buddha's Parinirvana (Kushinagar (Kushavati / Kushinara in ancient texts) — the site where Gautama Buddha attained Mahaparinirvana (died / achieved final liberation) around 480-400 BCE; the Mahaparinirvana Temple — in Kushinagar — houses a 6.1-metre-long recumbent (lying) statue of Buddha in the Parinirvana posture (on his right side); the statue dates to the 5th century CE (Gupta period); the Ramabhar Stupa — where Buddha was cremated; Kushinagar is part of the Buddhist Circuit / Pancha Tirtha with Lumbini (birth), Bodh Gaya (enlightenment), Sarnath (first sermon), Kushinagar (death), and Rajgir; the Kushinagar Buddhist sites are ASI-protected; international Buddhist monasteries from Japan, Thailand, China, South Korea, Sri Lanka are present in Kushinagar; the Kushinagar International Airport was inaugurated 2021 facilitating pilgrim access); the Gandak River (the Gandak — a major Ganga tributary — flows near Kushinagar; the Gandak comes from Nepal (Narayani River); the Gandak plains are fertile and cultivate paddy and wheat), and a city of Buddha Parinirvana Mahaparinirvana Temple 480-BCE and Buddhist-Circuit-Pancha-Tirtha — is UP's most Kushinagar-Buddha-Parinirvana-Mahaparinirvana-Temple and Buddhist-Circuit-Gandak Kushinagar. From birthday parties in Kushinagar to celebration cakes — RedHeart covers all areas: Kushinagar city, Padrauna (district HQ), Kasia, Fazilnagar, Tamkuhi Raj, Dudahi.</p>
<p>Our Kushinagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kushinagar (Padrauna), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kushinagar city, Padrauna, Kasia, Fazilnagar, Tamkuhi Raj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kushinagar?", answer: "Yes, same-day cake delivery is available across Kushinagar city, Padrauna, Kasia, Fazilnagar, and Tamkuhi Raj for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kushinagar?", answer: "Yes, all flavours are available in eggless variants for Kushinagar delivery." },
      { question: "Do you deliver midnight cakes in Kushinagar?", answer: "Yes, midnight birthday cake delivery is available across Kushinagar city and Padrauna zones." }
    ]
  },

  "supaul": {
    cityName: "Supaul",
    metaTitle: "Cake Delivery in Supaul | Bihar Kosi River Floods Valmiki Ashram Nepal Border | RedHeart",
    metaDescription: "Order cakes online in Supaul. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Supaul",
    metaKeyword: "cake delivery supaul, order cake online supaul, birthday cake supaul, custom cake supaul, same day cake delivery Supaul Bihar Kosi River Sorrow of Bihar floods Nepal border Valmiki Ramayan Birpur barrage",
    footerContent: `
<h2>Cake Delivery in Supaul — Kosi River ("Sorrow of Bihar"), Birpur Barrage, and Nepal Border Terai Plains</h2>
<p>Supaul — the district headquarters of Supaul district in Bihar (northern Bihar; Kosi River; Nepal border), a district that lives with and alongside the famous "Sorrow of Bihar" — the Kosi River (the Kosi River / "Sorrow of Bihar" (the Kosi — one of the most flood-prone rivers in the world — has been called the "Sorrow of Bihar" because it changes its course frequently (it has shifted westward approximately 120 km over the last 250 years) and floods devastatingly every year; the Kosi flooded catastrophically in August 2008 — breaching embankments at Kusaha (Nepal) and inundating huge areas of Supaul, Saharsa, Madhepura, and Araria districts; the 2008 Kosi floods affected 3.3 million people; the Supaul district lies in the Kosi-Mahananda floodplain; the Birpur Barrage / Kosi Barrage — at Birpur in Supaul — is the main barrage on the Kosi, built in 1962 under the Indo-Nepal Kosi Treaty; the Kosi canal system from Birpur irrigates parts of Bihar and Nepal); the Nepal border (Supaul borders Nepal; the Nepal border crossing at Bhimnagar in Supaul; the Kosi emerges from Nepal into Supaul); the Valmiki Ramayan connection (the upper Kosi region — associated with the ashram of Sage Valmiki; Valmiki is traditionally said to have written the Ramayan on the banks of the Tamasa / Kosi region in this general area of Bihar-Nepal border), and a city of Kosi River Sorrow-of-Bihar 2008-floods Birpur-Barrage and Nepal-border — is Bihar's most Supaul-Kosi-Sorrow-of-Bihar and Birpur-Barrage-Indo-Nepal Supaul. From birthday parties in Supaul to celebration cakes — RedHeart covers all areas: Supaul city, Birpur, Triveniganj, Raghopur, Pratapganj, Kishanpur.</p>
<p>Our Supaul cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Supaul, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Supaul city, Birpur, Triveniganj, Raghopur, Pratapganj, Kishanpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Supaul?", answer: "Yes, same-day cake delivery is available across Supaul city, Birpur, Triveniganj, Raghopur, and Pratapganj for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Supaul?", answer: "Yes, all flavours are available in eggless variants for Supaul delivery." },
      { question: "Do you deliver midnight cakes in Supaul?", answer: "Yes, midnight birthday cake delivery is available across Supaul city zones." }
    ]
  },

  "madhepura": {
    cityName: "Madhepura",
    metaTitle: "Cake Delivery in Madhepura | Bihar Kosi Flood Plains Singheshwar Dham Shiva | RedHeart",
    metaDescription: "Order cakes online in Madhepura. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Madhepura",
    metaKeyword: "cake delivery madhepura, order cake online madhepura, birthday cake madhepura, custom cake madhepura, same day cake delivery Madhepura Bihar Kosi flood plains Singheshwar Dham Shiva Kosi Canal agricultural",
    footerContent: `
<h2>Cake Delivery in Madhepura — Singheshwar Dham (Ancient Shiva Temple), Kosi Flood Plains, and Bihar's Mithila Zone</h2>
<p>Madhepura — the district headquarters of Madhepura district in Bihar (northern Bihar; Kosi River; between Saharsa and Supaul), a district in the Mithila cultural zone with an ancient Shiva pilgrimage site (the Singheshwar Dham (Singheshwar Dham / Singheshwar Sthan — near Madhepura town; one of Bihar's celebrated Shiva temples; the Singheshwar temple is dedicated to Lord Shiva; the fair at Singheshwar Sthan during Mahasivaratri and Shravana draws lakhs of devotees from across Bihar-Nepal; the temple is believed to be ancient; the "Sinheshwar" or "Singheshwar" Shiva is a form of Shiva associated with this Mithila region; the Sivaratri Mela at Singheshwar is one of Bihar's major fairs); the Kosi River and flood plains (Madhepura lies in the Kosi-Mahananda doab — the land between the Kosi and its subsidiary channels; the Kosi floods regularly devastate Madhepura along with Supaul and Saharsa; the 2008 Kosi flood disaster severely affected Madhepura; the Kosi embankments were built to contain floods but breaches occur); the Mithila culture (Madhepura is in the Mithila cultural zone — the land of King Janaka, Sita, and the Maithili language; Madhubani / Mithila painting is part of this cultural zone), and a city of Singheshwar Dham Shiva Mahasivaratri-Mela and Kosi-flood-Mithila — is Bihar's most Singheshwar-Dham-Shiva-Mithila and Kosi-flood-plains Madhepura. From birthday parties in Madhepura to celebration cakes — RedHeart covers all areas: Madhepura city, Singheshwar, Murliganj, Alamnagar, Bihariganj, Shankarpur.</p>
<p>Our Madhepura cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhepura, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhepura city, Singheshwar, Murliganj, Alamnagar, Bihariganj, Shankarpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Madhepura?", answer: "Yes, same-day cake delivery is available across Madhepura city, Singheshwar, Murliganj, Alamnagar, and Bihariganj for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Madhepura?", answer: "Yes, all flavours are available in eggless variants for Madhepura delivery." },
      { question: "Do you deliver midnight cakes in Madhepura?", answer: "Yes, midnight birthday cake delivery is available across Madhepura city zones." }
    ]
  },

  "pratapgarh-rj": {
    cityName: "Pratapgarh",
    metaTitle: "Cake Delivery in Pratapgarh Rajasthan | Devgarh Maharawal Orange Capital Chambal | RedHeart",
    metaDescription: "Order cakes online in Pratapgarh, Rajasthan. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pratapgarh (Rajasthan)",
    metaKeyword: "cake delivery pratapgarh rajasthan, order cake online pratapgarh rj, birthday cake pratapgarh, custom cake pratapgarh rajasthan, same day cake delivery Pratapgarh Rajasthan Thikana Devgarh orange capital Chambal Jakham Dam tribal Bhil",
    footerContent: `
<h2>Cake Delivery in Pratapgarh (Rajasthan) — Devgarh, Chambal Headwaters, and Rajasthan's Orange Capital</h2>
<p>Pratapgarh — the district headquarters of Pratapgarh district in Rajasthan (southern Rajasthan; MP border; Chambal River headwaters; carved from Banswara, Udaipur, and Chittorgarh in 2008), Rajasthan's newest district — a tribal and agricultural zone (the Devgarh (Devgarh — a historic thikana / estate in Pratapgarh district; the Devgarh Mahal — a palace converted into a heritage hotel; Devgarh has a 17th-century CE palace and Jain temples; the Devgarh area has fine Rajput architecture; the Devgarh Reti — the heritage zone near Devgarh); Pratapgarh as Rajasthan's Orange Capital (Pratapgarh district is known as Rajasthan's "Orange Capital" — the area produces a significant quantity of oranges (mousambi / sweet lime) for Rajasthan; the climate in this tribal Mewar zone supports citrus cultivation; orange orchards are a distinctive feature of Pratapgarh's landscape); the Chambal River headwaters (the Chambal River originates in the Vindhya-Malwa divide in MP but the upper Chambal gorges are in the Pratapgarh-Chittorgarh area of Rajasthan; the Jakham Dam — on the Jakham River (a Mahi tributary) in Pratapgarh district — is a significant water body); the Bhil tribal population (Pratapgarh has a large Bhil tribal population — the Bhil are one of India's most numerous tribal groups; the Pratapgarh-Banswara-Dungarpur area is the Bhil heartland of Rajasthan; tribal fairs, haat bazaars, and Ghoomar dance), and a city of Devgarh heritage and Rajasthan's Orange Capital and Bhil tribal Chambal headwaters — is Rajasthan's most Pratapgarh-Orange-Capital and Devgarh-heritage-Bhil Pratapgarh. From birthday parties in Pratapgarh to celebration cakes — RedHeart covers all areas: Pratapgarh city, Arnod, Peepalkhunt, Chhoti Sadri, Dhariyawad, Ratlam Road.</p>
<p>Our Pratapgarh (RJ) cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh city, Arnod, Peepalkhunt, Chhoti Sadri, Dhariyawad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Orange Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pratapgarh (Rajasthan)?", answer: "Yes, same-day cake delivery is available across Pratapgarh city, Arnod, Peepalkhunt, Chhoti Sadri, and Dhariyawad for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Pratapgarh RJ?", answer: "Yes, all flavours are available in eggless variants for Pratapgarh (Rajasthan) delivery." },
      { question: "Do you deliver midnight cakes in Pratapgarh Rajasthan?", answer: "Yes, midnight birthday cake delivery is available across Pratapgarh city zones." }
    ]
  },

  "chittorgarh": {
    cityName: "Chittorgarh",
    metaTitle: "Cake Delivery in Chittorgarh | Rajasthan Chittor Fort UNESCO Padmini Rani Laxmibai | RedHeart",
    metaDescription: "Order cakes online in Chittorgarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chittorgarh",
    metaKeyword: "cake delivery chittorgarh, order cake online chittorgarh, birthday cake chittorgarh, custom cake chittorgarh, same day cake delivery Chittorgarh Rajasthan Chittor Fort UNESCO Padmini Jauhar Rana Kumbha Tower of Victory Mirabai",
    footerContent: `
<h2>Cake Delivery in Chittorgarh — Chittor Fort (UNESCO — Rajputana's Grandest), Three Jauhars, and Mirabai's Shrine</h2>
<p>Chittorgarh — the district headquarters of Chittorgarh district in Rajasthan (southern Rajasthan; Berach River; Mewar kingdom heart), home to India's most storied hilltop fort complex and the Rajput tradition of supreme sacrifice (the Chittor Fort / Chittorgarh Fort (Chittorgarh Fort — UNESCO World Heritage Site (inscribed 2013 as part of the "Hill Forts of Rajasthan"); the largest fort complex in India (approximately 280 hectares / 700 acres on a 180-metre-high hilltop); one of Rajputana's most glorious and tragic monuments; the fort is associated with three historic Jauhars (mass self-immolation by Rajput women to avoid capture by enemies): the First Jauhar (1303 CE) — Rani Padmini (Padmavati) during Alauddin Khilji's siege; the Second Jauhar (1535 CE) — Rani Karnavati during Humayun's siege; the Third Jauhar (1568 CE) — Maharani Patta during Akbar's siege; the Vijay Stambha (Tower of Victory, 1448 CE) — built by Rana Kumbha to commemorate his victory over Mahmud Khalji of Malwa; the Kirti Stambha (Tower of Fame — 12th century CE); the Rani Padmini Palace; the Kumbha Shyam Temple; the fort was the original capital of the Mewar kingdom; Mirabai — the famous Bhakti poet-saint devoted to Krishna — was a princess of the Mewar court at Chittorgarh; the Mirabai Temple at Chittorgarh)), and a city of Chittor Fort UNESCO-2013 Three-Jauhars-Padmini-Karnavati and Mirabai-Bhakti-Krishna — is Rajasthan's most Chittor-Fort-UNESCO-Three-Jauhars and Vijay-Stambha-Rana-Kumbha-Mirabai Chittorgarh. From birthday parties in Chittorgarh to celebration cakes — RedHeart covers all areas: Chittorgarh city, Nimbahera, Gangrar, Rashmi, Bari Sadri, Rawatbhata.</p>
<p>Our Chittorgarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chittorgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chittorgarh city, Nimbahera, Gangrar, Rashmi, Bari Sadri, Rawatbhata</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chittorgarh?", answer: "Yes, same-day cake delivery is available across Chittorgarh city, Nimbahera, Gangrar, Rashmi, Bari Sadri, and Rawatbhata for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chittorgarh?", answer: "Yes, all flavours are available in eggless variants for Chittorgarh delivery." },
      { question: "Do you deliver midnight cakes in Chittorgarh?", answer: "Yes, midnight birthday cake delivery is available across Chittorgarh city zones." }
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
