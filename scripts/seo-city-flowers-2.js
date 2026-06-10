/**
 * City landing pages — Flowers — Batch 2 (Pune, Kolkata, Ahmedabad, Jaipur, Noida)
 * Calls POST /api/city/upsert on the live backend for each city.
 * Run: node scripts/seo-city-flowers-2.js
 */
const API_BASE = "https://backend.redheart.in/api";

const CITIES = {

  /* ══════════════════════════════════════════════════════════════════════════
     PUNE
  ══════════════════════════════════════════════════════════════════════════ */
  "pune": {
    cityName: "Pune",
    metaTitle: "Flower Delivery in Pune | Same-Day & Midnight | RedHeart",
    metaDescription: "Send fresh flowers in Pune with same-day & midnight delivery. Roses, bouquets & arrangements to Koregaon Park, Baner, Viman Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Pune",
    metaKeyword: "flower delivery in Pune, online flower delivery Pune, same day flower delivery Pune, florist Pune, send flowers Pune, midnight flower delivery Pune, roses Koregaon Park Baner",
    footerContent: `
<h2>Flower Delivery in Pune — The Oxford of the East Has a Soft Spot for Flowers</h2>
<p>Pune operates at a frequency that is all its own — unhurried enough to enjoy a good cup of tea, busy enough to run some of India's most important defence research, automotive manufacturing, and IT campuses. The city's enormous student population — drawn by Fergusson, Symbiosis, Pune University, and dozens of institutions — coexists with Pune's old Peth culture, its Ganesh Chaturthi passion, and the new-money energy of Baner and Hinjewadi. Flowers in Pune do the same work they do in every city — mark celebrations, express love, signal care — but they do it in a city that has the space and temperament to appreciate them properly. RedHeart delivers fresh flowers across Pune with same-day and midnight delivery, starting at ₹399.</p>

<p>Pune's flower supply runs through Gultekdi Market — the main wholesale hub where roses from Talegaon and Pune's own rose-growing belt (the Sahyadri foothills around Mahabaleshwar supply some of Maharashtra's finest cut roses) arrive each morning. The air around Gultekdi in the early hours is lush with fragrance, and it is this freshness that RedHeart brings to your door. Pune is close enough to major rose farms that the supply chain here is among the shortest in western India — good news for anyone who cares about how fresh their bouquet is when it arrives.</p>

<h2>Quick Reference — Flower Delivery in Pune</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead>
    <tr style="background:#fdf2f8;">
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th>
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pune (Pimpri-Chinchwad included)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Koregaon Park, Baner, Viman Nagar, Kharadi, Hinjewadi, Wakad, Aundh, Kothrud, Hadapsar, Kondhwa, Camp, Deccan, Shivajinagar, Pimpri, Chinchwad, Magarpatta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top flower occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ganesh Chaturthi, anniversaries, birthdays, Valentine's Day, Navratri, college fests</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Most popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, sunflowers, mixed bouquets</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Local flower hub</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gultekdi Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Order cut-off (same-day)</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">5:00 PM</td></tr>
  </tbody>
</table>

<h2>Ganesh Chaturthi — Pune's Most Magnificent Flower Festival</h2>
<p>No city in the world celebrates Ganesh Chaturthi with the intensity of Pune. The Kasba Ganapati — Pune's presiding deity — draws hundreds of thousands over ten days in a celebration that is part religious festival, part city-wide cultural event, and entirely spectacular. Every mandap — from the Dagdusheth Halwai Ganapati to neighbourhood mandals in Hadapsar and Pimpri — is decorated with thousands of marigolds, roses, and seasonal flowers arranged in elaborate patterns. The city's total flower consumption during Chaturthi week exceeds what most cities use in a month. RedHeart prepares dedicated marigold and festive flower stock well ahead of Chaturthi season, with extended delivery hours and priority dispatch for festival orders across Pune.</p>

<h2>Pune's Student Culture — Flowers for Every College Moment</h2>
<p>Pune's student population is enormous and its college calendar is full of gifting occasions. Farewell parties in the last week of the academic year bring surges of mixed bouquet orders. Teachers' Day sees flowers going to faculty across Fergusson, SP College, Symbiosis, MIT, and dozens of others. Valentines' week in Pune is practically a city-wide event, with the Koregaon Park-Kalyani Nagar corridor buzzing with romantic gifting from February 7 through February 14. RedHeart handles student orders with the same care as any other — budget-friendly options starting at ₹399 mean no one in Pune has to give a less-than-lovely bouquet just because they're a student.</p>

<h2>Koregaon Park to Hinjewadi — Pune's Diverse Delivery Landscape</h2>
<p>Koregaon Park and Kalyani Nagar are Pune's premium residential and social zones — tree-lined streets, fine dining, boutique hotels, and expat apartments all requiring premium flower deliveries. Baner, Balewadi, and Aundh are the newer IT-residential corridors where young professionals receive birthday bouquets and anniversary roses. Hinjewadi IT Park — home to Infosys, Wipro, Tech Mahindra, and hundreds of tech companies — requires corporate flower deliveries for client visits, team celebrations, and event arrangements. Kharadi and Magarpatta, Pune's planned IT townships on the eastern edge, are fully covered. The old Peths — Sadashiv Peth, Narayan Peth, Shaniwar Peth — carry Pune's historical character and see demand for traditional puja flowers alongside modern gifting.</p>

<h2>Popular Flowers in Pune — What the City Loves</h2>
<ul>
  <li><strong>Roses:</strong> Red roses for romance, pink and yellow for friendships and birthdays — universally loved</li>
  <li><strong>Marigolds:</strong> Ganesh Chaturthi, Diwali, Navratri, housewarming pujas — essential ritual flower</li>
  <li><strong>Gerberas:</strong> Colourful and cheerful — very popular in Pune's young-professional and college crowd</li>
  <li><strong>Sunflowers:</strong> Optimistic and bright — popular for congratulations, new jobs, house-warmings</li>
  <li><strong>Mixed seasonal bouquets:</strong> The safe, well-loved choice for office gifting and college occasions</li>
</ul>

<h2>Why Pune Relies on RedHeart</h2>
<p>Pune's residents are thoughtful consumers — they compare, read reviews, and have opinions. A flower service that delivers wilted roses or shows up two hours late gets talked about in apartment WhatsApp groups and office chat threads. RedHeart's Pune service is built around the awareness that this city has high expectations and a vocal community. Fresh flowers every day, reliable same-day delivery, and customer support that actually responds — these are the fundamentals. We have served Pune consistently enough to have earned the recommendation of the Koregaon Park apartment building resident who tells her building WhatsApp group about the roses that arrived perfectly two hours after she ordered them.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to Hinjewadi IT Park in Pune?", answer: "Yes, RedHeart delivers flowers to Hinjewadi IT Park, Wakad, Baner, and Aundh in Pune's IT corridor. We handle corporate flower orders for offices, campus celebrations, and client gifting in Hinjewadi and the surrounding tech zones with same-day delivery." },
      { question: "Can I order marigold garlands for Ganesh Chaturthi in Pune?", answer: "Yes! RedHeart stocks dedicated marigold garlands and festival flower arrangements for Ganesh Chaturthi in Pune. Given Pune's legendary Chaturthi celebrations, we maintain heavy stock during the festival period and offer extended delivery hours to serve mandals and home altars across the city." },
      { question: "What is the cheapest flower bouquet delivered in Pune?", answer: "Flower delivery in Pune starts from ₹399 on RedHeart. Entry-level mixed bouquets and single-variety rose bunches are available in this range. We have options for every budget — from student-friendly arrangements to premium designer bouquets — all delivered same-day across Pune." },
      { question: "Does RedHeart deliver flowers in Pimpri-Chinchwad?", answer: "Yes, RedHeart covers Pimpri, Chinchwad, Akurdi, Nigdi, and the broader Pimpri-Chinchwad Municipal Corporation area with same-day flower delivery. Our delivery network extends fully across the Pune Metropolitan Region." },
      { question: "Can I get midnight flower delivery in Pune for a birthday surprise?", answer: "Yes! Midnight flower delivery is available in Pune. Place your order before 9 PM, select the midnight time slot, and our delivery partner will arrive at the exact time you choose for the perfect birthday or anniversary surprise." }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     KOLKATA
  ══════════════════════════════════════════════════════════════════════════ */
  "kolkata": {
    cityName: "Kolkata",
    metaTitle: "Flower Delivery in Kolkata | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kolkata with same-day delivery. Roses, tuberose & bouquets to Salt Lake, Park Street, New Town & all areas. From ₹399.",
    h1: "Flower Delivery in Kolkata",
    metaKeyword: "flower delivery in Kolkata, online flower delivery Kolkata, same day flower delivery Kolkata, florist Kolkata, send flowers Kolkata, midnight flower delivery Kolkata, flowers Salt Lake Park Street",
    footerContent: `
<h2>Flower Delivery in Kolkata — City of Joy, City of Flowers</h2>
<p>Kolkata has been called the City of Joy, but it might equally be called the city of feeling — a place where literature, music, art, and food are discussed with the same intensity that other cities reserve for cricket and politics. In this emotional, expressive city, flowers are not a perfunctory gesture. A bunch of rajnigandha (tuberose) brought by a guest is a statement of regard. The marigold garlands adorning the Durga Puja pandals of Kumartuli are works of art as much as devotion. The early-morning flower market at Mullick Ghat, with the Howrah Bridge framing the sky behind it, is one of Kolkata's most iconic daily spectacles. RedHeart delivers fresh flowers across Kolkata with same-day and midnight delivery, carrying this city's deep relationship with flowers to your doorstep, starting at ₹399.</p>

<p>Mullick Ghat Flower Market — located on the eastern bank of the Hooghly river just south of Howrah Bridge — is one of Asia's oldest and largest flower markets, operating every day since the colonial period. Thousands of kilograms of flowers arrive here from farms across West Bengal, Odisha, and beyond. It is where wholesale buyers, temple committees, and event managers source what makes Kolkata beautiful. RedHeart's sourcing runs through this tradition, ensuring that the roses, tuberose, and seasonal flowers in your bouquet carry the freshness of the Hooghly riverbank market.</p>

<h2>Quick Reference — Flower Delivery in Kolkata</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead>
    <tr style="background:#fdf2f8;">
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th>
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolkata (including Salt Lake, New Town)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Salt Lake, New Town, Park Street, Ballygunge, Alipore, Howrah, Jadavpur, Tollygunge, Behala, Dum Dum, Rajarhat, Kasba, Gariahat, Southern Avenue, Dhakuria</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top flower occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Durga Puja, Kali Puja, Saraswati Puja, Rabindra Jayanti, birthdays, anniversaries, Valentine's Day</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Most popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tuberose (rajnigandha), roses, marigolds, lotus, shiuli (night jasmine), gladioli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Local flower hub</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mullick Ghat Flower Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Order cut-off (same-day)</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">5:00 PM</td></tr>
  </tbody>
</table>

<h2>Durga Puja — Kolkata's Greatest Floral Festival</h2>
<p>Nothing in India's festival calendar equals Kolkata's Durga Puja for scale, artistry, and floral consumption. For five days in October, the city's 40,000-plus pandals — each an elaborately designed temporary temple — are decorated with quantities of flowers that stagger the imagination. Marigold garlands draped in curtains, rose petal patterns on the floor, tuberose strings framing the goddess's face, lotus offerings in the puja thali — the flower demand during Puja week is extraordinary. RedHeart stocks up heavily for Puja season, with dedicated supplies for pandal decoration, home puja rooms, and the gifting that flows between families visiting each other's neighbourhood pandals.</p>

<p>Kali Puja — celebrated the night of Diwali with red hibiscus and lotus as the goddess's preferred offerings — follows Durga Puja in Kolkata's spiritual calendar. Saraswati Puja in February sees schoolchildren and college students offer yellow and white flowers to the goddess of learning. Rabindra Jayanti on May 9 — Rabindranath Tagore's birth anniversary — is Kolkata's unique cultural occasion when bookshops are decorated with flowers, cultural programmes are held in homes, and the city dresses itself in garlands to honour its greatest son.</p>

<h2>Shiuli — The Flower of Kolkata's Autumn</h2>
<p>If Delhi has its rajnigandha and Chennai has its mullai, Kolkata has its shiuli — the night jasmine (Nyctanthes arbor-tristis), which blooms on autumn mornings and falls to the ground in tiny white and orange stars. The sight of shiuli flowers on the ground on an early October morning is one of Kolkata's most beloved seasonal signals — it means Puja is coming. While shiuli cannot be arranged into formal bouquets, it is gathered as loose flowers for puja offerings, and its fragrance is the smell of Kolkata's most joyous season. RedHeart carries shiuli in season as a loose-flower offering alongside our standard catalogue.</p>

<h2>Park Street to New Town — Kolkata's Delivery Map</h2>
<p>Central Kolkata — Park Street, Camac Street, AJC Bose Road, and the heritage neighbourhoods of Bhowanipore and Ballygunge — represents the city's colonial-era grandeur and its contemporary cultural life. High-end residential buildings and old family homes in this zone see demand for premium roses and mixed arrangements. Salt Lake City (Bidhannagar) and the newer New Town-Rajarhat corridor are Kolkata's planned townships, home to IT offices (TCS, Wipro, Infosys) and young professional apartments that account for steady birthday and anniversary deliveries. South Kolkata — Jadavpur, Tollygunge, Behala, Garia, and the Southern Avenue belt — is one of the city's most densely populated residential zones, with high demand for daily-occasion flower gifting. RedHeart covers all of these with equal priority.</p>

<h2>Why Kolkata's Flowers Are Different</h2>
<p>Kolkata has a flower sensibility that is distinct from other Indian metros. Rajnigandha — tuberose — is the city's signature flower in a way that goes beyond mere popularity. Its heavy, sweet fragrance is part of the city's evening air. Gladioli — tall, dramatic, and colourful — are more common in Kolkata's gifting culture than in any other Indian city, reflecting a visual aesthetic that is comfortable with grandeur. Lotus holds deep spiritual significance and appears in Kali Puja offerings regularly. RedHeart's Kolkata catalogue reflects these preferences: we stock what Kolkata actually loves, not just what is popular elsewhere.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to Salt Lake and New Town in Kolkata?", answer: "Yes, RedHeart delivers flowers to Salt Lake (Bidhannagar), New Town, Rajarhat, and all IT corridor areas in Kolkata with same-day delivery. We cover residential apartments and IT office campuses like TCS, Wipro, and Infosys in these zones." },
      { question: "Can I order flowers for Durga Puja pandal decoration in Kolkata?", answer: "Yes! RedHeart provides bulk flower supplies for Durga Puja pandal decoration in Kolkata, including marigold garlands, tuberose strings, and rose arrangements. We stock up heavily ahead of Puja season and can handle large orders for community pandals and home pujas. Contact us for bulk pricing." },
      { question: "Is rajnigandha (tuberose) available for delivery in Kolkata?", answer: "Yes! Rajnigandha (tuberose) is one of Kolkata's most beloved flowers and RedHeart delivers it fresh across the city. Available as loose stems and in bouquets, tuberose is perfect for puja offerings, home fragrance, and as a deeply personal gift in a city where it carries significant cultural meaning." },
      { question: "What flowers are traditional for Kali Puja delivery in Kolkata?", answer: "Kali Puja traditionally uses red hibiscus (joba phool) and lotus as offerings for the goddess. RedHeart sources and delivers these traditional Kali Puja flowers in Kolkata during the Diwali-Kali Puja period. Marigolds and rose garlands are also used widely for home decoration during this festival." },
      { question: "Can I get same-day flower delivery in Howrah and South Kolkata?", answer: "Yes, RedHeart delivers flowers same-day to Howrah, Jadavpur, Tollygunge, Behala, Garia, and all areas of South Kolkata. Our delivery network covers the full Kolkata Metropolitan Area with the standard 2–4 hour delivery window for orders placed before 5 PM." }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     AHMEDABAD
  ══════════════════════════════════════════════════════════════════════════ */
  "ahmedabad": {
    cityName: "Ahmedabad",
    metaTitle: "Flower Delivery in Ahmedabad | Same-Day & Midnight | RedHeart",
    metaDescription: "Send fresh flowers in Ahmedabad with same-day delivery. Roses, marigolds & bouquets to Navrangpura, Satellite, Prahlad Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Ahmedabad",
    metaKeyword: "flower delivery in Ahmedabad, online flower delivery Ahmedabad, same day flower delivery Ahmedabad, florist Ahmedabad, send flowers Ahmedabad, midnight flower delivery Ahmedabad, Navratri flowers Ahmedabad",
    footerContent: `
<h2>Flower Delivery in Ahmedabad — Gujarat's Commercial Capital and Its Love for Festive Blooms</h2>
<p>Ahmedabad is a city of remarkable energy — the Sabarmati riverfront where families gather at dusk, the textile mills district that built one of India's great industrial fortunes, the heritage step-wells (vavs) that speak of a sophisticated ancient culture, and the modern GIFT City rising on its outskirts as India's first operational smart city. This is a city that has always valued beauty and commerce in equal measure. The Gujarati community's love of festivals — and the flowers that accompany them — is among the most enthusiastic in India. RedHeart delivers fresh flowers across Ahmedabad with same-day and midnight delivery, from Navrangpura to Bopal, starting at ₹399.</p>

<p>Ahmedabad's flower supply concentrates at Jamalpur Market in the old city — a busy wholesale hub where marigolds, roses, and seasonal flowers arrive from farms in Anand, Nadiad, and Kheda before dawn. The proximity of Gujarat's fertile agricultural belt means that flowers in Ahmedabad are typically fresher than in cities that depend on longer supply chains. RedHeart draws from this local freshness to ensure that every bouquet we deliver in Ahmedabad carries the quality the city has a right to expect.</p>

<h2>Quick Reference — Flower Delivery in Ahmedabad</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead>
    <tr style="background:#fdf2f8;">
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th>
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ahmedabad (including Gandhinagar)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navrangpura, Satellite, Prahlad Nagar, Bodakdev, CG Road, Vastrapur, Thaltej, Bopal, Gota, Naroda, Maninagar, Chandkheda, Motera, Gandhinagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top flower occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navratri, Diwali, weddings, Janmashtami, birthdays, Uttarayan (Makar Sankranti)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Most popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, tuberose, chrysanthemums, gerberas, mixed seasonal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Local flower hub</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamalpur Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Order cut-off (same-day)</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">5:00 PM</td></tr>
  </tbody>
</table>

<h2>Navratri — Nine Nights of Flowers and Garba in Ahmedabad</h2>
<p>Ahmedabad's Navratri is not merely a festival — it is a city-wide transformation. For nine nights, the entire population of Ahmedabad dresses in traditional garments and dances garba in parks, grounds, and community halls across the city. Flower garlands, marigold torans, and elaborate floral decorations adorn every venue. The goddess's shrine at the centre of each garba venue is freshly decorated with flowers every evening. RedHeart's Navratri stock covers marigolds, tuberose, roses, and seasonal arrangements to meet the festival's enormous demand. We begin Navratri deliveries from the morning of each day throughout the nine nights.</p>

<p>Diwali in Ahmedabad carries a particular significance because of the Gujarati New Year (Bestu Varas) that follows the day after. Homes are cleaned, decorated, and adorned with flower rangolis and door torans. The gifting culture during Diwali-New Year in Gujarat is some of the most active in India — flowers are exchanged as part of this generous tradition. Uttarayan (Makar Sankranti on January 14) — Ahmedabad's famous kite festival — is also accompanied by flower gifting as families celebrate on rooftops.</p>

<h2>Ahmedabad's Neighbourhoods — From CG Road to Bopal</h2>
<p>CG Road (Chimanlal Girdharlal Road) and the Navrangpura-Ellisbridge area represent central Ahmedabad's commercial and residential heart. Satellite and Prahlad Nagar are the city's upscale western zones, with premium apartments and active social scenes that generate steady demand for roses and orchid arrangements. Bodakdev and Thaltej, newer residential areas with a young professional demographic, see high birthday and anniversary delivery traffic. Bopal, on Ahmedabad's western periphery, has grown dramatically with apartment complexes housing middle-class families who are active flower gifters. East Ahmedabad — Maninagar, Naroda, and Vatva — is Ahmedabad's working-class and middle-class zone, served with the same delivery standards as the premium west. Gandhinagar, Gujarat's capital and a short drive north, is also within our delivery network.</p>

<h2>Flowers in Ahmedabad's Wedding Culture</h2>
<p>Gujarati weddings are legendary for their scale and hospitality. A single wedding weekend can span three days of ceremonies, each requiring fresh floral decoration. The mandap flower decoration, the entrance toran, the bride's hair flowers, the groom's sehla (marigold varmala), and the table centrepieces for 500+ guests represent a flower operation of genuine complexity. RedHeart works with Ahmedabad families on wedding flower delivery, providing bulk quantities of marigolds, tuberose, and seasonal flowers for ceremonies across the city. We coordinate delivery timing with the wedding schedule to ensure flowers arrive before the ceremony begins, not during it.</p>

<h2>Why Ahmedabad Trusts RedHeart</h2>
<p>Gujaratis are known for their business acumen and their value-consciousness — they want quality but they also want value. RedHeart delivers on both. Starting prices at ₹399 mean that budget is not a barrier, while the quality of our flower sourcing and assembly means that premium customers in Satellite and Prahlad Nagar are equally satisfied. We have delivered to corporate offices in the SG Highway corridor, to homes in the narrow lanes of the old walled city, and to wedding mandaps in Bopal. That range of delivery experience is what makes RedHeart the trusted flower partner across all of Ahmedabad.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers during Navratri in Ahmedabad?", answer: "Yes! RedHeart stocks and delivers festive flowers throughout Navratri in Ahmedabad — marigold garlands, tuberose arrangements, and mixed floral decorations for garba venues and home shrines. We deliver daily through all nine nights of Navratri to ensure your celebrations are beautifully adorned." },
      { question: "Can I get flower delivery to Gandhinagar from Ahmedabad?", answer: "Yes, RedHeart delivers flowers to Gandhinagar as part of our Ahmedabad delivery network. Same-day delivery is available to residential and government areas in Gandhinagar for orders placed before 5 PM." },
      { question: "What flowers are most popular for Diwali gifting in Ahmedabad?", answer: "Marigolds and tuberose are the top choices for Diwali gifting in Ahmedabad, used for door torans, flower rangolis, and puja decoration. Roses are popular as personal gifts. During the Gujarati New Year (Bestu Varas) that follows Diwali, mixed bouquets and premium arrangements are exchanged widely." },
      { question: "Does RedHeart handle bulk wedding flower orders in Ahmedabad?", answer: "Yes, RedHeart handles bulk wedding flower deliveries in Ahmedabad for Gujarati wedding ceremonies. We supply marigolds, tuberose, roses, and seasonal flowers for mandap decoration, entrance torans, and event centrepieces. Contact our team for bulk pricing and advance booking for wedding dates." },
      { question: "Is same-day flower delivery available in Bopal and Satellite Ahmedabad?", answer: "Yes, RedHeart delivers flowers same-day to Bopal, Satellite, Prahlad Nagar, Bodakdev, Thaltej, and all western Ahmedabad areas. Orders placed before 5 PM are delivered within 2–4 hours across these zones." }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     JAIPUR
  ══════════════════════════════════════════════════════════════════════════ */
  "jaipur": {
    cityName: "Jaipur",
    metaTitle: "Flower Delivery in Jaipur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jaipur with same-day delivery. Roses, marigolds & bouquets to Vaishali Nagar, C-Scheme, Malviya Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Jaipur",
    metaKeyword: "flower delivery in Jaipur, online flower delivery Jaipur, same day flower delivery Jaipur, florist Jaipur, send flowers Jaipur, midnight flower delivery Jaipur, flowers Pink City Jaipur",
    footerContent: `
<h2>Flower Delivery in Jaipur — The Pink City's Colourful Love for Blooms</h2>
<p>Jaipur is a city painted in pink — not just the Jaipur Pink sandstone of its famous buildings, but in the spirit of a city that has always found beauty essential rather than optional. From the rose gardens of Sisodiya Rani Ka Bagh, laid out in the Mughal style in the 18th century, to the flower stalls that line the roads near Hawa Mahal and Jantar Mantar, this city has maintained a relationship with flowers that is simultaneously royal, devotional, and domestic. When you send flowers in Jaipur, you are participating in a gifting culture that stretches back to a royal court known for its visual magnificence. RedHeart delivers fresh flowers across Jaipur with same-day and midnight delivery, starting at ₹399.</p>

<p>Jaipur's flower supply concentrates at Chandpole Bazaar and the wholesale market near the walled city, where marigolds, roses, and seasonal flowers arrive from farms in Rajasthan's Ajmer belt and from more distant growing regions. The desert climate means Jaipur's flower culture has always valued the flowers that thrive in arid conditions — marigolds that grow robustly in dry soil, roses bred for heat resilience, and the jasmine that fills Jaipur's evenings with fragrance. RedHeart's sourcing reflects this local knowledge.</p>

<h2>Quick Reference — Flower Delivery in Jaipur</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead>
    <tr style="background:#fdf2f8;">
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th>
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jaipur (Pink City)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vaishali Nagar, C-Scheme, Malviya Nagar, Mansarovar, Jagatpura, Tonk Road, Sanganer, Gopalpura Bypass, Sodala, Shyam Nagar, Bajaj Nagar, Vidhyadhar Nagar, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top flower occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Teej, Gangaur, Diwali, weddings, birthdays, Holi, Navratri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Most popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, jasmine, tuberose, genda (marigold garlands), mixed bouquets</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Local flower hub</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chandpole Bazaar flower market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Order cut-off (same-day)</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">5:00 PM</td></tr>
  </tbody>
</table>

<h2>Teej and Gangaur — Jaipur's Floral Festivals for Women</h2>
<p>Jaipur has two festivals that are among the most flower-intensive in Rajasthan. Teej — celebrated in the monsoon month of Sawan — is a festival for women, marking the reunion of Shiva and Parvati and the joy of the rains. Women dress in green and swing on flower-decorated swings, and the goddess is taken out in a procession through the old city streets lined with marigold garlands and rose petals. Gangaur — celebrated in the spring month of Chaitra — is the other great Rajasthani women's festival, lasting eighteen days, during which daily fresh flowers are essential for worship and decoration. RedHeart delivers Teej and Gangaur festival flowers across Jaipur during these important periods.</p>

<h2>Jaipur's Royal Wedding Tradition and Flower Culture</h2>
<p>Rajasthani weddings are among India's most visually spectacular — and Jaipur, as the state's capital and its most visible city to the world, is the seat of this tradition. Heritage hotels like Rambagh Palace, Jai Mahal Palace, and Samode Haveli host destination weddings for families from across India and internationally, and the flower requirements for these events reflect their grandeur: marigold curtains, rose petal trails, jasmine mandap decorations, and orchid centrepieces. RedHeart coordinates with wedding planners and event managers for Jaipur's wedding season (October through February) to supply flower requirements on schedule.</p>

<h2>From Hawa Mahal to Malviya Nagar — Jaipur's Delivery Coverage</h2>
<p>Central Jaipur — C-Scheme, MI Road, Civil Lines, and the walled city — carries the heritage residential character, with families in traditional havelis and government officers' bungalows receiving flowers for puja, festivals, and personal occasions. Vaishali Nagar and Mansarovar in the west are Jaipur's large middle-class residential zones, with consistent birthday and anniversary demand. Malviya Nagar and Jagatpura in the south serve the IT office corridor on Tonk Road, where companies like Infosys Jaipur, WNS, and various BPOs require corporate deliveries. Sanganer, near the airport, and the developing areas of Gopalpura Bypass and Pratap Nagar round out our coverage of a city that has grown significantly in the last decade.</p>

<h2>Why Jaipur Chooses RedHeart</h2>
<p>Jaipur has a hospitality culture — the tradition of Rajasthani atithi devo bhava (the guest is God) means that flowers arriving at a Jaipur home are received with genuine warmth and attention. RedHeart's delivery partners treat every Jaipur order with the respect this culture deserves. Fresh flowers, on-time delivery, and careful packaging that survives Jaipur's dry heat — these are the standards we hold ourselves to. Whether the order is a birthday bouquet to a Vaishali Nagar apartment or a wedding flower delivery to Rambagh Palace, the quality and care are identical.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers for Teej and Gangaur festivals in Jaipur?", answer: "Yes! RedHeart stocks and delivers traditional Rajasthani festival flowers for Teej and Gangaur in Jaipur. We supply marigold garlands, rose arrangements, and jasmine decorations for the goddess's puja and home celebrations during these important women's festivals." },
      { question: "Can I get flower delivery to the Walled City and Civil Lines in Jaipur?", answer: "Yes, RedHeart delivers flowers to all areas of Jaipur including the Walled City, C-Scheme, Civil Lines, MI Road, and the heritage areas near Hawa Mahal. We also cover Vaishali Nagar, Mansarovar, Malviya Nagar, Jagatpura, and all developing areas of Jaipur." },
      { question: "Does RedHeart supply flowers for destination weddings in Jaipur?", answer: "Yes, RedHeart supplies flowers for weddings at Jaipur's heritage hotels and venue properties. We handle bulk flower supplies for wedding ceremonies, receptions, and mandap decoration with advance booking. Contact our team for wedding-scale orders and event coordination." },
      { question: "What are the most popular flowers for gifting in Jaipur?", answer: "Roses are the most popular personal gift flower in Jaipur, with red roses for romance and mixed-colour bouquets for birthdays. Marigold garlands (genda mala) are essential for all religious occasions. Jasmine is used for home fragrance and hair decoration. For premium gifting, orchids and lily bouquets are popular." },
      { question: "Is midnight flower delivery available in Jaipur?", answer: "Yes! RedHeart offers midnight flower delivery in Jaipur. Order before 9 PM, select the midnight time slot, and we will deliver fresh flowers at the exact time you choose — perfect for birthday and anniversary surprises in the Pink City." }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     NOIDA
  ══════════════════════════════════════════════════════════════════════════ */
  "noida": {
    cityName: "Noida",
    metaTitle: "Flower Delivery in Noida | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Noida with same-day delivery. Roses, bouquets & arrangements to Sector 18, Sector 62, Greater Noida & all sectors. From ₹399.",
    h1: "Flower Delivery in Noida",
    metaKeyword: "flower delivery in Noida, online flower delivery Noida, same day flower delivery Noida, florist Noida, send flowers Noida, midnight flower delivery Noida, flowers Sector 18 Greater Noida",
    footerContent: `
<h2>Flower Delivery in Noida — NCR's Planned City and Its Spontaneous Love for Flowers</h2>
<p>Noida is a city that was designed from scratch — its numbered sectors, planned infrastructure, and orderly layout are the product of urban planning rather than organic growth. Yet within this grid of sectors and expressways lives one of the NCR's most vibrant populations: young IT professionals in high-rise apartments, families in gated societies, entrepreneurs in co-working spaces, and students from DU colleges who moved here for affordability and stayed for the lifestyle. This mix of people has created a flower gifting culture that is spontaneous, frequent, and very digital — orders placed from phones, deliveries to apartment security desks, with a message card left at the door. RedHeart's same-day flower delivery in Noida is built for exactly this kind of city. Starting at ₹399, delivered within hours across all sectors.</p>

<p>As part of the Delhi NCR, Noida draws from the same flower supply chain that serves the capital — Ghazipur Mandi in East Delhi is practically in the neighbourhood. This proximity means flowers in Noida are sourced and dispatched faster than in cities dependent on more distant markets. A rose that was in Ghazipur at 5 AM can be in a Sector 78 apartment by noon. That freshness advantage is one of the reasons RedHeart's Noida deliveries consistently meet the quality expectations of a city whose residents frequently compare with what they experienced in other metros.</p>

<h2>Quick Reference — Flower Delivery in Noida</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead>
    <tr style="background:#fdf2f8;">
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th>
      <th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Noida (including Greater Noida &amp; Noida Extension)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sector 18, Sector 62, Sector 137, Sector 78, Sector 50, Sector 44, Sector 104, Greater Noida West, Knowledge Park, Omega, Chi, Noida Extension (Gaur City), Expressway sectors</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top flower occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Birthdays, anniversaries, Valentine's Day, promotions, Diwali, office celebrations</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Most popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, gerberas, sunflowers, orchids, mixed bouquets</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Proximity to flower market</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghazipur Mandi (30 min), INA Market (45 min)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Order cut-off (same-day)</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">5:00 PM</td></tr>
  </tbody>
</table>

<h2>Noida's IT Culture and Corporate Flower Gifting</h2>
<p>Noida's Sector 62, Sector 63, and the expressway corridor are home to the offices of Adobe, HCL, Infosys BPO, Samsung R&D, and hundreds of other technology and BPO companies. This corporate density creates a steady stream of professional flower gifting occasions: farewell bouquets for colleagues, congratulations flowers for promotions, desk arrangements for birthdays, and reception flowers for client visits. RedHeart handles these corporate Noida orders with the same professionalism they reflect — on-time delivery to office reception desks, tidy packaging that doesn't create a scene in a formal workspace, and bulk options for team events.</p>

<p>The Film City in Sector 16A — one of India's largest film and television production hubs — generates its own flower demand. Set decoration, cast gifting, studio event flowers, and personal deliveries to production teams are part of what RedHeart handles in this corner of Noida. The media and entertainment industry's last-minute, high-urgency culture is well-matched to our same-day delivery capability.</p>

<h2>Noida's Apartment Culture and Personal Gifting</h2>
<p>Noida's skyline is dominated by high-rise apartment towers — Mahagun Moderne, ATS Green Village, Supertech Capetown, Gaur City, and thousands of other gated societies that house the city's young and middle-aged working population. Birthday morning deliveries to apartment flats are one of RedHeart's most common Noida orders. The logistics of these deliveries require coordination: calling ahead to the recipient, working with security guards at the gate, and ensuring the bouquet reaches the door in good condition and on time. Our Noida delivery partners are experienced with gated society protocols and make this process smooth.</p>

<h2>Greater Noida and Noida Extension Coverage</h2>
<p>Greater Noida — with its institutions like Amity University, Galgotias, and Bennett University — is a significant student population zone. Student gifting follows a clear calendar: Valentine's Day, Teacher's Day, farewell ceremonies, and exam-result celebrations. Greater Noida West (Noida Extension) — the rapidly growing residential zone of Gaur City, Ajnara, and Supertech Eco Village — now houses hundreds of thousands of residents, many of them young families who moved for affordable housing and are active online shoppers. RedHeart covers this expanding zone with the same same-day guarantee as established Noida sectors.</p>

<h2>From Expressway to Sector 18 — Noida's Flower Map</h2>
<p>Sector 18's Atta Market is Noida's original commercial hub — a dense retail zone that generates delivery demand from businesses and nearby residential sectors. The Noida-Greater Noida Expressway corridor runs through sectors 94-137, which include some of Noida's newest and most upscale residential developments. The Yamuna Expressway stretch towards Greater Noida passes through industrial and institutional zones with periodic corporate delivery needs. RedHeart's network covers the full Noida grid — every sector from Sector 14 to Sector 168, and the broader Greater Noida areas beyond — ensuring that wherever you are in Noida, a fresh bouquet can reach you within hours.</p>

<h2>Why Noida Residents Choose RedHeart</h2>
<p>Noida residents are digitally savvy and have high expectations from online services — they are the demographic that reads app reviews, compares delivery times, and will not hesitate to leave a one-star rating for a late or wilted delivery. RedHeart's Noida service is calibrated to these expectations. Fresh flowers, accurate delivery time estimates, responsive customer support, and packaging that looks good when opened — these are the fundamentals. We have delivered to every type of Noida address: apartments in Mahagun Moderne, offices in Sector 62, studio apartments in Sector 50, and college campuses in Greater Noida. The consistency of that experience is what earns Noida's recommendations.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to Greater Noida and Noida Extension?", answer: "Yes, RedHeart delivers flowers to Greater Noida, Noida Extension (Gaur City, Greater Noida West), Knowledge Park, and all sectors of Greater Noida with same-day delivery. Our coverage spans the full Noida-Greater Noida region including the Yamuna Expressway corridor." },
      { question: "Can RedHeart deliver flowers to gated societies and apartments in Noida?", answer: "Yes! RedHeart regularly delivers to gated apartment societies across Noida including Mahagun, ATS, Supertech, Gaur, Ajnara, and others. Our delivery partners are experienced with gated society security protocols and coordinate with guards to ensure smooth delivery to your door." },
      { question: "Is corporate flower delivery available in Noida Sector 62 and IT corridor?", answer: "Yes, RedHeart handles corporate flower deliveries to offices in Noida Sector 62, 63, and the expressway IT corridor including Adobe, HCL, Samsung R&D, and other tech campuses. We deliver to office receptions and individual desks with professional packaging suitable for corporate settings." },
      { question: "What is the fastest flower delivery available in Noida?", answer: "Same-day flower delivery in Noida is completed within 2–4 hours of order confirmation for orders placed before 5 PM. RedHeart benefits from Noida's proximity to Ghazipur Mandi (30 minutes), which means flowers are sourced and dispatched faster than in more distant cities." },
      { question: "Can I send midnight flowers in Noida for a birthday surprise?", answer: "Yes! Midnight flower delivery is available across Noida. Place your order before 9 PM, choose the midnight delivery slot, and our partner will deliver at the exact time you specify — ideal for birthday and anniversary surprises in your Noida society or apartment." }
    ]
  }

};

async function run() {
  const BASE_URL = "https://www.redheart.in";

  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/florist-near-me/${slug}`;
    const payload = {
      category:        "Flowers",
      cityName:        data.cityName,
      slug,
      url:             cityUrl,
      metaTitle:       data.metaTitle,
      metaDescription: data.metaDescription,
      h1:              data.h1,
      canonicalUrl:    `${BASE_URL}${cityUrl}`,
      metaKeyword:     data.metaKeyword,
      breadcrumb: [
        { label: "Home",    url: "/" },
        { label: "Flowers", url: "/florist-near-me" },
        { label: `Online Flower Delivery in ${data.cityName}`, url: cityUrl },
      ],
      footerContent: data.footerContent.trim(),
      faqs:          data.faqs,
      isActive:      true,
    };

    const res = await fetch(`${API_BASE}/city/upsert`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });
    const json = await res.json();
    if (!res.ok) {
      console.error(`❌  ${data.cityName} — ${res.status}`, json);
    } else {
      console.log(`✅  ${data.cityName} — ${json._id}`);
    }
  }

  console.log("\nDone — batch 2 complete.");
}

run().catch((err) => { console.error(err); process.exit(1); });
