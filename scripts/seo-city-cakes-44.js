// Cakes Batch 44 — 13 cities
// Bihar remaining: West Champaran (Bettiah), East Champaran (Motihari), Saran (Chhapra), Gopalganj, Siwan
// NE States: Imphal (Manipur), Aizawl (Mizoram), Agartala (Tripura), Shillong (Meghalaya), Gangtok (Sikkim)
// More Assam: Dhubri, Goalpara, Barpeta

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bettiah": {
    cityName: "Bettiah",
    metaTitle: "Cake Delivery in Bettiah | Champaran Satyagraha Gandhi Bihar | RedHeart",
    metaDescription: "Order cakes online in Bettiah. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bettiah (West Champaran)",
    metaKeyword: "cake delivery bettiah, order cake online bettiah, birthday cake bettiah, custom cake bettiah, same day cake delivery bettiah Champaran Satyagraha Gandhi 1917 West Champaran Bihar Nepal border Valmiki Tiger Reserve",
    footerContent: `
<h2>Cake Delivery in Bettiah — Champaran Satyagraha's Birthplace, Gandhi's First Indian Activism, and Valmiki Tiger Reserve</h2>
<p>Bettiah — the headquarters of West Champaran district in Bihar (formerly divided into Champaran, later split into East and West Champaran in 1971), the city that gave Indian independence its defining moral pivot — the birthplace of Gandhi's first great Indian civil disobedience campaign (the Champaran Satyagraha (1917) — Gandhi's first major civil disobedience movement in India — was launched in Champaran after Gandhi was invited by the indigo farmers to witness the injustice of the Tinkathia system (under which farmers were compelled to cultivate indigo on 3/20ths of their land and sell it to British planters at fixed, exploitative prices); Gandhi arrived at Champaran in April 1917 after being asked to leave by the local British Collector (which he refused); he meticulously documented the conditions of indigo workers; the British Raj ultimately abolished the tinkathia system after the Champaran Agrarian Act (1917); this was the first successful application of the Satyagraha principle on Indian soil — making Champaran the crucible of Indian independence strategy; the Valmiki Tiger Reserve (West Champaran district — Valmiki Nagar) is the only tiger reserve in Bihar — 899 sq km, on the Nepal border (Gandak River), home to tigers, one-horned rhinos (migrating from Nepal), leopards, and Ganges river dolphins; the Gandak River (Narayani in Nepal) forms the western border; Bettiah itself was the home of the historic Bettiah Raj (a princely family); West Champaran borders Nepal to the north), and a city of Gandhian satyagraha and Bengal tiger — is Bihar's most independence-movement-significant and tiger-reserve-adjacent district. From birthday parties in Bettiah to celebration cakes — RedHeart covers all Bettiah zones: Bettiah town, Narkatiaganj, Bagaha, Raxaul, Valmiki Nagar, Motihari adjacent.</p>
<p>Our Bettiah cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Champaran Satyagraha Gandhi / Valmiki Tiger Reserve / Gandak River Nepal Border-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bettiah (West Champaran), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bettiah town, Narkatiaganj, Bagaha, Raxaul, Valmiki Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Champaran Satyagraha Fondant, Mango, Valmiki Tiger Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bettiah?", answer: "Yes, same-day cake delivery is available across all Bettiah areas — Bettiah town, Narkatiaganj, Bagaha, Raxaul, and Valmiki Nagar — for orders placed before 3 PM." },
      { question: "Do you have Champaran Satyagraha Gandhi-themed cakes?", answer: "Yes! The Champaran Satyagraha (1917 — Gandhi's first successful civil disobedience in India, where he documented and abolished the exploitative Tinkathia indigo system — the crucible where Satyagraha as a strategy was proven on Indian soil for the first time) and the Valmiki Tiger Reserve (Bihar's only tiger reserve on the Nepal-Gandak border — with migrating one-horned rhinos from Nepal) inspire our most Gandhianly revolutionary Bettiah fondant cakes." },
      { question: "Are eggless cakes available in Bettiah?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bettiah delivery." }
    ]
  },

  "motihari": {
    cityName: "Motihari",
    metaTitle: "Cake Delivery in Motihari | George Orwell Birthplace East Champaran Bihar | RedHeart",
    metaDescription: "Order cakes online in Motihari. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Motihari (East Champaran)",
    metaKeyword: "cake delivery motihari, order cake online motihari, birthday cake motihari, custom cake motihari, same day cake delivery motihari George Orwell birthplace Animal Farm 1984 East Champaran Bihar Champaran Satyagraha Gandhi Bhitiharwa Ashram",
    footerContent: `
