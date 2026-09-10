// Cakes Batch 56 — 13 cities
// Punjab: Tarn Taran, Moga, Kapurthala, Shaheed Bhagat Singh Nagar (Nawanshahr), Pathankot (check)
// Odisha: Dhenkanal, Gajapati (Parlakhemundi), Nabarangpur, Khordha (Bhubaneswar check)
// Bihar: Sheikhpura, Jamui, Banka
// UP: Hamirpur UP (already done), Lalitpur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "tarn-taran": {
    cityName: "Tarn Taran",
    metaTitle: "Cake Delivery in Tarn Taran | Golden Temple Adjacent Pul Kanjri Sikh Punjab | RedHeart",
    metaDescription: "Order cakes online in Tarn Taran. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tarn Taran",
    metaKeyword: "cake delivery tarn taran, order cake online tarn taran, birthday cake tarn taran, custom cake tarn taran, same day cake delivery tarn taran Darbar Sahib Tarn Taran Sarovar Pul Kanjri Wagah Border Pakistan Punjab Amritsar border",
    footerContent: `
<h2>Cake Delivery in Tarn Taran — Tarn Taran Darbar Sahib, Wagah-Attari Border Adjacent, and Sikh Heritage</h2>
<p>Tarn Taran — the district headquarters of Tarn Taran district in Punjab (carved from Amritsar district in 2006; adjacent to Amritsar), one of the holiest Sikh cities and a district at the Pakistan border (the Tarn Taran Darbar Sahib (Tarn Taran Sahib Gurdwara) — one of the most sacred Sikh shrines; built by Guru Arjan Dev Ji (5th Sikh Guru) in 1590 CE; the Tarn Taran sarovar (holy tank) is the largest Sikh sarovar in the world (even larger than the Amritsar sarovar); the Tarn Taran sarovar has a circumference of about 660 yards and the holy dip in it is believed to cure leprosy and skin diseases (Tarn Taran = "one who swims across" or "ferry across"); the Gurdwara sits at the centre of the sarovar; the Gurbani kirtan at Tarn Taran is continuous; the Wagah-Attari Border (Tarn Taran district borders Pakistan — the Wagah Border (between India and Pakistan; the daily Beating Retreat ceremony — one of India's most watched border ceremonies; the Sadki border crossing (in Tarn Taran district) is another crossing point); the Pul Kanjri (a historic Mughal-era rest house and reservoir built by Emperor Ranjit Singh for Queen Moran Sarkar — a Muslim dancing girl whom he married; a remarkable story of religious tolerance and love; the structure is at the India-Pakistan border on the historical Grand Trunk Road); the Harike Wetland/Pattan Sahib area (the Harike Wetland where the Satluj and Beas rivers meet — one of India's most important Ramsar wetlands for migratory birds)), and a city of world's largest Sikh sarovar and Wagah border — is Punjab's most Tarn-Taran-sarovar-world's-largest and Wagah-border-Beating-Retreat Tarn Taran. From birthday parties in Tarn Taran to celebration cakes — RedHeart covers all areas: Tarn Taran city, Patti, Khem Karan, Harike, Goindwal Sahib, Khemkaran, Bhikhiwind.</p>
<p>Our Tarn Taran cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Tarn Taran Darbar Sahib Sarovar / Wagah Border / Pul Kanjri-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tarn Taran, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tarn Taran city, Patti, Khem Karan, Harike, Goindwal Sahib, Bhikhiwind</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tarn Taran Darbar Sahib Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tarn Taran?", answer: "Yes, same-day cake delivery is available across all Tarn Taran areas — Tarn Taran city, Patti, Khem Karan, Harike, and Goindwal Sahib — for orders placed before 3 PM." },
      { question: "Do you have Tarn Taran Darbar Sahib-themed cakes?", answer: "Yes! The Tarn Taran Darbar Sahib (built by Guru Arjan Dev Ji in 1590 CE; the world's largest Sikh sarovar — 660 yards circumference; larger than the Amritsar sarovar; dip believed to cure skin diseases; continuous Gurbani kirtan) inspires our most Tarn-Taran-sarovar-world's-largest fondant cakes." },
      { question: "Are eggless cakes available in Tarn Taran?", answer: "Yes, all flavours are available in eggless variants for Tarn Taran delivery." }
    ]
  },

  "moga": {
    cityName: "Moga",
    metaTitle: "Cake Delivery in Moga | Verka Milk Plant Baghapurana Punjab Industry | RedHeart",
    metaDescription: "Order cakes online in Moga. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Moga",
    metaKeyword: "cake delivery moga, order cake online moga, birthday cake moga, custom cake moga, same day cake delivery moga Verka Milk Plant dairy Baghapurana Nihang Singhs Satguru Ram Singh Namdhari Punjab",
    footerContent: `
