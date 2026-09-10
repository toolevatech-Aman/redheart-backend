// Plants Tier 2 Batch 1 — 8 cities
// Prayagraj, Ludhiana, Vijayawada, Madurai, Jamshedpur, Jabalpur, Dehradun, Faridabad

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "prayagraj": {
    cityName: "Prayagraj",
    metaTitle: "Buy Plants Online in Prayagraj | Sacred & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Prayagraj (Allahabad). Tulsi, marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Sangam city gets fresh plant delivery.",
    h1: "Buy Plants Online in Prayagraj — Same-Day Plant Delivery in the City of Sangam",
    metaKeyword: "plants online prayagraj, buy plants prayagraj allahabad, indoor plants prayagraj, plant delivery prayagraj UP, tulsi prayagraj, marigold prayagraj, online nursery prayagraj",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Prayagraj — Where Three Rivers Meet, Greens Come Home</h2>

<p>Prayagraj — the ancient Prayag, renamed in 2018 — is one of Hinduism's holiest cities, located at the Triveni Sangam where the Ganga, Yamuna, and the mythical Saraswati rivers converge. The Kumbh Mela held here every 12 years (Maha Kumbh) and every 6 years (Ardh Kumbh) is the world's largest human gathering, drawing tens of millions of pilgrims to the river banks. The city is also Uttar Pradesh's judicial capital (Allahabad High Court, one of India's oldest), a major educational hub (University of Allahabad, IIT Prayagraj, Motilal Nehru National Institute of Technology), and the birthplace of India's first three Prime Ministers — Nehru, Lal Bahadur Shastri, and Indira Gandhi.</p>

<p>Prayagraj's climate matches the North India pattern: extreme summers (44–46°C), a good monsoon (1,000 mm), and foggy cold winters (4–8°C in January). The October–February gardening window is when rose, marigold, and seasonal flowers bloom beautifully. Indoor plants are valued year-round for the summer and winter periods when outdoor gardening is difficult. RedHeart delivers across Prayagraj, Kaushambi, Pratapgarh, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Prayagraj Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred courtyard plant, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Puja, Kumbh season, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, air purifier, winter-hardy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, university offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, legal offices, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrance, summer, temple use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Sep</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Kumbh Mela, Spirituality, and Plants in Prayagraj</h3>

<p>Prayagraj's identity is woven from the Ganga, the Triveni Sangam, and millennia of pilgrimage. Plants here carry an elevated spiritual significance — tulsi (holy basil) is not merely a garden plant but a living deity, grown in every courtyard and worshipped twice daily with water, incense, and a lamp. Marigold garlands are offered at the ghats in continuous streams. During the Kumbh and Ardh Kumbh, the entire city transforms: millions of temporary dwellings, sacred fires, and enormous quantities of flowers and sacred plants are part of the great ritual of the mela. Growing your own marigold, tulsi, and rose connects Prayagraj residents to this ongoing spiritual tradition in a daily, tangible way.</p>

<p>The city's large educated class — lawyers practicing at the Allahabad High Court (one of India's most distinguished), professors at University of Allahabad and IIT Prayagraj, and government officers in the Civil Lines area — also drives demand for indoor plants, particularly for home offices and residential spaces in the leafy Civil Lines neighbourhood.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Prayagraj</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines / Central</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines, George Town, Lukerganj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Old Prayagraj</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Chowk, Atala, Sangam area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Naini / South</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Naini, Phaphamau, Jhunsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kaushambi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kaushambi town, Bharwari</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which sacred plants are most important for a Prayagraj home?", answer: "Tulsi (holy basil) is the most essential plant for any Hindu home in Prayagraj — it's grown in the courtyard and worshipped daily. Marigold (gainda) is offered at the ghats and during puja. For the Kumbh Mela period, marigold and sacred flower plants are in peak demand. Lotus (padma) is the most sacred river offering but is grown in water pots at home." },
      { question: "Is same-day plant delivery available in Prayagraj?", answer: "Yes. Same-day delivery is available across Prayagraj including Civil Lines, George Town, Chowk, Atala, and Naini. Order before 3 PM. Midnight delivery is also available for central Prayagraj. We deliver during the Kumbh Mela period too — book in advance for peak mela days." },
      { question: "When is the best time to plant roses in Prayagraj?", answer: "October is the best time to plant roses in Prayagraj. The cool October-to-March window allows excellent blooming — peak display is December through February. Water every 3–4 days, fertilise monthly, and prune after each flush. Prayagraj's Civil Lines neighbourhood, with its bungalow-style homes, has some of UP's finest rose gardens." },
      { question: "What plant is good for gifting to an advocate at Allahabad High Court?", answer: "A peace lily or areca palm in a ceramic planter is an appropriate and sophisticated gift for senior legal professionals at the Allahabad High Court. Lucky bamboo in a premium arrangement is also popular. For a more personal gift, a rose plant in a terracotta pot with a handwritten card is elegant and lasting." },
      { question: "Which plants survive Prayagraj's cold foggy January?", answer: "Snake plant and ZZ plant handle Prayagraj's 4–8°C January nights and fog-reduced light very well. Keep them in heated indoor rooms, away from cold draughty windows. Money plant and peace lily need indoor warmth during the coldest weeks. Outdoor plants are dormant in January — do not overwater cold soil." }
    ]
  },

  "ludhiana": {
    cityName: "Ludhiana",
    metaTitle: "Buy Plants Online in Ludhiana | Indoor & Seasonal Plants | RedHeart",
    metaDescription: "Order plants online in Ludhiana. Rose, marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Punjab's industrial capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Ludhiana — Same-Day Plant Delivery in Punjab's Largest City",
    metaKeyword: "plants online ludhiana, buy plants ludhiana, indoor plants ludhiana, plant delivery ludhiana punjab, rose plant ludhiana, online nursery ludhiana",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ludhiana — Manchester of India Goes Green</h2>

<p>Ludhiana is Punjab's largest city and India's hosiery and cycle manufacturing capital — the "Manchester of India" for its textile industry. The city's prosperous Punjabi business community, large NRI connections (Ludhiana's diaspora spans Canada, UK, and USA), and strong agricultural roots create a population that values quality of life, festive celebrations, and increasingly, premium home décor including plants. The city's Guru Nanak Dev Engineering College, Punjab Agricultural University (PAU), and many schools and colleges make it a significant educational centre in the region.</p>

