// Plants Tier 2 Batch 3 — 8 cities
// Bikaner, Nellore, Moradabad, Bareilly, Gurgaon, Bhavnagar, Kolhapur, Amravati

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bikaner": {
    cityName: "Bikaner",
    metaTitle: "Buy Plants Online in Bikaner | Desert-Hardy Plants | RedHeart",
    metaDescription: "Order plants online in Bikaner. Desert roses, cacti, indoor plants & gifting combos. Delivery across Bikaner. Starting ₹299. Rajasthan's camel city gets fresh plant delivery.",
    h1: "Buy Plants Online in Bikaner — Desert-Smart Plant Delivery in Rajasthan's Camel City",
    metaKeyword: "plants online bikaner, buy plants bikaner, indoor plants bikaner, plant delivery bikaner rajasthan, cactus bikaner, desert plant bikaner, online nursery bikaner camel city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bikaner — Thar Desert Blooms at Your Doorstep</h2>

<p>Bikaner is one of Rajasthan's great historic cities — founded in 1488 by Rao Bika, son of Rao Jodha of Jodhpur, it was a powerful desert kingdom that controlled the main trade routes between India and Central Asia. The Junagarh Fort (which was never conquered), the magnificent havelis of the city's merchant class (particularly the Rampuria havelis with their intricate red sandstone carvings), the Karni Mata Temple at Deshnok (the famous "rat temple"), and the Bikaner Camel Research and Breeding Farm make Bikaner a distinctive Rajasthan destination. The city is famous across India for its bikaneri bhujia (a celebrated spiced snack), papad, and sweets — Bikaner's food trade spans the country.</p>

<p>Bikaner's climate is extreme Thar Desert: scorching summers reaching 48–50°C (India's hottest cities), a very sparse monsoon (280–330 mm annually), and cold winters with frost possible (2–5°C in January). Only desert-adapted and xerophytic plants genuinely thrive outdoors in Bikaner. However, indoor plant culture has grown significantly as air-conditioned homes and offices make it possible to keep moisture-loving plants in controlled environments. RedHeart delivers across Bikaner, Churu, Ganganagar, and Hanumangarh with service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Bikaner's Desert Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Desert Suitability</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Cactus Collection</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Native desert, thrives in Thar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desert-native, skincare, medicinal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Succulent Set</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Decorative, minimal care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC spaces, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor office, heat-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, daily pooja, shade needed</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor AC rooms, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Compound walls, once-established</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Gardening in Bikaner — Desert Wisdom Meets Modern Choices</h3>

<p>Gardening in Bikaner's extreme desert climate requires understanding what the Thar natively offers and what it demands. The historic havelis of Bikaner's Seth community had internal courtyards (chowks) designed to create shaded, relatively cooler microclimates where plants could survive even extreme summers — with deep shade from courtyard walls, plants stayed below 40°C even on 48°C days outside. Modern AC interiors recreate this protective environment for indoor plants. Cactus gardens — featuring the remarkable diversity of Cereus, Opuntia, and ornamental cacti — are beautiful, completely maintenance-free outdoor displays that celebrate Bikaner's desert identity rather than fighting it.</p>

