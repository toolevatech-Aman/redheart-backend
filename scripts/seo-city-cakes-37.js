// Cakes Batch 37 — 15 cities:
// Rajasthan: Pali, Sawai Madhopur, Dausa, Rajsamand
// UP: Balrampur, Bahraich done — Shravasti, Maharajganj, Lakhimpur (done), Unnao
// Bihar: Samastipur, Buxar, Rohtas
// Karnataka: Chamarajanagar (done) — check → do Ramanagara, Tumkur (Tumakuru)
// AP: Vizianagaram, Srikakulam

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "pali": {
    cityName: "Pali",
    metaTitle: "Cake Delivery in Pali | Ranakpur Jain Temple Bali Sojat Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Pali. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pali",
    metaKeyword: "cake delivery pali, order cake online pali, birthday cake pali, custom cake pali, same day cake delivery pali Ranakpur Jain Chaumukha temple marble 1444 pillars Sojat henna mehndi Bali Jawai Bandh leopard Rajasthan",
    footerContent: `
<h2>Cake Delivery in Pali — Ranakpur's 1444-Pillar Jain Marvel, Sojat's Henna Capital, and Jawai Leopard Country</h2>
<p>Pali — the headquarters of Pali district in Rajasthan, a district of extraordinary Jain heritage, national fame for henna cultivation, and unique leopard conservation (the Ranakpur Jain Temple complex — 90 km from Pali, in a forest valley — is one of the most spectacular Jain temples in the world; the Chaturmukha Dharana Vihara (the main temple of Ranakpur) was built in 1437-1458 CE under the patronage of the merchant Dharana Shah (Dharna Shah) with the blessings of Jain sage Somasundara Suri; the temple has 1,444 intricately carved marble pillars — no two identical — supporting a multi-storey structure of breathtaking sculptural complexity; the temple is dedicated to Adinath (the first Tirthankara); the carved marble ceilings, pillars, and vaults represent the peak of Jain sculptural artistry; the temple complex also includes the Parshvanath and Surya Narayan temples; the Sojat town in Pali district is India's most celebrated henna (mehndi) production centre — the Sojat henna (lawsonia inermis plant paste/powder) is GI-tagged and exported globally; approximately 80% of India's commercially sold mehndi powder comes from Sojat; the Jawai Bandh (Jawai Dam, near Sumerpur, Pali district) is India's most remarkable human-wildlife coexistence story — wild leopards live in the rocky outcrops around the Jawai reservoir and in the villages, sharing space with the Rabari pastoral community (who have cultural taboos against harming leopards); the Jawai Leopard Camp has made Pali a premier wildlife tourism destination), and a city of marble temples, henna, and leopards — is Rajasthan's most architecturally and ecologically spectacular district. From birthday parties in Pali to Ranakpur celebration cakes — RedHeart covers all Pali zones: Pali town, Sojat, Sumerpur, Raipur, Bali, Marwar Junction, Jaitaran.</p>
<p>Our Pali cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Ranakpur 1444-Pillar Jain / Jawai Leopard / Sojat Henna-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pali, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pali town, Sojat, Sumerpur, Raipur, Bali, Marwar Junction, Jaitaran</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ranakpur Jain Fondant, Jawai Leopard Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pali?", answer: "Yes, same-day cake delivery is available across all Pali areas — Pali town, Sojat, Sumerpur, Raipur, Bali, and Marwar Junction — for orders placed before 3 PM." },
      { question: "Do you have Ranakpur Jain Temple and Jawai Leopard-themed cakes?", answer: "Yes! The Ranakpur Chaturmukha Jain Temple (1,444 identically unique marble pillars — Adinath temple built 1437-1458 CE — one of the world's most spectacular pieces of sculptural architecture) and the Jawai Leopard Bandh (wild leopards coexisting with Rabari pastoralists — India's most extraordinary human-wildlife coexistence story) inspire our most gloriously carved and wildly spotted Pali fondant cakes." },
      { question: "Are eggless cakes available in Pali?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch, Mango — are available in eggless variants for Pali delivery." }
    ]
  },

  "sawai-madhopur": {
    cityName: "Sawai Madhopur",
    metaTitle: "Cake Delivery in Sawai Madhopur | Ranthambore Tiger Reserve Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Sawai Madhopur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sawai Madhopur",
    metaKeyword: "cake delivery sawai madhopur, order cake online sawai madhopur, birthday cake sawai madhopur, custom cake sawai madhopur, same day cake delivery sawai madhopur Ranthambore Tiger Reserve UNESCO Bengal Tiger Ranthambore Fort Machli Rajasthan",
    footerContent: `
<h2>Cake Delivery in Sawai Madhopur — Ranthambore's Famous Tigers, UNESCO Fort on the Cliff, and Chambal's Wildlife Gateway</h2>
<p>Sawai Madhopur — the headquarters of Sawai Madhopur district in Rajasthan, world-famous as the gateway to Ranthambore National Park — one of India's most celebrated Tiger Reserves and the best place in the world for photographing tigers in daylight (Ranthambore National Park (Project Tiger reserve since 1973) is India's most famous tiger reserve — unique because the tigers here are diurnal and extremely visible, making Ranthambore one of the world's finest locations for tiger photography; the park is famous for the tigress Machli (T-16) — called the "Queen of Ranthambore" — who lived to age 19 (one of the longest-lived wild tigers) and was responsible for the extraordinary "crocodile fight" photographs that went global; current famous tigers include T-17 "Sundari", T-19 "Krishna", and the legendary T-58 family; the Ranthambore Fort — a UNESCO World Heritage Site (Rajasthan Hill Forts, inscribed 2013) — is situated on a dramatic cliff 700 feet above the valley inside the tiger reserve; the fort has temples to Ganesh (Trinetra Ganesh — the most distinctive Ganesh depiction in Rajasthan), Shiva, and Ramlalaji; the Trinetra Ganesh temple receives millions of pilgrims annually; the fort has Mughal and Rajput architecture; Ranthambore is where several rivers (Chambal system tributaries) meet creating diverse habitats (grassland, forest, lake); the Raj Bagh Ruins, Padam Lake, Malik Talao are iconic lake zones inside Ranthambore), and a city of roaming tigers and cliff-top fort — is Rajasthan's most globally celebrated wildlife destination. From birthday parties in Sawai Madhopur to Ranthambore celebration cakes — RedHeart covers all Sawai Madhopur zones: Sawai Madhopur town, Gangapur City, Bonli, Wazirpur, Bamanwas, Chauth ka Barwara.</p>
<p>Our Sawai Madhopur cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Ranthambore Tiger / Trinetra Ganesh Fort / Machli Queen-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sawai Madhopur, Rajasthan (Ranthambore gateway)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sawai Madhopur town, Gangapur City, Bonli, Wazirpur, Bamanwas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ranthambore Tiger Fondant, Trinetra Ganesh Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sawai Madhopur?", answer: "Yes, same-day cake delivery is available across Sawai Madhopur town, Gangapur City, Bonli, and Bamanwas for orders placed before 3 PM." },
      { question: "Do you have Ranthambore Tiger and Trinetra Ganesh Fort-themed cakes?", answer: "Yes! Ranthambore's world-famous daylight tiger sightings (home of the legendary Machli — 'Queen of Ranthambore' who lived 19 years) and the UNESCO Ranthambore Fort (with the unique Trinetra Ganesh temple inside the tiger reserve) inspire our most roaringly magnificent Sawai Madhopur fondant cakes." },
      { question: "Are eggless cakes available in Sawai Madhopur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sawai Madhopur delivery." }
    ]
  },

  "dausa": {
    cityName: "Dausa",
    metaTitle: "Cake Delivery in Dausa | Abhaneri Chand Baori Stepwell Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Dausa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dausa",
    metaKeyword: "cake delivery dausa, order cake online dausa, birthday cake dausa, custom cake dausa, same day cake delivery dausa Abhaneri Chand Baori stepwell Harshat Mata Mehandipur Balaji Bhandarej Bandikui Rajasthan Jaipur adjacent",
    footerContent: `
<h2>Cake Delivery in Dausa — Abhaneri's Chand Baori Stepwell Masterpiece, Mehandipur Balaji's Exorcism Pilgrimage, and Jaipur's Eastern Gateway</h2>
<p>Dausa — the headquarters of Dausa district in Rajasthan, 55 km east of Jaipur on the Delhi-Jaipur highway — a district of extraordinary stepwell heritage and unique religious traditions (the Chand Baori (Chand Bavdi) at Abhaneri village (Dausa district) is one of the most magnificent stepwells (vav/baoli) in India — built by King Chanda of the Nikumbha dynasty in 9th-10th century CE; the Chand Baori is 30 metres deep with 3,500 narrow steps arranged in perfect geometric patterns on three sides of the square well; from a distance it appears like a crystal lattice of geometric mathematics; the Harshat Mata temple (10th-11th century CE) adjacent to the Chand Baori is a significant Pratihara-era sculptural gallery — even though partially dismantled, the temple sculptures are extraordinary; the Chand Baori became internationally famous after scenes from "The Dark Knight Rises" (2012) and the Bollywood film "Paheli" were filmed here; the Mehandipur Balaji temple (Mehandipur, Dausa district) is one of Rajasthan's most unusual and powerful Hanuman shrines — it is one of India's most important shrines for exorcism and healing (people believe Balaji — the deity — cures those afflicted by evil spirits, black magic, and psychiatric disorders; the healing rituals at Mehandipur Balaji involve dramatic displays of possessed individuals being exorcised); the temple receives an enormous number of pilgrims from across North India; the Dausa district is on the Delhi-Mumbai corridor (National Highway 48) and has significant industrial growth), and a city of mathematical stepwells and extraordinary faith — is Rajasthan's most visually geometric and spiritually intense eastern gateway. From birthday parties in Dausa to celebration cakes — RedHeart covers all Dausa zones: Dausa town, Bandikui, Mahuwa, Lalsot, Bhandarej, Sikrai, Baswa.</p>
<p>Our Dausa cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Chand Baori Stepwell / Mehandipur Balaji / Abhaneri Harshat Mata-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dausa, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dausa town, Bandikui, Mahuwa, Lalsot, Bhandarej, Sikrai, Baswa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chand Baori Fondant, Mehandipur Balaji Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dausa?", answer: "Yes, same-day cake delivery is available across all Dausa areas — Dausa town, Bandikui, Mahuwa, Lalsot, and Bhandarej — for orders placed before 3 PM." },
      { question: "Do you have Chand Baori Stepwell and Mehandipur Balaji-themed cakes?", answer: "Yes! The Chand Baori at Abhaneri (9th-10th century CE, 30m deep, 3,500 geometric steps — one of the world's most mathematically spectacular stepwells, featured in 'The Dark Knight Rises') and the Mehandipur Balaji (one of India's most powerful exorcism/healing shrines) inspire our most geometrically stunning and spiritually charged Dausa fondant cakes." },
      { question: "Are eggless cakes available in Dausa?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dausa delivery." }
    ]
  },

  "rajsamand": {
    cityName: "Rajsamand",
    metaTitle: "Cake Delivery in Rajsamand | Kankroli Dwarkadheesh Nathdwara Lake Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Rajsamand. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rajsamand",
    metaKeyword: "cake delivery rajsamand, order cake online rajsamand, birthday cake rajsamand, custom cake rajsamand, same day cake delivery rajsamand Nathdwara Shrinathji Pichhwai painting Rajsamand Lake marble Kankroli Dwarkadheesh Rajasthan",
    footerContent: `
<h2>Cake Delivery in Rajsamand — Nathdwara's Shrinathji Temple, Pichhwai Painting Heritage, and Rajsamand Lake's Marble Chhatris</h2>
<p>Rajsamand — the headquarters of Rajsamand district in Rajasthan, a district of Vaishnava devotion, unique folk painting, and the most perfectly proportioned artificial lake in India (the Nathdwara temple — 48 km from Rajsamand town — is one of India's most important Vaishnava shrines; the temple (established 1671 CE when the deity Shrinathji was moved from Mathura to escape Aurangzeb's iconoclasm) enshrines a swayambhu (self-manifested) form of Krishna in his Govardhan-lifting pose; the Nathdwara temple is one of the wealthiest temples in India by donation volume; the Nathdwara Pichhwai painting (Pichhwai — temple backdrop paintings for the Shrinathji deity) is a unique Vaishnava devotional art form — large-format cloth paintings depicting Krishna in various seasonal and festival moods (monsoon, spring, autumn); the Nathdwara pichhwai paintings are one of Rajasthan's most distinctive and internationally collected folk art forms; the Rajsamand Lake (Raj Samand Jheel) — built by Maharana Raj Singh of Mewar in 1662-76 CE — is a vast artificial reservoir famous for the Nauchoki (nine pavilions/chhatris) on its northern embankment — nine identical white marble chattris with carved pillars and inscriptions (the Raj Prashasti — a 25-shloka Sanskrit panegyric praising Maharana Raj Singh — inscribed on the lake's marble embankment panels — is the longest inscription on stone in the world); the Kankroli Dwarkadheesh temple is another important Pushti Marg Vaishnava shrine; Rajsamand district is one of Rajasthan's primary marble-quarrying zones), and a city of Vaishnava art and lake marble splendour — is Rajasthan's most devotionally aesthetic district. From birthday parties in Rajsamand to celebration cakes — RedHeart covers all Rajsamand zones: Rajsamand town, Nathdwara, Kankroli, Bhim, Deogarh, Amet, Railmagra.</p>
<p>Our Rajsamand cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant Nathdwara Pichhwai / Shrinathji / Rajsamand Lake Marble-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajsamand, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajsamand town, Nathdwara, Kankroli, Bhim, Deogarh, Amet, Railmagra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nathdwara Pichhwai Fondant, Rajsamand Lake Fondant, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rajsamand?", answer: "Yes, same-day cake delivery is available across all Rajsamand areas — Rajsamand town, Nathdwara, Kankroli, Bhim, and Deogarh — for orders placed before 3 PM." },
      { question: "Do you have Nathdwara Pichhwai and Rajsamand Lake-themed cakes?", answer: "Yes! The Nathdwara Pichhwai painting tradition (large devotional cloth paintings of Shrinathji — one of Rajasthan's most internationally celebrated folk arts) and the Rajsamand Lake's nine marble chhatris (with the world's longest Sanskrit stone inscription — the Raj Prashasti) inspire our most devotionally beautiful Rajsamand fondant cakes." },
      { question: "Are eggless cakes available in Rajsamand?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rajsamand delivery." }
    ]
  },

  "shravasti": {
    cityName: "Shravasti",
    metaTitle: "Cake Delivery in Shravasti | Buddha Jetavana Monastery UP Buddhist Circuit | RedHeart",
    metaDescription: "Order cakes online in Shravasti. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Shravasti",
    metaKeyword: "cake delivery shravasti, order cake online shravasti, birthday cake shravasti, custom cake shravasti, same day cake delivery shravasti Buddha Jetavana monastery Anathapindaka Savatthi Balrampur Rapti river Buddhist Circuit UP",
    footerContent: `
<h2>Cake Delivery in Shravasti — Buddha's 25 Rainy Seasons at Jetavana, Anathapindaka's Gold-Filled Garden, and Ancient Savatthi's Sacred City</h2>
<p>Shravasti — the headquarters of Shravasti district in Uttar Pradesh (carved from Bahraich district in 1997), one of the holiest cities in the Buddhist world — the place where Gautama Buddha spent the maximum number of rainy retreat seasons (25 vassa) (Shravasti (ancient Savatthi, Sravasti) was one of the six great cities of India in the time of the Buddha (600-400 BCE), the capital of the Kosala kingdom under King Prasenajit; the Jetavana Monastery (Jeta's Grove) — donated to the Buddha by the wealthy merchant Anathapindaka (who covered the entire garden floor with gold coins to purchase it at the price Jeta demanded, then built the monastery for the Buddhist Sangha) — was the Buddha's favourite residence for the monsoon retreat; the Buddha delivered a vast number of his most important discourses (suttas) from Shravasti-Jetavana; the Ananda Bodhi tree (a branch of the original Bodhi tree from Bodh Gaya) planted in the Jetavana is still alive today; the ruins of the Jetavana monasteries, Ananda Kuti (the Buddha's personal cell), and the great Jeta stupa are archaeological sites; the Saheth-Maheth archaeological site (Shravasti) has been excavated since the 19th century revealing ancient stupas, monasteries, and Jain remains; the Rapti River (Achiravati River of ancient texts) flows near Shravasti; numerous Buddhist monasteries (Thailand, Japan, Sri Lanka, Myanmar, South Korea) have been built around Shravasti in recent decades; the district borders Nepal's Kapilvastu area — the Buddha's homeland), and the world's most dhamma-rich monsoon site — is UP's most intensely Buddha-associated city. From birthday parties in Shravasti to celebration cakes — RedHeart covers all Shravasti zones: Shravasti town, Bhinga, Ikauna, Sirsia, Jamunaha, Harthala.</p>
<p>Our Shravasti cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Jetavana Monastery / Ananda Bodhi Tree / Savatthi Ruins-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shravasti, Uttar Pradesh (Buddhist Circuit)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shravasti town, Bhinga, Ikauna, Sirsia, Jamunaha, Harthala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Jetavana Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Shravasti?", answer: "Yes, same-day cake delivery is available across all Shravasti areas — Shravasti town, Bhinga, Ikauna, Sirsia, and Jamunaha — for orders placed before 3 PM." },
      { question: "Do you have Jetavana Monastery and Ananda Bodhi Tree-themed cakes?", answer: "Yes! The Jetavana Monastery (where Anathapindaka covered the garden in gold coins to purchase it and built the Buddha's favourite monsoon residence — where 25 vassa were spent delivering the world's most important Buddhist discourses) and the living Ananda Bodhi Tree (a branch of the original Bodhi tree, still standing in Shravasti) inspire our most profoundly illuminated Shravasti fondant cakes." },
      { question: "Are eggless cakes available in Shravasti?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Shravasti delivery." }
    ]
  },

  "maharajganj": {
    cityName: "Maharajganj",
    metaTitle: "Cake Delivery in Maharajganj | Nepal Border Rupaidiya Sohagibarwa UP | RedHeart",
    metaDescription: "Order cakes online in Maharajganj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Maharajganj",
    metaKeyword: "cake delivery maharajganj, order cake online maharajganj, birthday cake maharajganj, custom cake maharajganj, same day cake delivery maharajganj Sohagibarwa Wildlife Sanctuary Gandak Rohini Nepal border Gorakhpur Terai Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Maharajganj — Sohagibarwa Wildlife Sanctuary, Nepal Border's Rohini Gateway, and Tiger Terai Corridor</h2>
<p>Maharajganj — the headquarters of Maharajganj district in Uttar Pradesh, one of the remotest Terai border districts of UP on the Nepal frontier (Maharajganj district borders Nepal's Rupandehi Province (Butwal area) — the Nepal border crossing at Rupaidiya-Nautanwa is an important India-Nepal trade point; the Sohagibarwa Wildlife Sanctuary (Maharajganj district) is one of UP's buffer forest zones in the Terai belt protecting tigers, leopards, elephants, Gharials, Swamp Deer (Barasingha), and diverse wetland birds; the sanctuary connects to Nepal's Palpa and Rupandehi districts' forest zones; the Gandak River (Narayani) and Rohini River (a significant tributary) flow through Maharajganj district; the district is part of the Terai Arc Landscape — one of the world's most significant tiger conservation corridors connecting India and Nepal; Maharajganj town is a small commercial centre connected to Gorakhpur (60 km); the district has significant cultivation of rice, wheat, sugarcane, and maize in the fertile Terai alluvial soils; the trans-border trade through Nautanwa (Maharajganj district) connects the Indian UP Terai to Nepal's Terai towns; the district was carved out of Gorakhpur in 1989; the area has a significant population of Tharu tribal communities — the original Terai forest dwellers who are indigenous to the Indo-Nepal Terai), and a city of Terai tiger corridors and Nepal frontier trade — is UP's most biodiversity-linked Nepal border district. From birthday parties in Maharajganj to celebration cakes — RedHeart covers all Maharajganj zones: Maharajganj town, Nautanwa, Nichlaul, Partaval, Siswa Bazar, Ghughli, Pharenda.</p>
<p>Our Maharajganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Maharajganj, Uttar Pradesh (Terai)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Maharajganj town, Nautanwa, Nichlaul, Partaval, Siswa Bazar, Ghughli, Pharenda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Photo Cake, Black Forest, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Maharajganj?", answer: "Yes, same-day cake delivery is available across all Maharajganj areas — Maharajganj town, Nautanwa, Nichlaul, Partaval, and Siswa Bazar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Maharajganj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Maharajganj delivery." },
      { question: "Do you deliver midnight cakes in Maharajganj?", answer: "Yes, midnight birthday cake delivery is available across Maharajganj town, Nautanwa, and Nichlaul zones." }
    ]
  },

  "unnao": {
    cityName: "Unnao",
    metaTitle: "Cake Delivery in Unnao | Kanpur Adjacent Zari Embroidery Ganga Awadh UP | RedHeart",
    metaDescription: "Order cakes online in Unnao. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Unnao",
    metaKeyword: "cake delivery unnao, order cake online unnao, birthday cake unnao, custom cake unnao, same day cake delivery unnao Kanpur adjacent Zari embroidery leather Ganga Awadh Lucknow corridor Uttar Pradesh",
    footerContent: `
<h2>Cake Delivery in Unnao — Kanpur-Lucknow Corridor's Rising City, Zari-Leather Craft Belt, and Sacred Ganga Ghats</h2>
<p>Unnao — the headquarters of Unnao district in Uttar Pradesh, sandwiched between the two largest cities of UP — Kanpur (15 km east) and Lucknow (45 km north) — making it one of the most strategically placed districts in Uttar Pradesh (Unnao district benefits enormously from proximity to both Kanpur's industrial base and Lucknow's administrative-commercial hub; the Kanpur-Lucknow expressway passes through Unnao; the Unnao district has significant traditional Zari (gold/silver thread embroidery) manufacturing — the Unnao area's Zari artisans contribute to the broader Lucknow-Kanpur chikankari and Zari embroidery tradition; Unnao also has a significant leather goods and leather tanning industry (adjacent to Kanpur's famous leather sector); the Ganga River forms the eastern boundary of Unnao district with several important ghats (Nawabganj Ghat, Shukla Ghat); Chhath Puja on the Unnao ghats of the Ganga is one of the most celebrated in the Kanpur-Lucknow corridor; the Triveni Sangham (three rivers meeting) at Derapur (Unnao) is a local pilgrimage point; the Shivrajpur area (Unnao) has historical significance; the Bithoor (in adjacent Kanpur Nagar district — historically part of Unnao proximity) is where Nana Sahib and Peshwa Baji Rao II had their base during the 1857 uprising; Unnao district has the emerging Unnao UIDA industrial area attracting manufacturing investment), and a city of corridor connectivity and craft heritage — is the most strategically placed small city in UP. From birthday parties in Unnao to celebration cakes — RedHeart covers all Unnao zones: Unnao town, Nawabganj, Purwa, Bangarmau, Hasanganj, Safipur, Bighapur.</p>
<p>Our Unnao cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Ganga Ghat / Zari Embroidery / Kanpur-Lucknow Corridor-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Unnao, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Unnao town, Nawabganj, Purwa, Bangarmau, Hasanganj, Safipur, Bighapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Ganga Ghat Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Unnao?", answer: "Yes, same-day cake delivery is available across all Unnao areas — Unnao town, Nawabganj, Purwa, Bangarmau, Hasanganj, and Safipur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Unnao?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Unnao delivery." },
      { question: "Do you deliver midnight cakes in Unnao?", answer: "Yes, midnight birthday cake delivery is available across Unnao town, Nawabganj, and Purwa zones." }
    ]
  },

  "samastipur": {
    cityName: "Samastipur",
    metaTitle: "Cake Delivery in Samastipur | Budhi Gandak Ganga Mithila Rail Bihar | RedHeart",
    metaDescription: "Order cakes online in Samastipur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Samastipur",
    metaKeyword: "cake delivery samastipur, order cake online samastipur, birthday cake samastipur, custom cake samastipur, same day cake delivery samastipur Budhi Gandak Ganga Mithila Maithili railway junction Bihar sugarcane makhana",
    footerContent: `
<h2>Cake Delivery in Samastipur — Bihar's Major Railway Junction, Budhi Gandak-Ganga River Plains, and Mithilanchal's Agricultural Heart</h2>
<p>Samastipur — the headquarters of Samastipur district in Bihar, one of the most strategically important railway junctions in Bihar and a major centre of North Bihar's Mithilanchal cultural zone (Samastipur is one of Bihar's most important railway junctions — the Hajipur-Samastipur-Darbhanga rail line and the East Central Railway's Samastipur Division make it a hub for North Bihar rail connectivity; the Samastipur Division of the East Central Railway oversees a vast network of tracks across North Bihar and Nepal border areas; Samastipur district is located between the Ganga (to the south) and the Budhi Gandak River (a major Kosi tributary) flowing through the district; the Budhi Gandak is one of Bihar's major rivers carrying Himalayan silt from the Nepal Himalaya; Samastipur is part of Mithilanchal — the ancient Maithili-speaking cultural region of North Bihar; Maithili is now one of India's Scheduled Languages under the 8th Schedule; the Samastipur area has significant cultivation of rice, wheat, sugarcane, and makhana (fox nut); the Pusa Agricultural Research Institute (ICAR Research Complex for Eastern Region, Pusa — Samastipur district) is one of India's most important agricultural research institutions, founded 1905 CE, where many of India's rice and wheat varieties were developed; Lord Lansdowne visited Pusa in 1894 for what became one of India's first planned agricultural stations; Samastipur also has significant traditional handicrafts in Maithili art), and a city of railway hub and Mithila agricultural science — is Bihar's most connected North Bihar district. From birthday parties in Samastipur to celebration cakes — RedHeart covers all Samastipur zones: Samastipur town, Dalsingsarai, Rosera, Bibhutibhushan Nagar, Pusa, Mohiuddinagar, Tajpur.</p>
<p>Our Samastipur cake range: Chocolate, Black Forest, Red Velvet, Mango, Makhana inspired, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Samastipur, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Samastipur town, Dalsingsarai, Rosera, Pusa, Mohiuddinagar, Tajpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Makhana inspired, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Samastipur?", answer: "Yes, same-day cake delivery is available across all Samastipur areas — Samastipur town, Dalsingsarai, Rosera, Pusa, and Mohiuddinagar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Samastipur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango, Makhana inspired — are available in eggless variants for Samastipur delivery." },
      { question: "Do you deliver midnight cakes in Samastipur?", answer: "Yes, midnight birthday cake delivery is available across Samastipur town, Dalsingsarai, and Rosera zones." }
    ]
  },

  "buxar": {
    cityName: "Buxar",
    metaTitle: "Cake Delivery in Buxar | Battle of Buxar 1764 Ganga Bihar | RedHeart",
    metaDescription: "Order cakes online in Buxar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Buxar",
    metaKeyword: "cake delivery buxar, order cake online buxar, birthday cake buxar, custom cake buxar, same day cake delivery buxar Battle of Buxar 1764 British East India Company Ganga Ramrekha Ghat Vishwamitra ashram Ballia UP border Bihar",
    footerContent: `
<h2>Cake Delivery in Buxar — Battle of Buxar 1764's Colonial Turning Point, Ramrekha Ghat's Vedic Vishwamitra Ashram, and Sacred Ganga</h2>
<p>Buxar — the headquarters of Buxar district in Bihar (carved from Bhojpur in 1991), one of the most historically consequential cities of India — the site of the Battle of Buxar (1764) which determined British hegemony over India (the Battle of Buxar (October 22-23, 1764) — fought on the plains near Buxar town between the British East India Company forces (under Major Hector Munro) and a combined army of the Nawab of Awadh (Shuja-ud-Daula), the Mughal Emperor Shah Alam II, and the Nawab of Bengal (Mir Qasim) — was arguably the most important military engagement for British rule in India; the British victory at Buxar (unlike the better-known Plassey, 1757) established unchallenged British military and political supremacy over all of northern and central India; the Treaty of Allahabad (1765) following Buxar gave the East India Company the Diwani (revenue collection rights) of Bengal, Bihar, and Orissa — the economic foundation of the British Empire in India; the Buxar town on the Ganga has ancient mythological associations — it is identified as the Vedic Sidhasrama where the sage Vishwamitra performed his austerities (tapasya); the Ramrekha Ghat on the Ganga at Buxar is where Vishwamitra brought the young princes Rama and Lakshmana to protect his sacrificial fire (yajna); the Ganga at Buxar is one of the most sacred bathing sites of Western Bihar; the Chhath Puja on the Buxar Ganga ghats is extremely vibrant; Buxar also has the Durgawati Temple at the fort site), and a city where British India was truly decided — is Bihar's most historically pivotal Ganga-side city. From birthday parties in Buxar to celebration cakes — RedHeart covers all Buxar zones: Buxar town, Dumraon, Brahmpur, Rajpur, Nawanagar, Kesath, Chouparan.</p>
<p>Our Buxar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Battle of Buxar 1764 / Ganga Ramrekha Ghat / Vishwamitra Ashram-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Buxar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Buxar town, Dumraon, Brahmpur, Rajpur, Nawanagar, Kesath</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango, Chocolate, Battle of Buxar Fondant, Ganga Ghat Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Buxar?", answer: "Yes, same-day cake delivery is available across all Buxar areas — Buxar town, Dumraon, Brahmpur, Rajpur, and Nawanagar — for orders placed before 3 PM." },
      { question: "Do you have Battle of Buxar 1764 and Ganga Ramrekha Ghat-themed cakes?", answer: "Yes! The Battle of Buxar (1764 — more consequential than Plassey; the British victory here gave the East India Company the Diwani of Bengal-Bihar-Orissa, truly founding the British Empire in India) and the Ramrekha Ghat (Vishwamitra's Sidhasrama — where the sage brought young Rama and Lakshmana) inspire our most historically charged and mythologically layered Buxar fondant cakes." },
      { question: "Are eggless cakes available in Buxar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Buxar delivery." }
    ]
  },

  "rohtas": {
    cityName: "Rohtas",
    metaTitle: "Cake Delivery in Rohtas | Sasaram Sher Shah Suri GT Road Son River Bihar | RedHeart",
    metaDescription: "Order cakes online in Rohtas. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rohtas",
    metaKeyword: "cake delivery rohtas, order cake online rohtas, birthday cake rohtas, custom cake rohtas, same day cake delivery rohtas Sasaram Sher Shah Suri mausoleum GT Road Son River Rohtasgarh Fort Cauvery limestone cement Bihar",
    footerContent: `
<h2>Cake Delivery in Rohtas — Sher Shah Suri's Magnificent Mausoleum, Rohtasgarh Fort's Plateau Citadel, and Son River's Limestone Plateau</h2>
<p>Rohtas — the headquarters of Rohtas district in Bihar (Sasaram is the actual city / administrative centre of Rohtas), one of India's most historically and architecturally significant districts — the legacy city of Sher Shah Suri (the Afghan ruler who temporarily replaced the Mughals and built the Grand Trunk Road) (the Sher Shah Suri Mausoleum at Sasaram — built 1540-45 CE by Afghan architect Aliwal Khan — is arguably the finest example of Lodi-Suri Indo-Islamic architecture in India; the mausoleum stands on a platform in the middle of an artificial lake (jarokha style); the octagonal 3-storey structure with a massive central dome (45 metres diameter) and surrounding chhatris is considered one of the precursors of the Taj Mahal's architectural language; Sher Shah Suri (1486-1545 CE) was born in Sasaram and is buried here; he defeated Mughal Emperor Humayun twice (1539 at Chausa, 1540 at Kanauj), temporarily expelled the Mughals, and built the Grand Trunk Road (GT Road) — still India's most important highway — from Peshawar to Bengal; the Rohtas Fort (Rohtasgarh Fort) — on a plateau in the Kaimur hills (Vindhya-Kaimur Range) near Sasaram — is one of India's most impressive medieval plateau forts; the Son River (Sona Nadi — one of the Ganga's major right-bank tributaries) flows through Rohtas district; the Son is a perennial river with significant sand and gravel mining; the district also has major cement plants (Birla Corporation Satna-adjacent zone) using the Vindhyan limestone; the Kaimur Wildlife Sanctuary in the district has tigers and leopards), and a city of Suri dynasty architecture and Grand Trunk Road legacy — is Bihar's most historically impactful western gateway. From birthday parties in Rohtas to celebration cakes — RedHeart covers all Rohtas zones: Sasaram (Rohtas HQ), Dehri-on-Sone, Bikramganj, Nokha, Kochas, Chenari, Dawath.</p>
<p>Our Rohtas cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sher Shah Suri Mausoleum / Rohtasgarh Fort / Grand Trunk Road-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rohtas (Sasaram), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sasaram, Dehri-on-Sone, Bikramganj, Nokha, Kochas, Chenari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sher Shah Suri Mausoleum Fondant, Rohtasgarh Fort Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rohtas (Sasaram)?", answer: "Yes, same-day cake delivery is available across all Rohtas areas — Sasaram, Dehri-on-Sone, Bikramganj, Nokha, and Kochas — for orders placed before 3 PM." },
      { question: "Do you have Sher Shah Suri Mausoleum and Rohtasgarh Fort-themed cakes?", answer: "Yes! The Sher Shah Suri Mausoleum at Sasaram (1540-45 CE — the octagonal lake-platform tomb that prefigures the Taj Mahal, built by the Afghan conqueror who expelled the Mughals and built the Grand Trunk Road) and the Rohtasgarh plateau fort (one of India's most dramatic medieval citadels in the Kaimur hills) inspire our most architecturally resplendent Rohtas fondant cakes." },
      { question: "Are eggless cakes available in Rohtas?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rohtas delivery." }
    ]
  },

  "ramanagara": {
    cityName: "Ramanagara",
    metaTitle: "Cake Delivery in Ramanagara | Sholay Ramdevarabetta Silk Cocoon Karnataka | RedHeart",
    metaDescription: "Order cakes online in Ramanagara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ramanagara",
    metaKeyword: "cake delivery ramanagara, order cake online ramanagara, birthday cake ramanagara, custom cake ramanagara, same day cake delivery ramanagara Sholay film Ramdevarabetta rock Silk Cocoon market world largest Cauvery Karnataka Bangalore",
    footerContent: `
<h2>Cake Delivery in Ramanagara — Sholay's Ramdevarabetta Rocks, World's Largest Silk Cocoon Market, and Cauvery Wildlife Adventure</h2>
<p>Ramanagara — the headquarters of Ramanagara district in Karnataka (56 km from Bangalore on the Bangalore-Mysore Highway), famous globally for two very different reasons — Bollywood and silk (Ramanagara achieved international fame as the filming location for the iconic Bollywood movie "Sholay" (1975) — directed by Ramesh Sippy; the dramatic rocky outcrops of Ramdevarabetta (Ramanagara hills) served as "Ramgarh" in the film — the memorable bandits' hideout; the granite rocks of Ramanagara have since become a significant rock-climbing and rappelling destination attracting adventure tourists; the Ramanagara Silk Cocoon Market (Ramanagara Resham Bazar) is the world's largest silk cocoon trading market by volume; the Cauvery basin's mulberry cultivation (in Karnataka's Kolar-Ramanagara-Hassan belt) produces the most mulberry silk cocoons in India, and Ramanagara is the central trading hub; the Ramanagara market processes transactions for thousands of silk reelers who supply the Mysore and Bangalore silk weaving industry; the Cauvery River flows through the Ramanagara district creating gorges and waterfalls; the Chunchi Falls and Mekedatu (Goat's Leap) — on the Cauvery where the river narrows to 20 feet between two granite cliffs — are spectacular natural features in Ramanagara district; the Sangama (Cauvery-Arkavathi confluence) is a significant pilgrimage and picnic site; the NICE Road (Mysore-Bangalore) and the Bangalore-Mysore Expressway pass through the district), and a city of Sholay's rocks and silk commerce — is Karnataka's most cinematically and sericuturally celebrated city. From birthday parties in Ramanagara to celebration cakes — RedHeart covers all Ramanagara zones: Ramanagara town, Channapatna, Kanakapura, Magadi, Bidadi, Harohalli, Sathanur.</p>
<p>Our Ramanagara cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Sholay Ramdevarabetta / Silk Cocoon Market / Mekedatu Cauvery-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramanagara, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramanagara town, Channapatna, Kanakapura, Magadi, Bidadi, Harohalli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sholay Ramdevarabetta Fondant, Silk Cocoon Fondant, Coconut, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ramanagara?", answer: "Yes, same-day cake delivery is available across all Ramanagara areas — Ramanagara town, Channapatna, Kanakapura, Magadi, and Bidadi — for orders placed before 3 PM." },
      { question: "Do you have Sholay Ramdevarabetta and Silk Cocoon Market-themed cakes?", answer: "Yes! The Ramdevarabetta granite rocks (the iconic filming location of 'Sholay' 1975 — Jai-Veeru's 'Ramgarh' — now a world-famous rock climbing site) and the Ramanagara Silk Cocoon Market (world's largest silk cocoon trading hub by volume — the heart of Karnataka's mulberry silk industry) inspire our most cinematic and silky Ramanagara fondant cakes." },
      { question: "Are eggless cakes available in Ramanagara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Ramanagara delivery." }
    ]
  },

  "tumakuru": {
    cityName: "Tumakuru",
    metaTitle: "Cake Delivery in Tumakuru | Siddaganga Coconut Mulberry Silk Karnataka | RedHeart",
    metaDescription: "Order cakes online in Tumakuru. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tumakuru",
    metaKeyword: "cake delivery tumakuru, order cake online tumakuru, birthday cake tumakuru, custom cake tumakuru, same day cake delivery tumakuru Siddaganga Math Shivakumara Swami coconut mulberry silk Devarayanadurga Karnataka Bengaluru adjacent",
    footerContent: `
<h2>Cake Delivery in Tumakuru — Siddaganga Math's Feeding Millions, Coconut Silk Capital, and Devarayanadurga's Hilltop Temples</h2>
<p>Tumakuru (Tumkur) — the headquarters of Tumakuru district in Karnataka, one of Karnataka's most significant agricultural and spiritually vibrant cities, 70 km from Bengaluru (the Siddaganga Math (Siddaganga Mutt), Tumakuru, is one of Karnataka's most revered religious institutions; the Siddaganga Math is famous for the free daily meals programme (Dasoha) — for over 60 years, the Math has fed thousands of poor students, pilgrims, and workers every single day without charge; the late Swami Shivakumara (Siddagangaiah — 1907-2019) who led the Math for over 90 years was called the "Walking God" (Nadedadevaru) of Karnataka; he received the Padma Vibhushan (India's second-highest civilian award) and was nominated for the Nobel Peace Prize; after his passing at age 111, the Math continues the Dasoha tradition; Tumakuru district is Karnataka's leading coconut-producing district — the Tumkur belt produces coconuts, arecanut, and mulberry (for silk); the Tumkur mulberry silk weaving (Kolar-Tumkur belt silk) contributes to the Bangalore silk industry; the Devarayanadurga (40 km from Tumakuru) is a rocky hillfort temple complex — the twin peaks with the Yoganarasimha and Bhoganarasimha Vishnu temples are one of Karnataka's most important pilgrimage and trekking destinations; the Pavagada Solar Park (Tumakuru district) — 2,000 MW capacity — is one of the world's largest solar parks; Tumakuru has significant electronics and garment manufacturing in its industrial areas), and a city of compassionate feeding, coconut groves, and solar power — is Karnataka's most giving city. From birthday parties in Tumakuru to celebration cakes — RedHeart covers all Tumakuru zones: Tumakuru town, Tiptur, Sira, Madhugiri, Gubbi, Turuvekere, Pavagada, Koratagere.</p>
<p>Our Tumakuru cake range: Chocolate, Black Forest, Red Velvet, Coconut (Tumkur coconut belt!), Mango, Butterscotch, Photo Cakes, Fondant Siddaganga Math Dasoha / Devarayanadurga / Solar Park-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tumakuru (Tumkur), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tumakuru town, Tiptur, Sira, Madhugiri, Gubbi, Turuvekere, Pavagada</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Siddaganga Dasoha Fondant, Devarayanadurga Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tumakuru?", answer: "Yes, same-day cake delivery is available across all Tumakuru areas — Tumakuru town, Tiptur, Sira, Madhugiri, Gubbi, and Pavagada — for orders placed before 3 PM." },
      { question: "Do you have Siddaganga Math and Devarayanadurga-themed cakes?", answer: "Yes! The Siddaganga Math's 60+ year Dasoha programme (the 'Walking God' Swami Shivakumara — 111 years old, Padma Vibhushan — feeding thousands of poor students free every day for decades) and the Devarayanadurga twin-peak Vishnu temple trekking site inspire our most compassionately beautiful Tumakuru fondant cakes." },
      { question: "Are eggless cakes available in Tumakuru?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Tumakuru delivery." }
    ]
  },

  "vizianagaram": {
    cityName: "Vizianagaram",
    metaTitle: "Cake Delivery in Vizianagaram | Vizianagaram Fort Tribal Kondh Andhra | RedHeart",
    metaDescription: "Order cakes online in Vizianagaram. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vizianagaram",
    metaKeyword: "cake delivery vizianagaram, order cake online vizianagaram, birthday cake vizianagaram, custom cake vizianagaram, same day cake delivery vizianagaram Vizianagaram Fort Pushkaram Gajapati kingdom Nagavali Kondh Tribal turmeric Andhra Pradesh",
    footerContent: `
<h2>Cake Delivery in Vizianagaram — Vizianagaram Fort's Gajapati Kingdom, Pushkaram Nagavali Ghats, and Northern Andhra Tribal Heartland</h2>
<p>Vizianagaram — the headquarters of Vizianagaram district in Andhra Pradesh (North Andhra), a city of princely heritage, tribal diversity, and river festival on the northern Andhra coast (the Vizianagaram Fort (Vizianagaram Garhi) — the fort of the Vizianagaram Maharajah family — is the central heritage landmark of the city; the Vizianagaram Maharajah (Pusapati Vijayarama Gajapati Raju) was one of the most culturally significant patrons in colonial North Andhra — the family supported education, classical music (Carnatic and Bharatanatyam), and maintained a vast scholarly tradition; the Vizianagaram Maharajah's College (founded 1879) is one of the oldest and most respected institutions in Andhra Pradesh; the "Vizianagaram" school of classical Kuchipudi dance (the Kuchipudi dance form was supported by the Vizianagaram royal family in the colonial era); the Nagavali River (also called the Langulya) flows through Vizianagaram and hosts the Nagavali Pushkaram (12-year river festival); the Pushkaram fair attracts millions of devotees for ritual bathing; the Vizianagaram district has significant tribal populations — the Kondh, Savara, Bagata, Konda Reddy, and Jatapu tribes inhabit the Eastern Ghats areas of the district (Parvathipuram area); the Parvatipuram-Manyam area (now carved into a separate district) was one of the most tribal-dominated areas of AP; turmeric and cashew cultivation are significant in the Vizianagaram district; the Bobbili town (Vizianagaram district) is famous for the Battle of Bobbili (1757) and Bobbili veena (a large traditional instrument)), and a city of royal musical heritage and river festival — is North Andhra's most culturally distinguished princely city. From birthday parties in Vizianagaram to celebration cakes — RedHeart covers all Vizianagaram zones: Vizianagaram town, Bobbili, Rajam, Salur, Parvathipuram, Gajapatinagaram, Srungavarapukota.</p>
<p>Our Vizianagaram cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Turmeric-spiced, Photo Cakes, Fondant Vizianagaram Fort / Nagavali Pushkaram / Bobbili Veena-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vizianagaram, Andhra Pradesh (North Andhra)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vizianagaram town, Bobbili, Rajam, Salur, Parvathipuram, Gajapatinagaram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Vizianagaram Fort Fondant, Nagavali Pushkaram Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vizianagaram?", answer: "Yes, same-day cake delivery is available across all Vizianagaram areas — Vizianagaram town, Bobbili, Rajam, Salur, and Parvathipuram — for orders placed before 3 PM." },
      { question: "Do you have Vizianagaram Fort and Nagavali Pushkaram-themed cakes?", answer: "Yes! The Vizianagaram Maharajah's Fort (home of the royal family that patronised Kuchipudi dance and Carnatic music in colonial North Andhra) and the Nagavali River Pushkaram (12-year sacred river festival with millions bathing at the ghats) inspire our most royally melodious Vizianagaram fondant cakes." },
      { question: "Are eggless cakes available in Vizianagaram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Vizianagaram delivery." }
    ]
  },

  "srikakulam": {
    cityName: "Srikakulam",
    metaTitle: "Cake Delivery in Srikakulam | Arasavalli Sun Temple Narmada Andhra | RedHeart",
    metaDescription: "Order cakes online in Srikakulam. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Srikakulam",
    metaKeyword: "cake delivery srikakulam, order cake online srikakulam, birthday cake srikakulam, custom cake srikakulam, same day cake delivery srikakulam Arasavalli Surya Sun temple Srikurmam Kurma temple Narasimha Swami Vamsadhara Narmada river Andhra Pradesh Odisha border",
    footerContent: `
<h2>Cake Delivery in Srikakulam — Arasavalli Sun Temple's Equinox Rays, Srikurmam's Tortoise Avatar Temple, and Andhra's Odisha Border</h2>
<p>Srikakulam — the headquarters of Srikakulam district in Andhra Pradesh (the northernmost district of AP bordering Odisha), a city of exceptional sun and tortoise temple heritage on the Bay of Bengal coast (the Arasavalli Sun Temple (Surya Bhagavan temple) — on the outskirts of Srikakulam town — is one of India's most significant Sun temples; the Arasavalli Surya temple (7th century CE, Kalinga-Chola style) is unique because twice a year (during the spring and autumn equinox periods in March and June), the sun's rays at sunrise fall directly on the feet of the main deity (Samba Narayana/Surya) through a specially designed window — a remarkable feat of ancient astronomical architecture; the Srikurmam Kurma Temple (30 km from Srikakulam) is one of India's rarest and most unique temples — it is dedicated to Lord Kurma (the Tortoise Avatar/Vishnu's second Kurma incarnation) and is one of only two Kurma temples in India (the other being Kurmai in Telangana); the Kurma deity at Srikurmam is a massive granite figure in the form of a tortoise; the Srikakulam district also has the Narasimhaswami Temple at Simhachalam (adjacent Vizag) and various coastal temples; the Vamsadhara River flows through Srikakulam; the Narasannapeta area has significant cashew and turmeric cultivation; the Srikakulam coast (Bay of Bengal) has fishing communities (Jalari fishing caste) with centuries-old sea-going traditions; the district borders Odisha's Gajapati and Ganjam districts; Jaganmohan Nayak (tribal freedom fighter) is a hero of Srikakulam), and a city of sun rays and tortoise avatar divinity — is North Andhra's most uniquely astronomically designed temple city. From birthday parties in Srikakulam to celebration cakes — RedHeart covers all Srikakulam zones: Srikakulam town, Narasannapeta, Palasa, Tekkali, Amadalavalasa, Rajam, Etcherla.</p>
<p>Our Srikakulam cake range: Chocolate, Black Forest, Red Velvet, Coconut (Bay of Bengal!), Mango, Butterscotch, Photo Cakes, Fondant Arasavalli Sun Temple Equinox / Srikurmam Kurma Avatar / Vamsadhara Coast-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Srikakulam, Andhra Pradesh (northernmost district)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Srikakulam town, Narasannapeta, Palasa, Tekkali, Amadalavalasa, Etcherla</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Arasavalli Sun Temple Fondant, Srikurmam Kurma Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Srikakulam?", answer: "Yes, same-day cake delivery is available across all Srikakulam areas — Srikakulam town, Narasannapeta, Palasa, Tekkali, and Amadalavalasa — for orders placed before 3 PM." },
      { question: "Do you have Arasavalli Sun Temple Equinox and Srikurmam Kurma-themed cakes?", answer: "Yes! The Arasavalli Sun Temple (7th century Kalinga-Chola — where twice a year during equinox the sunrise rays fall directly on the deity's feet through a precision-aligned window) and the Srikurmam Kurma Temple (one of only two temples in India dedicated to Vishnu's Tortoise Avatar) inspire our most astronomically precise and divinely rare Srikakulam fondant cakes." },
      { question: "Are eggless cakes available in Srikakulam?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Srikakulam delivery." }
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
