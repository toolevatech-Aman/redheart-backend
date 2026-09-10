// Plants Tier 2 Batch 10 — 8 cities
// Nanded, Sangli, Rohtak, Karnal, Bilaspur, Korba, Hosur, Udupi

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "nanded": {
    cityName: "Nanded",
    metaTitle: "Buy Plants Online in Nanded | Hazur Sahib City Plants | RedHeart",
    metaDescription: "Order plants online in Nanded. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. The city of Hazur Sahib Gurudwara gets plant delivery.",
    h1: "Buy Plants Online in Nanded — Same-Day Plant Delivery Near Hazur Sahib Gurudwara",
    metaKeyword: "plants online nanded, buy plants nanded, indoor plants nanded, plant delivery nanded maharashtra, marigold nanded, tulsi nanded, online nursery nanded hazur sahib",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Nanded — The Sacred City of Hazur Sahib Gets Doorstep Greens</h2>

<p>Nanded is one of Maharashtra's most historically and spiritually significant cities — the site of Hazur Sahib (Sachkhand Sri Hazur Abchalnagar Sahib Gurudwara), one of the five Takhts of Sikhism and the holiest site in Maharashtra for the global Sikh community. Guru Gobind Singh, the tenth Sikh Guru, spent his final years in Nanded and attained jyoti jot (merger with the eternal light) here in 1708. Nanded receives Sikh pilgrims from across India and the world year-round, making it a city of remarkable spiritual energy. The city is also home to Swami Ramanand Teerth Marathwada University and is the administrative headquarters of Nanded district.</p>

<p>Nanded's climate is semi-arid Marathwada: hot summers (41°C), moderate monsoon (750 mm), and cool pleasant winters (10–24°C). The Godavari river flows through Nanded, providing water access. Marigold, tulsi, money plant, snake plant, and indoor plants are the key plant categories. RedHeart delivers across Nanded, Ardhapur, Kandhar, and Latur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Nanded Homes and Sacred Spaces</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sacred / Home Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Hindu household</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Guru Nanak Jayanti, Diwali, festivals</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low water, handles Marathwada heat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Drought-smart, practical home plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, pilgrim businesses</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, university offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, Godavari riverbank home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Hazur Sahib's Spirit and Nanded's Plant Culture</h3>

<p>Nanded's identity as a sacred city creates a distinctive plant culture — marigold (genda) is profoundly important for Sikh religious observances at Hazur Sahib, where flower garlands adorn the Guru Granth Sahib and the Gurudwara's interior. The Gurudwara's langar (community kitchen) serves tens of thousands of pilgrims daily, and its gardens and compound are maintained with reverence. Hindu homes in Nanded follow the Marathwada tradition of tulsi worship — the sacred basil is the botanical anchor of every home's spiritual practice. The city's mix of Sikh pilgrimage, Marathwada Hindu tradition, and the Godavari's gentle presence creates a layered botanical sensibility: plants as sacred objects, as community symbols, and as a connection to the river's natural abundance.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Nanded</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Nanded</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hazur Sahib area, Shivajinagar, Vazirabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Ardhapur / Dharmabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ardhapur, Dharmabad towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Kandhar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kandhar, Mukhed towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Latur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Latur city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is most sacred for gifting near Hazur Sahib Gurudwara in Nanded?", answer: "Marigold (genda) is the most sacred flower for Hazur Sahib offerings — pilgrims bring marigold garlands for the Gurudwara's decoration. For a Hindu home gift in Nanded, tulsi plant in a terracotta maadam is most sacred. For inter-community Diwali gifting appropriate for both Hindu and Sikh households in Nanded, money plant in an auspicious planter or lucky bamboo in a glass vase is universally appreciated and appropriate." },
      { question: "Is same-day plant delivery available in Nanded?", answer: "Yes. Same-day delivery is available across Nanded including Hazur Sahib area, Shivajinagar, and Vazirabad. Order before 3 PM. We also deliver to Ardhapur and Latur with 3–5 and 4–6 hour service respectively." },
      { question: "Which plants survive Nanded's hot Marathwada summer?", answer: "Aloe vera, snake plant, cactus, money plant (in water vase indoors), and lucky bamboo (in water vase) are the best summer survivors for Nanded. Tulsi needs daily morning watering and afternoon shade during peak summer. October–March is the best outdoor planting season in Nanded's Marathwada climate. Marigold planted in September produces spectacular Diwali blooms." },
      { question: "What plant is best for a Gurupurab (Guru Nanak Jayanti) gift in Nanded?", answer: "Marigold plant in full golden bloom is the most appropriate Gurupurab plant gift in Nanded — marigold is the Gurudwara's sacred flower, used for decorating the Guru Granth Sahib and the langar hall. A living marigold plant extends the celebration beyond the day. Lucky bamboo in a 7-stalk arrangement (symbolising wisdom and longevity) is the standard corporate gift for professional Gurupurab gifting in Nanded's business community." },
      { question: "Do you deliver plants to Bidar (Karnataka) from Nanded?", answer: "Yes. Bidar (Karnataka), which borders Nanded district and has strong cultural and commercial ties to the city, is within our extended delivery zone with 4–6 hour service. Same-day delivery for Bidar orders placed before noon." }
    ]
  },

  "sangli": {
    cityName: "Sangli",
    metaTitle: "Buy Plants Online in Sangli | Turmeric City Maharashtra Plants | RedHeart",
    metaDescription: "Order plants online in Sangli. Marigold, indoor plants & gifting. Same-day delivery. Starting ₹299. Maharashtra's turmeric city gets fresh plant delivery.",
    h1: "Buy Plants Online in Sangli — Same-Day Plant Delivery in the Turmeric City of Maharashtra",
    metaKeyword: "plants online sangli, buy plants sangli, indoor plants sangli, plant delivery sangli maharashtra, marigold sangli, turmeric city sangli, online nursery sangli kolhapur",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Sangli — Maharashtra's Turmeric Capital Gets Doorstep Greens</h2>

<p>Sangli is one of Maharashtra's most prosperous cities in the Kolhapur-Sangli southern Maharashtra belt — the "Turmeric City of India" (Sangli is India's largest turmeric trading market, with the Sangli APMC being the national benchmark for turmeric pricing and quality), a major sugar industry hub (the Krishna and Warna rivers power extensive sugarcane cultivation), and a city known for a particularly rich cultural and educational tradition. Sangli district includes the historically significant princely state of Sangli, and the city's Ganpati festival (Sangli's Ganapati celebrations, particularly at Sangli Ganpati mandir, are among Maharashtra's most elaborate) is a defining community event. Sangli is part of the Sangli-Miraj-Kupwad urban agglomeration.</p>

