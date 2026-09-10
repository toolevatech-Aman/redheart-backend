// Batch 20 — 15 cities: Rewa, Satna, Burhanpur, Chhindwara, Dewas, Morena,
// Shivpuri, Vidisha, Ratlam, Khandwa, Khargone, Katni, Damoh, Chhatarpur, Singrauli

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "rewa": {
    cityName: "Rewa",
    metaTitle: "Flower Delivery in Rewa MP | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Rewa, Madhya Pradesh. Same-day roses, bouquets & seasonal flowers delivered across Rewa. Starting from ₹399.",
    h1: "Online Flower Delivery in Rewa",
    metaKeyword: "flower delivery rewa, online flowers rewa madhya pradesh, florist rewa mp, fresh flowers rewa",
    footerContent: `
<h2>Flower Delivery in Rewa — Royal Blooms from the White Tiger Land</h2>
<p>Rewa, a city of great historical significance in northern Madhya Pradesh, is best known as the birthplace of the white tiger — the rare albino Bengal tiger first captured in the Govindgarh forests of the Rewa princely state in 1951. The city's Rewa Fort, perched above the Biharia plateau, and the spectacular Bhedaghat-like gorges of the Tamsa River give Rewa a dramatic natural setting. The city is a cultural hub for the Vindhya region, with a tradition of classical music and the arts under the Rewa royal family's patronage. Festivals like Ram Navami are celebrated with particular fervour here as Rewa lies in the Awadh cultural belt.</p>
<p>RedHeart delivers fresh flowers across Rewa — Civil Lines, Purani Basti, Gandhi Chowk, Chorhata, and Malgodam areas. We offer roses, marigolds, seasonal bouquets, and decorative plants. Same-day delivery is available for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewa, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Purani Basti, Gandhi Chowk, Chorhata, Malgodam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Civil Lines area in Rewa?",
        answer: "Yes, Civil Lines is one of our primary delivery areas in Rewa. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Can I send a birthday bouquet in Rewa?",
        answer: "Absolutely. Birthday bouquets with roses, gerberas, or mixed flowers are available in Rewa. You can also add a personalised message card when ordering."
      },
      {
        question: "What flowers are used for Ram Navami decorations in Rewa?",
        answer: "Marigolds, roses, and jasmine are the primary flowers for Ram Navami in Rewa. Toran garlands and loose flower offerings are popular. We stock these in higher quantities during the festival season."
      }
    ]
  },

  "satna": {
    cityName: "Satna",
    metaTitle: "Flower Delivery in Satna MP | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Satna, Madhya Pradesh. Same-day delivery of roses, bouquets & plants across Satna town. Starting from ₹399.",
    h1: "Online Flower Delivery in Satna",
    metaKeyword: "flower delivery satna, online flowers satna mp, florist satna madhya pradesh, fresh flowers satna",
    footerContent: `
<h2>Flower Delivery in Satna — Blooms for the Cement Capital of MP</h2>
<p>Satna, in eastern Madhya Pradesh along the banks of the Satna River, is the commercial and industrial heart of the Vindhya region. The city is often called the "Cement Capital of Madhya Pradesh" due to the dense cluster of cement plants — Prism, Birla, Satna Cement — that drive its economy. But beyond industry, Satna is a city with deep cultural roots: it lies between the pilgrimage towns of Chitrakoot (where Lord Ram spent years in exile) and Maihar (home to the famous Sharda Devi temple on a hilltop), making it a gateway city for religious tourism in the Vindhya belt.</p>
<p>RedHeart delivers flowers across Satna — including Civil Lines, Rewa Road, Birla Nagar, Majhgawan, and surrounding residential areas. Our catalogue includes roses, carnations, marigold arrangements, and seasonal mixed bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Satna, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Rewa Road, Birla Nagar, Majhgawan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, carnations, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Maihar Devi puja from Satna?",
        answer: "Yes, we deliver puja flower arrangements and marigold garlands in Satna which can be carried to Maihar. For Maihar temple itself, check our coverage for that area."
      },
      {
        question: "Do you deliver to Birla Nagar colony in Satna?",
        answer: "Yes, Birla Nagar is within our delivery area in Satna. Place your order before 3 PM for same-day delivery."
      },
      {
        question: "What is the minimum order value for flower delivery in Satna?",
        answer: "Flowers start from ₹399 in Satna with no additional minimum order requirement. Delivery charges may apply depending on your exact location."
      }
    ]
  },

  "burhanpur": {
    cityName: "Burhanpur",
    metaTitle: "Flower Delivery in Burhanpur | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Burhanpur, Madhya Pradesh. Roses, bouquets & seasonal flowers delivered same day across Burhanpur. From ₹399.",
    h1: "Online Flower Delivery in Burhanpur",
    metaKeyword: "flower delivery burhanpur, online flowers burhanpur mp, florist burhanpur, flowers tapti nagar burhanpur",
    footerContent: `
<h2>Flower Delivery in Burhanpur — Mughal Heritage and Floral Traditions</h2>
<p>Burhanpur, situated on the banks of the Tapti River in western Madhya Pradesh near the Maharashtra border, is one of India's most historically loaded cities. This was the Mughal military capital during Aurangzeb's Deccan campaigns, and it was here in 1631 that Mumtaz Mahal died after the birth of her 14th child — the inspiration for the Taj Mahal. The city's Shahi Qila, Jama Masjid, and the Asirgarh Fort nearby speak to a complex past. Today Burhanpur is a hub for cotton and silk textiles, with its powerloom industry producing fabric traded across India. The city's cultural mix of Hindu, Muslim, and Sikh communities makes it a place where festivals are diverse and flowers are needed year-round.</p>
<p>RedHeart delivers flowers across Burhanpur town — Neem Gali, Itwar Bazar, Lal Bagh, and Tapti Nagar. Our selection includes roses, marigolds, carnations, and seasonal arrangements. Same-day delivery is available for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Burhanpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Neem Gali, Itwar Bazar, Lal Bagh, Tapti Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, carnations, wedding garlands</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Burhanpur for wedding ceremonies?",
        answer: "Yes, wedding garlands, varmala sets, and decorative bouquets are available in Burhanpur. For bulk wedding orders, we recommend booking 2–3 days in advance."
      },
      {
        question: "Can I send flowers to someone near Tapti Nagar in Burhanpur?",
        answer: "Tapti Nagar is within our delivery coverage in Burhanpur. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Are flower delivery services available in Burhanpur during Muharram or Eid?",
        answer: "Yes, we deliver year-round including during Eid and other festivals. Floral arrangements are popular for Eid home decoration and gifting in Burhanpur's diverse community."
      }
    ]
  },

  "chhindwara": {
    cityName: "Chhindwara",
    metaTitle: "Flower Delivery in Chhindwara | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Chhindwara, Madhya Pradesh. Same-day roses, bouquets & seasonal blooms delivered across Chhindwara. Starting ₹399.",
    h1: "Online Flower Delivery in Chhindwara",
    metaKeyword: "flower delivery chhindwara, online flowers chhindwara mp, florist chhindwara, fresh flowers chhindwara",
    footerContent: `
<h2>Flower Delivery in Chhindwara — Blooms from the Gateway to Satpura</h2>
<p>Chhindwara, the largest district of Madhya Pradesh by area, sits on the Satpura plateau in central India. The city is a calm, green administrative town known for its pleasant climate — cooler than most of MP due to its elevated terrain. Chhindwara's economy revolves around agriculture (oranges, wheat), coal mining in nearby Pench, and the growing service sector. The Patalkot valley nearby — a mysterious deep gorge inhabited by the Bharia tribe — and the Tamas (Dhansiri) forests give the district a wild, unexplored character. The city itself has a strong tradition of Navratri celebrations at the Devi temples, where marigolds and roses are offered in abundance.</p>
<p>RedHeart delivers flowers across Chhindwara — Chandni Chowk, Parasia Road, Civil Lines, and Sausar Road areas. Our catalogue covers roses, seasonal bouquets, marigolds, and flowering plants. Same-day delivery for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhindwara, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandni Chowk, Parasia Road, Civil Lines, Sausar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed bouquets, seasonal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for delivery in Chhindwara throughout the year?",
        answer: "Yes, we maintain fresh flower stock throughout the year in Chhindwara. Seasonal availability varies but roses, marigolds, and carnations are available year-round."
      },
      {
        question: "Can I send flowers to Civil Lines in Chhindwara?",
        answer: "Civil Lines is a key delivery area in Chhindwara. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "What bouquet options are available in Chhindwara for a birthday gift?",
        answer: "We offer single-rose bunches, mixed seasonal bouquets, and premium arrangements for birthdays in Chhindwara. Prices start from ₹399 and a message card can be included."
      }
    ]
  },

  "dewas": {
    cityName: "Dewas",
    metaTitle: "Flower Delivery in Dewas | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Dewas, Madhya Pradesh. Same-day roses, bouquets & seasonal flowers delivered across Dewas town. Starting ₹399.",
    h1: "Online Flower Delivery in Dewas",
    metaKeyword: "flower delivery dewas, online flowers dewas mp, florist dewas madhya pradesh, flowers dewas industrial",
    footerContent: `
<h2>Flower Delivery in Dewas — Fragrant Blooms for the Industrial Heartland</h2>
<p>Dewas, located between Indore and Ujjain on the Malwa plateau of Madhya Pradesh, is one of the state's most important industrial towns. The Dewas Industrial Area houses major pharmaceutical, textile, and chemical units, and the city's labour force is one of the most organised in MP. Yet amid its industrial reputation, Dewas has a deeply spiritual side — it is home to the famous Tekri (hill temple) dedicated to Mata Chamunda and Mata Tulja Bhavani, where thousands of devotees climb 300 steps daily to offer flowers and prayers. The twin temples of Badi Mata and Choti Mata on the Tekri are Dewas's defining landmarks.</p>
<p>RedHeart delivers flowers across Dewas — Tekri Road, Ujjain Road, Gandhi Nagar, Moti Tabela, and Industrial Area. Fresh roses, marigolds, and seasonal bouquets are available. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dewas, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tekri Road, Ujjain Road, Gandhi Nagar, Moti Tabela, Industrial Area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds for Tekri puja, roses, mixed bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get marigold flowers for offering at Dewas Tekri (Chamunda Mata)?",
        answer: "Yes, marigold garlands and rose offerings for Chamunda Mata and Tulja Bhavani on Dewas Tekri are among our most popular products. They are available daily and can be delivered to your door before your climb."
      },
      {
        question: "Do you deliver to the Industrial Area in Dewas?",
        answer: "Yes, the Dewas Industrial Area is within our delivery zone. Corporate gifting, office bouquets, and personal orders are all served here."
      },
      {
        question: "How fresh are the flowers when delivered in Dewas?",
        answer: "All flowers are sourced fresh each morning and refrigerated during transport. We guarantee petal-fresh delivery — if you're not satisfied with the quality, we will replace your order."
      }
    ]
  },

  "morena": {
    cityName: "Morena",
    metaTitle: "Flower Delivery in Morena MP | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Morena, Madhya Pradesh. Same-day roses, bouquets & seasonal flowers delivered across Morena. Starting ₹399.",
    h1: "Online Flower Delivery in Morena",
    metaKeyword: "flower delivery morena, online flowers morena mp, florist morena madhya pradesh, flowers morena chambal",
    footerContent: `
<h2>Flower Delivery in Morena — The Chambal Valley Blossoms</h2>
<p>Morena, the district headquarters of Morena district in Madhya Pradesh, sits in the fertile Chambal riverbed region near the border with Uttar Pradesh and Rajasthan. While the Chambal region was historically associated with the dacoity legend, the modern Morena is a prosperous agricultural city surrounded by mustard fields and sesame crops. The city is also known for its "Murena" variety of gajak — a sweet made from sesame and jaggery — and its proximity to the ancient Bateshwar group of temples (over 200 Shiva temples from the Gurjara-Pratihara period). Festivals here follow the UP-MP belt's traditions, with Ram Navami, Diwali, and local melas being grand affairs.</p>
<p>RedHeart delivers flowers across Morena — Bazar Gali, Ambedkar Road, Civil Lines, and Jiwaji Ganj. Our range includes roses, marigolds, carnations, and seasonal arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Morena, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bazar Gali, Ambedkar Road, Civil Lines, Jiwaji Ganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, carnations, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Civil Lines in Morena?",
        answer: "Yes, Civil Lines is covered under our Morena delivery network. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "Can I order flowers for a wedding in Morena?",
        answer: "Yes, wedding garlands, varmala sets, and decorative bouquets are available in Morena. Bulk wedding orders should be placed at least 2 days in advance."
      },
      {
        question: "What is the delivery fee for flowers in Morena?",
        answer: "Delivery charges vary depending on your exact address in Morena. The flower price starts at ₹399, and any applicable delivery fee will be shown at checkout."
      }
    ]
  },

  "shivpuri": {
    cityName: "Shivpuri",
    metaTitle: "Flower Delivery in Shivpuri MP | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Shivpuri, Madhya Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Shivpuri. From ₹399.",
    h1: "Online Flower Delivery in Shivpuri",
    metaKeyword: "flower delivery shivpuri, online flowers shivpuri mp, florist shivpuri, fresh flowers shivpuri madhya pradesh",
    footerContent: `
<h2>Flower Delivery in Shivpuri — Forest Fragrance from the Tiger Reserve Town</h2>
<p>Shivpuri, once the summer capital of the Scindia rulers of Gwalior, sits at the edge of the Madhav National Park in Madhya Pradesh's Gwalior-Chambal region. The city's colonial past is visible in its Chhatris (cenotaphs) — grand marble memorial structures built for the Scindia royal family — and in the Sakhya Sagar and Madhav Sagar lakes that dot the landscape. The Madhav National Park was one of India's earliest national parks and still shelters leopards, cheetals, and migratory birds. Shivpuri's mild, forested setting makes it one of MP's most scenic towns, and its flowers often draw inspiration from the surrounding natural abundance.</p>
<p>RedHeart delivers fresh flowers across Shivpuri — Civil Lines, Gandhi Chowk, Kolaras Road, and Narwar Road. Our range includes roses, marigold garlands, mixed bouquets, and potted flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shivpuri, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Gandhi Chowk, Kolaras Road, Narwar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to a hotel near Madhav National Park in Shivpuri?",
        answer: "Yes, we deliver to hotels and resorts near the National Park in Shivpuri. A romantic bouquet for a forest getaway can be arranged with same-day delivery."
      },
      {
        question: "Do you deliver flowers to Civil Lines area in Shivpuri?",
        answer: "Yes, Civil Lines is a primary delivery area in Shivpuri. Orders are accepted till 3 PM for same-day delivery."
      },
      {
        question: "Are seasonal wild-style flowers available in Shivpuri?",
        answer: "We carry a range of seasonal blooms that complement Shivpuri's natural setting including sunflowers, dahlias, and mixed wildflower-inspired arrangements."
      }
    ]
  },

  "vidisha": {
    cityName: "Vidisha",
    metaTitle: "Flower Delivery in Vidisha MP | Same Day | RedHeart",
    metaDescription: "Order flowers online in Vidisha, Madhya Pradesh. Same-day delivery to all areas of Vidisha town. Roses, bouquets & seasonal flowers from ₹399.",
    h1: "Online Flower Delivery in Vidisha",
    metaKeyword: "flower delivery vidisha, online flowers vidisha mp, florist vidisha, flowers vidisha madhya pradesh",
    footerContent: `
<h2>Flower Delivery in Vidisha — Blooms Beside the Betwa</h2>
<p>Vidisha, situated on the Betwa River in central Madhya Pradesh near Bhopal, is one of India's oldest continuously inhabited cities. Known in ancient texts as Besnagar or Bethsavati, it was the second capital of the Shunga Empire and the city where the Heliodorus pillar — India's oldest known Sanskrit inscription — stands as testimony to a Greek ambassador's conversion to Vaishnavism in 113 BCE. Just 9 km from the Buddhist complex of Sanchi, Vidisha has an extraordinary archaeological heritage. Modern Vidisha is a calm district town with a rich tradition of Malwa folk music and seasonal festivals that celebrate the agricultural cycle on the Betwa plains.</p>
<p>RedHeart delivers fresh flowers across Vidisha — including Nanakheri, Ganj Basoda, Civil Lines, and surrounding residential areas. Our catalogue includes roses, marigolds, mixed seasonal bouquets, and gift plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vidisha, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Nanakheri, Ganj Basoda, Vidisha town</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Vidisha for Diwali or other festivals?",
        answer: "Yes, we deliver festival arrangements including marigold garlands and rose bouquets across Vidisha for Diwali, Navratri, and other major occasions."
      },
      {
        question: "Can I order a bouquet for someone in Ganj Basoda near Vidisha?",
        answer: "Ganj Basoda is a nearby town covered in our extended Vidisha zone. Delivery may take slightly longer — we recommend placing orders before 12 PM for same-day delivery."
      },
      {
        question: "What types of flowers are available in Vidisha?",
        answer: "Roses, marigolds, carnations, gerberas, and seasonal mixed flowers are available in Vidisha. Orchids and imported blooms are available subject to stock."
      }
    ]
  },

  "ratlam": {
    cityName: "Ratlam",
    metaTitle: "Flower Delivery in Ratlam | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Ratlam, Madhya Pradesh. Same-day roses, bouquets & seasonal flowers delivered across Ratlam town. Starting ₹399.",
    h1: "Online Flower Delivery in Ratlam",
    metaKeyword: "flower delivery ratlam, online flowers ratlam mp, florist ratlam, flowers ratlam madhya pradesh",
    footerContent: `
<h2>Flower Delivery in Ratlam — The Sev Capital Welcomes Fresh Blooms</h2>
<p>Ratlam, a commercial city in western Madhya Pradesh's Malwa region, is nationally famous for its "Ratlami sev" — the spicy, peppery snack that has become one of India's most iconic street foods. But Ratlam is much more than its sev: it is a major railway junction on the Western Railway and has a strong diamond trading community (many Ratlam families are prominent in Mumbai's diamond business). The city's old quarters have a distinct Malwa architecture, while its newer areas reflect the prosperity of the trading community. Paryushan (Jain festival), Diwali, and Navratri are celebrated with characteristic Malwa flair, and fresh flowers are an integral part of every household celebration.</p>
<p>RedHeart delivers flowers across Ratlam — Sadar Bazaar, Station Road, Jawahar Nagar, and Namdev Nagar. We offer roses, seasonal bouquets, marigolds, and decorative arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ratlam, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sadar Bazaar, Station Road, Jawahar Nagar, Namdev Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Malwa bouquets, Paryushan flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Paryushan (Jain festival) in Ratlam?",
        answer: "Yes, white and light-coloured flowers like white roses and mogra (jasmine) are popular during Paryushan in Ratlam's Jain community. We can prepare appropriate arrangements on request."
      },
      {
        question: "Do you deliver to Station Road area in Ratlam?",
        answer: "Yes, Station Road is within our delivery coverage in Ratlam. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "What flowers work well as Diwali gifts in Ratlam?",
        answer: "Marigold garlands for door décor, and rose or orchid gift boxes for family gifting are the most popular Diwali choices in Ratlam. Festive arrangements can be pre-ordered a day in advance."
      }
    ]
  },

  "khandwa": {
    cityName: "Khandwa",
    metaTitle: "Flower Delivery in Khandwa | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Khandwa, Madhya Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Khandwa. From ₹399.",
    h1: "Online Flower Delivery in Khandwa",
    metaKeyword: "flower delivery khandwa, online flowers khandwa mp, florist khandwa, flowers east nimar khandwa",
    footerContent: `
<h2>Flower Delivery in Khandwa — Cotton Country in Full Colour</h2>
<p>Khandwa, the district headquarters of East Nimar in southern Madhya Pradesh, is a city of rivers and cotton fields. Situated near the confluence of the Tapti and Sirur rivers, Khandwa was the hometown of the legendary musician and saint Kishore Kumar (born Abhas Kumar Ganguly) — one of Bollywood's most beloved playback singers. The Kishore Kumar Memorial stands in the city as a tribute to this cultural giant. Khandwa is also a significant cotton trading centre, with mandis drawing farmers from across the Nimar region during harvest season. The Janapav Hill nearby is said to be the birthplace of Parshuram and draws pilgrims on Parshuram Jayanti.</p>
<p>RedHeart delivers flowers across Khandwa — Kishore Kumar Chowk, Old City, Civil Lines, and Indore Road. We offer roses, carnations, marigold garlands, and mixed seasonal arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khandwa, East Nimar, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kishore Kumar Chowk, Old City, Civil Lines, Indore Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, carnations, mixed bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send a bouquet in Khandwa near Kishore Kumar Chowk?",
        answer: "Yes, the area around Kishore Kumar Chowk is in our delivery coverage. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Are flowers available in Khandwa for Parshuram Jayanti?",
        answer: "Yes, marigold garlands and puja flowers are stocked in higher quantities during Parshuram Jayanti. We recommend placing your order a day in advance for large quantities."
      },
      {
        question: "Can I order a surprise flower delivery in Khandwa?",
        answer: "Yes, surprise deliveries including birthday morning bouquets and anniversary gifts are fully available in Khandwa. You can add a greeting card and choose a specific delivery slot."
      }
    ]
  },

  "khargone": {
    cityName: "Khargone",
    metaTitle: "Flower Delivery in Khargone | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Khargone, Madhya Pradesh. Same-day roses, bouquets & seasonal flowers delivered across Khargone town. From ₹399.",
    h1: "Online Flower Delivery in Khargone",
    metaKeyword: "flower delivery khargone, online flowers khargone mp, florist khargone, flowers west nimar khargone",
    footerContent: `
<h2>Flower Delivery in Khargone — Narmada Valley's Market Town in Bloom</h2>
<p>Khargone, the headquarters of West Nimar district in southern Madhya Pradesh, is a thriving agricultural and commercial town on the fertile plains near the Narmada River. The city is surrounded by cotton and soybean fields and is known across MP for its local mandis and weekly haats that draw farmers from dozens of villages. Khargone's significance as a commercial hub also comes from its location on National Highway 3 (Agra-Mumbai highway), making it a stop for trade between central India and the coasts. The Maheshwar palace and ghats — just 39 km away — are one of Central India's most picturesque heritage sites and draw Khargone visitors for day trips along the Narmada.</p>
<p>RedHeart delivers fresh flowers across Khargone — including Peth Naka, Lodhipura, Civil Lines, and Station Road. We offer roses, carnations, marigolds, and seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khargone, West Nimar, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Peth Naka, Lodhipura, Civil Lines, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, carnations, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Khargone on all days including Sundays?",
        answer: "Yes, we deliver 7 days a week in Khargone including Sundays and public holidays. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Can I order flowers for a baby shower or naming ceremony in Khargone?",
        answer: "Yes, pastel-coloured bouquets and arrangements are popular for baby showers and Namkaran ceremonies in Khargone. We can customise colours on request."
      },
      {
        question: "Are fresh flowers available in Khargone during summer months?",
        answer: "Yes, we maintain cold-chain delivery to ensure freshness even during hot summer months in Khargone. Roses and carnations hold up particularly well and are always available."
      }
    ]
  },

  "katni": {
    cityName: "Katni",
    metaTitle: "Flower Delivery in Katni | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Katni, Madhya Pradesh. Same-day roses, bouquets & seasonal flowers delivered across Katni town. Starting ₹399.",
    h1: "Online Flower Delivery in Katni",
    metaKeyword: "flower delivery katni, online flowers katni mp, florist katni, flowers katni madhya pradesh",
    footerContent: `
<h2>Flower Delivery in Katni — Limestone City in Blossom</h2>
<p>Katni (also known as Mudwara), in northern Madhya Pradesh at the convergence of three railway lines, is one of the most strategically located railway junctions in central India. The city is a major producer of limestone (used in cement production) and fireclay, and is known for the Katni River that runs through it. Despite its industrial identity, Katni has a vibrant local culture centred around its annual Ram Lila — one of the most elaborate in Madhya Pradesh — and the Navratri celebrations at the Chamunda Devi and Bageshwar temples. The city's bazaar culture, particularly around Gandhi Chowk and Collectorate Road, gives it the feel of a busy market town.</p>
<p>RedHeart delivers flowers across Katni — Gandhi Chowk, Collectorate Road, Umaria Road, and Sleemanabad. We offer roses, marigolds, mixed seasonal bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Katni, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Chowk, Collectorate Road, Umaria Road, Sleemanabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed bouquets, seasonal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered in Katni near the railway junction area?",
        answer: "Yes, areas near the Katni railway junction and Gandhi Chowk are within our delivery zone. Same-day orders are accepted till 3 PM."
      },
      {
        question: "Are flowers available for Ram Lila or Navratri in Katni?",
        answer: "Yes, we stock extra marigold garlands, rose petals, and puja flower sets during Ram Lila and Navratri in Katni. Order in advance for large quantities during festival peaks."
      },
      {
        question: "Can I send a flower bouquet to a friend in Sleemanabad from Katni?",
        answer: "Sleemanabad, near Katni, is covered under our extended delivery zone. Delivery may take slightly longer — we recommend placing by 12 PM for same-day delivery."
      }
    ]
  },

  "damoh": {
    cityName: "Damoh",
    metaTitle: "Flower Delivery in Damoh | Same Day | RedHeart",
    metaDescription: "Order flowers online in Damoh, Madhya Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Damoh town. From ₹399.",
    h1: "Online Flower Delivery in Damoh",
    metaKeyword: "flower delivery damoh, online flowers damoh mp, florist damoh, flowers damoh madhya pradesh",
    footerContent: `
<h2>Flower Delivery in Damoh — Ancient Stepwells and Fresh Petals</h2>
<p>Damoh, in the Vindhya ranges of northern Madhya Pradesh, is a city with ancient roots — the name derives from "Damayanti" and the region has references dating to the Mahabharata. The Singrampur group of temples (9th century) and the Jatkara inscriptions near Damoh showcase its deep historical fabric. The city is known for the Bandakpur temple dedicated to Shiva and for the beautiful Raneh Falls on the Ken River, shared with Panna National Park nearby. Damoh's economy is primarily agricultural with wheat, gram, and oilseeds being major crops. The local bazaar near the bus stand is lively with traders from surrounding villages on market days.</p>
<p>RedHeart delivers flowers across Damoh town — Sagar Road, Hatta Road, Collectorate area, and Purani Basti. Our range includes roses, marigolds, carnations, and mixed seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Damoh, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sagar Road, Hatta Road, Collectorate area, Purani Basti</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, carnations, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Damoh for Shivratri or Bandakpur temple puja?",
        answer: "Yes, puja flowers including bilva patra arrangements and marigold garlands for Shiva temples are available in Damoh during Shivratri and throughout the year."
      },
      {
        question: "Can I send a flower bouquet to someone in Damoh same day?",
        answer: "Yes, same-day delivery is available in Damoh for orders placed before 3 PM. Your recipient will receive fresh flowers within 3–5 hours of order placement."
      },
      {
        question: "What is the price range for flower bouquets in Damoh?",
        answer: "Bouquets in Damoh start from ₹399 for a simple single-flower bunch and go up to ₹1,999+ for premium orchid or rose arrangements. Prices are the same as across India on RedHeart."
      }
    ]
  },

  "chhatarpur": {
    cityName: "Chhatarpur",
    metaTitle: "Flower Delivery in Chhatarpur | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Chhatarpur, Madhya Pradesh. Same-day delivery of roses, bouquets & flowers near Khajuraho. Starting from ₹399.",
    h1: "Online Flower Delivery in Chhatarpur",
    metaKeyword: "flower delivery chhatarpur, online flowers chhatarpur mp, florist chhatarpur, flowers near khajuraho",
    footerContent: `
<h2>Flower Delivery in Chhatarpur — The Gateway to Khajuraho</h2>
<p>Chhatarpur, the district headquarters of Chhatarpur district in northern Madhya Pradesh's Bundelkhand region, is the gateway city for the world-famous Khajuraho temple complex — just 45 km away. The Khajuraho temples, a UNESCO World Heritage Site, draw international tourists year-round, and Chhatarpur serves as the commercial and administrative base for the region. The city itself has important landmarks including the Maharaja Chhatrasal Museum and the ancient Bhuteshwar Mahadev temple. The Bundelkhand culture is rich in folk traditions — Ramlilas, Jhanki processions, and local melas see vibrant flower use in decorations and offerings.</p>
<p>RedHeart delivers flowers across Chhatarpur — Civil Lines, Bus Stand Road, Nehru Nagar, and Nowgong Road. Our selection covers roses, marigolds, carnations, and seasonal Bundelkhand arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhatarpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Bus Stand Road, Nehru Nagar, Nowgong Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for delivery in Khajuraho from Chhatarpur?",
        answer: "We serve Chhatarpur town primarily. For Khajuraho (45 km away), please check our Khajuraho delivery page or call customer support to arrange a special delivery."
      },
      {
        question: "Do you deliver flowers to Civil Lines in Chhatarpur?",
        answer: "Yes, Civil Lines is one of the primary delivery zones in Chhatarpur. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "What flowers are used in Bundelkhand weddings that I can order in Chhatarpur?",
        answer: "Marigold torans, rose and jasmine varmala sets, and Genda phool (marigold) garlands are central to Bundelkhand wedding customs. We carry all these and can customise for wedding orders."
      }
    ]
  },

  "singrauli": {
    cityName: "Singrauli",
    metaTitle: "Flower Delivery in Singrauli | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Singrauli, Madhya Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Singrauli town. From ₹399.",
    h1: "Online Flower Delivery in Singrauli",
    metaKeyword: "flower delivery singrauli, online flowers singrauli mp, florist singrauli, flowers singrauli waidhan",
    footerContent: `
<h2>Flower Delivery in Singrauli — Energy Capital Brightened by Blooms</h2>
<p>Singrauli, in the easternmost corner of Madhya Pradesh bordering Chhattisgarh and Uttar Pradesh, is one of India's most significant energy production centres. The Singrauli coalfields supply coal to thermal power plants across the country, and the Rihand Dam hydropower station adds further to the region's energy output. Despite its industrial character, Singrauli is a growing city with an educated professional workforce living in well-planned colonies like Waidhan and Vindhyanagar. The forests of the Singrauli-Sonbhadra region have tribal communities with their own festive traditions, and the growing urban population here brings mainland Indian celebrations with enthusiasm — Diwali, Durga Puja, and Holi are all observed with energy.</p>
<p>RedHeart delivers flowers across Singrauli — Waidhan, Vindhyanagar, Morwa, and Chitrangi. Our range includes roses, marigolds, mixed bouquets, and seasonal flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Singrauli, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Waidhan, Vindhyanagar, Morwa, Chitrangi</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed bouquets, seasonal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Waidhan or Vindhyanagar in Singrauli?",
        answer: "Yes, Waidhan and Vindhyanagar are both within our Singrauli delivery coverage. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Can I order flowers for Durga Puja in Singrauli?",
        answer: "Yes, marigold garlands, rose decorations, and full puja flower sets are available for Durga Puja in Singrauli. We recommend placing orders a day before for the Ashtami or Navami puja."
      },
      {
        question: "Are flower deliveries reliable in Singrauli given its remote location?",
        answer: "Yes, we have an established delivery network in Singrauli. All flowers are sourced fresh and transported in refrigerated packaging to ensure quality on arrival."
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
