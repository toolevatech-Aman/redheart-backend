/**
 * Batch 11 — Gorakhpur, Bareilly, Jhansi, Mathura, Gwalior,
 *             Haridwar, Rishikesh, Ajmer, Kota, Bhagalpur,
 *             Muzaffarpur, Aligarh, Jalandhar, Mohali, Patiala
 * node scripts/seo-city-flowers-11.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "gorakhpur": {
    cityName: "Gorakhpur",
    metaTitle: "Flower Delivery in Gorakhpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Gorakhpur with same-day delivery. Roses, marigolds & bouquets to Gorakhnath, Civil Lines, Humayunpur & all areas. From ₹399.",
    h1: "Flower Delivery in Gorakhpur",
    metaKeyword: "flower delivery in Gorakhpur, online flower delivery Gorakhpur, same day flower delivery Gorakhpur, florist Gorakhpur",
    footerContent: `<h2>Flower Delivery in Gorakhpur — The City of Gorakhnath and the Rapti River</h2>
<p>Gorakhpur is eastern UP's most important city — the headquarters of the Goraksha Peeth, whose Mahant has also served as the Chief Minister of Uttar Pradesh, making it a city where spiritual authority and political power meet. The Gorakhnath temple, dedicated to the medieval yogi-philosopher Gorakshanath, is Gorakhpur's most sacred site and draws devotees year-round. Gorakhpur is also famous for its railway workshops — the North Eastern Railway's headquarters is here, and the city has one of India's largest railway divisional workshops. RedHeart delivers fresh flowers across Gorakhpur with same-day and midnight delivery, starting at ₹399.</p>
<p>The city's flower demand peaks during Gorakhnath temple festivals and the broader Hindu calendar. The Rapti and Rohini rivers that define Gorakhpur's geography also host Chhath Puja celebrations where flowers are offered. Civil Lines, Medical College area, and Humayunpur are our primary residential delivery zones.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gorakhpur, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Gorakhnath, Humayunpur, Medical College, Ghanta Ghar, Padri Bazar, Taramandal</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, jasmine</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Gorakhpur?", answer: "Yes, RedHeart delivers flowers same-day across Gorakhpur including Civil Lines, Gorakhnath temple area, Medical College zone, and Humayunpur. Order before 5 PM for same-day delivery." },
      { question: "Can I order Gorakhnath temple flowers from RedHeart in Gorakhpur?", answer: "Yes! RedHeart delivers marigold garlands, tuberose, and rose offerings for Gorakhnath temple puja across Gorakhpur. Fresh flowers delivered to your home before your temple visit." },
      { question: "Is midnight flower delivery available in Gorakhpur?", answer: "Yes, midnight delivery is available across Gorakhpur. Order before 9 PM and choose your time." }
    ]
  },
  "bareilly": {
    cityName: "Bareilly",
    metaTitle: "Flower Delivery in Bareilly | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bareilly with same-day delivery. Roses, bouquets to Civil Lines, Subhash Nagar, Nawabganj & all areas. From ₹399.",
    h1: "Flower Delivery in Bareilly",
    metaKeyword: "flower delivery in Bareilly, online flower delivery Bareilly, same day flower delivery Bareilly, florist Bareilly",
    footerContent: `<h2>Flower Delivery in Bareilly — The Furniture City's Warm Gifting Culture</h2>
<p>Bareilly is western UP's most important city — famous for its furniture industry (zari and wood furniture from Bareilly are sold across India), its Nath Yogis pilgrimage circuit (three major Nath temples in the city — Alakhnanddji, Trivati Nath, and Maddhu Nath — give it the name Nath Nagri), and the famous "Bareilly ki Barfi" sweet made popular by the Bollywood film of the same name. The city's diverse character — Rohilkhand's administrative centre, a significant Muslim population, and deep Hindu traditions — makes it a city of rich cultural intersections. RedHeart delivers fresh flowers across Bareilly with same-day and midnight delivery, starting at ₹399.</p>
<p>Civil Lines is Bareilly's most upscale address. Subhash Nagar, Nawabganj, Pili Bhit Road, and CBganj are established residential zones with consistent gifting demand. Eid celebrations in Bareilly's old city mohallas and Diwali in the Hindu neighbourhoods both create high flower demand periods that RedHeart prepares for specifically.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bareilly, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Subhash Nagar, Nawabganj, CBganj, Pili Bhit Road, Rampur Garden, Kutchery</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Bareilly?", answer: "Yes, RedHeart delivers same-day across Bareilly including Civil Lines, Subhash Nagar, Nawabganj, CBganj, and all major areas. Order before 5 PM for 2–4 hour delivery." },
      { question: "Does RedHeart deliver Eid flowers in Bareilly?", answer: "Yes! RedHeart delivers rose bouquets and festive arrangements for Eid across Bareilly's mixed neighbourhoods." },
      { question: "Is midnight delivery available in Bareilly?", answer: "Yes, midnight flower delivery is available across Bareilly. Order before 9 PM and choose your time." }
    ]
  },
  "jhansi": {
    cityName: "Jhansi",
    metaTitle: "Flower Delivery in Jhansi | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jhansi with same-day delivery. Roses, marigolds & bouquets to Sipri Bazar, Civil Lines, Sadar Bazar & all areas. From ₹399.",
    h1: "Flower Delivery in Jhansi",
    metaKeyword: "flower delivery in Jhansi, online flower delivery Jhansi, same day flower delivery Jhansi, florist Jhansi",
    footerContent: `<h2>Flower Delivery in Jhansi — The City of Rani Laxmibai</h2>
<p>Jhansi is forever associated with Rani Laxmibai — the queen of Jhansi who led one of the most courageous resistance efforts of the 1857 Uprising, riding out of the besieged Jhansi Fort on horseback with her son strapped to her back. The fort that she defended still dominates the city's skyline. Jhansi is Bundelkhand's most important city, the regional commercial hub for a historically arid and politically complex region of central India. The city's flowers are given with the same directness that characterises Bundelkhand's people — honest, generous, and unadorned. RedHeart delivers fresh flowers across Jhansi with same-day and midnight delivery, starting at ₹399.</p>
<p>Sipri Bazar and Civil Lines are Jhansi's main residential and commercial zones. Sadar Bazar, the old military cantonment market, and the areas near Jhansi Fort and Rani Lakshmi Bai Park see regular gifting activity for official and historical commemoration occasions as well as personal milestones.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhansi, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sipri Bazar, Civil Lines, Sadar Bazar, Cantonment, Nai Basti, Gwalior Road, Orchha Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, seasonal</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Jhansi?", answer: "Yes, RedHeart delivers same-day across Jhansi including Sipri Bazar, Civil Lines, Sadar Bazar, Cantonment, and all major areas." },
      { question: "Can I order flowers to Jhansi Fort area?", answer: "Yes, RedHeart delivers to addresses near Jhansi Fort, Rani Laxmibai Park, and the surrounding old city areas." },
      { question: "Is midnight delivery available in Jhansi?", answer: "Yes, midnight delivery is available across Jhansi. Order before 9 PM and choose your time." }
    ]
  },
  "mathura": {
    cityName: "Mathura",
    metaTitle: "Flower Delivery in Mathura | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Mathura with same-day delivery. Roses, marigolds & Krishna puja flowers to Govardhan, Vrindavan Road & all areas. From ₹399.",
    h1: "Flower Delivery in Mathura",
    metaKeyword: "flower delivery in Mathura, online flower delivery Mathura, same day flower delivery Mathura, florist Mathura, Krishna puja flowers Mathura",
    footerContent: `<h2>Flower Delivery in Mathura — Lord Krishna's Birthplace Lives on Flowers</h2>
<p>Mathura is the birthplace of Lord Krishna — the Krishna Janmabhoomi temple that marks the site of his birth is one of the most sacred places in Hinduism, drawing millions of pilgrims annually. The entire Braj region (Mathura, Vrindavan, Govardhan, Barsana, Nandgaon) is considered Krishna's land, and the flower offerings made at its temples are among the most elaborate in all of India. Mathura's flower culture is inseparable from its devotional identity — rose petals are scattered on the Yamuna at dawn; marigold garlands are offered at the Dwarkadhish temple; tuberose fragrance fills the lanes around the ghats. RedHeart delivers fresh flowers across Mathura with same-day and midnight delivery, starting at ₹399.</p>
<p>Janmashtami in Mathura — celebrating Krishna's birth with midnight celebrations, elaborate temple decorations, and flower showers — is the city's greatest event. Holi in Mathura and the Braj region (Lathmar Holi at Barsana, Phoolon Wali Holi at Vrindavan where flowers are thrown instead of colours) creates extraordinary flower demand in the spring season. RedHeart prepares dedicated stock for both festivals.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mathura, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Govardhan Road, Vrindavan Road, Dampier Nagar, Krishnapuri, Refinery Township</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Janmashtami, Phoolon Wali Holi, Radhashtami, daily temple puja</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Janmashtami flowers in Mathura?", answer: "Yes! RedHeart prepares dedicated stock for Janmashtami in Mathura — marigold garlands, tuberose, rose petals for temple offerings. We deliver across the city and to Vrindavan area." },
      { question: "Can I order Phoolon Wali Holi flowers in Mathura?", answer: "Yes! RedHeart delivers fresh flower petals for Mathura's famous Phoolon Wali Holi — the flower Holi at Vrindavan's Banke Bihari temple. Rose petals, marigolds, and mixed flower petals available." },
      { question: "Is midnight flower delivery available in Mathura?", answer: "Yes, midnight delivery is available — perfect for Janmashtami midnight puja preparations." }
    ]
  },
  "gwalior": {
    cityName: "Gwalior",
    metaTitle: "Flower Delivery in Gwalior | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Gwalior with same-day delivery. Roses, bouquets to Lashkar, Morar, Hazira & all areas. From ₹399.",
    h1: "Flower Delivery in Gwalior",
    metaKeyword: "flower delivery in Gwalior, online flower delivery Gwalior, same day flower delivery Gwalior, florist Gwalior",
    footerContent: `<h2>Flower Delivery in Gwalior — The Fort City of Madhya Pradesh</h2>
<p>Gwalior is one of India's most imposing fort cities — the Gwalior Fort, perched on a 100-metre sandstone hill above the city, is described as "the pearl amongst fortresses in India" by Babur, who saw it in the 16th century. The fort has changed hands between Hindu Rajput dynasties, the Mughals, the Marathas, and finally the Scindias of the Maratha Confederation, whose descendants still maintain the Jai Vilas Palace. Gwalior is also the birthplace of the Gwalior Gharana of classical music — Miyan Tansen, the court musician of Akbar and one of the Navaratnas, was from Gwalior, and the Tansen Samaroha (music festival) held at his tomb annually draws India's finest classical musicians. RedHeart delivers fresh flowers across Gwalior with same-day and midnight delivery, starting at ₹399.</p>
<p>Lashkar is the old commercial heart of Gwalior, adjacent to the fort. Morar is the cantonment and military area. City Centre and Hazira are modern residential zones. The Scindias' Jai Vilas Palace and its surrounding areas are significant delivery zones for the city's elite occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gwalior, Madhya Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lashkar, Morar, Hazira, City Centre, Thatipur, Padav, Mela Ground area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Gwalior?", answer: "Yes, RedHeart delivers flowers same-day to Lashkar, Morar, Hazira, City Centre, Thatipur, and all major Gwalior areas." },
      { question: "Can I get flowers delivered near Gwalior Fort and Jai Vilas Palace?", answer: "Yes, RedHeart delivers to addresses near Gwalior Fort, Jai Vilas Palace, and the Lashkar area." },
      { question: "Is midnight delivery available in Gwalior?", answer: "Yes, midnight delivery is available across Gwalior. Order before 9 PM." }
    ]
  },
  "haridwar": {
    cityName: "Haridwar",
    metaTitle: "Flower Delivery in Haridwar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Haridwar with same-day delivery. Roses, Ganga puja flowers & bouquets to Jwalapur, BHEL Township, Shyampur & all areas. From ₹399.",
    h1: "Flower Delivery in Haridwar",
    metaKeyword: "flower delivery in Haridwar, online flower delivery Haridwar, same day flower delivery Haridwar, florist Haridwar, Ganga aarti flowers Haridwar",
    footerContent: `<h2>Flower Delivery in Haridwar — Gateway to the Gods, Where the Ganga Leaves the Mountains</h2>
<p>Haridwar is where the Ganga emerges from the Himalayan foothills onto the plains — the moment the river leaves the mountains and enters the Doab is marked by the Har Ki Pauri ghat, where the evening Ganga Aarti is one of India's most spectacular spiritual ceremonies. The name Haridwar means "Gateway to God" (Hari = Vishnu/God, Dwar = door). The city hosts the Kumbh Mela every 12 years and the Ardh Kumbh every 6 years, making it one of the most frequented pilgrimage cities in the world. Flowers in Haridwar are primarily devotional — marigold garlands for the Aarti, rose petals scattered on the Ganga, lotus offered at the Chandi Devi and Mansa Devi temples. RedHeart delivers fresh flowers across Haridwar with same-day and midnight delivery, starting at ₹399.</p>
<p>Jwalapur, BHEL Township (the public sector heavy electrical equipment manufacturer has a major plant here), and Shyampur are the main residential areas outside the pilgrimage core. Kankhal, the older spiritual settlement adjacent to Haridwar, is home to numerous ashrams and religious institutions with daily flower requirements.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haridwar, Uttarakhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jwalapur, BHEL Township, Shyampur, Kankhal, Ranipur More, Sidcul</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ganga Aarti daily, Kumbh Mela, Kanwar Yatra, Navratri</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Ganga puja flowers in Haridwar?", answer: "Yes! RedHeart delivers marigold garlands, rose petals, lotus, and tuberose for Ganga aarti puja across Haridwar. Early morning delivery available for Har Ki Pauri preparations." },
      { question: "Is same-day flower delivery available in Haridwar?", answer: "Yes, RedHeart delivers same-day to Jwalapur, BHEL Township, Kankhal, Shyampur, and all Haridwar areas. Orders before 5 PM delivered within 2–4 hours." },
      { question: "Is midnight delivery available in Haridwar?", answer: "Yes, midnight delivery is available across Haridwar." }
    ]
  },
  "rishikesh": {
    cityName: "Rishikesh",
    metaTitle: "Flower Delivery in Rishikesh | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Rishikesh with same-day delivery. Roses, spiritual bouquets to Laxman Jhula, Ram Jhula, Muni Ki Reti & all areas. From ₹399.",
    h1: "Flower Delivery in Rishikesh",
    metaKeyword: "flower delivery in Rishikesh, online flower delivery Rishikesh, same day flower delivery Rishikesh, florist Rishikesh, yoga capital flowers",
    footerContent: `<h2>Flower Delivery in Rishikesh — The Yoga Capital's Devotional Blooms</h2>
<p>Rishikesh is the Yoga Capital of the World — a designation earned by the extraordinary concentration of ashrams, yoga schools, and spiritual seekers who have gathered on the Ganga's banks here since the late 19th century. The Beatles famously came to Maharishi Mahesh Yogi's ashram in Rishikesh in 1968, drawing international attention to a city that Hindu tradition had already considered sacred for millennia. The Triveni Ghat evening aarti, the Ram Jhula and Laxman Jhula suspension bridges spanning the Ganga, and the Swarg Ashram area filled with ochre-robed sadhus — Rishikesh operates in a register of spiritual intensity that is hard to match anywhere in India. RedHeart delivers fresh flowers across Rishikesh with same-day and midnight delivery, starting at ₹399.</p>
<p>Muni Ki Reti, Swarg Ashram, and the Laxman Jhula area are pilgrimage and spiritual zones. Dehradun Road areas and the newer residential parts of Rishikesh serve the city's growing population of yoga teachers, wellness professionals, and families who have settled in the shadow of this sacred town.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rishikesh, Uttarakhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Laxman Jhula, Ram Jhula, Muni Ki Reti, Swarg Ashram, Tapovan, Dehradun Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is flower delivery available in Rishikesh ashram areas?", answer: "Yes, RedHeart delivers to Swarg Ashram, Muni Ki Reti, Laxman Jhula, and Ram Jhula areas of Rishikesh with same-day delivery." },
      { question: "Can I order puja flowers for Ganga aarti in Rishikesh?", answer: "Yes! RedHeart delivers marigolds, tuberose, and lotus for Triveni Ghat and other Rishikesh ghat ceremonies." },
      { question: "Is midnight delivery available in Rishikesh?", answer: "Yes, midnight delivery is available across Rishikesh." }
    ]
  },
  "ajmer": {
    cityName: "Ajmer",
    metaTitle: "Flower Delivery in Ajmer | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ajmer with same-day delivery. Roses, rose petals & Dargah flowers to Vaishali Nagar, Civil Lines, Nasirabad & all areas. From ₹399.",
    h1: "Flower Delivery in Ajmer",
    metaKeyword: "flower delivery in Ajmer, online flower delivery Ajmer, same day flower delivery Ajmer, florist Ajmer, Dargah Sharif flowers Ajmer",
    footerContent: `<h2>Flower Delivery in Ajmer — The Rose Petals of the Dargah Sharif</h2>
<p>Ajmer's Dargah Sharif — the tomb of the Sufi saint Moinuddin Chishti, founder of the Chishtiyya order in South Asia — is one of the most visited shrines in the world. Muslims, Hindus, Sikhs, and Christians come here seeking blessings, and the tradition of offering chadar (cloth offering) and rose petals at the tomb is centuries old. The rose petal trade in Ajmer is enormous — tonnes of fresh roses arrive at the Dargah every day from flower farms across Rajasthan. Ajmer is also the gateway to Pushkar, the holy lake town 14 km away with the world's only Brahma temple. Together, they form one of Rajasthan's most spiritually significant urban corridors. RedHeart delivers fresh flowers across Ajmer with same-day and midnight delivery, starting at ₹399.</p>
<p>Vaishali Nagar is Ajmer's most modern residential area — planned, clean, and home to the professional class. Civil Lines carries the colonial administrative heritage. Nasirabad, the cantonment town adjacent to Ajmer, has a military and government population. Ana Sagar Lake's promenade and the Dargah area are significant delivery zones year-round.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ajmer, Rajasthan</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vaishali Nagar, Civil Lines, Nasirabad, Ramganj, Dargah area, Pushkar Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Urs of Dargah Sharif, Eid, Pushkar Mela season, Navratri</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Can I order rose petals for Dargah Sharif offerings in Ajmer?", answer: "Yes! RedHeart delivers fresh rose petals and rose bunches for Ajmer Dargah Sharif offerings. We understand the importance of fresh roses in the chadar tradition and stock accordingly." },
      { question: "Is same-day flower delivery available in Ajmer?", answer: "Yes, RedHeart delivers same-day to Vaishali Nagar, Civil Lines, Nasirabad, and all major Ajmer areas." },
      { question: "Is midnight delivery available in Ajmer?", answer: "Yes, midnight delivery is available across Ajmer. Order before 9 PM." }
    ]
  },
  "kota": {
    cityName: "Kota",
    metaTitle: "Flower Delivery in Kota | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kota with same-day delivery. Roses, bouquets to Talwandi, Mahavir Nagar, Vigyan Nagar & all coaching institute areas. From ₹399.",
    h1: "Flower Delivery in Kota",
    metaKeyword: "flower delivery in Kota, online flower delivery Kota Rajasthan, same day flower delivery Kota, florist Kota, flowers coaching students Kota",
    footerContent: `<h2>Flower Delivery in Kota — India's Coaching Capital Has a Softer Side</h2>
<p>Kota is famous across India for one thing that is not immediately floral: it is the coaching capital of India — the city from which over 150,000 students come every year to prepare for IIT JEE and NEET entrance exams, cramming into the coaching institutes of Vigyan Nagar and Mahavir Nagar. Allen, Resonance, Bansal, Motion — these coaching brands from Kota are known to every Indian family with a child hoping for an engineering or medical seat. But Kota is also an industrial city on the Chambal river — chemical plants, the Rajasthan Atomic Power Station, and textiles — and a city with a genuine cultural life that the coaching economy has somewhat overshadowed. RedHeart delivers fresh flowers across Kota with same-day and midnight delivery, starting at ₹399.</p>
<p>Talwandi and Mahavir Nagar are the two main coaching-zone addresses. Vigyan Nagar, despite its name, is also heavily residential. The families who live here year-round — separate from the floating coaching student population — maintain normal gifting patterns for birthdays, anniversaries, and Diwali. Students themselves are a significant delivery demographic — birthday flowers from parents sent to their child's PG accommodation is a common Kota delivery.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kota, Rajasthan</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Talwandi, Mahavir Nagar, Vigyan Nagar, Civil Lines, Kunhari, Dadabari, Rangpur Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver flowers to coaching students in Kota?", answer: "Yes! Many parents send birthday flowers to their children in PG accommodations in Talwandi, Mahavir Nagar, and Vigyan Nagar. RedHeart delivers to all PG and hostel addresses in Kota's coaching zones." },
      { question: "Is same-day flower delivery available in Kota?", answer: "Yes, RedHeart delivers same-day to Talwandi, Mahavir Nagar, Vigyan Nagar, Civil Lines, and all Kota areas." },
      { question: "Is midnight delivery available in Kota?", answer: "Yes, midnight delivery is available — perfect for birthday surprises for coaching students." }
    ]
  },
  "bhagalpur": {
    cityName: "Bhagalpur",
    metaTitle: "Flower Delivery in Bhagalpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bhagalpur with same-day delivery. Roses, marigolds & bouquets to Adampur, Tilkamanjhi, Nathnagar & all areas. From ₹399.",
    h1: "Flower Delivery in Bhagalpur",
    metaKeyword: "flower delivery in Bhagalpur, online flower delivery Bhagalpur, same day flower delivery Bhagalpur, florist Bhagalpur Bihar",
    footerContent: `<h2>Flower Delivery in Bhagalpur — The Silk City on the Ganga</h2>
<p>Bhagalpur is Bihar's second largest city and the home of Tussar silk — the raw silk produced from wild silkworms that spin their cocoons on Arjun trees in the forests near Bhagalpur is among the finest natural textiles in the world, and the Bhagalpur Tussar saree is a GI-tagged product. The city sits on the Ganga's southern bank, and the river defines its character — the ghats, the Chhath Puja celebrations, and the agricultural economy of the surrounding Ang region all draw their meaning from the Ganga. RedHeart delivers fresh flowers across Bhagalpur with same-day and midnight delivery, starting at ₹399.</p>
<p>Adampur and Tilkamanjhi are Bhagalpur's main commercial and residential areas. Nathnagar, on the northern edge near the Ganga, is the railway junction town. Bhagalpur's Chhath Puja celebrations on the Ganga ghats are among Bihar's most elaborate, creating the city's biggest annual flower demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhagalpur, Bihar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Adampur, Tilkamanjhi, Nathnagar, Sabour, Champanagar, Railway Colony</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Bhagalpur?", answer: "Yes, RedHeart delivers same-day to Adampur, Tilkamanjhi, Nathnagar, and all major Bhagalpur areas." },
      { question: "Can I get Chhath Puja flowers delivered in Bhagalpur?", answer: "Yes! RedHeart delivers marigolds, lotus, and tuberose for Chhath Puja in Bhagalpur ahead of the festival." },
      { question: "Is midnight delivery available in Bhagalpur?", answer: "Yes, midnight delivery is available across Bhagalpur." }
    ]
  },
  "muzaffarpur": {
    cityName: "Muzaffarpur",
    metaTitle: "Flower Delivery in Muzaffarpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Muzaffarpur with same-day delivery. Roses, marigolds & bouquets to Mithanpura, Brahmpura, Juran Chapra & all areas. From ₹399.",
    h1: "Flower Delivery in Muzaffarpur",
    metaKeyword: "flower delivery in Muzaffarpur, online flower delivery Muzaffarpur, same day flower delivery Muzaffarpur, florist Muzaffarpur Bihar",
    footerContent: `<h2>Flower Delivery in Muzaffarpur — The Litchi Capital of India</h2>
<p>Muzaffarpur is world-famous for one fruit above all others: the Shahi Litchi. The litchis grown in the Muzaffarpur district — in the rich alluvial soil of the North Bihar plains — are considered the finest in the world, with a sweetness and fragrance that litchi farmers elsewhere simply cannot replicate. Muzaffarpur is Bihar's third largest city and the commercial hub of the Tirhut division. The city sits on the Burhi Gandak river and has a significant educational presence — SKMCH (Sri Krishna Medical College and Hospital) is one of Bihar's most important government medical institutions. RedHeart delivers fresh flowers across Muzaffarpur with same-day and midnight delivery, starting at ₹399.</p>
<p>Mithanpura and Brahmpura are the main residential areas. Juran Chapra and Ramdarbar are established neighbourhoods with consistent gifting demand. The medical college township generates steady demand for professional occasion flowers and personal gifting year-round.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Muzaffarpur, Bihar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mithanpura, Brahmpura, Juran Chapra, Ramdarbar, SKMCH area, Station Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Muzaffarpur?", answer: "Yes, RedHeart delivers same-day to Mithanpura, Brahmpura, Juran Chapra, and all major Muzaffarpur areas." },
      { question: "Does RedHeart deliver Chhath Puja flowers in Muzaffarpur?", answer: "Yes! Chhath is Bihar's biggest festival. RedHeart delivers marigolds, lotus, and tuberose for Chhath celebrations in Muzaffarpur." },
      { question: "Is midnight delivery available in Muzaffarpur?", answer: "Yes, midnight delivery is available across Muzaffarpur." }
    ]
  },
  "aligarh": {
    cityName: "Aligarh",
    metaTitle: "Flower Delivery in Aligarh | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Aligarh with same-day delivery. Roses, bouquets to Ramghat Road, Civil Lines, Jamalpur & all areas. From ₹399.",
    h1: "Flower Delivery in Aligarh",
    metaKeyword: "flower delivery in Aligarh, online flower delivery Aligarh, same day flower delivery Aligarh, florist Aligarh UP",
    footerContent: `<h2>Flower Delivery in Aligarh — The Lock City and Its Warm Traditions</h2>
<p>Aligarh is famous for two things that could not be more different: its locks (Aligarh produces 80% of India's padlocks and is a major exporter to the world) and its university. Aligarh Muslim University (AMU), founded in 1875 by Sir Syed Ahmed Khan as the Muhammadan Anglo-Oriental College, is one of India's most prestigious educational institutions and has shaped the modern Muslim intellectual tradition in South Asia. The city's identity is deeply intertwined with both — the brass hardware manufacturing of the Eidgah-Quarsi industrial belt and the academic atmosphere of the AMU campus create two parallel cities within one. RedHeart delivers fresh flowers across Aligarh with same-day and midnight delivery, starting at ₹399.</p>
<p>Ramghat Road is Aligarh's main residential and commercial corridor. Civil Lines carries the administrative character. Jamalpur and the areas around AMU campus see consistent flower demand for academic occasions, Eid celebrations, and the personal gifting of a student population. The Koil area is the old city's commercial hub.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aligarh, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramghat Road, Civil Lines, Jamalpur, AMU campus area, Koil, Marris Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver to AMU campus in Aligarh?", answer: "Yes! RedHeart delivers to AMU campus area and surrounding residential zones for student birthdays, teacher felicitations, and Eid flower gifting." },
      { question: "Is same-day flower delivery available in Aligarh?", answer: "Yes, RedHeart delivers same-day to Ramghat Road, Civil Lines, Jamalpur, and all major Aligarh areas." },
      { question: "Is midnight delivery available in Aligarh?", answer: "Yes, midnight delivery is available across Aligarh." }
    ]
  },
  "jalandhar": {
    cityName: "Jalandhar",
    metaTitle: "Flower Delivery in Jalandhar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jalandhar with same-day delivery. Roses, gladioli & bouquets to Model Town, Lajpat Nagar, Guru Nanak Mission Chowk & all areas. From ₹399.",
    h1: "Flower Delivery in Jalandhar",
    metaKeyword: "flower delivery in Jalandhar, online flower delivery Jalandhar, same day flower delivery Jalandhar, florist Jalandhar Punjab",
    footerContent: `<h2>Flower Delivery in Jalandhar — Punjab's Sports City Celebrates Generously</h2>
<p>Jalandhar is Punjab's second most important city after Amritsar — a distinction it has maintained as a commercial, educational, and sporting hub. Jalandhar produces more sports goods than any other Indian city outside Meerut — football manufacturing here dates to the early 20th century when it supplied equipment to the British Army, and today the city exports footballs, cricket bats, and athletic equipment globally. NIT Jalandhar and Lovely Professional University (one of India's largest private universities) give it a significant student presence. The Jullunder Cantonment is one of India's largest military cantonments. RedHeart delivers fresh flowers across Jalandhar with same-day and midnight delivery, starting at ₹399.</p>
<p>Model Town is Jalandhar's most prestigious residential area. Lajpat Nagar and Civil Lines are established zones. The areas near Guru Nanak Mission Chowk and Sodal Road serve a large Punjabi community with active Gurpurab and wedding gifting traditions. Gladioli — Punjab's festival flower — are particularly popular for Lohri and wedding celebrations here.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalandhar, Punjab</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, Lajpat Nagar, Civil Lines, Guru Nanak Mission Chowk, Sodal Road, Nakodar Road, Cantonment</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Jalandhar?", answer: "Yes, RedHeart delivers same-day to Model Town, Lajpat Nagar, Civil Lines, Cantonment, and all major Jalandhar areas." },
      { question: "Can I order Lohri and Gurpurab flowers in Jalandhar?", answer: "Yes! RedHeart delivers gladioli, marigolds, and festive arrangements for Lohri and Gurpurab celebrations across Jalandhar." },
      { question: "Is midnight delivery available in Jalandhar?", answer: "Yes, midnight delivery is available across Jalandhar." }
    ]
  },
  "mohali": {
    cityName: "Mohali",
    metaTitle: "Flower Delivery in Mohali | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Mohali with same-day delivery. Roses, bouquets to Phase 7, IT City, Aerocity & all Mohali sectors. From ₹399.",
    h1: "Flower Delivery in Mohali",
    metaKeyword: "flower delivery in Mohali, online flower delivery Mohali SAS Nagar, same day flower delivery Mohali, florist Mohali Punjab",
    footerContent: `<h2>Flower Delivery in Mohali — Punjab's Planned Tech City Next to Chandigarh</h2>
<p>Mohali (officially SAS Nagar — Sahibzada Ajit Singh Nagar) is the Punjab government's planned satellite city adjacent to Chandigarh — sharing the Chandigarh Metropolitan Area with the union territory capital and Panchkula (Haryana). Mohali is the address of ISRO's Space Applications Centre (SAC), the PCA Cricket Stadium (one of India's finest cricket grounds, host to IPL matches and internationals), and a growing IT sector concentrated in the Phase 8 and IT City areas. It is where Punjab's young professional class comes to live when they want the access of Chandigarh at slightly lower real estate prices. RedHeart delivers fresh flowers across Mohali with same-day and midnight delivery, starting at ₹399.</p>
<p>Phase 7 and Phase 10 are among Mohali's most active residential areas. Aerocity, near the Chandigarh International Airport, is a growing commercial and hospitality zone. IT City and the Phase 8 corridor house IT companies with a young workforce. Cricket fans who watch matches at PCA stadium sometimes make flower gift purchases for the occasion.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mohali (SAS Nagar), Punjab</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Phase 7, Phase 10, Phase 8, IT City, Aerocity, Kharar, Landran, Zirakpur adjoining</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Mohali sectors and IT City?", answer: "Yes, RedHeart delivers to all Mohali phases, IT City, Aerocity, and surrounding areas same-day. Orders before 5 PM delivered within 2–4 hours." },
      { question: "Does RedHeart deliver to Phase 7 and Phase 10 in Mohali?", answer: "Yes, all Mohali sectors including Phase 7, 8, 10, 11 are fully covered with same-day delivery." },
      { question: "Is midnight delivery available in Mohali?", answer: "Yes, midnight delivery is available across Mohali." }
    ]
  },
  "patiala": {
    cityName: "Patiala",
    metaTitle: "Flower Delivery in Patiala | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Patiala with same-day delivery. Roses, gladioli & bouquets to Model Town, Leela Bhawan, Tripuri & all areas. From ₹399.",
    h1: "Flower Delivery in Patiala",
    metaKeyword: "flower delivery in Patiala, online flower delivery Patiala, same day flower delivery Patiala, florist Patiala Punjab",
    footerContent: `<h2>Flower Delivery in Patiala — The Royal City of the Punjabi Phulkian Misl</h2>
<p>Patiala is one of Punjab's most culturally rich cities — the former princely state of Patiala was ruled by the Phulkian dynasty, whose maharajas were among British India's wealthiest rulers and whose legacy is visible in the magnificent Qila Mubarak (Old Fort), the Moti Bagh Palace, and the Sheesh Mahal museum. Patiala is also the home of Punjabi University — one of Punjab's finest academic institutions — and the city that gave India the Patiala peg (the generous whisky measure named for the Maharaja's hospitality). The Patiala salwar kameez is a fashion icon. Flowers in Patiala are given generously — the Punjabi tradition of wholehearted gifting is especially pronounced here. RedHeart delivers fresh flowers across Patiala with same-day and midnight delivery, starting at ₹399.</p>
<p>Model Town and Leela Bhawan are Patiala's premium residential addresses. Tripuri and Bahadurgarh Road are established middle-class zones. The Punjabi University campus area sees regular academic occasion flowers. Lohri, Baisakhi, and wedding seasons bring Patiala's gifting culture to its fullest expression.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patiala, Punjab</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, Leela Bhawan, Tripuri, Punjabi University area, Bahadurgarh Road, Rajpura Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Patiala?", answer: "Yes, RedHeart delivers same-day to Model Town, Leela Bhawan, Tripuri, Punjabi University area, and all major Patiala areas." },
      { question: "Can I order Lohri and Baisakhi flowers in Patiala?", answer: "Yes! RedHeart delivers gladioli, marigolds, and festive flowers for Lohri and Baisakhi in Patiala." },
      { question: "Is midnight delivery available in Patiala?", answer: "Yes, midnight delivery is available across Patiala." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers", cityName: data.cityName, slug, url: cityUrl,
      metaTitle: data.metaTitle, metaDescription: data.metaDescription,
      h1: data.h1, canonicalUrl: `${BASE_URL}${cityUrl}`,
      metaKeyword: data.metaKeyword,
      breadcrumb: [
        { label: "Home", url: "/" }, { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
      ],
      footerContent: data.footerContent.trim(), faqs: data.faqs, isActive: true,
    };
    const res = await fetch(`${API_BASE}/city/upsert`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) console.error(`❌  ${data.cityName} — ${res.status}`, json);
    else console.log(`✅  ${data.cityName} — ${json._id}`);
  }
  console.log("\nDone — batch 11 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
