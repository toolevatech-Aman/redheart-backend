// Batch 19 — 15 cities: Pimpri-Chinchwad, Dombivli, Kalyan, Shirdi, Lonavala,
// Rameswaram, Whitefield, Zirakpur, Bilaspur (CG), Itanagar, Dimapur,
// Abohar, Adilabad, Panaji, Margao

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "pimpri-chinchwad": {
    cityName: "Pimpri-Chinchwad",
    metaTitle: "Flower Delivery in Pimpri-Chinchwad | RedHeart",
    metaDescription: "Order fresh flowers online in Pimpri-Chinchwad. Same-day delivery to Pimpri, Chinchwad, Akurdi, Nigdi, Bhosari & more. Roses, bouquets, plants from ₹399.",
    h1: "Online Flower Delivery in Pimpri-Chinchwad",
    metaKeyword: "flower delivery pimpri chinchwad, online flowers pimpri, florist chinchwad, fresh flowers pcmc",
    footerContent: `
<h2>Flower Delivery in Pimpri-Chinchwad — Blooms for the Industrial Capital</h2>
<p>Pimpri-Chinchwad, Pune's twin city and one of India's most important industrial hubs, is home to the sprawling PCMC jurisdiction covering over 180 sq km. Known for its massive auto and manufacturing clusters — from Tata Motors in Pimpri to the MIDC corridors in Bhosari and Chinchwad — this city is where efficiency meets ambition. Yet amid the hum of factories and IT parks in Wakad and Hinjewadi's proximity, residents cherish quiet moments with loved ones. Whether celebrating a promotion at one of the city's countless MNC campuses or gifting a bouquet to a colleague heading to a new role, fresh flowers carry real weight here.</p>
<p>RedHeart delivers across Pimpri, Chinchwad, Akurdi, Nigdi, Bhosari, Wakad, Pimple Saudagar, Pimple Nilakh, and Ravet. Our refrigerated logistics ensure roses and orchids arrive in showroom condition despite the city's warm climate. Orders placed before 3 PM are delivered same day — practical for PCMC's fast-moving professional crowd.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pimpri-Chinchwad, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Pimpri, Chinchwad, Akurdi, Nigdi, Bhosari, Wakad, Pimple Saudagar, Ravet</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red roses, mixed bouquets, desk plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Bhosari MIDC area in Pimpri-Chinchwad?",
        answer: "Yes, we deliver to Bhosari, the MIDC industrial zone, and all residential areas around it. Office gifting, team celebration bouquets, and individual orders are all welcome."
      },
      {
        question: "Can I send flowers to a home in Nigdi or Akurdi same day?",
        answer: "Absolutely. Nigdi and Akurdi are fully covered under our same-day delivery network. Place your order before 3 PM for delivery the same evening."
      },
      {
        question: "What flowers are popular for gifting in Pimpri-Chinchwad's corporate culture?",
        answer: "White lilies and yellow sunflowers are popular for professional milestones, while red and pink roses remain favourites for personal celebrations like anniversaries and birthdays."
      }
    ]
  },

  "dombivli": {
    cityName: "Dombivli",
    metaTitle: "Flower Delivery in Dombivli | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Dombivli, Thane. Roses, lilies, gerberas delivered same day to Dombivli East, West & Manpada. Starting ₹399.",
    h1: "Online Flower Delivery in Dombivli",
    metaKeyword: "flower delivery dombivli, online flowers dombivli east west, florist dombivli thane",
    footerContent: `
<h2>Flower Delivery in Dombivli — Freshness for the Konkan Heartland of Mumbai's East</h2>
<p>Dombivli, a bustling residential suburb of the Mumbai Metropolitan Region in Thane district, is home to a large middle-class Maharashtrian community with deep roots in tradition and celebration. Split into the older Dombivli East — with its Ganesh temples, fish markets, and classic chawl neighbourhoods — and the newer Dombivli West serviced by KDMC, the city pulses with festivals like Ganesh Chaturthi, Navratri, and Diwali that bring flowers to the forefront of every home. The daily commuter trains to CST and Kurla carry lakhs of Dombivlikars to Mumbai, but evenings here are quieter and more personal.</p>
<p>RedHeart serves Dombivli East, Dombivli West, Manpada, Rabale Road belt, and nearby Titwala. Whether it's marigold garlands for a puja, a rose bouquet for an anniversary, or orchid arrangements for a housewarming, we deliver fresh and on time. Same-day orders are accepted till 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dombivli, Thane, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dombivli East, Dombivli West, Manpada, Titwala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, roses, mixed seasonal bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Dombivli East and Dombivli West both?",
        answer: "Yes, we cover both Dombivli East and Dombivli West fully. You can specify the area when placing the order and our delivery partner will reach you."
      },
      {
        question: "Can I order marigold flowers or garlands for puja in Dombivli?",
        answer: "Yes, marigold arrangements and traditional garland-style bouquets are available. They're popular for Ganesh puja, Satyanarayan puja, and home pujas in Dombivli."
      },
      {
        question: "What is the earliest delivery time for flowers in Dombivli?",
        answer: "Morning delivery slots are available from 8 AM for orders placed the previous night. Same-day delivery is possible for orders placed before 3 PM."
      }
    ]
  },

  "kalyan": {
    cityName: "Kalyan",
    metaTitle: "Flower Delivery in Kalyan | Same Day | RedHeart",
    metaDescription: "Order flowers online in Kalyan, Maharashtra. Fresh roses, bouquets & plants delivered same day to Kalyan East, West, Ulhasnagar & Dombivli. From ₹399.",
    h1: "Online Flower Delivery in Kalyan",
    metaKeyword: "flower delivery kalyan, florist kalyan east west, online flowers kalyan maharashtra",
    footerContent: `
<h2>Flower Delivery in Kalyan — Colour and Fragrance for a City of Character</h2>
<p>Kalyan, one of the fastest-growing cities in the Mumbai Metropolitan Region, carries centuries of history beneath its modern surface. Once a significant port on the Ulhas River — used by the Marathas and later the Portuguese — Kalyan today is a sprawling, energy-filled city where the old Muslim quarter near Kalyan station blends with new residential towers in Kalyan East. The city's famous Kalyan jasmine, long traded at the local phool mandi, has made flowers an integral part of its culture for generations. Weddings in Kalyan are elaborate affairs where marigold torans at the gate and rose petals on the path are simply expected.</p>
<p>RedHeart delivers across Kalyan East, Kalyan West, Ulhasnagar, Ambernath, and Titwala. Our flower range covers single roses, seasonal bouquets, orchid arrangements, and potted plants. Same-day delivery is available for orders placed before 3 PM, and midnight deliveries can be arranged for surprise occasions.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalyan, Thane, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kalyan East, Kalyan West, Ulhasnagar, Ambernath, Titwala</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, jasmine garlands, marigold arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get jasmine flowers delivered in Kalyan?",
        answer: "Yes, jasmine is among our popular options in Kalyan. It's available as loose bunches and in mixed arrangements — perfect for religious purposes or fragrant home décor."
      },
      {
        question: "Do you deliver to Ulhasnagar from Kalyan?",
        answer: "Ulhasnagar is covered under our Kalyan delivery zone. Delivery timings and pricing are the same as Kalyan city."
      },
      {
        question: "Can I send a surprise flower bouquet at midnight in Kalyan?",
        answer: "Yes, midnight delivery is available in Kalyan for birthdays and anniversary surprises. You can schedule the delivery time when placing the order."
      }
    ]
  },

  "shirdi": {
    cityName: "Shirdi",
    metaTitle: "Flower Delivery in Shirdi | Sai Baba Temple Flowers | RedHeart",
    metaDescription: "Order flowers for Sai Baba's darshan in Shirdi. Fresh marigolds, roses & puja arrangements delivered to Shirdi, Kopargaon & nearby areas. From ₹399.",
    h1: "Online Flower Delivery in Shirdi",
    metaKeyword: "flower delivery shirdi, flowers for sai baba temple, online flowers shirdi, puja flowers shirdi",
    footerContent: `
<h2>Flower Delivery in Shirdi — Devotion in Every Petal</h2>
<p>Shirdi, the small but globally revered town in Ahmednagar district of Maharashtra, draws over one lakh pilgrims every single day to the Sai Baba Samadhi Mandir — making it one of India's wealthiest and most-visited religious shrines. The town's entire rhythm is shaped by devotion: lodges, prasad shops, and flower stalls all exist to serve the stream of faithful arriving by buses from Nashik, trains to Kopargaon, and flights to Shirdi's own airport. At the Samadhi Mandir, fresh marigold garlands and rose petals are offered in vast quantities during each aarti — the 5:15 AM Kakad Aarti, the 12 noon Madhyan Aarti, and the 10 PM Shej Aarti each draw thousands simultaneously.</p>
<p>RedHeart delivers puja-ready flower arrangements, marigold garlands, and rose bouquets across Shirdi town and Kopargaon. For devotees who want to pre-arrange flowers before reaching the temple, our service offers a convenient online booking option with guaranteed freshness.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shirdi, Ahmednagar, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Shirdi town, Kopargaon, Rahata</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, rose offerings, mixed puja bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order marigold garlands for Sai Baba darshan in Shirdi?",
        answer: "Yes, marigold garlands and rose petal offerings are among our most popular products in Shirdi. They are prepared fresh and can be delivered to your hotel or lodge before your temple visit."
      },
      {
        question: "What flowers are traditionally offered at the Shirdi Sai Baba Samadhi Mandir?",
        answer: "Marigolds (zendu phool), roses, and jasmine are the most commonly offered flowers at Sai Baba's Samadhi. Fragrant flowers are particularly favoured during the aartis."
      },
      {
        question: "Can I schedule an early morning flower delivery in Shirdi for the Kakad Aarti?",
        answer: "Yes, we offer early morning delivery slots in Shirdi. Schedule your order the previous evening with a 5 AM delivery time to have flowers ready for the Kakad Aarti at 5:15 AM."
      }
    ]
  },

  "lonavala": {
    cityName: "Lonavala",
    metaTitle: "Flower Delivery in Lonavala | Same Day | RedHeart",
    metaDescription: "Send fresh flowers in Lonavala. Bouquets, roses & gifts delivered to Lonavala, Khandala & resorts. Perfect for romantic getaways. Starting ₹399.",
    h1: "Online Flower Delivery in Lonavala",
    metaKeyword: "flower delivery lonavala, online flowers lonavala khandala, florist lonavala, flowers for resort lonavala",
    footerContent: `
<h2>Flower Delivery in Lonavala — Romance Among the Misty Ghats</h2>
<p>Lonavala, nestled in the Sahyadri mountain range at 625 metres altitude on the old Pune–Mumbai highway, is Maharashtra's most beloved hill escape. The lush green valleys, cascading waterfalls like Bhushi Dam and Tiger's Leap, and the cool monsoon mist draw city couples escaping Mumbai and Pune for weekend getaways. Lonavala's resorts — from the heritage-style Fariyas to the sprawling Della Adventure Park area — are regularly booked for anniversaries, honeymoons, and birthday surprises. Nothing enhances a surprise in a mountain-view cottage more than a bouquet of fresh roses or tropical blooms waiting on the bedside table.</p>
<p>RedHeart delivers across Lonavala town, Khandala, Khopoli belt, and most resort areas on the Express Highway. Our same-day delivery allows couples to plan surprises even after arriving. We coordinate with hotel concierge teams for in-room deliveries on request.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lonavala, Pune, Maharashtra</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Lonavala town, Khandala, resort belt near Expressway</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red roses, orchid boxes, exotic tropical arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can you deliver flowers to a resort or hotel in Lonavala?",
        answer: "Yes, we deliver to hotels and resorts in Lonavala and Khandala. Many guests use our service for in-room surprises. Please mention the hotel name and room number in the delivery instructions."
      },
      {
        question: "Are flowers available during the monsoon season in Lonavala?",
        answer: "Absolutely. Lonavala is most romantic during monsoon (June–September) and we maintain full delivery operations through the season. Roses, orchids, and lilies are available year-round."
      },
      {
        question: "What's a good flower gift for an anniversary trip to Lonavala?",
        answer: "A box of 25–50 red roses or a premium orchid arrangement makes for a stunning anniversary surprise in Lonavala. You can add a personalised message card with any order."
      }
    ]
  },

  "rameswaram": {
    cityName: "Rameswaram",
    metaTitle: "Flower Delivery in Rameswaram | Temple Flowers | RedHeart",
    metaDescription: "Order fresh flowers for Ramanathaswamy Temple in Rameswaram. Marigolds, lotuses & puja bouquets delivered same day. Starting ₹399.",
    h1: "Online Flower Delivery in Rameswaram",
    metaKeyword: "flower delivery rameswaram, flowers ramanathaswamy temple, online flowers rameswaram, puja flowers pamban",
    footerContent: `
<h2>Flower Delivery in Rameswaram — Sacred Petals on the Pilgrimage Island</h2>
<p>Rameswaram, a small island town connected to mainland Tamil Nadu by the Pamban Bridge, holds one of Hinduism's most sacred sites — the Ramanathaswamy Temple, one of the twelve Jyotirlinga shrines and part of the Char Dham pilgrimage circuit. The temple's 22 sacred theerthas (holy wells) draw pilgrims from every corner of India who arrive to perform the ritual bath and offer flowers at the main sanctum. The narrow corridors of the world's longest temple corridor at over 1,200 metres are perpetually fragrant with jasmine, marigold, and sacred lotuses. The island's sea breeze, the sight of the Pamban rail bridge, and the sound of temple bells create an atmosphere few places in India can match.</p>
<p>RedHeart delivers fresh puja flowers across Rameswaram town, Pamban, and Ramanathapuram. Our offerings include marigold garlands, lotus flowers, jasmine strings, and mixed puja bouquets — all prepared and delivered in time for darshan.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rameswaram, Ramanathapuram, Tamil Nadu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rameswaram town, Pamban, Ramanathapuram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, lotus, jasmine, sacred puja sets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Which flowers are offered at the Ramanathaswamy Temple in Rameswaram?",
        answer: "Marigolds, lotus flowers, jasmine, and bilva leaves (for Shiva) are the most sacred offerings at Ramanathaswamy Temple. We provide fresh, temple-appropriate flower arrangements."
      },
      {
        question: "Can I get flowers delivered to my lodge in Rameswaram before darshan?",
        answer: "Yes, we deliver to hotels, lodges, and dharamshalas across Rameswaram town. Just schedule your order the evening before for early morning delivery before the temple opens at 5 AM."
      },
      {
        question: "Do you deliver lotus flowers in Rameswaram?",
        answer: "Lotus flowers are available subject to seasonal stock. They are especially sought after for Abhishekam and special puja offerings. Check availability when placing the order."
      }
    ]
  },

  "whitefield": {
    cityName: "Whitefield",
    metaTitle: "Flower Delivery in Whitefield Bangalore | RedHeart",
    metaDescription: "Fresh flower delivery in Whitefield, Bangalore. Same-day delivery to ITPL, Varthur, Marathahalli & Kadugodi. Roses, bouquets from ₹399.",
    h1: "Online Flower Delivery in Whitefield, Bangalore",
    metaKeyword: "flower delivery whitefield bangalore, online flowers whitefield, florist ITPL varthur, flowers kadugodi",
    footerContent: `
<h2>Flower Delivery in Whitefield — Blooms for Bangalore's Tech Corridor</h2>
<p>Whitefield, once a quiet British-era settlement on Bangalore's eastern fringe, transformed in the 1990s and 2000s into India's most iconic IT suburb. The International Tech Park (ITPL), home to hundreds of global tech companies, brought lakhs of software engineers from across India and the world. Today Whitefield is a city within a city — with its own malls at Phoenix Marketcity and Forum Neighbourhood Mall, its sprawling gated communities along Varthur Main Road and Kadugodi, and one of the highest concentrations of working professionals in Bengaluru. In this fast-paced culture, flowers serve as the universal punctuation of celebration — a bouquet for a colleague's onsite trip, roses for a girlfriend's birthday, or orchids for a new neighbour welcoming you to the society.</p>
<p>RedHeart serves all of Whitefield: ITPL, Varthur, Kadugodi, Marathahalli, Brookefield, EPIP Zone, Hope Farm, and Nallurhalli. We deliver the same day for orders placed before 3 PM and can coordinate workplace deliveries too.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Whitefield, Bengaluru, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">ITPL, Varthur, Kadugodi, Marathahalli, Brookefield, Hope Farm</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Red roses, orchid boxes, sunflowers, desk plants</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can you deliver flowers to offices in ITPL or EPIP Zone, Whitefield?",
        answer: "Yes, we deliver to offices and tech parks across Whitefield including ITPL, EPIP Zone, and Brookefield. Mention the company name, floor, and security contact for smooth delivery."
      },
      {
        question: "Do you deliver flowers to gated apartments in Varthur or Kadugodi?",
        answer: "Absolutely. We deliver to all major gated communities in Varthur, Kadugodi, and nearby areas. Please keep your security gate number or society name ready for faster processing."
      },
      {
        question: "What flowers are best for gifting in Whitefield's professional community?",
        answer: "Orchid arrangements and mixed tulip-rose bouquets are very popular in Whitefield for professional gifting. Sunflower bunches are a great choice for cheerful occasions like birthdays and farewells."
      }
    ]
  },

  "zirakpur": {
    cityName: "Zirakpur",
    metaTitle: "Flower Delivery in Zirakpur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers online in Zirakpur. Same-day delivery to Patiala Road, VIP Road, Derabassi & nearby areas. Roses, bouquets from ₹399.",
    h1: "Online Flower Delivery in Zirakpur",
    metaKeyword: "flower delivery zirakpur, online flowers zirakpur punjab, florist zirakpur chandigarh, flowers derabassi",
    footerContent: `
<h2>Flower Delivery in Zirakpur — Fresh Blooms for Punjab's Fastest-Growing Town</h2>
<p>Zirakpur, a satellite town on the outskirts of Chandigarh in Punjab's SAS Nagar district, has emerged as one of North India's fastest-growing residential and commercial hubs. Situated at the junction of National Highway 7 (to Delhi) and the Patiala Road, Zirakpur serves as the southern gateway to Chandigarh's tri-city region. Thousands of families from Ludhiana, Ambala, Patiala, and Chandigarh have relocated here for its mix of affordable housing, proximity to the airport, and connectivity to the city. Lohri, Baisakhi, Diwali, and Gurpurabs are celebrated with great enthusiasm in Zirakpur's housing societies, and flowers are central to every occasion.</p>
<p>RedHeart delivers across Zirakpur — covering Patiala Road, VIP Road, Derabassi, Baltana, Dhakoli, and the Chandigarh border areas. Fresh roses, carnations, seasonal bouquets, and festive arrangements are available with same-day delivery for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Zirakpur, SAS Nagar, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Patiala Road, VIP Road, Derabassi, Baltana, Dhakoli</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, carnations, mixed seasonal bouquets, marigold arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers in Derabassi near Zirakpur?",
        answer: "Yes, Derabassi is covered under our Zirakpur delivery zone. Delivery is available same day for orders placed before 3 PM."
      },
      {
        question: "Can I send flowers for Baisakhi or Lohri in Zirakpur?",
        answer: "Absolutely. Festive bouquets with marigolds and seasonal flowers are very popular for Baisakhi and Lohri in Zirakpur. We offer themed arrangements during major Punjabi festivals."
      },
      {
        question: "What is the delivery time for flowers ordered from Zirakpur?",
        answer: "Standard delivery is within 4–6 hours of order placement. Same-day delivery is guaranteed for orders placed before 3 PM. Express 2-hour slots are available for urgent gifting."
      }
    ]
  },

  "bilaspur-cg": {
    cityName: "Bilaspur",
    metaTitle: "Flower Delivery in Bilaspur CG | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Bilaspur, Chhattisgarh. Same-day roses, bouquets & seasonal flowers delivered to Vyapar Vihar, Sarkanda & all areas. From ₹399.",
    h1: "Online Flower Delivery in Bilaspur, Chhattisgarh",
    metaKeyword: "flower delivery bilaspur chhattisgarh, online flowers bilaspur cg, florist bilaspur, flowers vyapar vihar",
    footerContent: `
<h2>Flower Delivery in Bilaspur — Chhattisgarh's City of Connectivity</h2>
<p>Bilaspur, the second-largest city in Chhattisgarh, holds a unique position as the judicial and railway hub of the state. Home to the Chhattisgarh High Court and the South East Central Railway headquarters, Bilaspur has a professional, educated population that drives the city's economy alongside coal and steel industries in the surrounding region. The city's cultural life is marked by Navratri, Ram Navami, and tribal festivals like Hareli and Pola, where marigold and jasmine decorations are customary. The Talab Chowk area and Vyapar Vihar colony are the city's commercial and residential hearts respectively.</p>
<p>RedHeart delivers fresh flowers across Bilaspur — Vyapar Vihar, Sarkanda, Mangla, Civil Lines, Torwa, and Gole Bazar. Our catalogue includes roses, mixed seasonal bouquets, marigold arrangements, and potted flowering plants suitable for home décor or puja. Same-day delivery is available for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bilaspur, Chhattisgarh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vyapar Vihar, Sarkanda, Mangla, Civil Lines, Torwa, Gole Bazar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, marigolds, mixed bouquets, seasonal flowers</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Vyapar Vihar and Civil Lines in Bilaspur?",
        answer: "Yes, both Vyapar Vihar and Civil Lines are well within our delivery zone in Bilaspur. Same-day delivery is available for orders placed before 3 PM."
      },
      {
        question: "Can I order flowers for a Navratri puja in Bilaspur?",
        answer: "Yes, marigold garlands and red rose arrangements are popular during Navratri in Bilaspur. We can deliver puja-ready flower sets to your home for each of the nine days."
      },
      {
        question: "Are fresh flowers available in Bilaspur throughout the year on RedHeart?",
        answer: "Yes, we maintain fresh stock throughout the year in Bilaspur. Seasonal flowers vary, but roses, carnations, and marigolds are always available."
      }
    ]
  },

  "itanagar": {
    cityName: "Itanagar",
    metaTitle: "Flower Delivery in Itanagar | Same Day | RedHeart",
    metaDescription: "Order fresh flowers online in Itanagar, Arunachal Pradesh. Roses, bouquets & exotic blooms delivered same day to Naharlagun, Nirjuli & more. From ₹399.",
    h1: "Online Flower Delivery in Itanagar",
    metaKeyword: "flower delivery itanagar, online flowers itanagar arunachal, florist itanagar, flowers naharlagun",
    footerContent: `
<h2>Flower Delivery in Itanagar — Blooms Amid the Himalayan Foothills</h2>
<p>Itanagar, the capital of Arunachal Pradesh nestled in the foothills of the Eastern Himalayas, is a city of breathtaking natural beauty and cultural diversity. Home to the Ita Fort — a 14th-century structure that gave the city its name — and the Ganga Lake (Gyakar Sinyi), Itanagar is flanked by thick subtropical forests where wild orchids and rhododendrons grow abundantly. The city is also a meeting point of over 26 major tribes including the Nyishi, Galo, and Adi communities, each bringing their own festivals and floral traditions. The Losar (Tibetan New Year), Dree Festival of the Apatanis, and Ali-Aye-Ligang are occasions when flowers, plants, and natural decorations are central to ceremony.</p>
<p>RedHeart delivers across Itanagar, Naharlagun (the commercial twin), Nirjuli, and Banderdewa. Our bouquet range includes exotic tropical blooms and Himalayan orchids where available, alongside roses and seasonal arrangements. Same-day delivery for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Itanagar, Arunachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Itanagar, Naharlagun, Nirjuli, Banderdewa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Orchids, roses, mixed Himalayan blooms, exotic arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Naharlagun along with Itanagar?",
        answer: "Yes, Naharlagun is covered as part of the Itanagar delivery zone. It is the commercial hub just 11 km from Itanagar and all orders are delivered here with the same timelines."
      },
      {
        question: "Are orchids available for delivery in Itanagar?",
        answer: "Orchids are available in Itanagar from our catalogue. Arunachal Pradesh is famous for its natural orchid diversity, and we carry a range of orchid bouquets and potted plants."
      },
      {
        question: "Can I order flowers for tribal festival occasions in Itanagar?",
        answer: "Absolutely. During Dree, Losar, Solung, and other tribal festivals, colourful and mixed flower arrangements make beautiful gifts. We are happy to customise bouquets with locally relevant flower choices."
      }
    ]
  },

  "dimapur": {
    cityName: "Dimapur",
    metaTitle: "Flower Delivery in Dimapur | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Dimapur, Nagaland. Same-day delivery to Purana Bazar, Supermarket area, Duncan Bosti & more. Roses, bouquets from ₹399.",
    h1: "Online Flower Delivery in Dimapur",
    metaKeyword: "flower delivery dimapur, online flowers dimapur nagaland, florist dimapur, flowers purana bazar dimapur",
    footerContent: `
<h2>Flower Delivery in Dimapur — Colour and Warmth for Nagaland's Commercial Heart</h2>
<p>Dimapur, Nagaland's largest city and commercial capital, is the state's gateway to the rest of India — connected by rail, road, and air to Guwahati and beyond. Unlike the hilly Kohima to its south, Dimapur sits on the plains of the Dhansiri River, making it a bustling trading town with a heterogeneous population of Naga tribes, Bengali and Marwari traders, and Assamese neighbours. The city's Hongkong Market and Supermarket area form one of Northeast India's liveliest bazaars. The Hornbill Festival celebrated annually in Kohima but anticipated city-wide in Dimapur is a proud expression of Naga cultural identity — and flowers, especially seasonal tribal blooms and orchids, play a role in ceremonial décor.</p>
<p>RedHeart delivers flowers across Dimapur — Purana Bazar, Supermarket area, Duncan Bosti, Forest Colony, and Zero Point. We offer roses, seasonal mixed bouquets, and potted plants. Same-day delivery is available for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dimapur, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Purana Bazar, Supermarket area, Duncan Bosti, Forest Colony</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, seasonal mixed bouquets</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Purana Bazar area in Dimapur?",
        answer: "Yes, Purana Bazar is one of our key delivery areas in Dimapur. Orders placed before 3 PM are delivered the same day."
      },
      {
        question: "Can I order flowers for the Hornbill Festival season in Dimapur?",
        answer: "During the Hornbill Festival in December, demand is high. We recommend placing your order 1–2 days in advance for festive arrangements. Orchids and exotic blooms are especially popular."
      },
      {
        question: "What flowers are popular for gifting in Dimapur?",
        answer: "Roses are universally popular in Dimapur for birthdays and anniversaries. Orchid arrangements are a premium choice and orchids native to Nagaland make the bouquets feel local and special."
      }
    ]
  },

  "abohar": {
    cityName: "Abohar",
    metaTitle: "Flower Delivery in Abohar | Same Day | RedHeart",
    metaDescription: "Order fresh flowers in Abohar, Punjab. Same-day delivery of roses, bouquets & seasonal flowers across Abohar and nearby areas. Starting from ₹399.",
    h1: "Online Flower Delivery in Abohar",
    metaKeyword: "flower delivery abohar, online flowers abohar punjab, florist abohar, flowers firozepur road abohar",
    footerContent: `
<h2>Flower Delivery in Abohar — Blooms for the Cotton Belt of Punjab</h2>
<p>Abohar, a prosperous agricultural town in the Fazilka district of Punjab, sits at the edge of the Thar Desert and the fertile Punjab plains. Known as an important centre for cotton cultivation and trading, and more recently for its kinnow orange orchards that supply much of North India's citrus market, Abohar has a strongly rooted agricultural identity. The town's folk culture is deeply Punjabi — Lohri bonfires, Baisakhi celebrations, and wedding seasons that stretch from November to February bring the streets to life with colour. Flowers, garlands, and floral torans are integral to every household celebration in this part of Punjab.</p>
<p>RedHeart delivers fresh flowers across Abohar town and surrounding areas including Fazilka Road, Hindumalkot Road, and nearby villages. Our catalogue features roses, marigold garlands, carnations, and seasonal bouquets. Same-day delivery is available for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Abohar, Fazilka, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Abohar town, Fazilka Road, Hindumalkot Road area</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigold garlands, roses, carnations, wedding arrangements</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I order wedding flowers and garlands in Abohar?",
        answer: "Yes, we offer wedding-ready flower garlands, varmala sets, and decorative bouquets in Abohar. For bulk wedding orders, we recommend placing at least 2 days in advance."
      },
      {
        question: "Do you deliver flowers in Fazilka from Abohar?",
        answer: "Fazilka is a nearby town and is covered under our delivery area. Orders to Fazilka may take slightly longer — we recommend placing by 12 PM for same-day delivery."
      },
      {
        question: "What flowers are popular for Lohri and Baisakhi in Abohar?",
        answer: "Marigold and mogra (jasmine) are traditional favourites for Lohri and Baisakhi in Punjab. Colourful mixed bouquets in yellow and orange shades are also very popular for these harvests festivals."
      }
    ]
  },

  "adilabad": {
    cityName: "Adilabad",
    metaTitle: "Flower Delivery in Adilabad | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Adilabad, Telangana. Roses, bouquets & seasonal blooms delivered same day across Adilabad town. Starting from ₹399.",
    h1: "Online Flower Delivery in Adilabad",
    metaKeyword: "flower delivery adilabad, online flowers adilabad telangana, florist adilabad, fresh flowers adilabad",
    footerContent: `
<h2>Flower Delivery in Adilabad — Wildflower Spirit of Telangana's Northern Border</h2>
<p>Adilabad, the northernmost district headquarters of Telangana, is a town rich in tribal culture and natural beauty. Bordering Maharashtra and Chhattisgarh, Adilabad is home to significant Gond and Kolam tribal communities whose art, music, and festivals are unlike anywhere else in Telangana. The Kawal Wildlife Sanctuary nearby and the forests of the Sahyadri range extension create a backdrop of remarkable greenery. Festivals like Bathukamma — Telangana's flower festival celebrated with stacked floral towers of seasonal blooms — are particularly vibrant here, with women collecting wildflowers from forests to build their Bathukamma stacks over nine days.</p>
<p>RedHeart delivers fresh flowers across Adilabad town — including the Civil Lines, Old Town, and Sadar Bazar areas. We stock roses, marigolds, gerberas, and seasonal Telangana blooms. Same-day delivery is available for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Adilabad, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Old Town, Sadar Bazar, Adilabad town</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Marigolds, gerberas, roses, seasonal Bathukamma blooms</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you have flowers for the Bathukamma festival in Adilabad?",
        answer: "Yes, during the Bathukamma season (Bhadrapada–Ashwina months), we stock the seasonal flowers used for the festival including tangedu, banti, and other blooms. Place early as demand is high."
      },
      {
        question: "Can I send flowers as a gift in Adilabad for a birthday?",
        answer: "Absolutely. Birthday bouquets with roses, gerberas, or mixed flowers are available for same-day delivery in Adilabad. Add a personalised message card to make it extra special."
      },
      {
        question: "Are exotic flowers like orchids available in Adilabad?",
        answer: "Orchids and lilies are available in Adilabad though stock may be limited. For guaranteed exotic flower arrangements, we recommend ordering 1–2 days ahead of your occasion."
      }
    ]
  },

  "panaji": {
    cityName: "Panaji",
    metaTitle: "Flower Delivery in Panaji Goa | Same Day | RedHeart",
    metaDescription: "Fresh flower delivery in Panaji, Goa. Roses, tropical blooms & bouquets delivered same day to Panjim, Porvorim, Dona Paula & nearby areas. From ₹399.",
    h1: "Online Flower Delivery in Panaji, Goa",
    metaKeyword: "flower delivery panaji, online flowers panaji goa, florist panjim, flowers porvorim goa",
    footerContent: `
<h2>Flower Delivery in Panaji — Tropical Blooms for Goa's Charming Capital</h2>
<p>Panaji (Panjim), the compact and charismatic capital of Goa, is a city that wears its Portuguese heritage proudly. The Latin Quarter of Fontainhas — with its brightly coloured houses, narrow lanes, and heritage chapels — is one of India's most photographed neighbourhoods. Panaji's pace is unhurried and beautiful: the Mandovi River winds past the Casino Cruise jetties and the Church of Our Lady of the Immaculate Conception, while the Campal Gardens and Miramar Beach offer quiet evening retreats. Goa's flower culture blends Portuguese Catholic tradition (lilies and white roses for church occasions) with Hindu Konkani festivals like Ganesh Chaturthi, where marigold and hibiscus decorations transform every lane.</p>
<p>RedHeart delivers across Panaji, Porvorim, Dona Paula, Miramar, Caranzalem, Taleigao, and Santa Cruz. Our selection includes tropical Goan blooms, imported roses, bird of paradise, and white lilies — all available same day for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panaji, North Goa, Goa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Panjim, Porvorim, Dona Paula, Miramar, Taleigao, Santa Cruz</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">White lilies, tropical arrangements, roses, bird of paradise</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Can I get tropical flower arrangements delivered in Panaji?",
        answer: "Yes, Panaji's tropical climate means we carry bird of paradise, heliconia, anthuriums, and other exotic blooms alongside roses and lilies. These make stunning arrangements true to Goa's spirit."
      },
      {
        question: "Do you deliver flowers to hotels and resorts in Miramar or Dona Paula?",
        answer: "Absolutely. Hotel deliveries in Miramar, Dona Paula, and surrounding beach areas are available. Please include the hotel name and room number in your delivery instructions."
      },
      {
        question: "What flowers are good for a church event or wedding in Panaji?",
        answer: "White lilies, white roses, and carnations are traditional for Catholic church events in Goa. For Konkani Hindu weddings, marigold torans and jasmine strings are standard. We cater to both traditions."
      }
    ]
  },

  "margao": {
    cityName: "Margao",
    metaTitle: "Flower Delivery in Margao Goa | Same Day | RedHeart",
    metaDescription: "Order flowers online in Margao (Madgaon), South Goa. Fresh roses, tropical blooms & bouquets delivered same day to Margao, Fatorda, Colva & more. From ₹399.",
    h1: "Online Flower Delivery in Margao, Goa",
    metaKeyword: "flower delivery margao, online flowers margao goa, florist madgaon, flowers fatorda colva goa",
    footerContent: `
<h2>Flower Delivery in Margao — South Goa's Commercial Hub in Full Bloom</h2>
<p>Margao (Madgaon), South Goa's largest city and commercial capital, is a city of old Goan grandeur and modern vitality. The grand mansions of the old Lohia Maidan area and the Seven Gables house are reminders of Margao's wealthy Konkani Christian merchant heritage. The famous Margao Municipal Gardens, the Monte Hill church, and the bustling Covered Market make the city feel uniquely Goan — a blend of Portuguese architecture, Konkani Catholic tradition, and a thriving Hindu-Muslim-Christian community living in easy proximity. The region is known for the Madgaon railway station (a key junction for trains to Mumbai and Mangalore), making it a hub of movement and commerce throughout the year.</p>
<p>RedHeart delivers flowers across Margao, Fatorda, Aquem, Comba, Borda, Colva, and Benaulim. We stock tropical flowers, roses, carnations, orchids, and seasonal Goan arrangements. Same-day delivery is available for orders placed before 3 PM.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Margao (Madgaon), South Goa, Goa</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Margao, Fatorda, Aquem, Colva, Benaulim, Borda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹399</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular choices</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Roses, orchids, tropical blooms, carnations</td></tr>
  </tbody>
</table>`,
    faqs: [
      {
        question: "Do you deliver flowers to Colva beach area from Margao?",
        answer: "Yes, Colva and Benaulim are covered under our Margao delivery zone. Beach resort and villa deliveries can also be arranged with prior notice."
      },
      {
        question: "Can I order flowers for Christmas or Easter in Margao?",
        answer: "Yes, Margao has a large Catholic community and Christmas and Easter are big flower-buying occasions. White lilies, poinsettias (during Christmas season), and roses are popular. Order early during festive seasons."
      },
      {
        question: "What is the delivery time for flowers ordered in Margao?",
        answer: "Delivery in Margao typically takes 3–5 hours after order placement. Same-day delivery is available for orders placed before 3 PM. Express slots can be requested for urgent gifts."
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