<p>The winter months (November–February) are Bikaner's genuine garden season: the extreme cold (2–8°C nights) combined with pleasant days (18–24°C) creates conditions where marigold, sweet pea, and chrysanthemum bloom beautifully. The Bikaner camel festival (January–February) is one of Rajasthan's most colourful events — plant gifting during this peak tourism and festive period is common.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bikaner</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Bikaner</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kote Gate, Station Road, Goga Gate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">PBM Hospital / Sardul Colony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">PBM area, Sardul Colony, Rani Bazar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Churu / Hanumangarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Churu, Hanumangarh towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sri Ganganagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sri Ganganagar town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">5–7 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">On request</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Bikaner's 48–50°C summer heat?", answer: "Cactus and succulent collections are the only plants that genuinely thrive outdoors in Bikaner's summer. Aloe vera in partial shade survives. For anything else, the solution is indoors: AC rooms maintain 20–26°C year-round, allowing snake plant, ZZ plant, money plant, and peace lily to grow well. Tulsi needs deep shade and daily watering in Bikaner's summer — place under a roof overhang." },
      { question: "Is plant delivery available in Bikaner?", answer: "Yes. Delivery is available across Bikaner including Kote Gate, Station Road, Goga Gate, PBM area, and Sardul Colony. Order before 3 PM for same-day delivery. We deliver to Churu and Hanumangarh within 4–6 hours." },
      { question: "What is the best plant for a Bikaner haveli home?", answer: "Cactus garden in terracotta pots celebrates Bikaner's desert identity beautifully — arrange large and small cacti in a group on a sunny terrace or courtyard for a low-maintenance, stunning display. For the interior of a haveli, money plant trailing over a jharokha window frame, or an areca palm in the central chowk courtyard in the cooler months, is elegant and evocative." },
      { question: "When should I plant marigold in Bikaner?", answer: "October is the ideal marigold planting time in Bikaner. The November–February cool season produces excellent blooms. Bikaner's October–February winter is actually quite pleasant (18–24°C days) and is the city's only genuine outdoor gardening window. Water daily in this season as the dry air is low in humidity. Marigold for Diwali (October–November) and winter pooja use is the primary reason to grow it." },
      { question: "Which indoor plant is most suitable for Bikaner offices?", answer: "Snake plant is the single best office plant for Bikaner — it handles AC temperature, low humidity (Bikaner is extremely dry), low light, and irregular watering all at once. ZZ plant is second-best for the same reasons. Money plant in a vase of water changes weekly is a clean, auspicious desk option. Peace lily needs regular watering but thrives in AC rooms and adds elegance to reception areas." }
    ]
  },

  "nellore": {
    cityName: "Nellore",
    metaTitle: "Buy Plants Online in Nellore | Coastal & Aqua Plants | RedHeart",
    metaDescription: "Order plants online in Nellore. Jasmine, hibiscus, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Andhra Pradesh's aqua capital gets plant delivery.",
    h1: "Buy Plants Online in Nellore — Same-Day Plant Delivery on the Bay of Bengal Coast",
    metaKeyword: "plants online nellore, buy plants nellore, indoor plants nellore, plant delivery nellore andhra pradesh, jasmine nellore, coastal plants nellore, online nursery nellore",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Nellore — Aqua Capital of India Grows Greener</h2>

<p>Nellore is one of Andhra Pradesh's most important coastal districts — strategically located on the banks of the Penna river, close to the Bay of Bengal, and known as the "Rice Bowl of Andhra Pradesh" and the "Aqua Capital of India" for its extraordinary shrimp and fish farming industry (Nellore produces more farmed shrimp than any other Indian district, driving massive exports). The Pulicat Lake, one of India's largest brackish water lakes and a key flamingo habitat, lies just north of the city. Nellore is also the home of the Ranganathaswamy Temple (at Somasila) and several significant Telugu pilgrimage and cultural sites.</p>

<p>Nellore's climate is hot tropical coastal: very hot summers (38–42°C), a good northeast monsoon (1,050 mm from October–December), and warm winters (18–28°C). The coastal proximity means humidity is high and the air is salt-laden — plants need to be chosen with this in mind. Jasmine, hibiscus, tulsi, and tropical indoor plants thrive in Nellore's warm, humid conditions. RedHeart delivers across Nellore, Gudur, Kavali, and Ongole with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Nellore Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Coastal Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Salt Tolerance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malle)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily garlands, temple, home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Coastal garden, Devi worship</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily pooja, every Telugu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, aqua trader homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">N/A (indoor)</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, AC rooms, coastal humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, coastal humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">N/A (indoor)</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, Ugadi, aqua industry</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">N/A (indoor)</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, fish export offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Coastal Gardening Tips and Nellore's Plant Culture</h3>

<p>Coastal Nellore's salt-laden air affects plant choices: plants within 3–5 km of the Bay of Bengal coast can experience salt spray damage on sensitive foliage. Hardy coastal plants — hibiscus, oleander, bougainvillea, areca palm, and jasmine — handle coastal salinity well. Avoid placing delicate plants like peace lily and anthurium in direct sea-breeze-exposed positions outdoors. Indoor plants in well-insulated Nellore homes are completely protected from coastal conditions.</p>