<p>Ludhiana's climate is North India: very hot summers (42–44°C), moderate monsoon (750 mm), and cold winters (2–6°C in January). The October–March window is Ludhiana's gardening prime time — rose, marigold, and winter annuals bloom beautifully in the pleasant cool air. Lohri (January 13) and Baisakhi (April 13) are the major festivals driving plant and flower demand in Ludhiana. RedHeart delivers across Ludhiana, Khanna, Moga, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants in Ludhiana</h3>

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
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lohri, Diwali, wedding décor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Business gifting, Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, textile offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, showroom lobbies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Compound, summer colour</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mar–Jun</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Punjab's Wedding Season and Plant Gifting</h3>

<p>Ludhiana's Punjabi culture is vivid, celebratory, and generous. The wedding season (October–February and May–June) drives significant plant and flower demand — rose plants, marigold pots, and areca palms are popular for wedding lawns and home decoration. Lohri bonfires in January are celebrated with great enthusiasm; marigold and seasonal flowers are part of the festive decoration. Baisakhi (April 13) marks the Punjabi harvest festival — new plants for the garden are traditional Baisakhi purchases.</p>

<p>The city's NRI connections mean that returned Punjabis from Canada and the UK often bring home-décor sensibilities that include indoor plants — monstera, fiddle leaf fig, and snake plant have growing popularity in Ludhiana's upscale Model Town and Sarabha Nagar neighbourhoods. Punjab Agricultural University (PAU), based in nearby Ludhiana, also produces expert horticulturalists whose knowledge permeates local gardening culture.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ludhiana</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Ludhiana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Model Town, Sarabha Nagar, Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East Ludhiana</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dugri, Pakhowal Road, BRS Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Industrial / West</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Focal Point, Sherpur, GT Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Khanna / Moga</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Khanna, Moga towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for a Lohri or Diwali gift in Ludhiana?", answer: "Marigold plants in full bloom are the most festive Lohri and Diwali choice for Ludhiana — they complement the bonfire decoration and are traditional to both festivals. For a lasting Diwali gift, a money plant or lucky bamboo in a ceramic pot is popular across Ludhiana's business community. Areca palm makes an impressive premium Diwali gift for corporate or senior occasions." },
      { question: "Is same-day plant delivery available in Model Town and Sarabha Nagar?", answer: "Yes. Same-day delivery is available across Model Town, Sarabha Nagar, Civil Lines, Dugri, and all major Ludhiana areas. Order before 3 PM. Midnight delivery is also available for central Ludhiana." },
      { question: "Which plants grow best in Ludhiana's cold winters?", answer: "Outdoors, rose and marigold bloom beautifully in Ludhiana's cool October–March winter. Indoor plants — snake plant, ZZ plant, and peace lily — handle the cold if kept in heated rooms above 12°C. Keep tropical plants away from drafty single-pane windows on January nights when temperatures drop to 2–4°C." },
      { question: "Which plant is best for a Punjabi wedding lawn decoration in Ludhiana?", answer: "Areca palm in large decorative pots is the standard for Ludhiana's wedding lawn décor — it's elegant, tropical-looking, and creates an instant garden atmosphere. Marigold plants in terracotta pots add a traditional Punjabi touch. For a more contemporary wedding, monstera or bird of paradise in concrete planters makes a stunning statement." },
      { question: "Do you deliver plants to Khanna and Moga from Ludhiana?", answer: "Yes. Khanna and Moga are within our Ludhiana delivery zone. Delivery takes 4–6 hours. Same-day delivery for these towns is available for orders placed before noon. Khanna's grain market community has growing demand for auspicious gifting plants — money plant and lucky bamboo are popular." }
    ]
  },

  "vijayawada": {
    cityName: "Vijayawada",
    metaTitle: "Buy Plants Online in Vijayawada | Tropical & Krishna River Plants | RedHeart",
    metaDescription: "Order plants online in Vijayawada. Tropical plants, jasmine, indoor greens & gifting combos. Same-day delivery. Starting ₹299. Andhra Pradesh's commercial capital gets plant delivery.",
    h1: "Buy Plants Online in Vijayawada — Same-Day Plant Delivery on the Banks of Krishna",
    metaKeyword: "plants online vijayawada, buy plants vijayawada, indoor plants vijayawada, plant delivery vijayawada andhra pradesh, jasmine vijayawada, online nursery vijayawada",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Vijayawada — Andhra's Bustling River City Gets Doorstep Greens</h2>

<p>Vijayawada — the commercial capital of Andhra Pradesh — sits dramatically at the point where the Krishna river breaches the Eastern Ghats through a narrow gorge, flanked by granite hills with the famous Kanaka Durga Temple atop Indrakeeladri Hill. The city is Andhra's largest and most economically significant: home to major trading, real estate, and political activity, with the Amaravati state capital development just 40 km away amplifying investment and growth. The Prakasam Barrage and the fertile Krishna delta make Vijayawada a gateway to Andhra's rice bowl, and the city has a prosperous, educated Telugu middle class with strong cultural traditions.</p>

<p>Vijayawada's climate is hot and humid: scorching summers (42–44°C, sometimes among AP's hottest), a variable northeast monsoon (1,000 mm), and warm winters (18–28°C). The proximity to the sea moderates winters pleasantly. Tropical plants thrive in Vijayawada's warmth and post-monsoon humidity. RedHeart delivers across Vijayawada, Guntur, Machilipatnam, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Vijayawada Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Telugu Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malle)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily hair garlands, temple use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily pooja, every Telugu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, handles heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, Devi worship</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, corporate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, real estate offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Business gifting, Ugadi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Vijayawada's Festivals and Plant Traditions</h3>

