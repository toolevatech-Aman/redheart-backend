// Cakes Batch 59 — 11 cities
// Assam: Nagaon, Barpeta, Kokrajhar, Goalpara, Dhemaji, North Lakhimpur (check - done? do it as lakhimpur-assam)
// Rajasthan: Barmer, Jalore, Hanumangarh
// UP: Chitrakoot, Sonbhadra

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "nagaon": {
    cityName: "Nagaon",
    metaTitle: "Cake Delivery in Nagaon | Assam Nowgong Brahmaputra Muga Silk Assamese | RedHeart",
    metaDescription: "Order cakes online in Nagaon (Nowgong). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nagaon (Nowgong)",
    metaKeyword: "cake delivery nagaon, order cake online nagaon nowgong, birthday cake nagaon, custom cake nagaon, same day cake delivery nagaon Assam Brahmaputra Muga silk Kapili River Jaintia Hills",
    footerContent: `
<h2>Cake Delivery in Nagaon (Nowgong) — Assam's Central Heartland, Muga Silk, and Brahmaputra Plains</h2>
<p>Nagaon — the district headquarters of Nagaon district in Assam (also known as Nowgong; on the Brahmaputra plains), one of Assam's largest and most populous districts, in the heart of the Brahmaputra Valley (the Nagaon district — one of Assam's most populous districts; located in the central Brahmaputra Valley; the Kapili River (a major tributary of the Brahmaputra; flows through Nagaon district before joining the Brahmaputra; the Kapili-Jamuna river system drains the Nagaon plains; important for irrigation); the Muga Silk (GI-protected Assam Muga Silk — Nagaon and the central Assam districts are major Muga silk production areas; Muga silk is produced exclusively in Assam; it is a golden-yellow natural silk from the Antheraea assama silkworm which feeds on Som and Soalu trees; Muga silk is the world's only naturally golden-coloured silk; it becomes more lustrous and golden with washing; it is the most durable of all natural silks; GI protected; worn by Assamese women in traditional mekhela chador; Nagaon weavers' clusters); the Kachari Kingdom connection (Nagaon area was historically part of the Dimasa Kachari kingdom territory before Ahom integration); the Nowgong College (established 1934 — one of Assam's oldest and most respected colleges); the Assam Bhumi earthquake connection (the 1950 Assam earthquake, one of the largest ever recorded in India at 8.6 magnitude, affected the Brahmaputra valley including Nagaon)), and a city of Muga silk golden natural fibre and central Brahmaputra heartland — is Assam's most Muga-GI-naturally-golden-world-only-silk and central-Brahmaputra-Kapili-Nagaon. From birthday parties in Nagaon to celebration cakes — RedHeart covers all areas: Nagaon city, Doboka, Lumding, Hojai, Dhing, Rupohihat, Samaguri, Raha.</p>
<p>Our Nagaon cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Muga Silk Golden / Brahmaputra Plains-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaon (Nowgong), Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaon city, Doboka, Lumding, Hojai, Dhing, Rupohihat, Samaguri, Raha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Muga Silk Golden Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nagaon?", answer: "Yes, same-day cake delivery is available across all Nagaon areas — Nagaon city, Doboka, Lumding, Hojai, Dhing, Rupohihat, Samaguri, and Raha — for orders placed before 3 PM." },
      { question: "Do you have Muga Silk-themed cakes?", answer: "Yes! The Assam Muga Silk (the world's only naturally golden-coloured silk — produced exclusively in Assam from Antheraea assama silkworm feeding on Som and Soalu trees; becomes more golden and lustrous with every wash; GI-protected; Nagaon is a major production area; worn in traditional mekhela chador) inspires our most Muga-golden-natural-silk fondant cakes." },
      { question: "Are eggless cakes available in Nagaon?", answer: "Yes, all flavours are available in eggless variants for Nagaon delivery." }
    ]
  },

  "barpeta": {
    cityName: "Barpeta",
    metaTitle: "Cake Delivery in Barpeta | Srimanta Sankardev Vaishnavism Assam Sattra | RedHeart",
    metaDescription: "Order cakes online in Barpeta. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barpeta",
    metaKeyword: "cake delivery barpeta, order cake online barpeta, birthday cake barpeta, custom cake barpeta, same day cake delivery barpeta Srimanta Sankardev Vaishnavism Assam Sattra monastery Barpeta Satra Manas National Park adjacent",
    footerContent: `
<h2>Cake Delivery in Barpeta — Srimanta Sankardev's Barpeta Sattra, Assamese Vaishnavism, and Manas National Park Gateway</h2>
<p>Barpeta — the district headquarters of Barpeta district in Assam (western Assam Brahmaputra valley; adjacent to Manas National Park), one of Assam's most spiritually significant towns — home to the historic Barpeta Satra (the Barpeta Satra (Barpeta Sattra) — one of the four major Sattra monasteries of Assam; founded by Madhabdeva (the foremost disciple of the great 15th-16th century Assamese saint Srimanta Sankardev); the Sattras are the Vaishnavite monasteries of Assam established by Sankardev's Neo-Vaishnavism movement (Eka Sharana Nama Dharma — "one shelter of God's name"; a monotheistic bhakti movement that rejected caste discrimination and idol worship while emphasizing devotion to Vishnu-Krishna through nam-kirtan, Borgeet hymns, Ankiya Naat theatrical forms, and Sattriya dance and music; Srimanta Sankardev 1449-1568 CE is considered the greatest cultural figure of Assam — he unified Assam's diverse tribes through his religious reform and created the Borgeet, the Ankiya Naat, the Sattriya dance form (UNESCO Intangible Heritage), and the mahapurux dharm; the Barpeta Satra is the center of Barpeta's religious and cultural life; the Barpeta Mahotsav (annual cultural festival at the Barpeta Satra); the Manas National Park (UNESCO World Heritage Site 1985 — one of India's oldest and most significant wildlife parks; Project Tiger; Project Elephant; home to the Assam rooftop turtle, golden langur, pygmy hog (one of the world's most endangered mammals); the Manas River cascades from Bhutan hills into the plains; Barpeta is a gateway town for Manas visitors); the Barpeta-road railway station (important station on the Assam Rail Link)), and a city of Barpeta Satra Vaishnavism and Manas UNESCO gateway — is Assam's most Barpeta-Satra-Madhabdeva-Sankardev and Manas-UNESCO-golden-langur-pygmy-hog Barpeta. From birthday parties in Barpeta to celebration cakes — RedHeart covers all areas: Barpeta city, Barpeta Road, Sorbhog, Baghbar, Chenga, Mandia, Patacharkuchi.</p>
<p>Our Barpeta cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Barpeta Satra / Manas River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barpeta, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barpeta city, Barpeta Road, Sorbhog, Baghbar, Chenga, Mandia, Patacharkuchi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Barpeta Satra Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barpeta?", answer: "Yes, same-day cake delivery is available across all Barpeta areas — Barpeta city, Barpeta Road, Sorbhog, Baghbar, Chenga, and Patacharkuchi — for orders placed before 3 PM." },
      { question: "Do you have Barpeta Satra and Manas-themed cakes?", answer: "Yes! The Barpeta Satra (founded by Madhabdeva, disciple of Srimanta Sankardev 1449-1568 CE; center of Assam's Eka Sharana Nama Dharma Neo-Vaishnavism; Sankardev created Borgeet, Sattriya dance (UNESCO), Ankiya Naat; Barpeta is gateway to Manas UNESCO World Heritage Park — home to pygmy hog, golden langur, Assam rooftop turtle) inspire our most Barpeta-Satra-Sankardev and Manas-UNESCO fondant cakes." },
      { question: "Are eggless cakes available in Barpeta?", answer: "Yes, all flavours are available in eggless variants for Barpeta delivery." }
    ]
  },

  "kokrajhar": {
    cityName: "Kokrajhar",
    metaTitle: "Cake Delivery in Kokrajhar | Bodoland BTAD Assam Bodo Culture Manas | RedHeart",
    metaDescription: "Order cakes online in Kokrajhar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kokrajhar",
    metaKeyword: "cake delivery kokrajhar, order cake online kokrajhar, birthday cake kokrajhar, custom cake kokrajhar, same day cake delivery kokrajhar Bodoland BTAD Bodo tribe Assam Manas National Park Aie River Bhutan border",
    footerContent: `
<h2>Cake Delivery in Kokrajhar — Bodoland Capital, Bodo Tribe Heritage, and Manas National Park</h2>
<p>Kokrajhar — the headquarters of the Bodoland Territorial Council (BTC) in Assam, capital of Bodoland Territorial Area Districts (BTAD) — the autonomous region created for the Bodo people (the Bodo people and Bodoland (the Bodos are the largest plains tribal group in Assam and one of Northeast India's major tribal communities; the Bodoland Territorial Area Districts (BTAD) — established in 2003 under the Bodoland Territorial Council agreement — is an autonomous administrative region comprising Kokrajhar, Chirang, Baksa, and Udalguri districts; Kokrajhar is the headquarters of the BTC; the Bodo Accord 2020 (the peace agreement between the Indian government and various Bodo militant factions including NDFB factions; sought to bring lasting peace to the BTAD area after decades of armed conflict)); the Bodo culture (the Bodo community has a rich cultural tradition — Bagurumba dance (the traditional Bodo women's group dance; performed in butterfly-like graceful movements; recognized as one of Assam's most beautiful folk dance forms), Bodo weaving (traditional Bodo endi and dokhna fabrics), the Bwisagu festival (Bodo spring festival celebrating the Bodo new year), the Bodo language (recognized Scheduled language of India)); the Manas National Park (Kokrajhar is adjacent to Manas National Park — the UNESCO World Heritage Site spanning Kokrajhar and Barpeta-Chirang districts; the Bodo community maintains a strong relationship with Manas's conservation; the Aie River (flows near Kokrajhar; joins the Brahmaputra)), and a city of Bodoland capital and Bodo Bagurumba cultural heritage — is Assam's most Bodoland-BTAD-BTC-capital and Bodo-Bagurumba-cultural-Spring-Bwisagu Kokrajhar. From birthday parties in Kokrajhar to celebration cakes — RedHeart covers all areas: Kokrajhar city, Gossaigaon, Bilasipara, Fakiragram, Sapatgram, Dotma.</p>
<p>Our Kokrajhar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bodo Bagurumba Dance / Bodoland Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kokrajhar, Assam (Bodoland)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kokrajhar city, Gossaigaon, Bilasipara, Fakiragram, Sapatgram, Dotma</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bagurumba Dance Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kokrajhar?", answer: "Yes, same-day cake delivery is available across all Kokrajhar areas — Kokrajhar city, Gossaigaon, Bilasipara, Fakiragram, and Sapatgram — for orders placed before 3 PM." },
      { question: "Do you have Bodo cultural-themed cakes?", answer: "Yes! The Bodo heritage (Bagurumba dance — graceful butterfly-like Bodo women's group dance; Bwisagu spring festival; Bodo endi and dokhna weaving; Bodoland Territorial Council (BTC) established 2003; Kokrajhar as Bodoland capital; Manas National Park UNESCO World Heritage conservation by Bodo community) inspires our most Bodo-Bagurumba-Bwisagu-Bodoland fondant cakes." },
      { question: "Are eggless cakes available in Kokrajhar?", answer: "Yes, all flavours are available in eggless variants for Kokrajhar (Bodoland) delivery." }
    ]
  },

  "goalpara": {
    cityName: "Goalpara",
    metaTitle: "Cake Delivery in Goalpara | Assam Brahmaputra Meghalaya Border Manas Goalpara Devi | RedHeart",
    metaDescription: "Order cakes online in Goalpara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Goalpara",
    metaKeyword: "cake delivery goalpara, order cake online goalpara, birthday cake goalpara, custom cake goalpara, same day cake delivery goalpara Assam Brahmaputra Meghalaya border Koch Koch Bihar Dudhnoi River",
    footerContent: `
<h2>Cake Delivery in Goalpara — Brahmaputra Riverside, Meghalaya Border, and Koch Kingdom Heritage</h2>
<p>Goalpara — the district headquarters of Goalpara district in Assam (western Assam; Brahmaputra riverbank; Meghalaya border), a historic town at the confluence of ancient trade routes (the Goalpara district — situated on the southern bank of the Brahmaputra River; borders Meghalaya to the south (the Garo Hills); the district was historically the main gateway between Assam and Bengal before rail and road travel (the Goalpara river ghat was a major Brahmaputra ferry point); the Koch Kingdom connection (Goalpara area was historically the eastern flank of the Koch Kingdom — the great medieval kingdom of Assam and North Bengal; the Koch Bihar and Koch Hajo kingdoms; Goalpara was known as "Kamrupa" — the ancient kingdom of Assam; the Goalpara district contains parts of the ancient Pragjyotisha-Kamrupa kingdom territory; the Devi temple of Goalpara area); the Dudhnoi area (Goalpara district — Dudhnoi is an important town at the Assam-Meghalaya border; the Dudhnoi-Matia area; significant border trade); the Krishnai River and other tributaries; the Goalpara College (est. 1931 — one of Assam's oldest colleges)), and a city of Koch Kingdom heritage and Brahmaputra-Meghalaya border gateway — is Assam's most Koch-Kingdom-Kamrupa-ancient and Brahmaputra-Meghalaya-border-Dudhnoi Goalpara. From birthday parties in Goalpara to celebration cakes — RedHeart covers all Goalpara areas: Goalpara city, Dudhnoi, Lakhipur, Balijana, Krishnai, Matia, Rongjuli.</p>
<p>Our Goalpara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Goalpara, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Goalpara city, Dudhnoi, Lakhipur, Balijana, Krishnai, Matia, Rongjuli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Goalpara?", answer: "Yes, same-day cake delivery is available across all Goalpara areas — Goalpara city, Dudhnoi, Lakhipur, Balijana, Krishnai, and Matia — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Goalpara?", answer: "Yes, all flavours are available in eggless variants for Goalpara delivery." },
      { question: "Do you deliver midnight cakes in Goalpara?", answer: "Yes, midnight birthday cake delivery is available across Goalpara city zones." }
    ]
  },

  "dhemaji": {
    cityName: "Dhemaji",
    metaTitle: "Cake Delivery in Dhemaji | Assam Arunachal Pradesh Border Mising Tribe Subansiri | RedHeart",
    metaDescription: "Order cakes online in Dhemaji. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dhemaji",
    metaKeyword: "cake delivery dhemaji, order cake online dhemaji, birthday cake dhemaji, custom cake dhemaji, same day cake delivery dhemaji Assam Arunachal Pradesh border Mising tribe Subansiri River Jonai Ali-Aiye-Ligang",
    footerContent: `
<h2>Cake Delivery in Dhemaji — Arunachal Pradesh Border, Mising Tribe Heritage, and Subansiri River</h2>
<p>Dhemaji — the district headquarters of Dhemaji district in Assam (northern Assam; Arunachal Pradesh border; Brahmaputra north bank), a district known for its tribal diversity and Arunachal border location (the Dhemaji district — situated on the north bank of the Brahmaputra; borders Arunachal Pradesh (Lohit and Dibang Valley districts) to the north; the Mising (Mising/Mishing) tribe (the Mising people are one of Assam's major plains tribal communities; the largest concentration of Mising people is in Dhemaji and Majuli; the Mising Ali-Aiye-Ligang festival (spring festival; a major Mising cultural celebration; celebrated in January-February; features traditional music, Mising food like apong (rice beer), and distinctive Mising weaving patterns); the Mising boathouse tradition on Brahmaputra; the Subansiri River (one of the Brahmaputra's largest tributaries; flows from Arunachal Pradesh into Assam at Dhemaji district; the Subansiri Lower Hydroelectric Project downstream in Lakhimpur is one of India's largest hydropower projects under construction); the Jonai town (Dhemaji district — an important town; sub-divisional headquarters); the North Bank National Park adjacent area; the flood-prone nature of Dhemaji (the Dhemaji district is among Assam's most flood-prone districts — annual Brahmaputra flooding)), and a city of Mising Ali-Aiye-Ligang culture and Subansiri Arunachal border — is Assam's most Mising-tribe-plains-tribal-Ali-Aiye-Ligang-apong and Subansiri-Arunachal-border Dhemaji. From birthday parties in Dhemaji to celebration cakes — RedHeart covers all Dhemaji areas: Dhemaji city, Jonai, Sissiborgaon, Bordoloni, Machkhowa, Gereki.</p>
<p>Our Dhemaji cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mising Ali-Aiye-Ligang / Subansiri River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhemaji, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhemaji city, Jonai, Sissiborgaon, Bordoloni, Machkhowa, Gereki</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mising Festival Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dhemaji?", answer: "Yes, same-day cake delivery is available across all Dhemaji areas — Dhemaji city, Jonai, Sissiborgaon, Bordoloni, and Machkhowa — for orders placed before 3 PM." },
      { question: "Do you have Mising tribe cultural-themed cakes?", answer: "Yes! The Mising (Mishing) tribe heritage (Ali-Aiye-Ligang spring festival celebrated January-February with traditional music and apong rice beer; distinctive Mising weaving; Brahmaputra boathouse tradition; largest concentration in Dhemaji and Majuli; one of Assam's major plains tribal communities) inspires our most Mising-Ali-Aiye-Ligang fondant cakes." },
      { question: "Are eggless cakes available in Dhemaji?", answer: "Yes, all flavours are available in eggless variants for Dhemaji delivery." }
    ]
  },

  "barmer": {
    cityName: "Barmer",
    metaTitle: "Cake Delivery in Barmer | GI Barmer Applique Thar Desert Rajasthan Kiradu Temple | RedHeart",
    metaDescription: "Order cakes online in Barmer. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barmer",
    metaKeyword: "cake delivery barmer, order cake online barmer, birthday cake barmer, custom cake barmer, same day cake delivery barmer GI Barmer Applique Thar Desert Rajasthan Kiradu Temple Khajuraho Rajasthan Luni River",
    footerContent: `
<h2>Cake Delivery in Barmer — GI Barmer Applique, Thar Desert Heartland, and Kiradu Temple — "Khajuraho of Rajasthan"</h2>
<p>Barmer — the district headquarters of Barmer district in Rajasthan (the Thar Desert heartland; Pakistan border), a city renowned for its GI-protected traditional crafts and the archaeological wonder of Kiradu (the GI Barmer Applique Work (Barmer Applique — a traditional textile art of the Thar Desert communities; colorful fabric cutouts stitched onto base cloth in geometric patterns; used in decorative wall hangings, quilts, tent panels, bags; protected by Geographical Indication; Barmer is known as Rajasthan's Applique capital; made by local artisan communities; exported as handicrafts); the Barmer Embroidery (Barmer district is also known for its distinctive embroidery — the Barmer-Jaisalmer belt has distinctive mirror-work and thread embroidery styles); the Kiradu Temple (the Kiradu temples — a group of 5th-11th century Pratihara-Paramara-era Hindu temples in Barmer district; sometimes called the "Khajuraho of Rajasthan" due to the ornate sculptural carvings; the main Someshvara Temple; significant but lesser-visited archaeological heritage; includes Vishnu and Shiva temples with intricate bracket figures; the Kiradu archaeological site); the Thar Desert (Barmer lies deep in the Thar Desert — extreme temperatures; one of Rajasthan's most arid districts; significant oil and gas resources found in the Barmer Basin — ONGC's Barmer oil discovery (Mangala, Aishwariya, Saraswati oilfields — among India's largest onshore oil discoveries; Cairn India/Vedanta-ONGC joint); the Luni River (the only significant river in the Thar; flows through Barmer; the Luni basin); the Pakistan border (Barmer borders Pakistan — Rajasthan's border districts)), and a city of GI Barmer Applique textile and Kiradu Khajuraho-of-Rajasthan temples — is Rajasthan's most Barmer-GI-Applique-colorful-geometric-Thar and Kiradu-Khajuraho-Rajasthan-11th-century Barmer. From birthday parties in Barmer to celebration cakes — RedHeart covers all areas: Barmer city, Balotra, Baytu, Pachpadra, Sindhari, Sheo, Gudamalani, Dhorimanna.</p>
<p>Our Barmer cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Barmer Applique Patchwork / Kiradu Temple / Thar Desert-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barmer, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barmer city, Balotra, Baytu, Pachpadra, Sindhari, Sheo, Gudamalani, Dhorimanna</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Barmer Applique Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barmer?", answer: "Yes, same-day cake delivery is available across all Barmer areas — Barmer city, Balotra, Baytu, Pachpadra, Sindhari, and Sheo — for orders placed before 3 PM." },
      { question: "Do you have GI Barmer Applique-themed cakes?", answer: "Yes! The GI Barmer Applique (traditional Thar Desert textile art — colourful fabric cutouts stitched in geometric patterns onto base cloth; used in wall hangings, quilts, tent panels; GI-protected; Barmer is Rajasthan's Applique capital; the Kiradu temples — 5th-11th century carved temples, the 'Khajuraho of Rajasthan') inspire our most Barmer-Applique-GI and Kiradu-Khajuraho-Rajasthan fondant cakes." },
      { question: "Are eggless cakes available in Barmer?", answer: "Yes, all flavours are available in eggless variants for Barmer delivery." }
    ]
  },

  "jalore": {
    cityName: "Jalore",
    metaTitle: "Cake Delivery in Jalore | Jalor Fort Rajasthan Granite Siwana Kanhadade Prabandh | RedHeart",
    metaDescription: "Order cakes online in Jalore. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jalore",
    metaKeyword: "cake delivery jalore, order cake online jalore, birthday cake jalore, custom cake jalore, same day cake delivery jalore Jalor Fort Rajasthan granite Kanhadade Prabandha Sunchindra Topekhana mosque medieval",
    footerContent: `
<h2>Cake Delivery in Jalore — Jalore Fort (Sonchaliya), Kanhadade Prabandha, and Rajasthan Granite Capital</h2>
<p>Jalore — the district headquarters of Jalore district in Rajasthan (southern Rajasthan; adjacent to Sirohi and Barmer), a district with a magnificent medieval fortress and India's granite heartland (the Jalore Fort / Jalore Garh / Sonchaliya Fort (the Jalore Fort — a formidable hilltop fortress; sits atop a 336m granite hill overlooking the town; the fort complex includes the Topekhana (cannon house), the Sunchindra Bawdi (ancient stepwell inside fort), the Parasnath Jain temple, and the mosque from the Alauddin Khilji era; the fort was one of medieval India's most impregnable fortresses); the Kanhadade Prabandha (a 14th-century Old Rajasthani/Apabhramsa language epic poem by Padmanabha — describes the 1311 CE siege of Jalore Fort by Alauddin Khilji's armies; Kanhadade (Kanha De) was the Chahamana (Chauhan) king of Jalore who refused to submit to Delhi Sultanate; the fort fell only after a prolonged siege; the poem is one of the most important examples of medieval Rajasthani literature); the Rajasthan Granite (Jalore district is India's granite quarrying capital — the Jalore-Sirohi belt has some of India's richest granite deposits; exported globally; "Jalore Granite" is internationally known; major economic activity); the Siwana (Jalore district — the Siwana Fort, another historic Chahamana fortress in Jalore district; near Barmer border)), and a city of Jalore Fort Kanhadade resistance and India's granite-capital Jalore. From birthday parties in Jalore to celebration cakes — RedHeart covers all areas: Jalore city, Sanchore, Bhinmal, Ahore, Raniwara, Siwana area, Jaswantpura.</p>
<p>Our Jalore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Jalore Fort / Kanhadade Epic / Rajasthan Granite-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalore, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalore city, Sanchore, Bhinmal, Ahore, Raniwara, Jaswantpura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jalore Fort Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jalore?", answer: "Yes, same-day cake delivery is available across all Jalore areas — Jalore city, Sanchore, Bhinmal, Ahore, and Raniwara — for orders placed before 3 PM." },
      { question: "Do you have Jalore Fort and Kanhadade-themed cakes?", answer: "Yes! The Jalore Fort (Sonchaliya — 336m granite hill; Topekhana cannon house; Sunchindra Bawdi stepwell; Kanhadade-the-Chahamana-king's 1311 CE siege by Alauddin Khilji; immortalized in the Kanhadade Prabandha epic poem — one of the greatest medieval Rajasthani literary works) and Jalore's status as India's granite export capital inspire our most Jalore-Fort-Kanhadade-Chahamana fondant cakes." },
      { question: "Are eggless cakes available in Jalore?", answer: "Yes, all flavours are available in eggless variants for Jalore delivery." }
    ]
  },

  "hanumangarh": {
    cityName: "Hanumangarh",
    metaTitle: "Cake Delivery in Hanumangarh | Kalibangan Harappan Site Rajasthan Ghaggar River | RedHeart",
    metaDescription: "Order cakes online in Hanumangarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hanumangarh",
    metaKeyword: "cake delivery hanumangarh, order cake online hanumangarh, birthday cake hanumangarh, custom cake hanumangarh, same day cake delivery hanumangarh Kalibangan Harappan site Ghaggar River Rajasthan Bhatinda Punjab wheat",
    footerContent: `
<h2>Cake Delivery in Hanumangarh — Kalibangan (Harappan 5th Largest City), Ghaggar / Saraswati River, and Rajasthan-Punjab Wheat Belt</h2>
<p>Hanumangarh — the district headquarters of Hanumangarh district in Rajasthan (northern Rajasthan; Punjab border), a district containing one of India's most significant Harappan archaeological sites (the Kalibangan Harappan Site (Kalibangan — "black bangles" in local language; located in Hanumangarh district; one of the largest Harappan/Indus Valley Civilisation sites in India; excavated by B.K. Thapar and B.B. Lal (ASI) 1960-69; the site has evidence of a Pre-Harappan ploughed field (the world's earliest evidence of ploughing — dating to ca. 2800 BCE; a ploughed field of furrows at Kalibangan; possibly the world's oldest farm field ever discovered); fire altars at Kalibangan are considered by some scholars as the earliest evidence of fire worship rituals in the Indian subcontinent; the Kalibangan Archaeological Museum displays finds; Kalibangan was the fifth-largest Harappan city); the Ghaggar River (the Ghaggar-Hakra (ancient Saraswati River?) — the Ghaggar seasonal river flows through Hanumangarh; many scholars identify the Ghaggar with the mythological Saraswati River of the Vedas (the lost river of the Saraswati — the Vedic river that is said to have dried up; one of India's great geographic-mythological mysteries)); the Hanumangarh wheat belt (Hanumangarh and Ganganagar districts form the "wheat bowl" of Rajasthan — well-irrigated by the Indira Gandhi Canal; significant wheat and cotton production)), and a city of Kalibangan world's earliest ploughed field and Ghaggar-Saraswati ancient river mystery — is Rajasthan's most Kalibangan-Harappan-earliest-ploughed-field and Ghaggar-Saraswati-Vedic-lost-river Hanumangarh. From birthday parties in Hanumangarh to celebration cakes — RedHeart covers all areas: Hanumangarh city, Hanumangarh Town, Sangaria, Pilibanga (Kalibangan nearby), Nohar, Bhadra, Rawatsar.</p>
<p>Our Hanumangarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kalibangan Harappan Heritage / Saraswati River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanumangarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanumangarh city, Hanumangarh Town, Sangaria, Nohar, Bhadra, Rawatsar, Pilibanga</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kalibangan Heritage Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hanumangarh?", answer: "Yes, same-day cake delivery is available across all Hanumangarh areas — Hanumangarh city, Hanumangarh Town, Sangaria, Nohar, Bhadra, and Rawatsar — for orders placed before 3 PM." },
      { question: "Do you have Kalibangan Harappan Heritage-themed cakes?", answer: "Yes! Kalibangan (in Hanumangarh district — the 5th largest Harappan city; excavated 1960-69; contains the world's oldest evidence of a ploughed field dating to ca. 2800 BCE; evidence of fire altars possibly the subcontinent's earliest fire worship; the Ghaggar River (possibly the ancient lost Saraswati of the Vedas) flows through the district) inspires our most Kalibangan-Harappan-earliest-ploughed-field fondant cakes." },
      { question: "Are eggless cakes available in Hanumangarh?", answer: "Yes, all flavours are available in eggless variants for Hanumangarh delivery." }
    ]
  },

  "chitrakoot": {
    cityName: "Chitrakoot",
    metaTitle: "Cake Delivery in Chitrakoot | Ram Exile Mandakini River UP MP Kamadgiri Sati Anusuiya | RedHeart",
    metaDescription: "Order cakes online in Chitrakoot. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chitrakoot",
    metaKeyword: "cake delivery chitrakoot, order cake online chitrakoot, birthday cake chitrakoot, custom cake chitrakoot, same day cake delivery chitrakoot Ram exile Mandakini River UP MP Kamadgiri Sati Anusuiya 11.5 years Valmiki Ramayana",
    footerContent: `
<h2>Cake Delivery in Chitrakoot — Ram's 11.5-Year Exile, Mandakini River, Kamadgiri Parikrama, and Sage Atri's Ashram</h2>
<p>Chitrakoot — a pilgrimage town straddling the UP-MP border (Chitrakoot district in UP and Satna district in MP), the most sacred place in the Ramayana associated with Lord Ram's exile (the Chitrakoot Pilgrimage significance — according to the Valmiki Ramayana and Tulsidas's Ramcharitmanas, Chitrakoot is where Lord Ram, Sita, and Lakshmana spent the longest continuous period of their 14-year exile — 11.5 years; the Kamadgiri Hill (the sacred hill at the center of Chitrakoot — it is considered the embodiment of Lord Ram; the Kamadgiri parikrama (circumambulation) — a 5 km pradakshina around the hill through the dense forest; devotees believe Kamadgiri fulfills all wishes (kamadgiri = "wish-fulfilling mountain"); the Mandakini River (the river flowing through Chitrakoot — a tributary of the Yamuna; the Ramaghat on the Mandakini where Ram, Sita, and Lakshmana bathed; hundreds of temples line the Mandakini banks; morning aarti); the Sati Anusuiya Ashram (Sage Atri and his wife Anusuiya's ashram in Chitrakoot forest — Anusuiya was the paragon of chaste wifely devotion in Hindu mythology; she converted the Trimurti (Brahma, Vishnu, Shiva) into infants when they tested her fidelity; the ashram is 15km from Chitrakoot; Sita received the "akshaya vastra" (inexhaustible cloth) and advice on marital devotion from Anusuiya here); the Gupt Godavari caves (two caves near Chitrakoot — small and large cave; a stream of Godavari water is said to flow through; the large cave has Ram-Lakshmana's throne footprints inside; pilgrims crawl through)), and a city of Ram's 11.5-year Mandakini exile and Kamadgiri wish-fulfilling mountain — is UP-MP's most Ram-Sita-Lakshmana-11.5-years-exile and Kamadgiri-5km-parikrama-wish-fulfilling Chitrakoot. From birthday parties in Chitrakoot to celebration cakes — RedHeart covers all areas: Chitrakoot city, Karwi, Rajapur, Mau, Manikpur, Sitapur, Shahjahanpur (CK).</p>
<p>Our Chitrakoot cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kamadgiri Parikrama / Ram-Sita-Mandakini / Chitrakoot Ramayana-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitrakoot, UP/MP border</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitrakoot city, Karwi, Rajapur, Mau, Manikpur, Sitapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kamadgiri Parikrama Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chitrakoot?", answer: "Yes, same-day cake delivery is available across all Chitrakoot areas — Chitrakoot city, Karwi, Rajapur, Mau, and Manikpur — for orders placed before 3 PM." },
      { question: "Do you have Chitrakoot Ram Exile-themed cakes?", answer: "Yes! Chitrakoot (Ram, Sita, and Lakshmana spent 11.5 years here — the longest stint of their 14-year exile; Kamadgiri Hill — the wish-fulfilling sacred mountain; 5km Kamadgiri parikrama through forest; Mandakini River Ramaghat morning aarti; Sati Anusuiya-Sage Atri ashram; Gupt Godavari caves; one of the four dhams of Tulsidas's Ramcharitmanas) inspires our most Ram-Sita-Chitrakoot-Mandakini-Kamadgiri fondant cakes." },
      { question: "Are eggless cakes available in Chitrakoot?", answer: "Yes, all flavours are available in eggless variants for Chitrakoot delivery." }
    ]
  },

  "sonbhadra": {
    cityName: "Sonbhadra",
    metaTitle: "Cake Delivery in Sonbhadra | Power Capital India Son River Vindhyas Renukoot | RedHeart",
    metaDescription: "Order cakes online in Sonbhadra. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sonbhadra",
    metaKeyword: "cake delivery sonbhadra, order cake online sonbhadra, birthday cake sonbhadra, custom cake sonbhadra, same day cake delivery sonbhadra Power Capital India Son River Vindhyas Renukoot Obra NTPC Rihand Dam Hindalco",
    footerContent: `
<h2>Cake Delivery in Sonbhadra — India's "Power Capital," Rihand Dam, Vindhya Ranges, and Renukoot Industrial Zone</h2>
<p>Sonbhadra — the district headquarters of Sonbhadra district in Uttar Pradesh (UP-MP-Jharkhand-Chhattisgarh four-state junction; Vindhya Ranges and Son River valley), one of India's most important industrial districts — often called India's "Power Capital" (the "Power Capital of India" title (Sonbhadra district — highest power generation in any single district of India; multiple large thermal power stations: the Obra Thermal Power Station (NTPC+UPRVUNL), Anpara Thermal Power Station, Shaktinagar Super Thermal Power Station (NTPC), Rihand Super Thermal Power Station; collectively thousands of megawatts of installed capacity); the Rihand Dam and Govind Ballabh Pant Sagar (the Rihand Dam on the Rihand River — built 1954-62; the Govind Ballabh Pant Sagar reservoir created is one of India's largest man-made lakes (covering approximately 467 sq km); the dam was built by flooding several Kol-Gond tribal villages; rehabilitation controversies); the Renukoot / Renusagar industrial town (Hindalco Aluminium (Aditya Birla Group) smelter at Renukoot — one of India's largest aluminium plants; Renusagar Power Company; the Renukoot-Pipri area is a major industrial complex); the Son River (flows through Sonbhadra — a major Ganga tributary; flows westward through the Vindhya range and then turns east; Deoha and Son tributaries); the tribal communities (the Kol, Gond, Munda, and Baiga tribal communities have historically inhabited the Sonbhadra forests; significant tribal population), and a city of India's Power Capital thermal plants and Hindalco Renukoot aluminium — is UP's most Power-Capital-highest-generation-Obra-Anpara-Rihand and Renukoot-Hindalco-aluminium Sonbhadra. From birthday parties in Sonbhadra to celebration cakes — RedHeart covers all areas: Sonbhadra city (Robertsganj), Renukoot, Obra, Anpara, Dudhi, Babhani, Pipri, Ghorawal.</p>
<p>Our Sonbhadra cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Rihand Dam / Power Capital / Vindhya Range-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonbhadra (Robertsganj), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Robertsganj, Renukoot, Obra, Anpara, Dudhi, Babhani, Pipri, Ghorawal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Rihand Dam Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sonbhadra (Robertsganj)?", answer: "Yes, same-day cake delivery is available across all Sonbhadra areas — Robertsganj, Renukoot, Obra, Anpara, Dudhi, Babhani, and Pipri — for orders placed before 3 PM." },
      { question: "Do you have Power Capital and Rihand Dam-themed cakes?", answer: "Yes! Sonbhadra's status as India's Power Capital (highest power generation in any single Indian district — Obra Thermal, Anpara Thermal, NTPC Shaktinagar, NTPC Rihand Super Thermal — thousands of megawatts total; Rihand Dam 1954-62 creating Govind Ballabh Pant Sagar — one of India's largest man-made lakes 467 sq km; Hindalco aluminium at Renukoot) inspires our most Power-Capital-Rihand-Dam-Vindhya fondant cakes." },
      { question: "Are eggless cakes available in Sonbhadra?", answer: "Yes, all flavours are available in eggless variants for Sonbhadra delivery." }
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
