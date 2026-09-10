/**
 * Batch 6 — Nashik, Ludhiana, Madurai, Ranchi, Bhubaneswar, Thiruvananthapuram
 * node scripts/seo-city-flowers-6.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {

  "nashik": {
    cityName: "Nashik",
    metaTitle: "Flower Delivery in Nashik | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Nashik with same-day delivery. Roses, bouquets & Kumbh Mela flowers to Dwarka, Gangapur Road, Satpur & all areas. From ₹399.",
    h1: "Flower Delivery in Nashik",
    metaKeyword: "flower delivery in Nashik, online flower delivery Nashik, same day flower delivery Nashik, florist Nashik, send flowers Nashik, flowers Gangapur Road Nashik",
    footerContent: `
<h2>Flower Delivery in Nashik — The Wine City and the Holy Trimbak</h2>
<p>Nashik wears two identities with equal pride. On one side, it is one of India's most significant pilgrimage cities — the Trimbakeshwar Shiva temple, one of the twelve Jyotirlingas, sits 28 km west of the city, and Nashik hosts the Kumbh Mela (Simhastha) every twelve years on the banks of the Godavari river, drawing tens of millions of pilgrims in the largest human gathering on earth. On the other side, Nashik has become India's wine capital — the Sula, York, Grover Zampa, and Fratelli wineries of the Nashik Valley produce award-winning wines from Nashik's volcanic basalt soil and Mediterranean-esque climate. RedHeart delivers fresh flowers across Nashik with same-day and midnight delivery, starting at ₹399, serving both the holy Godavari banks and the wine country roads equally well.</p>

<p>Nashik's flower supply runs through the wholesale market near Mahamarg Bus Stand and Old Nashik. The city draws from Maharashtra's Pune and Solapur belts as well as from the Nashik Valley's own farms. The presence of Nashik's Phule Market — Maharashtra's original agricultural market — means fresh produce arrives daily in quality that other cities envy.</p>

<h2>Quick Reference — Flower Delivery in Nashik</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nashik, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dwarka, Gangapur Road, Satpur, Cidco, Panchvati, Deolali, Nashik Road, Ambad, Indiranagar, Tidke Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kumbh Mela (Simhastha), Trimbakeshwar pilgrimage, Diwali, Ganesh Chaturthi, birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, chrysanthemums</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wine capital of India; Trimbakeshwar Jyotirlinga; Kumbh Mela site; Godavari origin</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Ganesh Chaturthi and the Nashik Festival Wave</h2>
<p>Nashik's Ganesh Chaturthi is a major civic event — large public Ganesh installations at Panchvati and the main city squares draw lakhs of visitors over eleven days. Each installation requires tonnes of fresh marigolds for daily decoration, and homes across Nashik maintain smaller household Ganesh installations with equal devotion. Diwali follows two months later, and between the two, Nashik's flower market runs at near-capacity. RedHeart builds dedicated stock for both festivals, sourcing from multiple farms to ensure supply during the peak November period. Year-round, the city's proximity to vineyards also means a stream of winery event deliveries — flowers for Sula Fest, wine-tasting arrangements, and corporate event florals at the valley properties.</p>

<h2>Gangapur Road to Satpur — Nashik's Modern Spread</h2>
<p>Gangapur Road is Nashik's most desirable residential address — wide roads, well-maintained bungalows, and a quiet that contrasts pleasantly with the city's commercial bustle. Deliveries here are for significant personal milestones. Dwarka, Cidco, and Ambad are planned residential and industrial zones where Nashik's manufacturing and IT sector workers live. Panchvati, the old city near the Godavari banks, is historically significant (Lord Rama is said to have spent time here during his exile) and has a continuous religious gifting culture. Deolali, the military cantonment town that gave English the word "doolally," is a quiet area with a steady residential gifting demand.</p>

<h2>Why Nashik Orders From RedHeart</h2>
<p>Nashik is a city that has always appreciated quality — in its wine, in its grapes, in its produce. A city that exports Cabernet Sauvignon to Europe and grows the grapes that win international wine awards does not accept sub-standard flowers. RedHeart's sourcing quality and delivery reliability are matched to Nashik's expectations. From the Trimbakeshwar pilgrim to the Sula winery visitor, everyone in Nashik deserves excellent flowers — and that is what we bring.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to wineries and resorts on Gangapur Road, Nashik?", answer: "Yes! RedHeart delivers to wineries, vineyard resorts, and event venues on Gangapur Road and across Nashik's wine belt. We handle corporate event flowers, Sula Fest-style arrangement orders, and anniversary deliveries to vineyard homestays." },
      { question: "Can I order Ganesh Chaturthi flowers and marigolds in bulk in Nashik?", answer: "Yes! RedHeart handles both personal and bulk flower orders for Ganesh Chaturthi in Nashik. We deliver fresh marigold garlands, chrysanthemum strings, and flower petals for home and community Ganesh installations throughout the eleven-day festival." },
      { question: "Is same-day flower delivery available in Dwarka and Satpur, Nashik?", answer: "Yes, RedHeart delivers flowers same-day to Dwarka, Satpur, Gangapur Road, Cidco, Panchvati, Ambad, Nashik Road, and all major areas of Nashik. Orders placed before 5 PM are delivered within 2–4 hours." },
      { question: "Can I get flowers near the Trimbakeshwar temple area?", answer: "Yes! RedHeart delivers to Trimbak town and surrounding areas near the Trimbakeshwar Jyotirlinga. We carry marigold garlands, tuberose bunches, and floral offerings suitable for temple worship. Same-day delivery available with advance notice for Trimbak-specific deliveries." },
      { question: "Is midnight flower delivery available in Nashik?", answer: "Yes, midnight flower delivery is available across Nashik. Order before 9 PM and select your time — perfect for birthday surprises in Gangapur Road, Dwarka, Cidco, or any other Nashik address." }
    ]
  },

  "ludhiana": {
    cityName: "Ludhiana",
    metaTitle: "Flower Delivery in Ludhiana | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ludhiana with same-day delivery. Roses, gladioli & bouquets to Model Town, BRS Nagar, Sarabha Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Ludhiana",
    metaKeyword: "flower delivery in Ludhiana, online flower delivery Ludhiana, same day flower delivery Ludhiana, florist Ludhiana, send flowers Ludhiana, flowers Model Town Ludhiana",
    footerContent: `
<h2>Flower Delivery in Ludhiana — Punjab's Powerhouse City Gifts with Abundance</h2>
<p>Ludhiana is not a city of monuments or scenic beauty — it is a city of engines. The hosiery capital of Asia, a major textile hub, home to cycles (Hero Cycles has its origin here), sewing machines, and a manufacturing energy that has made it Punjab's largest city and one of the most commercially dynamic in North India. But Ludhiana is also deeply Punjabi in its warmth — the gifting culture here is generous, extravagant by the standards of any other city, and driven by a cultural belief that the best way to show respect is to give well. Flowers in Ludhiana are given in bunches, not individual stems. RedHeart delivers fresh flowers across Ludhiana with same-day and midnight delivery, starting at ₹399.</p>

<p>Ludhiana's flower supply comes from the market near Chaura Bazar and the phawar mandi on Ferozepur Road. Punjab's farms are enormously productive, and the supply chain to Ludhiana — from Pathankot roses to local marigolds — is reliable and fresh. Ludhiana's Lohri and Baisakhi celebrations are major commercial events with substantial flower demand alongside the agricultural and social festivities.</p>

<h2>Quick Reference — Flower Delivery in Ludhiana</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ludhiana, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, BRS Nagar, Sarabha Nagar, Dugri, Haibowal, Sherpur, Ferozepur Road, Civil Lines, Pakhowal Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lohri, Baisakhi, Diwali, weddings, birthdays, Gurpurabs</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gladioli, roses, marigolds, tuberose, gerberas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hosiery & textile capital of Asia; Hero Cycles origin city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Lohri — Ludhiana's Most Exuberant Winter Night</h2>
<p>Lohri on January 13 is Ludhiana's biggest winter celebration — bonfires in every neighbourhood, the Lohri geet sung by groups moving door to door, and the joyful exchange of gifts between families. Flowers play a supporting but significant role: Lohri gifting baskets include flowers, marigold garlands are woven into the bonfire setup, and the day-after mehendi and celebration functions require fresh arrangements. Weddings clustered around Lohri week are a Ludhiana tradition — the auspicious warmth of the festival amplifies wedding celebrations. RedHeart prepares Lohri-period stock, with gladioli (Punjab's celebration flower) prominently featured.</p>

<h2>Model Town to Dugri — Ludhiana's Affluent Addresses</h2>
<p>Model Town is Ludhiana's most prestigious residential zone — the wide, planned roads and established bungalow culture here are the product of the city's textile and manufacturing wealth. Sarabha Nagar and BRS Nagar are adjacent premium areas. Deliveries in these neighbourhoods are for major occasions: silver anniversaries, significant birthdays (40th, 50th), and the large wedding functions that Ludhiana's business families organise with characteristic Punjabi generosity. Dugri is a large residential area with steady middle-class gifting demand. Haibowal, the industrial zone, has a township population that uses RedHeart for regular personal gifting.</p>

<h2>Why Ludhiana Chooses RedHeart</h2>
<p>Ludhiana runs its engines fast and its heart open. A city that has built an industry empire from nothing — from a small town with a few looms to the hosiery capital of Asia — understands the value of reliability. RedHeart is a reliable service: we deliver what we promise, when we promise, at a fair price. In a city that values those qualities above all, that is the only pitch we need to make.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Model Town and BRS Nagar, Ludhiana?", answer: "Yes, RedHeart delivers flowers same-day to Model Town, BRS Nagar, Sarabha Nagar, Dugri, Haibowal, Civil Lines, Ferozepur Road, and all major Ludhiana areas. Orders placed before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order gladioli and Lohri flower arrangements in Ludhiana?", answer: "Yes! Gladioli are Punjab's signature celebration flower and RedHeart carries them fresh in Ludhiana. For Lohri, we offer gladioli bunches, marigold garlands, and festive baskets. We stock up ahead of Lohri week to meet Ludhiana's significant festival demand." },
      { question: "What flowers are popular for Ludhiana weddings?", answer: "Ludhiana weddings are known for their generosity of scale. Gladioli are the stage and mandap flower of choice. Tuberose garlands are essential. Marigolds are used by the kilo for decoration. Red and pink roses feature in personal bridal and family gifting. RedHeart handles Ludhiana wedding flower orders in bulk." },
      { question: "Does RedHeart deliver flowers to event halls and marriage palaces in Ludhiana?", answer: "Yes, RedHeart delivers to banquet halls, marriage palaces, and event venues across Ludhiana. We coordinate wedding function flowers with venue-specific timing requirements, and handle bulk orders for large Ludhiana celebrations." },
      { question: "Is midnight flower delivery available in Ludhiana?", answer: "Yes, midnight delivery is available across Ludhiana. Order before 9 PM, select your time, and we deliver — perfect for birthday surprises in Model Town, Sarabha Nagar, Dugri, or any Ludhiana address." }
    ]
  },

  "madurai": {
    cityName: "Madurai",
    metaTitle: "Flower Delivery in Madurai | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Madurai with same-day delivery. Jasmine, roses & bouquets to Anna Nagar, K.K. Nagar, Alagar Kovil Road & all areas. From ₹399.",
    h1: "Flower Delivery in Madurai",
    metaKeyword: "flower delivery in Madurai, online flower delivery Madurai, same day flower delivery Madurai, florist Madurai, send flowers Madurai, jasmine flowers Madurai Meenakshi",
    footerContent: `
<h2>Flower Delivery in Madurai — The Temple City's Flower Heritage Is 2,000 Years Old</h2>
<p>Madurai is one of the oldest living cities in the world — it has been continuously inhabited for at least 2,500 years, and the Meenakshi Amman temple at its centre has been rebuilt, expanded, and glorified by successive dynasties since the 7th century CE. The temple's fourteen gopurams (gateway towers), the tallest reaching 52 metres, are covered in thousands of painted stucco sculptures, and the Goddess Meenakshi (a form of Parvati) who presides over the city has been offered jasmine flowers since the first devotee came to worship. Jasmine is to Madurai what the Meenakshi temple is to Madurai — it is the city's identity. Madurai Malli (jasmine grown in and around Madurai) is the most prized jasmine variety in the world, used in temple worship, worn in women's hair, and sold in the city's flower market — Pudhu Mandapam's flower sellers — every single morning without exception. RedHeart delivers fresh flowers across Madurai with same-day and midnight delivery, starting at ₹399.</p>

<p>Madurai is also the centre of the Madurai Malli supply chain that serves the rest of Tamil Nadu. The city's flower market near Mathurai Veeran Koil supplies jasmine to Chennai, Coimbatore, and other cities. The agricultural belt of Sholavandan, Usilampatti, and Thirumangalam around Madurai grows jasmine intensively, and the morning market here is one of the most fragrant in the world.</p>

<h2>Quick Reference — Flower Delivery in Madurai</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madurai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anna Nagar, K.K. Nagar, Alagar Kovil Road, Iyer Bungalow, Palanganatham, Thirunagar, Simmakkal, Arapalayam, Nagamalai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chithirai Festival (Meenakshi Kalyanam), Tamil New Year, Pongal, Karthigai Deepam, weddings, birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madurai Malli (jasmine), roses, marigolds, chrysanthemums, lotus</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Temple city, Meenakshi Amman, Madurai Malli jasmine — oldest living city in Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Chithirai Festival — When the Entire City Is a Flower Offering</h2>
<p>The Chithirai Festival, celebrated in April-May at the Meenakshi Amman temple, is one of Tamil Nadu's most spectacular religious events — commemorating the celestial wedding of Meenakshi and Sundareswarar (Shiva). The ten-day festival draws millions of pilgrims to Madurai, and the flower demand during this period is extraordinary even by Madurai's already-high standards. The streets around the temple are carpeted with marigolds; jasmine is worn by every woman in the procession; the temple's main sanctum is decorated with tonnes of fresh flowers changed daily. RedHeart prepares Chithirai Festival stock with dedicated suppliers and expanded delivery capacity for this period.</p>

<h2>Anna Nagar to Alagar Kovil Road — Madurai's Modern Life</h2>
<p>Anna Nagar in Madurai (different from Chennai's Anna Nagar) is the city's most contemporary residential area, with apartment complexes and young professional families. Deliveries here are for birthdays, Valentine's Day, and the modern gifting occasions that Madurai's younger generation celebrates with the same enthusiasm as any metro. K.K. Nagar is a large middle-class zone with year-round birthday and anniversary demand. Alagar Kovil Road leads toward the Kallazhagar temple, one of Madurai's most important suburban temples, and the residential areas along it are largely flower-gifting zones for religious occasions. Iyer Bungalow, the city's quieter traditional residential area, is fully covered.</p>

<h2>Why Madurai Chooses RedHeart</h2>
<p>Madurai has been offering flowers for 2,500 years. The flower traditions here are not customs — they are alive, daily, and practised with devotion by each generation. RedHeart is privileged to participate in that tradition, bringing Madurai Malli freshness and rose bouquet elegance to a city that has always known how to honour the goddess with beauty.</p>
`,
    faqs: [
      { question: "Can I order Madurai Malli (jasmine) for delivery in Madurai?", answer: "Yes! Madurai Malli — the world's finest jasmine — is available through RedHeart in Madurai. Fresh jasmine strings and bunches delivered same-day to Anna Nagar, K.K. Nagar, and all areas. You cannot get jasmine fresher than what we source from Madurai's own farms and market." },
      { question: "Does RedHeart deliver Chithirai Festival flowers in Madurai?", answer: "Yes! Chithirai Festival is Madurai's biggest flower occasion. RedHeart prepares dedicated stock — jasmine, marigolds, chrysanthemums, and lotus — for the ten-day festival period and delivers to homes, temple visitors, and pilgrims across the city." },
      { question: "Is same-day flower delivery available in Anna Nagar and K.K. Nagar, Madurai?", answer: "Yes, RedHeart covers Anna Nagar, K.K. Nagar, Alagar Kovil Road, Iyer Bungalow, Thirunagar, Palanganatham, and all major Madurai areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I send flowers to someone near the Meenakshi Amman Temple?", answer: "Yes! RedHeart delivers to addresses in the old city areas near Meenakshi Temple including Simmakkal, West Masi Street, East Veli Street, and surrounding areas. We also handle delivery to temple-adjacent hotels for pilgrims and visitors." },
      { question: "Is midnight flower delivery available in Madurai?", answer: "Yes, midnight delivery is available across Madurai. Order before 9 PM and select your time — ideal for birthday and anniversary surprises in Anna Nagar, K.K. Nagar, or any Madurai neighbourhood." }
    ]
  },

  "ranchi": {
    cityName: "Ranchi",
    metaTitle: "Flower Delivery in Ranchi | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ranchi with same-day delivery. Roses, bouquets & tribal-inspired arrangements to Harmu, Lalpur, Doranda & all areas. From ₹399.",
    h1: "Flower Delivery in Ranchi",
    metaKeyword: "flower delivery in Ranchi, online flower delivery Ranchi, same day flower delivery Ranchi, florist Ranchi, send flowers Ranchi, flowers Harmu Lalpur Ranchi",
    footerContent: `
<h2>Flower Delivery in Ranchi — The Capital of Jharkhand Celebrates with Natural Grace</h2>
<p>Ranchi became the capital of the newly formed state of Jharkhand in 2000, and in the two decades since, it has grown from a sleepy hill-station town — the British called it their summer retreat, and the summer capital of the Bengal Presidency was here — into a dynamic state capital with a significant government and institutional presence. But Ranchi's core character is shaped by its Jharkhand identity: a state where one-third of the population is tribal (Adivasi), where the Sarhul festival celebrates spring with red Palash (flame of the forest) and white Sal flowers, and where the connection to the natural world is not nostalgic but living. RedHeart delivers fresh flowers across Ranchi with same-day and midnight delivery, starting at ₹399.</p>

<p>Ranchi's flower supply comes from the market near Ranchi Main Road and the vegetable-flower market at Kadru Chowk. The surrounding Chota Nagpur plateau's forests provide seasonal wildflowers for local festive use, while cultivated roses, marigolds, and gerberas arrive from Patna and Kolkata supply chains. Ranchi's climate — cooler than the plains, with monsoon greenery lasting deep into autumn — makes flowers fresh here longer than in hotter cities.</p>

<h2>Quick Reference — Flower Delivery in Ranchi</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ranchi, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Harmu, Lalpur, Doranda, Ashok Nagar, Ratu Road, Bariatu, Kantatoli, HEC Colony, Namkum, Khelgaon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sarhul (Adivasi spring festival), Karma Puja, Diwali, Chhath Puja, birthdays, government ceremonies</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Palash (seasonal), gerberas, tuberose</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Capital of Jharkhand; former British summer capital; tribal cultural heartland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Sarhul — When Ranchi Wears the Forest</h2>
<p>Sarhul, celebrated in March-April when the Sal and Palash trees bloom on the Chota Nagpur plateau, is the Adivasi new year and spring festival of Jharkhand. The Sarna faith (the nature religion of Jharkhand's tribal peoples) celebrates the flowers of the forest — the orange Palash (Butea monosperma), called "flame of the forest," is collected from the forest and worshipped at the Sarna sthal (sacred grove) at the village centre. In Ranchi, Sarhul processions move through the city, with young men wearing Palash flowers on their heads. RedHeart does not supply Palash (it is collected from forests by the community), but delivers cultivated flowers for the celebrations and gifting that accompany the festival season.</p>

<h2>Harmu to Doranda — Ranchi's Institutional Belt</h2>
<p>Harmu and Lalpur are Ranchi's most established residential areas — home to senior government officers and the families that have made Ranchi their permanent home. Doranda, the cantonment and government colony belt, houses Central Government employees and defence families. Ashok Nagar and Bariatu are newer residential developments with apartment complexes and a younger demographic. HEC (Heavy Engineering Corporation) Colony is a significant township housing employees of India's largest heavy engineering public sector company, established in Ranchi in the 1950s. These institutional populations have formal gifting traditions that RedHeart serves reliably.</p>

<h2>Why Ranchi Trusts RedHeart</h2>
<p>Ranchi is a capital city that takes its responsibilities seriously — a city that carries the aspirations of Jharkhand's 38 million people on its administrative shoulders. RedHeart's Ranchi service is equally serious: fresh flowers, delivered on time, at prices that respect the city's diverse economic reality. From HEC Colony townships to new apartments in Khelgaon, RedHeart covers Ranchi completely.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to government colonies and HEC Colony in Ranchi?", answer: "Yes, RedHeart delivers to Doranda government colony, HEC Colony, Ashok Nagar, Harmu, Lalpur, and all major areas of Ranchi including cantonment areas. We handle both personal gifting and official occasion flowers for Ranchi's large institutional population." },
      { question: "Can I order flowers for Sarhul celebrations in Ranchi?", answer: "Yes! RedHeart delivers cultivated flowers for Sarhul season gifting and celebration arrangements in Ranchi. While the sacred Palash flowers of Sarhul are collected from forests by the community, we supply roses, marigolds, and seasonal flowers for the gifting and celebration aspect of Jharkhand's spring festival." },
      { question: "Is same-day flower delivery available in Harmu and Bariatu, Ranchi?", answer: "Yes, RedHeart covers Harmu, Lalpur, Bariatu, Doranda, Ashok Nagar, Ratu Road, Kantatoli, Namkum, and all major Ranchi areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Are flowers available for Chhath Puja delivery in Ranchi?", answer: "Yes! Chhath Puja is an important festival in Ranchi and across Jharkhand. RedHeart delivers marigolds, tuberose, and seasonal festival flowers for Chhath Puja preparations. We stock specifically for this festival period." },
      { question: "Is midnight flower delivery available in Ranchi?", answer: "Yes, midnight flower delivery is available across Ranchi. Order before 9 PM and choose your time — ideal for birthday and anniversary surprises in Harmu, Lalpur, Doranda, or any Ranchi neighbourhood." }
    ]
  },

  "bhubaneswar": {
    cityName: "Bhubaneswar",
    metaTitle: "Flower Delivery in Bhubaneswar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bhubaneswar with same-day delivery. Roses, bouquets & Rath Yatra flowers to Saheed Nagar, Nayapalli, Patia & all areas. From ₹399.",
    h1: "Flower Delivery in Bhubaneswar",
    metaKeyword: "flower delivery in Bhubaneswar, online flower delivery Bhubaneswar, same day flower delivery Bhubaneswar, florist Bhubaneswar, send flowers Bhubaneswar, flowers Saheed Nagar Patia",
    footerContent: `
<h2>Flower Delivery in Bhubaneswar — The Temple City of the East Grows Into a Smart City</h2>
<p>Bhubaneswar is called the Temple City of India — the old city's Ekamra Kshetra had over a thousand temples during its medieval peak, of which about four hundred remain active today. The Lingaraj temple, the Mukteshwar temple (called the gem of Odishan architecture), and the Rajarani temple with its sculpted apsaras are all within a few kilometres of each other, each requiring daily fresh flower offerings. But Bhubaneswar is also one of India's most ambitious Smart Cities projects — the new city developments in Nandankanan, Patia, and the IT sector have given the capital of Odisha a modern, aspirational energy that coexists with its ancient temple heritage. RedHeart delivers fresh flowers across Bhubaneswar with same-day and midnight delivery, starting at ₹399.</p>

<p>Bhubaneswar's flower supply comes from the market near Unit I/Unit II and the main wholesale market at Saheed Nagar. Odisha's coastal farmlands grow marigolds and tuberose in abundance. The Rath Yatra season in nearby Puri — the most important festival in Odisha, when Jagannath's chariot procession draws millions — creates a city-wide flower demand that extends to Bhubaneswar's homes and temples as well.</p>

<h2>Quick Reference — Flower Delivery in Bhubaneswar</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhubaneswar, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saheed Nagar, Nayapalli, Patia, Chandrasekharpur, Damana, Khandagiri, Tamando, Rasulgarh, Jaydev Vihar, IRC Village</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rath Yatra (Puri connection), Kumar Purnima, Nuakhai, Diwali, birthdays, IT sector occasions</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, lotus, gerberas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Temple City of India; Smart City; Odisha's IT capital</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Kumar Purnima and Odishan Flower Festivals</h2>
<p>Kumar Purnima, celebrated on the full moon of the Ashwin month (October), is a uniquely Odishan festival — young unmarried women worship the moon and observe a fast, while the festival is associated with the coming of age and blessing for a good life. Flowers are central to the Kumar Purnima puja — lotus and white flowers for the moon worship, marigolds and roses for the ritual arrangement. Nuakhai, the Odishan harvest festival celebrated primarily in western Odisha, is observed in Bhubaneswar's households with fresh flowers. The Lingaraj temple Shivaratri sees enormous flower donations from devotees across the state, many of whom now order online through services like RedHeart for convenient delivery to their Bhubaneswar homes ahead of the festival.</p>

<h2>Patia to Chandrasekharpur — Bhubaneswar's Tech Belt</h2>
<p>Bhubaneswar's IT corridor along Jaydev Vihar, Patia, Chandrasekharpur, and Damana is home to companies like Infosys, Wipro, and TCS, along with a growing startup ecosystem. The young professional population here has a modern gifting culture — desk flowers, birthday bouquets, and Valentine's Day arrangements that are ordered with the same ease that one orders a food delivery. IRC Village is an upscale residential area popular with professionals and business families. Nayapalli and Saheed Nagar are established residential zones with older families and more traditional gifting patterns. RedHeart covers both cultures equally.</p>

<h2>Why Bhubaneswar Trusts RedHeart</h2>
<p>Bhubaneswar is a city that respects heritage and embraces the future simultaneously — its temples and its tech parks coexist without contradiction. RedHeart mirrors that duality: we honour the city's flower-offering traditions with fresh marigolds and lotus, and we serve the modern professional with designer rose bouquets and same-day delivery to tech park addresses. In Odisha's capital, where old and new sit comfortably together, RedHeart is at home.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to IT companies and tech parks in Bhubaneswar?", answer: "Yes, RedHeart delivers to Infosys, Wipro, TCS, and all major IT offices in Bhubaneswar's tech corridor along Patia, Chandrasekharpur, Jaydev Vihar, and Damana. We handle desk flower deliveries, birthday surprises at office addresses, and corporate occasion flowers." },
      { question: "Can I order flowers for Kumar Purnima and Odishan festivals in Bhubaneswar?", answer: "Yes! RedHeart delivers fresh lotus, white flowers, marigolds, and roses for Kumar Purnima and other Odishan festivals in Bhubaneswar. We understand the specific flower needs of Odisha's unique festival calendar." },
      { question: "Is same-day flower delivery available in Nayapalli and Saheed Nagar, Bhubaneswar?", answer: "Yes, RedHeart covers Nayapalli, Saheed Nagar, Patia, Chandrasekharpur, Khandagiri, IRC Village, and all major areas of Bhubaneswar with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Are temple flowers (lotus, marigolds) available for delivery in Bhubaneswar?", answer: "Yes! RedHeart delivers lotus, marigold garlands, tuberose bunches, and other temple-appropriate flowers for the Lingaraj temple and other Bhubaneswar temples' puja traditions. We carry flowers suitable for both home shrine worship and temple-adjacent gifting." },
      { question: "Is midnight flower delivery available in Bhubaneswar?", answer: "Yes, midnight delivery is available across Bhubaneswar. Order before 9 PM, choose your time, and we deliver — perfect for birthday surprises in Nayapalli, Patia, or any Bhubaneswar address." }
    ]
  },

  "thiruvananthapuram": {
    cityName: "Thiruvananthapuram",
    metaTitle: "Flower Delivery in Thiruvananthapuram | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Thiruvananthapuram with same-day delivery. Roses, jasmine & Kerala bouquets to Kowdiar, Pattom, Kazhakuttam & all areas. From ₹399.",
    h1: "Flower Delivery in Thiruvananthapuram",
    metaKeyword: "flower delivery in Thiruvananthapuram Trivandrum, online flower delivery Trivandrum, same day flower delivery Thiruvananthapuram, florist Trivandrum, send flowers Thiruvananthapuram",
    footerContent: `
<h2>Flower Delivery in Thiruvananthapuram — Kerala's Capital Where Every Season Blooms</h2>
<p>Thiruvananthapuram — still called Trivandrum with affectionate nostalgia by its residents — is the capital of Kerala, and it carries that role with a certain serene confidence. The city descends in terraces from its hill-top centre toward the Arabian Sea, and the laterite churches of the old city, the colonial British buildings around the Secretariat, and the gleaming high-rises of Technopark all exist within the same cityscape. Kerala's flowers are its calendar — the Vishu Kani on New Year's morning (the ritual arrangement of golden konna blossoms, fruits, and sacred objects viewed at dawn), the Onam Pookalam (flower carpet) laid outside each home during the harvest festival, the jasmine worn daily in every age's hair — flowers here are not occasional. RedHeart delivers fresh flowers across Thiruvananthapuram with same-day and midnight delivery, starting at ₹399.</p>

<p>Thiruvananthapuram's flower supply comes from the wholesale market near East Fort and the flower vendors at Connemara Market. Kerala's own coastal and hill farms supply banana flowers (kadali poo) for cooking and jasmine for wear. The Padmanabhaswamy temple — the world's wealthiest temple, whose underground vaults were found to contain assets exceeding a trillion dollars — receives daily fresh flowers as royal offerings from the Travancore royal family. The flower culture here is royal in origin and democratic in practice.</p>

<h2>Quick Reference — Flower Delivery in Thiruvananthapuram</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thiruvananthapuram (Trivandrum), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kowdiar, Pattom, Kazhakuttam, Technopark, Vanchiyoor, Kesavadasapuram, Kumarapuram, Nalanchira, Palayam, Sreekaryam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Onam (Pookalam season), Vishu, Thiruvonam, Padmanabha Swami festivals, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, marigolds, konna (cassia fistula — seasonal), roses, chrysanthemums</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kerala's capital; Padmanabhaswamy Temple; Technopark IT hub; Travancore royal heritage</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Onam Pookalam — The Flower Carpet That Defines Kerala</h2>
<p>Onam is Kerala's harvest festival — ten days in August-September when the mythical King Mahabali is said to return from the underworld to visit his beloved people. The Pookalam (flower carpet) laid outside every Kerala home during Onam is one of the most beautiful folk art traditions in India: concentric rings of flowers in precise patterns, built up over ten days, each day more elaborate than the last. In Thiruvananthapuram, Onam Pookalam competition is a serious art form — schools, apartment complexes, and government offices compete on scale and intricacy. RedHeart delivers fresh Onam Pookalam flowers — marigolds, chrysanthemums, jasmine, and seasonal Kerala flowers — across Thiruvananthapuram every day of the Onam season, from Atham to Thiruvonam. We source the full spectrum of colours needed for a complete Pookalam, with same-day morning delivery so your carpet is ready before noon.</p>

<h2>Technopark to Kowdiar — Thiruvananthapuram's Social Geography</h2>
<p>Kowdiar, near the former Travancore royal palace, is the city's most aristocratic address — senior government officials, judicial families, and old Thiruvananthapuram families live in the tree-lined bungalows here. Pattom is the administrative hub, adjacent to the Secretariat and the civil service cluster. Kazhakuttam and Technopark, at the city's southern end, house over 60,000 IT professionals in India's first IT park — one of Kerala's most significant investments in the knowledge economy. Kesavadasapuram and Kumarapuram are middle-class residential zones with year-round birthday and anniversary demand. Palayam, the city's commercial heart, is fully covered.</p>

<h2>Why Thiruvananthapuram Trusts RedHeart</h2>
<p>Kerala has the highest literacy rate in India, and Thiruvananthapuram has the state's highest per-capita income among urban centres. These facts are relevant: an educated, discerning population with economic capacity demands quality services. RedHeart's flower freshness, delivery reliability, and presentation quality match what Kerala's capital expects. In a city that has been royal for centuries and modern for decades, we are proud to be the flower service of choice.</p>
`,
    faqs: [
      { question: "Can I order Onam Pookalam flowers for delivery in Thiruvananthapuram?", answer: "Yes! RedHeart delivers fresh Onam Pookalam flowers — marigolds, chrysanthemums, jasmine strings, and all the colours you need for a complete Pookalam — across Thiruvananthapuram every day of the Onam season. We offer early morning delivery so your Pookalam is ready before noon. Order for the full 10-day season with scheduled daily deliveries." },
      { question: "Is same-day flower delivery available in Technopark and Kazhakuttam, Thiruvananthapuram?", answer: "Yes, RedHeart delivers to Technopark, Kazhakuttam, Pattom, Kowdiar, Kesavadasapuram, Nalanchira, Sreekaryam, and all major areas of Thiruvananthapuram with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "What is Vishu Kani and can I order flowers for it in Trivandrum?", answer: "Vishu Kani is the ritual New Year's morning arrangement viewed at dawn — it traditionally includes konna (Cassia fistula) blossoms, fruits, a Vishnu idol, and other auspicious items. RedHeart delivers konna flowers and auspicious arrangement sets for Vishu Kani in Thiruvananthapuram during the April Vishu season." },
      { question: "Does RedHeart deliver to IT professionals at Technopark in Thiruvananthapuram?", answer: "Yes! RedHeart delivers to Technopark Phase 1, 2, and 3, as well as all office buildings in the Kazhakuttam IT corridor. We handle desk flower deliveries, birthday bouquets for colleagues, and festival-season personal gifting for Thiruvananthapuram's large IT workforce." },
      { question: "Is midnight flower delivery available in Thiruvananthapuram?", answer: "Yes, midnight delivery is available across Thiruvananthapuram. Order before 9 PM and choose your time — perfect for birthday surprises in Kowdiar, Pattom, Technopark residential areas, or any Trivandrum address." }
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
  console.log("\nDone — batch 6 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
