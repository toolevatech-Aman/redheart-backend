// Cakes Batch 57 — 12 cities
// UP remaining: Mahoba, Banda, Chitrakoot (UP side), Hamirpur UP already done, Mahrajganj, Kushinagar, Siddharthnagar
// Bihar: Arwal, Supaul, Madhepura, Saharsa, Sitamarhi

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "mahoba": {
    cityName: "Mahoba",
    metaTitle: "Cake Delivery in Mahoba | Chandela Dynasty Alha Udal Warriors Bundelkhand | RedHeart",
    metaDescription: "Order cakes online in Mahoba. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mahoba",
    metaKeyword: "cake delivery mahoba, order cake online mahoba, birthday cake mahoba, custom cake mahoba, same day cake delivery mahoba Chandela dynasty Alha Udal warriors Bundelkhand Khajuraho adjacent UP Madan Sagar Madan Varma",
    footerContent: `
<h2>Cake Delivery in Mahoba — Chandela Kingdom Capital, Alha-Udal Warrior Epic, and Bundelkhand's Ancient Heritage</h2>
<p>Mahoba — the district headquarters of Mahoba district in Uttar Pradesh (Bundelkhand region), the ancient capital of the Chandela Rajput dynasty — the same dynasty that built the Khajuraho temples (the Chandela Dynasty (9th-13th century CE) — the Chandelas ruled from Mahoba as their primary political capital (while Khajuraho served as their cultural-religious capital); the Chandela kings built the famous Khajuraho temples in present-day Madhya Pradesh; the Rahila Sagar (tank/reservoir) and Madan Sagar (Mahoba's ancient Chandela-era reservoirs — Madan Sagar built by King Madanvarman in the 12th century CE; these hydraulic works of the Chandelas are remarkable feats of medieval engineering); the Alha-Udal Epic (Alha and Udal — the two legendary Chandela warrior heroes of Mahoba; their epic cycle (Alha Khand or Alha — a long vernacular poem about their exploits) is enormously popular in rural Uttar Pradesh, Madhya Pradesh, and Bihar; traditionally sung by Alha singers in the monsoon season; the Battle of Alha Udal vs. Prithviraj Chauhan (1182 CE Battle of Chandavar — the Chandelas of Mahoba fought against Prithviraj Chauhan III of Delhi; Alha and Udal are the famous generals; this battle is celebrated in the epic poetry as a tragic defeat but heroic resistance); the Sun Temple at Rahila (Chandela-era; near Mahoba; bas-relief sculpture; now partially excavated; ASI protected)), and a city of Chandela capital and Alha-Udal warrior epic — is Uttar Pradesh's most Chandela-capital-Khajuraho-same-dynasty and Alha-Udal-Bundelkhand-warrior-epic Mahoba. From birthday parties in Mahoba to celebration cakes — RedHeart covers all Mahoba areas: Mahoba city, Kulpahar, Charkhari, Kabrai, Panwari, Jaitpur.</p>
<p>Our Mahoba cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chandela Dynasty Heritage / Alha-Udal Warriors / Madan Sagar Tank-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahoba, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahoba city, Kulpahar, Charkhari, Kabrai, Panwari, Jaitpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chandela Fondant, Alha-Udal Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mahoba?", answer: "Yes, same-day cake delivery is available across all Mahoba areas — Mahoba city, Kulpahar, Charkhari, Kabrai, and Panwari — for orders placed before 3 PM." },
      { question: "Do you have Chandela Dynasty and Alha-Udal-themed cakes?", answer: "Yes! The Chandela Dynasty (the same dynasty that built Khajuraho temples; ruled from Mahoba; built remarkable Madan Sagar reservoir 12th CE) and the Alha-Udal warrior epic (the legendary Chandela generals whose 1182 CE battle against Prithviraj Chauhan is sung in villages across UP-MP-Bihar in the monsoon season) inspire our most Chandela-Khajuraho-same-dynasty and Alha-Udal-Bundelkhand-warrior fondant cakes." },
      { question: "Are eggless cakes available in Mahoba?", answer: "Yes, all flavours are available in eggless variants for Mahoba delivery." }
    ]
  },

  "banda": {
    cityName: "Banda",
    metaTitle: "Cake Delivery in Banda | Ken River Bundelkhand UP Panna Tiger Reserve | RedHeart",
    metaDescription: "Order cakes online in Banda. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Banda",
    metaKeyword: "cake delivery banda, order cake online banda, birthday cake banda, custom cake banda, custom cake banda, same day cake delivery banda Ken River Bundelkhand Panna Tiger Reserve adjacent Chitrakoot UP Yamuna Vindhya Range",
    footerContent: `
<h2>Cake Delivery in Banda — Ken River, Bundelkhand's Drought Belt, Panna Diamond Fields Adjacent, and Vindhya Ranges</h2>
<p>Banda — the district headquarters of Banda district in Uttar Pradesh (Bundelkhand region), a district on the Ken River known for its challenging semi-arid landscape and proximity to the diamond-mining and tiger reserve area (the Ken River (Ken Betwa River Link Project — the Ken and Betwa rivers are being linked in one of India's most ambitious and controversial inter-river linking projects; the Ken originates in MP and flows northward through Banda into the Yamuna; the Ken-Betwa Link (KBLP) will divert Ken water to Betwa to address Bundelkhand's chronic water shortage; it submerges part of the Panna Tiger Reserve (MP) — generating significant environmental debate; the Panna Diamond Fields (the Panna district of MP, adjacent to Banda, is India's only significant diamond-mining area; the Majhgawan diamond mine has produced diamonds since ancient times; the alluvial diamond deposits of the Ken River system extend into the Banda-Panna belt; the famous "Regent Diamond" of France was found from this region); the Banda stone/shale (the distinctive "Banda stone" — a dark slate-like stone used for roofing and writing slates; quarried in Banda district); the Bundelkhand drought zone (Banda-Mahoba-Jhansi-Chitrakoot belt; chronically water-stressed; one of India's most poverty-affected agricultural regions; repeated crop failures; significant agricultural distress history)), and a city of Ken River and Panna diamond-fields Bundelkhand drought belt — is Uttar Pradesh's most Ken-Betwa-link-controversy and Panna-diamond-fields-adjacent Bundelkhand-drought-belt Banda. From birthday parties in Banda to celebration cakes — RedHeart covers all Banda areas: Banda city, Atarra, Naraini, Baberu, Badokhar Khurd, Tindwari, Kamasin.</p>
<p>Our Banda cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banda, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banda city, Atarra, Naraini, Baberu, Badokhar Khurd, Tindwari, Kamasin</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Banda?", answer: "Yes, same-day cake delivery is available across all Banda areas — Banda city, Atarra, Naraini, Baberu, and Badokhar Khurd — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Banda?", answer: "Yes, all flavours are available in eggless variants for Banda (UP) delivery." },
      { question: "Do you deliver midnight cakes in Banda?", answer: "Yes, midnight birthday cake delivery is available across Banda city zones." }
    ]
  },

  "maharajganj": {
    cityName: "Maharajganj",
    metaTitle: "Cake Delivery in Maharajganj | Nepal Border Lumbini Adjacent Napalese Terai UP | RedHeart",
    metaDescription: "Order cakes online in Maharajganj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Maharajganj",
    metaKeyword: "cake delivery maharajganj, order cake online maharajganj, birthday cake maharajganj, custom cake maharajganj, same day cake delivery maharajganj Nepal border Lumbini Lord Buddha birthplace Sonauli Terai Ghaghra Rapti UP",
    footerContent: `
<h2>Cake Delivery in Maharajganj — Nepal Border Gateway, Lumbini (Buddha's Birthplace) Adjacent, and Terai Forests</h2>
<p>Maharajganj — the district headquarters of Maharajganj district in Uttar Pradesh (Nepal border district; part of the eastern UP Terai), a district at India's Nepal border adjacent to Lumbini — the birthplace of the Buddha (the Nepal-India border at Sonauli (Maharajganj district) — the Sonauli border crossing is one of the main Nepal-India border crossings; the crossing leads to Bhairahawa (Nepal) and then to Lumbini (approximately 22 km from the border); Lumbini (Nepal) is the birthplace of Siddhartha Gautama/Gautama Buddha (563-483 BCE — or 623-543 BCE by alternative calculation); the Maya Devi Temple and the Ashokan Pillar at Lumbini (Emperor Ashoka visited Lumbini in 249 BCE and erected a pillar commemorating it as Buddha's birthplace — inscribed "Hida Budhe jate Sakyamuni" — "Here was born the Buddha, sage of the Sakyas"); so Maharajganj is the Indian gateway to one of the world's most significant Buddhist pilgrimage sites; the Terai ecology (the Maharajganj district sits on the Gangetic-Himalayan Terai — the lowland marshy-grassland belt at the Himalayan foothills; tall elephant grass, sal forests, wildlife corridors connecting to the Himalayas; the Sohagi Barwa Wildlife Sanctuary (Maharajganj district — elephants, leopards, gaur, tigers in the buffer zone); the Rapti and Rohini rivers); the Siddhartha Nagar adjacent (Kapilvastu — Buddha's homeland)), and a city of Sonauli-Nepal border and Lumbini Buddhist pilgrimage gateway — is Uttar Pradesh's most Nepal-border-Sonauli-gateway and Lumbini-Buddha-birthplace-22km-adjacent Maharajganj. From birthday parties in Maharajganj to celebration cakes — RedHeart covers all areas: Maharajganj city, Nautanwa (Sonauli), Siswa, Partawal, Ghughuli, Nichlaul, Bridgemanganj.</p>
<p>Our Maharajganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Maharajganj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Maharajganj city, Nautanwa (Sonauli border), Siswa, Partawal, Ghughuli, Nichlaul</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Maharajganj?", answer: "Yes, same-day cake delivery is available across all Maharajganj areas — Maharajganj city, Nautanwa (Sonauli), Siswa, Partawal, and Ghughuli — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Maharajganj?", answer: "Yes, all flavours are available in eggless variants for Maharajganj delivery." },
      { question: "Do you deliver midnight cakes in Maharajganj?", answer: "Yes, midnight birthday cake delivery is available across Maharajganj city zones." }
    ]
  },

  "kushinagar": {
    cityName: "Kushinagar",
    metaTitle: "Cake Delivery in Kushinagar | Buddha Mahaparinirvana Site Buddhist Pilgrimage UP | RedHeart",
    metaDescription: "Order cakes online in Kushinagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kushinagar",
    metaKeyword: "cake delivery kushinagar, order cake online kushinagar, birthday cake kushinagar, custom cake kushinagar, same day cake delivery kushinagar Buddha Mahaparinirvana Parinirvana Stupa Reclining Buddha Buddhist Circuit UP Nepal border",
    footerContent: `
<h2>Cake Delivery in Kushinagar — Buddha's Mahaparinirvana (Final Nirvana) Site, Reclining Buddha, and Buddhist Pilgrimage Circuit</h2>
<p>Kushinagar — the district headquarters of Kushinagar district in Uttar Pradesh (eastern UP, Nepal border district), one of the four most sacred sites in all of Buddhism — the place where the Buddha attained Mahaparinirvana (final nirvana, death) (the Kushinagar Mahaparinirvana Site — the Kushinagar (ancient Kushinara) is where Siddhartha Gautama Buddha (563-483 BCE) passed away (attained Mahaparinirvana) at the age of 80 CE; this was approximately 483 BCE; the Buddha lay down between two Sala trees in the Malla kingdom and passed into final nirvana; the four holiest Buddhist sites are: Lumbini (birth), Bodh Gaya (enlightenment), Sarnath (first sermon), and Kushinagar (death/Mahaparinirvana); the Mahaparinirvana Temple (the main temple at Kushinagar; contains the 6-metre long reclining Buddha statue in a reclining pose (parinirvana posture) — the original 5th century CE Gupta-period statue in red sandstone; the temple is built over the site of the original Malla stupa); the Ramabhar Stupa (the cremation site of the Buddha — a 15m high brick stupa where the Buddha's body was cremated; one of the most sacred spots in Buddhism; the ashes were divided among clans); pilgrims from all Buddhist countries — Japan, Thailand, Myanmar, Sri Lanka, China, Tibet — visit Kushinagar; the district was renamed from Padrauna to Kushinagar in 1990), and a city of Buddha's Mahaparinirvana and Reclining Buddha — is Uttar Pradesh's most Mahaparinirvana-Buddha-death-final-nirvana and Reclining-Buddha-5th-century-Gupta Kushinagar. From birthday parties in Kushinagar to celebration cakes — RedHeart covers all areas: Kushinagar city, Padrauna, Kasia, Hata, Tamkuhi Raj, Ramkola, Dudhi.</p>
<p>Our Kushinagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mahaparinirvana Stupa / Reclining Buddha / Ramabhar Stupa Cremation Site / Buddhist Circuit-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kushinagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kushinagar city, Padrauna, Kasia, Hata, Tamkuhi Raj, Ramkola, Dudhi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Reclining Buddha Fondant, Mahaparinirvana Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kushinagar?", answer: "Yes, same-day cake delivery is available across all Kushinagar areas — Kushinagar city, Padrauna, Kasia, Hata, and Tamkuhi Raj — for orders placed before 3 PM." },
      { question: "Do you have Mahaparinirvana and Reclining Buddha-themed cakes?", answer: "Yes! The Kushinagar Mahaparinirvana Site (where the Buddha passed away at age 80 circa 483 BCE — one of the four holiest Buddhist sites; Reclining Buddha 5th century Gupta-era 6-metre red sandstone statue; Ramabhar Stupa cremation site) inspires our most Mahaparinirvana-final-nirvana and Reclining-Buddha-Gupta fondant cakes." },
      { question: "Are eggless cakes available in Kushinagar?", answer: "Yes, all flavours are available in eggless variants for Kushinagar delivery." }
    ]
  },

  "siddharthnagar": {
    cityName: "Siddharthnagar",
    metaTitle: "Cake Delivery in Siddharthnagar | Kapilvastu Buddha Homeland Nepal Border UP | RedHeart",
    metaDescription: "Order cakes online in Siddharthnagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Siddharthnagar",
    metaKeyword: "cake delivery siddharthnagar, order cake online siddharthnagar, birthday cake siddharthnagar, custom cake siddharthnagar, same day cake delivery siddharthnagar Kapilvastu Buddha Suddhodana Sakya clan Naugarh Nepal border Terai UP",
    footerContent: `
<h2>Cake Delivery in Siddharthnagar — Kapilvastu (Buddha's Royal Hometown), Sakya Kingdom Site, and Nepal Border</h2>
<p>Siddharthnagar — the district headquarters of Siddharthnagar district in Uttar Pradesh (Nepal border, eastern UP Terai), a district containing the ancient Kapilvastu — the city where Prince Siddhartha Gautama (the future Buddha) grew up (the Kapilvastu (Piprahwa/Ganwaria — in Siddharthnagar district) — the ancient Kapilvastu is believed to be at Piprahwa in Siddharthnagar district; this was the capital of the Sakya clan; King Suddhodana (Buddha's father) ruled here; Prince Siddhartha Gautama spent 29 years of his life at Kapilvastu before renouncing the world and leaving to seek enlightenment; the Piprahwa excavations (1971-1977 — K.M. Srivastava's ASI excavations revealed a large stupa (identified as the Kapilvastu stupa), a Buddhist monastery, and a casket containing bone relics believed to be of the Buddha or Sakyan clan; the inscriptions confirmed the site's significance); note: Nepal also claims a Kapilvastu (Tilaurakot — 27 km from Piprahwa); there is scholarly debate; regardless, the Siddharthnagar area is deeply connected to the Buddha's homeland and early life; the district was renamed from Basti division to Siddharthnagar to honour this connection; the Naugarh area (border with Nepal — the Susta border); the Ghaghra/Saryu River; the Terai forests), and a city of Kapilvastu-Siddhartha's childhood kingdom and Sakya clan — is Uttar Pradesh's most Kapilvastu-Piprahwa-Siddhartha-29-years and Sakya-clan-Suddhodana-kingdom Siddharthnagar. From birthday parties in Siddharthnagar to celebration cakes — RedHeart covers all areas: Siddharthnagar city (Naugarh), Barhni, Itwa, Shohratgarh, Bansi, Domariyaganj, Khunwa.</p>
<p>Our Siddharthnagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kapilvastu Piprahwa Sakya / Siddhartha's Childhood Kingdom-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siddharthnagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siddharthnagar (Naugarh), Barhni, Itwa, Shohratgarh, Bansi, Domariyaganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kapilvastu Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Siddharthnagar?", answer: "Yes, same-day cake delivery is available across all Siddharthnagar areas — Siddharthnagar, Barhni, Itwa, Shohratgarh, Bansi, and Domariyaganj — for orders placed before 3 PM." },
      { question: "Do you have Kapilvastu Sakya Kingdom-themed cakes?", answer: "Yes! Kapilvastu (Piprahwa — where Prince Siddhartha Gautama spent 29 years of his life; the Sakya clan's capital under King Suddhodana; ASI excavations 1971-77 confirmed Buddhist stupa and relics) inspires our most Kapilvastu-Siddhartha-29-years and Sakya-clan fondant cakes." },
      { question: "Are eggless cakes available in Siddharthnagar?", answer: "Yes, all flavours are available in eggless variants for Siddharthnagar delivery." }
    ]
  },

  "arwal": {
    cityName: "Arwal",
    metaTitle: "Cake Delivery in Arwal | Bihar Ganga Plains Nawada Adjacent Jehanabad | RedHeart",
    metaDescription: "Order cakes online in Arwal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Arwal",
    metaKeyword: "cake delivery arwal, order cake online arwal, birthday cake arwal, custom cake arwal, same day cake delivery arwal Bihar Ganga plains Sone River Jehanabad Nawada Patna Magadh region",
    footerContent: `
<h2>Cake Delivery in Arwal — Bihar's Youngest District, Sone River Basin, and Magadh's Agricultural Heart</h2>
<p>Arwal — the district headquarters of Arwal district in Bihar (one of Bihar's newest and smallest districts, created in 2001 by carving from Jehanabad district; one of India's smallest districts by population), a district in the historic Magadha heartland between the Sone and Ganga rivers (the Arwal district is located between Jehanabad, Patna, and Nawada districts; it is in the Ganga-Sone Doab (the land between the Ganga and Sone rivers); the Arwal district is significantly small — under 700 square km — and primarily agricultural; the Sone River (one of the major right-bank tributaries of the Ganga; the Indrapuri Barrage on the Sone in Bihar provides irrigation; the Son Irrigation Command extends to Arwal-Jehanabad area; paddy-wheat agricultural zone); the Arwal district history (the Arwal area was part of the princely territories during the British period; associated with the late-19th century peasant uprisings; the area was affected by Naxal/Left-wing extremism in the 1980s-2000s — in the Bhojpur-Jehanabad-Arwal belt); the historical significance of the Magadha kingdom (the broader Arwal-Patna-Gaya-Nalanda area is the core of the ancient Magadha Mahajanapada — the most powerful ancient Indian kingdom; the birthplace of the Maurya Empire under Chandragupta Maurya and his minister Chanakya/Kautilya)), and a city of Sone-Ganga Doab and ancient Magadha heartland — is Bihar's most Sone-Ganga-doab-agricultural and Magadha-Chandragupta-Maurya-Chanakya-heartland-smallest Arwal. From birthday parties in Arwal to celebration cakes — RedHeart covers all Arwal areas: Arwal city, Kaler, Karpi, Kurtha, Sonbhadra-Banshi-Suryapur.</p>
<p>Our Arwal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arwal, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arwal city, Kaler, Karpi, Kurtha, Sonbhadra-Banshi-Suryapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Arwal?", answer: "Yes, same-day cake delivery is available across all Arwal areas — Arwal city, Kaler, Karpi, and Kurtha — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Arwal?", answer: "Yes, all flavours are available in eggless variants for Arwal delivery." },
      { question: "Do you deliver midnight cakes in Arwal?", answer: "Yes, midnight birthday cake delivery is available across Arwal city zones." }
    ]
  },

  "supaul": {
    cityName: "Supaul",
    metarajganj: "",
    metaTitle: "Cake Delivery in Supaul | Kosi Flood Bihar Nepal Border Mithila | RedHeart",
    metaDescription: "Order cakes online in Supaul. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Supaul",
    metaKeyword: "cake delivery supaul, order cake online supaul, birthday cake supaul, custom cake supaul, same day cake delivery supaul Kosi River Bihar floods Nepal border Mithila Birpur Barrage Saptakosi",
    footerContent: `
<h2>Cake Delivery in Supaul — Kosi River (Sorrow of Bihar), Birpur Barrage, and Mithila's Nepal Border</h2>
<p>Supaul — the district headquarters of Supaul district in Bihar (on the Nepal border, Mithila/Kosi division), a district that epitomizes the Kosi River's dual nature — life-giving and catastrophically destructive (the Kosi River (Saptakoshi/Kosi — "Sorrow of Bihar") — the Kosi is one of India's most flood-prone rivers; it originates in Tibet and flows through Nepal collecting the waters of seven Himalayan rivers (Saptakoshi — "seven-Kosi") before entering Bihar; the Kosi River has changed its course 120 km westward over the past 200 years — one of the most dramatic river course changes anywhere on Earth; it flooded an entire region in 2008 (the 2008 Kosi flood disaster — one of India's worst flood disasters; the Kosi breached its embankment at Kushaha (Nepal) on August 18, 2008; the river avulsed (shifted its course) dramatically; 3.3 million people affected, 400,000 houses destroyed in Bihar; the Kosi continues to be a flood threat every year; the Birpur Barrage (in Supaul district — a major barrage on the Kosi built in the 1950s with Indian-Nepal joint agreement; regulates Kosi floods somewhat); the Mithila cultural zone (Supaul is part of the Mithila cultural zone — Maithili language, Madhubani/Mithila painting tradition; see Darbhanga); the Nepal-India border areas of Supaul), and a city of the Kosi "Sorrow of Bihar" and 2008 flood disaster — is Bihar's most Kosi-sorrow-120km-course-change and 2008-flood-3.3-million-affected Supaul. From birthday parties in Supaul to celebration cakes — RedHeart covers all Supaul areas: Supaul city, Birpur, Triveniganj, Chhatapur, Kishanpur, Raghopur, Salkhua.</p>
<p>Our Supaul cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Supaul, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Supaul city, Birpur, Triveniganj, Chhatapur, Kishanpur, Raghopur, Salkhua</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Supaul?", answer: "Yes, same-day cake delivery is available across all Supaul areas — Supaul city, Birpur, Triveniganj, Chhatapur, and Kishanpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Supaul?", answer: "Yes, all flavours are available in eggless variants for Supaul delivery." },
      { question: "Do you deliver midnight cakes in Supaul?", answer: "Yes, midnight birthday cake delivery is available across Supaul city zones." }
    ]
  },

  "madhepura": {
    cityName: "Madhepura",
    metaTitle: "Cake Delivery in Madhepura | Kosi Division Mithila Bihar Railway Junction | RedHeart",
    metaDescription: "Order cakes online in Madhepura. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Madhepura",
    metaKeyword: "cake delivery madhepura, order cake online madhepura, birthday cake madhepura, custom cake madhepura, same day cake delivery madhepura Kosi division Mithila Bihar Railway Alco locomotives Triveni Sangam Kosi Saura",
    footerContent: `
<h2>Cake Delivery in Madhepura — Madhepura Electric Locomotive Factory, Kosi Division, and Mithila's Fertile Belt</h2>
<p>Madhepura — the district headquarters of Madhepura district in Bihar (Kosi division, Mithila region), a district of fertile Kosi alluvial plains and now home to one of India's most significant railway manufacturing investments (the Madhepura Electric Locomotive Factory — a massive investment by Alstom (French company; now Wabtec/GE) under a Make in India agreement with Indian Railways; the factory manufactures India's most powerful electric locomotives — the 12,000 HP WAG-12B class electric locomotives; these are the most powerful electric freight locomotives in India; the factory at Madhepura has created significant industrial employment; the agreement was signed as one of the largest inbound manufacturing investments in Indian Railways history; the Kosi River alluvial plains (Madhepura lies on the fertile alluvial deposits left by the Kosi River's repeated flooding; this makes the soil extremely fertile for paddy and wheat cultivation; despite frequent Kosi floods, the alluvial deposits keep refreshing soil fertility); the Mithila cultural zone (Madhubani painting tradition — Madhepura is part of the Mithila cultural area; Maithili language); the Singheshwar Sthan (Madhepura district — a significant Shiva temple and annual fair (Singheshwar Sthan Mela) attracting hundreds of thousands of devotees; the Sinheshwar sthan is one of Bihar's most popular Hindu pilgrimage sites)), and a city of Alstom 12,000 HP locomotives and Kosi alluvial fertility — is Bihar's most Alstom-WAG12B-12000HP-most-powerful-locomotive and Singheshwar-Sthan-Mithila Madhepura. From birthday parties in Madhepura to celebration cakes — RedHeart covers all Madhepura areas: Madhepura city, Murliganj, Singheshwar, Gamharia, Puraini, Bihariganj, Kumarkhand.</p>
<p>Our Madhepura cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Singheshwar Sthan Shiva / Electric Locomotive Factory-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhepura, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madhepura city, Murliganj, Singheshwar, Gamharia, Puraini, Bihariganj, Kumarkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Madhepura?", answer: "Yes, same-day cake delivery is available across all Madhepura areas — Madhepura city, Murliganj, Singheshwar, Gamharia, and Puraini — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Madhepura?", answer: "Yes, all flavours are available in eggless variants for Madhepura delivery." },
      { question: "Do you deliver midnight cakes in Madhepura?", answer: "Yes, midnight birthday cake delivery is available across Madhepura city zones." }
    ]
  },

  "saharsa": {
    cityName: "Saharsa",
    metaTitle: "Cake Delivery in Saharsa | Kosi Mithila Bihar Saptakoshi Madhubani Painting | RedHeart",
    metaDescription: "Order cakes online in Saharsa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Saharsa",
    metaKeyword: "cake delivery saharsa, order cake online saharsa, birthday cake saharsa, custom cake saharsa, same day cake delivery saharsa Kosi division Mithila Madhubani painting Bihar Nepal border Mahananda River",
    footerContent: `
<h2>Cake Delivery in Saharsa — Kosi Division Headquarters, Mithila Heartland, and Bihar's Flood-Fertile Plains</h2>
<p>Saharsa — the district headquarters of Saharsa district in Bihar AND the headquarters of the Kosi Division (one of Bihar's 9 administrative divisions), a significant Mithila-region city in the Kosi River belt (the Saharsa district as Kosi Division HQ — Saharsa serves as the administrative headquarters of the Kosi Division which includes Saharsa, Supaul, Madhepura, and Khagaria districts; this makes it a significant administrative centre for the most flood-prone belt of Bihar; the Kosi Division has one of the highest population densities in India despite being a flood-affected zone — a testament to the extraordinary fertility of the Kosi's alluvial deposits (floods are both the curse and the blessing of this region — they bring destruction and soil fertility); the Mithila cultural tradition (Saharsa is in the core Mithila cultural zone; GI Madhubani/Mithila Painting; Maithili language (22nd Scheduled Language); Chhath Puja (the most intense Chhath Puja worship in India is in the Mithila-Bhojpur belt; Chhath is Bihar's defining festival — a 4-day festival worshipping the Sun God; devotees fast without water for 36 hours; they stand in rivers at dawn and dusk offering arghya to the rising and setting sun; the Chhath Puja spread globally with the Bihar diaspora)); the Mahananda River (flows near Saharsa district); the Triveni Sangam near Saharsa (three rivers convergence)), and a city of Kosi Division HQ and Mithila Chhath Puja culture — is Bihar's most Kosi-Division-HQ-flood-fertile and Mithila-Chhath-Puja-36-hour-fast Saharsa. From birthday parties in Saharsa to celebration cakes — RedHeart covers all Saharsa areas: Saharsa city, Simri Bakhtiyarpur, Sonbarsha, Salkhua, Patarghat, Mahishi, Nauhatta.</p>
<p>Our Saharsa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saharsa, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saharsa city, Simri Bakhtiyarpur, Sonbarsha, Salkhua, Patarghat, Mahishi, Nauhatta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Saharsa?", answer: "Yes, same-day cake delivery is available across all Saharsa areas — Saharsa city, Simri Bakhtiyarpur, Sonbarsha, Salkhua, and Mahishi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Saharsa?", answer: "Yes, all flavours are available in eggless variants for Saharsa delivery." },
      { question: "Do you deliver midnight cakes in Saharsa?", answer: "Yes, midnight birthday cake delivery is available across Saharsa city zones." }
    ]
  },

  "sitamarhi": {
    cityName: "Sitamarhi",
    metaTitle: "Cake Delivery in Sitamarhi | Goddess Sita Birthplace Janakpur Nepal Bihar | RedHeart",
    metaDescription: "Order cakes online in Sitamarhi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sitamarhi",
    metaKeyword: "cake delivery sitamarhi, order cake online sitamarhi, birthday cake sitamarhi, custom cake sitamarhi, same day cake delivery sitamarhi Sita Devi birthplace Janaki Punauradham Jaleshwar Nepal border Mithila Ramayana Bihar",
    footerContent: `
<h2>Cake Delivery in Sitamarhi — Goddess Sita's Birthplace (Punauradham), Mithila Ramayana Heritage, and Nepal Border</h2>
<p>Sitamarhi — the district headquarters of Sitamarhi district in Bihar (Nepal border, Mithila/Tirhut division), one of the holiest sites in Ramayana tradition — the birthplace of Goddess Sita (the Punauradham (Punaura) — in Sitamarhi district; this is identified as the birthplace of Goddess Sita (Janaki); in the Valmiki Ramayana, Sita was found by King Janaka of Mithila while ploughing a field (the word "Sita" means furrow — she emerged from the earth/furrow); the Sitamarhi area (Sita's Residence — "Sita Mari" — "where Sita was found" — is the literal meaning of the place name); the Janaki Temple (Punauradham, Sitamarhi — the main Sita temple; the place where Sita was found in the furrow; a significant Ramayana pilgrimage site; the Vivah Panchami festival draws lakhs of pilgrims annually celebrating Ram-Sita's marriage); the Janakpur Connection (Janakpur is across the Nepal border — just 30 km from Sitamarhi; Janakpur is the capital of the Mithila kingdom (in Nepal) where King Janaka raised Sita and where the Swayamvara took place where Ram broke the Shiva Dhanush and won Sita's hand; the Janaki Mandir at Janakpur is one of Nepal's most important temples; the Ram-Janaki Marriage Corridor across India-Nepal border); the Sitamarhi Bagmati River and Mithila Lok Kala), and a city of Goddess Sita's birthplace and Mithila Ramayana — is Bihar's most Sita-birthplace-Punauradham-furrow-found and Mithila-Ramayana-Janakpur-30km Sitamarhi. From birthday parties in Sitamarhi to celebration cakes — RedHeart covers all areas: Sitamarhi city, Belsand, Bajpatti, Dumra, Runni Saidpur, Pupri, Sonbarsha.</p>
<p>Our Sitamarhi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Goddess Sita Birthplace Punauradham / Mithila Ramayana / Janaki Vivah Panchami-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi city, Belsand, Bajpatti, Dumra, Runni Saidpur, Pupri, Sonbarsha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sita Birthplace Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sitamarhi?", answer: "Yes, same-day cake delivery is available across all Sitamarhi areas — Sitamarhi city, Belsand, Bajpatti, Dumra, and Runni Saidpur — for orders placed before 3 PM." },
      { question: "Do you have Goddess Sita Birthplace-themed cakes?", answer: "Yes! Punauradham Sitamarhi (where Goddess Sita was found by King Janaka while ploughing — 'Sita' means furrow; the word Sitamarhi means 'where Sita was found'; Janakpur Nepal 30 km away is where she was raised and married Lord Ram; Vivah Panchami draws lakhs of pilgrims) inspires our most Sita-birthplace-furrow-found and Mithila-Ramayana fondant cakes." },
      { question: "Are eggless cakes available in Sitamarhi?", answer: "Yes, all flavours are available in eggless variants for Sitamarhi delivery." }
    ]
  },

  "khagaria": {
    cityName: "Khagaria",
    metaTitle: "Cake Delivery in Khagaria | Kosi Gandak Ganga Confluence Bihar Flood Plains | RedHeart",
    metaDescription: "Order cakes online in Khagaria. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Khagaria",
    metaKeyword: "cake delivery khagaria, order cake online khagaria, birthday cake khagaria, custom cake khagaria, same day cake delivery khagaria Kosi Gandak Ganga confluence Bihar flood alluvial Mansi Alauli",
    footerContent: `
<h2>Cake Delivery in Khagaria — Three-River Confluence (Kosi-Gandak-Ganga), Bihar's Most Flood-Prone District, and Alluvial Fertility</h2>
<p>Khagaria — the district headquarters of Khagaria district in Bihar (Kosi division), one of Bihar's most flood-prone districts, located at the extraordinary confluence zone of three major rivers (the Kosi-Gandak-Ganga Confluence Zone — the Khagaria district is located where the Kosi River (from Nepal), the Gandak River (from Nepal), and the Ganga (the main river) all converge; this makes Khagaria a district with rivers on multiple sides; it is one of Bihar's most prone-to-flooding districts (virtually every year it sees some flooding); the land between the rivers is incredibly fertile (one of Bihar's most productive agricultural areas for paddy) but also one of the most flood-vulnerable; the Mansi-Khagaria-Alauli belt (important market towns in Khagaria district; the Mansi rail junction; the Alauli area); the Mithila cultural influence (the northern part of Khagaria is culturally Mithila — Maithili speaking; Madhubani painting tradition; Chhath Puja important); the Khagaria district is part of what geographers call the "flood plain" par excellence — the annual floods simultaneously flood and refresh the soil for next year's crop), and a city of three-river Kosi-Gandak-Ganga confluence and Bihar flood-fertile plains — is Bihar's most Kosi-Gandak-Ganga-three-river-confluence and flood-prone-most-alluvially-fertile Khagaria. From birthday parties in Khagaria to celebration cakes — RedHeart covers all Khagaria areas: Khagaria city, Mansi, Alauli, Gogri, Chautham, Parbatta, Manihari.</p>
<p>Our Khagaria cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khagaria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khagaria city, Mansi, Alauli, Gogri, Chautham, Parbatta, Manihari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Khagaria?", answer: "Yes, same-day cake delivery is available across all Khagaria areas — Khagaria city, Mansi, Alauli, Gogri, and Chautham — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Khagaria?", answer: "Yes, all flavours are available in eggless variants for Khagaria delivery." },
      { question: "Do you deliver midnight cakes in Khagaria?", answer: "Yes, midnight birthday cake delivery is available across Khagaria city zones." }
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
