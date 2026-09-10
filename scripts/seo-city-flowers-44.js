// Batch 44 — 15 cities:
// Chhattisgarh: Balrampur (CG)
// Kerala: Kasaragod
// Northeast: Gangtok (Sikkim), Agartala (Tripura)
// Uttar Pradesh: Ambedkar Nagar, Sant Kabir Nagar, Mahoba, Chandauli, Ballia
// Bihar: Rohtas, Buxar, Samastipur, Sitamarhi, West Champaran (Bettiah)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "balrampur-cg": {
    cityName: "Balrampur",
    metaTitle: "Flower Delivery in Balrampur | Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Balrampur, Chhattisgarh. Same-day delivery near Surguja hills & across Balrampur CG. From ₹399.",
    h1: "Online Flower Delivery in Balrampur",
    metaKeyword: "flower delivery balrampur chhattisgarh, online flowers balrampur cg, florist balrampur chhattisgarh, flowers balrampur cg surguja rihand tatapani",
    footerContent: `
<h2>Flower Delivery in Balrampur — Tatapani's Hot Springs District in Northern Chhattisgarh</h2>
<p>Balrampur, the headquarters of Balrampur district in Chhattisgarh (created 2012, carved from Surguja), is in northern Chhattisgarh at the edge of the Surguja highlands. The district is best known for Tatapani — a village on the Rihand River with natural hot springs (geothermal activity from the underlying Gondwana strata); Tatapani's hot sulphur springs attract visitors year-round and host a famous Makar Sankranti Mela. The Balrampur district's Kanhar River forms the northern boundary with Uttar Pradesh. The district has significant Oraon and Gond tribal communities in the Surguja hills. The Ramdaha waterfall near Balrampur town is a scenic local attraction. The Vindhya-Satpura-Gondwana geological boundary makes this area rich in coal and minerals.</p>
<p>RedHeart delivers flowers across Balrampur CG — Main Market, Ambikapur Road, Tatapani Road, Rajpur area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balrampur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ambikapur Road, Tatapani Road, Rajpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Tatapani Makar Sankranti Mela available from Balrampur CG?", answer: "Yes, the Tatapani hot springs Makar Sankranti Mela draws large crowds to Balrampur district. Seasonal marigold and puja flower arrangements for the fair are available." },
      { question: "Can I get flowers for Diwali in Balrampur Chhattisgarh?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Balrampur, Chhattisgarh for same-day delivery." },
      { question: "Do you deliver flowers same day in Balrampur Chhattisgarh?", answer: "Yes, same-day delivery is available across Balrampur, Chhattisgarh for orders placed before 3 PM." }
    ]
  },

  "kasaragod": {
    cityName: "Kasaragod",
    metaTitle: "Flower Delivery in Kasaragod | Seven Languages Kerala | RedHeart",
    metaDescription: "Order flowers in Kasaragod, Kerala. Same-day delivery near Bekal Fort & across Kasaragod. From ₹399.",
    h1: "Online Flower Delivery in Kasaragod",
    metaKeyword: "flower delivery kasaragod, online flowers kasaragod kerala, florist kasaragod, flowers kasaragod bekal fort seven languages tulu kannada arabic",
    footerContent: `
