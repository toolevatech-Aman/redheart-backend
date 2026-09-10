// Plants Tier 2 Batch 2 — 8 cities
// Gwalior, Salem, Warangal, Udaipur, Jammu, Siliguri, Solapur, Jalandhar

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "gwalior": {
    cityName: "Gwalior",
    metaTitle: "Buy Plants Online in Gwalior | Fort City Plants | RedHeart",
    metaDescription: "Order plants online in Gwalior. Rose, marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Madhya Pradesh's historic fort city gets fresh plant delivery.",
    h1: "Buy Plants Online in Gwalior — Same-Day Plant Delivery in the Fort City",
    metaKeyword: "plants online gwalior, buy plants gwalior, indoor plants gwalior, plant delivery gwalior madhya pradesh, rose plant gwalior, online nursery gwalior fort city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Gwalior — Where the Fort Meets the Garden</h2>

<p>Gwalior is one of Madhya Pradesh's most historically significant cities — dominated by the great Gwalior Fort, one of India's mightiest rock fortresses, rising 100 metres above the city on a dramatic sandstone plateau. The fort's temples, palaces, and water tanks have stood since the 8th century. The city is also the home of the Tansen Music Festival (one of India's premier classical music gatherings, held annually at the Tansen tomb), and is closely associated with the Scindia royal family whose Jai Vilas Palace still stands in the city. Gwalior is Madhya Pradesh's second-largest city, with significant industry, commerce, and educational institutions.</p>

<p>Gwalior's climate is North India continental: very hot summers (44–46°C), moderate monsoon (900 mm), and cold winters (4–10°C in January). October through February is the prime gardening window. Rose, marigold, and chrysanthemum bloom beautifully in the cool air. Indoor plants are valued year-round for the extreme summer and winter periods. RedHeart delivers across Gwalior, Morena, and Bhind with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Gwalior Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter display, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, puja, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, extremes-hardy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, Scindia palace-style décor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Tansen season</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Chrysanthemum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter colour, festive gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Jan</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Gwalior's Royal Heritage and Garden Culture</h3>

