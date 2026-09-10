// Cakes Batch 43 — 15 cities
// Northeast: Silchar, Nagaon, Tinsukia, Shillong (done?), Kohima, Imphal (done?), Aizawl (done?), Gangtok (done?)
// Rajasthan: Dungarpur (done 36), Banswara (done 36), Karauli (done 38) -- remaining: Barmer, Dholpur (done 35), Hanumangarh (done 34)
// Let's do fresh states/districts:
// HP: Mandi, Kullu
// Uttarakhand: Tehri, Pithoragarh, Champawat, Rudraprayag
// Punjab: Fazilka, Barnala, Mansa

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "silchar": {
    cityName: "Silchar",
    metaTitle: "Cake Delivery in Silchar | Barak Valley Tea Cultural Hub Assam | RedHeart",
    metaDescription: "Order cakes online in Silchar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Silchar",
    metaKeyword: "cake delivery silchar, order cake online silchar, birthday cake silchar, custom cake silchar, same day cake delivery silchar Barak Valley Bengali culture tea gardens Cachar Mizoram Manipur gateway Assam",
    footerContent: `
<h2>Cake Delivery in Silchar — Barak Valley's Bengali Capital, Cachar Tea Gardens, and Northeast India's Southern Gateway</h2>
<p>Silchar — the headquarters of Cachar district in Assam, the largest city of the Barak Valley and the cultural and commercial capital of southern Assam (the Barak Valley (comprising Cachar, Hailakandi, and Karimganj districts) is a distinct cultural region in southern Assam — separated from the Brahmaputra Valley by the Barail Range; the Barak River (originating in the Manipur hills) flows through Cachar before entering Bangladesh (where it becomes the Surma-Meghna system); the Barak Valley is predominantly Bengali-speaking and culturally connected to Bangladesh and West Bengal's traditions — unlike the Assamese Brahmaputra Valley; the Silchar Bengali Language Movement (1961) — when police fired on protesters demanding Bengali official status for the Cachar region — is commemorated as Bhasha Shahid Diwas (Language Martyrs' Day) in Assam; the Cachar region was a historic kingdom ruled by the Dimasa Kachari people (before Mughal and later British influence); the Cachar tea gardens are significant contributors to the tea industry; Silchar is the gateway to Mizoram (Aizawl), Manipur (Imphal), and the Barak valley hill regions; the Silchar Medical College is the major medical institution of southern Assam; the Silchar airport serves the entire Barak Valley region; the Sona Bill (Shibsagar-adjacent) wetland and Barak River ghats are scenic), and a city of Bengali language pride and Barak frontier — is southern Assam's most culturally Bengali and regionally significant city. From birthday parties in Silchar to celebration cakes — RedHeart covers all Silchar zones: Silchar town, Sonai, Lakhipur, Borkhola, Katigorah, Udharbond, Jiribam (Manipur border).</p>
<p>Our Silchar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Barak Valley Bengali / Cachar Tea / Language Martyrs-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Silchar, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Silchar town, Sonai, Lakhipur, Borkhola, Katigorah, Udharbond</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Black Forest, Photo Cake, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Silchar?", answer: "Yes, same-day cake delivery is available across all Silchar areas — Silchar town, Sonai, Lakhipur, Borkhola, and Katigorah — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Silchar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Silchar delivery." },
      { question: "Do you deliver midnight cakes in Silchar?", answer: "Yes, midnight birthday cake delivery is available across Silchar town and Sonai zones." }
    ]
  },

  "nagaon": {
    cityName: "Nagaon",
    metaTitle: "Cake Delivery in Nagaon | Kaziranga Gateway Brahmaputra Assam | RedHeart",
    metaDescription: "Order cakes online in Nagaon. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nagaon",
    metaKeyword: "cake delivery nagaon, order cake online nagaon, birthday cake nagaon, custom cake nagaon, same day cake delivery nagaon Kaziranga gateway Brahmaputra Koliabor tea gardens Assam central weaving textile Kolia Bhomora Setu bridge",
    footerContent: `
<h2>Cake Delivery in Nagaon — Kaziranga's Eastern Gateway, Kolia Bhomora Setu, and Central Assam's Weaving Heartland</h2>
<p>Nagaon — the headquarters of Nagaon district in Assam, one of Assam's most centrally significant and historically rich districts in the heart of the Brahmaputra Valley (the Nagaon district is the closest major district to the Kaziranga National Park (from the eastern side) — making it a gateway town for Kaziranga visitors; the Kolia Bhomora Setu (a famous historic bridge over the Brahmaputra at Tezpur — actually the Tezpur Bridge of 1987 — not to be confused; the Nagaon Bridge over the Brahmaputra is a significant connectivity link); the Nagaon area is one of Assam's most important centres for Assamese handloom weaving — the Sualkuchi-Nagaon weaving belt produces traditional Assamese Mekhela Chador (the traditional two-piece Assamese silk dress for women), Muga silk, and Pat silk; the Muga silk (GI product of Assam — produced only in Assam, a golden silk from the Muga silkworm) weaving is concentrated in the Brahmaputra Valley communities; the Nagaon district has extensive paddy cultivation and tea gardens in the Koliabor-Dhing belt; the Borpeta-Nagaon corridor is associated with the Vaishnavite tradition of the Ahom-Assam Satra system; the Silghat area (Nagaon) on the Brahmaputra is a port town; the Diphu Road (Karbi Anglong border) gives access to the Karbi Anglong hills from Nagaon; the district is known as "Nowgong" in colonial records), and a city of Muga silk and Kaziranga gateway — is central Assam's most textiley silken and rhinocerously proximate district. From birthday parties in Nagaon to celebration cakes — RedHeart covers all zones: Nagaon town, Hojai, Lumding, Dhing, Koliabor, Samaguri, Lanka, Morigaon adjacent.</p>
<p>Our Nagaon cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kaziranga Rhino / Muga Silk Assam / Mekhela Chador Weaving-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaon, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaon town, Hojai, Lumding, Dhing, Koliabor, Samaguri, Lanka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Kaziranga Rhino Fondant, Muga Silk Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nagaon?", answer: "Yes, same-day cake delivery is available across all Nagaon areas — Nagaon town, Hojai, Lumding, Dhing, Koliabor, and Samaguri — for orders placed before 3 PM." },
      { question: "Do you have Kaziranga Rhino and Muga Silk-themed cakes?", answer: "Yes! The Kaziranga National Park (UNESCO — world's most important one-horned rhino habitat, accessible from Nagaon's eastern side) and the GI Muga Silk (India's unique golden silk from the Muga silkworm — produced only in Assam's Brahmaputra Valley, woven into Mekhela Chador in Nagaon-Sualkuchi belt) inspire our most golden-silken and pre-historically horned Nagaon fondant cakes." },
      { question: "Are eggless cakes available in Nagaon?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nagaon delivery." }
    ]
  },

  "tinsukia": {
    cityName: "Tinsukia",
    metaTitle: "Cake Delivery in Tinsukia | Dibru-Saikhowa Oil Assam Myanmar Border | RedHeart",
    metaDescription: "Order cakes online in Tinsukia. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tinsukia",
    metaKeyword: "cake delivery tinsukia, order cake online tinsukia, birthday cake tinsukia, custom cake tinsukia, same day cake delivery tinsukia Digboi oil oldest refinery Maguri Motapung Ramsar wetland Assam Myanmar border Arunachal gateway",
    footerContent: `
<h2>Cake Delivery in Tinsukia — India's Easternmost Frontier, Digboi Oil Legacy, and Maguri-Motapung Ramsar Wetland</h2>
<p>Tinsukia — the headquarters of Tinsukia district in Assam, one of the most easternmost major cities of India — bordering Arunachal Pradesh, Nagaland, and close to the Myanmar border (Tinsukia district contains the Digboi area — where Asia's first commercial oil well was struck in 1889; the Digboi Oil Refinery (1901) is the world's oldest continuously operating oil refinery; the discovery was triggered by a British engineer noticing crude oil on the feet of elephants working in the forests (the exact apocryphal story) — Digboi (from "Dig boy, dig!" — the instruction given to workers) became the cradle of the Indian petroleum industry; the Maguri-Motapung Wetland (Tinsukia district — near Dibru-Saikhowa) is a Ramsar Wetland of International Importance — a magnificent floodplain wetland on the Brahmaputra's braided channels protecting Black-necked Storks, Greater Adjutant Storks, Gangetic Dolphins, Irrawaddy Dolphins, and Fishing Cats; the Dibru-Saikhowa National Park (straddling the Dibrugarh-Tinsukia border) has feral horses; Tinsukia is the commercial hub of the Assam-Arunachal-Nagaland frontier zone; the Ledo Road (the famous WWII Stilwell Road from Ledo, Tinsukia to Kunming, China — built by the Allies in 1942-45) starts from Ledo town in Tinsukia district; the Ledo coalfield is one of Assam's coal deposits), and a city of oil history and Ramsar wetlands — is India's most easterly commercial Assam district. From birthday parties in Tinsukia to celebration cakes — RedHeart covers all zones: Tinsukia town, Digboi, Ledo, Margherita, Doom Dooma, Doomdooma, Makum, Simaluguri.</p>
<p>Our Tinsukia cake range: Chocolate, Assam Tea-flavoured, Black Forest, Red Velvet, Mango, Photo Cakes, Fondant Digboi Asia First Oil Well / Maguri Ramsar Wetland / Ledo WWII Stilwell Road-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tinsukia, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tinsukia town, Digboi, Ledo, Margherita, Doom Dooma, Makum</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Assam Tea, Chocolate, Digboi Oil Fondant, Maguri Ramsar Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tinsukia?", answer: "Yes, same-day cake delivery is available across all Tinsukia areas — Tinsukia town, Digboi, Ledo, Margherita, Doom Dooma, and Makum — for orders placed before 3 PM." },
      { question: "Do you have Digboi Asia First Oil Well and Maguri Ramsar Wetland-themed cakes?", answer: "Yes! The Digboi Oil Field (Asia's first commercial oil well, 1889; world's oldest operating refinery 1901 — where crude oil was found on working elephants' feet and the name came from 'Dig boy, dig!') and the Maguri-Motapung Ramsar Wetland (rare Black-necked Storks, Greater Adjutant Storks, Irrawaddy Dolphins in the Brahmaputra braided channels) inspire our most historically petroleum and ornithologically Ramsar Tinsukia fondant cakes." },
      { question: "Are eggless cakes available in Tinsukia?", answer: "Yes, all flavours — Assam Tea, Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tinsukia delivery." }
    ]
  },

  "kohima": {
    cityName: "Kohima",
    metaTitle: "Cake Delivery in Kohima | WWII Battle Hornbill Festival Nagaland | RedHeart",
    metaDescription: "Order cakes online in Kohima. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kohima",
    metaKeyword: "cake delivery kohima, order cake online kohima, birthday cake kohima, custom cake kohima, same day cake delivery kohima WWII Battle of Kohima Hornbill Festival Naga tribes capital Nagaland Dzukou Valley",
    footerContent: `
<h2>Cake Delivery in Kohima — Battle of Kohima's WWII Legacy, Hornbill Festival's Naga Tribal Grandeur, and Dzukou Valley's Flowers</h2>
<p>Kohima — the capital of Nagaland, a city of extraordinary historical significance — the site of what Churchill called "the Stalingrad of the East" and the home of India's most spectacular tribal cultural festival (the Battle of Kohima (April-June 1944) — a critical WWII battle fought on the tennis court of the Deputy Commissioner's bungalow in Kohima — was the turning point that stopped the Japanese advance into India and began the Allied reconquest of Burma; the Japanese 15th Army (under General Mutaguchi) almost broke through to India; the Allied forces (British 2nd Division and Indian units) eventually prevailed in one of WWII's most ferocious close-quarter battles; the Kohima War Cemetery (Commonwealth War Graves Commission, maintained) on the tennis court site has the famous inscription: "When you go home, tell them of us and say, for your tomorrow, we gave our today"; the Hornbill Festival (December 1-10, Kisama Heritage Village, Kohima) — the most spectacular tribal cultural festival in Northeast India — showcases all 16 Naga tribes through traditional dance, music, warrior demonstrations, traditional games (like log drum beating, stone pulling, traditional archery), food, and craft; the Dzukou Valley (Kohima district-Senapati MP border) is one of Northeast India's most spectacular high-altitude valleys (2452 metres) — famous for its seasonal wildflowers (Dzukou lily — a unique species), cloud-forest landscapes, and trekking; Kohima is on the Manipur Road (NH-2 — Dimapur-Imphal highway)), and a city of WWII sacrifice and Naga tribal grandeur — is Nagaland's most historically wartime-significant and culturally festive capital. From birthday parties in Kohima to celebration cakes — RedHeart covers all Kohima zones: Kohima town, Dimapur adjacent, Pfutsero, Phek, Chumoukedima, Viswema, Zakhama.</p>
<p>Our Kohima cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Hornbill Festival Naga Warrior / Battle of Kohima WWII Tennis Court / Dzukou Valley Lily-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kohima, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kohima town, Pfutsero, Phek, Chumoukedima, Viswema, Zakhama</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hornbill Festival Fondant, Battle of Kohima WWII Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kohima?", answer: "Yes, same-day cake delivery is available across all Kohima areas — Kohima town, Pfutsero, Phek, Chumoukedima, and Viswema — for orders placed before 3 PM." },
      { question: "Do you have Hornbill Festival and Battle of Kohima WWII-themed cakes?", answer: "Yes! The Hornbill Festival (December 1-10, Kisama — the most spectacular Naga tribal cultural extravaganza in Northeast India with all 16 Naga tribes in warrior dance-music-craft-food celebration) and the Battle of Kohima (the 1944 WWII 'Stalingrad of the East' — fought on a tennis court with the famous CWGC inscription 'for your tomorrow, we gave our today') inspire our most tribally and martially honoured Kohima fondant cakes." },
      { question: "Are eggless cakes available in Kohima?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kohima delivery." }
    ]
  },

  "mandi": {
    cityName: "Mandi",
    metaTitle: "Cake Delivery in Mandi | 81 Shiva Temples Uhl River HP | RedHeart",
    metaDescription: "Order cakes online in Mandi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mandi",
    metaKeyword: "cake delivery mandi, order cake online mandi, birthday cake mandi, custom cake mandi, same day cake delivery mandi 81 Shiva temples Vaishno Devi Beas River Uhl Pandoh Dam Rewalsar Lake Himachal Pradesh",
    footerContent: `
<h2>Cake Delivery in Mandi — City of 81 Shiva Temples, Rewalsar Sacred Lake, and Himachal's Commercial Crossroads</h2>
<p>Mandi — the headquarters of Mandi district in Himachal Pradesh, often called the "Varanasi of the Hills" for its extraordinary concentration of Shiva temples — a city of medieval stone temple carvers and Beas River confluence (the Mandi town has 81 stone temples (predominantly Shaivite), most built in the medieval period (15th-18th century CE) by the Mandi royal family (Sen dynasty); the most famous are the Trilokinath temple and the Bhutnath temple (both with stone shikhara-style architecture in the hills tradition); the Mandi Shivratri Fair (the Bhutnath Mela — one of Himachal's largest traditional fairs, lasting 7 days) draws hundreds of thousands of devotees from across the hills; the Rewalsar Lake (Tso Pema — "Lotus Lake") — approximately 24 km from Mandi — is one of the holiest sites for Hindus, Sikhs, and Buddhists simultaneously: for Buddhists it is where Guru Padmasambhava (Guru Rinpoche) meditated and rose to the sky as a lotus on water (the lake has floating reed islands); for Sikhs it has a gurdwara associated with Guru Gobind Singh; for Hindus it has three temples; the Pandoh Dam (on the Beas River — the first large Himachal dam, 1977) is a major water diversion project sending Beas water through tunnels to the Sutlej for the Beas-Sutlej Link hydro project; the Mandi district borders Kullu, Kangra, Bilaspur, Shimla, and Kinnaur), and a city of sacred crossroads and 81 stone Shiva temples — is Himachal's most multi-faithed and Hindu-medieval district. From birthday parties in Mandi to celebration cakes — RedHeart covers all Mandi zones: Mandi town, Sundernagar, Jogindernagar, Rampur Bushahr adjacent, Aut, Kullu Road, Rewalsar, Karsog.</p>
<p>Our Mandi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mandi 81 Shiva Temples / Rewalsar Tso Pema Lotus Lake / Beas Pandoh Dam-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandi, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandi town, Sundernagar, Jogindernagar, Aut, Rewalsar, Karsog</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mandi Shiva Temple Fondant, Rewalsar Lake Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mandi?", answer: "Yes, same-day cake delivery is available across all Mandi areas — Mandi town, Sundernagar, Jogindernagar, Aut, Rewalsar, and Karsog — for orders placed before 3 PM." },
      { question: "Do you have Mandi 81 Shiva Temples and Rewalsar Lake-themed cakes?", answer: "Yes! Mandi's 81 medieval Shiva temples (earning it the title 'Varanasi of the Hills') and the Rewalsar Tso Pema Lake (the sacred 'Lotus Lake' sacred simultaneously to Buddhists as Guru Padmasambhava's meditation site, Sikhs for Guru Gobind Singh, and Hindus — with floating reed islands) inspire our most multiply-sacred Mandi fondant cakes." },
      { question: "Are eggless cakes available in Mandi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mandi delivery." }
    ]
  },

  "kullu": {
    cityName: "Kullu",
    metaTitle: "Cake Delivery in Kullu | Dussehra Rath Yatra Valley Himachal Pradesh | RedHeart",
    metaDescription: "Order cakes online in Kullu. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kullu",
    metaKeyword: "cake delivery kullu, order cake online kullu, birthday cake kullu, custom cake kullu, same day cake delivery kullu Kullu Dussehra international Beas River valley apples Manali gateway Parvati Valley Himachal Pradesh",
    footerContent: `
<h2>Cake Delivery in Kullu — International Kullu Dussehra's Rath Yatra, Beas Valley Apple Orchards, and Parvati Valley's Sacred Hills</h2>
<p>Kullu — the headquarters of Kullu district in Himachal Pradesh, the Kullu Valley (Kulanthapitha — "end of the habitable world") — famous globally for its spectacular Dussehra festival and apple production (the Kullu Dussehra (International Kullu Dussehra Festival) — held every year starting on the 10th day of Navratri (Vijaya Dashami — the day others celebrate Dussehra by burning Ravana effigies) — is unique: unlike the rest of India, Kullu's Dussehra is not about burning Ravana but about the Rath Yatra (chariot procession) of the presiding deity Raghunath ji (Ram) through Kullu — and ALL 365+ local devatas (village deities, represented by their ornate palanquins) converge on Kullu for the 7-day festival; the spectacle of 365 deities' palanquins assembled in the Dhalpur Maidan (the Dhungri maidan of Kullu) is extraordinary — the largest inter-deity assembly in Himachal; the Beas River flows through the entire Kullu valley; the Kullu-Manali valley (Manali is 40 km north of Kullu) is one of India's most visited tourist corridors; the Kullu district produces some of India's finest apples (the Kullu apple — Red Delicious and Golden Delicious varieties from the Beas valley orchards); the Kullu shawl (GI-protected wool shawl with distinctive geometric border pattern) is one of Himachal's most famous craft products; the Parvati Valley (Kasol, Kheerganga — a Beas tributary from Barathi toward Malana) is a significant trekking and traveller destination; the Manikaran hot springs (sacred Sikh Gurdwara and Shiva temple) are in the Parvati Valley), and a city of 365-deity Dussehra and apple valley — is Himachal's most divinely assembled and fruitfully snow-fed district. From birthday parties in Kullu to celebration cakes — RedHeart covers all Kullu zones: Kullu town, Bhuntar, Aut, Bajaura, Nirmand, Sainj, Banjar, Ani, Kasol, Manikaran.</p>
<p>Our Kullu cake range: Chocolate, Apple-flavoured (Kullu apple!), Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kullu Dussehra Rath Yatra / 365 Deities Festival / Kullu Apple Valley / Parvati Valley Manikaran-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kullu, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kullu town, Bhuntar, Bajaura, Nirmand, Sainj, Banjar, Ani, Kasol, Manikaran</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple Kullu (signature), Chocolate, Kullu Dussehra Fondant, Parvati Valley Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kullu?", answer: "Yes, same-day cake delivery is available across all Kullu areas — Kullu town, Bhuntar, Bajaura, Nirmand, Sainj, and Banjar — for orders placed before 3 PM." },
      { question: "Do you have Kullu Dussehra 365-deity and Apple Valley-themed cakes?", answer: "Yes! The International Kullu Dussehra (unique 7-day festival where 365+ village deities' palanquins assemble in the Dhalpur Maidan — the largest inter-deity assembly in Himachal, starting on Vijaya Dashami) and the Kullu apple valley (Red Delicious and Golden Delicious from Beas valley orchards — signature Himachal fruit) inspire our most divinely assembled and fruitfully apple-crisp Kullu fondant cakes." },
      { question: "Are eggless cakes available in Kullu?", answer: "Yes, all flavours — Apple, Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kullu delivery." }
    ]
  },

  "tehri": {
    cityName: "Tehri",
    metaTitle: "Cake Delivery in Tehri | Tehri Dam Bhagirathi New Tehri Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Tehri Garhwal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tehri (Garhwal)",
    metaKeyword: "cake delivery tehri, order cake online tehri, birthday cake tehri, custom cake tehri, same day cake delivery tehri Tehri Dam Bhagirathi Bhilangana New Tehri Garhwal Uttarakhand Chamba Devprayag adjacent",
    footerContent: `
<h2>Cake Delivery in Tehri (Garhwal) — Tehri Dam's Submerged Royal Town, Bhagirathi-Bhilangana Confluence, and Uttarakhand's Hydropower Heart</h2>
<p>Tehri Garhwal — the headquarters of Tehri Garhwal district in Uttarakhand (the new district HQ is at New Tehri — built above the reservoir line), one of the most historically poignant districts in India — where an entire ancient royal town was submerged beneath a dam (the Tehri Dam (THDC — Tehri Hydro Development Corporation) on the Bhagirathi River near its confluence with the Bhilangana (a tributary from the Kedarnath-Gangotri direction) is one of India's largest and tallest dams (260.5 metres — among the world's tallest earth and rockfill dams) and one of India's largest hydroelectric power stations (2000 MW + 1000 MW pumped storage = 3000 MW total); the Old Tehri (the ancient capital of the Tehri Garhwal Kingdom — a 1,000-year-old royal city with the Narendra Shah Palace, bazaars, temples, and the royal heritage of the Parmar dynasty of Garhwal) was completely submerged beneath the Tehri reservoir when it filled (2006); the submergence of Old Tehri is one of modern India's most emotional displacement stories — tens of thousands of families were relocated; the New Tehri is a planned hilltop city built above the reservoir waterline; the Tehri Dam reservoir (Tehri Lake) is now a major adventure sports destination — water sports, zorbing, boating; the Devprayag (Alaknanda + Bhagirathi = Ganga origin) is downstream from Tehri), and a city of submerged history and hydroelectric grandeur — is Uttarakhand's most poignantly flooded and powerfully dammed city. From birthday parties in Tehri to celebration cakes — RedHeart covers all Tehri zones: New Tehri town, Chamba, Narendra Nagar, Ghansali, Pratapnagar, Jakhal, Devprayag adjacent.</p>
<p>Our Tehri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Tehri Dam Reservoir / Old Tehri Submerged / Bhagirathi-Bhilangana Confluence-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tehri Garhwal (New Tehri), Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">New Tehri town, Chamba, Narendra Nagar, Ghansali, Pratapnagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tehri Dam Reservoir Fondant, Mango, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tehri?", answer: "Yes, same-day cake delivery is available across all Tehri areas — New Tehri town, Chamba, Narendra Nagar, and Ghansali — for orders placed before 3 PM." },
      { question: "Do you have Tehri Dam and Old Tehri Submerged Royal Town-themed cakes?", answer: "Yes! The Tehri Dam (260.5 metres — one of the world's tallest earth-rockfill dams, 3000 MW total power) and the emotionally charged story of Old Tehri (a 1,000-year-old Garhwal royal capital — palaces, bazaars, temples — submerged in 2006 beneath the Tehri reservoir, displacing tens of thousands) inspire our most powerfully and poignantly submerged Tehri fondant cakes." },
      { question: "Are eggless cakes available in Tehri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tehri delivery." }
    ]
  },

  "pithoragarh": {
    cityName: "Pithoragarh",
    metaTitle: "Cake Delivery in Pithoragarh | Mini Kashmir Kalika Temple Nepal Tibet Border Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Pithoragarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pithoragarh",
    metaKeyword: "cake delivery pithoragarh, order cake online pithoragarh, birthday cake pithoragarh, custom cake pithoragarh, same day cake delivery pithoragarh Mini Kashmir Kalika Temple Nepal Tibet border Adi Kailash Narayan Ashram Kumaon Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Pithoragarh — "Mini Kashmir" Mountain Valley, Adi Kailash Nepal-Tibet Tri-Border, and Kumaon's Eastern Frontier</h2>
<p>Pithoragarh — the headquarters of Pithoragarh district in Uttarakhand, the "Mini Kashmir of Uttarakhand" — an extraordinarily scenic Himalayan district bordering both Nepal and Tibet (Pithoragarh town is set in a spectacular bowl-shaped valley surrounded by snow-capped peaks — earning it the "Mini Kashmir" nickname from tourists; the district shares international borders with both Nepal (Susta border, Api Himal area) and Tibet (China — via the Lipulekh Pass); the Adi Kailash (Chhota Kailash — a sacred peak in the Johar Valley of Pithoragarh, considered the abode of Shiva and used as the base camp for the Adi Kailash parikrama) is one of the 5 sacred Kailash mountains; the OM Parvat (a mountain near the China border whose snow patterns form the sacred "OM" symbol) is in Pithoragarh district; the Narayan Ashram (Narayan Swami established 1936 at Tawaghat) is a significant Himalayan ashram-school; the Kalika temple (above Pithoragarh town) is a significant Shakti shrine; the Dharchula town (Pithoragarh district) is on the Kali River (India-Nepal border) — gateway to the Lipulekh border pass (Kailash Mansarovar yatra); the Munsiyari area (the "Banjir of Uttarakhand" with spectacular Panchhuli peak views) is in Pithoragarh; the Soar Valley is an agricultural valley in the district; the Darma, Byas, and Chaudans valleys are remote trans-Himalayan valleys), and a city of Nepal-Tibet tri-border and OM mountain snow — is Kumaon's most frontier-remote and snow-sacred Himalayan district. From birthday parties in Pithoragarh to celebration cakes — RedHeart covers all zones: Pithoragarh town, Dharchula, Munsiyari, Gangolihat, Berinag, Didihat, Champawat adjacent.</p>
<p>Our Pithoragarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Adi Kailash / OM Parvat Snow Symbol / Munsiyari Panchhuli / Dharchula Nepal Border Kali River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pithoragarh, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pithoragarh town, Dharchula, Munsiyari, Gangolihat, Berinag, Didihat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Adi Kailash Fondant, OM Parvat Snow Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pithoragarh?", answer: "Yes, same-day cake delivery is available across all Pithoragarh areas — Pithoragarh town, Dharchula, Munsiyari, Gangolihat, and Berinag — for orders placed before 3 PM." },
      { question: "Do you have Adi Kailash and OM Parvat Snow Symbol-themed cakes?", answer: "Yes! The Adi Kailash (Chhota Kailash — one of the five sacred Kailash mountains, abode of Shiva in Johar Valley) and the OM Parvat (a mountain near the China border whose snow naturally forms the sacred OM symbol — visible in satellite images) inspire our most divinely Himalayan and snow-scripturally sacred Pithoragarh fondant cakes." },
      { question: "Are eggless cakes available in Pithoragarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pithoragarh delivery." }
    ]
  },

  "rudraprayag": {
    cityName: "Rudraprayag",
    metaTitle: "Cake Delivery in Rudraprayag | Kedarnath Char Dham Mandakini Alaknanda | RedHeart",
    metaDescription: "Order cakes online in Rudraprayag. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rudraprayag",
    metaKeyword: "cake delivery rudraprayag, order cake online rudraprayag, birthday cake rudraprayag, custom cake rudraprayag, same day cake delivery rudraprayag Kedarnath Jyotirlinga Char Dham Mandakini Alaknanda Panchkedar Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Rudraprayag — Kedarnath's Himalayan Jyotirlinga, Mandakini-Alaknanda Prayag, and Panch Kedar Gateway</h2>
<p>Rudraprayag — the headquarters of Rudraprayag district in Uttarakhand, the gateway to the Char Dham pilgrimage — home to Kedarnath, one of India's twelve Jyotirlinga and one of the holiest mountains in Hinduism (the Kedarnath Temple (Jyotirlinga, one of 12 — the holiest Shiva shrine at 3,583 metres in the Garhwal Himalayas, set against the Kedarnath glacier) is the most revered of the Panch Kedar (five Shiva temples of Garhwal) and one of the four Char Dham pilgrimage sites; the temple (built in the 8th century CE by Adi Shankaracharya — who also died in Kedarnath and whose samadhi is behind the temple) is open only May-November due to winter snowfall; the Kedarnath Tragedy (June 2013 — the most devastating cloud-burst and flash flood in Uttarakhand's recorded history — killed thousands of pilgrims and villagers, with the Mandakini River in spate destroying the temple precinct; the Bhairavnath idol and the temple itself survived); the Rudraprayag Sangam (where the Mandakini River from Kedarnath meets the Alaknanda River from Badrinath — forming the Prayag — sacred bathing confluence) is the namesake of the district; the Jim Corbett connection: the famous Man-eater of Rudraprayag (a leopard shot by Jim Corbett in 1926, after it killed 125 people over 8 years, detailed in his book "The Man-Eater of Rudraprayag"); the Panch Kedar (Kedarnath, Tungnath — world's highest Shiva temple, Rudranath, Madhyamaheshwar, Kalpeshwar) are all in this region), and a city of Jyotirlinga pilgrimage and man-eating leopard lore — is Uttarakhand's most sacred and wildest high-altitude Char Dham district. From birthday parties in Rudraprayag to celebration cakes — RedHeart covers all zones: Rudraprayag town, Ukhimath, Agastmuni, Tilwara, Sonprayag, Guptkashi, Gaurikund, Kedarnath valley.</p>
<p>Our Rudraprayag cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kedarnath Jyotirlinga / Rudraprayag Mandakini-Alaknanda Sangam / Tungnath Panch Kedar / Jim Corbett Man-eater-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rudraprayag, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rudraprayag town, Ukhimath, Agastmuni, Tilwara, Sonprayag, Guptkashi, Gaurikund</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kedarnath Jyotirlinga Fondant, Mandakini Sangam Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rudraprayag?", answer: "Yes, same-day cake delivery is available across all Rudraprayag areas — Rudraprayag town, Ukhimath, Agastmuni, Tilwara, Sonprayag, and Guptkashi — for orders placed before 3 PM." },
      { question: "Do you have Kedarnath Jyotirlinga and Jim Corbett Man-eater-themed cakes?", answer: "Yes! The Kedarnath Temple (Jyotirlinga at 3,583 metres — Adi Shankaracharya-built, survived the 2013 Mandakini flood disaster while thousands perished) and the Man-eater of Rudraprayag (the legendary leopard that killed 125 people over 8 years before Jim Corbett shot it in 1926 — immortalised in his book) inspire our most divinely glacial and legendarily carnivorous Rudraprayag fondant cakes." },
      { question: "Are eggless cakes available in Rudraprayag?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rudraprayag delivery." }
    ]
  },

  "fazilka": {
    cityName: "Fazilka",
    metaTitle: "Cake Delivery in Fazilka | Pakistan Border Ferozepur Punjab | RedHeart",
    metaDescription: "Order cakes online in Fazilka. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fazilka",
    metaKeyword: "cake delivery fazilka, order cake online fazilka, birthday cake fazilka, custom cake fazilka, same day cake delivery fazilka Pakistan border Sutlej River cotton Hussainiwala memorial Punjab India-Pakistan",
    footerContent: `
<h2>Cake Delivery in Fazilka — Pakistan Border District, Hussainiwala Martyrs Memorial, and Sutlej Cotton Heartland</h2>
<p>Fazilka — the headquarters of Fazilka district in Punjab (carved from Ferozepur in 2011), India's westernmost major Punjab city — directly on the India-Pakistan border (the Fazilka district is on the India-Pakistan border — the International Border runs through Fazilka's western edge; the Hussainiwala (in Fazilka district on the Sutlej River border) — the National Martyrs Memorial at Hussainiwala commemorates three great Indian revolutionaries: Bhagat Singh, Rajguru, and Sukhdev, who were hanged by the British on March 23, 1931 and cremated at Hussainiwala on the Sutlej (the cremation site is now a memorial park); the BSF (Border Security Force) Retreat Ceremony at Hussainiwala (similar to Wagah-Attari ceremony) is held daily at sunset; the Fazilka area is a major cotton and wheat growing zone — the Malwa belt of Punjab; the Sutlej River flows through the district (the Sutlej forms the border in some sections and is the lifeline for canal irrigation); the Ferozepur Cantonment (adjacent, though a separate district) has historic military significance; Fazilka district is known for its sugarcane and vegetable production in the fertile Sutlej doab; the India-Pakistan agricultural comparison across the Fazilka border is striking — both sides have similar land but different development stories), and a city of border memorials and Sutlej cotton fields — is Punjab's most westerly and Bhagat Singh-pilgrim-accessed border district. From birthday parties in Fazilka to celebration cakes — RedHeart covers all Fazilka zones: Fazilka town, Abohar, Jalalabad, Arniwala, Fazilka zone.</p>
<p>Our Fazilka cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Hussainiwala Bhagat Singh Martyrs Memorial / Sutlej Border / BSF Retreat Ceremony-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fazilka, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fazilka town, Abohar, Jalalabad, Arniwala, Hussainiwala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hussainiwala Martyrs Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fazilka?", answer: "Yes, same-day cake delivery is available across all Fazilka areas — Fazilka town, Abohar, Jalalabad, Arniwala, and Hussainiwala — for orders placed before 3 PM." },
      { question: "Do you have Hussainiwala Bhagat Singh Martyrs Memorial-themed cakes?", answer: "Yes! The Hussainiwala National Martyrs Memorial (the cremation site of Bhagat Singh, Rajguru, and Sukhdev — hanged March 23, 1931 — on the Sutlej River border with Pakistan, with a daily BSF Retreat ceremony) inspire our most patriotically revolutionary Fazilka fondant cakes." },
      { question: "Are eggless cakes available in Fazilka?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Fazilka delivery." }
    ]
  },

  "barnala": {
    cityName: "Barnala",
    metaTitle: "Cake Delivery in Barnala | Cotton Textile Malwa Punjab | RedHeart",
    metaDescription: "Order cakes online in Barnala. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barnala",
    metaKeyword: "cake delivery barnala, order cake online barnala, birthday cake barnala, custom cake barnala, same day cake delivery barnala cotton textile Malwa belt agricultural Punjab Tapa Dhanaula",
    footerContent: `
<h2>Cake Delivery in Barnala — Malwa Punjab's Cotton Belt, Tapa Industrial Area, and Punjab's Compact Central District</h2>
<p>Barnala — the headquarters of Barnala district in Punjab (carved from Sangrur in 2006), one of Punjab's most compact and purely agricultural districts in the heart of the Malwa region (the Barnala district is in the Malwa region of Punjab — the southern part of Punjab (below the Satluj) which is historically distinct from the Majha (around Amritsar) and Doaba (between the Beas and Satluj) regions; the Malwa region is Punjab's most agriculturally dominant area — producing wheat, cotton, and rice; Barnala town has significant cotton ginning and textile industries; the Tapa (Barnala district) area has small-scale industries; the district is primarily known for its agricultural economy and Sikh religious traditions; the Bhagat Singh family connection: the village Khatkar Kalan (Bhagat Singh's ancestral village — though in Nawanshahr district, the Malwa revolutionary tradition is strong in this belt); the Barnala district borders Ludhiana, Sangrur, Mansa, and Fatehgarh Sahib; the Ghaggar River system drains parts of the district; the district has significant Sikh gurdwaras; the Barnala-Tapa area has farm-to-market chains for Malwa's wheat and cotton produce), and a compact Malwa agricultural district — is Punjab's most centrally agricultural and textiley industrial Malwa district. From birthday parties in Barnala to celebration cakes — RedHeart covers all Barnala zones: Barnala town, Tapa, Dhanaula, Bhadaur, Mehal Kalan.</p>
<p>Our Barnala cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barnala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barnala town, Tapa, Dhanaula, Bhadaur, Mehal Kalan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barnala?", answer: "Yes, same-day cake delivery is available across all Barnala areas — Barnala town, Tapa, Dhanaula, Bhadaur, and Mehal Kalan — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Barnala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Barnala delivery." },
      { question: "Do you deliver midnight cakes in Barnala?", answer: "Yes, midnight birthday cake delivery is available across Barnala town and Tapa zones." }
    ]
  },

  "mansa": {
    cityName: "Mansa",
    metaTitle: "Cake Delivery in Mansa | Cotton Ghaggar Malwa Punjab | RedHeart",
    metaDescription: "Order cakes online in Mansa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mansa",
    metaKeyword: "cake delivery mansa, order cake online mansa, birthday cake mansa, custom cake mansa, same day cake delivery mansa cotton Ghaggar River Malwa Punjab agricultural Sardulgarh Budhlada Sarsa",
    footerContent: `
<h2>Cake Delivery in Mansa — Ghaggar River Plain, Cotton Malwa Belt, and Rajasthan-Punjab Border Agriculture</h2>
<p>Mansa — the headquarters of Mansa district in Punjab, one of Punjab's most southerly districts bordering Haryana and Rajasthan — part of the Malwa cotton belt (the Mansa district is on the Malwa plateau in southern Punjab, where the Ghaggar River (the ancient Saraswati River of Vedic tradition — now a seasonal river flowing from Haryana through Mansa toward Rajasthan's Anupgarh) drains the plains; the Ghaggar is especially significant in Vedic archaeology — the Harappan civilisation sites along the Ghaggar-Hakra (the dried river) include some of the largest known Harappan sites; the Mansa district is a significant cotton-producing area in the Malwa belt — cotton ginning and oil extraction industries are present; wheat and rice are also major crops; the Sardulgarh, Budhlada, and Bareta areas are significant towns in the district; Mansa shares its border with Haryana's Sirsa and Fatehabad districts; the district has significant communities of Balmiki, Ravidassia, and other Dalit communities who have historically been agricultural workers; the Mansa area was historically associated with the princely state of Patiala; the Mansa-Barnala belt is part of Punjab's cotton-wheat agricultural corridor), and a Ghaggar-Harappan river plain district — is Punjab's most Vedic-riverine and cotton-producing southern boundary district. From birthday parties in Mansa to celebration cakes — RedHeart covers all Mansa zones: Mansa town, Sardulgarh, Budhlada, Bareta, Jhunir, Bhikhi.</p>
<p>Our Mansa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mansa, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mansa town, Sardulgarh, Budhlada, Bareta, Jhunir, Bhikhi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mansa?", answer: "Yes, same-day cake delivery is available across all Mansa areas — Mansa town, Sardulgarh, Budhlada, Bareta, and Jhunir — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mansa?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mansa delivery." },
      { question: "Do you deliver midnight cakes in Mansa?", answer: "Yes, midnight birthday cake delivery is available across Mansa town and Sardulgarh zones." }
    ]
  },

  "champawat": {
    cityName: "Champawat",
    metaTitle: "Cake Delivery in Champawat | Jim Corbett Man Eater Nepal Border Kumaon | RedHeart",
    metaDescription: "Order cakes online in Champawat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Champawat",
    metaKeyword: "cake delivery champawat, order cake online champawat, birthday cake champawat, custom cake champawat, same day cake delivery champawat Jim Corbett man eater of Champawat Nepal Kali River Chand dynasty Katyuri Kumaon Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Champawat — Jim Corbett's Champawat Man-Eater, Chand Kingdom Capital, and Kali River Nepal Border</h2>
<p>Champawat — the headquarters of Champawat district in Uttarakhand (one of the newer districts carved from Pithoragarh in 1997), one of the most historically significant Kumaon cities and the territory of Jim Corbett's most famous man-eater hunt (the Champawat Tigress — the subject of Jim Corbett's book "Maneaters of Kumaon" — was a female Bengal Tiger that killed 436 people in Kumaon (India) and Nepal between 1900-1907, making it responsible for the most human fatalities caused by a single animal in recorded history; Corbett shot the tigress in Champawat in 1907 after a remarkable tracking hunt through the dense Kumaon hills; the Champawat Tigress holds the Guinness World Record for the highest number of human kills by a single animal; Champawat town was the capital of the Chand dynasty (Katyuri-Chand Rajput rulers) of Kumaon before they moved to Almora; the Baleshwar temple complex in Champawat (12th century CE) has beautiful medieval Kumaon temple architecture; the Kali River (forming the Nepal-India border in Uttarakhand) is near Champawat; the Tanakpur hydro project is downstream on the Sharda/Kali River; the district borders Nepal's Darchula district; the Purnagiri Devi temple (Purnagiri — a significant Shakti peeth, accessible through Champawat) draws millions of pilgrims), and a city of man-eating tiger record and medieval Chand kingdom legacy — is Kumaon's most Corbett-historically significant and Shakti-pilgrim accessed border district. From birthday parties in Champawat to celebration cakes — RedHeart covers all Champawat zones: Champawat town, Tanakpur, Lohaghat, Pati, Barakot, Purnagiri.</p>
<p>Our Champawat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Champawat Tigress Jim Corbett Record / Baleshwar Chand Dynasty / Purnagiri Devi Shakti Peeth-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champawat, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champawat town, Tanakpur, Lohaghat, Pati, Barakot, Purnagiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Champawat Tigress Fondant, Purnagiri Devi Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Champawat?", answer: "Yes, same-day cake delivery is available across all Champawat areas — Champawat town, Tanakpur, Lohaghat, Pati, and Purnagiri — for orders placed before 3 PM." },
      { question: "Do you have Champawat Tigress Jim Corbett Record-themed cakes?", answer: "Yes! The Champawat Tigress (shot by Jim Corbett in 1907 after 436 recorded kills in Kumaon-Nepal between 1900-1907 — the Guinness World Record for most human fatalities caused by a single animal in history) and the Purnagiri Devi Shakti Peeth (one of India's most visited hill pilgrimages, drawing millions annually) inspire our most record-breakingly carnivorous and divinely Shakti Champawat fondant cakes." },
      { question: "Are eggless cakes available in Champawat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Champawat delivery." }
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
