// Cakes Batch 47 — 13 cities
// MP: Jabalpur, Sagar, Rewa, Satna, Chhindwara
// Gujarat: Bhavnagar, Junagadh, Anand, Bhuj/Kutch, Gandhinagar, Porbandar
// WB: Siliguri (check - done), Bardhaman (Burdwan), Asansol (check)
// Rajasthan: Dungarpur, Banswara, Sirohi, Jalor

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "jabalpur": {
    cityName: "Jabalpur",
    metaTitle: "Cake Delivery in Jabalpur | Marble Rocks Dhuandhar Narmada Madhya Pradesh | RedHeart",
    metaDescription: "Order cakes online in Jabalpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jabalpur",
    metaKeyword: "cake delivery jabalpur, order cake online jabalpur, birthday cake jabalpur, custom cake jabalpur, same day cake delivery jabalpur Marble Rocks Bhedaghat Dhuandhar Waterfall Narmada River Thug Confederation Madhya Pradesh",
    footerContent: `
<h2>Cake Delivery in Jabalpur — Marble Rocks Bhedaghat, Dhuandhar Waterfall, Narmada Gorge, and Central India's Heritage</h2>
<p>Jabalpur — the district headquarters of Jabalpur district in Madhya Pradesh, one of Central India's most historically significant and scenically extraordinary cities (the Bhedaghat (14 km from Jabalpur) — the marble rocks of Bhedaghat are one of India's most spectacular natural wonders: 100-foot walls of dazzling white, pink, black, and yellow marble rising from the Narmada River for 3 km; the moonlit boat ride through the Bhedaghat marble canyon is considered one of India's most magical natural experiences; the Dhuandhar (Smoke Cascade) Waterfall — at Bhedaghat — is where the Narmada narrows dramatically and crashes through the marble gorge in a 30-foot fall producing a permanent cloud of mist ("Dhuandhar" = cloud of smoke); the Chausath Yogini Temple (10th century CE — a circular temple on a hill above the Narmada at Bhedaghat — one of India's finest examples of the rare Yogini temple tradition; 64 Yoginis carved in niches in a circular colonnade around a central Shiva shrine; the inspiration for India's Parliament building (circular design) is attributed to this temple); the Madan Mahal Fort (11th century CE — the Gond kingdom fort on a rocky outcrop above Jabalpur); Jabalpur is the commercial and cultural hub of Mahakoshal division of MP; the Rani Durgavati (the brave Gond queen who resisted the Mughal general Asaf Khan in 1564 CE — dying in battle rather than surrender; she is Madhya Pradesh's most celebrated historical female warrior); the Tilwara Ghat on the Narmada where Gandhi's ashes were immersed is near Jabalpur; the Ordnance Factory (Jabalpur — one of India's largest defence factories, established 1904)), and a city of marble canyon and Parliament-inspiring Yogini temple — is Madhya Pradesh's most marblously Narmada-canyon carved and Yogini-architecturally Parliament-inspiring city. From birthday parties in Jabalpur to celebration cakes — RedHeart covers all Jabalpur zones: Jabalpur city, Bhedaghat, Katni, Sihora, Patan, Panagar, Bargi.</p>
<p>Our Jabalpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Marble Rocks Bhedaghat / Dhuandhar Waterfall Narmada / Chausath Yogini Temple / Rani Durgavati Gond Queen-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jabalpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jabalpur city, Bhedaghat, Katni, Sihora, Patan, Panagar, Bargi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Marble Rocks Fondant, Dhuandhar Waterfall Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jabalpur?", answer: "Yes, same-day cake delivery is available across all Jabalpur areas — Jabalpur city, Bhedaghat, Katni, Sihora, and Panagar — for orders placed before 3 PM." },
      { question: "Do you have Marble Rocks Bhedaghat and Chausath Yogini Temple-themed cakes?", answer: "Yes! The Marble Rocks of Bhedaghat (100-foot white-pink-black marble canyon walls on the Narmada — one of India's most spectacular natural wonders; magical moonlit boat rides) and the Chausath Yogini Temple (10th century CE circular colonnade of 64 Yoginis — the inspiration credited for India's Parliament building's circular design) inspire our most marblously canyon-lit and Yogini-architecturally Jabalpur fondant cakes." },
      { question: "Are eggless cakes available in Jabalpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jabalpur delivery." }
    ]
  },

  "sagar": {
    cityName: "Sagar",
    metaTitle: "Cake Delivery in Sagar | Sagar Lake Bundelkhand MP University | RedHeart",
    metaDescription: "Order cakes online in Sagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sagar",
    metaKeyword: "cake delivery sagar, order cake online sagar, birthday cake sagar, custom cake sagar, same day cake delivery sagar Sagar Lake Bundelkhand Lakha Banjara legend Dr Hari Singh Gour University Vindhya Plateau Madhya Pradesh",
    footerContent: `
<h2>Cake Delivery in Sagar — Sagar Lake's Lakha Banjara Legend, Dr. Hari Singh Gour University, and Bundelkhand Plateau</h2>
<p>Sagar — the district headquarters of Sagar district in Madhya Pradesh, the "Heart of India" region (Sagar lies near the geographic centre of India) — a city of the legendary Sagar Lake and one of Madhya Pradesh's oldest universities (the Sagar Lake (also called Lakha Banjara Lake — named after the legendary story of Lakha Banjara, a prosperous Banjara salt trader whose 12 daughters-in-law are said to have drowned in the lake as a curse/sacrifice story; the lake is the central scenic feature of Sagar city; the artificial lake was built by the Gonds and expanded by the Bundela rulers); the Dr. Harisingh Gour University (Central University of Sagar — established 1946; one of Madhya Pradesh's premier universities, named after Dr. Harisingh Gour who donated his entire wealth to create it — one of India's most remarkable examples of personal educational philanthropy); Sagar is in the Bundelkhand plateau region (Vindhya ranges); the Rahat Fort (Bundela Rajput fort ruins, Sagar) has historical significance; the Sagar-Rewa-Satna corridor is the Vindhya heartland; the district has significant diamond-mining potential in the Panna-Sagar belt; the Bundelkhand climate is harsh (extremely hot summers, cold winters) and the region is historically known for its Chandela and Bundela warrior traditions), and a city of legendary lake and Central University — is Madhya Pradesh's most centrally geographic and educationally philanthropically named district. From birthday parties in Sagar to celebration cakes — RedHeart covers all Sagar zones: Sagar city, Rahatgarh, Banda, Shahgarh, Rehli, Khurai, Deori.</p>
<p>Our Sagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sagar, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sagar city, Rahatgarh, Banda, Shahgarh, Rehli, Khurai, Deori</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sagar?", answer: "Yes, same-day cake delivery is available across all Sagar areas — Sagar city, Rahatgarh, Banda, Shahgarh, and Rehli — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sagar delivery." },
      { question: "Do you deliver midnight cakes in Sagar?", answer: "Yes, midnight birthday cake delivery is available across Sagar city zones." }
    ]
  },

  "rewa": {
    cityName: "Rewa",
    metaTitle: "Cake Delivery in Rewa | White Tiger Origin Vindhya Waterfalls Madhya Pradesh | RedHeart",
    metaDescription: "Order cakes online in Rewa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rewa",
    metaKeyword: "cake delivery rewa, order cake online rewa, birthday cake rewa, custom cake rewa, same day cake delivery rewa White Tiger Mohan Rewa Maharaja Govindgarh Palace Bandhavgarh adjacent Vindhya Plateau Sone River Purvanchal Madhya Pradesh",
    footerContent: `
<h2>Cake Delivery in Rewa — White Tiger's Birthplace, Govindgarh Palace, Keoti-Bahuti Vindhya Waterfalls</h2>
<p>Rewa — the district headquarters of Rewa district in Madhya Pradesh, the royal seat of the former Rewa Principality — home to one of the most extraordinary chapters in wildlife history — the birthplace of the white tiger (the White Tiger "Mohan" — the first white tiger captured alive in history — was caught in Rewa's Bandhavgarh area (Govindgarh forests) in 1951 by Maharaja Martand Singh of Rewa, when Mohan was a 9-month-old cub; all white tigers in the world today (in captivity) are descendants of Mohan; Mohan lived in the Govindgarh Palace for over 20 years; the white tiger (not albino — leucistic Bengal Tiger with white-and-dark stripes and blue eyes) was exclusively from Rewa's forests; Maharaja Martand Singh of Rewa gifted white tigers to zoos around the world, including the Smithsonian; Rewa's white tiger legacy is one of the most extraordinary wildlife stories of the 20th century; the Govindgarh Lake and Palace (Rewa Maharajas' summer retreat) is a heritage complex near Rewa city; the Keoti Falls (98m — one of Madhya Pradesh's tallest waterfalls) and Bahuti Falls (198m — one of India's tallest waterfalls, on the Mahana River, 68 km from Rewa) are in the Rewa district; the Sone River (Son River — a major Ganges tributary) originates in the Amarkantak area of Rewa division; the Rewa Cement Plant and the Vindhya Hills landscape characterise the district), and a city of white tiger legacy and Vindhya waterfall grandeur — is Madhya Pradesh's most faunal-leucistically white-tiger-original and waterfall-tallest plateau district. From birthday parties in Rewa to celebration cakes — RedHeart covers all Rewa zones: Rewa city, Sidhi, Satna adjacent, Teonthar, Hanumana, Mangawan, Gurh.</p>
<p>Our Rewa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant White Tiger Mohan / Govindgarh Palace / Bahuti Falls India Tallest / Vindhya Plateau-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewa, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewa city, Sidhi, Teonthar, Hanumana, Mangawan, Gurh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, White Tiger Fondant, Bahuti Falls Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rewa?", answer: "Yes, same-day cake delivery is available across all Rewa areas — Rewa city, Sidhi, Teonthar, Hanumana, and Mangawan — for orders placed before 3 PM." },
      { question: "Do you have White Tiger Mohan and Bahuti Falls-themed cakes?", answer: "Yes! Mohan the White Tiger (captured alive 1951 in Rewa's Govindgarh forests by Maharaja Martand Singh — all white tigers in captivity globally are his descendants; he lived in Govindgarh Palace for 20+ years) and Bahuti Falls (198m — one of India's tallest waterfalls in Rewa district) inspire our most faunally leucistic and waterfalledly towering Rewa fondant cakes." },
      { question: "Are eggless cakes available in Rewa?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rewa delivery." }
    ]
  },

  "bhavnagar": {
    cityName: "Bhavnagar",
    metaTitle: "Cake Delivery in Bhavnagar | Alang Shipbreaking Blackbuck Gir Gateway Gujarat | RedHeart",
    metaDescription: "Order cakes online in Bhavnagar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bhavnagar",
    metaKeyword: "cake delivery bhavnagar, order cake online bhavnagar, birthday cake bhavnagar, custom cake bhavnagar, same day cake delivery bhavnagar Alang ship breaking world largest Blackbuck Velavadar Gir Lion Gujarat Saurashtra",
    footerContent: `
<h2>Cake Delivery in Bhavnagar — Alang's World Largest Shipbreaking Yard, Velavadar Blackbuck Sanctuary, and Saurashtra's Royal City</h2>
<p>Bhavnagar — the district headquarters of Bhavnagar district in Gujarat, the headquarters of the former Bhavnagar princely state and one of Saurashtra's most commercially significant cities (the Alang Shipbreaking Yard (40 km from Bhavnagar) — the world's largest ship recycling/shipbreaking facility; Alang beach is where decommissioned ocean liners, tankers, and cargo ships (from around the world — including ex-US Navy ships, European cruise liners) are beached on the high tide and dismantled by manual labour; Alang processes 40-50% of the world's total scrapped ships by tonnage; it is one of the world's most extraordinary and surreal industrial landscapes — massive ships run aground on a mudflat beach, cut by workers with blowtorches; the Velavadar National Park (Blackbuck Sanctuary — 34 km from Bhavnagar) is home to one of the densest populations of the Indian Blackbuck (Antilope cervicapra) in India; the Velavadar grasslands host wintering harrier hawks (the largest congregation of harriers anywhere in the world — Pallid Harrier, Montagu's Harrier, Hen Harrier); Maharaja Krishnakumar Sinhji Bhavnagar was one of India's most famous cricket-playing royals; the Takhteshwar Temple (hilltop panoramic Shiva temple in Bhavnagar city); Bhavnagar's famous Ganthiya (fried chickpea flour snack) and the local Saurashtra cuisine; the Bhavnagar-Palitana corridor — Palitana (Shatrunjaya hills — 3500 Jain temples, the world's largest Jain pilgrimage site — 900+ temples inscribed on a hilltop) is 50 km from Bhavnagar), and a city of world's largest ship graveyard and blackbuck grasslands — is Gujarat's most maritimely ship-recycling and faunally blackbuck-grassed Saurashtra city. From birthday parties in Bhavnagar to celebration cakes — RedHeart covers all Bhavnagar zones: Bhavnagar city, Palitana, Sihor, Mahuva, Gariadhar, Talaja, Ghogha.</p>
<p>Our Bhavnagar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Alang Shipbreaking World Largest / Velavadar Blackbuck Sanctuary / Palitana Jain 3500 Temples / Takhteshwar Temple-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhavnagar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhavnagar city, Palitana, Sihor, Mahuva, Gariadhar, Talaja, Ghogha, Alang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Alang Shipbreaking Fondant, Velavadar Blackbuck Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhavnagar?", answer: "Yes, same-day cake delivery is available across all Bhavnagar areas — Bhavnagar city, Palitana, Sihor, Mahuva, and Talaja — for orders placed before 3 PM." },
      { question: "Do you have Alang Shipbreaking and Velavadar Blackbuck-themed cakes?", answer: "Yes! The Alang Shipbreaking Yard (the world's largest ship recycling facility — massive ocean liners beached at high tide and dismantled by hand; 40-50% of the world's scrapped ships processed here) and the Velavadar Blackbuck National Park (densest blackbuck population + the world's largest congregation of wintering harrier hawks) inspire our most industrially maritime and wildlife-grassed Bhavnagar fondant cakes." },
      { question: "Are eggless cakes available in Bhavnagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhavnagar delivery." }
    ]
  },

  "junagadh": {
    cityName: "Junagadh",
    metaTitle: "Cake Delivery in Junagadh | Girnar Ashoka Edicts Gir Lion Gujarat | RedHeart",
    metaDescription: "Order cakes online in Junagadh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Junagadh",
    metaKeyword: "cake delivery junagadh, order cake online junagadh, birthday cake junagadh, custom cake junagadh, same day cake delivery junagadh Girnar Mountain Ashoka Rock Edicts Gir Forest Lion Navanathnath Somnath gateway Gujarat Saurashtra Kesar Mango",
    footerContent: `
<h2>Cake Delivery in Junagadh — Girnar's Ashoka Edicts, Gir Forest Lions, Kesar Mango, and Saurashtra's Ancient Royal City</h2>
<p>Junagadh — the district headquarters of Junagadh district in Gujarat, one of Saurashtra's oldest and most historically layered cities — gateway to the Gir Forest and ancient Indian royal traditions (the Girnar Mountain (1,117m — the most sacred mountain in Saurashtra, with 866 temples in a series of peaks; the 5-day Kartik Purnima Girnar Lili Parikrama (encircling the mountain) draws hundreds of thousands of pilgrims) — the most revered Jain pilgrimage in Gujarat (Neminath Jain temple, 1 km from the summit), the most sacred Shaivite site (Gorakhnath Peak — Nath yogic tradition), and home to the most significant rock inscription cluster in India: the Ashoka Girnar Rock Edicts (Pillar edicts from 3rd century BCE — 14 major edicts of Ashoka, inscribed in Brahmi script on a massive boulder, among the first concrete evidence of the Mauryan Empire; the boulder has edicts added by Rudradaman I of the Western Satraps (150 CE) and Skandagupta of the Gupta dynasty (455 CE) on the same rock); the Gir National Park (Junagadh-Amreli, 1412 sq km) — the only natural habitat of the Asiatic Lion (Panthera leo persica) on Earth; the Asiatic lion was down to 20 in 1900 and has recovered to 600+ today through conservation; the Junagadh Kesar Mango (GI — the Kesar variety of mango from the red laterite soils of the Saurashtra foothills — distinctively sweet, orange-pulped, the "Queen of Mangoes"; Junagadh is the primary market for Kesar mangoes), and a city of Ashoka's oldest edicts and the last wild Asian lion — is Gujarat's most historically inscribed and faunally lion-exclusively guarded city. From birthday parties in Junagadh to celebration cakes — RedHeart covers all Junagadh zones: Junagadh city, Keshod, Veraval, Mangrol, Mendarda, Vanthali, Bhesan.</p>
<p>Our Junagadh cake range: Chocolate, Kesar Mango (GI!), Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Gir Asiatic Lion / Girnar Ashoka Rock Edicts / Kesar Mango GI / Neminath Jain Girnar-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Junagadh, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Junagadh city, Keshod, Veraval, Mangrol, Mendarda, Vanthali, Bhesan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar Mango (GI), Chocolate, Gir Lion Fondant, Girnar Ashoka Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Junagadh?", answer: "Yes, same-day cake delivery is available across all Junagadh areas — Junagadh city, Keshod, Veraval, Mangrol, and Mendarda — for orders placed before 3 PM." },
      { question: "Do you have GI Kesar Mango and Gir Asiatic Lion-themed cakes?", answer: "Yes! The GI Kesar Mango (the 'Queen of Mangoes' — sweet orange-pulped variety from Junagadh's laterite soils; named Kesar for its saffron-like colour) and the Gir Forest Asiatic Lion (the only wild population on Earth — down to 20 in 1900, now 600+ through conservation at Gir National Park) inspire our most mangoly royal and lionishly conservation-triumphant Junagadh fondant cakes." },
      { question: "Are eggless cakes available in Junagadh?", answer: "Yes, all flavours — Kesar Mango, Chocolate, Black Forest, Red Velvet — are available in eggless variants for Junagadh delivery." }
    ]
  },

  "anand": {
    cityName: "Anand",
    metaTitle: "Cake Delivery in Anand | Amul Dairy White Revolution Kaira Gujarat | RedHeart",
    metaDescription: "Order cakes online in Anand. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Anand",
    metaKeyword: "cake delivery anand, order cake online anand, birthday cake anand, custom cake anand, same day cake delivery anand Amul Dairy White Revolution Verghese Kurien Gujarat Cooperative Milk Kaira Kheda",
    footerContent: `
<h2>Cake Delivery in Anand — Amul's White Revolution, Verghese Kurien's Cooperative Legacy, and Gujarat's Dairy Capital</h2>
<p>Anand — the district headquarters of Anand district in Gujarat (separated from Kheda district in 1997), one of the most globally impactful small cities in India — the birthplace of the White Revolution and India's most famous brand (the Amul (Anand Milk Union Limited) — founded in 1946 in Anand under the Kaira District Cooperative Milk Producers' Union — is India's largest food brand and one of the world's largest dairy cooperatives; the White Revolution (Operation Flood — 1970 to 1996) was designed and led by Dr. Verghese Kurien ("Father of the White Revolution", India's "Milkman"), who was based in Anand; the White Revolution transformed India from a milk-deficient country to the world's largest milk producer in 20 years; the NDDB (National Dairy Development Board) — which implemented Operation Flood through replication of the Amul cooperative model across India — was headquartered in Anand; the Amul Dairy in Anand (the original cooperative building and processing plant — one can still tour the Amul Dairy) is a pilgrimage for management students worldwide; Amul's iconic "Amul Girl" (the blue-haired cartoon girl in a polka-dot dress with the witty topical ads running since 1966 — one of the longest-running advertising campaigns in the world) is a beloved Indian cultural icon; the IRMA (Institute of Rural Management Anand) — founded by Dr. Kurien — is one of India's premier management institutes for rural development; Sardar Vallabhbhai Patel (India's first Deputy PM and Home Minister — the "Iron Man of India" who integrated 562 princely states into independent India) was born in Nadiad, Anand district (originally Kheda district)), and a city of the world's White Revolution and iron-man of India birthplace — is Gujarat's most cooperatively dairy-revolutionary and Patel-birthplace district. From birthday parties in Anand to celebration cakes — RedHeart covers all Anand zones: Anand city, Vallabh Vidyanagar, Petlad, Umreth, Khambhat, Borsad, Nadiad adjacent.</p>
<p>Our Anand cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Amul Dairy White Revolution / Verghese Kurien Operation Flood / Amul Girl Iconic / Sardar Patel Birthplace Kaira-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anand, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anand city, Vallabh Vidyanagar, Petlad, Umreth, Khambhat, Borsad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Amul White Revolution Fondant, Amul Girl Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Anand?", answer: "Yes, same-day cake delivery is available across all Anand areas — Anand city, Vallabh Vidyanagar, Petlad, Umreth, and Khambhat — for orders placed before 3 PM." },
      { question: "Do you have Amul White Revolution and Amul Girl Iconic-themed cakes?", answer: "Yes! The Amul Cooperative (founded Anand 1946 — Verghese Kurien's White Revolution / Operation Flood transformed India into the world's largest milk producer in 20 years; Amul = India's largest food brand) and the iconic Amul Girl (blue-haired polka-dot cartoon with witty topical ads running since 1966 — one of the world's longest-running ad campaigns) inspire our most cooperatively dairy-revolutionary and iconically topical Anand fondant cakes." },
      { question: "Are eggless cakes available in Anand?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Anand delivery." }
    ]
  },

  "porbandar": {
    cityName: "Porbandar",
    metaTitle: "Cake Delivery in Porbandar | Gandhi Birthplace Sudama Temple Gujarat | RedHeart",
    metaDescription: "Order cakes online in Porbandar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Porbandar",
    metaKeyword: "cake delivery porbandar, order cake online porbandar, birthday cake porbandar, custom cake porbandar, same day cake delivery porbandar Gandhi Mahatma birthplace Kirti Mandir Sudama Temple Arabian Sea Gujarat Saurashtra",
    footerContent: `
<h2>Cake Delivery in Porbandar — Mahatma Gandhi's Birthplace, Sudama Temple, and Gujarat's Coastal Heritage</h2>
<p>Porbandar — the district headquarters of Porbandar district in Gujarat, one of India's most pilgrimage-significant and historically famous small coastal cities — the birthplace of Mahatma Gandhi (Mohandas Karamchand Gandhi — "Mahatma Gandhi" or the "Father of the Nation" — was born on October 2, 1869 (Gandhi Jayanti — national holiday) in Porbandar, in the house now known as Kirti Mandir (the birthplace memorial has been converted into a grand heritage memorial complex with Gandhi memorabilia, manuscripts, and photos); October 2 is also now celebrated globally as the International Day of Non-Violence by the United Nations; Gandhi spent his early childhood in Porbandar; his father was the Diwan (Prime Minister) of the Porbandar State; the Sudama Temple (in Porbandar — one of Gujarat's most unique temples) commemorates Sudama, the childhood friend of Lord Krishna in the Srimad Bhagavatam; the story of Sudama's friendship with Krishna — the humble Brahmin who came to Dwarka with only a handful of beaten rice as a gift and received a palace in return — is the touchstone of seva (selfless service) in Hindu mythology; Porbandar is on the Arabian Sea coast; the Porbandar Bird Sanctuary has flamingos; the Barda Hills Wildlife Sanctuary (near Porbandar) has leopards and sloth bears; the Madhavpur Mela (near Porbandar — the annual festival commemorating the marriage of Lord Krishna and Rukmini, attended by tribal communities from Arunachal Pradesh, Nagaland, and Northeast India who are believed to descend from Rukmini's tribe) is a culturally extraordinary festival linking Gujarat to Northeast India), and a city of Gandhi's birthplace and Sudama's devotion — is Gujarat's most nationally foundingly significant and friendship-devotionally Sudama coastal city. From birthday parties in Porbandar to celebration cakes — RedHeart covers all Porbandar zones: Porbandar city, Kutiyana, Ranavav, Chhaya, Navibandar.</p>
<p>Our Porbandar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Gandhi Birthplace Kirti Mandir / Sudama Krishna Friendship / Porbandar Arabian Sea / Madhavpur Mela-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Porbandar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Porbandar city, Kutiyana, Ranavav, Chhaya, Navibandar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gandhi Birthplace Fondant, Sudama Temple Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Porbandar?", answer: "Yes, same-day cake delivery is available across all Porbandar areas — Porbandar city, Kutiyana, Ranavav, and Chhaya — for orders placed before 3 PM." },
      { question: "Do you have Mahatma Gandhi Birthplace and Sudama Temple-themed cakes?", answer: "Yes! Mahatma Gandhi's birthplace (Kirti Mandir, Porbandar — October 2, 1869; now a grand memorial; UN International Day of Non-Violence) and the Sudama Temple (commemorating Krishna's childhood friend Sudama — the humble Brahmin's beaten-rice gift and the palace he received in return — the ultimate story of seva and divine friendship) inspire our most nationally foundingly and devotionally friendship-storied Porbandar fondant cakes." },
      { question: "Are eggless cakes available in Porbandar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Porbandar delivery." }
    ]
  },

  "bardhaman": {
    cityName: "Bardhaman",
    metaTitle: "Cake Delivery in Bardhaman | Sitabhog Mihidana Sweets Coal West Bengal | RedHeart",
    metaDescription: "Order cakes online in Bardhaman. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bardhaman (Burdwan)",
    metaKeyword: "cake delivery bardhaman, order cake online bardhaman, birthday cake bardhaman, custom cake bardhaman, same day cake delivery bardhaman Sitabhog Mihidana GI sweets coal Damodar Valley Corporation West Bengal Burdwan",
    footerContent: `
<h2>Cake Delivery in Bardhaman — GI Sitabhog-Mihidana Sweets, Damodar Valley Coal, and Bengal's Rice Bowl</h2>
<p>Bardhaman (Burdwan) — the district headquarters of Bardhaman district in West Bengal (now divided into East and West Bardhaman districts in 2017), one of West Bengal's most historically significant and economically important districts — home to GI sweets and Bengal's coal heartland (the Bardhaman Sitabhog and Mihidana (GI) — the most famous sweets of Bardhaman and two of West Bengal's most celebrated sweets; Sitabhog (small rice flour vermicelli fried and coated in sugar syrup — looks like tiny rice grain droplets; was reportedly made for a royal reception when Lord Curzon visited Bardhaman in 1904 by the halwai (sweet-maker) Bhairab Nath Das; Curzon was so impressed he gave the sweet its name "Sita's food" — Sitabhog); Mihidana (extremely fine saffron-coloured sweet made from ultra-fine rice flour — finer than any other Bengal sweet — fried and immersed in sugar syrup; Mihidana = "fine grain"); both Sitabhog and Mihidana have GI protection; the Bardhaman district (Raniganj, Asansol area) is in the Damodar Valley — the coal belt of West Bengal; the Raniganj Coalfield (the first commercial coal mine in India, 1774) and the Damodar Valley Corporation (DVC — modelled on the Tennessee Valley Authority, built after 1948 to control Damodar River floods) are in the greater Bardhaman region; Bardhaman is in the rich agricultural rice-growing belt of Bengal (the "Granary of West Bengal"); the Bardhaman Raj (the Maharaja of Bardhaman — one of the largest zamindaris in colonial Bengal), and a city of GI sweets and first Indian coal mine — is West Bengal's most sweetly Sitabhog-celebrated and coaliferly historically mined district. From birthday parties in Bardhaman to celebration cakes — RedHeart covers all Bardhaman zones: Bardhaman town, Durgapur, Asansol, Raniganj, Kalna, Katwa, Memari, Galsi.</p>
<p>Our Bardhaman cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sitabhog Mihidana GI Sweets / Damodar Valley DVC / Raniganj First Coal Mine / Bardhaman Raj Zamindari-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bardhaman, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bardhaman town, Durgapur, Asansol, Raniganj, Kalna, Katwa, Memari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sitabhog Mihidana Tribute, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bardhaman?", answer: "Yes, same-day cake delivery is available across all Bardhaman areas — Bardhaman town, Durgapur, Asansol, Raniganj, Kalna, and Katwa — for orders placed before 3 PM." },
      { question: "Do you have GI Sitabhog-Mihidana and Raniganj First Coal Mine-themed cakes?", answer: "Yes! The GI Sitabhog and Mihidana (Bardhaman's signature sweets — Sitabhog named by Lord Curzon in 1904, Mihidana made from ultra-fine rice flour in saffron syrup; both have GI protection) and the Raniganj Coalfield (first commercial coal mine in India, 1774 — with DVC's Damodar Valley scheme) inspire our most sweetly GI-celebrated and historically coaliferly Bardhaman fondant cakes." },
      { question: "Are eggless cakes available in Bardhaman?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bardhaman delivery." }
    ]
  },

  "dungarpur": {
    cityName: "Dungarpur",
    metaTitle: "Cake Delivery in Dungarpur | Vagad Dungarpur Palace Tribal Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Dungarpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dungarpur",
    metaKeyword: "cake delivery dungarpur, order cake online dungarpur, birthday cake dungarpur, custom cake dungarpur, same day cake delivery dungarpur Dungarpur Palace Juna Mahal Gaib Sagar Lake Vagad region Bhil Rajasthan tribal Gujarat border",
    footerContent: `
<h2>Cake Delivery in Dungarpur — Juna Mahal's Mirror Palace, Gaib Sagar Lake, and Vagad's Bhil Tribal Heritage</h2>
<p>Dungarpur — the district headquarters of Dungarpur district in Rajasthan, one of the most underrated and scenically extraordinary small kingdoms of southern Rajasthan — the "City of Hillocks" (Dungar = hillock in Bhil) and a city of exquisite palace architecture (the Juna Mahal (Old Palace — 13th century CE — Dungarpur's most extraordinary building; a 7-storey palace with interiors decorated in extraordinary Rajput-style glass mosaic work, mirror work, and frescoes depicting Krishna's life; considered one of the finest examples of Rajputana interior decorative art, largely unknown and uncrowded compared to more famous palaces; maintained by the Dungarpur royal family, the Rawals of Dungarpur); the Udai Bilas Palace (19th century, on the Gaib Sagar Lake shore — a romantic heritage hotel of the royal family; the pareva stone (blue-grey schist of Dungarpur) gives the palace and town buildings their unique blue-grey shimmer; the Gaib Sagar Lake (in the heart of Dungarpur town, with water temples floating on its edge including the Badal Mahal, Shrinathji Mandir) is Dungarpur's scenic centrepiece; the Vagad region (Dungarpur-Banswara area — southern Rajasthan bordering Gujarat and MP) is a culturally distinct tribal region of Rajasthan, home to the Bhil and Bhil Mina tribal communities — one of Rajasthan's most significant tribal populations; the Baneshwar Dham (Dungarpur-Banswara border — the Triveni Sangam of Som, Mahi, and Jakham rivers; the Baneshwar tribal fair — January/February — one of India's largest tribal fairs; the "Tribal Kumbh of Rajasthan"), and a city of mirror mosaic palace and Vagad tribal fair — is Rajasthan's most aesthetically mirror-mosaiced and tribally Bhil Baneshwar Kumbh-gathering district. From birthday parties in Dungarpur to celebration cakes — RedHeart covers all Dungarpur zones: Dungarpur city, Sagwara, Bichhiwara, Aspur, Chikhali, Simalwara.</p>
<p>Our Dungarpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Juna Mahal Mirror Palace / Gaib Sagar Lake Palace / Baneshwar Tribal Kumbh / Vagad Bhil Tribal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dungarpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dungarpur city, Sagwara, Bichhiwara, Aspur, Chikhali, Simalwara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Juna Mahal Mirror Palace Fondant, Gaib Sagar Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dungarpur?", answer: "Yes, same-day cake delivery is available across all Dungarpur areas — Dungarpur city, Sagwara, Bichhiwara, Aspur, and Chikhali — for orders placed before 3 PM." },
      { question: "Do you have Juna Mahal Mirror Palace and Baneshwar Tribal Kumbh-themed cakes?", answer: "Yes! The Juna Mahal (13th century 7-storey palace with extraordinary Rajput glass mosaic-mirror-fresco interiors depicting Krishna's life — one of Rajputana's finest interior artworks, largely undiscovered) and the Baneshwar Tribal Fair (the 'Tribal Kumbh of Rajasthan' — January/February at the Triveni Sangam of Som-Mahi-Jakham, one of India's largest tribal fairs) inspire our most mirror-mosaicedly royal and tribally Kumbh-celebratory Dungarpur fondant cakes." },
      { question: "Are eggless cakes available in Dungarpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dungarpur delivery." }
    ]
  },

  "banswara": {
    cityName: "Banswara",
    metaTitle: "Cake Delivery in Banswara | Hundred Islands Mahi River Tribal Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Banswara. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Banswara",
    metaKeyword: "cake delivery banswara, order cake online banswara, birthday cake banswara, custom cake banswara, same day cake delivery banswara Hundred Islands Mahi River Banswara Lake Bhil tribal Vagad Rajasthan Gujarat MP border",
    footerContent: `
<h2>Cake Delivery in Banswara — City of Hundred Islands, Mahi River Cascades, and Vagad's Bhil Tribal Heartland</h2>
<p>Banswara — the district headquarters of Banswara district in Rajasthan, the "City of Hundred Islands" — the southernmost district of Rajasthan and the most tribally Bhil of all Rajasthan districts (Banswara is called the "City of Hundred Islands" because the Mahi River (the Mahi — a sacred river, one of the major rivers of western India — originates in Vindhyas near Sardarpur MP, flows through Banswara into Gujarat where it drains into the Gulf of Khambhat) and its tributary streams create numerous small islands in the Banswara area; the Mahi Bajaj Sagar Dam (on the Mahi River, near Banswara city) created a large reservoir that has submerged areas and created still more islands; the dam provides irrigation and drinking water to Banswara and parts of Gujarat; the Banswara district is the most tribally homogeneous district in Rajasthan — over 70% of the population are Bhil (one of India's oldest tribal communities, recorded in the Mahabharata and associated with Eklavya — the archer who cut his own thumb as guru-dakshina); the Tripura Sundari Temple (near Talwara, Banswara — a Shakti Peeth with ancient Tantric significance, surrounded by forests) is a significant pilgrimage; the Anand Sagar Lake (artificial lake in Banswara town) and the local scenic landscapes of Mahi river valley; the Vagad region (Dungarpur-Banswara) hosts the Baneshwar Fair — the 'Tribal Kumbh of Rajasthan'; the Navagrahamandir (Arthuna village — a cluster of 11th century Paramara temples, one of the least-known but finest temple complexes in Rajasthan), and a city of Mahi islands and Bhil-Eklavya tribal homeland — is Rajasthan's most tribally Bhil-homogeneous and river-hundred-islands-scattered southern district. From birthday parties in Banswara to celebration cakes — RedHeart covers all Banswara zones: Banswara city, Ghatol, Bagidora, Kushalgarh, Anandpuri, Talwara, Arthuna.</p>
<p>Our Banswara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mahi Hundred Islands / Tripura Sundari Temple / Mahi Bajaj Sagar Dam / Bhil Tribal Eklavya-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banswara, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banswara city, Ghatol, Bagidora, Kushalgarh, Anandpuri, Talwara, Arthuna</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mahi Hundred Islands Fondant, Tripura Sundari Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Banswara?", answer: "Yes, same-day cake delivery is available across all Banswara areas — Banswara city, Ghatol, Bagidora, Kushalgarh, and Talwara — for orders placed before 3 PM." },
      { question: "Do you have Mahi Hundred Islands and Bhil Tribal heritage-themed cakes?", answer: "Yes! Banswara's 'City of Hundred Islands' (the Mahi River's numerous island-studded course through the Banswara area) and the Bhil tribal heritage (70%+ Bhil population — one of India's oldest tribal communities associated with Eklavya's thumb sacrifice; the Tripura Sundari Shakti Peeth in the forests) inspire our most river-island-scattered and tribally Eklavya-thumb-storied Banswara fondant cakes." },
      { question: "Are eggless cakes available in Banswara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Banswara delivery." }
    ]
  },

  "jalor": {
    cityName: "Jalor",
    metaTitle: "Cake Delivery in Jalor | Jalore Fort Parmara Cannauj Rajasthan Golden City | RedHeart",
    metaDescription: "Order cakes online in Jalor. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jalor (Jalore)",
    metaKeyword: "cake delivery jalor, order cake online jalor, birthday cake jalor, custom cake jalor, same day cake delivery jalor Jalore Fort Kanhadade Parmara Topkhana Mosque golden sandstone Suwana Granite Rajasthan",
    footerContent: `
<h2>Cake Delivery in Jalor — Jalore Fort's Kanhadade Epic, Topkhana Mosque, and Rajasthan's Granite Belt</h2>
<p>Jalor (Jalore) — the district headquarters of Jalor district in Rajasthan, a city of medieval fortress glory and extraordinary resistance history — home to one of Rajasthan's most compelling historical epics (the Jalore Fort (Suvarnagiridurga — "Golden Peak Fort") on a hill 336m above Jalore town is one of Rajasthan's most strategically formidable forts; the Kanhadade Prabandha (written 1455 CE by Padmanabha — an epic historical poem in Apabhramsha about the siege and fall of Jalore Fort in 1311-1312 CE) tells the story of the Chahamana (Chauhan) ruler Kanhadadeva/Kanhadade who refused to surrender the Shivalinga from the Jalore temple to the Delhi Sultanate's Alauddin Khilji's general; the Jalore Siege (1311-12) ended with the Rajput defenders dying in battle (jauhar by the women) rather than submit; Kanhadade is Rajasthan's literary embodiment of Rajput resistance to the Sultanate; the Topkhana Mosque (built by Alauddin Khilji's forces using stones from Hindu/Jain temples they demolished — one of the few medieval mosques in Rajasthan with clear Jain/Hindu temple column recycling visible; now protected by ASI); the Jalor/Jalore Suwana Granite (the famous blue-grey "Jalore Granite" — quarried from the rocky hills around Jalore and exported internationally as a high-quality dimension stone for flooring, countertops, and monuments), and a city of Kanhadade's epic resistance and granite quarrying — is Rajasthan's most epically Chauhan-resistant and granitically exportable western district. From birthday parties in Jalor to celebration cakes — RedHeart covers all Jalor zones: Jalor city, Sanchore, Bhinmal, Ahore, Raniwara, Sayla, Bagora.</p>
<p>Our Jalor cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Jalore Fort Kanhadade Epic / Topkhana Mosque / Jalore Granite Blue-Grey / Chauhan Rajput Resistance-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalor, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalor city, Sanchore, Bhinmal, Ahore, Raniwara, Sayla, Bagora</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jalore Fort Kanhadade Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jalor?", answer: "Yes, same-day cake delivery is available across all Jalor areas — Jalor city, Sanchore, Bhinmal, Ahore, and Raniwara — for orders placed before 3 PM." },
      { question: "Do you have Jalore Fort Kanhadade Epic-themed cakes?", answer: "Yes! The Kanhadade Prabandha (the 1455 CE epic poem about Chahamana ruler Kanhadade's defence of Jalore Fort from Alauddin Khilji's siege in 1311-12 — preferring death over surrender of the Shivalinga; Rajasthan's literary masterpiece of Rajput resistance to the Sultanate) and the Topkhana Mosque (built with recycled Jain-Hindu temple columns — visible medieval religious palimpsest) inspire our most epically Chauhan-resistant Jalor fondant cakes." },
      { question: "Are eggless cakes available in Jalor?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jalor delivery." }
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
