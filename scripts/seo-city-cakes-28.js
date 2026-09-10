// Cakes Batch 28 — 15 cities:
// Assam: Diphu (Karbi Anglong), Haflong (Dima Hasao), Barpeta
// Manipur: Thoubal, Ukhrul, Tamenglong
// Nagaland: Tuensang, Phek, Mon
// Mizoram: Champhai, Serchhip, Kolasib
// Meghalaya: Nongstoin, Williamnagar, Baghmara

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "diphu": {
    cityName: "Diphu",
    metaTitle: "Cake Delivery in Diphu | Karbi Anglong Assam | RedHeart",
    metaDescription: "Order cakes online in Diphu. Same-day delivery across Diphu. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Diphu",
    metaKeyword: "cake delivery diphu, order cake online diphu, birthday cake diphu, custom cake diphu, same day cake delivery diphu Karbi Anglong Assam Karbi tribe Hamren hill district NELFAS Dhanshiri river orange pineapple coal",
    footerContent: `
<h2>Cake Delivery in Diphu — Karbi Anglong's Tribal Capital, Dhanshiri River's Highland Valley, and Assam's Largest Autonomous District Council</h2>
<p>Diphu — the headquarters of Karbi Anglong district in Assam, the capital of India's largest autonomous district (Karbi Anglong — covering 10,434 sq km — is the largest district in Assam and one of the largest districts in India with a significant scheduled tribe population; the Karbi people (also called Mikir) are the indigenous inhabitants of the Karbi Anglong hills; the Karbi Anglong Autonomous Council (KAAC) is one of the most powerful autonomous district councils in India, with legislative and executive powers over tribal affairs under the 6th Schedule of the Indian Constitution; the Karbi people have a rich oral tradition, distinctive Chomdokan (brass jewellery) ornaments, and the Chomangkan festival (a 5-day post-harvest festival with traditional dances, songs, and prayers) — the Chomangkan is Karbi Anglong's most important cultural event; Diphu is connected to Nagaon (Assam's plains) by NH-36; the Karbi Anglong hills are rich in coal deposits — the Borjuri coal belt is commercially significant; the district also produces significant quantities of oranges, pineapples, and other hill fruits; the Dhanshiri River valley area near Diphu is agriculturally productive; the Numaligarh Refinery in nearby Golaghat (Assam) is accessible from Diphu), and a city at the crossroads of tribal self-governance and North-East hill commerce — is a city of Karbi pride and highland vibrancy. From birthday parties in Diphu town to corporate cakes at the KAAC offices, from Chomangkan festival cakes to anniversary surprises near the Nagaon Road — RedHeart covers all Diphu zones: Diphu town, Hamren Road, Nagaon Road, Bokolia, Donkamokam, Rongmongve, Bokolia, Langtuk, Samelangso.</p>
<p>Our Diphu cake range: Chocolate, Black Forest, Red Velvet, Orange (Karbi Anglong hill orange!), Pineapple (Karbi Anglong pineapple!), Butterscotch, Photo Cakes, Fondant Chomangkan Festival / Karbi Anglong Hills-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diphu, Assam (Karbi Anglong)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diphu town, Hamren Road, Nagaon Road, Bokolia, Donkamokam, Langtuk</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orange, Pineapple, Chocolate, Chomangkan Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Diphu, Karbi Anglong?", answer: "Yes, same-day cake delivery is available across all Diphu areas — Diphu town, Hamren Road, Nagaon Road, Bokolia, and Donkamokam — for orders placed before 3 PM." },
      { question: "Do you have Karbi Anglong Orange Cake and Chomangkan Festival-themed cakes in Diphu?", answer: "Yes! The Karbi Anglong hills produce excellent oranges and pineapples — our Orange and Pineapple cakes celebrate Diphu's hill fruit bounty. The Chomangkan festival — the Karbi people's most important 5-day harvest celebration — inspires our distinctive Karbi Anglong fondant designs." },
      { question: "Are eggless cakes available in Diphu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Orange, Pineapple — are available in eggless variants for Diphu delivery." }
    ]
  },

  "haflong": {
    cityName: "Haflong",
    metaTitle: "Cake Delivery in Haflong | Hill Queen Assam Dima Hasao | RedHeart",
    metaDescription: "Order cakes online in Haflong. Same-day delivery across Haflong. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Haflong",
    metaKeyword: "cake delivery haflong, order cake online haflong, birthday cake haflong, custom cake haflong, same day cake delivery haflong Dima Hasao Assam hill queen Haflong lake Dimasa Naga Zeme Kuki hill station Silchar road",
    footerContent: `
<h2>Cake Delivery in Haflong — Assam's Only Hill Station, Haflong Lake's Mirror Waters, and Dimasa Kingdom's Ancient Highland Capital</h2>
<p>Haflong — the headquarters of Dima Hasao (formerly North Cachar Hills) district in Assam, Assam's only hill station and one of Northeast India's most scenic towns (Haflong — at 680 metres above sea level — is called the "Hill Queen of Assam"; it is the only hill station in Assam and a popular weekend getaway for residents of Silchar, Guwahati, and Shillong; the Haflong Lake — a beautiful natural freshwater lake in the heart of Haflong town — is the centrepiece of the town's scenic appeal; the lake is surrounded by pine and bamboo forests and provides breathtaking reflections of the surrounding hills; the Zeme Nagas, Dimasas, Kupuis, Kukis, and Hmars are among the major tribal communities of Dima Hasao; the Dimasa people — one of the oldest plains and hill tribes of Assam — have their kingdom's historical records dating to the medieval period; the Dimasa kingdom's capital was at Maibong, near Haflong; the Maibong archaeological site has ruins of the Dimasa palace and temples; the Borail Range and the North Cachar Hills forest provides significant biodiversity; the railway line from Guwahati to Jiribam (Manipur) passes through some of the most spectacular mountain terrain in Northeast India, tunnelling through the Barail hills — the journey from Guwahati to Haflong by train through the Lumding-Sabroom route is considered one of India's most scenic rail journeys), and a district of the Dima Hasao Autonomous Council — is a city of Assam's uniquely cool highland serenity. From birthday parties at Haflong Lake to corporate cakes at the DHADC offices, from anniversary surprises with hill station views to student cakes — RedHeart covers all Haflong zones: Haflong town, Haflong Lake area, Maibong, Umrangso, Langting, Jatinga, Mahur, Ditockcherra.</p>
<p>Our Haflong cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Strawberry (hill station!), Photo Cakes, Fondant Haflong Lake / Dimasa Kingdom / Hill Queen-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haflong, Assam (Dima Hasao)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">680 metres — Assam's only hill station</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haflong town, Haflong Lake area, Maibong, Umrangso, Langting, Jatinga</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Haflong Lake Fondant, Strawberry, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Haflong?", answer: "Yes, same-day cake delivery is available across all Haflong areas — Haflong town, Haflong Lake area, Maibong, Umrangso, and Jatinga — for orders placed before 3 PM." },
      { question: "Do you have Haflong Lake-themed cakes in Haflong?", answer: "Yes! The Haflong Lake — with its pine-and-bamboo reflections at the heart of Assam's only hill station — and the ancient Dimasa Kingdom's Maibong ruins inspire our most scenic Haflong fondant cakes." },
      { question: "Are eggless cakes available in Haflong?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Strawberry, Butterscotch — are available in eggless variants for Haflong delivery." }
    ]
  },

  "barpeta": {
    cityName: "Barpeta",
    metaTitle: "Cake Delivery in Barpeta | Srimanta Sankardeva Assam | RedHeart",
    metaDescription: "Order cakes online in Barpeta. Same-day delivery across Barpeta. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barpeta",
    metaKeyword: "cake delivery barpeta, order cake online barpeta, birthday cake barpeta, custom cake barpeta, same day cake delivery barpeta Srimanta Sankardeva Bhakti Satra Neo-Vaishnavism Manas river Assam Beki river Brahmaputra wetland",
    footerContent: `
<h2>Cake Delivery in Barpeta — Srimanta Sankardeva's Bhakti Capital, Manas River's Sacred Confluence, and Assam's Satra Cultural Heartland</h2>
<p>Barpeta — the headquarters of Barpeta district in Assam, one of the most culturally and spiritually significant towns in Assam's history (Barpeta is the most important centre of Srimanta Sankardeva's Neo-Vaishnavism movement in Assam; Srimanta Sankardeva (1449-1568) — the great Assamese saint-scholar, poet, playwright, and social reformer — established the Eka Sarana Naam Dharma (one-refuge Name religion) that transformed Assam's social and cultural fabric; the Barpeta Satra (Satra = monastery/institution of Neo-Vaishnavism) is one of the four Sattras (great four Satras established by Sankardeva and Madhabdeva) — the Barpeta Satra is also called "Batadrava Satra"; the Satra system of Assam created the unique Ankia Nat (one-act plays), Borgeet (sacred songs), Bhaona (theatrical performances), and Sattriya dance — which was declared one of India's classical dance forms by the Sangeet Natak Akademi in 2000; the Barpeta Sattra's Rasatsava (the festival celebrating Sankardeva's teachings during Ras Purnima in November) is one of Assam's most spiritually charged events; the Manas River — which flows from Bhutan through Manas National Park (UNESCO World Heritage Site) — meets the Beki River near Barpeta, creating a rich wetland ecosystem; the Barpeta district has significant Muslim populations (Barpeta is one of Assam's districts with a demographic change noted in NRC debates)), and a city of deep Neo-Vaishnavite heritage — is a city of Assam's most celebrated saint and classical arts. From birthday parties near the Satra to corporate cakes at the district offices, from Ras Purnima cakes to anniversary surprises near the Manas highway — RedHeart covers all Barpeta zones: Barpeta town, Barpeta Road, Sarthebari, Mandia, Sarupeta, Chenga, Bhawanipur, Bhabanipur.</p>
<p>Our Barpeta cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Barpeta Satra / Srimanta Sankardeva / Manas Wetland-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barpeta, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barpeta town, Barpeta Road, Sarthebari, Mandia, Sarupeta, Chenga, Bhawanipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Barpeta Satra Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barpeta?", answer: "Yes, same-day cake delivery is available across all Barpeta areas — Barpeta town, Barpeta Road, Sarthebari, Mandia, and Chenga — for orders placed before 3 PM." },
      { question: "Do you have Barpeta Satra / Srimanta Sankardeva-themed cakes in Barpeta?", answer: "Yes! The Barpeta Satra — one of Assam's great Neo-Vaishnavite monasteries founded in the spirit of Srimanta Sankardeva, who created Sattriya classical dance and transformed Assam's culture — and the sacred Manas-Beki river confluence inspire our Barpeta fondant cakes." },
      { question: "Are eggless cakes available in Barpeta?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango, Butterscotch — are available in eggless variants for Barpeta delivery." }
    ]
  },

  "thoubal": {
    cityName: "Thoubal",
    metaTitle: "Cake Delivery in Thoubal | Loktak Adjacent Manipur | RedHeart",
    metaDescription: "Order cakes online in Thoubal. Same-day delivery across Thoubal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Thoubal",
    metaKeyword: "cake delivery thoubal, order cake online thoubal, birthday cake thoubal, custom cake thoubal, same day cake delivery thoubal Manipur Thoubal river Imphal adjacent pineapple farming Meitei heartland commercial hub",
    footerContent: `
<h2>Cake Delivery in Thoubal — Manipur's Most Commercially Vibrant District, Thoubal River Valley, and Meitei Cultural Heartland</h2>
<p>Thoubal — the headquarters of Thoubal district in Manipur, the most densely populated and commercially active district outside Imphal (Thoubal district — named after the Thoubal River — borders Imphal district to the west and is effectively Manipur's second commercial hub; the Thoubal market is a major wholesale centre for agricultural produce, textiles, and manufactured goods; the Ningel Chakhao (Manipuri black rice) — one of India's most prized GI-tagged specialty rices, internationally recognized for its rich anthocyanin content — is grown in the Thoubal and Bishnupur districts of Manipur; the Thoubal River is one of the Imphal valley's major rivers; the Waithou Lake in Thoubal district is a natural freshwater lake with fishing and scenic beauty; Kakching — a major sub-division of Thoubal (now a separate district) — was historically part of Thoubal; the Meitei community, Manipur's dominant cultural group, forms the majority of Thoubal's population; the Meitei martial art Thang-Ta (also called Huyen Langlon — a sword-and-spear combat system) and Meitei traditional festivals like Cheiraoba (Meitei New Year) and Yaoshang (Manipuri Holi) are observed with great community participation; Thoubal district is known for pineapple cultivation — Manipur's hill areas supply pineapples to the Thoubal plains market), and a city of Meitei commerce and river valley agriculture — is a city of marketplace energy and cultural depth. From birthday parties in Thoubal town to corporate cakes at the commercial establishments, from Cheiraoba festival cakes to anniversary surprises — RedHeart covers all Thoubal zones: Thoubal town, Waithou, Wangjing, Lilong, Kakching Road, Yairipok, Heirok, Khangabok.</p>
<p>Our Thoubal cake range: Chocolate, Black Forest, Red Velvet, Pineapple (Manipur hill pineapple!), Black Rice (Chakhao!), Butterscotch, Photo Cakes, Fondant Meitei Cheiraoba / Manipuri Culture-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thoubal, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thoubal town, Waithou, Wangjing, Lilong, Kakching Road, Yairipok, Heirok</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pineapple, Chocolate, Cheiraoba Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Thoubal?", answer: "Yes, same-day cake delivery is available across all Thoubal areas — Thoubal town, Waithou, Wangjing, Lilong, and Yairipok — for orders placed before 3 PM." },
      { question: "Do you have Chakhao (Manipuri Black Rice) cake in Thoubal?", answer: "Yes! Manipur's GI-tagged Chakhao (Ningel Chakhao black rice) — grown in the Thoubal and Bishnupur areas — inspires one of our most unique local cake flavours in Thoubal." },
      { question: "Are eggless cakes available in Thoubal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Pineapple — are available in eggless variants for Thoubal delivery." }
    ]
  },

  "ukhrul": {
    cityName: "Ukhrul",
    metaTitle: "Cake Delivery in Ukhrul | Tangkul Naga Manipur Shirui Lily | RedHeart",
    metaDescription: "Order cakes online in Ukhrul. Same-day delivery across Ukhrul. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ukhrul",
    metaKeyword: "cake delivery ukhrul, order cake online ukhrul, birthday cake ukhrul, custom cake ukhrul, same day cake delivery ukhrul Tangkul Naga Manipur Shirui Lily Naga Lily UNESCO rare flower Chingai Kachai lemon",
    footerContent: `
<h2>Cake Delivery in Ukhrul — Tangkul Naga Homeland, Shirui Lily's UNESCO-Celebrated Rarity, and Kachai Lemon's World Recognition</h2>
<p>Ukhrul — the headquarters of Ukhrul district in Manipur, the cultural homeland of the Tangkul Naga people and one of Manipur's most naturally spectacular hill districts (the Shirui Lily (Lilium mackliniae) — a unique lily species found exclusively on the Shirui Hills near Ukhrul — is Manipur's state flower; the Shirui Lily is a rare endemic species that grows only on the Shirui Peak (2,835 metres) and blooms in May-June; the Shirui Lily Festival (April-May) is one of Manipur's most celebrated events, drawing visitors to Ukhrul to see the pink blooms against the mountain backdrop; the Tangkul Naga people are one of Manipur's largest Naga tribal groups; the Tangkul language, Tangkul traditional dress (particularly the distinctive striped shawls and heavy necklaces), and the Tangkul Kachai area are distinctive; Kachai — a village in Ukhrul district — is famous for the Kachai Lemon (Kachai Pineapple Lemon) — a unique hybrid lemon variety found only in Kachai village that has received GI tag; the Kachai Lemon is a large, seedless, extremely juicy lemon unique to Ukhrul; the Chingai area in Ukhrul has rice terraces that are agriculturally significant; Ukhrul district borders Nagaland and Myanmar; the Tangkul-Naga community is predominantly Christian (Baptist)) — is a city of endemic floral wonder and unique GI lemon. From birthday parties in Ukhrul town to Shirui Lily Festival celebration cakes, from anniversary surprises near the Imphal highway to student cakes — RedHeart covers all Ukhrul zones: Ukhrul town, Shirui area, Kachai, Chingai, Phungcham, Kamjong, Saikul Road, Huining.</p>
<p>Our Ukhrul cake range: Chocolate, Black Forest, Red Velvet, Lemon (Kachai Pineapple Lemon!), Butterscotch, Photo Cakes, Fondant Shirui Lily / Kachai Lemon / Shirui Peak-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ukhrul, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ukhrul town, Shirui area, Kachai, Chingai, Phungcham, Kamjong, Huining</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kachai Lemon, Chocolate, Shirui Lily Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ukhrul?", answer: "Yes, same-day cake delivery is available across all Ukhrul areas — Ukhrul town, Shirui area, Kachai, Chingai, and Phungcham — for orders placed before 3 PM." },
      { question: "Do you have Kachai Lemon cake and Shirui Lily-themed cakes in Ukhrul?", answer: "Yes! Ukhrul's Kachai Pineapple Lemon — a GI-tagged, seedless, ultra-juicy lemon found only in Kachai village — flavours our most uniquely local Ukhrul cake. The Shirui Lily (Manipur's state flower, endemic only to Shirui Peak) inspires our most beautiful Ukhrul fondant designs." },
      { question: "Are eggless cakes available in Ukhrul?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Lemon — are available in eggless variants for Ukhrul delivery." }
    ]
  },

  "tamenglong": {
    cityName: "Tamenglong",
    metaTitle: "Cake Delivery in Tamenglong | Orange Festival Manipur | RedHeart",
    metaDescription: "Order cakes online in Tamenglong. Same-day delivery across Tamenglong. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tamenglong",
    metaKeyword: "cake delivery tamenglong, order cake online tamenglong, birthday cake tamenglong, custom cake tamenglong, same day cake delivery tamenglong Manipur orange festival Zeliang Rongmei Naga Barak river Zeilad lake Barak headwaters",
    footerContent: `
<h2>Cake Delivery in Tamenglong — Manipur's Orange Capital, Zeilad Lake's Sacred Biodiversity, and Rongmei Naga Heartland</h2>
<p>Tamenglong — the headquarters of Tamenglong district in Manipur, celebrated across Northeast India as Manipur's "Orange Capital" (Tamenglong district is one of the leading orange-producing districts in Northeast India; the Tamenglong orange (Citrus reticulata — mandarin/tangerine variety) is distinctive for its excellent size, fragrant peel, and sweet-tangy flavour; the Tamenglong Orange Festival (December) is an annual event that showcases the orange harvest, with agricultural exhibitions, cultural programs, and community celebrations; the Rongmei Naga (also called Kabui Naga or Zemei) are the principal tribal group of Tamenglong; the Rongmei people have a rich cultural tradition including the Ngii festival (first rice-planting festival), the Nkemkaikham festival, and distinctive Rongmei handlooms; the Zeilad Lake (Zelad Lake) in Tamenglong district is a sacred natural lake of significant ecological and cultural importance to the Rongmei community; the Zeilad Wildlife Sanctuary hosts unique biodiversity including rare orchids and the Blyth's tragopan bird; the Barak River — one of the major rivers of Northeast India — originates in the Tamenglong hills (from the Liyai Khunou peak area); the district also has significant bamboo and cane forests; Tamenglong has historically been an area of significant insurgency-related challenges, but peace has improved considerably), and a district of hill serenity and orange grove prosperity — is a city of orange abundance. From birthday parties in Tamenglong town to Orange Festival celebration cakes, from anniversary surprises near Zeilad Lake to student cakes — RedHeart covers all Tamenglong zones: Tamenglong town, Tousem, Nungba, Tamei, Khongsang, Khangjang, Pabram, Longmai.</p>
<p>Our Tamenglong cake range: Chocolate, Black Forest, Red Velvet, Orange (Tamenglong mandarin!), Butterscotch, Photo Cakes, Fondant Tamenglong Orange Festival / Zeilad Lake / Rongmei Naga-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tamenglong, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tamenglong town, Tousem, Nungba, Tamei, Khongsang, Pabram, Longmai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orange (Tamenglong Mandarin), Chocolate, Orange Festival Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tamenglong?", answer: "Yes, same-day cake delivery is available across all Tamenglong areas — Tamenglong town, Tousem, Nungba, Tamei, and Khongsang — for orders placed before 3 PM." },
      { question: "Do you have Tamenglong Orange cake and Orange Festival-themed cakes?", answer: "Yes! Tamenglong's distinctive mandarin oranges — celebrated annually at the Tamenglong Orange Festival (December) — are the flavour backbone of our Tamenglong Orange cake. The Orange Festival's community celebration and Zeilad Lake's sacred beauty also inspire our local fondant designs." },
      { question: "Are eggless cakes available in Tamenglong?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Orange — are available in eggless variants for Tamenglong delivery." }
    ]
  },

  "tuensang": {
    cityName: "Tuensang",
    metaTitle: "Cake Delivery in Tuensang | Chang Sangtam Nagaland | RedHeart",
    metaDescription: "Order cakes online in Tuensang. Same-day delivery across Tuensang. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tuensang",
    metaKeyword: "cake delivery tuensang, order cake online tuensang, birthday cake tuensang, custom cake tuensang, same day cake delivery tuensang Chang Sangtam Konyak Yimchunger Nagaland easternmost Myanmar border hill Nokhu Dzou peak",
    footerContent: `
<h2>Cake Delivery in Tuensang — Chang & Sangtam Naga Heartland, Nokhu Dzou Peak, and Nagaland's Easternmost District</h2>
<p>Tuensang — the headquarters of Tuensang district in Nagaland, the easternmost district of Nagaland that borders Myanmar (Tuensang district is the largest district in Nagaland by area; it borders Myanmar (Burma) along its eastern border; the major tribal groups of Tuensang include the Chang Naga, the Sangtam Naga, the Yimchunger Naga, and the Khiamniungan Naga — making it one of Nagaland's most tribally diverse districts; the Chang Naga — headquartered in Tuensang town — are one of Nagaland's culturally distinct tribes known for their Naknyulum festival (a post-harvest festival celebrating the year's agricultural cycle with traditional dances, songs, and games); the Sangtam Naga people are known for their Lomba festival and distinctive headhunting-era warrior head ornaments; the Nokhu Dzou peak (3,840 metres) in Tuensang district is one of Nagaland's highest peaks and is part of the Saramati massif (Saramati is the highest peak in Nagaland at 3,826 metres — though some sources place Nokhu Dzou slightly higher); the forests of Tuensang district are home to rare biodiversity including the Blyth's tragopan, Amur falcon migration routes, and tiger-elephant corridors extending into Myanmar; Tuensang town itself has a significant handicraft tradition — the Nagaland handloom work of various tribes is distinctive), and a district of extraordinary frontier landscape — is a city of multi-tribal Naga heritage. From birthday parties in Tuensang town to tribal festival celebration cakes, from anniversary surprises to student cakes at Tuensang's churches — RedHeart covers all Tuensang zones: Tuensang town, Nokhu, Longleng Road, Noklak, Shamator, Tobu, Mon Road, Kiphire Road.</p>
<p>Our Tuensang cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Chang Naknyulum Festival / Nokhu Dzou / Naga Tribal Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tuensang, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tuensang town, Nokhu, Longleng Road, Noklak, Shamator, Tobu, Mon Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chang Naknyulum Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tuensang?", answer: "Yes, same-day cake delivery is available across all Tuensang areas — Tuensang town, Nokhu, Longleng Road, Noklak, and Shamator — for orders placed before 3 PM." },
      { question: "Do you have Chang Naga Naknyulum Festival-themed cakes in Tuensang?", answer: "Yes! The Chang Naga's Naknyulum post-harvest festival — celebrated with traditional dances, community songs, and the area's rich multi-tribal heritage spanning Chang, Sangtam, Yimchunger, and Khiamniungan Naga — inspires our distinctively Tuensang fondant cakes." },
      { question: "Are eggless cakes available in Tuensang?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Tuensang delivery." }
    ]
  },

  "phek": {
    cityName: "Phek",
    metaTitle: "Cake Delivery in Phek | Chakhesang Naga Nagaland | RedHeart",
    metaDescription: "Order cakes online in Phek. Same-day delivery across Phek. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Phek",
    metaKeyword: "cake delivery phek, order cake online phek, birthday cake phek, custom cake phek, same day cake delivery phek Chakhesang Naga Nagaland Pfutsero Dzuleke village Chakhesang tribe Meluri community forest",
    footerContent: `
<h2>Cake Delivery in Phek — Chakhesang Naga Heartland, Dzuleke Village's Community Forest, and Nagaland's Green Tourism Pioneer</h2>
<p>Phek — the headquarters of Phek district in Nagaland, the homeland of the Chakhesang Naga people (the Chakhesang Naga — whose name combines "Cha" (eastern), "Khe" (western), and "Sang" (upper) — were historically two distinct tribes (Eastern Angami and Pochuri) who unified into the Chakhesang tribe in the 1940s; the Chakhesang people are known for their distinctive attire (particularly the shawls and head ornaments), the Sükrünye festival (a spring harvest celebration), and their contributions to Nagaland's church music tradition; Pfutsero — a town in Phek district at 2,133 metres — is one of Nagaland's highest-altitude towns and is called the "Cherapunji of Nagaland" due to its extremely high rainfall; Dzuleke village in Phek district is one of Northeast India's pioneering community-based ecotourism villages — the Dzuleke Community Forest is a rare example of a Naga community conserving its oak forest for biodiversity; Dzuleke's community forest has resident Clouded Leopards, Black Bears, and rare birds; the Phek town area has historical terraced fields; Phek district borders Manipur to the south and has some of Nagaland's most intact tribal forest landscapes; the Meluri area in Phek district has rare high-altitude meadows and the Meluri Zanskar winter journey (not directly related to Ladakh) is a community annual cultural trek), and a district of biodiversity conservation and Chakhesang cultural pride — is a city of green tourism leadership. From birthday parties in Phek town to eco-tourism celebration cakes at Dzuleke, from Sükrünye festival cakes to anniversary surprises near Pfutsero — RedHeart covers all Phek zones: Phek town, Pfutsero, Dzuleke, Meluri, Chizami, Kikruma, Suruhoto Road, Thanamir.</p>
<p>Our Phek cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Chakhesang Sükrünye / Dzuleke Forest / Pfutsero Highland-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Phek, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Phek town, Pfutsero, Dzuleke, Meluri, Chizami, Kikruma, Thanamir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dzuleke Forest Fondant, Chakhesang Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Phek?", answer: "Yes, same-day cake delivery is available across all Phek areas — Phek town, Pfutsero, Dzuleke, Meluri, and Chizami — for orders placed before 3 PM." },
      { question: "Do you have Dzuleke Community Forest / Chakhesang-themed cakes in Phek?", answer: "Yes! Dzuleke village's pioneering community forest — home to Clouded Leopards and rare birds — and the Chakhesang Naga's Sükrünye spring festival inspire our Phek fondant cakes." },
      { question: "Are eggless cakes available in Phek?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Phek delivery." }
    ]
  },

  "mon": {
    cityName: "Mon",
    metaTitle: "Cake Delivery in Mon | Konyak Naga Headhunter Nagaland | RedHeart",
    metaDescription: "Order cakes online in Mon. Same-day delivery across Mon. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mon",
    metaKeyword: "cake delivery mon, order cake online mon, birthday cake mon, custom cake mon, same day cake delivery mon Konyak Naga headhunter Longwa village Angh Myanmar border Nagaland Shangnyu Naginimora Tizit",
    footerContent: `
<h2>Cake Delivery in Mon — Konyak Naga's Last Headhunters, Longwa Village Straddling India & Myanmar, and Nagaland's Wildest Frontier</h2>
<p>Mon — the headquarters of Mon district in Nagaland, the cultural homeland of the Konyak Naga — one of the world's last headhunter tribal communities (the Konyak Naga were renowned as the most feared headhunters in the Naga Hills; the practice of headhunting (ritual collection of enemy heads, which conferred social status and spiritual power) was practised by the Konyak until the mid-20th century; the last generation of Konyak warriors with traditional facial tattoos (received after taking a head) are now elderly but still living in Mon district villages; the Konyak facial tattoos (called "Othem" — cross-shaped patterns on the forehead for men who took heads) are one of the world's most remarkable surviving warrior marking traditions; Longwa village on the Mon-Myanmar border is uniquely split by the international boundary — the Angh (chief) of Longwa's house straddles both India and Myanmar; the Angh's palace is in both countries simultaneously; the Konyak Angh system (hereditary chieftainship) remains influential; the Hornbill Festival at Nagaland (December) features the Konyak Naga as among the most dramatic participants with their warrior attire; Mon district is also known for opium poppy cultivation (historically) and now for paddy and pineapple; the Naginimora and Tizit areas have commercial importance; Mon borders Arunachal Pradesh and Myanmar), and a city of extraordinary anthropological significance — is a city of living warrior heritage. From birthday parties in Mon town to celebration cakes at the DUDA offices, from anniversary surprises to Hornbill Festival cakes — RedHeart covers all Mon zones: Mon town, Longwa, Shangnyu, Naginimora, Tizit, Aboi, Wakching, Chen.</p>
<p>Our Mon cake range: Chocolate, Black Forest, Red Velvet, Pineapple, Butterscotch, Photo Cakes, Fondant Konyak Warrior / Longwa Village / Hornbill Festival-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mon, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mon town, Longwa, Shangnyu, Naginimora, Tizit, Aboi, Wakching, Chen</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Konyak Warrior Fondant, Longwa Village Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mon, Nagaland?", answer: "Yes, same-day cake delivery is available across all Mon areas — Mon town, Longwa, Shangnyu, Naginimora, and Tizit — for orders placed before 3 PM." },
      { question: "Do you have Konyak Naga / Longwa Village-themed cakes in Mon?", answer: "Yes! The Konyak Naga — one of the world's last communities with living headhunting warrior traditions, complete with facial tattoos — and the legendary Longwa village (split between India and Myanmar, with the Angh chief's house in both countries!) inspire our most dramatic Mon fondant cakes." },
      { question: "Are eggless cakes available in Mon, Nagaland?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Pineapple — are available in eggless variants for Mon delivery." }
    ]
  },

  "champhai": {
    cityName: "Champhai",
    metaTitle: "Cake Delivery in Champhai | Mizo Rice Bowl Myanmar Gateway | RedHeart",
    metaDescription: "Order cakes online in Champhai. Same-day delivery across Champhai. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Champhai",
    metaKeyword: "cake delivery champhai, order cake online champhai, birthday cake champhai, custom cake champhai, same day cake delivery champhai Mizoram rice bowl Myanmar border Rih Dil lake Mizo Thalfavang Kawl festival grapes Zote valley",
    footerContent: `
<h2>Cake Delivery in Champhai — Mizoram's Rice Bowl, Rih Dil's Sacred Myanmar Border Lake, and Champhai Valley's Grape Frontier</h2>
<p>Champhai — the headquarters of Champhai district in Mizoram, the city known as the "Rice Bowl of Mizoram" and gateway to Myanmar (Champhai district — at 1,678 metres in the Champhai Valley — is Mizoram's largest and most agriculturally productive valley; the district produces significant quantities of rice, maize, ginger, and horticulture crops; Champhai grapes — grown in the fertile Champhai valley — are one of Mizoram's specialty agricultural products; the Rih Dil (Rih Lake) — a heart-shaped lake — is one of the most sacred sites in Mizo cultural tradition; Rih Dil lies just across the Myanmar border (in the Chin State of Myanmar) but is deeply revered by the Mizo people as the lake where departed souls begin their journey to the afterlife (in Mizo traditional religion, the souls of the dead must cross Rih Dil); the Thalfavang Kawl festival in Champhai (a harvest thanksgiving festival) is celebrated with Mizo traditional songs, cheraw (bamboo dance), and community feasting; Champhai is connected to Myanmar through the Zokhawthar border point on the Champhai-Tiddim Road; the town is a significant centre for Mizo traditional games and community activities; the Murlen National Park in eastern Champhai district is one of Mizoram's most important biodiversity reserves (protecting hoolock gibbons, clouded leopards, and rare orchids)), and a city of valley prosperity and sacred lake mythology — is Mizoram's most serene agricultural district capital. From birthday parties in Champhai town to Thalfavang Kawl festival cakes, from anniversary surprises near Rih Dil to student cakes — RedHeart covers all Champhai zones: Champhai town, Zokhawthar, Khawzawl, Ngopa, Suangpuilawn, Vangchhia, Lengteng.</p>
<p>Our Champhai cake range: Chocolate, Black Forest, Red Velvet, Grape (Champhai valley!), Butterscotch, Photo Cakes, Fondant Rih Dil Sacred Lake / Thalfavang Kawl / Champhai Valley-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champhai, Mizoram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champhai town, Zokhawthar, Khawzawl, Ngopa, Suangpuilawn, Lengteng</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Grape Cake, Chocolate, Rih Dil Fondant, Thalfavang Kwl Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Champhai?", answer: "Yes, same-day cake delivery is available across all Champhai areas — Champhai town, Zokhawthar, Khawzawl, Ngopa, and Suangpuilawn — for orders placed before 3 PM." },
      { question: "Do you have Champhai Grape cake and Rih Dil Lake-themed cakes?", answer: "Yes! Champhai Valley's specialty grapes — grown in the fertile highland valley at 1,678 metres — flavour our Champhai Grape cake. The sacred Rih Dil lake (where Mizo souls begin their afterlife journey in traditional belief) and the Thalfavang Kawl harvest festival inspire our deeply meaningful Mizoram fondant designs." },
      { question: "Are eggless cakes available in Champhai?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Grape — are available in eggless variants for Champhai delivery." }
    ]
  },

  "serchhip": {
    cityName: "Serchhip",
    metaTitle: "Cake Delivery in Serchhip | 100% Literate Mizoram | RedHeart",
    metaDescription: "Order cakes online in Serchhip. Same-day delivery across Serchhip. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Serchhip",
    metaKeyword: "cake delivery serchhip, order cake online serchhip, birthday cake serchhip, custom cake serchhip, same day cake delivery serchhip Mizoram 100 percent literacy Thenzawl Mizo community library Presbyterian church Khuangchera Puk cave",
    footerContent: `
<h2>Cake Delivery in Serchhip — India's Highest Literacy District, Thenzawl's Handloom Hub, and Mizoram's Model District</h2>
<p>Serchhip — the headquarters of Serchhip district in Mizoram, the most remarkable district in India for its extraordinary literacy achievement (Serchhip district — with a literacy rate consistently above 98% and in some censuses recorded at 99%+ — is the most literate district in India; in 2011, Serchhip's literacy rate was cited at 98.76%, the highest of any district in India, and the district has been highlighted in the Limca Book of Records for its near-total literacy; this achievement is a result of the Mizo community's extraordinarily strong social commitment to education, the Presbyterian and Baptist church networks that run schools across every village, and the Mizo community library networks; Serchhip district has one of the highest concentrations of community libraries (Lengkhawm — lending libraries) per population in India; the Mizo community's culture of reading and self-improvement is deeply ingrained; Thenzawl in Serchhip district is Mizoram's handloom and power-loom hub — the Thenzawl textile industry produces Mizo traditional puan (wraparound garment) fabrics that are sold across Northeast India; the Thenzawl Mini Secretariat and Thenzawl Sports Complex reflect the planned development of this handloom town; the Khuangchera Puk (cave) near Serchhip is a historical heritage site where the Mizo chief Khuangchera hid), and a district that proves community commitment can transcend geography — is a city of educational inspiration and handloom beauty. From birthday parties in Serchhip town to corporate cakes at Thenzawl's handloom centres, from anniversary surprises to student cakes at Serchhip's well-staffed colleges — RedHeart covers all Serchhip zones: Serchhip town, Thenzawl, E-Lungdar, N-Vanlaiphai, Hualtu, Bualpui, North Vanlaiphai.</p>
<p>Our Serchhip cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Mizo Community Library / Thenzawl Handloom / India's Literacy Champion-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Serchhip, Mizoram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Serchhip town, Thenzawl, E-Lungdar, N-Vanlaiphai, Hualtu, Bualpui</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Literacy Champion Fondant, Thenzawl Handloom Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Serchhip?", answer: "Yes, same-day cake delivery is available across all Serchhip areas — Serchhip town, Thenzawl, E-Lungdar, and N-Vanlaiphai — for orders placed before 3 PM." },
      { question: "Do you have Serchhip's Literacy Champion / Thenzawl Handloom-themed cakes?", answer: "Yes! Serchhip's extraordinary 98%+ literacy rate — making it India's most literate district through the Mizo community library (Lengkhawm) tradition — and Thenzawl's beautiful Mizo puan handloom textiles inspire our uniquely Serchhip fondant cakes." },
      { question: "Are eggless cakes available in Serchhip?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Serchhip delivery." }
    ]
  },

  "kolasib": {
    cityName: "Kolasib",
    metaTitle: "Cake Delivery in Kolasib | Assam Mizoram Gateway | RedHeart",
    metaDescription: "Order cakes online in Kolasib. Same-day delivery across Kolasib. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kolasib",
    metaKeyword: "cake delivery kolasib, order cake online kolasib, birthday cake kolasib, custom cake kolasib, same day cake delivery kolasib Mizoram Assam border gateway Bairabi Vairengte Tlawng river Kaladan river Silchar road Cachar",
    footerContent: `
<h2>Cake Delivery in Kolasib — Mizoram's Northern Gateway, Tlawng River Valley, and the Assam-Mizoram Trade Corridor</h2>
<p>Kolasib — the headquarters of Kolasib district in Mizoram, the northernmost district of Mizoram and the primary gateway between Mizoram and mainland India (Kolasib district shares its northern border with Cachar district of Assam; the Vairengte and Bairabi border towns are the primary entry/exit points between Mizoram and the rest of India by road — the Aizawl-Jiribam-Imphal National Highway passes through Kolasib; the Tlawng River (also called Dhaleswari or Kaladan tributary) flows through Kolasib district; the Kolasib district was established in 1995 when it was carved out of Aizawl district; the Mizo community of Kolasib is predominantly Lushai/Mizo clan and the district has Mizo (Baptist and Presbyterian), Bru/Reang (an ethnic minority) and Chakma communities; the Bru (Reang) people — who have faced significant displacement between Mizoram and Tripura following ethnic tensions — have a significant presence in northern Mizoram including Kolasib area; the Kolasib district is agriculturally active with jhum cultivation (shifting agriculture) and growing horticulture; banana, pineapple, ginger, and turmeric are cultivated; the Kawlbem area in Kolasib has notable community-based forest management), and a district at the crossroads of Mizoram's connectivity with India — is a city of trade and transit energy. From birthday parties in Kolasib town to corporate cakes near the Vairengte border, from anniversary surprises near the Tlawng River to student cakes — RedHeart covers all Kolasib zones: Kolasib town, Vairengte, Bairabi, Bilkhawthlir, Phainuam, Thingdawl, Kawnpui, North Hlimen.</p>
<p>Our Kolasib cake range: Chocolate, Black Forest, Red Velvet, Pineapple (Kolasib hills!), Banana, Butterscotch, Photo Cakes, Fondant Tlawng River / Vairengte Gateway / Mizo Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolasib, Mizoram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolasib town, Vairengte, Bairabi, Bilkhawthlir, Thingdawl, Kawnpui</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pineapple, Chocolate, Tlawng River Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kolasib?", answer: "Yes, same-day cake delivery is available across all Kolasib areas — Kolasib town, Vairengte, Bairabi, Bilkhawthlir, and Kawnpui — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kolasib?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Pineapple, Banana — are available in eggless variants for Kolasib delivery." },
      { question: "Do you deliver midnight cakes in Kolasib?", answer: "Yes, midnight birthday cake delivery is available across Kolasib's residential and township zones." }
    ]
  },

  "nongstoin": {
    cityName: "Nongstoin",
    metaTitle: "Cake Delivery in Nongstoin | West Khasi Hills Meghalaya | RedHeart",
    metaDescription: "Order cakes online in Nongstoin. Same-day delivery across Nongstoin. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nongstoin",
    metaKeyword: "cake delivery nongstoin, order cake online nongstoin, birthday cake nongstoin, custom cake nongstoin, same day cake delivery nongstoin West Khasi Hills Meghalaya Khasi tribe Ranikor Mawkyrwat Umngot river broom adventure trek",
    footerContent: `
<h2>Cake Delivery in Nongstoin — West Khasi Hills' Tribal Capital, Ranikor's Sacred River Meeting, and Meghalaya's Least-Explored Highland</h2>
<p>Nongstoin — the headquarters of West Khasi Hills district in Meghalaya, one of the least explored and most culturally traditional Khasi districts in India (the West Khasi Hills is one of Meghalaya's largest districts by area; the district is home to the Khasi tribal community — one of India's few surviving matrilineal societies (in Khasi tradition, lineage, clan identity, property inheritance, and family identity pass through the mother; the youngest daughter inherits the family property and ancestral home; the Khasi people's matrilineal customs are unique in the world); Nongstoin town is surrounded by rolling hills, dense subtropical forests, and traditional Khasi villages; the Ranikor area in West Khasi Hills is where the Ranikor River meets the Umngot — creating a scenic confluence that is one of Meghalaya's hidden gems; the Umngot River (also the river at Dawki — famous for its transparent green waters) flows through the West Khasi Hills; the West Khasi Hills is known for broom grass (Thysanolaena maxima) — the Khasi people collect and sell the seeds of broom grass as a significant cash crop; the area also produces areca nut (betel nut), ginger, and turmeric; the district has significant coal deposits; Nongstoin is on the route to the Baghmara area (South Garo Hills)), and a district of matrilineal traditions and river valley serenity — is a city of undiscovered Meghalaya. From birthday parties in Nongstoin town to corporate cakes at the district offices, from anniversary surprises to celebration cakes for Khasi community festivals — RedHeart covers all Nongstoin zones: Nongstoin town, Ranikor, Mawkyrwat, Rambrai, Mairang Road, Mairang, Nongshken, Sohiong.</p>
<p>Our Nongstoin cake range: Chocolate, Black Forest, Red Velvet, Strawberry (Meghalaya hills!), Butterscotch, Photo Cakes, Fondant Khasi Matrilineal / Ranikor River / West Khasi Hills-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nongstoin, Meghalaya (West Khasi Hills)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nongstoin town, Ranikor, Mawkyrwat, Rambrai, Nongshken, Sohiong</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Khasi Matrilineal Fondant, Strawberry, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nongstoin?", answer: "Yes, same-day cake delivery is available across all Nongstoin areas — Nongstoin town, Ranikor, Mawkyrwat, and Rambrai — for orders placed before 3 PM." },
      { question: "Do you have Khasi Matrilineal / West Khasi Hills-themed cakes in Nongstoin?", answer: "Yes! The Khasi people's extraordinary matrilineal culture (where property and lineage pass through the mother — one of the world's most distinctive surviving matrilineal societies) and the scenic Ranikor river confluence inspire our most culturally meaningful Nongstoin fondant cakes." },
      { question: "Are eggless cakes available in Nongstoin?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Strawberry — are available in eggless variants for Nongstoin delivery." }
    ]
  },

  "williamnagar": {
    cityName: "Williamnagar",
    metaTitle: "Cake Delivery in Williamnagar | East Garo Hills Meghalaya | RedHeart",
    metaDescription: "Order cakes online in Williamnagar. Same-day delivery across Williamnagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Williamnagar",
    metaKeyword: "cake delivery williamnagar, order cake online williamnagar, birthday cake williamnagar, custom cake williamnagar, same day cake delivery williamnagar East Garo Hills Meghalaya Garo tribe Simsang river Wangala festival cashew pineapple",
    footerContent: `
<h2>Cake Delivery in Williamnagar — East Garo Hills' Capital, Simsang River Valley, and Garo Tribe's Wangala Drum Festival</h2>
<p>Williamnagar — the headquarters of East Garo Hills district in Meghalaya, the capital of Garo Hills' eastern administrative centre (the Garo people — one of Meghalaya's three major indigenous tribes (alongside Khasi and Jaintia) — are the primary inhabitants of the Garo Hills; the Garos are one of India's few surviving matrilineal societies; the Wangala festival (also called the "100 Drums Festival") is the Garo people's most important and spectacular harvest festival; Wangala is celebrated after the harvest (November) with traditional drum orchestras (the 100 Drums Wangala at Asanang near Tura is one of Northeast India's most visually stunning events, with hundreds of Garo men and women in traditional dress dancing to the mamsang (dance) and the sound of the kram (drum); Williamnagar itself is a smaller, quieter administrative town compared to Tura (West Garo Hills HQ); the Simsang River — one of the major rivers of Garo Hills — flows through East Garo Hills district; the Balpakram National Park (accessible from Baghmara but within the larger Garo Hills area) is a unique national park revered by the Garo people as the "Land of Eternal Wind" where departed souls rest; the East Garo Hills produces cashew nuts, pineapple, ginger, and various hill fruits; the area also has significant coal deposits), and a city of Garo drumming traditions and hill river beauty — is a city of quiet Garo Hills administration. From birthday parties in Williamnagar town to Wangala festival cakes, from anniversary surprises near the Simsang River to celebration cakes — RedHeart covers all Williamnagar zones: Williamnagar town, Rongjeng, Resubelpara, Samanda, Mendipathar, Kharkutta, Bajengdoba.</p>
<p>Our Williamnagar cake range: Chocolate, Black Forest, Red Velvet, Pineapple (Garo Hills!), Cashew, Butterscotch, Photo Cakes, Fondant Wangala 100 Drums / Simsang River / Garo Matrilineal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Williamnagar, Meghalaya (East Garo Hills)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Williamnagar town, Rongjeng, Resubelpara, Samanda, Mendipathar, Kharkutta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pineapple, Chocolate, Wangala 100 Drums Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Williamnagar?", answer: "Yes, same-day cake delivery is available across all Williamnagar areas — Williamnagar town, Rongjeng, Resubelpara, Samanda, and Mendipathar — for orders placed before 3 PM." },
      { question: "Do you have Garo Wangala 100 Drums Festival-themed cakes in Williamnagar?", answer: "Yes! The Wangala festival — the Garo people's spectacular '100 Drums' harvest celebration with traditional kram drums, mamsang dances, and colourful attire — and the Simsang River valley inspire our most festive Garo Hills fondant cakes." },
      { question: "Are eggless cakes available in Williamnagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Pineapple, Cashew — are available in eggless variants for Williamnagar delivery." }
    ]
  },

  "baghmara": {
    cityName: "Baghmara",
    metaTitle: "Cake Delivery in Baghmara | Balpakram South Garo Hills | RedHeart",
    metaDescription: "Order cakes online in Baghmara. Same-day delivery across Baghmara. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Baghmara",
    metaKeyword: "cake delivery baghmara, order cake online baghmara, birthday cake baghmara, custom cake baghmara, same day cake delivery baghmara South Garo Hills Meghalaya Balpakram National Park Land of Eternal Wind Garo tribe Bangladesh border Simsang",
    footerContent: `
<h2>Cake Delivery in Baghmara — Balpakram's Sacred Land of Eternal Wind, South Garo Hills' Bangladesh Border, and Garo Tiger Country</h2>
<p>Baghmara — the headquarters of South Garo Hills district in Meghalaya, the gateway to one of India's most spiritually and ecologically significant national parks (the Balpakram National Park — accessible from Baghmara — is one of the most extraordinary and least-visited national parks in India; Balpakram (meaning "Land of Eternal Wind" in Garo) is sacred to the Garo people as the place where the spirits of the departed rest before their journey to the afterlife; the permanent wind that sweeps through the Balpakram plateau (3,000+ feet) is believed by the Garo community to be the breath of the spirits; the Balpakram National Park has cliffs, ravines, and rare rock formations that create a uniquely dramatic landscape; the park protects one of India's rare tiger and elephant habitats in the Northeast; the Nokrek National Park (further west, in West Garo Hills — a UNESCO Biosphere Reserve — is accessible from the Garo Hills region; Nokrek protects the Red Panda and the wild citrus relatives (Citrus indica — the ancestor of domesticated citrus); South Garo Hills borders Bangladesh to the south — the Tura-Baghmara-Bangladesh border area is part of Meghalaya's southern frontier; Baghmara town is a commercial centre for the India-Bangladesh cross-border informal trade; the Simsang River flows through South Garo Hills; cashew, pineapple, ginger, and tea are grown in the area), and a district where spirit-world geography meets tiger wilderness — is a city of Garo sacred landscape. From birthday parties in Baghmara town to Balpakram trekking celebration cakes, from anniversary surprises near the Bangladesh border to student cakes — RedHeart covers all Baghmara zones: Baghmara town, Balpakram area, Siju, Chokpot, Garobadha, Dalu, Ampati.</p>
<p>Our Baghmara cake range: Chocolate, Black Forest, Red Velvet, Pineapple (South Garo Hills!), Cashew, Butterscotch, Photo Cakes, Fondant Balpakram Sacred Park / Garo Spirit Land / Tiger Elephant-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baghmara, Meghalaya (South Garo Hills)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baghmara town, Balpakram area, Siju, Chokpot, Garobadha, Dalu, Ampati</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pineapple, Chocolate, Balpakram Sacred Land Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Baghmara?", answer: "Yes, same-day cake delivery is available across all Baghmara areas — Baghmara town, Balpakram area, Siju, Chokpot, and Garobadha — for orders placed before 3 PM." },
      { question: "Do you have Balpakram 'Land of Eternal Wind' / Garo Sacred-themed cakes in Baghmara?", answer: "Yes! Balpakram — the Garo people's sacred 'Land of Eternal Wind' where departed spirits rest, one of India's most spiritually and ecologically extraordinary national parks — and the South Garo Hills' tiger country inspire our most evocative Baghmara fondant cakes." },
      { question: "Are eggless cakes available in Baghmara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Pineapple, Cashew — are available in eggless variants for Baghmara delivery." }
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
