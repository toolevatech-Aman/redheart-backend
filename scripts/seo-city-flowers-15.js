/**
 * Batch 15 — Jamshedpur, Bokaro, Rourkela, Puri, Sambalpur,
 *             Kannur, Kottayam, Palakkad, Malappuram,
 *             Ujjain, Vrindavan, Ayodhya, Moradabad,
 *             Roorkee, Haldwani
 * node scripts/seo-city-flowers-15.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "jamshedpur": {
    cityName: "Jamshedpur",
    metaTitle: "Flower Delivery in Jamshedpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jamshedpur with same-day delivery. Roses, marigolds & bouquets to Bistupur, Sakchi, Kadma & all areas. From ₹399.",
    h1: "Flower Delivery in Jamshedpur",
    metaKeyword: "flower delivery in Jamshedpur, online flower delivery Jamshedpur, same day flower delivery Jamshedpur, florist Jamshedpur Jharkhand",
    footerContent: `<h2>Flower Delivery in Jamshedpur — Tata's Planned Steel City</h2>
<p>Jamshedpur is one of India's most remarkable cities — it is a city built entirely by a private company. Jamsetji Nusserwanji Tata, the founder of the Tata Group, chose this site at the confluence of the Subarnarekha and Kharkai rivers for his dream of an Indian steel industry. The Tata Iron and Steel Company (TISCO, now Tata Steel) established here in 1907 was India's first large steel plant, and for decades the company ran the city — its roads, hospitals, schools, parks, and electricity supply. The result is a city that looks, feels, and functions unlike most Indian industrial cities — planned, green, and clean. Tata Steel's headquarters are still here, and the city remains closely tied to the company's fortunes. Jamshedpur is also called "Steel City" or "Tatanagar." RedHeart delivers fresh flowers across Jamshedpur with same-day and midnight delivery, starting at ₹399.</p>
<p>Bistupur is Jamshedpur's main commercial district. Sakchi is the old commercial heart. Kadma and the Tata township areas are residential. The Tata corporate culture brings a professional population with consistent gifting for work anniversaries, birthdays, and personal milestones. Durga Puja in Jamshedpur is celebrated with the Bengali devotion of the many Bengali families who came to work in the steel plant.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamshedpur, Jharkhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bistupur, Sakchi, Kadma, Telco, Gamharia, Mango, Jugsalai</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Jamshedpur?", answer: "Yes, RedHeart delivers same-day across Jamshedpur including Bistupur, Sakchi, Kadma, Telco, and all major areas." },
      { question: "Does RedHeart deliver to Tata township areas in Jamshedpur?", answer: "Yes! RedHeart delivers to all Tata township residential areas including Kadma, Telco Colony, and surrounding zones." },
      { question: "Is midnight delivery available in Jamshedpur?", answer: "Yes, midnight delivery is available across Jamshedpur." }
    ]
  },
  "bokaro": {
    cityName: "Bokaro",
    metaTitle: "Flower Delivery in Bokaro | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bokaro with same-day delivery. Roses, marigolds & bouquets to Sector 1-12, City Centre & all Bokaro Steel City areas. From ₹399.",
    h1: "Flower Delivery in Bokaro",
    metaKeyword: "flower delivery in Bokaro, online flower delivery Bokaro, same day flower delivery Bokaro, florist Bokaro Steel City Jharkhand",
    footerContent: `<h2>Flower Delivery in Bokaro — The Soviet-Era Steel City of Jharkhand</h2>
<p>Bokaro Steel City is one of the largest integrated steel plants in Asia — built in the 1960s with Soviet technical assistance as part of Jawaharlal Nehru's vision for heavy industrialisation. The Bokaro Steel Plant (BSL), now part of SAIL, is Jharkhand's largest employer and the reason the city exists. Like Jamshedpur, Bokaro was purpose-built around its steel plant — the city's sector layout (sectors 1-12), its planned townships, its wide roads, and its housing colonies all reflect the rational planning of a company town. Chetan Bhagat, the bestselling author of "Five Point Someone," attended Bokaro Steel City's schools, and the novel's DPS setting is partly inspired by Bokaro's DPS (Delhi Public School). RedHeart delivers fresh flowers across Bokaro with same-day and midnight delivery, starting at ₹399.</p>
<p>The sector system defines Bokaro's geography — Sectors 4, 6, and 9 are the most active residential areas. City Centre is the main commercial hub. The steel plant's workforce includes families from across India, creating a diverse gifting calendar that includes Durga Puja, Chhath, Diwali, Eid, and Christmas.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bokaro, Jharkhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 1 through 12, City Centre, Chas, Chandankiyari Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Bokaro?", answer: "Yes, RedHeart delivers same-day to all Bokaro sectors, City Centre, Chas, and all major Bokaro Steel City areas." },
      { question: "Does RedHeart deliver Chhath Puja flowers in Bokaro?", answer: "Yes! RedHeart delivers marigolds, lotus, and tuberose for Chhath Puja across Bokaro Steel City." },
      { question: "Is midnight delivery available in Bokaro?", answer: "Yes, midnight delivery is available across Bokaro." }
    ]
  },
  "rourkela": {
    cityName: "Rourkela",
    metaTitle: "Flower Delivery in Rourkela | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Rourkela with same-day delivery. Roses, marigolds & bouquets to Uditnagar, Chhend, Panposh & all areas. From ₹399.",
    h1: "Flower Delivery in Rourkela",
    metaKeyword: "flower delivery in Rourkela, online flower delivery Rourkela, same day flower delivery Rourkela, florist Rourkela Odisha",
    footerContent: `<h2>Flower Delivery in Rourkela — The Steel City of Odisha</h2>
<p>Rourkela is Odisha's major industrial city — the Rourkela Steel Plant (RSP), built in the 1950s with West German technical collaboration, was one of three public sector steel plants established in Nehru's first five-year plans (alongside Bhilai and Durgapur). The city sits at the confluence of the Koel and Sankh rivers, and the Mandira Dam on the Sankh — the source of Rourkela's drinking water and one of its scenic attractions — was built alongside the steel plant. The NIT Rourkela (National Institute of Technology), located in the green campus of the plant township, is one of India's most prestigious engineering colleges. Rourkela's significant tribal population (Oraon, Munda, and Ho tribes) adds a rich indigenous cultural layer to the industrial landscape. RedHeart delivers fresh flowers across Rourkela with same-day and midnight delivery, starting at ₹399.</p>
<p>Uditnagar and Chhend are the main residential areas outside the steel plant township. Panposh is the city's oldest neighbourhood. The NIT campus generates academic occasion gifting. Durga Puja and Christmas (Rourkela has a significant Christian tribal population) are the main flower occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rourkela, Odisha</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Uditnagar, Chhend, Panposh, NIT campus, RSP Township, Birsa Munda area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Rourkela?", answer: "Yes, RedHeart delivers same-day to Uditnagar, Chhend, Panposh, NIT campus, and all major Rourkela areas." },
      { question: "Does RedHeart deliver Christmas flowers in Rourkela?", answer: "Yes! Rourkela's Christian community celebrates Christmas enthusiastically. RedHeart delivers Christmas flower arrangements and lily bouquets across Rourkela." },
      { question: "Is midnight delivery available in Rourkela?", answer: "Yes, midnight delivery is available across Rourkela." }
    ]
  },
  "puri": {
    cityName: "Puri",
    metaTitle: "Flower Delivery in Puri | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Puri with same-day delivery. Roses, marigolds & bouquets to Grand Road, CT Road, Sea Beach Road & all areas. From ₹399.",
    h1: "Flower Delivery in Puri",
    metaKeyword: "flower delivery in Puri, online flower delivery Puri, same day flower delivery Puri, florist Puri Odisha, Jagannath temple flowers Puri",
    footerContent: `<h2>Flower Delivery in Puri — Where Lord Jagannath's Presence Fills Every Flower</h2>
<p>Puri is one of the four sacred dhams of Hinduism (alongside Badrinath, Dwarka, and Rameshwaram) — pilgrims completing the Char Dham yatra consider Puri the easternmost point of India's sacred geography. The Jagannath temple — one of India's most revered and visited temples — is the city's soul. Lord Jagannath (a form of Vishnu-Krishna) is worshipped here in an ancient Odishan tradition that predates classical Hinduism in many ways and has absorbed tribal and Buddhist elements. The Rath Yatra, Puri's annual chariot procession when the deities are placed on enormous wooden chariots and pulled through Grand Road by millions of devotees, is one of the world's largest religious gatherings. Flower offerings at Puri's Jagannath temple are among the most elaborate in India. RedHeart delivers fresh flowers across Puri with same-day and midnight delivery, starting at ₹399.</p>
<p>Grand Road (the Bada Danda, the sacred processional route) and CT Road (the Chakratirtha Road along the sea beach) are Puri's main arteries. Sea Beach Road hotels and resorts see consistent flower demand from tourists. Puri's flower economy during Rath Yatra is extraordinary — tonnes of marigolds and roses are used to decorate the chariots.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puri, Odisha</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Grand Road, CT Road, Sea Beach Road, Swargadwar area, Mochi Sahi, Dolamundai</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Jagannath temple puja flowers in Puri?", answer: "Yes! RedHeart delivers marigold garlands, lotus, and tuberose for Jagannath temple offerings and home puja across Puri." },
      { question: "Is same-day flower delivery available in Puri?", answer: "Yes, RedHeart delivers same-day to Grand Road, CT Road, Sea Beach Road, and all Puri areas." },
      { question: "Is midnight delivery available in Puri?", answer: "Yes, midnight delivery is available across Puri." }
    ]
  },
  "sambalpur": {
    cityName: "Sambalpur",
    metaTitle: "Flower Delivery in Sambalpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Sambalpur with same-day delivery. Roses, marigolds & bouquets to Ainthapali, Budharaja, Dhanupali & all areas. From ₹399.",
    h1: "Flower Delivery in Sambalpur",
    metaKeyword: "flower delivery in Sambalpur, online flower delivery Sambalpur, same day flower delivery Sambalpur, florist Sambalpur Odisha",
    footerContent: `<h2>Flower Delivery in Sambalpur — The Hirakud City and Heart of Sambalpuri Culture</h2>
<p>Sambalpur is Odisha's major city in western Odisha — a region culturally distinct from coastal Odisha, more closely linked to the tribal and Chhattisgarhi traditions. The city sits beside the Hirakud Reservoir, created by the Hirakud Dam on the Mahanadi — when it was completed in 1957, it was the longest earthen dam in the world. Sambalpur is the heartland of Sambalpuri culture — the Sambalpuri saree (woven with Ikkat tie-dye technique in cotton and silk) is one of Odisha's most celebrated handloom products, and the Sambalpuri folk songs and Dalkhai dance tradition are distinctly regional art forms. The Samaleswari temple (dedicated to Maa Samalei, the patron goddess) is the city's most sacred site. RedHeart delivers fresh flowers across Sambalpur with same-day and midnight delivery, starting at ₹399.</p>
<p>Ainthapali and Budharaja are Sambalpur's main residential areas. Dhanupali is the commercial zone. Nuakhai — a harvest festival unique to western Odisha that honours the first rice of the season — is Sambalpur's biggest floral occasion, with marigolds and local flowers used for the ritual.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sambalpur, Odisha</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ainthapali, Budharaja, Dhanupali, Hirakud, Khetrajpur, Samaleswari temple area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Sambalpur?", answer: "Yes, RedHeart delivers same-day to Ainthapali, Budharaja, Dhanupali, and all major Sambalpur areas." },
      { question: "Does RedHeart deliver Nuakhai festival flowers in Sambalpur?", answer: "Yes! RedHeart delivers marigolds and seasonal flowers for Nuakhai and other western Odisha festivals." },
      { question: "Is midnight delivery available in Sambalpur?", answer: "Yes, midnight delivery is available across Sambalpur." }
    ]
  },
  "kannur": {
    cityName: "Kannur",
    metaTitle: "Flower Delivery in Kannur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kannur with same-day delivery. Roses, orchids & bouquets to Thavakkara, Payyanur Road, Caltex Junction & all areas. From ₹399.",
    h1: "Flower Delivery in Kannur",
    metaKeyword: "flower delivery in Kannur, online flower delivery Kannur, same day flower delivery Kannur, florist Kannur Kerala",
    footerContent: `<h2>Flower Delivery in Kannur — Land of Looms, Legends, and Theyyam</h2>
<p>Kannur (historically known as Cannanore) is north Kerala's most important city — the historical capital of the Kolathiri Rajas and a significant port city where the Portuguese, Dutch, and British all built forts (the St. Angelo Fort on the harbour is one of Kerala's best-preserved colonial fortifications). Kannur is famous for two things: its handloom weaving tradition (the Kannur District Handloom Weavers Cooperative Society produces fabrics that are exported globally) and Theyyam — the ritualistic art form unique to northern Kerala where performers become incarnations of deities and ancestral spirits, dancing in elaborate costumes and face paint. The Theyyam season (October to May) transforms Kannur's villages into extraordinary ritual theatres. RedHeart delivers fresh flowers across Kannur with same-day and midnight delivery, starting at ₹399.</p>
<p>Thavakkara is Kannur's main business district. The areas around St. Angelo Fort and Parassinikadavu temple are culturally significant delivery zones. Payyanur, a major town in Kannur district, and Caltex Junction are residential-commercial hubs. Vishu (Kerala New Year) in April with its Vishukkani flower arrangements is Kannur's most special floral occasion.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kannur, Kerala</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thavakkara, Caltex Junction, Payyanur Road, Fort area, Irinjalakuda Road, Chala</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kannur?", answer: "Yes, RedHeart delivers same-day to Thavakkara, Caltex Junction, Payyanur Road, and all major Kannur areas." },
      { question: "Does RedHeart deliver Vishu flowers in Kannur?", answer: "Yes! RedHeart delivers Kani Konna (golden shower) flowers and Vishukkani arrangements for Vishu in Kannur." },
      { question: "Is midnight delivery available in Kannur?", answer: "Yes, midnight delivery is available across Kannur." }
    ]
  },
  "kottayam": {
    cityName: "Kottayam",
    metaTitle: "Flower Delivery in Kottayam | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kottayam with same-day delivery. Roses, anthuriums & bouquets to Nagampadam, Baker Junction, MC Road & all areas. From ₹399.",
    h1: "Flower Delivery in Kottayam",
    metaKeyword: "flower delivery in Kottayam, online flower delivery Kottayam, same day flower delivery Kottayam, florist Kottayam Kerala",
    footerContent: `<h2>Flower Delivery in Kottayam — The Land of Letters, Latex, and Lakes</h2>
<p>Kottayam is one of Kerala's most educated and progressive cities — it was the first district in India to achieve 100% literacy, and the Malayalam press was born here (the first Malayalam newspaper, Rajya Samacharam, was published here in 1847). The city's identity is encapsulated in the local saying "Kottayam is the land of letters, latex, and lakes" (Aksharam, Ksheeram, and Thadakam). The letters refer to literacy and the press; latex to the rubber plantations of the nearby Eastern Ghats' foothills that make Kerala the rubber capital of India; and lakes to Vembanad Lake, the longest lake in India, whose backwaters meet the city's edge. The Christian community in Kottayam — Syrian Orthodox, Catholic, and other traditions — gives the city its distinctive church culture. RedHeart delivers fresh flowers across Kottayam with same-day and midnight delivery, starting at ₹399.</p>
<p>Nagampadam and Baker Junction are Kottayam's commercial centres. MC Road (the major highway through Central Kerala) runs through the city. The dense church presence in the area drives demand for white lilies, roses, and gladioli for Christmas and Easter celebrations.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kottayam, Kerala</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagampadam, Baker Junction, MC Road, Ettumanoor Road, Pathanamthitta Road, Vaikom Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kottayam?", answer: "Yes, RedHeart delivers same-day to Nagampadam, Baker Junction, MC Road, and all major Kottayam areas." },
      { question: "Does RedHeart deliver Christmas and Easter flowers in Kottayam?", answer: "Yes! Kottayam's large Christian community celebrates Christmas and Easter with lilies, roses, and white flower arrangements. RedHeart delivers for both occasions." },
      { question: "Is midnight delivery available in Kottayam?", answer: "Yes, midnight delivery is available across Kottayam." }
    ]
  },
  "palakkad": {
    cityName: "Palakkad",
    metaTitle: "Flower Delivery in Palakkad | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Palakkad with same-day delivery. Roses, marigolds & bouquets to Palakkad Town, Olavakkode, Kalmandapam & all areas. From ₹399.",
    h1: "Flower Delivery in Palakkad",
    metaKeyword: "flower delivery in Palakkad, online flower delivery Palakkad, same day flower delivery Palakkad, florist Palakkad Kerala",
    footerContent: `<h2>Flower Delivery in Palakkad — The Rice Bowl of Kerala Through the Ghats Gap</h2>
<p>Palakkad holds a geographic distinction unique among Kerala's cities: it sits at the Palakkad Gap — the lowest pass through the Western Ghats, where a natural break in the mountain chain connects Kerala's coastal lowlands to the Coimbatore plateau in Tamil Nadu. This gap has shaped the region's history, culture, and climate for millennia — it allowed Tamil cultural influences to flow into Kerala, creating the Palakkad Tamil community (whose cuisine and music are distinct sub-traditions of both Tamil and Malayali culture). It also creates the "Palakkad heat" — the city is the hottest district headquarters in Kerala, lacking the cooling effect of the sea or mountains. Palakkad Fort (British-era fort on a hilltop) and Silent Valley National Park (in the Nilgiri hills to the north) are significant attractions. RedHeart delivers fresh flowers across Palakkad with same-day and midnight delivery, starting at ₹399.</p>
<p>Palakkad Town and Olavakkode are the main commercial zones. Kalmandapam and areas near Palakkad Fort are residential. The Tamil community's Pongal celebrations and the Malayali community's Onam create simultaneous flower demand in two traditions — a unique feature of Palakkad.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palakkad, Kerala</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palakkad Town, Olavakkode, Kalmandapam, Chittur Road, Coimbatore Road, Mannarkkad Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Palakkad?", answer: "Yes, RedHeart delivers same-day to Palakkad Town, Olavakkode, Kalmandapam, and all major Palakkad areas." },
      { question: "Does RedHeart deliver Onam and Pongal flowers in Palakkad?", answer: "Yes! Palakkad celebrates both Onam (Malayali) and Pongal (Tamil community). RedHeart delivers flowers for both festivals." },
      { question: "Is midnight delivery available in Palakkad?", answer: "Yes, midnight delivery is available across Palakkad." }
    ]
  },
  "malappuram": {
    cityName: "Malappuram",
    metaTitle: "Flower Delivery in Malappuram | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Malappuram with same-day delivery. Roses, jasmines & bouquets to Malappuram Town, Tirur, Kondotty & all areas. From ₹399.",
    h1: "Flower Delivery in Malappuram",
    metaKeyword: "flower delivery in Malappuram, online flower delivery Malappuram, same day flower delivery Malappuram, florist Malappuram Kerala",
    footerContent: `<h2>Flower Delivery in Malappuram — Kerala's Malabar District With Deep Gulf Connections</h2>
<p>Malappuram is Kerala's most populous district — a largely Muslim-majority district in northern Malabar (the Mappila community has been present here since the earliest Arab traders reached Kerala's coast over 1400 years ago). The district has one of the highest NRI (Non-Resident Indian) populations in India per capita — a large percentage of Malappuram's families have at least one member working in the Gulf countries, and remittances flow back constantly, making the district one of Kerala's most economically active despite limited industrial development. This Gulf connection shapes Malappuram's culture — its architecture, its food, its festivals, and yes, its flower gifting traditions all reflect the influence of cosmopolitan Gulf cities. RedHeart delivers fresh flowers across Malappuram with same-day and midnight delivery, starting at ₹399.</p>
<p>Malappuram Town and Tirur are the commercial hubs. Kondotty and Manjeri are significant towns within the district. Eid ul-Fitr and Eid ul-Adha are Malappuram's biggest flower occasions, with roses and colourful bouquets popular for gifting. Nikah (wedding) celebrations drive elaborate flower decoration demand year-round.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malappuram, Kerala</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malappuram Town, Tirur, Kondotty, Manjeri, Perinthalmanna, Kottakkal Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Malappuram?", answer: "Yes, RedHeart delivers same-day to Malappuram Town, Tirur, Kondotty, Manjeri, and all major Malappuram areas." },
      { question: "Does RedHeart deliver Eid flowers and bouquets in Malappuram?", answer: "Yes! RedHeart delivers rose bouquets and colourful arrangements for Eid gifting across Malappuram." },
      { question: "Is midnight delivery available in Malappuram?", answer: "Yes, midnight delivery is available across Malappuram." }
    ]
  },
  "ujjain": {
    cityName: "Ujjain",
    metaTitle: "Flower Delivery in Ujjain | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ujjain with same-day delivery. Roses, marigolds & Mahakal puja flowers to Freeganj, Dwarkadhish Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Ujjain",
    metaKeyword: "flower delivery in Ujjain, online flower delivery Ujjain, same day flower delivery Ujjain, florist Ujjain MP, Mahakal temple flowers Ujjain",
    footerContent: `<h2>Flower Delivery in Ujjain — Mahakaleshwar's City on the Sacred Shipra</h2>
<p>Ujjain is one of the seven sacred cities of Hinduism (Sapta Puri — Ayodhya, Mathura, Haridwar, Varanasi, Kanchipuram, Dwarka, and Ujjain) and hosts one of the twelve Jyotirlinga shrines — the Mahakaleshwar temple, where Lord Shiva is worshipped as the "Lord of Time." The city sits on the Shipra river, and its position at the Tropic of Cancer (historically important for astronomical calculations) made it the prime meridian of India in ancient cartography — the longitude of Ujjain was used as the zero meridian in Indian astronomical texts for centuries, much as Greenwich serves today. The Kumbh Mela (Simhastha) held here every 12 years draws the largest human gathering on earth. Ujjain's Bhasma Aarti at Mahakaleshwar — where sacred ash is offered to the Shivalinga in the early morning — is one of India's most dramatic temple ceremonies. RedHeart delivers fresh flowers across Ujjain with same-day and midnight delivery, starting at ₹399.</p>
<p>Freeganj is Ujjain's main commercial area. Dwarkadhish Nagar and the areas around Mahakaleshwar temple are pilgrimage and residential zones. Navratri and Mahasivaratri are Ujjain's biggest flower occasions — crores of devotees come to Mahakaleshwar during these periods.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ujjain, Madhya Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Freeganj, Dwarkadhish Nagar, Mahakaleshwar area, Nanakheda, Dewas Road, Indore Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Mahakaleshwar puja flowers in Ujjain?", answer: "Yes! RedHeart delivers marigolds, bilva leaves, and tuberose for Mahakaleshwar temple Bhasma Aarti puja preparations across Ujjain." },
      { question: "Is same-day flower delivery available in Ujjain?", answer: "Yes, RedHeart delivers same-day to Freeganj, Dwarkadhish Nagar, Mahakaleshwar area, and all Ujjain zones." },
      { question: "Is midnight delivery available in Ujjain?", answer: "Yes, midnight delivery is available — useful for those preparing early morning Mahakaleshwar Bhasma Aarti flower offerings." }
    ]
  },
  "vrindavan": {
    cityName: "Vrindavan",
    metaTitle: "Flower Delivery in Vrindavan | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Vrindavan with same-day delivery. Roses, marigolds & Krishna bhog flowers to Banke Bihari area, Raman Reti & all areas. From ₹399.",
    h1: "Flower Delivery in Vrindavan",
    metaKeyword: "flower delivery in Vrindavan, online flower delivery Vrindavan, same day flower delivery Vrindavan, florist Vrindavan UP, Krishna flowers Vrindavan",
    footerContent: `<h2>Flower Delivery in Vrindavan — Where Krishna Danced in a Forest of Flowers</h2>
<p>Vrindavan is one of the most sacred places in Vaishnavism — this is where the young Krishna is said to have spent his childhood and youth, dancing with the gopis (cowherd women) in the forests of the Braj region. The name itself means "forest of Vrinda (tulsi/basil)" — a grove of sacred plants. The town on the Yamuna's banks has over 5,000 temples, more temples per square kilometre than almost anywhere else in India. The Banke Bihari temple (with its famous rule that the deity's face is only briefly revealed and then covered with curtains to prevent devotees losing themselves in trance) and the Prem Mandir (built by the saint Kripalu Maharaj) are among the most visited. Vrindavan's Phoolon Ki Holi (Holi with flowers, at Banke Bihari) is one of India's most photographed spiritual events. RedHeart delivers fresh flowers across Vrindavan with same-day and midnight delivery, starting at ₹399.</p>
<p>Raman Reti (the sacred sandy ground where Krishna is said to have played) and the Parikrama Marg (the 10-km circumambulation path around Vrindavan) areas are spiritually significant. The concentrated temple economy means flowers are needed in enormous quantities daily — marigolds and rose petals especially.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vrindavan, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banke Bihari area, Raman Reti, Parikrama Marg, Prem Mandir area, Mathura Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Phoolon Ki Holi flowers in Vrindavan?", answer: "Yes! RedHeart delivers fresh rose petals and mixed flower petals for Vrindavan's famous Phoolon Ki Holi at Banke Bihari temple." },
      { question: "Is same-day flower delivery available in Vrindavan?", answer: "Yes, RedHeart delivers same-day to Banke Bihari area, Raman Reti, Prem Mandir, and all Vrindavan zones." },
      { question: "Is midnight delivery available in Vrindavan?", answer: "Yes, midnight delivery is available across Vrindavan." }
    ]
  },
  "ayodhya": {
    cityName: "Ayodhya",
    metaTitle: "Flower Delivery in Ayodhya | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ayodhya with same-day delivery. Roses, marigolds & Ram puja flowers to Ram Janmabhoomi area, Naya Ghat & all areas. From ₹399.",
    h1: "Flower Delivery in Ayodhya",
    metaKeyword: "flower delivery in Ayodhya, online flower delivery Ayodhya, same day flower delivery Ayodhya, florist Ayodhya UP, Ram Mandir flowers Ayodhya",
    footerContent: `<h2>Flower Delivery in Ayodhya — Ram's Birthplace and Its Awakening</h2>
<p>Ayodhya is the birthplace of Lord Rama — one of the most sacred cities in Hinduism and the setting for the Ramayana, Valmiki's epic poem that has shaped the cultural consciousness of South and Southeast Asia for over 2,500 years. The Ram Janmabhoomi temple, consecrated in January 2024 after decades of legal and political process, is now one of India's most visited religious sites and has transformed Ayodhya into a city under remarkable construction and development. The Saryu river that flows through Ayodhya — on whose banks Rama is said to have performed his final departure — is the scene of daily ghat puja and the spectacular Deep Mahotsav (Diwali on the Saryu), when hundreds of thousands of diyas are lit on the river banks simultaneously, making it the world's largest Diwali lamp lighting. RedHeart delivers fresh flowers across Ayodhya with same-day and midnight delivery, starting at ₹399.</p>
<p>Ram Janmabhoomi area and the Hanuman Garhi temple vicinity are the most spiritually significant zones. Naya Ghat and the Saryu ghats see daily floral offerings. The new hotels, ashrams, and pilgrimage infrastructure springing up around the Ram Mandir have created a rapidly growing market for consistent flower supply.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ayodhya, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ram Janmabhoomi area, Hanuman Garhi, Naya Ghat, Saryu Ghats, Civil Lines, Faizabad Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver Ram Mandir puja flowers in Ayodhya?", answer: "Yes! RedHeart delivers marigold garlands, rose petals, and lotus for Ram Mandir and all temple puja across Ayodhya." },
      { question: "Is same-day flower delivery available in Ayodhya?", answer: "Yes, RedHeart delivers same-day to Ram Janmabhoomi area, Hanuman Garhi, Naya Ghat, Civil Lines, and all Ayodhya areas." },
      { question: "Is midnight delivery available in Ayodhya?", answer: "Yes, midnight delivery is available across Ayodhya." }
    ]
  },
  "moradabad": {
    cityName: "Moradabad",
    metaTitle: "Flower Delivery in Moradabad | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Moradabad with same-day delivery. Roses, bouquets to Civil Lines, Majhola, Katghar & all areas. From ₹399.",
    h1: "Flower Delivery in Moradabad",
    metaKeyword: "flower delivery in Moradabad, online flower delivery Moradabad, same day flower delivery Moradabad, florist Moradabad UP",
    footerContent: `<h2>Flower Delivery in Moradabad — The Brass City That Exports to the World</h2>
<p>Moradabad is the brass manufacturing capital of India — the city's craftspeople have been working in brass since the Mughal period, and today Moradabad exports metalware (brassware, silverware, aluminium items, and decorative metal objects) to over 100 countries, generating billions of dollars in annual export revenue. The city is also known as the "Pital Nagri" (Brass City) and produces a staggering range of products from decorative vases and lamp holders to cutlery and home décor items. The Moradabad district's agricultural belt along the Ramganga river produces vegetables and foodgrains. Despite its industrial identity, Moradabad is a deeply traditional city with a significant Muslim population and strong Eid and wedding gifting traditions. RedHeart delivers fresh flowers across Moradabad with same-day and midnight delivery, starting at ₹399.</p>
<p>Civil Lines is Moradabad's administrative and upscale residential area. Majhola is the main residential zone. Katghar and Buddhi Vihar are established areas. The city's craftsmen and business families celebrate milestones with significant flower gifting for both Eid and Diwali celebrations.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Moradabad, Uttar Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Majhola, Katghar, Buddhi Vihar, Rampur Garden, Model Town</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Moradabad?", answer: "Yes, RedHeart delivers same-day to Civil Lines, Majhola, Katghar, and all major Moradabad areas." },
      { question: "Does RedHeart deliver Eid flowers in Moradabad?", answer: "Yes! RedHeart delivers rose bouquets and colourful arrangements for Eid celebrations in Moradabad." },
      { question: "Is midnight delivery available in Moradabad?", answer: "Yes, midnight delivery is available across Moradabad." }
    ]
  },
  "roorkee": {
    cityName: "Roorkee",
    metaTitle: "Flower Delivery in Roorkee | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Roorkee with same-day delivery. Roses, bouquets to Civil Lines, IIT Roorkee campus, Haridwar Road & all areas. From ₹399.",
    h1: "Flower Delivery in Roorkee",
    metaKeyword: "flower delivery in Roorkee, online flower delivery Roorkee, same day flower delivery Roorkee, florist Roorkee Uttarakhand",
    footerContent: `<h2>Flower Delivery in Roorkee — India's Oldest Technical University City</h2>
<p>Roorkee holds a unique distinction in Indian education: it is home to the oldest technical university in Asia — what is now IIT Roorkee was founded in 1847 as the Thomason College of Civil Engineering, built to train engineers for the Ganges Canal (the first large irrigation canal in India). The city grew around this engineering institution, and its character as a "university city" is palpable. Today, IIT Roorkee is one of India's premier engineering institutions, consistently ranked among the country's top IITs. Roorkee sits in the Ganga-Yamuna Doab, between Haridwar and Muzaffarnagar, and is a significant centre for scientific institutions — the Central Building Research Institute (CBRI) and the National Institute of Hydrology are based here. RedHeart delivers fresh flowers across Roorkee with same-day and midnight delivery, starting at ₹399.</p>
<p>Civil Lines and the areas around IIT Roorkee campus are the main residential zones. The IIT campus generates consistent academic occasion gifting — farewell flowers for professors, convocation bouquets, and birthday celebrations for students and faculty. Haridwar Road connects Roorkee to the pilgrimage town 30 km away.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roorkee, Uttarakhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, IIT Roorkee campus, Haridwar Road, Manglaur Road, CBRI area, Ramnagar Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Roorkee?", answer: "Yes, RedHeart delivers same-day to Civil Lines, IIT Roorkee campus, and all major Roorkee areas." },
      { question: "Does RedHeart deliver to IIT Roorkee hostels and faculty quarters?", answer: "Yes! RedHeart delivers to all IIT Roorkee campus residential addresses including hostels and faculty housing." },
      { question: "Is midnight delivery available in Roorkee?", answer: "Yes, midnight delivery is available across Roorkee." }
    ]
  },
  "haldwani": {
    cityName: "Haldwani",
    metaTitle: "Flower Delivery in Haldwani | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Haldwani with same-day delivery. Roses, marigolds & bouquets to Kathgodam, Bhotia Parao, Nainital Road & all areas. From ₹399.",
    h1: "Flower Delivery in Haldwani",
    metaKeyword: "flower delivery in Haldwani, online flower delivery Haldwani, same day flower delivery Haldwani, florist Haldwani Uttarakhand",
    footerContent: `<h2>Flower Delivery in Haldwani — The Gateway to Kumaon's Hill Stations</h2>
<p>Haldwani is the commercial capital of the Kumaon region of Uttarakhand — the city that serves as the "gateway" to the hills, where the plains meet the Shivalik foothills and the road to Nainital (35 km away), Almora, Ranikhet, and Kausani begins. The city's twin, Kathgodam, houses the railway terminus — the last railway station before the Himalayan hills begin, making it the jumping-off point for all Kumaon mountain travel. Haldwani is growing rapidly as Kumaon's hills urbanise and the tourism economy expands — a significant number of people who work or study in the plains have parents and families in Haldwani. RedHeart delivers fresh flowers across Haldwani with same-day and midnight delivery, starting at ₹399.</p>
<p>Bhotia Parao and the Nainital Road areas are the main residential zones. Kathgodam station area sees significant transit traffic. The Uttarakhand festival calendar — Makar Sankranti (Uttarayani fair), Holi, and the Navratri Nanda Devi Raj Jat — drives flower demand through the year.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haldwani, Uttarakhand</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kathgodam, Bhotia Parao, Nainital Road, Rampur Road, Transport Nagar, Bankhandi area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Haldwani?", answer: "Yes, RedHeart delivers same-day to Kathgodam, Bhotia Parao, Nainital Road, and all major Haldwani areas." },
      { question: "Does RedHeart deliver Uttarayan Makar Sankranti flowers in Haldwani?", answer: "Yes! RedHeart delivers marigolds and seasonal flowers for Uttarayan (Makar Sankranti/Ghughuti festival) in Haldwani." },
      { question: "Is midnight delivery available in Haldwani?", answer: "Yes, midnight delivery is available across Haldwani." }
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
  console.log("\nDone — batch 15 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