<p>Vijayawada's Kanaka Durga Temple atop Indrakeeladri Hill draws millions of devotees during Dasara and Navaratri — the nine-day festival is one of Andhra Pradesh's most important. Hibiscus (chembaruthi) flowers are offered to Devi daily; many families grow their own hibiscus to provide daily offerings to the goddess. Jasmine (malle) is worn in hair garlands by Telugu women daily — a deeply rooted cultural tradition that makes jasmine plants one of Vijayawada's most consistently purchased plants. Ugadi (Telugu New Year in March–April) is when new plants are bought to refresh the home with green and auspicious energy.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Vijayawada</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Vijayawada</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Benz Circle, MG Road, Suryaraopet</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Vijayawada East</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Patamata, Tadepalli, Krishna Lanka</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Guntur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Guntur city, Brodipet, Arundelpet</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Machilipatnam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Machilipatnam town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is best for Dasara gifting in Vijayawada?", answer: "Hibiscus (for Devi worship) and a potted chrysanthemum in full bloom are the most festive Dasara plant gifts in Vijayawada. Tulsi plant in a decorated pot is sacred for any Telugu Hindu occasion. For a modern gift, a peace lily or money plant in a ceramic planter with a Dasara card is thoughtful and lasting." },
      { question: "Is same-day plant delivery available in Vijayawada?", answer: "Yes. Same-day delivery is available across Vijayawada including Benz Circle, MG Road, Patamata, Tadepalli, and Suryaraopet. Order before 3 PM. We also deliver to Guntur with same-day service. Midnight delivery is available for central Vijayawada." },
      { question: "Which plants handle Vijayawada's extreme summer heat?", answer: "Snake plant, ZZ plant, aloe vera, and bougainvillea handle Vijayawada's 42–44°C summers. Keep indoor plants in AC rooms during peak summer; outdoor plants need morning-sun positioning and twice-daily deep watering. Jasmine survives Vijayawada's summer well if watered generously." },
      { question: "Can I grow jasmine at home in Vijayawada for daily garlands?", answer: "Yes — jasmine grows vigorously in Vijayawada's warm, sunny climate. Plant in full sun with good drainage, water daily, and fertilise monthly. It blooms from March through October, providing fresh flowers for daily hair garlands and temple offerings. In Vijayawada's climate, a well-maintained jasmine bush produces flowers almost daily during the warm season." },
      { question: "Do you deliver plants to Guntur?", answer: "Yes. Guntur is within our Vijayawada delivery zone. Delivery takes 3–5 hours. Guntur's large Kamma and Reddy community has strong demand for jasmine, tulsi, and marigold plants for daily puja use. Corporate gifting in Guntur's trading and chilli market economy also drives demand for indoor plant arrangements." }
    ]
  },

  "madurai": {
    cityName: "Madurai",
    metaTitle: "Buy Plants Online in Madurai | Jasmine & Tropical Plants | RedHeart",
    metaDescription: "Order plants online in Madurai. Jasmine, tulsi, tropical plants & gifting combos. Same-day delivery. Starting ₹299. Temple city of Tamil Nadu gets doorstep plant delivery.",
    h1: "Buy Plants Online in Madurai — Same-Day Plant Delivery in the Temple City",
    metaKeyword: "plants online madurai, buy plants madurai, indoor plants madurai, plant delivery madurai tamil nadu, jasmine madurai, tulsi madurai, online nursery madurai temple city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Madurai — City of the Meenakshi Temple Gets Doorstep Greens</h2>

<p>Madurai — one of South India's oldest continuously inhabited cities — is defined by the Meenakshi Amman Temple, whose towering gopurams are visible from across the city and whose corridors are among Hinduism's most extraordinary sacred spaces. The city's Tamil identity is ancient and deeply rooted: Madurai hosted the Sangam literary academies, Thiruvalluvar's Tirukkural was written here, and the Tamil language's classical tradition flows directly from this city. Madurai's economy is driven by commerce (it's South Tamil Nadu's largest trading city), textiles (madurai sungudi cotton), and a growing IT sector around Sholavandan and the southern suburbs.</p>

<p>Madurai's climate is hot and semi-arid Tamil Nadu: very hot summers (38–42°C), a moderate northeast monsoon (860 mm from October–December), and warm winters (20–28°C). Jasmine — particularly the world-famous Madurai Malli (Jasminum sambac) — is grown and traded here more than anywhere else in India, making it an inseparable part of the city's identity. RedHeart delivers across Madurai, Dindigul, and surrounding districts with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Sacred and Beloved in Madurai</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Madurai Significance</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Blooms</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Madurai Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">World-famous GI-tagged jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Year-round</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Thulasi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Temple & home worship, sacred</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus (Chembaruthi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, daily offering</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, handles Madurai heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, corporate offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, textile offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">The Madurai Malli — World's Most Famous Jasmine</h3>

<p>The Madurai Malli (Jasminum sambac) is one of India's most celebrated GI-tagged products. Grown in the belt around Madurai — Thekkur, Usilampatti, Melur — the Madurai jasmine is distinguished by its exceptionally long-lasting fragrance, large buds, and the flower's ability to remain fresh for up to 18 hours after picking (longer than other jasmine varieties). Every morning, fresh Madurai malli appears in the Mattuthavani flower market — tonnes of it, sold in bundles tied with banana fibre — and women across Tamil Nadu, Sri Lanka, and the Tamil diaspora worldwide wear it in their hair.</p>

<p>Growing your own malli at home in Madurai is deeply satisfying. The plant needs full morning sun (5+ hours), well-draining soil, weekly deep watering, and monthly fertilising. In Madurai's warm climate it blooms almost year-round, providing daily flowers for hair garlands, temple offerings, and home fragrance. A jasmine plant is the most meaningful gift you can give to a Madurai family.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Madurai</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Madurai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Anna Nagar, KK Nagar, Ellis Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">South Madurai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tallakulam, Pasumalai, Thirumangalam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North Madurai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Melur Road, Kochadai, Alagarkovil Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dindigul</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dindigul town, Batlagundu</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Where can I buy Madurai Malli (jasmine) plants online?", answer: "RedHeart delivers Madurai Malli (Jasminum sambac) plants across Madurai. Plant in full morning sun, water deeply once a week, and fertilise monthly during summer. In Madurai's warm climate, a well-established malli bush flowers almost daily, providing fragrant blooms for hair garlands and temple offerings all year round." },
      { question: "Is same-day plant delivery available in Madurai?", answer: "Yes. Same-day delivery is available across Madurai including Anna Nagar, KK Nagar, Ellis Nagar, Tallakulam, and Thirumangalam. Order before 3 PM. Midnight delivery is also available for central Madurai areas." },
      { question: "Which plant is best for Meenakshi Temple festival gifting?", answer: "For festivals at Meenakshi Temple, tulsi (offered to Vishnu) and hibiscus (offered to Devi Meenakshi) are the most sacred plant gifts. A jasmine plant is the most culturally resonant gift for any Madurai Tamil family — it connects directly to the city's identity. For a modern alternative, a money plant or peace lily in a ceramic planter is well received." },
      { question: "Which plants handle Madurai's intense summer heat?", answer: "Snake plant, ZZ plant, aloe vera, and jasmine all handle Madurai's 38–42°C summers. Keep indoor plants in shaded, cool positions during peak afternoon heat. Jasmine is surprisingly heat-tolerant if watered generously. Avoid placing tender tropicals like peace lily or anthurium in direct Madurai summer sun." },
      { question: "What plant is best for a Pongal gift in Madurai?", answer: "For Pongal (January) in Madurai, a marigold or chrysanthemum plant in full bloom is the most festive choice. Tulsi in a beautifully decorated maadam is the most traditional. For a corporate Pongal gift, a peace lily or areca palm in a premium planter is elegant. Lucky bamboo is popular across Madurai's textile and trading business community." }
    ]
  },

  "jamshedpur": {
    cityName: "Jamshedpur",
    metaTitle: "Buy Plants Online in Jamshedpur | Indoor & Steel City Plants | RedHeart",
    metaDescription: "Order plants online in Jamshedpur. Indoor plants, tropical greens & gifting combos. Same-day delivery. Starting ₹299. Tata's Steel City gets doorstep plant delivery.",
    h1: "Buy Plants Online in Jamshedpur — Same-Day Plant Delivery in Tata's Model City",
    metaKeyword: "plants online jamshedpur, buy plants jamshedpur, indoor plants jamshedpur, plant delivery jamshedpur jharkhand, monstera jamshedpur, online nursery jamshedpur steel city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jamshedpur — Steel City, Green Soul</h2>

<p>Jamshedpur is India's most famous company town — built by Jamshetji Nusserwanji Tata and Tata Steel around its massive integrated steel plant, the city is a remarkable achievement of planned urban development. The Jubilee Park, Dimna Lake, Dalma Wildlife Sanctuary on the city's edge, the clean and wide roads, the Tata Workers' Union's model labour relations — Jamshedpur is consistently ranked as one of India's most liveable cities. The Tata influence runs deep: it's not just the steel plant but TCS, Tata Motors, and dozens of Tata Group companies that make Jamshedpur a city of steady employment, relative prosperity, and high quality of life.</p>

<p>Jamshedpur's climate benefits from its Jharkhand location at 130 metres elevation: summers reach 40–42°C (hot but not extreme), monsoon is excellent (1,350 mm), and winters are pleasantly cool (8–18°C). The good rainfall and moderate temperatures make it an excellent city for plants. RedHeart delivers across Jamshedpur, Seraikela-Kharsawan, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Jamshedpur Homes and Offices</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement indoor, Tata exec homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Tata offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, steel plant workers</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate offices, Jubilee Park homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Hindu home, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, thrives in Jamshedpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, TCS offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Jamshedpur's Green City Heritage and Plant Culture</h3>

<p>Jamshedpur was planned from the ground up with green spaces in mind — Tata Steel's early town planners allocated parks, gardens, and tree-lined boulevards that make the city unusually leafy for an industrial centre of its size. Jubilee Park — a 225-acre public garden with a rose garden, a deer park, a musical fountain, and walking paths — is the city's green heart and one of Jharkhand's finest public parks. This green city heritage creates a population that values gardens and plants unusually highly.</p>

<p>The Tata Steel colony (Agrico, Telco Colony, Burmamines) houses thousands of Tata employees with well-maintained quarters and garden traditions. The mixed cultural population of Jamshedpur — Bengali, Bihari, Odia, tribal, and Parsi (the original Tata management class) — creates diverse plant preferences. Tulsi and marigold for Hindu households, rose for the Bengali community, and indoor plants for the professional and management class are all in consistent demand.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jamshedpur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Jamshedpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bistupur, Sakchi, Telco</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Agrico / Burmamines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Agrico, Burmamines, Jugsalai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Adityapur / Gamharia</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Adityapur, Gamharia, Boram</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Seraikela</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Seraikela, Kharsawan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for a Tata executive's home in Jamshedpur?", answer: "Monstera, peace lily, areca palm, and fiddle leaf fig are popular in Jamshedpur's executive homes in Bistupur and the Tata colony quarters. These plants suit the planned, spacious home layouts with good natural light. Anthurium is popular for gifting among corporate professionals — it's elegant and long-blooming." },
      { question: "Is same-day plant delivery available in Jamshedpur?", answer: "Yes. Same-day delivery is available across Jamshedpur including Bistupur, Sakchi, Agrico, Burmamines, and Telco Colony. Order before 3 PM. Midnight delivery is available for central Jamshedpur. We deliver to Adityapur industrial estate regularly." },
      { question: "Which plants thrive near Jamshedpur's Dalma Hills forest?", answer: "Jamshedpur's proximity to Dalma Wildlife Sanctuary means the eastern edges of the city receive cooler, more humid air in the evenings. In these areas, monstera, peace lily, and anthurium grow particularly well. The good 1,350 mm rainfall benefits all plants — indoor plants during monsoon need minimal watering." },
      { question: "What plant is the best gift for Durga Puja in Jamshedpur?", answer: "Jamshedpur's large Bengali community celebrates Durga Puja with great enthusiasm. A shiuli (night jasmine) plant is the most evocative Bengali autumn plant gift. Marigold and chrysanthemum in pots add to the festive decoration. Tulsi in a decorated pot and anthurium in a ceramic planter are popular gifting options across the city's diverse population." },
      { question: "Which indoor plant is best for Tata Steel's corporate offices?", answer: "Peace lily, areca palm, and ZZ plant are the standard for Tata Steel's corporate offices in Jamshedpur — they look professional, are easy to maintain, and survive the AC environment. Snake plant handles offices with irregular care. We supply bulk plant orders for corporate offices with advance scheduling." }
    ]
  },

  "jabalpur": {
    cityName: "Jabalpur",
    metaTitle: "Buy Plants Online in Jabalpur | Indoor & Marble Rock Plants | RedHeart",
    metaDescription: "Order plants online in Jabalpur. Rose, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Marble city of Madhya Pradesh gets doorstep plant delivery.",
    h1: "Buy Plants Online in Jabalpur — Same-Day Plant Delivery in the Marble City",
    metaKeyword: "plants online jabalpur, buy plants jabalpur, indoor plants jabalpur, plant delivery jabalpur madhya pradesh, rose plant jabalpur, online nursery jabalpur marble city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Jabalpur — Gateway to the Marble Rocks Gets Doorstep Greens</h2>

<p>Jabalpur is Madhya Pradesh's third-largest city and home to one of India's most spectacular natural sites: the Marble Rocks at Bhedaghat, where the Narmada river cuts through a gorge of dazzling white marble cliffs in a 3-km stretch that is particularly otherworldly in moonlight. The city is also known as the "Rifle City" for its famous Ordnance Factory (Gun Carriage Factory, founded 1904), and has a large cantonment area, a High Court of Madhya Pradesh, and several universities including Rani Durgavati Vishwavidyalaya. Jabalpur's cultural mix of Bundelkhandi, Hindi-speaking, and military communities makes it a distinctive central Indian city.</p>

<p>Jabalpur's climate is central India humid subtropical: hot summers (42–44°C), a very good monsoon (1,400 mm — one of MP's wettest cities due to Narmada valley topography), and cool winters (6–14°C). The excellent monsoon makes Jabalpur an excellent plant city — soil stays rich and well-watered, and the Narmada valley's ambient humidity supports tropical plants better than drier MP cities. RedHeart delivers across Jabalpur, Katni, Narsinghpur, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Jabalpur Homes</h3>

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
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Hindu home, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Festivals, Diwali, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, HC and military offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, legal gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrance, summer, puja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Jabalpur's Natural Setting and Plant Culture</h3>

