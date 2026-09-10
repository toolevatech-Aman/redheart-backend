// Batch 28 — 15 cities:
// Assam: Nagaon, Tinsukia, Karimganj, Barpeta, Dhubri, Diphu, Nalbari, Goalpara
// West Bengal: Alipurduar, Kalimpong, Raiganj, Haldia, Tamluk, Contai, Islampur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "nagaon": {
    cityName: "Nagaon",
    metaTitle: "Flower Delivery in Nagaon | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Nagaon, Assam. Same-day delivery of roses, bouquets & seasonal flowers across Nagaon. Starting ₹399.",
    h1: "Online Flower Delivery in Nagaon",
    metaKeyword: "flower delivery nagaon, online flowers nagaon assam, florist nagaon, flowers nagaon bihu assam",
    footerContent: `
<h2>Flower Delivery in Nagaon — Assam's Cultural Heartland on the Brahmaputra Plains</h2>
<p>Nagaon (also called Nowgong), in central Assam on the southern bank of the Brahmaputra, is one of Assam's most historically and culturally significant districts. The town is located at the centre of the Brahmaputra valley and has been an important administrative and educational centre since the colonial period. Nagaon is in the heart of Assam's cultural Bihu belt — Rongali Bihu (the spring festival celebrated in April) is marked by elaborate Bihu dances, dhol music, and an abundance of wildflowers. The nearby Pobitora Wildlife Sanctuary has the highest density of one-horned rhinos in the world. The Nagaon silk weaving tradition — producing Assam silk (muga, eri, and pat) — adds craft heritage to the city's identity.</p>
<p>RedHeart delivers flowers across Nagaon — A.T. Road, Station Road, Haibargaon area, and Roha Road. Our catalogue includes roses, seasonal Assam bouquets, marigolds, and exotic Northeast Indian flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nagaon, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">A.T. Road, Station Road, Haibargaon area, Roha Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, Bihu flowers, seasonal Northeast bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Bihu celebration available in Nagaon?",
        answer: "Yes, Rongali Bihu is celebrated with great energy in Nagaon. Seasonal spring flowers, marigolds, and wildflower bouquets reflecting the spirit of Bihu are available around the April festival."
      },
      {
        question: "Can I order flowers in Nagaon for a birthday same day?",
        answer: "Yes, birthday roses and celebration bouquets are available for same-day delivery in Nagaon. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "Are orchids available in Nagaon for gifting?",
        answer: "Yes, Assam is India's most abundant orchid state, and we carry orchid plants and cut orchid arrangements in Nagaon alongside standard roses and marigolds."
      }
    ]
  },

  "tinsukia": {
    cityName: "Tinsukia",
    metaTitle: "Flower Delivery in Tinsukia | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Tinsukia, Assam. Same-day delivery of roses, bouquets & seasonal flowers across Tinsukia. From ₹399.",
    h1: "Online Flower Delivery in Tinsukia",
    metaKeyword: "flower delivery tinsukia, online flowers tinsukia assam, florist tinsukia, flowers tinsukia oil tea upper assam",
    footerContent: `
