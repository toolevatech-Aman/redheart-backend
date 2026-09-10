// Batch 47 — 15 cities:
// Bihar: Siwan, Supaul, Saharsa
// UP: Kannauj, Farrukhabad, Etawah, Jalaun
// Telangana: Rajanna Sircilla, Vikarabad, Narayanpet, Wanaparthy
// Jharkhand: Godda, Sahibganj, Jamtara, Saraikela-Kharsawan

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "siwan": {
    cityName: "Siwan",
    metaTitle: "Flower Delivery in Siwan | Bihar | RedHeart",
    metaDescription: "Order flowers in Siwan, Bihar. Same-day delivery near Maharajganj & across Siwan. From ₹399.",
    h1: "Online Flower Delivery in Siwan",
    metaKeyword: "flower delivery siwan, online flowers siwan bihar, florist siwan, flowers siwan gandak ghaghra bhojpuri chhath puja saran division",
    footerContent: `
<h2>Flower Delivery in Siwan — Gandak-Ghaghra Bhojpuri Heartland at the Nepal Border</h2>
<p>Siwan, in the western Saran division of Bihar near the Nepal-UP border, is one of the most distinctively Bhojpuri districts of Bihar — the name Siwan itself is associated with the Bhojpuri language and cultural diaspora in Mauritius, Suriname, and the Caribbean (Bhojpuri-speaking "girmitiyas" transported as indentured labourers in the colonial era often originated from Saran-Siwan-Gorakhpur). The district is flanked by the Gandak (east) and the Ghaghra (south) rivers. The Siwan town has historical significance as a centre of the Khilafat Movement (early 1920s). The area is a major hub for vegetable and paddy cultivation in the Terai alluvial plain. Chhath Puja on the Gandak and Ghaghra ghats is the year's defining communal event.</p>
<p>RedHeart delivers flowers across Siwan — Main Market, Gopalganj Road, Chhapra Road, Maharajganj area, Darauli area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siwan, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gopalganj Road, Chhapra Road, Maharajganj, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Siwan?", answer: "Yes, Chhath Puja on the Gandak and Ghaghra ghats is Siwan's most important festival. Lotus, marigold, and arghya flower sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Siwan?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Siwan for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Siwan?", answer: "Yes, same-day delivery is available across Siwan for orders placed before 3 PM." }
    ]
  },

  "supaul": {
    cityName: "Supaul",
    metaTitle: "Flower Delivery in Supaul | Bihar | RedHeart",
    metaDescription: "Order flowers in Supaul, Bihar. Same-day delivery near Kosi River flood zone & across Supaul. From ₹399.",
    h1: "Online Flower Delivery in Supaul",
    metaKeyword: "flower delivery supaul, online flowers supaul bihar, florist supaul, flowers supaul kosi river flood mithila maithili bhimnagar barrage",
    footerContent: `
<h2>Flower Delivery in Supaul — Kosi's Flood-Sculpted Mithila District at the Nepal Border</h2>
<p>Supaul, in the Mithila region of north Bihar near Nepal, is the headquarters of Supaul district — defined almost entirely by its relationship with the Kosi River ("Bihar's Sorrow" or "Sorrow of Bihar"), one of the most flood-prone rivers in Asia. The Kosi originates in Nepal's glaciers and descends as an enormous braided river across the Terai, causing devastating annual inundation that affects lakhs of families in Supaul and the adjacent Saharsa, Madhubani, and Purnia districts. The Bhimnagar Barrage (on the Nepal-India border at the Kosi's point of entry into India) is a major embankment-and-barrage system managing the Kosi's flooding. Despite the floods, the Supaul-Mithila plains are fertile and support Maithili culture, Mithila painting traditions, and Chhath Puja on the Kosi ghats.</p>
<p>RedHeart delivers flowers across Supaul — Main Market, Triveniganj area, Saharsa Road, Birpur area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Supaul, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Triveniganj, Saharsa Road, Birpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, lotus, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Supaul?", answer: "Yes, Chhath Puja on the Kosi ghats is Supaul's most sacred festival. Lotus, marigold, and arghya flower sets for the sunrise and sunset ceremonies are available." },
      { question: "Are flowers for Mithila/Madhubani art events available in Supaul?", answer: "Yes, the Mithila cultural belt includes Supaul. Marigolds, lotus, and seasonal arrangements for Mithila festival events are available in Supaul." },
      { question: "Do you deliver flowers same day in Supaul?", answer: "Yes, same-day delivery is available across Supaul for orders placed before 3 PM." }
    ]
  },

  "saharsa": {
    cityName: "Saharsa",
    metaTitle: "Flower Delivery in Saharsa | Bihar | RedHeart",
    metaDescription: "Order flowers in Saharsa, Bihar. Same-day delivery near Kosi flood plains & across Saharsa. From ₹399.",
    h1: "Online Flower Delivery in Saharsa",
    metaKeyword: "flower delivery saharsa, online flowers saharsa bihar, florist saharsa, flowers saharsa kosi river maithili mithila koshi tappu wildlife nepal",
    footerContent: `
<h2>Flower Delivery in Saharsa — Ancient Koshalya's Town at the Heart of the Kosi Delta</h2>
<p>Saharsa, in the Kosi division of north Bihar, is the headquarters of Saharsa district — the administrative hub of the Kosi region and the seat of the Kosi Division Commissioner. The city lies in the vast Kosi delta and alluvial fan, one of the most dynamically changing river landscapes in the world — the Kosi River has been shifting its course westward for millennia (it has shifted 113 km westward in 250 years), creating constantly evolving silt plains. Saharsa has ancient Maithili and Buddhist heritage — the Uchaith temple (dedicated to Bhagwati) is the district's most important religious site. The district is bounded by the Kosi Embankment (a massive earthwork built in the 1950s-60s to contain the Kosi floods). The Nepal Koshi Tappu Wildlife Reserve (across the border) protects dolphins, Gangetic elephants, and wetland birds.</p>
<p>RedHeart delivers flowers across Saharsa — Main Market, Madhepura Road, Darbhanga Road, Simri Bakhtiyarpur area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saharsa, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Madhepura Road, Darbhanga Road, Simri Bakhtiyarpur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, lotus, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Saharsa?", answer: "Yes, Chhath Puja on the Kosi embankment ghats is Saharsa's most important festival. Lotus, marigold, and arghya sets are available for same-day delivery." },
      { question: "Can I get wedding flowers in Saharsa?", answer: "Yes, rose garlands, marigold arrangements, and wedding bouquets are available for same-day delivery across Saharsa." },
      { question: "Do you deliver flowers same day in Saharsa?", answer: "Yes, same-day delivery is available across Saharsa for orders placed before 3 PM." }
    ]
  },

  "kannauj": {
    cityName: "Kannauj",
    metaTitle: "Flower Delivery in Kannauj | Perfume Capital of India | RedHeart",
    metaDescription: "Order flowers in Kannauj, UP. Same-day delivery near Kannauj ittar (perfume) district & across Kannauj. From ₹399.",
    h1: "Online Flower Delivery in Kannauj",
    metaKeyword: "flower delivery kannauj, online flowers kannauj uttar pradesh, florist kannauj, flowers kannauj ittar perfume attar rose jasmine cultivation kanauj",
    footerContent: `
<h2>Flower Delivery in Kannauj — India's Perfume Capital and the Rose Petals of Harsha's Capital</h2>
<p>Kannauj (ancient Kanyakubja), on the Ganga's bank in central Uttar Pradesh, is one of India's most ancient cities — the capital of Emperor Harsha (7th century CE), who governed an empire spanning northern India. The city is today world-famous as India's "Perfume Capital" — Kannauj is the undisputed hub of traditional ittar (attar) and perfume manufacturing in India. The city's hundreds of family-owned distilleries produce rose, jasmine, marigold, kewra, and sandalwood ittars using the ancient deg-bhapka (copper still and receiver) method — a process that UNESCO recognised as an Intangible Cultural Heritage of Humanity. The GI-tagged "Kannauj Ittar" is celebrated globally. The soil and microclimate around Kannauj produces a particular quality of Rosa damascena (Damask rose) grown specifically for distillation.</p>
<p>RedHeart delivers flowers across Kannauj — Main Market, Ganga Ghat area, Farrukhabad Road, Kanpur Road, Tirwa area, and Station Road. Our range includes roses (including special Kannauj cultivation varieties), jasmine, marigolds, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kannauj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ganga Ghat, Farrukhabad Road, Kanpur Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses (Kannauj Damascus), jasmine, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are locally cultivated roses available in Kannauj, India's Perfume Capital?", answer: "Yes, Kannauj is India's perfume capital — the Rosa damascena (Damask rose) cultivated around Kannauj for distillation is among India's finest. Rose bouquets from this local cultivation are available in Kannauj." },
      { question: "Can I get jasmine flowers in Kannauj?", answer: "Yes, jasmine (used for jasmine ittar distillation) is grown extensively around Kannauj. Fresh jasmine gajras and bouquets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Kannauj?", answer: "Yes, same-day delivery is available across Kannauj for orders placed before 3 PM." }
    ]
  },

  "farrukhabad": {
    cityName: "Farrukhabad",
    metaTitle: "Flower Delivery in Farrukhabad | Fatehgarh UP | RedHeart",
    metaDescription: "Order flowers in Farrukhabad (Fatehgarh), UP. Same-day delivery near Ganga & across Farrukhabad. From ₹399.",
    h1: "Online Flower Delivery in Farrukhabad",
    metaKeyword: "flower delivery farrukhabad, online flowers farrukhabad uttar pradesh, florist farrukhabad fatehgarh, flowers farrukhabad ganga potato printing nawab",
    footerContent: `
<h2>Flower Delivery in Farrukhabad — Fatehgarh's Nawabi River Town and the Potato-Printing Textile Heritage</h2>
<p>Farrukhabad (with its twin town Fatehgarh as the district headquarters), on the Ganga's south bank in central UP between Kanpur and Kannauj, is a district with layers of Mughal, Nawabi, and colonial heritage. The city of Farrukhabad was founded in the 18th century by Nawab Muhammad Khan Bangash — a powerful Pathan chieftain who carved a semi-independent polity in the Ganga-Yamuna doab. Fatehgarh (the district headquarters) has a historically significant Civil Lines and British garrison site — the 1857 Uprising's Fatehgarh events (the killings of British families and the subsequent punishments) are a key episode. The region is known for its traditional potato-block printing (chapa) on cotton fabrics. Farrukhabad is also India's second-largest potato-producing district (after Agra), with vast fields in the fertile Ganga doab alluvium.</p>
<p>RedHeart delivers flowers across Farrukhabad — Main Market, Fatehgarh area, Ganga Ghat, Kannauj Road, Kanpur Road, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Farrukhabad (Fatehgarh), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Fatehgarh, Ganga Ghat, Kannauj Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for a Ganga ghat puja available in Farrukhabad?", answer: "Yes, marigolds, lotus, and puja sets for the Ganga ghats of Farrukhabad and Fatehgarh are available for same-day delivery." },
      { question: "Can I get birthday flowers in Farrukhabad?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Farrukhabad for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Farrukhabad?", answer: "Yes, same-day delivery is available across Farrukhabad for orders placed before 3 PM." }
    ]
  },

  "etawah": {
    cityName: "Etawah",
    metaTitle: "Flower Delivery in Etawah | Chambal Safari UP | RedHeart",
    metaDescription: "Order flowers in Etawah, UP. Same-day delivery near Chambal Safari Lodge & across Etawah. From ₹399.",
    h1: "Online Flower Delivery in Etawah",
    metaKeyword: "flower delivery etawah, online flowers etawah uttar pradesh, florist etawah, flowers etawah chambal lion safari yamuna chambal ravine mulayam yadav",
    footerContent: `
<h2>Flower Delivery in Etawah — Chambal's Ravines, the Safari Lion Park, and Mulayam's Saifai</h2>
<p>Etawah, on the Yamuna-Chambal confluence in western Uttar Pradesh, is a city of remarkable geographical and political identity. The Chambal River's distinctive "badland" ravines (beehads) — one of India's most dramatic natural landscapes, carved 30-60 metres deep into the Yamuna alluvium — are a defining feature of the Etawah-Morena landscape. The Etawah Safari Park (a part of the lion conservation efforts in UP, launched to reintroduce Asiatic lions outside Gir) is a major wildlife tourism draw. Etawah is the home town of Mulayam Singh Yadav (Saifai village, Etawah district), the Samajwadi Party patriarch, and this has made the Saifai Cultural Programme an annual spectacle. The 1857 Uprising at Etawah (led by local taluqdars) is well-documented.</p>
<p>RedHeart delivers flowers across Etawah — Main Market, Agra Road, Kanpur Road, Saifai area, Jaswantnagar area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Etawah, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Agra Road, Kanpur Road, Saifai, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for an Etawah Safari resort stay?", answer: "Yes, the Etawah Safari Park (lion conservation and safari) is a popular tourist destination. Rose bouquets and nature-themed arrangements for safari lodge stays can be delivered in Etawah." },
      { question: "Are flowers for Holi available in Etawah?", answer: "Yes, Holi is celebrated with great exuberance in Etawah. Seasonal marigold and rose arrangements for the festival are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Etawah?", answer: "Yes, same-day delivery is available across Etawah for orders placed before 3 PM." }
    ]
  },

  "jalaun": {
    cityName: "Jalaun",
    metaTitle: "Flower Delivery in Jalaun | Orai UP | RedHeart",
    metaDescription: "Order flowers in Jalaun (Orai), UP. Same-day delivery near Betwa River & across Jalaun. From ₹399.",
    h1: "Online Flower Delivery in Jalaun",
    metaKeyword: "flower delivery jalaun, online flowers jalaun orai uttar pradesh, florist jalaun orai, flowers jalaun betwa river bundelkhand panna border",
    footerContent: `
<h2>Flower Delivery in Jalaun — Betwa River District at the Bundelkhand-Agra Plain Junction</h2>
<p>Jalaun, headquartered at Orai on the Betwa River in central Uttar Pradesh, is a district at the northern edge of Bundelkhand — the rugged, drought-prone plateau region of central India (straddling MP and UP) known for its granite hills, ancient forts, and the legacy of the Bundela Rajputs and the Maratha commander Tantia Tope. The Betwa River (one of the major Yamuna tributaries, rising in the Vindhyas near Bhopal and flowing northeast through Jhansi-Hamirpur-Jalaun) is the lifeline of Bundelkhand and a sacred river in the Puranas. Orai has a significant Dal (lentil) and Jowar (sorghum) market — Jalaun is one of UP's major pulses-growing districts. The Kachhwaghati ravine is a scenic beehad formation.</p>
<p>RedHeart delivers flowers across Jalaun — Orai Main Market, Betwa Ghat area, Jhansi Road, Kanpur Road, Konch area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalaun (Orai), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orai Main Market, Betwa Ghat, Jhansi Road, Kanpur Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Diwali available in Jalaun?", answer: "Yes, Diwali marigold and rose arrangements are available for same-day delivery in Jalaun (Orai)." },
      { question: "Can I get birthday flowers in Jalaun?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jalaun for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Jalaun?", answer: "Yes, same-day delivery is available across Jalaun and Orai for orders placed before 3 PM." }
    ]
  },

  "rajanna-sircilla": {
    cityName: "Rajanna Sircilla",
    metaTitle: "Flower Delivery in Rajanna Sircilla | Handloom Telangana | RedHeart",
    metaDescription: "Order flowers in Rajanna Sircilla, Telangana. Same-day delivery near Sircilla handloom cluster & across Rajanna. From ₹399.",
    h1: "Online Flower Delivery in Rajanna Sircilla",
    metaKeyword: "flower delivery rajanna sircilla, online flowers sircilla telangana, florist rajanna sircilla, flowers sircilla powerloom handloom saree karimnagar belt",
    footerContent: `
<h2>Flower Delivery in Rajanna Sircilla — Telangana's Handloom and Powerloom Weaving Capital</h2>
<p>Rajanna Sircilla, in north-central Telangana carved from the old Karimnagar district, is one of Telangana's newest and most industrially distinctive districts. Sircilla is renowned as a major powerloom and handloom weaving centre — particularly for polyester sarees and dress materials. The town has hundreds of powerloom units and traditional handloom clusters producing affordable sarees and fabrics that supply markets across South India. The district is named after Rajanna — a colloquial and affectionate term for the Lord Shiva of Sircilla's historic Rajanna (Veerabhadra Swamy) temple. The Manair River forms the district's eastern boundary. The Karimnagar-Sircilla-Jagtial corridor is one of Telangana's fastest industrialising belts.</p>
<p>RedHeart delivers flowers across Rajanna Sircilla — Main Market, Karimnagar Road, Jagitial Road, Yellareddypet area, Vemulawada area, and Station Road. Our range includes roses, marigolds, seasonal Telangana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajanna Sircilla, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Karimnagar Road, Jagitial Road, Vemulawada, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Telangana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Ugadi available in Rajanna Sircilla?", answer: "Yes, Ugadi (Telugu New Year) is a major festival in Sircilla. Marigold and seasonal bouquets for the celebration are available for same-day delivery." },
      { question: "Are flowers for Shiva puja available in Rajanna Sircilla?", answer: "Yes, the Rajanna (Veerabhadra Swamy) Shiva temple is the district's signature deity. Bilva leaves and Shiva puja flowers are available in Rajanna Sircilla." },
      { question: "Do you deliver flowers same day in Rajanna Sircilla?", answer: "Yes, same-day delivery is available across Rajanna Sircilla for orders placed before 3 PM." }
    ]
  },

  "vikarabad": {
    cityName: "Vikarabad",
    metaTitle: "Flower Delivery in Vikarabad | Ananthagiri Hills Telangana | RedHeart",
    metaDescription: "Order flowers in Vikarabad, Telangana. Same-day delivery near Ananthagiri Hills & across Vikarabad. From ₹399.",
    h1: "Online Flower Delivery in Vikarabad",
    metaKeyword: "flower delivery vikarabad, online flowers vikarabad telangana, florist vikarabad, flowers vikarabad ananthagiri hills hyderabad rural forest coffee tribe",
    footerContent: `
<h2>Flower Delivery in Vikarabad — Ananthagiri Coffee Hills at Hyderabad's Western Greenery</h2>
<p>Vikarabad, newly created as a separate district from Rangareddy, lies in the hills southwest of Hyderabad — one of Telangana's most scenically varied districts, extending from Hyderabad's western suburban sprawl into the Ananthagiri Hills (the northernmost extension of the Eastern Ghats). The Ananthagiri Hills area is Telangana's most notable coffee-growing zone — the tribal farmers (Lambada and Gond communities in the forested belt) grow Arabica coffee under shade trees in the cool, misty hills. The Pochampally Reservoir and the Ananthagiri Waterfalls are popular weekend getaways from Hyderabad (about 60-80 km). The Kotepally temple and the Sivayogi Sivacharya Ashram are spiritual draws. Vikarabad is named after Paigah nobleman Vikar-ul-Umra.</p>
<p>RedHeart delivers flowers across Vikarabad — Main Market, Hyderabad Road, Tandur area, Ananthagiri area, Dharur area, and Station Road. Our range includes roses, marigolds, seasonal Telangana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vikarabad, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hyderabad Road, Tandur, Ananthagiri Hills, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Telangana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for an Ananthagiri Hills resort stay from Vikarabad?", answer: "Yes, the Ananthagiri Hills in Vikarabad district are popular Hyderabad weekend destinations. Flower arrangements for hill resort stays and coffee estate visits can be delivered from Vikarabad." },
      { question: "Are flowers for Ugadi available in Vikarabad?", answer: "Yes, Ugadi (Telugu New Year) bouquets and seasonal arrangements are available in Vikarabad for same-day delivery." },
      { question: "Do you deliver flowers same day in Vikarabad?", answer: "Yes, same-day delivery is available across Vikarabad for orders placed before 3 PM." }
    ]
  },

  "narayanpet": {
    cityName: "Narayanpet",
    metaTitle: "Flower Delivery in Narayanpet | Telangana | RedHeart",
    metaDescription: "Order flowers in Narayanpet, Telangana. Same-day delivery near Hyderabad border & across Narayanpet. From ₹399.",
    h1: "Online Flower Delivery in Narayanpet",
    metaKeyword: "flower delivery narayanpet, online flowers narayanpet telangana, florist narayanpet, flowers narayanpet saree handloom krishna tungabhadra border karnataka",
    footerContent: `
<h2>Flower Delivery in Narayanpet — GI-Tagged Saree Handloom District at the Karnataka-Telangana Border</h2>
<p>Narayanpet, in southwestern Telangana near the Karnataka border (and historically part of the old Mahbubnagar district), is home to the famous Narayanpet handloom sarees — GI-tagged silk and cotton sarees with distinctive zari borders, woven by the traditional weaver communities (Padmasali and Devanga weavers) in the Narayanpet area for centuries. The sarees are known for their geometric checks, stripes, and temple border patterns. The district also borders the Krishna-Tungabhadra doab on the Karnataka side and has the Kollapur-Achampet forested ranges. The Pillalamarri (a 700-year-old multi-trunk banyan tree near Mahbubnagar) is one of Telangana's most extraordinary natural heritage sites, close to this district.</p>
<p>RedHeart delivers flowers across Narayanpet — Main Market, Hyderabad Road, Mahbubnagar Road, Makthal area, Kosgi area, and Station Road. Our range includes roses, marigolds, seasonal Telangana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narayanpet, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hyderabad Road, Mahbubnagar Road, Makthal, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Telangana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for weddings (along with Narayanpet saree gifting) available in Narayanpet?", answer: "Yes, the Narayanpet handloom saree tradition makes the district a unique gifting destination. Rose bouquets and wedding flower arrangements complementing the saree culture are available for same-day delivery." },
      { question: "Are flowers for Bathukamma (Telangana floral festival) available in Narayanpet?", answer: "Yes, Bathukamma (the unique Telangana festival of stacking seasonal flowers in a pyramid) is celebrated in Narayanpet. Tangedu, marigold, and seasonal Deccan flowers for Bathukamma stacking are available." },
      { question: "Do you deliver flowers same day in Narayanpet?", answer: "Yes, same-day delivery is available across Narayanpet for orders placed before 3 PM." }
    ]
  },

  "wanaparthy": {
    cityName: "Wanaparthy",
    metaTitle: "Flower Delivery in Wanaparthy | Telangana | RedHeart",
    metaDescription: "Order flowers in Wanaparthy, Telangana. Same-day delivery near Krishna River & across Wanaparthy. From ₹399.",
    h1: "Online Flower Delivery in Wanaparthy",
    metaKeyword: "flower delivery wanaparthy, online flowers wanaparthy telangana, florist wanaparthy, flowers wanaparthy krishna river mahbubnagar gadwal nizam estate",
    footerContent: `
<h2>Flower Delivery in Wanaparthy — Nizam Estate Town at the Krishna River's Telangana Plateau</h2>
<p>Wanaparthy, in south-central Telangana near the Krishna River, is the headquarters of Wanaparthy district (carved from old Mahbubnagar district). Wanaparthy has an aristocratic past as one of the Nizam of Hyderabad's important taluqdari estates — the Wanaparthy Fort and the estate's heritage buildings reflect this Nizam-era identity. The district is notable for the Srisailam Reservoir's (Krishna River) left bank extending to Gadwal, and the Krishna Valley cotton and jowar cultivation on the red soils of the Deccan. The Gadwal Sima (the historical Gadwal principality) and its Ramadevara fair are regionally celebrated. The Wanavari temple and the Mahbubnagar-Wanaparthy cotton belt define the local economy.</p>
<p>RedHeart delivers flowers across Wanaparthy — Main Market, Mahbubnagar Road, Gadwal Road, Pebbair area, Atmakur area, and Station Road. Our range includes roses, marigolds, seasonal Telangana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wanaparthy, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mahbubnagar Road, Gadwal Road, Pebbair, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Bathukamma flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Bathukamma available in Wanaparthy?", answer: "Yes, Bathukamma (Telangana's unique floral festival) is celebrated with great enthusiasm in Wanaparthy. Tangedu, marigold, and seasonal Deccan Bathukamma flowers are available." },
      { question: "Can I get flowers for Ugadi in Wanaparthy?", answer: "Yes, Ugadi (Telugu New Year) bouquets and marigold arrangements are available in Wanaparthy for same-day delivery." },
      { question: "Do you deliver flowers same day in Wanaparthy?", answer: "Yes, same-day delivery is available across Wanaparthy for orders placed before 3 PM." }
    ]
  },

  "godda": {
    cityName: "Godda",
    metaTitle: "Flower Delivery in Godda | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Godda, Jharkhand. Same-day delivery near Santhal Parganas & across Godda. From ₹399.",
    h1: "Online Flower Delivery in Godda",
    metaKeyword: "flower delivery godda, online flowers godda jharkhand, florist godda, flowers godda santhal parganas santhali west bengal border coal power adani",
    footerContent: `
<h2>Flower Delivery in Godda — Santhali Border District and Adani Power's Landmark Plant</h2>
<p>Godda, in the Santhal Parganas division of northeastern Jharkhand near the West Bengal border, is the headquarters of Godda district — a predominantly Santhali tribal district in the forested hills between Sahibganj (Ganga) and Deoghar (Baidyanath). The district is geologically part of the Rajmahal Hills basalt plateau. Godda gained international attention when the Adani Power Group was permitted to build a large thermal power plant in the district — controversially, one authorised to export power to Bangladesh. The Gumro Waterfall and the Surya Pahar hills are scenic features. The district has a significant Santhali, Pahariya, and Mal Pahariya tribal population. The Deoghar-Jasidih (Baidyanath Dham Jyotirlinga) pilgrimage centre is about 65 km away, drawing massive Shravan pilgrims through Godda.</p>
<p>RedHeart delivers flowers across Godda — Main Market, Deoghar Road, Sahibganj Road, Mahagama area, Sundarpahari area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Godda, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Deoghar Road, Sahibganj Road, Mahagama, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sohrai flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sohrai (Santhali harvest festival) available in Godda?", answer: "Yes, Sohrai and Karma (Santhali tribal harvest festivals) are celebrated in Godda. Seasonal flower sets for these Jharkhand tribal celebrations are available." },
      { question: "Can I get flowers for the Shravan Baidyanath pilgrimage from Godda?", answer: "Yes, Baidyanath Dham Jyotirlinga (about 65 km from Godda) draws massive Shravan month pilgrims. Bilva, white flowers, and Shiva puja sets for the pilgrimage season are available from Godda." },
      { question: "Do you deliver flowers same day in Godda?", answer: "Yes, same-day delivery is available across Godda for orders placed before 3 PM." }
    ]
  },

  "sahibganj": {
    cityName: "Sahibganj",
    metaTitle: "Flower Delivery in Sahibganj | Ganga Port Jharkhand | RedHeart",
    metaDescription: "Order flowers in Sahibganj, Jharkhand. Same-day delivery near Ganga waterway port & across Sahibganj. From ₹399.",
    h1: "Online Flower Delivery in Sahibganj",
    metaKeyword: "flower delivery sahibganj, online flowers sahibganj jharkhand, florist sahibganj, flowers sahibganj ganga port rajmahal santhal parganas stone bengal",
    footerContent: `
<h2>Flower Delivery in Sahibganj — Ganga Waterway Port City and the Rajmahal Basalt Gateway</h2>
<p>Sahibganj, on the Ganga's bank in the extreme northeast of Jharkhand near the West Bengal border, is the headquarters of Sahibganj district — a district of remarkable riverside and geological character. Sahibganj is the location of one of the three major Ganga waterway terminals on the National Waterway 1 (NW-1, the Varanasi-Haldia corridor) — the Sahibganj Multimodal Terminal is a flagship project of India's inland waterway development programme, designed to handle coal, sand, and container cargo on the Ganga. The Rajmahal Hills' unique Cretaceous basalt (used for construction) are quarried extensively in the district. The Taltalla-Rajmahal area on the Ganga is historically significant as the site of Akbar's Bengal campaign (Akbar's army crossed the Ganga here in the 16th century). The Santhali community is the largest tribal group in Sahibganj.</p>
<p>RedHeart delivers flowers across Sahibganj — Main Market, Ganga Port area, Rajmahal area, Pathna area, Borio area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sahibganj, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ganga Port, Rajmahal, Pathna, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Ganga puja sets, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Ganga puja available in Sahibganj?", answer: "Yes, the Ganga ghats of Sahibganj are significant for religious rituals. Marigold, lotus, and Ganga puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Sahibganj?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sahibganj for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Sahibganj?", answer: "Yes, same-day delivery is available across Sahibganj for orders placed before 3 PM." }
    ]
  },

  "jamtara": {
    cityName: "Jamtara",
    metaTitle: "Flower Delivery in Jamtara | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Jamtara, Jharkhand. Same-day delivery near Barakar River & across Jamtara. From ₹399.",
    h1: "Online Flower Delivery in Jamtara",
    metaKeyword: "flower delivery jamtara, online flowers jamtara jharkhand, florist jamtara, flowers jamtara barakar damodar santhali tribal dumka border",
    footerContent: `
<h2>Flower Delivery in Jamtara — Barakar River District and the Santhal Parganas' Southern Edge</h2>
<p>Jamtara, in the eastern Jharkhand between Dhanbad (industrial) and Dumka (Santhal Parganas), is the headquarters of Jamtara district — a geographically transitional district between the Damodar-Barakar coalfield belt to the south and the Santhal Parganas forested hills to the north. The Barakar River (a major Damodar tributary) forms the southern boundary of the district, flowing through the Damodar Valley. The district has significant Santhali and Kol tribal populations. Jamtara gained nationwide notoriety from the Netflix series "Jamtara: Sabka Number Ayega" (2020), based on a cyberfraud case from the area — a reminder of how digital access in rural India brings both opportunities and challenges. The district has coal deposits at its southern edge shared with Dhanbad.</p>
<p>RedHeart delivers flowers across Jamtara — Main Market, Dhanbad Road, Dumka Road, Nala area, Kundhit area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamtara, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dhanbad Road, Dumka Road, Nala, Kundhit, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Jharkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sohrai (Santhal harvest festival) available in Jamtara?", answer: "Yes, the Santhali tribal community of Jamtara celebrates Sohrai (autumn harvest festival) with marigold and seasonal flowers. Same-day delivery is available." },
      { question: "Can I get birthday flowers in Jamtara?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jamtara for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Jamtara?", answer: "Yes, same-day delivery is available across Jamtara for orders placed before 3 PM." }
    ]
  },

  "saraikela-kharsawan": {
    cityName: "Saraikela-Kharsawan",
    metaTitle: "Flower Delivery in Saraikela-Kharsawan | Chhau Dance Jharkhand | RedHeart",
    metaDescription: "Order flowers in Saraikela-Kharsawan, Jharkhand. Same-day delivery near Chhau dance heritage & across Saraikela. From ₹399.",
    h1: "Online Flower Delivery in Saraikela-Kharsawan",
    metaKeyword: "flower delivery saraikela, online flowers saraikela kharsawan jharkhand, florist saraikela, flowers saraikela chhau dance tata jamshedpur odisha border",
    footerContent: `
<h2>Flower Delivery in Saraikela-Kharsawan — Chhau Mask Dance Country Between Jamshedpur and Odisha</h2>
<p>Saraikela-Kharsawan, in eastern Jharkhand near Jamshedpur and the Odisha border, is one of Jharkhand's culturally richest districts — particularly for the Saraikela Chhau dance tradition. Saraikela Chhau is one of the three classical forms of Chhau mask dance (the others being Purulia Chhau and Mayurbhanj Chhau), and it was historically patronised by the royal family of the Saraikela princely state. The Saraikela Chhau is distinctive for its extremely delicate and colourful papier-mâché masks, exquisite hand-gestures (mudras), and performances of episodes from the Ramayana, Mahabharata, and nature themes. The district is adjacent to Tata Steel's Jamshedpur complex and shares the Kharkai-Subarnarekha river confluence landscape. The Kharsawan region has steel and ferro-alloy industries.</p>
<p>RedHeart delivers flowers across Saraikela-Kharsawan — Main Market, Jamshedpur Road, Chaibasa Road, Gamharia area, Kharsawan area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Saraikela-Kharsawan, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jamshedpur Road, Chaibasa Road, Gamharia, Kharsawan, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Sarhul flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Chhau dance festival available in Saraikela-Kharsawan?", answer: "Yes, the Saraikela Chhau dance festival (a classical Jharkhand art form with royal heritage) is celebrated in March/April. Marigold and seasonal flower arrangements for the cultural festival are available." },
      { question: "Can I get birthday flowers in Saraikela-Kharsawan?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Saraikela-Kharsawan for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Saraikela-Kharsawan?", answer: "Yes, same-day delivery is available across Saraikela-Kharsawan for orders placed before 3 PM." }
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
