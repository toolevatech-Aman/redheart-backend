// Plants Tier 1 Batch 4 — 8 cities
// Agra, Aurangabad, Bhopal, Guwahati, Jodhpur, Kanpur, Patna, Varanasi

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "agra": {
    cityName: "Agra",
    metaTitle: "Buy Plants Online in Agra | Rose & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Agra. Rose, seasonal flowers, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Taj Mahal city gets fresh plant delivery.",
    h1: "Buy Plants Online in Agra — Same-Day Plant Delivery in the City of the Taj",
    metaKeyword: "plants online agra, buy plants agra, indoor plants agra, plant delivery agra uttar pradesh, rose plant agra, online nursery agra taj mahal",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Agra — Mughal Gardens Inspire India's Greatest City of Flowers</h2>

<p>Agra is known worldwide for the Taj Mahal — but for those who look beyond the marble monument, the city has a second horticultural heritage: the Mughal garden tradition. The Mehtab Bagh across the Yamuna, the Ram Bagh (considered India's first Mughal garden), and the Taj Mahal's own charbagh garden are all examples of the formal Islamic garden design that shaped Agra's relationship with plants and water for centuries. The Mughal emperors brought Persian garden aesthetics to India, and Agra was their primary canvas. Today, Agra's residents carry this horticultural pride into their homes — rose plants, jasmine, and seasonal flowers are part of every neighbourhood's street-level ecology.</p>

<p>Agra's climate is harsh North India: extreme summers (44–46°C in June), cold foggy winters (2–6°C in January), and a moderate monsoon (700 mm). The best gardening window is October through February, when Agra's famous winter weather encourages rose cultivation, marigold, and seasonal bedding plants. RedHeart delivers across Agra city, Mathura, Firozabad, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Popular in Agra Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Mughal / Agra Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mughal garden staple, winter glory</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra (Jasmine)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrance, hair traditions, summer</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Sep</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Festivals, temple offerings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, every Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, air purifier, handles cold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, hotel lobbies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tourism gifting, handicraft shops</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Agra's Seasonal Plant Calendar</h3>

<p>October through February is Agra's gardening prime time. As temperatures drop from monsoon heat, rose plants come into their best growth window — plant new roses in October, fertilise in November, and enjoy peak blooms January through March. Marigold plants (gainda) are indispensable for North Indian winters: they fill the Taj Mahal gardens with orange and yellow, and Agra's streets are bright with potted marigold during Diwali and winter festivals. Mogra (jasmine) is a summer and monsoon plant here — from April through September, its intense fragrance fills Agra's evenings.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Agra</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Agra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Taj Ganj, Sadar, Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Trans-Yamuna / East</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kalindi Vihar, Kamla Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Mathura / Vrindavan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mathura, Vrindavan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Firozabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Firozabad town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are connected to the Mughal garden tradition in Agra?", answer: "Rose, jasmine (mogra), and cypress are the core Mughal garden plants. A rose plant for your home garden carries this centuries-old Agra tradition forward. The charbagh-style Mughal garden used symmetrical planting of flowering shrubs, fragrant flowers, and water channels. Growing roses, mogra, and marigold at home echoes that horticultural heritage beautifully." },
      { question: "Is same-day plant delivery available across Agra?", answer: "Yes. Same-day delivery is available across Agra including Taj Ganj, Sadar Bazaar, Civil Lines, and Trans-Yamuna areas. Order before 3 PM. We also deliver to Mathura and Vrindavan — where flower demand for temple offerings is year-round and significant." },
      { question: "When is the best time to plant roses in Agra?", answer: "October is the best time to plant roses in Agra. The cooling October weather allows root establishment before peak bloom (December–March). Water every 3–4 days, apply fertiliser monthly, and deadhead spent blooms to extend the flowering season. Agra's roses are at their finest during the foggy January mornings — the same backdrop as the Taj Mahal at sunrise." },
      { question: "What plant is best for gifting in Mathura and Vrindavan?", answer: "Tulsi (holy basil) is the most sacred plant gift for Mathura and Vrindavan's deeply devotional Vaishnava communities. Tulsi is offered to Krishna daily; a beautiful tulsi plant in a clay pot is the most meaningful gift. Marigold plants are also important — marigold garlands are offered at every temple. For a modern gifting option, a money plant or lucky bamboo works well." },
      { question: "Which plants survive Agra's extreme summer heat?", answer: "Snake plant, ZZ plant, aloe vera, and bougainvillea handle Agra's 44–46°C June temperatures best. Keep indoor plants in AC rooms and away from hot windows. Water outdoor pots twice daily (morning and evening). Mogra (jasmine) actually blooms well in Agra's summer heat if kept well-watered. Avoid placing tender tropicals like peace lily outdoors in peak summer." }
    ]
  },

  "aurangabad": {
    cityName: "Aurangabad",
    metaTitle: "Buy Plants Online in Aurangabad | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Aurangabad. Indoor plants, bougainvillea, rose & gifting combos. Same-day delivery. Starting ₹299. City of the Bibi Ka Maqbara gets plant delivery.",
    h1: "Buy Plants Online in Aurangabad — Same-Day Plant Delivery in Marathwada's Capital",
    metaKeyword: "plants online aurangabad, buy plants aurangabad, indoor plants aurangabad, plant delivery aurangabad maharashtra, bougainvillea aurangabad, online nursery aurangabad marathwada",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Aurangabad — Gateway to the Ajanta Ellora Caves Gets Doorstep Greens</h2>

<p>Aurangabad is Marathwada's largest city and the gateway to the UNESCO World Heritage Ajanta and Ellora Caves. The city has a distinctive Mughal heritage — Aurangzeb governed the Deccan from here, and the Bibi Ka Maqbara (the "Taj of the Deccan") stands as a reminder of that Mughal influence. Today's Aurangabad is a growing industrial city — the Aurangabad Industrial City (AURIC) is one of India's largest new industrial townships, and the city's auto, pharma, and engineering sectors employ a large middle-class workforce with growing home-ownership and lifestyle spending.</p>

<p>Aurangabad's climate is semi-arid Deccan: hot summers (40–42°C), a modest monsoon (720 mm), and mild winters (10–26°C). The city's relatively dry climate suits bougainvillea, cacti, and drought-tolerant plants particularly well. Indoor plants thrive in Aurangabad's moderate conditions with proper care. RedHeart delivers across Aurangabad, Jalna, and Beed with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Aurangabad's Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best For</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care Level</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, compound, dry climate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, low water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medicinal, kitchen, drought-hardy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, AURIC offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja, daily blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Gardening in Aurangabad's Dry Deccan Climate</h3>

<p>Aurangabad receives significantly less rain than Pune or Mumbai — the Marathwada region has historically struggled with drought, and this has shaped the city's approach to water-wise gardening. Bougainvillea is Aurangabad's ideal ornamental plant: it blooms brilliantly precisely when water is limited, covers walls and terraces with vivid colour from February through June, and asks for almost nothing in return. For indoor plants, snake plant, ZZ plant, and aloe vera are excellent choices — all very drought-tolerant and low care. The October–February winter window is when Aurangabad's outdoor gardens are most productive and rewarding.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Aurangabad</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Aurangabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cidco, Osmanpura, Cantonment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East Aurangabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Waluj, Chikalthana, MIDC</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">AURIC / Shendra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">AURIC City, Shendra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jalna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jalna town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants need the least water in Aurangabad's dry Marathwada climate?", answer: "Bougainvillea, snake plant, ZZ plant, aloe vera, and jade plant are Aurangabad's most water-efficient choices. These plants thrive in the region's semi-arid conditions and actually perform better with less water than more. ZZ and snake plant can go 2–3 weeks without watering. Bougainvillea blooms most prolifically when water is restricted." },
      { question: "Is same-day plant delivery available in Aurangabad?", answer: "Yes. Same-day delivery is available across Aurangabad including Cidco, Osmanpura, Waluj MIDC, and Cantonment areas. Order before 3 PM. Midnight delivery is also available for central Aurangabad." },
      { question: "What plant makes a good Ganesh Chaturthi gift in Aurangabad?", answer: "Tulsi plant is the most sacred Ganesh Chaturthi gift for Maharashtra families. Chrysanthemum or marigold in a pot adds festive colour to the celebration. For a modern gifting option, a money plant or lucky bamboo in a ceramic planter is a popular choice across Aurangabad's growing middle class." },
      { question: "Which plants work for a corporate office in AURIC or MIDC Aurangabad?", answer: "Snake plant, ZZ plant, and areca palm are the best choices for Aurangabad's industrial and corporate offices. They tolerate AC environments, low-light corridors, and infrequent watering. Lucky bamboo on reception desks is a popular prosperity symbol. We supply bulk plant orders for AURIC and MIDC offices with advance scheduling." },
      { question: "When is the best time to plant bougainvillea in Aurangabad?", answer: "February through March is the ideal time to plant bougainvillea in Aurangabad. Place in full sun (6+ hours), use well-draining soil, and water sparingly. Marathwada's naturally dry climate suits bougainvillea perfectly — it blooms with maximum intensity when water-stressed. Within two growing seasons, it will cover a terrace wall magnificently." }
    ]
  },

  "bhopal": {
    cityName: "Bhopal",
    metaTitle: "Buy Plants Online in Bhopal | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Bhopal. Indoor plants, rose, mogra & gifting combos. Same-day delivery. Starting ₹299. City of Lakes gets fresh plant delivery.",
    h1: "Buy Plants Online in Bhopal — Same-Day Plant Delivery in the City of Lakes",
    metaKeyword: "plants online bhopal, buy plants bhopal, indoor plants bhopal, plant delivery bhopal madhya pradesh, rose plant bhopal, online nursery bhopal city of lakes",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bhopal — City of Lakes Grows a Greener Future</h2>

<p>Bhopal — Madhya Pradesh's capital and India's "City of Lakes" — is a city of surprising green beauty. The Upper Lake (Bada Talab) and Lower Lake (Chotta Talab) at the city's heart, the Van Vihar National Park where leopards roam just 3 km from the Legislative Assembly, and the Arera Hills and Shyamla Hills covered in dense forest — Bhopal has a natural backdrop that few Indian state capitals can match. The city's Nawabi heritage (the Bhopal Nawabs, particularly the Begums who ruled with great sophistication in the 19th century) also created an appreciation for refined garden aesthetics.</p>

<p>Bhopal's climate is central India humid subtropical: hot summers (42–44°C), a good monsoon (1,150 mm — one of Madhya Pradesh's wetter cities due to its elevated position), and cool winters (6–18°C). The lakeside location moderates temperature somewhat. The excellent monsoon and moderate winters make Bhopal a strong gardening city. RedHeart delivers across Bhopal, Sehore, Vidisha, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Bhopal Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter glory, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra (Jasmine)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrance, summer, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office, very low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Festival decoration, seasonal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, NIC and govt offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting, corporate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Bhopal's Natural Setting and Plant Culture</h3>

