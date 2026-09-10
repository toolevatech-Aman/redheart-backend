/**
 * Batch 17 — Amravati, Akola, Jalgaon, Ahmednagar, Chandrapur,
 *             Mussoorie, Nainital, Dharamshala, Saharanpur, Firozabad,
 *             Hazaribagh, Deoghar, Sikar, Kanchipuram, Ramagundam
 * node scripts/seo-city-flowers-17.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "amravati": {
    cityName: "Amravati",
    metaTitle: "Flower Delivery in Amravati | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Amravati with same-day delivery. Roses, marigolds & bouquets to Rajapeth, Shivaji Nagar, Badnera Road & all areas. From ₹399.",
    h1: "Flower Delivery in Amravati",
    metaKeyword: "flower delivery in Amravati, online flower delivery Amravati, same day flower delivery Amravati, florist Amravati Maharashtra",
    footerContent: `<h2>Flower Delivery in Amravati — The Capital of Maharashtra's Vidarbha Region</h2>
<p>Amravati is the divisional headquarters of Maharashtra's Amravati Division — the easternmost part of Maharashtra that borders Madhya Pradesh and Chhattisgarh. The city is named after Ambabai (the mother goddess), whose temple on a hillock (Amraoti) gives the city its name. Amravati is famous for its cotton (the Amravati cotton market is one of Maharashtra's largest), and the city's economy is deeply tied to the Vidarbha region's cotton-farming families, who have faced significant agrarian distress over the past two decades. The Vidarbha Cricket Association Stadium in Nagpur (Amravati division) has hosted several international matches. Dr. Bhimrao Ambedkar — India's most influential Dalit leader and the chief architect of the Indian Constitution — was born in Mhow (near Indore) but was from the Mahar community whose historic presence in Amravati district is significant. RedHeart delivers fresh flowers across Amravati with same-day and midnight delivery, starting at ₹399.</p>
<p>Rajapeth and Shivaji Nagar are the main residential zones. Badnera Road connects to the industrial areas. Ganesh Chaturthi and Ambedkar Jayanti (April 14) are important occasions that drive flower demand in Amravati.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amravati, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajapeth, Shivaji Nagar, Badnera Road, Varudrasha, Citadel area, Paratwada Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Amravati?", answer: "Yes, RedHeart delivers same-day to Rajapeth, Shivaji Nagar, Badnera Road, and all major Amravati areas." },
      { question: "Does RedHeart deliver Ganesh Chaturthi flowers in Amravati?", answer: "Yes! RedHeart delivers marigolds, hibiscus, and durva grass for Ganesh Chaturthi puja across Amravati." },
      { question: "Is midnight delivery available in Amravati?", answer: "Yes, midnight delivery is available across Amravati." }
    ]
  },
  "akola": {
    cityName: "Akola",
    metaTitle: "Flower Delivery in Akola | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Akola with same-day delivery. Roses, marigolds & bouquets to Morshi Road, Nagar Panchayat, Rajkumar Colony & all areas. From ₹399.",
    h1: "Flower Delivery in Akola",
    metaKeyword: "flower delivery in Akola, online flower delivery Akola, same day flower delivery Akola, florist Akola Maharashtra Vidarbha",
    footerContent: `<h2>Flower Delivery in Akola — The Cotton Heartland of Maharashtra</h2>
<p>Akola is the commercial capital of western Vidarbha — the cotton-growing heartland of Maharashtra where the black soil (Regur) is exceptionally suited to cotton cultivation. The city's cotton trading yards and textile processing units are among the most active in Maharashtra. Akola is also known for its seed production — it is a major centre of agricultural seed companies and research farms. The Akola Fort (on the Morna river banks) and the Rajeshwar temple are the city's heritage landmarks. Akola's proximity to Shegaon (30 km away), the sacred town of Sant Gajanan Maharaj, makes it a major base for pilgrims visiting the Gajanan Maharaj Sansthan — one of Maharashtra's most visited pilgrimage places. RedHeart delivers fresh flowers across Akola with same-day and midnight delivery, starting at ₹399.</p>
<p>Morshi Road and Rajkumar Colony are established residential areas. The pilgrimage economy from Shegaon drives flower demand for puja offerings and religious gifts. Ganesh Chaturthi and Diwali are the main occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Akola, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morshi Road, Rajkumar Colony, Shegaon Road, Civil Lines, Murtizapur Road, Station Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Akola?", answer: "Yes, RedHeart delivers same-day to Morshi Road, Rajkumar Colony, Civil Lines, and all major Akola areas." },
      { question: "Does RedHeart deliver Shegaon Sant Gajanan puja flowers?", answer: "Yes! RedHeart delivers marigolds and flowers for Sant Gajanan Maharaj puja for devotees in Akola." },
      { question: "Is midnight delivery available in Akola?", answer: "Yes, midnight delivery is available across Akola." }
    ]
  },
  "jalgaon": {
    cityName: "Jalgaon",
    metaTitle: "Flower Delivery in Jalgaon | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jalgaon with same-day delivery. Roses, marigolds & bouquets to Nehru Chowk, Lal Taki, Girna Road & all areas. From ₹399.",
    h1: "Flower Delivery in Jalgaon",
    metaKeyword: "flower delivery in Jalgaon, online flower delivery Jalgaon, same day flower delivery Jalgaon, florist Jalgaon Maharashtra",
    footerContent: `<h2>Flower Delivery in Jalgaon — Maharashtra's Banana Capital Near Ajanta</h2>
<p>Jalgaon is Maharashtra's major city in the Khandesh region — a vast plateau between the Sahyadri and Satpura ranges, historically a distinct region with its own culture and dialect (Khandeshi). The district is the country's largest banana-producing district — Jalgaon's Khandesh bananas (particularly the G9 banana variety) are exported across India and to the Middle East. The city is also the closest major town to the Ajanta Caves (60 km away) — the UNESCO World Heritage Site with its 2nd-century BCE Buddhist cave paintings that represent the finest examples of ancient Indian art. The Girna river flows through Jalgaon. RedHeart delivers fresh flowers across Jalgaon with same-day and midnight delivery, starting at ₹399.</p>
<p>Nehru Chowk and Lal Taki are the commercial hubs. Girna Road runs along the river. Nandurbar, Dhule, and Aurangabad Road areas serve the regional network. Ganesh Chaturthi and Diwali are the main occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalgaon, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nehru Chowk, Lal Taki, Girna Road, Ring Road, Aurangabad Road, MIDC area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Jalgaon?", answer: "Yes, RedHeart delivers same-day to Nehru Chowk, Lal Taki, Ring Road, and all major Jalgaon areas." },
      { question: "Does RedHeart deliver Ganesh Chaturthi flowers in Jalgaon?", answer: "Yes! RedHeart delivers marigolds, hibiscus, and tuberose for Ganesh Chaturthi across Jalgaon." },
      { question: "Is midnight delivery available in Jalgaon?", answer: "Yes, midnight delivery is available across Jalgaon." }
    ]
  },
  "ahmednagar": {
    cityName: "Ahmednagar",
    metaTitle: "Flower Delivery in Ahmednagar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ahmednagar with same-day delivery. Roses, marigolds & bouquets to Savedi, Cantonment, Kedgaon & all areas. From ₹399.",
    h1: "Flower Delivery in Ahmednagar",
    metaKeyword: "flower delivery in Ahmednagar, online flower delivery Ahmednagar, same day flower delivery Ahmednagar, florist Ahmednagar Maharashtra",
    footerContent: `<h2>Flower Delivery in Ahmednagar — The Fort Town of the Nizam Shahis</h2>
<p>Ahmednagar was the capital of the Ahmadnagar Sultanate — one of the five Deccan Sultanates that emerged after the fragmentation of the Bahmani Kingdom, ruling much of central Maharashtra from the 15th to the 17th centuries. The Ahmednagar Fort (Ahmadnagar Qila) is historically significant as the place where Jawaharlal Nehru, India's first Prime Minister, wrote "The Discovery of India" while imprisoned during the Quit India Movement in 1942-1945. The city is also the closest major town to Shirdi (83 km away), the holy town of Sai Baba — making it a base for Sai pilgrims. The Santaji Ghorpade sugar cooperative and the Kolhar Engineering Works are important industrial employers. RedHeart delivers fresh flowers across Ahmednagar with same-day and midnight delivery, starting at ₹399.</p>
<p>Savedi is Ahmednagar's main residential area. Cantonment areas serve the military population. Kedgaon has the railway station. Sai Baba temple area in Shirdi nearby drives significant flower demand from pilgrims passing through Ahmednagar.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ahmednagar, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Savedi, Cantonment, Kedgaon, Bhingar, Maliwada Road, Shirdi Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Ahmednagar?", answer: "Yes, RedHeart delivers same-day to Savedi, Cantonment, Kedgaon, and all major Ahmednagar areas." },
      { question: "Does RedHeart deliver to Shirdi area from Ahmednagar?", answer: "Yes! RedHeart delivers to Shirdi and the broader Ahmednagar district including Sai Baba temple area flowers." },
      { question: "Is midnight delivery available in Ahmednagar?", answer: "Yes, midnight delivery is available across Ahmednagar." }
    ]
  },
  "chandrapur": {
    cityName: "Chandrapur",
    metaTitle: "Flower Delivery in Chandrapur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Chandrapur with same-day delivery. Roses, marigolds & bouquets to Mul Road, Ballarpur, Ram Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Chandrapur",
    metaKeyword: "flower delivery in Chandrapur, online flower delivery Chandrapur, same day flower delivery Chandrapur, florist Chandrapur Maharashtra",
    footerContent: `<h2>Flower Delivery in Chandrapur — Maharashtra's Jungle City Near Tadoba</h2>
<p>Chandrapur is eastern Maharashtra's most important city — the Coal City of Maharashtra, where the Wani and Ballarpur coal fields and the Chandrapur Super Thermal Power Station are located. The city is also the closest urban base to Tadoba-Andhari Tiger Reserve — one of India's best tiger reserves with excellent wildlife viewing — making it increasingly visited by wildlife enthusiasts. The Chandrapur fort, the ancient Mahakali temple (the presiding deity of the city, after whom the fort was built), and the multiple historic temples within the city give it a cultural depth beyond its industrial identity. The forests that surround Chandrapur are among the last extensive Central Indian forests where tigers and leopards still range freely. RedHeart delivers fresh flowers across Chandrapur with same-day and midnight delivery, starting at ₹399.</p>
<p>Mul Road and Ram Nagar are the main residential areas. Ballarpur (the paper mill town adjacent to Chandrapur) has its own residential population. Mahakali temple area sees daily puja flower demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandrapur, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mul Road, Ballarpur, Ram Nagar, Andhalgaon Road, CSTPS Township, Mahakali area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Chandrapur?", answer: "Yes, RedHeart delivers same-day to Mul Road, Ballarpur, Ram Nagar, and all major Chandrapur areas." },
      { question: "Does RedHeart deliver Mahakali temple flowers in Chandrapur?", answer: "Yes! RedHeart delivers marigolds and hibiscus for Mahakali temple puja across Chandrapur." },
      { question: "Is midnight delivery available in Chandrapur?", answer: "Yes, midnight delivery is available across Chandrapur." }
    ]
  },
  "mussoorie": {
    cityName: "Mussoorie",
    metaTitle: "Flower Delivery in Mussoorie | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Mussoorie with same-day delivery. Roses, lilies & bouquets to Mall Road, Landour, Library Chowk & all Mussoorie areas. From ₹399.",
    h1: "Flower Delivery in Mussoorie",
    metaKeyword: "flower delivery in Mussoorie, online flower delivery Mussoorie, same day flower delivery Mussoorie, florist Mussoorie Uttarakhand hill station",
    footerContent: `<h2>Flower Delivery in Mussoorie — The Queen of Hills and Her Himalayan Blooms</h2>
<p>Mussoorie is the Queen of Hills — the Himalayan hill station at 2,000 metres above sea level in Uttarakhand's Garhwal range that has been North India's most beloved escape from summer since the British established it in 1823. The town's long ridge, with the Doon Valley spreading below and the Himalayan peaks glittering above on clear days, offers one of the most spectacular mountain views in northern India. Landour (adjacent to Mussoorie at a higher elevation) is where Ruskin Bond — India's most beloved English-language author — has lived for decades, and whose descriptions of the Mussoorie hills have given the place a literary character. The Kempty Falls, Camel's Back Road, and Gun Hill are iconic destinations. Mussoorie's cool climate supports an extraordinary variety of Himalayan flowers — rhododendrons, dahlias, and alpine blooms — that make the town naturally beautiful through spring and summer. RedHeart delivers fresh flowers across Mussoorie with same-day and midnight delivery, starting at ₹399.</p>
<p>Mall Road and Library Chowk are Mussoorie's commercial centres. Landour is the quieter, more residential end. The large number of boarding schools (Mussoorie has some of India's oldest residential schools) generates consistent flower demand for school events and parent visits.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mussoorie, Uttarakhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mall Road, Landour, Library Chowk, Picture Palace, Happy Valley, Kulri Bazar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Mussoorie?", answer: "Yes, RedHeart delivers same-day to Mall Road, Landour, Library Chowk, and all Mussoorie areas." },
      { question: "Do flowers last longer in Mussoorie's cool climate?", answer: "Yes! Mussoorie's cool Himalayan climate means flowers stay fresh significantly longer than in the plains. RedHeart's bouquets last even longer at 2000+ metres elevation." },
      { question: "Is midnight delivery available in Mussoorie?", answer: "Yes, midnight delivery is available across Mussoorie." }
    ]
  },
  "nainital": {
    cityName: "Nainital",
    metaTitle: "Flower Delivery in Nainital | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Nainital with same-day delivery. Roses, dahlias & bouquets to Mall Road, Tallital, Mallital & all Nainital areas. From ₹399.",
    h1: "Flower Delivery in Nainital",
    metaKeyword: "flower delivery in Nainital, online flower delivery Nainital, same day flower delivery Nainital, florist Nainital Uttarakhand hill station",
    footerContent: `<h2>Flower Delivery in Nainital — The Lake District of the Indian Himalayas</h2>
<p>Nainital is Uttarakhand's most famous hill station — built around the 1.5 km-long Naini Lake (eye-shaped lake, whose name in Kumaoni means "eye"), with wooded hills rising steeply on three sides and the town perched along the lake's northern shore. The Naini Devi temple at the northern end of the lake (where, according to legend, Sati's eye fell, making Nainital a shakti peetha), and the Naina Devi temple's annual Nanda Ashtami fair with enormous floral offerings — these are the spiritual anchors of a town that is otherwise defined by its extraordinary natural beauty. The Raj Bhavan (Governor's residence), the Nainital High Court (which serves Uttarakhand from this hill town), and the elite boarding schools (Sherwood College, St. Joseph's) give Nainital a stately character. RedHeart delivers fresh flowers across Nainital with same-day and midnight delivery, starting at ₹399.</p>
<p>Mall Road runs along the lake's shore between Tallital (lake's tail) and Mallital (lake's head). The China Peak and Snow View areas are residential. The boating ghats and hotels around the lake generate tourist and residential flower demand year-round.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nainital, Uttarakhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mall Road, Tallital, Mallital, Sukhatal, China Peak area, Snow View, Bhowali Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Nainital?", answer: "Yes, RedHeart delivers same-day to Mall Road, Tallital, Mallital, and all Nainital areas." },
      { question: "Can I order Naini Devi temple flowers in Nainital?", answer: "Yes! RedHeart delivers marigolds, rose petals, and lotus for Naini Devi temple offerings in Nainital." },
      { question: "Is midnight delivery available in Nainital?", answer: "Yes, midnight delivery is available across Nainital." }
    ]
  },
  "dharamshala": {
    cityName: "Dharamshala",
    metaTitle: "Flower Delivery in Dharamshala | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Dharamshala with same-day delivery. Roses, lotuses & bouquets to McLeod Ganj, Kotwali Bazar, Naddi & all areas. From ₹399.",
    h1: "Flower Delivery in Dharamshala",
    metaKeyword: "flower delivery in Dharamshala, online flower delivery Dharamshala, same day flower delivery Dharamshala, florist Dharamshala Himachal Pradesh",
    footerContent: `<h2>Flower Delivery in Dharamshala — The Dalai Lama's Himalayan Refuge</h2>
<p>Dharamshala is one of the most globally recognised small cities in India — since 1960, when the 14th Dalai Lama, Tenzin Gyatso, established the Tibetan Government in Exile here after fleeing Tibet, it has attracted an international community of Tibetan refugees, Buddhist practitioners, tourists, and researchers. McLeod Ganj (Upper Dharamshala), perched 1,500 metres above the Kangra Valley, is where the Dalai Lama's residence (Tsuglagkhang, the main temple complex) and the Tibetan Parliament are located. The town's Buddhist culture — prayer flags strung across every rooftop, the scent of incense from monastery courtyards, the monks in saffron robes — makes it uniquely atmospheric. The cricket stadium in Dharamshala is one of the highest cricket grounds in the world and regularly hosts international matches. RedHeart delivers fresh flowers across Dharamshala with same-day and midnight delivery, starting at ₹399.</p>
<p>McLeod Ganj is the upper, international-facing part of Dharamshala. Kotwali Bazar is the lower commercial zone. Naddi village above McLeod Ganj has stunning Dhauladhar mountain views and residential development. Flowers for the Tsuglagkhang and for the many smaller monasteries are in regular demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharamshala, Himachal Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">McLeod Ganj, Kotwali Bazar, Naddi, Bhagsu, Forsyth Ganj, Dharamshala Town</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Dharamshala and McLeod Ganj?", answer: "Yes, RedHeart delivers same-day to McLeod Ganj, Kotwali Bazar, Naddi, and all Dharamshala areas." },
      { question: "Can I order Buddhist monastery flowers in Dharamshala?", answer: "Yes! RedHeart delivers lotus, marigolds, and chrysanthemums for monastery offerings in Dharamshala's Tibetan Buddhist temples." },
      { question: "Is midnight delivery available in Dharamshala?", answer: "Yes, midnight delivery is available across Dharamshala and McLeod Ganj." }
    ]
  },
  "saharanpur": {
    cityName: "Saharanpur",
    metaTitle: "Flower Delivery in Saharanpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Saharanpur with same-day delivery. Roses, marigolds & bouquets to Civil Lines, Subhash Nagar, Court Road & all areas. From ₹399.",
    h1: "Flower Delivery in Saharanpur",
    metaKeyword: "flower delivery in Saharanpur, online flower delivery Saharanpur, same day flower delivery Saharanpur, florist Saharanpur UP",
    footerContent: `<h2>Flower Delivery in Saharanpur — The Wood Carving Capital Near the Himalayas</h2>
<p>Saharanpur is western UP's northernmost major city — the last large city before the foothills of the Shivaliks and the Doon Valley begin. The city is famous throughout India for its wood carving tradition — Saharanpuri woodwork (intricately carved decorative panels, furniture, and decorative items in mango and sheesham wood) has been exported internationally since the Mughal period, and the city's craftspeople are considered among the finest woodcarvers in the country. Saharanpur is also a significant fruit-growing region — mangoes and litchis from the surrounding villages are traded here and exported. The Botanical Garden at Saharanpur (established during colonial times) is one of the oldest in India. RedHeart delivers fresh flowers across Saharanpur with same-day and midnight delivery, starting at ₹399.</p>
<p>Civil Lines and Subhash Nagar are the main planned residential areas. Court Road and the old city areas are established commercial zones. Saharanpur's mixed Hindu-Muslim population celebrates both Eid and Diwali with significant gifting traditions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saharanpur, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Subhash Nagar, Court Road, Haridwar Bypass, Deoband Road, Chilkana Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Saharanpur?", answer: "Yes, RedHeart delivers same-day to Civil Lines, Subhash Nagar, Court Road, and all major Saharanpur areas." },
      { question: "Does RedHeart deliver Eid and Diwali flowers in Saharanpur?", answer: "Yes! RedHeart delivers roses and colourful bouquets for both Eid and Diwali celebrations across Saharanpur." },
      { question: "Is midnight delivery available in Saharanpur?", answer: "Yes, midnight delivery is available across Saharanpur." }
    ]
  },
  "firozabad": {
    cityName: "Firozabad",
    metaTitle: "Flower Delivery in Firozabad | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Firozabad with same-day delivery. Roses, marigolds & bouquets to Tundla, New Firozabad, Agra Road & all areas. From ₹399.",
    h1: "Flower Delivery in Firozabad",
    metaKeyword: "flower delivery in Firozabad, online flower delivery Firozabad, same day flower delivery Firozabad, florist Firozabad UP glass city",
    footerContent: `<h2>Flower Delivery in Firozabad — The Glass City of India</h2>
<p>Firozabad is the Glass City of India — the city produces approximately 70% of India's total glass production, with everything from bangles and decorative items to glassware and scientific glass manufactured here. The glass bangle tradition of Firozabad is ancient — the brightly coloured glass bangles worn across North India for weddings and festivals come overwhelmingly from Firozabad's furnaces and artisan workshops. The city is part of the Agra metropolitan area (approximately 40 km from the Taj Mahal), and its glass products and Agra's marble inlay work are sometimes sold together as Agra-region craft products. The Firozabad glass bangles gifted at Indian weddings are as integral to the ceremony as the flowers. RedHeart delivers fresh flowers across Firozabad with same-day and midnight delivery, starting at ₹399.</p>
<p>Tundla is the railway junction. New Firozabad has modern residential development. Agra Road connects to the metropolitan area. Wedding season flower demand in Firozabad is enormous — rose petals, marigold garlands, and jasmine strings for the same ceremonies where glass bangles are gifted.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Firozabad, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tundla, New Firozabad, Agra Road, Shikohabad Road, Nai Abadi, Kalyanpur</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Firozabad?", answer: "Yes, RedHeart delivers same-day to Tundla, New Firozabad, Agra Road, and all major Firozabad areas." },
      { question: "Does RedHeart deliver wedding flowers in Firozabad?", answer: "Yes! RedHeart delivers marigold garlands, rose petals, and jasmine for weddings across Firozabad." },
      { question: "Is midnight delivery available in Firozabad?", answer: "Yes, midnight delivery is available across Firozabad." }
    ]
  },
  "hazaribagh": {
    cityName: "Hazaribagh",
    metaTitle: "Flower Delivery in Hazaribagh | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Hazaribagh with same-day delivery. Roses, marigolds & bouquets to Argora, Keshwari, Tichodpura & all areas. From ₹399.",
    h1: "Flower Delivery in Hazaribagh",
    metaKeyword: "flower delivery in Hazaribagh, online flower delivery Hazaribagh, same day flower delivery Hazaribagh, florist Hazaribagh Jharkhand",
    footerContent: `<h2>Flower Delivery in Hazaribagh — The Thousand Gardens of Jharkhand's Plateau</h2>
<p>Hazaribagh's name translates to "thousand gardens" (hazari = thousand, bagh = garden), and the name reflects the town's naturally beautiful setting on a plateau in central Jharkhand. The Hazaribagh National Park and the Canary Hill viewpoint overlooking the town were the foundation of a pleasant hill resort atmosphere in colonial times — Hazaribagh was a preferred summer retreat for British officials from the coalfields and industries of the surrounding Damodar Valley. The Central Jail in Hazaribagh was where several important figures in India's freedom struggle were imprisoned. Today, Hazaribagh is the headquarters of Hazaribagh district and a service centre for the surrounding region. RedHeart delivers fresh flowers across Hazaribagh with same-day and midnight delivery, starting at ₹399.</p>
<p>Argora and Keshwari are residential areas. The Hazaribagh Lake and the Vishrampur area serve the city's administrative population. Durga Puja, Diwali, and Chhath are the main flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hazaribagh, Jharkhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Argora, Keshwari, Tichodpura, Vishrampur, Hazaribagh Lake area, Canary Hill Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Hazaribagh?", answer: "Yes, RedHeart delivers same-day to Argora, Keshwari, Tichodpura, and all major Hazaribagh areas." },
      { question: "Does RedHeart deliver Chhath Puja flowers in Hazaribagh?", answer: "Yes! RedHeart delivers marigolds and lotus for Chhath Puja in Hazaribagh." },
      { question: "Is midnight delivery available in Hazaribagh?", answer: "Yes, midnight delivery is available across Hazaribagh." }
    ]
  },
  "deoghar": {
    cityName: "Deoghar",
    metaTitle: "Flower Delivery in Deoghar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Deoghar with same-day delivery. Roses, bilva & Baidyanath puja flowers to Nandan Pahar, Station Road & all areas. From ₹399.",
    h1: "Flower Delivery in Deoghar",
    metaKeyword: "flower delivery in Deoghar, online flower delivery Deoghar, same day flower delivery Deoghar, florist Deoghar Jharkhand Baidyanath",
    footerContent: `<h2>Flower Delivery in Deoghar — Baidyanath Dham, the Jyotirlinga of Jharkhand</h2>
<p>Deoghar is the most sacred city in Jharkhand — the site of the Baidyanath Dham temple, one of the twelve Jyotirlinga shrines of Shiva, making it one of the most important Hindu pilgrimage sites in India. The Shravani Mela (Kanwar Yatra) held here during the Hindu month of Shravan (July-August) is one of India's largest religious gatherings — millions of devotees called Kanwariyas carry Ganga water from Sultanganj (115 km away) on foot and offer it at the Baidyanath Shivalinga. The city receives pilgrims year-round but peaks to its maximum during Shravan. Flowers — especially bilva leaves (bael), marigolds, dhatura, and tuberose — are integral to the Baidyanath puja tradition. RedHeart delivers fresh flowers across Deoghar with same-day and midnight delivery, starting at ₹399.</p>
<p>Nandan Pahar (a hill with a temple and amusement park) and Station Road are the main areas. The Baidyanath Dham temple complex is the spiritual heart around which the city functions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoghar, Jharkhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nandan Pahar, Station Road, Baidyanath Dham area, Mohanpur Road, Jasidih Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Baidyanath Dham puja flowers in Deoghar?", answer: "Yes! RedHeart delivers bilva leaves, marigolds, dhatura, and tuberose for Baidyanath Dham puja offerings across Deoghar." },
      { question: "Is same-day flower delivery available in Deoghar?", answer: "Yes, RedHeart delivers same-day to Nandan Pahar, Station Road, Baidyanath area, and all Deoghar zones." },
      { question: "Is midnight delivery available in Deoghar?", answer: "Yes, midnight delivery is available across Deoghar." }
    ]
  },
  "sikar": {
    cityName: "Sikar",
    metaTitle: "Flower Delivery in Sikar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Sikar with same-day delivery. Roses, marigolds & bouquets to Fatehpur Road, Losal Road, New Colony & all areas. From ₹399.",
    h1: "Flower Delivery in Sikar",
    metaKeyword: "flower delivery in Sikar, online flower delivery Sikar, same day flower delivery Sikar, florist Sikar Rajasthan Shekhawati",
    footerContent: `<h2>Flower Delivery in Sikar — The Business Capital of Shekhawati</h2>
<p>Sikar is the commercial capital of the Shekhawati region — the historical zone of northern Rajasthan between the Aravalli ranges, known for its extraordinary havelis (merchant mansions) painted with elaborate frescoes. The Shekhawati havelis — found in Sikar, Jhunjhunu, Nawalgarh, Mandawa, and dozens of smaller towns — represent one of the finest outdoor galleries of folk art in the world, their facades covered with mythological scenes, portraits, hunting scenes, and later, images of trains and automobiles as the merchants of Shekhawati returned from Calcutta and Bombay with new images. Sikar's business families (Marwari business dynasties trace their roots to Shekhawati) built many of these frescoed mansions with the wealth from their trading networks. RedHeart delivers fresh flowers across Sikar with same-day and midnight delivery, starting at ₹399.</p>
<p>Fatehpur Road and the New Colony areas are the modern residential zones. The city's business families celebrate weddings, Diwali, and Navratri with generous flower traditions typical of Marwari gifting culture.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sikar, Rajasthan</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehpur Road, Losal Road, New Colony, Station Road, Nimkathana Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Sikar?", answer: "Yes, RedHeart delivers same-day to Fatehpur Road, New Colony, and all major Sikar areas." },
      { question: "Does RedHeart deliver Navratri and Diwali flowers in Sikar?", answer: "Yes! RedHeart delivers marigolds, roses, and festive arrangements for Navratri and Diwali celebrations in Sikar." },
      { question: "Is midnight delivery available in Sikar?", answer: "Yes, midnight delivery is available across Sikar." }
    ]
  },
  "kanchipuram": {
    cityName: "Kanchipuram",
    metaTitle: "Flower Delivery in Kanchipuram | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kanchipuram with same-day delivery. Roses, marigolds & jasmine for Varadaraja, Kamakshi temples & all areas. From ₹399.",
    h1: "Flower Delivery in Kanchipuram",
    metaKeyword: "flower delivery in Kanchipuram, online flower delivery Kanchipuram, same day flower delivery Kanchipuram, florist Kanchipuram Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Kanchipuram — City of the Thousand Temples and the Golden Silk Saree</h2>
<p>Kanchipuram is one of the seven sacred cities of Hinduism (Sapta Puri) and one of the ancient capitals of the Pallava kingdom — the dynasty that built the Shore Temple at Mahabalipuram and patronised Dravidian architecture at its finest. The city has over 1000 temples (earning it the name "City of a Thousand Temples"), and the Varadaraja Perumal temple (Vishnu), the Ekambareswarar temple (Shiva), and the Kamakshi Amman temple (the goddess Kamakshi, worshipped as the supreme power) are the three most sacred. Kanchipuram is also world-famous for its silk sarees — the Kanchipuram silk (Kanjivaram silk) is considered the finest handloom silk in India, woven with pure gold and silver zari thread and worn at every South Indian wedding. RedHeart delivers fresh flowers across Kanchipuram with same-day and midnight delivery, starting at ₹399.</p>
<p>The old temple town and Gandhi Road are the commercial and pilgrimage zones. Flower demand in Kanchipuram is temple-driven and enormous — jasmine, marigolds, and lotus for the daily puja of its thousand temples.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanchipuram, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Road, Temple Town, Varadaraja area, Kamakshi area, Sriperumbudur Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kanchipuram?", answer: "Yes, RedHeart delivers same-day to Gandhi Road, Varadaraja temple area, Kamakshi area, and all Kanchipuram zones." },
      { question: "Can I order jasmine for Kanchipuram temple puja?", answer: "Yes! RedHeart delivers jasmine garlands, marigolds, and lotus for Varadaraja, Ekambareswarar, and Kamakshi temple puja in Kanchipuram." },
      { question: "Is midnight delivery available in Kanchipuram?", answer: "Yes, midnight delivery is available across Kanchipuram." }
    ]
  },
  "ramagundam": {
    cityName: "Ramagundam",
    metaTitle: "Flower Delivery in Ramagundam | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ramagundam with same-day delivery. Roses, marigolds & bouquets to Jyothinagar, NTPC Township, Godavarikhani & all areas. From ₹399.",
    h1: "Flower Delivery in Ramagundam",
    metaKeyword: "flower delivery in Ramagundam, online flower delivery Ramagundam, same day flower delivery Ramagundam, florist Ramagundam Telangana",
    footerContent: `<h2>Flower Delivery in Ramagundam — The Power City on the Godavari</h2>
<p>Ramagundam is Telangana's industrial powerhouse — the city is home to the NTPC Ramagundam Super Thermal Power Station, one of India's largest coal-based power plants, and the Singareni Collieries coal mining complex. The Godavari river flows past Ramagundam, and the Ramagundam Barrage on the river is a significant water management infrastructure. The city's large NTPC township (Jyothinagar) is a well-planned residential zone with its own schools, hospitals, and parks — a characteristic feature of public sector power plant towns. Godavarikhani, adjacent to Ramagundam, is the coalmining town. RedHeart delivers fresh flowers across Ramagundam with same-day and midnight delivery, starting at ₹399.</p>
<p>Jyothinagar (NTPC Township) and the Godavarikhani areas are the main residential zones. The Telugu community here celebrates Ugadi, Bonalu, and Bathukamma (the unique Telangana flower festival, where women create elaborate flower pyramids using seasonal flowers) with great enthusiasm.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramagundam, Telangana</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jyothinagar, NTPC Township, Godavarikhani, Jagannadhpur, Yellareddynagar, BHEL area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Ramagundam?", answer: "Yes, RedHeart delivers same-day to Jyothinagar, NTPC Township, Godavarikhani, and all major Ramagundam areas." },
      { question: "Does RedHeart deliver Bathukamma flowers in Ramagundam?", answer: "Yes! RedHeart delivers tangedu (senna), marigolds, and seasonal flowers for Bathukamma celebrations across Ramagundam." },
      { question: "Is midnight delivery available in Ramagundam?", answer: "Yes, midnight delivery is available across Ramagundam." }
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
  console.log("\nDone — batch 17 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
