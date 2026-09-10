// Cakes Batch 5 — 15 cities:
// Tirupati, Guntur, Karimnagar, Nizamabad,
// Tirunelveli, Vellore, Puducherry,
// Solapur, Kolhapur,
// Gorakhpur, Bareilly, Aligarh,
// Kota, Ajmer, Bikaner

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "tirupati": {
    cityName: "Tirupati",
    metaTitle: "Cake Delivery in Tirupati | Tirumala AP | RedHeart",
    metaDescription: "Order cakes online in Tirupati. Same-day delivery across Tirupati. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Tirupati",
    metaKeyword: "cake delivery tirupati, order cake online tirupati, birthday cake tirupati, custom cake tirupati, same day cake delivery tirupati tirumala balaji renigunta srinivasapuram air bypass road",
    footerContent: `
<h2>Cake Delivery in Tirupati — Balaji's Sacred City and Andhra's Pilgrimage Capital Celebrations</h2>
<p>Tirupati — Andhra Pradesh's holiest city, home to the Sri Venkateswara Swamy Temple at Tirumala (the world's most-visited pilgrimage site with over 60,000–100,000 devotees daily, and the world's richest temple by annual income), and a city of rapidly growing educational and IT infrastructure — is where celebrations happen with divine blessings. From birthday parties in the residential Renigunta Road colony to corporate cakes at the APSRTC colony, from anniversary surprises in the growing Air Bypass Road developments to student birthdays near Sri Venkateswara University — RedHeart covers all Tirupati zones: Central (Alipiri, Balaji Nagar, Leela Mahal Road), North (Renigunta, Srinivasapuram, Korlagunta), South (RC Road, Kapila Theertham, Tiruchanoor Road), East (Air Bypass Road, Avilala), West (Sivaji Road, Shanthi Nagar, Yerpedu Road) and Tirumala hill town.</p>
<p>Our Tirupati cake range: Chocolate, Black Forest, Red Velvet, Laddu-inspired (Tirupati special), Mango (Banganapalle!), Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupati, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alipiri, Renigunta, Balaji Nagar, Air Bypass Road, RC Road, Srinivasapuram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupati Laddu-theme, Chocolate, Mango (Banganapalle), Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Tirupati Laddu-inspired cakes?", answer: "Yes! Our Tirupati special — a melt-in-the-mouth besan-inspired cake with a hint of cardamom and ghee, designed to honour Tirumala's famous prasadam — is a unique Tirupati birthday tradition." },
      { question: "Can I get same-day cake delivery in Tirupati?", answer: "Yes, same-day cake delivery is available across all Tirupati areas — Alipiri, Renigunta, Balaji Nagar, RC Road, and Air Bypass Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tirupati?", answer: "Yes, all cakes for Tirupati are available in eggless variants — appropriate for the city's strong vegetarian and sattvic food tradition." }
    ]
  },

  "guntur": {
    cityName: "Guntur",
    metaTitle: "Cake Delivery in Guntur | Chilli Capital AP | RedHeart",
    metaDescription: "Order cakes online in Guntur. Same-day delivery across Guntur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Guntur",
    metaKeyword: "cake delivery guntur, order cake online guntur, birthday cake guntur, custom cake guntur, same day cake delivery guntur brodipet arundelpet nallapadu pattabhipuram",
    footerContent: `
<h2>Cake Delivery in Guntur — Chilli Capital, Textile Hub, and Andhra's Commercial Powerhouse Celebrations</h2>
<p>Guntur — Andhra Pradesh's commercial capital (unofficially), the "Chilli Capital of India" (the Guntur Sannam red chilli — fiery, aromatic, and prized worldwide — makes Guntur India's largest chilli trading hub, with Asia's largest chilli yard at Guntur), and a major cotton and tobacco market city — is a city of intense commerce and warm Telugu community celebrations. From birthday parties in the upscale Brodipet to corporate cakes at the busy Arundelpet commercial district, from anniversary surprises in the leafy Pattabhipuram residential area to student birthdays near Nagarjuna University — RedHeart covers all Guntur zones: Central (Brodipet, Arundelpet, Kothapet), North (Nallapadu, Seetharampuram, Brindavan Gardens), South (Pattabhipuram, Nagarampalem, Etukuru Road), East (Sankar Nagar, Pedda Kakani, Mangalagiri), West (Pedakakani, Tadikonda, Tenali Road).</p>
<p>Our Guntur cake range: Chocolate, Black Forest, Butterscotch, Mango (Banganapalle mango cream!), Red Velvet, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Guntur, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Brodipet, Arundelpet, Nallapadu, Pattabhipuram, Kothapet, Nagarampalem, Mangalagiri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango (Banganapalle), Chocolate, Photo Cake, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Guntur?", answer: "Yes, same-day cake delivery is available across all Guntur areas — Brodipet, Arundelpet, Nallapadu, and Pattabhipuram — for orders placed before 3 PM." },
      { question: "Is Banganapalle mango cake available in Guntur?", answer: "Yes! Banganapalle mango — the GI-tagged AP mango — is used in our signature Guntur mango cream cake, available for same-day delivery." },
      { question: "Are eggless cakes available in Guntur?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet, Mango — are available in eggless variants for Guntur delivery." }
    ]
  },

  "karimnagar": {
    cityName: "Karimnagar",
    metaTitle: "Cake Delivery in Karimnagar | Granite City Telangana | RedHeart",
    metaDescription: "Order cakes online in Karimnagar. Same-day delivery across Karimnagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karimnagar",
    metaKeyword: "cake delivery karimnagar, order cake online karimnagar, birthday cake karimnagar, custom cake karimnagar, same day cake delivery karimnagar mukarampura kothirampur godavarikhani",
    footerContent: `
<h2>Cake Delivery in Karimnagar — Granite City of Telangana, Godavari Banks, and Rising Industrial Hub</h2>
<p>Karimnagar — Telangana's third-largest city, the "Granite City" (the Karimnagar district is India's leading producer of black and pink granite, with hundreds of granite quarries and processing units), a city on the banks of the Manair River (a tributary of the Godavari), and an important administrative and educational hub of North Telangana — is a city of proud industrial heritage and warm community celebrations. From birthday parties in the upscale Mukarampura and Kothirampur colonies to corporate cakes at the KIADB industrial area, from Bathukamma celebration cakes (Karimnagar's Telangana flower festival) to anniversary surprises in the growing residential belt — RedHeart covers all Karimnagar zones: Central (Mukarampura, Kothirampur, Police Parade Ground), North (KIADB, Godavarikhani, Ramagundam area), South (Chelpur, Manakondur Road), East (Huzurabad Road, Jammikunta), West (Jagityal Road, Metpally).</p>
<p>Our Karimnagar cake range: Chocolate, Black Forest, Butterscotch, Mango, Red Velvet, Photo Cakes, Bathukamma-theme Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karimnagar, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mukarampura, Kothirampur, KIADB, Godavarikhani, Huzurabad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Butterscotch, Bathukamma Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karimnagar?", answer: "Yes, same-day cake delivery is available across all Karimnagar areas — Mukarampura, Kothirampur, and KIADB industrial area — for orders placed before 3 PM." },
      { question: "Are Bathukamma celebration cakes available in Karimnagar?", answer: "Yes, Bathukamma — Telangana's beloved flower festival — inspired floral fondant cakes are available for same-day delivery in Karimnagar." },
      { question: "Are eggless cakes available in Karimnagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet — are available in eggless variants for Karimnagar delivery." }
    ]
  },

  "nizamabad": {
    cityName: "Nizamabad",
    metaTitle: "Cake Delivery in Nizamabad | Turmeric City Telangana | RedHeart",
    metaDescription: "Order cakes online in Nizamabad. Same-day delivery across Nizamabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nizamabad",
    metaKeyword: "cake delivery nizamabad, order cake online nizamabad, birthday cake nizamabad, custom cake nizamabad, same day cake delivery nizamabad armoor bodhan dichpally hyderabad highway",
    footerContent: `
<h2>Cake Delivery in Nizamabad — Turmeric Capital of India, Nizam's Northern Outpost</h2>
<p>Nizamabad — a major city in Telangana's Nizamabad district, the "Turmeric City" (Nizamabad district produces the largest quantity of turmeric in India — the Rajapore variety is prized for its intense yellow colour and aroma), a city with deep Nizam-era heritage, and a growing agri-commercial centre — is a city where tradition and modern celebrations coexist warmly. From birthday parties near the historic Nizamabad Fort to corporate cakes at the KAKATIYA cement plant area, from Bonalu celebration cakes (the Telangana festival) to anniversary surprises in the residential Armoor Road colony — RedHeart covers all Nizamabad zones: Central (Fort area, Subhash Chowk, Station Road), North (Armoor, Soan, Kamareddy Highway), South (Dichpally, Jakranpally), East (Bodhan, Banswada), West (Yellareddy, Bhiknoor, Hyderabad NH).</p>
<p>Our Nizamabad cake range: Chocolate, Black Forest, Butterscotch, Mango, Red Velvet, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nizamabad, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fort area, Subhash Chowk, Armoor, Bodhan, Dichpally, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Butterscotch, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nizamabad?", answer: "Yes, same-day cake delivery is available across all Nizamabad areas — Fort area, Subhash Chowk, Armoor, and Bodhan — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nizamabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet — are available in eggless variants for Nizamabad delivery." },
      { question: "Do you deliver cakes to the Bodhan area from Nizamabad?", answer: "Yes, Bodhan town (40 km from Nizamabad city) and Armoor are covered under our Nizamabad delivery zone." }
    ]
  },

  "tirunelveli": {
    cityName: "Tirunelveli",
    metaTitle: "Cake Delivery in Tirunelveli | Halwa City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Tirunelveli. Same-day delivery across Tirunelveli. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tirunelveli",
    metaKeyword: "cake delivery tirunelveli, order cake online tirunelveli, birthday cake tirunelveli, custom cake tirunelveli, same day cake delivery tirunelveli palayamkottai melapalayam nanguneri",
    footerContent: `
<h2>Cake Delivery in Tirunelveli — Halwa City's Wheat-Halwa Legacy and the Tamrabarani River's Sweet Celebrations</h2>
<p>Tirunelveli — Tamil Nadu's ancient city on the Tamrabarani River, universally celebrated as the "Halwa City" (Tirunelveli Iruttu Kadai Halwa — made from a centuries-old secret wheat and ghee recipe in dark, smoky shops — is one of Tamil Nadu's most iconic foods), and a major administrative and educational centre for southern Tamil Nadu — is a city where sweet traditions run deep enough to inspire even sweeter birthday cakes. From birthday parties in the leafy Palayamkottai twin-city (home to the Church of the Holy Cross and St. John's Cathedral) to corporate cakes at the large Salem-Tirunelveli Highway industrial belt, from anniversary surprises in Melapalayam to student birthdays near Manonmaniam Sundaranar University — RedHeart covers all Tirunelveli zones: Central (Tirunelveli Junction, Bikshandar Koil), West (Palayamkottai, Melapalayam, Surandai Road), North (Nanguneri, Cheranmahadevi), South (Ambasamudram, Tenkasi Road), East (Pettai, Thoothukudi Highway, Manur).</p>
<p>Our Tirunelveli cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Halwa-inspired theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirunelveli, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palayamkottai, Melapalayam, Nanguneri, Junction, Ambasamudram, Pettai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Halwa-inspired Fondant, Photo Cake, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tirunelveli?", answer: "Yes, same-day cake delivery is available across all Tirunelveli areas — Palayamkottai, Melapalayam, Junction, and Nanguneri — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tirunelveli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tirunelveli delivery." },
      { question: "Do you deliver cakes to Ambasamudram and Tenkasi from Tirunelveli?", answer: "Yes, Ambasamudram and the Tenkasi Road areas are covered under our Tirunelveli delivery zone for same-day delivery." }
    ]
  },

  "vellore": {
    cityName: "Vellore",
    metaTitle: "Cake Delivery in Vellore | Fort City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Vellore. Same-day delivery across Vellore. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Vellore",
    metaKeyword: "cake delivery vellore, order cake online vellore, birthday cake vellore, custom cake vellore, same day cake delivery vellore gandhi nagar gandhi road cmc hospital katpadi",
    footerContent: `
<h2>Cake Delivery in Vellore — Fortress City, CMC Medical Hub, and VIT University's Birthday Cakes</h2>
<p>Vellore — Tamil Nadu's historic fortress city (the 16th-century Vellore Fort, one of South India's best-preserved forts, with its massive granite walls, a moat, and the Jalakandeswarar temple inside the fort complex), home to the world-renowned CMC (Christian Medical College) Hospital (one of India's best hospitals and a top medical college), and host to VIT University (one of India's most-attended private engineering universities with 15,000+ students) — is a city of history, medicine, and student life. From birthday parties in the old city's KK Nagar to corporate cakes at the CMC campus, from anniversary surprises in the leafy Katpadi area to student birthdays at VIT's vast Vellore campus — RedHeart covers all Vellore zones: Central (Arni Road, Gandhinagar, CMC area), North (Katpadi, Krishnapuram, Sankaranpalayam), South (Gudiyatham Road, Virupatchipuram), East (Melvisharam, Ambur Road), West (VIT campus area, Sathuvachari, Alamelumangapuram).</p>
<p>Our Vellore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vellore, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhinagar, CMC Hospital area, Katpadi, VIT campus, KK Nagar, Sathuvachari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Vellore Fort Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vellore?", answer: "Yes, same-day cake delivery is available across all Vellore areas — Gandhinagar, CMC Hospital area, Katpadi, and VIT campus — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to VIT University campus in Vellore?", answer: "Yes, VIT Vellore campus (Sathuvachari, Katpadi area), the CMC Hospital residential campus, and all Vellore city zones are fully covered." },
      { question: "Are eggless cakes available in Vellore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Vellore delivery." }
    ]
  },

  "puducherry": {
    cityName: "Puducherry",
    metaTitle: "Cake Delivery in Puducherry | French Riviera India | RedHeart",
    metaDescription: "Order cakes online in Puducherry (Pondicherry). Same-day delivery. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Puducherry",
    metaKeyword: "cake delivery puducherry pondicherry, order cake online puducherry, birthday cake puducherry, custom cake pondicherry, same day cake delivery puducherry white town goubert avenue auroville",
    footerContent: `
<h2>Cake Delivery in Puducherry — French Riviera of the East, Auroville, and Seaside Birthday Celebrations</h2>
<p>Puducherry (Pondicherry) — the Union Territory that was a French colony until 1954 and retains the most charming French colonial streetscapes in India (White Town / Ville Blanche — with mustard-yellow colonial villas, bougainvillea-draped walls, and tree-lined streets named Rue Suffren and Rue Laval), home to the Sri Aurobindo Ashram and the experimental international township of Auroville (a UNESCO-recognised city of human unity), and a charming coastal destination on the Bay of Bengal — is where birthday celebrations feel like a European café party by the sea. From birthday parties at the seaside Goubert Avenue promenade to corporate cakes at the SIPCOT industrial estate, from anniversary cakes at boutique heritage hotels in White Town to student birthdays near Pondicherry University — RedHeart covers all Puducherry zones: White Town (Heritage Quarter), French Quarter (Goubert Avenue, Rue de la Marine), Tamil Quarter (Mission Street, Anna Salai, Nehru Street), Lawspet, Mudaliarpet, and Auroville township.</p>
<p>Our Puducherry cake range: Chocolate, Black Forest, Red Velvet, Croissant-inspired cream cake (French touch!), Mango, Photo Cakes, Fondant French Riviera-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puducherry (Pondicherry), Union Territory</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">White Town, Goubert Avenue, Lawspet, Mudaliarpet, Auroville, SIPCOT, Pondicherry University area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">French Riviera Fondant, Chocolate, Red Velvet, Croissant Cream, Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Puducherry (Pondicherry)?", answer: "Yes, same-day cake delivery is available across all Puducherry areas — White Town, Goubert Avenue, Lawspet, Mudaliarpet, and Auroville — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Auroville in Puducherry?", answer: "Yes, Auroville township (approximately 10 km from Puducherry city centre) is covered under our Puducherry delivery zone." },
      { question: "Are French-inspired or Belgian chocolate cakes available in Puducherry?", answer: "Yes, our French Riviera collection — with French-inspired cream cakes, Belgian chocolate ganache cakes, and Paris-theme fondant cakes — is perfect for Puducherry's European-flavour celebrations." }
    ]
  },

  "solapur": {
    cityName: "Solapur",
    metaTitle: "Cake Delivery in Solapur | Textile City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Solapur. Same-day delivery across Solapur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Solapur",
    metaKeyword: "cake delivery solapur, order cake online solapur, birthday cake solapur, custom cake solapur, same day cake delivery solapur hutatma chowk vijapur road akkalkot dahitane",
    footerContent: `
<h2>Cake Delivery in Solapur — Terry-Towel Textile Capital, Siddheshwar Temple City, and Karnataka Border Celebrations</h2>
<p>Solapur — Maharashtra's 5th-largest city on the Bhima River, the "Textile Capital" (Solapur's terry-towel / chaddar / chappals are distributed across India — Solapur towels are a household name), home to the ancient Siddheshwar Temple (a 13th-century Shiva temple on a fortified island surrounded by a large lake, central to Solapur's identity), and a city at the Maharashtra-Karnataka border where Marathi and Kannada cultures blend — is a city of hard-working tradespeople and warm community celebrations. From birthday parties in the residential Vijay Nagar to corporate cakes at the Solapur textile mill district, from Siddheshwar Yatra celebration cakes to anniversary surprises in the growing MIDC belt — RedHeart covers all Solapur zones: Central (Hutatma Chowk, Railway Station, Dayanand Road), North (Akkalkot Road, Bhagyanagar, Gulbarga Road), South (Vijapur Road, Dahitane, Shivaji Nagar), East (MIDC, Vaidak Road, Kegaon), West (Hotgi Road, Takala, Kumtha Road).</p>
<p>Our Solapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Solapur, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hutatma Chowk, Vijapur Road, Akkalkot Road, MIDC, Bhagyanagar, Shivaji Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Solapur?", answer: "Yes, same-day cake delivery is available across all Solapur areas — Hutatma Chowk, Vijapur Road, Akkalkot Road, and MIDC — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Solapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Solapur delivery." },
      { question: "Do you deliver midnight cakes in Solapur?", answer: "Yes, midnight birthday cake delivery is available across Solapur's central and residential zones." }
    ]
  },

  "kolhapur": {
    cityName: "Kolhapur",
    metaTitle: "Cake Delivery in Kolhapur | Jaggery City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Kolhapur. Same-day delivery across Kolhapur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Kolhapur",
    metaKeyword: "cake delivery kolhapur, order cake online kolhapur, birthday cake kolhapur, custom cake kolhapur, same day cake delivery kolhapur rajarampuri laxmipuri shivaji park new palace",
    footerContent: `
<h2>Cake Delivery in Kolhapur — Maharashtra's Royal Wrestling Capital, Kolhapuri Chappal City, and Ambabai Temple</h2>
<p>Kolhapur — western Maharashtra's royal city (historically the seat of the Kolhapur Princely State of the Chhatrapati dynasty, descendants of Shivaji Maharaj), home to the Mahalakshmi (Ambabai) Temple (one of Maharashtra's most powerful Shakti peethas), famous for its iconic Kolhapuri chappals (the hand-crafted leather footwear that is a GI-tagged Indian treasure), Kolhapur jaggery (the sweetest and most aromatic in Maharashtra), and wrestling (Kolhapur has produced generations of kushti champions) — is a city of proud heritage and vibrant celebrations. From birthday parties in the upscale Rajarampuri to corporate cakes near the New Palace, from anniversary surprises in Laxmipuri to student birthdays near Shivaji University — RedHeart covers all Kolhapur zones: Central (Mahadwar Road, Bhausingji Road, Station Road), North (Rajarampuri, Jaysingpur, Kasaba Bawda), South (Laxmipuri, Shivaji Park, Nagala Park), East (Shahupuri, Rankala area, Vijay Nagar), West (Panchganga River belt, Karvir, Jayanti Road).</p>
<p>Our Kolhapur cake range: Chocolate, Black Forest, Red Velvet, Jaggery-Coconut cake (Kolhapur special!), Mango, Photo Cakes, Ambabai-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolhapur, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajarampuri, Laxmipuri, Shivaji Park, Shahupuri, New Palace area, Rankala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolhapur Jaggery-Coconut, Chocolate, Photo Cake, Ambabai Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Kolhapur jaggery cake?", answer: "Yes! Kolhapur's famous dark, aromatic jaggery — combined with fresh coconut — forms our signature Kolhapuri Jaggery-Coconut cake, a unique local celebration treat available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Kolhapur?", answer: "Yes, same-day cake delivery is available across all Kolhapur areas — Rajarampuri, Laxmipuri, Shivaji Park, and the New Palace area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kolhapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kolhapur delivery." }
    ]
  },

  "gorakhpur": {
    cityName: "Gorakhpur",
    metaTitle: "Cake Delivery in Gorakhpur | Gorakhnath City UP | RedHeart",
    metaDescription: "Order cakes online in Gorakhpur. Same-day delivery across Gorakhpur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Gorakhpur",
    metaKeyword: "cake delivery gorakhpur, order cake online gorakhpur, birthday cake gorakhpur, custom cake gorakhpur, same day cake delivery gorakhpur civil lines gorakhnath golghar shahpur",
    footerContent: `
<h2>Cake Delivery in Gorakhpur — Yogi City on the Rapti River and Eastern UP's Commercial Hub</h2>
<p>Gorakhpur — Uttar Pradesh's 5th-largest city, home to the Gorakhnath Temple (one of the most powerful Hindu monasteries in India, associated with the Nath yogi tradition and currently the seat of India's CM Yogi Adityanath), the BRD Medical College (in the news for its PICU facility), and a major railway junction (the largest railway divisional headquarters in UP) — is a city of deep religious identity and a large, aspirational middle class. From birthday parties in the affluent Civil Lines bungalows to corporate cakes at the large RICOH and other industrial units, from Navratri celebration cakes to anniversary surprises in Gorakhnath colony — RedHeart covers all Gorakhpur zones: Central (Golghar, Naushahar, Bank Road), North (Civil Lines, Mohaddipur, Kunraghat), South (Shahpur, Belghat, Piparraich Road), East (Gorakhnath, Rustampur, Padri Bazar), West (Medical College Road, BRD area, Railway Colony).</p>
<p>Our Gorakhpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Dussehri!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gorakhpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Golghar, Gorakhnath, Shahpur, Mohaddipur, BRD Medical College area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Mango (Dussehri), Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gorakhpur?", answer: "Yes, same-day cake delivery is available across all Gorakhpur areas — Civil Lines, Golghar, Gorakhnath colony, and Shahpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gorakhpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gorakhpur delivery." },
      { question: "Do you deliver midnight cakes in Gorakhpur?", answer: "Yes, midnight birthday cake delivery is available across Gorakhpur's central and residential zones." }
    ]
  },

  "bareilly": {
    cityName: "Bareilly",
    metaTitle: "Cake Delivery in Bareilly | Nath City UP | RedHeart",
    metaDescription: "Order cakes online in Bareilly. Same-day delivery across Bareilly. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bareilly",
    metaKeyword: "cake delivery bareilly, order cake online bareilly, birthday cake bareilly, custom cake bareilly, same day cake delivery bareilly civil lines cantonment pilibhit bypass subhash nagar",
    footerContent: `
<h2>Cake Delivery in Bareilly — Nath Nagari, Furniture Capital, and Western UP's Celebrations</h2>
<p>Bareilly — Uttar Pradesh's 3rd-largest city (population 1 million+), known as "Nath Nagari" (City of Nath saints — Alha, Udal, and the Panchala kingdom legends), famous for its Bareilly furniture (intricate bamboo/cane crafts), renowned for the "Bareilly ki Barfi" cultural identity (immortalised in Bollywood), and a large military cantonment city — is western UP's primary commercial and administrative hub. From birthday parties in the leafy Civil Lines bungalows to corporate cakes at the large Cantonment area, from anniversary surprises in the bustling Subhash Nagar to student birthdays near MJP Rohilkhand University — RedHeart covers all Bareilly zones: Central (Nai Basti, Ganesh Ganj, Civil Lines), North (Cantonment, Pilibhit Bypass, Rajendra Nagar), South (Subhash Nagar, Qutub Road, Sector 4), East (Faridpur, Nawabganj), West (Badaun Road, Ruhalpur, BHEL Colony).</p>
<p>Our Bareilly cake range: Chocolate, Black Forest, Red Velvet, Mango (Dussehri!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bareilly, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Cantonment, Subhash Nagar, Pilibhit Bypass, Ganesh Ganj, Faridpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Mango (Dussehri)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bareilly?", answer: "Yes, same-day cake delivery is available across all Bareilly areas — Civil Lines, Cantonment, Subhash Nagar, and Pilibhit Bypass area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bareilly?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bareilly delivery." },
      { question: "Do you deliver to the Cantonment area in Bareilly?", answer: "Yes, Bareilly Cantonment (one of UP's largest Army cantonments) and the Military area residential zones are covered by our same-day delivery." }
    ]
  },

  "aligarh": {
    cityName: "Aligarh",
    metaTitle: "Cake Delivery in Aligarh | Lock City UP | RedHeart",
    metaDescription: "Order cakes online in Aligarh. Same-day delivery across Aligarh. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Aligarh",
    metaKeyword: "cake delivery aligarh, order cake online aligarh, birthday cake aligarh, custom cake aligarh, same day cake delivery aligarh civil lines amu campus ramghat road upper fort",
    footerContent: `
<h2>Cake Delivery in Aligarh — City of Locks, AMU, and Western UP's Educational Hub</h2>
<p>Aligarh — Uttar Pradesh's 6th-largest city, the "Lock City of India" (Aligarh produces over 80% of India's locks and padlocks, and is the world's 2nd largest lock-producing city after Connecticut, USA), home to Aligarh Muslim University (AMU — one of India's most prestigious and historic central universities, founded 1875, with the iconic Strachey Hall and 30,000+ students), and a city at the crossroads of Braj culture and Mughal-era history — is a city of industrial hustle and deep educational legacy. From birthday parties in the AMU residential colony to corporate cakes at the Aligarh lock-market belt, from anniversary surprises in the leafy Civil Lines bungalows to student birthdays across AMU's large campus — RedHeart covers all Aligarh zones: Central (Ramghat Road, Rait, Dodhpur), North (Civil Lines, Railway Station, Marris Road), South (Centre Point, Jamalpur, Dhanipur Road), East (AMU campus, Dhour, Quarsi), West (Upper Fort, Tala Nagri, Sasni Gate).</p>
<p>Our Aligarh cake range: Chocolate, Black Forest, Red Velvet, Mango (Dussehri!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aligarh, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, AMU campus, Ramghat Road, Marris Road, Upper Fort, Centre Point</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Mango (Dussehri)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Aligarh?", answer: "Yes, same-day cake delivery is available across all Aligarh areas — Civil Lines, AMU campus, Ramghat Road, and Upper Fort — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the AMU campus in Aligarh?", answer: "Yes, Aligarh Muslim University's residential campus, Sir Syed Nagar, and the university town area are all covered by our same-day delivery." },
      { question: "Are eggless cakes available in Aligarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Aligarh delivery." }
    ]
  },

  "kota": {
    cityName: "Kota",
    metaTitle: "Cake Delivery in Kota | Coaching City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Kota. Same-day delivery across Kota. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Kota",
    metaKeyword: "cake delivery kota, order cake online kota, birthday cake kota, custom cake kota, same day cake delivery kota vigyan nagar talwandi dadabari rangpur jhalawar road",
    footerContent: `
<h2>Cake Delivery in Kota — India's Coaching Capital, JEE/NEET Hub, and Chambal River City</h2>
<p>Kota — Rajasthan's 3rd-largest city on the Chambal River, undisputably India's "Coaching Capital" (over 150,000 students from across India arrive in Kota every year to crack JEE, NEET, UPSC, and other competitive exams — Allen Career Institute, Resonance, Vibrant Academy, and dozens of other coaching institutes are all headquartered here), and a large industrial city (DCM Shriram fertilizers, JK Cement, Chambal Fertilizers) — is a city where birthdays are a big stress-breaker for hardworking students. From birthday parties in the student-dense Vigyan Nagar hostels to corporate cakes at the RIICO industrial area, from anniversary surprises in the residential Talwandi colony to senior JEE aspirant dorm parties in Dadabari — RedHeart covers all Kota zones: Central (Station Road, Gumanpura, Chambal Road), North (Vigyan Nagar, IPIA, Talwandi), South (Dadabari, Rangpur, Jhalawar Road), East (Kota Doria area, Rawatbhata Road), West (Nayapura, Balittha, Borkheda).</p>
<p>Our Kota cake range: Chocolate, Black Forest, Red Velvet, Mango (Kesar Mango!), Butterscotch, Photo Cakes, Fondant Chambal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kota, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vigyan Nagar, Talwandi, Dadabari, Rangpur, Gumanpura, IPIA, Jhalawar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Mango, Black Forest, Study-Stress-Buster Fondant!</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kota?", answer: "Yes, same-day cake delivery is available across all Kota areas — Vigyan Nagar, Talwandi, Dadabari, and Rangpur — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to student hostels and coaching institutes in Kota?", answer: "Yes, Vigyan Nagar, IPIA, Talwandi, and Dadabari — where most coaching institutes and student hostels are — are fully covered for same-day delivery in Kota." },
      { question: "Are eggless cakes available in Kota?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kota delivery." }
    ]
  },

  "ajmer": {
    cityName: "Ajmer",
    metaTitle: "Cake Delivery in Ajmer | Dargah City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Ajmer. Same-day delivery across Ajmer. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Ajmer",
    metaKeyword: "cake delivery ajmer, order cake online ajmer, birthday cake ajmer, custom cake ajmer, same day cake delivery ajmer dargah sharif pushkar road vaishali nagar mayo college",
    footerContent: `
<h2>Cake Delivery in Ajmer — Dargah Sharif's Sufi City, Pushkar Gateway, and Mayo College Heritage</h2>
<p>Ajmer — Rajasthan's 4th-largest city, home to the Dargah Sharif of Khwaja Moinuddin Chishti (one of the holiest Islamic pilgrimage sites in South Asia, attracting millions of devotees from all faiths annually), the ancient Adhai Din Ka Jhonpra mosque (built in 1193 by Qutb-ud-din Aibak), gateway to the sacred Pushkar Lake and Brahma Temple (the only Brahma temple in India), and the prestigious Mayo College (founded 1875, the "Eton of India" for Rajputana royals) — is a city of layered history and remarkable religious harmony. From birthday parties in the leafy Vaishali Nagar to corporate cakes at the RIICO Madar industrial area, from Urs celebration cakes (Ajmer's annual Sufi festival) to anniversary surprises near the scenic Ana Sagar Lake — RedHeart covers all Ajmer zones: Central (Nala Bazar, Dargah Bazaar, Purani Mandi), North (Vaishali Nagar, Subhash Nagar, Madar), South (Pushkar Road, Anasagar Circular Road), East (Mayo College area, Govindpura, Minta Road), West (Ramganj, Beawar Road, Foysagar area).</p>
<p>Our Ajmer cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Pushkar / Dargah heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ajmer, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vaishali Nagar, Dargah Bazaar, Pushkar Road, Mayo College area, Ana Sagar, Madar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ajmer?", answer: "Yes, same-day cake delivery is available across all Ajmer areas — Vaishali Nagar, Dargah Bazaar, Pushkar Road, and Mayo College area — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Pushkar from Ajmer?", answer: "Yes, Pushkar (14 km from Ajmer) is covered under our Ajmer delivery zone for same-day delivery." },
      { question: "Are eggless cakes available in Ajmer?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ajmer delivery." }
    ]
  },

  "bikaner": {
    cityName: "Bikaner",
    metaTitle: "Cake Delivery in Bikaner | Camel City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Bikaner. Same-day delivery across Bikaner. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bikaner",
    metaKeyword: "cake delivery bikaner, order cake online bikaner, birthday cake bikaner, custom cake bikaner, same day cake delivery bikaner old city junagarh fort station road ganga shahar",
    footerContent: `
<h2>Cake Delivery in Bikaner — Bikaji's Bhujia City, Junagarh Fort, and the Great Indian Desert Celebrations</h2>
<p>Bikaner — Rajasthan's 4th-largest city in the Thar Desert, the "Camel City" (Bikaner's camels are considered India's finest — the Bikaneri camel breed is larger and more elegant than other varieties), the birthplace of Bikaji Foods (the Bikaner bhujia — a fine-gram-flour savoury snack — is the original Bikaji bhujia, now an INR 4,000 crore listed company), and home to the Junagarh Fort (an undefeated fort that was never conquered in its 400+ year history, housing India's finest museum collection of a Rajput palace) — is a city of extraordinary culinary and heritage pride. From birthday parties in the old City Palace area to corporate cakes at the RIICO industrial belt, from anniversary surprises in the leafy Ganga Shahar residential colony to student birthdays near MG Government College — RedHeart covers all Bikaner zones: Central (Old City, Kote Gate, Junagarh Fort area), North (Ganga Shahar, Moti Bagh), South (Station Road, Rani Bazar, Sadar Bazar), East (Kodamdesar Road, Jasrasar Road), West (Sethani Ghat, Lalgarh Palace area).</p>
<p>Our Bikaner cake range: Chocolate, Black Forest, Red Velvet, Kesar-Malai (Rajasthani special), Mango, Photo Cakes, Fondant Junagarh-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bikaner, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Old City, Ganga Shahar, Station Road, Rani Bazar, Junagarh area, Lalgarh Palace area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Malai, Chocolate, Photo Cake, Junagarh Fort Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Kesar-Malai or Rajasthani-flavour cakes in Bikaner?", answer: "Yes! Kesar-Malai cake — infused with Rajasthani saffron and rich malai cream — is our Bikaner signature flavour, inspired by the city's world-famous sweet-making tradition." },
      { question: "Can I get same-day cake delivery in Bikaner?", answer: "Yes, same-day cake delivery is available across all Bikaner areas — Old City, Ganga Shahar, Station Road, and Rani Bazar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bikaner?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bikaner delivery." }
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
