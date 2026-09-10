// Cakes Batch 8 — 15 cities:
// Rourkela, Berhampur, Sambalpur (Odisha)
// Silchar, Dibrugarh (Assam)
// Vizianagaram, Eluru, Rajahmundry (AP)
// Durgapur (WB)
// Jhansi, Firozabad (UP)
// Darbhanga, Purnia (Bihar)
// Patiala (Punjab)
// Sagar (MP)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "rourkela": {
    cityName: "Rourkela",
    metaTitle: "Cake Delivery in Rourkela | Steel City Odisha | RedHeart",
    metaDescription: "Order cakes online in Rourkela. Same-day delivery across Rourkela. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Rourkela",
    metaKeyword: "cake delivery rourkela, order cake online rourkela, birthday cake rourkela, custom cake rourkela, same day cake delivery rourkela civil township sector steel plant udit nagar",
    footerContent: `
<h2>Cake Delivery in Rourkela — Odisha's Steel City, IIT Campus, and Brahmani River Celebrations</h2>
<p>Rourkela — Odisha's 3rd-largest city on the Brahmani-Koel-Sankh river confluence, home to the Rourkela Steel Plant (RSP — one of India's first integrated steel plants, built with German collaboration in 1959 and run by SAIL), and host to IIT Bhubaneswar's original campus (now IIT Rourkela — a premier technical institution), and Ispat General Hospital — is a city of industrial pride, planned townships, and a large multi-regional educated workforce. From birthday parties in the model Steel Township to corporate cakes at the RSP administrative area, from anniversary surprises in the modern Udit Nagar to student birthdays at NIT Rourkela — RedHeart covers all Rourkela zones: Central (Civil Township, Kachery Road, Station Road), North (Sector 1-10, Main Township, RSP HQ), South (Udit Nagar, Panposh, Birsa Colony), East (Bondamunda, Fertilizer Township, Chhend Colony), West (Vedvyas area, NIT Rourkela campus, Koelnagar).</p>
<p>Our Rourkela cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Steel City-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rourkela, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Township, Sector 1–10, Udit Nagar, Bondamunda, NIT campus, Chhend Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Steel City Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rourkela?", answer: "Yes, same-day cake delivery is available across all Rourkela areas — Civil Township, Sector zones, Udit Nagar, Bondamunda, and NIT campus — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to NIT Rourkela campus?", answer: "Yes, NIT Rourkela campus (Koelnagar/Vedvyas area) and the IIT Rourkela area are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Rourkela?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rourkela delivery." }
    ]
  },

  "berhampur": {
    cityName: "Berhampur",
    metaTitle: "Cake Delivery in Berhampur | Silk City Odisha | RedHeart",
    metaDescription: "Order cakes online in Berhampur (Brahmapur). Same-day delivery across Berhampur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Berhampur",
    metaKeyword: "cake delivery berhampur brahmapur, order cake online berhampur, birthday cake berhampur, custom cake berhampur, same day cake delivery berhampur dharma guntha road goilundi baidyanathpur",
    footerContent: `
