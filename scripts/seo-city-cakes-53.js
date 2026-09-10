// Cakes Batch 53 — 13 cities
// WB: Nadia (Krishnanagar), Hooghly (Chinsurah), Howrah (urban - check if done), North 24 Parganas, South 24 Parganas (Baruipur), Purulia
// UP: Auraiya, Kanpur Dehat (Ramabai Nagar), Fatehpur (UP)
// Rajasthan: Sirohi, Jhunjhunu, Churu
// Karnataka: Kolar

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "krishnanagar": {
    cityName: "Krishnanagar",
    metaTitle: "Cake Delivery in Krishnanagar | Nadia GI Clay Doll Jagatdal Silk West Bengal | RedHeart",
    metaDescription: "Order cakes online in Krishnanagar (Nadia). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Krishnanagar (Nadia)",
    metaKeyword: "cake delivery krishnanagar nadia, order cake online krishnanagar, birthday cake krishnanagar, custom cake nadia, same day cake delivery krishnanagar GI Krishnanagar Clay Doll Nadia Vaishnavism Chaitanya Mahaprabhu Nabadwip Mayapur ISKCON West Bengal",
    footerContent: `
<h2>Cake Delivery in Krishnanagar (Nadia) — GI Krishnanagar Clay Dolls, Nabadwip-Mayapur Vaishnavism, and Chaitanya Mahaprabhu's Birthplace</h2>
<p>Krishnanagar — the district headquarters of Nadia district in West Bengal, one of India's most historically and spiritually significant districts — the birthplace of Chaitanya Mahaprabhu and the GI clay doll capital (the Nabadwip (Navadvipa — adjacent to Krishnanagar) — the birthplace of Sri Chaitanya Mahaprabhu (1486-1534 CE) — the founder of the Gaudiya Vaishnava movement (Bhakti devotion to Krishna-Radha through kirtan/sankirtan/mantra chanting); Chaitanya Mahaprabhu's life transformed the religious landscape of Bengal and created the Hare Krishna movement that later (via ISKCON) spread globally; the Mayapur (across the Ganga from Nabadwip) — the headquarters of ISKCON (International Society for Krishna Consciousness — founded by A.C. Bhaktivedanta Swami Prabhupada 1966; the Mayapur Chandrodaya Mandir under construction will be one of the world's largest temples when complete); the GI Krishnanagar Clay Dolls (Krishnanagar Jagatdal — an extraordinary folk art tradition; life-size and miniature clay figures that are astonishingly realistic (fisherwomen, craftsmen, village scenes) created by the Krishnanagar Mali and Pal communities; these clay dolls were first exhibited in the 1851 Great Exhibition in London; GI-protected; the craft is on the UNESCO endangered list); the Nadia district (Nadia = Nabadwip-dia — land of Nabadwip) was historically significant as the seat of the Sena dynasty and later the centre of Nyaya philosophy (logic school of Sanskrit philosophy)); the Shantipur (Nadia — famous for Tant weaving — the traditional cotton sarees of West Bengal), and a city of Chaitanya Mahaprabhu's Vaishnavism and GI clay art — is West Bengal's most Gaudiya-Vaishnava-Chaitanya spiritually founding and GI-clay-doll-realistically-lifelike Nadia district. From birthday parties in Krishnanagar to celebration cakes — RedHeart covers all Nadia zones: Krishnanagar city, Nabadwip, Santipur, Ranaghat, Chakdaha, Kalyani, Birnagar, Tehatta.</p>
<p>Our Krishnanagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant GI Krishnanagar Clay Doll Realistic / Chaitanya Mahaprabhu Gaudiya Vaishnava / Mayapur ISKCON Temple / Nabadwip Birthplace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnanagar (Nadia), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnanagar, Nabadwip, Santipur, Ranaghat, Chakdaha, Kalyani, Birnagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, GI Clay Doll Fondant, ISKCON Mayapur Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Krishnanagar (Nadia)?", answer: "Yes, same-day cake delivery is available across all Nadia areas — Krishnanagar, Nabadwip, Santipur, Ranaghat, Chakdaha, Kalyani, and Birnagar — for orders placed before 3 PM." },
      { question: "Do you have GI Krishnanagar Clay Dolls and Chaitanya Mahaprabhu-themed cakes?", answer: "Yes! The GI Krishnanagar Clay Dolls (life-size and miniature realistic clay figures of fisherfolk and village scenes; exhibited at the 1851 Great Exhibition in London; GI-protected; on UNESCO's endangered craft list) and Chaitanya Mahaprabhu's Nabadwip birthplace (1486 CE — the founder of Gaudiya Vaishnavism and the Hare Krishna tradition; ISKCON Mayapur under-construction world's-largest temple) inspire our most clay-realistically-lifelike and Gaudiya-Vaishnava-Chaitanya Krishnanagar fondant cakes." },
      { question: "Are eggless cakes available in Krishnanagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Krishnanagar (Nadia) delivery." }
    ]
  },

  "chinsurah": {
    cityName: "Chinsurah",
    metaTitle: "Cake Delivery in Chinsurah Hooghly | Dutch Colony Imambara Serampore Bengal | RedHeart",
    metaDescription: "Order cakes online in Chinsurah (Hooghly). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chinsurah (Hooghly)",
    metaKeyword: "cake delivery chinsurah hooghly, order cake online chinsurah, birthday cake chinsurah hooghly, custom cake chinsurah, same day cake delivery chinsurah Hooghly Imambara Dutch Colony Portuguese Bandel Church Serampore Danish Chandannagar French West Bengal",
    footerContent: `
<h2>Cake Delivery in Chinsurah (Hooghly) — Five European Colonies on One River, Imambara, Bandel Church, and Bengal's Colonial Heritage</h2>
<p>Chinsurah (Chuchura) — the district headquarters of Hooghly district in West Bengal, a city on the Hooghly River with an extraordinary colonial history — part of one of the world's most unique historical stretches of river (the Hooghly River in what is now Hooghly district was the scene of extraordinary European colonial competition — five European powers established trading colonies within a short stretch of the river in the 17th-18th centuries: the Portuguese at Bandel (1599 CE — the Bandel Church, one of India's oldest Catholic churches, built 1599-1600 CE by Portuguese traders; has a miraculous statue of Our Lady of Happy Voyage; was burned by Shah Jahan 1632 but rebuilt); the Dutch at Chinsurah (established 1653 CE — the Dutch East India Company (VOC) factory; the Dutch Octagon Church (1767) and the Dutch cemetery are among the last remnants; Chinsurah was transferred to Britain in exchange for Sumatra in 1825); the Danish at Serampore (Frederiksnagore — established 1755 CE; the Carey Baptist Mission 1799 — William Carey translated the Bible into many Indian languages including Bengali from Serampore; the Serampore Press printed in multiple Indian languages); the French at Chandannagar (Chandernagore — established 1690 CE; a French enclave until 1950 — the only French colonial territory in Bengal; Chandannagar's Jagadhatri Puja and Strand are famous); the British controlled Hooghly itself; the Hooghly Imambara (the Imambara of Hooghly — a magnificent Shia Muslim congregation hall built by Haji Muhammad Mohsin, a great philanthropist of Bengal; built 1861 CE; the Imambara during Muharram is spectacular)), and a city of five-European-powers-one-river and Imambara Bengal — is West Bengal's most colonial-European-fivefold-competing and Imambara-Shia-Mohsin-philanthropically magnificent Hooghly district. From birthday parties in Chinsurah to celebration cakes — RedHeart covers all Hooghly zones: Chinsurah, Chandannagar, Serampore, Bandel, Arambagh, Mogra, Rishra, Konnagar.</p>
<p>Our Chinsurah cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Hooghly Imambara / Bandel Portuguese Church 1599 / Dutch Chinsurah Colony / Chandannagar French Enclave / Serampore Danish Baptist-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chinsurah (Hooghly), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chinsurah, Chandannagar, Serampore, Bandel, Arambagh, Mogra, Rishra, Konnagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Imambara Fondant, Bandel Church Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chinsurah (Hooghly)?", answer: "Yes, same-day cake delivery is available across all Hooghly areas — Chinsurah, Chandannagar, Serampore, Bandel, Arambagh, Mogra, Rishra, and Konnagar — for orders placed before 3 PM." },
      { question: "Do you have Hooghly Imambara and Five European Colonies-themed cakes?", answer: "Yes! The Hooghly Imambara (Haji Muhammad Mohsin's magnificent 1861 Shia congregation hall) and the remarkable Five European Colonies on one river (Portuguese Bandel Church 1599-1600, Dutch Chinsurah 1653, Danish Serampore 1755 William Carey Mission, French Chandannagar 1690, British Hooghly — all within a short stretch of the Hooghly River) inspire our most colonial-European-fivefold-riverside and Imambara-Shia-philanthropically Chinsurah fondant cakes." },
      { question: "Are eggless cakes available in Chinsurah?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chinsurah (Hooghly) delivery." }
    ]
  },

  "baruipur": {
    cityName: "Baruipur",
    metaTitle: "Cake Delivery in Baruipur South 24 Parganas Sundarbans West Bengal | RedHeart",
    metaDescription: "Order cakes online in Baruipur (South 24 Parganas). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Baruipur (South 24 Parganas)",
    metaKeyword: "cake delivery baruipur south 24 parganas, order cake online baruipur, birthday cake south 24 parganas, custom cake baruipur, same day cake delivery baruipur Sundarbans Tiger Reserve UNESCO Mangrove Royal Bengal Tiger Diamond Harbour Bay of Bengal West Bengal",
    footerContent: `
<h2>Cake Delivery in Baruipur (South 24 Parganas) — Sundarbans UNESCO Tiger Reserve, Mangrove Delta, and Bay of Bengal Coast</h2>
<p>Baruipur — the district headquarters of South 24 Parganas district in West Bengal (one of India's most populous districts), a district dominated by the world's largest mangrove delta — the Sundarbans (the Sundarbans (Sundarban — "beautiful forest") — the world's largest mangrove forest and river delta; a UNESCO World Heritage Site (1987); a Ramsar Wetland; a Tiger Reserve (Sundarbans Tiger Reserve — one of India's largest tiger habitats; the Royal Bengal Tiger (Panthera tigris tigris) — the tigers here are uniquely adapted to the semi-saline mangrove habitat; they swim between islands; there are estimated 100+ tigers in the Indian Sundarbans; the iconic man-eating tiger problem (the Sundarbans tigers are known for occasional human attacks on honey-collectors, fishermen entering the forest — they wear masks on the back of their heads to deter tigers which usually attack from behind); the Sundarbans extend into Bangladesh (where they are even larger); the Hooghly-Ganges-Brahmaputra delta system creates thousands of islands (chars and tidal flats); the Gangasagar (Sagar Island — at the mouth of the Hooghly/Ganga in the Bay of Bengal; the annual Makar Sankranti Gangasagar Mela — millions of pilgrims take a dip at the Kapil Muni ashram/ghat; second only to Kumbh Mela in pilgrims); the Diamond Harbour (a major river port on the Hooghly south of Kolkata)); and a city of Sundarbans UNESCO tiger mangroves and Gangasagar pilgrimage — is West Bengal's most mangrove-UNESCO Sundarbans-delta-Royal-Bengal-Tiger-swimming and Gangasagar-Makar-Sankranti-pilgrimage district. From birthday parties in Baruipur to celebration cakes — RedHeart covers all South 24 Parganas zones: Baruipur, Diamond Harbour, Kakdwip, Namkhana, Mathurapur, Kultali, Sagar, Canning, Basanti.</p>
<p>Our Baruipur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sundarbans UNESCO Tiger Reserve / Royal Bengal Tiger Mangrove / Gangasagar Mela / Diamond Harbour-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baruipur (South 24 Parganas), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baruipur, Diamond Harbour, Kakdwip, Namkhana, Mathurapur, Canning, Basanti, Sagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sundarbans Tiger Fondant, Gangasagar Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Baruipur (South 24 Parganas)?", answer: "Yes, same-day cake delivery is available across all South 24 Parganas areas — Baruipur, Diamond Harbour, Kakdwip, Namkhana, Mathurapur, Canning, and Basanti — for orders placed before 3 PM." },
      { question: "Do you have Sundarbans Tiger Reserve and Gangasagar-themed cakes?", answer: "Yes! The Sundarbans (UNESCO 1987 — world's largest mangrove forest; Royal Bengal Tigers that swim between islands; unique tiger-human coexistence; Ramsar Wetland) and the Gangasagar Mela (Makar Sankranti — millions of pilgrims at Kapil Muni ghat, Sagar Island; second only to Kumbh Mela) inspire our most mangrove-UNESCO-tiger-swimming and Gangasagar-pilgrimly-Makar-Sankranti South 24 Parganas fondant cakes." },
      { question: "Are eggless cakes available in Baruipur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Baruipur (South 24 Parganas) delivery." }
    ]
  },

  "purulia": {
    cityName: "Purulia",
    metaTitle: "Cake Delivery in Purulia | Chhau Dance UNESCO Ayodhya Hills West Bengal | RedHeart",
    metaDescription: "Order cakes online in Purulia. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Purulia",
    metaKeyword: "cake delivery purulia, order cake online purulia, birthday cake purulia, custom cake purulia, same day cake delivery purulia Chhau Dance UNESCO Mask Ayodhya Hills Jharkhand border Manbhum tribal Jhalda West Bengal",
    footerContent: `
<h2>Cake Delivery in Purulia — UNESCO Chhau Dance, Ayodhya Hills, and Bengal-Jharkhand Tribal Heritage</h2>
<p>Purulia — the district headquarters of Purulia district in West Bengal (formerly part of Bihar as Manbhum district before 1956), the westernmost district of West Bengal bordering Jharkhand — home to one of India's most extraordinary dance forms and the Chota Nagpur Plateau (the UNESCO Chhau Dance — one of the three styles of the Chhau martial dance tradition (Seraikella Chhau, Mayurbhanj Chhau, and Purulia Chhau); the Purulia Chhau uses large, elaborate masks (often 3-4 feet tall) depicting Hindu mythological characters (Mahishasura, Durga, Kartik, Shiva) — the masks are intricately crafted from paper-pulp, bamboo, and painted in bold colours; the dance is performed outdoors at night under lamplight at the Chaitra festival (March-April) by men of the Kurmi, Kumhar (potter) communities; the Purulia Chhau is on the UNESCO Representative List of Intangible Cultural Heritage of Humanity (2010); the mask-making is itself a sophisticated GI-worthy craft; the Ayodhya Hills (Purulia) — the highest peaks in Purulia district (1,063 m at Gorgaburu — near Baghmundi); a scenic plateau area with waterfalls (Bamni Falls, Turga Dam); the Chota Nagpur Plateau ecology (laterite soil, sal forests, Bhumij-Santhali-Kheria-Birhor tribal communities); the Baranti Lake (a scenic reservoir surrounded by hills; a popular eco-tourism destination); the Matha temple and Pakhi hills), and a city of UNESCO Chhau masks and Ayodhya Hills — is West Bengal's most UNESCO-Chhau-masked-mythologically-elaborate and Chota-Nagpur-tribally-rich westernmost district. From birthday parties in Purulia to celebration cakes — RedHeart covers all Purulia zones: Purulia city, Jhalda, Raghunathpur, Manbazar, Balarampur, Baghmundi, Para.</p>
<p>Our Purulia cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Purulia Chhau UNESCO Mask / Ayodhya Hills Plateau / Bamni Falls / Baranti Lake-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purulia, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purulia city, Jhalda, Raghunathpur, Manbazar, Balarampur, Baghmundi, Para</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chhau Mask UNESCO Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Purulia?", answer: "Yes, same-day cake delivery is available across all Purulia areas — Purulia city, Jhalda, Raghunathpur, Manbazar, Balarampur, and Baghmundi — for orders placed before 3 PM." },
      { question: "Do you have Purulia Chhau UNESCO Mask Dance-themed cakes?", answer: "Yes! The Purulia Chhau Dance (UNESCO Intangible Cultural Heritage 2010 — the most mask-elaborate Chhau style with 3-4 foot mythological masks of Mahishasura, Durga, Kartik in paper-pulp; performed outdoors under lamplight at Chaitra festival; mask-making itself an extraordinary craft) inspires our most UNESCO-masked-mythologically-mask-3ft-Durga Purulia fondant cakes." },
      { question: "Are eggless cakes available in Purulia?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Purulia delivery." }
    ]
  },

  "fatehpur": {
    cityName: "Fatehpur",
    metaTitle: "Cake Delivery in Fatehpur | Yamuna Ganga Doab Bindki Uttar Pradesh | RedHeart",
    metaDescription: "Order cakes online in Fatehpur (UP). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fatehpur (Uttar Pradesh)",
    metaKeyword: "cake delivery fatehpur, order cake online fatehpur, birthday cake fatehpur, custom cake fatehpur, same day cake delivery fatehpur Yamuna Ganga Doab Bindki Thana Bhawan Uttar Pradesh agricultural",
    footerContent: `
<h2>Cake Delivery in Fatehpur — Yamuna-Ganga Doab, Agricultural Heartland, and the UP Plains</h2>
<p>Fatehpur — the district headquarters of Fatehpur district in Uttar Pradesh, situated in the fertile Ganga-Yamuna Doab (the land between the Ganga and Yamuna rivers) — one of UP's agricultural districts (the Fatehpur district lies between the Ganga River (to the north) and the Yamuna River (to the south); the confluence of the Ganga and Yamuna (Triveni Sangam) is at Prayagraj adjacent to Fatehpur; the Ganga-Yamuna Doab (doab = "two rivers" — the land between) is the most fertile agricultural zone in North India; the Fatehpur district grows wheat, paddy, mustard, pulses; the Bindki town (an important commercial town in Fatehpur district); the Khaga (a town in Fatehpur district with a railway junction); the Mauaima and Amauli areas; Fatehpur is on the Grand Trunk Road (NH-19 Kolkata-Delhi corridor); the Ramakrishna Mission presence at Fatehpur; the Dewa Sharif (Barabanki — adjacent); the Haswa, Dharaut, Amauli blocks), and a city of Ganga-Yamuna doab fertility and Grand Trunk Road — is Uttar Pradesh's most Ganga-Yamuna-doab-two-river-agriculturally fertile and GT-Road-highway-adjacent district. From birthday parties in Fatehpur to celebration cakes — RedHeart covers all Fatehpur zones: Fatehpur city, Bindki, Khaga, Haswa, Mauaima, Amauli, Hathgaon.</p>
<p>Our Fatehpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehpur city, Bindki, Khaga, Haswa, Mauaima, Amauli, Hathgaon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fatehpur (UP)?", answer: "Yes, same-day cake delivery is available across all Fatehpur areas — Fatehpur city, Bindki, Khaga, Haswa, Mauaima, and Amauli — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Fatehpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Fatehpur (UP) delivery." },
      { question: "Do you deliver midnight cakes in Fatehpur?", answer: "Yes, midnight birthday cake delivery is available across Fatehpur city and Bindki zones." }
    ]
  },

  "auraiya": {
    cityName: "Auraiya",
    metaTitle: "Cake Delivery in Auraiya | Dholpur Canal Yamuna Uttar Pradesh | RedHeart",
    metaDescription: "Order cakes online in Auraiya. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Auraiya",
    metaKeyword: "cake delivery auraiya, order cake online auraiya, birthday cake auraiya, custom cake auraiya, same day cake delivery auraiya Yamuna River Dobhi Ajitmal Dibiyapur Shikohabad Kanpur Dehat Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Auraiya — Yamuna Plains, Dholpur Canal, and Agra-Kanpur Corridor</h2>
<p>Auraiya — the district headquarters of Auraiya district in Uttar Pradesh (Auraiya district was carved from Etawah district in 1997), a district in the Yamuna belt of UP (the Auraiya district lies along the Yamuna River on its southern border; the district is part of the fertile Agra-Kanpur agricultural belt; the Dholpur Canal and the Yamuna irrigation system support wheat, paddy, mustard cultivation; the Ajitmal and Bidhuna towns are significant commercial centres in the district; the Dibiyapur (a town in Auraiya district on the Agra-Kanpur road); the BPCL Gas Plant/ONGC gas fields in the area (the Auraiya gas-based power station); the Auraiya district borders Kanpur Dehat, Etawah, Jalaun, and Kanpur rural areas; the Yamuna River provides irrigation; the district was formerly famous for its sarsoN ka tel (mustard oil) trade; the GT Road (Agra-Kanpur section) passes through the district), and a city of Yamuna irrigation doab and Agra-Kanpur highway corridor — is Uttar Pradesh's most Yamuna-south-bank agriculturally mustard-oilseed and GT-Road-Agra-Kanpur-corridor district. From birthday parties in Auraiya to celebration cakes — RedHeart covers all Auraiya zones: Auraiya city, Ajitmal, Bidhuna, Dibiyapur, Sahar, Achalda, Phaphund.</p>
<p>Our Auraiya cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Auraiya, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Auraiya city, Ajitmal, Bidhuna, Dibiyapur, Sahar, Achalda, Phaphund</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Auraiya?", answer: "Yes, same-day cake delivery is available across all Auraiya areas — Auraiya city, Ajitmal, Bidhuna, Dibiyapur, Sahar, and Achalda — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Auraiya?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Auraiya delivery." },
      { question: "Do you deliver midnight cakes in Auraiya?", answer: "Yes, midnight birthday cake delivery is available across Auraiya city and Ajitmal zones." }
    ]
  },

  "sirohi": {
    cityName: "Sirohi",
    metaTitle: "Cake Delivery in Sirohi | Mount Abu Abu Road Dilwara Jain Gujarat Border Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Sirohi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sirohi",
    metaKeyword: "cake delivery sirohi, order cake online sirohi, birthday cake sirohi, custom cake sirohi, same day cake delivery sirohi Mount Abu Dilwara Jain Temple Abu Road Nakki Lake Brahma Kumaris Gurushikhar Aravalli Rajasthan Gujarat border",
    footerContent: `
<h2>Cake Delivery in Sirohi — Mount Abu Hill Station, Dilwara Jain Temples UNESCO (marble-carved), and Brahma Kumaris World HQ</h2>
<p>Sirohi — the district headquarters of Sirohi district in Rajasthan (on the Gujarat-Rajasthan border), home to Rajasthan's only hill station — Mount Abu, with one of India's most extraordinary temple clusters (Mount Abu (Rajasthan's only hill station — at 1,220 m altitude in the Aravalli Range; the highest point in the Aravallis south of Delhi; one of the most popular Rajasthan tourist destinations); the Dilwara Jain Temples (Mount Abu — built 11th-13th century CE by the Chalukya/Vimalsha Vimala Vasahi Tejapala-Vastupala merchants; five temples total; the most famous is the Vimala Vasahi (1031 CE) and the Luna Vasahi (1231 CE); these are among the finest marble temples in India — the marble carving is so intricate that the ceilings appear to be draped lace; not UNESCO yet but widely considered among the world's finest marble carvings; the mandap ceiling is unsupported — the dome is held by 8 carved marble elephants; the marble was transported from Makrana by thousands of workers and polished to this extraordinary detail over decades); the Nakki Lake (the only natural lake in Rajasthan in the hills of Mount Abu; the legend that it was dug by the gods using their nails (nakha)); the Guru Shikar (1,722 m — highest peak in Rajasthan and the Aravallis south of Delhi); the Brahma Kumaris World Spiritual University (headquartered in Mount Abu — one of the world's largest spiritual organizations; the Brahma Kumaris movement was founded by Lekhraj Kripalani (Dada Lekhraj / Brahma Baba) in Hyderabad-Sindh in 1936; now has global centres in 137 countries; Mount Abu campus is the global headquarters); the Achalgarh Fort), and a city of the only Rajasthan hill station and Dilwara marble-lace temples — is Rajasthan's most hill-station-only and marble-carving-lace-ceiling-extraordinary-Dilwara district. From birthday parties in Sirohi to celebration cakes — RedHeart covers all Sirohi zones: Sirohi city, Mount Abu, Abu Road, Pindwara, Reodar, Sheoganj.</p>
<p>Our Sirohi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Dilwara Jain Temples Marble Lace / Mount Abu Hill Station / Nakki Lake / Brahma Kumaris World HQ / Guru Shikar Peak-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirohi, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirohi city, Mount Abu, Abu Road, Pindwara, Reodar, Sheoganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dilwara Marble Fondant, Mount Abu Hill Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sirohi?", answer: "Yes, same-day cake delivery is available across all Sirohi areas — Sirohi city, Mount Abu, Abu Road, Pindwara, Reodar, and Sheoganj — for orders placed before 3 PM." },
      { question: "Do you have Dilwara Jain Temples and Mount Abu Hill Station-themed cakes?", answer: "Yes! The Dilwara Jain Temples (11th-13th century CE; Vimala Vasahi and Luna Vasahi; marble carving so intricate the ceilings appear to be draped lace; unsupported dome held by 8 carved marble elephants; Makrana marble polished to extraordinary detail over decades) and Mount Abu (Rajasthan's only hill station; Nakki Lake; Brahma Kumaris World HQ; Guru Shikar 1,722 m highest Aravalli peak) inspire our most marble-lace-ceilingly extraordinary and hill-station-only Rajasthan Sirohi fondant cakes." },
      { question: "Are eggless cakes available in Sirohi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sirohi delivery." }
    ]
  },

  "jhunjhunu": {
    cityName: "Jhunjhunu",
    metaTitle: "Cake Delivery in Jhunjhunu | Shekhawati Painted Havelis Fresco Art Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Jhunjhunu. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jhunjhunu",
    metaKeyword: "cake delivery jhunjhunu, order cake online jhunjhunu, birthday cake jhunjhunu, custom cake jhunjhunu, same day cake delivery jhunjhunu Shekhawati painted havelis fresco art Marwari Nawalgarh Mandawa Fatehpur Sikar Rajasthan",
    footerContent: `
<h2>Cake Delivery in Jhunjhunu — Shekhawati Painted Havelis (Open-Air Art Gallery), Marwari Trade Heritage, and Rajasthan's Fresco Capital</h2>
<p>Jhunjhunu — the district headquarters of Jhunjhunu district in Rajasthan (Shekhawati region), part of India's most remarkable concentration of outdoor painted architecture — the "Open-Air Art Gallery of Rajasthan" (the Shekhawati region (encompassing Jhunjhunu, Sikar, and Churu districts) — one of the world's most remarkable concentrations of outdoor painted architecture; the Shekhawati towns were the home of the great Marwari trading families (Birla, Goenka, Bajaj, Dalmia, Ruia, Todi, Saraf, Kanoria — most of India's major industrial dynasties trace their origins to Shekhawati Marwari merchants) who became enormously wealthy during the 18th-19th centuries; they built elaborately decorated havelis (mansions) as status symbols, decorating the walls with extraordinarily intricate frescoes depicting: mythological scenes (Krishna-Radha, Ramayana), portraits of merchants and their wives, camels and elephants, and later photographs, trains, cars, aeroplanes (as these technologies arrived in India — the frescos updated to include them); the Mandawa, Nawalgarh (Jhunjhunu-Sikar border), Fatehpur, Ramgarh, Mahansar towns have the finest haveli clusters; the frescoes use natural mineral pigments; the Rani Sati Dadi temple (Jhunjhunu — one of Rajasthan's richest and most visited temples, though controversial — Narayani Sati; pilgrimage draws millions); the Khetri area (Swami Vivekananda's patron Ajit Singh of Khetri — the Rajput ruler who gave Vivekananda the name "Vivekananda" and financed his 1893 Chicago Parliament of World's Religions journey)), and a city of Shekhawati frescoed havelis and Marwari merchant dynasty heritage — is Rajasthan's most frescoed-haveli-open-air-gallery-Marwari-merchant-dynastically painted district. From birthday parties in Jhunjhunu to celebration cakes — RedHeart covers all Jhunjhunu zones: Jhunjhunu city, Mandawa, Nawalgarh, Chirawa, Bissau, Khetri, Surajgarh.</p>
<p>Our Jhunjhunu cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Shekhawati Fresco Haveli / Mandawa Painted Mansion / Marwari Merchant Heritage / Rani Sati Dadi Temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhunjhunu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhunjhunu city, Mandawa, Nawalgarh, Chirawa, Bissau, Khetri, Surajgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Shekhawati Fresco Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jhunjhunu?", answer: "Yes, same-day cake delivery is available across all Jhunjhunu areas — Jhunjhunu city, Mandawa, Nawalgarh, Chirawa, Bissau, Khetri, and Surajgarh — for orders placed before 3 PM." },
      { question: "Do you have Shekhawati Fresco Painted Havelis-themed cakes?", answer: "Yes! The Shekhawati painted havelis (Jhunjhunu-Sikar-Churu region — origin of Marwari merchant dynasties Birla-Goenka-Bajaj; their painted mansions with intricate mineral-pigment frescoes of mythology-merchant portraits-trains-aeroplanes-camels; the 'Open-Air Art Gallery of Rajasthan') inspire our most frescoed-haveli-marwari-dynasty-open-air-gallery Jhunjhunu fondant cakes." },
      { question: "Are eggless cakes available in Jhunjhunu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jhunjhunu delivery." }
    ]
  },

  "churu": {
    cityName: "Churu",
    metaTitle: "Cake Delivery in Churu | Shekhawati Salasar Balaji Thar Desert Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Churu. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Churu",
    metaKeyword: "cake delivery churu, order cake online churu, birthday cake churu, custom cake churu, same day cake delivery churu Salasar Balaji Hanuman Temple Shekhawati painted havelis Thar Desert Bikaner border Rajasthan extreme temperature",
    footerContent: `
<h2>Cake Delivery in Churu — Salasar Balaji Dham, Shekhawati Frescoes, Extreme Climate City, and Thar Desert Gateway</h2>
<p>Churu — the district headquarters of Churu district in Rajasthan (northern Rajasthan, part of the Shekhawati-Thar Desert belt), a district of remarkable contrasts — rich Marwari heritage and extreme desert climate (the Salasar Balaji Temple (Salasar — in Churu district; the Salasar Balaji (Hanuman) Temple is one of the most visited Hanuman temples in India and Rajasthan; known for the unique murti of Hanuman with a beard and moustache — the legend says this idol emerged from a farmer's field in 1754 CE; millions of pilgrims visit annually; located on the NH-52 Bikaner-Jaipur highway; the Salasar Mela (during Chaitra Purnima and Ashwin Purnima); the Churu district is one of India's most extreme temperature districts — in summer temperatures regularly exceed 50°C (in 2019, Churu registered 50.8°C — one of India's highest ever recorded temperatures); in winter it is one of the coldest plains cities in India, dropping below 0°C; this extreme range is due to the Thar Desert's continental climate; the Churu Shekhawati havelis (Churu also has significant painted havelis — the Surana and Sethani ka Johara havelis in Churu town; the Ratangarh painted havelis); the Talanagar (Churu — site of a significant Harappan civilization mound excavation); the Sardarshahar (Churu — the city of the Bharnath Dada temple) and Rajgarh areas), and a city of Salasar Balaji Hanuman pilgrimage and India's hottest plains city — is Rajasthan's most Salasar-Balaji-bearded-Hanuman-pilgrimage and extreme-50.8°C-heat-Thar-Desert district. From birthday parties in Churu to celebration cakes — RedHeart covers all Churu zones: Churu city, Salasar, Sardar Shahar, Ratangarh, Sujangarh, Rajgarh, Taranagar.</p>
<p>Our Churu cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Salasar Balaji Hanuman / Shekhawati Churu Havelis / Thar Desert Extreme Climate / Salasar Mela-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churu city, Salasar, Sardar Shahar, Ratangarh, Sujangarh, Rajgarh, Taranagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Salasar Balaji Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Churu?", answer: "Yes, same-day cake delivery is available across all Churu areas — Churu city, Salasar, Sardar Shahar, Ratangarh, Sujangarh, and Rajgarh — for orders placed before 3 PM." },
      { question: "Do you have Salasar Balaji Hanuman-themed cakes?", answer: "Yes! The Salasar Balaji Temple (the unique bearded-moustached Hanuman murti that emerged from a farmer's field in 1754 CE; one of India's most visited Hanuman temples; millions of pilgrims; the Salasar Mela at Chaitra and Ashwin Purnima) inspires our most Salasar-Balaji-beardedly-unique-Hanuman and pilgrimage-mela fondant cakes." },
      { question: "Are eggless cakes available in Churu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Churu delivery." }
    ]
  },

  "kolar": {
    cityName: "Kolar",
    metaTitle: "Cake Delivery in Kolar | Kolar Gold Fields KGF Chickmagalur Coffee Karnataka | RedHeart",
    metaDescription: "Order cakes online in Kolar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kolar",
    metaKeyword: "cake delivery kolar, order cake online kolar, birthday cake kolar, custom cake kolar, same day cake delivery kolar Kolar Gold Fields KGF deepest gold mine Avani Srinivasa Mangapathi temple Chikkaballapur Karnataka",
    footerContent: `
<h2>Cake Delivery in Kolar — Kolar Gold Fields (KGF) World's Deepest Gold Mine, Avani Temple, and Karnataka's Gold Heritage</h2>
<p>Kolar — the district headquarters of Kolar district in Karnataka (adjacent to Tamil Nadu and Andhra Pradesh borders), one of India's most historically rich mining districts — home to one of the world's deepest gold mines (the Kolar Gold Fields (KGF) — the Kolar Gold Fields, located in the Kolar district, were among the world's most productive gold mines for over a century (1880-2001); the mines are over 3 km deep — among the deepest gold mines in the world; at peak production, KGF was producing 100,000 oz of gold annually; the gold from Kolar literally funded much of British India's government; the mines closed in 2001 due to depleting ore grades and rising costs (the gold seams become thinner and harder to reach as they go deeper); the KGF township — built by the British as a model colonial mining city (with a school, hospital, church, club, polo ground) — is now largely decayed and ghost-town-like, but the film KGF (2018, 2022) brought worldwide attention to the area; efforts are underway to revive mining at KGF; the first electric transmission line in Asia was built to power the KGF mines (from Cauvery River to Kolar in 1902); the Avani (near Kolar) — a small village believed to be the site of Valmiki's ashram where Sita gave birth to Luv and Kush after Ram banished her (the Avani temple complex is a significant Ramayan pilgrimage site); the Srinivasa Mangapathi Temple at KGF), and a city of world's deepest gold mines and Asian first electricity — is Karnataka's most KGF-gold-mining-world's-deepest and Asia-first-electricity-1902-Cauvery Kolar district. From birthday parties in Kolar to celebration cakes — RedHeart covers all Kolar zones: Kolar city, Kolar Gold Fields (KGF), Bangarpet, Robertsonpet, Malur, Mulbagal, Srinivaspur.</p>
<p>Our Kolar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant KGF Gold Mine World Deepest / Asia First Electricity / Avani Ramayana Sita / Kolar Heritage Mine-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolar, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolar city, KGF (Kolar Gold Fields), Bangarpet, Robertsonpet, Malur, Mulbagal, Srinivaspur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, KGF Gold Mine Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kolar?", answer: "Yes, same-day cake delivery is available across all Kolar areas — Kolar city, KGF (Kolar Gold Fields), Bangarpet, Robertsonpet, Malur, Mulbagal, and Srinivaspur — for orders placed before 3 PM." },
      { question: "Do you have KGF Kolar Gold Fields-themed cakes?", answer: "Yes! The KGF (Kolar Gold Fields — among the world's deepest gold mines at 3 km+; 100,000 oz gold/year at peak; Asia's first electric transmission line built in 1902 from Cauvery to power the mines; now a ghost-town-like colonial mining city brought to global fame by the KGF films 2018-2022) inspires our most KGF-gold-mine-3km-deepest and Asia-first-1902-electricity Kolar fondant cakes." },
      { question: "Are eggless cakes available in Kolar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kolar delivery." }
    ]
  },

  "north-24-parganas": {
    cityName: "Barasat",
    metaTitle: "Cake Delivery in Barasat North 24 Parganas West Bengal | RedHeart",
    metaDescription: "Order cakes online in Barasat (North 24 Parganas). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barasat (North 24 Parganas)",
    metaKeyword: "cake delivery barasat north 24 parganas, order cake online barasat, birthday cake barasat, custom cake north 24 parganas, same day cake delivery barasat Kolkata suburb Bangladesh border Bangaon Basirhat Sundarbans North West Bengal",
    footerContent: `
<h2>Cake Delivery in Barasat (North 24 Parganas) — Kolkata's Largest Suburb District, Bangladesh Border, and Ichhamati River</h2>
<p>Barasat — the district headquarters of North 24 Parganas district in West Bengal (one of the most populous districts in India — over 10 million population), essentially Kolkata's vast northern suburban sprawl extending to the Bangladesh border (the North 24 Parganas district is the most populous district in West Bengal and one of the most populous in India; it extends from the northern Kolkata suburbs (Barasat, Barrackpore, Dum Dum) to the Bangladesh-India border (Basirhat, Bangaon, Petrapole-Benapole international border — the Petrapole-Benapole crossing is the busiest land border between India and Bangladesh; billions of rupees in bilateral trade cross here annually; millions of people cross annually); the Barasat city — the district headquarters, a satellite city of Kolkata on the Kolkata-Bongaon road; the Barasat Massacre (1831 — Titumir raised a bamboo fort at Narkelberia; British-colonial resistance figure); the Ichamati River (flows through North 24 Parganas — forms part of the India-Bangladesh border and is a significant tidal river connected to the Sundarbans); the Sundarbans National Park buffers into the southern part of the district; the Kolkata Airport (Netaji Subhash Chandra Bose International Airport) is in Dum Dum, North 24 Parganas), and a city of Kolkata's suburban gateway and Bangladesh trade border — is West Bengal's most Kolkata-suburb-northerly and Petrapole-Bangladesh-border-busiest district. From birthday parties in Barasat to celebration cakes — RedHeart covers all North 24 Parganas zones: Barasat, Barrackpore, Dum Dum, Bangaon, Basirhat, Habra, Ashokenagar-Kalyangarh, Naihati, Halisahar, Kalyani, Gaighata.</p>
<p>Our Barasat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barasat (North 24 Parganas), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barasat, Barrackpore, Dum Dum, Bangaon, Basirhat, Habra, Naihati, Halisahar, Kalyani</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barasat (North 24 Parganas)?", answer: "Yes, same-day cake delivery is available across all North 24 Parganas areas — Barasat, Barrackpore, Dum Dum, Bangaon, Basirhat, Habra, Naihati, and Halisahar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Barasat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Barasat (North 24 Parganas) delivery." },
      { question: "Do you deliver midnight cakes in Barasat?", answer: "Yes, midnight birthday cake delivery is available across Barasat, Barrackpore, Dum Dum, and Habra zones." }
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
