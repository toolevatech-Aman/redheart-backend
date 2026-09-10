// Cakes Batch 27 — 15 cities:
// UP: Kasganj, Budaun
// Rajasthan: Kekri
// Gujarat: Bharuch [100% eggless Pure Veg]
// Sikkim: Gangtok
// Ladakh: Leh, Kargil
// J&K: Pulwama, Kupwara
// Tamil Nadu: Tiruvarur, Nagapattinam
// HP: Bilaspur
// Nagaland: Wokha, Zunheboto
// Manipur: Senapati

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "kasganj": {
    cityName: "Kasganj",
    metaTitle: "Cake Delivery in Kasganj | Soron Ganga Ghat UP | RedHeart",
    metaDescription: "Order cakes online in Kasganj. Same-day delivery across Kasganj. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kasganj",
    metaKeyword: "cake delivery kasganj, order cake online kasganj, birthday cake kasganj, custom cake kasganj, same day cake delivery kasganj Soron Ganga ghat Etah border Aligarh road Ramganga pickle chutney Kali river UP",
    footerContent: `
<h2>Cake Delivery in Kasganj — Soron's Sacred Ganga Ghat, Pickle & Chutney Capital, and Ramganga Doab's Sweet Belt</h2>
<p>Kasganj — the headquarters of Kasganj district in Uttar Pradesh (carved out of Etah in 2008), a city with an unusual mix of sacred and culinary fame (Soron — a town in Kasganj district — is one of UP's most significant Ganga pilgrimage sites; the Soron Ghat on the Ganga is a tirthasthala where the Ganga makes a sacred bend, and it is the site of a major annual mela; Soron is mentioned in the Puranas as a sacred crossing; the Kasganj town itself is known for its pickle (achar) and chutney industry — Kasganj is one of India's leading centres for mango pickle (kacchi kairi achar), mixed vegetable pickles, and various chutneys that are bottled and distributed nationally; the local mango pickle tradition (using raw Dusheri and Chausa mangoes from the nearby orchards) is deeply embedded in the city's commercial identity; the Ramganga River — which flows through the Kasganj area — provides irrigation; the district also has significant production of mustard (sarson) and is part of the potato belt; the Saiyad Raja Masjid and the Budhiya Mata temple are significant religious sites; Kasganj town has a large Muslim artisan community (particularly Ansari weavers of silk cloth and the brocade tradition), and a significant Vaishya trading community involved in grain and pickle trade) — is a city of pilgrimage ghats and pickle manufacturing pride. From birthday parties in the Civil Lines area to corporate cakes at the large pickle factories, from anniversary surprises near the Aligarh Road to student cakes at Kasganj's colleges — RedHeart covers all Kasganj zones: Civil Lines, Station Road, Aligarh Road, Soron, Patiyali, Amanpur, Sahawar, Ganj Dundwara.</p>
<p>Our Kasganj cake range: Chocolate, Black Forest, Red Velvet, Mango (Dusheri!), Raw Mango (Kacchi Kairi salted-sweet inspired!), Butterscotch, Photo Cakes, Fondant Soron Ganga / Pickle heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasganj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Aligarh Road, Soron, Patiyali, Sahawar, Ganj Dundwara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango (Dusheri), Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kasganj?", answer: "Yes, same-day cake delivery is available across all Kasganj areas — Civil Lines, Station Road, Aligarh Road, Soron, and Patiyali — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kasganj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kasganj delivery." },
      { question: "Do you deliver midnight cakes in Kasganj?", answer: "Yes, midnight birthday cake delivery is available across Kasganj's central and residential zones." }
    ]
  },

  "budaun": {
    cityName: "Budaun",
    metaTitle: "Cake Delivery in Budaun | Ramganga Rohilkhand UP | RedHeart",
    metaDescription: "Order cakes online in Budaun. Same-day delivery across Budaun. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Budaun",
    metaKeyword: "cake delivery budaun, order cake online budaun, birthday cake budaun, custom cake budaun, same day cake delivery budaun Rohilkhand Ramganga Sufi dargah Bareilly road sugar mill paddy wheat UP mentha",
    footerContent: `
<h2>Cake Delivery in Budaun — Rohilkhand's Sufi Heartland, Ramganga River's Sacred Ghats, and Sugar Mill Country</h2>
<p>Budaun — the headquarters of Budaun district in Uttar Pradesh's Rohilkhand region, a city of significant Sufi and Islamic heritage (Budaun — historically known as Vodamayuta, Badaun, or Budaon — is one of the most historically important cities of the Rohilkhand region; during the Sultanate and Mughal periods, Budaun was a significant administrative and religious centre; the great Sufi saint Hazrat Nizamuddin Auliya (of Delhi's Hazrat Nizamuddin Dargah fame) was born in Budaun — making the city a significant point on the Chishti Sufi lineage map; the Shamsher Jang Mosque and the Jama Masjid of Budaun are medieval-period mosques of architectural significance; the Budaun Imambara complex is a notable landmark; the Ramganga River flows through Budaun district — the sacred ghats on the Ramganga are used for ritual bathing and Chhath Puja; the district is part of the Rohilkhand sugar belt — large cooperative sugar mills operate at Bilsi and Bisauli in Budaun district; additionally, Budaun is part of UP's mentha (peppermint) growing belt, with farmers growing mint in the Kharif season), and a city with a significant weaving and brassware artisan tradition (the Budaun area has Kashmiri Shawl and Pashmina traders who established weaving ateliers here) — is a city of Sufi heritage and river prosperity. From birthday parties in the Civil Lines area to corporate cakes at the sugar mills, from anniversary surprises near the Bareilly Road to student cakes at Budaun's colleges — RedHeart covers all Budaun zones: Civil Lines, Station Road, Bareilly Road, Bisauli, Bilsi, Gunnaur, Dataganj, Sahaswan.</p>
<p>Our Budaun cake range: Chocolate, Black Forest, Red Velvet, Mango (Rohilkhand Langra!), Butterscotch, Photo Cakes, Fondant Sufi Dargah / Ramganga River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Budaun, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Bareilly Road, Bisauli, Bilsi, Dataganj, Sahaswan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Budaun?", answer: "Yes, same-day cake delivery is available across all Budaun areas — Civil Lines, Station Road, Bareilly Road, Bisauli, and Dataganj — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Budaun?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Budaun delivery." },
      { question: "Do you deliver midnight cakes in Budaun?", answer: "Yes, midnight birthday cake delivery is available across Budaun's central and residential zones." }
    ]
  },

  "kekri": {
    cityName: "Kekri",
    metaTitle: "Cake Delivery in Kekri | Rajasthan New District | RedHeart",
    metaDescription: "Order cakes online in Kekri. Same-day delivery across Kekri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kekri",
    metaKeyword: "cake delivery kekri, order cake online kekri, birthday cake kekri, custom cake kekri, same day cake delivery kekri Ajmer Bhilwara Rajasthan Banas river new district 2023 National Highway Nasirabad",
    footerContent: `
<h2>Cake Delivery in Kekri — Rajasthan's Newest District, Banas River's Agricultural Belt, and Ajmer-Bhilwara Highway Node</h2>
<p>Kekri — the headquarters of Kekri district in Rajasthan, one of India's newest districts (Kekri district was created in 2023 as part of Rajasthan's major district reorganisation under the Gehlot government that created 19 new districts — taking the total from 33 to 52; Kekri was carved out of Ajmer district; the Kekri town is on the National Highway connecting Ajmer to Bhilwara and is an important commercial town in central Rajasthan; the Banas River — one of the longest rivers in Rajasthan, flowing 512 km from the Aravalli Range to the Chambal — flows through the Kekri area; the Banas river basin is one of the most fertile agricultural zones in central Rajasthan, producing wheat, bajra (pearl millet), jowar, and vegetables; the Dudu and Shrinagar areas nearby have significant industrial development; Kekri has historically been part of the Ajmer-Merwara region — the special administrative zone around Ajmer that was directly under British administration; the Kekri Naka (gate/toll point) was historically an important commercial checkpoint on the Ajmer-Bhilwara trade route; Nasirabad — a cantonment town between Ajmer and Kekri — is a significant army base in central Rajasthan), and a district being developed with new administrative infrastructure — is Rajasthan's freshest district capital and a commercial highway node. From birthday parties in the Kekri market area to corporate cakes at the district offices, from anniversary surprises near the Ajmer Road to student cakes at Kekri's schools — RedHeart covers all Kekri zones: Kekri town, Ajmer Road, Bhilwara Road, Srinagar, Banasvara, Kishangarh area, Rupangarh, Masuda.</p>
<p>Our Kekri cake range: Chocolate, Black Forest, Red Velvet, Mango (Rajasthan!), Butterscotch, Photo Cakes, Fondant Banas River / Aravalli landscape-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kekri, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kekri town, Ajmer Road, Bhilwara Road, Srinagar, Rupangarh, Masuda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kekri?", answer: "Yes, same-day cake delivery is available across all Kekri areas — Kekri town, Ajmer Road, Bhilwara Road, Srinagar, and Rupangarh — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kekri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kekri delivery." },
      { question: "Do you deliver midnight cakes in Kekri?", answer: "Yes, midnight birthday cake delivery is available across Kekri's central and residential zones." }
    ]
  },

  "bharuch": {
    cityName: "Bharuch",
    metaTitle: "Cake Delivery in Bharuch | Ankleshwar Chemical Gujarat | RedHeart",
    metaDescription: "Order cakes online in Bharuch. 100% eggless pure veg cakes. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bharuch",
    metaKeyword: "cake delivery bharuch ankleshwar, order cake online bharuch, birthday cake bharuch, custom cake bharuch, same day cake delivery bharuch ankleshwar Narmada river GIDC chemical pharma Vadodara road Surat road Broach ancient port Gujarat eggless",
    footerContent: `
<h2>Cake Delivery in Bharuch — Ancient Broach Port, Narmada River's Sacred Last Miles, and India's Chemical Industrial Giant — 100% Eggless, Pure Veg</h2>
<p>Bharuch — also known as Broach and Ankleshwar (the industrial twin city), the headquarters of Bharuch district in Gujarat, a city of ancient trade port fame and modern industrial might (Bharuch — the ancient "Barygaza" of Greek maritime trade records — was one of the most important ports of the ancient world; the Greek merchant's guide Periplus of the Erythraean Sea (1st century CE) describes Barygaza as the premier trade port on India's western coast, exporting cotton, muslins, silk, and precious stones to Rome, Arabia, and East Africa; the Bharuch (Broach) cotton — particularly the long-staple Broach cotton — was prized in Egyptian, Roman, and Arabian markets; today the city's riverside fort and the Narmada River crossing (the Bharuch Bridge, a historic cable-stayed bridge) are landmark attractions; the Narmada River — one of India's holiest rivers — enters its final stretch before reaching the Gulf of Khambhat (Cambay) at Bharuch; the Narmada's estuary near Bharuch is ecologically important; the Ankleshwar GIDC — just 16 km from Bharuch town — is one of Asia's largest chemical and pharmaceutical industrial estates; Ankleshwar has hundreds of chemical manufacturing units (API, bulk drugs, dyes, pigments, pesticides, and industrial chemicals); the GIDC Ankleshwar is one of Gujarat's most significant industrial zones and has been the subject of environmental regulation for chemical effluent management; major multinational pharma companies have facilities here; Bharuch-Ankleshwar is one of India's most important industrial corridors), and a city with the Kavi-Kamboi hot spring near Bharuch. All cakes in Bharuch are 100% eggless and pure vegetarian. From birthday parties in Bharuch Civil Lines to corporate cakes at Ankleshwar's industrial estates, from anniversary surprises near the Narmada Road to celebration cakes at GIDC offices — RedHeart covers all Bharuch zones: Bharuch town (Civil Lines, Narmada Road, Station Road), Ankleshwar, Jambusar, Amod, Vagra, Jhagadia, Hansot, Valiya.</p>
<p>Our Bharuch cake range: Pure Veg Chocolate, Black Forest, Red Velvet, Mango (Kesar!), Chikoo, Butterscotch, Photo Cakes, Fondant Narmada Estuary / Ancient Broach Port-theme cakes. 100% Eggless. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharuch (Ankleshwar), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharuch Civil Lines, Narmada Road, Ankleshwar GIDC, Jambusar, Amod, Jhagadia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cake type</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% Eggless, Pure Veg (all cakes)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar Mango, Chocolate, Chikoo, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Bharuch / Ankleshwar 100% eggless?", answer: "Yes! All cakes delivered in Bharuch and Ankleshwar are 100% eggless and pure vegetarian, respecting Gujarat's deeply vegetarian food culture. Every flavour available eggless." },
      { question: "Can I get same-day cake delivery in Bharuch and Ankleshwar?", answer: "Yes, same-day cake delivery is available across all Bharuch and Ankleshwar areas — Bharuch Civil Lines, Ankleshwar GIDC, Jambusar, Amod, and Jhagadia — for orders placed before 3 PM." },
      { question: "Do you deliver midnight cakes in Bharuch?", answer: "Yes, midnight birthday cake delivery is available across Bharuch's residential and township zones." }
    ]
  },

  "gangtok": {
    cityName: "Gangtok",
    metaTitle: "Cake Delivery in Gangtok | Sikkim Capital Kanchenjunga | RedHeart",
    metaDescription: "Order cakes online in Gangtok. Same-day delivery across Gangtok. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gangtok",
    metaKeyword: "cake delivery gangtok, order cake online gangtok, birthday cake gangtok, custom cake gangtok, same day cake delivery gangtok Kanchenjunga Sikkim capital Rumtek monastery MG Marg Nathu La China border Teesta cardamom",
    footerContent: `
<h2>Cake Delivery in Gangtok — Kanchenjunga's Snow Cathedral, Rumtek Monastery, and Sikkim's Cardamom Cloud-City Capital</h2>
<p>Gangtok — the capital of Sikkim, India's cleanest and most scenic small state capital, a city perched at 1,650 metres between the Himalayas and the Teesta River gorge (Kanchenjunga — the world's third highest mountain (8,586 metres) and India's highest peak — dominates Gangtok's northwestern horizon on clear days; the mountain is sacred to the Sikkimese Lepcha and Limboo people as the abode of the guardian deity Kanchenjunga; the Rumtek Monastery — 24 km from Gangtok — is the largest monastery in Sikkim and the seat of the Karmapa (the head of the Karma Kagyu school of Tibetan Buddhism); Rumtek is one of the most important Tibetan Buddhist institutions outside Tibet; the Enchey Monastery in Gangtok, the Tsuklakhang Royal Chapel (built for the Chogyal — Sikkim's former king), and the Namgyal Institute of Tibetology are significant cultural institutions; Gangtok's MG Marg (Mahatma Gandhi Road) — a pedestrian promenade — is one of the cleanest and most vibrant commercial streets in northeast India; the Sikkim Himalayan Zoological Park has the rare Red Panda (the state animal of Sikkim); Sikkim produces 90% of India's large cardamom (Elaichi) — the Sikkim large cardamom (Elam cardamom) is a GI-tagged product with distinctive smoky-sweet flavour prized in Middle Eastern and Indian cooking; the Teesta River valley (connecting Gangtok to the Darjeeling-Bengal plains) is one of India's most scenic river gorges; the Nathu La Pass (4,310 metres) — the high-altitude Sino-Indian border pass between Gangtok and Tibet — is open to Indian tourists on select days), and a city that has become India's most sustainable and organic state capital — is a cloud city of extraordinary Himalayan beauty. From birthday parties on MG Marg to celebration cakes at the hotels and monasteries, from anniversary surprises with Kanchenjunga views to student cakes at Sikkim University — RedHeart covers all Gangtok zones: MG Marg, Lal Market, Tadong, Deorali, Ranipool, Singtam, Pakyong, Rumtek Road.</p>
<p>Our Gangtok cake range: Chocolate, Black Forest, Red Velvet, Large Cardamom (Sikkim Elaichi!), Orange (Darjeeling Mandarin!), Butterscotch, Photo Cakes, Fondant Kanchenjunga / Rumtek Monastery-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gangtok, Sikkim</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">1,650 metres</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">MG Marg, Lal Market, Tadong, Deorali, Ranipool, Singtam, Pakyong, Rumtek Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Large Cardamom Cake, Chocolate, Kanchenjunga Fondant, Rumtek Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gangtok?", answer: "Yes, same-day cake delivery is available across all Gangtok areas — MG Marg, Lal Market, Tadong, Deorali, Ranipool, and Rumtek Road — for orders placed before 3 PM." },
      { question: "Do you have Sikkim Cardamom cake and Kanchenjunga-themed cakes in Gangtok?", answer: "Yes! Sikkim's GI-tagged large cardamom (Elaichi) — which gives Gangtok's cuisine its smoky-sweet aroma — flavours our signature Cardamom cake. The Kanchenjunga (world's 3rd highest mountain) and the Rumtek Monastery (seat of the Karmapa Lama) inspire our most spectacular fondant designs." },
      { question: "Are eggless cakes available in Gangtok?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Large Cardamom — are available in eggless variants for Gangtok delivery." }
    ]
  },

  "leh": {
    cityName: "Leh",
    metaTitle: "Cake Delivery in Leh | Ladakh Capital Pangong Monasteries | RedHeart",
    metaDescription: "Order cakes online in Leh. Same-day delivery across Leh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Leh",
    metaKeyword: "cake delivery leh, order cake online leh, birthday cake leh, custom cake leh, same day cake delivery leh ladakh pangong lake Hemis monastery Nubra valley Indus river apricot military high altitude",
    footerContent: `
<h2>Cake Delivery in Leh — Hemis Monastery's Mask Dances, Pangong Lake's Himalayan Blue, and Ladakh's High-Altitude Capital at 3,500 Metres</h2>
<p>Leh — the capital of Ladakh Union Territory, a city at 3,524 metres that is India's highest altitude capital and one of the world's most extraordinary places (the Leh Palace — a 17th-century royal palace modelled on the Potala Palace of Lhasa — overlooks the Leh valley; the Hemis Monastery — 45 km from Leh — is Ladakh's largest and wealthiest monastery; the annual Hemis Festival (June-July) is one of India's most spectacular religious festivals, with masked Cham dances by the Drukpa Kagyu monks; the Ladakh Festival (September) showcases archery, polo, Ladakhi music, and traditional costumes; the Pangong Tso Lake — the world's highest brackish lake at 4,350 metres, stretching 134 km from Ladakh into Tibet — is one of the world's most photographed natural landscapes (made globally famous by the Bollywood film 3 Idiots); Nubra Valley, the Diskit Monastery with its 32-metre Buddha statue, and the Bactrian camel rides on Hunder Sand Dunes are unique experiences; the Indus River — which gives India its name — flows through the Leh valley; the ancient Silk Road passed through Leh, making it a significant trading and Buddhist learning centre; Ladakh apricots (Ladakhi chang variety — tiny, intensely flavoured) are one of Leh's signature agricultural products; the Ladakhi people are predominantly Tibetan Buddhist (Western Ladakh) and Shia Muslim (Kargil area); Leh has one of India's highest concentrations of military and paramilitary personnel due to its China and Pakistan border proximity), and a city that has become India's most aspirational adventure travel destination — is a city of unrivalled Himalayan grandeur. From birthday parties in Leh market to military officers' celebration cakes, from Hemis Festival cakes to anniversary surprises with Pangong Lake views — RedHeart covers all Leh zones: Leh Market, Upper Leh, Changspa, Choglamsar, Stok, Spituk, Nimmu, Khardung La Road.</p>
<p>Our Leh cake range: Chocolate, Black Forest, Red Velvet, Apricot (Ladakhi chang apricot!), Butterscotch, Photo Cakes, Fondant Pangong Lake / Hemis Monastery / Leh Palace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Leh, Ladakh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">3,524 metres (11,562 ft)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Leh Market, Upper Leh, Changspa, Choglamsar, Stok, Spituk, Nimmu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apricot Cake, Chocolate, Pangong Lake Fondant, Hemis Monastery Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Leh, Ladakh?", answer: "Yes, same-day cake delivery is available across all Leh areas — Leh Market, Upper Leh, Changspa, Choglamsar, and Stok — for orders placed before 3 PM." },
      { question: "Do you have Ladakhi Apricot cake and Pangong Lake-themed cakes in Leh?", answer: "Yes! The Ladakhi chang apricot — intensely sweet and sun-dried, one of the world's finest apricots — flavours our Leh Apricot cake. The Pangong Tso Lake's otherworldly blue expanse and the Hemis Monastery's masked dances inspire our fondant masterpieces for Leh celebrations." },
      { question: "Are eggless cakes available in Leh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apricot — are available in eggless variants for Leh delivery." }
    ]
  },

  "kargil": {
    cityName: "Kargil",
    metaTitle: "Cake Delivery in Kargil | 1999 War Memorial Ladakh | RedHeart",
    metaDescription: "Order cakes online in Kargil. Same-day delivery across Kargil. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kargil",
    metaKeyword: "cake delivery kargil, order cake online kargil, birthday cake kargil, custom cake kargil, same day cake delivery kargil 1999 war Vijay Diwas Suru valley Zanskar Shia Muslim Ladakhi apricot Drass Mushkoh",
    footerContent: `
<h2>Cake Delivery in Kargil — Vijay Diwas and 1999 Kargil War Memorial, Suru Valley's Glacier Landscape, and Ladakh's Shia Muslim Heartland</h2>
<p>Kargil — the headquarters of Kargil district in Ladakh Union Territory, a city whose name is forever linked to one of India's most significant military victories (the Kargil War (Operation Vijay) of May-July 1999 — when the Indian Army recaptured the strategic Himalayan peaks and ridges in the Kargil-Drass sector that had been occupied by Pakistani forces and militants during the winter — is one of independent India's most intense and emotionally charged military campaigns; the Kargil War Memorial at Drass (55 km from Kargil) on NH-1 (the Srinagar-Leh highway) honours the soldiers who gave their lives; Vijay Diwas (26 July) is observed nationally as a day of salute to the Kargil war heroes; the Tololing Hill, Tiger Hill, and Point 5140 are names permanently etched in India's military memory; Kargil town is a predominantly Shia Muslim city — uniquely so in Ladakh; the Kargil district has significant Balti and Purig (Ladakhi Shia Muslim) communities; the Mulbekh Maitreya Buddha (a 9-metre rock-carved Maitreya figure from the 8th century) is one of Kargil district's major Buddhist heritage sites; the Suru Valley south of Kargil has glaciers, high-altitude meadows, and the stunning Nun-Kun massif (7,135 metres); the Zanskar Valley is accessible from Kargil; Kargil's apricot orchards in the Suru Valley produce Ladakhi apricots prized across the region), a city on the ancient trade route from Kashmir to Leh — is a city of supreme military honour and high Himalayan beauty. From birthday parties in Kargil town to military celebration cakes, from anniversary surprises near the Suru Valley to Vijay Diwas cakes — RedHeart covers all Kargil zones: Kargil town, Drass sector, Sanku, Zanskar Road, Batalik, Hunderman, Suru Valley.</p>
<p>Our Kargil cake range: Chocolate, Black Forest, Red Velvet, Apricot (Kargil Suru Valley!), Butterscotch, Photo Cakes, Fondant Kargil War Memorial / Vijay Diwas / Suru Glacier-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kargil, Ladakh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kargil town, Drass sector, Sanku, Zanskar Road, Batalik, Suru Valley</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apricot Cake, Chocolate, Kargil War Memorial Fondant, Vijay Diwas Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kargil?", answer: "Yes, same-day cake delivery is available across all Kargil areas — Kargil town, Drass sector, Sanku, Zanskar Road, and Suru Valley — for orders placed before 3 PM." },
      { question: "Do you have Kargil War Memorial / Vijay Diwas-themed cakes?", answer: "Yes! The Kargil War Memorial at Drass — honouring the heroes of Operation Vijay (1999), India's most intense mountain warfare campaign — and Vijay Diwas (26 July) inspire our deeply patriotic Kargil War Memorial and Vijay Diwas fondant cakes." },
      { question: "Are eggless cakes available in Kargil?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apricot — are available in eggless variants for Kargil delivery." }
    ]
  },

  "pulwama": {
    cityName: "Pulwama",
    metaTitle: "Cake Delivery in Pulwama | Apple Capital Kashmir J&K | RedHeart",
    metaDescription: "Order cakes online in Pulwama. Same-day delivery across Pulwama. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pulwama",
    metaKeyword: "cake delivery pulwama, order cake online pulwama, birthday cake pulwama, custom cake pulwama, same day cake delivery pulwama Kashmir apple orchards Jhelum tributary Tral Shopian Awantipora Saffron Pampore",
    footerContent: `
<h2>Cake Delivery in Pulwama — Kashmir's Apple Capital, Pampore's Sacred Saffron Fields, and the Jhelum's Southern Valley</h2>
<p>Pulwama — the headquarters of Pulwama district in Jammu & Kashmir, the district that produces the largest share of Kashmir's legendary apple crop (Pulwama district — along with neighbouring Shopian — is the heart of the Kashmir apple belt; the Pulwama apple orchards produce Red Delicious, Golden Delicious, and American Spade apples that are traded at the Sopore and Shopian fruit mandis; the Kashmir apple industry (worth approximately ₹10,000 crore annually) is concentrated in Pulwama, Shopian, and Anantnag; the apple orchards of Pulwama give the district its "apple bowl of Asia" identity; the Pampore area (between Srinagar and Pulwama) is world-famous for saffron — the Pampore Saffron (Kashmiri Zaffran) has GI protection and is considered the world's finest variety; the Crocus sativus flowers bloom in October-November, turning the fields purple for a short 2-week season; the Awantipora archaeological site in Pulwama district has the ruins of two 9th-century Hindu temples built by the Utpala dynasty kings Avantivarman and Shankaravarman — the Awantiswami temple ruins are one of Kashmir's most significant archaeological sites; Pulwama has gained unfortunate international attention due to the 2019 Pulwama attack, where a CRPF convoy was targeted; the area has since seen significant security improvement and economic development focus), and a district where Kashmir's ancient temple legacy meets modern apple and saffron commerce — is a district of significant cultural, agricultural, and strategic importance. From birthday parties in Pulwama town to corporate cakes at the apple cold storage facilities, from Eid celebration cakes to anniversary surprises in the orchards — RedHeart covers all Pulwama zones: Pulwama town, Awantipora, Pampore, Tral, Shopian border, Kakapora, Rajpora, Pampore Saffron fields area.</p>
<p>Our Pulwama cake range: Chocolate, Black Forest, Red Velvet, Kashmiri Apple (Pulwama Red Delicious!), Saffron (Pampore Zaffran!), Walnut, Photo Cakes, Fondant Apple Orchard / Pampore Saffron-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pulwama, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pulwama town, Awantipora, Pampore, Tral, Kakapora, Rajpora, Shopian border</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kashmiri Apple, Saffron, Walnut, Chocolate, Apple Orchard Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pulwama?", answer: "Yes, same-day cake delivery is available across all Pulwama areas — Pulwama town, Awantipora, Pampore, Tral, and Kakapora — for orders placed before 3 PM." },
      { question: "Do you have Kashmiri Apple and Pampore Saffron cakes in Pulwama?", answer: "Yes! Pulwama district's orchards produce Kashmir's finest Red Delicious apples, and the Pampore saffron fields grow the world's most prized Zaffran — both inspire our Kashmiri Apple cake and Saffron cake, the most locally meaningful flavours for Pulwama." },
      { question: "Are eggless cakes available in Pulwama?", answer: "Yes, all flavours — Chocolate, Black Forest, Kashmiri Apple, Saffron, Walnut — are available in eggless variants for Pulwama delivery." }
    ]
  },

  "kupwara": {
    cityName: "Kupwara",
    metaTitle: "Cake Delivery in Kupwara | Lolab Valley Kashmir LoC | RedHeart",
    metaDescription: "Order cakes online in Kupwara. Same-day delivery across Kupwara. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kupwara",
    metaKeyword: "cake delivery kupwara, order cake online kupwara, birthday cake kupwara, custom cake kupwara, same day cake delivery kupwara Lolab Valley Kashmir LoC Line of Control Handwara Keran tribal Gujjar Bakarwal apple walnut",
    footerContent: `
<h2>Cake Delivery in Kupwara — Lolab Valley's Paradise, Keran's LoC River Valley, and Kashmir's Northernmost Apple & Walnut Frontier</h2>
<p>Kupwara — the headquarters of Kupwara district in Jammu & Kashmir, Kashmir's northernmost district bordering Pakistan at the Line of Control (the Kupwara district shares a long Line of Control (LoC) with Pakistan-administered Kashmir; the strategic Keran Valley — where the Kishanganga River forms the LoC — is one of the most beautiful and sensitive border valleys in India; the Lolab Valley in Kupwara district is one of Kashmir's most pristine and less-visited valleys — a broad, forested valley with apple orchards, walnut trees, and pine forests that has been called "Paradise on Earth" by those who visit; the Bangus Valley (accessible from Kupwara) is an extraordinarily scenic high-altitude meadow accessible only in summer; the Handwara town in Kupwara district is the second-largest commercial centre in North Kashmir and is known for apple trading; the Kupwara district has a significant Gujjar and Bakarwal tribal population — nomadic herders who migrate with their flocks between the summer alpine meadows (margs) and winter plains; the Gujjar and Bakarwal communities have GI-recognized traditional pastoral practices; Kupwara town has important military infrastructure given the LoC proximity; the Narang forest near Kupwara has some of Kashmir's finest standing timber) — is a district of extraordinary valley beauty and strategic importance. From birthday parties in Kupwara town to military officers' celebration cakes, from Eid cakes to anniversary surprises in the apple orchards — RedHeart covers all Kupwara zones: Kupwara town, Handwara, Lolab Valley, Keran sector, Karnah, Sogam, Langate.</p>
<p>Our Kupwara cake range: Chocolate, Black Forest, Red Velvet, Kashmiri Apple (Lolab Valley!), Walnut (Kupwara akhrot!), Butterscotch, Photo Cakes, Fondant Lolab Valley / Keran LoC River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kupwara, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kupwara town, Handwara, Lolab Valley, Keran sector, Karnah, Sogam, Langate</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kashmiri Apple, Walnut, Chocolate, Lolab Valley Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kupwara?", answer: "Yes, same-day cake delivery is available across all Kupwara areas — Kupwara town, Handwara, Lolab Valley, and Keran sector — for orders placed before 3 PM." },
      { question: "Do you have Lolab Valley Apple and Walnut cakes in Kupwara?", answer: "Yes! The Lolab Valley's pristine orchards produce Kupwara's finest apples, and the walnut groves of North Kashmir yield the richest akhrot. Both inspire our Apple and Walnut cakes for Kupwara — the most authentically local flavours." },
      { question: "Are eggless cakes available in Kupwara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Kashmiri Apple, Walnut — are available in eggless variants for Kupwara delivery." }
    ]
  },

  "tiruvarur": {
    cityName: "Tiruvarur",
    metaTitle: "Cake Delivery in Tiruvarur | Thyagaraja Temple Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Tiruvarur. Same-day delivery across Tiruvarur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tiruvarur",
    metaKeyword: "cake delivery tiruvarur, order cake online tiruvarur, birthday cake tiruvarur, custom cake tiruvarur, same day cake delivery tiruvarur Thyagaraja temple chariot festival Cauvery delta Carnatic music Nagapattinam road",
    footerContent: `
<h2>Cake Delivery in Tiruvarur — Thyagaraja Temple's Colossal Chariot, Carnatic Music's Sacred Birthplace, and Cauvery Delta's Temple Town</h2>
<p>Tiruvarur — the headquarters of Tiruvarur district in Tamil Nadu, one of South India's most sacred temple cities and the birthplace of Carnatic music's greatest saint-composer (the Thyagaraja Temple at Tiruvarur — dedicated to Lord Shiva as Thiyagaraja (Lord of Dance) with his consort Kamalambal — is one of the most ancient and architecturally magnificent temples in Tamil Nadu; the temple chariot (ther) festival at Tiruvarur is famed across Tamil Nadu — the Tiruvarur chariot is one of the largest wooden temple chariots (vahana) in India, reportedly 90 feet tall; the Thyagaraja temple tank, the magnificent gopurams, and the vast mandapas make this a premier temple complex; Tiruvarur is also revered as the birthplace of Muthuswami Dikshitar (1775-1835) — one of the three composers of the Carnatic music Trinity (along with Tyagaraja and Syama Sastri); Muthuswami Dikshitar's compositions (Kritis in multiple ragas, especially the Kamalamba Navavarana Kritis) are considered masterpieces of Carnatic classical music; additionally, Tiruvarur district is a significant Cauvery delta rice-growing region; the district was carved out of Thanjavur in 1997 and has the Kollidam River (Coleroon — a distributary of the Cauvery) and the Veeranam Lake; the Nagapattinam coastal area is accessible from Tiruvarur), and a city of deeply classical Tamil religious and musical heritage — is a temple town of extraordinary spiritual significance. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from Thyagaraja temple festival cakes to anniversary surprises near the Thanjavur Road — RedHeart covers all Tiruvarur zones: Tiruvarur town, Temple area, Thanjavur Road, Nagapattinam Road, Tiruthuraipoondi, Papanasam, Mannargudi.</p>
<p>Our Tiruvarur cake range: Chocolate, Black Forest, Red Velvet, Mango (Banganapalli!), Butterscotch, Photo Cakes, Fondant Thyagaraja Temple Chariot / Carnatic Music Trinity-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruvarur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruvarur town, Temple area, Thanjavur Road, Nagapattinam Road, Mannargudi, Papanasam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Thyagaraja Temple Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tiruvarur?", answer: "Yes, same-day cake delivery is available across all Tiruvarur areas — Tiruvarur town, Temple area, Nagapattinam Road, and Mannargudi — for orders placed before 3 PM." },
      { question: "Do you have Thyagaraja Temple Chariot-themed cakes in Tiruvarur?", answer: "Yes! The Thyagaraja temple's massive wooden chariot festival (one of India's largest) and the Carnatic Music Trinity's Muthuswami Dikshitar (born in Tiruvarur) inspire our distinctively Tiruvarur temple chariot and music-theme fondant cakes." },
      { question: "Are eggless cakes available in Tiruvarur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tiruvarur delivery." }
    ]
  },

  "nagapattinam": {
    cityName: "Nagapattinam",
    metaTitle: "Cake Delivery in Nagapattinam | Velankanni Tamil Nadu Coast | RedHeart",
    metaDescription: "Order cakes online in Nagapattinam. Same-day delivery across Nagapattinam. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nagapattinam",
    metaKeyword: "cake delivery nagapattinam, order cake online nagapattinam, birthday cake nagapattinam, custom cake nagapattinam, same day cake delivery nagapattinam Velankanni Basilica Kodiakarai Point Calimere Cauvery port sea fishing",
    footerContent: `
<h2>Cake Delivery in Nagapattinam — Velankanni Basilica's Miracle Shrine, Point Calimere's Flamingo Sanctuary, and Bay of Bengal's Ancient Port</h2>
<p>Nagapattinam — the headquarters of Nagapattinam district in Tamil Nadu, a coastal district of miraculous Marian devotion and biodiversity (the Basilica of Our Lady of Good Health at Velankanni — 12 km from Nagapattinam — is one of the most visited Catholic pilgrimage sites in Asia; the shrine is associated with three miracles of the Virgin Mary in the 16th-17th century and is called the "Lourdes of the East"; the annual Nagapattinam Feast of Our Lady (August-September) draws 2-4 million pilgrims from across India and the Tamil diaspora; Velankanni is a model of communal harmony — Hindu, Muslim, and Christian devotees all visit; the Point Calimere Wildlife and Bird Sanctuary at the southern tip of Nagapattinam district is one of India's best birdwatching destinations — it hosts thousands of flamingos, pelicans, herons, and shorebirds in winter; the sanctuary is at the junction of the Bay of Bengal and the Palk Strait; the 2004 Indian Ocean Tsunami caused devastating damage to Nagapattinam district — more people died here (over 6,000) than in any other Tamil Nadu district; the rebuilding of Nagapattinam post-tsunami is a story of community resilience; the ancient port of Nagapattinam (Nagapatam) was one of the most important medieval ports on the Coromandel Coast — used by the Chola kingdom for overseas trade with Southeast Asia, Sri Lanka, and China; the Chola-period Kadambar Koil (Buddhist temple, now converted) is an archaeological site), and a district of fishing communities, Cauvery delta rice cultivation, and coastal culture — is a city of Marian miracle and coast resilience. From birthday parties near the Basilica to corporate cakes at the fishing industry offices, from Christmas cakes to anniversary surprises near Velankanni — RedHeart covers all Nagapattinam zones: Nagapattinam town, Velankanni, Sirkazhi, Mayiladuthurai Road, Vedaranyam, Point Calimere, Kollidam, Kilvelur.</p>
<p>Our Nagapattinam cake range: Chocolate, Black Forest, Red Velvet, Mango (Tamil Alphonso!), Coconut (coastal Tamil!), Butterscotch, Photo Cakes, Fondant Velankanni Basilica / Point Calimere Flamingo-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagapattinam, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagapattinam town, Velankanni, Sirkazhi, Vedaranyam, Point Calimere, Kilvelur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Velankanni Basilica Fondant, Coconut, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nagapattinam?", answer: "Yes, same-day cake delivery is available across all Nagapattinam areas — Nagapattinam town, Velankanni, Sirkazhi, Vedaranyam, and Kilvelur — for orders placed before 3 PM." },
      { question: "Do you have Velankanni Basilica-themed cakes in Nagapattinam?", answer: "Yes! The Basilica of Our Lady of Good Health at Velankanni — one of Asia's most visited Marian pilgrimage shrines, the 'Lourdes of the East' — inspires our Velankanni Basilica fondant cakes for this deeply spiritual coastal city." },
      { question: "Are eggless cakes available in Nagapattinam?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango, Coconut — are available in eggless variants for Nagapattinam delivery." }
    ]
  },

  "bilaspur-hp": {
    cityName: "Bilaspur",
    metaTitle: "Cake Delivery in Bilaspur HP | Gobind Sagar Lake Himachal | RedHeart",
    metaDescription: "Order cakes online in Bilaspur HP. Same-day delivery across Bilaspur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bilaspur HP",
    metaKeyword: "cake delivery bilaspur himachal, order cake online bilaspur HP, birthday cake bilaspur, custom cake bilaspur HP, same day cake delivery bilaspur himachal Gobind Sagar lake Bhakra Dam submerged city Naina Devi Sutlej hills",
    footerContent: `
<h2>Cake Delivery in Bilaspur HP — Gobind Sagar Lake's Submerged City, Bhakra Dam's Green Revolution Legacy, and Naina Devi's Shakti Pilgrimage</h2>
<p>Bilaspur — the headquarters of Bilaspur district in Himachal Pradesh, a city with one of India's most poignant modern histories (the original Bilaspur town — the capital of the Bilaspur princely state (Kahlur kingdom), ruled by the Chandel Rajput dynasty for nearly 900 years — was submerged under the Gobind Sagar Reservoir when the Bhakra Dam on the Sutlej River was commissioned in 1963; the Bhakra Dam was one of India's first and biggest multi-purpose river valley projects — Prime Minister Nehru called it a "temple of resurgent India"; the dam created a 90-km long reservoir (Gobind Sagar, named after Guru Gobind Singh who blessed the area) that flooded the ancient Bilaspur town, hundreds of villages, and significant temple complexes including the ancient Shahi Lakshminarayan temple and multiple Bilaspur Raj temples; a new Bilaspur town was built on the hills above the reservoir; the submerged ruins of the old town occasionally become visible during severe drought years, drawing archaeologists and heritage enthusiasts; the Gobind Sagar Lake (Bhakra Reservoir) itself is a major water sports and boating destination; the Naina Devi Temple — on a hill 65 km from Bilaspur — is one of the 51 Shakti Peethas (where Sati's eyes fell) and one of Himachal's most visited pilgrimage sites; the Markanda temple complex near Bilaspur is a riverside set of ancient Shiva temples; the Bilaspur ber (Indian jujube) and amla (gooseberry) are agriculturally known from the Bilaspur hills), and a district on the Sutlej River-Gobind Sagar corridor — is a city of submerged history and Shakti pilgrimage. From birthday parties in Bilaspur town to corporate cakes at the BBMB (Bhakra Beas Management Board) offices, from anniversary surprises near the Gobind Sagar shores to Naina Devi pilgrimage celebration cakes — RedHeart covers all Bilaspur HP zones: Bilaspur town, Gobind Sagar lakeshore, Ghumarwin, Swarghat, Naina Devi Road, Bhakra, Talai, Jhanduta.</p>
<p>Our Bilaspur HP cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Ber (Indian jujube!), Photo Cakes, Fondant Gobind Sagar Lake / Naina Devi / Submerged City-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilaspur, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilaspur town, Gobind Sagar lakeshore, Ghumarwin, Swarghat, Naina Devi Road, Bhakra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gobind Sagar Fondant, Naina Devi Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bilaspur HP?", answer: "Yes, same-day cake delivery is available across all Bilaspur areas — Bilaspur town, Gobind Sagar lakeshore, Ghumarwin, Swarghat, and Naina Devi Road — for orders placed before 3 PM." },
      { question: "Do you have Gobind Sagar Lake / Submerged City-themed cakes in Bilaspur HP?", answer: "Yes! The Gobind Sagar Reservoir's poignant story — where the original Bilaspur royal capital was submerged under Bhakra Dam's waters in 1963 (Nehru's 'temple of resurgent India') — and the Naina Devi Shakti Peetha inspire our Gobind Sagar fondant cakes." },
      { question: "Are eggless cakes available in Bilaspur HP?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Bilaspur HP delivery." }
    ]
  },

  "wokha": {
    cityName: "Wokha",
    metaTitle: "Cake Delivery in Wokha | Lotha Naga Nagaland | RedHeart",
    metaDescription: "Order cakes online in Wokha. Same-day delivery across Wokha. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Wokha",
    metaKeyword: "cake delivery wokha, order cake online wokha, birthday cake wokha, custom cake wokha, same day cake delivery wokha Lotha Naga tribe Doyang river Tokhu Emong festival Nagaland hill Kohima road",
    footerContent: `
<h2>Cake Delivery in Wokha — Lotha Naga Heartland, Doyang Hydropower Valley, and Nagaland's Richest Timber and Orange District</h2>
<p>Wokha — the headquarters of Wokha district in Nagaland, the cultural and administrative centre of the Lotha Naga tribe (the Lotha (or Lyotha) Naga people are one of Nagaland's major tribes; Wokha is the Lotha's tribal homeland; the Lotha people are known for their distinctive oral literature (long narrative poems called "Nung-khum"), their traditional institution of the Imrao (community council), and their festivals particularly the Tokhu Emong festival (November) — the post-harvest festival of the Lotha Naga, celebrated with songs, dances, feasting, and the ritual blessing of the year's harvest; the Mopungo tribe (a sub-tribe of the Lotha) also lives in Wokha district; the Wokha district contains the Doyang Hydropower Project — a significant dam on the Doyang River that provides electricity to Nagaland; the Doyang reservoir created by the dam is a hauntingly beautiful water body in the Nagaland hills and is a birding destination during the Amur Falcon migration season (October-November; the Amur Falcon, one of the world's longest-distance migratory birds travelling from Siberia to South Africa, rests in enormous numbers around the Doyang Lake during October — this unique natural phenomenon has attracted international ornithological attention; after mass killing in earlier years, the Lotha Naga community now protects the falcons); the district is also known for Nagaland's largest orange orchards — Wokha district orange (locally called Kholar or Malta orange) is one of Nagaland's major cash crops), and a district with significant bamboo forests and timber production — is a city of falcon conservation and Lotha pride. From birthday parties in Wokha town to corporate cakes at the NHPC offices, from Tokhu Emong festival cakes to anniversary surprises — RedHeart covers all Wokha zones: Wokha town, Wozhuro, Baghty, Englan, Tizit, Merapani border, Doyang reservoir area.</p>
<p>Our Wokha cake range: Chocolate, Black Forest, Red Velvet, Orange (Wokha Kholar orange!), Butterscotch, Photo Cakes, Fondant Amur Falcon / Doyang Lake / Tokhu Emong-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wokha, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wokha town, Wozhuro, Baghty, Englan, Doyang reservoir area, Tizit</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orange (Kholar), Chocolate, Amur Falcon Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Wokha?", answer: "Yes, same-day cake delivery is available across all Wokha areas — Wokha town, Wozhuro, Baghty, and Doyang reservoir area — for orders placed before 3 PM." },
      { question: "Do you have Wokha Orange cake and Amur Falcon-themed cakes?", answer: "Yes! Wokha's Kholar (Malta) orange orchards produce Nagaland's finest oranges — our Orange cake celebrates this local fruit. The Amur Falcon migration (millions of falcons roosting on the Doyang Lake each October — one of nature's greatest spectacles) inspires our Amur Falcon fondant cake." },
      { question: "Are eggless cakes available in Wokha?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Orange — are available in eggless variants for Wokha delivery." }
    ]
  },

  "zunheboto": {
    cityName: "Zunheboto",
    metaTitle: "Cake Delivery in Zunheboto | Sumi Naga Nagaland | RedHeart",
    metaDescription: "Order cakes online in Zunheboto. Same-day delivery across Zunheboto. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Zunheboto",
    metaKeyword: "cake delivery zunheboto, order cake online zunheboto, birthday cake zunheboto, custom cake zunheboto, same day cake delivery zunheboto Sumi Naga Aghunato festival Nagaland hill Kohima Dimapur road Naga chilli",
    footerContent: `
<h2>Cake Delivery in Zunheboto — Sumi Naga Heartland, Aghunato Festival's Warrior Heritage, and Nagaland's Hill Pepper Country</h2>
<p>Zunheboto — the headquarters of Zunheboto district in Nagaland, the cultural homeland of the Sumi (or Sema) Naga tribe (the Sumi Naga people are one of Nagaland's largest and most agriculturally settled tribes; the Sumis are primarily agriculturalists practising terrace cultivation on the steep Zunheboto hills; the Sumi people are known for their distinctive brass jewellery, warrior traditions, and particularly their Aghunato festival — a post-harvest celebration (July) that marks the end of the agricultural cycle with traditional dances, communal feasting, and folk performances unique to the Sumi tribe; the Sumi people have a strong church community (primarily Baptist, as Christianity was introduced to Nagaland through American Baptist missionaries); the Ghukiye (traditional music) of the Sumi community is distinctive; Zunheboto district produces significant quantities of Naga King Chilli (Bhut Jolokia / Nagahari — once the world's hottest chilli, still one of the hottest); the king chilli cultivation is a significant cash crop in Zunheboto; the district also produces ginger, turmeric, black pepper (Naga pepper), and various forest products; the Zunheboto district hills have significant bamboo and cane resources; the Bhandari Lake near Zunheboto is a scenic freshwater lake on a hilltop; the Sumi areas border the Ao Naga districts (Mokokchung) and the Chakhesang Naga areas (Phek district)), and a district of hill agriculture and Sumi community pride — is a city of warrior festivals and king chilli cultivation. From birthday parties in Zunheboto town to celebration cakes for Aghunato, from anniversary surprises to student cakes at Zunheboto's churches and schools — RedHeart covers all Zunheboto zones: Zunheboto town, Aghunato, Akuluto, Suruhoto, Satakha, Pughoboto.</p>
<p>Our Zunheboto cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Sumi Aghunato Festival / Naga King Chilli-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Zunheboto, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Zunheboto town, Aghunato, Akuluto, Suruhoto, Satakha, Pughoboto</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Aghunato Festival Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Zunheboto?", answer: "Yes, same-day cake delivery is available across all Zunheboto areas — Zunheboto town, Aghunato, Akuluto, and Satakha — for orders placed before 3 PM." },
      { question: "Do you have Sumi Aghunato Festival-themed cakes in Zunheboto?", answer: "Yes! The Aghunato festival — the Sumi Naga post-harvest celebration with warrior dances, traditional folk performances, and community feasting — and the Naga King Chilli (Bhut Jolokia) cultivation that Zunheboto is famous for inspire our distinctively local fondant cakes." },
      { question: "Are eggless cakes available in Zunheboto?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Zunheboto delivery." }
    ]
  },

  "senapati": {
    cityName: "Senapati",
    metaTitle: "Cake Delivery in Senapati | Mao Naga Manipur | RedHeart",
    metaDescription: "Order cakes online in Senapati. Same-day delivery across Senapati. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Senapati",
    metaKeyword: "cake delivery senapati, order cake online senapati, birthday cake senapati, custom cake senapati, same day cake delivery senapati Mao Naga Manipur Nagaland border Senapati town Kuki Paomata Maram hill tribe",
    footerContent: `
<h2>Cake Delivery in Senapati — Mao Naga Heartland, Manipur-Nagaland Border Hills, and India's Most Multi-Tribal Hill District</h2>
<p>Senapati — the headquarters of Senapati district in Manipur, one of Manipur's most diverse and strategically significant hill districts (Senapati district is home to one of India's highest concentrations of tribal sub-groups in a single district; the major tribes include the Mao Naga (one of the largest Naga groups who straddle the Manipur-Nagaland border), the Maram Naga, the Tangkul Naga (from adjacent Ukhrul), the Kuki sub-groups, and the Zeme Naga (also known as Zeliangrong); the Mao Nagas' homeland is centred on the Mao area north of Senapati town; the Mao town is on the NH-2 (old Imphal-Kohima road), the primary overland connection between Manipur and Nagaland; the boundary between Manipur and Nagaland runs through Senapati district and has been a source of long-standing boundary disputes (the Nagaland-Manipur boundary dispute, especially around the Mao Gate area, has led to periodic bandhs and conflicts); the Senapati district has significant seasonal migration — the Kuki communities in the south of the district and the Naga communities in the north follow traditional farming and festival cycles; traditional festivals include the Luira Phanit (Mao Naga spring festival) and Nungon (Maram Naga rice festival); the district also has notable wildlife diversity in its forests, bordering the Fakim Wildlife Sanctuary of Nagaland), and a city in the high hills at approximately 1,300 metres with pleasant climate — is a city of tribal diversity and Manipur-Nagaland highland unity. From birthday parties in Senapati town to celebration cakes at government offices, from tribal festival cakes to anniversary surprises near the Kohima Road — RedHeart covers all Senapati zones: Senapati town, Mao, Maram, Paomata, Purul, Tadubi, Saikul.</p>
<p>Our Senapati cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Mao Naga / Luira Phanit Festival-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Senapati, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Senapati town, Mao, Maram, Paomata, Purul, Tadubi, Saikul</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mao Naga Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Senapati?", answer: "Yes, same-day cake delivery is available across all Senapati areas — Senapati town, Mao, Maram, Paomata, and Tadubi — for orders placed before 3 PM." },
      { question: "Do you have Mao Naga / Luira Phanit Festival-themed cakes in Senapati?", answer: "Yes! The Mao Naga community's Luira Phanit spring festival — celebrating the onset of planting season with traditional songs, dances, and community rituals in the high Mao hills — inspires our Mao Naga fondant cakes for Senapati." },
      { question: "Are eggless cakes available in Senapati?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Senapati delivery." }
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
