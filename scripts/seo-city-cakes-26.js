// Cakes Batch 26 — 15 cities:
// UP: Auraiya, Jalaun (Orai), Lalitpur
// Odisha: Malkangiri, Nabarangpur, Deogarh
// J&K: Anantnag, Baramulla
// Punjab: Taran Taran, Fatehgarh Sahib
// Mizoram: Lunglei
// Meghalaya: Jowai
// Arunachal: Along (Aalo)
// Rajasthan: Karauli
// Gujarat: Vapi [100% eggless Pure Veg]

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "auraiya": {
    cityName: "Auraiya",
    metaTitle: "Cake Delivery in Auraiya | Yamuna Chambal UP | RedHeart",
    metaDescription: "Order cakes online in Auraiya. Same-day delivery across Auraiya. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Auraiya",
    metaKeyword: "cake delivery auraiya, order cake online auraiya, birthday cake auraiya, custom cake auraiya, same day cake delivery auraiya Yamuna Chambal UP Kanpur road Etawah road Auraiya Gas plant ONGC industrial",
    footerContent: `
<h2>Cake Delivery in Auraiya — Yamuna-Chambal Doab, ONGC Gas Plant District, and Central UP's Industrial Hub</h2>
<p>Auraiya — the headquarters of Auraiya district in Uttar Pradesh (carved out of Etawah in 1997), a district that has gained industrial significance due to a major natural gas infrastructure (the ONGC (Oil and Natural Gas Corporation) natural gas pipeline and the GAIL (Gas Authority of India Limited) gas distribution infrastructure pass through Auraiya district; the Auraiya GAIL plant and the associated gas-based fertilizer and LPG infrastructure make Auraiya a significant energy-industrial node in central UP; the Auraiya district also has the Bharthana thermal power plant which is one of UP's significant power generation facilities; beyond industry, Auraiya sits in the fertile Yamuna-Chambal doab (the land between the Yamuna River to the west and the Chambal's eastward-curving tributaries to the south); the district produces significant paddy, wheat, and mustard; the dacoit (bandit) history of the Chambal ravines (the Chambal Valley connecting Auraiya-Etawah-Bhind was once famous for dacoit activity from the 1950s to the 1980s; most famously, Phoolan Devi — the "Bandit Queen" — operated in the Chambal ravines of Etawah-Auraiya in the early 1980s before surrendering in 1983; the region has now been thoroughly pacified), a connection to the historic Bah and Pinahat forts along the Yamuna — is a city of energy industry and Yamuna-Chambal cultural identity. From birthday parties in the Civil Lines area to corporate cakes at the GAIL plant townships, from anniversary surprises near the Kanpur Road to student cakes at Auraiya's colleges — RedHeart covers all Auraiya zones: Civil Lines, Station Road, Kanpur Road, Etawah Road, Dibiyapur, Bidhuna, Bharthana, Sahar.</p>
<p>Our Auraiya cake range: Chocolate, Black Forest, Red Velvet, Mango (UP Langra!), Butterscotch, Photo Cakes, Fondant Yamuna River / Chambal Ravines-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Auraiya, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Kanpur Road, Etawah Road, Dibiyapur, Bidhuna, Bharthana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Auraiya?", answer: "Yes, same-day cake delivery is available across all Auraiya areas — Civil Lines, Station Road, Kanpur Road, Dibiyapur, and Bharthana — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Auraiya?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Auraiya delivery." },
      { question: "Do you deliver midnight cakes in Auraiya?", answer: "Yes, midnight birthday cake delivery is available across Auraiya's central and residential zones." }
    ]
  },

  "jalaun": {
    cityName: "Jalaun",
    metaTitle: "Cake Delivery in Jalaun | Orai Bundelkhand UP | RedHeart",
    metaDescription: "Order cakes online in Jalaun (Orai). Same-day delivery across Jalaun. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jalaun",
    metaKeyword: "cake delivery jalaun orai, order cake online jalaun, birthday cake jalaun orai, custom cake jalaun, same day cake delivery jalaun orai Bundelkhand Betwa river Ken river Madhya Pradesh border Kalpi ghats",
    footerContent: `
<h2>Cake Delivery in Jalaun (Orai) — Bundelkhand's Betwa River Heritage, Kalpi Ghats, and UP-MP Border's Stone Crafts District</h2>
<p>Jalaun — the headquarters of Jalaun district in Uttar Pradesh's Bundelkhand region (the district HQ is at Orai town), a city of Bundelkhand's distinct cultural and geographical character (Jalaun district lies in the heartland of the Bundelkhand plateau — the rocky, semi-arid, historically turbulent region shared by UP and Madhya Pradesh; the Betwa River (Vetravati) — which rises in the Vindhya hills of MP and flows through Bundelkhand — forms part of Jalaun's boundary; the Ken River flows through the southern part of Jalaun; the Kalpi town in Jalaun district — on the Yamuna ghats — is historically significant: Kalpi was the site of the 1858 Battle of Kalpi during the First War of Independence (1857), where Rani Laxmibai of Jhansi was defeated by the British East India Company and escaped to Gwalior; the Kalpi ghats and ruins have historical significance; Jalaun district is also known for red sandstone mining (the Bundelkhand plateau has significant red sandstone deposits used in construction) and for traditional carpet weaving at Orai; the district is agriculturally challenging — low and erratic rainfall has historically made Bundelkhand prone to droughts; the government's Bundelkhand Special Package has invested in water conservation, roads, and irrigation; the Orai-Konch-Jalaun-Kalpi towns form the commercial corridor of the district), and a district sharing Bundelkhand's warrior culture (the Bundela Rajput clans, Chandela rulers, and the Peshwa-Maratha influence are all part of Jalaun's layered political history) — is a city of Yamuna-Betwa river heritage. From birthday parties in the Orai Civil Lines to corporate cakes at the stone processing units, from anniversary surprises near the Kanpur Road to student cakes at Jalaun's colleges — RedHeart covers all Jalaun zones: Orai (Civil Lines, Station Road, Kanpur Road), Kalpi, Konch, Jalaun town, Madhogarh, Rampura.</p>
<p>Our Jalaun cake range: Chocolate, Black Forest, Red Velvet, Mango (Bundelkhand Langra!), Butterscotch, Photo Cakes, Fondant Kalpi Ghat / Bundelkhand warrior-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalaun (Orai), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orai Civil Lines, Station Road, Kanpur Road, Kalpi, Konch, Jalaun town</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kalpi Ghat Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jalaun / Orai?", answer: "Yes, same-day cake delivery is available across all Jalaun areas — Orai Civil Lines, Station Road, Kanpur Road, Kalpi, and Konch — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jalaun?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jalaun delivery." },
      { question: "Do you deliver midnight cakes in Jalaun?", answer: "Yes, midnight birthday cake delivery is available across Jalaun's central and residential zones." }
    ]
  },

  "lalitpur": {
    cityName: "Lalitpur",
    metaTitle: "Cake Delivery in Lalitpur | Chandela Bundelkhand UP | RedHeart",
    metaDescription: "Order cakes online in Lalitpur. Same-day delivery across Lalitpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lalitpur",
    metaKeyword: "cake delivery lalitpur, order cake online lalitpur, birthday cake lalitpur, custom cake lalitpur, same day cake delivery lalitpur Bundelkhand Chandela granite mining Betwa Dhasan river Rajasthan MP border Devgarh Jain temples",
    footerContent: `
<h2>Cake Delivery in Lalitpur — Devgarh's Rare Jain Cave Temples, Chandela Granite Mines, and Bundelkhand's Southern Frontier</h2>
<p>Lalitpur — the headquarters of Lalitpur district in Uttar Pradesh's Bundelkhand region, a district at the three-state corner of UP-MP-Rajasthan with exceptional archaeological and mineral wealth (the Devgarh temple complex near Lalitpur — a group of rock-cut Jain temples carved into a hill, dating primarily to the 8th-17th century CE — is one of the most significant Jain pilgrimage and archaeological sites in northern India; Devgarh has over 100 Jain temples including the remarkable Dashavatara Temple (one of the earliest Vishnu temples in India, 5th century CE, Gupta period) and the later Jain monastic temples on the rocky hillside; it is far less crowded than Khajuraho despite having comparable artistic significance; Lalitpur district is also known for its granite mining industry — the Bundelkhand craton, one of India's oldest geological formations, has high-quality granite deposits that are quarried around Lalitpur and exported nationally and internationally; the Betwa River and the Dhasan River flow through Lalitpur, with the Rajghat Dam on the Betwa forming the UP-MP border near Lalitpur; the Lalitpur-Tikamgarh-Datia belt is the heart of Bundelkhand's stone and granite industry; additionally, Lalitpur is close to Rajasthan's Jhalawar border, and the cultural influence of Rajasthani Bundeli culture is strong here) — is a city of ancient Jain heritage and granite country. From birthday parties in the Civil Lines area to corporate cakes at the granite quarry offices, from anniversary surprises near the Jhansi Road to student cakes at Lalitpur's colleges — RedHeart covers all Lalitpur zones: Civil Lines, Station Road, Jhansi Road, MP border, Devgarh, Birdha, Pali, Talbehat, Mehroni.</p>
<p>Our Lalitpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Bundelkhand!), Butterscotch, Photo Cakes, Fondant Devgarh Jain Temples / Chandela heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Jhansi Road, Devgarh, Birdha, Talbehat, Mehroni</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Devgarh Jain Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lalitpur?", answer: "Yes, same-day cake delivery is available across all Lalitpur areas — Civil Lines, Station Road, Jhansi Road, Devgarh, and Talbehat — for orders placed before 3 PM." },
      { question: "Do you have Devgarh Jain Temple-themed cakes in Lalitpur?", answer: "Yes! The Devgarh temple complex — with 100+ Jain temples carved into a rocky hillside (8th-17th century) and the 5th-century Gupta-era Dashavatara Vishnu temple — is one of India's most significant but least-visited heritage sites, and inspires our Devgarh fondant cakes." },
      { question: "Are eggless cakes available in Lalitpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Lalitpur delivery." }
    ]
  },

  "malkangiri": {
    cityName: "Malkangiri",
    metaTitle: "Cake Delivery in Malkangiri | Satiguda Lake Odisha | RedHeart",
    metaDescription: "Order cakes online in Malkangiri. Same-day delivery across Malkangiri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Malkangiri",
    metaKeyword: "cake delivery malkangiri, order cake online malkangiri, birthday cake malkangiri, custom cake malkangiri, same day cake delivery malkangiri Satiguda reservoir Balimela hydroelectric Godavari tribal Koya Kondh Andhra Chhattisgarh border",
    footerContent: `
<h2>Cake Delivery in Malkangiri — Balimela Reservoir Island Town, Koya Tribal Homeland, and Odisha's Tri-State Southern Frontier</h2>
<p>Malkangiri — the headquarters of Malkangiri district in Odisha, one of India's most geographically unique and remote district capitals (Malkangiri town is almost an island — it is nearly completely surrounded by the Satiguda and Balimela reservoirs on the Sileru River (a Godavari tributary); the two reservoirs (Satiguda Reservoir and Balimela Hydroelectric Reservoir) together almost completely encircle the Malkangiri plateau where the town is located; the Balimela Dam — completed in 1972 — is one of Odisha-AP's major hydroelectric projects; Malkangiri can only be reached by crossing the reservoir by boat or bridge; this island-like geography makes Malkangiri one of the most distinctive district headquarters in India; additionally, the Malkangiri district is home to the Koya (or Koitur) tribal community — the dominant tribal group of the Godavari-Sileru valley; the Koya people practice shifting (podu) cultivation and have distinctive cultural traditions; the region borders Andhra Pradesh (Alluri Sitarama Raju district) and Chhattisgarh (Sukma district) — making it a tri-state border area; the Malkangiri district has historically had Left Wing Extremism (Naxalite) presence, which is now significantly reduced due to government operations and development; the district produces forest produce including bamboo, tendu leaves, and mahua), a district with fish from the Sileru and Godavari river systems — is India's most remote island-plateau district capital. From birthday parties in the town to corporate cakes at the OHPC (Odisha Hydropower Corporation) offices, from celebration cakes at the government quarters to anniversary surprises in Malkangiri — RedHeart covers all Malkangiri zones: Malkangiri town, Satiguda area, Balimela township, Chitrakonda, Kalimela, Mathili, Korukonda.</p>
<p>Our Malkangiri cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Balimela Reservoir / island landscape-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malkangiri, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malkangiri town, Satiguda area, Balimela township, Chitrakonda, Kalimela, Mathili</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Balimela Reservoir Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Malkangiri?", answer: "Yes, same-day cake delivery is available across all Malkangiri areas — Malkangiri town, Satiguda, Balimela township, and Chitrakonda — for orders placed before 3 PM." },
      { question: "Do you have Balimela Reservoir / island landscape-themed cakes in Malkangiri?", answer: "Yes! Malkangiri is India's most unique district capital — almost completely surrounded by the Satiguda and Balimela reservoirs, making it an island town; this extraordinary geography inspires our Balimela Reservoir fondant cakes." },
      { question: "Are eggless cakes available in Malkangiri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Malkangiri delivery." }
    ]
  },

  "nabarangpur": {
    cityName: "Nabarangpur",
    metaTitle: "Cake Delivery in Nabarangpur | Tribal Craft Odisha | RedHeart",
    metaDescription: "Order cakes online in Nabarangpur. Same-day delivery across Nabarangpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nabarangpur",
    metaKeyword: "cake delivery nabarangpur, order cake online nabarangpur, birthday cake nabarangpur, custom cake nabarangpur, same day cake delivery nabarangpur Koraput border tribal Kondh bell metal Chhattisgarh border Indravati river dhokra craft",
    footerContent: `
<h2>Cake Delivery in Nabarangpur — Tribal Dhokra Bell-Metal Craft, Indravati River's Forested Headwaters, and Odisha-Chhattisgarh Southern Frontier</h2>
<p>Nabarangpur — the headquarters of Nabarangpur district in Odisha (carved out of Koraput in 1992), a district of extraordinary tribal artisan heritage (Nabarangpur is one of India's premier centres for Dhokra — the ancient lost-wax metal casting technique used by tribal artisans to create distinctive brass and bell-metal (kansa) animal figurines, tribal women figures, lamps, and decorative items; the Dhokra craft of Nabarangpur (and related districts) is one of the world's oldest metal casting traditions — using the cire-perdue (lost-wax) process that dates back to the Indus Valley Civilisation; Nabarangpur's tribal artisans create Dhokra elephants, horses, peacocks, and geometric shapes that have received national awards and are exported internationally; the district is home to the Kondh, Gond, and Paraja tribal communities; the Indravati River — which ultimately flows into the Godavari after passing through Bastar (Chhattisgarh) — rises in the hills of Nabarangpur and Koraput; the district borders Chhattisgarh's Jagdalpur (Bastar) to the north and Andhra Pradesh to the south; the Nabarangpur forests have significant medicinal plant, bamboo, tendu leaf, and mahua tree production; the traditional festivals — Chaita Parba, Nuakhai, and various tribal harvest festivals — are celebrated enthusiastically in the district) — is a city of Dhokra craft pride and forested river headwaters. From birthday parties in the Civil Lines area to corporate cakes at the Dhokra craft emporiums, from anniversary surprises near the Koraput Road to student cakes at Nabarangpur's colleges — RedHeart covers all Nabarangpur zones: Civil Lines, Station Road, Koraput Road, Chhattisgarh border, Umerkote, Raighar, Tentulikhunti, Papadahandi.</p>
<p>Our Nabarangpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Dhokra Metal Craft / tribal heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nabarangpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Koraput Road, Umerkote, Raighar, Tentulikhunti, Papadahandi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dhokra Craft Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nabarangpur?", answer: "Yes, same-day cake delivery is available across all Nabarangpur areas — Civil Lines, Station Road, Koraput Road, and Umerkote — for orders placed before 3 PM." },
      { question: "Do you have Dhokra Metal Craft-themed cakes in Nabarangpur?", answer: "Yes! Nabarangpur's tribal Dhokra artisans practice one of the world's oldest metal casting traditions — the lost-wax (cire-perdue) technique dating to the Indus Valley civilisation — creating distinctive bell-metal figurines. Our Dhokra craft fondant cakes celebrate this living heritage." },
      { question: "Are eggless cakes available in Nabarangpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nabarangpur delivery." }
    ]
  },

  "deogarh": {
    cityName: "Deogarh",
    metaTitle: "Cake Delivery in Deogarh | Banjara Hills Odisha | RedHeart",
    metaDescription: "Order cakes online in Deogarh. Same-day delivery across Deogarh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Deogarh",
    metaKeyword: "cake delivery deogarh, order cake online deogarh, birthday cake deogarh, custom cake deogarh, same day cake delivery deogarh odisha Banjara Hills Brahmani river tribal Bhuiya Paika Kshatriya Sambalpur road Angul border fort",
    footerContent: `
<h2>Cake Delivery in Deogarh — Banjara Hills, Brahmani River's Headwaters, and Odisha's Small Hill Kingdom Heritage</h2>
<p>Deogarh — the headquarters of Deogarh district in Odisha (one of the smaller districts, carved out of Sambalpur), a district of forested hills, river headwaters, and zamindari heritage (Deogarh was historically a small princely zamindari state; the Deogarh Raja's fort and palace ruins atop a hill are a modest reminder of the small royal estate that governed this area under the British; the Brahmani River — one of Odisha's most important rivers, flowing through the Rourkela steel belt and ultimately joining the Mahanadi near Paradip — has its headwaters in the Banjara Hills of Deogarh and neighbouring areas; the Banjara Hills (not to be confused with Hyderabad's Banjara Hills) of western Odisha form the western edge of the Eastern Ghats in this region; the forests of Deogarh district are mixed deciduous with sal, bamboo, and kendu (tendu) trees; the district is home to the Bhuiya, Paika Kshatriya, and Juang tribal communities; small-scale iron ore and limestone deposits are found in Deogarh district; the district is largely rural and agricultural, with paddy, maize, and pulses as main crops; Deogarh's rural haat (weekly markets) are vibrant community gathering points), and a district bordering Sambalpur, Angul, Sundargarh, and Jharsuguda — is a small hill district of forest and river heritage. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Sambalpur Road to student cakes at Deogarh's colleges — RedHeart covers all Deogarh zones: Civil Lines, Fort Road, Sambalpur Road, Angul Road, Tileibani, Reamal, Barkote.</p>
<p>Our Deogarh cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Banjara Hills / Brahmani River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deogarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Fort Road, Sambalpur Road, Angul Road, Tileibani, Reamal, Barkote</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Deogarh, Odisha?", answer: "Yes, same-day cake delivery is available across all Deogarh areas — Civil Lines, Fort Road, Sambalpur Road, and Tileibani — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Deogarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Deogarh delivery." },
      { question: "Do you deliver midnight cakes in Deogarh?", answer: "Yes, midnight birthday cake delivery is available across Deogarh's central and residential zones." }
    ]
  },

  "anantnag": {
    cityName: "Anantnag",
    metaTitle: "Cake Delivery in Anantnag | Kashmir Valley South J&K | RedHeart",
    metaDescription: "Order cakes online in Anantnag. Same-day delivery across Anantnag. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Anantnag",
    metaKeyword: "cake delivery anantnag, order cake online anantnag, birthday cake anantnag, custom cake anantnag, same day cake delivery anantnag Islamabad Kashmir Lidder river Pahalgam Verinag spring saffron Zaffran Martand sun temple",
    footerContent: `
<h2>Cake Delivery in Anantnag — Martand Sun Temple's Ancient Ruins, Pahalgam's Valley of Shepherds, and Kashmir's Saffron Capital</h2>
<p>Anantnag — the headquarters of Anantnag district in Jammu & Kashmir (also known historically as Islamabad), a city at the centre of some of Kashmir's most spectacular landscape and heritage (the Anantnag district is one of the most historically and scenically significant districts of the Kashmir Valley; the Martand Sun Temple — 8 km from Anantnag at Mattan — is one of India's most magnificent ancient ruins; the Martand temple, built by the Karkota king Lalitaditya Muktapida (8th century CE), was a massive Shiva-Sun temple complex with 84 subsidiary shrines surrounding a colonnade — the ruins still convey the grandeur of what was one of the subcontinent's greatest temples; the temple was destroyed by Sikandar Shah Miri (the iconoclast sultan) in the 15th century; Anantnag is close to Pahalgam — the Valley of Shepherds (Lidder Valley), one of Kashmir's most beautiful tourist destinations, base for the Amarnath Yatra pilgrimage, and known for its trout fishing and meadows; Verinag — the head spring of the Jhelum River — is a historic garden (built by Mughal emperor Jahangir) in Anantnag district; the district is also Kashmir's largest saffron-growing region: the Pampore Saffron fields (adjacent to Anantnag) produce some of the world's finest Kashmiri Mongra Saffron (Zaffran) — with GI protection; Kashmiri saffron is considered the world's best due to its deep colour, fragrance, and long thread), known for Kashmiri handicrafts (pashmina, carpet weaving, walnut wood carving) and tourism infrastructure for the Amarnath Yatra — is a city of ancient sun worship, saffron fields, and mountain beauty. From birthday parties in the Lal Chowk area to corporate cakes at the tourist resort hotels, from Eid celebration cakes to anniversary surprises near the Pahalgam Road — RedHeart covers all Anantnag zones: Anantnag town, Bijbehara, Qazigund, Pahalgam, Kokernag, Dooru, Shangus, Verinag.</p>
<p>Our Anantnag cake range: Chocolate, Black Forest, Red Velvet, Saffron (Kashmiri Zaffran!), Walnut (Kashmiri akhrot!), Butterscotch, Photo Cakes, Fondant Martand Temple / Pahalgam Valley-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anantnag, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anantnag town, Bijbehara, Qazigund, Pahalgam, Kokernag, Dooru, Verinag</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saffron Cake, Walnut Cake, Chocolate, Martand Temple Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Anantnag?", answer: "Yes, same-day cake delivery is available across all Anantnag areas — Anantnag town, Bijbehara, Pahalgam, Kokernag, and Verinag — for orders placed before 3 PM." },
      { question: "Do you have Kashmiri Saffron cake in Anantnag?", answer: "Yes! Anantnag district's Pampore saffron fields produce the world's finest Kashmiri Zaffran (Mongra saffron) — GI-protected and renowned globally for its deep red colour and intense fragrance. Our Kashmiri Saffron cake brings this legendary local flavour to your celebration." },
      { question: "Are eggless cakes available in Anantnag?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Saffron, Walnut — are available in eggless variants for Anantnag delivery." }
    ]
  },

  "baramulla": {
    cityName: "Baramulla",
    metaTitle: "Cake Delivery in Baramulla | Jhelum Valley Kashmir | RedHeart",
    metaDescription: "Order cakes online in Baramulla. Same-day delivery across Baramulla. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Baramulla",
    metaKeyword: "cake delivery baramulla, order cake online baramulla, birthday cake baramulla, custom cake baramulla, same day cake delivery baramulla Jhelum river Wular Lake Gulmarg Sopore apple Uri Loc border Kashmir",
    footerContent: `
<h2>Cake Delivery in Baramulla — Jhelum Gateway, Wular Lake's Wetland, and Kashmir's Apple & Fur Trade Frontier</h2>
<p>Baramulla — the headquarters of Baramulla district in Jammu & Kashmir, the district that is the gateway to the Kashmir Valley from the west (Baramulla sits where the Jhelum River exits the Kashmir Valley through the Pir Panjal gorge and enters the plains of Pakistan-administered Kashmir; the town has been the gateway into the Valley of Kashmir from the west for millennia — all ancient and modern traders, pilgrims, and armies entering Kashmir from Pakistan or the Punjab plains came through Baramulla; the town's position on the Jhelum River makes it strategically and economically vital; in 1947, tribal raiders from Pakistan's NWFP (supported by Pakistan) entered Kashmir through Baramulla and committed significant violence before being stopped by Indian forces — the 1947 raid on Baramulla is one of the first events of the Kashmir conflict; the Uri sector of Baramulla district — close to the Line of Control — was the site of the 2016 Uri Army camp attack; the Wular Lake — Asia's largest freshwater lake — is in Baramulla district; the lake (and the Sopore wetlands) are critical wintering and breeding grounds for migratory waterfowl including the White-tailed Eagle; Gulmarg — Baramulla district — is Kashmir's premier ski resort (2,650 metres), with the Gulmarg Gondola being one of the world's highest cable cars; Sopore in Baramulla is the commercial hub for the vast north Kashmir apple orchards; the Sopore apple market is one of Asia's largest apple markets — the Sopore Delicious apple variety is famous nationwide; the district also has significant walnut, almond, and cherry orchards) — is a city of Jhelum heritage, ski resort, and apple market. From birthday parties in Baramulla town to celebration cakes at Gulmarg ski lodges, from anniversary surprises near the Sopore apple market to student cakes at Baramulla's colleges — RedHeart covers all Baramulla zones: Baramulla town, Sopore, Gulmarg, Pattan, Uri, Rafiabad, Boniyar, Tangmarg.</p>
<p>Our Baramulla cake range: Chocolate, Black Forest, Red Velvet, Kashmiri Apple (Sopore Delicious!), Walnut (Kashmir akhrot!), Saffron, Photo Cakes, Fondant Gulmarg Gondola / Wular Lake-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baramulla, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baramulla town, Sopore, Gulmarg, Pattan, Uri, Rafiabad, Tangmarg</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kashmiri Apple, Walnut, Chocolate, Gulmarg Gondola Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Baramulla?", answer: "Yes, same-day cake delivery is available across all Baramulla areas — Baramulla town, Sopore, Gulmarg, Pattan, and Tangmarg — for orders placed before 3 PM." },
      { question: "Do you have Sopore Kashmiri Apple cake in Baramulla?", answer: "Yes! Sopore in Baramulla district is the centre of Kashmir's apple industry — the Sopore apple market is one of Asia's largest. Our Kashmiri Apple cake celebrates the Sopore Delicious apple — sweet, crisp, and famous across India." },
      { question: "Are eggless cakes available in Baramulla?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple, Walnut, Saffron — are available in eggless variants for Baramulla delivery." }
    ]
  },

  "taran-taran": {
    cityName: "Taran Taran",
    metaTitle: "Cake Delivery in Taran Taran | Sikh Sarovar Punjab | RedHeart",
    metaDescription: "Order cakes online in Taran Taran. Same-day delivery across Taran Taran. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Taran Taran",
    metaKeyword: "cake delivery taran taran, order cake online taran taran, birthday cake taran taran, custom cake taran taran, same day cake delivery taran taran sarovar Guru Arjan Dev Pakistan border Amritsar road Majha Punjab",
    footerContent: `
<h2>Cake Delivery in Taran Taran — Guru Arjan Dev's Sacred Sarovar, Pakistan Border Majha Punjab, and Sikh Devotion's Heartland</h2>
<p>Taran Taran — the headquarters of Taran Taran district in Punjab (carved out of Amritsar in 2006), one of Sikhism's most sacred towns after Amritsar (the Taran Taran Sahib Gurudwara — the second most important Gurudwara in the Majha region — was established by Guru Arjan Dev Ji (the 5th Sikh Guru) in 1590 CE; Guru Arjan Dev built the large sarovar (sacred tank) at Taran Taran to provide a place of worship and healing for lepers and the sick; the word "Taran Taran" means "the one that ferries across (the ocean of birth and death)" — a spiritual meaning; the Gurudwara at Taran Taran has one of the largest sarovars among Sikh shrines; the Langar (community kitchen) at Taran Taran serves thousands of devotees daily; the district borders Pakistan to the west (the Wagah-Attari border crossing between India and Pakistan is in the Amritsar district adjacent to Taran Taran; the India-Pakistan border runs close to Taran Taran's western edge; the Majha cultural zone — between the Beas and the Ravi rivers — is Punjab's most culturally distinct region and Taran Taran is its heartland; Majha culture is associated with the most authentic Punjabi bhangra, dialect, and martial tradition; Taran Taran district is agriculturally rich — paddy, wheat, and cotton production; the district also has sugarcane and vegetable cultivation near the Beas River) — is a city of Sikh devotion, Majha pride, and Pakistan border proximity. From birthday parties in Taran Taran town to corporate cakes at the agricultural societies, from Gurpurab celebration cakes to anniversary surprises near the Amritsar Road — RedHeart covers all Taran Taran zones: Taran Taran town, Patti, Khadur Sahib, Bhikhiwind, Harike, Valtoha, Sursingh.</p>
<p>Our Taran Taran cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Taran Taran Sarovar / Guru Arjan Dev-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Taran Taran, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Taran Taran town, Patti, Khadur Sahib, Bhikhiwind, Harike, Valtoha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sarovar Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Taran Taran?", answer: "Yes, same-day cake delivery is available across all Taran Taran areas — Taran Taran town, Patti, Khadur Sahib, Bhikhiwind, and Harike — for orders placed before 3 PM." },
      { question: "Do you have Taran Taran Sarovar / Guru Arjan Dev-themed cakes?", answer: "Yes! The Taran Taran Sahib Gurudwara — established by Guru Arjan Dev Ji in 1590, with one of Sikhism's largest and most sacred sarovars — inspires our Taran Taran Sarovar fondant cakes, a deeply devotional design for this holy city." },
      { question: "Are eggless cakes available in Taran Taran?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Taran Taran delivery." }
    ]
  },

  "fatehgarh-sahib": {
    cityName: "Fatehgarh Sahib",
    metaTitle: "Cake Delivery in Fatehgarh Sahib | Sikh Martyrdom Punjab | RedHeart",
    metaDescription: "Order cakes online in Fatehgarh Sahib. Same-day delivery across Fatehgarh Sahib. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fatehgarh Sahib",
    metaKeyword: "cake delivery fatehgarh sahib, order cake online fatehgarh sahib, birthday cake fatehgarh sahib, custom cake fatehgarh sahib, same day cake delivery fatehgarh sahib Guru Gobind Singh sons Wazir Khan Sirhind sahibzade jor mela Punjab",
    footerContent: `
<h2>Cake Delivery in Fatehgarh Sahib — The Sahibzades' Supreme Sacrifice, Jor Mela Pilgrimage, and Punjab's Most Sacred Martyrdom Shrine</h2>
<p>Fatehgarh Sahib — the headquarters of Fatehgarh Sahib district in Punjab (formerly Sirhind), one of the most emotionally significant sacred sites in Sikhism (the Fateh Burj (Victory Tower) near Chappar Chiri marks the 1710 Battle of Chappar Chiri where Banda Singh Bahadur defeated the Mughal forces and killed Wazir Khan — the Mughal governor of Sirhind who had executed Guru Gobind Singh's two younger sons; the Sirhind town (the old name of Fatehgarh Sahib district) is where Wazir Khan bricked alive Guru Gobind Singh's younger Sahibzades — Baba Zorawar Singh (aged 8) and Baba Fateh Singh (aged 6) — in 1705; the two young sons refused to convert to Islam even under torture and died as martyrs; this sacrifice is considered one of the most moving events in Sikh history and their memory is honoured at the Fatehgarh Sahib Gurudwara complex; the Jor Mela — held every December at Fatehgarh Sahib — is one of the largest Sikh religious gatherings in the world, drawing millions of pilgrims; the Gurdwara Fatehgarh Sahib, Gurdwara Jyoti Sarup, and the Mata Gujari Gurdwara are the main shrines in the complex; the Fateh Burj at Chappar Chiri is Punjab's tallest tower commemorating the victory), a district with the ancient Sirhind Fort ruins (Sirhind was one of the most important Mughal-period towns in the Punjab; the Aam Khas Bagh Mughal garden is still preserved) and a city on the Ambala-Ludhiana National Highway (the district is on the old Grand Trunk Road route) — is Punjab's most emotionally sacred martyrdom district. From birthday parties near the Gurudwara complex to corporate cakes in Mandi Gobindgarh (the district's steel city), from Gurpurab and Jor Mela cakes to anniversary surprises — RedHeart covers all Fatehgarh Sahib zones: Fatehgarh Sahib town, Mandi Gobindgarh (steel city), Amloh, Bassi Pathana, Sirhind area, Khamano.</p>
<p>Our Fatehgarh Sahib cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Sahibzades / Fateh Burj / Jor Mela-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehgarh Sahib, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehgarh Sahib town, Mandi Gobindgarh, Amloh, Bassi Pathana, Sirhind, Khamano</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sahibzades Tribute Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fatehgarh Sahib?", answer: "Yes, same-day cake delivery is available across all Fatehgarh Sahib areas — Fatehgarh Sahib town, Mandi Gobindgarh, Amloh, Sirhind, and Khamano — for orders placed before 3 PM." },
      { question: "Do you have Sahibzades Tribute / Jor Mela-themed cakes in Fatehgarh Sahib?", answer: "Yes! The supreme sacrifice of the Chote Sahibzade (Baba Zorawar Singh and Baba Fateh Singh) at Sirhind — two of the most revered martyrs in Sikh history — and the Jor Mela pilgrimage inspire our Sahibzades Tribute fondant cakes." },
      { question: "Are eggless cakes available in Fatehgarh Sahib?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Fatehgarh Sahib delivery." }
    ]
  },

  "lunglei": {
    cityName: "Lunglei",
    metaTitle: "Cake Delivery in Lunglei | South Mizoram Hill Town | RedHeart",
    metaDescription: "Order cakes online in Lunglei. Same-day delivery across Lunglei. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lunglei",
    metaKeyword: "cake delivery lunglei, order cake online lunglei, birthday cake lunglei, custom cake lunglei, same day cake delivery lunglei Mizoram Mizo tribe Tlawng river Bangladesh border Myanmar border Chakma hill town second largest",
    footerContent: `
<h2>Cake Delivery in Lunglei — Mizoram's Second City, Tlawng River's Hill Country, and Bangladesh-Myanmar Tri-Border Zone</h2>
<p>Lunglei — the headquarters of Lunglei district in Mizoram, the second largest city of Mizoram after Aizawl (Lunglei is a hill town at approximately 1,100 metres in the southern Mizo Hills; it is the commercial, educational, and administrative hub for southern Mizoram; the name "Lunglei" comes from "Lung" (stone/rock) and "Lei" (bridge/span) in Mizo — referring to a natural stone bridge formation in the area; the Lunglei district borders Bangladesh to the west (Chittagong Hill Tracts) and Myanmar (Chin State) to the east, and Tripura and Assam to the north; this tri-border position makes Lunglei important for Mizoram's international connectivity; the Tlawng River (the main river of Mizoram) originates in the Lunglei hills and flows northward through the state; Lunglei town was the second British administrative centre in the Lushai Hills (after Aizawl); the Presbyterian and Baptist churches (Christianity is the dominant religion in Mizoram — over 87% of the population is Christian) are the most prominent institutions in Lunglei; the Mizo community's strong church life, choral music tradition (Mizoram has remarkable choir music), and literacy rate (Mizoram has one of India's highest literacy rates at 91%) make Lunglei a distinctive northeast Indian hill town; the district has significant Chakma and Lai minority communities alongside the majority Mizo Lusei people), known for its handicrafts (Mizo bamboo and cane weaving, puan traditional cloth) and flower cultivation (anthurium and gerbera) — is Mizoram's culturally vibrant second capital. From birthday parties in Lunglei town to corporate cakes at government offices, from Christmas and Easter celebration cakes to anniversary surprises near the Aizawl Road — RedHeart covers all Lunglei zones: Lunglei town, Bunghmun, Hnahthial, Tlabung, Lawngtlai border, Chhimtuipui area, Ngopa.</p>
<p>Our Lunglei cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Mizo Puan / Tlawng River / Lunglei Stone Bridge-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lunglei, Mizoram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lunglei town, Bunghmun, Hnahthial, Tlabung, Chhimtuipui area, Ngopa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mizo Puan Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lunglei?", answer: "Yes, same-day cake delivery is available across all Lunglei areas — Lunglei town, Bunghmun, Hnahthial, and Tlabung — for orders placed before 3 PM." },
      { question: "Do you have Mizo cultural-themed cakes in Lunglei?", answer: "Yes! The beautiful Mizo puan traditional woven cloth (in distinctive geometric patterns), the Tlawng River's hill landscape, and Mizoram's rich choral and church culture inspire our Mizo Puan fondant cakes." },
      { question: "Are eggless cakes available in Lunglei?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Lunglei delivery." }
    ]
  },

  "jowai": {
    cityName: "Jowai",
    metaTitle: "Cake Delivery in Jowai | Jaintia Hills Meghalaya | RedHeart",
    metaDescription: "Order cakes online in Jowai. Same-day delivery across Jowai. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jowai",
    metaKeyword: "cake delivery jowai, order cake online jowai, birthday cake jowai, custom cake jowai, same day cake delivery jowai Jaintia Hills Meghalaya Pnar Jaintia tribe coal limestone Kopili river Shillong road Assam border Nartiang",
    footerContent: `
<h2>Cake Delivery in Jowai — Jaintia Hills' Coal Caves, Nartiang's Monoliths, and Meghalaya's Eastern Hill Capital</h2>
<p>Jowai — the headquarters of West Jaintia Hills district in Meghalaya, the cultural and commercial capital of the Jaintia (Pnar) people (Jowai is the centre of the Jaintia tribe — also called Pnar or Synteng — one of Meghalaya's three major tribal groups (the others being Khasi and Garo); the Jaintia (Pnar) people have a unique matrilineal social system (property and clan membership pass through the mother's line), distinctive music (nongkynmaw — frame drum music), oral traditions, and the Behdienkhlam festival — the most important festival of the Jaintia people, held in July; Behdienkhlam is a unique festival involving the symbolic casting out of disease (plague) through rituals, processions, and the pushing of raft-like structures into a pond; the Jowai town is known for its distinctive architecture and the stone-built Iawmusiang (cultural centre); the Nartiang village (30 km from Jowai) has the largest collection of monoliths (menhirs) in South Asia — both dolmens (flat-topped stone tables) and menhirs (tall standing stones) erected in memory of Jaintia kings and nobles; the West Jaintia Hills has India's largest coal reserves — the small coal mines of the Jaintia Hills produced significant coal from rat-hole mining (a controversial practice now restricted by the Supreme Court); the Kopili River rises in the Jaintia Hills and flows into Assam's Karbi Anglong; the district has scenic landscapes including Krang Shuri waterfall and the Thadlaskein Lake) — is a city of monoliths, coal country, and Jaintia cultural pride. From birthday parties in Jowai town to corporate cakes at the coal and limestone firms, from Behdienkhlam celebration cakes to anniversary surprises near the Shillong Road — RedHeart covers all Jowai zones: Jowai town, Laskein, Amlarem, Mynso, Nartiang, Thadlaskein, Shillong Road area.</p>
<p>Our Jowai cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Nartiang Monoliths / Behdienkhlam Festival-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jowai, Meghalaya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jowai town, Laskein, Amlarem, Mynso, Nartiang, Thadlaskein</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nartiang Monolith Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jowai?", answer: "Yes, same-day cake delivery is available across all Jowai areas — Jowai town, Laskein, Amlarem, and Nartiang — for orders placed before 3 PM." },
      { question: "Do you have Nartiang Monolith / Behdienkhlam Festival-themed cakes in Jowai?", answer: "Yes! The Nartiang monolith field — South Asia's largest collection of standing stones and dolmens erected by Jaintia kings — and the unique Behdienkhlam festival of the Pnar people inspire our distinctively local Jowai fondant cakes." },
      { question: "Are eggless cakes available in Jowai?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Jowai delivery." }
    ]
  },

  "along": {
    cityName: "Along",
    metaTitle: "Cake Delivery in Along | Aalo West Siang Arunachal | RedHeart",
    metaDescription: "Order cakes online in Along (Aalo). Same-day delivery across Along. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Along",
    metaKeyword: "cake delivery along aalo, order cake online along arunachal, birthday cake along, custom cake along aalo, same day cake delivery along aalo West Siang Siang river Adi tribe kiwi orange Arunachal Pradesh",
    footerContent: `
<h2>Cake Delivery in Along (Aalo) — Adi Tribe's Living Culture, Siang River's Mighty Gorge, and Arunachal's Fruit Basket</h2>
<p>Along — officially renamed Aalo, the headquarters of West Siang district in Arunachal Pradesh, a town with extraordinary tribal culture and river landscape (Along/Aalo is the commercial and administrative hub for the Adi (Abor) tribal people — one of Arunachal Pradesh's largest and most culturally vibrant tribes; the Adi people are known for their distinctive bamboo and cane crafts, their Ponung dance (performed by women in a circle), the Solung harvest festival (one of Arunachal's most important tribal festivals, celebrated with prayers, feasting, meat offering and the sacrifice of mithun — the wild gayal cattle unique to northeast India), and the Dobur Uie festival at the Siang River; the Siang River — which becomes the Brahmaputra after entering Assam's plains — flows through West Siang district in breathtaking gorges and rapid sections; the Siang's upper reaches (in China it is the Yarlung Tsangpo) enter India through Arunachal Pradesh and Along is the most significant town along this stretch; the Siang bridge at Along is a landmark; Additionally, Along and the surrounding West Siang hills are an emerging horticulture zone — Arunachal Pradesh kiwi (from East Siang-West Siang hills), mandarin orange, pineapple, and large cardamom are grown commercially; the Arunachal Pradesh Horticulture Department has several orchards and research stations around Along), home to the Mechuka valley (an extremely scenic high-altitude valley accessible from Along via a mountain road — Mechuka has a Tibetan Buddhist gompa, high-altitude lakes, and is close to the China border) — is a city of Adi tribal grandeur and Siang river adventure. From birthday parties in Along town to corporate cakes at the government guest houses, from Solung festival cakes to anniversary surprises near the Siang road — RedHeart covers all Along zones: Along town, Siang bridge area, Banderdewa, Kaying, Tuting Road, Yomcha, Aalo market.</p>
<p>Our Along cake range: Chocolate, Black Forest, Red Velvet, Kiwi (Arunachal hill kiwi!), Orange (Arunachal mandarin!), Butterscotch, Photo Cakes, Fondant Siang River / Adi Solung Festival-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Along (Aalo), Arunachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Along town, Siang bridge area, Kaying, Yomcha, Tuting Road, Aalo market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kiwi Cake, Orange, Chocolate, Siang River Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Along / Aalo?", answer: "Yes, same-day cake delivery is available across all Along areas — Along town, Siang bridge area, Kaying, Yomcha, and Aalo market — for orders placed before 3 PM." },
      { question: "Do you have Arunachal kiwi cake in Along?", answer: "Yes! The West Siang hills around Along produce Arunachal Pradesh's prized hill kiwi — our Kiwi cake celebrates this locally grown fruit unique to northeast India's high-altitude orchards." },
      { question: "Are eggless cakes available in Along?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Kiwi, Orange — are available in eggless variants for Along delivery." }
    ]
  },

  "karauli": {
    cityName: "Karauli",
    metaTitle: "Cake Delivery in Karauli | Krishna Karauli Temple Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Karauli. Same-day delivery across Karauli. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karauli",
    metaKeyword: "cake delivery karauli, order cake online karauli, birthday cake karauli, custom cake karauli, same day cake delivery karauli Madan Mohan temple Chambal Pancham Krishna Vaishnav pilgrimage sandstone Rajasthan Sawai Madhopur border",
    footerContent: `
<h2>Cake Delivery in Karauli — Madan Mohan Temple's Krishna Pilgrimage, Chambal's Last Ravines, and Rajasthan's Red Sandstone Heritage</h2>
<p>Karauli — the headquarters of Karauli district in Rajasthan, a sacred pilgrimage city on the Krishna devotion circuit (Karauli is a significant Vaishnava pilgrimage centre in Rajasthan; the Shri Madan Mohan Ji Temple (Karauli) — one of the oldest temples of the Panchayatana school, built in the 16th century by the Karauli rulers of the Yadava dynasty — houses a distinctive idol of Lord Krishna-Madan Mohan; the Karauli temple is one of the major stops on the Braj Chaurasi Kos Parikrama pilgrimage circuit; the Karauli Maharajas (from the Jadaun Yadava Rajput lineage, who claimed descent from Krishna himself) built an impressive palace (Karauli City Palace) in the city that reflects the red sandstone architecture of the region; Karauli is famous for its Lal Pathar (red sandstone) mining and artisan stone-carving (Karauli's red sandstone is a distinctive variety used in temples and heritage architecture across Rajasthan; artisan stone carvers of Karauli produce intricate jali screens, columns, and temple panels); the district borders Sawai Madhopur (and Ranthambore Tiger Reserve) to the west and Madhya Pradesh's Sheopur (Kuno National Park) to the south-east; the Chambal River and its ravines run through southern Karauli — historically a dacoit-prone area that is now being developed for wildlife tourism (the National Chambal Sanctuary protects gharial, river dolphin, and red-crowned roofed turtle in the Chambal stretch through Karauli), and the annual Kaila Devi Mela at the Kaila Devi temple is one of Rajasthan's largest melas (several hundred thousand devotees gather in the Navratras) — is a city of Krishna devotion, sandstone heritage, and Chambal wildlife. From birthday parties in the Civil Lines area to corporate cakes at the stone mining firms, from Janmashtami celebration cakes to anniversary surprises near the Sawai Madhopur Road — RedHeart covers all Karauli zones: Civil Lines, Temple Road, Sawai Madhopur Road, Bayana, Todabhim, Hindaun City, Kaila Devi Road, Sapotara.</p>
<p>Our Karauli cake range: Chocolate, Black Forest, Red Velvet, Mango (Rajasthan!), Butterscotch, Photo Cakes, Fondant Madan Mohan Temple / Chambal Gharial-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karauli, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Temple Road, Sawai Madhopur Road, Todabhim, Hindaun City, Sapotara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Madan Mohan Temple Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karauli?", answer: "Yes, same-day cake delivery is available across all Karauli areas — Civil Lines, Temple Road, Sawai Madhopur Road, Hindaun City, and Todabhim — for orders placed before 3 PM." },
      { question: "Do you have Madan Mohan Temple / Karauli Krishna-themed cakes?", answer: "Yes! The Madan Mohan Ji Temple at Karauli — a sacred 16th-century Krishna temple on the Braj Chaurasi Kos pilgrimage circuit, built by Karauli's Yadava rulers who claimed descent from Krishna — inspires our Madan Mohan fondant cakes." },
      { question: "Are eggless cakes available in Karauli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Karauli delivery." }
    ]
  },

  "vapi": {
    cityName: "Vapi",
    metaTitle: "Cake Delivery in Vapi | Industrial Daman Gujarat | RedHeart",
    metaDescription: "Order cakes online in Vapi. 100% eggless pure veg cakes. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vapi",
    metaKeyword: "cake delivery vapi, order cake online vapi, birthday cake vapi, custom cake vapi, same day cake delivery vapi Gujarat Daman border industrial pharma chemicals Damanganga river Silvassa road Mumbai road GIDC",
    footerContent: `
<h2>Cake Delivery in Vapi — Gujarat's Southernmost Industrial City, Daman Border, and Damanganga River's Chemical-Pharma Hub — 100% Eggless, Pure Veg</h2>
<p>Vapi — a city in Valsad district in Gujarat, located on the Gujarat-Daman border, one of India's most significant industrial clusters (Vapi GIDC — the Gujarat Industrial Development Corporation's industrial estate — is one of the largest and most chemically intensive industrial zones in India; Vapi hosts hundreds of chemical, pharmaceutical, dye, textile auxiliary, and industrial chemical manufacturing units; the GIDC Vapi estate is among India's top 5 most polluted industrial areas by number of chemical effluents (and has been the subject of significant CPCB/GPCB environmental action to improve effluent treatment); major multinational and Indian companies in chemicals, pharma, food processing, and engineering have plants in Vapi; the Damanganga River flows through Vapi — the city is on the right bank of the Damanganga near its junction with the Arabian Sea; Vapi's railway junction (on the Mumbai-Surat-Vadodara Western Railway main line) makes it a key industrial logistics node; the Mumbai-Ahmedabad NH-48 passes through Vapi and connectivity is excellent; Silvassa (the capital of Dadra and Nagar Haveli Union Territory) is 18 km from Vapi, and the Daman coastline is just 15 km away — so Vapi is at the apex of the Gujarat-Daman-Silvassa industrial triangle; Vapi's population includes significant numbers of Gujarati, Sindhi, Marwari, Tamil, and UP/Bihar migrant worker communities; the city is an important commercial node for south Gujarat's Valsad district), and a city that has grown rapidly due to industrial migration from Mumbai's increasingly expensive land — is Gujarat's most industrial border city. All cakes in Vapi are 100% eggless and pure vegetarian. From birthday parties in the GIDC residential areas to corporate cakes at the pharmaceutical plant offices, from anniversary surprises in Vapi's market areas to student cakes — RedHeart covers all Vapi zones: Vapi GIDC, Vapi town, Char Rasta, Daman Road, Silvassa Road, Bhilad, Athal, Saravali, Bhimpore.</p>
<p>Our Vapi cake range: Pure Veg Chocolate, Black Forest, Red Velvet, Mango (Kesar!), Chikoo, Butterscotch, Photo Cakes, Fondant Damanganga / Vapi industrial pride-theme cakes. 100% Eggless. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vapi, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vapi GIDC, Vapi town, Char Rasta, Daman Road, Silvassa Road, Bhilad, Athal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cake type</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% Eggless, Pure Veg (all cakes)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar Mango, Chocolate, Chikoo, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Vapi 100% eggless?", answer: "Yes! All cakes delivered in Vapi are 100% eggless and pure vegetarian, in keeping with Gujarat's deeply vegetarian food culture. Eggless Chocolate, Black Forest, Red Velvet, Kesar Mango, and Chikoo cakes available." },
      { question: "Can I get same-day cake delivery in Vapi?", answer: "Yes, same-day cake delivery is available across all Vapi areas — Vapi GIDC, Vapi town, Char Rasta, Daman Road, Bhilad, and Athal — for orders placed before 3 PM." },
      { question: "Do you deliver midnight cakes in Vapi?", answer: "Yes, midnight birthday cake delivery is available across Vapi's residential and GIDC zones." }
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
