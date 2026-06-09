const API = "https://backend.redheart.in/api/category-seo/upsert";

const pages = [

// ── FLAVOUR PAGES ─────────────────────────────────────────────────────────

{
  pageKey: "cakes/chocolate",
  categorySlug: "cakes", subcategorySlug: "chocolate", url: "/cakes/chocolate",
  h1: "Chocolate Cake Delivery", defaultH1: "Chocolate Cake Delivery",
  metaTitle: "Chocolate Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh chocolate cakes online with same-day & midnight delivery across 830+ cities in India. Truffle, ganache & layered cakes from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/chocolate",
  metaKeyword: "chocolate cake online India, order chocolate cake, chocolate truffle cake delivery, same day chocolate cake, midnight chocolate cake India",
  footerContent: `
<h2>Chocolate Cake — India's Most Loved Cake Flavour</h2>
<p>Chocolate cake is the most ordered cake flavour in India across every age group, every occasion, and every city. The reason is simple: chocolate cake is universally loved. It requires no preference qualification — almost everyone loves it, almost no one dislikes it, and it is the safe-but-right choice in a way that few other flavours are. Whether for a birthday, an anniversary, or a "just because" delivery, a fresh chocolate cake delivered to someone's door is met with immediate pleasure. RedHeart delivers fresh chocolate cakes across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Types of Chocolate Cakes Available</h2>
<table>
  <thead><tr><th>Cake Type</th><th>Description</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Chocolate Truffle</td><td>Dense chocolate sponge with ganache — rich and intense</td><td>Birthday, anniversary, universal gifting</td></tr>
    <tr><td>Dark Chocolate Ganache</td><td>Extra-dark, for serious chocolate lovers</td><td>Birthday, appreciation, premium gifting</td></tr>
    <tr><td>Chocolate Fudge</td><td>Moist, dense, fudgy texture — intensely satisfying</td><td>Birthday, anniversary</td></tr>
    <tr><td>Chocolate and Nuts</td><td>Chocolate cake with roasted almonds or hazelnuts</td><td>Gifting to adults, office celebrations</td></tr>
    <tr><td>Chocolate Pinata</td><td>Hollow chocolate shell that releases candies when cracked</td><td>Kids' birthdays, fun celebrations, viral gifting</td></tr>
    <tr><td>Ferrero Rocher Cake</td><td>Chocolate hazelnut with Ferrero Rocher decoration</td><td>Premium gifting, anniversaries, milestone birthdays</td></tr>
  </tbody>
</table>

<h2>Why Chocolate Cake Works for Every Occasion</h2>
<p><strong>Birthday</strong> — chocolate truffle is the most ordered birthday cake in India. Rich, celebratory, and visually impressive with its ganache finish. Paired with a mixed flower bouquet for a birthday gift that covers the full emotional range of the occasion.</p>
<p><strong>Anniversary</strong> — a dark chocolate truffle cake with red roses is one of the most consistently popular anniversary combinations. The richness of the chocolate matches the intensity of the occasion; the ganache surface photographs beautifully.</p>
<p><strong>Corporate celebrations</strong> — chocolate cake is the universally safe office celebration choice. It pleases the widest range of palates in any professional group. A large chocolate truffle cake for an office birthday or team celebration is reliably well-received.</p>
<p><strong>Just because</strong> — a small chocolate cake delivered on a random day, paired with flowers, is one of the most delightfully unexpected gifts available. The unexpectedness is the point.</p>

<h2>Midnight Chocolate Cake Delivery</h2>
<p>RedHeart's midnight delivery service is built for birthday and anniversary surprises that begin at exactly 12 AM. A fresh chocolate truffle cake, delivered at midnight alongside red roses, creates the most dramatic and romantic birthday or anniversary beginning available. The cake is prepared fresh on the day of delivery — it arrives with the same freshness as a same-day order.</p>`,
  faqs: [
    { question: "Is chocolate cake the most popular birthday cake in India?", answer: "Yes. Chocolate truffle is consistently the most ordered birthday cake in India, followed by black forest. It is the universally safe and universally loved choice across all age groups." },
    { question: "Can I get chocolate cake delivered at midnight in India?", answer: "Yes. RedHeart offers midnight cake delivery across hundreds of Indian cities — your cake arrives fresh at exactly 12 AM." },
    { question: "What flowers pair best with chocolate cake?", answer: "Mixed vibrant bouquet with chocolate truffle is the most popular combination for birthdays. Red roses with chocolate truffle is the most popular anniversary combination. Both create a visually striking gift when delivered together." },
    { question: "Can I get chocolate cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh chocolate cakes the same day across 830+ cities in India." },
    { question: "What is a chocolate pinata cake?", answer: "A pinata cake has a hollow chocolate shell exterior. When the recipient cracks it (usually with a small hammer included with the cake), candies and chocolates pour out. It is one of the most popular fun birthday cake choices, especially for younger recipients." },
  ],
},

{
  pageKey: "cakes/black-forest",
  categorySlug: "cakes", subcategorySlug: "black-forest", url: "/cakes/black-forest",
  h1: "Black Forest Cake Delivery", defaultH1: "Black Forest Cake Delivery",
  metaTitle: "Black Forest Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh black forest cakes online with same-day & midnight delivery across 830+ cities in India. Cherries, cream & chocolate from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/black-forest",
  metaKeyword: "black forest cake online India, order black forest cake, black forest cake delivery, same day black forest cake, midnight black forest cake India",
  footerContent: `
<h2>Black Forest Cake — The Classic That Never Goes Out of Style</h2>
<p>Black Forest cake is India's most beloved traditional celebration cake. Three layers of moist chocolate sponge, fresh whipped cream, dark cherries, and a generous garnish of chocolate shavings — it is visually spectacular and flavourfully complex in a way that no single-flavour cake can match. It has been the birthday cake of choice for multiple generations of Indian families, and it remains in the top three most ordered cakes in India year after year. RedHeart delivers fresh black forest cakes across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>What Makes a Great Black Forest Cake</h2>
<table>
  <thead><tr><th>Component</th><th>Quality Marker</th><th>What to Look For</th></tr></thead>
  <tbody>
    <tr><td>Chocolate sponge</td><td>Moist, rich, not dry</td><td>Dense crumb that holds up under cream and cherries</td></tr>
    <tr><td>Cream layers</td><td>Fresh whipped cream — not artificial stabilised cream</td><td>Light and fresh-tasting, not overly sweet</td></tr>
    <tr><td>Cherries</td><td>Dark, sweet-tart cherries</td><td>Generous quantity, embedded in cream layers</td></tr>
    <tr><td>Chocolate garnish</td><td>Generous chocolate shavings or curls</td><td>Covering the top and sides — visual impact</td></tr>
    <tr><td>Kirsch / cherry syrup</td><td>Soaked into sponge for moisture</td><td>Subtle cherry flavour throughout the sponge</td></tr>
  </tbody>
</table>

<h2>When to Choose Black Forest</h2>
<p>Black Forest is the right cake when the occasion calls for something classically celebratory. It is the most iconic birthday cake in India — the one associated with childhood birthday memories for most people over 30. Sending a black forest cake to someone's birthday is both a celebration and a small act of nostalgia — evoking the birthdays of their past while celebrating the one happening now. For a sister's birthday, a grandmother's birthday, or a colleague who specifically requests their favourite — black forest is the one.</p>
<p>Black forest also works beautifully for anniversaries — the richness of chocolate with the freshness of cream and the sharpness of cherries creates a layered experience that matches the complexity of a long-term relationship.</p>`,
  faqs: [
    { question: "Why is black forest cake so popular in India?", answer: "Black forest cake has been a beloved birthday and celebration cake in India for decades. Its combination of moist chocolate sponge, fresh cream, and dark cherries creates a layered flavour experience that is both celebratory and nostalgic for most Indian recipients." },
    { question: "Can I get black forest cake delivered at midnight?", answer: "Yes. RedHeart offers midnight delivery across hundreds of Indian cities." },
    { question: "How long does a black forest cake stay fresh?", answer: "A fresh black forest cake stays at its best for up to 24 hours at room temperature, or up to 3 days refrigerated. Consume within 2 days of delivery for the best flavour and texture." },
    { question: "Can I get black forest cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh black forest cakes the same day across 830+ cities in India." },
    { question: "What flowers pair with black forest cake?", answer: "Pink roses or mixed bright bouquets pair beautifully with black forest cake for a birthday. The classic combination for a sister's birthday is mixed bright flowers with black forest cake." },
  ],
},

{
  pageKey: "cakes/red-velvet",
  categorySlug: "cakes", subcategorySlug: "red-velvet", url: "/cakes/red-velvet",
  h1: "Red Velvet Cake Delivery", defaultH1: "Red Velvet Cake Delivery",
  metaTitle: "Red Velvet Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh red velvet cakes online with same-day & midnight delivery across 830+ cities in India. Cream cheese frosting from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/red-velvet",
  metaKeyword: "red velvet cake online India, order red velvet cake, red velvet cake delivery, same day red velvet cake, midnight red velvet delivery India",
  footerContent: `
<h2>Red Velvet Cake — The Most Romantic Cake in India</h2>
<p>Red velvet cake occupies a unique place in India's cake culture: it is unambiguously the most romantic cake available. Its deep crimson interior, cream cheese frosting, and the visual drama of the contrast between them makes it the natural partner for red roses — and together, they constitute the most romantic gift combination in the Indian gifting market. For anniversaries, Valentine's Day, and any occasion that calls for luxury and romance, red velvet is the unequivocal choice. RedHeart delivers fresh red velvet cakes across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Red Velvet Cake — Flavour and Texture Profile</h2>
<table>
  <thead><tr><th>Component</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>Sponge</td><td>Deep crimson, moist, dense — light cocoa flavour with vanilla undertones</td></tr>
    <tr><td>Frosting</td><td>Classic cream cheese — tangy, smooth, not overly sweet</td></tr>
    <tr><td>Layers</td><td>Multiple sponge layers with cream cheese frosting between each</td></tr>
    <tr><td>Visual impact</td><td>Red and white contrast — the most photographable cake in the gifting market</td></tr>
    <tr><td>Flavour experience</td><td>Complex — mild cocoa, vanilla, slight tang from cream cheese, luxurious overall</td></tr>
  </tbody>
</table>

<h2>The Red Velvet and Red Roses Combination</h2>
<p>There is no more romantic gift combination available in the Indian gifting market than red roses paired with a red velvet cake. Both are deep red, both are luxurious, both are associated with romance and intensity. For a midnight anniversary delivery, for Valentine's Day, for a girlfriend's birthday where the occasion calls for something that goes beyond the standard — red velvet with red roses is the answer. The visual coherence of the two together is striking: red velvet's crimson and cream against the deep red of long-stem roses creates a gift tableau that photographs beautifully and communicates romance unmistakably.</p>

<h2>When Red Velvet Is the Right Choice</h2>
<p>Anniversary — especially milestone years — where chocolate feels standard but red velvet feels elevated. Valentine's Day midnight delivery with 24 red roses. A girlfriend's birthday where the gift should say "I took this seriously." A wife who specifically loves cream cheese frosting — a choice that shows you know her tastes. Red velvet is not the universally safe choice — it is the specifically right choice for romantic occasions where you want to signal that you thought about it.</p>`,
  faqs: [
    { question: "Why is red velvet paired with red roses for anniversaries?", answer: "Red velvet and red roses share a colour palette (deep crimson) and a tone (romantic, luxurious, intense). Together they create a visually and emotionally coherent anniversary gift that communicates romance more powerfully than either element alone." },
    { question: "What does red velvet cake taste like?", answer: "Red velvet has a mild cocoa flavour with vanilla undertones and a slight tang from the cream cheese frosting. It is less intensely chocolatey than truffle but richer and more complex than a standard vanilla cake." },
    { question: "Can I get red velvet cake delivered at midnight for an anniversary?", answer: "Yes. RedHeart offers midnight delivery — perfect for anniversary surprises. The red roses and red velvet combination at midnight is the most popular anniversary gift on RedHeart." },
    { question: "Can I get red velvet cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh red velvet cakes the same day across 830+ cities in India." },
    { question: "Is red velvet cake eggless available?", answer: "Yes. RedHeart offers eggless red velvet cake options — same deep crimson colour, same cream cheese frosting, prepared without eggs for vegetarian and Jain recipients." },
  ],
},

{
  pageKey: "cakes/butterscotch",
  categorySlug: "cakes", subcategorySlug: "butterscotch", url: "/cakes/butterscotch",
  h1: "Butterscotch Cake Delivery", defaultH1: "Butterscotch Cake Delivery",
  metaTitle: "Butterscotch Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh butterscotch cakes online with same-day delivery across 830+ cities in India. Caramel, cream & crunch from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/butterscotch",
  metaKeyword: "butterscotch cake online India, order butterscotch cake, butterscotch cake delivery, same day butterscotch cake India",
  footerContent: `
<h2>Butterscotch Cake — The Sweet, Nostalgic Favourite</h2>
<p>Butterscotch cake holds a special place in Indian birthday culture. It is the cake that many people over a certain age associate with their first "fancy" birthday — the warm golden sponge, the caramel-sweet cream, and the satisfying crunch of butterscotch crumbles on top. It is comfortable, joyful, and distinctly Indian in its popularity. For a recipient who loves warm, sweet flavours — or who carries the nostalgia of butterscotch birthdays past — it is the most personally meaningful choice. RedHeart delivers fresh butterscotch cakes across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Butterscotch Cake — Flavour Profile</h2>
<table>
  <thead><tr><th>Component</th><th>Character</th></tr></thead>
  <tbody>
    <tr><td>Sponge</td><td>Golden, light, with warm caramel undertones</td></tr>
    <tr><td>Cream</td><td>Butterscotch-flavoured fresh cream — sweet and rich</td></tr>
    <tr><td>Crumble</td><td>Crunchy butterscotch chips on top — the textural highlight</td></tr>
    <tr><td>Overall flavour</td><td>Sweet, warm, caramel-rich — comforting and nostalgic</td></tr>
    <tr><td>Best for</td><td>Birthdays for parents, grandparents, childhood friends — anyone with butterscotch nostalgia</td></tr>
  </tbody>
</table>

<h2>When Butterscotch Is the Right Choice</h2>
<p>Butterscotch works perfectly for recipients who love sweet, warm flavours over intense dark chocolate. For a parent's birthday, a butterscotch cake signals thoughtfulness — you remembered their preference. For a corporate team celebration where the palette is mixed, butterscotch is reliably appreciated. For someone who specifically grew up with butterscotch birthday cakes, receiving one from a friend or partner is a nostalgic, warm surprise.</p>`,
  faqs: [
    { question: "What does butterscotch cake taste like?", answer: "Butterscotch cake has a warm, sweet caramel flavour — lighter and more comforting than dark chocolate, richer and more indulgent than plain vanilla. The crunchy butterscotch crumble topping adds texture." },
    { question: "Is butterscotch cake popular in India?", answer: "Yes. Butterscotch is one of the top five most popular cake flavours in India, particularly popular for parents' birthdays, team celebrations, and recipients who prefer sweet over intensely chocolatey." },
    { question: "Can I get butterscotch cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh butterscotch cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/pineapple",
  categorySlug: "cakes", subcategorySlug: "pineapple", url: "/cakes/pineapple",
  h1: "Pineapple Cake Delivery", defaultH1: "Pineapple Cake Delivery",
  metaTitle: "Pineapple Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh pineapple cakes online with same-day delivery across 830+ cities in India. Light, fruity & cream-layered cakes from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/pineapple",
  metaKeyword: "pineapple cake online India, order pineapple cake, pineapple cake delivery, same day pineapple cake India",
  footerContent: `
<h2>Pineapple Cake — Light, Fruity, and Universally Appreciated</h2>
<p>Pineapple cake is India's lightest and most refreshing celebration cake — the ideal choice for recipients who prefer fruity freshness over rich chocolate or heavy cream. Its vanilla sponge layers soaked in pineapple syrup, cream cheese or fresh cream frosting, and pineapple chunks deliver a flavour that is bright, clean, and universally accessible. For summer birthdays, office celebrations with diverse palates, and recipients who specifically love fruity flavours — pineapple is the right choice. RedHeart delivers fresh pineapple cakes across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>When Pineapple Cake Works Best</h2>
<table>
  <thead><tr><th>Situation</th><th>Why Pineapple Works</th></tr></thead>
  <tbody>
    <tr><td>Summer birthdays</td><td>Light and refreshing — perfect for the heat</td></tr>
    <tr><td>Office celebration</td><td>Crowd-pleasing, not intense — suits diverse palates</td></tr>
    <tr><td>Recipients who don't love chocolate</td><td>The most popular non-chocolate option in India</td></tr>
    <tr><td>Children's birthdays</td><td>Light, sweet, not intense — widely loved by kids</td></tr>
    <tr><td>Elderly recipients</td><td>Light texture, not overly rich — more comfortable for older palates</td></tr>
  </tbody>
</table>

<p>Pineapple is the most popular non-chocolate cake flavour in India. For corporate gifting where dietary preferences are diverse, for children's parties where lighter flavours are preferred, and for recipients who specifically avoid chocolate — pineapple is the universal second choice that almost always works.</p>`,
  faqs: [
    { question: "Is pineapple cake suitable for people who don't like chocolate?", answer: "Yes. Pineapple is the most popular non-chocolate cake flavour in India — the natural alternative for recipients who prefer fruity, lighter flavours over chocolate intensity." },
    { question: "Is pineapple cake good for office celebrations?", answer: "Yes. Pineapple is one of the safest office cake choices — light, universally accessible, and not intensely flavoured. It suits the widest range of adult palates." },
    { question: "Can I get pineapple cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh pineapple cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/vanilla",
  categorySlug: "cakes", subcategorySlug: "vanilla", url: "/cakes/vanilla",
  h1: "Vanilla Cake Delivery", defaultH1: "Vanilla Cake Delivery",
  metaTitle: "Vanilla Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh vanilla cakes online with same-day delivery across 830+ cities in India. Classic, elegant & customisable from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/vanilla",
  metaKeyword: "vanilla cake online India, order vanilla cake, vanilla cake delivery India, same day vanilla cake India, plain vanilla cake online",
  footerContent: `
<h2>Vanilla Cake — Classic, Elegant, and Endlessly Versatile</h2>
<p>Vanilla cake is the canvas on which every celebration is painted. Its clean, warm flavour is the foundation of countless customised cakes — the sponge that holds custom designs, edible prints, fondant decorations, and personalised messages. A plain vanilla cake with fresh cream and strawberries is quietly perfect. A vanilla cake customised with a photo or a message becomes a deeply personal gift. RedHeart delivers fresh vanilla cakes across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Vanilla Cake Variations</h2>
<table>
  <thead><tr><th>Type</th><th>Description</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Classic vanilla cream</td><td>Vanilla sponge with fresh cream frosting</td><td>Children's birthdays, simple celebrations</td></tr>
    <tr><td>Vanilla with strawberry</td><td>Fresh strawberries layered with vanilla cream</td><td>Summer birthdays, feminine gifting</td></tr>
    <tr><td>Vanilla with fruit</td><td>Mixed fresh fruit — bright and light</td><td>Birthday, healthy-preference gifting</td></tr>
    <tr><td>Custom vanilla</td><td>Vanilla base with custom decoration/message</td><td>Personalised gifting, first birthdays</td></tr>
    <tr><td>Photo cake</td><td>Edible photo print on vanilla base</td><td>Milestone birthdays, anniversaries</td></tr>
  </tbody>
</table>

<p>Vanilla is the most customisation-friendly cake flavour. For recipients who prefer lighter, less intense flavours — or for first birthdays and children's celebrations where the decoration matters as much as the taste — vanilla provides the ideal base.</p>`,
  faqs: [
    { question: "Is vanilla cake customisable with a photo?", answer: "Yes. Vanilla cake is one of the most popular choices for photo cakes — the light-coloured frosting makes the edible photo print most visible and vibrant." },
    { question: "Who is vanilla cake best for?", answer: "Vanilla cake suits children's birthdays (light flavour, customisable decoration), recipients who prefer lighter flavours, first birthday celebrations, and anyone who wants a cake that is elegant rather than intense." },
    { question: "Can I get vanilla cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh vanilla cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/truffle",
  categorySlug: "cakes", subcategorySlug: "truffle", url: "/cakes/truffle",
  h1: "Truffle Cake Delivery", defaultH1: "Truffle Cake Delivery",
  metaTitle: "Truffle Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh chocolate truffle cakes online with same-day delivery across 830+ cities in India. Rich ganache & dark chocolate from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/truffle",
  metaKeyword: "truffle cake online India, chocolate truffle cake delivery, order truffle cake, same day truffle cake India, dark chocolate truffle cake",
  footerContent: `
<h2>Chocolate Truffle Cake — Rich, Dark, and Indulgent</h2>
<p>Chocolate truffle cake is the premium end of chocolate cake gifting — richer, denser, and more intensely chocolatey than a standard chocolate cake. The dark ganache coating, the moist truffle sponge layers, and the deep cocoa flavour make it the choice for recipients who love their chocolate serious and their celebrations unapologetic. It is the birthday cake for chocolate purists, the anniversary cake for couples who appreciate depth, and the corporate gifting choice that signals quality. RedHeart delivers fresh chocolate truffle cakes across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>What Sets Truffle Cake Apart</h2>
<table>
  <thead><tr><th>Feature</th><th>Truffle Cake</th><th>Standard Chocolate Cake</th></tr></thead>
  <tbody>
    <tr><td>Sponge density</td><td>Dense, moist, fudgy</td><td>Lighter, softer</td></tr>
    <tr><td>Chocolate intensity</td><td>High — dark, deep cocoa flavour</td><td>Moderate</td></tr>
    <tr><td>Frosting</td><td>Dark ganache — smooth, glossy</td><td>Chocolate cream or buttercream</td></tr>
    <tr><td>Visual finish</td><td>Glossy dark ganache — highly presentable</td><td>Standard finish</td></tr>
    <tr><td>Best for</td><td>Adults who love intense chocolate</td><td>Universal — all ages</td></tr>
  </tbody>
</table>

<p>Chocolate truffle is the most ordered cake for adult birthdays on RedHeart. For a chocolate lover's birthday, anniversary, or as a premium gifting choice, it is the unambiguously right choice.</p>`,
  faqs: [
    { question: "What is the difference between chocolate cake and chocolate truffle cake?", answer: "Chocolate truffle cake has a denser, more intensely chocolatey sponge with a dark ganache coating — richer and more indulgent than a standard chocolate cream cake. It is the premium version of chocolate cake." },
    { question: "Is truffle cake better for adults or children?", answer: "Truffle cake's intense dark chocolate flavour is best appreciated by adults. For children's birthdays, a standard chocolate or butterscotch cake is often preferred — less intense, more accessible." },
    { question: "Can I get truffle cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh chocolate truffle cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/strawberry",
  categorySlug: "cakes", subcategorySlug: "strawberry", url: "/cakes/strawberry",
  h1: "Strawberry Cake Delivery", defaultH1: "Strawberry Cake Delivery",
  metaTitle: "Strawberry Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh strawberry cakes online with same-day delivery across 830+ cities in India. Fresh cream & berries from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/strawberry",
  metaKeyword: "strawberry cake online India, order strawberry cake, strawberry cake delivery, same day strawberry cake India",
  footerContent: `
<h2>Strawberry Cake — Fresh, Vibrant, and Beautifully Pink</h2>
<p>Strawberry cake is the most visually beautiful of the fruity cake options — its fresh strawberries, pink hues, and light cream create a cake that looks as good as it tastes. For birthdays for women, Valentine's Day, Mother's Day, or any occasion where the aesthetic of the cake matters as much as its flavour, strawberry is the most striking choice. RedHeart delivers fresh strawberry cakes across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Strawberry Cake — Key Appeal</h2>
<table>
  <thead><tr><th>Feature</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>Visual appeal</td><td>Fresh whole strawberries on cream — naturally beautiful</td></tr>
    <tr><td>Colour tone</td><td>Soft pinks and reds — feminine and celebratory</td></tr>
    <tr><td>Flavour</td><td>Light vanilla sponge with fresh strawberry cream — sweet-tart balance</td></tr>
    <tr><td>Best pairing</td><td>Pink roses — the most coherent colour-matched gift combination</td></tr>
    <tr><td>Best for</td><td>Women's birthdays, Valentine's Day, Mother's Day</td></tr>
  </tbody>
</table>

<p>Strawberry cake paired with pink roses is a natural combination — the pink tones of the strawberries and the roses create a visually unified gift. For a girlfriend's birthday or Mother's Day, this combination is among the most aesthetically pleasing available.</p>`,
  faqs: [
    { question: "What occasion is strawberry cake best for?", answer: "Strawberry cake is best for women's birthdays, Valentine's Day, Mother's Day, and any occasion where visual beauty matters as much as flavour. Its natural pink tones and fresh berry decoration make it one of the most beautiful celebration cakes available." },
    { question: "What flowers pair with strawberry cake?", answer: "Pink roses pair beautifully with strawberry cake — the pink tones of both create a visually unified, feminine gift combination." },
    { question: "Can I get strawberry cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh strawberry cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/mango",
  categorySlug: "cakes", subcategorySlug: "mango", url: "/cakes/mango",
  h1: "Mango Cake Delivery", defaultH1: "Mango Cake Delivery",
  metaTitle: "Mango Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh mango cakes online with same-day delivery across 830+ cities in India. Fresh mango cream & sponge from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/mango",
  metaKeyword: "mango cake online India, order mango cake, mango cake delivery India, same day mango cake, fresh mango cake India",
  footerContent: `
<h2>Mango Cake — India's Favourite Fruit as the King of Celebration</h2>
<p>India is the world's largest mango-producing country, and the mango occupies a place of cultural affection that no other fruit can match. A fresh mango cake — real mango pulp, mango cream, mango sponge — is a celebration of the fruit that Indians love most, in the most celebratory form available. For summer birthdays, Diwali gifting, and recipients who are passionate about mangoes, a mango cake is both delicious and culturally resonant. RedHeart delivers fresh mango cakes across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Mango Cake — Varieties and Styles</h2>
<table>
  <thead><tr><th>Style</th><th>Description</th><th>Best For</th></tr></thead>
  <tbody>
    <tr><td>Mango cream cake</td><td>Light sponge with mango cream frosting and fresh mango pieces</td><td>Summer birthdays, general celebration</td></tr>
    <tr><td>Alphonso mango</td><td>Premium Alphonso pulp — the richest mango flavour</td><td>Premium gifting, mango enthusiasts</td></tr>
    <tr><td>Mango cheesecake</td><td>Mango cream cheese — rich, tangy, cool</td><td>Adults, premium birthdays</td></tr>
    <tr><td>Mango with chocolate</td><td>Chocolate base with mango cream — sweet contrast</td><td>Birthday, fusion flavour lovers</td></tr>
  </tbody>
</table>

<p>Mango cake is most popular during the summer months (March–June) when fresh mango availability is at its peak and mango season is associated with celebration across India. A mango cake delivered for a summer birthday is one of the most seasonally appropriate gifting choices available.</p>`,
  faqs: [
    { question: "Is mango cake seasonal in India?", answer: "While available year-round on RedHeart, mango cake is most popular during the summer season (March–June) when fresh mangoes are in peak season. Alphonso mango cakes in particular are a seasonal favourite." },
    { question: "What type of mango is best in a mango cake?", answer: "Alphonso (Hapus) mango is the premium choice — its intense flavour and rich colour make the most impressive mango cake. Kesar and Totapuri are popular alternatives." },
    { question: "Can I get mango cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh mango cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/pinata",
  categorySlug: "cakes", subcategorySlug: "pinata", url: "/cakes/pinata",
  h1: "Pinata Cake Delivery", defaultH1: "Pinata Cake Delivery",
  metaTitle: "Pinata Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh pinata cakes online with same-day delivery across 830+ cities in India. Smashable chocolate shell with candies from ₹499. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/pinata",
  metaKeyword: "pinata cake online India, order pinata cake, smash cake India, pinata cake delivery, same day pinata cake India",
  footerContent: `
<h2>Pinata Cake — The Most Fun Birthday Cake in India</h2>
<p>The pinata cake is the most viral, most fun, and most memorable birthday cake experience available. A hollow chocolate shell exterior that you smash with a small hammer — revealing a cascade of candies, chocolates, and sprinkles hidden inside. When the cake is brought out, the room erupts. When the recipient smashes it open, the reaction is always the same: pure delight. RedHeart delivers fresh pinata cakes across 830+ cities in India with same-day delivery, starting at ₹499.</p>

<h2>How the Pinata Cake Experience Works</h2>
<table>
  <thead><tr><th>Step</th><th>What Happens</th></tr></thead>
  <tbody>
    <tr><td>Arrival</td><td>Cake arrives with small chocolate hammer or mallet</td></tr>
    <tr><td>Presentation</td><td>Chocolate shell is placed on a board or tray</td></tr>
    <tr><td>The smash</td><td>Recipient uses hammer to crack the chocolate shell</td></tr>
    <tr><td>The reveal</td><td>Candies, chocolates, and treats pour out from inside</td></tr>
    <tr><td>The moment</td><td>Pure joy — the most photographed cake moment of any birthday</td></tr>
  </tbody>
</table>

<h2>Who Pinata Cake Works For</h2>
<p>Pinata cakes are the most popular birthday cake for children under 15 — the smashing element creates a play-based birthday experience that no other cake can match. But pinata cakes are also increasingly popular for adult birthdays, bachelorette parties, and group celebrations where the interaction and fun of smashing the cake creates a shared moment of laughter. For a birthday party, the pinata cake is not just a cake — it is an event.</p>

<h2>Pinata Cake Fillings</h2>
<p>Standard pinata cakes are filled with a mix of small candies and chocolates — M&Ms, Gems, Kit Kat pieces, and similar treats. Premium pinata cakes can be filled with Ferrero Rocher, mini Dairy Milk, macarons, or custom candy combinations. For a child's birthday, the standard mix is universally exciting. For an adult birthday party, a premium chocolate filling makes the reveal even more indulgent.</p>`,
  faqs: [
    { question: "What is inside a pinata cake?", answer: "Standard pinata cakes contain a mix of small candies, chocolates, and treats — Gems, M&Ms, Kit Kat pieces, and similar. Premium versions are filled with Ferrero Rocher, mini Dairy Milk bars, or custom chocolate selections." },
    { question: "Is a pinata cake suitable for adults?", answer: "Yes. Pinata cakes are increasingly popular for adult birthdays, bachelorette parties, and group celebrations. The smashing experience creates a fun shared moment that works for any age group." },
    { question: "How do you eat a pinata cake?", answer: "First, place the chocolate shell on a tray and use the provided hammer to crack it open — the candies and treats inside pour out. Then the chocolate shell pieces and the treats are eaten together. It's an experience, not just a cake." },
    { question: "Can I get pinata cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh pinata cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/ferrero-rocher",
  categorySlug: "cakes", subcategorySlug: "ferrero-rocher", url: "/cakes/ferrero-rocher",
  h1: "Ferrero Rocher Cake Delivery", defaultH1: "Ferrero Rocher Cake Delivery",
  metaTitle: "Ferrero Rocher Cake Online – Same-Day Delivery | RedHeart",
  metaDescription: "Order fresh Ferrero Rocher cakes online with same-day delivery across 830+ cities in India. Hazelnut, chocolate & Ferrero decoration from ₹599. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/ferrero-rocher",
  metaKeyword: "Ferrero Rocher cake online India, order Ferrero cake, Ferrero Rocher cake delivery, premium cake India, same day Ferrero Rocher cake",
  footerContent: `
<h2>Ferrero Rocher Cake — Premium Gifting in Cake Form</h2>
<p>A Ferrero Rocher cake is the most premium and gift-appropriate cake available on RedHeart. The chocolate hazelnut sponge, the Nutella or praline cream filling, and the signature Ferrero Rocher chocolates placed on top create a cake that looks like a luxury gift and tastes like one. When someone receives a Ferrero Rocher cake, the message is clear: this occasion mattered enough to choose the best option available. RedHeart delivers fresh Ferrero Rocher cakes across 830+ cities in India with same-day delivery, starting at ₹599.</p>

<h2>Why Ferrero Rocher Cake Is Special</h2>
<table>
  <thead><tr><th>Feature</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>Sponge</td><td>Chocolate hazelnut — rich and nutty</td></tr>
    <tr><td>Filling</td><td>Nutella / praline cream — the iconic hazelnut flavour</td></tr>
    <tr><td>Decoration</td><td>Real Ferrero Rocher chocolates on top — immediately recognisable luxury</td></tr>
    <tr><td>Visual impact</td><td>Gold Ferrero wrappers on dark ganache — premium visual</td></tr>
    <tr><td>Gifting signal</td><td>"This is a premium choice" — immediately communicated</td></tr>
  </tbody>
</table>

<h2>Ferrero Rocher Cake Paired with Flowers</h2>
<p>A Ferrero Rocher cake paired with a red roses bouquet is one of the most premium anniversary and Valentine's Day gift combinations available. The gold of the Ferrero wrappers and the deep red of the roses create a luxurious visual pairing that signals "I chose the best things I could find, specifically for you." For a girlfriend's milestone birthday, a wife's anniversary, or any occasion where the gift needs to signal genuine effort and quality — Ferrero Rocher cake with red roses is the answer.</p>`,
  faqs: [
    { question: "What makes Ferrero Rocher cake premium?", answer: "Real Ferrero Rocher chocolates as decoration, Nutella/praline cream filling, and a chocolate hazelnut sponge make this the most premium cake option. It is immediately recognisable as a high-quality, thoughtful choice." },
    { question: "What flowers pair with Ferrero Rocher cake?", answer: "Red roses with Ferrero Rocher cake is the most popular premium gift combination — the gold Ferrero wrappers and deep red roses create a luxurious visual pairing." },
    { question: "Can I get Ferrero Rocher cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh Ferrero Rocher cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/kitkat",
  categorySlug: "cakes", subcategorySlug: "kitkat", url: "/cakes/kitkat",
  h1: "KitKat Cake Delivery", defaultH1: "KitKat Cake Delivery",
  metaTitle: "KitKat Cake Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh KitKat cakes online with same-day delivery across 830+ cities in India. KitKat border & chocolate sponge from ₹499. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/kitkat",
  metaKeyword: "KitKat cake online India, order KitKat cake, KitKat cake delivery India, same day KitKat cake, chocolate KitKat birthday cake",
  footerContent: `
<h2>KitKat Cake — The Fun, Photogenic Birthday Favourite</h2>
<p>A KitKat cake — chocolate sponge wrapped in a fence of KitKat bars and topped with colourful M&Ms or chocolates — is one of the most visually distinctive and fun birthday cake choices available. It photographs beautifully, it tastes delicious, and it communicates a playful, joyful birthday energy that standard cakes do not. For younger birthdays, fun-loving adults, and anyone who loves the KitKat bar — this cake is a reliably joyful choice. RedHeart delivers fresh KitKat cakes across 830+ cities in India with same-day delivery, starting at ₹499.</p>

<h2>What a KitKat Cake Looks Like</h2>
<p>The signature KitKat cake has a chocolate sponge base with chocolate ganache or cream frosting. Around the outside of the cake, full KitKat bars are placed vertically, creating a distinctive chocolate fence. The top of the cake is typically filled with M&Ms, Gems, mini Dairy Milk bars, or other colourful chocolates — creating a colourful, overflowing appearance that looks abundant and celebratory. The whole cake is often tied with a ribbon to hold the KitKat fence in place.</p>

<h2>Who KitKat Cake Works For</h2>
<table>
  <thead><tr><th>Recipient</th><th>Why It Works</th></tr></thead>
  <tbody>
    <tr><td>Kids and teenagers</td><td>Fun, interactive, colourful — immediately exciting</td></tr>
    <tr><td>Adults who love KitKat</td><td>Nostalgic and personal — their favourite chocolate as a cake</td></tr>
    <tr><td>Friend group birthdays</td><td>The visual impact creates a shared birthday moment</td></tr>
    <tr><td>Office birthday</td><td>Fun and communal — the entire office wants a piece</td></tr>
  </tbody>
</table>`,
  faqs: [
    { question: "What is a KitKat cake?", answer: "A KitKat cake has a chocolate sponge base surrounded by a fence of KitKat bars, topped with colourful M&Ms or chocolates. It is as visually striking as it is delicious." },
    { question: "Can I get KitKat cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh KitKat cakes the same day across 830+ cities in India." },
    { question: "Is KitKat cake good for a child's birthday?", answer: "Yes. KitKat cakes are a very popular choice for children's birthdays — the colourful topping and chocolate fence create an exciting visual that children immediately love." },
  ],
},

// ── OCCASION PAGES ────────────────────────────────────────────────────────

{
  pageKey: "cakes/birthday",
  categorySlug: "cakes", subcategorySlug: "birthday", url: "/cakes/birthday",
  h1: "Birthday Cake Delivery", defaultH1: "Birthday Cake Delivery",
  metaTitle: "Birthday Cakes Online – Same-Day & Midnight Delivery | RedHeart",
  metaDescription: "Order fresh birthday cakes online with same-day & midnight delivery across 830+ cities in India. Chocolate, black forest, pinata from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/birthday",
  metaKeyword: "birthday cakes online India, order birthday cake, same day birthday cake delivery, midnight birthday cake India, custom birthday cake online",
  footerContent: `
<h2>Birthday Cakes — The Centrepiece of Every Birthday Celebration</h2>
<p>A birthday without a cake is just a day. The cake is the moment — the candles, the song, the anticipation, and the joy of cutting through something prepared specifically for this occasion. For birthdays celebrated across distance, a freshly delivered birthday cake is the most tangible evidence that the occasion was genuinely marked. RedHeart delivers fresh birthday cakes across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Birthday Cake Guide by Recipient</h2>
<table>
  <thead><tr><th>Recipient</th><th>Best Cake Choice</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Child / kid</td><td>Pinata cake or colourful KitKat cake</td><td>Fun, interactive, visually exciting</td></tr>
    <tr><td>Teenage girl</td><td>Strawberry or red velvet</td><td>Pink tones, beautiful presentation</td></tr>
    <tr><td>Teenage boy</td><td>Chocolate truffle or KitKat</td><td>Rich chocolate — consistently appreciated</td></tr>
    <tr><td>Girlfriend / Wife</td><td>Red velvet or strawberry</td><td>Romantic and visually beautiful</td></tr>
    <tr><td>Boyfriend / Husband</td><td>Chocolate truffle or Ferrero Rocher</td><td>Rich, premium, adult chocolate</td></tr>
    <tr><td>Mother</td><td>Butterscotch or black forest</td><td>Nostalgic favourites for mothers</td></tr>
    <tr><td>Father</td><td>Chocolate truffle or black forest</td><td>Classic, reliably right</td></tr>
    <tr><td>Best friend</td><td>Their favourite — or a fun pinata</td><td>Personal or experiential — both work</td></tr>
    <tr><td>Colleague</td><td>Pineapple or butterscotch</td><td>Safe, crowd-pleasing, professional</td></tr>
  </tbody>
</table>

<h2>The Midnight Birthday Cake — Why It Works</h2>
<p>A birthday begins at midnight. A midnight cake delivery means the birthday starts with something real arriving at the door — not just a message on a phone. For a partner's birthday, a best friend in another city, or a parent's milestone celebration, a midnight cake delivery is the most emotionally impactful timing available. The freshness of the cake is maintained because it is prepared on the day of delivery — midnight delivery does not mean a cake baked the previous day.</p>

<h2>Custom Birthday Cakes</h2>
<p>A custom birthday cake — with the recipient's name, a photo, a favourite character, or a personalised message — transforms a celebration cake into a specifically made gift. Photo cakes use edible printing to add any image to the cake surface. Custom message cakes add personal text in icing. Themed cakes — based on favourite characters, sports teams, or interests — make the birthday recipient feel specifically seen. RedHeart's custom birthday cake options allow personalisation at checkout.</p>`,
  faqs: [
    { question: "What is the most popular birthday cake in India?", answer: "Chocolate truffle is the most ordered birthday cake in India, followed by black forest and red velvet. Pinata cakes are the fastest growing birthday cake trend, especially for parties and group celebrations." },
    { question: "Can I get a custom birthday cake delivered in India?", answer: "Yes. RedHeart offers personalised birthday cakes with custom messages, photo cakes with edible image printing, and theme cakes. Customisation can be selected at checkout." },
    { question: "Can I arrange midnight birthday cake delivery?", answer: "Yes. RedHeart delivers birthday cakes at midnight across hundreds of Indian cities. The cake is prepared fresh on the day of delivery and arrives at exactly 12 AM." },
    { question: "What birthday cake is best for a 5-year-old?", answer: "A pinata cake or a colourful KitKat cake are the most exciting choices for young children — fun, interactive, and visually striking. A colourful photo cake with their favourite character is also very popular." },
    { question: "Can I order birthday cake same day in India?", answer: "Yes. RedHeart delivers fresh birthday cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/anniversary",
  categorySlug: "cakes", subcategorySlug: "anniversary", url: "/cakes/anniversary",
  h1: "Anniversary Cake Delivery", defaultH1: "Anniversary Cake Delivery",
  metaTitle: "Anniversary Cakes Online – Midnight Delivery India | RedHeart",
  metaDescription: "Order fresh anniversary cakes online with midnight & same-day delivery across 830+ cities in India. Red velvet, truffle from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/anniversary",
  metaKeyword: "anniversary cake online India, order anniversary cake, same day anniversary cake delivery, midnight anniversary cake India, red velvet anniversary cake",
  footerContent: `
<h2>Anniversary Cake — Marking the Year With Something Extraordinary</h2>
<p>An anniversary calls for a cake that is worthy of the occasion. Not the safe birthday default — the specifically right choice for a day that marks a year of shared life. The cake you choose for an anniversary should reflect the care with which you chose everything else for the day. RedHeart delivers fresh anniversary cakes across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Best Anniversary Cakes by Occasion Tone</h2>
<table>
  <thead><tr><th>Anniversary Mood</th><th>Best Cake</th><th>Paired With</th></tr></thead>
  <tbody>
    <tr><td>Deeply romantic</td><td>Red velvet with cream cheese</td><td>24 red roses — the most romantic combination</td></tr>
    <tr><td>Premium and luxurious</td><td>Ferrero Rocher cake</td><td>Roses-and-lily — the gold-standard pairing</td></tr>
    <tr><td>Intensely chocolatey</td><td>Dark chocolate truffle</td><td>Red roses — classic and powerful</td></tr>
    <tr><td>Elegant and classic</td><td>Black forest</td><td>White lilies — sophisticated and timeless</td></tr>
    <tr><td>Light and celebratory</td><td>Butterscotch or pineapple</td><td>Mixed vibrant bouquet</td></tr>
  </tbody>
</table>

<h2>The Anniversary Midnight Cake and Roses</h2>
<p>The most romantic anniversary gifting combination: red velvet cake with 24 red roses, delivered at midnight. The cake arrives at the very start of the anniversary day — at exactly 12 AM — alongside the roses. The deep crimson of both, the freshness of both, and the clear intention behind a midnight delivery that arrives before any other anniversary gesture creates the most romantic possible start to the day. RedHeart's midnight anniversary delivery service is available across hundreds of Indian cities. Book at least a week ahead to guarantee the midnight slot.</p>`,
  faqs: [
    { question: "What is the most romantic anniversary cake?", answer: "Red velvet cake is considered the most romantic anniversary cake — its deep crimson and cream cheese frosting paired with red roses creates the most visually coherent and emotionally powerful anniversary gift combination." },
    { question: "Can I arrange midnight anniversary cake delivery?", answer: "Yes. RedHeart delivers anniversary cakes at midnight across hundreds of Indian cities. Book at least a week ahead to guarantee the midnight delivery slot." },
    { question: "What cake goes best with red roses for an anniversary?", answer: "Red velvet cake is the most popular anniversary pairing with red roses — matching colour tones, matching luxury. Dark chocolate truffle is the best non-red-velvet alternative." },
    { question: "Can I get anniversary cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh anniversary cakes the same day across 830+ cities in India." },
  ],
},

{
  pageKey: "cakes/for-her",
  categorySlug: "cakes", subcategorySlug: "for-her", url: "/cakes/for-her",
  h1: "Cake for Her Delivery", defaultH1: "Cake for Her Delivery",
  metaTitle: "Cakes for Her Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh cakes for her online with same-day delivery across 830+ cities in India. Red velvet, strawberry & Ferrero Rocher from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/for-her",
  metaKeyword: "cakes for her India, send cake to her, cake for girlfriend birthday, cake for wife anniversary, cake for women India, same day cake for her",
  footerContent: `
<h2>The Perfect Cake for Her — Beautiful, Delicious, and Specifically Chosen</h2>
<p>Choosing a cake for the women in your life — a girlfriend, wife, mother, sister, or best friend — requires more thought than the default chocolate box. The right cake for her communicates that you know her tastes, her aesthetics, and what she finds genuinely indulgent. RedHeart delivers fresh cakes for her across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Best Cakes for Her by Relationship</h2>
<table>
  <thead><tr><th>Recipient</th><th>Best Cake</th><th>Paired With</th></tr></thead>
  <tbody>
    <tr><td>Girlfriend (birthday)</td><td>Red velvet or strawberry</td><td>Pink roses or red roses</td></tr>
    <tr><td>Wife (anniversary)</td><td>Red velvet</td><td>24 red roses — midnight delivery</td></tr>
    <tr><td>Wife (birthday)</td><td>Her favourite or Ferrero Rocher</td><td>Roses-and-lily for premium impact</td></tr>
    <tr><td>Mother (birthday)</td><td>Butterscotch or black forest</td><td>Pink carnations or pink roses</td></tr>
    <tr><td>Sister (birthday)</td><td>Black forest or strawberry</td><td>Pink roses or mixed bright</td></tr>
    <tr><td>Best friend (birthday)</td><td>Pinata or her favourite</td><td>Vibrant mixed bouquet</td></tr>
  </tbody>
</table>

<h2>The Cake and Flowers Combination for Her</h2>
<p>A cake-and-flowers combination is the most complete gift for her. The flowers create the emotional impact — beautiful, fragrant, visible evidence of thoughtfulness. The cake creates the celebration — something to enjoy in the moment, to share if she chooses, to make the occasion tangible. Together, they cover the full range of what a birthday, anniversary, or special occasion should feel like. The most popular combination for her on RedHeart: red velvet cake with pink or red roses.</p>`,
  faqs: [
    { question: "What cake is most popular for a girlfriend's birthday?", answer: "Red velvet cake is the most romantic choice for a girlfriend's birthday — its deep crimson and cream cheese frosting pair beautifully with red or pink roses. Strawberry cake is the most visually feminine alternative." },
    { question: "What cake is best for a mother's birthday?", answer: "Butterscotch and black forest are the most popular choices for a mother's birthday — nostalgic, warmly flavoured, and reliably appreciated. Paired with pink carnations for a complete Mother's Day or birthday gift." },
    { question: "Can I get a cake for her delivered same day in India?", answer: "Yes. RedHeart delivers fresh cakes for her the same day across 830+ cities in India. Midnight delivery is also available." },
  ],
},

{
  pageKey: "cakes/for-him",
  categorySlug: "cakes", subcategorySlug: "for-him", url: "/cakes/for-him",
  h1: "Cake for Him Delivery", defaultH1: "Cake for Him Delivery",
  metaTitle: "Cakes for Him Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh cakes for him online with same-day delivery across 830+ cities in India. Truffle, KitKat & Ferrero Rocher from ₹399. RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/for-him",
  metaKeyword: "cakes for him India, send cake to him, cake for boyfriend birthday, cake for husband anniversary, cake for men India, same day cake for him",
  footerContent: `
<h2>Cakes for Him — Bold, Rich, and Specifically Right</h2>
<p>Choosing a cake for the men in your life — boyfriend, husband, father, brother, best friend — calls for richness over delicacy and boldness over prettiness. A deeply chocolatey truffle, an indulgent Ferrero Rocher, a fun KitKat tower — these are the cakes that land well for men. RedHeart delivers fresh cakes for him across 830+ cities in India with same-day and midnight delivery, starting at ₹399.</p>

<h2>Best Cakes for Him by Relationship and Occasion</h2>
<table>
  <thead><tr><th>Recipient</th><th>Best Cake</th><th>Paired With</th></tr></thead>
  <tbody>
    <tr><td>Boyfriend (birthday)</td><td>Chocolate truffle or KitKat</td><td>Bold mixed bouquet or yellow roses</td></tr>
    <tr><td>Husband (anniversary)</td><td>Dark chocolate truffle</td><td>Red roses — delivered to his office</td></tr>
    <tr><td>Husband (birthday)</td><td>Ferrero Rocher or truffle</td><td>Bold mixed arrangement</td></tr>
    <tr><td>Father (birthday)</td><td>Black forest or chocolate truffle</td><td>Classic mixed bouquet or bonsai</td></tr>
    <tr><td>Brother (birthday)</td><td>Chocolate truffle or pinata</td><td>Bold mixed flowers</td></tr>
    <tr><td>Best friend male (birthday)</td><td>Truffle or KitKat or pinata</td><td>Bold mixed or sunflowers</td></tr>
  </tbody>
</table>

<h2>Office Birthday Cakes for Him</h2>
<p>Sending a cake to his office on his birthday is a gesture that makes the birthday public — his colleagues notice, they gather, and the birthday becomes a workplace event. For a boyfriend or husband at work, a large chocolate truffle cake delivered to his office on his birthday morning creates a shared celebration that makes him feel genuinely marked. For a brother or best friend, an office birthday cake delivery communicates that you made the extra effort to reach him where he spends his day.</p>`,
  faqs: [
    { question: "What cake is most popular for a boyfriend's birthday?", answer: "Chocolate truffle is the most popular birthday cake for men — rich, dark, and reliably appreciated. KitKat cake is a fun, visually distinctive alternative for playful personalities." },
    { question: "Should I send his birthday cake to his office or home?", answer: "Office delivery makes the birthday a public, shared event — colleagues notice and the celebration becomes part of his workday. Home delivery is more intimate. Office delivery on the birthday morning is usually the more impactful choice." },
    { question: "Can I get a cake for him delivered same day?", answer: "Yes. RedHeart delivers fresh cakes for him the same day across 830+ cities in India. Midnight delivery is also available." },
  ],
},

// ── SPECIAL TYPES ──────────────────────────────────────────────────────────

{
  pageKey: "cakes/eggless",
  categorySlug: "cakes", subcategorySlug: "eggless", url: "/cakes/eggless",
  h1: "Eggless Cake Delivery", defaultH1: "Eggless Cake Delivery",
  metaTitle: "Eggless Cakes Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order fresh eggless cakes online with same-day delivery across 830+ cities in India. All flavours available eggless from ₹399. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/eggless",
  metaKeyword: "eggless cake online India, order eggless cake, eggless birthday cake delivery India, same day eggless cake, vegetarian cake India",
  footerContent: `
<h2>Eggless Cakes — India's Most Important Dietary Requirement in Gifting</h2>
<p>India has one of the world's largest vegetarian populations, and eggless cakes are not a niche choice — they are a mainstream requirement. For gifting in Jain households, Hindu households that observe vegetarianism, and recipients with egg allergies or ethical preferences, an eggless cake is not merely an alternative — it is the only appropriate choice. RedHeart delivers fresh eggless cakes across 830+ cities in India with same-day delivery, starting at ₹399.</p>

<h2>Does Eggless Mean Less Delicious?</h2>
<p>No. Modern eggless baking uses alternatives — curd, flaxseed, banana, chia, and proprietary egg substitutes — that replicate the function of eggs in a cake without any compromise to flavour or texture. A well-made eggless chocolate truffle cake is indistinguishable from its egg-containing equivalent. A good baker does not compromise on quality because eggs are not used. RedHeart's eggless cakes are prepared by experienced bakers who make them a regular, mainstream speciality — not an afterthought.</p>

<h2>Eggless Cakes Available on RedHeart</h2>
<table>
  <thead><tr><th>Flavour</th><th>Available Eggless?</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Chocolate truffle</td><td>✅ Yes</td><td>Most popular eggless request</td></tr>
    <tr><td>Black forest</td><td>✅ Yes</td><td>Eggless black forest is widely available</td></tr>
    <tr><td>Red velvet</td><td>✅ Yes</td><td>Cream cheese frosting is naturally eggless</td></tr>
    <tr><td>Butterscotch</td><td>✅ Yes</td><td>Warm caramel tones unaffected by eggless preparation</td></tr>
    <tr><td>Pineapple</td><td>✅ Yes</td><td>Light sponge easily prepared eggless</td></tr>
    <tr><td>Vanilla</td><td>✅ Yes</td><td>The simplest eggless preparation</td></tr>
    <tr><td>Ferrero Rocher</td><td>✅ Yes</td><td>Available on request</td></tr>
  </tbody>
</table>`,
  faqs: [
    { question: "Is eggless cake as good as regular cake?", answer: "Yes. Modern eggless baking produces cakes that are virtually indistinguishable from egg-containing ones in flavour and texture. RedHeart's eggless cakes are prepared by experienced bakers who use reliable eggless techniques." },
    { question: "Which cake flavours are available eggless?", answer: "All major flavours are available eggless on RedHeart — chocolate truffle, black forest, red velvet, butterscotch, pineapple, vanilla, and more. Select the eggless option at checkout." },
    { question: "Can I get eggless cake delivered same day in India?", answer: "Yes. RedHeart delivers fresh eggless cakes the same day across 830+ cities in India." },
    { question: "Is eggless cake suitable for Jain recipients?", answer: "An eggless cake addresses the egg restriction, but Jain recipients may also avoid other ingredients (onion, garlic) — check with the recipient's specific dietary requirements before ordering." },
  ],
},

{
  pageKey: "cakes/photo-cake",
  categorySlug: "cakes", subcategorySlug: "photo-cake", url: "/cakes/photo-cake",
  h1: "Photo Cake Delivery", defaultH1: "Photo Cake Delivery",
  metaTitle: "Photo Cakes Online – Same-Day Delivery India | RedHeart",
  metaDescription: "Order personalised photo cakes online with same-day delivery across 830+ cities in India. Edible image printing from ₹499. Shop RedHeart.",
  canonicalUrl: "https://www.redheart.in/cakes/photo-cake",
  metaKeyword: "photo cake online India, order photo cake, personalised cake India, edible photo cake delivery, same day photo cake India",
  footerContent: `
<h2>Photo Cakes — The Most Personal Birthday Cake Available</h2>
<p>A photo cake takes a birthday cake from a beautiful gift to a specifically personal one. An edible photograph printed on the cake's surface — a couple's favourite photo for an anniversary, a child's favourite character for a birthday, a family photo for a reunion celebration — makes the cake undeniably, specifically theirs. No other customisation communicates "I made this for you" as clearly. RedHeart delivers fresh personalised photo cakes across 830+ cities in India with same-day delivery, starting at ₹499.</p>

<h2>What is Edible Photo Printing?</h2>
<p>Edible photo printing uses food-safe edible inks printed onto an edible substrate (typically a wafer sheet or sugar sheet) that is then placed on the cake's surface. The result is a photograph that is fully safe to eat and looks as clear and detailed as a regular print. Colours are accurate and the image is stable — it does not bleed, fade, or crack under normal conditions. The photo cake looks impressive, photographs beautifully, and tastes like a regular cake.</p>

<h2>Best Uses for Photo Cakes</h2>
<table>
  <thead><tr><th>Occasion</th><th>Best Photo</th><th>Why</th></tr></thead>
  <tbody>
    <tr><td>Birthday</td><td>Recipient's favourite photo or childhood photo</td><td>Personal, nostalgic, specifically theirs</td></tr>
    <tr><td>Anniversary</td><td>Couple photo from their wedding or first trip together</td><td>Romantic, shared memory, deeply personal</td></tr>
    <tr><td>Farewell</td><td>Team photo or memorable work moment</td><td>Shared memory becomes a shared celebration</td></tr>
    <tr><td>Baby shower</td><td>Ultrasound image or nursery theme</td><td>Milestone-marking, deeply meaningful</td></tr>
    <tr><td>Retirement</td><td>Career milestone photo</td><td>Honours the specific journey</td></tr>
  </tbody>
</table>`,
  faqs: [
    { question: "Is edible photo printing safe to eat?", answer: "Yes. All RedHeart photo cakes use food-safe edible inks and edible substrates — fully safe to eat, no different from the rest of the cake." },
    { question: "How do I place a photo cake order?", answer: "Upload your photo at checkout. The image will be reviewed for print quality — clear, high-resolution images produce the best results. Processing typically adds minimal preparation time." },
    { question: "Can I get a photo cake delivered same day?", answer: "Yes, for high-quality images that do not require adjustment. RedHeart delivers photo cakes the same day across 830+ cities in India." },
    { question: "What image resolution is needed for a photo cake?", answer: "A minimum of 800x800 pixels is recommended for a clear, sharp edible print. Higher resolution images produce noticeably better results." },
  ],
},

];

async function upload() {
  console.log(`Uploading ${pages.length} cake subcategory pages...\n`);
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