<p>Jabalpur's location on the Narmada river — one of India's holiest rivers — and the proximity to the marble gorge at Bhedaghat creates a population with deep connections to natural beauty. The city's cantonment area (one of India's oldest and most spacious) has bungalow gardens with mature rose, jasmine, and seasonal flower plantings maintained by Ordnance Factory families for generations. The Rani Durgavati Museum's gardens and the various university campuses maintain green spaces that inspire local gardening culture.</p>

<p>The October–February window is Jabalpur's prime gardening season — rose plants bloom spectacularly in the cool Narmada valley air, marigold fills festival grounds and pooja rooms, and chrysanthemum is grown widely for seasonal display. The excellent monsoon recharges the soil reliably, making Jabalpur's garden conditions genuinely excellent compared to drier central Indian cities.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Jabalpur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Jabalpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Civil Lines, Napier Town, Sadar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Cantonment / South</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cantonment, Vijay Nagar, Wright Town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Adhartal / North</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Adhartal, Gorakhpur, Damoh Naka</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Katni</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Katni town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Jabalpur's climate?", answer: "Rose, marigold, tulsi, mogra, money plant, and snake plant all do well in Jabalpur. The city's excellent 1,400 mm monsoon recharges soil richly, and the cool October–February window is perfect for roses and seasonal flowers. Indoor plants like snake plant, peace lily, and ZZ plant thrive year-round." },
      { question: "Is same-day plant delivery available in Jabalpur?", answer: "Yes. Same-day delivery is available across Jabalpur including Civil Lines, Napier Town, Cantonment, Vijay Nagar, and Wright Town. Order before 3 PM. Midnight delivery is also available for central Jabalpur." },
      { question: "What plant is best for gifting at the Jabalpur High Court?", answer: "Peace lily in a ceramic planter is the most appropriate gift for senior legal professionals at the MP High Court in Jabalpur — elegant, low-maintenance, and a long-lasting green presence in an office. Lucky bamboo is a popular desk gift. For a housewarming or senior official gift, an areca palm makes a premium impression." },
      { question: "When is the best time to plant roses in Jabalpur?", answer: "October is ideal for planting roses in Jabalpur. The city's cool October–February period allows excellent root establishment and blooming. Water every 3 days, fertilise monthly, and deadhead spent blooms. The Narmada valley's cool evening air in January–February makes this one of central India's finest rose-growing windows." },
      { question: "Do you deliver plants near Bhedaghat, Jabalpur?", answer: "Yes. Bhedaghat and surrounding areas are accessible from our Jabalpur delivery network. Delivery takes 3–5 hours. We serve all major residential areas in and around Jabalpur including the cantonment belt and university areas." }
    ]
  },

  "dehradun": {
    cityName: "Dehradun",
    metaTitle: "Buy Plants Online in Dehradun | Hill Plants & Indoor Greens | RedHeart",
    metaDescription: "Order plants online in Dehradun. Rose, ferns, indoor plants & gifting combos. Delivery across Dehradun. Starting ₹299. Uttarakhand's capital city gets fresh plant delivery.",
    h1: "Buy Plants Online in Dehradun — Plant Delivery in the Doon Valley",
    metaKeyword: "plants online dehradun, buy plants dehradun, indoor plants dehradun, plant delivery dehradun uttarakhand, hill plants dehradun, rose plant dehradun, online nursery dehradun doon valley",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Dehradun — Doon Valley's Garden City Gets Doorstep Greens</h2>

<p>Dehradun — the capital of Uttarakhand, nestled in the Doon Valley between the Himalayan foothills and the Shivalik range — is one of India's most celebrated hill cities. The Survey of India, the Indian Military Academy, the Forest Research Institute (FRI) with its magnificent colonial-era campus, ISRO, Wadia Institute of Himalayan Geology, and elite residential schools (Doon School, Welham Girls', etc.) give Dehradun an intellectual and institutional density rare for a city its size. The city's fresh mountain air, moderate climate, access to the Rajaji National Park, and quick proximity to Mussoorie make it a highly desirable residential city that attracts retirees, remote workers, and aspirational families from across India.</p>

