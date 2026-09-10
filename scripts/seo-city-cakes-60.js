// Cakes Batch 60 — 12 cities
// Karnataka: Koppal, Yadgir, Bidar, Bagalkot
// MP: Balaghat, Burhanpur, Anuppur, Dindori
// West Bengal: Howrah, Alipurduar
// Telangana: Mancherial, Peddapalli

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "koppal": {
    cityName: "Koppal",
    metaTitle: "Cake Delivery in Koppal | Hampi Adjacent Karnataka Tungabhadra KPCL Ginigera | RedHeart",
    metaDescription: "Order cakes online in Koppal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Koppal",
    metaKeyword: "cake delivery koppal, order cake online koppal, birthday cake koppal, custom cake koppal, same day cake delivery koppal Hampi adjacent Karnataka Tungabhadra KPCL power Ginigera Gadag Munirabad",
    footerContent: `
<h2>Cake Delivery in Koppal — Hampi World Heritage Adjacent, Tungabhadra River, and Karnataka's Power District</h2>
<p>Koppal — the district headquarters of Koppal district in Karnataka (northern Karnataka; carved from Raichur in 1997; Tungabhadra River basin), a district adjacent to UNESCO World Heritage Site Hampi and home to significant power generation infrastructure (the Koppal district is the gateway district to Hampi (UNESCO World Heritage 1986) — while Hampi itself is in Vijayanagara/Bellary district, Koppal's Gangavathi and Munirabad areas are in the Hampi region; the Tungabhadra River (flows along the Koppal-Ballari border; provides irrigation to the Koppal district's paddy cultivation; the Tungabhadra Dam at Hosapete-Munirabad; Koppal's paddy bowl); the KPCL Koppal Solar Power Park (Koppal district — in recent years Koppal has attracted major solar power investment; the KPCL (Karnataka Power Corporation Limited) Koppal Solar Park is one of Karnataka's largest; the district's location in the sunbelt of northern Karnataka (high solar irradiance) makes it suitable for solar farming); the Koppal Fort (historical fort in Koppal city); the Gangavathi rice market (Gangavathi town in Koppal — one of Karnataka's major paddy/rice market towns; the Tungabhadra basin's paddy bowl); the Ginigera area (Koppal district)), and a city of Hampi-adjacent Tungabhadra paddy and solar power Karnataka — is Karnataka's most Hampi-adjacent-Tungabhadra-paddy and KPCL-solar-power Koppal. From birthday parties in Koppal to celebration cakes — RedHeart covers all areas: Koppal city, Gangavathi, Kushtagi, Yelbarga, Karatagi, Ginigera, Munirabad.</p>
<p>Our Koppal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koppal, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koppal city, Gangavathi, Kushtagi, Yelbarga, Karatagi, Ginigera, Munirabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Koppal?", answer: "Yes, same-day cake delivery is available across all Koppal areas — Koppal city, Gangavathi, Kushtagi, Yelbarga, Karatagi, and Munirabad — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Koppal?", answer: "Yes, all flavours are available in eggless variants for Koppal delivery." },
      { question: "Do you deliver midnight cakes in Koppal?", answer: "Yes, midnight birthday cake delivery is available across Koppal city and Gangavathi zones." }
    ]
  },

  "yadgir": {
    cityName: "Yadgir",
    metaTitle: "Cake Delivery in Yadgir | Karnataka Bhima Krishna Gulbarga Sharana Basavanna | RedHeart",
    metaDescription: "Order cakes online in Yadgir. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Yadgir",
    metaKeyword: "cake delivery yadgir, order cake online yadgir, birthday cake yadgir, custom cake yadgir, same day cake delivery yadgir Karnataka Bhima Krishna Gulbarga Kalaburagi Sharana Basavanna Shorapur Naryanapur Dam",
    footerContent: `
<h2>Cake Delivery in Yadgir — Bhima-Krishna Rivers, Narayanapur Dam, and Vachana Sharana Country</h2>
<p>Yadgir — the district headquarters of Yadgir district in Karnataka (northeastern Karnataka; Kalaburagi division; carved from Gulbarga/Kalaburagi in 2010), one of Karnataka's newest and most underdeveloped districts — with important irrigation infrastructure and Sharana heritage (the Yadgir district — located in the Hyderabad-Karnataka (Kalyana Karnataka) region; one of Karnataka's most backward districts; the Bhima River (flows through and borders the Yadgir district — a major Krishna tributary; the Bhima flows east before joining the Krishna; the Bhima valley is the core of Yadgir geography); the Narayanapur Dam (Almatti Dam on the Krishna, though the Narayanapur Dam and reservoir is in adjacent Raichur-Yadgir area; the Krishna-Bhima irrigation system for Kalyana Karnataka); the Shorapur (Yadgir district — the Shorapur Fort and Rajas; the historic Shorapur state — a former princely state; the Shorapur Rebellion 1858 (the Shorapur Rajah Venkatappa Nayaka rebelled against British annexation of his kingdom after the death of the last raja; the British suppressed the rebellion); the Sharana movement heritage (the entire Kalaburagi-Yadgir-Bidar region is the heartland of the 12th-century Vachana Sharana movement — the social reform movement led by Basavanna (Basaveshwara) (1131-1168 CE) which rejected caste discrimination and Brahminical rituals; Basavanna was the prime minister of the Kalachuri king Bijjala of Kalyani; the Anubhava Mantapa (the first-ever democratic spiritual parliament; Basavanna-Allama Prabhu; revolutionary egalitarianism)), and a city of Shorapur Rebellion and Vachana Sharana Basavanna heritage — is Karnataka's most Shorapur-Rebellion-1858-British and Vachana-Sharana-Basavanna-Kalyana-Karnataka Yadgir. From birthday parties in Yadgir to celebration cakes — RedHeart covers all areas: Yadgir city, Shorapur, Surpur, Shahpur, Gurmitkal, Hunsagi, Wadagera.</p>
<p>Our Yadgir cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadgir, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadgir city, Shorapur, Surpur, Shahpur, Gurmitkal, Hunsagi, Wadagera</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Yadgir?", answer: "Yes, same-day cake delivery is available across all Yadgir areas — Yadgir city, Shorapur, Surpur, Shahpur, Gurmitkal, and Hunsagi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Yadgir?", answer: "Yes, all flavours are available in eggless variants for Yadgir delivery." },
      { question: "Do you deliver midnight cakes in Yadgir?", answer: "Yes, midnight birthday cake delivery is available across Yadgir city and Shorapur zones." }
    ]
  },

  "bidar": {
    cityName: "Bidar",
    metaTitle: "Cake Delivery in Bidar | Bidriware GI Karnataka Bidar Fort Mahmud Gawan Madrasa | RedHeart",
    metaDescription: "Order cakes online in Bidar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bidar",
    metaKeyword: "cake delivery bidar, order cake online bidar, birthday cake bidar, custom cake bidar, same day cake delivery bidar Bidriware GI Karnataka Bidar Fort Bahmani Mahmud Gawan Madrasa silver zinc inlay craft",
    footerContent: `
<h2>Cake Delivery in Bidar — GI Bidriware (Silver-Inlay on Zinc), Bidar Fort, and Bahmani Sultanate Capital</h2>
<p>Bidar — the district headquarters of Bidar district in Karnataka (the northernmost Karnataka district; Telangana border; historically Bahmani Sultanate capital), a city of extraordinary medieval heritage and India's finest inlay metalcraft (the GI Bidriware (the Bidri craft — one of India's most exquisite and unique traditional crafts; GI-protected "Bidriware"; it involves casting zinc-copper alloy (now identified by its matt black color) and then intricately inlaying silver wire into engraved designs; the signature jet-black finish is achieved by a special soil treatment using ammonium chloride that selectively blackens the zinc-copper alloy but not the silver; the result is luminous silver on jet-black — hookah bases, trays, boxes, jewelry, decorative items; the Bidar craft is named after the city and has been practised here since the Bahmani Sultanate (15th century CE); the craft families have practiced it for 500+ years; GI designation); the Bidar Fort (the massive Bidar Fort — built and expanded by the Bahmani Sultanate (1347-1527 CE) and later the Barid Shahi dynasty; one of the most impressive medieval fortresses in the Deccan; the triple-moated fortification; the Rangin Mahal (palace of colorful tiles); the Solah Khamba Mosque); the Mahmud Gawan Madrasa (1472 CE — the three-story Persian-style Islamic college built by the Bahmani prime minister Mahmud Gawan; magnificent tile-work and calligraphy; one of South Asia's finest examples of Persian Islamic architecture; partially collapsed in a gunpowder explosion in 1696); the Bahmani Sultanate heritage (Bidar replaced Gulbarga as the Bahmani capital in 1422 CE)), and a city of GI Bidriware jet-black silver-inlay and Mahmud Gawan Madrasa Bahmani heritage — is Karnataka's most Bidriware-GI-zinc-silver-500-years and Bahmani-Bidar-Fort-Mahmud-Gawan Bidar. From birthday parties in Bidar to celebration cakes — RedHeart covers all areas: Bidar city, Basavakalyan, Bhalki, Aurad, Humanabad, Udgir adjacent.</p>
<p>Our Bidar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bidriware Silver-Inlay / Bidar Fort / Bahmani-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bidar, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bidar city, Basavakalyan, Bhalki, Aurad, Humanabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bidriware Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bidar?", answer: "Yes, same-day cake delivery is available across all Bidar areas — Bidar city, Basavakalyan, Bhalki, Aurad, and Humanabad — for orders placed before 3 PM." },
      { question: "Do you have Bidriware-themed cakes?", answer: "Yes! The GI Bidriware (the unique Indian craft of inlaying silver into jet-black zinc-copper alloy; practised in Bidar for 500+ years since the Bahmani Sultanate; the jet-black finish uses special Bidar soil with ammonium chloride that selectively blackens the alloy but not the silver; GI-protected) and the Bidar Fort + Mahmud Gawan Madrasa 1472 CE (Bahmani Persian architecture with magnificent tile-work) inspire our most Bidriware-silver-inlay fondant cakes." },
      { question: "Are eggless cakes available in Bidar?", answer: "Yes, all flavours are available in eggless variants for Bidar delivery." }
    ]
  },

  "bagalkot": {
    cityName: "Bagalkot",
    metaTitle: "Cake Delivery in Bagalkot | Pattadakal UNESCO Aihole Badami Chalukya Karnataka | RedHeart",
    metaDescription: "Order cakes online in Bagalkot. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bagalkot",
    metaKeyword: "cake delivery bagalkot, order cake online bagalkot, birthday cake bagalkot, custom cake bagalkot, same day cake delivery bagalkot Pattadakal UNESCO Aihole Badami Chalukya Karnataka Malaprabha Almatti Dam",
    footerContent: `
<h2>Cake Delivery in Bagalkot — Pattadakal (UNESCO), Aihole (Cradle of Indian Architecture), and Badami Chalukyas</h2>
<p>Bagalkot — the district headquarters of Bagalkot district in Karnataka (northern Karnataka; Malaprabha River basin), a district that is arguably the most archaeology-rich single district in India — home to the UNESCO World Heritage site and two other world-class archaeological complexes (the Pattadakal UNESCO World Heritage Site 1987 (Pattadakal — the ceremonial coronation city of the Badami Chalukyas (7th-8th CE); 10 temples demonstrating the culmination of early Chalukya architecture; the site is unique in showing the transition and synthesis between the Nagara (North Indian) and Dravida (South Indian) temple styles side-by-side; the Virupaksha Temple at Pattadakal (740 CE) is a masterpiece that directly inspired the later Kailasa Temple at Ellora); the Aihole (the "Cradle of Indian Temple Architecture" — 125+ temples in Aihole dating from 4th to 12th centuries CE; Aihole is where Indian temple architecture was first experimented with; the Durga Temple (with its apsidal plan); the Ladkhan Temple (one of the earliest-surviving Hindu temples in India); the Meguti Jain Temple 634 CE (one of the first-dated temples in India with a foundation inscription); the Badami Cave Temples (6th century CE Badami Chalukya cave temples carved into red sandstone cliffs; four caves — three Hindu (Shiva-Vishnu-Vaishnava) and one Jain; Mahishasura-mardini panel; Trivikrama panel; Nataraja dancing with 18 arms; the Agastya Lake/Badami Fort above); the Almatti Dam (on the Krishna River; one of Karnataka's most contested and significant dams; provides water to northern Karnataka districts)), and a city of UNESCO Pattadakal and Aihole Cradle-of-Indian-Architecture Chalukyan — is Karnataka's most Pattadakal-UNESCO-Chalukya and Aihole-Cradle-Indian-Architecture Bagalkot. From birthday parties in Bagalkot to celebration cakes — RedHeart covers all areas: Bagalkot city, Badami, Pattadakal, Aihole, Ilkal, Mudhol, Jamkhandi, Rabkavi Banhatti.</p>
<p>Our Bagalkot cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Pattadakal UNESCO / Badami Cave / Chalukya Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bagalkot, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bagalkot city, Badami, Ilkal, Mudhol, Jamkhandi, Rabkavi Banhatti</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Pattadakal UNESCO Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bagalkot?", answer: "Yes, same-day cake delivery is available across all Bagalkot areas — Bagalkot city, Badami, Ilkal, Mudhol, Jamkhandi, and Rabkavi Banhatti — for orders placed before 3 PM." },
      { question: "Do you have Pattadakal UNESCO and Chalukya-themed cakes?", answer: "Yes! Bagalkot has the UNESCO Pattadakal World Heritage Site (7th-8th CE Badami Chalukya coronation city; shows Nagara-Dravida temple synthesis; inspired Ellora's Kailasa Temple), Aihole (Cradle of Indian Temple Architecture — 4th to 12th century experiments; Meguti Jain Temple 634 CE inscription), and the Badami Cave Temples (6th CE red sandstone; 18-armed Nataraja; Trivikrama) — all inspiring our most Chalukya-Pattadakal-Badami fondant cakes." },
      { question: "Are eggless cakes available in Bagalkot?", answer: "Yes, all flavours are available in eggless variants for Bagalkot delivery." }
    ]
  },

  "balaghat": {
    cityName: "Balaghat",
    metaTitle: "Cake Delivery in Balaghat | Copper Mines MP Kanha Adjacent Wainganga Gondi Tribe | RedHeart",
    metaDescription: "Order cakes online in Balaghat. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Balaghat",
    metaKeyword: "cake delivery balaghat, order cake online balaghat, birthday cake balaghat, custom cake balaghat, same day cake delivery balaghat Copper mines MP Kanha Tiger adjacent Wainganga River Gondi tribe Malanjkhand MECL",
    footerContent: `
<h2>Cake Delivery in Balaghat — Malanjkhand Copper (India's Largest Copper Mine), Kanha Tiger Reserve Adjacent, and Wainganga River</h2>
<p>Balaghat — the district headquarters of Balaghat district in Madhya Pradesh (southeastern MP; MP-Maharashtra-Chhattisgarh tri-junction; Satpura Range), the home of India's largest copper mine and adjacent to the Kanha Tiger Reserve (the Malanjkhand Copper Mines (Malanjkhand — in Balaghat district; the single largest copper deposit in India; operated by Hindustan Copper Limited (HCL); Malanjkhand is one of the largest open-cast copper mines in Asia; the copper ore reserves here have been mined since the 1970s; the mine produces a significant percentage of India's domestic copper output; the Malanjkhand town grew entirely around the copper mine); the Kanha Tiger Reserve (adjacent — the Kanha National Park is in Mandla and Balaghat districts; the Balaghat portion of Kanha is significant; the Kanha Tiger Reserve has the highest tiger density of any Tiger Reserve in India; the Sal and bamboo forests; Kanha meadows inspired Jungle Book); the Wainganga River (the Wainganga — a major Godavari tributary — originates in Balaghat district from the Satpura Range; Wainganga flows southward through Chhattisgarh and Maharashtra to join the Wardha River; the Bhandalada reservoir on the Wainganga); the Gondi tribal community (the Gond tribal people are the major tribal community of Balaghat; the Gond Raj; the cultural heritage of Gond forest communities in the Satpura-Satpuda region)), and a city of Malanjkhand India's largest copper and Kanha tiger adjacent Balaghat — is MP's most Malanjkhand-India's-largest-copper-mine-HCL and Kanha-adjacent-Wainganga-origin Balaghat. From birthday parties in Balaghat to celebration cakes — RedHeart covers all areas: Balaghat city, Waraseoni, Katangi, Lanji, Lalburra, Baihar, Kirnapur.</p>
<p>Our Balaghat cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Malanjkhand Copper / Kanha Tiger-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balaghat, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balaghat city, Waraseoni, Katangi, Lanji, Lalburra, Baihar, Kirnapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kanha Tiger Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Balaghat?", answer: "Yes, same-day cake delivery is available across all Balaghat areas — Balaghat city, Waraseoni, Katangi, Lanji, Lalburra, and Baihar — for orders placed before 3 PM." },
      { question: "Do you have Malanjkhand Copper Mine and Kanha Tiger-themed cakes?", answer: "Yes! The Malanjkhand Copper Mine (India's single largest copper deposit; operated by HCL; one of Asia's largest open-cast copper mines; produces a major share of India's copper) and the adjacent Kanha Tiger Reserve (highest tiger density in any Indian Tiger Reserve; Kanha meadows that inspired Rudyard Kipling's Jungle Book; Balaghat district is part of Kanha) inspire our most Malanjkhand-copper-mine and Kanha-tiger fondant cakes." },
      { question: "Are eggless cakes available in Balaghat?", answer: "Yes, all flavours are available in eggless variants for Balaghat delivery." }
    ]
  },

  "burhanpur": {
    cityName: "Burhanpur",
    metaTitle: "Cake Delivery in Burhanpur | Mumtaz Mahal Died Tapti River MP Mughal Gateway | RedHeart",
    metaDescription: "Order cakes online in Burhanpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Burhanpur",
    metaKeyword: "cake delivery burhanpur, order cake online burhanpur, birthday cake burhanpur, custom cake burhanpur, same day cake delivery burhanpur Mumtaz Mahal died Tapti River Mughal gateway MP Khandesh Black Taj Mahal",
    footerContent: `
<h2>Cake Delivery in Burhanpur — Where Mumtaz Mahal Died (Inspiration for Taj Mahal), Mughal Gateway City, and Tapti River</h2>
<p>Burhanpur — the district headquarters of Burhanpur district in Madhya Pradesh (southern MP; Tapti River; carved from Khandwa in 2003), a city with one of the most poignant connections to the Taj Mahal (the Mumtaz Mahal connection — Mumtaz Mahal (Arjumand Banu Begum; 1593-1631 CE; the beloved wife of Mughal Emperor Shah Jahan) died in Burhanpur on June 17, 1631, while giving birth to her 14th child (Gauhar Ara Begum); Mumtaz Mahal had accompanied Shah Jahan on a military campaign to the Deccan; she died in the Shahi Qila (royal fort) of Burhanpur; her body was kept in the garden of Burhanpur's Zainabad — now called "Ahukhana" (the deer enclosure) — for nearly six months before being taken to Agra; Shah Jahan, distraught by grief, planned the Taj Mahal as her eternal resting place; there was reportedly a plan to build the "Black Taj Mahal" at Burhanpur on the opposite bank of the Tapti (where Mumtaz died) — some scholars have debated this but it remains a Burhanpur legend; the Shahi Qila (Burhanpur Fort) — the Mughal fort on the Tapti; the Dargah-e-Hakimi (Burhanpur is the world headquarters of the Dawoodi Bohra Muslim community — the Dargah of the Bohra imams is in Burhanpur; the seat of the Bohra Dai al-Mutlaq is in Mumbai but the sacred dargah is in Burhanpur; the annual Bohra pilgrimages to Burhanpur); the Jama Masjid 1588 CE; the Tapti River (Burhanpur on the Tapti — one of India's westward-flowing rivers)), and a city of Mumtaz Mahal's last breath and Dawoodi Bohra Dargah world headquarters — is MP's most Mumtaz-Mahal-died-Burhanpur-1631 and Dawoodi-Bohra-Dargah-world-headquarters Burhanpur. From birthday parties in Burhanpur to celebration cakes — RedHeart covers all areas: Burhanpur city, Nepanagar, Shahpur, Khaknar.</p>
<p>Our Burhanpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mumtaz Mahal Memorial / Taj Mahal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Burhanpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Burhanpur city, Nepanagar, Shahpur, Khaknar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mumtaz Memorial Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Burhanpur?", answer: "Yes, same-day cake delivery is available across all Burhanpur areas — Burhanpur city, Nepanagar, Shahpur, and Khaknar — for orders placed before 3 PM." },
      { question: "Do you have Mumtaz Mahal and Taj Mahal-themed cakes?", answer: "Yes! Burhanpur is where Mumtaz Mahal (Arjumand Banu Begum; beloved wife of Shah Jahan) died on June 17, 1631 while giving birth to her 14th child; her body remained here for 6 months before the Taj Mahal was built in Agra; Burhanpur also houses the world-headquarters Dargah of the Dawoodi Bohra Muslim community — inspiring our most Mumtaz-Mahal-died-1631 fondant cakes." },
      { question: "Are eggless cakes available in Burhanpur?", answer: "Yes, all flavours are available in eggless variants for Burhanpur delivery." }
    ]
  },

  "anuppur": {
    cityName: "Anuppur",
    metaTitle: "Cake Delivery in Anuppur | Narmada Origin Amarkantak MP Vindhya Maikala | RedHeart",
    metaDescription: "Order cakes online in Anuppur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Anuppur",
    metaKeyword: "cake delivery anuppur, order cake online anuppur, birthday cake anuppur, custom cake anuppur, same day cake delivery anuppur Narmada origin Amarkantak MP Vindhya Maikala Range Son River origin Johilla",
    footerContent: `
<h2>Cake Delivery in Anuppur — Amarkantak: Origin of the Narmada River, Son River, and Maikala Range</h2>
<p>Anuppur — the district headquarters of Anuppur district in Madhya Pradesh (southeastern MP; Maikala Range; carved from Shahdol), a district that contains one of the holiest places in India — Amarkantak (the Amarkantak Pilgrimage (Amarkantak — in Anuppur district; on the Maikala Range, at the confluence of the Vindhya and Satpura ranges at approximately 1,048m altitude; Amarkantak is the origin of three sacred rivers: (1) the Narmada River (one of India's holiest rivers — originates from the Narmada Kund at Amarkantak; flows 1,312 km westward to the Arabian Sea at Bharuch, Gujarat; the only major Indian river flowing westward through the Vindhya-Satpura corridor; one of the Saptanadiyas — seven holy rivers of India; the Narmada Parikrama — a 2,600 km walking circumambulation of the entire Narmada River both banks — takes approximately 3 years to complete; thousands of pilgrims attempt this; the Narmada has no ferryman — one must always walk or swim); (2) the Son River (the Son — a Ganga tributary — also originates near Amarkantak; flows northward and then eastward to join the Ganga at Patna (via Ara); Sonbhadra district is on the Son River; the Son River has given its name to Sonbhadra and Sone Bhadra River); (3) the Johilla River; the Kapildhara Falls and Dudh Dhara at Amarkantak; the NTPC Amarkantak Thermal Power Station (near Anuppur — a major power plant); the Anuppur coal fields), and a city of Amarkantak Narmada River origin and Son River origin — is MP's most Amarkantak-Narmada-Kund-origin-1312km-westward and three-rivers-origin-Maikala-Range Anuppur. From birthday parties in Anuppur to celebration cakes — RedHeart covers all areas: Anuppur city, Amarkantak, Kotma, Pushparajgarh, Jaitpur, Ramnagar.</p>
<p>Our Anuppur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Amarkantak Narmada Origin / Three Rivers-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anuppur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anuppur city, Amarkantak, Kotma, Pushparajgarh, Jaitpur, Ramnagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Amarkantak Narmada Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Anuppur?", answer: "Yes, same-day cake delivery is available across all Anuppur areas — Anuppur city, Amarkantak, Kotma, Pushparajgarh, and Jaitpur — for orders placed before 3 PM." },
      { question: "Do you have Amarkantak Narmada Origin-themed cakes?", answer: "Yes! Amarkantak (in Anuppur district — origin of the Narmada River from the Narmada Kund; the Narmada flows 1,312 km westward to the Arabian Sea; the Narmada Parikrama — a 2,600 km walking circumambulation taking ~3 years; also origin of the Son River; at the Maikala Range 1,048m; Kapildhara Falls; one of India's most sacred pilgrimage centers) inspires our most Amarkantak-Narmada-Kund-origin fondant cakes." },
      { question: "Are eggless cakes available in Anuppur?", answer: "Yes, all flavours are available in eggless variants for Anuppur delivery." }
    ]
  },

  "dindori": {
    cityName: "Dindori",
    metaTitle: "Cake Delivery in Dindori | Narmada Valley MP Baiga Tribe UNESCO Intangible Heritage | RedHeart",
    metaDescription: "Order cakes online in Dindori. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dindori",
    metaKeyword: "cake delivery dindori, order cake online dindori, birthday cake dindori, custom cake dindori, same day cake delivery dindori Narmada Valley MP Baiga tribe tattoo Gondi tribal Kanha adjacent Amarkantak adjacent",
    footerContent: `
<h2>Cake Delivery in Dindori — Baiga Tribe Tattoo Art, Narmada Valley, and Kanha-Amarkantak Corridor</h2>
<p>Dindori — the district headquarters of Dindori district in Madhya Pradesh (central MP; Narmada Valley; between Kanha and Amarkantak), one of MP's most tribal districts — home to the Baiga tribe, one of India's most distinctive scheduled tribal communities (the Baiga Tribe (the Baiga people — a Particularly Vulnerable Tribal Group (PVTG) of Madhya Pradesh and Chhattisgarh; Dindori has the highest Baiga population; the Baiga are forest-dwelling hunter-cultivators; the Baiga tattoo tradition — Baiga women have some of India's most elaborately documented traditional tattoo traditions; facial and body tattoos are spiritually significant among Baiga women; the tattoo designs include floral, animal, and geometric motifs; the Baiga "Bhumia" (earth priests) tradition; the Baiga are considered the "original sons of the earth" in their own mythology — they believe they were the first people created by Brahma and were given the earth as their home); the Narmada Valley (the Narmada River flows through Dindori district — between its source at Amarkantak (Anuppur) and the broader valley; the Narmada Kund tributaries and streams in Dindori); the Kanha connection (the Kanha National Park and its buffer zones extend into Dindori district; the dense Sal forests that characterize Kanha are also found in Dindori), and a city of Baiga PVTG tribal tattoo art and Narmada-Kanha corridor — is MP's most Baiga-PVTG-facial-body-tattoo and Narmada-Kanha-corridor-tribal Dindori. From birthday parties in Dindori to celebration cakes — RedHeart covers all areas: Dindori city, Shahpura, Bajag, Mehandwani, Amarpur, Gadarwara adjacent.</p>
<p>Our Dindori cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dindori, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dindori city, Shahpura, Bajag, Mehandwani, Amarpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dindori?", answer: "Yes, same-day cake delivery is available across all Dindori areas — Dindori city, Shahpura, Bajag, Mehandwani, and Amarpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dindori?", answer: "Yes, all flavours are available in eggless variants for Dindori delivery." },
      { question: "Do you deliver midnight cakes in Dindori?", answer: "Yes, midnight birthday cake delivery is available across Dindori city zones." }
    ]
  },

  "howrah": {
    cityName: "Howrah",
    metaTitle: "Cake Delivery in Howrah | Howrah Bridge Kolkata Twin City Shibpur Engineering | RedHeart",
    metaDescription: "Order cakes online in Howrah. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Howrah",
    metaKeyword: "cake delivery howrah, order cake online howrah, birthday cake howrah, custom cake howrah, same day cake delivery howrah Howrah Bridge Rabindra Setu Kolkata Shibpur IIEST Hooghly River jute mills",
    footerContent: `
<h2>Cake Delivery in Howrah — Howrah Bridge (Rabindra Setu), Kolkata's Twin City, and India's Engineering Heritage</h2>
<p>Howrah — the district headquarters and the city that is the western twin of Kolkata across the Hooghly River (the Howrah Bridge / Rabindra Setu (the Howrah Bridge — one of the world's largest and most heavily used cantilever bridges; built 1943; spans 705m over the Hooghly River connecting Howrah to Kolkata; the bridge is a balanced cantilever — no nuts and bolts used in construction (riveted throughout); carries approximately 100,000 vehicles and 150,000 pedestrians daily; the bridge is the iconic symbol of Kolkata-Howrah; the Howrah Bridge is technically a cantilever truss bridge; weighs 26,500 tonnes; named Rabindra Setu in 1965 after Rabindranath Tagore); the Botanic Garden of Howrah / Acharya Jagadish Chandra Bose Botanic Garden (Howrah — established 1787 by British East India Company; one of Asia's oldest botanical gardens; the famous Great Banyan Tree (Ficus benghalensis) — estimated 200-250 years old; the largest banyan tree in the world by canopy area (approximately 3.5 acres covered by 3,000+ aerial roots; looks like a forest but is a single tree); the Bengal botanical heritage); the IIEST Shibpur (Indian Institute of Engineering Science and Technology — Shibpur; one of India's oldest engineering colleges established 1856; the second engineering school in Asia; next to the Botanic Garden; a prestigious technical institute); the Howrah Station (one of India's busiest railway terminuses — the Howrah Station handles thousands of trains daily; the gateway for trains heading west from Kolkata/Bengal)), and a city of Howrah Bridge cantilever icon and Great Banyan Tree world's largest — is West Bengal's most Howrah-Bridge-Rabindra-Setu-cantilever and Great-Banyan-Tree-3.5-acres-single-tree Howrah. From birthday parties in Howrah to celebration cakes — RedHeart covers all areas: Howrah city, Santragachi, Shibpur, Liluah, Bally, Belur, Ghusuri, Domjur, Uluberia.</p>
<p>Our Howrah cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Howrah Bridge / Great Banyan Tree / Kolkata Twin-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Howrah, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Howrah city, Santragachi, Shibpur, Liluah, Bally, Belur, Ghusuri, Domjur, Uluberia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Howrah Bridge Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Howrah?", answer: "Yes, same-day cake delivery is available across all Howrah areas — Howrah city, Santragachi, Shibpur, Liluah, Bally, Belur, and Uluberia — for orders placed before 3 PM." },
      { question: "Do you have Howrah Bridge-themed cakes?", answer: "Yes! The Howrah Bridge / Rabindra Setu (built 1943; 705m cantilever truss — no nuts or bolts, entirely riveted; 26,500 tonnes; 100,000 vehicles + 150,000 pedestrians daily; icon of Kolkata-Howrah) and the Great Banyan Tree at the Acharya JC Bose Botanic Garden (world's largest banyan tree by canopy — 3.5 acres; 3,000+ aerial roots from a single tree; 200+ years old) inspire our most Howrah-Bridge-Rabindra-Setu fondant cakes." },
      { question: "Are eggless cakes available in Howrah?", answer: "Yes, all flavours are available in eggless variants for Howrah delivery." }
    ]
  },

  "alipurduar": {
    cityName: "Alipurduar",
    metaTitle: "Cake Delivery in Alipurduar | Buxa Tiger Reserve Dooars WB Bhutan Border Jaldapara | RedHeart",
    metaDescription: "Order cakes online in Alipurduar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Alipurduar",
    metaKeyword: "cake delivery alipurduar, order cake online alipurduar, birthday cake alipurduar, custom cake alipurduar, same day cake delivery alipurduar Buxa Tiger Reserve Dooars WB Bhutan border Jaldapara Indian one-horned rhino Torsa River tea gardens",
    footerContent: `
<h2>Cake Delivery in Alipurduar — Dooars Tea Gardens, Buxa Tiger Reserve, Jaldapara Indian Rhino, and Bhutan Border</h2>
<p>Alipurduar — the district headquarters of Alipurduar district in West Bengal (carved from Jalpaiguri in 2014), a new district in the heart of the Dooars — the foothills of Bhutan and Assam (the Dooars (literally "doors/gateways" to Bhutan and other northeast regions — the Dooars is a wide belt of foothill plains between the Teesta and the Sankosh rivers in the foothills of the Eastern Himalayas/Bhutan; 30-40km wide; covered with tea gardens and sal forests and elephant corridors; Alipurduar is the main city of the Dooars); the Jaldapara National Park / Jaldapara Wildlife Sanctuary (in Alipurduar district — the premier wildlife reserve of West Bengal; Jaldapara is the second-largest habitat of the Great Indian One-Horned Rhinoceros (Rhinoceros unicornis) in the world (after Kaziranga in Assam); elephant-back safari at Jaldapara; the Torsa River flows through Jaldapara; rhino, elephant, bison, leopard, spotted deer); the Buxa Tiger Reserve (Buxa National Park/Tiger Reserve in Alipurduar district; Project Tiger; the Buxa Fort — the historic fort at 867m used by the British to exile Bhutanese kings and later Tibetan freedom fighters; at the Bhutan border; trekking to Buxa Fort); the Bhutan International Border (the India-Bhutan border passes through Alipurduar district; the Jaigaon-Phuentsholing border crossing — one of the busiest India-Bhutan border points; just across is Phuentsholing, Bhutan); the Dooars Tea Gardens (Alipurduar has numerous tea estates; Dooars tea is known for its full-bodied character)), and a city of Jaldapara Indian Rhino and Buxa Tiger Bhutan border Dooars — is WB's most Jaldapara-Indian-Rhino-second-largest-habitat and Buxa-Tiger-Bhutan-border Alipurduar. From birthday parties in Alipurduar to celebration cakes — RedHeart covers all areas: Alipurduar city, Jaigaon, Cooch Behar adjacent, Madarihat, Kalchini, Kumar Grade, Samuktala.</p>
<p>Our Alipurduar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Tea Cake (Dooars Tea!), Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alipurduar, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alipurduar city, Jaigaon, Madarihat, Kalchini, Kumar Grade, Samuktala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tea Cake, Chocolate, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Alipurduar?", answer: "Yes, same-day cake delivery is available across all Alipurduar areas — Alipurduar city, Jaigaon, Madarihat, Kalchini, and Kumar Grade — for orders placed before 3 PM." },
      { question: "Do you have Dooars Tea and Jaldapara Rhino-themed cakes?", answer: "Yes! Alipurduar is the heart of the Dooars — the gateway belt to Bhutan with its tea gardens and sal forests. Jaldapara National Park (world's second-largest Indian One-Horned Rhinoceros habitat after Kaziranga; rhino + elephant + leopard + bison; Torsa River) and the Buxa Tiger Reserve (Bhutan border; historic Buxa Fort at 867m) inspire our Dooars-Tea fondant cakes." },
      { question: "Are eggless cakes available in Alipurduar?", answer: "Yes, all flavours including Dooars Tea Cake are available in eggless variants for Alipurduar delivery." }
    ]
  },

  "mancherial": {
    cityName: "Mancherial",
    metaTitle: "Cake Delivery in Mancherial | Telangana Godavari Belt Coal SCCL Ramagundam | RedHeart",
    metaDescription: "Order cakes online in Mancherial. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mancherial",
    metaKeyword: "cake delivery mancherial, order cake online mancherial, birthday cake mancherial, custom cake mancherial, same day cake delivery mancherial Telangana coal SCCL NTPC Ramagundam Godavari Kawal Tiger Reserve Adilabad border",
    footerContent: `
<h2>Cake Delivery in Mancherial — Coal Mining District, SCCL, Godavari Belt, and Kawal Tiger Reserve</h2>
<p>Mancherial — the district headquarters of Mancherial district in Telangana (northeastern Telangana; carved from Adilabad in 2016; Godavari River belt), a district in Telangana's coal and power production heartland (the Mancherial district coal belt (Mancherial district — in the Godavari Coalfields; part of Telangana's significant coal mining zone; SCCL (Singareni Collieries Company Limited) mines in the Mancherial-Peddapalli-Jayashankar Bhupalpally belt are the southern Singareni coal mines; SCCL is one of India's major coal-producing companies; jointly owned by the Telangana government and Government of India; the Godavari Coalfields are one of India's significant coal basins); the Godavari River (the Mancherial district is on the Godavari River — India's second-largest river by discharge; the Godavari flows through the Mancherial district on its course eastward toward the Bay of Bengal); the Kawal Tiger Reserve (in the Mancherial-Nirmal-Kumuram Bheem Asifabad district area — the Kawal Tiger Reserve is one of Telangana's main tiger habitats; sal and teak forests; Kawal is an older wildlife sanctuary promoted to Tiger Reserve; holds tigers and leopards); the Chhattisgarh-Maharashtra border adjacency (Mancherial district is at the tripoint of Telangana, Chhattisgarh, and Maharashtra); the Pranahita-Chevella irrigation project), and a city of SCCL coal mines and Godavari River basin Telangana — is Telangana's most SCCL-Godavari-coalfields and Kawal-Tiger-Reserve Mancherial. From birthday parties in Mancherial to celebration cakes — RedHeart covers all areas: Mancherial city, Bellampalli, Chennur, Luxettipet, Mandamarri, Jannaram, Kotapalli.</p>
<p>Our Mancherial cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mancherial, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mancherial city, Bellampalli, Chennur, Luxettipet, Mandamarri, Jannaram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mancherial?", answer: "Yes, same-day cake delivery is available across all Mancherial areas — Mancherial city, Bellampalli, Chennur, Luxettipet, Mandamarri, and Jannaram — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mancherial?", answer: "Yes, all flavours are available in eggless variants for Mancherial delivery." },
      { question: "Do you deliver midnight cakes in Mancherial?", answer: "Yes, midnight birthday cake delivery is available across Mancherial city and Bellampalli zones." }
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
