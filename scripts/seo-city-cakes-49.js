// Cakes Batch 49 — 13 cities
// Kerala: Malappuram, Kasaragod, Wayanad (Kalpetta), Idukki (Munnar/Painavu), Pathanamthitta
// Haryana: Rohtak, Hisar, Sirsa, Karnal, Sonipat, Yamunanagar
// Tamil Nadu: Dindigul, Birbhum (Suri) - moved to WB

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "malappuram": {
    cityName: "Malappuram",
    metaTitle: "Cake Delivery in Malappuram | Malabar Muslim Culture Football Kerala | RedHeart",
    metaDescription: "Order cakes online in Malappuram. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Malappuram",
    metaKeyword: "cake delivery malappuram, order cake online malappuram, birthday cake malappuram, custom cake malappuram, same day cake delivery malappuram Malabar Mappila Muslim culture football Tirur betel leaf GI Kadalundi Kerala",
    footerContent: `
<h2>Cake Delivery in Malappuram — Malabar's Mappila Muslim Culture, Football Capital of Kerala, and GI Tirur Betel Leaf</h2>
<p>Malappuram — the district headquarters of Malappuram district in Kerala, one of Kerala's fastest-growing cities and home to one of India's most fascinating cultural traditions — the Mappila Muslim culture of the Malabar region (Malappuram is Kerala's most Muslim-majority district — approximately 70% Muslim, majority Mappila community (also Moplah); the Mappila (Malabar Muslim) culture is one of India's unique syncretic Islamic traditions, developed over 1,400 years of Arab-Kerala seafaring trade contact — the Mappila community were some of the earliest converts to Islam in India (Arab merchants married local women in the Malabar Coast, establishing the Mappila community, believed to predate the Prophet's era — the Cheraman Perumal mosque in Kodungallur is claimed to be India's first mosque, 629 CE); the Mappila Revolt of 1921 (the Moplah Rebellion) — against British land revenue policies and Hindu landlords in the Malabar — was one of the most intense uprisings in the freedom movement with complex communal dimensions; the Tirur Betel Leaf (GI — Malappuram's Tirur area grows one of Kerala's most prized paan leaves; the Tirur betel leaf is famous for its size, tenderness, and distinctive taste; supplied to pan shops across South India); Football is almost a religion in Malappuram — it has the highest density of football clubs of any Indian district; the Manjeri, Tirur, Perinthalmanna towns; the Kadalundi Bird Sanctuary is a significant estuarine bird sanctuary at the Kadalundi River mouth), and a city of Mappila heritage and Kerala's football heartland — is Kerala's most syncretically Mappila-Islamic and footballingly passionate district. From birthday parties in Malappuram to celebration cakes — RedHeart covers all Malappuram zones: Malappuram city, Manjeri, Tirur, Perinthalmanna, Kondotty, Ponnani, Tirurrangadi, Kottakkal.</p>
<p>Our Malappuram cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mappila Culture Football / Tirur Betel GI / Kadalundi Bird Sanctuary / Malabar Muslim Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malappuram, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malappuram city, Manjeri, Tirur, Perinthalmanna, Kondotty, Ponnani, Kottakkal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Malappuram?", answer: "Yes, same-day cake delivery is available across all Malappuram areas — Malappuram city, Manjeri, Tirur, Perinthalmanna, Kondotty, Ponnani, and Kottakkal — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Malappuram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Malappuram delivery." },
      { question: "Do you deliver midnight cakes in Malappuram?", answer: "Yes, midnight birthday cake delivery is available across Malappuram city, Manjeri, and Tirur zones." }
    ]
  },

  "kasaragod": {
    cityName: "Kasaragod",
    metaTitle: "Cake Delivery in Kasaragod | Seven Languages Land of Gods Kerala Karnataka Border | RedHeart",
    metaDescription: "Order cakes online in Kasaragod. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kasaragod",
    metaKeyword: "cake delivery kasaragod, order cake online kasaragod, birthday cake kasaragod, custom cake kasaragod, same day cake delivery kasaragod Seven Languages Saptabhasha Land of Gods Bekal Fort Kerala Karnataka border Chandragiri River",
    footerContent: `
<h2>Cake Delivery in Kasaragod — Seven Languages, Bekal Fort, and Kerala's Northern-Most Linguistic Treasure</h2>
<p>Kasaragod — the northernmost district of Kerala, a unique district that is sometimes called the "Land of Seven Languages" — Malayalam, Kannada, Tulu, Konkani, Beary Bashe (a Mappila Arabic-influenced dialect), Marathi, and Hindi are all spoken in this small district (Kasaragod's multilingual character reflects its position at the border of Kerala and Karnataka — traditionally the Tulu Nadu region (Tulu speakers in the Mangalore-Kasaragod belt) and the Malabar Coast meet here; Beary Bashe is a unique Arabic-influenced dialect spoken by the Beary community of Kasaragod and Dakshina Kannada — a language with no script that has survived for centuries; the Kasaragod district was transferred from what is now Karnataka to Kerala in 1956 during States Reorganisation based on the majority-Malayalam-speaking population; there remains ongoing demand from Kannada speakers for a merger back with Karnataka — creating a unique linguistic politics); the Bekal Fort (the largest fort in Kerala — a 300-year-old circular fort on a promontory jutting into the Arabian Sea at Bekal — one of the most photographed forts in South India; the keyhole-shaped observation tower; the Bekal beach is a beautiful arc of sand overlooking the fort); the Chandragiri Fort (at the mouth of the Chandragiri River); the Ananthapura Lake Temple (the only lake temple in Kerala — Ananthapura Lake, Kumble; believed to be the original seat of Padmanabhaswamy deity before it was moved to Thiruvananthapuram)), and a city of seven languages and Bekal Fort's Arabian Sea panorama — is Kerala's most linguistically diverse and fort-architecturally circular-panoramic district. From birthday parties in Kasaragod to celebration cakes — RedHeart covers all Kasaragod zones: Kasaragod town, Kanhangad, Bekal, Hosdurg, Manjeshwar, Nileshwar, Cheruvathur.</p>
<p>Our Kasaragod cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bekal Fort Arabian Sea / Seven Languages / Ananthapura Lake Temple / Chandragiri Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasaragod, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasaragod town, Kanhangad, Bekal, Hosdurg, Manjeshwar, Nileshwar, Cheruvathur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bekal Fort Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kasaragod?", answer: "Yes, same-day cake delivery is available across all Kasaragod areas — Kasaragod town, Kanhangad, Bekal, Hosdurg, Manjeshwar, and Nileshwar — for orders placed before 3 PM." },
      { question: "Do you have Bekal Fort Arabian Sea-themed cakes?", answer: "Yes! The Bekal Fort (Kerala's largest fort — a 300-year-old circular fort on an Arabian Sea promontory at Bekal; the keyhole-shaped observation tower; one of South India's most photographed sea-fort landscapes) inspires our most fortly circular and Arabian Sea panoramic Kasaragod fondant cakes." },
      { question: "Are eggless cakes available in Kasaragod?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kasaragod delivery." }
    ]
  },

  "kalpetta": {
    cityName: "Kalpetta",
    metaTitle: "Cake Delivery in Kalpetta Wayanad | Edakkal Cave Tribal Chooralmala Kerala | RedHeart",
    metaDescription: "Order cakes online in Kalpetta (Wayanad). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kalpetta (Wayanad)",
    metaKeyword: "cake delivery kalpetta wayanad, order cake online kalpetta, birthday cake wayanad kalpetta, custom cake wayanad, same day cake delivery kalpetta Edakkal Cave Neolithic Chooralmala landslide tribal Kuruma Kurichiya Banasura Sagar Dam Chembra Peak Kerala",
    footerContent: `
<h2>Cake Delivery in Kalpetta (Wayanad) — Edakkal Cave Neolithic Carvings, Tribal Heritage, and Chembra Peak</h2>
<p>Kalpetta — the district headquarters of Wayanad district in Kerala, one of India's most naturally beautiful, tribally rich, and archaeologically ancient districts (the Wayanad district has the highest tribal population in Kerala — Paniya, Kurichiya, Kurumar, Adiya, Kattunaykan, Mullukuruma communities; the Kurichiya tribe's bamboo bow-and-arrow Kurichiyar archery tradition is distinctive; the Edakkal Cave (near Ambalavayal) — one of India's most important prehistoric sites; ancient rock art engravings and carvings in natural cave fissures dating from the Neolithic to the Mesolithic period (3,000-6,000+ years ago); the Edakkal carvings include human figures, animals, and geometric symbols — some of the oldest figurative art in South India; the Banasura Sagar Dam (India's largest earthen dam and one of Asia's largest; 1979 CE; reservoir surrounded by Banasura Sagar hills with Banasura Hills trek); Chembra Peak (2,100 m — Wayanad's highest peak; the heart-shaped Hridayathadakam lake below the peak is one of Kerala's most photographed spots); the Chooralmala Landslide (July 30, 2024 — one of Kerala's deadliest landslides; heavy monsoon rainfall triggered massive landslides in Chooralmala-Mundakkai tea estate area of Wayanad, killing 200+ people — the tragedy has brought Wayanad's vulnerability to climate-change-intensified extreme rainfall events into national consciousness); the Thirunelli Temple (ancient Brahmin temple in the jungle; 'Kashi of Kerala'); the Meenmutty and Soochipara waterfalls), and a city of prehistoric cave art and Western Ghats tribal heritage — is Kerala's most archaeologically ancient and tribally richly forested district. From birthday parties in Kalpetta to celebration cakes — RedHeart covers all Wayanad zones: Kalpetta, Mananthavady, Sulthan Bathery, Ambalavayal, Vythiri, Meppadi, Kalpetta Municipal.</p>
<p>Our Kalpetta/Wayanad cake range: Chocolate, Black Forest, Red Velvet, Mango (hill mango!), Butterscotch, Photo Cakes, Fondant Edakkal Cave Neolithic Art / Chembra Peak Heart Lake / Banasura Sagar Dam Asia Largest / Tribal Wayanad-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalpetta (Wayanad), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalpetta, Mananthavady, Sulthan Bathery, Ambalavayal, Vythiri, Meppadi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Edakkal Cave Fondant, Chembra Heart Lake Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kalpetta (Wayanad)?", answer: "Yes, same-day cake delivery is available across all Wayanad areas — Kalpetta, Mananthavady, Sulthan Bathery, Ambalavayal, Vythiri, and Meppadi — for orders placed before 3 PM." },
      { question: "Do you have Edakkal Cave and Chembra Peak-themed cakes?", answer: "Yes! The Edakkal Cave (Neolithic rock art 3,000-6,000+ years old — prehistoric human-animal carvings in natural cave fissures, among South India's oldest figurative art; Ambalavayal, Wayanad) and Chembra Peak (2,100 m — Wayanad's highest peak; the heart-shaped Hridayathadakam lake below is Kerala's most photographed) inspire our most archaeologically ancient and heart-shapedly romantic Wayanad fondant cakes." },
      { question: "Are eggless cakes available in Kalpetta?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kalpetta (Wayanad) delivery." }
    ]
  },

  "painavu": {
    cityName: "Painavu",
    metaTitle: "Cake Delivery in Painavu Idukki | Idukki Arch Dam Munnar Tea Hills Kerala | RedHeart",
    metaDescription: "Order cakes online in Painavu (Idukki). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Painavu (Idukki)",
    metaKeyword: "cake delivery painavu idukki, order cake online idukki, birthday cake idukki, custom cake painavu idukki, same day cake delivery painavu Idukki Arch Dam double curvature Asia largest Munnar Neelakurinji Periyar Tiger Reserve cardamom tea Kerala",
    footerContent: `
<h2>Cake Delivery in Painavu (Idukki) — Asia's Largest Arch Dam, Munnar Tea Estates, Neelakurinji, and Periyar Tiger Reserve</h2>
<p>Painavu — the district headquarters of Idukki district in Kerala (Painavu was developed as the new administrative capital of Idukki after the Idukki Dam area was notified as a restricted zone; the old Idukki town is near the dam), the highest-altitude district in Kerala and home to some of India's most spectacular natural landscapes (the Idukki Arch Dam (Idukki Dam) — one of Asia's largest arch dams and one of the world's largest double-curvature arch dams; built across the Periyar River between two massive granite walls in a narrow gorge (Kuravan and Kurathi hills — named after a legendary Kuravan and Kurathi couple); the reservoir is surrounded by dense wildlife forests; the Munnar (a Idukki tea town at 1,600 m altitude, junction of three mountain streams Muthirapuzha, Nallathanni, Kundala) — one of India's most scenic hill stations; Munnar's High Range tea plantations (Kanan Devan Hills Plantation — formerly Harrison Malayalam Ltd., Tata Tea now) produce high-altitude Nilgiri-type teas; the Neelakurinji (Strobilanthes kunthianus) — a rare plant that blooms once every 12 years (next 2030), covering the Munnar-Idukki hills in a carpet of purple-blue, after which all Neelakurinji plants die; the Periyar Tiger Reserve (PTR — Thekkady; India's most visited wildlife reserve; the unique experience of watching wildlife from a lake boat inside the sanctuary; elephants come to the lake shore); the Eravikulam National Park (Munnar — home to the endangered Nilgiri Tahr)), and a city of Asia's mightiest arch dam and Neelakurinji purple carpet — is Kerala's most dam-architecturally double-curvature arch and tea-estate-high-altitude scenic district. From birthday parties in Painavu/Idukki to celebration cakes — RedHeart covers all Idukki zones: Painavu, Idukki (old), Munnar, Thodupuzha, Kattappana, Kumily (Thekkady), Adimali.</p>
<p>Our Painavu/Idukki cake range: Chocolate, Black Forest, Red Velvet, Munnar Tea flavour, Cardamom, Butterscotch, Photo Cakes, Fondant Idukki Arch Dam / Neelakurinji Bloom / Munnar Tea / Periyar Tiger Reserve Thekkady-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Painavu (Idukki), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Painavu, Munnar, Thodupuzha, Kattappana, Kumily (Thekkady), Adimali</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Cardamom, Munnar Tea, Idukki Arch Dam Fondant, Neelakurinji Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Painavu (Idukki)?", answer: "Yes, same-day cake delivery is available across all Idukki areas — Painavu, Munnar, Thodupuzha, Kattappana, Kumily (Thekkady), and Adimali — for orders placed before 3 PM." },
      { question: "Do you have Idukki Arch Dam and Neelakurinji-themed cakes?", answer: "Yes! The Idukki Arch Dam (one of Asia's largest double-curvature arch dams — built across the Periyar in a narrow granite gorge; surrounded by forest wildlife) and the Neelakurinji (Strobilanthes kunthianus — a rare plant blooming once every 12 years (next: 2030); it covers the Munnar hills in a carpet of purple-blue before all plants die) inspire our most dam-architecturally arch and 12-year-bloom-purply spectacular Idukki fondant cakes." },
      { question: "Are eggless cakes available in Painavu (Idukki)?", answer: "Yes, all flavours — Chocolate, Cardamom, Munnar Tea, Black Forest, Red Velvet — are available in eggless variants for Idukki delivery." }
    ]
  },

  "pathanamthitta": {
    cityName: "Pathanamthitta",
    metaTitle: "Cake Delivery in Pathanamthitta | Sabarimala Ayyappa Pamba River Kerala | RedHeart",
    metaDescription: "Order cakes online in Pathanamthitta. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pathanamthitta",
    metaKeyword: "cake delivery pathanamthitta, order cake online pathanamthitta, birthday cake pathanamthitta, custom cake pathanamthitta, same day cake delivery pathanamthitta Sabarimala Ayyappa Pamba River Gavi Konni Elephant Centre Rubber Kerala",
    footerContent: `
<h2>Cake Delivery in Pathanamthitta — Sabarimala Ayyappa Pilgrimage, Pamba River, and Kerala's Pilgrim Capital</h2>
<p>Pathanamthitta — the district headquarters of Pathanamthitta district in Kerala, called the "Pilgrim's Capital of Kerala" — home to one of India's most significant religious sites (Sabarimala (the Sabarimala Sri Dharmasastha Temple — dedicated to Lord Ayyappa (Dharmasastha); situated at 914 m altitude on the Sabarimala hill in the Western Ghats; one of the world's most visited pilgrimage sites — approximately 30-50 million pilgrims visit during the annual Mandala-Makara Vilakku season (November-January); the pilgrims (predominantly male, observing 41-day vratha/penance) travel through dense forest, symbolically carrying the Irumudi Kettu (a cloth bundle with offerings) on their heads; the Pamba River (the third-longest river in Kerala; the Sabarimala pilgrimage route crosses the Pamba at Triveni Sangamam); the Ayyappa deity (born of Shiva and Mohini, raised by the Kerala king Rajasekhara of Pandalam — the Pandalam Palace in Pathanamthitta district has historical connections to the Sabarimala legend); the Makaravilakku (the celestial star/star phenomenon on January 14 — Makar Sankranti — at Sabarimala, when a star appears in the sky over Ponnambalamedu Hill); the Gavi (a pristine eco-tourism spot in the high forest, part of the Periyar Tiger Reserve buffer zone); Konni (Kerala government's elephant training and rehabilitation centre); Pathanamthitta is also significant for rubber cultivation and Syrian Christian heritage), and the state's most pilgrim-visited and Pamba-flowing spiritual district — is Kerala's most Sabarimala-pilgrimage-centred and river-crossingly sacred district. From birthday parties in Pathanamthitta to celebration cakes — RedHeart covers all Pathanamthitta zones: Pathanamthitta town, Adoor, Thiruvalla, Ranni, Pandalam, Konni, Kozhencherry, Mallappally.</p>
<p>Our Pathanamthitta cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sabarimala Ayyappa / Pamba River Triveni / Makaravilakku Star / Gavi Forest-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pathanamthitta, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pathanamthitta town, Adoor, Thiruvalla, Ranni, Pandalam, Konni, Kozhencherry</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sabarimala Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pathanamthitta?", answer: "Yes, same-day cake delivery is available across all Pathanamthitta areas — Pathanamthitta town, Adoor, Thiruvalla, Ranni, Pandalam, Konni, and Kozhencherry — for orders placed before 3 PM." },
      { question: "Do you have Sabarimala Ayyappa-themed cakes?", answer: "Yes! The Sabarimala Sri Dharmasastha Temple (situated at 914 m in the Western Ghats; one of the world's most visited pilgrimage sites with 30-50 million pilgrims per season; the 41-day vratha penance; the Pamba River crossing; the Makaravilakku star phenomenon) inspires our most pilgrim-devotionally Ayyappa-themed Pathanamthitta fondant cakes." },
      { question: "Are eggless cakes available in Pathanamthitta?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pathanamthitta delivery." }
    ]
  },

  "rohtak": {
    cityName: "Rohtak",
    metaTitle: "Cake Delivery in Rohtak | NCR Jat Heartland PGIMS Haryana | RedHeart",
    metaDescription: "Order cakes online in Rohtak. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rohtak",
    metaKeyword: "cake delivery rohtak, order cake online rohtak, birthday cake rohtak, custom cake rohtak, same day cake delivery rohtak NCR Jat heartland PGIMS medical Asthal Bohar Jhajjar Haryana textiles",
    footerContent: `
<h2>Cake Delivery in Rohtak — Haryana's Second City, PGIMS Medical Hub, and the Jat Heartland</h2>
<p>Rohtak — the district headquarters of Rohtak district in Haryana, the second most important city in Haryana after Gurugram and part of the National Capital Region (NCR) — one of Haryana's most significant urban and educational centres (the PGIMS (Pt. Bhagwat Dayal Sharma Post Graduate Institute of Medical Sciences) — one of North India's most important public medical institutions and medical colleges, established 1960, in Rohtak — is the main tertiary care hospital for rural Haryana; Rohtak city was historically important as the headquarters of the Jat community (the Jats are the dominant agricultural community in Haryana — known for their land ownership, agriculture, and military service in the Indian Army; the Jat reservation agitation of 2016 (demanding OBC status) centered on Rohtak and disrupted the Delhi-Haryana highway significantly); the Rohtak city historically sits on the boundary between the ancient Haryana (land of Kurus) and the Aravalli foothills; Asthal Bohar industrial area; Jhajjar (adjacent district); the Tilyar Lake and Park in Rohtak is the city's main recreational zone; Rohtak is connected to Delhi by excellent road and rail), and a city of medical excellence and Jat community strength — is Haryana's most NCR-proximate and medical-institutionally PGIMS-prominent second city. From birthday parties in Rohtak to celebration cakes — RedHeart covers all Rohtak zones: Rohtak city, Asthal Bohar, Lakhan Majra, Kalanaur, Maham, Bahadurgarh (Jhajjar border).</p>
<p>Our Rohtak cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rohtak, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rohtak city, Asthal Bohar, Lakhan Majra, Kalanaur, Maham, Bahadurgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rohtak?", answer: "Yes, same-day cake delivery is available across all Rohtak areas — Rohtak city, Asthal Bohar, Lakhan Majra, Kalanaur, Maham, and Bahadurgarh — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Rohtak?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rohtak delivery." },
      { question: "Do you deliver midnight cakes in Rohtak?", answer: "Yes, midnight birthday cake delivery is available across Rohtak city and surrounding zones." }
    ]
  },

  "hisar": {
    cityName: "Hisar",
    metaTitle: "Cake Delivery in Hisar | Steel City of Haryana Cotton Agroha Harappan | RedHeart",
    metaDescription: "Order cakes online in Hisar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hisar",
    metaKeyword: "cake delivery hisar, order cake online hisar, birthday cake hisar, custom cake hisar, same day cake delivery hisar Steel City Haryana cotton market Agroha Harappan dholaviram Firoz Shah Tughlaq Ghaggar River Rajasthan border",
    footerContent: `
<h2>Cake Delivery in Hisar — Steel City of Haryana, Cotton Market, Agroha Harappan Site, and Firoz Shah's Fort</h2>
<p>Hisar — the district headquarters of Hisar district in Haryana, the largest city in Haryana by area and one of the state's most significant commercial and industrial centres — the "Steel City of Haryana" and a major cotton market (the Hisar district is Haryana's largest producer of cotton — the Ghaghar and Dohan rivers support cotton cultivation across the Hisar and adjacent districts; Hisar city has a major cotton market and textile industry; the Haryana Steel Plant (various steel re-rolling and sponge iron plants give Hisar its steel city nickname); the Agroha (near Hisar) — an important ancient and medieval archaeological site; Agroha is the ancestral home of the Aggarwal community (one of India's most significant trading communities — Aggarwals believe they are descended from Agrasen, the legendary king of Agroha who created an equality-based economic system: each of 18 lakh citizens would give one brick and one rupee to any new settler); the Agroha archaeological mound has Harappan-Kushana-Gupta-period excavations; the Firoz Shah's Fort or Hisar-e-Firoza (1354 CE — built by Firoz Shah Tughlaq (1351-1388 CE) who built more structures than any Delhi Sultan — 300 cities, 40 mosques, 30 caravanserais, 200 townships; Hisar town was his personal hunting ground; the fort complex has the Mosque and a pleasure garden remains); the Deer Park (Haryana Agricultural University veterinary campus), and a city of cotton market and Agroha ancestral home — is Haryana's most commercially cotton-dominant and ancestrally Aggarwal historically Agroha-significant city. From birthday parties in Hisar to celebration cakes — RedHeart covers all Hisar zones: Hisar city, Narnaul, Barwala, Hansi (historical city), Adampur, Uklana, Tosham.</p>
<p>Our Hisar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Firoz Shah Fort Hisar-e-Firoza / Agroha Aggarwal Heritage / Cotton Market / Ghaghar River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hisar, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hisar city, Barwala, Hansi, Adampur, Uklana, Tosham</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hisar?", answer: "Yes, same-day cake delivery is available across all Hisar areas — Hisar city, Barwala, Hansi, Adampur, Uklana, and Tosham — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hisar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hisar delivery." },
      { question: "Do you deliver midnight cakes in Hisar?", answer: "Yes, midnight birthday cake delivery is available across Hisar city and surrounding areas." }
    ]
  },

  "sirsa": {
    cityName: "Sirsa",
    metaTitle: "Cake Delivery in Sirsa | Dera Sacha Sauda Cotton Ghaggar Haryana Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Sirsa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sirsa",
    metaKeyword: "cake delivery sirsa, order cake online sirsa, birthday cake sirsa, custom cake sirsa, same day cake delivery sirsa Dera Sacha Sauda cotton Ghaggar River Haryana Punjab Rajasthan border agriculture",
    footerContent: `
<h2>Cake Delivery in Sirsa — Cotton Belt, Ghaggar River Basin, and Haryana's Westernmost City</h2>
<p>Sirsa — the district headquarters of Sirsa district in Haryana, located at the tri-junction of Haryana, Punjab, and Rajasthan — one of Haryana's most agricultural and cotton-producing districts (the Sirsa district is an important cotton-growing district in Haryana — the Ghaggar River (the ancient Saraswati — the "lost river" that flowed through the Harappan heartland; now a seasonal river/flood channel) flows through Sirsa district and provides irrigation water; the Sirsa agricultural economy is significant for cotton, wheat, paddy, and mustard; the Dera Sacha Sauda — a large religious organisation headquartered in Sirsa (the Dera's Gurmeet Ram Rahim Singh was convicted in 2017 in a rape case — triggering massive violent protests from followers in Panchkula and Sirsa that killed 41 people; the Dera has millions of followers across Punjab, Haryana, Rajasthan and beyond); the Sirsa-Hanumangarh corridor is on the historic Punjab-Rajasthan trade route; the Sarswati Nadi (Ghaggar)'s seasonal floods create the Ottu headworks irrigation system; the city is well-connected by road to Ferozepur (Punjab), Bikaner (Rajasthan) and Hisar), and a city of cotton agriculture and Ghaghar river — is Haryana's most westernmost tri-state border and agriculturally cotton-Ghaggar-watered district. From birthday parties in Sirsa to celebration cakes — RedHeart covers all Sirsa zones: Sirsa city, Ellenabad, Dabwali, Nathusari Chopta, Baragudha, Rania.</p>
<p>Our Sirsa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirsa, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirsa city, Ellenabad, Dabwali, Nathusari Chopta, Baragudha, Rania</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sirsa?", answer: "Yes, same-day cake delivery is available across all Sirsa areas — Sirsa city, Ellenabad, Dabwali, Nathusari Chopta, and Rania — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sirsa?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sirsa delivery." },
      { question: "Do you deliver midnight cakes in Sirsa?", answer: "Yes, midnight birthday cake delivery is available across Sirsa city and Ellenabad zones." }
    ]
  },

  "karnal": {
    cityName: "Karnal",
    metaTitle: "Cake Delivery in Karnal | City of Karnas Rice Bowl of Haryana Kalpana Chawla | RedHeart",
    metaDescription: "Order cakes online in Karnal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karnal",
    metaKeyword: "cake delivery karnal, order cake online karnal, birthday cake karnal, custom cake karnal, same day cake delivery karnal Kalpana Chawla birthplace Rice Bowl Haryana Karna Mahabharata dairy National Dairy Research Institute NDRI GT Road",
    footerContent: `
<h2>Cake Delivery in Karnal — Kalpana Chawla's Birthplace, Rice Bowl of Haryana, and NDRI Dairy Research</h2>
<p>Karnal — the district headquarters of Karnal district in Haryana, one of the most historically resonant and agriculturally significant cities in India — birthplace of India's first woman space astronaut (the Battle of Karnal (February 24, 1739) — Nadir Shah of Persia defeated the Mughal Emperor Muhammad Shah in the Battle of Karnal, after which Nadir Shah looted Delhi and took the Peacock Throne and Kohinoor Diamond — one of the most devastating defeats in Mughal history; Karnal (also Karna-al — City of Karna) is associated with Karna of the Mahabharata, who was given this kingdom by Duryodhana when Karna's low birth was challenged during the archery competition; Karna is considered the king/protector of Karnal; the Karna Lake (Karnal Lake) is a scenic lake in the city; the National Dairy Research Institute (NDRI) — one of India's premier dairy science institutions, established in Karnal; the NDRI conducts research on dairy cattle breeding, milk processing, dairy technology; significant for India's dairy industry; Kalpana Chawla (1961/62-2003 — born Karnal; first Indian woman in space and NRI astronaut; died in the Space Shuttle Columbia disaster February 1, 2003 on re-entry; Karnal airport named after her; Kalpana Chawla Government Medical College in Karnal); the Karnal GT Road (Grand Trunk Road) significance as a highway city on the historic Delhi-Lahore route; Karnal is the "Rice Bowl of Haryana" — major basmati rice producer), and a city of Kalpana Chawla's starry legacy and India's dairy research — is Haryana's most historically Nadir-Shah-consequential and space-astronaut-Kalpana Chawla birthplace city. From birthday parties in Karnal to celebration cakes — RedHeart covers all Karnal zones: Karnal city, Nilokheri, Assandh, Gharaunda, Indri, Kunjpura.</p>
<p>Our Karnal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kalpana Chawla Space Shuttle / Karnal Lake Karna Mahabharata / NDRI Dairy / Battle of Karnal 1739-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karnal, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karnal city, Nilokheri, Assandh, Gharaunda, Indri, Kunjpura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kalpana Chawla Space Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karnal?", answer: "Yes, same-day cake delivery is available across all Karnal areas — Karnal city, Nilokheri, Assandh, Gharaunda, and Indri — for orders placed before 3 PM." },
      { question: "Do you have Kalpana Chawla Space Shuttle-themed cakes?", answer: "Yes! Kalpana Chawla (born Karnal — India's first woman in space; Columbia Space Shuttle astronaut who tragically died February 1, 2003 during re-entry; Karnal airport named after her) inspires our most spacially Columbia-shuttle-honoringly Kalpana-memorial Karnal fondant cakes." },
      { question: "Are eggless cakes available in Karnal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Karnal delivery." }
    ]
  },

  "sonipat": {
    cityName: "Sonipat",
    metaTitle: "Cake Delivery in Sonipat | NCR Industrial Sports Hub Haryana | RedHeart",
    metaDescription: "Order cakes online in Sonipat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sonipat",
    metaKeyword: "cake delivery sonipat, order cake online sonipat, birthday cake sonipat, custom cake sonipat, same day cake delivery sonipat NCR industrial hub sports university Rai IMT Kundli Haryana Delhi border Yamuna",
    footerContent: `
<h2>Cake Delivery in Sonipat — NCR Industrial Corridor, Sports Hub of Haryana, and Delhi's Doorstep City</h2>
<p>Sonipat — the district headquarters of Sonipat district in Haryana, an integral part of the National Capital Region (NCR) and one of Haryana's most rapidly industrialising districts — the sports hub of Haryana (the Sonipat district has consistently produced India's most Olympic-quality wrestlers and athletes; the Sports Authority of India (SAI) Centre at Sonipat is one of India's premier wrestling and athletics training facilities; Sonipat is famous for its wrestling culture (Akhara tradition) — many national and international wrestling champions come from Sonipat's villages; the Rai Industrial Model Township (IMT Rai) — one of Haryana's largest planned industrial estates, housing hundreds of manufacturing units in Sonipat district; the Kundli Industrial Area (close to Delhi border at Singhu/Kundli) is another major industrial zone; the Singhu border (Kundli-Manesar-Palwal Expressway passes through Sonipat) became nationally famous during the 2020-2021 farmers' protest against the Farm Laws — farmers from Punjab and Haryana blockaded the Delhi entry for over a year); Sonipat historically (the ancient name Swarnprastha or Shunaprastha — one of the five "Prastha" cities the Pandavas sought from the Kauravas, along with Indraprastha (Delhi), Panipat, Tilpat, Baghpat) is part of Mahabharata heartland, and a city of Olympic-quality wrestlers and NCR industrial corridor — is Haryana's most athletically wrestling-champion-producing and industrially Rai-IMT corridor city. From birthday parties in Sonipat to celebration cakes — RedHeart covers all Sonipat zones: Sonipat city, Gohana, Rai, Kundli, Kharkhoda, Gannaur, Ganaur, Murthal (famous dhaba highway).</p>
<p>Our Sonipat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonipat, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonipat city, Gohana, Rai, Kundli, Kharkhoda, Gannaur, Murthal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sonipat?", answer: "Yes, same-day cake delivery is available across all Sonipat areas — Sonipat city, Gohana, Rai, Kundli, Kharkhoda, Gannaur, and Murthal — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sonipat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sonipat delivery." },
      { question: "Do you deliver midnight cakes in Sonipat?", answer: "Yes, midnight birthday cake delivery is available across Sonipat city and Rai zones." }
    ]
  },

  "yamunanagar": {
    cityName: "Yamunanagar",
    metaTitle: "Cake Delivery in Yamunanagar | Paper City Kalesar Adi Badri Haryana | RedHeart",
    metaDescription: "Order cakes online in Yamunanagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Yamunanagar",
    metaKeyword: "cake delivery yamunanagar, order cake online yamunanagar, birthday cake yamunanagar, custom cake yamunanagar, same day cake delivery yamunanagar Paper City Haryana Kalesar National Park Adi Badri Yamuna River plywood timber Ambala",
    footerContent: `
<h2>Cake Delivery in Yamunanagar — Paper City of Haryana, Kalesar National Park, and Adi Badri Temple</h2>
<p>Yamunanagar — the district headquarters of Yamunanagar district in Haryana, the northernmost district of Haryana bordering Himachal Pradesh and Uttarakhand — known as the "Paper City of Haryana" and the timber-plywood industry hub (the Yamunanagar district (created from Ambala district in 1989) has a significant paper and sugar industry — the Star Paper Mill and other paper mills around Yamunanagar make it a significant paper-producing city in North India; the city also has a major plywood and timber industry (the Yamuna river brings timber from Himachal Pradesh and Uttarakhand forests historically); the Yamunanagar sugar mill is one of Haryana's major sugar factories; the Hathnikund Barrage (at Yamunanagar — the Hathnikund Barrage on the Yamuna River is the key diversion point where the Yamuna's waters are divided between the Western Yamuna Canal (for Haryana/Delhi) and the Eastern Yamuna Canal (for UP); the barrage water level is critical — flash floods downstream in Delhi depend on Hathnikund's water release); the Kalesar National Park (a 46.82 sq km national park and tiger reserve in the Shivalik Hills near Yamunanagar — a significant sal forest ecosystem with leopards, elephants, nilgai, sambar; also a passage for elephants between Uttarakhand and Rajaji); the Adi Badri (a temple complex — 14 Vishnu temples near Yamunanagar — part of the Panch Badri (five Badri shrines) pilgrimage) is nearby in the hills), and a city of Hathnikund Yamuna barrage and Kalesar Wildlife Sanctuary — is Haryana's most northern, paper-industrially significant and Kalesar-ecologically forested district. From birthday parties in Yamunanagar to celebration cakes — RedHeart covers all Yamunanagar zones: Yamunanagar city, Jagadhri, Chhachhrauli, Sadhaura, Bilaspur (Haryana — different from HP and CG), Mustafabad.</p>
<p>Our Yamunanagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yamunanagar, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yamunanagar city, Jagadhri, Chhachhrauli, Sadhaura, Bilaspur (Haryana), Mustafabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Yamunanagar?", answer: "Yes, same-day cake delivery is available across all Yamunanagar areas — Yamunanagar city, Jagadhri, Chhachhrauli, Sadhaura, and Bilaspur (Haryana) — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Yamunanagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Yamunanagar delivery." },
      { question: "Do you deliver midnight cakes in Yamunanagar?", answer: "Yes, midnight birthday cake delivery is available across Yamunanagar city and Jagadhri zones." }
    ]
  },

  "dindigul": {
    cityName: "Dindigul",
    metaTitle: "Cake Delivery in Dindigul | Lock City GI Dindigul Locks Biryani Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Dindigul. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dindigul",
    metaKeyword: "cake delivery dindigul, order cake online dindigul, birthday cake dindigul, custom cake dindigul, same day cake delivery dindigul GI Dindigul Locks Lock City Biryani Palani Murugan Kodaikanal Sirumalai Hills Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Dindigul — GI Dindigul Locks (Lock Capital of India), Famous Biryani, and Kodaikanal Gateway</h2>
<p>Dindigul — the district headquarters of Dindigul district in Tamil Nadu, known nationally for two things — its world-famous locks and its biryani (the Dindigul Lock (GI — Geographical Indication) — Dindigul is the "Lock Capital of India"; the small-scale lock manufacturing industry in Dindigul has been producing hand-made, hand-finished padlocks (and barrel locks) for generations; the GI Dindigul Lock is recognized for its unique hard-turning spring mechanism and sturdy construction; Dindigul lock-makers supply padlocks to banks, railway departments, and government agencies across India; the Dindigul Biryani — the Dindigul style biryani uses Seeraga Samba rice (a short-grain, aromatic rice; much smaller than Basmati) with a tangy-spicy flavour from raw mango (kaalkai) or curd, cooked in a pressure-handi; the Dindigul biryani has its own identity distinct from the Hyderabadi, Lucknowi, or Ambur styles — it is a Tamil Nadu Seeraga Samba-style dum biryani; the Rock Fort (Dindigul Rock Fort — a massive granite boulder monolith rising steeply from the plains; topped with a fort (17th century CE) and a Vinayaka temple); the Palani (a major Murugan temple pilgrimage site — Arulmigu Dhandayuthapani Swamy Temple on a granite hill; second most visited temple in Tamil Nadu after Tirupati) and Kodaikanal (one of South India's most popular hill stations at 2,133 m — in the Palani Hills Anaimalai range; Bryant Park, Kodai Lake, Coaker's Walk, Pillar Rocks) are in Dindigul district), and a city of GI lock craft and Seeraga Samba biryani fame — is Tamil Nadu's most padlock-GI-hardspringed and biryani-Seeraga-Samba-tangy-kaalkai-flavoured district. From birthday parties in Dindigul to celebration cakes — RedHeart covers all Dindigul zones: Dindigul city, Palani, Kodaikanal, Oddanchatram, Natham, Vedasandur, Nilakottai.</p>
<p>Our Dindigul cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Dindigul GI Lock / Dindigul Rock Fort / Palani Murugan Temple / Kodaikanal Hill Station-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dindigul, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dindigul city, Palani, Kodaikanal, Oddanchatram, Natham, Vedasandur, Nilakottai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Dindigul Lock GI Fondant, Palani Murugan Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dindigul?", answer: "Yes, same-day cake delivery is available across all Dindigul areas — Dindigul city, Palani, Kodaikanal, Oddanchatram, Natham, and Vedasandur — for orders placed before 3 PM." },
      { question: "Do you have GI Dindigul Locks and Dindigul Biryani-themed cakes?", answer: "Yes! The GI Dindigul Lock (India's Lock Capital — hand-made padlocks with unique hard-turning spring mechanism; supplied to banks and railways across India) and the Dindigul Biryani (Seeraga Samba short-grain aromatic rice with raw mango/kaalkai tang — the distinctly Tamil Nadu dum biryani style) inspire our most padlock-GI-hardsprung and biryani-Seeraga-Samba-tangy Dindigul fondant cakes." },
      { question: "Are eggless cakes available in Dindigul?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dindigul delivery." }
    ]
  },

  "birbhum": {
    cityName: "Birbhum",
    metaTitle: "Cake Delivery in Birbhum Suri | Shantiniketan Rabindranath Tagore Baul Music West Bengal | RedHeart",
    metaDescription: "Order cakes online in Birbhum (Suri). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Birbhum (Suri)",
    metaKeyword: "cake delivery birbhum suri, order cake online birbhum, birthday cake birbhum, custom cake birbhum suri, same day cake delivery birbhum Shantiniketan Visva Bharati Rabindranath Tagore Nobel Laureate Baul Music Tarapith Dubrajpur Bolpur West Bengal",
    footerContent: `
<h2>Cake Delivery in Birbhum (Suri) — Rabindranath Tagore's Shantiniketan, Baul Music, and Tarapith Temple</h2>
<p>Birbhum — the district headquarters of Birbhum district in West Bengal is Suri city (not Birbhum town), one of India's most culturally extraordinary districts — home to Rabindranath Tagore's legendary Shantiniketan (the Shantiniketan (abode of peace) — the ashram-university founded by Debendranath Tagore (1863) and developed into the Visva Bharati University by Rabindranath Tagore (India's first Nobel laureate in literature — awarded 1913 for Gitanjali); Visva Bharati is India's only central university in rural setting; Tagore's open-air teaching philosophy (classes under trees; no walls; art and nature integrated); the Poush Mela (December) and Basanta Utsav (Holi in spring) at Shantiniketan are famous celebrations; Shantiniketan UNESCO inscribed as a World Heritage Site in 2023 — one of the newest UNESCO sites in India); the Baul music tradition — Birbhum is the heartland of Baul music (the wandering mystic minstrels of Bengal — Bauls sing devotional songs of the Baul tradition, a syncretic spiritual path that transcends Hindu-Muslim divisions; they wear patchwork garments (alkhalla) and play ektara and dotara; UNESCO Intangible Cultural Heritage 2008; Lalon Fakir of Kushtia (now Bangladesh) is the most celebrated Baul saint; Birbhum's Jaydev Kenduli (Jaydeva — composer of Gita Govinda) also hosts a Baul mela; the Tarapith (Birbhum — a major Shakti Peeth and Tantric temple dedicated to Tara; the cremation ground Mahashmashan adjacent to the temple is central to Tantric practices; Vamakhepa the saint lived here), and a city of Nobel laureate's Shantiniketan and mystic Baul traditions — is West Bengal's most Nobel-UNESCO-Shantiniketan and Baul-ecstatically mystic-musical district. From birthday parties in Suri (Birbhum) to celebration cakes — RedHeart covers all Birbhum zones: Suri, Bolpur (Shantiniketan), Rampurhat, Nalhati, Dubrajpur, Siuri, Sainthia.</p>
<p>Our Birbhum cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Shantiniketan UNESCO Tagore / Baul Music Ektara / Tarapith Shakti Peeth / Visva Bharati Open-Air Class-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Birbhum (Suri), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Suri, Bolpur (Shantiniketan), Rampurhat, Nalhati, Dubrajpur, Sainthia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Shantiniketan UNESCO Tagore Fondant, Baul Music Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Birbhum (Suri)?", answer: "Yes, same-day cake delivery is available across all Birbhum areas — Suri, Bolpur (Shantiniketan), Rampurhat, Nalhati, Dubrajpur, and Sainthia — for orders placed before 3 PM." },
      { question: "Do you have Shantiniketan Rabindranath Tagore and Baul Music-themed cakes?", answer: "Yes! The Shantiniketan (UNESCO World Heritage 2023 — Rabindranath Tagore's ashram university; open-air classes under trees; Gitanjali Nobel 1913; Poush Mela; Basanta Utsav Holi) and the Baul music tradition (UNESCO Intangible Heritage 2008 — wandering mystic minstrels of Bengal; syncretic Hindu-Muslim spirituality; ektara and dotara music; patchwork alkhalla garments) inspire our most Nobel-laureate-Shantiniketan and Baul-ecstatically one-stringed Birbhum fondant cakes." },
      { question: "Are eggless cakes available in Birbhum?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Birbhum (Suri) delivery." }
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
