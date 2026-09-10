// Cakes Batch 16 — 15 cities:
// Rajasthan: Hanumangarh, Jhunjhunu, Dholpur
// UP: Ballia, Azamgarh
// Bihar: Motihari, Sitamarhi
// Gujarat: Amreli, Valsad
// Punjab: Kapurthala, Moga
// Haryana: Rewari, Kaithal
// Odisha: Angul
// Himachal Pradesh: Kullu

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "hanumangarh": {
    cityName: "Hanumangarh",
    metaTitle: "Cake Delivery in Hanumangarh | Kalibangan Heritage Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Hanumangarh. Same-day delivery across Hanumangarh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hanumangarh",
    metaKeyword: "cake delivery hanumangarh, order cake online hanumangarh, birthday cake hanumangarh, custom cake hanumangarh, same day cake delivery hanumangarh town junction sangaria pilibanga kalibangan haryana border",
    footerContent: `
<h2>Cake Delivery in Hanumangarh — Kalibangan's Ancient Indus Valley Heritage City and Ghaggar River's Desert Gateway</h2>
<p>Hanumangarh — the headquarters of Hanumangarh district in northern Rajasthan, a city of remarkable archaeological significance (Kalibangan — 30 km from Hanumangarh — is one of the most important Indus Valley Civilisation archaeological sites in India; Kalibangan's excavations revealed the earliest ploughed field in the world — a 4,500-year-old agricultural field; pre-Harappan and Harappan layers show continuous occupation; the Kalibangan museum houses thousands of artefacts; the ancient Ghaggar River — believed by some scholars to be the Vedic Saraswati River — flows through Hanumangarh district, connecting this region to ancient Indian civilisation), a major wheat and cotton market for the Ghaggar belt (Hanumangarh's grain mandis handle large volumes of Rajasthan's wheat and cotton), and a city at the Rajasthan-Punjab-Haryana tri-junction — is a city of deep historical antiquity and agricultural commerce. From birthday parties in the Hanumangarh Town area to corporate cakes at the large grain trading firms, from anniversary surprises near the Junction area to student cakes at the colleges — RedHeart covers all Hanumangarh zones: Central (Hanumangarh Town, Junction, Station Road), North (Sri Ganganagar Road, Punjab border, Sangaria), South (Suratgarh Road, Bikaner Road, Rajasthan plains), East (Sirsa Road, Haryana border, Fatehabad), West (Anupgarh Road, Pakistan border zone, Pilibanga).</p>
<p>Our Hanumangarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kalibangan / Indus Valley-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanumangarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanumangarh Town, Junction, Station Road, Sri Ganganagar Road, Pilibanga, Sangaria</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kalibangan Indus Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hanumangarh?", answer: "Yes, same-day cake delivery is available across all Hanumangarh areas — Hanumangarh Town, Junction, Station Road, and Pilibanga — for orders placed before 3 PM." },
      { question: "Do you have Kalibangan / Indus Valley-themed cakes in Hanumangarh?", answer: "Yes! Kalibangan — the 4,500-year-old Indus Valley Civilisation site 30 km from Hanumangarh, which revealed the world's oldest ploughed field — inspires our Kalibangan fondant cakes with Indus seal and civilisation motifs." },
      { question: "Are eggless cakes available in Hanumangarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hanumangarh delivery." }
    ]
  },

  "jhunjhunu": {
    cityName: "Jhunjhunu",
    metaTitle: "Cake Delivery in Jhunjhunu | Shekhawati Havelis Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Jhunjhunu. Same-day delivery across Jhunjhunu. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jhunjhunu",
    metaKeyword: "cake delivery jhunjhunu, order cake online jhunjhunu, birthday cake jhunjhunu, custom cake jhunjhunu, same day cake delivery jhunjhunu shekhawati mandawa nawalgarh bisau khetri copper mines",
    footerContent: `
<h2>Cake Delivery in Jhunjhunu — Shekhawati's Open-Air Fresco Museum, Khetri Copper's District, and Rajasthan's Marwari Merchant Heritage</h2>
<p>Jhunjhunu — the headquarters of Jhunjhunu district in the Shekhawati region of northeastern Rajasthan, the heartland of the "Open-Air Museum of Rajasthan" (the Shekhawati region — covering Jhunjhunu, Sikar, and Churu districts — has the world's densest concentration of painted havelis; centuries-old merchant mansions with stunning fresco paintings depicting mythological scenes, Rajput battle scenes, British-era railways, and Marwari merchant life; Mandawa, Nawalgarh, Dundlod, Bissau, and Jhunjhunu town itself all have extraordinary havelis; the region is a UNESCO tentative World Heritage candidate), home to Khetri (the "Copper City" — the Khetri Copper Complex, 50 km from Jhunjhunu, is one of India's largest copper mines and smelters), a district that produced many of India's most successful Marwari merchant families (the Birlas, Bangurs, Poddars, Dalmias, and others trace roots to Shekhawati), and the birthplace of Swami Vivekananda's major connection with Khetri Raja (Ajit Singh of Khetri gave Narendranath Datta the name Vivekananda) — is a city of merchant grandeur and metallic wealth. From birthday parties in the Mandawa Road residential area to corporate cakes at the Khetri copper offices, from anniversary surprises near the famous painted havelis to student cakes at Jhunjhunu's colleges — RedHeart covers all Jhunjhunu zones: Central (Station Road, Subhash Nagar, Khetri Road), North (Pilani Road, Surajgarh, Chirawa), South (Sikar Road, Nawalgarh, Fatehpur), East (Rajgarh Road, Alwar Road, Malsisar), West (Mandawa Road, Dundlod, Mukandgarh).</p>
<p>Our Jhunjhunu cake range: Chocolate, Black Forest, Red Velvet, Mango (Shekhawati Kesar!), Butterscotch, Photo Cakes, Fondant Shekhawati Haveli / Rajput Fresco-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhunjhunu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Subhash Nagar, Khetri Road, Mandawa Road, Nawalgarh Road, Sikar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Shekhawati Haveli Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jhunjhunu?", answer: "Yes, same-day cake delivery is available across all Jhunjhunu areas — Station Road, Subhash Nagar, Khetri Road, and Mandawa Road — for orders placed before 3 PM." },
      { question: "Do you have Shekhawati Haveli / fresco-themed cakes in Jhunjhunu?", answer: "Yes! The magnificent painted havelis of the Shekhawati region — Jhunjhunu's global claim to fame, an open-air fresco museum with centuries of Marwari merchant art — inspire our Shekhawati Haveli fondant cakes with intricate fresco motifs." },
      { question: "Are eggless cakes available in Jhunjhunu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jhunjhunu delivery." }
    ]
  },

  "dholpur": {
    cityName: "Dholpur",
    metaTitle: "Cake Delivery in Dholpur | Chambal Belt Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Dholpur. Same-day delivery across Dholpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dholpur",
    metaKeyword: "cake delivery dholpur, order cake online dholpur, birthday cake dholpur, custom cake dholpur, same day cake delivery dholpur civil lines agra road chambal ghati agra border bari rajakhera",
    footerContent: `
<h2>Cake Delivery in Dholpur — Chambal Ravines' Edge, Dholpur Sandstone City, and Rajasthan's Agra-Border Gateway</h2>
<p>Dholpur — the headquarters of Dholpur district in eastern Rajasthan, the easternmost district of Rajasthan bordering Uttar Pradesh (Agra side) and Madhya Pradesh (Chambal belt), famous for Dholpur sandstone (the reddish-pink Dholpur stone — a fine-grained sandstone quarried from Dholpur's hills — was used extensively in the construction of Mughal monuments, including parts of Fatehpur Sikri, the Agra Fort, and the Red Fort Delhi; this distinctive stone has made Dholpur a well-known quarry city), the Chambal River and its famous ravines (the Dholpur and Morena Chambal Valley ravines — "beehad" — were historically infamous as dacoit strongholds; the Chambal ghati of Dholpur is now a wildlife sanctuary protecting crocodiles, gharials, and river dolphins; the Chambal river forms Dholpur's border with Madhya Pradesh), and historic Mughal and Jat princely heritage (Dholpur was the capital of the Jat princely state of the Dholpur Maharajas) — is a city of quarrying heritage and natural drama. From birthday parties in the Civil Lines area to corporate cakes at the large sandstone quarrying companies, from anniversary surprises near the Agra Road belt to student cakes at Dholpur's colleges — RedHeart covers all Dholpur zones: Central (Civil Lines, Station Road, Agra Road), North (Agra Border, Bah Road, UP border), South (Chambal Belt, Rajakhera, Bari Road), East (MP Border, Chambal Sanctuary, Morena border), West (Karauli Road, Sawai Madhopur Road).</p>
<p>Our Dholpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Agra Langra belt proximity!), Butterscotch, Photo Cakes, Fondant Chambal River / Dholpur Sandstone-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dholpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Agra Road, Bari Road, Rajakhera, Chambal belt</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chambal River Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dholpur?", answer: "Yes, same-day cake delivery is available across all Dholpur areas — Civil Lines, Station Road, Agra Road, and Bari Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dholpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dholpur delivery." },
      { question: "Do you deliver midnight cakes in Dholpur?", answer: "Yes, midnight birthday cake delivery is available across Dholpur's central and residential zones." }
    ]
  },

  "ballia": {
    cityName: "Ballia",
    metaTitle: "Cake Delivery in Ballia | Bhojpur Land UP | RedHeart",
    metaDescription: "Order cakes online in Ballia. Same-day delivery across Ballia. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ballia",
    metaKeyword: "cake delivery ballia, order cake online ballia, birthday cake ballia, custom cake ballia, same day cake delivery ballia civil lines mangal pandey nagara ganga ghat rasra maniyar",
    footerContent: `
<h2>Cake Delivery in Ballia — Mangal Pandey's City, Bhojpur Culture's Heartland, and Ganga-Saryu Confluence UP</h2>
<p>Ballia — the easternmost district headquarters in Uttar Pradesh, famously called "Baagi Ballia" (Rebellious Ballia) for its extraordinary history of independence movement participation (Mangal Pandey — the soldier of the 34th Bengal Native Infantry who fired the first shot of the 1857 First War of Independence on 29 March 1857 — was born at Nagwa village, Ballia district; Ballia's people revolted against British rule multiple times, and in August 1942, Ballia briefly declared independence during the Quit India Movement when Chittu Pandey led a local revolt and the British flag was replaced; the Mangal Pandey Udyan is a major memorial in Ballia), the heartland of Bhojpuri culture (Ballia's Bhojpuri-speaking population has produced generations of singers, poets, and film artists who shaped Bhojpuri music; the Ballia Mela is one of UP's largest cattle fairs), located at the confluence of the Ganga and Saryu rivers near Manjhi Ghat — is a city of revolutionary historical significance. From birthday parties in the Civil Lines area to corporate cakes at the large grain mandis, from anniversary surprises near the famous Mangal Pandey Park to student cakes at Ballia's colleges — RedHeart covers all Ballia zones: Central (Civil Lines, Station Road, Nagara Road), North (Balia-Bihar border, Sonepur Road), South (Ganga Ghats, Rasra Road, Ghazipur border), East (Bihar border, Chapra Road, Revti), West (Ghazipur Road, Mau Road, Bansadeeh).</p>
<p>Our Ballia cake range: Chocolate, Black Forest, Red Velvet, Mango (Eastern UP Langra!), Butterscotch, Photo Cakes, Fondant Mangal Pandey tribute / Bhojpuri heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballia, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Nagara Road, Rasra Road, Ghazipur Road, Ganga Ghats</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mangal Pandey Tribute Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ballia?", answer: "Yes, same-day cake delivery is available across all Ballia areas — Civil Lines, Station Road, Nagara Road, and Rasra Road — for orders placed before 3 PM." },
      { question: "Do you have Mangal Pandey-themed cakes in Ballia?", answer: "Yes! Ballia is the birthplace of Mangal Pandey — the 1857 independence hero who fired the first shot of India's First War of Independence. Our Mangal Pandey tribute fondant cakes honour this revolutionary legacy, a proud local design." },
      { question: "Are eggless cakes available in Ballia?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ballia delivery." }
    ]
  },

  "azamgarh": {
    cityName: "Azamgarh",
    metaTitle: "Cake Delivery in Azamgarh | Terracotta City Eastern UP | RedHeart",
    metaDescription: "Order cakes online in Azamgarh. Same-day delivery across Azamgarh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Azamgarh",
    metaKeyword: "cake delivery azamgarh, order cake online azamgarh, birthday cake azamgarh, custom cake azamgarh, same day cake delivery azamgarh civil lines station road mubarak pur ghosi mau road lal mitti",
    footerContent: `
<h2>Cake Delivery in Azamgarh — Lal Mitti Terracotta's Home, Mubarakpur Silk's City, and Eastern UP's Cultural Heartland</h2>
<p>Azamgarh — the headquarters of Azamgarh district in eastern Uttar Pradesh, the birthplace of India's unique Lal Mitti terracotta craft tradition (Azamgarh district's Nizamabad town is the only place in India that makes distinctive black pottery using local black clay — the Nizamabad Black Pottery is a GI-tagged craft; separately, Azamgarh's terracotta crafts, especially the Lal Mitti work, are famous across UP; Azamgarh's traditional potter communities have supplied terracotta to generations of UP households), Mubarakpur (a historic silk-weaving town on the outskirts of Azamgarh, where hundreds of hand-loom weavers create Banarasi silk and cotton sarees — Mubarakpur sarees have national recognition), and the hometown of filmmakers and poets including the legendary Urdu poet Kaifi Azmi and his daughter actress Shabana Azmi (who was born in Azamgarh) — is a city of craft, culture, and Urdu poetry. From birthday parties in the Civil Lines area to corporate cakes at the large silk weaving cooperatives, from anniversary surprises near the Station Road market to student cakes at Azamgarh's colleges — RedHeart covers all Azamgarh zones: Central (Civil Lines, Station Road, Subhash Chowk), North (Mau Road, Mubarakpur, Doharighat), South (Allahabad Road, Lalganj, Phulpur), East (Ballia Road, Ghosi Road, Mubarak Nagar), West (Varanasi Road, Sathiaon, Ghazipur Road).</p>
<p>Our Azamgarh cake range: Chocolate, Black Forest, Red Velvet, Mango (UP Dussehri!), Butterscotch, Photo Cakes, Fondant Nizamabad Black Pottery / Azamgarh terracotta-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Azamgarh, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Subhash Chowk, Mau Road, Mubarakpur, Varanasi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nizamabad Black Pottery Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Azamgarh?", answer: "Yes, same-day cake delivery is available across all Azamgarh areas — Civil Lines, Station Road, Subhash Chowk, Mau Road, and Mubarakpur — for orders placed before 3 PM." },
      { question: "Do you have Nizamabad Black Pottery-themed cakes in Azamgarh?", answer: "Yes! Azamgarh's Nizamabad Black Pottery — the unique GI-tagged black clay pottery tradition found only in Azamgarh district — inspires our Nizamabad Black Pottery fondant cakes. A one-of-a-kind local craft celebration cake." },
      { question: "Are eggless cakes available in Azamgarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Azamgarh delivery." }
    ]
  },

  "motihari": {
    cityName: "Motihari",
    metaTitle: "Cake Delivery in Motihari | George Orwell's City East Champaran Bihar | RedHeart",
    metaDescription: "Order cakes online in Motihari. Same-day delivery across Motihari. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Motihari",
    metaKeyword: "cake delivery motihari, order cake online motihari, birthday cake motihari, custom cake motihari, same day cake delivery motihari east champaran civil lines gandhi memorial statue road nepal border",
    footerContent: `
<h2>Cake Delivery in Motihari — East Champaran's Capital, Gandhi's First Satyagraha City, and George Orwell's Birthplace</h2>
<p>Motihari — the headquarters of East Champaran (Purbi Champaran) district in Bihar, one of India's most historically important cities for the independence movement (Champaran Satyagraha 1917 — Gandhi's first Satyagraha on Indian soil was held at Champaran; when indigo farmers in Champaran were being exploited by British planters under the tinkathia system, Gandhi came to Champaran in 1917, conducted mass surveys, defied British orders to leave, and launched a peaceful resistance movement that became a template for all future Satyagrahas; Motihari has a major Gandhi Museum and Gandhi Smarak at the site of the Satyagraha; every April 10, Gandhi's arrival in Champaran is celebrated), birthplace of Eric Arthur Blair — better known as George Orwell (the author of 1984 and Animal Farm was born in Motihari on 25 June 1903 when his father worked in the Indian Civil Service; a plaque marks his birthplace in Motihari), and a city at the Nepal border belt (East Champaran borders Nepal's Parsa district) — is a city of extraordinary literary and independence heritage. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from Satyagraha Day celebration cakes to anniversary surprises near the Gandhi Memorial — RedHeart covers all Motihari zones: Central (Civil Lines, Gandhi Chowk, Station Road), North (Nepal Border, Raxaul Road, Bettiah Road), South (Muzaffarpur Road, Areraj, Kesaria), East (Sitamarhi Road, Dhaka, Mehsi), West (Bettiah Road, West Champaran border).</p>
<p>Our Motihari cake range: Chocolate, Black Forest, Red Velvet, Mango (Champaran Litchi!), Butterscotch, Photo Cakes, Fondant Gandhi Satyagraha / 1984 Orwell-inspired theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Motihari, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Gandhi Chowk, Station Road, Raxaul Road, Muzaffarpur Road, Nepal Border belt</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gandhi Satyagraha Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Motihari?", answer: "Yes, same-day cake delivery is available across all Motihari areas — Civil Lines, Gandhi Chowk, Station Road, and Raxaul Road — for orders placed before 3 PM." },
      { question: "Do you have Champaran Satyagraha-themed cakes in Motihari?", answer: "Yes! Motihari's Gandhi Satyagraha heritage — where Gandhi launched his first Satyagraha on Indian soil in 1917, planting the seed of India's independence movement — inspires our Gandhi Satyagraha fondant cakes. A tribute to Champaran's role in India's freedom." },
      { question: "Are eggless cakes available in Motihari?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Motihari delivery." }
    ]
  },

  "sitamarhi": {
    cityName: "Sitamarhi",
    metaTitle: "Cake Delivery in Sitamarhi | Sita's Birthplace Bihar | RedHeart",
    metaDescription: "Order cakes online in Sitamarhi. Same-day delivery across Sitamarhi. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sitamarhi",
    metaKeyword: "cake delivery sitamarhi, order cake online sitamarhi, birthday cake sitamarhi, custom cake sitamarhi, same day cake delivery sitamarhi janaki mandir dumra shivhar nepal border punaura dham",
    footerContent: `
<h2>Cake Delivery in Sitamarhi — Goddess Sita's Birthplace, Punaura Dham Pilgrimage, and Nepal Border's Sacred City</h2>
<p>Sitamarhi — the headquarters of Sitamarhi district in Bihar, one of Hinduism's most sacred cities (Punaura Dham — the birthplace of Goddess Sita, the divine heroine of the Ramayana — is located at Sitamarhi; according to Hindu tradition, King Janaka discovered the infant Sita while ploughing his field at Punaura, which is now marked by the Janaki Mandir; millions of pilgrims visit Sitamarhi for Vivah Panchami — the auspicious anniversary of Sita and Ram's marriage — and for Sita Navami; the Janaki Mandir in Sitamarhi town and the Punaura Dham are the two most important pilgrimage spots; Sitamarhi is part of the Ramayana Circuit tourism initiative), a district bordering Nepal (Sitamarhi's northern boundary is the Nepal Terai — making it a gateway city for Nepal's Parsa and Mahottari districts), and an important litchi-growing region (Sitamarhi's Terai belt produces some of Bihar's finest litchis) — is a city of sacred significance in the Vaishnava tradition. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from Vivah Panchami celebration cakes to anniversary surprises near the Janaki Mandir — RedHeart covers all Sitamarhi zones: Central (Civil Lines, Janaki Mandir Road, Dumra Road), North (Nepal Border, Shivhar Road, Runnisaidpur), South (Muzaffarpur Road, Pupri, Runni Road), East (Darbhanga Road, Sakra), West (Motihari Road, Bettiah Road).</p>
<p>Our Sitamarhi cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi flavour!), Butterscotch, Photo Cakes, Fondant Janaki / Sita Ramayana-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Janaki Mandir Road, Dumra Road, Nepal Border belt, Muzaffarpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Janaki Sita Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sitamarhi?", answer: "Yes, same-day cake delivery is available across all Sitamarhi areas — Civil Lines, Janaki Mandir Road, Dumra Road — for orders placed before 3 PM." },
      { question: "Do you have Sita Janaki Ramayana-themed cakes in Sitamarhi?", answer: "Yes! Sitamarhi is the birthplace of Goddess Sita — the divine heroine of the Ramayana — at Punaura Dham. Our Janaki / Sita-Rama fondant cakes celebrate this sacred heritage, a deeply meaningful local design for Sitamarhi celebrations." },
      { question: "Are eggless cakes available in Sitamarhi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sitamarhi delivery." }
    ]
  },

  "amreli": {
    cityName: "Amreli",
    metaTitle: "Cake Delivery in Amreli | Groundnut Capital Saurashtra Gujarat | RedHeart",
    metaDescription: "Order cakes online in Amreli. Same-day delivery across Amreli. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Amreli",
    metaKeyword: "cake delivery amreli, order cake online amreli, birthday cake amreli eggless, custom cake amreli, same day cake delivery amreli civil road lion gir sasan rajula jafrabad",
    footerContent: `
<h2>Cake Delivery in Amreli — Gujarat's Groundnut Capital, Gir Lion Territory, and Saurashtra's Agricultural Powerhouse</h2>
<p>Amreli — the headquarters of Amreli district in Saurashtra Gujarat, a city of agricultural and ecological significance (Amreli district is one of India's leading groundnut-producing regions — the peanut/groundnut cultivation in the Saurashtra red sandy soil produces high-quality arachidic groundnuts; Amreli's groundnut oil and peanut butter production is significant; the district also has large holdings of cotton and sesame/til cultivation), the district adjoining the Gir National Park (Amreli district shares boundaries with the Gir Forest — the world's only home of the Asiatic Lion; the famous Gir Sasan area is just across the Junagadh border, and Amreli's Dhari and Rajula talukas have lion territories within Amreli forest areas; Amreli's lions are among the easternmost extensions of the Gir lion population), and home to Rajula and Jafrabad ports (small fishing ports on the Saurashtra coast within Amreli district) — is a city of agricultural and wildlife importance. All our Amreli cakes are eggless and Pure Veg — from birthday parties in the Civil Road area to corporate cakes at the large groundnut processing units — RedHeart covers Amreli, Rajula, Jafrabad, Dhari, and the Saurashtra coast belt.</p>
<p>Our Amreli cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Mango, Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amreli, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Road, Station Road, Rajula Road, Jafrabad Road, Dhari Road, Junagadh Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Chocolate, Photo Cake, Black Forest, Red Velvet (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Amreli?", answer: "Yes! All our Amreli cakes are 100% eggless and Pure Veg — suitable for Amreli's traditional Gujarati and Jain community." },
      { question: "Can I get same-day eggless cake delivery in Amreli?", answer: "Yes, same-day eggless cake delivery is available across all Amreli areas — Civil Road, Station Road, and Rajula Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes near the Gir lion forest areas of Amreli?", answer: "Yes, the Dhari and Rajula talukas of Amreli district — which have Gir lion forest territories — are covered under our Amreli delivery zone." }
    ]
  },

  "valsad": {
    cityName: "Valsad",
    metaTitle: "Cake Delivery in Valsad | Alphonso Mango City South Gujarat | RedHeart",
    metaDescription: "Order cakes online in Valsad. Same-day delivery across Valsad. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Valsad",
    metaKeyword: "cake delivery valsad, order cake online valsad, birthday cake valsad eggless, custom cake valsad, same day cake delivery valsad tithal beach vapi silvassa dharampur bulsar station road",
    footerContent: `
<h2>Cake Delivery in Valsad — Hafus Mango Land, Tithal Beach Resort City, and South Gujarat's Chemical-Port Corridor</h2>
<p>Valsad (formerly Bulsar) — the headquarters of Valsad district in southernmost Gujarat, the Alphonso ("Hafus") mango capital of South Gujarat (the Valsad-Palghar-Ratnagiri belt is the heartland of the GI-tagged Alphonso/Hafus mango — one of the world's finest mangoes; the Valsad district's coastal Talasari and Umargam talukas have extensive mango orchards producing the prized Hafus that's exported globally; the Valsad mango season in April-June draws buyers from across India), home to Tithal Beach (one of Gujarat's most popular beaches — Tithal's dark-sand sea coast is a popular weekend resort for Vapi and Surat populations), adjacent to Vapi (South Gujarat's chemical industrial town — the Vapi GIDC is India's largest industrial cluster with 1,200+ chemical, dye, and pharmaceutical units), and close to the Union Territory of Dadra and Nagar Haveli (Silvassa, the UT capital, is 20 km from Valsad) — is a city of mango excellence and industrial proximity. All our Valsad cakes are eggless and Pure Veg — from birthday parties in the Station Road area to corporate cakes at the large mango export houses — RedHeart covers Valsad, Tithal, Pardi, and the Vapi corridor.</p>
<p>Our Valsad cake range: All eggless — Chocolate, Black Forest, Red Velvet, Alphonso Mango (Hafus!), Kesar-Mava, Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Valsad, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Tithal Road, Pardi Road, Vapi Road, Dharampur Road, Silvassa Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alphonso Mango (Hafus), Kesar-Mava, Chocolate, Photo Cake, Black Forest (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Valsad?", answer: "Yes! All our Valsad cakes are 100% eggless and Pure Veg — suitable for Valsad's Gujarati community." },
      { question: "Do you have Alphonso Hafus mango cakes in Valsad?", answer: "Yes! Valsad's famous Alphonso (Hafus) mango — one of the world's most prized GI-tagged mangoes, grown in Valsad's coastal orchards — inspires our Alphonso Mango cake. A signature local flavour for Valsad birthdays." },
      { question: "Can I get same-day eggless cake delivery in Valsad?", answer: "Yes, same-day eggless cake delivery is available across all Valsad areas — Station Road, Tithal Road, and Pardi Road — for orders placed before 3 PM." }
    ]
  },

  "kapurthala": {
    cityName: "Kapurthala",
    metaTitle: "Cake Delivery in Kapurthala | Paris of Punjab | RedHeart",
    metaDescription: "Order cakes online in Kapurthala. Same-day delivery across Kapurthala. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kapurthala",
    metaKeyword: "cake delivery kapurthala, order cake online kapurthala, birthday cake kapurthala, custom cake kapurthala, same day cake delivery kapurthala jagatjit palace elysee jalandhar road phagwara road",
    footerContent: `
<h2>Cake Delivery in Kapurthala — Paris of Punjab, Jagatjit Palace's Princely City, and France-Inspired Architecture Hub</h2>
<p>Kapurthala — the headquarters of Kapurthala district in Punjab, universally known as the "Paris of Punjab" (Maharaja Jagatjit Singh of Kapurthala — the most Francophile of all Indian maharajas — travelled to France repeatedly in the early 20th century and commissioned the magnificent Jagatjit Palace: a 1908 replica of the Palace of Versailles, built by French architect M. Marcel Tristant; the palace's grand hall, fountains, French gardens, and architecture make it one of India's most unique royal palaces; it is now the Sainik School Kapurthala), home to the Moorish Mosque (Elysee Villa, Shalimar Gardens, and several other French-Andalusian inspired buildings that Maharaja Jagatjit built throughout Kapurthala town — making Kapurthala perhaps the only Indian city with Moorish, French Baroque, and Indo-Saracenic architecture side by side), and an industrial city on the Jalandhar-Amritsar corridor — is Punjab's most architecturally distinctive city. From birthday parties near the Jagatjit Palace area to corporate cakes at the city factories, from anniversary surprises in the cantonment area to student cakes at the Sainik School — RedHeart covers all Kapurthala zones: Central (Palace Road, Station Road, Civil Lines), North (Beas River Road, Sultanpur Lodhi), South (Phagwara Road, Jalandhar Road), East (Nakodar Road, Amritsar Road), West (Kartarpur Road, Batala Road).</p>
<p>Our Kapurthala cake range: Chocolate, Black Forest, Red Velvet, Mango (Punjab Chaunsa!), Butterscotch, Photo Cakes, Fondant Jagatjit Palace / French Versailles-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kapurthala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palace Road, Station Road, Civil Lines, Jagatjit Palace area, Jalandhar Road, Phagwara Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jagatjit Palace Versailles Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kapurthala?", answer: "Yes, same-day cake delivery is available across all Kapurthala areas — Palace Road, Station Road, Civil Lines, and Jalandhar Road — for orders placed before 3 PM." },
      { question: "Do you have Jagatjit Palace / Versailles-themed cakes in Kapurthala?", answer: "Yes! The iconic Jagatjit Palace — Kapurthala's replica of the Palace of Versailles, built by the Francophile Maharaja Jagatjit Singh in 1908 — inspires our Versailles fondant cakes. The 'Paris of Punjab' deserves a French palace cake!" },
      { question: "Are eggless cakes available in Kapurthala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kapurthala delivery." }
    ]
  },

  "moga": {
    cityName: "Moga",
    metaTitle: "Cake Delivery in Moga | Dairy Punjab | RedHeart",
    metaDescription: "Order cakes online in Moga. Same-day delivery across Moga. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Moga",
    metaKeyword: "cake delivery moga, order cake online moga, birthday cake moga, custom cake moga, same day cake delivery moga civil lines ludhiana road ferozepur road Nestle factory dairy GTB nagar",
    footerContent: `
<h2>Cake Delivery in Moga — Punjab's Dairy District Capital, Nestle's Indian Headquarters, and Satguru Granth Sahib University City</h2>
<p>Moga — the headquarters of Moga district in central Punjab, a city of significant industrial and religious importance (Moga has the distinction of hosting Nestle India's largest dairy plant in India — the Moga Nestle factory, established in 1961, is the largest Nestle dairy plant in South Asia, processing lakhs of litres of milk daily from Punjab's dairy farms into products like Milkmaid condensed milk, Milkmaid yogurt, Nangrow, and other Nestle dairy products; Moga's Nestle plant is the backbone of Nestle India's dairy business; the entire Malwa region's milk comes to Moga's dairy cluster), home to Satguru Granth Sahib World University (a university established by the Dera Sachkhand Ballan, a prominent Ravidassia Sikh institution), and an important commercial city on the Ludhiana-Ferozepur highway — is a city of dairy heritage and Punjabi commerce. From birthday parties in the Civil Lines area to corporate cakes at the large Nestle dairy complex, from anniversary surprises in GTB Nagar to student cakes at the university — RedHeart covers all Moga zones: Central (Civil Lines, Station Road, Ludhiana Road), North (Ferozepur Road, Jagraon Road), South (Barnala Road, Sangrur border), East (Ludhiana Road, Khanna Road, Pakhowal), West (Ferozepur Road, Zira, Fazilka border).</p>
<p>Our Moga cake range: Chocolate, Black Forest, Red Velvet, Mango (Punjab Chaunsa!), Butterscotch, Milk Kheer-inspired cream cakes (Moga dairy!), Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Moga, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Ludhiana Road, GTB Nagar, Ferozepur Road, Jagraon Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Milk Cream Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Moga?", answer: "Yes, same-day cake delivery is available across all Moga areas — Civil Lines, Station Road, GTB Nagar, and Ludhiana Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Moga?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Moga delivery." },
      { question: "Do you deliver midnight cakes in Moga?", answer: "Yes, midnight birthday cake delivery is available across Moga's central and residential zones." }
    ]
  },

  "rewari": {
    cityName: "Rewari",
    metaTitle: "Cake Delivery in Rewari | Brass City Haryana | RedHeart",
    metaDescription: "Order cakes online in Rewari. Same-day delivery across Rewari. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rewari",
    metaKeyword: "cake delivery rewari, order cake online rewari, birthday cake rewari, custom cake rewari, same day cake delivery rewari civil lines brass market delhi road gurugram border khol road sector",
    footerContent: `
<h2>Cake Delivery in Rewari — Haryana's Brass Capital, Delhi's Southern Border City, and the Ahirwal Belt's Commercial Hub</h2>
<p>Rewari — the headquarters of Rewari district in southern Haryana, the "Brass Capital of Haryana" and one of India's important brass-crafting centres (Rewari's traditional brass industry produces utensils, handicrafts, and industrial components — the Rewari brass market is one of Haryana's most active commodity markets; local artisans have been crafting brass items for generations), located at the edge of Delhi's NCR zone (Rewari is part of the National Capital Region and has seen rapid real-estate and industrial growth; Manesar-Gurugram's automotive industry belt is just 40 km away), the cultural heartland of the Ahirwal region (the Ahirwal belt — covering Rewari, Mahendragarh, and Jhajjar districts — is home to the Ahir (Yadav) community's martial and agricultural heritage; the region has produced many prominent politicians and army officers), and an important rail junction connecting Delhi-Jaipur-Bathinda routes — is a city of craft heritage and NCR growth. From birthday parties in the Civil Lines area to corporate cakes at the large auto-component factories, from anniversary surprises near the Brass Market to student cakes at the polytechnics and colleges — RedHeart covers all Rewari zones: Central (Civil Lines, Brass Market, Delhi Road), North (Gurugram Road, Manesar Border, Pataudi), South (Jaipur Road, Kosli, Mahendragarh Road), East (Delhi Border, Bawal Road, Narnaul Road), West (Jhajjar Road, Nuh Road).</p>
<p>Our Rewari cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewari, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Brass Market, Delhi Road, Gurugram Road, Jaipur Road, Jhajjar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rewari?", answer: "Yes, same-day cake delivery is available across all Rewari areas — Civil Lines, Brass Market, Delhi Road, and Gurugram Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Rewari?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rewari delivery." },
      { question: "Do you deliver midnight cakes in Rewari?", answer: "Yes, midnight birthday cake delivery is available across Rewari's central and residential zones." }
    ]
  },

  "kaithal": {
    cityName: "Kaithal",
    metaTitle: "Cake Delivery in Kaithal | Hanuman Birthplace Haryana | RedHeart",
    metaDescription: "Order cakes online in Kaithal. Same-day delivery across Kaithal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kaithal",
    metaKeyword: "cake delivery kaithal, order cake online kaithal, birthday cake kaithal, custom cake kaithal, same day cake delivery kaithal civil lines kurukshetra road jind road pundri thanesar railway station",
    footerContent: `
<h2>Cake Delivery in Kaithal — Lord Hanuman's Birthplace, Haryana's Ancient Kapisthal, and Wheat Belt's City</h2>
<p>Kaithal — the headquarters of Kaithal district in Haryana, one of ancient India's most revered cities (Kaithal is identified with Kapisthal — the ancient city of monkeys — and is considered by many Hindu traditions as the birthplace of Lord Hanuman; the Anjani Mata Mandir at Kaithal is dedicated to Hanuman's mother Anjana, and the city has numerous ancient temples including the Hanuman Mandir at the town centre; Kaithal finds mention in the Mahabharata as a city of monkeys — "Kapi" — a reference many connect to Hanuman's divine parentage; the city attracts Hanuman devotees year-round), a major wheat-growing city of the Haryana plains (Kaithal district's wheat production is among Haryana's highest per-hectare; the Kaithal grain mandi handles massive volumes of wheat and paddy each Rabi and Kharif season), and a city on the Kurukshetra-Jind highway corridor — is a city of deep Hindu religious significance. From birthday parties in the Civil Lines area to corporate cakes at the large grain trading firms, from Hanuman Jayanti celebration cakes to anniversary surprises in the Station Road area — RedHeart covers all Kaithal zones: Central (Civil Lines, Station Road, Kurukshetra Road), North (Pehowa Road, Thanesar Road, Kurukshetra border), South (Jind Road, Narwana Road, Kaithal belt), East (Karnal Road, Gharaunda Road, Indri), West (Fatehabad Road, Sirsa Road, Sanghi).</p>
<p>Our Kaithal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Hanuman / Kapisthal-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaithal, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Kurukshetra Road, Jind Road, Pehowa Road, Fatehabad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hanuman Jayanti Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kaithal?", answer: "Yes, same-day cake delivery is available across all Kaithal areas — Civil Lines, Station Road, Kurukshetra Road, and Jind Road — for orders placed before 3 PM." },
      { question: "Do you have Hanuman-themed cakes in Kaithal?", answer: "Yes! Kaithal — identified with the ancient Kapisthal, believed by Hindu tradition to be the birthplace of Lord Hanuman — inspires our Hanuman Jayanti fondant cakes. A deeply meaningful local design for Kaithal celebrations." },
      { question: "Are eggless cakes available in Kaithal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kaithal delivery." }
    ]
  },

  "angul": {
    cityName: "Angul",
    metaTitle: "Cake Delivery in Angul | NALCO Steel Hub Odisha | RedHeart",
    metaDescription: "Order cakes online in Angul. Same-day delivery across Angul. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Angul",
    metaKeyword: "cake delivery angul, order cake online angul, birthday cake angul, custom cake angul, same day cake delivery angul NALCO township civil market steel HINDALCO thermal plant colliery sambalpur road",
    footerContent: `
<h2>Cake Delivery in Angul — Odisha's Aluminium Steel City, NALCO's Birth City, and Mahanadi Valley Industrial Hub</h2>
<p>Angul — the headquarters of Angul district in central Odisha, one of India's most important industrial cities (Angul is where NALCO — National Aluminium Company — has its smelter complex, one of Asia's largest aluminium smelters, established in 1987; the Angul aluminium township is home to thousands of NALCO employees; additionally, the Angul-Talcher-Kaniha industrial belt is home to major thermal power plants including the NTPC Kaniha Power Station — one of India's largest; the MCL — Mahanadi Coalfields — supplies coal from the Talcher coal belt, one of India's largest coal reserves; the Jindal Steel and Power plant at Angul is one of India's most modern integrated steel plants — making Angul possibly the most concentrated heavy-industry zone per city size in India), and a city at the Mahanadi River's mid-valley — is a city of extraordinary industrial importance. From birthday parties in the large NALCO, Jindal, and NTPC industrial townships to corporate cakes at the plant offices, from anniversary surprises in the Civil Market area to student cakes at Angul's colleges — RedHeart covers all Angul zones: Central (Civil Market, Station Road, NALCO Township), North (Sambalpur Road, Rairakhol), South (Bhubaneswar Road, Cuttack Road, Athamallik), East (Dhenkanal Road, Kamakhyanagar), West (Talcher Road, Kaniha, Colliery area).</p>
<p>Our Angul cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Angul, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Market, Station Road, NALCO Township, Sambalpur Road, Talcher Road, Bhubaneswar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Angul?", answer: "Yes, same-day cake delivery is available across all Angul areas — Civil Market, Station Road, NALCO Township, and Talcher Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to NALCO and Jindal townships in Angul?", answer: "Yes, the NALCO smelter township, Jindal Steel residential areas, and NTPC Kaniha colony zones are all covered under Angul's same-day delivery." },
      { question: "Are eggless cakes available in Angul?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Angul delivery." }
    ]
  },

  "kullu": {
    cityName: "Kullu",
    metaTitle: "Cake Delivery in Kullu | Valley of Gods Himachal Pradesh | RedHeart",
    metaDescription: "Order cakes online in Kullu. Same-day delivery across Kullu. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kullu",
    metaKeyword: "cake delivery kullu, order cake online kullu, birthday cake kullu, custom cake kullu, same day cake delivery kullu dhalpur maidan beas river dussehra mohal akhara bazar shawl",
    footerContent: `
<h2>Cake Delivery in Kullu — Valley of Gods, Dussehra Capital of India, and Kullu Shawl's Himalayan Home</h2>
<p>Kullu — the headquarters of Kullu district in Himachal Pradesh, the "Valley of Gods" (the Kullu Valley, which runs along the Beas River between the Pir Panjal and Dhauladhar ranges, has 360+ temples and shrines, giving it the title "Dev Bhoomi" — Land of Gods; the valley has 360 local deities — each village has its own devta, and during the famous Kullu Dussehra, all 360 local deities are brought to the Dhalpur Maidan in palanquins to pay homage to Lord Raghunath), famous for Kullu Dussehra (India's largest and most internationally famous Dussehra festival — Kullu's Dussehra begins exactly on Vijaya Dashami when Dussehra ends in the rest of India, and continues for 7 days; up to 4–5 lakh pilgrims attend; UNESCO has designated it a cultural heritage event), home to the Kullu Shawl (GI-tagged) and Kullu Pattoo woollen craft — the colourful handwoven shawls with distinctive geometric borders are sold across the world, and one of the great Himalayan apple-growing zones (Kullu apples — along with Manali and Shimla — are among India's finest temperate fruits). From birthday parties in the Dhalpur Maidan area to corporate cakes at the tourism offices, from Dussehra celebration cakes to anniversary surprises in the Mohal residential belt — RedHeart covers all Kullu zones: Central (Dhalpur Maidan, Akhara Bazar, Station Road), North (Manali Road, Bhuntar Road), South (Mandi Road, Bajaura, Bhuntar), East (Naggar Road, Rohtang border), West (Sainj Valley, Tirthan Valley).</p>
<p>Our Kullu cake range: Chocolate, Black Forest, Red Velvet, Apple-Cream (Kullu Valley Himachali Apple!), Mango, Photo Cakes, Fondant Kullu Dussehra / Valley of Gods-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kullu, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhalpur Maidan, Akhara Bazar, Station Road, Mohal, Manali Road, Mandi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple-Cream, Chocolate, Kullu Dussehra Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kullu?", answer: "Yes, same-day cake delivery is available across all Kullu areas — Dhalpur Maidan, Akhara Bazar, Station Road, and Mohal — for orders placed before 3 PM." },
      { question: "Do you have Kullu apple cakes and Dussehra-themed cakes?", answer: "Yes! Kullu Valley's famous Himachali apples — grown in the cold mountain air — inspire our Apple-Cream cake, and Kullu's internationally celebrated Dussehra festival — the Valley of Gods' greatest celebration — inspires our Kullu Dussehra fondant cakes." },
      { question: "Are eggless cakes available in Kullu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kullu delivery." }
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
