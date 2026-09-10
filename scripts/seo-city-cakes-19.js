// Cakes Batch 19 — 15 cities:
// Maharashtra: Beed, Osmanabad (Dharashiv), Nandurbar
// Karnataka: Bidar, Chikmagalur, Gadag
// UP: Banda, Pratapgarh
// Bihar: Supaul, Saharsa
// West Bengal: Krishnanagar (Nadia), Murshidabad
// Tamil Nadu: Dharmapuri, Namakkal
// Assam: Bongaigaon

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "beed": {
    cityName: "Beed",
    metaTitle: "Cake Delivery in Beed | Marathwada Sugar Belt | RedHeart",
    metaDescription: "Order cakes online in Beed. Same-day delivery across Beed. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Beed",
    metaKeyword: "cake delivery beed, order cake online beed, birthday cake beed, custom cake beed, same day cake delivery beed ambajogai kaij dharur sugar belt marathwada bid maharashtra",
    footerContent: `
<h2>Cake Delivery in Beed — Marathwada's Sugar Capital, Parli Vaijnath Jyotirlinga's District, and Maharashtra's Migrant Labour Hub</h2>
<p>Beed (Bid) — the headquarters of Beed district in Maharashtra's Marathwada region, one of Maharashtra's most complex agricultural-social districts (Beed has significant sugarcane cultivation and several cooperative sugar mills in the Ambajogai, Kaij, and Georai tehsils; paradoxically, Beed is also known as a significant migrant labour district — thousands of Beed families, especially women, migrate seasonally to sugar harvest in Western Maharashtra and Kolhapur; the "Beed model" of seasonal labour migration and the associated social welfare issues have drawn national policy attention), the district containing Parli Vaijnath (one of India's 12 Jyotirlingas — the Vaijnath temple at Parli, 100 km from Beed town, is a major Shiva pilgrimage centre drawing lakhs during Mahashivratri), and close to Ambajogai (home to Yogeshwari Devi temple — one of Maharashtra's major goddess shrines, and Swami Ramanand Teerth Marathwada University) — is a city of agricultural, religious, and labour significance. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from Mahashivratri celebration cakes (for Parli Vaijnath) to anniversary surprises near the Ambajogai Road — RedHeart covers all Beed zones: Central (Civil Lines, Station Road, Ambajogai Road), North (Aurangabad Road, Kaij, Wadwani), South (Latur Road, Osmanabad Road, Georai), East (Nanded Road, Osmanabad border), West (Ahmednagar Road, Majalgaon, Parli Road).</p>
<p>Our Beed cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Parli Vaijnath Jyotirlinga-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Beed, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Ambajogai Road, Aurangabad Road, Latur Road, Parli Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Parli Vaijnath Jyotirlinga Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Beed?", answer: "Yes, same-day cake delivery is available across all Beed areas — Civil Lines, Station Road, Ambajogai Road, and Aurangabad Road — for orders placed before 3 PM." },
      { question: "Do you have Parli Vaijnath Jyotirlinga-themed cakes in Beed?", answer: "Yes! Parli Vaijnath — one of India's 12 sacred Jyotirlingas, located 100 km from Beed in Parli — inspires our Vaijnath Jyotirlinga fondant cakes. A sacred design for Beed's devout Shiva devotee community." },
      { question: "Are eggless cakes available in Beed?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Beed delivery." }
    ]
  },

  "osmanabad": {
    cityName: "Osmanabad",
    metaTitle: "Cake Delivery in Osmanabad | Tuljapur Bhavani Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Osmanabad. Same-day delivery across Osmanabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Osmanabad",
    metaKeyword: "cake delivery osmanabad, order cake online osmanabad dharashiv, birthday cake osmanabad, custom cake osmanabad, same day cake delivery osmanabad tuljapur bhavani devi marathwada latur road",
    footerContent: `
<h2>Cake Delivery in Osmanabad — Tuljapur Bhavani's Sacred City, Marathwada's Soybean Belt, and Maharashtra's Ancient Dharashiv</h2>
<p>Osmanabad (recently renamed Dharashiv) — the headquarters of Osmanabad district in Maharashtra's Marathwada region, a city of religious and historical depth (Tuljapur — 20 km from Osmanabad — is one of Maharashtra's most sacred pilgrimage cities: the Tulja Bhavani Devi temple at Tuljapur is the Kuldevi (family goddess) of the Maratha community, of the Yadava dynasty, and — according to Shivaji Maharaj's family tradition — of Chhatrapati Shivaji's family; Bhavani Mata is said to have blessed Shivaji with a divine sword; Tuljapur draws 50 lakh pilgrims annually and is one of Maharashtra's 3.5 Shakti Peethas — the "ardhapeetha" or partial Shakti Peetha), the site of the ancient Dharashiv rock-cut caves (7th century CE Chalukya and Rashtrakuta era cave temples, carved into the basalt hills 3 km from the city — one of Maharashtra's less-known but architecturally significant cave temple complexes), and a district that lies between Marathwada's semi-arid plateau and the Karnataka border — is a city of Shakti Peetha significance. From birthday parties near the Tuljapur approach road to corporate cakes at the large soybean processing firms, from Navratri celebration cakes to anniversary surprises in the Civil Lines area — RedHeart covers all Osmanabad zones: Central (Civil Lines, Station Road, Tuljapur Road), North (Latur Road, Omerga Road, Bhum), South (Karnataka border, Gulbarga Road, Naldurg), East (Solapur Road, Akkalkot), West (Beed Road, Paranda, Dharashiv).</p>
<p>Our Osmanabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Tuljapur Bhavani / Dharashiv cave-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Osmanabad, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Tuljapur Road, Latur Road, Solapur Road, Naldurg</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tuljapur Bhavani Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Osmanabad?", answer: "Yes, same-day cake delivery is available across all Osmanabad areas — Civil Lines, Station Road, Tuljapur Road, and Latur Road — for orders placed before 3 PM." },
      { question: "Do you have Tuljapur Bhavani-themed cakes in Osmanabad?", answer: "Yes! Tulja Bhavani — Chhatrapati Shivaji's family goddess at Tuljapur, 20 km from Osmanabad, one of Maharashtra's most sacred Shakti shrines — inspires our Bhavani fondant cakes. A deeply devotional local design." },
      { question: "Are eggless cakes available in Osmanabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Osmanabad delivery." }
    ]
  },

  "nandurbar": {
    cityName: "Nandurbar",
    metaTitle: "Cake Delivery in Nandurbar | Tribal Sahyadri Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Nandurbar. Same-day delivery across Nandurbar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nandurbar",
    metaKeyword: "cake delivery nandurbar, order cake online nandurbar, birthday cake nandurbar, custom cake nandurbar, same day cake delivery nandurbar satpura toranmal dhadgaon shahada MP Gujarat border tribal",
    footerContent: `
<h2>Cake Delivery in Nandurbar — Maharashtra's Tribal Sahyadri Gateway, Toranmal Hill Station, and Satpura Range's Southern Foot</h2>
<p>Nandurbar — the headquarters of Nandurbar district in northwestern Maharashtra, one of Maharashtra's most tribal-significant districts (Nandurbar district has one of Maharashtra's highest Scheduled Tribe populations — the Bhil, Pavra, and Koli communities form the majority; Nandurbar is part of Maharashtra's tribal belt that connects to Madhya Pradesh's and Gujarat's tribal areas; the district receives special development funding as one of Maharashtra's Aspirational Districts; tribal crafts, forest produce, and the Dhangri, Ghodemodi, and Tarpa dance traditions are culturally significant), home to Toranmal (a beautiful hill station at 1,100 metres in the Satpura range — one of Maharashtra's lesser-known but beautiful hill destinations, with forests, a small lake, and pleasant climate; popular for weekend trips from Surat, Dhule, and Nashik), located at the tri-state junction of Maharashtra, Madhya Pradesh, and Gujarat (the Tapi River flows through the district, and Nandurbar is a gateway to MP's tribal Alirajpur-Jhabua and Gujarat's Dahod districts), and known for Shahada's cotton production (Shahada tehsil in Nandurbar is a significant cotton market) — is a city of tribal culture and three-state connectivity. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Shahada Road to student cakes at Nandurbar's colleges — RedHeart covers all Nandurbar zones: Central (Civil Lines, Station Road, Dhule Road), North (MP Border, Akrani, Toranmal Road), South (Dhule Road, Shahada Road, Navapur), East (Jalgaon Road, Shirpur), West (Gujarat Border, Dhadgaon, Taloda).</p>
<p>Our Nandurbar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Toranmal Hill / Bhil tribal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nandurbar, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Dhule Road, Toranmal Road, Shahada Road, Dhadgaon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Toranmal Hill Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nandurbar?", answer: "Yes, same-day cake delivery is available across all Nandurbar areas — Civil Lines, Station Road, Dhule Road, and Shahada Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nandurbar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nandurbar delivery." },
      { question: "Do you deliver midnight cakes in Nandurbar?", answer: "Yes, midnight birthday cake delivery is available across Nandurbar's central and residential zones." }
    ]
  },

  "bidar": {
    cityName: "Bidar",
    metaTitle: "Cake Delivery in Bidar | Bidriware Silver Karnataka | RedHeart",
    metaDescription: "Order cakes online in Bidar. Same-day delivery across Bidar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bidar",
    metaKeyword: "cake delivery bidar, order cake online bidar, birthday cake bidar, custom cake bidar, same day cake delivery bidar fort bidriware silver craft bahmani sultanate gulbarga road hyderabad road",
    footerContent: `
<h2>Cake Delivery in Bidar — Bahmani Sultanate's Former Capital, Bidriware's GI-Tagged Silver City, and Karnataka's Northern Heritage Hub</h2>
<p>Bidar — the headquarters of Bidar district in northernmost Karnataka (bordering Telangana and Maharashtra), one of India's most historically layered medieval cities (Bidar was the capital of the Bahmani Sultanate — one of medieval India's most powerful Muslim kingdoms, which ruled the Deccan from 1347 to 1527 CE; the Bidar Fort is a massive 15th-century basalt fortress with 37 towers, a 16 km moat, and magnificent gateway architecture — one of Karnataka's most impressive medieval monuments; the Bahmani Tombs of Ashtur just outside Bidar — 12 royal mausoleums of Bahmani sultans in the Persian-Deccan style — are among India's most atmospheric medieval monuments; the Bidar Madrasa/Mahmud Gawan Madrasa is a masterpiece of 15th-century Persian architecture with intricate tilework), famous for Bidriware (the GI-tagged metalcraft of inlaying silver into blackened zinc-copper alloy — Bidriware has been produced in Bidar since the 14th century Bahmani period; Bidar's master craftsmen create bidriware flower vases, hookahs, jewellery boxes, and wall panels that are sold across the world), and a city of significant Sikh heritage (Nanak Jhira Gurudwara — the Gurudwara commemorating Guru Nanak Dev Ji's miraculous water appearance in a drought — is one of Karnataka's most important Gurudwaras, drawing Sikh pilgrims year-round). From birthday parties in the Civil Lines area to corporate cakes at the large educational institutions, from anniversary surprises near the Bidar Fort belt to student cakes at the colleges — RedHeart covers all Bidar zones: Central (Civil Lines, Fort Road, Gulbarga Road), North (Hyderabad Road, Telangana border), South (Gulbarga Road, Humnabad, Basavakalyan), East (Osmanabad Road, Bidar-Telangana border), West (Aurad Road, Bhalki, Maharashtra border).</p>
<p>Our Bidar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bidriware / Bidar Fort Bahmani-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bidar, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Fort Road, Gulbarga Road, Hyderabad Road, Humnabad, Basavakalyan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bidriware Bahmani Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bidar?", answer: "Yes, same-day cake delivery is available across all Bidar areas — Civil Lines, Fort Road, Gulbarga Road, and Hyderabad Road — for orders placed before 3 PM." },
      { question: "Do you have Bidriware / Bidar Fort-themed cakes in Bidar?", answer: "Yes! Bidar's world-famous GI-tagged Bidriware — the silver-inlaid zinc craft perfected over 700 years since the Bahmani Sultanate — and the magnificent Bidar Fort inspire our Bidriware fondant cakes." },
      { question: "Are eggless cakes available in Bidar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bidar delivery." }
    ]
  },

  "chikmagalur": {
    cityName: "Chikmagalur",
    metaTitle: "Cake Delivery in Chikmagalur | Coffee City Karnataka | RedHeart",
    metaDescription: "Order cakes online in Chikmagalur. Same-day delivery across Chikmagalur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chikmagalur",
    metaKeyword: "cake delivery chikmagalur, order cake online chikmagalur, birthday cake chikmagalur, custom cake chikmagalur, same day cake delivery chikmagalur coffee mullayanagiri bababudan hills estate resort",
    footerContent: `
<h2>Cake Delivery in Chikmagalur — India's Coffee Capital, Mullayanagiri's Trekking Summit, and Western Ghats' Heritage District</h2>
<p>Chikmagalur — the headquarters of Chikmagalur district in the Western Ghats region of Karnataka, India's coffee capital (Chikmagalur is where coffee was first planted in India — according to tradition, the Sufi saint Baba Budan brought seven coffee beans from Yemen in the 17th century and planted them on the Bababudan Hills near Chikmagalur; the Chikmagalur-Coorg (Kodagu) coffee belt produces the majority of India's Arabica and Robusta coffee; the Bababudan Giri hills have the oldest coffee estates in India; Chikmagalur coffee estates — 1,200 metres above sea level in the misty Western Ghats — produce internationally prized specialty coffees; the district attracts coffee tourists year-round), home to Mullayanagiri (Karnataka's highest peak at 1,930 metres — a popular trekking destination in the Bababudan range with panoramic views of the Deccan plateau and the Western Ghats), and a destination of extraordinary natural beauty (dense shola forests, stunning waterfalls including the Hebbe Falls, Kemmangundi hill station, and the Bhadra Wildlife Sanctuary) — is Karnataka's most naturally gifted district. From birthday parties in the coffee estate tourist zones to corporate cakes at the large coffee processing companies, from anniversary surprises near the Seethalayanagiri coffee estates to student cakes at Chikmagalur's colleges — RedHeart covers all Chikmagalur zones: Central (Civil Lines, Station Road, Coffee Estate Road), North (Shimoga Road, Kadur, Birur), South (Hassan Road, Sakleshpur, Mudigere), East (Birur Road, Tarikere, Ajjampura), West (Mangalore Road, Moodigere, Sringeri).</p>
<p>Our Chikmagalur cake range: Chocolate, Black Forest, Red Velvet, Coffee Mocha (Chikmagalur specialty coffee!), Apple (Western Ghats!), Photo Cakes, Fondant Mullayanagiri / Coffee Estate-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chikmagalur, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Coffee Estate Road, Shimoga Road, Hassan Road, Moodigere</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coffee Mocha, Chocolate, Mullayanagiri Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chikmagalur?", answer: "Yes, same-day cake delivery is available across all Chikmagalur areas — Civil Lines, Station Road, Coffee Estate Road, and Shimoga Road — for orders placed before 3 PM." },
      { question: "Do you have Coffee Mocha cakes in Chikmagalur?", answer: "Yes! Chikmagalur's world-famous specialty coffee — India's coffee was born here in the Bababudan Hills, planted by the saint Baba Budan in the 17th century — inspires our Coffee Mocha cake. Rich, aromatic, locally inspired." },
      { question: "Are eggless cakes available in Chikmagalur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coffee Mocha — are available in eggless variants for Chikmagalur delivery." }
    ]
  },

  "gadag": {
    cityName: "Gadag",
    metaTitle: "Cake Delivery in Gadag | Twin City Betageri Karnataka | RedHeart",
    metaDescription: "Order cakes online in Gadag. Same-day delivery across Gadag. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gadag",
    metaKeyword: "cake delivery gadag, order cake online gadag, birthday cake gadag, custom cake gadag, same day cake delivery gadag betageri trikuteshwar temple cotton wheat north karnataka bagalkot road dharwad road",
    footerContent: `
<h2>Cake Delivery in Gadag — Gadag-Betageri Twin Cities, Trikuteshwar Temple Heritage, and North Karnataka's Cotton Crossroads</h2>
<p>Gadag-Betageri — the twin cities forming the headquarters of Gadag district in northern Karnataka, an important religious and commercial city (Gadag's Trikuteshwar temple — a 12th-century Chalukyan masterpiece — is one of Karnataka's finest examples of Hoysala-Chalukya temple architecture; the Someshwara, Veeranarayana, and other temples in Gadag's temple complex are remarkable for their sculptural richness; the 12th-century Veeranarayana temple at Gadag has Karnataka's largest shikhara in the Dravida style), a major cotton and sunflower market for north Karnataka (Gadag district lies at the heart of the Karnataka-Maharashtra dryland cotton-sunflower belt; the Gadag Mandi is one of the region's busiest agricultural commodity markets), and a city on the rail crossroads (Gadag Junction is a major rail junction connecting Bangalore-Hubli-Mumbai routes with the Hosapete-Hampi-Bellary line) — is a city of ancient temple heritage and agricultural commerce. From birthday parties in the Civil Lines area to corporate cakes at the large cotton trading firms, from anniversary surprises near the Trikuteshwar temple to student cakes at the colleges — RedHeart covers all Gadag zones: Central (Civil Lines, Station Road, Betageri, Temple Road), North (Dharwad Road, Ron Road, Naragund), South (Bagalkot Road, Mundargi, Gadag-Bijapur highway), East (Koppal Road, Gangavati Road), West (Hubli Road, Dharwad border).</p>
<p>Our Gadag cake range: Chocolate, Black Forest, Red Velvet, Mango (North Karnataka Safeda!), Butterscotch, Photo Cakes, Fondant Trikuteshwar Chalukya-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gadag, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Betageri, Temple Road, Dharwad Road, Bagalkot Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Trikuteshwar Chalukya Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gadag?", answer: "Yes, same-day cake delivery is available across all Gadag areas — Civil Lines, Station Road, Betageri, and Dharwad Road — for orders placed before 3 PM." },
      { question: "Do you have Trikuteshwar Temple / Chalukya heritage-themed cakes in Gadag?", answer: "Yes! Gadag's magnificent 12th-century Trikuteshwar temple complex — one of Karnataka's finest examples of Chalukyan-Hoysala temple art — inspires our Chalukya heritage fondant cakes." },
      { question: "Are eggless cakes available in Gadag?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gadag delivery." }
    ]
  },

  "banda": {
    cityName: "Banda",
    metaTitle: "Cake Delivery in Banda | Bundelkhand UP | RedHeart",
    metaDescription: "Order cakes online in Banda. Same-day delivery across Banda. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Banda",
    metaKeyword: "cake delivery banda, order cake online banda, birthday cake banda, custom cake banda, same day cake delivery banda bundelkhand civil lines ken river shaheed chowk prayagraj road",
    footerContent: `
<h2>Cake Delivery in Banda — Bundelkhand's Ken River City, Kalinjar Fort's Historical Capital, and UP's Stone-Quarry Belt</h2>
<p>Banda — the headquarters of Banda district in Uttar Pradesh's Bundelkhand region, a city of remarkable historical and geological significance (Kalinjar Fort — 100 km from Banda — is one of India's greatest medieval hill fortresses, built on a 700-metre sandstone cliff; the fort was attacked 14 times by Muslim invaders and was said to be impregnable; the great Rajput warrior Muhammad of Ghor failed to take it; the fort eventually fell to Sher Shah Suri in 1545 — who was ironically killed here when a gunpowder explosion engulfed his tent; Kalinjar is now a protected monument with spectacular rock-cut temples, an ancient well, and panoramic views; a major Fort Festival is held annually), the Ken River (a Yamuna tributary that flows through Banda providing irrigation to the dry Bundelkhand plateau; the Ken-Betwa River Link project — India's first river-linking project — will transfer water from the Ken basin to the Betwa basin, passing through Panna and Banda), and a major stone-quarrying and stone-carving centre (Bundelkhand sandstone and granite are quarried in Banda district for construction and craft). From birthday parties in the Civil Lines area to corporate cakes at the large stone trading companies, from anniversary surprises near the Prayagraj Road to student cakes at Banda's colleges — RedHeart covers all Banda zones: Central (Civil Lines, Station Road, Prayagraj Road), North (Fatehpur Road, Rajapur, Atarra), South (Sagar Road, Chhatarpur Road, Naraini), East (Prayagraj Road, Karvi Road, Chitrakoot border), West (Hamirpur Road, Mahoba Road, Kulpahar).</p>
<p>Our Banda cake range: Chocolate, Black Forest, Red Velvet, Mango (Bundelkhand Langra!), Butterscotch, Photo Cakes, Fondant Kalinjar Fort / Bundelkhand heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banda, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Prayagraj Road, Fatehpur Road, Sagar Road, Kalinjar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kalinjar Fort Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Banda?", answer: "Yes, same-day cake delivery is available across all Banda areas — Civil Lines, Station Road, Prayagraj Road, and Fatehpur Road — for orders placed before 3 PM." },
      { question: "Do you have Kalinjar Fort / Bundelkhand-themed cakes in Banda?", answer: "Yes! The legendary Kalinjar Fort — one of India's most impregnable medieval fortresses, 100 km from Banda, where Sher Shah Suri met his end — inspires our Kalinjar Fort fondant cakes. Bundelkhand's warrior heritage on your birthday cake." },
      { question: "Are eggless cakes available in Banda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Banda delivery." }
    ]
  },

  "pratapgarh": {
    cityName: "Pratapgarh",
    metaTitle: "Cake Delivery in Pratapgarh | Awadhi Aonla UP | RedHeart",
    metaDescription: "Order cakes online in Pratapgarh. Same-day delivery across Pratapgarh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pratapgarh",
    metaKeyword: "cake delivery pratapgarh, order cake online pratapgarh, birthday cake pratapgarh, custom cake pratapgarh, same day cake delivery pratapgarh civil lines aonla amla fruit prayagraj road lucknow road sai river",
    footerContent: `
<h2>Cake Delivery in Pratapgarh — India's Aonla (Amla) Capital, Sai River Belt, and Awadh's Fruit-Growing Hub</h2>
<p>Pratapgarh — the headquarters of Pratapgarh district in Uttar Pradesh's Awadh region, India's undisputed Aonla (Indian Gooseberry / Amla) capital (Pratapgarh district produces the largest quantity of Aonla fruit in India — the Aonla orchards cover thousands of acres in Pratapgarh, and the district accounts for nearly 35–40% of India's total Aonla production; Pratapgarh's Aonla pickles, murabba (preserves), amla candy, and Aonla juice are nationally distributed; the Pratapgarh Aonla Mela is an annual agricultural fair celebrating this; the Aonla variety grown here is the "Francis" variety, known for its large size and high Vitamin C content — making Pratapgarh the true amla heartland of India), located in the Sai River valley (the Sai — a Ganga tributary — flows through Pratapgarh providing fertile alluvial soil for orchards and crops), and a district with the unique distinction of being home to Bela (the birthplace of the Hindi literary giant Suryakant Tripathi 'Nirala' — one of Hindi's greatest poets of the Chhayavadi movement) — is a city of fruit wealth and literary heritage. From birthday parties in the Civil Lines area to corporate cakes at the large aonla processing factories, from anniversary surprises near the Prayagraj Road belt to student cakes at Pratapgarh's colleges — RedHeart covers all Pratapgarh zones: Central (Civil Lines, Station Road, Prayagraj Road), North (Lucknow Road, Bela, Sarsa), South (Raebareli Road, Handia, Babaganj), East (Varanasi Road, Kunda, Bhandri), West (Rae Bareli Road, Sandwa, Tharwai).</p>
<p>Our Pratapgarh cake range: Chocolate, Black Forest, Red Velvet, Mango (Awadhi Dussehri!), Aonla-Honey (Pratapgarh Amla inspired!), Photo Cakes, Fondant Aonla / Amla orchard-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Prayagraj Road, Lucknow Road, Raebareli Road, Kunda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Aonla-Honey, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pratapgarh?", answer: "Yes, same-day cake delivery is available across all Pratapgarh areas — Civil Lines, Station Road, Prayagraj Road, and Lucknow Road — for orders placed before 3 PM." },
      { question: "Do you have Aonla / Amla-inspired cakes in Pratapgarh?", answer: "Yes! Pratapgarh is India's Aonla (Amla/Indian Gooseberry) capital — producing 35–40% of India's entire amla output. We draw inspiration from Pratapgarh's amla orchards for our Aonla-Honey cake and locally themed fondant designs." },
      { question: "Are eggless cakes available in Pratapgarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pratapgarh delivery." }
    ]
  },

  "supaul": {
    cityName: "Supaul",
    metaTitle: "Cake Delivery in Supaul | Kosi River Bihar | RedHeart",
    metaDescription: "Order cakes online in Supaul. Same-day delivery across Supaul. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Supaul",
    metaKeyword: "cake delivery supaul, order cake online supaul, birthday cake supaul, custom cake supaul, same day cake delivery supaul civil lines kosi river triveniganj raghopur madhepura road birpur",
    footerContent: `
<h2>Cake Delivery in Supaul — Kosi's Sorrow Belt, Nepal Border City, and Mithila's Eastern Frontier</h2>
<p>Supaul — the headquarters of Supaul district in Bihar's Mithila region, a district of extraordinary geographical significance related to flood management (the Kosi River — called "Bihar's Sorrow" (Bihar ka Shok) — regularly floods Supaul district; the Kosi embankment project, built in the 1950s after India's independence, was designed to control the Kosi floods but the 2008 Kosi breach (when the river broke through the embankment near Kusaha in Nepal and changed course, flooding 3 million people) is one of India's worst post-independence flood disasters; Supaul was at the epicentre of the 2008 Kosi floods; the district administration and NDRF have developed sophisticated flood response systems; the Supaul-Birpur barrage area on the Kosi is an important infrastructure point), the Nepal border zone (Supaul's northern boundary touches Nepal's Saptari district — the Birpur crossing into Nepal is active), and a district in the Mithila cultural zone — is a city of flood resilience and Indo-Nepal border significance. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Kosi embankment area to student cakes at Supaul's colleges — RedHeart covers all Supaul zones: Central (Civil Lines, Station Road, Madhepura Road), North (Nepal border, Birpur, Triveniganj), South (Saharsa Road, Simri, Basantpur), East (Araria Road, Kishanganj border), West (Darbhanga Road, Madhubani border, Prabhat).</p>
<p>Our Supaul cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Kosi River / Mithila-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Supaul, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Madhepura Road, Birpur, Triveniganj, Saharsa Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Supaul?", answer: "Yes, same-day cake delivery is available across all Supaul areas — Civil Lines, Station Road, Madhepura Road, and Birpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Supaul?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Supaul delivery." },
      { question: "Do you deliver midnight cakes in Supaul?", answer: "Yes, midnight birthday cake delivery is available across Supaul's central and residential zones." }
    ]
  },

  "saharsa": {
    cityName: "Saharsa",
    metaTitle: "Cake Delivery in Saharsa | Kosi Belt Bihar | RedHeart",
    metaDescription: "Order cakes online in Saharsa. Same-day delivery across Saharsa. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Saharsa",
    metaKeyword: "cake delivery saharsa, order cake online saharsa, birthday cake saharsa, custom cake saharsa, same day cake delivery saharsa civil lines kosi river supaul road madhepura road purnia road forbesganj",
    footerContent: `
<h2>Cake Delivery in Saharsa — Kosi Command Area's Capital and Mithila's Commercial Hub</h2>
<p>Saharsa — the headquarters of Saharsa district in Bihar's Mithila-Kosi belt, an important divisional city and administrative hub for the Kosi-Seemanchal zone (Saharsa was the headquarters of the Kosi Division — a now-defunct administrative division that covered the entire Kosi flood plain districts of north Bihar; it remains a major railway junction and administrative centre for the Supaul, Madhepura, Saharsa, Purnia, and Araria districts), a city shaped by the Kosi River's agricultural productivity (in years of adequate rainfall and irrigation, the Kosi command area produces significant rice, maize, jute, and mustard; the Kosi canal network that irrigates Saharsa and surrounding districts is one of Bihar's most extensive), and a city with a Mithila cultural heritage (Mithila painting, Mithila folk music, Chhath Puja, and Samachakwa — a Mithila harvest festival — are celebrated with particular fervor in Saharsa). From birthday parties in the Civil Lines area to corporate cakes at the large paddy processing mills, from anniversary surprises near the Station Road market to student cakes at Saharsa's colleges — RedHeart covers all Saharsa zones: Central (Civil Lines, Station Road, Madhepura Road), North (Supaul Road, Salkhua, Simri Bakhtiarpur), South (Purnia Road, Patna Road, Lalbazar), East (Purnia Road, Forbesganj Road, Sadar), West (Madhubani Road, Darbhanga Road, Mohanpur).</p>
<p>Our Saharsa cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Mithila / Chhath Puja-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saharsa, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Madhepura Road, Supaul Road, Purnia Road, Salkhua</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Saharsa?", answer: "Yes, same-day cake delivery is available across all Saharsa areas — Civil Lines, Station Road, Madhepura Road, and Supaul Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Saharsa?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Saharsa delivery." },
      { question: "Do you deliver midnight cakes in Saharsa?", answer: "Yes, midnight birthday cake delivery is available across Saharsa's central and residential zones." }
    ]
  },

  "krishnanagar": {
    cityName: "Krishnanagar",
    metaTitle: "Cake Delivery in Krishnanagar | Nadia District West Bengal | RedHeart",
    metaDescription: "Order cakes online in Krishnanagar. Same-day delivery across Krishnanagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Krishnanagar",
    metaKeyword: "cake delivery krishnanagar, order cake online krishnanagar, birthday cake krishnanagar, custom cake krishnanagar, same day cake delivery krishnanagar nadia clay doll jalangi kolkata road nabadwip shantipur",
    footerContent: `
<h2>Cake Delivery in Krishnanagar — Clay Doll Capital, Nabadwip's Gateway, and Bengal's Textile-Craft Heartland</h2>
<p>Krishnanagar — the headquarters of Nadia district in West Bengal, one of Bengal's most culturally significant cities (Krishnanagar is famous throughout India for its "Krishnanagar clay dolls" — an extraordinarily skilled tradition of creating life-size and miniature clay figurines of deities, mythological characters, and daily-life scenes; the Krishnanagar clay artists produce some of the most intricate and realistic clay sculpture in Asia; the art was patronised by the Maharaja Krishna Chandra Roy of Krishnanagar, and the tradition continues through the skilled Pal artisan community; the clay dolls are exported to the USA, Europe, and Japan; the Krishnanagar Rajbari and the nearby parks reflect the city's royal heritage), the gateway to Nabadwip (just 15 km away — the birthplace of Sri Chaitanya Mahaprabhu, the 15th-century Bengali Vaishnava saint who popularised bhakti yoga and the Hare Krishna movement worldwide; Nabadwip's Chaitanya Janmasthami is a massive annual festival), close to Shantipur (famous for Shantipur sarees — exquisite handloom cotton and silk sarees with unique weave patterns, GI-tagged and sold across India), and a city on the Jalangi River — is a city of craft excellence and Vaishnava heritage. From birthday parties near the Clay Doll artisan village to corporate cakes at the large textile establishments, from Chaitanya Janmasthami celebration cakes to anniversary surprises in the Station Road area — RedHeart covers all Krishnanagar zones: Central (Station Road, Rajbari, Kolkata Road), North (Nabadwip Road, Santipur Road, Tehatta), South (Kalyani Road, Ranaghat border), East (Murshidabad Road, Berhampore Road), West (Jalangi belt, Plassey Road).</p>
<p>Our Krishnanagar cake range: Chocolate, Black Forest, Red Velvet, Mango (West Bengal Himsagar!), Butterscotch, Photo Cakes, Fondant Krishnanagar Clay Doll / Chaitanya Mahaprabhu-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnanagar, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Rajbari, Kolkata Road, Nabadwip Road, Santipur Road, Tehatta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Clay Doll Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Krishnanagar?", answer: "Yes, same-day cake delivery is available across all Krishnanagar areas — Station Road, Rajbari, Kolkata Road, and Nabadwip Road — for orders placed before 3 PM." },
      { question: "Do you have Krishnanagar Clay Doll-themed cakes?", answer: "Yes! Krishnanagar's legendary clay dolls — crafted by the skilled Pal artisan community in intricate life-size and miniature forms exported worldwide — inspire our Clay Doll fondant cakes. A uniquely Nadia local art design." },
      { question: "Are eggless cakes available in Krishnanagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Krishnanagar delivery." }
    ]
  },

  "murshidabad": {
    cityName: "Murshidabad",
    metaTitle: "Cake Delivery in Murshidabad | Nawab Heritage Bengal | RedHeart",
    metaDescription: "Order cakes online in Murshidabad. Same-day delivery across Murshidabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Murshidabad",
    metaKeyword: "cake delivery murshidabad, order cake online murshidabad berhampore, birthday cake murshidabad, custom cake murshidabad, same day cake delivery murshidabad hazarduari palace siraj ud daula lalbagh silk",
    footerContent: `
<h2>Cake Delivery in Murshidabad — Bengal's Nawabi Capital, Hazarduari Palace's City, and Silk-Weaving Heritage Town</h2>
<p>Murshidabad — the headquarters of Murshidabad district in West Bengal (with its main urban centre at Berhampore, the district HQ), one of India's most historically charged cities for the 18th century (Murshidabad was the capital of Bengal's Nawabs — the most powerful Muslim rulers of pre-British India: Murshid Quli Khan, Ali Vardi Khan, and most famously Siraj ud-Daula — the last independent Nawab of Bengal who was defeated at the Battle of Plassey (1757) against Robert Clive's East India Company forces in one of history's most consequential battles that cemented British rule over India; the Hazarduari Palace — "Palace of a Thousand Doors" — is a magnificent 1837 Italian-style palace built by the Nawabs, now a museum with the Nawabs' weapons, paintings, and historical artefacts; the Plassey battlefield, the Imambara, the Katra mosque, and the Jahan Kosha cannon are nearby; Murshidabad's Silk weaving — known as Murshidabad silk or "Katan silk" — is one of Bengal's finest; the delicate Katan silk sarees in deep red and gold are worn at weddings across Bengal) — is a city of Nawabi grandeur and historical turning-point significance. From birthday parties near the Hazarduari Palace tourist area to corporate cakes at the large silk weaving firms, from anniversary surprises near the Berhampore market to student cakes at the colleges — RedHeart covers all Murshidabad zones: Central (Berhampore, Lalbagh, Hazarduari Road), North (Plassey Road, Jiaganj, Azimganj), South (Kolkata Road, Baharampur, Khargram), East (Malda Road, English Bazar Road), West (Sagardighi, Domkal, Karimpur).</p>
<p>Our Murshidabad cake range: Chocolate, Black Forest, Red Velvet, Mango (Bengal Himsagar!), Butterscotch, Photo Cakes, Fondant Hazarduari Palace / Siraj ud-Daula-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Murshidabad, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Berhampore, Lalbagh, Hazarduari Road, Plassey Road, Jiaganj, Kolkata Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hazarduari Palace Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Murshidabad?", answer: "Yes, same-day cake delivery is available across all Murshidabad areas — Berhampore, Lalbagh, Hazarduari Road, and Plassey Road — for orders placed before 3 PM." },
      { question: "Do you have Hazarduari Palace / Nawabi-themed cakes in Murshidabad?", answer: "Yes! The Hazarduari Palace — the 1837 Nawabi 'Thousand Doors' palace, one of Bengal's grandest heritage buildings — and the history of Siraj ud-Daula, Bengal's last independent Nawab, inspire our Hazarduari fondant cakes." },
      { question: "Are eggless cakes available in Murshidabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Murshidabad delivery." }
    ]
  },

  "dharmapuri": {
    cityName: "Dharmapuri",
    metaTitle: "Cake Delivery in Dharmapuri | Mango-Silk Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Dharmapuri. Same-day delivery across Dharmapuri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dharmapuri",
    metaKeyword: "cake delivery dharmapuri, order cake online dharmapuri, birthday cake dharmapuri, custom cake dharmapuri, same day cake delivery dharmapuri pennagaram hogenakkal falls mango waterfall bangalore road",
    footerContent: `
<h2>Cake Delivery in Dharmapuri — Hogenakkal's Waterfall District, Mango Belt's Heart, and Salem-Bangalore Corridor City</h2>
<p>Dharmapuri — the headquarters of Dharmapuri district in Tamil Nadu, a city of natural and agricultural richness (Dharmapuri district is part of the Krishnagiri-Dharmapuri mango belt — one of Tamil Nadu's most productive mango-growing regions; the Neelam, Banganapalli, and Suvarnarekha mango varieties from Dharmapuri are prized in Tamil Nadu and Andhra markets), home to Hogenakkal Falls (one of South India's most spectacular waterfall systems — the "Niagara of India"; the Cauvery River tumbles over ancient Precambrian rocks at Hogenakkal in a series of cascades, creating a dramatic visual spectacle; coracle rides in the rocky gorge are the most famous tourist activity; Hogenakkal fish fry — deep-fried Cauvery river fish seasoned with spices — is one of Tamil Nadu's most iconic roadside foods; the area receives 2 lakh+ visitors during weekends from Bangalore, Salem, and Chennai), known for the Dharmapuri silk sarees (a tradition of silk weaving with distinctive geometric motifs), and located on the Bangalore-Salem NH-44 — is a city of waterfalls and mango wealth. From birthday parties in the Civil Lines area to corporate cakes at the large mango processing units, from anniversary surprises near the Hogenakkal Road area to student cakes at Dharmapuri's colleges — RedHeart covers all Dharmapuri zones: Central (Civil Lines, Station Road, Bangalore Road), North (Krishnagiri Road, Palacode, Pennagaram), South (Salem Road, Harur, Hosur border), East (Vellore Road, Tiruvannamalai border), West (Hogenakkal Road, Cauvery Belt, Karnataka border).</p>
<p>Our Dharmapuri cake range: Chocolate, Black Forest, Red Velvet, Mango (Dharmapuri Neelam!), Butterscotch, Photo Cakes, Fondant Hogenakkal Falls / Cauvery-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharmapuri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Bangalore Road, Krishnagiri Road, Pennagaram, Hogenakkal Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango (Neelam), Chocolate, Hogenakkal Falls Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dharmapuri?", answer: "Yes, same-day cake delivery is available across all Dharmapuri areas — Civil Lines, Station Road, Bangalore Road, and Krishnagiri Road — for orders placed before 3 PM." },
      { question: "Do you have Hogenakkal Falls-themed cakes in Dharmapuri?", answer: "Yes! Hogenakkal Falls — the magnificent Cauvery River waterfall called the 'Niagara of India', just outside Dharmapuri — inspires our Hogenakkal fondant cakes. The district's most iconic natural wonder on your birthday cake." },
      { question: "Are eggless cakes available in Dharmapuri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dharmapuri delivery." }
    ]
  },

  "namakkal": {
    cityName: "Namakkal",
    metaTitle: "Cake Delivery in Namakkal | Egg-Lorry Capital Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Namakkal. Same-day delivery across Namakkal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Namakkal",
    metaKeyword: "cake delivery namakkal, order cake online namakkal, birthday cake namakkal, custom cake namakkal, same day cake delivery namakkal poultry egg hub tiruchengode lorry body building erode road salem road",
    footerContent: `
<h2>Cake Delivery in Namakkal — India's Egg Hub, Lorry-Body Building Capital, and Tiruchengode's Gateway</h2>
<p>Namakkal — the headquarters of Namakkal district in Tamil Nadu, a city of extraordinary industrial and agricultural fame (Namakkal is India's largest egg-producing district — the Namakkal poultry belt produces over 5 crore eggs per day, making it the egg capital of Asia; the poultry industry in Namakkal employs lakhs and supplies eggs to Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and even Sri Lanka; Namakkal's battery chicken farms, hatcheries, and egg-processing units form a Rs. 2,000 crore+ industry; additionally, Namakkal is famous as the "Lorry Body Building Capital of India" — hundreds of fabrication workshops in Namakkal town build truck bodies, tankers, tipper bodies, and custom truck superstructures for transport companies across India; Namakkal-built truck bodies are recognised for their quality and are sold to fleet owners from Punjab to Kerala), known for the Namagiri Thayar temple (a Vaishnava temple at Namakkal Fort Hill — the Namagiri Lakshmi temple is said to have appeared in the dreams of Srinivasa Ramanujan's mother, inspiring the mathematical genius to pursue mathematics), and home to Tiruchengode (the largest taluk in Namakkal district, known for the Ardhanarishwara temple and the omnipresent small-scale machining industry). From birthday parties in the Civil Lines area to corporate cakes at the large poultry companies, from anniversary surprises near the lorry body workshops to student cakes at Namakkal's engineering colleges — RedHeart covers all Namakkal zones: Central (Civil Lines, Station Road, Erode Road), North (Salem Road, Rasipuram, Thiruchengode), South (Erode Road, Paramathi, Mohanur), East (Tiruchirappalli Road, Karur Road, Pallipalayam), West (Mettur Road, Tirupur border).</p>
<p>Our Namakkal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Namagiri / Lorry Body-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Namakkal, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Erode Road, Salem Road, Rasipuram, Tiruchengode</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Namagiri Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Namakkal?", answer: "Yes, same-day cake delivery is available across all Namakkal areas — Civil Lines, Station Road, Erode Road, Salem Road, and Tiruchengode — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Namakkal?", answer: "Yes! Even in India's egg capital, all our cakes are available in eggless variants — Chocolate, Black Forest, Red Velvet, Mango — for every taste and dietary preference." },
      { question: "Do you deliver midnight cakes in Namakkal?", answer: "Yes, midnight birthday cake delivery is available across Namakkal's central and residential zones." }
    ]
  },

  "bongaigaon": {
    cityName: "Bongaigaon",
    metaTitle: "Cake Delivery in Bongaigaon | Assam Railway Refinery City | RedHeart",
    metaDescription: "Order cakes online in Bongaigaon. Same-day delivery across Bongaigaon. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bongaigaon",
    metaKeyword: "cake delivery bongaigaon, order cake online bongaigaon, birthday cake bongaigaon, custom cake bongaigaon, same day cake delivery bongaigaon refinery IOC railway junction Chirang Manas highway",
    footerContent: `
<h2>Cake Delivery in Bongaigaon — Assam's Refinery City, Northeast India's Rail Junction, and Manas Wildlife Corridor</h2>
<p>Bongaigaon — the headquarters of Bongaigaon district in Assam, a city of significant industrial and strategic importance (the Bongaigaon Refinery and Petrochemicals Limited — BRPL, now part of IndianOil Corporation — is one of northeastern India's major petroleum refineries, established in 1979 and processing crude oil from Assam's Digboi-Sibsagar oilfields; the refinery and petrochemical complex is one of Bongaigaon's primary economic drivers, employing thousands of direct and indirect workers; the BRPL township is a self-contained residential and amenity zone), an important railway junction (Bongaigaon Junction is a major rail junction on the Northeast Frontier Railway, connecting Guwahati-Dibrugarh routes with the Sankosh-Alipurduar-Siliguri routes going to West Bengal and southeast), the gateway to Manas National Park (the UNESCO World Heritage Manas Tiger Reserve — one of India's finest wildlife sanctuaries, home to tigers, one-horned rhinos, golden langurs, clouded leopards, and the rare pygmy hog — lies in Chirang district bordering Bongaigaon; Bongaigaon is the nearest major city for Manas visitors), and a city in the Bodoland Territorial Area Districts (BTAD) buffer zone — is a city of refinery prosperity and wildlife gateway significance. From birthday parties in the BRPL township to corporate cakes at the refinery offices, from anniversary surprises near the Station Road area to student cakes at Bongaigaon's colleges — RedHeart covers all Bongaigaon zones: Central (Station Road, BRPL Township, Bongaigaon Road), North (Chirang Road, Manas Road, Kokrajhar Road), South (Goalpara Road, Dhubri border), East (Guwahati Road, Kamrup border), West (Alipurduar Road, West Bengal border, Assam-Bhutan highway).</p>
<p>Our Bongaigaon cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Tea-Caramel (Assam CTC tea!), Photo Cakes, Fondant Manas Tiger / Bongaigaon Refinery-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bongaigaon, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, BRPL Township, Bongaigaon Road, Chirang Road, Manas Road, Guwahati Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Manas Tiger Fondant, Tea-Caramel Assam, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bongaigaon?", answer: "Yes, same-day cake delivery is available across all Bongaigaon areas — Station Road, BRPL Township, Chirang Road, and Manas Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the BRPL refinery township in Bongaigaon?", answer: "Yes, the BRPL (IndianOil) refinery employee township and its residential zones are covered under our Bongaigaon same-day delivery." },
      { question: "Are eggless cakes available in Bongaigaon?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bongaigaon delivery." }
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
