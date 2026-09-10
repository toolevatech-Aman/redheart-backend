// Cakes Batch 11 — 15 cities:
// UP: Bulandshahr, Etawah
// Maharashtra: Ahmednagar, Latur, Jalgaon, Chandrapur
// Tamil Nadu: Thiruvannamalai, Kumbakonam
// Gujarat: Nadiad, Bharuch
// Bihar: Begusarai, Munger
// Kerala: Thrissur, Kannur
// Goa: Panaji

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bulandshahr": {
    cityName: "Bulandshahr",
    metaTitle: "Cake Delivery in Bulandshahr | Western UP | RedHeart",
    metaDescription: "Order cakes online in Bulandshahr. Same-day delivery across Bulandshahr. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bulandshahr",
    metaKeyword: "cake delivery bulandshahr, order cake online bulandshahr, birthday cake bulandshahr, custom cake bulandshahr, same day cake delivery bulandshahr civil lines anupshaher road sikandrabad",
    footerContent: `
<h2>Cake Delivery in Bulandshahr — Western UP's Industrial Hub and Sugar Belt City</h2>
<p>Bulandshahr — a major city in western Uttar Pradesh's sugar belt (home to several large sugar mills and associated distilleries), an industrial city known for glass and chemical manufacturing, and the administrative hub for one of UP's most densely populated districts (Bulandshahr district borders the NCR, and its towns like Sikandrabad and Khurja are rapidly urbanising as part of greater NCR expansion) — is a city of growing commercial importance. Khurja (in Bulandshahr district) is famous as India's "Pottery City" — Khurja's ceramic industry produces a massive share of India's crockery, tiles, and sanitary ware, employing lakhs of potters in a centuries-old craft tradition. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from anniversary surprises in the Sikandrabad residential belt to student cakes near the Bulandshahr colleges — RedHeart covers all Bulandshahr zones: Central (Civil Lines, Anupshaher Road, Station Road), North (Delhi Road, Sikandrabad, Jewar), South (Khurja, Atrauli Road), East (Anupshahr, Garh Mukteshwar), West (Shikarpur, Agauta Road).</p>
<p>Our Bulandshahr cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Khurja pottery-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bulandshahr, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Anupshaher Road, Station Road, Sikandrabad, Khurja, Delhi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bulandshahr?", answer: "Yes, same-day cake delivery is available across all Bulandshahr areas — Civil Lines, Anupshaher Road, Station Road, and Sikandrabad — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Khurja (Bulandshahr district)?", answer: "Yes, Khurja — India's famous Pottery City in Bulandshahr district — is covered under our same-day delivery zone." },
      { question: "Are eggless cakes available in Bulandshahr?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bulandshahr delivery." }
    ]
  },

  "etawah": {
    cityName: "Etawah",
    metaTitle: "Cake Delivery in Etawah | Chambal Valley Lion City UP | RedHeart",
    metaDescription: "Order cakes online in Etawah. Same-day delivery across Etawah. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Etawah",
    metaKeyword: "cake delivery etawah, order cake online etawah, birthday cake etawah, custom cake etawah, same day cake delivery etawah civil lines collectrate road agra road kanpur road lion safari",
    footerContent: `
