// Batch 39 — 15 cities:
// Madhya Pradesh: Guna, Tikamgarh, Chhatarpur, Panna, Singrauli, Sidhi
// Punjab: Rupnagar, SBS Nagar (Nawanshahr), Fatehgarh Sahib
// Tamil Nadu: Ariyalur, Nagapattinam, Ranipet, Tirupattur, Kallakurichi
// Gujarat: Nadiad

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "guna": {
    cityName: "Guna",
    metaTitle: "Flower Delivery in Guna | Chambal MP | RedHeart",
    metaDescription: "Order flowers in Guna, Madhya Pradesh. Same-day delivery near Raghogarh Fort & across Guna. From ₹399.",
    h1: "Online Flower Delivery in Guna",
    metaKeyword: "flower delivery guna, online flowers guna madhya pradesh, florist guna, flowers guna chambal valley raghogarh soybean",
    footerContent: `
<h2>Flower Delivery in Guna — Chambal Valley's Soybean Capital Between Gwalior and Bhopal</h2>
<p>Guna, in the Chambal River valley of Madhya Pradesh, is the headquarters of Guna district — strategically located on the Bhopal-Gwalior highway and railway corridor. The district is a major soybean producer in MP (part of the central India soybean belt). The Raghogarh Fort (an ancient fort associated with the Raghogarh princely state, whose famous ruler Vijay Bahadur Singh was a poet-king) overlooks Guna town. The Chachai and Keoti waterfalls (on the Bihad and Johilla rivers nearby) are scenic attractions. The Simariya area's tribal communities and the Chanderi (famous for its transparent Chanderi silk) are accessible from Guna district.</p>
<p>RedHeart delivers flowers across Guna — Main Market, Bhopal Road, Gwalior Road, Raghogarh area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Guna, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bhopal Road, Gwalior Road, Raghogarh, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Guna?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Guna for same-day delivery."
      },
      {
        question: "Can I send birthday roses to Guna?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Guna for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Guna?",
        answer: "Yes, same-day delivery is available across Guna for orders placed before 3 PM."
      }
    ]
  },

  "tikamgarh": {
    cityName: "Tikamgarh",
    metaTitle: "Flower Delivery in Tikamgarh | Bundelkhand MP | RedHeart",
    metaDescription: "Order flowers in Tikamgarh, Madhya Pradesh. Same-day delivery near Orchha & across Tikamgarh. From ₹399.",
    h1: "Online Flower Delivery in Tikamgarh",
    metaKeyword: "flower delivery tikamgarh, online flowers tikamgarh madhya pradesh, florist tikamgarh, flowers tikamgarh orchha bundelkhand betwa",
    footerContent: `
<h2>Flower Delivery in Tikamgarh — Orchha's Royal Neighbour in the Heart of Bundelkhand</h2>
<p>Tikamgarh, in the Bundelkhand region of northern Madhya Pradesh on the Betwa River, is closely linked to Orchha — one of India's most stunning heritage towns (though Orchha is in Niwari district, it was historically part of Tikamgarh's orbit). The Tikamgarh district has the Chanderi textiles heritage (the famous Chanderi silk saree tradition), and the Lalit Kala Akademi-recognized stone carving and Bundeli folk art traditions. The Bundela Rajput heritage is visible in the numerous temples, tanks, and forts scattered across the district. The Betwa River forms the northern boundary and its many ghats are sites of religious significance during Kartik Purnima and Shivratri.</p>
<p>RedHeart delivers flowers across Tikamgarh — Main Market, Jhansi Road, Sagar Road, Chanderi Road, and Station Road. Our range includes roses, marigolds, seasonal Bundelkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tikamgarh, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jhansi Road, Sagar Road, Chanderi Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Betwa ghat puja available near Tikamgarh?",
        answer: "Yes, marigold and lotus for the Betwa River ghat puja ceremonies are available from Tikamgarh. Same-day delivery is available."
      },
      {
        question: "Can I get flowers for Diwali in Tikamgarh?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Tikamgarh for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Tikamgarh?",
        answer: "Yes, same-day delivery is available across Tikamgarh for orders placed before 3 PM."
      }
    ]
  },

  "chhatarpur": {
    cityName: "Chhatarpur",
    metaTitle: "Flower Delivery in Chhatarpur | Khajuraho MP | RedHeart",
    metaDescription: "Order flowers in Chhatarpur, Madhya Pradesh. Same-day delivery near Khajuraho temples & across Chhatarpur. From ₹399.",
    h1: "Online Flower Delivery in Chhatarpur",
    metaKeyword: "flower delivery chhatarpur, online flowers chhatarpur madhya pradesh, florist chhatarpur, flowers chhatarpur khajuraho chandela bundelkhand",
    footerContent: `
<h2>Flower Delivery in Chhatarpur — Khajuraho's District Headquarters in Chandela Country</h2>
<p>Chhatarpur, in the Bundelkhand plateau of northern Madhya Pradesh, is the district headquarters closest to Khajuraho — the UNESCO World Heritage Site whose Chandela dynasty temples (10th-11th century CE) with their extraordinary erotic sculptural programme are one of India's greatest artistic achievements. The Khajuraho temples and the annual Khajuraho Dance Festival (held every February in the outdoor amphitheatre against the backdrop of the lit temple) draw visitors from across the world. Chhatarpur was itself a Bundela Rajput princely state. The district's Ken River valley (the Ken-Betwa river link project's first phase is in this area) has important wetlands and the Panna National Park buffer zone.</p>
<p>RedHeart delivers flowers across Chhatarpur — Main Market, Khajuraho Road, Nowgong area, Bijawar Road, and Station Road. Our range includes roses, marigolds, seasonal Bundelkhand bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhatarpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Khajuraho Road, Nowgong, Bijawar Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Khajuraho heritage hotel stay from Chhatarpur?",
        answer: "Yes, Khajuraho is about 45 km from Chhatarpur. Rose bouquets for heritage hotel anniversaries and festival stays near the Khajuraho temples can be coordinated from Chhatarpur."
      },
      {
        question: "Are flowers for the Khajuraho Dance Festival season available from Chhatarpur?",
        answer: "Yes, the February Khajuraho Dance Festival brings many visitors. Seasonal bouquets for the festival period are available from Chhatarpur."
      },
      {
        question: "Do you deliver flowers same day in Chhatarpur?",
        answer: "Yes, same-day delivery is available across Chhatarpur for orders placed before 3 PM."
      }
    ]
  },

  "panna": {
    cityName: "Panna",
    metaTitle: "Flower Delivery in Panna | Diamond City MP | RedHeart",
    metaDescription: "Order flowers in Panna, Madhya Pradesh. Same-day delivery near Panna National Park & across Panna. From ₹399.",
    h1: "Online Flower Delivery in Panna",
    metaKeyword: "flower delivery panna, online flowers panna madhya pradesh, florist panna, flowers panna diamond national park ken bundelkhand",
    footerContent: `
<h2>Flower Delivery in Panna — India's Diamond Capital and the Tiger's Return to the Ken Forest</h2>
<p>Panna, in the Vindhya Range of northern Madhya Pradesh, is India's diamond capital — the Panna diamond mines (one of the few commercially operating natural diamond mines in the world, operated by NMDC) produce gem-quality diamonds from kimberlite pipes under the Ken River valley. The Panna National Park (where tigers were successfully re-introduced after becoming locally extinct in 2009 — the most celebrated wildlife conservation success story of the decade) now has a thriving tiger population on the Ken River cliffs. The Pandava Falls and the Raneh Canyon (a stunning gorge of crystalline granite on the Ken River) are scenic wonders. The ancient Baldeoji temple in Panna town is an important Vaishnavite pilgrimage site.</p>
<p>RedHeart delivers flowers across Panna — Main Market, Satna Road, Chhatarpur Road, Diamond Mine Road, and Civil Lines area. Our range includes roses, marigolds, lotus, and seasonal MP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panna, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Satna Road, Chhatarpur Road, Diamond Mine Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, lotus, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Panna National Park jungle safari stay?",
        answer: "Yes, Panna's Ken River eco-lodges are perfect for tiger safaris. A rose bouquet for your jungle anniversary or special night can be delivered in Panna."
      },
      {
        question: "Are flowers for the Baldeoji temple puja available in Panna?",
        answer: "Yes, lotus and marigold for the Baldeoji Vaishnavite temple in Panna are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Panna?",
        answer: "Yes, same-day delivery is available across Panna for orders placed before 3 PM."
      }
    ]
  },

  "singrauli": {
    cityName: "Singrauli",
    metaTitle: "Flower Delivery in Singrauli | Energy Capital MP | RedHeart",
    metaDescription: "Order flowers in Singrauli, Madhya Pradesh. Same-day delivery near Rihand dam & across Singrauli. From ₹399.",
    h1: "Online Flower Delivery in Singrauli",
    metaKeyword: "flower delivery singrauli, online flowers singrauli madhya pradesh, florist singrauli, flowers singrauli energy capital coal rihand",
    footerContent: `
<h2>Flower Delivery in Singrauli — India's Energy Capital at the UP-MP Border</h2>
<p>Singrauli, at the extreme northeastern corner of Madhya Pradesh bordering Uttar Pradesh's Sonbhadra district, is called India's "Energy Capital" — the Singrauli coalfields (Vindhya Coal Field) and the massive NTPC Vindhyachal Thermal Power Station (India's largest thermal power plant at 4,760 MW capacity) make this region the country's most concentrated power generation zone. The Rihand Reservoir (also called Govind Ballabh Pant Sagar) — India's largest man-made reservoir — is shared between Singrauli (MP) and Sonbhadra (UP). The Rihand River valley's tribal communities (Kol, Panika, Gond) have been significantly displaced by the dams and mines, and the region has an intense ecological and social justice history.</p>
<p>RedHeart delivers flowers across Singrauli — Main Market, Waidhan area, NTPC Colony, Chitrangi Road, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Singrauli, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Waidhan, NTPC Colony, Chitrangi Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, corporate gifting bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are corporate gifting flowers for NTPC and mining company offices available in Singrauli?",
        answer: "Yes, corporate flower arrangements for office occasions at NTPC Vindhyachal, NCL mines, and other industrial offices in Singrauli are available for same-day delivery."
      },
      {
        question: "Can I get flowers for Diwali in Singrauli?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Singrauli for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Singrauli?",
        answer: "Yes, same-day delivery is available across Singrauli for orders placed before 3 PM."
      }
    ]
  },

  "sidhi": {
    cityName: "Sidhi",
    metaTitle: "Flower Delivery in Sidhi | Son River MP | RedHeart",
    metaDescription: "Order flowers in Sidhi, Madhya Pradesh. Same-day delivery near Son River valley & across Sidhi. From ₹399.",
    h1: "Online Flower Delivery in Sidhi",
    metaKeyword: "flower delivery sidhi, online flowers sidhi madhya pradesh, florist sidhi, flowers sidhi son river vindhya tribal mp",
    footerContent: `
<h2>Flower Delivery in Sidhi — Son River Valley's Tribal Heritage on the Vindhya Plateau</h2>
<p>Sidhi, in the Vindhya plateau of eastern Madhya Pradesh on the Son River, is the headquarters of Sidhi district — a forested, hilly district in the Son-Narmada-Chambal tribal belt. The Son River (the largest right-bank tributary of the Ganges) flows through the district's northern edge, and the Bansagar Dam (completed 2006, shared by MP, UP, and Bihar) is in the adjacent Rewa district. Sidhi district has significant populations of Gond, Kol, and Baiga tribal communities in the Satpura-Vindhya hills. The district's Bandhavgarh National Park buffer zone is nearby, making it part of one of central India's most important wildlife corridors. The Sanjay Gandhi National Park (tiger reserve) is in the district.</p>
<p>RedHeart delivers flowers across Sidhi — Main Market, Rewa Road, Singrauli Road, Rampur Naikin, and Civil Lines area. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sidhi, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Rewa Road, Singrauli Road, Rampur Naikin, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Vindhya bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Sanjay Gandhi Tiger Reserve lodge stays near Sidhi?",
        answer: "Yes, the Sanjay-Dubri Tiger Reserve is in Sidhi district. Flower arrangements for eco-resort stays and safari anniversaries can be delivered in Sidhi."
      },
      {
        question: "Are flowers for Diwali available in Sidhi?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Sidhi for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Sidhi?",
        answer: "Yes, same-day delivery is available across Sidhi for orders placed before 3 PM."
      }
    ]
  },

  "rupnagar": {
    cityName: "Rupnagar",
    metaTitle: "Flower Delivery in Rupnagar (Ropar) | Punjab | RedHeart",
    metaDescription: "Order flowers in Rupnagar, Punjab. Same-day delivery near Anandpur Sahib & across Rupnagar. From ₹399.",
    h1: "Online Flower Delivery in Rupnagar",
    metaKeyword: "flower delivery rupnagar, online flowers rupnagar punjab, florist rupnagar ropar, flowers rupnagar anandpur sahib satluj",
    footerContent: `
<h2>Flower Delivery in Rupnagar (Ropar) — Anandpur Sahib's Gateway on the Sutlej Plains</h2>
<p>Rupnagar (Ropar), in northeastern Punjab where the Sutlej River emerges from the Shivalik Hills onto the plains, is the headquarters of Rupnagar district — a district with extraordinary historical depth. The Ropar (Rupnagar) excavation site is one of the most significant Harappan civilization sites discovered in India (1953), placing the city in a 4,500-year continuous settlement history. Anandpur Sahib — one of Sikhism's most sacred cities, where Guru Gobind Singh created the Khalsa Panth in 1699 — is in Rupnagar district. The Nangal Hydroelectric Project (on the Bhakra dam system) is in the district. The Shivalik Hills and the Ghaggar River system provide scenic and ecological value.</p>
<p>RedHeart delivers flowers across Rupnagar — Main Market, Anandpur Sahib Road, Morinda Road, Nangal area, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rupnagar, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Anandpur Sahib Road, Morinda Road, Nangal, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Hola Mohalla (Anandpur Sahib) available from Rupnagar?",
        answer: "Yes, Hola Mohalla at Anandpur Sahib is one of the biggest Sikh gatherings in Punjab. Marigold garlands for the festival are available from Rupnagar. Anandpur is about 35 km from Rupnagar town."
      },
      {
        question: "Can I get Baisakhi flowers in Rupnagar?",
        answer: "Yes, Baisakhi (Khalsa Panth founding anniversary) at Anandpur Sahib draws lakhs. Seasonal bouquets for the Rupnagar area are available."
      },
      {
        question: "Do you deliver flowers same day in Rupnagar?",
        answer: "Yes, same-day delivery is available across Rupnagar for orders placed before 3 PM."
      }
    ]
  },

  "nawanshahr": {
    cityName: "Nawanshahr",
    metaTitle: "Flower Delivery in Nawanshahr | SBS Nagar Punjab | RedHeart",
    metaDescription: "Order flowers in Nawanshahr (SBS Nagar), Punjab. Same-day delivery near Balachaur & across Nawanshahr. From ₹399.",
    h1: "Online Flower Delivery in Nawanshahr",
    metaKeyword: "flower delivery nawanshahr, online flowers nawanshahr punjab, florist nawanshahr, flowers nawanshahr sbs nagar shahid bhagat singh nagar doaba",
    footerContent: `
<h2>Flower Delivery in Nawanshahr — Doaba's Agricultural Sub-Mountain Town Named for Bhagat Singh</h2>
<p>Nawanshahr (officially Shahid Bhagat Singh Nagar), in the Doaba region of Punjab between the Sutlej and Beas rivers, was renamed in 2008 to honour Bhagat Singh — one of India's most iconic freedom fighters who was born in Khatkar Kalan village in this district. The Khatkar Kalan village (now a heritage site with Bhagat Singh's ancestral home and the Bhagat Singh Museum) draws thousands of visitors on Bhagat Singh's martyrdom anniversary (23 March). The Doaba region has Punjab's highest proportion of NRI families — the Nawanshahr area has extensive connections to the Punjabi diaspora in Canada, UK, and the US. The Shivalik Hills border the district's eastern edge.</p>
<p>RedHeart delivers flowers across Nawanshahr — Main Market, Balachaur Road, Hoshiarpur Road, Banga area, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawanshahr, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Balachaur Road, Hoshiarpur Road, Banga, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Bhagat Singh's martyrdom tribute available in Nawanshahr?",
        answer: "Yes, a respectful floral tribute for the Bhagat Singh memorial at Khatkar Kalan (about 25 km from Nawanshahr) is available for the March 23rd anniversary."
      },
      {
        question: "Can I get flowers for Baisakhi in Nawanshahr?",
        answer: "Yes, Baisakhi is a major festival in Nawanshahr's Punjabi community. Marigold garlands and seasonal bouquets are available."
      },
      {
        question: "Do you deliver flowers same day in Nawanshahr?",
        answer: "Yes, same-day delivery is available across Nawanshahr for orders placed before 3 PM."
      }
    ]
  },

  "fatehgarh-sahib": {
    cityName: "Fatehgarh Sahib",
    metaTitle: "Flower Delivery in Fatehgarh Sahib | Punjab | RedHeart",
    metaDescription: "Order flowers in Fatehgarh Sahib, Punjab. Same-day delivery near Sirhind & across Fatehgarh Sahib. From ₹399.",
    h1: "Online Flower Delivery in Fatehgarh Sahib",
    metaKeyword: "flower delivery fatehgarh sahib, online flowers fatehgarh sahib punjab, florist fatehgarh sahib, flowers fatehgarh sahib sirhind sahibzada",
    footerContent: `
<h2>Flower Delivery in Fatehgarh Sahib — Sacred Sirhind and the Shaheed-e-Aam of the Guru's Sons</h2>
<p>Fatehgarh Sahib, in central Punjab, is named after the Fateh Diwas (Victory Day) celebrated here — but the city's profound significance is as the place of martyrdom of the two youngest sons of Guru Gobind Singh, Sahibzada Zorawar Singh (age 9) and Sahibzada Fateh Singh (age 6), who were bricked alive in 1704 by the Mughal governor of Sirhind, Wazir Khan, for refusing to convert to Islam. The Gurudwara Fatehgarh Sahib and Jyoti Swaroop Gurudwara mark the martyrdom site. The annual Shaheedi Jor Mela (Martyrdom Fair in December) draws hundreds of thousands of Sikh pilgrims to Fatehgarh Sahib. Sirhind town itself has the magnificent Mughal-era Rauza Sharif tomb and Aam Khas Bagh garden.</p>
<p>RedHeart delivers flowers across Fatehgarh Sahib — Gurudwara area, Sirhind Road, Bassi Pathana, Amloh area, and Main Market. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehgarh Sahib, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gurudwara area, Sirhind Road, Bassi Pathana, Amloh, Main Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, roses, Gurudwara decoration flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Shaheedi Jor Mela available in Fatehgarh Sahib?",
        answer: "Yes, the Shaheedi Jor Mela (December martyrdom anniversary) draws huge numbers to Fatehgarh Sahib. Marigold garlands for the gurudwara are available during the festival."
      },
      {
        question: "Can I get Gurupurab flowers for Fatehgarh Sahib Gurudwara?",
        answer: "Yes, marigold garlands and floral decorations for the Gurudwara Fatehgarh Sahib's samagam and Gurupurab celebrations are available."
      },
      {
        question: "Do you deliver flowers same day in Fatehgarh Sahib?",
        answer: "Yes, same-day delivery is available across Fatehgarh Sahib for orders placed before 3 PM."
      }
    ]
  },

  "ariyalur": {
    cityName: "Ariyalur",
    metaTitle: "Flower Delivery in Ariyalur | Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Ariyalur, Tamil Nadu. Same-day delivery near Gangaikonda Cholapuram & across Ariyalur. From ₹399.",
    h1: "Online Flower Delivery in Ariyalur",
    metaKeyword: "flower delivery ariyalur, online flowers ariyalur tamil nadu, florist ariyalur, flowers ariyalur gangaikonda cholapuram chola",
    footerContent: `
<h2>Flower Delivery in Ariyalur — Near Gangaikonda Cholapuram, the Chola Empire's Second Capital</h2>
<p>Ariyalur, in central Tamil Nadu between Trichy and Chidambaram on the Cauvery delta edge, is the headquarters of Ariyalur district — a region in the heart of medieval Chola country. The most important heritage site accessible from Ariyalur is Gangaikonda Cholapuram — the capital city of Rajendra Chola I (son of Raja Raja Chola), who commemorated his conquest of the Ganges by bringing Ganga water to the temple tank, giving the city its name "the city that captured the Ganga." The Gangaikonda Cholapuram temple (11th century CE, slightly smaller but more ornate than Thanjavur's Big Temple) is a UNESCO World Heritage Site. The Ariyalur district also has significant cement manufacturing (the Deccan limestone extends here).</p>
<p>RedHeart delivers flowers across Ariyalur — Main Road, Trichy Road, Jayankondam area, Andimadam area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ariyalur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Trichy Road, Jayankondam, Andimadam, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Tamil Nadu bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for the Gangaikonda Cholapuram temple puja available from Ariyalur?",
        answer: "Yes, marigold garlands and Shiva puja flowers for the UNESCO Gangaikonda Cholapuram temple are available from Ariyalur. The heritage site is about 35 km from Ariyalur town."
      },
      {
        question: "Can I get jasmine for daily puja in Ariyalur?",
        answer: "Yes, fresh jasmine (malligai) for daily temple and home puja is widely available in Ariyalur throughout the year."
      },
      {
        question: "Do you deliver flowers same day in Ariyalur?",
        answer: "Yes, same-day delivery is available across Ariyalur for orders placed before 3 PM."
      }
    ]
  },

  "nagapattinam": {
    cityName: "Nagapattinam",
    metaTitle: "Flower Delivery in Nagapattinam | Cauvery Coast | RedHeart",
    metaDescription: "Order flowers in Nagapattinam, Tamil Nadu. Same-day delivery near Velankanni & across Nagapattinam. From ₹399.",
    h1: "Online Flower Delivery in Nagapattinam",
    metaKeyword: "flower delivery nagapattinam, online flowers nagapattinam tamil nadu, florist nagapattinam, flowers nagapattinam velankanni cauvery coast",
    footerContent: `
<h2>Flower Delivery in Nagapattinam — The Sacred Coast of Velankanni and the Cauvery Delta</h2>
<p>Nagapattinam, on the Bay of Bengal coast at the mouth of the Cauvery River delta in Tamil Nadu, is one of India's most historically significant port cities. The city was a major Chola naval hub, a Buddhist centre (the Nagapattinam bronze Buddha tradition produced some of Southeast Asia's finest Buddhist sculptures), a Portuguese colonial port, and then a British-Dutch trading post. Today Nagapattinam is most known for Velankanni — the "Lourdes of the East," where the Our Lady of Health (Arokia Matha) basilica draws millions of Catholic pilgrims annually. The 2004 Indian Ocean tsunami struck Nagapattinam devastatingly, and the memorial park on the coast commemorates the catastrophe.</p>
<p>RedHeart delivers flowers across Nagapattinam — Main Road, Velankanni Road, Karaikal Road, Sirkazhi area, and Station Road. We offer roses, marigolds, white lilies (for Arokia Matha chapel), and seasonal coastal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagapattinam, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Velankanni Road, Karaikal Road, Sirkazhi, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">White lilies, roses, jasmine, Velankanni chapel flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Velankanni Arokia Matha chapel available in Nagapattinam?",
        answer: "Yes, white lilies, roses, and floral arrangements for the Our Lady of Health Velankanni basilica are available from Nagapattinam. Velankanni is about 11 km from Nagapattinam."
      },
      {
        question: "Can I get flowers for Christmas in Nagapattinam?",
        answer: "Yes, Nagapattinam has a significant Catholic community. Christmas roses, poinsettias, and festive bouquets are available for the season."
      },
      {
        question: "Do you deliver flowers same day in Nagapattinam?",
        answer: "Yes, same-day delivery is available across Nagapattinam for orders placed before 3 PM."
      }
    ]
  },

  "ranipet": {
    cityName: "Ranipet",
    metaTitle: "Flower Delivery in Ranipet | Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Ranipet, Tamil Nadu. Same-day delivery near Arcot Fort & across Ranipet. From ₹399.",
    h1: "Online Flower Delivery in Ranipet",
    metaKeyword: "flower delivery ranipet, online flowers ranipet tamil nadu, florist ranipet, flowers ranipet arcot palar leather industrial",
    footerContent: `
<h2>Flower Delivery in Ranipet — The Leather City on the Palar River Between Arcot and Walajapet</h2>
<p>Ranipet, the headquarters of the newly created Ranipet district in Tamil Nadu (carved from Vellore district in 2019), is on the Palar River in the arc between Chennai and Vellore. The region is historically significant — the Nawabs of Arcot (the de facto rulers of the Carnatic under Mughal and later British suzerainty) had their capital at Arcot (Ranipet taluka). The Battle of Arcot (1751), where Robert Clive famously defeated the Nawab's forces, is a watershed in British India's rise. Today Ranipet-Walajapet is one of India's major leather processing clusters — the Palar valley's tanneries supply leather to global footwear and accessories brands. The SIPCOT industrial zone near Ranipet has attracted major manufacturing investment.</p>
<p>RedHeart delivers flowers across Ranipet — Main Market, Vellore Road, Arcot Road, Walajapet area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ranipet, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Vellore Road, Arcot Road, Walajapet, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Tamil Nadu bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Pongal available in Ranipet?",
        answer: "Yes, Pongal is the biggest festival in Ranipet's Tamil community. Marigold kolam flowers and seasonal bouquets for the harvest festival are available."
      },
      {
        question: "Can I get corporate gifting flowers for Ranipet's industrial companies?",
        answer: "Yes, corporate flower arrangements for offices in the SIPCOT industrial zone and leather industry companies in Ranipet are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Ranipet?",
        answer: "Yes, same-day delivery is available across Ranipet for orders placed before 3 PM."
      }
    ]
  },

  "tirupattur": {
    cityName: "Tirupattur",
    metaTitle: "Flower Delivery in Tirupattur | Tamil Nadu | RedHeart",
    metaDescription: "Order flowers in Tirupattur, Tamil Nadu. Same-day delivery near Yelagiri hills & across Tirupattur. From ₹399.",
    h1: "Online Flower Delivery in Tirupattur",
    metaKeyword: "flower delivery tirupattur, online flowers tirupattur tamil nadu, florist tirupattur, flowers tirupattur yelagiri hills vaniyambadi",
    footerContent: `
<h2>Flower Delivery in Tirupattur — Gateway to the Yelagiri Hills and Tamil Nadu's Leather Triangle</h2>
<p>Tirupattur, the headquarters of newly created Tirupattur district (2019, carved from Vellore) in northwestern Tamil Nadu, is a district straddling the border with Karnataka and Andhra Pradesh. The area is the gateway to the Yelagiri Hills — a gentle, less-commercialised hill station at 1,000+ metres in the Eastern Ghats that is popular with Chennai residents for its rose gardens, nature walks, and cooler climate. Vaniyambadi (in Tirupattur district) is a major centre of the leather tanning and footwear industry (part of the Vellore-Tirupattur-Ranipet leather cluster, which together form India's largest leather manufacturing zone). The district has a significant Muslim minority community, especially in Vaniyambadi.</p>
<p>RedHeart delivers flowers across Tirupattur — Main Road, Vaniyambadi area, Yelagiri Road, Ambur area, and Station Road. Our range includes roses, marigolds, jasmine, and seasonal Tamil Nadu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirupattur, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Vaniyambadi area, Yelagiri Road, Ambur, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal Tamil Nadu bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Yelagiri hill resort stay from Tirupattur?",
        answer: "Yes, Yelagiri Hills is about 20 km from Tirupattur town. Flower arrangements for anniversary or romantic hill resort stays can be coordinated from Tirupattur."
      },
      {
        question: "Are flowers for Eid available in Tirupattur?",
        answer: "Yes, Tirupattur-Vaniyambadi has a significant Muslim community. Rose bouquets and festive arrangements for Eid celebrations are available."
      },
      {
        question: "Do you deliver flowers same day in Tirupattur?",
        answer: "Yes, same-day delivery is available across Tirupattur for orders placed before 3 PM."
      }
    ]
  },

  "nadiad": {
    cityName: "Nadiad",
    metaTitle: "Flower Delivery in Nadiad | Kheda Gujarat | RedHeart",
    metaDescription: "Order flowers in Nadiad, Madhya Pradesh. Same-day delivery near Kheda & across Nadiad. From ₹399.",
    h1: "Online Flower Delivery in Nadiad",
    metaKeyword: "flower delivery nadiad, online flowers nadiad gujarat, florist nadiad, flowers nadiad kheda sardar patel birthplace charotar",
    footerContent: `
<h2>Flower Delivery in Nadiad — Sardar Patel's Homeland in the Heart of Gujarat's Charotar Region</h2>
<p>Nadiad, in the Kheda district of central Gujarat in the Charotar region (the fertile Mahi-Sabarmati inter-fluvial plain), is one of Gujarat's important secondary cities. Nadiad is closely associated with Sardar Vallabhbhai Patel — the "Iron Man of India" who unified India's 562 princely states after independence; his ancestral roots are in the Charotar region. The Charotar region is also where Anand (home to Amul dairy cooperative, India's most successful cooperative story) and Vallabh Vidyanagar (a planned educational township) are located. Nadiad's Swaminarayan temple and the Shamlaji temple are important Vaishnava pilgrimage points in the region. The city has significant pharmaceutical and chemical industries.</p>
<p>RedHeart delivers flowers across Nadiad — Main Market, Anand Road, Ahmedabad Road, Borsad area, and Station Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nadiad, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Anand Road, Ahmedabad Road, Borsad area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Navratri Garba available in Nadiad?",
        answer: "Yes, Navratri Garba is one of the biggest celebrations in Nadiad's Gujarat community. Marigold garlands and seasonal bouquets for the 9-night festival are available."
      },
      {
        question: "Can I get flowers for Janmashtami in Nadiad?",
        answer: "Yes, Janmashtami (the Vaishnavite community's most important festival in Charotar) is celebrated in Nadiad. Lotus, yellow marigolds, and Krishna puja flowers are available."
      },
      {
        question: "Do you deliver flowers same day in Nadiad?",
        answer: "Yes, same-day delivery is available across Nadiad for orders placed before 3 PM."
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
