// Batch 53 — 15 cities:
// Karnataka: Uttara Kannada (Karwar), Chamarajanagar, Kodagu (Madikeri), Davanagere
// Rajasthan: Dausa, Dholpur, Karauli, Baran
// West Bengal: Alipurduar, West Midnapore (Medinipur)
// Gujarat: Anand, Kheda, Mehsana
// Assam: Jorhat, Sonitpur (Tezpur)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "uttara-kannada": {
    cityName: "Uttara Kannada",
    metaTitle: "Flower Delivery in Uttara Kannada | Karwar Coastal Karnataka | RedHeart",
    metaDescription: "Order flowers in Uttara Kannada (Karwar), Karnataka. Same-day delivery near Goa border & across Uttara Kannada. From ₹399.",
    h1: "Online Flower Delivery in Uttara Kannada",
    metaKeyword: "flower delivery uttara kannada, online flowers karwar karnataka, florist uttara kannada karwar, flowers karwar goa border dandeli sirsi konkan coast kaiga nuclear",
    footerContent: `
<h2>Flower Delivery in Uttara Kannada — Karwar's Konkan Coast, Dandeli's Forests, and Sirsi's Arecanut Hills</h2>
<p>Uttara Kannada (North Canara), headquartered at Karwar on the Arabian Sea coast of Karnataka, is one of India's most ecologically rich and scenically spectacular districts — straddling the Western Ghats, the Sahyadri-Konkan coast, and the Deccan rain-shadow. The district contains the Kaiga Nuclear Power Station (Karnataka's only nuclear power plant, on the banks of the Kali River), the Dandeli Wildlife Sanctuary and Anshi (Anashi) Tiger Reserve (home to tigers, elephants, leopards, and rare birds in dense rainforest), and the Sirsi-Siddapur-Yellapur area (the heartland of Malnad arecanut and spice cultivation). Karwar town (the district headquarters) has a colonial heritage (the former capital of North Canara under the British) and a beautiful natural harbour. Rabindranath Tagore wrote admiringly of Karwar's natural beauty ("Karwar, the most beautiful place I have ever seen").</p>
<p>RedHeart delivers flowers across Uttara Kannada — Karwar Main Market, Sirsi area, Dandeli area, Kumta area, Honavar area, and Bhatkal area. Our range includes roses, marigolds, seasonal Karnataka coastal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Uttara Kannada (Karwar), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karwar, Sirsi, Dandeli, Kumta, Honavar, Bhatkal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tropical flowers, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Karwar beach resort anniversary from Uttara Kannada?", answer: "Yes, Karwar's Arabian Sea coastline has beautiful resorts. Romantic rose bouquets and anniversary arrangements for Karwar and Gokarna stays can be delivered." },
      { question: "Are tropical flowers available in Uttara Kannada?", answer: "Yes, Uttara Kannada's Western Ghats and coastal climate support tropical and exotic flowers. Seasonal exotic bouquets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Uttara Kannada?", answer: "Yes, same-day delivery is available across Uttara Kannada for orders placed before 3 PM." }
    ]
  },

  "chamarajanagar": {
    cityName: "Chamarajanagar",
    metaTitle: "Flower Delivery in Chamarajanagar | Mysore Karnataka | RedHeart",
    metaDescription: "Order flowers in Chamarajanagar, Karnataka. Same-day delivery near Biligiri Rangaswamy hills & across Chamarajanagar. From ₹399.",
    h1: "Online Flower Delivery in Chamarajanagar",
    metaKeyword: "flower delivery chamarajanagar, online flowers chamarajanagar karnataka, florist chamarajanagar, flowers chamarajanagar biligiri rangaswamy hills br hills elephant soliga",
    footerContent: `
