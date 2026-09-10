// Cakes Batch 7 — 15 cities:
// Erode, Thanjavur, Tiruppur, Dindigul (Tamil Nadu)
// Tumkur, Davangere, Kalaburagi (Karnataka)
// Akola (Maharashtra)
// Muzaffarnagar, Saharanpur (UP)
// Muzaffarpur, Bhagalpur, Gaya (Bihar)
// Siliguri, Asansol (West Bengal)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "erode": {
    cityName: "Erode",
    metaTitle: "Cake Delivery in Erode | Turmeric City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Erode. Same-day delivery across Erode. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Erode",
    metaKeyword: "cake delivery erode, order cake online erode, birthday cake erode, custom cake erode, same day cake delivery erode perundurai sathy road veerappanchatram chithode",
    footerContent: `
<h2>Cake Delivery in Erode — Turmeric City, Textile Hub, and Bhavani River's Sweet Celebrations</h2>
<p>Erode — Tamil Nadu's 5th-largest city on the Bhavani River (a major tributary of the Kaveri), the "Turmeric City" (Erode is India's largest turmeric trading hub — the Erode Kurkuma turmeric is prized across the world for its high curcumin content and intense golden-yellow colour), and a major textile and readymade garment centre (Erode's Salem and Erode textile corridor is one of South India's biggest) — is a city of bustling commerce and warm Tamil community celebrations. From birthday parties in the busy Perundurai Road residential belt to corporate cakes at the large textile dyeing factories, from Pongal celebration cakes to anniversary surprises in Chithode — RedHeart covers all Erode zones: Central (Erode Junction, Bus Stand area, Gandhi Road), North (Perundurai, Kavindapadi, Gobichettipalayam Road), South (Sathy Road, Chithode, Bhavani Road), East (Veerappanchatram, Chennimalai, Modakurichi), West (Kangeyam Road, Dharapuram Road).</p>
<p>Our Erode cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Turmeric-yellow theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Erode, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Perundurai Road, Sathy Road, Chithode, Veerappanchatram, Bus Stand area, Bhavani Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Mango, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Erode?", answer: "Yes, same-day cake delivery is available across all Erode areas — Perundurai Road, Sathy Road, Chithode, and the Bus Stand area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Erode?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Erode delivery." },
      { question: "Do you deliver cakes to Perundurai from Erode?", answer: "Yes, Perundurai town (a major industrial township near Erode) is covered under our Erode delivery zone for same-day delivery." }
    ]
  },

  "thanjavur": {
    cityName: "Thanjavur",
    metaTitle: "Cake Delivery in Thanjavur | Rice Bowl Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Thanjavur. Same-day delivery across Thanjavur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Thanjavur",
    metaKeyword: "cake delivery thanjavur, order cake online thanjavur, birthday cake thanjavur, custom cake thanjavur, same day cake delivery thanjavur medical college hospital brihadeeswarar temple nanjikottai",
    footerContent: `
