// Cakes Batch 9 — 15 cities:
// Ujjain, Rewa (MP)
// Bhavnagar, Junagadh, Gandhinagar, Anand (Gujarat — all eggless focus)
// Bhilwara, Alwar, Sri Ganganagar (Rajasthan)
// Bokaro (Jharkhand)
// Rampur, Shahjahanpur (UP)
// Hisar, Rohtak (Haryana)
// Thanjavur is done already — Tirunelveli done — so add Thiruvannamalai (TN)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "ujjain": {
    cityName: "Ujjain",
    metaTitle: "Cake Delivery in Ujjain | Mahakal City MP | RedHeart",
    metaDescription: "Order cakes online in Ujjain. Same-day delivery across Ujjain. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Ujjain",
    metaKeyword: "cake delivery ujjain, order cake online ujjain, birthday cake ujjain, custom cake ujjain, same day cake delivery ujjain freeganj tower chowk mahakaleshwar nanakheda vikram university",
    footerContent: `
<h2>Cake Delivery in Ujjain — One of the Seven Sacred Hindu Cities, Mahakaleshwar's City, and Kumbh Mela Host</h2>
<p>Ujjain — one of the Seven Sacred Cities (Sapta Puri) in Hinduism, home to the Mahakaleshwar Jyotirlinga Temple (one of the 12 Jyotirlingas — the most powerful Shiva temples in India — where the Bhasma Aarti at 4 AM is one of the most spiritually charged rituals on earth), host of the Simhastha Kumbh Mela every 12 years (a gathering of 75 million+ pilgrims), and the ancient capital of the Avanti Kingdom and of Chandragupta Vikramaditya's legendary court (whose "Navratnas" included Kalidasa) — is a city of immeasurable spiritual and cultural heritage. From birthday parties in the modern Nanakheda colony to corporate cakes at Ujjain's growing industrial area, from Mahashivratri celebration cakes to anniversary surprises near the Shipra River ghats — RedHeart covers all Ujjain zones: Central (Mahakaleshwar Road, Freeganj, Tower Chowk), North (Nanakheda, Dewas Road, Vikram University area), South (Tarana Road, Maksi Road, Ratlam Road), East (Agar Road, Shivaji Nagar), West (Indore Road, Datoda, Kalyani).</p>
<p>Our Ujjain cake range: Chocolate, Black Forest, Red Velvet, Mango (Malwa Alphonso!), Butterscotch, Photo Cakes, Mahakaleshwar-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ujjain, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Freeganj, Tower Chowk, Nanakheda, Mahakaleshwar Road, Vikram University, Dewas Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mahakal Fondant, Photo Cake, Mango, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ujjain?", answer: "Yes, same-day cake delivery is available across all Ujjain areas — Freeganj, Tower Chowk, Nanakheda, and the Mahakaleshwar Road area — for orders placed before 3 PM." },
      { question: "Are Mahashivratri and Kumbh celebration cakes available in Ujjain?", answer: "Yes, Ujjain's biggest celebrations — Mahashivratri and the Simhastha Kumbh Mela — inspired Mahakal-theme fondant cakes are available for same-day delivery." },
      { question: "Are eggless cakes available in Ujjain?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants, appropriate for Ujjain's sattvic food culture." }
    ]
  },

  "rewa": {
    cityName: "Rewa",
    metaTitle: "Cake Delivery in Rewa | White Tiger City Madhya Pradesh | RedHeart",
    metaDescription: "Order cakes online in Rewa. Same-day delivery across Rewa. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Rewa",
    metaKeyword: "cake delivery rewa, order cake online rewa, birthday cake rewa, custom cake rewa, same day cake delivery rewa civil lines chorhata umaria road station road",
    footerContent: `