<h2>Flower Delivery in Kasaragod — Kerala's Northern Frontier, the City of Seven Languages</h2>
<p>Kasaragod, the northernmost district of Kerala bordering Karnataka's Dakshina Kannada, is famously called the "Land of Seven Languages" — Malayalam, Kannada, Tulu, Konkani, Marathi, Beary Arabic (an indigenous Arabic-based dialect of the Muslim Beary community), and Urdu are all spoken daily in this compact coastal district. The Bekal Fort — the largest and best-preserved fort in Kerala, built in the 17th century on a promontory jutting into the Arabian Sea — has been featured in Bollywood films and is one of South India's most photogenic heritage structures. Kasaragod's Theyyam traditions (the Malabar district's spectacular deity-possession ritual art) and its Yakshagana theatre (a Karnataka-origin theatrical tradition that has deeply integrated into the district's culture) are celebrated art forms.</p>
<p>RedHeart delivers flowers across Kasaragod — Main Road, Bekal Road, Mangalore Road, Kanhangad area, and Station Road. Our range includes roses, anthuriums, jasmine, and seasonal Kerala bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kasaragod, Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Bekal Road, Mangalore Road, Kanhangad, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, anthuriums, jasmine, seasonal Kerala bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Bekal Fort beach resort anniversary from Kasaragod?", answer: "Yes, the Bekal Fort area has beautiful resort hotels facing the Arabian Sea. Rose and anthurium bouquets for romantic or anniversary stays near Bekal can be delivered in Kasaragod." },
      { question: "Are flowers for Onam available in Kasaragod?", answer: "Yes, Onam pookalam (floral carpet) flowers — marigolds, chrysanthemums, and seasonal blooms — for the Onam celebration are available in Kasaragod." },
      { question: "Do you deliver flowers same day in Kasaragod?", answer: "Yes, same-day delivery is available across Kasaragod for orders placed before 3 PM." }
    ]
  },

  "gangtok": {
    cityName: "Gangtok",
    metaTitle: "Flower Delivery in Gangtok | Sikkim Capital | RedHeart",
    metaDescription: "Order flowers in Gangtok, Sikkim. Same-day delivery near Rumtek Monastery & across Gangtok. From ₹399.",
    h1: "Online Flower Delivery in Gangtok",
    metaKeyword: "flower delivery gangtok, online flowers gangtok sikkim, florist gangtok, flowers gangtok sikkim himalaya orchid rhododendron monastery",
    footerContent: `
<h2>Flower Delivery in Gangtok — Himalayan Orchid City and Sikkim's Monastery-Studded Capital</h2>
<p>Gangtok, the capital of Sikkim on a ridge of the southern Himalayas at 1,650 metres, is one of India's most spectacularly positioned cities — on a clear day Kangchenjunga (the world's third-highest mountain) dominates the northern skyline. Sikkim is India's most biologically diverse state (over 5,000 species of flowering plants including 550 orchid species and 36 rhododendron species), and Gangtok's flower markets offer exotic Himalayan orchids, rhododendrons, and marigolds. The Rumtek Monastery (the seat of the Kagyu lineage of Tibetan Buddhism), the Namgyal Institute of Tibetology, the Enchey Monastery, and the cable-car up to Tashiling make Gangtok a rich cultural destination. The Tibetan community's Losar (Tibetan New Year) and Saga Dawa festivals transform the city with prayer flags and butter lamps.</p>
<p>RedHeart delivers flowers across Gangtok — MG Marg, Tibet Road, NH10 area, Ranipool area, and Tadong area. Our range includes orchids, roses, marigolds, rhododendrons, and seasonal Himalayan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gangtok, Sikkim</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">MG Marg, Tibet Road, NH10, Ranipool, Tadong</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orchids, roses, rhododendrons, Himalayan seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are Sikkim orchids and rhododendrons available for delivery in Gangtok?", answer: "Yes, Gangtok's floriculture market offers Sikkim's extraordinary orchids and rhododendrons. These can be included in bouquets for same-day delivery in Gangtok." },
      { question: "Can I get flowers for a Kangchenjunga view hotel anniversary in Gangtok?", answer: "Yes, Gangtok's mountain-view hotels and boutique stays are perfect for anniversaries. Orchid and rose bouquets for special Himalayan hotel moments can be delivered same-day." },
      { question: "Do you deliver flowers same day in Gangtok?", answer: "Yes, same-day delivery is available across Gangtok for orders placed before 3 PM." }
    ]
  },

  "agartala": {
    cityName: "Agartala",
    metaTitle: "Flower Delivery in Agartala | Tripura Capital | RedHeart",
    metaDescription: "Order flowers in Agartala, Tripura. Same-day delivery near Ujjayanta Palace & across Agartala. From ₹399.",
    h1: "Online Flower Delivery in Agartala",
    metaKeyword: "flower delivery agartala, online flowers agartala tripura, florist agartala, flowers agartala ujjayanta palace tripura bangladesh border",
    footerContent: `
<h2>Flower Delivery in Agartala — Tripura's Royal Capital on the Bangladesh Border</h2>
<p>Agartala, the capital of Tripura and its only large city, is one of India's most geographically unusual capitals — it is almost completely surrounded by Bangladesh (Tripura shares a 856 km border with Bangladesh and only 158 km with the rest of India). The Ujjayanta Palace (built 1901, a Mughal-Renaissance hybrid palace of the Tripuri Manikya royal family) is now a state museum and the city's centrepiece. The Neermahal (a water palace on the Rudrasagar lake, built in 1930 — one of the two water palaces in India, the other being Jag Mandir at Udaipur) is a remarkable heritage attraction 53 km from Agartala. Tripura's tribal communities (Tripuri, Jamatia, Reang, Halam) have rich cultural traditions, and the Kharchi Puja (14-deity tribal festival) and Ker Puja are uniquely Tripuri ceremonies.</p>
<p>RedHeart delivers flowers across Agartala — Palace Compound area, Battala Market, Akhaura Road, Airport Road, and Station Road. Our range includes roses, marigolds, orchids, and seasonal Northeast bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agartala, Tripura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palace Compound, Battala Market, Akhaura Road, Airport Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Northeast bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Durga Puja available in Agartala?", answer: "Yes, Durga Puja is Tripura's biggest festival (the state has a significant Bengali Hindu community). Marigold garlands and festive bouquets for the Durga Puja mandaps are available in Agartala." },
      { question: "Can I get flowers for Christmas in Agartala?", answer: "Yes, Agartala has a significant Christian tribal community. Christmas roses, white lilies, and poinsettias are available for the festive season." },
      { question: "Do you deliver flowers same day in Agartala?", answer: "Yes, same-day delivery is available across Agartala for orders placed before 3 PM." }
    ]
  },

  "ambedkar-nagar": {
    cityName: "Ambedkar Nagar",
    metaTitle: "Flower Delivery in Ambedkar Nagar | UP | RedHeart",
    metaDescription: "Order flowers in Ambedkar Nagar, Uttar Pradesh. Same-day delivery near Faizabad & across Ambedkar Nagar. From ₹399.",
    h1: "Online Flower Delivery in Ambedkar Nagar",
    metaKeyword: "flower delivery ambedkar nagar, online flowers ambedkar nagar up, florist ambedkar nagar, flowers ambedkar nagar akbarpur tanda awadh",
    footerContent: `
<h2>Flower Delivery in Ambedkar Nagar — Awadh's Weaving District Named for the Constitution's Architect</h2>
<p>Ambedkar Nagar, in the Ghaghra River plain of eastern Uttar Pradesh, is the headquarters of Ambedkar Nagar district (created 1995, named in honour of B.R. Ambedkar, the architect of the Indian Constitution). The district's two main towns are Akbarpur (the district headquarters) and Tanda (the commercial hub). Tanda is one of UP's major handloom weaving centres — the Tanda silk and cotton sari tradition, produced on power looms and handlooms, supplies markets across India. The district is close to the Faizabad-Ayodhya religious circuit and has significant Dalit Bahujan communities who are central to the political narrative that honours Ambedkar. The Bhim Jayanti (Ambedkar's birthday, 14 April) is celebrated with particular fervour here.</p>
<p>RedHeart delivers flowers across Ambedkar Nagar — Main Market, Akbarpur area, Tanda area, Allapur, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambedkar Nagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Akbarpur, Tanda, Allapur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Diwali available in Ambedkar Nagar?", answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Ambedkar Nagar for same-day delivery." },
      { question: "Can I get birthday flowers in Ambedkar Nagar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ambedkar Nagar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Ambedkar Nagar?", answer: "Yes, same-day delivery is available across Ambedkar Nagar for orders placed before 3 PM." }
    ]
  },

  "sant-kabir-nagar": {
    cityName: "Sant Kabir Nagar",
    metaTitle: "Flower Delivery in Sant Kabir Nagar | UP | RedHeart",
    metaDescription: "Order flowers in Sant Kabir Nagar, Uttar Pradesh. Same-day delivery near Maghar & across Sant Kabir Nagar. From ₹399.",
    h1: "Online Flower Delivery in Sant Kabir Nagar",
    metaKeyword: "flower delivery sant kabir nagar, online flowers sant kabir nagar up, florist sant kabir nagar, flowers sant kabir nagar maghar kabir mausoleum gorakhpur",
    footerContent: `
<h2>Flower Delivery in Sant Kabir Nagar — The District Named for the Mystic Weaver-Saint of Maghar</h2>
<p>Sant Kabir Nagar, in eastern Uttar Pradesh near Gorakhpur, is the headquarters of Sant Kabir Nagar district — named in honour of Kabir Das, the 15th-century mystic poet-saint whose Nirguni bhakti verses continue to resonate across religious boundaries (beloved by Hindus, Muslims, and Sikhs alike). Kabir's death place and mausoleum (the Kabir Mazar and the adjacent Hindu Samadhi) is at Maghar — a town in this district — and the two shrines sitting side by side represent the saint's radical message of religious unity. The annual Kabir Festival at Maghar draws thousands of devotees of all faiths. The district's handloom weaving tradition (Khalilabad's textile cluster is adjacent) continues Kabir's heritage as a weaver by caste.</p>
<p>RedHeart delivers flowers across Sant Kabir Nagar — Main Market, Khalilabad area, Maghar area, Gorakhpur Road, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sant Kabir Nagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Khalilabad, Maghar, Gorakhpur Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kabir Mazar tribute available in Sant Kabir Nagar?", answer: "Yes, rose petals and marigold chadar flowers for the Kabir Mazar (dargah) and Samadhi at Maghar are available in Sant Kabir Nagar." },
      { question: "Can I get birthday flowers in Sant Kabir Nagar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sant Kabir Nagar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sant Kabir Nagar?", answer: "Yes, same-day delivery is available across Sant Kabir Nagar for orders placed before 3 PM." }
    ]
  },

  "mahoba": {
    cityName: "Mahoba",
    metaTitle: "Flower Delivery in Mahoba | Chandela Bundelkhand UP | RedHeart",
    metaDescription: "Order flowers in Mahoba, Uttar Pradesh. Same-day delivery near Chandela temples & across Mahoba. From ₹399.",
    h1: "Online Flower Delivery in Mahoba",
    metaKeyword: "flower delivery mahoba, online flowers mahoba uttar pradesh, florist mahoba, flowers mahoba chandela bundelkhand khan khajanchi granite",
    footerContent: `
<h2>Flower Delivery in Mahoba — Chandela Capital's Legacy and Bundelkhand's Stone Country</h2>
<p>Mahoba, in the Bundelkhand region of southern Uttar Pradesh, is the headquarters of Mahoba district — a historically charged city that was the secondary capital of the Chandela dynasty (whose primary achievement was building the Khajuraho temples in the 10th-11th centuries). The Chandela tanks of Mahoba (massive medieval reservoirs — Madan Sagar, Kirat Sagar, Vijay Sagar — built as part of an extraordinary hydraulic engineering tradition) still supply water to the town. Mahoba's granite quarries are among India's most productive — the distinctive pink-grey Mahoba granite is quarried here for export and construction. The legendary battle of Mahoba (immortalised in the Hindi epic "Alha-Udal") is the folk hero cycle of the Bundela region, still sung by travelling bards at fairs.</p>
<p>RedHeart delivers flowers across Mahoba — Main Market, Chhatarpur Road, Banda Road, Kulpahar area, and Station Road. Our range includes roses, marigolds, seasonal Bundelkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahoba, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Chhatarpur Road, Banda Road, Kulpahar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Navratri available in Mahoba?", answer: "Yes, Navratri marigold and rose arrangements for the 9-night festival are available in Mahoba for same-day delivery." },
      { question: "Can I get birthday flowers in Mahoba?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Mahoba for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Mahoba?", answer: "Yes, same-day delivery is available across Mahoba for orders placed before 3 PM." }
    ]
  },

  "chandauli": {
    cityName: "Chandauli",
    metaTitle: "Flower Delivery in Chandauli | Varanasi Belt UP | RedHeart",
    metaDescription: "Order flowers in Chandauli, Uttar Pradesh. Same-day delivery near Varanasi & across Chandauli. From ₹399.",
    h1: "Online Flower Delivery in Chandauli",
    metaKeyword: "flower delivery chandauli, online flowers chandauli uttar pradesh, florist chandauli, flowers chandauli varanasi ganga sone confluence carpet",
    footerContent: `
<h2>Flower Delivery in Chandauli — The Ganga-Son Confluence District at Varanasi's Eastern Edge</h2>
<p>Chandauli, immediately east of Varanasi where the Ganga turns north, is the headquarters of Chandauli district — a district straddling the Ganga's eastern bank and the Kaimur Range's foothills. The Son River flows into the Ganga just east of Varanasi at Dadri Ghat in Chandauli district — the Ganga-Son confluence (Triveni area) is a pilgrimage point. The Rajdari and Devdari waterfalls (in the Chandauli forest zone, among UP's most picturesque waterfalls) are tourist attractions. The district is known for carpet weaving — the Varanasi carpet-weaving tradition extends into Chandauli, and the hand-knotted wool and silk carpets from this belt are exported globally. The Chandra Prabha Wildlife Sanctuary protects the Kaimur forest zone.</p>
<p>RedHeart delivers flowers across Chandauli — Main Market, Varanasi Road, Mughal Sarai (Pt. Deen Dayal Upadhyaya Nagar) area, Naugarh area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandauli, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Varanasi Road, DDU Nagar, Naugarh, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Dev Deepawali (Varanasi belt) available in Chandauli?", answer: "Yes, Dev Deepawali on Kartik Purnima is celebrated along the Ganga in the Varanasi-Chandauli belt. Marigold lamps and floral diyas for the Ganga ghat are available from Chandauli." },
      { question: "Can I get birthday flowers in Chandauli?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Chandauli for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Chandauli?", answer: "Yes, same-day delivery is available across Chandauli for orders placed before 3 PM." }
    ]
  },

  "ballia": {
    cityName: "Ballia",
    metaTitle: "Flower Delivery in Ballia | Mangal Pandey's UP | RedHeart",
    metaDescription: "Order flowers in Ballia, Uttar Pradesh. Same-day delivery near Ganga & across Ballia. From ₹399.",
    h1: "Online Flower Delivery in Ballia",
    metaKeyword: "flower delivery ballia, online flowers ballia uttar pradesh, florist ballia, flowers ballia mangal pandey ganga ghaghra confluence bhojpuri",
    footerContent: `
<h2>Flower Delivery in Ballia — Mangal Pandey's Homeland and Bhojpuri Country at the UP-Bihar Border</h2>
<p>Ballia, at the easternmost tip of Uttar Pradesh where the Ganga and Ghaghra rivers converge near the Bihar border, is one of the most historically resonant cities in North India. Ballia is the birthplace of Mangal Pandey — the sepoy of the 34th Bengal Infantry who fired the first shot of the 1857 First War of Indian Independence in Barrackpore and ignited the uprising. The Ballia Revolt of 1942 (during the Quit India Movement) was one of the most successful local revolts against British rule — Ballia was briefly liberated and a parallel government established. The district is deeply Bhojpuri in culture and language and produces some of the most celebrated Bhojpuri musicians and politicians. The Dadri Mela (on the Ganga) is UP's largest rural fair.</p>
<p>RedHeart delivers flowers across Ballia — Main Market, Sonepur Road, Azamgarh Road, Rasra area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballia, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sonepur Road, Azamgarh Road, Rasra, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Ballia?", answer: "Yes, Chhath Puja on the Ganga and Ghaghra ghats is Ballia's biggest festival. Lotus, marigold, and banana flower arrangements for the arghya ceremony are available." },
      { question: "Can I get birthday flowers in Ballia?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ballia for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Ballia?", answer: "Yes, same-day delivery is available across Ballia for orders placed before 3 PM." }
    ]
  },

  "rohtas": {
    cityName: "Rohtas",
    metaTitle: "Flower Delivery in Rohtas | Sasaram Bihar | RedHeart",
    metaDescription: "Order flowers in Rohtas, Bihar. Same-day delivery near Sher Shah Suri's tomb & across Rohtas. From ₹399.",
    h1: "Online Flower Delivery in Rohtas",
    metaKeyword: "flower delivery rohtas, online flowers rohtas bihar, florist rohtas sasaram, flowers rohtas sasaram sher shah suri son river kaimur",
    footerContent: `
<h2>Flower Delivery in Rohtas — Sher Shah Suri's Tomb and the Kaimur Hills on the Son River</h2>
<p>Rohtas, in the Son River basin of southern Bihar bordering Jharkhand, is the headquarters of Rohtas district — a district with remarkable historical depth. The main town Sasaram is home to the tomb of Sher Shah Suri — the Pashtun king who briefly dethroned the Mughal Humayun and built the Grand Trunk Road from Kabul to Chittagong (one of history's great infrastructure achievements). The tomb of Sher Shah Suri (completed 1545) is a massive sandstone octagonal mausoleum rising from a lake — considered the finest example of Afghan-Mughal architecture in India. The Rohtas Fort (a Sher Shah-era hilltop fort on the Kaimur escarpment, accessible from Rohtas) is similarly magnificent. The Son River's Son Bhandar caves (Buddhist and Jain) are also in the district.</p>
<p>RedHeart delivers flowers across Rohtas — Main Market, Sasaram area, Kaimur Road, Dehri-on-Sone area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rohtas, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sasaram, Kaimur Road, Dehri-on-Sone, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja on the Son River available in Rohtas?", answer: "Yes, Chhath Puja on the Son River ghats at Dehri-on-Sone and Sasaram is a major celebration in Rohtas. Lotus, marigold, and arghya flower sets are available." },
      { question: "Can I get birthday flowers in Rohtas?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Rohtas for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Rohtas?", answer: "Yes, same-day delivery is available across Rohtas for orders placed before 3 PM." }
    ]
  },

  "buxar": {
    cityName: "Buxar",
    metaTitle: "Flower Delivery in Buxar | Historic Bihar | RedHeart",
    metaDescription: "Order flowers in Buxar, Bihar. Same-day delivery near Ganga & across Buxar. From ₹399.",
    h1: "Online Flower Delivery in Buxar",
    metaKeyword: "flower delivery buxar, online flowers buxar bihar, florist buxar, flowers buxar ganga battle 1764 ram rekha ghat",
    footerContent: `
<h2>Flower Delivery in Buxar — The Battlefield of 1764 Where British India Was Truly Born</h2>
<p>Buxar, on the south bank of the Ganga in western Bihar near the UP border, is the headquarters of Buxar district — a city whose place in history is often overlooked despite its critical significance. The Battle of Buxar (1764) — in which the British East India Company under Major Hector Munro defeated the combined armies of the Nawab of Awadh, the Mughal Emperor Shah Alam II, and the Nawab of Bengal — is considered even more consequential than Plassey (1757), as it established British military supremacy in the Gangetic heartland and led to the Diwani of Bengal. Ram Rekha Ghat on the Ganga is a major pilgrimage point (where Rama's exile begins in the Valmiki Ramayana). The Buxar Fort overlooking the Ganga is another heritage attraction.</p>
<p>RedHeart delivers flowers across Buxar — Main Market, Ganga Ghat area, Dumraon Road, Ara Road, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Buxar, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ganga Ghat area, Dumraon Road, Ara Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Ganga puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Ganga puja at Ram Rekha Ghat available in Buxar?", answer: "Yes, marigold, lotus, and Ganga puja sets for the Ram Rekha Ghat and Dev Deepawali celebrations at Buxar are available for same-day delivery." },
      { question: "Can I get Chhath Puja flowers in Buxar?", answer: "Yes, Chhath Puja on the Ganga ghats is Buxar's biggest festival. Lotus, marigold, and banana flower arrangements are available." },
      { question: "Do you deliver flowers same day in Buxar?", answer: "Yes, same-day delivery is available across Buxar for orders placed before 3 PM." }
    ]
  },

  "samastipur": {
    cityName: "Samastipur",
    metaTitle: "Flower Delivery in Samastipur | Mithila Bihar | RedHeart",
    metaDescription: "Order flowers in Samastipur, Bihar. Same-day delivery near Darbhanga & across Samastipur. From ₹399.",
    h1: "Online Flower Delivery in Samastipur",
    metaKeyword: "flower delivery samastipur, online flowers samastipur bihar, florist samastipur, flowers samastipur mithila burhi gandak railway junction",
    footerContent: `
<h2>Flower Delivery in Samastipur — Mithila's Railway Junction on the Burhi Gandak Floodplain</h2>
<p>Samastipur, in north-central Bihar on the Burhi Gandak River, is the headquarters of Samastipur district — a densely populated agricultural district in the heart of the Mithila cultural region. Samastipur is one of Bihar's most important railway junctions — the railway workshop here (one of North India's major locomotive maintenance depots) and the convergence of lines to Muzaffarpur, Darbhanga, Patna, and Barauni make it a significant hub. The district is part of the Mithila painting belt — the Madhubani art tradition (Mithila painting in bright primary colours on paper and cloth, featuring geometric patterns and mythological scenes) originated in the adjacent Madhubani district and permeates Mithila culture. Chhath Puja on the Burhi Gandak ghats is one of Bihar's most visually spectacular celebrations.</p>
<p>RedHeart delivers flowers across Samastipur — Main Market, Darbhanga Road, Muzaffarpur Road, Rosera area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Samastipur, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Darbhanga Road, Muzaffarpur Road, Rosera, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja on the Burhi Gandak available in Samastipur?", answer: "Yes, Chhath Puja is the most celebrated festival in Samastipur. Lotus, marigold, and banana flower arrangements for the ghat celebration are available for same-day delivery." },
      { question: "Can I get birthday flowers in Samastipur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Samastipur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Samastipur?", answer: "Yes, same-day delivery is available across Samastipur for orders placed before 3 PM." }
    ]
  },

  "sitamarhi": {
    cityName: "Sitamarhi",
    metaTitle: "Flower Delivery in Sitamarhi | Sita's Birthplace Bihar | RedHeart",
    metaDescription: "Order flowers in Sitamarhi, Bihar. Same-day delivery near Janaki temple & across Sitamarhi. From ₹399.",
    h1: "Online Flower Delivery in Sitamarhi",
    metaKeyword: "flower delivery sitamarhi, online flowers sitamarhi bihar, florist sitamarhi, flowers sitamarhi sita birthplace janaki temple mithila nepal",
    footerContent: `
<h2>Flower Delivery in Sitamarhi — The Sacred Birthplace of Sita, Daughter of Mithila</h2>
<p>Sitamarhi, in the Mithila region of northern Bihar near the Nepal border, is held to be the birthplace of Sita — the daughter of King Janaka of Mithila and the divine consort of Lord Rama in the Ramayana. The Janaki Sthaan temple (marking the exact spot of Sita's birth, according to local tradition) and the Haleshwar Sthan temple are major pilgrimage destinations. The Vivah Panchami festival (commemorating the wedding of Rama and Sita in Mithila) draws lakhs of pilgrims to Sitamarhi and Janakpur (just across the border in Nepal). The district is in the Mithila painting belt — the colourful Madhubani art tradition is practised in many villages. Sitamarhi also suffered devastating floods in 2004 when the Bagmati and Lal Bakeya rivers inundated most of the district.</p>
<p>RedHeart delivers flowers across Sitamarhi — Main Market, Janaki Sthan area, Muzaffarpur Road, Pupri area, and Station Road. Our range includes roses, marigolds, lotus, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sitamarhi, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Janaki Sthan area, Muzaffarpur Road, Pupri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, Janaki temple puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Janaki Sthaan temple puja available in Sitamarhi?", answer: "Yes, lotus, marigold, and Vaishnavite puja flower sets for the Janaki Sthaan temple (Sita's birthplace) in Sitamarhi are available for same-day delivery." },
      { question: "Can I get flowers for Vivah Panchami (Rama-Sita wedding anniversary) in Sitamarhi?", answer: "Yes, Vivah Panchami is celebrated with special fervour in Sitamarhi as Sita's native town. Seasonal bouquets and marigold garlands for the occasion are available." },
      { question: "Do you deliver flowers same day in Sitamarhi?", answer: "Yes, same-day delivery is available across Sitamarhi for orders placed before 3 PM." }
    ]
  },

  "west-champaran": {
    cityName: "West Champaran",
    metaTitle: "Flower Delivery in West Champaran | Bettiah Bihar | RedHeart",
    metaDescription: "Order flowers in West Champaran (Bettiah), Bihar. Same-day delivery near Valmiki Tiger Reserve & across West Champaran. From ₹399.",
    h1: "Online Flower Delivery in West Champaran",
    metaKeyword: "flower delivery west champaran, online flowers bettiah bihar, florist west champaran, flowers bettiah champaran gandhi satyagraha valmiki tiger reserve",
    footerContent: `
<h2>Flower Delivery in West Champaran — Gandhi's First Satyagraha Site and the Valmiki Tiger Reserve</h2>
<p>West Champaran, with its headquarters at Bettiah, is in the Himalayan Terai of northern Bihar bordering Nepal. It holds an iconic place in Indian history as the site of the Champaran Satyagraha of 1917 — Mahatma Gandhi's first major civil disobedience campaign in India (against the indigo planters' exploitation of tenant farmers), which launched Gandhi into national leadership. The Motihari district (East Champaran) borders West Champaran, and together they form the historic Champaran region. The Valmiki National Park and Tiger Reserve (West Champaran) — the only tiger reserve in Bihar — protects one-horned rhinos, tigers, and elephants in the Gandaki-Narayani river floodplain. The Gandak (Narayani) River forms the border with Nepal.</p>
<p>RedHeart delivers flowers across West Champaran — Main Market, Bettiah area, Bagaha area, Valmiki Nagar, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">West Champaran, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bettiah, Bagaha, Valmiki Nagar, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Valmiki Tiger Reserve resort stay from West Champaran?", answer: "Yes, the Valmiki National Park eco-lodges near Bagaha are in West Champaran. Flower arrangements for jungle resort anniversaries can be delivered in the area." },
      { question: "Are flowers for Chhath Puja available in West Champaran?", answer: "Yes, Chhath Puja on the Gandak River ghats is West Champaran's biggest festival. Lotus, marigold, and banana flower arrangements for the arghya are available." },
      { question: "Do you deliver flowers same day in West Champaran?", answer: "Yes, same-day delivery is available across West Champaran (Bettiah) for orders placed before 3 PM." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers",
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
        { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
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
