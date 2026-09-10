/**
 * Batch 5 — Varanasi, Amritsar, Dehradun, Mysuru, Jodhpur, Udaipur
 * node scripts/seo-city-flowers-5.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {

  "varanasi": {
    cityName: "Varanasi",
    metaTitle: "Flower Delivery in Varanasi | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Varanasi with same-day delivery. Roses, marigolds & Ganga aarti flowers to Lanka, Assi Ghat, Sigra & all areas. From ₹399.",
    h1: "Flower Delivery in Varanasi",
    metaKeyword: "flower delivery in Varanasi, online flower delivery Varanasi Banaras, same day flower delivery Varanasi, florist Varanasi, send flowers Varanasi, Ganga Ghat flowers Varanasi",
    footerContent: `
<h2>Flower Delivery in Varanasi — The City Where Flowers Meet Eternity</h2>
<p>Varanasi is the oldest continuously inhabited city in the world — Kashi, as it was and still is called by its devotees, where the Ganga does not merely flow past but is believed to carry the dead to liberation. In this city, flowers are not decoration — they are offering, they are prayer, they are the language of a conversation between the mortal and the divine. The marigold garlands strung at dawn for the Ganga Aarti at Dashashwamedh Ghat, the rose petals scattered on the river at sunset, the jasmine offered at the Kashi Vishwanath temple — flowers in Varanasi carry the weight of millennia of devotion. RedHeart delivers fresh flowers across Varanasi with same-day and midnight delivery, starting at ₹399, serving both the city's devotional needs and its modern personal gifting.</p>

<p>Varanasi's flower supply comes from markets near Chowk and Godowlia — the old city's commercial heart — as well as the wholesale market at Maidagin. The city is surrounded by the Ganga-Yamuna doab's fertile soil, and local farms supply marigolds, jasmine, and tuberose in abundance. The flower trade here is ancient — and it continues to thrive.</p>

<h2>Quick Reference — Flower Delivery in Varanasi</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Varanasi (Kashi / Banaras), Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lanka, Assi Ghat, Sigra, Nadesar, BHU campus, Orderly Bazar, Kabir Nagar, Sunderpur, Shivpur, Lahartara</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ganga Aarti, Dev Deepawali (Karthik Purnima), Shivratri, Dev Uthani Ekadashi, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, jasmine, roses, tuberose, hibiscus, lotus</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Oldest living city in the world; city of Shiva; Kashi Vishwanath temple</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Dev Deepawali — When Every Ghat Becomes a Flower Garden</h2>
<p>Dev Deepawali (Karthik Purnima) is Varanasi's most visually spectacular festival — the day when the 84 ghats of the Ganga are lit with lakhs of diyas, and the entire city seems to float on the river. On this day, flowers are offered at every ghat in quantities that dwarf even Diwali. Marigold petals are scattered on the Ganga; tuberose garlands are placed at riverside temples; rose petal boats with a lit diya are released on the water. RedHeart prepares dedicated Dev Deepawali stock for Varanasi, with bulk orders available for both personal devotion and the NGOs and communities that organise public celebrations.</p>

<h2>Beyond the Ghats — Varanasi's Modern Addresses</h2>
<p>Lanka, near Banaras Hindu University (BHU), is a young, educated neighbourhood with a student population that receives flowers for teachers, farewells, and Valentine's Day. Sigra and Nadesar are Varanasi's relatively modern commercial areas where businesses and families maintain a more contemporary gifting culture. The BHU campus itself — the largest residential university campus in Asia — sees frequent flower deliveries for academic occasions, teacher felicitations, and cultural events. Sunderpur, Shivpur, and Lahartara are established residential areas covered by RedHeart's Varanasi network.</p>

<h2>Why Varanasi Trusts RedHeart</h2>
<p>Kashi has survived empires, invasions, and centuries of change because what it offers is eternal — the Ganga, the ghats, the thread of devotion that connects each day to ten thousand years of prayer. RedHeart's flowers are, by comparison, a small offering. But we treat them with the same care that this city treats all offerings. Fresh, delivered on time, presented well — in a city that understands the importance of sincerity in every act of devotion, RedHeart aims to match that standard.</p>
`,
    faqs: [
      { question: "Can I order marigold garlands for Ganga Aarti or temple offerings in Varanasi?", answer: "Yes! RedHeart delivers fresh marigold garlands, jasmine strings, and tuberose bunches for Ganga Aarti, Kashi Vishwanath temple offerings, and home puja across Varanasi. We understand the city's devotional flower needs and stock accordingly, with early morning delivery available." },
      { question: "Does RedHeart deliver flowers to BHU (Banaras Hindu University) campus areas?", answer: "Yes, RedHeart delivers to Lanka (near BHU), Assi Ghat area, and the BHU campus zones with same-day delivery. We handle teacher appreciation flowers, farewell bouquets, and birthday deliveries to the student and faculty community." },
      { question: "Are Dev Deepawali flowers available for delivery in Varanasi?", answer: "Yes! Dev Deepawali (Karthik Purnima) is Varanasi's biggest flower day. RedHeart prepares dedicated stock weeks in advance — marigold petals, tuberose garlands, and rose bunches for the festival. We handle both personal orders and bulk community orders for the ghat celebrations." },
      { question: "Which areas of Varanasi does RedHeart cover?", answer: "RedHeart covers Lanka, Assi Ghat, Sigra, Nadesar, BHU campus, Orderly Bazar, Kabir Nagar, Sunderpur, Shivpur, Lahartara, and all major areas of Varanasi city. Ghat-adjacent addresses can also be accommodated — specify the ghat and nearest access road when ordering." },
      { question: "Is midnight flower delivery available in Varanasi?", answer: "Yes, midnight delivery is available across Varanasi. Place your order before 9 PM and choose your preferred delivery time. Perfect for birthday surprises or for those who want flowers ready at the ghat for a dawn aarti." }
    ]
  },

  "amritsar": {
    cityName: "Amritsar",
    metaTitle: "Flower Delivery in Amritsar | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Amritsar with same-day delivery. Roses, bouquets & Gurpurab flowers to Mall Road, Ranjit Avenue, Green Avenue & all areas. From ₹399.",
    h1: "Flower Delivery in Amritsar",
    metaKeyword: "flower delivery in Amritsar, online flower delivery Amritsar, same day flower delivery Amritsar, florist Amritsar, send flowers Amritsar, Golden Temple flowers Amritsar",
    footerContent: `
<h2>Flower Delivery in Amritsar — The Golden City's Heart Is Bigger Than Its Gateway</h2>
<p>Amritsar is the soul of Punjab. The Golden Temple — Sri Harmandir Sahib — sits at the city's physical and spiritual centre, its golden reflection shimmering in the Amrit Sarovar, the pool of nectar. Everything in Amritsar radiates from that sacred geometry — the lanes of the old city, the politics, the identity. And flowers in Amritsar carry that same quality of open-hearted generosity. Punjabi gifting culture is direct: you give well, you give big, you give from the heart. Floral arrangements here are never timid. RedHeart delivers fresh flowers across Amritsar with same-day and midnight delivery, starting at ₹399, for a city that does nothing small.</p>

<p>Amritsar's flower supply comes from the wholesale market near Hall Bazar and the phawar mandi on the city's outskirts. Punjab's fertile plains grow excellent marigolds and roses, and the supply chain from Pathankot and Jalandhar farms means consistent freshness. Gurpurabs — the Sikh festivals celebrating the birthdays and martyrdom days of the Gurus — are times of extraordinary flower demand in Amritsar, when the Golden Temple and surrounding gurdwaras receive tonnes of fresh flowers as sangat (congregation) offerings.</p>

<h2>Quick Reference — Flower Delivery in Amritsar</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amritsar, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mall Road, Ranjit Avenue, Green Avenue, Lawrence Road, Model Town, Majitha Road, GT Road corridor, Putlighar, Sultanwind Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gurpurabs, Baisakhi, Diwali (Bandi Chhor Divas), Lohri, weddings, birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gladioli, tuberose, gerberas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Golden Temple (Sri Harmandir Sahib), Jallianwala Bagh, Wagah Border</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Baisakhi and the Punjabi Flower Calendar</h2>
<p>Baisakhi — the Punjabi new year and harvest festival on April 13 — is Amritsar's most jubilant occasion. The Golden Temple is decorated with fresh flowers; Bhangra and Giddha performances are framed by floral backdrops; families exchange sweets and gifts. Gladioli — Punjab's unofficial festival flower — are widely used for Baisakhi arrangements. Lohri in January, the winter harvest festival, sees bonfire celebrations accompanied by flower gifting. Diwali in Amritsar is celebrated as Bandi Chhor Divas — the day Guru Hargobind Sahib was released from Gwalior Fort — and has a particular Sikh sacred significance, with the Golden Temple lit spectacularly. RedHeart maintains dedicated seasonal stock for all of Amritsar's major festivals.</p>

<h2>Ranjit Avenue to Mall Road — Modern Amritsar</h2>
<p>Ranjit Avenue is Amritsar's widest and most prestigious residential boulevard — long, tree-lined, with the kind of homes where Punjabi hospitality is practised generously. Birthday parties here are large affairs, and the flower arrangements requested from RedHeart for these celebrations reflect that generosity. Mall Road, the city's primary commercial and hotel strip, sees flowers delivered for wedding receptions, corporate events, and the personal gifting that accompanies Amritsar's thriving hospitality and tourism sector. Green Avenue and Model Town are established residential areas with consistent year-round demand. The GT Road corridor, Amritsar's connection to the broader Punjab highway network, is fully covered.</p>

<h2>Why Amritsar Orders From RedHeart</h2>
<p>Punjab gives with a full hand. When an Amritsari orders flowers, they are not looking for the minimum — they want the arrangement that will make the recipient feel genuinely celebrated. RedHeart's Amritsar service understands that. Our gladioli are fresh, our rose bouquets are generous, and our delivery arrives when promised. In a city whose identity is built on warmth and generosity, we try to match the standard the city sets.</p>
`,
    faqs: [
      { question: "Can I order flowers for Gurpurab offerings in Amritsar?", answer: "Yes! RedHeart delivers fresh marigold garlands, rose petal bags, and floral offerings for Gurpurabs across Amritsar. We understand the specific flower traditions of Sikh festivals and stock accordingly, with early morning deliveries available for those preparing for Gurpurab sangat." },
      { question: "Is same-day flower delivery available in Ranjit Avenue and Mall Road, Amritsar?", answer: "Yes, RedHeart delivers flowers same-day to Ranjit Avenue, Mall Road, Green Avenue, Lawrence Road, Model Town, and all major areas of Amritsar. Orders placed before 5 PM are delivered within 2–4 hours." },
      { question: "What flowers are popular in Amritsar for weddings and celebrations?", answer: "Gladioli are Punjab's signature celebration flower — widely used for wedding stages and event decorations in Amritsar. Roses and tuberose are essential for personal gifting. Marigolds dominate all festival and religious occasions. RedHeart carries all these in generous Punjabi-style arrangements." },
      { question: "Does RedHeart deliver flowers for Baisakhi and Lohri in Amritsar?", answer: "Yes! Baisakhi and Lohri are two of Amritsar's biggest occasions. RedHeart prepares dedicated festival stock including gladioli for Baisakhi arrangements, marigold garlands for Lohri bonfire setups, and festive rose bouquets for gifting between families." },
      { question: "Is midnight flower delivery available in Amritsar?", answer: "Yes, midnight delivery is available across Amritsar. Order before 9 PM, choose your time, and we deliver. Ideal for birthday and anniversary surprises in Ranjit Avenue, Model Town, or any Amritsar neighbourhood." }
    ]
  },

  "dehradun": {
    cityName: "Dehradun",
    metaTitle: "Flower Delivery in Dehradun | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Dehradun with same-day delivery. Roses, bouquets & hill flowers to Rajpur Road, Clement Town, Patel Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Dehradun",
    metaKeyword: "flower delivery in Dehradun, online flower delivery Dehradun, same day flower delivery Dehradun, florist Dehradun, send flowers Dehradun, flowers Rajpur Road Clement Town",
    footerContent: `
<h2>Flower Delivery in Dehradun — The Doon Valley's Gifting Culture</h2>
<p>Dehradun sits in the Doon Valley, cradled between the Shivalik Hills and the Garhwal Himalayas, with Mussoorie visible from its higher points and the Rajaji National Park bordering its edges. This geography gives Dehradun a natural gentleness that its people reflect — this is a city of cantonments, of IIT and UPES students, of Dehradun's famous boarding school alumni who return every summer to a city that has always felt like a more civilised version of the plains. The gifting culture here is thoughtful, influenced by the city's educational character and its proximity to the natural world. RedHeart delivers fresh flowers across Dehradun with same-day and midnight delivery, starting at ₹399.</p>

<p>Dehradun's flower supply comes from the Roshanabad nursery belt along the Haridwar Road, as well as from Pathribagh market. The valley's climate is excellent for rose cultivation, and local farms supplement the supply from Chandigarh and Delhi. Uttarakhand's own Phool Dei festival — a spring floral festival unique to Garhwali culture, where children place flowers on doorsteps as blessings — gives flowers a particularly important cultural role in the city.</p>

<h2>Quick Reference — Flower Delivery in Dehradun</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dehradun, Uttarakhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajpur Road, Clement Town, Patel Nagar, Saharanpur Road, Balliwala, Dharampur, Race Course, Dalanwala, Vasant Vihar, Nehru Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Phool Dei (spring), Makar Sankranti, Diwali, birthdays, Army/CRPF occasions</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, rhododendron-inspired bouquets, marigolds, gerberas, lilies</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Doon Valley; military cantonments; IIT Roorkee gateway city; boarding schools</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Cantonment Culture and Its Gifting Traditions</h2>
<p>Dehradun is one of India's most significant cantonment cities — IMA (Indian Military Academy), ITBP headquarters, and ONGC's headquarters are all here. Military culture has a formal gifting tradition: flowers for passing-out parades, for officers' retirement ceremonies, for welcome ceremonies at messes, and for the quiet anniversary surprises between families stationed at a post away from home. RedHeart handles all of these with the reliability that military culture demands. Clement Town, with its large Tibetan community, adds another cultural dimension — the Tibetan Buddhist calendar has its own floral occasions, including flowers for the Sakadawa festival.</p>

<h2>Rajpur Road to Vasant Vihar — Dehradun's Residential Spread</h2>
<p>Rajpur Road is Dehradun's most prestigious address — the ridge road that climbs towards Mussoorie, lined with old bungalows, hotels, and the kind of neighbourhood that feels like India before the flyovers. Deliveries here carry the expectation of quality and presentation. Race Course and Dalanwala are established residential zones with older families and year-round gifting demand. Patel Nagar and Balliwala are the newer commercial-residential mixed areas serving the city's growing workforce. Vasant Vihar and Nehru Colony round out the coverage area.</p>

<h2>Why Dehradun Chooses RedHeart</h2>
<p>Dehradun has educated expectations — from its boarding school alumni to its IIT graduates to the IMA officers, this city's residents have seen quality. RedHeart's Dehradun service meets that expectation: fresh flowers from the valley's own farms, delivered with care, at a price that respects the city's sensibility. In a city defined by its hills and its schools, where every view is worth a photograph and every tradition is worth preserving, RedHeart is proud to be the flower service of choice.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to cantonment areas in Dehradun?", answer: "Yes, RedHeart delivers to Clement Town cantonment, IMA area, CRPF colony, and all cantonment-adjacent areas in Dehradun. We handle formal military-occasion flowers including passing-out parade congratulations, retirement arrangements, and mess event flowers." },
      { question: "Can I order flowers for Phool Dei or Uttarakhand festivals in Dehradun?", answer: "Yes! Phool Dei — Uttarakhand's spring floral festival — and other local occasions are occasions RedHeart covers with season-appropriate flowers. We deliver seasonal blooms, rhododendron-inspired arrangements, and traditional festival flowers across Dehradun." },
      { question: "Is same-day flower delivery available on Rajpur Road and in Clement Town, Dehradun?", answer: "Yes, RedHeart covers Rajpur Road, Clement Town, Patel Nagar, Race Course, Dalanwala, Vasant Vihar, and all major Dehradun areas with same-day delivery. Orders before 5 PM are typically delivered within 2–4 hours." },
      { question: "What flowers are popular in Dehradun?", answer: "Roses are the top gifting flower in Dehradun year-round. The valley's cool climate makes lilies and gerberas particularly fresh here. Marigolds are essential for Diwali and religious occasions. For hill-themed arrangements, RedHeart creates bouquets with rhododendron-influenced colour palettes that capture the Uttarakhand aesthetic." },
      { question: "Is midnight flower delivery available in Dehradun?", answer: "Yes, midnight delivery is available across Dehradun. Order before 9 PM and choose your time — ideal for birthday surprises in Rajpur Road bungalows, cantonment quarters, or Clement Town homes." }
    ]
  },

  "mysuru": {
    cityName: "Mysuru",
    metaTitle: "Flower Delivery in Mysuru (Mysore) | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Mysuru with same-day delivery. Roses, jasmine & Dasara bouquets to VV Mohalla, Vijayanagar, Gokulam & all areas. From ₹399.",
    h1: "Flower Delivery in Mysuru",
    metaKeyword: "flower delivery in Mysuru Mysore, online flower delivery Mysore, same day flower delivery Mysuru, florist Mysore, send flowers Mysuru, Dasara flowers Mysore",
    footerContent: `
<h2>Flower Delivery in Mysuru — The City of Palaces Wears Jasmine in Its Hair</h2>
<p>Mysuru is called the City of Palaces — the Mysore Palace, whose Indo-Saracenic architecture is illuminated by ninety-seven thousand light bulbs on Sundays and festival nights, is the third most visited tourist attraction in India after the Taj Mahal and Tirumala Venkateswara. But Mysuru's deeper identity is as Karnataka's cultural capital — the city of Kannada literature, of Carnatic music, of the Ashtanga yoga tradition pioneered by K. Pattabhi Jois in the Lakshmipuram neighbourhood. And flowers are central to that identity: Mysuru's jasmine — known as Mysore Mallige — is considered the finest jasmine in the world, its fragrance more complex and lasting than any other variety. RedHeart delivers fresh flowers across Mysuru with same-day and midnight delivery, starting at ₹399.</p>

<p>Mysuru's wholesale flower market near Devaraja Market is one of South India's most vibrant morning markets. The Mysore Mallige (malli hoo) arrives from farms in the Nanjangud and Mandya belts. Roses from Ooty's hill farms and local marigolds complete the supply. During Dasara — Karnataka's state festival, which Mysuru has celebrated for four centuries — the flower demand in the city reaches extraordinary levels.</p>

<h2>Quick Reference — Flower Delivery in Mysuru</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mysuru (Mysore), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">VV Mohalla, Vijayanagar, Gokulam, Kuvempunagar, Saraswathipuram, Lakshmipuram, Jayanagar (Mysuru), JP Nagar, Hebbal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dasara (Mysuru Dasara — state festival), Ugadi, Sankranti, Ganesha Chaturthi, birthdays, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mysore Mallige (jasmine), roses, marigolds, chrysanthemums, tuberose</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Famous for</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mysore Palace, Dasara procession, Mysore Mallige jasmine, sandalwood</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Mysuru Dasara — Ten Days When the City Wears Flowers</h2>
<p>Mysuru Dasara is not merely a festival — it is Karnataka's identity expressed in ten days of pageantry, culture, and devotion. The Mysore Palace is illuminated every night; the Jamboree procession features the Howdah elephant carrying the golden idol of Goddess Chamundeshwari through streets lined with ten metres of fresh flower decorations on both sides. Flower consumption during Dasara in Mysuru is extraordinary — every hotel, every restaurant, every home, every public space is decorated. Marigold garlands stretch the length of palace roads; jasmine is woven into every decorative arrangement. RedHeart prepares for Dasara with extended stock and expanded delivery capacity, ensuring every order is fulfilled despite the city-wide demand.</p>

<h2>VV Mohalla to Kuvempunagar — Mysuru's Addresses</h2>
<p>VV Mohalla (Vani Vilas Mohalla) is one of Mysuru's oldest and most culturally rich residential areas — the neighbourhood of scholars, musicians, and the families that have maintained Carnatic music's Mysuru gharana for generations. Gokulam is a leafy, planned residential extension popular with software professionals working in Mysuru's Infosys campus. Saraswathipuram and Lakshmipuram carry Mysuru's academic-intellectual identity. Vijayanagar is a large, newer residential zone with a young professional demographic. Kuvempunagar, named after the Kannada poet Kuvempu, is an aspiring area with steady gifting activity.</p>

<h2>Why Mysuru Trusts RedHeart</h2>
<p>Mysuru has aesthetic standards formed over centuries of royal patronage. A city that has maintained a living palace, a functioning tradition of Carnatic music, and the world's finest jasmine does not accept mediocrity in any category. RedHeart's Mysuru service brings Mysore Mallige freshness that the Devaraja Market itself would not be embarrassed by, delivered to every corner of this palace city on time. In Karnataka's cultural heart, we are proud to serve.</p>
`,
    faqs: [
      { question: "Can I order Mysore Mallige (jasmine) for delivery in Mysuru?", answer: "Yes! Mysore Mallige — the world-renowned jasmine grown in the Nanjangud-Mandya belt — is available for delivery across Mysuru through RedHeart. Fresh strings and bunches delivered same-day. There is no better jasmine in India, and we bring it to your door." },
      { question: "Does RedHeart deliver Dasara flowers in Mysuru?", answer: "Yes! Mysuru Dasara is RedHeart's biggest flower occasion in this city. We stock marigold garlands, jasmine, roses, and chrysanthemums for the ten-day festival period, with expanded capacity to handle the city-wide demand. We deliver to homes, hotels, and commercial establishments throughout Dasara." },
      { question: "Is same-day flower delivery available in VV Mohalla, Gokulam, and Kuvempunagar, Mysuru?", answer: "Yes, RedHeart delivers flowers same-day to VV Mohalla, Gokulam, Kuvempunagar, Vijayanagar, Saraswathipuram, Lakshmipuram, and all major areas of Mysuru. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I get flower arrangements delivered to hotels near Mysore Palace for a special occasion?", answer: "Yes! RedHeart delivers to hotels and homestays near Mysore Palace, on JLB Road, and in the Nazarbad area. We handle anniversary arrangements, honeymoon room setups, and birthday surprise deliveries to Mysuru's hotel addresses with same-day and midnight delivery." },
      { question: "Is midnight delivery available in Mysuru?", answer: "Yes, midnight flower delivery is available across Mysuru. Order before 9 PM and select your time — perfect for birthday surprises in Gokulam, VV Mohalla, Saraswathipuram, or anywhere in the palace city." }
    ]
  },

  "jodhpur": {
    cityName: "Jodhpur",
    metaTitle: "Flower Delivery in Jodhpur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Jodhpur with same-day delivery. Roses, marigolds & bouquets to Ratanada, Sardarpura, Shastri Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Jodhpur",
    metaKeyword: "flower delivery in Jodhpur, online flower delivery Jodhpur, same day flower delivery Jodhpur, florist Jodhpur, send flowers Jodhpur, flowers Blue City Jodhpur",
    footerContent: `
<h2>Flower Delivery in Jodhpur — The Blue City's Desert Blooms</h2>
<p>Jodhpur is the Blue City — the indigo-painted Brahmin homes of the old city, clustered around the Mehrangarh Fort's massive sandstone ramparts, create a view from above that is unlike anything else in the world. The fort itself is one of India's most impressive: nine gates, eighteen years to build, its walls rising ninety metres from the rocky hill they stand on. Jodhpur is also the second city of Rajasthan, its commerce built on handicrafts, textiles, the world-famous jodhpuri suit, and an agricultural belt that supplies the region despite the desert. Flowers in Jodhpur are expensive — the desert heat is hostile to cultivation — but they are valued precisely because of that difficulty. RedHeart delivers fresh flowers across Jodhpur with same-day and midnight delivery, starting at ₹399, serving India's Blue City with the freshness that its climate makes precious.</p>

<p>Jodhpur's flower supply comes from the Clock Tower market (Ghanta Ghar) area and a wholesale supply from Jaipur and Ajmer farms. The desert heat means flowers transported to Jodhpur must be handled with particular care — cold-chain management is essential. RedHeart's Jodhpur logistics account for this, ensuring our flowers arrive fresh despite the arid conditions.</p>

<h2>Quick Reference — Flower Delivery in Jodhpur</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jodhpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ratanada, Sardarpura, Shastri Nagar, Chopasni Housing Board, Bhati Circle, Pal Road, Mandore, Basni, Residency Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marwar Festival, Teej, Gangaur, Diwali, weddings (peak Nov–Feb), birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, tuberose, desert roses (dried)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Blue City, Mehrangarh Fort, Marwar culture</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Marwari Weddings — The World's Most Elaborate Flower Occasions</h2>
<p>Jodhpur is one of the great wedding cities of India. Marwari wedding traditions involve flowers at every stage — the tilak ceremony, the mehendi function, the baraat with its flower-decorated horse, the wedding mandap with marigold and rose canopy, and the vidaai with flower petals. Destination weddings at Mehrangarh Fort, Umaid Bhawan Palace, and the many heritage havelis of Jodhpur bring wealthy families from across India and the world, and their wedding flower demands are extraordinary. RedHeart handles Jodhpur's wedding flower season — October to February — with dedicated capacity for both large event orders and individual personal gifting during the same period.</p>

<h2>Ratanada to Basni — Jodhpur's Modern Life</h2>
<p>Ratanada is Jodhpur's most prestigious residential area — home to senior officials, business families, and the professionals who run the city's legal, medical, and educational institutions. Sardarpura is the commercial heart, with markets, offices, and a busy urban energy. Shastri Nagar and Chopasni Housing Board serve the city's middle-class residential majority. Basni is the industrial area where Jodhpur's manufacturing sector is based. Mandore, north of the city near the ancient Mandore Gardens, is a quieter residential area adjacent to one of Jodhpur's most beautiful historical sites.</p>

<h2>Why Jodhpur Chooses RedHeart</h2>
<p>In the desert, water is valued; in Jodhpur, flowers are valued. RedHeart's ability to deliver fresh flowers to a hot, arid city despite the climate is a logistics achievement that residents notice and appreciate. Fresh roses in Jodhpur's summer heat — something the city's residents have always known to be difficult to obtain — is exactly what RedHeart delivers. In the Blue City, where everything beautiful is a small triumph over the desert, we are proud to be the service that makes flowers possible.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to heritage hotels and wedding venues in Jodhpur?", answer: "Yes! RedHeart delivers to heritage hotels, palace venues like Umaid Bhawan, Mehrangarh Fort event spaces, and all wedding venues across Jodhpur. We handle both large wedding event flower orders and individual personal gifting during the Jodhpur wedding season (October–February)." },
      { question: "Is same-day flower delivery available in Ratanada and Sardarpura, Jodhpur?", answer: "Yes, RedHeart delivers flowers same-day to Ratanada, Sardarpura, Shastri Nagar, Chopasni Housing Board, Pal Road, Basni, and all major areas of Jodhpur. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "What flowers are popular in Jodhpur for Marwari weddings and festivals?", answer: "Marigolds are the essential Marwari wedding and festival flower — used in enormous quantities for mandap decorations, garlands, and petals. Tuberose adds fragrance to all major occasions. Roses are the top personal gift. Gerberas are popular for modern wedding decorations. RedHeart carries all in wedding-appropriate quantities." },
      { question: "Can I order flowers for Teej and Gangaur festivals in Jodhpur?", answer: "Yes! Teej and Gangaur are Rajasthan's major women's festivals, celebrated with elaborate devotion in Jodhpur. RedHeart delivers fresh marigolds, seasonal flowers, and decorative arrangements for both festivals." },
      { question: "Is midnight flower delivery available in Jodhpur?", answer: "Yes, midnight flower delivery is available across Jodhpur. Order before 9 PM and choose your delivery time — perfect for birthday surprises in Ratanada, heritage hotel suite surprises, or any Jodhpur address." }
    ]
  },

  "udaipur": {
    cityName: "Udaipur",
    metaTitle: "Flower Delivery in Udaipur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Udaipur with same-day delivery. Roses, bouquets near Lake Pichola, Fateh Sagar, Hiran Magri & all areas. From ₹399.",
    h1: "Flower Delivery in Udaipur",
    metaKeyword: "flower delivery in Udaipur, online flower delivery Udaipur, same day flower delivery Udaipur, florist Udaipur, send flowers Udaipur, flowers Lake City Udaipur",
    footerContent: `
<h2>Flower Delivery in Udaipur — The Venice of the East Has Always Known Beauty</h2>
<p>Udaipur is called the Venice of the East, the City of Lakes, the most romantic city in India — and each of these names is accurate. Lake Pichola at sunset, with the Lake Palace Hotel shimmering in its centre and the Aravalli Hills turning pink behind the City Palace — it is a view that has made the city famous across the world. Udaipur was founded in 1559 by Maharana Udai Singh II after the fall of Chittorgarh, and the Mewar dynasty that built it chose beauty as a deliberate act of identity. Flowers in Udaipur carry that legacy — they are part of a city that has always understood that beauty matters. RedHeart delivers fresh flowers across Udaipur with same-day and midnight delivery, starting at ₹399, to a city where the standard for romance is among the highest in the world.</p>

<p>Udaipur's flower supply comes from the market near Bapu Bazar and the wholesale market near Delhi Gate. The city draws from Rajasthan's Ajmer belt for most cut flowers, supplemented by marigolds from local farms around the Udaipur plateau. The lakes provide a microclimate that moderates the desert heat somewhat, making flower freshness more manageable here than in Jodhpur or Jaisalmer.</p>

<h2>Quick Reference — Flower Delivery in Udaipur</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udaipur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hiran Magri, Shobhagpura, Sukhadia Circle, Fateh Sagar, Ambamata, Sector 4/5/11/14, Pratap Nagar, Madri, Debari</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mewar Festival (spring), Teej, Gangaur, destination weddings, anniversaries</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, orchids, lilies</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Venice of the East, City of Lakes, most romantic Indian city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Gangaur — Udaipur's Most Beautiful Festival</h2>
<p>Gangaur is the festival of Goddess Gauri (Parvati), celebrated across Rajasthan in March-April, and Udaipur's Gangaur is considered the most visually spectacular in the state. Elaborately dressed women carry earthen Gauri idols decorated with fresh flowers in a procession that circles the city's lakes — the procession itself is a living flower arrangement, with women wearing flower jewellery and the idols surrounded by garlands. The Mewar Festival, organised by the state tourism department, begins on the day of Gangaur and celebrates the arrival of spring with floral performances and lake-side events. RedHeart delivers Gangaur flowers across Udaipur — fresh marigolds, roses, and seasonal blooms in the quantities and arrangements that Rajasthan's most beautiful festival deserves.</p>

<h2>Romantic Udaipur — Where Every Anniversary Should Be Celebrated</h2>
<p>Udaipur is India's premier romantic destination — the Lake Palace hotel (voted one of the most romantic hotels in the world), the rooftop restaurants overlooking Lake Pichola, the City Palace sunset views, the boat rides as the sky turns gold. Couples come here for anniversary celebrations, honeymoons, and proposals. RedHeart is proud to be the flower service they call to make those moments complete. A rose arrangement delivered to a Lake Pichola hotel before the couple arrives, a surprise midnight bouquet on a houseboat, or a proposal at Sajjangarh (Monsoon Palace) backed by flowers we arranged — these are the Udaipur orders that we take with particular pride. We deliver to all hotels along Fateh Sagar and Pichola, as well as all residential areas across the city.</p>

<h2>Why Udaipur Trusts RedHeart</h2>
<p>Udaipur has been beautiful for five centuries. The Mewar dynasty built its kingdom on the principle that beauty and dignity are worth defending. RedHeart's Udaipur service does not pretend to match the City Palace's grandeur — but in the smaller domain of flowers, we try to maintain a standard that this city of lakes would not find unworthy. Fresh orchids, perfect roses, tuberose that fills a hotel room with fragrance — in the most romantic city in India, RedHeart makes the gesture possible.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver flowers to hotels near Lake Pichola and Fateh Sagar in Udaipur?", answer: "Yes! RedHeart delivers to all hotels near Lake Pichola, Fateh Sagar, and the City Palace area in Udaipur. We handle anniversary room setups, honeymoon surprise arrangements, and proposal flower deliveries to Udaipur's most romantic locations with same-day and midnight options." },
      { question: "Can I order Gangaur festival flowers in Udaipur?", answer: "Yes! Gangaur is Udaipur's most important floral festival. RedHeart delivers fresh marigolds, roses, and seasonal flowers for home Gangaur celebrations and the city-wide festival period. We prepare dedicated Gangaur stock and can handle both personal orders and community event requirements." },
      { question: "Is same-day flower delivery available in Hiran Magri and Sukhadia Circle, Udaipur?", answer: "Yes, RedHeart delivers to Hiran Magri, Sukhadia Circle, Shobhagpura, Ambamata, Sectors 4/5/11/14, Pratap Nagar, and all major areas of Udaipur with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "What flowers are best for romantic gifting in Udaipur?", answer: "Long-stem red roses are the quintessential romantic choice in India's most romantic city. For premium romantic occasions, orchid arrangements and white lily bouquets offer elegance that matches Udaipur's palace-and-lake setting. Tuberose adds unforgettable fragrance. RedHeart offers all these in curated romantic collections." },
      { question: "Is midnight flower delivery available in Udaipur?", answer: "Yes, midnight flower delivery is available across Udaipur — including hotels near Lake Pichola and Fateh Sagar. Order before 9 PM and choose your time. In India's most romantic city, a midnight flower surprise is an obvious choice — RedHeart makes it happen." }
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
  console.log("\nDone — batch 5 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
