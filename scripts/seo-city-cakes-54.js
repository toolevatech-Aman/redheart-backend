// Cakes Batch 54 — 13 cities
// Tamil Nadu: Ramanathapuram, Thoothukudi, Krishnagiri, Nilgiris (Ooty), Karur, Sivaganga
// MP: Betul, Dewas, Khandwa, Mandla
// Gujarat: Patan
// Karnataka: Tumkur (Tumakuru), Chitradurga

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "ramanathapuram": {
    cityName: "Ramanathapuram",
    metaTitle: "Cake Delivery in Ramanathapuram | Rameswaram Rameshwaram Dhanushkodi Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Ramanathapuram. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ramanathapuram",
    metaKeyword: "cake delivery ramanathapuram, order cake online ramanathapuram, birthday cake ramanathapuram, custom cake ramanathapuram, same day cake delivery ramanathapuram Rameswaram Rameshwaram Pamban Bridge Dhanushkodi Adam Bridge Char Dham Jyotirlinga Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Ramanathapuram — Rameswaram Char Dham, Rameshwaram Jyotirlinga, Pamban Bridge, and Dhanushkodi</h2>
<p>Ramanathapuram (Ramnad) — the district headquarters of Ramanathapuram district in Tamil Nadu, the district of Rameswaram — one of Hinduism's most sacred sites, a Char Dham pilgrimage destination (the Ramanathaswamy Temple at Rameswaram — one of the 12 Jyotirlingas; one of the four Char Dhams (the four most sacred Hindu pilgrimage destinations — Badrinath in the north, Dwarka in the west, Puri in the east, and Rameswaram in the south); the legend: Rama constructed the Rama Setu (Adam's Bridge/Ram Sethu) from this point to Lanka to rescue Sita, assisted by the Vanara (monkey) army; Rama also installed a Shiva lingam at Rameswaram (the Ramanathaswamy lingam) as penance for killing Ravana (a Brahmin); the Ramanathaswamy Temple is celebrated for its grand corridors (the outer corridor is 1,200 m — the longest temple corridor in India), 22 sacred theerthams (pilgrimage tanks — pilgrims must bathe in all 22), and extraordinary carved pillars; the Pamban Bridge (Rameswaram Island-mainland bridge — India's first sea bridge, opened in 1914; a 2 km rail-and-road causeway over the Palk Strait; the Scherzer rolling lift span section opens for ship traffic — one of India's most dramatic railway experiences); the Dhanushkodi (the ghost town at the southeastern tip of Rameswaram Island — destroyed by the 1964 Dhanushkodi Cyclone which killed 1,800 people including an entire passenger train; now a desolate landscape; also the closest point to Sri Lanka — only 22 km; considered a sacred spot as it is near the end of Ram Setu/Adam's Bridge); the Manapad Cape (southern coast — Portuguese church 1544 CE; pearl fisheries); the GI Ramnad Mundu cotton dhoti textile), and a city of Char Dham Rameswaram pilgrimage and Pamban Bridge — is Tamil Nadu's most Jyotirlinga-Char-Dham-Rameswaram-1,200m-corridor and Dhanushkodi-cyclone-ghost-town-Ram-Setu district. From birthday parties in Ramanathapuram to celebration cakes — RedHeart covers all areas: Ramanathapuram city, Rameswaram, Mandapam, Keelakarai, Paramakudi, Tiruvadanai, Mudukulathur.</p>
<p>Our Ramanathapuram cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Rameswaram Char Dham Jyotirlinga / Pamban Bridge Railway / Dhanushkodi Cyclone Ghost Town / Ram Setu Adam's Bridge-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramanathapuram, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramanathapuram, Rameswaram, Mandapam, Keelakarai, Paramakudi, Tiruvadanai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ramanathaswamy Char Dham Fondant, Pamban Bridge Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ramanathapuram?", answer: "Yes, same-day cake delivery is available across all Ramanathapuram areas — Ramanathapuram city, Rameswaram, Mandapam, Keelakarai, and Paramakudi — for orders placed before 3 PM." },
      { question: "Do you have Rameswaram Char Dham Jyotirlinga and Pamban Bridge-themed cakes?", answer: "Yes! The Ramanathaswamy Temple (one of 12 Jyotirlingas; Char Dham pilgrim site; India's longest temple corridor 1,200m; 22 sacred theerthams; Ram Setu-Rama penance connection) and the Pamban Bridge (India's first sea bridge 1914; 2 km over Palk Strait; Scherzer rolling lift span) inspire our most Char-Dham-Jyotirlinga and Pamban-sea-bridge fondant cakes." },
      { question: "Are eggless cakes available in Ramanathapuram?", answer: "Yes, all flavours are available in eggless variants for Ramanathapuram delivery." }
    ]
  },

  "thoothukudi": {
    cityName: "Thoothukudi",
    metaTitle: "Cake Delivery in Thoothukudi Tuticorin | Pearl City Port Sterlite Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Thoothukudi (Tuticorin). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Thoothukudi (Tuticorin)",
    metaKeyword: "cake delivery thoothukudi tuticorin, order cake online thoothukudi, birthday cake thoothukudi, custom cake thoothukudi tuticorin, same day cake delivery thoothukudi Pearl City Vedanta Sterlite Port Pearl Fisheries Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Thoothukudi (Tuticorin) — Pearl City, India's Busiest Port, Sterlite Controversy, and Vivekananda Rock Memorial</h2>
<p>Thoothukudi (Tuticorin) — the district headquarters of Thoothukudi district in Tamil Nadu, one of South India's most important port cities (the Thoothukudi Port (V.O. Chidambaranar Port — named after freedom fighter V.O. Chidambaranam "Kappalottiya Tamizhan" who founded India's first swadeshi shipping company; the port is one of India's 12 major ports — handles considerable container and bulk cargo traffic; significant for fertilizer-chemical-salt trade); the Pearl Fisheries ("Pearl City" legacy — the Gulf of Mannar between Thoothukudi and Sri Lanka was historically the world's most productive pearl-oyster zone; Arab, Portuguese, Dutch, and British traders sought these pearls for centuries; the pearl fisheries in the Palk Bay and Gulf of Mannar have been significant since ancient times; today overfished but pearl fishing heritage remains significant); the Sterlite Copper/Vedanta controversy (the Sterlite Copper smelter at Tuticorin was one of India's largest copper-producing facilities; the anti-Sterlite protest in May 2018 — 13 civilians were killed when police opened fire on protesters agitating for the plant's closure due to environmental pollution concerns; the plant was permanently shut down in 2018; a major industrial-environment-human rights episode in modern India); the Vivekananda Rock Memorial (at Kanyakumari — adjacent to Thoothukudi; on the rocky island where Swami Vivekananda meditated in 1892 before his 1893 Chicago Parliament of World's Religions address where he began "Sisters and Brothers of America..."); the Gulf of Mannar Marine National Park (one of India's earliest marine national parks; coral reefs; dugong habitat)), and a city of Pearl City port and Sterlite protest — is Tamil Nadu's most Pearl-City-port-busiest and Sterlite-controversy-13-killed Thoothukudi. From birthday parties in Thoothukudi to celebration cakes — RedHeart covers all areas: Thoothukudi city, Palayamkottai, Kovilpatti, Tiruchendur, Kayalpatnam, Srivaikundam, Ottapidaram.</p>
<p>Our Thoothukudi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Pearl City Gulf of Mannar / Tuticorin Port / Tiruchendur Murugan Temple / V.O.C. Freedom Fighter-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thoothukudi (Tuticorin), Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thoothukudi, Palayamkottai, Kovilpatti, Tiruchendur, Kayalpatnam, Srivaikundam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Pearl City Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Thoothukudi (Tuticorin)?", answer: "Yes, same-day cake delivery is available across all Thoothukudi areas — Thoothukudi city, Palayamkottai, Kovilpatti, Tiruchendur, and Kayalpatnam — for orders placed before 3 PM." },
      { question: "Do you have Pearl City and Tuticorin Port-themed cakes?", answer: "Yes! Thoothukudi's Pearl City heritage (Gulf of Mannar pearl fisheries — world's most productive pearl-oyster zone for centuries; sought by Arab, Portuguese, Dutch and British traders) and the V.O. Chidambaranar Port inspire our most Pearl-City-gulf-port fondant cakes." },
      { question: "Are eggless cakes available in Thoothukudi?", answer: "Yes, all flavours are available in eggless variants for Thoothukudi delivery." }
    ]
  },

  "krishnagiri": {
    cityName: "Krishnagiri",
    metaTitle: "Cake Delivery in Krishnagiri | GI Mango Alphonso Hosur IT Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Krishnagiri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Krishnagiri",
    metaKeyword: "cake delivery krishnagiri, order cake online krishnagiri, birthday cake krishnagiri, custom cake krishnagiri, same day cake delivery krishnagiri GI mango Hosur IT park Denkanikotta Kaveripakkam dam Tamil Nadu Karnataka border",
    footerContent: `
<h2>Cake Delivery in Krishnagiri — GI Krishnagiri Mango, Hosur IT-Industrial Hub, and Karnataka-Tamil Nadu Border Region</h2>
<p>Krishnagiri — the district headquarters of Krishnagiri district in Tamil Nadu (Krishnagiri district was carved from Dharmapuri in 2004), a district on the Tamil Nadu-Karnataka-Andhra Pradesh border, famous for its mangoes and the Hosur industrial/IT city (the GI Krishnagiri Mango — Krishnagiri district is India's single largest mango-growing district by volume (alongside Andhra Pradesh districts); over 60+ mango varieties are grown; GI recognition; the Mallika (cross between Neelam and Dasheri), Bangalora/Totapuri (Tamil mango used for mango pulp-drinks-pickles), Alphonso; the mango orchards of Krishnagiri-Dharmapuri belt supply mango pulp factories all over Tamil Nadu; the Hosur (Krishnagiri district — a major industrial and IT city on NH-44 (Delhi-Chennai Highway) just 45 km from Bengaluru; it is called the "Detroit of South India" due to its automotive and electronics industry — Tata Motors, TVS Motors, Texas Instruments, Biocon, Foxconn (Apple supplier), Titan Company; Hosur has attracted massive manufacturing investment; it is effectively a satellite industrial city of Bengaluru with cheaper land; the Hosur Industrial Area has one of Tamil Nadu's highest per-capita industrial outputs; the Krishnagiri Dam (Krishnagiri Reservoir — on the Ponnaiyar River; major irrigation reservoir); the Salem-Bengaluru Expressway development area), and a city of GI mangoes and Hosur automotive-IT manufacturing — is Tamil Nadu's most GI-mango-60-varieties and Hosur-Detroit-of-South-India Krishnagiri. From birthday parties in Krishnagiri to celebration cakes — RedHeart covers all areas: Krishnagiri city, Hosur, Denkanikotta, Kaveripattinam, Uthangarai, Pochampalli, Kelamangalam, Shoolagiri.</p>
<p>Our Krishnagiri cake range: Chocolate, Black Forest, Red Velvet, Mango (featuring the local GI varieties!), Butterscotch, Photo Cakes, Fondant GI Krishnagiri Mango Orchard / Hosur Industrial City / Krishnagiri Dam Reservoir-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnagiri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnagiri city, Hosur, Denkanikotta, Kaveripattinam, Uthangarai, Pochampalli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango Cake (GI varieties), Chocolate, GI Mango Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Krishnagiri?", answer: "Yes, same-day cake delivery is available across all Krishnagiri areas — Krishnagiri city, Hosur, Denkanikotta, Kaveripattinam, and Pochampalli — for orders placed before 3 PM." },
      { question: "Do you have GI Krishnagiri Mango-themed cakes?", answer: "Yes! Krishnagiri is India's single largest mango-producing district (60+ varieties; GI recognition; Mallika, Bangalora/Totapuri, Alphonso; mango pulp factories across TN). Our fresh Mango cakes draw from this region's GI mango heritage and we create special GI Mango Orchard fondant cakes." },
      { question: "Are eggless cakes available in Krishnagiri?", answer: "Yes, all flavours are available in eggless variants for Krishnagiri delivery." }
    ]
  },

  "ooty": {
    cityName: "Ooty",
    metaTitle: "Cake Delivery in Ooty Nilgiris | UNESCO Mountain Railway Tea Toda Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Ooty (Nilgiris). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ooty (Nilgiris)",
    metaKeyword: "cake delivery ooty nilgiris, order cake online ooty, birthday cake ooty, custom cake ooty, same day cake delivery ooty Nilgiri Mountain Railway UNESCO Toda tribe Nilgiri Biosphere Reserve Botanical Garden tea estates Tamil Nadu hill station",
    footerContent: `
<h2>Cake Delivery in Ooty (Nilgiris) — UNESCO Nilgiri Mountain Railway, Toda Tribal Heritage, Nilgiri Tea, and India's Queen of Hill Stations</h2>
<p>Ooty (Udhagamandalam/Ootacamund) — the district headquarters of The Nilgiris district in Tamil Nadu, one of India's most iconic hill stations at 2,240 m altitude, home to one of the world's most celebrated mountain railways (the Nilgiri Mountain Railway (NMR) — a UNESCO World Heritage Site (2005; part of Mountain Railways of India group listing alongside Darjeeling and Kalka-Shimla); built by the British 1899-1908; one of only two rack-and-pinion railways in India (the rack system grips a toothed rail to climb the steepest railway grade in India — 8.33%; the rack-and-pinion section from Kallar to Coonoor climbs 1,200 m in 17 km; steam locomotives still operate on parts of the route); the Mettupalayam-Coonoor-Ooty route (46 km; 2-3 hours one way); a UNESCO-listed engineering marvel and the most dramatic railway experience in South India; the Toda people (one of India's most studied indigenous communities; the Toda tribe (about 1,500 members — one of India's smallest tribes) live in the Nilgiris in oval barrel-roofed stone-and-bamboo huts (mund — cluster of 3-5 huts); they are traditionally pastoralists (herding water buffalo — the buffalo is sacred); they practice polyandry (one woman marries all brothers in a family — fraternal polyandry); the Toda embroidery (puthkuli) is a distinct textile art; the Toda have been studied by anthropologists since the 19th century; the Nilgiri Biosphere Reserve (UNESCO 1986 — includes Mudumalai, Nagarhole, Bandipur, Wayanad, Anamalai; world's most significant biodiversity corridor; India's first biosphere reserve); the GI Nilgiri Tea (Nilgiris tea — light, flowery, brisk; CTC and orthodox; Indian and export market; Coonoor-Kovalai belt)); and a city of UNESCO Mountain Railway and Toda indigenous heritage — is Tamil Nadu's most UNESCO-mountain-railway-rack-and-pinion and Toda-polyandry-1500-member-smallest-tribe Nilgiris. From birthday parties in Ooty to celebration cakes — RedHeart covers all Nilgiris areas: Ooty, Coonoor, Kotagiri, Gudalur, Lovedale, Avalanche, Wellington.</p>
<p>Our Ooty cake range: Chocolate, Black Forest, Red Velvet, Nilgiri Tea Cake (GI tea-infused), Butterscotch, Photo Cakes, Fondant Nilgiri Mountain Railway UNESCO Rack / Toda Tribe Heritage / Nilgiri Tea Estate / Ooty Botanical Garden-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ooty (Udhagamandalam), Nilgiris, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ooty, Coonoor, Kotagiri, Gudalur, Lovedale, Avalanche, Wellington</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nilgiri Tea Cake, Chocolate, UNESCO Mountain Railway Fondant, Toda Tribe Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ooty (Nilgiris)?", answer: "Yes, same-day cake delivery is available across all Nilgiris areas — Ooty, Coonoor, Kotagiri, Gudalur, and Wellington — for orders placed before 3 PM." },
      { question: "Do you have Nilgiri Mountain Railway UNESCO and Toda Tribe-themed cakes?", answer: "Yes! The Nilgiri Mountain Railway (UNESCO 2005; rack-and-pinion railway built 1899-1908; 8.33% grade — steepest in India; steam locomotives still operating; Mettupalayam-Coonoor-Ooty 46 km) and the Toda tribe (1,500 members; fraternal polyandry; barrel-roof mund huts; sacred buffalo; one of India's most anthropologically studied tribes) inspire our most UNESCO-rack-railway and Toda-1500-members fondant cakes." },
      { question: "Do you have Nilgiri Tea cakes?", answer: "Yes! We offer a Nilgiri Tea-infused cake celebrating the GI Nilgiri Tea (light, flowery, brisk — from the Coonoor-Kovalai belt of the Nilgiris; one of India's finest export teas) available for Ooty delivery." }
    ]
  },

  "karur": {
    cityName: "Karur",
    metaTitle: "Cake Delivery in Karur | Textile Bus Body Capital Home Furnishing Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Karur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karur",
    metaKeyword: "cake delivery karur, order cake online karur, birthday cake karur, custom cake karur, same day cake delivery karur textile bus body building home furnishing export Kridha Karunagiri Ayyarmalai Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Karur — India's Bus Body Capital, Home Furnishing Export Hub, and Ancient Chera Territory</h2>
<p>Karur — the district headquarters of Karur district in Tamil Nadu, one of India's most remarkable manufacturing success stories — a small city that dominates multiple industrial sectors (Karur as India's Bus Body Building Capital — Karur fabricates the bodies of a significant proportion of India's buses (coach bodywork built on bare chassis from Ashok Leyland, Tata, Volvo); the concentrated industrial ecosystem of sheet metal workers, fibreglass workers, welders, upholstery manufacturers in Karur makes it possible to produce bus bodies at scale and speed; similar to Namakkal's lorry body building industry; Karur as India's Home Furnishing Export Capital — Karur is India's largest exporter of home furnishings and textiles (bed sheets, curtains, table covers, kitchen linen, wall hangings, decorative textiles) to Europe, the US, and the Middle East; this ₹5,000+ crore per year industry was built by small-scale weaving-printing-embroidery entrepreneurs; the Karur textiles are sold under major international brands; the ancient history of Karur (Vanchi/Vanji — the ancient capital of the Chera Kingdom; mentioned in Sangam Tamil literature as Vanji Muthur; the Karur Siva Temple, Karunagiri Murugan Temple; the Amman shrine traditions; the Ayyarmalai temple hill); the Amaravathi Dam (Karur district — irrigation dam on the Amaravathi River)), and a city of bus body building and home furnishing textile export — is Tamil Nadu's most bus-body-building-capital and home-furnishing-textile-exporting Karur. From birthday parties in Karur to celebration cakes — RedHeart covers all Karur areas: Karur city, Kulithalai, Krishnarayapuram, Aravakurichi, Kadavur, Pugalur, Thanthoni.</p>
<p>Our Karur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karur city, Kulithalai, Krishnarayapuram, Aravakurichi, Kadavur, Pugalur, Thanthoni</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karur?", answer: "Yes, same-day cake delivery is available across all Karur areas — Karur city, Kulithalai, Krishnarayapuram, Aravakurichi, and Kadavur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Karur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Karur delivery." },
      { question: "Do you deliver midnight cakes in Karur?", answer: "Yes, midnight birthday cake delivery is available across Karur city zones." }
    ]
  },

  "sivaganga": {
    cityName: "Sivaganga",
    metaTitle: "Cake Delivery in Sivaganga | Marudhu Brothers Velu Nachiyar Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Sivaganga. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sivaganga",
    metaKeyword: "cake delivery sivaganga, order cake online sivaganga, birthday cake sivaganga, custom cake sivaganga, same day cake delivery sivaganga Velu Nachiyar Marudhu Brothers Sivagangai Kingdom freedom fighter Tamil Nadu resistance",
    footerContent: `
<h2>Cake Delivery in Sivaganga — Queen Velu Nachiyar (India's First Female Freedom Fighter), Marudhu Brothers, and Sivagangai Kingdom</h2>
<p>Sivaganga — the district headquarters of Sivaganga district in Tamil Nadu, a district with an extraordinary history of resistance against colonial rule — the home of India's first female freedom fighter against the British (the Sivagangai Kingdom — the Sivagangai zamindari / kingdom (18th century CE); the Sivagangai Palayam was a princely territory that resisted British East India Company expansion; the Raja of Sivagangai (Muthu Vaduganatha Thevar) fought the British at the Battle of Kalaiyar Koil 1764 CE; after his death in 1772, his wife Velu Nachiyar (1730-1796 CE) became queen and continued resistance; Velu Nachiyar is considered India's first female freedom fighter (even before the 1857 revolt); she formed an army and a suicide squad (Udaiyaal Padai — the first recorded suicide bombing in history — Kuyili, a slave-soldier, wrapped herself in ghee-soaked clothes and set herself ablaze among ammunition stores of the British); Velu Nachiyar allied with Hyder Ali of Mysore and recaptured Sivagangai from the British in 1780 CE; she ruled for 10 years and is remembered as "Veeramangai" (Valorous Woman); the Marudhu Pandiyar brothers (Periya Marudhu and Chinna Marudhu) — the two commanders who governed under Velu Nachiyar and later led their own resistance; Periya Marudhu issued the first Proclamation of Independence against the British in 1801 CE — one of the earliest such proclamations in India; both brothers were hanged by the British in 1801; the Kalaiyar Koil Kaliamman Temple (significant temple in Sivaganga district)), and a city of India's first female freedom fighter and Marudhu Brothers resistance — is Tamil Nadu's most Veeramangai-Velu-Nachiyar-India-first-female-freedom-fighter and Marudhu-Brothers-1801-independence-proclamation Sivaganga. From birthday parties in Sivaganga to celebration cakes — RedHeart covers all Sivaganga areas: Sivaganga city, Karaikudi, Devakottai, Manamadurai, Ilayangudi, Tiruppattur, Singampuneri.</p>
<p>Our Sivaganga cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Velu Nachiyar Veeramangai / Marudhu Brothers 1801 / Sivagangai Kingdom-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sivaganga, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sivaganga, Karaikudi, Devakottai, Manamadurai, Ilayangudi, Tiruppattur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Velu Nachiyar Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sivaganga?", answer: "Yes, same-day cake delivery is available across all Sivaganga areas — Sivaganga city, Karaikudi, Devakottai, Manamadurai, and Ilayangudi — for orders placed before 3 PM." },
      { question: "Do you have Velu Nachiyar and Marudhu Brothers-themed cakes?", answer: "Yes! Velu Nachiyar (1730-1796 CE — 'Veeramangai'; India's first female freedom fighter against the British; created India's first recorded suicide squad — Udaiyaal Padai — led by Kuyili; allied with Hyder Ali; recaptured Sivagangai 1780 CE) and the Marudhu Pandiyar Brothers (issued India's first Proclamation of Independence 1801 CE; hanged by the British) inspire our most Veeramangai-India-first and Marudhu-1801-independence fondant cakes." },
      { question: "Are eggless cakes available in Sivaganga?", answer: "Yes, all flavours are available in eggless variants for Sivaganga delivery." }
    ]
  },

  "betul": {
    cityName: "Betul",
    metaTitle: "Cake Delivery in Betul | Satpura Tapti River Multai MP Agriculture | RedHeart",
    metaDescription: "Order cakes online in Betul. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Betul",
    metaKeyword: "cake delivery betul, order cake online betul, birthday cake betul, custom cake betul, same day cake delivery betul Satpura Tapti River Multai Madhya Pradesh agriculture Nagpur border",
    footerContent: `
<h2>Cake Delivery in Betul — Satpura Range, Tapti River Origin (Multai), and Madhya Pradesh's Southern Gateway</h2>
<p>Betul — the district headquarters of Betul district in Madhya Pradesh (bordering Maharashtra — Nagpur division), a district on the Satpura mountain range with a unique geographical distinction — the origin of the Tapti River (the Tapti River (Tapi) — one of India's major westward-flowing rivers; the Tapti originates near Multai town in Betul district (at an elevation of about 752 m in the Satpura Range); the Tapti flows 724 km westward through Madhya Pradesh, Maharashtra (Amravati-Dhule-Nasik), and Gujarat (Surat) before emptying into the Arabian Sea at Surat-Hazira; one of only 3 major rivers in peninsular India that flow westward (the others being the Narmada and the Mahi); the Tapti and Narmada both originate in the Satpura Range and flow roughly parallel westward; the Multai town has a sacred Tapti temple; the Betul Satpura landscape (the Satpura Range extends through Betul — thick deciduous forests, wildlife corridor; adjacent to Satpura Tiger Reserve in Hoshangabad; Pachmarhi accessible from Betul via the Satpura hills; chinkara, leopard, sloth bear in the district forests); the Amla (Betul district — railway junction); the Sarni thermal power station (in Betul — one of MP's oldest thermal power stations); Betul district borders Chhindwara, Hoshangabad, and Nagpur), and a city of Tapti River origin and Satpura gateway — is Madhya Pradesh's most Tapti-River-origin-Multai and Satpura-westward-flowing MP-Maharashtra-border district. From birthday parties in Betul to celebration cakes — RedHeart covers all Betul areas: Betul city, Multai, Amla, Sarni, Bhainsdehi, Atner, Shahpur.</p>
<p>Our Betul cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Betul, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Betul city, Multai, Amla, Sarni, Bhainsdehi, Atner, Shahpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Betul?", answer: "Yes, same-day cake delivery is available across all Betul areas — Betul city, Multai, Amla, Sarni, and Bhainsdehi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Betul?", answer: "Yes, all flavours are available in eggless variants for Betul (MP) delivery." },
      { question: "Do you deliver midnight cakes in Betul?", answer: "Yes, midnight birthday cake delivery is available across Betul city zones." }
    ]
  },

  "dewas": {
    cityName: "Dewas",
    metaTitle: "Cake Delivery in Dewas | Pharmaceutical City E.M. Forster Madhya Pradesh | RedHeart",
    metaDescription: "Order cakes online in Dewas. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dewas",
    metaKeyword: "cake delivery dewas, order cake online dewas, birthday cake dewas, custom cake dewas, same day cake delivery dewas pharmaceutical city E.M. Forster Hill of Devi Chambal Madhya Pradesh Indore industrial",
    footerContent: `
<h2>Cake Delivery in Dewas — Pharmaceutical Hub, E.M. Forster's "The Hill of Devi", and MP Industrial Belt</h2>
<p>Dewas — the district headquarters of Dewas district in Madhya Pradesh, one of India's emerging pharmaceutical and industrial cities (the Dewas Industrial Area and Special Economic Zones — Dewas has a significant pharmaceutical manufacturing base (alongside Indore-Pithampur); the Dewas district is part of the Indore-Dewas-Pithampur industrial corridor which is one of MP's most important manufacturing regions; several API (Active Pharmaceutical Ingredient) and formulation companies have plants in Dewas; the Dewas district is also known for other industries including automobile components, textiles, food processing; the Chambal River (flows along the northwestern border of Dewas district — the Chambal is one of the cleanest rivers in India; its ravines historically sheltered dacoits); the E.M. Forster connection — E.M. Forster (1879-1970; author of A Passage to India and Howards End) spent time as the secretary/assistant to the Maharajah of Dewas Senior State in 1921; he later wrote about this experience in his memoir "The Hill of Devi" (1953); Forster's time in Dewas informs some of the exotic Indian backdrop in his literary imagination; the Dewas "Hill of Devi" (the sacred hill with the Chamunda Devi temple which is the tutelary deity of Dewas and gives the city its name); Dewas is close to Indore (35 km) and Ujjain), and a city of pharmaceutical manufacturing and E.M. Forster literary heritage — is Madhya Pradesh's most pharmaceutical-API-manufacturing and E.M.-Forster-Hill-of-Devi-literary Dewas. From birthday parties in Dewas to celebration cakes — RedHeart covers all Dewas areas: Dewas city, Sonkatch, Kannod, Bagli, Khategaon, Tonk Khurd.</p>
<p>Our Dewas cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chamunda Devi Hill / Dewas Industrial Hub-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dewas, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dewas city, Sonkatch, Kannod, Bagli, Khategaon, Tonk Khurd</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dewas?", answer: "Yes, same-day cake delivery is available across all Dewas areas — Dewas city, Sonkatch, Kannod, Bagli, and Khategaon — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dewas?", answer: "Yes, all flavours are available in eggless variants for Dewas (MP) delivery." },
      { question: "Do you deliver midnight cakes in Dewas?", answer: "Yes, midnight birthday cake delivery is available across Dewas city zones." }
    ]
  },

  "khandwa": {
    cityName: "Khandwa",
    metaTitle: "Cake Delivery in Khandwa | Omkareshwar Jyotirlinga Kishore Kumar MP | RedHeart",
    metaDescription: "Order cakes online in Khandwa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Khandwa",
    metaKeyword: "cake delivery khandwa, order cake online khandwa, birthday cake khandwa, custom cake khandwa, same day cake delivery khandwa Omkareshwar Jyotirlinga Narmada Kishore Kumar birthplace Madhya Pradesh Nimar cotton belt",
    footerContent: `
<h2>Cake Delivery in Khandwa — Omkareshwar Jyotirlinga, Kishore Kumar's Birthplace, and Nimar's Narmada Belt</h2>
<p>Khandwa (East Nimar) — the district headquarters of Khandwa district in Madhya Pradesh (historically part of the Nimar region — one of India's most cotton-producing zones), home to one of India's holiest temples and the birthplace of a Bollywood legend (the Omkareshwar and Mamleshwar Jyotirlinga (Omkareshwar — one of India's 12 Jyotirlingas; on the Mandhata Island on the Narmada River in Khandwa district; the island is shaped like the Om symbol from above; the Omkareshwar and Mamleshwar temples (the Jyotirlinga is divided between two temples — Omkareshwar on the island and Mamleshwar on the south bank — a unique dual-shrine Jyotirlinga); hundreds of thousands of pilgrims visit annually; major Shiva festival site; the Sardar Sarovar dam backwaters reach nearby; Adi Shankaracharya's guru Govinda Bhagavatpada meditated near Omkareshwar); Kishore Kumar (1929-1987) — one of the greatest Bollywood singers and entertainers of the 20th century; born Abhas Kumar Ganguly in Khandwa on August 4, 1929; he was a singer, actor, director, lyricist, producer; iconic songs (Mere Sapnon Ki Rani, Roop Tera Mastana, Pal Pal Dil Ke Paas, Aane Wala Pal, Aa Chal Ke Tujhe Main Leke Chalun); he built a home called "Gauri Kunj" in Khandwa where he returned; Khandwa's railway station square has his statue; the Khandwa Cotton Belt (the Nimar district of Khandwa-Khargone is one of India's most significant cotton-growing regions in MP; Nimari desi cotton; the black cotton soil (regur) of the Narmada-Tapti valley)), and a city of Omkareshwar Jyotirlinga and Kishore Kumar — is Madhya Pradesh's most Omkareshwar-Om-island-Jyotirlinga and Kishore-Kumar-4-August-1929-birthplace Khandwa. From birthday parties in Khandwa to celebration cakes — RedHeart covers all Khandwa areas: Khandwa city, Omkareshwar, Pandhana, Harsud, Khalwa, Punasa.</p>
<p>Our Khandwa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Omkareshwar Jyotirlinga Om-Island / Kishore Kumar Bollywood Legend Birthplace / Narmada River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khandwa (East Nimar), Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khandwa city, Omkareshwar, Pandhana, Harsud, Khalwa, Punasa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Omkareshwar Fondant, Kishore Kumar Photo Cake, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Khandwa?", answer: "Yes, same-day cake delivery is available across all Khandwa areas — Khandwa city, Omkareshwar, Pandhana, and Harsud — for orders placed before 3 PM." },
      { question: "Do you have Omkareshwar Jyotirlinga and Kishore Kumar-themed cakes?", answer: "Yes! The Omkareshwar Jyotirlinga (on the Om-shaped Mandhata Island on the Narmada; dual temples — Omkareshwar and Mamleshwar; Adi Shankaracharya's guru meditated here) and Kishore Kumar (born August 4, 1929 in Khandwa; Bollywood's greatest singer-actor-director; 'Mere Sapnon Ki Rani', 'Pal Pal Dil Ke Paas') inspire our most Jyotirlinga-Om-island and Kishore-Kumar-legendary fondant cakes." },
      { question: "Are eggless cakes available in Khandwa?", answer: "Yes, all flavours are available in eggless variants for Khandwa delivery." }
    ]
  },

  "mandla": {
    cityName: "Mandla",
    metaTitle: "Cake Delivery in Mandla | Kanha Tiger Reserve Gond Kingdom Narmada MP | RedHeart",
    metaDescription: "Order cakes online in Mandla. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mandla",
    metaKeyword: "cake delivery mandla, order cake online mandla, birthday cake mandla, custom cake mandla, same day cake delivery mandla Kanha Tiger Reserve Gond kingdom Narmada Jungle Book Seoni Madhya Pradesh Baiga tribal",
    footerContent: `
<h2>Cake Delivery in Mandla — Kanha Tiger Reserve, Gond Kingdom Capital, Narmada Necklace, and Baiga Tribal Heritage</h2>
<p>Mandla — the district headquarters of Mandla district in Madhya Pradesh, situated at a dramatic horseshoe bend of the Narmada River (Narmada Necklace — the Narmada River makes a dramatic U-shaped horseshoe bend around Mandla town, wrapping around 3 sides of the city; this unique geography made Mandla a natural fortress capital; the Gond Kingdom — Mandla was the capital of the Gond kingdom (Garha-Mandla Sultanate); the Gond kings ruled a vast area of central India from here; the most famous was Rani Durgavati (1524-1564 CE) — the great Gond queen who defeated Akbar's general Asaf Khan's army in 1564 CE; she refused to surrender and died fighting on the battlefield — one of India's greatest warrior queens (the Jabalpur-Mandla belt has her memory); the Kanha Tiger Reserve (Kanha-Kisli National Park — Mandla and Balaghat districts; one of India's most significant tiger reserves; the Bengal Tiger's stronghold; one of the best places in Asia to see tigers in the wild; the Kanha meadows (maidans) are ideal for wildlife watching; the Barasingha (swamp deer/hard-ground barasingha — Kanha is the only habitat; critically endangered; recovered from near-extinction through Kanha conservation); the Kanha meadows inspired Rudyard Kipling's The Jungle Book (the Seoni hills are nearby); the Baiga tribe (the Mandla-Dindori area is the heartland of the Baiga tribe — among India's most primitive tribes with distinctive tattoo art and forest knowledge; Baiga women tattoo their bodies with distinctive geometric patterns)), and a city of Kanha tigers and Rani Durgavati Gond Kingdom — is Madhya Pradesh's most Kanha-tiger-barasingha and Rani-Durgavati-Gond-warrior-queen Narmada-horseshoe Mandla. From birthday parties in Mandla to celebration cakes — RedHeart covers all Mandla areas: Mandla city, Niwas, Bijadandi, Mawai, Ghugri, Narayanganj, Bichhia.</p>
<p>Our Mandla cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kanha Tiger Reserve Barasingha / Rani Durgavati Gond Kingdom / Narmada Horseshoe / Baiga Tribal Art-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandla, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandla city, Niwas, Bijadandi, Mawai, Ghugri, Narayanganj, Bichhia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kanha Tiger Fondant, Rani Durgavati Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mandla?", answer: "Yes, same-day cake delivery is available across all Mandla areas — Mandla city, Niwas, Bijadandi, Mawai, and Narayanganj — for orders placed before 3 PM." },
      { question: "Do you have Kanha Tiger Reserve and Rani Durgavati-themed cakes?", answer: "Yes! The Kanha Tiger Reserve (Bengal Tiger stronghold; unique hard-ground Barasingha/swamp deer recovered from near-extinction; Kanha meadows inspired Rudyard Kipling's Jungle Book) and Rani Durgavati (1524-1564 CE — Gond queen who defeated Akbar's general and died fighting rather than surrender) inspire our most Kanha-tiger-barasingha and Rani-Durgavati-warrior-queen fondant cakes." },
      { question: "Are eggless cakes available in Mandla?", answer: "Yes, all flavours are available in eggless variants for Mandla delivery." }
    ]
  },

  "patan": {
    cityName: "Patan",
    metaTitle: "Cake Delivery in Patan | UNESCO Rani ki Vav GI Patola Silk Gujarat | RedHeart",
    metaDescription: "Order cakes online in Patan (Gujarat). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Patan (Gujarat)",
    metaKeyword: "cake delivery patan gujarat, order cake online patan, birthday cake patan, custom cake patan, same day cake delivery patan UNESCO Rani ki Vav stepwell GI Patola double ikat silk Saraswati River Solanki dynasty Gujarat",
    footerContent: `
<h2>Cake Delivery in Patan (Gujarat) — UNESCO Rani ki Vav Stepwell, GI Patola Double-Ikat Silk, and Ancient Solanki Capital</h2>
<p>Patan — the district headquarters of Patan district in Gujarat, one of India's most historically rich small cities — the ancient capital of the Solanki (Chaulukya) dynasty and home to two extraordinary GI/UNESCO treasures (the Rani ki Vav (Queen's Stepwell) — a UNESCO World Heritage Site (2014); built in 1063 CE by Queen Udayamati as a memorial for her husband King Bhimdev I (who also built the Modhera Sun Temple) of the Solanki dynasty; a step well (vav) of extraordinary architectural and sculptural beauty — 7 levels of stairs descend 23 m; the walls are lined with over 500 principal sculptures and 1,000 minor ones depicting Vishnu avatars, Apsaras, and other celestial beings; the Rani ki Vav was submerged under sediment for centuries after the Saraswati River flooded; ASI excavated it in the 1980s; it is now on the UNESCO World Heritage list and the Rs. 100 note; the GI Patan Patola (the Patola is a double-ikat silk saree — one of the most technically demanding and expensive textiles in the world; double-ikat means BOTH the warp and the weft threads are resist-dyed in complex patterns before weaving; when the two sets of dyed threads are woven together, the pattern appears in exact geometric precision on both sides of the fabric — perfectly identical; the technique requires that every single thread be tied-dyed in the correct sequence before weaving begins; one Patan Patola saree takes 4-6 months to weave by a family of craftsmen; prices range from ₹1 lakh to ₹25 lakh+; only a handful of Salvi family artisans know the tradition; GI-protected; the Saraswati River (the historical Saraswati River — the "lost river" of the Vedas — is believed to have flowed near Patan; the Rani ki Vav was built on its banks; geological and satellite evidence confirms a now-dry riverbed; Patan stood at a critically important junction on the Saraswati's banks)), and a city of UNESCO Rani ki Vav and GI Patola silk Rs.100 note — is Gujarat's most UNESCO-Rani-ki-Vav-Rs.100-note and GI-Patola-double-ikat-4-6-months-₹25-lakh Patan. From birthday parties in Patan to celebration cakes — RedHeart covers all Patan areas: Patan city, Chanasma, Sidhpur, Radhanpur, Sankheshwar, Harij, Sami.</p>
<p>Our Patan cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant UNESCO Rani ki Vav Stepwell Rs.100 Note / GI Patola Double-Ikat Silk Weaving / Solanki Dynasty-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patan, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patan city, Chanasma, Sidhpur, Radhanpur, Sankheshwar, Harij, Sami</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Rani ki Vav UNESCO Fondant, GI Patola Silk Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Patan (Gujarat)?", answer: "Yes, same-day cake delivery is available across all Patan areas — Patan city, Chanasma, Sidhpur, Radhanpur, and Harij — for orders placed before 3 PM." },
      { question: "Do you have Rani ki Vav UNESCO and GI Patola Silk-themed cakes?", answer: "Yes! The Rani ki Vav (UNESCO 2014 — built 1063 CE by Queen Udayamati; 7-level stepwell 23m deep; 500+ principal sculptures of Vishnu avatars and Apsaras; now on the Rs. 100 note; submerged for centuries then excavated by ASI) and the GI Patan Patola (double-ikat silk — both warp AND weft threads dyed before weaving; 4-6 months per saree; ₹25 lakh+; only Salvi family knows the tradition) inspire our most UNESCO-stepwell-Rs.100 and GI-double-ikat-4-6-months-most-technically-demanding fondant cakes." },
      { question: "Are eggless cakes available in Patan?", answer: "Yes, all flavours are available in eggless variants for Patan (Gujarat) delivery." }
    ]
  },

  "tumkur": {
    cityName: "Tumkur",
    metaTitle: "Cake Delivery in Tumkur Tumakuru | Coconut Capital Siddaganga Math Karnataka | RedHeart",
    metaDescription: "Order cakes online in Tumkur (Tumakuru). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tumkur (Tumakuru)",
    metaKeyword: "cake delivery tumkur tumakuru, order cake online tumkur, birthday cake tumkur, custom cake tumkur, same day cake delivery tumkur Coconut Capital Siddaganga Math Shivakumara Swami Devarayanadurga Karnataka",
    footerContent: `
<h2>Cake Delivery in Tumkur (Tumakuru) — India's Coconut Capital, Siddaganga Math, Devarayanadurga Hills, and Karnataka's Sericulture Belt</h2>
<p>Tumkur (Tumakuru) — the district headquarters of Tumkur district in Karnataka, a district known as India's Coconut Capital and home to an extraordinary spiritual institution (Tumkur as India's Coconut Capital — Tumkur district grows approximately 30-35% of Karnataka's coconuts and is one of the top coconut-producing districts in India; the coconut cultivation in Tumkur's red-sandy loam soil produces high-quality coconuts; coconut oil, copra (dried coconut), tender coconut water supply from Tumkur; also significant silk (sericulture) production; the Siddaganga Math (Siddaganga — a spiritual-educational institution at Sira in Tumkur district; associated with the great saint Shivakumara Swami (1907-2019) — who lived to 111 years; he was known as "walking God" and "Nadedaduva Devaru" in Kannada; the math runs free boarding schools (annadana — free food) for thousands of underprivileged children; Sri Shivakumara Swami was one of India's most revered saints of the 20th century; his 112th year birthday in 2019 drew a million devotees); the Devarayanadurga (rocky hills near Tumkur — 900-1,000 m; the Bhoga Narasimha and Yoga Narasimha temples on the hills; granite boulders and scrub forest; a popular eco-trekking destination from Bengaluru 70 km); the Gorur Dam (Hemavathi Reservoir — adjacent to Hassan-Tumkur border; major irrigation dam); Tumkur is part of the Bengaluru-Mysuru corridor and a major growth city), and a city of Coconut Capital and Siddaganga Math — is Karnataka's most coconut-capital-30% and Siddaganga-Math-walking-God-Shivakumara-Swami Tumkur. From birthday parties in Tumkur to celebration cakes — RedHeart covers all Tumkur areas: Tumkur city, Tiptur (silk-coconut), Madhugiri, Sira, Pavagada, Gubbi, Koratagere, Kunigal.</p>
<p>Our Tumkur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Coconut cake, Photo Cakes, Fondant Coconut Capital / Siddaganga Math Shivakumara Swami / Devarayanadurga Hills-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tumkur (Tumakuru), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tumkur city, Tiptur, Madhugiri, Sira, Pavagada, Gubbi, Koratagere, Kunigal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut Cake, Chocolate, Siddaganga Math Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tumkur (Tumakuru)?", answer: "Yes, same-day cake delivery is available across all Tumkur areas — Tumkur city, Tiptur, Madhugiri, Sira, Pavagada, Gubbi, Koratagere, and Kunigal — for orders placed before 3 PM." },
      { question: "Do you have Coconut Capital and Siddaganga Math-themed cakes?", answer: "Yes! Tumkur's Coconut Capital heritage (30-35% of Karnataka's coconuts; red-sandy loam soil; high-quality copra and tender coconut) and the Siddaganga Math (Sri Shivakumara Swami — the 111-year 'walking God'; free annadana boarding schools for thousands of underprivileged children) inspire our most coconut-capital-Karnataka and Siddaganga-Shivakumara-111-years fondant cakes." },
      { question: "Are eggless cakes available in Tumkur?", answer: "Yes, all flavours including Coconut cake are available in eggless variants for Tumkur (Tumakuru) delivery." }
    ]
  },

  "chitradurga": {
    cityName: "Chitradurga",
    metaTitle: "Cake Delivery in Chitradurga | Chitradurga Fort Nayaka Kingdom Karnataka | RedHeart",
    metaDescription: "Order cakes online in Chitradurga. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chitradurga",
    metaKeyword: "cake delivery chitradurga, order cake online chitradurga, birthday cake chitradurga, custom cake chitradurga, same day cake delivery chitradurga Chitradurga Fort seven rounds Nayaka kingdom Obavva Vanivilas Sagar Karnataka",
    footerContent: `
<h2>Cake Delivery in Chitradurga — Chitradurga Fort (Seven Rounds), Obavva the Warrior, and Karnataka's Stone Fort Heritage</h2>
<p>Chitradurga — the district headquarters of Chitradurga district in Karnataka, a city dominated by one of India's most remarkable military fortresses (the Chitradurga Fort (Chitradurga = "picturesque fort"; the fort is also called Elusuttina Kote — "Seven Rounds Fort" in Kannada, referring to its seven concentric walls; one of India's most extraordinary hill forts — built on and around a cluster of 19 granite boulders/hills; the fortification is 1.5 km in circumference with multiple gates, parapets, granaries, temples, and water tanks inside; begun by the Nayaka kings of Chitradurga in the 17th century and expanded by Hyder Ali and Tipu Sultan; the Hoysala, Vijayanagara, and Nayaka periods all contributed; the Chitradurga Nayaka Kingdom (the Chitradurga Nayakas — a dynasty that ruled from Chitradurga for about 300 years (1559-1779 CE) as feudatories and later independent of the Vijayanagara Empire); the legend of Obavva (Onake Obavva — a legendary Kannada heroine; the wife of a guard at Chitradurga Fort during the 18th century; when Hyder Ali's soldiers found a breach in the fort wall (known as Onake Obavva Kindi — an opening through which soldiers could pass one by one), Obavva single-handedly killed multiple enemy soldiers with an onake (a pestle used for pounding rice) before being herself killed; the story became an enduring symbol of feminine courage in Karnataka; statues and schools named after her); the Vanivilas Sagar Dam (Hemavathi River adjacent; historic dam); the Marimallappa Temple (in Chitradurga fort); Chitradurga is part of the dry Deccan plateau region), and a city of Seven Rounds Fort and Obavva's pestle heroism — is Karnataka's most seven-concentric-walls-granite-boulder-fort and Obavva-onake-pestle-warrior Chitradurga. From birthday parties in Chitradurga to celebration cakes — RedHeart covers all Chitradurga areas: Chitradurga city, Holalkere, Hiriyur, Challakere, Hosadurga, Molakalmuru.</p>
<p>Our Chitradurga cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chitradurga Fort Seven Rounds / Obavva Onake Warrior / Nayaka Kingdom Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitradurga, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chitradurga city, Holalkere, Hiriyur, Challakere, Hosadurga, Molakalmuru</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chitradurga Fort Fondant, Obavva Warrior Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chitradurga?", answer: "Yes, same-day cake delivery is available across all Chitradurga areas — Chitradurga city, Holalkere, Hiriyur, Challakere, and Hosadurga — for orders placed before 3 PM." },
      { question: "Do you have Chitradurga Fort and Obavva-themed cakes?", answer: "Yes! The Chitradurga Fort (Elusuttina Kote — Seven Rounds Fort; built on 19 granite boulders; 7 concentric walls; 1.5 km perimeter; Nayaka-Hyder Ali-Tipu construction; one of India's most extraordinary hill forts) and Obavva Onake (Onake Obavva — the 18th-century warrior woman who single-handedly killed Hyder Ali's soldiers with a pestle at the fort breach; Karnataka's most celebrated feminine courage legend) inspire our most seven-rounds-granite-boulder-fort and Obavva-onake-pestle fondant cakes." },
      { question: "Are eggless cakes available in Chitradurga?", answer: "Yes, all flavours are available in eggless variants for Chitradurga delivery." }
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
