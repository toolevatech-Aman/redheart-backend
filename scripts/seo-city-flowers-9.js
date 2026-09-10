/**
 * Batch 9 — Thane, Goa, Srinagar, Jammu, Rajkot, Tiruchirappalli
 * node scripts/seo-city-flowers-9.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {

  "thane": {
    cityName: "Thane",
    metaTitle: "Flower Delivery in Thane | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Thane with same-day delivery. Roses, bouquets & arrangements to Ghodbunder Road, Kolshet, Majiwada & all areas. From ₹399.",
    h1: "Flower Delivery in Thane",
    metaKeyword: "flower delivery in Thane, online flower delivery Thane, same day flower delivery Thane, florist Thane, send flowers Thane, flowers Ghodbunder Road Majiwada",
    footerContent: `
<h2>Flower Delivery in Thane — The City of Lakes Has Room for Every Bloom</h2>
<p>Thane is called the City of Lakes — over 30 lakes dot its landscape, the most prominent being Masunda Lake (Talao Pali) in the heart of the city, whose promenade is one of Maharashtra's most pleasant urban walks. Thane was long considered Mumbai's suburb, but it has long since outgrown that description. With a population exceeding 2 million, its own distinct commercial identity, and residential development that stretches from Ghodbunder Road's new townships to the old wadas of Naupada and Kopri, Thane is genuinely a city — and a fast-growing one. The IT parks of Wagle Estate, the residential towers of Kasarvadavali, and the older mohallas of Thane station area all coexist in a city that has absorbed every wave of Mumbai's overflow with characteristic Maharashtrian warmth. RedHeart delivers fresh flowers across Thane with same-day and midnight delivery, starting at ₹399.</p>

<p>Thane's flower supply benefits from proximity to Dadar Phool Gali and the presence of local wholesale markets near Thane station. The city's enormous Ganesh Chaturthi celebrations — Thane's public Ganeshas at Talao Pali and in the old city's neighborhoods are among Maharashtra's most beloved — create the largest annual flower demand event.</p>

<h2>Quick Reference — Flower Delivery in Thane</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thane, Maharashtra (MMR)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghodbunder Road, Kolshet, Majiwada, Wagle Estate, Kasarvadavali, Manpada, Vartak Nagar, Naupada, Kopri, Brahmand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ganesh Chaturthi, Gudi Padwa, Diwali, birthdays, anniversaries, IT sector events</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, chrysanthemums</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">City of Lakes; Masunda Lake promenade; MMR's second-largest city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Ganesh Chaturthi at Talao Pali — Thane's Greatest Celebration</h2>
<p>The Ganesh installation at Thane's Talao Pali (Masunda Lake) is one of Maharashtra's most iconic — the idol is set on the lake's edge, with its reflection shimmering in the water, drawing lakhs of devotees across the eleven days of Chaturthi. The surrounding areas — Naupada, Kopri, and the old Thane station quarters — have neighbourhood Ganesh installations that have been celebrated by the same families for generations. Fresh marigolds, chrysanthemums, and tuberose are required daily for each installation. RedHeart builds dedicated Ganesh Chaturthi stock for Thane, with bulk options for residential societies and community organisations throughout the festival period.</p>

<h2>Ghodbunder Road — Thane's New Skyline</h2>
<p>Ghodbunder Road is Thane's most dramatic urban transformation — what was a relatively quiet road 15 years ago is now lined with residential towers housing hundreds of thousands of young professional families. Kasarvadavali, Brahmand, Manpada, and Kolshet along this corridor are among the fastest-growing delivery zones in the MMR. These apartment-dwelling families order online regularly — birthdays, anniversaries, Valentine's Day, and the whole calendar of modern occasions. Wagle Estate, Thane's IT and industrial zone, adds a corporate delivery dimension. Majiwada, the commercial junction on Ghodbunder Road, anchors the new city's commerce.</p>

<h2>Why Thane Chooses RedHeart</h2>
<p>Thane is a city that gets things done — it has grown from a lakeside town to a metropolis with characteristic Mumbai-region efficiency. RedHeart matches that efficiency: fresh flowers, fast delivery, no fuss. In the City of Lakes, where the Masunda Lake reflects the sky and the city moves at its own confident pace, RedHeart delivers every bloom on time.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Ghodbunder Road and Kasarvadavali, Thane?", answer: "Yes, RedHeart covers Ghodbunder Road, Kasarvadavali, Brahmand, Manpada, Kolshet, Majiwada, Wagle Estate, Vartak Nagar, and all major Thane areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order Ganesh Chaturthi flowers for delivery in Thane?", answer: "Yes! RedHeart delivers marigold garlands, chrysanthemum strings, tuberose, and Ganesh Chaturthi decoration flowers across Thane throughout the eleven-day festival. We have dedicated festival stock and can handle both home orders and society-level bulk orders." },
      { question: "Does RedHeart deliver to apartment complexes on Ghodbunder Road, Thane?", answer: "Yes! All residential towers and societies on Ghodbunder Road — from Kasarvadavali to Brahmand — are covered by RedHeart. Specify your tower name, wing, and flat number and we deliver directly to your door." },
      { question: "Does RedHeart deliver to Wagle Estate IT offices in Thane?", answer: "Yes, Wagle Estate is fully covered for corporate flower deliveries. We handle desk flowers, birthday surprises at office addresses, and event flowers for Thane's IT and industrial sector." },
      { question: "Is midnight flower delivery available in Thane?", answer: "Yes, midnight delivery is available across Thane including Ghodbunder Road, Naupada, Kopri, and all areas. Order before 9 PM and choose your time." }
    ]
  },

  "goa": {
    cityName: "Goa",
    metaTitle: "Flower Delivery in Goa | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Goa with same-day delivery. Roses, tropical bouquets to Panaji, Margao, Calangute, Baga & all areas. From ₹399.",
    h1: "Flower Delivery in Goa",
    metaKeyword: "flower delivery in Goa, online flower delivery Goa Panaji, same day flower delivery Goa, florist Goa, send flowers Goa, flowers Panaji Margao Calangute",
    footerContent: `
<h2>Flower Delivery in Goa — Where Every Day Deserves Tropical Blooms</h2>
<p>Goa is India's smallest state and its most-visited destination — 8 million tourists a year come to its 105-km coastline for the beaches, the Portuguese colonial architecture, the spice plantations, the seafood, and an atmosphere of relaxed celebration that is uniquely Goan. But Goa is also home to 1.5 million permanent residents who have a deep, layered culture shaped by 450 years of Portuguese rule, a vibrant Catholic tradition, a proud Konkani Hindu identity, and a natural world of extraordinary beauty — the Western Ghats rise just behind the coast, and Goa's forests are among India's most biodiverse. Flowers in Goa are part of every life and every occasion — from the cascading bougainvillea that climbs every village wall to the white lilies at the Feast of St. Francis Xavier. RedHeart delivers fresh flowers across Goa with same-day and midnight delivery, starting at ₹399.</p>

<p>Goa's flower supply comes from local farms in Ponda and the interior talukas, supplemented by supply from Goa's border with Maharashtra. The tropical climate supports a year-round flower season — frangipani, heliconia, and bird of paradise grow abundantly in Goan gardens, while cultivated roses, marigolds, and anthuriums arrive from Karnataka and Maharashtra supply chains.</p>

<h2>Quick Reference — Flower Delivery in Goa</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">State</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Goa (full state coverage)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panaji, Margao, Calangute, Baga, Panjim, Porvorim, Mapusa, Vasco da Gama, Ponda, Candolim, Anjuna</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Christmas, Feast of St. Francis Xavier, Carnival, Shigmo (Goan Holi), birthdays, destination weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, anthuriums, tropical mixed, marigolds, white lilies, frangipani-inspired</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">India's beach destination; Portuguese heritage; Konkani culture; tourism capital</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Christmas and Goa's Catholic Flower Traditions</h2>
<p>Christmas in Goa is the most elaborate in India. The Basilica of Bom Jesus (where St. Francis Xavier's incorruptible remains lie, a UNESCO World Heritage Site), the Se Cathedral in Old Goa, and the hundreds of village churches across the state are decorated with white lilies, poinsettias, and roses for the Christmas season. Midnight Mass on December 24 is a major social occasion — Goan families dress well, attend church, and celebrate with food and flowers. The Feast of St. Francis Xavier (December 3) draws Catholics from across Asia and sees the Basilica decorated with extraordinary fresh flowers. RedHeart delivers Christmas flower arrangements, white lily bunches, and festive tropical bouquets across Goa with same-day delivery throughout the December season.</p>

<h2>Beach Weddings and Romantic Goa</h2>
<p>Goa is India's destination wedding capital — the beaches of Calangute, Candolim, Anjuna, and Palolem host hundreds of beach weddings every winter season (October to March). Flowers for a Goa beach wedding carry a different aesthetic than an inland wedding: tropical flowers, bright colours, anthurium and heliconia, frangipani garlands, and the lush greenery of the Goan coast as backdrop. RedHeart delivers beach wedding flowers to Goa's resort venues, beach-facing hotels, and villa rentals. We also handle the personal gifting that accompanies Goa tourism — the romantic anniversary arrangement to a Calangute hotel, the birthday surprise for a friend celebrating in Goa, the welcome flowers in a Porvorim villa.</p>

<h2>Why Goa Chooses RedHeart</h2>
<p>Goa lives at its own pace — susegad, the Goan concept of contentment and relaxed living, is the state's cultural philosophy. RedHeart adapts to that pace: we deliver reliably, we source tropical and seasonal flowers that fit Goa's natural aesthetic, and we handle the state's unique combination of resident life and destination tourism with equal service quality. In God's own garden, RedHeart brings the best blooms to every occasion.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to beach resorts and hotels in Goa?", answer: "Yes! RedHeart delivers to beach resorts, hotels, and villas across North Goa (Calangute, Baga, Candolim, Anjuna) and South Goa (Palolem, Colva, Benaulim). We handle anniversary room setups, birthday surprises, and beach wedding flower deliveries." },
      { question: "Can I order Christmas flowers for delivery in Goa?", answer: "Yes! RedHeart delivers white lilies, poinsettias, roses, and Christmas flower arrangements across Goa for the Christmas season. We stock specifically for Goa's significant Catholic Christmas celebrations and deliver to homes, churches, and event venues." },
      { question: "Is same-day flower delivery available in Panaji, Margao, and Mapusa, Goa?", answer: "Yes, RedHeart covers Panaji, Margao, Mapusa, Porvorim, Vasco da Gama, Ponda, Calangute, Candolim, and all major Goa locations with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I get tropical flower arrangements delivered in Goa?", answer: "Yes! RedHeart offers tropical-inspired arrangements including anthuriums, mixed tropical bouquets, and Goa-appropriate floral designs that match the state's natural aesthetic — distinct from the classic rose bouquets typical of other cities." },
      { question: "Is midnight flower delivery available in Goa?", answer: "Yes, midnight delivery is available across Goa. Perfect for beach resort birthday surprises, villa anniversary setups, and romantic gestures on Goa's beautiful coastline. Order before 9 PM and choose your time." }
    ]
  },

  "srinagar": {
    cityName: "Srinagar",
    metaTitle: "Flower Delivery in Srinagar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Srinagar with same-day delivery. Roses, tulips & Dal Lake bouquets to Lal Chowk, Rajbagh, Hyderpora & all areas. From ₹399.",
    h1: "Flower Delivery in Srinagar",
    metaKeyword: "flower delivery in Srinagar, online flower delivery Srinagar, same day flower delivery Srinagar Kashmir, florist Srinagar, send flowers Srinagar, tulips flowers Srinagar",
    footerContent: `
<h2>Flower Delivery in Srinagar — The Valley of Flowers Has a City at Its Heart</h2>
<p>Srinagar is perhaps the most naturally beautiful city in India. The city sits at 1,585 metres above sea level in the Kashmir Valley, with the Jhelum river running through its heart, the Dal Lake spreading to its north-east, and the Zabarwan Mountains rising behind. The Mughal gardens — Shalimar Bagh, Nishat Bagh, Chashme Shahi — were planted by the Emperor Jahangir who famously declared: "If there is paradise on earth, it is here, it is here, it is here." The tulip garden at Siraj Bagh, opened in 2007 and expanded since, is Asia's largest tulip garden, with over 1.5 million tulips blooming in April's brief, spectacular spring. Flowers in Srinagar are not just a gift — they are the city's weather, its seasons, its reason for being visited. RedHeart delivers fresh flowers across Srinagar with same-day and midnight delivery, starting at ₹399.</p>

<p>Srinagar's flower supply comes from the valley's own farms — the Kashmir Valley produces roses, tulips, and saffron in conditions that no other Indian region can replicate. The cool mountain climate means flowers stay fresh longer here than anywhere else in the country. The local flower market near Lal Chowk and the florist concentration in Rajbagh supply the city.</p>

<h2>Quick Reference — Flower Delivery in Srinagar</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Srinagar, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lal Chowk, Rajbagh, Hyderpora, Jawahar Nagar, Bemina, Nowgam, Hazratbal, Soura, Dal Lake area, Nishat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tulip season (April), Eid, Shivratri (Herath), birthdays, houseboats & tourism</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses (Kashmir valley roses), tulips (seasonal), irises, marigolds, tuberose</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dal Lake; Asia's largest tulip garden; Mughal gardens; "Paradise on Earth"</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Eid in Srinagar — The Valley's Most Celebrated Festival</h2>
<p>Srinagar's Eid ul-Fitr, marking the end of Ramzan, is one of India's most moving celebrations. The Hazratbal mosque — housing the Moi-e-Muqqaddas, a hair of the Prophet Mohammed, and considered the holiest shrine in Kashmir — fills with hundreds of thousands of devotees for Eid prayers. The city's streets, decorated with lights throughout Ramzan, come alive with rose petals on Eid morning. Families exchange rose bouquets, tuberose garlands, and sweet gifts. The tradition of gifting flowers on Eid is deeply embedded in Kashmiri culture — roses from the valley's own farms, fresher than anywhere else in India, are the gift of choice. RedHeart ensures full Eid stock for Srinagar's residents.</p>

<h2>Dal Lake to Hyderpora — Srinagar's Urban Life</h2>
<p>The Dal Lake area — the houseboats, the Nishat and Shalimar Bagh gardens, the Shankaracharya temple hillside — is Srinagar's tourist face. Delivery here is often for houseboat romance: anniversary flowers on the Lake, birthday arrangements on a shikhara. Rajbagh is Srinagar's most prestigious residential address — the diplomatic and bureaucratic families of J&K's administrative establishment live here in quiet bungalows. Jawahar Nagar and Hyderpora are modern residential zones with young professional families. Bemina and Nowgam are larger residential areas on the city's western edge. Soura, near the medical complex, is a significant residential and commercial zone.</p>

<h2>Why Srinagar Trusts RedHeart</h2>
<p>Srinagar grows some of the world's finest roses — the Kashmiri gulab is prized across South Asia for its fragrance and form. In a city whose soil and climate produce flowers of extraordinary quality, our standards are set high by the local benchmark. RedHeart delivers to Srinagar with the pride that comes from serving a city where flowers are not an afterthought but a native excellence.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to houseboats on Dal Lake in Srinagar?", answer: "Yes! RedHeart delivers to houseboats on Dal Lake and the surrounding shikara access points. Specify your houseboat name and we coordinate delivery — perfect for anniversary and birthday surprises on the iconic Kashmiri houseboats." },
      { question: "Can I order Eid flowers for delivery in Srinagar?", answer: "Yes! RedHeart delivers rose bouquets, tuberose garlands, and Eid flower arrangements across Srinagar. We stock Valley-grown Kashmiri roses specifically for Eid season — the finest roses in India, available at your door on Eid morning." },
      { question: "Is same-day flower delivery available in Rajbagh and Hyderpora, Srinagar?", answer: "Yes, RedHeart covers Rajbagh, Hyderpora, Jawahar Nagar, Lal Chowk, Bemina, Hazratbal, Soura, and all major Srinagar areas with same-day delivery." },
      { question: "Can I get tulips delivered in Srinagar during spring season?", answer: "Yes! During the spring tulip season (late March to mid-April), RedHeart sources and delivers fresh tulips in Srinagar — taking full advantage of the Asia's largest tulip garden and the Kashmir Valley's natural tulip cultivation. Seasonal availability." },
      { question: "Is midnight flower delivery available in Srinagar?", answer: "Yes, midnight delivery is available across Srinagar. Order before 9 PM and choose your time — perfect for birthday and anniversary surprises in Rajbagh, on a Dal Lake houseboat, or anywhere in the valley." }
    ]
  },

  "jammu": {
    cityName: "Jammu",
    metaTitle: "Flower Delivery in Jammu | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jammu with same-day delivery. Roses, marigolds & Navratri bouquets to Gandhi Nagar, Trikuta Nagar, Rehari & all areas. From ₹399.",
    h1: "Flower Delivery in Jammu",
    metaKeyword: "flower delivery in Jammu, online flower delivery Jammu, same day flower delivery Jammu, florist Jammu, send flowers Jammu, Vaishno Devi flowers Jammu",
    footerContent: `
<h2>Flower Delivery in Jammu — The City of Temples at the Gateway to the Mountains</h2>
<p>Jammu is the winter capital of Jammu & Kashmir and the gateway to two of India's most sacred pilgrimage destinations: the Vaishno Devi shrine in the Trikuta Mountains (receiving over 10 million pilgrims annually, one of the most visited pilgrimage sites in the world) and the Amarnath cave shrine in the high Himalayas. Jammu itself — spread on the southern bank of the Tawi river — is a city of temples: the Raghunath Mandir, the Ranbireshwar temple with its twelve-foot Shiva lingams, and the Bahu Fort temple are among dozens that give the city its character. Jammu has a Dogra cultural identity — distinct from both Kashmiri and Punjabi culture — warm, devotion-filled, and proud. RedHeart delivers fresh flowers across Jammu with same-day and midnight delivery, starting at ₹399.</p>

<p>Jammu's flower supply comes from the wholesale market near Gandhi Nagar and the daily market near Raghunath Bazar. Punjab's Pathankot supply chain is close, ensuring consistent freshness. The pilgrimage season (March to November for Vaishno Devi, July-August for Amarnath) creates the city's highest flower demand as millions of pilgrims pass through buying offerings.</p>

<h2>Quick Reference — Flower Delivery in Jammu</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jammu, Jammu & Kashmir</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi Nagar, Trikuta Nagar, Rehari, Bakshi Nagar, Narwal, Old Jammu, Talab Tillo, Gangyal, Parade, Channi Himmat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navratri (Dogra-style), Shivratri, Baisakhi, pilgrim season (Vaishno Devi), birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, jasmine, gladioli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">City of Temples; Vaishno Devi gateway; Dogra cultural heartland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Navratri in Jammu — When the Whole City Celebrates Shakti</h2>
<p>Jammu's Navratri celebrations have a distinctive Dogra character — the devotion to Mata Vaishno Devi is central, and the nine nights of Navratri see the entire city in a state of spiritual celebration. Jagran nights (overnight devotional singing) are held in every neighbourhood; the Kali Mata temples receive thousands of devotees; marigold garlands are offered at every shrine. The Navratri flower demand in Jammu rivals that of any other city in India — the combination of personal home puja, temple offerings, and the city's role as the primary staging point for Vaishno Devi yatra means flowers are consumed in extraordinary quantities. RedHeart prepares dedicated Navratri stock for Jammu weeks in advance.</p>

<h2>Gandhi Nagar to Trikuta Nagar — Jammu's Modern Life</h2>
<p>Gandhi Nagar is Jammu's most established residential area — wide roads, older bungalows, and the government and administrative families who have made Jammu their permanent home. Trikuta Nagar, named for the sacred Trikuta Mountains where Vaishno Devi resides, is Jammu's most modern and rapidly growing residential zone — planned townships, new apartment complexes, and a young professional population. Bakshi Nagar is a significant middle-class area with consistent year-round demand. Narwal, the industrial area on the Delhi-Srinagar National Highway, has a large working-class township population. Talab Tillo and Channi Himmat are established zones on the city's western side.</p>

<h2>Why Jammu Orders From RedHeart</h2>
<p>Jammu's devotion — to Mata Vaishno Devi, to the Shiva temples, to the daily puja that is as natural as morning tea in a Dogra household — requires flowers that live up to the offering. RedHeart brings marigolds and roses to Jammu that are fresh enough to place before the Goddess with confidence. In the City of Temples, the flowers must be worthy of worship — and that is the standard we maintain.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Navratri flowers in Jammu?", answer: "Yes! RedHeart delivers marigold garlands, tuberose, jasmine, and festival flowers for Jammu's Navratri celebrations. We prepare dedicated Navratri stock weeks in advance and deliver throughout the nine nights to homes, temple areas, and jagran venues across the city." },
      { question: "Can I order flowers for Vaishno Devi yatra preparations in Jammu?", answer: "Yes! RedHeart delivers flower offerings — marigold garlands, rose petals, and tuberose bunches — for pilgrims preparing for Vaishno Devi yatra. Many pilgrims pick up fresh offerings in Jammu before beginning the trek." },
      { question: "Is same-day flower delivery available in Gandhi Nagar and Trikuta Nagar, Jammu?", answer: "Yes, RedHeart covers Gandhi Nagar, Trikuta Nagar, Bakshi Nagar, Rehari, Narwal, Talab Tillo, and all major Jammu areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "What flowers are most popular in Jammu?", answer: "Marigolds are essential for Jammu's temple-going culture — daily puja offerings and festival garlands. Roses are the top personal gift. Tuberose is widely used for home puja and weddings. Gladioli are popular for major Dogra celebration occasions." },
      { question: "Is midnight flower delivery available in Jammu?", answer: "Yes, midnight delivery is available across Jammu. Order before 9 PM and choose your time — perfect for birthday surprises in Gandhi Nagar, Trikuta Nagar, or any Jammu address." }
    ]
  },

  "rajkot": {
    cityName: "Rajkot",
    metaTitle: "Flower Delivery in Rajkot | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Rajkot with same-day delivery. Roses, marigolds & Navratri bouquets to Kalawad Road, Yagnik Road, Kalavad & all areas. From ₹399.",
    h1: "Flower Delivery in Rajkot",
    metaKeyword: "flower delivery in Rajkot, online flower delivery Rajkot, same day flower delivery Rajkot, florist Rajkot, send flowers Rajkot, Navratri flowers Rajkot",
    footerContent: `
<h2>Flower Delivery in Rajkot — Saurashtra's Heart Beats with Culture and Commerce</h2>
<p>Rajkot is the cultural and commercial capital of Saurashtra — the peninsula of Gujarat that juts into the Arabian Sea with a distinct identity shaped by the Kathiawari culture, the Jain and Vaishnav traditions, and the agrarian wealth of one of India's most prosperous farming regions. Rajkot was also the childhood home of Mahatma Gandhi — he spent his formative years here when his father was the Diwan of Rajkot, and Alfred High School (now Mohandas Gandhi Vidyalaya) where he studied still stands in the city. The Rajkot of today is an industrial and commercial city — engineering goods, ceramics, and a growing IT sector — but its cultural roots in Kathiawari Gujarati tradition give it a distinct identity. RedHeart delivers fresh flowers across Rajkot with same-day and midnight delivery, starting at ₹399.</p>

<p>Rajkot's flower supply comes from the wholesale market near Sadar Bazar and the flower belt along Gondal Road. Gujarat's farms supply marigolds, roses, and tuberose reliably. Rajkot's Navratri — the Gujarati nine nights of Garba — is celebrated with the city's characteristic passion, and flower demand during this period is among Gujarat's highest outside Ahmedabad and Vadodara.</p>

<h2>Quick Reference — Flower Delivery in Rajkot</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajkot, Gujarat (Saurashtra)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalawad Road, Yagnik Road, University Road, Mavdi, Kotecha Chowk, 150 Feet Ring Road, Aji Industrial Area, Raiya Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navratri (Garba), Diwali, Janmashtami (Kathiawad devotion), birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, chrysanthemums, gerberas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gandhi's childhood home; Saurashtra's capital; Kathiawari culture</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Janmashtami in Rajkot — Kathiawad's Deepest Devotion</h2>
<p>Saurashtra's connection to Lord Krishna is ancient — Dwarka, the city Krishna built on the Gujarat coast, is just 200 km from Rajkot, and the Kathiawad region has always felt itself to be in Krishna's own country. Janmashtami in Rajkot is celebrated with a devotion that reflects this proximity — the Swaminarayan temple, the Sahajanand Swami temple, and the numerous Vaishnav mandirs across the city are decorated with exceptional fresh flower arrangements for the midnight Krishna birth celebration. Flower consumption during Rajkot's Janmashtami is second only to Navratri in scale. RedHeart prepares dedicated stock for both Janmashtami and Navratri seasons.</p>

<h2>Kalawad Road to Mavdi — Rajkot's Residential Spread</h2>
<p>Kalawad Road is Rajkot's fastest-growing corridor — new apartment complexes and commercial developments have transformed this road in the past decade into the city's most active real estate zone. University Road carries the academic character of Saurashtra University and the professional families who cluster nearby. Mavdi and Yagnik Road are established middle-class residential areas with consistent year-round gifting demand. The 150 Feet Ring Road that encircles newer Rajkot has created a suburban belt of residential development. Aji Industrial Area, where Rajkot's engineering and ceramic manufacturers are based, has a large worker and officer population.</p>

<h2>Why Rajkot Chooses RedHeart</h2>
<p>Rajkot is a city that works hard and celebrates joyfully — the Kathiawari character combines industriousness with a love of music, festivity, and beautiful things. Navratri Garba nights in Rajkot are legendary for their energy and colour. RedHeart brings flowers worthy of those celebrations — fresh, generous, and delivered reliably to every corner of Saurashtra's capital. In Gandhi's childhood city, where simplicity and quality are not contradictions, RedHeart is proud to serve.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Navratri flowers in Rajkot?", answer: "Yes! Navratri is Rajkot's biggest flower occasion. RedHeart delivers marigold garlands, tuberose, chrysanthemums, and festival flower torans across Rajkot throughout the nine-night Garba season. We stock heavily for Navratri and deliver to homes, Garba venues, and community spaces." },
      { question: "Is same-day flower delivery available in Kalawad Road and University Road, Rajkot?", answer: "Yes, RedHeart covers Kalawad Road, University Road, Yagnik Road, Mavdi, 150 Feet Ring Road, Raiya Road, and all major Rajkot areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order Janmashtami flowers in Rajkot?", answer: "Yes! RedHeart delivers fresh roses, marigolds, and tuberose for Janmashtami temple decorations and home puja across Rajkot. We maintain dedicated stock for this major Saurashtra festival." },
      { question: "What flowers are most popular in Rajkot?", answer: "Marigolds dominate all festival and religious occasions in Rajkot. Tuberose is essential for Navratri and wedding functions. Roses are the top personal gift. Chrysanthemums are popular for home decoration and festival arrangements. All available with same-day Rajkot delivery." },
      { question: "Is midnight flower delivery available in Rajkot?", answer: "Yes, midnight delivery is available across Rajkot. Order before 9 PM and choose your time — perfect for birthday and anniversary surprises in Kalawad Road, Mavdi, or any Rajkot address." }
    ]
  },

  "tiruchirappalli": {
    cityName: "Tiruchirappalli",
    metaTitle: "Flower Delivery in Tiruchirappalli (Trichy) | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Tiruchirappalli with same-day delivery. Jasmine, roses & bouquets to Thillai Nagar, Ariyamangalam, Srirangam & all areas. From ₹399.",
    h1: "Flower Delivery in Tiruchirappalli",
    metaKeyword: "flower delivery in Tiruchirappalli Trichy, online flower delivery Trichy, same day flower delivery Tiruchirappalli, florist Trichy, send flowers Trichy, flowers Srirangam Thillai Nagar",
    footerContent: `
<h2>Flower Delivery in Tiruchirappalli — Where the Rock Fort Watches Over the Cauvery's Flowers</h2>
<p>Tiruchirappalli — Trichy to the Tamil world — sits at the Cauvery delta's head, where the sacred river splits into the Cauvery and the Kollidam. The city's most visible landmark is the Rockfort Ucchi Pillayar temple — a Ganesha shrine cut directly into a 90-metre granite rock that rises from the plains, accessible only by climbing 437 steps. But Trichy's deeper fame is the Srirangam island — the largest functioning temple complex in the world by area, Sri Ranganathaswamy temple, whose 21 gopurams and 39 pavilions spread across 156 acres on the island in the middle of the Cauvery. The flowers offered daily at Srirangam — jasmine, tuberose, marigolds, lotus — represent the most sustained tradition of floral worship in South India. RedHeart delivers fresh flowers across Tiruchirappalli with same-day and midnight delivery, starting at ₹399.</p>

<p>Trichy's flower supply comes from the wholesale market at Ariyamangalam and the daily market near the Rockfort. The Cauvery delta's fertile farmland grows jasmine, marigolds, and tuberose in abundance — some of the finest in Tamil Nadu. The proximity to Madurai's jasmine farms means fresh malli arrives in Trichy market early every morning.</p>

<h2>Quick Reference — Flower Delivery in Tiruchirappalli</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruchirappalli (Trichy), Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thillai Nagar, Ariyamangalam, Srirangam, K.K. Nagar (Trichy), Woraiyur, Anna Nagar (Trichy), Puthur, Karur Bypass, NIT Trichy</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vaikunta Ekadasi (Srirangam), Panguni Uthiram, Pongal, Aadi Perukku, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine (malli), marigolds, roses, tuberose, chrysanthemums, lotus</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Srirangam — world's largest temple complex; Rockfort; Cauvery delta city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Vaikunta Ekadasi at Srirangam — The Greatest Flower Day</h2>
<p>Vaikunta Ekadasi, the 11th day of the Margazhi month (December-January), is Srirangam's most sacred day — the Paramapada Vasal (the gateway to Vaikunta/paradise) at Sri Ranganathaswamy temple is opened only on this day each year, and millions of devotees come from across South India to pass through it, believing it guarantees liberation. The flower decorations on Vaikunta Ekadasi are extraordinary — every corridor and gopuram of the 156-acre temple complex receives fresh flowers, and the queue to enter begins days in advance. RedHeart prepares Vaikunta Ekadasi flower stock for Trichy's residents — marigolds, jasmine, tuberose, and lotus for home puja before the temple visit, and personal offerings to carry to Srirangam.</p>

<h2>Thillai Nagar to NIT Trichy — The City's Modern Addresses</h2>
<p>Thillai Nagar is Trichy's most prestigious residential area — planned, well-maintained, and home to the city's professionals, educators, and business families. The NIT Trichy (National Institute of Technology) campus on the Cauvery's banks is one of India's premier engineering institutions, and its faculty and student population constitute a significant delivery zone for academic occasion flowers. Ariyamangalam and K.K. Nagar are large middle-class residential areas with consistent demand. Woraiyur, the older city area near the Rockfort, carries Trichy's traditional culture. Srirangam island itself, with its dense residential population adjacent to the temple, is fully covered.</p>

<h2>Why Trichy Trusts RedHeart</h2>
<p>Trichy is a city whose flower culture is measured in temple worship cycles — the Srirangam temple's daily puja alone requires flowers that a small farm would produce in a week. In a city where flowers are sacred, RedHeart's freshness standards are not optional but essential. We deliver to Trichy's homes and temples with the quality that the Cauvery's most sacred city deserves.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver temple flowers for Srirangam in Tiruchirappalli?", answer: "Yes! RedHeart delivers jasmine, marigolds, tuberose, and lotus for Sri Ranganathaswamy temple offerings and home puja across Tiruchirappalli. We maintain fresh stock especially during Vaikunta Ekadasi, Panguni Uthiram, and other major Srirangam festival periods." },
      { question: "Is same-day flower delivery available in Thillai Nagar and Ariyamangalam, Trichy?", answer: "Yes, RedHeart covers Thillai Nagar, Ariyamangalam, Srirangam, K.K. Nagar, Woraiyur, Anna Nagar, and all major Tiruchirappalli areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Does RedHeart deliver flowers to NIT Trichy campus?", answer: "Yes! NIT Tiruchirappalli campus is covered by RedHeart. We deliver for faculty felicitations, farewell bouquets, and personal gifting to campus addresses with same-day delivery." },
      { question: "What flowers are most popular in Tiruchirappalli?", answer: "Jasmine (malli) is the essential daily flower in every Tamil home and for Srirangam temple offerings. Marigolds and tuberose are used for all major puja and festivals. Roses are the top personal gift. Lotus is used for special temple occasions and Lakshmi puja." },
      { question: "Is midnight flower delivery available in Tiruchirappalli?", answer: "Yes, midnight delivery is available across Trichy. Order before 9 PM and choose your time — perfect for birthday surprises in Thillai Nagar, Ariyamangalam, or any Tiruchirappalli address." }
    ]
  }

};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category: "Flowers", cityName: data.cityName, slug, url: cityUrl,
      metaTitle: data.metaTitle, metaDescription: data.metaDescription,
      h1: data.h1, canonicalUrl: `${BASE_URL}${cityUrl}`,
      metaKeyword: data.metaKeyword,
      breadcrumb: [
        { label: "Home", url: "/" }, { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
      ],
      footerContent: data.footerContent.trim(), faqs: data.faqs, isActive: true,
    };
    const res = await fetch(`${API_BASE}/city/upsert`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) console.error(`❌  ${data.cityName} — ${res.status}`, json);
    else console.log(`✅  ${data.cityName} — ${json._id}`);
  }
  console.log("\nDone — batch 9 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
