/**
 * City landing pages — Flowers — Batch 3
 * Gurugram, Chandigarh, Lucknow, Surat, Kochi, Indore
 * node scripts/seo-city-flowers-3.js
 */
const API_BASE = "https://backend.redheart.in/api";

const CITIES = {

  /* ── GURUGRAM ─────────────────────────────────────────────────────────── */
  "gurugram": {
    cityName: "Gurugram",
    metaTitle: "Flower Delivery in Gurugram | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Gurugram with same-day & midnight delivery. Roses, bouquets & arrangements to DLF, Cyber City, Golf Course Road & all sectors. From ₹399.",
    h1: "Flower Delivery in Gurugram",
    metaKeyword: "flower delivery in Gurugram, online flower delivery Gurugram, same day flower delivery Gurugram, florist Gurugram, send flowers Gurugram, midnight flower delivery Gurugram, flowers DLF Cyber City",
    footerContent: `
<h2>Flower Delivery in Gurugram — India's Corporate Capital Has a Warm Side Too</h2>
<p>Gurugram is a city that built itself in two decades. Where wheat fields stood in the 1990s, there are now glass towers housing Fortune 500 companies, golf courses that stretch between expressways, and residential high-rises that house hundreds of thousands of professionals who moved here from every corner of India. That migration created something interesting: a city of transplants who celebrate every occasion with extra enthusiasm because they are doing it away from home. Birthday deliveries to apartments in DLF Phase 1, anniversary roses for couples in Sohna Road condominiums, farewell bouquets for colleagues leaving the Cyber City office — this is Gurugram's flower culture. RedHeart calls Gurugram home. Our office is here. We know these sectors better than any delivery app.</p>

<p>Gurugram's proximity to Ghazipur Mandi in East Delhi — roughly 45 minutes early morning — means our flowers are sourced fresh daily from one of Asia's largest flower markets. There is no long supply chain here, no overnight freight. The rose you receive on Golf Course Road at noon was in the mandi before sunrise. That proximity is our freshness guarantee, and in a city that has high standards for everything it buys, freshness matters.</p>

<h2>Quick Reference — Flower Delivery in Gurugram</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gurugram (Gurgaon), Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">DLF Phase 1–5, Cyber City, Golf Course Road, Sohna Road, MG Road, Sector 14, 29, 40, 45, 56, 57, 65, 82, South City, Palam Vihar, Manesar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Corporate gifting, Karva Chauth, Diwali, birthdays, anniversaries, office farewells</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, sunflowers, gerberas, mixed premium bouquets</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nearest flower market</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghazipur Mandi, Delhi (~45 min)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day order cut-off</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">5:00 PM</td></tr>
  </tbody>
</table>

<h2>Corporate Gurugram — Where Flowers Mean Business</h2>
<p>Walk through Cyber Hub on any weekday afternoon and you will see a city that runs on professional relationships. Client lunches, product launches, team birthdays, board meetings — all of them are occasions where flowers communicate something important. RedHeart delivers to every major office cluster in Gurugram: the towers of DLF Cyber City, the campuses along Golf Course Extension Road, the co-working spaces of Udyog Vihar, and the corporate parks of Manesar. Our corporate clients in Gurugram include multinational teams that need weekly desk flowers, startups that want same-day birthday deliveries for team members, and large companies that order reception arrangements on a retainer.</p>

<p>Karva Chauth in Gurugram is a phenomenon. The festival falls in October-November and the entire city — from government employees in old Gurgaon sectors to software engineers in sector 65 high-rises — participates. Red roses ordered on Karva Chauth eve run into the thousands. RedHeart has been fulfilling these orders long enough to know that the demand spike begins three days before the festival and we prepare accordingly. Every Karva Chauth, we ensure there is no stockout, no delay, and no Gurugram husband who could not get his flowers.</p>

<h2>Residential Gurugram — Every Society, Every Sector</h2>
<p>Gurugram's residential landscape is a collection of gated societies, each a small world of its own. DLF Garden City, Unitech Nirvana Country, Supertech Hues, Emaar Palm Hills, South City 1 and 2, Orchid Petals — we know these properties because we deliver to them regularly. Our partners understand the gate entry process, know to call ahead, and handle security desks professionally. The Sohna Road corridor — with its long row of apartment complexes housing thousands of families — is one of our highest-volume delivery zones. New sectors like 82, 83, 84, and 85 along the Dwarka Expressway have grown rapidly and are fully covered.</p>

<h2>Why Gurugram Chooses RedHeart</h2>
<p>Gurugram is full of options for everything. But when people here order flowers repeatedly from RedHeart, it is because we deliver what we promise. Same-day means same-day. Fresh means fresh. A city of migrants who have high standards for every service they use has chosen RedHeart because we meet those standards consistently — from the freshness of the roses to the precision of the delivery time. That is the only metric that matters in Gurugram.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to Cyber City and DLF offices in Gurugram?", answer: "Yes, RedHeart delivers flowers to all major office complexes in Gurugram including DLF Cyber City, Udyog Vihar, Golf Course Road offices, and corporate parks in Manesar. We handle same-day corporate deliveries to reception desks and individual cabins, ideal for client gifting and team celebrations." },
      { question: "Is same-day flower delivery available across all Gurugram sectors?", answer: "Yes, RedHeart covers all Gurugram sectors with same-day delivery — from old sectors 14, 29, 40 to the newer sectors 65, 82, 85 along the Dwarka Expressway. Orders placed before 5 PM are delivered within 2–4 hours across the city." },
      { question: "Can I get Karva Chauth flowers delivered in Gurugram?", answer: "Yes! RedHeart specifically prepares for the Karva Chauth spike in Gurugram every year. Red roses, mixed romantic bouquets, and premium arrangements are stocked in advance. Order before 5 PM on Karva Chauth day for same-day delivery, or schedule the night before for a morning surprise." },
      { question: "Does RedHeart deliver flowers to gated societies in Sohna Road and Golf Course Extension?", answer: "Yes, we deliver to all gated societies along Sohna Road, Golf Course Extension Road, and Dwarka Expressway including DLF Garden City, Emaar Palm Hills, South City, and all residential complexes in these corridors. Our delivery partners are trained in gated society entry protocols." },
      { question: "What is the starting price for flower delivery in Gurugram?", answer: "Flower delivery in Gurugram starts at ₹399 on RedHeart. We have options across all price points — from budget-friendly single-variety bouquets to premium rose and orchid arrangements. Same-day delivery, midnight delivery, and next-day scheduled delivery are all available." }
    ]
  },

  /* ── CHANDIGARH ───────────────────────────────────────────────────────── */
  "chandigarh": {
    cityName: "Chandigarh",
    metaTitle: "Flower Delivery in Chandigarh | Same-Day & Midnight | RedHeart",
    metaDescription: "Send fresh flowers in Chandigarh with same-day delivery. Roses, bouquets & arrangements to Sector 17, Sector 35, Panchkula & Mohali. From ₹399.",
    h1: "Flower Delivery in Chandigarh",
    metaKeyword: "flower delivery in Chandigarh, online flower delivery Chandigarh, same day flower delivery Chandigarh, florist Chandigarh, send flowers Chandigarh, flowers Sector 17 Panchkula Mohali",
    footerContent: `
<h2>Flower Delivery in Chandigarh — The City Beautiful and Its Love for Bloom</h2>
<p>Chandigarh is unlike any other Indian city because it was designed rather than grown. Le Corbusier's grid — sectors numbered, roads wide, trees planted deliberately, parks placed with intention — gave the city a quality of life that residents fiercely protect. The Rose Garden (Zakir Hussain Rose Garden) near Sector 16, one of Asia's largest rose gardens with over 1,600 varieties, is not just a tourist attraction — it is an expression of what this city values. A city that maintains such a garden is a city that understands flowers. RedHeart delivers fresh flowers across Chandigarh, Panchkula, and Mohali with same-day and midnight delivery, starting at ₹399.</p>

<p>Chandigarh draws its flower supply from wholesale markets in Sector 26 — the city's main market complex — and from the broader Punjab flower supply chain. The proximity to flower-growing areas in the Ropar and Rupnagar belts means Chandigarh gets fresh Punjab blooms regularly. The Punjabi culture's love of grand gestures — big bunches, bold colours, generous quantities — shapes the flower preferences here. A dozen roses is a start; two dozen is a proper statement.</p>

<h2>Quick Reference — Flower Delivery in Chandigarh</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandigarh (UT) + Panchkula (Haryana) + Mohali (Punjab)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">All Chandigarh sectors, Panchkula Sectors 1–25, Mohali Phase 1–11, IT City, Aerocity, Zirakpur, Kharar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Baisakhi, Lohri, Gurpurab, Karva Chauth, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses (premium, large bunches), gladioli, lilies, gerberas, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Local landmark</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Zakir Hussain Rose Garden (1,600+ rose varieties)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Baisakhi, Lohri, and the Punjabi Flower Calendar</h2>
<p>Chandigarh's festivals are Punjab's festivals, and in Punjab, every festival is celebrated with a wholehearted enthusiasm that the rest of India watches with admiration and slight envy. Lohri in January brings family gatherings and the exchange of sweets and flowers around bonfires. Baisakhi in April — Punjab's harvest festival and the commemoration of the Khalsa's founding at Anandpur Sahib in 1699 — fills Chandigarh's streets and gurudwaras with people and flowers. Gurpurab celebrations, particularly the birthday of Guru Nanak Dev Ji in November, are deeply significant occasions when flowers adorn gurudwaras and homes throughout the city. Karva Chauth brings the same red-rose surge here as in every north Indian city.</p>

<h2>Tri-City Coverage — Chandigarh, Panchkula, Mohali</h2>
<p>The Chandigarh Metropolitan Area is really three cities operating as one: Chandigarh UT, Panchkula in Haryana, and Mohali (SAS Nagar) in Punjab. RedHeart delivers across all three without treating them as separate service areas. Panchkula's sectors — particularly Sectors 5, 8, 11, 15, and 20 — are fully covered. Mohali's IT City, Phase 7, Phase 11, and Aerocity (near the international airport) are regular delivery zones. Zirakpur and Kharar — the fast-growing satellite towns on Chandigarh's edges — are also within our delivery network.</p>

<h2>Why Chandigarh Orders From RedHeart</h2>
<p>Chandigarh is a city that values quality and cleanliness — its residents consistently rank it as India's best-maintained city, and they extend those standards to everything they buy. RedHeart's flowers arrive fresh, are arranged neatly, and are delivered on time — three things that matter deeply in a city that does not tolerate mediocrity. Whether you are sending flowers to a family home in Sector 9, a campus in Mohali, or an office in the IT Park, the standard is the same.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to Panchkula and Mohali as well?", answer: "Yes, RedHeart covers the entire Chandigarh tri-city area — all Chandigarh sectors, Panchkula Sectors 1–25, and Mohali including Phase 1–11, IT City, Aerocity, Zirakpur, and Kharar. Same-day delivery is available across all three cities." },
      { question: "Can I order flowers for Lohri or Baisakhi delivery in Chandigarh?", answer: "Yes! RedHeart delivers festival flowers for Lohri, Baisakhi, and Gurpurab celebrations in Chandigarh. We stock up on marigolds, roses, and traditional Punjabi flower arrangements ahead of these festivals and offer extended delivery windows during festival seasons." },
      { question: "What flowers are most popular in Chandigarh?", answer: "Chandigarh's Punjabi culture favours generous, bold flower gifts — large rose bunches (2–3 dozen), tall gladioli arrangements, and colourful mixed bouquets. Lilies and gerberas are popular for birthdays. Roses in red and pink remain the top personal gift choice throughout the year." },
      { question: "Is midnight flower delivery available in Chandigarh?", answer: "Yes, midnight flower delivery is available across Chandigarh, Panchkula, and Mohali. Place your order before 9 PM and we will deliver at the time you specify — ideal for birthday and anniversary surprises." },
      { question: "Can RedHeart deliver flowers to the IT Park and corporate offices in Mohali?", answer: "Yes, RedHeart regularly delivers to the Mohali IT City, Infosys campus, and other corporate offices in the Chandigarh area. Corporate flower orders for client gifting, team celebrations, and event decoration are handled with professional packaging and on-time delivery." }
    ]
  },

  /* ── LUCKNOW ──────────────────────────────────────────────────────────── */
  "lucknow": {
    cityName: "Lucknow",
    metaTitle: "Flower Delivery in Lucknow | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Lucknow with same-day delivery. Roses, bouquets & arrangements to Hazratganj, Gomti Nagar, Aliganj & all areas. From ₹399.",
    h1: "Flower Delivery in Lucknow",
    metaKeyword: "flower delivery in Lucknow, online flower delivery Lucknow, same day flower delivery Lucknow, florist Lucknow, send flowers Lucknow, midnight flower delivery Lucknow, flowers Hazratganj Gomti Nagar",
    footerContent: `
<h2>Flower Delivery in Lucknow — The City of Nawabs Understands the Art of the Gesture</h2>
<p>Lucknow is the city of tehzeeb — a Urdu word meaning civilised refinement, courtesy, and the art of making others feel welcomed. This culture did not survive the Nawabi era as a relic; it lives actively in how Lucknow people speak, host, and give. When a Lucknowi sends flowers, it is never careless — the choice of flower, the occasion, the packaging all reflect a genuine attentiveness to the recipient. RedHeart has always felt that this city deserves flower delivery that matches that sensibility: flowers that arrive fresh, arranged with care, and presented in a way that honours the gift. Same-day and midnight delivery across Lucknow, starting at ₹399.</p>

<p>Lucknow's flower supply comes primarily from the wholesale market near Aminabad and from UP's flower-growing belts around Kannauj and Unnao. The city's love for fragrant flowers is profound — attar (perfume) is a Lucknow tradition going back centuries, and that same sensitivity to fragrance shapes flower preferences here. Tuberose (rajnigandha) and jasmine are more deeply valued in Lucknow than in most north Indian cities, because in this city, a flower that smells beautiful is considered inherently more precious.</p>

<h2>Quick Reference — Flower Delivery in Lucknow</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lucknow, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hazratganj, Gomti Nagar, Aliganj, Indira Nagar, Vikas Nagar, Alambagh, Charbagh, Aminabad, Jankipuram, Chinhat, Mahanagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eid, Navratri, Diwali, Karva Chauth, birthdays, weddings, homecomings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tuberose (rajnigandha), roses, jasmine, marigolds, gladioli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cultural identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawabi tehzeeb — city of attar, fragrant gifting tradition</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Eid and the Lucknow Flower Tradition</h2>
<p>Lucknow's significant Muslim population makes Eid one of the city's most important flower occasions. Mosques, homes, and family gatherings are decorated with fresh flowers during Ramzan and on Eid day itself. Rose water — rooh afza's floral cousin — is used generously, and fresh red and white rose arrangements are among the most gifted items between families. The flower stalls around Chowk and Aminabad do roaring business in the days before Eid. RedHeart's Eid delivery window is stocked specifically for this surge, ensuring families across Lucknow receive fresh flowers in time for the celebrations.</p>

<h2>From Hazratganj to Gomti Nagar — Lucknow's Flower Map</h2>
<p>Hazratganj — Lucknow's iconic central boulevard, the city's version of a grand promenade — is lined with heritage buildings and has been the city's social centre for over a century. Deliveries to the residential streets around Hazratganj carry the weight of Lucknow's old-city character. Gomti Nagar, the planned township on the Gomti River's eastern bank, is Lucknow's modern face — IT companies, new apartment complexes, and the Vipin Khand-Vibhuti Khand commercial zone. Indira Nagar, Aliganj, and Mahanagar are the city's large middle-class residential sectors where birthday and anniversary deliveries are steady throughout the year. Alambagh and Charbagh, near the major railway junction, cover the western approach to the city.</p>

<h2>Why Lucknow Trusts RedHeart</h2>
<p>In a city where the quality of a gesture matters as much as the gesture itself, RedHeart earns trust by never cutting corners. The flowers are fresh because we source them the same morning. The packaging is presentable because we know Lucknow notices presentation. The delivery is on time because a delayed gift is a diminished one. Pehle aap — after you — is Lucknow's most famous expression of courtesy. RedHeart's version of that courtesy is simple: your flowers arrive before you need to ask about them.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers during Eid in Lucknow?", answer: "Yes! RedHeart stocks and delivers fresh flower arrangements for Eid celebrations in Lucknow. During Ramzan and on Eid day, we carry rose arrangements, marigold garlands, and festive floral gifts. We maintain extra stock during the Eid period to serve Lucknow's large community of customers celebrating the festival." },
      { question: "Is same-day flower delivery available in Gomti Nagar and Indira Nagar?", answer: "Yes, RedHeart delivers flowers same-day to Gomti Nagar, Indira Nagar, Aliganj, Mahanagar, Jankipuram, and all major areas of Lucknow. Orders placed before 5 PM reach you within 2–4 hours." },
      { question: "Can I get rajnigandha (tuberose) delivered in Lucknow?", answer: "Yes! Rajnigandha (tuberose) is one of Lucknow's most loved flowers and RedHeart delivers it fresh across the city. Available as loose stems and in bouquets, it's ideal for puja, home fragrance, and as a culturally resonant personal gift in a city that treasures fragrant flowers." },
      { question: "What flowers are most popular in Lucknow?", answer: "Rajnigandha (tuberose) and jasmine are uniquely prized in Lucknow for their fragrance — a city with a deep attar tradition values scented flowers above all. Roses are the top romantic gift. Marigolds for all religious occasions. Gladioli are popular for formal and festive arrangements." },
      { question: "Is midnight delivery available for flower bouquets in Lucknow?", answer: "Yes, RedHeart offers midnight flower delivery across Lucknow. Order before 9 PM and choose your delivery time — we will ensure your flowers arrive at the exact hour you need for the perfect birthday or anniversary surprise." }
    ]
  },

  /* ── SURAT ────────────────────────────────────────────────────────────── */
  "surat": {
    cityName: "Surat",
    metaTitle: "Flower Delivery in Surat | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Surat with same-day delivery. Roses, marigolds & bouquets to Adajan, Vesu, Athwalines & all areas. From ₹399.",
    h1: "Flower Delivery in Surat",
    metaKeyword: "flower delivery in Surat, online flower delivery Surat, same day flower delivery Surat, florist Surat, send flowers Surat, midnight flower delivery Surat, Navratri flowers Surat",
    footerContent: `
<h2>Flower Delivery in Surat — The Diamond City's Golden Heart for Flowers</h2>
<p>Surat is a city that moves at remarkable speed. The diamond cutting and polishing industry processes 90% of the world's diamonds here; the textile mills produce fabric that clothes much of India. But this industrial velocity has not made Surat transactional in its personal culture — quite the opposite. Suratis are known for their generosity, their love of food and celebration, and their deep investment in festivals. A city that dances Garba with some of the finest footwork in India, that fills its streets with marigolds during Navratri and Diwali, is a city that understands the language of beauty. RedHeart delivers fresh flowers across Surat with same-day and midnight delivery, from ₹399.</p>

<p>Surat's flower supply moves through the wholesale market at Mota Varachha and Adajan Road, drawing from Gujarat's Anand belt farms. The proximity to Anand and Kheda — Gujarat's primary flower-growing districts — gives Surat an advantage in fresh supply that cities farther from these farms do not have. Marigolds grown in the fertile soil of Anand district arrive in Surat's markets with particular freshness, and during Navratri and Diwali, this supply chain is tested to its absolute limits by the demand this city generates.</p>

<h2>Quick Reference — Flower Delivery in Surat</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Surat, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Adajan, Vesu, Athwalines, Piplod, Althan, Pal, Katargam, Udhna, Varachha, Citylight, Dumas Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navratri, Diwali-Bestu Varas, weddings, birthdays, Janmashtami</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, tuberose, roses, chrysanthemums, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nearest growing region</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anand-Kheda belt, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Navratri in Surat — Nine Nights That Consume the City</h2>
<p>Surat's Navratri is legendary. The city's Garba venues — from SIECC to large neighbourhood grounds — draw tens of thousands of dancers every night for nine consecutive nights. Each venue is decorated with marigold garlands, rose swags, and floral backdrops that must be refreshed daily. Home altars are adorned with fresh flowers for the goddess every evening before Garba begins. The flower demand in Surat during Navratri is extraordinary, and RedHeart stocks up heavily across marigolds, tuberose, and seasonal arrangements to serve both commercial venues and private homes throughout the festival.</p>

<h2>Surat's Neighbourhoods — From Adajan to Varachha</h2>
<p>Adajan and Vesu are Surat's premium western zones — affluent, cosmopolitan, and with a strong demand for premium roses, orchid arrangements, and designer bouquets for personal and corporate occasions. Athwalines, the city's historic commercial centre, is surrounded by residential areas that have been gifting flowers for generations. Piplod and Althan are newer residential developments with young families who are active online shoppers. Katargam and Varachha — the city's textile and diamond industry heartlands — have dense working populations with a high volume of festival gifting. Dumas Road, along the sea coast, is Surat's leisure corridor where restaurants and residences receive flowers for romantic occasions.</p>

<h2>Why Surat Orders From RedHeart</h2>
<p>Suratis are smart consumers with good taste and a preference for value without compromise. RedHeart satisfies both requirements — starting prices at ₹399 that do not mean thin bunches, and premium arrangements that justify their price. In a city that has developed sophisticated standards in textiles and diamonds, we bring the same quality consciousness to flowers. Every bouquet delivered in Surat meets a standard we set knowing this city will notice if it doesn't.</p>
`,
    faqs: [
      { question: "Can I order flowers for Navratri celebrations in Surat?", answer: "Yes! RedHeart stocks extensive marigold garlands, tuberose arrangements, and festive flower decorations for Navratri in Surat. We deliver to Garba venues, home altars, and personal gifting throughout the nine nights of Navratri, with extra stock maintained to handle the city's enormous festival demand." },
      { question: "Does RedHeart cover Adajan, Vesu, and Citylight in Surat?", answer: "Yes, RedHeart delivers flowers to Adajan, Vesu, Citylight, Piplod, Althan, Athwalines, Pal, and all major areas of Surat with same-day delivery. Our network covers both western premium zones and eastern industrial neighbourhoods like Katargam and Varachha." },
      { question: "What are the most popular flowers for Diwali gifting in Surat?", answer: "Marigolds and tuberose are the top choices for Diwali in Surat, used for door torans, puja decoration, and home fragrance. During the Gujarati New Year (Bestu Varas) that follows Diwali, premium rose bouquets and mixed arrangements are exchanged as new-year gifts." },
      { question: "Is same-day flower delivery available in Surat?", answer: "Yes, RedHeart delivers flowers same-day across Surat for orders placed before 5 PM. Delivery is completed within 2–4 hours. Midnight delivery for birthday and anniversary surprises is also available for orders placed before 9 PM." },
      { question: "Can I send flowers to a diamond office or textile showroom in Surat?", answer: "Yes! RedHeart handles corporate flower deliveries to business addresses in Surat's diamond and textile zones. We deliver to offices, showrooms, and factory reception areas across Katargam, Varachha, Ring Road, and other commercial areas of Surat with professional packaging." }
    ]
  },

  /* ── KOCHI ────────────────────────────────────────────────────────────── */
  "kochi": {
    cityName: "Kochi",
    metaTitle: "Flower Delivery in Kochi | Same-Day & Midnight | RedHeart",
    metaDescription: "Send fresh flowers in Kochi with same-day delivery. Roses, orchids & bouquets to Ernakulam, Kakkanad, Marine Drive & all areas. From ₹399.",
    h1: "Flower Delivery in Kochi",
    metaKeyword: "flower delivery in Kochi, online flower delivery Kochi, same day flower delivery Kochi, florist Kochi Cochin, send flowers Kochi, Onam flowers Kochi, flowers Ernakulam Kakkanad",
    footerContent: `
<h2>Flower Delivery in Kochi — Where Backwaters, Spice Routes, and Blooms Meet</h2>
<p>Kochi has been a meeting point of the world for over 500 years. The Chinese fishing nets at Fort Kochi, the Jewish synagogue in Mattancherry, the Portuguese churches, the spice warehouses — this is a city built by trade and shaped by the world that came to trade here. Today's Kochi adds another layer: Infopark and SmartCity in Kakkanad host India's highest-density tech workforce per square kilometre, while the old quarters of Mattancherry and Fort Kochi maintain a pace and character that feels centuries away. Flowers in Kochi carry both worlds — the modern gifting culture of the tech corridor and the deep floral tradition of Kerala's festivals and daily life. RedHeart delivers across Kochi with same-day and midnight delivery, starting at ₹399.</p>

<p>Kerala's flower culture is different from the north. It is quieter but more constant. Every morning, a homemaker in Ernakulam places a fresh flower in a small clay lamp holder at the doorstep — a kolam of flowers rather than rangoli. Onam's pookalam (flower carpet) is the most elaborate expression of this daily practice, when families compete to lay down intricate, multicoloured flower designs that can take an entire morning to complete. RedHeart sources from the wholesale flower market at Broadway in Ernakulam and from Kerala's own flower-growing regions in Thrissur and Palakkad.</p>

<h2>Quick Reference — Flower Delivery in Kochi</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kochi (Cochin), Kerala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ernakulam, Kakkanad, Marine Drive, Vyttila, Edapally, Palarivattom, Fort Kochi, Mattancherry, Aluva, Thrippunithura, Kalamassery, Tripunithura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Onam, Vishu, Christmas, Easter, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, chrysanthemums, roses, orchids, lotus, carnations</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Local flower market</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Broadway Market, Ernakulam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Onam — Kerala's Most Beautiful Flower Festival</h2>
<p>Onam, Kerala's harvest festival celebrated in August-September, is centred around the pookalam — a flower carpet laid at the home entrance every day for ten days. Each day, a new layer of flowers in different colours is added to the design, creating an increasingly intricate and vibrant display by the tenth day of Thiruvonam. The flowers used include marigolds (chendumalyam), chrysanthemums, ixora, and seasonal blooms. RedHeart delivers pookalam flowers in Kochi throughout the Onam season, with both individual varieties and mixed packs that give families the flexibility to create their own designs.</p>

<p>Christmas is Kochi's other great flower festival — Kerala has India's largest Christian population as a proportion, and Christmas here is celebrated with the fullness of a culture that has practised it for nearly 2000 years. Churches across Kochi are decorated lavishly with white lilies, red roses, and Christmas arrangements. Homes receive poinsettia plants and white flower wreaths. RedHeart's Christmas window extends from the first week of December through Christmas Day.</p>

<h2>Tech Kochi — Infopark, SmartCity, and Corporate Flowers</h2>
<p>Kakkanad's Infopark and SmartCity are among India's most significant IT campuses, housing companies like TCS, Wipro, UST Global, and hundreds of others. This corporate density generates constant professional flower demand — team celebrations, client visits, product launches, and the birthday-desk-bouquet culture that is universal in modern offices. RedHeart delivers to Infopark and SmartCity regularly and understands the access protocols for these campuses. For residential deliveries in Kakkanad's growing apartment corridors, we are equally experienced.</p>

<h2>Why Kochi Loves RedHeart</h2>
<p>Kochi is a cosmopolitan city — its residents have high standards shaped by international exposure, quality consciousness, and a culture that genuinely appreciates beauty in the everyday. RedHeart meets these expectations with fresh flowers, elegant packaging, and delivery partners who treat every order with care. Whether you are sending flowers for Onam, a birthday in Marine Drive, or a Christmas arrangement to a Fort Kochi home, RedHeart delivers with the quality this city expects.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver pookalam flowers for Onam in Kochi?", answer: "Yes! RedHeart delivers fresh pookalam flowers for Onam celebrations in Kochi, including marigolds (chendumalyam), chrysanthemums, ixora, and seasonal blooms for flower carpet designs. We deliver daily throughout the 10-day Onam season so your pookalam stays fresh every day." },
      { question: "Does RedHeart deliver flowers to Infopark and SmartCity in Kakkanad?", answer: "Yes, RedHeart delivers flowers to Infopark, SmartCity, and all corporate campuses in Kakkanad. We handle team birthday deliveries, client gifting, and event flowers for Kochi's IT corridor. Our delivery partners are experienced with campus access and security protocols." },
      { question: "Can I order Christmas flower arrangements in Kochi?", answer: "Yes! RedHeart delivers Christmas flower arrangements, white lily bouquets, and festive floral gifts across Kochi throughout December. We serve both churches and homes for Christmas decoration, with extended stock maintained during the Christmas-New Year period." },
      { question: "What areas of Kochi does RedHeart cover?", answer: "RedHeart covers Ernakulam, Kakkanad, Marine Drive, Vyttila, Edapally, Palarivattom, Fort Kochi, Mattancherry, Aluva, Kalamassery, Thrippunithura, and all surrounding areas. We serve Greater Kochi comprehensively with same-day delivery." },
      { question: "Which flowers are most popular for Vishu gifting in Kochi?", answer: "Vishu Kani — the auspicious first-sight arrangement on Vishu morning — traditionally includes konna blossoms (Indian laburnum, the golden yellow flower of Kerala). RedHeart delivers konna and seasonal yellow flowers for Vishu Kani arrangements in Kochi. Golden roses and yellow chrysanthemums are also popular Vishu gifts." }
    ]
  },

  /* ── INDORE ───────────────────────────────────────────────────────────── */
  "indore": {
    cityName: "Indore",
    metaTitle: "Flower Delivery in Indore | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Indore with same-day delivery. Roses, bouquets & arrangements to Vijay Nagar, AB Road, Palasia & all areas. From ₹399.",
    h1: "Flower Delivery in Indore",
    metaKeyword: "flower delivery in Indore, online flower delivery Indore, same day flower delivery Indore, florist Indore, send flowers Indore, midnight flower delivery Indore, flowers Vijay Nagar AB Road",
    footerContent: `
<h2>Flower Delivery in Indore — India's Cleanest City Has Colourful Taste in Flowers</h2>
<p>Indore has won the Swachh Survekshan award for India's cleanest city multiple times running, but anyone who has spent an evening on Sarafa Bazaar — eating sev khichdi and poha while vendors pack up their stalls — knows that cleanliness and vibrancy are not opposites here. Indore is Madhya Pradesh's commercial engine, its food capital, and its most cosmopolitan city by far. It is also a city that has been growing rapidly with IT parks, educational institutions, and a young professional population that values experiences, gifting, and celebration. RedHeart delivers fresh flowers across Indore with same-day and midnight delivery, starting at ₹399, to a city that has earned its reputation for high standards in everything.</p>

<p>Indore's flower supply runs through the wholesale market near Chhatripura and the Rajwada area, where flowers from Madhya Pradesh's own farms and from Maharashtra's Nasik belt arrive daily. The city's culture of celebration — particularly its devotion to Dussehra, which brings one of India's grandest public processions through Indore's streets — creates a flower demand scale that most cities of Indore's size do not experience. During Dussehra week, the whole city becomes a canvas of marigold and rose decorations.</p>

<h2>Quick Reference — Flower Delivery in Indore</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indore, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijay Nagar, AB Road, Palasia, Scheme 54, Scheme 78, LIG, MIG, Rau, Sanwer Road, Super Corridor, Bhawarkuan, Old Palasia</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dussehra, Navratri, Diwali, birthdays, weddings, corporate events</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, gerberas, tuberose, sunflowers, mixed bouquets</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City distinction</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">India's cleanest city (Swachh Survekshan champion)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Dussehra and Navratri — Indore's Grand Festival Season</h2>
<p>Indore's Dussehra procession is one of the most spectacular in central India. The effigy of Ravana at Nehru Stadium and the processions through the old city draw lakhs of people, and the city's main streets are lined with marigold and rose decorations for days. RedHeart stocks extensively for this period, with marigold garlands, rose arrangements, and seasonal flower supplies ready for the decoration demand. Navratri in Indore is celebrated with equal enthusiasm — the city's Holkar culture and its Maratha-influenced royal heritage give Navratri here a ceremonial grandeur that other MP cities do not quite match.</p>

<h2>Super Corridor and IT Indore — The New Face of the City</h2>
<p>Indore's Super Corridor — the IT and education corridor that runs from the city centre toward the airport — houses TCS, Infosys, and dozens of other tech companies, along with IIM Indore on its campus nearby. This corridor has brought a young professional demographic that gifts flowers frequently — desk bouquets, team birthday celebrations, and farewell arrangements are constant. RedHeart delivers to Super Corridor offices and the residential developments around it with the same same-day guarantee. Vijay Nagar, Indore's most active commercial and residential zone on AB Road, is one of our highest-volume delivery areas.</p>

<h2>Why Indore Chooses RedHeart</h2>
<p>Indore's identity as India's cleanest city is not accidental — it comes from a civic culture that holds itself to a standard. That culture extends to what people choose to buy and send. RedHeart fits that standard: fresh flowers that arrive in excellent condition, packaging that is presentable and eco-friendly, and delivery that respects the recipient's time. In a city that has won cleanliness by expecting better, we are proud to be the flower partner that meets that expectation.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Vijay Nagar and AB Road, Indore?", answer: "Yes, RedHeart delivers flowers same-day to Vijay Nagar, AB Road, Palasia, Scheme 54, Scheme 78, and all major areas of Indore. Orders placed before 5 PM are delivered within 2–4 hours across the city." },
      { question: "Does RedHeart deliver flowers for Dussehra and Navratri in Indore?", answer: "Yes! RedHeart stocks marigold garlands, rose arrangements, and festival flower decorations specifically for Indore's Dussehra and Navratri season. We maintain extra supply during the procession week and deliver to both homes and commercial venues across the city." },
      { question: "Can I get corporate flower delivery to the Super Corridor IT park in Indore?", answer: "Yes, RedHeart delivers to the Super Corridor, TCS campus, Infosys, and other IT offices in Indore. Corporate flower orders for team birthdays, client gifting, and event decoration are handled with professional packaging and on-time delivery." },
      { question: "What is the most popular bouquet ordered in Indore?", answer: "Mixed rose bouquets in red, pink, and yellow are Indore's consistent bestseller for personal gifting. Marigold garlands and tuberose are top choices for religious occasions. Sunflower and gerbera bouquets are popular among the city's young professional crowd for birthdays and congratulations." },
      { question: "Is midnight flower delivery available in Indore?", answer: "Yes, RedHeart offers midnight flower delivery in Indore. Place your order before 9 PM, choose the midnight slot at checkout, and we will deliver at the time you specify — ideal for birthday surprises in Indore's residential areas and gated societies." }
    ]
  }

};

async function run() {
  const BASE_URL = "https://www.redheart.in";
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers", cityName: data.cityName, slug, url: cityUrl,
      metaTitle: data.metaTitle, metaDescription: data.metaDescription,
      h1: data.h1, canonicalUrl: `${BASE_URL}${cityUrl}`,
      metaKeyword: data.metaKeyword,
      breadcrumb: [
        { label: "Home", url: "/" },
        { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
      ],
      footerContent: data.footerContent.trim(),
      faqs: data.faqs, isActive: true,
    };
    const res = await fetch(`${API_BASE}/city/upsert`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) console.error(`❌  ${data.cityName} — ${res.status}`, json);
    else console.log(`✅  ${data.cityName} — ${json._id}`);
  }
  console.log("\nDone — batch 3 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
