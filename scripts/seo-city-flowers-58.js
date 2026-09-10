// Batch 58 — 15 cities:
// UP: Maharajganj, Siddharthnagar
// HP: Chamba
// Uttarakhand: Chamoli, Pithoragarh
// Punjab: Nawanshahr (SBS Nagar), Moga, Barnala, Faridkot
// Haryana: Nuh/Mewat, Mahendragarh, Fatehabad, Jind, Kaithal
// Maharashtra: Washim

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "maharajganj": {
    cityName: "Maharajganj",
    metaTitle: "Flower Delivery in Maharajganj | Nepal Border UP | RedHeart",
    metaDescription: "Order flowers in Maharajganj, UP. Same-day delivery near Nepal border & across Maharajganj. From ₹399.",
    h1: "Online Flower Delivery in Maharajganj",
    metaKeyword: "flower delivery maharajganj, online flowers maharajganj uttar pradesh, florist maharajganj, flowers maharajganj nepal border sonauli rapti buddha birthplace terai",
    footerContent: `
<h2>Flower Delivery in Maharajganj — Nepal Border Terai and the Ancient Kapilavastu Gateway</h2>
<p>Maharajganj, on the Nepal border in eastern Uttar Pradesh's Terai region, is the headquarters of Maharajganj district — a district of dense sal forests, marshy Terai plains, and significant Buddhist heritage. The Sonauli border crossing (the most prominent India-Nepal road crossing in eastern UP) is in Maharajganj district and serves as a major transit point for pilgrims to Lumbini (Buddha's birthplace in Nepal, just across the border). The ancient city of Kapilavastu — the childhood home of Siddhartha Gautama (the Buddha), where he lived as a prince before renouncing the world — is identified by Buddhist scholars at both the Piprahwa excavation site (Maharajganj district) and Tilaurakot in Nepal. The Piprahwa stupa and museum contain the earliest relics of the Buddha authenticated by scholars. The Terai forests have tigers, elephants, and gharials.</p>
<p>RedHeart delivers flowers across Maharajganj — Main Market, Sonauli area, Nautanwa area, Anand Nagar area, Pharenda area, and Station Road. Our range includes roses, marigolds, seasonal UP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Maharajganj, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sonauli, Nautanwa, Anand Nagar, Pharenda, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, seasonal Terai flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Buddha Purnima (Vesak) available in Maharajganj?", answer: "Yes, Buddha Purnima (Vesak) — celebrating the Buddha's birth, enlightenment, and death — is a significant occasion given Maharajganj's proximity to Kapilavastu and the Sonauli-Lumbini route. Lotus flowers and white flower arrangements for Buddhist offerings are available." },
      { question: "Can I get birthday flowers in Maharajganj?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Maharajganj for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Maharajganj?", answer: "Yes, same-day delivery is available across Maharajganj for orders placed before 3 PM." }
    ]
  },

  "siddharthnagar": {
    cityName: "Siddharthnagar",
    metaTitle: "Flower Delivery in Siddharthnagar | Kapilavastu UP | RedHeart",
    metaDescription: "Order flowers in Siddharthnagar, UP. Same-day delivery near Kapilavastu & across Siddharthnagar. From ₹399.",
    h1: "Online Flower Delivery in Siddharthnagar",
    metaKeyword: "flower delivery siddharthnagar, online flowers siddharthnagar uttar pradesh, florist siddharthnagar, flowers siddharthnagar nawabganj kapilavastu buddha gautam rapti terai",
    footerContent: `
<h2>Flower Delivery in Siddharthnagar — Gautam Buddha's Kapilavastu and the Rapti River's Terai Plains</h2>
<p>Siddharthnagar (headquartered at Naugarh / Nawabganj), in the Terai belt of eastern Uttar Pradesh bordering Nepal, is a district of deep Buddhist significance — named after Siddhartha Gautama (the Buddha). The ancient city of Kapilavastu (where Siddhartha lived as a Shakya prince until his renunciation) is identified by Buddhist scholars at Piprahwa (Maharajganj) and at Tilaurakot (Nepal), but the Siddharthnagar district itself spans much of the ancient Shakya republic's territory. The district encompasses the ancient Sravasti (Shravasti) area's cultural influence and has Buddhist pilgrimage circuits linking to Nepal's Lumbini. The Rapti River — flowing through the Terai from Nepal — bounds the district and provides fertile alluvial agriculture. Siddharthnagar has a predominantly rural economy based on paddy, wheat, and sugarcane cultivation.</p>
<p>RedHeart delivers flowers across Siddharthnagar — Main Market, Nautanwa Road, Bhanvapur area, Domariyaganj area, Bansi area, and Nawabganj Station Road. Our range includes roses, marigolds, lotus, and seasonal UP bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siddharthnagar, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Nautanwa Road, Domariyaganj, Bansi, Nawabganj Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lotus, marigolds, roses, seasonal UP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Buddhist occasions available in Siddharthnagar?", answer: "Yes, Siddharthnagar's Buddhist heritage (named after Siddhartha Gautama) means Buddhist offerings like lotus and white flowers are available for puja and pilgrimage." },
      { question: "Can I get birthday flowers in Siddharthnagar?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Siddharthnagar for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Siddharthnagar?", answer: "Yes, same-day delivery is available across Siddharthnagar for orders placed before 3 PM." }
    ]
  },

  "chamba": {
    cityName: "Chamba",
    metaTitle: "Flower Delivery in Chamba | Himachal Pradesh Ancient Kingdom | RedHeart",
    metaDescription: "Order flowers in Chamba, HP. Same-day delivery near Ravi River & across Chamba. From ₹399.",
    h1: "Online Flower Delivery in Chamba",
    metaKeyword: "flower delivery chamba, online flowers chamba himachal pradesh, florist chamba, flowers chamba ravi river ancient kingdom dalhousie bhuri singh museum minjar fair pahari painting",
    footerContent: `
<h2>Flower Delivery in Chamba — Ancient Kingdom on the Ravi, Pahari Miniatures, and the Minjar Silk Fair</h2>
<p>Chamba, on the Ravi River in the northern Himalayan valleys of Himachal Pradesh, is the headquarters of Chamba district — one of India's most historically intact ancient kingdoms, continuously ruled by the Chamba Raja dynasty for over 1,400 years (from c. 550 CE to 1948). Chamba town preserves an extraordinary heritage: the Lakshmi Narayan temple complex (6th–10th century), the Bhuri Singh Museum (housing the world's most important collection of Pahari miniature paintings from Chamba, Kangra, Basohli, and Guler schools — a UNESCO-listed tradition), and the Chaugan (a large meadow central to the town). The Minjar Fair (July/August) — where silk tassels (minjars) symbolising ripening corn are ceremonially immersed in the Ravi — is one of HP's most distinctive folk festivals. The Chamba Valley also leads to the Pangi Valley and the glacial Spiti via the Rohtang and Sach passes.</p>
<p>RedHeart delivers flowers across Chamba — Main Market, Chaugan area, Dalhousie Road, Khajjiar area, Bharmour area, and Station Road. Our range includes roses, seasonal Himalayan flowers, marigolds, and Chamba puja bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamba, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Chaugan, Dalhousie Road, Khajjiar, Bharmour, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, seasonal Himalayan flowers, marigolds, temple puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Chamba Minjar Fair available?", answer: "Yes, the Chamba Minjar Fair (immersing silk minjars in the Ravi, symbolising harvest blessings) is the valley's major festival. Marigold garlands and festive bouquets for the Minjar Fair are available." },
      { question: "Can I get flowers for a Khajjiar (mini-Switzerland) visit from Chamba?", answer: "Yes, Khajjiar meadow (called 'mini-Switzerland of India') is in Chamba district. Seasonal mountain bouquets for Khajjiar resort stays are available from Chamba." },
      { question: "Do you deliver flowers same day in Chamba?", answer: "Yes, same-day delivery is available across Chamba for orders placed before 3 PM." }
    ]
  },

  "chamoli": {
    cityName: "Chamoli",
    metaTitle: "Flower Delivery in Chamoli | Valley of Flowers Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Chamoli, Uttarakhand. Same-day delivery near Valley of Flowers & across Chamoli. From ₹399.",
    h1: "Online Flower Delivery in Chamoli",
    metaKeyword: "flower delivery chamoli, online flowers chamoli uttarakhand, florist chamoli, flowers chamoli valley of flowers badrinath kedarnath hemkund nanda devi glacier",
    footerContent: `
<h2>Flower Delivery in Chamoli — Valley of Flowers, Badrinath Dham, and Nanda Devi's High Himalayas</h2>
<p>Chamoli, in the Garhwal Himalayan district of Uttarakhand bordering Tibet (China), is the headquarters of Chamoli district — one of India's most extraordinarily beautiful and spiritually significant districts. The Valley of Flowers National Park (UNESCO World Heritage Site, 87 km² at 3,352–3,658 m altitude) — a high-altitude Himalayan meadow blanketing with hundreds of alpine wildflower species (cobra lilies, blue poppies, brahmakamal, and 300+ more) from July to September — is in Chamoli district. Badrinath Dham (one of Hinduism's Char Dhams, at 3,133 m on the Alaknanda, a major Vishnu shrine visited by 1 million+ pilgrims annually) is in Chamoli district. The Nanda Devi Biosphere Reserve (India's highest peak — Nanda Devi at 7,816 m — and UNESCO World Heritage Site) and Hemkund Sahib (the highest Sikh Gurdwara in the world, at 4,329 m) are also here.</p>
<p>RedHeart delivers flowers across Chamoli — Gopeshwar (district HQ), Badrinath area, Joshimath area, Karnaprayag area, Nandaprayag area, and Gairsain area. Our range includes alpine flowers, marigolds, brahmakamal, and Char Dham puja sets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chamoli, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gopeshwar, Badrinath, Joshimath, Karnaprayag, Nandaprayag, Gairsain</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Brahmakamal, marigolds, alpine flowers, Badrinath puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Badrinath Dham puja available in Chamoli?", answer: "Yes, Badrinath Dham (one of the Char Dhams, Lord Vishnu's abode at 3,133 m) is in Chamoli. Marigold garlands, tulsi, and Vishnu puja flower sets for Badrinath are available." },
      { question: "Can I get Valley of Flowers alpine varieties in Chamoli?", answer: "While the Valley of Flowers (UNESCO site, July-September) is strictly protected, we offer seasonal Chamoli wildflower-inspired arrangements celebrating the region's extraordinary floral heritage." },
      { question: "Do you deliver flowers same day in Chamoli?", answer: "Yes, same-day delivery is available across Chamoli (Gopeshwar, Joshimath, Karnaprayag areas) for orders placed before 3 PM." }
    ]
  },

  "pithoragarh": {
    cityName: "Pithoragarh",
    metaTitle: "Flower Delivery in Pithoragarh | Mini Kashmir Uttarakhand | RedHeart",
    metaDescription: "Order flowers in Pithoragarh, Uttarakhand. Same-day delivery near Nepal border & across Pithoragarh. From ₹399.",
    h1: "Online Flower Delivery in Pithoragarh",
    metaKeyword: "flower delivery pithoragarh, online flowers pithoragarh uttarakhand, florist pithoragarh, flowers pithoragarh mini kashmir kailash mansarovar nepal tibet border kumaon",
    footerContent: `
<h2>Flower Delivery in Pithoragarh — Mini Kashmir and the Kailash-Mansarovar Himalayan Route</h2>
<p>Pithoragarh, in the Kumaon Himalayan district of Uttarakhand bordering Nepal and Tibet (China), is the headquarters of Pithoragarh district — nicknamed "Mini Kashmir" for its Soriyapathar meadow flanked by snow peaks. Pithoragarh is the jumping-off point for the Kailash-Mansarovar Yatra (the sacred pilgrimage to Mount Kailash and Lake Mansarovar in Tibet, one of Hinduism's most demanding and revered journeys) via the Lipulekh Pass (one of three routes, and the one passing through India's own territory in the Lipulekh enclave). The Patal Bhuvaneshwar cave temple (a cave sanctuary near Gangolihat with intricate limestone formations believed to house Shiva, Brahma, Vishnu, and the Pandavas) is one of the most extraordinary pilgrimage sites in Uttarakhand. The Dharchula-Munsiyari-Milam Glacier belt is in this district.</p>
<p>RedHeart delivers flowers across Pithoragarh — Main Market, Gangolihat area, Dharchula area, Munsiyari area, Berinag area, and Station Road. Our range includes roses, seasonal Himalayan flowers, marigolds, and pilgrimage puja bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pithoragarh, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gangolihat, Dharchula, Munsiyari, Berinag, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, alpine flowers, Kailash puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Kailash-Mansarovar Yatra preparation available in Pithoragarh?", answer: "Yes, Pithoragarh is the last major town before the Kailash-Mansarovar Yatra via Lipulekh. Puja flowers, marigold garlands, and Shiva offerings for the yatra preparation are available." },
      { question: "Can I get flowers for a Munsiyari (Himalayan base) trip from Pithoragarh?", answer: "Yes, Munsiyari (a Himalayan base in Pithoragarh district with views of the Panchauli Peaks) is a popular high-altitude destination. Seasonal mountain bouquets for Munsiyari stays are available." },
      { question: "Do you deliver flowers same day in Pithoragarh?", answer: "Yes, same-day delivery is available across Pithoragarh for orders placed before 3 PM." }
    ]
  },

  "nawanshahr": {
    cityName: "Nawanshahr",
    metaTitle: "Flower Delivery in Nawanshahr | SBS Nagar Punjab | RedHeart",
    metaDescription: "Order flowers in Nawanshahr (SBS Nagar), Punjab. Same-day delivery across the district. From ₹399.",
    h1: "Online Flower Delivery in Nawanshahr",
    metaKeyword: "flower delivery nawanshahr, online flowers nawanshahr shahid bhagat singh nagar punjab, florist nawanshahr sbs nagar, flowers nawanshahr shahid bhagat singh khatkar kalan shivalik doaba",
    footerContent: `
<h2>Flower Delivery in Nawanshahr — Shahid Bhagat Singh's Khatkar Kalan and the Doaba Shivalik Foothill District</h2>
<p>Nawanshahr (officially renamed Shahid Bhagat Singh Nagar in 2008), in the Doaba region of Punjab at the Shivalik foothills near Himachal Pradesh, is the headquarters of Shahid Bhagat Singh Nagar district — the district named in honour of Bhagat Singh, India's iconic revolutionary martyr. Khatkar Kalan (in SBS Nagar district) is Bhagat Singh's ancestral village — a major pilgrimage for freedom movement devotees, with the Bhagat Singh Museum and the family home preserved as a memorial. The district has a productive agriculture base (wheat, paddy, sugarcane) on the Bist Doab's fertile lands between the Beas and Sutlej rivers. The Shivalik forest range bordering the district has the Nangal Dam and Bhakra canal system.</p>
<p>RedHeart delivers flowers across Nawanshahr — Main Market, Khatkar Kalan area, Balachaur area, Banga area, Rahon area, and Station Road. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nawanshahr (SBS Nagar), Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Khatkar Kalan, Balachaur, Banga, Rahon, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Shaheed Diwas (Bhagat Singh) available in Nawanshahr?", answer: "Yes, Nawanshahr (SBS Nagar) is the district named for and home to Bhagat Singh's ancestral village Khatkar Kalan. Tribute flowers for Shaheed Diwas (23 March) observances at the memorial are available." },
      { question: "Are flowers for Gurpurab available in Nawanshahr?", answer: "Yes, Gurpurab celebrations are enthusiastically held in Nawanshahr. Marigold garlands and Sikh puja flowers for Gurpurab are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Nawanshahr?", answer: "Yes, same-day delivery is available across Nawanshahr (SBS Nagar) for orders placed before 3 PM." }
    ]
  },

  "moga": {
    cityName: "Moga",
    metaTitle: "Flower Delivery in Moga | Malwa Punjab Dairy | RedHeart",
    metaDescription: "Order flowers in Moga, Punjab. Same-day delivery near Nankana-Kartarpur area & across Moga. From ₹399.",
    h1: "Online Flower Delivery in Moga",
    metaKeyword: "flower delivery moga, online flowers moga punjab, florist moga, flowers moga malwa dairy verka nestlé industry sutlej firozpur feeder jaito",
    footerContent: `
<h2>Flower Delivery in Moga — Malwa's Dairy Capital and Punjab's Nestlé Milk Processing Hub</h2>
<p>Moga, in the Malwa plains of central Punjab between Ferozepur and Ludhiana, is the headquarters of Moga district — a district synonymous with dairy industry in Punjab. Moga hosts a major Nestlé India milk processing factory (one of the largest dairy plants in South Asia, processing millions of litres of milk daily from the surrounding farm belt to produce Nestlé Milo, Kit Kat, and dairy products). The Verka Milk Plant (Punjab's cooperative dairy brand) also has major operations in Moga. The district's intensive dairy farming — with high-yielding Murrah buffaloes and Holstein-Friesian cattle — makes it a key supplier to Punjab's milk economy. The district's Jaito area was the site of the Jaito Morcha (1924), a major Akali agitation for the restoration of a deposed Sikh ruler that became a non-cooperation landmark in Punjab's freedom movement.</p>
<p>RedHeart delivers flowers across Moga — Main Market, Baghapurana area, Nihal Singh Wala area, Jaito area, Station Road. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Moga, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Baghapurana, Nihal Singh Wala, Jaito, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Gurpurab available in Moga?", answer: "Yes, Gurpurab is widely celebrated in Moga. Marigold garlands and Sikh puja flowers for Gurpurab are available for same-day delivery." },
      { question: "Can I get birthday flowers in Moga?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Moga for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Moga?", answer: "Yes, same-day delivery is available across Moga for orders placed before 3 PM." }
    ]
  },

  "barnala": {
    cityName: "Barnala",
    metaTitle: "Flower Delivery in Barnala | Punjab | RedHeart",
    metaDescription: "Order flowers in Barnala, Punjab. Same-day delivery across Barnala. From ₹399.",
    h1: "Online Flower Delivery in Barnala",
    metaKeyword: "flower delivery barnala, online flowers barnala punjab, florist barnala, flowers barnala malwa cotton wheat textile industry sikh jat sangrur tarn taran",
    footerContent: `
<h2>Flower Delivery in Barnala — Malwa's Cotton-Wheat Belt and the Textile-Rich Small Town</h2>
<p>Barnala, in the heart of the Malwa region of Punjab, is the headquarters of Barnala district — one of Punjab's newer districts (carved from Sangrur district in 2006) and a compact but economically active cotton-wheat agricultural and textile manufacturing centre. The Barnala area was historically part of the Phulkian Misl (the Sikh Confederation from which the Patiala royal house descended), and Barnala Fort (Qila Barnala) stands as a heritage landmark. The town has a growing textile industry (spinning mills, cotton processing) leveraging the Malwa region's cotton production. The Akal Takht influence and Sikh religious calendar are central to Barnala's cultural life. The Bhagat Singh memorial at Khatkar Kalan (Nawanshahr district) is relatively nearby, and the freedom movement is cherished in local folk memory.</p>
<p>RedHeart delivers flowers across Barnala — Main Market, Sehna area, Bhadaur area, Tapa area, Dhanaula area, and Station Road. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barnala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sehna, Bhadaur, Tapa, Dhanaula, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Gurpurab available in Barnala?", answer: "Yes, Gurpurab is one of the biggest celebrations in Barnala. Marigold garlands and Sikh puja flowers are available for same-day delivery." },
      { question: "Can I get birthday flowers in Barnala?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Barnala for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Barnala?", answer: "Yes, same-day delivery is available across Barnala for orders placed before 3 PM." }
    ]
  },

  "faridkot": {
    cityName: "Faridkot",
    metaTitle: "Flower Delivery in Faridkot | Punjab Royal State | RedHeart",
    metaDescription: "Order flowers in Faridkot, Punjab. Same-day delivery near Faridkot Royal Palace & across Faridkot. From ₹399.",
    h1: "Online Flower Delivery in Faridkot",
    metaKeyword: "flower delivery faridkot, online flowers faridkot punjab, florist faridkot, flowers faridkot royal state baba farid sutlej cotton malwa princely state palace",
    footerContent: `
<h2>Flower Delivery in Faridkot — Baba Farid's Legacy and the Princely State of the Malwa Cotton Belt</h2>
<p>Faridkot, in the Malwa cotton plains of Punjab, is the headquarters of Faridkot district — a district carrying a deep layered history as a Muslim Sufi shrine centre and a Sikh princely state. Faridkot is named after Baba Farid (Sheikh Fariduddin Ganjshakar, 1173–1266 CE) — one of India's greatest Sufi saints (his verses are included in the Guru Granth Sahib, making him one of only a handful of non-Sikh saints in the holy scripture). The Faridkot princely state (a Sikh state that merged with India in 1948) has the Qila Mubarak (Mubarakgarh Fort), the Raj Mahal, and the Hukamnama Sahib (the last hukamnama — order — issued by the Akal Takht regarding the disputed Faridkot estate). The historic Sikh manuscript Faridkot Wala Teeka (the largest handwritten Granth Sahib commentary) originated here.</p>
<p>RedHeart delivers flowers across Faridkot — Main Market, Qila Mubarak area, Kotkapura area, Jaitu area, Sadiq area, and Station Road. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Faridkot, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Qila Mubarak area, Kotkapura, Jaitu, Sadiq, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Baba Farid Urs (Sufi festival) available in Faridkot?", answer: "Yes, Baba Farid's Urs and the Baba Farid Mela (celebrated at Faridkot and Pakpattan, Pakistan) are culturally significant in Faridkot. Rose petals and Sufi offering flowers for the Urs are available." },
      { question: "Are flowers for Gurpurab available in Faridkot?", answer: "Yes, Gurpurab is widely celebrated in Faridkot. Marigold garlands and Sikh puja flowers are available for same-day delivery." },
      { question: "Do you deliver flowers same day in Faridkot?", answer: "Yes, same-day delivery is available across Faridkot for orders placed before 3 PM." }
    ]
  },

  "nuh": {
    cityName: "Nuh",
    metaTitle: "Flower Delivery in Nuh | Mewat Haryana | RedHeart",
    metaDescription: "Order flowers in Nuh (Mewat), Haryana. Same-day delivery near Firozepur Jhirka & across Nuh. From ₹399.",
    h1: "Online Flower Delivery in Nuh",
    metaKeyword: "flower delivery nuh, online flowers nuh mewat haryana, florist nuh, flowers nuh meo community mewat aravalli firozpur jhirka delhi rajasthan border yamuna",
    footerContent: `
<h2>Flower Delivery in Nuh — Mewat's Meo Heartland and the Aravalli Hills' Southern Haryana Border</h2>
<p>Nuh (Mewat), on the Aravalli Hills in the southernmost corner of Haryana near Delhi and Rajasthan, is the headquarters of Nuh district (renamed from Mewat to Nuh in 2016) — the most demographically distinct district in Haryana, with a predominantly Meo Muslim population. The Meos are a fascinating syncretic community with Hindu-origin names, Islamic religious practice, and folk traditions combining both (a social identity shaped by the Tablighi Jamaat reformation movement of the 20th century). Nuh district is one of India's most educationally and economically underdeveloped, but in recent years government programs and industrial development (the Haryana Orbital Rail Corridor and the upcoming Delhi-Mumbai Industrial Corridor land parcels near Nuh) are driving change. Firozepur Jhirka (Nuh district) has the heritage Nawab palace. The Aravalli ecology — leopards, jackals, and rare plants — survives in patches here.</p>
<p>RedHeart delivers flowers across Nuh — Main Market, Firozepur Jhirka area, Tauru area, Punhana area, Pinangwan area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nuh (Mewat), Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Firozepur Jhirka, Tauru, Punhana, Pinangwan, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Eid available in Nuh (Mewat)?", answer: "Yes, Eid is a major celebration in Nuh (Mewat)'s predominantly Meo Muslim community. Fragrant rose and jasmine arrangements for Eid gifting are available for same-day delivery." },
      { question: "Can I get birthday flowers in Nuh?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nuh for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Nuh?", answer: "Yes, same-day delivery is available across Nuh (Mewat) for orders placed before 3 PM." }
    ]
  },

  "mahendragarh": {
    cityName: "Mahendragarh",
    metaTitle: "Flower Delivery in Mahendragarh | Haryana | RedHeart",
    metaDescription: "Order flowers in Mahendragarh, Haryana. Same-day delivery near Narnaul & across Mahendragarh. From ₹399.",
    h1: "Online Flower Delivery in Mahendragarh",
    metaKeyword: "flower delivery mahendragarh, online flowers mahendragarh haryana, florist mahendragarh, flowers mahendragarh narnaul sher shah suri birth 1857 rewari ahirwal aravalli",
    footerContent: `
<h2>Flower Delivery in Mahendragarh — Sher Shah Suri's Birthplace and the Ahirwal's Ancient GT Road Heritage</h2>
<p>Mahendragarh, in the Ahirwal region of southern Haryana near the Rajasthan border, is the headquarters of Mahendragarh district — one of Haryana's southernmost and most historically layered districts. The district HQ is at Narnaul (not at Mahendragarh city, which is separate). Narnaul is the birthplace of Sher Shah Suri (Farid Khan, born c. 1486 in Narnol) — the Afghan emperor who briefly displaced the Mughal Humayun, built the Grand Trunk Road (one of history's greatest road-building projects, from Chittagong to Peshawar), introduced the Rupee (India's currency unit), and whose Pashtun Suri dynasty ruled from 1540–55. The Birbal's Chhatri (a garden tomb built for Birbal, Akbar's celebrated courtier, who was born in Narnaul) is another historic landmark. The 1857 uprising saw significant resistance in Narnaul under Rao Tula Ram.</p>
<p>RedHeart delivers flowers across Mahendragarh — Main Market (Narnaul), Mahendragarh city, Ateli area, Kanina area, Nangal Chaudhry area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahendragarh (Narnaul), Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narnaul, Mahendragarh city, Ateli, Kanina, Nangal Chaudhry, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Mahendragarh (Narnaul)?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Mahendragarh/Narnaul for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Mahendragarh?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Mahendragarh." },
      { question: "Do you deliver flowers same day in Mahendragarh?", answer: "Yes, same-day delivery is available across Mahendragarh (Narnaul and surrounding areas) for orders placed before 3 PM." }
    ]
  },

  "fatehabad": {
    cityName: "Fatehabad",
    metaTitle: "Flower Delivery in Fatehabad | Haryana | RedHeart",
    metaDescription: "Order flowers in Fatehabad, Haryana. Same-day delivery near Ghaggar River & across Fatehabad. From ₹399.",
    h1: "Online Flower Delivery in Fatehabad",
    metaKeyword: "flower delivery fatehabad, online flowers fatehabad haryana, florist fatehabad, flowers fatehabad ghaggar river cotton wheat sirsa hisar haryana jat tiranga",
    footerContent: `
<h2>Flower Delivery in Fatehabad — Ghaggar Valley Cotton Heartland and Haryana's Agricultural Backbone</h2>
<p>Fatehabad, on the Ghaggar River (the Saraswati's remnant) in northern Haryana near the Rajasthan border, is the headquarters of Fatehabad district — named after the 14th-century Persian historian and poet Fateh Khan (who is said to have founded a settlement here). Fatehabad is one of Haryana's major cotton-growing districts, in the cotton-wheat belt that extends from Sirsa to Hisar. The Ghaggar River (identified by scholars with the ancient Vedic Saraswati River, now a seasonal flood channel) runs through the district, and Sirsa-Fatehabad forms a Haryana mini-agroindustrial zone. Fatehabad is part of the Jat-dominant north Haryana agrarian belt with a strong wrestling and wrestling-gymnasium (akhara) culture. The district's agricultural cooperatives, ginning mills, and oil seed processing industries are economic mainstays.</p>
<p>RedHeart delivers flowers across Fatehabad — Main Market, Tohana area, Bhuna area, Jakhal area, Ratia area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehabad, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Tohana, Bhuna, Jakhal, Ratia, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get birthday flowers in Fatehabad?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Fatehabad for orders placed before 3 PM." },
      { question: "Are flowers for Diwali available in Fatehabad?", answer: "Yes, Diwali marigold garlands and puja sets are available for same-day delivery in Fatehabad." },
      { question: "Do you deliver flowers same day in Fatehabad?", answer: "Yes, same-day delivery is available across Fatehabad for orders placed before 3 PM." }
    ]
  },

  "jind": {
    cityName: "Jind",
    metaTitle: "Flower Delivery in Jind | Haryana | RedHeart",
    metaDescription: "Order flowers in Jind, Haryana. Same-day delivery near Pandava heritage & across Jind. From ₹399.",
    h1: "Online Flower Delivery in Jind",
    metaKeyword: "flower delivery jind, online flowers jind haryana, florist jind, flowers jind pandava jyotisar kurukshetra mahabharata jayanti devi jait jind state sikh",
    footerContent: `
<h2>Flower Delivery in Jind — Jayanti Mata's Ancient Shrine and the Mahabharata's Kurukshetra Heartland</h2>
<p>Jind, in the heart of Haryana near Kurukshetra, is the headquarters of Jind district — a district of Mahabharata heritage and ancient religious significance. Jind is named after Jayanti Devi (a form of Goddess Durga) whose temple has stood here for centuries, and the town was the capital of the Jind Princely State (a Phulkian dynasty Sikh princely state, alongside Nabha and Patiala). The Jyotisar site (where Krishna delivered the Bhagavad Gita to Arjuna on the eve of the Kurukshetra War) is near Jind. The ancient Kurukshetra lake system and Brahma Sarovar are close. Jind district has a predominantly Jat agricultural community known for wheat and rice cultivation and the Haryanvi wrestling (kushti) tradition — Jind's Olympic wrestler Bajrang Punia is from neighbouring Jhajjar, but Jind wrestlers have placed at national level. The Jind state-era architectural legacy (havelis, gateways) remains.</p>
<p>RedHeart delivers flowers across Jind — Main Market, Narwana area, Safidon area, Uchana area, Pillu Khera area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jind, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Narwana, Safidon, Uchana, Pillu Khera, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Jayanti Devi temple puja available in Jind?", answer: "Yes, the Jayanti Devi temple (for whom Jind is named) is an important Shakti shrine. Marigold garlands and Navratri puja flower sets are available for same-day delivery in Jind." },
      { question: "Can I get birthday flowers in Jind?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Jind for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Jind?", answer: "Yes, same-day delivery is available across Jind for orders placed before 3 PM." }
    ]
  },

  "kaithal": {
    cityName: "Kaithal",
    metaTitle: "Flower Delivery in Kaithal | Pandava Haryana | RedHeart",
    metaDescription: "Order flowers in Kaithal, Haryana. Same-day delivery near Kurukshetra & across Kaithal. From ₹399.",
    h1: "Online Flower Delivery in Kaithal",
    metaKeyword: "flower delivery kaithal, online flowers kaithal haryana, florist kaithal, flowers kaithal kapisthal hanuman kurukshetra mahabharata panchal wheat haryana",
    footerContent: `
<h2>Flower Delivery in Kaithal — Kapisthal, Hanuman's Birthplace, and the Ancient Panchal Kingdom</h2>
<p>Kaithal, in Haryana's Kurukshetra-Ambala belt, is the headquarters of Kaithal district — named after Kapisthal, the ancient city that Mahabharata and Puranic texts identify as the birthplace of Hanuman (the monkey-god hero of the Ramayana). The Hanuman Janamasthali (Anjani Sthal) temple in Kaithal is visited by pilgrims from across Haryana and neighbouring states. Kaithal was also part of the ancient Panchal Kingdom (the kingdom of Draupadi's father, King Drupada, of Mahabharata fame) and has the Kailash Mahadev temple (believed to be over 5,000 years old). The district's Ghaggar River flows nearby and its agricultural economy is based on wheat, rice, and sugarcane. Kaithal's strategic position on the ancient GT Road between Delhi and Punjab gave it commercial significance.</p>
<p>RedHeart delivers flowers across Kaithal — Main Market, Cheeka area, Guhla area, Pundri area, Siwan area, and Station Road. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaithal, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Cheeka, Guhla, Pundri, Siwan, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for Hanuman Janmashtami (Hanuman's birthplace, Kapisthal/Kaithal) available?", answer: "Yes, Kaithal's Hanuman Janamasthali (Anjani Sthal, identified as Hanuman's birthplace) is an important pilgrimage site. Marigold garlands and Hanuman puja flower sets are available." },
      { question: "Can I get birthday flowers in Kaithal?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Kaithal for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Kaithal?", answer: "Yes, same-day delivery is available across Kaithal for orders placed before 3 PM." }
    ]
  },

  "washim": {
    cityName: "Washim",
    metaTitle: "Flower Delivery in Washim | Akola Maharashtra | RedHeart",
    metaDescription: "Order flowers in Washim, Maharashtra. Same-day delivery near Washim & across Washim district. From ₹399.",
    h1: "Online Flower Delivery in Washim",
    metaKeyword: "flower delivery washim, online flowers washim maharashtra, florist washim, flowers washim vidarbha akola cotton mahalakshmi temple vashim ancient history soybean",
    footerContent: `
<h2>Flower Delivery in Washim — Ancient Vashim's Mahalakshmi Temple and Vidarbha's Cotton-Soybean Belt</h2>
<p>Washim, in the Vidarbha region of Maharashtra near Akola and Amravati, is the headquarters of Washim district — a district with a remarkable ancient heritage beneath its modern agricultural exterior. The ancient city of Vashim (Washim's historical name) was the capital of the Vakataka dynasty (3rd–5th century CE, a powerful Deccan empire contemporary with the Guptas, who patronised the famous Ajanta caves). The Mahalakshmi temple at Washim (believed to be an ancient Shakti Peetha or powerful goddess shrine) draws pilgrims for Navratri. Washim district is part of the Vidarbha cotton-soybean belt — the region where cotton and soybean cultivation on black cotton (Deccan trap) soils is the mainstay, and where farmer distress (associated with cotton price volatility and debt) has been a persistent social challenge. The Poorna River flows through the district.</p>
<p>RedHeart delivers flowers across Washim — Main Market, Mahalakshmi temple area, Risod area, Manora area, Karanja area, and Station Road. Our range includes roses, marigolds, seasonal Maharashtra bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Washim, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mahalakshmi area, Risod, Manora, Karanja, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Maharashtra bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are flowers for the Washim Mahalakshmi temple Navratri available?", answer: "Yes, the Mahalakshmi temple in Washim (an ancient Shakti shrine) draws major Navratri crowds. Marigold garlands and Devi puja flower sets are available for same-day delivery in Washim." },
      { question: "Can I get birthday flowers in Washim?", answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Washim for orders placed before 3 PM." },
      { question: "Do you deliver flowers same day in Washim?", answer: "Yes, same-day delivery is available across Washim for orders placed before 3 PM." }
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
