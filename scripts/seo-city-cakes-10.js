// Cakes Batch 10 — 15 cities:
// Haryana: Panipat, Karnal, Ambala, Yamunanagar (4)
// Uttarakhand: Haridwar, Rishikesh, Haldwani, Roorkee (4)
// Punjab: Bathinda, Pathankot (2)
// Rajasthan: Bharatpur, Chittorgarh (2)
// Assam: Jorhat, Nagaon (2)
// UP: Mathura (1)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "panipat": {
    cityName: "Panipat",
    metaTitle: "Cake Delivery in Panipat | City of Weavers Haryana | RedHeart",
    metaDescription: "Order cakes online in Panipat. Same-day delivery across Panipat. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Panipat",
    metaKeyword: "cake delivery panipat, order cake online panipat, birthday cake panipat, custom cake panipat, same day cake delivery panipat model town sector 11 civil lines sanoli road GT road",
    footerContent: `
<h2>Cake Delivery in Panipat — Three Battles That Decided India's Fate, City of Weavers, and Haryana's Industrial Hub</h2>
<p>Panipat — a city of extraordinary historical significance, the site of three decisive battles that changed Indian history (the First Battle of Panipat in 1526 when Babur defeated Ibrahim Lodi and founded the Mughal Empire; the Second in 1556 when Akbar's regent Bairam Khan defeated Hemu Vikramaditya; the Third in 1761 when the Afghan Ahmad Shah Durrani crushed the Maratha Confederacy at the peak of their power), today India's "Cast City" (largest cast fabric recycling industry in Asia, exporting recycled textiles globally), the "City of Weavers" (centuries-old weaving tradition, handloom fabrics, and blankets), and a major industrial city on the Delhi-Haryana-Chandigarh corridor — is a city of layered history and modern commerce. From birthday parties in the upscale Model Town to corporate cakes at the large Panipat Oil Refinery and textile units, from anniversary surprises in the Sector 11 residential zone to student birthdays near the ITI campus — RedHeart covers all Panipat zones: Central (Civil Lines, Station Road, Old City), North (Model Town, Sector 11–13, Sanoli Road), South (GT Road, Sewah, Israna Road), East (Karnal Road, Madlauda), West (Rohtak Road, Sanauli, Bapoli).</p>
<p>Our Panipat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Panipat Battle-theme historical cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panipat, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, Civil Lines, Sector 11–13, Sanoli Road, GT Road, Station Road, Karnal Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Panipat Battle Fondant, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Panipat?", answer: "Yes, same-day cake delivery is available across all Panipat areas — Model Town, Civil Lines, Sector 11–13, Sanoli Road, and GT Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Panipat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Panipat delivery." },
      { question: "Do you deliver midnight cakes in Panipat?", answer: "Yes, midnight birthday cake delivery is available across Panipat's central and residential zones." }
    ]
  },

  "karnal": {
    cityName: "Karnal",
    metaTitle: "Cake Delivery in Karnal | Haryana's Rice Bowl | RedHeart",
    metaDescription: "Order cakes online in Karnal. Same-day delivery across Karnal. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Karnal",
    metaKeyword: "cake delivery karnal, order cake online karnal, birthday cake karnal, custom cake karnal, same day cake delivery karnal sector 6 12 karnal cantt model town karna lake",
    footerContent: `
