/**
 * Batch 4 — Nagpur, Vadodara, Bhopal, Coimbatore, Visakhapatnam, Agra
 * node scripts/seo-city-flowers-4.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {

  "nagpur": {
    cityName: "Nagpur",
    metaTitle: "Flower Delivery in Nagpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Nagpur with same-day delivery. Roses, bouquets & arrangements to Dharampeth, Sadar, Sitabuldi & all areas. From ₹399.",
    h1: "Flower Delivery in Nagpur",
    metaKeyword: "flower delivery in Nagpur, online flower delivery Nagpur, same day flower delivery Nagpur, florist Nagpur, send flowers Nagpur, midnight flower delivery Nagpur",
    footerContent: `
<h2>Flower Delivery in Nagpur — The Orange City's Warm Gifting Heart</h2>
<p>Nagpur sits at the exact geographical centre of India — the Zero Mile stone near the Secretariat marks the point equidistant from all four corners of the country. There is something fitting about a city at India's heart being known for warmth — the warmth of the Vidarbha sun, yes, but more importantly the warmth of its people. Nagpur is not a flashy city; it is a genuine one. When someone here gifts flowers, it means something. RedHeart delivers fresh flowers across Nagpur with same-day and midnight delivery, starting at ₹399, to a city that has always valued what is real over what is showy.</p>

<p>Nagpur is the orange capital of India — the Vidarbha belt produces some of the country's finest Nagpur oranges. But the city's flower culture is equally rich, drawing from markets near Itwari and Gandhi Market where flowers from Maharashtra and central India arrive daily. Marigolds are used extensively in the powerful Vidarbha Diwali — a festival celebrated here with particular devotion — and in the many local religious observances that fill Nagpur's calendar.</p>

<h2>Quick Reference — Flower Delivery in Nagpur</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagpur, Maharashtra (Zero Mile City)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharampeth, Sadar, Sitabuldi, Ramdaspeth, Civil Lines, Laxmi Nagar, Pratap Nagar, Manish Nagar, Wardha Road, MIHAN, Hingna</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diwali (Vidarbha-style), Navratri, Ganesh Puja, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, gerberas, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City symbol</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orange city, Zero Mile stone — geographical centre of India</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Diwali in Vidarbha — A Festival Worth Flowers</h2>
<p>Diwali in Nagpur and the broader Vidarbha region is celebrated with a devotion that carries the weight of agricultural tradition. For a region whose fortunes have long been tied to cotton and orange crops, the harvest festival carries deep meaning. Homes are decorated with marigold torans and rose garlands; the Lakshmi puja is elaborate; the gifting between families and neighbours is generous. RedHeart maintains dedicated Diwali stock for Nagpur, including marigold garlands by the metre, tuberose bunches, and mixed festival arrangements. We begin pre-Diwali deliveries three days before the main festival.</p>

<h2>Nagpur's Neighbourhoods — Dharampeth to MIHAN</h2>
<p>Dharampeth and Sadar are Nagpur's established residential and commercial zones — old money, old families, and a quiet dignity in their gifting culture. Civil Lines, near the government and judicial centres, sees flowers delivered for official occasions and senior professional birthdays. Laxmi Nagar and Pratap Nagar are large middle-class residential areas with steady birthday and anniversary demand. Wardha Road and the MIHAN aerospace SEZ on Nagpur's south — a growing industrial and IT zone — are newer delivery frontiers that RedHeart covers fully. The Hingna industrial area rounds out our city-wide network.</p>

<h2>Why Nagpur Orders From RedHeart</h2>
<p>Nagpur has a no-nonsense quality to it. People here do not want pretence — they want good flowers, delivered when promised, at a fair price. RedHeart's starting price of ₹399 is honest, our freshness is consistent, and our delivery keeps its word. In India's geographical heart, we are proud to be a flower service that matches the city's own honest character.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to MIHAN and Wardha Road in Nagpur?", answer: "Yes, RedHeart covers MIHAN Aerospace SEZ, Wardha Road corridor, and Hingna along with all established Nagpur areas including Dharampeth, Sadar, Civil Lines, Laxmi Nagar, and Pratap Nagar with same-day delivery." },
      { question: "Can I order Diwali flower garlands in Nagpur?", answer: "Yes! RedHeart delivers marigold garlands, tuberose bunches, and Diwali flower arrangements across Nagpur. We stock extensively for Vidarbha's Diwali season, with deliveries starting 3 days before the main festival to ensure every home is ready." },
      { question: "What is the delivery time for flowers in Nagpur?", answer: "Same-day flower delivery in Nagpur takes 2–4 hours for orders placed before 5 PM. Midnight delivery is available for orders placed before 9 PM. Next-day scheduled delivery is also an option for planned gifting." },
      { question: "Which flowers are most popular in Nagpur?", answer: "Marigolds and tuberose are essential for Nagpur's religious and festival occasions. Red roses are the top personal gift. Gerberas and mixed seasonal bouquets are popular for birthdays. For Ganesh Puja and home temples, loose marigold and hibiscus are the preferred offering flowers." },
      { question: "Is midnight flower delivery available in Nagpur?", answer: "Yes, midnight delivery is available across Nagpur. Order before 9 PM, choose the midnight slot, and we will deliver at your chosen time — perfect for birthday and anniversary surprises." }
    ]
  },

  "vadodara": {
    cityName: "Vadodara",
    metaTitle: "Flower Delivery in Vadodara | Same-Day & Midnight | RedHeart",
    metaDescription: "Send fresh flowers in Vadodara (Baroda) with same-day delivery. Roses, marigolds & bouquets to Alkapuri, Manjalpur, Karelibaug & all areas. From ₹399.",
    h1: "Flower Delivery in Vadodara",
    metaKeyword: "flower delivery in Vadodara, online flower delivery Vadodara Baroda, same day flower delivery Vadodara, florist Vadodara, send flowers Vadodara, Navratri flowers Vadodara",
    footerContent: `
<h2>Flower Delivery in Vadodara — Baroda's Royal Culture Meets Modern Gifting</h2>
<p>Vadodara — still called Baroda by its residents with an affectionate loyalty to the old name — carries the grace of the Gaekwad dynasty that ruled it for two centuries. The Laxmi Vilas Palace, the largest private residence in the world when completed in 1890, stands as the centrepiece of a city that has always prized culture, art, and ceremony. Maharaja Sayajirao University (MSU) — a liberal arts institution that Mahatma Gandhi praised — gave Vadodara an intellectual character that makes it distinctly different from Gujarat's other cities. Flowers in Vadodara are gifted with an awareness of occasion and aesthetics that reflects this heritage. RedHeart delivers fresh flowers across Vadodara with same-day and midnight delivery, starting at ₹399.</p>

<p>Vadodara's flower supply comes primarily from Anand district farms and the wholesale market near Nyay Mandir area. The proximity to Gujarat's flower belt means fresh arrivals daily — marigolds, roses, and tuberose that are market-fresh by the time they reach our preparation point in the city. Navratri in Vadodara is of particular cultural significance — the city's Garba is so respected that UNESCO recognised it as part of India's Intangible Cultural Heritage nomination.</p>

<h2>Quick Reference — Flower Delivery in Vadodara</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vadodara (Baroda), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alkapuri, Manjalpur, Karelibaug, Fatehgunj, Sayajigunj, Gotri, Vasna, Gorwa, Subhanpura, Sama, Waghodia Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navratri (UNESCO-recognised Garba), Diwali, weddings, birthdays, Janmashtami</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, tuberose, roses, chrysanthemums, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cultural identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Laxmi Vilas Palace, MSU, Gaekwad heritage</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Navratri — The Festival That Defines Vadodara</h2>
<p>Vadodara's Navratri is not just a festival — it is the city's annual self-expression. The Garba held at the Navratri Mahotsav at MSU grounds draws dancers in traditional Chaniya Choli who have been practising their steps since the previous year. The city's homes, societies, and commercial establishments are all decorated with fresh marigold garlands and flower torans. For nine nights, every available flower in Vadodara is in use. RedHeart prepares dedicated Navratri stock weeks in advance, with marigold garlands by the metre, tuberose bunches for home shrines, and rose arrangements for the gifting that happens between families during the festival.</p>

<h2>From Alkapuri to Waghodia Road — Vadodara's Coverage</h2>
<p>Alkapuri is Vadodara's most upscale residential area — old bungalows, tree-lined streets, and a social circle that values quality. Deliveries here are often for premium occasions: anniversary milestones, corporate senior gifting, and the kind of birthday celebration that requires an orchid arrangement rather than a simple rose bunch. Manjalpur and Karelibaug, Vadodara's large middle-class residential zones, see steady birthday and Navratri delivery traffic. Sayajigunj and Fatehgunj, near MSU, have a student population that gifts flowers for teachers, farewells, and Valentine's Day. Gotri and Subhanpura, newer residential developments along the city's western edge, are growing delivery zones.</p>

<h2>Why Vadodara Chooses RedHeart</h2>
<p>Vadodara has cultural expectations — a city shaped by a royal art institution and a liberal university does not settle for mediocre. RedHeart delivers flowers that would not look out of place in the Laxmi Vilas Palace's gardens — fresh, well-arranged, and presented with care. In the cultural capital of Gujarat, that standard matters.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Navratri flowers in Vadodara?", answer: "Yes! RedHeart stocks marigold garlands, tuberose bunches, and festive flower arrangements specifically for Navratri in Vadodara. We prepare well in advance for this city's enormous festival demand and deliver throughout the nine nights to homes, Garba venues, and community spaces." },
      { question: "Is same-day flower delivery available in Alkapuri and Manjalpur, Vadodara?", answer: "Yes, RedHeart delivers flowers same-day to Alkapuri, Manjalpur, Karelibaug, Fatehgunj, Sayajigunj, Gotri, Subhanpura, and all areas of Vadodara. Orders placed before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order premium flower arrangements for delivery in Vadodara?", answer: "Yes! RedHeart offers premium orchid arrangements, designer rose bouquets, and luxury floral gifts for delivery in Vadodara. Premium options are available from ₹999 upwards, with same-day delivery to Alkapuri, Gotri, and other upscale areas." },
      { question: "What flowers are most popular in Vadodara?", answer: "Marigolds and tuberose are essential for Vadodara's Navratri and Diwali seasons. Red roses are the top romantic gift year-round. Chrysanthemums and mixed seasonal bouquets are popular for birthdays. Orchids are preferred for premium corporate and personal gifting." },
      { question: "Is midnight flower delivery available in Vadodara?", answer: "Yes, RedHeart offers midnight delivery across Vadodara. Place your order before 9 PM and specify your delivery time — ideal for birthday surprises in Manjalpur, Karelibaug, or any other Vadodara neighbourhood." }
    ]
  },

  "bhopal": {
    cityName: "Bhopal",
    metaTitle: "Flower Delivery in Bhopal | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Bhopal with same-day delivery. Roses, bouquets & arrangements to MP Nagar, Arera Colony, Kolar Road & all areas. From ₹399.",
    h1: "Flower Delivery in Bhopal",
    metaKeyword: "flower delivery in Bhopal, online flower delivery Bhopal, same day flower delivery Bhopal, florist Bhopal, send flowers Bhopal, midnight flower delivery Bhopal, flowers MP Nagar Arera Colony",
    footerContent: `
<h2>Flower Delivery in Bhopal — The City of Lakes and the Art of the Quiet Gesture</h2>
<p>Bhopal is a city of lakes and contradictions. The Upper Lake — Bhoj Tal — is one of the oldest man-made lakes in the world, and it has shaped everything about how this city feels: reflective, unhurried, with a quality of light in the evenings that painters and photographers have always chased. Bhopal is also the capital of Madhya Pradesh, a city with significant political and administrative weight, and it has grown into a modern city without losing the gentleness of its lakeside character. RedHeart delivers fresh flowers across Bhopal with same-day and midnight delivery, starting at ₹399, to a city where the pace of gifting matches the pace of life — thoughtful rather than rushed.</p>

<p>Bhopal's flower supply runs through markets near Hamidia Road and the wholesale area near Iqbal Maidan. The city draws from both Madhya Pradesh's own farms and Maharashtra's supply chains. Bhopal has a significant Muslim population, giving Eid a particularly vivid character here — the old city's mosques and residences are decorated with flowers during Ramzan in a way that reflects the Nawabi culture the city shares with Lucknow and Hyderabad.</p>

<h2>Quick Reference — Flower Delivery in Bhopal</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhopal, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">MP Nagar, Arera Colony, Kolar Road, Shahpura, Ayodhya Nagar, Indrapuri, Habibganj, TT Nagar, Berasia Road, New Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eid, Navratri, Diwali, birthdays, weddings, government ceremonies</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, mixed seasonal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">City of Lakes — Upper Lake (Bhoj Tal), one of the oldest man-made lakes</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Eid in Bhopal — Flowers for the City's Most Heartfelt Festival</h2>
<p>Bhopal's old city — concentrated around the Jama Masjid, Taj-ul-Masajid, and the Chowk area — comes alive during Ramzan with an energy that the newer parts of the city look towards with admiration. Rose water is sold in abundance; fresh flower garlands decorate mosque entrances; families exchange red and white rose bouquets as Eid greetings. RedHeart delivers Eid flower arrangements to homes across the old city and the newer mixed neighbourhoods of TT Nagar, Shahpura, and Habibganj with the same same-day care.</p>

<h2>MP Nagar to Kolar Road — Bhopal's Modern Face</h2>
<p>MP Nagar, Bhopal's commercial and administrative heart, is where government offices, banks, and corporate headquarters cluster. Deliveries here often carry official weight — flowers for a senior officer's retirement, a congratulatory arrangement for a promotion, or a welcome bouquet for a delegation. Arera Colony is Bhopal's premium residential zone, with bungalows housing senior civil servants and business families. Kolar Road has emerged as a significant IT and educational corridor, with new apartment developments drawing a younger professional demographic. Habibganj station area and Shahpura are active gifting zones year-round.</p>

<h2>Why Bhopal Trusts RedHeart</h2>
<p>Bhopal is a city that rewards sincerity. Its lake-city temperament values what is genuine over what is flashy. RedHeart delivers flowers that are fresh because we source them the same morning, packaged because we care about presentation, and delivered on time because a promise means something here. By a city that has always understood the value of reflection, we are grateful to be trusted.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers during Eid in Bhopal?", answer: "Yes! RedHeart delivers fresh rose bouquets, marigold garlands, and Eid flower arrangements across Bhopal including the old city areas near Jama Masjid and Chowk, as well as TT Nagar, Shahpura, Habibganj, and all newer areas. We stock up specifically for the Eid season in Bhopal." },
      { question: "Is same-day flower delivery available in Arera Colony and MP Nagar, Bhopal?", answer: "Yes, RedHeart delivers flowers same-day to Arera Colony, MP Nagar, Kolar Road, Shahpura, TT Nagar, and all major areas of Bhopal. Orders placed before 5 PM are delivered within 2–4 hours." },
      { question: "Can I send flowers to a government office or official address in Bhopal?", answer: "Yes, RedHeart handles deliveries to government offices, secretariat buildings, and official addresses in Bhopal's MP Nagar and administrative zones. We ensure professional packaging and on-time delivery for official gifting occasions." },
      { question: "What flowers are most popular in Bhopal?", answer: "Roses are the top personal gift in Bhopal across all occasions. Marigolds and tuberose are widely used for Eid, Diwali, and home puja. Gerberas and mixed bouquets are popular for birthdays. Tuberose is valued for its fragrance, which resonates with Bhopal's culturally refined tastes." },
      { question: "Is midnight delivery available for flower bouquets in Bhopal?", answer: "Yes, midnight flower delivery is available across Bhopal. Order before 9 PM, select the midnight slot, and we will deliver at the time you specify — perfect for birthday surprises in Arera Colony or any Bhopal address." }
    ]
  },

  "coimbatore": {
    cityName: "Coimbatore",
    metaTitle: "Flower Delivery in Coimbatore | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Coimbatore with same-day delivery. Roses, jasmine & bouquets to RS Puram, Saibaba Colony, Peelamedu & all areas. From ₹399.",
    h1: "Flower Delivery in Coimbatore",
    metaKeyword: "flower delivery in Coimbatore, online flower delivery Coimbatore, same day flower delivery Coimbatore, florist Coimbatore, send flowers Coimbatore, flowers RS Puram Saibaba Colony",
    footerContent: `
<h2>Flower Delivery in Coimbatore — The Manchester of South India Has a Fragrant Side</h2>
<p>Coimbatore runs on engines — textile looms, pump manufacturing, precision engineering, and a growing IT sector that has made it Tamil Nadu's second-largest city after Chennai. But this industrial identity coexists with something quieter: a deep Tamil culture of flowers that goes back to the Sangam age, when the Kongu Nadu region (of which Coimbatore is the centre) had its own distinct literary and floral tradition. The city's proximity to the Nilgiris means cool air drifts in from the hills, and roses grown in Ooty's farms reach Coimbatore's markets with a freshness that flat-land cities cannot match. RedHeart delivers fresh flowers across Coimbatore with same-day and midnight delivery, starting at ₹399.</p>

<p>Coimbatore's wholesale flower market near Sankara Market and the Mettupalayam Road flower belt supply the city's enormous temple and domestic demand. Jasmine from Madurai, roses from Ooty, marigolds from local farms — Coimbatore sits at the crossroads of Tamil Nadu's most productive flower-growing regions. This geography is a flower lover's advantage, and RedHeart's sourcing reflects it.</p>

<h2>Quick Reference — Flower Delivery in Coimbatore</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coimbatore, Tamil Nadu (Kongu Nadu)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">RS Puram, Saibaba Colony, Peelamedu, Gandhipuram, Race Course, Ukkadam, Singanallur, Hopes College, Tidel Park, Avinashi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pongal, Tamil New Year, Karthigai Deepam, Navratri Golu, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, roses (Ooty-grown), marigolds, chrysanthemums, tuberose</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Flower advantage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gateway to Nilgiris — Ooty roses reach Coimbatore fresher than any other city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Pongal and Tamil Flower Occasions in Coimbatore</h2>
<p>Pongal in Coimbatore is celebrated with the full vigour of Kongu Nadu's agricultural tradition. Homes are decorated with fresh flowers and kolam; the entrance to every house gets a marigold toran on Pongal morning; jallikattu — the traditional bull-taming sport — brings an additional layer of festivity to the city. RedHeart delivers Pongal flowers across Coimbatore from early morning on the festival day. Karthigai Deepam, when jasmine and chrysanthemum garlands line the streets around temples like Chettipalayam Ramar and Perur Pateeswarar, is another high-demand flower period. Navratri Golu in Coimbatore is elaborate — the city's Brahmin households maintain multi-step doll displays requiring daily fresh flower decorations for nine days.</p>

<h2>RS Puram to Peelamedu — Coimbatore's Delivery Map</h2>
<p>RS Puram and Saibaba Colony are Coimbatore's most sought-after residential addresses — quiet, tree-lined, and home to the city's professional and business families. Deliveries here often mark significant personal milestones — retirement parties, silver weddings, and the kind of birthday that has been anticipated. Peelamedu, near the airport and Tidel Park, is Coimbatore's IT corridor where companies like Cognizant and Infosys BPO have offices and where young professionals receive desk flowers regularly. Gandhipuram, the city's bustling commercial centre, and the long Avinashi Road corridor are both fully covered. Singanallur and Hopes College areas serve the city's large student population.</p>

<h2>Why Coimbatore Trusts RedHeart</h2>
<p>Coimbatore is not a city that accepts less than what it paid for. The Kongu culture values directness and quality — if a flower arrives wilted, it will be noted, discussed, and remembered. RedHeart's sourcing advantage here — Ooty roses delivered same-day — means we can meet Coimbatore's exacting standards. Jasmine that was strung this morning, marigolds that were at the Sankara Market at 6 AM, roses that came down from the Nilgiris — that is the freshness level Coimbatore deserves, and that is what we deliver.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to Peelamedu and the IT corridor in Coimbatore?", answer: "Yes, RedHeart delivers flowers to Peelamedu, Tidel Park area, Avinashi Road IT corridor, Hopes College zone, and all major areas of Coimbatore with same-day delivery. We handle corporate flower orders for Coimbatore's growing tech sector." },
      { question: "Can I get jasmine and Ooty roses delivered in Coimbatore?", answer: "Yes! Coimbatore has a unique freshness advantage — Ooty roses reach the city through the Nilgiris supply chain. RedHeart delivers fresh jasmine strings and Ooty-sourced roses across Coimbatore. These are among the freshest flowers available in any Indian city thanks to the city's proximity to hill-station growing zones." },
      { question: "Are flowers available for Pongal and Navratri Golu delivery in Coimbatore?", answer: "Yes! RedHeart delivers fresh marigolds, chrysanthemums, jasmine, and seasonal flowers for Pongal and Navratri Golu in Coimbatore. We stock up specifically for these festival periods and begin early deliveries on festival mornings so your home is ready in time." },
      { question: "Which areas of Coimbatore does RedHeart cover?", answer: "RedHeart covers RS Puram, Saibaba Colony, Peelamedu, Gandhipuram, Race Course, Ukkadam, Singanallur, Hopes College, Tidel Park, Avinashi Road, and all major Coimbatore areas with same-day delivery." },
      { question: "Is midnight flower delivery available in Coimbatore?", answer: "Yes, midnight flower delivery is available across Coimbatore. Order before 9 PM and choose your delivery time — ideal for birthday surprises in RS Puram, Saibaba Colony, or any other Coimbatore neighbourhood." }
    ]
  },

  "visakhapatnam": {
    cityName: "Visakhapatnam",
    metaTitle: "Flower Delivery in Visakhapatnam | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Visakhapatnam (Vizag) with same-day delivery. Roses, bouquets to MVP Colony, Gajuwaka, Madhurawada & all areas. From ₹399.",
    h1: "Flower Delivery in Visakhapatnam",
    metaKeyword: "flower delivery in Visakhapatnam Vizag, online flower delivery Vizag, same day flower delivery Visakhapatnam, florist Vizag, send flowers Visakhapatnam, flowers MVP Colony Gajuwaka",
    footerContent: `
<h2>Flower Delivery in Visakhapatnam — Where the Eastern Ghats Meet the Bay of Bengal</h2>
<p>Visakhapatnam — Vizag to the millions who love it — is a city that combines the honest energy of a port town with the natural beauty of a beach city nestled between hills and sea. The INS Kursura submarine at RK Beach, the Araku Valley coffee estates a few hours away, the limestone caves at Borra — Vizag has a geography that shapes its character. People here are warm, direct, and genuinely proud of their city's natural gifts. The flower culture in Vizag reflects that directness — no excessive ceremony, just good flowers given with warmth. RedHeart delivers fresh flowers across Visakhapatnam with same-day and midnight delivery, starting at ₹399.</p>

<p>Vizag's flower supply runs through the wholesale market near Jagadamba Junction and the wholesale market in Gajuwaka. The city draws flowers from Andhra Pradesh's Kadapa belt and from Odisha's coastal growing regions. Telugu flower culture places special importance on jasmine (malle puvvu), tuberose, and marigolds for temple worship — and Vizag's many temples, from the Simhachalam Varaha Lakshmi Narasimha Temple to the Kanaka Mahalakshmi Temple on Beach Road, create constant flower demand that shapes the city's market rhythms.</p>

<h2>Quick Reference — Flower Delivery in Visakhapatnam</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Visakhapatnam (Vizag), Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">MVP Colony, Gajuwaka, Madhurawada, Seethammadhara, Dwaraka Nagar, Rushikonda, Rishikonda, Steel Plant, BHEL township, Kommadi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ugadi, Dasara, birthdays, anniversaries, Vinayaka Chavithi, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine (malle), roses, marigolds, tuberose, gerberas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City character</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Port city, beach city, Simhachalam temple city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Ugadi and Vizag's Telugu Flower Calendar</h2>
<p>Ugadi — the Telugu and Kannada new year — is Vizag's most significant cultural occasion. Homes are decorated with mango leaf torans and fresh flowers. The Ugadi Pachadi — a dish that mixes six flavours symbolising life's variety — is prepared alongside flower-decorated prayer rooms. Vinayaka Chavithi (Ganesh Chaturthi) in August-September brings the city's neighbourhood associations to life with decorated Ganesh pandals requiring fresh marigolds and rose garlands. Dasara is celebrated with nine days of elaborate home puja, each day requiring fresh flowers. RedHeart prepares dedicated stock for all three of these major Vizag festival periods.</p>

<h2>MVP Colony to Rushikonda — Vizag's Delivery Range</h2>
<p>MVP Colony (Maharani Peta, Visakhapatnam) is the city's most prestigious residential address — spacious plots, families that have lived here for generations, and a social life centred on the Bheemunipatnam beach road and the Club. Deliveries here are for significant occasions. Madhurawada and Kommadi are Vizag's rapidly growing IT and residential corridors where young professionals and families in the new apartment projects receive regular gifting deliveries. Rushikonda, with its beach and hill resorts, sees romantic flower deliveries for couples marking special occasions. Gajuwaka, the industrial zone housing the steel plant and HPCL, has a large township population with steady birthday and anniversary demand.</p>

<h2>Why Vizag Orders From RedHeart</h2>
<p>Vizag people are direct and warm — they do not want overcomplicated things, they want things that work. RedHeart works. Same-day delivery within hours, flowers that are fresh when they arrive, a message card that carries what you want to say — these are the things that matter in a city that values the gesture over the packaging. We have delivered to Beach Road villas, Steel Plant townships, and Madhurawada apartments alike, and the feedback is consistent: Vizag orders from RedHeart because we deliver what we promise.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to MVP Colony and Madhurawada in Vizag?", answer: "Yes, RedHeart delivers flowers to MVP Colony, Madhurawada, Kommadi, Rushikonda, Seethammadhara, Dwaraka Nagar, and all major areas of Visakhapatnam with same-day delivery. We also cover the Steel Plant township and BHEL area in Gajuwaka." },
      { question: "Can I order flowers for Ugadi celebrations in Visakhapatnam?", answer: "Yes! RedHeart delivers marigold garlands, tuberose bunches, and fresh flower torans for Ugadi in Visakhapatnam. We stock festival flowers for Ugadi, Vinayaka Chavithi, and Dasara — the three major Telugu flower occasions in Vizag — and maintain extra supply during these festival periods." },
      { question: "Is jasmine (malle puvvu) available for delivery in Visakhapatnam?", answer: "Yes! Jasmine is one of Andhra Pradesh's most-used daily flowers and RedHeart delivers fresh malle puvvu (jasmine) strings and bunches across Visakhapatnam. Perfect for temple offerings, hair decoration, and home fragrance." },
      { question: "Can I get midnight flower delivery in Visakhapatnam for a surprise?", answer: "Yes, midnight flower delivery is available across Visakhapatnam. Order before 9 PM, select your delivery time, and we will deliver at the exact hour you choose — perfect for birthday and anniversary surprises in MVP Colony, Madhurawada, or anywhere in Vizag." },
      { question: "Does RedHeart deliver flowers near RK Beach and the beachfront areas of Vizag?", answer: "Yes! RedHeart delivers to all beachfront areas of Vizag including RK Beach area, Lawson's Bay Colony, Beach Road, and Bheemunipatnam. Whether you're celebrating a special occasion at a beach-facing restaurant or a beachside home, we deliver fresh flowers to your address." }
    ]
  },

  "agra": {
    cityName: "Agra",
    metaTitle: "Flower Delivery in Agra | Same-Day & Midnight | RedHeart",
    metaDescription: "Send fresh flowers in Agra with same-day delivery. Roses, bouquets & arrangements near Taj Mahal, Sikandra, Fatehabad Road & all areas. From ₹399.",
    h1: "Flower Delivery in Agra",
    metaKeyword: "flower delivery in Agra, online flower delivery Agra, same day flower delivery Agra, florist Agra, send flowers Agra, midnight flower delivery Agra, flowers near Taj Mahal",
    footerContent: `
<h2>Flower Delivery in Agra — Where the World's Greatest Love Monument Stands</h2>
<p>Agra is the city the Taj Mahal built. Shah Jahan's monument to love — marble inlaid with 28 varieties of semi-precious stones, standing in a garden designed with four rivers of water — is humanity's most extravagant flower arrangement, in a sense: a permanent expression of what flowers usually say in a week. The city that lives in the Taj's shadow has a deep awareness of what it means to gift something beautiful. Agra's flower culture carries that weight lightly — rose petals on the Yamuna ghats at sunrise, marigold garlands at the Mankameshwar Mahadev temple, and a steady trade in fresh flowers from the city's wholesale market near Sanjay Place that has supplied weddings and pujas for generations. RedHeart delivers fresh flowers across Agra with same-day and midnight delivery, from ₹399.</p>

<p>Agra's flower supply draws from the Mathura-Agra belt's farms, supplemented by Rajasthan's growing regions when demand spikes. The city's wedding season — heavily concentrated in the winter months when the Taj Mahal looks most majestic under clear skies — creates an enormous flower demand. Destination weddings at Agra's heritage hotels require flowers on a scale that only a well-prepared supply chain can meet.</p>

<h2>Quick Reference — Flower Delivery in Agra</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agra, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehabad Road, Taj Nagari, Sikandra, Shahganj, Sanjay Place, Kamla Nagar, Civil Lines, Bodla, Dayal Bagh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Weddings (peak Oct–Feb), Taj anniversary visits, Diwali, Holi, Karva Chauth</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, lily, mixed romantic</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Famous for</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Taj Mahal — the most famous monument to love in the world</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Romance, Weddings, and the Taj Effect on Agra's Flower Culture</h2>
<p>Every year, couples come to Agra specifically to stand before the Taj Mahal and mark their love. Anniversary trips to Agra, honeymoon stays at the heritage hotels on Fatehabad Road, and proposals at the Taj Mahal garden are a constant — and many of them call RedHeart. A rose bouquet delivered to a hotel suite before the couple arrives, a romantic arrangement to be found on the pillow, or flowers for the private Taj garden visit that someone organised as a surprise — these are the orders that remind us why flowers exist. RedHeart handles them all, with midnight and same-day delivery to every hotel and homestay in Agra's tourist belt.</p>

<h2>Agra Beyond the Taj — Residents and Regular Gifting</h2>
<p>Agra is more than its tourist face. The city has a large resident population in Shahganj, Kamla Nagar, Civil Lines, and the Dayal Bagh community (a religious community famous for its extraordinary marble mausoleum built by devotees over decades). Birthday deliveries to Agra's residential areas, anniversary roses for families in Sikandra and Bodla, and festival flowers for the city's Karva Chauth and Diwali celebrations are the daily work of RedHeart's Agra operations.</p>

<h2>Why Agra Chooses RedHeart</h2>
<p>In a city defined by the world's greatest monument to love, the bar for romantic gifting is extraordinarily high. RedHeart's Agra deliveries rise to that standard — fresh flowers that are worthy of the setting, delivered with the care that the occasion demands. Whether the recipient is a tourist celebrating an anniversary at the Taj or a resident family marking a birthday in Shahganj, the quality is identical. In Agra, where love is literally the reason the city exists on the world map, RedHeart is proud to help people express it well.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to hotels near the Taj Mahal in Agra?", answer: "Yes! RedHeart delivers to hotels and resorts on Fatehabad Road, Taj Nagari, and all areas near the Taj Mahal. We handle anniversary surprise deliveries, honeymoon arrangements, and romantic flower setups for hotel suites across Agra's tourist belt with same-day and midnight delivery." },
      { question: "Can I get midnight flower delivery in Agra for a special occasion?", answer: "Yes, midnight flower delivery is available across Agra. This is perfect for couples celebrating anniversaries at heritage hotels near the Taj Mahal or for birthday surprises. Order before 9 PM and we deliver at your chosen time." },
      { question: "What flowers are most popular for romantic occasions in Agra?", answer: "Red roses are the undisputed favourite for romantic gifting in Agra — perfectly suited to a city defined by love and the Taj Mahal. Long-stem red rose bouquets, mixed romantic arrangements with lilies and tuberose, and luxury rose boxes are our most popular orders from couples visiting Agra." },
      { question: "Does RedHeart deliver to Dayal Bagh and Sikandra in Agra?", answer: "Yes, RedHeart covers Dayal Bagh, Sikandra, Bodla, Civil Lines, Kamla Nagar, Shahganj, and all major residential areas of Agra with same-day flower delivery." },
      { question: "Can I send flowers to a restaurant or event venue in Agra for a proposal or anniversary?", answer: "Yes! RedHeart coordinates flowers for proposals, anniversary dinners, and special events at Agra's restaurants and event venues. Arrange the flowers to be delivered to the venue before you arrive, and we ensure everything is in place before your guest does. Same-day and advance scheduling both available." }
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
  console.log("\nDone — batch 4 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
