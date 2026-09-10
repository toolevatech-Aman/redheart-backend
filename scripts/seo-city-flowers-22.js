// Batch 22 — 15 Rajasthan cities: Bharatpur, Sawai Madhopur, Tonk, Nagaur, Jhunjhunu,
// Churu, Sri Ganganagar, Hanumangarh, Barmer, Jaisalmer, Chittorgarh,
// Bundi, Pali, Dholpur, Karauli

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "bharatpur": {
    cityName: "Bharatpur",
    metaTitle: "Flower Delivery in Bharatpur | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Bharatpur, Rajasthan. Same-day delivery to Loha Mandi, Civil Lines & all areas. Near Keoladeo Ghana Bird Sanctuary. From ₹399.",
    h1: "Online Flower Delivery in Bharatpur",
    metaKeyword: "flower delivery bharatpur, online flowers bharatpur rajasthan, florist bharatpur, flowers bharatpur keoladeo",
    footerContent: `
<h2>Flower Delivery in Bharatpur — The Eastern Gateway of Rajasthan</h2>
<p>Bharatpur, in eastern Rajasthan near the borders of Uttar Pradesh and Haryana, is best known internationally for the Keoladeo Ghana National Park — a UNESCO World Heritage Site and one of Asia's finest bird sanctuaries. The wetlands of Keoladeo host Siberian cranes, painted storks, and hundreds of migratory species every winter, drawing birdwatchers from across the world. Historically, Bharatpur was the capital of the Jat Bharatpur State, whose Lohagarh Fort (meaning Iron Fort) famously repelled two separate British attacks in the early 19th century and remains one of the few unconquered forts of the colonial era. The city is a vibrant market town with a strong agricultural belt growing mustard, wheat, and vegetables in the surrounding Brij region.</p>
<p>RedHeart delivers flowers across Bharatpur — Loha Mandi, Civil Lines, Kumhera Gate, and Mathura Road. We offer roses, marigold garlands, seasonal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bharatpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Loha Mandi, Civil Lines, Kumhera Gate, Mathura Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Keoladeo area hotels in Bharatpur?",
        answer: "Yes, hotels near the Keoladeo National Park are within our delivery coverage in Bharatpur. Perfect for romantic getaways and special occasion surprises."
      },
      {
        question: "Can I order flowers for a Brij Holi celebration in Bharatpur?",
        answer: "Bharatpur is in the Brij region and Holi here is a major event. Colourful seasonal flowers and marigold arrangements are popular around Holi season — order a day ahead during peak demand."
      },
      {
        question: "Are flowers available in Bharatpur for Janmashtami?",
        answer: "Yes, Bharatpur's proximity to Mathura and Vrindavan means Janmashtami is celebrated with great devotion. Flower offerings and decorative arrangements are available for this festival."
      }
    ]
  },

  "sawai-madhopur": {
    cityName: "Sawai Madhopur",
    metaTitle: "Flower Delivery in Sawai Madhopur | RedHeart",
    metaDescription: "Order fresh flowers in Sawai Madhopur, Rajasthan. Same-day delivery near Ranthambore National Park and across town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Sawai Madhopur",
    metaKeyword: "flower delivery sawai madhopur, online flowers sawai madhopur, florist ranthambore, flowers sawai madhopur rajasthan",
    footerContent: `
<h2>Flower Delivery in Sawai Madhopur — Tiger Country's Tender Side</h2>
<p>Sawai Madhopur, a district town in eastern Rajasthan at the edge of the Vindhya and Aravalli hill systems, is internationally recognised as the gateway to the Ranthambore National Park — one of India's most celebrated tiger reserves. The Ranthambore Fort, a UNESCO-listed site within the national park, and the ancient Ganesh temple here draw pilgrims and history lovers alike. The town itself is a lively junction city where Rajasthani and Hadoti cultures blend. Its growing tourism economy (with luxury resort brands like Aman, Taj, and Oberoi all present near Ranthambore) brings a cosmopolitan clientele who appreciate fine experiences, including fresh flowers for special celebrations at forest lodges.</p>
<p>RedHeart delivers flowers across Sawai Madhopur — Ranthambore Road, Civil Lines, Khandar Road, and town centre. We offer roses, seasonal bouquets, marigolds, and exotic arrangements. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sawai Madhopur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Ranthambore Road, Civil Lines, Khandar Road, town centre</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red roses, orchid arrangements, seasonal luxury bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can you deliver flowers to Ranthambore resort hotels for anniversary surprises?",
        answer: "Yes, we coordinate with luxury hotels near Ranthambore for in-room flower arrangements. Please mention the hotel name and check-in date when ordering — we'll ensure fresh delivery to your room."
      },
      {
        question: "Are flowers available for Ganesh puja at Ranthambore Fort temple?",
        answer: "Yes, Ganesh offerings including marigold garlands and red hibiscus are popular at the Ranthambore Ganesh temple. We deliver these in Sawai Madhopur town for pilgrims to carry up."
      },
      {
        question: "What is the minimum order for flower delivery in Sawai Madhopur?",
        answer: "Our minimum order starts at ₹399 in Sawai Madhopur. No additional minimum is required and delivery charges are transparently shown at checkout."
      }
    ]
  },

  "tonk": {
    cityName: "Tonk",
    metaTitle: "Flower Delivery in Tonk | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Tonk, Rajasthan. Same-day delivery of roses, bouquets & seasonal flowers across Tonk town. Starting from ₹399.",
    h1: "Online Flower Delivery in Tonk",
    metaKeyword: "flower delivery tonk, online flowers tonk rajasthan, florist tonk, flowers tonk nawab city",
    footerContent: `
<h2>Flower Delivery in Tonk — Nawab City's Fragrant Legacy</h2>
<p>Tonk, a historic town in central Rajasthan on the Banas River, was once the only Muslim nawab-ruled state in Rajasthan — a distinction that gave it a distinct cultural overlay of Mughal aesthetics, Urdu literature, and Persian architectural influence. The Sunehri Kothi (Golden Mansion), with its elaborate mirror-work interior, is Tonk's most dazzling heritage building. The city's Arabic and Persian library (Maulana Abul Kalam Azad Arabic Library) is one of India's most important repositories of Islamic manuscripts. Today, Tonk is a pleasant district town with a diverse Hindu-Muslim population living in an old-world coexistence. Its bazaars carry the spices, textiles, and floral traditions of both communities.</p>
<p>RedHeart delivers flowers across Tonk — Niwai Road, Uniara Gate, Civil Lines, and Todaraisingh Road. We offer roses, marigolds, seasonal mixed bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tonk, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Niwai Road, Uniara Gate, Civil Lines, Todaraisingh Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, fragrant jasmine, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers in Tonk for Eid celebrations?",
        answer: "Yes, floral arrangements for Eid are popular in Tonk's Muslim community. Rose bouquets and fragrant jasmine arrangements are particularly favoured for Eid gifting and home decoration."
      },
      {
        question: "Do you deliver flowers to Civil Lines area in Tonk?",
        answer: "Yes, Civil Lines is one of our primary delivery zones in Tonk. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "What flowers are popular in Tonk for weddings?",
        answer: "Marigold torans, rose varmala, and jasmine garlands are traditional wedding flowers in Tonk. Both Hindu and Muslim wedding flowers are available from our catalogue."
      }
    ]
  },

  "nagaur": {
    cityName: "Nagaur",
    metaTitle: "Flower Delivery in Nagaur | Same Day | RedHeart",
    metaDescription: "Order flowers online in Nagaur, Rajasthan. Same-day delivery of roses, bouquets & seasonal flowers across Nagaur town. Starting from ₹399.",
    h1: "Online Flower Delivery in Nagaur",
    metaKeyword: "flower delivery nagaur, online flowers nagaur rajasthan, florist nagaur, flowers nagaur cattle fair",
    footerContent: `
<h2>Flower Delivery in Nagaur — The Fort City of Central Rajasthan</h2>
<p>Nagaur, in the arid heartland of central Rajasthan between Jodhpur and Bikaner, is a city of historical grandeur centred on its magnificent Nagaur Fort — one of Rajasthan's most impressive but least-touristed medieval complexes. The Nagaur Fort, with its palaces, mosques, and baolis (stepwells), saw patronage from the Delhi Sultanate, Mughals, Rathores, and Marwari nobles. Nagaur is also world-famous for its annual Nagaur Cattle Fair — one of India's largest livestock fairs after Pushkar — where camels, horses, bulls, and cattle are traded in a colourful spectacle. The city's economy is driven by agriculture, livestock, and the crafts of its Meo and Rajput communities.</p>
<p>RedHeart delivers flowers across Nagaur — Fort Road, Civil Lines, Kuchaman Road, and Merta Road. We offer roses, marigolds, seasonal Rajasthani bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fort Road, Civil Lines, Kuchaman Road, Merta Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, seasonal desert bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Nagaur for weddings and special occasions?",
        answer: "Yes, wedding garlands, varmala sets, and decorative bouquets are available in Nagaur. Rajputana-style floral arrangements are popular for traditional ceremonies in this region."
      },
      {
        question: "Can I send a flower gift to someone near Nagaur Fort?",
        answer: "Yes, the Fort Road area is within our delivery coverage. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Are flowers available during the Nagaur Cattle Fair season?",
        answer: "Yes, we maintain full delivery operations during the Nagaur Cattle Fair. If you are visiting for the fair, pre-order flowers to your accommodation for a special occasion."
      }
    ]
  },

  "jhunjhunu": {
    cityName: "Jhunjhunu",
    metaTitle: "Flower Delivery in Jhunjhunu | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Jhunjhunu, Rajasthan. Same-day delivery of roses, bouquets & seasonal flowers across Jhunjhunu Shekhawati region. From ₹399.",
    h1: "Online Flower Delivery in Jhunjhunu",
    metaKeyword: "flower delivery jhunjhunu, online flowers jhunjhunu rajasthan, florist jhunjhunu shekhawati, flowers jhunjhunu",
    footerContent: `
<h2>Flower Delivery in Jhunjhunu — Shekhawati's Painted Town</h2>
<p>Jhunjhunu, the headquarters of the Shekhawati region of northern Rajasthan, is a city celebrated for its extraordinarily painted havelis — merchant mansions from the 18th and 19th centuries whose exterior and interior walls are covered in intricate frescoes depicting mythological scenes, portraits of the British Raj, and folk stories. The Shekhawati region earned its wealth from Marwari merchant communities who traded across India; many of India's biggest business families — the Birlas, Poddars, Ruias — trace their origins here. The Badalgarh Fort and the Rani Sati temple (dedicated to a revered female figure) draw thousands of devotees and heritage tourists. Jhunjhunu is also known for its strong NRI community in the Gulf and UK who support the economy through remittances.</p>
<p>RedHeart delivers flowers across Jhunjhunu — Nehru Bazar, Collector Road, Civil Lines, and Churu Road. Our range includes roses, marigolds, seasonal bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jhunjhunu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nehru Bazar, Collector Road, Civil Lines, Churu Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold torans, wedding garlands, seasonal Rajasthani bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for the Rani Sati temple puja in Jhunjhunu?",
        answer: "Yes, puja flowers for the Rani Sati temple are among our popular items in Jhunjhunu. Marigold garlands and rose offerings are available for both home puja and temple visits."
      },
      {
        question: "Are wedding flower arrangements available in Jhunjhunu?",
        answer: "Yes, Marwari wedding flowers — including elaborate varmala garlands, door torans, and rose bed decorations — are available in Jhunjhunu. Large orders should be placed 2–3 days in advance."
      },
      {
        question: "Do you deliver flowers in Mandawa or other Shekhawati towns near Jhunjhunu?",
        answer: "Mandawa (50 km from Jhunjhunu) may be accessible on request. Please call our support for extended delivery outside Jhunjhunu municipality. Nearby Nawalgarh and Fatehpur are occasionally covered too."
      }
    ]
  },

  "churu": {
    cityName: "Churu",
    metaTitle: "Flower Delivery in Churu | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Churu, Rajasthan. Same-day delivery of roses, bouquets & seasonal flowers across Churu town and surrounding areas. From ₹399.",
    h1: "Online Flower Delivery in Churu",
    metaKeyword: "flower delivery churu, online flowers churu rajasthan, florist churu, flowers churu shekhawati",
    footerContent: `
<h2>Flower Delivery in Churu — Desert Town of Extreme Temperatures and Warm Hearts</h2>
<p>Churu, a district town in northern Rajasthan, holds the extreme distinction of having some of India's hottest summers (regularly hitting 50°C in May) and bone-chilling winters that occasionally see frost. Despite this climatic extremity, Churu is a prosperous agricultural and trading city within the Shekhawati belt — famous for its painted havelis, particularly the Surana Double Haveli and the decorative merchant mansions of the old town. The city's social fabric is dominated by Rajput, Bishnoi, and Jat communities, with a significant Marwari diaspora that maintains close cultural ties to the homeland. Teej, Gangaur, and Holi are celebrated with bright colours and fresh flowers.</p>
<p>RedHeart delivers flowers across Churu — Bikaner Road, Sujangarh Road, Civil Lines, and Sadulpur Road. Our range includes roses, marigolds, seasonal Rajasthani bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Churu, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bikaner Road, Sujangarh Road, Civil Lines, Sadulpur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, Teej & Gangaur festival flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "How do you keep flowers fresh in Churu's extreme heat?",
        answer: "We use cold-chain packaging for all flower deliveries in Churu. Flowers are packed in insulated boxes with cool packs during summer months to ensure they arrive fresh even in extreme heat."
      },
      {
        question: "Can I order flowers for Teej or Gangaur in Churu?",
        answer: "Yes, Teej and Gangaur are important festivals in Churu with strong floral traditions — marigolds, jasmine, and seasonal blooms are popular for these women-centric festivals."
      },
      {
        question: "Do you deliver to Sujangarh near Churu?",
        answer: "Sujangarh (about 50 km from Churu) may be accessible on request. Please contact our support team for delivery to Sujangarh or other distant towns in the district."
      }
    ]
  },

  "sri-ganganagar": {
    cityName: "Sri Ganganagar",
    metaTitle: "Flower Delivery in Sri Ganganagar | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Sri Ganganagar, Rajasthan. Same-day delivery of roses, bouquets & seasonal flowers across Ganganagar. From ₹399.",
    h1: "Online Flower Delivery in Sri Ganganagar",
    metaKeyword: "flower delivery sri ganganagar, online flowers ganganagar rajasthan, florist ganganagar, flowers ganganagar punjab border",
    footerContent: `
<h2>Flower Delivery in Sri Ganganagar — The Granary of Rajasthan</h2>
<p>Sri Ganganagar, in the extreme northwest corner of Rajasthan bordering Punjab and Pakistan, was founded in 1927 by Maharaja Ganga Singh of Bikaner who brought the Ganga Canal from the Punjab rivers to transform what was barren desert into fertile farmland. The result was extraordinary: Sri Ganganagar today is one of India's most productive agricultural districts, growing wheat, cotton, groundnut, and citrus fruits that are traded across North India. The city has a strong Sikh and Jat community alongside Rajasthani Hindus, and the celebrations of Baisakhi, Lohri, and Gurpurabs are as prominent as Diwali and Holi. The city's green, canal-irrigated landscape is a stark contrast to the surrounding Thar Desert.</p>
<p>RedHeart delivers flowers across Sri Ganganagar — Circular Road, Amarpura, Mandi area, and Padampur Road. We offer roses, marigold garlands, seasonal bouquets, and potted plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sri Ganganagar, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Circular Road, Amarpura, Mandi area, Padampur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, Baisakhi-season bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Baisakhi or Lohri in Sri Ganganagar?",
        answer: "Yes, Sri Ganganagar's Sikh and Punjabi community celebrates Baisakhi and Lohri enthusiastically. Marigold garlands and colourful mixed bouquets are popular during these harvest festivals."
      },
      {
        question: "Do you deliver flowers to agricultural colonies (colonies) near Sri Ganganagar?",
        answer: "We deliver across Sri Ganganagar town. Some rural colony areas further from the city may have limited coverage — please check at checkout or call our support."
      },
      {
        question: "Are flowers for Gurpurab (Sikh festivals) available in Sri Ganganagar?",
        answer: "Yes, marigold and rose garlands for Gurpurab gurdwara decorations and home celebrations are available. These are among our popular items in Sri Ganganagar's Sikh community."
      }
    ]
  },

  "hanumangarh": {
    cityName: "Hanumangarh",
    metaTitle: "Flower Delivery in Hanumangarh | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Hanumangarh, Rajasthan. Same-day delivery of roses, bouquets & seasonal flowers across Hanumangarh Junction & town. From ₹399.",
    h1: "Online Flower Delivery in Hanumangarh",
    metaKeyword: "flower delivery hanumangarh, online flowers hanumangarh rajasthan, florist hanumangarh, flowers hanumangarh junction",
    footerContent: `
<h2>Flower Delivery in Hanumangarh — Ancient Ghaggar Lands in Full Bloom</h2>
<p>Hanumangarh, in northern Rajasthan on the banks of the seasonal Ghaggar River (believed to be the ancient Saraswati), is a city that bridges Rajasthan and Punjab culturally and geographically. Home to the Kalibangan archaeological site — one of India's most significant Indus Valley Civilisation excavation sites — Hanumangarh stands on land inhabited for over 5,000 years. The city is divided between Hanumangarh Junction (the railway hub and commercial centre) and Hanumangarh Town (the older settlement). Its mixed Punjabi-Rajput-Bishnoi population celebrates Holi, Diwali, Baisakhi, and local melas with equal enthusiasm, and the phool mandi near the railway station is one of the region's most active flower markets.</p>
<p>RedHeart delivers flowers across Hanumangarh — Junction area, Town, Rawatsar Road, and Suratgarh Road. Our range includes roses, marigolds, seasonal bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hanumangarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Junction, Town, Rawatsar Road, Suratgarh Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, seasonal Rajasthani bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver to both Hanumangarh Junction and Hanumangarh Town?",
        answer: "Yes, both Junction and Town areas of Hanumangarh are covered under our delivery network. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Can I order flowers for Holi celebrations in Hanumangarh?",
        answer: "Yes, Holi is celebrated vibrantly in Hanumangarh's mixed Punjabi-Rajput community. Colourful floral bouquets and marigold arrangements are popular for gifting before the festival."
      },
      {
        question: "Are flowers available for delivery in Hanumangarh during winter?",
        answer: "Yes, we deliver year-round in Hanumangarh. Roses and seasonal winter flowers like chrysanthemums and marigolds are particularly fresh and fragrant during the cooler months."
      }
    ]
  },

  "barmer": {
    cityName: "Barmer",
    metaTitle: "Flower Delivery in Barmer | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Barmer, Rajasthan. Same-day delivery of roses, bouquets & desert blooms across Barmer town. Starting from ₹399.",
    h1: "Online Flower Delivery in Barmer",
    metaKeyword: "flower delivery barmer, online flowers barmer rajasthan, florist barmer, flowers barmer desert city",
    footerContent: `
<h2>Flower Delivery in Barmer — Desert Colours in the Land of Embroidery</h2>
<p>Barmer, deep in the Thar Desert of western Rajasthan near the Pakistan border, is a city celebrated for its extraordinary craft heritage. The Barmer embroidery — elaborate hand-stitched patterns on colourful fabric — and the Ajrakh block printing tradition are recognised globally and sold in craft shops across India and abroad. The city is also an oil-rich district: the Cairn India oil fields near Barmer have transformed the local economy significantly. Despite its harsh desert environment, Barmer's cultural spirit is anything but harsh — its festivals, particularly the Thar Festival (a state government celebration of desert folk culture), bring dancers, musicians, and craftspeople from across the region in a burst of colour, sound, and fragrance.</p>
<p>RedHeart delivers flowers across Barmer — Civil Lines, Sadar Bazar, Jalore Road, and Shivbari Road. We offer roses, marigolds, seasonal bouquets, and hardy desert-appropriate plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barmer, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Sadar Bazar, Jalore Road, Shivbari Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, desert-hardy plants, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can flowers survive delivery in Barmer's extreme desert heat?",
        answer: "Yes, we use insulated cold-pack packaging for all Barmer deliveries. Roses and carnations are packed to stay fresh for 6–8 hours after dispatch, ensuring petal-fresh delivery."
      },
      {
        question: "Are cactus or succulent plants available as gifts in Barmer?",
        answer: "Yes, cacti and succulents are popular gifting options in Barmer's desert environment. They make practical, long-lasting gifts that thrive in the local climate."
      },
      {
        question: "Can I order flowers for the Thar Festival in Barmer?",
        answer: "Yes, colourful floral arrangements and festival bouquets are available during the Thar Festival season. We recommend ordering in advance as demand is high during major cultural events."
      }
    ]
  },

  "jaisalmer": {
    cityName: "Jaisalmer",
    metaTitle: "Flower Delivery in Jaisalmer | Same Day | RedHeart",
    metaDescription: "Order flowers in Jaisalmer, Rajasthan. Fresh bouquets & desert blooms delivered to hotels, forts & residences. Starting ₹399.",
    h1: "Online Flower Delivery in Jaisalmer",
    metaKeyword: "flower delivery jaisalmer, online flowers jaisalmer rajasthan, florist jaisalmer golden city, flowers sam dunes jaisalmer",
    footerContent: `
<h2>Flower Delivery in Jaisalmer — Golden City, Blooming in the Thar</h2>
<p>Jaisalmer, the "Golden City" of Rajasthan, rises from the Thar Desert like a dream — its yellow sandstone Sonar Qila (Golden Fort, a UNESCO World Heritage Site) glowing like gold in the setting sun. This living fort, where people still reside inside its medieval walls, is one of India's most photographed heritage sites. The Sam Sand Dunes, the Kuldhara ghost village, and the camel safaris towards the Pakistan border make Jaisalmer one of Rajasthan's most iconic tourist destinations. The city has a booming luxury tourism economy with heritage hotels, desert camps, and boutique properties where guests celebrate anniversaries, honeymoons, and milestone trips surrounded by the magical Thar landscape — and nothing enhances such moments more than fresh blooms delivered right.</p>
<p>RedHeart delivers flowers across Jaisalmer — Amar Sagar Road, Shiv Road, Ramgarh Road, and tourist hotel belt. Our range includes roses, orchid arrangements, and exotic bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Jaisalmer, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Amar Sagar Road, Shiv Road, Ramgarh Road, hotel belt</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red roses, orchids, premium anniversary bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can you deliver flowers to a heritage hotel inside Jaisalmer Fort?",
        answer: "Yes, we deliver to heritage hotels and havelis inside Jaisalmer Fort. Please provide the property name and local contact at the hotel for smooth access through the fort gates."
      },
      {
        question: "Are flowers available for anniversary surprises at desert camps near Jaisalmer?",
        answer: "Yes, we deliver to desert camps and luxury tented properties near Sam Dunes and surrounding areas. Coordinate with us at least one day in advance for camp deliveries."
      },
      {
        question: "What flowers work best as gifts in Jaisalmer?",
        answer: "Premium roses, orchid boxes, and mixed exotic bouquets are most popular in Jaisalmer's tourism-driven economy. Cold-chain packaging ensures freshness despite the desert heat."
      }
    ]
  },

  "chittorgarh": {
    cityName: "Chittorgarh",
    metaTitle: "Flower Delivery in Chittorgarh | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Chittorgarh, Rajasthan. Same-day delivery near Chittorgarh Fort, town & surrounding areas. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Chittorgarh",
    metaKeyword: "flower delivery chittorgarh, online flowers chittorgarh rajasthan, florist chittorgarh fort, flowers mewar chittorgarh",
    footerContent: `
<h2>Flower Delivery in Chittorgarh — Blooms for the Pride of Mewar</h2>
<p>Chittorgarh (Chittor), in southern Rajasthan, is the site of one of India's most epic medieval fortresses — the Chittorgarh Fort, a UNESCO World Heritage Site sprawling over 700 acres atop a 180-metre hill. This was the capital of the Mewar kingdom and the setting of legendary stories of Rajput valour and sacrifice: Rani Padmini's jauhar (self-immolation), Maharana Pratap's resistance against Akbar, and the devotional poetry of Mirabai — all associated with Chittorgarh. The fort's towers (Vijay Stambha and Kirti Stambha), palaces, and temples make it one of Rajasthan's most spiritually and historically resonant sites. The modern city below the fort is a quiet market town with strong devotional and cultural traditions.</p>
<p>RedHeart delivers flowers across Chittorgarh — Town area, Fort Road, Civil Lines, and Bhilwara Road. We offer roses, marigolds, seasonal bouquets, and puja flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chittorgarh, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Town, Fort Road, Civil Lines, Bhilwara Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigold garlands, Mewar-style traditional bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Mirabai festival or other local celebrations in Chittorgarh?",
        answer: "Yes, devotional flower arrangements for Mirabai bhajans and Chittorgarh's cultural festivals are available. Marigold and rose offerings are traditional for such occasions."
      },
      {
        question: "Are flowers available near Chittorgarh Fort for tourist occasions?",
        answer: "Yes, we deliver to hotels and residences near the Chittorgarh Fort. Visitors often order anniversary or romantic bouquets during heritage stays in Chittorgarh."
      },
      {
        question: "What is the best flower to send as a gift in Chittorgarh?",
        answer: "Red roses are the most universally popular gift flower in Chittorgarh. Traditional Rajasthani occasions favour marigold garlands while modern gifting tends toward mixed orchid-rose arrangements."
      }
    ]
  },

  "bundi": {
    cityName: "Bundi",
    metaTitle: "Flower Delivery in Bundi | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Bundi, Rajasthan. Same-day delivery near Taragarh Fort, Nawal Sagar & all areas of Bundi. Starting ₹399.",
    h1: "Online Flower Delivery in Bundi",
    metaKeyword: "flower delivery bundi, online flowers bundi rajasthan, florist bundi, flowers bundi kota hadoti",
    footerContent: `
<h2>Flower Delivery in Bundi — A Step-Well Town Like No Other</h2>
<p>Bundi, nestled in a narrow valley in the Hadoti region of Rajasthan, is often called one of Rajasthan's best-kept secrets. Unlike the more famous Jaipur or Udaipur, Bundi has preserved its medieval character almost intact — from the Taragarh Fort looming over the hillside to the Bundi Palace whose frescoes are considered among Rajasthan's finest, and to the extraordinary baolis (step-wells) of which Bundi has over 50. The Nawal Sagar lake reflects the palace on its surface like a jewel. The English novelist Rudyard Kipling, who visited in the 19th century, was so enchanted that he called it one of the most colourful of all Indian cities. Today its step-wells and murals attract heritage lovers and artists from across the world.</p>
<p>RedHeart delivers flowers across Bundi — Nainwa Road, Kota Road, Chogan area, and Civil Lines. We offer roses, marigolds, seasonal bouquets, and decorative plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bundi, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nainwa Road, Kota Road, Chogan area, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, heritage-themed bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to a heritage hotel stay in Bundi?",
        answer: "Yes, Bundi has several beautiful heritage guesthouses and we deliver to them. A bouquet waiting in the room makes a wonderful surprise for heritage stays or anniversary trips."
      },
      {
        question: "Are flowers available near the Bundi Palace and Nawal Sagar?",
        answer: "Yes, the Chogan area near Nawal Sagar and the palace approach road are within our delivery zone in Bundi. Same-day delivery available before 3 PM."
      },
      {
        question: "What occasion flowers are popular in Bundi?",
        answer: "Birthday and anniversary roses are the most popular. During Dussehra (which Bundi celebrates with its own traditional processions), marigold and festive arrangements are in high demand."
      }
    ]
  },

  "pali": {
    cityName: "Pali",
    metaTitle: "Flower Delivery in Pali | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Pali, Rajasthan. Same-day delivery of roses, bouquets & seasonal flowers across Pali town. Starting from ₹399.",
    h1: "Online Flower Delivery in Pali",
    metaKeyword: "flower delivery pali, online flowers pali rajasthan, florist pali marwar, flowers pali textile city",
    footerContent: `
<h2>Flower Delivery in Pali — The Textile City of Marwar</h2>
<p>Pali, in western Rajasthan on the Bandi River, is one of the state's most industrially active cities — known as the "Textile City of Rajasthan" for its enormous spinning, weaving, and dyeing industry. The city's textile mills produce fabric that is traded across India, and the once-polluted Bandi River — now undergoing restoration — has been central to Pali's identity. Beyond industry, Pali has a deep Jain tradition: the Ranakpur Jain temple (one of the five holiest Jain temples in the world, featuring 1,444 individually carved marble pillars) is just 90 km away and draws Jains from across India through Pali. The city's community life is shaped by its Marwari trading families, Brahmin scholars, and artisan communities.</p>
<p>RedHeart delivers flowers across Pali — Sumerpur Road, Jalori Gate, Marwar Junction area, and Civil Lines. We offer roses, marigolds, seasonal bouquets, and white flowers for Jain occasions. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pali, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sumerpur Road, Jalori Gate, Marwar Junction area, Civil Lines</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, white flowers for Jain festivals, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order flowers for Paryushan (Jain festival) in Pali?",
        answer: "Yes, white roses, mogra (jasmine), and non-root flower arrangements are popular during Paryushan in Pali's Jain community. We are mindful of Jain floral traditions."
      },
      {
        question: "Do you deliver flowers to Marwar Junction area near Pali?",
        answer: "Yes, Marwar Junction and surrounding areas are covered in our extended delivery zone for Pali. Orders before 12 PM are recommended for same-day delivery to outer areas."
      },
      {
        question: "What are the most popular flower gifts in Pali?",
        answer: "Red roses are most popular for romantic occasions in Pali. Marigold torans for Diwali, and white flower arrangements for Paryushan are the most common festival choices."
      }
    ]
  },

  "dholpur": {
    cityName: "Dholpur",
    metaTitle: "Flower Delivery in Dholpur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Dholpur, Rajasthan. Same-day delivery of roses, bouquets & seasonal flowers across Dholpur town. Starting ₹399.",
    h1: "Online Flower Delivery in Dholpur",
    metaKeyword: "flower delivery dholpur, online flowers dholpur rajasthan, florist dholpur, flowers dholpur chambal",
    footerContent: `
<h2>Flower Delivery in Dholpur — The Red Stone City on the Chambal</h2>
<p>Dholpur, in southeastern Rajasthan on the banks of the Chambal River at the border of Uttar Pradesh, is historically significant as a princely state and for the red Dholpur sandstone that has been used in iconic Indian monuments — including Rashtrapati Bhavan and parts of New Delhi built by Edwin Lutyens. The city's Machkund Lake (where Lord Rama is said to have bathed) and the Dholpur Fort are heritage landmarks. Dholpur has a strong agricultural economy in the Chambal ravine belt, and its culture reflects the Braj-Rajputana blend of its geographic crossroads. Religious festivals and local melas are important social anchors for Dholpur's community.</p>
<p>RedHeart delivers flowers across Dholpur — Civil Lines, Rajakhera Road, Bari Road, and Machkund area. We offer roses, marigolds, carnations, and seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dholpur, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Rajakhera Road, Bari Road, Machkund area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, carnations, seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Civil Lines area in Dholpur?",
        answer: "Yes, Civil Lines is within our primary delivery zone in Dholpur. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Are puja flowers available in Dholpur for Machkund temple?",
        answer: "Yes, marigold garlands and devotional flower sets for Machkund temple are available in Dholpur. They can be delivered to your doorstep for you to carry to the temple."
      },
      {
        question: "Can I send a birthday flower bouquet to someone in Dholpur?",
        answer: "Absolutely. Birthday bouquets with roses, seasonal flowers, and personalised message cards are available for same-day delivery in Dholpur."
      }
    ]
  },

  "karauli": {
    cityName: "Karauli",
    metaTitle: "Flower Delivery in Karauli | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Karauli, Rajasthan. Same-day delivery near Kaila Devi temple and across Karauli town. Starting from ₹399.",
    h1: "Online Flower Delivery in Karauli",
    metaKeyword: "flower delivery karauli, online flowers karauli rajasthan, florist karauli, flowers karauli devi temple",
    footerContent: `
<h2>Flower Delivery in Karauli — The City of the Red Stone Fort and Kaila Devi</h2>
<p>Karauli, in eastern Rajasthan not far from Bharatpur, is a small but historically vivid town known for its red sandstone fort palace — one of the finest examples of Rajput architecture with detailed jharokhas (ornate balconies) and painted palace interiors. But Karauli is perhaps most famous for the Kaila Devi temple — one of Rajasthan's most powerful and visited Shakti shrines, located in the Karauli district and attracting enormous pilgrimages especially during the Chaitra Navratri. The Karauli royal family, descendants of Lord Krishna's lineage by tradition, have maintained the Madan Mohanji temple in the city — making Karauli a place of both Vaishnavite and Shakti devotional significance.</p>
<p>RedHeart delivers flowers across Karauli — Hindaun City area, Sapotra Road, Nadoti Road, and Karauli town. Our range includes marigolds, roses, seasonal bouquets, and puja flower sets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karauli, Rajasthan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hindaun City, Sapotra Road, Nadoti Road, Karauli town</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, roses, Navratri puja flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order puja flowers for the Kaila Devi temple in Karauli?",
        answer: "Yes, marigold garlands, red roses, and devotional flower sets for Kaila Devi puja are available in Karauli. They can be delivered fresh before your temple visit."
      },
      {
        question: "Are flowers available during Chaitra Navratri in Karauli?",
        answer: "Yes, demand is especially high during Chaitra Navratri pilgrimages to Kaila Devi. Marigolds, red hibiscus, and puja flower sets are stocked in larger quantities during this season."
      },
      {
        question: "Do you deliver to Hindaun City near Karauli?",
        answer: "Yes, Hindaun City (about 45 km from Karauli) is in our extended delivery area. Please place your order before 12 PM for same-day delivery to Hindaun."
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
