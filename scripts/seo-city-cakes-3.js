// Cakes Batch 3 — 15 cities:
// Guwahati, Bhubaneswar, Thiruvananthapuram, Kochi, Kozhikode,
// Tiruchirappalli, Salem, Hubli-Dharwad, Mysore, Jalandhar,
// Ludhiana, Jodhpur, Udaipur, Ranchi, Raipur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "guwahati": {
    cityName: "Guwahati",
    metaTitle: "Cake Delivery in Guwahati | Northeast India | RedHeart",
    metaDescription: "Order cakes online in Guwahati. Same-day delivery across Guwahati. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Guwahati",
    metaKeyword: "cake delivery guwahati, order cake online guwahati, birthday cake guwahati, custom cake guwahati, same day cake delivery guwahati six mile zoo road pan bazar ganeshguri",
    footerContent: `
<h2>Cake Delivery in Guwahati — Gateway City of Northeast India's Celebrations</h2>
<p>Guwahati — Assam's commercial capital, the largest city in Northeast India, and the gateway to the Seven Sisters states — is a vibrant, cosmopolitan city on the Brahmaputra where celebration culture is as diverse as the northeast's tribal, cultural, and religious tapestry. From birthday parties in the hilly bungalows of Zoo Road to corporate cakes at the booming commercial corridor of Six Mile and GS Road, from Bihu celebration cakes to anniversary surprises in the growing residential colonies of Hatigaon and Dispur — RedHeart covers all Guwahati zones: Central (Pan Bazar, Fancy Bazar, Paltan Bazar), West (Maligaon, Jalukbari, Azara), East (Six Mile, Khanapara, Zoo Road), North (Dispur, Ganeshguri, Narengi), South (Hatigaon, Beltola, VIP Road).</p>
<p>Our Guwahati cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Guwahati, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Six Mile, Zoo Road, Ganeshguri, Pan Bazar, Hatigaon, Beltola, GS Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Bihu-theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are Bihu celebration cakes available in Guwahati?", answer: "Yes, Bihu (especially Rongali Bihu in April) is the biggest festival in Guwahati. Custom Bihu celebration cakes with Assamese motifs are available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Guwahati?", answer: "Yes, same-day cake delivery is available across all Guwahati areas — Six Mile, Zoo Road, Ganeshguri, Hatigaon, Pan Bazar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Guwahati?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Guwahati delivery." }
    ]
  },

  "bhubaneswar": {
    cityName: "Bhubaneswar",
    metaTitle: "Cake Delivery in Bhubaneswar | Temple City Odisha | RedHeart",
    metaDescription: "Order cakes online in Bhubaneswar. Same-day delivery across Bhubaneswar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bhubaneswar",
    metaKeyword: "cake delivery bhubaneswar, order cake online bhubaneswar, birthday cake bhubaneswar, custom cake bhubaneswar, same day cake delivery bhubaneswar unit 4 patia infocity nayapalli",
    footerContent: `