<h2>Cake Delivery in Etawah — Chambal Valley's City, Lion Safari Park, and Agra-Kanpur Corridor Hub</h2>
<p>Etawah — the historic city on the Yamuna and Chambal river junction in central UP, home to the Etawah Lion Safari (India's second lion safari after Gir, established in 2019 — a project to rewild Asiatic lions from Gir into the Chambal ecosystem, a landmark conservation effort), birthplace of the legendary Mulayam Singh Yadav (the Samajwadi Party founder and three-time UP Chief Minister — Etawah is the heartland of Yadav community politics in UP), famous for the Chambal ravines (the dacoits' traditional refuge — the Chambal ravine system spanning Etawah, Bhind, and Morena is one of India's most dramatic and unusual landscapes), and a major agricultural city in the Yamuna-Chambal doab — is a city of unique cultural and ecological significance. From birthday parties in the Civil Lines area to corporate cakes at the large government offices, from anniversary surprises near the Etawah collectorate to student cakes near the Rajarshi Tandon Open University centre — RedHeart covers all Etawah zones: Central (Civil Lines, Collectorate Road, Station Road), North (Agra Road, Saifai, Mainpuri Road), South (Kanpur Road, Phaphund, Bharthana), East (Jhansi Road, Auraiya Road), West (Chambal Expressway belt, Bhind Road).</p>
<p>Our Etawah cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Lion Safari-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Etawah, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Collectorate Road, Station Road, Agra Road, Kanpur Road, Saifai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Lion Safari Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Etawah?", answer: "Yes, same-day cake delivery is available across all Etawah areas — Civil Lines, Collectorate Road, Station Road, Agra Road, and Kanpur Road — for orders placed before 3 PM." },
      { question: "Do you have Asiatic Lion-themed cakes in Etawah?", answer: "Yes! The Etawah Lion Safari — India's second lion safari established to rewild Asiatic lions into the Chambal ecosystem — is a matter of local pride, and we offer Lion Safari-theme fondant cakes for this unique occasion." },
      { question: "Are eggless cakes available in Etawah?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Etawah delivery." }
    ]
  },

  "ahmednagar": {
    cityName: "Ahmednagar",
    metaTitle: "Cake Delivery in Ahmednagar | Shirdi Gateway Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Ahmednagar. Same-day delivery across Ahmednagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ahmednagar",
    metaKeyword: "cake delivery ahmednagar, order cake online ahmednagar, birthday cake ahmednagar, custom cake ahmednagar, same day cake delivery ahmednagar savedi station road solapur road shirdi",
    footerContent: `
<h2>Cake Delivery in Ahmednagar — Gateway to Shirdi, Maharashtra's Military Training Hub, and Deccan Plateau Industrial City</h2>
<p>Ahmednagar — Maharashtra's 7th-largest city, the gateway to Shirdi (the global pilgrimage town of Sai Baba — Ahmednagar district is where Shirdi is located, and millions of pilgrims pass through Ahmednagar's railway station and bus stand on their way to Sai Baba's samadhi), home to the Armoured Corps Centre and School (ACCS — India's premier tank warfare training establishment, housed in the historic Ahmednagar Fort complex, with Nehru's Prison Museum inside the fort where Jawaharlal Nehru wrote "The Discovery of India" during his 1942–45 imprisonment), a major sugar and cotton processing city in the Deccan's agricultural belt — is a city of historical depth and transit importance. From birthday parties in the Savedi residential area to corporate cakes at the military cantonment, from Sai devotee birthday cakes to anniversary surprises in the Station Road belt — RedHeart covers all Ahmednagar zones: Central (Station Road, Savedi Naka, Zenda Chowk), North (Savedi, Rahata Road, Shirdi Road), South (Solapur Road, Shrirampur Road), East (Aurangabad Road, Pathardi), West (Pune Road, Nagar Road, Jamkhed).</p>
<p>Our Ahmednagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sai Baba / Shirdi-inspired devotional theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ahmednagar, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Savedi, Zenda Chowk, Solapur Road, Shirdi Road, Rahata Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Sai Baba Fondant, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ahmednagar?", answer: "Yes, same-day cake delivery is available across all Ahmednagar areas — Station Road, Savedi, Zenda Chowk, Solapur Road, and Shirdi Road — for orders placed before 3 PM." },
      { question: "Do you make Sai Baba devotional cakes in Ahmednagar?", answer: "Yes! Shirdi's global Sai Baba pilgrimage — which passes through Ahmednagar — inspires our devotional Sai Baba-theme cakes. These beautiful fondant cakes are perfect for Sai devotees' birthdays and milestones." },
      { question: "Are eggless cakes available in Ahmednagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ahmednagar delivery." }
    ]
  },

  "latur": {
    cityName: "Latur",
    metaTitle: "Cake Delivery in Latur | Marathwada Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Latur. Same-day delivery across Latur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Latur",
    metaKeyword: "cake delivery latur, order cake online latur, birthday cake latur, custom cake latur, same day cake delivery latur civil lines ausa road udgir road main market",
    footerContent: `
<h2>Cake Delivery in Latur — Marathwada's Resilient City, Soybean Capital, and 1993 Earthquake Rebuilding Story</h2>
<p>Latur — the major city of Marathwada's southeastern corner, a city shaped by resilience (the 1993 Latur Earthquake — 6.2 magnitude at 3:56 AM, killing 9,748 people in the deadliest earthquake in Maharashtra's history — devastated Latur and neighbouring Osmanabad, prompting the largest rebuilding effort in post-Independence India), today one of Maharashtra's fastest-growing cities in terms of infrastructure and education, the "Soybean Capital of Maharashtra" (Marathwada's black soil belt produces vast quantities of soybean — a cash crop that replaced jowar and revived Latur's agricultural economy after 1993), and home to Latur's remarkable educational renaissance (Latur Pattern — the famous coaching culture for IIT-JEE and medical entrance exams that emerged here, producing extraordinary results from a drought-prone, post-earthquake region) — is a city of indomitable spirit. From birthday parties in the Civil Lines area to coaching class cakes at the many Latur Pattern institutes, from anniversary surprises in the Ausa Road belt to family cakes in the rebuilt residential colonies — RedHeart covers all Latur zones: Central (Civil Lines, Station Road, Main Market), North (Ausa Road, Udgir Road, Nanded Road), South (Osmanabad Road, Chakur Road), East (Gulbarga Road, Bidar Road), West (Solapur Road, Nilanga, Renapur).</p>
<p>Our Latur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Latur, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Main Market, Ausa Road, Udgir Road, Osmanabad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Latur?", answer: "Yes, same-day cake delivery is available across all Latur areas — Civil Lines, Station Road, Main Market, Ausa Road, and Udgir Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Latur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Latur delivery." },
      { question: "Do you deliver midnight cakes in Latur?", answer: "Yes, midnight birthday cake delivery is available across Latur's central and residential zones." }
    ]
  },

  "jalgaon": {
    cityName: "Jalgaon",
    metaTitle: "Cake Delivery in Jalgaon | Banana City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Jalgaon. Same-day delivery across Jalgaon. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Jalgaon",
    metaKeyword: "cake delivery jalgaon, order cake online jalgaon, birthday cake jalgaon, custom cake jalgaon, same day cake delivery jalgaon civil lines ring road navi peth ajanta road nmmc",
    footerContent: `
<h2>Cake Delivery in Jalgaon — Banana Capital of India, Ajanta Caves' Gateway, and North Maharashtra's Commercial Hub</h2>
<p>Jalgaon — North Maharashtra's most important city, the "Banana Capital of India" (Jalgaon district produces the largest quantity of bananas in India — the distinctive Jalgaon Shrimanti banana, Lal Kela, and Grand Naine varieties grown on the Tapi-Girna river alluvial plains are exported to the Middle East and Southeast Asia — banana cultivation is the backbone of the local economy, giving Jalgaon the title "Banana City"), the nearest major railway junction to the Ajanta Caves (UNESCO World Heritage Site — the 2nd-century BC to 6th-century AD Buddhist cave paintings in Aurangabad district, 60 km from Jalgaon, accessed via the Jalgaon-Chalisgaon route), and a major cotton ginning and gold jewellery centre — is a city of agricultural, commercial, and heritage significance. From birthday parties in the modern Ring Road area to corporate cakes at the large cotton gins, from anniversary surprises in the Navi Peth residential belt to student birthdays near NMMC (North Maharashtra University campus) — RedHeart covers all Jalgaon zones: Central (Civil Lines, Ring Road, Station Road), North (Ajanta Road, Chalisgaon Road, Dhule Road), South (Navi Peth, Bhusawal Road, Rashiwad), East (Aurangabad Road, Chalisgaon), West (Dhule Road, Amalner, Pachora).</p>
<p>Our Jalgaon cake range: Chocolate, Black Forest, Red Velvet, Banana-Butterscotch (Jalgaon banana!), Mango, Photo Cakes, Fondant Ajanta Cave-inspired art theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalgaon, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Ring Road, Station Road, Navi Peth, Ajanta Road, Bhusawal Road, NMU area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banana-Butterscotch, Chocolate, Ajanta Art Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have banana-flavoured cakes in Jalgaon?", answer: "Yes! Jalgaon's famous banana belt — the largest banana-producing region in India — inspires our Banana-Butterscotch cake. Made with fresh banana and butterscotch cream, it's our Jalgaon local speciality." },
      { question: "Can I get same-day cake delivery in Jalgaon?", answer: "Yes, same-day cake delivery is available across all Jalgaon areas — Civil Lines, Ring Road, Station Road, Navi Peth, and Ajanta Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jalgaon?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jalgaon delivery." }
    ]
  },

  "chandrapur": {
    cityName: "Chandrapur",
    metaTitle: "Cake Delivery in Chandrapur | Tiger Reserve City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Chandrapur. Same-day delivery across Chandrapur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chandrapur",
    metaKeyword: "cake delivery chandrapur, order cake online chandrapur, birthday cake chandrapur, custom cake chandrapur, same day cake delivery chandrapur civil lines panchasheel nagar ram nagar tadoba",
    footerContent: `
<h2>Cake Delivery in Chandrapur — Tadoba Tiger Reserve's City, India's Power City, and Vidarbha's Coal Capital</h2>
<p>Chandrapur — Maharashtra's easternmost major city in the Vidarbha region, gateway to Tadoba-Andhari Tiger Reserve (one of India's most visited tiger reserves, famous for its excellent tiger sightings — Tadoba's density of tigers is among the highest in India, making it a favourite for wildlife photographers), the "Power City of India" (Chandrapur Super Thermal Power Station — Maharashtra's largest coal-based thermal power plant, with 2,920 MW installed capacity, powered by coal from the Chandrapur coalfields), home to some of India's largest cement and paper mills, and a city with a significant tribal heritage (Gond, Pardhan, and Kolam tribal communities of the Eastern Vidarbha forests have their cultural roots here) — is a city of extraordinary ecological and industrial contrasts. From birthday parties in the Civil Lines area to corporate cakes at the large thermal power plant township, from anniversary surprises in Panchasheel Nagar to wildlife researcher and forest officer celebration cakes near the Tadoba gates — RedHeart covers all Chandrapur zones: Central (Civil Lines, Ram Nagar, Gandhi Chowk), North (Panchasheel Nagar, Mul Road, Gondpipri), South (Nagpur Road, Gadchandur, Rajura), East (Ballarpur Road, Bhadravati), West (Wardha Road, Tadoba Gate Road).</p>
<p>Our Chandrapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Tadoba Tiger-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandrapur, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Ram Nagar, Panchasheel Nagar, Gandhi Chowk, Mul Road, Nagpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tadoba Tiger Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chandrapur?", answer: "Yes, same-day cake delivery is available across all Chandrapur areas — Civil Lines, Ram Nagar, Panchasheel Nagar, Gandhi Chowk, and Mul Road — for orders placed before 3 PM." },
      { question: "Do you have Tadoba Tiger Reserve-themed cakes in Chandrapur?", answer: "Yes! Tadoba-Andhari Tiger Reserve — one of India's best places to see tigers in the wild, located just outside Chandrapur — inspires our Tadoba Tiger fondant cakes, a unique local speciality." },
      { question: "Are eggless cakes available in Chandrapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chandrapur delivery." }
    ]
  },

  "thiruvannamalai": {
    cityName: "Thiruvannamalai",
    metaTitle: "Cake Delivery in Thiruvannamalai | Arunachala Temple City TN | RedHeart",
    metaDescription: "Order cakes online in Thiruvannamalai. Same-day delivery across Thiruvannamalai. Cakes from ₹499.",
    h1: "Online Cake Delivery in Thiruvannamalai",
    metaKeyword: "cake delivery thiruvannamalai, order cake online thiruvannamalai, birthday cake thiruvannamalai, custom cake thiruvannamalai, same day cake delivery thiruvannamalai girivalam road ramana ashram anna nagar",
    footerContent: `
<h2>Cake Delivery in Thiruvannamalai — Arunachala Hill's Sacred City, Ramana Maharshi's Ashram, and Karthigai Deepam's Light</h2>
<p>Thiruvannamalai — one of Tamil Nadu's most sacred Shaiva pilgrimage cities, home to the Annamalaiyar Temple (one of the Panchabhutha Stalas — the five elemental Shiva temples — representing the element of fire, dedicated to Lord Agni Lingam), the spiritual home of Ramana Maharshi (the 20th century's greatest Advaita Vedanta sage, whose Ramana Ashram here still draws spiritual seekers from around the world), site of the Karthigai Deepam (the massive fire-beacon lit on Arunachala hill during the Karthigai festival — visible for 30+ km, symbolising the light of liberation — attended by millions), and the base of the 2,668-foot Arunachala hill (which devotees circumambulate — Girivalam — barefoot, a 14-km pradakshina circuit performed by lakhs on Pournami nights) — is a city of deep spiritual magnetism. From birthday parties in the Anna Nagar residential area to spiritual retreat cakes at the Ramana Ashram guest complex, from anniversary surprises along the Girivalam Road to student cakes near the Government Medical College — RedHeart covers all Thiruvannamalai zones: Central (Girivalam Road, Chengam Road, Anna Nagar), North (Polur Road, Vettavalam), South (Gingee Road, Vandavasi Road), East (Kancheepuram Road, Arani), West (Salem Road, Chengam, Kalasapakkam).</p>
<p>Our Thiruvannamalai cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Arunachala / Karthigai Deepam-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thiruvannamalai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Girivalam Road, Chengam Road, Anna Nagar, Polur Road, Gingee Road, Ramana Ashram area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Arunachala Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Thiruvannamalai?", answer: "Yes, same-day cake delivery is available across all Thiruvannamalai areas — Girivalam Road, Chengam Road, Anna Nagar, and the Ramana Ashram area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Thiruvannamalai?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Thiruvannamalai delivery." },
      { question: "Do you have Karthigai Deepam-themed cakes in Thiruvannamalai?", answer: "Yes! The Karthigai Deepam — the spectacular fire beacon lit on Arunachala that draws millions — is one of our special theme designs. Arunachala and Annamalaiyar Temple-inspired fondant cakes are available for same-day delivery." }
    ]
  },

  "kumbakonam": {
    cityName: "Kumbakonam",
    metaTitle: "Cake Delivery in Kumbakonam | Temple City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Kumbakonam. Same-day delivery across Kumbakonam. Cakes from ₹499.",
    h1: "Online Cake Delivery in Kumbakonam",
    metaKeyword: "cake delivery kumbakonam, order cake online kumbakonam, birthday cake kumbakonam, custom cake kumbakonam, same day cake delivery kumbakonam TSR big street head post office sarangapani",
    footerContent: `
<h2>Cake Delivery in Kumbakonam — Town of 18 Sacred Tanks, Mahamaham Festival City, and Kaveri Delta's Temple Capital</h2>
<p>Kumbakonam — one of Tamil Nadu's most sacred Shaiva temple cities in the fertile Kaveri delta region, home to over 188 temples (including the magnificent Sarangapani, Kumbeswara, Chakrapani, and Nagaswara temples — a concentration of Chola-period Dravidian architecture unmatched anywhere in the world), famous for the Mahamaham (a massive 12-year pilgrimage festival at the Mahamaham Tank — attended by 30+ million pilgrims — where devotees bathe to wash away sins), the city where South India's most coveted filter coffee beans are roasted (Kumbakonam degree coffee — famous for the distinctive, dark degree filter — is considered the gold standard of filter coffee across Tamil Nadu), and a centre of Carnatic classical music, bronze casting, and silk weaving — is a city of extraordinary cultural depth in the Kaveri heartland. From birthday parties in the TSR Big Street area to corporate cakes at the silk weaving mills, from anniversary surprises near the Head Post Office to student cakes at the SASTRA Deemed University campus — RedHeart covers all Kumbakonam zones: Central (TSR Big Street, Head Post Office, Sarangapani Street), North (Mahamaham Tank area, Porayar Road), South (Thanjavur Road, Papanasam Road), East (Mayiladuthurai Road, Sirkazhi), West (Trichy Road, Manapparai Road).</p>
<p>Our Kumbakonam cake range: Chocolate, Black Forest, Red Velvet, Filter Coffee-Cream (Kumbakonam degree coffee!), Mango, Photo Cakes, Fondant Mahamaham / Temple-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kumbakonam, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">TSR Big Street, Head Post Office, Sarangapani Street, Mahamaham Tank area, Thanjavur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Filter Coffee-Cream, Chocolate, Mahamaham Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Kumbakonam degree coffee-flavoured cake?", answer: "Yes! The world-famous Kumbakonam degree filter coffee — the gold standard of South Indian filter coffee, roasted and brewed in the old-world way — inspires our Coffee-Cream cake. A unique Kaveri delta flavour, available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Kumbakonam?", answer: "Yes, same-day cake delivery is available across all Kumbakonam areas — TSR Big Street, Head Post Office, Mahamaham Tank area, and Thanjavur Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kumbakonam?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kumbakonam delivery." }
    ]
  },

  "nadiad": {
    cityName: "Nadiad",
    metaTitle: "Cake Delivery in Nadiad | Eggless Cakes Gujarat | RedHeart",
    metaDescription: "Order cakes online in Nadiad. Same-day delivery across Nadiad. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Nadiad",
    metaKeyword: "cake delivery nadiad, order cake online nadiad, birthday cake nadiad eggless, custom cake nadiad, same day cake delivery nadiad station road college road mahatma gandhi hospital",
    footerContent: `
<h2>Cake Delivery in Nadiad — Sardar Patel's District, Gujarat's Charotar Heartland, and Anand's Twin Education City</h2>
<p>Nadiad — the administrative headquarters of Kheda district in Gujarat's Charotar region, birthplace and home district of Sardar Vallabhbhai Patel (the "Iron Man of India" — the Deputy PM who unified 562 princely states into the Indian Union — whose ancestral home is in Karamsad, 10 km from Nadiad), a city with a strong Patidar community heritage (the Charotar Patidars are among India's most prosperous and globally spread farming communities — large Patidar diaspora in the UK, USA, and East Africa trace roots to Nadiad and the Charotar belt), and known for the Dhrupad Gram (a music village research and preservation centre for the ancient Dhrupad classical tradition) — is a city of cultural and civic pride. All our Nadiad cakes are eggless and Pure Veg — from birthday parties in the College Road area to corporate cakes at the large Nadiad hospital complexes, from anniversary surprises in the Navjivan colony to student cakes at Nadiad's engineering and pharmacy colleges — RedHeart covers Nadiad, Kaira Road, Station Road, GIDC Nadiad, and nearby Karamsad.</p>
<p>Our Nadiad cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Mango, Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nadiad, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, College Road, Kaira Road, GIDC Nadiad, Karamsad, MG Hospital area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Chocolate, Photo Cake, Black Forest, Red Velvet (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Nadiad?", answer: "Yes! All our Nadiad cakes are 100% eggless and Pure Veg — suitable for Nadiad's Patidar and Gujarati vegetarian community." },
      { question: "Can I get same-day eggless cake delivery in Nadiad?", answer: "Yes, same-day eggless cake delivery is available across all Nadiad areas — Station Road, College Road, GIDC, and Karamsad — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Karamsad (near Nadiad)?", answer: "Yes, Karamsad — Sardar Patel's ancestral village, 10 km from Nadiad — is covered under the Nadiad delivery zone for same-day delivery." }
    ]
  },

  "bharuch": {
    cityName: "Bharuch",
    metaTitle: "Cake Delivery in Bharuch | Chemical City Gujarat | RedHeart",
    metaDescription: "Order cakes online in Bharuch. Same-day delivery across Bharuch. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Bharuch",
    metaKeyword: "cake delivery bharuch, order cake online bharuch, birthday cake bharuch eggless, custom cake bharuch, same day cake delivery bharuch ankleshwar GIDC station road zadeshwar narmada",
    footerContent: `
<h2>Cake Delivery in Bharuch — India's Chemical Valley, Ancient Broach Port, and Narmada River's Gulf City</h2>
<p>Bharuch — one of India's oldest port cities (ancient Broach — "Bharukaccha" — was India's most important export port in the 1st–5th century CE, exporting cotton, muslin, spices, and semiprecious stones to Rome, Arabia, and Southeast Asia via the Silk Route's maritime branch), today home to the Ankleshwar GIDC (Gujarat Industrial Development Corporation) — one of Asia's largest chemical and pharmaceutical industrial estates, producing a staggering variety of chemicals, dyes, APIs (Active Pharmaceutical Ingredients), and specialty chemicals (Bharuch-Ankleshwar is called "India's Chemical Valley") — and situated on the Narmada River at its meeting with the Gulf of Khambhat — is a city of ancient maritime history and modern chemical industry significance. All our Bharuch cakes are eggless and Pure Veg — from birthday parties in the Zadeshwar residential belt to corporate cakes at the large Ankleshwar GIDC offices, from anniversary surprises near the Narmada Bridge to student cakes at the engineering colleges — RedHeart covers Bharuch, Ankleshwar, Zadeshwar, Jambusar, Amod, and the NH-48 industrial corridor.</p>
<p>Our Bharuch cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Mango, Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharuch, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Zadeshwar, Ankleshwar GIDC, Jambusar, Amod, Narmada Bridge area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Chocolate, Photo Cake, Black Forest, Red Velvet (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Bharuch?", answer: "Yes! All our Bharuch cakes are 100% eggless and Pure Veg — suitable for Bharuch's Gujarati vegetarian community." },
      { question: "Do you deliver cakes to Ankleshwar GIDC from Bharuch?", answer: "Yes, Ankleshwar's industrial estate (one of Asia's largest chemical GIDC zones) is covered under the Bharuch delivery zone for same-day delivery." },
      { question: "Can I get same-day eggless cake delivery in Bharuch?", answer: "Yes, same-day eggless cake delivery is available across all Bharuch areas — Station Road, Zadeshwar, Ankleshwar, and Jambusar — for orders placed before 3 PM." }
    ]
  },

  "begusarai": {
    cityName: "Begusarai",
    metaTitle: "Cake Delivery in Begusarai | Lenin Nagari Bihar | RedHeart",
    metaDescription: "Order cakes online in Begusarai. Same-day delivery across Begusarai. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Begusarai",
    metaKeyword: "cake delivery begusarai, order cake online begusarai, birthday cake begusarai, custom cake begusarai, same day cake delivery begusarai civil lines station road HPCL refinery kanhauli",
    footerContent: `
<h2>Cake Delivery in Begusarai — Bihar's Lenin Nagari, HPCL Refinery City, and Gangetic Plains Industrial Hub</h2>
<p>Begusarai — the headquarters of Begusarai district in Bihar, known as "Lenin Nagari" (Lenin's City) due to its strong communist political tradition — the Communist Party of India had its largest base here in Bihar, and left-wing ideology shaped the city's labour and political culture through the 1970s–90s), home to the HPCL Barauni Refinery (one of Bihar's most important industrial landmarks — the Barauni Refinery, established in 1964, was Bihar's first major industrial project under the Soviet collaboration of Nehru's five-year plans, and remains a major employer), the Barauni Fertilizer Factory, and the Barauni Thermal Power Station — a city where industry meets the Gangetic plains — is a significant commercial centre in North Bihar. From birthday parties in the Civil Lines area to corporate cakes at the large HPCL and BPCL refinery townships, from anniversary surprises in the Station Road belt to student cakes near the Begusarai colleges — RedHeart covers all Begusarai zones: Central (Civil Lines, Station Road, Bazar Samiti Road), North (Kanhauli, Bihat, Barauni), South (Teghra Road, Sahebpur Kamal), East (Khagaria Road, Simaria), West (Muzaffarpur Road, Godamghat, Desri).</p>
<p>Our Begusarai cake range: Chocolate, Black Forest, Red Velvet, Mango (Hajipur Langra!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Begusarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Bazar Samiti Road, Barauni Refinery area, Kanhauli, Teghra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Begusarai?", answer: "Yes, same-day cake delivery is available across all Begusarai areas — Civil Lines, Station Road, Barauni Refinery township, Kanhauli, and Teghra — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Begusarai?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Begusarai delivery." },
      { question: "Do you deliver midnight cakes in Begusarai?", answer: "Yes, midnight birthday cake delivery is available across Begusarai's central and residential zones." }
    ]
  },

  "munger": {
    cityName: "Munger",
    metaTitle: "Cake Delivery in Munger | Bihar Yoga Capital | RedHeart",
    metaDescription: "Order cakes online in Munger. Same-day delivery across Munger. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Munger",
    metaKeyword: "cake delivery munger, order cake online munger, birthday cake munger, custom cake munger, same day cake delivery munger yoga ashram jail road ganga ghat kasim bazar",
    footerContent: `
<h2>Cake Delivery in Munger — Bihar Yoga School's City, ITC Cigarette Capital, and Ancient Ganga Fort City</h2>
<p>Munger — one of Bihar's historically important cities on the south bank of the Ganges, known globally as the "World Yoga Capital" (Bihar School of Yoga — founded by Swami Satyananda Saraswati in 1964 — is one of the world's most influential yoga institutions, training millions of yoga teachers globally and establishing the Satyananda yoga tradition; the ashram's campus is a world-class yoga university), one of India's most important tobacco and cigarette manufacturing centres (ITC's Munger Cigarette Factory — one of ITC's oldest and largest cigarette manufacturing facilities, producing major ITC brands), home to the historic Munger Fort (on a hill above the Ganges — a natural fortress used by the Mughals, the British, and the Nawabs of Bengal), and a city with a large Bihar School of Yoga spiritual population — is a city of unusual contrasts between asceticism and industry. From birthday parties in the Kasim Bazar area to yoga teacher training celebration cakes at the Bihar School of Yoga, from anniversary surprises near the Ganga Ghat to student cakes at the Munger University campus — RedHeart covers all Munger zones: Central (Kasim Bazar, Jail Road, Station Road), North (Yoga Ashram area, Ganga Ghat, Munger Fort area), South (Jamalpur, Kharagpur Lake), East (Surajgarha, Lakhopur Road), West (Jahanabad Road, Bariyarpur).</p>
<p>Our Munger cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Yoga / Ganga theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Munger, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasim Bazar, Jail Road, Station Road, Bihar School of Yoga area, Ganga Ghat, Jamalpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Yoga Fondant, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Munger?", answer: "Yes, same-day cake delivery is available across all Munger areas — Kasim Bazar, Jail Road, Station Road, Bihar School of Yoga area, and Jamalpur — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Bihar School of Yoga campus in Munger?", answer: "Yes, the Bihar School of Yoga (Ganga Darshan) campus and ashram residential zones are covered under our Munger same-day delivery." },
      { question: "Are eggless cakes available in Munger?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Munger delivery." }
    ]
  },

  "thrissur": {
    cityName: "Thrissur",
    metaTitle: "Cake Delivery in Thrissur | Cultural Capital Kerala | RedHeart",
    metaDescription: "Order cakes online in Thrissur. Same-day delivery across Thrissur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Thrissur",
    metaKeyword: "cake delivery thrissur, order cake online thrissur, birthday cake thrissur, custom cake thrissur, same day cake delivery thrissur round east west poothole guruvayur palakkad road",
    footerContent: `
<h2>Cake Delivery in Thrissur — Kerala's Cultural Capital, Pooram Festival's Heart, and Gold Market's Apex</h2>
<p>Thrissur — Kerala's cultural capital, home to the Thrissur Pooram (considered the "Mother of all Poorams" — the spectacular annual elephant festival at the Vadakkumnathan Temple, where 30 decorated elephants representing two rival groups face each other in a blaze of parasols, drums, and fireworks, voted one of the top 10 festivals in the world by National Geographic), one of India's biggest gold trading markets (Thrissur's Thrissur Town has India's highest concentration of gold jewellery shops per capita — the Thrissur gold market is a reference rate for the Kerala gold trade), home to the Kerala Sangeetha Nataka Akademi, Kerala Lalithakala Akademi, School of Drama, and state-level cultural institutions — is truly Kerala's cultural and festival heart. From birthday parties in the Round South residential belt to corporate cakes at the large gold and textile companies, from Thrissur Pooram celebration cakes to anniversary surprises in the Poothole area — RedHeart covers all Thrissur zones: Central (Round East/West/South/North, Shakthan Nagar, MG Road), North (Guruvayur Road, Wadakkanchery, Kunnamkulam), South (Palakkad Road, Irinjalakuda, Chalakudy), East (Thrissur-Ernakulam Road, Pariyaram), West (Kodungallur Road, Chavakkad, Guruvayur).</p>
<p>Our Thrissur cake range: Chocolate, Black Forest, Red Velvet, Mango (Neelam Alphonso!), Jackfruit-Cream (Kerala special!), Photo Cakes, Fondant Thrissur Pooram-theme elephant special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thrissur, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Round East/West/South/North, Shakthan Nagar, Poothole, MG Road, Palakkad Road, Guruvayur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jackfruit-Cream, Chocolate, Pooram Elephant Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Thrissur Pooram elephant-themed cakes?", answer: "Yes! Thrissur Pooram — Kerala's most spectacular festival and one of the world's top 10 festivals — is immortalised in our magnificent elephant fondant cakes. Decorated Pooram-style elephants with parasols make a stunning birthday centrepiece." },
      { question: "Can I get same-day cake delivery in Thrissur?", answer: "Yes, same-day cake delivery is available across all Thrissur areas — Round East/West/South/North, Shakthan Nagar, Poothole, and Palakkad Road — for orders placed before 3 PM." },
      { question: "Are eggless and jackfruit-flavoured cakes available in Thrissur?", answer: "Yes! Jackfruit (chakka) — Kerala's beloved state fruit — inspires our Jackfruit-Cream cake, available in eggless variants for Thrissur delivery." }
    ]
  },

  "kannur": {
    cityName: "Kannur",
    metaTitle: "Cake Delivery in Kannur | Loom City Kerala | RedHeart",
    metaDescription: "Order cakes online in Kannur. Same-day delivery across Kannur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Kannur",
    metaKeyword: "cake delivery kannur, order cake online kannur, birthday cake kannur, custom cake kannur, same day cake delivery kannur civil station cannanore fort road thalassery road baby beach",
    footerContent: `
<h2>Cake Delivery in Kannur — Loom City of Kerala, Theyyam's Sacred Stage, and Malabar's Handloom Heritage</h2>
<p>Kannur — North Kerala's most important city, the "Loom City" (Kannur is India's largest producer of handloom fabrics — the traditional cotton handloom textiles of Kannur, in particular bed covers, linen, and furnishing fabrics, are exported globally; the Kannur District Co-operative Handloom Weavers' Society and thousands of family-run looms form the backbone of a massive textile industry), the spiritual stage of Theyyam (Kerala's most spectacular ritualistic art form — Theyyam is a divine possession ritual where performers become deities, wearing massive crown headgear 15–20 feet tall, performing at Kavus/sacred groves across North Kerala's Malabar region, especially in Kannur and Kasaragod districts from October to May), home to the imposing St. Angelo Fort (a Portuguese fort from 1505, used successively by the Dutch, the Ali Rajas of Cannanore, and the British — now a heritage monument overlooking the Arabian Sea), and famous for the Kerala Communist Party's political heartland — is a city of vibrant culture and deep roots. From birthday parties in the Civil Station area to corporate cakes at the large handloom cooperatives, from anniversary surprises near the Baby Beach to student cakes at the Kannur University campus — RedHeart covers all Kannur zones: Central (Civil Station, Fort Road, SM Street), North (Payyambalam, Thalassery Road, Iritty), South (Azhikode, Muzhappilangad), East (Kuthuparamba Road, Thaliparamba), West (Baby Beach, Caltex, Pallikkunnu).</p>
<p>Our Kannur cake range: Chocolate, Black Forest, Red Velvet, Mango (Malabar Alphonso!), Jackfruit-Cream, Photo Cakes, Fondant Theyyam-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kannur, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Station, Fort Road, SM Street, Baby Beach, Caltex area, Thalassery Road, Payyambalam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jackfruit-Cream, Chocolate, Theyyam Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Theyyam-themed cakes in Kannur?", answer: "Yes! Theyyam — Kannur's spectacular divine possession ritual, where performers wear magnificent 15-foot-tall headgear and become deities — inspires our Theyyam fondant cake, a stunning and uniquely local design." },
      { question: "Can I get same-day cake delivery in Kannur?", answer: "Yes, same-day cake delivery is available across all Kannur areas — Civil Station, Fort Road, Baby Beach, Caltex area, and Thalassery Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kannur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kannur delivery." }
    ]
  },

  "panaji": {
    cityName: "Panaji",
    metaTitle: "Cake Delivery in Panaji | Goa's Capital City | RedHeart",
    metaDescription: "Order cakes online in Panaji. Same-day delivery across Panaji. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Panaji",
    metaKeyword: "cake delivery panaji, order cake online panaji, birthday cake panaji, custom cake panaji, same day cake delivery panaji panjim fontainhas campal altinho dona paula",
    footerContent: `
<h2>Cake Delivery in Panaji — Goa's Portuguese-Flavoured Capital, Fontainhas Latin Quarter, and Mandovi River Promenade City</h2>
<p>Panaji — Goa's state capital (also known as Panjim), one of India's smallest yet most charming state capitals, with a distinctive Portuguese colonial character (Goa was under Portuguese rule from 1510 to 1961 — 451 years, the longest European colonial tenure in India), home to the Fontainhas Latin Quarter (a heritage ward of Indo-Portuguese houses in candy-pink, yellow, and blue plaster — a UNESCO tentative heritage site, the last surviving example of Portuguese urban design in Asia), the Immaculate Conception Church (a Baroque-style white church from 1619 overlooking the central square — the icon of Goa), the Mahadei River Esplanade ("Campal" — where Goans promenade at sunset), and the Goa Legislative Assembly at the Porvorim plateau — is a city of exceptional European-Indian architectural and cultural fusion. From birthday parties in the scenic Altinho residential hill to corporate cakes at the Panaji government offices, from Carnival celebration cakes on Church Square to anniversary surprises in the Dona Paula area — RedHeart covers all Panaji zones: Central (Fontainhas, Mala, Church Square, 18 June Road), North (Campal, Panaji Waterfront, Dayanand Bandodkar Marg), South (Dona Paula, Miramar Beach area), East (Porvorim, Old Goa Road, Patto), West (Verem, Betim, Penha de França).</p>
<p>Our Panaji cake range: Chocolate, Black Forest, Red Velvet, Bebinca-Cream (Goa's famous 7-layer coconut custard dessert!), Mango (Goa Mancurad mango!), Photo Cakes, Fondant Old Goa Baroque Church-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panaji, Goa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fontainhas, Church Square, Campal, Altinho, Dona Paula, Miramar, Porvorim, Patto</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bebinca-Cream, Goa Mancurad Mango, Chocolate, Old Goa Baroque Fondant, Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Bebinca-flavoured cakes in Panaji?", answer: "Yes! Bebinca — Goa's iconic 7-layer coconut custard dessert with Portuguese heritage, made of coconut milk, egg yolks, sugar, and ghee — inspires our Bebinca-Cream cake, the most distinctly Goan flavour we offer in Panaji." },
      { question: "Can I get same-day cake delivery in Panaji?", answer: "Yes, same-day cake delivery is available across all Panaji areas — Fontainhas, Church Square, Campal, Altinho, Dona Paula, Miramar, and Porvorim — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Panaji?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Panaji delivery." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/order-cake-online/${slug}`;
    const payload = {
      category: "Cakes",
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
        { label: "Cakes", url: "/order-cake-online" },
        { label: `Online Cake Delivery in ${data.cityName}`, url: cityUrl },
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
