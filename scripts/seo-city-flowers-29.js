// Batch 29 — 15 cities:
// Bihar: Siwan, Gopalganj, Begusarai, Samastipur, Araria, Kishanganj, Nalanda
// Odisha: Dhenkanal, Keonjhar, Jajpur, Jharsuguda, Bargarh, Kendrapara, Boudh, Jeypore

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "siwan": {
    cityName: "Siwan",
    metaTitle: "Flower Delivery in Siwan | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Siwan, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Siwan. Starting ₹399.",
    h1: "Online Flower Delivery in Siwan",
    metaKeyword: "flower delivery siwan, online flowers siwan bihar, florist siwan, flowers siwan chhath puja",
    footerContent: `
<h2>Flower Delivery in Siwan — The Land of the Firangi Babu's Bihar</h2>
<p>Siwan, in the Saran division of northern Bihar near the Nepal and UP borders, is the district headquarters of Siwan — a district historically associated with political activism (it produced several leading freedom fighters and was an early centre of the Quit India Movement) and more recently with the sugar industry and diaspora. Siwan is one of Bihar's most significant Bhojpuri cultural zones — the birthplace and home district of many Bhojpuri film artists and musicians. The Siwan district borders the Gandak River (Narayani) which flows from Nepal, and the land is fertile with wheat, maize, and sugarcane. The Chhath Puja celebrations in Siwan — where thousands of devotees gather at the Gandak ghats — are among the district's most spectacular religious events.</p>
<p>RedHeart delivers flowers across Siwan — Station Road, Gopalganj Road, Town area, and Maharajganj Road. We offer roses, marigolds, puja flower sets, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siwan, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Gopalganj Road, Town area, Maharajganj Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, lotus, Chhath Puja thekuwa flowers, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Siwan?",
        answer: "Yes, Chhath Puja is the most important festival in Siwan. Lotus, marigold, and Chhath ritual flowers (ketaki, etc.) are available during the festival. Order 2–3 days in advance for Chhath."
      },
      {
        question: "Can I send roses to someone in Siwan same day?",
        answer: "Yes, birthday and anniversary rose bouquets are available for same-day delivery in Siwan for orders placed before 3 PM."
      },
      {
        question: "Are flowers for Vivah Panchami available in Siwan?",
        answer: "Yes, Vivah Panchami (celebrating Ram and Sita's wedding) is observed in Siwan. Marigold wedding garlands and seasonal puja flowers are available for the occasion."
      }
    ]
  },

  "gopalganj": {
    cityName: "Gopalganj",
    metaTitle: "Flower Delivery in Gopalganj | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Gopalganj, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Gopalganj. From ₹399.",
    h1: "Online Flower Delivery in Gopalganj",
    metaKeyword: "flower delivery gopalganj, online flowers gopalganj bihar, florist gopalganj, flowers gopalganj chhath gandak",
    footerContent: `
<h2>Flower Delivery in Gopalganj — Gandak Valley's Festive Sugarcane Country</h2>
<p>Gopalganj, in the Saran division of northern Bihar on the banks of the Gandak River (flowing from Nepal), is a district known for its sugarcane cultivation, sugar mills, and the vibrant Bhojpuri folk culture of the Bihar-UP border region. The district shares a long border with Uttar Pradesh (Deoria and Kushinagar districts), and the cultural blend includes Awadhi, Bhojpuri, and Maithili traditions in music, food, and festivals. The Thawai River and Gandak River ghats in Gopalganj are major Chhath Puja congregation points where thousands of devotees observe the four-day solar festival each October-November. The Sarkar Durgasthan temple is an important local religious site.</p>
<p>RedHeart delivers flowers across Gopalganj — Main Road, Siwan Road, Motihari Road, and Civil Lines area. We offer roses, marigolds, lotus, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopalganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Siwan Road, Motihari Road, Civil Lines area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, lotus, roses, Chhath Puja flower sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Gopalganj?",
        answer: "Yes, Chhath Puja is the grandest festival in Gopalganj. Lotus, sugarcane leaves, and marigold offerings for the Gandak River ghat celebrations are available."
      },
      {
        question: "Can I order flowers for Durga Puja in Gopalganj?",
        answer: "Yes, Durga Puja is also celebrated in Gopalganj. Marigold garlands and red hibiscus flowers for Durga Puja are available around October."
      },
      {
        question: "Do you deliver flowers same day in Gopalganj?",
        answer: "Yes, same-day delivery is available across Gopalganj for orders placed before 3 PM."
      }
    ]
  },

  "begusarai": {
    cityName: "Begusarai",
    metaTitle: "Flower Delivery in Begusarai | Leningrad of Bihar | RedHeart",
    metaDescription: "Order flowers in Begusarai, Bihar. Same-day delivery near IOCL refinery & across Begusarai town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Begusarai",
    metaKeyword: "flower delivery begusarai, online flowers begusarai bihar, florist begusarai, flowers begusarai iocl refinery",
    footerContent: `
<h2>Flower Delivery in Begusarai — Bihar's "Little Moscow" on the Ganges</h2>
<p>Begusarai, on the northern bank of the Ganges in central Bihar, is the headquarters of Begusarai district — a city historically nicknamed "Little Moscow" or the "Leningrad of Bihar" for its strong left-wing labour union movement that grew out of the Barauni (IOCL) oil refinery workers' activism from the 1950s onward. The Barauni Refinery (Indian Oil Corporation), the NTPC Barauni Thermal Power Station, and the Hindustan Fertilizer Corporation make Begusarai one of Bihar's most industrialised cities. The Kanwar Lake (Kabar Tal) — Asia's largest freshwater oxbow lake and a bird sanctuary attracting thousands of migratory birds in winter — is just 20 km from the city and is a remarkable natural heritage site.</p>
<p>RedHeart delivers flowers across Begusarai — Station Road, Barauni area, Teghra Road, and Civil Lines. Our range includes roses, marigolds, seasonal Bihar bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Begusarai, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Barauni area, Teghra Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, lotus, Chhath Puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Begusarai?",
        answer: "Yes, Chhath Puja at the Ganges ghats in Begusarai is a spectacular event. Lotus, marigolds, and Chhath ritual flower sets are available. Order in advance as demand is very high during the festival."
      },
      {
        question: "Can I send flowers to IOCL Barauni colony from Begusarai?",
        answer: "Yes, IOCL Barauni township and the refinery colony area are within our delivery zone. Corporate and personal deliveries to the IOCL township are available."
      },
      {
        question: "Do you deliver flowers to Teghra area near Begusarai?",
        answer: "Teghra (about 20 km from Begusarai) is in our extended zone. Please order before 12 PM for same-day delivery to Teghra."
      }
    ]
  },

  "samastipur": {
    cityName: "Samastipur",
    metaTitle: "Flower Delivery in Samastipur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Samastipur, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Samastipur. From ₹399.",
    h1: "Online Flower Delivery in Samastipur",
    metaKeyword: "flower delivery samastipur, online flowers samastipur bihar, florist samastipur, flowers samastipur maithili chhath",
    footerContent: `
<h2>Flower Delivery in Samastipur — Maithili Heartland on the Burhi Gandak Banks</h2>
<p>Samastipur, in north-central Bihar on the Burhi Gandak River, is one of Bihar's major railway junctions — the East Central Railway division (Samastipur Railway Division) headquartered here manages a vast network serving north Bihar and the Mithila region. The district is in the cultural zone of Mithila — the ancient kingdom associated with Raja Janak, Sita's father — and the Madhubani style of painting (Mithila art) has strong traditions in the villages around Samastipur. The Chhath Puja and Sama-Chakeva (a unique Mithila festival celebrating the bond between brothers and sisters) are the most important festivals. The Rosera sugarcane industry and the Samastipur Agricultural College are significant local landmarks.</p>
<p>RedHeart delivers flowers across Samastipur — Railway Station area, Pusa Road, Dalsingsarai Road, and Civil Lines. Our range includes roses, marigolds, lotus, and seasonal Maithili region bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Samastipur, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Railway Station area, Pusa Road, Dalsingsarai Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, lotus, roses, Chhath Puja and Mithila festival flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Chhath Puja available in Samastipur?",
        answer: "Yes, Chhath Puja is celebrated at the Burhi Gandak ghats in Samastipur. Lotus, marigold, and other Chhath offerings are available — order 2 days in advance for the festival period."
      },
      {
        question: "Can I get flowers for Sama-Chakeva festival in Samastipur?",
        answer: "Yes, Sama-Chakeva (the Mithila festival celebrating sibling bonds) involves floral decorations and puja flowers. Marigolds and seasonal flowers for this celebration are available in Samastipur."
      },
      {
        question: "Do you deliver flowers same day in Samastipur?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Samastipur. Orders placed before 3 PM are delivered the same day."
      }
    ]
  },

  "araria": {
    cityName: "Araria",
    metaTitle: "Flower Delivery in Araria | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Araria, Bihar. Same-day delivery of roses, bouquets & seasonal flowers across Araria. From ₹399.",
    h1: "Online Flower Delivery in Araria",
    metaKeyword: "flower delivery araria, online flowers araria bihar, florist araria, flowers araria seemanchal border nepal",
    footerContent: `
<h2>Flower Delivery in Araria — Seemanchal's Gateway at the Nepal Border</h2>
<p>Araria, in the Seemanchal region of northeastern Bihar bordering Nepal, is the district headquarters of Araria district — an area at the foot of the Himalayan Terai where the Koshi, Mahananda, and Kosi tributaries flow through a flat, flood-prone landscape. The Seemanchal region (comprising Araria, Kishanganj, Katihar, and Purnia districts) has one of Bihar's highest population densities and a significant Muslim minority population alongside the Maithili and Bhojpuri-speaking Hindu communities. The Nepal border (Jogbani-Biratnagar is just 35 km away) makes Araria an important cross-border trade town for goods, timber, and agricultural products. The Chhath Puja at the banks of local rivers and ponds is one of the grandest spectacles in Araria.</p>
<p>RedHeart delivers flowers across Araria — Station Road, Purnia Road, Forbesganj Road, and Civil Lines area. We offer roses, marigolds, lotus, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Araria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Purnia Road, Forbesganj Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, lotus, roses, Chhath Puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Chhath Puja flowers available in Araria?",
        answer: "Yes, Chhath Puja is the most important festival in Araria. Lotus, marigold, and traditional Chhath offerings are available for the four-day festival."
      },
      {
        question: "Can I send Eid flowers in Araria?",
        answer: "Yes, Araria has a significant Muslim population in the Seemanchal region. Rose bouquets and floral arrangements for Eid celebrations are available."
      },
      {
        question: "Do you deliver flowers same day in Araria?",
        answer: "Yes, same-day delivery is available across Araria for orders placed before 3 PM."
      }
    ]
  },

  "kishanganj": {
    cityName: "Kishanganj",
    metaTitle: "Flower Delivery in Kishanganj | Tea & Pineapple Belt | RedHeart",
    metaDescription: "Order flowers in Kishanganj, Bihar. Same-day delivery near Darjeeling tea foothills & across Kishanganj. Roses from ₹399.",
    h1: "Online Flower Delivery in Kishanganj",
    metaKeyword: "flower delivery kishanganj, online flowers kishanganj bihar, florist kishanganj, flowers kishanganj tea pineapple bengal border",
    footerContent: `
<h2>Flower Delivery in Kishanganj — Bihar's Green Tea and Pineapple Country</h2>
<p>Kishanganj, in the extreme northeastern corner of Bihar at the meeting point of Bihar, West Bengal, and Nepal, is a district unique in Bihar's geography — its sub-Himalayan Terai climate and rich alluvial soil support tea cultivation (Kishanganj's CTC tea has been compared to the lesser Darjeeling teas) and pineapple orchards, rare in the rest of Bihar. The Mahananda River flows through the district. The Kishanganj district has a substantial Muslim majority population (over 67%) — the highest in Bihar — owing to its historical proximity to Bengal's Muslim-majority east, and the Eid celebrations here are among Bihar's grandest. The town's proximity to Siliguri (just 65 km) and the Darjeeling Hills gives Kishanganj a distinctly North Bengal flavour.</p>
<p>RedHeart delivers flowers across Kishanganj — Station Road, Thakurganj Road, Araria Road, and Main Market area. We offer roses, seasonal North Bengal-style bouquets, and marigolds. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kishanganj, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Thakurganj Road, Araria Road, Main Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for Eid in Kishanganj?",
        answer: "Yes, Eid is one of the grandest celebrations in Kishanganj. Rose bouquets, jasmine garlands, and festive floral arrangements for Eid are available for same-day delivery."
      },
      {
        question: "Can I order flowers for Chhath Puja in Kishanganj?",
        answer: "Yes, Chhath Puja is also observed by the Hindu community in Kishanganj. Lotus and marigold offerings for the Chhath puja are available."
      },
      {
        question: "Are orchids or hill flowers available in Kishanganj?",
        answer: "Kishanganj's location near the Darjeeling foothills means we carry some seasonal hill flowers and orchid plants alongside roses and marigolds."
      }
    ]
  },

  "nalanda": {
    cityName: "Nalanda",
    metaTitle: "Flower Delivery in Nalanda | Ancient University City | RedHeart",
    metaDescription: "Order flowers in Nalanda (Biharsharif), Bihar. Same-day delivery near ancient university ruins & across Nalanda. From ₹399.",
    h1: "Online Flower Delivery in Nalanda",
    metaKeyword: "flower delivery nalanda, online flowers nalanda bihar, florist nalanda biharsharif, flowers nalanda ancient university",
    footerContent: `
<h2>Flower Delivery in Nalanda — World's Oldest University's Sacred Homeland</h2>
<p>Nalanda, in central Bihar south of Patna, is home to one of humanity's most important intellectual heritage sites: the Nalanda Mahavihara — a UNESCO World Heritage Site that was the world's first residential university, founded in the 5th century CE and attracting scholars from China, Korea, Japan, Persia, Tibet, and Central Asia at its height. The ruins of 11 monasteries and 6 major temples sprawl across a 14-hectare complex. Nearby Rajgir (just 15 km away) was the capital of the Magadha Empire and the site of the Buddha's teaching at Vulture Peak. The Pawapuri Jain temple (where Lord Mahavira attained nirvana) is also in this district, making Nalanda sacred to both Buddhism and Jainism.</p>
<p>RedHeart delivers flowers across Nalanda — Biharsharif area, Rajgir Road, Hilsa area, and Silao area. Our range includes roses, marigolds, Buddhist puja flowers, and seasonal Bihar bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalanda, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Biharsharif, Rajgir Road, Hilsa, Silao area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, Buddhist puja flowers, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Buddhist puja flowers available for the Nalanda ruins and Rajgir area?",
        answer: "Yes, lotus and white chrysanthemum flowers appropriate for Buddhist offerings at the Nalanda Mahavihara and Rajgir's Vulture Peak are available. Delivered to your Nalanda/Rajgir accommodation."
      },
      {
        question: "Can I get flowers for Pawapuri Jain temple offerings near Nalanda?",
        answer: "Yes, white roses and mogra (jasmine) appropriate for Jain puja at Pawapuri (where Lord Mahavira attained nirvana) are available in the Nalanda area."
      },
      {
        question: "Are Chhath Puja flowers available in Nalanda?",
        answer: "Yes, Chhath Puja is celebrated at local ponds and rivers in Nalanda district. Lotus and marigold for the Chhath ritual are available — order 2 days in advance."
      }
    ]
  },

  "dhenkanal": {
    cityName: "Dhenkanal",
    metaTitle: "Flower Delivery in Dhenkanal | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Dhenkanal, Odisha. Same-day delivery of roses, bouquets & seasonal flowers across Dhenkanal. From ₹399.",
    h1: "Online Flower Delivery in Dhenkanal",
    metaKeyword: "flower delivery dhenkanal, online flowers dhenkanal odisha, florist dhenkanal, flowers dhenkanal kapilash mahanadi",
    footerContent: `
<h2>Flower Delivery in Dhenkanal — Mahanadi Country and the Kapilash Shiva Temple</h2>
<p>Dhenkanal, in central Odisha on the upper Mahanadi plain, is a district with a rich natural and spiritual heritage. The Kapilash Hill (860 metres) at the edge of the district is home to the Chandrasekhar (Shiva) temple — one of Odisha's most important Shiva shrines, the hilltop accessible by a ropeway and offering sweeping views of the Mahanadi-Brahmani plain. Dhenkanal was historically the seat of the Dhenkanal princely state and the royal palace and Dargha temple in the town are heritage landmarks. The Tikarpada wildlife sanctuary and the Sadangi dam are important ecological assets. The tribal communities (Kondha, Juang, and Bhuyan) in the forested hills of Dhenkanal district observe unique forest-based festivals.</p>
<p>RedHeart delivers flowers across Dhenkanal — Cuttack Road, Angul Road, Station Road, and Kamakhyanagar area. We offer roses, marigolds, jasmine, and seasonal Odisha bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhenkanal, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cuttack Road, Angul Road, Station Road, Kamakhyanagar area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, jasmine, roses, Kapilash temple puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Kapilash temple Shiva puja available in Dhenkanal?",
        answer: "Yes, bilva leaves, marigold garlands, and lotus for the Kapilash Chandrasekhar temple are available in Dhenkanal. Delivered fresh to your stay before your hilltop temple visit."
      },
      {
        question: "Can I order flowers for Dussehra or Durga Puja in Dhenkanal?",
        answer: "Yes, Durga Puja and Dussehra (Vijayadashami) are major festivals in Dhenkanal. Marigold garlands and red hibiscus for puja are available."
      },
      {
        question: "Do you deliver flowers same day in Dhenkanal?",
        answer: "Yes, same-day delivery is available across Dhenkanal for orders placed before 3 PM."
      }
    ]
  },

  "keonjhar": {
    cityName: "Keonjhar",
    metaTitle: "Flower Delivery in Keonjhar | Iron Ore Country | RedHeart",
    metaDescription: "Order flowers in Keonjhar (Kendujhar), Odisha. Same-day delivery near iron mines & across Keonjhar town. From ₹399.",
    h1: "Online Flower Delivery in Keonjhar",
    metaKeyword: "flower delivery keonjhar, online flowers keonjhar odisha, florist keonjhar kendujhar, flowers keonjhar iron ore tribal",
    footerContent: `
<h2>Flower Delivery in Keonjhar — Iron Ore Capital of Odisha's Tribal Hills</h2>
<p>Keonjhar (Kendujhar), in the mineral-rich hills of northern Odisha, sits at the heart of one of India's most significant iron ore belts — the Keonjhar district contains some of India's richest iron ore deposits, mined by SAIL, TISCO, and NMDC. The Banspal and Koira iron ore ranges, the Saranda forest (shared with Jharkhand), and the Baitarani River headwaters make this district ecologically and economically critical. The tribal communities — Juang, Ho, Munda, and Oriya Khond — have rich traditions of forest worship, the Sohrai harvest festival, and elaborate floral offerings at their sacred groves (jaheras). The Gonasika temple at the Baitarani's source and the Sitabhinji rock paintings are unique heritage treasures.</p>
<p>RedHeart delivers flowers across Keonjhar — Station Road, Anandpur Road, Civil Lines, and Champua Road. Our range includes roses, marigolds, seasonal Odisha bouquets, and tribal festival flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Keonjhar, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Anandpur Road, Civil Lines, Champua Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for tribal festivals like Sohrai in Keonjhar?",
        answer: "Yes, the Sohrai (harvest festival) of the Ho and Munda tribal communities involves elaborate floral traditions. Marigold and seasonal wildflower arrangements for tribal celebrations are available in Keonjhar."
      },
      {
        question: "Can I get flowers for corporate mining camp events near Keonjhar?",
        answer: "Yes, TISCO, SAIL, and NMDC mining colonies near Keonjhar receive fresh flower deliveries for corporate events and personal gifting."
      },
      {
        question: "Do you deliver flowers same day in Keonjhar town?",
        answer: "Yes, same-day delivery is available across Keonjhar for orders placed before 3 PM."
      }
    ]
  },

  "jajpur": {
    cityName: "Jajpur",
    metaTitle: "Flower Delivery in Jajpur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Jajpur, Odisha. Same-day delivery near Biraja temple & across Jajpur town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Jajpur",
    metaKeyword: "flower delivery jajpur, online flowers jajpur odisha, florist jajpur, flowers jajpur biraja temple shakti peetha",
    footerContent: `
<h2>Flower Delivery in Jajpur — Ancient Odisha's Shakti Peetha Pilgrim Town</h2>
<p>Jajpur, on the Baitarani River in northern Odisha, is one of Odisha's most sacred towns — the home of the Biraja temple, a major shakti peetha (one of 51 Shakti shrines across India) dedicated to Goddess Biraja (a form of Durga). The Biraja temple is the presiding deity of Odisha and is considered the "state goddess" — the Odisha government's official seal bears the image of the Biraja temple. The town also has the historic Yajati Keshari (Jajati Keshari) temple ruins, significant Buddhist heritage sites from the 7th–11th centuries, and the Vyasadeva Math. Jajpur district's economy has been transformed by the ferro-alloy industry at Duburi (one of India's largest ferroalloy complexes).</p>
<p>RedHeart delivers flowers across Jajpur — Temple Road, Dharmasala Road, Duburi area, and Vyasanagar. Our range includes roses, marigolds, red hibiscus (for Biraja puja), and seasonal Odisha bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jajpur, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Temple Road, Dharmasala Road, Duburi area, Vyasanagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red hibiscus, marigolds, jasmine, Biraja temple puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Biraja temple puja available in Jajpur?",
        answer: "Yes, red hibiscus (jaba), marigold garlands, and sacred flower sets for the Biraja shakti peetha temple are our most popular offerings in Jajpur. Delivered fresh to your stay before darshan."
      },
      {
        question: "Can I get flowers for Durga Puja in Jajpur?",
        answer: "Yes, Durga Puja is celebrated with great devotion given Jajpur's shakti peetha heritage. Elaborate marigold and hibiscus arrangements are available."
      },
      {
        question: "Do you deliver to Duburi ferro-alloy complex area near Jajpur?",
        answer: "Yes, Duburi is within our Jajpur delivery zone. Corporate and personal flower deliveries to the Duburi area are available."
      }
    ]
  },

  "jharsuguda": {
    cityName: "Jharsuguda",
    metaTitle: "Flower Delivery in Jharsuguda | Same Day | RedHeart",
    metaDescription: "Order flowers in Jharsuguda, Odisha. Same-day delivery near IB Valley power plants & across Jharsuguda. Roses from ₹399.",
    h1: "Online Flower Delivery in Jharsuguda",
    metaKeyword: "flower delivery jharsuguda, online flowers jharsuguda odisha, florist jharsuguda, flowers jharsuguda power coal ib valley",
    footerContent: `
<h2>Flower Delivery in Jharsuguda — Odisha's Energy Corridor and Airport City</h2>
<p>Jharsuguda, in western Odisha at the junction of the IB River and the Mahanadi, is the power hub of Odisha — home to massive coal-based power plants (Vedanta's BALCO, JSPL, and the IB Valley Thermal Power Station) that exploit the IB Valley coalfields. Jharsuguda's Veer Surendra Sai Airport is the second airport in Odisha (after Bhubaneswar), connecting the western mining and industrial belt to major Indian cities. The town's Odia, Hindi, and Chhattisgarhi-speaking communities create a diverse cultural mix. The Jharsuguda district borders Chhattisgarh, and the nearby Hirakud Dam (one of India's largest earthen dams) on the Mahanadi is just 60 km away.</p>
<p>RedHeart delivers flowers across Jharsuguda — Station Road, Vedanta Road, Airport Road, and JSPL Colony area. Our range includes roses, marigolds, seasonal Odisha bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jharsuguda, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Vedanta Road, Airport Road, JSPL Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets, corporate arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to JSPL or Vedanta colony in Jharsuguda?",
        answer: "Yes, employee residential colonies for JSPL, Vedanta, and the IB Valley power plant are within our delivery zone. Corporate gifting and personal bouquets are delivered fresh."
      },
      {
        question: "Are flowers available for Nuakhai festival in Jharsuguda?",
        answer: "Yes, Nuakhai (the Odisha harvest festival celebrated with new rice) is a major celebration in western Odisha including Jharsuguda. Seasonal flowers and marigolds for Nuakhai are available."
      },
      {
        question: "Can I order flowers in Jharsuguda for same-day delivery?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Jharsuguda for orders placed before 3 PM."
      }
    ]
  },

  "bargarh": {
    cityName: "Bargarh",
    metaTitle: "Flower Delivery in Bargarh | Hirakud Canal | RedHeart",
    metaDescription: "Order fresh flowers in Bargarh, Odisha. Same-day delivery near Hirakud canal area & across Bargarh. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Bargarh",
    metaKeyword: "flower delivery bargarh, online flowers bargarh odisha, florist bargarh, flowers bargarh sambalpuri handloom dhanu yatra",
    footerContent: `
<h2>Flower Delivery in Bargarh — Sambalpuri Handloom Country and Dhanu Yatra's Home</h2>
<p>Bargarh, in western Odisha on the Hirakud canal command area of the Mahanadi, is a prosperous agricultural town transformed by the Hirakud irrigation network into a rice and sugarcane surplus zone. Bargarh is famous for two things: its Sambalpuri handloom silk and cotton sarees (the Bargarh ikat Sambalpuri is a GI-tagged product known for its intricate geometric and folk patterns) and the world's largest open-air theatre — the Dhanu Yatra, held every December-January, where the entire town of Bargarh transforms into a theatrical stage depicting the story of Lord Krishna and Kansa, with 10 km² of the city serving as the set over 11 days. This massive community performance has been recognised by Guinness World Records.</p>
<p>RedHeart delivers flowers across Bargarh — Main Road, Sambalpur Road, Barpali Road, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal western Odisha bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bargarh, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Sambalpur Road, Barpali Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Nuakhai festival flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available during the Dhanu Yatra festival in Bargarh?",
        answer: "Yes, the Dhanu Yatra season (December-January) in Bargarh sees high demand for decorative flowers. Marigold and seasonal arrangements for the theatrical celebrations are available — order in advance."
      },
      {
        question: "Can I get flowers for Nuakhai (harvest festival) in Bargarh?",
        answer: "Yes, Nuakhai is the most important harvest festival in western Odisha. Seasonal flowers and marigolds for Nuakhai Juhar (greetings with new rice) are available in Bargarh."
      },
      {
        question: "Do you deliver flowers same day in Bargarh?",
        answer: "Yes, same-day delivery is available across Bargarh for orders placed before 3 PM."
      }
    ]
  },

  "kendrapara": {
    cityName: "Kendrapara",
    metaTitle: "Flower Delivery in Kendrapara | Same Day | RedHeart",
    metaDescription: "Order flowers in Kendrapara, Odisha. Same-day delivery near Bhitarkanika & across Kendrapara town. Roses from ₹399.",
    h1: "Online Flower Delivery in Kendrapara",
    metaKeyword: "flower delivery kendrapara, online flowers kendrapara odisha, florist kendrapara, flowers kendrapara bhitarkanika mangrove",
    footerContent: `
<h2>Flower Delivery in Kendrapara — Bhitarkanika Mangrove Country on the Bay of Bengal</h2>
<p>Kendrapara, on the northern Odisha coast near the Mahanadi delta, is the district headquarters adjacent to one of India's most extraordinary ecosystems: the Bhitarkanika National Park — a vast mangrove forest where the largest population of saltwater crocodiles in Asia is found, alongside giant king cobras, countless migratory and resident waterbirds, and the Gahirmatha sea turtle rookery (the world's largest mass nesting site of olive ridley sea turtles). The Bhitarkanika mangroves and the Gahirmatha coast are also associated with the Kedara Gouri Puja (a unique Odia festival where women worship for marital happiness) at the sacred Bhitarkanika Devi temple. Kendrapara's agricultural economy produces rice in the fertile delta soils.</p>
<p>RedHeart delivers flowers across Kendrapara — Main Road, Aul Road, Pattamundai Road, and Station area. Our range includes roses, marigolds, seasonal Odisha bouquets, and jasmine. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kendrapara, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Aul Road, Pattamundai Road, Station area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine strings, seasonal Odisha bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are tropical or mangrove-inspired flowers available in Kendrapara?",
        answer: "Yes, Kendrapara's coastal setting inspires our tropical flower selection. Hibiscus, marigolds, and coastal bouquets are popular in the Bhitarkanika mangrove gateway region."
      },
      {
        question: "Can I send flowers for Durga Puja in Kendrapara?",
        answer: "Yes, Durga Puja is a major festival in Kendrapara. Marigold garlands and red hibiscus for puja are available during the October festival season."
      },
      {
        question: "Do you deliver flowers same day in Kendrapara?",
        answer: "Yes, same-day delivery is available across Kendrapara for orders placed before 3 PM."
      }
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

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