<h2>Cake Delivery in Thanjavur — Brihadeeswara Temple City, Carnatic Music's Heartland, and the Rice Bowl of Tamil Nadu</h2>
<p>Thanjavur (Tanjore) — one of Tamil Nadu's most culturally significant cities, home to the UNESCO World Heritage Brihadeeswara Temple (the 11th-century Chola masterpiece — the world's first granite temple and the tallest structure in medieval Tamil Nadu, built by Raja Raja Chola I), the cultural capital of Carnatic classical music and Bharatanatyam, a living centre of Tanjore painting (the gold-leafed Indian classical art form), and the "Rice Bowl of Tamil Nadu" (the Cauvery delta has fed Tamil Nadu for 2,000 years) — is a city of extraordinary civilisational depth and cultural pride. From birthday parties near the Medical College Hospital area to corporate cakes at the government offices, from Navarathri and Thaipusam festival cakes to anniversary surprises in the old-city heritage quarters — RedHeart covers all Thanjavur zones: Central (Old Town, Gandhiji Road, Medical College Road), North (Nanjikottai, Pattukotai Road, Papanasam), South (Mela Vennani, Kumbakonam Road), East (Vallam, Papanasam Road), West (Sengipatti, Thiruvaiyaru Road).</p>
<p>Our Thanjavur cake range: Chocolate, Black Forest, Red Velvet, Mango, Jasmine-cream (Tanjore special), Photo Cakes, Brihadeeswara / Tanjore Painting-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thanjavur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Old Town, Medical College Road, Nanjikottai, Kumbakonam Road, Papanasam, Gandhiji Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tanjore Painting Fondant, Chocolate, Mango, Black Forest, Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you make Tanjore Painting-inspired cakes in Thanjavur?", answer: "Yes! Tanjore's famous gold-leafed classical art style inspires our signature Tanjore Painting Fondant cake — a gorgeous art piece for milestone birthdays and anniversaries." },
      { question: "Can I get same-day cake delivery in Thanjavur?", answer: "Yes, same-day cake delivery is available across all Thanjavur areas — Old Town, Medical College Road, and Nanjikottai — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Thanjavur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Thanjavur delivery." }
    ]
  },

  "tiruppur": {
    cityName: "Tiruppur",
    metaTitle: "Cake Delivery in Tiruppur | Knitwear Capital Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Tiruppur. Same-day delivery across Tiruppur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Tiruppur",
    metaKeyword: "cake delivery tiruppur, order cake online tiruppur, birthday cake tiruppur, custom cake tiruppur, same day cake delivery tiruppur kumaran road nachipalayam veerapandi kangeyam",
    footerContent: `
<h2>Cake Delivery in Tiruppur — India's Knitwear Capital and the Dollar City's Billion-Dollar Celebrations</h2>
<p>Tiruppur — Tamil Nadu's "Dollar City" and India's undisputed knitwear capital (Tiruppur accounts for 90% of India's cotton hosiery exports, with an annual export turnover of USD 3+ billion — T-shirts, undergarments, and knitwear from Tiruppur are worn across Europe, America, and Asia), a city that transformed from a small agricultural town in the 1970s to one of India's most prosperous industrial cities today — is a city of ambitious entrepreneur families with large celebration budgets. From birthday parties in the upscale New Siddhapudur residential area to corporate cakes at the export company offices, from anniversary surprises in the Nachipalayam area to supplier celebration parties — RedHeart covers all Tiruppur zones: Central (Kumaran Road, Bus Stand, PSG Hospital area), North (Nachipalayam, New Siddhapudur, Avinashi Road), South (Veerapandi, Palladam Road, Kangeyam Road), East (Kasipalayam, Kondayampalayam), West (Periyar Nagar, Perumanallur, Nallur).</p>
<p>Our Tiruppur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruppur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kumaran Road, Nachipalayam, New Siddhapudur, Avinashi Road, Veerapandi, Kangeyam Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Mango, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tiruppur?", answer: "Yes, same-day cake delivery is available across all Tiruppur areas — Kumaran Road, Nachipalayam, Avinashi Road, and Veerapandi — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tiruppur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tiruppur delivery." },
      { question: "Do you deliver midnight cakes in Tiruppur?", answer: "Yes, midnight birthday cake delivery is available across Tiruppur's central and residential zones." }
    ]
  },

  "dindigul": {
    cityName: "Dindigul",
    metaTitle: "Cake Delivery in Dindigul | Lock & Biryani City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Dindigul. Same-day delivery across Dindigul. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dindigul",
    metaKeyword: "cake delivery dindigul, order cake online dindigul, birthday cake dindigul, custom cake dindigul, same day cake delivery dindigul palani road kodaikanal road ayyampalayam",
    footerContent: `
<h2>Cake Delivery in Dindigul — Thalappakatti Biryani City, Rock Fort, and Gateway to Kodaikanal Hills</h2>
<p>Dindigul — a Tamil Nadu city at the foot of the Palani Hills, universally famous for Thalappakatti Biryani (the iconic Ambur-style biryani with a distinctive black seeragasamba rice and local spice blend — the original Thalappakatti Hotel here has had lines since 1957), home to the Dindigul Rock Fort (a 17th-century Portuguese-rebuilt fort atop a 100-metre granite outcrop overlooking the city), the gateway to Kodaikanal Hill Station (the "Princess of Hill Stations"), and also India's "Lock City" (Dindigul padlocks are renowned across Tamil Nadu) — is a city of rich food culture and geographical pride. From birthday parties near the Medical College to corporate cakes at the large tanneries (Dindigul's leather industry), from Kodaikanal-trip anniversary cakes to student birthdays near Bishop Heber College — RedHeart covers all Dindigul zones: Central (Anna Nagar, Nethaji Road, New Bus Stand), North (Palani Road, Ayyampalayam, Oddanchatram), South (Trichy Road, Sirumalai Road), East (Natham Road, Ambathurai), West (Kodaikanal Road, Vadamadurai, Batlagundu).</p>
<p>Our Dindigul cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Rock Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dindigul, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anna Nagar, Palani Road, Ayyampalayam, Kodaikanal Road, Nethaji Road, Trichy Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Rock Fort Fondant, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dindigul?", answer: "Yes, same-day cake delivery is available across all Dindigul areas — Anna Nagar, Palani Road, Ayyampalayam, and Kodaikanal Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dindigul?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dindigul delivery." },
      { question: "Do you deliver cakes to the Kodaikanal Road and Batlagundu areas from Dindigul?", answer: "Yes, the Kodaikanal foothills belt including Batlagundu and Vadamadurai is covered under our Dindigul delivery zone." }
    ]
  },

  "tumkur": {
    cityName: "Tumkur",
    metaTitle: "Cake Delivery in Tumkur | Coconut City Karnataka | RedHeart",
    metaDescription: "Order cakes online in Tumkur. Same-day delivery across Tumkur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Tumkur",
    metaKeyword: "cake delivery tumkur, order cake online tumkur, birthday cake tumkur, custom cake tumkur, same day cake delivery tumkur ss puram b h road siddaganga math industrial area",
    footerContent: `
<h2>Cake Delivery in Tumkur — Karnataka's Coconut Capital and Siddaganga Math's Learning City</h2>
<p>Tumkur — Karnataka's 7th-largest city, approximately 70 km northwest of Bengaluru, the "Coconut City" (Tumkur district produces the highest quantity of coconuts in Karnataka and is among India's top districts for coconut production), and home to the Siddaganga Math (a revered Veerashaiva religious and educational institution running hundreds of schools and hostels for underprivileged students — the famous Shivakumaraswamiji served as pontiff here for 111 years, making it one of Karnataka's most respected spiritual institutions) — is a city of education, agriculture, and rapid industrialisation (Tumkur is being developed as Bengaluru's satellite industrial city). From birthday parties in the residential SS Puram area to corporate cakes at the growing KIADB industrial area, from anniversary surprises in BH Road colony to student birthdays near Siddaganga Institute of Technology — RedHeart covers all Tumkur zones: Central (BH Road, Ashoka Road, SS Puram), North (Gubbi Road, Tiptur Road, KIADB Industrial Area), South (Bengaluru Road, Hirehally, Koratagere Road), East (Madhugiri Road, Kora), West (Pavagada Road, Sira Road).</p>
<p>Our Tumkur cake range: Chocolate, Black Forest, Red Velvet, Coconut-Cream (Tumkur special!), Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tumkur, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">SS Puram, BH Road, Ashoka Road, KIADB Industrial Area, Gubbi Road, Bengaluru Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut Cream, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have coconut-cream cakes in Tumkur?", answer: "Yes! Tumkur's famous fresh coconuts inspire our Coconut Cream cake — made with fresh Tumkur coconut milk and cream — a local speciality available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Tumkur?", answer: "Yes, same-day cake delivery is available across all Tumkur areas — SS Puram, BH Road, Ashoka Road, and the KIADB Industrial Area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Tumkur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Tumkur delivery." }
    ]
  },

  "davangere": {
    cityName: "Davangere",
    metaTitle: "Cake Delivery in Davangere | Cotton City Karnataka | RedHeart",
    metaDescription: "Order cakes online in Davangere. Same-day delivery across Davangere. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Davangere",
    metaKeyword: "cake delivery davangere, order cake online davangere, birthday cake davangere, custom cake davangere, same day cake delivery davangere nittuvalli pj extension vinoba nagar avk college",
    footerContent: `
<h2>Cake Delivery in Davangere — Cotton City, Benne Dose's Birthplace, and Central Karnataka's Commercial Hub</h2>
<p>Davangere — Karnataka's 6th-largest city in the heart of the state, the "Cotton City" (Davangere district is one of Karnataka's largest cotton producers), the birthplace of Benne Dose (Davangere Benne Dose — the butter-drenched, crispy masala dosa served with spicy chutney — is one of South India's most beloved street foods and a source of enormous local culinary pride), and the commercial hub of central Karnataka connecting the coast to Hyderabad — is a city of agricultural wealth and warm Kannada hospitality. From birthday parties in the upscale PJ Extension to corporate cakes at the growing KIADB area, from Sankranti and Ugadi celebration cakes to anniversary surprises in Nittuvalli — RedHeart covers all Davangere zones: Central (PJ Extension, SS Layout, Court Circle), North (Nittuvalli, Obalappa Garden, AVK College area), South (Vinoba Nagar, K R Extension, Shimoga Road), East (Holehonnur Road, Jagalur Road), West (Harihar Road, Harihara, Ranebennur).</p>
<p>Our Davangere cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Davangere, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">PJ Extension, Nittuvalli, Vinoba Nagar, SS Layout, AVK College area, K R Extension</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Davangere?", answer: "Yes, same-day cake delivery is available across all Davangere areas — PJ Extension, Nittuvalli, Vinoba Nagar, and AVK College area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Davangere?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Davangere delivery." },
      { question: "Do you deliver midnight cakes in Davangere?", answer: "Yes, midnight birthday cake delivery is available across Davangere's central and residential zones." }
    ]
  },

  "kalaburagi": {
    cityName: "Kalaburagi",
    metaTitle: "Cake Delivery in Kalaburagi | Gulbarga Karnataka | RedHeart",
    metaDescription: "Order cakes online in Kalaburagi (Gulbarga). Same-day delivery across Kalaburagi. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kalaburagi",
    metaKeyword: "cake delivery kalaburagi gulbarga, order cake online gulbarga, birthday cake kalaburagi, custom cake gulbarga, same day cake delivery kalaburagi super market aland road sedam",
    footerContent: `
<h2>Cake Delivery in Kalaburagi — Gulbarga's Bahmani Sultanate Heritage and North Karnataka's Commercial Hub</h2>
<p>Kalaburagi (Gulbarga) — North Karnataka's largest city, former seat of the Bahmani Sultanate (one of medieval India's most powerful Deccan Islamic kingdoms, ruling 1347–1527 CE from Gulbarga before shifting to Bidar), home to the Gulbarga Fort and the remarkable Jama Masjid of Gulbarga (modelled on Cordoba's Great Mosque of Spain — a unique example of Islamic-Spanish architectural fusion in India), and the commercial hub of the Hyderabad-Karnataka region (an area that uses Kannada-Urdu mixed dialect and has cultural affinities with Hyderabad) — is a city of layered history and a growing academic identity (Central University of Karnataka is located here). From birthday parties in the modern Super Market area to corporate cakes at the Gulbarga Cement Corporation, from anniversary surprises in the Aland Road residential belt to student birthdays near Central University — RedHeart covers all Kalaburagi zones: Central (Super Market, Station Road, Aiwan-e-Shahi area), North (Aland Road, Shahapur Road, Sedam), South (Gulbarga KIADB, Afzalpur), East (Humnabad Road, Shorapur Road), West (Bidar Road, Chincholi Road).</p>
<p>Our Kalaburagi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Bahmani Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalaburagi (Gulbarga), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Super Market, Aland Road, Station Road, Sedam, Afzalpur, KIADB area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Gulbarga Fort Fondant, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kalaburagi (Gulbarga)?", answer: "Yes, same-day cake delivery is available across all Kalaburagi areas — Super Market area, Aland Road, Station Road, and Sedam — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kalaburagi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kalaburagi delivery." },
      { question: "Do you deliver cakes to Central University of Karnataka in Kalaburagi?", answer: "Yes, Central University of Karnataka campus area and the surrounding residential belt are covered by our Kalaburagi same-day delivery." }
    ]
  },

  "akola": {
    cityName: "Akola",
    metaTitle: "Cake Delivery in Akola | Cotton City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Akola. Same-day delivery across Akola. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Akola",
    metaKeyword: "cake delivery akola, order cake online akola, birthday cake akola, custom cake akola, same day cake delivery akola civil lines Gandhi nagar rajkamal chowk old city",
    footerContent: `
<h2>Cake Delivery in Akola — Cotton City of Vidarbha and Maharashtra's Soyabean Hub Celebrations</h2>
<p>Akola — one of Vidarbha's 6 divisional cities in northeastern Maharashtra, the "Cotton City" (Akola district is among Maharashtra's top cotton and soyabean producers, and Akola has one of Maharashtra's largest cotton trading markets), headquarters of the Akola Gramin Bank, and a city on the Morna River — is a city of agricultural commerce and a strong Maharashtrian Brahmin and Koli community identity. From birthday parties in the upscale Civil Lines area to corporate cakes at the large cotton trading yards, from Ganesh Chaturthi and Navratri celebration cakes (celebrated with enormous energy in Akola's mohallas) to anniversary surprises in the Gandhi Nagar area — RedHeart covers all Akola zones: Central (Rajkamal Chowk, Old City, Market Yard), North (Civil Lines, Nehru Park, Clock Tower), South (Gandhi Nagar, Ramdaspeth, Jatharpeth), East (Akola-Wardha Road, MIDC), West (Amaravati Road, Akola-Hingoli Highway).</p>
<p>Our Akola cake range: Chocolate, Black Forest, Red Velvet, Orange (Vidarbha!), Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Akola, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Gandhi Nagar, Rajkamal Chowk, Ramdaspeth, Jatharpeth, MIDC</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Vidarbha Orange, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Akola?", answer: "Yes, same-day cake delivery is available across all Akola areas — Civil Lines, Gandhi Nagar, Rajkamal Chowk, and Ramdaspeth — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Akola?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Akola delivery." },
      { question: "Do you deliver midnight cakes in Akola?", answer: "Yes, midnight birthday cake delivery is available across Akola's central and residential zones." }
    ]
  },

  "muzaffarnagar": {
    cityName: "Muzaffarnagar",
    metaTitle: "Cake Delivery in Muzaffarnagar | Sugar City UP | RedHeart",
    metaDescription: "Order cakes online in Muzaffarnagar. Same-day delivery across Muzaffarnagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Muzaffarnagar",
    metaKeyword: "cake delivery muzaffarnagar, order cake online muzaffarnagar, birthday cake muzaffarnagar, custom cake muzaffarnagar, same day cake delivery muzaffarnagar civil lines ghantaghar meerapur",
    footerContent: `
<h2>Cake Delivery in Muzaffarnagar — Sugar Bowl of India and Western UP's Industrial Heart</h2>
<p>Muzaffarnagar — western Uttar Pradesh's major industrial city on the Hind Canal, the "Sugar City" (Muzaffarnagar district has the highest concentration of sugar mills in India — 28+ large sugar mills in a single district, producing millions of tonnes of cane sugar annually), a city of large Gujjar, Jat, and Muslim communities with a rich rural-to-urban commercial energy, and a major khandsari and jaggery (gur) trading centre — is a city of sweet industry heritage that extends naturally to celebration cakes. From birthday parties in the Civil Lines area to corporate cakes at the Bhopa Road MSME belt, from Eid celebration cakes to anniversary surprises in Meerapur — RedHeart covers all Muzaffarnagar zones: Central (Ghantaghar, Civil Lines, Nehru Road), North (Mansurpur Road, Shamli Road, Jansath), South (Budhana Road, Bhopa Road, Khatauli), East (Muzaffarnagar Cantt, Mirapur Road), West (Kairana Road, Charthawal, Kandhla).</p>
<p>Our Muzaffarnagar cake range: Chocolate, Black Forest, Red Velvet, Sugarcane-Jaggery cream (local special!), Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Muzaffarnagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Ghantaghar, Meerapur, Bhopa Road, Budhana Road, Nehru Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Jaggery Cream, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Muzaffarnagar?", answer: "Yes, same-day cake delivery is available across all Muzaffarnagar areas — Civil Lines, Ghantaghar, Meerapur, and Bhopa Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Muzaffarnagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Muzaffarnagar delivery." },
      { question: "Do you deliver midnight cakes in Muzaffarnagar?", answer: "Yes, midnight birthday cake delivery is available across Muzaffarnagar's central and residential zones." }
    ]
  },

  "saharanpur": {
    cityName: "Saharanpur",
    metaTitle: "Cake Delivery in Saharanpur | Wood Carving City UP | RedHeart",
    metaDescription: "Order cakes online in Saharanpur. Same-day delivery across Saharanpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Saharanpur",
    metaKeyword: "cake delivery saharanpur, order cake online saharanpur, birthday cake saharanpur, custom cake saharanpur, same day cake delivery saharanpur civil lines court road nagal mandi ambala road",
    footerContent: `
<h2>Cake Delivery in Saharanpur — Wood Carving Capital, Deoband's Home, and Siwalik Foothills City</h2>
<p>Saharanpur — northern Uttar Pradesh's largest city at the Siwalik hills foothills, the "Wood Carving City" (Saharanpur's intricate sheesham and mango-wood carving tradition — the Shajahanpur/Saharanpur school of wood crafts, with delicate floral and geometric patterns — is GI-tagged and one of India's most beautiful woodcraft traditions, exported worldwide), home to Deoband (the Darul Uloom Deoband — the most influential Islamic seminary outside the Arab world, founded 1866 — is located 40 km away), and a gateway city to the Himalayan foothills and Mussoorie/Dehradun — is a city of thriving crafts and commerce. From birthday parties in the Civil Lines area to corporate cakes at the large Saharanpur MSME belt, from Eid celebration cakes to anniversary surprises in the green Nagal Mandi area — RedHeart covers all Saharanpur zones: Central (Court Road, Civil Lines, Dilkash Colony), North (Ambala Road, Rampur Road, Dehradun Highway), South (Nagal Mandi, Nakur, Muzaffarnagar Road), East (Deoband Road, Roorkee Road, Hardwar Highway), West (Behat Road, Nanautha).</p>
<p>Our Saharanpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Dussehri), Butterscotch, Photo Cakes, Fondant Wood-Carving-inspired theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saharanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Court Road, Nagal Mandi, Ambala Road, Dilkash Colony, Deoband Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Wood-Carving Fondant, Black Forest, Mango (Dussehri)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Saharanpur?", answer: "Yes, same-day cake delivery is available across all Saharanpur areas — Civil Lines, Court Road, Nagal Mandi, and Ambala Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Saharanpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Saharanpur delivery." },
      { question: "Do you deliver midnight cakes in Saharanpur?", answer: "Yes, midnight birthday cake delivery is available across Saharanpur's central and residential zones." }
    ]
  },

  "muzaffarpur": {
    cityName: "Muzaffarpur",
    metaTitle: "Cake Delivery in Muzaffarpur | Litchi City Bihar | RedHeart",
    metaDescription: "Order cakes online in Muzaffarpur. Same-day delivery across Muzaffarpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Muzaffarpur",
    metaKeyword: "cake delivery muzaffarpur, order cake online muzaffarpur, birthday cake muzaffarpur, custom cake muzaffarpur, same day cake delivery muzaffarpur brahmpura motijheel juran chapra",
    footerContent: `
<h2>Cake Delivery in Muzaffarpur — Litchi Capital of India and North Bihar's Commercial Hub</h2>
<p>Muzaffarpur — Bihar's 3rd-largest city on the Burhi Gandak River, the "Litchi Capital of India" (Muzaffarpur's Shahi Litchi — a GI-tagged, intensely sweet and fragrant litchi variety grown in the fertile Tirhut plains — is India's most prized litchi, exported to Europe and the Middle East, with the litchi season from May to June being the city's most joyful period), a large university city (BRA Bihar University), and the commercial centre of North Bihar — is a city of agricultural abundance and warm Maithili and Bhojpuri celebrations. From birthday parties in the posh Brahmpura area to corporate cakes at the Muzaffarpur industrial area, from Chhath Puja and Holi celebration cakes to anniversary surprises near Motijheel park — RedHeart covers all Muzaffarpur zones: Central (Juran Chapra, Motijheel, Bela Road), North (Brahmpura, Ahiyapur, Minapur Road), South (Kashi Chowk, Darbhanga Road, Ramdaspur), East (IGIMS area, Muzaffarpur Bypass), West (Saraiyaganj, Katra, Bettiah Road).</p>
<p>Our Muzaffarpur cake range: Chocolate, Black Forest, Red Velvet, Litchi-cream (Muzaffarpur special!), Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Muzaffarpur, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Brahmpura, Motijheel, Juran Chapra, Kashi Chowk, Darbhanga Road, Bela Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Litchi Cream, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Muzaffarpur Shahi Litchi cakes?", answer: "Yes! Our Muzaffarpur special — the Shahi Litchi Cream Cake made with the GI-tagged Tirhut litchi — is a seasonal delight (peak during May-June) that captures Bihar's most prized fruit. Available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Muzaffarpur?", answer: "Yes, same-day cake delivery is available across all Muzaffarpur areas — Brahmpura, Motijheel, Juran Chapra, and Kashi Chowk — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Muzaffarpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Muzaffarpur delivery." }
    ]
  },

  "bhagalpur": {
    cityName: "Bhagalpur",
    metaTitle: "Cake Delivery in Bhagalpur | Silk City Bihar | RedHeart",
    metaDescription: "Order cakes online in Bhagalpur. Same-day delivery across Bhagalpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bhagalpur",
    metaKeyword: "cake delivery bhagalpur, order cake online bhagalpur, birthday cake bhagalpur, custom cake bhagalpur, same day cake delivery bhagalpur adampur nathnagar tatarpur khalifabag",
    footerContent: `
<h2>Cake Delivery in Bhagalpur — Silk City of India, Vikramshila's Buddhist Heritage, and Ganga's Dolphin Sanctuary</h2>
<p>Bhagalpur — Bihar's 3rd-largest city on the Ganges, the "Silk City" (Bhagalpur's Tussar silk — the wild silk from Antheraea mylitta silkworms — is GI-tagged and among the world's finest textured silks, with sarees, fabric, and shawls exported globally), site of the Vikramshila University ruins (the ancient Buddhist Pala-dynasty university that was contemporary with Nalanda — destroyed by Bakhtiyar Khilji in 1203), and home to the Vikramshila Gangetic Dolphin Sanctuary (one of the last sanctuaries of the endangered Gangetic river dolphin) — is a city of extraordinary historical depth. From birthday parties in the bustling Adampur area to corporate cakes at the silk weaving cooperatives, from Chhath Puja ghats celebrations to anniversary surprises in the leafy Nathnagar colony — RedHeart covers all Bhagalpur zones: Central (Khalifabag, Adampur, Tilkamanjhi), North (Nathnagar, TN Road, Barari), South (Tatarpur, Radha Rani Road, NH 80), East (Sabour, Kahalgaon), West (Sultanganj, Kahalgaon Road, Banka).</p>
<p>Our Bhagalpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Tussar Silk-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhagalpur, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Adampur, Nathnagar, Khalifabag, Tatarpur, Tilkamanjhi, TN Road, Barari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Tussar Silk Fondant, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhagalpur?", answer: "Yes, same-day cake delivery is available across all Bhagalpur areas — Adampur, Nathnagar, Khalifabag, and Tatarpur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bhagalpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhagalpur delivery." },
      { question: "Do you deliver midnight cakes in Bhagalpur?", answer: "Yes, midnight birthday cake delivery is available across Bhagalpur's central and residential zones." }
    ]
  },

  "gaya": {
    cityName: "Gaya",
    metaTitle: "Cake Delivery in Gaya | Buddhist Pilgrimage Bihar | RedHeart",
    metaDescription: "Order cakes online in Gaya. Same-day delivery across Gaya. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Gaya",
    metaKeyword: "cake delivery gaya, order cake online gaya, birthday cake gaya, custom cake gaya, same day cake delivery gaya bodh gaya circuit house road rampur kacheri road",
    footerContent: `
<h2>Cake Delivery in Gaya — Bodh Gaya's Enlightenment City and Hindu Pitra Moksha Pilgrimage</h2>
<p>Gaya — Bihar's 2nd-largest city, site of the holy Vishnupad Temple (where Lord Vishnu's footprint is enshrined — the city is one of the most sacred Hindu Pitra (ancestor) worship sites in India, with hundreds of thousands of Hindus performing Pitru Paksha rituals annually), and twin city to Bodh Gaya (6 km away — where Siddhartha Gautama attained enlightenment under the Bodhi Tree — the Mahabodhi Temple at Bodh Gaya is a UNESCO World Heritage Site and the holiest site in Buddhism) — is a city at the centre of two of the world's great religions. From birthday parties in the residential Rampur area to corporate cakes at the Circuit House Road belt, from Buddha Jayanti celebration cakes to anniversary surprises in the Bodh Gaya hotel zone — RedHeart covers all Gaya zones: Central (Station Road, Kacheri Road, Gandhi Maidan), North (Rampur, Circuit House Road, Nayatola), South (Bodh Gaya, Dungeshwari Road, Sujata Ghat area), East (Sherghati Road, Tikari), West (Tekari, Dobhi, Manpur Road).</p>
<p>Our Gaya cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Bodhi Tree / Mahabodhi-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gaya, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rampur, Circuit House Road, Kacheri Road, Bodh Gaya, Gandhi Maidan, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Bodhi Tree Fondant, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gaya?", answer: "Yes, same-day cake delivery is available across all Gaya areas — Rampur, Circuit House Road, Kacheri Road, and Gandhi Maidan — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Bodh Gaya from Gaya?", answer: "Yes, Bodh Gaya (6 km from Gaya city) — including its international Buddhist monastery zone, hotels, and residential areas — is covered under our Gaya delivery zone." },
      { question: "Are eggless cakes available in Gaya?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gaya delivery." }
    ]
  },

  "siliguri": {
    cityName: "Siliguri",
    metaTitle: "Cake Delivery in Siliguri | Queen of Terai West Bengal | RedHeart",
    metaDescription: "Order cakes online in Siliguri. Same-day delivery across Siliguri. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Siliguri",
    metaKeyword: "cake delivery siliguri, order cake online siliguri, birthday cake siliguri, custom cake siliguri, same day cake delivery siliguri sevoke road bengdubi darjeeling road naxalbari",
    footerContent: `
<h2>Cake Delivery in Siliguri — Queen of Terai, Gateway to Darjeeling, Sikkim, Bhutan, and Northeast India</h2>
<p>Siliguri — West Bengal's 3rd-largest city, the "Queen of the Terai" and India's "Chicken's Neck" gateway (the narrow Siliguri Corridor connecting Northeast India to the rest of India passes through here — Siliguri is the commercial and transit hub for Darjeeling, Sikkim, Bhutan, Nepal, and all 8 Northeast states), a major tea trading centre (the Darjeeling, Assam, and Dooars tea industries all converge at Siliguri's wholesale markets), and a rapidly growing commercial city — is a crossroads city of extraordinary geographic importance and commercial energy. From birthday parties in the Sevoke Road residential belt to corporate cakes at the Siliguri Industrial Growth Centre, from Durga Puja and Tihar (Nepal) celebration cakes to anniversary surprises in Bengdubi — RedHeart covers all Siliguri zones: Central (Matigara, Sevoke Road, Ward 1–10), North (Darjeeling Road, Pradhan Nagar, NBU area), South (Naxalbari, Bagdogra, New Jalpaiguri), East (Bengdubi, Bhaktinagar, Fulbari), West (Khaprail, Champasari, Phansidewa Road).</p>
<p>Our Siliguri cake range: Chocolate, Black Forest, Red Velvet, Darjeeling First Flush Tea-infused cake (unique!), Mango, Photo Cakes, Fondant Himalayan-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siliguri, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sevoke Road, Bengdubi, Pradhan Nagar, Matigara, Naxalbari, NBU area, Bagdogra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Darjeeling Tea Cake, Chocolate, Photo Cake, Himalayan Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Darjeeling Tea-infused cakes in Siliguri?", answer: "Yes! Our Darjeeling First Flush Tea Cake — infused with the world's most prized tea leaves from the nearby Darjeeling gardens — is a unique Siliguri speciality, available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Siliguri?", answer: "Yes, same-day cake delivery is available across all Siliguri areas — Sevoke Road, Bengdubi, Pradhan Nagar, Matigara, and Bagdogra — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Siliguri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Siliguri delivery." }
    ]
  },

  "asansol": {
    cityName: "Asansol",
    metaTitle: "Cake Delivery in Asansol | Steel City West Bengal | RedHeart",
    metaDescription: "Order cakes online in Asansol. Same-day delivery across Asansol and Durgapur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Asansol",
    metaKeyword: "cake delivery asansol, order cake online asansol, birthday cake asansol, custom cake asansol durgapur, same day cake delivery asansol burnpur gt road ranigunj kulti",
    footerContent: `
<h2>Cake Delivery in Asansol — West Bengal's 2nd-Largest City, IISCO Steel, and Damodar Valley Industrial Belt</h2>
<p>Asansol — West Bengal's 2nd-largest city (after Kolkata) and one of India's largest industrial agglomerations in the Damodar Valley, home to the IISCO (Indian Iron and Steel Company — now part of SAIL) at Burnpur (one of India's oldest integrated steel plants, established 1919), the massive Chittaranjan Locomotive Works (India's only steam locomotive factory, producing diesel locomotives today), and at the heart of the Raniganj Coal Belt (one of India's largest coalfields) — is a city of deep industrial heritage and a large, multi-cultural workforce. From birthday parties in the leafy Burnpur township to corporate cakes at the IISCO plant offices, from Durga Puja and Christmas (large Anglo-Indian and Christian community) celebration cakes to anniversary surprises in the Civil Township — RedHeart covers all Asansol zones: Central (GT Road, Usha Market, Court), North (Burnpur, Kulti, Chittaranjan), South (Raniganj, Barakar, Jamuria), East (Durgapur — a separate large city, 30 km, also covered), West (Andal, Pandaveswar, Ukhra).</p>
<p>Our Asansol cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Asansol, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Burnpur, GT Road, Kulti, Raniganj, Barakar, Usha Market, Chittaranjan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Asansol?", answer: "Yes, same-day cake delivery is available across all Asansol areas — Burnpur, GT Road, Kulti, Raniganj, and Barakar — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the IISCO Burnpur township?", answer: "Yes, IISCO Burnpur township, Chittaranjan Locomotive Works town, and all Asansol's industrial townships are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Asansol?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Asansol delivery." }
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
