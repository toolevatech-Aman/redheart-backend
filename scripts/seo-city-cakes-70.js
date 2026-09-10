// Cakes Batch 70 — 12 cities
// Jharkhand: Chatra, Khunti, Simdega, Pakur
// AP: Anakapalli, Kakinada, Eluru, Narsapur
// UP: Ballia, Deoria, Mau, Azamgarh (check)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "chatra": {
    cityName: "Chatra",
    metaTitle: "Cake Delivery in Chatra | Jharkhand Tandwa Kolhua Pahari Mandir Damodar Coal | RedHeart",
    metaDescription: "Order cakes online in Chatra. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chatra",
    metaKeyword: "cake delivery chatra, order cake online chatra, birthday cake chatra, custom cake chatra, same day cake delivery Chatra Jharkhand Kolhua Pahari temple Damodar River coal forest Hazaribagh adjacent Mahua",
    footerContent: `
<h2>Cake Delivery in Chatra — Kolhua Pahari Temple, Damodar River, and Jharkhand's Coal & Forest District</h2>
<p>Chatra — the district headquarters of Chatra district in Jharkhand (central Jharkhand; Damodar River; carved from Hazaribagh district in 1991), a forested plateau district with religious significance and coal reserves (the Kolhua Pahari Temple (Kolhua Pahari — a hill temple complex near Chatra; the Kolhua Pahari temple is a popular pilgrimage site for the Chatra region; the hill overlooks Chatra town; the temple draws devotees particularly during Navratri and Shravana; the Kolhua Pahari area has tribal and forest communities in the adjoining areas); the Damodar River (the Damodar — one of Jharkhand's major rivers — rises near Chatra-Hazaribagh area and flows east through the Jharkhand-West Bengal industrial belt; the Damodar Valley Corporation (DVC) dams are downstream; the Damodar is sometimes called the "Sorrow of Bengal" due to its historic flooding; the upper Damodar near Chatra is the source zone); the coal and forest resources (Chatra district has coal deposits; the district is largely forested — Sal and teak forests; the forest economy provides mahua flower, kendu leaf, and timber to tribal communities; the Chatra region has Adivasi Oraon and Munda communities), and a city of Kolhua Pahari temple and Damodar River source-zone coal-forest — is Jharkhand's most Kolhua-Pahari-temple and Damodar-source Chatra. From birthday parties in Chatra to celebration cakes — RedHeart covers all areas: Chatra city, Simaria, Tandwa, Gidhaur, Kunda (Chatra), Hunterganj.</p>
<p>Our Chatra cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chatra, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chatra city, Simaria, Tandwa, Gidhaur, Hunterganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chatra?", answer: "Yes, same-day cake delivery is available across Chatra city, Simaria, Tandwa, Gidhaur, and Hunterganj for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chatra?", answer: "Yes, all flavours are available in eggless variants for Chatra delivery." },
      { question: "Do you deliver midnight cakes in Chatra?", answer: "Yes, midnight birthday cake delivery is available across Chatra city zones." }
    ]
  },

  "khunti": {
    cityName: "Khunti",
    metaTitle: "Cake Delivery in Khunti | Jharkhand Birsa Munda Birthplace Ulgulan Revolt Munda | RedHeart",
    metaDescription: "Order cakes online in Khunti. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Khunti",
    metaKeyword: "cake delivery khunti, order cake online khunti, birthday cake khunti, custom cake khunti, same day cake delivery Khunti Jharkhand Birsa Munda birthplace Ulgulan revolt Munda tribal Subarnarekha River Ranchi adjacent",
    footerContent: `
