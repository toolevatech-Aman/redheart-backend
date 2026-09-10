// Cakes Batch 6 — 15 cities:
// Imphal, Shillong, Aizawl, Agartala, Kohima (Northeast)
// Nellore, Kakinada (AP)
// Nanded, Amravati (Maharashtra)
// Sikar (Rajasthan)
// Moradabad (UP)
// Faridabad (Haryana)
// Jamshedpur, Dhanbad (Jharkhand)
// Shivamogga (Karnataka)

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "imphal": {
    cityName: "Imphal",
    metaTitle: "Cake Delivery in Imphal | Manipur Capital | RedHeart",
    metaDescription: "Order cakes online in Imphal. Same-day delivery across Imphal. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Imphal",
    metaKeyword: "cake delivery imphal, order cake online imphal, birthday cake imphal, custom cake imphal, same day cake delivery imphal paona bazaar thangal bazaar singjamei babupara",
    footerContent: `
<h2>Cake Delivery in Imphal — Manipur's Capital, Polo's Birthplace, and Ima Keithel Market Celebrations</h2>
<p>Imphal — the capital of Manipur, the "Polo Capital of the World" (polo was invented in Manipur — the Manipuri game of Sagol Kangjei is the oldest form of polo on earth, with Imphal's Mapal Kangjeibung being the world's oldest polo ground), home to the remarkable Ima Keithel market (Manipuri for "Mothers' Market" — the world's largest all-women market, run entirely by women since the 16th century), and a city at the heart of Manipur's unique cultural identity — is a city where celebrations are as vibrant as the Ras Lila dance and Yaosang festival. From birthday parties in the residential Babupara to corporate cakes at the Industrial Growth Centre, from Cheiraoba New Year cakes (Manipuri New Year in April) to anniversary surprises near the Kangla Fort — RedHeart covers all Imphal zones: Central (Paona Bazar, Thangal Bazar, Kongba), North (Singjamei, Kakwa, Luwangsangbam), South (Babupara, Lamphel, Uripok), East (Sagolband, Lilong, Tera Khong), West (Airport Road, Nambol, Bishnupur junction).</p>
<p>Our Imphal cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Polo-theme and Ras Lila-inspired cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Imphal, Manipur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Paona Bazar, Thangal Bazar, Babupara, Singjamei, Lamphel, Airport Road, Sagolband</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Polo-theme Fondant, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Imphal?", answer: "Yes, same-day cake delivery is available across all Imphal areas — Paona Bazar, Thangal Bazar, Babupara, and Lamphel — for orders placed before 3 PM." },
      { question: "Are Cheiraoba (Manipuri New Year) celebration cakes available in Imphal?", answer: "Yes, Cheiraoba is Manipur's New Year and one of the biggest celebrations in Imphal. Festive and custom cakes for Cheiraoba are available for same-day delivery." },
      { question: "Are eggless cakes available in Imphal?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Imphal delivery." }
    ]
  },

  "shillong": {
    cityName: "Shillong",
    metaTitle: "Cake Delivery in Shillong | Scotland of East Meghalaya | RedHeart",
    metaDescription: "Order cakes online in Shillong. Same-day delivery across Shillong. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Shillong",
    metaKeyword: "cake delivery shillong, order cake online shillong, birthday cake shillong, custom cake shillong, same day cake delivery shillong laitumkhrah police bazar mawlai nongthymmai",
    footerContent: `
<h2>Cake Delivery in Shillong — Scotland of the East, Cherry Blossom Capital, and Meghalaya's Living Root Bridge City</h2>
<p>Shillong — the capital of Meghalaya, the "Scotland of the East" (the Khasi Hills resemble the Scottish Highlands in their rolling green moors, misty peaks, and cool climate), one of India's most musical cities (Shillong has produced a disproportionate number of India's best rock and jazz musicians — the city is often called the "Rock Capital of India"), and the base for exploring Meghalaya's extraordinary natural wonders (Cherrapunji/Sohra, the living root bridges of Nongriat, Dawki's transparent river) — is a city of cool weather, warm people, and a distinctly cosmopolitan Northeast culture. From birthday parties in the chic Laitumkhrah cafés to corporate cakes at the Shillong Technology Park, from anniversary surprises at heritage bungalows near Ward's Lake to student birthdays near NEHU (North Eastern Hill University) — RedHeart covers all Shillong zones: Central (Police Bazar, Laban, Oakland), East (Laitumkhrah, Mawlai, Nongthymmai), North (Malki, Rilbong, Nongkynmaw), South (Rynjah, Mawprem, Laitkor), West (Nongshilliang, Umpling, Byrnihat).</p>
<p>Our Shillong cake range: Chocolate, Black Forest, Red Velvet, Strawberry (Meghalaya strawberries!), Butterscotch, Photo Cakes, Fondant Rock-music and Living Root Bridge theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shillong, Meghalaya</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Police Bazar, Laitumkhrah, Mawlai, Nongthymmai, Malki, Rynjah, Laban</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Strawberry, Chocolate, Photo Cake, Black Forest, Rock-music Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Meghalaya strawberry cakes in Shillong?", answer: "Yes! Meghalaya's famous hill strawberries — sweet, plump, and fragrant — form the base of our Shillong Strawberry Cream cake, a local favourite available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Shillong?", answer: "Yes, same-day cake delivery is available across all Shillong areas — Police Bazar, Laitumkhrah, Mawlai, and Nongthymmai — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Shillong?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Strawberry — are available in eggless variants for Shillong delivery." }
    ]
  },

  "aizawl": {
    cityName: "Aizawl",
    metaTitle: "Cake Delivery in Aizawl | Mizoram Capital | RedHeart",
    metaDescription: "Order cakes online in Aizawl. Same-day delivery across Aizawl. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Aizawl",
    metaKeyword: "cake delivery aizawl, order cake online aizawl, birthday cake aizawl, custom cake aizawl, same day cake delivery aizawl zarkawt bawngkawn republic veng chanmari dawrpui",
    footerContent: `
<h2>Cake Delivery in Aizawl — Mizoram's Hilltop Capital, Chapchar Kut Festival City, and Northeast's Most Educated State</h2>
<p>Aizawl — the capital of Mizoram, a dramatic hilltop city perched on a ridge at 1,132 metres with houses stacked along steep hillsides (no flat land!), home to the vibrant Chapchar Kut spring festival (Mizoram's biggest festival, celebrating the arrival of spring with traditional music, dance, and bamboo dancing), and the capital of India's most literate state (Mizoram has 91%+ literacy — the highest in Northeast India) — is a city of warm Mizo hospitality and a uniquely Western-influenced Christian culture (over 87% Christian, mostly Presbyterian and Baptist). From birthday parties in the residential Zarkawt colony to corporate cakes at the government offices, from Chapchar Kut celebration cakes to Christmas and New Year cakes (celebrated with exceptional enthusiasm) — RedHeart covers all Aizawl zones: Central (Bawngkawn, Dawrpui, Zarkawt), North (Republic Veng, Chanmari, Khatla), South (Durtlang, Ramhlun, Sakawrtuichhun), East (Lunglei Road, Sikulpuikawn), West (Falkawn, Chite, Chawnpui).</p>
<p>Our Aizawl cake range: Chocolate, Black Forest, Red Velvet, Strawberry, Bamboo-shoot inspired (unique Mizo theme!), Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aizawl, Mizoram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Zarkawt, Bawngkawn, Dawrpui, Republic Veng, Chanmari, Khatla, Durtlang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Black Forest, Red Velvet, Strawberry, Chapchar Kut Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Aizawl?", answer: "Yes, same-day cake delivery is available across all Aizawl areas — Zarkawt, Bawngkawn, Dawrpui, and Chanmari — for orders placed before 3 PM." },
      { question: "Are Christmas and New Year cakes available in Aizawl?", answer: "Yes! Christmas is Aizawl's biggest celebration — custom Christmas tree, Santa Claus, and festive fondant cakes are available for same-day and pre-order delivery in Aizawl." },
      { question: "Are eggless cakes available in Aizawl?", answer: "Yes, eggless versions of all flavours — Chocolate, Black Forest, Red Velvet, Strawberry — are available for Aizawl delivery." }
    ]
  },

  "agartala": {
    cityName: "Agartala",
    metaTitle: "Cake Delivery in Agartala | Tripura Capital | RedHeart",
    metaDescription: "Order cakes online in Agartala. Same-day delivery across Agartala. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Agartala",
    metaKeyword: "cake delivery agartala, order cake online agartala, birthday cake agartala, custom cake agartala, same day cake delivery agartala krishnanagar battala ramnagar ujjayanta palace",
    footerContent: `
<h2>Cake Delivery in Agartala — Tripura's Royal Capital, Ujjayanta Palace, and Bangladesh Border City Celebrations</h2>
<p>Agartala — the capital of Tripura and one of the few Indian state capitals on an international border (Agartala is just 2 km from Bangladesh — the Agartala-Akhaura Integrated Check Post is India's busiest land port with Bangladesh), home to the magnificent Ujjayanta Palace (the late-19th century Maharaja's palace — now a museum — with Mughal and European architectural fusion), and a city where Bengali and Tripuri cultures blend warmly — is a city of royalty, crossborder commerce, and warm community celebrations. From birthday parties in the leafy Krishnanagar residential area to corporate cakes at the Agartala Special Economic Zone, from Kharchi Puja celebration cakes (Tripura's 14-deity tribal festival) to anniversary surprises near the Maharaja's palace — RedHeart covers all Agartala zones: Central (Battala, Palace Compound, Ujjayanta area), North (Krishnanagar, Sidhi Ashram, AG Office area), South (Ramnagar, Barjala, Badharghat), East (Amtali, Bishalgarh Road), West (Motor Stand area, Bordobazar).</p>
<p>Our Agartala cake range: Chocolate, Black Forest, Red Velvet, Mango (Langra/Himsagar!), Butterscotch, Photo Cakes, Fondant Palace-theme and Kharchi Puja-inspired cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Agartala, Tripura</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Krishnanagar, Battala, Ramnagar, Ujjayanta Palace area, Badharghat, AG Office area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango (Himsagar), Photo Cake, Ujjayanta Palace Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Agartala?", answer: "Yes, same-day cake delivery is available across all Agartala areas — Krishnanagar, Battala, Ramnagar, and the Ujjayanta Palace area — for orders placed before 3 PM." },
      { question: "Are Durga Puja and Kharchi Puja celebration cakes available in Agartala?", answer: "Yes, Agartala celebrates Durga Puja and Tripura's unique Kharchi Puja with great enthusiasm. Custom festive fondant cakes are available for both celebrations." },
      { question: "Are eggless cakes available in Agartala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Agartala delivery." }
    ]
  },

  "kohima": {
    cityName: "Kohima",
    metaTitle: "Cake Delivery in Kohima | Nagaland Capital | RedHeart",
    metaDescription: "Order cakes online in Kohima. Same-day delivery across Kohima. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Kohima",
    metaKeyword: "cake delivery kohima, order cake online kohima, birthday cake kohima, custom cake kohima, same day cake delivery kohima razhu town kohima village naga bazaar high school",
    footerContent: `
<h2>Cake Delivery in Kohima — Nagaland's Hornbill Festival City and WWII Memorial Capital</h2>
<p>Kohima — the capital of Nagaland, site of one of WWII's most decisive battles (the Battle of Kohima 1944 — where Allied forces halted the Japanese advance into India in a desperate two-week battle at the Deputy Commissioner's tennis court, commemorated by the moving Kohima Epitaph: "When You Go Home, Tell Them of Us and Say, For Their Tomorrow, We Gave Our Today"), home to the spectacular Hornbill Festival (India's biggest cultural festival — 10 days in December, showcasing 17 Naga tribes' music, dance, and culture), and a city of remarkable cultural pride — is a city where celebrations are as vibrant as its festival culture. From birthday parties in the residential Razhu Town to corporate cakes at the growing IT sector, from Hornbill Festival celebration cakes to Christmas cakes (celebrated with exceptional fervour across Nagaland's 90% Christian population) — RedHeart covers all Kohima zones: Central (Kohima Village, Traffic Point, NST Junction), North (Naga Bazaar, High School area, Governor's Camp), South (Razhu Town, PWD Colony, Midland Colony), East (Zubza, Signal Point), West (Merima, Kesepur, Jotsoma).</p>
<p>Our Kohima cake range: Chocolate, Black Forest, Red Velvet, Strawberry, Butterscotch, Photo Cakes, Fondant Hornbill-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kohima, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Razhu Town, Naga Bazaar, Traffic Point, High School area, PWD Colony, Midland Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Hornbill Festival Fondant, Black Forest, Red Velvet, Photo Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kohima?", answer: "Yes, same-day cake delivery is available across all Kohima areas — Razhu Town, Naga Bazaar, Traffic Point, and High School area — for orders placed before 3 PM." },
      { question: "Are Hornbill Festival celebration cakes available in Kohima?", answer: "Yes! Hornbill Festival (December) is Nagaland's biggest event — custom cakes with the iconic hornbill bird theme and Naga tribal art fondant designs are available." },
      { question: "Are eggless cakes available in Kohima?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Strawberry — are available in eggless variants for Kohima delivery." }
    ]
  },

  "nellore": {
    cityName: "Nellore",
    metaTitle: "Cake Delivery in Nellore | Prawn Capital AP | RedHeart",
    metaDescription: "Order cakes online in Nellore. Same-day delivery across Nellore. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Nellore",
    metaKeyword: "cake delivery nellore, order cake online nellore, birthday cake nellore, custom cake nellore, same day cake delivery nellore rajiv nagar brundavan nagar pogathota magunta layout",
    footerContent: `
<h2>Cake Delivery in Nellore — Prawn Capital of India and Pennar River Delta's Aquaculture Hub</h2>
<p>Nellore — Andhra Pradesh's 4th-largest city, the "Prawn Capital of India" (Nellore's Penna River delta and its vast brackish water zones produce a significant share of India's aquaculture exports — the famous Nellore prawn curry is a Telugu cuisine icon), and a city of robust trade and an aspirational middle class — is where celebrations are as hearty as Nellore's legendary spice-laden cuisine. From birthday parties in the upscale Rajiv Nagar to corporate cakes at the growing APIIC zone, from anniversary surprises in the lush Brundavan Nagar to student birthdays near VRSEC (Vignan's Engineering College) — RedHeart covers all Nellore zones: Central (Magunta Layout, Grand Trunk Road, SPSR Nellore Station), North (Brundavan Nagar, Pogathota, Santapet), South (Rajiv Nagar, Balaji Nagar, Allipuram), East (Dargamitta, Vedayapalem), West (APIIC, Mambalapalem, Kanupuru).</p>
<p>Our Nellore cake range: Chocolate, Black Forest, Butterscotch, Mango (Banganapalle!), Red Velvet, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nellore, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajiv Nagar, Magunta Layout, Brundavan Nagar, Pogathota, Balaji Nagar, Dargamitta</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Mango (Banganapalle), Photo Cake, Butterscotch, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nellore?", answer: "Yes, same-day cake delivery is available across all Nellore areas — Rajiv Nagar, Magunta Layout, Brundavan Nagar, and Pogathota — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nellore?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet, Mango — are available in eggless variants for Nellore delivery." },
      { question: "Do you deliver midnight cakes in Nellore?", answer: "Yes, midnight birthday cake delivery is available across Nellore's central and residential zones." }
    ]
  },

  "kakinada": {
    cityName: "Kakinada",
    metaTitle: "Cake Delivery in Kakinada | Andhra Pradesh | RedHeart",
    metaDescription: "Order cakes online in Kakinada. Same-day delivery across Kakinada. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Kakinada",
    metaKeyword: "cake delivery kakinada, order cake online kakinada, birthday cake kakinada, custom cake kakinada, same day cake delivery kakinada jagannaickpur gandhinagar godavari bund suryaraopet",
    footerContent: `
<h2>Cake Delivery in Kakinada — Godavari Delta's Petroleum City and Kakinada Kaaja's Sweet Legacy</h2>
<p>Kakinada — Andhra Pradesh's 5th-largest city on the Godavari delta, a petroleum and natural gas hub (ONGC operates major offshore installations near Kakinada), gateway to the Konaseema islands (the "Andhra's Kashmir" — a network of river islands with coconut groves and backwater canals), and known across Andhra for Kakinada Kaaja (the iconic cylindrical, flaky, sugary sweet — a GI-tagged delicacy that defines Kakinada's food identity) — is a city of oil wealth and sweet traditions. From birthday parties in the leafy Jagannaickpur residential area to corporate cakes at the ONGC colony, from anniversary surprises in the Gandhinagar neighbourhood to student birthdays near JNTUK (Jawaharlal Nehru Technological University Kakinada) — RedHeart covers all Kakinada zones: Central (Main Road, Suryaraopet, Bhanugudi Junction), North (Jagannaickpur, ONGC Colony, Pithapuram Road), South (Gandhinagar, Rajahmundry Road, Godavari Bund), East (Beach Road, Peddapuram Road), West (Kakinada Port area, JNTUK campus).</p>
<p>Our Kakinada cake range: Chocolate, Black Forest, Butterscotch, Mango (Banganapalle!), Red Velvet, Photo Cakes, Kaaja-inspired Fondant cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kakinada, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jagannaickpur, Gandhinagar, Suryaraopet, Godavari Bund, ONGC Colony, JNTUK area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaaja-inspired Fondant, Chocolate, Mango, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kakinada?", answer: "Yes, same-day cake delivery is available across all Kakinada areas — Jagannaickpur, Gandhinagar, Suryaraopet, and ONGC Colony — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Kakinada?", answer: "Yes, all flavours — Chocolate, Black Forest, Butterscotch, Red Velvet, Mango — are available in eggless variants for Kakinada delivery." },
      { question: "Do you deliver cakes to JNTUK campus in Kakinada?", answer: "Yes, Jawaharlal Nehru Technological University Kakinada (JNTUK) campus area and the port township are covered by our same-day delivery." }
    ]
  },

  "nanded": {
    cityName: "Nanded",
    metaTitle: "Cake Delivery in Nanded | Sikh Holy City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Nanded. Same-day delivery across Nanded. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Nanded",
    metaKeyword: "cake delivery nanded, order cake online nanded, birthday cake nanded, custom cake nanded, same day cake delivery nanded hazur sahib gurudwara shivaji nagar vasant nagar cidco",
    footerContent: `
<h2>Cake Delivery in Nanded — Hazur Sahib's Sacred Sikh Takht and Maharashtra's Spiritual Crossroads</h2>
<p>Nanded — Maharashtra's eastern city on the Godavari River, home to the Hazur Sahib Gurdwara (Sachkhand Sri Hazur Abchalnagar Sahib — one of the Panch Takhts, the five holiest seats of Sikh religious authority in the world, where Guru Gobind Singh Ji departed from this earth in 1708), a city of immense religious significance for Sikhs globally, and a growing industrial city — is a place where the glow of Akhand Jyot in Hazur Sahib's sanctum illuminates the entire city's spirit. From birthday parties in the modern CIDCO colony to corporate cakes at the Nanded Waghala MIDC, from Gurpurab celebration cakes (Guru Nanak Gurpurab is celebrated with Nagar Kirtans and illuminations on a massive scale in Nanded) to anniversary surprises in the Vasant Nagar area — RedHeart covers all Nanded zones: Central (Old Nanded, Gurudwara Road, Main Chowk), North (Shivaji Nagar, Guru Nanak Nagar), South (Vasant Nagar, Cidco, Waghala), East (MIDC, Ardhapur Road), West (Kandhar Road, Mudkhed, Loha Road).</p>
<p>Our Nanded cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nanded, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">CIDCO, Shivaji Nagar, Vasant Nagar, Gurudwara Road, Waghala MIDC, Guru Nanak Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nanded?", answer: "Yes, same-day cake delivery is available across all Nanded areas — CIDCO, Shivaji Nagar, Vasant Nagar, and Gurudwara Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nanded?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nanded delivery." },
      { question: "Are Gurpurab celebration cakes available in Nanded?", answer: "Yes, Gurpurab is one of Nanded's biggest celebrations. Festive celebration cakes for Guru Nanak Gurpurab and Guru Gobind Singh Gurpurab are available in Nanded." }
    ]
  },

  "amravati": {
    cityName: "Amravati",
    metaTitle: "Cake Delivery in Amravati | Tapovan City Maharashtra | RedHeart",
    metaDescription: "Order cakes online in Amravati. Same-day delivery across Amravati. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Amravati",
    metaKeyword: "cake delivery amravati, order cake online amravati, birthday cake amravati, custom cake amravati, same day cake delivery amravati rajapeth camp area irwin square tapovan",
    footerContent: `
<h2>Cake Delivery in Amravati — Tapovan City, Ambadevi Temple, and Vidarbha's Cotton Country Celebrations</h2>
<p>Amravati — Vidarbha's commercial hub (Maharashtra's northeastern Vidarbha region), a city of approximately 750,000 on the Supen River, home to the ancient Ambadevi Temple (one of the 51 Shakti Peethas — a major pilgrimage site, central to Amravati's name and identity), the Tapovan (where the sage Dattatreya is said to have meditated), and a large cotton and orange trading centre (the Vidarbha oranges — the same Nagpur Orange family — are prized) — is a city of deep Maharashtrian traditions. From birthday parties in the upscale Rajapeth residential area to corporate cakes at the MIDC area, from Nagpanchami and Ganesh festival cakes (celebrated with great fervour in Amravati's Maharashtrian mohallas) to anniversary surprises near the Ambadevi Temple — RedHeart covers all Amravati zones: Central (Irwin Square, Rajkamal Chowk, Gandhi Chowk), North (Rajapeth, Morshi Road, Tapovan Road), South (Camp area, Vaishali Nagar, MIDC), East (Bhankheda, Shegaon Road), West (Badnera Junction, Paratwada Road).</p>
<p>Our Amravati cake range: Chocolate, Black Forest, Red Velvet, Orange (Vidarbha special!), Mango, Photo Cakes, Fondant Ambadevi-inspired cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amravati, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajapeth, Irwin Square, Camp area, Vaishali Nagar, MIDC, Tapovan Road, Morshi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vidarbha Orange, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Vidarbha Orange cakes in Amravati?", answer: "Yes! Like Nagpur's famous orange cake, Amravati's Vidarbha Orange cream cake is a regional speciality — available for same-day delivery in Amravati." },
      { question: "Can I get same-day cake delivery in Amravati?", answer: "Yes, same-day cake delivery is available across all Amravati areas — Rajapeth, Irwin Square, Camp area, and MIDC — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Amravati?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Amravati delivery." }
    ]
  },

  "sikar": {
    cityName: "Sikar",
    metaTitle: "Cake Delivery in Sikar | Shekhawati Rajasthan | RedHeart",
    metaDescription: "Order cakes online in Sikar. Same-day delivery across Sikar. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Sikar",
    metaKeyword: "cake delivery sikar, order cake online sikar, birthday cake sikar, custom cake sikar, same day cake delivery sikar purani abadi nehru colony powerwali gali bajaj colony",
    footerContent: `
<h2>Cake Delivery in Sikar — Shekhawati's Fresco-Painted Haveli Town and JEE's Shekhawati Belt</h2>
<p>Sikar — the capital of the Sikar district in the Shekhawati region (Rajasthan's northwestern zone), a city famed for its ornate painted havelis (Shekhawati's merchants — the Marwari businessmen — covered their mansions with exquisite murals of folk stories, gods, and scenes of daily life, making Shekhawati an "open-air art gallery"), and the commercial and educational centre of north Rajasthan (with a booming coaching industry for IIT/JEE and NEET aspirants, second only to Kota in Rajasthan) — is a city of rich visual heritage and a burgeoning young population. From birthday parties in the residential Bajaj Colony to corporate cakes at the Sikar industrial estate, from Teej and Gangaur festival cakes to anniversary surprises in Nehru Colony — RedHeart covers all Sikar zones: Central (Purani Abadi, Bansiwale Mandir area, Station Road), North (Bajaj Colony, Nehru Colony, Police Line), South (Fatehpur Shekhawati Road, Ringas Road), East (Khandela Road, Reengus), West (Laxmangarh Road, Neem ka Thana Road).</p>
<p>Our Sikar cake range: Chocolate, Black Forest, Red Velvet, Kesar-Malai, Mango, Photo Cakes, Fondant Haveli-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sikar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bajaj Colony, Nehru Colony, Purani Abadi, Station Road, Police Line, Ringas Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Malai, Chocolate, Photo Cake, Shekhawati Haveli Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Sikar?", answer: "Yes, same-day cake delivery is available across all Sikar areas — Bajaj Colony, Nehru Colony, Purani Abadi, and Station Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Sikar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Sikar delivery." },
      { question: "Do you make Shekhawati Haveli-theme cakes in Sikar?", answer: "Yes, custom fondant cakes inspired by Shekhawati's famous painted havelis and Rajasthani folk art are a unique Sikar specialty." }
    ]
  },

  "moradabad": {
    cityName: "Moradabad",
    metaTitle: "Cake Delivery in Moradabad | Brass City UP | RedHeart",
    metaDescription: "Order cakes online in Moradabad. Same-day delivery across Moradabad. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Moradabad",
    metaKeyword: "cake delivery moradabad, order cake online moradabad, birthday cake moradabad, custom cake moradabad, same day cake delivery moradabad civil lines rampur road civil lines buddhipuram",
    footerContent: `
<h2>Cake Delivery in Moradabad — Brass City of India and the World's Largest Brassware Export Hub</h2>
<p>Moradabad — western Uttar Pradesh's major city, universally known as the "Brass City of India" (Moradabad's brassware artisans — the thateras — produce exquisite handcrafted brass utensils, decorative items, and export goods that account for a massive share of India's $6+ billion handicraft exports, with the GI-tagged craft going to 100+ countries), and a city on the Ramganga River with a significant industrial base — is a city of skilled craftsmen and proud artisanal heritage. From birthday parties in the leafy Civil Lines bungalows to corporate cakes at the large export houses, from anniversary surprises in the growing Rampur Road residential belt to student birthdays near MJP Rohilkhand University's Moradabad campus — RedHeart covers all Moradabad zones: Central (Civil Lines, Buddhipuram, Station Road), North (Pakbara, Majhola, Kanth Road), South (Katghar, DB Colony, Ram Ganga Vihar), East (Thakurdwara, Rampur Road, Delhi Road), West (Manglapur, Sambhal Road, Tanda Road).</p>
<p>Our Moradabad cake range: Chocolate, Black Forest, Red Velvet, Mango (Dussehri!), Butterscotch, Photo Cakes, Fondant Brass Art-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Moradabad, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Buddhipuram, Rampur Road, DB Colony, Pakbara, Katghar, Ram Ganga Vihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Mango (Dussehri), Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Moradabad?", answer: "Yes, same-day cake delivery is available across all Moradabad areas — Civil Lines, Buddhipuram, Rampur Road, and DB Colony — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Moradabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Moradabad delivery." },
      { question: "Do you deliver midnight cakes in Moradabad?", answer: "Yes, midnight birthday cake delivery is available across Moradabad's central and residential zones." }
    ]
  },

  "faridabad": {
    cityName: "Faridabad",
    metaTitle: "Cake Delivery in Faridabad | Haryana NCR | RedHeart",
    metaDescription: "Order cakes online in Faridabad. Same-day delivery across Faridabad. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Faridabad",
    metaKeyword: "cake delivery faridabad, order cake online faridabad, birthday cake faridabad, custom cake faridabad, same day cake delivery faridabad sector 15 21 nit old faridabad nhpc colony",
    footerContent: `
<h2>Cake Delivery in Faridabad — Haryana's Industrial Capital and NCR's Manufacturing Powerhouse</h2>
<p>Faridabad — Haryana's largest city and NCR's oldest industrial city (founded 1607 by Sheikh Farid, Baba Farid's disciple, to guard the Agra-Lahore Grand Trunk Road), India's largest manufacturing hub in Haryana (JCB manufactures India's largest share of construction equipment here; Honda motorcycles, Whirlpool appliances, Escorts tractors, and hundreds of auto-ancillary companies), and Surajkund's home (the annual Surajkund International Crafts Mela — Asia's largest crafts fair — is held at the iconic Surajkund reservoir) — is a city of industrial muscle and 1.8 million people. From birthday parties in the leafy NIT area to corporate cakes at the IMT Faridabad industrial township, from anniversary surprises in Sector 15 to student birthdays near J.C. Bose University — RedHeart covers all Faridabad zones: Central (Old Faridabad, NH 19, ESIC Colony), North (Sector 15, 21, 28, NIT), South (Ballabhgarh, Palwal Road, NHPC Colony), East (Surajkund, IMT Faridabad, Sector 65–75), West (Badarpur Border, Mathura Road, Mewat Road).</p>
<p>Our Faridabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Faridabad, Haryana (NCR)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">NIT, Sector 15 & 21, Ballabhgarh, NHPC Colony, Surajkund, IMT, Old Faridabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Pinata Cake</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Faridabad?", answer: "Yes, same-day cake delivery is available across all Faridabad areas — NIT, Sector 15, Ballabhgarh, NHPC Colony, and IMT — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to Ballabhgarh and Surajkund areas?", answer: "Yes, Ballabhgarh town, Surajkund, and the IMT Faridabad industrial township residential areas are all covered by our Faridabad delivery zone." },
      { question: "Are eggless cakes available in Faridabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Faridabad delivery." }
    ]
  },

  "jamshedpur": {
    cityName: "Jamshedpur",
    metaTitle: "Cake Delivery in Jamshedpur | Steel City Jharkhand | RedHeart",
    metaDescription: "Order cakes online in Jamshedpur. Same-day delivery across Jamshedpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Jamshedpur",
    metaKeyword: "cake delivery jamshedpur, order cake online jamshedpur, birthday cake jamshedpur, custom cake jamshedpur, same day cake delivery jamshedpur sakchi bistupur telco kadma",
    footerContent: `
<h2>Cake Delivery in Jamshedpur — Tata Steel City, India's First Planned Industrial Town</h2>
<p>Jamshedpur — Jharkhand's largest city, India's first planned industrial city (founded by Jamsetji Nusserwanji Tata in 1907 when TISCO — now Tata Steel — established the world's largest steel plant complex here), still fully managed by the Tata Group (Jamshedpur has no municipal corporation — Tata Steel's Jusco provides all civic services, making it arguably India's best-run city), and home to Tata Motors' largest passenger vehicle plant — is India's most unique city by governance and a source of immense civic pride. From birthday parties in the model Bistupur township to corporate cakes at the Tata Steel administrative offices, from anniversary surprises in the Telco (Tata Motors) colony to student birthdays near NIT Jamshedpur — RedHeart covers all Jamshedpur zones: Central (Bistupur, Sakchi, Main Road), North (Telco Colony, Boram, Gamharia), South (Kadma, Mango, Parsudih), East (Jugsalai, Golmuri, Baridih), West (Adityapur, Seraikela, Kandra).</p>
<p>Our Jamshedpur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Steel-City-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jamshedpur, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bistupur, Sakchi, Telco Colony, Kadma, Mango, Jugsalai, Adityapur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Steel City Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Jamshedpur?", answer: "Yes, same-day cake delivery is available across all Jamshedpur areas — Bistupur, Sakchi, Telco Colony, Kadma, and Mango — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to the Tata Steel and Tata Motors townships in Jamshedpur?", answer: "Yes, Telco (Tata Motors) Colony, the main Tata Steel residential townships, and all of Jamshedpur's planned zones are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Jamshedpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Jamshedpur delivery." }
    ]
  },

  "dhanbad": {
    cityName: "Dhanbad",
    metaTitle: "Cake Delivery in Dhanbad | Coal Capital Jharkhand | RedHeart",
    metaDescription: "Order cakes online in Dhanbad. Same-day delivery across Dhanbad. Birthday, custom cakes from ₹499.",
    h1: "Online Cake Delivery in Dhanbad",
    metaKeyword: "cake delivery dhanbad, order cake online dhanbad, birthday cake dhanbad, custom cake dhanbad, same day cake delivery dhanbad bank more hirapur katras jharia bokaro",
    footerContent: `
<h2>Cake Delivery in Dhanbad — Coal Capital of India, ISM Dhanbad (IIT-ISM), and Jharkhand's Energy Heartland</h2>
<p>Dhanbad — Jharkhand's 2nd-largest city, the "Coal Capital of India" (Dhanbad district sits on the Damodar Valley Coal Belt — one of the world's richest coal seams — and is home to BCCL, ECL, and multiple Coal India subsidiaries; the district produces a major share of India's coal), home to IIT (ISM) Dhanbad (the Indian School of Mines — now IIT — one of India's most prestigious institutions for mining and engineering, with a beautiful colonial campus), and a city of hard-working mining families — is a city of enormous energy industry heritage. From birthday parties in the leafy Bank More area to corporate cakes at Coal India Headquarter zones, from anniversary surprises in the residential Hirapur to student birthdays at the IIT (ISM) campus — RedHeart covers all Dhanbad zones: Central (Bank More, Shastri Nagar, Station Road), North (Katras, Jharia, Govindpur), South (Hirapur, Sindri, Chirudih), East (Kumardhubi, Barakar, Asansol connection), West (Bokaro Road, Gomoh, Phusro).</p>
<p>Our Dhanbad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant IIT-Mine-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhanbad, Jharkhand</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bank More, Hirapur, Katras, Jharia, Sindri, Govindpur, IIT-ISM campus area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dhanbad?", answer: "Yes, same-day cake delivery is available across all Dhanbad areas — Bank More, Hirapur, Katras, Jharia, and Sindri — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to IIT (ISM) Dhanbad campus?", answer: "Yes, IIT (ISM) Dhanbad campus and the surrounding residential area are covered by our same-day delivery." },
      { question: "Are eggless cakes available in Dhanbad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dhanbad delivery." }
    ]
  },

  "shivamogga": {
    cityName: "Shivamogga",
    metaTitle: "Cake Delivery in Shivamogga | Shimoga Karnataka | RedHeart",
    metaDescription: "Order cakes online in Shivamogga (Shimoga). Same-day delivery across Shivamogga. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Shivamogga",
    metaKeyword: "cake delivery shivamogga shimoga, order cake online shimoga, birthday cake shivamogga, custom cake shimoga, same day cake delivery shivamogga kuvempu nagar durgigudi nehru road",
    footerContent: `
<h2>Cake Delivery in Shivamogga — Gateway to the Malnad, Jog Falls Region, and Karnataka's Areca Nut Capital</h2>
<p>Shivamogga (Shimoga) — a city in Karnataka's central Malnad (mountain land) region, the commercial and administrative gateway to the Malnad — the Western Ghats' forested hills with their coffee, cardamom, and pepper estates — home to the Tunga River and the Gajanur Dam, and the nearest major city to Jog Falls (India's most powerful waterfall, 253 metres, on the Sharavathi River), and the "Areca Nut Capital" (the Malnad belt produces the majority of India's supari) — is a city of lush greenery and Kannada heartland culture. From birthday parties in the residential Kuvempu Nagar to corporate cakes at the growing Shivamogga IT park, from anniversary surprises near the scenic Tunga River banks to student birthdays near Kuvempu University — RedHeart covers all Shivamogga zones: Central (Durgigudi, Nehru Road, Gandhi Bazar), North (Kuvempu Nagar, Vinoba Nagar, Doddapet), South (K M Road, Hulikere, Bapuji Nagar), East (Thirthahalli Road, Sagar Road), West (Shimoga-Honnavar Road, Bhadra River area).</p>
<p>Our Shivamogga cake range: Chocolate, Black Forest, Red Velvet, Mango, Coffee (Malnad robusta!), Photo Cakes, Fondant Jog Falls-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shivamogga (Shimoga), Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kuvempu Nagar, Durgigudi, Nehru Road, Gandhi Bazar, Vinoba Nagar, Bapuji Nagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Malnad Coffee, Chocolate, Photo Cake, Jog Falls Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Do you have Malnad coffee-flavoured cakes in Shivamogga?", answer: "Yes! Shivamogga's proximity to the Malnad coffee estates inspired our Malnad Robusta Coffee Cake — a rich, aromatic coffee-cream cake available for same-day delivery." },
      { question: "Can I get same-day cake delivery in Shivamogga?", answer: "Yes, same-day cake delivery is available across all Shivamogga areas — Kuvempu Nagar, Durgigudi, Nehru Road, and Gandhi Bazar — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Shivamogga?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Shivamogga delivery." }
    ]
  }
};

async function run() {
  for (const [slug, data] of Object.entries(CITIES)) {
    const cityUrl = `/order-cake-online/${slug}`;
    const payload = {
      category: "Cakes",
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
        { label: "Cakes", url: "/order-cake-online" },
        { label: `Online Cake Delivery in ${data.cityName}`, url: cityUrl },
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
