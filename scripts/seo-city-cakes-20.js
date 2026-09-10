// Cakes Batch 20 — 15 cities:
// Maharashtra: Jalna, Sindhudurg (Malvan)
// Karnataka: Ramanagara, Kodagu (Madikeri)
// Tamil Nadu: Perambalur, Nilgiris (Ooty)
// Telangana: Siddipet, Nirmal, Nalgonda
// Punjab: Fazilka, Muktsar (Sri Muktsar Sahib)
// Assam: Dhemaji, Sivasagar
// West Bengal: Haldia
// UP: Chandauli

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "jalna": {
    cityName: "Jalna",
    metaTitle: "Cake Delivery in Jalna | Seed Hub Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Jalna. Same-day delivery across Jalna. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jalna",
    metaKeyword: "cake delivery jalna, order cake online jalna, birthday cake jalna, custom cake jalna, same day cake delivery jalna seed hub aurangabad road nanded road marathwada stainless steel pipes",
    footerContent: `
<h2>Cake Delivery in Jalna — India's Seed Capital, Stainless Steel Pipes Manufacturing Hub, and Marathwada's Commercial Gateway</h2>
<p>Jalna — the headquarters of Jalna district in Maharashtra's Marathwada region, a city of remarkable agricultural and industrial fame (Jalna is called the "Seed Capital of India" — the Jalna seed industry is one of India's largest, producing hybrid vegetable and cotton seeds distributed to farmers across India and exported to Southeast Asia, Africa, and Latin America; the seed companies of Jalna — including Nunhems, Mahyco, and dozens of smaller breeders — have made Jalna a global name in agricultural biotechnology; the Jalna seed processing and testing labs are among India's most sophisticated in the agriculture sector), a major stainless steel pipes and fittings manufacturing hub (Jalna has a significant cluster of stainless steel pipes, flanges, and fitting manufacturers — one of Maharashtra's leading industrial clusters for this sector; Jalna products are sold to chemical plants, oil refineries, and construction companies nationwide), and a city on the National Highway connecting Aurangabad and Nanded — is a city of seeds and steel. From birthday parties near the seed company townships to corporate cakes at the large steel manufacturers, from anniversary surprises in the Civil Lines area to student cakes at Jalna's colleges — RedHeart covers all Jalna zones: Central (Civil Lines, Station Road, Aurangabad Road), North (Bhokardan Road, Dhad, Mantha), South (Nanded Road, Partur, Ambad), East (Nanded Road, Parbhani border), West (Aurangabad border, Badnapur).</p>
<p>Our Jalna cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Jalna Seed Industry / Marathwada-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalna, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Aurangabad Road, Nanded Road, Bhokardan Road, Partur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jalna?", answer: "Yes, same-day cake delivery is available across all Jalna areas — Civil Lines, Station Road, Aurangabad Road, and Nanded Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jalna?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jalna delivery." },
      { question: "Do you deliver midnight cakes in Jalna?", answer: "Yes, midnight birthday cake delivery is available across Jalna's central and residential zones." }
    ]
  },

  "sindhudurg": {
    cityName: "Sindhudurg",
    metaTitle: "Cake Delivery in Sindhudurg | Malvan Konkan Coast Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Sindhudurg. Same-day delivery across Sindhudurg. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sindhudurg",
    metaKeyword: "cake delivery sindhudurg malvan, order cake online sindhudurg malvan, birthday cake sindhudurg, custom cake sindhudurg, same day cake delivery sindhudurg malvan seafood konkan fort amboli goa border",
    footerContent: `
<h2>Cake Delivery in Sindhudurg — Malvan's Coastal Kingdom, Sindhudurg Fort's Marine Heritage, and Konkan's Seafood Paradise</h2>
<p>Sindhudurg — the headquarters of Sindhudurg district in Maharashtra's southernmost Konkan coast region (the district HQ town is Oras, while the most famous town is Malvan), a district of extraordinary natural beauty and coastal culture (the Sindhudurg Fort — built by Chhatrapati Shivaji Maharaj in 1664–1667 on a rocky island 1 km into the Arabian Sea near Malvan — is one of India's most unique sea forts; it encloses a temple where Shivaji's footprint and hand impression are preserved; the fort is only accessible by boat and is one of Maharashtra's most atmospheric historical monuments; a life-size idol of Shivaji made from the concrete of the fort's original construction is housed in Rajkot Fort nearby), famous for Malvani cuisine (one of India's most distinctive coastal cuisines — Malvani fish curries, crab masala, sol kadhi (a kokum-coconut drink), and kolambi bhaat use Malvan's masala blend unique to the region; Malvan is to Konkani cooking what Kolhapur is to Deccan cuisine — the undisputed regional capital), home to Amboli (a hill station at 690 metres in the Western Ghats on the Maharashtra-Goa border — Amboli receives India's highest single-day rainfall readings, has spectacular waterfalls, and is a biodiversity hotspot for rare endemic species), and a district bordering Goa — is a destination of sea forts, seafood, and misty Western Ghats. From birthday parties in the Malvan beach area to corporate cakes at the tourist resorts, from anniversary surprises in the Sindhudurg Fort tourist belt to student cakes at Sindhudurg's colleges — RedHeart covers all Sindhudurg zones: Malvan, Oras (district HQ), Kudal, Sawantwadi, Amboli, Vengurla (Goa border).</p>
<p>Our Sindhudurg cake range: Chocolate, Black Forest, Red Velvet, Coconut (Konkan special!), Kokum-inspired, Photo Cakes, Fondant Sindhudurg Sea Fort / Malvani-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sindhudurg (Malvan), Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malvan, Oras, Kudal, Sawantwadi, Amboli, Vengurla</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sindhudurg Sea Fort Fondant, Coconut, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sindhudurg / Malvan?", answer: "Yes, same-day cake delivery is available across Sindhudurg — Malvan, Oras, Kudal, Sawantwadi, and Vengurla — for orders placed before 3 PM." },
      { question: "Do you have Sindhudurg Fort / Konkan-themed cakes in Sindhudurg?", answer: "Yes! The Sindhudurg Sea Fort — Shivaji Maharaj's unique 17th-century island fortress in the Arabian Sea near Malvan — inspires our Sindhudurg Sea Fort fondant cakes. Konkan's most iconic monument on your birthday cake." },
      { question: "Are eggless cakes available in Sindhudurg?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut — are available in eggless variants for Sindhudurg delivery." }
    ]
  },

  "ramanagara": {
    cityName: "Ramanagara",
    metaTitle: "Cake Delivery in Ramanagara | Silk City Sholay Karnataka | RedHeart",
    metaDescription: "Order cakes online in Ramanagara. Same-day delivery across Ramanagara. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ramanagara",
    metaKeyword: "cake delivery ramanagara, order cake online ramanagara, birthday cake ramanagara, custom cake ramanagara, same day cake delivery ramanagara silk cocoon sholay rocky hills mysore road bangalore",
    footerContent: `
<h2>Cake Delivery in Ramanagara — Asia's Largest Silk Cocoon Market, Sholay's Iconic Rocky Hills, and Bangalore's Silk Belt</h2>
<p>Ramanagara — the headquarters of Ramanagara district in Karnataka (until 2007 it was part of Bangalore Rural district), a city with two globally famous identities (the Ramanagara silk market — Asia's largest silk cocoon trading market — is where thousands of sericulture farmers from Ramanagara, Channapatna, Magadi, and Kanakapura bring their mulberry silk cocoons for auction; the cocoons are sold to reeling units that produce raw silk thread; Ramanagara district is Karnataka's sericulture heartland and a major contributor to India's status as the world's second-largest silk producer; Ramanagara silk weavers supply to Mysore, Bangalore, and Kanchipuram weavers; and the second identity — the dramatic rocky granite outcrops around Ramanagara were the filming locations for the 1975 Bollywood blockbuster Sholay, one of India's greatest films; the "Ramgarh" rocks of Sholay — Gabbar Singh's famous hideout — are the very same hills near Ramanagara; thousands of Sholay fans make the 55 km trip from Bangalore annually to see these legendary filming locations), and known for Channapatna toys (GI-tagged lacquerware wooden toys made in Channapatna, 10 km from Ramanagara — these colourful wooden toys have been made for 500 years and received a UNESCO recognition). From birthday parties near the silk market area to corporate cakes at the large silk reeling units, from Sholay-fan anniversary surprises to student cakes at Ramanagara's colleges — RedHeart covers all Ramanagara zones: Central (Town Hall, Silk Market Road, Bangalore Road), North (Bangalore Road, Bidadi, Kanakapura Road), South (Mysore Road, Channapatna, Maddur), East (Kanakapura border, Sathanur), West (Magadi border, Closepet).</p>
<p>Our Ramanagara cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sholay Rocky Hills / Channapatna Toy-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramanagara, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Town Hall, Silk Market Road, Bangalore Road, Mysore Road, Channapatna, Kanakapura Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sholay Fondant, Channapatna Toy Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ramanagara?", answer: "Yes, same-day cake delivery is available across all Ramanagara areas — Town Hall, Silk Market Road, Bangalore Road, and Channapatna — for orders placed before 3 PM." },
      { question: "Do you have Sholay Rocky Hills-themed cakes in Ramanagara?", answer: "Yes! The iconic rocky granite hills around Ramanagara — the actual filming locations of Bollywood's legendary Sholay (1975), where 'Gabbar Singh' ruled — inspire our Sholay fondant cakes. India's most beloved film locations on your birthday cake." },
      { question: "Are eggless cakes available in Ramanagara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ramanagara delivery." }
    ]
  },

  "madikeri": {
    cityName: "Madikeri",
    metaTitle: "Cake Delivery in Madikeri | Coorg Coffee Karnataka | RedHeart",
    metaDescription: "Order cakes online in Madikeri. Same-day delivery across Madikeri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Madikeri",
    metaKeyword: "cake delivery madikeri coorg kodagu, order cake online madikeri, birthday cake madikeri, custom cake madikeri, same day cake delivery madikeri coorg coffee estate abbey falls raja seat kodava culture",
    footerContent: `
<h2>Cake Delivery in Madikeri — Scotland of India, Coorg's Capital, and Karnataka's Coffee-Clad Misty Hills</h2>
<p>Madikeri (Mercara) — the headquarters of Kodagu (Coorg) district in Karnataka, one of India's most beloved hill destinations (Madikeri, at 1,525 metres altitude in the Western Ghats, is called the "Scotland of India" for its rolling green hills covered in coffee and orange plantations, misty valleys, and temperate climate; the Raja's Seat — a viewpoint where the kings of the Kodagu dynasty (Haleri Rajas) would sit to watch sunsets — is Madikeri's iconic landmark; the Madikeri Fort — built in the 17th century by the Mudduraja and later expanded by Tipu Sultan — is a well-preserved historical complex housing a church, a palace, and government offices inside the fort walls; the Abbey Falls and the Iruppu Falls are spectacular cascades near Madikeri), the home of Kodava culture (the Kodava people — the indigenous community of Coorg — are known for their distinctive customs, the Kodava language, the Kail Podh (harvest festival), the Puttari (new rice festival), their martial traditions, Kodava cuisine including pandi curry (pork), koli curry (chicken), akki rotti, and the Kodava dance of Kambala; Coorg has also produced some of India's finest military officers), and India's premier coffee region (Coorg produces about 30% of India's total coffee — both Arabica and Robusta; the estate-grown Coorg coffee is internationally prized for its flavour; Coorg Arabica is exported to specialty roasters in Europe and the USA) — is a city of unmatched natural and cultural beauty. From birthday parties at the coffee estate resorts to corporate cakes at the large homestays, from anniversary surprises near the Raja's Seat to student cakes at Madikeri's colleges — RedHeart covers all Madikeri zones: Central (Raja's Seat, Fort Road, Town Hall), North (Kodlipet Road, Somwarpet border), South (Virajpet Road, Kushalnagar border), East (Mysore Road, Kushalnagar), West (Sullia Road, Mangalore border, Bhagamandala).</p>
<p>Our Madikeri cake range: Chocolate, Black Forest, Red Velvet, Coffee Mocha (Coorg estate-grown coffee!), Orange (Coorg hill orange!), Photo Cakes, Fondant Coorg Coffee Estate / Raja's Seat-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Madikeri, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raja's Seat, Fort Road, Town Hall, Kodlipet Road, Virajpet Road, Kushalnagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coffee Mocha (Coorg!), Chocolate, Raja's Seat Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Madikeri (Coorg)?", answer: "Yes, same-day cake delivery is available across all Madikeri areas — Raja's Seat, Fort Road, Town Hall, and Virajpet Road — for orders placed before 3 PM." },
      { question: "Do you have Coorg Coffee / Raja's Seat-themed cakes in Madikeri?", answer: "Yes! Coorg's world-famous estate-grown coffee — 30% of India's total coffee production comes from these misty Western Ghats hills — and the iconic Raja's Seat viewpoint inspire our Coffee Mocha and Raja's Seat fondant cakes." },
      { question: "Are eggless cakes available in Madikeri?", answer: "Yes, all flavours — Chocolate, Black Forest, Coffee Mocha, Orange — are available in eggless variants for Madikeri delivery." }
    ]
  },

  "perambalur": {
    cityName: "Perambalur",
    metaTitle: "Cake Delivery in Perambalur | Cement City Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Perambalur. Same-day delivery across Perambalur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Perambalur",
    metaKeyword: "cake delivery perambalur, order cake online perambalur, birthday cake perambalur, custom cake perambalur, same day cake delivery perambalur cement factory ariyalur road trichy road rock quarry limestone",
    footerContent: `
<h2>Cake Delivery in Perambalur — Tamil Nadu's Limestone District, Cement Industry Capital, and Kaveri Plains</h2>
<p>Perambalur — the headquarters of Perambalur district in Tamil Nadu, a city shaped by its geological wealth (Perambalur and the adjoining Ariyalur district together form Tamil Nadu's limestone and cement belt; the thick limestone deposits of the Kaveri plains underlie this region; Perambalur is home to several large cement manufacturing plants including Dalmia Cement, India Cements, and Chettinad Cement — these plants collectively produce millions of tonnes of cement and are major employers in the district; the district is also known for limestone rock quarrying, which feeds both the cement plants and the construction industry), located in the Kaveri plains (the Kaveri's tributaries create fertile alluvial farmland around Perambalur, supporting rice, sugarcane, and sesame cultivation), and a gateway district between Tiruchirappalli and Cuddalore — is a city of industrial significance on the Kaveri delta. From birthday parties at the cement company townships to corporate cakes at the large industrial plants, from anniversary surprises in the Civil Lines area to student cakes at Perambalur's colleges — RedHeart covers all Perambalur zones: Central (Civil Lines, Ariyalur Road, Trichy Road), North (Cuddalore Road, Vriddhachalam Road, Jayankondam), South (Trichy border, Lalgudi, Manapparai), East (Cuddalore border, Veppur, Annamalainagar), West (Karur Road, Musiri border).</p>
<p>Our Perambalur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kaveri Plains / industry-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Perambalur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Ariyalur Road, Trichy Road, Cuddalore Road, Jayankondam, Vriddhachalam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Perambalur?", answer: "Yes, same-day cake delivery is available across all Perambalur areas — Civil Lines, Ariyalur Road, Trichy Road, and Jayankondam — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Perambalur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Perambalur delivery." },
      { question: "Do you deliver midnight cakes in Perambalur?", answer: "Yes, midnight birthday cake delivery is available across Perambalur's central and residential zones." }
    ]
  },

  "nilgiris": {
    cityName: "Nilgiris",
    metaTitle: "Cake Delivery in Nilgiris | Ooty Tea Hills Tamil Nadu | RedHeart",
    metaDescription: "Order cakes online in Nilgiris. Same-day delivery across Nilgiris. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nilgiris",
    metaKeyword: "cake delivery nilgiris ooty, order cake online ooty nilgiris, birthday cake ooty, custom cake nilgiris, same day cake delivery ooty coonoor kotagiri toda nilgiri tea mountain railway UNESCO",
    footerContent: `
<h2>Cake Delivery in Nilgiris — The Blue Mountains, Ooty's UNESCO Mountain Railway, and South India's Tea Garden Paradise</h2>
<p>The Nilgiris (meaning "Blue Mountains" in Tamil) — the headquarters of Nilgiris district in Tamil Nadu, one of India's most celebrated hill destinations (Ooty/Udhagamandalam — the capital of the Nilgiris district and the summer capital of Madras Presidency during British India — sits at 2,240 metres in the Nilgiri Hills; the Nilgiri Mountain Railway connecting Mettupalayam-Coonoor-Ooty is a UNESCO World Heritage Site — the narrow-gauge steam-powered rack railway, using a unique rack-and-pinion system to climb the steep Western Ghats, is one of the world's great mountain railways; Doddabetta — 2,637 metres — is Tamil Nadu's highest peak; the Rose Garden in Ooty is one of India's largest and most beautiful rose gardens with 20,000+ varieties; Ooty Lake, Botanical Garden, Mudumalai Tiger Reserve and the tea and eucalyptus plantations cover the slopes), the Nilgiri tea (Nilgiri Orthodox and CTC teas — the Coonoor, Kotagiri, and Ooty tea estates produce distinctive teas with a bright brisk flavour quite different from Darjeeling or Assam; Nilgiri tea is heavily exported to Iran and other Middle Eastern markets), and home to the Toda community (one of India's most ancient tribal communities — the Toda people with their barrel-shaped homes (munds), embroidered Toda shawl work, and animist religious traditions are among the Nilgiris' most iconic cultural symbols) — is South India's greatest hill destination. From birthday parties at the Ooty tourist resorts to corporate cakes at the tea estates, from anniversary surprises near the Botanical Garden to student cakes at Ooty's schools and colleges — RedHeart covers all Nilgiris zones: Ooty/Udhagamandalam, Coonoor, Kotagiri, Gudalur, Pandalur (Mudumalai corridor).</p>
<p>Our Nilgiris cake range: Chocolate, Black Forest, Red Velvet, Nilgiri Tea-infused, Chocolate Orange (Ooty orange!), Photo Cakes, Fondant Nilgiri Mountain Railway / Ooty Tea Garden-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nilgiris (Ooty), Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ooty, Coonoor, Kotagiri, Gudalur, Pandalur, Mudumalai area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nilgiri Tea Cake, Chocolate, Mountain Railway Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ooty / Nilgiris?", answer: "Yes, same-day cake delivery is available across the Nilgiris — Ooty, Coonoor, Kotagiri, and Gudalur — for orders placed before 3 PM." },
      { question: "Do you have Nilgiri Mountain Railway / Tea Garden-themed cakes in Ooty?", answer: "Yes! The UNESCO-listed Nilgiri Mountain Railway — India's last remaining rack-and-pinion steam railway — and the misty Nilgiri tea estates inspire our Mountain Railway fondant and Nilgiri Tea-infused cakes. A truly local hill-station design." },
      { question: "Are eggless cakes available in Nilgiris?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Nilgiri Tea — are available in eggless variants for Nilgiris delivery." }
    ]
  },

  "siddipet": {
    cityName: "Siddipet",
    metaTitle: "Cake Delivery in Siddipet | Kaleshwaram Telangana | RedHeart",
    metaDescription: "Order cakes online in Siddipet. Same-day delivery across Siddipet. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Siddipet",
    metaKeyword: "cake delivery siddipet, order cake online siddipet, birthday cake siddipet, custom cake siddipet, same day cake delivery siddipet kaleshwaram project kandra medak road hyderabad road mission bhagiratha",
    footerContent: `
<h2>Cake Delivery in Siddipet — Kaleshwaram Project's Gateway, Kandra's Heritage, and Telangana's New District Capital</h2>
<p>Siddipet — the headquarters of Siddipet district in Telangana (a newly created district carved out from Medak in 2016), a city gaining significance through two massive infrastructure projects (the Kaleshwaram Lift Irrigation Scheme — the world's largest multi-stage lift irrigation project, lifting water from the Godavari River at Medigadda through a series of pumping stations to reservoirs across Telangana — passes through Siddipet district; the Kondapochamma Sagar reservoir near Siddipet is a major component of the Kaleshwaram project and is one of the largest man-made lakes in Telangana; the reservoir has transformed the dry lands of northern Telangana; and Mission Bhagiratha — Telangana's landmark safe drinking water scheme — has its infrastructure visible across Siddipet), known for the Siddulaiah Kondareddy temple (one of Telangana's important temple sites near Siddipet), and a rapidly developing city with new highways (NH-163 from Hyderabad to Nagpur passes through Siddipet, and the new Outer Ring Road extension increases Hyderabad connectivity to 80 km). From birthday parties near the Kondapochamma Sagar lake to corporate cakes at the new industrial estates, from anniversary surprises in the Civil Lines area to student cakes at Siddipet's colleges — RedHeart covers all Siddipet zones: Central (Civil Lines, Hyderabad Road, Medak Road), North (Karimnagar Road, Manakondur border), South (Hyderabad Road, Gajwel, Shivampet), East (Jagtial Road, Koheda, Mirdoddi), West (Sangareddy border, Jogipet, Narsapur).</p>
<p>Our Siddipet cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Kondapochamma Sagar / Kaleshwaram-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siddipet, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Hyderabad Road, Medak Road, Karimnagar Road, Gajwel, Narsapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Siddipet?", answer: "Yes, same-day cake delivery is available across all Siddipet areas — Civil Lines, Hyderabad Road, Medak Road, and Gajwel — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Siddipet?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Siddipet delivery." },
      { question: "Do you deliver midnight cakes in Siddipet?", answer: "Yes, midnight birthday cake delivery is available across Siddipet's central and residential zones." }
    ]
  },

  "nirmal": {
    cityName: "Nirmal",
    metaTitle: "Cake Delivery in Nirmal | Nirmal Paintings Craft Telangana | RedHeart",
    metaDescription: "Order cakes online in Nirmal. Same-day delivery across Nirmal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nirmal",
    metaKeyword: "cake delivery nirmal, order cake online nirmal, birthday cake nirmal, custom cake nirmal, same day cake delivery nirmal paintings craft GI furniture adilabad road mancherial road toys",
    footerContent: `
<h2>Cake Delivery in Nirmal — Nirmal Paintings' GI-Tagged Craft City, Lacquerware Toy Capital, and Telangana's Northern Art Hub</h2>
<p>Nirmal — the headquarters of Nirmal district in Telangana (carved out of Adilabad in 2016), a city of extraordinary artistic heritage (Nirmal is famous for two GI-tagged crafts: the Nirmal paintings — a distinctive folk art style using soft wood panels painted with mythological, floral, and natural scenes in vivid colours, coated with bamboo juice and varnish for a characteristic glossy finish; the art form has been practiced in Nirmal for centuries and the artisan community (Nakashis) are its custodians; Nirmal paintings are sold across India and exported globally; and Nirmal toys — lacquerware wooden toys and furniture with painted decorations that follow the same artistic tradition; the Nirmal furniture, toys, and decorative items are sold across Telangana and displayed in national museums), known for the Pochampally ikat connection (the region's weaving traditions complement Nirmal's craft legacy), and a city that has gained district status, boosting its administrative and commercial importance — is a city of living folk art tradition. From birthday parties near the Nirmal painting artisan colonies to corporate cakes at the craft export firms, from anniversary surprises in the Civil Lines area to student cakes at Nirmal's colleges — RedHeart covers all Nirmal zones: Central (Civil Lines, Adilabad Road, Mancherial Road), North (Adilabad Road, Khanapur, Maharashtra border), South (Mancherial Road, Kadem, Bodhan), East (Mancherial border, Luxettipet), West (Nizamabad Road, Dichpally).</p>
<p>Our Nirmal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Nirmal Paintings / Folk Art-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nirmal, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Adilabad Road, Mancherial Road, Khanapur, Kadem, Dichpally</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nirmal Paintings Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nirmal?", answer: "Yes, same-day cake delivery is available across all Nirmal areas — Civil Lines, Adilabad Road, Mancherial Road, and Khanapur — for orders placed before 3 PM." },
      { question: "Do you have Nirmal Paintings-themed cakes in Nirmal?", answer: "Yes! Nirmal's world-famous GI-tagged folk paintings — the centuries-old Nakashi tradition of vivid mythological paintings on lacquered wood panels, exported globally — inspire our Nirmal Paintings fondant cakes. The city's most iconic living art on your birthday cake." },
      { question: "Are eggless cakes available in Nirmal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nirmal delivery." }
    ]
  },

  "nalgonda": {
    cityName: "Nalgonda",
    metaTitle: "Cake Delivery in Nalgonda | Fluorosis Belt Telangana | RedHeart",
    metaDescription: "Order cakes online in Nalgonda. Same-day delivery across Nalgonda. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nalgonda",
    metaKeyword: "cake delivery nalgonda, order cake online nalgonda, birthday cake nalgonda, custom cake nalgonda, same day cake delivery nalgonda Krishna river Nagarjunasagar hyderabad road warangal road",
    footerContent: `
<h2>Cake Delivery in Nalgonda — Krishna River District, Nagarjunasagar Dam's Gateway, and Telangana's Deccan Plateau Heartland</h2>
<p>Nalgonda — the headquarters of Nalgonda district in Telangana, a district of significant historical and natural importance (the Nagarjunasagar Dam — built across the Krishna River at the border of Nalgonda and Guntur districts — is one of India's greatest river valley projects; completed in 1967, the dam is 124 metres tall and created the Nagarjunasagar reservoir — one of India's largest man-made lakes; the dam project submerged the ancient Buddhist site of Nagarjunakonda — a 3rd century CE Buddhist stupa site of international significance; the Archaeological Department moved the ancient monuments to Nagarjunakonda Island in the reservoir, which is now a museum accessible by ferry; the island contains some of India's finest Buddhist sculptures and architectural fragments), known for its significant Buddhist heritage (the Nalgonda district has numerous ancient Buddhist sites from the Satavahana and Ikshvaku periods — 2nd-4th century CE — including stupas, monasteries, and relief sculptures), and a district close to Rachakonda Fort (a 14th-century fort built by the Musunuri Nayakas, one of Telangana's most historically significant fortifications) — is a city of Krishna River heritage. From birthday parties in the Civil Lines area to corporate cakes at the large industrial plants, from anniversary surprises near the Nagarjunasagar tourist belt to student cakes at Nalgonda's colleges — RedHeart covers all Nalgonda zones: Central (Civil Lines, Station Road, Hyderabad Road), North (Hyderabad Road, Miryalaguda, Suryapeta), South (Guntur Road, Nagarjunasagar, Macherla border), East (Warangal Road, Haliya, Huzurnagar), West (Mahbubnagar Road, Devarakonda, Shadnagar).</p>
<p>Our Nalgonda cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Nagarjunasagar Dam / Buddhist heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalgonda, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Hyderabad Road, Miryalaguda, Suryapeta, Nagarjunasagar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Nagarjunasagar Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nalgonda?", answer: "Yes, same-day cake delivery is available across all Nalgonda areas — Civil Lines, Station Road, Hyderabad Road, and Miryalaguda — for orders placed before 3 PM." },
      { question: "Do you have Nagarjunasagar / Buddhist heritage-themed cakes in Nalgonda?", answer: "Yes! The Nagarjunasagar Dam — one of India's great engineering marvels on the Krishna River, creating one of India's largest reservoirs and housing ancient Buddhist treasures on Nagarjunakonda Island — inspires our Nagarjunasagar fondant cakes." },
      { question: "Are eggless cakes available in Nalgonda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nalgonda delivery." }
    ]
  },

  "fazilka": {
    cityName: "Fazilka",
    metaTitle: "Cake Delivery in Fazilka | Pakistan Border Punjab | RedHeart",
    metaDescription: "Order cakes online in Fazilka. Same-day delivery across Fazilka. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fazilka",
    metaKeyword: "cake delivery fazilka, order cake online fazilka, birthday cake fazilka, custom cake fazilka, same day cake delivery fazilka pakistan border cotton beas canal abohar road amritsar road hussainiwala",
    footerContent: `
<h2>Cake Delivery in Fazilka — Pakistan Border's Cotton Belt, Hussainiwala's Martyr Memorial, and Punjab's Frontier City</h2>
<p>Fazilka — the headquarters of Fazilka district in Punjab (a new district created in 2011 from Firozpur), a city of border importance and agricultural significance (Fazilka is one of Punjab's closest border towns to Pakistan — the Hussainiwala border post, where Bhagat Singh, Rajguru, and Sukhdev's ashes were immersed in the Sutlej River after their execution by the British in 1931, is 12 km from Fazilka; the Hussainiwala National Martyrs' Memorial is a pilgrimage site for Indians paying homage to the three revolutionary heroes; a Beating Retreat ceremony is held at the Hussainiwala border post; the Pakistan border is visible from the outskirts of Fazilka), a major cotton-growing district (Fazilka-Abohar is Punjab's cotton heartland — the Malwa cotton belt of southwest Punjab; Fazilka's Mandi is one of Punjab's major cotton trading markets), and a city on the Beas-Sutlej canal irrigation system — is a city of border significance and cotton prosperity. From birthday parties in the Civil Lines area to corporate cakes at the large cotton ginning factories, from anniversary surprises near the Abohar Road area to student cakes at Fazilka's colleges — RedHeart covers all Fazilka zones: Central (Civil Lines, Station Road, Abohar Road), North (Firozpur Road, Hussainiwala, Pakistan Border), South (Abohar border, Sito Gunno, Arniwala), East (Muktsar Road, Jalalabad), West (Pakistan Border, Fazilka Border Post).</p>
<p>Our Fazilka cake range: Chocolate, Black Forest, Red Velvet, Mango (Punjab Dussehri!), Pinni-inspired (Punjab winter sweet!), Photo Cakes, Fondant Hussainiwala Martyr / Punjab frontier-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fazilka, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Abohar Road, Firozpur Road, Hussainiwala, Jalalabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hussainiwala Memorial Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fazilka?", answer: "Yes, same-day cake delivery is available across all Fazilka areas — Civil Lines, Station Road, Abohar Road, and Hussainiwala — for orders placed before 3 PM." },
      { question: "Do you have Hussainiwala Martyr Memorial-themed cakes in Fazilka?", answer: "Yes! The Hussainiwala National Martyrs' Memorial — where the ashes of Bhagat Singh, Rajguru, and Sukhdev were immersed in the Sutlej River in 1931 — inspires our memorial-tribute fondant cakes. Fazilka's most sacred patriotic landmark honoured on cake." },
      { question: "Are eggless cakes available in Fazilka?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Fazilka delivery." }
    ]
  },

  "muktsar": {
    cityName: "Muktsar",
    metaTitle: "Cake Delivery in Muktsar | Sri Muktsar Sahib Sikh Punjab | RedHeart",
    metaDescription: "Order cakes online in Muktsar. Same-day delivery across Muktsar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Muktsar",
    metaKeyword: "cake delivery muktsar sri muktsar sahib, order cake online muktsar, birthday cake muktsar, custom cake muktsar, same day cake delivery muktsar guru gobind singh forty muktay sikh pilgrimage maghi mela",
    footerContent: `
<h2>Cake Delivery in Sri Muktsar Sahib — Guru Gobind Singh's Forty Muktay, Maghi Mela, and Punjab's Sacred Sikh Pilgrimage City</h2>
<p>Sri Muktsar Sahib — the headquarters of Sri Muktsar Sahib district in Punjab (the city was renamed from Muktsar to Sri Muktsar Sahib in 2011 to honour its Sikh religious significance), one of Sikhism's most sacred pilgrimage cities (the Battle of Muktsar, 1705 CE — one of Guru Gobind Singh's final significant battles against the Mughal forces of Wazir Khan of Sirhind — is one of Sikhism's most heroic stories: 40 Sikhs (the Forty Muktay or "Forty Liberated Ones") who had deserted Guru Gobind Singh during the Battle of Anandpur Sahib returned at Muktsar and fought to the last man protecting the Guru; Guru Gobind Singh pardoned and freed them, and the place was named Muktsar ("Pool of Liberation"); the Gurdwara Sri Muktsar Sahib — built on the site of the battle — is one of the holiest Sikh shrines; the Maghi Mela — held on Maghi (January 14th/Makar Sankranti) — is a massive annual pilgrimage fair drawing hundreds of thousands of devotees to Muktsar to commemorate the sacrifice of the Forty Muktay), a major cotton and wheat agricultural district, and a city on the Rajasthan border — is a city of supreme Sikh religious significance. From birthday parties near the Gurdwara complex to corporate cakes at the large cotton ginning factories, from Guru Gobind Singh Jayanti celebration cakes to anniversary surprises in the Civil Lines area — RedHeart covers all Muktsar zones: Central (Civil Lines, Station Road, Gurdwara Road), North (Faridkot Road, Kotkapura Road, Mansa border), South (Rajasthan border, Abohar Road, Malout), East (Bathinda Road, Giddarbaha), West (Fazilka Road, Lambi, Pakistan border direction).</p>
<p>Our Muktsar cake range: Chocolate, Black Forest, Red Velvet, Mango (Punjab Dussehri!), Gurpurab celebration cakes, Photo Cakes, Fondant Gurdwara Sri Muktsar Sahib / Forty Muktay-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sri Muktsar Sahib, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gurdwara Road, Faridkot Road, Bathinda Road, Malout</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Gurdwara Muktsar Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sri Muktsar Sahib?", answer: "Yes, same-day cake delivery is available across all Muktsar areas — Civil Lines, Station Road, Gurdwara Road, Faridkot Road, and Malout — for orders placed before 3 PM." },
      { question: "Do you have Gurdwara Sri Muktsar Sahib / Forty Muktay-themed cakes?", answer: "Yes! Sri Muktsar Sahib — where Guru Gobind Singh pardoned the Forty Muktay (liberated ones) in 1705, giving the city its sacred name 'Pool of Liberation' — inspires our Gurdwara Sri Muktsar Sahib fondant cakes. Sikhism's most heroic tale of devotion on your birthday." },
      { question: "Are eggless cakes available in Sri Muktsar Sahib?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Muktsar delivery." }
    ]
  },

  "dhemaji": {
    cityName: "Dhemaji",
    metaTitle: "Cake Delivery in Dhemaji | Brahmaputra Flood Belt Assam | RedHeart",
    metaDescription: "Order cakes online in Dhemaji. Same-day delivery across Dhemaji. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dhemaji",
    metaKeyword: "cake delivery dhemaji, order cake online dhemaji, birthday cake dhemaji, custom cake dhemaji, same day cake delivery dhemaji brahmaputra flood lakhimpur road arunachal border mising tribes north bank",
    footerContent: `
<h2>Cake Delivery in Dhemaji — Brahmaputra's North Bank, Arunachal Pradesh Border, and Assam's Mising Tribal District</h2>
<p>Dhemaji — the headquarters of Dhemaji district in Assam, a district of geographical significance and tribal cultural richness (Dhemaji lies on the north bank of the Brahmaputra — one of India's most flood-prone districts; the district has been severely affected by Brahmaputra floods almost every year, making flood management and disaster preparedness a permanent concern; the Subansiri River — a major Brahmaputra tributary originating in Arunachal Pradesh — passes through Dhemaji, contributing both to floods and to the district's agricultural fertility), home to the Mising (Mishing) people (one of Assam's largest indigenous Tibeto-Burman communities; the Mising people are known for their distinctive weaving — Mising traditional textiles feature intricate geometric patterns and are worn for the Ali-Ai-Ligang festival, Assam's largest Mising celebration in February; the Mising people are riverine farmers and fisherfolk with a rich oral literature tradition; the Dhemaji-Jonai area is the heartland of Mising culture), the gateway to Arunachal Pradesh (Dhemaji district shares a long border with Arunachal's Lower Subansiri district; the Jonai-Ziro route passes through Dhemaji), and close to the Subansiri Lower Hydroelectric Project (one of India's largest hydropower projects, under construction on the Subansiri River). From birthday parties in the Civil Lines area to corporate cakes at the district offices, from anniversary surprises near the Lakhimpur Road to student cakes at Dhemaji's colleges — RedHeart covers all Dhemaji zones: Central (Civil Lines, Lakhimpur Road, Arunachal Road), North (Arunachal border, Jonai, Bordoloni), South (Lakhimpur border, Gogamukh, Geleky), East (Sivasagar Road, Sibsagar border), West (Lakhimpur Road, North Lakhimpur, Bihpuria).</p>
<p>Our Dhemaji cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Tea-Caramel (Assam CTC tea!), Photo Cakes, Fondant Mising tribal / Subansiri River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhemaji, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Lakhimpur Road, Arunachal Road, Jonai, Gogamukh, Geleky</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Tea-Caramel</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dhemaji?", answer: "Yes, same-day cake delivery is available across all Dhemaji areas — Civil Lines, Lakhimpur Road, Arunachal Road, Jonai, and Gogamukh — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Dhemaji?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dhemaji delivery." },
      { question: "Do you deliver midnight cakes in Dhemaji?", answer: "Yes, midnight birthday cake delivery is available across Dhemaji's central and residential zones." }
    ]
  },

  "sivasagar": {
    cityName: "Sivasagar",
    metaTitle: "Cake Delivery in Sivasagar | Ahom Kingdom Assam | RedHeart",
    metaDescription: "Order cakes online in Sivasagar. Same-day delivery across Sivasagar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Sivasagar",
    metaKeyword: "cake delivery sivasagar, order cake online sivasagar, birthday cake sivasagar, custom cake sivasagar, same day cake delivery sivasagar ahom dynasty rang ghar kareng ghar shiva sagar lake oil field",
    footerContent: `
<h2>Cake Delivery in Sivasagar — Ahom Kingdom's Imperial Capital, Rang Ghar's Ancient Amphitheatre, and Assam's Oil Heritage City</h2>
<p>Sivasagar — the headquarters of Sivasagar district in Assam, one of India's most historically significant cities for the medieval period (Sivasagar was the capital of the Ahom Kingdom — one of the world's longest-lasting medieval dynasties that ruled Assam from 1228 to 1826 CE — for nearly 600 years; the Ahom kings built extraordinary monuments in Sivasagar: the Rang Ghar — a two-storied amphitheatre used for the Ahom kings' elephant-fighting spectacles — is Asia's oldest surviving amphitheatre (17th century CE) and is protected as an ASI monument; the Kareng Ghar (Talatal Ghar) — the seven-storey Ahom royal palace, including three underground levels used as escape routes — is one of India's most fascinating medieval palaces; the Sivasagar tank (Borpukhuri), built in the 18th century and covering 129 acres, has three important temples on its banks: Sivadol (one of India's tallest Shiva temples at 34 metres), Vishnudol, and Devidol — the Sivadol's spire leans 4 degrees from the vertical like a miniature Leaning Tower; Sivasagar also hosted the Ahom court's seat where they repelled 17 Mughal invasions), the birthplace of Assam's oil industry (Digboi, the world's first commercial oil well (1889), is near Sivasagar; the entire upper Assam Brahmaputra Valley oil belt — Digboi, Nahorkatia, Moran, and Sibasagar fields — made Assam India's oldest petroleum-producing region), and the cultural heart of the Tai Ahom people (Tai Ahom language, Me-Dam-Me-Phi ancestor worship festival, and Ahom manuscripts are preserved in Sivasagar). From birthday parties near the Rang Ghar to corporate cakes at the oil company townships, from Ahom heritage celebration cakes to anniversary surprises near the Sivasagar Lake temples — RedHeart covers all Sivasagar zones: Central (Civil Lines, Station Road, Sivasagar Lake Road), North (Jorhat Road, Golaghat border), South (Dibrugarh Road, Nazira, Moran), East (Dibrugarh border, Digboi Road), West (Golaghat Road, Teok, Amguri).</p>
<p>Our Sivasagar cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Tea-Caramel (upper Assam estate tea!), Photo Cakes, Fondant Rang Ghar / Ahom Kingdom-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sivasagar, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Sivasagar Lake Road, Jorhat Road, Dibrugarh Road, Nazira</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Rang Ghar Ahom Fondant, Tea-Caramel, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sivasagar?", answer: "Yes, same-day cake delivery is available across all Sivasagar areas — Civil Lines, Station Road, Sivasagar Lake Road, Jorhat Road, and Dibrugarh Road — for orders placed before 3 PM." },
      { question: "Do you have Rang Ghar / Ahom Kingdom-themed cakes in Sivasagar?", answer: "Yes! Sivasagar's Rang Ghar — Asia's oldest surviving amphitheatre, built by the Ahom kings for royal elephant fights in the 17th century — and the magnificent Kareng Ghar palace inspire our Rang Ghar Ahom fondant cakes. 600 years of Ahom imperial grandeur on your birthday." },
      { question: "Are eggless cakes available in Sivasagar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sivasagar delivery." }
    ]
  },

  "haldia": {
    cityName: "Haldia",
    metaTitle: "Cake Delivery in Haldia | Petrochemicals Port West Bengal | RedHeart",
    metaDescription: "Order cakes online in Haldia. Same-day delivery across Haldia. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Haldia",
    metaKeyword: "cake delivery haldia, order cake online haldia, birthday cake haldia, custom cake haldia, same day cake delivery haldia port petrochemical complex township sutahata hecia IOC fertilizer",
    footerContent: `
<h2>Cake Delivery in Haldia — Bengal's Petrochemical City, Haldia Port, and East India's Industrial Township</h2>
<p>Haldia — a major industrial city in Purba Medinipur district of West Bengal, one of India's most important planned industrial townships and port cities (Haldia Port, established in 1977 as a satellite port for the Kolkata Port, handles over 40 million tonnes of cargo annually — it is the largest port in eastern India and one of India's busiest, receiving crude oil tankers, LPG carriers, container ships, and bulk cargo vessels; the Haldia Petrochemicals Limited (HPL) refinery — one of India's largest petrochemical complexes — produces polyethylene, polypropylene, and other polymers; Haldia is also home to the IOC (Indian Oil Corporation) refinery, HPCL plant, Mitsubishi Chemicals plant, and multiple fertilizer factories; the entire Haldia industrial complex was developed as a planned city in the 1960s-70s to relieve pressure on Kolkata's port and industrial base; the Haldia township has well-planned roads, green belts, and employee residential colonies), located at the confluence of the Haldi and Hooghly rivers (the waterway geography that makes Haldia ideal for deep-draft shipping), and close to Digha (West Bengal's most popular beach resort, 65 km from Haldia) — is an industrial city of national importance. From birthday parties in the IOC/HPL townships to corporate cakes at the large refinery offices, from anniversary surprises in the Sutahata area to student cakes at Haldia's engineering colleges — RedHeart covers all Haldia zones: Central (Haldia Township, Port Road, Durgachak), North (Sutahata, Nandakumarpur, Tamluk Road), South (Contai Road, Digha Road, Nandigram), East (Midnapore Road, Kolaghat border), West (Kolkata-Haldia Highway, Mecheda, Uluberia road).</p>
<p>Our Haldia cake range: Chocolate, Black Forest, Red Velvet, Mango (West Bengal Himsagar!), Butterscotch, Photo Cakes, Fondant Haldia Port / Petrochemical-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haldia, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haldia Township, Port Road, Durgachak, Sutahata, Contai Road, Nandigram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Haldia Port Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Haldia?", answer: "Yes, same-day cake delivery is available across all Haldia areas — Haldia Township, Port Road, Durgachak, and Sutahata — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the IOC, HPL, and other refinery townships in Haldia?", answer: "Yes, all Haldia industrial townships — IOC, Haldia Petrochemicals, HPL, and all employee residential colonies around the port and refinery complex — are covered under our same-day delivery." },
      { question: "Are eggless cakes available in Haldia?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Haldia delivery." }
    ]
  },

  "chandauli": {
    cityName: "Chandauli",
    metaTitle: "Cake Delivery in Chandauli | Black Rice Zinc City UP | RedHeart",
    metaDescription: "Order cakes online in Chandauli. Same-day delivery across Chandauli. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chandauli",
    metaKeyword: "cake delivery chandauli, order cake online chandauli, birthday cake chandauli, custom cake chandauli, same day cake delivery chandauli black rice zinc mine varanasi road mughal sarai chunar ganga",
    footerContent: `
<h2>Cake Delivery in Chandauli — Black Rice's GI-Tagged Homeland, Zinc Mines, and Ganga-Varanasi's Eastern Gateway</h2>
<p>Chandauli — the headquarters of Chandauli district in Uttar Pradesh (on the Varanasi-Mughal Sarai belt, just east of Varanasi), a city of unusual agricultural and industrial significance (Chandauli is known for its "Black Rice" — the aromatic black-grain rice variety (Kala Namak variety and the indigenous Chandauli black rice strains) grown in the Chandauli-Varanasi belt; these rice varieties have deep cultural connections to Buddhist agriculture traditions of the Ganga plains; Chandauli district hosts parts of India's ancient rice cultivation belt; separately, Chandauli contains significant zinc ore deposits — the Hindustan Zinc mines in Rajasthan are well-known, but Chandauli's sub-surface zinc-lead mineral potential has drawn geological surveys; the Chunar Fort — just across the Varanasi border in neighbouring Mirzapur district but closely associated with Chandauli's historical zone — is a magnificent fort on the Ganga with immense medieval history including Humayun's imprisonment by Sher Shah Suri), and the junction for the Mughal Sarai railway complex (Pandit Deen Dayal Upadhyay Junction / Mughal Sarai is one of India's largest and most important railway junctions, at the Chandauli-Varanasi border). From birthday parties in the Civil Lines area to corporate cakes at the large rice mills, from anniversary surprises near the Varanasi Road area to student cakes at Chandauli's colleges — RedHeart covers all Chandauli zones: Central (Civil Lines, Varanasi Road, Mughalsarai), North (Ghazipur Road, Niyamatabad), South (Mirzapur Road, Chunar border, Naugarh), East (Bihar border, Buxar Road, Chausa), West (Varanasi border, Sarnath Road).</p>
<p>Our Chandauli cake range: Chocolate, Black Forest, Red Velvet, Mango (Varanasi Langra!), Butterscotch, Photo Cakes, Fondant Ganga Ghats / Black Rice heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandauli, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Varanasi Road, Mughalsarai, Ghazipur Road, Mirzapur Road, Chunar border</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chandauli?", answer: "Yes, same-day cake delivery is available across all Chandauli areas — Civil Lines, Varanasi Road, Mughalsarai, Ghazipur Road, and Mirzapur Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Mughalsarai / Pt. Deen Dayal Upadhyay area in Chandauli?", answer: "Yes, the Mughalsarai / Pandit Deen Dayal Upadhyay Junction area — one of India's most important railway junctions, at the Chandauli-Varanasi border — is covered under our Chandauli same-day cake delivery." },
      { question: "Are eggless cakes available in Chandauli?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chandauli delivery." }
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