<h2>Cake Delivery in Khunti — Birsa Munda's Homeland (Ulgulan), Munda Tribal Heritage, and Subarnarekha River</h2>
<p>Khunti — the district headquarters of Khunti district in Jharkhand (central Jharkhand; Subarnarekha River; carved from Ranchi district in 2007), the sacred homeland of Birsa Munda — one of India's greatest tribal freedom fighters (the Birsa Munda Ulgulan / Birthplace (Birsa Munda (1875-1900 CE) — a legendary Munda tribal leader and freedom fighter from Ulihatu village in present Khunti district; he is revered as "Bhagwan Birsa" (God Birsa) by the Munda tribal community; Birsa Munda launched the Ulgulan ("Great Tumult / Revolution") — a tribal uprising against both British colonial rule and the landlord system (diku) that was displacing tribal communities from their forest lands; the Ulgulan (1899-1900) mobilized thousands of Munda tribespeople; Birsa was captured by the British and died in Ranchi jail in 1900 at age 25; his birthday (November 15) is Jharkhand's Foundation Day and a national tribal holiday — "Janjatiya Gaurav Diwas"; the Birsa Munda Airport in Ranchi is named after him; his face appears on the ₹100 coin; his birthplace Ulihatu (in Khunti) is a pilgrimage for Jharkhand's tribal people; the Khunti district is the heart of Munda tribal territory); the Subarnarekha River (the Subarnarekha — meaning "Golden Line" — rises near Ranchi and flows through Khunti; it eventually reaches the Bay of Bengal through Odisha and West Bengal), and a city of Birsa Munda birthplace Ulgulan Janjatiya-Gaurav-Diwas and Munda-tribal-homeland — is Jharkhand's most Khunti-Birsa-Munda-Ulgulan and Munda-tribal-Subarnarekha Khunti. From birthday parties in Khunti to celebration cakes — RedHeart covers all areas: Khunti city, Torpa, Murhu, Rania, Karra, Arki.</p>
<p>Our Khunti cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khunti, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khunti city, Torpa, Murhu, Rania, Karra, Arki</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Khunti?", answer: "Yes, same-day cake delivery is available across Khunti city, Torpa, Murhu, Rania, and Karra for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Khunti?", answer: "Yes, all flavours are available in eggless variants for Khunti delivery." },
      { question: "Do you deliver midnight cakes in Khunti?", answer: "Yes, midnight birthday cake delivery is available across Khunti city zones." }
    ]
  },

  "simdega": {
    cityName: "Simdega",
    metaTitle: "Cake Delivery in Simdega | Jharkhand Chhattisgarh Border Koel River Tribal Ho | RedHeart",
    metaDescription: "Order cakes online in Simdega. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Simdega",
    metaKeyword: "cake delivery simdega, order cake online simdega, birthday cake simdega, custom cake simdega, same day cake delivery Simdega Jharkhand Chhattisgarh border Koel River tribal Ho Munda Kondh forests",
    footerContent: `
<h2>Cake Delivery in Simdega — Koel River, Ho-Munda Tribal Homeland, and Jharkhand-Chhattisgarh Border Forests</h2>
<p>Simdega — the district headquarters of Simdega district in Jharkhand (southwestern Jharkhand; Koel River; CG-Odisha border area), a forest district in the tribal heartland of the Chhota Nagpur Plateau (the Koel River (the Koel (South Koel) — a major tributary of the Brahmaputra system in Odisha — rises in the Chhota Nagpur Plateau in Simdega district; the South Koel flows south through Simdega into Odisha where it becomes the Koels tributary of the Brahmaputra-Odisha complex; the Jharkhand-Odisha boundary follows the Koel watershed in this area; the Koel River valley forests are rich in biodiversity); the Ho tribe (the Ho people — one of Jharkhand's major tribal groups — are concentrated in Simdega, Singhbhum, and adjacent areas; the Ho language (an Austroasiatic language of the Munda family) is one of Jharkhand's official languages; the Ho have a distinct traditional governance system (the manki-munda system); the Ho social and religious traditions including the Mage and Karam festivals are vibrant; the Ho are traditionally farmers, forest workers, and skilled craftspeople); the Simdega Christian mission heritage (Simdega has had Christian missionary activity since the 19th century; a significant Christian tribal population in Simdega); the CG-Odisha border forests (Simdega borders both Chhattisgarh and Odisha; the forests are part of the Central India tiger landscape), and a city of Koel River source and Ho-tribe Austroasiatic Munda-language — is Jharkhand's most Simdega-Ho-tribe-Koel and CG-Odisha-border-forest Simdega. From birthday parties in Simdega to celebration cakes — RedHeart covers all areas: Simdega city, Bano, Jaldega, Pakartanr, Thethaitangar, Kolebira.</p>
<p>Our Simdega cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Simdega, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Simdega city, Bano, Jaldega, Pakartanr, Kolebira</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Simdega?", answer: "Yes, same-day cake delivery is available across Simdega city, Bano, Jaldega, Pakartanr, and Kolebira for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Simdega?", answer: "Yes, all flavours are available in eggless variants for Simdega delivery." },
      { question: "Do you deliver midnight cakes in Simdega?", answer: "Yes, midnight birthday cake delivery is available across Simdega city zones." }
    ]
  },

  "pakur": {
    cityName: "Pakur",
    metaTitle: "Cake Delivery in Pakur | Jharkhand Bangladesh Border Rajmahal Hills Santhal Stone | RedHeart",
    metaDescription: "Order cakes online in Pakur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pakur",
    metaKeyword: "cake delivery pakur, order cake online pakur, birthday cake pakur, custom cake pakur, same day cake delivery Pakur Jharkhand Bangladesh border Rajmahal Hills Santhal stone quarrying Brahmaputra WB border",
    footerContent: `
<h2>Cake Delivery in Pakur — Rajmahal Hills, Santhal Tribal Community, and Stone Quarrying District</h2>
<p>Pakur — the district headquarters of Pakur district in Jharkhand (eastern Jharkhand; Bangladesh border / West Bengal border; Rajmahal Hills), a district at the eastern frontier of the Jharkhand plateau with deep Santhal heritage (the Rajmahal Hills (the Rajmahal Hills — in the eastern Chhota Nagpur Plateau, covering Pakur and Sahebganj districts; the Rajmahal Hills are geologically unique — Gondwana-era lava flows; the hills contain Jurassic-era plant fossils; the Rajmahal Hills are the home of the Paharia (Hill Paharia) tribe — PVTG — the oldest inhabitants of this hill zone; the British established Rajmahal as one of Bengal's first capitals (before Murshidabad and Calcutta); the Rajmahal-Sahebganj area is historically significant as the ancient "gateway to Bengal"); the Santhal Community (the Santhal — one of India's largest tribal groups — are concentrated in Pakur and the broader Santhal Parganas division; the Santhal are known for their Sohrai and Khovar painting traditions; the Santhali language (Austroasiatic); the Santhal Rebellion (Hul) of 1855 — led by Sidhu and Kanhu Murmu — was a major anti-British uprising; Pakur is in the historic Santhal Parganas zone); the stone quarrying (Pakur district is known for stone quarrying — the Rajmahal Hills have granite and basalt quarries; the stone is used for railway ballast and construction; Pakur stone quarries employ a large number of labourers), and a city of Rajmahal Hills Santhal Parganas and Stone-quarrying — is Jharkhand's most Pakur-Rajmahal-Hills-Santhal and Stone-quarrying Pakur. From birthday parties in Pakur to celebration cakes — RedHeart covers all areas: Pakur city, Maheshpur, Littipara, Hiranpur, Amrapara, Pakuria.</p>
<p>Our Pakur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pakur, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pakur city, Maheshpur, Littipara, Hiranpur, Amrapara, Pakuria</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pakur?", answer: "Yes, same-day cake delivery is available across Pakur city, Maheshpur, Littipara, Hiranpur, and Amrapara for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Pakur?", answer: "Yes, all flavours are available in eggless variants for Pakur delivery." },
      { question: "Do you deliver midnight cakes in Pakur?", answer: "Yes, midnight birthday cake delivery is available across Pakur city zones." }
    ]
  },

  "anakapalli": {
    cityName: "Anakapalli",
    metaTitle: "Cake Delivery in Anakapalli | AP Borra Caves Anantagiri Hills Gosthani River | RedHeart",
    metaDescription: "Order cakes online in Anakapalli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Anakapalli",
    metaKeyword: "cake delivery anakapalli, order cake online anakapalli, birthday cake anakapalli, custom cake anakapalli, same day cake delivery Anakapalli Andhra Pradesh Borra Caves Anantagiri Hills Gosthani River tribal Visakhapatnam adjacent",
    footerContent: `
<h2>Cake Delivery in Anakapalli — Borra Caves (India's Largest Stalactite Caves), Anantagiri Hills, and Eastern Ghats</h2>
<p>Anakapalli — the district headquarters of Anakapalli district in Andhra Pradesh (north AP; Eastern Ghats; carved from Visakhapatnam district in 2022; Gosthani River), a district containing one of India's most spectacular cave systems (the Borra Caves (Borra Caves — in Anantagiri Hills (Araku Valley area) in Anakapalli district; the Borra Caves (Borra Guhalu) are limestone stalactite-stalagmite caves on the Gosthani River; the caves are believed to be approximately 150 million years old; they are approximately 200 feet deep — the deepest known caves in the Eastern Ghats; the caves have spectacular formations including a Shiva lingam-shaped stalagmite and formations resembling a cow's head (hence the name "Borra" — ox/cow in Telugu); the caves were discovered by William George MacPherson (British geological surveyor) in 1807; the Gosthani River originates from the caves; a major tourist attraction near Araku Valley); the Anantagiri Hills / Araku Valley (Araku Valley — a scenic hill station in the Eastern Ghats; approximately 1,100m altitude; famous for Araku coffee (tribal community coffee); the Valley is home to tribal Kondh and Koya communities; the Araku-Borra section of the Visakhapatnam-Kirandul railway (the Vizag-Araku railway trip is one of India's most scenic — tunnels and ghats)); the Gosthani River (the Gosthani rises in the Borra Caves area and flows to the Bay of Bengal through the Bheemunipatnam area), and a city of Borra Caves 150-million-years stalactite and Araku Valley tribal coffee — is AP's most Borra-Caves-India-largest-Eastern-Ghats and Araku-Valley-coffee-tribal Anakapalli. From birthday parties in Anakapalli to celebration cakes — RedHeart covers all areas: Anakapalli city, Araku Valley, Borra Caves, Bheemunipatnam, Chodavaram, Narsipatnam.</p>
<p>Our Anakapalli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anakapalli, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anakapalli city, Araku Valley, Borra Caves, Bheemunipatnam, Chodavaram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Anakapalli?", answer: "Yes, same-day cake delivery is available across Anakapalli city, Araku Valley, Bheemunipatnam, and Chodavaram for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Anakapalli?", answer: "Yes, all flavours are available in eggless variants for Anakapalli delivery." },
      { question: "Do you deliver midnight cakes in Anakapalli / Araku?", answer: "Yes, midnight birthday cake delivery is available across Anakapalli city zones." }
    ]
  },

  "kakinada": {
    cityName: "Kakinada",
    metaTitle: "Cake Delivery in Kakinada | AP Konaseema Godavari Delta Coconut Oil Heritage | RedHeart",
    metaDescription: "Order cakes online in Kakinada. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kakinada",
    metaKeyword: "cake delivery kakinada, order cake online kakinada, birthday cake kakinada, custom cake kakinada, same day cake delivery Kakinada Andhra Pradesh Konaseema Godavari delta coconut oil ONGC offshore gas Uppada Jamdani",
    footerContent: `
<h2>Cake Delivery in Kakinada — ONGC Offshore Gas Hub, Konaseema Delta, and Uppada Jamdani Silk Sarees</h2>
<p>Kakinada — the district headquarters of Kakinada district in Andhra Pradesh (east AP; Godavari delta; Bay of Bengal), a major coastal city and India's offshore energy hub (the ONGC Offshore Gas (Kakinada is India's premier deep-water and offshore gas exploration hub; the Krishna-Godavari (KG) Basin — off the coast of Kakinada — is India's most productive offshore gas basin; ONGC's KG basin operations are headquartered here; Reliance Industries' KG-D6 block (including the Dhirubhai-1 and Dhirubhai-3 gas fields) was one of India's largest gas discoveries; the Kakinada Port has a dedicated LNG / oil jetty; the Kakinada Special Economic Zone (KSEZ) is a major industrial zone); the Konaseema (the Konaseema region — a riverine delta island system formed by the Godavari and its distributaries in East Godavari; the Konaseema is famous for its coconut groves — the densest concentration of coconut trees in AP; the Konaseema landscapes of coconut palms, canals, and paddy fields are described as "God's Own Country of AP"; a newly formed Konaseema district exists but Kakinada is the key city near it); the Uppada Jamdani Sarees (Uppada — a coastal village near Kakinada; the Uppada Jamdani silk sarees are GI-protected; woven with fine silk with a characteristic buttery texture and traditional motifs; one of AP's finest traditional textiles), and a city of ONGC-KG-Basin-offshore-gas and Konaseema-coconut-delta and Uppada-Jamdani-GI — is AP's most Kakinada-ONGC-KG-Basin and Uppada-Jamdani-GI Kakinada. From birthday parties in Kakinada to celebration cakes — RedHeart covers all areas: Kakinada city, Peddapuram, Samalkot, Ramachandrapuram, Uppada, Tuni.</p>
<p>Our Kakinada cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kakinada, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kakinada city, Peddapuram, Samalkot, Ramachandrapuram, Uppada, Tuni</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kakinada?", answer: "Yes, same-day cake delivery is available across Kakinada city, Peddapuram, Samalkot, Ramachandrapuram, and Uppada for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kakinada?", answer: "Yes, all flavours are available in eggless variants for Kakinada delivery." },
      { question: "Do you deliver midnight cakes in Kakinada?", answer: "Yes, midnight birthday cake delivery is available across Kakinada city zones." }
    ]
  },

  "eluru": {
    cityName: "Eluru",
    metaTitle: "Cake Delivery in Eluru | AP Godavari Delta Pochampally Silk Bhimavaram Adjacent | RedHeart",
    metaDescription: "Order cakes online in Eluru. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Eluru",
    metaKeyword: "cake delivery eluru, order cake online eluru, birthday cake eluru, custom cake eluru, same day cake delivery Eluru Andhra Pradesh West Godavari Pochampally silk Kolleru Lake flamingo Bhimavaram adjacent",
    footerContent: `
<h2>Cake Delivery in Eluru — Kolleru Lake (Ramsar Wetland), Pochampally Silk, and West Godavari Delta</h2>
<p>Eluru — the district headquarters of Eluru district in Andhra Pradesh (central AP; West Godavari; carved from West Godavari district in 2022), a city near one of India's largest freshwater lakes and a major textile tradition (the Kolleru Lake (Kolleru Lake — Asia's largest freshwater lake; at the junction of Krishna and Godavari deltas in AP; a Ramsar Wetland of International Importance; home to one of India's largest concentrations of migratory birds — pelicans, painted storks, flamingos, grey herons, open-bill storks; the lake is approximately 308 sq km (though it has shrunk significantly due to encroachment); the Kolleru Wildlife Sanctuary was established to protect the lake; the Eluru-Bhimavaram area is on the edge of the Kolleru basin); the Pochampally / Ikat Silk Weaving (while Pochampally Ikat's main cluster is in Telangana's Yadadri-Bhongir district, the West Godavari-Eluru area has its own Ikat silk traditions; the Chirala, Bhimavaram, and Undi silk weaving clusters are near Eluru — double ikat weaving is an extraordinary ancient technique); the Eluru's industries (Eluru is a commercial hub of West Godavari; the district produces paddy, sugar, cashew; fishing from the Godavari delta; the Eluru engineering goods industry); the Bhimavaram area (Bhimavaram — in West Godavari / Eluru district; the birthplace of Congress leader S.V. Ranga Rao; the Bhimavaram Pandaga Maidan), and a city of Kolleru Lake Asia's-largest-freshwater-Ramsar and silk-ikat-delta — is AP's most Kolleru-Lake-Ramsar-flamingo and delta-silk Eluru. From birthday parties in Eluru to celebration cakes — RedHeart covers all areas: Eluru city, Bhimavaram, Narsapur, Tanuku, Jangareddigudem, Undi.</p>
<p>Our Eluru cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru city, Bhimavaram, Narsapur, Tanuku, Jangareddigudem, Undi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Eluru?", answer: "Yes, same-day cake delivery is available across Eluru city, Bhimavaram, Narsapur, Tanuku, and Jangareddigudem for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Eluru?", answer: "Yes, all flavours are available in eggless variants for Eluru delivery." },
      { question: "Do you deliver midnight cakes in Eluru?", answer: "Yes, midnight birthday cake delivery is available across Eluru city zones." }
    ]
  },

  "ballia": {
    cityName: "Ballia",
    metaTitle: "Cake Delivery in Ballia | UP Mangal Pandey Ganga Saryu 1942 Revolt Freedom | RedHeart",
    metaDescription: "Order cakes online in Ballia. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ballia",
    metaKeyword: "cake delivery ballia, order cake online ballia, birthday cake ballia, custom cake ballia, same day cake delivery Ballia UP Mangal Pandey Ganga Saryu 1942 Revolt Baghi Ballia independence Bihar border",
    footerContent: `
<h2>Cake Delivery in Ballia — Mangal Pandey's Homeland, "Baghi Ballia" 1942 Revolt, and Ganga-Saryu Confluence</h2>
<p>Ballia — the district headquarters of Ballia district in Uttar Pradesh (eastern UP; Bihar border; Ganga-Saryu confluence), a district with deep freedom-fighter heritage — from 1857 to 1942 (the Mangal Pandey and 1857 Connection (Mangal Pandey (c. 1827-1857 CE) — the Indian soldier widely credited with firing the first shot of the 1857 Sepoy Mutiny (Indian Rebellion of 1857); Mangal Pandey was from Nagwa village in the then-Ballia area (now some debate but Ballia claim is strong); he served in the 34th Bengal Native Infantry of the British East India Company at Barrackpore; on March 29, 1857, he attacked British officers at Barrackpore and was captured and hanged on April 8, 1857; the 1857 uprising that followed became a landmark in India's independence history; Mangal Pandey is commemorated in Ballia with a memorial); the "Baghi Ballia" 1942 (Ballia earned the title "Baghi Ballia" (Rebellious Ballia) during the Quit India Movement of 1942; the people of Ballia expelled British administrators and established self-rule for several days in August 1942 — before the British retook the district with military force; this brief moment of independence made Ballia famous; the 1942 uprising leader Chittu Pandey of Ballia; the Ballia Rebellion is celebrated annually); the Ganga-Saryu confluence (the Ganga and Saryu (Ghaghra) rivers meet in Ballia district — the Saryu joins the Ganga at Siyaram Dham / Dohrighat area), and a city of Mangal Pandey 1857 and Baghi Ballia 1942-Quit India self-rule — is UP's most Mangal-Pandey-1857 and Baghi-Ballia-1942-rebellion Ballia. From birthday parties in Ballia to celebration cakes — RedHeart covers all areas: Ballia city, Rasra, Bansdih, Bairia, Sikandarpur, Maniyar.</p>
<p>Our Ballia cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballia, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballia city, Rasra, Bansdih, Bairia, Sikandarpur, Maniyar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ballia?", answer: "Yes, same-day cake delivery is available across Ballia city, Rasra, Bansdih, Bairia, and Sikandarpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ballia?", answer: "Yes, all flavours are available in eggless variants for Ballia delivery." },
      { question: "Do you deliver midnight cakes in Ballia?", answer: "Yes, midnight birthday cake delivery is available across Ballia city zones." }
    ]
  },

  "deoria": {
    cityName: "Deoria",
    metaTitle: "Cake Delivery in Deoria | UP Saryu River Gorakhpur Adjacent Nepal Border | RedHeart",
    metaDescription: "Order cakes online in Deoria. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Deoria",
    metaKeyword: "cake delivery deoria, order cake online deoria, birthday cake deoria, custom cake deoria, same day cake delivery Deoria UP Saryu Ghaghra River Gorakhpur adjacent Bihar border sugarcane agricultural",
    footerContent: `
<h2>Cake Delivery in Deoria — Saryu River Plains, Gorakhpur Adjacent, and Eastern UP's Sugarcane Belt</h2>
<p>Deoria — the district headquarters of Deoria district in Uttar Pradesh (eastern UP; Bihar border; Saryu / Ghaghra River), a densely populated agricultural district in the sugarcane belt of eastern UP (the Saryu (Ghaghra) River (the Saryu — also called Ghaghra in UP — flows along the Deoria district's northern boundary with Bihar; the Saryu is the sacred river of Ayodhya — "Saryu Ki Dhaar" — on whose banks Ram returned and attained Jal-Samadhi; the river flows from Nepal's Himalayan foothills into Bihar and UP; the Ghaghra-Saryu provides irrigation to Deoria's fields); the Sugarcane and Sugar Industry (Deoria district is in UP's eastern sugarcane belt — one of India's most productive sugarcane zones; several sugar mills operate in Deoria; the district produces paddy, wheat, and sugarcane; the economy is primarily agricultural); the Deoria's borders with Bihar (the Deoria-Bihar border in this region is the Saryu/Ghaghra River; the Siwanpur border area; the Deoria-Chhapra (Bihar) connectivity); the Gorakhpur adjacency (Deoria district is adjacent to Gorakhpur — the divisional headquarters; Gorakhpur's Gorakhnath Temple's influence extends into Deoria), and a city of Saryu River Gorakhpur-adjacent and eastern-UP sugarcane-belt — is UP's most Deoria-Saryu-Ghaghra and sugarcane-sugar-mill Deoria. From birthday parties in Deoria to celebration cakes — RedHeart covers all areas: Deoria city, Lar, Rampur Karkhana, Pathardeva, Salempur, Bhatpar Rani.</p>
<p>Our Deoria cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoria, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoria city, Lar, Rampur Karkhana, Pathardeva, Salempur, Bhatpar Rani</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Deoria?", answer: "Yes, same-day cake delivery is available across Deoria city, Lar, Rampur Karkhana, Pathardeva, and Salempur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Deoria?", answer: "Yes, all flavours are available in eggless variants for Deoria delivery." },
      { question: "Do you deliver midnight cakes in Deoria?", answer: "Yes, midnight birthday cake delivery is available across Deoria city zones." }
    ]
  },

  "mau": {
    cityName: "Mau",
    metaTitle: "Cake Delivery in Mau | UP Powerloom Handloom Saryu Ghaghra River Azamgarh Adjacent | RedHeart",
    metaDescription: "Order cakes online in Mau. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mau",
    metaKeyword: "cake delivery mau, order cake online mau, birthday cake mau, custom cake mau, same day cake delivery Mau UP powerloom handloom Saryu Ghaghra Tamsa River Azamgarh adjacent Bihar border textile",
    footerContent: `
<h2>Cake Delivery in Mau — Powerloom & Handloom Industry, Tamsa River, and Eastern UP's Textile Heritage</h2>
<p>Mau — the district headquarters of Mau district in Uttar Pradesh (eastern UP; Tamsa River; Bihar border; between Azamgarh and Ballia), a district with a strong handloom and powerloom textile tradition (the Mau Powerloom and Handloom Industry (Mau — a major textile manufacturing centre of eastern UP; the Mau district has one of UP's largest concentrations of handlooms and powerlooms; the Mau weavers are known for producing sarees, dress materials, and fabric using cotton and silk; the traditional "Mau" or "Maunath Bhanjan" sarees; the Mau-Azamgarh area is part of eastern UP's cottage textile belt; several thousand looms operate in and around Mau; the textile industry provides livelihood to a significant part of Mau's population; the Mau textile market is an important wholesale hub for eastern UP); the Tamsa River (the Tamsa — also called Tons — flows through Mau district; the Tamsa is a Ganga tributary; in the Ramayana, the sage Valmiki's ashram was on the banks of the Tamsa; "Tamsa Nadi" is associated with the beginning of the Ramayana — the first shloka was composed here by Valmiki after witnessing a krauncha bird being killed by a hunter); the Maunath Bhanjan (the old name of Mau is Maunath Bhanjan — from the story of the Maunvrat (Vow of Silence) being broken), and a city of Powerloom-handloom textile and Tamsa River Valmiki-Ramayana-first-shloka — is UP's most Mau-powerloom-handloom and Tamsa-Valmiki-first-shloka Mau. From birthday parties in Mau to celebration cakes — RedHeart covers all areas: Mau city (Maunath Bhanjan), Ghosi, Madhuban, Kopaganj, Dohrighat, Muhammadabad (Mau).</p>
<p>Our Mau cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mau, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mau city, Ghosi, Madhuban, Kopaganj, Dohrighat, Muhammadabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mau?", answer: "Yes, same-day cake delivery is available across Mau city, Ghosi, Madhuban, Kopaganj, and Dohrighat for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mau?", answer: "Yes, all flavours are available in eggless variants for Mau delivery." },
      { question: "Do you deliver midnight cakes in Mau?", answer: "Yes, midnight birthday cake delivery is available across Mau city zones." }
    ]
  },

  "azamgarh": {
    cityName: "Azamgarh",
    metaTitle: "Cake Delivery in Azamgarh | UP Black Pottery Nirala Kaafia Tamsa Ghaghra | RedHeart",
    metaDescription: "Order cakes online in Azamgarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Azamgarh",
    metaKeyword: "cake delivery azamgarh, order cake online azamgarh, birthday cake azamgarh, custom cake azamgarh, same day cake delivery Azamgarh UP Black pottery Azamgarhi idols Tamsa River Nirala poet Kaafia cultural",
    footerContent: `
<h2>Cake Delivery in Azamgarh — Azamgarhi Black Pottery, Poet Nirala's Hometown, and Tamsa River Cultural Heritage</h2>
<p>Azamgarh — the district headquarters of Azamgarh district in Uttar Pradesh (eastern UP; Tamsa River; Bihar-adjacent), a cultural and literary heartland of eastern UP with a distinctive craft tradition (the Azamgarhi Black Pottery / Bhagwanpur Clay Idols (Nizamabad — a town in Azamgarh district — is famous for "black pottery": a unique black-glazed terracotta tradition using local black clay; the Nizamabad black pottery produces water vessels, decorative items, and ritual objects with a distinctive metallic black finish; it is one of UP's notable GI-protected crafts; the Bhagwanpur area in Azamgarh is known for clay idol making for Durga Puja and other festivals); the Literary Heritage (Azamgarh has an outstanding literary and cultural tradition; Sooryakant Tripathi "Nirala" (Suryakant Tripathi; 1896-1961) — one of Hindi literature's greatest poets, a leader of the Chhayavad school; he was born in Unnao but spent years in the Azamgarh-Allahabad world; the Azamgarh area was the birthplace of other significant Urdu and Hindi writers; the Shibli National College in Azamgarh — a nationally known institution for Urdu literature and Islamic studies; the Kaafia (mushaira) tradition in Azamgarh); the Tamsa River (the Tamsa flows through Azamgarh; the Tamsa is associated with the Ramayana — Valmiki composed the first shloka on the Tamsa's banks), and a city of Nizamabad Black Pottery GI and Shibli-National-College Urdu-heritage — is UP's most Nizamabad-Black-Pottery-GI and Shibli-College-Urdu Azamgarh. From birthday parties in Azamgarh to celebration cakes — RedHeart covers all areas: Azamgarh city, Nizamabad, Phoolpur (AZG), Lalganj (AZG), Mehnagar, Atraulia.</p>
<p>Our Azamgarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Azamgarh, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Azamgarh city, Nizamabad, Phoolpur (AZG), Lalganj (AZG), Mehnagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Azamgarh?", answer: "Yes, same-day cake delivery is available across Azamgarh city, Nizamabad, Phoolpur, Lalganj, and Mehnagar for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Azamgarh?", answer: "Yes, all flavours are available in eggless variants for Azamgarh delivery." },
      { question: "Do you deliver midnight cakes in Azamgarh?", answer: "Yes, midnight birthday cake delivery is available across Azamgarh city zones." }
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
