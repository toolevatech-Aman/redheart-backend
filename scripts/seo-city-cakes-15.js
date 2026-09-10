// Cakes Batch 15 — 15 cities:
// Haryana: Kurukshetra, Sirsa, Jind
// UP: Hardoi, Bijnor
// Andhra Pradesh: Chittoor
// Karnataka: Koppal, Mandya
// Kerala: Kasaragod
// Bihar: Chapra (Saran), Ara (Bhojpur)
// West Bengal: Jalpaiguri
// Odisha: Baripada
// Uttarakhand: Mussoorie
// Punjab: Hoshiarpur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "kurukshetra": {
    cityName: "Kurukshetra",
    metaTitle: "Cake Delivery in Kurukshetra | Mahabharata's Holy City Haryana | RedHeart",
    metaDescription: "Order cakes online in Kurukshetra. Same-day delivery across Kurukshetra. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kurukshetra",
    metaKeyword: "cake delivery kurukshetra, order cake online kurukshetra, birthday cake kurukshetra, custom cake kurukshetra, same day cake delivery kurukshetra brahmsarovar dharmakshetra NIT university sector thanesar",
    footerContent: `
<h2>Cake Delivery in Kurukshetra — Land of the Mahabharata, Brahmasarovar's Sacred City, and NIT's University Town</h2>
<p>Kurukshetra — one of Hinduism's most sacred cities in Haryana, where the Mahabharata war was fought (Dharmakshetra Kurukshetra — the Geeta Updesh, the dialogue between Krishna and Arjuna that forms the Bhagavad Gita, took place on the battlefield of Kurukshetra; 48 sacred spots of pilgrimage surround the city, and the Brahmasarovar — India's largest sacred tank, 3.5 km long and 1.5 km wide — is where millions of Hindus take a holy dip during the Kurukshetra Gita Jayanti festival, the Solar eclipse, and Kartik Purnima), home to Kurukshetra University (one of Haryana's oldest universities, founded in 1956), NIT Kurukshetra (one of India's 31 National Institutes of Technology, with strong engineering departments), and the solar eclipse bathing fair that draws 2–5 million pilgrims to Brahmasarovar once every 18 months — is a city of extraordinary spiritual antiquity and modern education. From birthday parties in the NIT campus residential area to corporate cakes at the university offices, from Gita Jayanti celebration cakes to anniversary surprises near the Brahmasarovar embankment — RedHeart covers all Kurukshetra zones: Central (Brahmasarovar, Thanesar, Station Road), North (Shahabad Road, Ambala Road), South (Pipli, Karnal Road, Panipat Road), East (Yamuna Nagar Road, Jagadhri), West (Pehowa Road, Kaithal Road).</p>
<p>Our Kurukshetra cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kurukshetra / Geeta / Gita Jayanti-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kurukshetra, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Brahmasarovar, Thanesar, Station Road, NIT Campus, Shahabad Road, Karnal Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Geeta Jayanti Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kurukshetra?", answer: "Yes, same-day cake delivery is available across all Kurukshetra areas — Brahmasarovar, Thanesar, Station Road, NIT Campus, and Shahabad Road — for orders placed before 3 PM." },
      { question: "Do you have Gita Jayanti-themed cakes in Kurukshetra?", answer: "Yes! Kurukshetra's Gita Jayanti festival — the anniversary of the Bhagavad Gita's rendition on the Mahabharata battlefield — inspires our Geeta/Kurukshetra fondant cakes. A deeply meaningful celebration cake for the holy city." },
      { question: "Do you deliver cakes to NIT Kurukshetra campus?", answer: "Yes, NIT Kurukshetra's campus and student residential zones are covered under our Kurukshetra same-day delivery." }
    ]
  },

  "sirsa": {
    cityName: "Sirsa",
    metaTitle: "Cake Delivery in Sirsa | Cotton Belt Haryana | RedHeart",
    metaDescription: "Order cakes online in Sirsa. Same-day delivery across Sirsa. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Sirsa",
    metaKeyword: "cake delivery sirsa, order cake online sirsa, birthday cake sirsa, custom cake sirsa, same day cake delivery sirsa civil lines court road dera sacha sauda cotton grain market mandi",
    footerContent: `
