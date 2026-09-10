// Plants Tier 1 Batch 5 — 7 cities
// Hubballi-Dharwad, Kota, Meerut, Raipur, Ranchi, Srinagar, Tiruchirappalli

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "hubballi-dharwad": {
    cityName: "Hubballi-Dharwad",
    metaTitle: "Buy Plants Online in Hubballi-Dharwad | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Hubballi-Dharwad. Indoor plants, rose, bougainvillea & gifting combos. Same-day delivery. Starting ₹299. Twin city gets fresh plant delivery.",
    h1: "Buy Plants Online in Hubballi-Dharwad — Same-Day Plant Delivery Across the Twin City",
    metaKeyword: "plants online hubballi dharwad, buy plants hubli dharwad, indoor plants hubballi, plant delivery hubli dharwad karnataka, bougainvillea hubli, online nursery hubballi dharwad",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Hubballi-Dharwad — North Karnataka's Twin City Gets Doorstep Greens</h2>

<p>Hubballi-Dharwad is North Karnataka's largest urban agglomeration — two cities that have grown together while retaining distinct characters. Dharwad is the cultural and educational heart: home to Karnataka University, the Karnataka College, and the birthplace of Hindustani classical music legends like Mallikarjun Mansur and Gangubai Hangal. Hubballi is the commercial engine: a major railway junction, the headquarters of Karnataka Bank, and a growing industrial and logistics hub. Together, the twin city is one of Karnataka's most significant urban centres, with a large, educated Kannada-speaking population and a strong local identity.</p>

<p>Hubballi-Dharwad sits at around 680 metres elevation in North Karnataka's semi-arid Deccan plateau. Summers reach 38–40°C, monsoon (June–September) delivers 750 mm, and winters are pleasantly cool (12–26°C). The climate suits bougainvillea, rose, and drought-tolerant plants very well. RedHeart delivers across Hubballi, Dharwad, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Hubballi-Dharwad Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best For</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, compound, semi-arid conditions</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Kannada Hindu home, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, low water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, KU offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, commercial offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Hubballi-Dharwad's Garden Season and Culture</h3>

<p>The twin city's October–February window is ideal for outdoor gardening. Bougainvillea is the standout plant for North Karnataka's semi-arid climate — it blazes with colour in the dry pre-monsoon heat and asks for almost nothing in return. Rose plants bloom beautifully in Hubballi-Dharwad's mild winters, particularly in the residential areas of Dharwad with their older bungalows and garden spaces. Dasara (Vijayadashami) is the major festival when flowering plants and marigold are used extensively for home decoration. Ugadi (Kannada New Year) in March–April marks the beginning of spring and is a popular time for new plant purchases.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Hubballi-Dharwad</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Hubballi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vidyanagar, Keshwapur, Gokul Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dharwad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">PB Road, KU campus, Sadashivnagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">BEML / Navanagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navanagar, BEML area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Gadag / Haveri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gadag, Haveri towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Hubballi-Dharwad's semi-arid climate?", answer: "Bougainvillea, rose, snake plant, aloe vera, hibiscus, and tulsi all grow well in Hubballi-Dharwad's climate. Bougainvillea is especially suited — it thrives in North Karnataka's dry, sunny conditions. Indoor plants like ZZ plant and snake plant handle the dry air of Hubballi-Dharwad homes well with minimal watering." },
      { question: "Is same-day plant delivery available across Hubballi and Dharwad?", answer: "Yes. Same-day delivery is available across both Hubballi (Vidyanagar, Keshwapur, Gokul Road) and Dharwad (PB Road, KU campus, Sadashivnagar). Order before 3 PM. Midnight delivery is available for central areas of both cities." },
      { question: "What plant is a good Ugadi gift in Hubballi-Dharwad?", answer: "For Ugadi (Kannada New Year in March–April), a marigold plant or a flowering hibiscus in a pot is a festive choice. Tulsi in a decorated clay pot is the most sacred and meaningful gift for Kannada Hindu families. A money plant or lucky bamboo is a modern, auspicious Ugadi gift for a Hubballi business colleague." },
      { question: "Which plant is best for Dasara gifting in Hubballi-Dharwad?", answer: "Dasara (Vijayadashami) in Karnataka is celebrated with great enthusiasm. Chrysanthemum (shevanti) in full bloom is a popular Dasara plant gift. For a lasting gift, a bougainvillea sapling that will bloom spectacularly next season, or a rose plant that will flower through the winter, are excellent choices." },
      { question: "Do you deliver plants to Gadag and Haveri from Hubballi?", answer: "Yes. Gadag and Haveri are within our delivery zone from Hubballi-Dharwad. Delivery takes 4–6 hours. Same-day delivery is available for orders placed before noon for these towns. Both have growing demand for indoor and gifting plants from their professional and business communities." }
    ]
  },

  "kota": {
    cityName: "Kota",
    metaTitle: "Buy Plants Online in Kota | Indoor & Study-Friendly Plants | RedHeart",
    metaDescription: "Order plants online in Kota. Indoor plants, succulents, desk plants & gifting combos. Same-day delivery. Starting ₹299. Coaching capital gets student-friendly plant delivery.",
    h1: "Buy Plants Online in Kota — Same-Day Plant Delivery in Rajasthan's Coaching Capital",
    metaKeyword: "plants online kota, buy plants kota, indoor plants kota, plant delivery kota rajasthan, desk plant kota coaching, succulent kota, online nursery kota study plants",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kota — India's Coaching Capital Goes Green</h2>

<p>Kota is one of India's most unique cities — the coaching capital of the world, where 200,000+ students from across India descend every year to prepare for JEE and NEET competitive examinations at institutes like Allen, Resonance, Bansal, and FIITJEE. Kota's economy, culture, and urban fabric are shaped entirely by this student population. The city on the Chambal river also has a significant industrial base — Kota Thermal Power Station, JK Cement, and DC Mills — and a large permanent resident population with its own traditions and needs. The Kota Barrage, the Chambal gardens, and the historic Kota Fort and palaces of the Maharajas of Kota give the city more beauty than its coaching-city reputation suggests.</p>

<p>Kota's climate is Rajasthan semi-arid: hot summers (44–46°C), moderate monsoon (760 mm from the Chambal basin), and cool to cold winters (6–10°C in January). Indoor plants are ideal for Kota's student population — succulents, snake plants, and money plants are the top three desk plants in hostel rooms. Parents sending children to Kota often gift a small plant to help the student de-stress. RedHeart delivers across Kota, Bundi, and Jhalawar with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Kota Students and Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Kota Loves It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hostel rooms, study desk, zero care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Minimal</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Succulents</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk décor, compact, forget-proof</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Minimal</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Exam luck symbolism, trailing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low light, office and PG rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Minimal</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Resident families, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Exam luck gift, desk plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medicinal, desert-hardy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Home gifting, coaching office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Kota's Student Community</h3>

<p>Kota's enormous student population has unique plant needs. Students living in hostels, PG accommodations, and paying guest homes need compact, forgiving plants that don't need daily care — they're studying 12–14 hours a day and can't maintain a garden. Snake plant is the undisputed champion for Kota's hostel rooms: it releases oxygen at night (useful for study rooms), tolerates complete neglect, survives on weekly or even fortnightly watering, and fits neatly on a study shelf or windowsill. Succulents in small pots add a touch of nature to a stressful study environment without demanding anything in return.</p>

<p>Research consistently shows that plants in study spaces reduce stress and improve concentration — particularly meaningful in Kota's high-pressure JEE/NEET preparation environment. Parents sending care packages to their children in Kota are increasingly including a small plant as a stress-relief gift. Money plant is popular for the folk belief that it brings luck — popular among students before major examinations.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kota</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Coaching Zone</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vigyan Nagar, Talwandi, Indira Vihar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Old City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kota City, Gumanpura, Nayapura</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Industrial Area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">RIICO, Rangpur, Aerodrome Circle</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bundi / Jhalawar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bundi, Jhalawar towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is best for a JEE/NEET student's hostel room in Kota?", answer: "Snake plant is Kota's #1 study plant — it releases oxygen at night (improving sleep and focus), needs watering only every 2 weeks, and fits on any study shelf. Succulents are the easiest choice for students with zero gardening experience. Money plant trailing across a windowsill adds greenery with minimal care. All three are available for same-day hostel delivery in Kota." },
      { question: "Is same-day plant delivery available to PG accommodations in Vigyan Nagar?", answer: "Yes. Same-day delivery is available to hostels, PGs, and homes in Vigyan Nagar, Talwandi, and Indira Vihar (Kota's major coaching zones). Order before 3 PM. We regularly deliver to student accommodations across Kota's coaching belt." },
      { question: "What plant can parents send as a care package to their child in Kota?", answer: "A money plant in a small ceramic pot with a handwritten motivational message card is the most popular 'care package plant' in Kota — it's compact, low-care, symbolises good fortune, and adds a touch of home to a hostel room. A succulent trio in a wooden box makes a lovely stress-relief gift. Snake plant is ideal for students who forget to water." },
      { question: "Do plants reduce exam stress for students in Kota?", answer: "Yes — multiple studies confirm that indoor plants reduce cortisol (stress hormone) levels and improve focus in study environments. Even a single small plant on a study desk creates a measurable psychological benefit. For Kota's high-pressure JEE/NEET preparation environment, plants are a low-cost, proven wellness tool. Snake plant, peace lily, and pothos are the best-documented stress-reducers." },
      { question: "Which plants handle Kota's extreme summer heat for outdoor spaces?", answer: "Bougainvillea, aloe vera, jade plant, and snake plant handle Kota's 44–46°C summers outdoors or on semi-shaded terraces. Keep ZZ plant and money plant in AC indoor spaces during peak summer. Outdoor pots should be in morning-sun positions, shaded from 11 AM–4 PM, and watered twice daily in June." }
    ]
  },

  "meerut": {
    cityName: "Meerut",
    metaTitle: "Buy Plants Online in Meerut | Rose & Indoor Plants | RedHeart",
    metaDescription: "Order plants online in Meerut. Rose, marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Sports city of India gets fresh plant delivery.",
    h1: "Buy Plants Online in Meerut — Same-Day Plant Delivery in the Sports City of India",
    metaKeyword: "plants online meerut, buy plants meerut, indoor plants meerut, plant delivery meerut uttar pradesh, rose plant meerut, marigold meerut, online nursery meerut",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Meerut — City of Sports and Sweets Gets Doorstep Greens</h2>

<p>Meerut is one of Uttar Pradesh's largest and most historically significant cities — it was the flashpoint of India's 1857 First War of Independence. Today it is better known as India's "Sports City" — the majority of India's cricket bats, hockey sticks, and sports equipment are manufactured here. Meerut is also famous for its sweets (particularly the revdi and gajak confections) and its large educated middle class produced by the city's many universities and colleges. The city's proximity to Delhi (just 70 km) and its own growing economy have produced a significant aspirational residential population interested in quality of life, home improvement, and indoor plants.</p>

<p>Meerut's climate is West UP: extreme summers (44–46°C), a moderate monsoon (870 mm), and very cold winters (2–8°C in January with dense fog). October through February is the prime gardening window — rose, marigold, and seasonal flowers all do well. Indoor plants are popular year-round. RedHeart delivers across Meerut, Hapur, Baghpat, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Popular in Meerut Homes</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Apr</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Festivals, Diwali, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every home, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, handles cold and heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrance, summer, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mar–Sep</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, sports industry offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Meerut's Gardening Season</h3>

<p>Meerut has two clear plant seasons. October through February is the outdoor gardening prime time — with Diwali, Chhath, and the winter festivals driving demand for marigold and flowering plants, and the cool, clear weather making rose cultivation a delight. Plant roses in October, marigold in September–October, and enjoy peak blooms through February. March through June requires moving outdoor plants to partial shade and doubling watering frequency as temperatures climb. Indoor plants year-round are the backbone of Meerut's urban plant culture — money plant, snake plant, and peace lily are found in most middle-class homes.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Meerut</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Meerut</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shastri Nagar, Civil Lines, Begum Bridge</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pallavpuram / Ganga Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pallavpuram, Ganga Nagar, Partapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur Road / East</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hapur Road, Garh Road, Modi Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Baghpat / Hapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Baghpat, Hapur towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Is same-day plant delivery available in Meerut?", answer: "Yes. Same-day delivery is available across Meerut including Shastri Nagar, Civil Lines, Pallavpuram, Ganga Nagar, and Partapur. Order before 3 PM. Midnight delivery is also available for central Meerut areas. We deliver seven days a week." },
      { question: "When is the best time to plant roses in Meerut?", answer: "October is ideal for planting roses in Meerut — the cooling post-monsoon weather allows roots to establish before peak bloom season (December–March). Water every 3 days, fertilise monthly, and deadhead spent flowers. Meerut's roses are best in January–February when the city's foggy mornings add an ethereal quality to the blooms." },
      { question: "Which plants are best for gifting during Diwali in Meerut?", answer: "Money plant in a terracotta pot with a Diwali card is Meerut's most popular plant gift. Marigold plants in bloom are festive and traditional. Lucky bamboo (3 or 5 stalks) is popular for corporate Diwali gifting in Meerut's sports equipment businesses. A tulsi plant in a decorated clay pot is the most meaningful traditional Diwali gift." },
      { question: "Which indoor plant is best for Meerut's sports equipment factory offices?", answer: "Snake plant and ZZ plant are the most practical for Meerut's manufacturing offices — extremely low care, handle AC environments well, and tolerate the dust and irregular watering that factory offices often involve. Areca palm in a reception area looks professional and impressive without demanding specialist care." },
      { question: "Which plants survive Meerut's dense winter fog?", answer: "Indoor plants handle Meerut's December–January dense fog well when kept inside. Snake plant, ZZ plant, and peace lily tolerate the significantly reduced natural light during Meerut's fog season (sometimes 3–5 days of zero sun visibility). Outdoor plants are mostly dormant during this period — avoid overwatering, as cold soil drains very slowly." }
    ]
  },

  "raipur": {
    cityName: "Raipur",
    metaTitle: "Buy Plants Online in Raipur | Indoor & Tropical Plants | RedHeart",
    metaDescription: "Order plants online in Raipur. Indoor plants, tropical foliage & gifting combos. Same-day delivery across Raipur. Starting ₹299. Chhattisgarh's capital gets doorstep plant delivery.",
    h1: "Buy Plants Online in Raipur — Same-Day Plant Delivery in Chhattisgarh's Capital",
    metaKeyword: "plants online raipur, buy plants raipur, indoor plants raipur, plant delivery raipur chhattisgarh, tropical plants raipur, online nursery raipur",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Raipur — Rice Bowl of India's Capital Grows Greener</h2>

<p>Raipur is the capital of Chhattisgarh — a state carved from Madhya Pradesh in 2000 and defined by its extraordinary natural wealth: 44% forest cover, the Mahanadi and Sheonath rivers, the tribal communities of Bastar, and one of India's largest steel production hubs at Bhilai (just 25 km away). Raipur itself is a rapidly modernising city, with a growing IT sector, the Raipur Smart City project transforming infrastructure, and the Swami Vivekananda Airport expanded to international status. The city's residents — a mix of Chhattisgarhi, Marathi, Odia, and Bengali communities — maintain strong traditions while embracing modern urban living.</p>

<p>Raipur's climate is central India humid subtropical: hot summers (42–45°C), an excellent monsoon (1,300 mm — one of central India's wetter cities), and warm winters (10–28°C). The good monsoon and warm winters make Raipur excellent for a wide range of tropical and indoor plants. RedHeart delivers across Raipur, Bhilai, Durg, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Raipur's Warm, Wet Climate</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, thrives in humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, low light, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, humid climate suits it</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, Bhilai steel offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, government offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Raipur's Plant Culture and the Monsoon Advantage</h3>