<p>Sangli's climate is southern Deccan: hot summers (38°C), moderate to good monsoon (700 mm from southwest monsoon plus Krishna river water from dams), and pleasant winters (12–26°C). Marigold, tulsi, hibiscus, rose, and indoor plants are popular. The fertile Krishna-Warna delta supports excellent plant growth. RedHeart delivers across Sangli, Miraj, Kupwad, and Kolhapur with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Sangli Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Sangli / Maharashtra Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Ganesh Chaturthi, Diwali, Krishna weddings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Maharashtrian home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Sangli garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Winter garden, Krishna river valley</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Premium gifting, turmeric trader homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sugar/turmeric inter-business gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Wanlesswadi college</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Turmeric's Botanical Significance and Sangli's Plant Culture</h3>

<p>Sangli's identity as the turmeric capital creates a unique botanical consciousness — turmeric (Curcuma longa) is itself a plant, and Sangli's traders have multigenerational expertise in judging the quality, colour, and curcumin content of turmeric rhizomes. This botanical literacy extends to the home garden: Sangli's Jain and Lingayat trading families maintain elaborate kitchen gardens (turmeric, ginger, curry leaf), and the Krishna-Warna delta's rich soil supports outstanding plant growth. Ganesh Chaturthi is Sangli's most celebrated festival — the city's famous Ganapati pandals are decorated with marigold in enormous quantity, making Sangli one of Maharashtra's biggest seasonal marigold markets. RedHeart's doorstep delivery makes it easy to get festival marigold, sacred tulsi, and premium indoor plants without visiting the crowded APMC market area.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Sangli</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Sangli City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">APMC area, Mahalaxmi Nagar, Vishrambag</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Miraj / Kupwad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Miraj, Kupwad industrial area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Islampur / Tasgaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Islampur, Tasgaon towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kolhapur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kolhapur city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is the best Ganesh Chaturthi gift for a Sangli family?", answer: "Marigold in full golden bloom is the most festive and appropriate Ganesh Chaturthi plant for Sangli — the city's Ganapati celebrations use marigold at every pandal and home decoration. Tulsi plant in a new terracotta maadam is sacred. For a lasting Chaturthi gift, money plant in a terracotta pot or lucky bamboo in a glass vase is universally appropriate for any Sangli household." },
      { question: "Is same-day plant delivery available in Sangli?", answer: "Yes. Same-day delivery is available across Sangli including APMC area, Mahalaxmi Nagar, and Vishrambag. Order before 3 PM. Miraj and Kupwad are also same-day within 2–4 hours. We also deliver to Kolhapur within 3–5 hours." },
      { question: "What plants grow best in the Krishna-Warna delta near Sangli?", answer: "The Krishna-Warna delta's rich alluvial black cotton soil and adequate river water create outstanding plant conditions. Rose, hibiscus, marigold, jasmine, and tulsi all grow vigorously with good soil and regular watering. Marigold is especially spectacular in Sangli — the APMC turmeric gardens produce outstanding orange-yellow marigold with excellent quality." },
      { question: "What plant is best for a turmeric trader's corporate Diwali gift in Sangli?", answer: "Lucky bamboo in a 9-stalk decorative arrangement is the most popular Diwali inter-business gift for Sangli's turmeric and sugar trading community. Anthurium in a ceramic planter is premium and appropriate for significant business relationships. Money plant in a terracotta pot is widely gifted. Peace lily in a gift-wrapped ceramic planter is elegant for senior trader and bank manager gifting during the Diwali season." },
      { question: "Do you deliver plants to Miraj from Sangli?", answer: "Yes. Miraj (part of the Sangli-Miraj-Kupwad urban agglomeration, home to Miraj Medical Centre and known historically for its unique sitar and veena musical instrument workshop tradition) is within our same-day delivery zone, 2–4 hours from Sangli. Kupwad industrial area is simultaneously covered." }
    ]
  },

  "rohtak": {
    cityName: "Rohtak",
    metaTitle: "Buy Plants Online in Rohtak | Haryana Education Hub Plants | RedHeart",
    metaDescription: "Order plants online in Rohtak. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Haryana's education city gets fresh plant delivery.",
    h1: "Buy Plants Online in Rohtak — Same-Day Plant Delivery in Haryana's Education and Agriculture Hub",
    metaKeyword: "plants online rohtak, buy plants rohtak, indoor plants rohtak, plant delivery rohtak haryana, marigold rohtak, tulsi rohtak, online nursery rohtak PGIMS MDU",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Rohtak — Haryana's Knowledge Capital Gets Doorstep Greens</h2>

<p>Rohtak is one of Haryana's most important cities — the home of Maharshi Dayanand University (MDU), one of Haryana's largest universities, and the Post Graduate Institute of Medical Sciences (PGIMS Rohtak) — a premier government medical college and hospital serving Haryana, Delhi NCR, and parts of Rajasthan. The city is a significant commercial and agricultural hub in the heart of Haryana's wheat and sugarcane belt. Rohtak's proximity to Delhi (70 km) has made it an important satellite city, with a growing urban population working in both Haryana and the Delhi NCR economy. The city's name references the traditional Ahir (Yadav) community's historical dominance in this part of Haryana's agrarian landscape.</p>

<p>Rohtak's climate is north Indian: very hot summers (44°C), moderate monsoon (550 mm — among Haryana's lower rainfall areas), and cold clear winters (3–16°C). The cool winters produce outstanding rose and marigold. Money plant, tulsi, snake plant, and marigold are the most popular plant categories. RedHeart delivers across Rohtak, Jhajjar, Sonipat, and Bhiwani with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Rohtak Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Haryana Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Lohri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Haryana Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Spectacular Rohtak winter blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, MDU student gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, PGIMS hospital gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, Diwali inter-business</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, MDU faculty</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Handles Haryana heat, practical</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Rohtak's Agricultural Identity and Academic Plant Culture</h3>

