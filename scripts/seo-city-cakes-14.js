// Cakes Batch 14 — 15 cities:
// Gujarat: Mehsana, Morbi, Surendranagar
// UP: Fatehpur, Sitapur
// Himachal Pradesh: Dharamsala, Solan, Mandi
// Odisha: Balasore, Jharsuguda
// Telangana: Khammam, Adilabad
// West Bengal: Raiganj
// Uttarakhand: Rudrapur
// Andhra Pradesh: Kadapa (Cuddapah)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "mehsana": {
    cityName: "Mehsana",
    metaTitle: "Cake Delivery in Mehsana | Eggless Cakes Gujarat | RedHeart",
    metaDescription: "Order cakes online in Mehsana. Same-day delivery across Mehsana. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Mehsana",
    metaKeyword: "cake delivery mehsana, order cake online mehsana, birthday cake mehsana eggless, custom cake mehsana, same day cake delivery mehsana station road highway ONGC dairy tobacco market",
    footerContent: `
<h2>Cake Delivery in Mehsana — North Gujarat's Commercial Hub, ONGC Oil Field City, and Tobacco-Dairy Belt</h2>
<p>Mehsana — the headquarters of Mehsana district in North Gujarat, one of the most economically important cities in Gujarat's northern belt, home to ONGC's North Gujarat asset (some of India's longest-operating onshore oil and gas fields are in the Mehsana belt — the Kalol, Nawagam, and Sobhasan oil fields have been producing crude oil since the 1960s–70s), India's largest tobacco-growing region (the "Golden Tobacco" belt of North Gujarat produces high-quality bidi and chewing tobacco, and Mehsana's tobacco markets are among India's busiest), a major dairy cooperative centre (Dudhsagar Dairy — one of Gujarat's largest milk cooperatives — is based in Mehsana and collects from thousands of villages), and a key transit city on the Delhi-Ahmedabad NH-48 highway — is one of North Gujarat's most commercially active cities. All our Mehsana cakes are eggless and Pure Veg — from birthday parties in the Highway area to corporate cakes at the large ONGC and dairy offices, from anniversary surprises in the Station Road residential belt to student cakes at the engineering colleges — RedHeart covers all Mehsana zones: Central (Station Road, Highway Crossroads, Petlad Road), North (Patan Road, Radhanpur Road, Unjha), South (Visnagar Road, Kadi Road, Kalol), East (Becharaji Road, Kheralu), West (Sidhpur Road, Chanasma).</p>
<p>Our Mehsana cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Mango (North Gujarat), Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mehsana, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Highway Crossroads, Petlad Road, Patan Road, Visnagar Road, Kadi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Chocolate, Photo Cake, Black Forest, Red Velvet (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Mehsana?", answer: "Yes! All our Mehsana cakes are 100% eggless and Pure Veg — suitable for Mehsana's traditional Gujarati vegetarian community." },
      { question: "Can I get same-day eggless cake delivery in Mehsana?", answer: "Yes, same-day eggless cake delivery is available across all Mehsana areas — Station Road, Highway Crossroads, Patan Road, and Visnagar Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the ONGC and Dudhsagar Dairy campuses in Mehsana?", answer: "Yes, the ONGC North Gujarat asset office areas and Dudhsagar Dairy headquarters area are covered under our Mehsana same-day delivery." }
    ]
  },

  "morbi": {
    cityName: "Morbi",
    metaTitle: "Cake Delivery in Morbi | Ceramic Capital Gujarat | RedHeart",
    metaDescription: "Order cakes online in Morbi. Same-day delivery across Morbi. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Morbi",
    metaKeyword: "cake delivery morbi, order cake online morbi, birthday cake morbi eggless, custom cake morbi, same day cake delivery morbi station road GIDC ceramic tile clock tower wankaner",
    footerContent: `
