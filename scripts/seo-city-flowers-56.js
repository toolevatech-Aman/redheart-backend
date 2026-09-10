// Batch 56 — 15 cities:
// UP: Mirzapur, Ghazipur, Ballia, Deoria, Kushinagar
// Bihar: Araria, Kishanganj
// Assam: Lakhimpur, Sivasagar, Tinsukia
// HP: Hamirpur, Bilaspur (HP), Kullu
// Haryana: Sonipat, Bhiwani

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "mirzapur": {
    cityName: "Mirzapur",
    metaTitle: "Flower Delivery in Mirzapur | Vindhyachal Devi Uttar Pradesh | RedHeart",
    metaDescription: "Order flowers in Mirzapur, UP. Same-day delivery near Vindhyachal temple & across Mirzapur. From ₹399.",
    h1: "Online Flower Delivery in Mirzapur",
    metaKeyword: "flower delivery mirzapur, online flowers mirzapur uttar pradesh, florist mirzapur, flowers mirzapur vindhyachal devi carpet industry ganga chunar sandstone",
    footerContent: `
<h2>Flower Delivery in Mirzapur — Vindhyachal Devi's Sacred Shakti Triangle and the Carpet Weaving Capital</h2>
<p>Mirzapur, on the Ganga in the Vindhya hills of Uttar Pradesh, is the headquarters of Mirzapur district — one of UP's most religiously and commercially significant districts. Mirzapur sits at the apex of the Vindhyachal Shakti Triangle (along with Varanasi and Prayagraj), with the Vindhyachal Devi temple — one of India's most important Shakti temples and traditionally visited alongside the Kashi-Visvanath temple of Varanasi and the Prayagraj Sangam in a single pilgrimage — drawing millions of devotees every year. The Ashtabhuja and Kali Khoh temples complete the Vindhyachal circuit. Mirzapur is also India's handwoven carpet capital — the "Mirzapur-Bhadohi carpet belt" (Mirzapur and adjacent Bhadohi) is the world's largest handwoven carpet manufacturing cluster, producing Persian-design tufted and knotted carpets exported globally.</p>
<p>RedHeart delivers flowers across Mirzapur — Main Market, Vindhyachal area, Ganga Ghat area, Chunar area, Bhadohi area, and Station Road. Our range includes roses, marigolds, Devi puja flowers, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mirzapur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Vindhyachal area, Ganga Ghat, Chunar, Bhadohi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigolds, roses, Vindhyachal Devi puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Vindhyachal Devi Navratri available in Mirzapur?", answer: "Yes, the Vindhyachal Devi temple (one of India's most important Shakti temples) draws massive Navratri pilgrimages. Red hibiscus, marigold garlands, and Devi puja sets for Vindhyachal are available from Mirzapur." },
      { question: "Can I get birthday flowers in Mirzapur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Mirzapur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Mirzapur?", answer: "Yes, same-day delivery is available across Mirzapur for orders placed before 3 PM." }
    ]
  },

  "ghazipur": {
    cityName: "Ghazipur",
    metaTitle: "Flower Delivery in Ghazipur | Opium Factory UP | RedHeart",
    metaDescription: "Order flowers in Ghazipur, UP. Same-day delivery near Ganga & across Ghazipur. From ₹399.",
    h1: "Online Flower Delivery in Ghazipur",
    metaKeyword: "flower delivery ghazipur, online flowers ghazipur uttar pradesh, florist ghazipur, flowers ghazipur opium factory lord cornwallis tomb ganga durgavati",
    footerContent: `
<h2>Flower Delivery in Ghazipur — India's Only Opium Factory and Lord Cornwallis's Resting Place on the Ganga</h2>
<p>Ghazipur, on the Ganga in eastern Uttar Pradesh near Varanasi, is the headquarters of Ghazipur district — a district with the unique historical distinction of housing India's only legal opium factory (Government Opium and Alkaloid Works, Ghazipur) — a Colonial-era facility where licensed poppy farmers' crop is processed into morphine, codeine, and thebaine for medicinal use (the factory still operates under Government of India supervision, supplying hospitals). Lord Cornwallis (the British Governor-General who defeated Tipu Sultan and created the Permanent Settlement) died in Ghazipur in 1805 and is buried in the Cornwallis Monument — one of the few places in the world where a British Governor-General is interred outside Britain. Ghazipur is also associated with the Bhojpuri cultural belt and is a significant sugarcane and rose water cultivation area.</p>
<p>RedHeart delivers flowers across Ghazipur — Main Market, Ganga Ghat, Varanasi Road, Saidpur area, Zamania area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghazipur, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ganga Ghat, Varanasi Road, Saidpur, Zamania, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Ghazipur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ghazipur for orders placed before 3 PM." },
      { question: "Are flowers for festivals available in Ghazipur?", answer: "Yes, marigold garlands and puja sets for Chhath Puja, Diwali, and other festivals are available for same-day delivery in Ghazipur." },
      { question: "Do you deliver flowers same day in Ghazipur?", answer: "Yes, same-day delivery is available across Ghazipur for orders placed before 3 PM." }
    ]
  },

  "ballia": {
    cityName: "Ballia",
    metaTitle: "Flower Delivery in Ballia | Bhojpur UP | RedHeart",
    metaDescription: "Order flowers in Ballia, UP. Same-day delivery near Ganga-Ghaghra & across Ballia. From ₹399.",
    h1: "Online Flower Delivery in Ballia",
    metaKeyword: "flower delivery ballia, online flowers ballia uttar pradesh, florist ballia, flowers ballia bhojpur bhojpuri mangal pandey 1857 ganga ghaghra chhath",
    footerContent: `
<h2>Flower Delivery in Ballia — Mangal Pandey's Birthplace and the 1857 Rising's Bhojpuri Heart</h2>
<p>Ballia, at the confluence of the Ganga and Ghaghra rivers in extreme eastern Uttar Pradesh at the Bihar border, is the headquarters of Ballia district — a district of fierce patriotic pride and deep Bhojpuri cultural roots. Mangal Pandey — the sepoy of the 34th Bengal Infantry whose rifle shot on 29 March 1857 at the Barrackpore parade ground is traditionally considered the first act of the 1857 Sepoy Mutiny (India's First War of Independence) — was born in Nagwa village in Ballia district. The Ballia Rebellion (August 1942, during the Quit India Movement) was one of the most dramatic local uprisings of independence — for a few days, the British collector was removed and a parallel people's government proclaimed. The Ganga-Ghaghra Doab gives Ballia a fertile alluvial plain. The Chhath Puja (the sunrise-sunset sun worship) is celebrated with extraordinary devotion in Ballia.</p>
<p>RedHeart delivers flowers across Ballia — Main Market, Ganga Ghat, Rasra area, Bairia area, Bansdih area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ballia, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ganga Ghat, Rasra, Bairia, Bansdih, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath Puja flowers, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Ballia?", answer: "Yes, Chhath Puja (the sun worship festival) is celebrated with exceptional devotion in Ballia. Marigold garlands, lotus, and Chhath puja sets for the Ganga-Ghaghra ghats are available." },
      { question: "Can I get birthday flowers in Ballia?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Ballia for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Ballia?", answer: "Yes, same-day delivery is available across Ballia for orders placed before 3 PM." }
    ]
  },

  "deoria": {
    cityName: "Deoria",
    metaTitle: "Flower Delivery in Deoria | Bhojpur UP | RedHeart",
    metaDescription: "Order flowers in Deoria, UP. Same-day delivery near Kushinagar & across Deoria. From ₹399.",
    h1: "Online Flower Delivery in Deoria",
    metaKeyword: "flower delivery deoria, online flowers deoria uttar pradesh, florist deoria, flowers deoria sugarcane bhojpuri kushinagar buddha parinirvana gorakhpur",
    footerContent: `
<h2>Flower Delivery in Deoria — Sugarcane Fields and the Buddhist Kushinagar Corridor</h2>
<p>Deoria, in the Gorakhpur division of eastern Uttar Pradesh near Nepal and Bihar, is the headquarters of Deoria district — a primarily agricultural district of the Terai zone dominated by sugarcane cultivation and a significant Bhojpuri cultural identity. Deoria district sits adjacent to Kushinagar — one of Buddhism's four most sacred pilgrimage sites (where Gautama Buddha attained Mahaparinirvana, his final liberation, around 483 BCE) — making Deoria part of the Buddhist circuit's gateway region. Deoria has historical significance as a district of the Gandak-Ghaghra Doab — the fertile plain between two of the largest Himalayan rivers. The district produces significant quantities of sugarcane for UP's sugar mills and has a seasonal festivals calendar heavily centred on Bhojpuri cultural traditions (Chhath, Holi, Sawan).</p>
<p>RedHeart delivers flowers across Deoria — Main Market, Kushinagar Road, Gorakhpur Road, Bhatpar Rani area, Salempur area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoria, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kushinagar Road, Gorakhpur Road, Bhatpar Rani, Salempur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Deoria?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Deoria for orders placed before 3 PM." },
      { question: "Are flowers for Chhath Puja available in Deoria?", answer: "Yes, Chhath Puja is very popular in Deoria. Marigold garlands and Chhath puja sets for the occasion are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Deoria?", answer: "Yes, same-day delivery is available across Deoria for orders placed before 3 PM." }
    ]
  },

  "kushinagar": {
    cityName: "Kushinagar",
    metaTitle: "Flower Delivery in Kushinagar | Buddha Parinirvana UP | RedHeart",
    metaDescription: "Order flowers in Kushinagar, UP. Same-day delivery near Buddha Parinirvana temple & across Kushinagar. From ₹399.",
    h1: "Online Flower Delivery in Kushinagar",
    metaKeyword: "flower delivery kushinagar, online flowers kushinagar uttar pradesh, florist kushinagar, flowers kushinagar buddha parinirvana ramabhar stupa mahaparinirvana temple",
    footerContent: `
<h2>Flower Delivery in Kushinagar — Where the Buddha Attained Mahaparinirvana and World Buddhism Converges</h2>
<p>Kushinagar, in the Gorakhpur division of eastern Uttar Pradesh near Nepal, is the headquarters of Kushinagar district — one of the four holiest sites of Buddhism worldwide and the place where Gautama Siddhartha Buddha attained Mahaparinirvana (final liberation) around 483 BCE under the twin Sala trees. The Mahaparinirvana temple (housing the reclining Buddha statue, a 5th century CE sculpture showing the Buddha's final resting posture) and the Ramabhar Stupa (the cremation stupa where Buddha's body was cremated, built over the spot, now an important pilgrimage and meditation site) are Kushinagar's central monuments. Kushinagar receives pilgrims and tourists from Japan, Sri Lanka, Myanmar, Thailand, China, Korea, and Tibet — and has monasteries built by Buddhist countries from around the world. The district also has the Gorakhpur-Kushinagar international airport.</p>
<p>RedHeart delivers flowers across Kushinagar — Mahaparinirvana temple area, Main Market, Padrauna area, Hata area, Khadda area, and Bus Stand. Our range includes roses, marigolds, lotus, white lilies, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kushinagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahaparinirvana area, Main Market, Padrauna, Hata, Khadda, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, white lilies, marigolds, roses, Buddhist shrine flower sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Buddhist pilgrimage at Kushinagar Mahaparinirvana temple available?", answer: "Yes, the Kushinagar Mahaparinirvana temple (where Buddha attained final liberation) draws international Buddhist pilgrims. Lotus, white lilies, and Buddhist shrine offerings are available for same-day delivery." },
      { question: "Are flowers for Buddha Purnima available in Kushinagar?", answer: "Yes, Buddha Purnima (celebrating Buddha's birth, enlightenment, and Parinirvana) is one of Kushinagar's most sacred occasions. Lotus and white flower arrangements for the celebration are available." },
      { question: "Do you deliver flowers same day in Kushinagar?", answer: "Yes, same-day delivery is available across Kushinagar for orders placed before 3 PM." }
    ]
  },

  "araria": {
    cityName: "Araria",
    metaTitle: "Flower Delivery in Araria | Nepal Border Bihar | RedHeart",
    metaDescription: "Order flowers in Araria, Bihar. Same-day delivery near Nepal border & across Araria. From ₹399.",
    h1: "Online Flower Delivery in Araria",
    metaKeyword: "flower delivery araria, online flowers araria bihar, florist araria, flowers araria nepal border kosi river tharu madhesi mithila north bihar flood plain",
    footerContent: `
<h2>Flower Delivery in Araria — Kosi's Floodplain and the Nepal Border Gateway of North Bihar</h2>
<p>Araria, in the Kosi-Seemaanchal zone of northeastern Bihar near the Nepal and West Bengal borders, is the headquarters of Araria district — a district of the Kosi River's catastrophic flood plain that forms the heartland of Bihar's most economically challenged and climate-vulnerable region. The Kosi River (known as the "Sorrow of Bihar" for its catastrophic floods and frequent channel migration — it shifted its course by 120 km westward between 1736 and 1964) forms the district's western boundary. Araria district is a demographically complex border region with significant Tharu tribal communities (indigenous floodplain and forest communities), Muslim Ansari weavers, and the Hindu Maithili and Bhojpuri farming communities. The Machar Jheel wetland near Araria is an important bird migratory zone. The India-Nepal Jogbani-Birganj trade route passes near Araria district.</p>
<p>RedHeart delivers flowers across Araria — Main Market, Forbesganj area, Jogbani area, Raniganj area, Kursakatta area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Araria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Forbesganj, Jogbani, Raniganj, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Chhath Puja flowers, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Chhath Puja available in Araria?", answer: "Yes, Chhath Puja is one of the most important festivals in Araria. Marigold garlands, lotus, and Chhath puja sets for the river ghats are available for same-day delivery." },
      { question: "Can I get birthday flowers in Araria?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Araria for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Araria?", answer: "Yes, same-day delivery is available across Araria for orders placed before 3 PM." }
    ]
  },

  "kishanganj": {
    cityName: "Kishanganj",
    metaTitle: "Flower Delivery in Kishanganj | Tea Pineapple Bihar | RedHeart",
    metaDescription: "Order flowers in Kishanganj, Bihar. Same-day delivery near Mahananda River & across Kishanganj. From ₹399.",
    h1: "Online Flower Delivery in Kishanganj",
    metaKeyword: "flower delivery kishanganj, online flowers kishanganj bihar, florist kishanganj, flowers kishanganj tea pineapple mahananda west bengal assam border bengali",
    footerContent: `
<h2>Flower Delivery in Kishanganj — Bihar's Tea Garden District and the Bengal-Assam Corner of India</h2>
<p>Kishanganj, in extreme northeastern Bihar at the West Bengal, Nepal, and Bangladesh tri-corner area, is the headquarters of Kishanganj district — Bihar's most distinctive district for its sub-Himalayan ecology, tea cultivation, and Bengali-Muslim cultural identity. Kishanganj is Bihar's only major tea-growing district — the district has small tea gardens in its northern hills (the Kishanganj tea belt) that produce tea alongside the Darjeeling and Dooars belts. The district is also known for pineapple cultivation. The Mahananda River (flowing from the Darjeeling hills through Kishanganj into West Bengal and Bangladesh) is the main waterway. Kishanganj has a predominantly Muslim population with a significant Bengali-speaking community and sits on the Teesta-Mahananda floodplain.</p>
<p>RedHeart delivers flowers across Kishanganj — Main Market, Mahananda area, Thakurganj area, Bahadurganj area, Kochadhaman area, and Station Road. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kishanganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mahananda area, Thakurganj, Bahadurganj, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bihar bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Kishanganj?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kishanganj for orders placed before 3 PM." },
      { question: "Are flowers for Eid available in Kishanganj?", answer: "Yes, Eid ul-Fitr and Eid ul-Adha are major celebrations in Kishanganj's Muslim community. Fragrant rose and jasmine arrangements for Eid gifting are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Kishanganj?", answer: "Yes, same-day delivery is available across Kishanganj for orders placed before 3 PM." }
    ]
  },

  "lakhimpur": {
    cityName: "Lakhimpur",
    metaTitle: "Flower Delivery in Lakhimpur | North Lakhimpur Assam | RedHeart",
    metaDescription: "Order flowers in Lakhimpur (North Lakhimpur), Assam. Same-day delivery near Majuli & across Lakhimpur. From ₹399.",
    h1: "Online Flower Delivery in Lakhimpur",
    metaKeyword: "flower delivery lakhimpur, online flowers lakhimpur assam, florist lakhimpur, flowers lakhimpur north lakhimpur brahmaputra arunachal border tea garden mising tribe",
    footerContent: `
<h2>Flower Delivery in Lakhimpur — Mising Tribe's River Islands and the Arunachal Gateway in Upper Assam</h2>
<p>Lakhimpur (North Lakhimpur), in the northern bank of the Brahmaputra in Upper Assam, is the headquarters of Lakhimpur district — a district of the Mising (Mishing) tribal communities (the river island-dwelling Austro-Asiatic people who traditionally live in stilt houses on the Brahmaputra's sand islands or "chaporis"), tea gardens, and Assam's gateway to Arunachal Pradesh. The Mising people's Ali-Aye-Ligang festival (a spring seed-sowing festival with traditional Mising fermented rice beer, dance, and music) is one of Assam's most beautiful tribal celebrations. The Assam-Arunachal Pradesh border is just north of Lakhimpur, and the district has a significant role in the border trade and development corridor. The Subansiri River (flowing from Arunachal into the Brahmaputra) passes through the district and is the site of the controversial Subansiri Lower Hydroelectric Project.</p>
<p>RedHeart delivers flowers across Lakhimpur — North Lakhimpur Main Market, Majuli area, Dhakuakhana area, Bihpuria area, Nowboicha area, and Bus Stand. Our range includes roses, orchids, marigolds, and seasonal Assam bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lakhimpur, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">North Lakhimpur, Majuli area, Dhakuakhana, Bihpuria, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Bihu available in Lakhimpur?", answer: "Yes, Bohag Bihu (Rongali Bihu, Assam's spring festival) is one of Lakhimpur's biggest celebrations. Seasonal bouquets and Bihu gifting flowers are available for same-day delivery." },
      { question: "Can I get birthday flowers in Lakhimpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Lakhimpur for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Lakhimpur?", answer: "Yes, same-day delivery is available across Lakhimpur for orders placed before 3 PM." }
    ]
  },

  "sivasagar": {
    cityName: "Sivasagar",
    metaTitle: "Flower Delivery in Sivasagar | Ahom Kingdom Assam | RedHeart",
    metaDescription: "Order flowers in Sivasagar, Assam. Same-day delivery near Rang Ghar & across Sivasagar. From ₹399.",
    h1: "Online Flower Delivery in Sivasagar",
    metaKeyword: "flower delivery sivasagar, online flowers sivasagar assam, florist sivasagar, flowers sivasagar ahom dynasty rang ghar talatal ghar sivasagar lake oil tea",
    footerContent: `
<h2>Flower Delivery in Sivasagar — The Ahom Kingdom's Vanished Empire and Asia's Oldest Amphitheatre</h2>
<p>Sivasagar (Sibsagar), in Upper Assam on the Brahmaputra floodplain, is the headquarters of Sivasagar district — the heartland of the Ahom Kingdom (the dynasty of Tai-Ahom people from Myanmar who ruled Assam for 600 years, 1228-1826 CE, the longest-running independent medieval kingdom in South Asia, famously never defeated by the Mughals). The Rang Ghar (the royal sports pavilion of the Ahom kings, dating to the 18th century) is Asia's oldest amphitheatre for elephant and buffalo combat sports. The Talatal Ghar (the seven-storey underground palace of Rudra Singha with three underground floors and two underground escape tunnels) and the Kareng Ghar (royal palace) are extraordinary Ahom architecture. The Sivasagar Lake (Sibsagar tank, one of the largest man-made lakes in India) was built by the Ahom queen Ambika. Sivasagar was also the birthplace of Assam's oil industry (first oil drilled in Asia at Digboi nearby).</p>
<p>RedHeart delivers flowers across Sivasagar — Main Market, Rang Ghar area, Sibsagar Lake area, Nazira area, Amguri area, and Station Road. Our range includes roses, orchids, marigolds, and seasonal Assam bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sivasagar, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Rang Ghar area, Sibsagar Lake, Nazira, Amguri, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a Sivasagar Ahom heritage site visit event?", answer: "Yes, Sivasagar's Rang Ghar, Talatal Ghar, and Kareng Ghar are extraordinary Ahom Kingdom monuments. Seasonal bouquets for heritage events and cultural programs at these sites are available." },
      { question: "Are flowers for Bihu available in Sivasagar?", answer: "Yes, Bihu (Assam's harvest and spring festival) is one of Sivasagar's biggest celebrations. Seasonal Bihu gifting flowers and bouquets are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Sivasagar?", answer: "Yes, same-day delivery is available across Sivasagar for orders placed before 3 PM." }
    ]
  },

  "tinsukia": {
    cityName: "Tinsukia",
    metaTitle: "Flower Delivery in Tinsukia | Digboi Oil Assam | RedHeart",
    metaDescription: "Order flowers in Tinsukia, Assam. Same-day delivery near Digboi & across Tinsukia. From ₹399.",
    h1: "Online Flower Delivery in Tinsukia",
    metaKeyword: "flower delivery tinsukia, online flowers tinsukia assam, florist tinsukia, flowers tinsukia digboi oil well asia first dibru saikhowa elephant tea garden",
    footerContent: `
<h2>Flower Delivery in Tinsukia — Asia's First Oil Well at Digboi and the Elephant Country of Upper Assam</h2>
<p>Tinsukia, in the extreme northeastern corner of Assam near Arunachal Pradesh and Nagaland, is the headquarters of Tinsukia district — a district of global energy heritage, extraordinary wildlife, and Upper Assam's dense tea garden landscape. Digboi (in Tinsukia district) is where Asia's first oil well was drilled in 1889 — the Assam Oil Company (later ONGC) Digboi oil field began India's petroleum age. The Digboi Refinery (built 1901, still operational) is the world's oldest continuously operating oil refinery and was placed on the UK's Heritage Register. The Dibru-Saikhowa National Park — a floodplain grassland national park at the Brahmaputra-Lohit confluence — protects one of India's last feral horse populations (descended from British cavalry horses) and the endangered Ganges river dolphin. The Maguri-Motapung Beel is a globally important flamingo and migratory bird wetland.</p>
<p>RedHeart delivers flowers across Tinsukia — Main Market, Digboi area, Doom Dooma area, Margherita area, Makum area, and Station Road. Our range includes roses, orchids, marigolds, and seasonal Assam bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tinsukia, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Digboi area, Doom Dooma, Margherita, Makum, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Bihu available in Tinsukia?", answer: "Yes, Bihu (Assam's spring and harvest festival) is one of Tinsukia's biggest celebrations. Seasonal Bihu gifting bouquets and flowers are available for same-day delivery." },
      { question: "Can I get birthday flowers in Tinsukia?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Tinsukia for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Tinsukia?", answer: "Yes, same-day delivery is available across Tinsukia for orders placed before 3 PM." }
    ]
  },

  "hamirpur-hp": {
    cityName: "Hamirpur",
    metaTitle: "Flower Delivery in Hamirpur | Himachal Pradesh | RedHeart",
    metaDescription: "Order flowers in Hamirpur, Himachal Pradesh. Same-day delivery across Hamirpur district. From ₹399.",
    h1: "Online Flower Delivery in Hamirpur",
    metaKeyword: "flower delivery hamirpur himachal pradesh, online flowers hamirpur hp, florist hamirpur himachal, flowers hamirpur army jawans beas river sujanpur tira literacy",
    footerContent: `
<h2>Flower Delivery in Hamirpur — Himachal's Army Jawans Capital and the Beas Valley's Educational Pride</h2>
<p>Hamirpur, in the Beas River valley of Himachal Pradesh, is the headquarters of Hamirpur district — India's smallest hill district and one of India's highest per-capita army-soldier-producing districts (Hamirpur's villages have a tradition of military service disproportionate to their size — virtually every family has a member in the Indian Army, and soldiers from Hamirpur have served in every major war since Independence). The Sujanpur Tira Fort (on the Beas banks) — an 18th-century Katoch dynasty fort built by Raja Abhay Chand — has the Murli Manohar and Narbadeshwar temples within its precincts. Hamirpur district also has one of India's highest literacy rates among its hill districts. The Deotsidh (Radha Swami Satsang headquarters) is an important spiritual institution.</p>
<p>RedHeart delivers flowers across Hamirpur — Main Market, Sujanpur area, Nadaun area, Barsar area, Bijhari area, and Bus Stand. Our range includes roses, marigolds, rhododendron, and seasonal HP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sujanpur area, Nadaun, Barsar, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal HP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Hamirpur?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Hamirpur for orders placed before 3 PM." },
      { question: "Are flowers for Navratri available in Hamirpur?", answer: "Yes, Navratri is celebrated with devotion in Hamirpur. Marigold garlands and Devi puja sets for Navratri are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Hamirpur?", answer: "Yes, same-day delivery is available across Hamirpur for orders placed before 3 PM." }
    ]
  },

  "bilaspur-hp": {
    cityName: "Bilaspur",
    metaTitle: "Flower Delivery in Bilaspur | Gobind Sagar Himachal Pradesh | RedHeart",
    metaDescription: "Order flowers in Bilaspur, Himachal Pradesh. Same-day delivery near Gobind Sagar Lake & across Bilaspur. From ₹399.",
    h1: "Online Flower Delivery in Bilaspur",
    metaKeyword: "flower delivery bilaspur himachal pradesh, online flowers bilaspur hp, florist bilaspur himachal, flowers bilaspur gobind sagar bhakra dam lake submerged old bilaspur",
    footerContent: `
<h2>Flower Delivery in Bilaspur — Gobind Sagar's Turquoise Waters and the Submerged Kingdom's Memory</h2>
<p>Bilaspur, on the shores of Gobind Sagar lake in the Sutlej Valley of Himachal Pradesh, is the headquarters of Bilaspur district — a district shaped by one of India's most dramatic post-independence transformations: the submergence of the old Bilaspur town (capital of the Kehlur dynasty and a prominent hill state) under the Gobind Sagar Reservoir (created by the Bhakra Dam on the Sutlej). The new Bilaspur town was rebuilt on the hills above the lake. The Bhakra Dam (completed 1963) — the tallest gravity dam in Asia at the time — was hailed by Nehru as "the new temple of resurgent India." The Gobind Sagar Lake (India's third-largest reservoir by volume) is now HP's most important lake for fisheries, water sports (including India's largest reservoir rowing/kayaking events), and tourism. The Naina Devi temple (on a hill above the lake, one of HP's most important Shakti shrines) draws major pilgrimages.</p>
<p>RedHeart delivers flowers across Bilaspur — Main Market, Gobind Sagar area, Naina Devi area, Ghumarwin area, Swarghat area, and Bus Stand. Our range includes roses, marigolds, Devi puja flowers, and seasonal HP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilaspur, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gobind Sagar area, Naina Devi area, Ghumarwin, Bus Stand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, Naina Devi puja sets, seasonal HP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Naina Devi temple Navratri available in Bilaspur?", answer: "Yes, the Naina Devi temple (one of Himachal's most important Shakti shrines) draws massive Navratri pilgrimages. Marigold garlands and Devi puja sets for Naina Devi are available from Bilaspur." },
      { question: "Can I get flowers for a Gobind Sagar Lake resort stay in Bilaspur?", answer: "Yes, Gobind Sagar Lake's water sports resorts are Bilaspur's tourism draw. Seasonal bouquets for Gobind Sagar lakeside stays can be delivered." },
      { question: "Do you deliver flowers same day in Bilaspur?", answer: "Yes, same-day delivery is available across Bilaspur for orders placed before 3 PM." }
    ]
  },

  "sonipat": {
    cityName: "Sonipat",
    metaTitle: "Flower Delivery in Sonipat | Delhi NCR Haryana | RedHeart",
    metaDescription: "Order flowers in Sonipat, Haryana. Same-day delivery near Kundli Industrial Area & across Sonipat. From ₹399.",
    h1: "Online Flower Delivery in Sonipat",
    metaKeyword: "flower delivery sonipat, online flowers sonipat haryana, florist sonipat, flowers sonipat delhi ncr kundli industrial corridor yamuna deenbandhu chotu ram",
    footerContent: `
<h2>Flower Delivery in Sonipat — Delhi's Industrial Gateway and the Yamuna's Haryana Heartland</h2>
<p>Sonipat, in the Haryana plains on the Yamuna north of Delhi, is the headquarters of Sonipat district — Delhi NCR's northwestern industrial and residential satellite. The Kundli-Manesar-Palwal (KMP) Western Peripheral Expressway passes through Sonipat, making it the main industrial corridor link in northern Haryana. Sonipat is historically significant for its association with the Jat community's agricultural leadership — the nearby Chotu Ram Museum celebrates Deenbandhu Sir Chotu Ram, the iconic champion of Haryana's peasant farmers who established cooperative farming and banking reforms in the 1930s-40s and is considered the greatest Haryanvi hero. Sonipat has major atlas cycles, Maruti feeder industry plants, pharma, and food processing industries. The district is part of the Khetri-Yamuna industrial and agricultural belt.</p>
<p>RedHeart delivers flowers across Sonipat — Main Market, Kundli area, Gohana area, Ganaur area, Kharkhoda area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sonipat, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kundli area, Gohana, Ganaur, Kharkhoda, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Sonipat?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Sonipat for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Sonipat?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Sonipat." },
      { question: "Do you deliver flowers same day in Sonipat?", answer: "Yes, same-day delivery is available across Sonipat for orders placed before 3 PM." }
    ]
  },

  "bhiwani": {
    cityName: "Bhiwani",
    metaTitle: "Flower Delivery in Bhiwani | Haryana Boxing Capital | RedHeart",
    metaDescription: "Order flowers in Bhiwani, Haryana. Same-day delivery near Little Cuba & across Bhiwani. From ₹399.",
    h1: "Online Flower Delivery in Bhiwani",
    metaKeyword: "flower delivery bhiwani, online flowers bhiwani haryana, florist bhiwani, flowers bhiwani boxing little cuba vijender singh rohtak delhi cotton textile",
    footerContent: `
<h2>Flower Delivery in Bhiwani — Little Cuba of India and the Boxing Capital of Haryana</h2>
<p>Bhiwani, in the semi-arid central Haryana plains on the Rajasthan border, is the headquarters of Bhiwani district — known across India as the "Little Cuba" for its extraordinary boxing tradition and the disproportionate number of Olympic and world champion boxers it has produced. The Bhiwani Boxing Club (established by Hawa Singh's era and later the Bhiwani Boxing Academy) has produced Vijender Singh (India's first Olympic boxing medallist, 2008 Beijing Bronze), Akhil Kumar, Jitender Kumar, Dinesh Kumar, and other champions from Haryana's wrestling and boxing culture. Bhiwani has a robust cotton textile industry (the Bhiwani Textile Mills were among Haryana's oldest industrial units). The district is known for its strong Jat and Ahir communities' sporting and martial culture. The Digambar Jain pilgrimage site at Todaraisingh (near Bhiwani) is important for the Jain community.</p>
<p>RedHeart delivers flowers across Bhiwani — Main Market, Sports Complex area, Loharu area, Charkhi Dadri area, Tosham area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bhiwani, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sports Complex, Loharu, Charkhi Dadri, Tosham, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get flowers for a sports victory celebration in Bhiwani?", answer: "Yes, Bhiwani's boxing champions are celebrated with great pride. Victory roses, celebration bouquets, and sports achievement arrangements are available for same-day delivery." },
      { question: "Are flowers for Diwali available in Bhiwani?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Bhiwani." },
      { question: "Do you deliver flowers same day in Bhiwani?", answer: "Yes, same-day delivery is available across Bhiwani for orders placed before 3 PM." }
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
