// Batch 34b — patch: Anantapur, Eluru

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "anantapur": {
    cityName: "Anantapur",
    metaTitle: "Cake Delivery in Anantapur | Puttaparthi Sai Baba Lepakshi Andhra | RedHeart",
    metaDescription: "Order cakes online in Anantapur. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Anantapur",
    metaKeyword: "cake delivery anantapur, order cake online anantapur, birthday cake anantapur, custom cake anantapur, same day cake delivery anantapur Puttaparthi Sathya Sai Baba Lepakshi Nandi boulder Tungabhadra groundnut capital Andhra Pradesh",
    footerContent: `
<h2>Cake Delivery in Anantapur — Puttaparthi's Sai Baba Ashram, Lepakshi's Nandi and Veerabhadra Temple, and India's Groundnut Capital</h2>
<p>Anantapur — the headquarters of Anantapur district in Andhra Pradesh, India's second-largest district by area and a city of global spiritual fame, magnificent Vijayanagara art, and agricultural dominance (Puttaparthi — 70 km from Anantapur — is the birthplace of Bhagawan Sri Sathya Sai Baba (November 23, 1926 — April 24, 2011) — one of the most globally influential spiritual figures of the 20th century; the Prasanthi Nilayam Ashram at Puttaparthi received millions of international and Indian devotees; the Sri Sathya Sai Institute of Higher Learning (Deemed University), hospitals, schools, and drinking water projects built by the Sai Trust have transformed the Anantapur region; the Lepakshi (Veerabhadra Temple, 15th century CE, Vijayanagara period) — 120 km from Anantapur — is one of India's finest examples of Vijayanagara fresco art and stone sculpture; the Lepakshi temple is famous for the Nandi (bull) monolith (the largest Nandi in India — 4.5 metres high, 8 metres long, carved from a single granite boulder); the "hanging pillar" (Sasivekalu Ganesha Pillar — which does not touch the ground completely and through which cloth can be passed) is one of Lepakshi's most fascinating architectural mysteries; the mural paintings of the Lepakshi temple ceiling (depicting Ramayana, Mahabharata scenes) are masterpieces; Anantapur district is India's leading groundnut (peanut) producing district — accounting for 25-30% of India's total groundnut production; the Tungabhadra River (Hampi/Vijayanagara nearby) borders the district; Hindupur and Guntakal are major industrial towns), and a city of Sai Baba devotion, Vijayanagara art, and peanut abundance — is Andhra's most globally recognized pilgrimage city. From birthday parties near the Prasanthi Nilayam to Puttaparthi celebration cakes, from Lepakshi temple cakes to anniversary surprises — RedHeart covers all Anantapur zones: Anantapur town, Puttaparthi, Hindupur, Guntakal, Tadipatri, Kadiri, Dharmavaram, Madanapalle.</p>
<p>Our Anantapur cake range: Chocolate, Black Forest, Red Velvet, Peanut Butter (Groundnut!), Butterscotch, Mango, Photo Cakes, Fondant Puttaparthi Sai Baba / Lepakshi Nandi / Vijayanagara Fresco-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anantapur, Andhra Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Anantapur town, Puttaparthi, Hindupur, Guntakal, Tadipatri, Kadiri, Dharmavaram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Peanut Butter, Chocolate, Sai Baba Fondant, Lepakshi Nandi Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Anantapur?", answer: "Yes, same-day cake delivery is available across all Anantapur areas — Anantapur town, Puttaparthi, Hindupur, Guntakal, Tadipatri, Kadiri, and Dharmavaram — for orders placed before 3 PM." },
      { question: "Do you have Sai Baba Puttaparthi and Lepakshi Nandi-themed cakes?", answer: "Yes! The Prasanthi Nilayam Ashram at Puttaparthi (global headquarters of Sathya Sai Baba's movement) and Lepakshi's magnificent Nandi monolith (India's largest Nandi — carved from a single granite boulder — plus Vijayanagara ceiling frescoes and the mysterious hanging pillar) inspire our most devotionally and artistically stunning Anantapur fondant cakes." },
      { question: "Are eggless cakes available in Anantapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Peanut Butter, Mango — are available in eggless variants for Anantapur delivery." }
    ]
  },

  "eluru": {
    cityName: "Eluru",
    metaTitle: "Cake Delivery in Eluru | Ikat Weaving West Godavari Andhra | RedHeart",
    metaDescription: "Order cakes online in Eluru. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Eluru",
    metaKeyword: "cake delivery eluru, order cake online eluru, birthday cake eluru, custom cake eluru, same day cake delivery eluru ikat weaving GI Pochampally West Godavari Godavari Krishna canal Kolleru lake Andhra Pradesh",
    footerContent: `
<h2>Cake Delivery in Eluru — GI Eluru Ikat Weaving, Kolleru Lake's Ramsar Wetland, and Godavari-Krishna Canal Network</h2>
<p>Eluru — the headquarters of Eluru district (West Godavari district, now bifurcated) in Andhra Pradesh, the commercial and cultural capital of the West Godavari delta region and a significant handloom weaving centre (the Eluru-Puttapaka-Bhoodan Pochampally ikat weaving tradition is one of India's most celebrated and GI-tagged handloom crafts; Eluru itself and the West Godavari area have their own ikat carpet and saree weaving tradition using the resist-dyeing (ikat) technique on silk, cotton, and synthetic fibres; the Eluru carpets (woollen and cotton floor coverings) and the region's Jamdani-type weaving are significant craft traditions; the Kolleru Lake — 15 km from Eluru — is one of India's largest freshwater lakes (245 sq km at full capacity) and a Ramsar-listed wetland of international importance; the Kolleru Lake attracts hundreds of thousands of migratory birds in winter including the open-billed stork, painted stork, Grey Pelican, and rare waterbirds; the Godavari-Krishna canal system (the oldest irrigation canals in India — built by Sir Arthur Cotton in the 1850s under the British East India Company) runs through the West Godavari area; Arthur Cotton, who built the Dowleswaram (Rajamundry) barrage and the canal network that transformed the Godavari delta into one of India's most productive agricultural zones, is considered a hero in the region; the Eluru district has Tanuku, Tadepalligudem, and Bhimavaram as major towns; Bhimavaram has the Bhimavaram Buddha Dhyana Stupa (2006 — a large white Buddhist stupa)), and a city of ikat craft and wetland ecology — is Andhra's most intricate weaving delta city. From birthday parties in Eluru to ikat-themed celebration cakes, from anniversary surprises near Kolleru to student cakes — RedHeart covers all Eluru zones: Eluru town, Tanuku, Tadepalligudem, Bhimavaram, Narasapuram, Palakol, Kovvur.</p>
<p>Our Eluru cake range: Chocolate, Black Forest, Red Velvet, Coconut (Godavari delta!), Mango, Butterscotch, Photo Cakes, Fondant Eluru Ikat Weaving / Kolleru Ramsar Lake / Arthur Cotton Canal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;"><th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th><th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th></tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru, Andhra Pradesh (West Godavari)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eluru town, Tanuku, Tadepalligudem, Bhimavaram, Narasapuram, Palakol, Kovvur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coconut, Chocolate, Ikat Weaving Fondant, Kolleru Lake Fondant, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Eluru?", answer: "Yes, same-day cake delivery is available across all Eluru areas — Eluru town, Tanuku, Tadepalligudem, Bhimavaram, Narasapuram, and Palakol — for orders placed before 3 PM." },
      { question: "Do you have GI Eluru Ikat Weaving and Kolleru Lake-themed cakes?", answer: "Yes! The GI-tagged Eluru ikat carpet and saree weaving (resist-dyed silk and cotton crafts of the West Godavari delta) and the Kolleru Lake Ramsar wetland (245 sq km, hundreds of thousands of storks and pelicans in winter) inspire our most colourfully woven and ecologically vibrant Eluru fondant cakes." },
      { question: "Are eggless cakes available in Eluru?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut, Mango — are available in eggless variants for Eluru delivery." }
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
