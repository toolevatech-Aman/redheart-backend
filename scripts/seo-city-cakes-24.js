// Cakes Batch 24 — 15 cities:
// Bihar: Vaishali (Hajipur), Rohtas (Sasaram), Aurangabad Bihar
// Karnataka: Yadgir, Karwar (Uttara Kannada), Udupi
// Telangana: Wanaparthy, Medak
// Assam: North Lakhimpur, Kokrajhar
// UP: Hathras, Etah
// Arunachal: Tawang
// HP: Una
// Nagaland: Dimapur

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "vaishali": {
    cityName: "Vaishali",
    metaTitle: "Cake Delivery in Vaishali | Hajipur Bihar | RedHeart",
    metaDescription: "Order cakes online in Vaishali. Same-day delivery across Hajipur and Vaishali. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Vaishali",
    metaKeyword: "cake delivery vaishali hajipur, order cake online vaishali, birthday cake hajipur, custom cake vaishali, same day cake delivery vaishali hajipur licchi jain republic gandhi maidan patna road",
    footerContent: `
<h2>Cake Delivery in Vaishali — World's First Republic, Jain Tirthankar's Birthplace, and Bihar's Licchi Capital</h2>
<p>Vaishali — the headquarters of Vaishali district in Bihar (district HQ at Hajipur), one of the most historically significant places on earth (Vaishali, the ancient Lichhavi capital, was the world's first democratic republic — approximately 600 BCE, the Lichhavi clan held a form of representative republican governance centuries before Athens or Rome; the United Nations commemorates Vaishali as the World's First Republic; the Vaishali Museum and Ashokan Pillar at Kolhua (with the Lion Capital) are the primary heritage sites; the Kolhua Buddha's Relic Stupa — built by the Licchavis and later expanded by Ashoka — contains remains of the Buddha who gave his last sermon here; Vaishali is also the birthplace of Lord Mahavira (599 BCE) — the 24th Jain Tirthankar — at Vaishali town (modern Basokund); the Jain Vishwa Bharati museum and temples at Vaishali are major pilgrimage sites; the Vaishali Mahotsav is a major cultural festival), and Hajipur — the district headquarters and commercial city on the Ganga-Gandhi Setu bank — is famous for India's finest licchi (Hajipur Shahi Litchi — with GI indication — is considered the finest in India; the Hajipur Licchi is sweeter, juicier, and more fragrant than other varieties; Hajipur licchi orchards stretch through the district and the licchi season is May-June) — is a city of world heritage democracy and GI licchi fame. From birthday parties in Hajipur to corporate cakes, from anniversary surprises near the Patna bridge to celebration cakes for Mahavira Jayanti and Buddha Purnima — RedHeart covers all Vaishali zones: Hajipur (Civil Lines, Patna Road, Gandhi Maidan), Vaishali town (Kolhua, Basokund, Lalganj), Rural (Mahnar, Jandaha, Patepur, Raghopur).</p>
<p>Our Vaishali cake range: Chocolate, Black Forest, Red Velvet, Litchi (Hajipur Shahi Litchi — the GI variety!), Butterscotch, Photo Cakes, Fondant Republic Vaishali / Mahavira / Ashokan Pillar-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Vaishali (Hajipur), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hajipur Civil Lines, Patna Road, Gandhi Maidan, Kolhua, Basokund, Lalganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Litchi Cake, Chocolate, Ashokan Pillar Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Vaishali / Hajipur?", answer: "Yes, same-day cake delivery is available across all Vaishali and Hajipur areas — Civil Lines, Patna Road, Gandhi Maidan, and Kolhua — for orders placed before 3 PM." },
      { question: "Do you have Hajipur Shahi Litchi cake in Vaishali?", answer: "Yes! The Hajipur Shahi Litchi — Bihar's GI-protected variety, considered India's finest litchi, sweeter and more fragrant than any other — flavours our special Litchi cake for Vaishali deliveries. A true Hajipur celebration taste." },
      { question: "Are eggless cakes available in Vaishali / Hajipur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Litchi — are available in eggless variants for Vaishali and Hajipur delivery." }
    ]
  },

  "rohtas": {
    cityName: "Rohtas",
    metaTitle: "Cake Delivery in Rohtas | Sasaram Sher Shah Suri Bihar | RedHeart",
    metaDescription: "Order cakes online in Rohtas (Sasaram). Same-day delivery across Sasaram. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Rohtas",
    metaKeyword: "cake delivery rohtas sasaram, order cake online sasaram, birthday cake sasaram, custom cake rohtas, same day cake delivery rohtas sasaram sher shah suri mausoleum grand trunk road NH2 Kaimur Varanasi border",
    footerContent: `
<h2>Cake Delivery in Rohtas (Sasaram) — Sher Shah Suri's Magnificent Mausoleum, Grand Trunk Road's Birthplace, and Bihar's Kaimur Gateway</h2>
<p>Rohtas — the headquarters of Rohtas district in Bihar (the district HQ is at Sasaram), a city of one of India's most breathtaking Islamic architectural masterpieces (the Sher Shah Suri Mausoleum in Sasaram — the tomb of Sher Shah Suri, the Afghan-origin Afghan emperor who briefly wrested the Mughal throne from Humayun (1540-1545) and built the Grand Trunk Road (Sadak-e-Azam) from Chittagong to Kabul — is a mid-16th century architectural marvel; the octagonal mausoleum, set in the middle of a lake at Sasaram, rises to 46 metres on a high plinth and is considered one of the finest examples of Afghan-Mughal fusion architecture in India; Sher Shah Suri's brief but impactful reign included the creation of the rupee currency system, the postal system (dak chowki), and the standardised land revenue system — many of which were later continued by the Mughals; the Grand Trunk Road — one of Asia's longest and oldest roads, dating to the Mauryan period and rebuilt by Sher Shah — passes through Sasaram, making it the birthplace of India's modern highway system; additionally, Rohtas Fort — one of India's largest forts, on the Kaimur Hills above Rohtas — was Sher Shah's original stronghold and is now an ASI monument) — is a city of Grand Trunk Road legacy and architectural grandeur. From birthday parties in the Sasaram Civil Lines to corporate cakes at the large cement plants, from anniversary surprises near the Varanasi Road to student cakes at Rohtas's colleges — RedHeart covers all Rohtas zones: Sasaram (Civil Lines, Station Road, GT Road), North (Arrah Road, Bikramganj, Nokha), South (Kaimur border, Rohtas Fort, Dehri), East (Aurangabad border, Tilouthu, Chenari), West (UP border, Obra, Dinara).</p>
<p>Our Rohtas cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi!), Butterscotch, Photo Cakes, Fondant Sher Shah Suri Mausoleum / Grand Trunk Road-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rohtas (Sasaram), Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Sasaram Civil Lines, Station Road, GT Road, Bikramganj, Nokha, Dehri</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sher Shah Mausoleum Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Rohtas / Sasaram?", answer: "Yes, same-day cake delivery is available across all Rohtas and Sasaram areas — Civil Lines, Station Road, GT Road, Bikramganj, and Dehri — for orders placed before 3 PM." },
      { question: "Do you have Sher Shah Suri / Grand Trunk Road-themed cakes in Sasaram?", answer: "Yes! Sher Shah Suri's magnificent lake mausoleum in Sasaram — one of India's finest 16th-century architectural masterpieces — and his creation of the Grand Trunk Road (the father of India's highway system) inspire our Sher Shah fondant cakes." },
      { question: "Are eggless cakes available in Rohtas / Sasaram?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Rohtas and Sasaram delivery." }
    ]
  },

  "aurangabad-bihar": {
    cityName: "Aurangabad",
    metaTitle: "Cake Delivery in Aurangabad Bihar | Dev Surya Mandir | RedHeart",
    metaDescription: "Order cakes online in Aurangabad Bihar. Same-day delivery across Aurangabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Aurangabad Bihar",
    metaKeyword: "cake delivery aurangabad bihar, order cake online aurangabad bihar, birthday cake aurangabad, custom cake aurangabad bihar, same day cake delivery aurangabad bihar dev surya mandir chhath puja gaya road patna road",
    footerContent: `
<h2>Cake Delivery in Aurangabad Bihar — Dev Surya Mandir's Chhath Puja Epicentre, Bihar's Chhath Capital, and Magadha's Southern Gateway</h2>
<p>Aurangabad — the headquarters of Aurangabad district in Bihar (not to be confused with Maharashtra's Aurangabad, now Chhatrapati Sambhajinagar), a city of Bihar's most sacred sun worship tradition (the Dev Surya Mandir at Dev village, approximately 12 km from Aurangabad town, is India's most significant sun temple for Chhath Puja; the temple is dedicated to Surya (the Sun God) and is the site of one of the largest Chhath Puja gatherings in India — hundreds of thousands of devotees come here during Chhath; the Dev Surya Mandir complex contains the Sita Kund — where Sita Mata is said to have offered Chhath; the idols in the Dev temple are unique — facing west rather than east; the Chhath Puja (a 4-day festival of sun worship, observed at sunset and sunrise, with offerings of fruits and thekua sweets) is one of Bihar's most important cultural festivals and is especially deeply observed in Aurangabad; the Aurangabad district is known as the cradle of Chhath Puja's grandest celebration), an agricultural district producing wheat, paddy, and maize in the Son River basin (the Son River flows through Aurangabad), and a district on the border of Bihar and Jharkhand — is a city of sun temple pilgrimage and Chhath devotion. From birthday parties in the Civil Lines area to corporate cakes at the large rice mills, from anniversary surprises near the Gaya Road to Chhath celebration cakes — RedHeart covers all Aurangabad Bihar zones: Central (Civil Lines, Station Road, Gaya Road), North (Gaya border, Rafiganj, Obra), South (Jharkhand border, Daudnagar, Nabinagar), East (Jehanabad border, Gurua), West (Rohtas border, Karakat, Kutumba).</p>
<p>Our Aurangabad Bihar cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi!), Butterscotch, Thekua-inspired (Chhath Puja's sacred sweet!), Photo Cakes, Fondant Dev Surya Mandir / Chhath-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Aurangabad, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gaya Road, Rafiganj, Daudnagar, Nabinagar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Dev Surya Mandir Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Aurangabad Bihar?", answer: "Yes, same-day cake delivery is available across all Aurangabad areas — Civil Lines, Station Road, Gaya Road, Rafiganj, and Daudnagar — for orders placed before 3 PM." },
      { question: "Do you have Dev Surya Mandir / Chhath-themed cakes in Aurangabad Bihar?", answer: "Yes! The Dev Surya Mandir at Dev village — India's most sacred Chhath Puja sun temple, drawing hundreds of thousands of devotees for the festival — inspires our Dev Surya and Chhath-theme fondant cakes." },
      { question: "Are eggless cakes available in Aurangabad Bihar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Aurangabad Bihar delivery." }
    ]
  },

  "yadgir": {
    cityName: "Yadgir",
    metaTitle: "Cake Delivery in Yadgir | Sannati Buddhist Stupa Karnataka | RedHeart",
    metaDescription: "Order cakes online in Yadgir. Same-day delivery across Yadgir. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Yadgir",
    metaKeyword: "cake delivery yadgir, order cake online yadgir, birthday cake yadgir, custom cake yadgir, same day cake delivery yadgir sannati buddhist stupa krishna river kalyani gulbarga road andhra border",
    footerContent: `
<h2>Cake Delivery in Yadgir — Sannati's Rare Buddhist Relics, Krishna River Valley, and Karnataka's Newest District</h2>
<p>Yadgir — the headquarters of Yadgir district in Karnataka (one of Karnataka's newest districts, carved out of Gulbarga/Kalaburagi in 2010), a district with surprising Buddhist heritage and Krishna river beauty (the Sannati village in Yadgir district is one of India's most significant Buddhist archaeological sites — the Sannati Buddhist Stupa (also called Kanaganahalli Stupa) contains extraordinary sculptural panels from the 1st-3rd century CE depicting scenes from the Buddha's life, Ashoka-era Dhamma stories, and the very first portrait of Emperor Ashoka with a Brahmi inscription identifying him by name; the Kanaganahalli stupa's sculptural quality rivals the Amaravati stupa panels and the Sanchi reliefs; these panels are now housed in the Gulbarga Museum; additionally, Sannati's Chandralamba Devi temple is a major religious site; the Krishna River, at Sannati and Hunagunda, forms the northern boundary of Yadgir and provides irrigation for paddy, jowar, and cotton), bordering Andhra Pradesh and Telangana (Yadgir borders Andhra Pradesh's Nandyal and Kurnool districts on the east), and a district known for jowar (sorghum) and cotton cultivation in the semi-arid Deccan plateau — is a city of hidden Buddhist heritage and river border position. From birthday parties in the Civil Lines area to corporate cakes at the government offices, from anniversary surprises near the Gulbarga Road to student cakes at Yadgir's colleges — RedHeart covers all Yadgir zones: Central (Civil Lines, Station Road, Gulbarga Road), North (Bidar border, Shorapur, Gurmatkal), South (Raichur border, Yadgir rural, Shahpur), East (Andhra border, Sannati, Hunagunda), West (Bidar border, Gurmitkal, Nalwar).</p>
<p>Our Yadgir cake range: Chocolate, Black Forest, Red Velvet, Mango (Karnataka Alphonso!), Butterscotch, Photo Cakes, Fondant Sannati Stupa / Buddhist-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Yadgir, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gulbarga Road, Shorapur, Sannati, Shahpur</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sannati Stupa Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Yadgir?", answer: "Yes, same-day cake delivery is available across all Yadgir areas — Civil Lines, Station Road, Gulbarga Road, and Shorapur — for orders placed before 3 PM." },
      { question: "Do you have Sannati Buddhist Stupa-themed cakes in Yadgir?", answer: "Yes! The Sannati/Kanaganahalli Buddhist Stupa — one of India's most significant archaeological sites, with extraordinary 1st-3rd century CE sculptural panels and the oldest known portrait of Emperor Ashoka — inspires our Sannati Stupa fondant cakes." },
      { question: "Are eggless cakes available in Yadgir?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Yadgir delivery." }
    ]
  },

  "karwar": {
    cityName: "Karwar",
    metaTitle: "Cake Delivery in Karwar | INS Kadamba Konkan Karnataka | RedHeart",
    metaDescription: "Order cakes online in Karwar. Same-day delivery across Karwar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Karwar",
    metaKeyword: "cake delivery karwar, order cake online karwar, birthday cake karwar, custom cake karwar, same day cake delivery karwar INS kadamba naval base Rabindranath Tagore sea Kali river Goa border Uttara Kannada",
    footerContent: `
<h2>Cake Delivery in Karwar — INS Kadamba Naval Base, Tagore's Inspiration, and Uttara Kannada's Arabian Sea Capital</h2>
<p>Karwar — the headquarters of Uttara Kannada district in Karnataka, a harbour city of naval importance, literary legacy, and Konkan coastline beauty (INS Kadamba at Karwar is India's largest naval base — the massive naval installation in Karwar Bay is one of India's biggest defence projects, housing the Western Naval Command's western seaboard operations, nuclear submarines, aircraft carriers, and surface fleet vessels; the base was built over decades and is considered India's most secure naval harbour; the Kadamba Port is a deep-water harbour; the Karwar area's scenic bay inspired Rabindranath Tagore — he wrote his play "Chitrangada" and was inspired by Karwar's natural beauty during his visit in 1882; the Tagore Beach at Karwar commemorates this; the city sits at the confluence of the Kali River with the Arabian Sea, with the Devbagh Beach island, the Oyster Rock Lighthouse, and the Kurumgad island as scenic attractions; the Sadashivgad Fort on a hill above the Kali River estuary is a historical landmark; Karwar is famous for sweet water from the Kali River and locally caught seafood — bangda, pomfret, and Malvani-style Konkan fish preparations), a city bordering Goa to the north (the Goa-Karnataka border crosses just north of Karwar; the Goa-Karnataka coastal corridor is one of India's most scenic), and the headquarters of one of Karnataka's most forested and biodiversity-rich districts — Uttara Kannada (with Dandeli wildlife sanctuary, Anshi National Park, and the Western Ghats' most intact forests) — is a city of sea, navy, and nature. From birthday parties near the naval township to corporate cakes at the port offices, from anniversary surprises near the Devbagh Beach to student cakes at Karwar's colleges — RedHeart covers all Karwar zones: Central (Civil Lines, Port Road, Tagore Beach), North (Goa border, Sadashivgad, Belekeri), South (Ankola, Kumta Road, Honnavar), East (Dandeli Road, Yellapur, Supa), West (Arabian Sea coast, Devbagh, Majali).</p>
<p>Our Karwar cake range: Chocolate, Black Forest, Red Velvet, Coconut (Konkan coastal!), Butterscotch, Photo Cakes, Fondant INS Kadamba / Konkan Sea-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Karwar, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Port Road, Tagore Beach, Sadashivgad, Ankola, Devbagh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, INS Kadamba Naval Fondant, Coconut, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Karwar?", answer: "Yes, same-day cake delivery is available across all Karwar areas — Civil Lines, Port Road, Tagore Beach, and Sadashivgad — for orders placed before 3 PM." },
      { question: "Do you have INS Kadamba Naval / Konkan Sea-themed cakes in Karwar?", answer: "Yes! INS Kadamba — India's largest naval base at Karwar Harbour — and the beautiful Konkan coastline where Tagore was inspired to write Chitrangada inspire our naval heritage and sea-themed fondant cakes." },
      { question: "Are eggless cakes available in Karwar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Coconut — are available in eggless variants for Karwar delivery." }
    ]
  },

  "udupi": {
    cityName: "Udupi",
    metaTitle: "Cake Delivery in Udupi | Krishna Matha Tulu Nadu Karnataka | RedHeart",
    metaDescription: "Order cakes online in Udupi. Same-day delivery across Udupi. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Udupi",
    metaKeyword: "cake delivery udupi, order cake online udupi, birthday cake udupi, custom cake udupi, same day cake delivery udupi krishna matha cuisine tulu malyali Manipal Kundapura Malpe beach",
    footerContent: `
<h2>Cake Delivery in Udupi — Krishna Matha's Living Dvaita Tradition, Udupi Cuisine's Global Fame, and Tulu Nadu's Pilgrim City</h2>
<p>Udupi — the headquarters of Udupi district in Karnataka, a city of extraordinary religious, culinary, and educational significance (the Sri Krishna Matha at Udupi — established by Madhvacharya in the 13th century — is one of India's most important Vaishnava temples; the Udupi Krishna temple is unique: the presiding deity is viewed through a window with a hole (kankanakabbe — said to be made by the devotee Kanakadasa when he was denied entry as a lower-caste person; Lord Krishna turned his face to look at Kanakadasa through the window); the 8 Mathas (monasteries) at Udupi are presided over by eight swamijis who take turns managing the temple in a 2-year rotation (Paryaya); the Paryaya festival at Udupi is one of Karnataka's biggest religious events; the Udupi Satvic cuisine tradition has given India and the world the concept of the "Udupi hotel" — the Udupi-style South Indian vegetarian restaurant (masala dosa, idli, sambar, rasam, payasa) has spread to every Indian city and every Indian neighbourhood abroad; the distinctly vegetarian, oil-free, Sattvic cooking tradition of Udupi's Brahmin communities has become synonymous with South Indian vegetarian food globally; additionally, Manipal — located 5 km from Udupi — is home to Manipal University, one of India's premier private universities, and the Kasturba Medical College, making Udupi-Manipal a major education hub), a city with beautiful coastal access (Malpe Beach with St. Mary's Island — the basalt hexagonal rock formations on the island are a Geological Survey of India National Heritage), and a commercial city for Tulu Nadu's cultural zone — is a city of temple, taste, and academic excellence. Cakes for Krishna Jayanti, birthday parties at Manipal University hostels, corporate cakes at Udupi's education institutions — RedHeart covers all Udupi zones: Udupi town (Krishna Matha area, MIT Road, Manipal Road), Manipal, Kundapura, Karkala, Brahmavar, Malpe Beach area.</p>
<p>Our Udupi cake range: Chocolate, Black Forest, Red Velvet, Coconut (Tulu Nadu coastal!), Payasa-flavoured, Photo Cakes, Fondant Krishna Matha / Dvaita Vedanta-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udupi, Karnataka</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Udupi town, Krishna Matha area, Manipal, Kundapura, Karkala, Malpe Beach</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Krishna Matha Fondant, Coconut, Payasa, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Udupi and Manipal?", answer: "Yes, same-day cake delivery is available across all Udupi areas — Udupi town, Krishna Matha area, Manipal University, Kundapura, and Karkala — for orders placed before 3 PM." },
      { question: "Do you have Krishna Matha / Udupi cuisine-themed cakes?", answer: "Yes! The Sri Krishna Matha — established by Madhvacharya in the 13th century, the birthplace of the Udupi Satvic vegetarian tradition that gifted the world the masala dosa — inspires our Krishna Matha fondant cakes." },
      { question: "Are eggless cakes available in Udupi?", answer: "Yes, absolutely — given Udupi's deeply Sattvic vegetarian tradition, all our cakes are available in eggless variants. Eggless Chocolate, Black Forest, Red Velvet, and Coconut cakes are all available for Udupi delivery." }
    ]
  },

  "wanaparthy": {
    cityName: "Wanaparthy",
    metaTitle: "Cake Delivery in Wanaparthy | Telangana New District | RedHeart",
    metaDescription: "Order cakes online in Wanaparthy. Same-day delivery across Wanaparthy. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Wanaparthy",
    metaKeyword: "cake delivery wanaparthy, order cake online wanaparthy, birthday cake wanaparthy, custom cake wanaparthy, same day cake delivery wanaparthy Mahbubnagar Krishna river Jadcherla Mahabubnagar road cotton soya",
    footerContent: `
<h2>Cake Delivery in Wanaparthy — Wanaparthy Palace Heritage, Krishna River Tributaries, and Telangana's New Mahabubnagar Successor District</h2>
<p>Wanaparthy — the headquarters of Wanaparthy district in Telangana (one of the new districts carved out of Mahbubnagar district in 2016), a city with a distinctive royal heritage (the Wanaparthy Samsthanam — the former princely estate of Wanaparthy — was one of the important small princely states under the Nizam of Hyderabad; the Wanaparthy Palace, built in the Indo-Saracenic style, has a distinctive European-influenced architecture blended with Hyderabadi design; the palace has a clock tower and ornate interiors that reflect the culture of the Wanaparthy Rajas who were great patrons of Carnatic and Kuchipudi dance; the last Wanaparthy Raja's cultural patronage and collection are preserved in the palace; additionally, Wanaparthy is agriculturally important: the district produces significant amounts of cotton, red sorghum (jowar), and turmeric in the Deccan plateau's black soil zone), connected to the Krishna River basin (the Mahanadi Reservoir and the Jurala Dam — both on the Krishna River system — provide water to parts of Wanaparthy; the Rajoli Banda Diversion Scheme canal flows through the district), and a district with traditional weaving in Gadwal (Gadwal sarees — with their distinctive Zari borders and cotton body, woven in the GI-protected Gadwal taluk — are one of Telangana's most prestigious textile traditions; Gadwal is in Jogulamba Gadwal district but adjacent to Wanaparthy) — is a city of palace heritage and agricultural prosperity. From birthday parties in the Civil Lines area to corporate cakes at government offices, from anniversary surprises near the Hyderabad Road to student cakes at Wanaparthy's colleges — RedHeart covers all Wanaparthy zones: Central (Civil Lines, Palace Road, Hyderabad Road), North (Hyderabad border, Jadcherla, Mahabubnagar), South (Nagarkurnool border, Gopalpet, Atmakur), East (Nalgonda border, Pebbair, Kollapur), West (Jogulamba Gadwal border, Revally).</p>
<p>Our Wanaparthy cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Wanaparthy Palace / Telangana heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Wanaparthy, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Palace Road, Hyderabad Road, Jadcherla, Gopalpet, Pebbair</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Wanaparthy Palace Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Wanaparthy?", answer: "Yes, same-day cake delivery is available across all Wanaparthy areas — Civil Lines, Palace Road, Hyderabad Road, and Jadcherla — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Wanaparthy?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Wanaparthy delivery." },
      { question: "Do you deliver midnight cakes in Wanaparthy?", answer: "Yes, midnight birthday cake delivery is available across Wanaparthy's central and residential zones." }
    ]
  },

  "medak": {
    cityName: "Medak",
    metaTitle: "Cake Delivery in Medak | Cathedral of St. Mary Telangana | RedHeart",
    metaDescription: "Order cakes online in Medak. Same-day delivery across Medak. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Medak",
    metaKeyword: "cake delivery medak, order cake online medak, birthday cake medak, custom cake medak, same day cake delivery medak cathedral church largest diocese medak fort sangareddy road hyderabad road Nalgonda",
    footerContent: `
<h2>Cake Delivery in Medak — Asia's Largest Diocese Cathedral, Medak Fort's Hill Bastion, and Telangana's Heritage Town</h2>
<p>Medak — the headquarters of Medak district in Telangana, a city of one of Asia's most significant Christian heritage sites and a formidable Nizam-era fort (the Cathedral of Saint Mary at Medak is one of the largest cathedrals in Asia — built between 1914 and 1924 by the Methodist Episcopal Mission under the direction of Bishop Waskom Pickett; the Medak Cathedral can hold 5,000 people and its German-imported stained glass windows are of exceptional quality; the cathedral was built with the voluntary labour of Indian converts to Methodism; the Medak Diocese — founded by American Methodist missionaries and later the CSI Church of South India — is a major Telugu Christian community institution; Medak's Christian community has a deep history and the cathedral is a major pilgrimage and tourist site; additionally, the Medak Fort — a 16th century Qutb Shahi fort on a hill above Medak town — has a distinctive mosque (Jama Masjid of Medak) and bastions that command views of the surrounding Deccan plateau; the Medak district was historically called Methuku or Medaki and was part of the Nizam's territories), an agricultural district producing cotton, paddy, and maize (the Manjira River and its tributaries irrigate Medak's eastern zones), and a district bordering Sangareddy, Nalgonda, Kamareddy, and Siddipet — is a city of cathedral grandeur and fort heritage. From birthday parties near the cathedral to corporate cakes at government offices, from anniversary surprises near the Sangareddy Road to student cakes at Medak's colleges — RedHeart covers all Medak zones: Central (Civil Lines, Cathedral Road, Sangareddy Road), North (Kamareddy border, Narsapur, Koheda), South (Sangareddy border, Ramayampet, Chegunta), East (Siddipet border, Dubbak, Toopran), West (Vikarabad border, Andole, Papannapet).</p>
<p>Our Medak cake range: Chocolate, Black Forest, Red Velvet, Mango (Telangana Banganapalli!), Butterscotch, Photo Cakes, Fondant Medak Cathedral / Fort-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Medak, Telangana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Cathedral Road, Sangareddy Road, Narsapur, Ramayampet, Toopran</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Cathedral Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Medak?", answer: "Yes, same-day cake delivery is available across all Medak areas — Civil Lines, Cathedral Road, Sangareddy Road, and Narsapur — for orders placed before 3 PM." },
      { question: "Do you have Medak Cathedral-themed cakes?", answer: "Yes! The Cathedral of Saint Mary in Medak — one of Asia's largest cathedrals (1914-1924), with extraordinary German stained glass windows and capacity for 5,000 worshippers — inspires our Medak Cathedral fondant cakes." },
      { question: "Are eggless cakes available in Medak?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Medak delivery." }
    ]
  },

  "north-lakhimpur": {
    cityName: "North Lakhimpur",
    metaTitle: "Cake Delivery in North Lakhimpur | Brahmaputra Assam | RedHeart",
    metaDescription: "Order cakes online in North Lakhimpur. Same-day delivery across Lakhimpur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in North Lakhimpur",
    metaKeyword: "cake delivery north lakhimpur, order cake online lakhimpur assam, birthday cake north lakhimpur, custom cake lakhimpur, same day cake delivery north lakhimpur Brahmaputra north bank Arunachal border Kaziranga namdang tea garden",
    footerContent: `
<h2>Cake Delivery in North Lakhimpur — Arunachal Pradesh Gateway, Brahmaputra Flood Plains, and Assam's Northernmost Commercial City</h2>
<p>North Lakhimpur — the headquarters of Lakhimpur district in Assam, the most important commercial city of Assam's north bank east (North Lakhimpur is the commercial hub for the vast sub-Himalayan region of eastern Assam's north bank — the area between the Brahmaputra River and the Arunachal Pradesh foothills; the city is the last major urban centre before the Assam-Arunachal Pradesh border; it serves as the gateway and base for travel to Arunachal's Papum Pare, Lower Subansiri, and Upper Subansiri districts; the Lakhimpur district borders Arunachal Pradesh, Dhemaji, and Majuli — the world's largest riverine island; the district is a flood-affected zone — annual Brahmaputra floods affect the Lakhimpur plains every year; the city has important commercial markets for the trade in rubber, tea, seasonal vegetables, and timber from the Arunachal border areas; the Namdang Tea Estate near North Lakhimpur is one of the region's tea plantations; the Subansiri River — which flows from Arunachal Pradesh into Assam through Lakhimpur — is one of the Brahmaputra's major tributaries and is the site of the controversial Subansiri Lower Hydroelectric Project), close to Majuli (the world's largest river island, 40 km from Lakhimpur via the Brahmaputra ferry) and the biodiversity corridor connecting Kaziranga and Dibru-Saikhowa — is a city of strategic border position and Assam's sub-Himalayan east. From birthday parties in the Civil Lines area to corporate cakes at the tea estate offices, from Bihu celebration cakes to anniversary surprises near the Arunachal Road — RedHeart covers all North Lakhimpur zones: Central (Civil Lines, Subansiri Road, Arunachal Road), North (Arunachal border, Gogamukh, Bihpuria), South (Brahmaputra bank, Dhakuakhana, Naoboicha), East (Dhemaji border, Subansiri, Jonai), West (Majuli ferry, Kamalabari Road).</p>
<p>Our North Lakhimpur cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Tea-Caramel (Assam CTC!), Photo Cakes, Fondant Majuli / Subansiri River-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">North Lakhimpur, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Subansiri Road, Arunachal Road, Gogamukh, Bihpuria, Dhakuakhana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Tea-Caramel, Black Forest, Majuli Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in North Lakhimpur?", answer: "Yes, same-day cake delivery is available across all North Lakhimpur areas — Civil Lines, Subansiri Road, Arunachal Road, and Gogamukh — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in North Lakhimpur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for North Lakhimpur delivery." },
      { question: "Do you deliver midnight cakes in North Lakhimpur?", answer: "Yes, midnight birthday cake delivery is available across North Lakhimpur's central and residential zones." }
    ]
  },

  "kokrajhar": {
    cityName: "Kokrajhar",
    metaTitle: "Cake Delivery in Kokrajhar | Bodoland BTAD Assam | RedHeart",
    metaDescription: "Order cakes online in Kokrajhar. Same-day delivery across Kokrajhar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Kokrajhar",
    metaKeyword: "cake delivery kokrajhar, order cake online kokrajhar, birthday cake kokrajhar, custom cake kokrajhar, same day cake delivery kokrajhar Bodoland BTR Bodo tribe Manas Bhutan border Assam jute tea",
    footerContent: `
<h2>Cake Delivery in Kokrajhar — Bodoland's Administrative Capital, Manas UNESCO Buffer Zone, and Bhutan's Doorstep</h2>
<p>Kokrajhar — the headquarters of Kokrajhar district and the capital of the Bodoland Territorial Region (BTR) in Assam, a city of tribal self-governance and wildlife heritage (the Bodo people are one of Assam's largest and most politically significant tribal communities; the Bodo Accord of 2020 and the earlier 2003 Bodo agreement created the Bodoland Territorial Region (BTR) — a self-governing council for the Bodo community covering Kokrajhar, Chirang (Bongaigaon), Baksa, and Udalguri districts; Kokrajhar as the BTR capital has significant administrative and political importance for the Bodo community; the Bodo culture includes the Bagurumba dance, the Bodo weaving (Dokhona — a traditional cloth), and the festival of Kherai and Bwisagu; the Manas National Park and UNESCO Biosphere Reserve extends through Chirang into the Kokrajhar border — the park is shared between Assam's BTR area and Bhutan's Royal Manas National Park; this represents one of the world's great transboundary conservation success stories; the Kokrajhar area's close proximity to Bhutan makes it an important cross-border zone; the Songbijit-Kachugaon Wildlife Sanctuary and Chakrashila Wildlife Sanctuary — famous for the golden langur (Trachypithecus geei), one of India's most beautiful primates and found only in this BTR-Bhutan corridor — are also nearby), known for jute processing, tea gardens, and agricultural production — is a city of Bodo heritage and border ecology. From birthday parties in the Civil Lines area to corporate cakes at the BTR government offices, from Bwisagu celebration cakes to anniversary surprises near the Assam-Bhutan Road — RedHeart covers all Kokrajhar zones: Central (Civil Lines, BTR Secretariat Road, Station Road), North (Bhutan border, Gossaigaon, Tikabari), South (Bongaigaon border, Dotma, Manikpur), East (Chirang border, Bhowraguri, Songbijit), West (West Bengal border, Fakiragram, Golokganj).</p>
<p>Our Kokrajhar cake range: Chocolate, Black Forest, Red Velvet, Mango (Assam Himsagar!), Butterscotch, Photo Cakes, Fondant Bodoland / Golden Langur / Manas UNESCO-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kokrajhar, Assam</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, BTR Secretariat Road, Station Road, Gossaigaon, Dotma, Fakiragram</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Golden Langur Fondant, Bodoland Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Kokrajhar?", answer: "Yes, same-day cake delivery is available across all Kokrajhar areas — Civil Lines, BTR Secretariat Road, Station Road, and Gossaigaon — for orders placed before 3 PM." },
      { question: "Do you have Bodoland / Golden Langur-themed cakes in Kokrajhar?", answer: "Yes! The Bodoland Territorial Region — the self-governing Bodo homeland — and the Golden Langur (one of India's most beautiful primates, found only in the Kokrajhar-Bhutan border forests) inspire our uniquely local Bodoland and Golden Langur fondant cakes." },
      { question: "Are eggless cakes available in Kokrajhar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Kokrajhar delivery." }
    ]
  },

  "hathras": {
    cityName: "Hathras",
    metaTitle: "Cake Delivery in Hathras | Braj Mathura Road UP | RedHeart",
    metaDescription: "Order cakes online in Hathras. Same-day delivery across Hathras. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hathras",
    metaKeyword: "cake delivery hathras, order cake online hathras, birthday cake hathras, custom cake hathras, same day cake delivery hathras hing asafoetida Braj Mathura Agra road aligarh trading mandi UP",
    footerContent: `
<h2>Cake Delivery in Hathras — India's Hing (Asafoetida) Trading Capital, Braj Cultural Belt, and Western UP's Commercial Hub</h2>
<p>Hathras — the headquarters of Hathras district in Uttar Pradesh (it was known as Mahamaya Nagar from 2010-2012 and has reverted to its historical name), a city with an unusual claim to commercial fame (Hathras is the largest trading and mandi centre for hing (asafoetida) in India; asafoetida — the pungent dried latex from the Ferula assa-foetida plant — is a crucial spice in Indian, Iranian, and Central Asian cooking; India does not grow hing domestically (the raw hing resin is imported from Afghanistan, Iran, and Uzbekistan) but Hathras is where the imported raw resin is processed, mixed, compounded, and then distributed to the rest of India; the Hathras mandi sets the price benchmarks for hing across India; additionally, Hathras produces significant quantities of kasoori methi (dried fenugreek leaves), coriander (dhania), and other spices; the city also has significant leather tanning industry and shoes manufacturing in the Hathras-Aligarh corridor; Hathras is culturally part of Braj — the sacred landscape of Krishna's childhood and youth, centred on Mathura and Vrindavan but extending to Hathras; the folk music of Hathras is part of the Braj Bhasha cultural tradition; Hathras is on the road from Agra to Mathura/Aligarh and has historically been a significant waypoint in Western UP's trade), and a district with agricultural production of wheat, mustard, and vegetables — is a city of spice trade and Braj cultural identity. From birthday parties in the Civil Lines area to corporate cakes at the large hing processing firms, from anniversary surprises near the Aligarh Road to student cakes at Hathras's colleges — RedHeart covers all Hathras zones: Civil Lines, Station Road, Aligarh Road, Agra Road, Mathura Road, Mursan, Sadabad, Sikandra Rao.</p>
<p>Our Hathras cake range: Chocolate, Black Forest, Red Velvet, Mango (Braj Langra!), Butterscotch, Photo Cakes, Fondant Braj Motif / Hing Spice-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hathras, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Aligarh Road, Agra Road, Mursan, Sadabad</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Braj Motif Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hathras?", answer: "Yes, same-day cake delivery is available across all Hathras areas — Civil Lines, Station Road, Aligarh Road, Agra Road, and Mursan — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Hathras?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Hathras delivery." },
      { question: "Do you deliver midnight cakes in Hathras?", answer: "Yes, midnight birthday cake delivery is available across Hathras's central and residential zones." }
    ]
  },

  "etah": {
    cityName: "Etah",
    metaTitle: "Cake Delivery in Etah | Kasganj UP Aligarh Road | RedHeart",
    metaDescription: "Order cakes online in Etah. Same-day delivery across Etah. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Etah",
    metaKeyword: "cake delivery etah, order cake online etah, birthday cake etah, custom cake etah, same day cake delivery etah kasganj glass bangles Aligarh road Mathura road Kali river paddy wheat mandi UP Braj",
    footerContent: `
<h2>Cake Delivery in Etah — Etah's Glass Bangle Artisans, Kali River's Fertile Doab, and Western UP's Agricultural Mandi District</h2>
<p>Etah — the headquarters of Etah district in Uttar Pradesh (Kasganj was carved out as a separate district in 2008), a city of traditional artisan craft and agricultural importance (Etah and the nearby Kasganj area are known for glass bangle (kankana) manufacturing — the artisan communities (Kachera and Manihaar communities) of Etah-Firozabad-Kasganj belt are part of the Ganga-Yamuna Doab's glass bangle industry, with Etah's artisans producing coloured and plain glass bangles that are distributed through melas and markets across UP; the Etah district is part of the Braj-Ganga Doab agricultural belt, producing paddy, wheat, mustard, and mentha (peppermint) — Etah district is one of UP's largest mentha (Japanese mint) producing areas; the Kali River (not to be confused with the Kali/Sarda of north UP) flows through Etah district, providing water for the kharif crops; the Etah Fort (an old pre-Mughal zamindari fort) and the Awagarh Fort (of the Awagarh estate, a significant local zamindari) are historical landmarks; the Singh-Yadav zamindari families of Etah had notable influence in colonial and post-colonial UP politics; the Etah sugar cooperative is one of the district's major industrial institutions), and a district that was part of the ancient Panchal mahajanapada (Ahichchhatra and other Panchal sites are in the wider UP Doab region) — is a city of artisan heritage and mentha production. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from anniversary surprises near the Aligarh Road to student cakes at Etah's colleges — RedHeart covers all Etah zones: Civil Lines, Station Road, Aligarh Road, Mathura Road, Awagarh, Aliganj, Jalesar, Marhera.</p>
<p>Our Etah cake range: Chocolate, Black Forest, Red Velvet, Mango (Braj Langra!), Butterscotch, Photo Cakes, Fondant Braj Bangle / Glass Craft-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Etah, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Aligarh Road, Awagarh, Aliganj, Jalesar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Etah?", answer: "Yes, same-day cake delivery is available across all Etah areas — Civil Lines, Station Road, Aligarh Road, Awagarh, and Aliganj — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Etah?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Etah delivery." },
      { question: "Do you deliver midnight cakes in Etah?", answer: "Yes, midnight birthday cake delivery is available across Etah's central and residential zones." }
    ]
  },

  "tawang": {
    cityName: "Tawang",
    metaTitle: "Cake Delivery in Tawang | Tawang Monastery Arunachal | RedHeart",
    metaDescription: "Order cakes online in Tawang. Same-day delivery across Tawang. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Tawang",
    metaKeyword: "cake delivery tawang, order cake online tawang, birthday cake tawang, custom cake tawang, same day cake delivery tawang monastery dalai lama Monpa tribe Sela Pass China border Bhutan border altitude",
    footerContent: `
<h2>Cake Delivery in Tawang — Asia's Second Largest Monastery, Birthplace of the 6th Dalai Lama, and India's Himalayan Frontier</h2>
<p>Tawang — the headquarters of Tawang district in Arunachal Pradesh, one of India's most strategically important and breathtakingly beautiful high-altitude frontier towns (the Tawang Monastery — built in 1681-1682 at an altitude of 3,048 metres — is the largest Buddhist monastery in India and the second largest in Asia (after the Drepung Monastery in Tibet); the monastery belongs to the Gelugpa (Yellow Hat) sect of Tibetan Buddhism and is a major centre of Tibetan Buddhist learning; the Tawang district is the birthplace of Tsangyang Gyatso — the 6th Dalai Lama (born 1683 at Urgelling Monastery, 4 km from Tawang); the Dalai Lama's birthplace makes Tawang a site of unique religious significance; the Tawang district borders China's Tibet Autonomous Region (TAR) to the north and Bhutan to the west — making it India's tri-nation border district; the Indian Army has a major presence at Tawang given its strategic importance (the 1962 India-China War saw fighting in this region; the Battle of Tawang was a significant engagement; the Nuranang Falls (Jung Falls) — near Tawang — are one of northeast India's most spectacular waterfalls; the Sela Pass (4,170 metres) connects Tawang to the rest of Arunachal and India), home to the Monpa tribe (the Monpa people of Tawang practice Tibetan Buddhism, produce Tawang carpets, masks, paper (from Shukpa bark), and the locally-brewed Chang (millet beer) and Ara (distilled spirit)) — is India's most dramatic and culturally distinct frontier city. From birthday parties in the Tawang market to military officers' celebration cakes, from Losar (Tibetan New Year) cakes to anniversary surprises near the monastery view — RedHeart covers all Tawang zones: Tawang town (Market Road, Monastery Road, Nehru Market), Zemithang, Lumla, Jang, Mukto area.</p>
<p>Our Tawang cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Photo Cakes, Fondant Tawang Monastery / Dalai Lama / Monpa-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tawang, Arunachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Altitude</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">3,048 metres (10,000 ft)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Tawang town, Market Road, Monastery Road, Zemithang, Lumla, Jang</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Tawang Monastery Fondant, Black Forest, Photo Cake, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Tawang?", answer: "Yes, same-day cake delivery is available across all Tawang areas — Tawang town, Market Road, Monastery Road, and Lumla — for orders placed before 3 PM." },
      { question: "Do you have Tawang Monastery-themed cakes?", answer: "Yes! The Tawang Monastery — India's largest Buddhist monastery (built 1681), the birthplace of the 6th Dalai Lama, and one of Asia's greatest Tibetan Buddhist heritage sites at 3,048 metres — inspires our Tawang Monastery fondant cakes." },
      { question: "Are eggless cakes available in Tawang?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Butterscotch — are available in eggless variants for Tawang delivery." }
    ]
  },

  "una": {
    cityName: "Una",
    metaTitle: "Cake Delivery in Una | Anandpur Sahib Route Himachal | RedHeart",
    metaDescription: "Order cakes online in Una. Same-day delivery across Una. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Una",
    metaKeyword: "cake delivery una, order cake online una, birthday cake una, custom cake una, same day cake delivery una himachal punjab border Anandpur Sahib Holla Mohalla Swan river Bhangani Dhauladhar foothills",
    footerContent: `
<h2>Cake Delivery in Una — Punjab Border Foothills, Anandpur Sahib's Gateway, and Himachal's Most Accessible District</h2>
<p>Una — the headquarters of Una district in Himachal Pradesh, Himachal's most accessible and strategically located district (Una district shares a long border with Punjab — the Anandpur Sahib Sikh pilgrimage town in Punjab is just 20 km from Una, making Una a gateway for pilgrims travelling to Anandpur Sahib's Holla Mohalla festival (where thousands of Nihangs gather for martial arts, music, and langar after Holi) and Virasat-e-Khalsa; the Swan River flows through Una district before entering Punjab; the Una district lies at the transition zone between Punjab's plains and Himachal's lower Shiwalik hills — the Dhauladhar and outer Himalayan foothills begin north of Una; the district is noted for the Chintpurni Temple (at Amb, Una) — a Shakti Peetha (one of the 51 or 108 sacred goddess sites in India) dedicated to Chhinnamastika Devi, drawing pilgrims from across Himachal, Punjab, and Haryana; additionally, the Dera Baba Rudru Brahmin temple and the Bhangani-Paonta corridor (the site of Guru Gobind Singh's Paonta Sahib and the Battle of Bhangani 1688) are historically significant Sikh sites near Una; Una district has significant industrial estates (Una has a large HIMUDA industrial area attracting pharmaceutical and manufacturing investment from Punjab/Haryana) and is a fast-growing commercial district benefiting from proximity to Chandigarh and Delhi via NH-503) — is a city of plains-hills transition, Sikh pilgrimage, and industrial growth. From birthday parties in the Civil Lines to corporate cakes at the industrial estates, from anniversary surprises near the Anandpur Sahib Road to student cakes at Una's colleges — RedHeart covers all Una zones: Una town (Civil Lines, Bus Stand, Punjab Road), Amb, Haroli, Bangana, Gagret, Chintpurni Road, Daulatpur Chowk.</p>
<p>Our Una cake range: Chocolate, Black Forest, Red Velvet, Butterscotch, Mango (Himachal Chaunsa!), Photo Cakes, Fondant Chintpurni Devi / Sikh Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Una, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Una town, Civil Lines, Bus Stand, Amb, Haroli, Gagret, Chintpurni Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Chintpurni Devi Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Una, Himachal Pradesh?", answer: "Yes, same-day cake delivery is available across all Una areas — Una town, Civil Lines, Bus Stand, Amb, Haroli, and Gagret — for orders placed before 3 PM." },
      { question: "Do you have Chintpurni Devi / Sikh Heritage-themed cakes in Una?", answer: "Yes! The Chintpurni Shakti Peetha at Amb — one of the 51 most sacred goddess temples in India — and the Sikh heritage of the Anandpur Sahib-Bhangani corridor near Una inspire our devotional and heritage fondant cakes." },
      { question: "Are eggless cakes available in Una?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Una delivery." }
    ]
  },

  "dimapur": {
    cityName: "Dimapur",
    metaTitle: "Cake Delivery in Dimapur | Nagaland's Commercial Capital | RedHeart",
    metaDescription: "Order cakes online in Dimapur. Same-day delivery across Dimapur. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Dimapur",
    metaKeyword: "cake delivery dimapur, order cake online dimapur, birthday cake dimapur, custom cake dimapur, same day cake delivery dimapur nagaland Assam gateway Kachari ruins commercial city Hornbill festival Naga tribe",
    footerContent: `
<h2>Cake Delivery in Dimapur — Nagaland's Only Plains City, Kachari Kingdom's Ancient Ruins, and Northeast's Cross-Roads Commercial Hub</h2>
<p>Dimapur — the commercial capital of Nagaland, the only large city in Nagaland's plains (Dimapur is the only significant city of Nagaland situated in the plains — all other major Nagaland towns including Kohima (the state capital) are in the hills; Dimapur's position in the plains of the Doyang River basin makes it Nagaland's entry point and commercial gateway; it is connected by rail (the only railway station in Nagaland), by National Highway to Kohima and onwards to Manipur, and is the air gateway of Nagaland (Dimapur Airport); all goods for Nagaland's hill districts are routed through Dimapur; the city has a mix of Naga tribes (Ao, Angami, Lotha, Sumi and others) alongside a large non-Naga settlement of Assamese, Bengali, Bihari, and Marwari traders and businesspeople; the Dimapur Naga Bazaar and Hong Kong Market are among northeast India's liveliest commercial markets), famous for the Dimapur Kachari Ruins (the ancient Kachari kingdom — which once ruled this area from the medieval period — left behind extraordinary carved stone lingams, phallic monoliths, and sculptural pillars scattered across Dimapur city; the Kachari Ruins are now in the middle of the commercial city but contain dozens of massive stone carvings; the Kachari rulers were the predecessors of the Ahom-era polities in this region), and a commercial city where Naga culture, food, and festival life are most accessible to visitors (the Hornbill Festival — held annually in December at Kisama Heritage Village near Kohima — and Dimapur's markets of smoked pork, Naga chilli (Bhut Jolokia/ghost pepper), fermented bamboo shoot (akhuni), and traditional textiles make the city a vibrant crossroads of Naga culture and commerce) — is a city of plains commerce and highland Naga gateway. From birthday parties in the commercial areas to corporate cakes at Dimapur's government offices, from anniversary surprises near the DAN Quarter to celebration cakes for Naga festivals — RedHeart covers all Dimapur zones: Central (DAN Quarter, Hong Kong Market, Naga Bazaar, DC Court Road), North (Purana Bazaar, Chumukedima, Medziphema), South (Nagarjan, Super Market, Padampukhuri), East (Kohima Road, Zubza, Aghapur), West (Assam border, Bokajan Road, Khatkhati area).</p>
<p>Our Dimapur cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Kachari Ruins / Hornbill Festival / Naga Heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Dimapur, Nagaland</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">DAN Quarter, Hong Kong Market, Naga Bazaar, Chumukedima, Medziphema, Nagarjan</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Kachari Ruins Fondant, Hornbill Festival Fondant, Photo Cake, Black Forest</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Dimapur?", answer: "Yes, same-day cake delivery is available across all Dimapur areas — DAN Quarter, Hong Kong Market, Naga Bazaar, Chumukedima, and Nagarjan — for orders placed before 3 PM." },
      { question: "Do you have Kachari Ruins / Hornbill Festival-themed cakes in Dimapur?", answer: "Yes! The Kachari Kingdom's ancient carved stone ruins (scattered through Dimapur city) and the famous Hornbill Festival — Nagaland's grandest cultural celebration — inspire our Kachari Heritage and Hornbill fondant cakes." },
      { question: "Are eggless cakes available in Dimapur?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Dimapur delivery." }
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
