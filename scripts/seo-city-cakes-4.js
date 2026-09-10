// Cakes Batch 4 — 15 cities:
// Srinagar, Jammu, Shimla, Mangalore, Belagavi,
// Noida, Gurugram, Ghaziabad, Prayagraj, Jabalpur,
// Gwalior, Bhilai, Cuttack, Warangal, Vijayapura

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "srinagar": {
    cityName: "Srinagar",
    metaTitle: "Cake Delivery in Srinagar | Kashmir | RedHeart",
    metaDescription: "Order cakes online in Srinagar. Same-day delivery across Srinagar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Srinagar",
    metaKeyword: "cake delivery srinagar, order cake online srinagar, birthday cake srinagar kashmir, custom cake srinagar, same day cake delivery srinagar dal lake lal chowk rajbagh jawahar nagar",
    footerContent: `
<h2>Cake Delivery in Srinagar — Paradise on Earth's Dal Lake Celebrations</h2>
<p>Srinagar — the summer capital of Jammu & Kashmir, the "Paradise on Earth," city of the iconic Dal Lake with its floating gardens (Rad), houseboats, and shikaras, and the ancient Shankaracharya and Hari Parbat forts — is a city where celebrations carry the beauty of the Kashmir Valley. From birthday parties in the upscale Rajbagh and Jawahar Nagar colonies to corporate cakes at the growing Nowpora and Zakura IT belt, from anniversary surprises for houseboat guests on Dal Lake to student birthdays near NIT Srinagar and Kashmir University — RedHeart covers all Srinagar zones: Central (Lal Chowk, Maisuma, Amira Kadal), South (Rajbagh, Jawahar Nagar, Bemina), North (Dal Gate, Nishat, Hazratbal), East (Soura, HMT, Cheshmashahi), and the Boulevard Road along Dal Lake.</p>
<p>Our Srinagar cake range: Chocolate, Black Forest, Red Velvet, Kesar (Kashmiri saffron-flavour — a local favourite!), Walnut-Honey fusion, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Srinagar, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lal Chowk, Rajbagh, Jawahar Nagar, Dal Gate, Nishat, Hazratbal, Boulevard Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kashmiri Kesar, Walnut-Honey, Chocolate, Photo Cake (Dal Lake), Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Kashmiri saffron (kesar) flavoured cakes in Srinagar?", answer: "Yes! Kashmiri saffron-infused cream cake — made with the world-famous Pampore kesar — is our Srinagar signature cake, available for same-day delivery." },
      { question: "Can I get a cake delivered to a Dal Lake houseboat in Srinagar?", answer: "Yes, anniversary and birthday cakes can be delivered to Dal Lake houseboats and Boulevard Road stays — specify the houseboat name or nearest Dal Gate landmark at checkout." },
      { question: "Can I get same-day cake delivery in Srinagar?", answer: "Yes, same-day cake delivery is available across all Srinagar areas — Lal Chowk, Rajbagh, Dal Gate, Nishat, and Hazratbal — for orders placed before 3 PM." }
    ]
  },

  "jammu": {
    cityName: "Jammu",
    metaTitle: "Cake Delivery in Jammu | City of Temples J&K | RedHeart",
    metaDescription: "Order cakes online in Jammu. Same-day delivery across Jammu. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Jammu",
    metaKeyword: "cake delivery jammu, order cake online jammu, birthday cake jammu, custom cake jammu, same day cake delivery jammu tawi river gandhi nagar rehari colony bakshi nagar",
    footerContent: `
<h2>Cake Delivery in Jammu — City of Temples, Tawi River, and Vaishno Devi Gateway's Warm Celebrations</h2>
<p>Jammu — the winter capital of Jammu & Kashmir, the "City of Temples" (with hundreds of ancient Shiva temples along the Tawi River, the Raghunath Mandir complex in the old city, and the Bahu Fort with its Kali temple), and the primary gateway to the Vaishno Devi pilgrimage at Katra — is a city of intense religious devotion and warm Dogra hospitality. From birthday parties in the upscale Gandhi Nagar to corporate cakes at the growing Jammu Industrial Estate, from Navratri celebration cakes (Jammu celebrates Navratri with enormous fervour) to anniversary surprises in Rehari Colony — RedHeart covers all Jammu zones: Central (Raghunath Bazaar, Pacca Danga, Residency Road), North (Trikuta Nagar, Bakshi Nagar, Shastri Nagar), South (Gandhi Nagar, Rehari, Old Airport Road), East (Birpur, Paloura, Channi Himmat), West (Sidhra, Nagrota, Vijaypur).</p>
<p>Our Jammu cake range: Chocolate, Black Forest, Red Velvet, Mango, Kalari-flavour fusion, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jammu, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Nagar, Trikuta Nagar, Bakshi Nagar, Rehari Colony, Shastri Nagar, Residency Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Navratri-theme Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are Navratri celebration cakes available in Jammu?", answer: "Yes, Navratri is one of Jammu's biggest festivals — celebrated with great fervour. Devi-theme and festive Navratri cakes are available for same-day delivery in Jammu." },
      { question: "Can I get same-day cake delivery in Jammu?", answer: "Yes, same-day cake delivery is available across all Jammu areas — Gandhi Nagar, Trikuta Nagar, Bakshi Nagar, and Rehari Colony — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jammu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jammu delivery." }
    ]
  },

  "shimla": {
    cityName: "Shimla",
    metaTitle: "Cake Delivery in Shimla | Queen of Hills Himachal | RedHeart",
    metaDescription: "Order cakes online in Shimla. Same-day delivery across Shimla. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Shimla",
    metaKeyword: "cake delivery shimla, order cake online shimla, birthday cake shimla, custom cake shimla, same day cake delivery shimla mall road ridge lakkar bazar sanjauli",
    footerContent: `
<h2>Cake Delivery in Shimla — Queen of the Hills, India's Former Summer Capital, and Mountain Birthday Cakes</h2>
<p>Shimla — Himachal Pradesh's capital, the "Queen of the Hills," India's British colonial summer capital (where the entire Government of India relocated every summer from 1864–1939), and a charming mountain city at 2,200 metres — is where birthday cakes can sit on a ridge with Himalayan panoramas. From birthday parties at heritage bungalows near The Mall Road to corporate cakes at the government offices, from anniversary surprises at Shimla's iconic Wildflower Hall or heritage hotels to student celebrations near Himachal Pradesh University — RedHeart covers all Shimla zones: Central (Mall Road, Ridge, Lakkar Bazar, Scandal Point), North (Sanjauli, Dhalli, Kasumpti), South (Totu, Vikas Nagar, Taradevi), East (Rampur Road, Panthaghati, Mehli), West (Chhota Shimla, Boileauganj, Jakhu).</p>
<p>Our Shimla cake range: Chocolate, Black Forest, Red Velvet, Apple-cinnamon (Shimla apples!), Honey-walnut, Photo Cakes, Fondant mountain-theme cakes. Eggless available. Same-day delivery before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shimla, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mall Road, Ridge, Sanjauli, Lakkar Bazar, Chhota Shimla, Kasumpti, Totu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shimla Apple-Cinnamon, Chocolate, Black Forest, Honey-Walnut, Mountain Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Shimla apple-flavoured cakes?", answer: "Yes! Shimla apple-cinnamon cake — made with Himachal's famous Royal Delicious apples — is our Shimla signature. Available for same-day delivery across Shimla." },
      { question: "Can I get same-day cake delivery in Shimla?", answer: "Yes, same-day cake delivery is available across Shimla — Mall Road, Ridge, Sanjauli, Lakkar Bazar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Shimla?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple-Cinnamon — are available in eggless variants for Shimla delivery." }
    ]
  },

  "mangalore": {
    cityName: "Mangalore",
    metaTitle: "Cake Delivery in Mangalore | Coastal Karnataka | RedHeart",
    metaDescription: "Order cakes online in Mangalore (Mangaluru). Same-day delivery across Mangaluru. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mangalore",
    metaKeyword: "cake delivery mangalore mangaluru, order cake online mangalore, birthday cake mangalore, custom cake mangaluru, same day cake delivery mangalore hampankatta urwa kadri bejai",
    footerContent: `
<h2>Cake Delivery in Mangalore — Coastal Karnataka's Food Paradise and Cashew Capital's Sweet Celebrations</h2>
<p>Mangalore (Mangaluru) — Karnataka's coastal metropolis, the "Cashew Capital of India" (accounting for the bulk of India's cashew nut processing), and a city famous for its Tulu and Kannada cuisine (Mangalorean fish curry, Neer Dosa, Kori Roti) — is a city of excellent food culture that extends naturally to custom celebration cakes. From birthday parties in the leafy Kadri hills colony to corporate cakes at the MUDA belt and the growing IT zone, from anniversary surprises in Kankanady's Christian community to student birthdays near NITK Surathkal — RedHeart covers all Mangalore zones: Central (Hampankatta, Bunts Hostel Road, Bendur), North (Bejai, Kadri, Attavar), South (Urwa, Kankanady, KS Rao Road), East (Balmatta, Pumpwell, Bikarnakatte), West (Kulur, Ullal, Panambur Beach area) and Surathkal.</p>
<p>Our Mangalore cake range: Chocolate, Black Forest, Red Velvet, Mango (Alphonso and Totapuri!), Butterscotch, Coconut-Cashew (local special), Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mangalore (Mangaluru), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hampankatta, Kadri, Bejai, Urwa, Kankanady, Balmatta, Surathkal, Ullal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut-Cashew, Chocolate, Mango, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have coconut or cashew-flavoured cakes in Mangalore?", answer: "Yes! Coastal Mangalore's famous cashews and coconut inspire our Coconut-Cashew cream cake — a local favourite made with Mangalorean cashews. Available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Mangalore?", answer: "Yes, same-day cake delivery is available across all Mangalore areas — Hampankatta, Kadri, Bejai, Kankanady, and Surathkal — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mangalore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mangalore delivery." }
    ]
  },

  "belagavi": {
    cityName: "Belagavi",
    metaTitle: "Cake Delivery in Belagavi | Belgaum Karnataka | RedHeart",
    metaDescription: "Order cakes online in Belagavi (Belgaum). Same-day delivery across Belagavi. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Belagavi",
    metaKeyword: "cake delivery belagavi belgaum, order cake online belagavi, birthday cake belagavi, custom cake belgaum, same day cake delivery belagavi tilakwadi club road gokak line camp",
    footerContent: `
<h2>Cake Delivery in Belagavi — North Karnataka's Sugar Belt City at the Maharashtra-Goa Tri-Border</h2>
<p>Belagavi (Belgaum) — North Karnataka's largest city, the "Sugar City" (the Belgaum district produces the highest quantity of sugarcane in Karnataka), a cantonment city with a strong military presence, and a city at the meeting point of Karnataka, Maharashtra, and Goa — is a city of diverse linguistic communities (Kannada, Marathi, and Konkani) and a vibrant, cosmopolitan culture. From birthday parties in the upscale Tilakwadi residential area to corporate cakes at the large Gokak Road industrial zone, from anniversary surprises in the lush Nehru Nagar to student birthdays near KLS Gogte Engineering College — RedHeart covers all Belagavi zones: Central (Club Road, College Road, Congress Nagar), North (Tilakwadi, Udyambag, Khanapur Road), South (Gokak Line, Belgaum-Pune Highway belt), East (Hindalga, Machhe Airport area), West (Kanbargi, Ram Nagar, Camp area).</p>
<p>Our Belagavi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Belagavi (Belgaum), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tilakwadi, Club Road, Udyambag, Nehru Nagar, Camp area, Congress Nagar, Gokak Line</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Belagavi?", answer: "Yes, same-day cake delivery is available across all Belagavi areas — Tilakwadi, Club Road, Udyambag, and Camp area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Belagavi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Belagavi delivery." },
      { question: "Do you deliver cakes to the Belagavi Cantonment area?", answer: "Yes, the Camp (Cantonment) area and surrounding military township in Belagavi are fully covered by our same-day delivery." }
    ]
  },

  "noida": {
    cityName: "Noida",
    metaTitle: "Cake Delivery in Noida | UP NCR | RedHeart",
    metaDescription: "Order cakes online in Noida. Same-day delivery across Noida & Greater Noida. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Noida",
    metaKeyword: "cake delivery noida, order cake online noida, birthday cake noida, custom cake noida, same day cake delivery noida sector 18 62 sector 137 greater noida expressway",
    footerContent: `
<h2>Cake Delivery in Noida — Delhi NCR's Tech Suburb Where IT Meets Instant Cake Delivery</h2>
<p>Noida (New Okhla Industrial Development Authority) — Uttar Pradesh's planned satellite city, the second-largest city in the Delhi NCR, and one of India's largest IT and media industry hubs (Infosys, TCS, HCL campuses; Times of India, Hindustan Times headquarters; hundreds of BPO and tech companies) — is a city of young professionals with high expectations for celebrations. From birthday parties in the high-rise apartments of Sector 137 and 143 to corporate cakes at the IT parks of Sector 62 and Sector 16A, from anniversary surprises in the residential sectors to student birthdays near Amity University — RedHeart covers all Noida zones: Sector 18 (main commercial), Sectors 25-100 (residential), Expressway sectors (Sector 100–168), Greater Noida (Alpha, Beta, Gamma, Omega sectors, Knowledge Park), and Noida Extension (Gaur City, Supertech).</p>
<p>Our Noida cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, Pinata cakes, Bomb cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Noida, Uttar Pradesh (NCR)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 18, 62, 137, 143 · Greater Noida · Noida Extension · Expressway sectors</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Pinata, Bomb Cake, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Noida?", answer: "Yes, same-day cake delivery is available across all Noida areas — Sector 18, 62, 137, Greater Noida, and Noida Extension — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Greater Noida and Noida Extension?", answer: "Yes, Greater Noida (Alpha/Beta sectors, Knowledge Park, Pari Chowk), Noida Extension (Gaur City, Supertech area), and the full Expressway belt are covered." },
      { question: "Are eggless cakes available in Noida?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Noida delivery." }
    ]
  },

  "gurugram": {
    cityName: "Gurugram",
    metaTitle: "Cake Delivery in Gurugram | Gurgaon NCR | RedHeart",
    metaDescription: "Order cakes online in Gurugram (Gurgaon). Same-day delivery across Gurugram. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Gurugram",
    metaKeyword: "cake delivery gurugram gurgaon, order cake online gurgaon, birthday cake gurugram, custom cake gurgaon, same day cake delivery gurgaon cyber city dlf sohna road new gurgaon",
    footerContent: `
<h2>Cake Delivery in Gurugram — Millennium City's Corporate Celebrations and Luxury Birthday Cakes</h2>
<p>Gurugram (Gurgaon) — Haryana's Millennium City, India's corporate capital (headquarters of hundreds of Fortune 500 companies — Google, Amazon, Microsoft, Deloitte, BCG, Nestle, and more), and a city that has grown from a sleepy suburb to a gleaming metropolis in 30 years — is where corporate cake deliveries happen by the thousand every week. From birthday parties at luxury DLF residential towers to office cake-cuttings at Cyber City's glass towers, from anniversary surprises in Sohna Road's high-rises to client appreciation cakes at Golf Course Road's premium offices — RedHeart covers all Gurugram zones: Central (Old Gurgaon, Sector 14, 17, Iffco Chowk), Cyber City / DLF (Sectors 24–29), Golf Course Road (Sectors 42–66), Sohna Road (Sectors 47–70, Vatika area), New Gurugram (Sectors 80–115, Pataudi Road), and Manesar.</p>
<p>Our Gurugram cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, Pinata cakes, Pull-me-up cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gurugram (Gurgaon), Haryana (NCR)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cyber City, DLF, Golf Course Road, Sohna Road, New Gurugram, Manesar, Sector 14–115</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Pull-me-up, Red Velvet, Fondant (premium 2-tier)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gurugram (Gurgaon)?", answer: "Yes, same-day cake delivery is available across all Gurugram areas — Cyber City, DLF, Golf Course Road, Sohna Road, and New Gurugram — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Cyber City / DLF office towers in Gurgaon?", answer: "Yes, Cyber City, DLF Cyber Hub, and all of Gurugram's Sector 24–29 corporate belt are fully covered for same-day and scheduled cake delivery." },
      { question: "Are eggless cakes available in Gurugram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gurugram delivery." }
    ]
  },

  "ghaziabad": {
    cityName: "Ghaziabad",
    metaTitle: "Cake Delivery in Ghaziabad | UP NCR | RedHeart",
    metaDescription: "Order cakes online in Ghaziabad. Same-day delivery across Ghaziabad. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Ghaziabad",
    metaKeyword: "cake delivery ghaziabad, order cake online ghaziabad, birthday cake ghaziabad, custom cake ghaziabad, same day cake delivery ghaziabad indirapuram raj nagar extension vaishali",
    footerContent: `
<h2>Cake Delivery in Ghaziabad — Fastest-Growing NCR City, Gateway of Uttar Pradesh</h2>
<p>Ghaziabad — Uttar Pradesh's most urbanised city and NCR's western gateway, a city of 2.5 million — is one of India's fastest-growing urban centres, transforming from an industrial city to a modern residential metropolis. From birthday parties at the premium high-rises of Indirapuram to corporate cakes at Mohan Nagar's industrial belt, from anniversary surprises in the growing Raj Nagar Extension to student birthdays near ABES Engineering College — RedHeart covers all Ghaziabad zones: Central (Lal Kuan, Navyug Market, Ghaziabad Station), East (Vaishali, Kaushambi, Vasundhara), North (Raj Nagar, Rajnagar Extension, Govindpuram), South (Indirapuram, Crossings Republik, Abhay Khand), West (Mohan Nagar, Sahibabad, GT Road).</p>
<p>Our Ghaziabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghaziabad, Uttar Pradesh (NCR)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indirapuram, Vaishali, Raj Nagar Ext., Kaushambi, Vasundhara, Crossings Republik</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Pinata, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ghaziabad?", answer: "Yes, same-day cake delivery is available across all Ghaziabad areas — Indirapuram, Vaishali, Raj Nagar Extension, Kaushambi, and Crossings Republik — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Indirapuram and Crossings Republik?", answer: "Yes, Indirapuram, Crossings Republik (Abhay Khand), and all South Ghaziabad's fastest-growing residential zones are covered." },
      { question: "Are eggless cakes available in Ghaziabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ghaziabad delivery." }
    ]
  },

  "prayagraj": {
    cityName: "Prayagraj",
    metaTitle: "Cake Delivery in Prayagraj | Allahabad UP | RedHeart",
    metaDescription: "Order cakes online in Prayagraj (Allahabad). Same-day delivery across Prayagraj. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Prayagraj",
    metaKeyword: "cake delivery prayagraj allahabad, order cake online prayagraj, birthday cake prayagraj, custom cake allahabad, same day cake delivery prayagraj civil lines george town ashok nagar",
    footerContent: `
<h2>Cake Delivery in Prayagraj — Triveni Sangam City of Kumbh, Where Ancient Meets Modern Celebrations</h2>
<p>Prayagraj (Allahabad) — Uttar Pradesh's judicial capital, city of the Triveni Sangam (the sacred confluence of Ganga, Yamuna, and the mythical Saraswati), host of the Kumbh Mela (2019 Prayagraj Kumbh drew 240 million visitors — the largest human gathering in history), and the city of India's freedom movement (Motilal Nehru, Jawaharlal Nehru, Madan Mohan Malaviya) — is a city of deep historical identity and a significant educational hub (Allahabad University, IIT Allahabad, NLU). From birthday parties in the elegant Civil Lines bungalows (Prayagraj's most prestigious address, lined with colonial heritage homes) to corporate cakes at the High Court complex, from anniversary surprises in the student-dense George Town area to family celebrations in Ashok Nagar — RedHeart covers all Prayagraj zones: Central (Civil Lines, MG Marg, Hastings Road), North (George Town, Tagore Town, Rajapur), South (Naini, Jhunsi, Phaphamau), East (Colonelganj, Kydganj, Ashok Nagar), West (Kareli, Mumfordganj, Bamrauli).</p>
<p>Our Prayagraj cake range: Chocolate, Black Forest, Pineapple, Mango, Red Velvet, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Prayagraj (Allahabad), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, George Town, Tagore Town, Ashok Nagar, MG Marg, Naini, Kareli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Pineapple, Black Forest, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Prayagraj?", answer: "Yes, same-day cake delivery is available across all Prayagraj areas — Civil Lines, George Town, Tagore Town, and Ashok Nagar — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to IIT Prayagraj and Allahabad University areas?", answer: "Yes, the Naini (IIT Allahabad campus vicinity), Rajpur Road, and the Tagore Town-George Town student belt are fully covered." },
      { question: "Are eggless cakes available in Prayagraj?", answer: "Yes, all flavours — Chocolate, Black Forest, Pineapple, Red Velvet — are available in eggless variants for Prayagraj delivery." }
    ]
  },

  "jabalpur": {
    cityName: "Jabalpur",
    metaTitle: "Cake Delivery in Jabalpur | Marble City MP | RedHeart",
    metaDescription: "Order cakes online in Jabalpur. Same-day delivery across Jabalpur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Jabalpur",
    metaKeyword: "cake delivery jabalpur, order cake online jabalpur, birthday cake jabalpur, custom cake jabalpur, same day cake delivery jabalpur napier town wright town adhartal gorakhpur",
    footerContent: `
<h2>Cake Delivery in Jabalpur — Marble City's Bhedaghat Gorge and Madhya Pradesh's Defence Hub</h2>
<p>Jabalpur — Madhya Pradesh's second-largest city, the "Marble City" (the Bhedaghat marble gorge on the Narmada River — where white marble cliffs rise 30 metres from the river and moonlight turns the gorge silver — is one of India's most spectacular natural sites), India's largest ordnance factory complex (the Ordnance Factory Board has multiple huge defence manufacturing plants in Jabalpur), and the headquarters of the High Court of Madhya Pradesh — is a city of government, defence, and education culture. From birthday parties in the bungalows of Napier Town (Jabalpur's British-era heritage colony) to corporate cakes at the Ordnance factories, from anniversary surprises in Wright Town to student birthdays near Rani Durgavati University — RedHeart covers all Jabalpur zones: Central (Napier Town, MG Road, Sadar), North (Wright Town, Gorakhpur, Civil Lines), South (Adhartal, Vijay Nagar, Bargi Hills), East (Ranjhi, Model Road, Cantt), West (Katni Road, Sihora, Majholi).</p>
<p>Our Jabalpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jabalpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Napier Town, Wright Town, Adhartal, Gorakhpur, Civil Lines, Vijay Nagar, Ranjhi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jabalpur?", answer: "Yes, same-day cake delivery is available across all Jabalpur areas — Napier Town, Wright Town, Adhartal, Gorakhpur, and Civil Lines — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jabalpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jabalpur delivery." },
      { question: "Do you deliver cakes to the Ordnance Factory township in Jabalpur?", answer: "Yes, the Ordnance Factory Board residential townships and Cantt area in Jabalpur are covered by our same-day delivery." }
    ]
  },

  "gwalior": {
    cityName: "Gwalior",
    metaTitle: "Cake Delivery in Gwalior | Fort City MP | RedHeart",
    metaDescription: "Order cakes online in Gwalior. Same-day delivery across Gwalior. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Gwalior",
    metaKeyword: "cake delivery gwalior, order cake online gwalior, birthday cake gwalior, custom cake gwalior, same day cake delivery gwalior city centre morar lashkar hazira tansen",
    footerContent: `
<h2>Cake Delivery in Gwalior — Tansen's Musical City and the Impregnable Rock Fort's Celebrations</h2>
<p>Gwalior — the "City of Music" (birthplace of Tansen, Emperor Akbar's legendary court musician and founder of the Gwalior gharana — the oldest and most influential classical music tradition in North India), home to the magnificent Gwalior Fort (a hilltop citadel dating to the 6th century, described by Babur as "the pearl among the fortresses of Hind"), and a major industrial city — is where celebration culture runs as deep as its musical heritage. From birthday parties in the upscale City Centre area to corporate cakes at the industrial Banganga and ITI areas, from anniversary surprises near the fort environs to student birthdays near Jiwaji University — RedHeart covers all Gwalior zones: Central (Lashkar, MG Road, Hazira), North (City Centre, MLN Road, Morar Cantt), South (Gole Ka Mandir, Murar, Bhind Road), East (Thatipur, Jankiganj, Ranipur), West (Bahodapur, Maharajpura, Bhopal Road).</p>
<p>Our Gwalior cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gwalior, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">City Centre, Lashkar, Morar, Hazira, MLN Road, Thatipur, Ranipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Gwalior Fort Fondant, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gwalior?", answer: "Yes, same-day cake delivery is available across all Gwalior areas — City Centre, Lashkar, Morar, Hazira, and Thatipur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gwalior?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gwalior delivery." },
      { question: "Do you make Tansen or Gwalior Fort-theme cakes?", answer: "Yes, custom fondant cakes with the Gwalior Fort or music-note Tansen themes are available as special Gwalior celebration designs." }
    ]
  },

  "bhilai": {
    cityName: "Bhilai",
    metaTitle: "Cake Delivery in Bhilai | Steel City Chhattisgarh | RedHeart",
    metaDescription: "Order cakes online in Bhilai. Same-day delivery across Bhilai and Durg. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bhilai",
    metaKeyword: "cake delivery bhilai, order cake online bhilai, birthday cake bhilai, custom cake bhilai durg, same day cake delivery bhilai steel plant township sector civil lines",
    footerContent: `
<h2>Cake Delivery in Bhilai — Steel City of Chhattisgarh's Soviet-Era Township Celebrations</h2>
<p>Bhilai — Chhattisgarh's most planned and prosperous steel city, home to the Bhilai Steel Plant (BSP — one of India's largest integrated steel plants, built with Soviet assistance in 1959 and the pride of Chhattisgarh's industrial identity), and twin city to Durg — is a city of urban order, educated workforce, and a strong culture of celebrations in its vast plant township sectors. From birthday parties in the well-planned Sector 1 to corporate cakes at the BSP administrative offices, from anniversary surprises in the Civil Lines area to student birthdays near CSVTU campus — RedHeart covers the Bhilai-Durg twin city: Bhilai (Sector 1–10, Supela, Maudhapara, Steel Plant township), Durg (Civil Lines, Nehru Nagar, Smriti Nagar, Padmanabhapur), and Risali and Charoda.</p>
<p>Our Bhilai cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhilai, Chhattisgarh (incl. Durg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 1–10, Supela, Maudhapara, Durg Civil Lines, Nehru Nagar, Smriti Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhilai?", answer: "Yes, same-day cake delivery is available across Bhilai (all Sectors, Supela, Maudhapara) and Durg (Civil Lines, Nehru Nagar) for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the Bhilai Steel Plant township?", answer: "Yes, all Bhilai Steel Plant residential sectors (Sector 1 through 10) and the plant township are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Bhilai?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhilai-Durg delivery." }
    ]
  },

  "cuttack": {
    cityName: "Cuttack",
    metaTitle: "Cake Delivery in Cuttack | Silver City Odisha | RedHeart",
    metaDescription: "Order cakes online in Cuttack. Same-day delivery across Cuttack. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Cuttack",
    metaKeyword: "cake delivery cuttack, order cake online cuttack, birthday cake cuttack, custom cake cuttack, same day cake delivery cuttack choudhury bazar chauliaganj badambadi cantonment",
    footerContent: `
<h2>Cake Delivery in Cuttack — Silver City's Tarakasi Filigree Art and Mahanadi Delta Celebrations</h2>
<p>Cuttack — Odisha's former capital (capital for 900 years until 1948), the "Silver City" (world-renowned for Tarakasi — Odisha's unique silver filigree jewellery art, a GI-tagged craft where thin silver wires are woven into delicate ornaments and decorations), and Odisha's largest industrial city — is a city of cultural pride and a warm community celebration spirit. From birthday parties in the leafy Cantonment area to corporate cakes at the CDA (Cuttack Development Authority) planned township, from Durga Puja celebration cakes (Cuttack's Baliyatra and Durga Puja are celebrated with immense scale) to anniversary surprises in Chauliaganj — RedHeart covers all Cuttack zones: Central (Choudhury Bazar, Badambadi, Link Road), North (Chauliaganj, Old Town, Kathajodi area), South (College Square, Cantonment, Jobra), East (CDA sector, Bidanasi, Jagatpur), West (Markat Nagar, Madhupatna, Malgodown).</p>
<p>Our Cuttack cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Silver Filigree-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuttack, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Choudhury Bazar, Chauliaganj, Badambadi, CDA, Cantonment, College Square, Bidanasi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Silver Filigree Fondant, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Cuttack?", answer: "Yes, same-day cake delivery is available across all Cuttack areas — Choudhury Bazar, Chauliaganj, Badambadi, CDA, and Cantonment — for orders placed before 3 PM." },
      { question: "Are Durga Puja celebration cakes available in Cuttack?", answer: "Yes, Cuttack Durga Puja (famous for its silver-decorated Durga idols) is the biggest festival here. Custom Devi celebration cakes are available for same-day delivery." },
      { question: "Are eggless cakes available in Cuttack?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Cuttack delivery." }
    ]
  },

  "warangal": {
    cityName: "Warangal",
    metaTitle: "Cake Delivery in Warangal | Kakatiya City Telangana | RedHeart",
    metaDescription: "Order cakes online in Warangal. Same-day delivery across Warangal. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Warangal",
    metaKeyword: "cake delivery warangal, order cake online warangal, birthday cake warangal, custom cake warangal, same day cake delivery warangal hanamkonda kazipet nit balasamudram",
    footerContent: `
<h2>Cake Delivery in Warangal — Kakatiya Fort City, Thousand Pillar Temple, and Telangana's Second Largest City</h2>
<p>Warangal — Telangana's second-largest city and the medieval Kakatiya dynasty's capital (12th–14th century CE), home to the UNESCO tentative-listed Kakatiya Rudreshwara (Ramappa) Temple (recently inscribed as UNESCO World Heritage, 2021 — India's 39th), the Thousand Pillar Temple, and the iconic Warangal Fort gateway arches — is a city of extraordinary heritage and a growing modern identity. From birthday parties in the Hanamkonda residential belt to corporate cakes at NIT Warangal (one of India's top NITs), from anniversary surprises in the leafy Balasamudram area to student birthdays near Kakatiya University — RedHeart covers all Warangal zones: Central (Station Road, Subedari, Hanamkonda), North (Kazipet, Naimnagar, Mulug Road), South (NIT campus area, Balasamudram, Nakkalgutta), East (Hanumakonda, Desaipet, Hasanparthy), West (Khila Warangal, Pratap Nagar, Nakkalagutta).</p>
<p>Our Warangal cake range: Chocolate, Black Forest, Butterscotch, Mango, Red Velvet, Photo Cakes, Kakatiya-theme Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Warangal, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanamkonda, Kazipet, NIT area, Balasamudram, Subedari, Desaipet, Hasanparthy</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Butterscotch, Kakatiya Fondant theme, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Warangal?", answer: "Yes, same-day cake delivery is available across all Warangal areas — Hanamkonda, Kazipet, NIT campus, and Balasamudram — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Warangal?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet — are available in eggless variants for Warangal delivery." },
      { question: "Do you deliver cakes to NIT Warangal campus?", answer: "Yes, NIT Warangal campus area and the Balasamudram residential belt are covered by our same-day delivery in Warangal." }
    ]
  },

  "vijayapura": {
    cityName: "Vijayapura",
    metaTitle: "Cake Delivery in Vijayapura | Bijapur Karnataka | RedHeart",
    metaDescription: "Order cakes online in Vijayapura (Bijapur). Same-day delivery across Vijayapura. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vijayapura",
    metaKeyword: "cake delivery vijayapura bijapur, order cake online bijapur, birthday cake vijayapura, custom cake bijapur, same day cake delivery vijayapura gol gumbaz ibrahim rauza",
    footerContent: `
<h2>Cake Delivery in Vijayapura — Bijapur's Adil Shahi Sultanate Heritage and the World's Second-Largest Dome</h2>
<p>Vijayapura (Bijapur) — North Karnataka's historical city, once the capital of the Adil Shahi Sultanate (a powerful Deccan Sultanate that ruled 1489–1686 CE), and home to the magnificent Gol Gumbaz — with its whispering gallery and the world's second-largest dome (surpassed only by St. Peter's Basilica) — is a city where Sultanate Islamic heritage and Kannada Hindu culture coexist in remarkable harmony. From birthday parties in the expanding residential belt of Solapur Road to corporate cakes at the large government offices, from anniversary surprises near the heritage gardens surrounding Gol Gumbaz to student birthdays near BLDEA University — RedHeart covers all Vijayapura zones: Central (MG Road, Station Road, Court Circle), North (Solapur Road, Nehru Nagar, Gol Gumbaz area), South (Basveshwar Colony, Torvi, Ainapur Road), East (KIADB, Sindagi Road, Kolhar Road), West (Horti, Indi Road, Tikota area).</p>
<p>Our Vijayapura cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Gol-Gumbaz-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijayapura (Bijapur), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">MG Road, Station Road, Solapur Road, Gol Gumbaz area, Nehru Nagar, Basveshwar Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gol Gumbaz Fondant Photo, Black Forest, Red Velvet, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vijayapura (Bijapur)?", answer: "Yes, same-day cake delivery is available across all Vijayapura areas — MG Road, Solapur Road, Gol Gumbaz area, and Nehru Nagar — for orders placed before 3 PM." },
      { question: "Do you make Gol Gumbaz-theme cakes in Vijayapura?", answer: "Yes, custom fondant cakes with the iconic Gol Gumbaz dome design are a unique Vijayapura specialty for heritage-themed birthday cakes." },
      { question: "Are eggless cakes available in Vijayapura?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Vijayapura delivery." }
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