<p>Telugu festivals drive significant plant demand in Nellore: Ugadi (Telugu New Year, March–April) when new plants refresh the home, Sankranti (January) when marigold is part of kolam decoration, and Dasara when hibiscus is offered to Devi at the several Mariamman temples in the district. The prosperous aqua farming and rice trading community in Nellore has strong corporate gifting demand — lucky bamboo, peace lily, and areca palm are popular choices.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Nellore</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Nellore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dargamitta, Magunta Layout, Santhapet</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Nellore North</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kakutur, Grand Canal, PR Peta</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Gudur / Kavali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gudur, Kavali towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ongole</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ongole town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Nellore's coastal salt air?", answer: "Hibiscus, jasmine, areca palm, oleander, and bougainvillea handle Nellore's coastal salt-spray well. These plants have evolved in humid tropical conditions and tolerate salinity better than sensitive foliage plants. For areas very close to the coast (within 1–2 km), rinse plant foliage with fresh water after strong sea breezes. Indoor plants are entirely unaffected by coastal conditions." },
      { question: "Is same-day plant delivery available in Nellore?", answer: "Yes. Same-day delivery is available across Nellore including Dargamitta, Magunta Layout, Santhapet, PR Peta, and Grand Canal areas. Order before 3 PM. We also deliver to Gudur and Kavali. Ongole is covered in 4–6 hours." },
      { question: "What plant is best for a Nellore aqua industry corporate gift?", answer: "Lucky bamboo in a premium glass vase or ceramic pot is the most popular corporate gift in Nellore's prosperous aqua farming and shrimp export industry. Areca palm in a large decorative pot makes an impressive office statement piece. Peace lily is a graceful, professional gift for business visits. Money plant in a premium planter is an auspicious choice for new business relationships." },
      { question: "Which plants grow best in Nellore's hot northeast monsoon season?", answer: "Jasmine, hibiscus, tulsi, and outdoor flowering plants thrive during Nellore's October–December northeast monsoon — this is the coastal city's primary rainfall season. The combination of warm temperatures (24–30°C) and 1,050 mm rainfall creates ideal tropical plant growth conditions. November is Nellore's gardening peak — buy jasmine and hibiscus plants immediately after the onset of rains." },
      { question: "Do you deliver plants to Ongole and Kavali?", answer: "Yes. Kavali is within 3–5 hours from our Nellore network; Ongole is within 4–6 hours. Both towns have growing demand for corporate gifting plants and home garden plants driven by the agricultural and aqua industry prosperity. Same-day delivery to Kavali for orders placed before noon." }
    ]
  },

  "moradabad": {
    cityName: "Moradabad",
    metaTitle: "Buy Plants Online in Moradabad | Brass City Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Moradabad. Money plant, indoor plants & gifting combos. Same-day delivery. Starting ₹299. UP's brass city gets fresh plant delivery.",
    h1: "Buy Plants Online in Moradabad — Same-Day Plant Delivery in the Brass City of India",
    metaKeyword: "plants online moradabad, buy plants moradabad, indoor plants moradabad, plant delivery moradabad uttar pradesh, money plant moradabad, online nursery moradabad brass city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Moradabad — Pital Nagri Gets Doorstep Greens</h2>

<p>Moradabad — the "Brass City" (Pital Nagri) of India — is the world's largest exporter of brass handicrafts and metal homeware. The city's brass industry, with thousands of artisan workshops producing intricate metalwork exported to Europe, North America, and the Gulf, has made Moradabad internationally significant as a craft centre. Located on the Ramganga river and on the main Delhi–Dehradun rail route, Moradabad is also a major commercial centre for western Uttar Pradesh — the gateway to the Terai plains and the Kumaon foothills.</p>

<p>Moradabad's climate is North India transitional: very hot summers (42–44°C), a good monsoon (900 mm), and cold winters (3–8°C in January). The October–March window is Moradabad's gardening season. Indoor plants complement the city's artisan homeware sensibility — a snake plant or peace lily in a Moradabad brass pot creates an extraordinary, distinctive display that celebrates both the city's craft heritage and the growing indoor plant trend. RedHeart delivers across Moradabad, Amroha, Rampur, and Sambhal with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Moradabad Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, brass pot pairing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter bloom, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, puja, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low care, year-round</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Export business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, artisan exporter homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrance, summer, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Sep</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Moradabad's Brass Heritage and the Art of Indoor Plants</h3>

<p>Moradabad's brass artisans produce some of the world's most intricate metal homeware — from engraved vases and flower pots to elaborate candlesticks and decorative bowls. Pairing a living plant with a Moradabad brass pot creates a genuinely unique home décor element that marries the city's craft heritage with the growing indoor plant trend. A money plant trailing from a vintage brass pot, or a peace lily in a patinated copper bowl — these are displays that reflect Moradabad's identity as India's craft capital.</p>

<p>The city's large Muslim artisan community, alongside the substantial Hindu trading class, means Eid gifting (particularly during Eid-ul-Fitr and Eid-ul-Adha) and Diwali gifting are both significant plant demand occasions. Lucky bamboo and money plants in premium planters are popular across both communities as auspicious, long-lasting gifts.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Moradabad</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Moradabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines, Peepal Mandi, Kasampur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Katghar / Thakurdwara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Katghar, Thakurdwara, Pakwara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Amroha / Sambhal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Amroha, Sambhal towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rampur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rampur town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant looks best in a Moradabad brass pot?", answer: "A money plant trailing from a vintage patinated brass pot is Moradabad's signature combination — it pairs the city's craft heritage with indoor plant beauty. Peace lily in a polished brass pot makes a sophisticated gifting presentation. Snake plant in a tall cylindrical brass vase is architectural and modern. Any plant in a Moradabad pot becomes a unique piece of living art." },
      { question: "Is same-day plant delivery available in Moradabad?", answer: "Yes. Same-day delivery is available across Moradabad including Civil Lines, Peepal Mandi, Kasampur, Katghar, and Thakurdwara. Order before 3 PM. We also deliver to Amroha and Sambhal. Rampur is reachable in 4–6 hours." },
      { question: "What plant makes the best Eid gift in Moradabad?", answer: "Money plant in a premium ceramic or brass pot is a universally welcome Eid gift in Moradabad — it's auspicious, long-lasting, and appropriate for all communities. Lucky bamboo is popular for business Eid gifting. For close family, a fragrant mogra (jasmine) plant in a decorated pot is a warm, personal gift. Areca palm in a large premium planter is an impressive gift for senior occasions." },
      { question: "Which plants grow well in Moradabad's climate?", answer: "Rose, marigold, tulsi, mogra, money plant, and snake plant all do well in Moradabad. The good 900 mm monsoon benefits outdoor plants. October through March is the prime gardening window for outdoor plants; indoor plants grow year-round. The Ramganga river valley creates moderately humid conditions that benefit both indoor and outdoor plants compared to drier UP cities." },
      { question: "Do you deliver plants to Rampur and Amroha?", answer: "Yes. Amroha is within 3–5 hours from our Moradabad network; Rampur is within 4–6 hours. These towns have growing aspiring middle-class demand for home garden plants and corporate gifting options. Same-day delivery to Amroha for orders placed before noon." }
    ]
  },

  "bareilly": {
    cityName: "Bareilly",
    metaTitle: "Buy Plants Online in Bareilly | Rose City Plants | RedHeart",
    metaDescription: "Order plants online in Bareilly. Rose, marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. UP's Rose City gets fresh plant delivery.",
    h1: "Buy Plants Online in Bareilly — Same-Day Plant Delivery in UP's Rose City",
    metaKeyword: "plants online bareilly, buy plants bareilly, indoor plants bareilly, plant delivery bareilly uttar pradesh, rose plant bareilly, marigold bareilly, online nursery bareilly rose city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bareilly — The Rose City of North India Blooms at Your Door</h2>

<p>Bareilly — popularly called "Bareilly ki Barfi" from the beloved 2017 Bollywood film — is Uttar Pradesh's fourth-largest city and the commercial capital of the Rohilkhand region. Long ruled by the Rohilla Afghans (hence Rohilkhand), Bareilly has a distinctive cultural blend of Hindi-Urdu traditions, a large Muslim community, and a prosperous Hindu merchant class. The city is famous across India as the "Rose City" (Gulab Nagari) for its centuries-old tradition of rose cultivation and attar (rose essence) production — Bareilly's rose gardens were once legendary, and the city's rose water and attar trade defined North India's perfume economy before synthetic fragrances arrived.</p>

<p>Bareilly's climate is North India: hot summers (42–44°C), a good monsoon (900 mm), and cold winters (3–8°C in January). The October–March window is prime gardening time — rose, marigold, and sweet pea bloom beautifully in the Rohilkhand region's cool air. RedHeart delivers across Bareilly, Pilibhit, Budaun, and Shahjahanpur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Bareilly's Rose City Heritage</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Rose City Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gulab Nagari's signature, attar tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Apr</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Attar tradition, summer fragrance</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Sep</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, weddings, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, trade offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, elegant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Bareilly's Rose Heritage and Modern Plant Culture</h3>

<p>Bareilly's identity as Gulab Nagari (Rose City) traces back to Mughal-era attar production. Kannauj (50 km away) remains India's attar capital, and Bareilly's connection to the rose cultivation that feeds the attar industry is ancient. The Dawat-e-Islami and other Islamic cultural organisations in Bareilly's large Muslim community maintain floral traditions — roses and mogra are significant in Islamic aesthetics, used for fragrance, garlands, and spiritual practices. The city's Hindu community maintains tulsi and marigold traditions with equal devotion.</p>

<p>Bareilly's cantonment (one of India's oldest, established 1817) maintains large, well-kept military gardens with rose traditions that the wider city finds aspirational. October through April is the genuine Rose City moment — when well-maintained rose bushes in Bareilly's residential gardens bloom in reds, pinks, yellows, and whites, the city's historical identity reasserts itself.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bareilly</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines / Central</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines, Cantonment, Subhash Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Izzatnagar / Rohilkhand Univ</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Izzatnagar, Rohilkhand University</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Pilibhit Road / North</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pilibhit Road, Fatehganj, Rampur Garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Budaun / Shahjahanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Budaun, Shahjahanpur towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "How do I grow roses in Bareilly to honour its Gulab Nagari heritage?", answer: "Plant roses in October for maximum success in Bareilly. Use a mix of compost-rich soil with good drainage. Water every 3 days in winter, daily in summer. Fertilise with rose-specific fertiliser monthly. Deadhead spent blooms. Bareilly's cool October–April period allows multiple bloom flushes — December through February is peak bloom time. Pink and red hybrid tea roses perform particularly well in Rohilkhand's climate." },
      { question: "Is same-day plant delivery available in Bareilly?", answer: "Yes. Same-day delivery is available across Bareilly including Civil Lines, Cantonment, Izzatnagar, and Rohilkhand University area. Order before 3 PM. Midnight delivery is available for central Bareilly. We also deliver to Pilibhit and Budaun." },
      { question: "What plant is the best gift for a Bareilly wedding?", answer: "Rose plant — particularly a fragrant hybrid tea variety — is the most resonant wedding gift for Bareilly, given the city's rose heritage. Marigold plants are universally purchased for wedding decoration. For a lasting housewarming gift after a wedding, a money plant or lucky bamboo in a brass pot (combining Moradabad craft with Bareilly plants) is a unique, meaningful option." },
      { question: "Which plants survive Bareilly's cold January nights?", answer: "Snake plant, ZZ plant, and peace lily handle Bareilly's 3–8°C January nights when kept in heated indoor spaces. Rose plants are cold-tolerant outdoors — the cold actually improves spring reblooming. Tulsi needs protection on the coldest nights — bring it under a covered porch or veranda. Money plant should be kept indoors in January." },
      { question: "Do you deliver plants to Shahjahanpur and Pilibhit?", answer: "Yes. Shahjahanpur and Pilibhit are within our Bareilly delivery zone. Delivery takes 4–6 hours. Pilibhit is at the edge of the Terai forest belt — its soil and rainfall conditions are excellent for plants. Same-day delivery available for orders placed before noon for both towns." }
    ]
  },

  "gurugram": {
    cityName: "Gurugram",
    metaTitle: "Buy Plants Online in Gurugram | Millennium City Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Gurugram. Monstera, indoor plants, corporate gifting & terrace garden combos. Same-day delivery. Starting ₹299. Gurgaon's corporate city gets plant delivery.",
    h1: "Buy Plants Online in Gurugram — Same-Day Plant Delivery in the Millennium City",
    metaKeyword: "plants online gurugram, buy plants gurgaon gurugram, indoor plants gurugram, plant delivery gurugram haryana, monstera gurugram, corporate plant gifting gurugram, online nursery gurugram DLF cyber city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Gurugram — India's Corporate Capital Goes Green</h2>

<p>Gurugram (formerly Gurgaon) is India's most globally integrated corporate city — home to the headquarters of hundreds of Fortune 500 companies, the largest concentration of multinational corporate offices in South Asia, and a skyline of glass towers that has transformed what was farmland just 30 years ago into one of India's most affluent urban centres. DLF Cyber City, Udyog Vihar, Golf Course Road, Sohna Road, and the MG Road corridor constitute one of Asia's most significant business districts. Gurugram has over 250 malls and shopping centres, some of India's most premium residential developments (DLF 5, Sector 56–57, Sushant Lok), and an expatriate community from 40+ countries.</p>

<p>Gurugram's climate follows Delhi's: hot summers (44–46°C), moderate monsoon (700 mm), and cold winters (3–7°C in January with severe fog). The Aravallis on the city's western edge moderate conditions slightly. The city's affluent, globally-connected population drives demand for premium indoor plants — monstera, fiddle leaf fig, pothos, rubber plant, and statement tropicals that would not be unusual in a Singapore or London flat. Office plant installations, balcony gardens, and corporate gifting are major plant categories in Gurugram. RedHeart delivers across Gurugram, Sohna, Manesar, and Faridabad (adjacent) with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Premium Plants for Gurugram's Corporate and Residential Market</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Gurugram Setting</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Trend Level</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement living room, Cyber City flats</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate reception, desk, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate lobbies, premium homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Minimal care, modern offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every home, auspicious gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Always</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate Diwali gift standard</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Always</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter terrace, DLF villa gardens</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Seasonal</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Corporate Plant Gifting and Terrace Gardens in Gurugram</h3>

<p>Gurugram's corporate culture drives India's most sophisticated plant gifting market. Diwali corporate gifting in Gurugram is an enormous industry — lucky bamboo arrangements, money plant combos, and premium areca palms are ordered in bulk by HR teams for employee gifting. Peace lily in a ceramic planter is the standard for client gifting by consulting firms, banks, and tech companies across DLF Cyber City and Udyog Vihar. The expatriate community prefers monstera, fiddle leaf fig, and statement succulents that reflect international interior design sensibilities.</p>

<p>Gurugram's premium residential towers (DLF 5, Unitech Cascades, Emaar MGF) have balcony garden cultures where snake plant, ZZ plant, areca palm, and seasonal flowers create green balcony spaces despite the urban density. The December–February window is when rose plants, chrysanthemum, and dianthus bloom beautifully in rooftop and terrace gardens across Gurugram's villa communities in sectors 55–57 and Sushant Lok.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Gurugram</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">DLF / Cyber City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">DLF Phase 1–5, Cyber City, Golf Course</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sohna Road / New Gurugram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sohna Road, Sectors 60–80, New Gurugram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">MG Road / Old Gurgaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">MG Road, Udyog Vihar, Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Manesar / Sohna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Manesar industrial, Sohna town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Gurugram corporate office gifting?", answer: "Peace lily in a ceramic planter, lucky bamboo in glass vases, and money plant combos are the Gurugram corporate gift standard. For senior executive Diwali gifting, areca palm in a large decorative pot or a premium monstera in a designer planter makes a strong impression. We handle bulk corporate orders for companies in DLF Cyber City and Udyog Vihar — contact us for bulk scheduling." },
      { question: "Is same-day plant delivery available across all of Gurugram?", answer: "Yes. Same-day delivery covers DLF Phase 1–5, Golf Course Road, Cyber City, Sohna Road sectors, MG Road, and Udyog Vihar. Order before 3 PM. Midnight delivery is also available for DLF and Golf Course Road areas. We handle bulk corporate delivery across Gurugram's business districts." },
      { question: "What indoor plant is trending in Gurugram apartments?", answer: "Monstera deliciosa is the most sought-after indoor plant in Gurugram's premium apartments — its iconic split leaves create an immediately tropical, Instagram-worthy interior. Peace lily, ZZ plant, and snake plant are close behind for their air-purifying properties and minimal care. Pothos (devil's ivy) is popular in flat-share and startup office environments. Areca palm is standard for luxury high-rise lobbies and formal living rooms." },
      { question: "Which plants handle Gurugram's winter smog season?", answer: "Indoor air-purifying plants are especially valuable in Gurugram during November–January smog. Snake plant (releases oxygen at night), peace lily (filters VOCs and formaldehyde), and areca palm (humidifies dry winter air) are the most effective. Having 5–8 indoor plants in a 1,000 sq ft apartment measurably improves indoor air quality during Gurugram's severe AQI months." },
      { question: "Can I get plants for my DLF villa's terrace garden?", answer: "Yes. We deliver to all DLF villa communities including DLF 1–5. For terrace gardens, rose (October–March), bougainvillea (March–July), marigold (October–February), and seasonal annuals work beautifully in Gurugram's winter. For summer terrace plants, hardy options like snake plant in containers, succulents, and aloe vera survive the heat with minimal water. Contact us for large terrace garden planting consultations." }
    ]
  },

  "bhavnagar": {
    cityName: "Bhavnagar",
    metaTitle: "Buy Plants Online in Bhavnagar | Coastal Gujarat Plants | RedHeart",
    metaDescription: "Order plants online in Bhavnagar. Tulsi, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Gujarat's ship-breaking city gets fresh plant delivery.",
    h1: "Buy Plants Online in Bhavnagar — Same-Day Plant Delivery on Gujarat's Kathiawar Coast",
    metaKeyword: "plants online bhavnagar, buy plants bhavnagar, indoor plants bhavnagar, plant delivery bhavnagar gujarat, tulsi bhavnagar, money plant bhavnagar, online nursery bhavnagar kathiawar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bhavnagar — Diamond Capital of the World Goes Green</h2>

<p>Bhavnagar is one of Gujarat's major ports and industrial cities — located on the Gulf of Khambhat coast in the Saurashtra region of Kathiawar. The city is best known internationally for the Alang ship-breaking yard (the world's largest ship-breaking facility, where around 50% of the world's retired ships are scrapped and recycled), which has made Bhavnagar a centre of the global maritime recycling industry. The city is also significant for diamond polishing (though Surat leads this industry, Bhavnagar's Gujarati business community participates), textiles, chemicals, and the nearby Velavadar National Park (famous for blackbucks). Bhavnagar was a princely state of the Gohil Rajput dynasty — Takhteshwar Temple on the hill in the city centre and the Victorian-era architecture of the old city reflect this heritage.</p>