<p>The Scindia royal family — one of India's most prominent Maratha royal houses — maintained magnificent gardens at Jai Vilas Palace and across Gwalior that influenced local gardening culture for generations. The Madhav National Park on the city's outskirts and the terraced approach to the great fort create a city with unusual awareness of greenery and natural landscapes. The Tansen Music Festival, held every December at the dargah of Tansen (one of Emperor Akbar's Navratnas), brings musicians and cultural visitors to Gwalior annually — a gifting occasion that drives plant demand in the city's cultural calendar.</p>

<p>Rose growing has deep roots in Gwalior — the cool October–February window is ideal, and the city's large residential bungalow belt (particularly around Lashkar, Morar, and City Centre) has maintained rose garden traditions for decades. Marigold at Diwali and pooja occasions is universally demanded across the city's Hindu households.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Gwalior</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lashkar / City Centre</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lashkar, Padav, City Centre</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Morar / Cantonment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Morar, Cantonment, Gwalior Fort area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Thatipur / Hazira</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thatipur, Hazira, Phoolbagh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Morena</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Morena town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Gwalior's extreme climate?", answer: "Snake plant, ZZ plant, and tulsi are the most resilient for Gwalior's 4–46°C range. Rose and marigold thrive in the October–February window. Indoor plants need AC in summer (keep above 18°C) and heating in January nights (keep above 10°C). Money plant is wonderfully adaptable for Gwalior's indoor conditions year-round." },
      { question: "Is same-day plant delivery available in Gwalior?", answer: "Yes. Same-day delivery is available across Gwalior including Lashkar, Padav, Morar, Cantonment, and Thatipur. Order before 3 PM. Midnight delivery is available for central Gwalior. We also deliver to Morena and Bhind towns." },
      { question: "What plant makes the best Tansen Music Festival gift in Gwalior?", answer: "During the Tansen Festival (December), a peace lily or lucky bamboo in a premium planter is an elegant cultural gift. Chrysanthemum in full winter bloom is festive and locally appropriate for December gifting. A mogra or jasmine plant is meaningful given Tansen's connection to the classical tradition where fragrant flowers were part of the raga atmosphere." },
      { question: "When is the best time to plant roses in Gwalior?", answer: "October is ideal for planting roses in Gwalior. The cool October–February period produces excellent blooms — peak display is December through February. Gwalior's cold January nights (4–6°C) are actually ideal for rose dormancy and spring reblooming. Fertilise monthly, water every 3 days, and deadhead spent blooms for continuous flowering." },
      { question: "Which plant is best for a Jai Vilas Palace-style home décor in Gwalior?", answer: "Areca palm in a large decorative pot replicates the regal garden feel of Jai Vilas Palace. Peace lily in a ceramic pot is elegant and low maintenance for formal drawing rooms. A statement monstera adds a contemporary touch to Gwalior's colonial-era bungalow homes. Lucky bamboo in a brass or ceramic tray suits the city's traditional-meets-modern décor aesthetic." }
    ]
  },

  "salem": {
    cityName: "Salem",
    metaTitle: "Buy Plants Online in Salem | Tropical & Temple Plants | RedHeart",
    metaDescription: "Order plants online in Salem. Jasmine, tulsi, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Tamil Nadu's steel city gets fresh plant delivery.",
    h1: "Buy Plants Online in Salem — Same-Day Plant Delivery in Tamil Nadu's Steel City",
    metaKeyword: "plants online salem, buy plants salem, indoor plants salem, plant delivery salem tamil nadu, jasmine salem, tulsi salem, online nursery salem",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Salem — Steel Frames a Green Heart</h2>

<p>Salem is Tamil Nadu's fifth-largest city and one of South India's major industrial centres — best known for steel manufacturing (Salem Steel Plant, a SAIL subsidiary) and textile weaving. The city sits in a valley surrounded by the Shevaroy Hills to the northeast, Bodamalai Hills to the north, and Mettur Dam (one of India's oldest dams, on the Cauvery river, 45 km away) to the west. Salem is a prosperous commercial hub serving a wide agricultural hinterland across Salem, Dharmapuri, and Namakkal districts, with strong trade in mangoes, turmeric, and textiles.</p>

<p>Salem's climate is semi-arid tropical: very hot summers (38–42°C), a bimodal rainfall pattern from both southwest and northeast monsoons (850 mm combined), and warm dry winters (20–28°C). The surrounding hills create a micro-climate slightly cooler than coastal Tamil Nadu. Jasmine, hibiscus, and tulsi are the core plants of every Salem home. Indoor plants including money plant and snake plant are increasingly popular with Salem's growing educated middle class. RedHeart delivers across Salem, Namakkal, Erode (adjacent), and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants in Salem</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Tamil Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily hair garlands, temple use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Thulasi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily pooja, Vaishnava homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus (Chembaruthi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Ayurveda</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, steel plant offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, corporate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Business gifting, Tamil New Year</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, function hall décor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Festivals, Plants, and Salem's Culture</h3>

<p>Salem's Tamil culture places jasmine at the centre of daily life — women in Salem wear fresh jasmine in their hair daily, and the demand for jasmine plants is constant throughout the year. The fragrant Jasminum sambac (malli) blooms best in Salem's warm, sunny climate. Temple festivals at Sugavaneswarar Temple and various local Mariamman temples drive demand for hibiscus and marigold. Pongal (January) is Salem's most significant festival — marigold plants, sugarcane, and kolam decorations define the celebration, and plant gifting is common during the four-day festival.</p>

<p>The Salem Steel Plant community — with its officers' quarters, staff housing, and technical workforce — creates consistent demand for indoor plants, particularly peace lily, areca palm, and snake plant for the well-maintained quarters and offices of the government steel complex.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Salem</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Salem</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shevapet, Suramangalam, Salem Junction</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Steel Plant / North</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Steel Plant area, Ammapet, Fairlands</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Attur / Omalur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Attur, Omalur towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Namakkal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Namakkal town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for daily jasmine garlands in Salem?", answer: "Jasminum sambac (malli) grows vigorously in Salem's warm, sunny climate. Plant in full morning sun, water daily, and fertilise monthly. It blooms almost daily during the warm season (March–October), providing fresh flowers for hair garlands and temple offerings. A well-established malli plant in Salem produces enough flowers for daily garlands within 6 months of planting." },
      { question: "Is same-day plant delivery available in Salem?", answer: "Yes. Same-day delivery is available across Salem including Shevapet, Suramangalam, Steel Plant area, Ammapet, and Fairlands. Order before 3 PM. We also deliver to Attur and Omalur. Namakkal is reachable within 4–6 hours." },
      { question: "What plant is best for a Pongal gift in Salem?", answer: "Marigold plant in full bloom is the most festive Pongal gift in Salem — it matches the Pongal kolam's gold-and-yellow theme. Tulsi in a decorated maadam is traditional for Vaishnava homes. A sugarcane plant (though primarily agricultural) is symbolic; a practical alternative is a money plant in a brass or ceramic pot for a lasting green gift." },
      { question: "Which plants handle Salem's hot semi-arid summers?", answer: "Snake plant, ZZ plant, aloe vera, hibiscus, and jasmine all handle Salem's 38–42°C summer heat. Keep indoor plants away from direct afternoon sun. Water outdoor plants deeply every morning. Avoid placing tropical plants like peace lily in direct summer sun — they need shaded, humid spots indoors during peak summer." },
      { question: "Do you deliver plants to Namakkal from Salem?", answer: "Yes. Namakkal is within our Salem delivery network. Delivery takes 4–6 hours. Namakkal's truck manufacturing and poultry industry community has growing demand for corporate gifting plants — lucky bamboo and money plant are popular options. Same-day delivery to Namakkal is available for orders placed before noon." }
    ]
  },

  "warangal": {
    cityName: "Warangal",
    metaTitle: "Buy Plants Online in Warangal | Kakatiya Heritage & Plants | RedHeart",
    metaDescription: "Order plants online in Warangal. Jasmine, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Telangana's cultural city gets fresh plant delivery.",
    h1: "Buy Plants Online in Warangal — Same-Day Plant Delivery in the City of Kakatiya Heritage",
    metaKeyword: "plants online warangal, buy plants warangal, indoor plants warangal, plant delivery warangal telangana, jasmine warangal, online nursery warangal kakatiya",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Warangal — Ancient Kakatiya Capital Embraces Doorstep Greens</h2>

<p>Warangal is one of Telangana's most historically significant cities — the capital of the Kakatiya dynasty (12th–14th century), whose magnificent Warangal Fort, the Thousand Pillar Temple, and the Ramappa Temple (now a UNESCO World Heritage Site) stand as extraordinary testimonies to medieval Telugu art and architecture. The city is Telangana's second-largest urban area and a key industrial and educational hub — home to NIT Warangal (one of India's premier NITs), Kakatiya University, and a growing textile and steel industry at the nearby Kazipet junction. Warangal, Hanamkonda, and Kazipet have merged into a single urban conglomeration administered as GWMC (Greater Warangal Municipal Corporation).</p>

<p>Warangal's climate is hot semi-arid: scorching summers (40–44°C), a reliable monsoon (1,100 mm from both June–September and the northeast monsoon), and warm winters (16–26°C). Tropical plants and South Indian plant traditions define Warangal's garden culture. Jasmine (malle), hibiscus, and tulsi are part of every home; NIT Warangal's campus and Kakatiya University have beautiful tree-lined avenues that inspire the city's gardening community. RedHeart delivers across Warangal, Hanamkonda, Kazipet, and Nalgonda with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Warangal Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Local Significance</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malle)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily hair garlands, temple</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily pooja, every Telugu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Kakatiya temples</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, NIT hostel rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles Warangal heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, NIT faculty</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, Ugadi gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, function halls</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Kakatiya Heritage and Warangal's Green Identity</h3>

<p>The Kakatiya kings who ruled from Warangal were great patrons of art, architecture, and agriculture — the Ramappa Temple's intricate stone carvings include flora and creeper motifs of extraordinary sophistication. The great Ramappa Lake (Pakhal Lake), Eturnagaram Wildlife Sanctuary, and the Kakatiya Heritage Circuit connect Warangal to its natural environment in ways that give the city a sense of ecological identity. NIT Warangal's lush campus is one of Telangana's greenest institutional spaces.</p>

<p>Batukamma festival (the telangana floral festival — one of India's most beautiful, held during Navratri) is Warangal's most beloved celebration: women create elaborate floral mandalas using tangidi (senna), banthiflower, and marigold, offering them to the goddess. Growing your own flowers for Batukamma is a cherished tradition in Warangal — marigold, chrysanthemum, and gomphrena plants from RedHeart help families create their own Batukamma offerings at home.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Warangal</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hanamkonda</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hanamkonda, Subedari, Hunter Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Warangal City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Warangal Fort area, NIT, Kazipet</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahabubabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahabubabad town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Nalgonda</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nalgonda town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Batukamma festival in Warangal?", answer: "Marigold (gainda) is the most essential Batukamma plant — the golden flowers are central to the floral mandala. Chrysanthemum, gomphrena, and tangidi (senna) flowers are also used in the arrangement. Growing your own flowers at home means fresh, fragrant blooms for each of the nine Batukamma days. Order marigold plants in August to ensure they're blooming by Navratri in September–October." },
      { question: "Is same-day plant delivery available in Warangal?", answer: "Yes. Same-day delivery is available across Hanamkonda, Warangal Fort area, NIT Warangal, Kazipet, and Subedari. Order before 3 PM. We deliver to NIT student residences and faculty housing areas regularly." },
      { question: "Which plants grow best at NIT Warangal hostel rooms?", answer: "Money plant, snake plant, and ZZ plant are ideal for NIT hostel rooms — they need minimal care, survive irregular watering, and thrive in the indirect light of hostel windows. Lucky bamboo in a water vase needs just weekly water changes. These are also popular gifting options for seniors during fresher's orientation at NIT." },
      { question: "What plant is best for a Ugadi gift in Warangal?", answer: "Tulsi plant in a decorated pot is the most auspicious Ugadi gift for any Telugu home. Lucky bamboo (3 or 9 stalks) is a popular corporate Ugadi gift across Warangal's business community. For a lasting, meaningful gift for NIT faculty or senior professionals, a peace lily or areca palm in a premium ceramic planter is appropriate." },
      { question: "Which plants handle Warangal's intense summer heat?", answer: "Snake plant, ZZ plant, jasmine, and hibiscus are the most heat-tolerant plants for Warangal's 40–44°C summer. Keep indoor plants in cool, shaded areas and avoid afternoon direct sunlight. Water outdoor plants deeply in the early morning. The good monsoon (1,100 mm) helps soil recover quickly — outdoor plants rebound strongly in July." }
    ]
  },

  "udaipur": {
    cityName: "Udaipur",
    metaTitle: "Buy Plants Online in Udaipur | Lake City Terrace Plants | RedHeart",
    metaDescription: "Order plants online in Udaipur. Desert roses, succulents, indoor plants & gifting combos. Delivery across Udaipur. Starting ₹299. City of Lakes gets fresh plant delivery.",
    h1: "Buy Plants Online in Udaipur — Plant Delivery in the City of Lakes",
    metaKeyword: "plants online udaipur, buy plants udaipur, indoor plants udaipur, plant delivery udaipur rajasthan, succulent udaipur, rose udaipur, online nursery udaipur lake city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Udaipur — The Venice of the East Grows Greener</h2>

<p>Udaipur — the "City of Lakes," the "Venice of the East," the most romantic city in Rajasthan — is built around a series of interconnected artificial lakes (Pichola, Fateh Sagar, Udai Sagar, Rajsamand) framed by the Aravalli Hills. The City Palace — one of the largest palace complexes in Rajputana — rises dramatically from the shores of Lake Pichola; the Lake Palace hotel seems to float on the water. Udaipur's extraordinary natural beauty and Mewar's proud Rajput heritage make it one of India's top tourist destinations and a premium hospitality city, with luxury hotels, heritage properties, and an established art scene (Udaipur has a thriving traditional miniature painting industry).</p>

<p>Udaipur's climate is semi-arid with moderation: summers reach 42°C but are less brutal than other Rajasthan cities due to lake evaporation and Aravalli altitude (577 m). Monsoon brings 650 mm of rain — more than most Rajasthan cities — and winters are pleasantly cool (8–14°C in January). The combination of adequate rainfall and a naturally beautiful landscape supports a wider range of plants than most Rajasthan cities. Succulents, aloe, desert rose, bougainvillea, and roses all thrive here. RedHeart delivers across Udaipur, Chittorgarh, and Bhilwara with service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Udaipur's Lake City Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Suits Udaipur</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Heritage haveli walls, lake views</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mar–Jul</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace gardens, Rajput wedding</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Succulent Collection</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low water, terrace décor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Skincare, sunny terrace, desert-fit</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred courtyard, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, hotel lobbies, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hotel rooms, boutique properties</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Heritage hotel reception, weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Terrace Gardens, Heritage Havelis, and Udaipur's Botanical Aesthetic</h3>

<p>Udaipur's hilly topography, interconnected lakes, and traditional haveli architecture create exceptional terrace garden potential. Almost every rooftop in the old city offers a view of Lake Pichola or the City Palace — and Udaipur residents make the most of these terraces with bougainvillea spilling over haveli walls in magnificent colour displays (the magenta-against-white-plaster aesthetic is one of Udaipur's most photographed images), roses in winter, and succulent arrangements that survive the dry summers without attention.</p>

<p>Udaipur's booming hospitality sector (luxury hotels, boutique havelis, destination wedding venues) creates significant commercial plant demand — areca palms for reception areas, monstera for boutique hotel rooms, bougainvillea for outdoor wedding lawns, and succulent terrace gardens for Instagram-perfect heritage properties. RedHeart supplies plant orders for hotels and wedding venues in Udaipur — contact us for bulk hospitality orders.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Udaipur</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Old City / Lake Pichola</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Old City, Gangaur Ghat, City Palace</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Fateh Sagar / New City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fateh Sagar Lake, Chetak Circle, Saheli Marg</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hiran Magri / Pratap Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hiran Magri sectors, Pratap Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Chittorgarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chittorgarh town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Udaipur's heritage haveli terraces?", answer: "Bougainvillea spilling over haveli walls is Udaipur's signature aesthetic — buy it in magenta, orange, or white for maximum visual impact. Succulents in terracotta or ceramic pots arrange beautifully on terraces with lake views. Rose plants bloom from October through March, creating a spectacular winter terrace display. Aloe vera and cacti handle dry summer months with almost no attention." },
      { question: "Is plant delivery available in Udaipur?", answer: "Yes. Delivery is available across Udaipur including Old City, Gangaur Ghat, Fateh Sagar area, Chetak Circle, Saheli Marg, and Hiran Magri. Order before 3 PM for same-day delivery. We also serve Chittorgarh and surrounding areas." },
      { question: "Which plants work for Udaipur's destination wedding venues?", answer: "Areca palm in large decorative pots creates a tropical luxury atmosphere for wedding mandaps and lawns. Bougainvillea provides stunning outdoor colour — magenta or deep red works beautifully against Udaipur's whitewashed haveli walls. For indoor wedding décor, peace lily and monstera create an elegant green backdrop. Contact us for bulk wedding venue plant orders with advance scheduling." },
      { question: "What succulents grow best in Udaipur's semi-arid climate?", answer: "Echeveria, haworthia, jade plant, and aloe vera thrive in Udaipur's sunny, dry conditions. Succulents need very well-draining soil (add 50% coarse sand), bright indirect sun, and watering only when the soil is completely dry. In Udaipur's summer, water once every 3–4 weeks. They're perfect low-maintenance plants for heritage homes and hotel rooms." },
      { question: "Do you supply plants to hotels near Lake Pichola?", answer: "Yes. We deliver to hotels in the Old City, near Gangaur Ghat, Lal Ghat, and the City Palace area. For heritage hotel and boutique property plant orders — particularly areca palms, snake plants, and monstera for rooms and common areas — contact us for bulk scheduling and customised delivery." }
    ]
  },

  "jammu": {
    cityName: "Jammu",
    metaTitle: "Buy Plants Online in Jammu | Temple City Plants | RedHeart",
    metaDescription: "Order plants online in Jammu. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. City of Temples gets fresh plant delivery.",
    h1: "Buy Plants Online in Jammu — Same-Day Plant Delivery in the City of Temples",
    metaKeyword: "plants online jammu, buy plants jammu, indoor plants jammu, plant delivery jammu j&k, marigold jammu, rose plant jammu, online nursery jammu city of temples",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jammu — Gateway to Kashmir Gets Doorstep Greens</h2>

<p>Jammu — the winter capital of the Union Territory of Jammu & Kashmir — is a city of devotion, commerce, and extraordinary geographical position: it sits at the entrance to the Kashmir Valley on the Tawi river, at the foot of the Shivalik Hills, and serves as the jumping-off point for the Vaishno Devi pilgrimage (one of India's most visited religious sites, with 8+ million pilgrims annually). The Raghunath Temple complex in the city centre, the Bahu Fort, and numerous mandirs make Jammu one of North India's most spiritually active cities. The city is also a significant commercial and educational hub for J&K's southern region.</p>

<p>Jammu's climate bridges plains and hills: summers are hot (42°C) and humid, the monsoon is very good (1,100 mm from July–September), and winters are cool (4–10°C) without the heavy snowfall of the Kashmir Valley. This moderate winter climate makes Jammu excellent for rose, marigold, and seasonal winter flowers. Indoor plants are valued year-round, particularly for the large Dogra community's prosperous residential neighbourhoods. RedHeart delivers across Jammu, Udhampur, Kathua, and Samba with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Jammu Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Vaishno Devi season</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Dogra Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter blooms, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Apr</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, office, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, government offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, pilgrimage season gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Chrysanthemum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, Navratri décor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Jan</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Navratri, Vaishno Devi, and Jammu's Sacred Plant Culture</h3>

<p>Jammu's religious intensity is palpable — the Navratri festival (both Chaitra Navratri in spring and Sharad Navratri in autumn) is observed with extraordinary devotion here, driven by proximity to Vaishno Devi Mata shrine. Millions of pilgrims pass through Jammu before ascending the Trikuta Hills to the shrine — marigold flowers for the goddess, tulsi for daily worship, and fragrant flowers for the city's numerous mandirs are in peak demand during both Navratri periods. The October Navratri coincides with Jammu's best gardening season, making it ideal to buy rose and marigold plants just as the city enters pilgrimage peak.</p>

<p>The Dogra community — Jammu's dominant cultural group — has deep agricultural roots and maintains excellent home gardens. The Bahu Fort gardens, Mubarak Mandi heritage precinct, and the various temple gardens within the city reflect centuries of gardening tradition. Roses, marigold, and seasonal flowers are central to Dogra festive celebrations.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jammu</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Jammu</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gandhi Nagar, Bakshi Nagar, Raghunath Bazaar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Trikuta Nagar / New City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Trikuta Nagar, Nanak Nagar, Channi Himmat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Udhampur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Udhampur town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kathua / Samba</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kathua, Samba towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Navratri puja in Jammu?", answer: "Marigold is essential for Navratri in Jammu — the bright orange and yellow flowers are offered at Durga shrines and decorate homes throughout the nine days. Tulsi in a decorated pot is sacred and used for daily Devi worship. Chrysanthemum provides lovely white and yellow blooms for the autumn Navratri period. For a lasting gift, a tulsi plant in a terracotta maadam is deeply meaningful." },
      { question: "Is same-day plant delivery available in Jammu?", answer: "Yes. Same-day delivery is available across Jammu including Gandhi Nagar, Bakshi Nagar, Trikuta Nagar, Nanak Nagar, and Raghunath Bazaar. Order before 3 PM. We also deliver to Udhampur. During Navratri and Vaishno Devi pilgrimage peaks, order marigold and tulsi plants early." },
      { question: "Which plants grow best in Jammu's climate?", answer: "Rose, marigold, tulsi, and chrysanthemum thrive in Jammu's October–March cool season. Indoor plants — snake plant, money plant, peace lily — do well year-round. The monsoon (1,100 mm) is excellent for establishing outdoor plants. Summers are hot (42°C) but briefer than plains cities; indoor plants need shade and reduced watering in peak summer." },
      { question: "What plant is best for gifting during the Vaishno Devi pilgrimage season?", answer: "Tulsi plant is the most sacred and appropriate gift for families celebrating a Vaishno Devi yatra. Marigold for the puja and a money plant for the home are practical dual gifts. For a corporate or professional Jammu gift, a peace lily or lucky bamboo in a ceramic pot is well-received and widely considered auspicious." },
      { question: "Do you deliver plants to Udhampur and Samba?", answer: "Yes. Udhampur is within our Jammu delivery zone with delivery in 3–5 hours. Samba and Kathua are also serviced within 4–6 hours. Advance orders for these areas ensure same-day delivery before noon cutoff. Udhampur's growing service economy and military presence creates demand for indoor corporate gifting plants." }
    ]
  },

  "siliguri": {
    cityName: "Siliguri",
    metaTitle: "Buy Plants Online in Siliguri | Tropical & Tea Garden Plants | RedHeart",
    metaDescription: "Order plants online in Siliguri. Tropical plants, anthurium, indoor greens & gifting combos. Same-day delivery. Starting ₹299. Gateway to Northeast India gets plant delivery.",
    h1: "Buy Plants Online in Siliguri — Same-Day Plant Delivery in the Gateway of Northeast India",
    metaKeyword: "plants online siliguri, buy plants siliguri, indoor plants siliguri, plant delivery siliguri west bengal, anthurium siliguri, tropical plants siliguri, online nursery siliguri darjeeling",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Siliguri — Foothills of the Himalayas, Doorstep of the Northeast</h2>

<p>Siliguri is West Bengal's second-largest city and one of India's most strategic urban centres — the "Chicken's Neck" (Siliguri Corridor), the narrow strip of Indian territory that connects the Northeast states to the rest of India, passes through here. The city is surrounded by extraordinary natural environments: the Darjeeling Himalayan foothills to the north, the Dooars (terai forests) to the east where Gorumara and Jaldapara national parks protect rhinos and elephants, and the Teesta river valley. Siliguri serves as the commercial hub for Darjeeling, Sikkim, and all the Northeast states, making it a remarkably cosmopolitan and geographically significant city.</p>

<p>Siliguri's climate is one of India's most lush: tropical monsoon with extraordinary rainfall (3,500 mm annually — one of India's wettest cities). The humidity is high year-round, and the sub-Himalayan air is clean and cool by plains standards. This extraordinary humidity and warmth means tropical plants — anthurium, orchids, peace lily, areca palm, monstera — grow with spectacular ease. The Darjeeling tea garden culture that surrounds Siliguri also permeates gardening sensibilities in the city. RedHeart delivers across Siliguri, Jalpaiguri, Alipurduar, and Cooch Behar with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Siliguri's Humid Mountain Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Thrives in Siliguri</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Siliguri's humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, humid rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tropical statement, Northeast vibe</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, hotel lobbies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, puja use, Himalayan vibe</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, office, Northeast trade hub</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Siliguri's Botanical Richness and Plant Culture</h3>

<p>Few Indian cities are surrounded by as much biodiversity as Siliguri. The Singalila Ridge, Barsey Rhododendron Sanctuary, and Neora Valley National Park lie within 100 km to the north; the Dooars' forests begin at the city's eastern edge. The Himalayan Zoological Park at Darjeeling (1 hour away) and the various tea garden estates that surround Siliguri create a cityscape where nature is ever-present. Anthurium grows so easily in Siliguri's humid air that it has become a popular garden plant, not just an exotic gifting plant — which is unusual for most Indian cities. Similarly, orchids (particularly dendrobium and cymbidium) grow in semi-outdoor conditions here that would require a controlled greenhouse elsewhere in India.</p>

<p>Durga Puja — Bengal's biggest festival — is Siliguri's most important cultural celebration. Elaborate Puja pandals throughout the city drive demand for marigold, chrysanthemum, and lotus flowers. Shiuli (night jasmine, October-blooming) is the most evocative Bengali autumn plant. RedHeart's plants are available year-round for both daily home use and festive occasions.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Siliguri</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Siliguri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hill Cart Road, Bidhan Market, Pradhan Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Matigara / Naxalbari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Matigara, Naxalbari, Bagdogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jalpaiguri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jalpaiguri town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Cooch Behar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cooch Behar town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which tropical plants grow best in Siliguri's humid climate?", answer: "Anthurium, monstera, peace lily, bird of paradise, and areca palm grow with exceptional ease in Siliguri's 3,500 mm rainfall and high humidity. These plants that require greenhouses in most Indian cities grow almost effortlessly outdoors in Siliguri. Orchids (dendrobium, cymbidium) can be grown semi-outdoors in the foothills' misty, humid air." },
      { question: "Is same-day plant delivery available in Siliguri?", answer: "Yes. Same-day delivery is available across Siliguri including Hill Cart Road, Bidhan Market, Pradhan Nagar, Matigara, and Bagdogra. Order before 3 PM. We also deliver to Jalpaiguri. Cooch Behar is covered in 4–6 hours." },
      { question: "What plant is best for a Durga Puja gift in Siliguri?", answer: "Shiuli (night jasmine, Nyctanthes arbor-tristis) is the most quintessentially Bengali Puja plant — it blooms in October, the fragrant white flowers carpet the ground at dawn, and it captures the essence of Durga Puja's autumnal atmosphere. Marigold in full golden bloom is decorative for pandal surroundings. A potted chrysanthemum makes a lovely post-Puja home gift." },
      { question: "Can I grow tea plants at home in Siliguri?", answer: "Yes! Tea plant (Camellia sinensis) grows beautifully in Siliguri's climate — the same conditions that create Darjeeling and Dooars tea gardens. Plant in acidic, well-draining soil with partial shade. The plant is ornamental and can be maintained as a 1–2 m decorative shrub. You can even harvest a small quantity of home-grown tea leaves. It's a unique and meaningful plant for garden enthusiasts in the Siliguri area." },
      { question: "Do you deliver plants to Darjeeling from Siliguri?", answer: "Darjeeling itself (at 2,042 m altitude) involves mountainous terrain; however we serve the Siliguri and Bagdogra flat area comprehensively. For Darjeeling town, contact us for special arrangement — high-altitude delivery requires advance scheduling. Jalpaiguri and Cooch Behar are fully serviced from our Siliguri network." }
    ]
  },

  "solapur": {
    cityName: "Solapur",
    metaTitle: "Buy Plants Online in Solapur | Drought-Tough & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Solapur. Succulents, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Maharashtra's textile city gets fresh plant delivery.",
    h1: "Buy Plants Online in Solapur — Same-Day Plant Delivery in Maharashtra's Textile City",
    metaKeyword: "plants online solapur, buy plants solapur, indoor plants solapur, plant delivery solapur maharashtra, succulent solapur, aloe vera solapur, online nursery solapur",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Solapur — Deccan's Textile City Turns Green</h2>

<p>Solapur is Maharashtra's fifth-largest city and the economic hub of eastern Maharashtra's Deccan plateau. The city is famous across India for three things: its Terry Towel textile industry (Solapur chaddars and lungis are sold nationwide), the Siddheshwar and Akkalkot Swami Samarth pilgrimage tradition, and being one of Maharashtra's most arid cities — receiving barely 560 mm of annual rainfall, one of the lowest in the state. This semi-arid Deccan context shapes everything about plant selection in Solapur: drought-tolerant species thrive; water-hungry plants struggle without careful management.</p>

<p>Solapur's climate is hot semi-arid: scorching summers (42–44°C), a limited monsoon (560 mm concentrated in June–September), and warm, dry winters (14–26°C). The Bhima river flows to the north of the city but groundwater is limited. Despite the challenging climate, Solapur residents maintain vibrant courtyard gardens by choosing the right plants — aloe vera, succulents, cactus, snake plant, money plant, and drought-hardy flowering plants like marigold and bougainvillea are the cornerstones of Solapur gardening. RedHeart delivers across Solapur, Barshi, Pandharpur, and Bijapur (Karnataka border) with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Drought-Smart Plants for Solapur</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Survives Solapur Summer</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low — water 2x/month</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓✓✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low — desert-native</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓✓✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Succulent Set</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low — water 1x/week</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓✓✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low — water 2x/month</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓✓✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low — water 2x/week</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate — water daily in summer</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate — seasonal winter plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar only</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low once established</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓✓✓</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Pandharpur, Siddheshwar, and Solapur's Sacred Plant Traditions</h3>

<p>Solapur is the gateway to Pandharpur — one of Maharashtra's holiest pilgrimage towns (home to Vitthal temple, the Warkari sect's supreme deity). Hundreds of thousands of Warkari pilgrims pass through Solapur on their way to Pandharpur during the Ashadhi and Kartiki Ekadashi varis. Tulsi is absolutely sacred in the Warkari tradition — Vitthala is always depicted with a tulsi garland, and Warkari homes are incomplete without a tulsi maadam in the courtyard. Siddheshwar temple in Solapur itself draws thousands of pilgrims who make flower offerings daily. The demand for tulsi, marigold, and hibiscus for home and temple worship is consistent year-round in Solapur.</p>

