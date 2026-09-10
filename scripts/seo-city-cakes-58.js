// Cakes Batch 58 — 12 cities
// Bihar: Lakhisarai, Shekhpura done, Nawada, Jehanabad, Araria, Kishanganj, Katihar
// Assam: Tinsukia, Cachar (Silchar), Hailakandi, Karimganj, Dhubri

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "lakhisarai": {
    cityName: "Lakhisarai",
    metaTitle: "Cake Delivery in Lakhisarai | Ashokdham Vikramshila Bihar Ajgaibinath | RedHeart",
    metaDescription: "Order cakes online in Lakhisarai. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lakhisarai",
    metaKeyword: "cake delivery lakhisarai, order cake online lakhisarai, birthday cake lakhisarai, custom cake lakhisarai, same day cake delivery lakhisarai Ajgaibinath Shiva temple Vikramshila Bihar Ganga Son confluence Munger adjacent",
    footerContent: `
<h2>Cake Delivery in Lakhisarai — Ajgaibinath Shiva Temple, Ganga-Son Confluence Zone, and Ancient Bihar Heritage</h2>
<p>Lakhisarai — the district headquarters of Lakhisarai district in Bihar (carved from Munger district in 1994; on the Ganga River), a district containing one of Bihar's most important Shiva temples and situated at a significant Ganga confluence zone (the Ajgaibinath Temple (Sultanganj, Lakhisarai-Bhagalpur border area) — the Ajgaibinath Shiva Temple at Sultanganj is built on a massive granite rock in the middle of the Ganga River; one of Bihar's most sacred Shiva sites; the Sultanganj Ganga bank is the starting point for the Shravan Mela (Kanwar Yatra) — the annual pilgrimage where millions of kanwariyas (devotees wearing saffron) walk 105 km from Sultanganj to Deoghar (Jharkhand) carrying Ganga water on their shoulders in bamboo poles (kanwar) to pour on the Baidyanath Jyotirlinga Shivalingam at Deoghar; this is the longest annual religious walking pilgrimage in India, undertaken by tens of millions annually; the Vikramshila adjacent (the Vikramshila University ruins — in Bhagalpur district, adjacent to Lakhisarai; one of the great ancient Buddhist universities alongside Nalanda; founded by Pala King Dharmapala 770-810 CE; ASI excavations); the Son-Ganga confluence (the Son River joins the Ganga in the Lakhisarai-Patna region; the Barh, Mokama, Lakhisarai stretch of the Ganga); the rubber dam and industrial zone near Lakhisarai), and a city of Kanwar Yatra starting point and Ganga rocks — is Bihar's most Sultanganj-Kanwar-105km-pilgrimage-tens-of-millions and Ajgaibinath-Ganga-rock-Shiva Lakhisarai. From birthday parties in Lakhisarai to celebration cakes — RedHeart covers all areas: Lakhisarai city, Surajgarha, Halsi, Barahiya, Ramgarh Chowk, Pipariya.</p>
<p>Our Lakhisarai cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Ajgaibinath Shiva Ganga Rock / Kanwar Yatra Pilgrimage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhisarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhisarai city, Surajgarha, Halsi, Barahiya, Ramgarh Chowk, Pipariya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ajgaibinath Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lakhisarai?", answer: "Yes, same-day cake delivery is available across all Lakhisarai areas — Lakhisarai city, Surajgarha, Halsi, Barahiya, and Ramgarh Chowk — for orders placed before 3 PM." },
      { question: "Do you have Ajgaibinath Shiva and Kanwar Yatra-themed cakes?", answer: "Yes! The Ajgaibinath Shiva Temple (on a granite rock in the Ganga at Sultanganj; starting point of the Kanwar Yatra — India's longest annual walking pilgrimage; tens of millions of kanwariyas walk 105 km to Deoghar carrying Ganga water to pour on Baidyanath Jyotirlinga) inspires our most Ajgaibinath-Ganga-rock and Kanwar-105km-saffron-pilgrimage fondant cakes." },
      { question: "Are eggless cakes available in Lakhisarai?", answer: "Yes, all flavours are available in eggless variants for Lakhisarai delivery." }
    ]
  },

  "nawada": {
    cityName: "Nawada",
    metaTitle: "Cake Delivery in Nawada | Kakolat Waterfall Bihar Magadha Nawada Guniyaji | RedHeart",
    metaDescription: "Order cakes online in Nawada. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nawada",
    metaKeyword: "cake delivery nawada, order cake online nawada, birthday cake nawada, custom cake nawada, same day cake delivery nawada Kakolat Waterfall Bihar Magadha Nawada Gaya adjacent Rajgir Bodh Gaya pilgrimage",
    footerContent: `
<h2>Cake Delivery in Nawada — Kakolat Waterfall, Magadha Heartland, and Bodh Gaya-Rajgir Pilgrimage Adjacent</h2>
<p>Nawada — the district headquarters of Nawada district in Bihar (Magadha division; between Gaya and Munger), a district in the historic Magadha heartland with a famous waterfall and proximity to Bihar's major pilgrimage sites (the Kakolat Waterfall (Kakolat Falls — in Nawada district; one of Bihar's most beautiful and visited waterfalls; the Kakolat waterfall falls in steps from a height of about 160 feet (49 m) through forest; the stream falls into a natural pool which is considered sacred (the Kakolat Kund); legend holds that bathing here during Makar Sankranti frees one from sins; the waterfall is set in forest hills; a major tourist attraction from Nawada-Gaya-Patna zone; the Gundiyaji area (also in Nawada district — has ancient archaeological significance); the Nawada district's Magadha location (Nawada is in the ancient Magadha Mahajanapada — the birthplace of the Maurya Empire; the Rajgir hills (in Nalanda adjacent) are visible from parts of the district; the Bodh Gaya pilgrimage circuit is 60 km away; the Buddha walked through the Magadha region where Nawada lies on his journey from Bodh Gaya toward Varanasi for the first sermon at Sarnath); the paddy-wheat-pulses agriculture of the Nawada district), and a city of Kakolat Falls and Magadha ancient heartland — is Bihar's most Kakolat-160-feet-waterfall-sacred-pool and Magadha-Maurya-Empire-ancient-heartland Nawada. From birthday parties in Nawada to celebration cakes — RedHeart covers all Nawada areas: Nawada city, Rajauli, Warsaliganj, Hisua, Gobindpur, Pakri Barawan.</p>
<p>Our Nawada cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kakolat Falls / Magadha Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawada, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawada city, Rajauli, Warsaliganj, Hisua, Gobindpur, Pakri Barawan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kakolat Falls Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nawada?", answer: "Yes, same-day cake delivery is available across all Nawada areas — Nawada city, Rajauli, Warsaliganj, Hisua, and Gobindpur — for orders placed before 3 PM." },
      { question: "Do you have Kakolat Falls-themed cakes?", answer: "Yes! The Kakolat Falls (160 feet/49 m stepped waterfall in forest; sacred Kakolat Kund pool; bathing on Makar Sankranti considered sin-freeing; Bihar's most popular waterfall tourist attraction) inspires our most Kakolat-waterfall-forest-sacred-pool fondant cakes." },
      { question: "Are eggless cakes available in Nawada?", answer: "Yes, all flavours are available in eggless variants for Nawada delivery." }
    ]
  },

  "jehanabad": {
    cityName: "Jehanabad",
    metaTitle: "Cake Delivery in Jehanabad | Barabar Caves Ashoka Rock Inscription Bihar | RedHeart",
    metaDescription: "Order cakes online in Jehanabad. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jehanabad",
    metaKeyword: "cake delivery jehanabad, order cake online jehanabad, birthday cake jehanabad, custom cake jehanabad, same day cake delivery jehanabad Barabar Caves Ashoka Ajivika granite Bihar Magadha Nagarjuni Hills",
    footerContent: `
<h2>Cake Delivery in Jehanabad — Barabar Caves (World's Oldest Rock-Cut Caves), Ashoka's Ajivika Gifts, and Magadha</h2>
<p>Jehanabad — the district headquarters of Jehanabad district in Bihar (Magadha division), a district containing one of the world's most historically significant archaeological sites — the Barabar Caves (the Barabar Caves — in Jehanabad district; the Barabar and Nagarjuni Hill cave complexes are the world's oldest surviving rock-cut caves — dating to approximately 3rd century BCE; they were commissioned by Emperor Ashoka and his grandson Dasharatha Maurya as gifts to the Ajivika ascetics (the Ajivikas were an ancient Indian religious sect — contemporaries of Buddhism and Jainism — who believed in strict determinism/niyati; they are now extinct); the caves are polished to an extraordinary mirror-like finish inside (the Mauryan polish — achieving a glass-smooth finish on granite using only hand tools; the technique remains a mystery and has never been fully replicated); the caves appear in E.M. Forster's "A Passage to India" as the "Marabar Caves" (Forster used the Barabar Caves as inspiration for the novel's central mysterious episode); the Lomas Rishi Cave (the most ornate — with a carved elephant frieze over the entrance; the curved arched entrance imitates a wooden structure; an extraordinary architectural achievement); the Nagarjuni Hills (adjacent — similar cave complex; later Mauryan; Dasharatha inscriptions); the Jehanabad Jail Attack (2005 — Naxalites attacked the Jehanabad jail, freeing hundreds of prisoners — one of the most dramatic Naxal incidents in Bihar), and a city of Barabar Caves world's oldest rock-cut and Forster's Marabar — is Bihar's most Barabar-3rd-century-BCE-world's-oldest-rock-cut and Forster-Marabar-Passage-to-India Jehanabad. From birthday parties in Jehanabad to celebration cakes — RedHeart covers all areas: Jehanabad city, Arwal adjacent, Hulasganj, Ghoshi, Makhdumpur, Kako.</p>
<p>Our Jehanabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Barabar Caves Lomas Rishi / Mauryan Mirror Polish / Ashoka Ajivika Gift-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jehanabad, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jehanabad city, Hulasganj, Ghoshi, Makhdumpur, Kako, Barabar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Barabar Caves Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jehanabad?", answer: "Yes, same-day cake delivery is available across all Jehanabad areas — Jehanabad city, Hulasganj, Ghoshi, Makhdumpur, and Kako — for orders placed before 3 PM." },
      { question: "Do you have Barabar Caves-themed cakes?", answer: "Yes! The Barabar Caves (3rd century BCE — world's oldest surviving rock-cut caves; Ashoka's gifts to the Ajivika sect; Mauryan mirror-polish granite finish; Lomas Rishi Cave with elephant frieze; inspired E.M. Forster's 'Marabar Caves' in A Passage to India) inspire our most Barabar-world's-oldest-rock-cut and Lomas-Rishi-Mauryan-polish fondant cakes." },
      { question: "Are eggless cakes available in Jehanabad?", answer: "Yes, all flavours are available in eggless variants for Jehanabad delivery." }
    ]
  },

  "araria": {
    cityName: "Araria",
    metaTitle: "Cake Delivery in Araria | Nepal Border Kosi Belt Mithila Bihar Flood | RedHeart",
    metaDescription: "Order cakes online in Araria. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Araria",
    metaKeyword: "cake delivery araria, order cake online araria, birthday cake araria, custom cake araria, same day cake delivery araria Nepal border Kosi Mithila Forbesganj Jokihat Bihar flood plain Purnia division",
    footerContent: `
<h2>Cake Delivery in Araria — Nepal Border District, Kosi Flood Plains, and Purnia Division</h2>
<p>Araria — the district headquarters of Araria district in Bihar (Purnia division; Nepal border district; carved from Purnia in 1990), a Nepal-border district on the Kosi river belt (the Araria district borders Nepal — the Jogbani-Biratnagar border crossing (Araria district — the Jogbani border town is one of India's main border crossings with Nepal in the eastern sector; Biratnagar (Nepal) is just across the border — Nepal's second-largest city; significant bilateral trade; Nepali citizens frequently cross for trade and services); the Kosi River tributaries (Araria district is in the Kosi drainage basin; the Koshi and its tributaries — Kamla, Balan — flood the Araria plains regularly; the Araria district is one of North Bihar's most flood-prone districts; the 2017 Nepal floods sent floodwaters through Araria causing significant displacement); the Forbesganj (Araria district — a significant commercial town on the Nepal border; one of Bihar's busiest border markets; named after the British collector Forbes); the Jokihat area (Araria district border town); the Raniganj (a town in Araria); the Manikpur area; the Mithila cultural influence on the district (Maithili speakers)), and a city of Jogbani-Nepal border trade and Kosi flood plains — is Bihar's most Jogbani-Biratnagar-Nepal-border-trade and Kosi-flood-annually-plains Araria. From birthday parties in Araria to celebration cakes — RedHeart covers all Araria areas: Araria city, Forbesganj, Jogbani, Jokihat, Raniganj, Narpatganj, Kursakanta.</p>
<p>Our Araria cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Araria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Araria city, Forbesganj, Jogbani, Jokihat, Raniganj, Narpatganj, Kursakanta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Araria?", answer: "Yes, same-day cake delivery is available across all Araria areas — Araria city, Forbesganj, Jogbani, Jokihat, Raniganj, and Narpatganj — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Araria?", answer: "Yes, all flavours are available in eggless variants for Araria delivery." },
      { question: "Do you deliver midnight cakes in Araria?", answer: "Yes, midnight birthday cake delivery is available across Araria city and Forbesganj zones." }
    ]
  },

  "kishanganj": {
    cityName: "Kishanganj",
    metaTitle: "Cake Delivery in Kishanganj | Tea Gardens Bangladesh Nepal Bihar Darjeeling | RedHeart",
    metaDescription: "Order cakes online in Kishanganj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kishanganj",
    metaKeyword: "cake delivery kishanganj, order cake online kishanganj, birthday cake kishanganj, custom cake kishanganj, same day cake delivery kishanganj tea gardens Bangladesh Nepal Darjeeling foothills Bihar Chicken Neck Siliguri Corridor",
    footerContent: `
<h2>Cake Delivery in Kishanganj — Tea Gardens in Bihar, Chicken's Neck Corridor, Bangladesh-Nepal Triangle</h2>
<p>Kishanganj — the district headquarters of Kishanganj district in Bihar (the "Chicken's Neck" district — at the strategic Siliguri Corridor junction), the only Bihar district with significant tea cultivation and one of India's most strategically located districts (the Kishanganj district lies at the famous "Chicken's Neck" (Siliguri Corridor) — the narrow strip of land (only 20-22 km wide at the narrowest point) connecting Northeast India (Seven Sisters states + Sikkim) to the rest of India; Kishanganj is at the entrance to this corridor; Bangladesh is to the east and Nepal is to the north; this location makes it one of India's most geopolitically significant small corridors; the Kishanganj Tea Cultivation — Kishanganj is the only district in Bihar with significant tea gardens; the Kishanganj area (sub-Himalayan Terai foothills) has a climate suitable for tea cultivation; small-scale tea gardens are being promoted; the closest thing Bihar has to the Darjeeling tea belt; the Muslim-majority population of Kishanganj (Kishanganj has one of the highest Muslim population percentages of any Bihar district — significant for the cultural mosaic); the Mahananda River (flows through Kishanganj — its waters go to Bangladesh and then to the Bay of Bengal); the Teesta-adjacent ecosystem (Kishanganj borders West Bengal — the Teesta flows in adjacent Bengal)), and a city of Chicken's Neck corridor and Bihar's only tea district — is Bihar's most Chicken's-Neck-Siliguri-20km-strategically-narrow and Bihar-only-tea-garden Kishanganj. From birthday parties in Kishanganj to celebration cakes — RedHeart covers all areas: Kishanganj city, Thakurganj, Bahadurganj, Kochadhaman, Pothia, Dighalbank, Terhagachh.</p>
<p>Our Kishanganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Tea Cake (Bihar's own tea gardens!), Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kishanganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kishanganj city, Thakurganj, Bahadurganj, Kochadhaman, Pothia, Dighalbank, Terhagachh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tea Cake, Chocolate, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kishanganj?", answer: "Yes, same-day cake delivery is available across all Kishanganj areas — Kishanganj city, Thakurganj, Bahadurganj, Kochadhaman, and Pothia — for orders placed before 3 PM." },
      { question: "Do you have Tea Cake for Kishanganj's tea gardens?", answer: "Yes! Kishanganj is Bihar's only tea-growing district (sub-Himalayan Terai climate at the Chicken's Neck corridor; the closest thing Bihar has to the Darjeeling tea belt; Mahananda River valley). We offer special Tea Cake celebrating Kishanganj's unique place as Bihar's only tea district." },
      { question: "Are eggless cakes available in Kishanganj?", answer: "Yes, all flavours including Tea Cake are available in eggless variants for Kishanganj delivery." }
    ]
  },

  "katihar": {
    cityName: "Katihar",
    metaTitle: "Cake Delivery in Katihar | Ganga Mahananda Confluence Bihar Railway Junction | RedHeart",
    metaDescription: "Order cakes online in Katihar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Katihar",
    metaKeyword: "cake delivery katihar, order cake online katihar, birthday cake katihar, custom cake katihar, same day cake delivery katihar Ganga Mahananda confluence Bihar railway junction Purnia Manihara Manihari Ghat jute",
    footerContent: `
<h2>Cake Delivery in Katihar — Ganga-Mahananda Confluence, Bihar's Jute Capital, and North Bengal Railway Gateway</h2>
<p>Katihar — the district headquarters of Katihar district in Bihar (Purnia division; on the Ganga River at the West Bengal-Bihar border), one of Bihar's most important railway junctions and the jute-producing capital (the Katihar Railway Junction — one of Bihar's most significant railway junctions; Katihar is where the main Delhi-Kolkata railway corridor meets the Northeast Frontier Railway lines heading to Assam and Northeast India; trains heading to Kolkata, Patna, Guwahati/Assam/Northeast, and Siliguri/Darjeeling all pass through Katihar; it is a critical node for connectivity to the "Seven Sisters" states; the Ganga-Mahananda Confluence (the Mahananda River (coming from Darjeeling hills through Siliguri and Malda in West Bengal) joins the Ganga near Katihar; the Manihari Ghat (the Ganga crossing at Manihari in Katihar — a major river ferry point connecting Bihar with Malda district of West Bengal); the Katihar Jute Industry — the Katihar-Purnia belt is Bihar's main jute-growing area (raw jute cultivation; jute is grown in the Ganga alluvial floodplains; historically sold to Kolkata/Hooghly River jute mills; the jute economy of northeast Bihar)); the Katihar Sugar Mill; the district's proximity to West Bengal means significant cultural exchange with Bengali culture), and a city of Ganga-Mahananda confluence and North-East railway gateway — is Bihar's most Ganga-Mahananda-confluence-Manihari-Ghat and railway-junction-Northeast-gateway Katihar. From birthday parties in Katihar to celebration cakes — RedHeart covers all Katihar areas: Katihar city, Manihari, Mnihara, Korha, Balrampur, Barari, Pranpur, Kadwa.</p>
<p>Our Katihar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katihar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katihar city, Manihari, Korha, Balrampur, Barari, Pranpur, Kadwa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Katihar?", answer: "Yes, same-day cake delivery is available across all Katihar areas — Katihar city, Manihari, Korha, Balrampur, Barari, and Kadwa — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Katihar?", answer: "Yes, all flavours are available in eggless variants for Katihar delivery." },
      { question: "Do you deliver midnight cakes in Katihar?", answer: "Yes, midnight birthday cake delivery is available across Katihar city zones." }
    ]
  },

  "silchar": {
    cityName: "Silchar",
    metaTitle: "Cake Delivery in Silchar | Cachar Assam Barak Valley Language Martyrs Bangladeshi | RedHeart",
    metaDescription: "Order cakes online in Silchar (Cachar). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Silchar (Cachar)",
    metaKeyword: "cake delivery silchar cachar, order cake online silchar, birthday cake silchar, custom cake silchar, same day cake delivery silchar Barak Valley Language Martyrs Bengali Assam Bangladesh border Surma River NIT Silchar",
    footerContent: `
<h2>Cake Delivery in Silchar (Cachar) — Barak Valley, Language Martyrs of 1961, NIT Silchar, and Assam-Bangladesh Border</h2>
<p>Silchar — the district headquarters of Cachar district in Assam, and the largest city in the Barak Valley — a predominantly Bengali-speaking region (the Barak Valley (Silchar-Karimganj-Hailakandi — the three districts of the Barak Valley in southern Assam) — the Barak Valley is geographically and culturally distinct from the Brahmaputra Valley; it is predominantly Bengali-speaking; the valley is surrounded by Mizoram, Manipur, and Tripura on three sides, with Bangladesh forming its southwestern border; the Language Martyrs of 1961 (the Barak Valley Language Martyrs — on May 19, 1961, Assam police fired on Bengali-language activists demanding official status for Bengali in the Barak Valley (Assamese was being imposed); 11 people died including a young woman named Comala Bhattacharjee (who was at a train station); May 19 is observed as "Bhasha Shaheed Dibos" (Language Martyrs Day) in the Barak Valley and is now observed across Bengal; this predates the Bangladesh Language Movement and is one of India's lesser-known linguistic martyrdom events; the NIT Silchar (National Institute of Technology Silchar — one of the original NITs; established 1967; significant engineering institution for northeast India); the Surma River (the Surma River flows through the Barak Valley — it becomes the Barak River; feeds the Meghna in Bangladesh); the Silchar-Bangladesh border area), and a city of 1961 Language Martyrs and Barak Valley Bengali — is Assam's most Bengali-Barak-Valley and 1961-Language-Martyrs-May-19-11-killed Silchar. From birthday parties in Silchar to celebration cakes — RedHeart covers all Cachar areas: Silchar city, Sonai, Lakhipur, Katigorah, Udharbond, Jiribam adjacent, Borkhola.</p>
<p>Our Silchar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Language Martyrs Memorial / NIT Silchar / Barak Valley Bengali Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Silchar (Cachar), Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Silchar city, Sonai, Lakhipur, Katigorah, Udharbond, Borkhola</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Language Martyrs Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Silchar (Cachar)?", answer: "Yes, same-day cake delivery is available across all Cachar areas — Silchar city, Sonai, Lakhipur, Katigorah, and Udharbond — for orders placed before 3 PM." },
      { question: "Do you have Language Martyrs of 1961-themed cakes?", answer: "Yes! The Barak Valley Language Martyrs (May 19, 1961 — Assam police fired on Bengali-language activists demanding official Bengali status; 11 died including Comala Bhattacharjee; 'Bhasha Shaheed Dibos' observed across Bengal and Assam; predates Bangladesh's Language Movement) inspire our most Barak-Valley-language-martyrs-May-19-1961 fondant cakes." },
      { question: "Are eggless cakes available in Silchar?", answer: "Yes, all flavours are available in eggless variants for Silchar (Cachar) delivery." }
    ]
  },

  "hailakandi": {
    cityName: "Hailakandi",
    metaTitle: "Cake Delivery in Hailakandi | Barak Valley Bangladesh Border Assam Bengali | RedHeart",
    metaDescription: "Order cakes online in Hailakandi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hailakandi",
    metaKeyword: "cake delivery hailakandi, order cake online hailakandi, birthday cake hailakandi, custom cake hailakandi, same day cake delivery hailakandi Barak Valley Bangladesh border Assam Bengali Mizoram Tripura border Katakhal River",
    footerContent: `
<h2>Cake Delivery in Hailakandi — Barak Valley Bengali District, Bangladesh-Mizoram Border, and Katakhal River</h2>
<p>Hailakandi — the district headquarters of Hailakandi district in Assam (Barak Valley; carved from Cachar), one of Assam's smallest districts, located at the Bangladesh-Mizoram tri-junction (the Hailakandi district — the southernmost district of Assam; it borders Bangladesh to the south and Mizoram to the east; it is geographically isolated — surrounded by Bangladesh, Mizoram, and other Barak Valley districts; the district is predominantly Bengali-speaking (as the entire Barak Valley); the Katakhal River (flows through Hailakandi — a Barak tributary; the Katakhal basin); the Hailakandi town's market serves as a significant trade center for the area including border trade; the Bhanga-Kalain-Algapur-Katlichhara areas within Hailakandi; the district is known for sericulture (silk cultivation — mulberry silk); the Barak Valley linguistic-cultural mosaic (Bengali, Bishnupriya Manipuri, Dimasa); the Thalijanga temple; the Lala area (Hailakandi — the Lala subdivision); the proximity to Mizoram and the Mizo-Bengali boundary), and a city of Barak Valley Bengali and Bangladesh-Mizoram border — is Assam's most Bangladesh-Mizoram-tri-junction-southernmost and Bengali-Barak-Valley sericulture Hailakandi. From birthday parties in Hailakandi to celebration cakes — RedHeart covers all Hailakandi areas: Hailakandi city, Lala, Algapur, Katlichhara, Kalain, Bhanga.</p>
<p>Our Hailakandi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hailakandi, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hailakandi city, Lala, Algapur, Katlichhara, Kalain, Bhanga</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hailakandi?", answer: "Yes, same-day cake delivery is available across all Hailakandi areas — Hailakandi city, Lala, Algapur, Katlichhara, and Kalain — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hailakandi?", answer: "Yes, all flavours are available in eggless variants for Hailakandi delivery." },
      { question: "Do you deliver midnight cakes in Hailakandi?", answer: "Yes, midnight birthday cake delivery is available across Hailakandi city zones." }
    ]
  },

  "karimganj": {
    cityName: "Karimganj",
    metaTitle: "Cake Delivery in Karimganj | Barak Valley Bangladesh Bangladesh Sylhet Assam | RedHeart",
    metaDescription: "Order cakes online in Karimganj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karimganj",
    metaKeyword: "cake delivery karimganj, order cake online karimganj, birthday cake karimganj, custom cake karimganj, same day cake delivery karimganj Barak Valley Bangladesh Sylhet border Sutarkandi Assam Bengali Kushiyara River",
    footerContent: `
<h2>Cake Delivery in Karimganj — Bangladesh Sylhet Border, Sutarkandi Trade, and Barak Valley Bengali Heritage</h2>
<p>Karimganj — the district headquarters of Karimganj district in Assam (Barak Valley; carved from Cachar 1983), a district with the longest Bangladesh border in the Barak Valley (the Karimganj district shares the longest Bangladesh border of any Barak Valley district — the international border with Bangladesh's Sylhet Division; the Sutarkandi-Churaibari Land Port (Karimganj — Sutarkandi is an integrated Check Post on the India-Bangladesh border in Karimganj; significant bilateral trade through Sutarkandi; one of the busiest land ports between India and Bangladesh's Sylhet region; goods traded include fish, vegetables, rice, manufactured items); the Kushiyara River (the Kushiyara is the Bangladesh name for the Barak River after it bifurcates; the Karimganj district sits at the India side of this river; the riparian communities along the Kushiyara-Barak); the Badarpur Railway Junction (in Karimganj district — the main railway junction linking Barak Valley to the rest of India and the Northeast; the Badarpur-Jiribam line heading to Manipur and points beyond); the Karimganj Bengali culture (the Barak Valley Bengali community; also Bishnupriya Manipuri speakers; Karimganj's proximity to the Bangladesh Sylhet region creates significant cultural connections — many families were separated at Partition 1947)), and a city of Sutarkandi Bangladesh border trade and Badarpur railway junction — is Assam's most Bangladesh-Sylhet-longest-border and Sutarkandi-Churaibari-bilateral-trade Karimganj. From birthday parties in Karimganj to celebration cakes — RedHeart covers all Karimganj areas: Karimganj city, Badarpur, Ratabari, Patharkandi, Nilambazar, Srikona, Ramkrishna Nagar.</p>
<p>Our Karimganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karimganj, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karimganj city, Badarpur, Ratabari, Patharkandi, Nilambazar, Srikona</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karimganj?", answer: "Yes, same-day cake delivery is available across all Karimganj areas — Karimganj city, Badarpur, Ratabari, Patharkandi, and Nilambazar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Karimganj?", answer: "Yes, all flavours are available in eggless variants for Karimganj delivery." },
      { question: "Do you deliver midnight cakes in Karimganj?", answer: "Yes, midnight birthday cake delivery is available across Karimganj city and Badarpur zones." }
    ]
  },

  "dhubri": {
    cityName: "Dhubri",
    metaTitle: "Cake Delivery in Dhubri | Brahmaputra Bangladesh Border Assam Gauripur | RedHeart",
    metaDescription: "Order cakes online in Dhubri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dhubri",
    metaKeyword: "cake delivery dhubri, order cake online dhubri, birthday cake dhubri, custom cake dhubri, same day cake delivery dhubri Brahmaputra Bangladesh border Assam Gauripur Singh Satra Koch Kingdom Meghalaya border",
    footerContent: `
<h2>Cake Delivery in Dhubri — Brahmaputra Bangladesh Border, Koch Kingdom Heritage, and Assam's Western Gateway</h2>
<p>Dhubri — the district headquarters of Dhubri district in Assam (at the Bangladesh border, western Assam), a district at the confluence of Assam, Meghalaya, and Bangladesh at the Brahmaputra river bend (the Dhubri district — the westernmost district of Assam; it borders Bangladesh to the south and west; the Brahmaputra River flows through Dhubri district and then enters Bangladesh (where it is called the Jamuna and joins the Padma before reaching the Bay of Bengal); the Dhubri-Bangladesh border is the main Brahmaputra river border; the Koch Kingdom (the Dhubri area was part of the Koch Kingdom — the Koch dynasty was one of the most powerful medieval kingdoms of Assam and North Bengal (16th-17th CE); the Koch Kingdom split into Koch Bihar (which came under Bengal control) and Koch Hajo (which remained in Assam); the Dhubri area was the western frontier of Koch Hajo; the Singh Satra (Sattras — Vaishnava monasteries established by Srimanta Sankardev (15th-16th CE Assamese saint) are found in the Dhubri area); the Gauripur Rajbari (the old royal palace of the Gauripur zamindars — a Koch-Rajput royal family; the Gauripur Rajbari was known for a famous circus (the Gauripur Circus — the first elephant-based circus in South Asia started here); the Dhubri-Phulbari border crossing (with Bangladesh — one of Assam's land border crossings with Bangladesh)), and a city of Brahmaputra-Bangladesh confluence and Koch Kingdom heritage — is Assam's most Brahmaputra-enters-Bangladesh-westernmost and Koch-Kingdom-Gauripur-Rajbari Dhubri. From birthday parties in Dhubri to celebration cakes — RedHeart covers all Dhubri areas: Dhubri city, Gauripur, Bilasipara, Chapar, Agomoni, Golakganj, Rupsi.</p>
<p>Our Dhubri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhubri, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhubri city, Gauripur, Bilasipara, Chapar, Agomoni, Golakganj, Rupsi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dhubri?", answer: "Yes, same-day cake delivery is available across all Dhubri areas — Dhubri city, Gauripur, Bilasipara, Chapar, Agomoni, and Golakganj — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dhubri?", answer: "Yes, all flavours are available in eggless variants for Dhubri delivery." },
      { question: "Do you deliver midnight cakes in Dhubri?", answer: "Yes, midnight birthday cake delivery is available across Dhubri city zones." }
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
