// Batch 49 — 15 cities:
// Bihar: Lakhisarai, Khagaria, Banka, Purnia
// Jharkhand: Garhwa, Giridih
// UP: Hathras, Kanpur Dehat, Fatehpur
// Karnataka: Hassan, Mandya
// Rajasthan: Alwar, Churu, Tonk
// AP: Konaseema (East Godavari / Dr. B.R. Ambedkar Konaseema)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "lakhisarai": {
    cityName: "Lakhisarai",
    metaTitle: "Flower Delivery in Lakhisarai | Bihar | RedHeart",
    metaDescription: "Order flowers in Lakhisarai, Bihar. Same-day delivery near Ashok Dham temple & across Lakhisarai. From ₹399.",
    h1: "Online Flower Delivery in Lakhisarai",
    metaKeyword: "flower delivery lakhisarai, online flowers lakhisarai bihar, florist lakhisarai, flowers lakhisarai ashok dham kiu river son ganga bhagalpur belt",
    footerContent: `
<h2>Flower Delivery in Lakhisarai — Ashok Dham's Sacred Hills and the Son-Ganga Bihar Corridor</h2>
<p>Lakhisarai, in central-eastern Bihar between Munger and Nawada, is the headquarters of Lakhisarai district — a district on the Kiu River (a Ganga tributary) in the transition zone between the Ganga plains and the Chota Nagpur Plateau's northern foothills. The Ashok Dham temple complex (a major Shakti and Shiva pilgrimage site on a rocky hill near Lakhisarai town) is the district's most celebrated religious landmark, drawing thousands of pilgrims particularly during Navratri. The district is part of the Bihar "Lakhs highway" corridor connecting Patna-Bhagalpur NH on the north bank of the Ganga. The Kiu River valley supports paddy and maize cultivation. Lakhisarai was historically part of Munger district before its bifurcation in the 1980s.</p>
<p>RedHeart delivers flowers across Lakhisarai — Main Market, Ashok Dham area, Munger Road, Nawada Road, Surajgarha area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Navratri puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhisarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ashok Dham area, Munger Road, Nawada Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, Navratri puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Navratri at the Ashok Dham temple available in Lakhisarai?", answer: "Yes, the Ashok Dham Shakti temple is Lakhisarai's most important pilgrimage site. Marigold garlands and Devi puja sets for the Navratri season are available for same-day delivery." },
      { question: "Can I get birthday flowers in Lakhisarai?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Lakhisarai for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Lakhisarai?", answer: "Yes, same-day delivery is available across Lakhisarai for orders placed before 3 PM." }
    ]
  },

  "khagaria": {
    cityName: "Khagaria",
    metaTitle: "Flower Delivery in Khagaria | Bihar | RedHeart",
    metaDescription: "Order flowers in Khagaria, Bihar. Same-day delivery near Kosi-Ganga confluence & across Khagaria. From ₹399.",
    h1: "Online Flower Delivery in Khagaria",
    metaKeyword: "flower delivery khagaria, online flowers khagaria bihar, florist khagaria, flowers khagaria kosi ganga burhi gandak flood mithila maithili",
    footerContent: `
