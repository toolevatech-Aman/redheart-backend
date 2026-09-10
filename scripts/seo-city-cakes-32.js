// Cakes Batch 32 — 15 cities:
// Gujarat: Dwarka [100% eggless], Himmatnagar [100% eggless]
// Uttarakhand: Tehri Garhwal, Pauri Garhwal, Champawat, Rudraprayag
// West Bengal: Kalimpong
// Odisha: Jajapur, Dhenkanal
// UP: Amethi, Sultanpur, Basti
// Karnataka: Chamrajanagar
// Bihar: Sheohar
// Rajasthan: Barmer

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "dwarka": {
    cityName: "Dwarka",
    metaTitle: "Cake Delivery in Dwarka Gujarat | 100% Eggless | Dwarkadhish Jyotirlinga | RedHeart",
    metaDescription: "Order 100% eggless cakes in Dwarka Gujarat. Same-day delivery. Dwarkadhish, Char Dham. Cakes from ₹499.",
    h1: "Online Cake Delivery in Dwarka — 100% Eggless & Pure Veg",
    metaKeyword: "cake delivery dwarka gujarat, order cake online dwarka, birthday cake dwarka gujarat, eggless cake dwarka, 100% eggless cake dwarka Dwarkadhish Jyotirlinga Char Dham Bet Dwarka Gomti Nageshwar Rukmini temple Gulf of Kutch Gujarat pilgrimage",
    footerContent: `
<h2>Cake Delivery in Dwarka — 100% Eggless & Pure Veg | Dwarkadhish Char Dham, Nageshwar Jyotirlinga, and Lord Krishna's Mythological Capital</h2>
<p>Dwarka — one of India's four Char Dhams and the most sacred city associated with Lord Krishna — is served with 100% eggless and pure veg cakes by RedHeart, in keeping with Dwarka's deeply sacred and predominantly Vaishnava character. As one of the seven sacred cities (Sapta Puri) of Hinduism and the western Char Dham (alongside Badrinath in the north, Puri in the east, and Rameswaram in the south), Dwarka demands complete vegetarian observance from its population and pilgrims alike. All cakes delivered in Dwarka by RedHeart are 100% eggless and made with pure vegetarian ingredients — no eggs, no animal rennet, no non-veg flavouring.</p>
<p>The Dwarkadhish (Jagat Mandir) Temple — dedicated to Lord Krishna as the Lord of Dwarka — is one of India's oldest and most magnificent temples; the present structure (built on the original foundation associated with Vajranabha, Krishna's grandson) has a 78.3-metre spire topped by a 52 yard flag; the temple has two entrances: the Moksha Dwara (from which devotees exit toward the Gomti River) and the Swarga Dwara (entrance from the city); the temple is managed by the Vallabhacharya and Pushti Marg tradition; the Nageshwar Jyotirlinga temple near Dwarka is one of the 12 sacred Jyotirlingas of India; the Bet Dwarka (island) — accessible by ferry — is the traditional site of Krishna's private residence; the Rukmini Devi Temple (2 km from Dwarkadhish temple) is dedicated to Krishna's principal consort; the Dwarka Lighthouse and the sunset at the Gomti Ghat are iconic; the underwater remains of the submerged ancient city of Dwarka (marine archaeological surveys by the National Institute of Oceanography) have added to Dwarka's mystical significance.</p>
<p>Our Dwarka cake range (ALL 100% EGGLESS & PURE VEG): Chocolate, Black Forest, Red Velvet, Pineapple, Butterscotch, Mango, Kaju (Cashew), Photo Cakes, Fondant Dwarkadhish / Char Dham / Lord Krishna theme cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dwarka, Gujarat (Char Dham)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cake type</td><td style="border:1px solid #e5e7eb;padding:8px 12px;"><strong>100% Eggless & Pure Veg</strong> — no exceptions</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dwarka town, Bet Dwarka, Okha, Khambhalia, Jamnagar Road, Nageshwar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaju, Pineapple, Dwarkadhish Fondant, Lord Krishna Fondant, Chocolate, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Dwarka 100% eggless and pure veg?", answer: "Yes — all cakes delivered in Dwarka by RedHeart are 100% eggless and pure veg. As one of India's four Char Dhams and the sacred city of Lord Krishna, Dwarka follows strict vegetarian observance, and all our Dwarka cakes are made accordingly — no eggs, no animal-derived ingredients." },
      { question: "Can I get same-day cake delivery in Dwarka?", answer: "Yes, same-day cake delivery is available across Dwarka town, Bet Dwarka, Okha, Khambhalia, and Nageshwar for orders placed before 3 PM." },
      { question: "Do you have Dwarkadhish and Lord Krishna-themed cakes in Dwarka?", answer: "Yes! The Dwarkadhish Jagat Mandir (one of India's holiest temples with its 78.3-metre spire) and Lord Krishna's legendary capital city inspire our most devotional Dwarka fondant cakes — all 100% eggless, naturally." }
    ]
  },

  "himmatnagar": {
    cityName: "Himmatnagar",
    metaTitle: "Cake Delivery in Himmatnagar | 100% Eggless | Sabarkantha Gujarat | RedHeart",
    metaDescription: "Order 100% eggless cakes in Himmatnagar, Sabarkantha Gujarat. Same-day delivery. Cakes from ₹499.",
    h1: "Online Cake Delivery in Himmatnagar — 100% Eggless & Pure Veg",
    metaKeyword: "cake delivery himmatnagar, order cake online himmatnagar, birthday cake himmatnagar, eggless cake himmatnagar sabarkantha, 100% eggless himmatnagar Gujarat Shamlaji temple Harnav reservoir Polo Forest Aravalli",
    footerContent: `
<h2>Cake Delivery in Himmatnagar — 100% Eggless & Pure Veg | Sabarkantha's Commercial Hub, Shamlaji Temple, and Polo Forest Heritage</h2>
<p>Himmatnagar — the headquarters of Sabarkantha district in Gujarat — is served with 100% eggless and pure veg cakes by RedHeart, as is our standard for all Gujarat deliveries in keeping with the state's deeply vegetarian food culture. All cakes delivered in Himmatnagar are 100% eggless and made with pure vegetarian ingredients.</p>
<p>Himmatnagar is the commercial and administrative centre of the northeastern Gujarat region — set at the foothills of the Aravalli range; the city is named after the Himmatsinh Chauhan, a historical Rajput chief; the Shamlaji Temple (35 km from Himmatnagar on the Sabarmati River) is one of Gujarat's most beloved pilgrimage sites — a Vaishnava temple dedicated to Shamlaji (a form of Vishnu-Krishna with dark blue complexion) located where the Meshwo River meets the Sabarmati; the Shamlaji fair (Kartik Purnima) draws hundreds of thousands of devotees; the Harnav Reservoir (Harnav Dam on the Harnav River, 30 km from Himmatnagar) is a scenic water body surrounded by Aravalli hills; the Polo Forest (Vijaynagar, Sabarkantha) — 160 km from Ahmedabad, accessible via Himmatnagar — is a biodiversity hotspot in the Aravalli hill range featuring medieval Shiva and Jain temples (11th-14th century), the Harnav River, ancient ruins, Kapuri Mata temple, and diverse wildlife (leopards, hyenas, birds); the forest earned the name "Polo" from the trees (Butea monosperma, called "Polo" locally); the Idar town (30 km north, part of Sabarkantha) has the historic Idar Fort on a massive granite outcrop used by Chauhan Rajputs; Sabarkantha district is also known for tobacco cultivation and the cottage marble industry.</p>
<p>Our Himmatnagar cake range (ALL 100% EGGLESS & PURE VEG): Chocolate, Black Forest, Red Velvet, Pineapple, Butterscotch, Kaju, Photo Cakes, Fondant Shamlaji / Polo Forest / Aravalli Hills theme cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Himmatnagar, Sabarkantha, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cake type</td><td style="border:1px solid #e5e7eb;padding:8px 12px;"><strong>100% Eggless & Pure Veg</strong></td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Himmatnagar town, Idar, Shamlaji, Vijaynagar, Khedbrahma, Talod, Meghraj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaju, Pineapple, Chocolate, Shamlaji Fondant, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Himmatnagar 100% eggless and pure veg?", answer: "Yes — all cakes delivered in Himmatnagar by RedHeart are 100% eggless and pure veg, following Gujarat's deeply vegetarian food culture." },
      { question: "Can I get same-day cake delivery in Himmatnagar?", answer: "Yes, same-day cake delivery is available across Himmatnagar town, Idar, Shamlaji, Vijaynagar, and Khedbrahma for orders placed before 3 PM." },
      { question: "Do you deliver midnight cakes in Himmatnagar?", answer: "Yes, midnight birthday cake delivery is available across Himmatnagar and Sabarkantha district residential zones." }
    ]
  },

  "tehri": {
    cityName: "Tehri",
    metaTitle: "Cake Delivery in Tehri | Tehri Dam Submerged City Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Tehri Garhwal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tehri",
    metaKeyword: "cake delivery tehri garhwal, order cake online tehri, birthday cake tehri, custom cake tehri, same day cake delivery tehri garhwal Tehri Dam submerged old city Bhagirathi Bhilangna reservoir New Tehri Chandrabadani Srinagar Garhwal",
    footerContent: `
<h2>Cake Delivery in Tehri — Tehri Dam's Reservoir World, the Submerged Old City, and Garhwal's Bhagirathi Valley</h2>
<p>Tehri Garhwal — the headquarters of Tehri Garhwal district in Uttarakhand, home to one of the world's highest and most dramatic hydroelectric dams (the Tehri Dam — the highest rock-fill dam in Asia (260.5 metres) and one of the world's highest dams — was built on the Bhagirathi River at its confluence with the Bhilangna River; the Tehri Dam reservoir (Tehri Lake) submerged the original Tehri town (New Tehri Garhwal/Pratapnagar town was constructed to rehabilitate displaced residents); the old Tehri town — where the last Garhwal Raja's palace stood — is now underwater at 26 km length of the reservoir; the displacement of approximately 1 lakh people from 125 villages for the Tehri Dam was one of India's most controversial dam-related resettlements; the Tehri Dam reservoir (at full reservoir level 830 metres) has opened water sports including jet skiing, water skiing, boating, and kayaking — making Tehri Lake a new adventure tourism destination; the dam generates 2,400 MW of hydro power (Tehri Hydro Development Corporation); the Chandrabadani Temple (20 km from New Tehri) — at 2,277 metres — is one of the Shakti Peethas and a significant pilgrimage site; Srinagar Garhwal (50 km from Tehri) — the former capital of the Garhwal kingdom and headquarters of Pauri Garhwal district (while technically a different district, it's a major urban centre in the broader Tehri Garhwal region) — has the HNB Garhwal University campus, Veer Chandra Singh Garhwali government medical college, and significant Alaknanda valley scenery), and a city reborn from the water — is Garhwal's most dramatic modern heritage. From birthday parties in New Tehri to Tehri Lake adventure cakes, from anniversary surprises near the dam to student cakes — RedHeart covers all Tehri zones: New Tehri, Narendra Nagar, Ghansali, Devprayag Road, Pratapnagar, Chamba (Tehri).</p>
<p>Our Tehri cake range: Chocolate, Black Forest, Red Velvet, Apple, Butterscotch, Photo Cakes, Fondant Tehri Dam Reservoir / Old Submerged City / Chandrabadani Temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tehri Garhwal, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">New Tehri, Narendra Nagar, Ghansali, Devprayag Road, Pratapnagar, Chamba Tehri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tehri Dam Fondant, Apple, Black Forest, Chandrabadani Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tehri Garhwal?", answer: "Yes, same-day cake delivery is available across all Tehri areas — New Tehri, Narendra Nagar, Ghansali, and Pratapnagar — for orders placed before 3 PM." },
      { question: "Do you have Tehri Dam and Submerged Old Tehri City-themed cakes?", answer: "Yes! The Tehri Dam (Asia's highest rock-fill dam at 260 metres) and the poignant story of the old Tehri town that now lies beneath the 26-km reservoir (submerging the Garhwal Raja's palace and 125 villages) inspire our most dramatically historical Tehri fondant cakes." },
      { question: "Are eggless cakes available in Tehri Garhwal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple — are available in eggless variants for Tehri delivery." }
    ]
  },

  "pauri": {
    cityName: "Pauri",
    metaTitle: "Cake Delivery in Pauri Garhwal | Lansdowne Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Pauri Garhwal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pauri Garhwal",
    metaKeyword: "cake delivery pauri garhwal, order cake online pauri, birthday cake pauri, custom cake pauri, same day cake delivery pauri garhwal Lansdowne cantonment Khirsu apple Garhwal Rifles Kandolia meadow Nanda Devi panorama Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Pauri Garhwal — Lansdowne's Garhwal Rifles Legacy, Khirsu Apple Orchard Hills, and Nanda Devi Himalayan Panorama</h2>
<p>Pauri Garhwal — the headquarters of Pauri Garhwal district in Uttarakhand, the administrative capital of Garhwal division and one of the most culturally significant towns in the Himalayan hills (Pauri town is perched at 1,650 metres offering outstanding views of the Himalayan range from Kedarnath to Nanda Devi and Trishul; the British established Pauri as the headquarters of the Garhwal Division after 1815; the Lansdowne cantonment town (40 km from Pauri) — founded in 1887 by Viceroy Lord Lansdowne — is the regimental home of the Garhwal Rifles (one of India's most decorated infantry regiments; Indian Army's Garhwal Rifles won the Victoria Cross in World War I); Lansdowne is a quiet, pristine hill station with colonial-era churches, the War Memorial, and dense oak forests; Khirsu (15 km from Pauri) is a charming orchard village at 1,700 metres with dense apple, pear, and plum orchards offering Himalayan panoramas; the Pauri hill area has significant apricot and apple production; the Kandolia Wildlife Sanctuary (adjacent to Pauri) protects Himalayan wildlife; the famous Srinagar Garhwal — on the Alaknanda River, part of Pauri Garhwal district — has HNB Garhwal University (a Central University); the Pauri district is also historically associated with the Chipko Movement (1973 forest conservation movement) led by Chandi Prasad Bhatt and Sunderlal Bahuguna from the Chamoli-Pauri area), and a city of Garhwal heritage and Himalayan views — is Uttarakhand's administrative Garhwal soul. From birthday parties in Pauri to Lansdowne celebration cakes, from Khirsu orchard cakes to anniversary surprises — RedHeart covers all Pauri Garhwal zones: Pauri town, Srinagar Garhwal, Lansdowne, Kotdwar, Khirsu, Doogadda, Byasghat, Tharali.</p>
<p>Our Pauri cake range: Chocolate, Black Forest, Red Velvet, Apple (Khirsu!), Pear, Butterscotch, Photo Cakes, Fondant Lansdowne Garhwal Rifles / Khirsu Orchard / Nanda Devi Panorama-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pauri Garhwal, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pauri town, Srinagar Garhwal, Lansdowne, Kotdwar, Khirsu, Doogadda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khirsu Apple, Chocolate, Lansdowne Fondant, Garhwal Rifles Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pauri Garhwal?", answer: "Yes, same-day cake delivery is available across Pauri town, Srinagar Garhwal, Lansdowne, Kotdwar, and Khirsu for orders placed before 3 PM." },
      { question: "Do you have Lansdowne Garhwal Rifles and Khirsu Orchard-themed cakes?", answer: "Yes! Lansdowne's Garhwal Rifles regiment (founded 1887, decorated in WWI) and Khirsu's apple-and-pear orchards with their Nanda Devi/Kedarnath Himalayan panorama inspire our most uniquely Garhwal fondant cakes." },
      { question: "Are eggless cakes available in Pauri Garhwal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Khirsu Apple, Pear — are available in eggless variants for Pauri delivery." }
    ]
  },

  "champawat": {
    cityName: "Champawat",
    metaTitle: "Cake Delivery in Champawat | Jim Corbett Man-Eater Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Champawat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Champawat",
    metaKeyword: "cake delivery champawat, order cake online champawat, birthday cake champawat, custom cake champawat, same day cake delivery champawat Jim Corbett man-eating leopard Baleshwar temple Chand dynasty Kali river Nepal border Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Champawat — Jim Corbett's Most Famous Man-Eater, the Chand Dynasty's Capital, and Kumaon's Nepal Frontier</h2>
<p>Champawat — the headquarters of Champawat district in Uttarakhand, a small but historically extraordinary town in the Kumaon hills near the Nepal border (the Champawat Tigress — a Bengal tigress responsible for 436 documented human deaths in Nepal and the Kumaon region (1900-1907) — was the most prolific man-eating animal ever recorded in history; the Champawat tigress had a broken canine (from a poacher's bullet) that prevented normal hunting, forcing it to attack humans; the tigress was eventually shot by Jim Corbett near Champawat in 1907 — the first of the famous man-eaters that Corbett would hunt, and the subject of his first tiger-hunting chapters (documented in "Man-Eaters of Kumaon"); a commemorative stone marks the spot near Champawat; the Baleshwar Temple group at Champawat — a complex of medieval temples (11th-12th century CE) dedicated to Shiva (Baleshwar) and other deities — is one of the finest examples of Kumaon-Chand dynasty temple architecture; the sculptural panels on the Baleshwar temples are considered masterpieces of Kumaon stone carving; Champawat was the first capital of the Chand dynasty kingdom of Kumaon (before the capital shifted to Almora); the Chand dynasty ruled Kumaon from roughly the 7th to the 18th centuries CE; the Purnagiri temple (Kali river valley, accessible from Champawat) is one of the 108 Shakti Peethas and draws lakhs of pilgrims; the Champawat district borders Nepal), and a city of historic man-eater legend and Chand dynasty splendour — is Kumaon's most storied frontier town. From birthday parties in Champawat town to Corbett Man-Eater heritage cakes, from anniversary surprises near the Baleshwar temples to student cakes — RedHeart covers all Champawat zones: Champawat town, Lohaghat, Tanakpur, Banbasa, Purnagiri Road, Pithoragarh Road.</p>
<p>Our Champawat cake range: Chocolate, Black Forest, Red Velvet, Apple, Butterscotch, Photo Cakes, Fondant Jim Corbett Champawat / Baleshwar Temple / Kumaon Chand Dynasty-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champawat, Uttarakhand (Kumaon)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Champawat town, Lohaghat, Tanakpur, Banbasa, Purnagiri Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jim Corbett Fondant, Baleshwar Temple Fondant, Apple, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Champawat?", answer: "Yes, same-day cake delivery is available across Champawat town, Lohaghat, Tanakpur, Banbasa, and Purnagiri Road for orders placed before 3 PM." },
      { question: "Do you have Jim Corbett Champawat Tigress and Baleshwar Temple-themed cakes?", answer: "Yes! The Champawat Tigress (the world's most prolific man-eater — 436 documented kills — shot by Jim Corbett in 1907 near Champawat in his very first hunt) and the 11th-12th century Baleshwar Temple complex (finest Kumaon-Chand dynasty stone carving) inspire our most historically charged Champawat fondant cakes." },
      { question: "Are eggless cakes available in Champawat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple — are available in eggless variants for Champawat delivery." }
    ]
  },

  "rudraprayag": {
    cityName: "Rudraprayag",
    metaTitle: "Cake Delivery in Rudraprayag | Kedarnath Gateway Panch Prayag Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Rudraprayag. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rudraprayag",
    metaKeyword: "cake delivery rudraprayag, order cake online rudraprayag, birthday cake rudraprayag, custom cake rudraprayag, same day cake delivery rudraprayag Kedarnath gateway Alaknanda Mandakini confluence Panch Prayag Char Dham Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Rudraprayag — Kedarnath Char Dham Gateway, Alaknanda-Mandakini Panch Prayag, and Ukhimath's Winter Shrine</h2>
<p>Rudraprayag — the headquarters of Rudraprayag district in Uttarakhand, the sacred confluence (Prayag) of the Alaknanda and Mandakini rivers and the essential gateway to the Kedarnath Dham (Rudraprayag is one of the five sacred confluences (Panch Prayag) of the Alaknanda river system in Garhwal; the Panch Prayag (Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag) are among the most sacred confluences in Hindu tradition; at Rudraprayag the clear-green Alaknanda meets the white-grey Mandakini — the visual distinction of the two rivers merging is spectacular; the Rudranath Temple at Rudraprayag is an important Shiva shrine; the Kedarnath Dham — one of India's four Char Dhams and one of the 12 Jyotirlingas — is accessible via Rudraprayag district (Sonprayag → Gaurikund → 16 km trek to Kedarnath at 3,583 metres); the Kedarnath Temple was rebuilt after the devastating June 2013 Uttarakhand flood disaster (which caused massive landslides and killed thousands of pilgrims); the Bhairavnath rock behind the temple is credited with protecting Kedarnath from the 2013 floods; the Ukhimath (Ukhimath town) is the winter seat of the Kedarnath deity when the Kedarnath temple closes in November; Chopta (on the Rudraprayag-Chamoli route) — called the "Mini Switzerland of Uttarakhand" — is a meadow offering Kedarnath, Chaukhamba, and Neelkanth Himalayan peaks views; Tungnath (world's highest Shiva temple at 3,680 metres) is near Chopta; the Jim Corbett Man-Eater of Rudraprayag (a leopard responsible for 125 deaths in the 1920s) was hunted by Jim Corbett — documented in his book "The Man-Eating Leopard of Rudraprayag"), and a city of three Jyotirlingas and five Prayags' sacred geography — is Uttarakhand's holiest pilgrim gateway. From birthday parties in Rudraprayag to Kedarnath Char Dham celebration cakes, from Chopta meadow cakes to anniversary surprises — RedHeart covers all Rudraprayag zones: Rudraprayag town, Augustmuni, Ukhimath, Chopta, Sonprayag, Tilwara, Agastyamuni, Guptkashi.</p>
<p>Our Rudraprayag cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Kedarnath Dham / Rudraprayag Confluence / Chopta Tungnath-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rudraprayag, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rudraprayag town, Augustmuni, Ukhimath, Chopta, Sonprayag, Guptkashi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kedarnath Dham Fondant, Rudraprayag Confluence Fondant, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rudraprayag?", answer: "Yes, same-day cake delivery is available across Rudraprayag town, Augustmuni, Ukhimath, Chopta, Sonprayag, and Guptkashi for orders placed before 3 PM." },
      { question: "Do you have Kedarnath Char Dham and Rudraprayag Confluence-themed cakes?", answer: "Yes! The Kedarnath Dham (one of the 12 Jyotirlingas and one of the four Char Dhams at 3,583 metres, with its miraculous survival from the 2013 floods) and the Rudraprayag Panch Prayag confluence (where blue-green Alaknanda meets white Mandakini) inspire our most sacred Rudraprayag fondant cakes." },
      { question: "Are eggless cakes available in Rudraprayag?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Rudraprayag delivery." }
    ]
  },

  "kalimpong": {
    cityName: "Kalimpong",
    metaTitle: "Cake Delivery in Kalimpong | Flower Nursery Hills West Bengal | RedHeart",
    metaDescription: "Order cakes online in Kalimpong. Same-day delivery across Kalimpong. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kalimpong",
    metaKeyword: "cake delivery kalimpong, order cake online kalimpong, birthday cake kalimpong, custom cake kalimpong, same day cake delivery kalimpong flower nursery Zong Dog Palri monastery orchid Deolo Hill Teesta river Bhutan silk route West Bengal",
    footerContent: `
<h2>Cake Delivery in Kalimpong — India's Flower Nursery Capital, Zong Dog Palri Buddhist Monastery, and Silk Route Trade History</h2>
<p>Kalimpong — the headquarters of Kalimpong district in West Bengal (separated from Darjeeling district and made a distinct district in 2017), a hill town of extraordinary floral abundance and cultural confluence (Kalimpong is renowned as India's "Flower Nursery Capital" — the town produces 80% of India's commercially cut flowers, including gladioli, carnations, orchids, and dahlias; the Kalimpong nurseries (particularly in the areas like Mangal Dham Road and Deolo Hill surrounds) ship flowers to Kolkata, Mumbai, and Delhi flower markets daily; the town's climate (mild, moist, with good sunlight) is ideal for tropical and sub-tropical floriculture; the Zong Dog Palri Fo-Brang Monastery — perched dramatically on a rocky outcrop above Kalimpong — is one of the most photographed Buddhist monasteries in the eastern Himalayas; it was consecrated by the 14th Dalai Lama in 1976; the Tharpa Choling Monastery (another significant monastery) was founded by Tibetan monks who fled Tibet after 1959; the Deolo Hill (1,704 metres — the highest point near Kalimpong) offers sweeping views of the Kanchenjunga range, Teesta River gorge, and the plains; the Teesta River flows dramatically through the Kalimpong district (the Teesta at Coronation Bridge is a dramatic gorge viewpoint); Kalimpong was historically a major transit point on the Silk Route trade between India, Bhutan, and Tibet — mule caravans carrying silk, spices, and wool passed through; the Thana Dara viewpoint, the Durpin Dara Hill, and Cactus Nurseries of Kalimpong are popular attractions), and a city of orchids, Buddhism, and Himalayan flowers — is West Bengal's most florally extraordinary hill town. From birthday parties with Kanchenjunga views to nursery celebration cakes, from anniversary surprises near the Zong Dog Palri to student cakes — RedHeart covers all Kalimpong zones: Kalimpong town, Gorubathan, Lava (Lava Lolegaon), Algarah, Pedong, Relli, 9th Mile, Deolo.</p>
<p>Our Kalimpong cake range: Chocolate, Black Forest, Red Velvet, Orchid (floral!), Strawberry, Butterscotch, Photo Cakes, Fondant Zong Dog Palri Monastery / Kalimpong Flower Nursery / Silk Route Trade-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalimpong, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalimpong town, Gorubathan, Lava, Lolegaon, Algarah, Pedong, Deolo</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Strawberry, Chocolate, Zong Dog Palri Fondant, Flower Nursery Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kalimpong?", answer: "Yes, same-day cake delivery is available across Kalimpong town, Gorubathan, Lava, Lolegaon, Algarah, Pedong, and Deolo Hill for orders placed before 3 PM." },
      { question: "Do you have Zong Dog Palri Monastery and Kalimpong Flower Nursery-themed cakes?", answer: "Yes! The Zong Dog Palri Fo-Brang Monastery (consecrated by the Dalai Lama in 1976 on a dramatic rocky outcrop) and Kalimpong's flower nurseries (producing 80% of India's commercially cut flowers — gladioli, orchids, carnations) inspire our most floral and spiritual Kalimpong fondant cakes." },
      { question: "Are eggless cakes available in Kalimpong?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Strawberry — are available in eggless variants for Kalimpong delivery." }
    ]
  },

  "jajapur": {
    cityName: "Jajapur",
    metaTitle: "Cake Delivery in Jajapur | Biraja Temple Brahmani River Odisha | RedHeart",
    metaDescription: "Order cakes online in Jajapur. Same-day delivery across Jajapur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jajapur",
    metaKeyword: "cake delivery jajapur, order cake online jajapur, birthday cake jajapur, custom cake jajapur, same day cake delivery jajapur Biraja Shakti Peetha Brahmani river Jajnagar Ashoka Kalinga rock edicts Vyasanagar Odisha ancient capital",
    footerContent: `
<h2>Cake Delivery in Jajapur — Biraja Shakti Peetha, Brahmani River's Sacred Banks, and Odisha's Most Ancient Capital City</h2>
<p>Jajapur (Jajpur) — the headquarters of Jajapur district in Odisha, one of India's most ancient cities and a sacred Shakti Peetha of immense importance (Jajapur is one of Odisha's most historically layered cities — it was the ancient capital of the Nala dynasty and the Somavamsi dynasty of Odisha; the Biraja Temple at Jajapur is one of the 51 or 108 Shakti Peethas of India — dedicated to the Goddess Biraja (a form of the Goddess Durga); the Biraja Temple (Viraja Khetra) is one of the four major Shakti Peethas of Odisha (the others being Tara Tarini, Maa Mangala, and Samaleswari); the navel of Sati is said to have fallen here; the Biraja temple fair during Ashokastami (March-April) and Navratri draws hundreds of thousands of devotees; the Vaitarani River (a sacred river of Odisha — connected to the Hindu concept of the afterlife river, said to separate the world of the living from the world of the dead) flows near Jajapur; the Vyasanagar township (industrial area) near Jajapur has the Odisha Iron and Steel Company (OSICL); the Brahmani River forms part of the Jajapur district boundary; the Ashokan Rock Edicts at Dhauli (though in Khordha district) were related to the Kalinga War fought in the Jajpur-Cuttack region; the Ratnagiri Buddhist complex (8th-12th century CE, one of Odisha's most significant Buddhist monastic complexes) is 55 km from Jajapur), and a city of goddess worship and ancient Bengal-Odisha heritage — is Odisha's sacred and historically deepest city. From birthday parties in Jajapur to Biraja temple celebration cakes, from anniversary surprises near the Brahmani to student cakes — RedHeart covers all Jajapur zones: Jajapur town, Vyasanagar, Jajpur Road, Dharmasala, Barchana, Korei, Sukinda, Mangalpur.</p>
<p>Our Jajapur cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Biraja Shakti Peetha / Vaitarani River / Ratnagiri Buddhist-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jajapur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jajapur town, Vyasanagar, Jajpur Road, Dharmasala, Barchana, Korei, Sukinda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Biraja Peetha Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jajapur?", answer: "Yes, same-day cake delivery is available across Jajapur town, Vyasanagar, Jajpur Road, Dharmasala, and Korei for orders placed before 3 PM." },
      { question: "Do you have Biraja Shakti Peetha-themed cakes in Jajapur?", answer: "Yes! The Biraja Temple (one of India's 51 Shakti Peethas — the navel of Sati fell here, one of Odisha's four major goddess shrines, drawing lakhs during Ashokastami and Navratri) inspires our most devotional Jajapur fondant cakes." },
      { question: "Are eggless cakes available in Jajapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Jajapur delivery." }
    ]
  },

  "dhenkanal": {
    cityName: "Dhenkanal",
    metaTitle: "Cake Delivery in Dhenkanal | Kapilash Temple Shiva Odisha | RedHeart",
    metaDescription: "Order cakes online in Dhenkanal. Same-day delivery across Dhenkanal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dhenkanal",
    metaKeyword: "cake delivery dhenkanal, order cake online dhenkanal, birthday cake dhenkanal, custom cake dhenkanal, same day cake delivery dhenkanal Kapilash temple Chandrasekhar Shiva Saptasajya hills Mahanadi Odisha NALCO Angul adjacent",
    footerContent: `
<h2>Cake Delivery in Dhenkanal — Kapilash's Shiva Temple Atop Saptasajya, Mahanadi's Sacred Bend, and Odisha's Mining Heritage</h2>
<p>Dhenkanal — the headquarters of Dhenkanal district in Odisha, a district of significant natural and spiritual beauty in central Odisha (the Kapilash Temple — on top of the Kapilash hill (600 metres) in the Saptasajya hill range — is one of Odisha's most important Shiva temples; the temple is dedicated to Chandrasekhar (Shiva as the one who wears the crescent moon) and is a significant pilgrimage site; the 3 km arduous trek up the Kapilash hill steps is considered a Shiva devotional act; the Kapilash Wildlife Sanctuary (surrounding the Kapilash hill) protects leopards, bears, elephants, and biodiversity in the sal forest landscape; the Saptasajya hills near Dhenkanal also have Siddheswara Shiva temple and a network of forest caves; the Mahanadi River system forms part of Dhenkanal's boundary areas; the district has the Kamakhyanagar coal block (part of Odisha's large coal deposits) and is adjacent to the Angul industrial zone (NALCO aluminium, Hindalco, Mahanadi Coalfields) — making Dhenkanal's economy connected to this industrial complex; the Dhenkanal princely state (Gajapati kingdom) was a significant princely state in Odisha that acceded to India in 1948; the traditional Dhenkanal Pattachitra (cloth painting) and silver jewellery tradition of the Sonepur-Dhenkanal area are known craft forms), and a city of Shiva pilgrimage and forest hill sanctuary — is Odisha's sacred natural heartland. From birthday parties in Dhenkanal town to Kapilash temple celebration cakes, from anniversary surprises near the Saptasajya hills to student cakes — RedHeart covers all Dhenkanal zones: Dhenkanal town, Hindol, Kamakhyanagar, Bhuban, Gandia, Gondia, Parjang.</p>
<p>Our Dhenkanal cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Kapilash Shiva Temple / Saptasajya Hills / Mahanadi-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhenkanal, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhenkanal town, Hindol, Kamakhyanagar, Bhuban, Gandia, Parjang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Kapilash Temple Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dhenkanal?", answer: "Yes, same-day cake delivery is available across Dhenkanal town, Hindol, Kamakhyanagar, and Bhuban for orders placed before 3 PM." },
      { question: "Do you have Kapilash Shiva Temple and Saptasajya Hills-themed cakes?", answer: "Yes! The Kapilash Temple (dedicated to Chandrasekhar Shiva atop the 600-metre Kapilash hill, reached by an arduous pilgrimage climb through the Kapilash Wildlife Sanctuary) inspires our most devotional Dhenkanal fondant cakes." },
      { question: "Are eggless cakes available in Dhenkanal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Dhenkanal delivery." }
    ]
  },

  "amethi": {
    cityName: "Amethi",
    metaTitle: "Cake Delivery in Amethi | Gauriganj UP Political Capital | RedHeart",
    metaDescription: "Order cakes online in Amethi. Same-day delivery across Amethi. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Amethi",
    metaKeyword: "cake delivery amethi, order cake online amethi, birthday cake amethi, custom cake amethi, same day cake delivery amethi gauriganj UP Congress Gandhi family political constituency Salai river Lucknow Road Nehru Gandhi Rahul Gandhi",
    footerContent: `
<h2>Cake Delivery in Amethi — India's Most Politically Storied Constituency, Gandhi Family Legacy, and Gomti-Salai River Plains</h2>
<p>Amethi — the headquarters of Amethi district in Uttar Pradesh (also known as Gauriganj, the actual HQ town), one of India's most politically significant and historically discussed parliamentary constituencies (Amethi constituency was for decades India's most famous Lok Sabha seat — held by the Nehru-Gandhi family for over three decades; Rajiv Gandhi won from Amethi in 1981 (by-election after Sanjay Gandhi's death) and held the seat until his assassination in 1991; Sonia Gandhi and later Rahul Gandhi won from Amethi (2004-2019); Amethi became international news when Rahul Gandhi lost to Smriti Irani in 2019 (ending the Gandhi-Nehru dynasty's hold on the seat); Amethi district was created in 2010 by bifurcating Sultanpur district; the Amethi area is known for the Gauriganj sugar factory and sugarcane cultivation; the Sai River (Salai River) flows through Amethi district — a major river of the Gomti basin; the NTPC Unchahar power plant (100 MW) is in adjacent Rae Bareli district; the Amethi region has the HAL (Hindustan Aeronautics Limited) facility at Korwa (Amethi) — an important defence manufacturing hub for AK-203 assault rifles (the Indo-Russian joint venture plant producing Kalashnikov rifles); the rural hinterland of Amethi is characterized by sugarcane fields, mango orchards, and the typical central Uttar Pradesh agricultural landscape), and a city of Indian democracy's most storied political chapter — is UP's most symbolic constituency. From birthday parties in Amethi to political milestone celebration cakes, from anniversary surprises near Gauriganj to student cakes — RedHeart covers all Amethi zones: Amethi town, Gauriganj, Musafirkhana, Tiloi, Jagdishpur, Salon, Jamo, Bahadurpur.</p>
<p>Our Amethi cake range: Chocolate, Black Forest, Red Velvet, Mango (UP!), Butterscotch, Photo Cakes, Fondant Amethi Political Legacy / HAL Korwa / Salai River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amethi (Gauriganj), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amethi town, Gauriganj, Musafirkhana, Tiloi, Jagdishpur, Salon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Amethi?", answer: "Yes, same-day cake delivery is available across Amethi town, Gauriganj, Musafirkhana, Tiloi, and Jagdishpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Amethi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Amethi delivery." },
      { question: "Do you deliver midnight cakes in Amethi?", answer: "Yes, midnight birthday cake delivery is available across Amethi's residential areas including Gauriganj, Musafirkhana, and Tiloi zones." }
    ]
  },

  "sultanpur": {
    cityName: "Sultanpur",
    metaTitle: "Cake Delivery in Sultanpur | Gomti River UP | RedHeart",
    metaDescription: "Order cakes online in Sultanpur. Same-day delivery across Sultanpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sultanpur",
    metaKeyword: "cake delivery sultanpur, order cake online sultanpur, birthday cake sultanpur, custom cake sultanpur, same day cake delivery sultanpur Gomti river bird sanctuary Uttar Pradesh Ayodhya adjacent Faizabad Saket",
    footerContent: `
<h2>Cake Delivery in Sultanpur — Gomti River's Bird Sanctuary, Saket City's Ancient Origins, and UP's Central Agricultural Heartland</h2>
<p>Sultanpur — the headquarters of Sultanpur district in Uttar Pradesh, a city of rivers, birds, and central Awadh heritage in the Gomti basin (the Sultanpur National Bird Sanctuary — situated on the banks of the Gomti River at Sultanpur — is a freshwater lake wildlife sanctuary famous for migratory birds; the sanctuary (originally a jheel / seasonal lake) attracts wintering birds from Siberia, Central Asia, and Europe including bar-headed geese, greylag geese, northern pintail, common teal, Eurasian coot, and rare species; the lake is surrounded by grassy banks and grasslands; the Gomti River flows through Sultanpur district — the Gomti is one of the sacred rivers of Awadh-UP connecting Lucknow, Jaunpur, and Varanasi; Sultanpur's history is connected to the Awadh (Oudh) region and the Nawabs of Awadh — the district was historically part of the Kingdom of Awadh; Sultanpur is the birthplace of the Hindi film actress and social activist Smriti Irani (who later became a Union Cabinet Minister); the Sultanpur district is known for mango orchards (Dussehri mango variety) and sugarcane cultivation; the Kali Mata temple at Sultanpur is a significant local religious site; the district borders Ayodhya (Faizabad) district — making it part of the sacred Ayodhya-Awadh religious cultural zone), and a city of bird sanctuary serenity and Awadhi agricultural richness — is UP's charming Gomti basin town. From birthday parties in Sultanpur town to bird sanctuary celebration cakes, from anniversary surprises near the Gomti to student cakes — RedHeart covers all Sultanpur zones: Sultanpur town, Lambhua, Kadipur, Amethi Road, Musafirkhana Road, Bhadainia, Dostpur.</p>
<p>Our Sultanpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Dussehri!), Butterscotch, Photo Cakes, Fondant Sultanpur Bird Sanctuary / Gomti River / Awadh Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sultanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sultanpur town, Lambhua, Kadipur, Musafirkhana Road, Bhadainia, Dostpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dussehri Mango, Chocolate, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sultanpur?", answer: "Yes, same-day cake delivery is available across Sultanpur town, Lambhua, Kadipur, and Musafirkhana Road for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sultanpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Dussehri Mango — are available in eggless variants for Sultanpur delivery." },
      { question: "Do you deliver midnight cakes in Sultanpur?", answer: "Yes, midnight birthday cake delivery is available across Sultanpur's residential areas and Lambhua zones." }
    ]
  },

  "basti": {
    cityName: "Basti",
    metaTitle: "Cake Delivery in Basti | Buddhist Circuit Kapilavastu UP | RedHeart",
    metaDescription: "Order cakes online in Basti. Same-day delivery across Basti. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Basti",
    metaKeyword: "cake delivery basti, order cake online basti, birthday cake basti, custom cake basti, same day cake delivery basti Kapilavastu Buddha birthplace Buddhist circuit Sravasti Shravasti Rapti Nepal border Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Basti — Buddhist Circuit Gateway, Kapilavastu's Buddha Birthplace Region, and Rapti River's Nepal Frontier</h2>
<p>Basti — the headquarters of Basti division and Basti district in Uttar Pradesh, a significant gateway to the Buddhist pilgrimage circuit in the Nepal-Terai border region (Basti district is part of the ancient Buddhist geography of India — Kapilavastu, where Siddhartha Gautama (the Buddha) was born (c. 563 BCE) and spent his early life as Prince Siddhartha of the Shakya clan before his Enlightenment, is believed to be located in the Basti-Siddhartha Nagar district area (both Piprahwa in Basti/Siddhartha Nagar district and the Tilaurakot in Nepal claim to be the actual Kapilavastu); Sravasti (Shravasti) — where the Buddha spent 25 rainy seasons and performed the famous Sravasti Miracles — is in adjacent Shravasti district (accessible from Basti); the Rapti River flows through the Basti district and forms part of the Nepal border in the broader region; the Basti division includes Basti, Sant Kabir Nagar, and Siddhartha Nagar districts; the Sant Kabir Nagar district (named after the saint-poet Kabir, who was born at Maghar — also in Sant Kabir Nagar district) is adjacent to Basti; Maghar (Kabir's death place) has the Kabir Dargah and Samadhi — a unique site where both Kabir's Muslim tomb (Dargah) and Hindu samadhi coexist, reflecting Kabir's universal philosophy; the Basti district has the Bela temple and traditional crafts of the Awadh-terai region; the entire Basti-Gorakhpur area forms the Ganga-Ghaghra-Rapti terai zone of Eastern Uttar Pradesh), and a city of Buddhist historical depth and universal saint heritage — is Eastern UP's most sacred corridor. From birthday parties in Basti to Buddhist circuit celebration cakes, from anniversary surprises near the Rapti to student cakes — RedHeart covers all Basti zones: Basti town, Gorakhpur Road, Rudhauli, Harraiya, Kaptanganj, Nawabganj, Gaur.</p>
<p>Our Basti cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Buddhist Circuit / Kapilavastu / Sant Kabir-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Basti, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Basti town, Gorakhpur Road, Rudhauli, Harraiya, Kaptanganj, Nawabganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Buddhist Circuit Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Basti?", answer: "Yes, same-day cake delivery is available across Basti town, Gorakhpur Road, Rudhauli, Harraiya, and Kaptanganj for orders placed before 3 PM." },
      { question: "Do you have Buddhist Circuit / Kapilavastu and Sant Kabir-themed cakes?", answer: "Yes! The Basti area's connection to Kapilavastu (the birthplace of Prince Siddhartha, who became the Buddha) and the adjacent Sant Kabir Nagar (home of Maghar, where Kabir's unique dual Hindu-Muslim memorial coexists) inspire our most spiritually universal Basti fondant cakes." },
      { question: "Are eggless cakes available in Basti?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Basti delivery." }
    ]
  },

  "chamrajanagar": {
    cityName: "Chamarajanagar",
    metaTitle: "Cake Delivery in Chamarajanagar | BR Hills Tiger Reserve Karnataka | RedHeart",
    metaDescription: "Order cakes online in Chamarajanagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chamarajanagar",
    metaKeyword: "cake delivery chamarajanagar, order cake online chamarajanagar, birthday cake chamarajanagar, custom cake chamarajanagar, same day cake delivery chamarajanagar BR Hills Biligiriranga Hills tiger reserve Soligas tribal Cauvery wildlife Karnataka",
    footerContent: `
<h2>Cake Delivery in Chamarajanagar — Biligiriranga (BR) Hills Tiger Reserve, Soligas Tribal Land, and Karnataka's Southernmost Wildlife Frontier</h2>
<p>Chamarajanagar — the headquarters of Chamarajanagar district in Karnataka, Karnataka's southernmost and most forested district bordering Tamil Nadu and Kerala (the Biligiriranga Hills (BR Hills / BRT Tiger Reserve) — part of the Eastern Ghats-Western Ghats confluence zone — is one of India's most biologically significant wildlife areas; the BR Hills Wildlife Sanctuary (540 sq km) is home to tigers, leopards, elephants, Gaur, and the largest population of bear (sloth bears) in South India; the sanctuary is unique because it forms an ecological bridge between the Eastern and Western Ghats — making it a biodiversity hotspot of immense scientific value; the Soligas — one of India's oldest tribal communities (Soliga Tribe) — inhabit the BR Hills forests; they are considered among the earliest inhabitants of South India and have been engaged in a long legal struggle for forest rights (a landmark 2011 Supreme Court judgment recognised their forest rights under the Forest Rights Act — the first such recognition in India's tiger reserves); the Biligiriranga Swamy Temple at the top of BR Hills (1,798 metres) is dedicated to Lord Vishnu (as Biligiriranga — "White Ranga" or Vishnu in white) and is a significant pilgrimage site accessible by forest road; the Cauvery Wildlife Sanctuary (covering Chamarajanagar-Mysore border area) protects the Upper Cauvery ecosystem; the Nagarhole National Park and the Bandipur Tiger Reserve are adjacent; Chamarajanagar district is known for sandalwood, honey (forest honey from the Soligas), and tendu leaf collection), and a city of extraordinary tribal forest heritage and wildlife grandeur — is Karnataka's most ecologically precious corner. From birthday parties in Chamarajanagar town to BR Hills celebration cakes, from anniversary surprises near the Cauvery wildlife zone to student cakes — RedHeart covers all Chamarajanagar zones: Chamarajanagar town, Kollegal, Yelandur, Gundlupet, Hanur, Ramapura, T. Narasipura.</p>
<p>Our Chamarajanagar cake range: Chocolate, Black Forest, Red Velvet, Honey (Forest Honey!), Butterscotch, Photo Cakes, Fondant BR Hills Tiger / Soligas Tribal / Biligiriranga Temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamarajanagar, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamarajanagar town, Kollegal, Yelandur, Gundlupet, Hanur, Ramapura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, BR Hills Tiger Fondant, Soligas Honey, Black Forest, Biligiriranga Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chamarajanagar?", answer: "Yes, same-day cake delivery is available across Chamarajanagar town, Kollegal, Yelandur, Gundlupet, and Hanur for orders placed before 3 PM." },
      { question: "Do you have BR Hills Tiger Reserve and Soligas Tribal-themed cakes in Chamarajanagar?", answer: "Yes! The Biligiriranga (BR) Hills Tiger Reserve (the biological bridge between Eastern and Western Ghats) and the Soligas tribe (India's oldest surviving tribal community, first to win forest rights in a tiger reserve in 2011) inspire our most ecologically unique Chamarajanagar fondant cakes." },
      { question: "Are eggless cakes available in Chamarajanagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Honey — are available in eggless variants for Chamarajanagar delivery." }
    ]
  },

  "sheohar": {
    cityName: "Sheohar",
    metaTitle: "Cake Delivery in Sheohar | India's Smallest District Bihar | RedHeart",
    metaDescription: "Order cases online in Sheohar. Same-day delivery across Sheohar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sheohar",
    metaKeyword: "cake delivery sheohar, order cake online sheohar, birthday cake sheohar, custom cake sheohar, same day cake delivery sheohar smallest district Bihar Bagmati river Nepal border flood-prone makhana Tirhut Muzaffarpur adjacent",
    footerContent: `
<h2>Cake Delivery in Sheohar — Bihar's Smallest District, Bagmati River's Flood Frontier, and Nepal's Terai Border</h2>
<p>Sheohar — the headquarters of Sheohar district in Bihar, the smallest district by area in Bihar and one of the most flood-vulnerable districts in India (Sheohar district was carved out of Sitamarhi district in 1994 and is Bihar's smallest district by area (443 sq km) but has a significant population density; the district is part of the North Bihar Terai plains — characterised by river systems originating in the Nepal Himalaya; the Bagmati River (which flows south from the Kathmandu Valley in Nepal through the Bihar Terai) passes through Sheohar district; Sheohar is one of the most flood-prone districts in India — the annual Bagmati floods (caused by Nepal Himalaya rainfall and snowmelt) inundate large parts of the district every monsoon season; the district borders Nepal's Terai zone (Bara district, Nepal); the Sheohar region is part of the Tirhut cultural zone of Bihar — known for the Maithili language and culture (Maithili was the language of the Videha kingdom, in which Sita (Janaki) was born — Sitamarhi, the birthplace of Sita, is adjacent to Sheohar); the district's economy is primarily agricultural — makhana (fox nut / Euryale ferox) cultivation (makhana GI belt of North Bihar), rice, wheat, and maize are primary crops; the traditional Mithila painting (Madhubani art) is practiced in the region), and a district of river-challenged resilience and Maithili cultural depth — is Bihar's smallest but most culturally embedded district. From birthday parties in Sheohar to local celebration cakes, from anniversary surprises near the Bagmati to student cakes — RedHeart covers all Sheohar zones: Sheohar town, Tariyani, Piprahi, Punahara, Sursand Road.</p>
<p>Our Sheohar cake range: Chocolate, Black Forest, Red Velvet, Makhana (Fox Nut!) inspired, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheohar, Bihar (smallest district)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheohar town, Tariyani, Piprahi, Punahara, Sursand Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Makhana inspired, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sheohar?", answer: "Yes, same-day cake delivery is available across Sheohar town, Tariyani, Piprahi, and Punahara for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sheohar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sheohar delivery." },
      { question: "Do you deliver midnight cakes in Sheohar?", answer: "Yes, midnight birthday cake delivery is available in Sheohar town and Tariyani zones." }
    ]
  },

  "barmer": {
    cityName: "Barmer",
    metaTitle: "Cake Delivery in Barmer | Thar Desert Oil Kiradu Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Barmer. Same-day delivery across Barmer. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barmer",
    metaKeyword: "cake delivery barmer, order cake online barmer, birthday cake barmer, custom cake barmer, same day cake delivery barmer Thar desert Kiradu temples natural gas oil ONGC Luni river applique woodcraft Rajasthan Pakistan border",
    footerContent: `
<h2>Cake Delivery in Barmer — Kiradu's Desert Temples, India's Natural Gas Boom, and Thar's Pakistan Frontier Town</h2>
<p>Barmer — the headquarters of Barmer district in Rajasthan, one of the westernmost districts of India bordering Pakistan, a district of extraordinary desert culture and India's newest major oil discovery (the Kiradu Temple complex (45 km from Barmer) — a group of five medieval temples built in the 10th-12th centuries CE — is one of Rajasthan's most impressive but least visited temple complexes; the main temple is dedicated to Somesvara (Shiva); the Kiradu temples show mature Solanki-Pratihara temple architecture comparable to the temples at Khajuraho; local legend calls Kiradu "the cursed city" — where residents were turned to stone by a saint they offended; the Barmer area in the Barmer-Sanchore basin is the site of one of India's most significant recent oil-and-gas discoveries — the Mangala, Bhagyam, Aishwarya, and Saraswati oil fields (discovered by Cairn India, now Vedanta) produce 175,000+ barrels per day, making Barmer one of India's major domestic oil production zones; the ONGC gas fields (Kapurdi, Bhadasar) in Barmer supply natural gas to the region; Barmer is famous for its unique traditional crafts — the Barmer appliqué (colorful hand-embroidered patchwork cloth) and Barmer woodwork (intricately carved camel bone and wood furniture) are sold across India; the Barmer Utsav (annual February festival in the sand dunes) celebrates the desert arts; the Luni River (only significant river of the west Rajasthan/Marwar region) originates in the Aravalli and passes through Barmer on its way to the Rann of Kutch), and a city of desert art, ancient temples, and modern oil bounty — is Rajasthan's most energetically rich western frontier. From birthday parties in Barmer to desert celebration cakes, from anniversary surprises near the Kiradu temples to student cakes — RedHeart covers all Barmer zones: Barmer town, Balotra, Siwana, Pachpadra, Sheo, Gudamalani, Dhorimanna.</p>
<p>Our Barmer cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Kiradu Temple / Barmer Oil Field / Thar Desert Appliqué-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barmer, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barmer town, Balotra, Siwana, Pachpadra, Sheo, Gudamalani, Dhorimanna</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kiradu Temple Fondant, Barmer Desert Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barmer?", answer: "Yes, same-day cake delivery is available across Barmer town, Balotra, Siwana, Pachpadra, and Sheo for orders placed before 3 PM." },
      { question: "Do you have Kiradu Temple and Barmer Oil Field / Thar Desert-themed cakes?", answer: "Yes! The Kiradu temple complex (Rajasthan's mysterious 'cursed city' of 10th-12th century temples comparable to Khajuraho) and Barmer's Mangala-Bhagyam oil fields (India's largest onshore oil discovery — 175,000+ barrels per day) inspire our most dramatically contrasting Barmer fondant cakes." },
      { question: "Are eggless cakes available in Barmer?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch, Mango — are available in eggless variants for Barmer delivery." }
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