<h2>Cake Delivery in Moga — Verka Dairy, Namdhari Sikh HQ (Sri Bhaini Sahib), and Punjab's Industrial Belt</h2>
<p>Moga — the district headquarters of Moga district in Punjab (Moga district was carved from Ferozepur district in 1992), an industrially significant Punjab district known for dairy and Namdhari Sikh heritage (the Verka Milk Plant Moga — one of Punjab's and India's most significant dairy processing plants; part of the Milkfed Punjab (Verka brand) cooperative network; Moga's dairy industry processes millions of litres of milk daily; the dairy cooperative movement in Punjab (Milkfed/Verka) is one of the most successful farmer-cooperative models in North India; Moga is also home to other industries including paper, textile; the Namdhari Sikh movement (the Namdhari Sikhs — followers of Satguru Ram Singh (1816-1885 CE) — a reform movement within Sikhism that rejects idol worship, caste distinctions, and practices vegetarianism; the Namdhari HQ is at Sri Bhaini Sahib (near Ludhiana border), but Moga district has significant Namdhari presence; the Namdharis were notable for non-violent resistance to the British (1869-1872 Kuka Movement) before Gandhi's methods; the Kuka Rebellion of 1872 — 66 Namdharis were publicly executed by being blown from cannons by the British Deputy Commissioner Cowan at Malerkotla for attacking butcher shops (cow protection); one of the most dramatic episodes of colonial resistance in Punjab; the Moga-Ferozepur agricultural belt (wheat-paddy belt; also kinnow-orange orchards)), and a city of Verka dairy cooperative and Namdhari Kuka Movement — is Punjab's most Verka-dairy-millions-litres and Namdhari-Kuka-cannon-blown-66-martyred Moga. From birthday parties in Moga to celebration cakes — RedHeart covers all Moga areas: Moga city, Baghapurana, Nihal Singh Wala, Dharamkot, Kot Ise Khan, Lodhijanan.</p>
<p>Our Moga cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Moga, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Moga city, Baghapurana, Nihal Singh Wala, Dharamkot, Kot Ise Khan, Lodhijanan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Moga?", answer: "Yes, same-day cake delivery is available across all Moga areas — Moga city, Baghapurana, Nihal Singh Wala, Dharamkot, and Kot Ise Khan — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Moga?", answer: "Yes, all flavours are available in eggless variants for Moga delivery." },
      { question: "Do you deliver midnight cakes in Moga?", answer: "Yes, midnight birthday cake delivery is available across Moga city zones." }
    ]
  },

  "kapurthala": {
    cityName: "Kapurthala",
    metaTitle: "Cake Delivery in Kapurthala | Paris of Punjab Jagatjit Palace Moorish Mosque | RedHeart",
    metaDescription: "Order cakes online in Kapurthala. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kapurthala",
    metaKeyword: "cake delivery kapurthala, order cake online kapurthala, birthday cake kapurthala, custom cake kapurthala, same day cake delivery kapurthala Paris of Punjab Jagatjit Palace Moorish Mosque Maharaja Jagatjit Singh Beas River NDA Punjab",
    footerContent: `
<h2>Cake Delivery in Kapurthala — "Paris of Punjab", Jagatjit Palace, Moorish Mosque, and Maharaja's European Dream</h2>
<p>Kapurthala — the district headquarters of Kapurthala district in Punjab, one of India's most architecturally distinctive small cities — known as the "Paris of Punjab" for its extraordinary French-influenced architecture built by a Maharaja who fell in love with Europe (the Maharaja Jagatjit Singh (1872-1949) of Kapurthala — the ruler of the Kapurthala princely state; he visited Europe many times and was captivated by French architecture; he commissioned French architect M. Marcel von Stavel to design his palace in the style of Versailles; the Jagatjit Palace (Elysee Palace) — built 1900-1908 CE; a French château in Punjab; the palace is now the Sainik School Kapurthala (founded 1961 — one of India's first Sainik Schools; produces military officers); the Moorish Mosque (Moorish Mosque of Kapurthala — built 1930 by Maharaja Jagatjit Singh inspired by the Grand Mosque of Marrakech, Morocco; white marble and blue tiles; a remarkable piece of Moorish Revival architecture in Punjab); the Panj Tirath Gurdwara (one of the most historic Gurdwaras in Kapurthala associated with Guru Nanak Dev Ji's visit); the Kanjli Wetland (Ramsar Wetland — a protected bird sanctuary on the Bein River); Kapurthala is on the Beas River; the NDA-adjacent area; the town's gardens, European buildings, and tree-lined avenues justify the "Paris of Punjab" name), and a city of French Versailles-inspired palace and Moorish mosque in Punjab — is Punjab's most Jagatjit-Palace-French-Versailles and Moorish-Mosque-Marrakech-inspired Paris-of-Punjab. From birthday parties in Kapurthala to celebration cakes — RedHeart covers all Kapurthala areas: Kapurthala city, Phagwara, Sultanpur Lodhi, Nakodar, Bhulath, Dhilwan.</p>
<p>Our Kapurthala cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Jagatjit Palace French Versailles / Moorish Mosque Marrakech / Paris of Punjab-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kapurthala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kapurthala city, Phagwara, Sultanpur Lodhi, Nakodar, Bhulath, Dhilwan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Jagatjit Palace Fondant, Moorish Mosque Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kapurthala?", answer: "Yes, same-day cake delivery is available across all Kapurthala areas — Kapurthala city, Phagwara, Sultanpur Lodhi, Nakodar, and Bhulath — for orders placed before 3 PM." },
      { question: "Do you have Jagatjit Palace and Moorish Mosque-themed cakes?", answer: "Yes! The Jagatjit Palace (1900-1908; French Versailles-style château in Punjab by Maharaja Jagatjit Singh; now Sainik School Kapurthala) and the Moorish Mosque (1930; inspired by the Grand Mosque of Marrakech; white marble and blue tiles) — earning Kapurthala the title 'Paris of Punjab' — inspire our most Jagatjit-Versailles-chateau and Moorish-Marrakech fondant cakes." },
      { question: "Are eggless cakes available in Kapurthala?", answer: "Yes, all flavours are available in eggless variants for Kapurthala delivery." }
    ]
  },

  "nawanshahr": {
    cityName: "Nawanshahr",
    metaTitle: "Cake Delivery in Nawanshahr SBS Nagar | Bhagat Singh District Punjab | RedHeart",
    metaDescription: "Order cakes online in Nawanshahr (Shaheed Bhagat Singh Nagar). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nawanshahr (Shaheed Bhagat Singh Nagar)",
    metaKeyword: "cake delivery nawanshahr sbs nagar, order cake online nawanshahr, birthday cake nawanshahr, custom cake nawanshahr, same day cake delivery nawanshahr Shaheed Bhagat Singh Nagar Banga Hoshiarpur Khatkar Kalan Punjab",
    footerContent: `
<h2>Cake Delivery in Nawanshahr (Shaheed Bhagat Singh Nagar) — Bhagat Singh's Ancestral Village and Punjab's Revolutionary Heritage</h2>
<p>Nawanshahr (Shaheed Bhagat Singh Nagar) — the district headquarters of Shaheed Bhagat Singh Nagar (SBS Nagar) district in Punjab (renamed from Nawanshahr in 2008 to honour Bhagat Singh), a district directly connected to India's most beloved revolutionary (Bhagat Singh (1907-1931) — one of India's most celebrated freedom fighters; born on September 28, 1907 at Banga, Lyallpur (now Pakistan) to a family from Khatkar Kalan village in Nawanshahr district; the Khatkar Kalan village is the ancestral home of Bhagat Singh — his family's haveli is still preserved and is a national memorial; Bhagat Singh threw a bomb in the Central Legislative Assembly in Delhi (April 8, 1929) with Batukeshwar Dutt to protest repressive labour legislation (they surrendered, refusing to flee; "Inquilab Zindabad!"); he was also accused in the Lahore Conspiracy Case (shooting of British police officer J.P. Saunders in 1928 to avenge the death of Lala Lajpat Rai); Bhagat Singh was hanged on March 23, 1931 at age 23 alongside Rajguru and Sukhdev at Lahore Central Jail; "Sarfaroshi ki tamanna ab hamare dil mein hai"; the Bhagat Singh museum and memorial at Khatkar Kalan; the Hussainiwala National Martyrs Memorial (across the Ferozepur border — where Bhagat Singh, Rajguru, Sukhdev's remains were cremated)), and a city of Bhagat Singh's ancestral Khatkar Kalan and Punjab's revolutionary heritage — is Punjab's most Bhagat-Singh-Khatkar-Kalan-ancestral and Inquilab-Zindabad-23-years-hanged district. From birthday parties in Nawanshahr to celebration cakes — RedHeart covers all areas: Nawanshahr city, Banga, Garhshankar, Rahon, Nangal Dam, Mukerian adjacent, Balachour.</p>
<p>Our Nawanshahr cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bhagat Singh Khatkar Kalan / Inquilab Zindabad Revolutionary / SBS Nagar Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawanshahr (SBS Nagar), Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawanshahr, Banga, Garhshankar, Rahon, Nangal Dam, Balachour</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bhagat Singh Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nawanshahr (SBS Nagar)?", answer: "Yes, same-day cake delivery is available across all Nawanshahr areas — Nawanshahr city, Banga, Garhshankar, Rahon, and Nangal Dam — for orders placed before 3 PM." },
      { question: "Do you have Bhagat Singh Khatkar Kalan-themed cakes?", answer: "Yes! Bhagat Singh (1907-1931 — born Banga, ancestral village Khatkar Kalan in this district; threw a bomb in the Central Legislative Assembly shouting 'Inquilab Zindabad!'; hanged at 23 alongside Rajguru and Sukhdev on March 23, 1931; the Khatkar Kalan memorial is preserved here) inspires our most Bhagat-Singh-Inquilab-23-years fondant cakes." },
      { question: "Are eggless cakes available in Nawanshahr?", answer: "Yes, all flavours are available in eggless variants for Nawanshahr (SBS Nagar) delivery." }
    ]
  },

  "dhenkanal": {
    cityName: "Dhenkanal",
    metaTitle: "Cake Delivery in Dhenkanal | Kapilash Temple Brahmani River Odisha | RedHeart",
    metaDescription: "Order cakes online in Dhenkanal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dhenkanal",
    metaKeyword: "cake delivery dhenkanal, order cake online dhenkanal, birthday cake dhenkanal, custom cake dhenkanal, same day cake delivery dhenkanal Kapilash Temple Chandrasekhar Mahadev Brahmani River Joranda Mahima Panth Odisha",
    footerContent: `
<h2>Cake Delivery in Dhenkanal — Kapilash Temple (Chandrasekhar Mahadev), Joranda Mahima Dharma, and Brahmani River</h2>
<p>Dhenkanal — the district headquarters of Dhenkanal district in Odisha (central Odisha), a district of sacred hills, river valleys, and a distinctive indigenous religion (the Kapilash Temple (Chandrasekhar Mahadev) — atop the Kapilash Hill (881 m) in Dhenkanal district; the Chandrasekhar Shiva temple is one of Odisha's most important Shiva temples; 1,253 steps lead to the summit; the hill has dense forest and a resident population of langur monkeys; the annual Maha Shivaratri celebrations draw hundreds of thousands of pilgrims; the Saptasajya Hills are adjacent (another sacred hill complex with the Goddess Saptasajya shrine); the Joranda (Dhenkanal district) — the headquarters of the Mahima Dharma/Mahima Panth — a 19th-century Odishan religious reform movement founded by Mahima Swami (Mahima Gosain) around 1860 CE; Mahima Dharma is a monotheistic religion that rejects idol worship, caste distinctions, and temple rituals; it is sometimes called "the Odisha Reformist movement"; the Mahima Panth has millions of followers in Odisha; the Joranda monastery is the main seat of the sect; the Brahmani River (flows through Dhenkanal district — one of Odisha's major rivers; the Rengali Reservoir on the Brahmani provides irrigation and power; coal power plants along the Brahmani)), and a city of Kapilash Temple Shivaratri and Mahima Dharma headquarters — is Odisha's most Kapilash-1253-steps-Chandrasekhar and Mahima-Dharma-Joranda-monotheistic-reform Dhenkanal. From birthday parties in Dhenkanal to celebration cakes — RedHeart covers all areas: Dhenkanal city, Kamakhyanagar, Hindol, Bhuban, Parjang, Gandia, Odapada.</p>
<p>Our Dhenkanal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kapilash Temple Chandrasekhar / Saptasajya Hill / Brahmani River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhenkanal, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhenkanal city, Kamakhyanagar, Hindol, Bhuban, Parjang, Gandia, Odapada</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kapilash Temple Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dhenkanal?", answer: "Yes, same-day cake delivery is available across all Dhenkanal areas — Dhenkanal city, Kamakhyanagar, Hindol, Bhuban, and Parjang — for orders placed before 3 PM." },
      { question: "Do you have Kapilash Temple-themed cakes?", answer: "Yes! The Kapilash Temple (Chandrasekhar Mahadev atop Kapilash Hill 881 m; 1,253 steps; one of Odisha's most important Shiva temples; hundreds of thousands of Maha Shivaratri pilgrims; langur-forested hill) inspires our most Kapilash-1253-steps-Chandrasekhar fondant cakes." },
      { question: "Are eggless cakes available in Dhenkanal?", answer: "Yes, all flavours are available in eggless variants for Dhenkanal delivery." }
    ]
  },

  "parlakhemundi": {
    cityName: "Parlakhemundi",
    metaTitle: "Cake Delivery in Parlakhemundi Gajapati | Mahendragiri Peak Odisha | RedHeart",
    metaDescription: "Order cakes online in Parlakhemundi (Gajapati). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Parlakhemundi (Gajapati)",
    metaKeyword: "cake delivery parlakhemundi gajapati, order cake online parlakhemundi, birthday cake parlakhemundi, custom cake gajapati, same day cake delivery parlakhemundi Mahendragiri Peak Vamsadhara River Andhra border Odisha tribal Soura Saura",
    footerContent: `
<h2>Cake Delivery in Parlakhemundi (Gajapati) — Mahendragiri Peak, Soura Tribal Art, and Vamsadhara River Valley</h2>
<p>Parlakhemundi — the district headquarters of Gajapati district in Odisha (southernmost Odisha bordering Andhra Pradesh), a district of high hills, tribal communities, and the Mahendragiri peak (the Mahendragiri Mountain — at approximately 1,501 m (Odisha-Andhra Pradesh border, in Gajapati district); one of the holiest mountains in the Eastern Ghats; the Mahendragiri is mentioned in the Ramayana (Parashuram's ashram was said to be here); the Vasishtha Ashram on the mountain; dense forest with rare medicinal plants and biodiversity; a significant pilgrimage site; the Gajapati dynasty connection (Gajapati — "master of the elephant forces" was one of the greatest medieval Odishan royal titles; the Gajapati kings of the 15th century CE (particularly Kapilendra Deva and Purushottama Deva) ruled an empire stretching from Bengal to the Kaveri River; Parlakhemundi was the seat of the later Gajapati zamindars/rajas); the Soura/Saura tribal community (the Soura/Saura of Gajapati district — one of Odisha's most significant tribes; known for their Idital murals/paintings (painted on the walls of ritual rooms using rice paste; depict cosmic narratives — the sun, moon, ancestors, village deities; they are communication to the deity Edental); the Soura are also known for their silver jewellery and forest knowledge; the Vamsadhara River (flows through Gajapati into Andhra; the Vamsadhara Dam project); the dense Eastern Ghats forests of Gajapati), and a city of Mahendragiri peak pilgrimage and Soura tribal Idital art — is Odisha's most Mahendragiri-Ramayana-Parashuram and Soura-Saura-Idital-mural-tribal-art Gajapati. From birthday parties in Parlakhemundi to celebration cakes — RedHeart covers all Gajapati areas: Parlakhemundi city, Mohana, Rayagada border, Paralakhemundi, Guma, R. Udayagiri, Gosani.</p>
<p>Our Parlakhemundi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mahendragiri Parashuram / Soura Tribal Idital Art / Vamsadhara River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Parlakhemundi (Gajapati), Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Parlakhemundi, Mohana, Guma, R. Udayagiri, Gosani, Kashinagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Parlakhemundi (Gajapati)?", answer: "Yes, same-day cake delivery is available across all Gajapati areas — Parlakhemundi city, Mohana, Guma, R. Udayagiri, and Gosani — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Parlakhemundi?", answer: "Yes, all flavours are available in eggless variants for Parlakhemundi (Gajapati) delivery." },
      { question: "Do you deliver midnight cakes in Parlakhemundi?", answer: "Yes, midnight birthday cake delivery is available across Parlakhemundi city zones." }
    ]
  },

  "nabarangpur": {
    cityName: "Nabarangpur",
    metaTitle: "Cake Delivery in Nabarangpur | Tribal Art Chhattisgarh Border Odisha | RedHeart",
    metaDescription: "Order cakes online in Nabarangpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nabarangpur",
    metaKeyword: "cake delivery nabarangpur, order cake online nabarangpur, birthday cake nabarangpur, custom cake nabarangpur, same day cake delivery nabarangpur Odisha Chhattisgarh Andhra border tribal Dharua Kondh Koraput division",
    footerContent: `
<h2>Cake Delivery in Nabarangpur — Tribal Heritage, Indravati River, and Odisha-Chhattisgarh-Andhra Tri-Junction</h2>
<p>Nabarangpur — the district headquarters of Nabarangpur district in Odisha (southwestern Odisha, part of the Koraput division), a remote and tribal-rich district at the tri-junction of three states (the Nabarangpur district borders Chhattisgarh to the north and Andhra Pradesh (Telangana) to the south; this remote district is one of Odisha's most tribal districts — communities include the Kondh (Khond), Dharua, Bonda-adjacent, and other indigenous communities; the Indravati River (the Indravati River flows through Nabarangpur district — it is one of Chhattisgarh's and Odisha's major rivers; the Indravati forms the natural boundary and flows to join the Godavari in Chhattisgarh; the Chitrakote Waterfalls on the Indravati (in Chhattisgarh, just across the border from Nabarangpur) are the widest waterfalls in India — often called the "Niagara of India"); the Podingi ancient site and temples in Nabarangpur; the dense forests of Nabarangpur (the district is heavily forested — sal, teak; the forests are the source of non-timber forest produce for tribal livelihoods; lac, tendu leaves, mahua); the Nabarangpur town on the Udaipur-Jagdalpur highway; Umerkote (Nabarangpur district — a major market town at the Odisha-Chhattisgarh border), and a city of Indravati River tribal forest district — is Odisha's most Kondh-Dharua-tribal-forested and Indravati-Chhattisgarh-Andhra-border Nabarangpur. From birthday parties in Nabarangpur to celebration cakes — RedHeart covers all areas: Nabarangpur city, Umerkote, Papadahandi, Tentulikhunti, Kosagumuda, Dabugaon.</p>
<p>Our Nabarangpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nabarangpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nabarangpur city, Umerkote, Papadahandi, Tentulikhunti, Kosagumuda, Dabugaon</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nabarangpur?", answer: "Yes, same-day cake delivery is available across all Nabarangpur areas — Nabarangpur city, Umerkote, Papadahandi, Tentulikhunti, and Kosagumuda — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nabarangpur?", answer: "Yes, all flavours are available in eggless variants for Nabarangpur delivery." },
      { question: "Do you deliver midnight cakes in Nabarangpur?", answer: "Yes, midnight birthday cake delivery is available across Nabarangpur city zones." }
    ]
  },

  "sheikhpura": {
    cityName: "Sheikhpura",
    metaTitle: "Cake Delivery in Sheikhpura | Bihar Nawab Shershah Suri Route Patna | RedHeart",
    metaDescription: "Order cakes online in Sheikhpura. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sheikhpura",
    metaKeyword: "cake delivery sheikhpura, order cake online sheikhpura, birthday cake sheikhpura, custom cake sheikhpura, same day cake delivery sheikhpura Bihar Shershah Suri Grand Trunk Road Nawab agriculture Nalanda border Patna",
    footerContent: `
<h2>Cake Delivery in Sheikhpura — Shershah Suri's Route, Bihar's Agricultural Heartland, and Nalanda Proximity</h2>
<p>Sheikhpura — the district headquarters of Sheikhpura district in Bihar (one of Bihar's smallest districts by area; carved from Nalanda district in 1994; adjacent to Nalanda and Lakhisarai), a district connected by history to Sher Shah Suri's military routes (the Sheikhpura district name origin — believed to be named after the historical camp/halting point on the Shershah Suri's Grand Trunk Road route through Bihar; the GT Road (Grand Trunk Road — the historic road from Kabul to Chittagong; built and restored by Sher Shah Suri (1538-1545 CE); passed through present-day Sheikhpura area); the Sheikhpura district is between Patna and Nalanda — the Nalanda archaeological site (where Nalanda University stood) is just adjacent to the border; proximity to the great Nalanda University makes the region significant for Buddhist pilgrimage; the Sheikhpura district agricultural profile (paddy, wheat, maize, vegetables for the Patna metropolitan market; mango orchards; mushroom cultivation growing); the Ariyari-Halsi (Sheikhpura) area; the Sone River irrigation canals adjacent to the district), and a city of GT Road history and Nalanda proximity — is Bihar's most GT-Road-Shershah-Suri-historically and Nalanda-proximity-Buddhist Sheikhpura. From birthday parties in Sheikhpura to celebration cakes — RedHeart covers all Sheikhpura areas: Sheikhpura city, Barbigha, Chewara, Ghatkusumbha, Ariyari.</p>
<p>Our Sheikhpura cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheikhpura, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sheikhpura city, Barbigha, Chewara, Ghatkusumbha, Ariyari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sheikhpura?", answer: "Yes, same-day cake delivery is available across all Sheikhpura areas — Sheikhpura city, Barbigha, Chewara, and Ghatkusumbha — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sheikhpura?", answer: "Yes, all flavours are available in eggless variants for Sheikhpura delivery." },
      { question: "Do you deliver midnight cakes in Sheikhpura?", answer: "Yes, midnight birthday cake delivery is available across Sheikhpura city zones." }
    ]
  },

  "jamui": {
    cityName: "Jamui",
    metaTitle: "Cake Delivery in Jamui | Mahavira Birthplace Jain Pilgrimage Bihar | RedHeart",
    metaDescription: "Order cakes online in Jamui. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jamui",
    metaKeyword: "cake delivery jamui, order cake online jamui, birthday cake jamui, custom cake jamui, same day cake delivery jamui Mahavira Kundagram Vaishali Jain pilgrimage Falgu Jharkhand border Bihar Naxal",
    footerContent: `
<h2>Cake Delivery in Jamui — Lord Mahavira's Enlightenment Site (Jrimbhikagrama), Jharkhand Border, and Bihar's Hill Range</h2>
<p>Jamui — the district headquarters of Jamui district in Bihar (at the Bihar-Jharkhand border), a district of forests, hills, and one of the most significant Jain pilgrimage sites (Lord Mahavira (599-527 BCE) — the 24th Tirthankara of Jainism and the founder of modern Jainism's philosophical framework; Mahavira attained Kevala Jnana (omniscience/enlightenment) at Jrimbhikagrama (believed to be in the Jamui-Vaishali area of Bihar); while Mahavira was born at Kundagram (Vaishali district) and attained Nirvana at Pawapuri (Nalanda), his enlightenment at Jrimbhikagrama makes Jamui significant for Jain pilgrimage; the Kshatriyakund Jain Tirth (near Jamui — another significant Jain site in the district); the Jamui district landscape (hilly terrain with forested ranges — part of the Chota Nagpur Plateau's Bihar extension; the Malhar-Naugachia hills; significant wildlife in the forest patches; the Nakti Dam reservoir); the Bihar-Jharkhand border area (Jamui district has the Jharkhand border — this is the area influenced by both the Jharkhand forest/tribal culture and Bihar's Ganga plain culture); the historically Naxal-affected zone (Jamui was one of the districts of Bihar affected by Left-wing extremism in the 2000s), and a city of Mahavira's enlightenment Jain pilgrimage and Bihar-Jharkhand border hills — is Bihar's most Jrimbhikagrama-Mahavira-enlightenment-Jain and Bihar-Jharkhand-forested-border Jamui. From birthday parties in Jamui to celebration cakes — RedHeart covers all Jamui areas: Jamui city, Jhajha, Sikandra, Chakai, Khaira, Sono, Barhat.</p>
<p>Our Jamui cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mahavira Enlightenment Jain Tirth / Kshatriyakund / Nakti Dam-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamui, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamui city, Jhajha, Sikandra, Chakai, Khaira, Sono, Barhat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jamui?", answer: "Yes, same-day cake delivery is available across all Jamui areas — Jamui city, Jhajha, Sikandra, Chakai, and Khaira — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jamui?", answer: "Yes, all flavours are available in eggless variants for Jamui delivery." },
      { question: "Do you deliver midnight cakes in Jamui?", answer: "Yes, midnight birthday cake delivery is available across Jamui city and Jhajha zones." }
    ]
  },

  "banka": {
    cityName: "Banka",
    metaTitle: "Cake Delivery in Banka | Mandar Hill Bhagalpur Bihar Jharkhand | RedHeart",
    metaDescription: "Order cakes online in Banka. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Banka",
    metaKeyword: "cake delivery banka, order cake online banka, birthday cake banka, custom cake banka, same day cake delivery banka Mandar Hill Parvat Churning Ocean Hindu mythology Bhagalpur Bihar Jharkhand border Barakar River",
    footerContent: `
<h2>Cake Delivery in Banka — Mandar Parvat (Mythological Churning Mountain), Jharkhand Border, and Bihar's Forest Hills</h2>
<p>Banka — the district headquarters of Banka district in Bihar (Bihar-Jharkhand border, carved from Bhagalpur in 1991), a district containing one of Hinduism's most mythologically significant mountains (the Mandar Parvat (Mandar Hill) — a granite hill rising sharply from the plains in Banka district; it is identified in Hindu mythology with the Mandara Mountain — the mountain used by gods and demons to churn the Cosmic Ocean (Samudra Manthan) to produce the nectar of immortality (amrit); the Bhagavata Purana and Vishnu Purana describe Mandara being used as the churning stick with the Vasuki serpent as the rope, with the tortoise avatar Kurma supporting it from below; the hill has Vishnu, Shiva, and various deity temples carved on and around it; the Pappharghatta (Poaphar) — a significant ancient site on the hill; the annual Mandar Mela attracts lakhs of pilgrims (on Makar Sankranti); the Barakar River (originates near Banka district in Jharkhand — flows into Jharkhand and then the Damodar system); the Banka forest area (the Banka district has significant forest areas — a corridor of the Jharkhand forest ecology; Chota Nagpur Plateau extension; significant wildlife); the Dhobadhowa area with waterfalls, and a city of Samudra Manthan Mandar mountain and mythological churning — is Bihar's most Mandar-Parvat-Samudra-Manthan-churning-mythological and Bihar-Jharkhand-forested-border Banka. From birthday parties in Banka to celebration cakes — RedHeart covers all Banka areas: Banka city, Amarpur, Barahat, Dhuraiya, Katoriya, Belhar, Bounsi.</p>
<p>Our Banka cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Mandar Parvat Samudra Manthan / Kurma Avatar Churning / Mandar Mela-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banka, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banka city, Amarpur, Barahat, Dhuraiya, Katoriya, Belhar, Bounsi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mandar Parvat Fondant, Mango, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Banka?", answer: "Yes, same-day cake delivery is available across all Banka areas — Banka city, Amarpur, Barahat, Dhuraiya, Katoriya, and Belhar — for orders placed before 3 PM." },
      { question: "Do you have Mandar Parvat Samudra Manthan-themed cakes?", answer: "Yes! Mandar Parvat (the mythological Mandara Mountain used to churn the Cosmic Ocean for amrit in the Bhagavata Purana — the churning stick of the Samudra Manthan; Kurma (tortoise) avatar supporting it; Vasuki serpent as rope; annual Mandar Mela on Makar Sankranti) inspires our most Mandar-Parvat-Samudra-Manthan-churning fondant cakes." },
      { question: "Are eggless cakes available in Banka?", answer: "Yes, all flavours are available in eggless variants for Banka delivery." }
    ]
  },

  "lalitpur": {
    cityName: "Lalitpur",
    metaTitle: "Cake Delivery in Lalitpur | Chanderi Bundelkhand Betwa MP-UP Border | RedHeart",
    metaDescription: "Order cakes online in Lalitpur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Lalitpur",
    metaKeyword: "cake delivery lalitpur, order cake online lalitpur, birthday cake lalitpur, custom cake lalitpur, same day cake delivery lalitpur Chanderi silk Bundelkhand Betwa River Madhya Pradesh border Uttar Pradesh Devgarh Jain temple",
    footerContent: `
<h2>Cake Delivery in Lalitpur — Chanderi Silk (GI), Devgarh Jain Temples, and Bundelkhand's Betwa Valley</h2>
<p>Lalitpur — the district headquarters of Lalitpur district in Uttar Pradesh (the southernmost UP district; at the MP-UP border; part of the Bundelkhand region), a district at the cultural boundary of UP and MP containing one of India's finest silk weaving traditions (the GI Chanderi Fabric/Silk (Chanderi town is in adjacent Ashoknagar district of MP — but the entire Chanderi cultural-economic zone extends to Lalitpur UP which is a key market and supplier; the Chanderi silk (GI-protected) — a lightweight, transparent weave combining silk and cotton or zari; known for the distinctive "Chanderi" tissue with coin motifs, floral patterns, and geometric designs; prized for bridal and formal wear; the Chanderi handloom is a 2,500-year-old tradition mentioned in Vedic literature); the Devgarh Jain Temples (Lalitpur district — the Dashavatara Temple (5th-6th CE Gupta period) at Devgarh is one of India's earliest surviving stone temple complexes; the large sculpture of Vishnu in Anantashayana (reclining on Shesha) is among the most remarkable Gupta-era carvings; also the Devgarh Jain tirthas (24 Jain temples of the 9th-12th CE Chandela period on a rock shelf); Devgarh is "God's Fort" — a significant archaeological site barely known outside specialist circles); the Betwa River (the Betwa originates in MP and forms the Rajghat Dam lake at the MP-UP border near Lalitpur — one of the India-UP irrigation projects); the Bundelkhand landscape (rocky, forested, characteristically dry; the Chandela dynasty connection), and a city of GI Chanderi silk and Devgarh Gupta-period temples — is UP's most GI-Chanderi-silk-lightweight-transparent and Devgarh-Gupta-Dashavatara-Vishnu-Anantashayana Lalitpur. From birthday parties in Lalitpur to celebration cakes — RedHeart covers all Lalitpur areas: Lalitpur city, Mehrauni, Talbehat, Jakhaura, Bar, Mandawara.</p>
<p>Our Lalitpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant GI Chanderi Silk Weave / Devgarh Gupta Temple / Betwa River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lalitpur city, Mehrauni, Talbehat, Jakhaura, Bar, Mandawara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lalitpur?", answer: "Yes, same-day cake delivery is available across all Lalitpur areas — Lalitpur city, Mehrauni, Talbehat, and Jakhaura — for orders placed before 3 PM." },
      { question: "Do you have Chanderi Silk and Devgarh Temple-themed cakes?", answer: "Yes! The GI Chanderi silk (2,500-year-old tradition; lightweight transparent weave with coin and floral motifs; bridal and formal wear) and Devgarh Jain Temples (Dashavatara Temple 5th-6th CE Gupta — the extraordinary Vishnu Anantashayana reclining sculpture; 24 Chandela-era Jain temples; rarely-known archaeological masterpiece) inspire our most GI-Chanderi-transparent and Devgarh-Gupta-Vishnu-reclining fondant cakes." },
      { question: "Are eggless cakes available in Lalitpur?", answer: "Yes, all flavours are available in eggless variants for Lalitpur delivery." }
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