<h2>Cake Delivery in Bhubaneswar — City of Temples, Smart City, and Odisha's Modern Celebration Hub</h2>
<p>Bhubaneswar — Odisha's capital, the "City of Temples" (with 700+ ancient Hindu temples, including the magnificent Lingaraja temple), one of India's first designated Smart Cities, and the fastest-growing city in eastern India — is a city where ancient spiritual heritage and modern aspiration coexist vibrantly. From birthday parties in the IT professionals' hub of Patia-Infocity corridor to corporate cakes at Infocity's tech campuses, from anniversary surprises in the upscale Nayapalli bungalows to student birthdays near Utkal University — RedHeart covers all Bhubaneswar zones: Central (Unit 4, Unit 9, Master Canteen, MG Road), North (Patia, Infocity, Nandankanan Road, Saheed Nagar), South (Nayapalli, Jaydev Vihar, Damana), East (Khandagiri, Tamando, Palasuni), West (Aiginia, Mancheswar, Rasulgarh).</p>
<p>Our Bhubaneswar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhubaneswar, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patia, Infocity, Nayapalli, Saheed Nagar, Unit 4, Jaydev Vihar, Rasulgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhubaneswar?", answer: "Yes, same-day cake delivery is available across all Bhubaneswar areas — Patia, Infocity, Nayapalli, Saheed Nagar, and Unit 4 — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Infocity IT Park in Bhubaneswar?", answer: "Yes, Infocity, Patia, and the entire IT corridor in North Bhubaneswar are fully covered by our same-day delivery." },
      { question: "Are eggless cakes available in Bhubaneswar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhubaneswar delivery." }
    ]
  },

  "thiruvananthapuram": {
    cityName: "Thiruvananthapuram",
    metaTitle: "Cake Delivery in Thiruvananthapuram | Kerala Capital | RedHeart",
    metaDescription: "Order cakes online in Thiruvananthapuram (Trivandrum). Same-day delivery across Trivandrum. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Thiruvananthapuram",
    metaKeyword: "cake delivery thiruvananthapuram trivandrum, order cake online trivandrum, birthday cake thiruvananthapuram, custom cake trivandrum, same day cake delivery trivandrum technopark kowdiar pattom",
    footerContent: `
<h2>Cake Delivery in Thiruvananthapuram — Kerala's Capital, Technopark Hub, and Padmanabhaswamy's City of Celebrations</h2>
<p>Thiruvananthapuram (Trivandrum) — Kerala's capital, home to the legendary Sree Padmanabhaswamy temple (the world's wealthiest temple with estimated ₹1.2 lakh crore in treasures), the Technopark IT campus (Kerala's largest IT hub), and India's first rocket launch site (Thumba Equatorial Rocket Launching Station, ISRO's birthplace) — is a city where ancient spirituality and modern technology coexist. From birthday parties in the upscale Kowdiar and Vellayambalam areas to corporate cakes at Technopark Phase 1/2/3, from anniversary surprises in the lush Pattom residential area to student birthdays near Kerala University — RedHeart covers all Trivandrum zones: Central (East Fort, MG Road, Palayam, Statue), North (Karamana, Pappanamcode, Thirumala), South (Kovalam, Nemom, Pothencode), East (Technopark, Kazhakoottam, Sreekaryam), West (Vettucaud, Poonthura, Shanghumugham beach).</p>
<p>Our Trivandrum cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thiruvananthapuram (Trivandrum), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Technopark, Kazhakoottam, Pattom, Kowdiar, Sreekaryam, MG Road, Kovalam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you deliver cakes to Technopark in Thiruvananthapuram?", answer: "Yes, Technopark (Phase 1, 2, and 3 campuses) and Kazhakoottam-Sreekaryam corridor are fully covered by our same-day delivery in Thiruvananthapuram." },
      { question: "Can I get same-day cake delivery in Thiruvananthapuram?", answer: "Yes, same-day cake delivery is available across all Trivandrum areas — Technopark, Pattom, Kowdiar, MG Road, and Kovalam — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Thiruvananthapuram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Trivandrum delivery." }
    ]
  },

  "kochi": {
    cityName: "Kochi",
    metaTitle: "Cake Delivery in Kochi | Queen of Arabian Sea | RedHeart",
    metaDescription: "Order cakes online in Kochi (Cochin). Same-day delivery across Kochi. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Kochi",
    metaKeyword: "cake delivery kochi cochin, order cake online kochi, birthday cake kochi, custom cake cochin, same day cake delivery kochi ernakulam infopark kakkanad marine drive fort kochi",
    footerContent: `
<h2>Cake Delivery in Kochi — Queen of the Arabian Sea, Where Global Culture Meets Kerala Warmth</h2>
<p>Kochi (Cochin) — Kerala's commercial capital, the "Queen of the Arabian Sea," and India's most cosmopolitan coastal city with Jewish synagogues, Portuguese churches, Dutch palaces, and Chinese fishing nets — is a city where global influences have shaped celebration culture for 600 years. From birthday parties in Marine Drive's skyline apartments to corporate cakes at Infopark's and SmartCity's tech campuses, from anniversary surprises in the heritage streets of Fort Kochi to student birthdays near Cochin University — RedHeart covers the entire Kochi metro: Fort Kochi / Mattancherry (heritage island), Ernakulam mainland (MG Road, Panampilly Nagar, Vytilla), North Paravur, Kakkanad/Infopark, Aluva, Tripunithura, Edapally, and the Marine Drive waterfront.</p>
<p>Our Kochi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes (Chinese fishing net, Fort Kochi heritage themes!). Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kochi (Cochin), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marine Drive, Infopark, Kakkanad, Fort Kochi, Panampilly Nagar, Edapally, Aluva</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Red Velvet, Black Forest, Fort Kochi Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kochi?", answer: "Yes, same-day cake delivery is available across all Kochi areas — Marine Drive, Infopark, Kakkanad, Fort Kochi, Panampilly Nagar, and Edapally — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Infopark and SmartCity in Kochi?", answer: "Yes, Infopark, SmartCity (CSEZ), Kakkanad, and the entire eastern IT corridor of Kochi are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Kochi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kochi delivery." }
    ]
  },

  "kozhikode": {
    cityName: "Kozhikode",
    metaTitle: "Cake Delivery in Kozhikode | Calicut Kerala | RedHeart",
    metaDescription: "Order cakes online in Kozhikode (Calicut). Same-day delivery across Kozhikode. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kozhikode",
    metaKeyword: "cake delivery kozhikode calicut, order cake online kozhikode, birthday cake kozhikode, custom cake calicut, same day cake delivery kozhikode mavoor road beach road cyber park",
    footerContent: `
<h2>Cake Delivery in Kozhikode — City of Spices and Vasco da Gama's Landing, Now Delivering Sweet Surprises</h2>
<p>Kozhikode (Calicut) — northern Kerala's largest city, historically the most important spice trading port of the ancient world (where Vasco da Gama landed in 1498 to find pepper, cardamom, and cinnamon), and a city of Malabar's distinctive cuisine and Muslim cultural heritage — is a city with a warm, community-oriented celebration culture. From birthday parties in the expanding residential zones of Mavoor Road to corporate cakes at the Cyber Park IT campus, from anniversary surprises at the beach-front apartments to student birthdays near NIT Calicut — RedHeart covers all Kozhikode zones: Central (Palayam, SM Street, Mananchira), North (Mavoor Road, Puthiyara, West Hill), South (Calicut Beach, South Beach, Beypore), East (Cyber Park, KIIFB area, Mukkam), West (Chalappuram, Nadakkavu, Thiruvannur).</p>
<p>Our Kozhikode cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kozhikode (Calicut), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palayam, Mavoor Road, Cyber Park, SM Street, Beach Road, Beypore, Mukkam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Butterscotch</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are Eid celebration cakes available in Kozhikode?", answer: "Yes, Eid is a major festival in Kozhikode's significant Muslim community. Custom Eid celebration cakes with festive designs are available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Kozhikode?", answer: "Yes, same-day cake delivery is available across all Kozhikode areas — Palayam, Mavoor Road, Cyber Park, and Beach Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kozhikode?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kozhikode delivery." }
    ]
  },

  "tiruchirappalli": {
    cityName: "Tiruchirappalli",
    metaTitle: "Cake Delivery in Tiruchirappalli | Trichy Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Tiruchirappalli (Trichy). Same-day delivery across Trichy. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tiruchirappalli",
    metaKeyword: "cake delivery tiruchirappalli trichy, order cake online trichy, birthday cake tiruchirappalli, custom cake trichy, same day cake delivery trichy rockfort thillai nagar srirangam nit",
    footerContent: `
<h2>Cake Delivery in Tiruchirappalli — Rock Fort City's Sriraangam Temple Heritage and Industrial Energy</h2>
<p>Tiruchirappalli (Trichy) — Tamil Nadu's fourth-largest city, dominated by the iconic Rock Fort (a 7th-century Pallava temple perched atop an 83-metre granite rock), home to the Srirangam Ranganathaswamy temple (the world's largest functioning Hindu temple by area — a UNESCO tentative heritage site), and a major industrial and educational hub (NIT Trichy, Bharat Heavy Electricals — BHEL) — is a city of ancient devotion and modern enterprise. From birthday parties in the residential Thillai Nagar to corporate cakes at BHEL township, from anniversary surprises in the Srirangam island temples town to student birthdays near NIT Trichy — RedHeart covers all Trichy zones: Central (Chathiram Bus Stand, Tennur, Ariyamangalam), North (Srirangam, Golden Rock, Ariyamangalam), South (Thillai Nagar, Puthur, Woraiyur), East (Tiruverumbur, Siruganur, NIT), West (BHEL township, Edamalaipattippu).</p>
<p>Our Trichy cake range: Chocolate, Black Forest, Pineapple, Red Velvet, Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruchirappalli (Trichy), Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thillai Nagar, Srirangam, Golden Rock, BHEL, Tennur, NIT area, Puthur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Pineapple, Black Forest, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Trichy?", answer: "Yes, same-day cake delivery is available across all Tiruchirappalli areas — Thillai Nagar, Srirangam, Golden Rock, BHEL, and NIT area — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to NIT Trichy and BHEL township?", answer: "Yes, NIT Tiruchirappalli campus area and BHEL township are fully covered by our same-day Trichy delivery." },
      { question: "Are eggless cakes available in Tiruchirappalli?", answer: "Yes, all flavours — Chocolate, Black Forest, Pineapple, Red Velvet — are available in eggless variants for Trichy delivery." }
    ]
  },

  "salem": {
    cityName: "Salem",
    metaTitle: "Cake Delivery in Salem | Steel City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Salem. Same-day delivery across Salem. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Salem",
    metaKeyword: "cake delivery salem, order cake online salem, birthday cake salem, custom cake salem, same day cake delivery salem steel plant fairlands suramangalam hasthampatti",
    footerContent: `
<h2>Cake Delivery in Salem — Steel City's Sweet Mango and Silk Heritage Celebrations</h2>
<p>Salem — Tamil Nadu's fifth-largest city, the "Steel City" (home to SAIL's Salem Steel Plant, one of India's premier steel plants producing high-quality stainless and electrical steel), and famous for Salem mangoes (one of India's most sought-after mango varieties — the Salem Mango Festival draws buyers from across the country) and Kanchipuram-style Salem silk — is a city of industrial strength and agricultural abundance. From birthday parties in the commercial Fairlands area to corporate cakes at the Steel Plant township, from anniversary surprises in Suramangalam's residential belt to student birthdays near Periyar University — RedHeart covers all Salem zones: Central (Omalur Road, Four Roads, Shevapet), North (Steel Plant township, Kondalampatti, Kitchipalayam), South (Fairlands, Hasthampatti, Gugai), East (Ammapet, Suramangalam, Yercaud Road), West (Karuppur, Mettur Road, Mecheri).</p>
<p>Our Salem cake range: Chocolate, Black Forest, Mango (Salem special!), Red Velvet, Pineapple, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Salem, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fairlands, Hasthampatti, Steel Plant township, Suramangalam, Gugai, Ammapet</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango (Salem special), Chocolate, Photo Cake, Black Forest, Pineapple</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Salem mango-flavoured cakes?", answer: "Yes! Salem's famous mangoes inspire our mango cream cake — made with rich mango pulp. Available for same-day delivery across Salem." },
      { question: "Can I get same-day cake delivery in Salem?", answer: "Yes, same-day cake delivery is available across all Salem areas — Fairlands, Hasthampatti, Suramangalam, and Steel Plant township — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Salem?", answer: "Yes, all flavours — Chocolate, Black Forest, Mango, Red Velvet — are available in eggless variants for Salem delivery." }
    ]
  },

  "hubli": {
    cityName: "Hubli",
    metaTitle: "Cake Delivery in Hubli-Dharwad | Karnataka | RedHeart",
    metaDescription: "Order cakes online in Hubli-Dharwad. Same-day delivery across Hubli and Dharwad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hubli",
    metaKeyword: "cake delivery hubli dharwad, order cake online hubli, birthday cake hubli, custom cake hubli dharwad, same day cake delivery hubli vidyanagar keshwapur navanagar",
    footerContent: `
<h2>Cake Delivery in Hubli-Dharwad — Twin Cities of North Karnataka's Commercial and Academic Heart</h2>
<p>Hubli-Dharwad — the twin-city municipality of North Karnataka, the state's second-largest urban agglomeration, and a city with distinct identities: Hubli (the commercial powerhouse, known as the "Manchester of Karnataka" for its cotton trade, the largest railway junction in South India, and a booming IT sector) and Dharwad (the academic and cultural capital — home to Karnatak University and the legendary Dharwad Peda, a GI-tagged milk sweet). From birthday parties in the residential Vidyanagar to corporate cakes at the Hubli-Dharwad IT cluster, from anniversary surprises near Unkal Lake to student birthdays near Karnatak University — RedHeart covers both cities: Hubli (Lamington Road, Keshwapur, Gokul Road, Navanagar, Vidyanagar) and Dharwad (Karnatak University area, PB Road, SDM Hospital area, Toll Naka).</p>
<p>Our Hubli-Dharwad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hubli-Dharwad, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vidyanagar, Keshwapur, Navanagar, Gokul Road, Lamington Rd (Hubli); KU area, PB Road (Dharwad)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you deliver cakes to both Hubli and Dharwad?", answer: "Yes, we cover both twin cities — Hubli (Vidyanagar, Keshwapur, Navanagar, Gokul Road) and Dharwad (Karnatak University area, PB Road) — with same-day delivery." },
      { question: "Can I get same-day cake delivery in Hubli?", answer: "Yes, same-day cake delivery is available across all Hubli-Dharwad areas for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hubli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hubli-Dharwad delivery." }
    ]
  },

  "mysore": {
    cityName: "Mysore",
    metaTitle: "Cake Delivery in Mysore | Palace City Karnataka | RedHeart",
    metaDescription: "Order cakes online in Mysore (Mysuru). Same-day delivery across Mysore. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Mysore",
    metaKeyword: "cake delivery mysore mysuru, order cake online mysore, birthday cake mysore, custom cake mysore, same day cake delivery mysore vijayanagar kuvempunagar jayalakshmipuram",
    footerContent: `
<h2>Cake Delivery in Mysore — Palace City's Royal Heritage and India's Cleanest City's Sweetest Celebrations</h2>
<p>Mysore (Mysuru) — Karnataka's cultural capital, the "City of Palaces" (the Mysore Palace — Amba Vilas — is India's most visited monument after the Taj Mahal), consistently one of India's cleanest cities, and a city known for Mysore Pak (the world-famous ghee-sugar-gram flour sweet invented in the Mysore Palace kitchens), Mysore Dasara (India's grandest state Dasara, a 10-day royal procession), and a growing IT ecosystem (Infosys was founded in Mysore) — is a city where every celebration deserves a cake as grand as its heritage. From birthday parties in the garden city's upscale Vijayanagar to corporate cakes at the Infosys campus, from Dasara celebration cakes to anniversary surprises in Jayalakshmipuram — RedHeart covers all Mysore zones: Central (Devaraja Market, Sayyaji Rao Road), North (Vijayanagar, Kuvempunagar, Hebbal), South (JP Nagar, Alanahalli, Bannimantap), East (Infosys campus area, Nanjangud Road), West (Saraswathipuram, Jayalakshmipuram, Nazarbad).</p>
<p>Our Mysore cake range: Chocolate, Black Forest, Mysore Pak-flavour fusion, Red Velvet, Mango, Photo Cakes, Fondant Palace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mysore (Mysuru), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijayanagar, Kuvempunagar, Jayalakshmipuram, Saraswathipuram, Infosys area, JP Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palace Fondant theme, Chocolate, Photo Cake, Mysore Pak fusion, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you make Mysore Palace-theme cakes?", answer: "Yes, custom Mysore Palace (Amba Vilas) fondant cakes — perfect for Dasara or royal-theme birthday parties — are available for same-day delivery in Mysore." },
      { question: "Can I get same-day cake delivery in Mysore?", answer: "Yes, same-day cake delivery is available across all Mysore areas — Vijayanagar, Kuvempunagar, Saraswathipuram, and the Infosys campus area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Mysore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mysore delivery." }
    ]
  },

  "jalandhar": {
    cityName: "Jalandhar",
    metaTitle: "Cake Delivery in Jalandhar | Sports City Punjab | RedHeart",
    metaDescription: "Order cakes online in Jalandhar. Same-day delivery across Jalandhar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Jalandhar",
    metaKeyword: "cake delivery jalandhar, order cake online jalandhar, birthday cake jalandhar, custom cake jalandhar, same day cake delivery jalandhar model town bmc chowk gurdwara sports",
    footerContent: `
<h2>Cake Delivery in Jalandhar — Punjab's Sports Equipment Capital and the Doaba's Celebration Hub</h2>
<p>Jalandhar — Punjab's largest city after Ludhiana, the "Sports City of India" alongside Meerut (supplying 75% of India's sports goods — footballs, hockey sticks, boxing gloves to international tournaments), and the commercial heart of the Doaba region — is a city of Punjabi warmth, large families, and exuberant celebrations. From birthday parties in the upscale Model Town to corporate cakes at the sports goods industrial hub, from Lohri and Baisakhi celebration cakes to anniversary surprises in Shastri Nagar — RedHeart covers all Jalandhar zones: Central (BMC Chowk, Burlton Park, Nakodar Road), North (Model Town, Phagwara Road), South (Basti Bawa Khel, Cantt, GT Road), East (Nangal Shamelan, Lajpat Nagar, Guru Nanak Mission Chowk), West (Maqsudan, Urban Estate, Kapurthala Road).</p>
<p>Our Jalandhar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Sports-theme Fondant cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalandhar, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, BMC Chowk, Burlton Park, Shastri Nagar, Urban Estate, Cantt</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Sports Fondant (football/hockey), Red Velvet, Pinata</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get a football or hockey-theme cake in Jalandhar?", answer: "Yes, Jalandhar is India's sports goods capital. Custom football, hockey, and cricket-theme fondant cakes are a specialty — perfect for sports-loving kids' birthdays." },
      { question: "Can I get same-day cake delivery in Jalandhar?", answer: "Yes, same-day cake delivery is available across all Jalandhar areas — Model Town, BMC Chowk, Urban Estate — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jalandhar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jalandhar delivery." }
    ]
  },

  "ludhiana": {
    cityName: "Ludhiana",
    metaTitle: "Cake Delivery in Ludhiana | Manchester of India Punjab | RedHeart",
    metaDescription: "Order cakes online in Ludhiana. Same-day delivery across Ludhiana. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Ludhiana",
    metaKeyword: "cake delivery ludhiana, order cake online ludhiana, birthday cake ludhiana, custom cake ludhiana, same day cake delivery ludhiana model town brs nagar sarabha nagar ferozepur road",
    footerContent: `
<h2>Cake Delivery in Ludhiana — Manchester of India's Biggest Celebrations, Biggest Cakes</h2>
<p>Ludhiana — Punjab's largest and wealthiest city, the "Manchester of India" (the world's largest producer of bicycle parts and hosiery — Ludhiana makes one-third of India's hosiery exports), and a city of 2 million with an outsized appetite for large, lavish celebrations — is where birthday cakes have to match the Punjabi spirit: big, rich, and showstopping. From mega birthday parties in the bungalows of Model Town to corporate celebration cakes at the industrial hub of Focal Point, from Lohri bonfire cakes to anniversary surprises in BRS Nagar — RedHeart covers all Ludhiana zones: Central (GT Road, Ghumar Mandi, Chaura Bazar), North (Model Town, BRS Nagar, Sarabha Nagar), South (Dugri, Haibowal, South City), East (Gill Road, Samrala Chowk, Pakhowal Road), West (Ferozepur Road, Hambran Road, Jamalpur).</p>
<p>Our Ludhiana cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, Pinata cakes (Ludhiana loves big Pinata cakes!). Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ludhiana, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, BRS Nagar, Sarabha Nagar, Dugri, Ferozepur Road, Gill Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Pinata, Photo Cake, Red Velvet, Fondant (3-tier)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ludhiana?", answer: "Yes, same-day cake delivery is available across all Ludhiana areas — Model Town, BRS Nagar, Sarabha Nagar, Dugri, and Ferozepur Road — for orders placed before 3 PM." },
      { question: "Do you make large multi-tier cakes for Ludhiana parties?", answer: "Yes, 2-tier and 3-tier fondant cakes for large Punjabi birthday parties and weddings are available from Ludhiana. Pre-order at least 48 hours in advance for multi-tier designs." },
      { question: "Are eggless cakes available in Ludhiana?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ludhiana delivery." }
    ]
  },

  "jodhpur": {
    cityName: "Jodhpur",
    metaTitle: "Cake Delivery in Jodhpur | Blue City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Jodhpur. Same-day delivery across Jodhpur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Jodhpur",
    metaKeyword: "cake delivery jodhpur, order cake online jodhpur, birthday cake jodhpur, custom cake jodhpur, same day cake delivery jodhpur paota ratanada shastri nagar bhati circle",
    footerContent: `
<h2>Cake Delivery in Jodhpur — Blue City's Royal Mehrangarh Heritage and Desert Celebrations</h2>
<p>Jodhpur — Rajasthan's second-largest city, the "Blue City" (thousands of blue-painted Brahmin homes visible from Mehrangarh Fort), dominated by the magnificent Mehrangarh Fort (one of India's largest and finest forts, with a commanding cliff-top view of the blue city) — is a city of royal heritage, desert hospitality, and a growing modern lifestyle. From birthday parties in the upscale Paota and Ratanada residential areas to corporate cakes at the commercial Bhati Circle belt, from anniversary surprises at a Mehrangarh heritage hotel to student birthdays near IIT Jodhpur — RedHeart covers all Jodhpur zones: Central (Sardar Market, Sojati Gate, Station Road), North (Ratanada, Paota, Chopasni Road), South (Shastri Nagar, Mandore Road, Bhati Circle), East (Jhanwar Road, Basni, Mahamandir), West (Pal Road, Kalyanpur, Banar Road).</p>
<p>Our Jodhpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Kesar-Badam (Rajasthan favourite), Photo Cakes, Blue Fort-theme Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jodhpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Paota, Ratanada, Shastri Nagar, Bhati Circle, Chopasni Road, Mandore, Basni</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Badam, Chocolate, Blue Fort Fondant, Photo Cake, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you make Mehrangarh Fort-theme cakes in Jodhpur?", answer: "Yes, custom Mehrangarh Fort-inspired fondant cakes — perfect for heritage-themed birthdays and Jodhpur royal-style events — are available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Jodhpur?", answer: "Yes, same-day cake delivery is available across all Jodhpur areas — Paota, Ratanada, Shastri Nagar, and Bhati Circle — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jodhpur?", answer: "Yes, all flavours — Kesar-Badam, Chocolate, Black Forest, Red Velvet — are available in eggless variants for Jodhpur delivery." }
    ]
  },

  "udaipur": {
    cityName: "Udaipur",
    metaTitle: "Cake Delivery in Udaipur | City of Lakes Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Udaipur. Same-day delivery across Udaipur. Birthday, custom, anniversary cakes from ₹499.",
    h1: "Online Cake Delivery in Udaipur",
    metaKeyword: "cake delivery udaipur, order cake online udaipur, birthday cake udaipur, custom cake udaipur, same day cake delivery udaipur city palace lake pichola hiran magri",
    footerContent: `
<h2>Cake Delivery in Udaipur — Venice of the East, India's Most Romantic City for Anniversary Cakes</h2>
<p>Udaipur — Rajasthan's "Venice of the East," the City of Lakes, consistently voted one of the world's most beautiful and romantic cities — is where anniversary cake deliveries feel particularly magical. With Lake Pichola and the City Palace reflected in its waters, Jag Niwas (Lake Palace hotel — the island palace) as the setting for James Bond's Octopussy, and the Sajjangarh (Monsoon Palace) on the hilltop — every celebration in Udaipur has a royal backdrop. From anniversary cakes delivered to luxury lake-view hotels to birthday parties in the residential Hiran Magri and Pratap Nagar, from corporate cakes at the growing Udaipur IT belt to student birthdays near Mohanlal Sukhadia University — RedHeart covers all Udaipur zones: Central (Chetak Circle, Delhi Gate, Sukhadia Circle), North (Hiran Magri, Sector 11/14, Bhuwana), South (Pratap Nagar, Madhuban, Balicha), East (Bedla, RIICO, Mavli), West (Fatehpura, Bapu Bazar, Ambamata).</p>
<p>Our Udaipur cake range: Chocolate, Black Forest, Red Velvet, Mango, Kesar-Badam, Photo Cakes (Lake Palace theme!), Fondant Royal theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udaipur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hiran Magri, Pratap Nagar, Chetak Circle, Sukhadia Circle, Bhuwana, Fatehpura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lake Palace Photo Cake, Chocolate, Royal Fondant, Kesar-Badam, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get an anniversary cake delivered to a lake-view hotel in Udaipur?", answer: "Yes, anniversary and romantic birthday cake deliveries to Udaipur's lake-view hotels and heritage properties around Lake Pichola and Fateh Sagar are available — please specify the hotel at checkout." },
      { question: "Can I get same-day cake delivery in Udaipur?", answer: "Yes, same-day cake delivery is available across all Udaipur areas — Hiran Magri, Pratap Nagar, Chetak Circle, and Sukhadia Circle — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Udaipur?", answer: "Yes, all flavours — Kesar-Badam, Chocolate, Black Forest, Red Velvet — are available in eggless variants for Udaipur delivery." }
    ]
  },

  "ranchi": {
    cityName: "Ranchi",
    metaTitle: "Cake Delivery in Ranchi | Jharkhand Capital | RedHeart",
    metaDescription: "Order cakes online in Ranchi. Same-day delivery across Ranchi. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Ranchi",
    metaKeyword: "cake delivery ranchi, order cake online ranchi, birthday cake ranchi, custom cake ranchi, same day cake delivery ranchi doranda lalpur kanke road harmu housing colony",
    footerContent: `
<h2>Cake Delivery in Ranchi — Jharkhand's Waterfall Capital and MS Dhoni's Hometown Celebrations</h2>
<p>Ranchi — Jharkhand's capital, the "City of Waterfalls" (Dassam Falls, Hundru Falls, Jonha Falls in the district), and most famously the hometown of MS Dhoni (India's most successful cricket captain, World Cup winner 2007 and 2011, born and raised in Ranchi's Shyamali Colony) — is a city where cricket passion and local pride run deep. From birthday parties in the leafy Doranda residential colony to corporate cakes at the growing Ranchi IT corridor, from anniversary surprises in the upscale Bariatu area to student celebrations near Birla Institute of Technology — RedHeart covers all Ranchi zones: Central (Main Road, Albert Ekka Chowk, Lower Bazar), North (Lalpur, Kanke Road, Harmu Colony, Hehal), South (Doranda, Hinoo, Jail Road, Bariatu), East (Namkum, Sukhdeonagar, BIT Mesra), West (Ratu Road, Nagri, Piska More).</p>
<p>Our Ranchi cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes (Dhoni-theme!), Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ranchi, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Doranda, Lalpur, Kanke Road, Harmu Colony, Bariatu, BIT Mesra area, Hinoo</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, MS Dhoni Cricket Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you make MS Dhoni cricket-theme cakes in Ranchi?", answer: "Yes, MS Dhoni-themed photo cakes and cricket-theme fondant cakes are hugely popular in Dhoni's hometown of Ranchi — available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Ranchi?", answer: "Yes, same-day cake delivery is available across all Ranchi areas — Doranda, Lalpur, Kanke Road, Harmu Colony, and BIT Mesra area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ranchi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ranchi delivery." }
    ]
  },

  "raipur": {
    cityName: "Raipur",
    metaTitle: "Cake Delivery in Raipur | Chhattisgarh Capital | RedHeart",
    metaDescription: "Order cakes online in Raipur. Same-day delivery across Raipur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Raipur",
    metaKeyword: "cake delivery raipur, order cake online raipur, birthday cake raipur, custom cake raipur, same day cake delivery raipur shankar nagar new rajendra nagar pandri telibandha",
    footerContent: `
<h2>Cake Delivery in Raipur — Chhattisgarh's Capital, Rice Bowl State's Urban Celebration Hub</h2>
<p>Raipur — Chhattisgarh's capital (since the state was carved from Madhya Pradesh in 2000), a city of 1.5 million, and the commercial centre of one of India's mineral-richest states (Chhattisgarh has 15% of India's iron ore, vast coal reserves, and limestone deposits) — is experiencing rapid urbanisation and a growing middle class with an appetite for modern celebrations. From birthday parties in the residential Shankar Nagar to corporate cakes at the steel and cement company offices, from anniversary surprises in the planned New Rajendra Nagar to student birthdays near Pt. Ravishankar Shukla University — RedHeart covers all Raipur zones: Central (Sadar Bazaar, Jaistambh Chowk, Fafadih), North (Shankar Nagar, Khamardih, Mowa), South (Pandri, Telibandha, Civil Lines), East (VIP Road, New Rajendra Nagar, Airport area), West (Tatibandh, Vidhan Sabha Road, Kabir Nagar).</p>
<p>Our Raipur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raipur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shankar Nagar, Pandri, Telibandha, New Rajendra Nagar, Civil Lines, Mowa, Tatibandh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Raipur?", answer: "Yes, same-day cake delivery is available across all Raipur areas — Shankar Nagar, Pandri, Telibandha, New Rajendra Nagar, and Civil Lines — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to New Rajendra Nagar and VIP Road in Raipur?", answer: "Yes, the VIP Road corridor, New Rajendra Nagar, and the Airport area in Raipur are fully covered by our same-day delivery." },
      { question: "Are eggless cakes available in Raipur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Raipur delivery." }
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
