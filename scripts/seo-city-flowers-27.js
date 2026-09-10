// Batch 27 — 15 cities:
// Telangana: Khammam, Mahbubnagar, Suryapet, Miryalaguda
// AP: Machilipatnam, Proddatur, Nandyal, Tadepalligudem
// Gujarat: Mehsana, Patan, Palanpur, Porbandar, Godhra, Amreli, Dahod

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "khammam": {
    cityName: "Khammam",
    metaTitle: "Flower Delivery in Khammam | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Khammam, Telangana. Same-day delivery of roses, bouquets & seasonal flowers across Khammam. From ₹399.",
    h1: "Online Flower Delivery in Khammam",
    metaKeyword: "flower delivery khammam, online flowers khammam telangana, florist khammam, flowers khammam coal city",
    footerContent: `
<h2>Flower Delivery in Khammam — Coal Country with a Cultural Heartbeat</h2>
<p>Khammam, in southern Telangana near the Chhattisgarh border, is the headquarters of Khammam district — a region that sits at the confluence of coal and culture. The Singareni Collieries, one of India's largest coal mining operations, draws its major mines from Khammam district's Godavari Valley coalfields. Yet Khammam is also a city of deep Telugu cultural identity — the Khammam Fort (a hilltop fort dating to the 11th-century Kakatiya kingdom), the Srikrishna Devaraya temple, and the Narasimha Swamy temple are important local landmarks. The city's position near the Munneru River and close to the Bhadrachalam forested hills (famous for the Ramapadasathe Ram temple) gives it a significant pilgrimage catchment area.</p>
<p>RedHeart delivers flowers across Khammam — Wyra Road, Hanumakonda Road, Yellandu Road, and Ashok Nagar area. We offer roses, marigolds, jasmine, and seasonal Telangana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Khammam, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wyra Road, Hanumakonda Road, Yellandu Road, Ashok Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Telangana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers in Khammam for Bathukamma festival?",
        answer: "Yes, Bathukamma is Telangana's most distinctive floral festival and Khammam celebrates it vibrantly. We offer Tangedu, gomphrena, and other Bathukamma flowers stacked in the traditional pyramid during the Bathukamma season."
      },
      {
        question: "Are flowers available for Bhadrachalam Ram temple offerings near Khammam?",
        answer: "Bhadrachalam is about 100 km from Khammam. For devotional flowers for the famous Ram temple, we deliver to Khammam town. Call for extended Bhadrachalam delivery arrangements."
      },
      {
        question: "Do you deliver flowers same day in Khammam town?",
        answer: "Yes, same-day delivery is available across Khammam for orders placed before 3 PM. We cover Wyra Road, Hanumakonda Road, and all central Khammam areas."
      }
    ]
  },

  "mahbubnagar": {
    cityName: "Mahbubnagar",
    metaTitle: "Flower Delivery in Mahbubnagar | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Mahbubnagar (Nagarkurnool), Telangana. Same-day delivery of roses & bouquets across Mahbubnagar. From ₹399.",
    h1: "Online Flower Delivery in Mahbubnagar",
    metaKeyword: "flower delivery mahbubnagar, online flowers mahbubnagar telangana, florist mahbubnagar nagarkurnool, flowers mahbubnagar",
    footerContent: `
<h2>Flower Delivery in Mahbubnagar — Gateway to Srisailam and the Telangana Highlands</h2>
<p>Mahbubnagar, in southern Telangana near the Karnataka border, is the headquarters of Wanaparthy district (the region was historically known as Mahbubnagar district before the 2016 reorganisation). The district sits at the edge of the Deccan Plateau's southern rim, and its landscape is characterized by rocky hills, the Krishna River gorge, and the Nallamala forest range. The Srisailam Dam — one of India's largest hydroelectric projects and the site of the ancient Mallikarjuna Jyotirlinga temple (one of the 12 Jyotirlingas) — lies within Mahbubnagar's cultural catchment. The city is predominantly Telugu-Urdu bilingual and has a strong agricultural economy based on cotton and sorghum (jowar).</p>
<p>RedHeart delivers flowers across Mahbubnagar — Hyderabad Road, Jadcherla Road, Court Area, and Kothapally Road. We offer roses, marigolds, jasmine, and seasonal Telangana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahbubnagar, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hyderabad Road, Jadcherla Road, Court Area, Kothapally Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Bathukamma flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to Srisailam area from Mahbubnagar?",
        answer: "Srisailam is about 100 km from Mahbubnagar. We deliver to Mahbubnagar town, and for Srisailam temple area deliveries please contact our support for an extended zone arrangement."
      },
      {
        question: "Are Bathukamma flowers available in Mahbubnagar?",
        answer: "Yes, Mahbubnagar celebrates Bathukamma with the same vibrancy as all of Telangana. Tangedu, marigold, and Bathukamma flower stacks are available during the festival season."
      },
      {
        question: "Do you deliver flowers in Jadcherla area near Mahbubnagar?",
        answer: "Jadcherla (about 30 km from Mahbubnagar) is in our extended zone. Please order before 12 PM for same-day Jadcherla delivery."
      }
    ]
  },

  "suryapet": {
    cityName: "Suryapet",
    metaTitle: "Flower Delivery in Suryapet | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Suryapet, Telangana. Same-day delivery of roses, bouquets & seasonal flowers across Suryapet. From ₹399.",
    h1: "Online Flower Delivery in Suryapet",
    metaKeyword: "flower delivery suryapet, online flowers suryapet telangana, florist suryapet, flowers suryapet nalgonda",
    footerContent: `
<h2>Flower Delivery in Suryapet — At the Heart of Telangana's Paddy Belt</h2>
<p>Suryapet, the headquarters of Suryapet district (carved out of Nalgonda district in 2016), sits in the fertile Krishna-Tungabhadra plain region of central Telangana. The district is characterized by the vast Nagarjunasagar Dam and reservoir — one of India's largest irrigation projects — whose backwaters extend into this district and have transformed its landscape from drought-prone to agriculturally productive. The Nagarjunakonda archaeological site nearby preserves one of India's most significant Buddhist heritage zones from the Ikshvaku period (3rd century CE), including stupas and viharas submerged partly by the dam. Suryapet's economy is strongly agricultural with rice, cotton, and sugarcane grown along the Paleru and Krishna tributaries.</p>
<p>RedHeart delivers flowers across Suryapet — Kodad Road, Hyderabad Road, Town Hall area, and Nadigudem Road. Our range includes roses, marigolds, jasmine, and Telangana seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Suryapet, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kodad Road, Hyderabad Road, Town Hall area, Nadigudem Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, Bathukamma seasonal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available in Suryapet for Telangana festivals?",
        answer: "Yes, Bathukamma, Bonalu, and Ugadi are celebrated in Suryapet. Tangedu, marigold, and seasonal floral arrangements for these festivals are available."
      },
      {
        question: "Can I order a birthday bouquet same day in Suryapet?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Suryapet. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "Do you deliver flowers near Kodad area from Suryapet?",
        answer: "Kodad (about 25 km away) is in our extended zone. Please order before 12 PM for same-day delivery to Kodad."
      }
    ]
  },

  "miryalaguda": {
    cityName: "Miryalaguda",
    metaTitle: "Flower Delivery in Miryalaguda | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Miryalaguda, Telangana. Same-day delivery of roses, bouquets & seasonal flowers across Miryalaguda. From ₹399.",
    h1: "Online Flower Delivery in Miryalaguda",
    metaKeyword: "flower delivery miryalaguda, online flowers miryalaguda telangana, florist miryalaguda nalgonda, flowers miryalaguda sugar",
    footerContent: `
<h2>Flower Delivery in Miryalaguda — Sugar Town on the Krishna Canal Banks</h2>
<p>Miryalaguda, in Nalgonda district of Telangana, is the commercial hub of the Krishna River canal zone — an area transformed from barren Deccan scrubland to fertile agricultural fields by the Nagarjunasagar left canal irrigation network. The town's economy is built around sugarcane cultivation and the Nizam Sugar Factory (one of Telangana's oldest sugar mills), and the area is a major rice producer. Miryalaguda's cultural life is deeply Telugu — the local temple festivals, Bonalu processions, and Bathukamma are celebrated with particular vibrancy in this area. The Nagarjunasagar Dam is just 60 km away, making Miryalaguda a gateway town for visitors to the dam and the archaeological site.</p>
<p>RedHeart delivers flowers across Miryalaguda — Suryapet Road, Station Road, Town area, and Huzurnagar Road. We offer roses, marigolds, jasmine, and seasonal Telugu bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Miryalaguda, Nalgonda, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Suryapet Road, Station Road, Town area, Huzurnagar Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, Bathukamma flower stacks</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are Bathukamma flowers available in Miryalaguda?",
        answer: "Yes, Bathukamma is one of the most important festivals in the Nalgonda-Miryalaguda region. Tangedu (Cassia auriculata), cockscomb, and marigold flowers used in Bathukamma stacks are available during the festival season."
      },
      {
        question: "Can I order flowers in Miryalaguda for temple events?",
        answer: "Yes, marigold garlands, jasmine strings, and temple puja flower sets are available in Miryalaguda for local Shiva, Vishnu, and folk deity festivals."
      },
      {
        question: "Do you deliver to Huzurnagar area near Miryalaguda?",
        answer: "Huzurnagar is about 25 km from Miryalaguda. Extended delivery to Huzurnagar is possible — please order before 12 PM and mention the destination."
      }
    ]
  },

  "machilipatnam": {
    cityName: "Machilipatnam",
    metaTitle: "Flower Delivery in Machilipatnam | Same Day | RedHeart",
    metaDescription: "Order flowers in Machilipatnam (Masulipatnam), AP. Same-day delivery near Krishna delta & across Machilipatnam town. From ₹399.",
    h1: "Online Flower Delivery in Machilipatnam",
    metaKeyword: "flower delivery machilipatnam, online flowers machilipatnam ap, florist machilipatnam, flowers machilipatnam kalamkari",
    footerContent: `
<h2>Flower Delivery in Machilipatnam — Kalamkari's Ancient Port on the Krishna Delta</h2>
<p>Machilipatnam (also spelled Masulipatnam), the headquarters of Krishna district on Andhra Pradesh's Krishna River delta coast, is one of India's earliest European trading ports. The Dutch (1605) and the British East India Company (1611) established their first Coromandel factories here, making Machilipatnam a pivotal early colonial port. The city is the birthplace of Kalamkari — the ancient Indian art of hand-painting or block-printing cotton fabric with natural dyes depicting mythological scenes. This GI-tagged textile art from Machilipatnam and nearby Srikalahasti is among India's most celebrated craft traditions. The Manginapudi Beach near Machilipatnam and the Aduru Appanna temple are locally beloved destinations.</p>
<p>RedHeart delivers flowers across Machilipatnam — Bandar Road, Gandhi Nagar, Beach Road area, and Eluru Road. Our range includes roses, marigolds, tropical coastal bouquets, and jasmine. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Machilipatnam, Krishna, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bandar Road, Gandhi Nagar, Beach Road area, Eluru Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, tropical coastal bouquets, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are tropical flowers available in Machilipatnam?",
        answer: "Yes, Machilipatnam's coastal location means we stock anthuriums, tropical hibiscus, and coastal bouquets alongside roses, marigolds, and jasmine."
      },
      {
        question: "Can I send flowers to Beach Road area in Machilipatnam?",
        answer: "Yes, the Manginapudi Beach Road area is within our delivery zone. Roses and tropical arrangements for beach-area stays or gifting are popular in Machilipatnam."
      },
      {
        question: "Are flowers available in Machilipatnam for Sankranti and Ugadi?",
        answer: "Yes, Sankranti (with its famous kite-flying and bull-racing traditions in coastal AP) and Ugadi are major floral festivals in Machilipatnam. Seasonal flower arrangements are available."
      }
    ]
  },

  "proddatur": {
    cityName: "Proddatur",
    metaTitle: "Flower Delivery in Proddatur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Proddatur, Andhra Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Proddatur. From ₹399.",
    h1: "Online Flower Delivery in Proddatur",
    metaKeyword: "flower delivery proddatur, online flowers proddatur ap, florist proddatur, flowers proddatur kadapa leather",
    footerContent: `
<h2>Flower Delivery in Proddatur — Industrial Hub of Rayalaseema's Leather Belt</h2>
<p>Proddatur, in YSR Kadapa district of Andhra Pradesh's Rayalaseema region, is one of the most industrially active cities in southern AP. The city is known for its leather goods and footwear industry (Proddatur has a cluster of tanneries and shoe manufacturers that export to Middle Eastern markets) and for the Yerramalai cotton crop that thrives in the dry Penna River basin. The Penna River forms the western boundary of the town, and the Pushpagiri Mutt (a significant Veerashaiva religious institution) lends Proddatur spiritual importance in the Lingayat community's religious geography. The city's Telugu culture around Ugadi, Sri Rama Navami, and Sankranti is particularly vibrant.</p>
<p>RedHeart delivers flowers across Proddatur — Jammalamadugu Road, Kadapa Road, Muddanur Road, and Town area. We offer roses, marigolds, jasmine, and seasonal Rayalaseema bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Proddatur, YSR Kadapa, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jammalamadugu Road, Kadapa Road, Muddanur Road, Town area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine, marigolds, seasonal AP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Sri Rama Navami in Proddatur?",
        answer: "Yes, Sri Rama Navami is a grand festival in Proddatur with decorated processions. Garlands, marigold decorations, and puja flower sets are available for the festival."
      },
      {
        question: "Are flowers available for corporate gifting in Proddatur leather industry offices?",
        answer: "Yes, we offer fresh flower arrangements and desk plants suitable for leather industry offices and factory gifting occasions in Proddatur."
      },
      {
        question: "Do you deliver flowers same day in Proddatur?",
        answer: "Yes, same-day delivery is available across Proddatur for orders placed before 3 PM."
      }
    ]
  },

  "nandyal": {
    cityName: "Nandyal",
    metaTitle: "Flower Delivery in Nandyal | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Nandyal, Andhra Pradesh. Same-day delivery of roses, bouquets & seasonal flowers across Nandyal. From ₹399.",
    h1: "Online Flower Delivery in Nandyal",
    metaKeyword: "flower delivery nandyal, online flowers nandyal ap, florist nandyal, flowers nandyal rayalaseema cement",
    footerContent: `
<h2>Flower Delivery in Nandyal — Nallamala's Gateway in the Cement Corridor</h2>
<p>Nandyal, the headquarters of Nandyal district in Andhra Pradesh, lies in the Kunderu River valley in Rayalaseema — a region known for its cement industry (the Nandyal-Kurnool belt has multiple large cement plants, including the former ACC and UltraTech facilities) and for its proximity to the Nallamala forest hills. The Mahanandi temple — one of the nine Nandis (Navasila Nandis) of Andhra Pradesh — is just 23 km from Nandyal and is a major Shiva pilgrimage site where a natural spring flows directly into the abhisheka tank. Nandyal's cotton cultivation, limestone quarrying, and the railway junction that connects multiple AP lines make it an important regional centre.</p>
<p>RedHeart delivers flowers across Nandyal — Kurnool Road, Allagadda Road, Dhone Road, and Srinivasa Nagar area. Our range includes roses, marigolds, puja flower sets, and seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nandyal, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kurnool Road, Allagadda Road, Dhone Road, Srinivasa Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, bilva patra, puja flower sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Mahanandi Shiva temple available in Nandyal?",
        answer: "Yes, Mahanandi temple is only 23 km from Nandyal. Bilva leaves, marigold garlands, and lotus for abhisheka are available. Delivered to your accommodation in Nandyal before your temple visit."
      },
      {
        question: "Can I send flowers to cement industry offices in Nandyal?",
        answer: "Yes, corporate flower arrangements for the cement and limestone industry offices in the Nandyal area are available. We offer office bouquets and table flower arrangements."
      },
      {
        question: "Do you deliver flowers for Ugadi in Nandyal?",
        answer: "Yes, Ugadi is a major festival in Nandyal. Marigold garlands, neem flower offerings, and seasonal AP floral bouquets are available around the Telugu New Year."
      }
    ]
  },

  "tadepalligudem": {
    cityName: "Tadepalligudem",
    metaTitle: "Flower Delivery in Tadepalligudem | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Tadepalligudem, Andhra Pradesh. Same-day delivery of roses & bouquets across Tadepalligudem. From ₹399.",
    h1: "Online Flower Delivery in Tadepalligudem",
    metaKeyword: "flower delivery tadepalligudem, online flowers tadepalligudem ap, florist tadepalligudem west godavari, flowers tadepalligudem",
    footerContent: `
<h2>Flower Delivery in Tadepalligudem — West Godavari's River Town</h2>
<p>Tadepalligudem (often called "Tadepalle" locally), in West Godavari district of Andhra Pradesh, is a prosperous delta town in the lower Godavari irrigation zone. The Godavari's backwaters and canal networks make the Tadepalligudem area among the most fertile in AP, supporting large rice, jute, and sugarcane crops. The city is an important railway junction on the Howrah-Chennai main line and serves as a commercial hub for the surrounding delta villages. The region's deep Telugu cultural traditions include elaborate Sankranti Muggulu (floor art) competitions and spectacular Godavari Pushkaram festivals when millions of pilgrims gather at the Godavari's sacred ghats once every 12 years.</p>
<p>RedHeart delivers flowers across Tadepalligudem — Eluru Road, Bhimavaram Road, Railway Station area, and Nidadavolu Road. Our range includes roses, jasmine, marigolds, and seasonal Godavari delta bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tadepalligudem, West Godavari, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru Road, Bhimavaram Road, Railway Station area, Nidadavolu Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine strings, marigolds, seasonal delta bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order jasmine flowers in Tadepalligudem for personal use?",
        answer: "Yes, jasmine (mallige) is extremely popular in the Godavari delta and is available in Tadepalligudem for personal and puja use throughout the year."
      },
      {
        question: "Are flowers available for Sankranti in Tadepalligudem?",
        answer: "Yes, Sankranti is one of the grandest festivals in the West Godavari delta. Marigold toranam (door garlands), Muggulu flower offerings, and festive bouquets are available."
      },
      {
        question: "Do you deliver to Nidadavolu area near Tadepalligudem?",
        answer: "Nidadavolu is about 15 km from Tadepalligudem. Same-day delivery to Nidadavolu is possible for orders placed before 12 PM."
      }
    ]
  },

  "mehsana": {
    cityName: "Mehsana",
    metaTitle: "Flower Delivery in Mehsana | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Mehsana, Gujarat. Same-day delivery of roses, bouquets & seasonal flowers across Mehsana. Starting ₹399.",
    h1: "Online Flower Delivery in Mehsana",
    metaKeyword: "flower delivery mehsana, online flowers mehsana gujarat, florist mehsana, flowers mehsana dairy oil refinery",
    footerContent: `
<h2>Flower Delivery in Mehsana — Gujarat's Dairy and Energy Capital</h2>
<p>Mehsana, in northern Gujarat, is known as the milk capital of India — the district is the headquarters of Dudhsagar Dairy (the world's largest dairy cooperative in processing capacity) and lies in the heart of the milk-producing Sabarkantha-Mehsana belt that feeds Gujarat Cooperative Milk Marketing Federation (GCMMF), the parent body of Amul. The city is also home to a massive oil refinery operated by ONGC, as the Mehsana district sits atop significant oil and natural gas reserves discovered in the 1960s. The Modhera Sun Temple (one of India's finest examples of Solanki-era temple architecture from 1026 CE) is just 25 km away and is one of Gujarat's most important heritage landmarks.</p>
<p>RedHeart delivers flowers across Mehsana — Highway Road, Station Road, Palanpur Road, and ONGC Colony area. Our range includes roses, marigolds, seasonal Gujarati bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mehsana, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Highway Road, Station Road, Palanpur Road, ONGC Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Gujarati bouquets, indoor plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to ONGC Colony in Mehsana?",
        answer: "Yes, ONGC Colony is within our delivery zone in Mehsana. Corporate and personal flower deliveries to ONGC and Dudhsagar Dairy residential areas are available."
      },
      {
        question: "Are flowers available near Modhera Sun Temple from Mehsana?",
        answer: "Modhera is 25 km from Mehsana. For the Uttarardh Mahotsav dance festival at Modhera or sun temple offerings, flowers are available from Mehsana. Contact our support for Modhera delivery."
      },
      {
        question: "Are flowers for Navratri available in Mehsana?",
        answer: "Yes, Mehsana is in the heart of Gujarat's Navratri belt. Garba decorative flowers, marigold strings for pandals, and festive bouquets are very popular during the Navratri season."
      }
    ]
  },

  "patan": {
    cityName: "Patan",
    metaTitle: "Flower Delivery in Patan | Patola Silk City | RedHeart",
    metaDescription: "Order fresh flowers in Patan, Gujarat. Same-day delivery near Rani ki Vav & across Patan city. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Patan",
    metaKeyword: "flower delivery patan, online flowers patan gujarat, florist patan, flowers patan rani ki vav patola silk",
    footerContent: `
<h2>Flower Delivery in Patan — Ancient Solanki Capital with UNESCO Heritage</h2>
<p>Patan, in northern Gujarat on the banks of the Saraswati River (now mostly dry), was the medieval capital of the Solanki (Chaulukya) dynasty that ruled Gujarat from the 10th to 13th centuries CE. The city's most celebrated monument is the Rani ki Vav (Queen's Stepwell) — a UNESCO World Heritage Site built in the 11th century by Queen Udayamati in memory of King Bhimdev I, whose seven-storeyed ornate stepwell with 800 sculptural panels is among India's finest examples of stepwell architecture. Patan is also the only city in the world where the double ikat hand-weaving technique Patola silk is still produced — the 900-year-old Salvi family tradition of making Patan Patola sarees (which can take 6 months per saree) is a GI-tagged craft of extraordinary heritage value.</p>
<p>RedHeart delivers flowers across Patan — Mehsana Road, Old Town, Sidhpur Road, and Station Road. Our range includes roses, marigolds, seasonal Gujarati bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patan, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mehsana Road, Old Town, Sidhpur Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Gujarati bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers as a gift near Rani ki Vav in Patan?",
        answer: "Yes, floral arrangements for romantic stays near the Rani ki Vav heritage site or nearby hotels are available in Patan. A bouquet paired with a Patan visit makes for a memorable gift."
      },
      {
        question: "Are flowers available for Navratri celebrations in Patan?",
        answer: "Yes, Patan's Navratri is a major cultural event. Marigold and seasonal flower arrangements for Navratri puja and Garba pandals are available."
      },
      {
        question: "Do you deliver flowers to Sidhpur area near Patan?",
        answer: "Sidhpur (about 25 km from Patan) is in our extended zone. Please order before 12 PM for same-day delivery to Sidhpur."
      }
    ]
  },

  "palanpur": {
    cityName: "Palanpur",
    metaTitle: "Flower Delivery in Palanpur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Palanpur, Gujarat. Same-day delivery of roses, bouquets & seasonal flowers across Palanpur. Starting ₹399.",
    h1: "Online Flower Delivery in Palanpur",
    metaKeyword: "flower delivery palanpur, online flowers palanpur gujarat, florist palanpur banaskantha, flowers palanpur diamond jewellery",
    footerContent: `
<h2>Flower Delivery in Palanpur — Diamond Capital at Gujarat's Northern Gateway</h2>
<p>Palanpur, the headquarters of Banaskantha district in Gujarat, is known as the diamond trading hub of India — the Palanpur-based Jain community (particularly the Palanpuri Jains) dominates the global rough diamond and polished diamond trade from Antwerp to Dubai, earning Palanpur a reputation far beyond its modest size. The city also lies close to the Jessore Sloth Bear Sanctuary — one of the few sloth bear sanctuaries in India — and the Balaram Ambaji Heritage Resort. The historic Kiradu temples (near Barmer in Rajasthan, just across the border) and the nearby Ambaji temple (one of Gujarat's most important shakti peethas) are within easy reach from Palanpur.</p>
<p>RedHeart delivers flowers across Palanpur — Station Road, Deesa Road, Abu Road direction, and Civil Lines area. We offer roses, marigolds, seasonal Gujarati bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palanpur, Banaskantha, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Deesa Road, Abu Road direction, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available for Jain Paryushan in Palanpur?",
        answer: "Yes, Palanpur's Jain community celebrates Paryushan with great devotion. White roses, mogra (jasmine), and light-coloured flowers appropriate for Jain festivals are available."
      },
      {
        question: "Can I get flowers for Ambaji temple puja near Palanpur?",
        answer: "Ambaji temple is about 65 km from Palanpur. We deliver devotional flower sets to your Palanpur accommodation before your Ambaji pilgrimage."
      },
      {
        question: "Do you deliver flowers to Deesa area from Palanpur?",
        answer: "Deesa (about 45 km from Palanpur) is in the extended zone. Please contact our support or order before 12 PM for same-day Deesa delivery."
      }
    ]
  },

  "porbandar": {
    cityName: "Porbandar",
    metaTitle: "Flower Delivery in Porbandar | Gandhi's Birthplace | RedHeart",
    metaDescription: "Order flowers in Porbandar, Gujarat — birthplace of Mahatma Gandhi. Same-day delivery of roses & bouquets across Porbandar. From ₹399.",
    h1: "Online Flower Delivery in Porbandar",
    metaKeyword: "flower delivery porbandar, online flowers porbandar gujarat, florist porbandar, flowers porbandar gandhi birthplace",
    footerContent: `
<h2>Flower Delivery in Porbandar — Gandhi's Coastal Birthplace on the Arabian Sea</h2>
<p>Porbandar, on the southwestern Saurashtra coast of Gujarat facing the Arabian Sea, is world-famous as the birthplace of Mahatma Gandhi — born on October 2, 1869 in a four-storey haveli in the old city. The Kirti Mandir (a memorial to Gandhi built on his birthplace) attracts visitors from across the world. Porbandar's coastline is among Gujarat's most beautiful — the whitewashed fishing quarter, the active trawler harbour, and the Sudama Temple (commemorating Lord Krishna's childhood friend Sudama) give the city a rich spiritual and cultural identity. The coastal ecosystem supports a large fishing industry, and Porbandar's hinterland produces cotton and groundnuts in the arid Saurashtra soils.</p>
<p>RedHeart delivers flowers across Porbandar — MG Road, Hazur Road, Huzoor Road, and Old Town area. Our range includes roses, marigolds, jasmine, and coastal Gujarat seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Porbandar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">MG Road, Hazur Road, Huzoor Road, Old Town area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, coastal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Gandhi Jayanti tribute at Kirti Mandir in Porbandar?",
        answer: "Yes, simple, respectful floral tributes for Gandhi Jayanti at the Kirti Mandir are available in Porbandar. Marigold and white flower arrangements are appropriate for the occasion."
      },
      {
        question: "Are flowers for Sudama Temple puja available in Porbandar?",
        answer: "Yes, marigold garlands, tulsi, and Krishna-puja flowers for the Sudama Temple are available in Porbandar. Delivered fresh to your accommodation before the temple visit."
      },
      {
        question: "Are flowers available for Navratri celebrations in Porbandar?",
        answer: "Yes, Navratri is a major festival in Porbandar. Decorative marigold garlands, Garba pandal flowers, and festive arrangements are available during the nine nights of Navratri."
      }
    ]
  },

  "godhra": {
    cityName: "Godhra",
    metaTitle: "Flower Delivery in Godhra | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Godhra, Gujarat. Same-day delivery of roses, bouquets & seasonal flowers across Godhra town. From ₹399.",
    h1: "Online Flower Delivery in Godhra",
    metaKeyword: "flower delivery godhra, online flowers godhra gujarat, florist godhra, flowers godhra panchmahal gujarat",
    footerContent: `
<h2>Flower Delivery in Godhra — Panchmahal's Historic Railway Town</h2>
<p>Godhra, the headquarters of Panchmahal district in eastern Gujarat, is an old railway junction town on the Bombay-Ahmedabad line with a long mercantile history. The Panchmahal district is one of Gujarat's most tribally diverse regions — the Bhil, Bhilala, and Nayaka tribes make up a significant proportion of the district's population, and the tribal culture influences art, music, and festival traditions across the area. The Godhra region borders Rajasthan and Madhya Pradesh, giving it a cultural blend that is distinct from coastal Gujarat. The Pavagadh Hill (a UNESCO-listed Champaner-Pavagadh Archaeological Park) is just 45 km away — a remarkable complex of medieval Hindu and Jain temples alongside a 15th-century pre-Mughal capital built by the Khichi Chauhan dynasty.</p>
<p>RedHeart delivers flowers across Godhra — Station Road, Lunawada Road, Halol Road, and Civil Lines area. We offer roses, marigolds, seasonal Gujarati bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Godhra, Panchmahal, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Lunawada Road, Halol Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets, indoor plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for tribal festival decorations near Godhra?",
        answer: "Yes, the Panchmahal district's tribal communities celebrate Holi and harvest festivals with elaborate floral decorations. Marigolds, seasonal wildflowers, and colourful arrangements are available."
      },
      {
        question: "Are flowers available near Pavagadh/Champaner heritage site from Godhra?",
        answer: "Champaner-Pavagadh is 45 km from Godhra. For the Mahakali temple on Pavagadh Hill offerings, we deliver to Godhra and can arrange Champaner delivery with advance notice."
      },
      {
        question: "Can I send a birthday bouquet in Godhra same day?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Godhra. Orders placed before 3 PM reach the recipient the same evening."
      }
    ]
  },

  "amreli": {
    cityName: "Amreli",
    metaTitle: "Flower Delivery in Amreli | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Amreli, Gujarat. Same-day delivery of roses, bouquets & seasonal flowers across Amreli town. From ₹399.",
    h1: "Online Flower Delivery in Amreli",
    metaKeyword: "flower delivery amreli, online flowers amreli gujarat, florist amreli, flowers amreli saurashtra cotton",
    footerContent: `
<h2>Flower Delivery in Amreli — Saurashtra's Cotton Belt City</h2>
<p>Amreli, in southern Saurashtra in Gujarat, is the headquarters of Amreli district — a district known for its Bt cotton cultivation, groundnut production, and the famous Gir Lion Sanctuary (the world's only wild habitat of the Asiatic lion) which lies at the eastern edge of the district. The Gir forest, shared between Amreli and Junagadh districts, supports a growing lion population that has increasingly dispersed into the coastal Saurashtra forests and even urban areas. Amreli's cultural life reflects the deep Jain and Vaishnava traditions of Saurashtra — the city has a significant diamond cutting and polishing cottage industry (part of the broader Saurashtra diamond cluster that links to Surat's industry) and the local economy is diverse.</p>
<p>RedHeart delivers flowers across Amreli — Rajula Road, Dhola Road, Savarkundla Road, and Civil Lines area. We offer roses, marigolds, seasonal Gujarati bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amreli, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajula Road, Dhola Road, Savarkundla Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, seasonal Saurashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers available near Gir Lion Sanctuary from Amreli?",
        answer: "Yes, Amreli is a gateway city to the Gir forest area. Flowers for safari resort stays or jungle lodge gifting are available for delivery in Amreli and can be arranged for Gir area resorts with advance notice."
      },
      {
        question: "Can I get flowers for Navratri in Amreli?",
        answer: "Yes, Navratri is one of the biggest festivals in Amreli. Marigold strings, Garba pandal flower decorations, and festive bouquets are popular throughout the nine-night festival."
      },
      {
        question: "Are flowers available for Jain festivals in Amreli?",
        answer: "Yes, Amreli has a significant Jain community. Paryushan flowers, white roses, and mogra arrangements appropriate for Jain religious occasions are available."
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
