// Batch 32 — 15 cities:
// J&K: Anantnag, Baramulla, Kathua, Udhampur
// HP: Kangra, Bilaspur (HP), Hamirpur (HP)
// Rajasthan: Sirohi, Banswara, Rajsamand, Baran, Pratapgarh (RJ), Dungarpur
// Gujarat: Dahod, Ankleshwar

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "anantnag": {
    cityName: "Anantnag",
    metaTitle: "Flower Delivery in Anantnag | Kashmir Valley | RedHeart",
    metaDescription: "Order flowers in Anantnag, J&K. Same-day delivery near Kokernag & across Anantnag town. Kashmir flowers from ₹399.",
    h1: "Online Flower Delivery in Anantnag",
    metaKeyword: "flower delivery anantnag, online flowers anantnag jk, florist anantnag, flowers anantnag kashmir martand sun temple",
    footerContent: `
<h2>Flower Delivery in Anantnag — Kashmir's Southern Valley Town by the Vitasta</h2>
<p>Anantnag (also called Islamabad locally), in the southern Kashmir Valley on the banks of the Jhelum (Vitasta) River, is the largest town in south Kashmir and the headquarters of Anantnag district. The town's name "Anantnag" (Sanskrit for "endless spring") refers to the numerous natural springs in the area — the Kokernag spring (a major tourist destination with medicinal properties) and the Achabal Gardens (a Mughal-era garden built by the Empress Nur Jahan) are beautiful landscapes. The Martand (Surya) Sun Temple — a 8th-century Karkota dynasty temple on a Karewa plateau above Anantnag — is one of Kashmir's most historically significant ruins. The Saffron fields of Pampore (near Anantnag) produce 90% of India's saffron.</p>
<p>RedHeart delivers flowers across Anantnag — Lal Chowk area, Achabal Road, Srinagar Road, and Kokernag Road. We offer roses, tulips (spring), marigolds, and seasonal Kashmir bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anantnag, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lal Chowk area, Achabal Road, Srinagar Road, Kokernag Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tulips (spring), Kashmir lilies, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are tulips available in Anantnag in spring?",
        answer: "Yes, Kashmir's famous tulip season (late March to April) is one of India's most spectacular floral events. Tulips are available in Anantnag during the spring season alongside roses and local wildflowers."
      },
      {
        question: "Can I send flowers for Eid in Anantnag?",
        answer: "Yes, Eid celebrations in Anantnag are joyful occasions. Rose bouquets and seasonal Kashmir flowers for Eid gifting are available."
      },
      {
        question: "Are saffron flowers available in Anantnag?",
        answer: "Saffron (zafran) flowers from the nearby Pampore saffron fields bloom in October-November. During this season we can arrange saffron flower bouquets as a unique Kashmir gift."
      }
    ]
  },

  "baramulla": {
    cityName: "Baramulla",
    metaTitle: "Flower Delivery in Baramulla | Kashmir Entrance | RedHeart",
    metaDescription: "Order flowers in Baramulla, J&K. Same-day delivery near Uri & across Baramulla town. Kashmir flowers from ₹399.",
    h1: "Online Flower Delivery in Baramulla",
    metaKeyword: "flower delivery baramulla, online flowers baramulla jk, florist baramulla, flowers baramulla kashmir jhelum border",
    footerContent: `
<h2>Flower Delivery in Baramulla — Kashmir's Northwestern Gateway on the Jhelum</h2>
<p>Baramulla, at the northwestern exit of the Kashmir Valley where the Jhelum River leaves the valley through the Pir Panjal range toward Pakistan-administered Kashmir, has been historically the most strategic gateway to the valley. The town is just 55 km from the Line of Control and was one of the first places that Pakistani tribal raiders and Pakistani army reached in October 1947 before being repelled by the Indian Army. Baramulla district encompasses the scenic Gulmarg hill station (at 2652 metres, with one of the world's highest golf courses and India's premier ski resort), the Wular Lake (Asia's largest freshwater lake), and the Lolab Valley — all within 30–50 km. The Baramulla-Srinagar railway (India's most engineering-complex rail project) passes through here.</p>
<p>RedHeart delivers flowers across Baramulla — Main Chowk area, Sopore Road, Gulmarg Road, and Uri Road. We offer roses, tulips (spring), Kashmir wildflowers, and seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baramulla, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Chowk, Sopore Road, Gulmarg Road, Uri Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tulips (spring), Kashmir lilies, seasonal wildflowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered to a Gulmarg ski resort near Baramulla?",
        answer: "Yes, Gulmarg (about 50 km from Baramulla) is in our extended zone. Romantic ski resort flower arrangements are popular — please order before 12 PM and confirm Gulmarg delivery."
      },
      {
        question: "Are tulips available in Baramulla in spring?",
        answer: "Yes, Kashmir's spring tulip season (March-April) is magical in the Baramulla region. Tulips alongside wildflowers are available during the short but spectacular spring season."
      },
      {
        question: "Are flowers for Eid available in Baramulla?",
        answer: "Yes, Eid is celebrated with great joy in Baramulla. Rose bouquets and seasonal Kashmiri flowers for Eid gifting are available for same-day delivery."
      }
    ]
  },

  "kathua": {
    cityName: "Kathua",
    metaTitle: "Flower Delivery in Kathua | J&K Border | RedHeart",
    metaDescription: "Order flowers in Kathua, Jammu & Kashmir. Same-day delivery near Punjab border & across Kathua town. From ₹399.",
    h1: "Online Flower Delivery in Kathua",
    metaKeyword: "flower delivery kathua, online flowers kathua jk, florist kathua, flowers kathua jammu punjab border ravi river",
    footerContent: `
<h2>Flower Delivery in Kathua — Gateway to J&K on the Ravi River</h2>
<p>Kathua, in the Jammu division of J&K at the border with Punjab and Himachal Pradesh, is the first major town encountered when entering J&K from the Punjab plains. The Ravi River flows along the district's southern boundary (coinciding roughly with the India-Pakistan international border at this point), and the flat agricultural lands of Kathua district produce wheat, maize, and sugarcane. The town has significant strategic importance as the staging area for the Jammu-Srinagar National Highway. The Jasrotia Devi temple and the Siar Khad gorge are local attractions. Kathua is part of Jammu's cultural sphere — predominantly Dogra Hindu in culture with significant Muslim and Sikh communities.</p>
<p>RedHeart delivers flowers across Kathua — Main Market, Hiranagar Road, Samba Road, and Pathankot Road. We offer roses, marigolds, seasonal J&K bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kathua, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hiranagar Road, Samba Road, Pathankot Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Dogra-region bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Navratri and Baisakhi available in Kathua?",
        answer: "Yes, Navratri and Baisakhi are major festivals in Kathua's Dogra-Punjabi cultural zone. Marigold garlands and seasonal festival flowers are available."
      },
      {
        question: "Can I send flowers for a birthday in Kathua same day?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kathua for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers to Hiranagar area near Kathua?",
        answer: "Hiranagar (about 20 km from Kathua) is in our extended zone. Please order before 12 PM for same-day delivery to Hiranagar."
      }
    ]
  },

  "udhampur": {
    cityName: "Udhampur",
    metaTitle: "Flower Delivery in Udhampur | Same Day | RedHeart",
    metaDescription: "Order flowers in Udhampur, J&K. Same-day delivery near Patnitop & across Udhampur town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Udhampur",
    metaKeyword: "flower delivery udhampur, online flowers udhampur jk, florist udhampur, flowers udhampur patnitop dogra jammu",
    footerContent: `
<h2>Flower Delivery in Udhampur — Jammu Division's Midpoint Mountain Town</h2>
<p>Udhampur, in the Jammu division of J&K on the Jammu-Srinagar National Highway, is a district headquarters and a railway terminus (the Udhampur Railway Station was the northern end of the Udhampur-Srinagar-Baramulla Rail Link until the extension was completed). Udhampur is the headquarters of the Indian Army's Northern Command — the strategically most important military zone in India. The town is set amid beautiful forested ridges at 760 metres altitude, with the Patnitop hill station (2024 metres, popular for winter skiing and summer retreats) just 55 km away. The Shiv Khori cave temple and the Sudh Mahadev temple with its ancient trident are important pilgrimage sites in the surrounding hills.</p>
<p>RedHeart delivers flowers across Udhampur — Main Market, Army area, Ramnagar Road, and Srinagar Highway area. Our range includes roses, marigolds, seasonal bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udhampur, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Army area, Ramnagar Road, Srinagar Highway</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Dogra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to Army Northern Command areas in Udhampur?",
        answer: "Yes, flowers for army cantonment residential areas in Udhampur are available. Personal and celebration deliveries to the Army Northern Command housing colony area are possible."
      },
      {
        question: "Are flowers for Shiv Khori temple puja available near Udhampur?",
        answer: "Yes, Shiv Khori cave temple (about 100 km from Udhampur) is a major Shiva pilgrimage site. Bilva, marigold, and Shiva puja flowers are available for pilgrims departing from Udhampur."
      },
      {
        question: "Do you deliver flowers same day in Udhampur?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Udhampur for orders placed before 3 PM."
      }
    ]
  },

  "kangra": {
    cityName: "Kangra",
    metaTitle: "Flower Delivery in Kangra | Dharamshala Country | RedHeart",
    metaDescription: "Order flowers in Kangra, Himachal Pradesh. Same-day delivery near Dharamshala & across Kangra valley. From ₹399.",
    h1: "Online Flower Delivery in Kangra",
    metaKeyword: "flower delivery kangra, online flowers kangra himachal, florist kangra, flowers kangra valley dharamshala tea",
    footerContent: `
<h2>Flower Delivery in Kangra — Valley of Tea, Miniature Paintings, and the Dalai Lama's Residence</h2>
<p>Kangra district, in the Beas River valley at the foot of the Dhauladhar range in Himachal Pradesh, is one of the most breathtakingly beautiful districts in India. Dharamshala (which hosts the Dalai Lama's residence and the Tibetan government-in-exile) and McLeod Ganj are within the district, as is the Kangra Valley tea estate belt (India's second most important tea-growing region, producing a light, fragrant Himalayan tea). The Kangra miniature painting tradition is one of India's finest — a style that flourished in the 18th-century courts of the Katoch rulers (the world's oldest continuously ruling dynasty). The Brajeshwari Devi temple (a shakti peetha) in Kangra town and the Masrur Rock Temples (8th-century carved temples) are remarkable heritage sites.</p>
<p>RedHeart delivers flowers across Kangra — Main Bazaar, Dharamshala Road, Palampur Road, and Pathankot Road. Our range includes roses, Himalayan seasonal bouquets, marigolds, and rhododendrons (spring). Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kangra, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Bazaar, Dharamshala Road, Palampur Road, Pathankot Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, rhododendrons (spring), Himalayan seasonal flowers, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers delivered to McLeod Ganj or Dharamshala from Kangra?",
        answer: "Yes, Dharamshala and McLeod Ganj are about 20 km from Kangra town. Extended delivery to Tibetan colony areas, monastery hotels, and Dharamshala town is available — please order before 12 PM."
      },
      {
        question: "Are flowers for the Brajeshwari Devi temple in Kangra available?",
        answer: "Yes, the Brajeshwari Devi shakti peetha is very important in this region. Marigold garlands and red flowers for the Devi puja are available, especially during Navratri."
      },
      {
        question: "Are Himalayan wildflowers or rhododendrons available in Kangra?",
        answer: "Yes, during spring (March-April), rhododendrons and other Himalayan wildflowers are available in Kangra. Seasonal availability varies — call ahead to confirm spring bloom availability."
      }
    ]
  },

  "bilaspur-hp": {
    cityName: "Bilaspur",
    metaTitle: "Flower Delivery in Bilaspur HP | Same Day | RedHeart",
    metaDescription: "Order flowers in Bilaspur, Himachal Pradesh. Same-day delivery near Gobind Sagar & across Bilaspur town. From ₹399.",
    h1: "Online Flower Delivery in Bilaspur HP",
    metaKeyword: "flower delivery bilaspur hp, online flowers bilaspur himachal, florist bilaspur hp, flowers bilaspur gobind sagar bhakra dam",
    footerContent: `
<h2>Flower Delivery in Bilaspur HP — The Town That Rose from Gobind Sagar's Depths</h2>
<p>Bilaspur, in the Sutlej River valley in Himachal Pradesh, has a unique history: the original old town of Bilaspur (historic capital of the Kahlur princely state, established 697 CE) was submerged in the Gobind Sagar reservoir created by the Bhakra Dam in the 1950s — one of India's largest hydroelectric projects. The new town of Bilaspur was rebuilt on higher ground, and the Gobind Sagar lake is now a popular boating and water sports destination. The Bhakra Dam (226 metres high) and the Nangal Dam nearby are among India's engineering marvels. The Naina Devi temple (one of 51 shakti peethas) on a hilltop overlooking the lake draws millions of pilgrims annually, especially during Navratri.</p>
<p>RedHeart delivers flowers across Bilaspur HP — New Town Bazar, Bilaspur Road, Naina Devi Road, and Luhnu area. Our range includes roses, marigolds, seasonal HP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilaspur, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">New Town Bazar, Bilaspur Road, Naina Devi Road, Luhnu area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Devi puja flowers, seasonal HP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Naina Devi temple pilgrimage available in Bilaspur HP?",
        answer: "Yes, marigold garlands and Devi puja flowers for the Naina Devi shakti peetha (accessible from Bilaspur) are available. Delivered to your Bilaspur stay before the pilgrimage."
      },
      {
        question: "Can I get flowers for Navratri in Bilaspur HP?",
        answer: "Yes, Navratri is one of the grandest festivals in Bilaspur given its proximity to Naina Devi. Marigold garlands and Shakti puja flower sets are available during the nine-night festival."
      },
      {
        question: "Do you deliver same day in Bilaspur HP?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Bilaspur HP for orders placed before 3 PM."
      }
    ]
  },

  "hamirpur-hp": {
    cityName: "Hamirpur",
    metaTitle: "Flower Delivery in Hamirpur HP | Same Day | RedHeart",
    metaDescription: "Order flowers in Hamirpur, Himachal Pradesh. Same-day delivery across Hamirpur HP town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Hamirpur HP",
    metaKeyword: "flower delivery hamirpur hp, online flowers hamirpur himachal, florist hamirpur hp, flowers hamirpur himachal education city",
    footerContent: `
<h2>Flower Delivery in Hamirpur HP — Himachal's Education Hub in the Beas-Baner Hills</h2>
<p>Hamirpur, the district headquarters of Hamirpur in central Himachal Pradesh, is known as an "education city" — the district has consistently had one of the highest literacy rates in India and has produced a disproportionate number of military officers, IAS officials, and professionals. The NIT Hamirpur (National Institute of Technology) is one of India's premier technical institutions. The town sits on the Baner River at a confluence of ridges between the Beas valley and the Kangra-Mandi district boundaries. The Deotsidh temple (Hamirpur's most important Shakti shrine) and the Sujanpur Tira fort (a beautiful 18th-century hillside fort of the Katoch kings) are notable heritage sites.</p>
<p>RedHeart delivers flowers across Hamirpur HP — Bus Stand area, NIT Road, Nadaun Road, and Sujanpur Road. Our range includes roses, marigolds, seasonal HP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bus Stand area, NIT Road, Nadaun Road, Sujanpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal HP bouquets, indoor plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order convocation or graduation flowers for NIT Hamirpur?",
        answer: "Yes, the NIT Hamirpur campus is within our delivery zone. Convocation bouquets, farewell flowers, and celebration arrangements for NIT graduates are available."
      },
      {
        question: "Are flowers for Navratri available in Hamirpur HP?",
        answer: "Yes, Navratri is celebrated with great devotion in Hamirpur HP. Marigold garlands and Devi puja flower sets are available during the nine-day festival."
      },
      {
        question: "Do you deliver flowers same day in Hamirpur HP?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Hamirpur HP for orders placed before 3 PM."
      }
    ]
  },

  "sirohi": {
    cityName: "Sirohi",
    metaTitle: "Flower Delivery in Sirohi | Mount Abu Country | RedHeart",
    metaDescription: "Order flowers in Sirohi, Rajasthan. Same-day delivery near Mount Abu & across Sirohi town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Sirohi",
    metaKeyword: "flower delivery sirohi, online flowers sirohi rajasthan, florist sirohi, flowers sirohi mount abu aravalli dilwara",
    footerContent: `
<h2>Flower Delivery in Sirohi — Gateway to Rajasthan's Only Hill Station</h2>
<p>Sirohi, in southern Rajasthan at the foot of the Aravalli ranges near Gujarat and Maharashtra borders, is the district headquarters adjacent to Mount Abu — Rajasthan's only hill station and one of the most important Jain pilgrimage sites in India. The Dilwara Temples on Mount Abu (11th-15th century) are considered the finest examples of Jain temple architecture in the world, with ceilings and pillars of such intricate white marble carving that they have been compared to lace. The Abu Road railway junction below Mount Abu and the Sirohi town itself are the access points for visitors to this sacred Jain site. The Kankeshwar temple and the Tod Sagar lake in Sirohi are local landmarks.</p>
<p>RedHeart delivers flowers across Sirohi — Main Market, Abu Road direction, Pindwara Road, and Reodar Road. We offer roses, white flowers (for Jain worship), marigolds, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirohi, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Abu Road direction, Pindwara Road, Reodar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">White roses, mogra, marigolds, Jain festival flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Jain Paryushan flowers available in Sirohi near the Dilwara temples?",
        answer: "Yes, white roses, mogra (jasmine), and light-coloured flowers appropriate for Jain worship at the Dilwara temples on Mount Abu are available in Sirohi."
      },
      {
        question: "Can I get flowers delivered to a Mount Abu resort from Sirohi?",
        answer: "Mount Abu is about 30 km from Sirohi via Abu Road. Extended delivery to Mount Abu hill station resorts can be arranged — please order before 12 PM."
      },
      {
        question: "Do you deliver flowers same day in Sirohi?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Sirohi for orders placed before 3 PM."
      }
    ]
  },

  "banswara": {
    cityName: "Banswara",
    metaTitle: "Flower Delivery in Banswara | City of 100 Islands | RedHeart",
    metaDescription: "Order flowers in Banswara, Rajasthan. Same-day delivery near Mahi Bajaj Sagar & across Banswara. From ₹399.",
    h1: "Online Flower Delivery in Banswara",
    metaKeyword: "flower delivery banswara, online flowers banswara rajasthan, florist banswara, flowers banswara mahi river tribal hundred islands",
    footerContent: `
<h2>Flower Delivery in Banswara — City of a Hundred Islands in the Tribal South</h2>
<p>Banswara, in the extreme southeastern corner of Rajasthan bordering Gujarat and Madhya Pradesh, is nicknamed the "City of a Hundred Islands" — the Mahi Bajaj Sagar reservoir (one of Rajasthan's largest dams) submerged many hillocks, creating an archipelago of small islands in the lakebed around the town. The Banswara district is part of the Vagad region and has one of Rajasthan's largest tribal populations — predominantly Bhil, whose distinctive floral and geometric tattooing, Ghoomar dance, and Govinda (Holi) traditions are among the most vibrant in tribal India. The Mangarh Dham hill (where over 1500 Bhil freedom fighters were massacred by the British in 1913) is a memorial site of deep importance to the tribal community.</p>
<p>RedHeart delivers flowers across Banswara — Main Market, Dungarpur Road, Udaipur Road, and Mahi Dam area. We offer roses, marigolds, seasonal Rajasthan bouquets, and tribal festival flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Banswara, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Dungarpur Road, Udaipur Road, Mahi Dam area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tribal festival seasonal flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Bhil Govinda (Holi) festivals available in Banswara?",
        answer: "Yes, the tribal Holi (Govinda) festival in the Vagad-Banswara belt involves colourful flower traditions. Seasonal and marigold arrangements for the tribal Holi festival are available."
      },
      {
        question: "Can I send a birthday bouquet in Banswara same day?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Banswara for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers to Dungarpur area near Banswara?",
        answer: "Dungarpur (about 35 km from Banswara) is in our extended zone. Please order before 12 PM for same-day delivery to Dungarpur."
      }
    ]
  },

  "rajsamand": {
    cityName: "Rajsamand",
    metaTitle: "Flower Delivery in Rajsamand | Same Day | RedHeart",
    metaDescription: "Order flowers in Rajsamand, Rajasthan. Same-day delivery near Nathdwara & across Rajsamand town. Roses from ₹399.",
    h1: "Online Flower Delivery in Rajsamand",
    metaKeyword: "flower delivery rajsamand, online flowers rajsamand rajasthan, florist rajsamand, flowers rajsamand nathdwara srinathji marble",
    footerContent: `
<h2>Flower Delivery in Rajsamand — Marble Country and Srinathji's Sacred Region</h2>
<p>Rajsamand, in central Rajasthan between Udaipur and Ajmer, is a district defined by two remarkable things: the marble mining industry and the Nathdwara temple. The Rajsamand Lake (one of the largest artificial freshwater lakes in Asia, built in 1660 by Maharana Raj Singh I) has a beautiful marble dam embankment with exquisitely carved nauchowkis (inscribed slabs with heroic poetry). The Nathdwara town in Rajsamand district houses the Srinathji (Vallabh Sampradaya's form of Krishna) temple — one of the wealthiest and most visited Vaishnava temples in India, where the deity's silver throne is decorated with fresh flowers worth lakhs daily. The Rajsamand district's marble belt supplies the Makrana marble used in the Taj Mahal and other great monuments.</p>
<p>RedHeart delivers flowers across Rajsamand — Main Market, Nathdwara Road, Kankroli area, and Udaipur Road. We offer roses, marigolds, yellow flowers (beloved of Srinathji), and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajsamand, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Nathdwara Road, Kankroli area, Udaipur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, yellow flowers, roses, Srinathji puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Srinathji temple at Nathdwara available from Rajsamand?",
        answer: "Yes, the Srinathji temple in Nathdwara (20 km from Rajsamand town) is famous for its elaborate flower offerings. Marigolds, yellow flowers (the deity's favourite), and tuberose strings are available for the temple."
      },
      {
        question: "Can I get flowers for Janmashtami in Rajsamand area?",
        answer: "Yes, Janmashtami is one of the grandest festivals in the Nathdwara-Rajsamand belt given the Srinathji Krishna temple. Yellow and seasonal Krishna puja flowers are available."
      },
      {
        question: "Do you deliver same day in Rajsamand?",
        answer: "Yes, same-day delivery is available across Rajsamand for orders placed before 3 PM."
      }
    ]
  },

  "baran": {
    cityName: "Baran",
    metaTitle: "Flower Delivery in Baran | Hadoti Region | RedHeart",
    metaDescription: "Order flowers in Baran, Rajasthan. Same-day delivery near Ramgarh Sanctuary & across Baran town. From ₹399.",
    h1: "Online Flower Delivery in Baran",
    metaKeyword: "flower delivery baran, online flowers baran rajasthan, florist baran, flowers baran hadoti parvan river tribal",
    footerContent: `
<h2>Flower Delivery in Baran — Hadoti's Tribal Heartland on the Parvan River</h2>
<p>Baran, in the Hadoti region of southeastern Rajasthan bordering Madhya Pradesh, is the headquarters of Baran district — a district with significant Saharia tribal presence (the Saharias of Shahabad and Kishanganj in Baran are one of India's five most vulnerable tribal groups), dense forest cover in the eastern hills, and the Ramgarh Crater (a 3-km diameter meteor impact crater, one of only a few in India). The Parvan River and Baran's agricultural landscape of mustard, soybean, and wheat fields surround the town. The Brahmani Mata temple and the ancient temples at Bhangarh (Baran district, not to be confused with the Alwar Bhangarh) are historical sites. Baran's connection to the Chambal ravines in the northeast adds a distinctive geography.</p>
<p>RedHeart delivers flowers across Baran — Main Market, Kota Road, Shahabad Road, and Kelwara Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baran, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kota Road, Shahabad Road, Kelwara Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for tribal festival celebrations available in Baran?",
        answer: "Yes, Baran's Saharia tribal community celebrates Holi and harvest festivals with flowers. Marigold and seasonal wildflower arrangements for tribal community celebrations are available."
      },
      {
        question: "Can I order a birthday bouquet in Baran same day?",
        answer: "Yes, birthday and anniversary roses are available for same-day delivery in Baran for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers to Shahabad area near Baran?",
        answer: "Shahabad (about 35 km from Baran) is in our extended zone. Please order before 12 PM for same-day Shahabad delivery."
      }
    ]
  },

  "pratapgarh-rj": {
    cityName: "Pratapgarh",
    metaTitle: "Flower Delivery in Pratapgarh Rajasthan | RedHeart",
    metaDescription: "Order flowers in Pratapgarh, Rajasthan. Same-day delivery across Pratapgarh town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Pratapgarh Rajasthan",
    metaKeyword: "flower delivery pratapgarh rajasthan, online flowers pratapgarh rj, florist pratapgarh rajasthan, flowers pratapgarh thewa art tribal",
    footerContent: `
<h2>Flower Delivery in Pratapgarh — Rajasthan's Tribal South and Thewa Art Heritage</h2>
<p>Pratapgarh, the newest district in Rajasthan (carved out in 2008), lies in the southernmost part of Rajasthan bordering Madhya Pradesh and Gujarat in the Wagad region. The district has a predominantly tribal Bhil and Garasia population and is culturally part of the Vagad-Dungarpur landscape. Pratapgarh is famous for Thewa art — a unique decorative craft that involves fusing exquisitely detailed gold sheets onto glass to create jewellery items depicting Mughal and Rajput court scenes; this GI-tagged craft is unique to the Soni artisan community of Pratapgarh. The Garib Nawaz Dargah and the Sitamata Wildlife Sanctuary (which has the world's only population of flying squirrels mixed with four-horned antelopes) are notable local landmarks.</p>
<p>RedHeart delivers flowers across Pratapgarh (RJ) — Main Market, Banswara Road, Mandsaur Road, and Chittorgarh Road. We offer roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pratapgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Banswara Road, Mandsaur Road, Chittorgarh Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tribal festival flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Bhil tribal festivals available in Pratapgarh Rajasthan?",
        answer: "Yes, Holi, Gavar, and harvest festivals of the Bhil tribal community in Pratapgarh involve floral decorations. Seasonal flowers and marigold arrangements are available."
      },
      {
        question: "Can I send a birthday bouquet in Pratapgarh RJ same day?",
        answer: "Yes, birthday and anniversary roses are available for same-day delivery in Pratapgarh Rajasthan for orders placed before 3 PM."
      },
      {
        question: "Do you deliver to Chhoti Sadri area near Pratapgarh RJ?",
        answer: "Chhoti Sadri (about 25 km from Pratapgarh) is in our extended zone. Please order before 12 PM for same-day delivery."
      }
    ]
  },

  "dahod": {
    cityName: "Dahod",
    metaTitle: "Flower Delivery in Dahod | Same Day | RedHeart",
    metaDescription: "Order flowers in Dahod, Gujarat. Same-day delivery near tribal belt & across Dahod town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Dahod",
    metaKeyword: "flower delivery dahod, online flowers dahod gujarat, florist dahod, flowers dahod panchmahal tribal gujarat mp border",
    footerContent: `
<h2>Flower Delivery in Dahod — Gujarat's Tribal Heartland at the MP Border</h2>
<p>Dahod, in eastern Gujarat at the border with Madhya Pradesh and Rajasthan, is the headquarters of Dahod district — one of India's most densely tribal districts, with the Bhil, Bhilala, and Nayaka communities forming the majority. The district sits in the upper Mahi River valley, where the river descends from the Vindya-Satpura range into the Gujarat plains. Dahod is known as the birthplace of Mughal Emperor Aurangzeb (born 1618 in Dahod, then called Daud Khan fort), a historical footnote that adds to the town's Mughal heritage. The Limdi step-well and the Garbada area's cave shrines are local heritage sites. The tribal community's haat (weekly market) culture and the Dang festival of the Bhil people are distinctive cultural traditions of the region.</p>
<p>RedHeart delivers flowers across Dahod — Station Road, Godhra Road, Limkheda Road, and Main Bazar area. Our range includes roses, marigolds, seasonal Gujarati bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dahod, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Godhra Road, Limkheda Road, Main Bazar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarati bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for tribal Holi or Dang festival available in Dahod?",
        answer: "Yes, the Bhil community's Dang festival and tribal Holi involve colourful flower traditions. Seasonal and marigold arrangements for Dahod's tribal festival occasions are available."
      },
      {
        question: "Can I order flowers for Navratri in Dahod?",
        answer: "Yes, Navratri is widely celebrated in Dahod. Marigold strings and festive bouquets for Navratri Garba evenings are available."
      },
      {
        question: "Do you deliver same day in Dahod?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Dahod for orders placed before 3 PM."
      }
    ]
  },

  "ankleshwar": {
    cityName: "Ankleshwar",
    metaTitle: "Flower Delivery in Ankleshwar | Industrial Gujarat | RedHeart",
    metaDescription: "Order flowers in Ankleshwar, Gujarat. Same-day delivery near GIDC chemical corridor & across Ankleshwar town. From ₹399.",
    h1: "Online Flower Delivery in Ankleshwar",
    metaKeyword: "flower delivery ankleshwar, online flowers ankleshwar gujarat, florist ankleshwar, flowers ankleshwar chemical gidc bharuch",
    footerContent: `
<h2>Flower Delivery in Ankleshwar — Gujarat's Chemical Valley Capital</h2>
<p>Ankleshwar, in Bharuch district on the Narmada River's south bank in Gujarat, is the headquarters of one of Asia's largest chemical manufacturing clusters — the Ankleshwar GIDC (Gujarat Industrial Development Corporation) hosts over 1,500 chemical, pharmaceutical, and dye manufacturing units that together produce a significant share of India's fine chemicals and APIs (Active Pharmaceutical Ingredients). The town's industrial economy is dominated by this chemical cluster, and tens of thousands of workers and engineers live in the Ankleshwar-Bharuch corridor. The nearby Narmada River provides both industrial water and a sacred bathing site — Bharuch's Narmada ghats are spiritually important and the Narmada Jayanti festival is celebrated with special reverence.</p>
<p>RedHeart delivers flowers across Ankleshwar — GIDC area, Bharuch Road, Station Road, and Zadeshwar Road. Our range includes roses, marigolds, seasonal Gujarat bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ankleshwar, Bharuch, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">GIDC area, Bharuch Road, Station Road, Zadeshwar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, indoor plants, seasonal Gujarat bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to GIDC company offices in Ankleshwar?",
        answer: "Yes, corporate flower deliveries to GIDC chemical and pharmaceutical company offices, conference rooms, and reception areas in Ankleshwar are available."
      },
      {
        question: "Are flowers for Navratri available in Ankleshwar?",
        answer: "Yes, Navratri Garba is celebrated in Ankleshwar with the same enthusiasm as across Gujarat. Marigold decorations and festive bouquets are available during the nine nights."
      },
      {
        question: "Do you deliver flowers same day in Ankleshwar?",
        answer: "Yes, birthday and celebration bouquets are available for same-day delivery in Ankleshwar for orders placed before 3 PM."
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
