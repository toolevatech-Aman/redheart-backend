// Cakes Batch 50 — 13 cities
// Tamil Nadu: Kanchipuram, Tiruchirapalli, Cuddalore, Virudhunagar, Namakkal
// Karnataka: Karwar (Uttara Kannada), Madikeri (Kodagu), Raichur, Gadag
// MP: Satna, Chhindwara, Vidisha, Hoshangabad (Narmadapuram)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "kanchipuram": {
    cityName: "Kanchipuram",
    metaTitle: "Cake Delivery in Kanchipuram | GI Silk City of 1000 Temples Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Kanchipuram. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kanchipuram",
    metaKeyword: "cake delivery kanchipuram, order cake online kanchipuram, birthday cake kanchipuram, custom cake kanchipuram, same day cake delivery kanchipuram GI Kanchipuram Silk City of Thousand Temples Pallava Kailasanathar Ekambaranathar Kamakshi Shankaracharya Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Kanchipuram — GI Silk City of Thousand Temples, Pallava Capital, and Adi Shankaracharya's City</h2>
<p>Kanchipuram — the district headquarters of Kanchipuram district in Tamil Nadu (located 72 km from Chennai), one of India's most ancient and sacred cities — a temple city, silk capital, and one of the seven Hindu moksha-puri cities (the Kanchipuram ("city of Kanchi") is one of the Sapta Puri (seven sacred cities) of Hinduism that grant moksha; it is both a Shaiva and Vaishnava pilgrimage city — uniquely recognized by both traditions; the "City of Thousand Temples" (though not literally 1000 today, it historically had enormous temple density); the Kailasanathar Temple (built by Pallava King Rajasimha/Narasimhavarman II, 685-705 CE — the oldest temple in Kanchipuram; earliest stone construction in Tamil Nadu; remarkable sandstone sculptures; dedicated to Shiva as Kailasanathar); the Ekambaranathar Temple (one of Pancha Bhuta Sthalams — Earth; massive 60-metre rajagopuram; sacred mango tree believed to be 3,500 years old under which Parvati is said to have worshipped Shiva in the form of an earth Linga; 1,000-pillared hall); the Kamakshi Amman Temple (one of three principal Shakti Peethas; Adi Shankaracharya meditated here and installed the Sri Chakra; the Kamakshi Amman temple is the most significant Devi temple in Tamil Nadu); the Varadaraja Perumal Temple (one of 108 Divya Desams — Vaishnava pilgrimage; famous 40-day once-in-40-years darshan of the silver/gold Athi Varadar deity immersed in a tank — next in 2059); the GI Kanchipuram Silk (pure mulberry silk; distinctive wide-contrast zari borders; heavy and lustrous; made on traditional pit-looms; the Kanchipuram silk saree is India's most prestigious silk saree for weddings); the Shankaracharya Math (Adi Shankaracharya (788-820 CE) established the Kanchi Kamakoti Peetham here)), and a city of Pallava architecture and GI Silk and Shankaracharya — is Tamil Nadu's most thousand-temply ancient and GI silk wedding-saree prestigious city. From birthday parties in Kanchipuram to celebration cakes — RedHeart covers all Kanchipuram zones: Kanchipuram city, Sriperumbudur, Chengalpattu, Arakkonam, Uthiramerur, Kancheepuram adjacent.</p>
<p>Our Kanchipuram cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kailasanathar Temple Pallava / Kamakshi Amman / Kanchipuram GI Silk Saree / Ekambaranathar Mango Tree-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanchipuram, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanchipuram city, Sriperumbudur, Chengalpattu, Arakkonam, Uthiramerur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kanchipuram Silk Fondant, Kailasanathar Pallava Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kanchipuram?", answer: "Yes, same-day cake delivery is available across all Kanchipuram areas — Kanchipuram city, Sriperumbudur, Chengalpattu, Arakkonam, and Uthiramerur — for orders placed before 3 PM." },
      { question: "Do you have GI Kanchipuram Silk Saree and Kailasanathar Temple-themed cakes?", answer: "Yes! The GI Kanchipuram Silk (pure mulberry silk; heavy lustrous saree with wide-contrast zari borders; woven on pit-looms; India's most prestigious wedding silk) and the Kailasanathar Temple (685-705 CE Pallava King Rajasimha — oldest temple in Kanchipuram; earliest stone construction in Tamil Nadu; remarkable sandstone sculptures) inspire our most silk-weddingly GI-lustrous and Pallava-architecturally stone-earliest Kanchipuram fondant cakes." },
      { question: "Are eggless cakes available in Kanchipuram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kanchipuram delivery." }
    ]
  },

  "tiruchirapalli": {
    cityName: "Tiruchirapalli",
    metaTitle: "Cake Delivery in Tiruchirappalli Trichy | Rock Fort Srirangam UNESCO Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Tiruchirappalli (Trichy). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tiruchirappalli (Trichy)",
    metaKeyword: "cake delivery trichy tiruchirapalli, order cake online trichy, birthday cake trichy, custom cake tiruchirappalli, same day cake delivery trichy Rock Fort Ucchi Pillayar Srirangam Ranganathaswamy UNESCO 108 Divya Desam Cauvery Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Tiruchirappalli (Trichy) — Rock Fort Temple, Srirangam (World's Largest Temple Complex), and Cauvery Delta</h2>
<p>Tiruchirappalli (Trichy) — the fourth-largest city in Tamil Nadu and the headquarters of Tiruchirappalli district, a major industrial, educational, and pilgrimage city — home to two of India's most extraordinary architectural and religious sites (the Rock Fort (Tiruchirapalli Rock Fort) — an 83-metre high granite rock monolith in the heart of Trichy city; the Ucchi Pillayar Temple (Vinayaka) at the very top and the Thayumanaswami Shiva Temple on the slope; the rock is a billion-year-old geological formation; the Gaja Fort (Nayak-Vijayanagara-era) fortification on the rock slopes; climbing the 437 rock-cut steps; the Rock Fort is one of Tamil Nadu's most iconic landmarks; the Srirangam (the Ranganathaswamy Temple) — on Srirangam Island in the Cauvery-Kollidam river delta, 4 km from Trichy city; the world's largest functioning Hindu temple complex by area (631 acres / 156 acres of temple within 7 concentric prakarams/enclosures and 21 gopurams — the outermost rajagopuram is 73 metres, one of the tallest temple towers in the world; the Srirangam Ranganathaswamy Temple is the most important Vaishnavite Divya Desam — #1 of 108 Divya Desams; the presiding deity is Lord Ranganatha (reclining Vishnu) on Shesha serpent; Ramanuja (the great Vaishnava philosopher/theologian) lived at Srirangam 1017-1137 CE and is enshrined there; the temple has UNESCO tentative listing; the Bharat Heavy Electricals Limited (BHEL) Trichy plant — one of India's largest heavy electrical equipment manufacturers; produces boilers, turbines), and a city of billion-year rock and world's largest temple — is Tamil Nadu's most rockiliy ancient and temple-complex-world-largestingly Srirangam-Ranganathaswamy city. From birthday parties in Trichy to celebration cakes — RedHeart covers all Trichy zones: Trichy city, Srirangam, Golden Rock, Ariyamangalam, Lalgudi, Musiri, Manachanallur, Thiruverumbur.</p>
<p>Our Trichy cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Rock Fort Ucchi Pillayar / Srirangam Ranganathaswamy World Largest Temple / Cauvery Delta / BHEL Trichy-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruchirappalli (Trichy), Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Trichy city, Srirangam, Golden Rock, Ariyamangalam, Lalgudi, Musiri, Thiruverumbur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Rock Fort Fondant, Srirangam Temple Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Trichy (Tiruchirappalli)?", answer: "Yes, same-day cake delivery is available across all Trichy areas — Trichy city, Srirangam, Golden Rock, Ariyamangalam, Lalgudi, and Musiri — for orders placed before 3 PM." },
      { question: "Do you have Rock Fort and Srirangam World's Largest Temple-themed cakes?", answer: "Yes! The Rock Fort (billion-year granite monolith; Ucchi Pillayar at top; 437 rock-cut steps; Trichy's iconic landmark) and the Srirangam Ranganathaswamy Temple (world's largest functioning Hindu temple — 631 acres, 7 prakarams, 21 gopurams; #1 Divya Desam; 73-metre rajagopuram; Ramanuja's 1017-1137 CE home) inspire our most rockily ancient and world-largestingly temple-complex Trichy fondant cakes." },
      { question: "Are eggless cakes available in Trichy?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tiruchirappalli delivery." }
    ]
  },

  "cuddalore": {
    cityName: "Cuddalore",
    metaTitle: "Cake Delivery in Cuddalore | Chidambaram Nataraja SIPCOT Port Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Cuddalore. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Cuddalore",
    metaKeyword: "cake delivery cuddalore, order cake online cuddalore, birthday cake cuddalore, custom cake cuddalore, same day cake delivery cuddalore Chidambaram Nataraja Cosmic Dance Thillai Akasa Lingam SIPCOT Pondicherry coast Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Cuddalore — Chidambaram's Nataraja Cosmic Dance Temple, SIPCOT Industrial Estate, and Coromandel Coast</h2>
<p>Cuddalore — the district headquarters of Cuddalore district in Tamil Nadu, a significant coastal and industrial district on the Coromandel Coast — home to one of India's most philosophically and architecturally extraordinary temples (the Chidambaram (Nataraja Temple) — located in Chidambaram city in Cuddalore district; one of the five Pancha Bhuta Sthalams (representing Space/Akasha); the Thillai Nataraja Temple (12th-13th century CE Chola; 4 rajagopurams in the 4 cardinal directions; 500 pillars Kanaka Sabha hall; the Nataraja (cosmic dancing Shiva) form is enshrined here — the supreme metaphysical representation of creation, sustenance, and destruction in Hindu theology; the Chidambara Rahasyam (secret of Chidambaram) — the central sanctum contains the Akasha Lingam — which is empty space itself (the ether element), represented by a curtain of golden vilva leaves that parts during puja to reveal the empty space; "Ananda Tandava" — the cosmic dance of bliss; Annamalaiyar (Shiva) represented by formless sky); the Chit Sabha (the Cosmic Hall/golden-roofed assembly); the SIPCOT Industrial Complex (Cuddalore SIPCOT — a significant industrial zone with chemical, pharmaceutical, and petrochemical industries; also a source of industrial pollution controversy; the 2004 Indian Ocean Tsunami hit the Cuddalore coast significantly; the Cuddalore Port is a minor port on the Bay of Bengal; the Fort St. David (Cuddalore — a British fort that was historically besieged; Robert Clive served here before Plassey)), and a city of the Cosmic Dance Empty Space temple — is Tamil Nadu's most philosophically Chidambara-Akasha-emptily cosmic and Nataraja-dance-blissingly Chidambaram-housed district. From birthday parties in Cuddalore to celebration cakes — RedHeart covers all Cuddalore zones: Cuddalore city, Chidambaram, Virudhachalam, Kattumannarkoil, Panruti, Kurinjipadi.</p>
<p>Our Cuddalore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chidambaram Nataraja Cosmic Dance / Akasha Lingam Empty Space / Thillai Temple Chola / Chidambara Rahasya-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuddalore, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuddalore city, Chidambaram, Virudhachalam, Kattumannarkoil, Panruti, Kurinjipadi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nataraja Cosmic Dance Fondant, Chidambaram Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Cuddalore?", answer: "Yes, same-day cake delivery is available across all Cuddalore areas — Cuddalore city, Chidambaram, Virudhachalam, Kattumannarkoil, and Panruti — for orders placed before 3 PM." },
      { question: "Do you have Chidambaram Nataraja and Akasha Lingam-themed cakes?", answer: "Yes! The Chidambaram Nataraja Temple (one of the five Pancha Bhuta Sthalams representing Space; the Akasha Lingam — the formless empty space itself enshrined behind a curtain of golden vilva leaves; Nataraja's Ananda Tandava cosmic dance of bliss; Chola-era 12th-13th century CE; Chidambara Rahasya — the secret of the empty space) inspires our most cosmically Akasha-empty and Nataraja-blissingly dancing Cuddalore fondant cakes." },
      { question: "Are eggless cakes available in Cuddalore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Cuddalore delivery." }
    ]
  },

  "virudhunagar": {
    cityName: "Virudhunagar",
    metaTitle: "Cake Delivery in Virudhunagar | Fireworks Capital Sivakasi Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Virudhunagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Virudhunagar",
    metaKeyword: "cake delivery virudhunagar, order cake online virudhunagar, birthday cake virudhunagar, custom cake virudhunagar, same day cake delivery virudhunagar Sivakasi Fireworks Capital India matchbox printing safety matches TNPL paper Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Virudhunagar — Sivakasi Fireworks Capital of India, Matchbox Industry, and South Tamil Nadu Trade Hub</h2>
<p>Virudhunagar — the district headquarters of Virudhunagar district in Tamil Nadu, home to one of India's most distinctive industrial clusters — the Sivakasi fireworks and matchbox industry (the Sivakasi town (in Virudhunagar district) is the "Fireworks Capital of India" (also "Chotta Japan" — Little Japan — for its industriousness); approximately 80-90% of India's firecrackers and sparklers are manufactured in Sivakasi and surrounding Virudhunagar district villages; the Sivakasi fireworks industry employs over 500,000 workers; Diwali sees enormous production cycles; the industry has faced significant child labour issues historically (now with stricter regulations); Sivakasi is also the "Matchbox Capital of India" — approximately 90% of India's safety matches are made here; the Sivakasi printing industry (offset printing, packaging, flexo) also has a significant national market share; the Veeran Sundaralingam Park, Kovilpatti (also in Virudhunagar district — Kovilpatti is famous for its kadalai mittai (peanut candy) and is a major commercial town); the Arulmigu Vairavar Kaliamman Temple at Virudhunagar; the Rajapalayam area (Virudhunagar — famous for the Rajapalayam dog breed (a native Indian dog — white, athletic, used for hunting and as guard dog; GI-recognized)), and a city of Diwali fireworks and 90% of India's matches — is Tamil Nadu's most pyrotechnically Sivakasi-dominant and matchbox-industrially capital district. From birthday parties in Virudhunagar to celebration cakes — RedHeart covers all Virudhunagar zones: Virudhunagar city, Sivakasi, Rajapalayam, Srivilliputhur, Aruppukkottai, Sattur, Kovilpatti.</p>
<p>Our Virudhunagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sivakasi Fireworks Diwali / Matchbox Industry / Rajapalayam Dog GI / Kovilpatti Kadalai Mittai-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Virudhunagar, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Virudhunagar city, Sivakasi, Rajapalayam, Srivilliputhur, Aruppukkottai, Sattur, Kovilpatti</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sivakasi Fireworks Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Virudhunagar?", answer: "Yes, same-day cake delivery is available across all Virudhunagar areas — Virudhunagar city, Sivakasi, Rajapalayam, Srivilliputhur, and Aruppukkottai — for orders placed before 3 PM." },
      { question: "Do you have Sivakasi Fireworks Capital India-themed cakes?", answer: "Yes! The Sivakasi Fireworks Capital (80-90% of India's crackers; 90% of India's safety matches; 'Chotta Japan' for industrial density; over 500,000 workers) inspires our most Diwali-pyrotechnically Sivakasi-crackling fondant cakes." },
      { question: "Are eggless cakes available in Virudhunagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Virudhunagar delivery." }
    ]
  },

  "namakkal": {
    cityName: "Namakkal",
    metaTitle: "Cake Delivery in Namakkal | Poultry Capital Lorry Body Hanuman Fort Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Namakkal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Namakkal",
    metaKeyword: "cake delivery namakkal, order cake online namakkal, birthday cake namakkal, custom cake namakkal, same day cake delivery namakkal Poultry Capital India lorry body building egg production Hanuman Rock Fort Tiruchengode Tamil Nadu",
    footerContent: `
<h2>Cake Delivery in Namakkal — Poultry Capital of India, Lorry Body Building Hub, and Namakkal Rock Fort</h2>
<p>Namakkal — the district headquarters of Namakkal district in Tamil Nadu, one of India's most specialised industrial districts — the "Poultry Capital of India" and the "Lorry Body Building Capital" (the Namakkal district produces approximately 30-40% of India's total egg production (over 1 billion eggs per month from the district's poultry farms); Namakkal is one of the world's significant egg-producing districts; the GI Namakkal Egg — the Tamil Nadu government has sought GI status for Namakkal eggs; the Namakkal poultry industry employs tens of thousands and has made the district one of Tamil Nadu's most economically prosperous rural districts; the Namakkal Lorry/Truck Body Building — Namakkal is also India's most significant lorry/truck body-building hub; hundreds of small and large fabrication units produce lorry bodies, trailers, and commercial vehicle bodies; the Namakkal trucks supply to transporters across India; there is a saying that "every fifth lorry on Indian roads has a body made in Namakkal"; the Namakkal Rock Fort (a 100-metre granite rock formation with the Namakkal Anjaneyar (Hanuman) Temple — one of the very few temples where Hanuman stands in a massive form as the primary deity on top of a rock; the Vishnu temple below the rock; the Namagiri Thayar (Lakshmi) Temple at the base is the same temple from which Ramanujan (the mathematical genius) said he received his mathematical visions in dreams)), and a city of egg production and lorry-building industry — is Tamil Nadu's most poultrily egg-producing-capital and lorry-body-building India-supplying district. From birthday parties in Namakkal to celebration cakes — RedHeart covers all Namakkal zones: Namakkal city, Rasipuram, Tiruchengode, Paramathi Velur, Senthamangalam.</p>
<p>Our Namakkal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Namakkal Rock Fort Hanuman / Namagiri Thayar Ramanujan Inspiration / Poultry Egg Capital / Lorry Body India-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Namakkal, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Namakkal city, Rasipuram, Tiruchengode, Paramathi Velur, Senthamangalam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Namakkal Rock Fort Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Namakkal?", answer: "Yes, same-day cake delivery is available across all Namakkal areas — Namakkal city, Rasipuram, Tiruchengode, Paramathi Velur, and Senthamangalam — for orders placed before 3 PM." },
      { question: "Do you have Namakkal Rock Fort Hanuman and Poultry Capital-themed cakes?", answer: "Yes! The Namakkal Rock Fort (100-metre granite; the massive standing Anjaneyar Hanuman Temple on top; the Namagiri Thayar temple at base — the goddess who inspired Ramanujan's mathematical visions in dreams) and the Poultry Capital (30-40% of India's eggs; 1 billion eggs/month; GI-aspiring Namakkal Egg) inspire our most Hanuman-rock-standingly tall and egg-billion-month-producing Namakkal fondant cakes." },
      { question: "Are eggless cakes available in Namakkal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Namakkal delivery." }
    ]
  },

  "karwar": {
    cityName: "Karwar",
    metaTitle: "Cake Delivery in Karwar | Rabindranath Tagore INS Kadamba Western Ghats Karnataka | RedHeart",
    metaDescription: "Order cakes online in Karwar (Uttara Kannada). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karwar (Uttara Kannada)",
    metaKeyword: "cake delivery karwar, order cake online karwar, birthday cake karwar, custom cake karwar, same day cake delivery karwar Rabindranath Tagore Kalinadi beaches INS Kadamba naval base Western Ghats Uttara Kannada Goa border Karnataka",
    footerContent: `
<h2>Cake Delivery in Karwar — Rabindranath Tagore's Inspirational Beaches, INS Kadamba, and Konkan-Western Ghats Biodiversity</h2>
<p>Karwar — the district headquarters of Uttara Kannada (North Kanara) district in Karnataka, a coastal city on the Arabian Sea at the mouth of the Kali River — one of Karnataka's most scenic coastal cities with deep literary and military significance (Karwar's beach and natural setting inspired Rabindranath Tagore who visited in 1882 (before his Nobel — he was 21) and wrote Prakriti Pratishodh (Nature's Revenge), a Bengali play set in the lush forests and waters of Karwar; the Tagore Beach in Karwar is named in his memory; the INS Kadamba (Project Seabird) — the Indian Navy's largest naval base being built near Karwar; INS Kadamba will be one of Asia's largest naval bases when complete, capable of berthing aircraft carriers; the construction started 1985, still expanding; the Western Ghats (Sahyadri) in the Uttara Kannada district are among the richest biodiversity zones in the world — a UNESCO Natural Heritage site as part of the Western Ghats; the Dandeli Wildlife Sanctuary and Anshi National Park (Kali Tiger Reserve); the unique ecology where Western Ghats (over 100 species endemic; lion-tailed macaques; Malabar pied hornbills) meets the Arabian Sea coastline; the Karwar-Goa border; the Devgad-Majali beaches; Kali River rapids for white-water rafting at Dandeli), and a city of Tagore's inspiration and India's largest upcoming naval base — is Karnataka's most coastally Arabian-Sea-tagore-inspired and naval-INS Kadamba-largest district. From birthday parties in Karwar to celebration cakes — RedHeart covers all Karwar zones: Karwar city, Ankola, Kumta, Honnavar, Bhatkal, Sirsi, Siddapur, Dandeli, Yellapur.</p>
<p>Our Karwar cake range: Chocolate, Black Forest, Red Velvet, Mango (coastal!), Butterscotch, Photo Cakes, Fondant Tagore Beach Karwar / INS Kadamba Naval Base / Kali Tiger Reserve Dandeli / Kalinadi Coast-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karwar (Uttara Kannada), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karwar city, Ankola, Kumta, Honnavar, Bhatkal, Sirsi, Siddapur, Dandeli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tagore Beach Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karwar?", answer: "Yes, same-day cake delivery is available across all Karwar areas — Karwar city, Ankola, Kumta, Honnavar, Bhatkal, Sirsi, and Dandeli — for orders placed before 3 PM." },
      { question: "Do you have Rabindranath Tagore and INS Kadamba-themed cakes?", answer: "Yes! Rabindranath Tagore visited Karwar in 1882 at age 21 and was so inspired by its beaches and forests that he wrote the Bengali play Prakriti Pratishodh (Nature's Revenge) — the Tagore Beach is named in his memory; the INS Kadamba (Project Seabird — one of Asia's largest naval bases under expansion, capable of berthing aircraft carriers) inspires our most literarily Tagore-inspired-at-21 and navally largest-in-Asia Karwar fondant cakes." },
      { question: "Are eggless cakes available in Karwar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Karwar delivery." }
    ]
  },

  "madikeri": {
    cityName: "Madikeri",
    metaTitle: "Cake Delivery in Madikeri Kodagu | Coorg Coffee Estate GI Karnataka | RedHeart",
    metaDescription: "Order cakes online in Madikeri (Kodagu/Coorg). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Madikeri (Kodagu / Coorg)",
    metaKeyword: "cake delivery madikeri kodagu coorg, order cake online madikeri, birthday cake kodagu madikeri, custom cake madikeri, same day cake delivery madikeri GI Coorg Coffee Kodava Kailpodh Talakaveri Kaveri origin Abbey Falls Namdroling Golden Temple Karnataka",
    footerContent: `
<h2>Cake Delivery in Madikeri (Kodagu/Coorg) — GI Coorg Coffee, Kaveri River Origin, Kodava Martial Culture, and Namdroling Golden Temple</h2>
<p>Madikeri (Mercara) — the district headquarters of Kodagu district in Karnataka (Kodagu is also called Coorg — a high-altitude district in the Western Ghats), one of India's most scenic and unique districts — the "Scotland of India" and coffee capital (the Kodagu/Coorg district is one of India's most important coffee-growing regions; the GI Coorg Coffee (Arabica and Robusta); Coorg is known for its high-altitude shade-grown coffee estates; the Coorg coffee is exported globally and is among India's finest coffees; the Kaveri River (Cauvery) — India's Ganga of the South — originates at Talakaveri (1,276 m altitude in the Brahmagiri Hills in Kodagu district; Talakaveri is a sacred pilgrimage site and the spring that bubbles up on Tula Sankramana (October) is believed to be the goddess Kaveri manifesting; the Kaveri then flows through Kodagu to become one of the largest rivers of South India); the Kodava community — the indigenous Kodava people are a unique martial, rice-paddy-cultivating community (they had the right to bear arms by royal decree, a right that continued even under the British and the Indian Constitution under Arms Act exceptions); the Kodava wear a distinctive costume (kachche, yele-kumme kuppe); the Kailpodh festival (the annual weapons worship festival); the Namdroling Monastery (Bylakuppe — near Madikeri; the Tibetan refugee colony with the Golden Temple (Namdroling Nyingmapa monastery) — one of the largest Nyingma Buddhist monasteries outside Tibet; three large golden-roofed temples with massive Buddhist statues); Abbey Falls (30 metre waterfall in a coffee estate); Dubare elephant camp), and a city of GI Coorg Coffee and Kaveri River Origin — is Karnataka's most coffee-GI-shade-grown and Kaveri-sacredly originating and Kodava-martially weapons-worshipping district. From birthday parties in Madikeri to celebration cakes — RedHeart covers all Kodagu zones: Madikeri, Virajpet, Somwarpet, Kushalnagar, Gonikoppal, Ponnampet, Bylakuppe.</p>
<p>Our Madikeri cake range: Chocolate, Coffee (GI Coorg!), Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Namdroling Golden Temple Buddhist / Talakaveri Kaveri Origin / Kodava Kailpodh Weapons / Coorg Coffee Estate-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madikeri (Kodagu / Coorg), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madikeri, Virajpet, Somwarpet, Kushalnagar, Gonikoppal, Ponnampet, Bylakuppe</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">GI Coorg Coffee Cake, Chocolate, Namdroling Golden Temple Fondant, Talakaveri Kaveri Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Madikeri (Kodagu)?", answer: "Yes, same-day cake delivery is available across all Kodagu areas — Madikeri, Virajpet, Somwarpet, Kushalnagar, Gonikoppal, Ponnampet, and Bylakuppe — for orders placed before 3 PM." },
      { question: "Do you have GI Coorg Coffee Cake and Namdroling Golden Temple-themed cakes?", answer: "Yes! The GI Coorg Coffee (high-altitude shade-grown Arabica-Robusta from Kodagu estates — among India's finest exported coffees) and the Namdroling Monastery Golden Temple (Bylakuppe — largest Nyingma Buddhist monastery outside Tibet; three gold-roofed temples; massive Buddha statues; Tibetan refugee colony) inspire our most coffee-GI-shade-grown and Buddhist-golden-roofedly Tibetan Kodagu fondant cakes." },
      { question: "Are eggless cakes available in Madikeri?", answer: "Yes, all flavours — Chocolate, Coffee, Black Forest, Red Velvet, Mango — are available in eggless variants for Madikeri (Kodagu) delivery." }
    ]
  },

  "raichur": {
    cityName: "Raichur",
    metaTitle: "Cake Delivery in Raichur | Raichur Fort Tungabhadra NTPC Power Karnataka | RedHeart",
    metaDescription: "Order cakes online in Raichur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Raichur",
    metaKeyword: "cake delivery raichur, order cake online raichur, birthday cake raichur, custom cake raichur, same day cake delivery raichur Raichur Fort Tughlaq Bahmani Vijayanagara Tungabhadra NTPC thermal power Kalyana Karnataka Telangana border",
    footerContent: `
<h2>Cake Delivery in Raichur — Raichur Fort's Battle of Empires, NTPC Thermal Power, and Tungabhadra-Krishna Doab</h2>
<p>Raichur — the district headquarters of Raichur district in Karnataka (historically part of Hyderabad State before reorganisation into Karnataka), a significant historical and energy-sector city — located between the Krishna and Tungabhadra rivers (the Raichur Doab — the fertile land between the Krishna and Tungabhadra rivers — was one of the most contested territories in medieval South Indian history; the Raichur Fort (built 13th century CE; changed hands among the Kakatiyas, Delhi Sultanate (Muhammad bin Tughlaq captured 1323), Bahmani Sultanate, and the Vijayanagara Empire; the Battle of Raichur (1520 CE) — Krishnadevaraya of the Vijayanagara Empire (the most powerful South Indian king of his era — patron of eight poets, Telugu scholar, author of Amuktamalyada) defeated the Bidar Sultanate (Ismail Adil Shah) and captured Raichur; this was one of the decisive battles of the Vijayanagara Empire's expansion; the fort changed hands multiple times until it permanently became Nizamate territory); the NTPC Raichur Thermal Power Station (RTPS — Raichur Thermal Power Station; one of Karnataka's primary coal-based power plants, 1,720 MW capacity; located on the Tungabhadra; an important contributor to Karnataka's electricity); the Tungabhadra-Krishna doab agriculture (cotton and jowar); the Yelburga and Manvi taluk areas; the Lingasugur area with its medieval remains), and a city of medieval imperial battles and NTPC energy sector — is Karnataka's most imperially Vijayanagara-battle-Krishnadevaraya and thermal-NTPC-poweringly Tungabhadra district. From birthday parties in Raichur to celebration cakes — RedHeart covers all Raichur zones: Raichur city, Lingasugur, Sindhanur, Manvi, Devadurga, Yelburga.</p>
<p>Our Raichur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raichur, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raichur city, Lingasugur, Sindhanur, Manvi, Devadurga, Yelburga</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Raichur?", answer: "Yes, same-day cake delivery is available across all Raichur areas — Raichur city, Lingasugur, Sindhanur, Manvi, Devadurga, and Yelburga — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Raichur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Raichur delivery." },
      { question: "Do you deliver midnight cakes in Raichur?", answer: "Yes, midnight birthday cake delivery is available across Raichur city and surrounding zones." }
    ]
  },

  "gadag": {
    cityName: "Gadag",
    metaTitle: "Cake Delivery in Gadag | GI Gadag Bettageri Cotton Chalukya Temples Karnataka | RedHeart",
    metaDescription: "Order cakes online in Gadag. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gadag",
    metaKeyword: "cake delivery gadag, order cake online gadag, birthday cake gadag, custom cake gadag, same day cake delivery gadag Gadag Bettageri GI cotton Chalukya Western Chalukya Tri Kuta Brahma temple Lakkundi Karnataka North",
    footerContent: `
<h2>Cake Delivery in Gadag — GI Gadag Cotton, Western Chalukya Temples at Lakkundi, and North Karnataka's Cultural Centre</h2>
<p>Gadag — the district headquarters of Gadag district in Karnataka (the twin city of Gadag-Bettageri), home to one of India's most underrated collections of ancient temple architecture (the Western Chalukya temple cluster at Lakkundi (Lakshmeshwara) in Gadag district — the Kasivisvesvara temple (11th-12th century CE) and Brahma Jinalaya at Lakkundi are exquisite examples of the Western Chalukya/Kalyani Chalukya architecture style (also called the Gadag Style of temple architecture, characterized by extremely intricate lathe-turned pillars, star-shaped plan, and richly decorated outer walls; the Gadag Style is one of the most refined expressions of Deccan temple architecture; it is distinct from the more famous Hoysala style though both are from Karnataka); the Tri Kuta Brahma temple at Gadag town (a triple-shrined Brahma temple — one of very few temples dedicated to Brahma in Karnataka); the GI Gadag Bettageri Cotton (the fine cotton cloth woven in the Gadag-Bettageri area — a handloom cotton known for its distinctive texture); the Gadag-Bettageri are twin cities on the Hubli-Hospet railway; Kuknoor and Ron areas in Gadag district have additional Chalukya remains), and a city of Western Chalukya lathe-turned pillar temple art — is Karnataka's most Chalukya-Gadag style architecturally intricate and Brahma-triply shrined temple district. From birthday parties in Gadag to celebration cakes — RedHeart covers all Gadag zones: Gadag, Bettageri, Ron, Shirahatti, Nargund, Mundargi, Lakshmeshwara (Lakkundi).</p>
<p>Our Gadag cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Lakkundi Chalukya Temple / Tri Kuta Brahma Gadag / Gadag Style Star-Plan Architecture / GI Cotton-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gadag, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gadag, Bettageri, Ron, Shirahatti, Nargund, Mundargi, Lakkundi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Lakkundi Chalukya Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gadag?", answer: "Yes, same-day cake delivery is available across all Gadag areas — Gadag, Bettageri, Ron, Shirahatti, Nargund, Mundargi, and Lakkundi — for orders placed before 3 PM." },
      { question: "Do you have Lakkundi Western Chalukya Temple-themed cakes?", answer: "Yes! The Lakkundi Western Chalukya temple cluster (Kasivisvesvara and Brahma Jinalaya — 11th-12th century CE; the Gadag Style of intricate lathe-turned pillars and star-shaped plan; one of the most refined Deccan temple architectural styles, distinct from Hoysala but equally exquisite) inspires our most Chalukya-lathe-turned-pillar and star-plan-architecturally intricate Gadag fondant cakes." },
      { question: "Are eggless cakes available in Gadag?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gadag delivery." }
    ]
  },

  "satna": {
    cityName: "Satna",
    metaTitle: "Cake Delivery in Satna | Cement City Bharhut Stupa White Tiger MP | RedHeart",
    metaDescription: "Order cakes online in Satna. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Satna",
    metaKeyword: "cake delivery satna, order cake online satna, birthday cake satna, custom cake satna, same day cake delivery satna Cement City Madhya Pradesh Bharhut Stupa Buddhist Vindhyas limestone Maihar Devi Chitrakoot adjacent MP",
    footerContent: `
<h2>Cake Delivery in Satna — Cement Capital of MP, Bharhut Buddhist Stupa, and Gateway to Vindhyas</h2>
<p>Satna — the district headquarters of Satna district in Madhya Pradesh, one of India's most important cement-producing regions — the "Cement Capital of Madhya Pradesh" (the Satna district has enormous limestone reserves in the Vindhyan plateau — the Vindhya range's extensive limestone deposits make Satna one of the highest cement-producing districts in India; multiple large cement plants (ACC, Prism Cement, J.P. Group) operate in the Satna-Rewa-Maihar corridor; the Bharhut Stupa (near Satna) — one of India's most important ancient Buddhist sites; the Bharhut Stupa (2nd century BCE, Shunga period) was discovered by Alexander Cunningham in 1873; the remarkably well-preserved railings (vedhika) and gateways of the stupa are now in the Indian Museum Kolkata — they are among India's earliest narrative sculptural reliefs depicting Jataka stories; the stupa itself is now largely demolished; the Maihar (Satna district) — home to the Maihar Devi (Mata Sharda Devi Temple on Trikuta hill — a significant pilgrimage site; the legend of Alha and Udal (the Bundela warriors who worshipped here is significant); the Chitrakoot (Lord Rama's exile forest — 11.5 years lived here; Mandakini River; many temples; adjacent to Satna/Chitrakoot district); the Satna River), and a city of cement industry and Bharhut Buddhist heritage — is Madhya Pradesh's most cementily limestone-largest and Shunga-Buddhist-narratively carved district. From birthday parties in Satna to celebration cakes — RedHeart covers all Satna zones: Satna city, Maihar, Rewa adjacent, Nagod, Raghurajnagar, Amarpatan, Unchehara.</p>
<p>Our Satna cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Satna, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Satna city, Maihar, Nagod, Raghurajnagar, Amarpatan, Unchehara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Satna?", answer: "Yes, same-day cake delivery is available across all Satna areas — Satna city, Maihar, Nagod, Raghurajnagar, and Amarpatan — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Satna?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Satna delivery." },
      { question: "Do you deliver midnight cakes in Satna?", answer: "Yes, midnight birthday cake delivery is available across Satna city and Maihar zones." }
    ]
  },

  "chhindwara": {
    cityName: "Chhindwara",
    metaTitle: "Cake Delivery in Chhindwara | Kamal Nath Satpura Tiger Reserve Coal MP | RedHeart",
    metaDescription: "Order cakes online in Chhindwara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chhindwara",
    metaKeyword: "cake delivery chhindwara, order cake online chhindwara, birthday cake chhindwara, custom cake chhindwara, same day cake delivery chhindwara Kamal Nath Satpura Pench Tiger Reserve coal Chhindwara orange soybean Madhya Pradesh Nagpur",
    footerContent: `
<h2>Cake Delivery in Chhindwara — Kamal Nath's District, Satpura-Pench Tiger Corridor, and Orange-Soybean Agriculture</h2>
<p>Chhindwara — the district headquarters of Chhindwara district in Madhya Pradesh (the largest district in Madhya Pradesh by area — 11,815 sq km), a politically significant, forest-rich, and agricultural district — the political stronghold of Kamal Nath (the Chhindwara district is particularly associated with the veteran Congress leader Kamal Nath — former Chief Minister of MP and former Union Minister; Chhindwara has been a Congress stronghold for decades largely due to Kamal Nath's intense personal political investment and development initiatives; the Kamal Nath-Chhindwara connection has shaped the district's road infrastructure, medical facilities, and industrial development significantly); the Satpura Range and Pench Tiger Reserve (the district borders the Pench National Park — famous for Jungle Book inspiration: Rudyard Kipling's fictional Seeonee hills in The Jungle Book were the Seoni/Sioni hills adjacent to Chhindwara; Mowgli's story is set in these forests; the Pench Tiger Reserve straddles MP-Maharashtra border; the Satpura Tiger Reserve in the adjacent district has one of the highest tiger densities; the Chhindwara Plateau (1,000-1,300 m altitude) grows oranges (Nagpur Orange-adjacent belt), wheat, soybean; the Halon coal belt; the Tamia hill station (45 km from Chhindwara — scenic Satpura hills)), and a city of Jungle Book forests and orange plateau agriculture — is Madhya Pradesh's most Kipling-Mowgli-Pench-forest-adjacent and orange-soybean plateau district. From birthday parties in Chhindwara to celebration cakes — RedHeart covers all Chhindwara zones: Chhindwara city, Sausar, Pandhurna, Amarwara, Chaurai, Tamia, Harrai.</p>
<p>Our Chhindwara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Orange, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhindwara, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhindwara city, Sausar, Pandhurna, Amarwara, Chaurai, Tamia, Harrai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Orange, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chhindwara?", answer: "Yes, same-day cake delivery is available across all Chhindwara areas — Chhindwara city, Sausar, Pandhurna, Amarwara, Chaurai, and Tamia — for orders placed before 3 PM." },
      { question: "Do you have Jungle Book Pench Tiger Reserve-themed cakes?", answer: "Yes! The Pench Tiger Reserve (adjacent to Chhindwara — the fictional Seeonee hills of Rudyard Kipling's The Jungle Book, where Mowgli's story is set; one of India's finest tiger habitats straddling the MP-Maharashtra border) inspires our most Mowgli-Seeonee-jungle and tiger-prowlingly Pench fondant cakes." },
      { question: "Are eggless cakes available in Chhindwara?", answer: "Yes, all flavours — Chocolate, Orange, Mango, Black Forest, Red Velvet — are available in eggless variants for Chhindwara delivery." }
    ]
  },

  "vidisha": {
    cityName: "Vidisha",
    metaTitle: "Cake Delivery in Vidisha | Sanchi Stupa UNESCO Buddhist Heliodorus Madhya Pradesh | RedHeart",
    metaDescription: "Order cakes online in Vidisha. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vidisha",
    metaKeyword: "cake delivery vidisha, order cake online vidisha, birthday cake vidisha, custom cake vidisha, same day cake delivery vidisha Sanchi Stupa UNESCO Ashokan Buddhist Heliodorus Pillar Udayagiri Caves Guptas Madhya Pradesh",
    footerContent: `
<h2>Cake Delivery in Vidisha — UNESCO Sanchi Stupa, Heliodorus Garuda Pillar, and Gupta-Era Udayagiri Caves</h2>
<p>Vidisha — the district headquarters of Vidisha district in Madhya Pradesh, home to one of the most extraordinary concentrations of ancient monuments in India — UNESCO's Sanchi and the Heliodorus Pillar (the Sanchi (10 km from Vidisha) — the Great Stupa at Sanchi; the oldest stone monument in India; built by Emperor Ashoka (3rd century BCE); the four remarkable gateways (toranas) with narrative Buddhist relief carvings (Jataka stories, the life of Buddha depicted without showing his face — aniconic tradition) added by the Satavahanas (1st century BCE-1st century CE); the Great Stupa dome contains the relics of Buddha's disciples; UNESCO World Heritage Site 1989 — listed among India's most important archaeological sites; Sanchi was lost to history and rediscovered by a British officer in 1818; the original Buddhist inscriptions include the only known inscription mentioning Ashoka by his personal name "Devanampiya Piyadasi"); the Heliodorus Pillar (near Vidisha) — erected circa 113 BCE by Heliodorus, a Greek ambassador from Taxila to the Shunga court; the pillar inscription is the earliest known Sanskrit-language inscription and one of the first non-Indian (Greek) testimonies to Vaishnava Hinduism (the pillar dedicated to Vasudeva-Krishna); it represents one of the earliest known conversion to Hinduism from outside the subcontinent; the Udayagiri Caves (6 km from Vidisha — 20 rock-cut caves; 5th century CE Gupta period; the famous Varaha (Boar) avatar panel where Vishnu as a cosmic boar rescues Bhudevi (Earth) is one of India's greatest Gupta sculptural masterpieces; the cave contains a Gupta-era inscription naming Chandragupta II), and a city of Sanchi UNESCO and Heliodorus Greek-Vaishnavism — is Madhya Pradesh's most Ashokan UNESCO-Buddhist and Greek-ambassador Heliodorus Vaishnava distinctly convergent district. From birthday parties in Vidisha to celebration cakes — RedHeart covers all Vidisha zones: Vidisha city, Sanchi, Sironj, Lateri, Ganj Basoda, Kurwai.</p>
<p>Our Vidisha cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sanchi UNESCO Stupa / Heliodorus Greek Pillar / Udayagiri Varaha Gupta Cave / Ashokan Buddhist-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vidisha, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vidisha city, Sanchi, Sironj, Lateri, Ganj Basoda, Kurwai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sanchi Stupa UNESCO Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vidisha?", answer: "Yes, same-day cake delivery is available across all Vidisha areas — Vidisha city, Sanchi, Sironj, Lateri, and Ganj Basoda — for orders placed before 3 PM." },
      { question: "Do you have Sanchi UNESCO Stupa and Heliodorus Pillar-themed cakes?", answer: "Yes! The Sanchi Great Stupa (UNESCO 1989 — India's oldest stone monument; Ashoka 3rd century BCE; four remarkable aniconic Jataka-carved toranas added by Satavahanas; relics of Buddha's disciples; rediscovered 1818) and the Heliodorus Pillar (113 BCE — a Greek ambassador from Taxila who converted to Vaishnavism; the earliest Sanskrit inscription; one of the first non-Indian testimonies to Krishna worship) inspire our most Ashokan-Buddhist-UNESCO and Greek-Vaishnavism-convergingly unique Vidisha fondant cakes." },
      { question: "Are eggless cakes available in Vidisha?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Vidisha delivery." }
    ]
  },

  "hoshangabad": {
    cityName: "Hoshangabad",
    metaTitle: "Cake Delivery in Hoshangabad Narmadapuram | Narmada Satpura Reserve MP | RedHeart",
    metaDescription: "Order cakes online in Hoshangabad (Narmadapuram). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hoshangabad (Narmadapuram)",
    metaKeyword: "cake delivery hoshangabad narmadapuram, order cake online hoshangabad, birthday cake hoshangabad, custom cake narmadapuram, same day cake delivery hoshangabad Narmada River Tawa Dam Satpura Tiger Reserve Pachmarhi Biosphere Reserve Madhya Pradesh",
    footerContent: `
<h2>Cake Delivery in Hoshangabad (Narmadapuram) — Narmada River Sacred Ghats, Tawa Dam, Satpura Tiger Reserve, and Pachmarhi UNESCO Biosphere</h2>
<p>Hoshangabad (now officially renamed Narmadapuram in 2021) — the district headquarters of Narmadapuram district in Madhya Pradesh, one of Madhya Pradesh's most scenically and ecologically diverse districts — sitting on the banks of the Narmada (the Narmada River at Hoshangabad — a magnificent sacred ghat on the Narmada (the Rewa, Rewa Narmada); the Narmada is considered the most sacred river in the Deccan/Central India; the Narmada Parikrama (the 2,600 km circumambulation of the Narmada — starting and ending at Amarkantak; takes 3-4 years on foot; one of Hinduism's great pilgrimage journeys) passes through Hoshangabad ghats; the Tawa Dam (the Tawa Dam and Reservoir — one of Madhya Pradesh's largest dams; the Tawa Reservoir at 2,000+ sq km is one of India's largest man-made lakes; the Tawa connects to the Narmada and was the site of a significant fisheries cooperative movement (the displaced tribal fisher communities who lost their fisheries rights campaigned and won them back — an important grassroots environmental justice movement in India)); the Satpura Tiger Reserve (Pachmarhi zone — the Satpura range; the Pachmarhi (UNESCO Biosphere Reserve, 1999) is Madhya Pradesh's only hill station at 1,067 m; the Bee Falls, Pandav Caves (Buddhist/Hindu; naturally hewn in red sandstone), Priyadarshini Point, Duchess Falls; the Pachmarhi Biosphere encompasses Satpura Tiger Reserve and Bori Wildlife Sanctuary); the Security Paper Mill (Hoshangabad SPM — prints security documents, bank notes paper for the Government of India)), and a city of sacred Narmada ghats and Pachmarhi UNESCO forest — is Madhya Pradesh's most Narmada-sacredly ghat-flowing and Satpura-UNESCO biosphericly tiger-reserved district. From birthday parties in Hoshangabad to celebration cakes — RedHeart covers all Hoshangabad zones: Hoshangabad (Narmadapuram) city, Itarsi, Pachmarhi, Pipariya, Sohagpur, Babai.</p>
<p>Our Hoshangabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Narmada Ghat Hoshangabad / Pachmarhi UNESCO Hill Station / Tawa Dam Reservoir / Satpura Tiger Reserve Pandav Cave-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hoshangabad (Narmadapuram), Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hoshangabad city, Itarsi, Pachmarhi, Pipariya, Sohagpur, Babai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Narmada Ghat Fondant, Pachmarhi Hill Station Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hoshangabad (Narmadapuram)?", answer: "Yes, same-day cake delivery is available across all Hoshangabad areas — Hoshangabad city, Itarsi, Pachmarhi, Pipariya, Sohagpur, and Babai — for orders placed before 3 PM." },
      { question: "Do you have Narmada Ghat and Pachmarhi UNESCO Biosphere-themed cakes?", answer: "Yes! The Narmada River at Hoshangabad (a sacred ghat on the river; the Narmada Parikrama 2,600 km circumambulation pilgrimage journey passes here) and Pachmarhi (UNESCO Biosphere Reserve 1999; MP's only hill station at 1,067 m; Bee Falls, Pandav Caves, Satpura Tiger Reserve) inspire our most Narmada-sacredly flowing and Pachmarhi-UNESCO biospherically forested Hoshangabad fondant cakes." },
      { question: "Are eggless cakes available in Hoshangabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hoshangabad (Narmadapuram) delivery." }
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
