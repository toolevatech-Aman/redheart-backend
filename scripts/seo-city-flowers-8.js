/**
 * Batch 8 — Ghaziabad, Meerut, Aurangabad, Raipur, Mangaluru, Navi Mumbai
 * node scripts/seo-city-flowers-8.js
 */
const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {

  "ghaziabad": {
    cityName: "Ghaziabad",
    metaTitle: "Flower Delivery in Ghaziabad | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Ghaziabad with same-day delivery. Roses, bouquets to Indirapuram, Vaishali, Raj Nagar & all areas. From ₹399.",
    h1: "Flower Delivery in Ghaziabad",
    metaKeyword: "flower delivery in Ghaziabad, online flower delivery Ghaziabad, same day flower delivery Ghaziabad, florist Ghaziabad, send flowers Ghaziabad, flowers Indirapuram Vaishali",
    footerContent: `
<h2>Flower Delivery in Ghaziabad — NCR's Eastern Hub Gets Same-Day Freshness</h2>
<p>Ghaziabad is often called the Gateway to Uttar Pradesh — the first major city one crosses entering UP from Delhi on the NH-9. But Ghaziabad has long since become more than a gateway; it is a city in its own right, with a significant industrial base (stainless steel, electronics), a massive residential population drawn by affordable housing relative to Delhi, and a rapidly growing middle class that has shaped one of the NCR's most active local economies. Indirapuram, Vaishali, Kaushambi, and the Raj Nagar Extension developments have made Ghaziabad a city of apartment-dwellers — young families, working couples, and the nuclear household that is the typical recipient of a RedHeart flower delivery. RedHeart delivers fresh flowers across Ghaziabad with same-day and midnight delivery, starting at ₹399.</p>

<p>Ghaziabad's flower supply benefits from one of India's most important advantages: the city is adjacent to Delhi's Ghazipur Phool Mandi — the largest wholesale flower market in North India. Fresh flowers from across the country arrive at Ghazipur by 3 AM, and by morning they are available to Ghaziabad's supply network with freshness that cities further from Delhi cannot match.</p>

<h2>Quick Reference — Flower Delivery in Ghaziabad</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ghaziabad, Uttar Pradesh (NCR)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Indirapuram, Vaishali, Kaushambi, Raj Nagar, Raj Nagar Extension, Vasundhara, Crossings Republik, Mohan Nagar, Shalimar Garden</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diwali, Holi, birthdays, anniversaries, Valentine's Day, weddings</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, tuberose, mixed bouquets</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Freshness advantage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Adjacent to Ghazipur Phool Mandi — North India's largest wholesale flower market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Indirapuram — Ghaziabad's Most Gifted Address</h2>
<p>Indirapuram is one of the most densely populated planned townships in India — the Shakti Khand, Nyay Khand, Ahinsa Khand, and Abhay Khand sectors house hundreds of thousands of young urban professionals in apartment complexes that were built rapidly from 2005 onwards. This population orders flowers online more than almost any other locality in the NCR — they are digitally native, they have delivery-friendly apartment addresses, and they celebrate every birthday, anniversary, and achievement with the full vocabulary of modern Indian gifting. RedHeart's Indirapuram delivery volume reflects this: it is one of our busiest single localities in UP.</p>

<h2>Vaishali to Crossings Republik — The New Ghaziabad</h2>
<p>Vaishali and Kaushambi, adjacent to each other near the Delhi border, are older planned townships with a mix of residential and commercial activity. Raj Nagar Extension is a newer development further along the NH-9 with large residential complexes. Vasundhara has evolved into a mature residential suburb. Crossings Republik, one of the largest planned townships in Asia by area, is a newer development on the eastern edge of Ghaziabad that has its own commercial centres and a large residential population. RedHeart covers all of these fully.</p>

<h2>Why Ghaziabad Chooses RedHeart</h2>
<p>Ghaziabad's apartment-dwelling, online-ordering population wants exactly what RedHeart provides — fast, reliable delivery of fresh flowers to an apartment address, at a fair price, with a good presentation. The proximity to Ghazipur Mandi means our flowers are genuinely fresh. The city's gifting culture, shaped by its young demographic, means there is always an occasion to deliver for. In NCR's UP gateway, RedHeart is the natural flower partner.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Indirapuram and Vaishali, Ghaziabad?", answer: "Yes, RedHeart delivers to Indirapuram (all sectors), Vaishali, Kaushambi, Raj Nagar Extension, Vasundhara, Crossings Republik, and all major Ghaziabad areas same-day. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can RedHeart deliver flowers to apartment complexes in Indirapuram?", answer: "Yes! RedHeart delivers to all Indirapuram apartments including Shakti Khand, Nyay Khand, Ahinsa Khand, and Abhay Khand sectors. Specify your tower and flat number and we deliver directly to your door." },
      { question: "Does RedHeart deliver to Crossings Republik in Ghaziabad?", answer: "Yes, Crossings Republik is fully covered by RedHeart with same-day delivery. All residential societies and commercial areas within Crossings Republik are included in our delivery network." },
      { question: "What makes Ghaziabad flowers fresher than other cities?", answer: "Ghaziabad sits adjacent to Ghazipur Phool Mandi — North India's largest wholesale flower market. Fresh flowers from farms across India arrive here nightly, and our Ghaziabad supply is sourced from this market, ensuring freshness that cities far from major flower markets cannot match." },
      { question: "Is midnight flower delivery available in Ghaziabad?", answer: "Yes, midnight delivery is available across Ghaziabad including Indirapuram, Vaishali, Crossings Republik, and all areas. Order before 9 PM and choose your time." }
    ]
  },

  "meerut": {
    cityName: "Meerut",
    metaTitle: "Flower Delivery in Meerut | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Meerut with same-day delivery. Roses, bouquets & arrangements to Shastri Nagar, Pallavpuram, Garh Road & all areas. From ₹399.",
    h1: "Flower Delivery in Meerut",
    metaKeyword: "flower delivery in Meerut, online flower delivery Meerut, same day flower delivery Meerut, florist Meerut, send flowers Meerut, flowers Shastri Nagar Pallavpuram Meerut",
    footerContent: `
<h2>Flower Delivery in Meerut — The Sports Capital of India Has a Sweet Gifting Culture</h2>
<p>Meerut's national identity rests on two things: the 1857 Uprising (the first war of Indian independence began with the Meerut cantonment soldiers' revolt on May 10, 1857) and sports equipment (Meerut produces over 70% of India's sporting goods — cricket bats, boxing gloves, hockey sticks, and footballs leave this city for the world's fields and stadiums). But Meerut is also a deeply family-oriented city — it is the large western UP district headquarters where Jat, Punjabi, and Baniya communities maintain strong traditions of social celebration. Weddings in Meerut are elaborate; birthdays are communal affairs; Diwali gifting involves real effort. RedHeart delivers fresh flowers across Meerut with same-day and midnight delivery, starting at ₹399.</p>

<p>Meerut's flower supply comes from the wholesale market near Budhana Gate and the daily flower market at Shastri Nagar. The Ganga-Yamuna Doab's farms supply marigolds and seasonal flowers, and the proximity to Delhi's Ghazipur Mandi keeps the supply chain fresh. Meerut's own market gardens around the city periphery grow chrysanthemums and marigolds commercially.</p>

<h2>Quick Reference — Flower Delivery in Meerut</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Meerut, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shastri Nagar, Pallavpuram, Garh Road, Lisari Gate, Brahmpuri, Mawana Road, Cantonment, Civil Lines, Ganga Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diwali, Holi, Eid, weddings, birthdays, sports academy events</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gladioli, tuberose, gerberas</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sports equipment capital of India; 1857 Uprising origin; western UP commercial hub</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Eid and Meerut's Multi-Community Gifting Culture</h2>
<p>Meerut has a significant Muslim population — around 35% of the city — and Eid is one of the city's most joyous occasions. The old city's mohallas near Hapur Road and the Jama Masjid areas come alive with flowers during Ramzan and Eid. Rose water is sold in abundance; homes are decorated with rose garlands; families exchange flower bouquets alongside mithai and siwaiyan. RedHeart delivers Eid flower arrangements across Meerut's mixed neighbourhoods with the understanding of what this festival means to the families who celebrate it. Diwali follows later in the year with equal community participation from the city's Hindu families — Meerut's Diwali markets are among UP's most vibrant.</p>

<h2>Shastri Nagar to Pallavpuram — Meerut's Residential Life</h2>
<p>Shastri Nagar is Meerut's most established residential area — the bungalows and older apartment blocks house the city's professional class, including a significant medical fraternity given the presence of Subharti Medical College and LLRM Medical College. Pallavpuram is a planned township with a cleaner, wider-road character that has attracted newer families. Civil Lines, the colonial-era administrative area, retains its old-money character. Garh Road, the main artery toward Haridwar, is lined with residential and commercial activity. Cantonment, housing army and defence families, is fully covered.</p>

<h2>Why Meerut Trusts RedHeart</h2>
<p>Meerut makes things that people use in competition — cricket bats that hit sixes, boxing gloves that take punches, hockey sticks that score goals. That is the city's value to the world: functional quality. RedHeart mirrors that value in flowers — fresh roses that look like they should, bouquets that hold together through the delivery, presentations that are worth the occasion. In the city that kits out India's athletes, quality is not optional.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Shastri Nagar and Pallavpuram, Meerut?", answer: "Yes, RedHeart covers Shastri Nagar, Pallavpuram, Garh Road, Cantonment, Civil Lines, Ganga Nagar, Lisari Gate, and all major Meerut areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Does RedHeart deliver Eid flowers in Meerut?", answer: "Yes! RedHeart delivers rose bouquets, marigold garlands, and Eid flower arrangements across Meerut's old city and mixed neighbourhoods. We stock festival flowers specifically for Eid season in Meerut." },
      { question: "Can I order flowers for weddings in Meerut?", answer: "Yes! RedHeart handles Meerut wedding flower orders including bulk marigold garlands, tuberose, gladioli, and stage decoration flowers. We can coordinate with wedding venues and deliver at specified times for functions." },
      { question: "Does RedHeart deliver to Meerut Cantonment?", answer: "Yes, Meerut Cantonment is fully covered by RedHeart with same-day delivery to all cantonment residential areas." },
      { question: "Is midnight flower delivery available in Meerut?", answer: "Yes, midnight delivery is available across Meerut. Order before 9 PM and choose your time — perfect for birthday surprises in Shastri Nagar, Pallavpuram, or any Meerut address." }
    ]
  },

  "aurangabad": {
    cityName: "Aurangabad",
    metaTitle: "Flower Delivery in Aurangabad | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Aurangabad with same-day delivery. Roses, bouquets & Ajanta-Ellora inspired arrangements to Cidco, Garkheda, Waluj & all areas. From ₹399.",
    h1: "Flower Delivery in Aurangabad",
    metaKeyword: "flower delivery in Aurangabad Sambhajinagar, online flower delivery Aurangabad, same day flower delivery Aurangabad, florist Aurangabad, send flowers Aurangabad",
    footerContent: `
<h2>Flower Delivery in Aurangabad — The City of Caves and Woven Silk</h2>
<p>Aurangabad — now officially renamed Chhatrapati Sambhajinagar by the Maharashtra government — is a city that carries the weight of history with the confidence of a growing industrial hub. The Ajanta Caves (2nd century BCE Buddhist cave paintings, a UNESCO World Heritage Site) are 100 km to the north; the Ellora Caves (temples carved directly into a cliff face across three faiths — Buddhist, Hindu, and Jain) are 30 km to the west; and the Bibi Ka Maqbara — the "Taj of the Deccan," built by Aurangzeb's son in memory of his mother — stands in the city itself. Aurangabad is also the Paithani silk capital of the world — the handwoven Paithani sari with its peacock and lotus borders is considered Maharashtra's finest textile tradition. In a city surrounded by carved beauty and woven art, flowers feel like a natural continuation of the aesthetic impulse. RedHeart delivers fresh flowers across Aurangabad with same-day and midnight delivery, starting at ₹399.</p>

<p>Aurangabad's flower supply runs through the market near Gulmandi and the wholesale belt near Nirala Bazar. Maharashtra's supply chain from Nashik and Pune farms reaches Aurangabad reliably, and local farms in the Marathwada region supply marigolds and seasonal flowers. The city's large Muslim population makes Eid a significant flower occasion alongside Maharashtra's Hindu festivals.</p>

<h2>Quick Reference — Flower Delivery in Aurangabad</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aurangabad (Chhatrapati Sambhajinagar), Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cidco, Garkheda, Waluj, Harsul, Osmanpura, Padegaon, N-8/N-9 area, Cantonment, Begumpura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eid, Ganesh Chaturthi, Diwali, Gudi Padwa, birthdays, Ajanta-Ellora tourism season</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, chrysanthemums</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ajanta-Ellora UNESCO caves; Bibi Ka Maqbara; Paithani silk capital</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Ganesh Chaturthi and Aurangabad's Festival Devotion</h2>
<p>Ganesh Chaturthi in Aurangabad reflects the full Maharashtra tradition — large public Ganesh installations in Cidco, Osmanpura, and the main city squares, elaborate home Ganeshas in every household, and eleven days of fresh flower decoration for each. Marigold garlands, chrysanthemum strings, and tuberose bunches are required daily throughout the festival. Gudi Padwa (Maharashtra New Year) begins the festival calendar with fresh flower torans at every doorstep. RedHeart maintains dedicated stock for Aurangabad's Ganesh Chaturthi season, with bulk order options for community pandals and personal home orders alike.</p>

<h2>Cidco to Waluj — Aurangabad's Industrial-Residential Spread</h2>
<p>Cidco (City and Industrial Development Corporation) is Aurangabad's planned township — the wide, grid-patterned streets and well-maintained civic infrastructure make it the city's most desirable residential area. The city's professional class — doctors, engineers, businesspeople — lives primarily in Cidco's N-1 to N-12 sectors. Garkheda and Harsul are newer residential extensions. Waluj is the city's industrial area — the Maharashtra Industrial Development Corporation (MIDC) Waluj area houses major automobile component manufacturers. Osmanpura is a mixed commercial-residential area with a significant Muslim population. Begumpura, the old city, carries Aurangabad's Mughal heritage.</p>

<h2>Why Aurangabad Chooses RedHeart</h2>
<p>Aurangabad is a city that appreciates artistry — the Ajanta caves' painters, the Ellora sculptors, and the Paithani weavers all worked at a level of craft that demands real respect. RedHeart brings that same respect to flowers: we select them carefully, prepare them well, and deliver them with care. In a city surrounded by humanity's finest works, the flowers we deliver aspire to their own small standard of beauty.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Cidco and Garkheda, Aurangabad?", answer: "Yes, RedHeart delivers to Cidco (all sectors), Garkheda, Waluj, Harsul, Osmanpura, and all major Aurangabad areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order Eid flower arrangements in Aurangabad?", answer: "Yes! RedHeart delivers rose bouquets, marigold garlands, and Eid flower arrangements across Aurangabad. We understand Aurangabad's significant Muslim community's gifting traditions and stock appropriately for Eid season." },
      { question: "Does RedHeart deliver to heritage hotels near Ajanta-Ellora in Aurangabad?", answer: "Yes! RedHeart delivers to hotels near Ajanta-Ellora Road, MTDC resort areas, and tourist accommodation in Aurangabad. We handle anniversary surprise deliveries and romantic arrangements for the heritage tourism belt." },
      { question: "What flowers are popular in Aurangabad for Ganesh Chaturthi?", answer: "Marigold garlands and chrysanthemum strings are essential for Ganesh Chaturthi decoration in Aurangabad. Tuberose adds fragrance to the puja. RedHeart stocks these in bulk for the festival and can handle both personal household orders and community pandal orders." },
      { question: "Is midnight flower delivery available in Aurangabad?", answer: "Yes, midnight delivery is available across Aurangabad. Order before 9 PM and choose your time — perfect for birthday surprises in Cidco, Garkheda, or any Aurangabad address." }
    ]
  },

  "raipur": {
    cityName: "Raipur",
    metaTitle: "Flower Delivery in Raipur | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Raipur with same-day delivery. Roses, marigolds & bouquets to Shankar Nagar, Telibandha, Pandri & all areas. From ₹399.",
    h1: "Flower Delivery in Raipur",
    metaKeyword: "flower delivery in Raipur, online flower delivery Raipur, same day flower delivery Raipur, florist Raipur, send flowers Raipur, flowers Shankar Nagar Telibandha Raipur",
    footerContent: `
<h2>Flower Delivery in Raipur — Chhattisgarh's Capital Grows Fast and Gifts Generously</h2>
<p>Raipur became a state capital when Chhattisgarh was carved out of Madhya Pradesh in 2000, and in the two decades since, it has grown at a pace that has transformed it from a small city to one of India's fastest-developing state capitals. The steel industry — Raipur is surrounded by Chhattisgarh's mineral belt, with iron ore from Bastar and coal from Korba fuelling steel plants — has created enormous industrial wealth. Raipur is also a rice-trading hub (Chhattisgarh is called the "rice bowl of Central India"), and the agricultural prosperity of the surrounding region flows into the city. A growing capital city with new money, new infrastructure, and a gifting culture shaped by both Chhattisgarhi tradition and urban aspiration — this is Raipur. RedHeart delivers fresh flowers across Raipur with same-day and midnight delivery, starting at ₹399.</p>

<p>Raipur's flower supply runs through the wholesale market near Ghadi Chowk and the daily flower market at Pandri. Chhattisgarh's own farms supply marigolds and tuberose, supplemented by the supply chain from Nagpur and the Vidarbha belt. The Teeja festival — Chhattisgarh's own women's festival, when married women pray for their husbands' longevity — creates a unique flower demand pattern that distinguishes Raipur from most other cities.</p>

<h2>Quick Reference — Flower Delivery in Raipur</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raipur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shankar Nagar, Telibandha, Pandri, Devendra Nagar, Pachpedi Naka, Avanti Vihar, Tatibandha, Fafadih, Raipur New Area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Teeja (Chhattisgarhi women's festival), Navratri, Diwali, Hareli (farmers' festival), birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, seasonal mixed</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chhattisgarh capital; steel & minerals hub; rice bowl of Central India</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Teeja and Chhattisgarhi Flower Traditions</h2>
<p>Teeja (Teejan) is one of Chhattisgarh's most beloved women's festivals — celebrated on the third day of the Bhadra shukla paksha, married women observe a strict fast and pray for their husbands' long life. The festival has a particular Chhattisgarhi cultural flavour: women wear green bangles, new clothes, and receive flowers from their parents' home as a part of the ritual. The Teeja flower gifting tradition is specific and meaningful — a father sending his married daughter flowers for Teeja is an expression of love that carries weight in the Chhattisgarhi cultural context. RedHeart delivers Teeja flowers — roses, mixed bouquets, and marigold arrangements — across Raipur.</p>

<h2>Shankar Nagar to Tatibandha — Raipur's Rising City</h2>
<p>Shankar Nagar is Raipur's most prestigious address — the tree-lined residential area where senior government officials, IAS officers, and the city's top business families live. Deliveries here are for significant occasions: government official retirements, IAS exam success celebrations, and the kind of personal milestone that deserves a premium arrangement. Telibandha, with its lake and surrounding commercial development, is Raipur's social hub. Pandri and Devendra Nagar are established middle-class zones with consistent year-round demand. Avanti Vihar and Tatibandha are newer developments attracting young professionals.</p>

<h2>Why Raipur Trusts RedHeart</h2>
<p>Raipur is growing fast — steel and rice money, government investment, and the optimism of a new state building its future have given the city an energy that is palpable. RedHeart grows with it: same-day delivery, fresh flowers, the standard that a capital city expects. In Chhattisgarh's heart, we are proud to be the service that marks its celebrations.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Teeja flowers in Raipur?", answer: "Yes! Teeja is Chhattisgarh's important women's festival, and RedHeart delivers roses, mixed bouquets, and marigold arrangements for Teeja gifting across Raipur. We understand the cultural significance of Teeja flower gifting in the Chhattisgarhi tradition." },
      { question: "Is same-day flower delivery available in Shankar Nagar and Telibandha, Raipur?", answer: "Yes, RedHeart covers Shankar Nagar, Telibandha, Pandri, Devendra Nagar, Pachpedi Naka, Avanti Vihar, and all major Raipur areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order Navratri flowers in Raipur?", answer: "Yes! RedHeart delivers marigolds, tuberose, chrysanthemums, and Navratri puja flowers across Raipur. We stock up for the Navratri season in Chhattisgarh, which is celebrated with particular devotion in Raipur's Durga Puja pandals." },
      { question: "Does RedHeart deliver to government colonies in Raipur?", answer: "Yes, RedHeart delivers to government housing colonies, secretariat area, and administrative zones in Raipur. We handle official occasion flowers and personal gifting for Raipur's large government employee community." },
      { question: "Is midnight flower delivery available in Raipur?", answer: "Yes, midnight delivery is available across Raipur. Order before 9 PM and choose your time — perfect for birthday surprises in Shankar Nagar, Telibandha, or any Raipur address." }
    ]
  },

  "mangaluru": {
    cityName: "Mangaluru",
    metaTitle: "Flower Delivery in Mangaluru (Mangalore) | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Mangaluru with same-day delivery. Roses, jasmine & Tulu culture bouquets to Hampankatta, Bejai, Kadri & all areas. From ₹399.",
    h1: "Flower Delivery in Mangaluru",
    metaKeyword: "flower delivery in Mangaluru Mangalore, online flower delivery Mangalore, same day flower delivery Mangaluru, florist Mangalore, send flowers Mangaluru, flowers Hampankatta Bejai",
    footerContent: `
<h2>Flower Delivery in Mangaluru — The Tulu Coast's Fragrant Port City</h2>
<p>Mangaluru (Mangalore) sits at the meeting point of the Western Ghats and the Arabian Sea — the city's port has traded in pepper, cashew, and fish for two thousand years, and the Tulu Nadu cultural region it anchors has a distinct identity that sets it apart from both Kannada and Kerala's adjacent cultures. The Tulu language, spoken by about 2 million people in the coastal Karnataka-Kerala border zone, has its own literary tradition, its own theatre form (Yakshagana), and its own floral culture rooted in the Bhuta Kola spirit worship tradition. Mangaluru is also a city of schools and banks — it gave India both the Central Bank of India and Canara Bank, founded here in the early 20th century, and its educated Tulu Brahmin community has a high per-capita income and a strong gifting culture. RedHeart delivers fresh flowers across Mangaluru with same-day and midnight delivery, starting at ₹399.</p>

<p>Mangaluru's flower supply runs through the wholesale market near Bunder (the port area) and the daily market at Hampankatta. Flowers from Kerala's coastal farms — jasmine from Kasaragod, marigolds from Kannur — supply the city, and the cool Western Ghats climate means fresh flowers hold their freshness longer here than in hotter inland cities.</p>

<h2>Quick Reference — Flower Delivery in Mangaluru</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mangaluru (Mangalore), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Areas covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hampankatta, Bejai, Kadri, Falnir, Attavar, Kankanady, Bondel, Urva, Kulur, Konchady</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kambala (Tulu harvest festival), Paryaya (Udupi temple), Christmas (large Christian community), birthdays</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jasmine, marigolds, roses, tuberose, chrysanthemums</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City identity</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tulu Nadu cultural hub; port city; banking origin city</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Christmas in Mangaluru — When the Coast's Christian Heritage Blooms</h2>
<p>Mangaluru has one of India's oldest and most vibrant Catholic communities — the Mangalorean Catholics, whose ancestors were converted by the Portuguese in the 16th century and who maintained their faith through a century of persecution by Hyder Ali and Tipu Sultan, celebrate Christmas with a devotion and cultural richness that is unique in India. Midnight Mass at the Rosario Cathedral (one of India's oldest churches) and the decorations of Mangaluru's Catholic neighbourhoods make Christmas a major flower occasion. Poinsettias, white lilies, and roses are the Christmas flowers of choice. RedHeart delivers Christmas flower arrangements across Mangaluru's Christian neighbourhoods with the respect this community's celebrations deserve.</p>

<h2>Hampankatta to Kankanady — Mangaluru's Cultural Map</h2>
<p>Hampankatta is Mangaluru's commercial centre — the busy market area around the clocktower where the city's shopping and business life concentrates. Kadri, near the Kadri Manjunath temple (one of the oldest temples in Karnataka), is a significant religious and residential area. Bejai and Falnir are established residential zones popular with the city's Hindu Tulu community. Kankanady, Bondel, and Attavar have large Catholic populations and are significant delivery zones for Christmas and Easter flowers. Urva is the city's older residential area near the port.</p>

<h2>Why Mangaluru Trusts RedHeart</h2>
<p>Mangaluru is a refined city — the Tulu coast's combination of sea air, good food, educated families, and strong religious traditions creates a community that values quality and sincerity. RedHeart delivers fresh coastal-sourced flowers to this city with the care that its multi-religious, multi-cultural identity deserves. From Kadri temple marigolds to Bondel church lilies, we deliver to every community with equal freshness and respect.</p>
`,
    faqs: [
      { question: "Does RedHeart deliver Christmas flowers in Mangaluru?", answer: "Yes! RedHeart delivers Christmas flower arrangements — poinsettias, white lilies, roses, and mixed festive bouquets — across Mangaluru's Catholic neighbourhoods including Kankanady, Bondel, Attavar, and Bejai. We stock Christmas flowers and deliver for Midnight Mass preparation and Christmas Day celebrations." },
      { question: "Is same-day flower delivery available in Hampankatta and Kadri, Mangaluru?", answer: "Yes, RedHeart covers Hampankatta, Kadri, Bejai, Falnir, Attavar, Kankanady, Bondel, and all major Mangaluru areas with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Can I order jasmine flowers for delivery in Mangaluru?", answer: "Yes! Jasmine from the Kerala coastal farms (Kasaragod, Kannur) is available through RedHeart in Mangaluru. Fresh jasmine strings and bunches for temple offerings, hair decoration, and home fragrance — delivered same-day." },
      { question: "Does RedHeart deliver to the Rosario Cathedral area and other churches in Mangaluru?", answer: "Yes, RedHeart delivers to addresses near Rosario Cathedral, Milagres Church, and all church areas in Mangaluru for Easter, Christmas, and other Christian occasion flower deliveries." },
      { question: "Is midnight flower delivery available in Mangaluru?", answer: "Yes, midnight delivery is available across Mangaluru. Order before 9 PM and choose your time — perfect for birthday surprises in Hampankatta, Kadri, Kankanady, or any Mangaluru address." }
    ]
  },

  "navi-mumbai": {
    cityName: "Navi Mumbai",
    metaTitle: "Flower Delivery in Navi Mumbai | Same-Day & Midnight | RedHeart",
    metaDescription: "Order fresh flowers in Navi Mumbai with same-day delivery. Roses, bouquets to Vashi, Kharghar, Nerul, Belapur & all nodes. From ₹399.",
    h1: "Flower Delivery in Navi Mumbai",
    metaKeyword: "flower delivery in Navi Mumbai, online flower delivery Navi Mumbai, same day flower delivery Navi Mumbai, florist Navi Mumbai, send flowers Navi Mumbai, flowers Vashi Kharghar Nerul",
    footerContent: `
<h2>Flower Delivery in Navi Mumbai — The Planned City That Grew a Soul</h2>
<p>Navi Mumbai was born as an idea — a planned city to relieve Mumbai's pressure, conceived in 1971 by CIDCO (City and Industrial Development Corporation of Maharashtra) and built node by node on the Thane Creek's eastern shore. What began as government planning has evolved into one of India's most successful planned urban developments — Vashi, Nerul, Belapur, Kharghar, Panvel, and their surrounding nodes together house over a million people in a city that has the infrastructure its parent Mumbai never quite managed. Navi Mumbai's residents are largely Mumbai's overflow — IT professionals, finance workers, young families who chose the cleaner roads and newer apartments of the planned city over Mumbai's congestion. This demographic is RedHeart's natural customer: digitally native, delivery-comfortable, and celebrating every occasion with online orders. RedHeart delivers fresh flowers across Navi Mumbai with same-day and midnight delivery, starting at ₹399.</p>

<p>Navi Mumbai's flower supply benefits from its proximity to Mumbai's Dadar Phool Gali — the wholesale flower market that supplies the entire Mumbai Metropolitan Region. Fresh flowers from across India arrive at Dadar daily, and Navi Mumbai's supply chain draws from this abundance. The Uran-Panvel belt also has local flower farms supplying marigolds and seasonal flowers directly to the city's wholesale points.</p>

<h2>Quick Reference — Flower Delivery in Navi Mumbai</h2>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;text-align:left;">Information</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navi Mumbai, Maharashtra (MMR)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Delivery speed</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day (2–4 hrs) · Midnight · Next-day scheduled</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nodes covered</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vashi, Nerul, Belapur (CBD), Kharghar, Panvel, Airoli, Ghansoli, Kopar Khairane, Turbhe, Sanpada</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Top occasions</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ganesh Chaturthi, Diwali, birthdays, anniversaries, corporate events (CBD Belapur)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular flowers</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, tuberose, gerberas, lilies</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City character</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">India's best planned city; young professional demographic; clean infrastructure</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
  </tbody>
</table>

<h2>Ganesh Chaturthi — When Navi Mumbai Matches Mumbai's Devotion</h2>
<p>Navi Mumbai may have been built as a planned alternative to Mumbai's chaos, but it inherited Mumbai's devotional DNA completely. Ganesh Chaturthi in Navi Mumbai is celebrated with the full Mumbai tradition — large public Ganeshas in Vashi Sector 17, in Kharghar's sector grounds, and in every residential society's common area. The eleven-day festival requires enormous quantities of marigolds, chrysanthemums, and tuberose for daily fresh decoration. RedHeart's Ganesh Chaturthi preparation for Navi Mumbai involves dedicated supply from both Dadar Phool Gali and local Panvel farms, ensuring every node is covered throughout the festival.</p>

<h2>Vashi to Kharghar — Navi Mumbai's Node-by-Node Coverage</h2>
<p>Vashi is Navi Mumbai's commercial heart — the APMC market (the largest agriculture produce market in Asia), the shopping malls along Sector 17, and the mixed residential-commercial character make it the city's busiest delivery zone. Nerul and Belapur (CBD) are slightly quieter but significantly affluent — CBD Belapur houses major corporate offices and the government institutions that make Navi Mumbai administratively significant. Kharghar, developing rapidly with new residential projects on the hillside, is one of RedHeart's fastest-growing delivery areas in the city. Panvel, at the far end of the planned city, is Navi Mumbai's gateway to the Konkan and sees significant transit-related gifting. Airoli, Ghansoli, and Kopar Khairane serve the city's IT and industrial working population.</p>

<h2>Why Navi Mumbai Chooses RedHeart</h2>
<p>Navi Mumbai was built on the premise that a city could be better if it was properly planned. RedHeart's service philosophy matches that ambition: we plan our sourcing, prepare our arrangements with care, and deliver on time with the reliability that a planned city's residents have always expected from their services. In a city where the infrastructure works, RedHeart works too.</p>
`,
    faqs: [
      { question: "Is same-day flower delivery available in Vashi, Nerul, and Kharghar, Navi Mumbai?", answer: "Yes, RedHeart delivers to Vashi, Nerul, Belapur, Kharghar, Panvel, Airoli, Ghansoli, Kopar Khairane, Turbhe, Sanpada, and all Navi Mumbai nodes with same-day delivery. Orders before 5 PM are delivered within 2–4 hours." },
      { question: "Does RedHeart deliver flowers to corporate offices in CBD Belapur, Navi Mumbai?", answer: "Yes! CBD Belapur is one of our key corporate delivery zones in Navi Mumbai. We handle desk flowers, corporate gifting arrangements, and event flowers for offices in the CBD Belapur commercial district." },
      { question: "Can I order Ganesh Chaturthi flowers in Navi Mumbai?", answer: "Yes! RedHeart delivers marigold garlands, tuberose, chrysanthemums, and all Ganesh Chaturthi flowers across Navi Mumbai throughout the eleven-day festival. We have dedicated supply for Navi Mumbai's Chaturthi season and can handle both personal home orders and residential society bulk orders." },
      { question: "Is flower delivery available in Panvel and the Navi Mumbai outskirts?", answer: "Yes! Panvel is covered by RedHeart with same-day delivery. We also serve Kharghar, New Panvel, and the broader Navi Mumbai extended zone. Specify your sector or society and we deliver." },
      { question: "Is midnight flower delivery available in Navi Mumbai?", answer: "Yes, midnight delivery is available across all Navi Mumbai nodes. Order before 9 PM and choose your time — perfect for birthday surprises in Vashi, Kharghar, Nerul, or any Navi Mumbai address." }
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
  console.log("\nDone — batch 8 complete.");
}
run().catch((err) => { console.error(err); process.exit(1); });
