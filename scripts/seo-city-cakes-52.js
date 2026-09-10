// Cakes Batch 52 — 13 cities
// Odisha: Ganjam (Berhampur), Puri, Khordha (Bhubaneswar), Nayagarh
// Assam: North Lakhimpur, Nalbari, Kamrup Rural (Guwahati Rural)
// Telangana: Vikarabad, Medchal
// Bihar: Siwan, Darbhanga
// WB: Cooch Behar, Jalpaiguri

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "berhampur": {
    cityName: "Berhampur",
    metaTitle: "Cake Delivery in Berhampur | Silk City Toshali Temple Rushikulya Odisha | RedHeart",
    metaDescription: "Order cakes online in Berhampur (Ganjam). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Berhampur (Ganjam)",
    metaKeyword: "cake delivery berhampur ganjam, order cake online berhampur, birthday cake berhampur, custom cake berhampur ganjam, same day cake delivery berhampur Silk City Berhampur Ganjam Ollive Ridley turtle Rushikulya beach Gopalpur Toshali temple Odisha",
    footerContent: `
<h2>Cake Delivery in Berhampur (Ganjam) — Silk City of Odisha, Rushikulya Olive Ridley Turtle Nesting, and Gopalpur Beach</h2>
<p>Berhampur (Brahmapur) — the second-largest city in Odisha and the headquarters of Ganjam district, one of Odisha's most culturally vibrant commercial cities — the "Silk City of Odisha" and home to the world's second-largest Olive Ridley sea turtle nesting (the Berhampur/Brahmapur city is known for its silk (the pattasaree/Berhampur silk — a distinctively-designed Odishan silk saree woven in the city and district; various interlocked double-weave patterns); the Rushikulya River mouth (a major Olive Ridley sea turtle nesting site — the Rushikulya rookery; together with Gahirmatha in Kendrapara district, Rushikulya sees mass-nesting (Arribada) of Olive Ridley sea turtles; the Ganjam coast (especially November-March) sees hundreds of thousands of sea turtles nesting simultaneously — one of the world's most extraordinary wildlife events; the Rushikulya Beach nesting (late February-March Arribada) is a spectacular sight accessible to visitors with Forest Department permission); the Gopalpur-on-Sea (a historic sea resort town in Ganjam — once a major trading port; Gopalpur Beach with its lighthouse, jetty, and old-world colonial ambiance); the Borra Caves (Jaugada — the site of a major Ashokan Rock Edict inscribed after the Kalinga War; near Berhampur)); the Taratarini Temple (the most significant Shakti shrine in Odisha — a twin-goddess Taratarini temple on a hilltop in Ganjam; millions of pilgrims visit during Chaitra and Magha Navami); the Berhampur University, and a city of silk and sea turtle spectacle — is Odisha's most silkily Brahmapur-woven and Olive-Ridley-Arribada-mass-nestingly spectacular district. From birthday parties in Berhampur to celebration cakes — RedHeart covers all Ganjam zones: Berhampur city, Chhatrapur, Bhanjanagar, Phulbani (adjacent), Gopalpur, Aska, Hinjilicut.</p>
<p>Our Berhampur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Berhampur Silk Saree / Rushikulya Olive Ridley Turtle Arribada / Taratarini Shakti Shrine / Gopalpur Beach-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Berhampur (Ganjam), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Berhampur city, Chhatrapur, Bhanjanagar, Gopalpur, Aska, Hinjilicut</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Berhampur Silk Fondant, Olive Ridley Turtle Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Berhampur (Ganjam)?", answer: "Yes, same-day cake delivery is available across all Berhampur areas — Berhampur city, Chhatrapur, Bhanjanagar, Gopalpur, Aska, and Hinjilicut — for orders placed before 3 PM." },
      { question: "Do you have Berhampur Silk and Olive Ridley Turtle Arribada-themed cakes?", answer: "Yes! The Berhampur Silk (Odishan silk sarees — pattasaree with interlocked double-weave patterns; Silk City of Odisha) and the Rushikulya Olive Ridley Sea Turtle Arribada (hundreds of thousands of sea turtles mass-nesting simultaneously in February-March; one of the world's most extraordinary wildlife events) inspire our most silkily woven and turtle-arribada-mass-nestingly spectacular Berhampur fondant cakes." },
      { question: "Are eggless cakes available in Berhampur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Berhampur (Ganjam) delivery." }
    ]
  },

  "puri": {
    cityName: "Puri",
    metaTitle: "Cake Delivery in Puri | Jagannath Temple Rath Yatra Char Dham Beach Odisha | RedHeart",
    metaDescription: "Order cakes online in Puri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Puri",
    metaKeyword: "cake delivery puri, order cake online puri, birthday cake puri, custom cake puri, same day cake delivery puri Jagannath Temple Rath Yatra Char Dham Gundicha GI Puri Sand Art Sea Beach Mahaprasad Odisha",
    footerContent: `
<h2>Cake Delivery in Puri — Jagannath Rath Yatra (World's Largest Chariot Festival), Char Dham, GI Puri Sand Art</h2>
<p>Puri — the district headquarters of Puri district in Odisha, one of India's four Char Dhams and one of the most significant pilgrimage and coastal cities — the abode of Lord Jagannath (the Jagannath Temple (Srimandir — 12th century CE Ganga dynasty King Anantavarman Chodaganga Deva — the 65-metre shikhara visible from the sea; dedicated to Lord Jagannath (Jagat Nath — Lord of the Universe — a syncretic deity combining Vishnu/Krishna with tribal Sabara traditions; the Neem wood idol is uniquely carved and replaced every 8-19 years — Nabakalebara ceremony; the divine fever ritual); the Rath Yatra (Chariot Festival — Lord Jagannath, Balabhadra (Subhadra) pulled on three massive wooden chariots from the Srimandir to the Gundicha Temple; the Rath Yatra is the world's largest chariot festival (UNESCO recognition) — attended by 10-20 lakh pilgrims; the wooden chariots are 45 feet high; the word "Juggernaut" in English derives from "Jagannath" (a vehicle of overwhelming power) because of the size of the chariot); the Mahaprasad (the temple food — cooked in India's largest kitchen in 56 dishes (Chhappan Bhog) on massive earthen pots; rice-lentil; the Puri sea beach; the GI Puri Sand Art (the Sudarshan Patnaik style — Puri is India's sand art capital; massive sand sculptures on the Puri beach are recognized nationally and internationally); the Chilika Lake (Asia's largest coastal lagoon — 1,000+ sq km; adjacent Puri-Khordha; Irrawaddy dolphins; flamingos; largest wintering area for migratory birds in South Asia)), and the city of Juggernaut chariots and sand art — is Odisha's most Char-Dham-Jagannath-sacredly chariot-world-largest festival and GI-sand-artistically Puri. From birthday parties in Puri to celebration cakes — RedHeart covers all Puri zones: Puri city, Nimapara, Brahmagiri, Satyabadi, Delang, Kakatpur, Konark adjacent.</p>
<p>Our Puri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Jagannath Temple Char Dham / Rath Yatra Chariot / GI Sand Art / Mahaprasad Chhappan Bhog / Chilika Lake Irrawaddy Dolphin-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puri, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puri city, Nimapara, Brahmagiri, Satyabadi, Delang, Kakatpur, Konark</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jagannath Rath Yatra Fondant, Sand Art Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Puri?", answer: "Yes, same-day cake delivery is available across all Puri areas — Puri city, Nimapara, Brahmagiri, Satyabadi, Delang, Kakatpur, and Konark — for orders placed before 3 PM." },
      { question: "Do you have Jagannath Rath Yatra and Puri Sand Art-themed cakes?", answer: "Yes! The Jagannath Rath Yatra (the world's largest chariot festival — three 45-foot wooden chariots; 10-20 lakh pilgrims; the word 'Juggernaut' in English comes from 'Jagannath') and the GI Puri Sand Art (India's sand art capital — Sudarshan Patnaik's international fame; massive sand sculptures on the Puri beach) inspire our most chariot-world-largestingly Juggernaut and GI-sand-sculpturally artistic Puri fondant cakes." },
      { question: "Are eggless cakes available in Puri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Puri delivery." }
    ]
  },

  "nayagarh": {
    cityName: "Nayagarh",
    metaTitle: "Cake Delivery in Nayagarh | Satapada Chilika Badmul Mahanadi Odisha | RedHeart",
    metaDescription: "Order cakes online in Nayagarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nayagarh",
    metaKeyword: "cake delivery nayagarh, order cake online nayagarh, birthday cake nayagarh, custom cake nayagarh, same day cake delivery nayagarh Mahanadi Daspalla Badmul Boudh adjacent Chilika adjacent Satkosia buffer Odisha interior",
    footerContent: `
<h2>Cake Delivery in Nayagarh — Mahanadi Interior, Daspalla Hills, and Odisha's Forested Hinterland</h2>
<p>Nayagarh — the district headquarters of Nayagarh district in Odisha, an interior district of Odisha in the Mahanadi basin — one of Odisha's most forested and agriculturally rich districts (the Nayagarh district sits in the transitional zone between the Mahanadi delta and the Eastern Ghats; the Mahanadi River flows along the district's northern boundary; the Badmul Ghat (where the Seonath and Mahanadi rivers meet; a picturesque riverside spot); the Daspalla (a major town in Nayagarh district; Daspalla was a former princely state — the Daspalla Estate; the Khallikote forest area; dense sal forests cover much of Nayagarh); the Kandhamal adjacent (Phulbani area borders Nayagarh — the Kandh tribal community area); the Nayagarh district has a significant Mahanadi irrigation system; the Bhimkund (a sacred waterfall-pond in Nayagarh district); the Odisha coalfields and mineral deposits; the Boudh (adjacent district — with the famous Saptasajya temple on seven hills); the Satkosia Tiger Reserve buffer zone is adjacent), and a city of Mahanadi river interior and forested Daspalla hills — is Odisha's most Mahanadi-riversidely scenic and Daspalla-forest-princestate hinterland district. From birthday parties in Nayagarh to celebration cakes — RedHeart covers all Nayagarh zones: Nayagarh town, Daspalla, Odagaon, Khandapara, Nuagaon, Ranpur.</p>
<p>Our Nayagarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nayagarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nayagarh town, Daspalla, Odagaon, Khandapara, Nuagaon, Ranpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nayagarh?", answer: "Yes, same-day cake delivery is available across all Nayagarh areas — Nayagarh town, Daspalla, Odagaon, Khandapara, and Nuagaon — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nayagarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nayagarh delivery." },
      { question: "Do you deliver midnight cakes in Nayagarh?", answer: "Yes, midnight birthday cake delivery is available across Nayagarh town and Daspalla zones." }
    ]
  },

  "north-lakhimpur": {
    cityName: "North Lakhimpur",
    metaTitle: "Cake Delivery in North Lakhimpur | Brahmaputra Subansiri Assam Tea Flood Plains | RedHeart",
    metaDescription: "Order cakes online in North Lakhimpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in North Lakhimpur",
    metaKeyword: "cake delivery north lakhimpur, order cake online north lakhimpur, birthday cake north lakhimpur, custom cake north lakhimpur, same day cake delivery north lakhimpur Brahmaputra Subansiri Lakhimpur district Kaziranga adjacent Assam flood plains Arunachal gateway",
    footerContent: `
<h2>Cake Delivery in North Lakhimpur — Brahmaputra Flood Plains, Subansiri River, and Gateway to Arunachal Pradesh</h2>
<p>North Lakhimpur — the district headquarters of Lakhimpur district in Assam (not to be confused with Lakhimpur Kheri in Uttar Pradesh), one of Assam's most significant north-bank Brahmaputra districts and the gateway to Arunachal Pradesh (the Lakhimpur district (North Lakhimpur headquarters) sits on the north bank of the Brahmaputra, between the Subansiri River (to the west) and the Dikrong River (to the east); the Subansiri River — one of the largest tributaries of the Brahmaputra, originating in Tibet; the Subansiri is famous for its spectacular gorge as it descends from Arunachal into the Assam plains; the Lower Subansiri District (Arunachal) is immediately above; the Subansiri Lower Hydroelectric Dam Project (2,000 MW — one of India's largest hydroelectric projects; controversial for downstream flooding impact on Assam agriculture and ecology; under construction for decades); the Lakhimpur district suffers from severe annual Brahmaputra floods — the alluvial flood plains are among Assam's most fertile but also most flood-prone; the Majuli island (world's largest river island — in the Brahmaputra; Majuli is technically the headquarters of Majuli district but has proximity to Lakhimpur's north bank territory); Dikrong and Ranganadi rivers join the Brahmaputra in this area; the Assam tea gardens in the north bank Lakhimpur-Dhemaji areas; the route to Arunachal Pradesh (North Lakhimpur is an important staging point for Arunachal Pradesh entry via Narayanpur)), and a city of Brahmaputra flood plains and Arunachal gateway — is Assam's most Brahmaputra-north-bank-alluvially flood-plain-fertile and Arunachal-gateway Lakhimpur district. From birthday parties in North Lakhimpur to celebration cakes — RedHeart covers all Lakhimpur zones: North Lakhimpur town, Dhemaji, Narayanpur, Bihpuria, Telahi, Ghilamara, Kadam.</p>
<p>Our North Lakhimpur cake range: Chocolate, Assam Tea, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">North Lakhimpur (Lakhimpur), Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">North Lakhimpur town, Dhemaji, Narayanpur, Bihpuria, Telahi, Ghilamara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Assam Tea Cake, Chocolate, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in North Lakhimpur?", answer: "Yes, same-day cake delivery is available across all North Lakhimpur areas — North Lakhimpur town, Dhemaji, Narayanpur, Bihpuria, and Telahi — for orders placed before 3 PM." },
      { question: "Do you have Assam Tea cakes available in North Lakhimpur?", answer: "Yes! The North Lakhimpur-Lakhimpur district tea gardens on the north bank of the Brahmaputra inspire our signature Assam Tea cake — the subtle malty flavour of authentic first-flush Assam CTC tea leaves baked into a rich, aromatic celebration cake." },
      { question: "Are eggless cakes available in North Lakhimpur?", answer: "Yes, all flavours — Chocolate, Assam Tea, Black Forest, Red Velvet, Mango — are available in eggless variants for North Lakhimpur delivery." }
    ]
  },

  "nalbari": {
    cityName: "Nalbari",
    metaTitle: "Cake Delivery in Nalbari | Brahmaputra Valley Beki Assam Culture | RedHeart",
    metaDescription: "Order cakes online in Nalbari. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nalbari",
    metaKeyword: "cake delivery nalbari, order cake online nalbari, birthday cake nalbari, custom cake nalbari, same day cake delivery nalbari Brahmaputra south bank Beki River Assam Manas adjacent Bodoland Barbhag district culture",
    footerContent: `
<h2>Cake Delivery in Nalbari — Beki River Valley, Manas Corridor, and Assam's Cultural Heartland</h2>
<p>Nalbari — the district headquarters of Nalbari district in Assam (Nalbari was carved from Kamrup district in 1983), a significant agricultural district in the lower Brahmaputra Valley (the Nalbari district is situated on the south bank of the Brahmaputra; the Beki River (a tributary of the Brahmaputra) flows through or near Nalbari district — the Beki is a significant river with natural floods; the Nalbari district is adjacent to the Manas National Park and Tiger Reserve (UNESCO World Heritage 1985 — one of Assam's most biodiverse parks; home to the wild buffalo, pygmy hog (world's smallest pig), golden langur, and the Bengal florican; the Manas River; elephant corridor); the Bodoland Territorial Council (BTC) administered area borders Nalbari (Chirang, Kokrajhar districts of the BTC are adjacent); the Barbhag (an important village in Nalbari with Vaishnavite traditions); the Tihu (an important town in Nalbari district on the railway and road); Nalbari has significant Vaishnava Satra culture (like most of lower Assam); the district grows rice, jute, mustard; ULFA (United Liberation Front of Asom) had historical presence in the Assam valley districts), and a city of Beki River and Manas National Park corridor — is Assam's most Beki-river-floodplain-agriculturally fertile and Manas-UNESCO-wildlife-corridor district. From birthday parties in Nalbari to celebration cakes — RedHeart covers all Nalbari zones: Nalbari town, Tihu, Barbhag, Barkhetri, Tamulpur, Barama, Pub-Nalbari.</p>
<p>Our Nalbari cake range: Chocolate, Assam Tea, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalbari, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalbari town, Tihu, Barbhag, Barkhetri, Tamulpur, Barama</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Assam Tea Cake, Chocolate, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nalbari?", answer: "Yes, same-day cake delivery is available across all Nalbari areas — Nalbari town, Tihu, Barbhag, Barkhetri, Tamulpur, and Barama — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nalbari?", answer: "Yes, all flavours — Chocolate, Assam Tea, Black Forest, Red Velvet, Mango — are available in eggless variants for Nalbari delivery." },
      { question: "Do you deliver midnight cakes in Nalbari?", answer: "Yes, midnight birthday cake delivery is available across Nalbari town and Tihu zones." }
    ]
  },

  "siwan": {
    cityName: "Siwan",
    metaTitle: "Cake Delivery in Siwan | Netaji Subhas Chandra Bose Maulana Abul Kalam Bihar | RedHeart",
    metaDescription: "Order cakes online in Siwan. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Siwan",
    metaKeyword: "cake delivery siwan, order cake online siwan, birthday cake siwan, custom cake siwan, same day cake delivery siwan Maulana Abul Kalam Azad birthplace freedom fighter Daud Khan Ghagra River Bihar UP border agriculture",
    footerContent: `
<h2>Cake Delivery in Siwan — Maulana Abul Kalam Azad's Ancestral Home, Ghagra River, and North Bihar Agriculture</h2>
<p>Siwan — the district headquarters of Siwan district in Bihar (northern Bihar; on the Bihar-UP border), a historically significant district in the Bihar-UP border zone (the Siwan district is associated with Maulana Abul Kalam Azad (1888-1958) — India's first Education Minister and a major figure of the Indian freedom movement (Maulana Azad was born in Mecca but his ancestral home is in the Siwan area of northern Bihar; he was a great Urdu poet and Islamic scholar; he was one of the most prominent Muslim leaders supporting the Congress and the idea of a united India at the time of Partition; he opposed the two-nation theory; he was Education Minister from 1947-1958 and established the IITs, UGC, Sahitya Akademi, Sangeet Natak Akademi, Lalit Kala Akademi; Maulana Azad National Institute of Technology (MANIT) is named after him); the Ghagra River (flows through northern Bihar; creates the Bihar-UP boundary); the Siwan area grows wheat, paddy, and maize; the sugar industry; the Darauli, Maharajganj areas in Siwan; the Siwan district also borders Nepal (accessible from northern areas); the Shahuder Lake and Khandwa area), and a city of Maulana Azad's freedom heritage and Ghagra River — is Bihar's most Maulana Azad freedom-movement-ancestrally connected and agriculturally Ghagra-border district. From birthday parties in Siwan to celebration cakes — RedHeart covers all Siwan zones: Siwan city, Maharajganj, Darauli, Goriakothi, Hussainganj, Mairwa, Raghunathpur.</p>
<p>Our Siwan cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siwan, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siwan city, Maharajganj, Darauli, Goriakothi, Hussainganj, Mairwa, Raghunathpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Siwan?", answer: "Yes, same-day cake delivery is available across all Siwan areas — Siwan city, Maharajganj, Darauli, Goriakothi, Hussainganj, and Mairwa — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Siwan?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Siwan delivery." },
      { question: "Do you deliver midnight cakes in Siwan?", answer: "Yes, midnight birthday cake delivery is available across Siwan city and Maharajganj zones." }
    ]
  },

  "darbhanga": {
    cityName: "Darbhanga",
    metaTitle: "Cake Delivery in Darbhanga | Mithila Madhubani Art GI Bihar Nepal | RedHeart",
    metaDescription: "Order cakes online in Darbhanga. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Darbhanga",
    metaKeyword: "cake delivery darbhanga, order cake online darbhanga, birthday cake darbhanga, custom cake darbhanga, same day cake delivery darbhanga Mithila Madhubani Painting GI Mithila Paan Kamala Bagmati Nepal border Darbhanga Raj Bihar Maithili",
    footerContent: `
<h2>Cake Delivery in Darbhanga — Mithila Kingdom, GI Madhubani Painting, Maithili Culture, and Nepal-Border Heritage</h2>
<p>Darbhanga — the district headquarters of Darbhanga district in Bihar (Mithila region), one of Bihar's most culturally significant cities and the historic capital of the Mithila kingdom — home to GI Madhubani painting and Maithili language and culture (the Darbhanga Raj — one of the wealthiest and most influential zamindari estates in colonial India; the Darbhanga Raj ruled over a large area of north Bihar and contributed significantly to cultural and educational patronage; the Maharajas of Darbhanga supported Sanskrit education, Maithili literature, and Hindu cultural traditions; the Darbhanga Fort and palaces; the GI Madhubani (Mithila) Painting — one of India's most famous folk art traditions; Madhubani paintings are created by women (and now men) of the Mithila region (Madhubani district is adjacent to Darbhanga) on walls, floors, and now paper/canvas; the distinctive style uses geometric patterns, fish motifs, peacocks, lotus, scenes from the Ramayana and Krishna stories; double-line outlines; natural pigments (turmeric, indigo); GI-protected; internationally exhibited and exported; the Maithili language (one of India's 22 scheduled languages; spoken across Bihar-Nepal Terai Mithila region; has a rich medieval literary tradition — Vidyapati (1352-1448 CE) wrote the greatest Maithili poetry); the Kamala River and the Bagmati River (both flow through/near Darbhanga from Nepal); the GI Mithila Paan (betel leaf; the Mithila Paan from this area is famed for its distinctive taste)), and a city of GI Madhubani Art and Maithili cultural heritage — is Bihar's most Madhubani-GI-folk-artistically fish-lotus-painted and Maithili-literarily Vidyapati-medieval district. From birthday parties in Darbhanga to celebration cakes — RedHeart covers all Darbhanga zones: Darbhanga city, Madhubani (adjacent), Benipur, Baheri, Jayanagar, Singhwara, Kusheshwar Asthan.</p>
<p>Our Darbhanga cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant GI Madhubani Mithila Painting / Maithili Vidyapati / Darbhanga Raj Fort / Mithila Fish Motif-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Darbhanga, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Darbhanga city, Benipur, Baheri, Jayanagar, Singhwara, Kusheshwar Asthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Madhubani Art Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Darbhanga?", answer: "Yes, same-day cake delivery is available across all Darbhanga areas — Darbhanga city, Benipur, Baheri, Jayanagar, Singhwara, and Kusheshwar Asthan — for orders placed before 3 PM." },
      { question: "Do you have GI Madhubani Mithila Painting-themed cakes?", answer: "Yes! The GI Madhubani (Mithila) Painting (created by Mithila region women; distinctive fish-peacock-lotus-Ramayana geometric style with double-line outlines and natural turmeric-indigo pigments; GI-protected; internationally exhibited) inspires our most Mithila-fish-motif-lotus-geometrically folk-painted Darbhanga fondant cakes." },
      { question: "Are eggless cakes available in Darbhanga?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Darbhanga delivery." }
    ]
  },

  "vikarabad": {
    cityName: "Vikarabad",
    metaTitle: "Cake Delivery in Vikarabad | Ananthagiri Hills Bidar Border Telangana | RedHeart",
    metaDescription: "Order cakes online in Vikarabad. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vikarabad",
    metaKeyword: "cake delivery vikarabad, order cake online vikarabad, birthday cake vikarabad, custom cake vikarabad, same day cake delivery vikarabad Ananthagiri Hills Manjeera Dam Bidar border Telangana Karnataka watershed forest reserve",
    footerContent: `
<h2>Cake Delivery in Vikarabad — Ananthagiri Hills Forest, Manjeera Wildlife Sanctuary, and Telangana's Green Corridor</h2>
<p>Vikarabad — the district headquarters of Vikarabad district in Telangana (one of the new districts created during the 2016 Telangana reorganization from parts of Ranga Reddy and Mahbubnagar districts), a scenic forest district at the Karnataka border (the Vikarabad district is situated on the Deccan Plateau at the boundary of the Krishna-Godavari watershed and the Musi River basin; the Ananthagiri Hills (in the Vikarabad area — one of the few remaining forest patches near Hyderabad; a scenic retreat with waterfalls, dense teak-bamboo-bamboo forests; tribal Lambada community settlements; the Kotepalli Forest Range); the Bidar border (Karnataka) is adjacent to Vikarabad in the west; the Manjeera Wildlife Sanctuary (on the Manjeera River — a tributary of the Godavari; the Manjeera at Singur Dam is the water supply for Hyderabad; the Manjeera sanctuary protects gharials and marsh crocodiles; the Nagarjunasagar-Srisailam Tiger Reserve (the world's largest tiger reserve by area — 3,568 sq km) is accessible from southern Vikarabad district; the Janapahad Hills (adjacent to Ananthagiri); the Vikarabad city is on the Mumbai-Hyderabad railway line and NH-65), and a city of Ananthagiri forest hills and Manjeera river sanctuary — is Telangana's most forested Ananthagiri-green-corridor and Manjeera-Gharial-safetyly protected new district. From birthday parties in Vikarabad to celebration cakes — RedHeart covers all Vikarabad zones: Vikarabad city, Tandur, Pudur, Nawabpet, Kodangal, Dharur, Bantwaram.</p>
<p>Our Vikarabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vikarabad, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vikarabad city, Tandur, Pudur, Nawabpet, Kodangal, Dharur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vikarabad?", answer: "Yes, same-day cake delivery is available across all Vikarabad areas — Vikarabad city, Tandur, Pudur, Nawabpet, Kodangal, and Dharur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Vikarabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Vikarabad delivery." },
      { question: "Do you deliver midnight cakes in Vikarabad?", answer: "Yes, midnight birthday cake delivery is available across Vikarabad city and Tandur zones." }
    ]
  },

  "medchal": {
    cityName: "Medchal",
    metaTitle: "Cake Delivery in Medchal | Hyderabad IT Corridor Genome Valley Telangana | RedHeart",
    metaDescription: "Order cakes online in Medchal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Medchal",
    metaKeyword: "cake delivery medchal, order cake online medchal, birthday cake medchal, custom cake medchal, same day cake delivery medchal Genome Valley Biotech Hub IT Corridor Kompally Alwal Secunderabad Hyderabad outskirts Telangana",
    footerContent: `
<h2>Cake Delivery in Medchal — Hyderabad's Biotech Hub, Genome Valley, and Northern Hyderabad IT Corridor</h2>
<p>Medchal-Malkajgiri — the district headquarters of Medchal-Malkajgiri district in Telangana (one of the new districts created during the 2016 Telangana reorganization; the Medchal-Malkajgiri district is essentially the northern suburbs of Hyderabad), one of the fastest-growing and most economically significant districts adjacent to Hyderabad (the Genome Valley — situated in Medchal-Malkajgiri district; India's largest biotechnology and pharmaceutical cluster outside Hyderabad city proper; the Genome Valley at Shameerpet houses major pharma, biotech, and life science companies (Dr. Reddy's Laboratories, Bharat Biotech (Covaxin COVID-19 vaccine manufacturer), BioAsia, Hetero drugs, and dozens more); the Genome Valley is Hyderabad's contribution to India's pharmaceutical and biotech exports; Hyderabad is often called "Cyberabad" (IT sector) and "Pharmacity" (pharma); the Kompally, Alwal, Dundigal, Bollaram, Shameerpet areas — rapidly developing residential and commercial zones north of Hyderabad; the Medchal district houses IT parks, educational institutions (IIT Hyderabad is in Sangareddy/adjacent), hospitals, and residential townships that serve the greater Hyderabad area; the Dundigal Air Force Academy (Indian Air Force flying training academy — one of the most prestigious training establishments); the Hussain Sagar Lake (the large heart of Hyderabad connects both old and new city zones with Malkajgiri on its periphery)), and a city of Genome Valley biotech and Hyderabad's fastest-growing northern IT corridor — is Telangana's most biotechnologically Genome-Valley-pharma-clustered and IT-corridor-northerly Hyderabad-adjacent district. From birthday parties in Medchal to celebration cakes — RedHeart covers all Medchal zones: Medchal, Malkajgiri, Kompally, Alwal, Dundigal, Shameerpet, Bollaram, Secunderabad (partial).</p>
<p>Our Medchal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Genome Valley Biotech / Bharat Biotech Covaxin / Dundigal Air Force Academy / IT Corridor Northern Hyderabad-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Medchal, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Medchal, Malkajgiri, Kompally, Alwal, Dundigal, Shameerpet, Bollaram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Medchal?", answer: "Yes, same-day cake delivery is available across all Medchal areas — Medchal, Malkajgiri, Kompally, Alwal, Dundigal, Shameerpet, and Bollaram — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Medchal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Medchal delivery." },
      { question: "Do you deliver midnight cakes in Medchal?", answer: "Yes, midnight birthday cake delivery is available across Medchal, Kompally, Alwal, and Malkajgiri zones." }
    ]
  },

  "cooch-behar": {
    cityName: "Cooch Behar",
    metaTitle: "Cake Delivery in Cooch Behar | Koch Rajbongshi Palace Bhaona West Bengal | RedHeart",
    metaDescription: "Order cakes online in Cooch Behar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Cooch Behar",
    metaKeyword: "cake delivery cooch behar, order cake online cooch behar, birthday cake cooch behar, custom cake cooch behar, same day cake delivery cooch behar Koch Rajbongshi Palace Madan Mohan Temple Ras Mela Bhutan Bangladesh border West Bengal",
    footerContent: `
<h2>Cake Delivery in Cooch Behar — Koch Rajbongshi Palace, Ras Mela Festival, and the Royal City of North Bengal</h2>
<p>Cooch Behar — the district headquarters of Cooch Behar district in West Bengal (North Bengal), one of the most historically distinctive and architecturally elegant cities in North Bengal — the former capital of the Koch Rajbongshi kingdom and one of India's most elegant colonial-era palaces (the Cooch Behar Palace (Victor Jubilee Palace) — built 1887 by Maharaja Nripendra Narayan; designed in the Italian Renaissance/neo-classical style by Sir William Emerson (who also designed Kolkata's Victoria Memorial); the palace has a central dome flanked by two side wings; now a museum; one of India's most elegant preserved royal palaces; the Cooch Behar Rajya (Koch state) was one of the most important kingdoms in North Bengal and present-day Assam from the 16th century CE; the Koch Rajbongshi community is the dominant indigenous community of the North Bengal-Assam plains; the Madan Mohan Temple (a significant Vaishnava temple associated with the Koch kings); the Ras Mela (the biggest fair in North Bengal — held at Cooch Behar in November (Kartik Purnima); lakhs of pilgrims; it is associated with the Madan Mohan Temple; one of Bengal's largest religious fairs; the folk theatre of Bhaona is significant in Cooch Behar); the district borders Bhutan and Bangladesh; the Koch Rajbongshi agitation for a separate Kamatapur state has been ongoing; Cooch Behar was merged into India only in 1949 from its status as a princely state under British paramountcy), and a city of Italian Renaissance palace and Ras Mela Koch Rajbongshi fair — is West Bengal's most Italianate-palatially elegant and Ras-Mela-Koch-Rajbongshi-festivaledly royal North Bengal district. From birthday parties in Cooch Behar to celebration cakes — RedHeart covers all Cooch Behar zones: Cooch Behar city, Mathabhanga, Dinhata, Tufanganj, Mekhliganj, Sitai.</p>
<p>Our Cooch Behar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Cooch Behar Palace Italian Renaissance / Ras Mela Koch Rajbongshi / Madan Mohan Temple / Victor Jubilee Palace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cooch Behar, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cooch Behar city, Mathabhanga, Dinhata, Tufanganj, Mekhliganj, Sitai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Cooch Behar Palace Fondant, Ras Mela Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Cooch Behar?", answer: "Yes, same-day cake delivery is available across all Cooch Behar areas — Cooch Behar city, Mathabhanga, Dinhata, Tufanganj, and Mekhliganj — for orders placed before 3 PM." },
      { question: "Do you have Cooch Behar Palace and Ras Mela-themed cakes?", answer: "Yes! The Cooch Behar Palace (Victor Jubilee Palace — 1887; Italian Renaissance/neo-classical design by Sir William Emerson who also designed Victoria Memorial Kolkata; central dome flanked by wings; now a museum; one of India's most elegant royal palaces) and the Ras Mela (North Bengal's largest fair at Kartik Purnima; Koch Rajbongshi community festival at Madan Mohan Temple) inspire our most Italian-Renaissance-palatially elegant and Ras-Koch-Rajbongshi Cooch Behar fondant cakes." },
      { question: "Are eggless cakes available in Cooch Behar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Cooch Behar delivery." }
    ]
  },

  "jalpaiguri": {
    cityName: "Jalpaiguri",
    metaTitle: "Cake Delivery in Jalpaiguri | Gorumara Dooars Tea Garden North Bengal West Bengal | RedHeart",
    metaDescription: "Order cakes online in Jalpaiguri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jalpaiguri",
    metaKeyword: "cake delivery jalpaiguri, order cake online jalpaiguri, birthday cake jalpaiguri, custom cake jalpaiguri, same day cake delivery jalpaiguri Gorumara National Park Dooars tea garden Teesta River rhinoceros elephant North Bengal West Bengal",
    footerContent: `
<h2>Cake Delivery in Jalpaiguri — Gorumara National Park, Dooars Tea Gardens, Teesta River, and One-Horned Rhino of North Bengal</h2>
<p>Jalpaiguri — the district headquarters of Jalpaiguri district in West Bengal (North Bengal), one of India's most ecologically diverse and tea-rich districts — the gateway to the Dooars (the Dooars (Duars) — the foothill plain between the Himalayas (Bhutan-Assam hills) and the North Bengal plains; the Dooars means 'doors/gates' — the series of river valleys (Teesta, Jaldhaka, Torsa, Raidak, Manas, Sankosh) that historically served as gateways to Bhutan, Sikkim, and Assam; the Dooars has a distinctive ecology — tall elephant grass, dense sal forests, and rivers cascading from the Himalayan foothills; the Dooars tea gardens (North Bengal tea — grown in the Dooars and Terai; Dooars tea has a robust malty flavour; different from Darjeeling's light muscatel; the Dooars-Terai belt has among the highest-density tea garden concentrations in the world); the Gorumara National Park (80 sq km; one-horned rhinoceros (Rhinoceros unicornis) — the Gorumara rhinos are a significant population of this endangered species; also wild elephants, gaur, leopards, Python; the Chapramari Wildlife Sanctuary is adjacent; the Jaldapara National Park (near Alipurduar — the largest rhino habitat in West Bengal; over 260 rhinos); the Teesta River (one of India's most significant rivers — the Teesta water-sharing dispute between India and Bangladesh is a long-standing diplomatic issue); Jalpaiguri city on the Teesta bank; the North Bengal Wildlife Observatory (Chalsa area)), and a city of Gorumara rhinoceros and Dooars tea gardens — is West Bengal's most one-horned-rhino-conservationally Gorumara and Dooars-tea-gardenedly aromatic North Bengal district. From birthday parties in Jalpaiguri to celebration cakes — RedHeart covers all Jalpaiguri zones: Jalpaiguri city, Dhupguri, Maynaguri, Rajganj, Mal, Nagrakata, Chalsa.</p>
<p>Our Jalpaiguri cake range: Chocolate, Dooars Tea (signature!), Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Gorumara Rhino National Park / Dooars Tea Garden / Teesta River / Jaldapara Wildlife-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalpaiguri, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalpaiguri city, Dhupguri, Maynaguri, Rajganj, Mal, Nagrakata, Chalsa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dooars Tea (signature!), Chocolate, Gorumara Rhino Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jalpaiguri?", answer: "Yes, same-day cake delivery is available across all Jalpaiguri areas — Jalpaiguri city, Dhupguri, Maynaguri, Rajganj, Mal, Nagrakata, and Chalsa — for orders placed before 3 PM." },
      { question: "Do you have Dooars Tea and Gorumara Rhino-themed cakes?", answer: "Yes! The Dooars Tea (North Bengal's robust malty flavour — different from Darjeeling's light muscatel; from among the highest-density tea garden concentrations in the world in the Himalayan foothill Dooars) and the Gorumara National Park (one-horned rhinoceros Rhinoceros unicornis; wild elephants; Chapramari adjacent) inspire our most Dooars-tea-maltily robust and one-horned-rhino-nationalpark Jalpaiguri fondant cakes." },
      { question: "Are eggless cakes available in Jalpaiguri?", answer: "Yes, all flavours — Dooars Tea, Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jalpaiguri delivery." }
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