<p>Bhavnagar's climate is coastal semi-arid Gujarat: hot summers (40–42°C), a limited monsoon (600 mm), and warm dry winters (14–26°C). The Gulf of Khambhat moderates temperatures slightly and increases humidity compared to inland Gujarat. Tulsi, money plant, snake plant, and drought-tolerant outdoor plants do well here. RedHeart delivers across Bhavnagar, Mahuva, Palitana, and Botad with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Bhavnagar Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Gujarati Vaishnava home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low care, ship yard execs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Nav Ratri, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Business gifting, maritime industry</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Skincare, coastal low water plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, corporate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Compound walls, coastal colours</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mar–Jul</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Bhavnagar's Vaishnava Tradition and Sacred Plant Culture</h3>

<p>Bhavnagar's Gujarati community is predominantly Vaishnava — followers of the Krishna bhakti tradition, particularly Swaminarayan sect, which has its own Swaminarayan temple in Bhavnagar. The Vaishnava tradition places tulsi at the absolute centre of home worship — the tulsi maadam in the courtyard is tended daily, water is offered at sunrise, and a lamp is lit at dusk. The city's Jain community (significant in Gujarat's trading classes) also values plants for their non-violent, nature-connected philosophy.</p>

<p>Bhavnagar's Navratri is celebrated with great devotion — the Takhteshwar Temple on the hill commands spectacular views of the city and Gulf of Khambhat, and during Navratri the garba dances and Devi offerings include marigold and hibiscus. Diwali (in the Gujarati business calendar, also the new year — Bestu Varas) is the major plant gifting occasion, with lucky bamboo and money plant in premium planters the corporate standard.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bhavnagar</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Bhavnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Takhteshwar, Darbar Gadh, Station Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Alang / Port Area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Alang Road, Ghogha, Bhavnagar Port</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahuva / Palitana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahuva, Palitana towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Botad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Botad town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is most important for a Bhavnagar Vaishnava home?", answer: "Tulsi (holy basil) is the single most sacred plant for Bhavnagar's Vaishnava community — it's tended daily and central to Swaminarayan and Vaishnava worship. The tulsi maadam (stone or marble plant stand) in the courtyard or main hall is where family prayers are offered at sunrise and sunset. A healthy, full tulsi plant in a decorative maadam is the most meaningful gift you can give to a Bhavnagar family." },
      { question: "Is same-day plant delivery available in Bhavnagar?", answer: "Yes. Same-day delivery is available across Bhavnagar including Takhteshwar area, Station Road, Darbar Gadh, Alang Road, and Ghogha. Order before 3 PM. We also deliver to Mahuva and Palitana, the Jain pilgrimage city." },
      { question: "Which plants are best for Navratri and Diwali gifting in Bhavnagar?", answer: "Marigold for Navratri is the festive standard in Bhavnagar. For Diwali (Gujarati New Year), money plant and lucky bamboo in premium planters are the most popular corporate gifts. Tulsi is the most personal and sacred Diwali gift for family. Areca palm in a large decorative pot is an impressive premium Diwali gift for senior professionals in Bhavnagar's ship-breaking and business community." },
      { question: "Which plants survive Bhavnagar's coastal Gujarat climate?", answer: "Bougainvillea, hibiscus, aloe vera, snake plant, and tulsi handle Bhavnagar's coastal semi-arid conditions well. The limited 600 mm rainfall means outdoor plants need regular watering in the dry season. Bougainvillea is ideal once established — it thrives in Bhavnagar's warm, dry conditions and blooms most vigorously when slightly water-stressed." },
      { question: "Do you deliver plants to Palitana, the Jain pilgrimage city near Bhavnagar?", answer: "Yes. Palitana is within our Bhavnagar delivery zone with delivery in 3–5 hours. Palitana — home to the Shatrunjaya hills with 900+ Jain temples — has a strong tradition of sacred plants. Tulsi and fragrant flowering plants are appropriate offerings within the Jain philosophical tradition of reverence for all living things. Same-day delivery available for Palitana with orders placed before noon." }
    ]
  },

  "kolhapur": {
    cityName: "Kolhapur",
    metaTitle: "Buy Plants Online in Kolhapur | Mahalaxmi City Plants | RedHeart",
    metaDescription: "Order plants online in Kolhapur. Hibiscus, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Maharashtra's sugarcane city gets fresh plant delivery.",
    h1: "Buy Plants Online in Kolhapur — Same-Day Plant Delivery in the City of Mahalaxmi",
    metaKeyword: "plants online kolhapur, buy plants kolhapur, indoor plants kolhapur, plant delivery kolhapur maharashtra, hibiscus kolhapur, tulsi kolhapur, online nursery kolhapur mahalaxmi",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kolhapur — Mahalaxmi's City Blooms at Your Doorstep</h2>

<p>Kolhapur is one of Maharashtra's most culturally vibrant and historically significant cities — the former capital of the Kolhapur princely state of the Bhosale dynasty (a Maratha royal lineage), and home to the Mahalaxmi (Ambabai) temple, one of Maharashtra's shakti peethas and one of India's most important Devi shrines. The city is the commercial hub of southern Maharashtra, dominating regional trade in sugar, textiles, footwear, and engineering goods. Kolhapur is also famous for its cuisine (Kolhapuri cuisine is one of India's spiciest), its silver and gold jewellery, and the distinctive Kolhapuri leather chappals exported worldwide.</p>