<p>Bhopal's lakes create a microclimate slightly cooler and more humid than inland Madhya Pradesh, which benefits plants considerably. The Upper Lake shore (Shyamla Hills, Bada Talab area) is particularly green, and the residential colonies here — Van Vihar Road, Shamla Hills, Gulmohar Colony — have some of the finest private gardens in the state. The city's significant Nawabi Muslim community maintains a tradition of garden culture; Bhopal's Mughal and Indo-Saracenic architecture often includes interior courtyards with water and plant features.</p>

<p>Bhopal's October–February window is excellent for roses, marigold, and seasonal plants. Plant roses in October, enjoy marigold through Diwali, and watch seasonal annuals bloom in the pleasant winter sun. The summer (April–June) is when indoor plants come into their own — snake plant, peace lily, and ZZ plant in AC rooms are the most popular summer plant purchases.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bhopal</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">New Bhopal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Arera Colony, Shahpura, Hoshangabad Rd</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Old Bhopal / Central</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chowk, Hamidia Road, TT Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North Bhopal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bairagarh, Karond, Berasia Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sehore / Vidisha</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sehore, Vidisha towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best near Bhopal's lakes?", answer: "Bhopal's lakeside areas (Shyamla Hills, VIP Road, Boat Club Road) have a slightly cooler, more humid microclimate that suits a wide range of plants. Peace lily, areca palm, anthurium, and money plant all thrive here. For outdoor gardens near the water, hibiscus, canna lily, and bougainvillea grow beautifully. The lake breeze is gentle enough not to damage most plants." },
      { question: "Is same-day plant delivery available in Bhopal?", answer: "Yes. Same-day delivery is available across Bhopal including Arera Colony, Shahpura, TT Nagar, Hamidia Road, and Bairagarh. Order before 3 PM. Midnight delivery is available for central and new Bhopal areas." },
      { question: "What plant is best for Diwali gifting in Bhopal?", answer: "Money plant in a terracotta pot with a Diwali message is the most popular Bhopal Diwali plant gift. Lucky bamboo (3 or 5 stalks) is widely popular. For government officers and senior gifting, an areca palm or peace lily in a ceramic planter is an appropriate, lasting choice. Tulsi in a decorated pot is a traditional and deeply meaningful alternative." },
      { question: "Which indoor plant handles Bhopal's hot summers well?", answer: "Snake plant and ZZ plant are the best indoor plants for Bhopal's 42–44°C May–June period. Both tolerate heat, dry air, and infrequent watering. Keep them away from hot afternoon windows. Areca palm stays healthy indoors in AC rooms year-round. Avoid overwatering during summer — Bhopal's dry heat means soil dries faster than you expect, but root rot from over-watering is still a risk." },
      { question: "When is the best gardening season in Bhopal?", answer: "October through February is Bhopal's prime gardening season. Plant roses in October, marigold and seasonal annuals in November, and enjoy peak blooms January through March. The good monsoon (1,150 mm) means soil is recharged by September, providing good growing conditions for outdoor planting. This October window is also ideal for establishing new shrubs and trees that will mature over the following year." }
    ]
  },

  "guwahati": {
    cityName: "Guwahati",
    metaTitle: "Buy Plants Online in Guwahati | Tropical & Exotic Plants | RedHeart",
    metaDescription: "Order plants online in Guwahati. Tropical plants, bamboo, orchids & gifting combos. Same-day delivery across Guwahati. Starting ₹299. Northeast India's gateway city gets plant delivery.",
    h1: "Buy Plants Online in Guwahati — Same-Day Plant Delivery in the Gateway to the Northeast",
    metaKeyword: "plants online guwahati, buy plants guwahati, indoor plants guwahati, plant delivery guwahati assam, tropical plants guwahati, bamboo plant guwahati, online nursery guwahati northeast india",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Guwahati — Brahmaputra City's Rich Botanical Heritage</h2>

<p>Guwahati — perched along the southern bank of the mighty Brahmaputra river with the Kamakhya Temple on the Nilachal Hill above — is the gateway to Northeast India's extraordinary biodiversity. Assam's forests are some of India's most biodiverse: Kaziranga National Park (one-horned rhino), Manas Tiger Reserve, and the tea gardens of the Brahmaputra valley are within a few hours of the city. This extraordinary natural context — the Brahmaputra's banks, the blue hills of Meghalaya on the horizon, the tea-scented air — gives Guwahati residents a particularly vivid relationship with plants. Northeast India's tribal and Assamese cultures also maintain rich traditions of plant use for food, medicine, and ceremony.</p>

<p>Guwahati's climate is tropical monsoon: warm and humid year-round (15–34°C), with one of India's heaviest monsoons (1,700 mm from May–September). The northeast monsoon arrives early and stays long, creating a lush, wet environment that is extraordinary for tropical plants. Orchids — particularly Cymbidium and Dendrobium — grow naturally in the surrounding hills and are cultivated in Guwahati homes more widely than almost anywhere else in India. RedHeart delivers across Guwahati, Dispur, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants That Thrive in Guwahati's Northeast Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Northeast Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Special Feature</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bamboo (Lucky Bamboo)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Northeast natural abundance, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Prosperity symbol</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Assamese home, trailing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fast-growing</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves NE humidity, blooms all year</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Long-blooming</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Grows vigorously in Guwahati</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement plant</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja, state connection</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily bloom</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, Dispur offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Humidity-loving</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, very low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hardy indoors</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Bihu, Durga Puja, and Assam's Plant Festivals</h3>

<p>Guwahati's cultural calendar centres on Bihu — Assam's three Bihu festivals (Rongali/Bohag Bihu in April, Bhogali/Magh Bihu in January, Kongali/Kati Bihu in October) are deeply tied to agricultural cycles. Bohag Bihu, the spring festival marking the Assamese New Year, is a time of renewal — new plants, fresh begins, and the hope of a good growing season. Potted plants, particularly flowering ones, are popular gifts during Bihu. Durga Puja (called Durga Puja, not just Navratri in Assam) is another major plant-and-flower occasion when homes and pandals are decorated with fresh plants and flowers.</p>

<p>The fox-tail orchid (Kopou Phool / Rhynchostylis retusa) is Assam's state flower — worn by Bihu dancers during Rongali Bihu. Orchid cultivation is more widespread in the Northeast than anywhere else in India, and Guwahati's enthusiastic gardening community maintains orchid collections that would impress most botanical gardens.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Guwahati</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Guwahati</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Paltan Bazaar, Fancy Bazaar, Uzan Bazaar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dispur / Ganeshguri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dispur, Ganeshguri, GS Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North Guwahati</td><td style="border:1px solid #d1d5db;padding:8px 12px;">North Guwahati, Jalukbari, Azara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Airport Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lokhra, Beltola, Khanapara</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Rongali Bihu gifting in Guwahati?", answer: "For Rongali Bihu (April, Assamese New Year), a flowering plant in full bloom is the most joyful gift. Anthurium, hibiscus, or a seasonal flowering plant in a ceramic pot is excellent. Money plant symbolises prosperity for the new year. Lucky bamboo is widely gifted in Guwahati's business community for Bihu and office occasions." },
      { question: "Is same-day plant delivery available in Guwahati?", answer: "Yes. Same-day delivery is available across Guwahati including Dispur, GS Road, Ganeshguri, Paltan Bazaar, and Khanapara. Order before 3 PM. Midnight delivery is also available for central Guwahati areas." },
      { question: "Which tropical plants grow best in Guwahati's heavy monsoon climate?", answer: "Anthurium, monstera, areca palm, peace lily, and money plant all thrive vigorously in Guwahati's warm, wet climate. The Northeast's natural humidity means these plants push out new leaves rapidly without any additional care. Ensure pots drain well during the heavy May–September monsoon — the only plant care challenge here is waterlogging, not drought." },
      { question: "Can I grow orchids at home in Guwahati?", answer: "Yes — Guwahati is one of India's best cities for home orchid cultivation. The Northeast's natural humidity, warm temperatures, and indirect light in forested residential areas closely match orchid growing requirements. Dendrobium and Phalaenopsis are the best entry-level orchids for Guwahati homes. Mount on bark or use a bark-and-perlite mix, water 2-3 times weekly, and provide bright indirect light." },
      { question: "Do you deliver plants to Dispur and North Guwahati?", answer: "Yes. Dispur (Assam's state capital area), Ganeshguri, GS Road, and North Guwahati are all within our delivery zone. Same-day delivery for Dispur and Ganeshguri is available for orders before 3 PM. We also serve Jalukbari, Azara, and the airport road area." }
    ]
  },

  "jodhpur": {
    cityName: "Jodhpur",
    metaTitle: "Buy Plants Online in Jodhpur | Desert Plants & Indoor Greens | RedHeart",
    metaDescription: "Order plants online in Jodhpur. Desert roses, succulents, bougainvillea & indoor plants. Same-day delivery. Starting ₹299. The Blue City gets drought-proof plant delivery.",
    h1: "Buy Plants Online in Jodhpur — Same-Day Plant Delivery in the Blue City",
    metaKeyword: "plants online jodhpur, buy plants jodhpur, indoor plants jodhpur, plant delivery jodhpur rajasthan, desert plants jodhpur, succulent jodhpur, online nursery jodhpur blue city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jodhpur — Rajasthan's Sun City Grows Green Against the Odds</h2>

<p>Jodhpur is one of Rajasthan's most dramatic cities — the medieval Mehrangarh Fort rising above a sea of blue-washed houses, the Umaid Bhawan Palace on the city's edge, the desert stretching southwest toward the Thar. The "Blue City" nickname comes from the indigo-painted houses of the Brahmin quarter below the fort — and that distinctive colour is as much a part of Jodhpur's identity as its food, its folk music, and its extraordinary resilience in one of India's harshest climates. Growing plants in Jodhpur requires choosing the right species — but the results can be spectacular, particularly for desert-adapted and drought-tolerant plants that thrive precisely in the conditions that defeat more delicate species.</p>

<p>Jodhpur's climate is arid to semi-arid: extreme hot summers (44–48°C in June), very low rainfall (370 mm, mostly in July–August), and warm dry winters (8–26°C). This is not a city for tropical plants outdoors — but it's an excellent city for cacti, succulents, bougainvillea, and desert rose, and all indoor plants do well in AC interiors. RedHeart delivers across Jodhpur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Jodhpur's Desert Climate</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desert native, medicinal, zero water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, handles extreme dryness</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Compound wall, blazes in Rajasthan sun</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, extremely drought-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very low</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jade Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, stores water, thrives in dry air</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, pooja, handles heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting (keep out of direct sun)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, water vase, Marwari gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Water-grown</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Desert Gardening Wisdom in Jodhpur</h3>

<p>Jodhpur's traditional homes — the havelis of the walled city — use internal courtyards (chowks) that create microclimates shielded from the blasting desert wind. In these courtyards, residents have cultivated tulsi, jasmine, and even small fruit trees for generations, taking advantage of the courtyard's shade and improved humidity. The courtyard strategy still works in Jodhpur's newer homes: any plants placed in partially shaded interior spaces benefit from the building's thermal mass and are protected from the desiccating Loo (hot summer wind).</p>

<p>Bougainvillea is Jodhpur's champion garden plant — the pink, purple, and orange bracts blazing against the blue-washed walls of the old city create postcard imagery that is inseparable from Jodhpur's identity. It needs almost no water, loves the desert sun, and blooms most prolifically in February through May when tourists fill the city. No other plant makes such a dramatic statement with such minimal care.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jodhpur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Jodhpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Clock Tower, Nai Sarak, Sardarpura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">New Jodhpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pratap Nagar, Shastri Nagar, Pal Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North Jodhpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chopasni Housing Board, Ratanada</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pali / Barmer</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pali, Barmer towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants survive Jodhpur's 48°C summer heat?", answer: "Aloe vera, snake plant, ZZ plant, bougainvillea, and jade plant are the best performers in Jodhpur's extreme summer. These plants are desert-adapted — they store water, tolerate desiccating heat, and thrive in full sun or indirect light. Keep indoor plants in AC rooms. Water outdoor plants deeply once a week rather than shallow daily watering — deep roots handle extreme heat better." },
      { question: "Is same-day plant delivery available in Jodhpur?", answer: "Yes. Same-day delivery is available across Jodhpur including Sardarpura, Pratap Nagar, Ratanada, and all major areas. Order before 3 PM. Midnight delivery is available for central Jodhpur areas." },
      { question: "Which plant is the best Diwali gift for a Marwari business family in Jodhpur?", answer: "Lucky bamboo (7 or 9 stalks) is the top Diwali plant gift for Jodhpur's Marwari business community — it symbolises prosperity and is extremely easy to grow in water, without soil. Jade plant (money tree) is a close second. Money plant in a terracotta or ceramic pot is an affordable, universally liked option. These plants thrive even in Jodhpur's dry indoor climate." },
      { question: "Why does bougainvillea grow so well in Jodhpur?", answer: "Bougainvillea is native to South America's semi-arid coastal regions — conditions very similar to Jodhpur's desert climate. It blooms most prolifically when water-stressed, loves full sun, and tolerates temperatures to 45°C. Against Jodhpur's blue-painted walls, orange and pink bougainvillea creates some of India's most iconic garden imagery. Plant in full sun, water once a week, and prune after each bloom cycle." },
      { question: "Can any tropical plants grow in Jodhpur?", answer: "Indoor tropical plants like money plant, peace lily, and snake plant grow perfectly in Jodhpur's air-conditioned interiors — they don't experience the outdoor climate at all. For semi-outdoor spaces (shaded courtyards, north-facing balconies), areca palm and philodendron can survive if protected from direct sun and dust storms. Avoid placing tropical plants in direct desert sun — they'll desiccate within hours during summer." }
    ]
  },

  "kanpur": {
    cityName: "Kanpur",
    metaTitle: "Buy Plants Online in Kanpur | Indoor & Seasonal Plants | RedHeart",
    metaDescription: "Order plants online in Kanpur. Rose, seasonal plants, indoor plants & gifting combos. Same-day delivery. Starting ₹299. UP's industrial capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Kanpur — Same-Day Plant Delivery Across UP's Leather City",
    metaKeyword: "plants online kanpur, buy plants kanpur, indoor plants kanpur, plant delivery kanpur uttar pradesh, rose plant kanpur, seasonal plants kanpur, online nursery kanpur",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kanpur — Uttar Pradesh's Industrial Heart Goes Green</h2>

<p>Kanpur is Uttar Pradesh's largest city and India's leather capital — the global hub for quality leather goods, textiles, and chemicals. The city sits on the Ganges river (called Ganga in Hindi), and the ghats along the river are sites of daily spiritual activity. Kanpur has a large, prosperous middle class produced by its industrial economy, and the city's residential areas — Civil Lines, Kakadeo, Swaroop Nagar — support a significant urban gardening culture. The Allen Career Institute (headquartered in Kota but with large presence in Kanpur) and the IIT Kanpur campus also contribute a large student and faculty population with growing interest in indoor plants and sustainable living.</p>

<p>Kanpur's climate is harsh North India: scorching summers (44–46°C), dense fog-bound winters (3–7°C minimum), and moderate monsoon (775 mm). October through February is the best gardening window — rose plants, marigold, chrysanthemum, and seasonal annuals bloom beautifully. Indoor plants are popular year-round, particularly for the summer months when outdoor gardening is impractical. RedHeart delivers across Kanpur, Unnao, Fatehpur, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Popular in Kanpur Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter bloom, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Apr</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, pooja, temples</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, air purifier, winter-hardy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, desk</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, industrial offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Kanpur's Plant Season and Industrial Culture</h3>

<p>Kanpur's October–February gardening season is when the city's residential gardens are most active. Civil Lines and Kakadeo — Kanpur's most upscale residential corridors — have large bungalows and farmhouse-style homes with garden spaces where roses, marigold, and dahlia are cultivated with expertise. The IIT Kanpur campus maintains impressive botanical gardens and green spaces; the institute's culture of thoughtful environmental stewardship influences the surrounding city.</p>

<p>The city's industrial identity — leather tanneries, textile mills, chemical plants — has historically created environmental pressures, but the new generation of Kanpur residents is increasingly conscious of indoor air quality and the role of plants in improving it. Peace lily, snake plant, and areca palm (all strong air purifiers) are growing in popularity specifically for their air-quality improving properties.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kanpur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Kanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines, Swaroop Nagar, Mall Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">South Kanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kakadeo, Kidwai Nagar, Kalyanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">IIT / Kalyanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">IIT Kanpur area, Panki, GT Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Unnao</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Unnao town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "When is the best time to plant roses in Kanpur?", answer: "October is the best time to plant roses in Kanpur. The cool October-to-March window is when Kanpur's roses bloom most prolifically. Water every 3 days, fertilise monthly with rose-specific fertiliser, and deadhead spent blooms to extend flowering. Prune to one-third of height in March, after the winter bloom season, to prepare for the next year." },
      { question: "Is same-day plant delivery available in Kakadeo and Civil Lines?", answer: "Yes. Same-day delivery is available across Kanpur including Civil Lines, Kakadeo, Swaroop Nagar, and Kidwai Nagar. Order before 3 PM. Midnight delivery is also available for central Kanpur. We deliver seven days a week." },
      { question: "Which indoor plant improves air quality in Kanpur homes?", answer: "Peace lily, snake plant, and areca palm are the strongest air purifiers for Kanpur homes. Peace lily filters benzene and formaldehyde; snake plant releases oxygen at night (useful in bedrooms); areca palm increases indoor humidity, which is beneficial in Kanpur's very dry winter months. Keeping 2-3 different species provides the broadest air quality improvement." },
      { question: "What plant makes a good gift for an IIT Kanpur faculty member?", answer: "A monstera or fiddle leaf fig in a modern planter is appreciated by IIT faculty who tend to follow contemporary design aesthetics. A lucky bamboo tower or peace lily is safer for a more formal gift. For a unique and thoughtful gift, a rare succulent collection or a herb garden kit (basil, mint, coriander) is popular among Kanpur's scientific community." },
      { question: "Which plants survive Kanpur's dense winter fog?", answer: "Snake plant, ZZ plant, and peace lily are the best indoor plants during Kanpur's December–January fog when indoor light levels drop significantly. All three tolerate low light conditions without issue. Outdoor plants are dormant or slow-growing during the fog season; avoid overwatering during this period as cold soil drains slowly." }
    ]
  },

  "patna": {
    cityName: "Patna",
    metaTitle: "Buy Plants Online in Patna | Indoor & Flowering Plants | RedHeart",
    metaDescription: "Order plants online in Patna. Tulsi, rose, indoor plants & gifting combos. Same-day delivery across Patna. Starting ₹299. Bihar's capital city gets fresh plant delivery.",
    h1: "Buy Plants Online in Patna — Same-Day Plant Delivery in Bihar's Capital",
    metaKeyword: "plants online patna, buy plants patna, indoor plants patna, plant delivery patna bihar, rose plant patna, tulsi plant patna, online nursery patna",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Patna — Ancient Pataliputra's Capital Embraces Modern Greens</h2>

<p>Patna is one of the world's oldest continuously inhabited cities — founded as Pataliputra, it was the capital of the Maurya and Gupta empires, the seat of Chandragupta Maurya and Ashoka the Great. The city sits on the southern bank of the Ganges river at a point where the river is nearly 4 km wide — one of the most majestic river views in India. Today's Patna is Bihar's rapidly modernising capital: the Metro rail construction, new flyovers, the AIIMS Patna hospital, and a growing IT and services sector are transforming the city's landscape. With that transformation comes a growing urban middle class increasingly interested in home improvement, interior design, and indoor plants.</p>

<p>Patna's climate is eastern India humid subtropical: hot summers (40–43°C), a heavy monsoon (1,100 mm from June–September), and foggy, cold winters (4–10°C in January). October through February is the prime gardening season — rose, marigold, chrysanthemum, and seasonal flowers bloom well in the pleasant cool dry air. RedHeart delivers across Patna, Danapur, Hajipur, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Popular in Patna Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Bihari home, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, Chhath gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Puja, Chhath, winter festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, every family</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, government offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja, Surya puja (Chhath)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Chhath Puja and Patna's Plant Culture</h3>

<p>Chhath Puja is Bihar's greatest and most distinctive festival — a four-day worship of the Sun god (Surya) and his sister Chhathi Maiya, performed at sunrise and sunset by the Ganga's banks. Patna's Ganga ghats during Chhath are one of India's most moving sights: millions of devotees standing in the river water, offering arghya (water offerings) to the rising and setting sun, with the river turning golden in the dawn and dusk light. Plants and flowers are central to Chhath rituals — particularly marigold and lotus. Growing your own marigold in pots is deeply meaningful during this festival; the flowers are offered to the Sun god.</p>

<p>Tulsi (holy basil) occupies the most sacred position in Patna's Hindu homes — the tulsi maadam (tulsi planting pedestal) in the courtyard is where daily puja is performed, where women light lamps every evening, and where prayers are offered during every significant life event. A tulsi plant is the most heartfelt plant gift for a Patna family.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Patna</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Patna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Boring Road, Rajendra Nagar, Fraser Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East Patna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kankarbagh, Patna City, Gulzarbagh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">West Patna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Danapur, Phulwari, Bailey Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hajipur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hajipur town, Vaishali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for Chhath Puja in Patna?", answer: "Marigold (gainda) is the most important plant for Chhath Puja — its flowers are offered to the Sun god during the sunset and sunrise arghya rituals. A marigold plant in full bloom is the most meaningful Chhath gift. Tulsi plant is sacred for daily puja in Bihari homes. Hibiscus, whose red flowers are offered to Devi, is also significant during Chhath's broader ritual period." },
      { question: "Is same-day plant delivery available in Boring Road and Kankarbagh?", answer: "Yes. Same-day delivery is available across Patna including Boring Road, Kankarbagh, Rajendra Nagar, Fraser Road, and Danapur. Order before 3 PM. Midnight delivery is also available for central Patna areas." },
      { question: "Which plants survive Patna's monsoon floods?", answer: "Patna's July–September monsoon is heavy (1,100 mm) and the Ganga river floods regularly. For indoor plants, ensure they're elevated if ground-floor flooding is a risk. Outdoor pots should have clear drainage holes and be placed on raised platforms. Snake plant and ZZ plant are the most water-tolerant indoor plants for Bihar's monsoon conditions." },
      { question: "Which indoor plant is best for Patna's government offices?", answer: "Peace lily and areca palm are the most popular choices for Patna's many government and administrative offices. They look professional, require minimal maintenance, and improve air quality in AC offices. Snake plant and ZZ plant are ideal for spaces where care is minimal. Lucky bamboo on reception desks is a widely accepted gift across Bihar's government sector." },
      { question: "When is the best time to buy marigold plants in Patna?", answer: "September through October is the best time to plant marigold in Patna — just before Diwali and Chhath Puja. Plants bought in September bloom through November, covering the major festivals. Marigold needs full sun (5+ hours), regular watering, and light fortnightly fertilising. Pinch off spent flowers to encourage continuous blooming through the winter festival season." }
    ]
  },

  "varanasi": {
    cityName: "Varanasi",
    metaTitle: "Buy Plants Online in Varanasi | Sacred & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Varanasi (Kashi). Tulsi, rose, marigold & indoor plants. Same-day delivery. Starting ₹299. The spiritual capital of India gets fresh plant delivery.",
    h1: "Buy Plants Online in Varanasi — Same-Day Plant Delivery in the Eternal City of Kashi",
    metaKeyword: "plants online varanasi, buy plants varanasi, indoor plants varanasi, plant delivery varanasi uttar pradesh, tulsi plant varanasi kashi, marigold varanasi, online nursery varanasi banaras",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Varanasi — Kashi's Sacred Gardens in Your Home</h2>

<p>Varanasi — Kashi to its devotees — is India's oldest continuously inhabited city, Hinduism's holiest pilgrimage destination, and one of the world's most profound spiritual places. The Ganges ghats at dawn, the Ganga Aarti at Dashashwamedh Ghat, the narrow winding lanes of the old city with their ancient temples, the fragrance of marigold and sandalwood incense in the air — Varanasi is an experience unlike any other in the world. Plants — particularly tulsi, marigold, lotus, and bel (wood apple) leaves — are inseparable from Varanasi's spiritual life. The city's temples are garlanded with fresh flowers daily; no puja begins without the gathering of sacred plant materials.</p>

<p>Varanasi's climate is North India humid subtropical: hot summers (42–45°C), a good monsoon (1,030 mm), and cool foggy winters (6–12°C). October through February is the best gardening season. The Ganga's presence moderates the climate slightly, and the dense urban fabric of the old city creates microclimates in shaded lanes and temple courtyards where plants thrive. RedHeart delivers across Varanasi, Mirzapur, Ghazipur, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sacred and Decorative Plants for Varanasi Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Spiritual / Cultural Role</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Deity Association</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Holy Basil)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Most sacred plant in Hinduism</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vishnu / Krishna</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold (Gainda)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple garlands, Ganga Aarti</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All deities</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mogra)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple fragrance, hair garlands</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple offerings, winter garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Universal</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lakshmi</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, air purifier, very low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">–</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, BHU offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">–</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, modern Varanasi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">–</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">The Sacred Plant Tradition of Kashi</h3>

