// Batch 63 — 15 cities:
// TN: Theni, Tenkasi, Chengalpattu
// Kerala: Malappuram
// Rajasthan: Pratapgarh (slug: pratapgarh-rj)
// Gujarat: Panchmahal (Godhra), Dahod
// Odisha: Jagatsinghpur, Nabarangpur
// Bihar: Supaul, Sheohar
// Assam: Barpeta, Nalbari
// MP: Tikamgarh
// AP: Anakapalli

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "theni": {
    cityName: "Theni",
    metaTitle: "Flower Delivery in Theni | Cardamom Hills Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Theni, Tamil Nadu. Same-day delivery near Meghamalai & across Theni. From ₹399.",
    h1: "Online Flower Delivery in Theni",
    metaKeyword: "flower delivery theni, online flowers theni tamil nadu, florist theni, flowers theni cardamom meghamalai vaigai dam periyar border kerala western ghats",
    footerContent: `
<h2>Flower Delivery in Theni — Meghamalai's Cardamom Spice Estates and the Vaigai Dam's Western Ghats Gateway</h2>
<p>Theni, at the junction of the Western Ghats and the Tamil plains in southern Tamil Nadu near the Kerala border, is the headquarters of Theni district — a district of spice plantations, hill forests, and reservoir ecology. The Meghamalai ("Cloud Forest") hill range in Theni district rises to 1,500 m and is covered in cardamom, pepper, coffee, and tea estates — producing some of Tamil Nadu's finest spice output. The Vaigai Dam (on the Vaigai River in Theni district) and the Periyar Tiger Reserve (accessible from Theni via Kumily, Kerala border) make the district a wildlife tourism corridor. The Suruli Falls and the High Wavy Mountains near Theni are scenic Ghats destinations. The district's border towns of Kumily (Kerala side) and Bodi (Theni side) service the cardamom trade between Tamil Nadu and Kerala. Theni district's Cumbum Valley is one of Tamil Nadu's most fertile horticultural zones producing grapes, plantain, and mangoes.</p>
<p>RedHeart delivers flowers across Theni — Main Market, Meghamalai area, Uthamapalayam area, Cumbum area, Andipatti area, and Bodinayakanur. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Theni, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Meghamalai, Uthamapalayam, Cumbum, Andipatti, Bodinayakanur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Meghamalai hill estate visit from Theni?", answer: "Yes, Meghamalai (Cloud Forest) in Theni district has cardamom and tea estate resort stays. Seasonal spice-hill bouquets for Meghamalai resort gifting are available from Theni." },
      { question: "Can I get birthday flowers in Theni?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Theni for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Theni?", answer: "Yes, same-day delivery is available across Theni for orders placed before 3 PM." }
    ]
  },

  "tenkasi": {
    cityName: "Tenkasi",
    metaTitle: "Flower Delivery in Tenkasi | Courtallam Falls Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Tenkasi, Tamil Nadu. Same-day delivery near Courtallam & across Tenkasi. From ₹399.",
    h1: "Online Flower Delivery in Tenkasi",
    metaKeyword: "flower delivery tenkasi, online flowers tenkasi tamil nadu, florist tenkasi, flowers tenkasi courtallam waterfalls spa western ghats ancient vishnu temple kasi",
    footerContent: `
<h2>Flower Delivery in Tenkasi — Courtallam's Medicinal Waterfalls and the Ancient Vishnu Temple's South Kashi</h2>
<p>Tenkasi, in the foothills of the Western Ghats of southern Tamil Nadu near the Kerala border, is the headquarters of Tenkasi district — home to the Courtallam (Kuttralam) waterfalls, one of Tamil Nadu's most celebrated natural spas. The Courtallam Main Falls (and the Five Falls, Shenbaga Devi Falls, and other cascades in the area) on the Chittar River are famous for the waterfalls' supposed medicinal properties — the water passes through herbal forest before falling, giving it a herbal-medicinal quality that has been celebrated in Tamil Sangam poetry. Tenkasi town has the Tenkasiviswanathan Vishnu temple — a Divya Desam (108 sacred Vishnu temples of the Alvar saints), making Tenkasi a "South Kashi" (Tenkasi = "South Kashi"). The district borders Kerala's Kottayam and Tirunelveli. The Western Ghats forests here contain cardamom, coffee, and pepper plantations.</p>
<p>RedHeart delivers flowers across Tenkasi — Main Market, Courtallam area, Shenkottai area, Kadayanallur area, Sankarankovil area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tenkasi, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Courtallam, Shenkottai, Kadayanallur, Sankarankovil, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Vishnu puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Tenkasi?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Tenkasi for orders placed before 3 PM." },
      { question: "Are flowers for Tenkasi Vishnu temple puja available?", answer: "Yes, the Tenkasiviswanathan temple (a Divya Desam Vishnu shrine — the South Kashi) is Tenkasi's most sacred site. Marigold garlands and Vishnu puja flower sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Tenkasi?", answer: "Yes, same-day delivery is available across Tenkasi for orders placed before 3 PM." }
    ]
  },

  "chengalpattu": {
    cityName: "Chengalpattu",
    metaTitle: "Flower Delivery in Chengalpattu | Chennai Belt Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Chengalpattu, Tamil Nadu. Same-day delivery near Chennai & across Chengalpattu. From ₹399.",
    h1: "Online Flower Delivery in Chengalpattu",
    metaKeyword: "flower delivery chengalpattu, online flowers chengalpattu tamil nadu, florist chengalpattu, flowers chengalpattu chennai belt mahabalipuram vedanthangal bird sanctuary kancheepuram",
    footerContent: `
<h2>Flower Delivery in Chengalpattu — Mahabalipuram Heritage Coast and Chennai's Industrial Satellite District</h2>
<p>Chengalpattu, in the southeastern coastal belt of Tamil Nadu near Chennai, is the headquarters of Chengalpattu district — carved from Kancheepuram district in 2019 and encompassing some of Tamil Nadu's most significant heritage, ecological, and industrial assets. Mahabalipuram (Mamallapuram) — the UNESCO World Heritage Site of Pallava Empire's shore temples (7th–8th century CE), rathas (monolithic rock-cut temples), and the famous Descent of the Ganges bas-relief (India's largest open-air rock carving) — is in Chengalpattu district. The Vedanthangal Bird Sanctuary (in Chengalpattu) — India's oldest wildlife sanctuary (protected since 1858), where 40,000+ migratory birds (painted storks, open-billed storks, spoonbills, etc.) nest annually — is a landmark wetland. Chengalpattu district houses major automobile and electronics manufacturing (Hyundai Sriperumbudur, Samsung, Foxconn plants) and is a key node in the Chennai-Bengaluru industrial corridor.</p>
<p>RedHeart delivers flowers across Chengalpattu — Main Market, Mahabalipuram area, Sriperumbudur area, Tambaram area, Vedanthangal area, and Station Road. Our range includes roses, marigolds, jasmine, and Tamil Nadu puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chengalpattu, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mahabalipuram, Sriperumbudur, Tambaram, Vedanthangal, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Chengalpattu?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Chengalpattu for orders placed before 3 PM." },
      { question: "Are flowers for Mahabalipuram Shore Temple beach visits available in Chengalpattu?", answer: "Yes, the UNESCO Mahabalipuram Shore Temple (Pallava dynasty, 7th century) is in Chengalpattu. Tropical bouquets for Mahabalipuram beach resort stays are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Chengalpattu?", answer: "Yes, same-day delivery is available across Chengalpattu for orders placed before 3 PM." }
    ]
  },

  "malappuram": {
    cityName: "Malappuram",
    metaTitle: "Flower Delivery in Malappuram | Malabar Kerala | RedHeart",
    metaDescription: "Order flowers in Malappuram, Kerala. Same-day delivery near Tirur & across Malappuram. From ₹399.",
    h1: "Online Flower Delivery in Malappuram",
    metaKeyword: "flower delivery malappuram, online flowers malappuram kerala, florist malappuram, flowers malappuram malabar mappila muslim kalpetta nilambur ponani thirunavaya bharatapuzha",
    footerContent: `
<h2>Flower Delivery in Malappuram — Mappila Muslim Heritage, Nilambur Teak Forests, and the Bharathapuzha</h2>
<p>Malappuram, in the Malabar region of northern Kerala on the Bharathapuzha (Nila) River, is the headquarters of Malappuram district — a district with a significant Mappila (Kerala Muslim) population and a distinctive north Malabar culture. Malappuram is historically associated with the Moplah Rebellion (1921) — the Malabar Rebellion where Mappila Muslims rose against British colonial rule and Hindu landlords in a complex anti-colonial uprising that also had communal dimensions, and which remains one of Kerala's most contested historical events. The Nilambur area (in Malappuram district) is famous for the Nilambur teak forests — the world's oldest teak plantations (dating to 1844), which are the source of the "Nilambur teak" (considered the finest teak variety for furniture and timber). The Thirunavaya (in Malappuram) on the Bharathapuzha is an ancient Hindu pilgrimage site (Mamankam festival). Malappuram has a major Gulf emigrant population.</p>
<p>RedHeart delivers flowers across Malappuram — Main Market, Tirur area, Nilambur area, Perinthalmanna area, Manjeri area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Kerala bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malappuram, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tirur, Nilambur, Perinthalmanna, Manjeri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, tropical Kerala flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Eid available in Malappuram?", answer: "Yes, Eid is a major celebration in Malappuram's significant Mappila Muslim community. Fragrant rose and jasmine arrangements for Eid gifting are available for same-day delivery." },
      { question: "Are flowers for Onam available in Malappuram?", answer: "Yes, Onam is celebrated across Kerala including Malappuram. Pookalam (floral carpet) flowers and Onam festive arrangements are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Malappuram?", answer: "Yes, same-day delivery is available across Malappuram for orders placed before 3 PM." }
    ]
  },

  "pratapgarh-rj": {
    cityName: "Pratapgarh",
    metaTitle: "Flower Delivery in Pratapgarh | Rajasthan | RedHeart",
    metaDescription: "Order flowers in Pratapgarh, Rajasthan. Same-day delivery near Banswara & across Pratapgarh. From ₹399.",
    h1: "Online Flower Delivery in Pratapgarh",
    metaKeyword: "flower delivery pratapgarh rajasthan, online flowers pratapgarh rajasthan, florist pratapgarh, flowers pratapgarh kagdi pikup rajasthan tribal vagad bhil mahi river",
    footerContent: `
<h2>Flower Delivery in Pratapgarh — Vagad's Tribal Heritage and the Mahi River's Rajasthan-Gujarat-MP Tri-Border</h2>
<p>Pratapgarh, in the Vagad region of southeastern Rajasthan at the Gujarat and Madhya Pradesh borders, is the headquarters of Pratapgarh district — Rajasthan's newest and southernmost district (created in 2008 from Chittorgarh, Banswara, and Udaipur), and a district with a predominantly Bhil tribal population and a landscape distinctly different from the stereotypical sandy Rajasthan. The Vagad region is fertile, hilly, and forested — the Mahi River (a major Indian Ocean-draining river flowing west through Gujarat to the Gulf of Khambhat) originates in the hills of Madhya Pradesh and passes through Pratapgarh district. The district has a significant Bhil and Garasia tribal population with distinctive folk art, headgear, and Gavri dance traditions. The town of Arnod (in Pratapgarh) has a notable Jain temple heritage. The region's Mahua tree (Madhuca longifolia) crop and forest produce are important in the tribal economy.</p>
<p>RedHeart delivers flowers across Pratapgarh — Main Market, Arnod area, Chhoti Sadri area, Dhariawad area, Piploda area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Arnod, Chhoti Sadri, Dhariawad, Piploda, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Pratapgarh (Rajasthan)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Pratapgarh, Rajasthan for orders placed before 3 PM." },
      { question: "Are flowers for Navratri available in Pratapgarh?", answer: "Yes, Navratri is enthusiastically celebrated in Pratapgarh's Bhil tribal communities. Marigold garlands and Devi puja flowers are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Pratapgarh, Rajasthan?", answer: "Yes, same-day delivery is available across Pratapgarh (Rajasthan) for orders placed before 3 PM." }
    ]
  },

  "panchmahal": {
    cityName: "Panchmahal",
    metaTitle: "Flower Delivery in Panchmahal | Godhra Gujarat | RedHeart",
    metaDescription: "Order flowers in Panchmahal (Godhra), Gujarat. Same-day delivery across Panchmahal district. From ₹399.",
    h1: "Online Flower Delivery in Panchmahal",
    metaKeyword: "flower delivery panchmahal godhra, online flowers panchmahal gujarat, florist godhra panchmahal, flowers panchmahal godhra tribal adivasi madhya pradesh border pavagadh",
    footerContent: `
<h2>Flower Delivery in Panchmahal — Pavagadh's Sacred Hill and Godhra's Complex Communal History</h2>
<p>Panchmahal (headquartered at Godhra), in the tribal eastern belt of Gujarat at the Madhya Pradesh border, is the headquarters of Panchmahal district — a district of deep tribal heritage, significant archaeological sites, and a complex recent history. The Champaner-Pavagadh Archaeological Park (in Panchmahal district) is a UNESCO World Heritage Site — encompassing the Pavagadh Hill (with the Kalika Mata temple, an important Shakti Peetha, atop an extinct volcano), the medieval Islamic city of Champaner (built by the Gujarat Sultan Mahmud Begada in the 15th century), and a remarkable concentration of mosques, temples, and stepwells. Godhra town is nationally known for the 2002 communal violence — the burning of the Sabarmati Express at Godhra station and the subsequent Gujarat riots remain one of independent India's most serious communal tragedies. The district has a significant Adivasi (Bhil, Pateliya) tribal population in its forested hills bordering MP.</p>
<p>RedHeart delivers flowers across Panchmahal — Godhra (district HQ), Champaner-Pavagadh area, Halol area, Lunawada area, Kalol area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panchmahal (Godhra), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Godhra, Champaner-Pavagadh, Halol, Lunawada, Kalol, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kalika Mata temple (Pavagadh) puja available in Panchmahal?", answer: "Yes, the Pavagadh Kalika Mata temple (an important Shakti Peetha, UNESCO heritage site in Panchmahal) draws millions of pilgrims. Marigold garlands and Devi puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Panchmahal (Godhra)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Panchmahal for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Panchmahal?", answer: "Yes, same-day delivery is available across Panchmahal (Godhra and surrounding areas) for orders placed before 3 PM." }
    ]
  },

  "dahod": {
    cityName: "Dahod",
    metaTitle: "Flower Delivery in Dahod | Tribal Gujarat | RedHeart",
    metaDescription: "Order flowers in Dahod, Gujarat. Same-day delivery near MP border & across Dahod. From ₹399.",
    h1: "Online Flower Delivery in Dahod",
    metaKeyword: "flower delivery dahod, online flowers dahod gujarat, florist dahod, flowers dahod tribal bhil panchmahal rajasthan madhya pradesh border aurangzeb birthplace",
    footerContent: `
<h2>Flower Delivery in Dahod — Aurangzeb's Birthplace and Gujarat's Largest Tribal District</h2>
<p>Dahod, in the tribal hills of eastern Gujarat at the Rajasthan and Madhya Pradesh borders, is the headquarters of Dahod district — Gujarat's largest Scheduled Tribe population district (over 70% tribal), predominantly Bhil, Bhilala, and Garasia communities. Dahod has an unexpected historical claim: the Mughal Emperor Aurangzeb (1618–1707) was born in Dahod (then called Dohad) — the son of Shah Jahan and Mumtaz Mahal (of Taj Mahal fame) was born here during one of Shah Jahan's military campaigns. A 17th-century Mughal garden (the Dahod Bagh, associated with the Mughal camp) is a heritage remnant. Dahod district's economy is based on the tribal communities' forest and agriculture livelihoods, with maize, groundnut, and cotton cultivation on the Eastern Gujarat Upland's hilly terrain. The railway workshop in Dahod is one of the largest rail maintenance facilities in Western India.</p>
<p>RedHeart delivers flowers across Dahod — Main Market, Limkheda area, Devgadh Baria area, Zalod area, Fatepura area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dahod, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Limkheda, Devgadh Baria, Zalod, Fatepura, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Dahod?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Dahod for orders placed before 3 PM." },
      { question: "Are flowers for Navratri available in Dahod?", answer: "Yes, Navratri Garba is enthusiastically celebrated in Dahod. Marigold garlands and festive flower sets for the 9-night Garba are available." },
      { question: "Do you deliver flowers same day in Dahod?", answer: "Yes, same-day delivery is available across Dahod for orders placed before 3 PM." }
    ]
  },

  "jagatsinghpur": {
    cityName: "Jagatsinghpur",
    metaTitle: "Flower Delivery in Jagatsinghpur | Paradeep Odisha | RedHeart",
    metaDescription: "Order flowers in Jagatsinghpur, Odisha. Same-day delivery near Paradeep port & across Jagatsinghpur. From ₹399.",
    h1: "Online Flower Delivery in Jagatsinghpur",
    metaKeyword: "flower delivery jagatsinghpur, online flowers jagatsinghpur odisha, florist jagatsinghpur, flowers jagatsinghpur paradeep port mahanadi delta cyclone odisha coast bay",
    footerContent: `
<h2>Flower Delivery in Jagatsinghpur — Paradeep Port, Mahanadi Delta, and the Bay of Bengal's Cyclone Coast</h2>
<p>Jagatsinghpur, in the Mahanadi delta on the Bay of Bengal coast of Odisha near Cuttack, is the headquarters of Jagatsinghpur district — a coastal delta district of agricultural fertility and industrial importance. The Paradeep Port (in Jagatsinghpur district) — India's fifth-largest major port and one of the country's most important commodity export hubs (exporting iron ore, fertilisers, coal, and chemicals) — is Odisha's maritime gateway. The district's Mahanadi delta environment produces abundant paddy on the alluvial soils, and the coastal fishing community (particularly the Keuta and Tior communities) has a rich sea-fishing tradition on the Bay of Bengal. The district is highly vulnerable to Bay of Bengal cyclones (the 1999 Super Cyclone that devastated Odisha hit Jagatsinghpur severely). The Birupa River and the Chitrotpala-Mahanadi distributary channels create the complex delta geography of the district.</p>
<p>RedHeart delivers flowers across Jagatsinghpur — Main Market, Paradeep area, Kujang area, Balikuda area, Ersama area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagatsinghpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Paradeep, Kujang, Balikuda, Ersama, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Jagatsinghpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jagatsinghpur for orders placed before 3 PM." },
      { question: "Are flowers for Durga Puja available in Jagatsinghpur?", answer: "Yes, Durga Puja is the biggest festival in Jagatsinghpur. Marigold garlands and Devi puja flower sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Jagatsinghpur?", answer: "Yes, same-day delivery is available across Jagatsinghpur for orders placed before 3 PM." }
    ]
  },

  "nabarangpur": {
    cityName: "Nabarangpur",
    metaTitle: "Flower Delivery in Nabarangpur | Tribal Odisha | RedHeart",
    metaDescription: "Order flowers in Nabarangpur, Odisha. Same-day delivery near Umerkote & across Nabarangpur. From ₹399.",
    h1: "Online Flower Delivery in Nabarangpur",
    metaKeyword: "flower delivery nabarangpur, online flowers nabarangpur odisha, florist nabarangpur, flowers nabarangpur koraput tribal dhudhua falls godavari andhra pradesh border",
    footerContent: `
<h2>Flower Delivery in Nabarangpur — Godavari's Source Hills and Koraput's Tribal Legacy Borderlands</h2>
<p>Nabarangpur, in the remote tribal hills of southern Odisha at the Chhattisgarh and Andhra Pradesh borders, is the headquarters of Nabarangpur district — a district in the Koraput tribal belt (sometimes called the "Chattisgarh-Odisha-AP tribal triangle") with a predominantly Kondh, Gond, and Gadaba tribal population. The Dudhua Falls (in Nabarangpur district) — a scenic multi-tiered waterfall on a Godavari tributary in the Eastern Ghats — is a local eco-tourism attraction. Nabarangpur district has the source streams of the Godavari's northern tributaries (Indravati, Sabari) in its hills. The Nabarangpur area was part of the old Narayanpur Zamindari under the Koraput kingdom. The Umerkote area (in Nabarangpur) has a significant Adivasi market (haat bazaar) tradition and tribal craft heritage. The district is among the most economically underdeveloped in India, with high forest cover and low infrastructure.</p>
<p>RedHeart delivers flowers across Nabarangpur — Main Market, Umerkote area, Papadahandi area, Kosagumuda area, Dabugam area, and Station Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nabarangpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Umerkote, Papadahandi, Kosagumuda, Dabugam, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Nabarangpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nabarangpur for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Nabarangpur?", answer: "Yes, marigold garlands and puja sets for Dussehra, tribal festivals, and other occasions are available for same-day delivery in Nabarangpur." },
      { question: "Do you deliver flowers same day in Nabarangpur?", answer: "Yes, same-day delivery is available across Nabarangpur for orders placed before 3 PM." }
    ]
  },

  "supaul": {
    cityName: "Supaul",
    metaTitle: "Flower Delivery in Supaul | Kosi River Bihar | RedHeart",
    metaDescription: "Order flowers in Supaul, Bihar. Same-day delivery near Kosi embankment & across Supaul. From ₹399.",
    h1: "Online Flower Delivery in Supaul",
    metaKeyword: "flower delivery supaul, online flowers supaul bihar, florist supaul, flowers supaul kosi river flood embankment north bihar maithili birpur triveniganj",
    footerContent: `
<h2>Flower Delivery in Supaul — Kosi River's Embankment District and the Maithil Cultural Heartland</h2>
<p>Supaul, on the Kosi River embankment in northern Bihar near Nepal, is the headquarters of Supaul district — one of Bihar's most flood-affected districts, situated within the Kosi embankment system that attempts to contain the "Sorrow of Bihar." The Kosi River (notorious for its unpredictable course changes — it has shifted more than 100 km westward since the 18th century) dominates life in Supaul, with annual floods disrupting agriculture, transport, and livelihoods. Supaul district is in the Maithil cultural zone (where Maithili, one of India's 22 Scheduled Languages, is spoken) — the Mithila region's folk traditions, Madhubani painting, and the Sita-Ram heritage are deeply embedded here. The Triveniganj area (in Supaul) and the Kosi-Supaul embankment infrastructure are engineering landmarks of Bihar's flood management history. The district's fisheries on the Kosi's fish-rich waters are an important livelihood.</p>
<p>RedHeart delivers flowers across Supaul — Main Market, Triveniganj area, Birpur area, Nirmali area, Raghopur area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Supaul, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Triveniganj, Birpur, Nirmali, Raghopur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Supaul?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Supaul for orders placed before 3 PM." },
      { question: "Are flowers for Chhath Puja available in Supaul?", answer: "Yes, Chhath Puja is the biggest festival in Supaul. Lotus flowers and Chhath Puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Supaul?", answer: "Yes, same-day delivery is available across Supaul for orders placed before 3 PM." }
    ]
  },

  "sheohar": {
    cityName: "Sheohar",
    metaTitle: "Flower Delivery in Sheohar | Bihar | RedHeart",
    metaDescription: "Order flowers in Sheohar, Bihar. Same-day delivery across Sheohar district. From ₹399.",
    h1: "Online Flower Delivery in Sheohar",
    metaKeyword: "flower delivery sheohar, online flowers sheohar bihar, florist sheohar, flowers sheohar nepal border maithili smallest district tirhut bagmati sitamarhi",
    footerContent: `
<h2>Flower Delivery in Sheohar — Bihar's Smallest District in the Nepal Border's Maithil Heartland</h2>
<p>Sheohar, in the Maithili-speaking Tirhut belt of northern Bihar near the Nepal border, is the headquarters of Sheohar district — Bihar's smallest district (446 km²) and one of its most densely populated. Sheohar district was carved from Sitamarhi district in 1994 and is essentially a sub-district of the broader Sitamarhi-Mithila cultural zone. The district is deeply embedded in the Mithila cultural tradition — Maithili language, Madhubani painting (where women traditionally paint fish, elephants, and Ramayana scenes on walls and floors), and the Sita-Janaka heritage of neighbouring Sitamarhi are cultural touchstones. The Bagmati River flows near the district's border. The Nepal border proximity means significant cross-border trade, cultural ties, and the migratory labour circuit of north Bihar's young men to the Gulf and Indian metros. The district's primarily agricultural economy grows paddy, wheat, and sugarcane.</p>
<p>RedHeart delivers flowers across Sheohar — Main Market, Tariyani area, Piprahi area, Sheohar Block area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheohar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tariyani, Piprahi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Sheohar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sheohar for orders placed before 3 PM." },
      { question: "Are flowers for Chhath Puja available in Sheohar?", answer: "Yes, Chhath Puja is one of Bihar's biggest festivals. Lotus flowers and Chhath Puja sets are available for same-day delivery in Sheohar." },
      { question: "Do you deliver flowers same day in Sheohar?", answer: "Yes, same-day delivery is available across Sheohar for orders placed before 3 PM." }
    ]
  },

  "barpeta": {
    cityName: "Barpeta",
    metaTitle: "Flower Delivery in Barpeta | Vaishnavite Assam | RedHeart",
    metaDescription: "Order flowers in Barpeta, Assam. Same-day delivery near Brahmaputra & across Barpeta. From ₹399.",
    h1: "Online Flower Delivery in Barpeta",
    metaKeyword: "flower delivery barpeta, online flowers barpeta assam, florist barpeta, flowers barpeta sattra vaishnavite sankardeva barpeta satra brahmaputra bengali assamese",
    footerContent: `
<h2>Flower Delivery in Barpeta — Sankardeva's Vaishnavite Sattra and the Brahmaputra's Mound Temples</h2>
<p>Barpeta, on the plains of western Assam near the Brahmaputra, is the headquarters of Barpeta district — one of Assam's most important Vaishnavite religious centres. The Barpeta Satra (monastery) — founded by Madhavdeva (the chief disciple of Sankardeva, the 15th–16th century saint-reformer who transformed Assam's religious and cultural landscape through the Neo-Vaishnavism movement) — is one of the most important sattra (Assamese Vaishnavite monastery) in all of Assam. The Barpeta Satra is famous for its dramatic annual Holi celebration (the Barpeta Doul Utsav / Dol Mahotsav) where tens of thousands of devotees celebrate with colour and devotional music, and for its kirtan (devotional singing) tradition. Barpeta district has a significant Bangladeshi-origin Muslim population (one of Assam's contested demographic realities). The Manas Tiger Reserve (UNESCO World Heritage Site) borders the district to the north.</p>
<p>RedHeart delivers flowers across Barpeta — Main Market, Barpeta Satra area, Pathsala area, Sarbhog area, Bajali area, and Station Road. Our range includes roses, marigolds, tulasi, and seasonal Assam bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barpeta, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Barpeta Satra, Pathsala, Sarbhog, Bajali, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tulasi, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Barpeta Satra Dol Utsav (Holi) available?", answer: "Yes, the Barpeta Doul Utsav (one of Assam's most spectacular Holi celebrations at the Vaishnavite Barpeta Satra) is the biggest event in Barpeta. Marigold garlands and festive Holi flower sets are available." },
      { question: "Can I get birthday flowers in Barpeta?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Barpeta for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Barpeta?", answer: "Yes, same-day delivery is available across Barpeta for orders placed before 3 PM." }
    ]
  },

  "nalbari": {
    cityName: "Nalbari",
    metaTitle: "Flower Delivery in Nalbari | Assam | RedHeart",
    metaDescription: "Order flowers in Nalbari, Assam. Same-day delivery near Brahmaputra Valley & across Nalbari. From ₹399.",
    h1: "Online Flower Delivery in Nalbari",
    metaKeyword: "flower delivery nalbari, online flowers nalbari assam, florist nalbari, flowers nalbari brahmaputra beki river bodo barak assamese guwahati proximity education",
    footerContent: `
<h2>Flower Delivery in Nalbari — Beki River's Brahmaputra Valley and Guwahati's Educational Satellite District</h2>
<p>Nalbari, in the Brahmaputra plains of western Assam near Guwahati, is the headquarters of Nalbari district — a district of fertile alluvial plains, rice cultivation, and growing educational and healthcare infrastructure in the Guwahati metro sphere. The Beki River (a significant Brahmaputra tributary flowing from the Bhutan hills) bounds the district to the north, providing irrigation and fishing resources. Nalbari has a traditional weaving sector (Assamese mekhela-chador silk and cotton weaving by local Assamese and Bodo women weavers). The district has a diverse population including Assamese Hindus, Bodo tribal communities, and Nepali communities. The Nalbari town's educational institutions (medical college, engineering college) and its relative proximity to Guwahati (80 km) make it a bedroom district for the Guwahati metro workforce. The Doul Govinda temple at Tihu (Nalbari) is a significant Vaishnavite site.</p>
<p>RedHeart delivers flowers across Nalbari — Main Market, Tihu area, Mukalmua area, Barkhetri area, Barbhag area, and Station Road. Our range includes roses, marigolds, seasonal Assam bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalbari, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tihu, Mukalmua, Barkhetri, Barbhag, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Nalbari?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nalbari for orders placed before 3 PM." },
      { question: "Are flowers for Bihu available in Nalbari?", answer: "Yes, Bihu is the biggest festival in Nalbari. Marigold garlands and Bihu festive flower sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Nalbari?", answer: "Yes, same-day delivery is available across Nalbari for orders placed before 3 PM." }
    ]
  },

  "tikamgarh": {
    cityName: "Tikamgarh",
    metaTitle: "Flower Delivery in Tikamgarh | Bundelkhand MP | RedHeart",
    metaDescription: "Order flowers in Tikamgarh, MP. Same-day delivery near Orchha & across Tikamgarh. From ₹399.",
    h1: "Online Flower Delivery in Tikamgarh",
    metaKeyword: "flower delivery tikamgarh, online flowers tikamgarh madhya pradesh, florist tikamgarh, flowers tikamgarh bundelkhand orchha ram raja temple betwa river chandela",
    footerContent: `
<h2>Flower Delivery in Tikamgarh — Orchha's Ram Raja Temple and the Chandela Dynasty's Bundelkhand Heartland</h2>
<p>Tikamgarh, in the Bundelkhand plateau of Madhya Pradesh near Jhansi and the Uttar Pradesh border, is the headquarters of Tikamgarh district — a district in the ancient Chandela Kingdom's cultural heartland (the same Chandelas who built the Khajuraho temples). The Orchha Ramraja Temple (in Orchha, near Tikamgarh) is the only temple in India where Lord Rama is worshipped as a king (Raja) — with a royal salute and police guard — a tradition since the 17th century Bundela king Madhukar Shah installed the Ram idol. The Orchha Fort complex (on the Betwa River, UNESCO tentative list) is a magnificent 16th–17th century Bundela Rajput palace complex. The Betwa River flows through Tikamgarh district, providing irrigation. Tikamgarh's Bundeli cultural identity — the Bundeli language, folk songs, and the rai dance — is a distinct regional tradition. The district has significant granite and limestone quarrying.</p>
<p>RedHeart delivers flowers across Tikamgarh — Main Market, Orchha area, Niwari area, Jatara area, Palera area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tikamgarh, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Orchha, Niwari, Jatara, Palera, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Orchha Ram Raja temple puja available in Tikamgarh?", answer: "Yes, the Orchha Ram Raja Temple (the only temple where Ram is worshipped as a reigning king with royal salute) is near Tikamgarh. Marigold garlands and Ram puja flower sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Tikamgarh?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Tikamgarh for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Tikamgarh?", answer: "Yes, same-day delivery is available across Tikamgarh for orders placed before 3 PM." }
    ]
  },

  "anakapalli": {
    cityName: "Anakapalli",
    metaTitle: "Flower Delivery in Anakapalli | Visakhapatnam AP | RedHeart",
    metaDescription: "Order flowers in Anakapalli, AP. Same-day delivery near Araku Valley & across Anakapalli. From ₹399.",
    h1: "Online Flower Delivery in Anakapalli",
    metaKeyword: "flower delivery anakapalli, online flowers anakapalli andhra pradesh, florist anakapalli, flowers anakapalli araku valley vizag visakhapatnam tribal agency alluri sitaram",
    footerContent: `
<h2>Flower Delivery in Anakapalli — Araku Valley Coffee Hills and the Alluri Sitarama Raju Tribal Agency</h2>
<p>Anakapalli, in the Visakhapatnam belt of northern coastal Andhra Pradesh, is the headquarters of Anakapalli district — one of Andhra Pradesh's newest districts (created from Visakhapatnam in 2022), covering the Visakhapatnam Agency tribal area and the Araku Valley. The Araku Valley (in Anakapalli district's Eastern Ghats range) — one of India's most scenic hill stations, renowned for its Araku Valley organic coffee (GI-tagged coffee grown by Girijan (tribal) cooperatives with ASHA/GCC assistance, now exported internationally including to Paris where it sells in specialty cafes) — is accessible by the famous Visakhapatnam-Araku mountain train, one of India's most scenic rail journeys. The tribal areas of Anakapalli district are associated with the Rampa Rebellion (1922–24) led by Alluri Sitarama Raju (celebrated Telugu freedom fighter, fictionalized as "RRR"'s Alluri), who organized tribal resistance against British forest regulations. The Borra Caves (Anakapalli district) are India's deepest stalactite-stalagmite caves.</p>
<p>RedHeart delivers flowers across Anakapalli — Main Market, Araku Valley area, Narsipatnam area, Yelamanchili area, Borra Caves area, and Station Road. Our range includes roses, marigolds, jasmine, and AP puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anakapalli, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Araku Valley, Narsipatnam, Yelamanchili, Borra Caves area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, AP puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for an Araku Valley coffee hill resort stay from Anakapalli?", answer: "Yes, Araku Valley (famous for organic tribal coffee, scenic mountain train, and waterfall treks) is in Anakapalli district. Seasonal bouquets for Araku resort gifting are available from Anakapalli." },
      { question: "Can I get birthday flowers in Anakapalli?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Anakapalli for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Anakapalli?", answer: "Yes, same-day delivery is available across Anakapalli for orders placed before 3 PM." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers",
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
        { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
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