<p>Kolhapur's climate is one of Maharashtra's finest — located at 569 m elevation with the Sahyadri range moderating temperatures and delivering excellent rainfall (1,100 mm from the southwest monsoon). Summers are warm but not extreme (max 38°C), monsoon is lush, and winters are pleasantly cool (10–20°C). This wonderful climate supports an extremely wide range of plants. RedHeart delivers across Kolhapur, Sangli, Miraj, and Ichalkaranji with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Kolhapur's Fertile Sahyadri Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Kolhapur Significance</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Thrives Here</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahalaxmi Devi offerings, daily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Maratha home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Diwali, Gauri festival</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Kolhapur's humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, Sahyadri cool air, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrant, temple use, Kolhapuri women</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, function halls</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Mahalaxmi Temple and Kolhapur's Sacred Floriculture</h3>

<p>The Mahalaxmi (Ambabai) Temple in Kolhapur is one of the most visited religious sites in Maharashtra — hundreds of thousands of devotees come here annually, particularly during Navratri. Hibiscus flowers (jaswand) are the preferred offering to the goddess, and Kolhapur's homes and gardens maintain hibiscus plants for daily offering. Marigold garlands (which are also offered at the temple in massive quantities) make marigold one of Kolhapur's most consistently purchased plants. The Gauri festival (celebrated before Ganapati Puja in August) is a major occasion for marigold and hibiscus use in Kolhapur's Maratha households.</p>

