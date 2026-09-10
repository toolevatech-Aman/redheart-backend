// Cakes Batch 17 — 15 cities:
// UP: Deoria, Gonda, Bahraich
// Bihar: Araria, Siwan, Bettiah (West Champaran)
// West Bengal: Cooch Behar
// Odisha: Keonjhar
// Gujarat: Navsari, Porbandar
// Himachal Pradesh: Hamirpur (HP), Nahan
// Haryana: Fatehabad, Mahendragarh (Narnaul)
// Punjab: Barnala

const API_BASE = "https://backend.redheart.in/api";
const BASE_URL = "https://www.redheart.in";

const CITIES = {
  "deoria": {
    cityName: "Deoria",
    metaTitle: "Cake Delivery in Deoria | Eastern UP Sugar Belt | RedHeart",
    metaDescription: "Order cakes online in Deoria. Same-day delivery across Deoria. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Deoria",
    metaKeyword: "cake delivery deoria, order cake online deoria, birthday cake deoria, custom cake deoria, same day cake delivery deoria civil lines sugar mill gorakhpur road bhatni padrauna barhaj",
    footerContent: `
<h2>Cake Delivery in Deoria — Eastern UP's Sugar Belt City and Gorakhpur's Commercial Satellite</h2>
<p>Deoria — the headquarters of Deoria district in eastern Uttar Pradesh, one of UP's most sugar-producing districts (Deoria has several large sugar mills including the Bhatni Sugar Mill, Padrauna, and others — the district's Terai and plains sugarcane cultivation feeds multiple mills; Deoria's sugar cooperative sector is significant in eastern UP's economy), the largest commercial centre in the Gorakhpur-Deoria cluster, and a district that has sent many migrants to cities across India (Deoria's population is partly sustained by remittances from family members working in Mumbai, Delhi, Surat, and beyond — a common eastern UP migration pattern), located on the Nepal border fringe with a rich Buddhist heritage belt (the Kushwaha-Kusha-Kushinagar belt, 60 km from Deoria, is where Buddha attained Mahaparinirvana; Deoria pilgrims visit Kushinagar regularly). From birthday parties in the Civil Lines area to corporate cakes at the large sugar factories, from anniversary surprises near the Station Road market to student cakes at Deoria's colleges — RedHeart covers all Deoria zones: Central (Civil Lines, Station Road, Gorakhpur Road), North (Bhatni Road, Nepal border belt, Kushinagar Road), South (Balia Road, Mau Road, Salepur), East (Bihar Border, Siwan Road, Salempur), West (Gorakhpur Road, Padrauna, Kasia).</p>
<p>Our Deoria cake range: Chocolate, Black Forest, Red Velvet, Mango (Eastern UP Dussehri!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Deoria, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Gorakhpur Road, Bhatni Road, Balia Road, Padrauna</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Deoria?", answer: "Yes, same-day cake delivery is available across all Deoria areas — Civil Lines, Station Road, Gorakhpur Road, and Bhatni Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Deoria?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Deoria delivery." },
      { question: "Do you deliver midnight cakes in Deoria?", answer: "Yes, midnight birthday cake delivery is available across Deoria's central and residential zones." }
    ]
  },

  "gonda": {
    cityName: "Gonda",
    metaTitle: "Cake Delivery in Gonda | Awadh Region UP | RedHeart",
    metaDescription: "Order cakes online in Gonda. Same-day delivery across Gonda. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Gonda",
    metaKeyword: "cake delivery gonda, order cake online gonda, birthday cake gonda, custom cake gonda, same day cake delivery gonda civil lines lucknow road bahraich road ayodhya road ghaghra sugar",
    footerContent: `
<h2>Cake Delivery in Gonda — Awadh's Ghaghra Belt City and Ayodhya's Northern Gateway</h2>
<p>Gonda — the headquarters of Gonda district in the Awadh region of Uttar Pradesh, a city in the fertile Ghaghra (Saryu) River basin (the Ghaghra — which becomes the Saryu near Ayodhya — flows through Gonda district, sustaining rich alluvial agriculture for wheat, sugarcane, and paddy; the Gonda sugar belt has several cooperative sugar mills), the northern gateway to Ayodhya (Gonda is just 65 km from Ayodhya — the pilgrimage city of Lord Ram — making it a transit city for pilgrims; the Ayodhya Ram Mandir's completion has significantly increased Gonda's visitor traffic), adjacent to the Katarniaghat Wildlife Sanctuary (one of UP's finest wildlife reserves, bordering Gonda, that protects tigers, elephants, gharials, and one-horned rhinos in Terai forests), and a city on the Lucknow-Bahraich highway — is a city of pilgrimage gateway and agricultural significance. From birthday parties in the Civil Lines area to corporate cakes at the large sugar mills, from anniversary surprises near the Lucknow Road belt to student cakes at Gonda's colleges — RedHeart covers all Gonda zones: Central (Civil Lines, Station Road, Lucknow Road), North (Bahraich Road, Balrampur Road, Nepal Terai border), South (Ayodhya Road, Faizabad Road, Akbarpur), East (Basti Road, Shravasti Road, Mankapur), West (Barabanki Road, Elgin Bridge, Tarabganj).</p>
<p>Our Gonda cake range: Chocolate, Black Forest, Red Velvet, Mango (Awadhi Dussehri!), Butterscotch, Photo Cakes, Fondant Ayodhya Ram / Awadh-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Gonda, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Lucknow Road, Bahraich Road, Ayodhya Road, Basti Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Gonda?", answer: "Yes, same-day cake delivery is available across all Gonda areas — Civil Lines, Station Road, Lucknow Road, and Bahraich Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Gonda?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Gonda delivery." },
      { question: "Do you deliver midnight cakes in Gonda?", answer: "Yes, midnight birthday cake delivery is available across Gonda's central and residential zones." }
    ]
  },

  "bahraich": {
    cityName: "Bahraich",
    metaTitle: "Cake Delivery in Bahraich | Suhelwa Tiger Reserve UP | RedHeart",
    metaDescription: "Order cakes online in Bahraich. Same-day delivery across Bahraich. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bahraich",
    metaKeyword: "cake delivery bahraich, order cake online bahraich, birthday cake bahraich, custom cake bahraich, same day cake delivery bahraich civil lines lucknow road nepal border suhelwa tiger reserve nanpara",
    footerContent: `
<h2>Cake Delivery in Bahraich — Suhelwa Tiger Reserve's Gateway, Nepal Border City, and Awadh Terai's Frontier</h2>
<p>Bahraich — the headquarters of Bahraich district in northwestern Uttar Pradesh, one of India's most historically important cities for the Ghaghara (Ghaghra) River basin (the Battle of Bahraich, 1033 CE — the decisive victory of local Rajput coalitions led by the Hindu king Suheldev against Mahmud of Ghazni's general Salar Masud Ghazi — ended the Ghaznavid invasions of the Ganges plains and is one of the most celebrated battles in Rajput lore; the Dargah of Salar Masud Ghazi — called Ghazi Mian — at Bahraich is paradoxically one of the subcontinent's most visited syncretic shrines, drawing millions of Hindu and Muslim pilgrims each Urs), gateway to the Suhelwa Wildlife Sanctuary (one of UP's most biodiverse forests, protecting tigers, leopards, sloth bears, elephants, and migratory birds in the Nepal Terai sub-Himalayan zone), a Nepal-border city (Bahraich district's Rupaidiha border crossing connects India to Nepal's Rupandehi district), and a major sugar and grain market for the Terai belt — is a city of layered historical complexity and ecological richness. From birthday parties in the Civil Lines area to corporate cakes at the sugar mills, from anniversary surprises near the Lucknow Road residential belt to student cakes at Bahraich's colleges — RedHeart covers all Bahraich zones: Central (Civil Lines, Station Road, Lucknow Road), North (Nepal Border, Rupaidiha, Nanpara Road), South (Gonda Road, Faizabad Road, Gondah), East (Shravasti Road, Balrampur Road, Bhinga), West (Lakhimpur Road, Beri).</p>
<p>Our Bahraich cake range: Chocolate, Black Forest, Red Velvet, Mango (Awadhi Dussehri!), Butterscotch, Photo Cakes, Fondant Suheldev / Suhelwa forest-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bahraich, Uttar Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Lucknow Road, Nanpara Road, Shravasti Road, Nepal Border belt</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bahraich?", answer: "Yes, same-day cake delivery is available across all Bahraich areas — Civil Lines, Station Road, Lucknow Road, and Nanpara Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Bahraich?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bahraich delivery." },
      { question: "Do you deliver midnight cakes in Bahraich?", answer: "Yes, midnight birthday cake delivery is available across Bahraich's central and residential zones." }
    ]
  },

  "araria": {
    cityName: "Araria",
    metaTitle: "Cake Delivery in Araria | Nepal Border Bihar | RedHeart",
    metaDescription: "Order cakes online in Araria. Same-day delivery across Araria. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Araria",
    metaKeyword: "cake delivery araria, order cake online araria, birthday cake araria, custom cake araria, same day cake delivery araria civil lines forbesganj jogbani nepal border kosi river jute",
    footerContent: `
<h2>Cake Delivery in Araria — Bihar's Nepal Border District, Kosi River Belt, and Jute-Paddy-Litchi Terai Hub</h2>
<p>Araria — the headquarters of Araria district in Bihar's northeastern Kosi River basin, a district of great geographical and economic significance (Araria lies in the fertile Kosi-Mahananda doab — the alluvial plain between these two flood-prone Himalayan rivers; the district produces significant quantities of jute, paddy, maize, litchi, and sugarcane; Araria's litchi production is part of the famous Bihar-Muzaffarpur litchi belt whose Shahi litchi has GI tag recognition), the district bordering Nepal's Province No. 1 and 2 (Araria's Jogbani border crossing to Nepal's Biratnagar is one of Bihar's busiest Nepal trade points; Jogbani-Biratnagar is a major Indo-Nepal trade corridor), and a city that has seen significant political and economic activity as part of the Seemanchal region — is a city of Indo-Nepal border trade and agricultural wealth. From birthday parties in the Civil Lines area to corporate cakes at the large jute mills, from anniversary surprises near the Forbesganj Road belt to student cakes at Araria's colleges — RedHeart covers all Araria zones: Central (Civil Lines, Station Road, Forbesganj Road), North (Jogbani Road, Nepal border, Kishanpur), South (Purnia Road, Katihar Road, Bhargama), East (Kishanganj Road, Mahananda belt), West (Supaul Road, Kosi belt, Darbhanga border).</p>
<p>Our Araria cake range: Chocolate, Black Forest, Red Velvet, Mango (Bihar Shahi Litchi flavour!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Araria, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Forbesganj Road, Jogbani Road, Purnia Road, Nepal border belt</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Araria?", answer: "Yes, same-day cake delivery is available across all Araria areas — Civil Lines, Station Road, Forbesganj Road, and Jogbani Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Araria?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Araria delivery." },
      { question: "Do you deliver midnight cakes in Araria?", answer: "Yes, midnight birthday cake delivery is available across Araria's central and residential zones." }
    ]
  },

  "siwan": {
    cityName: "Siwan",
    metaTitle: "Cake Delivery in Siwan | Bihar's Bhojpur Culture City | RedHeart",
    metaDescription: "Order cakes online in Siwan. Same-day delivery across Siwan. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Siwan",
    metaKeyword: "cake delivery siwan, order cake online siwan, birthday cake siwan, custom cake siwan, same day cake delivery siwan civil lines raghunathpur chapra road gorakhpur road ghaghra sugar mill NRI",
    footerContent: `
<h2>Cake Delivery in Siwan — Bihar's NRI Capital, Bhojpur's Cultural Heartland, and Ghaghra River's Agricultural Belt</h2>
<p>Siwan — the headquarters of Siwan district in Bihar, famously called "NRI Bihar's Capital" or the district with Bihar's highest NRI (Non-Resident Indian) population (Siwan has one of the highest per-capita NRI emigrant rates in India — thousands of Siwan families have members settled in Gulf countries, especially UAE, Kuwait, Saudi Arabia, and Qatar; the remittances flowing back to Siwan have made it relatively prosperous compared to other Bihar districts; this NRI economy has created a notable culture of education, hospitality, and consumption), a Bhojpuri cultural heartland (Siwan's Bhojpuri music, theatre, and folk traditions are celebrated; the city has produced singers and performers central to Bhojpuri cinema), located along the Ghaghra River belt (the district's fertile alluvial soil produces sugarcane, wheat, paddy, and banana; the Siwan Sugar Mill is significant), and adjacent to Gopalganj — is a city of Bihar's most internationally connected communities. From birthday parties in the Civil Lines area to corporate cakes at the large NRI-owned trading establishments, from anniversary surprises near the Raghunathpur chowk to student cakes at Siwan's colleges — RedHeart covers all Siwan zones: Central (Civil Lines, Raghunathpur, Station Road), North (Maharajganj Road, Nepal Terai border), South (Chapra Road, Ghaghra belt, Masrakh), East (Chhapra Road, Sonepur), West (Gorakhpur Road, Deoria UP border, Mairwa).</p>
<p>Our Siwan cake range: Chocolate, Black Forest, Red Velvet, Mango (Bhojpur Langra!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Siwan, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Raghunathpur, Station Road, Chapra Road, Gorakhpur Road, Maharajganj Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Siwan?", answer: "Yes, same-day cake delivery is available across all Siwan areas — Civil Lines, Raghunathpur, Station Road, and Chapra Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Siwan?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Siwan delivery." },
      { question: "Do you deliver midnight cakes in Siwan?", answer: "Yes, midnight birthday cake delivery is available across Siwan's central and residential zones." }
    ]
  },

  "bettiah": {
    cityName: "Bettiah",
    metaTitle: "Cake Delivery in Bettiah | West Champaran Bihar | RedHeart",
    metaDescription: "Order cakes online in Bettiah. Same-day delivery across Bettiah. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Bettiah",
    metaKeyword: "cake delivery bettiah, order cake online bettiah, birthday cake bettiah, custom cake bettiah west champaran, same day cake delivery bettiah civil lines valmiki nagar raxaul nepal lauriya nandangarh",
    footerContent: `
<h2>Cake Delivery in Bettiah — West Champaran's Capital, Valmiki Tiger Reserve's City, and Lauriya Nandangarh's Ancient Buddhist Heritage</h2>
<p>Bettiah — the headquarters of West Champaran (Paschim Champaran) district in Bihar, a city of remarkable natural and historical wealth (Valmiki National Park and Tiger Reserve — one of Bihar's only tiger reserves, 60 km from Bettiah near the Nepal border, protecting tigers, one-horned rhinos, gharials, and forest elephants in the Gandak-Narayani river forest tract — is administered from this district; Bettiah also borders Nepal's Lumbini Pradesh, the birthplace of Gautama Buddha just across the border; the Lauriya Nandangarh and Lauriya Araraj — unique Ashokan pillars and burial mounds dating to the 3rd century BCE — are within Bettiah district and represent some of India's finest Mauryan archaeological sites; the Maharaja of Bettiah estate — the Bettiah Raj — was one of Bihar's largest zamindars, and their estate buildings still stand), and an important forest and agricultural city at the Nepal Terai — is a city of ecological and Buddhist-Mauryan archaeological significance. From birthday parties in the Civil Lines area to corporate cakes at the forest department offices, from anniversary surprises near the Lauriya road to student cakes at Bettiah's colleges — RedHeart covers all Bettiah zones: Central (Civil Lines, Station Road, Motihari Road), North (Nepal Border, Valmiki Nagar, Raxaul Road), South (Muzaffarpur Road, Shikarpur, Bairia), East (Motihari Road, Adapur), West (Gopalganj Road, Bagaha, Narkatiaganj).</p>
<p>Our Bettiah cake range: Chocolate, Black Forest, Red Velvet, Mango (Champaran Litchi!), Butterscotch, Photo Cakes, Fondant Valmiki Tiger / Ashokan pillar-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Bettiah, Bihar</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Motihari Road, Valmiki Nagar Road, Gopalganj Road, Narkatiaganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Valmiki Tiger Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Bettiah?", answer: "Yes, same-day cake delivery is available across all Bettiah areas — Civil Lines, Station Road, Motihari Road, and Valmiki Nagar Road — for orders placed before 3 PM." },
      { question: "Do you have Valmiki Tiger Reserve-themed cakes in Bettiah?", answer: "Yes! The Valmiki National Park — Bihar's only tiger reserve, just north of Bettiah near the Nepal border — inspires our Valmiki Tiger fondant cakes. A proud local wildlife design for Bettiah celebrations." },
      { question: "Are eggless cakes available in Bettiah?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Bettiah delivery." }
    ]
  },

  "cooch-behar": {
    cityName: "Cooch Behar",
    metaTitle: "Cake Delivery in Cooch Behar | Royal Palace City North Bengal | RedHeart",
    metaDescription: "Order cakes online in Cooch Behar. Same-day delivery across Cooch Behar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Cooch Behar",
    metaKeyword: "cake delivery cooch behar, order cake online cooch behar, birthday cake cooch behar, custom cake cooch behar, same day cake delivery cooch behar rajbari sunity academy dinhata mathabhanga",
    footerContent: `
<h2>Cake Delivery in Cooch Behar — Royal Palace City, Koch Rajbari's Heritage, and North Bengal's Bhutan-Bangladesh Tri-Border</h2>
<p>Cooch Behar — the headquarters of Cooch Behar district in North Bengal, one of India's most dramatically royal cities (the Cooch Behar Palace — Rajbari — is a stunning 1887 replica of Buckingham Palace built by the Koch Rajput King Maharaja Nripendra Narayan; the palace's Italianate architecture, surrounded by manicured grounds, is one of Bengal's most beautiful royal palaces, now a museum open to the public; the Koch Kingdom at its peak controlled large parts of today's Assam, West Bengal, Bhutan, and Bangladesh; the Cooch Behar State was famous for its Westernised royal lifestyle and for the Maharajas who played cricket, attended Eton, and hosted British and Indian nobility), the Sunity Academy (established by the Cooch Behar royals — one of North Bengal's oldest schools), adjacent to Bangladesh's Rangpur division and Bhutan's Phuentsholing area, making Cooch Behar a tri-border city of significant strategic and cultural importance, and one of the cultural heartlands of the Rajbanshi and Koch communities — is a city of royal grandeur and border significance. From birthday parties near the Rajbari to corporate cakes at the district offices, from anniversary surprises in Dinhata and Mathabhanga to student cakes at the colleges — RedHeart covers all Cooch Behar zones: Central (Rajbari, Station Road, New Market), North (Dinhata Road, Tufanganj, Bhutan border), South (Mathabhanga Road, Bangladesh border, Mekhliganj), East (Dhubri Road, Assam border, Baxirhat), West (Jalpaiguri Road, Kuchlibari).</p>
<p>Our Cooch Behar cake range: Chocolate, Black Forest, Red Velvet, Mango (North Bengal Himsagar!), Butterscotch, Photo Cakes, Fondant Koch Rajbari Palace-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Cooch Behar, West Bengal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Rajbari, Station Road, New Market, Dinhata Road, Mathabhanga Road, Tufanganj</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Koch Rajbari Palace Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Cooch Behar?", answer: "Yes, same-day cake delivery is available across all Cooch Behar areas — Rajbari, Station Road, New Market, and Dinhata Road — for orders placed before 3 PM." },
      { question: "Do you have Cooch Behar Rajbari Palace-themed cakes?", answer: "Yes! The magnificent Cooch Behar Palace (Rajbari) — a stunning 1887 replica of Buckingham Palace built by the Koch Maharaja — inspires our Koch Rajbari fondant cakes. A royal design for a city with royal heritage." },
      { question: "Are eggless cakes available in Cooch Behar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Cooch Behar delivery." }
    ]
  },

  "keonjhar": {
    cityName: "Keonjhar",
    metaTitle: "Cake Delivery in Keonjhar | Iron Ore Mining Odisha | RedHeart",
    metaDescription: "Order cakes online in Keonjhar. Same-day delivery across Keonjhar. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Keonjhar",
    metaKeyword: "cake delivery keonjhar, order cake online keonjhar, birthday cake keonjhar, custom cake keonjhar, same day cake delivery keonjhar Rourkela road Bhubaneswar road iron ore mines tribal",
    footerContent: `
<h2>Cake Delivery in Keonjhar — Odisha's Iron Ore Heartland, Tribal Culture Hub, and Baitarani River City</h2>
<p>Keonjhar (Kendujhar) — the headquarters of Keonjhar district in northern Odisha, one of India's most mineral-rich districts (Keonjhar has some of India's highest-grade iron ore reserves in the Thakurani, Jiling-Lanjigarh, and Gandamardan hills; the iron ore from Keonjhar feeds steel plants across the Rourkela-Barbil-Odisha corridor; the district also has deposits of manganese, chromite, and bauxite; Keonjhar's iron ore is exported through Paradip Port; major mining companies including SAIL, Tata Steel, and JSPL have mining operations in Keonjhar district), a culturally significant tribal city (the Ho, Bhuiya, Juang, and Santhali tribes have ancient roots in Keonjhar's hill forests; the Gonasika — the sacred source of the Baitarani River — is 60 km from Keonjhar, a major pilgrimage spot for Hindu devotees as the Baitarani is the mythological river one must cross after death), and a rapidly growing mining-services city — is a city of immense mineral wealth and tribal heritage. From birthday parties in the Civil Lines area to corporate cakes at the mining company offices, from anniversary surprises near the Rourkela Road area to student cakes at the colleges — RedHeart covers all Keonjhar zones: Central (Civil Lines, Station Road, Rourkela Road), North (Barbil Road, Jharkhand border, Joda), South (Bhubaneswar Road, Anandapur, Chandbali), East (Baripada Road, Karanjia), West (Rourkela Road, Deogarh, Sundargarh).</p>
<p>Our Keonjhar cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Iron Ore / Gonasika / tribal-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Keonjhar, Odisha</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Rourkela Road, Barbil Road, Bhubaneswar Road, Joda</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Keonjhar?", answer: "Yes, same-day cake delivery is available across all Keonjhar areas — Civil Lines, Station Road, Rourkela Road, and Barbil Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Keonjhar?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Keonjhar delivery." },
      { question: "Do you deliver cakes to Barbil (Keonjhar's iron ore mining centre)?", answer: "Yes, Barbil — Keonjhar district's main iron ore mining town — is covered under the Keonjhar delivery zone." }
    ]
  },

  "navsari": {
    cityName: "Navsari",
    metaTitle: "Cake Delivery in Navsari | Parsi Heritage Gujarat | RedHeart",
    metaDescription: "Order cakes online in Navsari. Same-day delivery across Navsari. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Navsari",
    metaKeyword: "cake delivery navsari, order cake online navsari, birthday cake navsari eggless, custom cake navsari, same day cake delivery navsari parsi fire temple station road gandhi road surat road",
    footerContent: `
<h2>Cake Delivery in Navsari — Gujarat's Parsi Capital, Mahatma Gandhi's Ancestral City, and Tapti River's Heritage Town</h2>
<p>Navsari — the headquarters of Navsari district in South Gujarat, one of India's most historically significant cities (Navsari has an extraordinary dual heritage: first, as the original entry point of the Zoroastrian Parsis into India — when the Parsis fled Persia after the Arab conquest of Persia in the 7th century CE, they landed near Sanjan and eventually settled in Navsari, which became their primary religious centre for 1,000 years; the Desai Parsi Fire Temple — one of India's most sacred Atash Bahrams — is in Navsari, and several prominent Parsi families including the Dadabhoys, Mehtas, and others trace roots to Navsari; second, Navsari is connected to the Gandhi family ancestry — Mahatma Gandhi's father Karamchand Gandhi served as a diwan in Porbandar and other princely states, and Gandhi's family had connections to South Gujarat; additionally, Jamsetji Tata — founder of the Tata Group — was born in Navsari in 1839), and a major Chikoo (Sapota) fruit growing centre (Navsari's Chicku farms produce some of Gujarat's finest sapodilla fruits). All our Navsari cakes are eggless and Pure Veg — from birthday parties near the Parsi Fire Temple area to corporate cakes at the large Tata-inspired businesses — RedHeart covers all Navsari zones: Central (Station Road, Gandhi Road, Market Road), North (Surat Road, Gandevi, Bilimora), South (Valsad Road, Jalalpore, Gandevi Road), East (Vyara Road, Songadh), West (Dang Road, Dholai).</p>
<p>Our Navsari cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Chikoo (Navsari Sapota!), Photo Cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Navsari, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Station Road, Gandhi Road, Market Road, Surat Road, Gandevi Road, Valsad Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chikoo (Sapota), Kesar-Mava, Chocolate, Photo Cake, Black Forest (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Navsari?", answer: "Yes! All our Navsari cakes are 100% eggless and Pure Veg — suitable for Navsari's Gujarati, Parsi, and Jain community." },
      { question: "Do you have Chikoo (Sapota) cakes in Navsari?", answer: "Yes! Navsari's famous Chikoo (Sapodilla) farms — which produce Gujarat's finest sapota fruit — inspire our Chikoo cake. A uniquely Navsari local flavour, beloved in South Gujarat." },
      { question: "Can I get same-day eggless cake delivery in Navsari?", answer: "Yes, same-day eggless cake delivery is available across all Navsari areas — Station Road, Gandhi Road, Market Road, and Surat Road — for orders placed before 3 PM." }
    ]
  },

  "porbandar": {
    cityName: "Porbandar",
    metaTitle: "Cake Delivery in Porbandar | Mahatma Gandhi's Birthplace Gujarat | RedHeart",
    metaDescription: "Order cakes online in Porbandar. Same-day delivery across Porbandar. Eggless cakes from ₹499.",
    h1: "Online Cake Delivery in Porbandar",
    metaKeyword: "cake delivery porbandar, order cake online porbandar, birthday cake porbandar eggless, custom cake porbandar, same day cake delivery porbandar kirti mandir chowpati beach gujari bazar MG road",
    footerContent: `
<h2>Cake Delivery in Porbandar — Mahatma Gandhi's Birthplace, Sudama's City, and Gujarat's Fishing Coast Capital</h2>
<p>Porbandar — the headquarters of Porbandar district in western Gujarat on the Saurashtra coast, universally known as the birthplace of Mahatma Gandhi (born on 2 October 1869 at Kirti Mandir, Porbandar — the Mohandas Karamchand Gandhi birthplace complex is Gujarat's most visited heritage site; the Kirti Mandir memorial marks the exact room where Gandhi was born; Porbandar's streets and the Rana Mahal (the palace where Gandhi's family lived) are major tourist attractions; 2 October is celebrated here as Gandhi Jayanti with national events), also known as Sudama's city (Sudama — Lord Krishna's childhood friend from Dwarka whose poverty-to-prosperity story is told in the Bhagavata Purana — is associated with Porbandar; the Sudama Temple here is one of India's rare temples dedicated to Sudama), a major fishing and marine-products city (Porbandar's port handles large volumes of fish exports — dried Bombay Duck and various marine species are traded here; the fishing community is one of Porbandar's most culturally significant groups), and home to one of Gujarat's finest chowpatties (beaches for street food). All our Porbandar cakes are eggless and Pure Veg — from birthday parties near the Kirti Mandir heritage zone to corporate cakes at the fishing port offices — RedHeart covers Porbandar, Chhaya, Ranavav, and the Saurashtra coastal belt.</p>
<p>Our Porbandar cake range: All eggless — Chocolate, Black Forest, Red Velvet, Kesar-Mava, Mango, Photo Cakes, Fondant Gandhi / Sudama-theme cakes. Pure Veg. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Porbandar, Gujarat</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kirti Mandir, MG Road, Chowpati Beach area, Gujari Bazar, Chhaya Road, Ranavav Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">100% eggless — all flavours (Pure Veg)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Kesar-Mava, Gandhi Fondant, Chocolate, Photo Cake, Black Forest (all eggless)</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Are all cakes eggless in Porbandar?", answer: "Yes! All our Porbandar cakes are 100% eggless and Pure Veg — suitable for Porbandar's Gujarati community." },
      { question: "Do you have Mahatma Gandhi / Kirti Mandir-themed cakes in Porbandar?", answer: "Yes! The Kirti Mandir birthplace memorial of Mahatma Gandhi — the Father of the Nation, born at Porbandar in 1869 — inspires our Gandhi Jayanti fondant cakes. A deeply meaningful design for this historic city." },
      { question: "Can I get same-day eggless cake delivery in Porbandar?", answer: "Yes, same-day eggless cake delivery is available across all Porbandar areas — Kirti Mandir, MG Road, Chowpati Beach, and Gujari Bazar — for orders placed before 3 PM." }
    ]
  },

  "hamirpur-hp": {
    cityName: "Hamirpur",
    metaTitle: "Cake Delivery in Hamirpur HP | Himachal Pradesh | RedHeart",
    metaDescription: "Order cakes online in Hamirpur Himachal Pradesh. Same-day delivery. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Hamirpur HP",
    metaKeyword: "cake delivery hamirpur himachal, order cake online hamirpur hp, birthday cake hamirpur, custom cake hamirpur hp, same day cake delivery hamirpur civil lines beas river baddi una road nit",
    footerContent: `
<h2>Cake Delivery in Hamirpur (HP) — Himachal Pradesh's Literacy Capital, NIT Campus City, and Beas River Valley's Commercial Hub</h2>
<p>Hamirpur — the headquarters of Hamirpur district in Himachal Pradesh (not to be confused with Hamirpur in Uttar Pradesh), the "NIT City" of Himachal Pradesh (National Institute of Technology Hamirpur — one of India's 31 NITs — is the flagship educational institution of the city and draws students from across India; the NIT Hamirpur campus, built in the scenic Beas River valley, has strong engineering programmes), consistently ranked among Himachal Pradesh's highest-literacy districts (Hamirpur district regularly achieves over 88% literacy — one of the highest in Himachal; the tradition of education and army service from this region is strong; Hamirpur sends a disproportionately high number of candidates to the Indian Army and civil services), and a city with a tradition of army service (Hamirpur district is sometimes called a "soldier district" — it has produced large numbers of Indian Army personnel, and ex-servicemen form a significant community). From birthday parties in the Civil Lines area to corporate cakes at the NIT campus zone, from anniversary surprises near the Beas River area to student cakes at the many coaching institutes — RedHeart covers all Hamirpur zones: Central (Civil Lines, Station Road, Kangra Road), North (Una Road, Bhota, Sujanpur), South (Bilaspur Road, Ghanari, Nadaun), East (Mandi Road, Sujanpur Tira), West (Una Road, Amb, Mehatpur).</p>
<p>Our Hamirpur (HP) cake range: Chocolate, Black Forest, Red Velvet, Apple-Cream (Himachali apple!), Mango, Photo Cakes, Fondant NIT / Himachal heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Hamirpur, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, NIT Campus area, Kangra Road, Una Road, Bilaspur Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple-Cream, Chocolate, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Hamirpur Himachal Pradesh?", answer: "Yes, same-day cake delivery is available across all Hamirpur (HP) areas — Civil Lines, Station Road, NIT Campus area, and Kangra Road — for orders placed before 3 PM." },
      { question: "Do you deliver cakes to NIT Hamirpur campus?", answer: "Yes, NIT Hamirpur — one of India's 31 National Institutes of Technology — and its student residential zones are covered under our Hamirpur (HP) same-day delivery." },
      { question: "Are eggless cakes available in Hamirpur HP?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Apple-Cream — are available in eggless variants for Hamirpur HP delivery." }
    ]
  },

  "nahan": {
    cityName: "Nahan",
    metaTitle: "Cake Delivery in Nahan | Sirmaur District Himachal Pradesh | RedHeart",
    metaDescription: "Order cakes online in Nahan. Same-day delivery across Nahan. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Nahan",
    metaKeyword: "cake delivery nahan, order cake online nahan, birthday cake nahan, custom cake nahan, same day cake delivery nahan sirmaur paonta sahib renuka lake shivalik hills industrial area",
    footerContent: `
<h2>Cake Delivery in Nahan — Sirmaur's Royal Capital, Renuka Lake's Heritage City, and Shivalik Hills' Pharmaceutical Hub</h2>
<p>Nahan — the headquarters of Sirmaur district in Himachal Pradesh, a picturesque hill town in the Shivalik ranges at 932 metres altitude, the former capital of the Sirmaur princely state (the Nahan Rajput kings — Rana Karma Prakash and his descendants — ruled from the 17th century, and the Nahan Palace, the Ranital Garden, and the old town's colonial-era buildings reflect the princely heritage), close to Renuka Lake (one of Himachal Pradesh's largest natural lakes — named for the goddess Renuka Mata, it is a major pilgrimage site; the annual Shri Renuka Ji International Fair draws lakhs of pilgrims; the lake is shaped like a woman's profile in traditional belief), home to the Paonta Sahib Gurudwara (50 km from Nahan — the historic Gurudwara where Guru Gobind Singh composed the Dasam Granth; one of Sikhism's most important Gurudwaras, visited by lakhs), and adjacent to Paonta Sahib's pharmaceutical industrial zone (the Paonta Sahib SIDCO industrial area has several pharmaceutical and chemical units) — is a city of royal heritage and religious significance. From birthday parties in the Civil Lines area to corporate cakes at the pharmaceutical companies, from anniversary surprises near the Ranital Garden to student cakes at Nahan's colleges — RedHeart covers all Nahan zones: Central (Civil Lines, Station Road, Paonta Sahib Road), North (Shimla Road, Kandaghat, Rajgarh), South (Paonta Sahib Road, Haryana border, Ambala Road), East (Uttarakhand border, Dehra Road), West (Sirmour plains, Sarahan).</p>
<p>Our Nahan cake range: Chocolate, Black Forest, Red Velvet, Apple-Cream (Shivalik orchards!), Mango, Photo Cakes, Fondant Renuka Lake / Paonta Sahib Gurudwara-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Nahan, Himachal Pradesh</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Paonta Sahib Road, Renuka Lake area, Rajgarh Road, Shimla Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Apple-Cream, Chocolate, Photo Cake, Black Forest, Renuka Lake Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Nahan?", answer: "Yes, same-day cake delivery is available across all Nahan areas — Civil Lines, Station Road, Paonta Sahib Road, and Renuka Lake area — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Nahan?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Nahan delivery." },
      { question: "Do you deliver cakes near Renuka Lake and Paonta Sahib Gurudwara?", answer: "Yes, the Renuka Lake pilgrimage zone and the Paonta Sahib area (50 km from Nahan) are covered under our Nahan district delivery zone." }
    ]
  },

  "fatehabad": {
    cityName: "Fatehabad",
    metaTitle: "Cake Delivery in Fatehabad | Cotton Belt Haryana | RedHeart",
    metaDescription: "Order cakes online in Fatehabad. Same-day delivery across Fatehabad. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Fatehabad",
    metaKeyword: "cake delivery fatehabad, order cake online fatehabad, birthday cake fatehabad, custom cake fatehabad, same day cake delivery fatehabad civil lines hisar road sirsa road jakhal station wheat cotton",
    footerContent: `
<h2>Cake Delivery in Fatehabad — Haryana's Cotton-Wheat Belt City and Hissar Plateau's Agricultural Hub</h2>
<p>Fatehabad — the headquarters of Fatehabad district in southwestern Haryana, a city of significant agricultural importance (Fatehabad district is one of Haryana's leading cotton-growing areas — the Haryana-Punjab cotton belt extends through Fatehabad's dry, semi-arid plains; the district also produces significant wheat and mustard; the Fatehabad Mandi is a major grain trading centre for the region), known for its large canal network (the Western Yamuna Canal and the Sirsa branch canal irrigate Fatehabad's fields, converting semi-arid land into productive farmland), and a city on the Sirsa-Hisar-Rohtak highway corridor through the Hissar plateau — is a city of agricultural wealth in the dry Haryana heartland. From birthday parties in the Civil Lines area to corporate cakes at the large cotton ginning factories, from anniversary surprises near the Hisar Road market to student cakes at Fatehabad's colleges — RedHeart covers all Fatehabad zones: Central (Civil Lines, Station Road, Hisar Road), North (Sirsa Road, Tohana Road, Jakhal), South (Bhiwani Road, Hansi Road, Narnaul Road), East (Hisar Road, Fatehabad-Hisar border), West (Sirsa Road, Hissar Plains, Ellenabad).</p>
<p>Our Fatehabad cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Fatehabad, Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Hisar Road, Sirsa Road, Tohana Road, Jakhal</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Fatehabad?", answer: "Yes, same-day cake delivery is available across all Fatehabad areas — Civil Lines, Station Road, Hisar Road, and Sirsa Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Fatehabad?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Fatehabad delivery." },
      { question: "Do you deliver midnight cakes in Fatehabad?", answer: "Yes, midnight birthday cake delivery is available across Fatehabad's central and residential zones." }
    ]
  },

  "mahendragarh": {
    cityName: "Mahendragarh",
    metaTitle: "Cake Delivery in Mahendragarh | Narnaul Heritage Haryana | RedHeart",
    metaDescription: "Order cakes online in Mahendragarh. Same-day delivery across Mahendragarh. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Mahendragarh",
    metaKeyword: "cake delivery mahendragarh, order cake online mahendragarh narnaul, birthday cake mahendragarh, custom cake mahendragarh, same day cake delivery mahendragarh narnaul sher shah suri ibrahim lodi rewari road jaipur",
    footerContent: `
<h2>Cake Delivery in Mahendragarh — Narnaul's Historic City, Sher Shah Suri's Birth City, and Haryana-Rajasthan Border Trade Hub</h2>
<p>Mahendragarh — the headquarters of Mahendragarh district in southern Haryana, with its main urban centre at Narnaul (a historic town of great antiquity), the birthplace of Sher Shah Suri (the Afghan-Pashtun ruler who defeated Mughal Emperor Humayun and built the Grand Trunk Road — one of South Asia's oldest and longest major roads; Sher Shah Suri was born at Hissar-Firoza in Narnaul in 1486 CE; he reformed India's monetary system with the Rupaya silver coin and is credited with administrative genius that Akbar later emulated; the Sher Shah Suri mosque and the Ibrahim Lodi tomb — where Afghan Sultan Ibrahim Lodi, who was defeated by Babur at Panipat, is buried — are in Narnaul), known for the Miyan Khan mosque (16th century Sur-period mosque at Narnaul, an example of Afghan-era architecture), and a border city between Haryana and Rajasthan's Jhunjhunu-Alwar belt — is a city of deep medieval history. From birthday parties in the Narnaul Civil Lines area to corporate cakes at the large industrial units, from anniversary surprises near the historic Sher Shah mosque to student cakes at NIT Kurukshetra's extended programmes — RedHeart covers all Mahendragarh/Narnaul zones: Central (Narnaul, Civil Lines, Rewari Road), North (Rewari Road, Kosli Road, Jhajjar border), South (Rajasthan border, Alwar Road, Behror), East (Delhi Road, Pataudi, Gurgaon border), West (Bhiwani Road, Loharu, Hisar Road).</p>
<p>Our Mahendragarh cake range: Chocolate, Black Forest, Red Velvet, Mango, Butterscotch, Photo Cakes, Fondant Sher Shah Suri / Narnaul heritage-theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Mahendragarh (Narnaul), Haryana</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Narnaul, Civil Lines, Rewari Road, Rajasthan border Road, Bhiwani Road, Loharu</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Sher Shah Suri Heritage Fondant, Photo Cake, Black Forest, Red Velvet</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Mahendragarh (Narnaul)?", answer: "Yes, same-day cake delivery is available across all Mahendragarh/Narnaul areas — Narnaul town, Civil Lines, Rewari Road, and Bhiwani Road — for orders placed before 3 PM." },
      { question: "Do you have Sher Shah Suri or Narnaul heritage-themed cakes?", answer: "Yes! Narnaul — the birthplace of Sher Shah Suri, the Afghan ruler who built the Grand Trunk Road and reformed India's currency — inspires our Sher Shah Suri heritage fondant cakes." },
      { question: "Are eggless cakes available in Mahendragarh?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Mahendragarh delivery." }
    ]
  },

  "barnala": {
    cityName: "Barnala",
    metaTitle: "Cake Delivery in Barnala | Malwa Punjab | RedHeart",
    metaDescription: "Order cakes online in Barnala. Same-day delivery across Barnala. Birthday cakes from ₹499.",
    h1: "Online Cake Delivery in Barnala",
    metaKeyword: "cake delivery barnala, order cake online barnala, birthday cake barnala, custom cake barnala, same day cake delivery barnala civil lines ludhiana road sangrur road cotton textiles mandi",
    footerContent: `
<h2>Cake Delivery in Barnala — Malwa's Cotton-Spinning City and Punjab's Textile Hub</h2>
<p>Barnala — the headquarters of Barnala district in Punjab's Malwa region, the smallest district headquarters in Punjab by area, a city with a strong textile and cotton-spinning industry (Barnala has numerous spinning mills, cotton ginning factories, and textile units processing Malwa cotton; the city's textile industry employs a significant portion of the local workforce; woollen and cotton textiles from Barnala are distributed across Punjab and Haryana), and a major grain Mandi for wheat, rice, and paddy of the Malwa plains (Barnala sits in the flat, fertile Punjab plains where wheat, rice, and cotton cultivation is intensive). From birthday parties in the Civil Lines area to corporate cakes at the large spinning mills, from anniversary surprises near the Ludhiana Road belt to student cakes at Barnala's colleges — RedHeart covers all Barnala zones: Central (Civil Lines, Station Road, Ludhiana Road), North (Ludhiana Road, Pakhowal, Dhuri border), South (Sangrur Road, Sherpur, Tapa), East (Bathinda Road, Rampura Phul), West (Moga Road, Dhanaula).</p>
<p>Our Barnala cake range: Chocolate, Black Forest, Red Velvet, Mango (Punjab Chaunsa!), Butterscotch, Photo Cakes, Fondant theme cakes. Eggless available. Same-day delivery before 3 PM; midnight delivery available.</p>
<table style="width:100%;border-collapse:collapse;font-size:0.92em;">
  <thead><tr style="background:#fdf2f8;">
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Detail</th>
    <th style="border:1px solid #e5e7eb;padding:8px 12px;">Info</th>
  </tr></thead>
  <tbody>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">City</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Barnala, Punjab</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Coverage</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Civil Lines, Station Road, Ludhiana Road, Sangrur Road, Bathinda Road, Moga Road</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Starting price</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">₹499</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Same-day delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available (order before 3 PM)</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Midnight delivery</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Eggless options</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Available across all flavours</td></tr>
    <tr><td style="border:1px solid #e5e7eb;padding:8px 12px;">Popular cakes</td><td style="border:1px solid #e5e7eb;padding:8px 12px;">Chocolate, Photo Cake, Black Forest, Red Velvet, Fondant</td></tr>
  </tbody>
</table>`,
    faqs: [
      { question: "Can I get same-day cake delivery in Barnala?", answer: "Yes, same-day cake delivery is available across all Barnala areas — Civil Lines, Station Road, Ludhiana Road, and Sangrur Road — for orders placed before 3 PM." },
      { question: "Are eggless cakes available in Barnala?", answer: "Yes, all flavours — Chocolate, Black Forest, Red Velvet, Mango — are available in eggless variants for Barnala delivery." },
      { question: "Do you deliver midnight cakes in Barnala?", answer: "Yes, midnight birthday cake delivery is available across Barnala's central and residential zones." }
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
