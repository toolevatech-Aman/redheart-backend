// Plants Tier 1 Batch 2 — 8 major cities
// Coimbatore, Kochi, Kolkata, Lucknow, Mumbai, Nagpur, Pune, Surat

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "coimbatore": {
    cityName: "Coimbatore",
    metaTitle: "Buy Plants Online in Coimbatore | Indoor & Tropical Plants | RedHeart",
    metaDescription: "Order plants online in Coimbatore. Indoor plants, jasmine, tropical foliage & gifting combos. Same-day delivery. Starting ₹299. Fresh plants for the Manchester of South India.",
    h1: "Buy Plants Online in Coimbatore — Same-Day Delivery Across the City",
    metaKeyword: "plants online coimbatore, buy plants coimbatore, indoor plants coimbatore, plant delivery coimbatore tamil nadu, jasmine plant coimbatore, online nursery coimbatore",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Coimbatore — Western Ghats City Gets Doorstep Greens</h2>

<p>Coimbatore is Tamil Nadu's second-largest city and one of South India's most significant industrial centres. Called the "Manchester of South India" for its textile and manufacturing heritage, the city sits at around 411 metres in the shadow of the Nilgiri foothills, with the Anamalai Tiger Reserve to the south and the Palani Hills to the north. This elevation gives Coimbatore a more pleasant climate than Chennai — cooler, less humid, with clear air and the visible green line of the Western Ghats on the horizon. That landscape proximity creates a natural affinity for plants among Coimbatore residents, and the city's large Tamil middle class maintains strong horticultural traditions.</p>

<p>Coimbatore's climate is semi-arid to sub-humid — summers reach 35–38°C (cooler than Chennai or Hyderabad due to altitude), the southwest monsoon (June–September) brings good rain, and winters are pleasantly cool (16–28°C). This moderate climate suits a wide range of plants. RedHeart delivers across Coimbatore, Tirupur, Pollachi, and Mettupalayam with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Best Plants for Coimbatore Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Jasmine (Malligai / Madurai Malli)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tamil tradition, fragrance, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi (Thulasi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Daily pooja, courtyard</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, trailing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, office lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus (Chembaruthi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja, temple</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Tamil Plant Traditions in Coimbatore</h3>

<p>Coimbatore's Tamil identity is expressed strongly through its plant culture. Thulasi (tulsi) is indispensable — grown in every traditional home on a decorated thulasi maadam (stone or brick pedestal) in the front verandah or courtyard. Malligai (jasmine) is cultivated at home and bought fresh daily from the street vendors near the Ukkadam flower market. Chembaruthi (hibiscus) is offered to deities, particularly Devi and Muruga. These sacred plants are not decorative accessories but active participants in daily worship. Coimbatore's large Gounder community, agriculturally rooted, also maintains strong kitchen garden traditions — curry leaf, lemon grass, and aloe vera are common in household gardens.</p>

<p>The newer Coimbatore — the IT parks near Tidel Park and the residential areas of RS Puram, Singanallur, and Saravanampatti — has embraced indoor plants. The textile and manufacturing industry has also created significant corporate gifting demand for plants during Pongal (the biggest festival here) and Tamil New Year (Puthandu).</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Coimbatore</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Area</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Localities</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Coimbatore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">RS Puram, Gandhipuram, Ukkadam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East Coimbatore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Singanallur, Saravanampatti, Peelamedu</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Tirupur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tirupur town, Avinashi Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pollachi / Mettupalayam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pollachi, Mettupalayam</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Where can I buy a malligai (jasmine) plant in Coimbatore online?", answer: "RedHeart delivers malligai plants across Coimbatore with same-day delivery. Jasmine grows vigorously in Coimbatore's climate — place in full sun, water daily, and it will bloom from late spring through monsoon, filling your home with fragrance. Order before 3 PM for same-day delivery." },
      { question: "Is same-day plant delivery available in RS Puram and Saravanampatti?", answer: "Yes. Same-day delivery is available across central Coimbatore including RS Puram, Gandhipuram, Singanallur, Saravanampatti, and Peelamedu. Order before 3 PM. Midnight delivery is also available for central Coimbatore areas." },
      { question: "What plant gift is best for Pongal in Coimbatore?", answer: "For Pongal, sugarcane is traditionally symbolic, but a marigold pot or a yellow chrysanthemum is a beautiful plant gift for Tamil families. Thulasi (tulsi) in a decorated pot is the most meaningful gift for any occasion in traditional Coimbatore homes. For a contemporary Pongal gift, a money plant or lucky bamboo combo works beautifully." },
      { question: "Which indoor plants work best in Coimbatore's moderate climate?", answer: "Coimbatore's pleasant 16–35°C year-round range means almost any indoor plant does well here. Peace lily, areca palm, money plant, snake plant, and philodendron all thrive without special humidity or temperature control. Coimbatore is one of Tamil Nadu's best cities for growing a variety of indoor plants." },
      { question: "Do you deliver plants to Tirupur from Coimbatore?", answer: "Yes. Tirupur is within our delivery zone. Same-day delivery is available for Tirupur orders placed before 1 PM. Tirupur's large garment industry workforce has growing demand for office and home plants — we deliver regularly to residential areas and industrial offices in the city." }
    ]
  },

  "kochi": {
    cityName: "Kochi",
    metaTitle: "Buy Plants Online in Kochi | Tropical, Indoor & Aquatic Plants | RedHeart",
    metaDescription: "Order plants online in Kochi. Tropical plants, anthurium, indoor greens & gifting combos. Same-day delivery across Kochi, Ernakulam & Kakkanad. Starting ₹299.",
    h1: "Buy Plants Online in Kochi — Tropical Plants for Kerala's Commercial Capital",
    metaKeyword: "plants online kochi, buy plants kochi, indoor plants kochi, plant delivery kochi kerala, tropical plants kochi ernakulam, anthurium kochi, online nursery kochi",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kochi — Queen of the Arabian Sea Gets Doorstep Plant Delivery</h2>

<p>Kochi — built across a harbour, a peninsula, and several islands — is one of India's most cosmopolitan port cities. Fort Kochi's Dutch and Portuguese heritage, the Jewish Synagogue, the Chinese fishing nets at the waterfront, the contemporary art at Kochi-Muziris Biennale — the city is a layered cultural gem. Kochi is also Kerala's primary commercial centre: Infopark and SmartCity house thousands of IT professionals; CIAL (Cochin International Airport) connects the city to the Gulf and beyond; and the back waters of Vembanad Lake lap at the city's southern edge. In this green, water-flanked city, plants are everywhere — in the courtyards of Fort Kochi's heritage homes, in the apartment balconies of Kadavanthra, in the IT campus lobbies of Kakkanad.</p>

<p>Kochi's climate is quintessential humid tropical Kerala — warm (26–33°C), very wet (average rainfall 3,100 mm), and high humidity year-round. This makes Kochi one of India's best cities for growing tropical plants without any special care. RedHeart delivers across Kochi, Ernakulam, Kakkanad, Kalamassery, Aluva, and Thrippunithura with same-day service.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants That Thrive in Kochi's Tropical Climate</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why It's Perfect Here</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Water Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves humidity, blooms long</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera Deliciosa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement plant, thrives in humidity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every Kerala home</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low–moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, low light, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus (Chembaruthi)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Pooja, garden, daily blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, office lobbies</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Bird of Paradise</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Heritage home gardens</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹899</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Moderate</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, desk plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Kerala's Plant Traditions Meet Kochi's Modern Culture</h3>

<p>Kochi's plant culture exists on two levels that rarely conflict. Traditional Kerala homes in Thrippunithura, Tripunithura, and the older parts of Fort Kochi maintain sacred plant traditions — a thulasi maadam in the front yard is non-negotiable, hibiscus is grown for daily pooja, and the coconut palm and banana tree in the garden are practical, spiritual, and culinary assets simultaneously. At the same time, Kochi's cosmopolitan IT crowd in Infopark, SmartCity, and the Marine Drive apartments has wholeheartedly adopted the indoor plant aesthetic — monstera, fiddle leaf fig, and anthurium collections are a point of pride on social media and in open-plan offices.</p>

<p>For Onam — Kerala's biggest harvest festival — flower arranging (pookalam) is central, and potted flowering plants bring colour to Kochi homes beyond just the rangoli. Athirapookalam (Kochi's famous Onam pookalam competition at the Thrikkakara temple ground) sets the standard; families try to recreate a small version at home with potted chrysanthemum, marigold, and seasonal flowers.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kochi</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Ernakulam / MG Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kadavanthra, Palarivattom, MG Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Kakkanad / Infopark</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kakkanad, Infopark, SmartCity</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Fort Kochi / Mattanchery</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fort Kochi, Jew Town, Mattanchery</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tripunithura / Aluva</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Tripunithura, Kalamassery, Aluva</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which tropical plants grow best in Kochi's humid climate?", answer: "Anthurium, monstera, peace lily, philodendron, bird of paradise, and areca palm all grow luxuriantly in Kochi's year-round warmth and high humidity. These plants need almost no special care here — the natural climate handles humidity requirements. Water moderately, avoid waterlogged soil, and they'll thrive beautifully." },
      { question: "Is same-day plant delivery available in Kakkanad and Infopark area?", answer: "Yes. Same-day delivery is available in Kakkanad, Infopark, SmartCity, and all Ernakulam areas. Order before 3 PM for same-day delivery. Midnight delivery is available across Ernakulam and Kakkanad. Corporate plant orders for Infopark offices are accommodated with advance notice." },
      { question: "What plant is best for an Onam gift in Kochi?", answer: "For Onam, potted chrysanthemum, marigold, or a flowering anthurium are the most festive plant gifts — their colours complement the pookalam tradition beautifully. A thulasi plant in a decorated clay pot is the most traditional and meaningful choice for a Kerala household. Lucky bamboo and money plant are popular modern Onam gifts." },
      { question: "Which indoor plant is most popular in Kochi's IT offices?", answer: "Areca palm and snake plant are the top choices in Kochi's Infopark and SmartCity offices — they look professional, purify air, and survive the AC-heavy environment. Monstera is growing in popularity for biophilic-designed tech offices. We supply bulk plant orders for corporate offices across Kochi with advance scheduling." },
      { question: "How do I prevent overwatering during Kochi's monsoon?", answer: "During the June–September monsoon, Kochi receives intense daily rain. Indoor plants need watering only once a week or less — the ambient humidity keeps soil moist. Always check soil with your finger before watering. Outdoor pots must have drainage holes; raise them slightly off flat surfaces to prevent waterlogging. In Kerala's monsoon, overwatering is the single biggest plant-killer." }
    ]
  },

  "kolkata": {
    cityName: "Kolkata",
    metaTitle: "Buy Plants Online in Kolkata | Indoor, Tropical & Gift Plants | RedHeart",
    metaDescription: "Order plants online in Kolkata with same-day delivery. Indoor plants, tropical foliage, anthurium, shiuli & gifting combos. Starting ₹299. City of Joy's best plant delivery.",
    h1: "Buy Plants Online in Kolkata — Same-Day Plant Delivery Across the City of Joy",
    metaKeyword: "plants online kolkata, buy plants kolkata, indoor plants kolkata, plant delivery kolkata, tropical plants kolkata, shiuli plant kolkata, online nursery kolkata west bengal",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Kolkata — Bengal's City of Culture Gets Doorstep Greens</h2>

<p>Kolkata is India's city of poets, painters, and philosophers — the birthplace of Rabindranath Tagore, Subhas Chandra Bose, and the headquarters of the Indian independence movement. It's also a city where seasons are felt intensely: the shiuli flowers falling on misty October mornings signal Durga Puja; the fragrance of bakul in the parks marks summer evenings; the monsoon rains drench the city from June to September. Plants and flowers are woven into Bengali cultural life more deeply than almost anywhere else in India — from the elaborate puja decorations to the bouquets at Tagore's anniversary celebrations to the Flower Show at Eden Gardens.</p>

<p>Kolkata's tropical climate — hot and humid summers (37–40°C), very wet monsoon, and pleasant cool winters (10–20°C) — is excellent for a wide variety of plants. The city sits at near sea level, receives 1,600 mm of rain annually, and has an abundance of gardening knowledge across its many residential neighbourhoods. RedHeart delivers across Kolkata, Salt Lake, New Town, Howrah, and surrounding areas with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Loved by Kolkata Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Bengali Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Shiuli (Night Jasmine)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Autumn mornings, Durga Puja symbol</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sept–Nov</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor staple, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, air purifier, elegant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, long blooms, tropical</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room statement, modern Bengali homes</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hindu households, daily use</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, very low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Kolkata's Seasons and Plant Culture</h3>

<p>Kolkata's seasons shape its plant life in ways few Indian cities can match. The Bengali calendar divides the year into six seasons (shad ritu), and each one has associated flowers and plants that carry cultural meaning. Autumn — the season of Durga Puja — is heralded by the white shiuli (Nyctanthes arbor-tristis) flowers that fall on dewy mornings. Giving someone a shiuli plant is an act of deep Bengali sentiment; it blooms only in autumn and its fragrance is associated with childhood, home, and the Puja season. During Poila Baishakh (Bengali New Year in mid-April), new plants and flowers are purchased to bring freshness into the home. The winter months (November–January) see chrysanthemum and seasonal flowers bloom across parks and gardens.</p>

<p>The modern face of Kolkata — Newtown's IT corridors, Salt Lake's office complexes, the growing residential towers along the EM Bypass — has embraced indoor plants thoroughly. The biophilic workspace aesthetic is well-established in Kolkata's growing tech and fintech companies. Peace lily, areca palm, monstera, and snake plant are the most popular office plants here.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Kolkata</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South Kolkata</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Alipore, Jadavpur, Gariahat, Tollygunge</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">North Kolkata</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Shyambazar, Ultadanga, Dunlop</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Salt Lake / Newtown</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Sectors I–V, Action Area, Rajarhat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Howrah / Serampore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Howrah town, Liluah, Serampore</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I buy a shiuli (night jasmine) plant online in Kolkata?", answer: "Yes. Shiuli (Nyctanthes arbor-tristis) is available for delivery in Kolkata. It's a mid-size shrub that blooms September through November, dropping fragrant white flowers in the early morning — one of the most evocative scents in Bengali culture. Plant in a sunny or partial-shade spot with good drainage." },
      { question: "Is same-day plant delivery available across Kolkata?", answer: "Yes. Same-day delivery is available across south Kolkata, north Kolkata, Salt Lake, Newtown, and Howrah. Order before 3 PM. Midnight delivery is also available across central and south Kolkata. We deliver seven days a week including Durga Puja and Poila Baishakh." },
      { question: "Which plant is the best gift for Durga Puja in Kolkata?", answer: "A shiuli plant is the most emotionally resonant gift for the Puja season — its autumn blooms are inseparable from the Bengali Puja experience. Tulsi in a decorated clay pot is a sacred alternative. Anthurium and peace lily are popular modern choices that fit the festive aesthetics of decorated puja pandals and homes." },
      { question: "Which indoor plant is best for a Kolkata IT office in Salt Lake or Newtown?", answer: "Peace lily, areca palm, and snake plant are the most popular choices for Salt Lake and Newtown offices. These thrive in AC environments, improve air quality, and look professional. ZZ plant is excellent for offices with limited natural light. We supply bulk plant orders for corporate offices across Kolkata's tech zones with advance scheduling." },
      { question: "How do I care for plants during Kolkata's intense monsoon?", answer: "Kolkata's June–September monsoon is heavy — often 200+ mm in a single day. Indoor plants need far less watering than usual; let soil dry between waterings. Outdoor plants in pots should be moved to a partially sheltered spot during sustained heavy rain to prevent waterlogging. Check all pot drainage holes before monsoon season; blocked holes are a common cause of root rot." }
    ]
  },

  "lucknow": {
    cityName: "Lucknow",
    metaTitle: "Buy Plants Online in Lucknow | Indoor, Rose & Flowering Plants | RedHeart",
    metaDescription: "Order plants online in Lucknow. Rose, mogra, indoor plants & gifting combos. Same-day delivery across Lucknow. Starting ₹299. City of Nawabs gets fresh plant delivery.",
    h1: "Buy Plants Online in Lucknow — Same-Day Plant Delivery in the City of Nawabs",
    metaKeyword: "plants online lucknow, buy plants lucknow, indoor plants lucknow, plant delivery lucknow, rose plant lucknow, mogra plant lucknow, online nursery lucknow uttar pradesh",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Lucknow — Nawabi Elegance Meets Modern Green Living</h2>

<p>Lucknow is the City of Nawabs — a city of refined culture, extraordinary cuisine, and a tehzeeb (etiquette) that is legendary across India. The Bara Imambara, Chhota Imambara, the Rumi Darwaza — these architectural gems speak to a Nawabi sensibility that prized beauty in every dimension, including gardens. The Nawab of Awadh's courts maintained elaborate gardens, and the tradition of fragrant plants — rose, mogra (jasmine), marigold — has deep roots in Lucknow's cultural identity. Today's Lucknow — a rapidly growing state capital with new residential colonies in Gomti Nagar and Sushant Golf City, a growing tech presence, and India's first operational metro across multiple corridors — carries this horticultural heritage into modern homes.</p>

<p>Lucknow's climate is North India semi-arid: hot summers (43–45°C in June), dense winter fog (2–5°C minimum in January), and moderate monsoon (900 mm). This full-range climate means plant choices matter. For the spring window (February–April) and the autumn-winter (October–January), Lucknow's gardens are exceptional. RedHeart delivers across Lucknow — Gomti Nagar to Hazratganj, Aliganj to Indira Nagar — with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants Popular in Lucknow</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Lucknowi Connection</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Season</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nawabi garden tradition, winter bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nov–Apr</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Mogra (Jasmine)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Fragrance, hair garland tradition</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Mar–Oct</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, auspicious gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, handles winter cold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, Gomti Nagar apartments</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Marigold</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Festivals, weddings, decoration</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹199</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Oct–Feb</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Corporate gifting, desk plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">All year</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Lucknow's Plant Seasons</h3>

<p>Lucknow has two outstanding gardening windows. The winter season (October–February) is when Lucknow's gardens shine: rose plants bloom prolifically from December through March, marigolds and seasonal flowers fill every roadside nursery, and the cool, calm weather makes outdoor gardening a pleasure. The historic Manavta Park and various botanical spaces in Lucknow are at their finest during these months. Plant new outdoor species in October to maximise the growth window before summer arrives.</p>

<p>Summer (April–June) is harsh — temperatures above 44°C and hot, dry Loo winds make outdoor plants struggle. Indoor plants in air-conditioned rooms are the safest route during this period. Keep outdoor pots in partial shade, water twice daily (morning and late evening), and mulch heavily to retain soil moisture. The monsoon (July–September) brings relief and a burst of growth; outdoor plants that survived summer will reward you with vigorous new growth from July onwards.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Lucknow</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central / South LKO</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Hazratganj, Charbagh, Aminabad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">East LKO</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gomti Nagar, Indira Nagar, Mahanagar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">North LKO</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Aliganj, Chinhat, Faizabad Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">West LKO</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Alambagh, Sushant Golf City, Kanpur Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants match Lucknow's Nawabi culture for gifting?", answer: "Rose and mogra (jasmine) are the most culturally aligned plant gifts for Lucknow — both carry centuries of Nawabi garden heritage. A rose plant in a terracotta or ceramic pot is a timeless gift. For modern gifting, a peace lily or areca palm in a premium planter pairs elegance with practicality. Lucky bamboo is popular in Lucknow's growing corporate sector." },
      { question: "Can I get same-day plant delivery in Gomti Nagar?", answer: "Yes. Same-day delivery is available across Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, and all major Lucknow areas. Order before 3 PM. Midnight delivery is also available for central and east Lucknow." },
      { question: "When is the best time to plant roses in Lucknow?", answer: "October is the best time to plant roses in Lucknow. The October planting gives roots time to establish before the blooming season (December–March). Deep-water every 3-4 days in winter, apply fertiliser monthly, and prune after each flowering flush. Lucknow's rose season — when the entire city feels like a garden — is genuinely one of North India's finest." },
      { question: "Which indoor plant is best for Lucknow's winter fog season?", answer: "Snake plant and ZZ plant handle Lucknow's cold, foggy January well — they tolerate low light (important during dense fog days) and cool temperatures. Money plant and areca palm are also good indoors. Keep tropical plants away from drafty windows in December–January. All indoor plants should be in heated rooms during cold nights." },
      { question: "What plant is a good Eid gift in Lucknow?", answer: "Rose plants are the most meaningful Eid gift in Lucknow's significant Muslim community — roses carry deep resonance in Urdu poetry and the Nawabi aesthetic. A rose plant in a ceramic pot is a lasting, elegant gift. Mogra (jasmine) is also associated with the fragrance culture of Lucknow's Nawabi kitchens and courts." }
    ]
  },

  "mumbai": {
    cityName: "Mumbai",
    metaTitle: "Buy Plants Online in Mumbai | Indoor, Coastal & Gift Plants | RedHeart",
    metaDescription: "Order plants online in Mumbai with same-day delivery. Indoor plants, monstera, anthurium, succulent & gifting combos for every budget. Starting ₹299.",
    h1: "Buy Plants Online in Mumbai — Same-Day Plant Delivery Across the Maximum City",
    metaKeyword: "plants online mumbai, buy plants mumbai, indoor plants mumbai, plant delivery mumbai, online nursery mumbai, anthurium mumbai, monstera mumbai, succulent mumbai",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Mumbai — India's Financial Capital Gets the Plants It Deserves</h2>

<p>Mumbai runs on ambition, energy, and very little space. In a city where a 600 sq ft apartment is considered generous and balconies are measured in square feet rather than metres, indoor plants have become the primary way Mumbaikars connect with nature. The city's plant community is passionate and sophisticated — rooftop gardens in Worli, plant cafes in Bandra, balcony jungles in Andheri — Mumbai has developed a plant culture that combines the lush tropical environment with the constraint and creativity of urban living at extreme density.</p>

<p>Mumbai's climate is coastal tropical: hot and humid from March to May (35–40°C), intensely rainy from June to September (2,400 mm annual rainfall), and pleasantly warm in winter (17–32°C). The combination of heat and humidity means tropical plants grow here with almost no special care — monstera, anthurium, pothos, and philodendron push out new leaves every few weeks in Mumbai's natural conditions. Succulents are the challenge — they need careful drainage to avoid root rot in Mumbai's wet months. RedHeart delivers plants across Mumbai — Bandra to Borivali, Colaba to Kurla, BKC to Andheri — with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Most Popular Plants in Mumbai</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Mumbai Loves It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Space Need</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera Deliciosa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement plant, thrives in Mumbai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant (Pothos)</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every home, trailing on walls</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Small</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Compact, air purifier, zero fuss</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Small</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Low light, gifting, office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Small</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Loves Mumbai's humidity, bright blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Small</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Extremely low care, BKC offices</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Small–medium</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, high-rise apartments</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Philodendron</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Balcony trailing or indoor upright</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹449</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Small</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Mumbai — For Every Occasion and Budget</h3>

<p>Mumbai runs on relationships, and plant gifting has found a firm place in the city's gifting culture. The corporate belt — BKC, Lower Parel, Andheri East — drives significant demand for premium plant gifts: departures, promotions, client gifting, office inaugurations. A large monstera in a concrete planter is a sought-after gift in this segment. For Ganesh Chaturthi (Mumbai's grandest festival), decorative potted plants add to the pandal and home festive decor. Diwali is the year's biggest plant gifting window — money plant combos, tulsi in terracotta, and lucky bamboo towers are popular across all Mumbai demographics.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Mumbai</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South Mumbai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Colaba, Fort, Worli, Lower Parel</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Mumbai</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bandra, Kurla, BKC, Sion</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Western Suburbs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Andheri, Goregaon, Malad, Borivali</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Navi Mumbai / Thane</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vashi, Kharghar, Thane, Airoli</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which indoor plants are best for a small Mumbai apartment?", answer: "Snake plant, money plant (pothos), and peace lily are the top choices for small Mumbai flats — they're compact, need minimal light, and thrive in Mumbai's humid indoor climate. A philodendron trained to trail across a bookshelf adds dramatic greenery without floor space. ZZ plant is excellent for north-facing rooms with limited light." },
      { question: "Is same-day plant delivery available in Bandra and BKC?", answer: "Yes. Same-day delivery is available across Bandra, BKC, Worli, Lower Parel, Andheri, and all of Mumbai. Order before 3 PM for same-day delivery. Midnight delivery is also available for south and central Mumbai. We navigate Mumbai traffic efficiently — most orders arrive well within the 4-hour window." },
      { question: "Which plants grow best in Mumbai's monsoon and high humidity?", answer: "Monstera, anthurium, pothos, philodendron, and peace lily love Mumbai's natural humidity and grow vigorously during monsoon without any extra care. Ensure outdoor balcony pots have clear drainage holes during monsoon — the heavy rainfall can waterlog soil quickly. Succulents should be moved indoors or under cover during peak monsoon." },
      { question: "What plant makes the best gift for Ganesh Chaturthi in Mumbai?", answer: "A durva grass plant or a tulsi plant is traditionally significant for Ganesh Chaturthi — durva (doob grass) is offered to Ganesha. For a modern festive gift, a money plant in a premium ceramic pot with a personalised message card is elegant and auspicious. Marigold plants for pandal decoration are also popular during Ganesh festival season." },
      { question: "Do you supply plants for offices in BKC and Lower Parel Mumbai?", answer: "Yes. We regularly supply areca palms, ZZ plants, snake plants, and monstera to corporate offices in BKC, Lower Parel, and Andheri East. Bulk orders with advance notice are accommodated at corporate pricing. We can also schedule regular plant maintenance delivery for offices that want fresh plants at set intervals." }
    ]
  },

  "nagpur": {
    cityName: "Nagpur",
    metaTitle: "Buy Plants Online in Nagpur | Indoor & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Nagpur. Indoor plants, orange plants, bougainvillea & gifting combos. Same-day delivery. Starting ₹299. Fresh plants for Vidarbha's Orange City.",
    h1: "Buy Plants Online in Nagpur — Same-Day Plant Delivery in India's Orange City",
    metaKeyword: "plants online nagpur, buy plants nagpur, indoor plants nagpur, plant delivery nagpur maharashtra, orange plant nagpur, online nursery nagpur vidarbha",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Nagpur — The Zero Mile Centre of India Gets Doorstep Greens</h2>

<p>Nagpur sits at India's exact geographic centre — the Zero Mile Stone marks the country's midpoint in the city — making it the logistical heart of the nation and home to India's largest orange groves, which give the city its "Orange City" nickname. Nagpur's oranges are a pride of Vidarbha: the sweet Nagpur santra is exported across India and the world. This deep agricultural identity — along with the city's role as the headquarters of the RSS and the Rashtriya Swayamsevak Sangh's carefully maintained gardens — gives Nagpur residents a natural affinity for plants and outdoor spaces.</p>

<p>Nagpur's climate is sub-tropical with extremes: summers are among India's hottest (47–48°C has been recorded in May), winters are mild and dry (10–15°C), and the monsoon delivers 1,050 mm of rain from June to September. This demands heat-tolerant plants for outdoor spaces and reliable indoor plants for the long summer months when residents spend most time in air-conditioned interiors. RedHeart delivers across Nagpur, Wardha, Yavatmal, and nearby areas with same-day service.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plants for Nagpur Homes and Offices</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best For</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Heat Tolerance</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, office, heat-tolerant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">ZZ Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, very low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Aloe Vera</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kitchen, medicinal, summer-tough</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, compound, summer bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Excellent</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Hibiscus</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, office lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good (indoors)</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Good</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Surviving Nagpur's Extreme Heat</h3>

<p>Nagpur's May temperatures are genuinely extreme — the city regularly ranks among India's five hottest during peak summer. Outdoor plant care from April to June requires: twice-daily deep watering (morning and evening), thick mulch layer to retain soil moisture, and afternoon shade for any non-desert plant. Bougainvillea is actually at its most spectacular in Nagpur's pre-monsoon heat — planted on a west or south-facing wall, it blazes with colour from March through May. After monsoon (October onwards), Nagpur's climate becomes genuinely pleasant, and this is the best time to plant new outdoor species and repot indoor plants.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Nagpur</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Nagpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Dharampeth, Sitabuldi, Sadar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">West / South Nagpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Wardha Road, Hingna, Manewada</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">East Nagpur</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bhandara Road, Katol Road, Kamptee</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Wardha / Yavatmal</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Wardha, Yavatmal towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants handle Nagpur's extreme summer heat?", answer: "ZZ plant, snake plant, aloe vera, bougainvillea, and desert rose are the best performers in Nagpur's 47–48°C summers. These plants are heat-adapted and require minimal water. Keep ZZ plant and snake plant indoors in AC rooms during peak summer. Water bougainvillea and aloe vera twice daily outdoors in April–June." },
      { question: "Is same-day plant delivery available in Nagpur?", answer: "Yes. Same-day delivery is available across Nagpur including Dharampeth, Sadar, Wardha Road, and Kamptee. Order before 3 PM. Midnight delivery is available for central and west Nagpur." },
      { question: "What plant gift works for Ganesh Chaturthi in Nagpur?", answer: "Nagpur celebrates Ganesh Chaturthi with great enthusiasm, and tulsi plants, hibiscus, and marigold are the most appropriate plant gifts. A money plant or lucky bamboo in a decorative pot is a popular modern choice. For corporate gifting during the festival season, a snake plant or areca palm in a premium planter is impressive and practical." },
      { question: "Can I grow oranges (santra) in a pot in Nagpur?", answer: "Yes — dwarf citrus varieties, including Nagpur orange (Citrus reticulata), can be grown in large pots on terraces. They need full sun (6+ hours daily), well-draining soil, and monthly fertilising during growing season. Avoid waterlogging. Potted santra plants take 2-3 years to first fruit but are rewarding long-term. We occasionally stock dwarf citrus — check availability at order time." },
      { question: "Which indoor plant needs the least care for Nagpur's busy residents?", answer: "ZZ plant is Nagpur's best low-care option — it tolerates weeks without water, thrives in AC rooms with low light, and survives the summer heat if kept indoors. Snake plant is close behind. Both are ideal for busy professionals who travel frequently or work long hours during Nagpur's corporate calendar." }
    ]
  },

  "pune": {
    cityName: "Pune",
    metaTitle: "Buy Plants Online in Pune | Indoor, Succulents & Outdoor Plants | RedHeart",
    metaDescription: "Order plants online in Pune with same-day delivery. Indoor plants, succulents, monstera, flowering plants & gifting combos. Starting ₹299. Oxford of the East goes green.",
    h1: "Buy Plants Online in Pune — Same-Day Plant Delivery Across the City",
    metaKeyword: "plants online pune, buy plants pune, indoor plants pune, plant delivery pune, succulents pune, online nursery pune maharashtra, monstera pune bougainvillea",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Pune — Maharashtra's Cultural Capital Gets Doorstep Greens</h2>

<p>Pune is Bangalore's closest rival in the "best Indian city to live in" conversation — and for good reason. The "Oxford of the East" boasts prestigious universities, a massive IT and manufacturing economy (Hinjewadi, Kharadi, Magarpatta City), pleasant weather, and a cosmopolitan culture shaped by the Maratha heritage, the Deccan College's academic tradition, and waves of migration from across India. Pune's climate — the most frequently cited advantage — is genuinely excellent: at 560 metres elevation on the Deccan plateau, it avoids the coastal humidity of Mumbai while being far cooler than Nagpur or Hyderabad in summer.</p>

<p>Pune's climate peaks at around 38–40°C in May (cooler than most Indian metros), receives 720 mm of monsoon rain, and drops to a pleasant 10–15°C in January nights. This temperate range makes Pune one of the best cities in Maharashtra for growing plants — both outdoor and indoor. RedHeart delivers across Pune — Koregaon Park to Hadapsar, Baner to Kothrud, Hinjewadi to Magarpatta — with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Most Popular Plants in Pune</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Why Pune Loves It</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Monstera Deliciosa</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Statement plant, Pune's #1 indoor</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹799</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bedroom, very low care</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Succulents</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Desk, gifting, Pune's dry air suits them</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bougainvillea</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Terrace, compound wall, vibrant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, low light, gifting</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Every home, trailing</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Fiddle Leaf Fig</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Premium homes, Koregaon Park</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹1,299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Rose Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Garden, balcony, winter bloom</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Medium</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Pune's Plant Culture — Students, Startups, and Maratha Heritage</h3>

<p>Pune has three distinct plant audiences, each with different needs. The student community — spread across Fergusson College, Symbiosis, MIT and COEP campuses — favours compact desk plants: succulents, snake plant, and lucky bamboo that fit into hostel rooms and PGs. The tech professional community in Hinjewadi, Baner, and Wakad has embraced the indoor plant lifestyle enthusiastically — monstera, fiddle leaf fig, and areca palms feature in Pune Instagram feeds as commonly as Koregaon Park cafes. And the traditional Marathi families of Peth areas value tulsi, hibiscus, and mogra for their sacred and aromatic significance.</p>

<p>Ganesh Chaturthi is Pune's biggest festival — the Kasba Ganpati and Tambdi Jogeshwari processions are among India's most spectacular. During this period, marigold, shevanti (chrysanthemum), and other flowers are in massive demand. Potted versions of these plants make meaningful gifting choices in the Puja season.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Pune</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central / East Pune</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Koregaon Park, Kalyani Nagar, Hadapsar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">West Pune</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Baner, Balewadi, Hinjewadi, Wakad</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">South / Old Pune</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Kothrud, Deccan, Camp, Peth areas</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Pimpri-Chinchwad / Talegaon</td><td style="border:1px solid #d1d5db;padding:8px 12px;">PCMC area, Talegaon, Chakan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants grow best in Pune's climate?", answer: "Monstera, bougainvillea, snake plant, succulents, rose, and peace lily all thrive in Pune's pleasant 10–38°C range. Pune's relatively low humidity compared to Mumbai means succulents don't rot, and the mild winters let tropical plants stay outdoors longer than in north India. Bougainvillea is particularly spectacular on Pune's west-facing terraces." },
      { question: "Is same-day plant delivery available in Hinjewadi and Baner?", answer: "Yes. Same-day delivery is available across Hinjewadi, Baner, Wakad, Balewadi, Koregaon Park, and all major Pune areas. Order before 3 PM. Midnight delivery is also available across Pune. We regularly deliver to IT offices and residential societies in the western Pune tech corridor." },
      { question: "What plant is a good farewell gift for a Pune IT colleague?", answer: "A succulent trio in a modern concrete planter is the most popular farewell plant gift in Pune's IT culture — compact, stylish, and easy to carry. A small monstera in a ceramic pot is perfect for someone getting a bigger office or moving to a new home. Lucky bamboo is a safe, universally liked choice for any professional occasion." },
      { question: "Can I grow succulents outdoors in Pune?", answer: "Yes — Pune's relatively low humidity and moderate temperatures make it one of Maharashtra's best cities for outdoor succulents. Place them in full morning sun with afternoon shade. Use gritty, well-draining soil. During monsoon, move them under a covered area or shelter — constant rain can waterlog and rot succulents even in Pune's moderate rainfall." },
      { question: "Do you deliver plants to Pimpri-Chinchwad and Chakan?", answer: "Yes. Pimpri-Chinchwad (PCMC), Talegaon, and Chakan are within our delivery zone from Pune. Delivery takes 3–5 hours. Same-day delivery is available for orders placed before 1 PM for these areas. The manufacturing belt in PCMC has good corporate gifting demand for office plants." }
    ]
  },

  "surat": {
    cityName: "Surat",
    metaTitle: "Buy Plants Online in Surat | Indoor & Gifting Plants | RedHeart",
    metaDescription: "Order plants online in Surat. Indoor plants, succulents, money plant & gifting combos. Same-day delivery across Surat. Starting ₹299. Diamond City gets fresh plant delivery.",
    h1: "Buy Plants Online in Surat — Same-Day Plant Delivery in Gujarat's Diamond City",
    metaKeyword: "plants online surat, buy plants surat, indoor plants surat, plant delivery surat gujarat, money plant surat, online nursery surat diamond city",
    footerContent: `
<h2 style="font-size:1.3em;font-weight:700;margin:0 0 1rem;line-height:1.4;">Plants Online in Surat — Where Diamond Polish and Green Decor Shine Together</h2>

<p>Surat is Gujarat's economic powerhouse — the city processes 90% of the world's rough diamonds and is a major centre for textiles, petrochemicals, and trading. Yet for all its industrial might, Surat is also a city with a deeply ingrained culture of beauty and festivity. The Surti love of Diwali, Navratri, and the colourful Uttarayan kite festival is well documented; so is the Surti passion for good food, home décor, and increasingly, indoor plants. The city's prosperous business community has driven significant demand for premium plant gifting — particularly for Diwali, where decorative money plant pots and jade plant arrangements are popular alongside traditional sweets and dry fruits.</p>

<p>Surat's climate is coastal Gujarat — hot and humid from April to September (temperatures reaching 38–40°C with high humidity from the Gulf of Khambhat), and pleasantly warm in winter (15–30°C). This semi-tropical coastal climate suits a wide range of plants. RedHeart delivers across Surat city, Bharuch, Ankleshwar, and Navsari with same-day service for orders before 3 PM.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Popular Plants for Surat Homes</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Plant</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Best Use</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Price From</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Care</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Money Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor, gifting, auspicious</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Jade Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Diwali gift, friendship tree</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Snake Plant</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Office, bedroom, air purifier</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹349</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Lucky Bamboo</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Business gifting, new office</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹399</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Peace Lily</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Indoor gifting, low light</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹499</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Tulsi</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Courtyard, daily pooja</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹299</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Areca Palm</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Living room, diamond office lobby</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹699</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Anthurium</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Gifting, indoor tropical blooms</td><td style="border:1px solid #d1d5db;padding:8px 12px;">₹599</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Easy</td></tr>
  </tbody>
</table>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Plant Gifting in Surat's Business Culture</h3>

<p>Surat's Jain and Hindu business community places strong emphasis on auspicious gifting. Jade plant (called "money tree" or "friendship tree") is particularly popular as a Diwali and Labh Pancham gift — both occasions when business communities restart operations after a festival break and exchange prosperity-symbolising gifts. A jade plant in a terracotta or ceramic pot, gifted on Labh Pancham, is considered an excellent way to start the new business year. Lucky bamboo in tiered arrangements — 3, 5, or 7-layer — is popular for office inaugurations across Surat's busy business district.</p>

<p>Surat's diamond polishing units, textile mills, and trading offices form a substantial corporate gifting market. We supply bulk plant orders for corporate Diwali gifting, New Year gifting, and event gifting across Surat's business community with advance notice. Custom arrangements with branded pots or personalised message cards are available.</p>

<h3 style="font-size:1.1em;font-weight:600;margin:1.5rem 0 0.6rem;">Delivery Coverage in Surat</h3>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin:1rem 0;">
  <thead>
    <tr style="background:#f3f4f6;">
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Zone</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Key Areas</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Delivery</th>
      <th style="border:1px solid #d1d5db;padding:9px 12px;text-align:left;">Same-Day</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Central Surat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Nanpura, Athwa Lines, Ring Road</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">New Surat</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Vesu, Althan, Pal, Adajan</td><td style="border:1px solid #d1d5db;padding:8px 12px;">2–4 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr><td style="border:1px solid #d1d5db;padding:8px 12px;">Diamond Zone</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Varachha, Katargam, Udhna</td><td style="border:1px solid #d1d5db;padding:8px 12px;">3–5 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
    <tr style="background:#fafafa;"><td style="border:1px solid #d1d5db;padding:8px 12px;">Bharuch / Ankleshwar</td><td style="border:1px solid #d1d5db;padding:8px 12px;">Bharuch, Ankleshwar towns</td><td style="border:1px solid #d1d5db;padding:8px 12px;">4–6 hrs</td><td style="border:1px solid #d1d5db;padding:8px 12px;">✓</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Which plants are best as Diwali gifts for Surat's business community?", answer: "Money plant and jade plant (friendship tree) are the most auspicious Diwali gifts for Surat's business community — both symbolise prosperity and financial growth. Lucky bamboo in a 3 or 7-layer arrangement is also popular. For premium corporate Diwali gifting, a peace lily or anthurium in a branded ceramic planter with a personalised card is impressive." },
      { question: "Is same-day plant delivery available in Vesu and Adajan, Surat?", answer: "Yes. Same-day delivery is available across Vesu, Adajan, Althan, Pal, Nanpura, and all major Surat areas. Order before 3 PM for same-day delivery. Midnight delivery is also available for central and new Surat areas." },
      { question: "Which plant is best for a Labh Pancham gift in Surat?", answer: "Jade plant is the top Labh Pancham gift in Surat — it's called the 'money tree' or 'friendship tree' and is considered auspicious for new business beginnings. Lucky bamboo (7 or 9 stalks for maximum prosperity symbolism) is a close second. Money plant in a decorative pot is a reliable and affordable choice for large-volume business gifting on Labh Pancham." },
      { question: "Which indoor plant is best for a diamond trading office in Varachha?", answer: "Areca palm and snake plant are the top choices for diamond trading offices in Varachha and Katargam — they look professional, improve air quality, and survive long hours in AC environments. ZZ plant is excellent for offices where care is minimal. Lucky bamboo on a reception desk adds a prosperity symbol without taking up much space." },
      { question: "How do I care for a jade plant in Surat's humid climate?", answer: "Jade plant prefers well-draining soil and a pot with good drainage holes. In Surat's humid monsoon months, water only when the top 2 inches of soil are completely dry — weekly or less. During winter, water once every 10 days. Place in a bright spot with 4+ hours of indirect light. Jade is surprisingly heat-tolerant and handles Surat's summers if kept away from direct afternoon sun." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/plants-online/${slug}`;
    const payload = {
      category: "Plants",
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
        { label: "Plants", url: "/plants-online" },
        { label: `Buy Plants Online in ${data.cityName}`, url: cityUrl },
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
