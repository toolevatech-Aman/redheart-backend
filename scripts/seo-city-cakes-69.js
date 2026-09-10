// Cakes Batch 69 — 12 cities
// Gujarat: Panchmahal (Godhra), Kheda, Anand, Narmada (done as Rajpipla), Panchmahals again skip
// TN: Dharmapuri, Krishnagiri, Tirupattur, Ranipet, Tiruvannamalai (check)
// AP: Palnadu, Nandyal, Sri Sathya Sai, Alluri Sitharama Raju
// Jharkhand: Latehar, Garhwa

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "godhra": {
    cityName: "Godhra",
    metaTitle: "Cake Delivery in Godhra | Panchmahals Gujarat Panchmahal Banas Hills Tribal | RedHeart",
    metaDescription: "Order cakes online in Godhra (Panchmahals). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Godhra (Panchmahals)",
    metaKeyword: "cake delivery godhra panchmahals, order cake online godhra, birthday cake godhra, custom cake godhra panchmahals, same day cake delivery Godhra Panchmahals Gujarat Pavagadh UNESCO Champaner tribal hills Banas River",
    footerContent: `
<h2>Cake Delivery in Godhra (Panchmahals) — Pavagadh-Champaner UNESCO, Tribal Hills, and Panchmahal Plateau</h2>
<p>Godhra — the district headquarters of Panchmahal district in Gujarat (eastern Gujarat; Panchmahal hills; tribal zone; Banas River), a district containing one of UNESCO's finest medieval heritage sites (the Champaner-Pavagadh Archaeological Park (Champaner-Pavagadh — UNESCO World Heritage Site inscribed 2004; in Panchmahal district; the Champaner-Pavagadh Archaeological Park is a cultural landscape consisting of a fortified medieval city, a prehistoric site, an early Hindu capital, and a mosque complex; the Pavagadh hill (762m) is topped by the Mahakali temple — a major pilgrimage site; the hill is reached by a ropeway; the Champaner city at the foot of Pavagadh was built by Sultan Mahmud Begada of Gujarat in 1484 CE; Champaner became Gujarat's capital for a time; the Jami Masjid of Champaner — with its 172 pillars and remarkable stone carving — is one of India's finest mosques; Champaner has a unique blend of Hindu-Jain-Islamic architecture); the Panchmahal Tribal Zone (Panchmahals district has a significant tribal population — Bhil, Nayaka, Rathwa; the Panchmahal hills are historically tribal territory; the Panchmahal hill forest; the Vadaj-Shehera area is tribal); the Banas River (the Banas flows through Panchmahal; the Banas is a tributary of the Sabarmati), and a city of Champaner-Pavagadh UNESCO-2004 and Bhil-tribal-Panchmahal — is Gujarat's most Champaner-Pavagadh-UNESCO and Bhil-tribal Godhra. From birthday parties in Godhra to celebration cakes — RedHeart covers all areas: Godhra city, Champaner, Pavagadh, Halol, Kalol, Lunawada adjacent, Shehera.</p>
<p>Our Godhra cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Godhra (Panchmahals), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Godhra city, Champaner, Pavagadh, Halol, Kalol, Shehera</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Godhra (Panchmahals)?", answer: "Yes, same-day cake delivery is available across Godhra city, Champaner, Pavagadh, Halol, and Kalol for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Godhra?", answer: "Yes, all flavours are available in eggless variants for Godhra delivery." },
      { question: "Do you deliver midnight cakes in Godhra?", answer: "Yes, midnight birthday cake delivery is available across Godhra city zones." }
    ]
  },

  "dharmapuri": {
    cityName: "Dharmapuri",
    metaTitle: "Cake Delivery in Dharmapuri | Tamil Nadu Hogenakkal Falls Pennai River | RedHeart",
    metaDescription: "Order cakes online in Dharmapuri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dharmapuri",
    metaKeyword: "cake delivery dharmapuri, order cake online dharmapuri, birthday cake dharmapuri, custom cake dharmapuri, same day cake delivery Dharmapuri Tamil Nadu Hogenakkal Falls Pennai River mango sapota Karnataka border",
    footerContent: `
<h2>Cake Delivery in Dharmapuri — Hogenakkal Falls ("Niagara of India"), Pennai River, and Mango Belt</h2>
<p>Dharmapuri — the district headquarters of Dharmapuri district in Tamil Nadu (northwestern TN; Pennai / Ponnaiyar River; Karnataka border; Hogenakal Falls), a district known for India's most dramatic river falls and its mango orchards (the Hogenakkal Falls (Hogenakkal — in Dharmapuri district; on the Kaveri River (not the Pennai; the Kaveri forms part of the Karnataka-Tamil Nadu border in this region and the Hogenakkal stretch is where the Kaveri descends through the rocky Dharmapuri landscape); Hogenakkal literally means "Smoking Rocks" in Kannada/Tamil — the mist from the waterfalls resembles smoke; the falls are set in a rocky gorge; the Hogenakkal coracle boat rides (traditional round wicker boats) are famous; the Hogenakkal is sometimes called the "Niagara of South India" or "Niagara of India"; the falls are a major tourist and weekend destination from Bangalore and Salem; the Hogenakkal Water Treatment Plant — designed to supply drinking water to Dharmapuri and Krishnagiri — is a project on this river); the Mango Orchards (Dharmapuri district is one of India's top mango-producing districts; mangoes from Dharmapuri — particularly Bangalora / Totapuri variety — are famous; the Dharmapuri mango orchards; Dharmapuri also grows sapota (chickoo) and bananas); the Pennai / Ponnaiyar River (the Pennai flows through Dharmapuri; the district's agriculture depends on the river), and a city of Hogenakkal Falls Niagara-of-South-India-Kaveri and Dharmapuri-mango-Totapuri — is TN's most Hogenakkal-Falls-Smoking-Rocks-Kaveri and mango-sapota Dharmapuri. From birthday parties in Dharmapuri to celebration cakes — RedHeart covers all areas: Dharmapuri city, Hogenakkal, Pennagaram, Palacode, Karimangalam, Harur.</p>
<p>Our Dharmapuri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharmapuri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharmapuri city, Hogenakkal, Pennagaram, Palacode, Karimangalam, Harur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dharmapuri?", answer: "Yes, same-day cake delivery is available across Dharmapuri city, Hogenakkal, Pennagaram, Palacode, and Karimangalam for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dharmapuri?", answer: "Yes, all flavours are available in eggless variants for Dharmapuri delivery." },
      { question: "Do you deliver midnight cakes in Dharmapuri?", answer: "Yes, midnight birthday cake delivery is available across Dharmapuri city zones." }
    ]
  },

  "krishnagiri": {
    cityName: "Krishnagiri",
    metaTitle: "Cake Delivery in Krishnagiri | Tamil Nadu Krishnagiri Dam Mango Bangalore Border | RedHeart",
    metaDescription: "Order cakes online in Krishnagiri. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Krishnagiri",
    metaKeyword: "cake delivery krishnagiri, order cake online krishnagiri, birthday cake krishnagiri, custom cake krishnagiri, same day cake delivery Krishnagiri Tamil Nadu Krishnagiri Dam Bangalore border mango industrial SIPCOT aerospace",
    footerContent: `
<h2>Cake Delivery in Krishnagiri — Krishnagiri Dam, India's Fastest-Growing Industrial Hub, and Mango Capital</h2>
<p>Krishnagiri — the district headquarters of Krishnagiri district in Tamil Nadu (northwestern TN; Karnataka border; Bangalore-Chennai highway), one of South India's fastest-growing industrial districts (the Krishnagiri SIPCOT Industrial Estate (Krishnagiri — on the NH44 / NH7 (Bangalore-Chennai highway), one of India's busiest trade corridors; the SIPCOT (State Industries Promotion Corporation of Tamil Nadu) industrial estates at Krishnagiri — particularly Hosur (in Krishnagiri district) — are among India's most important manufacturing clusters; Hosur is home to Foxconn (iPhone assembly), TVS Motor Company, Titan Watches, Bharat Heavy Electricals, Royal Enfield, and numerous auto component makers; the Hosur Industrial Estate was one of Tamil Nadu's first industrial estates (1972); Krishnagiri district has a major logistics hub due to its position between Bangalore and Chennai); the Krishnagiri Dam (Krishnagiri Dam — on the Ponnaiyar / Pennai River; the reservoir provides irrigation and drinking water for Krishnagiri district; a scenic picnic destination); the Mango orchards (Krishnagiri district is a major mango producer — the Dashehari, Bangalora, and Alphonso varieties; the area is an extension of the Dharmapuri mango belt); the Dimbam and Hogenakal adjacency (the Dimbam ghats — a scenic Nilgiri-adjacent area — are in Krishnagiri), and a city of Hosur-SIPCOT-Foxconn-iPhone and Krishnagiri-Dam-mango — is TN's most Hosur-Foxconn-TVS-Titan and Krishnagiri-Dam-mango Krishnagiri. From birthday parties in Krishnagiri to celebration cakes — RedHeart covers all areas: Krishnagiri city, Hosur, Denkanikota, Uthangarai, Shoolagiri, Pochampalli.</p>
<p>Our Krishnagiri cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnagiri, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnagiri city, Hosur, Denkanikota, Uthangarai, Shoolagiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Krishnagiri?", answer: "Yes, same-day cake delivery is available across Krishnagiri city, Hosur, Denkanikota, Uthangarai, and Shoolagiri for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Krishnagiri?", answer: "Yes, all flavours are available in eggless variants for Krishnagiri delivery." },
      { question: "Do you deliver midnight cakes in Krishnagiri / Hosur?", answer: "Yes, midnight birthday cake delivery is available across Krishnagiri city and Hosur zones." }
    ]
  },

  "tirupattur": {
    cityName: "Tirupattur",
    metaTitle: "Cake Delivery in Tirupattur | Tamil Nadu Yelagiri Hills Ambur Leather Vaniyambadi | RedHeart",
    metaDescription: "Order cakes online in Tirupattur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tirupattur",
    metaKeyword: "cake delivery tirupattur, order cake online tirupattur, birthday cake tirupattur, custom cake tirupattur, same day cake delivery Tirupattur Tamil Nadu Yelagiri Hills Ambur leather Vaniyambadi tannery biryani",
    footerContent: `
<h2>Cake Delivery in Tirupattur — Yelagiri Hills, Ambur Leather (World's Leather Hub), and Vaniyambadi Biryani</h2>
<p>Tirupattur — the district headquarters of Tirupattur district in Tamil Nadu (northwestern TN; carved from Vellore district in 2019; Karnataka border), a district combining a scenic hill station, a global leather cluster, and a famous biryani (the Yelagiri Hills (Yelagiri — a hill station at approximately 1,100m; in Tirupattur district; cooler than the surrounding plains; popular weekend destination from Chennai and Bangalore; the Yelagiri hills have trekking trails, orchards (roses, guava), and the Jalagamparai Waterfalls; the Swami Malai hills are in the Yelagiri range); the Ambur-Vaniyambadi Leather Cluster (Ambur and Vaniyambadi — towns in Tirupattur district; the Ambur-Ranipet-Vaniyambadi leather cluster is one of the world's largest leather manufacturing and export clusters; Ambur exports finished leather goods — shoes, bags, belts — to Europe and the USA; the Indian leather industry is the second largest employer in Tamil Nadu's manufacturing sector; Ambur alone has hundreds of tanneries and shoe factories); the Vaniyambadi Biryani (Vaniyambadi Biryani — a style of biryani from Vaniyambadi town in Tirupattur; an Arcot-style biryani using short-grain seeraga samba rice cooked with mutton; the Vaniyambadi biryani tradition dates to the Nawab period of the North Arcot region; a celebrated culinary tradition distinct from other Tamil Nadu biryanis), and a city of Yelagiri Hills and Ambur-world-leather-cluster and Vaniyambadi-biryani — is TN's most Ambur-Vaniyambadi-leather-cluster and Vaniyambadi-biryani-seeraga-samba Tirupattur. From birthday parties in Tirupattur to celebration cakes — RedHeart covers all areas: Tirupattur city, Ambur, Vaniyambadi, Yelagiri Hills, Jolarpet, Natrampalli.</p>
<p>Our Tirupattur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupattur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupattur city, Ambur, Vaniyambadi, Yelagiri Hills, Jolarpet</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tirupattur?", answer: "Yes, same-day cake delivery is available across Tirupattur city, Ambur, Vaniyambadi, Yelagiri Hills, and Jolarpet for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tirupattur?", answer: "Yes, all flavours are available in eggless variants for Tirupattur delivery." },
      { question: "Do you deliver midnight cakes in Tirupattur / Ambur?", answer: "Yes, midnight birthday cake delivery is available across Tirupattur city and Ambur zones." }
    ]
  },

  "ranipet": {
    cityName: "Ranipet",
    metaTitle: "Cake Delivery in Ranipet | Tamil Nadu Walajah Arcot Leather Palar River Vellore Border | RedHeart",
    metaDescription: "Order cakes online in Ranipet. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ranipet",
    metaKeyword: "cake delivery ranipet, order cake online ranipet, birthday cake ranipet, custom cake ranipet, same day cake delivery Ranipet Tamil Nadu Walajah Nawab Arcot leather Palar River Vellore border Fort Arcot",
    footerContent: `
<h2>Cake Delivery in Ranipet — Arcot Fort (Clive's Victory), Nawab of Arcot, and World-Renowned Leather Export Hub</h2>
<p>Ranipet — the district headquarters of Ranipet district in Tamil Nadu (northeastern TN; carved from Vellore district in 2019; Palar River), a district with deep colonial history and a world-class leather industry (the Arcot and Robert Clive (Fort Arcot — in Arcot town, Ranipet district; the Battle of Arcot (1751 CE) — a turning point in British imperial expansion in India; Robert Clive (of the East India Company) captured the fort of Arcot from the Nawab of Arcot's forces with a tiny force of 200 soldiers and held it for 53 days against a siege of 10,000 Mysorean and French-backed troops; the victory established Clive's reputation and began the systematic conquest of South India by the British; the Nawab of Arcot (Nabob of Arcot) — the Carnatic Nawabs — ruled much of Tamil Nadu for decades; the Nawab's family was in Arcot / Walajah; the term "nabob" (corruption of "nawab") entered English as a word for those who made their fortune in India); the Leather Industry (the Ranipet-Ambur-Vaniambadi leather cluster in Ranipet and Tirupattur districts; Ranipet has major tanneries and leather processing units; the town has had leather manufacturing since the colonial era; SIDCO leather park); the Palar River (the Palar — one of Tamil Nadu's major rivers — flows through Ranipet; the Palar River provides water for tanneries), and a city of Fort Arcot Robert-Clive-1751 Battle and Leather-export-hub — is TN's most Arcot-Fort-Clive-1751-Battle and leather-tannery Ranipet. From birthday parties in Ranipet to celebration cakes — RedHeart covers all areas: Ranipet city, Arcot, Walajah, Arakkonam, Sholinghur, Nemili.</p>
<p>Our Ranipet cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ranipet, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ranipet city, Arcot, Walajah, Arakkonam, Sholinghur, Nemili</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ranipet?", answer: "Yes, same-day cake delivery is available across Ranipet city, Arcot, Walajah, Arakkonam, and Sholinghur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ranipet?", answer: "Yes, all flavours are available in eggless variants for Ranipet delivery." },
      { question: "Do you deliver midnight cakes in Ranipet / Arcot?", answer: "Yes, midnight birthday cake delivery is available across Ranipet city and Arcot zones." }
    ]
  },

  "palnadu": {
    cityName: "Palnadu",
    metaTitle: "Cake Delivery in Palnadu | AP Nagarjunasagar Krishna River Palnad Battle | RedHeart",
    metaDescription: "Order cakes online in Palnadu. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Palnadu",
    metaKeyword: "cake delivery palnadu, order cake online palnadu, birthday cake palnadu, custom cake palnadu, same day cake delivery Palnadu Andhra Pradesh Nagarjunasagar Krishna River limestone coal Macherla Narasaraopet",
    footerContent: `
<h2>Cake Delivery in Palnadu — Nagarjunasagar Dam, Krishna River, and Historic Palnadu Battle Heritage</h2>
<p>Palnadu — the district headquarters of Palnadu district in Andhra Pradesh (central Andhra; Krishna River; carved from Guntur and Nalgonda districts in 2022), a newly created district with historical depth and the Nagarjunasagar reservoir (the Nagarjunasagar Dam and Reservoir (Nagarjunasagar Dam — one of the world's largest masonry dams; on the Krishna River; at the border of Palnadu (Andhra Pradesh) and Nalgonda (Telangana); the dam was built 1955-1967; it created the Nagarjunasagar reservoir — one of the world's largest man-made lakes; the dam provides irrigation to millions of hectares in AP and Telangana; the Nagarjunakonda island — submerged within the reservoir — was an ancient Buddhist site (2nd century BCE-4th century CE) excavated and relocated before submergence; the Nagarjunakonda Museum on the island houses the relocated artifacts); the Battle of Palnadu (the Battle of Palnadu — an 1182 CE civil war in the Kota dynasty of the Palnadu region; one of the most celebrated battles in Telugu oral tradition; the battle was immortalized in the "Palnati Vira Charitra" — one of Telugu literature's greatest epic poems; the warriors of Palnadu — the Brahma Naidu, Nalagama, and Karna sides — are folk heroes venerated across Andhra; the battle was fought near Karempudi area; Balacandra (Balchandra) — a hero of the battle — has a famous temple); the Macherla area (Macherla — a key town and earlier HQ zone of the Palnadu region)), and a city of Nagarjunasagar Dam-UNESCO-listed and Palnadu Battle-1182-Telugu-epic — is AP's most Nagarjunasagar-dam-masonry and Palnadu-Battle-Vira-Charitra Palnadu. From birthday parties in Palnadu to celebration cakes — RedHeart covers all areas: Narasaraopet (Palnadu HQ), Macherla, Vinukonda, Sattenapalle, Gurazala, Karempudi.</p>
<p>Our Palnadu cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palnadu (Narasaraopet), AP</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narasaraopet, Macherla, Vinukonda, Sattenapalle, Gurazala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Palnadu?", answer: "Yes, same-day cake delivery is available across Narasaraopet, Macherla, Vinukonda, Sattenapalle, and Gurazala for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Palnadu?", answer: "Yes, all flavours are available in eggless variants for Palnadu delivery." },
      { question: "Do you deliver midnight cakes in Palnadu (Narasaraopet)?", answer: "Yes, midnight birthday cake delivery is available across Narasaraopet city zones." }
    ]
  },

  "nandyal": {
    cityName: "Nandyal",
    metaTitle: "Cake Delivery in Nandyal | AP Srisailam Mallikarjuna Jyotirlinga Krishna Nallamalai | RedHeart",
    metaDescription: "Order cakes online in Nandyal. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nandyal",
    metaKeyword: "cake delivery nandyal, order cake online nandyal, birthday cake nandyal, custom cake nandyal, same day cake delivery Nandyal Andhra Pradesh Srisailam Jyotirlinga Mallikarjuna Nallamalai Forest Krishna River tiger",
    footerContent: `
<h2>Cake Delivery in Nandyal — Srisailam Jyotirlinga, Nallamalai Forest Tiger Reserve, and Krishna River Gorge</h2>
<p>Nandyal — the district headquarters of Nandyal district in Andhra Pradesh (southern-central AP; Krishna River; Nallamalai Hills; carved from Kurnool district in 2022), a district adjacent to one of India's holiest Shiva shrines and a vital tiger forest (the Srisailam Mallikarjuna Jyotirlinga (Srisailam — in Nandyal district (the Srisailam temple is on the Krishna gorge in the Nallamalai hills; the Mallikarjuna Swamy temple at Srisailam is one of India's 12 Jyotirlingas (the holiest Shiva shrines); the temple is also associated with Goddess Bhramaramba Devi — one of the 18 Maha Shakti Peethas; Srisailam is thus unique as both a Jyotirlinga and a Shakti Peetha; the Srisailam Dam / Dr. K. L. Rao Sagar is on the Krishna — one of India's largest hydroelectric projects); the Nallamalai Forest and Tiger Reserve (Nallamalai Hills — an extension of the Eastern Ghats; the Nagarjunasagar-Srisailam Tiger Reserve is the largest tiger reserve in India by area (approximately 3,568 sq km core); the Nallamalai forest covers Nandyal and other districts; it is habitat for tigers, leopards, wolves, sloth bears, and the endangered Indian wild dog / dhole); the Nandyal limestone (Nandyal district has major cement factories — the area has limestone deposits), and a city of Srisailam Mallikarjuna Jyotirlinga + Shakti-Peetha dual and Nallamalai-Largest-Tiger-Reserve — is AP's most Srisailam-Jyotirlinga-Shakti-Peetha-dual and Nallamalai-Largest-Tiger-Reserve Nandyal. From birthday parties in Nandyal to celebration cakes — RedHeart covers all areas: Nandyal city, Srisailam, Allagadda, Atmakur, Nandikotkur, Dornipadu.</p>
<p>Our Nandyal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nandyal, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nandyal city, Srisailam, Allagadda, Atmakur, Nandikotkur, Dornipadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nandyal?", answer: "Yes, same-day cake delivery is available across Nandyal city, Srisailam, Allagadda, Atmakur, and Nandikotkur for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nandyal?", answer: "Yes, all flavours are available in eggless variants for Nandyal delivery." },
      { question: "Do you deliver midnight cakes in Nandyal?", answer: "Yes, midnight birthday cake delivery is available across Nandyal city zones." }
    ]
  },

  "sri-sathya-sai": {
    cityName: "Sri Sathya Sai",
    metaTitle: "Cake Delivery in Sri Sathya Sai | AP Puttaparthi Sai Baba Pennar River Hindupur | RedHeart",
    metaDescription: "Order cakes online in Sri Sathya Sai (Puttaparthi). Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sri Sathya Sai (Puttaparthi)",
    metaKeyword: "cake delivery sri sathya sai puttaparthi, order cake online puttaparthi, birthday cake puttaparthi, custom cake sri sathya sai, same day cake delivery Sri Sathya Sai Puttaparthi Andhra Pradesh Prasanthi Nilayam Pennar River Hindupur",
    footerContent: `
<h2>Cake Delivery in Sri Sathya Sai (Puttaparthi) — Prasanthi Nilayam, Sathya Sai Baba's Abode, and Pennar River</h2>
<p>Sri Sathya Sai — the district headquarters of Sri Sathya Sai district in Andhra Pradesh (central AP; carved from Anantapur district in 2022; Pennar River; Karnataka border), a district named after the celebrated spiritual leader Sathya Sai Baba who was born and lived in Puttaparthi (the Prasanthi Nilayam / Puttaparthi (Puttaparthi — the birthplace and abode of Sathya Sai Baba (Sathyanarayana Raju; born November 23, 1926; died April 24, 2011 CE); Sathya Sai Baba was one of India's most celebrated spiritual figures of the 20th century; he built an extensive ashram called Prasanthi Nilayam ("Abode of Supreme Peace") at Puttaparthi which grew into a sprawling township; the Sri Sathya Sai Super Specialty Hospital at Puttaparthi provides free treatment; the Sri Sathya Sai University (Deemed); the Prasanthi Nilayam temple and Mandir; the Puttaparthi airstrip; Prasanthi Nilayam has an international population of devotees from 150+ countries; Sathya Sai Baba's birthday (November 23) — observed as "Brahmotsavam" — brings millions of devotees); the Pennar River (the Pennar / Papagni flows through the district; the Pennar is an important river for irrigation in south AP); the Hindupur area (Hindupur — an industrial and market town in Sri Sathya Sai district), and a city of Prasanthi-Nilayam-Sathya-Sai-Baba-150-countries and Puttaparthi-birthplace — is AP's most Puttaparthi-Prasanthi-Nilayam and Sathya-Sai-Baba-million-devotees Sri Sathya Sai. From birthday parties in Sri Sathya Sai to celebration cakes — RedHeart covers all areas: Puttaparthi city, Hindupur, Madakasira, Penukonda, Dharmavaram, Kadiri adjacent.</p>
<p>Our Sri Sathya Sai cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sri Sathya Sai (Puttaparthi), AP</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puttaparthi, Hindupur, Madakasira, Penukonda, Dharmavaram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sri Sathya Sai (Puttaparthi)?", answer: "Yes, same-day cake delivery is available across Puttaparthi, Hindupur, Madakasira, Penukonda, and Dharmavaram for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sri Sathya Sai?", answer: "Yes, all flavours are available in eggless variants for Sri Sathya Sai delivery." },
      { question: "Do you deliver midnight cakes in Puttaparthi?", answer: "Yes, midnight birthday cake delivery is available across Puttaparthi city zones." }
    ]
  },

  "alluri-sitharama-raju": {
    cityName: "Alluri Sitharama Raju",
    metaTitle: "Cake Delivery in Alluri Sitharama Raju | AP Rampa Rebellion Tribal Godavari Rampachodavaram | RedHeart",
    metaDescription: "Order cakes online in Alluri Sitharama Raju district. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Alluri Sitharama Raju District",
    metaKeyword: "cake delivery alluri sitharama raju, order cake online rampachodavaram, birthday cake alluri sitharama raju, custom cake rampachodavaram, same day cake delivery Alluri Sitharama Raju AP Rampa Rebellion tribal Godavari forest Paderu",
    footerContent: `
<h2>Cake Delivery in Alluri Sitharama Raju — Rampa Rebellion (1922-24) Hero, Eastern Ghats Tribal Forests, and Godavari Gorge</h2>
<p>Alluri Sitharama Raju — the district headquarters of Alluri Sitharama Raju district in Andhra Pradesh (north AP; Eastern Ghats; carved from East and West Godavari districts in 2022), a district named after the legendary tribal freedom fighter who led the Rampa Rebellion (the Alluri Sitharama Raju and Rampa Rebellion (Alluri Sitharama Raju (1897-1924 CE) — a revolutionary freedom fighter who led the Rampa Rebellion (Manyam Rebellion); born in present-day AP; he mobilized the Koya and Kondh tribal people of the Rampa forest area (Eastern Ghats) against British rule; the Rampa Rebellion (1922-1924) — the tribal rebels used guerrilla warfare in the dense forests; they captured British arms, raided police stations, and evaded the colonial army for years; Alluri was captured and shot dead by the British in 1924 at Koyyuru; he was called "Manyam Veerudu" (Hero of the Forests); the Central government issued a ₹10 stamp and a coin; the Alluri Sitharama Raju 125th birth anniversary was commemorated by PM Modi in 2022 at Bhimavaram; the new district is named in his honour); the Eastern Ghats tribal zone (the Alluri Sitharama Raju district is heavily forested; the Koya, Kondh, and Valmiki tribes inhabit the forests; the Paderu area — a hill station and tribal sub-division); the Godavari gorge (the Godavari River flows through the eastern parts of the district; the Godavari gorge between AP and Chhattisgarh), and a city of Alluri Sitharama Raju Rampa-Rebellion-tribal-1922-guerrilla and Eastern-Ghats-Koya-Kondh — is AP's most Alluri-Sitharama-Raju-Manyam-Veerudu and Rampa-Rebellion-1922-tribal Alluri Sitharama Raju. From birthday parties in this district to celebration cakes — RedHeart covers all areas: Rampachodavaram (HQ), Paderu, Maredumilli, Chintoor, Kovvur adjacent, Devipatnam.</p>
<p>Our Alluri Sitharama Raju cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alluri Sitharama Raju (Rampachodavaram), AP</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rampachodavaram, Paderu, Maredumilli, Chintoor, Devipatnam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Alluri Sitharama Raju?", answer: "Yes, same-day cake delivery is available across Rampachodavaram, Paderu, Maredumilli, Chintoor, and Devipatnam for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Alluri Sitharama Raju?", answer: "Yes, all flavours are available in eggless variants for delivery." },
      { question: "Do you deliver midnight cakes in Rampachodavaram?", answer: "Yes, midnight birthday cake delivery is available across Rampachodavaram city zones." }
    ]
  },

  "latehar": {
    cityName: "Latehar",
    metaTitle: "Cake Delivery in Latehar | Jharkhand Betla Tiger Reserve Palamau Coal Mahuadanr | RedHeart",
    metaDescription: "Order cakes online in Latehar. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Latehar",
    metaKeyword: "cake delivery latehar, order cake online latehar, birthday cake latehar, custom cake latehar, same day cake delivery Latehar Jharkhand Betla National Park Palamau Tiger Reserve Wolf Sanctuary Mahuadanr coal",
    footerContent: `
<h2>Cake Delivery in Latehar — Betla (Palamau Tiger Reserve), Mahuadanr Wolf Sanctuary, and Jharkhand's Forest Heartland</h2>
<p>Latehar — the district headquarters of Latehar district in Jharkhand (central-western Jharkhand; Betla; Chhattisgarh border), a forest district containing Jharkhand's only national park and India's only wolf sanctuary (the Betla National Park / Palamau Tiger Reserve (Betla National Park — in Latehar district; one of India's first national parks; the Betla (PETA) area; the Palamau Tiger Reserve covers Betla; the Palamau Fort — a 16th-17th century CE Chero dynasty fort in the jungle — is a remarkable heritage structure inside a national park; the Palamau Tiger Reserve is known for tigers, elephants, leopards, wild dogs, and sloth bears; the Koel River flows through the reserve; the historical Aurangabad fort ruins are nearby); the Mahuadanr Wolf Sanctuary (Mahuadanr Wolf Sanctuary — in Latehar district; one of India's smallest wildlife sanctuaries (63 sq km); the only sanctuary in India specifically designated for the Indian wolf (Canis lupus pallipes); the Indian wolf — a sub-species of the grey wolf — is found in dry grasslands and scrub; the sanctuary protects wolf habitat in the Chhota Nagpur Plateau landscape); the coal belt (Latehar district has coal deposits — the Chhota Nagpur Coalfields extend here; the Palamau coalfield), and a city of Betla-Palamau Tiger Reserve and Mahuadanr India's-only-wolf-sanctuary — is Jharkhand's most Betla-Palamau-Tiger-Reserve and Mahuadanr-India-only-wolf-sanctuary Latehar. From birthday parties in Latehar to celebration cakes — RedHeart covers all areas: Latehar city, Betla, Chandwa, Mahuadanr, Balumath, Manatu.</p>
<p>Our Latehar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Latehar, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Latehar city, Betla, Chandwa, Mahuadanr, Balumath, Manatu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Latehar?", answer: "Yes, same-day cake delivery is available across Latehar city, Betla, Chandwa, Mahuadanr, and Balumath for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Latehar?", answer: "Yes, all flavours are available in eggless variants for Latehar delivery." },
      { question: "Do you deliver midnight cakes in Latehar?", answer: "Yes, midnight birthday cake delivery is available across Latehar city zones." }
    ]
  },

  "garhwa": {
    cityName: "Garhwa",
    metaTitle: "Cake Delivery in Garhwa | Jharkhand Son River Bonded Labour Freedom Koel Palamu | RedHeart",
    metaDescription: "Order cakes online in Garhwa. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Garhwa",
    metaKeyword: "cake delivery garhwa, order cake online garhwa, birthday cake garhwa, custom cake garhwa, same day cake delivery Garhwa Jharkhand Son River bonded labour freedom movement Koel Palamu forests UP border",
    footerContent: `
<h2>Cake Delivery in Garhwa — Son River, Bonded Labour Liberation Movement, and Jharkhand-UP Border Forests</h2>
<p>Garhwa — the district headquarters of Garhwa district in Jharkhand (western Jharkhand; Son River; Uttar Pradesh and Chhattisgarh border), a district with a remarkable socio-historical significance — the birthplace of India's bonded labour liberation movement (the Bonded Labour Liberation Movement (Garhwa district — specifically the Palamu-Garhwa area — became the centre of Swami Agnivesh and other activists' Bonded Labour Liberation movement in the 1970s-80s; the bonded labour / "bandhua mazdoor" system was widespread in the Chhota Nagpur Plateau particularly in Palamu and Garhwa areas; bonded agricultural labourers were trapped in debt-bondage to landlords; the Supreme Court of India's landmark judgment in Bandhua Mukti Morcha vs Union of India (1984) — a PIL filed by Swami Agnivesh's organization — declared bonded labour unconstitutional and directed the government to release bonded labourers; the Bonded Labour System (Abolition) Act was already passed in 1976 but enforcement was weak; the Garhwa-Palamu area became central to rehabilitation efforts); the Son River (the Son River — one of Ganga's major right-bank tributaries — flows through Garhwa district; the Son originates in Amarkantak, MP and flows east through Chhattisgarh and Jharkhand before joining the Ganga; the Son valley in Garhwa is agriculturally important); the Forests of Garhwa (the Garhwa forests contain Sal trees; it borders the Palamu Tiger Reserve in Latehar), and a city of Bonded Labour Liberation Garhwa-Palamu and Son River — is Jharkhand's most Garhwa-bonded-labour-liberation and Son-River Garhwa. From birthday parties in Garhwa to celebration cakes — RedHeart covers all areas: Garhwa city, Ranka, Bhawnathpur, Meral, Bhandaria, Dhurki.</p>
<p>Our Garhwa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Garhwa, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Garhwa city, Ranka, Bhawnathpur, Meral, Bhandaria, Dhurki</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango, Butterscotch, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Garhwa?", answer: "Yes, same-day cake delivery is available across Garhwa city, Ranka, Bhawnathpur, Meral, and Bhandaria for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Garhwa?", answer: "Yes, all flavours are available in eggless variants for Garhwa delivery." },
      { question: "Do you deliver midnight cakes in Garhwa?", answer: "Yes, midnight birthday cake delivery is available across Garhwa city zones." }
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
