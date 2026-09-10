// Cakes Batch 2 — 15 cities:
// Visakhapatnam, Patna, Agra, Varanasi, Meerut,
// Nashik, Aurangabad (Sambhajinagar), Rajkot, Vadodara,
// Coimbatore, Madurai, Vijayawada, Chandigarh, Amritsar, Dehradun

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "visakhapatnam": {
    cityName: "Visakhapatnam",
    metaTitle: "Cake Delivery in Visakhapatnam | Vizag | RedHeart",
    metaDescription: "Order cakes online in Visakhapatnam (Vizag). Same-day delivery across Vizag. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Visakhapatnam",
    metaKeyword: "cake delivery visakhapatnam vizag, order cake online vizag, birthday cake visakhapatnam, custom cake vizag, same day cake delivery vizag mvp colony gajuwaka rushikonda",
    footerContent: `
<h2>Cake Delivery in Visakhapatnam — City of Destiny's Beach Celebrations and Blue-Mountain Birthdays</h2>
<p>Visakhapatnam (Vizag) — Andhra Pradesh's largest city and port, the "City of Destiny," with its spectacular Eastern Ghats (Kailasa Giri, Simhachalam hill) meeting the Bay of Bengal — is a city of rising aspirations and a growing celebration culture. From birthday parties at the MVP Colony seafront apartments to corporate cakes at the Steel Plant township, from anniversary surprises in the upscale Rushikonda beach belt to student birthday deliveries near Andhra University — RedHeart covers all Vizag zones: Central (Dwaraka Nagar, Jagadamba, Gopalapatnam), North (Gajuwaka, Steel Plant, Bheemunipatnam), East (Beach Road, Rushikonda, Hanumanthawaka), West (Madhurawada, Kommadi, VUDA Colony), and South (Seethammadhara, MVP Colony, Sagar Nagar, Marripalem).</p>
<p>Our Vizag cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango, Photo Cakes, Fondant theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Visakhapatnam (Vizag), Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">MVP Colony, Rushikonda, Dwaraka Nagar, Gajuwaka, Seethammadhara, Madhurawada</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Butterscotch, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Visakhapatnam?", answer: "Yes, same-day cake delivery is available across all Vizag areas — MVP Colony, Rushikonda, Dwaraka Nagar, Gajuwaka, and Madhurawada — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Rushikonda beach area in Vizag?", answer: "Yes, the Rushikonda beach belt and all of East Vizag including Hanumanthawaka and Beach Road are covered by our delivery network." },
      { question: "Are eggless cakes available in Visakhapatnam?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Vizag delivery." }
    ]
  },

  "patna": {
    cityName: "Patna",
    metaTitle: "Cake Delivery in Patna | Same-Day | RedHeart",
    metaDescription: "Order cakes online in Patna. Same-day delivery across Patna. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Patna",
    metaKeyword: "cake delivery patna, order cake online patna, birthday cake patna, custom cake patna, same day cake delivery patna boring road bailey road rajendra nagar kankarbagh",
    footerContent: `
<h2>Cake Delivery in Patna — Ancient Pataliputra's Modern Birthday Culture on the Ganges</h2>
<p>Patna — Bihar's capital, one of the world's oldest continuously inhabited cities (ancient Pataliputra, seat of the Maurya Empire and Chandragupta Maurya), and a city of 2.5 million on the Ganges — is seeing a rapid rise in modern celebration culture alongside its traditional mithai (litti-chokha, khaja, tilkut) heritage. From birthday parties on the fashionable Boring Road to corporate anniversary cakes at Patna's growing commercial hubs, from Chhath Puja celebration cakes to anniversary surprises in Bailey Road — RedHeart covers all Patna zones: Central (Boring Road, Fraser Road, Exhibition Road, Gandhi Maidan), South (Rajendra Nagar, Kankarbagh, Anisabad, Bailey Road), East (Patna City, Ashok Rajpath, Kurji), North (Mithapur, Phulwari, Station Road), and emerging (Patna Sahib, Naubatpur, Danapur).</p>
<p>Our Patna cake range: Chocolate, Black Forest, Pineapple, Mango, Red Velvet, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patna, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Boring Road, Bailey Road, Rajendra Nagar, Kankarbagh, Fraser Road, Gandhi Maidan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Pineapple, Black Forest, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Patna?", answer: "Yes, same-day cake delivery is available across all Patna areas — Boring Road, Bailey Road, Rajendra Nagar, and Kankarbagh — for orders placed before 3 PM." },
      { question: "Are Chhath Puja celebration cakes available in Patna?", answer: "Yes, custom cakes for Chhath Puja family celebrations and other Bihar festivals are available for same-day delivery in Patna." },
      { question: "Are eggless cakes available in Patna?", answer: "Yes, all flavours — Chocolate, Black Forest, Pineapple, Mango — are available in eggless variants for Patna delivery." }
    ]
  },

  "agra": {
    cityName: "Agra",
    metaTitle: "Cake Delivery in Agra | Taj Mahal City | RedHeart",
    metaDescription: "Order cakes online in Agra. Same-day delivery across Agra. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Agra",
    metaKeyword: "cake delivery agra, order cake online agra, birthday cake agra, custom cake agra, same day cake delivery agra taj mahal city love romantic anniversary cake",
    footerContent: `
<h2>Cake Delivery in Agra — Taj Mahal's City of Love, Where Every Celebration Deserves a Special Cake</h2>
<p>Agra — home to the Taj Mahal (the world's greatest monument to love), the Agra Fort, and Fatehpur Sikri — is a city where romance, history, and celebration naturally intersect. A birthday cake delivered in Agra could sit on a rooftop with a Taj Mahal view; an anniversary cake in Agra is in the city of eternal love. RedHeart covers all Agra zones: Central (Sadar Bazaar, Taj Mahal area, Shah Market), South (Taj Nagri Colony, Fatehabad Road, Shastri Nagar), North (Civil Lines, Kamla Nagar, Belanganj), East (Dayalbagh, Etmad-ud-Daula, Mathura Road), West (Trans Yamuna, Sikandra, NH-19 belt), and satellite areas (Firozabad Road, Raja Mandi).</p>
<p>Our Agra cake range: Chocolate, Black Forest, Red Velvet, Mango (Dussehri!), Petha-flavour fusion, Photo Cakes (Taj Mahal photo cakes — a tourist favourite!), Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agra, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sadar, Taj Nagri, Civil Lines, Fatehabad Road, Dayalbagh, Kamla Nagar, Sikandra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Taj Mahal Photo Cake, Chocolate, Mango (Dussehri), Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get a Taj Mahal photo cake in Agra?", answer: "Yes, our Taj Mahal photo cake — edible-print of the Taj Mahal on the cake — is one of Agra's most popular options for romantic anniversary and birthday celebrations." },
      { question: "Can I get same-day cake delivery in Agra?", answer: "Yes, same-day cake delivery is available across all Agra areas for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Agra?", answer: "Yes, all flavours — Chocolate, Black Forest, Mango, Red Velvet — are available in eggless variants for Agra delivery." }
    ]
  },

  "varanasi": {
    cityName: "Varanasi",
    metaTitle: "Cake Delivery in Varanasi | Banaras Ghat City | RedHeart",
    metaDescription: "Order cakes online in Varanasi. Same-day delivery across Banaras. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Varanasi",
    metaKeyword: "cake delivery varanasi banaras, order cake online varanasi, birthday cake varanasi, custom cake banaras, same day cake delivery varanasi ganga ghat sarnath bhu lanka",
    footerContent: `
<h2>Cake Delivery in Varanasi — Ancient City of Shiva, Ganga Ghats, and Modern Celebration Cakes</h2>
<p>Varanasi (Banaras, Kashi) — one of the world's oldest continuously inhabited cities, Shiva's sacred city on the Ganges, where the Ganga Ghats welcome pilgrims and tourists from across the world — is also a city of 1.5 million locals who celebrate birthdays, anniversaries, and achievements with as much enthusiasm as any modern city. From birthday parties near the famous BHU (Banaras Hindu University) campus — one of Asia's largest residential universities — to corporate cakes at the growing industrial hub of Varanasi, from family celebrations in the old city lanes of Lanka and Sigra to anniversary surprises in the newer Sunderpur colony — RedHeart covers all Varanasi zones: Central (Lanka, Sigra, Maidagin, Kabir Chaura), North (Sarnath, Varanasi Cantt, Civil Lines), South (BHU area, Assi Ghat, Sunderpur), East (Ramnagar, Mirjapur Road), and emerging (Orderly Bazaar, Paharia, Ring Road belt).</p>
<p>Our Varanasi cake range: Chocolate, Black Forest, Pineapple, Mango, Red Velvet, Photo Cakes, Fondant Kashi-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Varanasi (Banaras), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lanka, Sigra, BHU area, Assi, Sarnath, Civil Lines, Ramnagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake (Ganga Ghat theme), Pineapple, Mango</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Varanasi?", answer: "Yes, same-day cake delivery is available across all Varanasi areas — Lanka, BHU area, Sigra, Sarnath, Civil Lines — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the BHU area in Varanasi?", answer: "Yes, the BHU (Banaras Hindu University) campus area, Lanka, and the entire student corridor in South Varanasi are fully covered." },
      { question: "Are eggless cakes available in Varanasi?", answer: "Yes, all flavours — Chocolate, Black Forest, Pineapple, Mango — are available in eggless variants for Varanasi delivery." }
    ]
  },

  "meerut": {
    cityName: "Meerut",
    metaTitle: "Cake Delivery in Meerut | Sports City UP | RedHeart",
    metaDescription: "Order cakes online in Meerut. Same-day delivery across Meerut. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Meerut",
    metaKeyword: "cake delivery meerut, order cake online meerut, birthday cake meerut, custom cake meerut, same day cake delivery meerut cantonment hapur road pallavpuram saket nagar",
    footerContent: `
<h2>Cake Delivery in Meerut — Sports Equipment Capital's Winning Celebrations</h2>
<p>Meerut — western Uttar Pradesh's largest city, the "Sports City of India" (supplying 40% of India's sporting goods including cricket bats, hockey sticks, and boxing equipment), and a city of 1.7 million at the Delhi NCR periphery — is a city of tradition and enterprise. From birthday parties in the Cantonment's heritage bungalows to corporate cakes at the sports equipment manufacturing clusters, from anniversary surprises in Pallavpuram colony to student celebrations at the large university belt — RedHeart covers all Meerut zones: Central (Ghanta Ghar, Sadar Bazar, Hapur Road), North (Cantonment, Civil Lines, Begumpul), South (Saket Nagar, Partapur, Shastri Nagar), East (Pallavpuram, Ganga Nagar, Lisari Gate), West (Modipuram, Maliwara, Eves Nagar), and the Delhi-Meerut Expressway belt.</p>
<p>Our Meerut cake range: Chocolate, Black Forest, Pineapple, Mango, Red Velvet, Photo Cakes, Sports-theme Fondant cakes (cricket, hockey — local favourites!). Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Meerut, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cantonment, Civil Lines, Pallavpuram, Saket Nagar, Begumpul, Partapur, Modipuram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Cricket-theme Fondant, Black Forest, Pineapple</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get a cricket-theme cake in Meerut?", answer: "Yes, cricket and sports-themed fondant cakes are a natural fit for Meerut — India's sports equipment capital. Custom cricket-bat, jersey, and sports-theme cakes are available." },
      { question: "Can I get same-day cake delivery in Meerut?", answer: "Yes, same-day cake delivery is available across all Meerut areas — Cantonment, Pallavpuram, Civil Lines, and Partapur — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Meerut?", answer: "Yes, all flavours — Chocolate, Black Forest, Pineapple, Mango — are available in eggless variants for Meerut delivery." }
    ]
  },

  "nashik": {
    cityName: "Nashik",
    metaTitle: "Cake Delivery in Nashik | Wine City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Nashik. Same-day delivery across Nashik. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Nashik",
    metaKeyword: "cake delivery nashik, order cake online nashik, birthday cake nashik, custom cake nashik, same day cake delivery nashik college road dwarka gangapur road cidco satpur",
    footerContent: `
<h2>Cake Delivery in Nashik — Wine Capital of India, Where Vineyards and Cake Culture Celebrate Together</h2>
<p>Nashik — Maharashtra's wine capital (Sula Vineyards, York Winery, and 70+ wineries make it India's undisputed wine-producing hub), a holy city (on the Godavari River, site of the Kumbh Mela every 12 years), and a fast-growing industrial and IT city — is a city with an exceptionally sophisticated food and celebration culture. From birthday parties in the upscale College Road belt to corporate cakes at the Satpur industrial hub, from anniversary celebrations in the wine-country Gangapur Road bungalows to student birthdays near one of Nashik's many engineering colleges — RedHeart covers all Nashik zones: Central (College Road, Dwarka Circle, Canada Corner, Nasik Road), West (Gangapur Road, Indira Nagar, Panchavati), East (CIDCO, Nashik Road, Pathardi), North (Satpur, Ambad, Sinnar Road), and emerging (Wadala, Goverdhan, MID area).</p>
<p>Our Nashik cake range: Chocolate, Black Forest, Red Velvet, Mango, Wine-flavour fusion (a local first!), Photo Cakes, Fondant theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nashik, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">College Road, Gangapur Road, Dwarka, CIDCO, Satpur, Ambad, Canada Corner</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Red Velvet, Black Forest, Pinata</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nashik?", answer: "Yes, same-day cake delivery is available across all Nashik areas — College Road, Gangapur Road, CIDCO, Satpur, and Ambad — for orders placed before 3 PM." },
      { question: "Do you deliver cakes near Sula Vineyards in Nashik?", answer: "Yes, the Gangapur Road and wine-country belt near Sula Vineyards is covered by our Nashik delivery. Perfect for vineyard anniversary cakes!" },
      { question: "Are eggless cakes available in Nashik?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nashik delivery." }
    ]
  },

  "aurangabad": {
    cityName: "Aurangabad",
    metaTitle: "Cake Delivery in Aurangabad | Sambhajinagar Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Aurangabad (Sambhajinagar). Same-day delivery across Aurangabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Aurangabad",
    metaKeyword: "cake delivery aurangabad sambhajinagar, order cake online aurangabad, birthday cake aurangabad, custom cake aurangabad sambhajinagar, same day cake delivery aurangabad ajanta ellora",
    footerContent: `
<h2>Cake Delivery in Aurangabad (Sambhajinagar) — Ajanta-Ellora Heritage City's Sweetest Celebrations</h2>
<p>Aurangabad (now officially Chhatrapati Sambhajinagar), Maharashtra's tourism capital and home to the Ajanta and Ellora cave UNESCO World Heritage Sites, is a city of history, industry, and a growing modern urban culture. From birthday parties in CIDCO's planned residential sectors to corporate cakes at the large industrial MIDC zone (automotive, pharmaceutical), from anniversary surprises near the famous Bibi Ka Maqbara (the "Mini Taj Mahal" of the Deccan) to student birthdays near the large university belt — RedHeart covers all Aurangabad zones: Central (Osmanpura, Nirala Bazaar, Samarth Nagar), North (CIDCO N-series, Airport Area), South (Padegaon, Waluj MIDC), East (Garkheda, Harsul, Jalna Road), West (Pundliknagar, Jyotnagar, Kranti Chowk).</p>
<p>Our Aurangabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes (Ajanta/Ellora cave heritage theme!), Fondant theme cakes, Pinata cakes. Eggless available. Same-day delivery before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aurangabad (Sambhajinagar), Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Osmanpura, Nirala Bazaar, CIDCO, Garkheda, Waluj MIDC, Jalna Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Aurangabad (Sambhajinagar)?", answer: "Yes, same-day cake delivery is available across all Aurangabad areas — Osmanpura, CIDCO, Garkheda, and Jalna Road — for orders placed before 3 PM." },
      { question: "Do you make Ajanta/Ellora heritage-theme cakes in Aurangabad?", answer: "Yes, custom photo cakes with Ajanta cave murals or Ellora temple artwork printed on edible paper are available as unique souvenirs and celebration cakes." },
      { question: "Are eggless cakes available in Aurangabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Aurangabad delivery." }
    ]
  },

  "rajkot": {
    cityName: "Rajkot",
    metaTitle: "Cake Delivery in Rajkot | Gujarat Saurashtra | RedHeart",
    metaDescription: "Order cakes online in Rajkot. Same-day delivery across Rajkot. Birthday, custom eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Rajkot",
    metaKeyword: "cake delivery rajkot, order cake online rajkot, birthday cake rajkot, custom cake rajkot, eggless cake rajkot same day delivery kalawad road raiya road 150 feet ring road",
    footerContent: `
<h2>Cake Delivery in Rajkot — Saurashtra's Lion Heart City, Where Every Celebration Goes All Out</h2>
<p>Rajkot — Saurashtra's largest city, Gandhi's boyhood home, and one of Gujarat's fastest-growing industrial cities — is a city known for business acumen, community celebrations, and a distinctly Kathiawari hospitality culture where celebrations are lavish and generous. From Navratri Garba night celebration cakes to birthday surprises at Rajkot's thriving business community gatherings, from anniversary cakes in the posh Kalawad Road bungalows to corporate celebration cakes at the large GIDC industrial zones — RedHeart covers all Rajkot zones: Central (Sanjiv Kumar Road, Jubilee Ground, Gondal Road), North (Kalavad Road, Kothariya Road), South (150 Feet Ring Road, Bhaktinagar, University Road), East (Mavdi, Aji Dam area, Rajkot Airport), West (Raiya Road, Jawahar Road, Bhavnath).</p>
<p>All Rajkot cakes available in 100% eggless variants. Range: Chocolate, Pineapple, Black Forest, Mango, Kesar-Pista, Photo Cakes, Fondant theme cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajkot, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalawad Road, 150 Feet Ring Road, Raiya Road, Bhaktinagar, Kothariya, Mavdi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All cakes available in 100% eggless variants</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Pista, Chocolate, Pineapple (eggless), Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Rajkot?", answer: "Yes, all cake flavours — Chocolate, Pineapple, Black Forest, Mango, Kesar-Pista — are available in 100% eggless variants for Rajkot delivery." },
      { question: "Can I get same-day cake delivery in Rajkot?", answer: "Yes, same-day cake delivery is available across all Rajkot areas — Kalawad Road, 150 Feet Ring Road, Raiya Road, and Bhaktinagar — for orders placed before 3 PM." },
      { question: "Do you deliver Navratri celebration cakes in Rajkot?", answer: "Yes, custom Navratri Garba-night cakes and Diwali celebration cakes are available for same-day delivery in Rajkot." }
    ]
  },

  "vadodara": {
    cityName: "Vadodara",
    metaTitle: "Cake Delivery in Vadodara | Baroda Gujarat | RedHeart",
    metaDescription: "Order cakes online in Vadodara (Baroda). Same-day delivery across Vadodara. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Vadodara",
    metaKeyword: "cake delivery vadodara baroda, order cake online vadodara, birthday cake vadodara, custom cake baroda, eggless cake vadodara same day delivery fatehgunj alkapuri sayajigunj",
    footerContent: `
<h2>Cake Delivery in Vadodara — Baroda's Cultural Legacy, Sayaji Baug, and Cultured Cake Celebrations</h2>
<p>Vadodara (Baroda) — Gujarat's cultural capital, city of the legendary Maharaja Sayajirao Gaekwad III (who transformed Baroda into a modern, educated, progressive state in the 19th–20th century), and a city known for its fine arts (MS University's Faculty of Fine Arts is one of India's finest), Garba tradition, and cosmopolitan culture — is where cake celebrations match the city's refined cultural identity. From birthday parties in the leafy Alkapuri bungalows (Vadodara's Beverly Hills) to corporate cakes at the sprawling GIDC Makarpura industrial zone, from anniversary surprises on Race Course Road to student birthdays near MS University — RedHeart covers all Vadodara zones: Central (Sayajigunj, Raopura, Mandvi, Fatehgunj), South (Alkapuri, Race Course Road, Jetalpur), North (Gorwa, Nizampura, Productivity Road), East (Makarpura, Waghodia, Karelibaug), West (Akota, Panigate, Navayard).</p>
<p>All Vadodara cakes available eggless. Range: Chocolate, Pineapple, Black Forest, Mango, Kesar-Pista, Photo Cakes, Fondant theme cakes, Pinata cakes. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vadodara (Baroda), Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alkapuri, Fatehgunj, Sayajigunj, Race Course Road, Makarpura, Akota, Karelibaug</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All cakes available in 100% eggless variants</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kesar-Pista, Photo Cake, Pineapple, Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Vadodara?", answer: "Yes, all cake flavours — Chocolate, Pineapple, Black Forest, Mango, Kesar-Pista — are available in 100% eggless variants for Vadodara delivery." },
      { question: "Can I get same-day cake delivery in Vadodara?", answer: "Yes, same-day cake delivery is available across all Vadodara areas — Alkapuri, Fatehgunj, Race Course Road, Makarpura — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Alkapuri and Race Course Road in Vadodara?", answer: "Yes, Alkapuri, Race Course Road, and all premium Vadodara residential zones are fully covered by our same-day delivery." }
    ]
  },

  "coimbatore": {
    cityName: "Coimbatore",
    metaTitle: "Cake Delivery in Coimbatore | Manchester of South India | RedHeart",
    metaDescription: "Order cakes online in Coimbatore. Same-day delivery across Coimbatore. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Coimbatore",
    metaKeyword: "cake delivery coimbatore, order cake online coimbatore, birthday cake coimbatore, custom cake coimbatore, same day cake delivery coimbatore rs puram gandhipuram peelamedu saibaba colony",
    footerContent: `
<h2>Cake Delivery in Coimbatore — Manchester of South India's Sweet Textile Celebrations</h2>
<p>Coimbatore — Tamil Nadu's second-largest city, the "Manchester of South India" (India's largest textile manufacturing hub), and a fast-growing IT and engineering city at the foot of the Nilgiri Hills — is a city with an energetic and growing modern celebration culture. From birthday parties in the upscale RS Puram and Saibaba Colony to corporate cake deliveries at the Peelamedu IT park belt, from anniversary surprises in the educational hub areas near PSG College to student birthdays near Amrita University — RedHeart covers all Coimbatore zones: Central (Gandhipuram, Town Hall, Cheran MA Nagar), South (RS Puram, Saibaba Colony, Goldwins), East (Peelamedu, Avinashi Road, Singanallur), North (Vadavalli, Podanur, Mettupalayam Road), West (Tatabad, Edayarpalayam, Ukkadam).</p>
<p>Our Coimbatore cake range: Chocolate, Black Forest, Pineapple, Red Velvet, Mango, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coimbatore, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">RS Puram, Gandhipuram, Peelamedu, Saibaba Colony, Avinashi Road, Goldwins</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Pineapple</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Coimbatore?", answer: "Yes, same-day cake delivery is available across all Coimbatore areas — RS Puram, Gandhipuram, Peelamedu, Saibaba Colony — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Peelamedu IT park area in Coimbatore?", answer: "Yes, Peelamedu, Avinashi Road corridor, and all the eastern IT belt of Coimbatore are fully covered by our delivery." },
      { question: "Are eggless cakes available in Coimbatore?", answer: "Yes, all flavours — Chocolate, Black Forest, Pineapple, Red Velvet — are available in eggless variants for Coimbatore delivery." }
    ]
  },

  "madurai": {
    cityName: "Madurai",
    metaTitle: "Cake Delivery in Madurai | Temple City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Madurai. Same-day delivery across Madurai. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Madurai",
    metaKeyword: "cake delivery madurai, order cake online madurai, birthday cake madurai, custom cake madurai, same day cake delivery madurai meenakshi temple anna nagar ss colony kk nagar",
    footerContent: `
<h2>Cake Delivery in Madurai — Temple City's Jasmine-Scented Celebrations and Birthday Cakes</h2>
<p>Madurai — Tamil Nadu's second-largest city, one of the world's oldest continuously inhabited cities (ancient Pandya capital, 2,500+ years old), and home to the magnificent Meenakshi Amman Temple — is a city where ancient tradition and modern urban life coexist vibrantly. From birthday parties in the residential Anna Nagar to corporate cake deliveries at the Madurai industrial belt, from temple festival celebration cakes to anniversary surprises in SS Colony — Madurai's celebration culture is warm and enthusiastic. RedHeart covers all Madurai zones: Central (Meenakshi Temple area, North Veli Street, Simakkal), North (Anna Nagar, KK Nagar, Melur Road), South (SS Colony, Thirunagar, Tirunagar), East (Mattuthavani, Avaniyapuram, Kochadai), West (Alwarpet, Pasumalai, Villapuram).</p>
<p>Our Madurai cake range: Chocolate, Black Forest, Pineapple, Red Velvet, Mango, Photo Cakes, Fondant Meenakshi-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madurai, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anna Nagar, KK Nagar, SS Colony, Mattuthavani, Simakkal, Avaniyapuram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Pineapple, Black Forest, Meenakshi Fondant theme</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Madurai?", answer: "Yes, same-day cake delivery is available across all Madurai areas — Anna Nagar, KK Nagar, SS Colony, and Mattuthavani — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Madurai?", answer: "Yes, all flavours — Chocolate, Black Forest, Pineapple, Red Velvet — are available in eggless variants for Madurai delivery." },
      { question: "Do you make Meenakshi temple-theme cakes in Madurai?", answer: "Yes, custom fondant cakes with Meenakshi temple-inspired designs are available as a unique Madurai celebration cake option." }
    ]
  },

  "vijayawada": {
    cityName: "Vijayawada",
    metaTitle: "Cake Delivery in Vijayawada | Andhra Pradesh | RedHeart",
    metaDescription: "Order cakes online in Vijayawada. Same-day delivery across Vijayawada. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Vijayawada",
    metaKeyword: "cake delivery vijayawada, order cake online vijayawada, birthday cake vijayawada, custom cake vijayawada, same day cake delivery vijayawada benz circle mg road krishna",
    footerContent: `
<h2>Cake Delivery in Vijayawada — Krishna River City's Commercial Spirit and Celebration Culture</h2>
<p>Vijayawada — Andhra Pradesh's commercial capital (larger economically than the state capital Amaravati nearby), the "Commercial Capital of Andhra Pradesh," and a city of 1.5 million on the Krishna River — is an energetic business city with a strong celebration culture. From birthday parties in the upscale Benz Circle residential belt to corporate anniversary cakes at Vijayawada's textile and pharma commercial hubs, from Dasara celebration cakes (Vijayawada Dasara is famous) to anniversary surprises in MG Road area — RedHeart covers all Vijayawada zones: Central (Benz Circle, Besant Road, MG Road, One Town), East (Labbipet, Gunadala, Bandar Road), West (Moghalrajpuram, Patamata, Satyanarayanapuram), North (Amaravati Road, Auto Nagar, Nunna), South (Kondapalli, Ibrahimpatnam).</p>
<p>Our Vijayawada cake range: Chocolate, Black Forest, Butterscotch, Mango, Red Velvet, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijayawada, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Benz Circle, MG Road, Labbipet, Moghalrajpuram, Patamata, Bandar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Butterscotch, Black Forest, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vijayawada?", answer: "Yes, same-day cake delivery is available across all Vijayawada areas — Benz Circle, MG Road, Labbipet, Moghalrajpuram — for orders placed before 3 PM." },
      { question: "Are Dasara celebration cakes available in Vijayawada?", answer: "Yes, Vijayawada Dasara is one of Andhra Pradesh's biggest festivals. Custom Dasara celebration cakes are available for same-day delivery." },
      { question: "Are eggless cakes available in Vijayawada?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet — are available in eggless variants for Vijayawada delivery." }
    ]
  },

  "chandigarh": {
    cityName: "Chandigarh",
    metaTitle: "Cake Delivery in Chandigarh | The Beautiful City | RedHeart",
    metaDescription: "Order cakes online in Chandigarh. Same-day delivery across Chandigarh, Mohali & Panchkula. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chandigarh",
    metaKeyword: "cake delivery chandigarh, order cake online chandigarh, birthday cake chandigarh, custom cake chandigarh, same day cake delivery chandigarh sector 17 mohali panchkula tricity",
    footerContent: `
<h2>Cake Delivery in Chandigarh — Le Corbusier's Planned City Where Every Sector Gets a Perfect Cake</h2>
<p>Chandigarh — India's only planned city by Le Corbusier (built as independent India's first model city in 1950–60s), capital of both Punjab and Haryana, India's cleanest and most educated city, and a city of exceptional per-capita income and lifestyle — is where celebrations are polished, modern, and enthusiastic. From birthday parties in the upscale Sector 8 and 10 bungalows to corporate cakes at the IT Park in Sector 22A and Mohali's Phase 8 commercial belt, from anniversary surprises in the Defence Colony to student birthday deliveries near PU (Panjab University) — RedHeart covers the entire Chandigarh Tricity: Chandigarh (all Sectors 1-56), Mohali (Phase 1–11, Aerocity, IT Park), and Panchkula (all Sectors).</p>
<p>Our Chandigarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes, Pinata cakes, Bomb cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandigarh Tricity (Chandigarh + Mohali + Panchkula)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All Chandigarh sectors, Mohali Phase 1–11, Panchkula sectors</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Red Velvet, Pinata, Bomb Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you deliver cakes to Mohali and Panchkula from Chandigarh?", answer: "Yes, our Chandigarh delivery covers the full Tricity — all Chandigarh sectors, Mohali (Phase 1–11, Aerocity, IT Park), and all Panchkula sectors." },
      { question: "Can I get same-day cake delivery in Chandigarh?", answer: "Yes, same-day cake delivery is available across all Chandigarh, Mohali, and Panchkula areas for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chandigarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chandigarh Tricity delivery." }
    ]
  },

  "amritsar": {
    cityName: "Amritsar",
    metaTitle: "Cake Delivery in Amritsar | Golden Temple City Punjab | RedHeart",
    metaDescription: "Order cakes online in Amritsar. Same-day delivery across Amritsar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Amritsar",
    metaKeyword: "cake delivery amritsar, order cake online amritsar, birthday cake amritsar, custom cake amritsar, same day cake delivery amritsar golden temple lawrence road ranjit avenue majitha road",
    footerContent: `
<h2>Cake Delivery in Amritsar — Golden Temple City's Waheguru Blessings and the Warmest Celebrations</h2>
<p>Amritsar — Punjab's holiest city, home to the Golden Temple (Harmandir Sahib — the spiritual and cultural centre of Sikhism, drawing over 100,000 pilgrims daily), Jallianwala Bagh, and the Wagah border ceremony — is a city with extraordinary hospitality culture and a warm, community-oriented celebration spirit. From birthday parties in the posh Ranjit Avenue to corporate cakes at the Amritsar industrial hub, from Gurpurab celebration cakes near the Golden Temple to anniversary surprises on Lawrence Road — RedHeart covers all Amritsar zones: Central (Hall Bazaar, Lawrence Road, Queens Road, Batala Road), North (Ranjit Avenue, Sultanwind Road, GT Road), East (Majitha Road, Chheharta, Focal Point), West (Sultanwind, Dhab Khatika, Pratap Nagar), South (Green Avenue, Hari Singh Nalwa, Raja Sansi Airport area).</p>
<p>Our Amritsar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes (Golden Temple themes). Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amritsar, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ranjit Avenue, Lawrence Road, Majitha Road, Hall Bazaar, Green Avenue, Focal Point</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake (Golden Temple), Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are Gurpurab celebration cakes available in Amritsar?", answer: "Yes, Gurpurab (Sikh holy day celebrations) in Amritsar — especially near the Golden Temple — are a major occasion. Custom celebration cakes for Gurpurab family gatherings are available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Amritsar?", answer: "Yes, same-day cake delivery is available across all Amritsar areas — Ranjit Avenue, Lawrence Road, Majitha Road, and Hall Bazaar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Amritsar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Amritsar delivery." }
    ]
  },

  "dehradun": {
    cityName: "Dehradun",
    metaTitle: "Cake Delivery in Dehradun | Uttarakhand Capital | RedHeart",
    metaDescription: "Order cakes online in Dehradun. Same-day delivery across Dehradun. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Dehradun",
    metaKeyword: "cake delivery dehradun, order cake online dehradun, birthday cake dehradun, custom cake dehradun, same day cake delivery dehradun rajpur road clement town prem nagar haridwar road",
    footerContent: `
<h2>Cake Delivery in Dehradun — Valley of Schools, Army Cantonment, and the Doon Valley's Freshest Cakes</h2>
<p>Dehradun — Uttarakhand's capital, the Doon Valley city at the foothills of the Garhwal Himalayas, home to some of India's finest boarding schools (The Doon School, Welham Girls', Rashtriya Indian Military College) and the Forest Research Institute — is a city of refined living, natural beauty, and a growing modern urban culture. From birthday parties in the old Rajpur Road bungalows (Dehradun's most prestigious address) to corporate cakes at the growing IT and pharmaceutical cluster near Selaqui, from anniversary surprises in Clement Town's army cantonment to student birthday cakes near FRI or IIIT campus — RedHeart covers all Dehradun zones: Central (Rajpur Road, Paltan Bazaar, Clock Tower), North (Rajpur Village, Mussoorie Road, ISBT), South (Clement Town, Ballupur, Dalanwala), East (Dharampur, Sewla Khurd, Premnagar), West (Prem Nagar, Kanwali Road, EC Road, Kargi Grant).</p>
<p>Our Dehradun cake range: Chocolate, Black Forest, Red Velvet, Mango (Dun mangoes!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dehradun, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajpur Road, Clement Town, Prem Nagar, Paltan Bazaar, Ballupur, Kanwali Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Mango (Dun)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dehradun?", answer: "Yes, same-day cake delivery is available across all Dehradun areas — Rajpur Road, Clement Town, Prem Nagar, and Ballupur — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to The Doon School area in Dehradun?", answer: "Yes, The Doon School, Welham Girls', RIMC, and the Rajpur Road educational belt are all covered by our same-day Dehradun delivery." },
      { question: "Are eggless cakes available in Dehradun?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dehradun delivery." }
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
