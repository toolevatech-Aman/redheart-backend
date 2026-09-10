// Cakes Batch 1 — 15 top metro/tier-1 cities:
// Mumbai, Delhi, Bangalore, Hyderabad, Chennai,
// Kolkata, Pune, Ahmedabad, Jaipur, Surat,
// Lucknow, Kanpur, Nagpur, Indore, Bhopal

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "mumbai": {
    cityName: "Mumbai",
    metaTitle: "Cake Delivery in Mumbai | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Mumbai. Same-day delivery across all areas. Birthday, custom, anniversary cakes from ₹499.",
    h1: "Online Cake Delivery in Mumbai",
    metaKeyword: "cake delivery mumbai, order cake online mumbai, birthday cake mumbai, custom cake mumbai, same day cake delivery mumbai, anniversary cake mumbai bandra andheri dadar powai",
    footerContent: `
<h2>Cake Delivery in Mumbai — India's City of Dreams, Served Fresh to Every Neighbourhood</h2>
<p>Mumbai — India's financial capital, entertainment hub, and a city that never sleeps — is a place where celebrations happen every day, every hour, in every pocket of its teeming 20-million-strong population. From a birthday at a high-rise apartment in Worli to a surprise anniversary at a Bandra home, from a corporate achievement cake at an Andheri office to a graduation celebration in Thane — cake delivery in Mumbai has to be as fast, diverse, and reliable as the city itself. RedHeart's Mumbai cake delivery covers all zones: South Mumbai (Colaba, CST, Churchgate, Fort, Marine Lines, Dadar), Central (Kurla, Ghatkopar, Chembur, Vikhroli), Western suburbs (Andheri, Bandra, Juhu, Kandivali, Borivali, Malad, Goregaon), and the extended Mumbai Metropolitan Region (Thane, Navi Mumbai, Mulund).</p>
<p>Choose from our full range: classic Black Forest, Photo Cakes (custom-printed photos on edible paper), Red Velvet, Chocolate Truffle, Butterscotch, Pineapple, Fondant cakes (2D/3D character cakes), Eggless cakes (available across the full range), and theme cakes for children and adults. Same-day delivery available for orders placed before 3 PM. Midnight delivery available for surprise celebrations.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mumbai, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All areas — South Mumbai, Western suburbs, Central suburbs, Thane, Navi Mumbai</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Black Forest, Chocolate Truffle, Photo Cake, Red Velvet, Fondant theme cakes</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mumbai?", answer: "Yes, same-day cake delivery is available across all Mumbai zones — South Mumbai, Western and Central suburbs, Thane, and Navi Mumbai — for orders placed before 3 PM." },
      { question: "Do you deliver cakes at midnight in Mumbai?", answer: "Yes, midnight cake delivery is available in Mumbai for surprise birthday celebrations. Schedule the delivery for midnight and we'll make sure the cake arrives exactly at the right moment." },
      { question: "Are eggless cakes available in Mumbai?", answer: "Yes, all cake flavours — Black Forest, Chocolate Truffle, Red Velvet, Butterscotch, Pineapple — are available in eggless variants across Mumbai." }
    ]
  },

  "delhi": {
    cityName: "Delhi",
    metaTitle: "Cake Delivery in Delhi | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Delhi. Same-day delivery across all Delhi areas. Birthday, custom, anniversary cakes from ₹499.",
    h1: "Online Cake Delivery in Delhi",
    metaKeyword: "cake delivery delhi, order cake online delhi, birthday cake delhi, custom cake delhi, same day cake delivery delhi, cake delivery south delhi north delhi west delhi noida gurgaon",
    footerContent: `
<h2>Cake Delivery in Delhi — Capital City Celebrations, Delivered Fresh Across Every Colony and Sector</h2>
<p>Delhi — India's capital, a city of 19 million people, ancient history, and relentless hustle — is a city that celebrates in every flavour: from Punjabi weddings with multi-tier fondant cakes to corporate parties in Connaught Place, from birthday surprises in South Delhi's Defence Colony to office celebrations in Gurugram's Cyber City. RedHeart delivers cakes across all Delhi zones: North Delhi (Civil Lines, Rohini, Pitampura, Model Town), South Delhi (Defence Colony, Lajpat Nagar, Greater Kailash, Saket, Malviya Nagar), East Delhi (Preet Vihar, Laxmi Nagar, Mayur Vihar), West Delhi (Janakpuri, Dwarka, Rajouri Garden, Tilak Nagar), Central Delhi (Karol Bagh, Paharganj, CP), and the NCR belt (Noida, Gurugram/Gurgaon, Faridabad, Ghaziabad).</p>
<p>Our Delhi cake range includes the full spectrum: Chocolate Truffle, Black Forest, Red Velvet, Pineapple, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, Pinata cakes, Pull-me-up cakes, and custom message cakes. Eggless variants available for all flavours. Same-day delivery for orders before 3 PM; midnight delivery for surprises.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delhi (NCT), including Noida, Gurugram, Faridabad, Ghaziabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All Delhi zones — North, South, East, West, Central + NCR</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate Truffle, Photo Cake, Pinata Cake, Red Velvet, Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Delhi?", answer: "Yes, same-day cake delivery is available across all of Delhi (and NCR areas including Noida, Gurugram, Faridabad) for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Noida and Gurugram from Delhi?", answer: "Yes, our Delhi cake delivery covers the full NCR belt including Noida, Gurugram (Gurgaon), Faridabad, and Ghaziabad in addition to all Delhi zones." },
      { question: "Are eggless cakes available in Delhi?", answer: "Yes, all cake flavours are available in eggless variants for Delhi delivery, including Chocolate Truffle, Black Forest, Red Velvet, and Pineapple." }
    ]
  },

  "bangalore": {
    cityName: "Bangalore",
    metaTitle: "Cake Delivery in Bangalore | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Bangalore. Same-day delivery across Bengaluru. Birthday, custom, anniversary cakes from ₹499.",
    h1: "Online Cake Delivery in Bangalore",
    metaKeyword: "cake delivery bangalore bengaluru, order cake online bangalore, birthday cake bangalore, custom cake bangalore, same day cake delivery bangalore koramangala indiranagar whitefield electronic city",
    footerContent: `
<h2>Cake Delivery in Bangalore — Silicon Valley of India's Sweet Spot, Delivered to Your Doorstep</h2>
<p>Bangalore (Bengaluru) — India's IT capital and start-up ecosystem, a city of tech parks, cosmopolitan culture, and a young, celebration-hungry population — is where cake delivery meets high expectations. From a team birthday at a Whitefield tech campus to a first-anniversary surprise in Koramangala, from a graduation party in Jayanagar to a baby shower in Hebbal — Bengaluru's cake culture is as diverse as its population. RedHeart delivers cakes across all Bangalore zones: Central (MG Road, Brigade Road, Ulsoor, Shivajinagar), South (Jayanagar, JP Nagar, BTM, Bannerghatta Road, Electronic City), East (Whitefield, Marathahalli, Indiranagar, KR Puram), North (Hebbal, Yelahanka, Nagawara, Bellary Road), West (Rajajinagar, Malleswaram, Yeshwanthpur), and peripheral growth corridors (Sarjapur, Outer Ring Road, Hosur Road).</p>
<p>Our Bangalore cake range covers everything from Chocolate Fudge and Black Forest to customised Fondant cakes, Photo Cakes, Pinata cakes, Bomb cakes, and themed cakes for every occasion. Eggless available for all. Same-day delivery for orders before 3 PM; midnight delivery for surprises.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bangalore (Bengaluru), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All zones — Central, Koramangala, Indiranagar, Whitefield, Electronic City, Hebbal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate Fudge, Photo Cake, Pinata, Bomb Cake, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bangalore?", answer: "Yes, same-day cake delivery is available across all Bangalore zones — Koramangala, Indiranagar, Whitefield, Electronic City, Hebbal, and more — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Whitefield and Electronic City?", answer: "Yes, our Bangalore cake delivery covers all tech corridors including Whitefield, Electronic City, Marathahalli, and the Outer Ring Road belt." },
      { question: "Are eggless cakes available in Bangalore?", answer: "Yes, all cake flavours are available in eggless variants for Bangalore delivery, including Chocolate Fudge, Black Forest, Red Velvet, and Pineapple." }
    ]
  },

  "hyderabad": {
    cityName: "Hyderabad",
    metaTitle: "Cake Delivery in Hyderabad | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Hyderabad. Same-day delivery across Hyderabad and Secunderabad. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Hyderabad",
    metaKeyword: "cake delivery hyderabad, order cake online hyderabad, birthday cake hyderabad, custom cake hyderabad, same day cake delivery hyderabad secunderabad banjara hills jubilee hills gachibowli hitech city",
    footerContent: `
<h2>Cake Delivery in Hyderabad — City of Nizams and Now a City of Custom Celebration Cakes</h2>
<p>Hyderabad — Telangana's capital, the City of Pearls, and India's rapidly growing second tech hub after Bangalore — is a city where biryani and now beautifully crafted cakes define celebrations. From birthday parties at high-rises in Gachibowli's IT corridor to anniversaries in Banjara Hills' upscale villas, from baby showers in Madhapur to corporate celebrations at HITEC City campuses — Hyderabad's cake culture has exploded in the tech-migration boom. RedHeart covers all Hyderabad zones: Central (Abids, Nampally, Charminar, Koti), West (Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, HITEC City, Kondapur), North (Secunderabad, Bowenpally, Trimulgherry, Malkajgiri), East (LB Nagar, Uppal, Hayathnagar), and Cyberabad/Outer Ring Road growth areas.</p>
<p>Our Hyderabad range covers Chocolate Truffle, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Pull-me-up cakes, Pinata cakes, Fondant theme cakes, and custom message cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hyderabad, Telangana (incl. Secunderabad, Cyberabad)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banjara Hills, Jubilee Hills, HITEC City, Gachibowli, Madhapur, Secunderabad, LB Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate Truffle, Photo Cake, Pull-me-up, Red Velvet, Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hyderabad?", answer: "Yes, same-day cake delivery is available across all Hyderabad areas — including Banjara Hills, HITEC City, Gachibowli, Madhapur, Secunderabad, and LB Nagar — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to HITEC City and Gachibowli?", answer: "Yes, our Hyderabad delivery fully covers Cyberabad's IT belt including HITEC City, Gachibowli, Madhapur, Kondapur, and all Outer Ring Road campuses." },
      { question: "Are eggless cakes available in Hyderabad?", answer: "Yes, all cake flavours are available in eggless variants for Hyderabad delivery." }
    ]
  },

  "chennai": {
    cityName: "Chennai",
    metaTitle: "Cake Delivery in Chennai | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Chennai. Same-day delivery across Chennai. Birthday, custom, anniversary cakes from ₹499.",
    h1: "Online Cake Delivery in Chennai",
    metaKeyword: "cake delivery chennai, order cake online chennai, birthday cake chennai, custom cake chennai, same day cake delivery chennai anna nagar t nagar velachery omr ecr",
    footerContent: `
<h2>Cake Delivery in Chennai — Gateway City of South India's Celebration Culture</h2>
<p>Chennai — Tamil Nadu's capital, a city of 10 million, Carnatic music, filter coffee, and a growing culture of confectionery celebration — is where birthdays are celebrated with Paal Kolam and birthday cakes in equal measure. From family celebrations in T. Nagar's packed neighbourhoods to corporate birthdays in the OMR IT corridor, from first birthdays in Anna Nagar to wedding anniversaries in Adyar — Chennai's cake delivery demand spans every suburb. RedHeart covers all Chennai zones: North (Tondiarpet, Perambur, Royapuram), Central (T. Nagar, Anna Nagar, Nungambakkam, Egmore, Mylapore), South (Adyar, Velachery, Pallikaranai, Sholinganallur), East (OMR, ECR, Perungudi, Siruseri), and West (Porur, Ambattur, Avadi, Poonamallee).</p>
<p>Our Chennai cake range: Black Forest, Chocolate Truffle, Pineapple, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, and custom message cakes. Eggless options available across all flavours. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chennai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">T. Nagar, Anna Nagar, Adyar, OMR, ECR, Velachery, Porur, Ambattur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Black Forest, Pineapple, Photo Cake, Chocolate Truffle, Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chennai?", answer: "Yes, same-day cake delivery is available across all Chennai areas — T. Nagar, Anna Nagar, OMR, ECR, Velachery, Adyar, and more — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chennai?", answer: "Yes, all cake flavours — Black Forest, Chocolate Truffle, Pineapple, Red Velvet — are available in eggless variants for Chennai delivery." },
      { question: "Do you deliver cakes to OMR and ECR in Chennai?", answer: "Yes, our Chennai delivery covers the full IT corridor (OMR, Siruseri, Perungudi) and the ECR beach belt as well." }
    ]
  },

  "kolkata": {
    cityName: "Kolkata",
    metaTitle: "Cake Delivery in Kolkata | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Kolkata. Same-day delivery across Kolkata. Birthday, custom, anniversary cakes from ₹499.",
    h1: "Online Cake Delivery in Kolkata",
    metaKeyword: "cake delivery kolkata, order cake online kolkata, birthday cake kolkata, custom cake kolkata, same day cake delivery kolkata salt lake park street new town howrah",
    footerContent: `
<h2>Cake Delivery in Kolkata — City of Joy's Mithai Tradition Meets Modern Custom Cakes</h2>
<p>Kolkata — Bengal's cultural capital, the City of Joy, India's literary and artistic soul — is a city where sweets (mishti doi, sandesh, rasgolla) have always been central to celebration. Today, modern custom cakes sit alongside those beloved mishtis on every birthday table. From a Durga Puja celebration cake in a North Kolkata para (neighbourhood) to a corporate anniversary at Salt Lake's tech hub, from a child's fondant cake in New Town to a midnight surprise delivery in South Kolkata — RedHeart covers all Kolkata zones: North (Shyambazar, Dunlop, Dum Dum, Belgharia), Central (Park Street, Esplanade, AJC Bose Road, Gariahat), South (Jadavpur, Tollygunge, Behala, Garia, Narendrapur), East (Salt Lake/Bidhannagar, New Town/Rajarhat, Topsia), and West (Howrah, Shibpur, Santragachi).</p>
<p>Our Kolkata cake range: Black Forest, Chocolate Truffle, Pineapple, Red Velvet, Mango, Rasmalai-flavour (Bengali fusion), Photo Cakes, Fondant theme cakes, and custom message cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolkata, West Bengal (incl. Howrah, Salt Lake, New Town)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Park Street, Salt Lake, New Town, Gariahat, Jadavpur, Tollygunge, Howrah</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Black Forest, Chocolate Truffle, Photo Cake, Rasmalai fusion, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kolkata?", answer: "Yes, same-day cake delivery is available across all Kolkata areas — Park Street, Salt Lake, New Town, Gariahat, Jadavpur, and Howrah — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Salt Lake and New Town in Kolkata?", answer: "Yes, our Kolkata cake delivery covers Salt Lake (Bidhannagar), New Town (Rajarhat), and the full East Kolkata tech and residential corridor." },
      { question: "Are eggless cakes available in Kolkata?", answer: "Yes, all flavours including Black Forest, Chocolate Truffle, and Red Velvet are available in eggless variants for Kolkata delivery." }
    ]
  },

  "pune": {
    cityName: "Pune",
    metaTitle: "Cake Delivery in Pune | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Pune. Same-day delivery across Pune and PCMC. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Pune",
    metaKeyword: "cake delivery pune, order cake online pune, birthday cake pune, custom cake pune, same day cake delivery pune koregaon park kalyani nagar viman nagar hinjewadi baner",
    footerContent: `
<h2>Cake Delivery in Pune — Oxford of the East and a City That Knows How to Party</h2>
<p>Pune — Maharashtra's cultural capital, Oxford of the East (with Pune University, Fergusson College, and over 100 engineering colleges), and a rapidly growing IT hub — is a city of young energy, expat culture, and a sophisticated palate for celebration cakes. From birthday parties in the upscale Koregaon Park villas to office cake-cuttings at Hinjewadi IT Park, from graduation celebrations near Fergusson College to baby showers in Wakad — Pune's cake delivery culture matches its cosmopolitan energy. RedHeart covers all Pune zones: Central (Shivajinagar, Deccan, FC Road, Camp), East (Koregaon Park, Kalyani Nagar, Viman Nagar, Kharadi, Hadapsar), North (Baner, Aundh, Balewadi, Wakad, Hinjewadi), South (Katraj, Bibwewadi, Sahakarnagar, Kondhwa), and PCMC (Pimpri-Chinchwad, Akurdi, Nigdi).</p>
<p>Our Pune cake range: Chocolate Truffle, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Pinata cakes, Bomb cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pune, Maharashtra (incl. PCMC)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koregaon Park, Hinjewadi, Baner, Viman Nagar, Kharadi, Deccan, Camp, PCMC</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate Truffle, Photo Cake, Pinata, Bomb Cake, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Pune?", answer: "Yes, same-day cake delivery is available across all Pune areas — Koregaon Park, Hinjewadi, Baner, Viman Nagar, Kharadi, and PCMC — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Hinjewadi IT Park?", answer: "Yes, our Pune delivery covers all IT corridors including Hinjewadi Phase 1/2/3, Baner, Balewadi, and Wakad." },
      { question: "Are eggless cakes available in Pune?", answer: "Yes, all flavours — Chocolate Truffle, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Pune delivery." }
    ]
  },

  "ahmedabad": {
    cityName: "Ahmedabad",
    metaTitle: "Cake Delivery in Ahmedabad | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Ahmedabad. Same-day delivery across Ahmedabad. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Ahmedabad",
    metaKeyword: "cake delivery ahmedabad, order cake online ahmedabad, birthday cake ahmedabad, custom cake ahmedabad, eggless cake ahmedabad same day delivery sg highway satellite navrangpura bopal",
    footerContent: `
<h2>Cake Delivery in Ahmedabad — Gujarat's Commercial Capital and the City of Pure Eggless Celebrations</h2>
<p>Ahmedabad — UNESCO World Heritage City, Gujarat's commercial capital, and home to one of India's largest Jain and Vaishnav communities — is a city where eggless cakes are not a preference but a lifestyle. With a significant vegetarian population, the demand for eggless celebration cakes in Ahmedabad is among the highest in any Indian metro. From navjot ceremonies in Navrangpura to birthdays in the posh bungalows of Satellite, from corporate anniversary cakes at the S.G. Highway office towers to Navratri Garba-night celebration cakes in Bopal — RedHeart covers all Ahmedabad zones: Central (Law Garden, Navrangpura, Paldi, Ellis Bridge), West (Satellite, Bodakdev, Vastrapur, Prahlad Nagar, Maninagar), North (Chandlodia, Gota, Motera, Nava Vadaj), South (Maninagar, Isanpur, Vastral), and the New West (Bopal, Shilaj, South Bopal, Ambli, Thaltej).</p>
<p>All our Ahmedabad cakes are available in 100% eggless variants. Range includes Chocolate, Pineapple, Black Forest, Red Velvet, Mango, Kesar-Pista (Gujarat favourite), Photo Cakes, Fondant theme cakes, and Pinata cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ahmedabad, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Satellite, Bopal, SG Highway, Navrangpura, Vastrapur, Gota, Maninagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All cakes available in 100% eggless variants</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Pista, Chocolate, Photo Cake, Pinata, Pineapple (eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Ahmedabad?", answer: "Yes, all cake flavours — Chocolate, Pineapple, Black Forest, Red Velvet, Mango, Kesar-Pista — are available in 100% eggless variants for Ahmedabad delivery, catering to the city's Jain and Vaishnav community." },
      { question: "Can I get same-day cake delivery in Ahmedabad?", answer: "Yes, same-day cake delivery is available across all Ahmedabad areas — Satellite, Bopal, SG Highway, Navrangpura, and Gota — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Bopal and South Bopal in Ahmedabad?", answer: "Yes, Bopal, South Bopal, Shilaj, Ambli, and the full New West Ahmedabad growth corridor are covered." }
    ]
  },

  "jaipur": {
    cityName: "Jaipur",
    metaTitle: "Cake Delivery in Jaipur | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Jaipur. Same-day delivery across Pink City. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Jaipur",
    metaKeyword: "cake delivery jaipur, order cake online jaipur, birthday cake jaipur, custom cake jaipur, same day cake delivery jaipur malviya nagar vaishali nagar c scheme mansarovar",
    footerContent: `
<h2>Cake Delivery in Jaipur — Pink City Royalty Deserves the Finest Custom Cakes</h2>
<p>Jaipur — Rajasthan's capital, the Pink City, a city of Hawa Mahal and Amer Fort grandeur, and one of India's fastest-growing tier-1 cities — is where celebration culture mixes royal heritage with a modern appetite for themed custom cakes. From first birthday cakes in C-Scheme's leafy bungalows to corporate anniversary cakes at Malviya Nagar's commercial hubs, from wedding cake deliveries for Jaipur's famous large weddings to surprise midnight birthday deliveries in Vaishali Nagar — Jaipur's cake culture is thriving. RedHeart covers all Jaipur zones: Central (C Scheme, Bani Park, Civil Lines, MI Road), South (Malviya Nagar, Sanganer, Tonk Road), West (Vaishali Nagar, Pratap Nagar, Shyam Nagar), North (Sikar Road, Vidyadhar Nagar, Rohini), East (Mansarovar, JLN Marg, Jagatpura), and emerging areas (Sitapura, Muhana, Ajmer Road belt).</p>
<p>Our Jaipur cake range: Chocolate, Black Forest, Red Velvet, Mango, Kesar-Badam (Rajasthan favourite), Photo Cakes, Fondant royal-theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jaipur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">C Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, Bani Park, Pratap Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Badam, Chocolate, Photo Cake, Royal Fondant theme, Pinata</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jaipur?", answer: "Yes, same-day cake delivery is available across all Jaipur areas — C Scheme, Malviya Nagar, Vaishali Nagar, Mansarovar, and more — for orders placed before 3 PM." },
      { question: "Do you make royal-theme fondant cakes for Jaipur?", answer: "Yes, Jaipur's heritage inspires our royal-theme Fondant cakes — fort, palace, and Rajputana designs are available as custom fondant cakes for weddings and parties." },
      { question: "Are eggless cakes available in Jaipur?", answer: "Yes, all flavours including Kesar-Badam, Chocolate, Black Forest, and Red Velvet are available in eggless variants for Jaipur delivery." }
    ]
  },

  "surat": {
    cityName: "Surat",
    metaTitle: "Cake Delivery in Surat | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Surat. Same-day delivery across Surat. Birthday, custom, anniversary cakes from ₹499.",
    h1: "Online Cake Delivery in Surat",
    metaKeyword: "cake delivery surat, order cake online surat, birthday cake surat, custom cake surat, eggless cake surat same day delivery adajan varachha katargam vesu althan",
    footerContent: `
<h2>Cake Delivery in Surat — Diamond City's Sweet Celebrations, Delivered Fresh</h2>
<p>Surat — Gujarat's second city, the world's diamond polishing capital (90% of the world's rough diamonds are cut and polished in Surat), and India's fastest-growing city by GDP — is a city of mercantile prosperity and enthusiastic celebration culture. The Surat Suratiya (local Surtis) are known for their love of good food and festivities — from Navratri Garba marathons to Diwali Lakshmi Puja and New Year parties. RedHeart covers all Surat zones: Central (Nanpura, Rander Road, Ring Road), West (Adajan, Piplod, Vesu), East (Varachha, Katargam, Limbayat), North (Sachin, Kim, Udhna), and emerging residential (Althan, Dumas, Bhatar, Pal).</p>
<p>All Surat cakes are available eggless. Range: Chocolate, Pineapple, Black Forest, Mango, Kesar-Pista, Photo Cakes, Fondant theme cakes, Pinata cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Surat, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Adajan, Vesu, Varachha, Katargam, Althan, Piplod, Bhatar, Sachin</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All cakes available eggless</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Pista, Chocolate, Photo Cake, Pineapple (eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Surat?", answer: "Yes, all cake flavours — Chocolate, Pineapple, Black Forest, Mango, Kesar-Pista — are available in 100% eggless variants for Surat delivery." },
      { question: "Can I get same-day cake delivery in Surat?", answer: "Yes, same-day cake delivery is available across all Surat areas — Adajan, Vesu, Varachha, Katargam, and Althan — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Adajan and Vesu in Surat?", answer: "Yes, Adajan, Piplod, Vesu, Althan, and all West Surat residential areas are fully covered." }
    ]
  },

  "lucknow": {
    cityName: "Lucknow",
    metaTitle: "Cake Delivery in Lucknow | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Lucknow. Same-day delivery across Lucknow. Birthday, custom, anniversary cakes from ₹499.",
    h1: "Online Cake Delivery in Lucknow",
    metaKeyword: "cake delivery lucknow, order cake online lucknow, birthday cake lucknow, custom cake lucknow, same day cake delivery lucknow hazratganj gomti nagar aliganj mahanagar",
    footerContent: `
<h2>Cake Delivery in Lucknow — City of Nawabs, Tehzeeb, and the Sweetest Birthday Surprises</h2>
<p>Lucknow — Uttar Pradesh's capital, the City of Nawabs, renowned for its tehzeeb (cultured etiquette), kebabs, chikankari, and poetry (mushaira) — is a city where celebrations have always been refined. Modern Lucknow adds custom cakes to this refined celebration culture. From birthday parties in the upscale Gomti Nagar extensions to corporate cake deliveries in Hazratganj's commercial hub, from lavish wedding anniversary cakes in Aliganj to surprise midnight deliveries in Mahanagar — RedHeart covers all Lucknow zones: Central (Hazratganj, Chowk, Aminabad, Lalbagh), East (Gomti Nagar, Vibhuti Khand, Indira Nagar, Chinhat), North (Aliganj, Rajajipuram, Mahanagar, Rajendra Nagar), and emerging (Sushant Golf City, IIM Road, Shaheed Path belt).</p>
<p>Our Lucknow cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Nawabi-theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lucknow, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hazratganj, Gomti Nagar, Aliganj, Mahanagar, Indira Nagar, Sushant Golf City</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Red Velvet, Nawabi Fondant theme, Pinata</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Lucknow?", answer: "Yes, same-day cake delivery is available across all Lucknow areas — Hazratganj, Gomti Nagar, Aliganj, Indira Nagar, and Mahanagar — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Gomti Nagar Extension?", answer: "Yes, Gomti Nagar (including the Extension, Vibhuti Khand, and Sushant Golf City belt) is fully covered by our Lucknow delivery." },
      { question: "Are eggless cakes available in Lucknow?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Lucknow delivery." }
    ]
  },

  "kanpur": {
    cityName: "Kanpur",
    metaTitle: "Cake Delivery in Kanpur | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Kanpur. Same-day delivery across Kanpur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Kanpur",
    metaKeyword: "cake delivery kanpur, order cake online kanpur, birthday cake kanpur, custom cake kanpur, same day cake delivery kanpur civil lines kidwai nagar swaroop nagar kakadeo",
    footerContent: `
<h2>Cake Delivery in Kanpur — Manchester of the East's Industrial Grit Meets Sweet Celebrations</h2>
<p>Kanpur — Uttar Pradesh's largest city, once India's greatest industrial city (the "Manchester of the East" for its textile and leather industries), and a city of 3.5 million — is where old industrial pride meets a growing appetite for modern celebration culture. From birthday parties in Civil Lines' old bungalows to corporate celebration cakes at the leather factories of Jajmau, from family anniversaries in Kidwai Nagar to student birthday surprises near HBTU (IIT Kanpur vicinity) — RedHeart covers all Kanpur zones: Central (Civil Lines, The Mall, Birhana Road), South (Kidwai Nagar, Swaroop Nagar, Kakadeo, Govind Nagar), North (Naveen Market, Parade, Harjinder Nagar), West (Shyam Nagar, Kalyanpur, Rawatpur), and East (Gwaltoli, Anwarganj, Armapur).</p>
<p>Our Kanpur cake range: Chocolate, Black Forest, Pineapple, Mango, Red Velvet, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Kidwai Nagar, Swaroop Nagar, Kakadeo, Govind Nagar, Kalyanpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Pineapple</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kanpur?", answer: "Yes, same-day cake delivery is available across all Kanpur areas — Civil Lines, Kidwai Nagar, Kakadeo, Govind Nagar, and Kalyanpur — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Civil Lines and The Mall in Kanpur?", answer: "Yes, Civil Lines, The Mall Road area, and all Central Kanpur locations are fully covered by our same-day delivery network." },
      { question: "Are eggless cakes available in Kanpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Pineapple, Red Velvet — are available in eggless variants for Kanpur delivery." }
    ]
  },

  "nagpur": {
    cityName: "Nagpur",
    metaTitle: "Cake Delivery in Nagpur | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Nagpur. Same-day delivery across Nagpur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Nagpur",
    metaKeyword: "cake delivery nagpur, order cake online nagpur, birthday cake nagpur, custom cake nagpur, same day cake delivery nagpur sitabuldi dharampeth sadar ramdaspeth",
    footerContent: `
<h2>Cake Delivery in Nagpur — Orange City's Celebrations, Centre of India's Sweetest Surprises</h2>
<p>Nagpur — the "Orange City" (famous for its Vidarbha Nagpur oranges), India's geographical centre, and Maharashtra's third-largest city — is a city where the zest of oranges infuses every celebration. From Diwali celebrations in Dharampeth's old families to corporate birthday cakes at MIHAN's aerospace and IT park, from Ganesh Chaturthi custom cakes in Sadar to anniversary surprises in Ramdaspeth — RedHeart covers all Nagpur zones: Central (Sitabuldi, Dharampeth, Ramdaspeth, Sadar, Gandhi Sagar), South (Untkhana, Nandanvan, Hingna), North (Kamptee, Kalmeswarnagar, Wadi), East (Besa, Mankapur, Wardha Road), West (Pratap Nagar, Laxmi Nagar, Trimurti Nagar), and MIHAN/Airport area.</p>
<p>Our Nagpur cake range: Orange-flavoured (Nagpur special!), Chocolate, Black Forest, Red Velvet, Photo Cakes, Fondant theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagpur, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharampeth, Sadar, Ramdaspeth, Sitabuldi, Trimurti Nagar, MIHAN, Kamptee</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orange flavour, Chocolate, Photo Cake, Black Forest, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have orange-flavoured cakes in Nagpur?", answer: "Yes! Nagpur's world-famous Vidarbha oranges inspire our orange cream cake — a local favourite available for same-day delivery across Nagpur." },
      { question: "Can I get same-day cake delivery in Nagpur?", answer: "Yes, same-day cake delivery is available across all Nagpur areas — Dharampeth, Sadar, Ramdaspeth, Sitabuldi, and MIHAN — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nagpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Orange, Red Velvet — are available in eggless variants for Nagpur delivery." }
    ]
  },

  "indore": {
    cityName: "Indore",
    metaTitle: "Cake Delivery in Indore | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Indore. Same-day delivery across Indore. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Indore",
    metaKeyword: "cake delivery indore, order cake online indore, birthday cake indore, custom cake indore, same day cake delivery indore vijay nagar palasia ab road rau nipania",
    footerContent: `
<h2>Cake Delivery in Indore — Cleanest City of India, Cleanest Fresh Cakes Delivered to Your Door</h2>
<p>Indore — Madhya Pradesh's commercial capital, India's cleanest city (six consecutive years Swachh Bharat champion), and a city of 3 million known for Sarafa Bazaar's legendary street food — is also a city that has developed a sophisticated cake culture alongside its famed mithai and namkeen tradition. From birthday parties in the posh Vijay Nagar Scheme 54 bungalows to corporate cakes at the Super Corridor IT hub, from anniversary surprises in Palasia to student birthday cakes near IIM Indore — RedHeart covers all Indore zones: Central (Palasia, MG Road, Old Palasia, Chhawni), East (LIG Colony, Nipania, Khandwa Road), West (Vijay Nagar, Scheme 54, Scheme 78, Ring Road), North (Scheme 71, Bicholi Hapsi, Rau), South (AB Road, Bhawarkuan, Bijalpur), and IT corridor (Super Corridor, TCS Campus belt).</p>
<p>Our Indore cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indore, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijay Nagar, Palasia, AB Road, Nipania, Rau, Scheme 54/78, Super Corridor</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Red Velvet, Mango, Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Indore?", answer: "Yes, same-day cake delivery is available across all Indore areas — Vijay Nagar, Palasia, AB Road, Nipania, and the Super Corridor — for orders placed before 3 PM." },
      { question: "Do you deliver cakes near IIM Indore and the Super Corridor?", answer: "Yes, the Super Corridor (TCS campus, IIM Indore vicinity, and the new IT zone) is fully covered by our Indore delivery." },
      { question: "Are eggless cakes available in Indore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Indore delivery." }
    ]
  },

  "bhopal": {
    cityName: "Bhopal",
    metaTitle: "Cake Delivery in Bhopal | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Bhopal. Same-day delivery across Bhopal. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Bhopal",
    metaKeyword: "cake delivery bhopal, order cake online bhopal, birthday cake bhopal, custom cake bhopal, same day cake delivery bhopal mp nagar new bhopal kolar road arera colony",
    footerContent: `
<h2>Cake Delivery in Bhopal — City of Lakes, Twin Taals, and Now Twin Celebrations</h2>
<p>Bhopal — Madhya Pradesh's capital, the "City of Lakes" (Upper Lake / Bada Talab and Lower Lake / Chhota Talab dominate the city's landscape), and a city with a unique Nawabi Muslim cultural heritage blended with contemporary growth — is where celebration culture is warming to modern custom cakes. From birthday parties in the leafy Arera Colony bungalows to corporate anniversary cakes at Bhopal's growing MP Nagar commercial hub, from student birthdays near IISER Bhopal to anniversary surprises in New Bhopal's high-rises — RedHeart covers all Bhopal zones: Central (Hamidia Road, New Market, TT Nagar, Kohe-Fiza), East (Arera Colony, Shahpura, Hoshangabad Road), West (MP Nagar, Malviya Nagar, Bawadiya Kalan), North (Bairagarh, BHEL, Karond, Gulmohar), South (Kolar Road, Bagh Sewania, Misrod), and emerging (New Bhopal, IISER belt, Ayodhya Bypass).</p>
<p>Our Bhopal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhopal, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Arera Colony, MP Nagar, New Market, Kolar Road, BHEL, Shahpura, TT Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bhopal?", answer: "Yes, same-day cake delivery is available across all Bhopal areas — Arera Colony, MP Nagar, New Market, Kolar Road, and BHEL — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to New Bhopal and the IISER area?", answer: "Yes, New Bhopal, IISER Bhopal vicinity, the Ayodhya Bypass belt, and all expanding Bhopal zones are covered by our delivery network." },
      { question: "Are eggless cakes available in Bhopal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bhopal delivery." }
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