<h2>Cake Delivery in Morbi — World's Ceramic Tile Capital, Clock Tower Heritage, and Gujarat's Industrial Dynamo</h2>
<p>Morbi — Gujarat's most remarkable industrial boomtown, the "Ceramic Capital of the World" (Morbi produces over 65% of India's ceramic tiles and sanitary ware, and is the world's 2nd-largest ceramic tile producer after China's Foshan; the Morbi GIDC has 1,000+ ceramic tile units that collectively produce over 900 million square metres of tiles annually — a production scale that boggles the mind; Morbi ceramic tiles are exported to 150+ countries including the USA, UK, Middle East, and Southeast Asia), home to the historic Clock Tower (a Victorian-era structure from 1881 that survived the catastrophic 1979 Machhu Dam collapse — when the Machhu II dam broke and killed 8,000–25,000 people in one of the worst dam disasters in history — and has become a symbol of Morbi's resilience), and a city that rebuilt itself as a global industrial powerhouse from a near-total disaster — is India's most inspiring industrial recovery story. All our Morbi cakes are eggless and Pure Veg — from birthday parties in the large GIDC worker colony residential areas to corporate cakes at the tile company head offices, from anniversary surprises near the historic Clock Tower to student cakes near the Morbi engineering institutes — RedHeart covers all Morbi zones: Central (Clock Tower, Station Road, GIDC), North (Wankaner Road, Tankara, Rajkot Road), South (Halvad Road, Maliya Road), East (Bhuj Road, Gondal Road), West (Jamnagar Road, Navlakhi Port Road).</p>
<p>Our Morbi cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Mango, Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morbi, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Clock Tower, Station Road, GIDC, Wankaner Road, Halvad Road, Rajkot Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Chocolate, Photo Cake, Black Forest, Red Velvet (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Morbi?", answer: "Yes! All our Morbi cakes are 100% eggless and Pure Veg — suitable for Morbi's Gujarati community across the GIDC and residential areas." },
      { question: "Can I get same-day eggless cake delivery in Morbi?", answer: "Yes, same-day eggless cake delivery is available across all Morbi areas — Clock Tower, Station Road, GIDC, and Wankaner Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Morbi GIDC ceramic factory offices?", answer: "Yes, the Morbi GIDC's industrial estate residential and office zones are covered under our same-day delivery." }
    ]
  },

  "surendranagar": {
    cityName: "Surendranagar",
    metaTitle: "Cake Delivery in Surendranagar | Saurashtra Gujarat | RedHeart",
    metaDescription: "Order cakes online in Surendranagar. Same-day delivery across Surendranagar. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Surendranagar",
    metaKeyword: "cake delivery surendranagar, order cake online surendranagar, birthday cake surendranagar eggless, custom cake surendranagar, same day cake delivery surendranagar wadhwan station road cotton market",
    footerContent: `
<h2>Cake Delivery in Surendranagar — Cotton Belt's Capital, Wadhwan's Heritage Twin, and Rann of Kutch's Entry Point</h2>
<p>Surendranagar — the twin city of Wadhwan in Saurashtra Gujarat, the administrative headquarters of Surendranagar district, a major cotton market (Surendranagar district is one of India's cotton-growing heartlands — the Saurashtra cotton, especially the MCU-5 variety, is prized for its long staple and is exported to Japan, South Korea, and China), close to the Dhrangadhra Wild Ass Sanctuary (the world's largest population of Indian Wild Ass — Ghudkhur — is protected here in the Little Rann of Kutch, 60 km from Surendranagar), historic Wadhwan (the old princely capital of the Waghela Rajput state — with a distinctive heritage precinct of carved wooden havelis and the Ranmukteshwar Mahadev temple) — and a city that serves as the main service centre for the semi-arid Saurashtra plains south of Kutch. All our Surendranagar cakes are eggless and Pure Veg — from birthday parties in the Wadhwan area to corporate cakes at the large cotton ginning factories, from anniversary surprises in the Station Road belt to student cakes at the engineering colleges — RedHeart covers Surendranagar, Wadhwan, Dhrangadhra, Limbdi, and the NH-947 corridor.</p>
<p>Our Surendranagar cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Mango, Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Surendranagar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Wadhwan, Cotton Market, Dhrangadhra Road, Limbdi Road, Rajkot Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Chocolate, Photo Cake, Black Forest, Red Velvet (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Surendranagar?", answer: "Yes! All our Surendranagar cakes are 100% eggless and Pure Veg — suitable for Surendranagar's Gujarati and Jain community." },
      { question: "Can I get same-day eggless cake delivery in Surendranagar?", answer: "Yes, same-day eggless cake delivery is available across Surendranagar and the adjacent Wadhwan town area for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Wadhwan (twin city of Surendranagar)?", answer: "Yes, Wadhwan's residential areas and market are covered under the Surendranagar delivery zone for same-day delivery." }
    ]
  },

  "fatehpur": {
    cityName: "Fatehpur",
    metaTitle: "Cake Delivery in Fatehpur | Yamuna Belt Uttar Pradesh | RedHeart",
    metaDescription: "Order cakes online in Fatehpur. Same-day delivery across Fatehpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fatehpur",
    metaKeyword: "cake delivery fatehpur, order cake online fatehpur, birthday cake fatehpur, custom cake fatehpur UP, same day cake delivery fatehpur civil lines bindki khaga allahabad road kanpur road",
    footerContent: `
<h2>Cake Delivery in Fatehpur — Yamuna-Ganga Doab's Historic City and Uttar Pradesh's Fertilizer Hub</h2>
<p>Fatehpur — the headquarters of Fatehpur district in central Uttar Pradesh, located in the fertile Yamuna-Ganga doab (the alluvial plain between the two great rivers), a city with a significant historical connection to Akbar's Fatehpur Sikri (though the city of Fatehpur in UP is distinct from Fatehpur Sikri near Agra, the name reflects the Mughal influence on North Indian toponymy), home to the Phulpur fertilizer plant (Indian Farmers Fertiliser Cooperative — IFFCO Phulpur, 50 km from Fatehpur city, is one of India's largest fertilizer complexes), and a major agricultural trading hub for wheat, mustard, and sugarcane in the UP plains — is a city of agricultural and industrial importance. From birthday parties in the Civil Lines area to corporate cakes at the large fertilizer plant townships, from anniversary surprises near the historic ghats on the Yamuna to student cakes at Fatehpur's growing colleges — RedHeart covers all Fatehpur zones: Central (Civil Lines, Station Road, Allahabad Road), North (Khaga Road, Bindki Road), South (Kanpur Road, Yamunanagar Road), East (Rae Bareli Road, Gauriganj), West (Hamirpur Road, Babaganj, Malwa).</p>
<p>Our Fatehpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Yamuna belt Dussehri!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Allahabad Road, Khaga Road, Bindki Road, Kanpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fatehpur?", answer: "Yes, same-day cake delivery is available across all Fatehpur areas — Civil Lines, Station Road, Allahabad Road, and Khaga Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Fatehpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Fatehpur delivery." },
      { question: "Do you deliver midnight cakes in Fatehpur?", answer: "Yes, midnight birthday cake delivery is available across Fatehpur's central and residential zones." }
    ]
  },

  "sitapur": {
    cityName: "Sitapur",
    metaTitle: "Cake Delivery in Sitapur | Awadh Region Uttar Pradesh | RedHeart",
    metaDescription: "Order cakes online in Sitapur. Same-day delivery across Sitapur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Sitapur",
    metaKeyword: "cake delivery sitapur, order cake online sitapur, birthday cake sitapur, custom cake sitapur, same day cake delivery sitapur civil lines lucknow road naimisharanya shahjahanpur road",
    footerContent: `
<h2>Cake Delivery in Sitapur — Naimisharanya's Gateway, Awadhi Plains, and Sugar Belt's Urban Centre</h2>
<p>Sitapur — the headquarters of Sitapur district in the Awadh region of Uttar Pradesh, gateway to Naimisharanya (one of Hinduism's most sacred forests — the ancient forest where the Puranas were composed and narrated by the sage Suta Goswami to thousands of rishis; the Naimisharanya Teertha is considered a Shakti Peetha; 88 km from Sitapur, it draws lakhs of pilgrims especially during the annual Melas), a major sugar-growing city (Sitapur district's terai-belt sugarcane is processed in several large sugar mills), and an important highway city on the Lucknow-Shahjahanpur-Bareilly corridor — is a city of pilgrimage gateway importance and agricultural wealth. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from Purnima celebration cakes (for Naimisharanya's monthly pilgrimage) to anniversary surprises in the Shahjahanpur Road residential belt — RedHeart covers all Sitapur zones: Central (Civil Lines, Station Road, Lucknow Road), North (Shahjahanpur Road, Sidhauli, Biswan), South (Hardoi Road, Naimisharanya Road, Sandila), East (Lakhimpur Road, Hargaon), West (Kheri Road, Mahmudabad).</p>
<p>Our Sitapur cake range: Chocolate, Black Forest, Red Velvet, Mango (Awadhi Dussehri!), Butterscotch, Photo Cakes, Fondant Naimisharanya-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitapur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Lucknow Road, Shahjahanpur Road, Naimisharanya Road, Hardoi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sitapur?", answer: "Yes, same-day cake delivery is available across all Sitapur areas — Civil Lines, Station Road, Lucknow Road, and Shahjahanpur Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sitapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sitapur delivery." },
      { question: "Do you deliver midnight cakes in Sitapur?", answer: "Yes, midnight birthday cake delivery is available across Sitapur's central and residential zones." }
    ]
  },

  "dharamsala": {
    cityName: "Dharamsala",
    metaTitle: "Cake Delivery in Dharamsala | Dalai Lama's City Himachal | RedHeart",
    metaDescription: "Order cakes online in Dharamsala. Same-day delivery across Dharamsala. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dharamsala",
    metaKeyword: "cake delivery dharamsala, order cake online dharamsala, birthday cake dharamsala, custom cake dharamsala, same day cake delivery dharamsala mcleod ganj upper lower kotwali bazar HPCA",
    footerContent: `
<h2>Cake Delivery in Dharamsala — Little Lhasa, Dalai Lama's Residence, and Himachal Pradesh's Global Spiritual City</h2>
<p>Dharamsala — the hill city in Kangra district of Himachal Pradesh, split between Lower Dharamsala (the administrative town with the district courts, collector's office, and market) and Upper Dharamsala/McLeod Ganj ("Little Lhasa" — the headquarters-in-exile of the Tibetan government, where His Holiness the 14th Dalai Lama has resided since 1960 after fleeing Tibet; McLeod Ganj is home to the Namgyal Monastery, the Tsuglagkhang Complex — the largest Buddhist temple in India — the Tibet Museum, and thousands of Tibetan Buddhist monks and refugees), one of India's most internationally visited spiritual and trekking destinations (the Triund Trek, the Indrahar Pass route, and the Bhagsu Waterfall are popular), home to the HPCA (Himachal Pradesh Cricket Association Stadium — the world's highest cricket ground at 1,457 metres altitude, known as one of the most scenic cricket venues globally) — is a city of extraordinary global significance. From birthday parties in the Lower Dharamsala area to café cakes in the McLeod Ganj tourist belt, from anniversary surprises in the HPCA area to student cakes at Dharamsala's colleges — RedHeart covers all Dharamsala zones: Central (Kotwali Bazar, Station Road, Court Road), North (McLeod Ganj, Jogiwara Road, Bhagsu Road), South (Lower Dharamsala, ISBT, Dharamsala Road), East (Kangra Road, Palampur Road), West (Mcleod Ganj Road, Naddi, Dharamkot).</p>
<p>Our Dharamsala cake range: Chocolate, Black Forest, Red Velvet, Mango (Kangra Alphonso belt!), Apple-Cream (Himachali apple!), Photo Cakes, Fondant Dalai Lama / Tibetan Buddhist-inspired theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dharamsala, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kotwali Bazar, McLeod Ganj, Bhagsu Road, Jogiwara Road, ISBT, HPCA Cricket Stadium area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple-Cream, Chocolate, Buddhist Mandala Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dharamsala and McLeod Ganj?", answer: "Yes, same-day cake delivery is available across both Lower Dharamsala (Kotwali Bazar, ISBT area) and Upper Dharamsala / McLeod Ganj (Bhagsu Road, Jogiwara Road, Tibetan colony) for orders placed before 3 PM." },
      { question: "Do you have Himachali apple cakes and Buddhist-themed cakes in Dharamsala?", answer: "Yes! Dharamsala's Himachali apple orchards inspire our Apple-Cream cake, and the city's Tibetan Buddhist heritage inspires our Buddhist Mandala fondant cakes — both unique to Dharamsala." },
      { question: "Are eggless cakes available in Dharamsala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dharamsala delivery." }
    ]
  },

  "solan": {
    cityName: "Solan",
    metaTitle: "Cake Delivery in Solan | Mushroom City Himachal Pradesh | RedHeart",
    metaDescription: "Order cakes online in Solan. Same-day delivery across Solan. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Solan",
    metaKeyword: "cake delivery solan, order cake online solan, birthday cake solan, custom cake solan, same day cake delivery solan subhash nagar mohan nagar salogra condapur shoolini university",
    footerContent: `
<h2>Cake Delivery in Solan — Mushroom City, Shoolini University Hub, and Himachal Pradesh's Pharmaceutical Valley</h2>
<p>Solan — Himachal Pradesh's 2nd-largest city on the Kalka-Shimla highway corridor, the "Mushroom City of India" (Solan district is India's largest producer of button mushrooms — the Central Institute of Temperate Horticulture and the government mushroom research farms in Solan have made the region the hub of India's mushroom cultivation and processing industry), home to Shoolini University (one of India's top private research universities — consistently ranked among India's top 100 universities for research output, with strong pharmacy, biotechnology, and science departments), a major pharmaceutical and pharmaceutical research hub (the Baddi-Nalagarh pharmaceutical cluster, 30 km from Solan, is India's largest pharmaceutical industrial belt), and a city with an apple, stone-fruit, and tomato horticulture tradition in the Shivalik hills — is a city of educational, industrial, and agricultural significance. From birthday parties in the Subhash Nagar residential area to corporate cakes at the pharma company offices, from anniversary surprises in the Mohan Nagar belt to campus cakes at Shoolini University — RedHeart covers all Solan zones: Central (Subhash Nagar, Station Road, Salogra Road), North (Shimla Road, Kasauli Road, Dharampur), South (Baddi Road, Nalagarh Road, Parwanoo Road), East (Condapur, Chambaghat), West (Mohan Road, Nalagarh).</p>
<p>Our Solan cake range: Chocolate, Black Forest, Red Velvet, Mango (Himachali), Apple-Cream (Himachali apple!), Photo Cakes, Fondant Mushroom / Shivalik theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Solan, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Subhash Nagar, Station Road, Salogra Road, Mohan Nagar, Condapur, Shoolini University area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple-Cream, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Solan?", answer: "Yes, same-day cake delivery is available across all Solan areas — Subhash Nagar, Station Road, Salogra Road, Mohan Nagar, and the Shoolini University area — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Shoolini University campus in Solan?", answer: "Yes, Shoolini University's campus and student housing zones are covered under our Solan same-day delivery." },
      { question: "Are eggless cakes available in Solan?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Solan delivery." }
    ]
  },

  "mandi": {
    cityName: "Mandi",
    metaTitle: "Cake Delivery in Mandi | City of 81 Temples Himachal | RedHeart",
    metaDescription: "Order cakes online in Mandi. Same-day delivery across Mandi. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Mandi",
    metaKeyword: "cake delivery mandi, order cake online mandi, birthday cake mandi, custom cake mandi himachal, same day cake delivery mandi indira market school road beas river shivratri",
    footerContent: `
<h2>Cake Delivery in Mandi — City of 81 Temples, Beas River's Valley Hub, and Himachal Pradesh's Commercial Heart</h2>
<p>Mandi — Himachal Pradesh's 3rd-largest city, the "Varanasi of Himalayas" (Mandi has 81 ancient stone temples within the city and its immediate surroundings, many dating to the 16th–17th century Mandi princely state; the Triloknath, Bhootnath, Panchvaktra, and Ardhnari temples are masterpieces of pahadi architectural traditions, earning Mandi the title of the "temple city of the hills"), the commercial hub of the Beas Valley (all traffic between Kullu-Manali-Spiti and the plains passes through Mandi's critical junction at the Beas River confluence), host of the Shivratri International Fair of Mandi (one of HP's largest and most culturally vibrant fairs — held over 7 days in March; 200+ local deities are brought in palanquins from across the surrounding hills to participate), the gateway to Prashar Lake, Rewalsar Lake, and the Pandoh Dam — is Himachal Pradesh's most important inland commercial city. From birthday parties in the Indira Market area to corporate cakes at the large hydro power project offices, from Shivratri celebration cakes to anniversary surprises near the Beas River embankment — RedHeart covers all Mandi zones: Central (Indira Market, School Road, Victoria Bridge), North (Kullu Road, Bajaura, Manali Road), South (Shimla Road, Sundernagar, Bilaspur Road), East (Prashar Road, Jogindernagar), West (Pathankot Road, Hamirpur Road, Rewalsar).</p>
<p>Our Mandi cake range: Chocolate, Black Forest, Red Velvet, Apple-Cream (Mandi's apple orchards!), Mango, Photo Cakes, Fondant 81 Temples / Pahadi heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandi, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indira Market, School Road, Victoria Bridge, Kullu Road, Shimla Road, Sundernagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple-Cream, Chocolate, Pahadi Temple Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mandi?", answer: "Yes, same-day cake delivery is available across all Mandi areas — Indira Market, School Road, Victoria Bridge, and Kullu Road — for orders placed before 3 PM." },
      { question: "Do you have Himachali apple cakes in Mandi?", answer: "Yes! Mandi district's apple orchards — among Himachal Pradesh's most productive — inspire our Apple-Cream cake, made with fresh Himachali apple flavour. A perfect hill-fresh choice for Mandi birthdays." },
      { question: "Are eggless cakes available in Mandi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mandi delivery." }
    ]
  },

  "balasore": {
    cityName: "Balasore",
    metaTitle: "Cake Delivery in Balasore | Missile City Odisha | RedHeart",
    metaDescription: "Order cakes online in Balasore. Same-day delivery across Balasore. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Balasore",
    metaKeyword: "cake delivery balasore, order cake online balasore, birthday cake balasore, custom cake balasore, same day cake delivery balasore civil line station road chandipur soro remuna",
    footerContent: `
<h2>Cake Delivery in Balasore — India's Missile Testing City, APJ Abdul Kalam's Work City, and Odisha's Northern Coastal Hub</h2>
<p>Balasore — Odisha's northernmost coastal city, home to the Integrated Test Range (ITR) at Chandipur (one of India's most strategic missile testing facilities — the Chandipur-on-sea launch complex, established in 1989, is where India has test-fired dozens of missiles including Agni-I, Agni-II, BrahMos, Prithvi, Dhanush, and the Shaurya — the birthplace of India's credible nuclear deterrent; the late President APJ Abdul Kalam's Missile Man legacy was built in part at Chandipur, which he visited repeatedly), the Remuna Kshetra (home to the famous Khira Chora Gopinath Temple — where, according to legend, Lord Vishnu stole sweetened rice to feed the poet-saint Jayadeva), and a major jute and rice processing city — is a city of national defence significance. From birthday parties in the Civil Line area to corporate cakes at the DRDO township, from anniversary surprises near the Station Road market to student cakes at Fakir Mohan University — RedHeart covers all Balasore zones: Central (Civil Line, Station Road, Sahadevkhunta), North (Chandipur Road, Jaleswar Road, Bhograi), South (Remuna, Nilgiri Road, Baripada Road), East (Chandipur Sea Range, Dagara Road), West (Soro Road, Keonjhar Road, Jajpur Road).</p>
<p>Our Balasore cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Langra!), Butterscotch, Photo Cakes, Fondant Missile / APJ-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balasore, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Line, Station Road, Sahadevkhunta, Chandipur Road, Remuna, Jaleswar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Missile Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Balasore?", answer: "Yes, same-day cake delivery is available across all Balasore areas — Civil Line, Station Road, Sahadevkhunta, Chandipur Road, and Remuna — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Chandipur (ITR missile range area)?", answer: "Yes, the Chandipur township area (near the Integrated Test Range — India's missile testing facility) is covered under the Balasore delivery zone for same-day delivery." },
      { question: "Are eggless cakes available in Balasore?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Balasore delivery." }
    ]
  },

  "jharsuguda": {
    cityName: "Jharsuguda",
    metaTitle: "Cake Delivery in Jharsuguda | Energy Capital Odisha | RedHeart",
    metaDescription: "Order cakes online in Jharsuguda. Same-day delivery across Jharsuguda. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jharsuguda",
    metaKeyword: "cake delivery jharsuguda, order cake online jharsuguda, birthday cake jharsuguda, custom cake jharsuguda, same day cake delivery jharsuguda power plant NALCO vedanta civil township station road",
    footerContent: `
<h2>Cake Delivery in Jharsuguda — Odisha's Power Capital, NALCO Aluminium Hub, and Ib River Valley Industrial City</h2>
<p>Jharsuguda — a small but extraordinarily energy-rich city in western Odisha, the "Power Capital of Odisha" and one of India's most important energy-industrial complexes (the Jharsuguda-Raigarh-Raipur industrial belt has the highest concentration of power plants, aluminium smelters, and steel units in central India; the Vedanta/Balco Jharsuguda aluminium complex is one of Asia's largest, the NTPC Lara and NTPC Dadri units and the several state-owned thermal plants make Jharsuguda a major energy producer; the NALCO Angul-Jharsuguda complex exports aluminium globally), a city of large-scale industrial townships (Vedanta township, NALCO colony, NTPC colony) with relatively well-educated, nationally-recruited workforce populations, and the headquarters of the Jharsuguda-Sambalpur-Sundargarh industrial triangle — is a city of immense energy output and industrial population. From birthday parties in the large NALCO and Vedanta company townships to corporate cakes at the plant offices, from anniversary surprises in the civil township area to student cakes near the engineering colleges — RedHeart covers all Jharsuguda zones: Central (Civil Township, Station Road, Power House Road), North (NALCO Colony, Vedanta Township), South (Sambalpur Road, Laikera), East (Sundargarh Road, Rourkela Road), West (Raigarh Road, Chhattisgarh border).</p>
<p>Our Jharsuguda cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jharsuguda, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Township, Station Road, NALCO Colony, Vedanta Township, Power House Road, Sambalpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jharsuguda?", answer: "Yes, same-day cake delivery is available across all Jharsuguda areas — Civil Township, Station Road, NALCO Colony, Vedanta Township, and Power House Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to NALCO and Vedanta Jharsuguda townships?", answer: "Yes, both the NALCO Colony and the Vedanta Jharsuguda industrial township are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Jharsuguda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jharsuguda delivery." }
    ]
  },

  "khammam": {
    cityName: "Khammam",
    metaTitle: "Cake Delivery in Khammam | Coal City Telangana | RedHeart",
    metaDescription: "Order cakes online in Khammam. Same-day delivery across Khammam. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Khammam",
    metaKeyword: "cake delivery khammam, order cake online khammam, birthday cake khammam, custom cake khammam, same day cake delivery khammam civil court colony balaji nagar hanamkonda road godavari",
    footerContent: `
<h2>Cake Delivery in Khammam — Telangana's Coal City, Bhadrachalam's Gateway, and Godavari River Delta Entry</h2>
<p>Khammam — the headquarters of Khammam district in Telangana, a major coal-mining city (the Singareni Collieries Company — India's only government-owned coal mining company in South India — has extensive mines in the Khammam-Kothagudem belt; coal from these mines powers Telangana's and Andhra's thermal plants), gateway to Bhadrachalam (a major Vaishnava pilgrimage town on the banks of the Godavari River, 100 km from Khammam — the Sri Sita Ramachandra Swamy Temple is one of Telangana's most important temples, famous for the annual Mukkoti Ekadasi and Kalyanotsavam festivals), and a key city at the edge of the Godavari delta's agricultural zone — is a city of mineral wealth and pilgrimage gateway importance. From birthday parties in the Civil and Court Colony residential areas to corporate cakes at the large Singareni Collieries offices, from anniversary surprises in Balaji Nagar to student cakes near the Khammam colleges — RedHeart covers all Khammam zones: Central (Civil Colony, Court Colony, Station Road), North (Balaji Nagar, Hanamkonda Road, Wyra Road), South (Bhadrachalam Road, Kothagudem Road), East (Godavari Belt, Yellandu Road), West (Nalgonda Road, Suryapet Road).</p>
<p>Our Khammam cake range: Chocolate, Black Forest, Red Velvet, Mango (Godavari Banganapalli!), Butterscotch, Photo Cakes, Fondant Bhadrachalam Rama-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khammam, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Colony, Court Colony, Station Road, Balaji Nagar, Bhadrachalam Road, Wyra Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bhadrachalam Rama Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Khammam?", answer: "Yes, same-day cake delivery is available across all Khammam areas — Civil Colony, Court Colony, Station Road, Balaji Nagar, and Bhadrachalam Road — for orders placed before 3 PM." },
      { question: "Do you have Bhadrachalam Rama-themed cakes in Khammam?", answer: "Yes! Bhadrachalam — the revered Ramachandra temple on the Godavari, 100 km from Khammam — inspires our Bhadrachalam Sita-Rama fondant cakes, a popular devotional design." },
      { question: "Are eggless cakes available in Khammam?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Khammam delivery." }
    ]
  },

  "adilabad": {
    cityName: "Adilabad",
    metaTitle: "Cake Delivery in Adilabad | Tribal District Telangana | RedHeart",
    metaDescription: "Order cakes online in Adilabad. Same-day delivery across Adilabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Adilabad",
    metaKeyword: "cake delivery adilabad, order cake online adilabad, birthday cake adilabad, custom cake adilabad, same day cake delivery adilabad civil lines railway station nanded road mancherial",
    footerContent: `
<h2>Cake Delivery in Adilabad — Telangana's Northern Tribal Frontier, Pochara Waterfalls, and Gond Kingdom's Heartland</h2>
<p>Adilabad — the headquarters of Adilabad district in northernmost Telangana, one of India's most tribally significant regions (the Gond, Kolam, and Raj Gond tribal communities have ancient historical roots here — Adilabad's Sahyadri hills were the domain of Gond tribal kings for centuries, and the region preserves unique tribal art, music, and craft traditions), home to the Pochara Waterfalls (one of Telangana's most spectacular natural attractions — the Godavari River's tributary cascades over ancient rocks in a multi-tiered falls setting, a popular weekend destination for Hyderabad), the Kadem Reservoir (a major irrigation dam on the Kadem River, supporting agriculture in the drought-prone Adilabad region), and India's most cotton-growing tribal belt (the Adilabad BT cotton production is one of the largest in the country) — is a city of tribal culture and agricultural significance. From birthday parties in the Civil Lines residential area to corporate cakes at the large cotton ginning units, from anniversary surprises near the railway station to student cakes at the Adilabad colleges — RedHeart covers all Adilabad zones: Central (Civil Lines, Railway Station Road, Nanded Road), North (Nirmal Road, Maharashtra Border), South (Mancherial Road, Bellampalli), East (Mancherial, Asifabad), West (Basara Road, Nanded Road).</p>
<p>Our Adilabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Pochara Waterfalls / Gond tribal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Adilabad, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Railway Station Road, Nanded Road, Mancherial Road, Nirmal Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Adilabad?", answer: "Yes, same-day cake delivery is available across all Adilabad areas — Civil Lines, Railway Station Road, Nanded Road, and Mancherial Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Adilabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Adilabad delivery." },
      { question: "Do you deliver midnight cakes in Adilabad?", answer: "Yes, midnight birthday cake delivery is available across Adilabad's central and residential zones." }
    ]
  },

  "raiganj": {
    cityName: "Raiganj",
    metaTitle: "Cake Delivery in Raiganj | Bird Sanctuary City West Bengal | RedHeart",
    metaDescription: "Order cakes online in Raiganj. Same-day delivery across Raiganj. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Raiganj",
    metaKeyword: "cake delivery raiganj, order cake online raiganj, birthday cake raiganj, custom cake raiganj, same day cake delivery raiganj new market station road kulik nagar uttardinajpur",
    footerContent: `
<h2>Cake Delivery in Raiganj — Kulik Bird Sanctuary's City and Uttar Dinajpur's Commercial Hub</h2>
<p>Raiganj — the headquarters of Uttar Dinajpur district in North Bengal, home to the Raiganj Wildlife Sanctuary (Kulik Bird Sanctuary — one of the largest waterbird colonies in Asia, where over 160,000 open-billed storks, night herons, little cormorants, and other wading birds congregate during the breeding season from July to November in the Kulik River forest; the sanctuary is barely 2 km from Raiganj town), a major trading centre for the jute, paddy, and mustard agriculture of North Bengal, and a city on the Bengali-Bihar border with a significant Bangladesh-origin Bengali community — is a city of birding fame and agricultural commerce. From birthday parties in the New Market area to corporate cakes at the large trading firms, from anniversary surprises near the Station Road belt to student cakes at Raiganj College — RedHeart covers all Raiganj zones: Central (New Market, Station Road, Court Area), North (Islampur Road, Dalkhola, Chopra), South (Malda Road, Kaliaganj, Hemtabad), East (Goalpokhar Road, Karandighi), West (Bihar Border, Itahar).</p>
<p>Our Raiganj cake range: Chocolate, Black Forest, Red Velvet, Mango (Malda Himsagar!), Butterscotch, Photo Cakes, Fondant Kulik Bird Sanctuary-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raiganj, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">New Market, Station Road, Court Area, Islampur Road, Malda Road, Kulik Sanctuary area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kulik Bird Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Raiganj?", answer: "Yes, same-day cake delivery is available across all Raiganj areas — New Market, Station Road, Court Area, and Islampur Road — for orders placed before 3 PM." },
      { question: "Do you have Kulik Bird Sanctuary-themed cakes in Raiganj?", answer: "Yes! The Raiganj Wildlife Sanctuary (Kulik Bird Sanctuary) — one of Asia's largest waterbird colonies, with 160,000+ storks and herons nesting annually — inspires our Kulik Bird fondant cakes, a unique local wildlife design." },
      { question: "Are eggless cakes available in Raiganj?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Raiganj delivery." }
    ]
  },

  "rudrapur": {
    cityName: "Rudrapur",
    metaTitle: "Cake Delivery in Rudrapur | Industrial City Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Rudrapur. Same-day delivery across Rudrapur. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Rudrapur",
    metaKeyword: "cake delivery rudrapur, order cake online rudrapur, birthday cake rudrapur, custom cake rudrapur, same day cake delivery rudrapur SIDCUL pantnagar industrial area delhi road sector 1",
    footerContent: `
<h2>Cake Delivery in Rudrapur — Uttarakhand's Industrial Capital, SIDCUL's Flagship City, and Terai's Manufacturing Powerhouse</h2>
<p>Rudrapur — the largest city of Udham Singh Nagar district in Uttarakhand's Terai (the flat, fertile plains at the base of the Himalayas), Uttarakhand's most important industrial city (the Rudrapur SIDCUL — State Infrastructure and Industrial Development Corporation — is one of Uttarakhand's largest integrated industrial estates, home to Tata Motors, Ashok Leyland, Bajaj Auto, Hero MotoCorp components, Mahindra, Himalaya Drug Company, and dozens of FMCG manufacturing plants; the Pantnagar Industrial Estate, established in 2003 after Uttarakhand's formation, created thousands of factory jobs and drew migrants from across UP, Bihar, and Nepal), home to the Pantnagar University (G.B. Pant University of Agriculture and Technology — one of India's first agricultural universities, founded in 1960, which played a key role in the Green Revolution), and a rapidly growing consumer city supplying goods and services to the entire Kumaon terai — is one of Uttarakhand's most dynamic cities. From birthday parties in the modern residential sectors to corporate cakes at the large SIDCUL factories, from anniversary surprises in the Sector 1 belt to student cakes at Pantnagar University — RedHeart covers all Rudrapur zones: Central (Delhi Road, Sector 1, Station Road), North (Haldwani Road, Kichha Road, Nainital Road), South (Pantnagar, Sitarganj Road, Pilibhit Road), East (Kashipur Road, Bajpur), West (Rampur Road, Bilaspur).</p>
<p>Our Rudrapur cake range: Chocolate, Black Forest, Red Velvet, Mango (Kumaon Langra!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rudrapur, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delhi Road, Sector 1, SIDCUL Industrial Area, Station Road, Pantnagar University area, Haldwani Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rudrapur?", answer: "Yes, same-day cake delivery is available across all Rudrapur areas — Delhi Road, Sector 1, SIDCUL Industrial Area, Station Road, and Pantnagar University area — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to SIDCUL Rudrapur factory townships?", answer: "Yes, the SIDCUL industrial estate employee residential zones (including Tata Motors, Bajaj, Hero, and Himalaya Drug Company colony areas) are covered by our Rudrapur same-day delivery." },
      { question: "Are eggless cakes available in Rudrapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rudrapur delivery." }
    ]
  },

  "kadapa": {
    cityName: "Kadapa",
    metaTitle: "Cake Delivery in Kadapa | YSR District AP | RedHeart",
    metaDescription: "Order cakes online in Kadapa. Same-day delivery across Kadapa. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Kadapa",
    metaKeyword: "cake delivery kadapa, order cake online kadapa cuddapah, birthday cake kadapa, custom cake kadapa, same day cake delivery kadapa YSR district ramnagar jaganmohan reddy jubilee bus stand",
    footerContent: `
<h2>Cake Delivery in Kadapa — YSR District's Capital, Yerragondapalem Pilgrimage Hub, and Rayalaseema's Limestone City</h2>
<p>Kadapa (Cuddapah) — the headquarters of YSR Kadapa district in Andhra Pradesh's Rayalaseema region (the district was renamed from Kadapa to YSR Kadapa in honour of Y.S. Rajasekhara Reddy, the beloved Andhra Pradesh Chief Minister who died in a helicopter crash in 2009 and whose son Jaganmohan Reddy became AP CM), home to the Yerragondapalem Durgamma Temple (a powerful goddess temple 80 km from Kadapa, drawing large numbers of devotees), a major source of the Kadapa limestone (used in India's cement industry — the Rayalaseema formation's high-quality limestone makes the Kadapa belt important for cement production), known for the fiercely competitive Rayalaseema political culture, and part of the iron ore-bearing Nallamala Hills belt — is a city of political significance and mineral-agricultural importance. From birthday parties in the Ramnagar residential area to corporate cakes at the large mining company offices, from anniversary surprises near the Jubilee Bus Stand to student cakes at the Yogi Vemana University — RedHeart covers all Kadapa zones: Central (Ramnagar, Station Road, Jubilee Bus Stand), North (Tirupati Road, Pulivendula Road, Vempalli), South (Nellore Road, Nandalur, Rajampet), East (Cuddapah-Kurnool Road, Proddatur), West (Kurnool Road, Allagadda, Banganapalli Road).</p>
<p>Our Kadapa cake range: Chocolate, Black Forest, Red Velvet, Mango (Banganapalli proximity!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kadapa, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramnagar, Station Road, Jubilee Bus Stand, Tirupati Road, Proddatur Road, Pulivendula</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kadapa?", answer: "Yes, same-day cake delivery is available across all Kadapa areas — Ramnagar, Station Road, Jubilee Bus Stand, Tirupati Road, and Proddatur Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kadapa?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kadapa delivery." },
      { question: "Do you deliver midnight cakes in Kadapa?", answer: "Yes, midnight birthday cake delivery is available across Kadapa's central and residential zones." }
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