<p>Kolhapur's mild, Sahyadri-cooled climate is one of western Maharashtra's best for gardening. The 1,100 mm rainfall from the monsoon keeps soil rich and well-watered for months, and the pleasant 10–20°C winter allows rose and chrysanthemum to bloom beautifully. The city's prosperous Maratha, Lingayat, and Jain communities all maintain vibrant home garden traditions.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kolhapur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Kolhapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mahalaxmi Temple area, Shahupuri, Rajarampuri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tarabai / New Kolhapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tarabai Park, Kalamba, Rajendranagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sangli / Miraj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sangli, Miraj, Kupwad MIDC</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ichalkaranji</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ichalkaranji textile hub</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is offered at Mahalaxmi Temple in Kolhapur?", answer: "Hibiscus (jaswand, Hibiscus rosa-sinensis) is the primary flower offered to Mahalaxmi Devi in Kolhapur — red and pink hibiscus are especially preferred. Marigold garlands are also offered in large quantities. Tulsi is sacred to all Hindu households in Kolhapur. Growing your own hibiscus at home provides daily fresh offerings for the goddess year-round." },
      { question: "Is same-day plant delivery available in Kolhapur?", answer: "Yes. Same-day delivery is available across Kolhapur including Mahalaxmi Temple area, Shahupuri, Rajarampuri, Tarabai Park, and Kalamba. Order before 3 PM. We also deliver to Sangli, Miraj, and Ichalkaranji." },
      { question: "Which plants grow best in Kolhapur's Sahyadri climate?", answer: "Kolhapur's mild 10–38°C range and 1,100 mm rainfall create nearly ideal conditions for an enormous range of plants. Rose, hibiscus, mogra, marigold, tulsi, peace lily, areca palm — all grow with vigour in Kolhapur's climate. The 569 m elevation prevents the extreme heat of coastal areas, and the Sahyadri humidity benefits tropical indoor plants that would struggle in drier Maharashtra cities." },
      { question: "What plant is best for Gauri-Ganesh festival gifting in Kolhapur?", answer: "Marigold plant in full bloom for the August–September Gauri-Ganesh festival is the most traditional and valued choice in Kolhapur. Hibiscus for Gauri puja and tulsi for the household ceremony are essential. For a lasting gift associated with the festival, a money plant or peace lily in a ceramic planter is elegant. Mogra (jasmine) in bloom adds beautiful fragrance to the festival atmosphere." },
      { question: "Do you deliver plants to Sangli and Ichalkaranji from Kolhapur?", answer: "Yes. Sangli and Miraj are within 3–5 hours from our Kolhapur delivery network. Ichalkaranji (the textile manufacturing hub) is similarly accessible. Sangli's turmeric and grape-growing agricultural community has consistent demand for garden plants; Ichalkaranji's textile workforce has growing indoor plant demand. Same-day delivery available for orders placed before noon." }
    ]
  },

  "amravati": {
    cityName: "Amravati",
    metaTitle: "Buy Plants Online in Amravati | Vidarbha Cotton City Plants | RedHeart",
    metaDescription: "Order plants online in Amravati. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Vidarbha's orange city gets fresh plant delivery.",
    h1: "Buy Plants Online in Amravati — Same-Day Plant Delivery in Vidarbha's Orange City",
    metaKeyword: "plants online amravati, buy plants amravati, indoor plants amravati, plant delivery amravati maharashtra vidarbha, marigold amravati, online nursery amravati orange city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Amravati — Vidarbha's Proud City Gets Doorstep Greens</h2>

<p>Amravati is the headquarters of Vidarbha's Amravati Division and one of Maharashtra's most historically significant cities. The city is known as the "Orange City" for the vast orange orchards of the Vidarbha region (the same appellation applies to Nagpur, its larger neighbour), and as a cotton and textile trading hub. Amravati is also significant as the birthplace of Dr. B.R. Ambedkar (born here in 1891), one of India's most towering figures — architect of India's constitution, champion of Dalit rights, and a globally revered figure. The Ambedkar memorial complex in Amravati is an important pilgrimage site for millions of Buddhists and Dalits across India. The city is also home to the Amravati University and a regional commercial centre for Vidarbha.</p>

<p>Amravati's climate is Vidarbha continental: very hot summers (42–44°C, among Maharashtra's hottest), a moderate monsoon (800 mm), and cool winters (8–18°C). The orange growing country of the surrounding region means soil quality is generally rich. October–March is the gardening window — marigold, rose, and chrysanthemum bloom beautifully in the cool Vidarbha air. RedHeart delivers across Amravati, Akola, Buldhana, and Yavatmal with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Amravati Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Ambedkar Jayanti</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter bloom, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low care, university campuses</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, cotton trade</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Ambedkar memorial offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, temple offerings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Amravati's Cultural Heritage and Plant Traditions</h3>

