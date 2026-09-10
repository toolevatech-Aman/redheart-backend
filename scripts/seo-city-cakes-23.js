// Cakes Batch 23 — 15 cities:
// UP: Sambhal, Balrampur, Pilibhit
// Bihar: Kaimur (Bhabua), Jehanabad
// Odisha: Nuapada, Rayagada
// Telangana: Vikarabad, Kamareddy
// Rajasthan: Jhalawar, Baran
// Assam: Hailakandi, Nalbari
// Manipur: Bishnupur
// Tripura: Dharmanagar

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "sambhal": {
    cityName: "Sambhal",
    metaTitle: "Cake Delivery in Sambhal | Brass Craft Western UP | RedHeart",
    metaDescription: "Order cakes online in Sambhal. Same-day delivery across Sambhal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sambhal",
    metaKeyword: "cake delivery sambhal, order cake online sambhal, birthday cake sambhal, custom cake sambhal, same day cake delivery sambhal brass craft horn comb buffalo rampur road moradabad road",
    footerContent: `
<h2>Cake Delivery in Sambhal — India's Horn & Bone Craft Capital, Buffalo Horn Comb City, and Western UP's Trading Hub</h2>
<p>Sambhal — the headquarters of Sambhal district in Uttar Pradesh (recently elevated to a district in 2011 from Moradabad), a city of unique artisanal industrial fame (Sambhal is India's largest manufacturer of horn and bone products — the artisan community of Sambhal produces 90% of India's horn combs, bone hair combs, and buffalo horn accessories; the craft uses horn and bone from the slaughterhouse industry, transforming waste material into finely crafted combs, buttons, bangles, and decorative items exported to Europe, USA, and Southeast Asia; additionally, Sambhal has significant production of imitation jewellery (Sambhal imitation jewellery is exported to the Gulf countries and USA) and rosewood/sandalwood products; the Sambhal artisan clusters around the old city are a living example of India's traditional manufacturing heritage), home to the Kalki Temple complex (Sambhal is mentioned in the Puranas as the future birthplace of Kalki — the 10th and final avatar of Vishnu who will appear at the end of the Kali Yuga; the Kalki Vishnu temple is one of Sambhal's main sacred sites), and a city with a significant Muslim artisan population (the horn, comb, and imitation jewellery artisans are predominantly Muslim craftspeople from the Ansari and Siddiqui communities) — is a city of unique craft identity. From birthday parties in the Civil Lines area to corporate cakes at the large horn craft export firms, from anniversary surprises near the Moradabad Road to student cakes at Sambhal's colleges — RedHeart covers all Sambhal zones: Central (Civil Lines, Station Road, Moradabad Road), North (Chandausi, Asmoli, Gunnaur), South (Badaun Road, Rajpura, Pawansa), East (Moradabad border, Bilari), West (Rampur border, Bahjoi).</p>
<p>Our Sambhal cake range: Chocolate, Black Forest, Red Velvet, Mango (Awadhi Langra!), Butterscotch, Photo Cakes, Fondant Sambhal Horn Craft / Kalki Vishnu-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sambhal, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Moradabad Road, Chandausi, Asmoli, Bahjoi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sambhal?", answer: "Yes, same-day cake delivery is available across all Sambhal areas — Civil Lines, Station Road, Moradabad Road, and Chandausi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sambhal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sambhal delivery." },
      { question: "Do you deliver midnight cakes in Sambhal?", answer: "Yes, midnight birthday cake delivery is available across Sambhal's central and residential zones." }
    ]
  },

  "balrampur": {
    cityName: "Balrampur",
    metaTitle: "Cake Delivery in Balrampur | Shravasti Border Nepal UP | RedHeart",
    metaDescription: "Order cakes online in Balrampur. Same-day delivery across Balrampur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Balrampur",
    metaKeyword: "cake delivery balrampur, order cake online balrampur, birthday cake balrampur, custom cake balrampur, same day cake delivery balrampur shravasti nepal border terai raj family gonda road sitapur road",
    footerContent: `
<h2>Cake Delivery in Balrampur — Royal Estate Town, Nepal Terai Border, and Buddha Circuit's Shravasti Gateway</h2>
<p>Balrampur — the headquarters of Balrampur district in Uttar Pradesh's eastern Terai region, a district with noble heritage and Buddhist pilgrimage connectivity (Balrampur town was the seat of the Balrampur Estate — one of UP's largest zamindari estates; the Balrampur Raj (royal family) was one of the most powerful zamindar families in the eastern UP region during the British era; the estate had significant landholdings and the Balrampur Maharajas were known patrons of education and culture; the Balrampur state played a significant role in financing India's freedom movement; close to Shravasti — the city of Buddha's 25-year residence (accessed from the Balrampur-Shravasti district border), which is one of Buddhism's most sacred sites; the Balrampur-Shravasti-Nepal border corridor is important on the Buddhist circuit; Nepal's Kapilvastu district is directly accessible from Balrampur), a district in the Rapti-Ghagra river flood plains (the Rapti River passes through Balrampur district, with fertile agricultural land producing rice, wheat, sugarcane, and maize; the district is flood-prone but agriculturally productive), and bordering Nepal's Rupandehi and Kapilvastu districts — is a city of zamindari heritage and Buddhist proximity. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from anniversary surprises near the Gonda Road to student cakes at Balrampur's colleges — RedHeart covers all Balrampur zones: Central (Civil Lines, Station Road, Gonda Road), North (Nepal border, Tulsipur, Utraula), South (Gonda border, Shravasti Road, Pachperwa), East (Siddharthnagar border, Gonda Road), West (Sitapur border, Rehar).</p>
<p>Our Balrampur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Balrampur Estate / Buddhist Circuit-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balrampur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gonda Road, Nepal border, Tulsipur, Utraula</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Balrampur?", answer: "Yes, same-day cake delivery is available across all Balrampur areas — Civil Lines, Station Road, Gonda Road, Tulsipur, and Utraula — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Balrampur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Balrampur delivery." },
      { question: "Do you deliver midnight cakes in Balrampur?", answer: "Yes, midnight birthday cake delivery is available across Balrampur's central and residential zones." }
    ]
  },

  "pilibhit": {
    cityName: "Pilibhit",
    metaTitle: "Cake Delivery in Pilibhit | Tiger Reserve Flute City UP | RedHeart",
    metaDescription: "Order cakes online in Pilibhit. Same-day delivery across Pilibhit. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pilibhit",
    metaKeyword: "cake delivery pilibhit, order cake online pilibhit, birthday cake pilibhit, custom cake pilibhit, same day cake delivery pilibhit tiger reserve flute musical instrument nepal border terai bareilly road",
    footerContent: `
<h2>Cake Delivery in Pilibhit — Pilibhit Tiger Reserve, India's Flute Capital, and Nepal's Terai Border Forest</h2>
<p>Pilibhit — the headquarters of Pilibhit district in Uttar Pradesh's Terai region, a city of wildlife, musical craft, and natural beauty (the Pilibhit Tiger Reserve — established as a tiger reserve in 2014 — is one of India's newer tiger reserves, covering the Terai forests and grasslands of the Sharda and Khakra river systems; Pilibhit's Terai forests (part of the larger Terai Arc Landscape connecting Corbett, Dudhwa, Chitwan, and Bardia) are one of India's most important tiger-elephant corridors; the reserve has a recovering tiger population; the Terai forests surrounding Pilibhit are also home to swamp deer (barasingha), hog deer, leopards, otters, and the critically endangered hispid hare; and Pilibhit is India's flute (bansuri) manufacturing capital — the bamboo flute tradition of Pilibhit, using local Terai bamboo, produces a significant proportion of India's classical and folk bamboo flutes; the bansuri artisans of Pilibhit supply to music stores and musicians across India; the Pilibhit Museum also displays local history), and a city with a significant Sikh pilgrimage: the Gurudwara Nanakmatta Sahib (where Guru Nanak Dev Ji is said to have rested under a mango tree which bent down in reverence) is in Nanakmatta, Pilibhit district — a major Sikh pilgrimage site — is a district of forests, music, and spirituality. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from anniversary surprises near the Bareilly Road to student cakes at Pilibhit's colleges — RedHeart covers all Pilibhit zones: Central (Civil Lines, Station Road, Bareilly Road), North (Nepal border, Nanakmatta, Puranpur), South (Bareilly border, Bisalpur, Amariya), East (Lakhimpur border, Barkhera), West (Shahjahanpur Road, Noorpur, Bilsanda).</p>
<p>Our Pilibhit cake range: Chocolate, Black Forest, Red Velvet, Mango (Terai special!), Butterscotch, Photo Cakes, Fondant Pilibhit Tiger / Bansuri Flute-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pilibhit, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Bareilly Road, Nanakmatta, Puranpur, Bisalpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Pilibhit Tiger Fondant, Bansuri Flute Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pilibhit?", answer: "Yes, same-day cake delivery is available across all Pilibhit areas — Civil Lines, Station Road, Bareilly Road, Nanakmatta, and Puranpur — for orders placed before 3 PM." },
      { question: "Do you have Pilibhit Tiger Reserve / Bansuri Flute-themed cakes?", answer: "Yes! Pilibhit Tiger Reserve — one of India's newest tiger reserves in the Terai forests — and the bansuri bamboo flute craft that makes Pilibhit India's flute capital inspire our Tiger and Bansuri fondant cakes. Unique Terai local identity on your birthday cake." },
      { question: "Are eggless cakes available in Pilibhit?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pilibhit delivery." }
    ]
  },

  "kaimur": {
    cityName: "Kaimur",
    metaTitle: "Cake Delivery in Kaimur | Karamnasa Waterfall Bihar | RedHeart",
    metaDescription: "Order cakes online in Kaimur. Same-day delivery across Kaimur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kaimur",
    metaKeyword: "cake delivery kaimur bhabua, order cake online kaimur, birthday cake kaimur, custom cake kaimur, same day cake delivery kaimur bhabua karamnasa waterfall vindhya range UP border jharkhand border chandrakup",
    footerContent: `
<h2>Cake Delivery in Kaimur — Karamnasa Waterfall District, Vindhya Range's Eastern End, and Bihar's Tri-State Corner</h2>
<p>Kaimur — the headquarters of Kaimur district in Bihar (the district HQ is Bhabua), the westernmost district of Bihar at the junction of three states (Kaimur district borders Uttar Pradesh to the north and west and Jharkhand to the south — making it Bihar's tri-state corner district; the Kaimur Hills — the eastern extension of the Vindhya Range — run through the district; the Kaimur plateau at 250–450 metres has forests, waterfalls, and wildlife), famous for the Telhar and Karamnasa waterfalls (the Karamnasa River, which flows through Kaimur and is considered the "Curse River" in Hindu mythology — because touching its water is said to undo the fruits of all good deeds — gives the district a unique mythological identity; the Banjari (Chandrakup) spring and the Devsand waterfall and Kolhua temple are scenic and religious attractions in the Kaimur hills; the Kaimur Wildlife Sanctuary, covering 1,342 sq km of the Kaimur-Rohtas hills, is home to wolves, leopards, sambars, and rare vultures), known for production of kand (wild yam) and Raji wheat (traditional crops of the Kaimur hills), and a district with a significant Bind and other tribal community population — is a city of river mythology and hill forests. From birthday parties in the Bhabua Civil Lines to corporate cakes at the district offices, from anniversary surprises near the Varanasi Road to student cakes at Kaimur's colleges — RedHeart covers all Kaimur zones: Central (Bhabua Civil Lines, Varanasi Road, Sasaram Road), North (Varanasi border, Bhabua Road, Mohania), South (Jharkhand border, Chainpur, Bhagwanpur), East (Rohtas border, Ramgarh, Adhaura), West (UP border, Nuaon, Kudra).</p>
<p>Our Kaimur cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Kaimur Hills / Karamnasa Waterfall-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaimur (Bhabua), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhabua Civil Lines, Varanasi Road, Sasaram Road, Mohania, Chainpur, Kudra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kaimur Hills Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kaimur / Bhabua?", answer: "Yes, same-day cake delivery is available across all Kaimur areas — Bhabua Civil Lines, Varanasi Road, Sasaram Road, and Mohania — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kaimur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kaimur delivery." },
      { question: "Do you deliver midnight cakes in Kaimur?", answer: "Yes, midnight birthday cake delivery is available across Kaimur's central and residential zones." }
    ]
  },

  "jehanabad": {
    cityName: "Jehanabad",
    metaTitle: "Cake Delivery in Jehanabad | Arwal Bihar | RedHeart",
    metaDescription: "Order cakes online in Jehanabad. Same-day delivery across Jehanabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jehanabad",
    metaKeyword: "cake delivery jehanabad, order cake online jehanabad, birthday cake jehanabad, custom cake jehanabad, same day cake delivery jehanabad bara arwal gaya road patna road phalgu river ancient inscriptions",
    footerContent: `
<h2>Cake Delivery in Jehanabad — Ancient Bara Inscriptions, Phalgu River Belt, and Bihar's Magadha Heartland</h2>
<p>Jehanabad — the headquarters of Jehanabad district in Bihar, a city with deep historical roots in the ancient Magadha kingdom (Jehanabad district is located in the ancient Magadha heartland between Gaya and Patna — the very region where Buddhism and Jainism arose in the 5th-6th century BCE; the Tekari Fort and Tekari Raj estate in the district are remnants of a powerful zamindar family; the Bariyarpur copper plate inscriptions found in Jehanabad district have provided historians with evidence of the Pala dynasty's rule in this region; the Barabar Caves — approximately 30 km from Jehanabad — are the world's oldest surviving rock-cut caves, carved in the 3rd century BCE during Emperor Ashoka's reign; the caves have polished granite interiors of extraordinary precision — the same caves inspired E.M. Forster's famous "Marabar Caves" in A Passage to India; the Nagarjuni Caves nearby are 2nd century BCE Ajivika sect caves), an agricultural district producing paddy, wheat, and vegetables in the Phalgu and Falgu river plains (the Phalgu River — which flows through Gaya on its way to the Ganga — runs through parts of Jehanabad), and a district that gave birth to the Indian People's Front political movement — is a city of ancient heritage in the Magadha landscape. From birthday parties in the Civil Lines area to corporate cakes at the large paddy mills, from anniversary surprises near the Gaya Road area to student cakes at Jehanabad's colleges — RedHeart covers all Jehanabad zones: Central (Civil Lines, Station Road, Gaya Road), North (Patna Road, Makhdumpur, Kako), South (Gaya border, Hulasganj, Ghoshi), East (Arwal border, Nawada Road, Lakhisarai border), West (Aurangabad border, Modanganj).</p>
<p>Our Jehanabad cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Barabar Caves / Magadha-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jehanabad, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gaya Road, Patna Road, Makhdumpur, Kako</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Barabar Caves Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jehanabad?", answer: "Yes, same-day cake delivery is available across all Jehanabad areas — Civil Lines, Station Road, Gaya Road, and Makhdumpur — for orders placed before 3 PM." },
      { question: "Do you have Barabar Caves / Magadha-themed cakes in Jehanabad?", answer: "Yes! The Barabar Caves — the world's oldest rock-cut caves (3rd century BCE, built by Emperor Ashoka), the inspiration for E.M. Forster's 'Marabar Caves' in A Passage to India — are near Jehanabad and inspire our Barabar Caves fondant cakes." },
      { question: "Are eggless cakes available in Jehanabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jehanabad delivery." }
    ]
  },

  "nuapada": {
    cityName: "Nuapada",
    metaTitle: "Cake Delivery in Nuapada | Sunabeda Tiger Reserve Odisha | RedHeart",
    metaDescription: "Order cakes online in Nuapada. Same-day delivery across Nuapada. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nuapada",
    metaKeyword: "cake delivery nuapada, order cake online nuapada, birthday cake nuapada, custom cake nuapada, same day cake delivery nuapada sunabeda tiger reserve chhattisgarh border mahanadi tribal komna khariar",
    footerContent: `
<h2>Cake Delivery in Nuapada — Sunabeda Tiger Reserve, Mahanadi's Upstream Source, and Odisha-Chhattisgarh Tribal Border District</h2>
<p>Nuapada — the headquarters of Nuapada district in Odisha (carved out of Kalahandi in 1994), a district of biodiversity and tribal culture (the Sunabeda Wildlife Sanctuary in Nuapada is a tiger reserve proposed area — the sanctuary covers 600+ sq km of dry deciduous forests and is part of the larger tiger corridor connecting Indravati Tiger Reserve (Chhattisgarh) to Udanti-Sitanadi Tiger Reserve (Chhattisgarh) and Satkosia (Odisha); the sanctuary has significant wildlife including tigers, leopards, wild boar, sambar, and gaur; the Indravati River — which eventually flows through Bastar in Chhattisgarh — rises in the Nuapada hills), known for the Mahanadi's upstream tributaries (the Tel River — a major Mahanadi tributary — rises in Nuapada's forests), a district with significant Gond, Kondh, and Khond tribal communities (the indigenous people of Nuapada practice shifting cultivation, forest-product collection, and distinctive folk music including the Dalkhai dance), and bordering Chhattisgarh's Balod and Rajnandgaon districts (the Nuapada-Chhattisgarh border area sees significant cross-border movement of forest produce and daily trade) — is a city of forest biodiversity and tribal heritage. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Komna area to student cakes at Nuapada's colleges — RedHeart covers all Nuapada zones: Central (Civil Lines, Station Road, Khariar Road), North (Bargarh border, Khariar Road, Sinapali), South (Chhattisgarh border, Sunabeda, Boden), East (Bolangir border, Komna, Muribahal), West (Chhattisgarh border, Tharpal).</p>
<p>Our Nuapada cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Sunabeda Forest / tribal Dalkhai-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nuapada, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Khariar Road, Sunabeda, Komna, Boden</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sunabeda Forest Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nuapada?", answer: "Yes, same-day cake delivery is available across all Nuapada areas — Civil Lines, Station Road, Khariar Road, and Komna — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nuapada?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nuapada delivery." },
      { question: "Do you deliver midnight cakes in Nuapada?", answer: "Yes, midnight birthday cake delivery is available across Nuapada's central and residential zones." }
    ]
  },

  "rayagada": {
    cityName: "Rayagada",
    metaTitle: "Cake Delivery in Rayagada | Kondh Tribal Odisha | RedHeart",
    metaDescription: "Order cakes online in Rayagada. Same-day delivery across Rayagada. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rayagada",
    metaKeyword: "cake delivery rayagada, order cake online rayagada, birthday cake rayagada, custom cake rayagada, same day cake delivery rayagada kondh tribal bauxite mining niyamgiri nalco andhra border koraput",
    footerContent: `
<h2>Cake Delivery in Rayagada — Kondh Tribal Heartland, Niyamgiri Hills' Sacred Forest, and Odisha's Aluminium Belt</h2>
<p>Rayagada — the headquarters of Rayagada district in Odisha, a city at the intersection of tribal sovereignty, industrial mining, and environmental conflict (Rayagada district is the homeland of the Dongria Kondh tribal community — one of India's most distinctive Particularly Vulnerable Tribal Groups (PVTG); the Dongria Kondhs worship the Niyamgiri Hill as their sacred ancestral deity (Niyam Raja — the king of law/nature); the Supreme Court's landmark 2013 Niyamgiri judgment — which upheld the Dongria Kondh community's right to refuse Vedanta Resources' bauxite mining on the Niyamgiri Hills — is one of India's most significant environmental and tribal rights judgements; the Dongria Kondhs unanimously voted against mining in the 12 village gram sabhas; the Niyamgiri hills are a sacred forest, a biodiversity hotspot, and the source of the Vamsadhara River; separately, Rayagada is also home to the NALCO (National Aluminium Company) bauxite mines on the adjacent Pottangi hills — major aluminium ore deposits; Rayagada's commercial importance comes from being on the East Coast Railway and the National Highway connecting Koraput to Andhra Pradesh), and a district with rich Kondh and Jhodia Paraja tribal culture, festivals, and craft — is a city of tribal rights heritage and industrial significance. From birthday parties in the Civil Lines area to corporate cakes at the NALCO townships, from anniversary surprises near the Andhra Road to student cakes at Rayagada's colleges — RedHeart covers all Rayagada zones: Central (Civil Lines, Station Road, Andhra Road), North (Koraput Road, Gunupur, Bissam Cuttack), South (Andhra border, Padua, Kashinagar), East (Gajapati border, Gudari, Padmapur), West (Kalahandi border, Chandrapur, Muniguda).</p>
<p>Our Rayagada cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Niyamgiri Hills / Dongria Kondh-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rayagada, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Andhra Road, Koraput Road, Gunupur, Muniguda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Niyamgiri Hills Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rayagada?", answer: "Yes, same-day cake delivery is available across all Rayagada areas — Civil Lines, Station Road, Andhra Road, Gunupur, and Muniguda — for orders placed before 3 PM." },
      { question: "Do you have Niyamgiri Hills / Kondh tribal-themed cakes in Rayagada?", answer: "Yes! The Niyamgiri Hills — the sacred ancestral forest of the Dongria Kondh people, protected by the Supreme Court's landmark 2013 environmental judgment — inspire our Niyamgiri fondant cakes. A deeply important local natural and cultural heritage design." },
      { question: "Are eggless cakes available in Rayagada?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rayagada delivery." }
    ]
  },

  "vikarabad": {
    cityName: "Vikarabad",
    metaTitle: "Cake Delivery in Vikarabad | Ananthagiri Hills Telangana | RedHeart",
    metaDescription: "Order cakes online in Vikarabad. Same-day delivery across Vikarabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vikarabad",
    metaKeyword: "cake delivery vikarabad, order cake online vikarabad, birthday cake vikarabad, custom cake vikarabad, same day cake delivery vikarabad ananthagiri hills hyderabad outskirts Karnataka border forest",
    footerContent: `
<h2>Cake Delivery in Vikarabad — Ananthagiri Hills' Cool Forests, Hyderabad's Green Hinterland, and Telangana's New District</h2>
<p>Vikarabad — the headquarters of Vikarabad district in Telangana (a new district created in 2016 from Ranga Reddy and Mahbubnagar), a district gaining popularity as Hyderabad's closest nature getaway (Vikarabad and its Ananthagiri Hills area — 80 km southwest of Hyderabad — are one of the most popular weekend destinations for Hyderabad residents; the Ananthagiri Hills reach 875 metres and are covered with forests of eucalyptus, teak, and shola; the Markat Vana (monkey forest) near Vikarabad, the Kotepally reservoir, and the Ananthagiri Hanuman temple are popular stops; the area receives higher rainfall than the Deccan plateau and is noticeably cooler, making it a relief from Hyderabad's heat; the Kotla Vijaya Bhaskar Reddy Reservoir (KVB Reddy) near Vikarabad is a significant irrigation and drinking water source), known for the Thandava Dam and waterfall viewpoints (several small dams and waterfalls in the Vikarabad hills are popular during monsoon trekking), close to Karnataka border (the Vikarabad district borders Karnataka's Kalaburagi-Bidar zone, and the KA-TS border trade is active), and a district with growing industrial activity along the Hyderabad-Solapur National Highway — is a city of nature tourism and highway connectivity. From birthday parties near the Ananthagiri Hills area to corporate cakes at the new industrial estates, from anniversary surprises in the Civil Lines area to student cakes at Vikarabad's colleges — RedHeart covers all Vikarabad zones: Central (Civil Lines, Station Road, Hyderabad Road), North (Hyderabad border, Tandur, Shabad), South (Karnataka border, Marpalle, Kotepally), East (Ranga Reddy border, Chevella, Ibrahimpatnam), West (Mahbubnagar border, Nawabpet, Kodangal).</p>
<p>Our Vikarabad cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Ananthagiri Hills / forest-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vikarabad, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Hyderabad Road, Tandur, Kotepally, Nawabpet</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ananthagiri Hills Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vikarabad?", answer: "Yes, same-day cake delivery is available across all Vikarabad areas — Civil Lines, Station Road, Hyderabad Road, and Tandur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Vikarabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Vikarabad delivery." },
      { question: "Do you deliver midnight cakes in Vikarabad?", answer: "Yes, midnight birthday cake delivery is available across Vikarabad's central and residential zones." }
    ]
  },

  "kamareddy": {
    cityName: "Kamareddy",
    metaTitle: "Cake Delivery in Kamareddy | Telangana New District | RedHeart",
    metaDescription: "Order cakes online in Kamareddy. Same-day delivery across Kamareddy. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kamareddy",
    metaKeyword: "cake delivery kamareddy, order cake online kamareddy, birthday cake kamareddy, custom cake kamareddy, same day cake delivery kamareddy Nizamabad road Hyderabad road cotton soya Godavari canal Banswada",
    footerContent: `
<h2>Cake Delivery in Kamareddy — Godavari Canal District, Cotton-Soya Agricultural Belt, and Telangana's New Northern District</h2>
<p>Kamareddy — the headquarters of Kamareddy district in Telangana (a new district created in 2016 from Nizamabad and Medak), a city rapidly developing as a new administrative centre (Kamareddy gains importance from its position on the Hyderabad-Nizamabad National Highway — one of the busiest NH corridors in northern Telangana; the Manoharabad-Kothapalli section of the Outer Ring Road connects Kamareddy's southern areas to Greater Hyderabad's airport and IT corridor; the Godavari-based Sriram Sagar Project (Pochampad Dam) canal system extends into Kamareddy district, providing irrigation for cotton, redgram, and maize cultivation; the district's agriculture is transitioning from traditional crops to commercial cultivation; industrial activities along NH-44 include small and medium manufacturing units), known for the Kamareddy Banswada cotton market (a significant trading centre for northern Telangana's cotton belt), and a district at the threshold of the Nizamabad-Karimnagar agricultural zone — is a growing city on the Hyderabad-Nizamabad corridor. From birthday parties in the Civil Lines area to corporate cakes at the industrial estates, from anniversary surprises near the Banswada Road to student cakes at Kamareddy's colleges — RedHeart covers all Kamareddy zones: Central (Civil Lines, Station Road, Hyderabad Road), North (Nizamabad Road, Banswada, Yellareddy), South (Hyderabad border, Manoharabad, Gajwel), East (Karimnagar border, Domakonda, Jukkal), West (Medak border, Sadashivnagar, Bhiknoor).</p>
<p>Our Kamareddy cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Telangana landscape-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kamareddy, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Hyderabad Road, Nizamabad Road, Banswada, Yellareddy</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kamareddy?", answer: "Yes, same-day cake delivery is available across all Kamareddy areas — Civil Lines, Station Road, Hyderabad Road, Banswada, and Yellareddy — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kamareddy?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kamareddy delivery." },
      { question: "Do you deliver midnight cakes in Kamareddy?", answer: "Yes, midnight birthday cake delivery is available across Kamareddy's central and residential zones." }
    ]
  },

  "jhalawar": {
    cityName: "Jhalawar",
    metaTitle: "Cake Delivery in Jhalawar | Garh Citadel Hadoti Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Jhalawar. Same-day delivery across Jhalawar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jhalawar",
    metaKeyword: "cake delivery jhalawar, order cake online jhalawar, birthday cake jhalawar, custom cake jhalawar, same day cake delivery jhalawar gagron fort chandrawati temples hadoti kota road rajasthan MP border orange",
    footerContent: `
<h2>Cake Delivery in Jhalawar — Gagron Fort's UNESCO World Heritage, Ancient Chandrawati Temples, and Rajasthan's Opium Belt</h2>
<p>Jhalawar — the headquarters of Jhalawar district in Rajasthan's Hadoti region, a city of UNESCO heritage and ancient temple grandeur (the Gagron Fort — located 10 km from Jhalawar — is a UNESCO World Heritage Site (as part of the Hill Forts of Rajasthan cluster); Gagron is unique among Rajasthan's hill forts because it is built at the confluence of the Kali Sindh and Ahu rivers — a water fort rather than a hill fort; the fort was built over several centuries by the Dods, Khichis, and Sultans of Malwa; it is associated with two famous Jauhar (mass self-immolation) episodes; the Sufi saint Mitta Shah's dargah inside the fort draws pilgrims; the Chandrawati temples (near Jhalarapatan) — 8th-11th century CE Shaivite temples with extraordinary carvings in the Pratihara-Paramara style — are comparable in sculptural quality to Khajuraho but are far less visited; the Jhalarapatan "City of Temple Bells" has the Shantinath Jain temple (700 CE) and the Padmanabh/Dwarkadheesh temples; additionally, Jhalawar is part of Rajasthan's opium-growing zone under the Narcotic Drugs and Psychotropic Substances Act licence system; and Jhalawar produces significant quantities of soy and oranges (the Hadoti orange belt)) — is a city of World Heritage fort and underrated temple treasure. From birthday parties in the Civil Lines area to corporate cakes at the soy processing units, from anniversary surprises near the Kota Road to student cakes at Jhalawar's colleges — RedHeart covers all Jhalawar zones: Central (Civil Lines, Station Road, Kota Road), North (Kota border, Jhalarapatan, Pirawa), South (MP border, Bakani, Chaumahla), East (MP border, Dag, Aklera), West (Baran border, Mangrol, Raipur).</p>
<p>Our Jhalawar cake range: Chocolate, Black Forest, Red Velvet, Orange (Hadoti orange!), Butterscotch, Photo Cakes, Fondant Gagron Fort / Chandrawati Temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhalawar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Kota Road, Jhalarapatan, Bakani, Mangrol</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gagron Fort Fondant, Orange, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jhalawar?", answer: "Yes, same-day cake delivery is available across all Jhalawar areas — Civil Lines, Station Road, Kota Road, and Jhalarapatan — for orders placed before 3 PM." },
      { question: "Do you have Gagron Fort / Chandrawati-themed cakes in Jhalawar?", answer: "Yes! The Gagron Fort — a UNESCO World Heritage Site, unique as Rajasthan's only water fort built at a river confluence — and the extraordinary 8th-11th century Chandrawati temples at Jhalarapatan inspire our Gagron fondant cakes." },
      { question: "Are eggless cakes available in Jhalawar?", answer: "Yes, all flavours — Chocolate, Black Forest, Orange, Red Velvet — are available in eggless variants for Jhalawar delivery." }
    ]
  },

  "baran": {
    cityName: "Baran",
    metaTitle: "Cake Delivery in Baran | Hadoti Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Baran. Same-day delivery across Baran. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Baran",
    metaKeyword: "cake delivery baran, order cake online baran, birthday cake baran, custom cake baran, same day cake delivery baran ramgarh dinosaur fossils Kota road Hadoti Chambal coriander soya forest",
    footerContent: `
<h2>Cake Delivery in Baran — Dinosaur Fossil Park, Shahabad's Ancient Fort, and Rajasthan's Coriander Capital</h2>
<p>Baran — the headquarters of Baran district in Rajasthan's Hadoti region (Baran was part of Kota district until 1991), a city of unusual natural and archaeological fame (Baran district is home to the Ramgarh Crater — a 3.5-km diameter impact crater formed by a meteorite strike approximately 2,500 years ago, making it one of India's only confirmed impact craters; the crater is a unique geological formation near Baran; additionally, Baran district (especially the Shahabad area) has significant dinosaur fossil deposits — fossilised dinosaur eggs and bones from the Cretaceous period have been found in the Baran formations; the Shahabad dinosaur egg fossil site is one of India's most significant dinosaur palaeontological areas), home to the Shahabad Fort (a massive Mughal-era fort at Shahabad town in Baran district — one of Rajasthan's grandest and most undervisited forts; the Shahabad Fort has multiple bastions, a darbar hall, temples, and massive walls; the Ramgarh temple at the meteorite crater is also in this belt), and Rajasthan's coriander capital (Baran district, along with Kota and Jhalawar, produces a large proportion of India's coriander (dhania); Baran's coriander mandi is one of the region's biggest; additionally, Baran grows significant soya bean, wheat, and maize) — is a city of meteorite craters, dinosaur fossils, and agricultural wealth. From birthday parties in the Civil Lines area to corporate cakes at the large coriander trading firms, from anniversary surprises near the Kota Road to student cakes at Baran's colleges — RedHeart covers all Baran zones: Central (Civil Lines, Station Road, Kota Road), North (Kota border, Atru, Chhabar), South (MP border, Shahabad, Kishanganj), East (MP border, Ramgarh, Kelwara), West (Jhalawar border, Chabra, Shyampura).</p>
<p>Our Baran cake range: Chocolate, Black Forest, Red Velvet, Mango (Hadoti!), Butterscotch, Photo Cakes, Fondant Ramgarh Crater / Shahabad Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baran, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Kota Road, Shahabad, Atru, Chabra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ramgarh Crater Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Baran?", answer: "Yes, same-day cake delivery is available across all Baran areas — Civil Lines, Station Road, Kota Road, and Shahabad — for orders placed before 3 PM." },
      { question: "Do you have Ramgarh Crater / Dinosaur Fossil-themed cakes in Baran?", answer: "Yes! The Ramgarh meteorite impact crater and the Shahabad dinosaur egg fossil deposits — two of India's most unusual geological and palaeontological sites — inspire our uniquely Baran fondant cakes." },
      { question: "Are eggless cakes available in Baran?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Baran delivery." }
    ]
  },

  "hailakandi": {
    cityName: "Hailakandi",
    metaTitle: "Cake Delivery in Hailakandi | Barak Valley Bangladesh Border Assam | RedHeart",
    metaDescription: "Order cakes online in Hailakandi. Same-day delivery across Hailakandi. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hailakandi",
    metaKeyword: "cake delivery hailakandi, order cake online hailakandi, birthday cake hailakandi, custom cake hailakandi, same day cake delivery hailakandi barak valley bangladesh border silchar road mizoram border tea garden",
    footerContent: `
<h2>Cake Delivery in Hailakandi — Barak Valley's Southern District, Bangladesh Border, and Assam-Mizoram Cultural Corridor</h2>
<p>Hailakandi — the headquarters of Hailakandi district in Assam's Barak Valley region, a district with a unique cultural and geographic position (Hailakandi is the smallest and most southern district of the Barak Valley — the region of Assam south of the Barak River corridor that is linguistically and culturally distinct from the Brahmaputra Valley; the Barak Valley (Cachar, Karimganj, and Hailakandi districts) is predominantly Bengali-speaking — the people here identify culturally with Bangladesh and West Bengal rather than Assamese culture; the Barak Valley's separation from the main Assam language issue was a major political factor in the 1960s; the Hailakandi district borders Bangladesh to the east (with the Kushiyara River forming the border — the Kushiyara is the same as the Surma, which flows into Bangladesh's Sylhet division; cross-border ties with Sylhet's population are strong historically and culturally), borders Mizoram to the south (Hailakandi shares a long border with Mizoram's Mamit district), and lies in the Barak-Kushiyara flood plains (annual floods affect Hailakandi; the district is predominantly agricultural with rice, jute, and pan cultivation), with tea gardens in the hills — is a city of Barak Valley distinctiveness and Bangladesh-Mizoram corridor position. From birthday parties in the Civil Lines area to corporate cakes at the tea estate offices, from anniversary surprises near the Silchar Road to student cakes at Hailakandi's colleges — RedHeart covers all Hailakandi zones: Central (Civil Lines, Silchar Road, Kalain), North (Silchar border, Sadar, Sonai), South (Mizoram border, Katlichera, Lala), East (Bangladesh border, Algapur, Dholai), West (Karimganj border, Ratabari, Ghungoor).</p>
<p>Our Hailakandi cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Hilsa-inspired (Barak Valley hilsa fish culture — sweet cake inspired by Bengali fish love!), Photo Cakes, Fondant Barak Valley / Kushiyara River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hailakandi, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Silchar Road, Kalain, Sonai, Katlichera, Lala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hailakandi?", answer: "Yes, same-day cake delivery is available across all Hailakandi areas — Civil Lines, Silchar Road, Kalain, Sonai, and Lala — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hailakandi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hailakandi delivery." },
      { question: "Do you deliver midnight cakes in Hailakandi?", answer: "Yes, midnight birthday cake delivery is available across Hailakandi's central and residential zones." }
    ]
  },

  "nalbari": {
    cityName: "Nalbari",
    metaTitle: "Cake Delivery in Nalbari | Assam's Brahmaputra North Bank | RedHeart",
    metaDescription: "Order cakes online in Nalbari. Same-day delivery across Nalbari. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nalbari",
    metaKeyword: "cake delivery nalbari, order cake online nalbari, birthday cake nalbari, custom cake nalbari, same day cake delivery nalbari brahmaputra north bank guwahati road barpeta road kamrup bodoland border",
    footerContent: `
<h2>Cake Delivery in Nalbari — Brahmaputra North Bank's Commercial Node, Kamrup-Nalbari Cultural Belt, and Guwahati's Western Gateway</h2>
<p>Nalbari — the headquarters of Nalbari district in Assam, an important commercial and administrative city on the north bank of the Brahmaputra (Nalbari is one of the more prosperous and commercially active districts of western Assam's north bank; its proximity to Guwahati (60 km) via NH-27 (India-Bangladesh Trans-Asia Highway) makes it part of the Guwahati extended commercial zone; the Nalbari weekly markets (bazaars) and the Nalbari town's commercial streets are vibrant; the Tihu and Borsola tea gardens in Nalbari district produce CTC Assam tea; the Nalbari district has a mix of Assamese Hindu, Koch-Rajbongshi, and Bodo communities; the Bardoibam-Bilmukh flood plain wetland in Nalbari is a significant winter bird sanctuary), known for the Madan Kamdev archaeological site (Madan Kamdev, near Nalbari at Baihata Chariali, is a 9th-11th century Pala-period temple site with extraordinary erotic and figurative sculptural carvings that are compared to Khajuraho — it is Assam's "Khajuraho"; the temple complex is largely in ruins but the sculptural fragments are of high artistic quality), and a district bordering the Bodoland Territorial Area Districts (BTAD) — is a city of Assamese prosperity and archaeological richness. From birthday parties in the Civil Lines area to corporate cakes at the tea estate offices, from Bihu celebration cakes to anniversary surprises near the Guwahati Road — RedHeart covers all Nalbari zones: Central (Civil Lines, Station Road, Guwahati Road), North (Barpeta border, Tihu, Barama), South (Brahmaputra bank, Beltola, Tamulpur), East (Kamrup border, Baihata, Changsari), West (Barpeta Road, Sorbhog, Jalah).</p>
<p>Our Nalbari cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Tea-Caramel (Assam CTC tea!), Photo Cakes, Fondant Madan Kamdev / Bihu-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalbari, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Guwahati Road, Barpeta Road, Tihu, Barama</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Madan Kamdev Fondant, Tea-Caramel, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nalbari?", answer: "Yes, same-day cake delivery is available across all Nalbari areas — Civil Lines, Station Road, Guwahati Road, Barpeta Road, and Tihu — for orders placed before 3 PM." },
      { question: "Do you have Madan Kamdev / Bihu-themed cakes in Nalbari?", answer: "Yes! The Madan Kamdev temple site — Assam's 'Khajuraho' with extraordinary 9th-11th century sculptural art near Baihata Chariali — and Assam's vibrant Bihu harvest festival inspire our locally meaningful fondant cakes." },
      { question: "Are eggless cakes available in Nalbari?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nalbari delivery." }
    ]
  },

  "bishnupur": {
    cityName: "Bishnupur",
    metaTitle: "Cake Delivery in Bishnupur | Classical Dance Polo Manipur | RedHeart",
    metaDescription: "Order cakes online in Bishnupur. Same-day delivery across Bishnupur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bishnupur",
    metaKeyword: "cake delivery bishnupur manipur, order cake online bishnupur, birthday cake bishnupur, custom cake bishnupur, same day cake delivery bishnupur manipur polo birthplace meitei shumang leela imphal road loktak lake",
    footerContent: `
<h2>Cake Delivery in Bishnupur Manipur — Polo's Birthplace, Loktak Lake's Gateway, and Meitei Cultural Heart</h2>
<p>Bishnupur — the headquarters of Bishnupur district in Manipur (not to be confused with Bishnupur in West Bengal), a district of extraordinary historical and cultural claims (the game of polo — the world's oldest team sport — was invented in Manipur; Bishnupur district's Mapal Kangjeibung polo ground in Imphal (adjacent to the district) is the world's oldest polo ground; the Meitei people of Manipur created Sagol Kangjei (meaning "horse polo") thousands of years ago, and British cavalry officers learned the game in Manipur in the 1850s and took it back to England and the rest of the world; this is one of the most significant cultural exports of Manipur; Bishnupur district is the heartland of Meitei classical culture: the Ras Lila dance, the Lai Haraoba festival, the Pena (Meitei bowed string instrument), and the Thang Ta martial arts originated and flourish here; the Bishnupur district contains several ancient temples including the Vishnu Nambol temple), the gateway to Loktak Lake (the Loktak Lake — Asia's largest freshwater lake — borders Bishnupur district; the phumdis (floating islands) of Loktak, the Keibul Lamjao National Park (the world's only floating national park, home to the endangered Sangai deer/brow-antlered deer), and the Loktak hydroelectric project are in this district zone), and a district with unique Meitei Hindu cultural tradition (the Meitei Vaishnavism, introduced in the 18th century, merged with earlier animist Sanamahism to create a syncretic culture) — is a district of world sport heritage and dance culture. From birthday parties in the Civil Lines area to corporate cakes at government offices, from Ras Lila and Lai Haraoba celebration cakes to anniversary surprises near the Loktak Lake area — RedHeart covers all Bishnupur zones: Civil Lines, Bishnupur town, Nambol, Loktak area, Moirang, Torbung.</p>
<p>Our Bishnupur Manipur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Polo Birthplace / Ras Lila Dance / Loktak Lake-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bishnupur, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Bishnupur town, Nambol, Loktak area, Moirang, Torbung</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Polo Heritage Fondant, Ras Lila Dance Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bishnupur, Manipur?", answer: "Yes, same-day cake delivery is available across all Bishnupur areas — Civil Lines, Bishnupur town, Nambol, Loktak area, and Moirang — for orders placed before 3 PM." },
      { question: "Do you have Polo / Ras Lila-themed cakes in Bishnupur?", answer: "Yes! Bishnupur's Manipur is where the world's oldest team sport (polo — 'Sagol Kangjei') was invented by the Meitei people; and the classical Ras Lila dance born in this district both inspire our unique Polo Heritage and Ras Lila fondant cakes." },
      { question: "Are eggless cakes available in Bishnupur Manipur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bishnupur delivery." }
    ]
  },

  "dharmanagar": {
    cityName: "Dharmanagar",
    metaTitle: "Cake Delivery in Dharmanagar | Unakoti Tripura | RedHeart",
    metaDescription: "Order cakes online in Dharmanagar. Same-day delivery across Dharmanagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dharmanagar",
    metaKeyword: "cake delivery dharmanagar, order cake online dharmanagar, birthday cake dharmanagar, custom cake dharmanagar, same day cake delivery dharmanagar unakoti sculpture north tripura Bangladesh border agartala road",
    footerContent: `
<h2>Cake Delivery in Dharmanagar — Unakoti's Ancient Rock Sculptures, North Tripura's Capital, and Bangladesh Border City</h2>
<p>Dharmanagar — the headquarters of North Tripura district in Tripura, the largest commercial city in northern Tripura (Dharmanagar is the commercial hub for North Tripura, Unakoti, and Dhalai districts; it is on the NH-208 connecting Agartala to Assam's Jiribam and onwards to Manipur; Dharmanagar's markets serve trade from Bangladesh (the Bangladesh border at Bibir Bazar crossing is close), from Assam, and from the hill districts of Tripura), home to one of India's greatest archaeological treasures: Unakoti (Unakoti — meaning "one less than a crore" or 9,999,999 — is a massive hilltop Shaivite pilgrimage site 8 km from Dharmanagar; the site has thousands of rock-cut and stone sculptures of Shiva, Ganesha, Durga, and Vishnu — the largest rock-cut Shiva face (Unakoteswara Kal Bhairav) is 30 feet tall; the sculptures are believed to be from the 7th-9th century CE; according to legend, Shiva and one crore gods rested here on their way to Kashi; Shiva woke up but the other gods didn't, so they were turned to stone; Unakoti is one of India's most remarkable but least-known heritage sites and is being promoted for UNESCO nomination), and a city in the tea-growing Dharmanagar hills area — is a city of ancient stone legend and Bangladesh-Assam gateway. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from Unakoti pilgrimage celebration cakes to anniversary surprises near the Agartala Road — RedHeart covers all Dharmanagar zones: Central (Civil Lines, Station Road, Agartala Road), North (Assam border, Kanchanpur, Pecharthal), South (Unakoti district, Kumarghat, Kamalpur Road), East (Bangladesh border, Bibir Bazar, Panisagar), West (Dhalai border, Salema).</p>
<p>Our Dharmanagar cake range: Chocolate, Black Forest, Red Velvet, Mango (Tripura Queen pineapple!), Butterscotch, Photo Cakes, Fondant Unakoti Rock Sculptures / Lord Shiva-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharmanagar, Tripura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Agartala Road, Kanchanpur, Kumarghat, Panisagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Unakoti Shiva Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dharmanagar?", answer: "Yes, same-day cake delivery is available across all Dharmanagar areas — Civil Lines, Station Road, Agartala Road, and Kanchanpur — for orders placed before 3 PM." },
      { question: "Do you have Unakoti Rock Sculptures / Shiva-themed cakes in Dharmanagar?", answer: "Yes! The Unakoti site — one of India's greatest and least-known heritage sites, with 9,999,999 ancient rock-cut sculptures of Shiva, Ganesha, and Vishnu from the 7th-9th century CE — inspires our Unakoti Shiva fondant cakes. India's hidden wonder of rock art on your birthday cake." },
      { question: "Are eggless cakes available in Dharmanagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dharmanagar delivery." }
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