<p>Dehradun's climate is subtropical highland: pleasantly warm summers (max 38°C), cool winters (4–12°C in January), and a good monsoon (2,100 mm — among India's higher rainfall cities). This excellent climate supports a very wide range of plants, including alpine varieties that struggle in hotter plains cities. Rose, fern, chrysanthemum, bougainvillea, and tropical indoor plants all thrive here. RedHeart delivers across Dehradun, Rishikesh, and Haridwar with service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Dehradun's Mountain Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It Thrives in Doon</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Cool mountain air, FRI rose garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–May</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor statement, cool humid rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, school and IMA offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, handles cool winters</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, summer blazing colour</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–Jul</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, every Doon home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Chrysanthemum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, Doon winter cool</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sep–Jan</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">The Forest Research Institute and Dehradun's Garden Heritage</h3>

<p>The Forest Research Institute (FRI) campus in Dehradun — a magnificent 1929 Greco-Roman building set in 450 acres of forests, gardens, and research plots — is one of India's most beautiful institutional campuses. Its rose garden, botanical plots, and tree collections are a living testament to Dehradun's deep connection with plants and forest science. This scientific plant culture permeates the city: Dehradun has a higher concentration of botanists, forestry experts, and plant scientists per capita than almost any Indian city, and their knowledge filters into local nurseries and gardening culture.</p>

