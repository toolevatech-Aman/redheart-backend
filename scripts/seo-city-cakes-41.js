// Cakes Batch 41 — 15 cities
// Rajasthan: Chittorgarh, Jhunjhunu, Nagaur
// UP: Baghpat, Bulandshahr, Jalaun, Hamirpur UP
// Bihar: Kaimur, Rohtas (check - done 37), Sitamarhi (check - might not be done)
// Odisha: Mayurbhanj, Deogarh
// Karnataka: Chikkamagaluru
// Himachal: Kinnaur
// Assam: Jorhat

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "chittorgarh": {
    cityName: "Chittorgarh",
    metaTitle: "Cake Delivery in Chittorgarh | Meera Padmini Vijay Stambha Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Chittorgarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chittorgarh",
    metaKeyword: "cake delivery chittorgarh, order cake online chittorgarh, birthday cake chittorgarh, custom cake chittorgarh, same day cake delivery chittorgarh Chittod Fort Padmini Meera Vijay Stambha Jauhar Rana Kumbha Rajput UNESCO Rajasthan",
    footerContent: `
<h2>Cake Delivery in Chittorgarh — Padmini's Jauhar, Vijay Stambha's Inscribed Glory, and Meera Bai's Eternal Devotion</h2>
<p>Chittorgarh — the headquarters of Chittorgarh district in Rajasthan, home to India's most emotionally powerful and historically significant Rajput citadel — a city of sacrifice, devotion, and architectural grandeur (the Chittorgarh Fort (Chittor Fort — UNESCO World Heritage Site, inscribed 2013 as part of "Hill Forts of Rajputana") — perched on a 180-metre mesa, spreading over 700 acres — is the largest fort in India by area and one of the largest in the world; the fort was the ancient capital of the Mewar kingdom (the kingdom of the Sisodia Rajputs); three Jauhar (mass self-immolation by Rajput women to avoid capture by invaders) are recorded at Chittor: the first Jauhar (1303 CE, Queen Padmini's Jauhar before Alauddin Khilji's conquest), the second Jauhar (1535 CE, before Bahadur Shah of Gujarat's conquest), and the third Jauhar (1568 CE, before Akbar's conquest — after which Rana Udai Singh founded Udaipur); the Vijay Stambha (Tower of Victory — Rana Kumbha, 1448 CE) — a 37-metre tall, 9-storey tower covered with 9 panels of inscription (a detailed encyclopaedia of Rajput culture, religion, martial arts, and iconography carved into the stone) — is one of medieval India's most extraordinary monumental structures; the Kirti Stambha (Tower of Fame — 12th century, Digambara Jain memorial) predates the Vijay Stambha; the Meera Bai temple (Mirabai's Bhakti devotion to Krishna — she lived at Chittor as the wife of Bhojraj, heir to the Mewar throne — and her devotional songs (bhajans) to Krishna form one of the most celebrated bodies of devotional poetry in Indian literature; the Padmini Palace (a lake pavilion) and the Rani Kumbha Palace are iconic structures within the fort), and a city of Jauhar sacrifice and bhakti devotion — is Rajasthan's most spiritually and martially charged fort-city. From birthday parties in Chittorgarh to celebration cakes — RedHeart covers all Chittorgarh zones: Chittorgarh town, Nimbahera, Rawatbhata, Bari Sadri, Gangrar, Begun, Kapasan.</p>
<p>Our Chittorgarh cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Vijay Stambha Tower / Padmini Jauhar / Meera Bai / Chittor Fort UNESCO-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chittorgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chittorgarh town, Nimbahera, Rawatbhata, Bari Sadri, Gangrar, Begun, Kapasan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Vijay Stambha Fondant, Padmini Jauhar Fondant, Meera Bai Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chittorgarh?", answer: "Yes, same-day cake delivery is available across all Chittorgarh areas — Chittorgarh town, Nimbahera, Rawatbhata, Bari Sadri, and Gangrar — for orders placed before 3 PM." },
      { question: "Do you have Vijay Stambha and Padmini Jauhar-themed cakes for Chittorgarh?", answer: "Yes! The Vijay Stambha (37-metre Tower of Victory, 1448 CE, with 9 panels of inscribed Rajput cultural encyclopaedia), Padmini's Jauhar (1303 CE — the most iconic Rajput act of sacrifice), and Meera Bai's eternal bhakti devotion to Krishna (her bhajans are among India's most celebrated devotional poetry) inspire our most martially and devotionally charged Chittorgarh fondant cakes." },
      { question: "Are eggless cakes available in Chittorgarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chittorgarh delivery." }
    ]
  },

  "jhunjhunu": {
    cityName: "Jhunjhunu",
    metaTitle: "Cake Delivery in Jhunjhunu | Shekhawati Frescoes Marwari Heritage Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Jhunjhunu. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jhunjhunu",
    metaKeyword: "cake delivery jhunjhunu, order cake online jhunjhunu, birthday cake jhunjhunu, custom cake jhunjhunu, same day cake delivery jhunjhunu Shekhawati frescoes havelis Marwari merchant open air art gallery Rani Sati temple Rajasthan",
    footerContent: `
<h2>Cake Delivery in Jhunjhunu — Shekhawati's Fresco Havelis, World's Open-Air Art Gallery, and Marwari Merchant Heritage</h2>
<p>Jhunjhunu — the headquarters of Jhunjhunu district in Rajasthan, the capital of the Shekhawati region — known internationally as the "Open Air Art Gallery of Rajasthan" for its extraordinary concentration of fresco-painted merchant havelis (the Shekhawati region (Jhunjhunu, Sikar, Churu, Nagaur districts — the former domain of the Shekhawat Rajputs and later of Marwari merchant families) has the densest concentration of fresco-painted havelis in the world; 18th-19th century Marwari (Maheshwari, Oswal, Agarwal) merchant families who made fortunes in trade and banking across colonial India invested those fortunes in building spectacular havelis in their home towns, decorating them with frescoes painted in natural mineral colours; the frescoes depict mythological scenes (Krishna, Ramayana, Mahabharata), courtly scenes, European subjects (British trains, cars, Europeans — demonstrating cosmopolitan awareness), portraits, and folk subjects; Mandawa, Fatehpur, Nawalgarh, Dundlod (all in Shekhawati) are famous haveli towns; the Rani Sati Temple (Rani Sati Dadi — Jhunjhunu) is one of the most significant and controversial religious sites in Rajasthan — a sati (widow self-immolation) memorial; the Khetri Copper Mines (Khetri, Jhunjhunu district) are one of India's major copper deposits and were associated with Swami Vivekananda's patron Raja Ajit Singh of Khetri — who gifted Vivekananda his ochre robes for the 1893 Chicago Parliament of Religions; the district borders Haryana and is part of the semi-arid transition zone), and a city of frescoed merchant havelis and copper mines — is Rajasthan's most painted and artistically entrepreneurial region. From birthday parties in Jhunjhunu to celebration cakes — RedHeart covers all Jhunjhunu zones: Jhunjhunu town, Nawalgarh, Mandawa, Fatehpur Shekhawati, Khetri, Pilani, Baggar, Chirawa.</p>
<p>Our Jhunjhunu cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Shekhawati Haveli Fresco / Marwari Merchant / Khetri Copper / Swami Vivekananda-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhunjhunu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhunjhunu town, Nawalgarh, Mandawa, Fatehpur Shekhawati, Khetri, Pilani, Chirawa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Shekhawati Fresco Fondant, Haveli Fondant, Butterscotch, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jhunjhunu?", answer: "Yes, same-day cake delivery is available across all Jhunjhunu areas — Jhunjhunu town, Nawalgarh, Mandawa, Fatehpur Shekhawati, Khetri, and Pilani — for orders placed before 3 PM." },
      { question: "Do you have Shekhawati Fresco Haveli-themed cakes for Jhunjhunu?", answer: "Yes! The Shekhawati fresco havelis (world's densest concentration of painted merchant mansions — Marwari families' mineral-colour frescoes of Krishna myths, British trains, and cosmopolitan 18th-19th century scenes) and the Khetri Copper Mines (Swami Vivekananda's patron Raja Ajit Singh gifted him his famous ochre robes here before the 1893 Chicago Parliament of Religions) inspire our most artistically fresco-painted Jhunjhunu fondant cakes." },
      { question: "Are eggless cakes available in Jhunjhunu?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jhunjhunu delivery." }
    ]
  },

  "nagaur": {
    cityName: "Nagaur",
    metaTitle: "Cake Delivery in Nagaur | Nagaur Fort Cattle Fair Marwar Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Nagaur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nagaur",
    metaKeyword: "cake delivery nagaur, order cake online nagaur, birthday cake nagaur, custom cake nagaur, same day cake delivery nagaur Nagaur Fort Ahhichatragarh cattle fair bullock cart races Heer-Ranjha Khimsar dune Marwar Rajasthan",
    footerContent: `
<h2>Cake Delivery in Nagaur — Ahhichatragarh Fort's Painted Chambers, Nagaur Cattle Fair, and Marwar's Desert Heartland</h2>
<p>Nagaur — the headquarters of Nagaur district in Rajasthan, the heart of the Marwar region — famous for its magnificently restored palace-fort, one of Rajasthan's most important agricultural fairs, and its position in the arid Thar heartland (the Nagaur Fort (Ahhichatragarh Fort — "Fort of the hooded cobra") — originally built in the 4th century CE (Naga period), expanded by the Delhi Sultanate (Iltutmish, 13th century), and finally developed by the Rathor Rajputs of Marwar in the 16th-17th century CE — has been magnificently restored by the Paul Getty Conservation Institute and the Mehrangarh Museum Trust; the fort's Sheesh Mahal (Mirror Palace) and Akbar's Hamam (Royal Bath) are among the finest restored interiors in Rajasthan; the fort has exceptional Rajput painted chambers with floral motifs in rich ochres and earth tones; the Nagaur Cattle Fair (Nagaur Pashudhan Mela — held in January-February) is one of Rajasthan's largest and most traditional cattle fairs — trading hundreds of thousands of bullocks, camels, and horses; the fair is famous for its bullock cart races and camel competitions; the Khimsar Fort (Nagaur district) — now a heritage hotel — sits on a dune with dramatic Thar Desert landscape; the Nagaur district produces henna (mehndi), cumin (jeera — GI product of Rajasthan), and mustard; the Meerta City (Nagaur district) is the birthplace of Meera Bai (the bhakti poet-saint); the Nawal Fort and Kuchaman Fort are also in Nagaur district), and a city of restored painted chambers and desert cattle fairs — is Rajasthan's most traditionally Marwari agricultural district. From birthday parties in Nagaur to celebration cakes — RedHeart covers all Nagaur zones: Nagaur town, Ladnun, Merta City, Kuchaman City, Didwana, Khimsar, Jayal, Mundwa.</p>
<p>Our Nagaur cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Ahhichatragarh Fort / Nagaur Cattle Fair Bullock Race / Meera Bai Merta / Khimsar Dune-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaur town, Ladnun, Merta City, Kuchaman City, Didwana, Khimsar, Jayal, Mundwa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ahhichatragarh Fort Fondant, Nagaur Cattle Fair Fondant, Butterscotch, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nagaur?", answer: "Yes, same-day cake delivery is available across all Nagaur areas — Nagaur town, Ladnun, Merta City, Kuchaman City, Didwana, and Khimsar — for orders placed before 3 PM." },
      { question: "Do you have Nagaur Fort and Cattle Fair-themed cakes?", answer: "Yes! The Ahhichatragarh Fort (magnificently restored by the Paul Getty Institute — with exceptional Sheesh Mahal mirror chambers and Rajput floral painted interiors) and the Nagaur Cattle Fair (bullock cart races, camel trading — one of Rajasthan's grandest traditional agricultural fairs) inspire our most Marwari-grandly painted Nagaur fondant cakes." },
      { question: "Are eggless cakes available in Nagaur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nagaur delivery." }
    ]
  },

  "baghpat": {
    cityName: "Baghpat",
    metaTitle: "Cake Delivery in Baghpat | Mahabharata Pandu Site Yamuna Delhi NCR UP | RedHeart",
    metaDescription: "Order cakes online in Baghpat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Baghpat",
    metaKeyword: "cake delivery baghpat, order cake online baghpat, birthday cake baghpat, custom cake baghpat, same day cake delivery baghpat Pandu khas Mahabharata excavation Yamuna Delhi NCR adjacent Haryana border Meerut UP Doab",
    footerContent: `
<h2>Cake Delivery in Baghpat — Vyagraprastha Mahabharata Site, Yamuna Doab, and Delhi-Meerut NCR Corridor</h2>
<p>Baghpat — the headquarters of Baghpat district in Uttar Pradesh (carved from Meerut in 1997), one of the westernmost districts of UP on the Yamuna-Hindon Doab bordering Haryana (the ancient name "Bagpat" or "Vyaghrprastha" is associated with the Mahabharata — Baghpat is identified with Vyagraprastha, one of the five villages demanded by the Pandavas from the Kauravas (the five villages being Indraprastha, Paniprastha, Soneprastha, Vyagraprastha, and Tilprastha); the Pandu Khera (Baghpat district) archaeological site has yielded Painted Grey Ware (PGW) artefacts dating to circa 900-600 BCE — the period associated with the later Vedic/Epic age; the Yamuna River forms the western boundary of the district (the border with Haryana); the Hindon River flows through eastern Baghpat; the district is directly adjacent to Delhi (only 50 km from Delhi's Akshardham area) and is part of the extended Delhi-Meerut NCR urban expansion; the Eastern Peripheral Expressway (Kundli-Manesar-Palwal, passing through Baghpat area) has significantly integrated the district into the NCR; the Baraut town (Baghpat district) is the most significant commercial town, with agricultural markets and light industry; the district is agriculturally rich (wheat, sugarcane, mustard) in the fertile Yamuna-Hindon Doab; the Baghpat district has a significant Jat-Muslim population mix), and a city of epic Mahabharata association and NCR agricultural transition — is western UP's most Dvapara-Yuga-historically proximate district. From birthday parties in Baghpat to celebration cakes — RedHeart covers all Baghpat zones: Baghpat town, Baraut, Khekra, Pilana, Chhaprauli, Modinagar (adjacent Ghaziabad).</p>
<p>Our Baghpat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Vyagraprastha Mahabharata / Yamuna Doab / Pandavas Five Villages-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baghpat, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baghpat town, Baraut, Khekra, Pilana, Chhaprauli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Mahabharata Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Baghpat?", answer: "Yes, same-day cake delivery is available across all Baghpat areas — Baghpat town, Baraut, Khekra, Pilana, and Chhaprauli — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Baghpat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Baghpat delivery." },
      { question: "Do you deliver midnight cakes in Baghpat?", answer: "Yes, midnight birthday cake delivery is available across Baghpat town and Baraut zones." }
    ]
  },

  "bulandshahr": {
    cityName: "Bulandshahr",
    metaTitle: "Cake Delivery in Bulandshahr | Glass Industry Shikarpur Doab UP NCR | RedHeart",
    metaDescription: "Order cakes online in Bulandshahr. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bulandshahr",
    metaKeyword: "cake delivery bulandshahr, order cake online bulandshahr, birthday cake bulandshahr, custom cake bulandshahr, same day cake delivery bulandshahr glass bangles Shikarpur Ganga Yamuna Doab Narora nuclear plant UP NCR adjacent",
    footerContent: `
<h2>Cake Delivery in Bulandshahr — Shikarpur's Glass Bangle Industry, Narora Atomic Power, and Ganga-Yamuna Doab Fertility</h2>
<p>Bulandshahr — the headquarters of Bulandshahr district in Uttar Pradesh, a district on the eastern Doab (between the Ganga and Yamuna) directly adjacent to the Delhi-NCR urban corridor (the Shikarpur (Bulandshahr district) is India's most important centre for glass bangle manufacturing — the majority of India's glass bangles and coloured glass beads used in bangles and jewellery are produced in Shikarpur; the glass industry uses traditional furnaces and skilled craftsmanship to produce colourful bangles worn across North India; the Narora Atomic Power Station (NAPS) — located at Narora on the Ganga (Bulandshahr district) — is one of India's oldest nuclear power plants (operational 1991-92; Pressurised Heavy Water Reactor); the Ganga flows through the eastern edge of the district at Narora, making it a significant Ganga pilgrimage bathing site; the Bulandshahr district is part of the Delhi-Agra National Highway (NH-19) corridor; the Khurja town (Bulandshahr district) is famous for GI Khurja Pottery — blue and white glazed pottery (Iznik-style blue pottery with floral and geometric designs on white background) — one of India's most famous ceramic craft traditions; Khurja pottery is exported internationally; the Bulandshahr area has significant dairy farming and milk production (part of the UP Doab white revolution belt)), and a city of glass bangles and nuclear power and blue pottery — is western UP's most industrially variegated Doab district. From birthday parties in Bulandshahr to celebration cakes — RedHeart covers all Bulandshahr zones: Bulandshahr town, Khurja, Shikarpur, Sikandrabad, Anupshahr, Dibai, Jahangirabad, Gulaothi.</p>
<p>Our Bulandshahr cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Shikarpur Glass Bangles / Khurja Blue Pottery / Narora Ganga Doab-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bulandshahr, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bulandshahr town, Khurja, Shikarpur, Sikandrabad, Anupshahr, Dibai, Gulaothi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Khurja Blue Pottery Fondant, Glass Bangles Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bulandshahr?", answer: "Yes, same-day cake delivery is available across all Bulandshahr areas — Bulandshahr town, Khurja, Shikarpur, Sikandrabad, Anupshahr, and Dibai — for orders placed before 3 PM." },
      { question: "Do you have Khurja Blue Pottery and Glass Bangle-themed cakes?", answer: "Yes! The GI Khurja Pottery (blue and white glazed Iznik-style ceramic craft — internationally exported) and the Shikarpur glass bangle industry (most of India's glass bangles and coloured glass beads for jewellery originate here) inspire our most craftilyshimmering Bulandshahr fondant cakes." },
      { question: "Are eggless cakes available in Bulandshahr?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bulandshahr delivery." }
    ]
  },

  "jalaun": {
    cityName: "Jalaun",
    metaTitle: "Cake Delivery in Jalaun | Orai Betwa River Bundhelkhand UP | RedHeart",
    metaDescription: "Order cakes online in Jalaun. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jalaun",
    metaKeyword: "cake delivery jalaun, order cake online jalaun, birthday cake jalaun, custom cake jalaun, same day cake delivery jalaun Orai Betwa River Bundhelkhand Chatarpur-Jhansi corridor dakait Chambel UP",
    footerContent: `
<h2>Cake Delivery in Jalaun — Orai's Betwa River Banks, Bundelkhand's Granite Landscape, and Madhya Pradesh Border</h2>
<p>Jalaun — the headquarters of Jalaun district in Uttar Pradesh, part of the historically significant Bundelkhand region on the central Indian plateau (Jalaun district is in the semi-arid Bundelkhand region — a region of rocky, granite terrain between the Vindhya-Kaimur ranges and the Ganga plains; the Betwa River (a Yamuna tributary flowing from Madhya Pradesh through Bundelkhand) flows through Jalaun district; the Betwa originates near Bhopal (MP), flows through Vidisha (the Sanchi stupa area), and enters UP through Bundelkhand — its basin includes some of India's most historically significant terrain; the Orai town (Jalaun district headquarters) is on the Pahuj River near the Betwa; Jalaun district borders Hamirpur, Jaloun, and Madhya Pradesh's Tikamgarh and Sagar districts; the Bundelkhand region (UP side: Jhansi, Jalaun, Hamirpur, Lalitpur, Mahoba, Banda, Chitrakoot) has historically been associated with dacoit activity in the rocky ravines (Phoolan Devi, Man Singh operated in this terrain); the district has significant cultivation of lentils (dal), jowar (sorghum), and wheat in the hard Bundelkhand soils; the Naraini area and Konch (Jalaun) are significant towns; water scarcity is a perennial challenge in the drought-prone Bundelkhand plateau), and a city of Betwa river valleys and Bundelkhand granite — is UP's most historically rocky and water-challenged plateau district. From birthday parties in Jalaun to celebration cakes — RedHeart covers all Jalaun zones: Orai (Jalaun HQ), Konch, Naraini, Kalpi, Madhavgarh, Rampur Maniharan.</p>
<p>Our Jalaun cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalaun (Orai), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orai, Konch, Naraini, Kalpi, Madhavgarh, Rampur Maniharan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Betwa River Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jalaun (Orai)?", answer: "Yes, same-day cake delivery is available across all Jalaun areas — Orai, Konch, Naraini, Kalpi, and Madhavgarh — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jalaun?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jalaun delivery." },
      { question: "Do you deliver midnight cakes in Jalaun?", answer: "Yes, midnight birthday cake delivery is available across Orai and Konch zones in Jalaun district." }
    ]
  },

  "hamirpur-up": {
    cityName: "Hamirpur",
    metaTitle: "Cake Delivery in Hamirpur UP | Betwa Yamuna Bundelkhand UP | RedHeart",
    metaDescription: "Order cakes online in Hamirpur UP. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hamirpur (UP)",
    metaKeyword: "cake delivery hamirpur up, order cake online hamirpur up, birthday cake hamirpur, custom cake hamirpur, same day cake delivery hamirpur Uttar Pradesh Betwa Yamuna confluence Bundelkhand Sumerpur Maudaha rocky plateau",
    footerContent: `
<h2>Cake Delivery in Hamirpur (UP) — Betwa-Yamuna Sangam, Bundelkhand's Rocky Plateau, and Kendua's Famous Tuvar Dal</h2>
<p>Hamirpur — the headquarters of Hamirpur district in Uttar Pradesh (not to be confused with Hamirpur HP in Himachal Pradesh), located in the central Bundelkhand plateau region on the confluence of the Betwa and Yamuna rivers (the Betwa-Yamuna Sangam (at Hamirpur — where the Betwa River, flowing from Bundelkhand, meets the Yamuna River) is a significant pilgrimage bathing site; the Sangam at Hamirpur is particularly revered during the Kartik Purnima and Makar Sankranti fairs; the Hamirpur district is part of the Bundelkhand rocky plateau — the granite-quartzite terrain of central India; the Yamuna River flows along the northern boundary of Hamirpur district; the district is a significant producer of tuvar dal (pigeon peas) and other pulses in the semi-arid Bundelkhand agricultural zone; the district has significant marble and stone quarrying activities; Maudaha (Hamirpur) and Sumerpur are significant towns; the Hamirpur area borders Banda and Mahoba districts; the Bundelkhand Expressway (connecting Bundelkhand to Agra and Delhi) passes through or near the district), and a city of sacred river confluence and Bundelkhand plateau agriculture — is central UP's most Betwa-Yamuna Sangam district. From birthday parties in Hamirpur UP to celebration cakes — RedHeart covers all zones: Hamirpur town, Maudaha, Sumerpur, Rath, Sarila, Gopalganj Bundelkhand, Mustara.</p>
<p>Our Hamirpur (UP) cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur town, Maudaha, Sumerpur, Rath, Sarila</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Betwa-Yamuna Sangam Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hamirpur UP?", answer: "Yes, same-day cake delivery is available across all Hamirpur UP areas — Hamirpur town, Maudaha, Sumerpur, Rath, and Sarila — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hamirpur UP?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hamirpur UP delivery." },
      { question: "Do you deliver midnight cakes in Hamirpur UP?", answer: "Yes, midnight birthday cake delivery is available across Hamirpur town and Maudaha zones." }
    ]
  },

  "kaimur": {
    cityName: "Kaimur",
    metaTitle: "Cake Delivery in Kaimur | Bhojpur Raj Wyndham Falls Son River Bihar | RedHeart",
    metaDescription: "Order cakes online in Kaimur Bihar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kaimur (Bhabua)",
    metaKeyword: "cake delivery kaimur, order cake online kaimur, birthday cake kaimur, custom cake kaimur, same day cake delivery kaimur Bhabua Son River Wyndham Falls Kaimur plateau Rohtas Bihar sandstone tribal forest",
    footerContent: `
<h2>Cake Delivery in Kaimur (Bhabua) — Wyndham Falls, Kaimur Plateau's Forest, and Son River's Sandstone Landscape</h2>
<p>Kaimur — the headquarters of Kaimur district in Bihar (headquarters at Bhabua, also called Bhabhua), one of Bihar's most forested and scenic districts on the Kaimur Plateau (the Kaimur Plateau (also called Kaimur Hills) — a sandstone ridge of the Vindhya Range extending from Chitrakoot (UP) through Kaimur and Rohtas districts of Bihar into Jharkhand — is one of Bihar's most significant geological and ecological features; the Son River flows along the southern edge of the Kaimur Plateau through Kaimur and Rohtas districts, creating scenic gorges and waterfalls; the Wyndham Falls (also called Waterfall of Wyndham — in the Kaimur Wildlife Sanctuary) is a dramatic sandstone waterfall in the forested Kaimur plateau; the Kaimur Wildlife Sanctuary (Kaimur District Forest) protects sloth bears, leopards, wolves, crocodiles (in the Son River), and significant birdlife; the Bhojpur Raj area has archaeological and historical significance; the Bhabua town is the district headquarters; the Chandraprabha River flows through the district; the district borders UP's Mirzapur district (the Vindhya-Kaimur mountain corridor); the Son River valley through Kaimur has beautiful sandstone gorges), and a city of Kaimur Plateau gorges and Son River scenery — is Bihar's most plateau-forested southwestern district. From birthday parties in Kaimur to celebration cakes — RedHeart covers all zones: Bhabua (Kaimur HQ), Mohania, Ramgarh, Nuaon, Chainpur, Durgawati, Bhagwanpur.</p>
<p>Our Kaimur (Bhabua) cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Wyndham Falls / Kaimur Plateau / Son River Gorge-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaimur (Bhabua), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhabua, Mohania, Ramgarh, Nuaon, Chainpur, Durgawati, Bhagwanpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Kaimur Plateau Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kaimur (Bhabua)?", answer: "Yes, same-day cake delivery is available across all Kaimur areas — Bhabua, Mohania, Ramgarh, Nuaon, and Chainpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kaimur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kaimur delivery." },
      { question: "Do you deliver midnight cakes in Kaimur?", answer: "Yes, midnight birthday cake delivery is available across Bhabua and Mohania zones in Kaimur district." }
    ]
  },

  "mayurbhanj": {
    cityName: "Mayurbhanj",
    metaTitle: "Cake Delivery in Mayurbhanj | Simlipal Tiger Reserve Chhau Dance Odisha | RedHeart",
    metaDescription: "Order cakes online in Mayurbhanj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mayurbhanj (Baripada)",
    metaKeyword: "cake delivery mayurbhanj, order cake online mayurbhanj, birthday cake mayurbhanj, custom cake mayurbhanj, same day cake delivery mayurbhanj Simlipal Tiger Reserve Biosphere Reserve Chhau dance UNESCO Baripada Odisha tribal",
    footerContent: `
<h2>Cake Delivery in Mayurbhanj (Baripada) — Simlipal Tiger Reserve, UNESCO Chhau Dance, and Odisha's Largest District</h2>
<p>Mayurbhanj — the headquarters of Mayurbhanj district in Odisha (headquarters at Baripada), one of Odisha's largest and most ecologically and culturally distinguished northern districts (the Simlipal National Park and Tiger Reserve (Similipal Biosphere Reserve — 2750 sq km, one of India's largest national parks) is in Mayurbhanj district; Simlipal has tigers, Asian elephants, and crocodiles; the Barehipani Waterfall (399 metres) and Joranda Waterfall (181 metres) — both within Simlipal — are among India's highest waterfalls; Simlipal is a core zone of the Simlipal Biosphere Reserve (UNESCO-designated); the Chhau Dance of Mayurbhanj (Seraikella Chhau and Mayurbhanj Chhau) — a martial-based tribal dance form with elaborate masks and costumes depicting episodes from the Mahabharata and Ramayana — is UNESCO Intangible Cultural Heritage; the Mayurbhanj Chhau (maskless form) is particularly associated with the Baripada royal family; the Mayurbhanj royal family (Bhanj dynasty) has a distinguished cultural patronage history — the palace (Maharaja of Mayurbhanj's palace) is in Baripada; the Khiching temple (Kichakeshwari — patroness of the Bhanja dynasty) is near Baripada; the Ho, Munda, Santal, and Bhumij tribal communities form a significant part of the district population), and a city of Simlipal biodiversity and Chhau cultural tradition — is Odisha's most biodiversity-rich and culturally tribal northern district. From birthday parties in Mayurbhanj to celebration cakes — RedHeart covers all zones: Baripada, Rairangpur, Karanjia, Udala, Bangriposi, Bamanghaty, Jashipur.</p>
<p>Our Mayurbhanj cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Simlipal Tiger Reserve / Barehipani Waterfall / Chhau Dance UNESCO-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mayurbhanj (Baripada), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baripada, Rairangpur, Karanjia, Udala, Bangriposi, Bamanghaty, Jashipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Simlipal Tiger Fondant, Chhau Dance Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mayurbhanj (Baripada)?", answer: "Yes, same-day cake delivery is available across all Mayurbhanj areas — Baripada, Rairangpur, Karanjia, Udala, and Bangriposi — for orders placed before 3 PM." },
      { question: "Do you have Simlipal Tiger Reserve and Chhau Dance-themed cakes?", answer: "Yes! The Simlipal National Park (2750 sq km — India's one of the largest tiger reserves, with Barehipani Waterfall at 399 metres, Joranda Waterfall at 181 metres) and the UNESCO Chhau Dance (Mayurbhanj's maskless martial tribal dance depicting Mahabharata and Ramayana episodes) inspire our most wildly tigerly and culturally martial Mayurbhanj fondant cakes." },
      { question: "Are eggless cakes available in Mayurbhanj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Mayurbhanj delivery." }
    ]
  },

  "chikkamagaluru": {
    cityName: "Chikkamagaluru",
    metaTitle: "Cake Delivery in Chikkamagaluru | Coffee Capital Mullayanagiri Karnataka | RedHeart",
    metaDescription: "Order cakes online in Chikkamagaluru. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chikkamagaluru",
    metaKeyword: "cake delivery chikkamagaluru, order cake online chikkamagaluru, birthday cake chikkamagaluru, custom cake chikkamagaluru, same day cake delivery chikkamagaluru coffee capital India Mullayanagiri highest Karnataka peak Baba Budangiri Western Ghats",
    footerContent: `
<h2>Cake Delivery in Chikkamagaluru — India's Coffee Capital, Mullayanagiri's Highest Karnataka Peak, and Baba Budangiri's Arabian Bean Legacy</h2>
<p>Chikkamagaluru — the headquarters of Chikkamagaluru district in Karnataka, India's original coffee-growing heartland — the city that initiated India's entire coffee culture (Baba Budan (Baba Budangiri — the Sufi saint Baba Budan Sha Daria Saheb) is credited with smuggling seven coffee beans from Yemen's Mocha port (circa 1670 CE) and planting them in the Chikkamagaluru hills — these seven beans seeded India's entire coffee industry; the Baba Budangiri Hills (Dattagiri range) in Chikkamagaluru is the historically significant site of the first coffee cultivation in India; today, the Baba Budangiri shrine (revered by both Hindus as Dattatreya and Muslims as the Sufi Baba Budan) is a syncretic pilgrimage site; Chikkamagaluru district produces the majority of Karnataka's coffee (Arabica and Robusta varieties) along with cardamom, pepper, and areca nut in the Western Ghats estates; the Mullayanagiri Peak (1930 metres) — the highest peak in Karnataka — is in the Baba Budangiri range of Chikkamagaluru district; the Mullayanagiri trekking trail is one of Karnataka's most popular; the Hebbe Falls (168 metres) in the Bhadra Tiger Reserve area of Chikkamagaluru are among Karnataka's most spectacular waterfalls; the Bhadra Wildlife Sanctuary and Tiger Reserve is in the district; the Hoysala temples at Belur and Halebid (Hassan district) are accessible from Chikkamagaluru; the Kemmangundi hill station (1434 metres) is in the district; the Gangamoola ("source of rivers" — where the Tunga, Bhadra, and Netravati rivers originate) is in the Chikkamagaluru hills), and a city of Arabian coffee beans and Karnataka's highest peak — is Karnataka's most aromatically elevated Western Ghats district. From birthday parties in Chikkamagaluru to celebration cakes — RedHeart covers all zones: Chikkamagaluru town, Kadur, Birur, Mudigere, Sringeri, Tarikere, Narasimharajapura, Koppa.</p>
<p>Our Chikkamagaluru cake range: Chocolate, Coffee (signature!), Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Mullayanagiri Peak / Baba Budangiri Coffee / Western Ghats / Hebbe Falls-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chikkamagaluru, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chikkamagaluru town, Kadur, Birur, Mudigere, Sringeri, Tarikere, Koppa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coffee (signature), Chocolate, Mullayanagiri Peak Fondant, Baba Budangiri Coffee Estate, Coconut</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chikkamagaluru?", answer: "Yes, same-day cake delivery is available across all Chikkamagaluru areas — Chikkamagaluru town, Kadur, Birur, Mudigere, Sringeri, Tarikere, and Koppa — for orders placed before 3 PM." },
      { question: "Do you have Coffee-flavoured and Mullayanagiri Peak-themed cakes?", answer: "Yes! Chikkamagaluru is India's coffee capital — where Baba Budan (the Sufi saint) smuggled 7 Arabian Mocha coffee beans circa 1670 CE and planted them in the Baba Budangiri Hills, seeding India's entire coffee industry. Our signature Coffee Cake and the Mullayanagiri Peak fondant (1930 metres — Karnataka's highest peak) are Chikkamagaluru's most iconic cake themes." },
      { question: "Are eggless cakes available in Chikkamagaluru?", answer: "Yes, all flavours — Coffee, Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Chikkamagaluru delivery." }
    ]
  },

  "jorhat": {
    cityName: "Jorhat",
    metaTitle: "Cake Delivery in Jorhat | Tea Capital Majuli River Island Assam | RedHeart",
    metaDescription: "Order cakes online in Jorhat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jorhat",
    metaKeyword: "cake delivery jorhat, order cake online jorhat, birthday cake jorhat, custom cake jorhat, same day cake delivery jorhat Tea capital Assam Majuli river island Brahmaputra sattra Vaishnavism Tocklai research station Jorhat Gymkhana",
    footerContent: `
<h2>Cake Delivery in Jorhat — Assam's Tea Capital, Majuli's River Island Sattra Culture, and Brahmaputra's Sacred Heritage</h2>
<p>Jorhat — the headquarters of Jorhat district in Assam, the "Tea Capital of the World" and the gateway to Majuli — India's most culturally unique river island (Jorhat has the highest density of tea estates in any district in the world — hundreds of tea gardens covering thousands of acres of the Jorhat-Dibrugarh belt; Assam tea (CTC Assam black tea — the bold, malty, high-caffeine tea that forms the base of "chai" across India) is primarily produced in this belt; the Tocklai Tea Research Station (Jorhat) — established 1911, one of the world's oldest and most important tea research institutions — has developed many of India's most significant tea cultivars and processing innovations; Majuli Island (accessible by ferry from Jorhat) — on the Brahmaputra River — is the world's largest river island (1250 sq km); Majuli is the cultural and spiritual capital of Assamese Vaishnavism — it has 22 Satras (Vaishnavite monasteries established by the Bhakti saint Mahapurusha Srimanta Sankardeva, 15th-16th century CE); the Satra tradition includes classical Sattriya dance (one of India's 8 classical dance forms — UNESCO recognized), mask-making (mukha), and manuscript traditions; Jorhat was the last capital of the Ahom Kingdom (before the British annexation in 1826); the Jorhat Gymkhana Club (established 1876) is one of the oldest clubs in Asia — a legacy of the tea-planting British colonial community; the Gibbon Wildlife Sanctuary (hoolock gibbon habitat) is near Jorhat), and a city of tea estates and Majuli Sattra culture — is Assam's most aromatically and spiritually elevated city. From birthday parties in Jorhat to celebration cakes — RedHeart covers all zones: Jorhat town, Majuli, Titabor, Mariani, Teok, Bokolia, Dergaon.</p>
<p>Our Jorhat cake range: Chocolate, Black Forest, Red Velvet, Tea-flavoured (signature Assam tea!), Mango, Butterscotch, Photo Cakes, Fondant Majuli Sattra / Assam Tea Estate / Brahmaputra River Island / Sattriya Dance-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jorhat, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jorhat town, Majuli, Titabor, Mariani, Teok, Bokolia, Dergaon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Assam Tea Cake (signature), Chocolate, Majuli Sattra Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jorhat?", answer: "Yes, same-day cake delivery is available across all Jorhat areas — Jorhat town, Majuli, Titabor, Mariani, Teok, and Dergaon — for orders placed before 3 PM." },
      { question: "Do you have Assam Tea-flavoured and Majuli Sattra-themed cakes for Jorhat?", answer: "Yes! Jorhat is the world's tea capital — with the highest density of tea estates on earth and the Tocklai Tea Research Institute (1911, world's oldest tea research centre). Our Assam Tea-flavoured cake and the Majuli Sattra fondant (22 Vaishnavite monasteries on the world's largest river island — cultural capital of Sankardeva's Bhakti Sattriya dance tradition) are Jorhat's most soulfully aromatic signature cakes." },
      { question: "Are eggless cakes available in Jorhat?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango, Assam Tea — are available in eggless variants for Jorhat delivery." }
    ]
  },

  "kinnaur": {
    cityName: "Kinnaur",
    metaTitle: "Cake Delivery in Kinnaur | Apple Orchards Kinner Kailash HP | RedHeart",
    metaDescription: "Order cakes online in Kinnaur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kinnaur (Reckong Peo)",
    metaKeyword: "cake delivery kinnaur, order cake online kinnaur, birthday cake kinnaur, custom cake kinnaur, same day cake delivery kinnaur Reckong Peo apple orchards Kinner Kailash Sutlej Tibet border Spiti valley Himachal Pradesh",
    footerContent: `
<h2>Cake Delivery in Kinnaur (Reckong Peo) — Apple Orchard Terraces, Kinner Kailash's Sacred Pilgrimage, and Sutlej Tibet Border Valley</h2>
<p>Kinnaur — the headquarters of Kinnaur district in Himachal Pradesh (headquarters at Reckong Peo), one of India's most spectacularly remote and culturally distinct high-altitude districts on the Tibet border (Kinnaur district is one of India's finest apple-producing regions — the Kinnauri apples (especially the Kinnaur apple variety) are prized for their crisp texture and excellent flavour; the apple orchards of Kinnaur are terraced across the steep Sutlej and Spiti river gorge slopes at altitudes of 2,000-3,500 metres; the Kinnaur apple and dry fruit (walnut, chilgoza pine nuts) economy has transformed the district; the Kinner Kailash (Kinnor Kailash — a 6050-metre peak in Kinnaur) is a sacred mountain in Hindu and Buddhist tradition — it is believed to be the abode of Lord Shiva and one of the five Kailash mountains; the Kinner Kailash Parikrama (circumambulation pilgrimage) at 14,000+ feet is one of Himachal's most challenging and sacred high-altitude pilgrimages; the Sutlej River (the Langchen Khabab — originating in Tibet near Mansarovar) flows through the entire length of Kinnaur district in a dramatic gorge; the district is bounded by Tibet (China) to the north and east; the restricted area permit (Inner Line Permit) was required for foreigners until recently; the Sangla Valley (Baspa River valley — a Sutlej tributary) is one of India's most scenic valleys; the Kalpa village (near Reckong Peo) has extraordinary views of Kinner Kailash; the Chitkul village (in Sangla Valley) is India's last inhabited village on the China border; the Nako Lake at high altitude (3,662 metres) and the ancient Tabo Monastery (Spiti — adjacent) are part of the trans-Himalayan cultural zone), and a city of Tibet border apple orchards and Kailash pilgrimages — is Himachal Pradesh's most sacred and fruitfully elevated high-altitude district. From birthday parties in Kinnaur to celebration cakes — RedHeart covers all Kinnaur zones: Reckong Peo (Kinnaur HQ), Kalpa, Sangla, Chitkul, Nako, Pooh, Morang.</p>
<p>Our Kinnaur cake range: Chocolate, Apple-flavoured (signature Kinnauri apple!), Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kinner Kailash / Kinnaur Apple Orchard / Sangla Valley / Sutlej Tibet Border-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kinnaur (Reckong Peo), Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Reckong Peo, Kalpa, Sangla, Chitkul, Nako, Pooh, Morang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple Kinnauri (signature), Chocolate, Kinner Kailash Fondant, Sangla Valley Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kinnaur (Reckong Peo)?", answer: "Yes, same-day cake delivery is available across all Kinnaur areas — Reckong Peo, Kalpa, Sangla, Chitkul, Nako, and Pooh — for orders placed before 3 PM." },
      { question: "Do you have Kinnauri Apple and Kinner Kailash-themed cakes?", answer: "Yes! The Kinnauri apple (crisp, flavourful apples from terraced orchards at 2,000-3,500 metres on the Sutlej-Tibet gorge slopes) and the Kinner Kailash (a 6050-metre peak — abode of Shiva, one of the five Kailash mountains — with a parikrama pilgrimage at 14,000+ feet) inspire our most exquisitely high-altitude Kinnaur fondant cakes." },
      { question: "Are eggless cakes available in Kinnaur?", answer: "Yes, all flavours — Apple, Chocolate, Black Forest, Red Velvet — are available in eggless variants for Kinnaur delivery." }
    ]
  },

  "deogarh-odisha": {
    cityName: "Deogarh",
    metaTitle: "Cake Delivery in Deogarh | Daringbadi Valley Odisha Satellite | RedHeart",
    metaDescription: "Order cakes online in Deogarh Odisha. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Deogarh (Odisha)",
    metaKeyword: "cake delivery deogarh odisha, order cake online deogarh, birthday cake deogarh, custom cake deogarh, same day cake delivery deogarh Odisha Brahmani River Bhubaneswar Satellite Ib River satellite district small Odisha",
    footerContent: `
<h2>Cake Delivery in Deogarh (Odisha) — Brahmani River Gorges, Satellite District Centre, and Odisha's Smallest but Forest-Rich Interior</h2>
<p>Deogarh — the headquarters of Deogarh district in Odisha (not to be confused with Deoghar in Jharkhand or Deogarh in other states), one of Odisha's smallest and most recently formed interior districts in the upper Brahmani basin (Deogarh district — formed in 1994 from Sambalpur district — is a small satellite district in the upper Mahanadi and Brahmani headwaters zone in western Odisha; the Brahmani River (one of Odisha's most important rivers — flows into the Paradip-Baitarani delta system on the coast) originates in the Deogarh-Sundargarh highlands; the district is mostly forested hill terrain on the eastern margin of the Chota Nagpur plateau transition; the district borders Sundargarh (north), Sambalpur (west), and Angul (east); the area has significant tribal (Binjhal, Khond, Munda) populations; the Deogarh forest area is an important part of the Odisha forest biodiversity corridor; the Ib River (a Mahanadi tributary) flows through adjacent areas; Deogarh district is a producer of rice, pulses, and oilseeds in the forested river valley patches; the district headquarters Deogarh town has a weekly haat (tribal market) as the main commercial gathering), and a small forest-valley district — is Odisha's most compact upper-Brahmani watershed interior district. From birthday parties in Deogarh Odisha to celebration cakes — RedHeart covers all Deogarh zones: Deogarh town, Tileibani, Barkote, Reamal.</p>
<p>Our Deogarh (Odisha) cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deogarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deogarh town, Tileibani, Barkote, Reamal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Photo Cake, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Deogarh Odisha?", answer: "Yes, same-day cake delivery is available across Deogarh town, Tileibani, Barkote, and Reamal for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Deogarh Odisha?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Deogarh Odisha delivery." },
      { question: "Do you deliver midnight cakes in Deogarh?", answer: "Yes, midnight birthday cake delivery is available across Deogarh town and Tileibani zones in Odisha." }
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
