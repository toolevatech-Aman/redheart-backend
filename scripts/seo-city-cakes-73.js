// Cakes Batch 73 — 12 cities
// Bihar: Siwan, Saran (Chhapra), Bhojpur (Arrah), Rohtas (Sasaram), Kaimur (Bhabua), Aurangabad Bihar
// UP: Bhadohi, Ambedkar Nagar, Amethi, Sultanpur, Fatehpur, Kaushambi

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "siwan": {
    cityName: "Siwan",
    metaTitle: "Cake Delivery in Siwan | Bihar Mohammed Ali Jinnah Birthplace Gandak River UP | RedHeart",
    metaDescription: "Order cakes online in Siwan. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Siwan",
    metaKeyword: "cake delivery siwan, order cake online siwan, birthday cake siwan, custom cake siwan, same day cake delivery Siwan Bihar Mohammed Ali Jinnah birthplace Gandak River UP border sugarcane",
    footerContent: `
<h2>Cake Delivery in Siwan — Mohammed Ali Jinnah's Ancestral Home, Gandak River, and Western Bihar</h2>
<p>Siwan — the district headquarters of Siwan district in Bihar (northwestern Bihar; UP border; Gandak River), historically significant as the ancestral district of Pakistan's founder (the Mohammed Ali Jinnah Connection (Mohammed Ali Jinnah — the founder and first Governor-General of Pakistan — had ancestral roots in Siwan district, Bihar; Jinnah's father Jinnahbhai Poonja was from the Kathiawad region of Gujarat who came from a family originally traced to the Bihar region; the specific ancestral link is debated by historians; however, Siwan district has claimed this connection and some historical research supports ties to the area; the Siwan-Jinnah heritage narrative has been a subject of academic discussion); the Gandak River and Irrigation (the Gandak River — which rises in Nepal and flows through northwestern Bihar — passes near Siwan; the Gandak Canal project (completed 1970) irrigates the Siwan-Gopalganj-Saran fields; the fertile Gandak plains produce paddy, wheat, and sugarcane; the Siwan area is one of Bihar's most agriculturally productive zones); the Sugarcane and Litchi (Siwan district produces significant sugarcane; the litchi orchards of western Bihar extend into Siwan; banana cultivation is also notable); the UP Border Trade (Siwan's proximity to Gorakhpur and eastern UP makes it a key trade corridor)), and a city of Gandak-River-irrigation and western-Bihar-sugarcane-agricultural — is Bihar's most Siwan-Gandak and sugarcane-agricultural Siwan. From birthday parties in Siwan to celebration cakes — RedHeart covers all areas: Siwan city, Maharajganj (Siwan), Barharia, Darauli, Mairwa, Raghunathpur (Siwan).</p>
<p>Our Siwan cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siwan, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siwan city, Maharajganj (Siwan), Barharia, Darauli, Mairwa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Siwan?", answer: "Yes, same-day cake delivery is available across Siwan city, Maharajganj, Barharia, and Darauli for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Siwan?", answer: "Yes, all flavours are available in eggless variants for Siwan delivery." },
      { question: "Do you deliver midnight cakes in Siwan?", answer: "Yes, midnight birthday cake delivery is available across Siwan city zones." }
    ]
  },

  "chhapra": {
    cityName: "Chhapra",
    metaTitle: "Cake Delivery in Chhapra | Bihar Saran Ganga Ghaghra Confluence Veer Kunwar Singh | RedHeart",
    metaDescription: "Order cakes online in Chhapra. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chhapra",
    metaKeyword: "cake delivery chhapra, order cake online chhapra, birthday cake chhapra, custom cake chhapra, same day cake delivery Chhapra Saran Bihar Ganga Ghaghra confluence Veer Kunwar Singh 1857 Chapra",
    footerContent: `
<h2>Cake Delivery in Chhapra — Ganga-Ghaghra Confluence, Veer Kunwar Singh's 1857 Freedom Battle, and Saran District</h2>
<p>Chhapra — the district headquarters of Saran district in Bihar (northwestern Bihar; Ganga-Ghaghra confluence; UP border), a historically rich city at the sacred meeting of two great rivers (the Ganga-Ghaghra Confluence (the Ganga and Ghaghra (Saryu) rivers meet near Chhapra at a sacred confluence; the Dorighat / Revelagunj area marks this trivendeni-like confluence; the Ganga here is broad and holy; the Chhapra ghats on the Ganga are used for religious ceremonies including Chhath Puja — Bihar's most important festival; the Saran plains between the Ganga and Ghaghra are extraordinarily fertile); the Veer Kunwar Singh (Kunwar Singh (c.1777-1858) — the legendary 80-year-old chieftain of Jagdishpur (Bhojpur) who became a hero of the 1857 First War of Independence; Kunwar Singh fought British forces at Arrah, Azamgarh, Lucknow, and other places; he is one of the greatest freedom fighters of Bihar; while Kunwar Singh's base was Bhojpur/Arrah, his campaigns through Saran district are well-documented; Veer Kunwar Singh is a revered figure across all of Bihar); the Litchi and Banana Belt (the Saran-Vaishali-Muzaffarpur belt is India's premier litchi-growing region; Chhapra is near this belt)), and a city of Ganga-Ghaghra-confluence-sacred and Veer-Kunwar-Singh-1857 — is Bihar's most Chhapra-Ganga-Ghaghra and Saran-Kunwar-Singh Chhapra. From birthday parties in Chhapra to celebration cakes — RedHeart covers all areas: Chhapra city, Revelganj, Marhaura, Ekma, Sonpur, Parsa.</p>
<p>Our Chhapra cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhapra (Saran), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhapra city, Revelganj, Marhaura, Ekma, Sonpur, Parsa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chhapra?", answer: "Yes, same-day cake delivery is available across Chhapra city, Revelganj, Marhaura, Ekma, and Sonpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chhapra?", answer: "Yes, all flavours are available in eggless variants for Chhapra delivery." },
      { question: "Do you deliver midnight cakes in Chhapra?", answer: "Yes, midnight birthday cake delivery is available across Chhapra city zones." }
    ]
  },

  "arrah": {
    cityName: "Arrah",
    metaTitle: "Cake Delivery in Arrah | Bihar Veer Kunwar Singh 1857 Bhojpur Sone River | RedHeart",
    metaDescription: "Order cakes online in Arrah. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Arrah",
    metaKeyword: "cake delivery arrah, order cake online arrah, birthday cake arrah, custom cake arrah, same day cake delivery Arrah Bhojpur Bihar Veer Kunwar Singh 1857 Sone River Jagdishpur battle Ganga",
    footerContent: `
<h2>Cake Delivery in Arrah — Veer Kunwar Singh's 1857 Battle of Arrah, Sone River, and Bhojpur District</h2>
<p>Arrah — the district headquarters of Bhojpur district in Bihar (central Bihar; Sone River; UP border), the base of India's most celebrated elderly freedom fighter of 1857 (the Veer Kunwar Singh and Battle of Arrah (Kunwar Singh (c.1777-1858) — the Zamindar of Jagdishpur (now in Bhojpur district) — was approximately 80 years old when he joined the 1857 Uprising; despite his age, he proved a brilliant guerrilla tactician; the Siege of Arrah (July-August 1857) was a key event where Kunwar Singh's forces laid siege to the British garrison in Arrah; the British relief column under Major Vincent Eyre broke the siege; Kunwar Singh then launched campaigns through Bihar, UP, and MP — fighting British forces at Azamgarh, Lucknow, and elsewhere; he returned to Jagdishpur in April 1858 and died on April 26, 1858 — just days after a famous victory at Jagdishpur; the Veer Kunwar Singh Memorial at Jagdishpur is a national monument; his birthday (November 23) is celebrated in Bihar; the Kunwar Singh University in Arrah is named after him); the Sone River (the Sone — a major right-bank tributary of the Ganga — flows through Bhojpur district; the Sone Bridge at Arrah/Koilwar is a historic railway bridge; the Sone River's sandy banks and the fertile Sone Command Area provide irrigation to Bihar's fields)), and a city of Veer-Kunwar-Singh-1857-Battle-of-Arrah and Sone-River — is Bihar's most Arrah-Kunwar-Singh-1857 and Sone-River-Bhojpur Arrah. From birthday parties in Arrah to celebration cakes — RedHeart covers all areas: Arrah city, Jagdishpur, Koilwar, Piro, Sandesh, Bihiya.</p>
<p>Our Arrah cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arrah (Bhojpur), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arrah city, Jagdishpur, Koilwar, Piro, Sandesh, Bihiya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Arrah?", answer: "Yes, same-day cake delivery is available across Arrah city, Jagdishpur, Koilwar, Piro, and Sandesh for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Arrah?", answer: "Yes, all flavours are available in eggless variants for Arrah delivery." },
      { question: "Do you deliver midnight cakes in Arrah?", answer: "Yes, midnight birthday cake delivery is available across Arrah city zones." }
    ]
  },

  "sasaram": {
    cityName: "Sasaram",
    metaTitle: "Cake Delivery in Sasaram | Bihar Sher Shah Suri Tomb Grand Trunk Road Rohtas | RedHeart",
    metaDescription: "Order cakes online in Sasaram. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sasaram",
    metaKeyword: "cake delivery sasaram, order cake online sasaram, birthday cake sasaram, custom cake sasaram, custom cake sasaram, same day cake delivery Sasaram Rohtas Bihar Sher Shah Suri tomb Grand Trunk Road Sone River",
    footerContent: `
<h2>Cake Delivery in Sasaram — Sher Shah Suri's Magnificent Tomb (1545 CE) and Grand Trunk Road's Creator</h2>
<p>Sasaram — the district headquarters of Rohtas district in Bihar (southwestern Bihar; Sone River; UP-JH border; Grand Trunk Road), the hometown of Sher Shah Suri — the Afghan emperor who built the Grand Trunk Road and reformed Mughal India (the Sher Shah Suri Tomb (the Sher Shah Suri Mausoleum at Sasaram — built in 1545 CE — is one of India's greatest examples of Indo-Afghan architecture; the octagonal tomb (45m high) rises from an artificial lake; it is considered the finest expression of Suri architectural style; the tomb is a protected monument under ASI; Sher Shah Suri (1486-1545 CE) was the Sur dynasty emperor who defeated the Mughal Humayun and ruled as Emperor of India (1540-1545); he is celebrated for the Grand Trunk Road (GT Road) — the 2,400 km highway from Kabul to Chittagong; the Rupee currency reform; the postal system; the land revenue reforms — all Sher Shah innovations later adopted by Akbar); the Grand Trunk Road (the GT Road — NH-19 today — passes directly through Sasaram; it was built/rebuilt by Sher Shah Suri in the 1540s; the Sasaram section of the GT Road is one of the oldest stretches of this ancient highway); the Rohtas Fort (the Rohtas Fort — in Rohtas district's Kaimur Hills — is a massive medieval fort; it was used by Sher Shah Suri and later Humayun)), and a city of Sher-Shah-Suri-Tomb-1545-Indo-Afghan and Grand-Trunk-Road-builder — is Bihar's most Sasaram-Sher-Shah-Tomb and GT-Road Sasaram. From birthday parties in Sasaram to celebration cakes — RedHeart covers all areas: Sasaram city, Dehri-on-Sone, Bikramganj, Sheosagar, Nasriganj, Nokha.</p>
<p>Our Sasaram cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sasaram (Rohtas), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sasaram city, Dehri-on-Sone, Bikramganj, Sheosagar, Nokha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sasaram?", answer: "Yes, same-day cake delivery is available across Sasaram city, Dehri-on-Sone, Bikramganj, and Nokha for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sasaram?", answer: "Yes, all flavours are available in eggless variants for Sasaram delivery." },
      { question: "Do you deliver midnight cakes in Sasaram?", answer: "Yes, midnight birthday cake delivery is available across Sasaram city zones." }
    ]
  },

  "bhabua": {
    cityName: "Bhabua",
    metaTitle: "Cake Delivery in Bhabua | Bihar Kaimur Hills Vindhyachal Chandraprabha Waterfall | RedHeart",
    metaDescription: "Order cakes online in Bhabua. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bhabua",
    metaKeyword: "cake delivery bhabua, order cake online bhabua, birthday cake bhabua, custom cake bhabua, same day cake delivery Bhabua Kaimur Bihar Kaimur Hills Vindhyachal Chandraprabha waterfall UP JH border",
    footerContent: `
<h2>Cake Delivery in Bhabua — Kaimur Hills, Chandraprabha Waterfall, and Bihar's Westernmost Vindhya District</h2>
<p>Bhabua — the district headquarters of Kaimur district in Bihar (westernmost Bihar; UP-JH border; Kaimur Hills; Karamnasa River), a scenic hill district at the western tip of Bihar (the Kaimur Hills (the Kaimur Hills — an eastern extension of the Vindhya Range — run through Kaimur district and into UP's Mirzapur-Sonbhadra; the hills are densely forested; the Kaimur Wildlife Sanctuary in these hills shelters Indian leopard, wolf, sloth bear, and vultures; the Kaimur Hills have ancient cave paintings — some identified as pre-historic rock art; the hills form the natural boundary between the Ganga plains and the Deccan plateau edge); the Chandraprabha Waterfall (the Chandraprabha Waterfall — in the Kaimur Hills near Chainpur — is one of Bihar's most scenic waterfalls; the falls cascade through the forested hills; the waterfall is accessible from Bhabua/Kaimur); the Karamnasa River (the Karamnasa — meaning "destroyer of good deeds" — forms the UP-Bihar border; it is considered inauspicious for bathing in Hindu tradition; the Karamnasa flows from the Vindhyas through Kaimur to the Ganga); the Mundeshwari Temple (the Mundeshwari Temple in Kaimur district — one of India's oldest continuously active temples, possibly from the 4th century CE — is a circular Shaiva temple with unique shikhara design)), and a city of Kaimur-Hills-Vindhya and Chandraprabha-Waterfall and Mundeshwari-Temple-4th-century — is Bihar's most Bhabua-Kaimur-Hills and Mundeshwari-ancient-temple Bhabua. From birthday parties in Bhabua to celebration cakes — RedHeart covers all areas: Bhabua city, Mohania, Kudra, Ramgarh (Kaimur), Chainpur, Bhagwanpur (Kaimur).</p>
<p>Our Bhabua cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhabua (Kaimur), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhabua city, Mohania, Kudra, Ramgarh (Kaimur), Chainpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhabua?", answer: "Yes, same-day cake delivery is available across Bhabua city, Mohania, Kudra, Ramgarh (Kaimur), and Chainpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bhabua?", answer: "Yes, all flavours are available in eggless variants for Bhabua delivery." },
      { question: "Do you deliver midnight cakes in Bhabua?", answer: "Yes, midnight birthday cake delivery is available across Bhabua city zones." }
    ]
  },

  "aurangabad-bihar": {
    cityName: "Aurangabad",
    metaTitle: "Cake Delivery in Aurangabad Bihar | Dev Sun Temple Sone River Nawada Adjacent | RedHeart",
    metaDescription: "Order cakes online in Aurangabad Bihar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Aurangabad Bihar",
    metaKeyword: "cake delivery aurangabad bihar, order cake online aurangabad bihar, birthday cake aurangabad, custom cake aurangabad bihar, same day cake delivery Aurangabad Bihar Dev Sun Temple Sone River Nawada Chhath Puja",
    footerContent: `
<h2>Cake Delivery in Aurangabad (Bihar) — Dev Sun Temple (Chhath Puja's Sacred Centre), Sone River, and South Bihar</h2>
<p>Aurangabad — the district headquarters of Aurangabad district in Bihar (south Bihar; Sone River; JH border), famous for the ancient Dev Sun Temple — one of Bihar's most important Chhath Puja centres (the Dev Sun Temple (the Dev Sun Temple (Deo Temple or Dev Surya Mandir) — in Dev village, Aurangabad district — is one of India's most ancient and famous Sun temples; the temple is believed to be over 1,000 years old; the deity is Surya (Sun God) in a unique orientation — the idol faces west rather than east, unlike most Sun temples; the Dev temple draws lakhs of pilgrims for Chhath Puja — Bihar's most important festival; during Chhath, devotees stand in water at sunrise and sunset to offer Arghya (offering) to the Sun; the Dev Surya temple's Chhath Puja celebration is one of Bihar's most attended religious events; the temple's architectural style is different from other North Indian temples); the Sone River (the Sone flows along Aurangabad's western border; the Sone provides irrigation through the Sone canal system to south Bihar's agricultural fields); the Barun and Kutumba Towns (Aurangabad district has several important market towns: Barun, Kutumba, Obra, Daudnagar — all connected through the Aurangabad-JH highway)), and a city of Dev-Sun-Temple-Chhath-Puja-west-facing and Sone-River-south-Bihar — is Bihar's most Aurangabad-Dev-Sun-Temple and Chhath-Puja Aurangabad (Bihar). From birthday parties in Aurangabad (Bihar) to celebration cakes — RedHeart covers all areas: Aurangabad city, Daudnagar, Rafiganj, Obra, Barun, Kutumba.</p>
<p>Our Aurangabad (Bihar) cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aurangabad, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aurangabad city, Daudnagar, Rafiganj, Obra, Barun, Kutumba</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Aurangabad Bihar?", answer: "Yes, same-day cake delivery is available across Aurangabad city, Daudnagar, Rafiganj, and Obra for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Aurangabad Bihar?", answer: "Yes, all flavours are available in eggless variants for Aurangabad delivery." },
      { question: "Do you deliver midnight cakes in Aurangabad Bihar?", answer: "Yes, midnight birthday cake delivery is available across Aurangabad city zones." }
    ]
  },

  "bhadohi": {
    cityName: "Bhadohi",
    metaTitle: "Cake Delivery in Bhadohi | UP Carpet Capital India GI Handknotted Mirzapur Varanasi | RedHeart",
    metaDescription: "Order cakes online in Bhadohi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bhadohi",
    metaKeyword: "cake delivery bhadohi, order cake online bhadohi, birthday cake bhadohi, custom cake bhadohi, same day cake delivery Bhadohi Sant Ravidas Nagar UP carpet capital India handknotted GI Varanasi adjacent Ganga",
    footerContent: `
<h2>Cake Delivery in Bhadohi — India's Carpet Capital, GI Handknotted Carpets, and Sant Ravidas Nagar</h2>
<p>Bhadohi — the district headquarters of Sant Ravidas Nagar (Bhadohi) district in Uttar Pradesh (eastern UP; Ganga River; Varanasi-adjacent), India's most important handknotted carpet manufacturing district (the Bhadohi Carpet Industry (the Bhadohi-Mirzapur carpet cluster is the world's second-largest carpet-weaving cluster after the Indo-Iranian tradition; Bhadohi is the hub of India's handknotted wool carpet industry; the Bhadohi-Mirzapur carpets are GI-protected; over 2.5 million artisans are engaged in carpet weaving in the region; India's carpet exports (worth over ₹10,000 crore annually) are dominated by the Bhadohi cluster; the carpet designs include Persian, Mughal, Tibetan, and contemporary styles; the Bhadohi Carpet Expo is a major industry event; the carpets are exported to USA, Germany, and the Middle East); the Sant Ravidas Connection (the district was renamed Sant Ravidas Nagar in 1997 in honour of Sant Ravidas (c.1450-1520 CE) — the great Bhakti saint, poet, and social reformer from Varanasi; Sant Ravidas belonged to the chamar community and his devotional poetry challenged caste discrimination; his Dohas are part of the Guru Granth Sahib); the Ganga River (the Ganga flows along Bhadohi's eastern boundary; several ghats serve religious purposes)), and a city of India-Carpet-Capital-GI-handknotted and Sant-Ravidas-Bhakti-poet — is UP's most Bhadohi-Carpet-Capital and Sant-Ravidas Bhadohi. From birthday parties in Bhadohi to celebration cakes — RedHeart covers all areas: Bhadohi city (Gyanpur), Suriyawan, Aurai, Gopiganj, Digh.</p>
<p>Our Bhadohi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhadohi (Sant Ravidas Nagar), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhadohi city, Suriyawan, Aurai, Gopiganj, Digh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhadohi?", answer: "Yes, same-day cake delivery is available across Bhadohi city, Suriyawan, Aurai, Gopiganj, and Digh for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bhadohi?", answer: "Yes, all flavours are available in eggless variants for Bhadohi delivery." },
      { question: "Do you deliver midnight cakes in Bhadohi?", answer: "Yes, midnight birthday cake delivery is available across Bhadohi city zones." }
    ]
  },

  "ambedkar-nagar": {
    cityName: "Ambedkar Nagar",
    metaTitle: "Cake Delivery in Ambedkar Nagar | UP Akbarpur Ghaghra Tanda Textile Faizabad Adjacent | RedHeart",
    metaDescription: "Order cakes online in Ambedkar Nagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ambedkar Nagar",
    metaKeyword: "cake delivery ambedkar nagar, order cake online ambedkar nagar, birthday cake ambedkar nagar, custom cake ambedkar nagar, same day cake delivery Ambedkar Nagar Akbarpur UP Ghaghra Tanda handloom Faizabad",
    footerContent: `
<h2>Cake Delivery in Ambedkar Nagar — Tanda Handloom Industry, Ghaghra River, and Eastern UP</h2>
<p>Ambedkar Nagar — the district headquarters of Ambedkar Nagar district in Uttar Pradesh (eastern UP; Ghaghra River; Faizabad-adjacent; carved from Faizabad in 1995), a district named after Dr. B.R. Ambedkar with a notable textile tradition (the Tanda Handloom Industry (the town of Tanda in Ambedkar Nagar district is one of eastern UP's most important handloom weaving centres; the Tanda weavers produce a variety of cotton and synthetic sarees; the Tanda handloom cluster employs thousands of Muslim weaver families (Ansari community); the traditional "Tanda sarees" are traded across UP and Bihar; the Tanda weaving tradition dates back several generations; powerlooms have largely replaced handlooms but traditional weaving continues); the Ghaghra River (the Ghaghra (Saryu) — one of the Ganga's major tributaries — flows along the northern boundary of Ambedkar Nagar; the Ghaghra creates a floodplain that supports paddy, wheat, and sugarcane cultivation); the Dr. B.R. Ambedkar Legacy (the district was named after Dr. Bhimrao Ramji Ambedkar (1891-1956) — the father of India's Constitution, the chairman of the Drafting Committee, and the pioneer of Dalit rights; naming the district after Ambedkar reflects the large Dalit population in eastern UP; the Ambedkar Nagar area has significant communities of scheduled castes)), and a city of Tanda-handloom-weaving and Ghaghra-River and Ambedkar-legacy-Dalit-rights — is UP's most Ambedkar-Nagar-Tanda-handloom and Ghaghra-River Ambedkar Nagar. From birthday parties in Ambedkar Nagar to celebration cakes — RedHeart covers all areas: Akbarpur (HQ), Tanda, Jalalpur, Bhiyaon, Allapur, Katehari.</p>
<p>Our Ambedkar Nagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambedkar Nagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Akbarpur, Tanda, Jalalpur, Bhiyaon, Allapur, Katehari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ambedkar Nagar?", answer: "Yes, same-day cake delivery is available across Akbarpur, Tanda, Jalalpur, and Bhiyaon for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ambedkar Nagar?", answer: "Yes, all flavours are available in eggless variants for Ambedkar Nagar delivery." },
      { question: "Do you deliver midnight cakes in Ambedkar Nagar?", answer: "Yes, midnight birthday cake delivery is available across Ambedkar Nagar city zones." }
    ]
  },

  "amethi": {
    cityName: "Amethi",
    metaTitle: "Cake Delivery in Amethi | UP Gandhi Political Heartland Gauriganj Sai River | RedHeart",
    metaDescription: "Order cakes online in Amethi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Amethi",
    metaKeyword: "cake delivery amethi, order cake online amethi, birthday cake amethi, custom cake amethi, same day cake delivery Amethi UP Gandhi family political Gauriganj Sai River Sultanpur adjacent Lucknow",
    footerContent: `
<h2>Cake Delivery in Amethi — India's Most Famous Political Constituency, Sai River, and Gauriganj</h2>
<p>Amethi — the district headquarters of Amethi district in Uttar Pradesh (central UP; Sai River; carved from Sultanpur in 2010), one of India's most politically significant constituencies — the Gandhi family stronghold (the Amethi Constituency (the Amethi Lok Sabha constituency — historically a stronghold of the Indian National Congress and the Gandhi family; Rajiv Gandhi represented Amethi (1981-1991); Sonia Gandhi (1999-2004); Rahul Gandhi (2004-2019); Amethi became a national focus with the Congress-BJP rivalry; in 2019, Smriti Irani (BJP) defeated Rahul Gandhi in a landmark upset; the Amethi constituency is synonymous with the most dramatic contests in Indian electoral history; Indira Gandhi Raibareli and Amethi Gandhi family connections have made this area a political pilgrimage zone); the Sai River (the Sai — a tributary of the Gomti — flows through Amethi and Sultanpur districts; the Sai River valley has agricultural land producing paddy and wheat; the Sai is known in Ramayana traditions as a river in the Kosala kingdom of Ram); the IIDL Industrial Estate (the Indira Gandhi Industrial Development Limited (IIDL) estate in Amethi has several light industries; Amethi's industrial base includes food processing and small-scale manufacturing); the Gauriganj Town (Gauriganj is the main market town and administrative centre of Amethi district)), and a city of Gandhi-family-Amethi-Lok-Sabha-political-heartland and Sai-River-Kosala — is UP's most Amethi-Gandhi-political and Sai-River Amethi. From birthday parties in Amethi to celebration cakes — RedHeart covers all areas: Gauriganj (HQ), Amethi, Salon, Jagdishpur (Amethi), Musafirkhana, Bhadar.</p>
<p>Our Amethi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amethi, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gauriganj, Amethi, Salon, Jagdishpur (Amethi), Musafirkhana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Amethi?", answer: "Yes, same-day cake delivery is available across Gauriganj, Amethi, Salon, and Jagdishpur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Amethi?", answer: "Yes, all flavours are available in eggless variants for Amethi delivery." },
      { question: "Do you deliver midnight cakes in Amethi?", answer: "Yes, midnight birthday cake delivery is available across Amethi city zones." }
    ]
  },

  "sultanpur": {
    cityName: "Sultanpur",
    metaTitle: "Cake Delivery in Sultanpur | UP Gomti River Kumarpur Mandir Ayodhya Adjacent | RedHeart",
    metaDescription: "Order cakes online in Sultanpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sultanpur",
    metaKeyword: "cake delivery sultanpur, order cake online sultanpur, birthday cake sultanpur, custom cake sultanpur, same day cake delivery Sultanpur UP Gomti River Ayodhya adjacent Pratishthanpur Kali Ram temple eastern UP",
    footerContent: `
<h2>Cake Delivery in Sultanpur — Gomti River, Ayodhya-Adjacent, and Eastern Awadh Cultural Zone</h2>
<p>Sultanpur — the district headquarters of Sultanpur district in Uttar Pradesh (central-east UP; Gomti River; Ayodhya-adjacent), a historic city in the heart of the Awadh region (the Gomti River (the Gomti — rising in Pilibhit and flowing through Lucknow, Sultanpur, and Jaunpur to join the Ganga near Varanasi — is the lifeline of Sultanpur; the Gomti ghats in Sultanpur are used for religious ceremonies; the Awadh region that Sultanpur is part of is defined by the Gomti-Saryu river system; the Gomti floods seasonally and deposits fertile silt); the Ayodhya Proximity (Sultanpur district is close to Ayodhya — the sacred birthplace of Lord Ram and a Char Dham pilgrimage site; the Ram Janambhoomi Mandir (consecrated January 22, 2024) has boosted the entire Awadh-eastern-UP tourism belt; the Sultanpur-Ayodhya highway connects the two cities); the Awadh Heritage (Sultanpur was part of the princely state of Awadh (Oudh) — the Nawabs of Awadh controlled this territory before annexation by the British in 1856; the Awadhi cultural traditions of music, cuisine, and art are strong here; the Sultanpur area has several small but ancient temples and mosques from the Awadhi period); the Agricultural Economy (Sultanpur produces paddy, wheat, and sugarcane; the Gomti command area supports irrigation)), and a city of Gomti-River-Awadh and Ayodhya-adjacent and eastern-Awadh-cultural — is UP's most Sultanpur-Gomti-Awadh and Ayodhya-proximity Sultanpur. From birthday parties in Sultanpur to celebration cakes — RedHeart covers all areas: Sultanpur city, Amethi (Sultanpur), Lambhua, Kadipur, Bhadaura, Musafirkhana.</p>
<p>Our Sultanpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sultanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sultanpur city, Lambhua, Kadipur, Bhadaura, Musafirkhana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sultanpur?", answer: "Yes, same-day cake delivery is available across Sultanpur city, Lambhua, Kadipur, and Bhadaura for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sultanpur?", answer: "Yes, all flavours are available in eggless variants for Sultanpur delivery." },
      { question: "Do you deliver midnight cakes in Sultanpur?", answer: "Yes, midnight birthday cake delivery is available across Sultanpur city zones." }
    ]
  },

  "fatehpur": {
    cityName: "Fatehpur",
    metaTitle: "Cake Delivery in Fatehpur | UP Ganga Yamuna Doab Khaga Bindki Allahabad Adjacent | RedHeart",
    metaDescription: "Order cakes online in Fatehpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fatehpur",
    metaKeyword: "cake delivery fatehpur, order cake online fatehpur, birthday cake fatehpur, custom cake fatehpur, same day cake delivery Fatehpur UP Ganga Yamuna Doab Khaga Bindki Prayagraj adjacent glass industry",
    footerContent: `
<h2>Cake Delivery in Fatehpur — Ganga-Yamuna Doab, Glass Industry Hub, and Prayagraj-Adjacent</h2>
<p>Fatehpur — the district headquarters of Fatehpur district in Uttar Pradesh (central UP; Ganga-Yamuna Doab; Prayagraj-adjacent), a district in the fertile Doab between India's two holiest rivers (the Ganga-Yamuna Doab (the Doab — meaning "land of two rivers" — between the Ganga and Yamuna is one of India's most fertile agricultural zones; Fatehpur district lies squarely in this Doab; the district produces wheat, mustard, paddy, and pulses; the Ganga flows along Fatehpur's northern boundary; the Yamuna forms part of the western boundary; the sacred Prayagraj (Triveni Sangam — confluence of Ganga, Yamuna, Saraswati) is nearby); the Glass Industry (Fatehpur town and nearby Khaga have a glass manufacturing industry; the glass bangles and glass products of this belt have a traditional market; Fatehpur is known for its glass and lac industries at a local level); the Bindki and Khaga Towns (Bindki and Khaga are important market towns in Fatehpur district; the Bindki area has historical mentions from the Mughal period; the Khaga sugar mill was an important establishment); the Prayagraj Connection (Fatehpur borders Prayagraj — home of the Maha Kumbh Mela; pilgrims passing through Fatehpur on the way to the Sangam use Fatehpur as a transit point)), and a city of Ganga-Yamuna-Doab-fertile and Prayagraj-adjacent-Sangam — is UP's most Fatehpur-Doab and Prayagraj-adjacent Fatehpur. From birthday parties in Fatehpur to celebration cakes — RedHeart covers all areas: Fatehpur city, Bindki, Khaga, Husainganj, Amauli, Deomai.</p>
<p>Our Fatehpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehpur city, Bindki, Khaga, Husainganj, Amauli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fatehpur?", answer: "Yes, same-day cake delivery is available across Fatehpur city, Bindki, Khaga, and Husainganj for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Fatehpur?", answer: "Yes, all flavours are available in eggless variants for Fatehpur delivery." },
      { question: "Do you deliver midnight cakes in Fatehpur?", answer: "Yes, midnight birthday cake delivery is available across Fatehpur city zones." }
    ]
  },

  "kaushambi": {
    cityName: "Kaushambi",
    metaTitle: "Cake Delivery in Kaushambi | UP Ancient Vatsa Kingdom Buddha Prayagraj Yamuna | RedHeart",
    metaDescription: "Order cakes online in Kaushambi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kaushambi",
    metaKeyword: "cake delivery kaushambi, order cake online kaushambi, birthday cake kaushambi, custom cake kaushambi, same day cake delivery Kaushambi UP ancient Vatsa Kingdom Buddha Yamuna Ganga Prayagraj Manjhanpur",
    footerContent: `
<h2>Cake Delivery in Kaushambi — Ancient Vatsa Kingdom Capital, Buddhist Heritage, and Yamuna River</h2>
<p>Kaushambi — the district headquarters of Kaushambi district in Uttar Pradesh (central UP; Yamuna River; Prayagraj-adjacent; carved from Allahabad in 1994), home to the ancient ruins of Kausambi — one of India's greatest archaeological sites (the Ancient Kausambi / Vatsa Kingdom (Kausambi (modern Kosam village in Kaushambi district) was the capital of the Vatsa Mahajanapada — one of the 16 great kingdoms of ancient India (6th-4th century BCE); Kausambi was a major centre of trade, Buddhism, and Jainism; the Buddha is said to have visited Kausambi and preached his Ghositarama Monastery here; the ruins of Kausambi contain the ancient city walls (still partially standing), the Ashoka pillar, palace remains, and monastery ruins; the Prabha Vatsa / Ashoka Pillar (one of Emperor Ashoka's pillars, now in Prayagraj) came from Kausambi; the Kausambi ruins are a protected ASI site and an important archaeological site that has revealed Mauryan, Shunga, and Kushan-era artefacts); the Yamuna River (the Yamuna flows through Kaushambi district; the Kaushambi-Prayagraj section of the Yamuna is close to the sacred Triveni Sangam); the Manjhanpur (the district HQ Manjhanpur is a market town; Sirathu is another important town in Kaushambi)), and a city of Ancient-Kausambi-Vatsa-Kingdom-Buddha and Ashoka-Pillar — is UP's most Kaushambi-ancient-Vatsa-Kingdom and Buddha-Ghositarama Kaushambi. From birthday parties in Kaushambi to celebration cakes — RedHeart covers all areas: Manjhanpur (HQ), Sirathu, Chail, Saini, Kaushambi (Kosam), Purwa.</p>
<p>Our Kaushambi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaushambi, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Manjhanpur, Sirathu, Chail, Saini, Kaushambi (Kosam)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kaushambi?", answer: "Yes, same-day cake delivery is available across Manjhanpur, Sirathu, Chail, and Saini for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kaushambi?", answer: "Yes, all flavours are available in eggless variants for Kaushambi delivery." },
      { question: "Do you deliver midnight cakes in Kaushambi?", answer: "Yes, midnight birthday cake delivery is available across Kaushambi city zones." }
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
