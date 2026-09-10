/**
 * Batch 12 — Bikaner, Bhavnagar, Jamnagar, Junagadh, Gandhinagar,
 *             Shimla, Srinagar (already done? check), Gangtok, Shillong, Imphal,
 *             Agartala, Siliguri, Durgapur, Asansol, Howrah
 * node scripts/seo-city-flowers-12.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bikaner": {
    cityName: "Bikaner",
    metaTitle: "Flower Delivery in Bikaner | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bikaner with same-day delivery. Roses, marigolds & bouquets to Rani Bazar, Station Road, Shastri Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Bikaner",
    metaKeyword: "flower delivery in Bikaner, online flower delivery Bikaner, same day flower delivery Bikaner, florist Bikaner Rajasthan",
    footerContent: `<h2>Flower Delivery in Bikaner — The Camel City in the Thar Desert</h2>
<p>Bikaner sits deep in the Thar Desert, surrounded by the golden sands of Rajasthan's most arid landscape. It was founded in 1488 by Rao Bika, a Rathore prince from Jodhpur, and grew to be one of the great camel-trade cities on the Silk Road route between Central Asia and the Indian subcontinent. The Junagarh Fort — built between 1589 and 1594 — is one of the few major Rajasthan forts never captured in battle, and its Anup Mahal and Karan Mahal interiors are among the finest examples of Rajput-Mughal composite art. Bikaner's famous Bikaneri bhujia (spiced gram flour noodles) was created here and is now exported across the world; the Haldiram family traces its origins to a Bikaner sweet maker. RedHeart delivers fresh flowers across Bikaner with same-day and midnight delivery, starting at ₹399.</p>
<p>Rani Bazar and Station Road are Bikaner's main commercial corridors. Shastri Nagar, Nehru Nagar, and Gandhi Colony are residential zones. The desert climate means that air-conditioned cold-chain storage is essential for keeping flowers fresh in Bikaner's summers — RedHeart's local delivery partners maintain climate-controlled storage so your blooms arrive as fresh as they left our hub.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bikaner, Rajasthan</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rani Bazar, Station Road, Shastri Nagar, Nehru Nagar, Gandhi Colony, Karni Nagar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Bikaner?", answer: "Yes, RedHeart delivers same-day across Bikaner including Rani Bazar, Station Road, Shastri Nagar, and all major areas." },
      { question: "How does RedHeart keep flowers fresh in Bikaner's hot desert climate?", answer: "RedHeart uses climate-controlled cold-chain storage and fast delivery to ensure flowers stay fresh in Bikaner's heat. Our local partners store blooms at optimal temperatures right up to delivery." },
      { question: "Is midnight delivery available in Bikaner?", answer: "Yes, midnight delivery is available across Bikaner. Order before 9 PM." }
    ]
  },
  "bhavnagar": {
    cityName: "Bhavnagar",
    metaTitle: "Flower Delivery in Bhavnagar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bhavnagar with same-day delivery. Roses, bouquets to Ghogha Circle, Waghawadi Road, Crescent Circle & all areas. From ₹399.",
    h1: "Flower Delivery in Bhavnagar",
    metaKeyword: "flower delivery in Bhavnagar, online flower delivery Bhavnagar, same day flower delivery Bhavnagar, florist Bhavnagar Gujarat",
    footerContent: `<h2>Flower Delivery in Bhavnagar — The Gateway to Saurashtra's Spiritual Heritage</h2>
<p>Bhavnagar is the main port city of the Saurashtra peninsula in Gujarat — a city that has always looked outward to the sea and inward to its deep Jain and Vaishnava traditions simultaneously. The city was founded in 1724 by Bhavsinhji Gohil of the Gohil Rajput clan and remained one of British India's most progressive princely states. Bhavnagar was the first princely state to voluntarily accede to the Indian Union in 1947, under the leadership of Krishnakumar Sinhji. The city is the birthplace of Gaurishankar Udayashankar Oza (the Divan who administered Bhavnagar with remarkable efficiency) and is a major center of Jain culture — the Takhteshwar temple on a hill overlooking the sea is one of the city's iconic landmarks. RedHeart delivers fresh flowers across Bhavnagar with same-day and midnight delivery, starting at ₹399.</p>
<p>Waghawadi Road and Crescent Circle are the city's main commercial arteries. Ghogha Circle and Amba Chowk are residential hubs. Bhavnagar's Jain community has specific puja flower requirements — marigolds, tuberose, and lotus — that differ from mainstream gifting patterns, and RedHeart maintains appropriate stock year-round.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhavnagar, Gujarat</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghogha Circle, Waghawadi Road, Crescent Circle, Amba Chowk, Nari Road, Bhavna Colony</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Bhavnagar?", answer: "Yes, RedHeart delivers same-day to Waghawadi Road, Ghogha Circle, Crescent Circle, and all Bhavnagar areas." },
      { question: "Does RedHeart have Jain puja flowers in Bhavnagar?", answer: "Yes! RedHeart stocks marigolds, lotus, and tuberose appropriate for Jain puja offerings in Bhavnagar." },
      { question: "Is midnight delivery available in Bhavnagar?", answer: "Yes, midnight delivery is available across Bhavnagar." }
    ]
  },
  "jamnagar": {
    cityName: "Jamnagar",
    metaTitle: "Flower Delivery in Jamnagar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jamnagar with same-day delivery. Roses, bouquets to Digvijay Plot, Bedi Gate, Ranjit Sagar Road & all areas. From ₹399.",
    h1: "Flower Delivery in Jamnagar",
    metaKeyword: "flower delivery in Jamnagar, online flower delivery Jamnagar, same day flower delivery Jamnagar, florist Jamnagar Gujarat",
    footerContent: `<h2>Flower Delivery in Jamnagar — The Brass City of Saurashtra</h2>
<p>Jamnagar occupies a unique place in modern India — it is home to the world's largest oil refinery complex at Jamnagar, operated by Reliance Industries, which processes more crude oil in a single location than any other refinery on earth. The city also gave the world Ranjit Singh (Jam Ranjitsinhji), the cricket legend who played for England and is credited with inventing the leg glance, and after whom the Ranji Trophy — India's domestic cricket championship — is named. The Lakhota Palace on the Lakhota Lake in the city's heart is a beautiful example of Rajput architecture. Jamnagar is also known as the "Brass City" — its craftspeople have worked in brass for centuries, producing everything from utensils to musical instruments. RedHeart delivers fresh flowers across Jamnagar with same-day and midnight delivery, starting at ₹399.</p>
<p>Digvijay Plot is Jamnagar's most modern residential and commercial area. Bedi Gate is the old city entrance and commercial hub. Ranjit Sagar Road (named for the legendary cricketer) and Shastri Nagar are established residential zones. Navratri celebrations in Jamnagar bring the city's Gujarati character fully alive — nine nights of garba with fresh flower decorations everywhere.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamnagar, Gujarat</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Digvijay Plot, Bedi Gate, Ranjit Sagar Road, Shastri Nagar, Indira Nagar, Reliance Township</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Jamnagar?", answer: "Yes, RedHeart delivers same-day to Digvijay Plot, Bedi Gate, Shastri Nagar, and all Jamnagar areas." },
      { question: "Does RedHeart deliver to the Reliance Township in Jamnagar?", answer: "Yes! RedHeart delivers to the Reliance Township and all residential areas in and around Jamnagar." },
      { question: "Is midnight delivery available in Jamnagar?", answer: "Yes, midnight delivery is available across Jamnagar." }
    ]
  },
  "junagadh": {
    cityName: "Junagadh",
    metaTitle: "Flower Delivery in Junagadh | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Junagadh with same-day delivery. Roses, bouquets to Kalwa Chowk, Ranavav Road, MG Road & all areas. From ₹399.",
    h1: "Flower Delivery in Junagadh",
    metaKeyword: "flower delivery in Junagadh, online flower delivery Junagadh, same day flower delivery Junagadh, florist Junagadh Gujarat",
    footerContent: `<h2>Flower Delivery in Junagadh — At the Foot of the Sacred Girnar</h2>
<p>Junagadh sits at the base of Mount Girnar — the sacred hill that Jains revere for the footprints of Neminath (22nd Tirthankara) on its summit, and that Hindus honour for its temples to Amba Mata and Dattatreya. The Uparkot fort — built more than 2300 years ago on a plateau above the modern city — has never been taken in battle, having withstood sixteen sieges over the centuries. The famous Ashoka Edicts inscribed at Junagadh (the Girnar rock inscriptions, dating to approximately 250 BCE) are among the oldest inscriptions in India. Junagadh is also the jumping-off point for the Gir National Park, the world's last remaining habitat of the Asiatic lion. RedHeart delivers fresh flowers across Junagadh with same-day and midnight delivery, starting at ₹399.</p>
<p>Kalwa Chowk is Junagadh's commercial heart. Ranavav Road, MG Road, and the areas near Junagadh Agricultural University serve the city's professional and student population. The Bhavnath Fair at the foot of Girnar during Mahashivratri creates enormous flower demand annually.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Junagadh, Gujarat</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalwa Chowk, Ranavav Road, MG Road, University area, Girnar Chowk, Dhal Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Junagadh?", answer: "Yes, RedHeart delivers same-day to Kalwa Chowk, Ranavav Road, MG Road, and all Junagadh areas." },
      { question: "Does RedHeart deliver Mahashivratri flowers in Junagadh?", answer: "Yes! RedHeart delivers marigolds, lotus, and dhatura for Mahashivratri and the Bhavnath Fair at Girnar, Junagadh." },
      { question: "Is midnight delivery available in Junagadh?", answer: "Yes, midnight delivery is available across Junagadh." }
    ]
  },
  "gandhinagar": {
    cityName: "Gandhinagar",
    metaTitle: "Flower Delivery in Gandhinagar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Gandhinagar with same-day delivery. Roses, bouquets to Sector 1-30, Koba, Infocity & all Gandhinagar areas. From ₹399.",
    h1: "Flower Delivery in Gandhinagar",
    metaKeyword: "flower delivery in Gandhinagar, online flower delivery Gandhinagar, same day flower delivery Gandhinagar, florist Gandhinagar Gujarat",
    footerContent: `<h2>Flower Delivery in Gandhinagar — Gujarat's Planned Green Capital</h2>
<p>Gandhinagar is Gujarat's state capital and one of India's most meticulously planned cities — built in the 1960s on a grid of numbered sectors along the Sabarmati river, with a higher tree-to-person ratio than almost any other Indian city. Unlike most Indian capitals which grew organically, Gandhinagar was designed from scratch, and the greenery of its broad sector roads and parks gives it an unexpectedly serene quality for a capital city. The Akshardham temple on the Sabarmati's banks — the original Akshardham, built in 1992, before the larger Delhi version — is one of India's most visited temple complexes, drawing millions annually. GIFT City (Gujarat International Finance Tec-City) is establishing Gandhinagar as India's first operational smart city and international financial services centre. RedHeart delivers fresh flowers across Gandhinagar with same-day and midnight delivery, starting at ₹399.</p>
<p>The sector system (Sectors 1–30) defines Gandhinagar's residential geography. Infocity is the IT hub, home to companies like TCS, Wipro, and Infosys. Koba, on the edge of the city, is a rapidly growing residential zone. Government employees, IT professionals, and GIFT City workers form Gandhinagar's gifting demographic.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhinagar, Gujarat</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All Sectors (1–30), Koba, Infocity, GIFT City, Akshardham area, Pethapur Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Gandhinagar sectors?", answer: "Yes, RedHeart delivers same-day to all Gandhinagar sectors, Infocity, GIFT City, Koba, and surrounding areas." },
      { question: "Can I order flowers for Akshardham Gandhinagar puja?", answer: "Yes! RedHeart delivers fresh flowers for Akshardham temple offerings and home puja across Gandhinagar." },
      { question: "Is midnight delivery available in Gandhinagar?", answer: "Yes, midnight delivery is available across Gandhinagar sectors and Infocity." }
    ]
  },
  "shimla": {
    cityName: "Shimla",
    metaTitle: "Flower Delivery in Shimla | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Shimla with same-day delivery. Roses, lilies & bouquets to Mall Road, Sanjauli, Lakkar Bazar & all areas. From ₹399.",
    h1: "Flower Delivery in Shimla",
    metaKeyword: "flower delivery in Shimla, online flower delivery Shimla, same day flower delivery Shimla, florist Shimla Himachal Pradesh",
    footerContent: `<h2>Flower Delivery in Shimla — The Summer Capital's Alpine Blooms</h2>
<p>Shimla was the summer capital of British India — from 1864 until Independence, the entire Government of India (along with its vast bureaucracy) moved to Shimla's cool hillside vistas every summer, escaping the scorching heat of Calcutta and later Delhi. The city sits at 2,200 metres above sea level in the lower Himalayas, and its characteristic Victorian Gothic architecture — the Viceregal Lodge, Christ Church, the Gaiety Theatre — gives it an atmosphere utterly unlike any other Indian city. The Mall Road, where motorcars are banned and pedestrians stroll past colonial-era shops, is one of India's most pleasant urban promenades. Himachal Pradesh's capital is also the gateway to the Kinnaur valley, Spiti, and the apple orchards that produce some of India's finest fruit. RedHeart delivers fresh flowers across Shimla with same-day and midnight delivery, starting at ₹399.</p>
<p>Mall Road and Ridge are Shimla's iconic public spaces. Sanjauli, Kasumpti, and Dhalli are residential areas extending down the ridge. Lakkar Bazar (the wood crafts market) and the Lower Bazar serve the city's daily commercial needs. Shimla's alpine flowers — rhododendrons, irises, dahlias — grow wild in the surrounding hills; RedHeart adds premium cultivated roses and lilies to the mix for special occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shimla, Himachal Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mall Road, Ridge, Sanjauli, Kasumpti, Lakkar Bazar, Dhalli, Vikasnagar, Totu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Shimla?", answer: "Yes, RedHeart delivers same-day to Mall Road, Sanjauli, Kasumpti, Lakkar Bazar, and all Shimla areas." },
      { question: "Do flowers stay fresh in Shimla's cold weather?", answer: "Absolutely! Shimla's cool climate actually helps flowers stay fresh longer. RedHeart delivers blooms that last even longer at Shimla's altitude." },
      { question: "Is midnight delivery available in Shimla?", answer: "Yes, midnight delivery is available across Shimla." }
    ]
  },
  "gangtok": {
    cityName: "Gangtok",
    metaTitle: "Flower Delivery in Gangtok | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Gangtok with same-day delivery. Roses, orchids & bouquets to MG Marg, Tadong, Ranipool & all Gangtok areas. From ₹399.",
    h1: "Flower Delivery in Gangtok",
    metaKeyword: "flower delivery in Gangtok, online flower delivery Gangtok, same day flower delivery Gangtok, florist Gangtok Sikkim",
    footerContent: `<h2>Flower Delivery in Gangtok — Sikkim's Mountain Capital of Orchids and Prayer Flags</h2>
<p>Gangtok is the capital of Sikkim — India's smallest state by area, tucked between Nepal, Tibet, and Bhutan in the eastern Himalayas, with Kanchenjunga (the world's third highest peak) watching over its western skyline on clear days. The city sits on a ridge at 1,650 metres, and its culture is a remarkable blend of Lepcha, Bhutia, and Nepali traditions layered over a deep Tibetan Buddhist heritage. The Rumtek Monastery, the Namgyal Institute of Tibetology, and the dozens of gompa (monasteries) visible from Gangtok's hillsides make Buddhist festivals among the most visually spectacular in India. Sikkim is famous for its cardamom (India's top producer), its large cardamom industry in the eastern hills, and its spectacular varieties of orchids — over 500 orchid species grow in Sikkim's forests. RedHeart delivers fresh flowers across Gangtok with same-day and midnight delivery, starting at ₹399.</p>
<p>MG Marg (Mahatma Gandhi Marg) is Gangtok's car-free pedestrian zone and social heart — lined with cafes, shops, and the Dragon Centre. Tadong is the commercial and residential area below the ridge. Ranipool is the gateway town on the highway from the plains. Losar (Tibetan New Year), Buddha Purnima, and Dasain (the Nepali version of Navratri) are Gangtok's major flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gangtok, Sikkim</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">MG Marg, Tadong, Ranipool, Deorali, Sichey, Arithang, Ganesh Tok area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Gangtok?", answer: "Yes, RedHeart delivers same-day to MG Marg, Tadong, Ranipool, Deorali, and all major Gangtok areas." },
      { question: "Does RedHeart deliver orchids in Gangtok?", answer: "Yes! Sikkim is India's orchid state. RedHeart delivers orchid arrangements and fresh orchids across Gangtok." },
      { question: "Is midnight delivery available in Gangtok?", answer: "Yes, midnight delivery is available across Gangtok." }
    ]
  },
  "shillong": {
    cityName: "Shillong",
    metaTitle: "Flower Delivery in Shillong | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Shillong with same-day delivery. Roses, orchids & bouquets to Police Bazar, Laitumkhrah, Mawlai & all areas. From ₹399.",
    h1: "Flower Delivery in Shillong",
    metaKeyword: "flower delivery in Shillong, online flower delivery Shillong, same day flower delivery Shillong, florist Shillong Meghalaya",
    footerContent: `<h2>Flower Delivery in Shillong — The Scotland of the East and Its Love for Blooms</h2>
<p>Shillong has been called the Scotland of the East since the British colonial period — its rolling pine-covered hills, cool misty climate, and the Umiam lake on its outskirts bearing resemblance (with considerable imagination) to the Scottish highlands. Meghalaya (meaning "abode of the clouds") receives some of the world's highest annual rainfall — nearby Mawsynram and Cherrapunji hold world records for precipitation — and this constant moisture makes Shillong's natural vegetation lush year-round. The city is the cultural capital of the Khasi and Jaintia peoples, and it is famous across India for its rock music scene — Shillong produces more rock bands per capita than anywhere else in India, and the annual Shillong Autumn Festival is one of northeast India's biggest music events. RedHeart delivers fresh flowers across Shillong with same-day and midnight delivery, starting at ₹399.</p>
<p>Police Bazar is Shillong's commercial centre — the main shopping district where most of the city's commerce happens. Laitumkhrah and Mawlai are residential areas. The Ward's Lake and the Lady Hydari Park are urban green spaces that make Shillong uniquely pleasant. Orchids — Meghalaya's state flower — are available through RedHeart for special occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shillong, Meghalaya</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Police Bazar, Laitumkhrah, Mawlai, Rynjah, Nongthymmai, Cantonment, Malki</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Shillong?", answer: "Yes, RedHeart delivers same-day to Police Bazar, Laitumkhrah, Mawlai, and all major Shillong areas." },
      { question: "Does RedHeart deliver orchids in Shillong?", answer: "Yes! Orchids are Meghalaya's pride. RedHeart delivers orchid arrangements across Shillong." },
      { question: "Is midnight delivery available in Shillong?", answer: "Yes, midnight delivery is available across Shillong." }
    ]
  },
  "imphal": {
    cityName: "Imphal",
    metaTitle: "Flower Delivery in Imphal | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Imphal with same-day delivery. Roses, lotus & bouquets to Paona Bazar, Thangal Bazar, Singjamei & all areas. From ₹399.",
    h1: "Flower Delivery in Imphal",
    metaKeyword: "flower delivery in Imphal, online flower delivery Imphal, same day flower delivery Imphal, florist Imphal Manipur",
    footerContent: `<h2>Flower Delivery in Imphal — Manipur's Capital in the Valley of Jewels</h2>
<p>Imphal is the capital of Manipur — a state whose name translates to "jewelled land" and whose ancient Meitei civilisation developed one of the most sophisticated performing arts traditions in South Asia: Manipuri classical dance, one of India's eight classical dance forms, evolved here and is characterised by its lyrical, graceful movements rooted in Vaishnavite devotion. Imphal's Loktak Lake (southeast of the city) is India's largest freshwater lake, home to the unique phumdis (floating islands of vegetation) and the Sangai (brow-antlered deer), Manipur's state animal. The Ima Keithel (Women's Market) in central Imphal is believed to be the world's largest market run entirely by women — thousands of Ima (mothers) have traded here for centuries. RedHeart delivers fresh flowers across Imphal with same-day and midnight delivery, starting at ₹399.</p>
<p>Paona Bazar and Thangal Bazar are Imphal's main commercial zones. Singjamei is a major residential area. The Radha-Krishna devotional tradition is very strong in Manipur — the Govindajee temple in Imphal, the royal temple of the Meitei kings, sees enormous floral offerings during Holi (known here as Yaosang) and Janmashtami.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Imphal, Manipur</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Paona Bazar, Thangal Bazar, Singjamei, Porompat, Langol, Keirapati, Kakching Gate</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Imphal?", answer: "Yes, RedHeart delivers same-day to Paona Bazar, Thangal Bazar, Singjamei, and all major Imphal areas." },
      { question: "Can I order Yaosang (Holi) flowers in Imphal?", answer: "Yes! RedHeart delivers roses, marigolds, and festival flower arrangements for Yaosang and Janmashtami celebrations in Imphal." },
      { question: "Is midnight delivery available in Imphal?", answer: "Yes, midnight delivery is available across Imphal." }
    ]
  },
  "agartala": {
    cityName: "Agartala",
    metaTitle: "Flower Delivery in Agartala | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Agartala with same-day delivery. Roses, marigolds & bouquets to Agartala Bazar, Battala, Krishnanagar & all areas. From ₹399.",
    h1: "Flower Delivery in Agartala",
    metaKeyword: "flower delivery in Agartala, online flower delivery Agartala, same day flower delivery Agartala, florist Agartala Tripura",
    footerContent: `<h2>Flower Delivery in Agartala — Tripura's Capital Between Bangladesh and the Barak Valley</h2>
<p>Agartala is one of India's most uniquely positioned capitals — the city is nearly surrounded by Bangladesh, with the international border running just 2 kilometres from the city centre. Tripura's capital is the second largest city in northeast India (after Guwahati), and it sits on a flat plain in stark contrast to most northeast cities, which are hilly. The Ujjayanta Palace — built by Maharaja Radha Kishore Manikya in 1901 — is Agartala's centrepiece, an Indo-Saracenic structure with Mughal-style domes reflected in its front water tanks. Agartala is also known for its bamboo crafts, its Bengali-dominated culture (Tripura has a very large Bengali population), and its abundant production of pineapples and natural rubber. RedHeart delivers fresh flowers across Agartala with same-day and midnight delivery, starting at ₹399.</p>
<p>Battala is Agartala's main market. Krishnanagar and Ramnagar are the residential areas. Durga Puja in Agartala (celebrated with the same enthusiasm as in West Bengal) is the city's most significant flower occasion — thousands of pandals need fresh marigolds, lotus, and tuberose for 5 days of elaborate worship.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agartala, Tripura</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Battala, Krishnanagar, Ramnagar, Agartala Bazar, Dhaleswar, Barjala, VIP Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Agartala?", answer: "Yes, RedHeart delivers same-day to Battala, Krishnanagar, Ramnagar, and all major Agartala areas." },
      { question: "Does RedHeart deliver Durga Puja flowers in Agartala?", answer: "Yes! RedHeart delivers marigolds, lotus, and tuberose for Durga Puja pandals and home puja across Agartala." },
      { question: "Is midnight delivery available in Agartala?", answer: "Yes, midnight delivery is available across Agartala." }
    ]
  },
  "siliguri": {
    cityName: "Siliguri",
    metaTitle: "Flower Delivery in Siliguri | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Siliguri with same-day delivery. Roses, marigolds & bouquets to Bidhan Market, Pradhan Nagar, Hakimpara & all areas. From ₹399.",
    h1: "Flower Delivery in Siliguri",
    metaKeyword: "flower delivery in Siliguri, online flower delivery Siliguri, same day flower delivery Siliguri, florist Siliguri West Bengal",
    footerContent: `<h2>Flower Delivery in Siliguri — The Chicken's Neck City and Gateway to Northeast India</h2>
<p>Siliguri occupies one of the most strategically significant positions in India — it sits in the Siliguri Corridor (the "Chicken's Neck"), the narrow strip of land just 22 kilometres wide at its tightest point that connects the northeast states to mainland India, flanked by Nepal to the west, Bangladesh to the south, and Bhutan to the north. Every supply chain for northeast India passes through Siliguri. The city is also the commercial hub for Darjeeling's famous tea trade — all Darjeeling Tea leaves the hills through Siliguri — and the gateway for tourists heading to the hill stations of Darjeeling, Gangtok, and Kalimpong. RedHeart delivers fresh flowers across Siliguri with same-day and midnight delivery, starting at ₹399.</p>
<p>Bidhan Market and Hakimpara are Siliguri's bustling commercial zones. Pradhan Nagar is a major residential area. Sevoke Road (NH10) and Hill Cart Road are the two main arteries. The mix of Bengali, Nepali, Marwari, and northeast Indian communities in Siliguri creates a diverse gifting calendar — Durga Puja, Tihar (Nepali Diwali), Chhath, and Christmas are all celebrated here with flowers.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siliguri, West Bengal</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bidhan Market, Pradhan Nagar, Hakimpara, Sevoke Road, Hill Cart Road, Bagdogra area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Siliguri?", answer: "Yes, RedHeart delivers same-day to Bidhan Market, Pradhan Nagar, Hakimpara, Sevoke Road, and all Siliguri areas." },
      { question: "Does RedHeart deliver for Tihar (Nepali Diwali) in Siliguri?", answer: "Yes! Siliguri's large Nepali community celebrates Tihar. RedHeart delivers marigold garlands and flower arrangements for Tihar celebrations across the city." },
      { question: "Is midnight delivery available in Siliguri?", answer: "Yes, midnight delivery is available across Siliguri." }
    ]
  },
  "durgapur": {
    cityName: "Durgapur",
    metaTitle: "Flower Delivery in Durgapur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Durgapur with same-day delivery. Roses, marigolds & bouquets to City Centre, Benachity, Bidhannagar & all areas. From ₹399.",
    h1: "Flower Delivery in Durgapur",
    metaKeyword: "flower delivery in Durgapur, online flower delivery Durgapur, same day flower delivery Durgapur, florist Durgapur West Bengal",
    footerContent: `<h2>Flower Delivery in Durgapur — Steel City with a Bengali Heart</h2>
<p>Durgapur is one of India's planned industrial cities — built in the 1950s around the Durgapur Steel Plant (now part of SAIL, the Steel Authority of India), it was part of the Nehruvian vision of heavy industrialisation that would transform post-Independence India. The city was designed by urban planners who modelled it in part on the British New Towns — wide roads, sectoral planning, workers' colonies — giving it an unusually orderly character for a West Bengal industrial city. The Durgapur Barrage on the Damodar river is an important water management project. Despite its industrial identity, Durgapur is thoroughly Bengali in its cultural soul — Durga Puja is celebrated with enormous pandals and the devotion that Bengal brings to its most beloved festival. RedHeart delivers fresh flowers across Durgapur with same-day and midnight delivery, starting at ₹399.</p>
<p>City Centre is Durgapur's planned commercial and social hub. Benachity and Bidhannagar are established residential areas. The Steel Plant Township has its own residents with consistent gifting demand. Durga Puja pandal flowers and personal occasion gifting are both major demand categories.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Durgapur, West Bengal</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">City Centre, Benachity, Bidhannagar, Steel Plant Township, A-Zone, B-Zone, C-Zone</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Durgapur?", answer: "Yes, RedHeart delivers same-day to City Centre, Benachity, Bidhannagar, and all major Durgapur areas including the Steel Plant Township." },
      { question: "Does RedHeart deliver Durga Puja flowers in Durgapur?", answer: "Yes! RedHeart delivers marigolds, lotus, and tuberose for Durga Puja pandals and home puja across Durgapur." },
      { question: "Is midnight delivery available in Durgapur?", answer: "Yes, midnight delivery is available across Durgapur." }
    ]
  },
  "asansol": {
    cityName: "Asansol",
    metaTitle: "Flower Delivery in Asansol | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Asansol with same-day delivery. Roses, marigolds & bouquets to Burnpur, Raniganj, GT Road & all areas. From ₹399.",
    h1: "Flower Delivery in Asansol",
    metaKeyword: "flower delivery in Asansol, online flower delivery Asansol, same day flower delivery Asansol, florist Asansol West Bengal",
    footerContent: `<h2>Flower Delivery in Asansol — The Coal Capital of West Bengal</h2>
<p>Asansol is West Bengal's second largest city and the heart of the Raniganj-Jharia coal belt — one of India's most important coal-producing regions, which powered the country's industrialisation in the 19th and 20th centuries. The city lies on the Grand Trunk Road, the historic highway built by Sher Shah Suri that runs from Kabul to Chittagong, and was a significant station on the East Indian Railway from its earliest days. Asansol is also home to Burnpur, the site of the IISCO Steel Plant (Indian Iron and Steel Company), and the Chittaranjan Locomotive Works — the railway locomotive manufacturing plant — is in Chittaranjan, just outside the city. RedHeart delivers fresh flowers across Asansol with same-day and midnight delivery, starting at ₹399.</p>
<p>Burnpur and the areas along GT Road are the main commercial and residential zones. Raniganj (technically a separate municipality but functionally part of Asansol's urban agglomeration) has its own gifting economy. Asansol's Bengali community ensures enthusiastic Durga Puja, Kali Puja, and Saraswati Puja celebrations that drive significant flower demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Asansol, West Bengal</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Burnpur, Raniganj, GT Road areas, Kulti, Jamuria, Barabani, Chittaranjan Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Asansol?", answer: "Yes, RedHeart delivers same-day to Burnpur, Raniganj, GT Road areas, and all major Asansol zones." },
      { question: "Does RedHeart cover Burnpur area for flower delivery?", answer: "Yes! Burnpur is fully covered. RedHeart delivers to all addresses in Burnpur, Kulti, Jamuria, and the broader Asansol urban area." },
      { question: "Is midnight delivery available in Asansol?", answer: "Yes, midnight delivery is available across Asansol." }
    ]
  },
  "howrah": {
    cityName: "Howrah",
    metaTitle: "Flower Delivery in Howrah | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Howrah with same-day delivery. Roses, marigolds & bouquets to Howrah Bridge area, Shibpur, Liluah & all areas. From ₹399.",
    h1: "Flower Delivery in Howrah",
    metaKeyword: "flower delivery in Howrah, online flower delivery Howrah, same day flower delivery Howrah, florist Howrah West Bengal",
    footerContent: `<h2>Flower Delivery in Howrah — The Industrial Twin of Kolkata</h2>
<p>Howrah sits directly across the Hooghly river from Kolkata, connected by the iconic Howrah Bridge (Rabindra Setu) — the cantilever bridge that has been one of the most photographed structures in India since its completion in 1943. Howrah is one of India's most densely industrialised districts — it has been manufacturing everything from jute products to bicycles, from steel rolling to locomotive components for over 150 years. The Howrah station — India's largest and busiest railway terminus — receives and dispatches millions of passengers each year. Howrah's famous Mullick Ghat Flower Market (technically on the Kolkata side but accessible from Howrah across the bridge) is one of India's largest wholesale flower markets. RedHeart delivers fresh flowers across Howrah with same-day and midnight delivery, starting at ₹399.</p>
<p>Shibpur (home of the Indian Botanic Garden, which contains the famous 250-year-old Great Banyan Tree) and Liluah (an important railway workshop town) are Howrah's residential zones. The Botanic Garden area has educational institutions. Durga Puja, Kali Puja, and Saraswati Puja are Howrah's biggest flower occasions, matching Kolkata's enthusiasm.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Howrah, West Bengal</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shibpur, Liluah, Howrah Station area, Belur Math vicinity, Bali, Salanpur, Domjur</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Howrah?", answer: "Yes, RedHeart delivers same-day across Howrah including Shibpur, Liluah, Bali, and all major residential and commercial areas." },
      { question: "Does RedHeart deliver to Belur Math area in Howrah?", answer: "Yes! RedHeart delivers to Belur Math area and surrounding Howrah zones for puja occasions." },
      { question: "Is midnight delivery available in Howrah?", answer: "Yes, midnight delivery is available across Howrah." }
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
  console.log("\nDone — batch 12 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