<h2>Cake Delivery in Karnal — Haryana's Rice Bowl, Karn's City from the Mahabharata, and NDRI's Dairy Research Capital</h2>
<p>Karnal — Haryana's city on the Upper Ganges Canal, legendary birthplace of Karna (the great warrior-hero of the Mahabharata, who was said to have held his court here — "Karnalaya"), home to the National Dairy Research Institute (NDRI — India's premier dairy science institution, which gave India's milk-revolution its scientific foundation and where India's first test-tube buffalo calf was born), famous for its basmati rice (Karnal's research stations developed many high-yielding aromatic basmati varieties grown across North India), and a major city on the Delhi-Ambala NH-44 highway — is a city of agricultural innovation and mythological heritage. From birthday parties in the upscale Sector 12 residential areas to corporate cakes at the NDRI campus, from anniversary surprises near the Karna Lake (a scenic reservoir) to student birthdays near the large medical colleges — RedHeart covers all Karnal zones: Central (Civil Lines, Station Road, Kachehri Chowk), North (Sector 6, 12, Model Town), South (Karna Lake area, Sector 4, Nilokheri Road), East (Tarawari Road, GT Road, Bastara), West (Gharaunda Road, Assandh Road, Nissing).</p>
<p>Our Karnal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karnal, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Sector 6, Sector 12, Model Town, Karna Lake area, Station Road, NDRI</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karnal?", answer: "Yes, same-day cake delivery is available across all Karnal areas — Civil Lines, Sector 6, Sector 12, Model Town, and Karna Lake area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Karnal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Karnal delivery." },
      { question: "Do you deliver cakes to NDRI (National Dairy Research Institute) campus area in Karnal?", answer: "Yes, the NDRI campus area and surrounding residential zones in Karnal are covered by our same-day delivery." }
    ]
  },

  "ambala": {
    cityName: "Ambala",
    metaTitle: "Cake Delivery in Ambala | Science City Haryana | RedHeart",
    metaDescription: "Order cakes online in Ambala. Same-day delivery across Ambala. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Ambala",
    metaKeyword: "cake delivery ambala, order cake online ambala, birthday cake ambala, custom cake ambala, same day cake delivery ambala cantt city baldev nagar nicholson road model town",
    footerContent: `
<h2>Cake Delivery in Ambala — India's Scientific Instrument Hub, Tri-Forces City, and Punjab-Haryana Gate</h2>
<p>Ambala — Haryana's twin city (Ambala Cantonment + Ambala City), the world's "Scientific Instruments Capital" (Ambala manufactures over 50% of India's scientific, optical, and laboratory instruments — including microscopes, medical diagnostic instruments, and educational science equipment — supplying schools and laboratories across India and exporting globally), home to major Indian Air Force, Army, and BSF establishments (making it one of India's most significant tri-service military cities), and the junction city of five National Highways (NH-44, NH-7, NH-152A, NH-344, NH-64) — is a city of strategic importance and specialized manufacturing. Whether you're celebrating birthdays at the Ambala Cantt colony, sending anniversary cakes to the military residential complexes, or ordering corporate cakes near the large government offices — RedHeart covers all Ambala zones: Central (Nicholson Road, Mall Road, City Centre), North (Baldev Nagar, Model Town, Ambala Cantt), South (Patiala Road, Saha, Shahabad Road), East (Jagadhri Road, Barara), West (Narayangarh Road, Shehzadpur).</p>
<p>Our Ambala cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambala, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambala Cantt, Ambala City, Baldev Nagar, Model Town, Nicholson Road, Mall Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you deliver cakes to both Ambala Cantt and Ambala City?", answer: "Yes! Both Ambala Cantonment and Ambala City are covered — including military residential colonies, Nicholson Road, Baldev Nagar, and all commercial areas — under same-day delivery." },
      { question: "Can I get same-day cake delivery in Ambala?", answer: "Yes, same-day cake delivery is available across all Ambala areas — Ambala Cantt, Ambala City, Model Town, and Baldev Nagar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ambala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ambala delivery." }
    ]
  },

  "yamunanagar": {
    cityName: "Yamunanagar",
    metaTitle: "Cake Delivery in Yamunanagar | Paper City Haryana | RedHeart",
    metaDescription: "Order cakes online in Yamunanagar. Same-day delivery across Yamunanagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Yamunanagar",
    metaKeyword: "cake delivery yamunanagar, order cake online yamunanagar, birthday cake yamunanagar, custom cake yamunanagar jagadhri, same day cake delivery yamunanagar model town sector 17",
    footerContent: `
<h2>Cake Delivery in Yamunanagar — India's Paper City, Brass Utensil Hub, and Yamuna River City</h2>
<p>Yamunanagar — a twin city with Jagadhri on the banks of the Yamuna river, India's "Paper City" (Yamunanagar has one of India's largest concentrations of paper and plywood mills — Star Paper Mills, Birla Group paper units, and dozens of other mills line the industrial belt), India's "Brass Utensil Capital" (Jagadhri's centuries-old brassware and decorative metal craft is exported worldwide — Jagadhri brass is a GI-tagged product), and famous for sugar production (Yamunanagar Sugar Mills supply a large share of Haryana's sugar) — is a city of specialized industrial heritage. From birthday parties in the Model Town residential belt to corporate cakes at the large paper mills, from anniversary surprises in Sector 17 to student birthdays near the Dav College complex — RedHeart covers all Yamunanagar zones: Central (Model Town, Sector 17, Station Road), North (Radaur Road, Chhachhrauli), South (Jagadhri, Bilaspur Road, Ambala Road), East (Yamuna Nagar Bridge area, Sadhaura), West (Rupar Road, Damla, Naharpur).</p>
<p>Our Yamunanagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yamunanagar, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, Sector 17, Jagadhri, Station Road, Radaur Road, Bilaspur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you deliver cakes to both Yamunanagar and Jagadhri?", answer: "Yes! Both Yamunanagar and its twin city Jagadhri are covered — Model Town, Sector 17, Jagadhri main market, and all residential areas — under same-day delivery." },
      { question: "Can I get same-day cake delivery in Yamunanagar?", answer: "Yes, same-day cake delivery is available across all Yamunanagar areas — Model Town, Sector 17, Jagadhri, and Radaur Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Yamunanagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Yamunanagar delivery." }
    ]
  },

  "haridwar": {
    cityName: "Haridwar",
    metaTitle: "Cake Delivery in Haridwar | Gateway to Gods Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Haridwar. Same-day delivery across Haridwar. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Haridwar",
    metaKeyword: "cake delivery haridwar, order cake online haridwar, birthday cake haridwar eggless, custom cake haridwar, same day cake delivery haridwar har ki pauri jwalapur ranipur shivalik nagar",
    footerContent: `
<h2>Cake Delivery in Haridwar — Gateway to the Gods, Kumbh Mela Host, and Uttarakhand's Holiest City</h2>
<p>Haridwar — one of the Seven Sacred Cities of Hinduism ("Hari-dwar" — the Gateway of Vishnu/God), where the Ganges descends from the Himalayas onto the plains, home to Har Ki Pauri (the most sacred ghat in Haridwar — the evening Ganga Aarti here is one of India's most spiritually spectacular sights, attracting thousands daily), host of the Kumbh Mela every 12 years (one of the world's largest human gatherings), home to the Shantikunj Gayatri Parivar headquarters (one of India's most influential spiritual movements), and a major centre of Ayurveda and yoga — is one of India's most sacred cities. All our Haridwar cakes are eggless and Sattvic (Pure Veg) — from birthday parties in the modern Shivalik Nagar to corporate cakes at the Haridwar SIDCUL (Integrated Industrial Estate), from anniversary surprises near the Ganga canal to Raksha Bandhan cakes near the ashram belt — RedHeart covers all Haridwar zones: Central (Har Ki Pauri, Station Road, Upper Road), North (Rishikesh Road, Jwalapur, Jwalapur Road), South (Ranipur More, Shivalik Nagar, Haridwar Ring Road), East (SIDCUL Industrial Estate, Bahadrabad), West (Bhimgoda Canal area, Kankhul, Neel Dhara).</p>
<p>Our Haridwar cake range: All eggless and Sattvic — Chocolate, Black Forest, Red Velvet, Mango, Kesar-Milk, Photo Cakes, Fondant Ganga Aarti-theme special cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haridwar, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Har Ki Pauri, Station Road, Ranipur, Shivalik Nagar, Jwalapur, SIDCUL, Bahadrabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg / Sattvic)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Milk, Chocolate, Photo Cake, Ganga Aarti Fondant, Black Forest (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless and Sattvic in Haridwar?", answer: "Yes! All our Haridwar cakes are 100% eggless and Pure Veg (Sattvic) — no eggs, no meat products — suitable for Haridwar's sacred environment and the many pilgrims and ashram residents in the city." },
      { question: "Can I get same-day eggless cake delivery in Haridwar?", answer: "Yes, same-day eggless cake delivery is available across all Haridwar areas — Har Ki Pauri, Station Road, Shivalik Nagar, Ranipur, Jwalapur, and SIDCUL — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the Har Ki Pauri and ashram belt in Haridwar?", answer: "Yes, the Har Ki Pauri area, nearby ghats, and the ashram residential belt along the Ganga are covered by our same-day delivery in Haridwar." }
    ]
  },

  "rishikesh": {
    cityName: "Rishikesh",
    metaTitle: "Cake Delivery in Rishikesh | Yoga Capital Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Rishikesh. Same-day delivery across Rishikesh. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Rishikesh",
    metaKeyword: "cake delivery rishikesh, order cake online rishikesh, birthday cake rishikesh eggless, custom cake rishikesh, same day cake delivery rishikesh laxman jhula muni ki reti tapovan ram jhula",
    footerContent: `
<h2>Cake Delivery in Rishikesh — World Yoga Capital, Adventure Sports Hub, and Ganges' Himalayan Gateway</h2>
<p>Rishikesh — declared "Yoga Capital of the World" by the United Nations (the International Yoga Festival here draws practitioners from 100+ countries), the departure point for the Char Dham Yatra (pilgrimage to Kedarnath, Badrinath, Gangotri, and Yamunotri — millions pass through Rishikesh annually), India's adventure sports capital (Rishikesh's Ganges stretch is the premier white-water rafting destination in Asia — the class 3–5 rapids between Shivpuri and Rishikesh attract adventure tourists from around the world), and home to the Beatles Ashram (Maharishi Mahesh Yogi's Chaurasi Kutia — where the Beatles wrote most of the White Album in 1968 — now a heritage site) — is one of India's most internationally known spiritual and adventure cities. All our Rishikesh cakes are eggless and Pure Veg — from birthday cakes in Tapovan's international residential belt to studio cakes at the large yoga schools, from anniversary surprises near the Laxman Jhula bridge to adventure camp celebration cakes at Shivpuri — RedHeart covers Rishikesh, Muni Ki Reti, Tapovan, Ram Jhula area, Laxman Jhula, Shivpuri, and Jonk.</p>
<p>Our Rishikesh cake range: All eggless — Chocolate, Black Forest, Red Velvet, Mango, Kesar-Milk, Herbal-Honey (inspired by local Himalayan honey), Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rishikesh, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Laxman Jhula, Ram Jhula, Muni Ki Reti, Tapovan, Shivpuri, Main Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Milk, Herbal-Honey, Chocolate, Photo Cake, Black Forest (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Rishikesh?", answer: "Yes! All our Rishikesh cakes are 100% eggless and Pure Veg — suitable for Rishikesh's Sattvic food culture, yoga ashrams, and international vegan community." },
      { question: "Can I get same-day eggless cake delivery in Rishikesh?", answer: "Yes, same-day eggless cake delivery is available across all Rishikesh areas — Laxman Jhula, Ram Jhula, Muni Ki Reti, Tapovan, and Shivpuri — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to yoga ashrams and adventure camps in Rishikesh?", answer: "Yes, yoga school campuses in Tapovan and Muni Ki Reti, and the adventure camp areas near Shivpuri, are all covered under our same-day Rishikesh delivery." }
    ]
  },

  "haldwani": {
    cityName: "Haldwani",
    metaTitle: "Cake Delivery in Haldwani | Gateway to Kumaon Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Haldwani. Same-day delivery across Haldwani. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Haldwani",
    metaKeyword: "cake delivery haldwani, order cake online haldwani, birthday cake haldwani, custom cake haldwani, same day cake delivery haldwani kathgodam banbhoolpura niranjanpur rampur road",
    footerContent: `
<h2>Cake Delivery in Haldwani — Gateway to Kumaon, Nainital's Commercial Hub, and Uttarakhand's Terai City</h2>
<p>Haldwani — the largest city in Uttarakhand's Kumaon division (larger than Nainital, Almora, or Pithoragarh), the commercial gateway to the Kumaon hills (the railhead at Kathgodam — 5 km from Haldwani — is the terminus of the Haldwani-Delhi rail line, and all hill-bound travellers pass through Haldwani), a city serving as the commercial hub for Nainital district and the entire Kumaon region's daily needs (wholesale markets, hospitals, colleges, government offices all concentrated here), and known for the Gaula River running through its eastern boundary — is a city of transit-point importance and growing residential significance. From birthday parties in the modern Niranjanpur colony to corporate cakes at the large Haldwani mandi complex, from anniversary surprises near the Kathgodam Railway Station to student birthdays near the Kumaon University campus — RedHeart covers all Haldwani zones: Central (Banbhoolpura, Haldwani Main Market, Station Road), North (Niranjanpur, Mall Road, Lal Kurti), South (Kathgodam, Rampur Road, Nainital Road), East (Gaula River area, Lalkuan), West (Bajpur Road, Rudrapur Road, Kichha Road).</p>
<p>Our Haldwani cake range: Chocolate, Black Forest, Red Velvet, Mango (Kumaon Langra!), Butterscotch, Photo Cakes, Fondant hill-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haldwani, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banbhoolpura, Niranjanpur, Mall Road, Kathgodam, Rampur Road, Nainital Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Mango (Kumaon)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Haldwani?", answer: "Yes, same-day cake delivery is available across all Haldwani areas — Banbhoolpura, Niranjanpur, Mall Road, Kathgodam, and Rampur Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Haldwani?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Haldwani delivery." },
      { question: "Do you deliver cakes to Kathgodam (Haldwani Railway Station area)?", answer: "Yes, the Kathgodam Railway Station area and surrounding Lalkuan zone are covered by our Haldwani same-day delivery." }
    ]
  },

  "roorkee": {
    cityName: "Roorkee",
    metaTitle: "Cake Delivery in Roorkee | IIT Roorkee City Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Roorkee. Same-day delivery across Roorkee. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Roorkee",
    metaKeyword: "cake delivery roorkee, order cake online roorkee, birthday cake roorkee, custom cake roorkee, same day cake delivery roorkee IIT civil lines engineering college road haridwar road",
    footerContent: `
<h2>Cake Delivery in Roorkee — IIT Roorkee's City, India's Oldest Technical University Town, and Ganga Canal Heritage City</h2>
<p>Roorkee — home to the Indian Institute of Technology Roorkee (IIT Roorkee — India's oldest technical institution, founded in 1847 as Thomason College of Civil Engineering, the first engineering college in Asia, which built and managed the Ganga Canal — the longest irrigation canal in the world at the time of construction in 1854 — and today one of India's premier research universities with 10,000+ students), a city with a large engineering and academic population, significant military engineering establishments (the Army's Corps of Engineers centre is based here), and an Ayurvedic research presence (the Patanjali research campus is in the greater Haridwar-Roorkee belt) — is a city of institutional significance and rapid residential growth. From birthday parties at IIT campus residences to student batch cakes in the Engineering College Road belt, from corporate cakes at the Army engineering units to anniversary surprises in the Civil Lines area — RedHeart covers all Roorkee zones: Central (Civil Lines, Deoband Road, Station Road), North (IIT Campus area, Haridwar Road), South (Engineering College Road, Libheri Road), East (Meerut Road, Muzaffarnagar Road), West (Najibabad Road, Manglaur).</p>
<p>Our Roorkee cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant IIT/engineering-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roorkee, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">IIT Campus area, Civil Lines, Engineering College Road, Station Road, Haridwar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, IIT Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery to IIT Roorkee campus?", answer: "Yes, IIT Roorkee's residential campus, student hostels, and faculty quarters are covered by our same-day cake delivery in Roorkee." },
      { question: "Are eggless cakes available in Roorkee?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Roorkee delivery." },
      { question: "Do you have IIT-theme fondant cakes in Roorkee?", answer: "Yes! Engineering and IIT-graduation theme fondant cakes are popular in Roorkee — perfect for convocation, placements, and academic milestone celebrations. Available for same-day delivery." }
    ]
  },

  "bathinda": {
    cityName: "Bathinda",
    metaTitle: "Cake Delivery in Bathinda | Steel City of Punjab | RedHeart",
    metaDescription: "Order cakes online in Bathinda. Same-day delivery across Bathinda. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bathinda",
    metaKeyword: "cake delivery bathinda, order cake online bathinda, birthday cake bathinda, custom cake bathinda, same day cake delivery bathinda civil lines thermal plant road rose garden AIIMS",
    footerContent: `
<h2>Cake Delivery in Bathinda — Punjab's Steel City, AIIMS Bathinda, and Thermal Power Hub</h2>
<p>Bathinda — Punjab's most significant city in the Malwa region (southern Punjab), home to the Guru Gobind Singh Medical College and Hospital (now AIIMS Bathinda — one of the 22 new All India Institutes of Medical Sciences established under the Pradhan Mantri Swasthya Suraksha Yojana, transforming healthcare in the Malwa belt), the massive Guru Nanak Dev Thermal Power Plant (one of Punjab's main power generation sites), a large oil refinery (HPCL's Bathinda Refinery — one of North India's largest petroleum complexes, processing 9 MTPA of crude), the ancient Qila Mubarak fort (a 2000+ year old Kushana-era fort in the city centre), and Bathinda Lake (known as the "Riviera of Punjab") — is a rapidly developing city in the cotton and wheat heartland of Punjab. From birthday parties in the Civil Lines residential belt to cakes at the AIIMS hospital canteen, from anniversary surprises in the Rose Garden area to professional milestone cakes at the Thermal Plant colony — RedHeart covers all Bathinda zones: Central (Civil Lines, Opp Thermal Plant, Station Road), North (Rose Garden, Goniana Road, Ablowal Road), South (AIIMS Bathinda, New Delhi Bypass), East (Mansa Road, Sirsa Road), West (Muktsar Road, Barnala Road).</p>
<p>Our Bathinda cake range: Chocolate, Black Forest, Red Velvet, Mango (Malls Malwa Dussehri!), Butterscotch, Photo Cakes, Fondant AIIMS / Qila Mubarak theme. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bathinda, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Rose Garden, Thermal Plant area, AIIMS Bathinda, Station Road, Goniana Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bathinda?", answer: "Yes, same-day cake delivery is available across all Bathinda areas — Civil Lines, Rose Garden, Thermal Plant area, AIIMS Bathinda, and Station Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to AIIMS Bathinda?", answer: "Yes, AIIMS Bathinda's campus, medical college hostels, and staff residential quarters are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Bathinda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bathinda delivery." }
    ]
  },

  "pathankot": {
    cityName: "Pathankot",
    metaTitle: "Cake Delivery in Pathankot | Himachal Gateway Punjab | RedHeart",
    metaDescription: "Order cakes online in Pathankot. Same-day delivery across Pathankot. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Pathankot",
    metaKeyword: "cake delivery pathankot, order cake online pathankot, birthday cake pathankot, custom cake pathankot, same day cake delivery pathankot civil lines dalhousie road chakki bank sujanpur",
    footerContent: `
<h2>Cake Delivery in Pathankot — Gateway to Himachal Pradesh, Dalhousie's Railhead, and Strategic Defence City</h2>
<p>Pathankot — Punjab's northernmost major city, the gateway to Himachal Pradesh (the Pathankot-Jogindernagar narrow-gauge mountain railway — one of the most scenic hill railways in India — connects here, and the road to Dalhousie, Dharamsala, Chamba, and Kullu-Manali passes through Pathankot), home to a major Indian Air Force base (Pathankot Air Force Station — one of the most strategically important air bases near the Pakistan and China borders, covering the tri-junction of Punjab, Jammu, and Himachal), and serving as the commercial hub for Chamba district and the Ravi River valley — is a city of critical transit and strategic importance. From birthday parties in the Civil Lines residential belt to cakes at the large Air Force station families' colony, from anniversary surprises in the Chakki Bank area to student cakes near the Pathankot colleges — RedHeart covers all Pathankot zones: Central (Civil Lines, Station Road, Dalhousie Road), North (Chakki Bank, Shahpur Kandi, Ranjit Sagar Dam area), South (Sujanpur Road, Nurpur Road), East (Dalhousie Road, Chamba Road), West (Gurdaspur Road, Dera Baba Nanak).</p>
<p>Our Pathankot cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Himalayan theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pathankot, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Dalhousie Road, Chakki Bank, Sujanpur Road, AF base area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Himalayan Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pathankot?", answer: "Yes, same-day cake delivery is available across all Pathankot areas — Civil Lines, Station Road, Dalhousie Road, Chakki Bank, and the Air Force base residential colony — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Pathankot?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Pathankot delivery." },
      { question: "Do you deliver midnight cakes in Pathankot?", answer: "Yes, midnight birthday cake delivery is available across Pathankot's central and residential zones." }
    ]
  },

  "bharatpur": {
    cityName: "Bharatpur",
    metaTitle: "Cake Delivery in Bharatpur | Keoladeo Bird City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Bharatpur. Same-day delivery across Bharatpur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bharatpur",
    metaKeyword: "cake delivery bharatpur, order cake online bharatpur, birthday cake bharatpur, custom cake bharatpur, same day cake delivery bharatpur kumher road mathura road civil lines keoladeo",
    footerContent: `
<h2>Cake Delivery in Bharatpur — Keoladeo Bird Paradise, Lohagarh Fort City, and Braj Region's Gateway</h2>
<p>Bharatpur — eastern Rajasthan's major city, home to the Keoladeo National Park (previously Bharatpur Bird Sanctuary — a UNESCO World Heritage Site and one of the world's most important bird sanctuaries, home to 370+ bird species including the critically endangered Siberian Crane that wintered here in large numbers, and the scene of some of India's most spectacular wildlife photography), the Lohagarh Fort ("Iron Fort" — the only Rajput fort that was never conquered by the British despite two major sieges in 1803 and 1805, and the symbol of Bharatpur's Jat state pride), and the gateway to the Braj region (Mathura and Vrindavan, sacred to Krishna's birth, are 40 km away) — is a city of extraordinary natural and historical heritage at the confluence of three states (Rajasthan, UP, Haryana). From birthday parties in the Civil Lines area to corporate cakes at the growing Bharatpur Industrial Area, from anniversary surprises near the Lohagarh Fort to student cakes near the RBS College complex — RedHeart covers all Bharatpur zones: Central (Civil Lines, Station Road, Kumher Road), North (Mathura Road, Govardhan Road), South (Agra Road, Nagar Road, Deeg Road), East (NH-21 belt, Bayana Road), West (Keoladeo area, Old Bharatpur).</p>
<p>Our Bharatpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Keoladeo/Lohagarh Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharatpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Kumher Road, Mathura Road, Agra Road, Keoladeo area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Keoladeo Bird Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bharatpur?", answer: "Yes, same-day cake delivery is available across all Bharatpur areas — Civil Lines, Station Road, Kumher Road, Mathura Road, and the Keoladeo area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bharatpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bharatpur delivery." },
      { question: "Do you have Keoladeo Bird Sanctuary-theme cakes in Bharatpur?", answer: "Yes! Keoladeo National Park's famed avian wildlife inspires our bird sanctuary fondant cakes — a unique local theme perfect for Bharatpur's proud connection to India's greatest bird paradise." }
    ]
  },

  "chittorgarh": {
    cityName: "Chittorgarh",
    metaTitle: "Cake Delivery in Chittorgarh | Mewar Fort City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Chittorgarh. Same-day delivery across Chittorgarh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chittorgarh",
    metaKeyword: "cake delivery chittorgarh, order cake online chittorgarh, birthday cake chittorgarh, custom cake chittorgarh, same day cake delivery chittorgarh fort area station road senthi nimbahera",
    footerContent: `
<h2>Cake Delivery in Chittorgarh — Rajputana's Pride, Padmavati's Jauhar, and UNESCO World Heritage Fort City</h2>
<p>Chittorgarh — the seat of Rajputana honour, home to the Chittorgarh Fort (a UNESCO World Heritage Site — at 700 acres, one of the largest forts in India and Asia, the symbol of Mewar's centuries-long resistance, site of three jauhars including the legendary Rani Padmini's self-immolation in 1303 rather than submit to Alauddin Khalji), the Vijay Stambha (Tower of Victory — built by Maharana Kumbha in 1448 after defeating the Sultan of Malwa, a 37-metre-high masterpiece of Rajput architecture), the Kirti Stambha, Meera Bai's temple (the poet-saint who refused all earthly bonds in devotion to Krishna), and a major zinc-cement industrial city (home to the HZL Chanderiya smelter — one of the world's largest zinc-lead complexes, operated by Vedanta) — is a city of unparalleled Rajput heritage. From birthday parties in the Station Road residential area to corporate cakes at the large zinc/cement plants, from anniversary surprises in the Civil Lines area to student cakes near the local colleges — RedHeart covers all Chittorgarh zones: Central (Station Road, Town Hall Chowk, Civil Lines), North (Fort Area, Senthi Road, Bhilwara Road), South (Nimbahera Road, Chitoriya Road), East (Kota Road, Rawatbhata Road), West (Udaipur Road, Nimach Road, Bari Sadri).</p>
<p>Our Chittorgarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Vijay Stambha / Rajput Fort-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chittorgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Civil Lines, Fort Area, Senthi Road, Nimbahera Road, Udaipur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Vijay Stambha Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chittorgarh?", answer: "Yes, same-day cake delivery is available across all Chittorgarh areas — Station Road, Civil Lines, Fort Area, and Nimbahera Road — for orders placed before 3 PM." },
      { question: "Do you have Chittorgarh Fort-themed cakes?", answer: "Yes! The UNESCO-listed Chittorgarh Fort and the iconic Vijay Stambha (Tower of Victory) inspire our Rajput heritage fondant cakes — a unique local theme perfect for Chittorgarh's proud Mewar identity." },
      { question: "Are eggless cakes available in Chittorgarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chittorgarh delivery." }
    ]
  },

  "jorhat": {
    cityName: "Jorhat",
    metaTitle: "Cake Delivery in Jorhat | Tea Capital of the World Assam | RedHeart",
    metaDescription: "Order cakes online in Jorhat. Same-day delivery across Jorhat. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Jorhat",
    metaKeyword: "cake delivery jorhat, order cake online jorhat, birthday cake jorhat, custom cake jorhat, same day cake delivery jorhat AT road GNB road gar ali titabor mariani",
    footerContent: `
<h2>Cake Delivery in Jorhat — Tea Capital of the World, Gibbon Research Station, and Assam's Cultural Hub</h2>
<p>Jorhat — Assam's 3rd-largest city, the undisputed "Tea Capital of the World" (Jorhat district has the highest concentration of tea estates globally — over 150 tea gardens producing some of the finest Assam CTC and Orthodox teas, and the Tea Auction Centre in Jorhat is the world's largest tea auction market after London's closure), home to the Gibbon Wildlife Sanctuary (the only home of the Hoolock Gibbon in India — India's only ape — in a patch of pristine rainforest), the Assam Agricultural University (AAU — Assam's premier agricultural science university), and a city with a strong Assamese cultural tradition (Bihu dance, Sattriya classical dance, and the legacy of the Ahom kingdom — Jorhat was the last capital of the Ahom dynasty) — is a city of global tea significance and rich Assamese heritage. From birthday parties along the AT Road commercial belt to corporate cakes at the large tea company offices (Goodricke, Williamson Magor, Amalgamated Plantations), from anniversary surprises in the GNB Road residential area to student birthdays near AAU campus — RedHeart covers all Jorhat zones: Central (AT Road, Gar Ali, Station Road), North (GNB Road, Cinnamara, Titabor), South (Simaluguri, Mariani, Dergaon Road), East (Dhemaji Road, North Lakhimpur Road), West (Sibsagar Road, Golaghat Road, Numaligarh).</p>
<p>Our Jorhat cake range: Chocolate, Black Forest, Red Velvet, Assam Tea-Cream (local!), Mango, Butterscotch, Photo Cakes, Fondant Tea Estate-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jorhat, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">AT Road, Gar Ali, GNB Road, Station Road, Titabor, Mariani, AAU campus area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Assam Tea-Cream, Chocolate, Photo Cake, Tea Estate Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Assam tea-flavoured cakes in Jorhat?", answer: "Yes! Jorhat's world-famous Assam CTC tea inspires our Assam Tea-Cream cake — a unique flavour with premium black tea-infused cream, celebrating Jorhat's status as the Tea Capital of the World." },
      { question: "Can I get same-day cake delivery in Jorhat?", answer: "Yes, same-day cake delivery is available across all Jorhat areas — AT Road, Gar Ali, GNB Road, Station Road, and AAU campus area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jorhat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jorhat delivery." }
    ]
  },

  "nagaon": {
    cityName: "Nagaon",
    metaTitle: "Cake Delivery in Nagaon | Central Assam Hub | RedHeart",
    metaDescription: "Order cakes online in Nagaon. Same-day delivery across Nagaon. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Nagaon",
    metaKeyword: "cake delivery nagaon, order cake online nagaon, birthday cake nagaon, custom cake nagaon, same day cake delivery nagaon haibargaon GS road lanka furkating doboka",
    footerContent: `
<h2>Cake Delivery in Nagaon — Central Assam's Commercial Hub, Sarusajai's Neighbour, and Brahmaputra Floodplain City</h2>
<p>Nagaon — the 4th-largest city in Assam, the administrative headquarters of Nagaon district (one of Assam's most populous districts), centrally located between Guwahati and Jorhat on the South Bank of the Brahmaputra, a major commercial and market centre for the vast agricultural Brahmaputra floodplain region (rice, jute, mustard), home to the Nagaon Paper Mill (one of Assam's early industrial landmarks, now revived), and a city with a large Muslim, Hindu, and Bodo population living in a multicultural setting — is central Assam's most important commercial node. From birthday parties along the GS Road to corporate cakes at the large agricultural trading markets, from Bihu celebration cakes to anniversary surprises in the Haibargaon area, from Eid special cakes to student birthdays near the Nagaon Government College — RedHeart covers all Nagaon zones: Central (GS Road, Station Road, Nagaon Town), North (Haibargaon, Kaliabor, Puranigudam Road), South (Lanka, Lumding Road, Doboka), East (Furkating, Jorhat Road), West (Guwahati Road, Jakhalabandha, Dhing).</p>
<p>Our Nagaon cake range: Chocolate, Black Forest, Red Velvet, Assam Tea-Cream, Mango (Joha rice-cream!), Photo Cakes, Fondant Bihu-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaon, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">GS Road, Station Road, Haibargaon, Lanka, Furkating, Doboka, Dhing</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Assam Tea-Cream, Photo Cake, Black Forest, Bihu Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nagaon?", answer: "Yes, same-day cake delivery is available across all Nagaon areas — GS Road, Station Road, Haibargaon, Lanka, and Furkating — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nagaon?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nagaon delivery." },
      { question: "Do you make Bihu festival cakes in Nagaon?", answer: "Yes! Bihu — Assam's most beloved harvest festival celebrated in April (Bohag Bihu), October (Kongali Bihu), and January (Bhogali Bihu) — is celebrated with our Bihu-theme fondant cakes in Nagaon." }
    ]
  },

  "mathura": {
    cityName: "Mathura",
    metaTitle: "Cake Delivery in Mathura | Krishna's Birthplace UP | RedHeart",
    metaDescription: "Order cakes online in Mathura. Same-day delivery across Mathura. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Mathura",
    metaKeyword: "cake delivery mathura, order cake online mathura, birthday cake mathura eggless, custom cake mathura, same day cake delivery mathura vrindavan krishna janmabhoomi civil lines dampier nagar",
    footerContent: `
<h2>Cake Delivery in Mathura — Lord Krishna's Birthplace, Holi's Grand Festival City, and Braj-Bhumi's Heart</h2>
<p>Mathura — one of the Seven Sacred Cities of Hinduism, the birthplace of Lord Krishna (the Krishna Janmabhoomi — the exact spot where Krishna is believed to have been born in a prison cell, marked by the massive Shri Krishna Janmasthan Temple complex), one of the oldest cities in India (mentioned in the Ramayana, Mahabharata, and Puranas), the city where Holi is celebrated in its most extravagant form (Barsana's Lathmar Holi, Vrindavan's Phoolon ki Holi — "Holi of Flowers" where priests shower the devotees with flowers, Mathura's colour celebrations lasting 7 days — the "Holi capital of the world"), and a major Hindu pilgrimage destination drawing millions annually — is one of India's most sacred cities. All our Mathura cakes are eggless and Pure Veg — from birthday parties in the Dampier Nagar residential area to corporate cakes at the IFFCO Mathura Refinery, from Janmashtami celebration cakes to anniversary surprises near Vrindavan's ISKCON temple — RedHeart covers all Mathura zones: Central (Civil Lines, Dampier Nagar, Station Road), North (Vrindavan, Mathura Cantonment, Govardhan), South (Holi Gate area, Bihariji area, Yamuna Bridge), East (Agra Road, Koshi Kalan), West (Bharatpur Road, Kans Qila area).</p>
<p>Our Mathura cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Peda (Mathura's famous peda!), Mango (Braj Dussehri), Photo Cakes, Fondant Janmashtami / Krishna-theme special cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mathura, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Dampier Nagar, Station Road, Vrindavan, Govardhan, Barsana, ISKCON area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Peda, Krishna Fondant, Chocolate, Photo Cake, Black Forest (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Mathura?", answer: "Yes! All our Mathura cakes are 100% eggless and Pure Veg — suitable for Mathura's sacred character as Krishna's birthplace, where the entire city follows a strict vegetarian tradition. No eggs in any cake, guaranteed." },
      { question: "Do you have Janmashtami and Krishna-theme cakes in Mathura?", answer: "Yes! Janmashtami — Krishna's birthday, celebrated with unmatched grandeur in Mathura — is one of our most popular themes. Krishna-flute, peacock-feather, Vrindavan, and Radha-Krishna fondant cakes are available for same-day delivery." },
      { question: "Can I get same-day eggless cake delivery in Mathura and Vrindavan?", answer: "Yes, same-day eggless cake delivery covers both Mathura city (Civil Lines, Dampier Nagar, Station Road) and Vrindavan (ISKCON area, Banke Bihari area) for orders placed before 3 PM." }
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
