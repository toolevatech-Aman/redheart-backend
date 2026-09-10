// Cakes Batch 31 — 15 cities:
// Odisha: Puri (CRITICAL - Jagannath Temple!), Khordha
// Uttarakhand: Nainital, Almora, Pithoragarh, Joshimath (Chamoli), Uttarkashi
// Chhattisgarh: Bilaspur CG [slug: bilaspur-cg], Korba, Jagdalpur
// West Bengal: Darjeeling, Malda, Purulia
// Maharashtra: Alibaug (Raigad)
// Himachal Pradesh: Chamba

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "puri": {
    cityName: "Puri",
    metaTitle: "Cake Delivery in Puri | Jagannath Temple Rath Yatra Odisha | RedHeart",
    metaDescription: "Order cakes online in Puri. Same-day delivery across Puri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Puri",
    metaKeyword: "cake delivery puri, order cake online puri, birthday cake puri, custom cake puri, same day cake delivery puri Jagannath temple Rath Yatra chariot festival sea beach Odisha pilgrimage Mahaprasad sacred food heritage site",
    footerContent: `
<h2>Cake Delivery in Puri — Jagannath Temple's Sacred Chariot, Rath Yatra's World's Largest Religious Procession, and Odisha's Holiest City</h2>
<p>Puri — the headquarters of Puri district in Odisha, one of India's four dhams (sacred pilgrimage quarters — Char Dham) and the site of the world's greatest annual religious procession (the Jagannath Temple at Puri — dedicated to Lord Jagannath (a form of Vishnu or Krishna) — is one of India's most sacred and unique temples; the temple, built in the 12th century CE by Ganga dynasty king Anantavarman Chodaganga Deva, is an extraordinary example of Kalinga temple architecture; the temple's curvilinear shikhara (spire) rises 65 metres; the Jagannath Temple is famous for its unique culinary tradition of the Mahaprasad — cooked daily in fifty-six varieties (Chhappan Bhoga) in the world's largest kitchen (reportedly feeding 10,000-100,000 people daily); the Rath Yatra (Chariot Festival) of Puri — held annually in June-July — is the world's largest religious procession; the three towering wooden chariots (Nandighosa for Jagannath, Taladhwaja for Balabhadra, Darpadalana for Subhadra) are pulled by hundreds of thousands of devotees through the 3 km Grand Road; the word "Juggernaut" (an unstoppable force) entered the English language through colonial accounts of the Rath Yatra; the Puri Sea Beach is Odisha's most famous beach; the Chilika Lake (Asia's largest brackish water lagoon) is accessible from Puri; the famous Konark Sun Temple (UNESCO World Heritage Site) is 35 km from Puri), and a city of the most sacred Char Dham — is India's pilgrim crown jewel. From birthday parties near the Grand Road to celebration cakes at the hotel zone, from Rath Yatra festival cakes to anniversary surprises by the sea — RedHeart covers all Puri zones: Puri town, Konark Road, Bhubaneswar Road, Pipli, Nimapara, Brahmagiri, Kakatpur, Chilika.</p>
<p>Our Puri cake range: Chocolate, Black Forest, Red Velvet, Coconut (Odisha coastal!), Mango (Odisha Langra!), Butterscotch, Photo Cakes, Fondant Jagannath Rath Yatra / Puri Sea Beach / Konark Sun Temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puri, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puri town, Konark Road, Pipli, Nimapara, Brahmagiri, Kakatpur, Chilika</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Jagannath Rath Yatra Fondant, Konark Sun Temple Fondant, Chocolate, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Puri?", answer: "Yes, same-day cake delivery is available across all Puri areas — Puri town, Konark Road, Pipli, Nimapara, and Brahmagiri — for orders placed before 3 PM." },
      { question: "Do you have Jagannath Rath Yatra / Puri Sea Beach-themed cakes?", answer: "Yes! The Jagannath Rath Yatra (the world's largest religious procession — massive wooden chariots pulled through Puri's Grand Road by hundreds of thousands of devotees — which gave English the word 'Juggernaut') and the Puri Beach/Konark Sun Temple inspire our most spiritually grand Puri fondant cakes." },
      { question: "Are eggless cakes available in Puri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Puri delivery." }
    ]
  },

  "khordha": {
    cityName: "Khordha",
    metaTitle: "Cake Delivery in Khordha | Bhubaneswar Adjacent Odisha | RedHeart",
    metaDescription: "Order cakes online in Khordha. Same-day delivery across Khordha. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Khordha",
    metaKeyword: "cake delivery khordha, order cake online khordha, birthday cake khordha, custom cake khordha, same day cake delivery khordha Bhubaneswar adjacent Odisha Khurda rail junction CRPF Dhauli Shanti Stupa Kalinga War Prachi valley",
    footerContent: `
<h2>Cake Delivery in Khordha — Odisha's Administrative Core, Dhauli Shanti Stupa's Peace Legacy, and Bhubaneswar's Twin District</h2>
<p>Khordha — the headquarters of Khordha district in Odisha, the district within which the state capital Bhubaneswar is located and home to significant historical sites (Khordha district includes the Bhubaneswar urban area — making it the most populous and administratively important district in Odisha; the historic Khordha town was the seat of the Khordha (Gajapati) Rajgurus — the last Odisha kings who resisted the British (the Paika Rebellion of 1817 — the first organized armed uprising against the East India Company in Odisha, led by Bakshi Jagabandhu and the Paika warriors — has been recognized as one of India's first independence uprisings, predating the 1857 rebellion by 40 years); the Khordha Fort ruins are associated with this history; Dhauli (on the banks of the Daya River, 8 km from Bhubaneswar, in Khordha district) is one of India's most historically significant sites: it is where the Battle of Kalinga (circa 262 BCE) was fought between the Mauryan Emperor Ashoka and the Kalinga kingdom; the blood of 100,000 Kalinga soldiers killed in the battle transformed Ashoka into a Buddhist and a changed ruler; the Dhauli Shanti Stupa (Peace Pagoda) — built by Japanese Buddhist groups in 1972 — overlooks the Daya River battle site; Ashokan rock edicts at Dhauli are some of India's earliest written records; the Khordha district has the Prachi Valley — a stretch along the Prachi River with numerous undiscovered Odisha-Kalinga architectural temples), and a district of transformation history and Odisha's modern capital life — is a city adjacent to Odisha's heart. From birthday parties near Bhubaneswar city limits to corporate cakes in Khordha town, from anniversary surprises near Dhauli to Odia festival celebration cakes — RedHeart covers all Khordha zones: Khordha town, Bhubaneswar (main city), Jatni, Banapur, Tangi, Chilika Road, Dhauli, Begunia, Bolagarh.</p>
<p>Our Khordha cake range: Chocolate, Black Forest, Red Velvet, Coconut, Mango, Butterscotch, Photo Cakes, Fondant Dhauli Shanti Stupa / Kalinga Battle / Paika Rebellion-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khordha, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khordha town, Jatni, Banapur, Tangi, Dhauli, Begunia, Bolagarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dhauli Fondant, Paika Rebellion Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Khordha?", answer: "Yes, same-day cake delivery is available across all Khordha areas — Khordha town, Jatni, Banapur, Tangi, and Dhauli — for orders placed before 3 PM." },
      { question: "Do you have Dhauli Shanti Stupa / Kalinga War-themed cakes in Khordha?", answer: "Yes! The Dhauli Shanti Stupa — where Ashoka's Battle of Kalinga transformed the Emperor into a Buddhist (one of history's greatest spiritual transformations) — and the 1817 Paika Rebellion (Odisha's first armed uprising against the British, before 1857) inspire our most historically profound Khordha fondant cakes." },
      { question: "Are eggless cakes available in Khordha?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Khordha delivery." }
    ]
  },

  "nainital": {
    cityName: "Nainital",
    metaTitle: "Cake Delivery in Nainital | Lake City Kumaon Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Nainital. Same-day delivery across Nainital. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nainital",
    metaKeyword: "cake delivery nainital, order cake online nainital, birthday cake nainital, custom cake nainital, same day cake delivery nainital lake Naini Lake Naina Devi boat Corbett park apple Kumaon hills Uttarakhand hill station",
    footerContent: `
<h2>Cake Delivery in Nainital — Naini Lake's Eye-Shaped Wonder, Jim Corbett's Tiger Legacy, and Uttarakhand's Premier Hill Station</h2>
<p>Nainital — the headquarters of Nainital district in Uttarakhand, India's most iconic and beloved Himalayan hill station (the Naini Lake — the heart of Nainital — is a natural freshwater lake in an oval depression in the lower Himalayan range; legend holds that it is one of the Shakti Peethas — where Sati's eye (Nayana) fell when Vishnu used his Sudarshana Chakra to dismember her body; the Naina Devi temple at the lakeside honours this; the Nainital boat lake offers picturesque boating against a backdrop of forested hills; Snow View Point, Tiffin Top, and China Peak (Naina Peak, 2,611 metres) are the signature viewpoints; the Mall Road along the lakeside is Nainital's most vibrant promenade; Jim Corbett National Park — India's oldest national park (established 1936) and the birthplace of Project Tiger (1973) — is accessible from Nainital (Ramnagar is the park headquarters, 65 km from Nainital); Corbett is India's most famous tiger reserve, named after the legendary hunter-turned-conservationist Jim Corbett who wrote the Kumaon classics "Man-Eaters of Kumaon" and "The Man-Eating Leopard of Rudraprayag"; the Kumaon region is famous for apple cultivation — Mukteshwar apples are particularly prized; Nainital also produces peaches, plums, and apricots; Nainital's British-era buildings (the Governor's house "Raj Bhavan," the All India Radio tower, St. John's Church) reflect its colonial heritage as a summer capital), and a city of extraordinary natural beauty — is Uttarakhand's most celebrated jewel. From birthday parties on Mall Road to celebration cakes at the resort hotels, from anniversary surprises near Naini Lake to student cakes at Nainital's prestigious schools — RedHeart covers all Nainital zones: Nainital town, Bhowali, Bhimtal, Sat Tal, Mukteshwar, Ramnagar, Ranikhet Road, Haldwani Road.</p>
<p>Our Nainital cake range: Chocolate, Black Forest, Red Velvet, Apple (Mukteshwar!), Peach, Strawberry, Butterscotch, Photo Cakes, Fondant Naini Lake / Jim Corbett Tiger / Nainital Boat-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nainital, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">2,084 metres (lake level)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nainital town, Bhowali, Bhimtal, Sat Tal, Mukteshwar, Ramnagar, Ranikhet Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mukteshwar Apple, Peach, Naini Lake Fondant, Jim Corbett Fondant, Chocolate, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nainital?", answer: "Yes, same-day cake delivery is available across all Nainital areas — Nainital town, Bhowali, Bhimtal, Sat Tal, Mukteshwar, and Ramnagar — for orders placed before 3 PM." },
      { question: "Do you have Naini Lake and Jim Corbett-themed cakes in Nainital?", answer: "Yes! The Naini Lake (Shakti Peetha where Sati's eye fell, the serene oval lake at 2,084 metres with Mall Road boating) and Jim Corbett National Park (India's oldest park, birthplace of Project Tiger) inspire our most beautiful Nainital fondant cakes." },
      { question: "Are eggless cakes available in Nainital?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple, Peach, Strawberry — are available in eggless variants for Nainital delivery." }
    ]
  },

  "almora": {
    cityName: "Almora",
    metaTitle: "Cake Delivery in Almora | Kumaon Culture Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Almora. Same-day delivery across Almora. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Almora",
    metaKeyword: "cake delivery almora, order cake online almora, birthday cake almora, custom cake almora, same day cake delivery almora Kumaon Chitai Golu Devta Kasar Devi ashram apple bal mithai Swami Vivekananda horse shoe Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Almora — Chitai Golu Devta Temple, Kasar Devi's Cosmic Energy, and Kumaon's Cultural Capital</h2>
<p>Almora — a hill station and the headquarters of Almora district in Uttarakhand, considered the cultural capital of the Kumaon Himalayan region (the Chitai Golu Devta Temple near Almora is one of Uttarakhand's most fascinating folk deities — Golu Devta (the divine horseman) is worshipped as the God of Justice; the temple is unique for the thousands of brass bells (ghantis) and letters of petition (chitthi) that devotees tie at the temple premises seeking Golu Devta's divine intervention in justice matters; the temple looks like it's covered in bells; the Kasar Devi Temple (6 km from Almora) — dedicated to Goddess Kasar Devi — is situated at one of the Van Allen radiation belts (a special electromagnetic zone) and has attracted seekers, thinkers, and spiritual practitioners for centuries; Swami Vivekananda meditated here (1890) before his famous Chicago Parliament of Religions speech; the beatnik writers (Allen Ginsberg, Timothy Leary) visited in the 1960s, and Kasar Devi became the "Crank's Ridge" of Western spiritual seekers; the view from Kasar Devi Ridge takes in the Himalayan range from Nanda Devi to Trishul; Almora is famous for its traditional Bal Mithai (a dark fudge-like sweet made from khoya, rolled in white sugar balls) — a local specialty of Almora and Kumaon; the Kumaon Regimental Centre is at Almora; the Bright End Corner viewpoint at Almora offers Himalayan panoramas; the ancient Nanda Devi Temple in Almora town is a significant Kumaon shrine), and a city of folk justice and cosmic energy — is the Kumaon Himalaya's cultural soul. From birthday parties on the Mall Road to celebration cakes near Kasar Devi, from anniversary surprises with Himalayan views to student cakes — RedHeart covers all Almora zones: Almora town, Ranikhet Road, Bhikiyasain, Dwarahat, Bageshwar Road, Bageswar, Someshwar, Danya.</p>
<p>Our Almora cake range: Chocolate, Black Forest, Red Velvet, Apple (Kumaon!), Bal Mithai inspired, Butterscotch, Photo Cakes, Fondant Chitai Golu Devta / Kasar Devi Cosmic / Nanda Devi Himalaya-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Almora, Uttarakhand (Kumaon)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Almora town, Ranikhet Road, Bhikiyasain, Dwarahat, Someshwar, Danya, Kasar Devi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kumaon Apple, Chocolate, Chitai Golu Devta Fondant, Kasar Devi Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Almora?", answer: "Yes, same-day cake delivery is available across all Almora areas — Almora town, Ranikhet Road, Bhikiyasain, Dwarahat, Kasar Devi, and Someshwar — for orders placed before 3 PM." },
      { question: "Do you have Chitai Golu Devta and Kasar Devi Cosmic-themed cakes in Almora?", answer: "Yes! Almora's Chitai Golu Devta Temple (the bell-covered 'God of Justice' folk deity — thousands of brass bells and petition letters from justice-seekers) and Kasar Devi Ridge (on the Van Allen belt, where Swami Vivekananda meditated before Chicago 1893) inspire our most spiritually powerful Almora fondant cakes." },
      { question: "Are eggless cakes available in Almora?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple — are available in eggless variants for Almora delivery." }
    ]
  },

  "pithoragarh": {
    cityName: "Pithoragarh",
    metaTitle: "Cake Delivery in Pithoragarh | Little Kashmir Nepal Border Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Pithoragarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pithoragarh",
    metaKeyword: "cake delivery pithoragarh, order cake online pithoragarh, birthday cake pithoragarh, custom cake pithoragarh, same day cake delivery pithoragarh Little Kashmir Nepal China border Kali river Adi Kailash Milam glacier Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Pithoragarh — Little Kashmir's Himalayan Valley, Adi Kailash Pilgrimage, and Nepal-China Trijunction</h2>
<p>Pithoragarh — the headquarters of Pithoragarh district in Uttarakhand, the farthest northeastern district of Uttarakhand, bordering both Nepal and Tibet (China), and known as "Little Kashmir" for its extraordinary natural beauty (Pithoragarh town — set in a small valley (called Sorya Pata) at 1,814 metres — is surrounded by five hills creating a valley of exceptional scenic beauty; the valley's resemblance to a miniature Kashmir earned it the "Little Kashmir" appellation; Pithoragarh district is one of the most remote and scenically stunning districts in India; the Kali River forms the boundary between India and Nepal in Pithoragarh district; the famous Kailash Mansarovar Yatra (pilgrimage to Mount Kailash and Lake Mansarovar in Tibet) passes through Pithoragarh's Dharchula, Tawaghat, and the Lipulekh Pass; the Adi Kailash (Chota Kailash) and Om Parvat pilgrimage — recently opened as an alternative to the Tibet Kailash Mansarovar yatra — starts from Pithoragarh; Om Parvat (6,191 metres) has natural snowfields that form the Om symbol on its face (one of India's most photographed natural wonders); the Milam Glacier (3rd largest glacier in the Himalayan range) is accessible through the Milam Valley from Pithoragarh; the Askot Wildlife Sanctuary protects the Himalayan Black Bear and Musk Deer; Pithoragarh is also a notable transit point for traders between India and Nepal), and a district of extraordinary Himalayan frontier grandeur — is Uttarakhand's most remote and most beautiful corner. From birthday parties in Pithoragarh town to Adi Kailash pilgrimage cakes, from anniversary surprises near the Kali River to student cakes — RedHeart covers all Pithoragarh zones: Pithoragarh town, Dharchula, Munsiyari, Berinag, Gangolihat, Askot, Lohaghat, Champawat Road.</p>
<p>Our Pithoragarh cake range: Chocolate, Black Forest, Red Velvet, Apple (Little Kashmir!), Peach, Butterscotch, Photo Cakes, Fondant Om Parvat / Adi Kailash Pilgrimage / Milam Glacier-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pithoragarh ("Little Kashmir"), Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pithoragarh town, Dharchula, Munsiyari, Berinag, Gangolihat, Askot, Lohaghat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple, Chocolate, Om Parvat Fondant, Adi Kailash Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pithoragarh?", answer: "Yes, same-day cake delivery is available across all Pithoragarh areas — Pithoragarh town, Dharchula, Munsiyari, Berinag, and Gangolihat — for orders placed before 3 PM." },
      { question: "Do you have Om Parvat and Adi Kailash Pilgrimage-themed cakes in Pithoragarh?", answer: "Yes! Om Parvat (6,191 metres — where natural snowfields spontaneously form the sacred Om symbol on its face, one of India's most extraordinary natural wonders) and the Adi Kailash pilgrimage route inspire our most transcendent Pithoragarh fondant cakes." },
      { question: "Are eggless cakes available in Pithoragarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple, Peach — are available in eggless variants for Pithoragarh delivery." }
    ]
  },

  "joshimath": {
    cityName: "Joshimath",
    metaTitle: "Cake Delivery in Joshimath | Badrinath Gateway Chamoli Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Joshimath. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Joshimath",
    metaKeyword: "cake delivery joshimath chamoli, order cake online joshimath, birthday cake joshimath, custom cake joshimath, same day cake delivery joshimath Badrinath Char Dham Auli ski resort Nanda Devi Shankaracharya math Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Joshimath — Badrinath Char Dham Gateway, Auli's Himalayan Ski Resort, and Adi Shankaracharya's Math</h2>
<p>Joshimath (Jyotirmath) — a town in Chamoli district of Uttarakhand, one of the most strategically and spiritually important towns in the Indian Himalayas (Joshimath is the primary gateway to the Badrinath Dham — one of the four Char Dhams and one of the 108 Divya Desams (Vishnu temples); the Badrinath Temple at 3,133 metres (open May-November) is one of the most visited pilgrimage destinations in India; Joshimath serves as the winter seat of the Badrinath deity — the idol is ceremonially brought to the Vasudeva Temple in Joshimath during the winter months; the Adi Shankaracharya Math at Joshimath is the northern peetha of the Shankaracharya's four mathas (monastic establishments) — established by Adi Shankaracharya in the 8th century to revive Vedantic Hinduism; the Jyotirmath is one of the most significant seats of Advaita Vedanta in India; the Auli ski resort (15 km from Joshimath via ropeway) is India's finest ski resort — the Auli slopes have world-class powder snow, with the Himalayan backdrop of Nanda Devi (7,816 metres — India's highest peak — UNESCO World Heritage Site), Dunagiri, and Hathi Parbat; the Ropeway from Joshimath to Auli is one of Asia's longest cable cars; the Valley of Flowers National Park (UNESCO World Heritage Site) — famous for its July-August alpine wildflower bloom — is accessible from Joshimath via Ghangaria; the Hemkund Sahib (a sacred Sikh shrine at 4,329 metres on a glacial lake) is also reached via Joshimath; in 2023, Joshimath made international news due to significant land subsidence damaging hundreds of buildings — a geological crisis attributable to the fragile Himalayan geology and development pressures), and a city of supreme Himalayan pilgrimage and adventure — is Uttarakhand's sacred gateway. From birthday parties in Joshimath to Char Dham pilgrimage celebration cakes, from Auli ski resort cakes to anniversary surprises with Nanda Devi views — RedHeart covers all Joshimath/Chamoli zones: Joshimath town, Auli, Chamoli (Gopeshwar), Gauchar, Nandprayag, Karnaprayag, Karanprayag, Helang.</p>
<p>Our Joshimath cake range: Chocolate, Black Forest, Red Velvet, Apple, Butterscotch, Photo Cakes, Fondant Badrinath Dham / Auli Ski Resort / Valley of Flowers-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Joshimath (Chamoli), Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Joshimath town, Auli, Chamoli (Gopeshwar), Gauchar, Nandprayag, Karnaprayag</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Badrinath Dham Fondant, Auli Ski Fondant, Valley of Flowers Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Joshimath / Chamoli / Auli?", answer: "Yes, same-day cake delivery is available across all Joshimath/Chamoli areas — Joshimath town, Auli, Gopeshwar, Gauchar, Nandprayag, and Karnaprayag — for orders placed before 3 PM." },
      { question: "Do you have Badrinath Char Dham and Auli Ski Resort-themed cakes in Joshimath?", answer: "Yes! The Badrinath Dham (one of India's four Char Dhams, with the idol wintering at Joshimath) and Auli ski resort (India's finest ski slopes with Nanda Devi and Valley of Flowers in view) inspire our most spiritually and adventurously themed Joshimath fondant cakes." },
      { question: "Are eggless cakes available in Joshimath?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple — are available in eggless variants for Joshimath delivery." }
    ]
  },

  "uttarkashi": {
    cityName: "Uttarkashi",
    metaTitle: "Cake Delivery in Uttarkashi | Gangotri Yamunotri Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Uttarkashi. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Uttarkashi",
    metaKeyword: "cake delivery uttarkashi, order cake online uttarkashi, birthday cake uttarkashi, custom cake uttarkashi, same day cake delivery uttarkashi Gangotri Yamunotri Ganga source Bhagirathi Nehru Mountaineering Institute apple Uttarakhand",
    footerContent: `
<h2>Cake Delivery in Uttarkashi — Gangotri & Yamunotri Sacred Sources, Nehru Institute of Mountaineering, and Bhagirathi River's Holy Birth</h2>
<p>Uttarkashi — the headquarters of Uttarkashi district in Uttarakhand, one of India's most sacred and high-altitude districts encompassing the sources of the Ganga and Yamuna rivers (Uttarkashi district contains two of the four Char Dhams — Gangotri (the source of the Bhagirathi/Ganga) and Yamunotri (the source of the Yamuna); the Gangotri Glacier (Gomukh — "Cow's Mouth" — the actual ice-cave source of the Bhagirathi/Ganga) at 3,900 metres is one of the largest glaciers in the Himalaya; the Gangotri Temple (at the town of Gangotri, 100 km from Uttarkashi) is one of the holiest pilgrimage sites in India; the Yamunotri Temple (at the source of the Yamuna, 6,387 metres Bandarpunch Peak nearby) is similarly sacred; the Nehru Institute of Mountaineering (NIM) at Uttarkashi is India's premier mountaineering training institution — it has trained thousands of Himalayan climbers and is one of the most respected mountaineering schools in Asia; Sir Edmund Hillary took courses here; legendary mountaineers Tenzing Norgay's family members have been associated with NIM; Uttarkashi town itself is on the banks of the Bhagirathi River; the district has significant apple orchards in the Harsil and Bhatwari areas — the Harsil apple has a distinctive mild flavour at high altitude; the Dayara Bugyal (high-altitude meadow, 3,048 metres) near Uttarkashi is one of Uttarakhand's finest trekking grounds), and a city of two Char Dhams and India's mountaineering excellence — is Uttarakhand's highest district capital. From birthday parties in Uttarkashi town to Gangotri pilgrimage cakes, from NIM completion celebration cakes to anniversary surprises near the Bhagirathi — RedHeart covers all Uttarkashi zones: Uttarkashi town, Bhatwari, Gangotri Road, Dharasu, Chinyalisaur, Naugaon, Barkot, Purola.</p>
<p>Our Uttarkashi cake range: Chocolate, Black Forest, Red Velvet, Apple (Harsil!), Butterscotch, Photo Cakes, Fondant Gangotri Ganga Source / Yamunotri / NIM Mountaineering-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Uttarkashi, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Uttarkashi town, Bhatwari, Gangotri Road, Dharasu, Chinyalisaur, Barkot, Purola</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Harsil Apple, Chocolate, Gangotri Dham Fondant, NIM Mountaineering Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Uttarkashi?", answer: "Yes, same-day cake delivery is available across all Uttarkashi areas — Uttarkashi town, Bhatwari, Gangotri Road, Dharasu, and Barkot — for orders placed before 3 PM." },
      { question: "Do you have Gangotri-Yamunotri Char Dham and NIM Mountaineering-themed cakes?", answer: "Yes! The Gangotri Dham (source of the sacred Ganga from the Gomukh glacier) and Yamunotri (source of the Yamuna) — two of the four Char Dhams — and the Nehru Institute of Mountaineering (India's premier climbing school) inspire our most sacred and adventurous Uttarkashi fondant cakes." },
      { question: "Are eggless cakes available in Uttarkashi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Harsil Apple — are available in eggless variants for Uttarkashi delivery." }
    ]
  },

  "bilaspur-cg": {
    cityName: "Bilaspur",
    metaTitle: "Cake Delivery in Bilaspur CG | Legal Capital Chhattisgarh | RedHeart",
    metaDescription: "Order cakes online in Bilaspur Chhattisgarh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bilaspur CG",
    metaKeyword: "cake delivery bilaspur chhattisgarh, order cake online bilaspur CG, birthday cake bilaspur chhattisgarh, custom cake bilaspur CG, same day cake delivery bilaspur chhattisgarh High Court legal capital Sheonath Hasdeo coal SECL Ratanpur",
    footerContent: `
<h2>Cake Delivery in Bilaspur CG — Chhattisgarh's Judicial Capital, Sheonath River's Sacred Bathing, and India's Coal Corridor</h2>
<p>Bilaspur — the headquarters of Bilaspur district in Chhattisgarh, the "legal capital" and judicial city of Chhattisgarh (the Chhattisgarh High Court — the highest court of the newly formed Chhattisgarh state (2000) — is located at Bilaspur, making it Chhattisgarh's judicial capital; Bilaspur is the second largest city in Chhattisgarh (after Raipur); the city has a large legal community, medical institutions (CIMS Medical College), and engineering colleges; the South Eastern Coalfields Limited (SECL) — one of India's largest coal producing companies — has its headquarters at Bilaspur; the SECL coalfields around Bilaspur (Korba, Chirimiri, Gevra, Kusmunda) make the Bilaspur-Korba area one of India's most important coal and thermal power corridors; the Sheonath River (a tributary of the Mahanadi) flows through Bilaspur — the ghats on the Sheonath at Bilaspur are used for ritual bathing during Chhath Puja and other festivals; the ancient Ratanpur town (25 km from Bilaspur) was the former capital of the Haihaya (Kalachuri) dynasty of Chhattisgarh and has significant medieval-period temples (the Mahamaya Temple at Ratanpur is one of Chhattisgarh's most important Shakti shrines); the Bilaspur area also has the Achanakmar Tiger Reserve (accessible from Bilaspur), a significant biodiversity zone; the traditional Chhattisgarhi foods (Chila, Muthiya, Bafauri) are made in Bilaspur's local kitchens), and a city of law, coal, and river heritage — is Chhattisgarh's intellectual capital. From birthday parties near the High Court to corporate cakes at the SECL offices, from anniversary surprises near the Sheonath to student cakes — RedHeart covers all Bilaspur CG zones: Bilaspur town, Ratanpur, Takhatpur, Masturi, Seepat, Sipat, Kota, Mungeli, Lormi.</p>
<p>Our Bilaspur CG cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chhattisgarh High Court / Ratanpur Mahamaya / Sheonath River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilaspur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilaspur town, Ratanpur, Takhatpur, Masturi, Seepat, Kota, Mungeli, Lormi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, High Court Fondant, Ratanpur Mahamaya Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bilaspur Chhattisgarh?", answer: "Yes, same-day cake delivery is available across all Bilaspur CG areas — Bilaspur town, Ratanpur, Takhatpur, Masturi, and Mungeli — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bilaspur CG?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bilaspur Chhattisgarh delivery." },
      { question: "Do you deliver midnight cakes in Bilaspur Chhattisgarh?", answer: "Yes, midnight birthday cake delivery is available across Bilaspur CG's residential and judicial township zones." }
    ]
  },

  "korba": {
    cityName: "Korba",
    metaTitle: "Cake Delivery in Korba | Power Capital Chhattisgarh Coal | RedHeart",
    metaDescription: "Order cakes online in Korba. Same-day delivery across Korba. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Korba",
    metaKeyword: "cake delivery korba, order cake online korba, birthday cake korba, custom cake korba, same day cake delivery korba Chhattisgarh power capital coal NTPC SECL NALCO aluminium Hasdeo river Korba Super Thermal Power Station",
    footerContent: `
<h2>Cake Delivery in Korba — Chhattisgarh's Power Capital, India's Largest Coal Block, and the City That Lights Up India</h2>
<p>Korba — the headquarters of Korba district in Chhattisgarh, known as India's "Power Capital" or "Energy City" for its extraordinary concentration of thermal power and industrial capacity (Korba is home to one of the world's largest concentrations of coal-based thermal power plants; the NTPC Korba Super Thermal Power Station (2,600 MW) and the NTPC Korba West (840 MW) are among India's largest power units; the CSPGCL Hasdeo Thermal Power Station, the BALCO (Bharat Aluminium Company, now Vedanta) aluminium smelter (with its massive captive power plant), and the SECL (South Eastern Coalfields Limited) coal mines collectively make Korba one of India's most energy-intensive industrial cities; the Gevra Open Cast Mine near Korba is one of India's (and Asia's) largest open-cast coal mines; the Hasdeo River flows through Korba — the Hasdeo River is a major tributary of the Mahanadi; the Hasdeo Aranya (Hasdeo forests) north of Korba are among India's most ecologically contested zones (tribal communities vs. coal mining interests); the Pali Deva Baba temple at Pali (Korba) is a significant religious site; the Korba city developed as an industrial township with NTPC, BALCO, and CSPGCL worker colonies giving the city a planned township character), and a city that powers much of India's electricity grid — is Chhattisgarh's industrial engine. From birthday parties in Korba town to corporate cakes at NTPC and BALCO, from anniversary surprises near the Hasdeo River to student cakes — RedHeart covers all Korba zones: Korba town, Balco Nagar, NTPC Colony, Katghora, Pali, Dipka, Kusmunda, Gevra Road.</p>
<p>Our Korba cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant NTPC Power Tower / Korba Energy City / Hasdeo River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Korba, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Korba town, Balco Nagar, NTPC Colony, Katghora, Pali, Dipka, Kusmunda, Gevra Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, NTPC Energy City Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Korba?", answer: "Yes, same-day cake delivery is available across all Korba areas — Korba town, Balco Nagar, NTPC Colony, Katghora, Pali, and Dipka — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Korba?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Korba delivery." },
      { question: "Do you deliver midnight cakes in Korba?", answer: "Yes, midnight birthday cake delivery is available across Korba's residential colonies including NTPC, BALCO township, and Katghora zones." }
    ]
  },

  "jagdalpur": {
    cityName: "Jagdalpur",
    metaTitle: "Cake Delivery in Jagdalpur | Bastar Tribal Chhattisgarh Chitrakote | RedHeart",
    metaDescription: "Order cakes online in Jagdalpur. Same-day delivery across Jagdalpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jagdalpur",
    metaKeyword: "cake delivery jagdalpur, order cake online jagdalpur, birthday cake jagdalpur, custom cake jagdalpur, same day cake delivery jagdalpur Bastar Indravati Chitrakote waterfall Gondi Dussehra Bastar palace tribal crafts iron bell metal",
    footerContent: `
<h2>Cake Delivery in Jagdalpur — Bastar's Royal Palace, Chitrakote's 'Niagara of India', and World's Longest Gondi Dussehra Festival</h2>
<p>Jagdalpur — the headquarters of Bastar district in Chhattisgarh, the cultural and administrative capital of the Bastar region — one of India's most tribally rich and naturally endowed areas (the Bastar Dussehra — celebrated in Jagdalpur — is one of India's most unique and elaborate festivals; the Bastar Dussehra is not about Rama-Ravana but is a 75-day long tribal festival dedicated to the Mother Goddess Danteshwari (the tutelary deity of the Bastar Gondi kingdom); the festival involves elaborate rituals, the procession of a 60-foot wooden chariot (Rath) pulled through the streets, performances of traditional Gondi martial dances, and the participation of representatives from hundreds of Bastar villages; Bastar Dussehra is recognized as one of the world's longest festivals; the Chitrakote Waterfall — 40 km from Jagdalpur on the Indravati River — is India's widest waterfall and called the "Niagara of India"; during the monsoon, Chitrakote's 330-metre wide curtain of water falling 29 metres into the red gorge is one of India's most spectacular sights; the Kanger Valley National Park (near Jagdalpur) has the Kotumsar Cave (one of India's largest and deepest cave systems) and rare cave fish; the Bastar region has extraordinary tribal art: Dokra (lost-wax metal casting), Bastar iron craft (iron bell metal work), Kosal silk, and Godna (tribal tattoo art); the Dandakaranya forest of Bastar is the mythological forest where Rama, Sita, and Laxman spent their vanavasa), and a city of tribal art and waterfall wonder — is Chhattisgarh's cultural crown. From birthday parties in Jagdalpur to Bastar Dussehra celebration cakes, from Chitrakote waterfall cakes to anniversary surprises near the Indravati — RedHeart covers all Jagdalpur zones: Jagdalpur town, Chitrakote, Kanger Valley, Tokapal, Narayanpur, Kondagaon, Dantewada, Sukma.</p>
<p>Our Jagdalpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Chitrakote Waterfall / Bastar Dussehra Chariot / Bastar Tribal Art-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagdalpur, Chhattisgarh (Bastar)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagdalpur town, Chitrakote, Kanger Valley, Tokapal, Kondagaon, Narayanpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chitrakote Waterfall Fondant, Bastar Dussehra Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jagdalpur?", answer: "Yes, same-day cake delivery is available across all Jagdalpur areas — Jagdalpur town, Chitrakote, Kanger Valley, Tokapal, and Kondagaon — for orders placed before 3 PM." },
      { question: "Do you have Chitrakote Waterfall (India's Niagara) and Bastar Dussehra-themed cakes?", answer: "Yes! Chitrakote Waterfall (330 metres wide — India's widest, 'Niagara of India') and the Bastar Dussehra (world's longest festival — 75 days, with the Danteshwari Mata chariot procession through Jagdalpur) inspire our most spectacular Jagdalpur fondant cakes." },
      { question: "Are eggless cakes available in Jagdalpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jagdalpur delivery." }
    ]
  },

  "darjeeling": {
    cityName: "Darjeeling",
    metaTitle: "Cake Delivery in Darjeeling | Tea Capital Kanchenjunga West Bengal | RedHeart",
    metaDescription: "Order cakes online in Darjeeling. Same-day delivery across Darjeeling. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Darjeeling",
    metaKeyword: "cake delivery darjeeling, order cake online darjeeling, birthday cake darjeeling, custom cake darjeeling, same day cake delivery darjeeling first flush tea Kanchenjunga Toy Train UNESCO Gorkha Himalayan railways West Bengal",
    footerContent: `
<h2>Cake Delivery in Darjeeling — First Flush Tea's Global Icon, UNESCO Toy Train, and Kanchenjunga's Queen of Hills</h2>
<p>Darjeeling — the headquarters of Darjeeling district in West Bengal, the world's most famous tea destination and India's most iconic hill station (Darjeeling tea — particularly the First Flush (March-April harvest) — is considered the world's finest tea; the GI-tagged Darjeeling tea (both black and oolong types) is prized for its "muscatel" character (a wine-grape aroma) that develops during the spring harvesting and rolling process in the high-altitude gardens (most above 2,000 metres); Darjeeling tea is sold at premium prices in London, Tokyo, and New York markets; the Happy Valley Tea Estate (one of the oldest tea estates, within walking distance of Darjeeling town) is a popular attraction; the Darjeeling Himalayan Railway ("Toy Train") — a UNESCO World Heritage Site (along with Nilgiri and Kalka-Shimla railways) — is a narrow-gauge steam railway built in 1881 that winds 88 km from New Jalpaiguri (plains) to Darjeeling town (2,042 metres) in 7-8 hours; the Toy Train's engineering (with loops, zig-zags, and the famous "Batasia Loop" with war memorial) is a marvel of Victorian railway engineering; the Batasia Loop viewpoint provides the most famous Kanchenjunga panorama; the Tiger Hill sunrise (3 km from Darjeeling) offers breathtaking views of Kanchenjunga (world's 3rd highest), Everest, and Makalu on clear mornings; the Japanese Peace Pagoda, the Himalayan Mountaineering Institute (HMI — where Tenzing Norgay trained), and the Bhutia Busty Monastery are significant; Gorkhaland political movement and Gorkha cultural identity are central to Darjeeling's social landscape), and a city of tea, trains, and transcendent Himalayan views — is India's most beloved hill station. From birthday parties on Mall Road to Toy Train celebration cakes, from First Flush tea farm cakes to anniversary surprises with Kanchenjunga at dawn — RedHeart covers all Darjeeling zones: Darjeeling town, Kurseong, Mirik, Kalimpong Road, Ghum, Lebong, Tiger Hill, Pankhabari.</p>
<p>Our Darjeeling cake range: Chocolate, Black Forest, Red Velvet, Darjeeling First Flush Tea (Green Tea!), Strawberry, Butterscotch, Photo Cakes, Fondant Toy Train UNESCO / Kanchenjunga Tiger Hill / Darjeeling Tea Estate-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Darjeeling, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">2,042 metres</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Darjeeling town, Kurseong, Mirik, Ghum, Lebong, Tiger Hill, Pankhabari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Darjeeling Tea, Strawberry, Toy Train UNESCO Fondant, Kanchenjunga Fondant, Chocolate, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Darjeeling?", answer: "Yes, same-day cake delivery is available across all Darjeeling areas — Darjeeling town, Kurseong, Mirik, Ghum, Lebong, and Tiger Hill — for orders placed before 3 PM." },
      { question: "Do you have Darjeeling First Flush Tea cake and Toy Train UNESCO-themed cakes?", answer: "Yes! Darjeeling's GI-tagged First Flush tea (March-April — the world's most prized tea with distinctive muscatel character, prized in London and Tokyo) and the Darjeeling Himalayan Railway Toy Train (UNESCO World Heritage, 1881 — with the famous Batasia Loop) inspire our most iconic Darjeeling fondant cakes." },
      { question: "Are eggless cakes available in Darjeeling?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Darjeeling Tea, Strawberry — are available in eggless variants for Darjeeling delivery." }
    ]
  },

  "malda": {
    cityName: "Malda",
    metaTitle: "Cake Delivery in Malda | Fazli Mango Gaur Bengal | RedHeart",
    metaDescription: "Order cakes online in Malda. Same-day delivery across Malda. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Malda",
    metaKeyword: "cake delivery malda, order cake online malda, birthday cake malda, custom cake malda, same day cake delivery malda Fazli Khirsa mango Gaur medieval Bengal sultanate silk Mahasthangarh Pandua West Bengal Bangladesh",
    footerContent: `
<h2>Cake Delivery in Malda — GI Fazli Mango's Sweetest Expression, Gaur's Medieval Bengal Sultanate Ruins, and Silk Country</h2>
<p>Malda (English Bazar) — the headquarters of Malda district in West Bengal, the mango capital of Bengal and home to some of India's most extraordinary medieval ruins (Malda district is famous for the Fazli mango — one of India's most prized and largest mango varieties; the Fazli (also called Fajli or Fazlee) is a GI-tagged mango from Malda district; it is an extremely large mango (500-800 gm per fruit), with aromatic, fibre-free flesh of excellent quality; the Fazli harvest season (July-August — later than most mangoes) and the Khirsa (Hirsa) variety and the Ashwina variety are also significant in Malda; the mango orchards of Malda district (particularly in the Harishchandrapur and Kaliachak areas) are extensive; the Gaur city ruins — 15 km from Malda — are the remains of the Bengal Sultanate capital (Gaur was the capital of the Pala dynasty (8th-12th century CE), then the Sena dynasty, and then the Bengal Sultanate (12-16th century), and later the Mughal governor's capital; at its peak (15th-16th century), Gaur was one of the largest cities in the world, with a population of 1-2 million; the Eklakhi Mausoleum, Kotwali Gate, Firoz Minar, Baro Sona Mosque, and Tantipara Mosque are among Gaur's surviving medieval monuments; the Pandua town (25 km from Malda) also has significant medieval Bengal Sultanate architecture — the Adina Mosque (1374 CE, 88 domes) was once the largest mosque in the Indian subcontinent; Malda district has a significant silk-weaving tradition — Malda tussar silk and mulberry silk sarees), and a city of medieval glory and mango abundance — is North Bengal's most historically layered city. From birthday parties in Malda town to corporate cakes at the mango export firms, from anniversary surprises near the Gaur ruins to student cakes — RedHeart covers all Malda zones: Malda (English Bazar), Old Malda, Gazole, Habibpur, Bamangola, Ratua, Kaliachak, Harishchandrapur, Chanchal.</p>
<p>Our Malda cake range: Chocolate, Black Forest, Red Velvet, Fazli Mango (Malda GI!), Butterscotch, Photo Cakes, Fondant Gaur Sultanate / Adina Mosque / Fazli Mango Garden-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malda (English Bazar), West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malda town, Old Malda, Gazole, Habibpur, Kaliachak, Harishchandrapur, Chanchal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fazli Mango, Chocolate, Gaur Sultanate Fondant, Adina Mosque Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Malda?", answer: "Yes, same-day cake delivery is available across all Malda areas — Malda town, Old Malda, Gazole, Kaliachak, Harishchandrapur, and Chanchal — for orders placed before 3 PM." },
      { question: "Do you have Malda Fazli Mango cake and Gaur Sultanate-themed cakes?", answer: "Yes! The GI-tagged Fazli mango (one of India's largest and most aromatic mangoes, 500-800 gm, harvest in July-August) and the Gaur medieval Bengal Sultanate ruins (once one of the world's largest cities, with the 88-dome Adina Mosque) inspire our most distinctively Malda fondant cakes." },
      { question: "Are eggless cakes available in Malda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Fazli Mango — are available in eggless variants for Malda delivery." }
    ]
  },

  "purulia": {
    cityName: "Purulia",
    metaTitle: "Cake Delivery in Purulia | Chau Dance Ayodhya Hills West Bengal | RedHeart",
    metaDescription: "Order cakes online in Purulia. Same-day delivery across Purulia. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Purulia",
    metaKeyword: "cake delivery purulia, order cake online purulia, birthday cake purulia, custom cake purulia, same day cake delivery purulia Chau dance UNESCO mask Ayodhya Hills Subarnarekha river tribal Santhali Kurmi Munda Bengal Bihar border",
    footerContent: `
<h2>Cake Delivery in Purulia — Chau Dance's UNESCO Mask Festival, Ayodhya Hills' Tribal Landscape, and West Bengal's Jungle Border</h2>
<p>Purulia — the headquarters of Purulia district in West Bengal, the westernmost district of Bengal bordering Jharkhand and the cultural home of the Chau dance (the Purulia Chau (Chhau) dance — one of India's most spectacular and unique martial folk dance forms — has received UNESCO recognition as an "Intangible Cultural Heritage of Humanity" (along with the Seraikella and Mayurbhanj Chau traditions); the Purulia Chau is distinct for its use of elaborate, brightly painted papier-mâché masks depicting mythological characters (gods, demons, animals) from the Ramayana, Mahabharata, and Hindu mythology; the masks are the most distinctive feature of Purulia Chau — unlike the other Chau forms (Seraikella uses masks occasionally, Mayurbhanj uses none); the Gajan festival (Shiva-Charak) in which Chhau is performed is the most important cultural event of Purulia; the Ayodhya Hills (Bagmundi area) in Purulia district are one of West Bengal's most scenic forested hill ranges — the highest point is Bamni Falls; the Subarnarekha River (a major river of Jharkhand-West Bengal-Odisha) originates in the Purulia Ranchi area; Purulia district has a significant tribal population — Santhali, Munda, Oraon, and Kurmi Mahato communities; the Purulia area has significant mineral deposits (coal, iron, copper); the Pakbirra and Garhpanchkot (ruined fort of the Panchet Raja) are heritage sites in Purulia district), and a city of UNESCO dance and jungle hill serenity — is West Bengal's tribal western gem. From birthday parties in Purulia town to Chau dance festival cakes, from anniversary surprises near the Ayodhya Hills to student cakes — RedHeart covers all Purulia zones: Purulia town, Raghunathpur, Jhalda, Manbazar, Bagmundi, Para, Puncha, Kashipur.</p>
<p>Our Purulia cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Purulia Chau Mask / Ayodhya Hills / UNESCO Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purulia, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purulia town, Raghunathpur, Jhalda, Manbazar, Bagmundi, Para, Puncha, Kashipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chau Mask Fondant, Ayodhya Hills Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Purulia?", answer: "Yes, same-day cake delivery is available across all Purulia areas — Purulia town, Raghunathpur, Jhalda, Manbazar, Bagmundi, and Para — for orders placed before 3 PM." },
      { question: "Do you have Purulia Chau Mask and Ayodhya Hills-themed cakes?", answer: "Yes! The Purulia Chau dance — UNESCO Intangible Cultural Heritage, with its stunning papier-mâché masks of gods and demons — and the scenic Ayodhya Hills tribal landscape inspire our most artistically unique Purulia fondant cakes." },
      { question: "Are eggless cakes available in Purulia?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Purulia delivery." }
    ]
  },

  "alibaug": {
    cityName: "Alibaug",
    metaTitle: "Cake Delivery in Alibaug | Raigad Fort Konkan Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Alibaug. Same-day delivery across Alibaug. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Alibaug",
    metaKeyword: "cake delivery alibaug raigad, order cake online alibaug, birthday cake alibaug, custom cake alibaug, same day cake delivery alibaug Raigad fort Shivaji Maharaj Konkan coastal Maharashtra Mumbai beach Kolaba fort Murud Janjira",
    footerContent: `
<h2>Cake Delivery in Alibaug — Raigad Fort's Maratha Capital, Murud Janjira's Invincible Island Fortress, and Konkan's Mumbai Getaway Beach</h2>
<p>Alibaug — the headquarters of Raigad district in Maharashtra's Konkan coast, a district that holds the most sacred Maratha history and some of Maharashtra's finest sea forts (the Raigad Fort — built in 1030 CE and expanded by Chhatrapati Shivaji Maharaj into his capital — is one of the most historically significant forts in India; Shivaji Maharaj was crowned Chhatrapati at Raigad on June 6, 1674 — the coronation ceremony that formally established the Maratha Empire and ended centuries of Mughal-Sultanate dominance in the Deccan; the fort is perched on a 820-metre plateau and is accessible by ropeway; Shivaji's tomb (samadhi) is at Raigad; the Kolaba Fort (Kulaba Killa) — a sea fort at Alibaug town — stands in the Arabian Sea just 100 metres off the shore and is accessible on foot at low tide; Alibaug beach is one of the most popular weekend destinations from Mumbai (ferry from Gateway of India + road); the Murud-Janjira sea fort (100 km from Alibaug) — built in the 17th century and never conquered by the Marathas, Mughals, or British — is the only sea fort in India (and one of the very few in Asia) that was never captured; the Murud-Janjira's Siddis (African descendants who maintained the fort) remain a unique community of Maharashtra's coastal heritage; the Kashid Beach, Nagaon Beach, and Revdanda Beach are popular Konkan coastline attractions in Raigad district), and a city of Maratha coronation glory and sea fortress wonder — is Maharashtra's coastal heritage capital. From birthday parties on Alibaug Beach to Raigad Fort celebration cakes, from anniversary surprises near Murud Janjira to student cakes — RedHeart covers all Alibaug/Raigad zones: Alibaug town, Pen, Panvel, Roha, Mahad, Mangaon, Murud, Shrivardhan, Mhasala.</p>
<p>Our Alibaug cake range: Chocolate, Black Forest, Red Velvet, Coconut (Konkan!), Cashew, Butterscotch, Photo Cakes, Fondant Raigad Fort Coronation / Murud Janjira Sea Fort / Kolaba Sea Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alibaug, Maharashtra (Raigad district)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alibaug town, Pen, Panvel, Roha, Mahad, Mangaon, Murud, Shrivardhan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Raigad Fort Fondant, Murud Janjira Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Alibaug?", answer: "Yes, same-day cake delivery is available across all Alibaug/Raigad areas — Alibaug town, Pen, Panvel, Roha, Mahad, Mangaon, and Murud — for orders placed before 3 PM." },
      { question: "Do you have Raigad Fort Coronation and Murud Janjira-themed cakes in Alibaug?", answer: "Yes! The Raigad Fort — where Chhatrapati Shivaji Maharaj was crowned the founder of the Maratha Empire on June 6, 1674 — and the Murud Janjira sea fort (the only sea fort in India never conquered by any power) inspire our most historically powerful Alibaug fondant cakes." },
      { question: "Are eggless cakes available in Alibaug?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Cashew — are available in eggless variants for Alibaug delivery." }
    ]
  },

  "chamba": {
    cityName: "Chamba",
    metaTitle: "Cake Delivery in Chamba | Khajjiar Ravi River Himachal | RedHeart",
    metaDescription: "Order cakes online in Chamba HP. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chamba HP",
    metaKeyword: "cake delivery chamba himachal, order cake online chamba hp, birthday cake chamba, custom cake chamba, same day cake delivery chamba khajjiar mini switzerland Ravi river Chaurasi temple Bhuri Singh Museum Gaddi tribal Himachal Pradesh",
    footerContent: `
<h2>Cake Delivery in Chamba — Khajjiar's Mini Switzerland, Chaurasi's 84 Temples, and Ravi River's Himalayan Heritage Town</h2>
<p>Chamba — the headquarters of Chamba district in Himachal Pradesh, one of the most historically and culturally rich towns in the Himalayas (Chamba town is one of the few Himalayan towns with significant medieval heritage — the Laxmi Narayan group of temples (9th-10th century), the Chaturmukha Shivalinga, and the Akhand Chandi Palace (royal palace, now part college) reflect the Chamba Rajput kingdom's 1,000-year legacy; the Bhuri Singh Museum at Chamba has an exceptional collection of Chamba Rumal (uniquely embroidered handkerchiefs/cloths in silk and gold with mythological scenes — one of Himachal's most distinguished textile arts with GI recognition); the Chamba Rumal was a royal gift tradition and is a UNESCO-recognized heritage craft; the Minjar Mela at Chamba (annual July festival) is one of Himachal's most colourful festivals — celebrating the ripening of maize (minjar = corn tassel), with a procession, music, and sports; Khajjiar — 22 km from Chamba — is a beautiful high-altitude (1,920 metres) saucer-shaped meadow surrounded by dense deodar cedar forests, with a small lake at the centre; Khajjiar was dubbed a "Mini Switzerland" by the Swiss Vice-Consul in 1992 (a recognition plaque exists at Chamba); the Gaddi tribal community — traditional sheep-herders of the Chamba and Kangra areas — undertake seasonal transhumance from valley to alpine meadows; the Ravi River (Iravati) originates near Bara Bhangal in Chamba district and flows through the town; the Manimahesh Lake (4,080 metres — near Mount Manimahesh/Kailash, 5,656 metres) is one of Himachal's most sacred pilgrimage sites), and a city of royal heritage and meadow serenity — is Himachal's most historically layered Himalayan town. From birthday parties in Chamba town to Khajjiar celebration cakes, from anniversary surprises near the Chaurasi temples to student cakes — RedHeart covers all Chamba HP zones: Chamba town, Khajjiar, Dalhousie Road, Salooni, Brahmaur, Bharmour, Pangi, Churah.</p>
<p>Our Chamba HP cake range: Chocolate, Black Forest, Red Velvet, Apple (Chamba!), Butterscotch, Photo Cakes, Fondant Khajjiar Mini Switzerland / Chamba Rumal / Manimahesh Kailash-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamba, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamba town, Khajjiar, Dalhousie Road, Salooni, Brahmaur, Bharmour, Pangi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Khajjiar Mini Switzerland Fondant, Chamba Rumal Fondant, Apple, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chamba HP?", answer: "Yes, same-day cake delivery is available across all Chamba areas — Chamba town, Khajjiar, Dalhousie Road, Salooni, and Brahmaur — for orders placed before 3 PM." },
      { question: "Do you have Khajjiar 'Mini Switzerland' and Chamba Rumal-themed cakes?", answer: "Yes! Khajjiar's saucer-shaped deodar meadow with its lake (dubbed 'Mini Switzerland' in 1992) and the Chamba Rumal's exquisite GI-tagged embroidery tradition (gold-silk mythological handkerchief art) inspire our most beautiful Chamba HP fondant cakes." },
      { question: "Are eggless cakes available in Chamba HP?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple — are available in eggless variants for Chamba HP delivery." }
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
