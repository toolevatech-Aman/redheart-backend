/**
 * Batch 13 — Guntur, Nellore, Kurnool, Kakinada, Rajahmundry,
 *             Salem, Erode, Tirunelveli, Vellore, Thanjavur,
 *             Tiruppur, Kolhapur, Solapur, Sangli, Puducherry
 * node scripts/seo-city-flowers-13.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "guntur": {
    cityName: "Guntur",
    metaTitle: "Flower Delivery in Guntur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Guntur with same-day delivery. Roses, marigolds & bouquets to Brodipet, Naaz Centre, Amaravathi Road & all areas. From ₹399.",
    h1: "Flower Delivery in Guntur",
    metaKeyword: "flower delivery in Guntur, online flower delivery Guntur, same day flower delivery Guntur, florist Guntur Andhra Pradesh",
    footerContent: `<h2>Flower Delivery in Guntur — The Chilli Capital Close to the New Capital</h2>
<p>Guntur is one of Andhra Pradesh's most commercially significant cities — the trading capital of the Krishna-Guntur delta, where the fertile lands between the Krishna and Godavari rivers produce some of India's most valuable agricultural exports. Guntur's chillies — the Guntur Sannam variety — are among the world's most traded chilli peppers, and the city's wholesale chilli yard (Mirchi Yard) is the largest in Asia. With Amaravathi, the new planned capital of Andhra Pradesh, being built just 30 km away, Guntur is experiencing a development surge that is rapidly transforming its real estate and economy. The Kondaveedu Fort near Guntur and the Undavalli Caves (rock-cut cave temples on the Krishna's banks) are significant heritage sites. RedHeart delivers fresh flowers across Guntur with same-day and midnight delivery, starting at ₹399.</p>
<p>Brodipet is Guntur's oldest and most established residential area. Naaz Centre and Arundelpet are commercial zones. Amaravathi Road connects Guntur to the new capital area. Ugadi (Telugu New Year), Vinayaka Chavithi, and Sankranti are the three biggest flower occasions, with marigold garlands and lotus being the most in-demand items.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Guntur, Andhra Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Brodipet, Naaz Centre, Arundelpet, Amaravathi Road, Gorantla, Pattabhipuram, Prathipadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, lotus, jasmine, roses, tuberose</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Guntur?", answer: "Yes, RedHeart delivers same-day across Guntur including Brodipet, Naaz Centre, Arundelpet, Amaravathi Road, and all major areas." },
      { question: "Can I get Ugadi flowers delivered in Guntur?", answer: "Yes! RedHeart delivers fresh marigolds, neem flowers, and decorative bouquets for Ugadi and all Telugu festivals in Guntur." },
      { question: "Is midnight delivery available in Guntur?", answer: "Yes, midnight delivery is available across Guntur. Order before 9 PM." }
    ]
  },
  "nellore": {
    cityName: "Nellore",
    metaTitle: "Flower Delivery in Nellore | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Nellore with same-day delivery. Roses, marigolds & bouquets to Magunta Layout, Brundavan Gardens, Grand Bypass & all areas. From ₹399.",
    h1: "Flower Delivery in Nellore",
    metaKeyword: "flower delivery in Nellore, online flower delivery Nellore, same day flower delivery Nellore, florist Nellore Andhra Pradesh",
    footerContent: `<h2>Flower Delivery in Nellore — The Prawn Capital Where the Pennar Meets the Sea</h2>
<p>Nellore is Andhra Pradesh's southernmost major city — sitting where the Pennar river meets the Bay of Bengal. The city is famous for its prawn and shrimp aquaculture: Nellore prawns are exported to Japan, the US, and Europe, and the city's aquaculture industry is one of the largest in Asia. Nellore is also known for its Ongole cattle (a breed famous for its strength and heat resistance, exported to Brazil and other countries for developing tropical beef cattle breeds), its rice cultivation on the fertile Pennar delta, and the Nellore Chepala Pulusu (spiced fish curry) that is the city's culinary signature. RedHeart delivers fresh flowers across Nellore with same-day and midnight delivery, starting at ₹399.</p>
<p>Magunta Layout is Nellore's most upscale residential area. Brundavan Gardens and Grand Bypass areas are growing residential zones. The city's Telugu cultural calendar — Ugadi, Vinayaka Chavithi, Sri Rama Navami — provides consistent flower demand throughout the year.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nellore, Andhra Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Magunta Layout, Brundavan Gardens, Grand Bypass, Vedayapalem, Balaji Nagar, Santhapet</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Nellore?", answer: "Yes, RedHeart delivers same-day to Magunta Layout, Brundavan Gardens, Vedayapalem, and all major Nellore areas." },
      { question: "Does RedHeart deliver Vinayaka Chavithi flowers in Nellore?", answer: "Yes! RedHeart delivers marigolds, lotus, and red flowers for Vinayaka Chavithi puja across Nellore." },
      { question: "Is midnight delivery available in Nellore?", answer: "Yes, midnight delivery is available across Nellore." }
    ]
  },
  "kurnool": {
    cityName: "Kurnool",
    metaTitle: "Flower Delivery in Kurnool | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kurnool with same-day delivery. Roses, marigolds & bouquets to Bellary Road, S Nagar, Fort Road & all areas. From ₹399.",
    h1: "Flower Delivery in Kurnool",
    metaKeyword: "flower delivery in Kurnool, online flower delivery Kurnool, same day flower delivery Kurnool, florist Kurnool Andhra Pradesh",
    footerContent: `<h2>Flower Delivery in Kurnool — The Gateway to Andhra's Rayalaseema Region</h2>
<p>Kurnool was Andhra Pradesh's first capital from 1953 to 1956, before Hyderabad became the combined capital of the new state. It is the headquarters of the Rayalaseema region — the "land of stones," known for its harsh, semi-arid landscape, its cotton cultivation, and the fierce loyalty of its people to their regional identity. Kurnool sits where the Tungabhadra meets the Krishna, near the famous Srisailam reservoir and the Srisailam temple (one of the twelve Jyotirlinga shrines). The city is also close to Belum Caves, the second longest natural cave system in the Indian subcontinent. RedHeart delivers fresh flowers across Kurnool with same-day and midnight delivery, starting at ₹399.</p>
<p>Bellary Road is Kurnool's main commercial artery. S Nagar (S.P. Nagar) is the established residential area. Fort Road passes the old Kurnool fort on the Hundri river bank. Mahasivaratri (for Srisailam temple) and Ugadi are the biggest flower demand occasions in Kurnool.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kurnool, Andhra Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bellary Road, S Nagar, Fort Road, Santhapet, Budhawarpet, Ashok Nagar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kurnool?", answer: "Yes, RedHeart delivers same-day to Bellary Road, S Nagar, Fort Road, and all major Kurnool areas." },
      { question: "Can I order Mahasivaratri flowers in Kurnool?", answer: "Yes! RedHeart delivers bilva (bael) leaves, lotus, and marigolds for Mahasivaratri puja in Kurnool." },
      { question: "Is midnight delivery available in Kurnool?", answer: "Yes, midnight delivery is available across Kurnool." }
    ]
  },
  "kakinada": {
    cityName: "Kakinada",
    metaTitle: "Flower Delivery in Kakinada | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kakinada with same-day delivery. Roses, marigolds & bouquets to Suryarao Pet, One Town, Jagannaickpur & all areas. From ₹399.",
    h1: "Flower Delivery in Kakinada",
    metaKeyword: "flower delivery in Kakinada, online flower delivery Kakinada, same day flower delivery Kakinada, florist Kakinada Andhra Pradesh",
    footerContent: `<h2>Flower Delivery in Kakinada — The Deep Water Port City of East Godavari</h2>
<p>Kakinada is the major port city of East Godavari district in Andhra Pradesh — the Kakinada Deep Water Port is one of the major ports handling export cargo from the Krishna-Godavari basin. The city sits on the Kakinada Bay at the edge of the Konaseema delta — the lush island deltaic region formed by the Godavari branches, often called the "Kerala of Andhra" for its coconut palms, backwaters, and greenery. Kakinada's seafood exports (prawns, fish, crab) go to markets in Japan, Europe, and the Middle East. The city is also a hub for the oil and gas sector — ONGC has significant offshore operations in the Krishna-Godavari basin administered from Kakinada. RedHeart delivers fresh flowers across Kakinada with same-day and midnight delivery, starting at ₹399.</p>
<p>Suryarao Pet (named for a Telugu social reformer) and One Town are the commercial centres. Jagannaickpur is a major residential zone. The Godavari Pushkaram (the 12-yearly Godavari festival at Rajamahendravari and Kakinada) creates extraordinary flower demand when it falls in the area's calendar.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kakinada, Andhra Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Suryarao Pet, One Town, Jagannaickpur, Ramaraopet, Prakash Nagar, Dayal Nagar</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kakinada?", answer: "Yes, RedHeart delivers same-day to Suryarao Pet, One Town, Jagannaickpur, and all major Kakinada areas." },
      { question: "Does RedHeart deliver Godavari Pushkaram flowers in Kakinada?", answer: "Yes! For the Godavari Pushkaram festival, RedHeart delivers marigolds, lotus, and tuberose for the sacred river bathing rituals." },
      { question: "Is midnight delivery available in Kakinada?", answer: "Yes, midnight delivery is available across Kakinada." }
    ]
  },
  "rajahmundry": {
    cityName: "Rajahmundry",
    metaTitle: "Flower Delivery in Rajahmundry | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Rajahmundry with same-day delivery. Roses, marigolds & bouquets to Ramaraopet, Morampudi, Kakinada Road & all areas. From ₹399.",
    h1: "Flower Delivery in Rajahmundry",
    metaKeyword: "flower delivery in Rajahmundry, online flower delivery Rajahmundry, same day flower delivery Rajahmundry, florist Rajahmundry",
    footerContent: `<h2>Flower Delivery in Rajahmundry — The Cultural Capital of Telugu Civilization</h2>
<p>Rajahmundry (Rajamahendravari) is the cultural capital of Telugu civilisation — this is where the poet-saint Nannaya wrote the first Telugu poetic work in the 11th century, translating the Mahabharata into Telugu verse and founding a literary tradition that continues to this day. The city sits on the banks of the Godavari — one of India's most sacred rivers — and the Rajahmundry ghats are the site of the Godavari Pushkaram, the largest religious gathering in Andhra Pradesh, drawing tens of millions every 12 years. The Godavari Barrage (Dowleswaram Barrage) just outside the city controls the river's flow into the rich Konaseema delta. RedHeart delivers fresh flowers across Rajahmundry with same-day and midnight delivery, starting at ₹399.</p>
<p>Ramaraopet and Morampudi are established residential areas. The Kakinada Road corridor is growing commercially. Sri Rama Navami (celebrated with special enthusiasm in Rajahmundry, where the Pattabhishekam Kalyanam tradition is upheld at several temples) drives enormous flower demand in spring.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajahmundry, Andhra Pradesh</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ramaraopet, Morampudi, Kakinada Road, Innespeta, Pushkar Ghat area, Danavaipalem</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Rajahmundry?", answer: "Yes, RedHeart delivers same-day to Ramaraopet, Morampudi, Innespeta, and all major Rajahmundry areas." },
      { question: "Can I order Sri Rama Navami flowers in Rajahmundry?", answer: "Yes! RedHeart delivers roses, marigolds, and jasmine for Sri Rama Navami Kalyanam and other puja occasions in Rajahmundry." },
      { question: "Is midnight delivery available in Rajahmundry?", answer: "Yes, midnight delivery is available across Rajahmundry." }
    ]
  },
  "salem": {
    cityName: "Salem",
    metaTitle: "Flower Delivery in Salem | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Salem with same-day delivery. Roses, jasmine & bouquets to Shevapet, Suramangalam, Fairlands & all areas. From ₹399.",
    h1: "Flower Delivery in Salem",
    metaKeyword: "flower delivery in Salem, online flower delivery Salem, same day flower delivery Salem, florist Salem Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Salem — Steel, Turmeric, and Jasmine in Tamil Nadu's Interior</h2>
<p>Salem is Tamil Nadu's fourth largest city, situated in a valley surrounded by the Shevaroy hills (Yercaud hills) to the northeast and the Nagaramalai range to the south. The city is known for two unlikely specialisations — steel and turmeric. Salem Steel Plant (a unit of SAIL) produces specialty stainless steel; and Salem is India's largest turmeric trading hub, with farmers from across Tamil Nadu and Andhra Pradesh converging on the city's wholesale turmeric yards. The city also grows some of Tamil Nadu's finest mangoes in the surrounding hills. Yercaud, the hill station in the Shevaroy Hills just 30 km from Salem, is the city's weekend retreat for residents escaping the valley's heat. RedHeart delivers fresh flowers across Salem with same-day and midnight delivery, starting at ₹399.</p>
<p>Shevapet is Salem's commercial heart. Suramangalam and Fairlands are the established residential zones. Omalur Road and the Yercaud Road areas are growing corridors. Tamil festival occasions — Pongal, Karthigai Deepam, Aadi Perukku — and personal milestones drive consistent flower demand. Salem's jasmine growers supply the city with one of South India's most fragrant flowers.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Salem, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shevapet, Suramangalam, Fairlands, Hasthampatti, Junction, Saradha College area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, roses, marigolds, tuberose, chrysanthemums</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Salem?", answer: "Yes, RedHeart delivers same-day to Shevapet, Suramangalam, Fairlands, Hasthampatti, and all major Salem areas." },
      { question: "Does RedHeart deliver jasmine in Salem?", answer: "Yes! RedHeart delivers fresh jasmine garlands and loose jasmine across Salem — the flower most associated with Tamil culture and daily puja." },
      { question: "Is midnight delivery available in Salem?", answer: "Yes, midnight delivery is available across Salem." }
    ]
  },
  "erode": {
    cityName: "Erode",
    metaTitle: "Flower Delivery in Erode | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Erode with same-day delivery. Roses, jasmine & bouquets to Perundurai Road, Surampatti, Chithode & all areas. From ₹399.",
    h1: "Flower Delivery in Erode",
    metaKeyword: "flower delivery in Erode, online flower delivery Erode, same day flower delivery Erode, florist Erode Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Erode — The Turmeric City and Textile Hub of Kongu Nadu</h2>
<p>Erode is one of the fastest growing cities in Tamil Nadu — a major commercial centre in the Kongu Nadu region that is known across India as a textile and turmeric trading powerhouse. The city's textile market (primarily powerloom fabrics, ready-made garments, and wholesale cloth) is one of the largest in South Asia. Erode's turmeric market rivals Salem's, and the city gives its name to "Erode turmeric" — a variety prized for its deep colour and high curcumin content. The Bhavani Sangamam (confluence of the Cauvery, Bhavani, and the subterranean Amudha rivers) at Bhavani, near Erode, is one of Tamil Nadu's most sacred pilgrimage sites, drawing enormous crowds for Makar Sankranti. RedHeart delivers fresh flowers across Erode with same-day and midnight delivery, starting at ₹399.</p>
<p>Perundurai Road and the areas near Erode Junction are established commercial zones. Surampatti and Chithode are residential areas. Kongu Nadu's weaving and trading families have strong traditions of floral decoration for home events and temple visits, ensuring robust year-round flower demand.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Erode, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Perundurai Road, Surampatti, Chithode, Bhavani Road, Erode Junction area, Gandhipuram</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Erode?", answer: "Yes, RedHeart delivers same-day to Perundurai Road, Surampatti, Chithode, and all major Erode areas." },
      { question: "Does RedHeart deliver for Tamil festivals in Erode?", answer: "Yes! RedHeart delivers jasmine, marigolds, and roses for Pongal, Karthigai Deepam, Aadi Perukku, and all Tamil festival celebrations in Erode." },
      { question: "Is midnight delivery available in Erode?", answer: "Yes, midnight delivery is available across Erode." }
    ]
  },
  "tirunelveli": {
    cityName: "Tirunelveli",
    metaTitle: "Flower Delivery in Tirunelveli | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Tirunelveli with same-day delivery. Roses, marigolds & bouquets to Palayamkottai, Perumalpuram, Vannarpet & all areas. From ₹399.",
    h1: "Flower Delivery in Tirunelveli",
    metaKeyword: "flower delivery in Tirunelveli, online flower delivery Tirunelveli, same day flower delivery Tirunelveli, florist Tirunelveli Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Tirunelveli — The City of Halwa and Ancient Tamil Heritage</h2>
<p>Tirunelveli is one of Tamil Nadu's most ancient cities — built on the banks of the Tamirabarani, the only perennial river in South Tamil Nadu that flows from the Agasthyamalai hills to the sea at Tuticorin. The city is famous across India for one sweet: Tirunelveli Halwa — a wheat-based halwa made with ghee that is so distinctive in taste and texture that counterfeit versions are sold across the country under its name. Tirunelveli is also a centre of Tamil cultural heritage — the Nellaiappar temple (dedicated to Shiva) is one of the most architecturally significant temples in Tirunadu, its gopurams and musical pillars (stone pillars that produce musical notes when struck) being among the finest examples of Vijayanagara-era temple art. RedHeart delivers fresh flowers across Tirunelveli with same-day and midnight delivery, starting at ₹399.</p>
<p>Palayamkottai (the cantonment twin-city across the Tamirabarani) and Tirunelveli Town are the two main commercial and residential areas. Perumalpuram and Vannarpet are established residential localities. The Nellaiappar and Kanthimathi Amman temple corridors see daily flower offerings of jasmine, marigolds, and lotus.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tirunelveli, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palayamkottai, Perumalpuram, Vannarpet, Tirunelveli Town, Pettai, Balasubramaniapuram</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Tirunelveli?", answer: "Yes, RedHeart delivers same-day to Palayamkottai, Perumalpuram, Tirunelveli Town, and all major areas." },
      { question: "Can I order flowers for Nellaiappar temple in Tirunelveli?", answer: "Yes! RedHeart delivers jasmine garlands, marigolds, and lotus for puja at Nellaiappar temple and all temples across Tirunelveli." },
      { question: "Is midnight delivery available in Tirunelveli?", answer: "Yes, midnight delivery is available across Tirunelveli." }
    ]
  },
  "vellore": {
    cityName: "Vellore",
    metaTitle: "Flower Delivery in Vellore | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Vellore with same-day delivery. Roses, marigolds & bouquets to Sathuvacheri, Katpadi, CMC Hospital area & all Vellore areas. From ₹399.",
    h1: "Flower Delivery in Vellore",
    metaKeyword: "flower delivery in Vellore, online flower delivery Vellore, same day flower delivery Vellore, florist Vellore Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Vellore — The Medical City and Fort Town of North Tamil Nadu</h2>
<p>Vellore is famous across the world for one institution: Christian Medical College (CMC) Vellore — the hospital founded by Dr. Ida Scudder in 1900 that became one of India's greatest centres of medical excellence and attracts patients from across South Asia. The city also houses VIT University (Vellore Institute of Technology), one of India's premier engineering universities, making it a significant education hub. The Vellore Fort — built by the Nayak rulers in the 16th century on the banks of the Palar river — is one of the finest examples of military architecture in South India, its moat still intact. The famous Sripuram Golden Temple (covered in gold, visible from highways) has made Vellore an important pilgrimage destination in recent decades. RedHeart delivers fresh flowers across Vellore with same-day and midnight delivery, starting at ₹399.</p>
<p>Sathuvacheri and Katpadi (the railway junction town) are the main residential areas. CMC Hospital area and VIT campus area generate specific gifting demand — patients receiving flowers, students receiving birthday surprises from home. The Golden Temple area and Jalakandeswarar Temple corridor need daily puja flowers.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vellore, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sathuvacheri, Katpadi, CMC Hospital area, VIT campus area, Gandhi Nagar, Kosapet</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Does RedHeart deliver flowers to CMC Hospital in Vellore?", answer: "Yes! RedHeart delivers cheerful flower bouquets to CMC Vellore hospital wards and OPD areas — the perfect gift for patients recovering or receiving visitors." },
      { question: "Is same-day flower delivery available in Vellore?", answer: "Yes, RedHeart delivers same-day to Sathuvacheri, Katpadi, CMC area, VIT campus, and all Vellore areas." },
      { question: "Is midnight delivery available in Vellore?", answer: "Yes, midnight delivery is available across Vellore." }
    ]
  },
  "thanjavur": {
    cityName: "Thanjavur",
    metaTitle: "Flower Delivery in Thanjavur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Thanjavur with same-day delivery. Roses, marigolds & bouquets to Old Town, Medical College Road, Srinivasa Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Thanjavur",
    metaKeyword: "flower delivery in Thanjavur, online flower delivery Thanjavur, same day flower delivery Thanjavur, florist Thanjavur Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Thanjavur — The Temple City of the Cholas</h2>
<p>Thanjavur was the capital of the Chola Empire during its greatest period (9th–13th centuries), when Chola kings controlled territory from Sri Lanka to parts of Southeast Asia. The Brihadeeswara Temple (built by Raja Raja Chola I in 1010 CE) is the crowning achievement of Dravidian temple architecture — its 66-metre vimana (tower) was the world's tallest structure when built, and it remains one of humanity's great architectural achievements, now a UNESCO World Heritage Site. Thanjavur is the heartland of Carnatic classical music and Bharatanatyam classical dance, producing generations of masters of both arts. The city's bronze casting tradition (Thanjavur bronzes) and its Tanjore paintings are world-renowned art forms. RedHeart delivers fresh flowers across Thanjavur with same-day and midnight delivery, starting at ₹399.</p>
<p>Old Town (Thanjavur Town) and Medical College Road areas are the primary commercial and residential zones. Srinivasa Nagar and the Navaluran Road areas are residential. The Brihadeeswara temple complex and Thanjavur's many smaller temples require enormous quantities of jasmine, marigolds, and lotus for daily abhishekam and festival worship.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Thanjavur, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Old Town, Medical College Road, Srinivasa Nagar, Navaluran Road, Vallam Road, Pattukottai Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Thanjavur?", answer: "Yes, RedHeart delivers same-day to Old Town, Medical College Road, Srinivasa Nagar, and all Thanjavur areas." },
      { question: "Can I order flowers for Brihadeeswara temple puja in Thanjavur?", answer: "Yes! RedHeart delivers jasmine, marigolds, lotus, and tuberose for puja at Brihadeeswara temple and all Thanjavur temples." },
      { question: "Is midnight delivery available in Thanjavur?", answer: "Yes, midnight delivery is available across Thanjavur." }
    ]
  },
  "tiruppur": {
    cityName: "Tiruppur",
    metaTitle: "Flower Delivery in Tiruppur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Tiruppur with same-day delivery. Roses, jasmine & bouquets to Selvapuram, Veerapandi, Mangalam Road & all areas. From ₹399.",
    h1: "Flower Delivery in Tiruppur",
    metaKeyword: "flower delivery in Tiruppur, online flower delivery Tiruppur, same day flower delivery Tiruppur, florist Tiruppur Tamil Nadu",
    footerContent: `<h2>Flower Delivery in Tiruppur — The Knitwear Capital That Exports to the World</h2>
<p>Tiruppur is the knitwear capital of India — a city of 900,000+ where the primary industry is the manufacturing of T-shirts, hosiery, and knitted garments for export to Europe, the US, and the Middle East. Approximately 45% of India's textile exports originate in Tiruppur's factories and dyeing units. This concentration of export manufacturing has made Tiruppur one of the wealthiest tier-2 cities in India by per capita income, and its Kongu Vellalar community (historically business-minded traders and weavers) is known for its prosperity, its education investments, and its elaborate wedding and festival celebrations. RedHeart delivers fresh flowers across Tiruppur with same-day and midnight delivery, starting at ₹399.</p>
<p>Selvapuram and Veerapandi are the main residential areas. Mangalam Road and the Avinashi Road corridor are commercial and industrial zones. Tiruppur's prosperous families celebrate events like weddings, house warmings (gruha pravesam), and thread ceremonies with elaborate floral decorations — jasmine garlands, rose arrangements, and marigold toran strings.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tiruppur, Tamil Nadu</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Selvapuram, Veerapandi, Mangalam Road, Avinashi Road, P.N. Road, Mulanur Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Tiruppur?", answer: "Yes, RedHeart delivers same-day to Selvapuram, Veerapandi, Mangalam Road, Avinashi Road, and all Tiruppur areas." },
      { question: "Does RedHeart deliver flowers for Tiruppur weddings and events?", answer: "Yes! RedHeart delivers jasmine garlands, rose arrangements, and marigold decorations for weddings, gruha pravesam, and other events in Tiruppur." },
      { question: "Is midnight delivery available in Tiruppur?", answer: "Yes, midnight delivery is available across Tiruppur." }
    ]
  },
  "kolhapur": {
    cityName: "Kolhapur",
    metaTitle: "Flower Delivery in Kolhapur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Kolhapur with same-day delivery. Roses, marigolds & bouquets to Rajarampuri, Shivaji Park, Tarabai Park & all areas. From ₹399.",
    h1: "Flower Delivery in Kolhapur",
    metaKeyword: "flower delivery in Kolhapur, online flower delivery Kolhapur, same day flower delivery Kolhapur, florist Kolhapur Maharashtra",
    footerContent: `<h2>Flower Delivery in Kolhapur — The City of Kolhapuri Chappals and Mahalaxmi</h2>
<p>Kolhapur is one of Maharashtra's most culturally proud cities — the former capital of the Kolhapur princely state (ruled by Chhatrapati Shahu Maharaj, a progressive reformer who championed reservations and social justice a century before it became national policy). The city is known for three things across India: its Kolhapuri chappals (handmade leather sandals that are a GI-tagged product sold internationally), its spicy Kolhapuri cuisine (the Kolhapuri mutton curry and misal are celebrated across Maharashtra), and the Mahalaxmi temple — one of the Shakti peethas of Maharashtra, where the goddess is believed to be self-manifested (swayambhu) and where devotees offer massive quantities of flowers daily. RedHeart delivers fresh flowers across Kolhapur with same-day and midnight delivery, starting at ₹399.</p>
<p>Rajarampuri and Shivaji Park are Kolhapur's most established residential areas. Tarabai Park is an upscale zone. The Rankala Lake promenade is a popular meeting spot with nearby residential areas. Navratri in Kolhapur — celebrated with enormous devotion to Mahalaxmi — is the city's most important flower occasion, with tonnes of marigolds and roses offered at the temple over nine nights.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kolhapur, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajarampuri, Shivaji Park, Tarabai Park, Rankala area, Ujalaiwadi, Shahupuri</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Kolhapur?", answer: "Yes, RedHeart delivers same-day to Rajarampuri, Shivaji Park, Tarabai Park, Rankala area, and all Kolhapur areas." },
      { question: "Can I order Navratri flowers for Mahalaxmi temple in Kolhapur?", answer: "Yes! RedHeart delivers marigolds, roses, and decorative garlands for Navratri Mahalaxmi puja across Kolhapur." },
      { question: "Is midnight delivery available in Kolhapur?", answer: "Yes, midnight delivery is available across Kolhapur." }
    ]
  },
  "solapur": {
    cityName: "Solapur",
    metaTitle: "Flower Delivery in Solapur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Solapur with same-day delivery. Roses, marigolds & bouquets to Vijapur Road, Hotgi Road, Hutatma Chowk & all areas. From ₹399.",
    h1: "Flower Delivery in Solapur",
    metaKeyword: "flower delivery in Solapur, online flower delivery Solapur, same day flower delivery Solapur, florist Solapur Maharashtra",
    footerContent: `<h2>Flower Delivery in Solapur — Maharashtra's Textile City on the Deccan Plateau</h2>
<p>Solapur is Maharashtra's major city on the Deccan plateau, sitting at the crossroads of the routes between Pune, Hyderabad, and Bijapur. The city is historically significant for its terry towels — Solapuri chadars (cotton bedsheets) and towels woven on power looms are sold across India and have a GI tag. Solapur is also an important pilgrimage base for Pandharpur — the holy city of Vitthal/Vithoba on the Bhima river 72 km away — which draws the Varkari community on the Ashadhi and Kartiki Ekadashi pilgrimages, two of Maharashtra's grandest processions. The Solapur fort and the Hutatma Smarak are the city's heritage landmarks. RedHeart delivers fresh flowers across Solapur with same-day and midnight delivery, starting at ₹399.</p>
<p>Vijapur Road and Hotgi Road are Solapur's main commercial and residential corridors. Hutatma Chowk is a central landmark. The Varkari community's devotion drives specific flower traditions — fresh tulsi (holy basil) leaves offered to Vitthal, marigold garlands for processions — that RedHeart supports with appropriate stock.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Solapur, Maharashtra</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vijapur Road, Hotgi Road, Hutatma Chowk, Dafle Colony, Akkalkot Road, Siddheshwar area</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Solapur?", answer: "Yes, RedHeart delivers same-day to Vijapur Road, Hotgi Road, Dafle Colony, and all major Solapur areas." },
      { question: "Can I order Pandharpur pilgrimage flowers in Solapur?", answer: "Yes! RedHeart delivers tulsi, marigolds, and fresh flower garlands for Varkari devotees preparing for the Pandharpur pilgrimage." },
      { question: "Is midnight delivery available in Solapur?", answer: "Yes, midnight delivery is available across Solapur." }
    ]
  },
  "puducherry": {
    cityName: "Puducherry",
    metaTitle: "Flower Delivery in Puducherry | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Puducherry with same-day delivery. Roses, lotus & bouquets to White Town, Nellithope, Kamaraj Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Puducherry",
    metaKeyword: "flower delivery in Puducherry, online flower delivery Puducherry Pondicherry, same day flower delivery Puducherry, florist Puducherry",
    footerContent: `<h2>Flower Delivery in Puducherry — The French Quarter and the Ashram Town</h2>
<p>Puducherry (still widely called Pondicherry) is India's smallest union territory — the former French colonial enclave that retained its Gallic character long after France transferred it to India in 1954. The White Town (Ville Blanche) — the French Quarter along the seafront — has preserved its colonial boulevards, yellow ochre buildings, and French street names (Rue Suffren, Rue Dupleix) in a way that makes it feel unlike any other Indian city. Puducherry is also the home of the Sri Aurobindo Ashram, founded by Sri Aurobindo and the Mother (Mirra Alfassa) in 1926, and Auroville — the experimental international township built on the premise of human unity, 10 km outside the city. The Ashram's serene gardens filled with fragrant flowers are a model of devotional floral arrangement. RedHeart delivers fresh flowers across Puducherry with same-day and midnight delivery, starting at ₹399.</p>
<p>White Town (the sea-facing French Quarter) and Nellithope (a large Tamil residential area) represent Puducherry's two worlds. Kamaraj Nagar and the areas around the Ashram are significant delivery zones. Masi Magam (the chariot festival when temple deities are brought to the sea for a ceremonial bath) is Puducherry's biggest flower occasion.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;"><thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead><tbody>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Puducherry (Union Territory)</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">White Town, Nellithope, Kamaraj Nagar, Ariyankuppam, Reddiarpalayam, Auroville Road</td></tr>
<tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
</tbody></table>`,
    faqs: [
      { question: "Is same-day flower delivery available in Puducherry?", answer: "Yes, RedHeart delivers same-day to White Town, Nellithope, Kamaraj Nagar, and all Puducherry areas." },
      { question: "Does RedHeart deliver to Auroville and Ashram area in Puducherry?", answer: "Yes! RedHeart delivers to Auroville township and the Sri Aurobindo Ashram area in Puducherry." },
      { question: "Is midnight delivery available in Puducherry?", answer: "Yes, midnight delivery is available across Puducherry." }
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
  console.log("\nDone — batch 13 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