<p>Solapur's large weaving community — families operating handloom and powerloom towel manufacturing units across the city — has maintained a tradition of courtyards with tulsi plants and small kitchen gardens. These courtyard traditions adapt naturally to container gardening given Solapur's water scarcity.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Solapur</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Solapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Siddheshwar Peth, Budhwar Peth, Station</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North Solapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">MIDC, Vijapur Road, Hotgi Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Barshi / Akkalkot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Barshi, Akkalkot towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pandharpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pandharpur town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Solapur's dry semi-arid climate?", answer: "Snake plant, ZZ plant, aloe vera, succulents, and bougainvillea are best for Solapur's limited 560 mm annual rainfall. These drought-tolerant plants survive weeks without watering. Bougainvillea establishes slowly but once rooted is almost independent of irrigation. Avoid water-hungry tropical plants like peace lily and anthurium outdoors — keep them in shaded, watered indoor spaces only." },
      { question: "Is same-day plant delivery available in Solapur?", answer: "Yes. Same-day delivery is available across Solapur including Siddheshwar Peth, Budhwar Peth, Station area, MIDC, and Hotgi Road. Order before 3 PM. We also deliver to Barshi, Akkalkot, and Pandharpur." },
      { question: "Which plant is best for a Warkari devotee's home in Solapur?", answer: "Tulsi (holy basil) is the most sacred plant for Warkari tradition — it is inseparable from Vitthal worship and every Warkari home must have a tulsi maadam in the courtyard. Vitthal is offered tulsi garlands daily. A large, healthy tulsi plant in a traditional terracotta or stone maadam is the most meaningful gift you can give to a Warkari-following family in Solapur." },
      { question: "Which plants are best for a container garden in Solapur's limited water?", answer: "Container gardens work well in Solapur with drought-tolerant choices: aloe vera, succulents (echeveria, jade plant, haworthia), snake plant, and ZZ plant need watering only once a week or less. Use well-draining soil mix (50% coarse sand, 50% potting soil for succulents). Self-watering containers reduce water usage by 30–40% in Solapur's dry climate." },
      { question: "Do you deliver plants to Pandharpur?", answer: "Yes. Pandharpur is within our Solapur delivery network. Delivery takes 4–6 hours. During Ashadhi Ekadashi and Kartiki Ekadashi (June–July and October–November), pilgrimage traffic peaks — tulsi and marigold plant demand from Pandharpur rises significantly. Order in advance during these peak periods." }
    ]
  },

  "jalandhar": {
    cityName: "Jalandhar",
    metaTitle: "Buy Plants Online in Jalandhar | Punjab Sport City Plants | RedHeart",
    metaDescription: "Order plants online in Jalandhar. Rose, marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Punjab's sports goods capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Jalandhar — Same-Day Plant Delivery in Punjab's Sports City",
    metaKeyword: "plants online jalandhar, buy plants jalandhar, indoor plants jalandhar, plant delivery jalandhar punjab, rose plant jalandhar, marigold jalandhar, online nursery jalandhar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jalandhar — Punjab's Sports Hub Gets Doorstep Greens</h2>

<p>Jalandhar is one of Punjab's oldest and most historically significant cities — its strategic location on the Grand Trunk Road between Delhi and Lahore gave it importance through multiple empires from the Mauryas to the Mughals to the British. Today, Jalandhar is most famous as India's sports goods capital: the city produces 75% of India's sports equipment including cricket bats, footballs, boxing gloves, and gymnastics equipment exported worldwide. Doaba region's large NRI diaspora (Canada, UK, USA) has brought prosperity and cosmopolitan sensibilities to Jalandhar — high-quality schools, good infrastructure, and growing aspirational middle-class consumption including premium home décor and plants.</p>

<p>Jalandhar's climate follows Punjab's North India pattern: hot summers (42–44°C), moderate monsoon (700 mm), and cold winters (2–6°C in January with occasional frost). The October–March gardening window is Jalandhar's prime season — rose, marigold, chrysanthemum, and seasonal flowers bloom beautifully. Diwali (October–November) and Lohri (January) are the major plant gifting occasions. RedHeart delivers across Jalandhar, Kapurthala, Phagwara, and Nakodar with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Jalandhar Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, Punjabi wedding season</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Lohri, Dussehra décor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, NRI home décor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, office, sports brand offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Business gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, export offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, showroom lobbies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Chrysanthemum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter colour, Lohri décor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Jan</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Punjabi Festivals, NRI Culture, and Jalandhar's Green Identity</h3>

<p>Jalandhar's large NRI diaspora — particularly the Doaba community settled in Canadian cities like Brampton, Surrey, and Edmonton — sends remittances home and brings back an international aesthetic sensibility that includes premium home décor. The NRI-influenced Jalandhar home increasingly features monstera, peace lily, fiddle leaf fig, and snake plant that reflect international interior design trends. This is amplified by the city's thriving real estate market — new apartment complexes and township developments in Model Town, Civil Lines, and Guru Nanak Pura create modern households with balcony and indoor plant culture.</p>

<p>Diwali in Jalandhar is celebrated lavishly — marigold flower strings, marigold pot decorations, and money plant gifts are universal. Lohri (January 13) sees bonfires and festival gatherings where chrysanthemum and seasonal flower plants are popular gifts. Jalandhar's sports goods export trade creates a prosperous business community with significant corporate gifting demand — lucky bamboo, areca palm, and peace lily are the standard for this segment.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jalandhar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Model Town / Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Model Town, Civil Lines, Guru Nanak Pura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jalandhar Cantt / GT Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cantonment, Bus Stand, GT Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kapurthala / Phagwara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kapurthala, Phagwara towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Nakodar / Shahkot</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nakodar, Shahkot towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which indoor plants are popular in Jalandhar's NRI-influenced homes?", answer: "Monstera, peace lily, fiddle leaf fig, snake plant, and areca palm are the most popular choices in Jalandhar's NRI-influenced modern homes — reflecting the international interior design aesthetic brought back by the Doaba diaspora from Canada and the UK. These plants suit the modern apartment and township layouts in Model Town and Civil Lines with their high ceilings and good natural light." },
      { question: "Is same-day plant delivery available in Jalandhar?", answer: "Yes. Same-day delivery is available across Jalandhar including Model Town, Civil Lines, Cantonment, GT Road, and Bus Stand areas. Order before 3 PM. Midnight delivery is available for central Jalandhar. We also deliver to Kapurthala and Phagwara." },
      { question: "What plant is the best Lohri gift in Jalandhar?", answer: "Marigold plant in full bloom is the most festive Lohri gift in Jalandhar — it resonates with the bonfire's golden colours and is traditional to Punjabi winter festivals. A lucky bamboo arrangement (representing growth and positivity in the new season) is popular for corporate Lohri gifts in the sports goods industry. Chrysanthemum in winter bloom is a fresh, colourful Lohri choice." },
      { question: "Which plants grow well in Jalandhar's cold January winters?", answer: "Rose and marigold bloom beautifully in Jalandhar's cool October–March winter outdoors. Indoors, snake plant, ZZ plant, and peace lily handle Jalandhar's 2–6°C January nights when kept in heated rooms. Tropical plants need protection from frost — bring them indoors in January and keep them away from draughty windows." },
      { question: "Do you deliver plants to Kapurthala and Phagwara?", answer: "Yes. Kapurthala and Phagwara are within our Jalandhar delivery zone. Delivery takes 3–5 hours. Kapurthala's historic royally maintained gardens and Phagwara's industrial community both have demand for home gardening plants. Same-day delivery to these towns for orders placed before noon." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/plants-online/${slug}`;
    const payload = {
      category: "Plants",
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
        { label: "Plants", url: "/plants-online" },
        { label: `Buy Plants Online in ${data.cityName}`, url: cityUrl },
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
