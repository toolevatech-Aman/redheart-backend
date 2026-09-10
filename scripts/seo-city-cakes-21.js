// Cakes Batch 21 — 15 cities:
// UP: Sonbhadra, Sant Kabir Nagar, Kushinagar, Hamirpur (UP)
// Bihar: Khagaria, Gopalganj, Jamui
// Odisha: Kendrapara, Phulbani (Kandhamal)
// Gujarat: Godhra (Panchmahal) — 100% Eggless/Pure Veg
// Tamil Nadu: Villupuram, Cuddalore
// Assam: Goalpara, Tinsukia
// Meghalaya: Tura

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "sonbhadra": {
    cityName: "Sonbhadra",
    metaTitle: "Cake Delivery in Sonbhadra | Vindhya Minerals UP | RedHeart",
    metaDescription: "Order cakes online in Sonbhadra. Same-day delivery across Sonbhadra. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sonbhadra",
    metaKeyword: "cake delivery sonbhadra, order cake online sonbhadra robertsganj, birthday cake sonbhadra, custom cake sonbhadra, same day cake delivery sonbhadra vindhya power plant coal mines renukoot singrauli rihand",
    footerContent: `
<h2>Cake Delivery in Sonbhadra — UP's Power Capital, Vindhya Range's Coal Belt, and Rihand Dam's Industrial Corridor</h2>
<p>Sonbhadra — the headquarters of Sonbhadra district in Uttar Pradesh's southernmost Vindhya range (the district headquarters is Robertsganj), one of India's most mineral and energy-rich districts (Sonbhadra and the adjoining Singrauli belt form India's single largest thermal power hub — the Rihand Super Thermal Power Station, Anpara Power Station, Vindhyachal Super Thermal Power Station, and several other plants in Sonbhadra and Singrauli collectively generate over 15,000 MW — making this the electricity generation capital of northern India; the coal mines of Singrauli-Sonbhadra supply fuel to these plants and are managed by Northern Coalfields Limited; the Rihand Dam on the Rihand River — built in 1962 — created the Govind Ballabh Pant Sagar, one of India's largest reservoirs, which provides cooling water to the thermal plants and irrigation to southern UP; Hindalco's Renukoot aluminium smelter — one of Asia's largest — uses the hydroelectric and thermal power of Sonbhadra), rich in tribal cultural heritage (the Kol, Gond, and Oraon tribal communities of Sonbhadra have unique traditions, crafts, and festivals; the Sonepur Fort and the Vijaygarh Fort are historical monuments in the district), and bordering Jharkhand, Chhattisgarh, and Madhya Pradesh — is a city of extraordinary industrial power generation. From birthday parties in the Robertsganj Civil Lines to corporate cakes at the large power plant townships, from anniversary surprises near the Renukoot area to student cakes at Sonbhadra's colleges — RedHeart covers all Sonbhadra zones: Central (Robertsganj Civil Lines, Renukoot, Rihand Nagar), North (Varanasi Road, Churk, Obra), South (Chhattisgarh border, Bargawan, Duddhi), East (Jharkhand border, Chopan, Banaras boundary), West (Mirzapur Road, Chunar border).</p>
<p>Our Sonbhadra cake range: Chocolate, Black Forest, Red Velvet, Mango (Varanasi Langra!), Butterscotch, Photo Cakes, Fondant Rihand Dam / Vindhya range-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonbhadra, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Robertsganj, Renukoot, Rihand Nagar, Churk, Obra, Chopan, Duddhi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Rihand Dam Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sonbhadra?", answer: "Yes, same-day cake delivery is available across all Sonbhadra areas — Robertsganj, Renukoot, Rihand Nagar, Churk, and Obra — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the Renukoot aluminium plant and power station townships in Sonbhadra?", answer: "Yes, Renukoot (Hindalco), Rihand Nagar (NTPC), and all power plant employee townships in Sonbhadra are covered under our same-day delivery." },
      { question: "Are eggless cakes available in Sonbhadra?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sonbhadra delivery." }
    ]
  },

  "sant-kabir-nagar": {
    cityName: "Sant Kabir Nagar",
    metaTitle: "Cake Delivery in Sant Kabir Nagar | Kabir Birthplace UP | RedHeart",
    metaDescription: "Order cakes online in Sant Kabir Nagar. Same-day delivery across Sant Kabir Nagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sant Kabir Nagar",
    metaKeyword: "cake delivery sant kabir nagar, order cake online sant kabir nagar khalilabad, birthday cake sant kabir nagar, custom cake sant kabir nagar, same day cake delivery sant kabir nagar kabir birthplace maghar gorakhpur road basti road",
    footerContent: `
<h2>Cake Delivery in Sant Kabir Nagar — Kabir Das's Birthplace District, Maghar's Samadhi, and Eastern UP's Sufi Heritage</h2>
<p>Sant Kabir Nagar — the headquarters of Sant Kabir Nagar district in Uttar Pradesh's eastern region (the district HQ is Khalilabad), a district created in 1997 and named after the 15th-century saint-poet Kabir Das (Kabir Das — born in Varanasi in 1440 CE according to tradition — spent his later years in Maghar, in Sant Kabir Nagar district, and attained Mahasamadhi here in 1518 CE; his samadhi (tomb/memorial) at Maghar is a site of immense significance for both Hindus and Muslims — Kabir transcended all religious boundaries, and his samadhi is marked by both a dargah and a samadhi mandir side by side; the Kabir Chaura at Maghar is a major pilgrimage site drawing devotees of all faiths; Kabir's dohas and bhajans are sung across India — the Kabir Saheb ki Nagar, as the district is known, reflects deeply the saint's legacy of universal love and rejection of caste), with the Maghar Dham festival held annually drawing thousands of Kabir Panth devotees, and a district in the Ghaghara river plains with rice, wheat, and sugarcane agriculture — is a district of spiritual humanism. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from Kabir Jayanti celebration cakes to anniversary surprises near the Gorakhpur Road area — RedHeart covers all Sant Kabir Nagar zones: Central (Khalilabad Civil Lines, Gorakhpur Road, Basti Road), North (Maghar, Nepal border direction, Kaptanganj), South (Basti Road, Khalilabad, Menhdawal), East (Gorakhpur Road, Siddharthnagar border), West (Basti border, Khalilabad border).</p>
<p>Our Sant Kabir Nagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kabir Chaura Maghar / Saint Kabir-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sant Kabir Nagar (Khalilabad), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khalilabad Civil Lines, Gorakhpur Road, Basti Road, Maghar, Kaptanganj, Menhdawal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kabir Chaura Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sant Kabir Nagar / Khalilabad?", answer: "Yes, same-day cake delivery is available across Sant Kabir Nagar — Khalilabad Civil Lines, Gorakhpur Road, Basti Road, and Maghar — for orders placed before 3 PM." },
      { question: "Do you have Sant Kabir / Maghar Dham-themed cakes?", answer: "Yes! Sant Kabir Nagar is named for Kabir Das — the 15th-century saint whose poetry unites Hindus and Muslims; his samadhi at Maghar, where both a dargah and a mandir stand side by side, inspires our Kabir Chaura fondant cakes." },
      { question: "Are eggless cakes available in Sant Kabir Nagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sant Kabir Nagar delivery." }
    ]
  },

  "kushinagar": {
    cityName: "Kushinagar",
    metaTitle: "Cake Delivery in Kushinagar | Buddha Parinirvana Buddhist UP | RedHeart",
    metaDescription: "Order cakes online in Kushinagar. Same-day delivery across Kushinagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kushinagar",
    metaKeyword: "cake delivery kushinagar, order cake online kushinagar, birthday cake kushinagar, custom cake kushinagar, same day cake delivery kushinagar buddha parinirvana mahaparinibbana stupa padrauna gorakhpur road",
    footerContent: `
<h2>Cake Delivery in Kushinagar — Lord Buddha's Parinirvana Site, Buddhist Circuit's Crown Jewel, and UP's Sacred Pilgrimage City</h2>
<p>Kushinagar — the headquarters of Kushinagar district in Uttar Pradesh's eastern region, one of Buddhism's four most sacred sites in the world (Kushinagar — identified with the ancient city of Kushinara — is where Lord Gautama Buddha attained Mahaparinirvana (final liberation/death) in 483 BCE, at age 80; the Mahaparinibbana Stupa and the Reclining Buddha statue (6-metre-long sandstone image of the dying Buddha) at the stupa complex are among Buddhism's most profound sacred images; the Ramabhar Stupa marks the spot where Buddha's body was cremated; the Mathakuar Shrine has an ancient seated Buddha image; Kushinagar is on India's Buddhist Circuit — alongside Lumbini (Nepal), Bodh Gaya, Sarnath, and Shravasti — and receives hundreds of thousands of Buddhist pilgrims annually from Japan, Sri Lanka, Thailand, Myanmar, Tibet, China, and Korea; Japan, Sri Lanka, Myanmar, China, and Thailand have built national Buddhist temples/monasteries in Kushinagar), a district bordering Nepal (Kushinagar district shares a border with Nepal's Rupandehi and Kapilavastu districts), and close to the Parasi and Rupendehi districts of Nepal's Terai — is a city of global Buddhist pilgrimage. From birthday parties near the Buddhist Circuit tourist zone to corporate cakes at the international monasteries, from pilgrimage celebration cakes to anniversary surprises in the Padrauna area — RedHeart covers all Kushinagar zones: Kushinagar town (Buddhist site area), Padrauna (administrative HQ), Hata, Tamkuhi Raj, Khadda (Nepal border).</p>
<p>Our Kushinagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mahaparinibbana Stupa / Reclining Buddha-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kushinagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kushinagar Buddhist Site, Padrauna, Hata, Tamkuhi Raj, Khadda, Nepal border area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mahaparinibbana Stupa Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kushinagar?", answer: "Yes, same-day cake delivery is available across all Kushinagar areas — Kushinagar Buddhist Site, Padrauna, Hata, and Tamkuhi Raj — for orders placed before 3 PM." },
      { question: "Do you have Buddha Parinirvana / Mahaparinibbana Stupa-themed cakes in Kushinagar?", answer: "Yes! Kushinagar — where Lord Buddha attained Mahaparinirvana in 483 BCE, one of the world's most sacred Buddhist sites — inspires our Mahaparinibbana Stupa fondant cakes. The most profound Buddhist spiritual landmark on your birthday cake." },
      { question: "Are eggless cakes available in Kushinagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kushinagar delivery." }
    ]
  },

  "hamirpur-up": {
    cityName: "Hamirpur",
    metaTitle: "Cake Delivery in Hamirpur UP | Bundelkhand Yamuna | RedHeart",
    metaDescription: "Order cakes online in Hamirpur UP. Same-day delivery across Hamirpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hamirpur UP",
    metaKeyword: "cake delivery hamirpur up, order cake online hamirpur uttar pradesh, birthday cake hamirpur, custom cake hamirpur, same day cake delivery hamirpur up bundelkhand yamuna betwa rath jhansi road kanpur road",
    footerContent: `
<h2>Cake Delivery in Hamirpur UP — Bundelkhand's Yamuna-Betwa Confluence, Rath's Brass Craft Town, and Southern UP's Agricultural Hub</h2>
<p>Hamirpur — the headquarters of Hamirpur district in Uttar Pradesh's Bundelkhand region (to distinguish from Hamirpur HP, this is Hamirpur UP), a district of confluence and craft significance (Hamirpur district is situated where the Yamuna and Betwa rivers meet — the Yamuna-Betwa sangam (confluence) near Hamirpur town is a sacred spot for Hindus, with Kashi Vishwanath and other temples on the river banks; the Betwa River — one of Bundelkhand's most important rivers — joins the Yamuna at Hamirpur, and the combined ghats attract pilgrims for Kartik Purnima and other festivals), home to Rath (an important town in Hamirpur district, known for its traditional brass metalwork and utensil manufacturing — the Rath brass industry produces cookware, lamp holders, and decorative items sold across UP and Madhya Pradesh), an agricultural district with wheat, gram, and sesame production, and historically part of the Bundelkhand region — is a city of river confluence and traditional craft. From birthday parties in the Civil Lines area to corporate cakes at the large district offices, from anniversary surprises near the Yamuna-Betwa Sangam ghats to student cakes at Hamirpur's colleges — RedHeart covers all Hamirpur UP zones: Central (Civil Lines, Station Road, Jhansi Road), North (Kanpur Road, Rath, Sarila), South (Sagar Road, Mahoba border, Sumerpur), East (Banda Road, Kulpahar Road), West (Jalaun Road, Orai border).</p>
<p>Our Hamirpur UP cake range: Chocolate, Black Forest, Red Velvet, Mango (Bundelkhand Langra!), Butterscotch, Photo Cakes, Fondant Yamuna-Betwa Sangam / Bundelkhand-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Jhansi Road, Kanpur Road, Rath, Sumerpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Yamuna-Betwa Sangam Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hamirpur UP?", answer: "Yes, same-day cake delivery is available across all Hamirpur areas — Civil Lines, Station Road, Jhansi Road, Kanpur Road, and Rath — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hamirpur UP?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hamirpur UP delivery." },
      { question: "Do you deliver midnight cakes in Hamirpur UP?", answer: "Yes, midnight birthday cake delivery is available across Hamirpur's central and residential zones." }
    ]
  },

  "khagaria": {
    cityName: "Khagaria",
    metaTitle: "Cake Delivery in Khagaria | Kosi-Ganga Flood Bihar | RedHeart",
    metaDescription: "Order cakes online in Khagaria. Same-day delivery across Khagaria. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Khagaria",
    metaKeyword: "cake delivery khagaria, order cake online khagaria, birthday cake khagaria, custom cake khagaria, same day cake delivery khagaria kosi ganga bagmati flood mithila mansi chautham begusarai road",
    footerContent: `
<h2>Cake Delivery in Khagaria — Kosi-Ganga-Bagmati Trifluence, Bihar's Most Flood-Prone District, and Mithila's Southern Frontier</h2>
<p>Khagaria — the headquarters of Khagaria district in Bihar, a district of extraordinary geographical complexity and agricultural resilience (Khagaria is one of Bihar's — and India's — most flood-affected districts: three major rivers (the Kosi, the Ganga, and the Bagmati) flow through or border Khagaria, and the district experiences severe flooding almost every year; despite this, Khagaria's flood-plain soil (yenthi) is extremely fertile and the district produces significant rice, wheat, maize, and makhana (fox nuts); the Mithila paan (betel leaf) is also cultivated in Khagaria; the Bihar flood cycle of Kosi and Bagmati rivers — which change course regularly — shapes daily life in Khagaria; the Chautham area in Khagaria, where all three rivers meet, is considered a sacred trifluence), a district on the border of the Mithila-Seemanchal cultural zones, and known for its Makhana cultivation (Khagaria and Darbhanga districts are Bihar's main makhana-growing areas — the fox nut or lotus seed, a superfood, is grown in the shallow ponds of the Kosi-Ganga plains; Mithila Makhana has received a GI tag from the Government of India) — is a city of river resilience and makhana wealth. From birthday parties in the Civil Lines area to corporate cakes at the large makhana processing factories, from anniversary surprises near the Begusarai Road to student cakes at Khagaria's colleges — RedHeart covers all Khagaria zones: Central (Civil Lines, Station Road, Begusarai Road), North (Saharsa Road, Mansi, Chautham), South (Begusarai border, Ganga bank, Naugachia Road), East (Bhagalpur Road, Supaul border), West (Darbhanga Road, Rosera border).</p>
<p>Our Khagaria cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Makhana-Saffron (Mithila Makhana special!), Photo Cakes, Fondant Kosi-Ganga-Bagmati trifluence-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khagaria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Begusarai Road, Saharsa Road, Mansi, Chautham</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Makhana-Saffron, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Khagaria?", answer: "Yes, same-day cake delivery is available across all Khagaria areas — Civil Lines, Station Road, Begusarai Road, Saharsa Road, and Mansi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Khagaria?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Khagaria delivery." },
      { question: "Do you deliver midnight cakes in Khagaria?", answer: "Yes, midnight birthday cake delivery is available across Khagaria's central and residential zones." }
    ]
  },

  "gopalganj": {
    cityName: "Gopalganj",
    metaTitle: "Cake Delivery in Gopalganj | Brahmpur Bihar Nepal Border | RedHeart",
    metaDescription: "Order cakes online in Gopalganj. Same-day delivery across Gopalganj. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gopalganj",
    metaKeyword: "cake delivery gopalganj, order cake online gopalganj, birthday cake gopalganj, custom cake gopalganj, same day cake delivery gopalganj brahmpur gandak river nepal border lalit narayan mithila gorakhpur road",
    footerContent: `
<h2>Cake Delivery in Gopalganj — Gandak River's Flood Plain, Nepal Border District, and Bihar's Sugarcane-Jute Belt</h2>
<p>Gopalganj — the headquarters of Gopalganj district in Bihar, a district of Terai geography and historical connectivity (Gopalganj lies in the Gandak River flood plains — the Gandak (also called Narayani in Nepal) is a major Ganga tributary originating in Tibet-Nepal; the river's annual floods are a permanent feature of Gopalganj's agricultural calendar, but the flood plains make the soil very fertile for rice, sugarcane, jute, and vegetables; the Valmikinagar Tiger Reserve in the neighbouring Champaran is accessible from Gopalganj; the district shares a long border with Nepal's Narayani Zone; Gopalganj has several border crossings used for India-Nepal trade), known as the birthplace of Bihar's former Chief Minister Lalit Narayan Mishra (an important political figure), and historically significant for the Brahmpur Fort (an ancient fort in the district associated with Rajput Maurya and early medieval history) — is a city of river plains and Nepal border connectivity. From birthday parties in the Civil Lines area to corporate cakes at the large sugarcane mills, from anniversary surprises near the Gorakhpur Road area to student cakes at Gopalganj's colleges — RedHeart covers all Gopalganj zones: Central (Civil Lines, Station Road, Gorakhpur Road), North (Nepal border, Hathua, Kuchaikot), South (Chapra Road, Siwan Road, Raghunathpur), East (Muzaffarpur Road, Mirganj, Phulwaria), West (Deoria Road, Bettiah Road, Uchkagaon).</p>
<p>Our Gopalganj cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Gandak River / Terai landscape-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopalganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gorakhpur Road, Hathua, Kuchaikot, Siwan Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gopalganj?", answer: "Yes, same-day cake delivery is available across all Gopalganj areas — Civil Lines, Station Road, Gorakhpur Road, Hathua, and Kuchaikot — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gopalganj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gopalganj delivery." },
      { question: "Do you deliver midnight cakes in Gopalganj?", answer: "Yes, midnight birthday cake delivery is available across Gopalganj's central and residential zones." }
    ]
  },

  "jamui": {
    cityName: "Jamui",
    metaTitle: "Cake Delivery in Jamui | Jain Pilgrimage Jharkhand Border Bihar | RedHeart",
    metaDescription: "Order cakes online in Jamui. Same-day delivery across Jamui. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jamui",
    metaKeyword: "cake delivery jamui, order cake online jamui, birthday cake jamui, custom cake jamui, same day cake delivery jamui mahavir janmbhumi vaibhargiri jain kundagram kshatriyakund mineral iron ore jharkhand border",
    footerContent: `
<h2>Cake Delivery in Jamui — Lord Mahavira's Enlightenment Site, Mineral-Rich Jharkhand Border District, and Bihar's Jain Heritage Hub</h2>
<p>Jamui — the headquarters of Jamui district in Bihar, a city of profound Jain religious significance and geological wealth (Jamui district is closely associated with Lord Mahavira — the 24th Tirthankara of Jainism and the founder/reformer of Jain philosophy; according to Jain tradition, Lord Mahavira was born in Kundagram (identified with Vaishali, near modern-day Muzaffarpur), but the Vaibhargiri hills and the Rajgir-Nalanda region near Jamui are associated with Mahavira's years of meditation; the Lakshmipur village in Jamui has a temple where Mahavira is said to have spent time meditating; the Pawapuri (30 km from Jamui direction) where Mahavira attained nirvana is in the adjacent Nalanda district — making Jamui part of Bihar's Jain pilgrimage circuit; separately, Jamui district has significant iron ore, bauxite, and mica deposits in its forest areas bordering Jharkhand), known for the Mallikarjun temple (an important Shiva temple in Jamui town), and a district with Paharia tribal communities living in its forest-hill areas — is a city of Jain heritage and mineral significance. From birthday parties in the Civil Lines area to corporate cakes at the large district offices, from Mahavira Jayanti celebration cakes to anniversary surprises near the Nawada Road — RedHeart covers all Jamui zones: Central (Civil Lines, Station Road, Nawada Road), North (Lakhisarai Road, Sheikhpura border), South (Jharkhand border, Gidhour, Chanan), East (Banka border, Sathua, Barhat), West (Nawada border, Sikandra, Chakai).</p>
<p>Our Jamui cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Lord Mahavira / Jain heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamui, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Nawada Road, Lakhisarai Road, Gidhour, Barhat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jain Heritage Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jamui?", answer: "Yes, same-day cake delivery is available across all Jamui areas — Civil Lines, Station Road, Nawada Road, Lakhisarai Road, and Gidhour — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jamui?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jamui delivery." },
      { question: "Do you deliver midnight cakes in Jamui?", answer: "Yes, midnight birthday cake delivery is available across Jamui's central and residential zones." }
    ]
  },

  "kendrapara": {
    cityName: "Kendrapara",
    metaTitle: "Cake Delivery in Kendrapara | Bhitarkanika Olive Ridley Odisha | RedHeart",
    metaDescription: "Order cakes online in Kendrapara. Same-day delivery across Kendrapara. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kendrapara",
    metaKeyword: "cake delivery kendrapara, order cake online kendrapara, birthday cake kendrapara, custom cake kendrapara, same day cake delivery kendrapara bhitarkanika olive ridley turtle gahirmatha mangrove cuttack road bhubaneswar",
    footerContent: `
<h2>Cake Delivery in Kendrapara — Bhitarkanika's Wildlife Sanctuary, Olive Ridley Turtle's Mass Nesting, and Mahanadi Delta's Mangrove Kingdom</h2>
<p>Kendrapara — the headquarters of Kendrapara district in Odisha, a district of extraordinary ecological importance (the Bhitarkanika National Park and Wildlife Sanctuary — located in the Mahanadi-Brahmani-Baitarani delta in Kendrapara district — is one of India's most biodiverse coastal ecosystems; Bhitarkanika has India's second-largest mangrove forest (after the Sundarbans) and is home to saltwater crocodiles (India's largest population — over 1,600 crocodiles), water monitor lizards, Irrawaddy dolphins, and numerous migratory birds; the Gahirmatha Beach adjacent to Bhitarkanika is the world's largest known mass nesting site of Olive Ridley sea turtles — each year from December to March, hundreds of thousands of Olive Ridley turtles come ashore at Gahirmatha to nest (this mass nesting is called "arribada" and is one of nature's most spectacular events); the Gahirmatha Marine Sanctuary is one of India's most critical marine protected areas; the Bhitarkanika-Gahirmatha ecosystem annually draws wildlife researchers, documentary filmmakers, and ecotourists from around the world), and a district known for its paddy cultivation and fisheries (Kendrapara's coastal fishing communities are among Odisha's most active; the prawn, hilsa, and pomfret catch from the Bay of Bengal coast sustains thousands of fisherfolk families) — is a district of wildlife spectacle and coastal culture. From birthday parties in the Civil Lines area to corporate cakes at the fisheries and processing units, from anniversary surprises near the Cuttack Road area to student cakes at Kendrapara's colleges — RedHeart covers all Kendrapara zones: Central (Civil Lines, Cuttack Road, Bhubaneswar Road), North (Bhadrak border, Rajnagar, Aul), South (Jagatsinghpur border, Pattamundai), East (Gahirmatha Coast, Bhitarkanika), West (Cuttack border, Salipur, Nischintakoili).</p>
<p>Our Kendrapara cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Butterscotch, Photo Cakes, Fondant Bhitarkanika / Olive Ridley Turtle-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kendrapara, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Cuttack Road, Bhubaneswar Road, Rajnagar, Pattamundai, Aul</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bhitarkanika Olive Ridley Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kendrapara?", answer: "Yes, same-day cake delivery is available across all Kendrapara areas — Civil Lines, Cuttack Road, Rajnagar, Pattamundai, and Aul — for orders placed before 3 PM." },
      { question: "Do you have Bhitarkanika / Olive Ridley Turtle-themed cakes in Kendrapara?", answer: "Yes! Kendrapara's Bhitarkanika National Park and Gahirmatha Beach — the world's largest Olive Ridley sea turtle mass nesting site, with hundreds of thousands of turtles arriving every year — inspire our Bhitarkanika Olive Ridley fondant cakes. Nature's most spectacular event on your birthday cake." },
      { question: "Are eggless cakes available in Kendrapara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kendrapara delivery." }
    ]
  },

  "phulbani": {
    cityName: "Phulbani",
    metaTitle: "Cake Delivery in Phulbani | Kandhamal Tribal Odisha | RedHeart",
    metaDescription: "Order cakes online in Phulbani. Same-day delivery across Phulbani. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Phulbani",
    metaKeyword: "cake delivery phulbani, order cake online phulbani kandhamal, birthday cake phulbani, custom cake phulbani, same day cake delivery phulbani kandha tribal turmeric organic boudh road daringbadi hill station",
    footerContent: `
<h2>Cake Delivery in Phulbani — Kandhamal Turmeric's GI Capital, Daringbadi's Hill Station, and Odisha's Tribal Heartland</h2>
<p>Phulbani — the headquarters of Kandhamal district in Odisha, a city of tribal culture and agricultural GI-tag significance (Kandhamal Haladi — the Kandhamal district's turmeric — has received a GI (Geographical Indication) tag; the Kandha/Kondh tribal farmers of Kandhamal grow an indigenous turmeric variety with higher curcumin content than commercial turmeric, in organic methods on hillside plots without synthetic fertilisers; Kandhamal turmeric is prized in the organic foods market and exported internationally; Kandha women carry turmeric and ginger to weekly tribal haats (markets) in large baskets — the yellow-tinged hands of Kandha women from turmeric work are an iconic image; additionally, Kandhamal produces significant quantities of ginger, garlic, and minor forest produce), home to Daringbadi (called the "Kashmir of Odisha" — a beautiful hill station at 915 metres in the Eastern Ghats near Phulbani, with pine forests, coffee plantations, strawberry gardens, waterfalls, and a cool climate unusual for Odisha; Daringbadi is one of Odisha's most popular hill destinations), and a district with a significant Kondh tribal population with rich ritual arts, body tattoos, and the Danda Nacha (a martial dance) — is a city of organic wealth and hill station beauty. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Daringbadi area to student cakes at Phulbani's colleges — RedHeart covers all Phulbani zones: Central (Civil Lines, Station Road, Boudh Road), North (Boudh border, Balliguda, G. Udayagiri), South (Koraput border, Daringbadi, Belghar), East (Bhubaneswar Road, Raikia, Brahmagiri), West (Rayagada border, Tumudibandha).</p>
<p>Our Phulbani cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Himsagar!), Turmeric-infused (Kandhamal Haladi!), Photo Cakes, Fondant Daringbadi Hill / Kandha tribal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Phulbani (Kandhamal), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Boudh Road, Daringbadi, Balliguda, G. Udayagiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Daringbadi Hill Fondant, Turmeric-Golden, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Phulbani / Kandhamal?", answer: "Yes, same-day cake delivery is available across all Phulbani areas — Civil Lines, Station Road, Boudh Road, and Daringbadi — for orders placed before 3 PM." },
      { question: "Do you have Daringbadi Hill / Kandhamal Turmeric-themed cakes?", answer: "Yes! Kandhamal's GI-tagged Haladi (turmeric) — organically grown by Kondh tribal farmers with the highest curcumin content in India — and Daringbadi, the 'Kashmir of Odisha' hill station, inspire our Golden Turmeric and Daringbadi fondant cakes." },
      { question: "Are eggless cakes available in Phulbani?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Phulbani delivery." }
    ]
  },

  "godhra": {
    cityName: "Godhra",
    metaTitle: "Cake Delivery in Godhra | 100% Eggless Pure Veg Gujarat | RedHeart",
    metaDescription: "Order 100% eggless cakes in Godhra. Same-day delivery across Godhra. Pure Veg birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Godhra",
    metaKeyword: "cake delivery godhra, order cake online godhra, birthday cake godhra, eggless cake godhra, same day cake delivery godhra panchmahal jambughoda vadodara road lunawada dahod road pure veg gujarat",
    footerContent: `
<h2>100% Eggless Cake Delivery in Godhra — Panchmahal District Capital, Jambughoda's Wildlife Sanctuary, and Gujarat's Eastern Gateway</h2>
<p>Godhra — the headquarters of Panchmahal district in Gujarat, a city that has rebuilt itself as a symbol of communal harmony (Godhra was deeply affected by the tragic events of 2002; over the subsequent two decades, the city has worked hard for communal reconciliation and economic development; today Godhra is an important commercial and administrative centre for eastern Gujarat's Panchmahal, Dahod, and Mahisagar districts), the gateway to eastern Gujarat's tribal and forested areas (the Panchmahal district contains Jambughoda Wildlife Sanctuary — a forest reserve with leopards, hyenas, wolves, sambars, and rich birdlife; Jambughoda is one of Gujarat's finest eco-tourism destinations with forest lodges and nature trails; the Pavagadh temple — one of Gujarat's most sacred Shakti Peethas, atop the Pavagadh hill 50 km from Godhra — is a major pilgrimage site with the Kalikamata temple; the Champaner-Pavagadh Archaeological Park is a UNESCO World Heritage Site), an important railway junction (Godhra Junction is on the Mumbai-Vadodara-Delhi rail line), and a city with significant cotton and rice agriculture in the Mahi River basin — is a city in transition towards a new positive identity. As with all Gujarat cities, all our cakes are <strong>100% Eggless and Pure Vegetarian</strong>, respecting Gujarat's culinary tradition. From birthday parties in the Civil Lines area to corporate cakes at the large textile mills, from anniversary surprises near the Vadodara Road to student cakes at Godhra's colleges — RedHeart covers all Godhra zones: Central (Civil Lines, Station Road, Vadodara Road), North (Lunawada Road, Mahisagar border, Godhra-Vadodara Highway), South (Pavagadh Road, Jambughoda, Halol), East (Dahod border, Godhra-Dahod tribal highway), West (Vadodara border, Kalol, Meghraj).</p>
<p>Our Godhra cake range (all 100% Eggless/Pure Veg): Chocolate, Black Forest, Red Velvet, Mango (Gujarat Kesar Keseri!), Butterscotch, Photo Cakes, Fondant Champaner-Pavagadh UNESCO / Jambughoda wildlife-theme cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Godhra, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Vadodara Road, Lunawada, Jambughoda, Pavagadh Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% Eggless & Pure Veg (all Gujarat orders)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kesar Mango, Champaner-Pavagadh Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes in Godhra 100% Eggless?", answer: "Yes! All cakes delivered in Godhra are 100% Eggless and Pure Vegetarian — honouring Gujarat's culinary tradition. Every flavour from Chocolate to Kesar Mango is made without eggs." },
      { question: "Can I get same-day cake delivery in Godhra?", answer: "Yes, same-day cake delivery is available across all Godhra areas — Civil Lines, Station Road, Vadodara Road, and Jambughoda — for orders placed before 3 PM." },
      { question: "Do you have Champaner-Pavagadh / Gujarat heritage-themed cakes in Godhra?", answer: "Yes! The UNESCO World Heritage Champaner-Pavagadh Archaeological Park — one of Gujarat's finest historical sites with medieval mosques, temples, and the sacred Kalikamata Shakti Peetha atop Pavagadh hill — inspires our Champaner fondant cakes." }
    ]
  },

  "villupuram": {
    cityName: "Villupuram",
    metaTitle: "Cake Delivery in Villupuram | Chennai-Salem Rail Junction Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Villupuram. Same-day delivery across Villupuram. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Villupuram",
    metaKeyword: "cake delivery villupuram, order cake online villupuram, birthday cake villupuram, custom cake villupuram, same day cake delivery villupuram railway junction ginee fort puducherry road salem road tindivanam",
    footerContent: `
<h2>Cake Delivery in Villupuram — South India's Major Rail Junction, Gingee Fort's Ruined Citadel, and Tamil Nadu's Highway Crossroads</h2>
<p>Villupuram — the headquarters of Villupuram district in Tamil Nadu, a city whose geographic importance is primarily infrastructural and historically vivid (Villupuram Junction is one of South India's busiest railway junctions — it is where the Chennai-Trichy main line meets the Chennai-Bengaluru and Chennai-Pondicherry-Cuddalore branch lines; the junction handles a massive volume of passengers and goods; Villupuram is also the last major town before Puducherry (35 km) on the East Coast Road corridor, and it connects to Salem, Dharmapuri, and the rest of Tamil Nadu's interior; the Gingee Fort — 37 km from Villupuram — is one of India's most spectacular fort complexes, built over three rocky hills with the Raja Mahal, Rani Mahal, granaries, a swimming pool carved in rock, and the Rangarajam temple inside the fort; the Marathas under Shivaji's general Tanaji Malusare attacked Gingee Fort in 1677; the Mughals under Aurangzeb besieged it for 8 years; the French fought the British over it; Gingee is dubbed "Troy of the East" for its impregnability), known for Tindivanam (an important town in Villupuram district, a node on the Chennai-Bengaluru highway), and a district of Pondicherry's hinterland — is a city of rail crossroads and medieval fortress grandeur. From birthday parties in the Civil Lines area to corporate cakes at the large rice mills, from anniversary surprises near the Railway Junction area to student cakes at Villupuram's colleges — RedHeart covers all Villupuram zones: Central (Civil Lines, Station Road, Puducherry Road), North (Chennai Road, Tindivanam, Vikravandi), South (Cuddalore Road, Ulundurpet, Panruti), East (Puducherry border, Vanur, Mailam), West (Salem Road, Attur Road, Sankarapuram).</p>
<p>Our Villupuram cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Gingee Fort / Tamil history-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Villupuram, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Puducherry Road, Chennai Road, Tindivanam, Ulundurpet</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gingee Fort Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Villupuram?", answer: "Yes, same-day cake delivery is available across all Villupuram areas — Civil Lines, Station Road, Puducherry Road, Tindivanam, and Ulundurpet — for orders placed before 3 PM." },
      { question: "Do you have Gingee Fort-themed cakes in Villupuram?", answer: "Yes! The Gingee Fort — called the 'Troy of the East', one of India's most spectacular medieval hill forts, 37 km from Villupuram, fought over by Marathas, Mughals, French, and British — inspires our Gingee Fort fondant cakes." },
      { question: "Are eggless cakes available in Villupuram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Villupuram delivery." }
    ]
  },

  "cuddalore": {
    cityName: "Cuddalore",
    metaTitle: "Cake Delivery in Cuddalore | Chidambaram SIPCOT Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Cuddalore. Same-day delivery across Cuddalore. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Cuddalore",
    metaKeyword: "cake delivery cuddalore, order cake online cuddalore, birthday cake cuddalore, custom cake cuddalore, same day cake delivery cuddalore chidambaram nataraja sipcot petrochemical port bay of bengal coromandel coast",
    footerContent: `
<h2>Cake Delivery in Cuddalore — Chidambaram's Nataraja Sacred City, SIPCOT Petrochemical Hub, and Coromandel Coast Port</h2>
<p>Cuddalore — the headquarters of Cuddalore district in Tamil Nadu, a city of historical, religious, and industrial significance (Cuddalore was historically a major port city — it was called Porto Novo by the Portuguese and was a trading post for the Dutch, Portuguese, and French; the Battle of Cuddalore (1758, 1783) between the British and French navies were fought off its coasts; the Fort of Cuddalore built by the Dutch in the 17th century is still partially visible; today Cuddalore hosts the Cuddalore Port, one of Tamil Nadu's medium cargo ports), the district containing Chidambaram (home to the Chidambaram Nataraja Temple — one of Hinduism's most philosophically significant temples; the Thillai Nataraja temple is one of the Panchabhoota Stalas — representing the element of Space/Akasha; the dancing form of Shiva as Nataraja — the Lord of Dance — is enshrined here; the temple's Ananda Tandava sculpture is one of India's greatest religious art masterpieces; the temple draws millions of pilgrims annually and is deeply connected to Bharatanatyam classical dance), home to Neyveli Lignite Corporation (NLC) in the Cuddalore-Villupuram border — India's largest lignite (brown coal) mine and thermal power complex, an employer of thousands, and the Tamil Nadu SIPCOT industrial zone (a large petrochemical, fertiliser, and chemical industrial complex in Cuddalore's SIPCOT area that has also attracted international controversy over pollution) — is a city of temple spirituality and industrial complexity. From birthday parties near the Chidambaram Nataraja temple complex to corporate cakes at the SIPCOT and NLC offices, from anniversary surprises near the Cuddalore Port area to student cakes at Cuddalore's colleges — RedHeart covers all Cuddalore zones: Cuddalore, Chidambaram, Neyveli, Panruti, Virudhachalam, Kattumannarkoil.</p>
<p>Our Cuddalore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Nataraja Temple / Chidambaram-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuddalore, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuddalore, Chidambaram, Neyveli, Panruti, Virudhachalam, Kattumannarkoil</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nataraja Temple Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Cuddalore?", answer: "Yes, same-day cake delivery is available across Cuddalore — Cuddalore town, Chidambaram, Neyveli, Panruti, and Virudhachalam — for orders placed before 3 PM." },
      { question: "Do you have Chidambaram Nataraja-themed cakes in Cuddalore?", answer: "Yes! The Chidambaram Nataraja Temple — one of Hinduism's most profound Panchabhoota Stala temples, housing the cosmic dancing Shiva as Nataraja (the lord of Bharatanatyam) — inspires our Nataraja fondant cakes. A sacred, uniquely Cuddalore design." },
      { question: "Are eggless cakes available in Cuddalore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Cuddalore delivery." }
    ]
  },

  "goalpara": {
    cityName: "Goalpara",
    metaTitle: "Cake Delivery in Goalpara | Brahmaputra South Bank Assam | RedHeart",
    metaDescription: "Order cakes online in Goalpara. Same-day delivery across Goalpara. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Goalpara",
    metaKeyword: "cake delivery goalpara, order cake online goalpara, birthday cake goalpara, custom cake goalpara, same day cake delivery goalpara brahmaputra south bank meghalaya border duck bill guwahati road",
    footerContent: `
<h2>Cake Delivery in Goalpara — Brahmaputra South Bank, Meghalaya Border City, and Assam's Gateway to the Garo Hills</h2>
<p>Goalpara — the headquarters of Goalpara district in Assam, a city of geographical and historical significance (Goalpara lies on the south bank of the Brahmaputra River — facing the Garo Hills plateau of Meghalaya across the river; the Goalpara district shares a long border with Meghalaya's Garo Hills area, making it a trading and cultural exchange zone between the Assamese plains and the Garo tribal plateau; historically, Goalpara was an important administrative centre — it was the headquarters of the Goalpara Division during British India, which covered a large swath of what is now western Assam; the Kamakhya temple deity tradition extends to the Goalpara area; the Sidheswar temple near Goalpara on a rock mid-river in the Brahmaputra is a sacred Shiva shrine reached by boat; Goalpara is also known for the Duck Bill viewpoint — where the Brahmaputra narrows between rocky outcrops, creating a dramatic river landscape), a district with significant Muslim population (Goalpara has one of Assam's larger Muslim communities — largely descended from medieval-era settlements and later migrations), and a key transportation hub on NH-17 connecting Guwahati to Dhubri and the Bangladesh-Bhutan border areas — is a city of Brahmaputra grandeur and Meghalaya gateway. From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Guwahati Road area to student cakes at Goalpara's colleges — RedHeart covers all Goalpara zones: Central (Civil Lines, Guwahati Road, Meghalaya Road), North (Kamrup border, Dharmapur, Krishnai), South (Meghalaya border, Dudhnai, Matia), East (Barpeta border, Baijaniagaon), West (Dhubri Road, Lakhipur, Rongjuli).</p>
<p>Our Goalpara cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Tea-Caramel (Assam CTC tea!), Photo Cakes, Fondant Brahmaputra South Bank / Sidheswar temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Goalpara, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Guwahati Road, Meghalaya Road, Dudhnai, Matia, Krishnai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Tea-Caramel</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Goalpara?", answer: "Yes, same-day cake delivery is available across all Goalpara areas — Civil Lines, Guwahati Road, Meghalaya Road, Dudhnai, and Matia — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Goalpara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Goalpara delivery." },
      { question: "Do you deliver midnight cakes in Goalpara?", answer: "Yes, midnight birthday cake delivery is available across Goalpara's central and residential zones." }
    ]
  },

  "tinsukia": {
    cityName: "Tinsukia",
    metaTitle: "Cake Delivery in Tinsukia | Tea-Oil Commercial Hub Upper Assam | RedHeart",
    metaDescription: "Order cakes online in Tinsukia. Same-day delivery across Tinsukia. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tinsukia",
    metaKeyword: "cake delivery tinsukia, order cake online tinsukia, birthday cake tinsukia, custom cake tinsukia, same day cake delivery tinsukia tea oil digboi assam dibrugarh border makum sadiya arunachal border",
    footerContent: `
<h2>Cake Delivery in Tinsukia — Upper Assam's Commercial Capital, Digboi Oil's Gateway, and Brahmaputra-Lohit Confluence</h2>
<p>Tinsukia — the headquarters of Tinsukia district in Assam, upper Assam's largest commercial city (Tinsukia, not Dibrugarh, is the commercial and business hub of upper Assam; Tinsukia's markets, wholesale trade, and banking activity serve the entire upper Assam-Arunachal Pradesh region; Tinsukia city's Assam Tea bazaar complex and Assam trunk road commercial zone are among the busiest in the region), close to Digboi (Digboi — 15 km from Tinsukia — is where the world's first commercial oil well was drilled in 1889 by the Assam Railways and Trading Company; the Digboi Refinery, still operational and the world's oldest continuously operating refinery, is a living industrial heritage site; the Digboi oil fields made upper Assam an oil-producing region that supplied the Allied forces in WWII; a War Cemetery at Digboi commemorates soldiers from India, Britain, and other nations who died in the Burma Campaign), at the confluence of the Brahmaputra, Lohit, and Dibang rivers (the Brahmaputra near Tinsukia broadens into a vast braided channel system), close to Dibru-Saikhowa National Park (one of Assam's finest wildlife sanctuaries — wild horses, hoolock gibbons, gangetic dolphins, and tigers), and at the threshold of Arunachal Pradesh (Sadiya, 70 km from Tinsukia, is the last major town before entering Arunachal's Lohit district) — is a city of oil heritage and eastern gateway. From birthday parties in the Civil Lines area to corporate cakes at the large tea garden offices and oil company townships, from anniversary surprises near the Dibrugarh Road to student cakes at Tinsukia's colleges — RedHeart covers all Tinsukia zones: Central (Civil Lines, Station Road, Dibrugarh Road), North (Digboi Road, Makum, Naharkatia), South (Sivasagar Road, Duliajan, Moran), East (Sadiya Road, Arunachal border, Deomali), West (Dibrugarh border, Doom Dooma).</p>
<p>Our Tinsukia cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Tea-Caramel (upper Assam estate tea!), Photo Cakes, Fondant Digboi Oil / Wild Horses of Dibru-Saikhowa-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tinsukia, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Dibrugarh Road, Digboi Road, Makum, Duliajan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Digboi Oil Heritage Fondant, Tea-Caramel, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tinsukia?", answer: "Yes, same-day cake delivery is available across all Tinsukia areas — Civil Lines, Station Road, Dibrugarh Road, and Digboi Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Digboi and Duliajan oil township areas from Tinsukia?", answer: "Yes, Digboi (home of the world's oldest refinery, 1889) and Duliajan (OIL India headquarters) are covered under our Tinsukia same-day delivery zone." },
      { question: "Are eggless cakes available in Tinsukia?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tinsukia delivery." }
    ]
  },

  "tura": {
    cityName: "Tura",
    metaTitle: "Cake Delivery in Tura | Garo Hills Capital Meghalaya | RedHeart",
    metaDescription: "Order cakes online in Tura. Same-day delivery across Tura. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tura",
    metaKeyword: "cake delivery tura, order cake online tura, birthday cake tura, custom cake tura, same day cake delivery tura garo hills meghalaya nokrek wangala festival bangladesh border assam border",
    footerContent: `
<h2>Cake Delivery in Tura — Garo Hills' Capital, Nokrek Biosphere Reserve, and Meghalaya's Western Cultural Heart</h2>
<p>Tura — the headquarters of West Garo Hills district in Meghalaya, the cultural and commercial capital of the Garo Hills (Meghalaya is divided into three major regions: the Khasi Hills (Shillong), the Jaintia Hills, and the Garo Hills; Tura is the largest city in the Garo Hills and serves as the economic and administrative hub for the entire western Meghalaya zone; the Garo people — one of Meghalaya's three major indigenous communities — are among India's few matrilineal societies; property and clan identity pass through the mother's line in Garo society; the Garo people are known for their weaving (Dakmanda, Woven designs), the Wangala festival (the harvest thanksgiving festival — called the "Hundred Drums Festival" because of the ceremonial playing of traditional drums; Wangala is held in October-November and is one of Northeast India's most vibrant indigenous festivals, with young men and women in elaborate traditional costumes dancing to the rhythm of the da.dol (drum)), and for their cuisine of rice, bamboo shoots, and pork), home to Nokrek Biosphere Reserve (Nokrek National Park — near Tura — is a UNESCO Biosphere Reserve; it is the location of one of India's last natural stands of wild citrus (Citrus indica — the wild ancestor of all cultivated citrus species); Nokrek is also habitat for the red panda, elephant, hoolock gibbon, and golden cat), bordering Bangladesh (Tura is close to the Bangladesh-Meghalaya border, and several border trade routes operate in this area), and a city with a strong Catholic mission history (Christian missionaries arrived in the Garo Hills in the 1860s, and today Garo Hills is predominantly Christian) — is a city of Garo cultural vibrancy and biodiversity. From birthday parties in the Civil Lines area to corporate cakes at the government offices, from Wangala celebration cakes to anniversary surprises in the Tura Peak area — RedHeart covers all Tura zones: Central (Civil Lines, Station Road, Shillong Road), North (Assam border, Goalpara border, Dalu), South (Bangladesh border, Baghmara, Balachpur), East (Williamnagar Road, East Garo Hills border), West (Phulbari, Dambuk, Rongram).</p>
<p>Our Tura cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Wangala Festival / Nokrek Biosphere-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tura, Meghalaya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Shillong Road, Baghmara, Dalu, Williamnagar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Wangala Festival Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tura?", answer: "Yes, same-day cake delivery is available across all Tura areas — Civil Lines, Station Road, Shillong Road, Baghmara, and Dalu — for orders placed before 3 PM." },
      { question: "Do you have Wangala Festival / Garo Hills-themed cakes in Tura?", answer: "Yes! The Wangala — the Garo people's spectacular 'Hundred Drums Festival', one of Northeast India's most vibrant harvest celebrations — and Nokrek's UNESCO Biosphere Reserve (home of the wild citrus ancestor of all oranges and lemons) inspire our Wangala fondant cakes." },
      { question: "Are eggless cakes available in Tura?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tura delivery." }
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