<h2>Flower Delivery in Chamarajanagar — Biligiri Rangaswamy's Sacred White Hills and the Soliga Tribal Homeland</h2>
<p>Chamarajanagar, in southern Karnataka at the Tamil Nadu and Kerala borders, is the headquarters of Chamarajanagar district — a district of dense forests, wildlife reserves, and sacred hills at the confluence of the Western and Eastern Ghats. The Biligiri Rangaswamy Temple (BRT) Wildlife Sanctuary — a UNESCO World Heritage buffer zone and tiger reserve — is named for the sacred white hill (Biligiri = white hill, Rangaswamy = Lord Vishnu) where a famous temple sits. The Soliga tribe (an ancient honey-gathering and forest-dwelling Austro-Asiatic community) have traditionally lived in the BRT forests and were instrumental in a landmark Supreme Court case that allowed them to continue living in a tiger reserve (2011 judgment). The Ranganatha Swamy temple at Srirangapatna (famous for Mysore Kingdom history) and the Chikkahole reservoir are other important landmarks.</p>
<p>RedHeart delivers flowers across Chamarajanagar — Main Market, Yelandur area, Kollegal area, Gundlupet area, Sathyamangalam Road, and Station Road. Our range includes roses, marigolds, seasonal Karnataka bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamarajanagar, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Yelandur, Kollegal, Gundlupet, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a BRT Wildlife Sanctuary jungle stay in Chamarajanagar?", answer: "Yes, Biligiri Rangaswamy (BRT) Wildlife Sanctuary jungle lodges are in Chamarajanagar district. Bouquets for wildlife resort stays can be delivered." },
      { question: "Are jasmine gajras available in Chamarajanagar?", answer: "Yes, jasmine gajras for daily wear and festivals are available for same-day delivery in Chamarajanagar." },
      { question: "Do you deliver flowers same day in Chamarajanagar?", answer: "Yes, same-day delivery is available across Chamarajanagar for orders placed before 3 PM." }
    ]
  },

  "madikeri": {
    cityName: "Madikeri",
    metaTitle: "Flower Delivery in Madikeri | Coorg Kodagu Karnataka | RedHeart",
    metaDescription: "Order flowers in Madikeri (Coorg), Karnataka. Same-day delivery near Raja's Seat & across Madikeri. From ₹399.",
    h1: "Online Flower Delivery in Madikeri",
    metaKeyword: "flower delivery madikeri, online flowers madikeri coorg kodagu karnataka, florist madikeri, flowers madikeri coorg raja seat coffee estate misty hills kaveri origin",
    footerContent: `
<h2>Flower Delivery in Madikeri — Coorg's Misty Coffee Hills, Raja's Seat, and the Kaveri's Sacred Origin</h2>
<p>Madikeri (Mercara), the headquarters of Kodagu (Coorg) district in Karnataka's Western Ghats, is one of South India's most beloved hill destinations and the capital of the Coorg coffee highlands. Kodagu is India's highest per-capita army officer-producing district — the Coorgis (Kodavas) are a unique martial community with distinct language (Kodava Takk), customs, and traditions (including the Puthari harvest festival and the Kailpodh festival of weapons). The Kaveri River originates at Talakaveri (in Kodagu's Brahmagiri hills), making Kodagu one of South India's most sacred landscapes. The Raja's Seat (a royal garden with a view of the valleys, built by Kodagu's Haleri kings) and the Madikeri Fort (built by Mudduraja and later used by Hyder Ali and Tipu Sultan) are key heritage sites. Coorg's coffee estates (arabica and robusta) and pepper gardens define the landscape.</p>
<p>RedHeart delivers flowers across Madikeri — Raja's Seat area, Fort Road, Coffee Estate area, Kushalnagar area, Virajpet area, and Somwarpet area. Our range includes roses, exotic hill flowers, marigolds, and seasonal Coorg bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madikeri (Coorg), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raja's Seat area, Fort Road, Kushalnagar, Virajpet, Somwarpet</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, exotic hill flowers, lilies, seasonal Coorg bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Coorg coffee estate honeymoon or anniversary from Madikeri?", answer: "Yes, Coorg's misty coffee estate resorts are India's most romantic wedding destinations. Rose bouquets, lily arrangements, and exotic honeymoon flowers for Coorg estates can be delivered same day." },
      { question: "Are exotic hill flowers available in Madikeri?", answer: "Yes, the Kodagu hills support orchids, anthuriums, and seasonal exotic flowers. Coorg's microclimate bouquets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Madikeri?", answer: "Yes, same-day delivery is available across Madikeri for orders placed before 3 PM." }
    ]
  },

  "davanagere": {
    cityName: "Davanagere",
    metaTitle: "Flower Delivery in Davanagere | Benne Dosa Karnataka | RedHeart",
    metaDescription: "Order flowers in Davanagere, Karnataka. Same-day delivery near Tungabhadra & across Davanagere. From ₹399.",
    h1: "Online Flower Delivery in Davanagere",
    metaKeyword: "flower delivery davanagere, online flowers davanagere karnataka, florist davanagere, flowers davanagere benne dosa tungabhadra cotton textile manufacturing",
    footerContent: `
<h2>Flower Delivery in Davanagere — Benne Dosa Capital and Karnataka's Cotton Textile Manufacturing Heart</h2>
<p>Davanagere (Davangere), in the Maidan region of central Karnataka on the Tungabhadra, is the headquarters of Davanagere district — one of Karnataka's most industrially active and culturally important inland cities. Davanagere is famous across South India for the Benne (Butter) Dosa — a crispy, butter-drenched version of the dosa that originated in Davanagere and spawned a global franchise of "Davanagere Benne Dosa" restaurants. The city is Karnataka's second-largest cotton textile manufacturing city (after Bengaluru), with a significant handloom and powerloom weaving industry. The Kondajji Basavanna temple and the Durgambika temple are important pilgrimage sites. Davanagere is also a major educational hub with several engineering and medical colleges.</p>
<p>RedHeart delivers flowers across Davanagere — Main Market, P.J. Extension, Vidyanagar, Harihara area, Harihar Road, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Karnataka bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Davanagere, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, P.J. Extension, Vidyanagar, Harihara, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are jasmine gajras available in Davanagere?", answer: "Yes, jasmine gajras for daily wear and festivals are popular in Davanagere. Fresh jasmine is available for same-day delivery." },
      { question: "Can I get birthday flowers in Davanagere?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Davanagere for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Davanagere?", answer: "Yes, same-day delivery is available across Davanagere for orders placed before 3 PM." }
    ]
  },

  "dausa": {
    cityName: "Dausa",
    metaTitle: "Flower Delivery in Dausa | Mehndipur Balaji Rajasthan | RedHeart",
    metaDescription: "Order flowers in Dausa, Rajasthan. Same-day delivery near Mehndipur Balaji & across Dausa. From ₹399.",
    h1: "Online Flower Delivery in Dausa",
    metaKeyword: "flower delivery dausa, online flowers dausa rajasthan, florist dausa, flowers dausa mehndipur balaji hanuman temple amer jaipur delhi agra highway",
    footerContent: `
<h2>Flower Delivery in Dausa — Mehndipur Balaji's Exorcism Shrine and the Jaipur-Delhi Highway Belt</h2>
<p>Dausa, in eastern Rajasthan between Jaipur and Bharatpur on the Delhi-Agra highway, is the headquarters of Dausa district — a district of deep religious importance and strategic transit commerce. The Mehndipur Balaji temple (in the Mehndipur village of Dausa district) — dedicated to Lord Hanuman — is one of North India's most extraordinary and unusual pilgrimage sites. Famous for miraculous cures of supernatural possession and mental illness, Mehndipur Balaji draws hundreds of thousands of devotees who believe in the temple's healing powers. The ritual includes unique practices (coconut-breaking, swinging of devotees, specific Hanuman prayers) that are distinctly different from most Hindu temples. Dausa district was part of the Dhundhar kingdom (Jaipur State) and has the Abhaneri Stepwell and Sun Temple (Harshat Mata temple, 8th-9th century, with extraordinary sculpture).</p>
<p>RedHeart delivers flowers across Dausa — Main Market, Mehndipur area, Jaipur Road, Bandikui area, Lalsot area, and Station Road. Our range includes roses, marigolds, Hanuman puja flowers, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dausa, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mehndipur area, Jaipur Road, Bandikui, Lalsot, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, Hanuman puja flowers, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Mehndipur Balaji puja available in Dausa?", answer: "Yes, Mehndipur Balaji temple (one of North India's most famous Hanuman shrines) is in Dausa district. Marigold garlands and Hanuman puja sets for the temple are available from Dausa." },
      { question: "Are flowers for the Abhaneri stepwell (Dausa) available?", answer: "Yes, the Abhaneri stepwell and Harshat Mata temple (8th-9th century) are in Dausa district. Seasonal bouquets for cultural visits are available." },
      { question: "Do you deliver flowers same day in Dausa?", answer: "Yes, same-day delivery is available across Dausa for orders placed before 3 PM." }
    ]
  },

  "dholpur": {
    cityName: "Dholpur",
    metaTitle: "Flower Delivery in Dholpur | Chambal Rajasthan | RedHeart",
    metaDescription: "Order flowers in Dholpur, Rajasthan. Same-day delivery near Chambal Sanctuary & across Dholpur. From ₹399.",
    h1: "Online Flower Delivery in Dholpur",
    metaKeyword: "flower delivery dholpur, online flowers dholpur rajasthan, florist dholpur, flowers dholpur chambal ravines gharial sanctuary red sandstone agra mp border",
    footerContent: `
<h2>Flower Delivery in Dholpur — Chambal's Gharial Ravines and the Red Sandstone Gateway to Agra</h2>
<p>Dholpur, on the Chambal River in eastern Rajasthan at the Madhya Pradesh and UP border, is the headquarters of Dholpur district — one of Rajasthan's smallest and most geographically unique districts. The Chambal River (the only major river in India that flows from south to north through the Aravalli and Vindhya foothills) forms Dholpur's eastern boundary — its ravines and cliffs were historically the refuge of dacoits (the Chambal dacoits were the subject of countless Bollywood films and police operations from the 1950s to 1980s). The National Chambal Wildlife Sanctuary (protecting gharial, mugger crocodiles, Gangetic dolphins, and Indian skimmers) is a remarkable conservation success. Dholpur's red sandstone quarries have supplied stone for Agra Fort, Fatehpur Sikri, and the Red Fort in Delhi. The Shergarh Fort (Dholpur Fort) was built by Sher Shah Suri on the Chambal banks.</p>
<p>RedHeart delivers flowers across Dholpur — Main Market, Agra Road, Bari area, Rajakhera area, Chambal Ghat area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dholpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Agra Road, Bari, Rajakhera, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Dholpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Dholpur for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Dholpur?", answer: "Yes, marigold garlands and puja sets for Diwali, Holi, and other festivals are available for same-day delivery in Dholpur." },
      { question: "Do you deliver flowers same day in Dholpur?", answer: "Yes, same-day delivery is available across Dholpur for orders placed before 3 PM." }
    ]
  },

  "karauli": {
    cityName: "Karauli",
    metaTitle: "Flower Delivery in Karauli | Kaila Devi Rajasthan | RedHeart",
    metaDescription: "Order flowers in Karauli, Rajasthan. Same-day delivery near Kaila Devi temple & across Karauli. From ₹399.",
    h1: "Online Flower Delivery in Karauli",
    metaKeyword: "flower delivery karauli, online flowers karauli rajasthan, florist karauli, flowers karauli kaila devi temple shakti peetha pink city gate gambhiri chambal",
    footerContent: `
<h2>Flower Delivery in Karauli — Kaila Devi's Sacred Navratri and the Pink Stone City's Royal Heritage</h2>
<p>Karauli, in eastern Rajasthan at the UP and MP borders, is the headquarters of Karauli district — a district of extraordinary religious importance and a remarkably preserved historic town centre. The Kaila Devi temple (on the Trikuta hill on the Gambhiri River banks, in Karauli district) is one of Rajasthan's most important Shakti temples — dedicated to Goddess Kaila Devi (a form of Mahakali), it holds one of North India's largest Navratri melas, drawing 10+ lakh pilgrims in the spring (Chaitra Navratri). Karauli city itself is famous for its "lal pathar" (red/pink stone) traditional architecture — the old city's havelis, temples, and bazaars are built in the distinctive rose-pink local stone, giving it a spectacular visual character. The Karauli Royal Palace (the Maharaja of Karauli's palace) reflects a distinctive Rajput-Mughal heritage style.</p>
<p>RedHeart delivers flowers across Karauli — Main Market, Kaila Devi area, Hindaun area, Nadoti area, Sapotra area, and Station Road. Our range includes roses, marigolds, Devi puja flowers, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karauli, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kaila Devi area, Hindaun, Nadoti, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigolds, roses, Devi puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kaila Devi Navratri mela available in Karauli?", answer: "Yes, the Kaila Devi Navratri mela (drawing 10+ lakh pilgrims) is one of Rajasthan's biggest religious fairs. Marigold garlands, red hibiscus, and Devi puja sets for the mela are available from Karauli." },
      { question: "Can I get birthday flowers in Karauli?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Karauli for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Karauli?", answer: "Yes, same-day delivery is available across Karauli for orders placed before 3 PM." }
    ]
  },

  "baran": {
    cityName: "Baran",
    metaTitle: "Flower Delivery in Baran | Bhainsrorgarh Rajasthan | RedHeart",
    metaDescription: "Order flowers in Baran, Rajasthan. Same-day delivery near Ramgarh Crater & across Baran. From ₹399.",
    h1: "Online Flower Delivery in Baran",
    metaKeyword: "flower delivery baran, online flowers baran rajasthan, florist baran, flowers baran bhainsrorgarh fort chambal meteor crater ramgarh kota hadoti shahbad",
    footerContent: `
<h2>Flower Delivery in Baran — Chambal's River Fortress and India's Confirmed Meteor Impact Crater</h2>
<p>Baran, in the Hadoti region of southeastern Rajasthan, is the headquarters of Baran district — a district of the Chambal river system's upper reaches and remarkable geological and historical heritage. The Ramgarh Crater (near Ramgarh village in Baran district) is India's only confirmed meteor impact structure — a 3.5 km diameter impact crater formed approximately 165 million years ago, now a protected site and a unique geological heritage. The Bhainsrorgarh Fort (on a rocky promontory at the confluence of the Chambal and Bamni rivers) is one of Rajasthan's most dramatically situated forts — rising 200 feet above the Chambal gorge, with a royal heritage hotel. The Shahabad area (Baran district) is known for its tribal art (Saharia tribe paintings). The Baran district is also known for soya bean and coriander cultivation.</p>
<p>RedHeart delivers flowers across Baran — Main Market, Shahabad area, Anta area, Kishanganj area, Chhabra area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baran, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Shahabad, Anta, Kishanganj, Chhabra, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Bhainsrorgarh heritage fort stay in Baran?", answer: "Yes, Bhainsrorgarh Fort (dramatically above the Chambal gorge) has a heritage hotel. Romantic rose bouquets and anniversary arrangements for Bhainsrorgarh Fort stays can be delivered from Baran." },
      { question: "Are flowers for festivals available in Baran?", answer: "Yes, marigold garlands and puja sets for Diwali, Navratri, and other festivals are available for same-day delivery in Baran." },
      { question: "Do you deliver flowers same day in Baran?", answer: "Yes, same-day delivery is available across Baran for orders placed before 3 PM." }
    ]
  },

  "alipurduar": {
    cityName: "Alipurduar",
    metaTitle: "Flower Delivery in Alipurduar | Buxa Tiger Reserve West Bengal | RedHeart",
    metaDescription: "Order flowers in Alipurduar, West Bengal. Same-day delivery near Buxa Tiger Reserve & across Alipurduar. From ₹399.",
    h1: "Online Flower Delivery in Alipurduar",
    metaKeyword: "flower delivery alipurduar, online flowers alipurduar west bengal, florist alipurduar, flowers alipurduar buxa tiger reserve bhutan dooars tea garden torsa jayanti",
    footerContent: `
<h2>Flower Delivery in Alipurduar — Buxa Tiger's Bhutan Border Forests and the Eastern Dooars Tea Belt</h2>
<p>Alipurduar, in the eastern Dooars of West Bengal near Bhutan and Assam, is the headquarters of Alipurduar district — one of India's most ecologically important and scenically spectacular districts in the terai and sub-Himalayan belt. The Buxa Tiger Reserve (adjacent to Bhutan's Royal Manas National Park, forming a trans-boundary conservation landscape) is one of Bengal's two tiger reserves, famous for its dense semi-evergreen and deciduous forests, leopards, Indian elephants, and the historic Buxa Fort (a British-era jail used to imprison freedom fighters, now an eco-tourism spot). The Jayanti river (originating in Bhutan) and the Torsa river (flowing from Bhutan's Chumbi valley) create the lush riverine ecosystems. Alipurduar is surrounded by some of Bengal's finest tea gardens.</p>
<p>RedHeart delivers flowers across Alipurduar — Main Market, Buxa area, Cooch Behar Road, Hasimara area, Madarihat area, and Station Road. Our range includes roses, orchids, marigolds, and seasonal West Bengal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alipurduar, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Buxa area, Cooch Behar Road, Hasimara, Madarihat, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Buxa Tiger Reserve jungle stay from Alipurduar?", answer: "Yes, Buxa Tiger Reserve's jungle camps and eco-lodges are in Alipurduar. Bouquets for wildlife resort stays can be delivered." },
      { question: "Are orchids available in Alipurduar?", answer: "Yes, Alipurduar's sub-Himalayan forests support native orchids. Orchid bouquets and tropical flower arrangements are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Alipurduar?", answer: "Yes, same-day delivery is available across Alipurduar for orders placed before 3 PM." }
    ]
  },

  "west-midnapore": {
    cityName: "West Midnapore",
    metaTitle: "Flower Delivery in West Midnapore | Medinipur West Bengal | RedHeart",
    metaDescription: "Order flowers in West Midnapore (Medinipur), West Bengal. Same-day delivery near Midnapur & across West Midnapore. From ₹399.",
    h1: "Online Flower Delivery in West Midnapore",
    metaKeyword: "flower delivery west midnapore, online flowers medinipur west bengal, florist west midnapore, flowers medinipur midnapore santal tribal hijli jhargram kharagpur iit",
    footerContent: `
<h2>Flower Delivery in West Midnapore — IIT Kharagpur, Hijli Jail Heritage, and the Santal Homeland</h2>
<p>West Midnapore (Paschim Medinipur), in southwestern West Bengal at the Jharkhand and Odisha borders, is the headquarters of Paschim Medinipur district — one of Bengal's largest and most historically eventful districts. IIT Kharagpur — India's first Indian Institute of Technology, established 1951 in the Hijli Detention Camp (where Mahatma Gandhi's Non-Cooperation and Civil Disobedience Movement protesters were held and two were killed by British police in 1931) — stands on one of independent India's most symbolically charged campuses. Medinipur has a distinguished revolutionary history (freedom fighters from Medinipur participated prominently in the 1942 Quit India Movement, with a parallel government briefly established). The Jhargram sub-division (now Jhargram district, carved from Paschim Medinipur in 2017) is the Santal-Kol tribal homeland with distinctive Pata painting art.</p>
<p>RedHeart delivers flowers across West Midnapore — Medinipur Main Market, Kharagpur area, IIT Kharagpur area, Ghatal area, Daspur area, and Station Road. Our range includes roses, marigolds, seasonal West Bengal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">West Midnapore (Medinipur), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Medinipur, Kharagpur, IIT Kharagpur, Ghatal, Daspur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Durga Puja flowers, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers delivered to IIT Kharagpur campus in West Midnapore?", answer: "Yes, flower deliveries to IIT Kharagpur (Kharagpur, West Midnapore) for campus events, convocations, and gifting are available for same-day delivery." },
      { question: "Are flowers for Durga Puja available in West Midnapore?", answer: "Yes, Durga Puja is the biggest festival in West Midnapore. Marigold garlands, hibiscus, and Durga puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in West Midnapore?", answer: "Yes, same-day delivery is available across West Midnapore for orders placed before 3 PM." }
    ]
  },

  "anand": {
    cityName: "Anand",
    metaTitle: "Flower Delivery in Anand | Amul Dairy Capital Gujarat | RedHeart",
    metaDescription: "Order flowers in Anand, Gujarat. Same-day delivery near Amul Dairy & across Anand. From ₹399.",
    h1: "Online Flower Delivery in Anand",
    metaKeyword: "flower delivery anand, online flowers anand gujarat, florist anand, flowers anand amul dairy cooperative sardar patel birthplace nadiad charotar tobacco",
    footerContent: `
<h2>Flower Delivery in Anand — Amul's White Revolution Capital and the Charotar's Agricultural Heartland</h2>
<p>Anand, in the Charotar region of central Gujarat, is the headquarters of Anand district — the birthplace of India's White Revolution and home to AMUL (Anand Milk Union Limited), the cooperative dairy model that transformed India from a milk-deficient to the world's largest milk producer. The Anand Model (the Kaira District Cooperative Milk Producers Union, established by Tribhuvandas Patel and engineered by Dr. Verghese Kurien) was replicated across India through "Operation Flood" — one of the most successful rural development programmes in history. Anand is also part of the Sardar Patel heritage region — Vallabhbhai Patel (the "Iron Man of India," India's first Home Minister and Deputy PM) was born in Nadiad, very near Anand. The Vallabh Vidyanagar educational town (adjacent to Anand) houses multiple colleges and universities. Anand district grows tobacco, rice, and wheat in the fertile Charotar plain.</p>
<p>RedHeart delivers flowers across Anand — Main Market, AMUL Dairy area, Vallabh Vidyanagar area, Nadiad area, Borsad area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anand, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, AMUL Dairy area, Vallabh Vidyanagar, Nadiad, Borsad, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Anand?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Anand for orders placed before 3 PM." },
      { question: "Are flowers for Navratri Garba available in Anand?", answer: "Yes, Navratri Garba is celebrated enthusiastically in Anand (Charotar region). Marigold garlands and festive arrangements for the 9-night Garba are available." },
      { question: "Do you deliver flowers same day in Anand?", answer: "Yes, same-day delivery is available across Anand for orders placed before 3 PM." }
    ]
  },

  "mehsana": {
    cityName: "Mehsana",
    metaTitle: "Flower Delivery in Mehsana | Modhera Sun Temple Gujarat | RedHeart",
    metaDescription: "Order flowers in Mehsana, Gujarat. Same-day delivery near Modhera Sun Temple & across Mehsana. From ₹399.",
    h1: "Online Flower Delivery in Mehsana",
    metaKeyword: "flower delivery mehsana, online flowers mehsana gujarat, florist mehsana, flowers mehsana modhera sun temple rani ki vav patan stepwell north gujarat dairy",
    footerContent: `
<h2>Flower Delivery in Mehsana — Modhera's Sun Temple, Patan's Rani-ki-Vav, and North Gujarat's Dairy Belt</h2>
<p>Mehsana, in North Gujarat's flat agricultural plain north of Ahmedabad, is the headquarters of Mehsana district — a district of extraordinary heritage temples, a thriving dairy cooperative economy, and North Gujarat's service hub. The Modhera Sun Temple (built by the Solanki king Bhimdev I in 1026 CE) — one of India's finest examples of Maru-Gurjara temple architecture, with a remarkable stepwell (Surya Kund) featuring 108 miniature shrines at every step and outstanding carvings — is a major UNESCO tentative list heritage site. The Rani-ki-Vav (Queen's Stepwell) at Patan (now Patan district but historically linked to Mehsana region) is a UNESCO World Heritage Site. Mehsana is part of the "Milk River" cooperative dairy belt (DUDHSAGAR Dairy) that contributes to AMUL's milk supply. The district also has the Becharaji Shakti Peetha temple.</p>
<p>RedHeart delivers flowers across Mehsana — Main Market, Modhera area, Visnagar area, Unjha area, Becharaji area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mehsana, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Modhera area, Visnagar, Unjha, Becharaji, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, Navratri flowers, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Becharaji temple Navratri available in Mehsana?", answer: "Yes, the Becharaji Shakti Peetha temple (in Mehsana district) is one of Gujarat's most important Navratri sites. Marigold garlands and Devi puja sets for Becharaji Navratri are available from Mehsana." },
      { question: "Can I get birthday flowers in Mehsana?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Mehsana for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Mehsana?", answer: "Yes, same-day delivery is available across Mehsana for orders placed before 3 PM." }
    ]
  },

  "jorhat": {
    cityName: "Jorhat",
    metaTitle: "Flower Delivery in Jorhat | Assam Tea Capital | RedHeart",
    metaDescription: "Order flowers in Jorhat, Assam. Same-day delivery near Majuli Island & across Jorhat. From ₹399.",
    h1: "Online Flower Delivery in Jorhat",
    metaKeyword: "flower delivery jorhat, online flowers jorhat assam, florist jorhat, flowers jorhat tea capital majuli island brahmaputra vaishnavite sattra assam",
    footerContent: `
<h2>Flower Delivery in Jorhat — The Tea Capital of the World and Majuli's Sacred Vaishnavite Island</h2>
<p>Jorhat, on the south bank of the Brahmaputra in Upper Assam, is the headquarters of Jorhat district — widely called "the Tea Capital of the World" (Jorhat hosted the first tea auction in India, and Upper Assam's Jorhat-Sibsagar tea belt is one of the world's densest concentrations of tea gardens). Jorhat is the gateway to Majuli — the world's largest river island (in the Brahmaputra), a UNESCO Biosphere Reserve candidate, and the heartland of Vaishnavite Sattra culture (the Sattra monasteries established by the Vaishnavite saint Sankardeva are centres of Borgeet devotional music, Sattriya classical dance, and mask-making). Jorhat was the capital of the last Ahom kingdom before the British annexation. The Gibbon Wildlife Sanctuary (protecting the Hoolock Gibbon, India's only ape species) is in Jorhat district.</p>
<p>RedHeart delivers flowers across Jorhat — Main Market, M.L. Road, Majuli Ferry area, Cinnamara Tea Garden area, Mariani area, and Station Road. Our range includes roses, marigolds, seasonal Assam bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jorhat, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, M.L. Road, Majuli Ferry area, Tea Garden area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a tea estate bungalow stay near Jorhat?", answer: "Yes, Jorhat's tea estates (the most concentrated in the world) have colonial planter bungalows used as heritage stays. Rose bouquets and tea estate gifting arrangements are available for same-day delivery." },
      { question: "Are orchids available in Jorhat?", answer: "Yes, Upper Assam's forests support native orchids. Orchid bouquets and exotic flower arrangements are available in Jorhat for same-day delivery." },
      { question: "Do you deliver flowers same day in Jorhat?", answer: "Yes, same-day delivery is available across Jorhat for orders placed before 3 PM." }
    ]
  },

  "sonitpur": {
    cityName: "Sonitpur",
    metaTitle: "Flower Delivery in Sonitpur | Tezpur Assam | RedHeart",
    metaDescription: "Order flowers in Sonitpur (Tezpur), Assam. Same-day delivery near Nameri & across Sonitpur. From ₹399.",
    h1: "Online Flower Delivery in Sonitpur",
    metaKeyword: "flower delivery sonitpur, online flowers tezpur assam, florist sonitpur tezpur, flowers tezpur sonitpur nameri national park brahmaputra agnigarh ruins arunachal border",
    footerContent: `
<h2>Flower Delivery in Sonitpur — Tezpur's Agnigarh Mythology, Nameri Tigers, and the Brahmaputra's Romance</h2>
<p>Sonitpur (headquartered at Tezpur — "City of Blood," from the legendary battle between Usha and Aniruddha), on the north bank of the Brahmaputra in central Assam, is the headquarters of Sonitpur district — a district of ancient mythology, pristine wilderness, and the main military gateway to Arunachal Pradesh. Tezpur is named from the Hindu legend of Banasura's daughter Usha (who fell in love with Krishna's grandson Aniruddha), and the Agnigarh hill (where Banasura imprisoned Aniruddha) remains a romantic hilltop park overlooking the Brahmaputra. The Nameri National Park and Tiger Reserve (in the terai-forest hills at the Arunachal Pradesh border) is one of India's finest wildlife sanctuaries and a base for jungle treks and elephant encounters. Tezpur is also an important Air Force base (the only permanent Indian Air Force station in Assam).</p>
<p>RedHeart delivers flowers across Sonitpur — Tezpur Main Market, Agnigarh area, Nameri area, Bihaguri area, Dhekiajuli area, and Station Road. Our range includes roses, orchids, marigolds, and seasonal Assam bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonitpur (Tezpur), Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tezpur Main Market, Agnigarh, Nameri area, Bihaguri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get anniversary flowers for an Agnigarh visit in Tezpur?", answer: "Yes, the Agnigarh hilltop park in Tezpur (associated with the love story of Usha-Aniruddha) is a romantic landmark. Anniversary rose bouquets for Agnigarh visits are available for same-day delivery." },
      { question: "Can I get flowers for a Nameri National Park safari stay from Sonitpur?", answer: "Yes, Nameri Tiger Reserve's eco-camps are in Sonitpur district. Bouquets for jungle resort stays can be delivered in Tezpur (Sonitpur)." },
      { question: "Do you deliver flowers same day in Sonitpur?", answer: "Yes, same-day delivery is available across Sonitpur for orders placed before 3 PM." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers",
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
        { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
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