<h2>Flower Delivery in Khagaria — Kosi-Ganga Delta Town in the Heart of Bihar's Flood Plains</h2>
<p>Khagaria, at the Kosi-Ganga-Burhi Gandak confluence in central-eastern Bihar, is the headquarters of Khagaria district — one of India's most flood-prone districts, situated at the convergence of three major rivers. The Kosi (arriving from Nepal), the Burhi Gandak, and the Ganga all meet in and around Khagaria, making the district extraordinarily fertile but extraordinarily vulnerable to annual inundation. Despite the floods, the silt deposited by the Kosi and Ganga makes the land exceptionally productive for paddy and jute. Khagaria was famous for its river ports in the pre-railway era. The district is in the Maithili-speaking belt of north Bihar, with Chhath Puja on the Ganga-Kosi ghats being the defining annual celebration.</p>
<p>RedHeart delivers flowers across Khagaria — Main Market, Ganga Ghat, Mansi area, Manihara area, Gogri area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khagaria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ganga Ghat, Mansi, Manihara, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath puja flowers, lotus, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Khagaria?", answer: "Yes, Chhath Puja on the Ganga and Kosi ghats of Khagaria is the most important festival. Lotus, marigold, and arghya sets for the sunrise and sunset rituals are available." },
      { question: "Can I get birthday flowers in Khagaria?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Khagaria for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Khagaria?", answer: "Yes, same-day delivery is available across Khagaria for orders placed before 3 PM." }
    ]
  },

  "banka": {
    cityName: "Banka",
    metaTitle: "Flower Delivery in Banka | Jharkhand Border Bihar | RedHeart",
    metaDescription: "Order flowers in Banka, Bihar. Same-day delivery near Mandar Hill & across Banka. From ₹399.",
    h1: "Online Flower Delivery in Banka",
    metaKeyword: "flower delivery banka, online flowers banka bihar, florist banka, flowers banka mandar hill jain bhagalpur jharkhand border textile",
    footerContent: `
<h2>Flower Delivery in Banka — Mandar Hill's Jain Pilgrimages at the Jharkhand-Bihar Border</h2>
<p>Banka, in eastern Bihar at the Jharkhand border, is the headquarters of Banka district — a hilly district on the transition zone between the Ganga plains and the Jharkhand plateau. The Mandar Hill (Mandar Parvat) near Banka is the most sacred site in the district — in Hindu mythology, Mandar is identified as the cosmic mountain used as a churning rod during the Samudra Manthan (churning of the cosmic ocean to produce amrita/nectar), and it is simultaneously an important Jain pilgrimage site (with the footprint of the 12th Tirthankar). The Amba or Banka Durga temple at the base of the hill is a pilgrimage during Navratri. Banka is known for silk saree and tassar silk weaving — the Bhagalpur-Banka belt is Bihar's silk region.</p>
<p>RedHeart delivers flowers across Banka — Main Market, Mandar Hill area, Bhagalpur Road, Dhuraiya area, Barahat area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and Navratri puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banka, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mandar Hill area, Bhagalpur Road, Dhuraiya, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, Navratri puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Mandar Hill Navratri puja available in Banka?", answer: "Yes, the Mandar Hill Amba Durga temple is Banka's major Navratri pilgrimage site. Marigold garlands and Devi puja sets for the festive season are available in Banka." },
      { question: "Are flowers for Jain puja at Mandar Parvat available?", answer: "Yes, Mandar Parvat is also a significant Jain pilgrimage site. White flowers and marigolds for Jain puja at the hill temple are available from Banka." },
      { question: "Do you deliver flowers same day in Banka?", answer: "Yes, same-day delivery is available across Banka for orders placed before 3 PM." }
    ]
  },

  "purnia": {
    cityName: "Purnia",
    metaTitle: "Flower Delivery in Purnia | Bihar | RedHeart",
    metaDescription: "Order flowers in Purnia, Bihar. Same-day delivery near Mahananda River & across Purnia. From ₹399.",
    h1: "Online Flower Delivery in Purnia",
    metaKeyword: "flower delivery purnia, online flowers purnia bihar, florist purnia, flowers purnia mahananda kosi jute mithila purnea katihar north bengal",
    footerContent: `
<h2>Flower Delivery in Purnia — Mahananda-Kosi Jute and Makhana District at the Bengal-Nepal Tri-Border</h2>
<p>Purnia (Purnea), in the extreme northeast of Bihar at the Nepal-West Bengal border, is one of Bihar's historically important commercial and divisional towns — the headquarters of Purnia division. The district sits in the Mahananda-Kosi interfluves at the Bihar-Bengal-Nepal junction, which creates one of India's most biodiverse and fertile river-delta zones. Purnia is India's most important makhana (fox nut / lotus seed) producing and processing centre — the Purnia district produces the majority of India's makhana, a uniquely aquatic crop grown in the shallow ponds and marshes of the Terai (the crop is a GI-tagged product associated with Bihar's Mithila region). The jute and pineapple cultivation are also significant. The Kali Mandir at Ramna Durga Kund is the district's most important religious site.</p>
<p>RedHeart delivers flowers across Purnia — Main Market, Gola Road, Katihar Road, Banmankhi area, Bhawanipur area, and Station Road. Our range includes roses, marigolds, lotus, seasonal Bihar bouquets, and Chhath puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purnia, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gola Road, Katihar Road, Banmankhi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, Chhath puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Purnia?", answer: "Yes, Chhath Puja on the Kosi-Mahananda ghats is Purnia's biggest celebration. Lotus, marigold, and arghya sets for the sunrise/sunset rituals are available." },
      { question: "Are lotus flowers locally available in Purnia?", answer: "Yes, Purnia is India's makhana (lotus seed) capital — lotus is abundantly grown in local ponds. Fresh lotus flowers for puja and décor are available in Purnia." },
      { question: "Do you deliver flowers same day in Purnia?", answer: "Yes, same-day delivery is available across Purnia for orders placed before 3 PM." }
    ]
  },

  "garhwa": {
    cityName: "Garhwa",
    metaTitle: "Flower Delivery in Garhwa | Jharkhand | RedHeart",
    metaDescription: "Order flowers in Garhwa, Jharkhand. Same-day delivery near North Koel River & across Garhwa. From ₹399.",
    h1: "Online Flower Delivery in Garhwa",
    metaKeyword: "flower delivery garhwa, online flowers garhwa jharkhand, florist garhwa, flowers garhwa north koel palamu chhattisgarh border sonhat coal plateau",
    footerContent: `
<h2>Flower Delivery in Garhwa — North Koel River Plateau at the Chhattisgarh-UP Triple Border</h2>
<p>Garhwa, in western Jharkhand at the Chhattisgarh-Uttar Pradesh border, is the headquarters of Garhwa district — the westernmost district of Jharkhand, situated in the North Koel River valley of the Chota Nagpur Plateau's western extension. The district borders Chhattisgarh (Surguja) to the south and UP (Sonbhadra) to the northwest — giving it a unique tri-state border location. The North Koel River (which joins the South Koel to form the Koel before joining the Ganga via the Sone) carves through the district's plateau landscape. Garhwa has significant coal deposits. The Koderma-Garhwa-Palamu plateau forms an important wildlife corridor. The Cheria and Manika areas have tribal Oraon and Munda populations.</p>
<p>RedHeart delivers flowers across Garhwa — Main Market, Ranchi Road, Palamu Road, Ranka area, Nagar Untari area, and Station Road. Our range includes roses, marigolds, seasonal Jharkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Garhwa, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ranchi Road, Palamu Road, Ranka, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Jharkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Sarhul available in Garhwa?", answer: "Yes, Sarhul (the Oraon tribal spring festival welcoming the Sal flowers) is celebrated in Garhwa. Seasonal forest flower arrangements for the festival are available." },
      { question: "Can I get birthday flowers in Garhwa?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Garhwa for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Garhwa?", answer: "Yes, same-day delivery is available across Garhwa for orders placed before 3 PM." }
    ]
  },

  "giridih": {
    cityName: "Giridih",
    metaTitle: "Flower Delivery in Giridih | Parasnath Hill Jharkhand | RedHeart",
    metaDescription: "Order flowers in Giridih, Jharkhand. Same-day delivery near Parasnath Hill & across Giridih. From ₹399.",
    h1: "Online Flower Delivery in Giridih",
    metaKeyword: "flower delivery giridih, online flowers giridih jharkhand, florist giridih, flowers giridih parasnath hill jain tirth sammetsikhar mica coal",
    footerContent: `
<h2>Flower Delivery in Giridih — Parasnath Hill's Jain Sacred Peak and the Usri Falls District</h2>
<p>Giridih, in east-central Jharkhand, is the headquarters of Giridih district — a district of extraordinary Jain religious and natural heritage. The Parasnath Hill (Sammed Shikhar) — at 1,365 metres, the highest peak of Jharkhand — is the holiest pilgrimage site in all of Jainism, believed to be the location where 20 of the 24 Tirthankaras (Jain saints who attained liberation/moksha) achieved nirvana. The hill's summit is ringed by 26 "tukh" (shrines marking liberation sites) and draws Jain pilgrims from across India and the world, particularly during Paryushana. Giridih also hosts the Usri Falls (a scenic waterfall on the Usri River) and a tradition of mica mining. The Dharamtand village is associated with the Zoroastrian missionary Framji Cowasji who made Giridih famous in British India.</p>
<p>RedHeart delivers flowers across Giridih — Main Market, Parasnath Hill area, Dhanbad Road, Hazaribagh Road, Tundi area, and Station Road. Our range includes roses, marigolds, white Jain puja flowers, and seasonal Jharkhand bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Giridih, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Parasnath Hill area, Dhanbad Road, Hazaribagh Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">White marigolds, roses, Jain puja flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Paryushana (Jain festival) available in Giridih?", answer: "Yes, Giridih's Parasnath Hill (Sammed Shikhar) is the most sacred Jain pilgrimage site in India. White flowers and marigolds for Paryushana celebrations and the pilgrimage to Parasnath are available." },
      { question: "Can I get flowers for a Parasnath Hill yatra gift from Giridih?", answer: "Yes, auspicious flower arrangements for Jain yatra pilgrims ascending the Parasnath Hill (Sammed Shikhar) are available from Giridih." },
      { question: "Do you deliver flowers same day in Giridih?", answer: "Yes, same-day delivery is available across Giridih for orders placed before 3 PM." }
    ]
  },

  "hathras": {
    cityName: "Hathras",
    metaTitle: "Flower Delivery in Hathras | UP | RedHeart",
    metaDescription: "Order flowers in Hathras, UP. Same-day delivery near Aligarh & across Hathras. From ₹399.",
    h1: "Online Flower Delivery in Hathras",
    metaKeyword: "flower delivery hathras, online flowers hathras uttar pradesh, florist hathras, flowers hathras aligarh agra braj mathura belt doab",
    footerContent: `
<h2>Flower Delivery in Hathras — Doab Agricultural Town at the Braj-Aligarh Boundary</h2>
<p>Hathras, in the western Yamuna-Ganga doab of Uttar Pradesh between Mathura and Aligarh, is the headquarters of Hathras district (carved from Aligarh in 1997). The district is at the cultural boundary between the Braj region (the legendary homeland of Lord Krishna, centred on Mathura-Vrindavan) and the Doab's agricultural belt. The area around Hathras is known for its asafoetida (heeng) wholesale markets — Hathras is one of India's major heeng trading centres. The Sadabahaar temple and local Radha-Krishna temples reflect the Braj devotional tradition. Hathras's rural economy centres on wheat, mustard, and sugarcane on the black and loam soils of the doab.</p>
<p>RedHeart delivers flowers across Hathras — Main Market, Aligarh Road, Agra Road, Mathura Road, Sikandra Rao area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hathras, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Aligarh Road, Agra Road, Mathura Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Radha-Krishna puja and Janmashtami available in Hathras?", answer: "Yes, Hathras is close to the Braj-Mathura Radha-Krishna belt. Marigolds, lotus, and Janmashtami puja sets are available for same-day delivery." },
      { question: "Can I get birthday flowers in Hathras?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Hathras for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Hathras?", answer: "Yes, same-day delivery is available across Hathras for orders placed before 3 PM." }
    ]
  },

  "kanpur-dehat": {
    cityName: "Kanpur Dehat",
    metaTitle: "Flower Delivery in Kanpur Dehat | Akbarpur UP | RedHeart",
    metaDescription: "Order flowers in Kanpur Dehat (Akbarpur), UP. Same-day delivery across Kanpur Dehat district. From ₹399.",
    h1: "Online Flower Delivery in Kanpur Dehat",
    metaKeyword: "flower delivery kanpur dehat, online flowers kanpur dehat uttar pradesh, florist kanpur dehat akbarpur, flowers kanpur dehat yamuna agricultural belt kanpur nagar",
    footerContent: `
<h2>Flower Delivery in Kanpur Dehat — Yamuna Agricultural Hinterland Around India's Manchester</h2>
<p>Kanpur Dehat (headquartered at Akbarpur), in the Ganga-Yamuna doab west of Kanpur city in Uttar Pradesh, is the administrative district surrounding the city of Kanpur on the rural (dehat/rural) side — distinct from Kanpur Nagar (the urban district). The district is an important agricultural zone supporting mustard, wheat, and vegetable cultivation in the Yamuna alluvial plain. The Akbarpur town has historical significance as a traditional Kayastha-zamindari settlement in the Awadh-Agra transition zone. The Ramaipur, Bhognipur, and Mahoba areas (the district's tehsils) link the Kanpur conurbation with the Hamirpur-Jalaun Bundelkhand corridor. Kanpur Dehat's villages supply labour and vegetables to the massive Kanpur urban industrial belt.</p>
<p>RedHeart delivers flowers across Kanpur Dehat — Akbarpur Main Market, Kanpur Road, Jalaun Road, Bhognipur area, Ramaipur area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kanpur Dehat, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Akbarpur, Kanpur Road, Jalaun Road, Bhognipur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a wedding in Kanpur Dehat?", answer: "Yes, rose garlands, marigold arrangements, and wedding bouquets are available for same-day delivery across Kanpur Dehat (Akbarpur)." },
      { question: "Are flowers for Diwali available in Kanpur Dehat?", answer: "Yes, Diwali marigold and rose arrangements are available for same-day delivery in Kanpur Dehat." },
      { question: "Do you deliver flowers same day in Kanpur Dehat?", answer: "Yes, same-day delivery is available across Kanpur Dehat for orders placed before 3 PM." }
    ]
  },

  "fatehpur": {
    cityName: "Fatehpur",
    metaTitle: "Flower Delivery in Fatehpur | UP | RedHeart",
    metaDescription: "Order flowers in Fatehpur, UP. Same-day delivery near Ganga-Yamuna doab & across Fatehpur. From ₹399.",
    h1: "Online Flower Delivery in Fatehpur",
    metaKeyword: "flower delivery fatehpur, online flowers fatehpur uttar pradesh, florist fatehpur, flowers fatehpur ganga yamuna doab bindki allahabad kanpur",
    footerContent: `
<h2>Flower Delivery in Fatehpur — Ganga-Yamuna Doab's Mustard Country Between Kanpur and Allahabad</h2>
<p>Fatehpur, in the Ganga-Yamuna doab of central Uttar Pradesh between Kanpur and Prayagraj (Allahabad), is the headquarters of Fatehpur district — a district at the narrow tip of the doab where the Ganga and Yamuna rivers converge toward the Triveni Sangam of Prayagraj. The district has fertile alluvial soil supporting mustard, wheat, and lentil cultivation — the Fatehpur-Bindki-Khaga agricultural belt is known for mustard (sarson) and black gram (urad). The town of Bindki (in the district) is associated with the poet Harivansh Rai Bachchan (who spent time in this area — his father was from this region). The Ganga ghats at Khaga and the Yamuna ghats are locally important for puja and Chhath observances.</p>
<p>RedHeart delivers flowers across Fatehpur — Main Market, Allahabad Road, Kanpur Road, Bindki area, Khaga area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehpur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Allahabad Road, Kanpur Road, Bindki, Khaga, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Diwali available in Fatehpur?", answer: "Yes, Diwali marigold and rose arrangements are available for same-day delivery in Fatehpur." },
      { question: "Can I get birthday flowers in Fatehpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Fatehpur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Fatehpur?", answer: "Yes, same-day delivery is available across Fatehpur for orders placed before 3 PM." }
    ]
  },

  "hassan": {
    cityName: "Hassan",
    metaTitle: "Flower Delivery in Hassan | Hoysala Karnataka | RedHeart",
    metaDescription: "Order flowers in Hassan, Karnataka. Same-day delivery near Belur-Halebidu temples & across Hassan. From ₹399.",
    h1: "Online Flower Delivery in Hassan",
    metaKeyword: "flower delivery hassan, online flowers hassan karnataka, florist hassan, flowers hassan belur halebidu hoysala temple shravanabelagola coffee",
    footerContent: `
<h2>Flower Delivery in Hassan — Hoysala Temple Country Between Belur, Halebidu, and Shravanabelagola</h2>
<p>Hassan, in the coffee and spice hills of southwestern Karnataka, is the headquarters of Hassan district — one of Karnataka's most culturally and artistically extraordinary districts. The district is home to three UNESCO or nationally significant heritage sites: Belur (with the exquisite Chennakesava temple — a Hoysala masterpiece of 12th century CE with its 42 Madanikas carved in impossibly intricate detail), Halebidu (the Hoysaleswara and Shantaleswara temples — the apex of Hoysala stone carving, with thousands of friezes of elephants, horses, deities, and foliage), and Shravanabelagola (the 18-metre monolithic statue of Gommateshwara/Bahubali — one of the world's largest monolithic statues and the site of the Mahamastakabhisheka, the Jain anointing ceremony held every 12 years). Hassan district also has significant coffee, cardamom, and arecanut cultivation in its Malnad (Western Ghats) zone.</p>
<p>RedHeart delivers flowers across Hassan — Main Market, Belur Road, Mangaluru Road, Shravanabelagola area, Arkalgud area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Karnataka bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hassan, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Belur Road, Mangaluru Road, Shravanabelagola, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Shravanabelagola Mahamastakabhisheka Jain ceremony available from Hassan?", answer: "Yes, the Shravanabelagola Gommateshwara Mahamastakabhisheka (the 12-yearly Jain anointing ceremony) is in Hassan district. Marigold, lotus, and Jain puja arrangements for the ceremony are available from Hassan." },
      { question: "Can I get flowers for a Belur-Halebidu heritage resort anniversary from Hassan?", answer: "Yes, the Hoysala temple heritage areas (Belur and Halebidu) are in Hassan district. Rose bouquets for heritage resort stays near the 12th century Hoysala temples can be delivered." },
      { question: "Do you deliver flowers same day in Hassan?", answer: "Yes, same-day delivery is available across Hassan for orders placed before 3 PM." }
    ]
  },

  "mandya": {
    cityName: "Mandya",
    metaTitle: "Flower Delivery in Mandya | Sugar Karnataka | RedHeart",
    metaDescription: "Order flowers in Mandya, Karnataka. Same-day delivery near KRS Dam & across Mandya. From ₹399.",
    h1: "Online Flower Delivery in Mandya",
    metaKeyword: "flower delivery mandya, online flowers mandya karnataka, florist mandya, flowers mandya krs dam cauvery sugarcane mysore jasmine brindavan garden",
    footerContent: `
<h2>Flower Delivery in Mandya — KRS Dam, Cauvery Sugarcane Country, and Brindavan Gardens</h2>
<p>Mandya, in the Cauvery valley between Mysuru and Bengaluru, is one of Karnataka's most agriculturally significant districts — the "Sugar Bowl of Karnataka." The Krishnarajasagara (KRS) Dam on the Cauvery River (built 1924 under Sir M. Visvesvaraya) is one of India's earliest large dams and still irrigates the sugarcane fields of Mandya district, which produces the lion's share of Karnataka's sugar. The Brindavan Gardens (illuminated stepped gardens on the KRS Dam's downstream face) are one of Karnataka's most visited tourist attractions. Mandya's jasmine (mallige) cultivation is celebrated — the "Mandya Mallige" (jasmine garlands from Mandya) are renowned across Karnataka for their fragrance and are sold in bulk at Mysuru and Bengaluru markets. The district is also known for Silk and Vokkaligas.</p>
<p>RedHeart delivers flowers across Mandya — Main Market, KRS Dam area, Mysuru Road, Bengaluru Road, Maddur area, and Station Road. Our range includes jasmine (mallige), roses, marigolds, and seasonal Karnataka bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mandya, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, KRS Dam area, Mysuru Road, Bengaluru Road, Maddur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine (Mandya mallige), roses, marigolds, seasonal Karnataka bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are Mandya jasmine (mallige) garlands available in Mandya?", answer: "Yes, the Mandya mallige (jasmine garland) is one of Karnataka's most fragrant and famous flower traditions. Fresh jasmine gajras and garlands from local cultivation are available in Mandya." },
      { question: "Can I get flowers for a KRS Dam Brindavan Gardens visit from Mandya?", answer: "Yes, the KRS Dam and Brindavan Gardens are in Mandya district. Rose bouquets and romantic arrangements for the illuminated garden evenings can be delivered in Mandya." },
      { question: "Do you deliver flowers same day in Mandya?", answer: "Yes, same-day delivery is available across Mandya for orders placed before 3 PM." }
    ]
  },

  "alwar": {
    cityName: "Alwar",
    metaTitle: "Flower Delivery in Alwar | Sariska Tiger Rajasthan | RedHeart",
    metaDescription: "Order flowers in Alwar, Rajasthan. Same-day delivery near Sariska Tiger Reserve & across Alwar. From ₹399.",
    h1: "Online Flower Delivery in Alwar",
    metaKeyword: "flower delivery alwar, online flowers alwar rajasthan, florist alwar, flowers alwar sariska tiger reserve city palace tata motors rajput",
    footerContent: `
<h2>Flower Delivery in Alwar — Sariska Tiger Reserve and the Rajput City Palace at Delhi's Doorstep</h2>
<p>Alwar, in the Aravalli Range of northeastern Rajasthan near the Delhi-NCR border (about 160 km from Delhi), is a city of significant heritage and wildlife significance. The Alwar City Palace (a remarkable fusion of Mughal and Rajput architectural styles, now housing a museum with extraordinary armoury, paintings, and royal palanquins) and the Bala Quila (a 15th century fort on an Aravalli ridge above the city) are major landmarks. The Sariska Tiger Reserve and National Park (India's first tiger reserve to successfully re-introduce tigers using translocation from Ranthambore) is about 35 km from Alwar town. The Neemrana Fort Palace (on the Alwar-Gurgaon highway) is one of Rajasthan's most famous heritage hotel conversions. Alwar was historically one of the most powerful Rajput princely states. Tata Motors has a major Alwar plant.</p>
<p>RedHeart delivers flowers across Alwar — Main Market, City Palace area, Sariska Road, Bhiwadi area, Tijara area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alwar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, City Palace area, Sariska Road, Bhiwadi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Sariska Tiger Reserve jungle resort stay from Alwar?", answer: "Yes, Sariska Tiger Reserve is about 35 km from Alwar. Flower arrangements for jungle resort stays and safari anniversaries can be delivered in Alwar." },
      { question: "Are flowers for a Neemrana Fort Palace heritage stay available from Alwar?", answer: "Yes, the Neemrana Fort Palace (on the Alwar-Gurgaon highway) is in Alwar district. Rose bouquets and romantic arrangements for the heritage hotel can be delivered from Alwar." },
      { question: "Do you deliver flowers same day in Alwar?", answer: "Yes, same-day delivery is available across Alwar for orders placed before 3 PM." }
    ]
  },

  "churu": {
    cityName: "Churu",
    metaTitle: "Flower Delivery in Churu | Thar Desert Rajasthan | RedHeart",
    metaDescription: "Order flowers in Churu, Rajasthan. Same-day delivery near Thar Desert & across Churu. From ₹399.",
    h1: "Online Flower Delivery in Churu",
    metaKeyword: "flower delivery churu, online flowers churu rajasthan, florist churu, flowers churu thar desert sethani fresco haveli desert shekhawati",
    footerContent: `
<h2>Flower Delivery in Churu — Shekhawati's Painted Haveli District at the Thar Desert's Edge</h2>
<p>Churu, in the Shekhawati region of northern Rajasthan, is the headquarters of Churu district — a district at the ecological frontier where the Aravalli-Shekhawati semi-arid landscape transitions into the Thar Desert. Churu is part of the famous Shekhawati "open-air art gallery" — a region where 18th-19th century merchant (marwari seths) families built hundreds of elaborately frescoed havelis (mansions) with outer walls painted with intricate scenes of Hindu mythology, daily life, British-era curiosities, and even early European motifs. Churu town's old merchant quarter has some of the finest frescoed havelis. The Churu district is also known as the "hottest and coldest district in India" — it records some of India's highest summer temperatures (often above 50°C) and very cold winter nights (below -5°C).</p>
<p>RedHeart delivers flowers across Churu — Main Market, Haveli area, Bikaner Road, Ratangarh area, Taranagar area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Haveli area, Bikaner Road, Ratangarh, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Shekhawati haveli heritage tour from Churu?", answer: "Yes, Churu is the gateway to the frescoed Shekhawati havelis. Flower bouquets for heritage stays and cultural tourism visits to the painted mansions can be delivered in Churu." },
      { question: "Are flowers for Teej and Gangaur festivals available in Churu?", answer: "Yes, Teej and Gangaur (the great Rajasthani women's festivals) are celebrated in Churu. Marigold and rose arrangements for the festive season are available." },
      { question: "Do you deliver flowers same day in Churu?", answer: "Yes, same-day delivery is available across Churu for orders placed before 3 PM." }
    ]
  },

  "tonk": {
    cityName: "Tonk",
    metaTitle: "Flower Delivery in Tonk | Nawab's Rajasthan | RedHeart",
    metaDescription: "Order flowers in Tonk, Rajasthan. Same-day delivery near Bisalpur Dam & across Tonk. From ₹399.",
    h1: "Online Flower Delivery in Tonk",
    metaKeyword: "flower delivery tonk, online flowers tonk rajasthan, florist tonk, flowers tonk nawab sunehri kothi banasthali bisalpur dam banas river",
    footerContent: `
<h2>Flower Delivery in Tonk — The Nawab's Sunehri Kothi and Bisalpur Dam on the Banas River</h2>
<p>Tonk, in central Rajasthan on the Banas River between Jaipur and Kota, is a town of exceptional Islamic heritage — the only princely state in Rajasthan to be ruled by a Muslim Nawab family (the Nawabs of Tonk, of Afghan Pindari origin, who received the principality from the Marathas in the early 19th century under British dispensation). The Sunehri Kothi ("Golden Mansion") — the Nawab's private quarters decorated with mirror-work and gold-leaf inlay — is one of Rajasthan's most extraordinary pieces of interior decoration, barely known outside the state. The Arabic and Persian Manuscript Library (Maulana Abul Kalam Azad Arabic and Persian Research Institute) holds rare Islamic manuscripts. The Bisalpur Dam on the Banas River is the main water supply for Jaipur city. Banasthali Vidyapith (one of India's largest women's universities) is in Tonk district.</p>
<p>RedHeart delivers flowers across Tonk — Main Market, Sunehri Kothi area, Jaipur Road, Kota Road, Niwai area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tonk, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sunehri Kothi area, Jaipur Road, Kota Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Eid available in Tonk?", answer: "Yes, Tonk has a significant Muslim heritage (the Nawab of Tonk's legacy). Rose garlands and festive bouquets for Eid celebrations are available in Tonk for same-day delivery." },
      { question: "Can I get flowers for a Sunehri Kothi heritage visit from Tonk?", answer: "Yes, the Sunehri Kothi (Golden Mansion) is one of Rajasthan's most extraordinary royal residences. Flower bouquets for heritage tourism visits in Tonk are available." },
      { question: "Do you deliver flowers same day in Tonk?", answer: "Yes, same-day delivery is available across Tonk for orders placed before 3 PM." }
    ]
  },

  "konaseema": {
    cityName: "Konaseema",
    metaTitle: "Flower Delivery in Konaseema | Godavari Delta Andhra | RedHeart",
    metaDescription: "Order flowers in Konaseema (Amalapuram), AP. Same-day delivery near Godavari delta & across Konaseema. From ₹399.",
    h1: "Online Flower Delivery in Konaseema",
    metaKeyword: "flower delivery konaseema, online flowers konaseema amalapuram andhra pradesh, florist konaseema, flowers konaseema godavari delta coconut palm kakinada",
    footerContent: `
<h2>Flower Delivery in Konaseema — Godavari Delta's Green Paradise of Coconut Palms and Backwaters</h2>
<p>Konaseema (Dr. B.R. Ambedkar Konaseema district, headquartered at Amalapuram), in the eastern Godavari delta of Andhra Pradesh, is one of the most lush and scenically distinctive districts of coastal India. The Konaseema delta — formed by the fan-like spread of the Godavari River's distributaries as they flow into the Bay of Bengal — is a landscape of extraordinary fertility: dense coconut palm groves, paddy fields, banana plantations, fish ponds, and backwater channels (the "Kerala of Andhra Pradesh"). The Godavari river island of Antarvedi (with the Lakshminarasimha Swamy temple) and Coringa Wildlife Sanctuary (one of India's largest mangrove forests) are notable. The region is known for its Kuchipudi dance village (Kuchipudi village, where the classical dance form originated, is in adjacent Krishna district but the East Godavari delta cultural identity overlaps). Coconut oil, toddy, and paddy define the local economy.</p>
<p>RedHeart delivers flowers across Konaseema — Amalapuram Main Market, Rajole area, Ravulapalem area, Malkipuram area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Andhra bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Konaseema (Amalapuram), Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amalapuram, Rajole, Ravulapalem, Malkipuram, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, roses, marigolds, seasonal Andhra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Ugadi available in Konaseema?", answer: "Yes, Ugadi (Telugu New Year) is a major festival in Konaseema's delta community. Seasonal bouquets and marigold arrangements for the celebration are available." },
      { question: "Are jasmine gajras available in Konaseema?", answer: "Yes, jasmine gajras are popular in Konaseema for daily wear and festivals. Fresh jasmine from local cultivation is available for same-day delivery." },
      { question: "Do you deliver flowers same day in Konaseema?", answer: "Yes, same-day delivery is available across Konaseema (Amalapuram) for orders placed before 3 PM." }
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
