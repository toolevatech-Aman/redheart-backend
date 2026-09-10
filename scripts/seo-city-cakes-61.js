// Cakes Batch 61 — 12 cities
// Telangana: Peddapalli, Jayashankar Bhupalpally, Bhadradri Kothagudem
// Karnataka: Haveri, Dharwad
// MP: Narsinghpur, Raisen, Sehore, Harda
// Uttarakhand: Pauri Garhwal, Tehri Garhwal, Rudraprayag

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "peddapalli": {
    cityName: "Peddapalli",
    metaTitle: "Cake Delivery in Peddapalli | NTPC Ramagundam Coal Telangana Godavari | RedHeart",
    metaDescription: "Order cakes online in Peddapalli. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Peddapalli",
    metaKeyword: "cake delivery peddapalli, order cake online peddapalli, birthday cake peddapalli, custom cake peddapalli, same day cake delivery peddapalli NTPC Ramagundam coal Telangana Godavari SCCL Manthani",
    footerContent: `
<h2>Cake Delivery in Peddapalli — NTPC Ramagundam, SCCL Coalfields, and Godavari Industrial Belt</h2>
<p>Peddapalli — the district headquarters of Peddapalli district in Telangana (carved from Karimnagar in 2016; Godavari River belt; northeastern Telangana), a district at the center of Telangana's energy production (the NTPC Ramagundam Super Thermal Power Station (Ramagundam — in Peddapalli district; NTPC Ramagundam is one of India's largest and oldest super thermal power stations; established 1962 as a National Thermal Power Corporation flagship plant; 2,600 MW installed capacity; named after the Ramagundam town on the Godavari; Ramagundam was also the site of India's first fertiliser plant — the Fertilizer Corporation of India plant established here in 1967; the Ramagundam town is essentially an NTPC company township); the SCCL Godavari Coalfields (Singareni Collieries Company Limited — the Peddapalli district has significant SCCL mining operations; the Godavari Valley Coalfields; the coal-mining belt runs from Peddapalli through Mancherial-Jayashankar districts; these are the only major coalfields in South India; thermal coal production for Andhra Pradesh and Telangana power stations); the Godavari River (the Godavari flows through Peddapalli district; the Manthani area on the Godavari is known for the Saraswathi Temple — a significant pilgrimage site); the Ramagundam Fertilizer Plant (a major industrial plant revived after decades)), and a city of NTPC Ramagundam power and SCCL Godavari coal — is Telangana's most NTPC-Ramagundam-2600MW and SCCL-Godavari-coalfields Peddapalli. From birthday parties in Peddapalli to celebration cakes — RedHeart covers all areas: Peddapalli city, Ramagundam, Manthani, Sultanabad, Srirampur, Godavarikhani.</p>
<p>Our Peddapalli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Peddapalli, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Peddapalli city, Ramagundam, Manthani, Sultanabad, Srirampur, Godavarikhani</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Peddapalli?", answer: "Yes, same-day cake delivery is available across all Peddapalli areas — Peddapalli city, Ramagundam, Manthani, Sultanabad, Srirampur, and Godavarikhani — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Peddapalli?", answer: "Yes, all flavours are available in eggless variants for Peddapalli delivery." },
      { question: "Do you deliver midnight cakes in Peddapalli and Ramagundam?", answer: "Yes, midnight birthday cake delivery is available across Peddapalli city and Ramagundam zones." }
    ]
  },

  "jayashankar-bhupalpally": {
    cityName: "Jayashankar Bhupalpally",
    metaTitle: "Cake Delivery in Jayashankar Bhupalpally | Kawal Tiger Godavari Telangana Tribal | RedHeart",
    metaDescription: "Order cakes online in Jayashankar Bhupalpally. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jayashankar Bhupalpally",
    metaKeyword: "cake delivery jayashankar bhupalpally, order cake online bhupalpally, birthday cake bhupalpally, custom cake jayashankar bhupalpally, same day cake delivery Kawal Tiger Reserve Godavari Telangana tribal Pranahita",
    footerContent: `
<h2>Cake Delivery in Jayashankar Bhupalpally — Kawal Tiger Reserve, Pranahita-Godavari, and Telangana's Tribal Heartland</h2>
<p>Jayashankar Bhupalpally — the district headquarters of Jayashankar Bhupalpally district in Telangana (named after Prof. Jayashankar — the ideologue of the Telangana statehood movement; carved from Karimnagar in 2016; northeastern Telangana), a forested tribal district with a major tiger reserve (the Kawal Tiger Reserve (Kawal — in Jayashankar Bhupalpally district; the Kawal Wildlife Sanctuary was upgraded to a Tiger Reserve; one of Telangana's two Tiger Reserves (along with Amrabad); the Kawal forests are dense sal, teak, and bamboo; tigers, leopards, wild dogs (dholes), sloth bears, four-horned antelopes; the Kawal forests are the southern extension of the Central Indian Tiger landscape); the Pranahita River (the Pranahita — formed by the confluence of the Wardha and Wainganga rivers — enters Telangana through Jayashankar Bhupalpally district; the Pranahita joins the Godavari at Kaleshwaram (now famous as the site of the Kaleshwaram Lift Irrigation Project)); the Kaleshwaram Lift Irrigation Project (the world's largest multi-stage lift irrigation project — lifts water from the Godavari at Kaleshwaram (Bhupalpally-Mancherial border) using massive pump houses; supplies water to 45 lakh acres; the Medigadda Barrage and Annaram-Sundilla barrages; a mega engineering achievement of the Telangana government); the Gond and Koya tribal communities of Bhupalpally district; the Prof. Jayashankar Sarojini Devi University Bhupalpally area), and a city of Kawal Tiger and Kaleshwaram world's largest lift irrigation — is Telangana's most Kawal-Tiger-Reserve-sal-teak and Kaleshwaram-world's-largest-lift-irrigation Bhupalpally. From birthday parties in Bhupalpally to celebration cakes — RedHeart covers all areas: Bhupalpally city, Mulugu, Mahadevpur, Palimela, Mogullapally.</p>
<p>Our Jayashankar Bhupalpally cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jayashankar Bhupalpally, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhupalpally city, Mulugu, Mahadevpur, Palimela, Mogullapally</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jayashankar Bhupalpally?", answer: "Yes, same-day cake delivery is available across all Bhupalpally areas — Bhupalpally city, Mulugu, Mahadevpur, Palimela, and Mogullapally — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jayashankar Bhupalpally?", answer: "Yes, all flavours are available in eggless variants for Bhupalpally delivery." },
      { question: "Do you deliver midnight cakes in Bhupalpally?", answer: "Yes, midnight birthday cake delivery is available across Bhupalpally city zones." }
    ]
  },

  "bhadradri-kothagudem": {
    cityName: "Bhadradri Kothagudem",
    metaTitle: "Cake Delivery in Bhadradri Kothagudem | Bhadrachalam Ram Temple Godavari Telangana | RedHeart",
    metaDescription: "Order cakes online in Bhadradri Kothagudem. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bhadradri Kothagudem",
    metaKeyword: "cake delivery bhadradri kothagudem, order cake online kothagudem bhadrachalam, birthday cake bhadrachalam, same day cake delivery Bhadrachalam Ram temple Godavari Telangana Koya tribe paper mills",
    footerContent: `
<h2>Cake Delivery in Bhadradri Kothagudem — Bhadrachalam Ram Temple, Godavari River, and Koya Tribal Heritage</h2>
<p>Bhadradri Kothagudem — the district headquarters of Bhadradri Kothagudem district in Telangana (southern Telangana; Godavari River; Chhattisgarh-Odisha border; carved from Khammam in 2016), a district that is both a major pilgrimage center and tribal heartland (the Bhadrachalam Ram Temple (Bhadrachalam — in Bhadradri Kothagudem district; one of the most important Vaishnava pilgrimage sites in South India; the Sri Sita Ramachandra Swamy Temple; the temple houses the famous jewels (ornaments) gifted by the beloved saint-poet Kancharla Gopanna / "Bhakta Ramadasu" (1620-1688 CE); Bhakta Ramadasu was a Mughal-era village accountant who used government treasury funds to build the Bhadrachalam temple; he was imprisoned for 12 years by the Golconda Nawab Abul Hasan Tana Shah; Lord Rama and Lakshmana appeared as Golconda noblemen and paid the treasury dues — a miracle story; Ramadasu's compositions "Keertanas" are a cornerstone of Telugu Vaishnava devotional music; the Sri Rama Navami at Bhadrachalam — the annual celestial wedding of Rama and Sita — is the biggest festival here; lakhs of devotees attend; the Godavari River (Bhadrachalam is on the Godavari; the Godavari flood-level at Bhadrachalam is used as a flood warning indicator for the entire lower Godavari basin in Andhra Pradesh)); the Koya Tribe (the Koya tribal people are the dominant tribal community of Bhadradri Kothagudem district; unique Koya cultural traditions); the SCCL Kothagudem coal mines and thermal power stations; the IFFCO paper mills at Bhadrachalam), and a city of Bhadrachalam Ram Temple Bhakta Ramadasu and Godavari Koya tribal — is Telangana's most Bhadrachalam-Ram-Temple-Bhakta-Ramadasu and Godavari-flood-indicator-Koya-tribe Bhadradri. From birthday parties in Bhadradri Kothagudem to celebration cakes — RedHeart covers all areas: Kothagudem city, Bhadrachalam, Palvancha, Yellandu, Manuguru, Burgampadu.</p>
<p>Our Bhadradri Kothagudem cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bhadrachalam Ram Temple / Bhakta Ramadasu / Godavari-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhadradri Kothagudem, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kothagudem city, Bhadrachalam, Palvancha, Yellandu, Manuguru, Burgampadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bhadrachalam Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhadradri Kothagudem?", answer: "Yes, same-day cake delivery is available across all Bhadradri Kothagudem areas — Kothagudem city, Bhadrachalam, Palvancha, Yellandu, and Manuguru — for orders placed before 3 PM." },
      { question: "Do you have Bhadrachalam Ram Temple-themed cakes?", answer: "Yes! The Bhadrachalam Sri Sita Ramachandra Swamy Temple (the story of Bhakta Ramadasu / Kancharla Gopanna 1620-1688 CE — who used treasury funds to build the temple, was imprisoned 12 years by the Golconda Nawab, and was miraculously freed when Rama and Lakshmana appeared to pay the dues; Sri Rama Navami celestial wedding festival draws lakhs) inspires our most Bhadrachalam-Ram-Temple-Bhakta-Ramadasu fondant cakes." },
      { question: "Are eggless cakes available in Bhadradri Kothagudem?", answer: "Yes, all flavours are available in eggless variants for Bhadradri Kothagudem delivery." }
    ]
  },

  "haveri": {
    cityName: "Haveri",
    metaTitle: "Cake Delivery in Haveri | Karnataka Dharwad Tungabhadra GI Haveri Chilli Savanur | RedHeart",
    metaDescription: "Order cakes online in Haveri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Haveri",
    metaKeyword: "cake delivery haveri, order cake online haveri, birthday cake haveri, custom cake haveri, same day cake delivery haveri Karnataka Dharwad Tungabhadra GI Haveri Chilli Savanur Shiggaon cotton betel nut",
    footerContent: `
<h2>Cake Delivery in Haveri — GI Haveri Chilli, Cotton Belt, and North Karnataka Agricultural Heartland</h2>
<p>Haveri — the district headquarters of Haveri district in Karnataka (northern Karnataka; carved from Dharwad in 1997; Tungabhadra tributary basin), a predominantly agricultural district known for its cash crops (the GI Haveri Chilli / Byadagi Chilli (Byadagi — a town in Haveri district; the Byadagi red chilli is one of India's most prized GI-protected chilli varieties; the Byadagi Chilli is known for its deep red color, low pungency, and high color value (ASTA value); it is used extensively in spice-export blends and food coloring worldwide; the chilli is paprika-like in character — vivid red color with mild heat; the "Kaddi" variety (long) and the "Dabbi" variety (short) are the two main Byadagi types; Haveri-Byadagi-Ranebennur is the main cultivation belt; the annual Byadagi Chilli market at Byadagi is one of Asia's largest chilli spot markets; GI protection); the cotton and betel nut production (Haveri district has significant cotton and betel nut/areca cultivation); the Savanur (Haveri district — the Savanur Nawabi history; the Savanur Nawabs — a notable dynasty of the Deccan during the 18th-19th centuries — were autonomous rulers under the Maratha Peshwa influence; Savanur Fort); the Shiggaon area (Haveri district); the Tungabhadra tributaries irrigating the district), and a city of GI Byadagi Chilli deep-red low-pungency and Savanur Nawabi heritage — is Karnataka's most Byadagi-GI-Chilli-red-color-low-pungency and Savanur-Nawabi-historical Haveri. From birthday parties in Haveri to celebration cakes — RedHeart covers all areas: Haveri city, Ranebennur, Byadagi, Savanur, Shiggaon, Hirekerur, Hanagal.</p>
<p>Our Haveri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haveri, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haveri city, Ranebennur, Byadagi, Savanur, Shiggaon, Hirekerur, Hanagal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Haveri?", answer: "Yes, same-day cake delivery is available across all Haveri areas — Haveri city, Ranebennur, Byadagi, Savanur, Shiggaon, Hirekerur, and Hanagal — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Haveri?", answer: "Yes, all flavours are available in eggless variants for Haveri delivery." },
      { question: "Do you deliver midnight cakes in Haveri?", answer: "Yes, midnight birthday cake delivery is available across Haveri city and Ranebennur zones." }
    ]
  },

  "dharwad": {
    cityName: "Dharwad",
    metaTitle: "Cake Delivery in Dharwad | GI Dharwad Peda IIT Karnataka Hubli Twin City Kittur | RedHeart",
    metaDescription: "Order cakes online in Dharwad. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dharwad",
    metaKeyword: "cake delivery dharwad, order cake online dharwad, birthday cake dharwad, custom cake dharwad, same day cake delivery dharwad GI Dharwad Peda IIT Karnataka Hubli twin city Kittur Rani Chennamma Karnatak music",
    footerContent: `
<h2>Cake Delivery in Dharwad — GI Dharwad Peda, IIT Dharwad, Kittur Rani Chennamma, and Hindustani Music Capital</h2>
<p>Dharwad — the district headquarters of Dharwad district in Karnataka (also the twin city of Hubli; northern Karnataka; home to IIT Dharwad), a city of exceptional cultural richness — famous for its GI-protected sweet, its music tradition, and its freedom fighter queen (the GI Dharwad Peda (the Dharwad Peda — one of India's most celebrated GI-protected traditional sweets; a caramel-brown milk-solid sweet; made from buffalo milk reduced over slow flame with sugar; the Dharwad Peda is grainier and less sweet than Mathura Peda; the unique Dharwad Peda taste comes from the slow caramelization of milk solids; the famous "Thakur Brothers" Peda shop in Dharwad (established in the 19th century) is the original maker; Dharwad Peda has GI protection; sold across Karnataka and globally); the Dharwad Hindustani Music tradition (Dharwad is considered the cultural capital of North Karnataka; the city is home to the "Dharwad Gharana" of Hindustani classical music; famous musicians from Dharwad include the Gangubai Hangal (Padma Vibhushan; one of the greatest Kirana Gharana vocalists; 1913-2009; lived and performed for decades from Dharwad), Bhimsen Joshi (Pandit Bhimsen Joshi — 1922-2011; Kirana Gharana; Bharat Ratna 2009; known for "Abhangas" and "Khayals"; born at Gadag but deeply associated with Dharwad)); the Kittur Rani Chennamma (Kittur — in Dharwad district; Rani Chennamma of Kittur (1778-1829 CE) was one of India's first women freedom fighters; she led an armed resistance against the British East India Company in the First Anglo-Kittur War (1824) and defeated the British in battle (killing the Collector Thackeray); she was captured in a second battle and died in British captivity; she predated the 1857 revolt by 33 years; an important but often overlooked heroine of Indian history); the IIT Dharwad (established 2016 — one of India's new IITs)), and a city of GI Dharwad Peda caramel milk sweet and Gangubai Hangal Hindustani music — is Karnataka's most GI-Dharwad-Peda-caramel-milk and Gangubai-Hangal-Kirana-Gharana-Kittur-Rani Dharwad. From birthday parties in Dharwad to celebration cakes — RedHeart covers all areas: Dharwad city, Hubli (twin city), Alnavar, Navalgund, Kalghatgi, Kalaghatagi, Kundgol.</p>
<p>Our Dharwad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Dharwad Peda Cake (our special tribute!), Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharwad, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharwad city, Hubli, Alnavar, Navalgund, Kalghatgi, Kundgol</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharwad Peda Cake, Chocolate, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dharwad?", answer: "Yes, same-day cake delivery is available across all Dharwad areas — Dharwad city, Hubli, Alnavar, Navalgund, Kalghatgi, and Kundgol — for orders placed before 3 PM." },
      { question: "Do you have a special Dharwad Peda-inspired cake?", answer: "Yes! Our signature Dharwad Peda Cake pays tribute to the GI-protected Dharwad Peda (caramel-brown buffalo-milk slow-caramelized sweet; grainier than Mathura Peda; made famous by the Thakur Brothers shop since the 19th century; GI-protected). We also have Kittur Rani Chennamma and Gangubai Hangal-themed fondant cakes celebrating Dharwad's extraordinary heritage." },
      { question: "Are eggless cakes available in Dharwad?", answer: "Yes, all flavours including the Dharwad Peda Cake are available in eggless variants for Dharwad delivery." }
    ]
  },

  "narsinghpur": {
    cityName: "Narsinghpur",
    metaTitle: "Cake Delivery in Narsinghpur | Narmada River MP Sugar Cane Belt Gadarwara Barman | RedHeart",
    metaDescription: "Order cakes online in Narsinghpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Narsinghpur",
    metaKeyword: "cake delivery narsinghpur, order cake online narsinghpur, birthday cake narsinghpur, custom cake narsinghpur, same day cake delivery narsinghpur Narmada River MP sugarcane Gadarwara Barman Rani Avantibai Lodhi freedom fighter",
    footerContent: `
<h2>Cake Delivery in Narsinghpur — Narmada River Valley, Sugarcane Belt, and Rani Avantibai Lodhi's Battlefield</h2>
<p>Narsinghpur — the district headquarters of Narsinghpur district in Madhya Pradesh (Narmada Valley; central MP; between Jabalpur and Bhopal), a fertile agricultural district on the Narmada with an important 1857 freedom story (the Narmada River (the Narmada flows through Narsinghpur district — the Narsinghpur district lies in the fertile Narmada Valley; the river's alluvial soil makes this one of MP's most agriculturally productive districts; major sugarcane production belt; the Barman Ghat on the Narmada); the Rani Avantibai Lodhi (Rani Avantibai of Ramgarh — 1831-1858 CE; the queen of the Ramgarh zamindari (in Mandla-Dindori district, adjacent to Narsinghpur area); one of India's first women freedom fighters of 1857; she led the Lodhi community's armed resistance against British annexation; she wrote a rallying poem to Lodhi clansmen: "Desh bachao ya maro" (Save the country or die); defeated British forces in several engagements; when captured was imminent she died fighting on March 20, 1858; commemorated on an Indian postal stamp; respected as Veerangana "brave woman warrior"); the Gadarwara (significant town in Narsinghpur; on the Narmada; railway junction; railway workshops); the sugarcane and soybean cultivation (Narsinghpur is one of MP's most productive agricultural districts); the Sethia (Narsinghpur township)), and a city of fertile Narmada Valley sugarcane and Rani Avantibai Lodhi 1857 — is MP's most Narmada-Valley-fertile-sugarcane and Rani-Avantibai-Lodhi-1857-Veerangana Narsinghpur. From birthday parties in Narsinghpur to celebration cakes — RedHeart covers all areas: Narsinghpur city, Gadarwara, Gotegaon, Kareli, Saikheda, Tendukheda.</p>
<p>Our Narsinghpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narsinghpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narsinghpur city, Gadarwara, Gotegaon, Kareli, Saikheda, Tendukheda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Narsinghpur?", answer: "Yes, same-day cake delivery is available across all Narsinghpur areas — Narsinghpur city, Gadarwara, Gotegaon, Kareli, and Saikheda — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Narsinghpur?", answer: "Yes, all flavours are available in eggless variants for Narsinghpur delivery." },
      { question: "Do you deliver midnight cakes in Narsinghpur?", answer: "Yes, midnight birthday cake delivery is available across Narsinghpur city and Gadarwara zones." }
    ]
  },

  "raisen": {
    cityName: "Raisen",
    metaTitle: "Cake Delivery in Raisen | Bhimbetka UNESCO Rock Art Sanchi Adjacent MP Bhopal | RedHeart",
    metaDescription: "Order cakes online in Raisen. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Raisen",
    metaKeyword: "cake delivery raisen, order cake online raisen, birthday cake raisen, custom cake raisen, same day cake delivery raisen Bhimbetka UNESCO rock art Sanchi adjacent MP Bhopal Vindhyan caves prehistoric",
    footerContent: `
<h2>Cake Delivery in Raisen — Bhimbetka UNESCO (30,000-Year-Old Rock Art), Sanchi-Adjacent, and Vindhyan Caves</h2>
<p>Raisen — the district headquarters of Raisen district in Madhya Pradesh (central MP; just south of Bhopal; Vindhya Range), a district containing one of the world's most extraordinary prehistoric art sites (the Bhimbetka Rock Shelters (Bhimbetka — in Raisen district; UNESCO World Heritage Site 2003; a group of over 700 rock shelters in the Vindhyan foothills; approximately 500 contain prehistoric paintings; the rock art at Bhimbetka spans from the Upper Palaeolithic period (approximately 30,000 years BCE) through the medieval period — making it one of the longest continuous art traditions in the world at a single site; the paintings depict animals (bison, rhino, bear, elephant, deer, tiger), hunting scenes, dance, music, honey collection, childbirth, burial, and religious symbols; the oldest paintings use natural ochre, red haematite, and white chalk; Bhimbetka shows evidence of continuous human habitation from before the Stone Age through medieval times; the name "Bhimbetka" means "Bhima's seat" — from the Pandava hero; the paintings were "discovered" by archaeologist V.S. Wakankar in 1957); the Sanchi proximity (the Raisen district is adjacent to Sanchi — the UNESCO World Heritage Buddhist stupa site (Ashoka's Great Stupa) is at the Raisen-Vidisha district border; pilgrims visiting Sanchi often pass through Raisen); the Raisen Fort (a large medieval fort overlooking Raisen town; historical significance in Mughal-Maratha conflicts); the Barna River and Bargi-Tawa river system), and a city of Bhimbetka UNESCO 30,000-year prehistoric rock art and Sanchi adjacent — is MP's most Bhimbetka-UNESCO-30000-years-continuous-art and Sanchi-adjacent Raisen. From birthday parties in Raisen to celebration cakes — RedHeart covers all areas: Raisen city, Obaidullahganj, Begumganj, Silwani, Bareli, Sanchi area, Bhimbetka.</p>
<p>Our Raisen cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bhimbetka Cave Art / Sanchi Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raisen, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raisen city, Obaidullahganj, Begumganj, Silwani, Bareli, Sanchi area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bhimbetka Cave Art Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Raisen?", answer: "Yes, same-day cake delivery is available across all Raisen areas — Raisen city, Obaidullahganj, Begumganj, Silwani, and Bareli — for orders placed before 3 PM." },
      { question: "Do you have Bhimbetka UNESCO Rock Art-themed cakes?", answer: "Yes! The Bhimbetka Rock Shelters (UNESCO 2003; 700+ rock shelters in Raisen's Vindhyan foothills; 500+ with prehistoric paintings spanning 30,000 years — one of the world's longest continuous art traditions; Stone Age hunters, animals, dance, honey-gathering scenes in ochre and haematite; discovered by V.S. Wakankar 1957) inspire our most Bhimbetka-prehistoric-cave-art fondant cakes." },
      { question: "Are eggless cakes available in Raisen?", answer: "Yes, all flavours are available in eggless variants for Raisen delivery." }
    ]
  },

  "sehore": {
    cityName: "Sehore",
    metaTitle: "Cake Delivery in Sehore | Bhopal Adjacent MP Sehore Wheat Seoni Malwa Ashapuri | RedHeart",
    metaDescription: "Order cakes online in Sehore. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sehore",
    metaKeyword: "cake delivery sehore, order cake online sehore, birthday cake sehore, custom cake sehore, same day cake delivery sehore Bhopal adjacent MP wheat belt Ashapuri temple Narmada Seoni Malwa Ichhawar",
    footerContent: `
<h2>Cake Delivery in Sehore — Bhopal's Neighbour, Ashapuri Temple, and Malwa-Narmada Agricultural Zone</h2>
<p>Sehore — the district headquarters of Sehore district in Madhya Pradesh (central MP; immediately adjacent to Bhopal; Malwa Plateau-Narmada transition zone), a district that serves as the agricultural hinterland for Bhopal (the Sehore district — immediately to the west and south of Bhopal; the Malwa-Narmada transition zone; a major wheat and soybean producing district; the Sehore-Bhopal corridor is one of MP's fastest-growing economic zones due to Bhopal's urban expansion; the Berasia-Ashta-Sehore belt is known for agricultural produce markets); the Ashapuri Temple (Ashapuri — in Sehore district; an ancient temple complex; the Ashapuri Devi temple is a significant pilgrimage site for the Malwa and Bhopal region; the Ashapuri area also has archaeological significance); the Seoni Malwa town (Sehore district — Seoni Malwa is a significant commercial town; on the Bhopal-Indore highway corridor); the Narmada Valley edge (the southern tip of Sehore district touches the Narmada Valley; the Neelkanth area near the Narmada); the Kaliasot and Betwa tributaries (rivers flowing through or near Sehore district); the BU Bhopal (Barkatullah University) and administrative proximity to Bhopal make Sehore an important district, and a city of Bhopal's agricultural neighbour and Ashapuri pilgrimage — is MP's most Bhopal-adjacent and Ashapuri-Devi-pilgrimage-Malwa Sehore. From birthday parties in Sehore to celebration cakes — RedHeart covers all areas: Sehore city, Ashta, Berasia, Nasrullaganj, Rehti, Ichhawar, Budhni.</p>
<p>Our Sehore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sehore, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sehore city, Ashta, Berasia, Nasrullaganj, Rehti, Ichhawar, Budhni</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sehore?", answer: "Yes, same-day cake delivery is available across all Sehore areas — Sehore city, Ashta, Berasia, Nasrullaganj, Rehti, Ichhawar, and Budhni — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sehore?", answer: "Yes, all flavours are available in eggless variants for Sehore delivery." },
      { question: "Do you deliver midnight cakes in Sehore?", answer: "Yes, midnight birthday cake delivery is available across Sehore city and Ashta zones." }
    ]
  },

  "harda": {
    cityName: "Harda",
    metaTitle: "Cake Delivery in Harda | Narmada River MP Tawa Reservoir Timarni Smallest District | RedHeart",
    metaDescription: "Order cakes online in Harda. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Harda",
    metaKeyword: "cake delivery harda, order cake online harda, birthday cake harda, custom cake harda, same day cake delivery harda Narmada River MP Tawa Reservoir Timarni smallest district wheat soybean Satpura",
    footerContent: `
<h2>Cake Delivery in Harda — Narmada Valley, Tawa Reservoir, and MP's Smallest District</h2>
<p>Harda — the district headquarters of Harda district in Madhya Pradesh (one of MP's smallest districts by area; Narmada Valley; carved from Hoshangabad/Narmadapuram), a compact agricultural district along the Narmada (the Harda district — one of Madhya Pradesh's smallest districts by area; situated in the fertile Narmada Valley between Hoshangabad-Narmadapuram and Khandwa; the Narmada River forms the southern boundary of Harda district; the district's location in the Narmada alluvial plains makes it highly agriculturally productive (wheat, soybean, cotton); the Tawa River (the Tawa — a major Narmada tributary — originates in the Satpura Range and flows through Harda district to join the Narmada; the Tawa Reservoir (Tawa Dam — in Hoshangabad-Harda border area; the Tawa Dam creates one of MP's largest reservoirs; significant irrigation infrastructure for the Narmada-Tawa belt; the Tawa Reservoir is also known for its fishing — the Tawa Reservoir Fishermen Cooperative is a celebrated community-managed fishing enterprise)); the Timarni town (Harda district — a significant commercial and railway town); the Satpura Range foothills (the Satpura Range rises south of Harda; forested hills visible from the district; Satpura Tiger Reserve in adjacent districts)), and a city of Narmada Valley and Tawa Reservoir community fishing MP — is MP's most Narmada-Valley-fertile and Tawa-Reservoir-community-fishing Harda. From birthday parties in Harda to celebration cakes — RedHeart covers all areas: Harda city, Timarni, Khirkia, Sirali, Rahatgaon, Hansakhedi.</p>
<p>Our Harda cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Harda, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Harda city, Timarni, Khirkia, Sirali, Rahatgaon, Hansakhedi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Harda?", answer: "Yes, same-day cake delivery is available across all Harda areas — Harda city, Timarni, Khirkia, Sirali, and Rahatgaon — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Harda?", answer: "Yes, all flavours are available in eggless variants for Harda delivery." },
      { question: "Do you deliver midnight cakes in Harda?", answer: "Yes, midnight birthday cake delivery is available across Harda city and Timarni zones." }
    ]
  },

  "pauri-garhwal": {
    cityName: "Pauri Garhwal",
    metaTitle: "Cake Delivery in Pauri Garhwal | Uttarakhand Himalayan Lansdowne Khirsu Chaubattia | RedHeart",
    metaDescription: "Order cakes online in Pauri Garhwal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Pauri Garhwal",
    metaKeyword: "cake delivery pauri garhwal, order cake online pauri, birthday cake pauri, custom cake pauri garhwal, same day cake delivery pauri garhwal Uttarakhand Himalayan Lansdowne Khirsu Chaubattia Alaknanda army cantonment",
    footerContent: `
<h2>Cake Delivery in Pauri Garhwal — Himalayan Hill Station, Lansdowne Cantonment, and Garhwal Regiment Heritage</h2>
<p>Pauri Garhwal — the district headquarters of Pauri Garhwal district in Uttarakhand (the "Pauri" — literally "steps/terraces" — referring to the terraced hillsides; a Himalayan district at approx 1,650m altitude; overlooking the Alaknanda Valley), a district known for its Himalayan vistas, military heritage, and hill-station charm (the Pauri town (Pauri Garhwal district headquarters — the town sits on a ridge at approximately 1,650m; panoramic views of the Himalayan peaks including Nanda Devi, Trishul, Chaukhamba, and Kedarnath peaks; the Pauri area is known for its apple orchards and crisp Himalayan climate); the Lansdowne Cantonment (in Pauri Garhwal district — Lansdowne is a beautiful hill town and army cantonment (established 1887) at approximately 1,700m; headquarters of the Garhwal Rifles regiment — one of India's most decorated infantry regiments; named after the Viceroy Lord Lansdowne; dense oak and rhododendron forests; a peaceful hill retreat with no industry; the Bhulabhai Museum (Garhwal Rifles regimental museum)); the Khirsu Hill Station (in Pauri Garhwal — a quiet mountain plateau at 1,700m; panoramic views; apple orchards; the Chaubattia orchards area; far less visited than Mussoorie; the Garhwal Mandal Vikas Nigam runs the Khirsu tourist resort); the Garhwal Regiment (the 4th Battalion Garhwal Rifles won the first Victoria Cross awarded to an Indian soldier in World War I — Darwan Singh Negi VC), and a city of Lansdowne Garhwal Rifles and Khirsu Himalayan apple orchards — is Uttarakhand's most Lansdowne-Garhwal-Rifles-1887-cantonment and Khirsu-Himalayan-apple-orchard Pauri Garhwal. From birthday parties in Pauri to celebration cakes — RedHeart covers all areas: Pauri city, Lansdowne, Khirsu, Kotdwar, Srinagar (Garhwal), Dugadda, Yamkeshwar.</p>
<p>Our Pauri Garhwal cake range: Chocolate, Black Forest, Red Velvet, Himalayan Apple Cake, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pauri Garhwal, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pauri city, Lansdowne, Khirsu, Kotdwar, Srinagar Garhwal, Dugadda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Himalayan Apple Cake, Chocolate, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pauri Garhwal?", answer: "Yes, same-day cake delivery is available across all Pauri Garhwal areas — Pauri city, Lansdowne, Khirsu, Kotdwar, and Srinagar Garhwal — for orders placed before 3 PM." },
      { question: "Do you have Lansdowne and Garhwal Rifles-themed cakes?", answer: "Yes! The Lansdowne Cantonment (established 1887; headquarters of the Garhwal Rifles — one of India's most decorated regiments; the 4th Garhwal Rifles won the first VC awarded to an Indian in WWI; dense oak-rhododendron forests; peaceful hill town) and Khirsu's Himalayan apple orchards inspire our Himalayan Apple Cake and Lansdowne fondant cakes." },
      { question: "Are eggless cakes available in Pauri Garhwal?", answer: "Yes, all flavours including Himalayan Apple Cake are available in eggless variants for Pauri Garhwal delivery." }
    ]
  },

  "tehri-garhwal": {
    cityName: "Tehri Garhwal",
    metaTitle: "Cake Delivery in Tehri Garhwal | Tehri Dam Reservoir New Tehri Uttarakhand Bhagirathi | RedHeart",
    metaDescription: "Order cakes online in Tehri Garhwal (New Tehri). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tehri Garhwal (New Tehri)",
    metaKeyword: "cake delivery tehri garhwal, order cake online new tehri, birthday cake tehri, custom cake tehri garhwal, same day cake delivery Tehri Dam reservoir Bhagirathi Bhilangana Sundar Lal Bahuguna Chipko submerged old Tehri",
    footerContent: `
<h2>Cake Delivery in Tehri Garhwal — Tehri Dam (India's Tallest Dam), Submerged Old Tehri, and Chipko Movement</h2>
<p>Tehri Garhwal — the district headquarters of Tehri Garhwal district in Uttarakhand (the new district headquarters "New Tehri" — built on a hilltop after old Tehri was submerged; Bhagirathi River valley), a district defined by one of India's most dramatic human stories — the deliberate submersion of an entire town (the Tehri Dam (Tehri Hydro Power Complex — the Tehri Dam on the Bhagirathi River is India's tallest dam at 260.5m and one of the world's tallest dams; the dam creates the Tehri Reservoir which submerged the old town of Tehri — the original district headquarters — along with 100+ villages and 40,000+ homes; the old Tehri town (established in 1815 CE; the seat of the Tehri-Garhwal princely state; the Rajra Bana Palace) sank underwater in 2006 when the reservoir filled; during low water levels in summer the ruins of the old Tehri town sometimes re-emerge from the water — a haunting sight; the Tehri Dam generates 1,000 MW hydroelectric power; the Tehri reservoir is a popular water sports destination); the Sundar Lal Bahuguna connection (Sundar Lal Bahuguna — 1927-2021; the greatest environmental activist of Tehri-Garhwal; he led the famous Chipko Movement in the 1970s ("hug the trees" to prevent deforestation in the Garhwal Himalayas); he also led a long campaign against the Tehri Dam; he was associated with Tehri Garhwal all his life); the Bhilangana River (a Bhagirathi tributary; flows through Tehri Garhwal)), and a city of Tehri Dam-260m India's tallest and submerged-Old-Tehri-town-resurfaces-summer — is Uttarakhand's most Tehri-Dam-India's-tallest-260m and Old-Tehri-submerged-1815-ruins-resurface Tehri Garhwal. From birthday parties in New Tehri to celebration cakes — RedHeart covers all areas: New Tehri city, Chamba, Narendra Nagar, Dunda, Pratapnagar, Devprayag, Kirtinagar.</p>
<p>Our Tehri Garhwal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Tehri Dam Reservoir / Submerged Old Tehri-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tehri Garhwal (New Tehri), Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">New Tehri city, Chamba, Narendra Nagar, Dunda, Pratapnagar, Devprayag, Kirtinagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tehri Dam Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tehri Garhwal (New Tehri)?", answer: "Yes, same-day cake delivery is available across all Tehri Garhwal areas — New Tehri city, Chamba, Narendra Nagar, Dunda, Pratapnagar, Devprayag, and Kirtinagar — for orders placed before 3 PM." },
      { question: "Do you have Tehri Dam and Old Tehri-themed cakes?", answer: "Yes! The Tehri Dam (India's tallest dam at 260.5m on the Bhagirathi; the old Tehri town — established 1815, seat of the Tehri-Garhwal princely state — was submerged when the reservoir filled in 2006; during summer low-water levels the ruins occasionally re-emerge from the water; the Chipko Movement led by Sundar Lal Bahuguna 1927-2021) inspire our most Tehri-Dam-submerged-old-town fondant cakes." },
      { question: "Are eggless cakes available in Tehri Garhwal?", answer: "Yes, all flavours are available in eggless variants for Tehri Garhwal delivery." }
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