<h2>Cake Delivery in Motihari — George Orwell's Birthplace, Champaran Satyagraha's Eastern Hub, and Gandhi's Bhitiharwa Ashram</h2>
<p>Motihari — the headquarters of East Champaran district in Bihar, one of the most unlikely literary birthplaces on Earth — the city where Eric Arthur Blair (George Orwell, 1903-1950) was born, the author of "Animal Farm" and "Nineteen Eighty-Four" ("1984") (George Orwell was born in Motihari (then in the Bengal Presidency) on June 25, 1903, when his father Richard Blair worked in the Indian Civil Service in the Bengal opium department; Orwell's family left India shortly after his birth and he never returned; but Motihari claims him as one of history's most significant literary sons; the birthplace is marked by a plaque and memorial; "Animal Farm" (1945) — his allegorical satire of Stalinist totalitarianism — and "Nineteen Eighty-Four" (1949) — which coined the terms "Big Brother", "Doublethink", "Newspeak", "Room 101", and "Thoughtcrime" — are two of the 20th century's most influential novels; the Champaran Satyagraha (1917) — Gandhi's first Indian Satyagraha — had its eastern centre in East Champaran; Gandhi established the Bhitiharwa Ashram (East Champaran) as a base for his Champaran investigation (1917); the Motihari-Bettiah corridor is the heart of the Champaran indigo agitation history; the East Champaran district borders Nepal to the north; the Gandak-Burhi Gandak rivers flow through the district; the Areraj (Muzaffarpur border) area has the Sonarpur Maharani temple), and a city of dystopian literary giant and Gandhian ashram — is Bihar's most Orwellianly literary and Gandhianly Satyagraha district. From birthday parties in Motihari to celebration cakes — RedHeart covers all Motihari zones: Motihari town, Raxaul, Adapur, Chakia, Mehsi, Areraj, Ghorasahan.</p>
<p>Our Motihari cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant George Orwell Birthplace / Champaran Satyagraha Gandhi / Bhitiharwa Ashram-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Motihari (East Champaran), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Motihari town, Raxaul, Adapur, Chakia, Mehsi, Areraj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Orwell 1984 Fondant, Champaran Satyagraha Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Motihari?", answer: "Yes, same-day cake delivery is available across all Motihari areas — Motihari town, Raxaul, Adapur, Chakia, Mehsi, and Areraj — for orders placed before 3 PM." },
      { question: "Do you have George Orwell Birthplace Motihari-themed cakes?", answer: "Yes! George Orwell (Eric Arthur Blair — born Motihari, June 25, 1903) gave the world 'Animal Farm' (1945) and 'Nineteen Eighty-Four' (1949) — coining 'Big Brother', 'Doublethink', 'Newspeak', and 'Thoughtcrime'; his Motihari birthplace is marked by a memorial plaque. Combined with Gandhi's Bhitiharwa Ashram (the Champaran Satyagraha 1917 eastern base), Motihari inspires our most Orwellianly dystopian and Gandhianly Satyagrahi fondant cakes." },
      { question: "Are eggless cakes available in Motihari?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Motihari delivery." }
    ]
  },

  "chhapra": {
    cityName: "Chhapra",
    metaTitle: "Cake Delivery in Chhapra | Saran Diara Sandbanks Ganges Bihar | RedHeart",
    metaDescription: "Order cakes online in Chhapra. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chhapra (Saran)",
    metaKeyword: "cake delivery chhapra, order cake online chhapra, birthday cake chhapra, custom cake chhapra, same day cake delivery chhapra Saran district Diara sandbanks Ghaghra Ganges confluence Bihar Muzaffarpur adjacent",
    footerContent: `
<h2>Cake Delivery in Chhapra — Saran's Diara Sandbanks, Ghaghra-Ganges Confluence, and Muzaffarpur Gate Bihar</h2>
<p>Chhapra — the headquarters of Saran district in Bihar, one of Bihar's most flood-affected and culturally vibrant cities on the Ghaghra River — the home of the Diara farming communities (the Saran district (historically "Sarayan") is in north Bihar, bounded by the Ghaghra (Saryu River — the river of the Ramayana, which flows from Ayodhya) to the north and the Ganges to the south; the Ghaghra and Ganges rivers converge near Revelganj (Saran) — creating one of Bihar's most significant river confluences; the Diara lands (Diara = river island/floodplain sandbars) are low-lying river islands that emerge every year as the Ghaghra and Ganges recede after monsoon; Diara farming (mostly maize, mustard, watermelon) on these fertile alluvial sandbanks is a distinctive Bihar agricultural tradition; Chhapra's Diara communities have faced repeated catastrophic floods; the Saran district is the birthplace of Babu Rajendra Prasad (India's first President — born at Ziradei, Saran, 1884) — making Saran one of the most constitutionally significant Bihar districts; the Chirand (Saran district) archaeological site is one of the earliest Neolithic-Chalcolithic sites in the Gangetic plain (~2500-2000 BCE); the Revelganj-Chapra Ghaghra bridge is an important Ganga-Ghaghra crossing; the Maner (near Patna) Sufi shrine (Maner Sharif — tomb of Shah Daulat — Bihar's most important Sufi dargah) is accessible from Chhapra), and a city of India's first President birthplace and Diara flood-island farming — is Bihar's most presidentially significant and fluvially alluvial district. From birthday parties in Chhapra to celebration cakes — RedHeart covers all Chhapra zones: Chhapra town, Siwan, Gopalganj, Marhowra, Revelganj, Dighwara, Masrakh.</p>
<p>Our Chhapra cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Rajendra Prasad First President Saran / Diara Sandbank Ghaghra / Ghaghra-Ganga Confluence-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhapra (Saran), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhapra town, Marhowra, Revelganj, Dighwara, Masrakh, Marhaura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Rajendra Prasad Fondant, Diara Sandbank Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chhapra?", answer: "Yes, same-day cake delivery is available across all Chhapra areas — Chhapra town, Marhowra, Revelganj, Dighwara, and Masrakh — for orders placed before 3 PM." },
      { question: "Do you have Rajendra Prasad First President Bihar-themed cakes?", answer: "Yes! Babu Rajendra Prasad (India's first and longest-serving President, born at Ziradei in Saran district in 1884) and the Saran Diara farming tradition (unique alluvial sandbank river island agriculture on the Ghaghra-Ganga floodplains) inspire our most constitutionally presidential and Diara-flood-surviving Chhapra fondant cakes." },
      { question: "Are eggless cakes available in Chhapra?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chhapra delivery." }
    ]
  },

  "gopalganj": {
    cityName: "Gopalganj",
    metaTitle: "Cake Delivery in Gopalganj | Lalu Prasad Bihar Gandak Ghaghra | RedHeart",
    metaDescription: "Order cakes online in Gopalganj. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gopalganj",
    metaKeyword: "cake delivery gopalganj, order cake online gopalganj, birthday cake gopalganj, custom cake gopalganj, same day cake delivery gopalganj Lalu Prasad Yadav birthplace Gandak Ghaghra Bihar Thakurbari Dwarkadhish",
    footerContent: `
<h2>Cake Delivery in Gopalganj — Lalu Prasad's Birthplace, Gandak-Ghaghra Floodplains, and North Bihar's Cultural Core</h2>
<p>Gopalganj — the headquarters of Gopalganj district in Bihar, one of Bihar's most politically consequential birth-districts and one of north Bihar's most Gandak-river flooded plains (the Gopalganj district is the birthplace of Lalu Prasad Yadav (born 1948 in Phulwaria, Gopalganj) — one of the most consequential and controversial figures in modern Bihar and Indian politics; Lalu Prasad's political career spanning 4 decades — as Chief Minister of Bihar, Railway Minister of India, and leader of the Rashtriya Janata Dal — was anchored in the Gopalganj constituency; the Gandak River (Narayani in Nepal — a major Himalayan river) flows through the district; the Gopalganj-Siwan corridor is one of Bihar's most politically vibrant belts; the Thakurbari Dwarkadhish temple (Gopalganj) is a significant Vaishnava temple of the district; the district is known for producing jaggery (gur) from sugarcane; the Thawe Durga temple (Gopalganj) is a significant Shakti shrine; Gopalganj borders Nepal and Uttar Pradesh; the district is part of the Tirhut division of Bihar; the Son valley sugarcane and Gandak flood-plain rice are major crops), and a city of Bihar politics and Gandak river floods — is Bihar's most politically-origin-storied and jaggery-producing district. From birthday parties in Gopalganj to celebration cakes — RedHeart covers all Gopalganj zones: Gopalganj town, Hathua, Kuchaikote, Baikunthpur, Siwan adjacent, Thawe, Pharenda.</p>
<p>Our Gopalganj cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopalganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopalganj town, Hathua, Kuchaikote, Baikunthpur, Thawe, Pharenda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gopalganj?", answer: "Yes, same-day cake delivery is available across all Gopalganj areas — Gopalganj town, Hathua, Kuchaikote, Baikunthpur, and Thawe — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gopalganj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gopalganj delivery." },
      { question: "Do you deliver midnight cakes in Gopalganj?", answer: "Yes, midnight birthday cake delivery is available across Gopalganj town and Hathua zones." }
    ]
  },

  "imphal": {
    cityName: "Imphal",
    metaTitle: "Cake Delivery in Imphal | Kangla Fort Polo Birthplace Manipur | RedHeart",
    metaDescription: "Order cakes online in Imphal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Imphal",
    metaKeyword: "cake delivery imphal, order cake online imphal, birthday cake imphal, custom cake imphal, same day cake delivery imphal Kangla Fort polo birthplace Ima Keithel women market Loktak Lake Sangai deer Manipur capital",
    footerContent: `
<h2>Cake Delivery in Imphal — Kangla Fort's Ancient Capital, Polo's Birthplace, Ima Keithel Women's Market, and Loktak's Sangai Deer</h2>
<p>Imphal — the capital of Manipur, one of Northeast India's most culturally unique and historically significant cities — the birthplace of polo and home to the world's oldest women-only market (the Kangla Fort (Kangla = "Dry Land" in Meitei) — the ancient palace-fort of the Meitei kings of Manipur, on the Imphal River — was the political and spiritual centre of the Meitei Kingdom for over 2,000 years; the British (Royal Scots Fusiliers) captured Kangla Fort in 1891 during the Anglo-Manipur War (the battle of Khongjom — April 23, 1891 — is commemorated as Khongjom Day in Manipur); the British Indian Army's cantonment was in Kangla until 1947, when they handed it back to the Assam Rifles until 2004; today Kangla is a heritage park; polo was invented in Manipur (the Meitei game of "Sagol Kangjei" — played on horseback on the Imphal plain — is the oldest known polo game; the British learned it from the Manipuris and codified the modern rules); the Ima Keithel (Ima = Mothers, Keithel = Market — the "Mothers' Market") in Imphal is the world's largest exclusively women-run market; thousands of women vendors run this market as the economic backbone of Imphal — a tradition dating back 500+ years rooted in the Lallup-Kaba system (men were conscripted into royal service, women ran commerce); the Loktak Lake (Bishnupur district, near Imphal) — India's largest freshwater lake in the Northeast — has floating phumdis (biomass islands) and is the last refuge of the Sangai (Eld's deer — Cervus eldii eldii — the brow-antlered dancing deer of Manipur, Manipur's state animal; its only wild population is in Keibul Lamjao National Park on Loktak's phumdis); Battle of Imphal (1944 WWII — Japanese and INA forces besieged Imphal, Allied forces held the siege in a pivotal battle that ended Japanese expansion westward into India, simultaneous with Battle of Kohima); Ras Lila dance (Manipuri classical dance form, UNESCO Intangible); Yaoshang (Manipur Holi — 5-day festival with Thabal Chongba folk dance)), and a city of polo's origin and phumdis floating deer — is Manipur's most sportively polo-originating and ecologically phumdi-drifting capital. From birthday parties in Imphal to celebration cakes — RedHeart covers all Imphal zones: Imphal East, Imphal West, Bishnupur, Thoubal, Churachandpur adjacent, Kakching, Moirang.</p>
<p>Our Imphal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kangla Fort Meitei / Ima Keithel Mothers Market / Loktak Sangai Brow-Antlered Deer / Battle of Imphal WWII / Polo Birthplace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Imphal, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Imphal East, Imphal West, Bishnupur, Thoubal, Kakching, Moirang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kangla Fort Fondant, Loktak Sangai Fondant, Ima Keithel Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Imphal?", answer: "Yes, same-day cake delivery is available across all Imphal areas — Imphal East, Imphal West, Bishnupur, Thoubal, and Kakching — for orders placed before 3 PM." },
      { question: "Do you have Kangla Fort and Loktak Sangai Deer-themed cakes?", answer: "Yes! The Kangla Fort (2,000-year-old Meitei royal palace-fort — polo was invented on its Imphal plains as 'Sagol Kangjei'), the Ima Keithel (world's largest exclusively women-run market, 500+ years old), and the Loktak Sangai (Keibul Lamjao NP — the brow-antlered dancing deer of Manipur's floating phumdis — the last wild population on Earth) inspire our most uniquely Manipuri fondant cakes." },
      { question: "Are eggless cakes available in Imphal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Imphal delivery." }
    ]
  },

  "aizawl": {
    cityName: "Aizawl",
    metaTitle: "Cake Delivery in Aizawl | Mizo Culture Tlawmngaihna Mizoram Capital | RedHeart",
    metaDescription: "Order cakes online in Aizawl. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Aizawl",
    metaKeyword: "cake delivery aizawl, order cake online aizawl, birthday cake aizawl, custom cake aizawl, same day cake delivery aizawl Tlawmngaihna Mizo ethics Mizoram capital literacy church bamboo dance Chapchar Kut Anthurium",
    footerContent: `
<h2>Cake Delivery in Aizawl — Tlawmngaihna's Mizo Ethics, Highest-Literacy Northeast State, and Anthurium Flowers</h2>
<p>Aizawl — the capital of Mizoram, one of India's most literate, Christian, and culturally distinctive hill capital cities — home to a culture built on the concept of Tlawmngaihna (the Mizo word for selfless duty, community service, and hospitality — the core ethical philosophy of Mizo society — impossible to fully translate but encompassing altruism, generosity, and communal responsibility; it is the cultural foundation of Mizoram's community life); Mizoram has India's second-highest literacy rate (after Kerala), primarily achieved through the role of Presbyterian and Baptist churches in establishing schools across the hills in the 19th-20th centuries; Aizawl is one of India's most churchgoing cities — with hundreds of churches and where Sunday observance stops most commercial activity; the Chapchar Kut festival (March — the most important Mizo festival — celebrating the end of the jungle clearance (jhum/slash-and-burn cultivation) — featuring the Cheraw (bamboo dance) — arguably India's most visually spectacular traditional dance, where performers leap between moving bamboo poles beaten rhythmically; Chapchar Kut is to Mizo culture what Onam is to Kerala; the GI Anthurium of Mizoram (Mizoram is India's largest producer of Anthurium flowers — the tropical heart-shaped waxy flowers — exported across India); the Mizo Zirlai Pawl (MZP — the Young Mizo Association) is one of India's most effective youth organizations for community service; the Phawngpui (Blue Mountain — 2,157m — the highest peak in Mizoram, on the Myanmar border) is the most sacred mountain in Mizo tradition; Aizawl is situated on a narrow mountain ridge — making it one of India's most vertically and precariously built cities), and a city of bamboo-dance ethics and anthurium flowers — is Mizoram's most churchly literate and Tlawmngaihna-principled capital. From birthday parties in Aizawl to celebration cakes — RedHeart covers all Aizawl zones: Aizawl town, Champhai, Lunglei, Kolasib, Serchhip, Lawngtlai, Saiha.</p>
<p>Our Aizawl cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Cheraw Bamboo Dance / Chapchar Kut / Tlawmngaihna Mizo Ethics / Anthurium Mizoram-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aizawl, Mizoram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aizawl town, Champhai, Lunglei, Kolasib, Serchhip, Lawngtlai, Saiha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Cheraw Bamboo Dance Fondant, Anthurium Fondant, Chapchar Kut Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Aizawl?", answer: "Yes, same-day cake delivery is available across all Aizawl areas — Aizawl town, Champhai, Lunglei, Kolasib, Serchhip, and Lawngtlai — for orders placed before 3 PM." },
      { question: "Do you have Cheraw Bamboo Dance and Mizoram Anthurium-themed cakes?", answer: "Yes! The Cheraw (bamboo dance — performers leaping between rhythmically beaten moving bamboo poles — arguably India's most visually spectacular traditional dance, performed at Chapchar Kut) and the GI Anthurium of Mizoram (India's largest producer of these waxy heart-shaped tropical flowers) inspire our most rhythmically bamboo-dancing and florally anthuriumed Aizawl fondant cakes." },
      { question: "Are eggless cakes available in Aizawl?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Aizawl delivery." }
    ]
  },

  "agartala": {
    cityName: "Agartala",
    metaTitle: "Cake Delivery in Agartala | Ujjayanta Palace Tripura Bangladesh Border | RedHeart",
    metaDescription: "Order cakes online in Agartala. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Agartala",
    metaKeyword: "cake delivery agartala, order cake online agartala, birthday cake agartala, custom cake agartala, same day cake delivery agartala Ujjayanta Palace Tripura Bangladesh border Unakoti rock carvings Neermahal palace Rubber plantation capital",
    footerContent: `
<h2>Cake Delivery in Agartala — Ujjayanta Palace's Mughal-Colonial Fusion, Unakoti's 10-Million Rock Carvings, and Bangladesh Border</h2>
<p>Agartala — the capital of Tripura, India's third-largest city in the Northeast (after Guwahati and Imphal), a city of royal palaces and extraordinary rock-cut sculpture — almost entirely surrounded by Bangladesh (the Agartala city is practically surrounded by Bangladesh on three sides — it is only 2 km from the Bangladesh border (Akhaura crossing); the road distance from Agartala to Kolkata through Bangladesh is ~350 km but through India is ~1,600 km — highlighting Tripura's geographic uniqueness as a "landlocked" Indian state surrounded by Bangladesh; the Ujjayanta Palace (1901, built by Maharaja Radha Kishore Manikya) is a stunning Indo-Mughal palace in the heart of Agartala — a blend of Mughal, Rajput, and colonial architecture with Mughal-style domes and a vast open durbar hall; it is now the Tripura State Museum; the Unakoti (Unakoti = "one less than a crore" — i.e., 9,999,999) is a sacred site 178 km from Agartala — featuring massive 9th-10th century Shaiva rock carvings and stone images of Shiva (the massive bas-relief of Unakoti Shiva — 30 feet high — is one of India's most striking examples of rock art) — legend: Shiva was travelling to Kashi with 10 million gods but asked them to wake before dawn; all slept too long except Shiva — 9,999,999 gods were turned to stone; the Neermahal Water Palace (Rudrasagar Lake, Melaghar — 50 km from Agartala) is a white-and-red Mughal-style palace built in the middle of a lake (1930) by Maharaja Bir Bikram Kishore Manikya — one of India's most photogenic water palaces; Tripura is India's second-largest rubber producer (after Kerala) — rubber plantations spread across the hills; the Garia Puja, Kharchi Puja (14-deity temple in Agartala), and Ker Puja are significant Tripuri festivals), and a city of palace on water and rock-carved crore gods — is Tripura's most regally palatial and Bangladesh-neighbouring capital. From birthday parties in Agartala to celebration cakes — RedHeart covers all Agartala zones: Agartala town, Udaipur, Dharmanagar, Sabroom, Belonia, Kailasahar, Ambassa.</p>
<p>Our Agartala cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Ujjayanta Palace / Neermahal Water Palace / Unakoti Rock Carvings / Kharchi Puja 14-Deity-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agartala, Tripura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agartala town, Udaipur, Dharmanagar, Sabroom, Belonia, Kailasahar, Ambassa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Ujjayanta Palace Fondant, Neermahal Water Palace Fondant, Unakoti Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Agartala?", answer: "Yes, same-day cake delivery is available across all Agartala areas — Agartala town, Udaipur, Dharmanagar, Sabroom, Belonia, and Kailasahar — for orders placed before 3 PM." },
      { question: "Do you have Ujjayanta Palace and Neermahal Water Palace-themed cakes?", answer: "Yes! The Ujjayanta Palace (1901 Indo-Mughal palace now the State Museum), the Neermahal Water Palace (1930 — white-and-red Mughal palace built in the middle of Rudrasagar Lake — one of India's most photogenic water palaces), and the Unakoti (9th-10th century 9,999,999 rock-carved gods — the 30-foot Shiva bas-relief) inspire our most regally palatial and rock-carved Agartala fondant cakes." },
      { question: "Are eggless cakes available in Agartala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Agartala delivery." }
    ]
  },

  "shillong": {
    cityName: "Shillong",
    metaTitle: "Cake Delivery in Shillong | Scotland of East Cherrapunji Living Roots Meghalaya | RedHeart",
    metaDescription: "Order cakes online in Shillong. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Shillong",
    metaKeyword: "cake delivery shillong, order cake online shillong, birthday cake shillong, custom cake shillong, same day cake delivery shillong Scotland of East Cherrapunji Living Root Bridges Khasi matrilineal Meghalaya music rock capital",
    footerContent: `
<h2>Cake Delivery in Shillong — Scotland of the East, Khasi Matrilineal Culture, Living Root Bridges, and India's Rock Capital</h2>
<p>Shillong — the capital of Meghalaya, one of India's most beautiful and musically renowned hill cities — the "Scotland of the East" and India's undisputed rock music capital (Shillong's landscape (Shillong Peak — 1966m — the highest point of the Shillong Plateau; the Ward's Lake, the Police Bazaar, the Don Bosco Museum) earned it the Scottish comparison from British officers who settled here; the Khasi tribe (who constitute the majority of Meghalaya's population) is one of the world's few remaining fully matrilineal societies — the youngest daughter (Khadduh) inherits the family property; family names and clans pass through the mother; children carry the mother's clan name; the Khasi system of matrilineal inheritance is one of the most intact matrilineal systems in Asia; Cherrapunji (Sohra — 55 km from Shillong) and Mawsynram (adjacent) compete for the title of world's wettest place annually (average annual rainfall ~11,400mm and ~11,871mm respectively — the monsoon clouds rise from the Bay of Bengal and hit the Shillong scarp); the Living Root Bridges (Jingkieng Jri — in the Khasi and Jaintia Hills — single-decker and double-decker bridges grown from the aerial roots of the Ficus elastica rubber tree over 15-25+ years by Khasi villagers; the most famous is the Nongriat double-decker living root bridge, near Cherrapunji; submitted for UNESCO inscription) are extraordinary feats of bioengineering; Shillong is called India's Rock Capital — the Khasi love of Western music (from Welsh Presbyterian missionary influence in the 19th century) created a unique rock-and-blues music culture; the Shillong Chamber Choir won India's Got Talent; bands like Soulmate, Noyra, Them Clones, and the Meghalaya music scene are nationally known; the Nongkrem Dance (Khasi festival at Smit village) is the major annual cultural festival), and a city of living tree bridges and Khasi matrilineal rock music — is Meghalaya's most Scottish-identified, matrilineally governed, and rockingly musical capital. From birthday parties in Shillong to celebration cakes — RedHeart covers all Shillong zones: Shillong town, Cherrapunji, Mawlai, Lawsohtun, Ri Bhoi adjacent, Nongpoh, Jowai, Tura adjacent.</p>
<p>Our Shillong cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Living Root Bridge Cherrapunji / Khasi Matrilineal / Nongkrem Dance / India Rock Capital-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shillong, Meghalaya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shillong town, Cherrapunji, Mawlai, Lawsohtun, Nongpoh, Jowai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Living Root Bridge Fondant, Nongkrem Dance Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Shillong?", answer: "Yes, same-day cake delivery is available across all Shillong areas — Shillong town, Cherrapunji, Mawlai, Lawsohtun, and Nongpoh — for orders placed before 3 PM." },
      { question: "Do you have Living Root Bridges and India Rock Capital-themed cakes?", answer: "Yes! The Living Root Bridges of Meghalaya (Jingkieng Jri — grown from Ficus elastica aerial roots by Khasi villagers over 25 years; the Nongriat double-decker bridge near Cherrapunji submitted for UNESCO) and Shillong's rock music capital identity (the unique Khasi rock-and-blues culture shaped by Welsh Presbyterian missionaries, producing nationally famous bands) inspire our most bioengineered-rooty and electrically rock-guitared Shillong fondant cakes." },
      { question: "Are eggless cakes available in Shillong?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Shillong delivery." }
    ]
  },

  "gangtok": {
    cityName: "Gangtok",
    metaTitle: "Cake Delivery in Gangtok | Kangchenjunga Rumtek Monastery Sikkim | RedHeart",
    metaDescription: "Order cakes online in Gangtok. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gangtok",
    metaKeyword: "cake delivery gangtok, order cake online gangtok, birthday cake gangtok, custom cake gangtok, same day cake delivery gangtok Kangchenjunga Rumtek Monastery Sikkim Teesta River Nathula China Tibet border organic state",
    footerContent: `
<h2>Cake Delivery in Gangtok — Kangchenjunga's Sacred Third-Highest Peak, Rumtek Monastery, Nathula China Pass, and India's First Organic State</h2>
<p>Gangtok — the capital of Sikkim, India's smallest and most uniquely Himalayan state — a city of extraordinary mountain vistas, Buddhist monasteries, and the world's third-highest mountain (Kangchenjunga (8,586m) — the world's third-highest mountain and the highest peak in India — is sacred to the Sikkimese as "Dzonga" (the protector deity of Sikkim); Kangchenjunga is literally visible from Gangtok on clear days and dominates Sikkimese cultural and spiritual life; the five peaks of Kangchenjunga represent the five treasures of eternal snow (gold, silver, gems, grain, and holy books) — making it a sacred mountain that only a Lepcha person has climbed to within metres of its summit (but traditionally never stood exactly on the top, as a mark of respect); Rumtek Monastery (24 km from Gangtok) — the most important Tibetan Buddhist monastery of the Karma Kagyu lineage outside Tibet — the dharma seat of the Karmapa (the lineage holder of Tibetan Buddhism) — one of the largest monasteries in India; the Nathula Pass (4,310m — 54 km from Gangtok) — the high-altitude mountain pass on the India-Tibet (China) border — was a portion of the ancient Silk Road; reopened in 2006 for limited India-China border trade after being closed since 1962 Indo-Chinese War; Sikkim became India's first fully organic state in 2016 — converting all 75,000 hectares of farmland to organic agriculture; Sikkimese Organic (GI) products include large cardamom (Sikkim is the world's largest producer of large cardamom — Amomum subulatum), ginger, turmeric, and organic milk; the Teesta River (origin in the Zemu Glacier in Kangchenjunga massif) flows through Sikkim; the Tsomgo (Changu) Lake (3,753m, 40 km from Gangtok) is a sacred high-altitude glacial lake; the Lepcha indigenous people (Sikkim's first inhabitants) and Bhutia and Nepali communities coexist in one of India's most harmonious multi-ethnic societies; the Losar and Tihar festivals are major Sikkimese celebrations), and a city of the world's third peak and first organic state — is Sikkim's most Himalayan-Buddhism-panoramic and organically cardamom-fragrant capital. From birthday parties in Gangtok to celebration cakes — RedHeart covers all Gangtok zones: Gangtok town, Namchi, Gyalshing, Mangan, Singtam, Jorethang, Yuksom.</p>
<p>Our Gangtok cake range: Chocolate, Cardamom-flavoured (GI Sikkim Cardamom!), Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kangchenjunga Third Highest / Rumtek Karmapa Monastery / Nathula China Pass / Sikkim Organic First State-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gangtok, Sikkim</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gangtok town, Namchi, Gyalshing, Mangan, Singtam, Jorethang, Yuksom</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cardamom (Sikkim GI), Chocolate, Kangchenjunga Fondant, Rumtek Monastery Fondant, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gangtok?", answer: "Yes, same-day cake delivery is available across all Gangtok areas — Gangtok town, Namchi, Gyalshing, Mangan, Singtam, and Jorethang — for orders placed before 3 PM." },
      { question: "Do you have Kangchenjunga and Rumtek Monastery-themed cakes? And Cardamom flavour?", answer: "Yes! Kangchenjunga (8,586m — India's highest, world's 3rd highest — sacred 'Dzonga' protector of Sikkim, never fully climbed to summit by local tradition out of respect), Rumtek Monastery (Karmapa's dharma seat — the most important Karma Kagyu monastery outside Tibet), and Sikkim's GI Large Cardamom (world's largest producer) inspire our most sublimely mountainous and aromatically cardamomed Gangtok cakes." },
      { question: "Are eggless cakes available in Gangtok?", answer: "Yes, all flavours — Cardamom, Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gangtok delivery." }
    ]
  },

  "dhubri": {
    cityName: "Dhubri",
    metaTitle: "Cake Delivery in Dhubri | Brahmaputra Bengal Gateway Sikh Assam | RedHeart",
    metaDescription: "Order cakes online in Dhubri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dhubri",
    metaKeyword: "cake delivery dhubri, order cake online dhubri, birthday cake dhubri, custom cake dhubri, same day cake delivery dhubri Brahmaputra gateway Bengal border Sikh Gurdwara Guru Tegh Bahadur Assam Bangladesh Meghalaya tri-junction",
    footerContent: `
<h2>Cake Delivery in Dhubri — Brahmaputra's Bengal Gateway, Guru Tegh Bahadur's Sikh Heritage, and Assam-Bangladesh-Meghalaya Tri-Junction</h2>
<p>Dhubri — the headquarters of Dhubri district in Assam, the westernmost point of Assam on the Brahmaputra — the gateway from Bengal and Bangladesh into Assam (the Dhubri district is at the extreme western end of the Brahmaputra Valley where the Brahmaputra enters from West Bengal into Assam; the river is very wide here (spanning several kilometres) before narrowing in the Shillong Plateau section; the Dhubri-Phulbari bridge proposal (or Dhubri-Phulbari rail-road bridge across the Brahmaputra) would be India's longest river bridge when built; the Dhubri town is on the south bank of the Brahmaputra; Dhubri district borders Bangladesh to the west and south, West Bengal to the west, and Meghalaya to the south — making it one of Assam's most internationally border-adjacent districts; the Damdama Island (in the Brahmaputra near Dhubri) has a Sikh Gurdwara associated with Guru Tegh Bahadur (the 9th Sikh Guru — who visited Assam in 1668 CE during his eastern India tour; the Gurdwara Damdama Sahib is a significant Sikh shrine in Assam commemorating his visit); the Mankachar area (Dhubri district) is on the Bangladesh border; the Assam-Bengal border was historically contested; Dhubri has significant Muslim population given its Bangladesh proximity; jute production is significant in the district; the Brahmaputra River here carries the highest sediment load in Asia), and a city of Brahmaputra's western gateway and Sikh gurdwara heritage — is Assam's most westerly and Guru-Tegh-Bahadur-visited border district. From birthday parties in Dhubri to celebration cakes — RedHeart covers all Dhubri zones: Dhubri town, Gauripur, Mankachar, Bilasipara, Agomoni, South Salmara.</p>
<p>Our Dhubri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Guru Tegh Bahadur Damdama Sahib / Brahmaputra Western Gateway / Assam-Bangladesh Border-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhubri, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhubri town, Gauripur, Mankachar, Bilasipara, Agomoni, South Salmara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dhubri?", answer: "Yes, same-day cake delivery is available across all Dhubri areas — Dhubri town, Gauripur, Mankachar, Bilasipara, and Agomoni — for orders placed before 3 PM." },
      { question: "Do you have Guru Tegh Bahadur Damdama Sahib Sikh heritage-themed cakes?", answer: "Yes! The Gurdwara Damdama Sahib (on Damdama Island in the Brahmaputra — commemorating Guru Tegh Bahadur's visit to Assam in 1668 CE, one of Assam's most significant Sikh shrines) and the Brahmaputra's western gateway (where the river enters Assam from Bengal, at its widest before the Shillong scarp narrows it) inspire our most spiritually Sikh-revered and riverinely gateway Dhubri fondant cakes." },
      { question: "Are eggless cakes available in Dhubri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dhubri delivery." }
    ]
  },

  "barpeta": {
    cityName: "Barpeta",
    metaTitle: "Cake Delivery in Barpeta | Sankardeva Bhakti Vaishnavism Satra Assam | RedHeart",
    metaDescription: "Order cakes online in Barpeta. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barpeta",
    metaKeyword: "cake delivery barpeta, order cake online barpeta, birthday cake barpeta, custom cake barpeta, same day cake delivery barpeta Sankardeva Vaishnavism Barpeta Satra Manikarnika holy city Assam Brahmaputra",
    footerContent: `
<h2>Cake Delivery in Barpeta — Sankardeva's Bhakti Vaishnavism, Barpeta Satra, and Assam's Second Holiest City</h2>
<p>Barpeta — the headquarters of Barpeta district in Assam, called the "Kashi of Assam" or the second holiest city in Assam — the most important centre of the Sankardeva Vaishnavite (Ekasarana Dharma) tradition outside Majuli (Srimanta Sankardeva — the 15th-16th century Assamese polymath philosopher-saint-dramatist-poet who founded the Ekasarana Dharma (one-shelter, one-God devotion) and the Satra system (Vaishnavite monasteries) — is one of the greatest figures in Assam's cultural history; Sankardeva revolutionised Assamese culture by creating Ankia Naat (one-act devotional dramas), Sattriya dance (UNESCO classical dance), Bargeet (devotional songs), and Naamghar (village prayer halls — the centre of Assam's social life); the Barpeta Satra (Barpeta Kirtan Ghar — established in 1583 CE by Madhavdeva, Sankardeva's chief disciple, after Sankardeva's passing in 1568) is one of Assam's oldest and most architecturally magnificent satras; the Barpeta town is a major centre of bhakti pilgrimage; the Manash temple (Barpeta) is a major local shrine; the Barpeta Holi (called Doul Utsav in Assam) is celebrated with mass singing and dance at the Barpeta Satra and is one of the most spectacular Holi celebrations in Northeast India; the Beki River (Brahmaputra tributary) flows near Barpeta; the district borders Dhubri, Nalbari, Kamrup, and Kokrajhar), and a city of Vaishnavite satra tradition and mass Doul Utsav — is Assam's most devotionally Sankardeva-pilgrim and Bhakti-Ekasarana sacred district. From birthday parties in Barpeta to celebration cakes — RedHeart covers all Barpeta zones: Barpeta town, Barpeta Road, Sarthebari, Patacharkuchi, Baghbar, Chenga.</p>
<p>Our Barpeta cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Barpeta Satra Vaishnavism / Sankardeva Bhakti / Doul Utsav Holi Assam / Ekasarana Dharma-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barpeta, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barpeta town, Barpeta Road, Sarthebari, Patacharkuchi, Baghbar, Chenga</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Barpeta Satra Fondant, Doul Utsav Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barpeta?", answer: "Yes, same-day cake delivery is available across all Barpeta areas — Barpeta town, Barpeta Road, Sarthebari, Patacharkuchi, and Baghbar — for orders placed before 3 PM." },
      { question: "Do you have Barpeta Satra Sankardeva Vaishnavism-themed cakes?", answer: "Yes! The Barpeta Satra (established 1583 CE by Madhavdeva — one of Assam's oldest and most magnificent satras of the Ekasarana Dharma tradition founded by Srimanta Sankardeva, who created Sattriya dance, Ankia Naat drama, and Bargeet devotional music) and the spectacular Barpeta Doul Utsav (mass Holi celebrations with thousands singing and dancing at the Satra) inspire our most Bhakti-devotionally and culturally Assamese Barpeta fondant cakes." },
      { question: "Are eggless cakes available in Barpeta?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Barpeta delivery." }
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
