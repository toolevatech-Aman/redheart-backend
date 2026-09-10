// Batch 38 — 15 cities:
// Haryana: Nuh, Jhajjar, Palwal, Mahendragarh
// Rajasthan: Karauli, Dausa, Bundi, Jalore
// Madhya Pradesh: Damoh, Narsinghpur, Seoni, Balaghat, Shivpuri
// Punjab: Hoshiarpur, Tarn Taran

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "nuh": {
    cityName: "Nuh",
    metaTitle: "Flower Delivery in Nuh | Mewat Haryana | RedHeart",
    metaDescription: "Order flowers in Nuh (Mewat), Haryana. Same-day delivery of roses, bouquets & seasonal flowers across Nuh. From ₹399.",
    h1: "Online Flower Delivery in Nuh",
    metaKeyword: "flower delivery nuh, online flowers nuh haryana, florist nuh, flowers nuh mewat meo muslim aravalli",
    footerContent: `
<h2>Flower Delivery in Nuh — Mewat's Historic Meo Muslim Heartland in the Aravalli Hills</h2>
<p>Nuh (formerly Mewat), in southern Haryana in the Aravalli Range foothills, is the headquarters of the Nuh district — a district with one of India's highest Muslim population percentages (around 80%) and the homeland of the Meo community, a Muslim Rajput community that has maintained a distinctive syncretic culture blending Islamic practice with Hindu customs (Meos traditionally celebrated Holi, Diwali, and observed both namaaz and Hindu rituals simultaneously). The Mewat region was historically a forested bandit zone; today it is developing through the Mewat Development Agency's programmes. The Aravalli foothills here have significant biodiversity and the Sultanpur Bird Sanctuary is in the adjoining Gurugram belt.</p>
<p>RedHeart delivers flowers across Nuh — Main Market, Ferozepur Jhirka area, Punhana area, Tauru Road, and Hathin area. Our range includes roses, marigolds, seasonal Haryana bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nuh (Mewat), Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Ferozepur Jhirka, Punhana, Tauru Road, Hathin</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Eid available in Nuh?",
        answer: "Yes, Eid is the biggest celebration in Nuh's majority Muslim community. Rose bouquets and festive arrangements for Eid are available."
      },
      {
        question: "Can I get flowers for a wedding in Nuh?",
        answer: "Yes, rose bouquets and marigold garlands for Meo Muslim wedding functions in Nuh are available. Contact us for bulk wedding flower orders."
      },
      {
        question: "Do you deliver flowers same day in Nuh?",
        answer: "Yes, same-day delivery is available across Nuh for orders placed before 3 PM."
      }
    ]
  },

  "jhajjar": {
    cityName: "Jhajjar",
    metaTitle: "Flower Delivery in Jhajjar | Haryana | RedHeart",
    metaDescription: "Order flowers in Jhajjar, Haryana. Same-day delivery near Dighal lake & across Jhajjar. From ₹399.",
    h1: "Online Flower Delivery in Jhajjar",
    metaKeyword: "flower delivery jhajjar, online flowers jhajjar haryana, florist jhajjar, flowers jhajjar haryana jat dighal deer park",
    footerContent: `
<h2>Flower Delivery in Jhajjar — Haryana's Jat Heartland Between the Aravalli and Delhi Plains</h2>
<p>Jhajjar, in west-central Haryana between Delhi and Rohtak, is the headquarters of Jhajjar district — a predominantly Jat community area with strong ties to the Delhi-Haryana hinterland. The Dighal village (in Jhajjar district) has a unique Deer Park and the Bhindawas Bird Sanctuary — one of Haryana's most important wetland bird sanctuaries with over 250 bird species. The Jhajjar area has a strong industrial presence given its proximity to the Delhi-NCR industrial belt, with several major manufacturing plants. The 1857 uprising had a significant episode in Jhajjar — the Nawab of Jhajjar was executed for his role in supporting the uprising against the British.</p>
<p>RedHeart delivers flowers across Jhajjar — Main Market, Rohtak Road, Delhi Road, Bahadurgarh area, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Haryana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhajjar, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Rohtak Road, Delhi Road, Bahadurgarh area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Jhajjar?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Jhajjar for same-day delivery."
      },
      {
        question: "Can I send birthday flowers to Jhajjar from Delhi?",
        answer: "Yes, same-day delivery of birthday roses and celebration bouquets is available in Jhajjar for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Jhajjar?",
        answer: "Yes, same-day delivery is available across Jhajjar for orders placed before 3 PM."
      }
    ]
  },

  "palwal": {
    cityName: "Palwal",
    metaTitle: "Flower Delivery in Palwal | Haryana | RedHeart",
    metaDescription: "Order flowers in Palwal, Haryana. Same-day delivery near Hodal & across Palwal. From ₹399.",
    h1: "Online Flower Delivery in Palwal",
    metaKeyword: "flower delivery palwal, online flowers palwal haryana, florist palwal, flowers palwal haryana industrial delhi agra corridor",
    footerContent: `
<h2>Flower Delivery in Palwal — Haryana's Southern Industrial Gateway on the Delhi-Agra Highway</h2>
<p>Palwal, in southern Haryana on the National Highway 44 (the Delhi-Agra-Chennai highway), is the headquarters of Palwal district — a rapidly industrialising area that serves as a logistics hub between Delhi NCR and Agra. The district borders Uttar Pradesh (Mathura-Vrindavan region) and Rajasthan (Mewat), making it a cultural transition zone. Palwal has a significant industrial estate with automotive components, textile, and food processing industries attracted by the excellent highway connectivity. The Anupshahr barrage on the Yamuna River near Palwal supports irrigation in the district's agricultural hinterland. Palwal town has a historic mosque and fort remnants from the medieval period.</p>
<p>RedHeart delivers flowers across Palwal — Main Market, Delhi Road, Mathura Road, Hodal area, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Haryana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Palwal, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Delhi Road, Mathura Road, Hodal area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, corporate gifting bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are corporate gifting flower arrangements available for industrial units in Palwal?",
        answer: "Yes, corporate flowers for office occasions, welcome gifts, and client celebrations at Palwal's industrial estates are available for same-day delivery."
      },
      {
        question: "Can I get flowers for Holi in Palwal?",
        answer: "Yes, Holi is a major festival in Palwal with its Brij cultural influence. Seasonal bouquets and festive flowers are available."
      },
      {
        question: "Do you deliver flowers same day in Palwal?",
        answer: "Yes, same-day delivery is available across Palwal for orders placed before 3 PM."
      }
    ]
  },

  "mahendragarh": {
    cityName: "Mahendragarh",
    metaTitle: "Flower Delivery in Mahendragarh | Haryana | RedHeart",
    metaDescription: "Order flowers in Mahendragarh, Haryana. Same-day delivery near Narnaul & across Mahendragarh. From ₹399.",
    h1: "Online Flower Delivery in Mahendragarh",
    metaKeyword: "flower delivery mahendragarh, online flowers mahendragarh haryana, florist mahendragarh, flowers mahendragarh narnaul ahirwal marwari",
    footerContent: `
<h2>Flower Delivery in Mahendragarh — Ahirwal's Ancient Copper Country at Haryana's Rajasthan Border</h2>
<p>Mahendragarh, at the southern tip of Haryana bordering Rajasthan, is the headquarters of Mahendragarh district — an area in the Ahirwal region and the Aravalli foothills known for the ancient Narnaul city (the district's commercial centre). Narnaul was a significant Mughal-period town — Sheikh Fareed-ud-Din (the father of the Mughal Emperor Akbar's adviser Abul Fazl and Faizi) was from Narnaul, and a beautiful Mughal stepwell (Ibrahim Khan's baoli) and the Chore Minar (a tower built with the severed heads of thieves) are Narnaul heritage landmarks. The Mahendragarh district is part of the Aravalli copper and mineral belt. Haryana's prominent Jat community leader and wrestling traditions are deeply rooted in the Mahendragarh Ahirwal region.</p>
<p>RedHeart delivers flowers across Mahendragarh — Narnaul Main Market, Rewari Road, Jaipur Road, Ateli area, and Kanina area. Our range includes roses, marigolds, gerberas, and seasonal Haryana bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahendragarh, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narnaul Market, Rewari Road, Jaipur Road, Ateli, Kanina area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Haryana bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Mahendragarh?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Mahendragarh for same-day delivery."
      },
      {
        question: "Can I send birthday roses to Mahendragarh?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Mahendragarh for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Mahendragarh?",
        answer: "Yes, same-day delivery is available across Mahendragarh for orders placed before 3 PM."
      }
    ]
  },

  "karauli": {
    cityName: "Karauli",
    metaTitle: "Flower Delivery in Karauli | Rajasthan | RedHeart",
    metaDescription: "Order flowers in Karauli, Rajasthan. Same-day delivery near Kaila Devi temple & across Karauli. From ₹399.",
    h1: "Online Flower Delivery in Karauli",
    metaKeyword: "flower delivery karauli, online flowers karauli rajasthan, florist karauli, flowers karauli kaila devi chambal brij",
    footerContent: `
<h2>Flower Delivery in Karauli — Kaila Devi's Pilgrim Gateway on the Chambal-Brij Border</h2>
<p>Karauli, in eastern Rajasthan on the Chambal River's western bank bordering Madhya Pradesh and Uttar Pradesh's Brij region, is a district headquartered in a city of royal heritage and deep religious significance. The Karauli princely state was a Jadaun (Yaduvanshi) Rajput kingdom claiming descent from Lord Krishna — making the town's Shri Madan Mohan ji temple (one of Rajasthan's most revered Vaishnavite shrines) a place of Brij-associated pilgrimage. The Kaila Devi temple (a Shakti peetha in the Trikuta Hills, dedicated to the goddess Kaila Devi) is one of Rajasthan's most visited religious sites — the annual Kaila Devi Mela draws millions of devotees from Rajasthan, UP, and MP during Navratri.</p>
<p>RedHeart delivers flowers across Karauli — Main Market, Hindaun Road, Sawai Madhopur Road, Kaila Devi Road, and Civil Lines. We offer marigold garlands, red hibiscus, roses, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karauli, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Hindaun Road, Sawai Madhopur Road, Kaila Devi Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, red hibiscus, Kaila Devi puja sets, roses</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Kaila Devi Navratri Mela available in Karauli?",
        answer: "Yes, Kaila Devi Mela during Navratri sees millions of pilgrims. Marigold garlands, red hibiscus, and Devi puja flower sets are available from Karauli for the festival."
      },
      {
        question: "Can I get flowers for Madan Mohan ji Janmashtami puja in Karauli?",
        answer: "Yes, lotus, yellow marigolds, and Radha-Krishna puja flowers for Janmashtami at the Madan Mohan temple are available in Karauli."
      },
      {
        question: "Do you deliver flowers same day in Karauli?",
        answer: "Yes, same-day delivery is available across Karauli for orders placed before 3 PM."
      }
    ]
  },

  "dausa": {
    cityName: "Dausa",
    metaTitle: "Flower Delivery in Dausa | Rajasthan | RedHeart",
    metaDescription: "Order flowers in Dausa, Rajasthan. Same-day delivery near Mehandipur Balaji & across Dausa. From ₹399.",
    h1: "Online Flower Delivery in Dausa",
    metaKeyword: "flower delivery dausa, online flowers dausa rajasthan, florist dausa, flowers dausa mehandipur balaji temple",
    footerContent: `
<h2>Flower Delivery in Dausa — Mehandipur Balaji's Gateway on the Jaipur-Agra Highway</h2>
<p>Dausa, in eastern Rajasthan on the Jaipur-Agra National Highway, is the headquarters of Dausa district — a strategically important district that serves as the gateway between Jaipur and the Brij-Agra cultural zone. The most famous landmark in Dausa's territory is the Mehandipur Balaji temple — one of India's most unusual and psychologically significant Hanuman temples, believed to be the abode of three deities (Balaji, Bhairav, and Pret Raj) who cure those afflicted by supernatural forces. The temple draws extraordinary crowds of devotees seeking cures from mental illness and supernatural affliction. The Dausa area's sesame (til) and mustard cultivation is significant, and the Aravalli hills border the district's southwestern edge.</p>
<p>RedHeart delivers flowers across Dausa — Main Market, Jaipur Road, Agra Road, Mehandipur Road, and Civil Lines. We offer marigold garlands, roses, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dausa, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jaipur Road, Agra Road, Mehandipur Road, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, roses, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Mehandipur Balaji puja available in Dausa?",
        answer: "Yes, marigold garlands and flower offerings for the Mehandipur Balaji temple are available from Dausa. We deliver to Mehandipur area accommodations before your temple visit."
      },
      {
        question: "Can I get flowers for Gangaur in Dausa?",
        answer: "Yes, Gangaur is an important Rajasthani women's festival in Dausa. Seasonal marigold and rose bouquets for the goddess Gauri celebration are available."
      },
      {
        question: "Do you deliver flowers same day in Dausa?",
        answer: "Yes, same-day delivery is available across Dausa for orders placed before 3 PM."
      }
    ]
  },

  "bundi": {
    cityName: "Bundi",
    metaTitle: "Flower Delivery in Bundi | Heritage Rajasthan | RedHeart",
    metaDescription: "Order flowers in Bundi, Rajasthan. Same-day delivery near Taragarh Fort & across Bundi. From ₹399.",
    h1: "Online Flower Delivery in Bundi",
    metaKeyword: "flower delivery bundi, online flowers bundi rajasthan, florist bundi, flowers bundi taragarh fort kipling stepwells",
    footerContent: `
<h2>Flower Delivery in Bundi — Kipling's Favourite Walled City with Rajasthan's Finest Stepwells</h2>
<p>Bundi, in the Hadoti region of southeastern Rajasthan on the Chambal tributary system, is one of Rajasthan's most authentic and undiscovered heritage cities — a compact walled town with a remarkable concentration of stepwells (baolis), murals, temples, and the magnificent Taragarh Fort that overlooks the city. Rudyard Kipling stayed in Bundi while writing "Kim" and the stepwells and palaces of Bundi allegedly inspired his portrayal of Indian heritage. Bundi's artistic tradition — the Bundi school of miniature painting, famous for its intricate forest hunting scenes and feminine figures in green landscapes — is one of Rajasthan's most distinctive artistic styles. The Sukh Mahal palace (a summer retreat on a reservoir) is another architectural gem.</p>
<p>RedHeart delivers flowers across Bundi — Main Market, Kota Road, Ajmer Road, Taragarh area, and Civil Lines. Our range includes roses, marigolds, seasonal Rajasthan bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bundi, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Kota Road, Ajmer Road, Taragarh area, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Rajasthan bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a heritage haveli stay in Bundi?",
        answer: "Yes, Bundi's numerous heritage havelis and guesthouses are perfect for anniversary or honeymoon stays. Rose bouquets and marigold arrangements for romantic Bundi evenings are available."
      },
      {
        question: "Are flowers for Kajali Teej (Bundi's Teej festival) available?",
        answer: "Yes, Bundi's Kajali Teej (celebrated on the third day after the new moon in Bhadra month) is one of Rajasthan's most colourful Teej processions. Seasonal bouquets for the occasion are available."
      },
      {
        question: "Do you deliver flowers same day in Bundi?",
        answer: "Yes, same-day delivery is available across Bundi for orders placed before 3 PM."
      }
    ]
  },

  "jalore": {
    cityName: "Jalore",
    metaTitle: "Flower Delivery in Jalore | Rajasthan | RedHeart",
    metaDescription: "Order flowers in Jalore, Rajasthan. Same-day delivery near Sundha Mata temple & across Jalore. From ₹399.",
    h1: "Online Flower Delivery in Jalore",
    metaKeyword: "flower delivery jalore, online flowers jalore rajasthan, florist jalore, flowers jalore sundha mata fort marwar granite",
    footerContent: `
<h2>Flower Delivery in Jalore — Marwar's Granite Fort City and Sundha Mata's Hill Temple</h2>
<p>Jalore, in southwestern Rajasthan's Marwar region near the Gujarat border, is the headquarters of Jalore district — a city dominated by its historic Jalore Fort (one of Rajasthan's strongest forts, perched on a 336-metre hill of Aravalli granite, once garrisoned by the Parmara Rajputs). The Sundha Mata temple (a Shakti temple on a dramatic Aravalli ridge about 90 km from Jalore) is one of the region's most visited pilgrimage sites. The Jalore district produces India's finest black granite (Jalore Black Granite), used extensively in construction and memorial stones worldwide. Jalore also has a significant Jain heritage — the Swarnagiri Jain pilgrimage complex is nearby.</p>
<p>RedHeart delivers flowers across Jalore — Main Market, Jodhpur Road, Sanchore area, Bhinmal Road, and Station Road. We offer roses, marigolds, red hibiscus, and seasonal Rajasthan bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jalore, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jodhpur Road, Sanchore, Bhinmal Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, red hibiscus, marigolds, Sundha Mata puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Sundha Mata temple puja available in Jalore?",
        answer: "Yes, red hibiscus and marigold garlands for the Sundha Mata Shakti temple are available from Jalore. The temple is about 90 km from Jalore town in the Aravalli hills."
      },
      {
        question: "Can I get white roses for Jain Paryushan in Jalore?",
        answer: "Yes, Jalore has a significant Jain community. White roses and mogra for the Paryushan festival are available for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Jalore?",
        answer: "Yes, same-day delivery is available across Jalore for orders placed before 3 PM."
      }
    ]
  },

  "damoh": {
    cityName: "Damoh",
    metaTitle: "Flower Delivery in Damoh | Vindhya MP | RedHeart",
    metaDescription: "Order flowers in Damoh, Madhya Pradesh. Same-day delivery near Singorgarh Fort & across Damoh. From ₹399.",
    h1: "Online Flower Delivery in Damoh",
    metaKeyword: "flower delivery damoh, online flowers damoh madhya pradesh, florist damoh, flowers damoh vindhya ken river bundeli",
    footerContent: `
<h2>Flower Delivery in Damoh — Vindhya Plateau's Bundeli Heritage Between the Ken and Son</h2>
<p>Damoh, in the Vindhya Range of northern Madhya Pradesh, is the headquarters of Damoh district — an area in the culturally rich Bundeli zone where the Ken River flows to join the Yamuna. The Singorgarh Fort (a rugged medieval fort on a rocky hill) and the Nohta Shiva temple (a beautiful Parmara-era temple with intricately carved sculptures) are architectural landmarks. The Damoh area is part of the Panna National Park buffer zone and is in the Ken-Betwa river link project corridor — one of India's most debated river-linking schemes. Bundeli folk culture — the Alha-Udal heroic ballads, Rai dance, and Charkha folk music — are central to Damoh's cultural life.</p>
<p>RedHeart delivers flowers across Damoh — Main Market, Sagar Road, Jabalpur Road, Hatta area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Damoh, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Sagar Road, Jabalpur Road, Hatta area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Bundelkhand bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Diwali available in Damoh?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Damoh for same-day delivery."
      },
      {
        question: "Can I send birthday flowers to Damoh?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Damoh for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Damoh?",
        answer: "Yes, same-day delivery is available across Damoh for orders placed before 3 PM."
      }
    ]
  },

  "narsinghpur": {
    cityName: "Narsinghpur",
    metaTitle: "Flower Delivery in Narsinghpur | Narmada MP | RedHeart",
    metaDescription: "Order flowers in Narsinghpur, Madhya Pradesh. Same-day delivery near Barman Ghat & across Narsinghpur. From ₹399.",
    h1: "Online Flower Delivery in Narsinghpur",
    metaKeyword: "flower delivery narsinghpur, online flowers narsinghpur madhya pradesh, florist narsinghpur, flowers narsinghpur narmada sugarcane mp",
    footerContent: `
<h2>Flower Delivery in Narsinghpur — Narmada's Sugarcane Paradise on the Central India Plateau</h2>
<p>Narsinghpur, in the Narmada valley of central Madhya Pradesh, is one of India's premier sugarcane-producing districts — the fertile alluvial plains around Narsinghpur town support sugar mills that supply central India. The Barman Ghat (a sacred Narmada ghat on the river's north bank at the Barman village) is an important pilgrimage site — the ghat's Brahma Ghat and the Narsingh temple give Narsinghpur its name (literally "city of Narsingh/Narasimha — the lion-headed avatar of Vishnu"). The Gadarwara town in Narsinghpur district is known as the place where Swami Brahmananda Saraswati (the Maharishi Mahesh Yogi's guru) was born.</p>
<p>RedHeart delivers flowers across Narsinghpur — Main Market, Jabalpur Road, Bhopal Road, Gadarwara area, and Station Road. We offer roses, lotus, marigolds, and seasonal Narmada valley bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narsinghpur, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Jabalpur Road, Bhopal Road, Gadarwara, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, lotus, marigolds, seasonal Narmada bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Narmada puja available in Narsinghpur?",
        answer: "Yes, lotus and marigold for the Narmada ghat puja at Barman Ghat are available from Narsinghpur. The ghat is about 20 km from the town."
      },
      {
        question: "Can I get flowers for Diwali in Narsinghpur?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Narsinghpur for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Narsinghpur?",
        answer: "Yes, same-day delivery is available across Narsinghpur for orders placed before 3 PM."
      }
    ]
  },

  "seoni": {
    cityName: "Seoni",
    metaTitle: "Flower Delivery in Seoni | Jungle Book MP | RedHeart",
    metaDescription: "Order flowers in Seoni, Madhya Pradesh. Same-day delivery near Pench tiger reserve & across Seoni. From ₹399.",
    h1: "Online Flower Delivery in Seoni",
    metaKeyword: "flower delivery seoni, online flowers seoni madhya pradesh, florist seoni, flowers seoni pench jungle book mowgli",
    footerContent: `
<h2>Flower Delivery in Seoni — Mowgli's Homeland in the Heart of the Jungle Book's Seeonee Hills</h2>
<p>Seoni, in the Satpura foothills of central Madhya Pradesh, is the real-world location that Rudyard Kipling used as the setting for "The Jungle Book" — the Seeonee Hills (Seoni) are where Mowgli, Shere Khan, Baloo, and Bagheera had their adventures. The Pench National Park (straddling Seoni and Chhindwara districts) is one of India's premier tiger reserves and the most authentically "Jungle Book" safari experience in the world. Seoni was the colonial-era headquarters of the Central Provinces administration, and the city has a notable heritage of Victorian-era bungalows and churches. The area produces teak from its forests, and the Seoni district's wainganga tributary forests are biodiversity-rich.</p>
<p>RedHeart delivers flowers across Seoni — Main Market, Nagpur Road, Jabalpur Road, Chhapara area, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Seoni, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Nagpur Road, Jabalpur Road, Chhapara, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, forest flowers, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Pench Tiger Reserve jungle lodge stay from Seoni?",
        answer: "Yes, Pench tiger safari lodges are reachable from Seoni. A flower bouquet for an anniversary in the jungle is available — we deliver to Seoni and can coordinate with lodges."
      },
      {
        question: "Are flowers for Diwali available in Seoni?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Seoni for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Seoni?",
        answer: "Yes, same-day delivery is available across Seoni for orders placed before 3 PM."
      }
    ]
  },

  "balaghat": {
    cityName: "Balaghat",
    metaTitle: "Flower Delivery in Balaghat | Copper Country MP | RedHeart",
    metaDescription: "Order flowers in Balaghat, Madhya Pradesh. Same-day delivery near Kanha national park & across Balaghat. From ₹399.",
    h1: "Online Flower Delivery in Balaghat",
    metaKeyword: "flower delivery balaghat, online flowers balaghat madhya pradesh, florist balaghat, flowers balaghat kanha copper wainganga gond",
    footerContent: `
<h2>Flower Delivery in Balaghat — India's Copper Capital Next to Kanha's Tiger Forests</h2>
<p>Balaghat, in the far southeastern corner of Madhya Pradesh on the Maharashtra and Chhattisgarh borders, is India's copper capital — the Malanjkhand copper mine (MECL/HCL) in Balaghat district is Asia's largest copper deposit and one of the world's most significant copper mining areas. The district's Wainganga River valley has rich agricultural land and extensive sal-teak forests. The Kanha National Park's eastern buffer zone is in Balaghat district — one of the best tiger viewing areas in India. Balaghat's Gond tribal communities have maintained a distinct cultural identity with their distinctive ceremonial dance traditions and kosa silk weaving.</p>
<p>RedHeart delivers flowers across Balaghat — Main Market, Seoni Road, Jabalpur Road, Gondia Road, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Balaghat, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Seoni Road, Jabalpur Road, Gondia Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal forest bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for a Kanha Tiger Reserve lodge anniversary from Balaghat?",
        answer: "Yes, Kanha's buffer zone lodges are accessible from Balaghat. A flower arrangement for your safari lodge anniversary or romantic stay can be delivered from Balaghat."
      },
      {
        question: "Are corporate gifting flowers available for Malanjkhand mine offices in Balaghat?",
        answer: "Yes, corporate flower arrangements for office occasions at the Malanjkhand Copper Project and mine headquarters are available in Balaghat."
      },
      {
        question: "Do you deliver flowers same day in Balaghat?",
        answer: "Yes, same-day delivery is available across Balaghat for orders placed before 3 PM."
      }
    ]
  },

  "shivpuri": {
    cityName: "Shivpuri",
    metaTitle: "Flower Delivery in Shivpuri | Madhya Pradesh | RedHeart",
    metaDescription: "Order flowers in Shivpuri, Madhya Pradesh. Same-day delivery near Madhav National Park & across Shivpuri. From ₹399.",
    h1: "Online Flower Delivery in Shivpuri",
    metaKeyword: "flower delivery shivpuri, online flowers shivpuri madhya pradesh, florist shivpuri, flowers shivpuri madhav national park scindia",
    footerContent: `
<h2>Flower Delivery in Shivpuri — The Scindia Summer Capital and Madhav National Park's Cheetah Legacy</h2>
<p>Shivpuri, in the northern Madhya Pradesh plateau, was the summer capital of the Gwalior-based Scindia dynasty — one of the most powerful Maratha princely families. The Madhav National Park (where the last Indian cheetahs were hunted to extinction in 1947) surrounds the city, and the two artificial lakes (Sakhya Sagar and Madhav Sagar) within the park are now used for boating and wildlife tourism. The magnificent Scindia Chhatris (19th century memorial pavilions of the Scindia rulers) at Shivpuri are architectural gems combining Mughal and Rajput styles. Shivpuri also has the historic Bhimsen Talaab and various Shiva temples that give the city its spiritual character.</p>
<p>RedHeart delivers flowers across Shivpuri — Main Market, Gwalior Road, Jhansi Road, Narwar Road, and Station Road. Our range includes roses, marigolds, seasonal MP bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shivpuri, Madhya Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Gwalior Road, Jhansi Road, Narwar Road, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal MP bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get flowers for Madhav National Park boating trips in Shivpuri?",
        answer: "Yes, flower arrangements for romantic lake boating evenings on Madhav Sagar or Sakhya Sagar are available from Shivpuri."
      },
      {
        question: "Are flowers for Diwali available in Shivpuri?",
        answer: "Yes, Diwali marigold arrangements and festive bouquets are available in Shivpuri for same-day delivery."
      },
      {
        question: "Do you deliver flowers same day in Shivpuri?",
        answer: "Yes, same-day delivery is available across Shivpuri for orders placed before 3 PM."
      }
    ]
  },

  "hoshiarpur": {
    cityName: "Hoshiarpur",
    metaTitle: "Flower Delivery in Hoshiarpur | Sub-Mountain Punjab | RedHeart",
    metaDescription: "Order flowers in Hoshiarpur, Punjab. Same-day delivery near Naina Devi hills & across Hoshiarpur. From ₹399.",
    h1: "Online Flower Delivery in Hoshiarpur",
    metaKeyword: "flower delivery hoshiarpur, online flowers hoshiarpur punjab, florist hoshiarpur, flowers hoshiarpur shivalik hills dasuya",
    footerContent: `
<h2>Flower Delivery in Hoshiarpur — Punjab's Sub-Mountain Green Belt at the Shivalik Foothills</h2>
<p>Hoshiarpur, in the sub-mountain region of northeastern Punjab where the plains meet the Shivalik hills, is one of Punjab's most scenically beautiful districts. The Shivalik range creates a distinctive micro-climate and landscape — the area has rivers (Bein, Swan, and Soan) emerging from the hills, forested Shivalik slopes, and fertile foothill plains. Hoshiarpur district has the highest proportion of Scheduled Caste population in Punjab. The district is known for producing fine wood furniture (particularly rosewood and walnut from the Shivalik forests). The Chintpurni temple (one of the 51 Shakti peethas) is about 60 km from Hoshiarpur and is accessible through the district's hill roads.</p>
<p>RedHeart delivers flowers across Hoshiarpur — Main Market, Mukerian Road, Dasuya area, Tanda area, and Station Road. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hoshiarpur, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Market, Mukerian Road, Dasuya, Tanda area, Station Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, gerberas, seasonal Punjab bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Baisakhi available in Hoshiarpur?",
        answer: "Yes, Baisakhi is a major harvest festival in Hoshiarpur's Punjabi community. Marigold garlands and seasonal bouquets for the bhangra festival are available."
      },
      {
        question: "Can I get flowers for a birthday in Hoshiarpur?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Hoshiarpur for orders placed before 3 PM."
      },
      {
        question: "Do you deliver flowers same day in Hoshiarpur?",
        answer: "Yes, same-day delivery is available across Hoshiarpur for orders placed before 3 PM."
      }
    ]
  },

  "tarn-taran": {
    cityName: "Tarn Taran",
    metaTitle: "Flower Delivery in Tarn Taran | Sikh Holy City | RedHeart",
    metaDescription: "Order flowers in Tarn Taran, Punjab. Same-day delivery near Tarn Taran Gurudwara & across Tarn Taran. From ₹399.",
    h1: "Online Flower Delivery in Tarn Taran",
    metaKeyword: "flower delivery tarn taran, online flowers tarn taran punjab, florist tarn taran, flowers tarn taran gurudwara guru arjan dev",
    footerContent: `
<h2>Flower Delivery in Tarn Taran — The Sacred Sarovar Built by Guru Arjan Dev Ji</h2>
<p>Tarn Taran Sahib, in the Majha region of Punjab between Amritsar and the India-Pakistan border, is one of Sikhism's most sacred sites — the Tarn Taran Gurudwara was established by Guru Arjan Dev Ji (the fifth Sikh Guru and compiler of the Adi Granth) with a large sacred tank (sarovar) renowned for its curative properties. The name "Tarn Taran" means "the boat that carries across" — an allusion to spiritual liberation through the Guru's grace. The city is close to the international border with Pakistan, and the Khalra area (known for the human rights activist Jaswant Singh Khalra) is nearby. The district borders Pakistan's Lahore region, giving it strategic and historical significance in Partition history.</p>
<p>RedHeart delivers flowers across Tarn Taran — Gurudwara Road, Amritsar Road, Patti area, Khadur Sahib, and Main Market. Our range includes roses, marigolds, gerberas, and seasonal Punjab bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tarn Taran, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gurudwara Road, Amritsar Road, Patti area, Khadur Sahib, Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, roses, Gurudwara decoration flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Gurupurab celebrations available in Tarn Taran?",
        answer: "Yes, Guru Arjan Dev Ji Gurupurab is an important celebration in Tarn Taran. Marigold garlands and festive bouquets for the Gurudwara samagam are available."
      },
      {
        question: "Can I get flowers for Baisakhi in Tarn Taran?",
        answer: "Yes, Baisakhi is celebrated with special significance in Tarn Taran (near Anandpur Sahib's Khalsa Panth founding). Marigold garlands and seasonal bouquets are available."
      },
      {
        question: "Do you deliver flowers same day in Tarn Taran?",
        answer: "Yes, same-day delivery is available across Tarn Taran for orders placed before 3 PM."
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