<p>Amravati's cultural life is shaped by two complementary streams: the Maharashtra Maratha-Kunbi agricultural tradition with its deep Vaishnava, Shaiva, and Devi worship rooted in tulsi, hibiscus, and marigold — and the Ambedkarite Buddhist movement that has transformed millions of Dalits' spiritual lives since Dr. Ambedkar's conversion to Buddhism in 1956. Ambedkar Jayanti (April 14) is one of Amravati's biggest celebrations — marigold garlands and floral tributes at the Ambedkar memorial are a significant part of the occasion.</p>

<p>The Vidarbha region's cotton and orange orchards surround Amravati — this agricultural richness permeates the city's relationship with plants and nature. Amravati University's botanical garden and the Melghat Tiger Reserve (60 km away) create an environmentally-aware population that is receptive to home gardening and indoor plants. The October–March window is the gardening prime time — cool Vidarbha winters create excellent conditions for roses, marigold, and seasonal flowers.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Amravati</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Amravati</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajapeth, Shiv Colony, Station Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Badnera / MIDC</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Badnera junction, MIDC area, Frafal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Akola / Buldhana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Akola, Buldhana towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Yavatmal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Yavatmal town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are used for Ambedkar Jayanti celebrations in Amravati?", answer: "Marigold garlands are the primary floral tribute at Ambedkar memorials and statues across Amravati on April 14. Blue-coloured flowers (Ambedkar's signature colour is blue) — agapanthus, blue salvia, or hydrangea if available — are symbolic. White lotus is Buddhist India's most sacred flower — the lotus represents Ambedkar's philosophy of rising above oppression to enlightenment, and potted lotus plants are meaningful in this context." },
      { question: "Is same-day plant delivery available in Amravati?", answer: "Yes. Same-day delivery is available across Amravati including Rajapeth, Shiv Colony, Station Road, Badnera, and MIDC area. Order before 3 PM. We also deliver to Akola and Buldhana. Yavatmal is reachable in 4–6 hours." },
      { question: "Which plants grow best in Amravati's Vidarbha climate?", answer: "Rose, marigold, tulsi, hibiscus, money plant, and snake plant all thrive in Amravati. The cool October–March Vidarbha winter is excellent for outdoor plants. The rich cotton-country soil benefits outdoor garden plants significantly. Indoor plants need AC environments in the extreme April–June summer (42–44°C) when temperatures prevent tropical plants from being kept outdoors." },
      { question: "What plant is best for a Diwali gift in Amravati?", answer: "Money plant in a terracotta or ceramic pot is the most popular Diwali gift in Amravati across all communities. Lucky bamboo is the standard for business Diwali gifting in Amravati's cotton trade and commercial sector. Marigold plants in full bloom are festive and traditional. A peace lily or areca palm is an impressive premium gift for senior business or family occasions." },
      { question: "Do you deliver plants to Akola and Yavatmal from Amravati?", answer: "Yes. Akola is within 3–5 hours and Yavatmal within 4–6 hours from our Amravati delivery network. Both towns are significant Vidarbha commercial centres with growing demand for indoor corporate gifting plants and home garden plants. Akola's cotton market and Yavatmal's farming community both purchase plants for festival gifting and home decoration. Same-day delivery available for Akola with orders placed before noon." }
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