<p>Dehradun's residents are enthusiastic gardeners. The pleasant climate, good rainfall, and genuine cool winters create ideal rose-growing conditions that plains cities cannot match. Rose growing in Dehradun can be done year-round with peak blooming from November through May. The city's Rajpur Road belt and MDDA Colony areas have excellent home gardens maintained by the large retired bureaucrat and military officer community.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Dehradun</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Dehradun</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajpur Road, Clock Tower, Paltan Bazaar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East / ISBT area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">ISBT, Prem Nagar, Niranjanpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rishikesh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rishikesh town, Haridwar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mussoorie area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dehradun–Mussoorie Road, Landour</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">On request</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Dehradun's mountain climate?", answer: "Rose, bougainvillea, chrysanthemum, monstera, peace lily, and snake plant all thrive in Dehradun's pleasant 4–38°C range. The excellent 2,100 mm monsoon means outdoor plants establish easily. Cool winter nights (4–12°C) are ideal for rose and chrysanthemum; tropical indoor plants need to be in heated rooms during January's coldest nights." },
      { question: "Is plant delivery available in Dehradun?", answer: "Yes. Delivery is available across Dehradun including Rajpur Road, Paltan Bazaar, ISBT area, Prem Nagar, and Niranjanpur. Order before 3 PM for same-day delivery. We also deliver to Rishikesh and Haridwar. Mussoorie deliveries are on-request — contact us in advance." },
      { question: "Which plants are best for Rishikesh yoga retreats and ashrams?", answer: "Tulsi is sacred in Rishikesh's Vaishnava and Shaivite ashrams — no ashram is complete without it. Peace lily is calming and air-purifying, ideal for meditation spaces. Snake plant and money plant are low-care options for retreat centres where horticulture isn't the primary focus. Bamboo plants create a serene, natural atmosphere in yoga studios." },
      { question: "When is the best season to plant roses in Dehradun?", answer: "October is the ideal planting time in Dehradun. The cool October–May window is actually far longer than most plains cities, meaning Dehradun residents can enjoy roses blooming for 7+ months. November through April is peak bloom season. Water every 2–3 days in summer, less in winter, and fertilise monthly during the growing season." },
      { question: "Do you deliver plants to Haridwar and Rishikesh?", answer: "Yes. Haridwar and Rishikesh are within our delivery network from Dehradun. Delivery takes 3–5 hours. Tulsi plants, marigold, and sacred flower plants are in consistent demand from Haridwar and Rishikesh's temple and ashram communities. Advance orders for bulk temple or retreat deliveries are accommodated." }
    ]
  },

  "faridabad": {
    cityName: "Faridabad",
    metaTitle: "Buy Plants Online in Faridabad | Indoor & NCR Plants | RedHeart",
    metaDescription: "Order plants online in Faridabad. Indoor plants, seasonal flowers & gifting combos. Same-day delivery. Starting ₹299. Haryana's industrial city gets fresh plant delivery.",
    h1: "Buy Plants Online in Faridabad — Same-Day Plant Delivery Across NCR's Industrial Hub",
    metaKeyword: "plants online faridabad, buy plants faridabad, indoor plants faridabad, plant delivery faridabad haryana, money plant faridabad, online nursery faridabad NCR",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Faridabad — Haryana's Largest City Goes Green</h2>

<p>Faridabad is Haryana's largest city and one of India's major industrial centres — part of the National Capital Region (NCR), it neighbours Delhi's southern edge and Gurugram (Gurgaon) to the west. The city is one of India's largest manufacturing hubs: automobile components, tyres, glass, textiles, and engineering goods are produced here at massive scale. Despite its industrial identity, Faridabad has significant green spaces — the Aravallis touch its western boundary, the Surajkund Arts and Crafts Mela (held in the forested Aravalli hills nearby) attracts thousands annually, and the Badkhal Lake area provides natural respite from the urban density. The city's large working-class and middle-class population increasingly invests in home improvement and quality of life.</p>

<p>Faridabad's climate follows Delhi's: hot summers (42–45°C), moderate monsoon (650 mm), and cold, foggy winters (3–7°C in January). October through February is the gardening prime time; indoor plants are popular year-round. RedHeart delivers across Faridabad, Ballabhgarh, Palwal, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Faridabad Homes and Offices</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Air purifier, indoor, handles NCR extremes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, VOC filter, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Hindu home, courtyard</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, factory offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, desk plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, very low care, NCR winters</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Indoor Air Quality and Plants in Faridabad</h3>

<p>Faridabad's industrial base, proximity to Delhi, and winter smog make indoor air quality a genuine concern. Peace lily, snake plant, and areca palm are the most effective indoor air purifiers — all three filter a range of industrial VOCs and airborne particulates that accumulate in sealed indoor spaces during Faridabad's poor-AQI winter months (November–January). Growing 3–5 air-purifying plants in a 500 sq ft apartment measurably improves indoor air quality according to NASA research — a compelling reason for Faridabad residents to invest in indoor plants beyond aesthetics.</p>

<p>The city's large auto manufacturing workforce in sectors like NIT Faridabad, NHPC Colony, and the industrial estates of Sector 20–25 has growing middle-class aspiration. Diwali is the major plant gifting occasion here — money plant and lucky bamboo combos are the most popular options in Faridabad's festive marketplace.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Faridabad</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">NIT Faridabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NIT, Sector 15, Sector 21</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Old Faridabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Old Faridabad, Tilpat, Surajkund Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ballabhgarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ballabhgarh, Sector 65, 66</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Palwal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Palwal town, Hodal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which indoor plants improve air quality in Faridabad's smoggy winters?", answer: "Peace lily, snake plant, and areca palm are the most effective air purifiers for Faridabad homes during the November–January smog season. Peace lily filters benzene, toluene, and formaldehyde. Snake plant releases oxygen at night. Areca palm humidifies dry winter indoor air. Having 3–5 of these plants in a living room makes a measurable difference to indoor air quality." },
      { question: "Is same-day plant delivery available in Faridabad?", answer: "Yes. Same-day delivery is available across Faridabad including NIT, Sector 15, 21, Old Faridabad, and Ballabhgarh. Order before 3 PM. Midnight delivery is also available for central Faridabad and NIT area." },
      { question: "What plant makes the best Diwali gift in Faridabad?", answer: "Money plant in a terracotta pot with a Diwali message card is the most popular Faridabad Diwali plant gift. Lucky bamboo (3 or 5 stalks) is widely given for corporate Diwali in Faridabad's industrial sector. A tulsi plant in a decorated pot is the most traditional, meaningful choice for a Hindu family. Areca palm is a premium Diwali option for senior gifting." },
      { question: "Which plants handle Faridabad's cold foggy January nights?", answer: "Snake plant, ZZ plant, and peace lily handle Faridabad's 3–7°C January nights well when kept in heated indoor spaces. Avoid placing plants near cold single-pane windows or external walls. Money plant needs temperatures above 10°C — keep it in the warmest room. Outdoor plants are mostly dormant in January; don't overwater cold, slow-draining soil." },
      { question: "Do you deliver plants to the Surajkund area and Badkhal?", answer: "Yes. Surajkund Road and Badkhal area are within our Faridabad delivery zone. Delivery takes 2–4 hours for these areas. During the Surajkund International Crafts Mela (held in February), plant and flower demand in the surrounding area increases significantly — place orders early during the mela period." }
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