<p>Rohtak's dual identity — as Haryana's academic capital (MDU and PGIMS) and as a traditional Haryanvi farming community — creates a rich plant culture that bridges education and agriculture. Haryanvi farming families grow everything in compound gardens: marigold, tulsi, mustard (sarson), and seasonal vegetables. The MDU campus maintains well-kept botanical gardens where students and faculty engage with plant science. PGIMS Rohtak, as a major medical institution, has a community that values medicinal plants — aloe vera, tulsi, and neem are appreciated in the context of Ayurvedic and traditional medicine alongside modern healthcare. Lohri (the winter harvest festival most associated with Punjab and Haryana) is celebrated in Rohtak with marigold garlands and mustard field visits, reinforcing the plant connection in the community's seasonal calendar.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Rohtak</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Rohtak</td><td style="border:1px solid #d1d5db;padding:8px 12px;">MDU campus, PGIMS, Civil Lines</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jhajjar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Jhajjar town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhiwani</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhiwani town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Sonipat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sonipat city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for a PGIMS doctor or MDU faculty member in Rohtak?", answer: "Peace lily in a ceramic planter is elegant and appropriate for PGIMS doctors and MDU faculty — it's NASA-certified for indoor air purification and requires no outdoor conditions. Snake plant handles hospital and university office environments with minimal care. Lucky bamboo in a glass vase is the standard professional occasion gift. For a new faculty member's office at MDU, areca palm in a large pot creates a welcoming green statement." },
      { question: "Is same-day plant delivery available in Rohtak?", answer: "Yes. Same-day delivery is available across Rohtak including MDU campus area, PGIMS, and Civil Lines. Order before 3 PM. We also deliver to Bhiwani and Jhajjar within 3–5 hours." },
      { question: "What plants grow best in Rohtak's north Haryana climate?", answer: "Rose (spectacular November–February blooms in Rohtak's cold dry climate), marigold (October–February), tulsi, money plant, aloe vera, and snake plant all thrive. Rohtak's cold clear winters (3–16°C) are ideal for rose and marigold. The hot dry summers (44°C) mean outdoor plants need morning shade and frequent watering. Indoor plants in AC environments need no summer protection." },
      { question: "What is the best Diwali plant gift for a Rohtak business?", answer: "Lucky bamboo in a 7 or 9-stalk arrangement is the most popular Diwali corporate plant gift in Rohtak's commercial community. Marigold in terracotta pots makes festive entrance decoration for shops. Money plant in a ceramic pot is universally auspicious. For senior business partners, anthurium in a decorative ceramic planter or areca palm in a large floor planter is an impressive premium Diwali gift." },
      { question: "Do you deliver plants to Jhajjar from Rohtak?", answer: "Yes. Jhajjar (35 km from Rohtak, historically associated with the 1857 Revolt context — the Nawab of Jhajjar's role is documented in the revolt history) is within our 3–5 hour same-day delivery zone. Bhiwani (the boxing district that has produced India's most decorated Olympic boxing champions — Vijender Singh, Mary Kom-era coaches) is also within 3–5 hours from Rohtak." }
    ]
  },

  "karnal": {
    cityName: "Karnal",
    metaTitle: "Buy Plants Online in Karnal | Rice Bowl of India Haryana Plants | RedHeart",
    metaDescription: "Order plants online in Karnal. Marigold, indoor plants & gifting combos. Same-day delivery. Starting ₹299. Haryana's rice bowl city gets fresh plant delivery.",
    h1: "Buy Plants Online in Karnal — Same-Day Plant Delivery in Haryana's Rice Bowl City",
    metaKeyword: "plants online karnal, buy plants karnal, indoor plants karnal, plant delivery karnal haryana, marigold karnal, rose plant karnal, online nursery karnal NDRI karna",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Karnal — The City of Karna Gets Doorstep Greens</h2>

<p>Karnal is one of Haryana's most storied cities — named after the legendary Karna of the Mahabharata (who ruled this region), and historically significant as the site of the Battle of Karnal (1739, where Nader Shah of Persia defeated the Mughal emperor Muhammad Shah). Today Karnal is a modern agricultural powerhouse: home to the National Dairy Research Institute (NDRI) — India's premier dairy science research institution — the National Bureau of Plant Genetic Resources (NBPGR), and the Karnal-Kurukshetra agricultural technology corridor. Karnal is also famous for its high-quality basmati rice, desi ghee, and the surrounding rice fields that have earned the Karnal-Kurukshetra belt the title of "Rice Bowl of India."</p>

<p>Karnal's climate is north Indian: hot summers (43°C), moderate monsoon (700 mm), and cold clear winters (4–17°C). The canal irrigation system (Western Yamuna Canal) provides excellent water access for gardens. Rose, marigold, tulsi, money plant, and indoor plants are popular. RedHeart delivers across Karnal, Kurukshetra, Panipat, and Kaithal with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Karnal Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Karnal / Haryana Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Karnal's clear winters perfect for rose</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Mar</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Haryana Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Navratri, Lohri celebrations</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, NDRI gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, research institute settings</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, agricultural business Diwali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, NBPGR scientists</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Practical, drought summer use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">NDRI's Agricultural Legacy and Karnal's Scientific Plant Culture</h3>

<p>Karnal's National Dairy Research Institute (NDRI) and National Bureau of Plant Genetic Resources (NBPGR) — which together maintain one of Asia's largest plant and agricultural biodiversity collections — create an exceptionally science-literate population with deep respect for botanical diversity. NBPGR's national gene bank preserves seeds of thousands of plant varieties, including many traditional Indian cultivars. This institutional backdrop shapes Karnal's horticultural culture: the NDRI campus's rose garden, maintained to scientific standards, inspires amateur rose cultivation across the city. The city's basmati rice farms (karnal district is the epicentre of India's basmati export industry) remind every resident that agriculture — and its botanical science — is Karnal's deepest identity.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Karnal</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Karnal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">NDRI area, Sector 12, Indira Colony</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kaithal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kaithal town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Panipat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Panipat city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kurukshetra</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kurukshetra city, Brahma Sarovar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is best for an NDRI or NBPGR scientist in Karnal?", answer: "Peace lily in a ceramic planter is elegant and appropriate for research scientists — it's botanically interesting (a Spathiphyllum, native to tropical America) and purifies indoor air. For a scientist at NBPGR (which preserves plant genetic resources), an unusual or heirloom plant variety is especially meaningful. Lucky bamboo is the standard professional gifting choice for research occasions. For a team gift, areca palm in a large pot creates a welcoming statement for a new department head." },
      { question: "Is same-day plant delivery available in Karnal?", answer: "Yes. Same-day delivery is available across Karnal including NDRI campus area, Sector 12, and Indira Colony. Order before 3 PM. We also deliver to Kurukshetra and Panipat within 3–5 hours." },
      { question: "What plants grow best in Karnal's north Haryana climate?", answer: "Rose (planted October–November for spectacular December–February blooms), marigold (October–February), tulsi, money plant, aloe vera, and snake plant all thrive. Karnal's clear, cold winters (4–17°C) and Western Yamuna Canal water access create excellent conditions. The NDRI campus rose garden is proof that rose thrives in Karnal's climate with proper care." },
      { question: "What plant is the best Lohri gift for a Karnal farming family?", answer: "Marigold in terracotta pot is the most festive Lohri plant for any north Indian farming family — Lohri is the harvest festival of the wheat/rice cycle, and marigold's golden colour mirrors the wheat fields at harvest time. Tulsi is sacred for every Haryana Hindu household. A kitchen herb planter (tulsi + mint + ajwain) is a practical Lohri gift that any Karnal farming family will genuinely appreciate." },
      { question: "Do you deliver plants to Kurukshetra from Karnal?", answer: "Yes. Kurukshetra (33 km from Karnal, site of the Mahabharata war, Brahma Sarovar — one of India's holiest kund tanks — and Kurukshetra University) is within our 3–5 hour same-day delivery zone. Kaithal is simultaneously covered. Karnal serves as a natural hub for the entire Ambala-Kurukshetra-Panipat corridor." }
    ]
  },

  "bilaspur": {
    cityName: "Bilaspur",
    metaTitle: "Buy Plants Online in Bilaspur | Chhattisgarh Judicial Capital Plants | RedHeart",
    metaDescription: "Order plants online in Bilaspur. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Chhattisgarh's judicial capital gets fresh plant delivery.",
    h1: "Buy Plants Online in Bilaspur — Same-Day Plant Delivery in Chhattisgarh's Judicial Capital",
    metaKeyword: "plants online bilaspur, buy plants bilaspur, indoor plants bilaspur, plant delivery bilaspur chhattisgarh, marigold bilaspur, tulsi bilaspur, online nursery bilaspur high court",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Bilaspur — Chhattisgarh's Judicial Capital Gets Doorstep Greens</h2>

<p>Bilaspur is one of Chhattisgarh's most significant cities — the seat of the Chhattisgarh High Court (one of India's newest High Courts, established when Chhattisgarh was carved from Madhya Pradesh in 2000), a major commercial and railway junction (Bilaspur is the headquarters of South East Central Railway zone, one of India's busiest railway zones), and an important educational centre with Guru Ghasidas Vishwavidyalaya (a central university). The city sits in the Hasdeo river basin, surrounded by Chhattisgarh's mineral-rich forests — coal from the Korba coalfields, iron ore from Bailadila, and the state's extraordinary forest biodiversity are all within Bilaspur's economic orbit. Bilaspur is also a gateway to the tribal cultural heartland of Chhattisgarh.</p>

<p>Bilaspur's climate is Chhattisgarh monsoon: very hot summers (44°C), excellent monsoon (1,200–1,400 mm), and pleasant winters (12–24°C). The outstanding monsoon creates superb plant-growing conditions. Marigold, tulsi, money plant, hibiscus, and indoor plants all do well. RedHeart delivers across Bilaspur, Korba, Raigarh, and Champa with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Bilaspur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Chhattisgarh Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Chhattisgarh Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali, Hartalika Teej, Navratri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, court advocate gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Chhattisgarh home garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, High Court building lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate, legal community gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, GGU faculty</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Bilaspur humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Chhattisgarh's Forest Biodiversity and Bilaspur's Plant Culture</h3>

<p>Chhattisgarh is one of India's richest states for forest biodiversity — over 44% of the state is forested, and the tribal communities (Gond, Baiga, Korwa, Halba, and many others) have maintained sophisticated knowledge of forest plants, medicinal herbs, and wild foods for generations. Bilaspur, as the state's judicial capital, sits at the intersection of this forest wisdom and modern professional life. The city's High Court lawyers and Guru Ghasidas University academics represent a professional class that values plants as symbols of growth, stability, and cultural continuity. The excellent 1,200 mm monsoon means Bilaspur homes can grow almost anything — anthurium, hibiscus, and money plant thrive effortlessly in Chhattisgarh's natural humidity and warmth.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Bilaspur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Bilaspur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">High Court area, Vyapar Vihar, Torwa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Champa / Janjgir</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Champa, Janjgir towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Korba</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Korba power city</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Raigarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Raigarh town, Chhattisgarh</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants thrive in Bilaspur's excellent Chhattisgarh monsoon climate?", answer: "Bilaspur's 1,200+ mm monsoon and warm temperatures make it outstanding for plant growth. Anthurium, hibiscus, marigold, money plant, tulsi, and almost any tropical plant grow vigorously here. Anthurium needs virtually no care in Bilaspur's natural humidity. The June–September monsoon period is ideal for establishing new outdoor plants. Even shade-loving indoor plants like peace lily will grow faster in Bilaspur's naturally humid conditions." },
      { question: "Is same-day plant delivery available in Bilaspur?", answer: "Yes. Same-day delivery is available across Bilaspur including High Court area, Vyapar Vihar, and Torwa. Order before 3 PM. We also deliver to Korba within 4–6 hours." },
      { question: "What plant is best for a Chhattisgarh High Court advocate's office in Bilaspur?", answer: "Lucky bamboo in a glass vase is the most popular office plant for Bilaspur's legal community — it's auspicious (associated with growth and prosperity, appropriate for legal practice) and effortlessly maintained on a desk. Peace lily in a ceramic pot is elegant for a senior advocate's chamber. Money plant in a hanging planter is the most versatile and widely-placed legal office plant in Bilaspur." },
      { question: "What plants are traditional for Chhattisgarhi festivals like Hartalika Teej?", answer: "Hartalika Teej (the women's festival for marital prosperity, especially popular in Chhattisgarh) centres on creating a garden tableau with sand and clay — bel (wood apple), tulsi, banana, and hibiscus are the traditional Teej plants. Marigold flowers are used for the Teej puja decoration. Growing your own tulsi and hibiscus year-round allows Chhattisgarhi women to have fresh, sacred flowers for Teej puja at home without market dependence." },
      { question: "Do you deliver plants to Korba from Bilaspur?", answer: "Yes. Korba (Chhattisgarh's power city — home to NTPC Korba, one of India's largest thermal power stations, and the Korba coalfields) is within our 4–6 hour same-day delivery zone from Bilaspur. Champa and Janjgir are within 3–5 hours. Same-day delivery for Korba orders placed before noon." }
    ]
  },

  "hosur": {
    cityName: "Hosur",
    metaTitle: "Buy Plants Online in Hosur | EV Hub Tamil Nadu Plants | RedHeart",
    metaDescription: "Order plants online in Hosur. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Tamil Nadu's EV manufacturing hub gets fresh plant delivery.",
    h1: "Buy Plants Online in Hosur — Same-Day Plant Delivery in Tamil Nadu's EV Manufacturing Capital",
    metaKeyword: "plants online hosur, buy plants hosur, indoor plants hosur, plant delivery hosur tamil nadu, marigold hosur, money plant hosur, online nursery hosur krishnagiri EV manufacturing",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Hosur — Tamil Nadu's EV Capital Gets Doorstep Greens</h2>

<p>Hosur is one of India's most rapidly transforming industrial cities — located in Tamil Nadu's Krishnagiri district on the Karnataka-Tamil Nadu border, just 45 km from Bangalore, Hosur is now the epicentre of India's electric vehicle (EV) revolution. Ola Electric's Futurefactory (with 10 GWh battery manufacturing capacity — one of the world's largest battery plants), Ather Energy, TVS Motor, TATA Electronics, and dozens of EV component suppliers have established Hosur as India's "EV City." The SIPCOT Hosur industrial area is one of Tamil Nadu's most productive manufacturing clusters, producing motorbikes, trucks, circuit boards, and precision components for domestic and global markets. Hosur's population has doubled in a decade from manufacturing-driven migration from Tamil Nadu, Karnataka, and beyond.</p>

<p>Hosur's climate is elevated Deccan: milder than both Bangalore and the Tamil Nadu plains, with warm summers (34°C), excellent southwest monsoon (900 mm), and pleasant winters (14–22°C). The Bangalore-like weather creates excellent plant-growing conditions. Money plant, jasmine, marigold, tulsi, and indoor plants are popular. RedHeart delivers across Hosur, Krishnagiri, Denkanikottai, and electronic city Bangalore adjacent areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Hosur Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Hosur / EV Worker Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious, new apartment</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, Tamil and Kannada households</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tamil daily garland tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pongal, Deepavali, Navratri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">EV factory office, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, EV startup offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, EV company launches</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">EV factory reception, modern office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Hosur's EV Revolution and a New Urban Plant Culture</h3>

<p>Hosur's explosive industrial growth has created a young, mobile, multi-lingual workforce that needs plants for new apartments, company offices, and gifting occasions with colleagues from different states. The EV manufacturing community — engineers and workers from Tamil Nadu, Karnataka, Maharashtra, Telangana, and North India — brings a cosmopolitan plant culture to Hosur. Tamil families maintain the jasmine and kolam (turmeric and rice flour floor art) tradition. Kannada families (Hosur borders Karnataka) bring tulsi and marigold Ugadi traditions. North Indian employees celebrate Diwali with marigold and money plant. This cultural mosaic means Hosur has one of the most diverse plant requirement profiles of any mid-sized Indian city. RedHeart's 800+ plant variety selection is perfectly suited to Hosur's multi-cultural, rapidly urbanising community.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Hosur</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hosur Town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">SIPCOT area, Ola Factory zone, Old Town</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Krishnagiri</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Krishnagiri town, mango belt</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Denkanikottai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Denkanikottai rose farming area</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Attibele</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Attibele (Karnataka border, Bangalore edge)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "What plant is the best gift for a new Ola or Ather employee joining in Hosur?", answer: "Money plant in a modern ceramic pot is the universally appropriate welcome gift for a new EV company joinee — it's auspicious, easy to maintain, and appropriate for someone relocating to a new apartment in Hosur. Peace lily in a gift-wrapped ceramic planter is elegant for a senior engineer or manager. Lucky bamboo in a glass vase is the standard professional occasion gift that works across all the cultural backgrounds represented in Hosur's multicultural EV workforce." },
      { question: "Is same-day plant delivery available in Hosur?", answer: "Yes. Same-day delivery is available across Hosur including SIPCOT industrial area, Ola Factory zone, and Old Town. Order before 3 PM. We also deliver to Krishnagiri within 3–5 hours and Attibele (Bangalore border) within 2–4 hours." },
      { question: "Which plants grow best in Hosur's Bangalore-like climate?", answer: "Hosur's elevated Deccan climate (similar to Bangalore's 900m altitude) is outstanding for plant growth. Rose, jasmine, money plant, marigold, tulsi, peace lily, and anthurium all thrive. The pleasant 34°C maximum and good 900 mm monsoon mean outdoor plants grow vigorously without Bangalore's traffic-related urban heat island. Denkanikottai (25 km from Hosur) is one of India's largest rose farming areas, making Hosur a natural hub for rose plant culture." },
      { question: "What plants are popular for Pongal celebrations in Hosur's Tamil community?", answer: "Sugarcane (planted in November for Pongal harvest) and marigold are the core Pongal plants for Hosur's Tamil workforce — the largest community in the city. Kolam is traditionally drawn with turmeric paste, and the tulsi plant near the Pongal pot is sacred. Growing your own marigold for Pongal garlands is a beloved Tamil tradition that Hosur's new apartment residents maintain on balconies and window boxes." },
      { question: "Do you deliver plants to Denkanikottai rose farms near Hosur?", answer: "Yes. Denkanikottai (one of India's most important rose-farming clusters, supplying fresh roses to flower markets in Bangalore, Chennai, and abroad) is within our 3–5 hour same-day delivery zone from Hosur. The area's floriculture farms and the growing residential community around Denkanikottai are both served. Same-day delivery for Denkanikottai orders placed before noon." }
    ]
  },

  "udupi": {
    cityName: "Udupi",
    metaTitle: "Buy Plants Online in Udupi | Temple City Karnataka Plants | RedHeart",
    metaDescription: "Order plants online in Udupi. Indoor plants & gifting combos. Same-day delivery. Starting ₹299. Karnataka's temple and cuisine city gets fresh plant delivery.",
    h1: "Buy Plants Online in Udupi — Same-Day Plant Delivery in the Temple City of Karnataka",
    metaKeyword: "plants online udupi, buy plants udupi, indoor plants udupi, plant delivery udupi karnataka, marigold udupi, jasmine udupi, online nursery udupi krishna temple manipal",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Udupi — The Temple City of Karnataka Gets Doorstep Greens</h2>

<p>Udupi is one of Karnataka's most celebrated cities — the home of the Sri Krishna Temple (established by the philosopher-saint Madhvacharya in the 13th century, one of the most sacred Vaishnava temples in South India), the birthplace of Udupi cuisine (the vegetarian restaurant tradition that has spread across the world as the definitive South Indian vegetarian food experience), and the home of Manipal (5 km north), which hosts Manipal Academy of Higher Education — one of India's largest and most prestigious deemed universities. Udupi district's coastline is among Karnataka's most beautiful, with the Arabian Sea, river estuaries, and the Western Ghats creating an extraordinary landscape of biodiversity and scenic beauty.</p>

<p>Udupi's climate is the lush coastal Karnataka monsoon: warm and humid (30–34°C year-round), extraordinary monsoon (3,000–4,000 mm — among India's highest rainfall regions), and no real winter. Plants grow with exceptional vigour in Udupi's natural humidity and warmth. Jasmine, hibiscus, marigold, tulsi, anthurium, and tropical indoor plants all thrive effortlessly. RedHeart delivers across Udupi, Manipal, Karkala, Kundapur, and Mangaluru with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Udupi Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Coastal Karnataka Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care in Udupi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Mallige)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Krishna Temple offerings, daily garlands</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sacred, every Tulu/Kannada Hindu home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Navratri, Dasara, Deepavali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Thrives in Udupi monsoon humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Devi worship, Udupi compound garden</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, Manipal student homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">No care needed</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, Manipal university</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, temple trust offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Very easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Sri Krishna Temple, Madhvacharya, and Udupi's Sacred Plant Tradition</h3>

