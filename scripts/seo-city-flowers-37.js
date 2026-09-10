// Batch 37 — 15 cities:
// Punjab: Faridkot, Sri Muktsar Sahib, Moga, Fazilka, Batala
// Haryana: Sirsa, Fatehabad, Kaithal, Jind, Rewari
// Rajasthan: Hanumangarh, Churu, Nagaur, Dholpur, Tonk

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "faridkot": {
    cityName: "Faridkot",
    metaTitle: "Flower Delivery in Faridkot | Sikh Heritage Punjab | RedHeart",
    metaDescription: "Order flowers in Faridkot, Punjab. Same-day delivery near Baba Farid dargah & across Faridkot. From ₹399.",
    h1: "Online Flower Delivery in Faridkot",
    metaKeyword: "flower delivery faridkot, online flowers faridkot punjab, florist faridkot, flowers faridkot baba farid sikh heritage malwa",
    footerContent: `
<h2>Flower Delivery in Faridkot — The Princely City of Baba Farid's Spiritual Legacy</h2>
<p>Faridkot, in the Malwa region of Punjab, is named after Sheikh Fariduddin Ganjshakar (Baba Farid) — the 12th-13th century Sufi saint whose verses were incorporated into the Guru Granth Sahib by Guru Arjan Dev, making him one of the few non-Sikh saints revered in Sikhism's scripture. The Tilla Baba Farid (the saint's meditation site) in Faridkot is a place of pilgrimage for both Muslims and Sikhs. Faridkot was also the seat of the historic Faridkot princely state — whose last ruler's disputed will (leaving his entire fortune to charity rather than his daughters) led to a famous legal battle. The city has a royal heritage visible in the Raj Mahal palace and Qila Mubarak fort.</p>
<p>RedHeart delivers flowers across Faridkot — Main Market, Moga Road, Muktsar Road, Civil Lines, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Faridkot, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Moga Road, Muktsar Road, Civil Lines, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Baisakhi available in Faridkot?",
        answer: "Yes, Baisakhi is a major harvest festival in Faridkot's Punjabi community. Marigold garlands and seasonal bouquets for the celebration are available."
      },
      {
        question: "Can I get rose bouquets for a birthday in Faridkot?",
        answer: "Yes, roses and birthday bouquets are available for same-day delivery in Faridkot for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Faridkot?",
        answer: "Yes, same-day delivery is available across Faridkot for orders placed before 3 PM."
      }
    ]
  },

  "sri-muktsar-sahib": {
    cityName: "Sri Muktsar Sahib",
    metaTitle: "Flower Delivery in Sri Muktsar Sahib | Punjab | RedHeart",
    metaDescription: "Order flowers in Sri Muktsar Sahib, Punjab. Same-day delivery near Gurudwara & across Sri Muktsar Sahib. From ₹399.",
    h1: "Online Flower Delivery in Sri Muktsar Sahib",
    metaKeyword: "flower delivery sri muktsar sahib, online flowers muktsar sahib punjab, florist muktsar, flowers muktsar sahib sikh mela magh",
    footerContent: `
<h2>Flower Delivery in Sri Muktsar Sahib — Where Guru Gobind Singh's Forty Muktas Attained Liberation</h2>
<p>Sri Muktsar Sahib, in the Malwa region of southwestern Punjab, is one of Sikhism's most historically significant sites — named after the Battle of Muktsar (1705) where Guru Gobind Singh fought his last major battle against the Mughal forces of Wazir Khan. The forty Sikhs (Chali Mukte / Forty Liberated Ones) who had initially deserted Guru Gobind Singh at Anandpur but returned to fight and attain martyrdom at Muktsar are revered as saints. The Sri Muktsar Sahib Gurudwara complex and the Magh Mela (held on Maghi — the battle anniversary in mid-January) are major pilgrimage events attracting lakhs of Sikhs. The town's sacred sarovar (tank) makes it a significant tirth (pilgrimage) site in the Sikh religious circuit.</p>
<p>RedHeart delivers flowers across Sri Muktsar Sahib — Gurudwara Road, Mela Ground area, Faridkot Road, Gidderbaha Road, and Market area. Our range includes roses, marigolds, seasonal Punjab bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sri Muktsar Sahib, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gurudwara Road, Mela Ground, Faridkot Road, Gidderbaha Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, roses, seasonal Punjab bouquets, Gurudwara flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Magh Mela available in Sri Muktsar Sahib?",
        answer: "Yes, the Magh Mela at Sri Muktsar Sahib is one of Punjab's biggest Sikh gatherings. Marigold garlands and seasonal bouquets for the pilgrimage festival are available."
      },
      {
        question: "Can I get flowers for Gurudwara langar hall decoration?",
        answer: "Yes, marigold garlands and flower decorations for Gurudwara samagam (gatherings) in Sri Muktsar Sahib are available. Contact us for bulk gurudwara decoration orders."
      },
      {
        question: "Do you deliver flowers same day in Sri Muktsar Sahib?",
        answer: "Yes, same-day delivery is available across Sri Muktsar Sahib for orders placed before 3 PM."
      }
    ]
  },

  "moga": {
    cityName: "Moga",
    metaTitle: "Flower Delivery in Moga | Punjab | RedHeart",
    metaDescription: "Order flowers in Moga, Punjab. Same-day delivery of roses, bouquets & seasonal flowers across Moga. From ₹399.",
    h1: "Online Flower Delivery in Moga",
    metaKeyword: "flower delivery moga, online flowers moga punjab, florist moga, flowers moga malwa satnam dairy wheat",
    footerContent: `
<h2>Flower Delivery in Moga — Malwa's Dairy and Bhangra Heartland Near the Sutlej</h2>
<p>Moga, in the Malwa region of Punjab between Ludhiana and Ferozepur, is the headquarters of Moga district — a district known for both the Verka and Nestle dairy processing units (Moga has one of India's largest milk powder plants) and for the Satnam Singh Pangown Gurudwara (connected to the Namdhari Sikh sect). The Moga area's Punjabi cultural identity is particularly strong — several celebrated Punjabi folk and pop singers including those associated with the "Moga School" of music hail from this region. The Budha Nala and the seasonal Ghaggar-Hakra system historically watered the Moga area's lush wheat and maize fields.</p>
<p>RedHeart delivers flowers across Moga — Main Market, Ludhiana Road, Ferozepur Road, Jagraon area, and Station Road. Our range includes roses, gerberas, marigolds, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Moga, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ludhiana Road, Ferozepur Road, Jagraon, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, gerberas, marigolds, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Baisakhi available in Moga?",
        answer: "Yes, Baisakhi is the biggest celebration in Moga's Punjabi community. Marigold garlands and seasonal bouquets for the bhangra harvest festival are available."
      },
      {
        question: "Can I get a Valentine's Day bouquet in Moga?",
        answer: "Yes, red roses and premium Valentine's Day bouquets are available in Moga. Order before 3 PM for same-day delivery on the special day."
      },
      {
        question: "Do you deliver flowers same day in Moga?",
        answer: "Yes, same-day delivery is available across Moga for orders placed before 3 PM."
      }
    ]
  },

  "fazilka": {
    cityName: "Fazilka",
    metaTitle: "Flower Delivery in Fazilka | Border Punjab | RedHeart",
    metaDescription: "Order flowers in Fazilka, Punjab. Same-day delivery near Pakistan border & across Fazilka. From ₹399.",
    h1: "Online Flower Delivery in Fazilka",
    metaKeyword: "flower delivery fazilka, online flowers fazilka punjab, florist fazilka, flowers fazilka border cotton sutlej malwa",
    footerContent: `
<h2>Flower Delivery in Fazilka — Punjab's Southwesternmost Corner on the Sutlej and Pakistan Border</h2>
<p>Fazilka, at the southwestern tip of Punjab near the Pakistan border and the Rajasthan border, is the headquarters of Fazilka district — a desert-transitional zone where the Punjab plains meet the Thar landscape. The Sutlej River (which historically flowed through this area before the river shifted) and the Gang Canal irrigation system (built in the 1920s by the British) transformed the once-arid Fazilka area into cotton-growing farmland. Fazilka is notable for its zero-budget natural farming movement — farmer-activist Subhash Palekar's natural farming methods have been adopted by a significant number of Fazilka farmers as an alternative to chemical-intensive cotton cultivation. The city also has a significant Hindu merchant community.</p>
<p>RedHeart delivers flowers across Fazilka — Main Market, Ferozepur Road, Abohar Road, Jalalabad area, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fazilka, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ferozepur Road, Abohar Road, Jalalabad, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Diwali in Fazilka?",
        answer: "Yes, Diwali is a major festival in Fazilka's Hindu and Sikh communities. Marigold arrangements and festive bouquets are available for the celebration."
      },
      {
        question: "Are flowers for wedding functions available in Fazilka?",
        answer: "Yes, roses and marigold arrangements for Punjabi wedding functions in Fazilka are available. Contact us for bulk wedding flower orders."
      },
      {
        question: "Do you deliver flowers same day in Fazilka?",
        answer: "Yes, same-day delivery is available across Fazilka for orders placed before 3 PM."
      }
    ]
  },

  "batala": {
    cityName: "Batala",
    metaTitle: "Flower Delivery in Batala | Guru Nanak's Majha | RedHeart",
    metaDescription: "Order flowers in Batala, Punjab. Same-day delivery near Gurudwara Kandh Sahib & across Batala. From ₹399.",
    h1: "Online Flower Delivery in Batala",
    metaKeyword: "flower delivery batala, online flowers batala punjab, florist batala, flowers batala guru nanak majha kandh sahib",
    footerContent: `
<h2>Flower Delivery in Batala — Guru Nanak's Wedding Town in Majha Punjab</h2>
<p>Batala, in the Majha region of Punjab's Gurdaspur district, is a city with deep Sikh spiritual significance — Guru Nanak Dev Ji married Sulakhani Ji in Batala, and the Gurudwara Kandh Sahib (marking the wedding site) is an important Sikh pilgrimage destination. The city has a long history as a craft and trade centre of Majha Punjab. Batala is also known for the Batala Killa (the historic fort) and for being one of Punjab's oldest cities mentioned in the Ain-i-Akbari (Akbar's administrative survey). The Beas River and the Upper Bari Doab Canal system support Batala's fertile wheat and rice agriculture. The city's turban-tying and metalwork artisan traditions are centuries old.</p>
<p>RedHeart delivers flowers across Batala — Main Market, Gurdaspur Road, Amritsar Road, Dera Baba Nanak Road, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Batala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gurdaspur Road, Amritsar Road, Dera Baba Nanak Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Gurupurab at Gurudwara Kandh Sahib available in Batala?",
        answer: "Yes, Guru Nanak Gurupurab is celebrated with special significance at the Kandh Sahib Gurudwara in Batala. Marigold garlands and seasonal bouquets for the occasion are available."
      },
      {
        question: "Can I get wedding flowers for a Punjabi shaadi in Batala?",
        answer: "Yes, rose bouquets, marigold garlands, and full wedding flower decoration sets for Punjabi wedding ceremonies in Batala are available. Contact us for bulk orders."
      },
      {
        question: "Do you deliver flowers same day in Batala?",
        answer: "Yes, same-day delivery is available across Batala for orders placed before 3 PM."
      }
    ]
  },

  "sirsa": {
    cityName: "Sirsa",
    metaTitle: "Flower Delivery in Sirsa | Haryana | RedHeart",
    metaDescription: "Order flowers in Sirsa, Haryana. Same-day delivery near Dera Sacha Sauda & across Sirsa. From ₹399.",
    h1: "Online Flower Delivery in Sirsa",
    metaKeyword: "flower delivery sirsa, online flowers sirsa haryana, florist sirsa, flowers sirsa dera sacha sauda cotton ghaggar",
    footerContent: `
<h2>Flower Delivery in Sirsa — Haryana's Cotton and Dera Country Near the Ghaggar Desert</h2>
<p>Sirsa, in the semi-arid southwestern corner of Haryana on the banks of the seasonal Ghaggar River near the Rajasthan border, is a significant administrative and commercial centre. The district is Haryana's largest cotton-growing region and has a growing citrus orchards sector (kinnow and oranges). Sirsa is internationally known as the headquarters of the Dera Sacha Sauda — a massive religious organization (with millions of followers in Punjab, Haryana, and internationally) led by its "Gurmeet Ram Rahim Singh" that has been at the centre of significant controversy. The ancient town of Sirsa was historically an important stop on the Indo-Gangetic plain's trade routes, and the Digambar Jain temples in the old city reflect a long mercantile tradition.</p>
<p>RedHeart delivers flowers across Sirsa — Main Market, Hisar Road, Bathinda Road, Civil Lines, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Haryana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sirsa, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hisar Road, Bathinda Road, Civil Lines, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Sirsa?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Sirsa for same-day delivery. Order before 3 PM."
      },
      {
        question: "Can I get a birthday bouquet in Sirsa?",
        answer: "Yes, roses and birthday bouquets are available for same-day delivery in Sirsa for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Sirsa?",
        answer: "Yes, same-day delivery is available across Sirsa for orders placed before 3 PM."
      }
    ]
  },

  "fatehabad": {
    cityName: "Fatehabad",
    metaTitle: "Flower Delivery in Fatehabad | Haryana | RedHeart",
    metaDescription: "Order flowers in Fatehabad, Haryana. Same-day delivery of roses, bouquets & seasonal flowers across Fatehabad. From ₹399.",
    h1: "Online Flower Delivery in Fatehabad",
    metaKeyword: "flower delivery fatehabad, online flowers fatehabad haryana, florist fatehabad, flowers fatehabad cotton wheat saraswati",
    footerContent: `
<h2>Flower Delivery in Fatehabad — On the Ancient Saraswati River Plain of Haryana's Cotton Country</h2>
<p>Fatehabad, in south-central Haryana, is the headquarters of Fatehabad district — an area that lies on the ancient course of the Saraswati River (the lost Vedic river whose dry channels are visible in the terrain). The district's fertile soil supports cotton, wheat, and mustard cultivation. Fatehabad's name means "City of Victory" (Fateh-abad) — commemorating a Mughal victory near the site. The district's Agroha heritage site (believed to be the ancient city of Agroha, capital of Aggarwal Vaishya community's legendary ancestor king Agra Sen) is an important pilgrimage destination for the Agarwal community worldwide, who undertake an annual march from Delhi to Agroha. The town has significant Jat and Baniya community populations.</p>
<p>RedHeart delivers flowers across Fatehabad — Main Market, Hisar Road, Sirsa Road, Tohana Road, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Haryana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehabad, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hisar Road, Sirsa Road, Tohana Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Fatehabad?",
        answer: "Yes, Diwali is widely celebrated in Fatehabad. Marigold arrangements and festive bouquets are available for same-day delivery."
      },
      {
        question: "Can I send birthday flowers to Fatehabad?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Fatehabad for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Fatehabad?",
        answer: "Yes, same-day delivery is available across Fatehabad for orders placed before 3 PM."
      }
    ]
  },

  "kaithal": {
    cityName: "Kaithal",
    metaTitle: "Flower Delivery in Kaithal | Haryana | RedHeart",
    metaDescription: "Order flowers in Kaithal, Haryana. Same-day delivery near Kaithal temples & across Kaithal. From ₹399.",
    h1: "Online Flower Delivery in Kaithal",
    metaKeyword: "flower delivery kaithal, online flowers kaithal haryana, florist kaithal, flowers kaithal hanuman kapilmuni wheat",
    footerContent: `
<h2>Flower Delivery in Kaithal — Haryana's Monkey God City and Kapilmuni's Ancient Heritage</h2>
<p>Kaithal, in the agricultural plains of northern Haryana, is one of Haryana's most ancient cities — associated with Kapi-sthal (the place of monkey-beings/Vanaras), and believed to be the birthplace of Hanuman in some traditions. The Hanuman temple at Kaithal is one of the most visited shrines in Haryana. The ancient Kapilmuni Mandir (associated with the sage Kapila who propounded Sankhya philosophy) is another heritage landmark. The city lies in the Ghaggar-Hakra basin, and its fertile soil produces high-quality wheat and rice. The Kaithal area is a significant religious tourism destination for Haryana Hindus during festivals like Kartik Purnima and Ram Navami.</p>
<p>RedHeart delivers flowers across Kaithal — Main Market, Kurukshetra Road, Jind Road, Pundri area, and Station Road. We offer roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kaithal, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kurukshetra Road, Jind Road, Pundri area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Hanuman temple puja available in Kaithal?",
        answer: "Yes, marigold garlands and red flower offerings for the Kaithal Hanuman temple are available. Same-day delivery is available in Kaithal."
      },
      {
        question: "Can I get flowers for Diwali in Kaithal?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available for same-day delivery in Kaithal."
      },
      {
        question: "Do you deliver flowers same day in Kaithal?",
        answer: "Yes, same-day delivery is available across Kaithal for orders placed before 3 PM."
      }
    ]
  },

  "jind": {
    cityName: "Jind",
    metaTitle: "Flower Delivery in Jind | Haryana | RedHeart",
    metaDescription: "Order flowers in Jind, Haryana. Same-day delivery near Jyotisar battlefield & across Jind. From ₹399.",
    h1: "Online Flower Delivery in Jind",
    metaKeyword: "flower delivery jind, online flowers jind haryana, florist jind, flowers jind haryana jind kingdom jats",
    footerContent: `
<h2>Flower Delivery in Jind — The Kingdom That Joined the Sikhs and Watched the Mahabharata</h2>
<p>Jind, in central Haryana, is the headquarters of Jind district — a city whose history spans from the Mahabharata period (Jind is believed to derive from Jai-nath-puri, "place of Jaynath") to the 18th century Sikh Jind Misl (a phulkian dynasty principality that later became the Jind princely state, one of Haryana's most significant pre-independence kingdoms). The Jyotisar site (near Kurukshetra) where Lord Krishna delivered the Bhagavad Gita to Arjuna is closely associated with Jind district. The district is known as the "City of the Temples" — with the Ramrai temple (a 500-year-old sacred tank) and the Jama Masjid (Mughal era) reflecting its composite heritage.</p>
<p>RedHeart delivers flowers across Jind — Main Market, Sonipat Road, Hisar Road, Panipat Road, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Haryana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jind, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sonipat Road, Hisar Road, Panipat Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Jind?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Jind for same-day delivery. Order before 3 PM."
      },
      {
        question: "Can I get flowers for a wedding ceremony in Jind?",
        answer: "Yes, rose bouquets and marigold garlands for Jat Haryanvi wedding functions in Jind are available. Contact us for bulk wedding flower orders."
      },
      {
        question: "Do you deliver flowers same day in Jind?",
        answer: "Yes, same-day delivery is available across Jind for orders placed before 3 PM."
      }
    ]
  },

  "rewari": {
    cityName: "Rewari",
    metaTitle: "Flower Delivery in Rewari | Haryana | RedHeart",
    metaDescription: "Order flowers in Rewari, Madhya Pradesh. Same-day delivery near Hero MotoCorp campus & across Rewari. From ₹399.",
    h1: "Online Flower Delivery in Rewari",
    metaKeyword: "flower delivery rewari, online flowers rewari haryana, florist rewari, flowers rewari hero motocorp industrial ahirwal",
    footerContent: `
<h2>Flower Delivery in Rewari — Ahirwal's Industrial Gateway on Delhi's Southwest Border</h2>
<p>Rewari, in the Ahirwal region of southern Haryana near the Delhi-Rajasthan border, is the headquarters of Rewari district — an area that is the traditional homeland of the Ahir (Yadav) community, one of Haryana's most prominent pastoral and agricultural castes. The district has grown significantly as an industrial satellite of Delhi-NCR — the Hero MotoCorp manufacturing plant (India's largest two-wheeler manufacturer) is headquartered in Rewari. The city also hosts the Hero Center of Innovation and Technology (CIT). The historic Rewari Fort, the Sheesha Mahal, and the Dargah of Muslim saint Haji Rattan are Rewari's heritage landmarks.</p>
<p>RedHeart delivers flowers across Rewari — Main Market, Delhi Road, Narnaul Road, Palhawas area, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Haryana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rewari, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Delhi Road, Narnaul Road, Palhawas, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, corporate gifting bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are corporate gifting flower arrangements available for Hero MotoCorp offices in Rewari?",
        answer: "Yes, corporate flower arrangements for office occasions, client meetings, and employee celebrations at Rewari's industrial offices are available."
      },
      {
        question: "Can I get flowers for Diwali in Rewari?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available for same-day delivery in Rewari."
      },
      {
        question: "Do you deliver flowers same day in Rewari?",
        answer: "Yes, same-day delivery is available across Rewari for orders placed before 3 PM."
      }
    ]
  },

  "hanumangarh": {
    cityName: "Hanumangarh",
    metaTitle: "Flower Delivery in Hanumangarh | Rajasthan | RedHeart",
    metaDescription: "Order flowers in Hanumangarh, Rajasthan. Same-day delivery near Bhatner Fort & across Hanumangarh. From ₹399.",
    h1: "Online Flower Delivery in Hanumangarh",
    metaKeyword: "flower delivery hanumangarh, online flowers hanumangarh rajasthan, florist hanumangarh, flowers hanumangarh bhatner fort cotton ghaggar",
    footerContent: `
<h2>Flower Delivery in Hanumangarh — The Ancient Bhatner Fort City on the Ghaggar River</h2>
<p>Hanumangarh, in northern Rajasthan on the banks of the Ghaggar River (which disappears into the Thar Desert after Hanumangarh — the terminal point of what was once the mighty Saraswati), is the headquarters of Hanumangarh district. The ancient Bhatner Fort (4th century CE, one of Rajasthan's oldest forts) sits in the district at Bhatner (Hanumangarh city itself takes its name from the Hanuman temple near the fort). The Ghaggar valley agriculture — cotton, wheat, and mustard — is the economic mainstay of the district. The district borders Punjab and Haryana, giving it a mixed Rajasthani-Punjabi cultural character with a significant Sikh community.</p>
<p>RedHeart delivers flowers across Hanumangarh — Main Market, Sangaria area, Pilibangan, Junction area, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanumangarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sangaria, Pilibangan, Junction area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Baisakhi available in Hanumangarh?",
        answer: "Yes, Hanumangarh's significant Sikh community celebrates Baisakhi with great festivity. Marigold garlands and seasonal bouquets for the harvest festival are available."
      },
      {
        question: "Can I get flowers for Diwali in Hanumangarh?",
        answer: "Yes, Diwali marigold and festive bouquets are available for same-day delivery in Hanumangarh."
      },
      {
        question: "Do you deliver flowers same day in Hanumangarh?",
        answer: "Yes, same-day delivery is available across Hanumangarh for orders placed before 3 PM."
      }
    ]
  },

  "churu": {
    cityName: "Churu",
    metaTitle: "Flower Delivery in Churu | Shekhawati Rajasthan | RedHeart",
    metaDescription: "Order flowers in Churu, Rajasthan. Same-day delivery near Churu frescoes & across Churu. From ₹399.",
    h1: "Online Flower Delivery in Churu",
    metaKeyword: "flower delivery churu, online flowers churu rajasthan, florist churu, flowers churu shekhawati fresco marwari merchant",
    footerContent: `
<h2>Flower Delivery in Churu — Shekhawati's Frescoed Havelis and the Thar's Open-Air Gallery</h2>
<p>Churu, in the Shekhawati region of northern Rajasthan, is part of an extraordinary belt of frescoed merchant havelis that earned Shekhawati the title "open-air art gallery." The Marwari (Maheshwari and Agarwal) merchant families who grew wealthy in the 19th century Calcutta and Bombay trade financed hundreds of elaborately frescoed havelis across Churu, Sikar, and Jhunjhunu districts. Churu's own frescoed buildings (like the Kotharis' haveli and the Surana double haveli) depict mythological scenes, British-era vignettes, and folk motifs. Churu also holds the dubious distinction of being India's hottest district — temperatures regularly exceed 50°C in May. The city is the gateway to the dunes of the eastern Thar.</p>
<p>RedHeart delivers flowers across Churu — Main Market, Bikaner Road, Sikar Road, Salasar Road, and Station Road. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Bikaner Road, Sikar Road, Salasar Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, desert-hardy seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Teej or Gangaur celebration in Churu?",
        answer: "Yes, Teej and Gangaur are important Rajasthani women's festivals in Churu. Seasonal marigold and rose bouquets for the festive occasion are available."
      },
      {
        question: "Are flowers for the Salasar Balaji temple available near Churu?",
        answer: "Yes, Salasar Balaji (one of Rajasthan's most visited Hanuman temples) is about 60 km from Churu. Marigold and flower offerings for the temple visit can be ordered from Churu."
      },
      {
        question: "Do you deliver flowers same day in Churu?",
        answer: "Yes, same-day delivery is available across Churu for orders placed before 3 PM."
      }
    ]
  },

  "nagaur": {
    cityName: "Nagaur",
    metaTitle: "Flower Delivery in Nagaur | Cattle Fair Rajasthan | RedHeart",
    metaDescription: "Order flowers in Nagaur, Rajasthan. Same-day delivery near Nagaur Fort & across Nagaur. From ₹399.",
    h1: "Online Flower Delivery in Nagaur",
    metaKeyword: "flower delivery nagaur, online flowers nagaur rajasthan, florist nagaur, flowers nagaur fort cattle fair marwar",
    footerContent: `
<h2>Flower Delivery in Nagaur — Marwar's Fort City and Home of India's Second-Largest Cattle Fair</h2>
<p>Nagaur, in the heart of the Marwar region of Rajasthan, is built around the magnificent Nagaur Fort (Ahhichatragarh, "Fort of the Cobra King") — one of Rajasthan's best-preserved Mughal-Rajput architectural ensembles with its extraordinary collection of frescoes, Mughal garden, and stepwells. The Nagaur Cattle and Camel Fair (held annually in January-February) is India's second-largest cattle fair after Pushkar, drawing hundreds of thousands of traders, artisans, and tourists for five days of trading in horses, cattle, and camel. The Tarkeen Dargah (the shrine of Sufi saint Sheikh Hamiduddin Nagauri, a disciple of Moinuddin Chishti) is an important Islamic heritage site. The local chilli (Nagauri mirch) is famous across Rajasthan.</p>
<p>RedHeart delivers flowers across Nagaur — Main Market, Jodhpur Road, Bikaner Road, Fort area, and Station Road. We offer roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jodhpur Road, Bikaner Road, Fort area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Urs at Tarkeen Dargah available in Nagaur?",
        answer: "Yes, rose petals and seasonal flowers for the Tarkeen Dargah's Urs celebration are available in Nagaur. The Sufi dargah is one of India's important Chishti shrines."
      },
      {
        question: "Can I get flowers for Teej or Holi in Nagaur?",
        answer: "Yes, Teej and Holi are widely celebrated in Nagaur's Marwari community. Seasonal bouquets for the festive occasions are available."
      },
      {
        question: "Do you deliver flowers same day in Nagaur?",
        answer: "Yes, same-day delivery is available across Nagaur for orders placed before 3 PM."
      }
    ]
  },

  "dholpur": {
    cityName: "Dholpur",
    metaTitle: "Flower Delivery in Dholpur | Chambal Rajasthan | RedHeart",
    metaDescription: "Order flowers in Dholpur, Rajasthan. Same-day delivery near Chambal safari & across Dholpur. From ₹399.",
    h1: "Online Flower Delivery in Dholpur",
    metaKeyword: "flower delivery dholpur, online flowers dholpur rajasthan, florist dholpur, flowers dholpur chambal river jat brij",
    footerContent: `
<h2>Flower Delivery in Dholpur — Chambal's Red Sandstone City at the Brij-Rajasthan Border</h2>
<p>Dholpur, at the eastern tip of Rajasthan on the Chambal River bordering Madhya Pradesh and Uttar Pradesh, is a compact princely state town known for its distinctive Dholpur red sandstone (used in the construction of New Delhi's Rashtrapati Bhavan and North Block). The Chambal River here is one of India's cleanest rivers — the National Chambal Wildlife Sanctuary protects the endangered gharial crocodile, Gangetic river dolphin, and Indian skimmer bird. The Dholpur Palace (now a hotel) and the ancient Shergarh Fort reflect the region's Mughal-Rajput history. The nearby Bari and Raipur areas of Dholpur district are in the Brij cultural zone — sharing the Mathura-Vrindavan's Radha-Krishna devotional tradition.</p>
<p>RedHeart delivers flowers across Dholpur — Main Market, Agra Road, Gwalior Road, Bari area, and Station Road. We offer roses, marigolds, lotus, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dholpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Agra Road, Gwalior Road, Bari area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, lotus, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Chambal safari trip stay from Dholpur?",
        answer: "Yes, the National Chambal Sanctuary eco-camps are near Dholpur. Flower arrangements for your riverside nature camp or anniversary stay are available from Dholpur."
      },
      {
        question: "Are flowers for Holi available in Dholpur?",
        answer: "Yes, Dholpur's Brij border position means Holi (related to the Mathura-Vrindavan tradition) is a major celebration. Seasonal and festive bouquets are available."
      },
      {
        question: "Do you deliver flowers same day in Dholpur?",
        answer: "Yes, same-day delivery is available across Dholpur for orders placed before 3 PM."
      }
    ]
  },

  "tonk": {
    cityName: "Tonk",
    metaTitle: "Flower Delivery in Tonk | Rajasthan | RedHeart",
    metaDescription: "Order flowers in Tonk, Rajasthan. Same-day delivery near Sunehri Kothi & across Tonk. From ₹399.",
    h1: "Online Flower Delivery in Tonk",
    metaKeyword: "flower delivery tonk, online flowers tonk rajasthan, florist tonk, flowers tonk nawabi sunehri kothi banasthali",
    footerContent: `
<h2>Flower Delivery in Tonk — Rajasthan's Only Muslim Nawabi State with the Golden Palace</h2>
<p>Tonk, in central Rajasthan on the Banas River south of Jaipur, has the unique distinction of being Rajasthan's only Muslim nawabi state — the Tonk Nawabate was established by Amir Khan Pindari (a Pindari chieftain who made his peace with the British in 1817 and received Tonk as a princely state). The Sunehri Kothi (Golden Palace) — a 19th century haveli whose interior is covered in mirror-mosaic and gold-leaf work in the Mughal decorative tradition — is one of Rajasthan's most spectacular and least-known architectural treasures. The Banasthali University (one of India's largest women's universities) is in Tonk district. The annual Tonk Mela (a large regional fair) draws communities from across the Banas River valley.</p>
<p>RedHeart delivers flowers across Tonk — Main Market, Jaipur Road, Sawai Madhopur Road, Banas river area, and Station Road. We offer roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tonk, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jaipur Road, Sawai Madhopur Road, Banas area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Eid celebrations available in Tonk?",
        answer: "Yes, Tonk's Muslim nawabi heritage makes Eid a major community celebration. Rose bouquets and festive arrangements for Eid are available in Tonk."
      },
      {
        question: "Can I get flowers for Banasthali University events in Tonk?",
        answer: "Yes, flowers for convocation, graduation, and campus events at Banasthali University (about 30 km from Tonk) are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Tonk?",
        answer: "Yes, same-day delivery is available across Tonk for orders placed before 3 PM."
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