<h2>Cake Delivery in Sirsa — Haryana's Cotton Capital, Dera Sacha Sauda's City, and the Rajasthan Border's Grain Mandi</h2>
<p>Sirsa — the headquarters of Sirsa district in southwestern Haryana, one of Haryana's most important agricultural towns (Sirsa is Haryana's cotton-growing capital — the district produces a large share of Haryana's total cotton output; the grain markets of Sirsa — wheat, mustard, cotton — are among Haryana's most active mandis), the headquarters of the Dera Sacha Sauda (a large and controversial Sikh-Sufi-Hindu spiritual organization with millions of followers, headquartered in Sirsa under their current Gurmeet Ram Rahim Singh, who was convicted of rape charges; the Dera has a vast campus in Sirsa and draws pilgrims from across Haryana, Punjab, and Rajasthan), a border city with Rajasthan providing transit trade — and a city of agricultural wealth and unusual national visibility due to the Dera controversy. From birthday parties in the Civil Lines residential area to corporate cakes at the large cotton gin factories, from anniversary surprises in the Court Road belt to student cakes at Chaudhary Devi Lal University — RedHeart covers all Sirsa zones: Central (Civil Lines, Court Road, Station Road), North (Fatehabad Road, Hisar Road), South (Dabwali Road, Hanumangarh Road, Rajasthan border), East (Ellenabad, Ding Road), West (Fazilka Road, Abohar Road, Punjab border).</p>
<p>Our Sirsa cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirsa, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Court Road, Station Road, Fatehabad Road, Hisar Road, Dabwali Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sirsa?", answer: "Yes, same-day cake delivery is available across all Sirsa areas — Civil Lines, Court Road, Station Road, Fatehabad Road, and Hisar Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sirsa?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sirsa delivery." },
      { question: "Do you deliver midnight cakes in Sirsa?", answer: "Yes, midnight birthday cake delivery is available across Sirsa's central and residential zones." }
    ]
  },

  "jind": {
    cityName: "Jind",
    metaTitle: "Cake Delivery in Jind | Haryana's Pivot City | RedHeart",
    metaDescription: "Order cakes online in Jind. Same-day delivery across Jind. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jind",
    metaKeyword: "cake delivery jind, order cake online jind, birthday cake jind, custom cake jind, same day cake delivery jind civil hospital road geeta bhawan junction pundri narwana sonipat road",
    footerContent: `
<h2>Cake Delivery in Jind — Haryana's Geographical Centre, Ancient Jai Devi Temple, and the State's Agricultural Crossroads</h2>
<p>Jind — the headquarters of Jind district, often called "the heart of Haryana" due to its near-central geographic position in the state, named after the ancient Jai Devi (Jind Devi) Temple (the Jind Devi Mandir is one of Haryana's important goddess temples, dedicated to Jai Devi, a form of Durga — the town's name derives from this goddess), home to one of Haryana's largest grain markets (Jind's wheat and paddy Mandi is a major agricultural trade hub for the surrounding Haryana plains; mustard, sunflower, and cotton are also traded here), and an important rail junction on the Hisar-Narwana-Panipat and Delhi-Rohtak-Jind rail routes — giving Jind economic connections in all directions across Haryana. From birthday parties in the Civil Hospital Road area to corporate cakes at the large agricultural trading firms, from anniversary surprises in the Geeta Bhawan area to student cakes at the engineering and medical colleges — RedHeart covers all Jind zones: Central (Civil Hospital Road, Geeta Bhawan, Station Road), North (Narwana Road, Kaithal Road), South (Rohtak Road, Bhiwani Road), East (Panipat Road, Gohana Road, Sonipat), West (Hisar Road, Fatehabad Road, Hansi).</p>
<p>Our Jind cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jind, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Hospital Road, Geeta Bhawan, Station Road, Narwana Road, Kaithal Road, Rohtak Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jind?", answer: "Yes, same-day cake delivery is available across all Jind areas — Civil Hospital Road, Geeta Bhawan, Station Road, Narwana Road, and Kaithal Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Jind?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jind delivery." },
      { question: "Do you deliver midnight cakes in Jind?", answer: "Yes, midnight birthday cake delivery is available across Jind's central and residential zones." }
    ]
  },

  "hardoi": {
    cityName: "Hardoi",
    metaTitle: "Cake Delivery in Hardoi | Awadh Sugar Belt UP | RedHeart",
    metaDescription: "Order cakes online in Hardoi. Same-day delivery across Hardoi. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hardoi",
    metaKeyword: "cake delivery hardoi, order cake online hardoi, birthday cake hardoi, custom cake hardoi, same day cake delivery hardoi civil lines collector ganj lucknow road shahabad sugar mill",
    footerContent: `
<h2>Cake Delivery in Hardoi — Awadh's Sugar Belt, Collector Ganj's Commercial Hub, and Lucknow's Northern Satellite District</h2>
<p>Hardoi — the headquarters of Hardoi district in the Awadh region of Uttar Pradesh, one of UP's important sugarcane-growing districts (several large sugar mills — including the Hardoi Sugar Mills and other cooperative sugar mills — process the sugarcane from Hardoi's fertile alluvial plains; sugarcane is the dominant cash crop), a district that shares a long border with Lucknow district (Hardoi is just 100 km north of Lucknow, making it part of Lucknow's economic hinterland), and an important stop on the Lucknow-Shahjahanpur-Bareilly highway corridor through the Awadh plains — is a city of agricultural significance and regional trade importance. From birthday parties in the Civil Lines area to corporate cakes at the sugar mill administrative offices, from anniversary surprises in the Collector Ganj market area to student cakes at Hardoi's growing colleges — RedHeart covers all Hardoi zones: Central (Civil Lines, Collector Ganj, Station Road), North (Shahabad Road, Bilgram, Madhoganj), South (Lucknow Road, Sandila Road, Unnao border), East (Sitapur Road, Misrikh, Nimsar), West (Lakhimpur Road, Pihani, Beherimpur).</p>
<p>Our Hardoi cake range: Chocolate, Black Forest, Red Velvet, Mango (Awadhi Dussehri!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hardoi, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Collector Ganj, Station Road, Shahabad Road, Lucknow Road, Bilgram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hardoi?", answer: "Yes, same-day cake delivery is available across all Hardoi areas — Civil Lines, Collector Ganj, Station Road, and Shahabad Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hardoi?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hardoi delivery." },
      { question: "Do you deliver midnight cakes in Hardoi?", answer: "Yes, midnight birthday cake delivery is available across Hardoi's central and residential zones." }
    ]
  },

  "bijnor": {
    cityName: "Bijnor",
    metaTitle: "Cake Delivery in Bijnor | Ganga Belt UP | RedHeart",
    metaDescription: "Order cakes online in Bijnor. Same-day delivery across Bijnor. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bijnor",
    metaKeyword: "cake delivery bijnor, order cake online bijnor, birthday cake bijnor, custom cake bijnor, same day cake delivery bijnor civil lines najibabad nagina kotdwar road gandhi road sugar mill",
    footerContent: `
<h2>Cake Delivery in Bijnor — Ganga's Eastern Bank, Uttarakhand Border City, and UP's Sugar-Mango Heartland</h2>
<p>Bijnor — the headquarters of Bijnor district in western Uttar Pradesh, a district that sits on the eastern bank of the Ganga (several Ganga ghats in Bijnor district are important bathing spots for Hindus during Kumbh and seasonal fairs), bordering Uttarakhand's Kotdwar and Haridwar zones, a major sugar-producing district (Bijnor has some of UP's most productive sugar mills — the region's fertile Ganga-Ramganga doab produces high-sugar-content sugarcane; Bijnor's sugar goes to factories across western UP), and famously known for Bijnori mangoes (the region around Bijnor-Moradabad-Hapur is part of the famous UP mango belt that produces Dussehri, Langra, Chausa, and Safeda varieties of premium mangoes during May-July each year) — is a city of natural wealth at the Terai-plains transition. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from anniversary surprises in the Gandhi Road area to student cakes at Bijnor's colleges — RedHeart covers all Bijnor zones: Central (Civil Lines, Gandhi Road, Station Road), North (Najibabad Road, Kotdwar Road, Uttarakhand border), South (Moradabad Road, Noorpur, Dhanaura), East (Chandpur Road, Amroha), West (Muzaffarnagar Road, Kiratpur).</p>
<p>Our Bijnor cake range: Chocolate, Black Forest, Red Velvet, Mango (Bijnori Dussehri!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bijnor, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Gandhi Road, Station Road, Najibabad Road, Moradabad Road, Chandpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango (Dussehri), Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bijnor?", answer: "Yes, same-day cake delivery is available across all Bijnor areas — Civil Lines, Gandhi Road, Station Road, and Najibabad Road — for orders placed before 3 PM." },
      { question: "Do you offer Bijnori mango-flavoured cakes in Bijnor?", answer: "Yes! Bijnor district's famous Dussehri and Langra mangoes inspire our seasonal Mango cakes — a local taste of the famous UP mango belt, available during the mango season." },
      { question: "Are eggless cakes available in Bijnor?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bijnor delivery." }
    ]
  },

  "chittoor": {
    cityName: "Chittoor",
    metaTitle: "Cake Delivery in Chittoor | Mango City Andhra Pradesh | RedHeart",
    metaDescription: "Order cakes online in Chittoor. Same-day delivery across Chittoor. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chittoor",
    metaKeyword: "cake delivery chittoor, order cake online chittoor, birthday cake chittoor, custom cake chittoor, same day cake delivery chittoor katkur road collector office mangal nagar tirupati road",
    footerContent: `
<h2>Cake Delivery in Chittoor — Andhra Pradesh's Mango District Capital and Tirupati's Satellite City</h2>
<p>Chittoor — the headquarters of Chittoor district in southernmost Andhra Pradesh, famous as India's mango capital (Chittoor district is one of India's largest mango-producing districts — the Banganapalli mango, a premium GI-tagged variety, is grown extensively in Chittoor, and the district's mango output is exported to UAE, UK, US, and Singapore; the Renigunta and Chittoor mango yards handle millions of tonnes of mangoes each season, and the AP government's Horticulture department is headquartered in Chittoor for coordinating mango exports), the most important satellite city to Tirupati (only 85 km from Tirupati-Tirumala — one of the world's richest and most-visited temples), located on the Bangalore-Chennai NH-48 highway corridor — is a city of extraordinary agricultural-religious significance. From birthday parties in the Katkur Road residential area to corporate cakes at the large mango processing units, from anniversary surprises near the Collector Office to student cakes at Chittoor's colleges — RedHeart covers all Chittoor zones: Central (Katkur Road, Collector Office, Mangal Nagar), North (Tirupati Road, Piler Road, Puttur), South (Bangalore Road, Palamaner, Madanapalle), East (Vellore Road, Nagari), West (Kuppam Road, Krishna Border).</p>
<p>Our Chittoor cake range: Chocolate, Black Forest, Red Velvet, Mango (Banganapalli — the GI-tagged Chittoor mango!), Butterscotch, Photo Cakes, Fondant Tirupati-Balaji / mango-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chittoor, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katkur Road, Collector Office, Mangal Nagar, Tirupati Road, Bangalore Road, Nagari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mango (Banganapalli), Chocolate, Photo Cake, Black Forest, Tirupati Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chittoor?", answer: "Yes, same-day cake delivery is available across all Chittoor areas — Katkur Road, Collector Office, Mangal Nagar, and Tirupati Road — for orders placed before 3 PM." },
      { question: "Do you offer Banganapalli mango cakes in Chittoor?", answer: "Yes! Chittoor's world-famous Banganapalli mango — one of India's finest GI-tagged mango varieties, grown in Chittoor district's orchards — inspires our signature Mango cake. A local pride on every Chittoor birthday table." },
      { question: "Are eggless cakes available in Chittoor?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chittoor delivery." }
    ]
  },

  "koppal": {
    cityName: "Koppal",
    metaTitle: "Cake Delivery in Koppal | Hampi Gateway Karnataka | RedHeart",
    metaDescription: "Order cakes online in Koppal. Same-day delivery across Koppal. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Koppal",
    metaKeyword: "cake delivery koppal, order cake online koppal, birthday cake koppal, custom cake koppal, same day cake delivery koppal station road district head quarters hampi road tungabhadra bellary",
    footerContent: `
<h2>Cake Delivery in Koppal — Hampi's Northern Gateway, Tungabhadra's Valley, and Karnataka's Iron Ore Frontier</h2>
<p>Koppal — the headquarters of Koppal district in northeastern Karnataka, located in the Tungabhadra River valley, one of the least-known but strategically significant districts of Karnataka (Koppal sits between the UNESCO World Heritage Site of Hampi-Vijayanagara — 60 km to the south — and the iron ore heartland of Hospet-Bellary; Koppal town is the closest major urban centre for the northern approach to Hampi; the Koppal district has significant iron ore deposits; the Tungabhadra River defines much of Koppal's agricultural zone), home to the Gavisiddheshwara Swami math at Koppal (an important Lingayat religious institution that runs schools and colleges), and part of the ancient Kalachuri Kingdom's zone — is a city of archaeological and mineral significance. From birthday parties in the Station Road area to corporate cakes at the large ore mining offices, from anniversary surprises near the District Headquarters to student cakes at Koppal's colleges — RedHeart covers all Koppal zones: Central (Station Road, District Headquarters, Gangavati Road), North (Raichur Road, Sindhanur Road, Bellary Road), South (Hampi Road, Hospet Road, Gadag), East (Gangavati, Yelburga), West (Gadag Road, Kushtagi).</p>
<p>Our Koppal cake range: Chocolate, Black Forest, Red Velvet, Mango (Karnataka Safeda!), Butterscotch, Photo Cakes, Fondant Hampi / Vijayanagara-theme special cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koppal, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, District HQ, Gangavati Road, Hampi Road, Hospet Road, Raichur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hampi Vijayanagara Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Koppal?", answer: "Yes, same-day cake delivery is available across all Koppal areas — Station Road, District HQ, Gangavati Road, and Hampi Road — for orders placed before 3 PM." },
      { question: "Do you have Hampi / Vijayanagara-themed cakes in Koppal?", answer: "Yes! The ruins of the Vijayanagara Empire at Hampi — 60 km from Koppal and one of the world's greatest archaeological sites — inspire our Hampi fondant cakes with intricate Vijayanagara chariot and temple motifs." },
      { question: "Are eggless cakes available in Koppal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Koppal delivery." }
    ]
  },

  "mandya": {
    cityName: "Mandya",
    metaTitle: "Cake Delivery in Mandya | Sugar City Karnataka | RedHeart",
    metaDescription: "Order cakes online in Mandya. Same-day delivery across Mandya. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mandya",
    metaKeyword: "cake delivery mandya, order cake online mandya, birthday cake mandya, custom cake mandya, same day cake delivery mandya KRS dam mysore road bangalore road sugar mill cauvery belt",
    footerContent: `
<h2>Cake Delivery in Mandya — Karnataka's Sugar Bowl, KRS Dam's City, and Cauvery River's Agricultural Heartland</h2>
<p>Mandya — the headquarters of Mandya district in south Karnataka, the "Sugar City" of Karnataka (Mandya's Cauvery command area produces the majority of Karnataka's sugarcane — the Mysore Sugar Company, established in 1933, is one of India's oldest sugar mills; the Mandya cooperative sugar sector is the backbone of the Karnataka sugar industry; Mandya's jaggery is famous across South India), home to the KRS Dam (Krishnarajasagara Reservoir — one of South India's most famous dams, built on the Cauvery River in 1924 under the visionary engineer Sir M. Visvesvaraya; the Brindavan Gardens — India's most famous illuminated garden, attracting 2 million visitors per year — is adjacent to the dam; the dam supplies drinking water to Mysore, Mandya, and Bangalore), and an important city on the Bangalore-Mysore NH-275 corridor — is one of Karnataka's most agriculturally productive cities. From birthday parties in the Sugar Mill residential colony to corporate cakes at the large sugar company offices, from anniversary surprises near the KRS Dam area to student cakes at Mandya's colleges — RedHeart covers all Mandya zones: Central (Mysore Road, Bangalore Road, Station Road), North (Maddur Road, Channapatna Road), South (Srirangapatna Road, Shivanasamudra), East (Malavalli Road, Kollegal), West (Hassan Road, Nagamangala).</p>
<p>Our Mandya cake range: Chocolate, Black Forest, Red Velvet, Mango (Cauvery belt Badami!), Butterscotch, Photo Cakes, Fondant KRS Dam / Brindavan Garden-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandya, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mysore Road, Bangalore Road, Station Road, Maddur Road, Srirangapatna Road, KRS Dam area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, KRS Dam Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mandya?", answer: "Yes, same-day cake delivery is available across all Mandya areas — Mysore Road, Bangalore Road, Station Road, and Maddur Road — for orders placed before 3 PM." },
      { question: "Do you have KRS Dam / Brindavan Garden-themed cakes in Mandya?", answer: "Yes! The iconic KRS Dam and the adjacent Brindavan Gardens — one of India's most visited garden attractions — inspire our Mandya fondant cakes with KRS Dam motifs. A local pride design for Mandya celebrations." },
      { question: "Are eggless cakes available in Mandya?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mandya delivery." }
    ]
  },

  "kasaragod": {
    cityName: "Kasaragod",
    metaTitle: "Cake Delivery in Kasaragod | Seven Languages City Kerala | RedHeart",
    metaDescription: "Order cakes online in Kasaragod. Same-day delivery across Kasaragod. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kasaragod",
    metaKeyword: "cake delivery kasaragod, order cake online kasaragod, birthday cake kasaragod, custom cake kasaragod, same day cake delivery kasaragod bedaduka main road bekal fort seven languages",
    footerContent: `
<h2>Cake Delivery in Kasaragod — Land of Seven Languages, Bekal Fort's Coastal City, and Kerala's Northern Cultural Frontier</h2>
<p>Kasaragod — the northernmost district headquarters of Kerala, famously called the "Land of Seven Languages" (Malayalam, Tulu, Kannada, Konkani, Beary Bashe, Marathi, and Hindi are all spoken natively in Kasaragod district — an extraordinary linguistic diversity in a small area, reflecting the district's unique position at the convergence of Kerala, Karnataka, and Goa cultural zones), home to the Bekal Fort (one of South India's largest and best-preserved forts — a 1,000-year-old laterite fort perched dramatically on a headland overlooking the Arabian Sea, 16 km from Kasaragod town; featured in the Bollywood film Bombay; a major tourist attraction), the Malik Deenar Mosque at Kasaragod (one of India's oldest mosques — associated with Malik ibn Dinar, one of the Prophet Muhammad's companions, who is said to have brought Islam to India), and a city with a substantial Beary Muslim community with its own unique Beary Bashe language — is Kerala's most culturally diverse city. From birthday parties in the Bedaduka residential area to corporate cakes at the large cashew processing units, from Beary community wedding anniversary cakes to student cakes at the NIT Calicut-Kasaragod campus — RedHeart covers all Kasaragod zones: Central (Bedaduka, Main Road, Station Road), North (Mangalore Road, Karnataka border), South (Kanhangad Road, Payyanur Road, Kannur), East (Coorg Road, Madikeri Road, Sullia), West (Bekal Fort Road, Arabian Sea coastal belt).</p>
<p>Our Kasaragod cake range: Chocolate, Black Forest, Red Velvet, Mango (Malabar Alphonso!), Butterscotch, Photo Cakes, Fondant Bekal Fort / Seven Languages-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasaragod, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bedaduka, Main Road, Station Road, Bekal Fort Road, Kanhangad Road, Mangalore Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Bekal Fort Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kasaragod?", answer: "Yes, same-day cake delivery is available across all Kasaragod areas — Bedaduka, Main Road, Station Road, and Bekal Fort Road — for orders placed before 3 PM." },
      { question: "Do you have Bekal Fort-themed cakes in Kasaragod?", answer: "Yes! The Bekal Fort — one of South India's most iconic coastal forts, overlooking the Arabian Sea 16 km from Kasaragod — inspires our Bekal Fort fondant cakes. A proud local landmark design for Kasaragod celebrations." },
      { question: "Are eggless cakes available in Kasaragod?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kasaragod delivery." }
    ]
  },

  "chapra": {
    cityName: "Chapra",
    metaTitle: "Cake Delivery in Chapra | Saran District Bihar | RedHeart",
    metaDescription: "Order cakes online in Chapra. Same-day delivery across Chapra. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Chapra",
    metaKeyword: "cake delivery chapra, order cake online chapra saran, birthday cake chapra, custom cake chapra, same day cake delivery chapra civil court road siwan road gandhi maidan hajipur road",
    footerContent: `
<h2>Cake Delivery in Chapra — Saran District's Capital, JP Narayan's Homeland, and Ganga-Ghaghra Confluence City</h2>
<p>Chapra (Chhapra) — the headquarters of Saran district in Bihar, located at the confluence of the Ganga and Ghaghra rivers (this doab — the fertile alluvial land between these two great rivers — is one of Bihar's most agriculturally productive zones), the hometown of Jayaprakash Narayan (JP Narayan — the great freedom fighter, socialist leader, and the leader of India's 1974 Sampurna Kranti (Total Revolution) movement that mobilised millions against the Emergency — was born in Sitagarhi village, Saran district; Chapra is the closest city, and the JP Narayan Airport in Patna is named after him), a major trading city for maize, wheat, banana, and litchi cultivation of the Saran district — is a city of political history and agricultural wealth. From birthday parties in the Civil Lines area to corporate cakes at the large grain trading firms, from anniversary surprises near the Gandhi Maidan to student cakes at Chapra's growing colleges — RedHeart covers all Chapra zones: Central (Civil Lines, Court Road, Gandhi Maidan), North (Siwan Road, Muzaffarpur Road, Ghaghra belt), South (Ganga ghats, Hajipur Road, Patna Road), East (Revelganj Road, Sonepur), West (Mairwa Road, Ballia border).</p>
<p>Our Chapra cake range: Chocolate, Black Forest, Red Velvet, Mango (Litchi-flavour from Saran belt!), Butterscotch, Photo Cakes, Fondant JP Narayan tribute / Bihar theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chapra, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Court Road, Gandhi Maidan, Siwan Road, Hajipur Road, Revelganj Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Chapra?", answer: "Yes, same-day cake delivery is available across all Chapra areas — Civil Lines, Court Road, Gandhi Maidan, and Siwan Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Chapra?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Chapra delivery." },
      { question: "Do you deliver midnight cakes in Chapra?", answer: "Yes, midnight birthday cake delivery is available across Chapra's central and residential zones." }
    ]
  },

  "ara": {
    cityName: "Ara",
    metaTitle: "Cake Delivery in Ara | Bhojpur District Bihar | RedHeart",
    metaDescription: "Order cakes online in Ara. Same-day delivery across Ara. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Ara",
    metaKeyword: "cake delivery ara, order cake online ara bhojpur, birthday cake ara, custom cake ara, same day cake delivery ara civil lines main road patna road veer kunwar singh shaheed chowk",
    footerContent: `
<h2>Cake Delivery in Ara — Bhojpur's Capital, Veer Kunwar Singh's City, and the 1857 Revolt's Bihar Hero</h2>
<p>Ara (Arrah) — the headquarters of Bhojpur district in Bihar, one of UP-Bihar's most historically charged cities for the 1857 revolt (Veer Kunwar Singh — one of the most heroic figures of India's 1857 First War of Independence — was born at Jagdishpur, just 40 km from Ara; the 80-year-old Rajput chief fought the British army brilliantly with guerrilla tactics in the Bhojpur-Ara region, winning multiple battles; Veer Kunwar Singh's story is especially celebrated in Bhojpur-Saran, and the annual Veer Kunwar Singh Jayanti is a public holiday in Bihar), a major grain and vegetable trading centre for the Bhojpur plains (wheat, paddy, and maize from the fertile Son and Ganga doab), and home to one of India's finest centres of Bhojpuri folk music and culture (Bhojpur is the heartland of Bhojpuri culture — music, cinema, and literature — making Ara a city of cultural significance beyond its size). From birthday parties in the Civil Lines area to corporate cakes near the Patna Road, from anniversary surprises near the famous Shaheed Chowk to student cakes at Ara's colleges — RedHeart covers all Ara zones: Central (Civil Lines, Main Road, Patna Road), North (Ghaghra Belt, Chapra Road, Ballia Road), South (Son River Belt, Rohtas Road, Sasaram Road), East (Patna Road, Bihta), West (Buxar Road, Dumraon).</p>
<p>Our Ara cake range: Chocolate, Black Forest, Red Velvet, Mango (Bhojpur belt litchi-mango!), Butterscotch, Photo Cakes, Fondant Veer Kunwar Singh / 1857 tribute cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ara, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Main Road, Patna Road, Shaheed Chowk, Chapra Road, Buxar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Ara?", answer: "Yes, same-day cake delivery is available across all Ara areas — Civil Lines, Main Road, Patna Road, Shaheed Chowk, and Buxar Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Ara?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Ara delivery." },
      { question: "Do you deliver midnight cakes in Ara?", answer: "Yes, midnight birthday cake delivery is available across Ara's central and residential zones." }
    ]
  },

  "jalpaiguri": {
    cityName: "Jalpaiguri",
    metaTitle: "Cake Delivery in Jalpaiguri | Tea Garden City North Bengal | RedHeart",
    metaDescription: "Order cakes online in Jalpaiguri. Same-day delivery across Jalpaiguri. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jalpaiguri",
    metaKeyword: "cake delivery jalpaiguri, order cake online jalpaiguri, birthday cake jalpaiguri, custom cake jalpaiguri, same day cake delivery jalpaiguri city bazaar tea garden dooars BVB NJP road",
    footerContent: `
<h2>Cake Delivery in Jalpaiguri — Dooars Tea Garden City, Teesta River Belt, and Bhutan-Border's Commercial Hub</h2>
<p>Jalpaiguri — the headquarters of Jalpaiguri district in the sub-Himalayan Terai of North Bengal, the gateway to the Dooars (the famous tea garden belt of Jalpaiguri — the word "Dooars" means "doors" in Nepali, referring to the passes or doors into Bhutan and Sikkim; the Dooars region of Jalpaiguri has over 160 tea gardens producing CTC and orthodox teas that go to Kolkata's auction houses; the Jalpaiguri tea is prized for its strong, full-bodied character — different from Darjeeling's delicate muscatel flavour), the Teesta River corridor (Jalpaiguri sits along the Teesta — one of India's fastest-flowing Himalayan rivers, which comes roaring down from Sikkim's glaciers through the Teesta Valley before entering the plains near Jalpaiguri), close to Gorumara National Park (a UNESCO-heritage reserve where one-horned Indian rhinos, gaur, and elephants roam), and the most important commercial city between Siliguri and Cooch Behar — is a city of tea culture and ecological wealth. From birthday parties in the City Bazaar area to corporate cakes at the large tea companies, from anniversary surprises in the BVB area to student cakes near Jalpaiguri colleges — RedHeart covers all Jalpaiguri zones: Central (City Bazaar, Station Road, Hospital Road), North (Siliguri Road, NJP Road, Maynaguri), South (Cooch Behar Road, Alipurduar Road, Dhupguri), East (Dooars belt, Malbazar, Lataguri), West (Mal River belt, Rajganj).</p>
<p>Our Jalpaiguri cake range: Chocolate, Black Forest, Red Velvet, Mango (Dooars Mango!), Tea-Caramel (Dooars CTC tea inspired!), Photo Cakes, Fondant Dooars Tea Garden / Rhino-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalpaiguri, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">City Bazaar, Station Road, Hospital Road, NJP Road, Dooars Belt, Cooch Behar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tea-Caramel Dooars, Rhino Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jalpaiguri?", answer: "Yes, same-day cake delivery is available across all Jalpaiguri areas — City Bazaar, Station Road, Hospital Road, and NJP Road — for orders placed before 3 PM." },
      { question: "Do you have Dooars tea-flavoured cakes in Jalpaiguri?", answer: "Yes! Jalpaiguri's Dooars tea gardens — over 160 estates producing India's finest CTC tea — inspire our Tea-Caramel cake, made with a Dooars tea flavour profile. A uniquely local cake for Jalpaiguri birthdays." },
      { question: "Are eggless cakes available in Jalpaiguri?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jalpaiguri delivery." }
    ]
  },

  "baripada": {
    cityName: "Baripada",
    metaTitle: "Cake Delivery in Baripada | Mayurbhanj Odisha | RedHeart",
    metaDescription: "Order cakes online in Baripada. Same-day delivery across Baripada. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Baripada",
    metaKeyword: "cake delivery baripada, order cake online baripada, birthday cake baripada, custom cake baripada, same day cake delivery baripada mayurbhanj simlipal jharpokhari hospital road collector office",
    footerContent: `
<h2>Cake Delivery in Baripada — Mayurbhanj's Capital, Simlipal National Park's Gateway, and Odisha's Tribal Forest City</h2>
<p>Baripada — the headquarters of Mayurbhanj district in northern Odisha, gateway to Simlipal National Park (one of India's most important biosphere reserves — the Simlipal Tiger Reserve and Biosphere Reserve, 60 km from Baripada, is one of India's largest protected areas covering 2,750 sq km of sal forests, with significant populations of tigers, elephants, leopards, gaur, and rare birds including the Malabar pied hornbill; Simlipal is one of Odisha's finest wildlife destinations and is managed as a UNESCO Biosphere Reserve), the centre of Santali tribal culture (the Santal people — one of India's largest tribal communities — are heavily concentrated in Mayurbhanj; the Santali language, written in the Ol Chiki script (invented by Pandit Raghunath Murmu in Mayurbhanj), is now a scheduled language of India, and Baripada has important Santali cultural institutions), and home to one of Odisha's famous Rath Yatras — the Baripada Rath Yatra, which is said to begin before the Puri Rath Yatra by custom — is a city of tribal culture and forest wealth. From birthday parties in the Jharpokhari area to corporate cakes at the forest department offices, from anniversary surprises near the Hospital Road to student cakes at Baripada's colleges — RedHeart covers all Baripada zones: Central (Hospital Road, Collector Office, Station Road), North (Jharkhand Border, Chakulia Road), South (Simlipal Road, Jashipur Road, Keonjhar Road), East (Balasore Road, Udala), West (Bamanghaty, Rairangpur).</p>
<p>Our Baripada cake range: Chocolate, Black Forest, Red Velvet, Mango (Odisha Langra!), Butterscotch, Photo Cakes, Fondant Simlipal Tiger / Ol Chiki Santali-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baripada, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hospital Road, Collector Office, Station Road, Simlipal Road, Jharkhand Border Road, Balasore Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Simlipal Tiger Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Baripada?", answer: "Yes, same-day cake delivery is available across all Baripada areas — Hospital Road, Collector Office, Station Road, and Simlipal Road — for orders placed before 3 PM." },
      { question: "Do you have Simlipal Tiger-themed cakes in Baripada?", answer: "Yes! The Simlipal Tiger Reserve — one of India's largest and most biodiverse protected areas, gateway of which is Baripada — inspires our Simlipal Tiger fondant cakes. A proud local wildlife design." },
      { question: "Are eggless cakes available in Baripada?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Baripada delivery." }
    ]
  },

  "mussoorie": {
    cityName: "Mussoorie",
    metaTitle: "Cake Delivery in Mussoorie | Queen of Hills Uttarakhand | RedHeart",
    metaDescription: "Order cakes online in Mussoorie. Same-day delivery across Mussoorie. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mussoorie",
    metaKeyword: "cake delivery mussoorie, order cake online mussoorie, birthday cake mussoorie, custom cake mussoorie, same day cake delivery mussoorie mall road library chowk gun hill landour hemkund IAS academy",
    footerContent: `
<h2>Cake Delivery in Mussoorie — Queen of Hills, IAS Academy's City, and Ruskin Bond's Himalayan Home</h2>
<p>Mussoorie — the famous hill station in Uttarakhand's Dehradun district, the "Queen of Hills" (Mussoorie, at 2,000 metres in the Garhwal Himalayas, was one of British India's most beloved hill retreats — the British established it in 1823, and the Mall Road, Landour, Gun Hill, and Camel's Back Road became iconic promenades; Mussoorie offers stunning views of the Doon Valley below and the Himalayan peaks above), home of Ruskin Bond (the beloved Indian-English author has lived in Landour, Mussoorie for most of his life; his stories about Mussoorie's seasons, school life, and the Himalayas have made Mussoorie one of India's most literarily celebrated hill stations), home to the Lal Bahadur Shastri National Academy of Administration — LBSNAA (the IAS Academy where all IAS, IPS, IFS, and other Group A civil services probationers receive their foundational training; every IAS officer in India spent time in Mussoorie), and a year-round honeymoon and holiday destination drawing millions of tourists — is a hill city of unmatched fame. From birthday parties in the Mall Road hotel zone to corporate cakes at the LBSNAA academy, from anniversary surprises in the Landour area to honeymoon cakes at the luxury resorts — RedHeart covers all Mussoorie zones: Central (Mall Road, Library Chowk, Gandhi Chowk), North (Landour, Char Dukan, Camel's Back Road), South (Dehradun Road, Picture Palace), East (Gun Hill, Kempty Falls Road), West (Barlowganj, Bhatta Falls).</p>
<p>Our Mussoorie cake range: Chocolate, Black Forest, Red Velvet, Apple-Cream (Garhwal orchards!), Strawberry (Mussoorie Strawberries!), Photo Cakes, Fondant Himalayan / Queen of Hills-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mussoorie, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mall Road, Library Chowk, Gandhi Chowk, Landour, Gun Hill, LBSNAA IAS Academy area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Strawberry, Apple-Cream, Chocolate, Himalayan Fondant, Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mussoorie?", answer: "Yes, same-day cake delivery is available across all Mussoorie areas — Mall Road, Library Chowk, Gandhi Chowk, Landour, and Gun Hill — for orders placed before 3 PM." },
      { question: "Do you have Mussoorie strawberry and apple cakes?", answer: "Yes! Mussoorie's fresh strawberries — grown in the cool Himalayan air around the hill station — inspire our Strawberry cake, and Garhwal's apple orchards inspire our Apple-Cream cake. Both are uniquely fresh hill-flavour options." },
      { question: "Do you deliver cakes to the LBSNAA IAS Academy in Mussoorie?", answer: "Yes, the Lal Bahadur Shastri National Academy of Administration (LBSNAA) campus and its residential zones are covered under our Mussoorie delivery." }
    ]
  },

  "hoshiarpur": {
    cityName: "Hoshiarpur",
    metaTitle: "Cake Delivery in Hoshiarpur | Shivalik Hills Punjab | RedHeart",
    metaDescription: "Order cakes online in Hoshiarpur. Same-day delivery across Hoshiarpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hoshiarpur",
    metaKeyword: "cake delivery hoshiarpur, order cake online hoshiarpur, birthday cake hoshiarpur, custom cake hoshiarpur, same day cake delivery hoshiarpur civil lines mahilpur tanda beeas river shivalik",
    footerContent: `
<h2>Cake Delivery in Hoshiarpur — Punjab's Shivalik Gateway, Beas River Valley, and India's Highest Literacy District</h2>
<p>Hoshiarpur — the headquarters of Hoshiarpur district in Punjab, a city that holds a unique distinction in India: Hoshiarpur district consistently reports Punjab's highest literacy rate (Hoshiarpur's literacy rates — hovering around 84–87% — are among the highest in any district of northern India; the district's strong tradition of education and migration abroad, especially to Canada, UK, and USA, has made Hoshiarpur a hub of education, banking, and remittances from the large NRI population), a city at the base of the Shivalik hills (Hoshiarpur lies at the transition between the Shivalik sub-Himalayan forest range and the Punjab plains — the Beas River flows nearby; the Sur Talaab wetland, just outside the city, is an important bird habitat), known for the Hoshiarpur Juttis (the city is a significant centre for Punjab's traditional leather footwear craft), and a major army cantonment city — is Punjab's most literate and internationally connected small city. From birthday parties in the Civil Lines area to corporate cakes at the large educational institutions, from anniversary surprises in the Mahilpur Road area to student cakes at the NRI Foundation's colleges — RedHeart covers all Hoshiarpur zones: Central (Civil Lines, Station Road, GT Road), North (Dasuya Road, Mukerian, Tanda Road), South (Phagwara Road, Nawanshahr Road, Jalandhar Road), East (Himachal Border, Una Road, Garhshankar), West (Beas River, Phagwara).</p>
<p>Our Hoshiarpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Punjab's Chaunsa!), Butterscotch, Photo Cakes, Fondant Shivalik / Punjab heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hoshiarpur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, GT Road, Dasuya Road, Tanda Road, Mahilpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hoshiarpur?", answer: "Yes, same-day cake delivery is available across all Hoshiarpur areas — Civil Lines, Station Road, GT Road, Dasuya Road, and Tanda Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hoshiarpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hoshiarpur delivery." },
      { question: "Do you deliver midnight cakes in Hoshiarpur?", answer: "Yes, midnight birthday cake delivery is available across Hoshiarpur's central and residential zones." }
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