<p>Raipur's 1,300 mm monsoon is a significant advantage for outdoor gardeners — the soil is recharged well, and the October–February post-monsoon period sees excellent plant growth. Chhattisgarh's tribal communities have centuries-old traditions of medicinal plant cultivation; aloe vera, tulsi, and neem are found in practically every traditional household. The city's growing professional class — in government, IT, and Bhilai Steel Plant's large employee community — is rapidly adopting indoor plant culture, particularly for gifting occasions.</p>

<p>Hariyali Teej, Dussehra (with its distinctive Raipur celebration), Diwali, and Chhattisgarhi New Year are major plant gifting occasions. The Raipur municipal corporation has invested significantly in green infrastructure across the Smart City project, adding to the city's overall plant-positive atmosphere.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Raipur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Raipur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shankar Nagar, Pandri, Telibandha</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">New Raipur (Naya Raipur)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Naya Raipur, Mantralaya area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhilai / Durg</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhilai, Durg town, Supela</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajnandgaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Rajnandgaon town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best for Raipur's warm, humid climate?", answer: "Money plant, peace lily, anthurium, areca palm, and hibiscus all grow vigorously in Raipur's warm, monsoon-rich climate. These tropical plants love Raipur's natural warmth and the good post-monsoon humidity. Water moderately during monsoon — the ambient humidity reduces indoor plant watering needs significantly." },
      { question: "Is same-day plant delivery available in Raipur?", answer: "Yes. Same-day delivery is available across Raipur including Shankar Nagar, Pandri, Telibandha, and Naya Raipur. Order before 3 PM. Midnight delivery is also available for central Raipur. We deliver to Bhilai and Durg regularly." },
      { question: "What plant is a good Diwali gift in Raipur?", answer: "Money plant in a terracotta or ceramic pot is the most popular Diwali plant gift in Raipur. Lucky bamboo (3 or 5 stalks) is popular in the city's government sector. Tulsi in a decorated pot is the most traditional and meaningful choice for a Chhattisgarhi Hindu family. Anthurium in a premium planter is a modern, lasting Diwali gift." },
      { question: "Do you deliver plants to Bhilai Steel Plant area?", answer: "Yes. Bhilai and Durg are within our Raipur delivery zone. Delivery takes 3–5 hours. Bhilai's large employee colony has significant corporate and residential plant demand. We regularly deliver areca palms and indoor plant collections to Bhilai Nagar and the BSP township." },
      { question: "Which indoor plant is best for a Raipur government office?", answer: "Peace lily and areca palm are the most popular in Raipur's government offices — they look professional, are easy to maintain with minimal care, and are long-lived. Snake plant handles irregular watering in offices where care can be inconsistent. Lucky bamboo in a water vase is a favourite for individual government official desks." }
    ]
  },

  "ranchi": {
    cityName: "Ranchi",
    metaTitle: "Buy Plants Online in Ranchi | Tropical & Hill Plants | RedHeart",
    metaDescription: "Order plants online in Ranchi. Tropical plants, indoor greens & gifting combos. Same-day delivery. Starting ₹299. Jharkhand's capital gets doorstep plant delivery.",
    h1: "Buy Plants Online in Ranchi — Same-Day Plant Delivery in the City of Waterfalls",
    metaKeyword: "plants online ranchi, buy plants ranchi, indoor plants ranchi, plant delivery ranchi jharkhand, tropical plants ranchi, online nursery ranchi city of waterfalls",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Ranchi — Jharkhand's Green Capital Gets Doorstep Greens</h2>

<p>Ranchi is one of India's most naturally beautiful state capitals — situated at 651 metres elevation on the Chota Nagpur Plateau, surrounded by forests, waterfalls (Hundru Falls, Jonha Falls, Dassam Falls), and tribal communities with millennia-old connections to the forest ecosystem. The city is the capital of Jharkhand — a state created in 2000 from Bihar's mineral-rich southern districts — and has a large professional population from across India drawn by the state government, Jharkhand High Court, XLRI Jamshedpur, and the mining and steel industries. Ranchi's hill-station-like elevation gives it cooler, fresher air than the surrounding plains.</p>

<p>Ranchi's climate is subtropical highland: pleasant year-round (summers 35–38°C, winters 8–18°C), with a good monsoon (1,400 mm from June–September). The elevated plateau location and abundant rainfall make Ranchi excellent for tropical plants, ferns, and flowering plants. RedHeart delivers across Ranchi, Jamshedpur, and Hazaribagh with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Ranchi's Highland Tropical Climate</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, trailing, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, government offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor statement, loves Ranchi's cool humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Hindu home, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, XLRI / HEC offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, cool humid climate suits it</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, winter bloom, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Ranchi's Natural Setting and Plant Culture</h3>

<p>Ranchi's extraordinary natural setting — forests, waterfalls, tribal villages with their sacred groves (jaher) — creates a city population that is unusually connected to nature and green spaces. The Jharkhand tribal communities' concept of "jaher" (sacred forest grove, traditionally protected by women) is one of India's oldest environmental conservation traditions. This deep ecology runs through Ranchi's cultural DNA. The city's many government bungalows and older neighbourhoods — Doranda, Harmu, Lalpur — have well-maintained gardens where roses, marigold, and seasonal plants bloom beautifully in the pleasant highland climate.</p>

<p>Sarhul (the Jharkhand tribal spring festival celebrating the sal tree flowering) and Karma Puja (celebrating nature's bounty) are festivals where plants and trees are spiritually honoured in ways that predate urban India's environmental movement by centuries. Ranchi's educated, environmentally conscious professional population increasingly supports plant-based home decor and gifting.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Ranchi</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Ranchi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lalpur, Main Road, Harmu Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Doranda / HEC</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Doranda, HEC Colony, Kokar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kanke / Namkum</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kanke, Namkum, Ratu Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hazaribagh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hazaribagh town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Ranchi's highland tropical climate?", answer: "Monstera, peace lily, anthurium, money plant, rose, and areca palm all thrive in Ranchi's pleasantly cool, humid highland climate. The 651-metre elevation means temperatures are moderate and humidity from the 1,400 mm monsoon is beneficial. Ranchi is one of eastern India's best cities for growing a wide range of indoor and outdoor plants." },
      { question: "Is same-day plant delivery available in Ranchi?", answer: "Yes. Same-day delivery is available across Ranchi including Lalpur, Main Road, Doranda, HEC Colony, and Harmu Road. Order before 3 PM. Midnight delivery is also available for central Ranchi. We deliver to Hazaribagh with advance notice." },
      { question: "What plant is best for a Sarhul festival gift in Ranchi?", answer: "Sarhul celebrates the sal (Shorea robusta) tree's flowering — the start of the tribal new year. A sal sapling is the most culturally resonant gift, though hard to find. A flowering seasonal plant, tulsi, or marigold in a pot honours the festival's spirit of honouring nature. For a modern gift to a colleague in Ranchi, a money plant or monstera in a ceramic planter is appropriate." },
      { question: "Which indoor plant is best for Ranchi's government offices?", answer: "Peace lily and areca palm are the top choices for Jharkhand government offices in Ranchi. They look professional, improve air quality, and are easy to maintain. Snake plant is ideal for offices with irregular care. Lucky bamboo on a reception desk is popular across Ranchi's government and private sector offices." },
      { question: "When is the best time to plant roses in Ranchi?", answer: "October–November is the best time to plant roses in Ranchi. The highland climate means Ranchi's winter is genuinely cool (8–18°C nights), which roses love. They bloom prolifically December through February. Ranchi's moderate summer (max 38°C) is gentler than plains cities, allowing roses to survive with good care even in the warmer months." }
    ]
  },

  "srinagar": {
    cityName: "Srinagar",
    metaTitle: "Buy Plants Online in Srinagar | Alpine & Flowering Plants | RedHeart",
    metaDescription: "Order plants online in Srinagar. Rose, tulip, indoor plants & gifting combos. Delivery across Srinagar. Starting ₹299. Kashmir's crown jewel gets fresh plant delivery.",
    h1: "Buy Plants Online in Srinagar — Plant Delivery in the Paradise of India",
    metaKeyword: "plants online srinagar, buy plants srinagar, indoor plants srinagar, plant delivery srinagar kashmir, rose plant srinagar, tulip srinagar, alpine plants kashmir, online nursery srinagar",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Srinagar — The Dal Lake City Blooms Year-Round</h2>

<p>Srinagar — the summer capital of Jammu and Kashmir — is perhaps India's most naturally beautiful city. Set in the Kashmir Valley at 1,585 metres between the Pir Panjal and Himalayan ranges, with the Dal Lake at its heart, the houseboats reflected in still water, the Mughal gardens of Shalimar Bagh and Nishat Bagh (laid out by Mughal emperors Jahangir and Shah Jahan), and the surrounding ring of snow-capped peaks — Srinagar defines the concept of paradise that the Mughals encoded in the word "jannat." The city's extraordinary horticultural heritage — its tulip garden is Asia's largest — reflects centuries of carefully cultivated beauty in this valley that nature already made extraordinary.</p>

<p>Srinagar's climate is temperate highland: cool to cold summers (maximum 33°C in July), freezing winters (−10 to −4°C in January), spring (March–April) when the cherry blossoms and tulips bloom across the valley, and autumn (September–October) when the chinar (Platanus orientalis) trees turn golden. This cool climate supports plants that struggle in most of India: tulips, peonies, irises, lilies, and alpine flowers. Plants that need tropical warmth will not survive Srinagar's outdoor winters. RedHeart delivers across Srinagar and the Kashmir Valley with service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Srinagar's Temperate Mountain Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Kashmir Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mughal garden tradition, summer bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">May–Sep</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kashmir's famous pink peonies, spring</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Apr–May</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Summer garden, cool climate</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">May–Jul</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor year-round, handles cold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, kept warm in winter</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year (indoor)</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, heated rooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year (indoor)</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, kept in water</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Heated office, very low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Kashmir's Unmatched Spring Garden Season</h3>

<p>Srinagar's spring — from late March through May — is arguably India's most beautiful horticultural season. The Indira Gandhi Memorial Tulip Garden (Asia's largest) at the foot of the Zabarwan Hills opens to visitors when over a million tulips bloom in concentric terraced rows against the backdrop of the snow-capped Pir Panjal range. Cherry blossoms (Judas trees, prunus) bloom in white and pink across the city in late March. Almond and pear orchards flower in the Mughal gardens. The Shalimar Bagh and Nishat Bagh are at their most spectacular with iris, narcissus, and rose in bloom.</p>

<p>For home gardens in Srinagar, spring bulbs (tulip, narcissus, hyacinth) planted in October–November bloom in March–April. Roses thrive from May through September. The chinar tree — Kashmir's iconic maple relative — turns the entire valley amber and gold in October, and many Srinagar homes have at least one chinar as a prized garden tree. Indoor plants must be kept in heated rooms during winter (November–February).</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Srinagar</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Srinagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Lal Chowk, Rajbagh, Jawahar Nagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Weather-permitting</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Dal / Hazratbal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dal Lake area, Hazratbal, Naseem Bagh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Weather-permitting</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South Srinagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bemina, Panthachowk, Nowgam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Weather-permitting</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pulwama / Anantnag</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pulwama, Anantnag, Sopore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">6–8 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Advance order recommended</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow outdoors in Srinagar's cold climate?", answer: "Srinagar's outdoor garden plants are spring bulbs (tulip, narcissus, hyacinth — planted October, blooming March–April), roses (May–September), peonies, irises, lilies, and alpine perennials. Tropical plants cannot survive Srinagar's outdoor winter (−10°C). Chinar, walnut, apple, and pear trees are the iconic garden trees. Plant spring bulbs October–November for the famous Kashmir spring bloom." },
      { question: "Which indoor plants survive Srinagar's freezing winter?", answer: "Keep indoor plants in heated rooms above 12°C during Srinagar's November–February winter. Snake plant and ZZ plant handle the cold best and tolerate the reduced natural light of Kashmir's short winter days. Money plant, peace lily, and lucky bamboo need warm indoor conditions — keep away from single-glazed windows on the coldest nights." },
      { question: "What plant is a good Eid gift in Srinagar?", answer: "A rose plant in full bloom is the most beautiful Eid gift for a Kashmiri family — roses are deeply embedded in Persian and Kashmiri cultural aesthetics. A peony plant (available April–May) is another stunning choice. For a modern, year-round option, lucky bamboo or a money plant in a ceramic pot is appropriate and lasting." },
      { question: "When should I plant tulips in Srinagar for spring bloom?", answer: "Plant tulip bulbs in October–November, once the soil cools below 12°C. Choose a sunny spot with well-draining soil. Plant bulbs 15 cm deep, 10 cm apart, with the pointed end up. Water lightly at planting, then leave until spring rains take over. By late March, Srinagar's famous tulips will emerge — mimicking the Indira Gandhi Memorial Tulip Garden's spectacle at a beautiful domestic scale." },
      { question: "Is plant delivery available in Srinagar in winter?", answer: "Yes, but winter deliveries (November–February) are weather-dependent due to snowfall and road conditions. Order in advance and check availability. Indoor plants — snake plant, ZZ plant, money plant, peace lily — can be delivered when roads permit. Spring is the best season for plant delivery in Srinagar, coinciding with the tourist season and the valley's famous floral display." }
    ]
  },

  "tiruchirappalli": {
    cityName: "Tiruchirappalli",
    metaTitle: "Buy Plants Online in Tiruchirappalli | Tropical & Temple Plants | RedHeart",
    metaDescription: "Order plants online in Tiruchirappalli (Trichy). Jasmine, tulsi, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Rock Fort city gets doorstep plant delivery.",
    h1: "Buy Plants Online in Tiruchirappalli — Same-Day Plant Delivery in Trichy",
    metaKeyword: "plants online tiruchirappalli, buy plants trichy, indoor plants tiruchirappalli, plant delivery trichy tamil nadu, jasmine tiruchirappalli, tulsi trichy, online nursery tiruchirappalli",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Tiruchirappalli — The Rock Fort City Gets Doorstep Greens</h2>

<p>Tiruchirappalli — universally known as Trichy — is Tamil Nadu's fourth-largest city and one of South India's most important religious and commercial centres. The Rock Fort Temple (Ucchi Pillayar Temple), dramatically perched atop a 83-metre granite outcrop at the centre of the city, is one of Tamil Nadu's most iconic structures. The Ranganathaswamy Temple at Srirangam — on an island in the Cauvery river — is one of Hinduism's most sacred sites and the world's largest functioning temple by area. Trichy's old temple city culture, its new industrial zones (BHEL's massive factory complex at Tiruchirappalli is one of India's largest), and its growing STEM education sector (NIT Trichy, SASTRA University nearby) create a multi-dimensional city with deep roots and modern ambitions.</p>

<p>Trichy's climate is hot and semi-arid Tamil Nadu: very hot summers (38–40°C), moderate northeast monsoon (October–December, 850 mm), and warm winters (20–30°C). The Cauvery delta region has good agricultural soil and traditional horticultural knowledge. RedHeart delivers across Tiruchirappalli, Srirangam, Thanjavur, and Karur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Trichy Homes and Temples</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Temple / Cultural Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malligai)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily temple garlands, fragrance tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Thulasi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vishnu/Ranganatha worship, every home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus (Chembaruthi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, handles heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, BHEL offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, NIT Trichy offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, desk plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Trichy's Temple Culture and Sacred Plant Traditions</h3>

<p>Tiruchirappalli's identity is inseparable from its temple culture. The Srirangam Ranganathaswamy Temple — where Vishnu reclines on the cosmic serpent Ananta — is one of Vaishnavism's holiest sites; thulasi (tulsi) is the deity's sacred plant and is offered at every puja. The Uchchi Pillayar atop the Rock Fort and the Thayumanaswami Temple on the rock face have their own sacred plant traditions, including bilva (bel) for Shiva. Every Trichy household in the traditional Tamil neighbourhoods — Woraiyur, Srirangam — maintains a thulasi maadam in the courtyard as the most important domestic spiritual act.</p>

<p>Malligai (jasmine) grown at home is used for daily hair adornment (jasmine is woven into hair garlands by Tamil women), for temple garlands, and for offering to household deities. A jasmine plant thrives in Trichy's warm, sunny climate and blooms from April through October with small, intensely fragrant flowers. Growing your own malligai in Trichy is a connection to Tamil culture that has survived for millennia.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Tiruchirappalli</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Trichy</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thillai Nagar, KK Nagar, Rock Fort area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Srirangam / Woraiyur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Srirangam island, Woraiyur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">BHEL / Sathyamangalam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">BHEL Township, Ariyamangalam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Thanjavur / Karur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thanjavur, Karur towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is sacred for the Ranganathaswamy Temple devotees in Trichy?", answer: "Thulasi (tulsi / Ocimum tenuiflorum) is the most sacred plant for Srirangam's Vaishnavite community — it's Vishnu/Ranganatha's own plant, offered at every puja. Growing thulasi at home and offering fresh leaves daily is one of the most important devotional acts for Vaishnava families in Trichy. A thulasi plant in a decorated maadam is the most meaningful plant gift for a Srirangam family." },
      { question: "Is same-day plant delivery available in Srirangam and KK Nagar?", answer: "Yes. Same-day delivery is available across Tiruchirappalli including Thillai Nagar, KK Nagar, Srirangam, Woraiyur, and Rock Fort area. Order before 3 PM. Midnight delivery is available for central Trichy areas." },
      { question: "Which plants grow best in Trichy's hot climate?", answer: "Malligai (jasmine), thulasi, hibiscus, snake plant, and money plant all do well in Trichy's warm 20–40°C climate. Jasmine blooms prolifically from April through October. Hibiscus flowers daily with regular sun. Indoor plants like snake plant and ZZ plant handle Trichy's indoor heat well in AC rooms. Avoid overwatering in summer — Trichy's heat dries pots quickly but root rot is still possible." },
      { question: "What plant is best for Pongal gifting in Tiruchirappalli?", answer: "For Pongal (January) — Tamil Nadu's harvest festival — a marigold plant or a chrysanthemum is the most colourful and festive choice. A tulsi plant is the most sacred gift for any Tamil Hindu occasion. For a modern Pongal gift, a money plant or lucky bamboo in a ceramic pot is appropriate. For corporate Pongal gifting, a peace lily or areca palm in a premium planter is elegant." },
      { question: "Do you deliver plants to BHEL Township in Tiruchirappalli?", answer: "Yes. BHEL Township (Bharat Heavy Electricals Limited) is within our Tiruchirappalli delivery zone. Delivery takes 3–5 hours. BHEL's large employee housing complex has significant demand for both indoor and outdoor plants from its engineering workforce. We supply areca palms, snake plants, and indoor plant collections to BHEL Township homes and offices." }
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