<p>The Sri Krishna Temple at the heart of Udupi is not just a temple but a living philosophical and cultural institution — Madhvacharya's Dvaita Vedanta tradition, with its emphasis on devotional worship and the specific use of ritual flowers, has shaped Udupi's plant culture for 800 years. Jasmine (mallige/mogra) and marigold (genda) are the primary temple flowers — garland makers (malakar/mallige vyapaari) around the temple have been supplying fresh jasmine daily for generations. Every Tulu-speaking and Havyaka Brahmin home in Udupi maintains a compound garden with tulsi, hibiscus, jasmine, and banana — the four plants essential to daily Vaishnava worship and ritual. The extraordinary 3,000–4,000 mm monsoon (June–September) creates the most lush plant-growing conditions of any Indian coastal city outside the northeast, meaning even novice gardeners produce spectacular results in Udupi.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Udupi</h3>

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
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Udupi City</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Krishna Temple area, Car Street, KMC</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Manipal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Manipal University campus, student residences</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Karkala / Brahmavar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Karkala, Brahmavar towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kundapur / Byndoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kundapur, Byndoor coastal towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plant is most sacred for the Sri Krishna Temple tradition in Udupi?", answer: "Tulsi (especially Vrindavani Tulsi — the most sacred variety in Vaishnava tradition) is the most sacred plant for Udupi's Krishna temple — tulsi garlands are offered to Krishna daily as part of the Madhvacharya-tradition ritual. Jasmine (mallige) is the fragrant flower for daily garlands. Hibiscus flowers are offered to the Devi shrines within the temple complex. Growing tulsi in a prominent maadam at home is the most fundamental botanical-spiritual practice for any Udupi household." },
      { question: "Is same-day plant delivery available in Udupi?", answer: "Yes. Same-day delivery is available across Udupi including Krishna Temple area, Car Street, and KMC. Order before 3 PM. We also deliver to Manipal campus within 2–4 hours and Karkala within 3–5 hours." },
      { question: "What plants are best suited to Udupi's extraordinary 3,000–4,000 mm monsoon rainfall?", answer: "Udupi's exceptional rainfall makes it one of India's best plant-growing regions. Anthurium, jasmine, hibiscus, tulsi, money plant, ferns, and virtually any tropical plant grow with no special care here. The monsoon's June–September intensity does flood outdoor pots, so raised platforms and good drainage are essential. After the monsoon (October–May), the lingering soil moisture sustains gardens without supplemental watering for months." },
      { question: "What plant is best for a Manipal University student's hostel room?", answer: "Money plant in a small water bottle or glass vase is the most popular Manipal hostel room plant — it grows in water alone, needs no soil or sunlight, and fits on any desk or windowsill. Lucky bamboo in a small vase is similarly perfect for hostel living. Air plants (Tillandsia) need no watering at all and are increasingly popular among Manipal students from across India and abroad who want greenery without any maintenance commitment." },
      { question: "Do you deliver plants to Manipal (5 km from Udupi) for student gifting?", answer: "Yes. Manipal (home to Manipal Academy of Higher Education, one of India's largest deemed universities, with 28,000+ students from 57 countries) is within our same-day delivery zone, just 5 km from Udupi city. Manipal campus student residences, Kasturba Medical College, MAHE faculty residences, and the Tech Mahindra Manipal campus are all served within 2–4 hours." }
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