<p>Varanasi's plant culture cannot be separated from its spiritual life. Tulsi is grown in every Hindu home — not as decor but as a living deity. The daily ritual of watering tulsi, lighting a clay lamp beside it at sunset, and offering prayers is called tulsi puja and is practiced across generations without interruption. In Varanasi, with its 84 ghats and thousands of temples, this tradition is perhaps more intact than anywhere else in India. Gifting someone a tulsi plant in Varanasi is one of the most meaningful things you can do — it's an invitation to daily spiritual practice.</p>

<p>Marigold (gainda) is the flower of Varanasi's ghats — marigold garlands are offered at every Shiva linga, marigold petals float on the Ganga during the evening Aarti, and marigold plants fill the lanes leading to the ghats during festivals. Growing your own marigold in Varanasi connects you to this millennia-old offering tradition. The Dev Deepawali festival (on Kartik Purnima, 15 days after Diwali) is when all 84 ghats are lit with earthen lamps — it is the most beautiful night in Varanasi, and marigold and flower decoration reaches its annual peak.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Varanasi</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Varanasi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Godaulia, Lanka, Sigra, Mahmoorganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">BHU / South</td><td style="border:1px solid #d1d5db;padding:8px 12px;">BHU campus, Assi Ghat, Sunderpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North Varanasi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cantonment, Sarnath, Kamachha</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mirzapur / Ghazipur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mirzapur, Ghazipur towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which sacred plant is most important for a Varanasi home?", answer: "Tulsi (Ocimum tenuiflorum) is the most sacred plant in any Hindu home in Varanasi — it's considered a living manifestation of Goddess Lakshmi and is worshipped daily. Place it in the courtyard or east-facing balcony in full morning sun, water daily, and light a lamp beside it every evening. No other plant carries as much spiritual significance in Kashi." },
      { question: "Is same-day plant delivery available in Varanasi?", answer: "Yes. Same-day delivery is available across Varanasi including Lanka, Godaulia, BHU area, Sigra, Assi Ghat, and Cantonment. Order before 3 PM. Midnight delivery is also available for central Varanasi. We deliver seven days a week including Dev Deepawali, Mahashivratri, and Navaratri." },
      { question: "What plant is best for gifting during Dev Deepawali in Varanasi?", answer: "For Dev Deepawali — Varanasi's most spectacular festival — marigold is the most appropriate plant gift. Marigold plants in full bloom can be placed along the verandah with earthen lamps for a stunning domestic display that echoes the ghats. Tulsi in a beautifully decorated clay pot is the most meaningful personal gift for a Varanasi devotee." },
      { question: "Which plants are used for Kashi Vishwanath temple offerings?", answer: "Bel (Aegle marmelos) leaves are Shiva's most sacred offering — a bel tree plant is a meaningful addition to a Varanasi garden. Marigold and dhatura (though poisonous and not recommended for growing near children) are traditionally offered to Shiva. Tulsi is offered to Vishnu but not Shiva. Rose petals are accepted at virtually all temples and are easy to grow at home." },
      { question: "Which indoor plant is best for a Banaras Hindu University (BHU) hostel room?", answer: "Money plant and snake plant are the best choices for BHU hostel rooms — both tolerate low light, infrequent watering, and survive the hostel lifestyle. Money plant trailing across a window or bookshelf looks great in small spaces. Lucky bamboo in a small vase on the study desk is low-maintenance and auspicious. ZZ plant handles the harsh hostel conditions with near-zero care." }
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