<h2>Cake Delivery in Rewa — White Tiger's City, Vindhya Plateau, and Madhya Pradesh's Eastern Hub</h2>
<p>Rewa — Madhya Pradesh's 5th-largest city on the Vindhya Plateau, the "City of the White Tiger" (Rewa's Govindgarh Forest is where the first modern white tiger — Mohan — was captured in 1951 by Maharajah Martand Singh, who then bred the world's entire captive white tiger population from this one individual), home to the Rewa Fort and the Govindgarh Palace (now a heritage resort), and a large coal and bauxite mining region — is a city of royal heritage and Vindhya-region commercial importance. From birthday parties in the Civil Lines area to corporate cakes at the Rewa Ultra Mega Solar Park complex (one of the world's largest solar power projects, powering Delhi Metro), from anniversary surprises in the Chorhata area to student birthdays near Awadhesh Pratap Singh University — RedHeart covers all Rewa zones: Central (Civil Lines, Kufri Chowk, Station Road), North (Umaria Road, Sidhi Road, Indhwar), South (Chorhata, Sirmour Road, Satna Road), East (Govindgarh, Jawa Road), West (Mauganj, Sirmaur, Hanumana).</p>
<p>Our Rewa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant White Tiger-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewa, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Chorhata, Station Road, Umaria Road, Kufri Chowk, Sirmour Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, White Tiger Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you make White Tiger-theme cakes in Rewa?", answer: "Yes! Rewa's famous white tiger heritage inspires our custom White Tiger Fondant cake — a unique wildlife-themed cake perfect for Rewa's proud connection to the world's white tiger lineage." },
      { question: "Can I get same-day cake delivery in Rewa?", answer: "Yes, same-day cake delivery is available across all Rewa areas — Civil Lines, Chorhata, Station Road, and Umaria Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Rewa?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rewa delivery." }
    ]
  },

  "bhavnagar": {
    cityName: "Bhavnagar",
    metaTitle: "Cake Delivery in Bhavnagar | Diamond City Gujarat | RedHeart",
    metaDescription: "Order cakes online in Bhavnagar. Same-day delivery across Bhavnagar. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Bhavnagar",
    metaKeyword: "cake delivery bhavnagar, order cake online bhavnagar, birthday cake bhavnagar eggless, custom cake bhavnagar, same day cake delivery bhavnagar ghogha road sir tk road nilambag waghawadi road",
    footerContent: `
<h2>Cake Delivery in Bhavnagar — Diamond Cutting Hub of the World and Saurashtra's Heritage Port City</h2>
<p>Bhavnagar — Gujarat's 5th-largest city on the Gulf of Khambhat, the "Diamond Cutting Hub of the World" (Bhavnagar and the surrounding Saurashtra region process over 80% of the world's rough diamonds — the town of Ratankot near Bhavnagar employs tens of thousands of diamond cutters and polishers who work on stones mined in South Africa, Russia, and Australia), home to the Takhteshwar Temple (on a hill overlooking the Arabian Sea), the Gaurishankar Lake, and ship-breaking yards at Alang (the world's largest ship-breaking yard, located 50 km away) — is a city of global commercial significance and deep Gujarati traditions. All our Bhavnagar cakes are available in eggless variants — from birthday cakes in the Waghawadi Road residential belt to corporate cakes at the growing GIDC area. RedHeart covers all Bhavnagar zones: Central (Ghogha Road, Sir TK Road, Amba Chowk), North (Nilambag, Sardarnagar, Shyamnagar), South (Waghawadi Road, Sector 7–10, Bhavnagar Airport area), East (GIDC, Anand Nagar, Shastri Nagar), West (Alang Road, Sartanpur, Jawahar Nagar).</p>
<p>Our Bhavnagar cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava (Gujarat special), Mango, Photo Cakes, Fondant theme cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhavnagar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghogha Road, Sir TK Road, Waghawadi Road, Nilambag, Sardarnagar, GIDC, Sector 7–10</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Chocolate, Photo Cake, Black Forest, Red Velvet (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Bhavnagar?", answer: "Yes! All our Bhavnagar cakes are 100% eggless and Pure Veg — suitable for Bhavnagar's strongly Jain and Gujarati vegetarian community. No eggs in any cake, guaranteed." },
      { question: "Can I get same-day eggless cake delivery in Bhavnagar?", answer: "Yes, same-day eggless cake delivery is available across all Bhavnagar areas — Ghogha Road, Sir TK Road, Waghawadi Road, and Nilambag — for orders placed before 3 PM." },
      { question: "Do you have Kesar-Mava cake in Bhavnagar?", answer: "Yes! Kesar (saffron) and Mava (reduced milk) cake — inspired by Gujarat's love of mithai — is our Bhavnagar speciality. Available for same-day delivery." }
    ]
  },

  "junagadh": {
    cityName: "Junagadh",
    metaTitle: "Cake Delivery in Junagadh | Girnar City Gujarat | RedHeart",
    metaDescription: "Order cakes online in Junagadh. Same-day delivery across Junagadh. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Junagadh",
    metaKeyword: "cake delivery junagadh, order cake online junagadh, birthday cake junagadh eggless, custom cake junagadh, same day cake delivery junagadh kalwa chowk mangrol road girnar foothills",
    footerContent: `
<h2>Cake Delivery in Junagadh — Girnar Mountain's Ancient City, Asiatic Lions' Gateway, and Kesar Mango Capital</h2>
<p>Junagadh — a city in Gujarat's Saurashtra region, home to the Girnar Hills (one of Jainism's and Hinduism's holiest mountain complexes — 9,999 steps leading to temples of Neminath and Amba Mata), gateway to the Gir National Park (the world's only home of the Asiatic lion), and famous for the Kesar mango (the Gir-Junagadh Kesar mango — "the queen of mangoes" — is a GI-tagged variety with a saffron-orange hue and intensely sweet flavour) — is a city of magnificent natural and spiritual heritage. All our Junagadh cakes are eggless and Pure Veg — from birthday parties in Kalwa Chowk to corporate cakes at the GIDC area, from Girnar Yatra celebration cakes to anniversary surprises near the Mahabat Maqbara — RedHeart covers all Junagadh zones: Central (Kalwa Chowk, Dhal Road, Station Road), North (Mangrol Road, Keshod Road), South (Girnar Road, Vanthali Road), East (Gir Road, Una Road, Visavadar), West (Mangrol, Gondal Road).</p>
<p>Our Junagadh cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar Mango (Gir Kesar!), Kesar-Mava, Photo Cakes, Fondant Girnar/Asiatic Lion theme. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Junagadh, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalwa Chowk, Dhal Road, Station Road, Mangrol Road, Girnar Road, Keshod Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gir Kesar Mango, Kesar-Mava, Chocolate, Girnar Fondant, Photo Cake (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Junagadh?", answer: "Yes! All our Junagadh cakes are 100% eggless and Pure Veg — suitable for Junagadh's Jain and Gujarati vegetarian community. Guaranteed egg-free." },
      { question: "Do you have Gir Kesar mango cake in Junagadh?", answer: "Yes! The GI-tagged Gir Kesar mango — grown in the Gir region adjacent to Junagadh — is our Junagadh speciality cake flavour. The queen of mangoes in cake form, available for same-day delivery." },
      { question: "Can I get same-day eggless cake delivery in Junagadh?", answer: "Yes, same-day eggless cake delivery is available across all Junagadh areas — Kalwa Chowk, Dhal Road, Mangrol Road, and Girnar Road — for orders placed before 3 PM." }
    ]
  },

  "gandhinagar": {
    cityName: "Gandhinagar",
    metaTitle: "Cake Delivery in Gandhinagar | Gujarat Capital | RedHeart",
    metaDescription: "Order cakes online in Gandhinagar. Same-day delivery across Gandhinagar. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Gandhinagar",
    metaKeyword: "cake delivery gandhinagar, order cake online gandhinagar, birthday cake gandhinagar eggless, custom cake gandhinagar, same day cake delivery gandhinagar sector 1 11 21 gift city akshardham",
    footerContent: `
<h2>Cake Delivery in Gandhinagar — India's Most Tree-Rich Capital City, GIFT City, and Gujarat's Government Hub</h2>
<p>Gandhinagar — Gujarat's capital city, India's greenest state capital (over 60% green coverage — every sector has mandated parks and tree-lined avenues), home to GIFT City (Gujarat International Finance Tec-City — India's first operational smart city and international financial services centre), the spectacular Akshardham Temple complex (a massive BAPS Swaminarayan monument), and the Gujarat Vidhan Sabha — is a planned city of remarkable order and civic pride. All our Gandhinagar cakes are eggless and Pure Veg — from birthday parties in the well-ordered Sector 11 colony to corporate cakes at GIFT City towers, from anniversary surprises in Sector 1 bungalows (the CM's residence zone) to student celebrations near DAIICT (Dhirubhai Ambani Institute) — RedHeart covers all Gandhinagar zones: Sectors 1–30 (the main planned city), GIFT City, Adalaj, Sargasan, Kudasan (residential belt), Infocity campus area, and Pethapur.</p>
<p>Our Gandhinagar cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Mango, Photo Cakes, Fondant GIFT City / Akshardham-inspired themes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhinagar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 1–30, GIFT City, Adalaj, Sargasan, Kudasan, DAIICT area, Infocity</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Chocolate, Photo Cake, Black Forest, Red Velvet (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Gandhinagar?", answer: "Yes! All our Gandhinagar cakes are 100% eggless and Pure Veg — perfect for Gujarat's predominantly vegetarian capital city." },
      { question: "Can I get same-day eggless cake delivery in Gandhinagar?", answer: "Yes, same-day eggless cake delivery is available across all Gandhinagar sectors — Sector 1–30, GIFT City, Adalaj, Sargasan, and DAIICT area — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to GIFT City towers in Gandhinagar?", answer: "Yes, GIFT City (Gujarat International Finance Tec-City) residential and office zones are covered by our same-day delivery in Gandhinagar." }
    ]
  },

  "anand": {
    cityName: "Anand",
    metaTitle: "Cake Delivery in Anand | Milk Capital Gujarat | RedHeart",
    metaDescription: "Order cakes online in Anand. Same-day delivery across Anand. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Anand",
    metaKeyword: "cake delivery anand, order cake online anand, birthday cake anand eggless, custom cake anand, same day cake delivery anand amul dairy vallabh vidyanagar karamsad sojitra",
    footerContent: `
<h2>Cake Delivery in Anand — Milk Capital, Amul's Birthplace, and Vallabh Vidyanagar's Education Hub</h2>
<p>Anand — Gujarat's milk city, birthplace of the world-famous Amul dairy cooperative (GCMMF — the Anand Milk Union Ltd, founded by Tribhuvandas Patel and Dr. Verghese Kurien in 1946 — "Operation Flood" from Anand made India the world's largest milk producer, and "Amul" is the most recognised milk brand in Asia), home to Vallabh Vidyanagar (one of India's most planned educational townships — housing Sardar Patel University, Anand Agricultural University, Anand Veterinary College, and 30+ educational institutions in a single campus complex), and the centre of the Charotar region's prosperous Patel farming communities — is where dairy excellence meets academic brilliance. All our Anand cakes are eggless and Pure Veg — from birthday parties in the Amul Dairy colony to corporate cakes at the Anand-Vitthal Udyognagar GIDC, from anniversary surprises in Karamsad to student birthdays in Vallabh Vidyanagar — RedHeart covers Anand, Vallabh Vidyanagar, Anand GIDC, Karamsad, Sojitra, and Umreth.</p>
<p>Our Anand cake range: All eggless — Chocolate, Black Forest, Red Velvet, Amul Milk Cream (local!), Kesar-Mava, Mango, Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anand, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anand, Vallabh Vidyanagar, Amul Dairy area, Karamsad, Sojitra, Umreth, GIDC</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amul Milk Cream, Kesar-Mava, Chocolate, Photo Cake, Black Forest (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Anand?", answer: "Yes! All our Anand cakes are 100% eggless and Pure Veg — fitting for Anand, the birthplace of Amul and one of India's most vegetarian communities." },
      { question: "Do you deliver cakes to Vallabh Vidyanagar from Anand?", answer: "Yes, Vallabh Vidyanagar's university campuses, student hostels, and residential areas are covered under the Anand delivery zone for same-day delivery." },
      { question: "Can I get same-day eggless cake delivery in Anand?", answer: "Yes, same-day eggless cake delivery is available across Anand, Vallabh Vidyanagar, Karamsad, and GIDC areas for orders placed before 3 PM." }
    ]
  },

  "bhilwara": {
    cityName: "Bhilwara",
    metaTitle: "Cake Delivery in Bhilwara | Textile City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Bhilwara. Same-day delivery across Bhilwara. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bhilwara",
    metaKeyword: "cake delivery bhilwara, order cake online bhilwara, birthday cake bhilwara, custom cake bhilwara, same day cake delivery bhilwara RC vyas colony azad nagar subhash nagar shyam nagar",
    footerContent: `
<h2>Cake Delivery in Bhilwara — Rajasthan's Textile Capital and Mewar's Commercial Hub</h2>
<p>Bhilwara — Rajasthan's largest industrial city (by industrial output), the "Manchester of Rajasthan" and "Textile City" (Bhilwara produces a large share of India's synthetic grey fabric and suiting — the Bhilwara textile cluster is Rajasthan's biggest industrial contribution, with hundreds of large and medium textile mills and a large stock of synthetic yarn), and located in the historical Mewar region (near Chittorgarh, Udaipur, and the Mewar heritage sites) — is a city of industrial wealth and Rajasthani cultural traditions. From birthday parties in the residential RC Vyas Colony to corporate cakes at the large textile mills, from Teej and Gangaur festival cakes to anniversary surprises in the Azad Nagar area — RedHeart covers all Bhilwara zones: Central (Azad Nagar, Shastri Nagar, Station Road), North (RC Vyas Colony, Subhash Nagar, Shyam Nagar), South (Chittorgarh Road, Gulabpura), East (Chittor Road, Mangalwar Peth), West (Banswara Road, Hamirgarh, Mandal Road).</p>
<p>Our Bhilwara cake range: Chocolate, Black Forest, Red Velvet, Kesar-Malai (Rajasthani), Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhilwara, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">RC Vyas Colony, Azad Nagar, Subhash Nagar, Shyam Nagar, Shastri Nagar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kesar-Malai, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhilwara?", answer: "Yes, same-day cake delivery is available across all Bhilwara areas — RC Vyas Colony, Azad Nagar, Subhash Nagar, and Shyam Nagar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bhilwara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhilwara delivery." },
      { question: "Do you deliver midnight cakes in Bhilwara?", answer: "Yes, midnight birthday cake delivery is available across Bhilwara's central and residential zones." }
    ]
  },

  "alwar": {
    cityName: "Alwar",
    metaTitle: "Cake Delivery in Alwar | Tiger Reserve City Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Alwar. Same-day delivery across Alwar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Alwar",
    metaKeyword: "cake delivery alwar, order cake online alwar, birthday cake alwar, custom cake alwar, same day cake delivery alwar hope circle malakhera civil lines new colony company bagh",
    footerContent: `
<h2>Cake Delivery in Alwar — Sariska Tiger Reserve's Gateway and Rajasthan-Delhi Corridor's Historic City</h2>
<p>Alwar — Rajasthan's northernmost major city, gateway to the Sariska Tiger Reserve (one of India's most important tiger conservation zones — the success of tiger reintroduction at Sariska is a landmark in Indian wildlife conservation), home to the Alwar Fort (a magnificent 15th-century hill fort), the Siliserh Lake Palace (now a heritage hotel), and a major urban centre on the Delhi-Jaipur highway — is a rapidly growing city drawing Delhi-NCR commuters and residents. From birthday parties in the modern New Colony area to corporate cakes at the Alwar RIICO industrial zone, from anniversary surprises near Company Bagh gardens to student birthdays near Alwar's growing engineering colleges — RedHeart covers all Alwar zones: Central (Hope Circle, Station Road, SBBJ Chowk), North (Civil Lines, Manu Marg, Malakhera), South (New Colony, Tijara Road, Bhiwadi Road), East (Behror Road, Bhiwadi, Neemrana), West (Sariska Road, Thana Gazi, Bansur).</p>
<p>Our Alwar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Alwar Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alwar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hope Circle, Civil Lines, New Colony, Malakhera, Station Road, Manu Marg, Bhiwadi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Alwar Fort Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Alwar?", answer: "Yes, same-day cake delivery is available across all Alwar areas — Hope Circle, Civil Lines, New Colony, and Malakhera — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Bhiwadi from Alwar?", answer: "Yes, Bhiwadi industrial township (on the Alwar-Delhi highway) is covered under the Alwar delivery zone for same-day delivery." },
      { question: "Are eggless cakes available in Alwar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Alwar delivery." }
    ]
  },

  "sri-ganganagar": {
    cityName: "Sri Ganganagar",
    metaTitle: "Cake Delivery in Sri Ganganagar | Grain Bowl Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Sri Ganganagar. Same-day delivery across Sri Ganganagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sri Ganganagar",
    metaKeyword: "cake delivery sri ganganagar, order cake online sri ganganagar, birthday cake sri ganganagar, custom cake ganganagar, same day cake delivery sri ganganagar sector 4 7 9 padampuri",
    footerContent: `
<h2>Cake Delivery in Sri Ganganagar — Rajasthan's Granary, Indira Gandhi Canal Terminus, and Punjab Border Celebrations</h2>
<p>Sri Ganganagar — Rajasthan's northernmost major city, bordering Punjab and Pakistan, the "Granary of Rajasthan" (the Indira Gandhi Canal — flowing from the Harike Barrage through the Thar Desert to Sri Ganganagar — transformed the region from a sandy desert to one of Rajasthan's most productive agricultural zones, growing wheat, cotton, citrus fruits, and kinnow oranges), and a city with a strong Punjabi Sikh community (many Sikh farmers settled here after Partition, giving Sri Ganganagar a distinct Punjab-flavour in food, culture, and celebrations) — is a city of agricultural prosperity and warm Punjabi-Rajasthani celebrations. From birthday parties in the modern Sector 7 to corporate cakes at the Agricultural Produce Market, from Baisakhi celebration cakes to anniversary surprises in Padampuri — RedHeart covers all Sri Ganganagar zones: Central (Sector 4, 7, Station Road, Old Vegetable Market), North (Sector 9, IGNP Canal area), South (Padampuri, Suratgarh Road), East (Anupgarh Road, Raisinghnagar), West (Pakistan Border highway belt).</p>
<p>Our Sri Ganganagar cake range: Chocolate, Black Forest, Red Velvet, Kinnow Orange (local!), Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sri Ganganagar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 4, Sector 7, Sector 9, Padampuri, Station Road, Old Market, Suratgarh Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kinnow Orange, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Kinnow orange cake in Sri Ganganagar?", answer: "Yes! Sri Ganganagar's famous Kinnow citrus fruit — a hybrid mandarin orange grown in massive quantities in the Ganganagar belt — inspires our tangy Kinnow Orange Cream cake, available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Sri Ganganagar?", answer: "Yes, same-day cake delivery is available across all Sri Ganganagar areas — Sector 4, Sector 7, Padampuri, and Station Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sri Ganganagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sri Ganganagar delivery." }
    ]
  },

  "bokaro": {
    cityName: "Bokaro",
    metaTitle: "Cake Delivery in Bokaro | Steel City Jharkhand | RedHeart",
    metaDescription: "Order cakes online in Bokaro. Same-day delivery across Bokaro. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bokaro",
    metaKeyword: "cake delivery bokaro, order cake online bokaro, birthday cake bokaro, custom cake bokaro steel city, same day cake delivery bokaro sector 4 city centre chas bsl township",
    footerContent: `
<h2>Cake Delivery in Bokaro — Soviet-Built Steel City and Jharkhand's Planned Industrial Township</h2>
<p>Bokaro — Jharkhand's 2nd-largest city, home to the Bokaro Steel Plant (BSL — one of the world's largest integrated steel plants, built with Soviet collaboration in 1964–72, producing 4.5 MTPA of steel), a city planned from scratch on the banks of the Damodar River with a grid-like sector system (Sector 4 City Centre being the commercial hub) — is a city of meticulous planning, green boulevards, and a large educated township population. From birthday parties in the well-ordered Sector 4 City Centre to corporate cakes at the BSL administrative offices, from anniversary surprises in the model Chas town to student birthdays near IISCO Bokaro — RedHeart covers all Bokaro zones: Central (Sector 4 City Centre, Sector 6, BSL Admin area), North (Sector 1, 2, 3, Bokaro Township), South (Chas, Ektahana Road, Chas Jail area), East (Sindri Road, Giridih Road), West (Dhanbad Road, Bermo, Ramgarh Road).</p>
<p>Our Bokaro cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Steel City-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bokaro, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 4 City Centre, Sector 1–6 BSL Township, Chas, Ektahana Road, Dhanbad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Steel City Fondant, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bokaro?", answer: "Yes, same-day cake delivery is available across all Bokaro areas — Sector 4 City Centre, BSL Township sectors, Chas, and Ektahana Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to BSL Bokaro Steel Plant township?", answer: "Yes, all Bokaro Steel Plant residential sectors (Sector 1 through 6) and the adjacent Chas town are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Bokaro?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bokaro delivery." }
    ]
  },

  "rampur": {
    cityName: "Rampur",
    metaTitle: "Cake Delivery in Rampur | Knife City UP | RedHeart",
    metaDescription: "Order cakes online in Rampur. Same-day delivery across Rampur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Rampur",
    metaKeyword: "cake delivery rampur, order cake online rampur, birthday cake rampur, custom cake rampur, same day cake delivery rampur civil lines kazipura nazibabad road jama masjid",
    footerContent: `
<h2>Cake Delivery in Rampur — City of Nawabs, Raza Library, and the Famous Rampur Knife</h2>
<p>Rampur — western Uttar Pradesh's major city, historically the seat of the Rampur Nawabs (a powerful Muslim royal family that maintained a sophisticated court culture — miniature painting, Urdu poetry, classical music — after the fall of the Mughal Empire), home to the Raza Library (one of India's most valuable manuscript libraries, with rare Mughal, Persian, and Sanskrit manuscripts and the world's finest collection of Mughal miniature paintings — UNESCO registered), and famous for the Rampur knife (the Rampuri chaaku — a spring-assisted folding knife that has been a part of folk culture across North India) — is a city of layered Nawabi heritage and growing commerce. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from Eid and Muharram celebration cakes to anniversary surprises near the Raza Library — RedHeart covers all Rampur zones: Central (Civil Lines, Station Road, Jama Masjid area), North (Kazipura, Tanda Road, Shahabad), South (Milak Road, Behjam Road), East (Bilaspur Road, Shahabad Road), West (Moradabad Road, Chamrua, Nawabganj).</p>
<p>Our Rampur cake range: Chocolate, Black Forest, Red Velvet, Mango (Dussehri!), Butterscotch, Photo Cakes, Fondant Nawabi heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rampur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Kazipura, Station Road, Jama Masjid area, Tanda Road, Nawabganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Mango (Dussehri), Black Forest, Nawabi Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rampur?", answer: "Yes, same-day cake delivery is available across all Rampur areas — Civil Lines, Kazipura, Station Road, and Nawabganj — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Rampur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rampur delivery." },
      { question: "Do you deliver midnight cakes in Rampur?", answer: "Yes, midnight birthday cake delivery is available across Rampur's central and residential zones." }
    ]
  },

  "shahjahanpur": {
    cityName: "Shahjahanpur",
    metaTitle: "Cake Delivery in Shahjahanpur | Rohilkhand UP | RedHeart",
    metaDescription: "Order cakes online in Shahjahanpur. Same-day delivery across Shahjahanpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Shahjahanpur",
    metaKeyword: "cake delivery shahjahanpur, order cake online shahjahanpur, birthday cake shahjahanpur, custom cake shahjahanpur, same day cake delivery shahjahanpur civil lines katra roshnabad sadar",
    footerContent: `
<h2>Cake Delivery in Shahjahanpur — Rohilkhand's Rose City and Freedom Fighter Ram Prasad Bismil's Birthplace</h2>
<p>Shahjahanpur — Rohilkhand's major city in northern Uttar Pradesh, birthplace of the great revolutionary freedom fighter Ram Prasad Bismil (who wrote the immortal "Sarfaroshi Ki Tamanna" and was hanged in 1927), a city known for its rose cultivation (Shahjahanpur's gulkand and rose water are prized across North India), and an important sugar and textile industrial city — is a city of patriotic heritage and warm Rohilkhandi-Awadhi culture. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from anniversary surprises in the Roshnabad colony to student birthdays near MJP Rohilkhand University's Shahjahanpur centre — RedHeart covers all Shahjahanpur zones: Central (Civil Lines, Station Road, Katra), North (Roshnabad, Bhawalkhera, Tilhar Road), South (Sadar Bazar, Banda Road, Hardoi Road), East (Powayan Road, Nigohi), West (Budaun Road, Jalon, Jafarabad).</p>
<p>Our Shahjahanpur cake range: Chocolate, Black Forest, Red Velvet, Rose-cream (local rose special!), Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shahjahanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Katra, Roshnabad, Station Road, Sadar Bazar, Tilhar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Rose-Cream, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Shahjahanpur?", answer: "Yes, same-day cake delivery is available across all Shahjahanpur areas — Civil Lines, Katra, Roshnabad, and Station Road — for orders placed before 3 PM." },
      { question: "Do you have rose-cream cakes in Shahjahanpur?", answer: "Yes! Shahjahanpur's famous rose cultivation inspires our Rose-Cream cake — made with rose water and rose petals, a fragrant local speciality available for same-day delivery." },
      { question: "Are eggless cakes available in Shahjahanpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Shahjahanpur delivery." }
    ]
  },

  "hisar": {
    cityName: "Hisar",
    metaTitle: "Cake Delivery in Hisar | Steel City Haryana | RedHeart",
    metaDescription: "Order cakes online in Hisar. Same-day delivery across Hisar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Hisar",
    metaKeyword: "cake delivery hisar, order cake online hisar, birthday cake hisar, custom cake hisar, same day cake delivery hisar urban estate sector 13 14 civil lines red square",
    footerContent: `
<h2>Cake Delivery in Hisar — Haryana's Steel City, Cattle Fair Capital, and Agroha Heritage City</h2>
<p>Hisar — Haryana's 3rd-largest city, home to the National Research Centre on Equines (India's premier horse research institution), the famous Hisar Cattle Fair (one of India's largest livestock fairs — Haryana Murrah buffalo, the world's highest milk-yielding buffalo breed, is traded here), the ancient Agroha mound (birth city of Aggarwals — the most prominent Vaishya community in North India, with their ancient city here), and a major steel and textile industrial city with the SAIL Special Steels facility — is a city of agricultural, industrial, and heritage importance in Haryana. From birthday parties in the modern Urban Estate to corporate cakes at the Civil Lines area, from anniversary surprises near the beautiful Deer Park to student birthdays near Guru Jambheshwar University — RedHeart covers all Hisar zones: Central (Red Square Market, Station Road, City Center), North (Civil Lines, Sector 13–14, Urban Estate), South (Nagar Council area, Hansi Road), East (Agroha Road, Delhi Bypass, Bhiwani Road), West (Fatehabad Road, Barwala, Adampur).</p>
<p>Our Hisar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hisar, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Urban Estate, Civil Lines, Sector 13–14, Red Square Market, Station Road, Hansi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hisar?", answer: "Yes, same-day cake delivery is available across all Hisar areas — Urban Estate, Civil Lines, Sector 13–14, and Red Square Market — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hisar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hisar delivery." },
      { question: "Do you deliver midnight cakes in Hisar?", answer: "Yes, midnight birthday cake delivery is available across Hisar's central and residential zones." }
    ]
  },

  "rohtak": {
    cityName: "Rohtak",
    metaTitle: "Cake Delivery in Rohtak | Heart of Haryana | RedHeart",
    metaDescription: "Order cakes online in Rohtak. Same-day delivery across Rohtak. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Rohtak",
    metaKeyword: "cake delivery rohtak, order cake online rohtak, birthday cake rohtak, custom cake rohtak, same day cake delivery rohtak model town civil lines sector 1 2 3 mduniversity",
    footerContent: `
<h2>Cake Delivery in Rohtak — Heart of Haryana, MDU University City, and India's Jat Heartland</h2>
<p>Rohtak — Haryana's 2nd-largest city and the "Heart of Haryana" (geographically at the state's centre), seat of Maharshi Dayanand University (MDU — one of Haryana's major state universities with strong engineering, management, and law schools), a large textile and hosiery manufacturing hub, and a city with a proud Jat heritage and a rapidly growing NCR-connected residential market (Rohtak is within commuting distance of Delhi, and thousands of Delhi-based families have ties here) — is a city of growing aspirations. From birthday parties in the upscale Model Town to corporate cakes at the Rohtak HSIDC industrial area, from anniversary surprises in the Civil Lines area to student birthdays at MDU campus — RedHeart covers all Rohtak zones: Central (Civil Lines, Model Town, Delhi Road), North (Sector 1–3, PGI area, HBDM Hospital area), South (Sunaria Road, Asthal Bohar, Sampla Road), East (Delhi Road, Bahadurgarh Road, Bhiwani Road), West (Sanghi Road, Bhiwani Chowk).</p>
<p>Our Rohtak cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rohtak, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Model Town, Civil Lines, Sector 1–3, PGI area, Delhi Road, Asthal Bohar, MDU campus</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rohtak?", answer: "Yes, same-day cake delivery is available across all Rohtak areas — Model Town, Civil Lines, Sector 1–3, and PGI area — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to MDU (Maharshi Dayanand University) campus?", answer: "Yes, MDU Rohtak's campus area and the surrounding university colony are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Rohtak?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rohtak delivery." }
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
