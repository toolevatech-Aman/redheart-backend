// Cakes Batch 74 — 12 cities
// UP: Chitrakoot, Banda, Mahoba, Hamirpur, Lalitpur, Pratapgarh (UP)
// TN: Kallakurichi, Tenkasi, Chengalpattu, Tiruvannamalai, Villupuram
// AP: Bapatla

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "chitrakoot": {
    cityName: "Chitrakoot",
    metaTitle: "Cake Delivery in Chitrakoot | UP MP Ram Exile Mandakini River Kamadgiri Pilgrimage | RedHeart",
    metaDescription: "Order cakes online in Chitrakoot. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chitrakoot",
    metaKeyword: "cake delivery chitrakoot, order cake online chitrakoot, birthday cake chitrakoot, custom cake chitrakoot, same day cake delivery Chitrakoot UP MP Ram exile Mandakini River Kamadgiri Sati Anusuya ashram Ramayana",
    footerContent: `
<h2>Cake Delivery in Chitrakoot — Ram's 11.5-Year Exile Home, Kamadgiri, and Mandakini River Pilgrimage</h2>
<p>Chitrakoot — spanning Chitrakoot district in Uttar Pradesh and Satna district in Madhya Pradesh — is one of Hinduism's most sacred pilgrimage centres, associated with Lord Ram's forest exile (the Ram's Exile at Chitrakoot (according to the Valmiki Ramayana, Lord Ram, Sita, and Lakshmana spent 11.5 of their 14 years of forest exile (vanvas) at Chitrakoot; the sage Valmiki composed parts of the Ramayana at Chitrakoot; the sage Atri and Anusuya's ashram was here; Chitrakoot is described as the most beautiful forest in the Ramayana; the Bharata Milap — where Bharata came to request Ram to return to Ayodhya — happened at Chitrakoot; the Chitrakoot circuit has 72+ kunds (sacred ponds) and ancient temples); the Kamadgiri Parikrama (the Kamadgiri — a sacred hill at the centre of Chitrakoot town — is the most sacred object at Chitrakoot; it is believed that circumambulating Kamadgiri (5 km parikrama) fulfils all desires; the Kamadgiri is covered in dense forest; the parikrama path has numerous temples; it is one of UP-MP's most important pilgrimage circuits); the Mandakini River (the Mandakini River flows through Chitrakoot; the Ramghat on the Mandakini is the main ghat for pilgrims — evening aarti at the Ramghat Mandakini is one of India's most moving religious spectacles; the Mandakini is a tributary of the Yamuna)), and a city of Ram-11.5-year-exile-Chitrakoot and Kamadgiri-parikrama and Mandakini-Ramghat — is UP's most Chitrakoot-Ram-exile and Kamadgiri-pilgrimage Chitrakoot. From birthday parties in Chitrakoot to celebration cakes — RedHeart covers all areas: Chitrakoot town, Karvi, Manikpur, Mau (Chitrakoot), Rajapur (Chitrakoot).</p>
<p>Our Chitrakoot cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitrakoot, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitrakoot town, Karvi, Manikpur, Mau (Chitrakoot), Rajapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chitrakoot?", answer: "Yes, same-day cake delivery is available across Chitrakoot town, Karvi, Manikpur, and Mau for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chitrakoot?", answer: "Yes, all flavours are available in eggless variants for Chitrakoot delivery." },
      { question: "Do you deliver midnight cakes in Chitrakoot?", answer: "Yes, midnight birthday cake delivery is available across Chitrakoot city zones." }
    ]
  },

  "banda": {
    cityName: "Banda",
    metaTitle: "Cake Delivery in Banda | UP Ken River Panna Tiger Reserve Vindhyachal Bundelkhand | RedHeart",
    metaDescription: "Order cakes online in Banda. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Banda",
    metaKeyword: "cake delivery banda, order cake online banda, birthday cake banda, custom cake banda, same day cake delivery Banda UP Ken River Panna Tiger Reserve Vindhyachal Bundelkhand Kalinjar Fort",
    footerContent: `
<h2>Cake Delivery in Banda — Ken River, Kalinjar Fort (Chandel Dynasty), and Bundelkhand's Heart</h2>
<p>Banda — the district headquarters of Banda district in Uttar Pradesh (Bundelkhand region; Ken River; MP border), the commercial capital of Bundelkhand with ancient heritage (the Kalinjar Fort (the Kalinjar Fort — in Banda district on the Vindhya Range — is one of India's most strategically important ancient forts; the fort dates to the 7th century CE or earlier; it was the stronghold of the Chandel Rajput dynasty (9th-13th CE) — the same dynasty that built Khajuraho; the fort was besieged multiple times — by Mahmud of Ghazni, Qutb-ud-Din Aibak (Delhi Sultanate), Sher Shah Suri (who died at Kalinjar during the siege — killed by a gunpowder explosion in 1545 CE), and Akbar; the fort is a protected ASI monument; the fort's Nilkantha Mahadev temple inside is sacred); the Ken River (the Ken — rising in MP's Satna — flows north through Banda before joining the Yamuna near Fatehpur; the Ken River Valley forms the boundary between Banda and Panna (MP); the Ken-Betwa River Interlinking Project — one of India's largest river-linking projects — involves the Ken River; the Panna Tiger Reserve in MP is on the Ken); the Bundelkhand Droughts (Banda and Bundelkhand are among India's most drought-prone zones; water scarcity drives migration; the UP government's Bundelkhand development packages focus on Banda)), and a city of Kalinjar-Fort-Chandel-Sher-Shah-Suri-1545 and Ken-River and Bundelkhand-heart — is UP's most Banda-Kalinjar-Fort and Ken-River Banda. From birthday parties in Banda to celebration cakes — RedHeart covers all areas: Banda city, Naraini, Tindwari, Baberu, Kamasin, Atarra.</p>
<p>Our Banda cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banda, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banda city, Naraini, Tindwari, Baberu, Kamasin, Atarra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Banda?", answer: "Yes, same-day cake delivery is available across Banda city, Naraini, Tindwari, Baberu, and Atarra for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Banda?", answer: "Yes, all flavours are available in eggless variants for Banda delivery." },
      { question: "Do you deliver midnight cakes in Banda?", answer: "Yes, midnight birthday cake delivery is available across Banda city zones." }
    ]
  },

  "mahoba": {
    cityName: "Mahoba",
    metaTitle: "Cake Delivery in Mahoba | UP Chandela Dynasty Alha Udal Legend Madan Sagar | RedHeart",
    metaDescription: "Order cakes online in Mahoba. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mahoba",
    metaKeyword: "cake delivery mahoba, order cake online mahoba, birthday cake mahoba, custom cake mahoba, same day cake delivery Mahoba UP Chandela dynasty Alha Udal warriors Madan Sagar Lake Bundelkhand heritage",
    footerContent: `
<h2>Cake Delivery in Mahoba — Chandela Dynasty Capital, Alha-Udal Warrior Legend, and Madan Sagar Lake</h2>
<p>Mahoba — the district headquarters of Mahoba district in Uttar Pradesh (Bundelkhand; Ken River basin; MP border; carved from Hamirpur), the ancient capital of the Chandela Rajput dynasty and home to Bundelkhand's greatest warrior legend (the Chandela Dynasty Capital (Mahoba was the capital of the Chandela Rajput kingdom before Khajuraho rose to prominence; the Chandelas ruled from the 9th to 13th century CE; they built magnificent temples (Khajuraho) and lakes (Madan Sagar, Kirat Sagar) across Bundelkhand; the Chandela military commanders Alha and Udal were legendary warriors from Mahoba; the "Alha-Khand" — a medieval Hindi oral epic ballad — celebrates the battles of Alha and Udal against Prithviraj Chauhan III; the Alha-Khand is still sung in Bundelkhand; Alha and Udal are venerated as folk heroes; their story (the Paramardideva's wars) is one of UP's richest oral traditions); the Madan Sagar Lake (Madan Sagar — a large medieval tank/lake built by the Chandela king Madanavarman (12th century) — is the largest water body in Mahoba; the lake provides water supply and scenic beauty; Chandela-era temples on the lake banks); the Rahila Sagar and Kirat Sagar (other Chandela-built lakes near Mahoba)), and a city of Chandela-dynasty-capital and Alha-Udal-warrior-legend and Madan-Sagar-Lake — is UP's most Mahoba-Chandela and Alha-Udal Mahoba. From birthday parties in Mahoba to celebration cakes — RedHeart covers all areas: Mahoba city, Kulpahar, Charkhari, Kabrai, Panwari.</p>
<p>Our Mahoba cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahoba, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahoba city, Kulpahar, Charkhari, Kabrai, Panwari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mahoba?", answer: "Yes, same-day cake delivery is available across Mahoba city, Kulpahar, Charkhari, and Kabrai for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mahoba?", answer: "Yes, all flavours are available in eggless variants for Mahoba delivery." },
      { question: "Do you deliver midnight cakes in Mahoba?", answer: "Yes, midnight birthday cake delivery is available across Mahoba city zones." }
    ]
  },

  "hamirpur-up": {
    cityName: "Hamirpur",
    metaTitle: "Cake Delivery in Hamirpur UP | Bundelkhand Betwa Yamuna Confluence Maudaha | RedHeart",
    metaDescription: "Order cakes online in Hamirpur UP. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hamirpur UP",
    metaKeyword: "cake delivery hamirpur up, order cake online hamirpur, birthday cake hamirpur up, custom cake hamirpur, same day cake delivery Hamirpur Uttar Pradesh Betwa Yamuna confluence Bundelkhand Ken River",
    footerContent: `
<h2>Cake Delivery in Hamirpur (UP) — Betwa-Yamuna Confluence, Bundelkhand Plains, and Ken River Valley</h2>
<p>Hamirpur — the district headquarters of Hamirpur district in Uttar Pradesh (Bundelkhand; Yamuna and Betwa rivers; Jhansi-adjacent), a district defined by the meeting of two great rivers (the Betwa-Yamuna Confluence (the Betwa River — one of the Yamuna's major right-bank tributaries, rising in MP — meets the Yamuna at Hamirpur town; the Betwa-Yamuna sangam (confluence) is a sacred spot; the Hamirpur ghats at the confluence draw pilgrims; the Betwa flows from Madhya Pradesh through the Bundelkhand landscape — the Betwa is known for its scenic valley and ghats; the Rajghat Dam (near Jhansi-Lalitpur) is upstream on the Betwa; the Ken-Betwa River Linking Project will divert Ken water to the Betwa downstream of Hamirpur); the Bundelkhand Geography (Hamirpur district is in Bundelkhand — a rocky, drought-prone plateau between the Yamuna and Vindhya Hills; the Bundelkhand region historically suffered from water scarcity and desertification; the UP Government's Bundelkhand package focuses on irrigation, roads, and employment in Hamirpur; the granite and stone quarrying in Hamirpur); the Rath Town (Rath — a town in Hamirpur district — is a historic market town; it was important during the Bundela Rajput period)), and a city of Betwa-Yamuna-confluence and Bundelkhand-rocky-plateau — is UP's most Hamirpur-Betwa-Yamuna and Bundelkhand Hamirpur (UP). From birthday parties in Hamirpur to celebration cakes — RedHeart covers all areas: Hamirpur city, Rath, Maudaha, Sumerpur, Gopalganj (Hamirpur), Mustafa Abad.</p>
<p>Our Hamirpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur city, Rath, Maudaha, Sumerpur, Mustafa Abad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hamirpur UP?", answer: "Yes, same-day cake delivery is available across Hamirpur city, Rath, Maudaha, and Sumerpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hamirpur UP?", answer: "Yes, all flavours are available in eggless variants for Hamirpur delivery." },
      { question: "Do you deliver midnight cakes in Hamirpur UP?", answer: "Yes, midnight birthday cake delivery is available across Hamirpur city zones." }
    ]
  },

  "lalitpur": {
    cityName: "Lalitpur",
    metaTitle: "Cake Delivery in Lalitpur | UP Bundelkhand Betwa Dhasan Deogarh Temples Jain | RedHeart",
    metaDescription: "Order cakes online in Lalitpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lalitpur",
    metaKeyword: "cake delivery lalitpur, order cake online lalitpur, birthday cake lalitpur, custom cake lalitpur, same day cake delivery Lalitpur UP Bundelkhand Betwa Dhasan Deogarh Jain temples Gupta period MP border",
    footerContent: `
<h2>Cake Delivery in Lalitpur — Deogarh's Gupta-Era Jain Temples, Betwa-Dhasan Confluence, and Bundelkhand</h2>
<p>Lalitpur — the district headquarters of Lalitpur district in Uttar Pradesh (southernmost UP; MP border; Betwa and Dhasan rivers; Bundelkhand), home to Deogarh — one of India's finest examples of Gupta and post-Gupta temple architecture (the Deogarh Temples (Deogarh — in Lalitpur district — has one of India's most significant temple complexes; the Dashavatara Temple at Deogarh (early 6th century CE, Gupta period) — dedicated to Vishnu — is one of the oldest surviving brick-and-stone Panchayatana temples with a complete shikhara; the sculpted panels depicting the Sheshashayi Vishnu, Gajendra Moksha, and Nara-Narayana are masterpieces of Gupta sculpture; Deogarh also has a major Jain temple complex — the Jain temples of Deogarh (dating from the 8th-17th century CE) number over 30; the Shantinatha Jain Temple has exceptional sculptures; Deogarh is called "the Khajuraho of Bundelkhand" for its temple wealth); the Betwa-Dhasan Confluence (the Betwa and Dhasan rivers both flow through Lalitpur district; the Betwa flows past Jhansi and Hamirpur before joining the Yamuna; the Dhasan joins the Betwa in the Ken basin; the Lalitpur plateau is rocky and drought-prone); the Granite Quarrying (Lalitpur has significant granite reserves; the district is an important stone quarrying zone of Bundelkhand)), and a city of Deogarh-Gupta-Dashavatara-Temple-6th-century and Jain-temples-30-plus and Betwa-Dhasan — is UP's most Lalitpur-Deogarh-Gupta-temple and Jain-temples Lalitpur. From birthday parties in Lalitpur to celebration cakes — RedHeart covers all areas: Lalitpur city, Mehroni, Talbehat, Madawara, Bar, Jakhaura.</p>
<p>Our Lalitpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur city, Mehroni, Talbehat, Madawara, Bar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lalitpur?", answer: "Yes, same-day cake delivery is available across Lalitpur city, Mehroni, Talbehat, and Madawara for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Lalitpur?", answer: "Yes, all flavours are available in eggless variants for Lalitpur delivery." },
      { question: "Do you deliver midnight cakes in Lalitpur?", answer: "Yes, midnight birthday cake delivery is available across Lalitpur city zones." }
    ]
  },

  "pratapgarh-up": {
    cityName: "Pratapgarh",
    metaTitle: "Cake Delivery in Pratapgarh UP | Sai River Awadh Belha Devi Temple Lalganj | RedHeart",
    metaDescription: "Order cakes online in Pratapgarh UP. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pratapgarh UP",
    metaKeyword: "cake delivery pratapgarh up, order cake online pratapgarh up, birthday cake pratapgarh, custom cake pratapgarh up, same day cake delivery Pratapgarh Uttar Pradesh Sai River Belha Devi Lalganj Awadh",
    footerContent: `
<h2>Cake Delivery in Pratapgarh (UP) — Sai River, Belha Devi Temple, and Awadhi Agricultural Heritage</h2>
<p>Pratapgarh — the district headquarters of Pratapgarh district in Uttar Pradesh (central-east UP; Sai River; Prayagraj-adjacent; Awadh region), a district in the agricultural heartland of the Awadh region (the Sai River (the Sai River — a tributary of the Gomti — flows through Pratapgarh district; the Sai is associated with Awadh's agricultural landscape; the Sai's valley produces paddy, wheat, and sugarcane; the Sai floods seasonally; the Sai is mentioned in the Ramayana as a river in the Kosala kingdom; the Sai River joins the Gomti at Jaunpur); the Belha Devi Temple (the Belha Devi Temple — on an island in the Sai River near Pratapgarh — is one of eastern UP's most important Shakti temples; the goddess Belha Devi is worshipped as a manifestation of Durga; the temple draws lakhs of pilgrims during Navratri; the island setting in the Sai River makes the temple visually striking); the Awadhi Culture (Pratapgarh is in the historic Awadh region — the territory of the Nawabs of Lucknow; the Awadhi language, cuisine (biryani, nihari, korma), and cultural traditions are strong in Pratapgarh; the Pratapgarh-Amethi-Sultanpur belt is the cultural heart of Awadh); the Amla Orchards (Pratapgarh is known for its amla (Indian Gooseberry) cultivation — the Pratapgarh amla is GI-tagged)), and a city of Sai-River-Belha-Devi-Navratri and Awadhi-culture and Pratapgarh-amla-GI — is UP's most Pratapgarh-Sai-River and Belha-Devi Pratapgarh (UP). From birthday parties in Pratapgarh (UP) to celebration cakes — RedHeart covers all areas: Pratapgarh city, Lalganj (Pratapgarh), Kunda, Patti (Pratapgarh), Raniganj (Pratapgarh), Sandwa.</p>
<p>Our Pratapgarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh city, Lalganj, Kunda, Patti (Pratapgarh), Raniganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pratapgarh UP?", answer: "Yes, same-day cake delivery is available across Pratapgarh city, Lalganj, Kunda, and Patti for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Pratapgarh UP?", answer: "Yes, all flavours are available in eggless variants for Pratapgarh delivery." },
      { question: "Do you deliver midnight cakes in Pratapgarh UP?", answer: "Yes, midnight birthday cake delivery is available across Pratapgarh city zones." }
    ]
  },

  "kallakurichi": {
    cityName: "Kallakurichi",
    metaTitle: "Cake Delivery in Kallakurichi | TN Gomuki River Ulundurpet New District 2019 | RedHeart",
    metaDescription: "Order cakes online in Kallakurichi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kallakurichi",
    metaKeyword: "cake delivery kallakurichi, order cake online kallakurichi, birthday cake kallakurichi, custom cake kallakurichi, same day cake delivery Kallakurichi Tamil Nadu Gomuki River Ulundurpet Villupuram adjacent sugarcane",
    footerContent: `
<h2>Cake Delivery in Kallakurichi — Gomuki River, Sugar Industry, and Tamil Nadu's Newest District</h2>
<p>Kallakurichi — the district headquarters of Kallakurichi district in Tamil Nadu (northern TN; Villupuram-adjacent; Gomuki River; carved from Villupuram in 2019), one of Tamil Nadu's newest districts with a strong sugarcane and sugar industry (the Sugar Industry (the Kallakurichi-Ulundurpet area of TN is a significant sugarcane growing zone; several sugar mills and cooperative sugar industries operate in Kallakurichi; the sugarcane production feeds the sugar mills; the area also grows paddy, groundnut, and millets; the sugar industry provides employment to thousands of agricultural workers); the Gomuki River (the Gomuki — a tributary of the Ponnaiyar — flows through Kallakurichi district; the Gomuki's seasonal flows support irrigation for the paddy and sugarcane fields; the Gomuki and Ponnaiyar river systems define the water geography of this part of TN); the Ulundurpet Town (Ulundurpet — a major commercial town in Kallakurichi district — is on the NH-45 (Chennai-Trichy highway); it is a key intersection point for travellers in northern TN; the Ulundurpet bus stand is one of the busiest in the area); the Sangama (confluence) Temples (the Kallakurichi area has ancient Shiva temples of the Chola and Pallava periods; the Theerthamalai hill temple is a notable pilgrimage in the vicinity)), and a city of Sugar-industry-Ulundurpet and Gomuki-River and TN-new-district-2019 — is TN's most Kallakurichi-sugar-industry and Gomuki-River Kallakurichi. From birthday parties in Kallakurichi to celebration cakes — RedHeart covers all areas: Kallakurichi city, Ulundurpet, Sankarapuram, Thirunavalur, Chinnasalem, Rishivandiyam.</p>
<p>Our Kallakurichi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kallakurichi, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kallakurichi city, Ulundurpet, Sankarapuram, Thirunavalur, Chinnasalem</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kallakurichi?", answer: "Yes, same-day cake delivery is available across Kallakurichi city, Ulundurpet, Sankarapuram, and Thirunavalur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kallakurichi?", answer: "Yes, all flavours are available in eggless variants for Kallakurichi delivery." },
      { question: "Do you deliver midnight cakes in Kallakurichi?", answer: "Yes, midnight birthday cake delivery is available across Kallakurichi city zones." }
    ]
  },

  "tenkasi": {
    cityName: "Tenkasi",
    metaTitle: "Cake Delivery in Tenkasi | TN Courtallam Falls Tamraparni River Agasthiyamalai | RedHeart",
    metaDescription: "Order cakes online in Tenkasi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tenkasi",
    metaKeyword: "cake delivery tenkasi, order cake online tenkasi, birthday cake tenkasi, custom cake tenkasi, same day cake delivery Tenkasi Tamil Nadu Courtallam Falls Tamraparni River Agasthiyamalai Kasi Viswanathar temple",
    footerContent: `
<h2>Cake Delivery in Tenkasi — Courtallam Waterfalls ("Spa of South India"), Tamraparni River, and Agasthiyamalai</h2>
<p>Tenkasi — the district headquarters of Tenkasi district in Tamil Nadu (southern TN; Western Ghats; Tamraparni River; Kerala border; carved from Tirunelveli in 2019), home to one of India's most famous hill waterfalls (the Courtallam Falls ("Spa of South India") (Courtallam (Kutralam) — in the Tenkasi district at the foot of the Western Ghats — is one of India's most beloved waterfall destinations; the Courtallam waterfalls are fed by the Chittar River cascading down the Western Ghats; there are approximately 9 waterfalls at Courtallam including the Main Falls, Five Falls (Aintharuvi), Honey Falls (Thenaruvi), Tiger Falls (Puliyaruvi), and the Old Falls (Pazhaya Courtallam); the waterfalls flow year-round but are most spectacular during the southwest monsoon (June-August); Courtallam is called the "Spa of South India" because the water is believed to have medicinal properties due to its passage through herbs in the Western Ghats forest; thousands of visitors come for the "herbal bath" experience during the Aadi and Karthigai seasons); the Tamraparni River (the Tamraparni (Porunai) — one of the few perennial rivers in Tamil Nadu — rises in the Agasthiyamalai peak area (1,869m) in the Tenkasi-Tirunelveli Western Ghats; the Tamraparni is the lifeline of Tirunelveli and Thoothukudi; the river is used for paddy irrigation in the Tirunelveli valley); the Kasi Viswanathar Temple (the Tenkasi Kasi Viswanathar Temple — a Shiva temple from the Pandya period (14th-15th CE) — is one of Tamil Nadu's important Shiva temples; the temple's gopuram (gateway tower) is decorated with elaborate sculptures)), and a city of Courtallam-Spa-of-South-India and Tamraparni-source and Agasthiyamalai — is TN's most Tenkasi-Courtallam-Falls and Tamraparni-source Tenkasi. From birthday parties in Tenkasi to celebration cakes — RedHeart covers all areas: Tenkasi city, Courtallam, Kadayanallur, Shenkottai, Alangulam, Veerakeralampudur.</p>
<p>Our Tenkasi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tenkasi, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tenkasi city, Courtallam, Kadayanallur, Shenkottai, Alangulam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tenkasi?", answer: "Yes, same-day cake delivery is available across Tenkasi city, Courtallam, Kadayanallur, Shenkottai, and Alangulam for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tenkasi?", answer: "Yes, all flavours are available in eggless variants for Tenkasi delivery." },
      { question: "Do you deliver midnight cakes in Tenkasi?", answer: "Yes, midnight birthday cake delivery is available across Tenkasi city zones." }
    ]
  },

  "tiruvannamalai": {
    cityName: "Tiruvannamalai",
    metaTitle: "Cake Delivery in Tiruvannamalai | TN Arunachala Annamalai Hill Karthigai Deepam | RedHeart",
    metaDescription: "Order cakes online in Tiruvannamalai. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tiruvannamalai",
    metaKeyword: "cake delivery tiruvannamalai, order cake online tiruvannamalai, birthday cake tiruvannamalai, custom cake tiruvannamalai, same day cake delivery Tiruvannamalai TN Arunachala Karthigai Deepam Annamalayar Ramana Maharshi",
    footerContent: `
<h2>Cake Delivery in Tiruvannamalai — Arunachala Hill (Shiva as Fire), Karthigai Deepam, and Ramana Maharshi's Ashram</h2>
<p>Tiruvannamalai — the district headquarters of Tiruvannamalai district in Tamil Nadu (north TN; Shevaroy Hills; South Arcot region), one of India's most spiritually significant cities — home to Arunachala, the hill-manifestation of Shiva (the Arunachala and Annamalayar Temple (Arunachala Hill (800m) at Tiruvannamalai is one of the five Panchabhoota Stalas of Shiva — representing Fire (Agni); the Annamalayar Temple at the foot of Arunachala is one of Tamil Nadu's largest temple complexes (16.5 acres); the main deity is Annamalayar (Shiva as Agni Lingam) and Unnamalai Amman (Parvati); the Karthigai Deepam festival (during the Tamil month of Karthigai — November-December) is Tiruvannamalai's most important event — a massive lamp lit atop Arunachala is visible for miles and marks the presence of Shiva as light; lakhs of pilgrims attend; the Girivalam (circumambulation) of Arunachala Hill — 14 km parikrama — is a sacred practice performed by thousands on every full moon night); the Ramana Maharshi Ashram (Sri Ramana Maharshi (1879-1950) — one of modern India's greatest sages — lived at the foot of Arunachala at Tiruvannamalai for 54 years; the Sri Ramanasramam draws devotees from across the world; Ramana's teaching of Advaita Vedanta and self-inquiry continues to attract seekers worldwide)), and a city of Arunachala-Shiva-as-Fire-Panchabhoota and Karthigai-Deepam and Ramana-Maharshi — is TN's most Tiruvannamalai-Arunachala and Karthigai-Deepam Tiruvannamalai. From birthday parties in Tiruvannamalai to celebration cakes — RedHeart covers all areas: Tiruvannamalai city, Arni, Chengam, Polur, Cheyyar, Vandavasi.</p>
<p>Our Tiruvannamalai cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruvannamalai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruvannamalai city, Arni, Chengam, Polur, Cheyyar, Vandavasi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tiruvannamalai?", answer: "Yes, same-day cake delivery is available across Tiruvannamalai city, Arni, Chengam, Polur, and Cheyyar for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tiruvannamalai?", answer: "Yes, all flavours are available in eggless variants for Tiruvannamalai delivery." },
      { question: "Do you deliver midnight cakes in Tiruvannamalai?", answer: "Yes, midnight birthday cake delivery is available across Tiruvannamalai city zones." }
    ]
  },

  "villupuram": {
    cityName: "Villupuram",
    metaTitle: "Cake Delivery in Villupuram | TN Gingee Fort Maratha Mughal Junction Pondicherry | RedHeart",
    metaDescription: "Order cakes online in Villupuram. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Villupuram",
    metaKeyword: "cake delivery villupuram, order cake online villupuram, birthday cake villupuram, custom cake villupuram, same day cake delivery Villupuram TN Gingee Fort Maratha Mughal railway junction Pondicherry adjacent",
    footerContent: `
<h2>Cake Delivery in Villupuram — Gingee Fort ("Troy of the East"), Railway Junction, and Pondicherry Gateway</h2>
<p>Villupuram — the district headquarters of Villupuram district in Tamil Nadu (north TN; Pondicherry border; South Arcot; major railway junction), home to one of India's most spectacular medieval forts (the Gingee Fort (Gingee — in Villupuram district — contains one of India's most impressive hill forts; the Gingee Fort (Senji Kottai) stands on three hills — Rajagiri (283m), Krishnagiri, and Chandrayandurg — connected by walls; the fort was described by the Mughal general Zulfiqar Khan as "the most inaccessible fortress in India"; it is called the "Troy of the East"; the fort was built by the Konar chiefs, improved by the Vijayanagara kings, captured by Bijapur, the Marathas (Shivaji's son Rajaram sheltered here after Aurangzeb), the Mughals, the French, and finally the British; inside the fort: the Venkataramana Temple, audience halls, granaries, and the Ranganatha temple; the fort is a protected ASI monument); the Villupuram Railway Junction (Villupuram Junction is one of South India's most important railway junctions — lines from Chennai, Tiruchy, Bangalore, Rameswaram, and Pondicherry converge here; it is a divisional HQ of Southern Railway's Thiruvananthapuram division; the Chennai-Villupuram-Rameswaram route is a key pilgrimage line); the Pondicherry Proximity (Villupuram borders the Union Territory of Puducherry; the Villupuram-Pondicherry bus route is one of the most-used in TN)), and a city of Gingee-Fort-Troy-of-East and Villupuram-Railway-Junction and Pondicherry-adjacent — is TN's most Villupuram-Gingee-Fort and Railway-Junction Villupuram. From birthday parties in Villupuram to celebration cakes — RedHeart covers all areas: Villupuram city, Gingee, Tindivanam, Vikravandi, Ulundurpet, Vanur.</p>
<p>Our Villupuram cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Villupuram, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Villupuram city, Gingee, Tindivanam, Vikravandi, Ulundurpet, Vanur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Villupuram?", answer: "Yes, same-day cake delivery is available across Villupuram city, Gingee, Tindivanam, Vikravandi, and Ulundurpet for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Villupuram?", answer: "Yes, all flavours are available in eggless variants for Villupuram delivery." },
      { question: "Do you deliver midnight cakes in Villupuram?", answer: "Yes, midnight birthday cake delivery is available across Villupuram city zones." }
    ]
  },

  "bapatla": {
    cityName: "Bapatla",
    metaTitle: "Cake Delivery in Bapatla | AP Krishna Delta Bay of Bengal Agriculture New District | RedHeart",
    metaDescription: "Order cakes online in Bapatla. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bapatla",
    metaKeyword: "cake delivery bapatla, order cake online bapatla, birthday cake bapatla, custom cake bapatla, same day cake delivery Bapatla Andhra Pradesh Krishna delta Bay of Bengal paddy agriculture coastal new district 2022",
    footerContent: `
<h2>Cake Delivery in Bapatla — Krishna-Guntur Delta, Bay of Bengal Coast, and AP's New Coastal District</h2>
<p>Bapatla — the district headquarters of Bapatla district in Andhra Pradesh (central AP coast; Krishna-Guntur delta; Bay of Bengal; carved from Guntur district in 2022), a rich agricultural coastal district in the Krishna-Guntur delta zone (the Krishna-Guntur Delta Agriculture (the Bapatla district is in the fertile Krishna-Guntur delta — one of India's most productive rice-growing areas; the delta plains receive water from the Krishna and Guntur-area canal systems; the district produces paddy (rice), tobacco, chilli, and cotton; the Guntur-Bapatla belt is one of Andhra's most important agricultural zones; the Bapatla district is also known for aquaculture — shrimp farming in the coastal areas near the Bay of Bengal); the Bay of Bengal Coast (the Bapatla district has a coastline on the Bay of Bengal; the coastal areas have fishing communities; the Nizampatnam Port area in Bapatla; the coastal villages produce marine fish, prawns, and crab; the Bay of Bengal cyclones periodically affect the Bapatla coast); the Bapatla Town and Agriculture College (the Acharya N.G. Ranga Agricultural University (ANGRAU) campus at Bapatla is one of Andhra Pradesh's leading agricultural research institutions; the university's paddy and tobacco research has shaped AP's agricultural methods); the Chirala Textile (the Chirala town in Bapatla district — known for its handloom cotton textiles; the Chirala-Vetapalem area has a significant weaving tradition)), and a city of Krishna-delta-paddy and Bay-of-Bengal-coast and ANGRAU-agricultural-research — is AP's most Bapatla-Krishna-delta and Bay-of-Bengal Bapatla. From birthday parties in Bapatla to celebration cakes — RedHeart covers all areas: Bapatla city, Chirala, Repalle, Addanki, Vetapalem, Nizampatnam.</p>
<p>Our Bapatla cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bapatla, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bapatla city, Chirala, Repalle, Addanki, Vetapalem, Nizampatnam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bapatla?", answer: "Yes, same-day cake delivery is available across Bapatla city, Chirala, Repalle, Addanki, and Vetapalem for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bapatla?", answer: "Yes, all flavours are available in eggless variants for Bapatla delivery." },
      { question: "Do you deliver midnight cakes in Bapatla?", answer: "Yes, midnight birthday cake delivery is available across Bapatla city zones." }
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
