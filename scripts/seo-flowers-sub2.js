const API = "https://backend.redheart.in/api/category-seo/upsert";

const pages = [

// ── HIGH-TRAFFIC OCCASION PAGES ───────────────────────────────────────────

{
  pageKey: "flowers/birthday",
  categorySlug: "flowers", subcategorySlug: "birthday", url: "/flowers/birthday",
  h1: "Birthday Flowers Delivery", defaultH1: "Birthday Flowers Delivery",
  metaTitle: "Birthday Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday flowers online with same-day & midnight delivery across 830+ cities in India. Fresh rose & mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/birthday",
  metaKeyword: "birthday flowers India, send birthday flowers online, birthday flower bouquet, same day birthday flowers, midnight birthday flower delivery",
  footerContent: `
<h2>Birthday Flowers — The Gift That Arrives With the Day</h2>
<p>There is a reason flowers remain the most gifted birthday item in India, year after year. A birthday flower bouquet arrives with colour, fragrance, and the unambiguous message that the day is being celebrated. It requires no installation, no unboxing, and no figuring out what to do with it. It is immediately beautiful. And for many people — especially those far from family — a flower delivery is the most tangible birthday acknowledgement they receive. RedHeart delivers fresh birthday flower bouquets across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Best Flowers for Every Birthday Recipient</h2>
<table>
  <thead><tr><th>Recipient</th><th>Best Birthday Flowers</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Girlfriend / Wife</td><td>Pink or red roses (12-24)</td><td>Romantic and personal — roses for her birthday signal that the day matters to you deeply</td></tr>
    <tr><td>Mother</td><td>Pink carnations or soft mixed</td><td>Warm and maternal — the most appreciated birthday flowers for a mother</td></tr>
    <tr><td>Best friend (female)</td><td>Vibrant mixed or sunflowers</td><td>Joyful and celebratory — the right tone for a best friend's birthday</td></tr>
    <tr><td>Sister</td><td>Pink roses or mixed bright</td><td>Sisterly warmth in a birthday-perfect colour</td></tr>
    <tr><td>Boyfriend / Husband</td><td>Bold mixed — deep reds, oranges</td><td>Strong colours with visual weight — works for sending to his office</td></tr>
    <tr><td>Brother / Male friend</td><td>Bold mixed or yellow roses</td><td>Celebratory without being delicate</td></tr>
    <tr><td>Colleague (female)</td><td>Tasteful mixed or pink roses</td><td>Professional and warm — office-appropriate birthday acknowledgement</td></tr>
    <tr><td>Parent (father)</td><td>Classic mixed in warm tones</td><td>Dignified and celebratory — fathers appreciate flowers more than expected</td></tr>
  </tbody>
</table>

<h2>Midnight Birthday Flower Delivery — The Most Romantic Birthday Gesture</h2>
<p>A birthday technically begins at midnight. Most people wake up to birthday messages on their phone — which is warm, but passive. A midnight flower delivery is active. It is someone deciding that this birthday should begin with something real arriving at the door. RedHeart's midnight birthday delivery service delivers fresh flower bouquets at exactly 12 AM, across hundreds of Indian cities.</p>
<p>The most popular midnight birthday combination: a bouquet of pink or red roses paired with a birthday cake — both arriving together at 12 AM. The combination creates an immediate birthday moment that photographs beautifully and sets the emotional tone for the entire day. It tells the recipient that someone was awake at midnight, thinking about them, making sure their birthday began properly.</p>

<h2>Same-Day Birthday Flowers — For the Birthday You Almost Forgot</h2>
<p>Not every birthday gift is planned weeks ahead. Some of the best ones are remembered that morning and acted on immediately. RedHeart's same-day delivery service is built for exactly this. Order before the daily cutoff and a fresh birthday bouquet — prepared that morning — will arrive at the recipient's home or office the same day. It looks entirely deliberate because it was prepared fresh for that delivery.</p>
<p>Same-day birthday flowers are particularly valuable for birthdays in other cities. Distance is not a reason to miss a birthday — it is a reason to plan a delivery instead.</p>

<h2>Birthday Flowers Paired with Cake</h2>
<p>The flowers-and-cake birthday combination is the most complete birthday gift available. Flowers deliver the visual impact and emotional warmth; cake delivers the celebration itself. Together, they constitute a genuine birthday. The most popular combinations on RedHeart: pink roses with red velvet cake (for her), mixed vibrant bouquet with chocolate truffle cake (universal), sunflowers with pineapple cake (cheerful, summer birthday). Adding a birthday card personalises the combination further — turning a beautiful gift into a specifically chosen one.</p>

<h2>Birthday Flowers for Office Delivery</h2>
<p>Sending birthday flowers to someone's office is one of the most impactful birthday gestures available. When a bouquet arrives at a person's workplace, their entire team sees it — the birthday becomes a shared acknowledgement. The recipient carries the visible evidence of being valued in their professional environment all day. For close friends, partners, or valued colleagues, a morning office birthday flower delivery is an unforgettable gesture. Choose mixed vibrant or pink roses for female colleagues; bold mixed or yellow roses for male colleagues.</p>`,
  faqs: [
    { question: "What are the most popular birthday flowers in India?", answer: "Pink roses, mixed vibrant bouquets, and red roses are the most popular birthday flowers in India. Sunflowers and yellow roses are popular for friends and colleagues. Pink carnations are most appropriate for a mother's birthday." },
    { question: "Can I arrange midnight birthday flower delivery in India?", answer: "Yes. RedHeart offers midnight delivery — your bouquet and cake arrive at exactly 12 AM on the birthday. Available across hundreds of Indian cities." },
    { question: "What flower pairs best with a birthday cake?", answer: "Pink roses with red velvet cake is the most popular romantic birthday combination. Mixed vibrant bouquet with chocolate truffle is the best universal birthday pairing. Sunflowers with pineapple cake is a cheerful summer birthday option." },
    { question: "Can I send birthday flowers to another city same day?", answer: "Yes. RedHeart delivers birthday flowers the same day across 830+ cities in India. Order before the daily cutoff for same-day delivery." },
    { question: "What birthday flowers are appropriate for a colleague?", answer: "Tasteful mixed arrangements or pink roses are the most appropriate birthday flowers for female colleagues. Yellow roses or bold mixed arrangements work for male colleagues. Avoid intensely romantic choices like red roses for professional relationships." },
  ],
},

{
  pageKey: "flowers/anniversary",
  categorySlug: "flowers", subcategorySlug: "anniversary", url: "/flowers/anniversary",
  h1: "Anniversary Flowers Delivery", defaultH1: "Anniversary Flowers Delivery",
  metaTitle: "Anniversary Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send anniversary flowers online with same-day & midnight delivery across 830+ cities in India. Red roses, roses & lily from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/anniversary",
  metaKeyword: "anniversary flowers India, send anniversary flowers online, red roses for anniversary, anniversary flower bouquet, midnight anniversary delivery",
  footerContent: `
<h2>Anniversary Flowers — Because Every Year Together Deserves to Be Marked</h2>
<p>An anniversary is different from every other occasion in one important way: it belongs only to two people. It is the private landmark of a specific relationship — the day you both chose each other and have continued choosing each other every year since. Anniversary flowers should reflect that specificity. Not generic gifting, but a deliberate choice: the right flower, the right quantity, the right combination, delivered at the right moment. RedHeart delivers fresh anniversary flowers across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Anniversary Flowers by Year and Milestone</h2>
<table>
  <thead><tr><th>Anniversary Year</th><th>Best Flower Choice</th><th>Traditional Flower</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>1st — Paper</td><td>12 red roses</td><td>Rose (love's beginning)</td><td>The classic first anniversary statement</td></tr>
    <tr><td>5th — Wood</td><td>Mixed roses + lilies</td><td>Daisy / mixed</td><td>More elaborate than the first year — reflects growth</td></tr>
    <tr><td>10th — Tin/Aluminium</td><td>24 red roses</td><td>Daffodil</td><td>A decade calls for a grander gesture</td></tr>
    <tr><td>15th — Crystal</td><td>Roses and lily + premium arrangement</td><td>Rose</td><td>Crystal clarity — elaborate and refined</td></tr>
    <tr><td>25th — Silver</td><td>White roses or white lilies</td><td>Iris</td><td>Silver purity — white flowers match the occasion's tone</td></tr>
    <tr><td>50th — Gold</td><td>Yellow roses + white lilies</td><td>Yellow violets</td><td>Gold-toned arrangement for a golden milestone</td></tr>
  </tbody>
</table>

<h2>The Most Romantic Anniversary Flower Choices</h2>
<p><strong>Classic red roses</strong> are the foundation of anniversary flower gifting. A dozen long-stem red roses communicates deep romantic love as clearly and powerfully as any gesture in the gifting vocabulary. For a first anniversary, it establishes the standard. For a tenth, it demonstrates consistency. For the 25th, it says: I would choose these flowers, for you, on every single anniversary.</p>
<p><strong>Roses and lily</strong> is the premium anniversary option. The combination of roses — intimate and romantic — with lilies — elegant and fragrant — creates an arrangement that is more visually complex, more fragrant, and more impressive than either flower alone. For milestone anniversaries, a large roses-and-lily arrangement in red and white makes a statement worthy of the occasion.</p>
<p><strong>Just for her flowers</strong> — if you know her favourite flower or colour, an anniversary bouquet built around that knowledge is the most personal option of all. It says: I know you. I remembered. I chose this for you, specifically.</p>

<h2>Midnight Anniversary Flower Delivery</h2>
<p>The midnight anniversary delivery is the most romantic timing available. A fresh bouquet arriving at exactly 12 AM on the anniversary morning — paired with a cake — is the gesture that tells your partner the day was in your thoughts from its very first moment. Not just a morning delivery. The very beginning of the day, when the anniversary starts, marked with roses and a cake and the clear intention of someone who planned this carefully. RedHeart's midnight delivery is available across hundreds of Indian cities for exactly this purpose.</p>

<h2>Anniversary Flowers Paired with Cake</h2>
<p>The most romantic anniversary gift combination: red roses (or roses and lily) with a red velvet cake. The deep crimson of the roses and the rich red velvet cake create a visual and emotional coherence — both luxurious, both romantic, both appropriate to the occasion. For midnight delivery, this combination arrives at the very start of the anniversary morning, creating the most romantic possible beginning to the day.</p>`,
  faqs: [
    { question: "What flowers are most appropriate for an anniversary?", answer: "Red roses are the most romantic and traditional anniversary flower choice. A roses-and-lily combination is the premium anniversary option — more elaborate and visually striking than roses alone. White lilies and white roses suit 25th and 50th anniversary milestones." },
    { question: "How many roses should I send for an anniversary?", answer: "12 is the classic anniversary bouquet. 24 makes a grander statement for milestone anniversaries. The number of years together is a meaningful personal choice — matching your anniversary year to the number of roses is a thoughtful detail that most recipients notice." },
    { question: "Can I arrange midnight anniversary flower delivery in India?", answer: "Yes. RedHeart offers midnight delivery — your bouquet arrives at exactly 12 AM on the anniversary morning. Pairing midnight flowers with a cake creates the most romantic anniversary beginning possible." },
    { question: "What is the best anniversary flowers and cake combination?", answer: "Red roses with red velvet cake is the most popular and romantic anniversary flowers-and-cake combination. Roses-and-lily with a chocolate truffle cake is the premium alternative." },
    { question: "Can I send anniversary flowers to another city?", answer: "Yes. RedHeart delivers anniversary flowers the same day across 830+ cities in India. Midnight delivery is also available for surprise anniversary gestures." },
  ],
},

{
  pageKey: "flowers/valentines-day",
  categorySlug: "flowers", subcategorySlug: "valentines-day", url: "/flowers/valentines-day",
  h1: "Valentine's Day Flowers Delivery", defaultH1: "Valentine's Day Flowers Delivery",
  metaTitle: "Valentine's Day Flowers – Midnight Delivery India | RedHeart",
  metaDescription: "Send Valentine's Day flowers online with midnight & same-day delivery across 830+ cities in India. Red roses from ₹399. Book early. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/valentines-day",
  metaKeyword: "Valentine's Day flowers India, send roses on Valentine's Day, red roses Valentine's Day delivery, midnight Valentine's Day flowers India",
  footerContent: `
<h2>Valentine's Day Flowers — The One Day Red Roses Were Made For</h2>
<p>Valentine's Day is the single largest flower gifting occasion in India. More red roses are ordered and delivered on February 14 than any other item, on any other day, in the entire Indian gifting industry. There is a reason: red roses on Valentine's Day are the most universally understood, most romantically powerful gift available. They do not need a card to explain them. They do not need context. They arrive and immediately communicate everything they need to. RedHeart delivers Valentine's Day flowers across 830+ cities in India with midnight and same-day delivery, starting at ₹399.</p>

<h2>Valentine's Week Flowers — Day by Day</h2>
<table>
  <thead><tr><th>Day</th><th>Date</th><th>Best Flower Gift</th></tr></thead>
  <tbody>
    <tr><td>Rose Day</td><td>February 7</td><td>Single red rose or small rose bouquet — the opening gesture of Valentine's Week</td></tr>
    <tr><td>Propose Day</td><td>February 8</td><td>Red roses — classic romantic statement for a proposal</td></tr>
    <tr><td>Chocolate Day</td><td>February 9</td><td>Pink roses + Ferrero Rocher — the sweet combination</td></tr>
    <tr><td>Teddy Day</td><td>February 10</td><td>Pink roses alongside the teddy — soft and romantic</td></tr>
    <tr><td>Promise Day</td><td>February 11</td><td>White roses — purity and commitment</td></tr>
    <tr><td>Hug Day</td><td>February 12</td><td>Roses and lily — the warm, fragrant hug in flower form</td></tr>
    <tr><td>Kiss Day</td><td>February 13</td><td>Red roses — the romantic crescendo before Valentine's Day</td></tr>
    <tr><td>Valentine's Day</td><td>February 14</td><td>24 red roses + red velvet cake (midnight delivery) — the complete Valentine's statement</td></tr>
  </tbody>
</table>

<h2>The Valentine's Day Midnight Delivery</h2>
<p>The most romantic Valentine's Day gesture available is the midnight delivery. Your bouquet arrives at exactly 12 AM on February 14 — the very first moment of Valentine's Day, before any other message, before any other gesture. When someone wakes up to find red roses and a cake waiting at their door at midnight, the day begins with the clear evidence that they were in your thoughts from its very first second. This is the Valentine's Day delivery that people talk about for years.</p>
<p>Book your midnight Valentine's Day delivery early — RedHeart's midnight slots fill weeks in advance for February 14. Order before February 7 to guarantee the midnight delivery window.</p>

<h2>Valentine's Day Flowers for Every Relationship Stage</h2>
<p><strong>New relationship</strong> — pink roses are the thoughtful Valentine's choice for a newer relationship. They are warm and romantic without the declarative intensity of red, which can feel too strong early in a relationship. 6-9 pink roses is the perfect "I like you, this matters to me" Valentine's gesture.</p>
<p><strong>Established relationship / long-term partner</strong> — red roses, every time. The number matters: 12 for a standard Valentine's, 24 for a milestone or grand gesture, the number of years together for something uniquely personal. Paired with a red velvet cake for midnight delivery, this is the Valentine's Day gift.</p>
<p><strong>Long-distance relationship</strong> — Valentine's Day is made for long-distance gifting. A midnight flower delivery to your partner in another city, arriving at 12 AM on February 14, is the most powerful long-distance Valentine's gesture available. You are not there in person, but the flowers are — and they say everything they need to.</p>`,
  faqs: [
    { question: "When should I order Valentine's Day flowers to ensure midnight delivery?", answer: "Order at least 7–10 days before February 14 to guarantee midnight delivery slots. RedHeart's midnight slots fill up weeks in advance for Valentine's Day. Booking by February 7 is recommended." },
    { question: "What is the best Valentine's Day flower and gift combination?", answer: "24 red roses with a red velvet cake, delivered at midnight on February 14, is the most popular and romantic Valentine's Day combination on RedHeart." },
    { question: "Can I send Valentine's Day flowers to another city?", answer: "Yes. RedHeart delivers Valentine's Day flowers across 830+ cities in India with midnight and same-day delivery — making long-distance Valentine's gifting possible." },
    { question: "What flowers are appropriate for a new relationship on Valentine's Day?", answer: "Pink roses are the most appropriate Valentine's flowers for a newer relationship — warm and romantic without the declarative intensity of red roses, which can feel too strong early on." },
    { question: "What flowers are sent on Rose Day (February 7)?", answer: "A single red rose or a small rose bouquet is the classic Rose Day gift — the opening gesture of Valentine's Week. It signals what is coming on February 14." },
  ],
},

{
  pageKey: "flowers/mothers-day",
  categorySlug: "flowers", subcategorySlug: "mothers-day", url: "/flowers/mothers-day",
  h1: "Mother's Day Flowers Delivery", defaultH1: "Mother's Day Flowers Delivery",
  metaTitle: "Mother's Day Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send Mother's Day flowers online with same-day delivery across 830+ cities in India. Pink carnations, roses & plants from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/mothers-day",
  metaKeyword: "Mother's Day flowers India, send flowers on Mother's Day, pink carnations Mother's Day, Mother's Day bouquet online, same day Mother's Day flowers India",
  footerContent: `
<h2>Mother's Day Flowers — Honouring the Person Who Made Everything Possible</h2>
<p>Mother's Day falls on the second Sunday of May. It is one of the most emotionally significant gifting occasions in India — and for many people, the one they feel most pressure to get right. The difficulty is not the effort — it is finding something that matches the weight of what a mother actually represents. Flowers come closer than most things to doing that. Not because they are expensive, but because they require a specific act: stopping to think about her, choosing something for her specifically, and making sure it arrives at the right moment. RedHeart delivers Mother's Day flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Mother's Day</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It's Perfect for Mother's Day</th><th>Best Presentation</th></tr></thead>
  <tbody>
    <tr><td>Pink Carnations</td><td>The traditional Mother's Day flower worldwide — warm maternal love</td><td>Large bunch of 20+ carnations, elegantly wrapped</td></tr>
    <tr><td>Pink Roses</td><td>Warm affection and beauty — universally loved by mothers</td><td>12-24 pink roses, classic bouquet</td></tr>
    <tr><td>White Lilies</td><td>Elegant, fragrant, respectful — deeply appropriate for a mother</td><td>Mixed with soft pinks for warmth</td></tr>
    <tr><td>Mixed Soft Bouquet</td><td>Warm, abundant, generous — feels like a full celebration</td><td>Mixed pinks, whites, and soft purples</td></tr>
    <tr><td>Peace Lily Plant</td><td>Long-lasting, low-maintenance, calming — a gift that lives in her home</td><td>Alongside a flower bouquet for a complete gift</td></tr>
  </tbody>
</table>

<h2>The Flowers-and-Plant Mother's Day Combination</h2>
<p>The most complete Mother's Day gift on RedHeart combines a fresh flower bouquet with a living plant. The flowers create the immediate emotional impact — colour, fragrance, beauty that fills her home the moment they arrive. The plant becomes the lasting Mother's Day reminder — a peace lily that blooms on her windowsill, that she will water and care for, that will be in her home long after the occasion itself has passed. Every time she tends to it, she will think of you. That is a different kind of gift from the standard bouquet — one that keeps giving through the year.</p>
<p>The most popular Mother's Day combination on RedHeart: pink carnations or roses + peace lily plant. The carnations say "I remembered the tradition." The peace lily says "I want something beautiful to remain."</p>

<h2>Sending Mother's Day Flowers Across Distance</h2>
<p>One of the most meaningful applications of Mother's Day flower delivery is the cross-city gesture. A child who has moved away from their hometown sending a fresh flower bouquet to their mother's door on Mother's Day morning — that is tangible evidence that the distance has not diminished the relationship. It is presence, sent through flowers. For mothers who are used to getting phone calls on Mother's Day, a flower delivery that arrives before the call reframes the entire day.</p>

<h2>Mother's Day Timing — Morning Delivery Matters</h2>
<p>For Mother's Day, timing is everything. A morning delivery — flowers arriving before the day is half over — tells your mother that Mother's Day was your first thought of the day. An afternoon delivery is still beautiful. An evening delivery is appreciated. But a morning delivery, ideally before 10 AM, is the one that makes the most impact. RedHeart's same-day delivery includes morning time slots for Mother's Day, across hundreds of Indian cities.</p>`,
  faqs: [
    { question: "What flowers are traditionally given on Mother's Day?", answer: "Pink carnations are the traditional Mother's Day flower worldwide — they symbolise maternal love and gratitude. Pink roses are equally popular. A combination of pink carnations with a peace lily plant is the most complete Mother's Day gift." },
    { question: "Can I send Mother's Day flowers to my mother in another city?", answer: "Yes. RedHeart delivers Mother's Day flowers the same day across 830+ cities in India — making Mother's Day delivery possible anywhere in the country, including smaller cities and towns." },
    { question: "What is the best Mother's Day gift combination?", answer: "Pink carnations or roses paired with a peace lily plant is the most popular Mother's Day combination on RedHeart. The flowers create the immediate impact; the plant becomes a lasting reminder of the occasion." },
    { question: "When is Mother's Day in India?", answer: "Mother's Day in India falls on the second Sunday of May each year — the same date as in the UK, US, and most of the world." },
    { question: "Should I add a cake to Mother's Day flowers?", answer: "A cake adds celebration to the flower gift — especially if your mother's birthday falls near Mother's Day. The most popular Mother's Day flowers-and-cake combination is pink roses with a butterscotch or pineapple cake." },
  ],
},

{
  pageKey: "flowers/for-her",
  categorySlug: "flowers", subcategorySlug: "for-her", url: "/flowers/for-her",
  h1: "Flowers for Her Delivery", defaultH1: "Flowers for Her Delivery",
  metaTitle: "Flowers for Her – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for her online with same-day & midnight delivery across 830+ cities in India. Roses, pink bouquets & mixed flowers from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-her",
  metaKeyword: "flowers for her India, send flowers to her, flowers for girlfriend online, flowers for women India, same day flowers for her",
  footerContent: `
<h2>Flowers for Her — Every Woman Deserves to Feel Seen</h2>
<p>Flowers for her work on every occasion and in every relationship. A birthday bouquet for a sister. Valentine's Day roses for a partner. Mother's Day carnations for a mother. A get well soon arrangement for a friend. A congratulations bouquet for a colleague who got the promotion. In every case, the flower bouquet communicates the same core message: you matter enough for me to have done this. RedHeart delivers fresh flowers for her across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Flowers for Her — The Best Choice by Relationship</h2>
<table>
  <thead><tr><th>Relationship</th><th>Best Flower Choice</th><th>Occasion</th></tr></thead>
  <tbody>
    <tr><td>Girlfriend / Partner</td><td>Red roses (romantic), pink roses (warm)</td><td>Anniversary, Valentine's, birthday, "just because"</td></tr>
    <tr><td>Wife</td><td>Red roses (anniversary), pink roses (birthday)</td><td>Anniversary, birthday, special moments</td></tr>
    <tr><td>Mother</td><td>Pink carnations, soft mixed, peace lily</td><td>Mother's Day, birthday, any occasion</td></tr>
    <tr><td>Sister</td><td>Mixed bright, pink roses</td><td>Birthday, Raksha Bandhan, Women's Day</td></tr>
    <tr><td>Best friend</td><td>Vibrant mixed, yellow roses</td><td>Birthday, Friendship Day, congratulations</td></tr>
    <tr><td>Female colleague</td><td>Tasteful mixed, pink roses</td><td>Birthday, Women's Day, farewell, thank you</td></tr>
    <tr><td>Grandmother</td><td>Classic mixed or white lilies</td><td>Birthday, festivals, appreciation</td></tr>
  </tbody>
</table>

<h2>The Psychology of Gifting Flowers to Women</h2>
<p>Research consistently shows that receiving flowers creates measurable improvements in mood, reduces stress, and increases feelings of being valued and remembered. For women who are caregivers — mothers, partners, sisters who are always giving — a flower delivery reverses the direction: suddenly, she is being taken care of. She is being seen. That reversal is emotionally powerful in a way that other gifts often are not.</p>
<p>The unexpectedness matters too. A birthday flower delivery is appreciated. A Tuesday flower delivery "for no reason" is remembered. The "just because" flower delivery for her is the most romantic and the most personally meaningful gesture available — precisely because it requires no occasion to justify it. It says: I was thinking of you, and I wanted you to know.</p>

<h2>Flowers for Her — Indian Festival Occasions</h2>
<p><strong>Valentine's Day</strong> — February 14 is the peak occasion for flowers for her. Red roses dominate. Start with Rose Day (February 7) — a single red rose or small bouquet that opens Valentine's Week with intention.</p>
<p><strong>Mother's Day</strong> — second Sunday of May. Pink carnations and peace lily plants are the peak Mother's Day flower gifts.</p>
<p><strong>Women's Day</strong> — March 8. Mixed vibrant bouquets, pink roses, and purple flowers for the women in your professional and personal life.</p>
<p><strong>Raksha Bandhan</strong> — brothers gifting sisters pink roses or mixed bouquets alongside the traditional Rakhi and gift is a warm, increasingly popular tradition.</p>`,
  faqs: [
    { question: "What flowers are most appreciated by women?", answer: "Pink roses and mixed vibrant bouquets are the most universally appreciated flowers for women. Red roses are the most romantic choice. Pink carnations are most appropriate for mothers. Yellow roses and mixed bouquets work for friends and colleagues." },
    { question: "What is the best 'just because' flower for her?", answer: "Her favourite flower, if you know it — that is the most personal choice. If not, pink roses are the safest and most appreciated 'just because' flower. A surprise delivery without an occasion is the most romantically memorable gesture available." },
    { question: "Can I get flowers for her delivered same day in India?", answer: "Yes. RedHeart delivers flowers for her the same day across 830+ cities in India. Midnight delivery is also available for romantic occasions." },
    { question: "What flower should I send a female colleague?", answer: "Tasteful mixed bouquets, pink roses, or yellow roses are the most appropriate flower choices for a female colleague — warm and appropriate without being romantic." },
    { question: "What flowers work best for Raksha Bandhan gifting from a brother?", answer: "Pink roses or mixed bright bouquets are warm and appropriate for a brother gifting his sister on Raksha Bandhan. They are celebratory and family-appropriate without romantic undertones." },
  ],
},

{
  pageKey: "flowers/for-him",
  categorySlug: "flowers", subcategorySlug: "for-him", url: "/flowers/for-him",
  h1: "Flowers for Him Delivery", defaultH1: "Flowers for Him Delivery",
  metaTitle: "Flowers for Him – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for him online with same-day delivery across 830+ cities in India. Bold bouquets, roses & plants for men from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/for-him",
  metaKeyword: "flowers for him India, send flowers to him, flowers for men India, same day flowers for men, flowers for boyfriend India",
  footerContent: `
<h2>Flowers for Him — More Appreciated Than the Stereotype Suggests</h2>
<p>The idea that men don't like flowers is a cultural habit, not a truth. Ask any man who has received a flower bouquet — whether from a partner, a mother, or a friend — and the reaction is almost universally one of genuine pleasure and surprise. The surprise itself is part of what makes it powerful: flowers for him break an expectation, and gestures that break expectations are the ones that are remembered. RedHeart delivers flowers for him across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>What Flowers Work Best for Men</h2>
<table>
  <thead><tr><th>Flower Choice</th><th>Why It Works for Him</th><th>Best Occasion</th></tr></thead>
  <tbody>
    <tr><td>Bold mixed — deep reds, purples, oranges</td><td>Visual weight and strong colours suit a masculine aesthetic</td><td>Birthday, anniversary, congratulations</td></tr>
    <tr><td>Red roses</td><td>Classic romantic statement — powerful for office delivery</td><td>Valentine's Day, anniversary</td></tr>
    <tr><td>Yellow roses / sunflowers</td><td>Joyful and forward-looking — suits achievements</td><td>Congratulations, birthday, promotion</td></tr>
    <tr><td>Classic mixed warm tones</td><td>Dignified and celebratory — appropriate for fathers and senior men</td><td>Father's Day, birthday, farewell</td></tr>
    <tr><td>Snake plant / bonsai</td><td>Long-lasting, architectural, low-maintenance — the plant for him</td><td>Milestone birthday, Father's Day, retirement</td></tr>
  </tbody>
</table>

<h2>The Office Delivery — The Most Impactful Gesture for Him</h2>
<p>If you want to make the most impact with flowers for him, send them to his office. A bouquet arriving at his workplace — especially on his birthday, your anniversary, or Valentine's Day — is a public romantic or affectionate statement. His colleagues see it. They ask about it. He carries the visible acknowledgement of being valued in his professional environment all day. That public element makes the gesture significantly more memorable than a home delivery, which is private and seen only by him.</p>
<p>The most impactful office delivery for men: bold mixed bouquet or red roses, arriving in the morning, on a day that matters. The flowers should look generous and visually strong — not delicate or pastel-toned. Choose deep reds, oranges, and purples for maximum visual impact in a professional setting.</p>

<h2>Plants as Flowers for Him</h2>
<p>For men who might not have a strong affinity for cut flowers, a plant is the perfect alternative. A snake plant is architectural, requires almost no maintenance, and looks excellent on a desk or in a corner of a home office. A bonsai is a premium milestone gift for a father, a boss who is retiring, or a partner at a significant anniversary. A money plant is auspicious and easy-care — appropriate for a new business partner or at Diwali. Plants for him carry the intention and care of a flower gift in a format that suits his space and preferences.</p>`,
  faqs: [
    { question: "Do men appreciate receiving flowers?", answer: "Yes. Men appreciate flowers more than the stereotype suggests. The surprise element — breaking the expectation that flowers are 'for women' — makes the gesture particularly memorable. Bold mixed bouquets and office deliveries are the most impactful choices." },
    { question: "What flowers should I send my boyfriend or husband?", answer: "Bold mixed bouquets in deep reds, oranges, and purples work well for birthdays and anniversaries. Red roses are the most powerful romantic statement for Valentine's Day. Send to his office for maximum impact." },
    { question: "What is a good alternative to flowers for a man?", answer: "A snake plant, bonsai, or money plant is an excellent alternative to cut flowers for men. Plants are long-lasting, architectural, and carry the same intention and care as a flower gift." },
    { question: "Can I get flowers for him delivered same day in India?", answer: "Yes. RedHeart delivers flowers for him the same day across 830+ cities in India." },
    { question: "What flowers are best for a father's birthday?", answer: "Classic mixed bouquets in warm tones — deep reds, oranges, and yellows — are the most appropriate birthday flowers for a father. A bonsai paired with a mixed bouquet makes a more complete milestone birthday gift." },
  ],
},

// ── REMAINING OCCASION PAGES ─────────────────────────────────────────────

{
  pageKey: "flowers/wedding",
  categorySlug: "flowers", subcategorySlug: "wedding", url: "/flowers/wedding",
  h1: "Wedding Flowers Delivery", defaultH1: "Wedding Flowers Delivery",
  metaTitle: "Wedding Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send wedding flowers online with same-day delivery across 830+ cities in India. White lilies, roses & premium arrangements from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/wedding",
  metaKeyword: "wedding flowers India, send flowers for wedding, wedding gift flowers online, white lilies wedding India, same day wedding flowers",
  footerContent: `
<h2>Wedding Flowers — The Most Elegant Occasion for the Most Elegant Gift</h2>
<p>A wedding is among the most significant days in a person's life. The gift you bring — or the flowers you send — should reflect that significance. Fresh flower arrangements for a wedding communicate elegance, thoughtfulness, and genuine celebration. They fill the space with beauty and fragrance, and they photograph beautifully alongside the wedding décor. RedHeart delivers wedding flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Wedding Gifts</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Works</th><th>Tone</th></tr></thead>
  <tbody>
    <tr><td>White Lilies</td><td>Formal, fragrant, elegant — symbolises new beginnings and purity</td><td>Classic and refined</td></tr>
    <tr><td>White Roses</td><td>Pure and romantic — the traditional wedding flower</td><td>Romantic elegance</td></tr>
    <tr><td>Mixed Whites</td><td>Formal, inclusive, appropriate for all wedding décor</td><td>Universally elegant</td></tr>
    <tr><td>Roses and Lily</td><td>Premium arrangement — the couple's combination in one bouquet</td><td>Celebratory and premium</td></tr>
    <tr><td>Pink and White Mixed</td><td>Warm celebration — feminine without being intense</td><td>Warm and joyful</td></tr>
  </tbody>
</table>

<h2>Flower Gifting Before and After the Wedding</h2>
<p>Wedding flowers are not just for the wedding day. Pre-wedding flowers sent to the couple's home the day before — a white lily arrangement or roses-and-lily — are a beautiful way to mark the occasion before the ceremony. Post-wedding flowers delivered after the ceremony, when the couple returns to their home or hotel, create a private moment of beauty after the public celebration. For destination weddings, a flower arrangement pre-arranged at the venue or hotel adds a personal touch that most wedding gifts cannot.</p>`,
  faqs: [
    { question: "What flowers are best for a wedding gift?", answer: "White lilies, white roses, and mixed white arrangements are the most elegant and appropriate wedding gift flowers. They suit all wedding colour schemes and carry the formal, respectful tone appropriate to the occasion." },
    { question: "Can I send flowers to a wedding venue or hotel?", answer: "Yes. RedHeart delivers to venues, hotels, and homes across 830+ cities in India. Coordinate the delivery time with the venue to ensure flowers arrive at the right moment." },
    { question: "Can I get wedding flowers delivered same day?", answer: "Yes. RedHeart delivers wedding flowers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/love-and-romance",
  categorySlug: "flowers", subcategorySlug: "love-and-romance", url: "/flowers/love-and-romance",
  h1: "Romantic Flowers Delivery", defaultH1: "Romantic Flowers Delivery",
  metaTitle: "Romantic Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send romantic flowers online with same-day & midnight delivery across 830+ cities in India. Red roses, pink bouquets from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/love-and-romance",
  metaKeyword: "romantic flowers India, love flowers online, send romantic roses India, same day romantic flowers, flowers for love India",
  footerContent: `
<h2>Romantic Flowers — When You Want to Say It Without Words</h2>
<p>Some feelings are better communicated by action than by words. A fresh bouquet of red roses delivered to your partner at work, or a midnight flower arrangement arriving at exactly the start of an anniversary, says more about how you feel than any message can. Romantic flowers do not require an occasion — they create one. RedHeart delivers romantic flowers across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>The Most Romantic Flower Choices</h2>
<table>
  <thead><tr><th>Flower</th><th>Romantic Message</th><th>Best Moment</th></tr></thead>
  <tbody>
    <tr><td>Red roses (24)</td><td>Deep, declared love — the grandest romantic statement</td><td>Anniversary, Valentine's, significant milestone</td></tr>
    <tr><td>Red roses (12)</td><td>Classic romantic love — clear, powerful, timeless</td><td>Any romantic occasion</td></tr>
    <tr><td>Roses and lily</td><td>Romance with elegance — more elaborate, more premium</td><td>Anniversary, special occasion</td></tr>
    <tr><td>Single red rose</td><td>Intimate, deliberate, most personal romantic choice</td><td>"Just because," new relationship</td></tr>
    <tr><td>Pink roses</td><td>Warm romance — thoughtful and personal</td><td>New relationship, soft romantic gesture</td></tr>
  </tbody>
</table>

<h2>The "Just Because" Romantic Delivery</h2>
<p>The most romantically powerful flower delivery is the one that requires no occasion. A random weekday — not an anniversary, not a birthday, not a festival — where flowers simply arrive because you were thinking of someone. The unexpectedness is what makes it remarkable. It tells your partner: you are not just in my thoughts on the calendar days. You are there all the time.</p>`,
  faqs: [
    { question: "What are the most romantic flowers to send in India?", answer: "Red roses are the most universally romantic flower choice. 24 red roses make the grandest romantic statement. A single red rose is the most intimate and personal. Roses-and-lily is the premium romantic combination." },
    { question: "Can I arrange a surprise midnight romantic flower delivery?", answer: "Yes. RedHeart offers midnight delivery across hundreds of Indian cities — perfect for surprising a partner at the very start of their anniversary or birthday." },
    { question: "Can I get romantic flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India. Midnight delivery is also available." },
  ],
},

{
  pageKey: "flowers/new-born-baby",
  categorySlug: "flowers", subcategorySlug: "new-born-baby", url: "/flowers/new-born-baby",
  h1: "New Born Baby Flowers Delivery", defaultH1: "New Born Baby Flowers Delivery",
  metaTitle: "New Born Baby Flowers – Same-Day Delivery India | RedHeart",
  metaDescription: "Send flowers for new born baby online with same-day delivery across 830+ cities in India. Soft pink, white bouquets from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/new-born-baby",
  metaKeyword: "new born baby flowers India, flowers for new baby India, send flowers for baby shower, same day newborn flowers India",
  footerContent: `
<h2>New Born Baby Flowers — Welcoming the Newest Person</h2>
<p>The birth of a baby is one of the most joyful moments a family experiences. Sending flowers to the new parents is a beautiful way to acknowledge that joy — to fill the home or hospital room with colour and warmth at the very start of their child's life. RedHeart delivers new born baby flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for New Born Baby</h2>
<table>
  <thead><tr><th>Baby</th><th>Best Flower Choice</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Baby girl</td><td>Soft pink mixed, pink roses, pink lilies</td><td>Gentle pink tones — celebratory and feminine</td></tr>
    <tr><td>Baby boy</td><td>White and blue mixed, white lilies</td><td>Fresh and pure — appropriate for a new beginning</td></tr>
    <tr><td>Unspecified / surprise</td><td>Soft white and yellow mixed</td><td>Neutral, warm, universally appropriate</td></tr>
    <tr><td>Twins</td><td>Double arrangement in matching colours</td><td>Two of everything — reflects the occasion's abundance</td></tr>
  </tbody>
</table>

<h2>Note on Hospital Deliveries</h2>
<p>If delivering to a hospital maternity ward, choose mildly fragrant or fragrance-free arrangements — avoid heavily scented flowers like stargazer lilies or tuberose. Soft pink roses, white carnations, and mixed pastel bouquets are ideal. Always check hospital policies on flower delivery before ordering — some maternity wards have restrictions. Home deliveries upon return from hospital are always the most reliable option.</p>`,
  faqs: [
    { question: "What flowers are appropriate for a new born baby gift?", answer: "Soft pink bouquets for a baby girl, white and light-toned arrangements for a baby boy, and yellow or white mixed bouquets for a gender-neutral choice are the most appropriate new born flowers." },
    { question: "Can I send flowers to a hospital maternity ward?", answer: "Yes, but check the hospital's flower policy first. Choose mildly fragrant arrangements — soft roses, white carnations, mixed pastel — and avoid strongly scented flowers. Home delivery upon the family's return is often more reliable." },
    { question: "Can I get new born baby flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/baby-shower",
  categorySlug: "flowers", subcategorySlug: "baby-shower", url: "/flowers/baby-shower",
  h1: "Baby Shower Flowers Delivery", defaultH1: "Baby Shower Flowers Delivery",
  metaTitle: "Baby Shower Flowers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send baby shower flowers online with same-day delivery across 830+ cities in India. Soft pastel bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/baby-shower",
  metaKeyword: "baby shower flowers India, send flowers for baby shower, baby shower bouquet India, same day baby shower flowers",
  footerContent: `
<h2>Baby Shower Flowers — Celebrating the Arrival Before It Arrives</h2>
<p>A baby shower celebrates the coming arrival — the anticipation, the preparation, and the joy of expecting. Flowers are among the most popular and most appreciated baby shower gifts, filling the celebration with colour and warmth that matches the occasion's mood perfectly. RedHeart delivers baby shower flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Baby Shower</h2>
<table>
  <thead><tr><th>Colour Theme</th><th>Flower Choice</th><th>Tone</th></tr></thead>
  <tbody>
    <tr><td>Pink theme (girl)</td><td>Pink roses, pink carnations, pink lilies</td><td>Soft, feminine, celebratory</td></tr>
    <tr><td>Blue theme (boy)</td><td>White roses, soft blue hydrangeas, mixed whites</td><td>Fresh and pure</td></tr>
    <tr><td>Yellow/neutral</td><td>Yellow roses, mixed pastels, sunflowers</td><td>Warm, joyful, gender-neutral</td></tr>
    <tr><td>White theme</td><td>White roses, white lilies, white carnations</td><td>Elegant and fresh</td></tr>
  </tbody>
</table>

<p>Baby shower flowers work as both gifts for the expectant mother and as decorations for the shower space itself. A generous mixed arrangement in the party's colour theme fills the celebration room with visual warmth that photographs beautifully — making it both a gift and a décor piece for the occasion.</p>`,
  faqs: [
    { question: "What flowers are best for a baby shower?", answer: "Soft pinks for a girl-themed shower, whites and light blues for a boy-themed shower, and yellows or mixed pastels for a neutral palette. Baby shower flowers should be soft-toned, not bold — matching the gentle, anticipatory mood of the occasion." },
    { question: "Can I get baby shower flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/appreciation",
  categorySlug: "flowers", subcategorySlug: "appreciation", url: "/flowers/appreciation",
  h1: "Appreciation Flowers Delivery", defaultH1: "Appreciation Flowers Delivery",
  metaTitle: "Appreciation Flowers Online – Same-Day Delivery | RedHeart",
  metaDescription: "Send appreciation flowers online with same-day delivery across 830+ cities in India. Carnations, roses & mixed bouquets from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/appreciation",
  metaKeyword: "appreciation flowers India, send flowers as appreciation, flowers to say thank you India, same day appreciation flowers",
  footerContent: `
<h2>Appreciation Flowers — When a Thank You Needs to Be More Than Words</h2>
<p>There are people in every life who give more than they receive — teachers, mentors, caregivers, colleagues who go beyond their role, friends who show up when it matters. An appreciation flower bouquet communicates genuine gratitude in a tangible, visible way that words alone rarely do. RedHeart delivers appreciation flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Appreciation Flowers</h2>
<table>
  <thead><tr><th>Recipient</th><th>Best Flower</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Teacher / mentor</td><td>Pink carnations or mixed pastel</td><td>Traditional appreciation flower — warm and respectful</td></tr>
    <tr><td>Doctor / nurse / caregiver</td><td>White lilies or soft mixed</td><td>Sincere and dignified — matches the weight of the appreciation</td></tr>
    <tr><td>Colleague who helped</td><td>Yellow roses or tasteful mixed</td><td>Warm acknowledgement without romantic undertone</td></tr>
    <tr><td>Host after staying</td><td>Mixed bright or pink roses</td><td>Generous and beautiful — reflects the hospitality received</td></tr>
  </tbody>
</table>

<p>The timing of an appreciation delivery matters. A bouquet sent the day after a significant act of kindness or support is more impactful than one sent weeks later — it shows that the appreciation was immediate and genuine, not an obligation remembered eventually.</p>`,
  faqs: [
    { question: "What flowers best express appreciation?", answer: "Pink carnations are the traditional appreciation flower — sincere and warm. Yellow roses and mixed pastel bouquets are also popular for appreciation gifting. White lilies convey deep, respectful gratitude for significant acts of support." },
    { question: "Can I get appreciation flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/cheer-up",
  categorySlug: "flowers", subcategorySlug: "cheer-up", url: "/flowers/cheer-up",
  h1: "Cheer Up Flowers Delivery", defaultH1: "Cheer Up Flowers Delivery",
  metaTitle: "Cheer Up Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send cheer up flowers online with same-day delivery across 830+ cities in India. Bright mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/cheer-up",
  metaKeyword: "cheer up flowers India, send flowers to cheer someone up, uplifting flowers online India, same day cheer up flowers",
  footerContent: `
<h2>Cheer Up Flowers — Because Sometimes a Person Needs Beauty More Than Words</h2>
<p>When someone you care about is going through a hard time — a disappointment, a stressful period, a quiet low — a phone call is good but flowers are better. A bright, vibrant bouquet arriving at their door says: I noticed. I thought about what might help. I wanted to send you something beautiful. RedHeart delivers cheer up flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Cheering Someone Up</h2>
<table>
  <thead><tr><th>Flower</th><th>Cheer-Up Effect</th></tr></thead>
  <tbody>
    <tr><td>Yellow roses / sunflowers</td><td>Joy, optimism, warmth — the most genuinely uplifting flowers</td></tr>
    <tr><td>Mixed bright — oranges, pinks, yellows</td><td>Vibrant energy — fills the room with colour and warmth</td></tr>
    <tr><td>Pink roses</td><td>Warm affection — "I care about you" in flower form</td></tr>
    <tr><td>Mixed gerberas</td><td>Cheerful, energetic, instantly lifting</td></tr>
  </tbody>
</table>

<p>Choose bright, warm colours over soft pastels for cheer-up flowers — the vibrancy of yellow, orange, and bright pink communicates energy and positivity. Avoid white or muted arrangements, which can feel more appropriate for solemn occasions than uplifting ones. The goal is to bring light into a difficult moment.</p>`,
  faqs: [
    { question: "What flowers are best for cheering someone up?", answer: "Yellow roses, sunflowers, and mixed bright bouquets in oranges, pinks, and yellows are the best cheer-up flowers. Their vibrant colour communicates energy, warmth, and genuine care." },
    { question: "Can I get cheer up flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

// ── FESTIVAL PAGES ─────────────────────────────────────────────────────────

{
  pageKey: "flowers/rose-day",
  categorySlug: "flowers", subcategorySlug: "rose-day", url: "/flowers/rose-day",
  h1: "Rose Day Flowers Delivery", defaultH1: "Rose Day Flowers Delivery",
  metaTitle: "Rose Day Flowers – February 7 Delivery India | RedHeart",
  metaDescription: "Send Rose Day flowers online with same-day delivery across 830+ cities in India. Red roses from ₹399 for February 7. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/rose-day",
  metaKeyword: "Rose Day flowers India, send roses on Rose Day, February 7 rose delivery, Valentine's Week Rose Day",
  footerContent: `
<h2>Rose Day — February 7, the Opening of Valentine's Week</h2>
<p>Rose Day on February 7 opens Valentine's Week with a simple, powerful gesture: a rose. A single red rose given on Rose Day is one of the most romantic statements in the gifting calendar — intimate, deliberate, and charged with the week-long anticipation of Valentine's Day. RedHeart delivers Rose Day flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Rose Day Gift Guide</h2>
<table>
  <thead><tr><th>Stage of Relationship</th><th>Rose Day Gift</th></tr></thead>
  <tbody>
    <tr><td>New / early relationship</td><td>Single pink rose — warm, personal, not overwhelming</td></tr>
    <tr><td>Established romantic relationship</td><td>6-12 red roses — clear romantic statement opening Valentine's Week</td></tr>
    <tr><td>Long-term partner / spouse</td><td>The number of years together in roses — deeply personal</td></tr>
    <tr><td>Crush / someone you want to impress</td><td>Single red rose delivered to their home — clear, bold, memorable</td></tr>
  </tbody>
</table>

<p>Rose Day sets the emotional tone for the rest of Valentine's Week. The rose you choose on February 7 is the first gesture of seven — make it count. A morning delivery on Rose Day, arriving before the workday begins, tells the recipient that they were your first thought of that day.</p>`,
  faqs: [
    { question: "When is Rose Day?", answer: "Rose Day is celebrated on February 7 — the first day of Valentine's Week, which runs from February 7 to February 14." },
    { question: "What does a single red rose on Rose Day mean?", answer: "A single red rose on Rose Day is a deliberately intimate and romantic gesture — it says 'you are specifically in my thoughts on this day.' It opens Valentine's Week with clear romantic intention." },
    { question: "Can I get Rose Day flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India on February 7." },
  ],
},

{
  pageKey: "flowers/holi",
  categorySlug: "flowers", subcategorySlug: "holi", url: "/flowers/holi",
  h1: "Holi Flowers Delivery", defaultH1: "Holi Flowers Delivery",
  metaTitle: "Holi Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send Holi flowers online with same-day delivery across 830+ cities in India. Colourful bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/holi",
  metaKeyword: "Holi flowers India, send flowers for Holi, Holi flower bouquet, same day Holi flowers India",
  footerContent: `
<h2>Holi Flowers — Celebrating India's Festival of Colours With Flowers</h2>
<p>Holi is the celebration of colour, renewal, and the end of winter. Fresh flowers carry all three of these qualities naturally — they are colourful, alive, and they signal the arrival of spring. Sending flowers on Holi is a growing urban gifting tradition, combining the festival's spirit of colour and celebration with the beauty of fresh blooms. RedHeart delivers Holi flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Holi</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Fits Holi</th></tr></thead>
  <tbody>
    <tr><td>Mixed vibrant bouquet</td><td>Colourful, abundant, celebratory — perfectly matches Holi's spirit</td></tr>
    <tr><td>Yellow roses</td><td>Spring yellow — the most naturally Holi-appropriate rose</td></tr>
    <tr><td>Orange gerberas</td><td>Energy and vibrancy — matches Holi's festive warmth</td></tr>
    <tr><td>Mixed colourful arrangement</td><td>Every colour of Holi in one bouquet</td></tr>
  </tbody>
</table>

<p>Holi flowers are especially popular as gifts for neighbours, extended family, and friends you visit during Holi. A colourful flower arrangement is a joyful, memorable Holi gift that signals warmth and celebration without the standard mithai or thandai.</p>`,
  faqs: [
    { question: "Are flowers a good Holi gift?", answer: "Yes. Mixed vibrant bouquets, yellow roses, and colourful arrangements are increasingly popular Holi gifts — they match the festival's celebration of colour and spring energy." },
    { question: "Can I get Holi flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/eid-al-fitr",
  categorySlug: "flowers", subcategorySlug: "eid-al-fitr", url: "/flowers/eid-al-fitr",
  h1: "Eid Flowers Delivery", defaultH1: "Eid Flowers Delivery",
  metaTitle: "Eid Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send Eid flowers online with same-day delivery across 830+ cities in India. Fresh bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/eid-al-fitr",
  metaKeyword: "Eid flowers India, send flowers for Eid, Eid al-Fitr flowers India, same day Eid flowers",
  footerContent: `
<h2>Eid Flowers — Celebrating the Most Joyful of Occasions</h2>
<p>Eid al-Fitr is the celebration of completion, gratitude, and the joy of being together. Sending flowers to family and friends on Eid is a beautiful gesture that transcends the traditional gifting vocabulary — adding colour and freshness to the day's celebration. RedHeart delivers Eid flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Eid</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Works for Eid</th></tr></thead>
  <tbody>
    <tr><td>Mixed vibrant bouquet</td><td>Celebratory, generous, warm — matches Eid's festive spirit</td></tr>
    <tr><td>White roses</td><td>Purity and gratitude — appropriate for the spiritual significance of Eid</td></tr>
    <tr><td>Yellow roses</td><td>Joy and celebration — auspicious and warm</td></tr>
    <tr><td>White and pink mixed</td><td>Elegant and celebratory — suitable for family visits</td></tr>
  </tbody>
</table>

<p>Eid flower gifting works particularly well as a visiting gift — bringing a fresh bouquet when visiting family or friends on Eid morning. It fills their home with colour and fragrance and is a memorable alternative to the standard gifts exchanged on the day.</p>`,
  faqs: [
    { question: "Are flowers an appropriate Eid gift?", answer: "Yes. Fresh flower bouquets are a beautiful Eid gift — warm, celebratory, and meaningful. White roses, mixed vibrant arrangements, and yellow roses are popular Eid flower choices." },
    { question: "Can I get Eid flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/lohri",
  categorySlug: "flowers", subcategorySlug: "lohri", url: "/flowers/lohri",
  h1: "Lohri Flowers Delivery", defaultH1: "Lohri Flowers Delivery",
  metaTitle: "Lohri Flowers Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send Lohri flowers online with same-day delivery across 830+ cities in India. Warm mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/lohri",
  metaKeyword: "Lohri flowers India, send flowers for Lohri, Lohri gift flowers India, same day Lohri flowers",
  footerContent: `
<h2>Lohri Flowers — Warmth and New Beginnings at the Peak of Winter</h2>
<p>Lohri marks the end of winter and celebrates harvest, new beginnings, and the warmth of fire. Sending flowers on Lohri — warm, earthy tones that mirror the festival's colour palette — is a growing gifting tradition, particularly for new parents celebrating their first Lohri with a baby, and for families marking new beginnings. RedHeart delivers Lohri flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Best Flowers for Lohri</h2>
<table>
  <thead><tr><th>Flower</th><th>Why It Fits Lohri</th></tr></thead>
  <tbody>
    <tr><td>Orange and yellow gerberas</td><td>Mirrors the festival's fire and harvest warmth</td></tr>
    <tr><td>Mixed warm bouquet</td><td>Deep oranges, yellows, and reds — the Lohri colour palette</td></tr>
    <tr><td>Marigolds</td><td>Traditional Indian festive flower — auspicious and vibrant</td></tr>
    <tr><td>Yellow roses</td><td>Joyful and celebratory — appropriate for the harvest occasion</td></tr>
  </tbody>
</table>

<p>For the first Lohri of a new baby, a warm bouquet for the parents alongside a money plant makes a particularly meaningful gift — celebrating the new life with both the warmth of the festival and the auspicious symbolism of growth and prosperity.</p>`,
  faqs: [
    { question: "Are flowers a good Lohri gift?", answer: "Yes. Warm mixed bouquets in oranges, yellows, and reds mirror Lohri's colour palette and celebratory spirit. For a baby's first Lohri, flowers paired with a money plant is a particularly thoughtful gift." },
    { question: "Can I get Lohri flowers delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

// ── TYPES / COLLECTIONS ───────────────────────────────────────────────────

{
  pageKey: "flowers/bouquets",
  categorySlug: "flowers", subcategorySlug: "bouquets", url: "/flowers/bouquets",
  h1: "Flower Bouquets Delivery", defaultH1: "Flower Bouquets Delivery",
  metaTitle: "Flower Bouquets Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh flower bouquets online with same-day delivery across 830+ cities in India. Roses, lilies & mixed bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/bouquets",
  metaKeyword: "flower bouquets online India, send bouquet India, fresh flower bouquets delivery, same day bouquet India",
  footerContent: `
<h2>Fresh Flower Bouquets — The Perfect Gift for Every Occasion</h2>
<p>A flower bouquet is the most complete and universally appropriate gifting choice available. It requires no occasion to justify it, no relationship context to make sense of it, and no recipient preference to navigate. A well-chosen bouquet is beautiful by default — and when it is chosen with thought for the specific person, it becomes something more: a visible expression of how well they are known and how much they are valued. RedHeart delivers fresh flower bouquets across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Popular Bouquet Choices by Occasion</h2>
<table>
  <thead><tr><th>Occasion</th><th>Recommended Bouquet</th><th>Starting At</th></tr></thead>
  <tbody>
    <tr><td>Anniversary / Valentine's</td><td>Red roses (12 or 24)</td><td>₹599</td></tr>
    <tr><td>Birthday</td><td>Mixed vibrant or pink roses</td><td>₹399</td></tr>
    <tr><td>Mother's Day</td><td>Pink carnations or soft mixed</td><td>₹399</td></tr>
    <tr><td>Wedding gift</td><td>White lilies or roses-and-lily</td><td>₹699</td></tr>
    <tr><td>Get well soon</td><td>Soft pastel mixed</td><td>₹399</td></tr>
    <tr><td>Congratulations</td><td>Yellow roses or sunflowers</td><td>₹499</td></tr>
    <tr><td>Thank you</td><td>Mixed pastel or pink carnations</td><td>₹399</td></tr>
  </tbody>
</table>`,
  faqs: [
    { question: "What is the most popular flower bouquet in India?", answer: "Red roses (12 stems) is the most ordered flower bouquet in India, followed by mixed vibrant bouquets and pink rose arrangements. Red roses are the dominant choice for anniversaries and Valentine's Day." },
    { question: "Can I get flower bouquets delivered same day in India?", answer: "Yes. RedHeart delivers fresh flower bouquets the same day across 830+ cities in India. Midnight delivery is also available for romantic occasions." },
    { question: "What is the starting price for flower bouquets on RedHeart?", answer: "Flower bouquets start at ₹399 on RedHeart. Premium arrangements like 24 red roses or roses-and-lily combinations are available at higher price points." },
  ],
},

{
  pageKey: "flowers/best-sellers",
  categorySlug: "flowers", subcategorySlug: "best-sellers", url: "/flowers/best-sellers",
  h1: "Best Seller Flowers", defaultH1: "Best Seller Flowers",
  metaTitle: "Best Seller Flowers Online – Most Popular Bouquets | RedHeart",
  metaDescription: "Shop India's most popular flowers online with same-day delivery across 830+ cities. Top-rated roses, lilies & mixed bouquets from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/best-sellers",
  metaKeyword: "best selling flowers India, most popular flowers online, top flower bouquets India, same day flower delivery India",
  footerContent: `
<h2>India's Most Popular Flowers — What People Actually Buy</h2>
<p>Best-seller rankings tell you something that descriptions cannot: what people actually choose when they want to get it right. The flowers on this page are RedHeart's most ordered — the ones that have delivered the most smiles, prompted the most thank-you messages, and been described by recipients as exactly what was hoped for. RedHeart delivers these best-selling flowers across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Why Best Sellers Are a Safe Choice</h2>
<p>Best-selling flowers represent a convergence of popular taste, proven quality, and broad occasion-appropriateness. When a flower bouquet becomes a consistent best seller, it means it has worked for many different occasions, many different recipients, and many different relationships. A mixed vibrant bouquet that is ordered consistently for birthdays, anniversaries, and housewarmings has been validated by thousands of real gifting decisions.</p>

<h2>When to Shop Best Sellers</h2>
<p>Best-seller collections are most useful when you are unsure of the recipient's specific flower preferences, when you need a safe and broadly appropriate choice, or when you want the confidence of knowing your choice has been validated by many previous buyers. For occasions where personalisation is possible — if you know her favourite flower or his favourite colour — explore the specific flower and colour pages for a more tailored choice.</p>`,
  faqs: [
    { question: "What are the best-selling flowers in India?", answer: "Red roses, mixed vibrant bouquets, pink rose arrangements, and roses-and-lily combinations are consistently RedHeart's most ordered flowers. Carnations are a popular Mother's Day best seller; sunflowers for congratulations." },
    { question: "Can I get best-seller flowers delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

// ── REMAINING COMBOS ──────────────────────────────────────────────────────

{
  pageKey: "flowers/red-roses",
  categorySlug: "flowers", subcategorySlug: "red-roses", url: "/flowers/red-roses",
  h1: "Red Roses Delivery", defaultH1: "Red Roses Delivery",
  metaTitle: "Send Red Roses Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh red roses online with same-day & midnight delivery across 830+ cities in India. Long-stem red rose bouquets from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/red-roses",
  metaKeyword: "red roses online India, send red roses, red rose bouquet India, 12 red roses delivery, same day red roses, midnight red roses India",
  footerContent: `
<h2>Red Roses — The Original Language of Love</h2>
<p>No flower in human history has been more consistently associated with romantic love than the red rose. It is not merely a cultural convention — the colour red signals intensity, passion, and emotion at a neurological level. Combined with the natural beauty and fragrance of a rose, a red rose bouquet delivers the most powerful romantic message in the gifting vocabulary. And it does so without requiring a single word. RedHeart delivers fresh red roses across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>How Many Red Roses to Send — Complete Guide</h2>
<table>
  <thead><tr><th>Number</th><th>Message</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>1 stem</td><td>Intimate, deliberate, most personal gesture</td><td>New relationship, "just because," proposal opening</td></tr>
    <tr><td>6 stems</td><td>"I care about you deeply" — understated sincerity</td><td>Early relationship, birthday</td></tr>
    <tr><td>12 stems</td><td>Classic romantic love — the standard beautiful bouquet</td><td>Anniversary, Valentine's Day, birthday</td></tr>
    <tr><td>24 stems</td><td>Grand romantic statement — abundance of love</td><td>Milestone anniversary, Valentine's Day proposal, make-up gift</td></tr>
    <tr><td>Years together</td><td>Deeply personal — counted love</td><td>Anniversary — each rose representing a year</td></tr>
    <tr><td>50 stems</td><td>A lifetime of love — most extravagant statement</td><td>50th anniversary, significant milestone</td></tr>
  </tbody>
</table>

<h2>Red Roses With Cake — The Most Romantic Gift Combination</h2>
<p>Red roses paired with a red velvet cake is the most emotionally coherent gift combination in the Indian gifting market. Both are deep red, both are luxurious, both are appropriate for the highest-stakes romantic occasions. For a Valentine's Day midnight delivery or an anniversary morning surprise, red roses and red velvet cake arriving together creates an immediate visual and emotional impact that is difficult to surpass.</p>

<h2>Red Roses for Every Romantic Occasion</h2>
<p><strong>Valentine's Day</strong> — the definitive occasion. 24 red roses delivered at midnight on February 14 is the most romantic gesture the Indian gifting market offers. Book early — midnight Valentine's Day delivery slots fill weeks in advance.</p>
<p><strong>Anniversary</strong> — the number of roses can match the years of the relationship for a deeply personal touch. A dozen roses is always appropriate for any anniversary.</p>
<p><strong>Propose Day (Feb 8)</strong> — a single or small bouquet of red roses is the classic proposal flower gift. Clear, unmistakable, and impossibly romantic.</p>
<p><strong>"Just because"</strong> — red roses sent on an ordinary day, without occasion, are the most romantically surprising gesture available. The absence of occasion is the point.</p>`,
  faqs: [
    { question: "How many red roses should I send for an anniversary?", answer: "12 red roses is the classic anniversary choice. 24 makes a grander statement for milestone anniversaries. The number of years together as the number of roses is the most personal and romantic option — each rose representing a year of the relationship." },
    { question: "Can I get red roses delivered at midnight in India?", answer: "Yes. RedHeart offers midnight delivery across hundreds of Indian cities — perfect for anniversary mornings and Valentine's Day." },
    { question: "What is the most popular gift to pair with red roses?", answer: "Red velvet cake is the most popular pairing with red roses — both are deep red, luxurious, and romantic. Chocolate truffle is the most popular alternative." },
    { question: "Can I get red roses delivered same day in India?", answer: "Yes. RedHeart delivers fresh red roses the same day across 830+ cities in India." },
    { question: "Are red roses appropriate for any occasion other than romance?", answer: "Red roses are primarily romantic, but work for formal appreciation and very close friendships in some contexts. For non-romantic occasions, pink roses or mixed bouquets are more appropriate." },
  ],
},

{
  pageKey: "flowers/birthday-roses",
  categorySlug: "flowers", subcategorySlug: "birthday-roses", url: "/flowers/birthday-roses",
  h1: "Birthday Roses Delivery", defaultH1: "Birthday Roses Delivery",
  metaTitle: "Birthday Roses Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Send birthday roses online with same-day & midnight delivery across 830+ cities in India. Pink, red & mixed roses from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/birthday-roses",
  metaKeyword: "birthday roses India, send roses for birthday, birthday rose bouquet online, same day birthday roses, midnight birthday roses",
  footerContent: `
<h2>Birthday Roses — Personalised, Beautiful, and Impossible to Misread</h2>
<p>Roses for a birthday are the most classic choice in the gifting vocabulary — and with good reason. They are visually beautiful, arrive with fragrance, and communicate genuine thought about the specific day and the specific person. The colour of rose you choose, the number you send, and the timing of the delivery all become part of the birthday message. RedHeart delivers birthday roses across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Birthday Roses by Recipient and Relationship</h2>
<table>
  <thead><tr><th>Recipient</th><th>Rose Choice</th><th>Delivery Timing</th></tr></thead>
  <tbody>
    <tr><td>Girlfriend / Wife</td><td>Pink or red roses (12-24)</td><td>Midnight — the most romantic timing</td></tr>
    <tr><td>Mother</td><td>Pink roses or mixed soft</td><td>Morning — before the day begins</td></tr>
    <tr><td>Best friend (female)</td><td>Pink roses or mixed vibrant</td><td>Morning — she sees them all day</td></tr>
    <tr><td>Sister</td><td>Pink roses</td><td>Morning or afternoon</td></tr>
    <tr><td>Boyfriend / Husband</td><td>Red roses to his office</td><td>Morning office delivery</td></tr>
    <tr><td>Colleague (female)</td><td>Pink roses</td><td>Daytime office delivery</td></tr>
  </tbody>
</table>

<h2>The Birthday Roses Number Rule</h2>
<p>Sending the recipient's age in roses is one of the most personal birthday gestures available. If she is turning 25, a bouquet of 25 pink roses says: I counted. I thought about exactly who you are this year. It is a detail that most recipients notice immediately and almost always mention. Combined with the year's top birthday cake, a personalised-number rose bouquet makes the most complete birthday gift available.</p>`,
  faqs: [
    { question: "What colour roses are best for a birthday?", answer: "Pink roses are the most universally appropriate birthday rose — warm, beautiful, and suitable for almost every relationship. Red roses are best for romantic partners. Mixed vibrant bouquets with roses work for friends and family." },
    { question: "Should I send the recipient's age in roses?", answer: "Yes — sending a number of roses that matches the recipient's age is one of the most personal and memorable birthday gestures available. Most recipients notice this detail immediately and appreciate the thought." },
    { question: "Can I get birthday roses delivered at midnight in India?", answer: "Yes. RedHeart offers midnight delivery — perfect for marking the very start of a birthday." },
    { question: "Can I get birthday roses delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

{
  pageKey: "flowers/anniversary-roses",
  categorySlug: "flowers", subcategorySlug: "anniversary-roses", url: "/flowers/anniversary-roses",
  h1: "Anniversary Roses Delivery", defaultH1: "Anniversary Roses Delivery",
  metaTitle: "Anniversary Roses Online – Midnight Delivery India | RedHeart",
  metaDescription: "Send anniversary roses online with midnight & same-day delivery across 830+ cities in India. Long-stem red roses from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/anniversary-roses",
  metaKeyword: "anniversary roses India, send roses for anniversary, 24 red roses anniversary, midnight anniversary roses, anniversary rose bouquet online India",
  footerContent: `
<h2>Anniversary Roses — The Most Romantic Flower Moment of the Year</h2>
<p>An anniversary calls for red roses. Not because it is conventional, but because no other flower communicates sustained romantic love as powerfully — the kind of love that has not diminished over years of shared life. An anniversary red rose bouquet says: after everything, I am still choosing you. Every year. RedHeart delivers anniversary roses across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Anniversary Roses — What Number to Send</h2>
<table>
  <thead><tr><th>Anniversary Year</th><th>Suggested Number of Roses</th><th>Message</th></tr></thead>
  <tbody>
    <tr><td>1st</td><td>12 red roses</td><td>The classic first year statement</td></tr>
    <tr><td>5th</td><td>24 red roses</td><td>Five years — a milestone worth marking</td></tr>
    <tr><td>10th</td><td>50 red roses</td><td>A decade of love — the grand statement</td></tr>
    <tr><td>25th</td><td>25 red roses with white accents</td><td>Silver anniversary — the roses match the year</td></tr>
    <tr><td>Any year</td><td>The number of years together</td><td>Each rose represents a year — the most personal choice</td></tr>
  </tbody>
</table>

<h2>Midnight Anniversary Rose Delivery</h2>
<p>RedHeart's midnight anniversary delivery service is built for the gesture that says: I was thinking about this day from its very first second. A bouquet of 12 or 24 red roses, arriving at exactly 12 AM on your anniversary morning, paired with a red velvet cake, creates the most romantic possible start to the day. It is the delivery that gets mentioned to friends and family for years — the one that confirms your partner is someone who marks the occasions that matter with genuine thought and care.</p>

<h2>Elevating the Anniversary Rose Bouquet</h2>
<p>A red rose bouquet is the foundation. Building on it: roses-and-lily for a premium arrangement that adds elegance to the romance. A Ferrero Rocher chocolate box alongside the roses for the gold-standard luxury pairing. A red velvet cake for the midnight combination. A personalised message card for the word that the flowers communicate in feeling. Each addition transforms the bouquet from a beautiful gift into an experience — layered, considered, and impossible to forget.</p>`,
  faqs: [
    { question: "How many red roses should I send for an anniversary?", answer: "12 is the classic choice. 24 or the number of years together are more personal options for milestone anniversaries. Matching the number of roses to the anniversary year is the most personalised choice." },
    { question: "Can I arrange midnight anniversary rose delivery in India?", answer: "Yes. RedHeart offers midnight delivery across hundreds of Indian cities — your anniversary roses arrive at exactly 12 AM, making them the very first moment of the day." },
    { question: "What pairs best with anniversary roses?", answer: "Red velvet cake for a midnight delivery is the most romantic combination. Ferrero Rocher chocolates elevate the luxury. A personalised message card adds the personal touch." },
    { question: "Can I get anniversary roses delivered same day?", answer: "Yes. RedHeart delivers same day across 830+ cities in India. Midnight delivery is also available." },
  ],
},

{
  pageKey: "flowers/roses-and-carnation",
  categorySlug: "flowers", subcategorySlug: "roses-and-carnation", url: "/flowers/roses-and-carnation",
  h1: "Roses and Carnation Delivery", defaultH1: "Roses and Carnation Delivery",
  metaTitle: "Roses and Carnation Bouquet – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh roses and carnation bouquets online with same-day delivery across 830+ cities in India. From ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/flowers/roses-and-carnation",
  metaKeyword: "roses and carnations India, send roses and carnations online, mixed roses carnation bouquet India, same day roses carnations delivery",
  footerContent: `
<h2>Roses and Carnations — The Most Durable and Beautiful Combination</h2>
<p>Roses bring romance and visual beauty. Carnations bring longevity and warm sincerity. Together, they create a bouquet that is both visually striking and exceptionally long-lasting — the combination that looks beautiful on arrival and remains beautiful for over a week. RedHeart delivers fresh roses-and-carnation bouquets across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Why Roses and Carnations Work Together</h2>
<table>
  <thead><tr><th>Occasion</th><th>Combination</th><th>Effect</th></tr></thead>
  <tbody>
    <tr><td>Birthday</td><td>Pink roses + pink carnations</td><td>Soft, warm, long-lasting birthday statement</td></tr>
    <tr><td>Mother's Day</td><td>Pink roses + pink carnations</td><td>Two of the most maternal flowers combined</td></tr>
    <tr><td>Anniversary</td><td>Red roses + red carnations</td><td>Romantic and long-lasting — the anniversary bouquet that endures</td></tr>
    <tr><td>Farewell / appreciation</td><td>Mixed roses + mixed carnations</td><td>Generous, warm, and lasting — the gift that stays beautiful</td></tr>
  </tbody>
</table>

<p>Carnations last significantly longer than most cut flowers — adding them to a rose bouquet extends the life of the arrangement beyond what roses alone would maintain. A roses-and-carnation birthday bouquet received on the birthday morning will still be beautiful a week later — a rare quality in cut flower gifting.</p>`,
  faqs: [
    { question: "Why are roses and carnations a good combination?", answer: "Roses bring visual beauty and romance; carnations bring exceptional longevity (lasting 10-14 days). Together they create a bouquet that is both immediately beautiful and long-lasting — one of the best value combinations in cut flower gifting." },
    { question: "What occasions are roses and carnations best for?", answer: "Mother's Day, birthdays, anniversaries, and appreciation gifting are the best occasions for roses-and-carnation bouquets. The combination of maternal carnations with warm roses is especially appropriate for Mother's Day." },
    { question: "Can I get roses and carnations delivered same day in India?", answer: "Yes. RedHeart delivers same day across 830+ cities in India." },
  ],
},

];

async function upload() {
  console.log(`Uploading ${pages.length} flower subcategory pages (batch 2)...\n`);
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
