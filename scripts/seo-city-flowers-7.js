/**
 * Batch 7 — Vijayawada, Patna, Kanpur, Prayagraj, Guwahati, Faridabad
 * node scripts/seo-city-flowers-7.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {

  "vijayawada": {
    cityName: "Vijayawada",
    metaTitle: "Flower Delivery in Vijayawada | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Vijayawada with same-day delivery. Roses, jasmine & bouquets to Benz Circle, Governorpet, Patamata & all areas. From ₹399.",
    h1: "Flower Delivery in Vijayawada",
    metaKeyword: "flower delivery in Vijayawada, online flower delivery Vijayawada, same day flower delivery Vijayawada, florist Vijayawada, send flowers Vijayawada, flowers Benz Circle Governorpet",
    footerContent: `
<h2>Flower Delivery in Vijayawada — Where the Krishna River Carries Every Prayer</h2>
<p>Vijayawada sits at the point where the Krishna river breaks through the Eastern Ghats and spreads into the fertile Krishna delta — one of the most agriculturally productive regions in India. The city itself is named for the Goddess Kanaka Durga, whose hilltop temple at Indrakeeladri has been the spiritual anchor of the region for over two thousand years. Vijayawada is also one of Andhra Pradesh's most commercially energetic cities — its central location, its railway junction (one of the busiest in India), and its role as the effective business capital of the new Andhra Pradesh have given it a drive and confidence that defines its character. RedHeart delivers fresh flowers across Vijayawada with same-day and midnight delivery, starting at ₹399.</p>

<p>Vijayawada's flower supply runs through the wholesale market near Governorpet and the daily market at Besant Road. The Krishna delta's agricultural richness extends to flower farming — jasmine, marigolds, and tuberose are grown extensively in the surrounding Guntur and Krishna districts. The Kanaka Durga temple's daily flower demand alone keeps dozens of flower vendors employed year-round.</p>

<h2>Quick Reference — Flower Delivery in Vijayawada</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijayawada, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Benz Circle, Governorpet, Patamata, Moghalrajpuram, Gunadala, Labbipet, MG Road, One Town, Ajit Singh Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanaka Durga Navratri, Ugadi, Vinayaka Chavithi, Dasara, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, marigolds, roses, tuberose, chrysanthemums</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanaka Durga temple; Krishna delta; AP business capital</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Kanaka Durga Navratri — Nine Nights of Vijayawada's Identity</h2>
<p>The Durga Navratri at Indrakeeladri is Vijayawada's defining event. For nine nights, the Kanaka Durga temple on the hill above the Krishna river is besieged by millions of devotees — the temple trust estimates over 10 lakh devotees visit during Navratri. The Goddess is adorned in a different form (alankaram) each day, requiring specific types of flowers for each avatar's decoration. Devotees bring jasmine, tuberose, marigolds, and seasonal flowers as offerings. The city's hotels and homes are decorated throughout. RedHeart prepares dedicated Navratri stock for Vijayawada, with early-morning delivery for devotees who want to arrive at the temple with fresh flowers from their home puja.</p>

<h2>Benz Circle to Patamata — Vijayawada's Urban Map</h2>
<p>Benz Circle is Vijayawada's commercial heart — the roundabout where the city's major roads converge, surrounded by showrooms, restaurants, and businesses. Governorpet, the old commercial area near the railway station, is the city's most historically active market zone. Patamata, a large residential area with a mix of old families and new apartment complexes, is one of RedHeart's highest-volume delivery zones in the city. Moghalrajpuram, on the hillside near the Undavalli caves, is a quieter residential area with consistent demand. Labbipet, Ajit Singh Nagar, and MG Road round out the city's coverage.</p>

<h2>Why Vijayawada Trusts RedHeart</h2>
<p>Vijayawada moves fast — its railway junction, its markets, its politics all run at an accelerated tempo. RedHeart matches that pace with same-day delivery that keeps its promises and fresh flowers that are worth gifting. In a city where the goddess herself sets the standard for how flowers should be offered, we bring our best every day.</p>
`,
    faqs: [
      { question: "Can I order flowers for Kanaka Durga Navratri in Vijayawada?", answer: "Yes! RedHeart delivers jasmine, marigolds, tuberose, and festival flower offerings for Kanaka Durga Navratri across Vijayawada. We stock up extensively for this nine-day festival and provide early morning delivery for devotees preparing for temple visits." },
      { question: "Is same-day flower delivery available in Benz Circle and Patamata, Vijayawada?", answer: "Yes, RedHeart covers Benz Circle, Governorpet, Patamata, Moghalrajpuram, Gunadala, Labbipet, and all major Vijayawada areas with same-day delivery. Orders placed before 5 PM are delivered within 2–4 hours." },
      { question: "What flowers are most popular in Vijayawada?", answer: "Jasmine (malle) is the daily flower in every Telugu home and essential for temple offerings. Marigolds dominate festival seasons. Roses are the top personal gift. Tuberose is used widely for weddings and religious occasions. RedHeart carries all in fresh condition." },
      { question: "Does RedHeart deliver flowers near the Kanaka Durga temple area?", answer: "Yes, RedHeart delivers to addresses in the Indrakeeladri hill area, Gunadala, One Town, and the old city areas near the temple. For Navratri, we handle pre-temple puja flower orders delivered to homes before devotees head to the hill." },
      { question: "Is midnight flower delivery available in Vijayawada?", answer: "Yes, midnight delivery is available across Vijayawada. Order before 9 PM and choose your time — perfect for birthday surprises in Patamata, Benz Circle, or any Vijayawada neighbourhood." }
    ]
  },

  "patna": {
    cityName: "Patna",
    metaTitle: "Flower Delivery in Patna | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Patna with same-day delivery. Roses, marigolds & Chhath Puja flowers to Boring Road, Kankarbagh, Rajendra Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Patna",
    metaKeyword: "flower delivery in Patna, online flower delivery Patna, same day flower delivery Patna, florist Patna, send flowers Patna, Chhath Puja flowers Patna",
    footerContent: `
<h2>Flower Delivery in Patna — The Ancient City of Pataliputra Blooms Again</h2>
<p>Patna is one of the world's oldest continuously inhabited cities — it was Pataliputra, the capital of the Maurya Empire under Chandragupta Maurya and Ashoka the Great, a city that Greek ambassador Megasthenes described as the most magnificent in the world, larger than either Babylon or Susa. The city's 2,500 years of continuous habitation have layered its identity in ways that few cities can match — it is simultaneously a state capital, a university city (Patna University is one of India's oldest), a river city on the Ganga's southern bank, and the cultural heart of Bihar. RedHeart delivers fresh flowers across Patna with same-day and midnight delivery, starting at ₹399.</p>

<p>Patna's flower supply runs through the wholesale market at Harding Road and the daily market near Patna Junction. Bihar's Ganga plains grow abundant marigolds, and the supply chain from Jharkhand and UP supplements Patna's demand during major festival peaks. Chhath Puja — Bihar's most defining festival — creates the single largest flower demand event in the city's calendar.</p>

<h2>Quick Reference — Flower Delivery in Patna</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patna, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Boring Road, Kankarbagh, Rajendra Nagar, Patliputra Colony, Bailey Road, Ashok Rajpath, Danapur, Saguna More, Bankipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhath Puja (Bihar's greatest festival), Diwali, birthdays, weddings, Guru Gobind Singh Jayanti</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, lotus, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ancient Pataliputra; Maurya Empire capital; Ganga riverfront; Bihar's capital</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Chhath Puja — When Patna's Entire Population Goes to the Ganga</h2>
<p>Chhath Puja is unlike any other Indian festival in the intensity of its collective participation. On the day of the Sandhya Arghya (evening offering), virtually the entire population of Patna walks to the Ganga — Gandhi Ghat, Collectorate Ghat, Patna Sahib Ghat, and dozens of smaller ghats are packed with families standing in the water as the sun sets. The offerings include marigold garlands, tuberose, lotus, and seasonal fruits arranged on bamboo baskets called soop. The scale of flower use during Chhath in Patna has to be seen to be believed — it is measured in tonnes. RedHeart prepares dedicated Chhath Puja stock weeks in advance for Patna, with deliveries beginning two days before Chhath to ensure homes are fully stocked for the ritual preparation.</p>

<h2>Boring Road to Patliputra Colony — Patna's Modern Addresses</h2>
<p>Boring Road is Patna's most prestigious residential and commercial corridor — wide, tree-lined, and lined with the best restaurants, medical institutions, and businesses the city offers. The residential pockets off Boring Road house Bihar's top lawyers, doctors, and business families. Patliputra Colony and Bailey Road are planned residential zones with a government and professional class demographic. Kankarbagh is a large, densely populated residential area where RedHeart maintains one of its highest delivery volumes in the city. Rajendra Nagar is an upscale established zone. Danapur, the cantonment town adjacent to Patna, adds a military township population.</p>

<h2>Why Patna Trusts RedHeart</h2>
<p>Patna is a city that has always known how to endure and how to celebrate. A city that has been capital to empires, that has survived centuries of floods and heat, and that emerges each Chhath Puja with the Ganga's full population standing in gratitude — this city knows what it means to give with the whole heart. RedHeart delivers to that spirit: fresh flowers, reliably, for every occasion from Chhath to birthdays, in the city that ancient Greeks once called the finest in the world.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Chhath Puja flowers in Patna?", answer: "Yes! Chhath Puja is RedHeart's biggest flower event in Patna. We deliver marigold garlands, lotus, tuberose, and soop arrangement flowers starting two days before Chhath. We stock specifically for this festival and ensure delivery to every Patna neighbourhood before the Sandhya Arghya evening." },
      { question: "Is same-day flower delivery available in Boring Road and Kankarbagh, Patna?", answer: "Yes, RedHeart covers Boring Road, Kankarbagh, Rajendra Nagar, Patliputra Colony, Bailey Road, Danapur, and all major Patna areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I get lotus flowers delivered in Patna for puja?", answer: "Yes! Lotus is an important offering flower in Bihar, especially for Chhath Puja and Lakshmi Puja. RedHeart delivers fresh lotus along with marigolds, tuberose, and other puja flowers across Patna." },
      { question: "Does RedHeart deliver to Danapur cantonment in Patna?", answer: "Yes, RedHeart delivers to Danapur cantonment, Danapur town, and cantonment residential areas as part of our full Patna coverage." },
      { question: "Is midnight flower delivery available in Patna?", answer: "Yes, midnight delivery is available across Patna. Order before 9 PM, select your time, and we deliver — ideal for birthday surprises in Boring Road, Kankarbagh, or any Patna address." }
    ]
  },

  "kanpur": {
    cityName: "Kanpur",
    metaTitle: "Flower Delivery in Kanpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kanpur with same-day delivery. Roses, bouquets & arrangements to Civil Lines, Kidwai Nagar, Swaroop Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Kanpur",
    metaKeyword: "flower delivery in Kanpur, online flower delivery Kanpur, same day flower delivery Kanpur, florist Kanpur, send flowers Kanpur, flowers Civil Lines Kanpur",
    footerContent: `
<h2>Flower Delivery in Kanpur — The Leather City Has a Fragrant Side</h2>
<p>Kanpur is UP's industrial powerhouse — the leather and textile industries built the city during the colonial period, the IIT Kanpur on its outskirts has educated generations of India's engineers, and the Ganga runs along its northern edge connecting it to the ancient pilgrimage circuit of the Doab. Kanpur's industrial identity can overshadow its cultural warmth, but those who know the city know better — the family homes of Civil Lines, the Nawabi culinary tradition, and the deep religious observances along the Ganga ghats speak of a city with a layered cultural character. RedHeart delivers fresh flowers across Kanpur with same-day and midnight delivery, starting at ₹399.</p>

<p>Kanpur's flower supply comes from the wholesale market near Parade and the daily market at Bada Chauraha. The Ganga-Yamuna doab's farms supply marigolds and seasonal flowers in volume. Kanpur's Ganga ghats see daily flower offerings, and the city's numerous temples — including the famous Dwarka Dham at Sarsaiya Ghat — create consistent demand year-round.</p>

<h2>Quick Reference — Flower Delivery in Kanpur</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Kidwai Nagar, Swaroop Nagar, Armapur, Kakadeo, Govind Nagar, Kalyanpur, Naveen Market, Harsh Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diwali, Holi, Kanpur Mahotsav, birthdays, weddings, IIT Kanpur events</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Leather & textile capital of UP; IIT Kanpur; Ganga riverfront</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Kanpur's Diwali — The Industrial City's Most Beautiful Night</h2>
<p>Kanpur's Diwali transforms the city. The leather factories go quiet, the markets close early, and the city's families — from the old bungalows of Civil Lines to the densely packed mohallas of Kidwai Nagar — light diyas and exchange sweets and flowers. The Diwali gifting culture in Kanpur is generous: roses and marigolds are exchanged between families, corporate offices receive flower arrangements from their vendors, and the city's numerous confectionery shops pair their mithai boxes with fresh flower arrangements. RedHeart builds Kanpur Diwali stock specifically, maintaining supply during the city's highest-demand week.</p>

<h2>Civil Lines to Kakadeo — Kanpur's Residential Spread</h2>
<p>Civil Lines is Kanpur's colonial-era administrative area — the wide roads, old bungalows, and government institutions give it a stately character. The Kanpur Club on Mall Road, the medical college, and the law courts are all here. Kakadeo and Swaroop Nagar are the city's most affluent modern residential areas, where Kanpur's business and professional class has settled. Govind Nagar and Kalyanpur are large established middle-class areas with consistent gifting demand. Armapur, the industrial township near the defence ordnance factories, has a significant worker and officer population. IIT Kanpur, located on the GT Road towards Lucknow, is a major delivery destination for academic occasion flowers.</p>

<h2>Why Kanpur Orders From RedHeart</h2>
<p>Kanpur is a city that runs on practical efficiency — its leather and textile industries have always valued function and reliability over ceremony. RedHeart matches that value: fresh flowers, on-time delivery, fair prices. No pretence, no compromises on quality. In UP's industrial capital, where the work ethic is serious and the celebrations are genuine, RedHeart is the reliable choice.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Civil Lines and Kakadeo, Kanpur?", answer: "Yes, RedHeart covers Civil Lines, Kakadeo, Swaroop Nagar, Kidwai Nagar, Govind Nagar, Kalyanpur, Armapur, and all major Kanpur areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Does RedHeart deliver flowers to IIT Kanpur campus?", answer: "Yes! RedHeart delivers to IIT Kanpur campus on GT Road for faculty felicitations, student celebrations, farewell flowers, and personal gifting. Same-day delivery available to on-campus addresses." },
      { question: "Can I order Diwali flowers in Kanpur?", answer: "Yes! RedHeart builds dedicated Diwali stock for Kanpur covering marigold torans, rose bouquets, and festival arrangements. We deliver across all Kanpur areas during Diwali week including to corporate offices for vendor gifting and home decorating needs." },
      { question: "What flowers are popular in Kanpur?", answer: "Roses are the top gifting flower year-round. Marigolds dominate Diwali and religious occasions. Tuberose is widely used for weddings and home functions. Gerberas are popular for modern birthday arrangements. RedHeart carries all in fresh condition with same-day delivery." },
      { question: "Is midnight flower delivery available in Kanpur?", answer: "Yes, midnight delivery is available across Kanpur. Order before 9 PM and choose your time — perfect for birthday surprises in Civil Lines, Kakadeo, Swaroop Nagar, or any Kanpur address." }
    ]
  },

  "prayagraj": {
    cityName: "Prayagraj",
    metaTitle: "Flower Delivery in Prayagraj | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Prayagraj with same-day delivery. Roses, Kumbh flowers & bouquets to Civil Lines, George Town, Naini & all areas. From ₹399.",
    h1: "Flower Delivery in Prayagraj",
    metaKeyword: "flower delivery in Prayagraj Allahabad, online flower delivery Prayagraj, same day flower delivery Prayagraj, florist Prayagraj, send flowers Prayagraj, Kumbh Mela flowers",
    footerContent: `
<h2>Flower Delivery in Prayagraj — At the Sangam of Three Sacred Rivers</h2>
<p>Prayagraj — known as Allahabad for most of its modern history and renamed in 2018 — is defined by the Triveni Sangam: the confluence of the Ganga, Yamuna, and the mythical Saraswati rivers. This confluence has been considered the holiest site in Hinduism for millennia — it is where Brahma is said to have performed the first yajna after creation, where Ashoka placed one of his pillars, and where the Kumbh Mela — the largest gathering of human beings in history — occurs every twelve years. The 2019 Kumbh Mela at Prayagraj drew an estimated 240 million visitors. In a city defined by holy waters, flowers are not ornamental — they are an act of reverence. RedHeart delivers fresh flowers across Prayagraj with same-day and midnight delivery, starting at ₹399.</p>

<p>Prayagraj's flower supply comes from the market near Mutthiganj and the wholesale belt near Meerabai Marg. The Ganga-Yamuna Doab's farms supply marigolds in enormous quantities, and the supply chain from Lucknow and Varanasi brings additional variety. The city's numerous temples — the Alopi Devi Mandir, the Hanuman Mandir, the Mankameshwar — create daily flower demand throughout the year.</p>

<h2>Quick Reference — Flower Delivery in Prayagraj</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Prayagraj (Allahabad), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, George Town, Naini, Tagore Town, Mumfordganj, Rajapur, Lukerganj, Allapur, Jhunsi, Phaphamau</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kumbh / Magh Mela, Makar Sankranti (Sangam snan), Diwali, birthdays, High Court occasions</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, lotus, jasmine</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Triveni Sangam; Kumbh Mela; Nehru family city; Allahabad University</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Magh Mela and the City's Sacred Calendar</h2>
<p>Even in years without the Kumbh Mela, Prayagraj hosts the Magh Mela every January — a month-long pilgrimage at the Sangam when millions of devotees come to take a holy dip at the confluence. The tent city that rises each January on the Sangam's banks is the world's largest temporary settlement. During Makar Sankranti, the first major bathing date, flower demand peaks — marigolds and lotus for Sangam offerings, roses for the families of pilgrims who are welcoming returning relatives. RedHeart prepares for both Magh Mela and the triennial Kumbh Ardh Mela and Kumbh Mela with dedicated city-specific stock.</p>

<h2>Civil Lines to Naini — Prayagraj's Two Faces</h2>
<p>Civil Lines is Prayagraj's colonial-era administrative heart — the Allahabad High Court (one of India's oldest and most prestigious), the Allahabad University (established 1887, the "Oxford of the East"), and the stately bungalows of the old administrative families give Civil Lines an intellectual dignity. Anand Bhawan, the Nehru family home now a museum, is here. George Town is the bustling commercial and residential middle-city. Naini, across the Yamuna, is a rapidly developing industrial and residential area. Tagore Town and Mumfordganj are established middle-class residential areas with consistent gifting demand.</p>

<h2>Why Prayagraj Chooses RedHeart</h2>
<p>Prayagraj is a city that understands the sacred and the human equally — a city where the Sangam is literal and metaphorical, where rivers meet and peoples meet, where the ancient and the modern coexist with particular grace. RedHeart's flowers reach every corner of this city — from the Sangam ghats to the High Court corridors — with the freshness and reliability that a city of this stature deserves.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers during Magh Mela and Kumbh Mela in Prayagraj?", answer: "Yes! RedHeart builds dedicated stock for Magh Mela and Kumbh Mela seasons in Prayagraj. We deliver marigolds, lotus, tuberose, and Sangam offering flowers to homes across the city, with early morning delivery available for families preparing for the sacred bathing dates." },
      { question: "Is same-day flower delivery available in Civil Lines and George Town, Prayagraj?", answer: "Yes, RedHeart covers Civil Lines, George Town, Naini, Tagore Town, Mumfordganj, Rajapur, Lukerganj, and all major Prayagraj areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I send flowers to Allahabad High Court area in Prayagraj?", answer: "Yes, RedHeart delivers to the Civil Lines area including Allahabad High Court buildings, nearby offices, and residential addresses. We handle advocate felicitation flowers, retirement arrangements, and professional occasion gifting in Prayagraj's legal community." },
      { question: "What flowers are used for Sangam puja offerings in Prayagraj?", answer: "Marigolds, lotus, and tuberose are the primary Sangam offering flowers. Jasmine strings are also commonly offered at riverside temples. RedHeart delivers all of these fresh to your home ahead of your Sangam visit." },
      { question: "Is midnight flower delivery available in Prayagraj?", answer: "Yes, midnight delivery is available across Prayagraj. Order before 9 PM and choose your time — perfect for birthday and anniversary surprises in Civil Lines, George Town, Naini, or any Prayagraj address." }
    ]
  },

  "guwahati": {
    cityName: "Guwahati",
    metaTitle: "Flower Delivery in Guwahati | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Guwahati with same-day delivery. Roses, orchids & Bihu bouquets to Dispur, Kahilipara, Jalukbari & all areas. From ₹399.",
    h1: "Flower Delivery in Guwahati",
    metaKeyword: "flower delivery in Guwahati, online flower delivery Guwahati, same day flower delivery Guwahati, florist Guwahati, send flowers Guwahati, Bihu flowers Guwahati",
    footerContent: `
<h2>Flower Delivery in Guwahati — Gateway to the Northeast, Where Orchids Grow Wild</h2>
<p>Guwahati is the gateway to Northeast India — the largest city of the seven sister states, situated on the southern bank of the Brahmaputra river where it is still wide and powerful before the plains take over. The Kamakhya temple on Nilachal Hill — one of the 51 Shakti Peethas, the most important tantric temple in India — overlooks the city and the river with a presence that has shaped Guwahati's spiritual identity for fifteen centuries. But Guwahati is also a growing commercial city, the hub of all trade entering and leaving the Northeast, with an IIT, a medical college, and an increasingly confident urban culture. RedHeart delivers fresh flowers across Guwahati with same-day and midnight delivery, starting at ₹399.</p>

<p>Guwahati's flower culture has a unique advantage — the Northeast is one of the world's great biodiversity hotspots for flowers. Wild orchids grow in Assam's forests; the foothills of Meghalaya produce roses and chrysanthemums of exceptional quality; the state flower of Assam is the Foxtail Orchid (Kopou Phool), worn by young women during Bihu. RedHeart sources from local Assam farms and brings the region's natural floral richness to your door.</p>

<h2>Quick Reference — Flower Delivery in Guwahati</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Guwahati, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dispur, Kahilipara, Jalukbari, Beltola, Bhangagarh, Ganeshguri, Sixmile, Zoo Road, Narengi, Christian Basti</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bihu (Rongali / Bohag Bihu — Assamese New Year), Ambubachi Mela, Durga Puja, birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kopou Phool (foxtail orchid — seasonal), roses, marigolds, chrysanthemums, tuberose</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gateway to Northeast India; Kamakhya Shakti Peetha; Brahmaputra city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Bihu — Assam's Joyous Spring Festival</h2>
<p>Rongali Bihu (Bohag Bihu) in April is Assam's most beloved celebration — the Assamese New Year, marking the arrival of spring and the agricultural planting season. Young women wear the Kopou Phool (foxtail orchid) in their hair as a symbol of spring's arrival — it is arguably the most culturally specific flower-wearing tradition in India. The Bihu dance, performed in mekhela chador with Kopou Phool adorning every dancer's hair, is a UNESCO-recognised cultural heritage form. RedHeart delivers seasonal orchids and Bihu-appropriate floral arrangements across Guwahati for this beloved festival. Durga Puja, celebrated with particular cultural richness in Assam and Guwahati's Bengali community, is another major flower occasion.</p>

<h2>Dispur to Narengi — Guwahati's Urban Spread</h2>
<p>Dispur, Assam's capital administrative area within Greater Guwahati, is where the state government institutions and senior officers cluster — formal gifting here is for official occasions with the weight of state ceremonies. Ganeshguri and Sixmile are Guwahati's commercial and middle-class residential zones with high everyday gifting activity. Kahilipara and Beltola are large residential areas with a significant professional and government employee population. Jalukbari, near IIT Guwahati on the Brahmaputra's northern edge, is a growing area with a student and academic population. Narengi on the city's eastern edge rounds out the coverage.</p>

<h2>Why Guwahati Trusts RedHeart</h2>
<p>Guwahati is a city that carries the beauty of the Northeast — its mountains, its river, its orchids — and the ambition of a gateway city building its future. RedHeart brings that same combination: local freshness (Assam's own flower farms and the Northeast's orchid richness) and reliable modern delivery. In the city where the Brahmaputra runs wide and the Kopou Phool blooms in spring, RedHeart is proud to serve.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Bihu flowers and orchids in Guwahati?", answer: "Yes! RedHeart delivers seasonal orchids and Bihu flower arrangements across Guwahati for Rongali Bihu season. We source from Assam's local farms and carry the freshest available flowers for this beloved Assamese festival." },
      { question: "Is same-day flower delivery available in Dispur and Ganeshguri, Guwahati?", answer: "Yes, RedHeart covers Dispur, Ganeshguri, Kahilipara, Beltola, Jalukbari, Bhangagarh, Sixmile, Zoo Road, and all major Guwahati areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order flowers for Durga Puja pandals in Guwahati?", answer: "Yes! RedHeart delivers Durga Puja flowers including marigold garlands, lotus, tuberose, and chrysanthemums for home puja and pandal decoration across Guwahati. We stock up specifically for the Durga Puja season." },
      { question: "Does RedHeart deliver to IIT Guwahati campus?", answer: "Yes, RedHeart delivers to IIT Guwahati in the Jalukbari area. We handle academic occasion flowers, farewell bouquets, and personal gifting to campus addresses." },
      { question: "Is midnight flower delivery available in Guwahati?", answer: "Yes, midnight delivery is available across Guwahati. Order before 9 PM and choose your time — perfect for birthday surprises in Dispur, Ganeshguri, Kahilipara, or any Guwahati neighbourhood." }
    ]
  },

  "faridabad": {
    cityName: "Faridabad",
    metaTitle: "Flower Delivery in Faridabad | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Faridabad with same-day delivery. Roses, bouquets & arrangements to NIT, Sector 15, Ballabhgarh & all areas. From ₹399.",
    h1: "Flower Delivery in Faridabad",
    metaKeyword: "flower delivery in Faridabad, online flower delivery Faridabad, same day flower delivery Faridabad, florist Faridabad, send flowers Faridabad, flowers NIT Sector Faridabad",
    footerContent: `
<h2>Flower Delivery in Faridabad — Haryana's Industrial City with Delhi's Gifting Culture</h2>
<p>Faridabad is Haryana's largest city and one of the National Capital Region's major industrial hubs — its factories produce everything from tractors to glassware to textiles, and its proximity to Delhi (the Delhi-Faridabad border is essentially seamless) has given it a metropolitan character that most purely industrial cities lack. The Aravalli hills form Faridabad's eastern border, the Yamuna flows to its west, and the Delhi-Agra NH-44 runs through its spine. The city's residents live with one foot in Haryana and one foot in the national capital's orbit — and their gifting culture reflects that dual identity: grounded in Haryanvi tradition but comfortable with modern online ordering. RedHeart delivers fresh flowers across Faridabad with same-day and midnight delivery, starting at ₹399.</p>

<p>Faridabad's flower supply benefits from its NCR position — proximity to Delhi's Ghazipur Phool Mandi means the same fresh supply chain that serves Delhi also reaches Faridabad within hours. Local marigold farms in Ballabhgarh and Palwal supplement the Delhi supply. The city's large Punjabi community, many of whom migrated post-Partition, maintains active Gurpurab and festival gifting traditions.</p>

<h2>Quick Reference — Flower Delivery in Faridabad</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Faridabad, Haryana (NCR)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">NIT Faridabad, Sector 15/16/21/28, Ballabhgarh, NHPC Colony, Tigaon, Neharpar, Surajkund, Old Faridabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diwali, Lohri, Holi, Gurpurabs, birthdays, industrial sector events</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gladioli, gerberas, tuberose</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haryana's largest city; NCR industrial hub; Surajkund Mela city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Surajkund Mela and Faridabad's Cultural Calendar</h2>
<p>The Surajkund International Crafts Mela, held every February at Surajkund on the Aravalli hillside near Faridabad, is India's largest crafts fair — artisans from 30+ states and 20+ countries display their work over 14 days. The mela brings a cultural vibrancy to Faridabad that the city celebrates with pride. Flowers are part of the Surajkund aesthetic — many stalls and cultural displays use fresh flower decorations, and the February season coincides with Valentine's Day, creating a peak gifting period. RedHeart maintains strong supply during February for Faridabad, combining Valentine's Day rose demand with Surajkund Mela floral requirements.</p>

<h2>NIT to Neharpar — Faridabad's Residential Zones</h2>
<p>NIT (New Industrial Town) Faridabad is the city's original planned township — a grid of sectors housing workers and officers from the industrial complex. Sector 15, 16, 21, and 28 are well-established residential areas with a stable family-oriented gifting culture. Ballabhgarh, to the south, is a growing town with its own commercial energy. Neharpar (Greater Faridabad), across the Agra Canal, is the city's newest and most modern residential development — large apartment complexes housing young professional families who order flowers online regularly. NHPC Colony, the township of the National Hydroelectric Power Corporation, is a self-contained community with strong occasion-gifting culture.</p>

<h2>Why Faridabad Chooses RedHeart</h2>
<p>Faridabad works hard and celebrates genuinely. A city built on industrial labour respects services that also work hard — that deliver what they promise, that show up on time, that maintain quality through the effort of consistent sourcing. RedHeart's Faridabad service is exactly that. From the factory floor farewell to the Neharpar apartment birthday surprise, we deliver with the same reliability that this working city expects from everything it uses.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in NIT and Sector areas of Faridabad?", answer: "Yes, RedHeart covers NIT Faridabad, Sectors 15/16/21/28, Ballabhgarh, NHPC Colony, Neharpar, Surajkund, and all major Faridabad areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Does RedHeart deliver flowers to Neharpar (Greater Faridabad)?", answer: "Yes! Neharpar is fully covered by RedHeart. The new residential developments across the Agra Canal — apartment complexes and townships — are regular delivery destinations. Same-day delivery available." },
      { question: "Can I order flowers during the Surajkund Mela period in Faridabad?", answer: "Yes! RedHeart maintains strong February stock for Faridabad coinciding with Surajkund Mela and Valentine's Day — Faridabad's biggest dual gifting period. Rose bouquets, mixed arrangements, and bulk corporate flower orders all available." },
      { question: "What flowers are popular in Faridabad?", answer: "Roses are the top gifting flower year-round. Gladioli are popular for weddings and major celebrations in Haryanvi tradition. Marigolds dominate Diwali and religious occasions. Gerberas are popular for modern birthday arrangements. All available with same-day Faridabad delivery." },
      { question: "Is midnight flower delivery available in Faridabad?", answer: "Yes, midnight delivery is available across Faridabad including Neharpar, NIT sectors, and Ballabhgarh. Order before 9 PM and choose your time — perfect for birthday surprises anywhere in Faridabad." }
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
  console.log("\nDone — batch 7 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