<h2>Cake Delivery in Berhampur — Silk City of Odisha and South Odisha's Commercial Capital</h2>
<p>Berhampur (Brahmapur) — Odisha's 3rd-largest city in the Ganjam district, the "Silk City" (Berhampur's Berhampuri silk — or Khandua-Pata — is one of Odisha's most famous textiles, a fine double-ikat woven silk traditionally worn at Jagannath Puri during Rath Yatra), and the commercial capital of south Odisha — is a city of textile heritage, warm Odia culture, and the largest cashew processing zone in Odisha. From birthday parties in the Dharma neighbourhood to corporate cakes at the Government Medical College, from Rath Yatra and Dussera celebration cakes (Berhampur's Dussera procession is one of Odisha's most spectacular — 10-day celebration) to anniversary surprises in Goilundi — RedHeart covers all Berhampur zones: Central (Dharma, Gandhi Nagar, Station Road), North (Baidyanathpur, Kamapalli, Khallikote Road), South (Guntha Road, Old Town, Digapahandi), East (New Colony, Central Library area, GM College), West (Hinjilicut Road, Aska Road).</p>
<p>Our Berhampur cake range: Chocolate, Black Forest, Red Velvet, Mango (Ganjam Beli Mango!), Butterscotch, Photo Cakes, Fondant Dussera-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Berhampur (Brahmapur), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharma, Gandhi Nagar, Baidyanathpur, Goilundi, Guntha Road, GM College area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Mango (Ganjam Beli), Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Berhampur?", answer: "Yes, same-day cake delivery is available across all Berhampur areas — Dharma, Gandhi Nagar, Baidyanathpur, and Goilundi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Berhampur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Berhampur delivery." },
      { question: "Are Dussera celebration cakes available in Berhampur?", answer: "Yes, Berhampur's spectacular Dussera festival cakes — with Devi and Ravana-chariot fondant themes — are available for same-day delivery in Berhampur." }
    ]
  },

  "sambalpur": {
    cityName: "Sambalpur",
    metaTitle: "Cake Delivery in Sambalpur | Hirakud Dam City Odisha | RedHeart",
    metaDescription: "Order cakes online in Sambalpur. Same-day delivery across Sambalpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sambalpur",
    metaKeyword: "cake delivery sambalpur, order cake online sambalpur, birthday cake sambalpur, custom cake sambalpur, same day cake delivery sambalpur ainthapali budharaja hirakud dam debagarh",
    footerContent: `
<h2>Cake Delivery in Sambalpur — Hirakud Dam City, Sambalpuri Ikat Weaving, and Mahanadi River Celebrations</h2>
<p>Sambalpur — western Odisha's largest city on the Mahanadi River, near the Hirakud Dam (the world's longest earthen dam — 25.8 km, built 1956 — forming the Hirakud Reservoir, one of India's largest freshwater lakes), and the home of the world-famous Sambalpuri saree and Bomkai silk (double-ikat weaving with characteristic geometric patterns — GI-tagged and beloved by weavers and fashion designers globally), and the seat of Sambalpur University — is a city of extraordinary textile heritage and Odia folk pride (Sambalpuri folk dance like Sambalpuri, Karma, and Dalkhai are practised here). From birthday parties in the modern Ainthapali colony to corporate cakes at the government offices, from Nuakhai festival celebration cakes (Sambalpuri's harvest festival) to anniversary surprises in the Budharaja area — RedHeart covers all Sambalpur zones: Central (Budharaja, Hirakud Road, Dhanupali), North (Ainthapali, Khetrajpur, Burla), South (Sambalpur University area, Bamra Road), East (Babupali, Hirakud Dam area), West (Sundergarh Road, Jharsuguda Road).</p>
<p>Our Sambalpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Sambalpuri Ikat-pattern Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sambalpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ainthapali, Budharaja, Khetrajpur, Dhanupali, Hirakud Road, Burla, Babupali</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sambalpuri Ikat Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sambalpur?", answer: "Yes, same-day cake delivery is available across all Sambalpur areas — Ainthapali, Budharaja, Khetrajpur, and Dhanupali — for orders placed before 3 PM." },
      { question: "Are Nuakhai celebration cakes available in Sambalpur?", answer: "Yes! Nuakhai — western Odisha's most important harvest festival, where new rice is offered first to the deity — is Sambalpur's biggest celebration, and festive cakes for Nuakhai are available." },
      { question: "Are eggless cakes available in Sambalpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sambalpur delivery." }
    ]
  },

  "silchar": {
    cityName: "Silchar",
    metaTitle: "Cake Delivery in Silchar | Barak Valley Assam | RedHeart",
    metaDescription: "Order cakes online in Silchar. Same-day delivery across Silchar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Silchar",
    metaKeyword: "cake delivery silchar, order cake online silchar, birthday cake silchar, custom cake silchar, same day cake delivery silchar lincoln road link road meherpur rangirkhari",
    footerContent: `
<h2>Cake Delivery in Silchar — Barak Valley's Cultural Hub and South Assam's Bengali-Flavoured Celebrations</h2>
<p>Silchar — Assam's 2nd-largest city and the capital of Barak Valley (a Bengali-speaking region in southern Assam, distinct from the Brahmaputra Valley's Assamese-speaking culture), site of the historic Language Movement of 1961 (when 11 people sacrificed their lives for the right to use Bengali in government service — the Bhasha Shaheed Dibas on 19 May is a major Silchar commemoration), and a city at the crossroads of Assam, Manipur, Mizoram, and Tripura — is a city of strong Bengali cultural identity in the Northeast. From birthday parties in the Lincoln Road area to corporate cakes at the Silchar-Jiribam highway commercial belt, from Durga Puja celebration cakes (the biggest festival in Silchar's Bengali community, celebrated as lavishly as in Kolkata) to anniversary surprises in the Meherpur neighbourhood — RedHeart covers all Silchar zones: Central (Lincoln Road, Link Road, Premtala), North (Rangirkhari, Ambicapatty, Harinagar), South (Meherpur, Udharbond, Bhuban Hill), East (Jiribam Road, Jiribam, Mizoram border), West (Dholai, Cachar District).</p>
<p>Our Silchar cake range: Chocolate, Black Forest, Red Velvet, Mango, Sandesh-inspired cream cake (Bengali special!), Photo Cakes, Fondant Durga Puja-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Silchar, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lincoln Road, Link Road, Meherpur, Rangirkhari, Ambicapatty, Premtala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sandesh Cream, Photo Cake, Durga Puja Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Silchar?", answer: "Yes, same-day cake delivery is available across all Silchar areas — Lincoln Road, Link Road, Meherpur, and Rangirkhari — for orders placed before 3 PM." },
      { question: "Are Durga Puja celebration cakes available in Silchar?", answer: "Yes! Silchar's Durga Puja is celebrated with Kolkata-level grandeur — custom Devi-theme fondant cakes are available for same-day delivery during Durga Puja." },
      { question: "Are eggless cakes available in Silchar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Silchar delivery." }
    ]
  },

  "dibrugarh": {
    cityName: "Dibrugarh",
    metaTitle: "Cake Delivery in Dibrugarh | Tea City Assam | RedHeart",
    metaDescription: "Order cakes online in Dibrugarh. Same-day delivery across Dibrugarh. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Dibrugarh",
    metaKeyword: "cake delivery dibrugarh, order cake online dibrugarh, birthday cake dibrugarh, custom cake dibrugarh, same day cake delivery dibrugarh chowkidinghee naharkatia mohanbari bapuji nagar",
    footerContent: `
<h2>Cake Delivery in Dibrugarh — Assam's Tea Capital, Oil Hub, and Upper Brahmaputra Valley's Commercial Centre</h2>
<p>Dibrugarh — Assam's 2nd-largest city on the Brahmaputra River's southern bank, the "Tea Capital of the World" (Dibrugarh district is India's largest single-district tea producer — the Upper Assam tea gardens here produce the famous CTC and Orthodox Assam teas that define breakfast tea globally), India's Upper Assam oil hub (ONGC's first oil wells in Asia were drilled at Digboi, 80 km away — and Dibrugarh is the commercial hub for this entire oil belt), and the gateway to Arunachal Pradesh — is a city of extraordinary agricultural and petroleum wealth. From birthday parties in the Chowkidinghee residential area to corporate cakes at the Oil India and ONGC colony, from Bihu celebration cakes (Upper Assam's Bihu is celebrated with intense energy) to anniversary surprises in Bapuji Nagar — RedHeart covers all Dibrugarh zones: Central (AT Road, Chowkidinghee, Gar Ali), North (Naharkatia Road, Graham Bazar, Koilamari), South (Bapuji Nagar, Mohanbari Airport area, Lahoal), East (Duliajan, Tinsukhia Road), West (Moran, Sivasagar Road).</p>
<p>Our Dibrugarh cake range: Chocolate, Black Forest, Red Velvet, Assam Tea-infused cake (CTC special!), Mango, Photo Cakes, Bihu-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dibrugarh, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chowkidinghee, AT Road, Bapuji Nagar, Naharkatia Road, Graham Bazar, Mohanbari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Assam CTC Tea Cake, Chocolate, Photo Cake, Bihu Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Assam CTC Tea-flavoured cakes in Dibrugarh?", answer: "Yes! Our Upper Assam CTC Tea Cake — infused with the robust, malty Assam CTC tea leaves from the Dibrugarh gardens — is a unique local speciality available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Dibrugarh?", answer: "Yes, same-day cake delivery is available across all Dibrugarh areas — Chowkidinghee, AT Road, Bapuji Nagar, and Naharkatia Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dibrugarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dibrugarh delivery." }
    ]
  },

  "vizianagaram": {
    cityName: "Vizianagaram",
    metaTitle: "Cake Delivery in Vizianagaram | Vizag District AP | RedHeart",
    metaDescription: "Order cakes online in Vizianagaram. Same-day delivery across Vizianagaram. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vizianagaram",
    metaKeyword: "cake delivery vizianagaram, order cake online vizianagaram, birthday cake vizianagaram, custom cake vizianagaram, same day cake delivery vizianagaram fort railway station kota junction",
    footerContent: `
<h2>Cake Delivery in Vizianagaram — City of Forts, Maharajah's Heritage, and North Andhra's Gateway</h2>
<p>Vizianagaram — a city in northern Andhra Pradesh, the headquarters of the Vizianagaram district, home to the Vizianagaram Fort (a 17th-century fort of the Pusapati (Vizianagaram) royal family — the Vizianagaram Maharajahs were famous patrons of classical music and culture, funding the annual Vizianagaram Classical Music Festival), seat of the notable Maharaja Vijayaram Gajapati Raj College, and an important transit point between Visakhapatnam and Odisha — is a city of royal heritage and North Andhra cultural pride. From birthday parties in the fort area residential belt to corporate cakes at the government offices, from anniversary surprises near the Kota Junction area to student birthdays near Maharajah's College — RedHeart covers all Vizianagaram zones: Central (Fort area, Station Road, PBC Road), North (Kota Junction, NH 16, Balaga), South (Kothavalasa, Simhachalam Road), East (Visakhapatnam Highway, Srungavarapukota), West (Bobbili Road, Parvathipuram).</p>
<p>Our Vizianagaram cake range: Chocolate, Black Forest, Red Velvet, Mango (Banganapalle), Butterscotch, Photo Cakes, Fondant Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vizianagaram, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fort area, Station Road, Kota Junction, PBC Road, Balaga, Kothavalasa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Mango, Vizianagaram Fort Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vizianagaram?", answer: "Yes, same-day cake delivery is available across all Vizianagaram areas — Fort area, Station Road, Kota Junction, and PBC Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Vizianagaram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Vizianagaram delivery." },
      { question: "Do you deliver cakes to Kota Junction areas in Vizianagaram?", answer: "Yes, Kota Junction and the NH-16 belt residential areas are covered by our Vizianagaram same-day delivery." }
    ]
  },

  "eluru": {
    cityName: "Eluru",
    metaTitle: "Cake Delivery in Eluru | West Godavari Andhra | RedHeart",
    metaDescription: "Order cakes online in Eluru. Same-day delivery across Eluru. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Eluru",
    metaKeyword: "cake delivery eluru, order cake online eluru, birthday cake eluru, custom cake eluru, same day cake delivery eluru old town ramachandra nagar sanivarapupeta r s road",
    footerContent: `
<h2>Cake Delivery in Eluru — West Godavari's District Capital and Pochampally Weaving's Gateway</h2>
<p>Eluru — the district headquarters of West Godavari (one of Andhra Pradesh's most fertile and prosperous districts, the "Rice Bowl of Andhra"), on the Tammileru River, home to a thriving tobacco and aquaculture industry, and an important commercial city in the Godavari delta — is a city of agricultural prosperity and vibrant community celebrations. From birthday parties in the residential Ramachandra Nagar to corporate cakes at the large Eluru Urban Development complex, from Sankranti celebration cakes to anniversary surprises in the Old Town heritage area — RedHeart covers all Eluru zones: Central (Old Town, RST Road, Sanivarapupeta), North (Ramachandra Nagar, Eluru Bypass), South (Nidadavolu Road, Jangareddygudem Road), East (Bhimavaram Road, Penugonda), West (Tadepalligudem Road).</p>
<p>Our Eluru cake range: Chocolate, Black Forest, Butterscotch, Mango (Banganapalle), Red Velvet, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramachandra Nagar, Old Town, RST Road, Sanivarapupeta, Nidadavolu Road, Bypass</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango (Banganapalle), Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Eluru?", answer: "Yes, same-day cake delivery is available across all Eluru areas — Ramachandra Nagar, Old Town, RST Road, and Sanivarapupeta — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Eluru?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet, Mango — are available in eggless variants for Eluru delivery." },
      { question: "Do you deliver midnight cakes in Eluru?", answer: "Yes, midnight birthday cake delivery is available across Eluru's central and residential zones." }
    ]
  },

  "rajahmundry": {
    cityName: "Rajahmundry",
    metaTitle: "Cake Delivery in Rajahmundry | Godavari City AP | RedHeart",
    metaDescription: "Order cakes online in Rajahmundry (Rajamahendravaram). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rajahmundry",
    metaKeyword: "cake delivery rajahmundry rajamahendravaram, order cake online rajahmundry, birthday cake rajahmundry, custom cake rajahmundry, same day cake delivery rajahmundry main road gandhi nagar godavari bridge",
    footerContent: `
<h2>Cake Delivery in Rajahmundry — Godavari's Cultural Capital, Pushkaram Ghats, and Andhra Literature's Birthplace</h2>
<p>Rajahmundry (Rajamahendravaram) — Andhra Pradesh's cultural capital on the Godavari River, birthplace of Telugu literature (Nannaya Bhattarakudu — the "Adi Kavi" or first poet, who translated the Mahabharata into Telugu — lived in Rajahmundry in the 11th century), site of the Godavari Pushkaram (the 12-yearly Pushkaram festival on the Godavari draws over 5 crore pilgrims in a single 12-day period), and a city of magnificent views of the Godavari where it is broadest (the Godavari Rail-Road Bridge is a landmark) — is a city of extraordinary cultural heritage. From birthday parties in the leafy Gandhi Nagar to corporate cakes at the large HPCL refinery campus, from Godavari Pushkaram celebration cakes to anniversary surprises near the Dowleswaram Barrage — RedHeart covers all Rajahmundry zones: Central (Main Road, Innespeta, Rajahmundry Junction), North (Lalacheruvu, Godavari Bridge area), South (Gandhi Nagar, Tilak Road, HPCL Colony), East (Jayapuri, Beach area, Dowleswaram), West (Rangampeta, Kovvur, Dhowleswaram area).</p>
<p>Our Rajahmundry cake range: Chocolate, Black Forest, Butterscotch, Mango (Banganapalle), Red Velvet, Photo Cakes, Godavari-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajahmundry, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Nagar, Main Road, Innespeta, HPCL Colony, Godavari Bridge, Tilak Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Godavari Fondant, Photo Cake, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rajahmundry?", answer: "Yes, same-day cake delivery is available across all Rajahmundry areas — Gandhi Nagar, Main Road, Innespeta, and HPCL Colony — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Rajahmundry?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet, Mango — are available in eggless variants for Rajahmundry delivery." },
      { question: "Do you deliver midnight cakes in Rajahmundry?", answer: "Yes, midnight birthday cake delivery is available across Rajahmundry's central and residential zones." }
    ]
  },

  "durgapur": {
    cityName: "Durgapur",
    metaTitle: "Cake Delivery in Durgapur | Steel City West Bengal | RedHeart",
    metaDescription: "Order cakes online in Durgapur. Same-day delivery across Durgapur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Durgapur",
    metaKeyword: "cake delivery durgapur, order cake online durgapur, birthday cake durgapur, custom cake durgapur, same day cake delivery durgapur city centre benachity nachan road a zone steel plant",
    footerContent: `
<h2>Cake Delivery in Durgapur — Bengal's Ruhr Valley Steel City and West Bengal's Fastest Growing Industrial Hub</h2>
<p>Durgapur — West Bengal's 3rd-largest city, a planned industrial city 160 km from Kolkata, home to the Durgapur Steel Plant (DSP — a SAIL-owned integrated steel plant, established with British collaboration in 1959 alongside Rourkela's German-built and Bhilai's Soviet-built plants in Nehru's grand industrial vision), the Damodar Valley Corporation (DVC — the Durgapur Barrage controls the Damodar River flood waters), and the NIT Durgapur — is a city of meticulous planning, tree-lined streets, and large townships. From birthday parties in the leafy City Centre area to corporate cakes at the DSP offices, from anniversary surprises in the Benachity commercial area to student birthdays at NIT Durgapur — RedHeart covers all Durgapur zones: Central (City Centre, Station Road, Benachity), North (Steel Plant Township — A, B, C, D Zones), South (Nachan Road, Bidhannagar, Aam Bagan), East (Bidhangarh, Burdwan Road, Panagarh), West (DVC Colony, Andal, Faridpur).</p>
<p>Our Durgapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Durgapur, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">City Centre, Benachity, A-B-C-D Zone Township, Nachan Road, Bidhannagar, NIT campus</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Durgapur?", answer: "Yes, same-day cake delivery is available across all Durgapur areas — City Centre, Benachity, Steel Plant Township zones, and Nachan Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the DSP Steel Plant township in Durgapur?", answer: "Yes, all DSP residential zones (A, B, C, D zones), DVC Colony, and the NIT Durgapur campus area are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Durgapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Durgapur delivery." }
    ]
  },

  "jhansi": {
    cityName: "Jhansi",
    metaTitle: "Cake Delivery in Jhansi | Rani Laxmibai City UP | RedHeart",
    metaDescription: "Order cakes online in Jhansi. Same-day delivery across Jhansi. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Jhansi",
    metaKeyword: "cake delivery jhansi, order cake online jhansi, birthday cake jhansi, custom cake jhansi, same day cake delivery jhansi sipri bazar civil lines sadar bazar nai basti cantonment",
    footerContent: `
<h2>Cake Delivery in Jhansi — Rani Laxmibai's Valiant City and Bundelkhand's Commercial Hub</h2>
<p>Jhansi — Uttar Pradesh's Bundelkhand region's largest city, eternally associated with Rani Laxmibai of Jhansi (the 22-year-old Queen Regent who led the 1857 Revolt against the British East India Company — "Main apni Jhansi nahin doongi" — and became an immortal symbol of Indian resistance), home to the Jhansi Fort (a massive granite fort on a rocky hill, scene of the 1857 battle), and a major railway junction and administrative city — is a city of fierce pride and warm Bundelkhandi celebrations. From birthday parties in the Civil Lines bungalows to corporate cakes at the large Jhansi MSME belt, from Rani Laxmibai Jayanti celebrations to anniversary surprises in the leafy Nai Basti area — RedHeart covers all Jhansi zones: Central (Sipri Bazar, Sadar Bazar, Fort area), North (Civil Lines, Lakshmi Taal, Mahua Colony), South (Cantonment, Orchha Road, Gwalior Road), East (Nai Basti, Elite Crossing, Saugor Road), West (Shastri Nagar, BDA Colony, Datia Road).</p>
<p>Our Jhansi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Jhansi Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhansi, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Sipri Bazar, Sadar Bazar, Nai Basti, Cantonment, Mahua Colony, Fort area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jhansi Fort Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jhansi?", answer: "Yes, same-day cake delivery is available across all Jhansi areas — Civil Lines, Sipri Bazar, Sadar Bazar, Nai Basti, and Cantonment — for orders placed before 3 PM." },
      { question: "Do you make Rani Laxmibai or Jhansi Fort-theme cakes?", answer: "Yes, custom fondant cakes with the Jhansi Fort silhouette or Rani Laxmibai tribute design are available as special Jhansi edition cakes." },
      { question: "Are eggless cakes available in Jhansi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jhansi delivery." }
    ]
  },

  "firozabad": {
    cityName: "Firozabad",
    metaTitle: "Cake Delivery in Firozabad | Glass City UP | RedHeart",
    metaDescription: "Order cakes online in Firozabad. Same-day delivery across Firozabad. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Firozabad",
    metaKeyword: "cake delivery firozabad, order cake online firozabad, birthday cake firozabad, custom cake firozabad, same day cake delivery firozabad civil lines tundla road nai basti shikohabad",
    footerContent: `
<h2>Cake Delivery in Firozabad — Glass City of India, Bangle Capital, and Agra-Mathura Corridor Celebrations</h2>
<p>Firozabad — western Uttar Pradesh's industrial city between Agra and Etawah, the "Glass City" and "Bangle City of India" (Firozabad's glass industry is Asia's second-largest glass-bangle manufacturing cluster — nearly 70% of India's glass bangles are made here, in thousands of small furnaces and cottage units, with artisans working with molten silica at temperatures of 1,000°C), and a city of 750,000 that has grown entirely around a single craft industry — is a city of unique artisanal heritage and rapid industrial growth. From birthday parties in the Civil Lines area to corporate cakes at the glass manufacturing belt, from anniversary surprises in Nai Basti to student birthdays near Dr. BR Ambedkar University — RedHeart covers all Firozabad zones: Central (Purani Basti, Civil Lines, Station Road), North (Tundla Road, Ferozabad NH 19), South (Shikohabad, Mustafabad, Lohamandi), East (Nai Basti, Sarsaul, Rashidpur), West (Raja ka Tal, Bharthana, Jasrana).</p>
<p>Our Firozabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant glass/bangle-art inspired theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Firozabad, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Purani Basti, Nai Basti, Tundla Road, Shikohabad, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Bangle-Art Fondant, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Firozabad?", answer: "Yes, same-day cake delivery is available across all Firozabad areas — Civil Lines, Purani Basti, Nai Basti, and Tundla Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Firozabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Firozabad delivery." },
      { question: "Do you deliver midnight cakes in Firozabad?", answer: "Yes, midnight birthday cake delivery is available across Firozabad's central and residential zones." }
    ]
  },

  "darbhanga": {
    cityName: "Darbhanga",
    metaTitle: "Cake Delivery in Darbhanga | Mithila City Bihar | RedHeart",
    metaDescription: "Order cakes online in Darbhanga. Same-day delivery across Darbhanga. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Darbhanga",
    metaKeyword: "cake delivery darbhanga, order cake online darbhanga, birthday cake darbhanga, custom cake darbhanga, same day cake delivery darbhanga laheriasarai jale road bengali tola sakarganj",
    footerContent: `
<h2>Cake Delivery in Darbhanga — Mithila Painting's Birthplace and North Bihar's Cultural Capital</h2>
<p>Darbhanga — Bihar's 4th-largest city, the historical capital of the Darbhanga Raj (one of the largest zamindari estates in British India — the Maharajah of Darbhanga was Bihar's most powerful landlord), and the cultural capital of the Mithila region (birthplace of Mithila Painting / Madhubani painting — the UNESCO-recognised folk art using rice paste, natural dyes, and intricate geometric-narrative patterns that is Bihar's proudest art form), and the "Literary Capital of Bihar" (associated with Kavi Vidyapati, the 14th-century Maithili poet-saint) — is a city of extraordinary cultural heritage. From birthday parties in the Laheriasarai township to corporate cakes at the large government offices, from Chhath Puja and Saurath Sabha celebration cakes to anniversary surprises in Sakarganj — RedHeart covers all Darbhanga zones: Central (Bengali Tola, Station Road, Sarkar Hat), North (Laheriasarai, Clock Tower, Benta Road), South (Jale Road, Madhubani Road), East (DMCH Hospital area, Simri Road), West (Kamtaul Road, Baheri).</p>
<p>Our Darbhanga cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Madhubani Painting-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Darbhanga, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Laheriasarai, Bengali Tola, Sakarganj, Station Road, Jale Road, DMCH area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Madhubani Art Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you make Madhubani Painting-inspired cakes in Darbhanga?", answer: "Yes! Mithila/Madhubani painting — Bihar's most iconic art form, born in the Darbhanga district — inspires our Madhubani Art Fondant cake, with traditional fish, lotus, and geometric motifs in brilliant food-safe colours." },
      { question: "Can I get same-day cake delivery in Darbhanga?", answer: "Yes, same-day cake delivery is available across all Darbhanga areas — Laheriasarai, Bengali Tola, Sakarganj, and Station Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Darbhanga?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Darbhanga delivery." }
    ]
  },

  "purnia": {
    cityName: "Purnia",
    metaTitle: "Cake Delivery in Purnia | Gateway to Northeast Bihar | RedHeart",
    metaDescription: "Order cakes online in Purnia. Same-day delivery across Purnia. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Purnia",
    metaKeyword: "cake delivery purnia, order cake online purnia, birthday cake purnia, custom cake purnia, same day cake delivery purnia line bazar bhatta bazar kasba road jail road",
    footerContent: `
<h2>Cake Delivery in Purnia — Gateway to Northeast India and Bihar's Terai Celebrations</h2>
<p>Purnia (Purnea) — Bihar's 5th-largest city in the extreme northeast of the state at the gateway to the Siliguri Corridor, a historical city that was once the headquarters of the Purnea Collectorate under the East India Company (the famous 18th-century Resident Alexander Mackenzie's Purnea journals are landmarks of early British India), and a large commercial city for the Kosi River region — is where Bihar's heartland meets the Northeast. From birthday parties in the Line Bazar commercial area to corporate cakes at the large government offices, from Chhath Puja ghats celebrations to anniversary surprises in the Bhatta Bazar area — RedHeart covers all Purnia zones: Central (Line Bazar, Bhatta Bazar, Kasba Road), North (Jail Road, Hospital Road, Allahganj), South (Station Road, Madhepura Road), East (Araria Road, Barsoi), West (Banmankhi, Katihar Road).</p>
<p>Our Purnia cake range: Chocolate, Black Forest, Red Velvet, Mango (Zardalu!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purnia, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Line Bazar, Bhatta Bazar, Kasba Road, Jail Road, Hospital Road, Allahganj, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Zardalu Mango, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Purnia?", answer: "Yes, same-day cake delivery is available across all Purnia areas — Line Bazar, Bhatta Bazar, Kasba Road, and Jail Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Purnia?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Purnia delivery." },
      { question: "Do you deliver midnight cakes in Purnia?", answer: "Yes, midnight birthday cake delivery is available across Purnia's central and residential zones." }
    ]
  },

  "patiala": {
    cityName: "Patiala",
    metaTitle: "Cake Delivery in Patiala | Royal Punjab City | RedHeart",
    metaDescription: "Order cakes online in Patiala. Same-day delivery across Patiala. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Patiala",
    metaKeyword: "cake delivery patiala, order cake online patiala, birthday cake patiala, custom cake patiala, same day cake delivery patiala leela bhawan thapar university new leela nagar baradari gardens",
    footerContent: `
<h2>Cake Delivery in Patiala — Royal Sikh Kingdom, Patiala Peg, and Punjab's Most Stately City</h2>
<p>Patiala — Punjab's 4th-largest city, the seat of the historical Patiala princely state (one of Punjab's most powerful Sikh kingdoms — the Maharajah of Patiala wore the Sarpech crown with the famous Patiala Necklace, one of the world's most valuable diamond and ruby necklaces), home to the magnificent Moti Bagh Palace (a 19th-century Mughal-European fusion palace — now a National Institute of Sports), and the city whose name adorns the iconic "Patiala peg" (the Punjab-standardised double-shot whisky measure) — is a city of royal grandeur, sports heritage (India's National Institute of Sports is here), and warm Punjabi celebrations. From birthday parties in the leafy Leela Bhawan area to corporate cakes at the Thapar University campus, from Baisakhi celebration cakes to anniversary surprises near the Baradari Gardens — RedHeart covers all Patiala zones: Central (Sanauri Adda, Baradari, Old Town), North (Thapar University area, Sirhind Road), South (Leela Bhawan, New Leela Nagar, Rajpura Road), East (Nabha Road, Bassi, Fatehgarh Sahib Road), West (Sangrur Road, Ghaggar bank, Patiala Rural).</p>
<p>Our Patiala cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Royal Patiala-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patiala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Leela Bhawan, Baradari, Thapar University area, New Leela Nagar, Sanauri Adda, Old Town</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Royal Patiala Palace Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Patiala?", answer: "Yes, same-day cake delivery is available across all Patiala areas — Leela Bhawan, Baradari, Thapar University area, and New Leela Nagar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Patiala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Patiala delivery." },
      { question: "Do you deliver midnight cakes in Patiala?", answer: "Yes, midnight birthday cake delivery is available across Patiala's central and residential zones." }
    ]
  },

  "sagar": {
    cityName: "Sagar",
    metaTitle: "Cake Delivery in Sagar | Lake City Madhya Pradesh | RedHeart",
    metaDescription: "Order cakes online in Sagar. Same-day delivery across Sagar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Sagar",
    metaKeyword: "cake delivery sagar, order cake online sagar, birthday cake sagar, custom cake sagar, same day cake delivery sagar moti nagar civil lines university road tili",
    footerContent: `
<h2>Cake Delivery in Sagar — Lake City of Madhya Pradesh and Bundelkhand's Educational Hub</h2>
<p>Sagar — Madhya Pradesh's 4th-largest city, named after its central Sagar Lake (a large freshwater lake around which the city is built), home to Dr. Harisingh Gour University (one of India's earliest Central Universities — the first to be established outside of Calcutta in 1946 by Dr. Harisingh Gour, a pioneering Bundelkhandi lawyer and educationist), and a major commercial and educational hub for the Bundelkhand and Vindhya regions — is a city of academic tradition and warm central Indian community celebrations. From birthday parties in the leafy Civil Lines bungalows to corporate cakes at the MSME industrial area, from Sagar Lake-side anniversary celebrations to student birthdays at the Dr. Harisingh Gour University campus — RedHeart covers all Sagar zones: Central (Civil Lines, Moti Nagar, Laxmi Ganj), North (University Road, Makronia, Gopalganj), South (Tili, Rehli Road, Bhopal Road), East (Khurai Road, Banda Road, Rahatgarh), West (Damoh Road, Bina Road, Narsinghpur Road).</p>
<p>Our Sagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Lake-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sagar, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Moti Nagar, University Road, Laxmi Ganj, Tili, Makronia, Gopalganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Sagar Lake Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sagar?", answer: "Yes, same-day cake delivery is available across all Sagar areas — Civil Lines, Moti Nagar, University Road, and Tili — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sagar delivery." },
      { question: "Do you deliver cakes to Dr. Harisingh Gour University campus in Sagar?", answer: "Yes, the Dr. Harisingh Gour University campus and the surrounding University Road area are covered by our Sagar same-day delivery." }
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
