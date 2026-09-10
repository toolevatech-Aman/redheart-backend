// Batch 55 — 15 cities:
// Uttarakhand: Roorkee, Almora, Pauri Garhwal, Tehri Garhwal
// Himachal Pradesh: Mandi, Solan, Una, Kangra
// Meghalaya: Tura (West Garo Hills), Jowai (East Jaintia Hills)
// Chhattisgarh: Korba, Ambikapur (Surguja)
// MP: Vidisha, Betul
// UP: Sonbhadra

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "roorkee": {
    cityName: "Roorkee",
    metaTitle: "Flower Delivery in Roorkee | IIT Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Roorkee, Uttarakhand. Same-day delivery near IIT Roorkee & across Roorkee. From ₹399.",
    h1: "Online Flower Delivery in Roorkee",
    metaKeyword: "flower delivery roorkee, online flowers roorkee uttarakhand, florist roorkee, flowers roorkee iit roorkee thomason civil engineering ganga canal haridwar solani",
    footerContent: `
<h2>Flower Delivery in Roorkee — IIT's Engineering Legacy and the Ganga Canal's Colonial Engineering Marvel</h2>
<p>Roorkee, in the foothills of the Shivalik range in Uttarakhand, is a city of extraordinary engineering heritage and the home of IIT Roorkee — India's oldest technical institution (established 1847 as the Thomason College of Civil Engineering, named after Lt. Governor James Thomason, and later India's first engineering university). The Solani Aqueduct (built 1851) — carrying the Upper Ganga Canal over the Solani River — was one of the most ambitious civil engineering projects of colonial India and Roorkee's most celebrated heritage structure. The Upper Ganga Canal (the Ganga Canal, inaugurated in 1854) was the longest irrigation canal in the world at the time of its construction, and its construction under the supervision of Proby Cautley from the Ganga at Haridwar is considered a landmark in the history of hydraulic engineering in India. Roorkee is a base for the Haridwar-Rishikesh-Char Dham pilgrim corridor.</p>
<p>RedHeart delivers flowers across Roorkee — Civil Lines, IIT Roorkee area, Delhi Road, Haridwar Road, Manglaur area, and Station Road. Our range includes roses, marigolds, seasonal Uttarakhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roorkee, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, IIT Roorkee area, Delhi Road, Haridwar Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Uttarakhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for IIT Roorkee convocation events?", answer: "Yes, IIT Roorkee's convocations and campus events are important celebrations. Rose bouquets and congratulation arrangements for IIT Roorkee campus events are available." },
      { question: "Can I get birthday flowers in Roorkee?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Roorkee for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Roorkee?", answer: "Yes, same-day delivery is available across Roorkee for orders placed before 3 PM." }
    ]
  },

  "almora": {
    cityName: "Almora",
    metaTitle: "Flower Delivery in Almora | Kumaon Hills Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Almora, Uttarakhand. Same-day delivery near Kasar Devi temple & across Almora. From ₹399.",
    h1: "Online Flower Delivery in Almora",
    metaKeyword: "flower delivery almora, online flowers almora uttarakhand, florist almora, flowers almora kumaon hills kasar devi swami vivekananda nanda devi copper craft",
    footerContent: `
<h2>Flower Delivery in Almora — Kasar Devi's Cosmic Energy and the Kumaon Hills' Cultural Capital</h2>
<p>Almora, perched on a crescent-shaped ridge in the Kumaon Himalayas of Uttarakhand, is the headquarters of Almora district — the cultural capital of the Kumaon region and one of India's most spiritually charged Himalayan towns. The Kasar Devi temple (on the Kashyap Hill above Almora) is associated with a unique geomagnetic anomaly (the Van Allen Radiation Belt converges here, similar to Machu Picchu and Stonehenge) that has long attracted yogis, spiritual seekers, and artists — Swami Vivekananda meditated here in 1890 (before his Chicago Parliament of Religions speech), and in the 1960s-70s it became the "Crank's Ridge" of the global counterculture (Bob Dylan, Cat Stevens, Allen Ginsberg visited). The Nanda Devi temple (the tutelary goddess of Kumaon and Uttarakhand) and the Almora Bazaar (with traditional Kumaoni copper-craft) are cultural landmarks.</p>
<p>RedHeart delivers flowers across Almora — Mall Road, Kasar Devi area, Nanda Devi temple area, Ranikhet Road, Kausani Road, and Lal Bazaar. Our range includes roses, marigolds, rhododendron, seasonal Uttarakhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Almora, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mall Road, Kasar Devi area, Nanda Devi area, Ranikhet Road, Lal Bazaar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, rhododendron, marigolds, seasonal Kumaon bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are rhododendron and Himalayan flowers available in Almora?", answer: "Yes, Almora's Kumaon hills support beautiful Himalayan flowers including rhododendron (buransh), seasonal wildflowers, and exotic hill varieties. Kumaon seasonal bouquets are available." },
      { question: "Can I get anniversary flowers for an Almora hill stay?", answer: "Yes, Almora's scenic Himalayan resort stays are romantic getaway destinations. Anniversary rose bouquets and hill-flower arrangements for Almora hotels can be delivered same day." },
      { question: "Do you deliver flowers same day in Almora?", answer: "Yes, same-day delivery is available across Almora for orders placed before 3 PM." }
    ]
  },

  "pauri-garhwal": {
    cityName: "Pauri Garhwal",
    metaTitle: "Flower Delivery in Pauri Garhwal | Lansdowne Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Pauri Garhwal, Uttarakhand. Same-day delivery near Lansdowne & across Pauri Garhwal. From ₹399.",
    h1: "Online Flower Delivery in Pauri Garhwal",
    metaKeyword: "flower delivery pauri garhwal, online flowers pauri garhwal uttarakhand, florist pauri, flowers pauri garhwal lansdowne khirsu army military garhwal rifles garhwali",
    footerContent: `
<h2>Flower Delivery in Pauri Garhwal — Lansdowne's Cantonment Hills and the Garhwal Rifles' Storied Heritage</h2>
<p>Pauri Garhwal, in the central Garhwal Himalayas of Uttarakhand, is the headquarters of Pauri Garhwal district — a district of deep military heritage, serene hill stations, and the spiritual tradition of the Garhwali people. Lansdowne (Kalanidhi) — a Cantonment hill station in Pauri Garhwal, established in 1887 and named after Lord Lansdowne (Viceroy of India) — is the regimental headquarters of the Garhwal Rifles, one of India's most decorated infantry regiments (the regiment earned the Victoria Cross multiple times and has participated in every major Indian military campaign from WWI to Kargil). Lansdowne's forests, churches, and military architecture offer a peaceful colonial hill atmosphere. Pauri town (the district headquarters) offers dramatic views of the Himalayan peaks including Nanda Devi and Trishul. Khirsu is a quiet apple-orchard village with snowcapped Himalayan panoramas.</p>
<p>RedHeart delivers flowers across Pauri Garhwal — Pauri Main Market, Lansdowne area, Kotdwar area, Srinagar-Garhwal area, Khirsu area, and Dugadda area. Our range includes roses, rhododendron, marigolds, and seasonal Uttarakhand bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pauri Garhwal, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pauri, Lansdowne, Kotdwar, Srinagar-Garhwal, Khirsu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, rhododendron, marigolds, seasonal Garhwal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Lansdowne hill station stay in Pauri Garhwal?", answer: "Yes, Lansdowne (Pauri Garhwal's celebrated hill station) is a quiet cantonment hill resort. Anniversary roses and seasonal hill flowers for Lansdowne hotel stays can be delivered." },
      { question: "Are rhododendron flowers available in Pauri Garhwal?", answer: "Yes, Pauri Garhwal's Himalayan slopes have rhododendron forests. Seasonal rhododendron and hill flower bouquets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Pauri Garhwal?", answer: "Yes, same-day delivery is available across Pauri Garhwal for orders placed before 3 PM." }
    ]
  },

  "tehri-garhwal": {
    cityName: "Tehri Garhwal",
    metaTitle: "Flower Delivery in Tehri Garhwal | Tehri Dam Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Tehri Garhwal, Uttarakhand. Same-day delivery near Tehri Dam lake & across Tehri Garhwal. From ₹399.",
    h1: "Online Flower Delivery in Tehri Garhwal",
    metaKeyword: "flower delivery tehri garhwal, online flowers tehri garhwal uttarakhand, florist tehri, flowers tehri dam bhagirathi bhagirath lake submerged old tehri new tehri",
    footerContent: `
<h2>Flower Delivery in Tehri Garhwal — Tehri Dam's Turquoise Lake and the Submerged Kingdom's Memory</h2>
<p>Tehri Garhwal, in the central Garhwal Himalayas of Uttarakhand, is the headquarters of Tehri Garhwal district — a district shaped by the most emotionally complex infrastructure project of post-independence India. The Tehri Dam (on the Bhagirathi River at its confluence with the Bhilangana) — completed in 2006 after decades of construction, controversy, and protest (the anti-dam movement led by Sundarlal Bahuguna, the Chipko environmentalist, for 17 years is one of India's landmark environmental protests) — is India's tallest dam (260.5 m). The reservoir submerged the old Tehri town (the 800-year-old Garhwal Kingdom's capital, with temples, havelis, and centuries of history), and the New Tehri town was built on the hills above. The Tehri Lake (the reservoir) has become a tourism and water-sport destination. Dhanaulti and Chamba are popular Uttarakhand hill escapes in the district.</p>
<p>RedHeart delivers flowers across Tehri Garhwal — New Tehri area, Narendra Nagar area, Devprayag area, Dhanaulti area, Chamba area, and Kirti Nagar area. Our range includes roses, rhododendron, marigolds, and seasonal Uttarakhand bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tehri Garhwal, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">New Tehri, Narendra Nagar, Devprayag, Dhanaulti, Chamba</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, rhododendron, marigolds, seasonal Garhwal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Tehri Lake resort stay in Tehri Garhwal?", answer: "Yes, Tehri Lake's waterfront resorts and adventure camps are popular Uttarakhand getaways. Anniversary rose bouquets and romantic arrangements for Tehri Lake stays can be delivered." },
      { question: "Can I get birthday flowers in Tehri Garhwal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery across Tehri Garhwal for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Tehri Garhwal?", answer: "Yes, same-day delivery is available across Tehri Garhwal for orders placed before 3 PM." }
    ]
  },

  "mandi": {
    cityName: "Mandi",
    metaTitle: "Flower Delivery in Mandi | Shivratri Fair Himachal Pradesh | RedHeart",
    metaDescription: "Order flowers in Mandi, Himachal Pradesh. Same-day delivery near Beas River & across Mandi. From ₹399.",
    h1: "Online Flower Delivery in Mandi",
    metaKeyword: "flower delivery mandi, online flowers mandi himachal pradesh, florist mandi, flowers mandi shivratri fair 200 temples beas river kullu lahaul gateway",
    footerContent: `
<h2>Flower Delivery in Mandi — Two Hundred Temples and the International Shivratri Festival</h2>
<p>Mandi (Sahor), on the Beas River in the Mandi valley of Himachal Pradesh, is the headquarters of Mandi district — called the "Varanasi of the Hills" for its extraordinary concentration of ancient temples (over 200 temples in and around the town). The Mandi International Shivratri Fair — a week-long festival where deities from 200+ temples of the district are brought in palanquins (palki) to Mandi for the Shivratri celebration — is HP's most important cultural fair and a spectacular display of Himachali temple deity traditions. The Trilokinath, Panchvaktra, and Ardhanarinateshwar temples in the Mandi Bazaar area are extraordinary examples of Nagara temple architecture. Mandi is the gateway to Kullu Valley and Lahaul-Spiti, and the Pandoh Dam on the Beas River is the origin of the massive Beas-Sutlej Link irrigation system.</p>
<p>RedHeart delivers flowers across Mandi — Main Market, Indira Market, Beas River area, Rewalsar area, Sundernagar area, and Bus Stand. Our range includes roses, marigolds, rhododendron, Shiva puja flowers, and seasonal HP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandi, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Indira Market, Beas River area, Rewalsar, Sundernagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, bilva, roses, rhododendron, Shiva puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Mandi Shivratri Fair available?", answer: "Yes, the Mandi International Shivratri Fair (where 200+ district deities gather) is HP's most important fair. Bilva, marigold garlands, and Shiva puja sets for the Shivratri celebration are available." },
      { question: "Are rhododendron flowers available in Mandi?", answer: "Yes, Mandi's Himalayan surroundings have rhododendron forests. Seasonal hill flower bouquets including rhododendron are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Mandi?", answer: "Yes, same-day delivery is available across Mandi for orders placed before 3 PM." }
    ]
  },

  "solan": {
    cityName: "Solan",
    metaTitle: "Flower Delivery in Solan | Mushroom City Himachal Pradesh | RedHeart",
    metaDescription: "Order flowers in Solan, Himachal Pradesh. Same-day delivery near Shoolini Devi & across Solan. From ₹399.",
    h1: "Online Flower Delivery in Solan",
    metaKeyword: "flower delivery solan, online flowers solan himachal pradesh, florist solan, flowers solan mushroom city shoolini devi shivalik shimla chandigarh pharma baddi",
    footerContent: `
<h2>Flower Delivery in Solan — Mushroom Capital of India and the Pharma Hub of the Shivalik Hills</h2>
<p>Solan, in the Shivalik Hills of Himachal Pradesh between Shimla and Chandigarh, is the headquarters of Solan district — and one of Himachal's most economically dynamic districts. Solan is called the "Mushroom City of India" (Solani Mushrooms) and "City of Red Gold" for its extraordinary white button mushroom and tomato cultivation — the Solan area has a climate uniquely suited for mushroom farming, and the Directorate of Mushroom Research is based here. The Baddi-Barotiwala-Nalagarh (BBN) industrial area in Solan district is Himachal's largest pharmaceutical manufacturing cluster — one of India's biggest drug-making zones. The Shoolini Devi temple (the presiding deity of Solan, after whom the Shoolini Mela — one of HP's oldest and most traditional festivals — is held) and the famous Kasauli Cantonment hill resort are important features of the district.</p>
<p>RedHeart delivers flowers across Solan — Main Market, Shoolini Devi area, Baddi area, Kasauli area, Nalagarh area, and Station Road. Our range includes roses, marigolds, seasonal HP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Solan, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Shoolini Devi area, Baddi, Kasauli, Nalagarh, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal HP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Shoolini Mela available in Solan?", answer: "Yes, the Shoolini Mela (Solan's traditional fair honoring Shoolini Devi) is one of HP's oldest festivals. Marigold garlands and Devi puja sets for the Shoolini Mela are available." },
      { question: "Can I get birthday flowers in Solan?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Solan for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Solan?", answer: "Yes, same-day delivery is available across Solan for orders placed before 3 PM." }
    ]
  },

  "una-hp": {
    cityName: "Una",
    metaTitle: "Flower Delivery in Una | Anandpur Sahib Himachal Pradesh | RedHeart",
    metaDescription: "Order flowers in Una, Himachal Pradesh. Same-day delivery near Anandpur Sahib & across Una. From ₹399.",
    h1: "Online Flower Delivery in Una",
    metaKeyword: "flower delivery una himachal pradesh, online flowers una hp, florist una himachal, flowers una anandpur sahib hola mohalla sikh gurpurab beas river industry",
    footerContent: `
<h2>Flower Delivery in Una — Anandpur Sahib's Sacred Sikh Battleground and the Sutlej Industrial Belt</h2>
<p>Una, in the Shivalik foothills of Himachal Pradesh near the Punjab border on the Beas River, is the headquarters of Una district — a district that shares the sacred Anandpur Sahib legacy with Punjab's Rupnagar district. Anandpur Sahib (a few km from Una district boundary) is one of Sikhism's holiest cities — the birthplace of the Khalsa Panth (founded by Guru Gobind Singh on Baisakhi 1699), and the site of the historic Anandgarh Fort and the magnificent Takht Sri Kesgarh Sahib (one of Sikhism's five Takhts, or seats of temporal authority). Hola Mohalla (celebrated the day after Holi at Anandpur Sahib) — a martial arts, poetry, and Nihang warrior display initiated by Guru Gobind Singh — draws hundreds of thousands of Sikhs. Una district also has a growing pharma and chemical industrial belt along the Shivalik foothills.</p>
<p>RedHeart delivers flowers across Una — Main Market, Anandpur Road, Bangana area, Amb area, Haripur Dhaar area, and Bus Stand. Our range includes roses, marigolds, seasonal HP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Una, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Anandpur Road, Bangana, Amb, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, seasonal HP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Gurpurab and Gurdwara events available in Una?", answer: "Yes, Gurpurab (Sikh religious occasions) and Gurdwara celebrations near Una (near Anandpur Sahib) are important events. Marigold garlands and Sikh puja flowers for Gurpurab are available." },
      { question: "Can I get birthday flowers in Una?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Una for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Una?", answer: "Yes, same-day delivery is available across Una for orders placed before 3 PM." }
    ]
  },

  "kangra": {
    cityName: "Kangra",
    metaTitle: "Flower Delivery in Kangra | Brajeshwari Devi Himachal Pradesh | RedHeart",
    metaDescription: "Order flowers in Kangra, Himachal Pradesh. Same-day delivery near Brajeshwari Devi & across Kangra. From ₹399.",
    h1: "Online Flower Delivery in Kangra",
    metaKeyword: "flower delivery kangra, online flowers kangra himachal pradesh, florist kangra, flowers kangra brajeshwari devi fort tea miniature painting dharamsala dhauladhar",
    footerContent: `
<h2>Flower Delivery in Kangra — Brajeshwari Devi's Earthquake History and the Dhauladhar's Ancient Kingdom</h2>
<p>Kangra, in the Kangra Valley of Himachal Pradesh at the foot of the Dhauladhar range, is the headquarters of Kangra district — Himachal's most populous district and a landscape of extraordinary historical depth. The Brajeshwari Devi temple at Kangra (one of 51 Shakti Peethas, where Sati's right breast is said to have fallen) was so famous for its gold and jewels that it was raided by Mahmud of Ghazni (1009 CE) and later by Firuz Shah Tughlaq. The Kangra Fort (one of India's oldest forts, with a documented history going back 3,500 years — the ancient Katoch dynasty) is a remarkable archaeological site. The 1905 Kangra earthquake (8.0 magnitude, 20,000+ dead) destroyed most of the old town. Kangra is also the birthplace of the Kangra miniature painting school — an exquisite Pahari painting style. Dharamsala (the Dalai Lama's residence) is in Kangra district.</p>
<p>RedHeart delivers flowers across Kangra — Main Market, Brajeshwari temple area, Dharamsala area, Palampur area, Nurpur area, and Bus Stand. Our range includes roses, marigolds, rhododendron, Devi puja flowers, and seasonal HP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kangra, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Brajeshwari temple, Dharamsala, Palampur, Nurpur, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, rhododendron, Devi puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Brajeshwari Devi Navratri available in Kangra?", answer: "Yes, the Brajeshwari Devi temple (one of 51 Shakti Peethas) holds major Navratri pilgrimages. Marigold garlands, red hibiscus, and Devi puja sets for the temple are available from Kangra." },
      { question: "Can I get flowers for a Dharamsala (McLeodganj) stay from Kangra?", answer: "Yes, Dharamsala (the Dalai Lama's residence) is in Kangra district. Bouquets for Dharamsala hotels, the Tibet Museum, and monastery events can be delivered." },
      { question: "Do you deliver flowers same day in Kangra?", answer: "Yes, same-day delivery is available across Kangra for orders placed before 3 PM." }
    ]
  },

  "tura": {
    cityName: "Tura",
    metaTitle: "Flower Delivery in Tura | West Garo Hills Meghalaya | RedHeart",
    metaDescription: "Order flowers in Tura, Meghalaya. Same-day delivery across Tura district. From ₹399.",
    h1: "Online Flower Delivery in Tura",
    metaKeyword: "flower delivery tura, online flowers tura meghalaya, florist tura, flowers tura west garo hills garo tribe nokma nokpante bangladesh border orchid",
    footerContent: `
<h2>Flower Delivery in Tura — Garo Hills' Capital and the Bangladesh Border's Forest Gateway</h2>
<p>Tura, in the West Garo Hills of southwestern Meghalaya near the Bangladesh border, is the headquarters of West Garo Hills district — the administrative and commercial capital of the Garo Hills region. The Garo people (a Tibeto-Burman community with a matrilineal, matrilocal social organisation — one of the world's few surviving matrilineal cultures) have their heartland in the Garo Hills. Tura is dominated by the Nokrek National Park (a UNESCO Biosphere Reserve and one of India's important biodiversity zones for wild citrus species — Nokrek is believed to be the origin of all oranges and lemons). The Tura Peak (forest-covered hill) overlooks the town. The Wangala Festival (a post-harvest thanksgiving celebration of the Garos, with traditional drums, gongs, and head-feathered dances) is one of Meghalaya's most spectacular tribal festivals. Tura is also the base for Bangladesh border trade.</p>
<p>RedHeart delivers flowers across Tura — Main Market, Dakopgre area, Shillong Road, Selsella area, Resubelpara area, and Bus Stand. Our range includes roses, orchids, marigolds, and seasonal Meghalaya bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tura, Meghalaya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dakopgre, Shillong Road, Selsella, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Meghalaya bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Christmas available in Tura?", answer: "Yes, the Garo community of Tura is predominantly Christian. Christmas roses, white lilies, and festive arrangements are available for same-day delivery." },
      { question: "Are orchids available in Tura?", answer: "Yes, Meghalaya's hill forests are rich in orchids. Orchid bouquets and tropical flower arrangements are available in Tura for same-day delivery." },
      { question: "Do you deliver flowers same day in Tura?", answer: "Yes, same-day delivery is available across Tura for orders placed before 3 PM." }
    ]
  },

  "jowai": {
    cityName: "Jowai",
    metaTitle: "Flower Delivery in Jowai | East Jaintia Hills Meghalaya | RedHeart",
    metaDescription: "Order flowers in Jowai, Meghalaya. Same-day delivery across Jowai district. From ₹399.",
    h1: "Online Flower Delivery in Jowai",
    metaKeyword: "flower delivery jowai, online flowers jowai meghalaya, florist jowai, flowers jowai east jaintia hills jaintia tribe limestone coal synrem festival orchid",
    footerContent: `
<h2>Flower Delivery in Jowai — Jaintia Hills' Sacred Synrem Festival and Meghalaya's Coal-Limestone Heartland</h2>
<p>Jowai, in the East Jaintia Hills of Meghalaya, is the headquarters of East Jaintia Hills district — the homeland of the Pnar (Jaintia) people, a Austro-Asiatic community with the Khasi group (Meghalaya's dominant tribal family) who maintain the characteristic matrilineal social system. The Jaintia Hills have extraordinary natural and mineral wealth — one of the world's richest sources of limestone (used by major cement companies, with the hills controversially mined) and coal (the rat-hole mining controversy that was banned by the National Green Tribunal in 2014 was centred in Jaintia Hills). The Synrem festival — the Pnar community's most important annual thanksgiving ceremony for the harvest, with traditional music and rituals to the tribal Supreme Being U Blei — is Jowai's cultural centrepiece. The Dawki-Umngot River (famous for its crystal-clear water, visible through 10+ feet) flows near the Bangladesh border and has become a major eco-tourism destination.</p>
<p>RedHeart delivers flowers across Jowai — Main Market, Ummulong area, Shillong Road, Dawki area, Amlarem area, and Bus Stand. Our range includes roses, orchids, marigolds, and seasonal Meghalaya bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jowai, Meghalaya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ummulong, Shillong Road, Dawki, Amlarem, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Meghalaya bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Christmas available in Jowai?", answer: "Yes, the Pnar-Jaintia community of Jowai is predominantly Christian. Christmas roses and festive floral arrangements are available for same-day delivery." },
      { question: "Are orchids available in Jowai?", answer: "Yes, Meghalaya's forested hills are rich in orchids. Orchid bouquets and tropical flower arrangements are available in Jowai for same-day delivery." },
      { question: "Do you deliver flowers same day in Jowai?", answer: "Yes, same-day delivery is available across Jowai for orders placed before 3 PM." }
    ]
  },

  "korba": {
    cityName: "Korba",
    metaTitle: "Flower Delivery in Korba | Power City Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Korba, Chhattisgarh. Same-day delivery near NTPC & across Korba. From ₹399.",
    h1: "Online Flower Delivery in Korba",
    metaKeyword: "flower delivery korba, online flowers korba chhattisgarh, florist korba, flowers korba ntpc balco aluminium hasdeo river coal power baiga tribal",
    footerContent: `
<h2>Flower Delivery in Korba — NTPC's Power Capital and the Hasdeo's Coal Valley in Chhattisgarh</h2>
<p>Korba, on the Hasdeo River (a Mahanadi tributary) in central Chhattisgarh, is the headquarters of Korba district — India's "Power Capital," home to the largest concentration of thermal power plants in a single district. The Korba Super Thermal Power Station (NTPC-Korba, one of the largest power plants in India), the BALCO Aluminium plant (Bharat Aluminium Company, a Vedanta subsidiary), and multiple State GENCO power plants generate electricity for much of central India. The Hasdev Aranya Coal Block (Hasdeo Forest) — proposed coal mining in a dense forested area sacred to the Gond and Baiga tribal communities — has been one of India's most contentious environmental debates of the 2020s. The Korba district has the Bango Dam (Minnimath Reservoir) on the Hasdeo — a significant irrigation and power project.</p>
<p>RedHeart delivers flowers across Korba — Main Market, NTPC Colony, BALCO area, Dipka area, Kartala area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Korba, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, NTPC Colony, BALCO area, Dipka, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers delivered to NTPC Colony in Korba?", answer: "Yes, birthday roses and celebration bouquets can be delivered to NTPC Colony, BALCO Colony, and all residential areas in Korba for same-day delivery." },
      { question: "Are flowers for Diwali available in Korba?", answer: "Yes, Diwali is widely celebrated in Korba. Marigold garlands and Diwali puja sets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Korba?", answer: "Yes, same-day delivery is available across Korba for orders placed before 3 PM." }
    ]
  },

  "ambikapur": {
    cityName: "Ambikapur",
    metaTitle: "Flower Delivery in Ambikapur | Surguja Chhattisgarh | RedHeart",
    metaDescription: "Order flowers in Ambikapur (Surguja), Chhattisgarh. Same-day delivery near Mainpat & across Ambikapur. From ₹399.",
    h1: "Online Flower Delivery in Ambikapur",
    metaKeyword: "flower delivery ambikapur, online flowers ambikapur surguja chhattisgarh, florist ambikapur, flowers ambikapur surguja mainpat tibetan colony udaipur mahamaya devi",
    footerContent: `
<h2>Flower Delivery in Ambikapur — Surguja's Mahamaya Devi Shrine and Mainpat's Little Tibet</h2>
<p>Ambikapur, in the Surguja region of northern Chhattisgarh near Jharkhand, is the headquarters of Surguja district — one of Chhattisgarh's northernmost and most forested districts. Ambikapur is named after the Goddess Ambika (Mahamaya Devi) — the presiding deity of Surguja whose temple draws large pilgrimages from the tribal Oraon, Kanwar, and Gond communities. Mainpat (the Chhattisgarh "Shimla"), a high plateau near Ambikapur at 1,050 m altitude with a cool microclimate, houses a Tibetan refugee settlement established in the 1960s after the Dalai Lama's exile — with Tibetan monastery, culture, and yak herds creating an extraordinary cultural landscape in the Chhattisgarh jungle. The Udaipur Mahamaya Devi temple and the Ratnpur fort (a medieval Kalachuri dynasty capital) are important nearby heritage sites.</p>
<p>RedHeart delivers flowers across Ambikapur — Main Market, Mainpat area, Udaipur area, Sitapur area, Balrampur area, and Station Road. Our range includes roses, marigolds, seasonal Chhattisgarh bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ambikapur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mainpat area, Udaipur, Sitapur, Balrampur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, Mahamaya puja sets, seasonal Chhattisgarh bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Mahamaya Devi Navratri puja available in Ambikapur?", answer: "Yes, the Mahamaya Devi temple Navratri is one of Surguja's most important pilgrimages. Marigold garlands and Devi puja sets for Mahamaya Devi are available from Ambikapur." },
      { question: "Can I get birthday flowers in Ambikapur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ambikapur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Ambikapur?", answer: "Yes, same-day delivery is available across Ambikapur for orders placed before 3 PM." }
    ]
  },

  "vidisha": {
    cityName: "Vidisha",
    metaTitle: "Flower Delivery in Vidisha | Sanchi Stupa Madhya Pradesh | RedHeart",
    metaDescription: "Order flowers in Vidisha, MP. Same-day delivery near Sanchi UNESCO stupa & across Vidisha. From ₹399.",
    h1: "Online Flower Delivery in Vidisha",
    metaKeyword: "flower delivery vidisha, online flowers vidisha madhya pradesh, florist vidisha, flowers vidisha sanchi stupa buddha ashoka besnagar helodoros garuda pillar betwa",
    footerContent: `
<h2>Flower Delivery in Vidisha — Sanchi's Buddhist Glory and the Greek Pillar of Ancient India's Cosmopolitan Spirit</h2>
<p>Vidisha, in the Malwa-Bundelkhand transition zone of Madhya Pradesh on the Betwa River, is the headquarters of Vidisha district — one of India's most historically significant districts for Buddhist, Hindu, and Hellenistic heritage. Vidisha (ancient Besnagar/Bhilsa) was a major city of the Maurya Empire — the 3rd century BCE Heliodorus Pillar at Besnagar (near Vidisha) was erected by Heliodorus, a Greek ambassador from the Indo-Greek Kingdom of Taxila, who converted to Vaishnavism and honoured Vasudeva-Krishna — the earliest known Sanskrit inscription by a foreigner and a remarkable testament to India's multicultural ancient civilization. Sanchi (in Vidisha district) — with the Great Stupa of Ashoka (3rd century BCE), the most perfect Buddhist architecture in India — is a UNESCO World Heritage Site. The Udayagiri caves (Gupta dynasty rock-cut temples, 5th century CE) are nearby.</p>
<p>RedHeart delivers flowers across Vidisha — Main Market, Sanchi area, Besnagar area, Ganjbasoda area, Kurwai area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vidisha, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sanchi area, Besnagar, Ganjbasoda, Kurwai, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, lotus, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Buddha Purnima at Sanchi available from Vidisha?", answer: "Yes, Sanchi (Vidisha district's UNESCO World Heritage stupa) holds Buddha Purnima celebrations. Lotus, white flowers, and Buddhist ceremony arrangements for Sanchi are available from Vidisha." },
      { question: "Can I get birthday flowers in Vidisha?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Vidisha for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Vidisha?", answer: "Yes, same-day delivery is available across Vidisha for orders placed before 3 PM." }
    ]
  },

  "sonbhadra": {
    cityName: "Sonbhadra",
    metaTitle: "Flower Delivery in Sonbhadra | Renukoot Power Corridor UP | RedHeart",
    metaDescription: "Order flowers in Sonbhadra, UP. Same-day delivery near Rihand Dam & across Sonbhadra. From ₹399.",
    h1: "Online Flower Delivery in Sonbhadra",
    metaKeyword: "flower delivery sonbhadra, online flowers sonbhadra uttar pradesh, florist sonbhadra, flowers sonbhadra renukoot hindalco rihand dam son river vindhya tribal",
    footerContent: `
<h2>Flower Delivery in Sonbhadra — Rihand Dam's Power Empire and UP's Tribal Vindhya Borderland</h2>
<p>Sonbhadra, in the extreme southeastern corner of Uttar Pradesh at the Chhattisgarh, Jharkhand, and MP borders, is the headquarters of Sonbhadra district — UP's southernmost district and one of India's most important industrial energy districts. The Rihand Dam (Govind Ballabh Pant Sagar) — a major hydroelectric dam on the Rihand River (a Son tributary), forming India's third-largest man-made reservoir — powers the Renukoot industrial complex. Hindalco (Aditya Birla Group's aluminium plant at Renukoot) — one of India's most important aluminium smelters, powered by the Rihand Dam's hydroelectricity — is the anchor industry. NTPC Singrauli and the coal-thermal power cluster in the Singrauli-Sonbhadra belt make this the "Energy District of India." The Kaimur Range (Vindhya hills) with the Karkat wildlife sanctuary is an important forest ecosystem. The Gond-Khairwar-Agaria tribal communities have deep historical roots here.</p>
<p>RedHeart delivers flowers across Sonbhadra — Robertsganj Main Market, Renukoot area, Obra area, Chopan area, Anpara area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonbhadra, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Robertsganj, Renukoot area, Obra, Chopan, Anpara, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Sonbhadra?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sonbhadra for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Sonbhadra?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Sonbhadra." },
      { question: "Do you deliver flowers same day in Sonbhadra?", answer: "Yes, same-day delivery is available across Sonbhadra for orders placed before 3 PM." }
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
