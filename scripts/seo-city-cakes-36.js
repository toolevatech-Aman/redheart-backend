// Cakes Batch 36 — 15 cities:
// UP: Mau, Bahraich, Gonda, Lakhimpur Kheri, Hardoi, Siddharthnagar
// Bihar: Madhepura, Lakhisarai, Khagaria, Jehanabad
// Rajasthan: Pali, Karauli done — Sawai Madhopur, Dungarpur, Banswara
// AP: Ongole
// Karnataka: Yadgir

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "mau": {
    cityName: "Mau",
    metaTitle: "Cake Delivery in Mau | Powerloom Sarees Ganga Ghaghra UP | RedHeart",
    metaDescription: "Order cakes online in Mau. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mau",
    metaKeyword: "cake delivery mau, order cake online mau, birthday cake mau, custom cake mau, same day cake delivery mau powerloom sarees textiles Ghaghra Tons Azamgarh Purvanchal Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Mau — Powerloom Saree Capital of Eastern UP, Ghaghra-Tons Riverbank, and Silk Weaving Heritage</h2>
<p>Mau — the headquarters of Mau district in Uttar Pradesh, one of India's most significant textile and powerloom manufacturing towns in the Purvanchal region (Mau is famous as the "Powerloom Saree Capital" of Eastern UP — the town has over 50,000 powerloom and handloom units producing synthetic, silk, and cotton sarees for markets across India; the Mau sarees (particularly synthetic georgette, chiffon, and voile sarees) are sold wholesale across Eastern UP, Bihar, and exported to Nepal and Bangladesh; the Mubarkpur town (now in Azamgarh) and the Mau-Azamgarh textile belt form one of India's most dense decentralised textile manufacturing zones; Mau also has significant silk and jacquard weaving; the Ghaghra River (Sarayu, the sacred Ayodhya river in its lower course) forms the northern boundary of Mau district and its confluence with the Tons River near Mau creates a sacred bathing point; Chhath Puja celebrations on the Ghaghra ghats of Mau are one of the most fervent in Eastern UP; the Mau district was historically part of the Azamgarh division; the Ghazipur Road area of Mau has significant wholesale markets; Mau has a significant Muslim weaver (Julaha/Ansari) community whose generations have maintained the textile tradition), and a city of saree looms and sacred rivers — is Eastern UP's most textile-productive town. From birthday parties in Mau to celebration cakes — RedHeart covers all Mau zones: Mau town, Maunath Bhanjan, Ghosi, Ratanpura, Kopaganj, Doharighat, Muhammadabad Gohna.</p>
<p>Our Mau cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Powerloom Saree / Ghaghra Ghat / Mau Textile-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mau (Maunath Bhanjan), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mau town, Ghosi, Ratanpura, Kopaganj, Doharighat, Muhammadabad Gohna</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Powerloom Saree Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mau?", answer: "Yes, same-day cake delivery is available across all Mau areas — Mau town, Ghosi, Ratanpura, Kopaganj, and Doharighat — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mau?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mau delivery." },
      { question: "Do you deliver midnight cakes in Mau?", answer: "Yes, midnight birthday cake delivery is available across Mau town, Ghosi, and Ratanpura zones." }
    ]
  },

  "bahraich": {
    cityName: "Bahraich",
    metaTitle: "Cake Delivery in Bahraich | Ghaghra Nepal Border Katarniaghat Tiger Reserve UP | RedHeart",
    metaDescription: "Order cakes online in Bahraich. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bahraich",
    metaKeyword: "cake delivery bahraich, order cake online bahraich, birthday cake bahraich, custom cake bahraich, same day cake delivery bahraich Katarniaghat Tiger Reserve Ghaghra Nepal border Sidi Salar Masud Ghazi dargah Terai UP",
    footerContent: `
<h2>Cake Delivery in Bahraich — Katarniaghat Tiger Reserve's Gharial Waterway, Syed Salar Ghazi's Sufi Shrine, and Nepal Terai Gateway</h2>
<p>Bahraich — the headquarters of Bahraich district in Uttar Pradesh, a district of significant ecological and Sufi heritage on the Nepal border in the Terai (the Katarniaghat Wildlife Sanctuary (part of the Dudhwa Tiger Reserve buffer zone) is one of UP's most biologically rich wildlife sanctuaries — it is the last remaining stronghold of the Gharial crocodile along the Girwa River (a tributary of the Ghaghra); the Katarniaghat sanctuary also has tigers, elephants, dolphins, and a remarkable diversity of waterbirds; the sanctuary is notable for being one of the few places in India where you can take a boat through a dense riparian forest with tigers; the Ghaghra River (Sarayu) forms the boundary of Bahraich with Nepal; Bahraich borders Nepal's Banke and Bardiya districts — the Nepal Terai forest (Bardia National Park, one of Nepal's finest tiger reserves) is adjacent; the Mazar of Syed Salar Masud Ghazi (Ghazi Mian) at Bahraich is one of the most important Sufi shrines in North India — the 11th century battle at Bahraich where Mahmud of Ghazni's nephew Syed Salar Masud was killed by a Hindu confederacy (1033 CE) is commemorated at this remarkable dargah; the annual Urs of Ghazi Mian draws millions of Hindu and Muslim devotees in an extraordinary syncretic tradition; the sugarcane belt of Bahraich (Terai fertile land) is a major agricultural zone), and a city of tiger waterways and Sufi syncretic faith — is UP's most wildlife-diverse Nepal border district. From birthday parties in Bahraich to celebration cakes — RedHeart covers all Bahraich zones: Bahraich town, Nanpara, Kaiserganj, Payagpur, Jarwal, Mihinpurwa, Mahsi.</p>
<p>Our Bahraich cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Katarniaghat Tiger / Gharial Waterway / Ghazi Mian Dargah-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bahraich, Uttar Pradesh (Terai)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bahraich town, Nanpara, Kaiserganj, Payagpur, Jarwal, Mihinpurwa, Mahsi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Katarniaghat Tiger Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bahraich?", answer: "Yes, same-day cake delivery is available across all Bahraich areas — Bahraich town, Nanpara, Kaiserganj, Payagpur, and Jarwal — for orders placed before 3 PM." },
      { question: "Do you have Katarniaghat Tiger Reserve-themed cakes in Bahraich?", answer: "Yes! The Katarniaghat Wildlife Sanctuary (one of India's last Gharial strongholds on the Girwa River — where you can boat through tiger territory) and the syncretic Ghazi Mian Dargah (drawing millions of Hindu and Muslim devotees) inspire our most wildly spiritual Bahraich fondant cakes." },
      { question: "Are eggless cakes available in Bahraich?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bahraich delivery." }
    ]
  },

  "gonda": {
    cityName: "Gonda",
    metaTitle: "Cake Delivery in Gonda | Shravasti Buddha Nepal Border Terai UP | RedHeart",
    metaDescription: "Order cakes online in Gonda. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gonda",
    metaKeyword: "cake delivery gonda, order cake online gonda, birthday cake gonda, custom cake gonda, same day cake delivery gonda Shravasti Buddha Jetavana monastery Nepal border Ghaghra Sarayu Terai sugarcane Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Gonda — Adjacent to Shravasti's Buddhist Jetavana, Ghaghra River's Terai Flood Plains, and Nepal Foothill Gateway</h2>
<p>Gonda — the headquarters of Gonda district in Uttar Pradesh, one of the strategic Terai districts with deep Buddhist heritage proximity and agricultural richness (Shravasti — one of the six great cities of ancient India and an extremely sacred Buddhist site — is located in adjacent Shravasti district (earlier part of Gonda); Shravasti (ancient Savatthi) was where the Buddha spent 25 rainy seasons (vassa) preaching; the Jetavana monastery (given to the Buddha by Anathapindaka — the rich merchant who purchased the garden by covering it with gold coins) is one of Buddhism's holiest sites; the Shravasti monasteries draw pilgrims from across the Buddhist world (Japan, Korea, Thailand, Sri Lanka); Gonda district itself has the Maskanwa and Maniram Ghats on the Ghaghra (Sarayu) River; the Ghaghra River — the sacred Sarayu of the Ramayana (the river of Ayodhya) — flows through Gonda district; Chhath Puja on the Ghaghra is one of the most devotional celebrations in the Gonda belt; Gonda district borders Nepal's Dang Province at the Terai frontier; the district is one of UP's major sugarcane and food grain producing areas; Balrampur (a separate district carved from Gonda) has the Balrampur Sugar Mill tradition; the Tulsi Smarak Bhavan at Rajapur (Gonda) — the reputed birthplace of saint-poet Goswami Tulsidas (author of the Ramcharitmanas)), and a city of Sarayu pilgrimage and Buddhist proximity — is UP's most spiritually layered Terai district. From birthday parties in Gonda to celebration cakes — RedHeart covers all Gonda zones: Gonda town, Colonelganj, Mankapur, Paraspur, Katra Bazar, Tarabganj, Khargoopur.</p>
<p>Our Gonda cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gonda, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gonda town, Colonelganj, Mankapur, Paraspur, Katra Bazar, Tarabganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gonda?", answer: "Yes, same-day cake delivery is available across all Gonda areas — Gonda town, Colonelganj, Mankapur, Paraspur, and Katra Bazar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gonda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gonda delivery." },
      { question: "Do you deliver midnight cakes in Gonda?", answer: "Yes, midnight birthday cake delivery is available across Gonda town, Colonelganj, and Mankapur zones." }
    ]
  },

  "lakhimpur-kheri": {
    cityName: "Lakhimpur Kheri",
    metaTitle: "Cake Delivery in Lakhimpur Kheri | Dudhwa Tiger Reserve Nepal UP | RedHeart",
    metaDescription: "Order cakes online in Lakhimpur Kheri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lakhimpur Kheri",
    metaKeyword: "cake delivery lakhimpur kheri, order cake online lakhimpur kheri, birthday cake lakhimpur kheri, custom cake lakhimpur kheri, same day cake delivery lakhimpur kheri Dudhwa National Park Tiger Reserve one-horned rhino Nepal border Sarda Ghaghra sugarcane UP",
    footerContent: `
<h2>Cake Delivery in Lakhimpur Kheri — Dudhwa Tiger Reserve's Rhino-Tiger Wilderness, Nepal Terai Frontier, and UP's Largest District</h2>
<p>Lakhimpur Kheri — the headquarters of Lakhimpur Kheri district in Uttar Pradesh, the largest district of UP by area and one of India's most ecologically significant Terai districts (the Dudhwa National Park (Dudhwa Tiger Reserve) — in the northern part of Lakhimpur Kheri district, bordering Nepal's Bardia National Park — is one of India's most pristine and biologically rich tiger reserves; Dudhwa is unique as the only Tiger Reserve in the Indo-Gangetic plains where both the Bengal Tiger and the One-Horned Indian Rhinoceros (Rhinoceros unicornis) coexist; the One-Horned Rhino was reintroduced to Dudhwa from Assam's Kaziranga in 1984-85 on the initiative of Billy Arjan Singh (the legendary wildlife conservationist-author who lived at his farm "Tiger Haven" on the Dudhwa boundary for decades fighting for the rhino and tiger); Dudhwa also has Swamp Deer (Barasingha), Gharial, Bengal Florican (critically endangered bird), elephants, and 400+ bird species; the Lakhimpur Kheri district (especially Kheri and Gola Gokarnath) is the largest sugarcane-producing district in India; the Sarda (Sarayu's upper reaches) and Ghaghra Rivers form the northern boundary with Nepal; the district borders Nepal's Kanchanpur district), and a district of rhino-tiger wilderness and sugarcane abundance — is UP's most biodiverse Terai expanse. From birthday parties in Lakhimpur Kheri to celebration cakes — RedHeart covers all Lakhimpur Kheri zones: Lakhimpur town, Kheri, Gola Gokarnath, Pallia, Nighasan, Mohammadi, Palia Kalan.</p>
<p>Our Lakhimpur Kheri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Dudhwa Tiger / One-Horned Rhino / Terai Forest-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhimpur Kheri, Uttar Pradesh (largest district)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhimpur town, Gola Gokarnath, Pallia, Nighasan, Mohammadi, Palia Kalan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Dudhwa Rhino Fondant, Tiger Reserve Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lakhimpur Kheri?", answer: "Yes, same-day cake delivery is available across all Lakhimpur Kheri areas — Lakhimpur town, Gola Gokarnath, Pallia, Nighasan, and Mohammadi — for orders placed before 3 PM." },
      { question: "Do you have Dudhwa Tiger Reserve and One-Horned Rhino-themed cakes?", answer: "Yes! Dudhwa National Park (India's only Tiger Reserve where Bengal Tiger and One-Horned Rhinoceros coexist — rhinos reintroduced from Kaziranga in 1984 by legendary conservationist Billy Arjan Singh) inspires our most wildly magnificent Lakhimpur Kheri fondant cakes." },
      { question: "Are eggless cakes available in Lakhimpur Kheri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Lakhimpur Kheri delivery." }
    ]
  },

  "hardoi": {
    cityName: "Hardoi",
    metaTitle: "Cake Delivery in Hardoi | Sandila Attar Gomti River Awadh UP | RedHeart",
    metaDescription: "Order cakes online in Hardoi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hardoi",
    metaKeyword: "cake delivery hardoi, order cake online hardoi, birthday cake hardoi, custom cake hardoi, same day cake delivery hardoi Sandila Laddu GI Gomti River Awadh Lucknow adjacent sugarcane bricks Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Hardoi — GI Sandila Laddu, Gomti River's Awadh Heritage, and Brick Kiln Country Adjacent to Lucknow</h2>
<p>Hardoi — the headquarters of Hardoi district in Uttar Pradesh, a district of distinctive culinary fame and riverside Awadh heritage adjacent to Lucknow (the Sandila Laddu (Sandila ke Laddoo) is the most famous culinary identity of Hardoi district — the Sandila town in Hardoi is celebrated across UP and North India for its uniquely textured besan (gram flour) laddoo; the Sandila laddoo has a distinctly grainy, coarse-textured surface (unlike smooth besan laddoos) and a rich ghee-toasted flavour; it is GI-protected as a geographical indication of Uttar Pradesh; the tradition of Sandila laddoo-making is centuries old with families of halwais (confectioners) who specialize exclusively in this product; Hardoi is adjacent to Lucknow (50 km) and forms part of the broader Awadh cultural belt; the Gomti River flows through Hardoi district — the same Gomti that passes through Lucknow and flows into the Ganga near Ghazipur; Hardoi has significant traditional brick manufacturing industry (the flat, fertile UP plains provide ideal alluvial clay for brick kilns); the district also produces sugarcane, rice, and wheat; the Madhoganj Fort (Madhoganj, Hardoi district) is a local historical landmark; the Hardoi area has a significant number of Jain and Hindu temples in various towns), and a city of GI laddoo sweetness and Awadh proximity — is UP's most flavourfully celebrated small-city district. From birthday parties in Hardoi to celebration cakes — RedHeart covers all Hardoi zones: Hardoi town, Sandila, Shahabad, Bilgram, Madhoganj, Pihani, Sandi.</p>
<p>Our Hardoi cake range: Chocolate, Black Forest, Red Velvet, Besan Laddoo-inspired, Mango, Butterscotch, Photo Cakes, Fondant GI Sandila Laddu / Gomti River Awadh-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hardoi, Uttar Pradesh (Awadh)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hardoi town, Sandila, Shahabad, Bilgram, Madhoganj, Pihani, Sandi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sandila Laddoo inspired, Mango, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hardoi?", answer: "Yes, same-day cake delivery is available across all Hardoi areas — Hardoi town, Sandila, Shahabad, Bilgram, and Madhoganj — for orders placed before 3 PM." },
      { question: "Do you have GI Sandila Laddoo-themed cakes in Hardoi?", answer: "Yes! The GI-tagged Sandila ke Laddoo (the grainy, coarse-textured besan laddoo from Sandila town — a centuries-old speciality with a rich ghee-toasted flavour, uniquely different from smooth besan laddoos) inspires our most sweetly nostalgic Hardoi fondant cakes." },
      { question: "Are eggless cakes available in Hardoi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hardoi delivery." }
    ]
  },

  "siddharthnagar": {
    cityName: "Siddharthnagar",
    metaTitle: "Cake Delivery in Siddharthnagar | Kapilvastu Buddha Birthplace Nepal UP | RedHeart",
    metaDescription: "Order cakes online in Siddharthnagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Siddharthnagar",
    metaKeyword: "cake delivery siddharthnagar, order cake online siddharthnagar, birthday cake siddharthnagar, custom cake siddharthnagar, same day cake delivery siddharthnagar Kapilvastu Siddhartha Gautama Buddha birthplace Nepal Lumbini Rapti river Terai UP",
    footerContent: `
<h2>Cake Delivery in Siddharthnagar — Kapilvastu's Siddhartha Gautama Childhood Home, Nepal-Lumbini Gateway, and Rapti River Terai</h2>
<p>Siddharthnagar — the headquarters of Siddharthnagar district in Uttar Pradesh (the district was renamed from Basti in 1988 after Siddhartha Gautama, the historical Buddha, in recognition of its connection to his early life), a district of profound Buddhist heritage on the Nepal border (Kapilvastu — the ancient capital of the Sakya republic where Prince Siddhartha Gautama (the future Buddha) grew up from birth to age 29 before renouncing worldly life — is located in what is now divided between Piprahwa (UP, India) and Tilaurakot (Rupandehi district, Nepal); the Piprahwa Stupa in Siddharthnagar district is one of the most significant Buddhist archaeological sites — excavations (1897-98 and 1971-76) revealed a stone coffer with cremated remains (relic ashes) bearing an inscription identifying them as relics of the Buddha (the Kapilvastu Relic Casket); the Kapilvastu relics in the Piprahwa Stupa are among the most sacred Buddhist objects in existence; many Buddhist scholars identify Piprahwa (Siddharthnagar) with ancient Kapilavastu; the Nepal Lumbini (Buddha's birthplace) is just across the border from Siddharthnagar (20-30 km); the Rapti River flows through the district; the sugarcane belt of eastern UP is dominant in Siddharthnagar's agricultural economy; the district borders Nepal's Rupandehi Province), and a city of Siddhartha's childhood home and Nepal's Buddhist border — is UP's most historically resonant Buddhist Terai district. From birthday parties in Siddharthnagar to celebration cakes — RedHeart covers all Siddharthnagar zones: Nautanwa, Barhni, Shohratgarh, Itwa, Bansi, Domariyaganj, Uska Bazar.</p>
<p>Our Siddharthnagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kapilvastu Stupa / Piprahwa Relic / Siddhartha Childhood-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siddharthnagar (Nautanwa), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nautanwa, Barhni, Shohratgarh, Itwa, Bansi, Domariyaganj, Uska Bazar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Kapilvastu Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Siddharthnagar?", answer: "Yes, same-day cake delivery is available across all Siddharthnagar areas — Nautanwa, Barhni, Shohratgarh, Itwa, and Bansi — for orders placed before 3 PM." },
      { question: "Do you have Kapilvastu and Piprahwa Buddhist-themed cakes?", answer: "Yes! The Piprahwa Stupa (containing the Kapilvastu Relic Casket — inscribed relics of the Buddha, excavated 1898 — making Siddharthnagar's Piprahwa possibly ancient Kapilavastu, childhood home of Prince Siddhartha Gautama) inspires our most spiritually profound Siddharthnagar fondant cakes." },
      { question: "Are eggless cakes available in Siddharthnagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Siddharthnagar delivery." }
    ]
  },

  "madhepura": {
    cityName: "Madhepura",
    metaTitle: "Cake Delivery in Madhepura | Kosi River Mithila Maithili Culture Bihar | RedHeart",
    metaDescription: "Order cakes online in Madhepura. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Madhepura",
    metaKeyword: "cake delivery madhepura, order cake online madhepura, birthday cake madhepura, custom cake madhepura, same day cake delivery madhepura Kosi river Mithila Maithili culture makhana Bihar Saharsa division",
    footerContent: `
<h2>Cake Delivery in Madhepura — Kosi Flood Plains, Mithila Maithili Culture, and Makhana Belt of Bihar</h2>
<p>Madhepura — the headquarters of Madhepura district in Bihar, one of the most Kosi-affected and culturally Maithili districts of North Bihar (Madhepura district is situated in the Kosi fan — the massive alluvial deposit created by centuries of the Kosi River's shifting course; the Kosi River and its distributaries flow through Madhepura making it highly flood-prone yet extremely fertile; the district is part of the Kosi-Mahananda watershed zone; Madhepura is in the Saharsa Division of Bihar — the Saharsa-Supaul-Madhepura triangle is Bihar's most Kosi-dominated area; the Madhepura area is part of Mithilanchal — the ancient Maithili-speaking cultural region of North Bihar (Mithila) that stretches from the foothills of Nepal to the Ganga; Mithila is the land of King Janaka (father of Sita) and the birthplace of the Madhubani (Mithila) painting tradition; the Madhepura district produces significant makhana (fox nut, Euryale ferox) — the GI-tagged aquatic crop of North Bihar grown in ponds and swamps; makhana is Bihar's most significant unique agricultural product; Madhepura's Purnea-Saharsa belt also produces jute, maize, and rice; the Saharsa-Madhepura rail link (the Samastipur-Saharsa-Mansi broad gauge conversion) has improved connectivity; the Saptakoshi dam project (India-Nepal Kosi cooperation) has long been planned in this region), and a city of makhana ponds and Mithila cultural depth — is Bihar's most Kosi-shaped district. From birthday parties in Madhepura to celebration cakes — RedHeart covers all Madhepura zones: Madhepura town, Murliganj, Singheshwar, Bihariganj, Alamnagar, Kumarkhand, Shankarpur.</p>
<p>Our Madhepura cake range: Chocolate, Black Forest, Red Velvet, Makhana inspired, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhepura, Bihar (Mithilanchal-Kosi)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhepura town, Murliganj, Singheshwar, Bihariganj, Alamnagar, Kumarkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Makhana inspired, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Madhepura?", answer: "Yes, same-day cake delivery is available across all Madhepura areas — Madhepura town, Murliganj, Singheshwar, Bihariganj, and Alamnagar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Madhepura?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango, Makhana inspired — are available in eggless variants for Madhepura delivery." },
      { question: "Do you deliver midnight cakes in Madhepura?", answer: "Yes, midnight birthday cake delivery is available across Madhepura town and Murliganj zones." }
    ]
  },

  "lakhisarai": {
    cityName: "Lakhisarai",
    metaTitle: "Cake Delivery in Lakhisarai | Mandar Parvat Shiva Ashok Stambh Bihar | RedHeart",
    metaDescription: "Order cakes online in Lakhisarai. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lakhisarai",
    metaKeyword: "cake delivery lakhisarai, order cake online lakhisarai, birthday cake lakhisarai, custom cake lakhisarai, same day cake delivery lakhisarai Mandar Parvat Vasudeva Shiva Ashoka stambh Kiu Ganges Bihar",
    footerContent: `
<h2>Cake Delivery in Lakhisarai — Mandar Parvat's Mythological Mountain, Samudra Manthan's Sacred Site, and Ashoka's Pillar</h2>
<p>Lakhisarai — the headquarters of Lakhisarai district in Bihar (carved from Munger district in 1994), a small but mythologically and historically significant district of Bihar (the Mandar Parvat (Mandar Hill) — near Banka/Lakhisarai — is the hill identified in Hindu and Jain tradition with the mythological churning rod used in the Samudra Manthan (the cosmic ocean-churning episode described in the Puranas, where the gods and demons churned the cosmic ocean to obtain Amrita/nectar using the Mandar hill as the churning rod and the Vasuki serpent as the rope); the Mandar hill has a Vishnu temple and significant Jain temples; the hill also has an ancient Ashoka-era stambha (pillar) fragment; the Lakhisarai area is on the southern bank of the Ganga (the Kiu River — a small tributary — flows through the district); Lakhisarai was a significant railway junction on the Grand Chord Line (East India Railway); the district has Shivpuri ghat on the Ganga; the Kali Sthan (Lakhisarai town) is an important local Shakti shrine; the historic brick kilns and limestone quarries in the area provided building material for ancient Magadha and Gupta empire structures; traditional weaving (lungi and dhoti) is a cottage industry), and a city of cosmic mythology and Mauryan empire heritage — is Bihar's most mythologically charged small district. From birthday parties in Lakhisarai to celebration cakes — RedHeart covers all Lakhisarai zones: Lakhisarai town, Surajgarha, Ramgarh Chowk, Pipariya, Halsi, Chanan, Barahat.</p>
<p>Our Lakhisarai cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mandar Parvat Samudra Manthan / Ashoka Pillar-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhisarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhisarai town, Surajgarha, Ramgarh Chowk, Pipariya, Halsi, Chanan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Mandar Parvat Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lakhisarai?", answer: "Yes, same-day cake delivery is available across all Lakhisarai areas — Lakhisarai town, Surajgarha, Ramgarh Chowk, Pipariya, and Halsi — for orders placed before 3 PM." },
      { question: "Do you have Mandar Parvat Samudra Manthan-themed cakes?", answer: "Yes! The Mandar Parvat (mythologically identified as the churning rod of the Samudra Manthan — the cosmic ocean churning with Vasuki serpent for Amrita, described in the Puranas) near Lakhisarai inspires our most cosmically mythological Bihar fondant cakes." },
      { question: "Are eggless cakes available in Lakhisarai?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Lakhisarai delivery." }
    ]
  },

  "khagaria": {
    cityName: "Khagaria",
    metaTitle: "Cake Delivery in Khagaria | Three Rivers Kosi Kali Bagmati Bihar | RedHeart",
    metaDescription: "Order cakes online in Khagaria. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Khagaria",
    metaKeyword: "cake delivery khagaria, order cake online khagaria, birthday cake khagaria, custom cake khagaria, same day cake delivery khagaria Kosi Kali Gandak Bagmati three rivers junction flood Bihar makhana sugarcane",
    footerContent: `
<h2>Cake Delivery in Khagaria — Three Sacred Rivers' Confluence, Bihar's Flood Frontier, and Makhana Wetland Abundance</h2>
<p>Khagaria — the headquarters of Khagaria district in Bihar, one of Bihar's most flood-shaped districts at the junction of three major rivers — the Kosi, Kali Gandak, and Bagmati (Khagaria district sits at a unique geographical position where three powerful Himalayan rivers — the Kosi (from the east), the Kali Gandak (from the west), and the Bagmati (from the north) — all flow through or along the district boundaries before joining the Ganga; this multi-river confluence makes Khagaria one of the most flood-affected districts in India during the monsoon; the Kosi in particular (Bihar's "Sorrow River") floods Khagaria annually carrying enormous sediment; the district has multiple floodplain lakes (chaurs) and marshy wetlands; these wetlands make Khagaria one of Bihar's most important makhana (fox nut/Euryale ferox) producing districts; the makhana crop grows naturally in the chaurs (seasonal lakes/ponds) of Khagaria; Khagaria district is also known for sugarcane and jute cultivation in its fertile alluvial soils; the Mansi-Kahalgaon rail line connects Khagaria to Bhagalpur; the district was carved out of Saharsa and Munger in 1981; the Vaishali-Khagaria cultural zone has Maithili-speaking communities; the annual Chhath Puja on the Kosi and Bagmati ghats is one of the most vibrant in North Bihar), and a city of three rivers and aquatic makhana abundance — is Bihar's most riverinely complex district. From birthday parties in Khagaria to celebration cakes — RedHeart covers all Khagaria zones: Khagaria town, Mansi, Alauli, Parbalpur, Chautham, Gogri, Manihari.</p>
<p>Our Khagaria cake range: Chocolate, Black Forest, Red Velvet, Makhana inspired, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khagaria, Bihar (Kosi-Kali-Bagmati junction)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khagaria town, Mansi, Alauli, Parbalpur, Chautham, Gogri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Makhana inspired, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Khagaria?", answer: "Yes, same-day cake delivery is available across all Khagaria areas — Khagaria town, Mansi, Alauli, Parbalpur, and Chautham — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Khagaria?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango, Makhana inspired — are available in eggless variants for Khagaria delivery." },
      { question: "Do you deliver midnight cakes in Khagaria?", answer: "Yes, midnight birthday cake delivery is available across Khagaria town and Mansi zones." }
    ]
  },

  "jehanabad": {
    cityName: "Jehanabad",
    metaTitle: "Cake Delivery in Jehanabad | Barabar Caves Ashoka Rock Cut Bihar | RedHeart",
    metaDescription: "Order cakes online in Jehanabad. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jehanabad",
    metaKeyword: "cake delivery jehanabad, order cake online jehanabad, birthday cake jehanabad, custom cake jehanabad, same day cake delivery jehanabad Barabar caves Ashoka rock-cut Ajivika Lomus Rishi E.M. Forster Passage to India Gaya Bihar",
    footerContent: `
<h2>Cake Delivery in Jehanabad — Barabar Caves' Ashokan Rock-Cut Chambers, E.M. Forster's 'A Passage to India' Inspiration, and Ancient Ajivika Monastery</h2>
<p>Jehanabad — the headquarters of Jehanabad district in Bihar (adjacent to Gaya and Patna), a district of extraordinary ancient rock-cut heritage (the Barabar Caves — 24 km north of Jehanabad in the Barabar and Nagarjuni Hills — are the oldest surviving rock-cut caves in India (3rd century BCE, Mauryan period, commissioned by Emperor Ashoka and his grandson Dasharatha); the Barabar Caves were excavated for the Ajivika sect — a heterodox philosophical school contemporary with Buddhism and Jainism; the caves (Lomas Rishi, Sudama, Vishwa Zopri, Karna Chaupar, Nagarjuni) have a unique internal architecture — the inner chamber is a rounded apse with a high-polish mirror finish on the granite walls (Mauryan polished granite technique); the Lomas Rishi cave has an elaborately carved entrance arch with elephant friezes; the caves inspired E.M. Forster's "Marabar Caves" in his 1924 novel "A Passage to India" (the novel's central incident — Mrs. Moore's spiritual crisis in the echoing Marabar Caves — was based on the Barabar Caves); the Barabar Caves area has significant natural beauty with granite outcrops; Jehanabad district is also historically associated with the Naxalite movement in Bihar (in the 1990s-2000s, Jehanabad was a flashpoint of Naxalite activity and caste conflict); the Falgu River (the sacred river of Gaya) flows through the Jehanabad area), and a city of Ashokan cave heritage and literary inspiration — is Bihar's most archaeologically distinctive district adjacent to Gaya. From birthday parties in Jehanabad to celebration cakes — RedHeart covers all Jehanabad zones: Jehanabad town, Arwal, Makhdumpur, Ghoshi, Modanganj, Kako, Hulasganj.</p>
<p>Our Jehanabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Barabar Caves Ashoka / Lomas Rishi Passage to India-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jehanabad, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jehanabad town, Arwal, Makhdumpur, Ghoshi, Modanganj, Kako, Hulasganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Barabar Caves Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jehanabad?", answer: "Yes, same-day cake delivery is available across all Jehanabad areas — Jehanabad town, Arwal, Makhdumpur, Ghoshi, and Modanganj — for orders placed before 3 PM." },
      { question: "Do you have Barabar Caves Ashoka and 'A Passage to India'-themed cakes?", answer: "Yes! The Barabar Caves (India's oldest surviving rock-cut caves, 3rd century BCE Mauryan — Ashokan Ajivika caves with mirror-polished granite interiors that inspired E.M. Forster's 'Marabar Caves' in 'A Passage to India') inspire our most literarily and archaeologically resonant Jehanabad fondant cakes." },
      { question: "Are eggless cakes available in Jehanabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jehanabad delivery." }
    ]
  },

  "dungarpur": {
    cityName: "Dungarpur",
    metaTitle: "Cake Delivery in Dungarpur | Gavri Dance Benas River Tribal Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Dungarpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dungarpur",
    metaKeyword: "cake delivery dungarpur, order cake online dungarpur, birthday cake dungarpur, custom cake dungarpur, same day cake delivery dungarpur Gavri dance Dungarpur palace blue pottery Juna Mahal Gujarat MP border tribal Bhil Garasia Rajasthan",
    footerContent: `
<h2>Cake Delivery in Dungarpur — Dungarpur Palace's Blue Pottery, Juna Mahal's Ancient Frescoes, and Gavri's Sacred Tribal Theatre</h2>
<p>Dungarpur — the headquarters of Dungarpur district in Rajasthan, one of the most forested and tribal districts of Rajasthan — a city of extraordinary palace art, tribal theatre, and riverside beauty (the Dungarpur Palace (Udai Bilas Palace) — a heritage hotel on the Gaib Sagar Lake — is one of Rajasthan's most elegant and understated palace hotels, built in golden-yellow Pareva stone with blue-grey carved jali screens and the local Dungarpur blue pottery inlay work; the palace is reflected in the lake creating a stunning visual; the Juna Mahal — the ancient palace (13th-14th century CE) of the Dungarpur Maharawal — is one of Rajasthan's most atmospheric ancient palaces with multi-storeyed interiors filled with centuries-old fresco paintings of Rajput court life, hunting scenes, and mythological themes; the Gavri (Gauri) dance drama tradition — a sacred tribal folk theatre unique to southern Rajasthan (Dungarpur, Udaipur, Banswara) — is one of India's most ancient continuous dramatic traditions (the Gavri is performed over a continuous 40-day period after Raksha Bandhan by the Bhil tribal community; actors play characters including Mahadev (Shiva), Banjara, and various supernatural beings in outdoor performances in village squares); the Dungarpur district is home to significant Bhil, Garasia, and Damor tribal communities; the Som-Kagdar river flows through the district; the Gujarat-Madhya Pradesh-Rajasthan trijunction is in this area; the Dungarpur area also has the Deo Somnath (a Shiva temple of Solanki-era architecture 12th century)), and a city of ancient frescoes and sacred tribal performance — is Rajasthan's most tribally authentic southern city. From birthday parties in Dungarpur to celebration cakes — RedHeart covers all Dungarpur zones: Dungarpur town, Sagwara, Bichhiwara, Simalwara, Chikhali, Aspur, Galiyakot.</p>
<p>Our Dungarpur cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Juna Mahal Fresco / Gavri Tribal Theatre / Udai Bilas Palace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dungarpur, Rajasthan (Tribal-Forest)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dungarpur town, Sagwara, Bichhiwara, Simalwara, Chikhali, Aspur, Galiyakot</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Juna Mahal Fondant, Gavri Dance Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dungarpur?", answer: "Yes, same-day cake delivery is available across Dungarpur town, Sagwara, Bichhiwara, Simalwara, and Aspur for orders placed before 3 PM." },
      { question: "Do you have Juna Mahal Fresco and Gavri Dance-themed cakes?", answer: "Yes! The Juna Mahal (13th-14th century ancient Maharawal palace covered in centuries-old Rajput fresco paintings) and the Gavri — the 40-day continuous Bhil tribal sacred drama (one of India's most ancient theatrical traditions, performed after Raksha Bandhan) inspire our most culturally vibrant Dungarpur fondant cakes." },
      { question: "Are eggless cakes available in Dungarpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dungarpur delivery." }
    ]
  },

  "banswara": {
    cityName: "Banswara",
    metaTitle: "Cake Delivery in Banswara | Mahi River Rajasthan 100 Islands City | RedHeart",
    metaDescription: "Order cakes online in Banswara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Banswara",
    metaKeyword: "cake delivery banswara, order cake online banswara, birthday cake banswara, custom cake banswara, same day cake delivery banswara Mahi River 100 Islands City Mahi Bajaj Sagar Dam Kagdi Pickup Weir tribal Bhil Gujarat MP border Rajasthan",
    footerContent: `
<h2>Cake Delivery in Banswara — City of a Hundred Islands, Mahi River's Dam Beauty, and Rajasthan's Southernmost Tribal Gem</h2>
<p>Banswara — the headquarters of Banswara district in Rajasthan, the southernmost district of Rajasthan bordering Gujarat and Madhya Pradesh — called the "City of Hundred Islands" (Sau Dweepon ka Sheher) for the numerous small islands in the Mahi River within the town (the Mahi River — one of western India's major rivers — flows through Banswara creating a remarkable landscape of islands, inlets, and backwaters within the town boundaries; the backwater of the Mahi Bajaj Sagar Dam (built in the 1970s) has submerged many low-lying areas upstream, creating an intricate island-dotted reservoir; the Kagdi Pickup Weir on the Mahi at Banswara is particularly picturesque with its islands and walkways; the Banswara town sits on the banks of the Mahi amidst this island-dotted landscape — making it unique among Indian small cities; Banswara district (earlier known as "Vagad" region) is one of the most tribally populated districts of Rajasthan — the Bhil, Garasia, and Damor tribal communities form a large proportion of the population; the Wagad/Vagad culture (the Bhil-tribal cultural zone of Rajasthan-Gujarat border) has distinctive oral poetry, music (Taragana, Bhavai), and craft traditions; the district borders Gujarat (Dahod district) and Madhya Pradesh (Jhabua); the Mangarh Dham (Anandpur Mangarh, Banswara district) is where the Govind Guru-led tribal uprising against the British (1913) occurred — the Mangarh massacre is sometimes called the "Tribal Jallianwala Bagh"; the Mangarh Dham has become a major pilgrimage site for Bhil communities), and a city of river islands and tribal pride — is Rajasthan's most waterside southern city. From birthday parties in Banswara to celebration cakes — RedHeart covers all Banswara zones: Banswara town, Kushalgarh, Ghatol, Bagidora, Anandpuri, Sajjangarh, Garhi.</p>
<p>Our Banswara cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Hundred Islands Mahi / Mangarh Dham / Kagdi Weir-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banswara ("City of Hundred Islands"), Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banswara town, Kushalgarh, Ghatol, Bagidora, Anandpuri, Sajjangarh, Garhi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mahi Islands Fondant, Mangarh Dham Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Banswara?", answer: "Yes, same-day cake delivery is available across Banswara town, Kushalgarh, Ghatol, Bagidora, and Anandpuri for orders placed before 3 PM." },
      { question: "Do you have Banswara Hundred Islands and Mangarh Dham-themed cakes?", answer: "Yes! Banswara's 'City of Hundred Islands' — the Mahi River flowing through the town creating an island-dotted backwater landscape — and the Mangarh Dham (the 1913 Bhil tribal uprising site where Govind Guru's followers resisted British forces — Rajasthan's 'Tribal Jallianwala Bagh') inspire our most water-beautiful and historically proud Banswara fondant cakes." },
      { question: "Are eggless cakes available in Banswara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Banswara delivery." }
    ]
  },

  "ongole": {
    cityName: "Ongole",
    metaTitle: "Cake Delivery in Ongole | Ongole Cattle Prakasam Andhra Pradesh | RedHeart",
    metaDescription: "Order cakes online in Ongole. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ongole",
    metaKeyword: "cake delivery ongole, order cake online ongole, birthday cake ongole, custom cake ongole, same day cake delivery ongole Ongole cattle breed global chilli shrimp aquaculture Krishna Guntur Andhra Pradesh Prakasam",
    footerContent: `
<h2>Cake Delivery in Ongole — Ongole Cattle's Global Export Legacy, Chilli-Aquaculture Coastline, and Prakasam District's Bay of Bengal</h2>
<p>Ongole — the headquarters of Prakasam district in Andhra Pradesh, a coastal city most famous globally for the Ongole cattle breed — one of India's and the world's most successful exported cattle breeds (the Ongole cattle (Ongole breed / Nellore breed internationally) is a white-grey humped (Zebu/Bos indicus) breed originating from the Ongole-Guntur-Prakasam region of Andhra Pradesh; the Ongole bull is known for its enormous frame (one of the world's largest Zebu cattle), high disease resistance, heat tolerance, and drought resistance; the breed was exported to Brazil in the late 19th-early 20th century where it became the foundational stock for Brazil's beef cattle industry (the Brazilian "Zebu" cattle — which now number over 200 million animals — are predominantly descended from Ongole bulls imported from Andhra Pradesh; Brazil is the world's largest beef exporter largely because of the Ongole bull); the Ongole breed has also been exported to USA, Australia, and across Africa; the Ongole Breed Society maintains a studbook; the Prakasam district is one of India's most significant tobacco, chilli, and groundnut producing districts; the coastline of Prakasam (Ongole coast) has significant shrimp aquaculture (Vannamei and Tiger prawn); the Kothapatnam port is being developed as a new port; the Nallamala Forest in the western part of Prakasam district shelters tigers; the Markapur (Prakasam) produces the GI-tagged Markapur Slate Stone), and a city of global cattle heritage and coastal Andhra abundance — is AP's most globally exported agricultural city. From birthday parties in Ongole to celebration cakes — RedHeart covers all Ongole zones: Ongole town, Markapur, Chirala, Kandukur, Addanki, Parchur, Santhamagaluru.</p>
<p>Our Ongole cake range: Chocolate, Black Forest, Red Velvet, Coconut (Bay of Bengal!), Mango, Butterscotch, Photo Cakes, Fondant Ongole Cattle Brazil / Nallamala Tiger / Markapur Slate-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ongole (Prakasam district HQ), Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ongole town, Markapur, Chirala, Kandukur, Addanki, Parchur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Ongole Cattle Heritage Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ongole?", answer: "Yes, same-day cake delivery is available across all Ongole areas — Ongole town, Markapur, Chirala, Kandukur, and Addanki — for orders placed before 3 PM." },
      { question: "Do you have Ongole Cattle Brazil Export Heritage-themed cakes?", answer: "Yes! The Ongole cattle breed (the Zebu bull exported from Andhra Pradesh in the 19th century that became the foundational stock for Brazil's 200-million-head beef cattle industry — making Brazil the world's largest beef exporter) inspires our most globally impactful Ongole fondant cakes." },
      { question: "Are eggless cakes available in Ongole?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Ongole delivery." }
    ]
  },

  "yadgir": {
    cityName: "Yadgir",
    metaTitle: "Cake Delivery in Yadgir | Krishna Bhima Confluence Sannati Buddhist Karnataka | RedHeart",
    metaDescription: "Order cakes online in Yadgir. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Yadgir",
    metaKeyword: "cake delivery yadgir, order cake online yadgir, birthday cake yadgir, custom cake yadgir, same day cake delivery yadgir Krishna Bhima Sangam Sannati Buddhist Ashoka Chandralamba Mudnur Fort Shorapur Karnataka",
    footerContent: `
<h2>Cake Delivery in Yadgir — Krishna-Bhima Sangam, Sannati's Buddhist Ashoka Stupa, and Shorapur Fort's Rajput Legacy</h2>
<p>Yadgir — the headquarters of Yadgir district in Karnataka (carved from Gulbarga/Kalaburagi in 2010), the newest district of Karnataka and one of the most historically and archaeologically significant districts of North Karnataka (the Krishna-Bhima Sangam (confluence) at Sannati (Yadgir district) is one of Karnataka's most sacred pilgrimage points; the Chandralamba temple at Sannati is an important Shakti shrine on the Krishna-Bhima confluence; the Sannati archaeological site has revealed one of the most significant Buddhist stupas and Ashokan structures in Karnataka — the Kanaganahalli stupa excavations (Sannati, Yadgir) discovered extraordinary stone panels (1st century BCE - 2nd century CE) depicting scenes from the Buddha's life, Jataka tales, and portraits of Emperor Ashoka (one of the very few realistic portrait images of Ashoka known to exist — carved in stone at Sannati); the Kanaganahalli stone panels are now in the Karnataka government museum; the Mudnur Fort (Yadgir) and the Shorapur Fort (Shorapur/Shorapur principality — which resisted the British in 1857 under Venkatappa Nayaka) are significant heritage forts; the Shorapur (Shahapur) town in Yadgir district has a Panchalinga (five Shiva lingas) temple and a traditional stone-carving craft; the Bhima River and Krishna River flow through the district creating a fertile alluvial plain; cotton and jowar are the major crops), and a city of river confluence and Buddhist panel discoveries — is Karnataka's most recently settled but archaeologically most surprising new district. From birthday parties in Yadgir to celebration cakes — RedHeart covers all Yadgir zones: Yadgir town, Shorapur, Gurumitkal, Shahapur, Wadagera, Hunasagi, Sannati.</p>
<p>Our Yadgir cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Sannati Buddhist Ashoka Stupa / Krishna-Bhima Sangam / Shorapur Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadgir, Karnataka (newest district)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadgir town, Shorapur, Gurumitkal, Shahapur, Wadagera, Hunasagi, Sannati</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sannati Buddhist Fondant, Krishna-Bhima Sangam Fondant, Coconut, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Yadgir?", answer: "Yes, same-day cake delivery is available across all Yadgir areas — Yadgir town, Shorapur, Gurumitkal, Shahapur, and Wadagera — for orders placed before 3 PM." },
      { question: "Do you have Sannati Kanaganahalli Buddhist Ashoka-themed cakes?", answer: "Yes! The Sannati Kanaganahalli stupa excavations (1st century BCE stone panels depicting Ashoka's portrait — one of very few known realistic images of Ashoka — and Buddha Jataka scenes) and the Krishna-Bhima Sangam (sacred river confluence with Chandralamba temple) inspire our most archaeologically revelatory Yadgir fondant cakes." },
      { question: "Are eggless cakes available in Yadgir?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Yadgir delivery." }
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