<h2>Flower Delivery in Tinsukia — Gateway to the Oil Country and Brahmaputra's Upper Reaches</h2>
<p>Tinsukia, in extreme Upper Assam near the Arunachal Pradesh border, is the commercial hub of Assam's oil belt and one of the most important tea-trading centres in the world. The nearby Digboi (just 50 km away) is home to the world's oldest operating oil refinery (in continuous operation since 1901), while the Makum coalfields and the dense tea gardens of the Sadiya-Tinsukia belt make the region a natural resource powerhouse. Tinsukia is also the closest major city to the Dibru-Saikhowa National Park (an exceptional wetland and grassland reserve with wild horses, Gangetic river dolphins, and tigers) and to the ancient Sadiya religious site near the Brahmaputra-Lohit confluence.</p>
<p>RedHeart delivers flowers across Tinsukia — Borguri area, Digboi Road, Doom Dooma Road, and Margherita Road. Our range includes roses, seasonal Assam bouquets, orchids, and marigolds. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tinsukia, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Borguri area, Digboi Road, Doom Dooma Road, Margherita Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal Upper Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are orchids available in Tinsukia for gifting?",
        answer: "Yes, Upper Assam's lush biodiversity means orchids are naturally abundant. We carry Assam orchid plants and cut orchid arrangements in Tinsukia — perfect for gifting in this tea and oil country."
      },
      {
        question: "Can I send flowers to tea garden bungalows near Tinsukia?",
        answer: "Yes, many tea garden manager bungalows and company guest houses in the Tinsukia tea belt are within our delivery range. A bouquet of roses for a tea garden anniversary is a lovely gesture."
      },
      {
        question: "Are flowers available for Bihu in Tinsukia?",
        answer: "Yes, Bihu is one of the grandest festivals in Tinsukia. Seasonal flowers for Bihu celebrations, Bihu dance events, and home decorations are available in April (Rongali) and October (Kongali)."
      }
    ]
  },

  "karimganj": {
    cityName: "Karimganj",
    metaTitle: "Flower Delivery in Karimganj | Same Day | RedHeart",
    metaDescription: "Order flowers in Karimganj, Assam. Same-day delivery near Barak Valley & across Karimganj town. Roses & bouquets from ₹399.",
    h1: "Online Flower Delivery in Karimganj",
    metaKeyword: "flower delivery karimganj, online flowers karimganj assam, florist karimganj, flowers karimganj barak valley bengali",
    footerContent: `
<h2>Flower Delivery in Karimganj — Barak Valley's Southern Border Town</h2>
<p>Karimganj, in Assam's Barak Valley near the Bangladesh and Mizoram borders, is the southernmost major town in Assam and has a predominantly Bengali-speaking culture (the Barak Valley has a large Bengali Hindu and Muslim population due to historical migration patterns post-Partition). The town lies on the Kushiyara River — a tributary of the Surma River that flows through Bangladesh — and the border landscape includes jheels (wetlands) and dense bamboo forests typical of the Bangladesh delta interface. Karimganj is an important tea depot for the Barak Valley teas (a sub-variety of Assam tea), and the town serves as a transit point between Assam and Mizoram/Manipur.</p>
<p>RedHeart delivers flowers across Karimganj — Bazar area, Nilambazar Road, Sutarkandi Road, and Railway Colony. We offer roses, seasonal Bengali-style bouquets, marigolds, and tuberose (rajanigandha). Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karimganj, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bazar area, Nilambazar Road, Sutarkandi Road, Railway Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tuberose (rajanigandha), marigolds, seasonal Bengali bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Is tuberose (rajanigandha) available in Karimganj?",
        answer: "Yes, tuberose (rajanigandha) is especially popular in the Bengali-speaking Barak Valley communities of Karimganj for Durga Puja, Kali Puja, and personal gifting."
      },
      {
        question: "Are flowers available for Durga Puja in Karimganj?",
        answer: "Yes, Durga Puja is one of the grandest festivals in Karimganj's Bengali community. Marigold garlands, red hibiscus, and tuberose strings are popular Durga Puja offerings."
      },
      {
        question: "Can I order flowers in Karimganj for same-day delivery?",
        answer: "Yes, same-day delivery is available across Karimganj for orders placed before 3 PM."
      }
    ]
  },

  "barpeta": {
    cityName: "Barpeta",
    metaTitle: "Flower Delivery in Barpeta | Sattras & Vaishnavism | RedHeart",
    metaDescription: "Order flowers in Barpeta, Assam. Same-day delivery near Barpeta Satra & across Barpeta town. Roses & seasonal flowers from ₹399.",
    h1: "Online Flower Delivery in Barpeta",
    metaKeyword: "flower delivery barpeta, online flowers barpeta assam, florist barpeta, flowers barpeta satra vaishnavism sankardeva",
    footerContent: `
<h2>Flower Delivery in Barpeta — Assam's Vaishnavite Sacred Town</h2>
<p>Barpeta, in western Assam on the south bank of the Beki River (a Brahmaputra tributary), is one of Assam's holiest Vaishnavite towns. The Barpeta Satra — established by Srimanta Sankardeva's disciple Madhavdeva in the 16th century — is one of the most important satras (Vaishnavite monasteries) in the Neo-Vaishnavite movement that transformed Assamese religious and cultural life. The Barpeta satras are famous for the elaborate Raas Utsav celebration during the full moon of the month of Kartik, when thousands of devotees gather for devotional music, Borgeet performances, and the lighting of thousands of oil lamps around the satra pond. The town is also known for its Barpeta doyang (a type of dance drama).</p>
<p>RedHeart delivers flowers across Barpeta — Bazar Road, Satra Road, Guwahati Road, and Howly Road. Our range includes roses, marigolds, tulsi, and flowers for Vaishnavite puja sets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barpeta, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bazar Road, Satra Road, Guwahati Road, Howly Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, lotus, tulsi, roses, Raas Utsav floral offerings</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Barpeta Satra Raas Utsav available?",
        answer: "Yes, the Raas Utsav at Barpeta Satra is one of Assam's most important religious events. Lotus, marigold, and Vaishnavite puja flowers are available during the Kartik full moon celebration."
      },
      {
        question: "Can I get flowers for Bihu in Barpeta?",
        answer: "Yes, Bihu is also celebrated enthusiastically in Barpeta. Seasonal spring flowers and marigold arrangements for Rongali Bihu are available every April."
      },
      {
        question: "Are devotional flowers (tulsi, lotus) available in Barpeta?",
        answer: "Yes, given Barpeta's deep Vaishnavite tradition, tulsi plants, lotus flowers, and marigold garlands for satra worship are among our most frequently ordered items."
      }
    ]
  },

  "dhubri": {
    cityName: "Dhubri",
    metaTitle: "Flower Delivery in Dhubri | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Dhubri, Assam. Same-day delivery of roses, bouquets & seasonal flowers across Dhubri. Starting ₹399.",
    h1: "Online Flower Delivery in Dhubri",
    metaKeyword: "flower delivery dhubri, online flowers dhubri assam, florist dhubri, flowers dhubri brahmaputra border bangladesh",
    footerContent: `
<h2>Flower Delivery in Dhubri — Assam's Western Brahmaputra Gateway</h2>
<p>Dhubri, on the southern bank of the Brahmaputra in western Assam at the border with West Bengal and Bangladesh (just 20 km from the Bangladesh border at Golakganj), is one of Assam's oldest river port towns. The Brahmaputra is extremely broad here — up to 10 km wide — and Dhubri's inland river port was one of the most important in colonial Assam for jute, tea, and grain trade moving between Bengal and the northeast. The Dhubri Masjid (the Dargah Sharif at nearby Gauripur) and the Gauripur Royal Palace (the zamindari estate of the Gauripur kings) are important historical landmarks. The district has a significant Muslim and Bengali-speaking population given its border position.</p>
<p>RedHeart delivers flowers across Dhubri — Bazar area, Gauripur Road, Station Road, and Court Road. Our range includes roses, marigolds, tuberose, and seasonal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dhubri, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bazar area, Gauripur Road, Station Road, Court Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tuberose, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Eid available in Dhubri?",
        answer: "Yes, Dhubri has a significant Muslim community. Rose bouquets and jasmine garlands for Eid celebrations are popular and available for same-day delivery."
      },
      {
        question: "Can I order a birthday bouquet in Dhubri same day?",
        answer: "Yes, birthday and anniversary bouquets are available in Dhubri for same-day delivery. Orders placed before 3 PM are delivered the same evening."
      },
      {
        question: "Are flowers available for Bihu in Dhubri?",
        answer: "Yes, Bihu is celebrated across Assam including in Dhubri. Seasonal spring flowers and marigold arrangements for Rongali Bihu are available every April."
      }
    ]
  },

  "diphu": {
    cityName: "Diphu",
    metaTitle: "Flower Delivery in Diphu | Karbi Anglong | RedHeart",
    metaDescription: "Order flowers in Diphu, Karbi Anglong, Assam. Same-day delivery of roses, bouquets & seasonal flowers across Diphu. From ₹399.",
    h1: "Online Flower Delivery in Diphu",
    metaKeyword: "flower delivery diphu, online flowers diphu assam, florist diphu karbi anglong, flowers diphu tribal northeast",
    footerContent: `
<h2>Flower Delivery in Diphu — Capital of Karbi Anglong's Hill Communities</h2>
<p>Diphu, the headquarters of Karbi Anglong district in Assam, sits in the hills south of the Brahmaputra valley — one of India's largest autonomous hill districts, home to the Karbi people and other indigenous Tibeto-Burman communities. The Karbi people celebrate Chomangkan (their ancestral worship festival) and the Rongker festival with elaborate community rituals involving flowers, bamboo, and natural materials from the forest. The district's hills are covered with teak forests, elephant habitats, and the Bokajan coal mining area. Diphu is an important administrative and cultural centre for the entire hill tribal community of central Assam's southern range.</p>
<p>RedHeart delivers flowers across Diphu — Main Bazar, Bokajan Road, Langhin Road, and Hamren Road. We offer roses, seasonal Assam bouquets, marigolds, and exotic Northeast Indian flowers. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Diphu, Karbi Anglong, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Bazar, Bokajan Road, Langhin Road, Hamren Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, seasonal Northeast bouquets, orchids, marigolds</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are tribal festival flowers available in Diphu for Chomangkan or Rongker?",
        answer: "Yes, for the Karbi tribal festivals Chomangkan and Rongker, we offer seasonal wildflowers and marigold arrangements appropriate for these hill community celebrations in Diphu."
      },
      {
        question: "Are orchids available in Diphu?",
        answer: "Yes, Karbi Anglong's forests are rich in orchid species. We carry orchid plants and cut orchid arrangements in Diphu — a distinctive gift for the hill region."
      },
      {
        question: "Can I send flowers to Diphu from another city?",
        answer: "Yes, you can order online from anywhere in India and we will deliver fresh flowers to an address in Diphu. Same-day delivery for orders before 3 PM."
      }
    ]
  },

  "nalbari": {
    cityName: "Nalbari",
    metaTitle: "Flower Delivery in Nalbari | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Nalbari, Assam. Same-day delivery of roses, bouquets & seasonal flowers across Nalbari town. From ₹399.",
    h1: "Online Flower Delivery in Nalbari",
    metaKeyword: "flower delivery nalbari, online flowers nalbari assam, florist nalbari, flowers nalbari lower assam",
    footerContent: `
<h2>Flower Delivery in Nalbari — Lower Assam's Quiet Cultural Town</h2>
<p>Nalbari, in Lower Assam south of the Brahmaputra near Barpeta and Guwahati, is the district headquarters of Nalbari district — a predominantly Assamese and Bodo-speaking agricultural area known for its rice cultivation, mustard fields (which bloom a brilliant yellow in winter), and the artisan weaving tradition of Assamese cotton and silk. The Nalbari district is within the cultural sphere of Kamrupa — the ancient kingdom whose capital lay in the Guwahati area — and the traditions of Bihu music, Assamese cuisine (pitha), and mekhela-chador weaving are deeply embedded in the local culture. The Barekuri wetland (a significant migratory bird wintering ground) is a notable natural heritage site in the district.</p>
<p>RedHeart delivers flowers across Nalbari — Bazar Road, Tihu Road, Guwahati Road, and Station area. Our range includes roses, marigolds, seasonal Assam bouquets, and indoor plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nalbari, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bazar Road, Tihu Road, Guwahati Road, Station area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Assam flowers, potted plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Bihu celebration available in Nalbari?",
        answer: "Yes, Bihu is the most important festival in Nalbari. Seasonal flowers for Rongali Bihu (April), including wildflowers, marigolds, and spring blooms, are available."
      },
      {
        question: "Can I order flowers in Nalbari for Durga Puja?",
        answer: "Yes, Durga Puja is also observed in Nalbari. Marigold garlands and red hibiscus (jaba) for Durga Puja puja are available."
      },
      {
        question: "Do you deliver flowers same day in Nalbari town?",
        answer: "Yes, same-day delivery is available across Nalbari for orders placed before 3 PM."
      }
    ]
  },

  "goalpara": {
    cityName: "Goalpara",
    metaTitle: "Flower Delivery in Goalpara | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Goalpara, Assam. Same-day delivery of roses, bouquets & seasonal flowers across Goalpara. From ₹399.",
    h1: "Online Flower Delivery in Goalpara",
    metaKeyword: "flower delivery goalpara, online flowers goalpara assam, florist goalpara, flowers goalpara brahmaputra west assam",
    footerContent: `
<h2>Flower Delivery in Goalpara — Where the Garo Hills Meet the Brahmaputra</h2>
<p>Goalpara, in western Assam on the northern bank of the Brahmaputra at the point where the river enters Assam from the Meghalaya-West Bengal corridor, is one of Assam's oldest towns. Historically it was the entry point for most travellers to Assam from Bengal — the road from Dhubri to Guwahati passes through Goalpara. The district has a diverse population of Assamese, Bengali, Bodo, and Rabha communities. The Manas National Park (UNESCO World Heritage Site, a Tiger Reserve and Project Elephant reserve) extends into the northern parts of Goalpara district. The Urpad area of Goalpara is known for its handloom tradition, and the local Bihu and Rabha tribal festivals mark the cultural calendar.</p>
<p>RedHeart delivers flowers across Goalpara — Bus Stand area, Court Road, Lakhipur Road, and Dhubri Road. Our range includes roses, marigolds, seasonal Assam bouquets, and flowering plants. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Goalpara, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bus Stand area, Court Road, Lakhipur Road, Dhubri Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, seasonal Assam bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Bihu available in Goalpara?",
        answer: "Yes, Bihu is celebrated enthusiastically in Goalpara across its Assamese and tribal communities. Seasonal flowers for Rongali Bihu celebrations are available in April."
      },
      {
        question: "Can I send a birthday bouquet in Goalpara same day?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Goalpara for orders placed before 3 PM."
      },
      {
        question: "Are flowers for Rabha tribal festivals available in Goalpara?",
        answer: "Yes, the Rabha community's Hamlai festival and seasonal harvest celebrations involve flowers. We offer seasonal wildflower and marigold arrangements appropriate for tribal festival occasions in Goalpara."
      }
    ]
  },

  "alipurduar": {
    cityName: "Alipurduar",
    metaTitle: "Flower Delivery in Alipurduar | Dooars Tea | RedHeart",
    metaDescription: "Order fresh flowers in Alipurduar, West Bengal. Same-day delivery near Dooars tea gardens & across Alipurduar. From ₹399.",
    h1: "Online Flower Delivery in Alipurduar",
    metaKeyword: "flower delivery alipurduar, online flowers alipurduar west bengal, florist alipurduar, flowers alipurduar dooars tea forest",
    footerContent: `
<h2>Flower Delivery in Alipurduar — Dooars' Gateway to Forests and Tea Gardens</h2>
<p>Alipurduar, at the base of the Eastern Himalayan foothills in northern West Bengal, is the headquarters of Alipurduar district — the gateway to the Dooars (the foothills region between the Himalayan foothills and the Bengal plains) tea gardens and wildlife reserves. The Buxa Tiger Reserve, Jaldapara National Park (home to the largest population of one-horned rhinos outside Assam), and the Chilapata Forest are all within 40 km of Alipurduar. The district borders Bhutan, and the Bhutan border post at Jaigaon-Phuentsholing is just 50 km away. The Dooars landscape of river channels, semi-evergreen forests, and tea estate rows makes Alipurduar one of North Bengal's most scenic districts.</p>
<p>RedHeart delivers flowers across Alipurduar — Station Road, New Town area, Birpara Road, and Jaigaon Road. Our range includes roses, seasonal North Bengal bouquets, orchids, and marigolds. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Alipurduar, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, New Town area, Birpara Road, Jaigaon Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, marigolds, seasonal North Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to tea garden bungalows near Alipurduar?",
        answer: "Yes, Dooars tea garden manager bungalows and eco-resort properties near Alipurduar are within our extended delivery zone. A bouquet makes a wonderful gift for a tea estate stay."
      },
      {
        question: "Are orchids available in Alipurduar for gifting?",
        answer: "Yes, the Eastern Himalayan foothills near Alipurduar are rich in orchid diversity. We carry orchid plants and cut orchid arrangements — a distinctive North Bengal gift."
      },
      {
        question: "Are flowers for Durga Puja available in Alipurduar?",
        answer: "Yes, Durga Puja is the grandest festival in Alipurduar. Marigold garlands, tuberose strings, and red hibiscus for Durga Puja pandals and home puja are available."
      }
    ]
  },

  "kalimpong": {
    cityName: "Kalimpong",
    metaTitle: "Flower Delivery in Kalimpong | Orchid Hill Station | RedHeart",
    metaDescription: "Order flowers in Kalimpong, West Bengal. Same-day delivery of roses, orchids & seasonal hill flowers across Kalimpong. From ₹399.",
    h1: "Online Flower Delivery in Kalimpong",
    metaKeyword: "flower delivery kalimpong, online flowers kalimpong west bengal, florist kalimpong, flowers kalimpong orchid hill station bhutan border",
    footerContent: `
<h2>Flower Delivery in Kalimpong — Orchid Capital of India's Eastern Himalayan Hills</h2>
<p>Kalimpong, perched at 1,250 metres in the Darjeeling hills of West Bengal near the Bhutan border, was historically the terminus of the ancient trade route between Tibet, Sikkim, and Bengal — the Silk Road's eastern arm passed through Kalimpong, making it a cosmopolitan bazaar of Tibetan, Nepalese, Lepcha, and Bengali merchants. Today Kalimpong is India's premier orchid cultivation centre — with over 300 orchid nurseries producing dendrobium, cymbidium, and exotic hybrid orchids for markets across India and for export. The town's temperate climate is ideal for rhododendrons, hydrangeas, and gladioli, making Kalimpong's flower markets among the most diverse and beautiful in India. The Zong Dog Palri Fo-Brang monastery and the Thongsa Gompa reflect the deep Tibetan Buddhist heritage.</p>
<p>RedHeart delivers flowers across Kalimpong — Main Road, Rinkingpong Road, Teesta Bazaar, and 9th Mile area. Orchids, seasonal hill flowers, and Himalayan bouquets are our specialty. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalimpong, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Main Road, Rinkingpong Road, Teesta Bazaar, 9th Mile area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dendrobium orchids, cymbidium, rhododendrons, gladioli</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get orchids from Kalimpong's famous nurseries delivered to my doorstep?",
        answer: "Yes, dendrobium and cymbidium orchid plants from Kalimpong's 300+ nurseries are among our most sought-after items. Both potted orchid plants and cut orchid stems are available for delivery."
      },
      {
        question: "Are Himalayan flowers like rhododendrons available in Kalimpong?",
        answer: "Yes, during the rhododendron season (March-April), we offer red, pink, and white rhododendron bouquets — Kalimpong's most iconic hill flower. Seasonal availability may vary."
      },
      {
        question: "Can I send flowers to a heritage homestay in Kalimpong?",
        answer: "Yes, heritage homestays and hill hotels across Kalimpong are within our delivery zone. A Himalayan flower arrangement for a mountain stay anniversary or romantic trip is unforgettable."
      }
    ]
  },

  "raiganj": {
    cityName: "Raiganj",
    metaTitle: "Flower Delivery in Raiganj | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Raiganj, West Bengal. Same-day delivery of roses, bouquets & seasonal flowers across Raiganj. From ₹399.",
    h1: "Online Flower Delivery in Raiganj",
    metaKeyword: "flower delivery raiganj, online flowers raiganj west bengal, florist raiganj north dinajpur, flowers raiganj birds",
    footerContent: `
<h2>Flower Delivery in Raiganj — North Bengal's River Town and Bird Sanctuary City</h2>
<p>Raiganj, the headquarters of North Dinajpur district in northern West Bengal, is a riverside town on the Kulik River known for a remarkable natural phenomenon: the Kulik Bird Sanctuary (just 3 km from the town centre) is Asia's largest heronry — home to over one lakh birds during the breeding season (July-September), including the open-billed stork, night heron, egret, and cormorant, all nesting in a dense grove of trees in remarkable density. Raiganj is in the heartland of North Bengal's jute, tobacco, and vegetable cultivation belt, and the town has a significant Bengali Hindu cultural tradition with Durga Puja celebrated with great elaborateness. The district borders Bangladesh and has a diverse Hindu-Muslim demographic.</p>
<p>RedHeart delivers flowers across Raiganj — Station Road, Kaliagunj Road, Itahar Road, and Old Market area. Our range includes roses, tuberose, marigolds, and seasonal Bengal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Raiganj, North Dinajpur, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Kaliagunj Road, Itahar Road, Old Market area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tuberose (rajanigandha), marigolds, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Is tuberose (rajanigandha) available in Raiganj?",
        answer: "Yes, tuberose is a beloved flower in North Bengal and is widely used for Durga Puja and personal gifting. Fresh tuberose bunches are available in Raiganj throughout the year."
      },
      {
        question: "Are flowers for Durga Puja available in Raiganj?",
        answer: "Yes, Durga Puja is the grandest event in Raiganj. Marigold garlands, red hibiscus (jaba), and tuberose strings are popular Durga Puja offerings. Order in advance during October."
      },
      {
        question: "Can I order flowers in Raiganj for same-day delivery?",
        answer: "Yes, birthday and anniversary bouquets are available for same-day delivery in Raiganj. Orders placed before 3 PM are delivered the same evening."
      }
    ]
  },

  "haldia": {
    cityName: "Haldia",
    metaTitle: "Flower Delivery in Haldia | Petrochemical Port | RedHeart",
    metaDescription: "Order flowers in Haldia, West Bengal. Same-day delivery near port & petrochemical township across Haldia. Roses from ₹399.",
    h1: "Online Flower Delivery in Haldia",
    metaKeyword: "flower delivery haldia, online flowers haldia west bengal, florist haldia, flowers haldia port petrochemical purba medinipur",
    footerContent: `
<h2>Flower Delivery in Haldia — Bengal's Industrial Port on the Hooghly</h2>
<p>Haldia, on the Hooghly River (just 60 km south of Kolkata in Purba Medinipur district), is West Bengal's most important planned industrial township — built around the Haldia Port (India's second most important port in West Bengal) and the Haldia Petrochemicals complex, one of the largest integrated petrochemical plants in South Asia. The Haldia Dock Complex handles bulk cargo — coal, fertilizers, petroleum products — for the entire eastern Indian hinterland. The township itself is a planned industrial settlement with residential colonies for port and HPCL/IOCL refinery employees. The Gangasagar Mela (the world's second-largest human gathering after the Kumbh Mela) at the Ganges-Bay of Bengal confluence is just 100 km from Haldia.</p>
<p>RedHeart delivers flowers across Haldia — Port Township, HPCL Colony, Durgachak area, and Mahishadal Road. Our range includes roses, marigolds, tuberose, and seasonal Bengal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Haldia, Purba Medinipur, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Port Township, HPCL Colony, Durgachak area, Mahishadal Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tuberose, marigolds, corporate office arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I send flowers to HPCL or port township colonies in Haldia?",
        answer: "Yes, residential colonies for HPCL, IOCL, Haldia Petrochemicals, and Port employees are all within our delivery zone. Corporate gifting and personal bouquets are delivered fresh."
      },
      {
        question: "Are flowers available for Durga Puja in Haldia township?",
        answer: "Yes, Haldia's port township community celebrates Durga Puja with elaborate community pandals. Marigold garlands, tuberose, and red hibiscus for puja are available during the October festival."
      },
      {
        question: "Can I order flowers in Haldia from Kolkata same day?",
        answer: "Yes, you can order online from Kolkata or anywhere in India for delivery in Haldia. Same-day delivery for Haldia is available for orders placed before 3 PM."
      }
    ]
  },

  "tamluk": {
    cityName: "Tamluk",
    metaTitle: "Flower Delivery in Tamluk | Ancient Tamralipta | RedHeart",
    metaDescription: "Order flowers in Tamluk (Tamralipta), West Bengal. Same-day delivery of roses, bouquets & seasonal flowers across Tamluk. From ₹399.",
    h1: "Online Flower Delivery in Tamluk",
    metaKeyword: "flower delivery tamluk, online flowers tamluk west bengal, florist tamluk, flowers tamluk tamralipta purba medinipur",
    footerContent: `
<h2>Flower Delivery in Tamluk — Tamralipta, Ancient Bengal's Celebrated Sea Port</h2>
<p>Tamluk, on the Rupnarayan River in Purba Medinipur district of West Bengal, is the site of the ancient Tamralipta — one of antiquity's most important seaports that served as a departure point for Buddhist missionaries to Southeast Asia and for trade with Rome and the East. Chinese monk Xuanzang (Hsüan-tsang) visited Tamralipta in the 7th century CE and described a thriving Buddhist monastery with 1,000 monks. Today Tamluk is the district headquarters of Purba Medinipur and is known for its Bargi Dewi (Durga) temple (a shakti peetha) and for the terracotta temples. The district's sandy coastal terrain (close to Digha beach) and the Kanthi subdivision's betel leaf cultivation are local specialties.</p>
<p>RedHeart delivers flowers across Tamluk — Mecheda Road, Haldia Road, Circuit House area, and Old Market. Our range includes roses, tuberose, marigolds, and seasonal Bengal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tamluk, Purba Medinipur, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mecheda Road, Haldia Road, Circuit House area, Old Market</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tuberose, marigold garlands, red hibiscus</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Durga Puja available in Tamluk?",
        answer: "Yes, Durga Puja is the central festival in Tamluk. Marigold garlands, tuberose strings, and red hibiscus (jaba) for the puja pandal and home puja are available."
      },
      {
        question: "Can I send flowers near Digha beach from Tamluk?",
        answer: "Digha beach is about 60 km from Tamluk. For beach resort deliveries, please contact our support for extended zone arrangements from Tamluk."
      },
      {
        question: "Do you deliver flowers in Tamluk same day?",
        answer: "Yes, same-day delivery is available across Tamluk for orders placed before 3 PM."
      }
    ]
  },

  "islampur": {
    cityName: "Islampur",
    metaTitle: "Flower Delivery in Islampur | Same Day | RedHeart",
    metaDescription: "Order flowers in Islampur, West Bengal. Same-day delivery of roses, bouquets & seasonal flowers across Islampur. From ₹399.",
    h1: "Online Flower Delivery in Islampur",
    metaKeyword: "flower delivery islampur, online flowers islampur west bengal, florist islampur north dinajpur, flowers islampur bengal",
    footerContent: `
<h2>Flower Delivery in Islampur — North Bengal's Bustling Border Sub-Division Town</h2>
<p>Islampur, in the northern part of North Dinajpur district of West Bengal near the Bihar border, is a rapidly growing town on National Highway 12 (the major artery linking West Bengal to Assam). The town has a diverse Hindu-Muslim population and is a significant commercial centre for the surrounding agricultural villages that grow jute, paddy, mustard, and vegetables in the Nagar River plain. Islampur's cultural calendar includes a mix of Bengali Hindu festivals (Durga Puja, Kali Puja) and Islamic celebrations (Eid ul-Fitr, Eid ul-Adha). The town's proximity to Bihar (the Kishanganj district is just 30 km away) gives it a mixed Bengali-Hindi cultural character.</p>
<p>RedHeart delivers flowers across Islampur — NH-12 area, Raiganj Road, Dalkhola Road, and Old Bazar. Our range includes roses, tuberose, marigolds, and seasonal Bengal bouquets. Same-day delivery for orders before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Islampur, North Dinajpur, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">NH-12 area, Raiganj Road, Dalkhola Road, Old Bazar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, tuberose, marigolds, seasonal Bengal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Are flowers for Eid available in Islampur?",
        answer: "Yes, Islampur has a significant Muslim community. Rose bouquets and jasmine garlands for Eid are popular in Islampur and available for same-day delivery."
      },
      {
        question: "Can I order flowers for Durga Puja in Islampur?",
        answer: "Yes, Durga Puja is celebrated by the Bengali Hindu community in Islampur. Marigold garlands, tuberose, and red hibiscus are available for puja and pandal decorations."
      },
      {
        question: "Do you deliver flowers same day in Islampur?",
        answer: "Yes, same-day delivery is available across Islampur for orders placed before 3 PM."
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
