// Cakes Batch 46 — 13 cities
// Kerala: Palakkad, Kannur, Malappuram, Kottayam, Idukki (Munnar area), Wayanad (Kalpetta)
// Tamil Nadu: Thanjavur, Tirunelveli, Tirupur, Tiruchirappalli (check - done?), Erode
// Karnataka: Dakshina Kannada (Mangaluru - done?), Udupi, Gadag
// MP: Ujjain (done?), Gwalior (done?)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "palakkad": {
    cityName: "Palakkad",
    metaTitle: "Cake Delivery in Palakkad | Palakkad Gap Western Ghats Kerala | RedHeart",
    metaDescription: "Order cakes online in Palakkad. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Palakkad",
    metaKeyword: "cake delivery palakkad, order cake online palakkad, birthday cake palakkad, custom cake palakkad, same day cake delivery palakkad Palakkad Gap Western Ghats Tipu Sultan Fort Nelliyampathy Hills Silent Valley National Park Tamil Nadu corridor Kerala",
    footerContent: `
<h2>Cake Delivery in Palakkad — Palakkad Gap's Western Ghats Pass, Silent Valley, and Tipu Sultan's Fort</h2>
<p>Palakkad (Palghat) — the district headquarters of Palakkad district in Kerala, the "Gateway of Kerala" — a city that owes its unique historical and climatic significance to a geological accident: the Palakkad Gap (Palghat Pass — a natural break in the Western Ghats mountain range between Kerala and Tamil Nadu; the gap is 40 km wide and is the lowest point in the Western Ghats for hundreds of kilometres; it is the major geographical corridor through which road/rail/river communication flows between Kerala and Tamil Nadu; the gap dramatically affects both states' climate — Palakkad city receives far less rainfall than the rest of Kerala due to the rain shadow effect of the Ghats; the gap also allows hot dry winds from the Tamil plains to blow into Kerala during summer; Tipu Sultan captured Palakkad Fort (the "Hyder Ali Fort") from the Malabar Rajas in 1766-67 — the fort (built 1766 CE) is the best-preserved fort in Kerala, now an ASI monument in the city centre; the Silent Valley National Park (Palakkad district, Mannarghat — protected since 1980 after the famous Silent Valley Project controversy in the 1970s-80s, which was India's first major environmental conservation movement) contains the last significant tract of primary tropical rainforest in southern India, with lion-tailed macaques (endangered), hornbills, and 1000+ plant species; the Nelliyampathy Hills (Palakkad district) are a significant coffee-tea hill area; the Malampuzha Dam and Gardens (Palakkad) is Kerala's largest earth dam; the Parambikulam Tiger Reserve (Palakkad-Thrissur-Tamil Nadu border) is a significant wildlife sanctuary; the "Palakkad Iyers" — the Tamil Brahmin community who settled in Palakkad for centuries — are culturally notable), and a city of Western Ghats gap and Silent Valley — is Kerala's most geologically gap-significant and ecologically last-rainforest-primary district. From birthday parties in Palakkad to celebration cakes — RedHeart covers all Palakkad zones: Palakkad city, Ottapalam, Shoranur, Mannarkkad, Chittur, Alathur, Thrithala.</p>
<p>Our Palakkad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Palakkad Gap Western Ghats / Tipu Sultan Fort / Silent Valley Lion Tailed Macaque / Malampuzha Dam-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palakkad, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palakkad city, Ottapalam, Shoranur, Mannarkkad, Chittur, Alathur, Thrithala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Silent Valley Fondant, Palakkad Gap Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Palakkad?", answer: "Yes, same-day cake delivery is available across all Palakkad areas — Palakkad city, Ottapalam, Shoranur, Mannarkkad, Chittur, and Alathur — for orders placed before 3 PM." },
      { question: "Do you have Silent Valley National Park and Palakkad Gap-themed cakes?", answer: "Yes! Silent Valley National Park (India's first major environmental conservation movement in the 1970s-80s saved the last significant primary tropical rainforest in South India — home to endangered lion-tailed macaques) and the Palakkad Gap (the 40km-wide geological break in the Western Ghats that shapes both Kerala and Tamil Nadu's climate and history) inspire our most ecologically primary-forest and geologically Ghats-breaking Palakkad fondant cakes." },
      { question: "Are eggless cakes available in Palakkad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Palakkad delivery." }
    ]
  },

  "kannur": {
    cityName: "Kannur",
    metaTitle: "Cake Delivery in Kannur | Theyyam Ritual Art Malabar Weaving Cannanore Kerala | RedHeart",
    metaDescription: "Order cakes online in Kannur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kannur",
    metaKeyword: "cake delivery kannur, order cake online kannur, birthday cake kannur, custom cake kannur, same day cake delivery kannur Theyyam ritual performance art Kerala Malabar handloom weaving Cannanore Political Thalassery Biryani Kannur Fort",
    footerContent: `
