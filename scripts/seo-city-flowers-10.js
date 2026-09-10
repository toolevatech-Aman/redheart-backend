/**
 * Batch 10 — Hubballi, Warangal, Kozhikode, Jabalpur, Cuttack, Tirupati
 * node scripts/seo-city-flowers-10.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {

  "hubballi": {
    cityName: "Hubballi",
    metaTitle: "Flower Delivery in Hubballi (Hubli) | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Hubballi with same-day delivery. Roses, marigolds & bouquets to Vidyanagar, Keshwapur, Gokul Road & all areas. From ₹399.",
    h1: "Flower Delivery in Hubballi",
    metaKeyword: "flower delivery in Hubballi Hubli, online flower delivery Hubli Dharwad, same day flower delivery Hubballi, florist Hubballi, send flowers Hubballi, flowers Vidyanagar Hubballi",
    footerContent: `
<h2>Flower Delivery in Hubballi — North Karnataka's Commercial Engine Has a Generous Heart</h2>
<p>Hubballi (Hubli) is one of Karnataka's most commercially vibrant cities — it forms a twin-city with Dharwad (7 km away), which is the district headquarters and a university town, creating a combined urban agglomeration with complementary characters. Hubballi itself is the commercial city: its wholesale textile market, railway wagon repair workshop (one of the largest in India), and growing IT sector make it North Karnataka's economic heart. The city's identity is shaped by its Lingayat tradition — the Veerashaiva community that has been North Karnataka's dominant social force for centuries, with its own distinct cultural, temple, and gifting practices. RedHeart delivers fresh flowers across Hubballi with same-day and midnight delivery, starting at ₹399.</p>

<p>Hubballi's flower supply comes from the wholesale market near Gokul Road and the daily market at Koppikar Road. Karnataka's flower-farming belt in the Bijapur-Bagalkot region supplies marigolds and tuberose, while the proximity to Pune's supply chain brings roses and gerberas. The Siddharoodha Math — one of the most important Veerashaiva institutions in the country, located in Hubballi — creates significant flower demand for its daily puja and major religious events.</p>

<h2>Quick Reference — Flower Delivery in Hubballi</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hubballi (Hubli), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vidyanagar, Keshwapur, Gokul Road, Navanagar, Unkal, Tarihal, Hosur Road, Old Hubli, Deshpande Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ugadi, Dasara, Ganesh Chaturthi, Basava Jayanti (Lingayat), birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, jasmine, gerberas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">North Karnataka's commercial capital; Lingayat culture; twin city with Dharwad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Basava Jayanti — Hubballi's Own Sacred Occasion</h2>
<p>Basava Jayanti — the birth anniversary of Basavanna, the 12th-century philosopher-saint who founded the Lingayat movement — is celebrated with particular devotion in Hubballi and across North Karnataka. The Siddharoodha Math in Hubballi, and the Basaveshwara temples throughout the city, receive thousands of devotees bearing fresh flowers. Marigold garlands and tuberose are the primary offering flowers of the Veerashaiva tradition. RedHeart maintains dedicated stock for Basava Jayanti in Hubballi, delivering to homes and temples across the city.</p>

<h2>Vidyanagar to Gokul Road — Hubballi's Urban Character</h2>
<p>Vidyanagar is Hubballi's most prestigious residential area — planned, orderly, and home to the city's professional class, including faculty from the many colleges and institutions that give Hubballi its academic dimension. Keshwapur and Navanagar are established middle-class areas with consistent year-round demand. Gokul Road is the city's commercial and residential expansion corridor. Deshpande Nagar, a significant residential area, and the older Old Hubli areas round out the coverage. The IIT Dharwad campus, near the twin-city boundary, is also within RedHeart's delivery range.</p>

<h2>Why Hubballi Chooses RedHeart</h2>
<p>Hubballi is a hard-working commercial city with a warm cultural soul — the North Karnataka spirit combines business acumen with Lingayat devotion and Kannada cultural pride. RedHeart matches this character: reliable service, fair prices, fresh flowers that respect the devotional and personal occasions for which they are given. In the city that moves North Karnataka's commerce and carries its culture, RedHeart delivers every bloom with care.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Vidyanagar and Gokul Road, Hubballi?", answer: "Yes, RedHeart covers Vidyanagar, Keshwapur, Gokul Road, Navanagar, Unkal, and all major Hubballi areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order Basava Jayanti flowers in Hubballi?", answer: "Yes! RedHeart delivers marigold garlands, tuberose, and floral offerings for Basava Jayanti celebrations across Hubballi. We understand the importance of this Lingayat festival in North Karnataka and stock accordingly." },
      { question: "Does RedHeart deliver flowers to IIT Dharwad near Hubballi?", answer: "Yes, IIT Dharwad and the Dharwad campus areas are within RedHeart's Hubballi delivery range. We handle academic occasion flowers and personal gifting to campus addresses." },
      { question: "What flowers are most popular in Hubballi?", answer: "Marigolds are essential for all temple and festival occasions in Hubballi. Tuberose is widely used in Lingayat religious ceremonies and weddings. Roses are the top personal gift. Jasmine is popular for daily home puja." },
      { question: "Is midnight flower delivery available in Hubballi?", answer: "Yes, midnight delivery is available across Hubballi. Order before 9 PM and choose your time — perfect for birthday surprises in Vidyanagar, Keshwapur, or any Hubballi address." }
    ]
  },

  "warangal": {
    cityName: "Warangal",
    metaTitle: "Flower Delivery in Warangal | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Warangal with same-day delivery. Roses, jasmine & bouquets to Hanamkonda, Kazipet, SCCL Colony & all areas. From ₹399.",
    h1: "Flower Delivery in Warangal",
    metaKeyword: "flower delivery in Warangal, online flower delivery Warangal Hanamkonda, same day flower delivery Warangal, florist Warangal, send flowers Warangal, flowers Hanamkonda Kazipet",
    footerContent: `
<h2>Flower Delivery in Warangal — The Kakatiya Capital Still Blooms</h2>
<p>Warangal was once the capital of the Kakatiya dynasty, whose rule over Telangana from the 12th to the 14th century produced some of the finest examples of Deccan temple architecture in existence — the Thousand Pillar Temple (Rudreshwara Swamy temple) at Hanamkonda, with its star-shaped plan and exquisitely carved black basalt pillars, and the Warangal Fort's carved gateways (Kakatiya Kala Thoranam) are UNESCO tentative list monuments. The city today is a three-city agglomeration: Warangal, Hanamkonda, and Kazipet, each with its own character, together forming one of Telangana's most important regional centres. RedHeart delivers fresh flowers across Warangal with same-day and midnight delivery, starting at ₹399.</p>

<p>Warangal's flower supply comes from the wholesale market near Subedari and the daily market at Hanamkonda. Telangana's farms supply jasmine and marigolds abundantly — the Warangal district's own agricultural belt around the Kakatiya canal system produces flowers commercially. The Bhadrakali temple, one of the most important in Telangana, creates sustained flower demand year-round.</p>

<h2>Quick Reference — Flower Delivery in Warangal</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Warangal, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanamkonda, Kazipet, Subedari, Balasamudram, Naimnagar, SCCL Colony, NIT Warangal, Nakkalagutta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bathukamma (Telangana's floral festival), Ugadi, Bonalu, Dasara, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds (essential for Bathukamma), jasmine, roses, tuberose, gerberas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kakatiya dynasty capital; Thousand Pillar Temple; Bhadrakali; NIT Warangal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Bathukamma — Telangana's Flower Festival Belongs to Warangal</h2>
<p>Bathukamma is Telangana's state festival — a uniquely Telugu women's festival celebrated during Dasara season, in which women arrange concentric rings of seasonal wildflowers into a tower-shaped floral arrangement (also called Bathukamma) and carry it on their heads in procession to the nearest water body, where it is immersed. The flowers used — tangedu (Cassia auriculata), gunugupuvvu (balsam), seethaphala puvvu (custard apple flowers), and marigolds — are specific to the festival. In Warangal, Bathukamma is celebrated with particular regional pride since the festival has deep Telangana roots. RedHeart delivers Bathukamma-season flowers including marigolds and seasonal blooms across Warangal throughout the Dasara fortnight.</p>

<h2>NIT Warangal to Hanamkonda — The City's Education and History</h2>
<p>NIT Warangal (National Institute of Technology) is one of India's premier engineering institutions — its campus near the Warangal urban area produces graduates who go on to lead India's technology sector. The faculty and student population constitute a significant delivery zone for academic occasion flowers, farewells, and personal celebrations. Hanamkonda, the oldest of the three sister cities, carries the historical legacy of the Kakatiya era — the Thousand Pillar Temple is here, and the neighbourhood surrounding it maintains a deep temple-going culture. Kazipet, the railway junction town, is a transit hub with a large working population.</p>

<h2>Why Warangal Trusts RedHeart</h2>
<p>Warangal's history is written in stone — the Kakatiya craftsmen carved their devotion into pillars and gateways that have survived seven centuries. The living tradition of that devotion continues in the flowers offered daily at Bhadrakali temple and carried to the water in Bathukamma processions. RedHeart serves that tradition with fresh flowers delivered reliably to every corner of the Kakatiya capital.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Bathukamma flowers in Warangal?", answer: "Yes! Bathukamma is Telangana's most important floral festival and RedHeart delivers marigolds, seasonal wildflowers, and Bathukamma-appropriate blooms across Warangal during the Dasara festival season. We understand the specific flower needs of this uniquely Telugu festival." },
      { question: "Is same-day flower delivery available in Hanamkonda and Kazipet, Warangal?", answer: "Yes, RedHeart covers Hanamkonda, Kazipet, Subedari, Balasamudram, and all major Warangal areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Does RedHeart deliver flowers to NIT Warangal campus?", answer: "Yes! NIT Warangal is covered by RedHeart. We deliver for faculty felicitations, farewell bouquets, graduation celebrations, and personal gifting to campus addresses." },
      { question: "Can I order Bonalu festival flowers in Warangal?", answer: "Yes! Bonalu — the Telangana goddess festival — is another major flower occasion in Warangal. RedHeart delivers marigolds, tuberose, and festival flower arrangements for Bonalu celebrations." },
      { question: "Is midnight flower delivery available in Warangal?", answer: "Yes, midnight delivery is available across Warangal. Order before 9 PM and choose your time — perfect for birthday surprises in Hanamkonda, Kazipet, or any Warangal address." }
    ]
  },

  "kozhikode": {
    cityName: "Kozhikode",
    metaTitle: "Flower Delivery in Kozhikode (Calicut) | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kozhikode with same-day delivery. Roses, jasmine & Onam flowers to Palayam, Nadakkavu, Mavoor Road & all areas. From ₹399.",
    h1: "Flower Delivery in Kozhikode",
    metaKeyword: "flower delivery in Kozhikode Calicut, online flower delivery Calicut, same day flower delivery Kozhikode, florist Calicut, send flowers Kozhikode, flowers Palayam Nadakkavu Calicut",
    footerContent: `
<h2>Flower Delivery in Kozhikode — Where Vasco da Gama Landed and Zamorin's Flowers Bloomed</h2>
<p>Kozhikode — still called Calicut by many — is one of India's most historically significant cities. Vasco da Gama landed at Kappad beach, 16 km north of the city, in 1498, changing the course of world history — the Portuguese arrival began the spice trade that remade European economies and eventually brought colonial rule to India. The city that received da Gama was ruled by the Zamorin (Samoothiri), a dynasty whose cultural patronage produced some of the finest traditions in Malabar's music, dance, and literature. Kozhikode is also the birthplace of the calico fabric that gave the world the word "calico" (from Calicut). This layered history gives Kozhikode a cultural confidence that modern cities often lack — and its flower culture is equally rich, shaped by both the Malabari Muslim tradition (a significant community here) and the Kerala Hindu traditions of Onam and Vishu. RedHeart delivers fresh flowers across Kozhikode with same-day and midnight delivery, starting at ₹399.</p>

<p>Kozhikode's flower supply runs through the market near Palayam and the wholesale flower belt near Mananchira. Kerala's own coastal farms supply jasmine and marigolds abundantly. The proximity to Wayanad's hill farms in the Western Ghats brings additional freshness to the supply chain.</p>

<h2>Quick Reference — Flower Delivery in Kozhikode</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kozhikode (Calicut), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palayam, Nadakkavu, Mavoor Road, Kottakkal, Kunnamangalam, Chevayur, Beypore, Feroke, Westhill, Bilathikulam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Onam (Pookalam), Eid ul-Fitr, Vishu, Theyyam season, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, marigolds, roses, chrysanthemums, tuberose</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vasco da Gama's landing point; spice trade history; Zamorin's Malabar capital</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Eid in Kozhikode — The Malabar Muslim Celebration</h2>
<p>Kozhikode has one of India's most vibrant Mappila Muslim communities — the Malabari Muslims whose identity was shaped by centuries of Arab trade and the Zamorin's patronage. Eid in Kozhikode is a celebration of extraordinary warmth and generosity: the old city's mosques fill with thousands; the seafront near Mananchira fills with families in their finest clothes; rose bouquets and flower garlands are exchanged between the extended family networks that characterise Malabar Muslim social life. RedHeart delivers Eid flower arrangements across Kozhikode — roses, jasmine, and mixed bouquets — for a community whose gifting culture is among the most generous in Kerala.</p>

<h2>Onam in the Zamorin's City</h2>
<p>Onam Pookalam in Kozhikode carries the same devotion as across Kerala — concentric rings of fresh flowers laid outside every home from Atham to Thiruvonam. The Mananchira Maidan, Kozhikode's central public space, hosts elaborate public Pookalam competitions during Onam. RedHeart delivers fresh Onam Pookalam flowers — marigolds, chrysanthemums, jasmine — across Kozhikode every day of the ten-day season with morning delivery options so your carpet is ready before 9 AM.</p>

<h2>Why Kozhikode Trusts RedHeart</h2>
<p>Kozhikode has been a trading city for a thousand years — its merchants knew quality because their livelihoods depended on it, and that standard has passed into the city's consumer culture. RedHeart delivers flowers that meet Kozhikode's quality expectations: fresh, well-arranged, and delivered on time to a city that has always known the difference between good and merely adequate.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Onam Pookalam flowers in Kozhikode?", answer: "Yes! RedHeart delivers fresh marigolds, chrysanthemums, jasmine, and all Pookalam flowers for Onam across Kozhikode every day of the ten-day season. We offer early morning delivery so your Pookalam is ready before the day begins." },
      { question: "Can I order Eid flowers for delivery in Kozhikode?", answer: "Yes! RedHeart delivers rose bouquets, jasmine garlands, and Eid flower arrangements across Kozhikode. We understand the Malabar Muslim gifting tradition and stock fresh flowers specifically for Kozhikode's Eid celebrations." },
      { question: "Is same-day flower delivery available in Palayam and Nadakkavu, Kozhikode?", answer: "Yes, RedHeart covers Palayam, Nadakkavu, Mavoor Road, Kunnamangalam, Chevayur, Beypore, Westhill, and all major Kozhikode areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Does RedHeart deliver to Beypore in Kozhikode?", answer: "Yes! Beypore — Kozhikode's historic port area, still known for its traditional wooden dhow boat building — is covered by RedHeart with same-day delivery." },
      { question: "Is midnight flower delivery available in Kozhikode?", answer: "Yes, midnight delivery is available across Kozhikode. Order before 9 PM and choose your time — perfect for birthday surprises in Palayam, Nadakkavu, Mavoor Road, or any Kozhikode address." }
    ]
  },

  "jabalpur": {
    cityName: "Jabalpur",
    metaTitle: "Flower Delivery in Jabalpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jabalpur with same-day delivery. Roses, marigolds & bouquets to Civil Lines, Napier Town, Wright Town & all areas. From ₹399.",
    h1: "Flower Delivery in Jabalpur",
    metaKeyword: "flower delivery in Jabalpur, online flower delivery Jabalpur, same day flower delivery Jabalpur, florist Jabalpur, send flowers Jabalpur, flowers Civil Lines Napier Town Jabalpur",
    footerContent: `
<h2>Flower Delivery in Jabalpur — The Marble Rocks City Grows Its Own Beauty</h2>
<p>Jabalpur sits in the heart of Madhya Pradesh on the banks of the Narmada river — a city whose natural surroundings compete with its urban character for attention. The Bhedaghat marble rocks, where the Narmada cuts through gorges of white marble that glow silver in moonlight, are one of India's most extraordinary natural sights. The Dhuandhar falls at Bhedaghat, where the Narmada drops twenty-five feet through a narrow marble gorge in a cloud of mist that gives the falls their name ("smoke and thunder"), attract visitors from across the country. Jabalpur is also historically significant as a military cantonment city — Gun Carriage Factory (one of India's oldest ordnance factories), Vehicle Factory Jabalpur, and Ordnance Factory Khamaria are all here, giving the city a distinctly military-industrial character alongside its natural beauty. RedHeart delivers fresh flowers across Jabalpur with same-day and midnight delivery, starting at ₹399.</p>

<p>Jabalpur's flower supply comes from the wholesale market near Madan Mahal and the daily market at Sadar Bazar. Madhya Pradesh's own farms supply marigolds and seasonal flowers, supplemented by the supply chain from Nagpur and the Vidarbha belt.</p>

<h2>Quick Reference — Flower Delivery in Jabalpur</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jabalpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Napier Town, Wright Town, Madan Mahal, Katni Road, Adhartal, Vijay Nagar, Cantt, Bhedaghat Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diwali, Navratri, Narmada Jayanti, birthdays, Army/defence occasions</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhedaghat marble rocks; Narmada riverfront; ordnance factory city; High Court</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Narmada Jayanti — Jabalpur's Sacred Occasion</h2>
<p>Narmada Jayanti — the birthday of the Narmada river, celebrated as a goddess in Madhya Pradesh — is one of Jabalpur's most important religious occasions. The ghats at Bhedaghat and the Tilwara Ghat in Jabalpur are crowded with devotees offering flowers to the sacred river. Marigold petals, tuberose garlands, and lotus are floated on the Narmada's currents on this day. The Trifeni Ghat ceremony, where three tributaries meet the Narmada near Jabalpur, draws large crowds. RedHeart delivers Narmada Jayanti flowers to Jabalpur's homes so families can prepare their offerings before heading to the river.</p>

<h2>Civil Lines to Cantt — Jabalpur's Institutional Belt</h2>
<p>Civil Lines is Jabalpur's colonial administrative area — the Madhya Pradesh High Court (Jabalpur hosts one of India's three original High Courts), the commissioner's office, and the old administrative bungalows give it a stately character. Napier Town and Wright Town are the old residential areas built during the British cantonment era. The Cantonment, housing Army and defence personnel from the ordnance factories, is a major delivery zone with formal gifting traditions. Madan Mahal, the area below the historic Madan Mahal fort, and Adhartal are established residential zones. Vijay Nagar is a newer middle-class development.</p>

<h2>Why Jabalpur Orders From RedHeart</h2>
<p>Jabalpur's marble rocks glow silver by moonlight — the city knows natural beauty intimately. The flowers we deliver to Jabalpur are chosen with the same aesthetic awareness that makes its marble gorges so striking. In a city where nature sets the standard, RedHeart brings roses and marigolds that are worthy of the Narmada's banks.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Civil Lines and Napier Town, Jabalpur?", answer: "Yes, RedHeart covers Civil Lines, Napier Town, Wright Town, Madan Mahal, Cantt, Adhartal, Vijay Nagar, and all major Jabalpur areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order flowers for Narmada Jayanti celebrations in Jabalpur?", answer: "Yes! RedHeart delivers marigolds, tuberose garlands, and lotus for Narmada Jayanti offerings in Jabalpur. We deliver to homes before the Tilwara and Bhedaghat ghat celebrations so families are ready for the sacred river offerings." },
      { question: "Does RedHeart deliver to Jabalpur Cantonment and defence colonies?", answer: "Yes! Jabalpur Cantonment and ordnance factory colonies (Khamaria, Vehicle Factory area) are fully covered by RedHeart with same-day delivery. We handle formal defence occasion flowers and personal gifting." },
      { question: "Can I get flowers delivered near Bhedaghat in Jabalpur?", answer: "Yes, RedHeart delivers to the Bhedaghat Road area and the localities near Jabalpur's famous marble rocks. Whether for a hotel stay near the falls or a residential address in the area, we deliver same-day." },
      { question: "Is midnight flower delivery available in Jabalpur?", answer: "Yes, midnight delivery is available across Jabalpur. Order before 9 PM and choose your time — perfect for birthday surprises in Civil Lines, Napier Town, Cantt, or any Jabalpur address." }
    ]
  },

  "cuttack": {
    cityName: "Cuttack",
    metaTitle: "Flower Delivery in Cuttack | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Cuttack with same-day delivery. Roses, marigolds & Durga Puja flowers to Badambadi, Buxi Bazar, Mangalabag & all areas. From ₹399.",
    h1: "Flower Delivery in Cuttack",
    metaKeyword: "flower delivery in Cuttack, online flower delivery Cuttack, same day flower delivery Cuttack, florist Cuttack, send flowers Cuttack, Durga Puja flowers Cuttack",
    footerContent: `
<h2>Flower Delivery in Cuttack — The Millennium City of Odisha's Oldest Living Culture</h2>
<p>Cuttack is the commercial and cultural capital of Odisha, even though Bhubaneswar is the administrative capital — the distinction matters here, and Cuttack people make it with pride. The city has been continuously inhabited for over a thousand years; it was the capital of the Ganga dynasty and then of Odisha's mediaeval kingdoms for centuries. Cuttack is famous for the Chandi Medha — the exquisite silver filigree work produced by its karigars (artisans), among the finest silver work in the world. The Cuttack Durga Puja is also nationally famous — the city's puja committees create three-dimensional thematic displays of extraordinary scale, and Cuttack's "Silver City" Durga Pujas have won national recognition for their creativity. RedHeart delivers fresh flowers across Cuttack with same-day and midnight delivery, starting at ₹399.</p>

<p>Cuttack sits between the Mahanadi and the Kathajodi rivers — a river island city whose geography has shaped its enclosed, intensely local culture. The flower market near Balu Bazar and the daily market at Buxi Bazar supply the city's substantial flower demand. Odishan farms grow marigolds and tuberose in abundance for the region's major festivals.</p>

<h2>Quick Reference — Flower Delivery in Cuttack</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuttack, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Badambadi, Buxi Bazar, Mangalabag, Tulsipur, Madhupatna, Chauliaganj, Malgodown, Nayabazar, College Square</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuttack Durga Puja (nationally famous), Kumar Purnima, Diwali, Rath Yatra solidarity, birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, lotus, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Silver City (silver filigree); Cuttack Durga Puja; Millennium City; river island</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Cuttack Durga Puja — When Flowers Meet Silver</h2>
<p>Cuttack's Durga Puja is one of India's most creative — the city's puja committees compete to create the most spectacular three-dimensional thematic installation, and the goddess in each pandal is adorned with Cuttack's famous silver filigree ornaments. Fresh flower decoration is integral to each installation — tonnes of marigolds, tuberose, and seasonal flowers are consumed over the five days of Puja. The city's Puja tourism draws visitors from across Odisha and Bengal. RedHeart prepares dedicated Durga Puja stock for Cuttack weeks in advance, with expanded capacity for the festival period to ensure every order is fulfilled amid the city-wide demand.</p>

<h2>Badambadi to College Square — Cuttack's Urban Core</h2>
<p>Badambadi is Cuttack's main bus terminal and commercial area — the city's busiest junction from which roads radiate to every part of the city and the state. Buxi Bazar is the historic commercial heart — the old market streets around the Balu Bazar and Buxi Bazar have been trading centres for centuries. Mangalabag is a significant residential area. Chauliaganj is one of the city's older and most culturally embedded residential zones. College Square, near Ravenshaw University, has a student population and an academic gifting culture. Tulsipur and Madhupatna are residential areas on the city's periphery.</p>

<h2>Why Cuttack Trusts RedHeart</h2>
<p>Cuttack is proud and particular — it knows its silver filigree is the finest in the world, it knows its Durga Puja is nationally celebrated, and it expects quality in return. RedHeart delivers to that expectation: fresh marigolds and roses that are worthy of the city that adorns its goddess in silver. In Odisha's commercial heart, RedHeart is the reliable choice.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Durga Puja flowers in Cuttack?", answer: "Yes! Cuttack's Durga Puja is nationally famous and RedHeart prepares dedicated stock for the festival period. We deliver marigold garlands, tuberose, chrysanthemums, and puja flowers to homes and puja committees across Cuttack throughout the five-day festival." },
      { question: "Is same-day flower delivery available in Badambadi and Buxi Bazar, Cuttack?", answer: "Yes, RedHeart covers Badambadi, Buxi Bazar, Mangalabag, Tulsipur, Madhupatna, Chauliaganj, and all major Cuttack areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order Kumar Purnima flowers in Cuttack?", answer: "Yes! Kumar Purnima is an important Odishan women's festival celebrated in Cuttack. RedHeart delivers white flowers, marigolds, and seasonal blooms for Kumar Purnima puja arrangements across the city." },
      { question: "Does RedHeart deliver to College Square and Ravenshaw University area in Cuttack?", answer: "Yes, the College Square and Ravenshaw University area is covered by RedHeart. We deliver for academic occasions, teacher felicitations, farewell bouquets, and personal gifting to the student and faculty community." },
      { question: "Is midnight flower delivery available in Cuttack?", answer: "Yes, midnight delivery is available across Cuttack. Order before 9 PM and choose your time — perfect for birthday surprises in Badambadi, Buxi Bazar, Mangalabag, or any Cuttack address." }
    ]
  },

  "tirupati": {
    cityName: "Tirupati",
    metaTitle: "Flower Delivery in Tirupati | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Tirupati with same-day delivery. Roses, marigolds & Tirumala offerings to Balaji Nagar, Renigunta, Chandragiri & all areas. From ₹399.",
    h1: "Flower Delivery in Tirupati",
    metaKeyword: "flower delivery in Tirupati, online flower delivery Tirupati, same day flower delivery Tirupati, florist Tirupati, send flowers Tirupati, Tirumala flowers Tirupati",
    footerContent: `
<h2>Flower Delivery in Tirupati — At the Foot of the World's Wealthiest Temple</h2>
<p>Tirupati is defined by what stands above it. The Tirumala Venkateswara temple, perched atop the Tirumala hills, 11 km above and 853 metres above sea level by road, is the most visited pilgrimage site in the world — an estimated 50,000 to 100,000 devotees visit daily, and during major festivals the numbers exceed 500,000. The temple receives more donations per year than any other religious institution on earth. The city of Tirupati at the foot of the hill is its support system — hotels, rest houses, TTD (Tirupati Tirumala Devasthanams) facilities, and a commercial economy entirely oriented around the millions of pilgrims who pass through. Flowers in Tirupati are inseparable from devotion — the Venkateswara temple's daily archana requires fresh roses, marigolds, lotus, and jasmine in quantities that sustain an entire farming economy. RedHeart delivers fresh flowers across Tirupati with same-day and midnight delivery, starting at ₹399.</p>

<p>Tirupati's flower supply comes from the wholesale market near the Bus Stand and the flower market at Leelamahal Junction. The surrounding Chittoor district is one of Andhra Pradesh's most productive flower-farming regions — rose farms in Bangarupalyam and jasmine fields across the district supply Tirupati's enormous pilgrimage demand. The city's flower market runs at near-industrial scale to meet Tirumala's daily offering requirements.</p>

<h2>Quick Reference — Flower Delivery in Tirupati</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupati, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balaji Nagar, Renigunta, Chandragiri, Alipiri, SPDP Colony, Leela Mahal Road, Srinivasam Colony, Railway Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Brahmotsavam (9-day Venkateswara festival), Vaikunta Ekadasi, Ugadi, birthdays, pilgrim-season gifting</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses (Chittoor valley roses), marigolds, jasmine, lotus, tuberose</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirumala Venkateswara temple — world's most visited pilgrimage, world's wealthiest temple</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Brahmotsavam — Nine Days When Tirupati Is the Centre of the Hindu World</h2>
<p>The annual Brahmotsavam at Tirumala, celebrated over nine days (usually in September), is one of the most sacred events in the Hindu calendar. Lord Venkateswara is taken out in procession on different vahanas (vehicles) each day — Garuda Vahana, Hanumantha Vahana, Gajendra Vahana — and each procession is accompanied by elaborate fresh flower decorations. The TTD uses tonnes of roses, marigolds, lotus, and jasmine during Brahmotsavam. For Tirupati's residents and the millions of pilgrims visiting during the festival, RedHeart provides fresh flower offerings with same-day delivery to homes across the city, so devotees can carry fresh flowers to Tirumala or perform home puja with proper offerings.</p>

<h2>Balaji Nagar to Chandragiri — Tirupati's Residential Life</h2>
<p>Balaji Nagar is Tirupati's most prominent residential area — named for the Balaji (Venkateswara) whose presence pervades every aspect of city life. SPDP Colony and Srinivasam Colony are planned residential zones housing TTD employees and local professionals. Renigunta, the railway junction town adjacent to Tirupati, is a major transport hub with its own residential and commercial population. Chandragiri, the historically significant town with the Chandragiri Fort (where Vijayanagara kings once resided), is 11 km from Tirupati and within our delivery range. Alipiri, at the foot of the Tirumala hill where pilgrims begin the foot path, is a significant commercial and residential zone.</p>

<h2>Why Tirupati Chooses RedHeart</h2>
<p>In Tirupati, every flower is potentially an offering to the Lord. The standard for freshness here is set by the Tirumala temple's own exacting requirements — flowers offered to Venkateswara must be perfect, recently bloomed, and handled with devotion. RedHeart sources Chittoor valley roses and fresh jasmine for Tirupati that meet that standard. In the city at the foot of the world's most visited temple, we deliver with the respect that the destination deserves.</p>
`,
    faqs: [
      { question: "Can I order flowers for Tirumala pilgrimage offerings from Tirupati?", answer: "Yes! RedHeart delivers fresh roses, marigolds, jasmine, and lotus — the primary Tirumala offering flowers — to homes across Tirupati. Many devotees order from us before their Tirumala visit, picking up offerings at home before taking the bus or walking the Alipiri footpath." },
      { question: "Does RedHeart deliver Brahmotsavam flowers in Tirupati?", answer: "Yes! Brahmotsavam is Tirupati's biggest event. RedHeart prepares dedicated stock for the nine-day festival and delivers fresh flower offerings to pilgrims and residents across Tirupati throughout the festival period." },
      { question: "Is same-day flower delivery available in Balaji Nagar and Renigunta, Tirupati?", answer: "Yes, RedHeart covers Balaji Nagar, Renigunta, Chandragiri, Alipiri, SPDP Colony, and all major Tirupati areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "What flowers are most popular in Tirupati for temple offerings?", answer: "Roses are the most important offering flower at Tirumala — red and pink roses from the Chittoor valley farms are the top choice. Marigold garlands are used for home temple decoration. Jasmine and lotus are used for special archana and home puja." },
      { question: "Is midnight flower delivery available in Tirupati?", answer: "Yes, midnight delivery is available across Tirupati. Order before 9 PM and choose your time — perfect for birthday surprises or for preparing fresh offerings for an early morning Tirumala visit." }
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
  console.log("\nDone — batch 10 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
