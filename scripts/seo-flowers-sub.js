const API = "https://backend.redheart.in/api/category-seo/upsert";

const pages = [

// ── VARIETIES ─────────────────────────────────────────────────────────────

{
  pageKey: "flowers/roses",
  categorySlug: "flowers", subcategorySlug: "roses", url: "/flowers/roses",
  h1: "Roses Delivery", defaultH1: "Roses Delivery",
  metaTitle: "Send Roses Online – Same-Day Rose Delivery India | RedHeart",
  metaDescription: "Order fresh roses online with same-day & midnight delivery across 830+ cities in India. Red, pink, white & mixed rose bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/roses",
  metaKeyword: "roses online India, send roses online, red roses delivery, pink roses online, rose bouquet India, same day rose delivery, buy roses online India",
  footerContent: `
<h2>Why Roses Remain the World's Most Gifted Flower</h2>
<p>No flower in the world has been gifted as consistently, as universally, and as meaningfully as the rose. It transcends language, culture, and occasion. A single red rose says "I love you" in every country. A bunch of pink roses says "I care about you" at a birthday, a recovery, or a quiet Tuesday when someone simply deserves to feel seen. White roses say "I respect you" at a wedding or in sympathy. Roses do not need context — they create it.</p>
<p>RedHeart delivers fresh rose bouquets across 830+ cities in India with same-day and midnight delivery, starting at ₹399. Every bouquet is arranged fresh on the day of delivery, with stems at their peak and petals fully open — the way a rose is meant to arrive.</p>

<h2>Understanding Rose Colours — A Complete Guide</h2>

<table>
  <thead><tr><th>Rose Colour</th><th>Meaning</th><th>Best Occasions</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Red</td><td>Deep romantic love</td><td>Anniversary, Valentine's Day, "I love you"</td><td>Romantic partner</td></tr>
    <tr><td>Pink</td><td>Affection, warmth, admiration</td><td>Birthday, Mother's Day, friendship</td><td>Mother, friend, sister, colleague</td></tr>
    <tr><td>White</td><td>Purity, respect, new beginnings</td><td>Wedding, sympathy, get well soon</td><td>Formal occasions, wedding gifts</td></tr>
    <tr><td>Yellow</td><td>Joy, friendship, congratulations</td><td>Congratulations, Diwali, farewell</td><td>Friends, colleagues</td></tr>
    <tr><td>Orange</td><td>Enthusiasm, passion, energy</td><td>Birthday, congratulations</td><td>Energetic friend, colleague</td></tr>
    <tr><td>Mixed</td><td>Celebration, variety</td><td>Birthday, housewarming, festivals</td><td>Universal — suits almost everyone</td></tr>
  </tbody>
</table>

<h2>Roses for Every Relationship</h2>
<p>The colour and number of roses matter as much as the flower itself. Here is how to choose correctly for every relationship in your life.</p>
<p><strong>For a romantic partner</strong> — red roses, always. A dozen long-stem red roses is the classic romantic statement. Twenty-four makes it grander. One single red rose, perfectly wrapped, is the most intimate option of all. Pink roses work for relationships that are romantic but where red might feel too intense — new relationships, gestures of affection that don't need to declare love loudly.</p>
<p><strong>For a mother</strong> — pink roses are the natural choice. They carry warmth and genuine affection without the romantic connotation of red. A generous mixed bouquet in soft pinks and whites is equally appropriate for a mother's birthday or Mother's Day.</p>
<p><strong>For a best friend</strong> — yellow roses for joy and friendship, mixed bouquets for celebration, pink roses for warmth. Avoid red roses unless the friendship has romantic dimensions — yellow and mixed arrangements carry the right register of affection and celebration.</p>
<p><strong>For a colleague</strong> — white or yellow roses, or a tasteful mixed arrangement. The key is staying away from intensely romantic choices. A pale pink or white bouquet acknowledges the occasion without creating ambiguity.</p>

<h2>How Many Roses to Send</h2>
<p>The number of roses in a bouquet carries its own language. A single rose is intimate and deliberate — the most personal choice. Six roses express a genuine but understated feeling. A dozen is the classic gift — generous, beautiful, and universally understood. Two dozen is for the grand gesture — anniversaries, Valentine's Day, apologies that need to make a point. Custom numbers mean something too: the number of years together, the recipient's age, or a number with personal significance.</p>

<h2>Rose Gifting During Indian Festivals</h2>
<p>Roses find their way into every major gifting season in India. Valentine's Day is the peak — red roses are the single most ordered item in the entire Indian gifting industry on February 14. Rose Day, which opens Valentine's Week on February 7, is entirely built around red rose gifting. Raksha Bandhan sees a rise in pink and mixed rose bouquets as siblings send flowers to each other across cities. Mother's Day drives significant pink rose demand. Diwali and New Year create demand for warm, celebratory rose arrangements in yellows, oranges, and mixed colours.</p>

<h2>Same-Day and Midnight Rose Delivery</h2>
<p>RedHeart delivers fresh rose bouquets the same day across 830+ cities in India. Roses are sourced and arranged fresh on the day of delivery — not prepared in advance and stored. This same-day freshness model is what ensures roses arrive at their peak: petals open, stems firm, and fragrance present. Midnight rose delivery is available for Valentine's Day, anniversaries, and birthdays where the occasion calls for your gift to be the very first thing of the day.</p>`,
  faqs: [
    { question: "Which rose colour is best for an anniversary?", answer: "Red roses are the classic anniversary choice, symbolising deep romantic love. Pink roses are a softer alternative for couples who prefer warmth over intensity. A roses-and-lily combination in red and white creates a more elaborate anniversary arrangement." },
    { question: "How many roses should I send?", answer: "A dozen (12) red roses is the most classic bouquet. Six is understated and intimate. 24 makes a grand statement for milestones. Single roses are the most personal — deliberate and meaningful." },
    { question: "Can I get rose delivery the same day in India?", answer: "Yes. RedHeart delivers fresh rose bouquets the same day across 830+ cities. Midnight delivery is also available for romantic occasions." },
    { question: "What do pink roses mean?", answer: "Pink roses symbolise warmth, affection, admiration, and friendship. They are ideal for Mother's Day, birthdays, and as a gesture of care for someone who matters — without the romantic intensity of red." },
    { question: "Can I pair roses with a cake or plant?", answer: "Yes. A rose bouquet paired with a cake or a plant creates a more complete gift. Red roses with red velvet cake is the most popular anniversary combination on RedHeart." },
  ],
},

{
  pageKey: "flowers/lilies",
  categorySlug: "flowers", subcategorySlug: "lilies", url: "/flowers/lilies",
  h1: "Lilies Delivery", defaultH1: "Lilies Delivery",
  metaTitle: "Send Lilies Online – Same-Day Lily Delivery India | RedHeart",
  metaDescription: "Order fresh lilies online with same-day delivery across 830+ cities in India. White, pink & mixed lily bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/lilies",
  metaKeyword: "lilies online India, send lilies online, lily bouquet India, white lilies delivery, same day lily delivery, buy lilies online India",
  footerContent: `
<h2>Why Lilies Are India's Most Elegant Gift Flower</h2>
<p>There is a quiet grandeur to lilies that few other flowers match. They are large, fragrant, and visually commanding — a single stem of white lilies fills a room in a way that a full bouquet of smaller flowers sometimes cannot. They also last significantly longer than most cut flowers — a well-cared-for lily bouquet maintains its beauty for up to ten days after delivery. For a gift that needs to make an immediate impact and a lasting impression, lilies deliver on both counts.</p>
<p>RedHeart delivers fresh lily bouquets across 830+ cities in India with same-day delivery, starting at ₹399. Sourced locally in each city for maximum freshness, lily arrangements arrive with buds and blooms in optimal condition.</p>

<h2>Lily Types and What They Say</h2>
<table>
  <thead><tr><th>Lily Type</th><th>Meaning</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>White Asiatic Lily</td><td>Purity, new beginnings, sympathy</td><td>Weddings, sympathy, get well soon</td></tr>
    <tr><td>Pink Lily</td><td>Admiration, femininity, warmth</td><td>Birthday, Mother's Day, friendship</td></tr>
    <tr><td>Orange Lily</td><td>Confidence, passion, energy</td><td>Congratulations, birthdays</td></tr>
    <tr><td>Mixed Lily Bouquet</td><td>Celebration, abundance</td><td>Birthdays, housewarmings, festivals</td></tr>
    <tr><td>Roses and Lily Combo</td><td>Romance with elegance</td><td>Anniversary, Valentine's, premium gifting</td></tr>
  </tbody>
</table>

<h2>When Lilies Are the Right Choice</h2>
<p><strong>Weddings</strong> — white lilies are among the most gifted wedding flowers in India. Their formal elegance, fragrance, and the symbolism of new beginnings make them perfectly matched to the occasion. A white lily arrangement delivered to the couple's home after the wedding is a thoughtful, considered gift.</p>
<p><strong>Get well soon</strong> — white lilies convey calm, care, and hope in a way that most flowers cannot. Their quiet presence is comforting rather than loud. In a recovery room or sickroom, lilies bring beauty without overwhelming. Note: avoid very heavily fragrant varieties in hospital rooms — choose mildly fragrant or the recipient's preference.</p>
<p><strong>Anniversary</strong> — a roses-and-lily combination is one of the most popular premium anniversary choices. The contrast between the romance of roses and the elegance of lilies creates an arrangement that is more visually complex and emotionally layered than either flower alone.</p>
<p><strong>Mother's Day and Women's Day</strong> — pink lilies carry warmth and admiration — the right emotional register for celebrating the women in your life. A pink lily arrangement is a distinctly thoughtful alternative to the more standard carnation bouquet.</p>

<h2>How Long Do Lilies Last After Delivery</h2>
<p>Fresh lilies from RedHeart typically last 7–10 days after delivery when kept in clean water and away from direct sunlight. Remove the stamens upon opening to prevent pollen staining. Change the water every two days and re-cut the stems at a slight angle for optimal water absorption. Lilies that arrive with buds will open over 1–2 days, extending the display period beyond fully opened arrangements.</p>`,
  faqs: [
    { question: "How long do lilies last after delivery?", answer: "Fresh lilies last 7–10 days after delivery when properly cared for — longer than most cut flowers. Remove stamens to prevent pollen staining, keep in clean water, and change water every two days." },
    { question: "What occasions are lilies best for?", answer: "Lilies are ideal for weddings, anniversaries, get well soon, sympathy, Mother's Day, and housewarmings. White lilies suit solemn and formal occasions; pink and mixed lilies suit celebrations." },
    { question: "Are roses and lilies a good combination?", answer: "Yes. A roses-and-lily combination is one of the most popular premium bouquet choices for anniversaries and special occasions. The romance of roses and the elegance of lilies create a visually striking, layered arrangement." },
    { question: "Can I get lily delivery the same day in India?", answer: "Yes. RedHeart delivers fresh lily bouquets the same day across 830+ cities in India." },
    { question: "Are white lilies appropriate for a wedding gift?", answer: "Yes. White lilies are one of the most appropriate wedding gift flowers — their formal elegance, fragrance, and symbolism of new beginnings are perfectly matched to the occasion." },
  ],
},

{
  pageKey: "flowers/carnations",
  categorySlug: "flowers", subcategorySlug: "carnations", url: "/flowers/carnations",
  h1: "Carnations Delivery", defaultH1: "Carnations Delivery",
  metaTitle: "Send Carnations Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh carnations online with same-day delivery across 830+ cities in India. Pink, white & mixed carnation bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/carnations",
  metaKeyword: "carnations online India, send carnations, carnation bouquet India, pink carnations delivery, same day carnation delivery, Mother's Day carnations India",
  footerContent: `
<h2>Why Carnations Are India's Most Underrated Gift Flower</h2>
<p>Carnations do not get the attention that roses and lilies do — and that is precisely what makes them special. When someone receives carnations, they know the sender chose something deliberate, not default. Carnations carry warmth, sincerity, and genuine affection. In many cultures, they are the traditional Mother's Day flower — and that tradition holds strong in India.</p>
<p>Carnations are also among the longest-lasting cut flowers available — they can maintain freshness for up to two weeks after delivery. A carnation bouquet that arrives on a birthday is still beautiful a week later, long after a more fragile arrangement would have faded. RedHeart delivers fresh carnation bouquets across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Carnation Colours and What They Communicate</h2>
<table>
  <thead><tr><th>Colour</th><th>Meaning</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Pink</td><td>Maternal love, warmth, gratitude</td><td>Mother's Day, birthday for mom, teacher appreciation</td></tr>
    <tr><td>White</td><td>Pure love, good luck, remembrance</td><td>Weddings, sympathy, new beginnings</td></tr>
    <tr><td>Red</td><td>Deep love, admiration</td><td>Anniversary, Valentine's, romantic occasions</td></tr>
    <tr><td>Yellow</td><td>Disappointment — avoid for gifting</td><td>Not recommended as a gift</td></tr>
    <tr><td>Mixed</td><td>Festivity, celebration, abundance</td><td>Birthdays, Raksha Bandhan, festivals</td></tr>
  </tbody>
</table>

<h2>Carnations for Every Occasion</h2>
<p><strong>Mother's Day</strong> — pink carnations are the traditional Mother's Day flower worldwide, and the most popular choice in India. The association between pink carnations and mothers is deep and cross-cultural. A generous bunch of pink carnations, delivered fresh on Mother's Day morning, is a gift that carries more cultural weight than most recipients realise — and that they almost always appreciate.</p>
<p><strong>Raksha Bandhan</strong> — mixed carnation bouquets are warmly appropriate for sibling gifting. They carry celebration and warmth without romantic undertones — the right emotional register for brothers gifting sisters and sisters gifting brothers. Pair with a cake for a complete Raksha Bandhan gift.</p>
<p><strong>Congratulations and appreciation</strong> — carnations in mixed colours communicate genuine appreciation and celebration in a way that is warm but not romantic. They are excellent for teacher appreciation days, farewell gifts for colleagues, and congratulations for achievements.</p>
<p><strong>Weddings</strong> — white carnations are an appropriate wedding gift flower — formal, respectful, and long-lasting. A white carnation arrangement maintains its beauty through multiple days of wedding celebrations.</p>

<h2>How Long Do Carnations Last</h2>
<p>Carnations are among the most durable cut flowers available — lasting 10–14 days when properly cared for. Keep in clean water, away from direct sunlight, change water every two days, and remove any wilting petals. Carnations are also relatively resistant to ethylene gas (produced by fruit), making them suitable for placement near kitchen areas where other flowers might wilt faster.</p>`,
  faqs: [
    { question: "What do pink carnations mean?", answer: "Pink carnations symbolise maternal love, warmth, and gratitude. They are the traditional Mother's Day flower and the most appropriate choice for gifting to a mother, teacher, or caregiver." },
    { question: "How long do carnations last after delivery?", answer: "Carnations last 10–14 days after delivery — one of the longest-lasting cut flowers available. They maintain their colour and shape well with basic care: clean water, cool placement, and water changed every two days." },
    { question: "Are carnations good for Raksha Bandhan?", answer: "Yes. Mixed carnation bouquets are warmly appropriate for Raksha Bandhan — celebratory and family-appropriate without romantic overtones. They work well for siblings gifting each other across cities." },
    { question: "Can I get carnation delivery the same day in India?", answer: "Yes. RedHeart delivers fresh carnation bouquets the same day across 830+ cities in India." },
    { question: "Which carnation colour should I avoid as a gift?", answer: "Yellow carnations traditionally symbolise disappointment or rejection in some cultures. For positive gifting, choose pink, white, red, or mixed carnation bouquets instead." },
  ],
},

{
  pageKey: "flowers/roses-and-lily",
  categorySlug: "flowers", subcategorySlug: "roses-and-lily", url: "/flowers/roses-and-lily",
  h1: "Roses and Lily Delivery", defaultH1: "Roses and Lily Delivery",
  metaTitle: "Roses and Lily Bouquet Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh roses and lily bouquets online with same-day delivery across 830+ cities in India. Premium mixed arrangements from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/roses-and-lily",
  metaKeyword: "roses and lily bouquet India, send roses and lilies online, roses lilies delivery India, mixed flowers roses lily, same day roses lily delivery",
  footerContent: `
<h2>Why Roses and Lily Together Make the Most Elegant Bouquet</h2>
<p>Some combinations are greater than the sum of their parts. Roses and lilies together create a bouquet that is visually more complex, emotionally more layered, and texturally more interesting than either flower alone. The soft, curved petals of roses contrast with the open, star-shaped blooms of lilies. The compact density of a rose arrangement opens up with the spacious, fragrant presence of lily stems. Together, they make a gift that looks expensive, feels thoughtful, and arrives with an impact that a single-flower bouquet rarely achieves.</p>
<p>RedHeart delivers fresh roses-and-lily bouquets across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>When to Choose Roses and Lily</h2>
<table>
  <thead><tr><th>Occasion</th><th>Recommended Combination</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Anniversary</td><td>Red roses + white lilies</td><td>Romance of roses + elegance of lilies = premium anniversary statement</td></tr>
    <tr><td>Valentine's Day</td><td>Red roses + pink lilies</td><td>More elaborate than a standard rose bouquet — stands out</td></tr>
    <tr><td>Birthday</td><td>Pink roses + mixed lilies</td><td>Warm, vibrant, more visually interesting than roses alone</td></tr>
    <tr><td>Wedding Gift</td><td>White roses + white lilies</td><td>Unified, formal, symbolises new beginnings together</td></tr>
    <tr><td>Mother's Day</td><td>Pink roses + pink lilies</td><td>Soft, feminine, layered warmth appropriate for the occasion</td></tr>
  </tbody>
</table>

<h2>Roses and Lily for Anniversaries</h2>
<p>The roses-and-lily combination is the most popular premium anniversary bouquet on RedHeart. When paired with a red velvet cake, it creates the most romantic combined gift available — rich colour, fragrance, and the clear visual message that the occasion was taken seriously. For milestone anniversaries, a large roses-and-lily arrangement with 12 or more stems of each flower makes a statement that a standard rose bouquet cannot.</p>

<h2>How to Care for a Roses-and-Lily Bouquet</h2>
<p>Place in clean water immediately upon arrival. Remove lily stamens to prevent pollen staining clothes and surfaces. Re-cut stems at a diagonal angle for better water absorption. Keep in a cool area away from direct sunlight and away from fruit (which produces ethylene gas that shortens flower life). Change water every two days. Roses typically last 5–7 days; lilies 7–10 days — expect the bouquet to evolve beautifully as the lilies open over the first few days.</p>`,
  faqs: [
    { question: "Why are roses and lily a popular combination?", answer: "Roses and lily together create a visually complex, fragrant bouquet that is more impressive than either flower alone. The contrast of textures — compact rose petals against open lily blooms — creates a premium, layered arrangement." },
    { question: "What occasion are roses and lily best for?", answer: "Anniversary, Valentine's Day, wedding gifting, and Mother's Day are the most popular occasions for a roses-and-lily bouquet. The combination signals a premium, considered gift appropriate for significant occasions." },
    { question: "Can I get roses and lily delivery the same day in India?", answer: "Yes. RedHeart delivers fresh roses-and-lily bouquets the same day across 830+ cities in India." },
    { question: "How long do roses and lily last after delivery?", answer: "Roses typically last 5–7 days; lilies 7–10 days. In a combined bouquet, lilies will continue to bloom beautifully after the roses peak, extending the overall display period." },
  ],
},

// ── COLOURS ────────────────────────────────────────────────────────────────

{
  pageKey: "flowers/red",
  categorySlug: "flowers", subcategorySlug: "red", url: "/flowers/red",
  h1: "Red Flowers Delivery", defaultH1: "Red Flowers Delivery",
  metaTitle: "Red Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh red flowers online with same-day delivery across 830+ cities in India. Red roses, mixed red bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/red",
  metaKeyword: "red flowers online India, send red flowers, red roses delivery, red flower bouquet India, same day red flowers",
  footerContent: `
<h2>Red Flowers — The Colour of Love, Passion, and Celebration</h2>
<p>Red is the most powerful colour in the gifting vocabulary. It communicates love, passion, urgency, and celebration in a way no other colour can. A red flower bouquet arrives with immediate impact — it does not require explanation. It is romantic, vibrant, and impossible to overlook. RedHeart delivers fresh red flower bouquets across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Red Flowers for Gifting</h2>
<table>
  <thead><tr><th>Flower</th><th>Meaning</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Red Roses</td><td>Romantic love, passion</td><td>Anniversary, Valentine's Day, romantic gestures</td></tr>
    <tr><td>Red Carnations</td><td>Deep admiration, love</td><td>Anniversary, formal occasions</td></tr>
    <tr><td>Red Gerberas</td><td>Energy, cheerfulness</td><td>Birthday, congratulations</td></tr>
    <tr><td>Mixed Red Bouquet</td><td>Celebration, vibrancy</td><td>Birthday, festivals, general gifting</td></tr>
  </tbody>
</table>

<h2>When to Send Red Flowers</h2>
<p>Valentine's Day and Rose Day are the obvious red flower occasions — but red works year-round. For anniversaries, red roses remain the most romantic choice available. For birthdays, a vibrant red mixed bouquet brings celebratory energy. For Diwali, deep red arrangements complement the festival's warmth and auspiciousness. For congratulations, red gerberas or mixed red arrangements carry enthusiasm and joy that lighter colours do not.</p>`,
  faqs: [
    { question: "Which red flowers are best for a romantic gift?", answer: "Red roses are the classic romantic red flower. Red carnations are a more unusual but equally meaningful choice for deep admiration. A mixed red bouquet is the most vibrant and celebratory option." },
    { question: "Can I get red flowers delivered same day in India?", answer: "Yes. RedHeart delivers fresh red flower bouquets the same day across 830+ cities in India." },
    { question: "Are red flowers appropriate for occasions other than Valentine's Day?", answer: "Absolutely. Red flowers work for anniversaries, birthdays, Diwali, congratulations, and any occasion where a vibrant, celebratory statement is appropriate." },
  ],
},

{
  pageKey: "flowers/pink",
  categorySlug: "flowers", subcategorySlug: "pink", url: "/flowers/pink",
  h1: "Pink Flowers Delivery", defaultH1: "Pink Flowers Delivery",
  metaTitle: "Pink Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh pink flowers online with same-day delivery across 830+ cities in India. Pink roses, lilies & mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/pink",
  metaKeyword: "pink flowers online India, send pink flowers, pink roses delivery, pink flower bouquet India, same day pink flowers",
  footerContent: `
<h2>Pink Flowers — The Colour of Warmth, Affection, and Care</h2>
<p>Pink flowers occupy a uniquely versatile place in Indian gifting. They are warm without being intense, romantic without being declarative, celebratory without being loud. Pink works for a mother's birthday, a best friend's get well soon, a colleague's farewell, and a sister's Raksha Bandhan gift with equal appropriateness. No other colour is as universally safe and universally appreciated in Indian gifting culture. RedHeart delivers fresh pink flower bouquets across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Pink Flowers for Gifting</h2>
<table>
  <thead><tr><th>Flower</th><th>Tone</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Pink Roses</td><td>Soft romance, warmth</td><td>Birthday, Mother's Day, friendship</td></tr>
    <tr><td>Pink Carnations</td><td>Maternal love, gratitude</td><td>Mother's Day, teacher's day, appreciation</td></tr>
    <tr><td>Pink Lilies</td><td>Admiration, femininity</td><td>Birthday, Women's Day, anniversary</td></tr>
    <tr><td>Mixed Pink Bouquet</td><td>Celebration, joy</td><td>General gifting, birthdays, housewarmings</td></tr>
  </tbody>
</table>

<h2>When Pink Flowers Are the Perfect Choice</h2>
<p>Mother's Day is the peak pink flower occasion in India — pink carnations and roses are the most gifted flowers of the day. Birthdays for women almost always call for pink — it is the most appropriate, most appreciated, and most commonly requested colour. Women's Day gifting leans heavily on soft pinks and whites. For Raksha Bandhan, pink roses from a brother to a sister are warm and appropriate. Hospital recovery gifts — white and pink combinations — are calming and uplifting without being overwhelming.</p>`,
  faqs: [
    { question: "What occasions are pink flowers best for?", answer: "Pink flowers are ideal for Mother's Day, women's birthdays, Women's Day, Raksha Bandhan (sibling gifting), get well soon, and as a warm appreciation gesture. Pink works for virtually every positive occasion." },
    { question: "What is the difference between pink roses and pink carnations?", answer: "Pink roses carry warmth and soft romance — ideal for birthdays and friendship. Pink carnations are the traditional Mother's Day flower — they convey maternal love and deep gratitude. Both are excellent for gifting women." },
    { question: "Can I get pink flowers delivered same day in India?", answer: "Yes. RedHeart delivers fresh pink flower bouquets the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/white",
  categorySlug: "flowers", subcategorySlug: "white", url: "/flowers/white",
  h1: "White Flowers Delivery", defaultH1: "White Flowers Delivery",
  metaTitle: "White Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh white flowers online with same-day delivery across 830+ cities in India. White lilies, roses & mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/white",
  metaKeyword: "white flowers online India, send white flowers, white lilies delivery, white roses India, same day white flowers",
  footerContent: `
<h2>White Flowers — Purity, Elegance, and Timeless Grace</h2>
<p>White flowers communicate something that no other colour can: quiet respect, deep sincerity, and a kind of timeless grace that transcends the moment. They are appropriate for weddings, for sympathy, for recovery, for the occasions that call for dignity alongside beauty. White is also the most formally elegant choice — a white lily arrangement in a corporate lobby or a white rose bouquet at a wedding gift table makes an immediate impression of quality and taste. RedHeart delivers fresh white flower bouquets across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>White Flowers by Occasion</h2>
<table>
  <thead><tr><th>Flower</th><th>Occasion</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>White Lilies</td><td>Weddings, sympathy, get well soon</td><td>Formal, fragrant, long-lasting — conveys respect and care</td></tr>
    <tr><td>White Roses</td><td>Weddings, new beginnings</td><td>Purity and new beginnings — the most elegant white option</td></tr>
    <tr><td>White Carnations</td><td>Weddings, sympathy</td><td>Long-lasting, pure — appropriate for formal occasions</td></tr>
    <tr><td>Mixed White Bouquet</td><td>Corporate gifting, weddings</td><td>Elegant and inclusive — appropriate for all professional contexts</td></tr>
  </tbody>
</table>

<h2>When White Flowers Are the Right Choice</h2>
<p>Wedding gifts: white lilies and white roses are the most appropriate wedding gift flowers — elegant, formal, and perfectly colour-matched to wedding décor. Sympathy and condolence: white lilies are the universally recognised sympathy flower in India. Get well soon: white flowers are calming and hopeful without being loud — appropriate for hospital rooms and recovery spaces. Corporate gifting: white arrangements are the safest professional choice — universal, elegant, and appropriate for any recipient.</p>`,
  faqs: [
    { question: "What occasions are white flowers best for?", answer: "White flowers are ideal for weddings, sympathy and condolence, get well soon, and corporate gifting. White lilies are the most commonly sent sympathy flower; white roses and lilies are the most popular wedding gift flowers." },
    { question: "Are white flowers appropriate for all religious occasions in India?", answer: "White is generally appropriate and respectful across most Indian religious contexts. However, in some specific Hindu traditions, white is associated with mourning — check the context before sending white flowers to a celebration in a household with strong traditional preferences." },
    { question: "Can I get white flowers delivered same day in India?", answer: "Yes. RedHeart delivers fresh white flower bouquets the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/mixed",
  categorySlug: "flowers", subcategorySlug: "mixed", url: "/flowers/mixed",
  h1: "Mixed Flowers Delivery", defaultH1: "Mixed Flowers Delivery",
  metaTitle: "Mixed Flower Bouquets Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh mixed flower bouquets online with same-day delivery across 830+ cities in India. Colourful, fresh arrangements from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/mixed",
  metaKeyword: "mixed flowers online India, mixed flower bouquet India, send mixed flowers, colourful flower bouquet India, same day mixed flower delivery",
  footerContent: `
<h2>Mixed Flower Bouquets — The Most Versatile Gift in Gifting</h2>
<p>A mixed flower bouquet is the gifting choice that almost never misses. It is colourful, visually abundant, and appropriate for virtually every occasion and every recipient. Unlike a single-flower arrangement that requires knowing the recipient's preferences, a mixed bouquet presents variety and celebration in a single, generous statement. RedHeart delivers fresh mixed flower bouquets across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Why Mixed Bouquets Work for Everyone</h2>
<p>Mixed bouquets combine the romance of roses with the elegance of lilies, the warmth of carnations with the cheerfulness of gerberas, and the freshness of seasonal flowers into one arrangement that covers the full spectrum of gifting emotion. Whether the recipient favours one flower over another, a mixed bouquet almost certainly includes something they love — making it a safe, generous, and genuinely appreciated choice.</p>

<h2>Mixed Flowers for Every Occasion</h2>
<table>
  <thead><tr><th>Occasion</th><th>Recommended Colour Tone</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Birthday</td><td>Vibrant reds, pinks, yellows, oranges</td><td>Celebratory, energetic, visually abundant</td></tr>
    <tr><td>Housewarming</td><td>Warm mixed — oranges, yellows, reds</td><td>Inviting, auspicious, fills the new space with colour</td></tr>
    <tr><td>Diwali</td><td>Yellow, gold, orange</td><td>Matches festival's brightness and warmth</td></tr>
    <tr><td>Raksha Bandhan</td><td>Mixed bright tones</td><td>Celebratory and family-appropriate</td></tr>
    <tr><td>Congratulations</td><td>Yellow, orange, mixed</td><td>Enthusiastic, joyful, forward-looking</td></tr>
    <tr><td>Get Well Soon</td><td>Soft pinks, whites, light mixed</td><td>Calming and uplifting without being overwhelming</td></tr>
  </tbody>
</table>`,
  faqs: [
    { question: "When should I choose a mixed bouquet over a single-flower bouquet?", answer: "Choose a mixed bouquet when you are unsure of the recipient's flower preference, when the occasion is celebratory and calls for visual abundance, or when you want a gift that feels generous and colourful. Mixed works for birthdays, housewarmings, and festivals especially well." },
    { question: "Can I get mixed flower delivery same day in India?", answer: "Yes. RedHeart delivers fresh mixed flower bouquets the same day across 830+ cities in India." },
    { question: "What colour mixed bouquet should I choose for a birthday?", answer: "Vibrant mixed bouquets in reds, pinks, yellows, and oranges are the most popular birthday choice — bright, energetic, and celebratory in tone." },
  ],
},

// ── OCCASIONS ─────────────────────────────────────────────────────────────

{
  pageKey: "flowers/get-well-soon",
  categorySlug: "flowers", subcategorySlug: "get-well-soon", url: "/flowers/get-well-soon",
  h1: "Get Well Soon Flowers Delivery", defaultH1: "Get Well Soon Flowers Delivery",
  metaTitle: "Get Well Soon Flowers – Same-Day Delivery India | RedHeart",
  metaDescription: "Send get well soon flowers online with same-day delivery across 830+ cities in India. White lilies, soft mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/get-well-soon",
  metaKeyword: "get well soon flowers India, send flowers to hospital, recovery flowers online, same day get well soon flowers, white lilies get well soon",
  footerContent: `
<h2>Get Well Soon Flowers — Because Some Moments Need More Than Words</h2>
<p>When someone you care about is unwell — recovering at home, in hospital, or navigating a difficult period — a phone call or a message is the minimum. Flowers are the gesture that goes further. A fresh bouquet delivered to their room says: I thought about you specifically, I did something about it, and I want your recovery to be surrounded by beauty. RedHeart delivers get well soon flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Get Well Soon Gifting</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Works</th><th>Tone</th></tr></thead>
  <tbody>
    <tr><td>White Lilies</td><td>Calming, fragrant, long-lasting, symbolises hope</td><td>Quiet, respectful care</td></tr>
    <tr><td>Soft Pink Mixed</td><td>Warm, uplifting, not overwhelming</td><td>Cheerful without being loud</td></tr>
    <tr><td>Pastel Mixed Bouquet</td><td>Light colours create gentle, uplifting energy</td><td>Gentle and positive</td></tr>
    <tr><td>White Carnations</td><td>Long-lasting, pure, calming</td><td>Respectful and enduring</td></tr>
    <tr><td>Peace Lily Plant</td><td>Air-purifying, long-lasting, calm presence</td><td>Practical and beautiful</td></tr>
  </tbody>
</table>

<h2>What to Avoid in a Recovery Flower Gift</h2>
<p>In a hospital or sick room, heavily fragrant flowers can be overwhelming — particularly for patients on certain medications or with respiratory conditions. Avoid strongly scented varieties like tuberose, star-gazer lilies, or heavily perfumed roses in hospital settings. Opt for mildly fragrant or fragrance-free arrangements. Soft white and pastel-toned bouquets are universally appropriate and well-received.</p>
<p>A peace lily plant paired with a soft flower bouquet is one of the most thoughtful get well soon combinations — the plant actively purifies the air in the recovery room while the flowers bring immediate colour and warmth.</p>`,
  faqs: [
    { question: "Which flowers are best for a get well soon gift?", answer: "White lilies, soft pink mixed bouquets, and pastel-toned arrangements are best for get well soon gifting. White lilies convey calm, care, and hope. Avoid heavily fragrant flowers in hospital rooms." },
    { question: "Can I send flowers to a hospital in India?", answer: "Yes. RedHeart delivers to home and hospital addresses across 830+ cities in India with same-day delivery. Always check the hospital's flower policy before ordering — some ICUs or specific wards restrict flowers." },
    { question: "Is a plant better than flowers for get well soon?", answer: "A peace lily plant is an excellent get well soon gift — it is calming, long-lasting, and actively purifies the air. Pairing a peace lily with a soft flower bouquet creates a complete, caring gift." },
    { question: "Can I get get well soon flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/congratulations",
  categorySlug: "flowers", subcategorySlug: "congratulations", url: "/flowers/congratulations",
  h1: "Congratulations Flowers Delivery", defaultH1: "Congratulations Flowers Delivery",
  metaTitle: "Congratulations Flowers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send congratulations flowers online with same-day delivery across 830+ cities in India. Yellow roses, mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/congratulations",
  metaKeyword: "congratulations flowers India, send flowers for congratulations, achievement flowers online, same day congratulations flowers",
  footerContent: `
<h2>Congratulations Flowers — Celebrating Achievements in Full Colour</h2>
<p>An achievement deserves more than a message. A promotion, a new job, an exam result, a business launch, a new home — these are moments where someone worked hard and succeeded, and they deserve to feel that success acknowledged in a tangible, beautiful way. A congratulations flower bouquet does exactly that. RedHeart delivers fresh congratulations flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Congratulations Gifting</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Flower Choice</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Job promotion / new job</td><td>Yellow roses, sunflowers</td><td>Joyful, forward-looking, energetic</td></tr>
    <tr><td>Business launch</td><td>Mixed vibrant bouquet</td><td>Abundant, celebratory, makes a statement</td></tr>
    <tr><td>Exam results</td><td>Mixed bright bouquet</td><td>Celebratory and cheerful — suits the relief and joy</td></tr>
    <tr><td>New home / office</td><td>Yellow roses + money plant</td><td>Prosperity-themed — flowers and plant together</td></tr>
    <tr><td>Award or recognition</td><td>Premium mixed arrangement</td><td>Generous and visually impressive — matches the significance</td></tr>
  </tbody>
</table>

<h2>Office Congratulations — A Public Gesture</h2>
<p>Sending congratulations flowers to someone's office is one of the most impactful gifting decisions available. When flowers arrive at a workplace, the whole team sees them — the congratulations becomes public, and the achievement is acknowledged in front of colleagues. For a promotion, a business launch, or a professional milestone, an office flower delivery amplifies the congratulations in a way that a home delivery cannot. Choose yellow roses, sunflowers, or vibrant mixed arrangements — cheerful, energetic, and universally interpreted as celebratory.</p>`,
  faqs: [
    { question: "Which flowers are best for a congratulations gift?", answer: "Yellow roses and sunflowers symbolise joy and new beginnings — ideal for promotions and achievements. Mixed vibrant bouquets in bright colours convey celebration and enthusiasm for any kind of congratulations occasion." },
    { question: "Should I send congratulations flowers to the office or home?", answer: "Office delivery is often more impactful for professional congratulations — the whole team sees it and the achievement is publicly acknowledged. Home delivery is more personal and intimate." },
    { question: "Can I get congratulations flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/thank-you",
  categorySlug: "flowers", subcategorySlug: "thank-you", url: "/flowers/thank-you",
  h1: "Thank You Flowers Delivery", defaultH1: "Thank You Flowers Delivery",
  metaTitle: "Thank You Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send thank you flowers online with same-day delivery across 830+ cities in India. Carnations, mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/thank-you",
  metaKeyword: "thank you flowers India, send flowers as thank you, appreciation flowers online India, same day thank you flowers",
  footerContent: `
<h2>Thank You Flowers — When Gratitude Deserves More Than Words</h2>
<p>A "thank you" said in passing is forgotten by evening. A fresh flower bouquet delivered with a heartfelt note is remembered for years. For the colleague who covered for you, the mentor who changed your path, the friend who showed up when you needed them most — flowers communicate a level of gratitude that words alone cannot carry. RedHeart delivers fresh thank you flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Thank You Gifting</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Works for Thank You</th><th>Best Recipient</th></tr></thead>
  <tbody>
    <tr><td>Pink Carnations</td><td>Traditional flower of gratitude and appreciation</td><td>Teachers, mentors, caregivers</td></tr>
    <tr><td>Yellow Roses</td><td>Joy and friendship — warm, sincere</td><td>Friends, colleagues</td></tr>
    <tr><td>Mixed Pastel Bouquet</td><td>Warm, non-romantic, universally appreciated</td><td>Colleagues, hosts, neighbours</td></tr>
    <tr><td>Pink Roses</td><td>Warm affection and genuine care</td><td>Close friends, family</td></tr>
    <tr><td>White Lilies</td><td>Respect and deep appreciation</td><td>Formal thank you — senior colleagues, bosses</td></tr>
  </tbody>
</table>

<h2>When to Send Thank You Flowers</h2>
<p>After staying at someone's home, a thank you flower delivery the next day is a gracious and memorable gesture. For a doctor, therapist, or caregiver who made a difference during a difficult time — flowers say thank you in a way that a card cannot. For a teacher at the end of a school year — pink carnations or a mixed pastel bouquet is the traditional teacher appreciation flower choice. For a colleague who went above and beyond — a discreet bouquet sent to their office acknowledges their effort publicly.</p>`,
  faqs: [
    { question: "What flowers say thank you best?", answer: "Pink carnations are the traditional thank you flower — they symbolise genuine gratitude and appreciation. Yellow roses and mixed pastel bouquets are also popular thank you choices, warm and sincere without romantic overtones." },
    { question: "Can I send thank you flowers to a teacher?", answer: "Yes. Pink carnations and mixed pastel bouquets are the most popular teacher appreciation flowers. They are warm and appropriate for the relationship between student and teacher." },
    { question: "Can I get thank you flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/house-warming",
  categorySlug: "flowers", subcategorySlug: "house-warming", url: "/flowers/house-warming",
  h1: "House Warming Flowers Delivery", defaultH1: "House Warming Flowers Delivery",
  metaTitle: "Housewarming Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send housewarming flowers online with same-day delivery across 830+ cities in India. Fresh bouquets & plant combos from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/house-warming",
  metaKeyword: "housewarming flowers India, send flowers for housewarming, new home flowers online, same day housewarming flowers, flowers for griha pravesh",
  footerContent: `
<h2>Housewarming Flowers — Welcoming a New Beginning</h2>
<p>A new home is a new beginning — and nothing welcomes a new space like fresh flowers and a living plant. Housewarming flowers fill the new home with colour and fragrance from its very first day, setting a tone of warmth and beauty that every new home deserves. RedHeart delivers housewarming flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers and Plants for Housewarming</h2>
<table>
  <thead><tr><th>Gift</th><th>Meaning</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Mixed warm bouquet</td><td>Welcome, warmth</td><td>Vibrant, celebratory, fills the new home with colour</td></tr>
    <tr><td>Yellow roses</td><td>Joy, new beginnings</td><td>Bright and auspicious — matches a housewarming's energy</td></tr>
    <tr><td>Money plant</td><td>Prosperity, good fortune</td><td>Auspicious gift for a new home — widely appreciated in India</td></tr>
    <tr><td>Jade plant</td><td>Growth, wealth</td><td>Long-lasting, auspicious, grows with the home</td></tr>
    <tr><td>Flowers + money plant combo</td><td>Beauty and prosperity</td><td>Complete housewarming gift — immediate impact and lasting symbol</td></tr>
  </tbody>
</table>

<h2>Flowers and Plants Together for Housewarming</h2>
<p>The most complete housewarming gift combines fresh flowers with a living plant. The flowers create the immediate moment of beauty and welcome — filling the new home with colour and fragrance from day one. The plant becomes the lasting housewarming gift — a money plant or jade that grows in the new space, carrying the auspicious energy of the occasion forward for years. A combined flowers-and-plant delivery is RedHeart's most popular housewarming gift option.</p>

<h2>Griha Pravesh and Housewarming Flower Traditions</h2>
<p>Griha Pravesh — the traditional Indian housewarming ceremony — is deeply associated with floral decoration and gifting. Marigolds, roses, and mixed arrangements are used to decorate the entrance and interiors. Gifting a flower arrangement for a Griha Pravesh honours this tradition while providing a beautifully presented gift that the family can place prominently in the new home. A money plant or jade alongside the flowers adds an auspicious, prosperous element appropriate to the ceremony's intent.</p>`,
  faqs: [
    { question: "What flowers are best for a housewarming gift?", answer: "Warm mixed bouquets, yellow roses, and flowers-with-money-plant combinations are the most popular housewarming flowers. A money plant paired with a fresh bouquet is the most complete housewarming gift — beauty for the immediate moment, prosperity for the long term." },
    { question: "Is a money plant a good housewarming gift?", answer: "Yes. Money plant is India's most popular housewarming plant — associated with prosperity and good fortune. A money plant gift for a new home is auspicious, low-maintenance, and widely appreciated." },
    { question: "Can I get housewarming flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

// ── RELATIONSHIPS ─────────────────────────────────────────────────────────

{
  pageKey: "flowers/for-wife",
  categorySlug: "flowers", subcategorySlug: "for-wife", url: "/flowers/for-wife",
  h1: "Flowers for Wife Delivery", defaultH1: "Flowers for Wife Delivery",
  metaTitle: "Flowers for Wife – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for wife online with same-day & midnight delivery across 830+ cities in India. Red roses, pink bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-wife",
  metaKeyword: "flowers for wife India, send flowers to wife, roses for wife online, same day flowers for wife, anniversary flowers for wife",
  footerContent: `
<h2>Flowers for Your Wife — Because She Deserves to Feel It Every Time</h2>
<p>The most romantic things are often the most unexpected. Not the anniversary delivery she was waiting for, but the random Wednesday morning bouquet that arrived for no reason other than you wanted her to know. Flowers for a wife work on every occasion — anniversary, birthday, Valentine's Day, "I'm sorry," and "just because." RedHeart delivers fresh flowers for wives across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Best Flowers for a Wife by Occasion</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Choice</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Anniversary</td><td>24 red roses or roses-and-lily</td><td>Classic romantic statement — the more generous the better</td></tr>
    <tr><td>Birthday</td><td>Pink roses or mixed vibrant bouquet</td><td>Warm, celebratory, personal</td></tr>
    <tr><td>Valentine's Day</td><td>Red roses (midnight delivery)</td><td>The arrival at 12 AM is the gesture itself</td></tr>
    <tr><td>"Just because"</td><td>Her favourite flower or colour</td><td>The most personal and memorable choice</td></tr>
    <tr><td>"I'm sorry"</td><td>Red roses or soft mixed</td><td>Apology flowers — let the abundance speak</td></tr>
    <tr><td>Mother's Day</td><td>Pink carnations + peace lily plant</td><td>Honouring her as a mother, not just a partner</td></tr>
  </tbody>
</table>

<h2>The Midnight Delivery for Your Wife</h2>
<p>RedHeart's midnight delivery service was built for anniversary and birthday mornings that deserve to begin with a gesture. A fresh bouquet of red roses or an elaborate roses-and-lily arrangement arriving at 12 AM on her anniversary or birthday morning — before a single other event of the day — is the most romantic timing available. It sets the entire day's emotional tone and demonstrates that the occasion was in your thoughts from its very first minute. It is the gesture she will tell people about for years.</p>`,
  faqs: [
    { question: "What flowers are most romantic for a wife?", answer: "Red roses are the most romantic flowers for a wife. A dozen or 24 long-stem red roses is the classic choice. For something more elaborate, a roses-and-lily combination or a red velvet cake paired with red roses creates the most romantic combined gift." },
    { question: "Can I arrange midnight flower delivery for my wife?", answer: "Yes. RedHeart offers midnight delivery for flowers across hundreds of Indian cities — your bouquet arrives at exactly 12 AM on an anniversary or birthday morning." },
    { question: "What flower should I send my wife just because?", answer: "Her favourite flower or colour, if you know it. If not, pink roses are the safest 'just because' flower — warm, affectionate, and genuinely appreciated." },
    { question: "Can I get flowers for wife delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India. Midnight delivery is also available." },
  ],
},

{
  pageKey: "flowers/for-husband",
  categorySlug: "flowers", subcategorySlug: "for-husband", url: "/flowers/for-husband",
  h1: "Flowers for Husband Delivery", defaultH1: "Flowers for Husband Delivery",
  metaTitle: "Flowers for Husband – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for husband online with same-day delivery across 830+ cities in India. Bold bouquets, roses & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-husband",
  metaKeyword: "flowers for husband India, send flowers to husband, flowers for men India, same day flowers for husband",
  footerContent: `
<h2>Flowers for Your Husband — More Appreciated Than You Think</h2>
<p>Flowers for men are significantly more common in India than the stereotype suggests, and significantly more appreciated. A wife sending flowers to her husband's office on his birthday, or a bold mixed bouquet arriving on their anniversary morning — these gestures are memorable precisely because they break from expectation. RedHeart delivers fresh flowers for husbands across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for a Husband</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Choice</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Anniversary</td><td>Red roses or bold mixed bouquet</td><td>Romantic and impactful — the public office delivery adds extra weight</td></tr>
    <tr><td>Birthday</td><td>Bold mixed — deep reds, oranges, purples</td><td>Vibrant and masculine — not delicate or soft</td></tr>
    <tr><td>Valentine's Day</td><td>Red roses sent to his office</td><td>The public gesture at his workplace is the gift</td></tr>
    <tr><td>Congratulations</td><td>Yellow roses or sunflowers</td><td>Joyful and energetic — suits achievements</td></tr>
  </tbody>
</table>

<h2>Why Office Flower Delivery Works for Husbands</h2>
<p>Sending flowers to your husband at his office is one of the most impactful anniversary or birthday gestures available. His colleagues see them. They ask about them. He carries the acknowledgement of your thought with him all day in a visible, public way. A bold mixed arrangement or red roses arriving at his office on your anniversary morning is a romantic public statement that most men find genuinely moving — precisely because it is unexpected.</p>`,
  faqs: [
    { question: "Is it appropriate to send flowers to a husband?", answer: "Absolutely. Flowers for husbands are popular for anniversaries, birthdays, and Valentine's Day. Bold mixed bouquets and red roses are the most common choices. Office delivery is particularly impactful." },
    { question: "What flowers are best for a husband's birthday?", answer: "Bold mixed bouquets in deep reds, oranges, and purples are the most popular birthday flowers for men. Avoid delicate pastel arrangements — choose something with visual weight and vibrancy." },
    { question: "Can I get flowers for husband delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/for-mother",
  categorySlug: "flowers", subcategorySlug: "for-mother", url: "/flowers/for-mother",
  h1: "Flowers for Mother Delivery", defaultH1: "Flowers for Mother Delivery",
  metaTitle: "Flowers for Mother – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for mother online with same-day delivery across 830+ cities in India. Pink carnations, roses & bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-mother",
  metaKeyword: "flowers for mother India, send flowers to mom, pink carnations for mother, flowers for mom's birthday, same day flowers for mother",
  footerContent: `
<h2>Flowers for Your Mother — The Most Meaningful Gift for Her</h2>
<p>A mother's birthday, Mother's Day, or simply the quiet acknowledgement that she matters — flowers for your mother are among the most emotionally resonant gifts you can give. She likely does not ask for things for herself. A beautiful bouquet delivered to her door says what daily proximity sometimes prevents: I see everything you do, and I am grateful for all of it. RedHeart delivers fresh flowers for mothers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for a Mother</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Works for Mothers</th><th>Best Occasion</th></tr></thead>
  <tbody>
    <tr><td>Pink Carnations</td><td>Traditional maternal love flower, deeply meaningful</td><td>Mother's Day, birthday</td></tr>
    <tr><td>Pink Roses</td><td>Warm affection, beautiful, universally loved</td><td>Birthday, anniversary, any occasion</td></tr>
    <tr><td>Mixed Soft Bouquet</td><td>Warm, generous, visually beautiful</td><td>Birthday, festival gifting</td></tr>
    <tr><td>Peace Lily Plant + Flowers</td><td>Lasting + immediate — the complete gift</td><td>Mother's Day, milestone birthday</td></tr>
    <tr><td>White Lilies</td><td>Elegant, fragrant, deeply respectful</td><td>Formal occasions, milestone gifting</td></tr>
  </tbody>
</table>

<h2>Making Her Feel Seen</h2>
<p>The most important element of a flower gift for a mother is timing. A birthday morning delivery — flowers arriving before she has had to start the day's work — tells her that the day is about her before anything else. A Mother's Day morning bouquet sets the tone of the whole day. For a mother who lives in another city, a same-day flower delivery on her birthday is tangible evidence that the distance has not reduced what she means to you. It is presence, sent through flowers, across distance.</p>`,
  faqs: [
    { question: "Which flowers are best for a mother?", answer: "Pink carnations are the traditional flower for mothers — warm and deeply meaningful. Pink roses and soft mixed bouquets are also popular. For Mother's Day, a peace lily plant alongside flowers creates a lasting, complete gift." },
    { question: "Can I send flowers to my mother in another city?", answer: "Yes. RedHeart delivers flowers to mothers across 830+ cities in India with same-day delivery." },
    { question: "What plant is best paired with flowers for a mother?", answer: "Peace lily is the most popular Mother's Day plant — low-maintenance, beautiful white blooms, and calming presence. Paired with pink carnations or roses, it creates a complete and lasting gift." },
    { question: "Can I get flowers for mother delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/for-father",
  categorySlug: "flowers", subcategorySlug: "for-father", url: "/flowers/for-father",
  h1: "Flowers for Father Delivery", defaultH1: "Flowers for Father Delivery",
  metaTitle: "Flowers for Father – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for father online with same-day delivery across 830+ cities in India. Classic bouquets & plant combos from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-father",
  metaKeyword: "flowers for father India, send flowers to dad, Father's Day flowers India, flowers for dad's birthday, same day flowers for father",
  footerContent: `
<h2>Flowers for Your Father — Showing Appreciation in a Visible Way</h2>
<p>Fathers often receive less flowers than they deserve. A birthday bouquet or Father's Day arrangement delivered to your father — at home or at his office — is a gesture that many fathers find genuinely moving, precisely because it is unexpected. Flowers for fathers communicate appreciation, love, and acknowledgement in a way that most other gifts do not. RedHeart delivers flowers for fathers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for a Father</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Flower Choice</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Father's Day</td><td>Bold mixed bouquet or classic roses</td><td>Dignified and warm — the right tone for the occasion</td></tr>
    <tr><td>Birthday</td><td>Classic mixed arrangement — warm tones</td><td>Celebratory and generous without being delicate</td></tr>
    <tr><td>Retirement</td><td>Elegant arrangement + bonsai plant</td><td>Milestone gift — the bonsai carries long-term significance</td></tr>
    <tr><td>Congratulations</td><td>Yellow roses or mixed vibrant</td><td>Joyful and forward-looking</td></tr>
  </tbody>
</table>

<h2>Father's Day Flowers — A Growing Tradition in India</h2>
<p>Father's Day flower gifting is a growing tradition in India, mirroring the established Mother's Day flower culture. Children sending a bouquet to their father — at home or at his office — on Father's Day is increasingly common among urban Indian families. Classic mixed arrangements in warm reds and oranges, or a bold mixed bouquet, are the most appropriate Father's Day flower choices. Paired with a bonsai plant for a father who appreciates the long-term and meaningful, a Father's Day flower-and-plant combination makes a gift worthy of the day.</p>`,
  faqs: [
    { question: "Are flowers an appropriate gift for a father?", answer: "Yes. Flowers for fathers are increasingly popular in India for birthdays, Father's Day, and congratulations. Bold mixed bouquets and classic arrangements in warm tones are the most appreciated choices." },
    { question: "What plant goes well with flowers as a Father's Day gift?", answer: "A bonsai is the most meaningful Father's Day plant gift — it symbolises patience, long-term care, and growth. Paired with a bold mixed bouquet, it creates a complete and memorable Father's Day gift." },
    { question: "Can I get flowers for father delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/for-girlfriend",
  categorySlug: "flowers", subcategorySlug: "for-girlfriend", url: "/flowers/for-girlfriend",
  h1: "Flowers for Girlfriend Delivery", defaultH1: "Flowers for Girlfriend Delivery",
  metaTitle: "Flowers for Girlfriend – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for girlfriend online with same-day & midnight delivery across 830+ cities in India. Red roses, pink bouquets from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-girlfriend",
  metaKeyword: "flowers for girlfriend India, send flowers to girlfriend, roses for girlfriend, same day flowers for girlfriend, midnight flowers for girlfriend",
  footerContent: `
<h2>Flowers for Your Girlfriend — The Gesture That Never Loses Its Power</h2>
<p>Regardless of how long you have been together, a beautiful flower bouquet delivered to your girlfriend's door — or to her office — carries a romantic power that virtually nothing else can replicate. It says: I thought about you, I acted on it, and I want you to feel that. RedHeart delivers fresh flowers for girlfriends across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Best Flowers for a Girlfriend by Occasion</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Choice</th><th>Delivery Recommendation</th></tr></thead>
  <tbody>
    <tr><td>Birthday</td><td>Pink roses or vibrant mixed</td><td>Morning delivery — be the first thing of her day</td></tr>
    <tr><td>Anniversary</td><td>Red roses (12 or 24)</td><td>Midnight delivery — mark the start of the day together</td></tr>
    <tr><td>Valentine's Day</td><td>Red roses</td><td>Midnight Feb 14 — the most romantic possible timing</td></tr>
    <tr><td>"Just because"</td><td>Her favourite flower</td><td>Surprise delivery — the unexpected ones are remembered</td></tr>
    <tr><td>First date / new relationship</td><td>Pink roses</td><td>Home delivery — personal and thoughtful</td></tr>
  </tbody>
</table>

<h2>The Office Delivery for a Girlfriend</h2>
<p>Sending flowers to your girlfriend's office on her birthday, your anniversary, or Valentine's Day is one of the most romantically impactful gestures available. Her colleagues see them. She gets asked about them all day. The flowers become a visible, public confirmation of how valued she is — and that kind of public acknowledgement, in front of her professional environment, is meaningful in a way that a private delivery at home is not. The key is timing: morning delivery ensures the flowers are visible all day.</p>`,
  faqs: [
    { question: "What flowers should I send my girlfriend?", answer: "Red roses for romance, pink roses for warmth, and vibrant mixed bouquets for celebrations. For an anniversary or Valentine's Day, red roses remain the most powerful choice. For a birthday, pink roses or a mixed bouquet matches the celebratory mood." },
    { question: "Can I arrange midnight flower delivery for my girlfriend?", answer: "Yes. RedHeart offers midnight delivery — your bouquet arrives at exactly 12 AM on her birthday or Valentine's Day. It is one of the most romantic gestures available." },
    { question: "Should I send flowers to her office or home?", answer: "Office delivery on a significant day — birthday, anniversary — is a public romantic gesture that most girlfriends find very meaningful. Home delivery is more personal and intimate. Both work depending on the effect you want to create." },
    { question: "Can I get flowers for girlfriend delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India. Midnight delivery is also available." },
  ],
},

{
  pageKey: "flowers/for-boyfriend",
  categorySlug: "flowers", subcategorySlug: "for-boyfriend", url: "/flowers/for-boyfriend",
  h1: "Flowers for Boyfriend Delivery", defaultH1: "Flowers for Boyfriend Delivery",
  metaTitle: "Flowers for Boyfriend – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for boyfriend online with same-day delivery across 830+ cities in India. Bold bouquets & romantic arrangements from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-boyfriend",
  metaKeyword: "flowers for boyfriend India, send flowers to boyfriend, romantic flowers for him, same day flowers for boyfriend",
  footerContent: `
<h2>Flowers for Your Boyfriend — Breaking Expectations in the Best Way</h2>
<p>Sending flowers to a boyfriend is a growing trend in India — and a genuinely memorable gesture. Men are more moved by unexpected flowers than the stereotype suggests, and a girlfriend who sends a bold bouquet to her boyfriend's office or home stands out from every other gifting choice available. RedHeart delivers flowers for boyfriends across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for a Boyfriend</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Flower Choice</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td>Birthday</td><td>Bold mixed — deep reds, oranges, purples</td><td>Vibrant, masculine, unexpected and impactful</td></tr>
    <tr><td>Anniversary</td><td>Red roses sent to office</td><td>Public romantic statement — memorable all day</td></tr>
    <tr><td>Valentine's Day</td><td>Red roses</td><td>The classic choice — his colleagues will notice</td></tr>
    <tr><td>"I'm thinking of you"</td><td>Mixed bold bouquet</td><td>The unexpected "just because" bouquet is most memorable</td></tr>
  </tbody>
</table>

<h2>Why Bold Matters for Flowers for Him</h2>
<p>When choosing flowers for a boyfriend, choose arrangements with visual weight and strong colours — deep reds, purples, oranges, bold yellows. Avoid soft pastels and delicate arrangements that are designed for a different aesthetic. A boyfriend who receives a dramatic, bold bouquet of mixed flowers will appreciate it significantly more than a soft pink arrangement. The boldness of the gift matches the boldness of the gesture itself — breaking from expectations in a way that says you put real thought into this specific person.</p>`,
  faqs: [
    { question: "What flowers are best for a boyfriend?", answer: "Bold mixed bouquets in deep reds, oranges, and purples are the most popular flowers for boyfriends. Red roses work for romantic occasions. Avoid soft pastel arrangements — choose something with visual weight and strong colour." },
    { question: "Is sending flowers to a boyfriend unusual in India?", answer: "It is becoming more common and is always well-received. Men are moved by unexpected flower gifts. Sending a bouquet to his office on his birthday or anniversary is a particularly memorable public gesture." },
    { question: "Can I get flowers for boyfriend delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/for-friends",
  categorySlug: "flowers", subcategorySlug: "for-friends", url: "/flowers/for-friends",
  h1: "Flowers for Friends Delivery", defaultH1: "Flowers for Friends Delivery",
  metaTitle: "Flowers for Friends – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for friends online with same-day delivery across 830+ cities in India. Colourful bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-friends",
  metaKeyword: "flowers for friends India, send flowers to friend, best friend flowers online, Friendship Day flowers India, same day flowers for friends",
  footerContent: `
<h2>Flowers for Friends — Because Good Friendships Deserve to Be Celebrated</h2>
<p>Friendship is one of the most underrated occasions for flower gifting in India — and one of the most appropriate. A birthday bouquet for a best friend, a congratulations arrangement when they get a promotion, flowers when they need cheering up, Friendship Day flowers in August — flowers work for every register of friendship from celebration to comfort. RedHeart delivers fresh flowers for friends across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Friends by Occasion</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Flower Choice</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Birthday</td><td>Vibrant mixed — their favourite colour</td><td>Personal and celebratory — shows you know them</td></tr>
    <tr><td>Friendship Day</td><td>Yellow roses or mixed colourful</td><td>Yellow = friendship and joy — the traditional Friendship Day flower</td></tr>
    <tr><td>Congratulations</td><td>Sunflowers or yellow roses</td><td>Joyful, energetic, enthusiastic</td></tr>
    <tr><td>Cheer up</td><td>Bright mixed — oranges, yellows, pinks</td><td>Uplifting and warm without being romantic</td></tr>
    <tr><td>Thank you</td><td>Pink roses or mixed pastel</td><td>Warm appreciation without romantic overtones</td></tr>
  </tbody>
</table>

<h2>Friendship Day Flowers — August 4</h2>
<p>Friendship Day in India — celebrated on the first Sunday of August — is one of the most natural flower gifting occasions. Yellow roses are the traditional Friendship Day flower — symbolising joy, warmth, and the pure affection of friendship. Mixed colourful bouquets are also popular, reflecting the vibrant, diverse nature of close friendships. For a best friend in another city, a same-day Friendship Day flower delivery is one of the most touching gestures available — tangible evidence that the friendship exists across distance.</p>`,
  faqs: [
    { question: "What flowers are best for a friend's birthday?", answer: "Vibrant mixed bouquets in their favourite colour are the most personal birthday flower gift for a friend. Yellow roses and sunflowers work well for energetic, cheerful friendships. Pink roses are warm and affectionate for closer friends." },
    { question: "What flowers are sent on Friendship Day?", answer: "Yellow roses are the traditional Friendship Day flower — symbolising joy and pure friendship. Mixed colourful bouquets are also popular. Friendship Day falls on the first Sunday of August in India." },
    { question: "Can I send flowers to a friend in another city?", answer: "Yes. RedHeart delivers flowers across 830+ cities in India with same-day delivery — perfect for celebrating a friend's birthday or Friendship Day from another city." },
    { question: "Can I get flowers for friends delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

// ── FESTIVALS ─────────────────────────────────────────────────────────────

{
  pageKey: "flowers/new-year",
  categorySlug: "flowers", subcategorySlug: "new-year", url: "/flowers/new-year",
  h1: "New Year Flowers Delivery", defaultH1: "New Year Flowers Delivery",
  metaTitle: "New Year Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send New Year flowers online with same-day delivery across 830+ cities in India. Fresh bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/new-year",
  metaKeyword: "New Year flowers India, send flowers for New Year, New Year bouquet online India, same day New Year flowers",
  footerContent: `
<h2>New Year Flowers — Beginning the Year with Beauty</h2>
<p>The new year is one of the most hopeful moments in the calendar. Sending flowers to usher it in — whether to a family you are visiting, a partner you are celebrating with, or a friend you want to feel remembered at the year's first moment — is a gesture that carries the weight of intention. Fresh flowers on New Year's Day say: this year, I begin with beauty and thought. RedHeart delivers New Year flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best New Year Flower Choices</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Works for New Year</th></tr></thead>
  <tbody>
    <tr><td>Mixed vibrant bouquet</td><td>Celebratory, abundant — matches the energy of a new beginning</td></tr>
    <tr><td>Yellow roses</td><td>Joy and forward-looking optimism — exactly the New Year mood</td></tr>
    <tr><td>White lilies</td><td>Clean, fresh start — purity and new beginnings</td></tr>
    <tr><td>Mixed warm tones</td><td>Warm and festive — suits New Year gatherings</td></tr>
    <tr><td>Flowers + money plant</td><td>New Year prosperity — flowers for the moment, plant for the year</td></tr>
  </tbody>
</table>

<h2>New Year's Eve and New Year's Day Gifting</h2>
<p>New Year's Eve flower delivery — arriving at a party or home as the year turns — sets the tone for the celebration. A money plant or jade plant paired with fresh flowers as a New Year host gift is increasingly popular — the plant embodies the hope of growth and prosperity in the coming year. For New Year's Day deliveries to loved ones across India, a same-day bouquet serves as a beautiful first message of the year.</p>`,
  faqs: [
    { question: "What flowers are popular for New Year gifting in India?", answer: "Mixed vibrant bouquets, yellow roses, and white lilies are popular New Year flower choices. A flowers-and-money-plant combination is a meaningful New Year gift — flowers for the moment, prosperity for the year ahead." },
    { question: "Can I get New Year flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India, including on New Year's Day." },
    { question: "What is a good New Year host gift?", answer: "A fresh bouquet paired with a money plant or jade makes an excellent New Year host gift — beautiful, auspicious, and more distinctive than the standard sweet box." },
  ],
},

{
  pageKey: "flowers/christmas",
  categorySlug: "flowers", subcategorySlug: "christmas", url: "/flowers/christmas",
  h1: "Christmas Flowers Delivery", defaultH1: "Christmas Flowers Delivery",
  metaTitle: "Christmas Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send Christmas flowers online with same-day delivery across 830+ cities in India. Festive bouquets & arrangements from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/christmas",
  metaKeyword: "Christmas flowers India, send Christmas flowers, Christmas bouquet India, same day Christmas flowers, festive flowers India",
  footerContent: `
<h2>Christmas Flowers — Adding Warmth to the Festive Season</h2>
<p>Christmas in India is increasingly a pan-cultural celebration — celebrated with warmth, decoration, and gift-giving across communities. Fresh flowers are among the most popular Christmas gifts and hosting gestures — bringing festive colour and fragrance into homes during the holiday season. RedHeart delivers Christmas flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Christmas Flower Choices</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Works</th><th>Colour Theme</th></tr></thead>
  <tbody>
    <tr><td>Red roses</td><td>Classic festive red — Christmas colour</td><td>Deep red</td></tr>
    <tr><td>White lilies</td><td>Clean, elegant — winter and Christmas theme</td><td>White</td></tr>
    <tr><td>Mixed red and white</td><td>Classic Christmas palette — vibrant and festive</td><td>Red and white</td></tr>
    <tr><td>Mixed vibrant bouquet</td><td>Celebratory and warm for the festive season</td><td>Mixed warm</td></tr>
  </tbody>
</table>

<h2>Christmas Flowers as Gifts and Hosting Gestures</h2>
<p>A Christmas flower bouquet when visiting a family home for the holidays — arriving as a hosting gift rather than a standard sweet box — is an increasingly popular urban gifting choice. Red and white flowers in Christmas colours, or a mixed arrangement that fills the host's home with festive fragrance, is a distinctive and appreciated alternative to the standard gift. For long-distance gifting — sending flowers to a friend or family member in another city on Christmas Day — same-day delivery makes the gesture possible even on the holiday itself.</p>`,
  faqs: [
    { question: "What flowers are popular for Christmas gifting in India?", answer: "Red roses, white lilies, and mixed red-and-white arrangements are the most popular Christmas flower choices — reflecting the classic Christmas colour palette. Mixed warm bouquets work well as general festive gifts." },
    { question: "Can I get Christmas flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India, including on Christmas Day." },
    { question: "Are flowers a good Christmas host gift?", answer: "Yes. A fresh Christmas flower bouquet is a distinctive and appreciated hosting gift — more personal and memorable than a standard sweet or chocolate box." },
  ],
},

{
  pageKey: "flowers/fathers-day",
  categorySlug: "flowers", subcategorySlug: "fathers-day", url: "/flowers/fathers-day",
  h1: "Father's Day Flowers Delivery", defaultH1: "Father's Day Flowers Delivery",
  metaTitle: "Father's Day Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send Father's Day flowers online with same-day delivery across 830+ cities in India. Classic bouquets & plant combos from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/fathers-day",
  metaKeyword: "Father's Day flowers India, send flowers on Father's Day, Father's Day bouquet India, same day Father's Day flowers",
  footerContent: `
<h2>Father's Day Flowers — Celebrating the Most Underappreciated Person in Your Life</h2>
<p>Father's Day in India is celebrated on the third Sunday of June, and it is increasingly becoming a flower gifting occasion alongside Mother's Day. Sending a flower bouquet to your father — at home or at his workplace — is a gesture that most fathers find genuinely moving. RedHeart delivers Father's Day flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Father's Day</h2>
<table>
  <thead><tr><th>Choice</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Bold mixed bouquet</td><td>Dignified and vibrant — warm tones without being delicate</td></tr>
    <tr><td>Classic roses + warm mixed</td><td>Generous and celebratory</td></tr>
    <tr><td>Flowers + bonsai plant</td><td>A gift with lasting significance — the bonsai grows as he grows older</td></tr>
    <tr><td>Yellow roses</td><td>Joy and appreciation — the right emotional register for Father's Day</td></tr>
  </tbody>
</table>

<h2>A Bonsai with Flowers for Father's Day</h2>
<p>A bonsai plant paired with a Father's Day bouquet is one of the most thoughtful and distinctive Father's Day gifts available. The bonsai symbolises patience, long-term care, and quiet strength — all qualities that resonate with what fatherhood represents. A well-formed bonsai on his desk or shelf, delivered alongside a warm flower arrangement, makes a Father's Day gift he will talk about and remember for years.</p>`,
  faqs: [
    { question: "What flowers are best for Father's Day in India?", answer: "Bold mixed bouquets in warm tones, yellow roses, and flowers paired with a bonsai plant are the most popular Father's Day choices. Classic arrangements in deep reds and oranges work well for most fathers." },
    { question: "Can I get Father's Day flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
    { question: "What plant goes with Father's Day flowers?", answer: "A bonsai is the most meaningful Father's Day plant — symbolising patience and long-term care. A snake plant is a popular alternative for fathers with a modern home office." },
  ],
},

{
  pageKey: "flowers/womens-day",
  categorySlug: "flowers", subcategorySlug: "womens-day", url: "/flowers/womens-day",
  h1: "Women's Day Flowers Delivery", defaultH1: "Women's Day Flowers Delivery",
  metaTitle: "Women's Day Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send Women's Day flowers online with same-day delivery across 830+ cities in India. Pink roses, mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/womens-day",
  metaKeyword: "Women's Day flowers India, send flowers for Women's Day, March 8 flowers India, same day Women's Day flowers",
  footerContent: `
<h2>Women's Day Flowers — Celebrating the Women Who Shape Your World</h2>
<p>International Women's Day on March 8 is one of the fastest-growing flower gifting occasions in India. Sending flowers to the women in your life — mother, sister, partner, colleague, friend — is a gesture that acknowledges them beyond their daily roles. RedHeart delivers Women's Day flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Women's Day</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Fits</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Pink roses</td><td>Warm femininity and appreciation</td><td>Partner, mother, sister, friend</td></tr>
    <tr><td>Mixed vibrant bouquet</td><td>Celebratory and energetic</td><td>Any woman in your life</td></tr>
    <tr><td>Yellow roses</td><td>Joy and strength combined</td><td>Colleague, friend, mentor</td></tr>
    <tr><td>Purple flowers / mixed purple</td><td>Purple is Women's Day's official colour</td><td>Colleague, professional setting</td></tr>
  </tbody>
</table>

<h2>Corporate Women's Day Gifting</h2>
<p>Women's Day has become a significant corporate gifting occasion in India. Organisations sending flower bouquets to female employees on March 8 — at their desks or to their homes — is a growing workplace tradition. Mixed vibrant bouquets or pink rose arrangements are the most commonly chosen options for corporate Women's Day gifting. The gesture acknowledges women in the professional environment in a tangible, visible way.</p>`,
  faqs: [
    { question: "What flowers are best for Women's Day?", answer: "Pink roses, mixed vibrant bouquets, and purple flowers (purple is the official Women's Day colour) are the most popular Women's Day choices. Yellow roses work well for professional relationships." },
    { question: "Can I send Women's Day flowers to a colleague?", answer: "Yes. A tasteful pink rose bouquet or mixed vibrant arrangement is a warm and appropriate Women's Day gesture for a female colleague." },
    { question: "Can I get Women's Day flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India on March 8." },
  ],
},

// ── POPULAR COMBOS ────────────────────────────────────────────────────────

{
  pageKey: "flowers/pink-roses",
  categorySlug: "flowers", subcategorySlug: "pink-roses", url: "/flowers/pink-roses",
  h1: "Pink Roses Delivery", defaultH1: "Pink Roses Delivery",
  metaTitle: "Send Pink Roses Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh pink roses online with same-day delivery across 830+ cities in India. Pink rose bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/pink-roses",
  metaKeyword: "pink roses online India, send pink roses, pink rose bouquet India, same day pink rose delivery, buy pink roses online",
  footerContent: `
<h2>Pink Roses — The Most Versatile and Universally Loved Flower</h2>
<p>Pink roses occupy a unique place in India's gifting vocabulary. They are warm without the romantic intensity of red, celebratory without the starkness of white, and universally appropriate in a way that no other rose colour is. Pink roses work for a mother's birthday, a friend's get well soon, a colleague's farewell, a sister's anniversary, and a quiet "thinking of you" for someone who matters. RedHeart delivers fresh pink roses across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>When Pink Roses Are the Right Choice</h2>
<table>
  <thead><tr><th>Occasion</th><th>Why Pink Roses Work</th></tr></thead>
  <tbody>
    <tr><td>Mother's Day</td><td>Warm maternal affection — pink carries the right emotional register</td></tr>
    <tr><td>Birthday (women)</td><td>Universally loved, personally appropriate, visually beautiful</td></tr>
    <tr><td>New relationship</td><td>Romantic without the declarative intensity of red — thoughtful and warm</td></tr>
    <tr><td>Friendship</td><td>Warm affection without romantic connotation</td></tr>
    <tr><td>Women's Day</td><td>Celebrating femininity and warmth appropriately</td></tr>
    <tr><td>Thank you</td><td>Sincere and warm — the right note for genuine appreciation</td></tr>
  </tbody>
</table>

<h2>How Pink Roses Differ From Red</h2>
<p>The difference between red and pink roses is a difference in intensity, not in sincerity. Red roses declare romantic love loudly and unmistakably. Pink roses express genuine warmth, affection, and care — in every relationship context, not only romantic ones. For a first meeting flower gift, for a friendship, for a professional appreciation — pink is the more nuanced and often more appropriate choice. It says "you matter to me" without over-claiming the nature of the relationship.</p>`,
  faqs: [
    { question: "What do pink roses mean?", answer: "Pink roses symbolise warmth, affection, admiration, and appreciation. They carry genuine care without the romantic intensity of red, making them appropriate for a wide range of relationships — mothers, friends, colleagues, and romantic partners alike." },
    { question: "When should I choose pink roses over red?", answer: "Choose pink over red when the relationship is warm but not exclusively romantic — for a mother, sister, friend, or new relationship where red might feel too declarative. Pink is the more versatile, more nuanced choice." },
    { question: "Can I get pink roses delivered same day in India?", answer: "Yes. RedHeart delivers fresh pink roses the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/white-lilies",
  categorySlug: "flowers", subcategorySlug: "white-lilies", url: "/flowers/white-lilies",
  h1: "White Lilies Delivery", defaultH1: "White Lilies Delivery",
  metaTitle: "Send White Lilies Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh white lilies online with same-day delivery across 830+ cities in India. White lily bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/white-lilies",
  metaKeyword: "white lilies online India, send white lilies, white lily bouquet India, same day white lily delivery, buy white lilies online India",
  footerContent: `
<h2>White Lilies — Quiet Grandeur for the Occasions That Matter Most</h2>
<p>White lilies are among the most formally beautiful flowers available — large, fragrant, and deeply meaningful. They carry the weight of serious occasions with grace: weddings, sympathy, significant life milestones, and the moments where only something genuinely elegant will do. A white lily arrangement does not compete for attention — it commands it, quietly. RedHeart delivers fresh white lilies across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>White Lilies by Occasion</h2>
<table>
  <thead><tr><th>Occasion</th><th>Why White Lilies Work</th></tr></thead>
  <tbody>
    <tr><td>Wedding gift</td><td>Formal, elegant, symbolises new beginnings and purity</td></tr>
    <tr><td>Sympathy / condolence</td><td>The most appropriate sympathy flower in Indian culture</td></tr>
    <tr><td>Get well soon</td><td>Calming, hopeful, fragrant — uplifting in recovery</td></tr>
    <tr><td>New year / new beginning</td><td>White represents fresh starts and clean slates</td></tr>
    <tr><td>Corporate gift</td><td>Formal and universally appropriate — elegant without being personal</td></tr>
  </tbody>
</table>

<h2>Care Instructions for White Lilies</h2>
<p>Remove lily stamens upon arrival to prevent pollen from staining fabrics and surfaces — lily pollen is notoriously difficult to remove once it adheres. Keep in clean water in a cool location away from direct sunlight. Change water every two days and re-cut stems at a diagonal angle. White lilies that arrive with buds will open beautifully over 1–2 days, extending the display period and gradually filling the room with their distinctive fragrance.</p>`,
  faqs: [
    { question: "What occasions are white lilies best for?", answer: "White lilies are ideal for weddings, sympathy and condolence, get well soon, formal gifting, and new beginnings. They are the most formal and elegant of all gifting flowers." },
    { question: "Are white lilies appropriate for a sympathy gift?", answer: "Yes. White lilies are the most commonly sent sympathy flower in India — they convey quiet respect, care, and the dignity appropriate to condolence gifting." },
    { question: "Can I get white lilies delivered same day in India?", answer: "Yes. RedHeart delivers fresh white lily bouquets the same day across 830+ cities in India." },
  ],
},

];

async function upload() {
  console.log(`Uploading ${pages.length} flower subcategory pages...\n`);
  let ok = 0, fail = 0;
  for (const p of pages) {
    const res = await fetch(API, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(p) });
    const d = await res.json();
    if (d.success) {
      const wc = p.footerContent.replace(/<[^>]+>/g,' ').split(/\s+/).filter(Boolean).length;
      console.log(`✅ ${p.pageKey} — ~${wc}w, ${p.faqs.length} FAQs`);
      ok++;
    } else { console.log(`❌ ${p.pageKey}`); fail++; }
  }
  console.log(`\n✅ ${ok} uploaded, ❌ ${fail} failed`);
}
upload();