<h2>Cake Delivery in Kannur — Theyyam Ritual Art, Malabar Handloom Weaving, and the Political Heartland of Kerala</h2>
<p>Kannur (Cannanore) — the district headquarters of Kannur district in Kerala, one of the most culturally unique cities in India — home to the extraordinary Theyyam ritual art form and Malabar's handloom heritage (Theyyam (from Daivam = god) — the extraordinary ritual performance art of northern Kerala (Malabar) — is a possession ritual where the performer becomes the deity; Theyyam artists undergo elaborate body painting, wear towering headdresses (some 15-20 feet tall), and are believed to embody the divine spirit during the performance; Theyyam is performed at Kavus (sacred groves) from November to May; there are 400+ forms of Theyyam; the Kandanar Kelan, Muchilot Bhagavathi, and Vishnumurthy are among the most spectacular forms; Theyyam is not just art — the transformed "divine" performer acts as oracle, healer, and intermediary between humans and gods; it is one of India's most immersive religious arts experiences and is on UNESCO's ICH representative list consideration; the Kannur district is also the "Handloom City of Kerala" — the Malabar handloom weavers (especially the Moplahs — Mappila Muslims) produce distinctive cotton handloom sarees and fabrics, particularly the traditional Kannur kaithari (handloom); the Kannur Fort (St. Angelo Fort — built by Portuguese 1505 CE, later Dutch, then British EIC — on a red laterite rocky promontory above the Arabian Sea; ASI monument); the Thalassery (Tellicherry — 22 km from Kannur) is famous for the Thalassery Biryani (Moplah-style Malabar biryani with Khaima/Jeerakasamba rice, distinct from Hyderabadi or Lucknowi — considered one of India's great regional biryanis), and the Thalassery Fort; Kannur is also known as the "Political Capital of Kerala" — the district is a major Communist Party (CPI-M) and RSS stronghold simultaneously, with frequent political tensions; the Kannur circus tradition (Kerala's circus industry was pioneered in Thalassery)), and a city of Theyyam divine possession and Malabar handloom — is Kerala's most ritually possessed and politically combustive district. From birthday parties in Kannur to celebration cakes — RedHeart covers all Kannur zones: Kannur city, Thalassery, Iritty, Payyannur, Taliparamba, Mattannur, Koothuparamba.</p>
<p>Our Kannur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Theyyam Divine Ritual / Kannur Fort Portuguese / Thalassery Moplah Biryani / Malabar Handloom-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kannur, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kannur city, Thalassery, Iritty, Payyannur, Taliparamba, Mattannur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Theyyam Ritual Fondant, Kannur Fort Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kannur?", answer: "Yes, same-day cake delivery is available across all Kannur areas — Kannur city, Thalassery, Iritty, Payyannur, and Taliparamba — for orders placed before 3 PM." },
      { question: "Do you have Theyyam Ritual Art-themed cakes?", answer: "Yes! Theyyam (400+ forms of divine possession ritual art from Kannur-Kasaragod Malabar — where the performer becomes the deity, with towering 15-20 foot headdresses, elaborate body paint, acting as oracle and healer during the Kavu performance; considered India's most immersive religious performance art) inspires our most divinely possessed and ritualistally vibrant Kannur fondant cakes." },
      { question: "Are eggless cakes available in Kannur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kannur delivery." }
    ]
  },

  "kottayam": {
    cityName: "Kottayam",
    metaTitle: "Cake Delivery in Kottayam | Land of Letters Latex Rubber Kerala Backwaters | RedHeart",
    metaDescription: "Order cakes online in Kottayam. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kottayam",
    metaKeyword: "cake delivery kottayam, order cake online kottayam, birthday cake kottayam, custom cake kottayam, same day cake delivery kottayam Land of Letters Latex Rubber Vembanad backwaters Kumarakom Sabarmati Kottayam Kerala",
    footerContent: `
<h2>Cake Delivery in Kottayam — "Land of Letters, Latex, and Lakes," Kumarakom Backwaters, and Rubber Heartland</h2>
<p>Kottayam — the district headquarters of Kottayam district in Kerala, known by the alliterative motto "Land of Letters, Latex, and Lakes" (Letters = Kerala's highest literacy rate was first achieved in Kottayam, historically driven by the Syrian Christian missionary schools; the C.M.S. Press (1820 CE — Church Missionary Society — established in Kottayam) was one of India's first printing presses and printed the first Malayalam-language book, Malayalam Bible, and published the first Malayalam newspaper — making Kottayam the cradle of Malayalam print culture and literacy; Latex = Kottayam is the heart of Kerala's rubber plantation belt; Kerala produces 90%+ of India's natural rubber and Kottayam is the primary rubber market; the Kottayam Rubber Board headquarters and the largest rubber auction markets are here; Lakes = Kottayam is surrounded by the Vembanad Lake/backwater system and the Meenachil River; the Kumarakom Bird Sanctuary and Kumarakom Backwaters (on the eastern shore of Vembanad Lake) is one of India's most renowned eco-tourism destinations — a cluster of small islets with Kerala's most luxurious houseboat and heritage resort belt; the Manarcad Perunnal (the oldest and most significant St. Mary's Church festival in Kerala — held at Manarcad Church on Vembanad Lake, drawing millions of pilgrims) is one of Kerala's major pilgrimages; the Vaikom Sathyagraha (1924 — Gandhian campaign for untouchable communities' right to use public roads near Vaikom Temple, Kottayam district — the first major Satyagraha in Kerala and a significant forerunner of the temple entry movements); Kottayam's Syrian Christian community (St. Thomas Christians — claimed to descend from St. Thomas the Apostle's converts in 52 CE) has some of India's oldest churches (Valiapally, Cheriapally — 16th century Kottayam churches with 16th century Persian crosses)), and a city of Malayalam literacy cradle and rubber heartland — is Kerala's most printedly literary and latexly rubber-tapping district. From birthday parties in Kottayam to celebration cakes — RedHeart covers all Kottayam zones: Kottayam city, Changanacherry, Pala, Ettumanoor, Vaikom, Kumarakom, Erattupetta, Ponkunnam.</p>
<p>Our Kottayam cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kumarakom Backwaters / CMS Press Malayalam Literacy / Vaikom Satyagraha / Rubber Plantation-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kottayam, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kottayam city, Changanacherry, Pala, Ettumanoor, Vaikom, Kumarakom, Ponkunnam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kumarakom Backwater Fondant, Rubber Plantation Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kottayam?", answer: "Yes, same-day cake delivery is available across all Kottayam areas — Kottayam city, Changanacherry, Pala, Ettumanoor, Vaikom, and Kumarakom — for orders placed before 3 PM." },
      { question: "Do you have Kumarakom Backwaters and CMS Press Malayalam Literacy-themed cakes?", answer: "Yes! Kumarakom (Kerala's most luxurious houseboat and eco-resort destination on Vembanad Lake's eastern shore) and the C.M.S. Press, Kottayam (1820 — India's pioneering press that printed the first Malayalam book, Bible, and newspaper — making Kottayam the cradle of Kerala's 100% literacy tradition) inspire our most backwatered and literarily print-pioneering Kottayam fondant cakes." },
      { question: "Are eggless cakes available in Kottayam?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kottayam delivery." }
    ]
  },

  "thanjavur": {
    cityName: "Thanjavur",
    metaTitle: "Cake Delivery in Thanjavur | Brihadeeswarar Temple Chola Kingdom Rice Bowl Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Thanjavur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Thanjavur",
    metaKeyword: "cake delivery thanjavur, order cake online thanjavur, birthday cake thanjavur, custom cake thanjavur, same day cake delivery thanjavur Brihadeeswarar Temple UNESCO Chola Kingdom Big Temple Tanjore Painting Veena Rice Bowl Cauvery",
    footerContent: `
<h2>Cake Delivery in Thanjavur — Brihadeeswarar's UNESCO Big Temple, Chola Kingdom Glory, Tanjore Painting, and Carnatic Music</h2>
<p>Thanjavur (Tanjore) — the district headquarters of Thanjavur district in Tamil Nadu, one of India's greatest centres of art, music, dance, and classical Dravidian architecture — the capital of the medieval Chola Empire (the Brihadeeswarar Temple (Big Temple — 1010 CE, built by Raja Raja Chola I in exactly 16 years — one of the finest achievements of Dravidian architecture; the 216-foot tall vimana (tower) was the tallest structure in India when built; the massive Nandi (bull) monolith — the second largest in India — is at the entrance; the entire complex (inscribed UNESCO 1987 — "Great Living Chola Temples" also includes Gangaikondacholapuram and Airavatesvara at Darasuram) is built with no mortar — pure interlocking granite engineering; the massive granite capstone at the top (which is one single stone weighing ~80 tonnes) was placed via an inclined plane ramp stretching 6 km from a quarry — one of ancient engineering's greatest achievements; the Chola bronzes (Nataraja Shiva — the cosmic dance of destruction and creation — from Chola period 9th-13th century CE — are among the world's greatest art objects; Thanjavur is the primary origin of these bronzes); the Saraswati Mahal Library (in the Thanjavur Maratha Palace) has one of the finest collections of rare Tamil, Sanskrit, Telugu, and Marathi manuscripts; the Tanjore Painting (GI — a distinctive style of South Indian classical painting with gold foil overlay, semi-precious stones, and brilliant colours on board — originated in Thanjavur under Maratha patronage); the Thanjavur is the "Rice Bowl of Tamil Nadu" — the Cauvery delta, watered by the Grand Anaicut (Kallanai Dam — built by Karikala Chola 2nd century CE — one of the oldest water-diversion structures still in use in the world), and a city of Chola bronze masterpieces and oldest water dam — is Tamil Nadu's most classically ancient and Carnatic music central district. From birthday parties in Thanjavur to celebration cakes — RedHeart covers all zones: Thanjavur city, Kumbakonam, Papanasam, Orathanadu, Thiruvaiyaru, Pattukottai, Peravurani.</p>
<p>Our Thanjavur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Brihadeeswarar UNESCO Big Temple / Chola Bronze Nataraja / Tanjore Painting Gold Foil / Kallanai Grand Anaicut-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thanjavur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thanjavur city, Kumbakonam, Papanasam, Thiruvaiyaru, Pattukottai, Peravurani</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Brihadeeswarar Big Temple Fondant, Chola Bronze Nataraja Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Thanjavur?", answer: "Yes, same-day cake delivery is available across all Thanjavur areas — Thanjavur city, Kumbakonam, Papanasam, Thiruvaiyaru, and Pattukottai — for orders placed before 3 PM." },
      { question: "Do you have Brihadeeswarar Big Temple and Chola Bronze Nataraja-themed cakes?", answer: "Yes! The Brihadeeswarar Temple (UNESCO 1987 — 216-foot tower built in 1010 CE by Raja Raja Chola I; the 80-tonne capstone placed via a 6km inclined ramp; no mortar, pure granite) and the Chola Bronze Nataraja (the cosmic dance of Shiva — among the world's greatest art objects, created in Thanjavur's foundries 9th-13th century CE) inspire our most architecturally colossal and metallurgically dancing Thanjavur fondant cakes." },
      { question: "Are eggless cakes available in Thanjavur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Thanjavur delivery." }
    ]
  },

  "tirunelveli": {
    cityName: "Tirunelveli",
    metaTitle: "Cake Delivery in Tirunelveli | Halwa GI Nellai Tamil Nadu Southern Gate | RedHeart",
    metaDescription: "Order cakes online in Tirunelveli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tirunelveli",
    metaKeyword: "cake delivery tirunelveli, order cake online tirunelveli, birthday cake tirunelveli, custom cake tirunelveli, same day cake delivery tirunelveli Tirunelveli Halwa wheat Tambraparani River Nellaiappar Temple Courtallam Waterfalls Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Tirunelveli — GI Tirunelveli Halwa, Tambraparani River, Courtallam Waterfalls, and South Tamil Nadu's Ancient City</h2>
<p>Tirunelveli (Nellai) — the district headquarters of Tirunelveli district in Tamil Nadu, one of the oldest continuously inhabited cities in South India — famous for its extraordinarily sweet GI Halwa (the Tirunelveli Halwa (GI — Geographical Indication) is one of the most famous sweets in Tamil Nadu; it is made from the wheat grown in the red soil of the Tambraparani River basin — the wheat has a special texture from the specific mineral composition of Tambraparani water; the halwa making process involves hours of stirring wheat-based dough with ghee; the texture is unique — neither too hard nor too soft; the Tirunelveli halwa shops (many dating back 100+ years on the old bazaar street) are legendary; the Tambraparani River (the southernmost river in India — originating in the Agastyamalai range of the Western Ghats, flowing 128 km through Tirunelveli and Thoothukudi before meeting the Bay of Bengal; the river is sacred — believed to be the same as the Tamraparni mentioned in Ashokan edicts as one of the rivers where Buddhism had spread) supplies water for Tirunelveli's wheat cultivation and drinking; the Nellaiappar-Kanthimathi Amman Temple (Tirunelveli city centre — one of Tamil Nadu's great Dravidian temple complexes, with a famous musical pillars mandapam where pillars produce musical notes when struck); the Courtallam (Kutralam — "the Spa of South India") waterfalls (60 km from Tirunelveli — the Western Ghats' largest cluster of waterfalls accessible from the plains, famous for their medicinal properties during the southwest monsoon); the Sengottai town in Tirunelveli has the Kalakkad Mundanthurai Tiger Reserve (KMTR — the largest tiger reserve in Tamil Nadu)), and a city of GI wheat halwa and Tambraparani water alchemy — is Tamil Nadu's most halwa-famous and Tambraparani-wheat-blessed southern city. From birthday parties in Tirunelveli to celebration cakes — RedHeart covers all zones: Tirunelveli city, Palayamkottai, Tenkasi, Courtallam, Ambasamudram, Nanguneri, Sankarankovil.</p>
<p>Our Tirunelveli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Tirunelveli Halwa GI / Tambraparani River Wheat / Courtallam Spa Waterfalls / Nellaiappar Musical Pillars-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirunelveli, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirunelveli city, Palayamkottai, Tenkasi, Courtallam, Ambasamudram, Nanguneri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tirunelveli Halwa Tribute, Courtallam Waterfall Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tirunelveli?", answer: "Yes, same-day cake delivery is available across all Tirunelveli areas — Tirunelveli city, Palayamkottai, Tenkasi, Courtallam, and Ambasamudram — for orders placed before 3 PM." },
      { question: "Do you have Tirunelveli Halwa GI and Courtallam Waterfalls-themed cakes?", answer: "Yes! The GI Tirunelveli Halwa (made from Tambraparani River wheat — the unique mineral composition of the Tambraparani water gives it special texture; hours of ghee-stirring; legendary 100-year-old halwa shops in the old bazaar) and Courtallam (the 'Spa of South India' — Tamil Nadu's largest waterfall cluster, famous for monsoon medicinal properties) inspire our most halwa-tributingly sweet and waterfall-medicinally Tirunelveli fondant cakes." },
      { question: "Are eggless cakes available in Tirunelveli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tirunelveli delivery." }
    ]
  },

  "tirupur": {
    cityName: "Tirupur",
    metaTitle: "Cake Delivery in Tirupur | Knitwear Hosiery Dollar City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Tirupur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tirupur",
    metaKeyword: "cake delivery tirupur, order cake online tirupur, birthday cake tirupur, custom cake tirupur, same day cake delivery tirupur knitwear hosiery export Dollar City Bhavani River Kongu Nadu Tamil Nadu garment",
    footerContent: `
<h2>Cake Delivery in Tirupur — Dollar City's Knitwear Export Empire, Kongu Nadu Textile Tradition, and Bhavani River</h2>
<p>Tirupur — the district headquarters of Tirupur district in Tamil Nadu (created from Coimbatore in 2009), the undisputed "Knitwear Capital of India" and one of Asia's largest textile exporting cities — the "Dollar City" (Tirupur earns Tirupur the nickname "Dollar City" because of the massive volume of US Dollar (and other foreign currency) inflow from textile exports — the city exports knitwear/hosiery garments worth ₹30,000-40,000+ crore annually to Europe, USA, and across the world; Tirupur supplies approximately 90% of India's total knitwear exports; T-shirts, sportswear, underwear, children's garments, and winter knitwear are the main products; the cluster employs millions of workers in Tirupur and surrounding areas; the growth of Tirupur's knitwear industry is traced to the Kongu Vellalar Gounder community who transitioned from agriculture to textile entrepreneurship in the 1970s-80s; the Bhavani River (a tributary of Cauvery, originating in the Nilgiris at Mukurthi) flows near Tirupur and provides water for dyeing/processing; the Tirupur Kumaran (Kumaran — an Indian freedom fighter from Tirupur who died in the 1932 Salt Satyagraha march while clutching the Indian flag — immortalised as the "Flag Carrier of India"; he refused to drop the flag even as he was beaten and died; a major statute stands in Tirupur town); the Kongu Nadu (the fertile region of western Tamil Nadu around the Bhavani-Cauvery confluence) is the agricultural heartland of which Tirupur is the industrial capital), and a city of Dollar-earning knitwear and Flag-bearer Kumaran — is Tamil Nadu's most textilely exported and patriotically flag-clutching district. From birthday parties in Tirupur to celebration cakes — RedHeart covers all Tirupur zones: Tirupur city, Dharapuram, Udumalaipettai, Palladam, Kangeyam, Avinashi, Uthukuli, Vellakovil.</p>
<p>Our Tirupur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Tirupur Knitwear Dollar City / Kumaran Flag Carrier Freedom Fighter / Bhavani River Kongu Nadu / Garment Export-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupur city, Dharapuram, Udumalaipettai, Palladam, Kangeyam, Avinashi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Knitwear Dollar City Fondant, Kumaran Flag Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tirupur?", answer: "Yes, same-day cake delivery is available across all Tirupur areas — Tirupur city, Dharapuram, Udumalaipettai, Palladam, and Kangeyam — for orders placed before 3 PM." },
      { question: "Do you have Tirupur Knitwear Dollar City and Kumaran Flag Carrier-themed cakes?", answer: "Yes! Tirupur's 'Dollar City' knitwear empire (₹30,000-40,000+ crore in annual exports — T-shirts, sportswear, and hosiery covering 90% of India's knitwear exports, making the city one of Asia's largest textile export clusters) and Tirupur Kumaran (the freedom fighter who clutched the Indian flag while being beaten to death in the 1932 Salt Satyagraha march — immortalised as India's 'Flag Carrier') inspire our most textilely dollarful and patriotically flag-gripping Tirupur fondant cakes." },
      { question: "Are eggless cakes available in Tirupur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tirupur delivery." }
    ]
  },

  "erode": {
    cityName: "Erode",
    metaTitle: "Cake Delivery in Erode | Turmeric Handloom Periyar Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Erode. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Erode",
    metaKeyword: "cake delivery erode, order cake online erode, birthday cake erode, custom cake erode, same day cake delivery erode Turmeric Capital India handloom Periyar River Bhavani Cauvery jaggery Kongu Nadu Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Erode — Turmeric Capital of India, GI Erode Turmeric, Bhavani River Confluence, and Handloom Hub</h2>
<p>Erode — the district headquarters of Erode district in Tamil Nadu, one of Tamil Nadu's most commercially vital agricultural and textile cities — the "Turmeric City of India" and one of the largest handloom centres in South Asia (the Erode district is the largest producer and trader of turmeric in India — and the Erode turmeric market (Erode Market) is the world's single largest turmeric-trading marketplace; the Erode turmeric (GI) is known for its high curcumin content and deep orange-yellow colour; India is the world's largest producer and exporter of turmeric, and Erode is its primary production and trading hub; turmeric's global rise as a health supplement in the West (for curcumin's anti-inflammatory properties) has made Erode's turmeric market globally significant; the Bhavani River (Cauvery tributary) and the Cauvery-Bhavani confluence (at Bhavani town) is a sacred Triveni Sangam (three river confluence); Sangameshwarar Temple at the Bhavani-Cauvery-Amudha (underground) confluence is a significant pilgrimage; the Erode handloom (polyester, cotton, and saree weaving) industry — Erode and Bhavani are among Tamil Nadu's most significant handloom and powerloom textile zones; the Erode jaggery (gur) market is also one of India's largest; the Periyar E.V. Ramasamy (Thanthai Periyar — the "Father of Social Justice in Tamil Nadu") was born in Erode (1879) — his social reform movement (Self Respect Movement, Dravidian consciousness) shaped modern Tamil culture and politics profoundly; the Erode district includes the western end of Kongu Nadu), and a city of world's largest turmeric market and Periyar's birthplace — is Tamil Nadu's most curcumin-golden and Dravidian-self-respect-originating district. From birthday parties in Erode to celebration cakes — RedHeart covers all Erode zones: Erode city, Bhavani, Perundurai, Gobichettipalayam, Sathyamangalam, Dharapuram adjacent, Anthiyur.</p>
<p>Our Erode cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Turmeric Capital GI / Bhavani Cauvery Sangam / Periyar EV Ramasamy Social Reform / Erode Handloom-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Erode, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Erode city, Bhavani, Perundurai, Gobichettipalayam, Sathyamangalam, Anthiyur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Turmeric GI Erode Fondant, Bhavani Cauvery Sangam Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Erode?", answer: "Yes, same-day cake delivery is available across all Erode areas — Erode city, Bhavani, Perundurai, Gobichettipalayam, and Sathyamangalam — for orders placed before 3 PM." },
      { question: "Do you have Turmeric Capital and Periyar EV Ramasamy-themed cakes?", answer: "Yes! Erode's GI Turmeric (India's #1 production hub — the world's single largest turmeric trading market in Erode, with high curcumin content; turmeric's global superfood rise has made Erode globally central) and Periyar E.V. Ramasamy (born Erode 1879 — the 'Father of Social Justice', Self Respect Movement, Dravidian consciousness — who shaped modern Tamil culture, politics, and anti-caste reform profoundly) inspire our most curcumin-golden and Dravidian-self-respecting Erode fondant cakes." },
      { question: "Are eggless cakes available in Erode?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Erode delivery." }
    ]
  },

  "udupi": {
    cityName: "Udupi",
    metaTitle: "Cake Delivery in Udupi | Sri Krishna Temple Cuisine Manipal Karnataka | RedHeart",
    metaDescription: "Order cakes online in Udupi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Udupi",
    metaKeyword: "cake delivery udupi, order cake online udupi, birthday cake udupi, custom cake udupi, same day cake delivery udupi Sri Krishna Temple Madhvacharya Udupi cuisine idli sambar Manipal Kasturi fish curry Karnataka coast",
    footerContent: `
<h2>Cake Delivery in Udupi — Sri Krishna Matha, Udupi Cuisine's Global Legacy, Manipal University, and Karnataka's Monsoon Coast</h2>
<p>Udupi — the district headquarters of Udupi district in Karnataka, one of the most culturally significant small cities in South India — the hometown of Udupi cuisine and the Sri Krishna Matha (the Sri Krishna Matha (Sri Krishna Temple — established in 1285 CE by Sri Madhvacharya — the philosopher-saint who founded the Dvaita (Dualistic) school of Vedanta philosophy, distinct from Adi Shankaracharya's Advaita — one of the three most significant philosophical schools in Hindu thought) is the living heart of Udupi; the eight mutts (Pejavara, Puthige, Shirur, Sodhe, Krishnapura, Kaniyooru, Adamaru, Palimaru) rotate temple management on a paryaya system (every two years) — creating a unique democratic 8-matha administration; the famous Usha/Kanakana Kindi (the window through which Kanakadasa — the 15th century Vaishnava poet-saint who was denied entry to the Krishna Temple — peered after the wall miraculously cracked open for him to have darshan of Lord Krishna; this window is still used today) is one of Karnataka's most significant bhakti stories; Udupi cuisine — the Udupi vegetarian restaurant tradition — spread across India and the world; Udupi restaurants (serving idli, vada, sambar, dosa, bisi bele bath, rasam) are an Indian institution in every city; the tradition started with Brahmin priests' cooking for devotees; Manipal (4 km from Udupi) is the Manipal Academy of Higher Education (MAHE) — Manipal University — one of India's top private universities; the Kaup (Kapu) Beach and lighthouse, Malpe Beach and St. Mary's Island (hexagonal basalt rock columns — geological marvel — where Vasco da Gama first landed in 1498 before Kozhikode), the Kudlu Falls, and the Sauparnika River characterise the Udupi landscape), and a city of Sri Krishna matha and global Udupi cuisine — is Karnataka's most philosophically Dvaita and culinarily idli-sambar global district. From birthday parties in Udupi to celebration cakes — RedHeart covers all Udupi zones: Udupi city, Manipal, Kundapura, Karkala, Byndoor, Brahmavar, Kaup, Malpe.</p>
<p>Our Udupi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sri Krishna Matha Madhvacharya / Kanakana Kindi Window / Malpe St. Mary's Island Basalt / Udupi Cuisine Global-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udupi, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udupi city, Manipal, Kundapura, Karkala, Byndoor, Brahmavar, Kaup, Malpe</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sri Krishna Matha Fondant, Kanakana Kindi Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Udupi?", answer: "Yes, same-day cake delivery is available across all Udupi areas — Udupi city, Manipal, Kundapura, Karkala, Byndoor, and Brahmavar — for orders placed before 3 PM." },
      { question: "Do you have Sri Krishna Matha and Kanakana Kindi Window-themed cakes?", answer: "Yes! The Sri Krishna Matha (established 1285 CE by Sri Madhvacharya — founder of Dvaita Vedanta; governed by the unique 8-matha paryaya rotation system) and the Kanakana Kindi (the miraculous window through which Kanakadasa — denied temple entry — saw Lord Krishna after the wall cracked open for his darshan; still used today) inspire our most philosophically Dvaitatly and bhakti-miraculously Udupi fondant cakes." },
      { question: "Are eggless cakes available in Udupi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Udupi delivery." }
    ]
  },

  "ujjain": {
    cityName: "Ujjain",
    metaTitle: "Cake Delivery in Ujjain | Mahakaleshwar Jyotirlinga Kumbh Mela Madhya Pradesh | RedHeart",
    metaDescription: "Order cakes online in Ujjain. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ujjain",
    metaKeyword: "cake delivery ujjain, order cake online ujjain, birthday cake ujjain, custom cake ujjain, same day cake delivery ujjain Mahakaleshwar Jyotirlinga Kumbh Mela Simhastha Shipra River ancient India Avanti Vikramaditya Madhya Pradesh",
    footerContent: `
<h2>Cake Delivery in Ujjain — Mahakaleshwar Jyotirlinga, Kumbh Mela Simhastha, Vikramaditya's Ancient Capital</h2>
<p>Ujjain (Ujjaini / Avantika) — one of India's seven sacred cities (Sapta Puri — Ayodhya, Mathura, Haridwar, Varanasi, Kanchipuram, Dwarka, Ujjain), one of the twelve Jyotirlinga sites, and the host of Kumbh Mela's Simhastha form (the Mahakaleshwar Temple (Mahakal — "Lord of Time" — is the Jyotirlinga of Ujjain; uniquely among all 12 Jyotirlingas, Mahakaleshwar faces south — the Dakshinamurti direction; the famous Bhasma Aarti (ash ritual) of Mahakaleshwar (3:30 AM daily — one of the most dramatic temple rituals in India, where the deity is worshipped with sacred ash from cremation grounds) draws thousands; the temple was rebuilt by the Maratha Peshwas (Ranoji Shinde) in the 18th century; the Kumbh Mela held at Ujjain (called Simhastha — held every 12 years when Jupiter enters Leo (Simha); the last was 2016 — and the next will be 2028; the Shipra River ghats host millions of pilgrims for the Simhastha Kumbh bath); the ancient city of Ujjaini was capital of the Avanti Kingdom (6th century BCE) and later the Paramara and Maratha empires; the legendary King Vikramaditya of Ujjain (who established the Vikram Samvat calendar — still used as the Hindu calendar; the 56 BC start; Vikramaditya's court was home to the Navratnas — nine jewels — including Kalidasa, Varahamihira, Dhanvantari, and others); the Vedh Shala (Jantar Mantar equivalent — the astronomical observatory of Sawai Jai Singh's network, the only one in Madhya Pradesh, used to observe the Tropic of Cancer which passes through Ujjain); the Sandipani Ashram (where Krishna and Balarama are believed to have studied under Guru Sandipani); the Kaliadeh Palace (1458 CE, Paramara period) on the Shipra island), and a city of ash-ritual Jyotirlinga and Vikram Samvat calendar — is Madhya Pradesh's most sacredlyJyotirlinga-southern and Vikramaditya-astronomically significant city. From birthday parties in Ujjain to celebration cakes — RedHeart covers all Ujjain zones: Ujjain city, Nagda, Mahidpur, Tarana, Ghattia, Badnagar, Khachrod.</p>
<p>Our Ujjain cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mahakaleshwar Jyotirlinga / Simhastha Kumbh Shipra / Vikramaditya Navratna Court / Bhasma Aarti-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ujjain, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ujjain city, Nagda, Mahidpur, Tarana, Ghattia, Badnagar, Khachrod</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mahakaleshwar Jyotirlinga Fondant, Simhastha Kumbh Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ujjain?", answer: "Yes, same-day cake delivery is available across all Ujjain areas — Ujjain city, Nagda, Mahidpur, Tarana, and Ghattia — for orders placed before 3 PM." },
      { question: "Do you have Mahakaleshwar Jyotirlinga and Simhastha Kumbh-themed cakes?", answer: "Yes! The Mahakaleshwar Temple (the unique southward-facing Jyotirlinga — 'Lord of Time' — with the dramatic 3:30 AM Bhasma Aarti using cremation-ground ash) and the Simhastha Kumbh Mela (held every 12 years on the Shipra River when Jupiter enters Leo — next 2028 — drawing tens of millions) inspire our most temporally Jyotirlinga and Kumbh-bathing Ujjain fondant cakes." },
      { question: "Are eggless cakes available in Ujjain?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ujjain delivery." }
    ]
  },

  "gwalior": {
    cityName: "Gwalior",
    metaTitle: "Cake Delivery in Gwalior | Gwalior Fort Tansen Music Madhya Pradesh | RedHeart",
    metaDescription: "Order cakes online in Gwalior. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gwalior",
    metaKeyword: "cake delivery gwalior, order cake online gwalior, birthday cake gwalior, custom cake gwalior, same day cake delivery gwalior Gwalior Fort Man Singh Palace Tansen Dhrupad music Jai Vilas Palace Scindia Madhya Pradesh",
    footerContent: `
<h2>Cake Delivery in Gwalior — Gwalior Fort's Unassailable Rock, Tansen Dhrupad Legacy, Jai Vilas Palace, and Scindia Kingdom</h2>
<p>Gwalior — the district headquarters of Gwalior district in Madhya Pradesh, one of North India's greatest medieval fortress cities — a city that Babur called the "pearl among fortresses of Hind" (the Gwalior Fort (6th century CE origin, dramatically expanded by Man Singh Tomar 1486-1516 CE) — a rock fortress standing 100 metres above the plains on a 3 km sandstone mesa — is one of India's most extraordinary fort complexes; Man Singh Tomar (the Tomar Rajput ruler) built the Man Mandir Palace (the most beautiful Rajput-Mughal palace interior — with tiles of brilliant blue, yellow, and green "chaturbhuj" patterns, hanging cages for prisoners, and musical lattice screens; Babur came here and took it from the Tomars in 1527 after the Battle of Khanwa); the fort later held Mughal prisoners, including Aurangzeb's brother Murad Baksh and the Maratha Peshwa's son; Tansen (Miyan Tansen — one of the nine Navaratnas of Emperor Akbar's court, considered the greatest classical vocalist India has ever produced) was born in Gwalior (Behat village, Gwalior); Tansen is credited with inventing the Darbari Kanada raag, the Miyan ki Malhar raag, and contributing the foundational vocabulary of Hindustani classical music; Tansen's tomb (Gwalior) is a UNESCO tentative heritage site; the Tansen Music Festival (Gwalior — held annually in December at Tansen's tomb) is one of India's most prestigious Dhrupad classical music festivals; the Jai Vilas Palace (Scindia dynasty — the Maratha Scindias of Gwalior; the palace's Durbar Hall (Mardana Mahal) has the two largest chandeliers in Asia, suspended to test the strength of the ceiling by having 10 elephants walk on the roof above; the dining room has a railway line around the table for serving wine and cigars to guests); the Battle of Gwalior (1857 — Rani Lakshmibai of Jhansi died fighting at Gwalior Fort)), and a city of pearl fortress and Dhrupad music genesis — is Madhya Pradesh's most fortressedly unassailable and musically Tansen-sired city. From birthday parties in Gwalior to celebration cakes — RedHeart covers all Gwalior zones: Gwalior city, Morar, Lashkar, Gird, Bhind, Morena, Dabra, Shivpuri.</p>
<p>Our Gwalior cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Gwalior Fort Man Mandir Palace / Tansen Dhrupad Music / Jai Vilas Palace Chandelier / Rani Lakshmibai 1857-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gwalior, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gwalior city, Morar, Lashkar, Gird, Bhind, Morena, Dabra, Shivpuri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gwalior Fort Fondant, Tansen Dhrupad Fondant, Jai Vilas Chandelier Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gwalior?", answer: "Yes, same-day cake delivery is available across all Gwalior areas — Gwalior city, Morar, Lashkar, Gird, Bhind, and Morena — for orders placed before 3 PM." },
      { question: "Do you have Gwalior Fort and Tansen Dhrupad Music-themed cakes?", answer: "Yes! The Gwalior Fort (Babur's 'pearl among fortresses' — a 100m sandstone mesa with Man Singh Tomar's Man Mandir Palace of brilliant tilework) and Tansen (born Gwalior — India's greatest Hindustani classical vocalist, Akbar's Navratna, inventor of Darbari Kanada and Miyan ki Malhar raags; the annual Tansen Music Festival at his Gwalior tomb) inspire our most fortressedly Mughal-admired and Dhrupad-vocally legendary Gwalior fondant cakes." },
      { question: "Are eggless cakes available in Gwalior?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gwalior delivery." }
    ]
  },

  "indore": {
    cityName: "Indore",
    metaTitle: "Cake Delivery in Indore | Sarafa Bazaar Street Food Cleanest City MP | RedHeart",
    metaDescription: "Order cakes online in Indore. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Indore",
    metaKeyword: "cake delivery indore, order cake online indore, birthday cake indore, custom cake indore, same day cake delivery indore Sarafa Bazaar street food cleanest city India Rajwada Devi Ahilyabai Holkar Madhya Pradesh",
    footerContent: `
<h2>Cake Delivery in Indore — India's Cleanest City, Sarafa Bazaar Street Food, and Devi Ahilyabai Holkar's Legacy</h2>
<p>Indore — the largest city in Madhya Pradesh, India's repeated "cleanest city" winner and one of the most commercially vibrant cities in Central India — famous for its extraordinary street food and the extraordinary queen who shaped the Holkar dynasty (Indore has won the Swachh Survekshan (Swachh Bharat survey) award for India's Cleanest City consecutively for 6+ years (2017-2023 and beyond) — a remarkable civic achievement; the Sarafa Bazaar (Sarrafa Jewellery Market by day, Night Food Market by night) is one of India's most famous street food markets — where hundreds of food stalls serve extraordinary Indori street food after 9 PM; the famous Indori street foods include the Dahi Wada Poha (Indore's signature breakfast — a unique variant of poha with fried dahi wada on top), Palak Puri, Garadu (deep-fried yam), Bhutte ka kees (spiced grated corn), Dal Bafla (Rajasthani-Malwa dal baati variant), and the 56 Dukan area (56 shops street food lane); Devi Ahilyabai Holkar (1725-1795 CE — the Queen of Indore who managed the Holkar Maratha kingdom as regent from Maheshwar; she is considered one of the greatest administrators in Indian history — building temples across India, creating Maheshwar's weaving tradition, and governing with legendary justice; she is a candidate for India's greatest-ever female ruler); the Rajwada Palace (Holkar dynasty — 7-storey, 200-year-old structure, partly destroyed by fire but restored — Indore's heritage centrepiece); IIM Indore (one of the six original IIMs), IIT Indore, and NLIU are in Indore; the Indore-Bhopal-Ujjain triangle is Madhya Pradesh's economic and cultural core), and a city of cleanest civic pride and Ahilyabai's justice legacy — is Madhya Pradesh's most commercially vibrant and civically immaculate city. From birthday parties in Indore to celebration cakes — RedHeart covers all Indore zones: Indore city, Pithampur, Dewas, Mhow, Sanwer, Rau, Simrol, Maheshwar, Omkareshwar.</p>
<p>Our Indore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sarafa Bazaar Street Food / Devi Ahilyabai Holkar Queen / Rajwada Palace / India Cleanest City-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indore, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indore city, Pithampur, Dewas, Mhow, Sanwer, Rau, Maheshwar, Omkareshwar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sarafa Night Market Fondant, Ahilyabai Holkar Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Indore?", answer: "Yes, same-day cake delivery is available across all Indore areas — Indore city, Pithampur, Dewas, Mhow, Sanwer, and Rau — for orders placed before 3 PM." },
      { question: "Do you have Sarafa Bazaar Street Food and Devi Ahilyabai Holkar-themed cakes?", answer: "Yes! The Sarafa Bazaar (Indore's legendary night food market — Dahi Wada Poha, Garadu, Bhutte ka Kees, the 56 Dukan lane — making Indore India's undisputed street food capital) and Devi Ahilyabai Holkar (1725-1795 — the Holkar queen regent of Maheshwar considered India's greatest-ever female administrator — building temples across the country, creating the famous Maheshwari weaving tradition, governing with legendary justice) inspire our most street-food-culturally vibrant and justly-queenly Indore fondant cakes." },
      { question: "Are eggless cakes available in Indore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Indore delivery." }
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
